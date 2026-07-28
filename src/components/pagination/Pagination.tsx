import React, { useEffect, useRef } from 'react';
import {
  View,
  Pressable,
  Animated,
  Easing,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { UX4GColors } from '../../foundation/colors';
import { Ux4gIcons } from '../../foundation/icons';

export type Ux4gPaginationVariant = 'default' | 'defaultVariant' | 'capsule';
export type Ux4gPaginationSize = 'small' | 'medium';

export interface Ux4gPaginationDottedProps {
  /**
   * Total number of pages.
   */
  totalPageCount: number;
  /**
   * Current active zero-based page index.
   */
  currentPageIndex: number;
  /**
   * Callback fired when a dot or arrow button is pressed.
   */
  onPageChange: (pageIndex: number) => void;
  /**
   * Whether navigation arrow buttons are displayed.
   * @default true
   */
  showArrows?: boolean;
  /**
   * If true, renders dots on the left and both arrows on the right.
   * @default false
   */
  arrowsOnRight?: boolean;
  /**
   * Visual variant (`default` or `capsule`).
   * @default 'default'
   */
  variant?: Ux4gPaginationVariant;
  /**
   * Size variant (`small` or `medium`).
   * @default 'small'
   */
  size?: Ux4gPaginationSize;
  /**
   * Whether the pagination component is interactive.
   * @default true
   */
  enabled?: boolean;
  /**
   * Color of the active page dot and arrow accents.
   */
  activeColor?: string;
  /**
   * Color of inactive page dots.
   */
  inactiveColor?: string;
  /**
   * Border color of inactive page dots.
   */
  inactiveBorderColor?: string;
  /**
   * Explicit container width override.
   */
  width?: number;
  /**
   * Explicit container height override.
   */
  height?: number;
  /**
   * Additional custom styles for the container.
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Optional test ID for testing.
   */
  testID?: string;
}

const getSizeConfig = (size: Ux4gPaginationSize) => {
  if (size === 'medium') {
    return { dotSize: 12, spacing: 10, arrowSize: 32 };
  }
  return { dotSize: 10, spacing: 8, arrowSize: 24 };
};

const withAlpha = (color: string, alpha: number): string => {
  if (!color) return `rgba(74, 43, 194, ${alpha})`;
  if (color.startsWith('#')) {
    let hex = color.slice(1);
    if (hex.length === 3) {
      hex = hex.split('').map((c) => c + c).join('');
    }
    if (hex.length === 6) {
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    if (hex.length === 8) {
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

interface DotProps {
  index: number;
  masterAnim: Animated.Value;
  enabled: boolean;
  dotSize: number;
  activeColor: string;
  inactiveColor: string;
  inactiveBorderColor: string;
  onPress: () => void;
  testID?: string;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const DotItem: React.FC<DotProps> = ({
  index,
  masterAnim,
  enabled,
  dotSize,
  activeColor,
  inactiveColor,
  inactiveBorderColor,
  onPress,
  testID,
}) => {
  const targetActiveColor = enabled ? activeColor : withAlpha(activeColor, 0.38);

  const animatedWidth = masterAnim.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [dotSize, dotSize * 2.5, dotSize],
    extrapolate: 'clamp',
  });

  const animatedBgColor = masterAnim.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [inactiveColor, targetActiveColor, inactiveColor],
    extrapolate: 'clamp',
  });

  const animatedBorderColor = masterAnim.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [
      inactiveBorderColor,
      withAlpha(inactiveBorderColor, 0),
      inactiveBorderColor,
    ],
    extrapolate: 'clamp',
  });

  return (
    <AnimatedPressable
      testID={testID}
      onPress={enabled ? onPress : undefined}
      disabled={!enabled}
      hitSlop={6}
      style={[
        styles.dot,
        {
          width: animatedWidth,
          height: dotSize,
          borderRadius: 999,
          backgroundColor: animatedBgColor as any,
          borderWidth: 1,
          borderColor: animatedBorderColor as any,
        },
      ]}
    />
  );
};

/**
 * **Ux4gPaginationDotted** (`Pagination`)
 *
 * Full React Native port of Flutter `pagination.dart` (`Ux4gPaginationDotted`).
 * Displays paginated dots indicator with smooth expansion animation, optional chevron arrow buttons,
 * size variants (`small`, `medium`), variant layouts (`default`, `capsule`), and `arrowsOnRight` alignment.
 */
