import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  BackHandler,
  Easing,
  Modal,
  PanResponder,
  Platform,
  Pressable,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { UX4GColors } from '../../foundation/colors';
import { Ux4gIcons } from '../../foundation/icons';
import { Ux4gButton } from '../button/Button';
import { Ux4gDivider } from '../divider/Divider';

/**
 * Sheet height presets, matching UX4G specification and Figma `Size` variants:
 *
 * | Variant    | Screen Height Ratio | Approx Height (800dp screen) |
 * |------------|---------------------|------------------------------|
 * | `peek`     | 0.26 (26%)          | ~208dp                       |
 * | `half`     | 0.50 (50%)          | ~400dp                       |
 * | `expanded` | 0.75 (75%)          | ~600dp                       |
 * | `full`     | 0.94 (94%)          | ~752dp                       |
 */
export type Ux4gBottomSheetSize = 'peek' | 'half' | 'expanded' | 'full';

/** Horizontal arrangement of the footer actions. */
export type Ux4gBottomSheetFooterAlign = 'split' | 'left' | 'center' | 'right';

const SIZE_RATIO: Record<Ux4gBottomSheetSize, number> = {
  peek: 0.26,
  half: 0.5,
  expanded: 0.75,
  full: 0.94,
};

const ALL_SIZES: Ux4gBottomSheetSize[] = ['peek', 'half', 'expanded', 'full'];

/* ── UX4G Design System Tokens ─────────────────────────────────────────── */
const DEFAULT_CORNER_RADIUS = 16; // 16dp top-left and top-right radius as per UX4G spec
const GRIP_WIDTH = 32;
const GRIP_HEIGHT = 4;
const HANDLE_PADDING_TOP = 12;
const HANDLE_PADDING_BOTTOM = 6;
const EDGE = 16;
const FOOTER_GAP = 12;
const HEADER_ICON_SIZE = 22;
const HEADER_ICON_GAP = 10;
const BUTTON_HEIGHT = 44;
const SCRIM_OPACITY = 0.5;

const OPEN_DURATION = 260;
const CLOSE_DURATION = 200;
/** Downward velocity (px/ms) that triggers dismiss at bottom-most snap point. */
const DISMISS_VELOCITY = 0.5;
/** Velocity threshold to jump to next snap point. */
const SNAP_VELOCITY_THRESHOLD = 0.35;

export interface Ux4gBottomSheetProps {
  /** Whether the sheet is shown. The component is fully controlled. */
  visible: boolean;
  /**
   * Called when the sheet asks to close: backdrop tap, close button, Android back,
   * or swipe-down. Set `visible` to `false` in this callback.
   */
  onDismiss: () => void;

  /** Height preset from the UX4G `Size` variants ('peek', 'half', 'expanded', 'full'). @default 'half' */
  size?: Ux4gBottomSheetSize;
  /** Alias for `size` for developer convenience. */
  snapPoint?: Ux4gBottomSheetSize;
  /** Explicit sheet height in pixels. Overrides `size` / `snapPoint` when provided. */
  height?: number;

  /* ── Header ── */
  /** Whether to render the header block. @default true */
  showHeader?: boolean;
  /** Header title text. */
  title?: string;
  /** Secondary subtitle / description text rendered below the title. */
  description?: string;
  /** Subtle tag or muted text rendered next to the title. */
  subtleText?: string;
  /** Leading icon / widget rendered before the title (e.g. logo or symbol). */
  icon?: React.ReactNode;
  /** Whether to show the header close (✕) button. @default true */
  showCloseButton?: boolean;
  /** Custom callback for close button press (defaults to `onDismiss`). */
  onCloseClick?: () => void;
  /** Whether to show a divider under the header. @default false */
  showHeaderDivider?: boolean;

  /* ── Content ── */
  /** Sheet body content. */
  children?: React.ReactNode;
  /** Wrap `children` in a scrollable ScrollView. @default true */
  scrollable?: boolean;
  /** Whether to show a divider between content and footer. @default false */
  showBottomDivider?: boolean;

