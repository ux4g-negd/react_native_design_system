import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { UX4GColors } from '../../foundation/colors';

export type Ux4gProgressShape = 'sharp' | 'rounded';
export type Ux4gProgressLabelPosition = 'outside' | 'inside';

export interface Ux4gLinearProgressBarProps {
  /**
   * Progress value between **0.0** (empty) and **1.0** (full).
   */
  value: number;

  /**
   * Optional leading icon shown to the left of the label row.
   */
  icon?: React.ReactNode;

  /**
   * Optional icon color. Defaults to Primary color.
   */
  iconColor?: string;

  /**
   * Optional icon background color (circle behind icon). Pass `transparent` to hide bg.
   */
  iconBackgroundColor?: string;

  /**
   * Optional main label text shown above-left of the bar.
   */
  label?: string;

  /**
   * Optional hint text shown above-right of the bar.
   */
  hint?: string;

  /**
   * Height of the progress track in logical pixels. Default: **8**.
   */
  height?: number;

  /**
   * Controls corner roundness.
   * - 'sharp' → `borderRadius = 0`
   * - 'rounded' → `borderRadius = height / 2` (pill)
   */
  shape?: Ux4gProgressShape;

  /**
   * Custom border radius that overrides [shape] when provided.
   */
  customBorderRadius?: number;

  /**
   * Single solid fill color.
   */
  color?: string;

  /**
   * Two or more colors for a left-to-right gradient fill.
   * Takes priority over [color].
   */
  gradientColors?: string[];

  /**
   * Background track color. Defaults to a semi-transparent `onSurface`.
   */
  trackColor?: string;

  /**
   * Whether to render the percentage value.
   */
  showPercentage?: boolean;

  /**
   * Where the percentage text appears when [showPercentage] is `true`.
   */
  labelPosition?: Ux4gProgressLabelPosition;

  /**
   * Text style for the percentage rendered inside the bar.
   */
  insideLabelStyle?: StyleProp<TextStyle>;

  /**
   * Container style for overriding wrapper styling.
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Test ID for testing.
   */
  testID?: string;
}

/**
 * A customizable linear progress indicator following the Ux4G Design System.
 */
export const Ux4gLinearProgressBar: React.FC<Ux4gLinearProgressBarProps> = ({
  value,
  icon,
  iconColor,
  iconBackgroundColor,
  label,
  hint,
  height = 8,
  shape = 'rounded',
  customBorderRadius,
  color,
  gradientColors,
  trackColor,
  showPercentage = false,
  labelPosition = 'outside',
  insideLabelStyle,
  containerStyle,
  testID,
}) => {
  const theme = useUx4gTheme();
  const colors = theme.colors;
  const typography = theme.typography;
  const isDark = theme.isDark;
  
  const gradientId = React.useId();

  const clampedValue = Math.min(Math.max(value, 0.0), 1.0);
  const percent = Math.round(clampedValue * 100).toString();

  const resolvedColor = color ?? colors.primary ?? UX4GColors.primary600;
  const resolvedGradient = gradientColors ?? (color == null ? (isDark ? [UX4GColors.primary950, UX4GColors.primary300] : [UX4GColors.primary200, UX4GColors.primary600]) : undefined);

  // Track color defaults to onSurface with 0.12 alpha (like Flutter)
  const defaultTrackColor = isDark ? `rgba(255, 255, 255, 0.12)` : `rgba(0, 0, 0, 0.12)`;
  const resolvedTrackColor = trackColor ?? defaultTrackColor;

  const resolvedRadius = customBorderRadius !== undefined ? customBorderRadius : shape === 'rounded' ? height / 2 : 0;

  const hasHeader = icon != null || label != null || hint != null || (showPercentage && labelPosition === 'outside');

  const defaultIconBgColor = iconBackgroundColor ?? (colors.primary ? `${colors.primary}1F` : `rgba(0, 0, 0, 0.12)`); // 1F is ~12% opacity
  const onSurfaceColor = isDark ? UX4GColors.white : UX4GColors.neutral900;
  const onSurfaceColorFaded = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)';

  return (
    <View style={[styles.container, containerStyle]} testID={testID}>
      {/* Header row */}
      {hasHeader && (
        <View style={styles.headerRow}>
          <View style={styles.headerLeft}>
            {icon && (
              <View style={[styles.iconBubble, { backgroundColor: defaultIconBgColor }]}>
                {icon}
              </View>
            )}
            {label && (
              <Text
                style={[
                  styles.label,
                  {
                    color: onSurfaceColor,
                    fontSize: typography.bS_strong.fontSize,
                    fontWeight: typography.bS_strong.fontWeight as any,
                  },
                ]}
                numberOfLines={1}
              >
                {label}
              </Text>
            )}
          </View>
          <View style={styles.headerRight}>
            {hint && (
              <Text
                style={[
                  styles.hint,
                  {
                    color: onSurfaceColorFaded,
                    fontSize: typography.bS_default.fontSize,
                    fontWeight: typography.bS_default.fontWeight as any,
                  },
                ]}
              >
                {hint}
              </Text>
            )}
            {showPercentage && labelPosition === 'outside' && (
              <Text
                style={[
                  styles.percentageOutside,
                  {
                    color: onSurfaceColor,
                    fontSize: typography.bS_strong.fontSize,
                    fontWeight: typography.bS_strong.fontWeight as any,
                  },
                  hint ? { marginLeft: 8 } : {},
                ]}
              >
                {`${percent}%`}
              </Text>
            )}
          </View>
        </View>
      )}

      {/* Progress Track */}
      <View
        style={[
          styles.track,
          {
            height,
            borderRadius: resolvedRadius,
            backgroundColor: resolvedTrackColor,
            marginTop: hasHeader ? 8 : 0,
          },
        ]}
      >
        <View
          style={[
            styles.fill,
            {
              width: `${clampedValue * 100}%`,
              backgroundColor: resolvedGradient ? 'transparent' : resolvedColor,
              borderRadius: resolvedRadius,
            },
          ]}
        >
          {resolvedGradient && resolvedGradient.length >= 2 && (
            <Svg width="100%" height="100%" style={StyleSheet.absoluteFill}>
              <Defs>
                <LinearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
                  {resolvedGradient.map((c, i) => (
                    <Stop
                      key={i}
                      offset={`${(i / (resolvedGradient.length - 1)) * 100}%`}
                      stopColor={c}
                    />
                  ))}
                </LinearGradient>
              </Defs>
              <Rect width="100%" height="100%" rx={resolvedRadius} fill={`url(#${gradientId})`} />
            </Svg>
          )}
          {showPercentage && labelPosition === 'inside' && clampedValue > 0.1 && (
            <Text
              style={[
                styles.percentageInside,
                {
                  fontSize: height > 14 ? 11 : Math.max(8, Math.min(11, height * 0.7)),
                },
                insideLabelStyle,
              ]}
              numberOfLines={1}
            >
              {`${percent}%`}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 8,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBubble: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  label: {
    flex: 1,
  },
  hint: {
    // handled via inline styles
  },
  percentageOutside: {
    // handled via inline styles
  },
  track: {
    width: '100%',
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    overflow: 'hidden',
  },
  percentageInside: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingRight: 12,
  },
});
