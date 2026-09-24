import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  Platform,
  SafeAreaView,
} from 'react-native';
import { UX4GColors } from '../../foundation/colors';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { Ux4gIcons, Ux4gIconName } from '../../foundation/icons';

// ─── TYPES & INTERFACES ──────────────────────────────────────────────────────

/**
 * Indicator style for active tab item:
 * - `pill`: Soft rounded purple capsule background behind active tab
 * - `bar`: Purple horizontal bar indicator at the top of the active tab
 * - `plain`: Clean active color highlight for icon and text without extra background/bar
 */
export type Ux4gBottomNavIndicatorVariant = 'pill' | 'bar' | 'plain';

/**
 * High-level layout / shape variant preset:
 * - `labelled`: Standard flat bottom bar with icons and text labels
 * - `top-rounded`: Bottom bar with rounded top-left and top-right corners
 * - `icon-only`: Icons only without text labels
 * - `centre-action`: Bottom bar with a prominent circular action button in the center
 * - `floating-pill`: Floating capsule bar with rounded edges detached from screen borders
 */
export type Ux4gBottomNavVariant =
  | 'labelled'
  | 'top-rounded'
  | 'icon-only'
  | 'centre-action'
  | 'floating-pill';

/**
 * Geometric shape of the bottom navigation bar container
 */
export type Ux4gBottomNavShape = 'rectangular' | 'top-rounded' | 'floating-pill';

/**
 * Individual navigation tab item definition
 */
export interface Ux4gBottomNavItem {
  /** Unique key for the tab item */
  key?: string;
  /** Label text displayed under or alongside the icon */
  label: string;
  /** Icon name from Ux4gIcons, or custom React Node, or render callback */
  icon: Ux4gIconName | React.ReactNode | ((active: boolean, color: string) => React.ReactNode);
  /** Optional separate icon to render when tab is active */
  activeIcon?: Ux4gIconName | React.ReactNode | ((color: string) => React.ReactNode);
  /** Optional badge count or text (e.g. 5, "99+", true for dot) */
  badge?: string | number | boolean;
  /** Custom badge background color */
  badgeColor?: string;
  /** Custom badge text color */
  badgeTextColor?: string;
  /** Whether the tab item is disabled */
  disabled?: boolean;
  /** Accessibility label for screen readers */
  accessibilityLabel?: string;
  /** Test identifier */
  testID?: string;
}

/**
 * Prominent center floating action button configuration
 */
export interface Ux4gBottomNavCenterAction {
  /** Icon to render inside the center action button (defaults to '+' icon) */
  icon?: Ux4gIconName | React.ReactNode;
  /** Callback triggered when center action button is pressed */
  onPress?: () => void;
  /** Accessibility label */
  accessibilityLabel?: string;
  /** Button diameter in pixels (default 48) */
  size?: number;
  /** Background color (default primary purple) */
  backgroundColor?: string;
  /** Icon / foreground color (default white) */
  iconColor?: string;
  /** Elevation / shadow depth */
  elevation?: number;
  /** Test identifier */
  testID?: string;
}

/**
 * Props for the Ux4gBottomNavigationBar component
 */
export interface Ux4gBottomNavigationBarProps {
  /** Array of navigation tab items (typically 3 to 5 items) */
  items: Ux4gBottomNavItem[];
  /** Controlled active tab index */
  selectedIndex?: number;
  /** Default active tab index for uncontrolled usage (default: 0) */
  defaultSelectedIndex?: number;
  /** Callback triggered when a tab is selected */
  onTabChange?: (index: number, item: Ux4gBottomNavItem) => void;

  /** Active tab indicator style: 'pill' | 'bar' | 'plain' (default: 'pill') */
  indicatorVariant?: Ux4gBottomNavIndicatorVariant;

  /** Preset layout / shape variant */
  variant?: Ux4gBottomNavVariant;

  /** Container shape: 'rectangular' | 'top-rounded' | 'floating-pill' */
  shape?: Ux4gBottomNavShape;

  /** Whether to show text labels below icons (default true, automatically false for 'icon-only') */
  showLabels?: boolean;

  /** Configuration for prominent center action button (used in 'centre-action' variant) */
  centerAction?: Ux4gBottomNavCenterAction;

  /** Color for active icon and label text (default: theme primary purple) */
  activeColor?: string;
  /** Color for inactive icon and label text (default: theme onSurfaceVariant/neutral500) */
  inactiveColor?: string;

