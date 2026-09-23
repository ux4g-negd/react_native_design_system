import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Animated,
  Easing,
  Platform,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from 'react-native';
import { UX4GColors } from '../../foundation/colors';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';

let Svg: any = null;
let Path: any = null;
try {
  const RNSvg = require('react-native-svg');
  Svg = RNSvg.Svg || RNSvg.default;
  Path = RNSvg.Path;
} catch (e) {
  // react-native-svg fallback
}

// Built-in vector icons for 100% crisp, self-contained rendering
export const FabBuiltInIcon: React.FC<{
  name: 'plus' | 'close' | 'message' | 'share' | 'call' | string;
  size?: number;
  color?: string;
}> = ({ name, size = 20, color = UX4GColors.white }) => {
  if (Svg && Path) {
    switch (name) {
      case 'plus':
      case 'add':
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path
              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              fill={color}
            />
          </Svg>
        );
      case 'close':
      case 'cross':
      case 'cancel':
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill={color}
            />
          </Svg>
        );
      case 'message':
      case 'chat':
      case 'mail':
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path
              d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16ZM7 9H17V11H7V9ZM7 6H17V8H7V6Z"
              fill={color}
            />
          </Svg>
        );
      case 'share':
      case 'fork':
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path
              d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z"
              fill={color}
            />
          </Svg>
        );
      case 'call':
      case 'phone':
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path
              d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.27 17.26C10.44 15.82 8.18 13.56 6.74 10.73L8.94 8.53C9.22 8.25 9.3 7.86 9.19 7.52C8.83 6.41 8.63 5.22 8.63 3.99C8.63 3.47 8.21 3.06 7.69 3.06H4.22C3.7 3.06 3.29 3.47 3.29 3.99C3.29 13.22 10.78 20.71 20.01 20.71C20.53 20.71 20.94 20.3 20.94 19.78V16.31C20.95 15.8 20.53 15.38 20.01 15.38Z"
              fill={color}
            />
          </Svg>
        );
      default:
        break;
    }
  }

  // Text/unicode fallback
  let symbol = '+';
  if (name === 'close' || name === 'cross') symbol = '✕';
  else if (name === 'message' || name === 'chat') symbol = '💬';
  else if (name === 'share' || name === 'fork') symbol = '🔗';
  else if (name === 'call' || name === 'phone') symbol = '📞';

  return (
    <Text
      style={{
        fontSize: size * 0.9,
        lineHeight: size,
        color: color,
        textAlign: 'center',
        fontWeight: 'bold',
      }}
    >
      {symbol}
    </Text>
  );
};

export type Ux4gFabVariant =
  | 'icon'
  | 'labelled'
  | 'menu-joined'
  | 'menu-spaced'
  | 'menu-labelled';

export type Ux4gFabColorTheme = 'brand' | 'surface';

export type Ux4gFabPosition =
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'top-right'
  | 'top-left'
  | 'none';

export type Ux4gFabSize = 'small' | 'medium' | 'large';

export interface Ux4gFabActionItem {
  /** Unique key or id for the action */
  id: string;
  /** Text label displayed in 'menu-labelled' variant or tooltip */
  label?: string;
  /** Icon name (e.g. 'plus', 'message', 'share', 'call') or custom React node / render function */
  icon?: string | React.ReactNode | ((props: { color: string; size: number }) => React.ReactNode);
  /** Callback fired when this action item is pressed */
  onPress?: () => void;
  /** Custom background color override for this action item */
  backgroundColor?: string;
  /** Custom content/icon/text color override */
  contentColor?: string;
  /** Disable this action item */
  disabled?: boolean;
  /** Test identifier */
  testID?: string;
}