  /* ── Footer Actions ── */
  /** Whether to render the footer button bar. @default true */
  showFooter?: boolean;
  /** Whether to show the primary action button. @default true */
  showPrimaryButton?: boolean;
  /** Whether to show the secondary action button. @default true */
  showSecondaryButton?: boolean;
  /** Text for the primary action button. @default 'Button' */
  primaryButtonText?: string;
  /** Text for the secondary action button. @default 'Button' */
  secondaryButtonText?: string;
  /** Callback fired when primary button is clicked (defaults to `onDismiss`). */
  onPrimaryPress?: () => void;
  /** Callback fired when secondary button is clicked (defaults to `onDismiss`). */
  onSecondaryPress?: () => void;
  /** Renders the primary action in the destructive error color. @default false */
  isDestructive?: boolean;
  /** Footer button alignment layout. @default 'split' */
  footerAlign?: Ux4gBottomSheetFooterAlign;
  /** Replaces the standard buttons with custom footer content. */
  footerContent?: React.ReactNode;

  /* ── Draggable & Gesture Behaviour ── */
  /** Whether swipe / drag gestures are enabled on the bottom sheet. @default true */
  draggable?: boolean;
  /** Alias for `draggable`. @default true */
  isDraggable?: boolean;
  /** Whether dragging up/down expands and collapses between multiple snap points. @default true */
  enableDragToExpand?: boolean;
  /** Allowed snap points for draggable transitions. Defaults to all 4 UX4G sizes: `['peek', 'half', 'expanded', 'full']`. */
  snapPoints?: Ux4gBottomSheetSize[];
  /** Callback fired when the bottom sheet snaps to a new size during drag. */
  onSnapChange?: (size: Ux4gBottomSheetSize) => void;
  /** Whether to show the top drag handle pill. @default true */
  showDragHandle?: boolean;
  /** Whether to render the darkened background backdrop scrim. @default true */
  showBackdrop?: boolean;
  /** Dismiss when the backdrop scrim is tapped. @default true */
  dismissOnBackdropPress?: boolean;
  /** Bottom safe-area padding in pixels. @default 0 */
  bottomInset?: number;

  /* ── Styling Overrides ── */
  /** Background color for the sheet surface. Defaults to theme surface color. */
  backgroundColor?: string;
  /** Color of the backdrop scrim. Defaults to UX4G neutral950 with opacity. */
  scrimColor?: string;
  /** Top-left and top-right corner radius in pixels. @default 16 */
  cornerRadius?: number;
  /** Custom container style override for the sheet. */
  style?: StyleProp<ViewStyle>;
  /** Custom content container style override. */
  contentContainerStyle?: StyleProp<ViewStyle>;
  /** Custom title text style override. */
  titleStyle?: StyleProp<TextStyle>;
  /** Custom description text style override. */
  descriptionStyle?: StyleProp<TextStyle>;
  /** Test identifier for automated testing. */
  testID?: string;
}

/**
 * **Ux4gBottomSheet**
 *
 * Fully draggable, developer-friendly, accessible Modal Bottom Sheet built strictly to UX4G Design System guidelines:
 * - Full **draggable** gesture support: swipe down to dismiss or drag between snap points (`peek` <-> `half` <-> `expanded` <-> `full`)
 * - **Fixed Bottom Action Buttons**: Buttons remain anchored at the bottom of the screen at all heights and throughout dragging
 * - 16dp top-left and top-right rounded corners (`cornerRadius: 16`)
 * - Top drag handle indicator pill
 * - Header row with icon, title, description, and close button
 * - Native UX4G Button components for primary and secondary actions
 * - Smooth physics with spring animations and velocity detection
 * - Full Dark Mode & Light Mode support via UX4G Theme Context
 * - Hardware Back button integration on Android
 */