export const Ux4gPaginationDotted: React.FC<Ux4gPaginationDottedProps> = ({
  totalPageCount,
  currentPageIndex,
  onPageChange,
  showArrows = true,
  arrowsOnRight = false,
  variant = 'default',
  size = 'small',
  enabled = true,
  activeColor,
  inactiveColor,
  inactiveBorderColor,
  width,
  height,
  containerStyle,
  testID,
}) => {
  const theme = useUx4gTheme();
  const colors = theme.colors;
  const isDark = theme.isDark;

  const masterAnim = useRef(new Animated.Value(currentPageIndex)).current;

  useEffect(() => {
    Animated.timing(masterAnim, {
      toValue: currentPageIndex,
      duration: 300,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [currentPageIndex, masterAnim]);

  const sizeConfig = getSizeConfig(size);

  const effectiveActiveColor =
    activeColor ?? colors.primary ?? UX4GColors.primary600;
  const effectiveInactiveColor =
    inactiveColor ?? (isDark ? UX4GColors.primary800 : UX4GColors.primary100);
  const effectiveInactiveBorderColor =
    inactiveBorderColor ?? (isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)');

  const isCapsule = variant === 'capsule';

  const renderArrow = (
    direction: 'left' | 'right',
    canClick: boolean,
    onClick: () => void,
    arrowTestID?: string
  ) => {
    const iconSize = sizeConfig.arrowSize * 0.5;
    const arrowBg = effectiveInactiveColor;
    const arrowIconColor = canClick
      ? effectiveActiveColor
      : withAlpha(effectiveActiveColor, 0.38);

    return (
      <Pressable
        testID={arrowTestID}
        onPress={canClick ? onClick : undefined}
        disabled={!canClick}
        style={({ pressed }) => [
          styles.arrowContainer,
          {
            width: sizeConfig.arrowSize,
            height: sizeConfig.arrowSize,
            borderRadius: 999,
            backgroundColor: arrowBg,
            opacity: pressed && canClick ? 0.7 : 1,
          },
        ]}
      >
        {direction === 'left'
          ? Ux4gIcons.chevronLeft({ size: iconSize, color: arrowIconColor })
          : Ux4gIcons.chevronRight({ size: iconSize, color: arrowIconColor })}
      </Pressable>
    );
  };

  const dotsRow = (
    <View style={styles.dotsRow}>
      {Array.from({ length: totalPageCount }).map((_, index) => (
        <View
          key={index}
          style={{
            marginRight: index === totalPageCount - 1 ? 0 : sizeConfig.spacing,
          }}
        >
          <DotItem
            index={index}
            masterAnim={masterAnim}
            enabled={enabled}
            dotSize={sizeConfig.dotSize}
            activeColor={effectiveActiveColor}
            inactiveColor={effectiveInactiveColor}
            inactiveBorderColor={effectiveInactiveBorderColor}
            onPress={() => onPageChange(index)}
            testID={testID ? `${testID}-dot-${index}` : undefined}
          />
        </View>
      ))}
    </View>
  );

  let mainContent: React.ReactNode;

  if (arrowsOnRight) {
    let dotsContent = dotsRow;
    if (isCapsule) {
      dotsContent = (
        <View
          style={[
            styles.capsuleDotsContainer,
            {
              backgroundColor: effectiveInactiveColor,
              borderRadius: 999,
            },
          ]}
        >
          {dotsRow}
        </View>
      );
    }

    const arrowsGroup = (
      <View style={styles.arrowsGroupRow}>
        {renderArrow(
          'left',
          enabled && currentPageIndex > 0,
          () => onPageChange(currentPageIndex - 1),
          testID ? `${testID}-arrow-left` : undefined
        )}
        <View style={{ width: sizeConfig.spacing * 1.2 }} />
        {renderArrow(
          'right',
          enabled && currentPageIndex < totalPageCount - 1,
          () => onPageChange(currentPageIndex + 1),
          testID ? `${testID}-arrow-right` : undefined
        )}
      </View>
    );

    mainContent = (
      <View style={styles.arrowsRightContainer}>
        {dotsContent}
        {showArrows && arrowsGroup}
      </View>
    );
  } else {
    const content = (
      <View style={styles.rowCentered}>
        {showArrows && (
          <>
            {renderArrow(
              'left',
              enabled && currentPageIndex > 0,
              () => onPageChange(currentPageIndex - 1),
              testID ? `${testID}-arrow-left` : undefined
            )}
            <View style={{ width: sizeConfig.spacing }} />
          </>
        )}
        {dotsRow}
        {showArrows && (
          <>
            <View style={{ width: sizeConfig.spacing }} />
            {renderArrow(
              'right',
              enabled && currentPageIndex < totalPageCount - 1,
              () => onPageChange(currentPageIndex + 1),
              testID ? `${testID}-arrow-right` : undefined
            )}
          </>
        )}
      </View>
    );

    mainContent = content;

    if (isCapsule) {
      mainContent = (
        <View
          style={[
            styles.capsuleContainer,
            {
              paddingHorizontal: showArrows ? 8 : 14,
              paddingVertical: showArrows ? 4 : 6,
              backgroundColor: effectiveInactiveColor,
              borderRadius: 999,
              borderColor: withAlpha(effectiveActiveColor, 0.12),
              borderWidth: 1,
            },
          ]}
        >
          {content}
        </View>
      );
    }
  }

  return (
    <View
      testID={testID}
      style={[
        styles.outerContainer,
        width !== undefined && { width },
        height !== undefined && { height },
        containerStyle,
      ]}
    >
      {mainContent}
    </View>
  );
};

/**
 * Deprecated alias for Ux4gPaginationDotted matching Flutter `typedef Ux4gPaginationIndicator = Ux4gPaginationDotted;`
 */
export const Ux4gPaginationIndicator = Ux4gPaginationDotted;

/**
 * Alias for Ux4gPaginationDotted matching Ux4gPagination naming convention.
 */
export const Ux4gPagination = Ux4gPaginationDotted;

const styles = StyleSheet.create({
  outerContainer: {
    alignSelf: 'center',
  },
  rowCentered: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowsGroupRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowsRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  capsuleDotsContainer: {
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  capsuleContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
