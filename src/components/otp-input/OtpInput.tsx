import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Animated,
  Easing,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  useWindowDimensions,
  LayoutChangeEvent,
} from 'react-native';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { UX4GColors } from '../../foundation/colors';
import { Ux4gIcons } from '../../foundation/icons';

export type Ux4gOtpBoxStatus =
  | 'defaultStatus'
  | 'focused'
  | 'error'
  | 'warning'
  | 'success'
  | 'disabled';

export type Ux4gOtpInputStatus =
  | 'defaultStatus'
  | 'error'
  | 'warning'
  | 'success'
  | 'locked';

export type Ux4gOtpCaptionVariant =
  | 'resendTimer'
  | 'resendAction'
  | 'attemptWithTimer'
  | 'locked'
  | 'success'
  | 'warning'
  | 'plain';

// Helper for RGBA color alpha overlay
const withAlpha = (color: string, alpha: number): string => {
  if (!color) return `rgba(0, 0, 0, ${alpha})`;
  if (color.startsWith('#')) {
    let hex = color.slice(1);
    if (hex.length === 3) {
      hex = hex.split('').map((c) => c + c).join('');
    }
    if (hex.length === 6 || hex.length === 8) {
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
  }
  if (color.startsWith('rgb')) {
    return color.replace(/rgba?\(([^)]+)\)/, (_, p1) => {
      const parts = p1.split(',').map((s: string) => s.trim());
      return `rgba(${parts[0]}, ${parts[1]}, ${parts[2]}, ${alpha})`;
    });
  }
  return color;
};

// ─── Blinking Cursor Widget ──────────────────────────────────────────────────

interface CursorProps {
  color: string;
}

const Cursor: React.FC<CursorProps> = ({ color }) => {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [opacity]);

  return <Animated.View style={[styles.cursor, { backgroundColor: color, opacity }]} />;
};

// ─── Ux4gOtpBox (Single Digit Box Component) ─────────────────────────────────

export interface Ux4gOtpBoxProps {
  /** Digit value inside the box. */
  value?: string;
  /** Status of the box driving borders and colors. */
  status?: Ux4gOtpBoxStatus;
  /** Box size in logical points. Defaults to `48`. */
  size?: number;
  /** Obscure character (password mode). Defaults to `false`. */
  obscure?: boolean;
  /** Style override for the outer box container. */
  style?: StyleProp<ViewStyle>;
  /** Test identifier */
  testID?: string;
}

export const Ux4gOtpBox: React.FC<Ux4gOtpBoxProps> = ({
  value = '',
  status = 'defaultStatus',
  size = 48,
  obscure = false,
  style,
  testID,
}) => {
  const theme = useUx4gTheme();
  const colors = theme.colors;
  const typography = theme.typography;
  const isDark = theme.isDark;

  const primary = colors.primary ?? UX4GColors.primary600;
  const onSurface = colors.onSurface ?? (isDark ? UX4GColors.neutral50 : UX4GColors.neutral900);
  const surface = colors.surface ?? (isDark ? UX4GColors.neutral900 : UX4GColors.white);
  const error = colors.error ?? UX4GColors.red600;
  const warning = colors.warning ?? UX4GColors.orange600;
  const success = colors.success ?? UX4GColors.green600;

  let borderColor: string;
  let borderWidth: number = status === 'focused' ? theme.borderWidth.thick : theme.borderWidth.thin;
  let bgColor: string = status === 'disabled' ? withAlpha(onSurface, 0.05) : surface;

  switch (status) {
    case 'focused':
      borderColor = primary;
      break;
    case 'error':
      borderColor = error;
      break;
    case 'warning':
      borderColor = warning;
      break;
    case 'success':
      borderColor = success;
      break;
    case 'disabled':
      borderColor = withAlpha(onSurface, 0.2);
      break;
    case 'defaultStatus':
    default:
      borderColor = withAlpha(onSurface, 0.25);
      break;
  }

  const hsStrong = typography.hS_strong;
  const bmDefault = typography.bM_default;

  return (
    <View
      testID={testID}
      style={[
        styles.box,
        {
          width: size,
          height: size,
          borderRadius: theme.radius.radius8,
          borderWidth,
          borderColor,
          backgroundColor: bgColor,
        },
        style,
      ]}
    >
      {value.length > 0 ? (
        <Text
          style={[
            styles.boxText,
            {
              fontSize: size < 44 ? Math.round(hsStrong.fontSize * (size / 48)) : hsStrong.fontSize,
              fontWeight: hsStrong.fontWeight,
              lineHeight: size < 44 ? Math.round(hsStrong.lineHeight * (size / 48)) : hsStrong.lineHeight,
              color: status === 'disabled' ? withAlpha(onSurface, 0.35) : onSurface,
            },
          ]}
        >
          {obscure ? '•' : value}
        </Text>
      ) : status === 'focused' ? (
        <Cursor color={primary} />
      ) : (
        <Text
          style={[
            styles.boxText,
            {
              fontSize: size < 44 ? Math.round(bmDefault.fontSize * (size / 48)) : bmDefault.fontSize,
              color: withAlpha(onSurface, 0.3),
            },
          ]}
        >
          —
        </Text>
      )}
    </View>
  );
};

