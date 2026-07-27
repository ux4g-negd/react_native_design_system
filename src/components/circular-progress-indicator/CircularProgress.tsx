import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { UX4GColors } from '../../foundation/colors';

export type Ux4gCircularProgressSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
export type Ux4gStrokeCap = 'butt' | 'round';

export interface Ux4gCircularProgressProps {
  /**
   * Progress value between 0.0 and 1.0
   */
  value: number;
  size?: Ux4gCircularProgressSize;
  diameter?: number;
  strokeWidth?: number;
  progressColor?: string;
  trackColor?: string;
  gradientColors?: string[];
  strokeCap?: Ux4gStrokeCap;
  /**
   * Start angle in degrees. Default is -90 (top)
   */
  startAngle?: number;
  centerValueText?: string;
  centerDescription?: string;
  center?: React.ReactNode;
  label?: string;
  description?: string;
  footer?: React.ReactNode;
  gap?: number;
  backgroundColor?: string;
  labelStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  testID?: string;
}

const sizeMap: Record<Ux4gCircularProgressSize, number> = {
  xs: 20,
  s: 28,
  m: 36,
  l: 48,
  xl: 88,
  xxl: 116,
  xxxl: 144,
};

function scale(ringSize: number, factor: number, min: number, max: number) {
  return Math.max(min, Math.min(max, ringSize * factor));
}

export const Ux4gCircularProgress: React.FC<Ux4gCircularProgressProps> = ({
  value,
  size = 'l',
  diameter,
  strokeWidth,
  progressColor,
  trackColor,
  gradientColors,
  strokeCap = 'butt',
  startAngle = -90,
  centerValueText,
  centerDescription,
  center,
  label,
  description,
  footer,
  gap = 8,
  backgroundColor,
  labelStyle,
  descriptionStyle,
  containerStyle,
  testID,
}) => {
  const theme = useUx4gTheme();
  const { colors, typography, isDark } = theme;
  const gradientId = React.useId();

  const clampedValue = Math.min(Math.max(value, 0.0), 1.0);
  const ringSize = diameter ?? sizeMap[size];
  const resolvedStrokeWidth = strokeWidth ?? scale(ringSize, 0.1, 3.0, 12.0);
  
  const radius = (ringSize - resolvedStrokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - clampedValue * circumference;

  const resolvedProgressColor = progressColor ?? colors.primary ?? UX4GColors.primary600;
  const resolvedTrackColor = trackColor ?? (isDark ? UX4GColors.neutral600 : UX4GColors.neutral300);
  const resolvedGradient = gradientColors ?? (progressColor == null ? (isDark ? [UX4GColors.primary700, UX4GColors.primary300] : [UX4GColors.primary200, UX4GColors.primary600]) : undefined);
  const resolvedGap = Math.max(4, Math.min(16, gap));

  const inlineCenter = ringSize >= 72;
  const hasSmallCenterText = !inlineCenter && (centerValueText != null || centerDescription != null) && label == null;
  const hasMeta = label != null || description != null || footer != null;

  // Typography scaling
  const centerValueFontSize = scale(ringSize, 0.18, 7, 22);
  const centerDescFontSize = scale(ringSize, 0.1, 6, 12);
  const labelFontSize = scale(ringSize, 0.16, 10, 16);
  const descFontSize = scale(ringSize, 0.14, 9, 14);

  const onSurfaceColor = isDark ? UX4GColors.white : UX4GColors.neutral900;
  // Approximation for content color based on background
  const contentColor = backgroundColor ? onSurfaceColor : onSurfaceColor;

  const renderCenterContent = (isSmall: boolean) => {
    if (!centerValueText && !centerDescription) return null;
    return (
      <View style={styles.centerContent}>
        {centerValueText && (
          <Text
            style={[
              {
                color: contentColor,
                fontSize: isSmall ? 11 : centerValueFontSize,
                fontWeight: typography.bS_strong.fontWeight as any,
              },
            ]}
            numberOfLines={1}
          >
            {centerValueText}
          </Text>
        )}
        {centerDescription && (
          <Text
            style={[
              {
                color: contentColor,
                opacity: 0.6,
                fontSize: isSmall ? 9 : centerDescFontSize,
                fontWeight: typography.bXS_default.fontWeight as any,
                marginTop: centerValueText ? 2 : 0,
              },
            ]}
            numberOfLines={2}
          >
            {centerDescription}
          </Text>
        )}
      </View>
    );
  };

  const centerWidget = center ?? (inlineCenter ? renderCenterContent(false) : null);

  return (
    <View style={[styles.container, containerStyle]} testID={testID}>
      <View style={{ width: ringSize, height: ringSize, justifyContent: 'center', alignItems: 'center' }}>
        <Svg width={ringSize} height={ringSize} viewBox={`0 0 ${ringSize} ${ringSize}`}>
          <Defs>
            {resolvedGradient && resolvedGradient.length >= 2 && (
              <LinearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
                {resolvedGradient.map((c, i) => (
                  <Stop key={i} offset={`${(i / (resolvedGradient.length - 1)) * 100}%`} stopColor={c} />
                ))}
              </LinearGradient>
            )}
          </Defs>
          
          {backgroundColor && (
            <Circle
              cx={ringSize / 2}
              cy={ringSize / 2}
              r={radius + resolvedStrokeWidth / 2}
              fill={backgroundColor}
            />
          )}

          {/* Track */}
          <Circle
            cx={ringSize / 2}
            cy={ringSize / 2}
            r={radius}
            stroke={resolvedTrackColor}
            strokeWidth={resolvedStrokeWidth}
            fill="transparent"
          />

          {/* Progress */}
          {clampedValue > 0 && (
            <Circle
              cx={ringSize / 2}
              cy={ringSize / 2}
              r={radius}
              stroke={resolvedGradient ? `url(#${gradientId})` : resolvedProgressColor}
              strokeWidth={resolvedStrokeWidth}
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap={strokeCap}
              fill="transparent"
              rotation={startAngle}
              origin={`${ringSize / 2}, ${ringSize / 2}`}
            />
          )}
        </Svg>
        {centerWidget && (
          <View style={StyleSheet.absoluteFill}>
            <View style={[styles.centerWrapper, { padding: resolvedStrokeWidth + ringSize * 0.06 }]}>
              {centerWidget}
            </View>
          </View>
        )}
      </View>

      {hasSmallCenterText && (
        <View style={{ marginTop: resolvedGap * 0.5 }}>
          {renderCenterContent(true)}
        </View>
      )}

      {hasMeta && <View style={{ height: resolvedGap }} />}
      
      {label && (
        <Text
          style={[
            {
              color: onSurfaceColor,
              fontSize: labelFontSize,
              fontWeight: typography.tS_strong.fontWeight as any,
              textAlign: 'center',
            },
            labelStyle,
          ]}
        >
          {label}
        </Text>
      )}

      {description && (
        <Text
          style={[
            {
              color: onSurfaceColor,
              opacity: 0.62,
              fontSize: descFontSize,
              fontWeight: typography.bS_default.fontWeight as any,
              textAlign: 'center',
              marginTop: label ? scale(ringSize, 0.035, 2, 6) : 0,
            },
            descriptionStyle,
          ]}
        >
          {description}
        </Text>
      )}

      {footer && (
        <View style={{ marginTop: (label || description) ? scale(ringSize, 0.06, 4, 10) : 0, alignItems: 'center' }}>
          {footer}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  centerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
