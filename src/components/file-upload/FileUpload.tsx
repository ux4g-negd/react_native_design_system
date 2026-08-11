/**
 * Ux4gFileUpload
 *
 * React Native port of the Flutter `Ux4gFileUpload` component (`file_upload.dart`).
 * Supports real file picking (document picker) and camera scanning (image picker).
 * Features: solid/dashed border styles, upload progress, error/retry states,
 * file type badge icons, and Ux4gToast error notifications.
 */

import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  ViewStyle,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { UX4GColors } from '../../foundation/colors';
import { Ux4gIcons } from '../../foundation/icons';
import { Ux4gButton } from '../button/Button';

// ── SVG imports for dashed border ───────────────────────────────────────────
let Svg: any = null;
let Rect: any = null;
try {
  const RNSvg = require('react-native-svg');
  Svg = RNSvg.Svg || RNSvg.default;
  Rect = RNSvg.Rect;
} catch (_e) {
  // react-native-svg not present
}

// ── Optional native picker imports ──────────────────────────────────────────
let DocumentPicker: any = null;
try {
  DocumentPicker = require('react-native-document-picker').default;
} catch (_e) {
  // react-native-document-picker not installed
}

let launchCamera: any = null;
try {
  launchCamera = require('react-native-image-picker').launchCamera;
} catch (_e) {
  // react-native-image-picker not installed
}

// ── Toast hook (graceful fallback when outside provider) ────────────────────
let useUx4gToastSafe: () => { showToast: (data: any) => void; dismiss: () => void } | null;
try {
  const toastModule = require('../toast/Toast');
  useUx4gToastSafe = () => {
    try {
      return toastModule.useUx4gToast();
    } catch (_e) {
      return null;
    }
  };
} catch (_e) {
  useUx4gToastSafe = () => null;
}

// ═══════════════════════════════════════════════════════════════════════════
// PUBLIC TYPES
// ═══════════════════════════════════════════════════════════════════════════

export enum UploadStatus {
  idle = 'idle',
  uploading = 'uploading',
  success = 'success',
  error = 'error',
}

export interface UploadedFile {
  id: string;
  name: string;
  fileSize: number; // bytes
  status: UploadStatus;
  progress: number; // 0.0 – 1.0
  errorMessage?: string;
  uri?: string;
}

export type Ux4gFileUploadBorderStyle = 'solid' | 'dashed';

export interface Ux4gFileUploadProps {
  maxFiles?: number;
  maxFileSize?: number; // bytes, default 5 MB
  onFilesChanged?: (files: UploadedFile[]) => void;
  onUpload?: (file: UploadedFile) => Promise<boolean>;
  allowedExtensions?: string[];
  borderStyle?: Ux4gFileUploadBorderStyle;
  buttonBorderRadius?: number;
  buttonColor?: string;
  buttonBorderColor?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  errorTitle?: string;
  errorText?: string;
  errorTitleStyle?: StyleProp<TextStyle>;
  errorTextStyle?: StyleProp<TextStyle>;
  /** Pre-populated initial files for testing / showcase */
  initialFiles?: UploadedFile[];
}

// ═══════════════════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════════════════

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function getFileExtension(name: string): string {
  return name.split('.').pop()?.toLowerCase() ?? '';
}