// ─── Ux4gOtpCaption (Caption Section Component) ──────────────────────────────

export interface Ux4gOtpCaptionProps {
  /** Visual variant of the caption. */
  variant: Ux4gOtpCaptionVariant;
  /** Custom plain text caption. */
  caption?: string;
  /** Leading text string (e.g. "Didn't receive OTP?"). */
  leadingText?: string;
  /** Trailing text string (e.g. "Resend in 00:17"). */
  trailingText?: string;
  /** Callback fired when pressable trailing action link is tapped. */
  onTrailingTap?: () => void;
  /** Optional style override. */
  style?: StyleProp<ViewStyle>;
  /** Test identifier */
  testID?: string;
}

export const Ux4gOtpCaption: React.FC<Ux4gOtpCaptionProps> = ({
  variant,
  caption,
  leadingText,
  trailingText,
  onTrailingTap,
  style,
  testID,
}) => {
  const theme = useUx4gTheme();
  const colors = theme.colors;
  const typography = theme.typography;
  const isDark = theme.isDark;

  const onSurface = colors.onSurface ?? (isDark ? UX4GColors.neutral50 : UX4GColors.neutral900);
  const primary = colors.primary ?? UX4GColors.primary600;
  const error = colors.error ?? UX4GColors.red600;
  const success = colors.success ?? UX4GColors.green600;
  const warning = colors.warning ?? UX4GColors.orange600;

  const bxsDefault = typography.bXS_default;
  const bxsStrong = typography.bXS_strong;

  const defaultTextStyle: TextStyle = {
    fontSize: bxsDefault.fontSize,
    fontWeight: bxsDefault.fontWeight,
    lineHeight: bxsDefault.lineHeight,
    color: withAlpha(onSurface, 0.6),
  };

  const strongTextStyle: TextStyle = {
    fontSize: bxsStrong.fontSize,
    fontWeight: bxsStrong.fontWeight,
    lineHeight: bxsStrong.lineHeight,
    color: primary,
  };

  switch (variant) {
    case 'resendTimer':
      return (
        <View testID={testID} style={[styles.captionInline, style]}>
          <Text style={defaultTextStyle}>{leadingText ?? "Didn't receive OTP?"}</Text>
          <Text style={[defaultTextStyle, { marginLeft: 4 }]}>{trailingText ?? ''}</Text>
        </View>
      );

    case 'resendAction':
      return (
        <View testID={testID} style={[styles.captionInline, style]}>
          <Text style={defaultTextStyle}>{leadingText ?? "Didn't receive OTP?"}</Text>
          <Pressable onPress={onTrailingTap} style={styles.actionPressable}>
            <Text style={[strongTextStyle, { marginLeft: 4 }]}>{trailingText ?? 'Resend OTP'}</Text>
          </Pressable>
        </View>
      );

    case 'attemptWithTimer':
      return (
        <View testID={testID} style={[styles.captionSpaceBetween, style]}>
          <View style={styles.iconRow}>
            {Ux4gIcons.error({ size: 14, color: error })}
            <Text style={[strongTextStyle, { color: error, marginLeft: 4 }]}>
              {leadingText ?? ''}
            </Text>
          </View>
          <Text style={defaultTextStyle}>{trailingText ?? ''}</Text>
        </View>
      );

    case 'locked':
      return (
        <View testID={testID} style={[styles.captionSpaceBetween, style]}>
          <View style={styles.iconRow}>
            {Ux4gIcons.lock({ size: 14, color: withAlpha(onSurface, 0.6) })}
            <Text style={[defaultTextStyle, { marginLeft: 4 }]}>{leadingText ?? ''}</Text>
          </View>
          <Pressable onPress={onTrailingTap}>
            <Text style={defaultTextStyle}>{trailingText ?? 'Resend OTP'}</Text>
          </Pressable>
        </View>
      );

    case 'success':
      return (
        <View testID={testID} style={[styles.iconRow, style]}>
          {Ux4gIcons.success({ size: 14, color: success })}
          <Text style={[strongTextStyle, { color: success, marginLeft: 6 }]}>
            {caption ?? 'Verification successful'}
          </Text>
        </View>
      );

    case 'warning':
      return (
        <View testID={testID} style={[styles.iconRow, style]}>
          {Ux4gIcons.warning({ size: 14, color: warning })}
          <Text style={[defaultTextStyle, { color: warning, marginLeft: 6 }]}>
            {caption ?? 'Warning message'}
          </Text>
        </View>
      );

    case 'plain':
    default:
      return (
        <View testID={testID} style={style}>
          <Text style={defaultTextStyle}>{caption ?? ''}</Text>
        </View>
      );
  }
};

