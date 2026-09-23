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
/** Fraction of sheet height a swipe must cover to dismiss. */
const DISMISS_THRESHOLD = 0.28;
/** Downward velocity (px/ms) that dismisses regardless of distance. */
const DISMISS_VELOCITY = 0.5;

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

  /* ── Gesture & Backdrop Behaviour ── */
  /** Whether to show the top drag handle pill. @default true */
  showDragHandle?: boolean;
  /** Whether swipe-down-to-dismiss gesture is enabled. @default true */
  draggable?: boolean;
  /** Alias for `draggable`. @default true */
  isDraggable?: boolean;
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
 * Developer-friendly, accessible Modal Bottom Sheet built strictly to UX4G Design System guidelines:
 * - 4 standard snap point sizes: `'peek'`, `'half'`, `'expanded'`, `'full'`
 * - 16dp top-left and top-right rounded corners (`cornerRadius: 16`)
 * - Top drag handle indicator
 * - Header row with icon, title, description, and close button
 * - Native UX4G Button components for primary and secondary actions
 * - Smooth gesture-driven swipe down to dismiss and spring animations
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

  showDragHandle = true,
  draggable = true,
  isDraggable = true,
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
  const sheetHeight = height ?? Math.round(windowHeight * SIZE_RATIO[effectiveSize]);
  const canDrag = draggable && isDraggable;

  // `mounted` keeps the native Modal alive through the closing animation.
  const [mounted, setMounted] = useState(visible);

  const translateY = useRef(new Animated.Value(sheetHeight)).current;
  const scrimOpacity = useRef(new Animated.Value(0)).current;
  const dragOffset = useRef(0);

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

  const animateIn = useCallback(() => {
    translateY.setValue(sheetHeight);
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: OPEN_DURATION,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(scrimOpacity, {
        toValue: 1,
        duration: OPEN_DURATION,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, [sheetHeight, translateY, scrimOpacity]);

  const animateOut = useCallback(
    (done?: () => void) => {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: sheetHeight,
          duration: CLOSE_DURATION,
          easing: Easing.in(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(scrimOpacity, {
          toValue: 0,
          duration: CLOSE_DURATION,
          easing: Easing.in(Easing.cubic),
          useNativeDriver: true,
        }),
      ]).start(({ finished }) => {
        if (finished) done?.();
      });
    },
    [sheetHeight, translateY, scrimOpacity]
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
    if (mounted && visible) animateIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, visible]);

  // Android hardware back button handler
  useEffect(() => {
    if (!visible || Platform.OS !== 'android') return;
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      onDismiss();
      return true;
    });
    return () => sub.remove();
  }, [visible, onDismiss]);

  /* ── Swipe-down to dismiss gesture ── */
  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => false,
        onMoveShouldSetPanResponder: (_evt, g) =>
          canDrag && g.dy > 4 && Math.abs(g.dy) > Math.abs(g.dx),
        onPanResponderGrant: () => {
          dragOffset.current = 0;
        },
        onPanResponderMove: (_evt, g) => {
          if (g.dy < 0) return; // do not drag upward past resting height
          dragOffset.current = g.dy;
          translateY.setValue(g.dy);
        },
        onPanResponderRelease: (_evt, g) => {
          const farEnough = g.dy > sheetHeight * DISMISS_THRESHOLD;
          const fastEnough = g.vy > DISMISS_VELOCITY;
          if (farEnough || fastEnough) {
            onDismiss();
          } else {
            Animated.spring(translateY, {
              toValue: 0,
              useNativeDriver: true,
              bounciness: 2,
              speed: 14,
            }).start();
          }
        },
        onPanResponderTerminate: () => {
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
            bounciness: 2,
            speed: 14,
          }).start();
        },
      }),
    [canDrag, sheetHeight, translateY, onDismiss]
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
              height: sheetHeight + bottomInset,
              paddingBottom: bottomInset,
              backgroundColor: surfaceColor,
              borderTopLeftRadius: cornerRadius,
              borderTopRightRadius: cornerRadius,
              transform: [{ translateY }],
            },
            style,
          ]}
        >
          {/* Top Drag Handle Grip */}
          {showDragHandle && (
            <View style={styles.handleArea} {...panResponder.panHandlers}>
              <View style={[styles.grip, { backgroundColor: gripColor }]} />
            </View>
          )}

          {/* Header */}
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

          {/* Body Content */}
          {scrollable ? (
            <ScrollView
              style={styles.contentFlex}
              contentContainerStyle={[styles.contentPad, contentContainerStyle]}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
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

          {/* Footer Actions (Primary Left, Secondary Right as per UX4G UI spec) */}
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