export interface Ux4gFabProps {
  /** Layout variant. Options: 'icon', 'labelled', 'menu-joined', 'menu-spaced', 'menu-labelled'. Defaults to 'icon'. */
  variant?: Ux4gFabVariant;
  /** Color theme. Options: 'brand' (purple filled) or 'surface' (white elevated). Defaults to 'brand'. */
  colorTheme?: Ux4gFabColorTheme;
  /** Text label for 'labelled' variant or extended FAB */
  label?: string;
  /** Main icon when closed or idle. Defaults to 'plus'. */
  icon?: string | React.ReactNode | ((props: { color: string; size: number }) => React.ReactNode);
  /** Active / open icon when speed-dial is expanded. Defaults to 'close'. */
  activeIcon?: string | React.ReactNode | ((props: { color: string; size: number }) => React.ReactNode);
  /** Action items list for menu variants ('menu-joined', 'menu-spaced', 'menu-labelled') */
  actions?: Ux4gFabActionItem[];
  /** Controlled open state for speed-dial menus */
  isOpen?: boolean;
  /** Initial open state when uncontrolled */
  defaultOpen?: boolean;
  /** Callback fired when speed-dial menu opens or closes */
  onToggle?: (isOpen: boolean) => void;
  /** Callback fired on main button press */
  onPress?: (event: GestureResponderEvent) => void;
  /** Screen position preset. Defaults to 'none' (inline flow). */
  position?: Ux4gFabPosition;
  /** Custom position offset overrides when positioned */
  offset?: {
    bottom?: number;
    top?: number;
    right?: number;
    left?: number;
  };
  /** Whether to show a semi-transparent backdrop scrim when menu is open. Defaults to false. */
  showBackdrop?: boolean;
  /** Callback when backdrop scrim is pressed */
  onBackdropPress?: () => void;
  /** Whether the FAB is disabled */
  disabled?: boolean;
  /** Sizing preset. Defaults to 'medium'. */
  size?: Ux4gFabSize;
  /** Custom style for the main FAB button */
  style?: StyleProp<ViewStyle>;
  /** Custom style for the overall container wrapper */
  containerStyle?: StyleProp<ViewStyle>;
  /** Custom text style for labels */
  labelStyle?: StyleProp<TextStyle>;
  /** Custom background color override */
  backgroundColor?: string;
  /** Custom content (icon/text) color override */
  contentColor?: string;
  /** Custom elevation shadow level */
  elevation?: number;
  /** Enable smooth open/close scale and fade animation. Defaults to true. */
  animated?: boolean;
  /** Accessibility label */
  accessibilityLabel?: string;
  /** Test identifier */
  testID?: string;
}

const DEFAULT_ACTIONS: Ux4gFabActionItem[] = [
  { id: 'add', label: 'Add', icon: 'plus' },
  { id: 'message', label: 'Message', icon: 'message' },
  { id: 'share', label: 'Share', icon: 'share' },
  { id: 'call', label: 'Call', icon: 'call' },
];