// ─── Ux4gOtpInput (Complete Component) ───────────────────────────────────────

export interface Ux4gOtpInputProps {
  /** Number of OTP digits. Defaults to `6`. */
  length?: number;
  /** Current OTP value (controlled string). Pass empty string to clear. */
  value: string;
  /** Fired on every character change with the full current OTP string. */
  onChanged: (value: string) => void;
  /** Fired when all `length` digits are filled. */
  onCompleted?: (value: string) => void;
  /** Label shown above the digit boxes. */
  label?: string;
  /** Whether label displays required asterisk (*). Defaults to `false`. */
  required?: boolean;
  /** Optional icon component next to label. */
  labelTrailingIcon?: React.ReactNode;
  /** Overall status driving box colors and icons. Defaults to `'defaultStatus'`. */
  status?: Ux4gOtpInputStatus;
  /** Password mode (obscures digits with '•'). Defaults to `false`. */
  obscure?: boolean;
  /** Size of each digit box in logical points. Defaults to `48`. */
  boxSize?: number;
  /** Gap between digit boxes in logical points. Defaults to `8`. */
  gap?: number;
  /** Show '-' dash separator between middle digit boxes. Defaults to `false`. */
  showSeparator?: boolean;
  /** Keyboard type. Defaults to `'number-pad'`. */
  keyboardType?: KeyboardTypeOptions;

  // Caption Props
  captionVariant?: Ux4gOtpCaptionVariant;
  captionLeadingText?: string;
  captionTrailingText?: string;
  onCaptionTrailingTap?: () => void;
  captionText?: string;

  // Auto Countdown Props
  autoCountdownSeconds?: number;
  onCountdownComplete?: () => void;

  /** Enable or disable the OTP input. Defaults to `true`. */
  enabled?: boolean;
  /** Optional container style override. */
  containerStyle?: StyleProp<ViewStyle>;
  /** Optional test identifier. */
  testID?: string;
}