function getFileIconInfo(fileName: string): {
  iconName: string;
  iconColor: string;
  bgColor: string;
} {
  const ext = getFileExtension(fileName);
  if (['jpg', 'jpeg', 'png', 'gif', 'bmp'].includes(ext)) {
    return { iconName: 'image', iconColor: UX4GColors.blue600, bgColor: UX4GColors.blue50 };
  }
  if (ext === 'pdf') {
    return { iconName: 'pdf', iconColor: UX4GColors.red600, bgColor: UX4GColors.red50 };
  }
  if (['doc', 'docx'].includes(ext)) {
    return { iconName: 'description', iconColor: UX4GColors.primary600, bgColor: UX4GColors.primary50 };
  }
  return { iconName: 'file', iconColor: UX4GColors.neutral500, bgColor: UX4GColors.neutral100 };
}

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export const Ux4gFileUpload: React.FC<Ux4gFileUploadProps> = ({
  maxFiles = 5,
  maxFileSize = 5 * 1024 * 1024,
  onFilesChanged,
  onUpload,
  allowedExtensions = ['jpg', 'png', 'pdf'],
  borderStyle = 'solid',
  buttonBorderRadius = 8,
  buttonColor,
  buttonBorderColor,
  buttonStyle,
  errorTitle,
  errorText,
  errorTitleStyle,
  errorTextStyle,
  initialFiles,
}) => {
  const theme = useUx4gTheme();
  const toast = useUx4gToastSafe?.() ?? null;

  const primary = theme.colors.primary;
  const onPrimary = theme.colors.onPrimary;
  const onBackground = theme.colors.onBackground;
  const onSurface = theme.colors.onSurface;
  const errorColor = theme.colors.error;

  const [files, setFiles] = useState<UploadedFile[]>(initialFiles ?? []);
  const [hasGlobalError, setHasGlobalError] = useState(false);
  const [currentErrorTitle, setCurrentErrorTitle] = useState<string | undefined>();
  const [currentErrorText, setCurrentErrorText] = useState<string | undefined>();

  // Sync initialFiles if changed
  const prevInitialRef = useRef(initialFiles);
  useEffect(() => {
    if (initialFiles && initialFiles !== prevInitialRef.current) {
      const same =
        prevInitialRef.current &&
        prevInitialRef.current.length === initialFiles.length &&
        prevInitialRef.current.every((f, i) => f.id === initialFiles[i]?.id);
      if (!same) {
        setFiles(initialFiles);
        prevInitialRef.current = initialFiles;
      }
    }
  }, [initialFiles]);

  // ── Error display ──────────────────────────────────────────────────────
  const showError = useCallback(
    (title: string, message: string, _fileName?: string) => {
      const displayTitle = errorTitle ?? title;
      let displayText = errorText ?? message;
      if (_fileName) {
        displayText = displayText.replace('[File Name]', _fileName);
      }
      setHasGlobalError(true);
      setCurrentErrorTitle(displayTitle);
      setCurrentErrorText(displayText);

      toast?.showToast({
        category: 'error' as any,
        // Match Flutter behavior: toast uses original title/message.
        title,
        subtitle: message,
        showCloseButton: true,
        autoClose: true,
        durationMs: 4000,
      });
    },
    [errorTitle, errorText, toast],
  );

  const requestAndroidPermission = useCallback(
    async (
      permission: (typeof PermissionsAndroid.PERMISSIONS)[keyof typeof PermissionsAndroid.PERMISSIONS],
      title: string,
      message: string,
    ): Promise<boolean> => {
      if (Platform.OS !== 'android') return true;

      try {
        const granted = await PermissionsAndroid.request(permission as any, {
          title,
          message,
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        });
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err: any) {
        showError('Permission Error', `Failed to request permission: ${err?.message ?? err}`);
        return false;
      }
    },
    [showError],
  );

  // ── Upload simulation ──────────────────────────────────────────────────
  const uploadFile = useCallback(
    async (file: UploadedFile) => {
      setFiles((prev) => {
        const idx = prev.findIndex((f) => f.id === file.id);
        if (idx === -1) return prev;
        const updated = [...prev];
        updated[idx] = { ...updated[idx], status: UploadStatus.uploading };
        return updated;
      });

      try {
        // Simulate progress
        for (let i = 0; i <= 10; i++) {
          await new Promise((r) => setTimeout(r, 200));
          setFiles((prev) => {
            const idx = prev.findIndex((f) => f.id === file.id);
            if (idx === -1) return prev;
            const updated = [...prev];
            updated[idx] = { ...updated[idx], progress: i / 10 };
            return updated;
          });
        }

        const success = onUpload ? await onUpload(file) : true;

        setFiles((prev) => {
          const idx = prev.findIndex((f) => f.id === file.id);
          if (idx === -1) return prev;
          const updated = [...prev];
          if (success) {
            updated[idx] = { ...updated[idx], status: UploadStatus.success, progress: 1.0 };
          } else {
            updated[idx] = {
              ...updated[idx],
              status: UploadStatus.error,
              errorMessage: 'Upload failed. Please try again.',
            };
          }
          return updated;
        });
      } catch (e: any) {
        setFiles((prev) => {
          const idx = prev.findIndex((f) => f.id === file.id);
          if (idx === -1) return prev;
          const updated = [...prev];
          updated[idx] = {
            ...updated[idx],
            status: UploadStatus.error,
            errorMessage: `Error: ${e?.message ?? e}`,
          };
          return updated;
        });
      }

      // Notify parent
      setFiles((prev) => {
        onFilesChanged?.(prev);
        return prev;
      });
    },
    [onUpload, onFilesChanged],
  );

  // ── Pick file (from document picker or camera) ─────────────────────────
  const pickFile = useCallback(
    async (fromCamera: boolean) => {
      setHasGlobalError(false);

      try {
        let fileName: string;
        let fileSize: number;
        let fileUri: string;

        if (fromCamera) {
          if (!launchCamera) {
            showError('Missing Dependency', 'react-native-image-picker is not installed.');
            return;
          }

          const hasCameraPermission = await requestAndroidPermission(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            'Camera Permission Required',
            'This app needs access to your camera to scan documents.',
          );
          if (!hasCameraPermission) {
            showError('Permission Denied', 'Camera permission is required to scan documents.');
            return;
          }

          const result = await new Promise<any>((resolve) => {
            launchCamera(
              { mediaType: 'photo', quality: 0.8, saveToPhotos: false },
              (response: any) => resolve(response),
            );
          });

          if (result.didCancel) return;

          if (result.errorCode === 'permission') {
            showError(
              'Permission Denied',
              'Camera permission denied. Please allow camera access in your device Settings.',
            );
            return;
          }

          if (result.errorCode === 'camera_unavailable') {
            showError('Camera Unavailable', 'Camera is not available on this device.');
            return;
          }

          if (result.errorCode) {
            showError('Camera Error', result.errorMessage ?? 'An error occurred while launching camera.');
            return;
          }

          const asset = result.assets?.[0];
          if (!asset) return;

          fileName = asset.fileName ?? `camera_${Date.now()}.jpg`;
          fileSize = asset.fileSize ?? 0;
          fileUri = asset.uri ?? '';
        } else {
          if (!DocumentPicker) {
            showError('Missing Dependency', 'react-native-document-picker is not installed.');
            return;
          }

          if (Platform.OS === 'android') {
            const androidVersion = typeof Platform.Version === 'number' ? Platform.Version : parseInt(String(Platform.Version), 10);
            const readPermission = androidVersion >= 33
              ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
              : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

            const hasReadPermission = await requestAndroidPermission(
              readPermission,
              'Storage Permission Required',
              'This app needs access to your files to upload documents.',
            );

            if (!hasReadPermission) {
              showError('Permission Denied', 'Storage permission is required to upload documents.');
              return;
            }
          }

          const result = await DocumentPicker.pick({
            type: allowedExtensions.map((ext: string) => {
              if (ext === 'pdf') return 'application/pdf';
              if (['jpg', 'jpeg'].includes(ext)) return 'image/jpeg';
              if (ext === 'png') return 'image/png';
              if (ext === 'gif') return 'image/gif';
              if (['doc', 'docx'].includes(ext))
                return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
              return '*/*';
            }),
          });

          const picked = Array.isArray(result) ? result[0] : result;
          if (!picked) return;

          fileName = picked.name ?? `file_${Date.now()}`;
          fileSize = picked.size ?? 0;
          fileUri = picked.uri ?? '';
        }

        // Validate file size
        if (fileSize > maxFileSize) {
          showError(
            'File too large',
            `${fileName} exceeds the ${Math.floor(maxFileSize / (1024 * 1024))}MB upload limit. Please compress it or select a smaller file.`,
            fileName,
          );
          return;
        }

        // Validate max files
        if (files.length >= maxFiles) {
          showError('Max files reached', `You can upload maximum ${maxFiles} files`);
          return;
        }

        const newFile: UploadedFile = {
          id: Date.now().toString(),
          name: fileName,
          fileSize,
          status: UploadStatus.idle,
          progress: 0,
          uri: fileUri,
        };

        setFiles((prev) => {
          const next = [...prev, newFile];
          onFilesChanged?.(next);
          return next;
        });

        // Start upload
        if (onUpload) {
          await uploadFile(newFile);
        }
      } catch (e: any) {
        // Handle user cancellation
        if (DocumentPicker && DocumentPicker.isCancel?.(e)) return;
        showError('Error', `Failed to pick file: ${e?.message ?? e}`);
      }
    },
    [files.length, maxFiles, maxFileSize, allowedExtensions, onUpload, showError, uploadFile, onFilesChanged, requestAndroidPermission],
  );

  // ── Retry upload ───────────────────────────────────────────────────────
  const retryUpload = useCallback(
    async (file: UploadedFile) => {
      setFiles((prev) => {
        const idx = prev.findIndex((f) => f.id === file.id);
        if (idx === -1) return prev;
        const updated = [...prev];
        updated[idx] = {
          ...updated[idx],
          status: UploadStatus.idle,
          progress: 0,
          errorMessage: undefined,
        };
        return updated;
      });

      if (onUpload) {
        await uploadFile(file);
      }
    },
    [onUpload, uploadFile],
  );

  // ── Remove file ────────────────────────────────────────────────────────
  const removeFile = useCallback(
    (id: string) => {
      setFiles((prev) => {
        const next = prev.filter((f) => f.id !== id);
        onFilesChanged?.(next);
        return next;
      });
    },
    [onFilesChanged],
  );

  // ── Border color ───────────────────────────────────────────────────────
  const borderColor = hasGlobalError ? errorColor : primary;

  // ── Typography tokens ──────────────────────────────────────────────────
  const tsStrong = theme.typography.tS_strong;
  const bsDefault = theme.typography.bS_default;

  // ═════════════════════════════════════════════════════════════════════════
  // UPLOAD CONTENT (shared between solid / dashed variants)
  // ═════════════════════════════════════════════════════════════════════════

  const uploadContent = (
    <View style={localStyles.uploadContentColumn}>
      {/* Icon */}
      {hasGlobalError
        ? Ux4gIcons.errorOutline({ size: 32, color: errorColor })
        : Ux4gIcons.cloudUpload({ size: 32, color: primary })}

      <View style={{ height: 16 }} />

      {/* Title */}
      <Text
        style={[
          {
          fontSize: hasGlobalError ? 16 : 24,
          fontWeight: '700',
          color: onBackground,
          textAlign: 'center',
          },
          hasGlobalError ? errorTitleStyle : undefined,
        ]}
      >
        {hasGlobalError ? (currentErrorTitle ?? 'Could not scan') : 'Upload Documents'}
      </Text>

      <View style={{ height: 8 }} />

      {/* Description */}
      <Text
        style={[
          {
          fontSize: bsDefault.fontSize,
          fontWeight: bsDefault.fontWeight,
          color: hasGlobalError ? errorColor : `${onSurface}99`, // 60% opacity
          textAlign: 'center',
          },
          hasGlobalError ? errorTextStyle : undefined,
        ]}
      >
        {hasGlobalError
          ? (currentErrorText ?? 'File exceeds the upload limit.')
          : `File type: ${allowedExtensions.map((e) => e.toUpperCase()).join(' ')} Max size: ${Math.floor(maxFileSize / (1024 * 1024))} MB`}
      </Text>

      <View style={{ height: 20 }} />

      {/* Buttons Row */}
      <View style={localStyles.buttonRow}>
        {/* Upload Button (Outline Variant) */}
        <View style={{ flex: 1 }}>
          <Ux4gButton
            testID="upload-button"
            variant="outline"
            text="Upload"
            size="medium"
            leadingIcon={({ color, size }) =>
              Ux4gIcons.cloudUpload({ size, color: buttonColor ?? color })
            }
            borderColor={buttonBorderColor ?? primary}
            contentColor={buttonColor ?? primary}
            borderRadius={buttonBorderRadius}
            style={buttonStyle}
            onPress={() => pickFile(false)}
          />
        </View>

        <View style={{ width: 12 }} />

        {/* Scan Button (Primary Variant) */}
        <View style={{ flex: 1 }}>
          <Ux4gButton
            testID="scan-button"
            variant="primary"
            text="Scan"
            size="medium"
            leadingIcon={({ color, size }) =>
              Ux4gIcons.camera({ size, color: onPrimary })
            }
            backgroundColor={buttonColor ?? primary}
            contentColor={onPrimary}
            borderRadius={buttonBorderRadius}
            style={buttonStyle}
            onPress={() => pickFile(true)}
          />
        </View>
      </View>
    </View>
  );

  // ═════════════════════════════════════════════════════════════════════════
  // DROP ZONE
  // ═════════════════════════════════════════════════════════════════════════

  const dropZone =
    borderStyle === 'dashed' ? (
      <View style={localStyles.dashedContainer}>
        {/* SVG dashed border */}
        {Svg && Rect && (
          <View style={StyleSheet.absoluteFill} pointerEvents="none">
            <Svg width="100%" height="100%">
              <Rect
                x="1"
                y="1"
                width="99%"
                height="99%"
                rx={12}
                ry={12}
                fill="none"
                stroke={borderColor}
                strokeWidth={2}
                strokeDasharray="8 5"
              />
            </Svg>
          </View>
        )}
        <View style={localStyles.uploadPadding}>{uploadContent}</View>
      </View>
    ) : (
      <View
        style={[
          localStyles.solidContainer,
          { borderColor, borderWidth: 2, borderRadius: 12 },
        ]}
      >
        <View style={localStyles.uploadPadding}>{uploadContent}</View>
      </View>
    );

  // ═════════════════════════════════════════════════════════════════════════
  // FILE LIST ITEMS
  // ═════════════════════════════════════════════════════════════════════════

  const renderFileItem = (file: UploadedFile) => {
    const iconInfo = getFileIconInfo(file.name);

    return (
      <View key={file.id} style={localStyles.fileItemOuter}>
        <View
          style={[
            localStyles.fileItemContainer,
            {
              backgroundColor: UX4GColors.neutral0,
              borderColor: UX4GColors.neutral200,
            },
          ]}
        >
          {/* Top row: icon + name + size + status + close */}
          <View style={localStyles.fileRow}>
            {/* File type badge */}
            <View
              style={[
                localStyles.fileIconBadge,
                { backgroundColor: iconInfo.bgColor },
              ]}
            >
              {iconInfo.iconName === 'image'
                ? Ux4gIcons.imageFile({ size: 20, color: iconInfo.iconColor })
                : iconInfo.iconName === 'pdf'
                  ? Ux4gIcons.pdf({ size: 20, color: iconInfo.iconColor })
                  : iconInfo.iconName === 'description'
                    ? Ux4gIcons.docFile({ size: 20, color: iconInfo.iconColor })
                    : Ux4gIcons.insertDriveFile({ size: 20, color: iconInfo.iconColor })}
            </View>

            <View style={{ width: 12 }} />

            {/* File info */}
            <View style={{ flex: 1 }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: tsStrong.fontSize,
                  fontWeight: tsStrong.fontWeight,
                  color: UX4GColors.neutral900,
                }}
              >
                {file.name}
              </Text>
              <View style={{ height: 2 }} />
              <Text
                numberOfLines={1}
                style={{
                  fontSize: bsDefault.fontSize,
                  fontWeight: bsDefault.fontWeight,
                  color: UX4GColors.neutral500,
                }}
              >
                {formatFileSize(file.fileSize)}
              </Text>
            </View>

            <View style={{ width: 8 }} />

            {/* Success check */}
            {file.status === UploadStatus.success && (
              <View style={{ marginRight: 8 }}>
                {Ux4gIcons.checkCircle({ size: 22, color: UX4GColors.green600 })}
              </View>
            )}

            {/* Close button */}
            <TouchableOpacity
              testID={`remove-file-${file.id}`}
              onPress={() => removeFile(file.id)}
              hitSlop={{ top: 8, right: 8, bottom: 8, left: 8 }}
            >
              {Ux4gIcons.close({ size: 20, color: UX4GColors.neutral500 })}
            </TouchableOpacity>
          </View>

          {/* Progress bar */}
          {file.status === UploadStatus.uploading && (
            <View style={localStyles.progressRow}>
              <View style={localStyles.progressTrack}>
                <View
                  style={[
                    localStyles.progressFill,
                    {
                      width: `${Math.round(file.progress * 100)}%`,
                      backgroundColor: primary,
                    },
                  ]}
                />
              </View>
              <View style={{ width: 8 }} />
              <Text
                style={{
                  fontSize: bsDefault.fontSize,
                  fontWeight: bsDefault.fontWeight,
                  color: UX4GColors.neutral500,
                }}
              >
                {`${Math.round(file.progress * 100)}%`}
              </Text>
            </View>
          )}

          {/* Error row */}
          {file.status === UploadStatus.error && (
            <View style={localStyles.errorRow}>
              {Ux4gIcons.errorOutline({ size: 14, color: UX4GColors.red600 })}
              <View style={{ width: 4 }} />
              <Text
                numberOfLines={1}
                style={{
                  flex: 1,
                  fontSize: bsDefault.fontSize,
                  fontWeight: bsDefault.fontWeight,
                  color: UX4GColors.red600,
                }}
              >
                {file.errorMessage ?? 'Upload failed'}
              </Text>
              <View style={{ width: 8 }} />
              <TouchableOpacity onPress={() => retryUpload(file)}>
                <Text
                  style={{
                    fontSize: bsDefault.fontSize,
                    fontWeight: '600',
                    color: primary,
                  }}
                >
                  Retry
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  // ═════════════════════════════════════════════════════════════════════════
  // RENDER
  // ═════════════════════════════════════════════════════════════════════════

  return (
    <View>
      {dropZone}
      <View style={{ height: 20 }} />
      {files.length > 0 && <View>{files.map(renderFileItem)}</View>}
    </View>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// LOCAL STYLES
// ═══════════════════════════════════════════════════════════════════════════

const localStyles = StyleSheet.create({
  solidContainer: {
    width: '100%',
  },
  dashedContainer: {
    width: '100%',
    position: 'relative',
  },
  uploadPadding: {
    padding: 24,
  },
  uploadContentColumn: {
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
  },
  uploadBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderWidth: 1.5,
  },
  scanBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  fileItemOuter: {
    marginBottom: 12,
  },
  fileItemContainer: {
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  fileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  fileIconBadge: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingBottom: 10,
  },
  progressTrack: {
    flex: 1,
    height: 4,
    backgroundColor: UX4GColors.neutral200,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  errorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingBottom: 10,
  },
});