export const Ux4gFab: React.FC<Ux4gFabProps> = ({
  variant = 'icon',
  colorTheme = 'brand',
  label = 'Button',
  icon = 'plus',
  activeIcon = 'close',
  actions = DEFAULT_ACTIONS,
  isOpen: controlledIsOpen,
  defaultOpen = false,
  onToggle,
  onPress,
  position = 'none',
  offset,
  showBackdrop = false,
  onBackdropPress,
  disabled = false,
  size = 'medium',
  style,
  containerStyle,
  labelStyle,
  backgroundColor,
  contentColor,
  elevation = 4,
  animated = true,
  accessibilityLabel,
  testID,
}) => {
  const { colors } = useUx4gTheme();
  const [internalOpen, setInternalOpen] = useState<boolean>(defaultOpen);
  const isControlled = controlledIsOpen !== undefined;
  const isMenuOpen = isControlled ? controlledIsOpen : internalOpen;

  const isMenuVariant =
    variant === 'menu-joined' ||
    variant === 'menu-spaced' ||
    variant === 'menu-labelled';

  const isFloating = position !== 'none';
  const isRightAligned = position === 'bottom-right' || position === 'top-right';
  const isLeftAligned = position === 'bottom-left' || position === 'top-left';


  // Animation values
  const animValue = useRef(new Animated.Value(isMenuOpen ? 1 : 0)).current;

  useEffect(() => {
    if (animated) {
      Animated.timing(animValue, {
        toValue: isMenuOpen ? 1 : 0,
        duration: 220,
        easing: Easing.bezier(0.2, 0, 0, 1),
        useNativeDriver: true,
      }).start();
    } else {
      animValue.setValue(isMenuOpen ? 1 : 0);
    }
  }, [isMenuOpen, animated, animValue]);

  const handleToggle = useCallback(() => {
    if (disabled) return;
    const nextState = !isMenuOpen;
    if (!isControlled) {
      setInternalOpen(nextState);
    }
    onToggle?.(nextState);
  }, [disabled, isMenuOpen, isControlled, onToggle]);

  const handleMainPress = useCallback(
    (e: GestureResponderEvent) => {
      if (disabled) return;
      if (isMenuVariant) {
        handleToggle();
      }
      onPress?.(e);
    },
    [disabled, isMenuVariant, handleToggle, onPress]
  );

  const handleBackdropPress = useCallback(() => {
    if (onBackdropPress) {
      onBackdropPress();
    } else {
      if (!isControlled) setInternalOpen(false);
      onToggle?.(false);
    }
  }, [onBackdropPress, isControlled, onToggle]);

  // Color calculation based on theme and overrides
  const isBrand = colorTheme === 'brand';
  const brandPrimary = colors?.primary || UX4GColors.primary;
  const surfaceWhite = UX4GColors.white;

  // Main trigger colors
  const mainBgColor =
    backgroundColor ||
    (isBrand
      ? brandPrimary
      : surfaceWhite);

  const mainFgColor =
    contentColor ||
    (isBrand
      ? UX4GColors.white
      : brandPrimary);

  // Sizing
  let mainButtonWidth = 56;
  let mainButtonHeight = 56;
  let iconSize = 24;
  let fontSize = 15;

  if (size === 'small') {
    mainButtonWidth = 44;
    mainButtonHeight = 44;
    iconSize = 20;
    fontSize = 13;
  } else if (size === 'large') {
    mainButtonWidth = 64;
    mainButtonHeight = 64;
    iconSize = 28;
    fontSize = 16;
  }

  // Render helper for icons
  const renderIcon = (
    iconProp: any,
    defaultColor: string,
    currentIconSize: number
  ) => {
    if (!iconProp) return null;
    if (typeof iconProp === 'string') {
      return <FabBuiltInIcon name={iconProp} size={currentIconSize} color={defaultColor} />;
    }
    if (typeof iconProp === 'function') {
      return iconProp({ color: defaultColor, size: currentIconSize });
    }
    return iconProp;
  };

  // Main trigger icon: if menu is open, show activeIcon (e.g. 'close'), else normal icon
  const currentIconProp = isMenuVariant && isMenuOpen ? activeIcon : icon;

  // Position styles
  const getPositionStyle = (): ViewStyle => {
    if (!isFloating) return {};
    const pos: ViewStyle = { position: 'absolute', zIndex: 9999 };
    const defaultOffset = 24;

    switch (position) {
      case 'bottom-right':
        pos.bottom = offset?.bottom ?? defaultOffset;
        pos.right = offset?.right ?? defaultOffset;
        break;
      case 'bottom-left':
        pos.bottom = offset?.bottom ?? defaultOffset;
        pos.left = offset?.left ?? defaultOffset;
        break;
      case 'bottom-center':
        pos.bottom = offset?.bottom ?? defaultOffset;
        pos.alignSelf = 'center';
        break;
      case 'top-right':
        pos.top = offset?.top ?? defaultOffset;
        pos.right = offset?.right ?? defaultOffset;
        break;
      case 'top-left':
        pos.top = offset?.top ?? defaultOffset;
        pos.left = offset?.left ?? defaultOffset;
        break;
    }
    return pos;
  };

  // Render Joined Menu Capsule
  const renderMenuJoined = () => {
    if (!actions || actions.length === 0) return null;

    return (
      <Animated.View
        style={[
          styles.menuJoinedCapsule,
          {
            backgroundColor: surfaceWhite,
            opacity: animValue,
            alignSelf: isRightAligned ? 'flex-end' : isLeftAligned ? 'flex-start' : 'center',
            marginRight: isRightAligned ? (mainButtonWidth - 48) / 2 : 0,
            marginLeft: isLeftAligned ? (mainButtonWidth - 48) / 2 : 0,
            transform: [
              {
                scale: animValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                }),
              },
              {
                translateY: animValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
            ],
          },
        ]}
      >
        {actions.map((action, index) => {
          const actionIconColor =
            action.contentColor ||
            (isBrand ? UX4GColors.neutral800 : UX4GColors.neutral800);

          return (
            <Pressable
              key={action.id || index}
              testID={action.testID}
              disabled={action.disabled}
              onPress={() => {
                action.onPress?.();
                if (!isControlled) setInternalOpen(false);
                onToggle?.(false);
              }}
              style={({ pressed }) => [
                styles.menuJoinedItem,
                pressed && styles.itemPressed,
                action.disabled && styles.disabled,
              ]}
              accessibilityRole="button"
              accessibilityLabel={action.label}
            >
              {renderIcon(action.icon, actionIconColor, 20)}
            </Pressable>
          );
        })}
      </Animated.View>
    );
  };

  // Render Spaced Menu Circles
  const renderMenuSpaced = () => {
    if (!actions || actions.length === 0) return null;

    return (
      <Animated.View
        style={[
          styles.menuSpacedContainer,
          {
            opacity: animValue,
            alignItems: isRightAligned ? 'flex-end' : isLeftAligned ? 'flex-start' : 'center',
            marginRight: isRightAligned ? (mainButtonWidth - 44) / 2 : 0,
            marginLeft: isLeftAligned ? (mainButtonWidth - 44) / 2 : 0,
            transform: [
              {
                scale: animValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                }),
              },
              {
                translateY: animValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
            ],
          },
        ]}
      >
        {actions.map((action, index) => {
          const itemBg = action.backgroundColor || surfaceWhite;
          const itemFg =
            action.contentColor ||
            (isBrand ? UX4GColors.neutral800 : brandPrimary);

          return (
            <Pressable
              key={action.id || index}
              testID={action.testID}
              disabled={action.disabled}
              onPress={() => {
                action.onPress?.();
                if (!isControlled) setInternalOpen(false);
                onToggle?.(false);
              }}
              style={({ pressed }) => [
                styles.menuSpacedCircle,
                { backgroundColor: itemBg },
                pressed && styles.itemPressed,
                action.disabled && styles.disabled,
              ]}
              accessibilityRole="button"
              accessibilityLabel={action.label}
            >
              {renderIcon(action.icon, itemFg, 20)}
            </Pressable>
          );
        })}
      </Animated.View>
    );
  };

  // Render Labelled Menu Pills
  const renderMenuLabelled = () => {
    if (!actions || actions.length === 0) return null;

    return (
      <Animated.View
        style={[
          styles.menuLabelledContainer,
          {
            opacity: animValue,
            alignItems: isRightAligned ? 'flex-end' : isLeftAligned ? 'flex-start' : 'center',
            transform: [
              {
                scale: animValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                }),
              },
              {
                translateY: animValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
            ],
          },
        ]}
      >
        {actions.map((action, index) => {
          const itemBg = action.backgroundColor || surfaceWhite;
          const iconColor =
            action.contentColor ||
            (isBrand ? brandPrimary : UX4GColors.neutral900);
          const textColor =
            action.contentColor ||
            (isBrand ? brandPrimary : UX4GColors.neutral900);

          return (
            <Pressable
              key={action.id || index}
              testID={action.testID}
              disabled={action.disabled}
              onPress={() => {
                action.onPress?.();
                if (!isControlled) setInternalOpen(false);
                onToggle?.(false);
              }}
              style={({ pressed }) => [
                styles.menuLabelledPill,
                { backgroundColor: itemBg },
                isRightAligned
                  ? { alignSelf: 'flex-end' }
                  : isLeftAligned
                    ? { alignSelf: 'flex-start' }
                    : { alignSelf: 'center' },
                pressed && styles.itemPressed,
                action.disabled && styles.disabled,
              ]}

              accessibilityRole="button"
              accessibilityLabel={action.label}
            >
              {renderIcon(action.icon, iconColor, 18)}
              {action.label ? (
                <Text
                  numberOfLines={1}
                  ellipsizeMode="clip"
                  style={[styles.menuLabelledText, { color: textColor }]}
                >
                  {action.label}
                </Text>
              ) : null}
            </Pressable>
          );
        })}

      </Animated.View>
    );
  };

  const isLabelledVariant = variant === 'labelled';

  return (
    <>
      {showBackdrop && isMenuVariant && isMenuOpen && (
        <TouchableWithoutFeedback onPress={handleBackdropPress}>
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>
      )}

      <View
        style={[
          styles.rootContainer,
          getPositionStyle(),
          containerStyle,
        ]}
        pointerEvents="box-none"
      >
        {/* Menu Speed-Dial Content Above Trigger */}
        {isMenuVariant && (
          <View
            style={[
              styles.menuWrapper,
              isFloating && {
                position: 'absolute',
                bottom: (isLabelledVariant ? mainButtonHeight * 0.86 : mainButtonHeight) + 12,
                ...(isRightAligned
                  ? { right: 0, alignItems: 'flex-end' }
                  : isLeftAligned
                    ? { left: 0, alignItems: 'flex-start' }
                    : { alignSelf: 'center', alignItems: 'center' }),
              },
            ]}
            pointerEvents={isMenuOpen ? 'auto' : 'none'}
          >
            {variant === 'menu-joined' && renderMenuJoined()}
            {variant === 'menu-spaced' && renderMenuSpaced()}
            {variant === 'menu-labelled' && renderMenuLabelled()}
          </View>
        )}


        {/* Main Trigger Button */}
        <Pressable
          testID={testID}
          disabled={disabled}
          onPress={handleMainPress}
          accessibilityRole="button"
          accessibilityLabel={accessibilityLabel || (isLabelledVariant ? label : 'Floating Action Button')}
          style={({ pressed }) => [
            isLabelledVariant ? styles.mainPillButton : styles.mainCircleButton,
            {
              backgroundColor: mainBgColor,
              shadowColor: isBrand ? brandPrimary : '#000',
              elevation: elevation,
            },
            !isBrand && styles.surfaceBorder,
            isLabelledVariant
              ? {
                  height: mainButtonHeight * 0.86,
                  borderRadius: (mainButtonHeight * 0.86) / 2,
                }
              : {
                  width: mainButtonWidth,
                  height: mainButtonHeight,
                  borderRadius: mainButtonWidth / 2,
                },
            pressed && styles.mainPressed,
            disabled && styles.disabled,
            style,
          ]}
        >
          <Animated.View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              transform: [
                {
                  scale: isMenuVariant
                    ? animValue.interpolate({
                        inputRange: [0, 0.5, 1],
                        outputRange: [1, 0.8, 1],
                      })
                    : 1,
                },
              ],
            }}
          >
            {renderIcon(currentIconProp, mainFgColor, iconSize)}
          </Animated.View>


          {isLabelledVariant && label ? (
            <Text
              style={[
                styles.mainLabelText,
                { color: mainFgColor, fontSize },
                labelStyle,
              ]}
            >
              {label}
            </Text>
          ) : null}
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 12,
    minWidth: 180,
  },
  mainCircleButton: {
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.22,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
      web: {
        boxShadow: '0px 4px 14px rgba(74, 43, 194, 0.25)',
        cursor: 'pointer',
      } as any,
    }),
  },
  mainPillButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 22,
    gap: 8,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.22,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
      web: {
        boxShadow: '0px 4px 14px rgba(74, 43, 194, 0.25)',
        cursor: 'pointer',
      } as any,
    }),
  },
  surfaceBorder: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
      web: {
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
      } as any,
    }),
  },
  mainLabelText: {
    fontWeight: '600',
    textAlign: 'center',
    includeFontPadding: false,
  },
  mainPressed: {
    transform: [{ scale: 0.95 }],
    opacity: 0.9,
  },
  itemPressed: {
    transform: [{ scale: 0.92 }],
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.45,
  },
  // Menu Joined Capsule
  menuJoinedCapsule: {
    borderRadius: 24,
    paddingVertical: 6,
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
      },
      android: {
        elevation: 5,
      },
      web: {
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
      } as any,
    }),
  },
  menuJoinedItem: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 2,
    ...Platform.select({
      web: {
        cursor: 'pointer',
      } as any,
    }),
  },
  // Menu Spaced Circles
  menuSpacedContainer: {
    alignItems: 'center',
    gap: 12,
  },
  menuSpacedCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
      web: {
        boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.08)',
        cursor: 'pointer',
      } as any,
    }),
  },
  // Menu Labelled Pills
  menuLabelledContainer: {
    alignItems: 'center',
    gap: 10,
    width: 'auto',
  },
  menuLabelledPill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
    paddingHorizontal: 18,
    borderRadius: 999,
    gap: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    flexShrink: 0,
    ...Platform.select({

      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.07)',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
      } as any,
    }),
  },

  menuLabelledText: {
    fontSize: 14,
    fontWeight: '500',
    includeFontPadding: false,
    flexShrink: 0,
    ...Platform.select({
      web: {
        whiteSpace: 'nowrap',
      } as any,
    }),
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    zIndex: 9998,
  },
});