export const Ux4gOtpInput: React.FC<Ux4gOtpInputProps> = ({
  length = 6,
  value,
  onChanged,
  onCompleted,
  label,
  required = false,
  labelTrailingIcon,
  status = 'defaultStatus',
  obscure = false,
  boxSize = 48,
  gap = 8,
  showSeparator = false,
  keyboardType = 'number-pad',
  captionVariant,
  captionLeadingText,
  captionTrailingText,
  onCaptionTrailingTap,
  captionText,
  autoCountdownSeconds,
  onCountdownComplete,
  enabled = true,
  containerStyle,
  testID,
}) => {
  const theme = useUx4gTheme();
  const colors = theme.colors;
  const typography = theme.typography;
  const isDark = theme.isDark;

  const onSurface = colors.onSurface ?? (isDark ? UX4GColors.neutral50 : UX4GColors.neutral900);
  const error = colors.error ?? UX4GColors.red600;

  const bsStrong = typography.bS_strong;

  const { width: windowWidth } = useWindowDimensions();
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(
    autoCountdownSeconds ?? 0
  );
  const [countdownExpired, setCountdownExpired] = useState<boolean>(false);

  const inputRefs = useRef<Array<TextInput | null>>([]);

  // Responsive calculation: if available width is constrained (< requiredWidth), adaptively scale boxSize & gap
  const availableWidth = containerWidth > 0 ? containerWidth : windowWidth;
  const separatorWidth = showSeparator ? 24 : 0;
  const requiredWidth = length * boxSize + (length - 1) * gap + separatorWidth;

  let effectiveBoxSize = boxSize;
  let effectiveGap = gap;

  if (availableWidth > 0 && availableWidth < requiredWidth) {
    const scaleFactor = availableWidth / requiredWidth;
    effectiveGap = Math.max(4, Math.floor(gap * scaleFactor));
    const remainingForBoxes = availableWidth - ((length - 1) * effectiveGap + separatorWidth);
    effectiveBoxSize = Math.max(28, Math.floor(remainingForBoxes / length));
  }

  // Clean value string sanitized to digits and spaces, padded to max length
  const rawClean = (value ?? '').replace(/[^0-9 ]/g, '').slice(0, length);
  const paddedVal = rawClean.padEnd(length, ' ');

  // Auto Countdown Timer Effect
  useEffect(() => {
    if (autoCountdownSeconds !== undefined && autoCountdownSeconds > 0) {
      setRemainingSeconds(autoCountdownSeconds);
      setCountdownExpired(false);

      const interval = setInterval(() => {
        setRemainingSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setCountdownExpired(true);
            onCountdownComplete?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [autoCountdownSeconds]);

  const handleDigitChange = (index: number, text: string) => {
    const currentBoxVal = paddedVal[index];
    const cleanText = text.replace(/\u200B/g, '');

    // Multi-character paste handling
    if (
      cleanText.length > 2 ||
      (currentBoxVal === ' ' && cleanText.length > 1 && cleanText.trim().length > 1)
    ) {
      const cleanPasted = cleanText.replace(/\D/g, '').slice(0, length);
      onChanged(cleanPasted);
      if (cleanPasted.length === length) {
        inputRefs.current[length - 1]?.blur();
        onCompleted?.(cleanPasted);
      } else {
        const nextIdx = Math.min(cleanPasted.length, length - 1);
        inputRefs.current[nextIdx]?.focus();
      }
      return;
    }

    // Determine the newly typed character or if it was a backspace
    let newChar = '';
    if (cleanText.length === 0) {
      newChar = '';
    } else if (cleanText.length === 1) {
      newChar = cleanText === ' ' ? '' : cleanText;
    } else {
      if (cleanText.startsWith(currentBoxVal)) {
        newChar = cleanText.slice(currentBoxVal.length);
      } else if (cleanText.endsWith(currentBoxVal)) {
        newChar = cleanText.slice(0, cleanText.length - currentBoxVal.length);
      } else {
        newChar = cleanText.slice(-1);
      }
    }

    newChar = newChar.replace(/ /g, '');

    if (newChar.length > 0) {
      // ── TYPING DIGIT AT INDEX: REPLACE IN-PLACE ──────────────────────────
      const newVal = paddedVal.slice(0, index) + newChar + paddedVal.slice(index + 1);
      const trimmedVal = newVal.replace(/ +$/, '');
      onChanged(trimmedVal);

      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      } else {
        inputRefs.current[index]?.blur();
        if (newVal.replace(/ /g, '').length === length) {
          onCompleted?.(trimmedVal);
        }
      }
    } else {
      // ── CLEARING DIGIT AT INDEX / BACKSPACE ON EMPTY BOX ─────────
      let newVal: string;
      const currentWasEmpty = paddedVal[index] === ' ';

      if (currentWasEmpty && index > 0) {
        // If current box was empty, delete previous digit and leave space
        newVal = paddedVal.slice(0, index - 1) + ' ' + paddedVal.slice(index);
        onChanged(newVal.replace(/ +$/, ''));
        inputRefs.current[index - 1]?.focus();
      } else {
        // Delete digit at index and leave space
        newVal = paddedVal.slice(0, index) + ' ' + paddedVal.slice(index + 1);
        onChanged(newVal.replace(/ +$/, ''));
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
        }
      }
    }
  };

  const handleKeyPress = (
    index: number,
    e: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) => {
    if (e.nativeEvent.key === 'Backspace') {
      const currentBoxChar = paddedVal[index];
      if (currentBoxChar === ' ' && index > 0) {
        const newVal = paddedVal.slice(0, index - 1) + ' ' + paddedVal.slice(index);
        onChanged(newVal.replace(/ +$/, ''));
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const mapBoxStatus = (index: number): Ux4gOtpBoxStatus => {
    if (!enabled || status === 'locked') return 'disabled';
    if (focusedIndex === index) return 'focused';
    switch (status) {
      case 'error':
        return 'error';
      case 'warning':
        return 'warning';
      case 'success':
        return 'success';
      case 'defaultStatus':
      default:
        return 'defaultStatus';
    }
  };

  const formatTimer = (sec: number): string => {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // Resolve Effective Caption Settings
  let effectiveCaptionVariant = captionVariant;
  let effectiveTrailingText = captionTrailingText;

  if (autoCountdownSeconds !== undefined) {
    if (countdownExpired) {
      effectiveCaptionVariant = 'resendAction';
      effectiveTrailingText = captionTrailingText ?? 'Resend OTP';
    } else {
      effectiveTrailingText = `${captionTrailingText ?? 'Resend in'} ${formatTimer(remainingSeconds)}`;
    }
  }

  const middleIndex = Math.floor(length / 2);

  const handleCaptionTrailingTap = () => {
    if (autoCountdownSeconds !== undefined && autoCountdownSeconds > 0) {
      setRemainingSeconds(autoCountdownSeconds);
      setCountdownExpired(false);
    }
    onCaptionTrailingTap?.();
  };

  return (
    <View
      testID={testID}
      style={[styles.container, containerStyle]}
      onLayout={(e: LayoutChangeEvent) => {
        const w = e.nativeEvent.layout.width;
        if (w > 0 && Math.abs(w - containerWidth) > 1) {
          setContainerWidth(w);
        }
      }}
    >
      {/* Top Label */}
      {label && (
        <View style={styles.labelRow}>
          <Text
            style={[
              styles.labelText,
              {
                fontSize: bsStrong.fontSize,
                fontWeight: bsStrong.fontWeight,
                lineHeight: bsStrong.lineHeight,
                color: enabled ? onSurface : withAlpha(onSurface, 0.4),
              },
            ]}
          >
            {label}
          </Text>
          {required && <Text style={[styles.labelText, { color: error }]}> *</Text>}
          {labelTrailingIcon && <View style={styles.labelIcon}>{labelTrailingIcon}</View>}
        </View>
      )}

      {/* OTP Digit Boxes Row */}
      <View style={styles.boxesRow}>
        {Array.from({ length }).map((_, i) => {
          const char = paddedVal[i];
          const val = char === ' ' ? '' : char;
          const bStatus = mapBoxStatus(i);
          const showDash = showSeparator && i === middleIndex && i > 0;

          return (
            <React.Fragment key={i}>
              {showDash && (
                <View style={styles.dashContainer}>
                  <Text style={[styles.dashText, { color: withAlpha(onSurface, 0.4) }]}>—</Text>
                </View>
              )}
              <View style={[styles.boxWrapper, { marginRight: i < length - 1 && !showDash ? effectiveGap : 0 }]}>
                <Ux4gOtpBox
                  testID={testID ? `${testID}-box-${i}` : undefined}
                  value={val}
                  status={bStatus}
                  size={effectiveBoxSize}
                  obscure={obscure}
                />
                {/* Dedicated Per-Box Overlay TextInput */}
                <TextInput
                  ref={(ref) => {
                    inputRefs.current[i] = ref;
                  }}
                  testID={testID ? `${testID}-input-${i}` : testID ? `${testID}-input` : undefined}
                  value={val.length > 0 ? val : ' '}
                  onChangeText={(t) => handleDigitChange(i, t)}
                  onKeyPress={(e) => handleKeyPress(i, e)}
                  onFocus={() => setFocusedIndex(i)}
                  onBlur={() => setFocusedIndex(-1)}
                  keyboardType={keyboardType}
                  maxLength={length}
                  editable={enabled && status !== 'locked'}
                  secureTextEntry={obscure}
                  style={styles.perBoxInputOverlay}
                  caretHidden
                />
              </View>
            </React.Fragment>
          );
        })}
      </View>

      {/* Bottom Caption */}
      {effectiveCaptionVariant && (
        <View style={styles.captionMargin}>
          <Ux4gOtpCaption
            testID={testID ? `${testID}-caption` : undefined}
            variant={effectiveCaptionVariant}
            caption={captionText}
            leadingText={captionLeadingText}
            trailingText={effectiveTrailingText}
            onTrailingTap={handleCaptionTrailingTap}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: '100%',
    alignSelf: 'flex-start',
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  labelText: {
    includeFontPadding: false,
  },
  labelIcon: {
    marginLeft: 4,
  },
  boxesRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dashContainer: {
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashText: {
    fontSize: 18,
    fontWeight: '600',
  },
  boxWrapper: {
    position: 'relative',
  },
  perBoxInputOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    opacity: 0.01,
    outlineStyle: 'none',
  } as any,
  box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    includeFontPadding: false,
    textAlign: 'center',
  },
  cursor: {
    width: 1.5,
    height: 20,
    borderRadius: 1,
  },
  captionMargin: {
    marginTop: 8,
  },
  captionInline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionPressable: {
    justifyContent: 'center',
  },
});