  /** Background color for the pill indicator in 'pill' mode (default: theme primary50) */
  pillBackgroundColor?: string;

  /** Color for the top bar indicator in 'bar' mode (default: theme primary) */
  barIndicatorColor?: string;
  /** Height of the top bar indicator (default: 3) */
  barIndicatorHeight?: number;
  /** Width of the top bar indicator (default: 32) */
  barIndicatorWidth?: number;

  /** Background color of the navigation bar (default: theme surface) */
  backgroundColor?: string;
  /** Border color of the navigation bar container */
  borderColor?: string;
  /** Shadow / elevation level (default: 4) */
  elevation?: number;

  /** Whether to wrap within SafeAreaView (default: true) */
  useSafeArea?: boolean;

  /** Height of the inner content area (default: 52 for labelled, 44 for icon-only) */
  height?: number;

  /** Top padding of navigation bar (default: 8) */
  paddingTop?: number;
  /** Bottom padding of navigation bar (default: 12) */
  paddingBottom?: number;
  /** Horizontal padding inside navigation bar */
  paddingHorizontal?: number;

  /** Custom container style */
  style?: StyleProp<ViewStyle>;
  /** Custom style applied to each tab item */
  itemStyle?: StyleProp<ViewStyle>;
  /** Custom text style for inactive tab labels */
  labelStyle?: StyleProp<TextStyle>;
  /** Custom text style for active tab label */
  activeLabelStyle?: StyleProp<TextStyle>;