export const Ux4gBottomSheet: React.FC<Ux4gBottomSheetProps> = ({
  visible,
  onDismiss,
  size,
  snapPoint,
  height,

  showHeader = true,
  title,
  description,
  subtleText,
  icon,
  showCloseButton = true,
  onCloseClick,
  showHeaderDivider = false,

  children,
  scrollable = true,
  showBottomDivider = false,

  showFooter = true,
  showPrimaryButton = true,
  showSecondaryButton = true,
  primaryButtonText = 'Button',
  secondaryButtonText = 'Button',
  onPrimaryPress,
  onSecondaryPress,
  isDestructive = false,
  footerAlign = 'split',
  footerContent,

  draggable = true,
  isDraggable = true,
  enableDragToExpand = true,
  snapPoints,
  onSnapChange,
  showDragHandle = true,
  showBackdrop = true,
  dismissOnBackdropPress = true,
  bottomInset = 0,

  backgroundColor,
  scrimColor,
  cornerRadius = DEFAULT_CORNER_RADIUS,
  style,
  contentContainerStyle,
  titleStyle,
  descriptionStyle,
  testID,
}) => {
  const theme = useUx4gTheme();
  const { colors, typography } = theme;
  const { height: windowHeight } = useWindowDimensions();

  const effectiveSize: Ux4gBottomSheetSize = snapPoint ?? size ?? 'half';
  const canDrag = draggable && isDraggable;

  // Compute allowed snap points
  const activeSnapPoints: Ux4gBottomSheetSize[] = useMemo(() => {
    if (snapPoints && snapPoints.length > 0) return snapPoints;
    if (enableDragToExpand && height == null) return ALL_SIZES;
    return [effectiveSize];
  }, [snapPoints, enableDragToExpand, height, effectiveSize]);

  // Map snap points to pixel heights
  const snapHeights = useMemo(() => {
    return activeSnapPoints.map((s) => Math.round(windowHeight * SIZE_RATIO[s]));
  }, [activeSnapPoints, windowHeight]);

  const minSheetHeight = useMemo(() => Math.min(...snapHeights), [snapHeights]);
  const maxSheetHeight = useMemo(() => {
    if (height != null) return height;
    return Math.max(...snapHeights);
  }, [height, snapHeights]);

  const targetInitialHeight = useMemo(() => {
    if (height != null) return height;
    return Math.round(windowHeight * SIZE_RATIO[effectiveSize]);
  }, [height, windowHeight, effectiveSize]);

  // Current active snap size state
  const [currentSize, setCurrentSize] = useState<Ux4gBottomSheetSize>(effectiveSize);

  // `mounted` keeps the native Modal alive through the closing animation.
  const [mounted, setMounted] = useState(visible);

  const animatedHeight = useRef(new Animated.Value(targetInitialHeight)).current;
  const translateY = useRef(new Animated.Value(targetInitialHeight + 50)).current;
  const scrimOpacity = useRef(new Animated.Value(0)).current;
  const currentHeightRef = useRef(targetInitialHeight);
  const dragStartHeight = useRef(targetInitialHeight);

  const surfaceColor = backgroundColor ?? colors.surface;
  const resolvedScrim = scrimColor ?? UX4GColors.neutral950;
  const gripColor = theme.isDark ? UX4GColors.neutral600 : UX4GColors.neutral300;
  const mutedColor = theme.isDark ? UX4GColors.neutral400 : UX4GColors.neutral600;
  const dividerColor = theme.isDark ? UX4GColors.neutral800 : UX4GColors.neutral200;

  const handleClose = useCallback(() => {
    if (onCloseClick) {
      onCloseClick();
    } else {
      onDismiss();
    }
  }, [onCloseClick, onDismiss]);

  const springToHeight = useCallback(
    (targetH: number, onFinish?: () => void) => {
      currentHeightRef.current = targetH;
      Animated.spring(animatedHeight, {
        toValue: targetH,
        useNativeDriver: false,
        bounciness: 3,
        speed: 16,
      }).start(({ finished }) => {
        if (finished) onFinish?.();
      });
    },
    [animatedHeight]
  );

  const animateIn = useCallback(() => {
    animatedHeight.setValue(targetInitialHeight);
    translateY.setValue(targetInitialHeight + 50);
    currentHeightRef.current = targetInitialHeight;

    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: OPEN_DURATION,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }),
      Animated.timing(scrimOpacity, {
        toValue: 1,
        duration: OPEN_DURATION,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }),
    ]).start();
  }, [animatedHeight, translateY, scrimOpacity, targetInitialHeight]);

  const animateOut = useCallback(
    (done?: () => void) => {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: currentHeightRef.current + 60,
          duration: CLOSE_DURATION,
          easing: Easing.in(Easing.cubic),
          useNativeDriver: false,
        }),
        Animated.timing(scrimOpacity, {
          toValue: 0,
          duration: CLOSE_DURATION,
          easing: Easing.in(Easing.cubic),
          useNativeDriver: false,
        }),
      ]).start(({ finished }) => {
        if (finished) done?.();
      });
    },
    [translateY, scrimOpacity]
  );

  useEffect(() => {
    if (visible) {
      setMounted(true);
    } else if (mounted) {
      animateOut(() => setMounted(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  useEffect(() => {
    if (mounted && visible) {
      animateIn();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, visible]);

  // Respond to prop size changes smoothly
  useEffect(() => {
    if (mounted && visible && height == null) {
      const nextH = Math.round(windowHeight * SIZE_RATIO[effectiveSize]);
      setCurrentSize(effectiveSize);
      springToHeight(nextH);
    }
  }, [effectiveSize, height, windowHeight, mounted, visible, springToHeight]);

  // Android hardware back button handler
  useEffect(() => {
    if (!visible || Platform.OS !== 'android') return;
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      onDismiss();
      return true;
    });
    return () => sub.remove();
  }, [visible, onDismiss]);

  /* ── Interactive Draggable PanResponder with Fixed Bottom Buttons ── */
  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => canDrag,
        onMoveShouldSetPanResponder: (_evt, g) =>
          canDrag && Math.abs(g.dy) > 3 && Math.abs(g.dy) > Math.abs(g.dx),
        onPanResponderGrant: () => {
          dragStartHeight.current = currentHeightRef.current;
        },
        onPanResponderMove: (_evt, g) => {
          // Dragging UP (g.dy < 0) increases height; dragging DOWN (g.dy > 0) decreases height
          let newH = dragStartHeight.current - g.dy;

          // Apply rubber-band resistance when dragging above highest point
          if (newH > maxSheetHeight) {
            newH = maxSheetHeight + (newH - maxSheetHeight) * 0.25;
          }

          animatedHeight.setValue(Math.max(40, newH));
        },
        onPanResponderRelease: (_evt, g) => {
          const finalH = dragStartHeight.current - g.dy;
          const vy = g.vy; // < 0 is upward flick, > 0 is downward flick

          // Check if dragged down sufficiently below min snap point to dismiss
          const isAtOrBelowLowest = finalH < minSheetHeight * 0.72;
          const isFastDown = vy > DISMISS_VELOCITY && g.dy > 30;

          if (isAtOrBelowLowest || (isFastDown && finalH <= minSheetHeight + 20)) {
            onDismiss();
            return;
          }

          // If dragged with fast upward velocity, go to next higher snap point
          if (vy < -SNAP_VELOCITY_THRESHOLD) {
            const higherSizes = activeSnapPoints.filter((s) => {
              const h = Math.round(windowHeight * SIZE_RATIO[s]);
              return h > finalH + 10;
            });
            if (higherSizes.length > 0) {
              const nextSize = higherSizes[0];
              const nextH = Math.round(windowHeight * SIZE_RATIO[nextSize]);
              setCurrentSize(nextSize);
              onSnapChange?.(nextSize);
              springToHeight(nextH);
              return;
            }
          }

          // If dragged with fast downward velocity, go to next lower snap point
          if (vy > SNAP_VELOCITY_THRESHOLD) {
            const lowerSizes = [...activeSnapPoints].reverse().filter((s) => {
              const h = Math.round(windowHeight * SIZE_RATIO[s]);
              return h < finalH - 10;
            });
            if (lowerSizes.length > 0) {
              const nextSize = lowerSizes[0];
              const nextH = Math.round(windowHeight * SIZE_RATIO[nextSize]);
              setCurrentSize(nextSize);
              onSnapChange?.(nextSize);
              springToHeight(nextH);
              return;
            }
          }

          // Snap to closest height preset
          let closestSize = activeSnapPoints[0];
          let minDiff = Infinity;

          activeSnapPoints.forEach((s) => {
            const h = Math.round(windowHeight * SIZE_RATIO[s]);
            const diff = Math.abs(finalH - h);
            if (diff < minDiff) {
              minDiff = diff;
              closestSize = s;
            }
          });

          const targetH = Math.round(windowHeight * SIZE_RATIO[closestSize]);
          setCurrentSize(closestSize);
          onSnapChange?.(closestSize);
          springToHeight(targetH);
        },
        onPanResponderTerminate: () => {
          const targetH = Math.round(windowHeight * SIZE_RATIO[currentSize]);
          springToHeight(targetH);
        },
      }),
    [
      canDrag,
      maxSheetHeight,
      minSheetHeight,
      activeSnapPoints,
      windowHeight,
      currentSize,
      onSnapChange,
      springToHeight,
      animatedHeight,
      onDismiss,
    ]
  );

  const hasHeader =
    showHeader &&
    (title != null || description != null || subtleText != null || icon != null || showCloseButton);
  const hasFooter =
    showFooter && (footerContent != null || showPrimaryButton || showSecondaryButton);

  const isSplit = footerAlign === 'split';

  if (!mounted) return null;

  return (
    <Modal
      visible={mounted}
      transparent
      animationType="none"
      statusBarTranslucent
      onRequestClose={onDismiss}
      testID={testID}
    >
      <View style={styles.root}>
        {showBackdrop && (
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: resolvedScrim,
                opacity: Animated.multiply(scrimOpacity, SCRIM_OPACITY),
              },
            ]}
          >
            <Pressable
              style={StyleSheet.absoluteFill}
              onPress={dismissOnBackdropPress ? onDismiss : undefined}
              accessibilityRole="button"
              accessibilityLabel="Close bottom sheet"
              testID={testID ? `${testID}-backdrop` : undefined}
            />
          </Animated.View>
        )}

        <Animated.View
          style={[
            styles.sheet,
            {
              height: Animated.add(animatedHeight, bottomInset),
              paddingBottom: bottomInset,
              backgroundColor: surfaceColor,
              borderTopLeftRadius: cornerRadius,
              borderTopRightRadius: cornerRadius,
              transform: [{ translateY }],
            },
            style,
          ]}
        >
          {/* Draggable Top Region (Drag Handle + Header) */}
          <View {...(canDrag ? panResponder.panHandlers : {})}>
            {/* Top Drag Handle Grip */}
            {showDragHandle && (
              <View style={styles.handleArea}>
                <View style={[styles.grip, { backgroundColor: gripColor }]} />
              </View>
            )}

            {/* Header Row */}
            {hasHeader && (
              <View style={!showDragHandle ? { paddingTop: EDGE } : undefined}>
                <View style={styles.headerRow}>
                  {icon != null && <View style={styles.headerIcon}>{icon}</View>}
                  <View style={styles.headerTitlesBlock}>
                    <Text
                      numberOfLines={1}
                      style={[
                        typography.hS_strong ?? typography.hS_default,
                        styles.headerTitle,
                        { color: colors.onSurface },
                        titleStyle,
                      ]}
                    >
                      {title ?? 'Header'}
                    </Text>
                    {description != null && (
                      <Text
                        numberOfLines={2}
                        style={[
                          typography.bS_default ?? typography.tM_default,
                          styles.descriptionText,
                          { color: mutedColor },
                          descriptionStyle,
                        ]}
                      >
                        {description}
                      </Text>
                    )}
                  </View>
                  {subtleText != null && (
                    <Text style={[typography.lM_default, styles.subtle, { color: mutedColor }]}>
                      {subtleText}
                    </Text>
                  )}
                  {showCloseButton && (
                    <Pressable
                      onPress={handleClose}
                      hitSlop={8}
                      accessibilityRole="button"
                      accessibilityLabel="Close"
                      style={styles.closeButton}
                      testID={testID ? `${testID}-close` : undefined}
                    >
                      {Ux4gIcons.close({ size: 18, color: colors.onSurface })}
                    </Pressable>
                  )}
                </View>

                {showHeaderDivider && (
                  <View style={styles.dividerInset}>
                    <Ux4gDivider color={dividerColor} />
                  </View>
                )}
              </View>
            )}
          </View>

          {/* Body Content - Dynamically Resizes between Header and Fixed Footer */}
          {scrollable ? (
            <ScrollView
              style={styles.contentFlex}
              contentContainerStyle={[styles.contentPad, contentContainerStyle]}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              nestedScrollEnabled
            >
              {children}
            </ScrollView>
          ) : (
            <View style={[styles.contentFlex, styles.contentPad, contentContainerStyle]}>
              {children}
            </View>
          )}

          {/* Bottom Content Divider */}
          {showBottomDivider && (
            <View style={styles.bottomDividerWrapper}>
              <Ux4gDivider color={dividerColor} />
            </View>
          )}

          {/* Fixed Footer Actions (Always anchored at the bottom of the visible sheet) */}
          {hasFooter && (
            <View style={styles.footerContainer}>
              {footerContent ?? (
                <View style={[styles.footer, isSplit && styles.footerSplit]}>
                  {showPrimaryButton && (
                    <View style={isSplit ? styles.footerButtonFlex : undefined}>
                      <Ux4gButton
                        variant="primary"
                        text={primaryButtonText}
                        onPress={onPrimaryPress ?? onDismiss}
                        height={BUTTON_HEIGHT}
                        backgroundColor={isDestructive ? colors.error : undefined}
                        testID={testID ? `${testID}-primary` : undefined}
                      />
                    </View>
                  )}
                  {showSecondaryButton && (
                    <View style={isSplit ? styles.footerButtonFlex : undefined}>
                      <Ux4gButton
                        variant="outline"
                        text={secondaryButtonText}
                        onPress={onSecondaryPress ?? onDismiss}
                        height={BUTTON_HEIGHT}
                        testID={testID ? `${testID}-secondary` : undefined}
                      />
                    </View>
                  )}
                </View>
              )}
            </View>
          )}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  sheet: {
    width: '100%',
    overflow: 'hidden',
  },
  handleArea: {
    paddingTop: HANDLE_PADDING_TOP,
    paddingBottom: HANDLE_PADDING_BOTTOM,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grip: {
    width: GRIP_WIDTH,
    height: GRIP_HEIGHT,
    borderRadius: GRIP_HEIGHT / 2,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: EDGE,
    paddingTop: 8,
    paddingBottom: 12,
  },
  headerIcon: {
    width: HEADER_ICON_SIZE,
    height: HEADER_ICON_SIZE,
    marginRight: HEADER_ICON_GAP,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitlesBlock: {
    flex: 1,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
  },
  descriptionText: {
    fontSize: 13,
    lineHeight: 18,
    marginTop: 2,
  },
  subtle: {
    marginHorizontal: 8,
    alignSelf: 'center',
  },
  closeButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    marginTop: -2,
  },
  dividerInset: {
    paddingHorizontal: EDGE,
    marginTop: 4,
  },
  contentFlex: {
    flex: 1,
  },
  contentPad: {
    paddingHorizontal: EDGE,
    paddingVertical: 12,
  },
  bottomDividerWrapper: {
    paddingHorizontal: EDGE,
    paddingVertical: 8,
  },
  footerContainer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0,0,0,0.06)',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: EDGE,
    paddingVertical: 14,
    gap: FOOTER_GAP,
  },
  footerSplit: {
    justifyContent: 'space-between',
  },
  footerButtonFlex: {
    flex: 1,
  },
});