  /** Test identifier for the entire component */
  testID?: string;
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export const Ux4gBottomNavigationBar: React.FC<Ux4gBottomNavigationBarProps> = ({
  items,
  selectedIndex: controlledIndex,
  defaultSelectedIndex = 0,
  onTabChange,
  indicatorVariant = 'pill',
  variant,
  shape: customShape,
  showLabels: customShowLabels,
  centerAction,
  activeColor,
  inactiveColor,
  pillBackgroundColor,
  barIndicatorColor,
  barIndicatorHeight = 3,
  barIndicatorWidth = 32,
  backgroundColor,
  borderColor,
  elevation = 4,
  useSafeArea = true,
  height,
  paddingTop,
  paddingBottom,
  paddingHorizontal,
  style,
  itemStyle,
  labelStyle,
  activeLabelStyle,
  testID = 'ux4g-bottom-nav-bar',
}) => {
  const theme = useUx4gTheme();
  const { colors } = theme;

  // Resolve internal selected index for controlled/uncontrolled state
  const [internalIndex, setInternalIndex] = useState<number>(defaultSelectedIndex);
  const currentIndex = controlledIndex !== undefined ? controlledIndex : internalIndex;

  // Resolve shape and label visibility from variant or granular props
  const resolvedShape: Ux4gBottomNavShape =
    customShape ??
    (variant === 'top-rounded'
      ? 'top-rounded'
      : variant === 'floating-pill'
      ? 'floating-pill'
      : 'rectangular');

  const isIconOnly = variant === 'icon-only' || customShowLabels === false;
  const hasCenterAction =
    variant === 'centre-action' || (centerAction !== undefined && centerAction !== null);

  // Colors with robust Dark Mode high-contrast fallbacks
  const resolvedActiveColor =
    activeColor ?? (theme.isDark ? UX4GColors.primary300 : colors.primary);
  const resolvedInactiveColor =
    inactiveColor ?? (theme.isDark ? UX4GColors.neutral400 : UX4GColors.neutral600);
  const resolvedPillBg =
    pillBackgroundColor ?? (theme.isDark ? `${UX4GColors.primary400}2E` : UX4GColors.primary50);
  const resolvedBarColor =
    barIndicatorColor ?? (theme.isDark ? UX4GColors.primary300 : colors.primary);
  const resolvedBgColor =
    backgroundColor ?? (theme.isDark ? UX4GColors.neutral900 : colors.surface);
  const resolvedBorderColor =
    borderColor ?? (theme.isDark ? UX4GColors.neutral700 : `${UX4GColors.neutral400}33`);

  // Tab change handler
  const handleTabPress = (index: number, item: Ux4gBottomNavItem) => {
    if (item.disabled) return;
    if (controlledIndex === undefined) {
      setInternalIndex(index);
    }
    if (onTabChange) {
      onTabChange(index, item);
    }
  };

  // Center action default button configuration
  const resolvedCenterAction: Ux4gBottomNavCenterAction = {
    icon: 'add',
    size: 48,
    backgroundColor: resolvedActiveColor,
    iconColor: UX4GColors.neutral0,
    elevation: 4,
    ...centerAction,
  };

  // Content height
  const resolvedHeight = height ?? (isIconOnly ? 50 : 58);

  // Render a single navigation item
  const renderItem = (item: Ux4gBottomNavItem, index: number) => {
    const isActive = currentIndex === index;
    const itemFgColor = isActive ? resolvedActiveColor : resolvedInactiveColor;

    // Resolve icon component / element
    const renderIconContent = () => {
      const activeIconToUse = isActive && item.activeIcon ? item.activeIcon : item.icon;

      if (typeof activeIconToUse === 'function') {
        return activeIconToUse(isActive, itemFgColor);
      }

      if (typeof activeIconToUse === 'string') {
        const camelName = activeIconToUse.replace(/-([a-z])/g, (g) =>
          g[1].toUpperCase()
        ) as keyof typeof Ux4gIcons;
        const IconComponent = Ux4gIcons[camelName] || Ux4gIcons[activeIconToUse as keyof typeof Ux4gIcons];

        if (IconComponent) {
          return <IconComponent size={24} color={itemFgColor} />;
        }
      }

      if (React.isValidElement(activeIconToUse)) {
        return activeIconToUse;
      }

      return null;
    };

    // Badge rendering
    const renderBadge = () => {
      if (!item.badge) return null;

      const isDot = typeof item.badge === 'boolean';
      const badgeBg = item.badgeColor ?? UX4GColors.red600;
      const badgeFg = item.badgeTextColor ?? UX4GColors.neutral0;

      if (isDot) {
        return (
          <View
            style={[styles.badgeDot, { backgroundColor: badgeBg }]}
            testID={`${item.testID || `nav-item-${index}`}-badge-dot`}
          />
        );
      }

      return (
        <View
          style={[styles.badgePill, { backgroundColor: badgeBg }]}
          testID={`${item.testID || `nav-item-${index}`}-badge`}
        >
          <Text style={[styles.badgeText, { color: badgeFg }]}>
            {String(item.badge)}
          </Text>
        </View>
      );
    };

    // Pill indicator content wrapping
    const isPillIndicator = indicatorVariant === 'pill' && isActive;
    const isBarIndicator = indicatorVariant === 'bar' && isActive;
    const isFloatingPill = resolvedShape === 'floating-pill';

    return (
      <Pressable
        key={item.key || `tab-${index}`}
        onPress={() => handleTabPress(index, item)}
        disabled={item.disabled}
        accessibilityRole="tab"
        accessibilityState={{ selected: isActive, disabled: !!item.disabled }}
        accessibilityLabel={item.accessibilityLabel || item.label}
        testID={item.testID || `ux4g-bottom-nav-item-${index}`}
        style={[
          styles.tabItem,
          isFloatingPill && styles.tabItemFloating,
          item.disabled && styles.tabItemDisabled,
          itemStyle,
        ]}
      >
        {/* Top bar indicator with exactly 1dp gap from the container border across all variants */}
        {isBarIndicator && (
          <View
            style={[
              styles.barIndicator,
              {
                backgroundColor: resolvedBarColor,
                height: barIndicatorHeight,
                width: isFloatingPill ? Math.min(barIndicatorWidth, 28) : barIndicatorWidth,
                top: -resolvedPaddingTop + 1,
                borderRadius: barIndicatorHeight / 2,
              },
            ]}
          />
        )}

        {/* Inner item body with Pill background matching the reference design */}
        <View
          style={[
            styles.tabContent,
            isFloatingPill && styles.tabContentFloating,
            isPillIndicator && [
              isIconOnly
                ? styles.pillContainerIconOnly
                : isFloatingPill
                ? styles.pillContainerFloating
                : styles.pillContainer,
              { backgroundColor: resolvedPillBg },
            ],
          ]}
        >
          <View style={styles.iconContainer}>
            {renderIconContent()}
            {renderBadge()}
          </View>

          {!isIconOnly && (
            <Text
              style={[
                styles.label,
                { color: itemFgColor },
                labelStyle,
                isActive && [styles.activeLabel, { color: resolvedActiveColor }, activeLabelStyle],
              ]}
              numberOfLines={1}
            >
              {item.label}
            </Text>
          )}
        </View>
      </Pressable>
    );
  };

  // Render Center Action Button (FAB style)
  const renderCenterActionButton = () => {
    const actionSize = resolvedCenterAction.size ?? 48;
    const actionBg = resolvedCenterAction.backgroundColor ?? resolvedActiveColor;
    const actionFg = resolvedCenterAction.iconColor ?? UX4GColors.neutral0;

    let iconContent = null;
    if (typeof resolvedCenterAction.icon === 'string') {
      const camelName = resolvedCenterAction.icon.replace(/-([a-z])/g, (g) =>
        g[1].toUpperCase()
      ) as keyof typeof Ux4gIcons;
      const IconComp = Ux4gIcons[camelName] || Ux4gIcons[resolvedCenterAction.icon as keyof typeof Ux4gIcons];
      if (IconComp) {
        iconContent = <IconComp size={24} color={actionFg} />;
      } else {
        iconContent = <Text style={[styles.centerActionText, { color: actionFg }]}>+</Text>;
      }
    } else if (React.isValidElement(resolvedCenterAction.icon)) {
      iconContent = resolvedCenterAction.icon;
    } else {
      iconContent = <Text style={[styles.centerActionText, { color: actionFg }]}>+</Text>;
    }

    return (
      <View key="center-action-wrapper" style={styles.centerActionWrapper}>
        <Pressable
          onPress={resolvedCenterAction.onPress}
          accessibilityRole="button"
          accessibilityLabel={resolvedCenterAction.accessibilityLabel || 'Center Action'}
          testID={resolvedCenterAction.testID || `${testID}-center-action`}
          style={({ pressed }) => [
            styles.centerActionButton,
            {
              width: actionSize,
              height: actionSize,
              borderRadius: actionSize / 2,
              backgroundColor: actionBg,
              opacity: pressed ? 0.85 : 1,
            },
            Platform.select({
              ios: {
                shadowColor: resolvedActiveColor,
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.35,
                shadowRadius: 5,
              },
              android: {
                elevation: resolvedCenterAction.elevation ?? 4,
              },
            }),
          ]}
        >
          {iconContent}
        </Pressable>
      </View>
    );
  };

  // Build items array (with Center Action inserted in middle if enabled)
  const renderAllItems = () => {
    if (!hasCenterAction) {
      return items.map((item, index) => renderItem(item, index));
    }

    const midPoint = Math.floor(items.length / 2);
    const leftItems = items.slice(0, midPoint);
    const rightItems = items.slice(midPoint);

    return [
      ...leftItems.map((item, index) => renderItem(item, index)),
      renderCenterActionButton(),
      ...rightItems.map((item, index) => renderItem(item, midPoint + index)),
    ];
  };

  const resolvedPaddingTop =
    paddingTop !== undefined ? paddingTop : resolvedShape === 'floating-pill' ? 4 : 8;
  const resolvedPaddingBottom =
    paddingBottom !== undefined ? paddingBottom : resolvedShape === 'floating-pill' ? 4 : 12;

  // Container styling depending on shape
  const containerStyle: StyleProp<ViewStyle> = [
    styles.container,
    {
      backgroundColor: resolvedBgColor,
      borderColor: resolvedBorderColor,
      paddingTop: resolvedPaddingTop,
      paddingBottom: resolvedPaddingBottom,
      ...(paddingHorizontal !== undefined ? { paddingHorizontal } : {}),
    },
    resolvedShape === 'top-rounded' && styles.topRoundedShape,
    resolvedShape === 'floating-pill' && styles.floatingPillShape,
    Platform.select({
      ios: {
        shadowColor: UX4GColors.neutral1000black,
        shadowOffset: { width: 0, height: resolvedShape === 'floating-pill' ? 4 : -2 },
        shadowOpacity: elevation > 0 ? (resolvedShape === 'floating-pill' ? 0.12 : 0.06) : 0,
        shadowRadius: elevation > 0 ? (resolvedShape === 'floating-pill' ? 8 : 4) : 0,
      },
      android: {
        elevation: elevation,
      },
    }),
    style,
  ];

  // Floating pill layout with dedicated outer padding to guarantee side spacing
  if (resolvedShape === 'floating-pill') {
    const floatingContent = (
      <View style={styles.floatingOuterWrapper}>
        <View style={containerStyle} testID={testID} accessibilityRole="tablist">
          <View style={[styles.tabsRow, styles.tabsRowFloating, { height: resolvedHeight }]}>
            {renderAllItems()}
          </View>
        </View>
      </View>
    );

    if (useSafeArea) {
      return (
        <SafeAreaView style={{ backgroundColor: 'transparent' }}>
          {floatingContent}
        </SafeAreaView>
      );
    }
    return floatingContent;
  }

  const content = (
    <View style={containerStyle} testID={testID} accessibilityRole="tablist">
      {/* Tab items row */}
      <View style={[styles.tabsRow, { height: resolvedHeight }]}>
        {renderAllItems()}
      </View>
    </View>
  );

  if (useSafeArea) {
    return (
      <View style={{ backgroundColor: resolvedBgColor }}>
        <SafeAreaView>{content}</SafeAreaView>
      </View>
    );
  }

  return content;
};

// ─── CONVENIENCE PRESET COMPONENTS ───────────────────────────────────────────

/**
 * Bottom Navigation Bar with Soft Pill indicator around the active tab
 */
export const Ux4gPillBottomNavBar: React.FC<
  Omit<Ux4gBottomNavigationBarProps, 'indicatorVariant'>
> = (props) => <Ux4gBottomNavigationBar {...props} indicatorVariant="pill" />;

/**
 * Bottom Navigation Bar with Top Purple Bar indicator above the active tab
 */
export const Ux4gBarBottomNavBar: React.FC<
  Omit<Ux4gBottomNavigationBarProps, 'indicatorVariant'>
> = (props) => <Ux4gBottomNavigationBar {...props} indicatorVariant="bar" />;

/**
 * Bottom Navigation Bar with Plain clean active highlight (no pill, no bar)
 */
export const Ux4gPlainBottomNavBar: React.FC<
  Omit<Ux4gBottomNavigationBarProps, 'indicatorVariant'>
> = (props) => <Ux4gBottomNavigationBar {...props} indicatorVariant="plain" />;

/**
 * Floating Capsule Bottom Navigation Bar detached from edges
 */
export const Ux4gFloatingBottomNavBar: React.FC<
  Omit<Ux4gBottomNavigationBarProps, 'shape'>
> = (props) => <Ux4gBottomNavigationBar {...props} shape="floating-pill" />;

/**
 * Bottom Navigation Bar with Prominent Center Action '+' button
 */
export const Ux4gCenterActionBottomNavBar: React.FC<
  Omit<Ux4gBottomNavigationBarProps, 'variant'>
> = (props) => <Ux4gBottomNavigationBar {...props} variant="centre-action" />;

// ─── STYLES ──────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderTopWidth: 1,
    overflow: 'visible',
  },
  topRoundedShape: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  floatingOuterWrapper: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 16,
    paddingTop: 4,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingPillShape: {
    width: '100%',
    maxWidth: 520,
    borderRadius: 999,
    borderWidth: 1,
    borderTopWidth: 1,
    paddingHorizontal: 4,
    paddingVertical: 0,
    overflow: 'hidden',
  },
  tabsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 0,
  },
  tabsRowFloating: {
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 0,
  },
  tabItem: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingHorizontal: 3,
  },
  tabItemFloating: {
    flex: 0,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 0,
  },
  tabItemDisabled: {
    opacity: 0.4,
  },
  tabContent: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 2,
    borderRadius: 8,
  },
  tabContentFloating: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
    paddingHorizontal: 3,
  },
  pillContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  pillContainerFloating: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
    paddingHorizontal: 3,
  },
  pillContainerIconOnly: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  barIndicator: {
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  iconContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: 24,
    width: 24,
  },
  label: {
    fontSize: 11,
    fontWeight: '500',
    marginTop: 3,
    textAlign: 'center',
  },
  activeLabel: {
    fontWeight: '600',
  },
  badgeDot: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  badgePill: {
    position: 'absolute',
    top: -4,
    right: -10,
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 9,
    fontWeight: '700',
    includeFontPadding: false,
    textAlign: 'center',
  },
  centerActionWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  centerActionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 4,
  },
  centerActionText: {
    fontSize: 26,
    fontWeight: '400',
    lineHeight: 28,
    textAlign: 'center',
  },
});
