import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle, Platform } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { UX4GColors } from '../../foundation/colors';

import { Ux4gStrokeCap } from '../circular-progress-indicator';

export type Ux4gHalfCircleProgressSize = 's' | 'm' | 'l' | 'xl';
export type { Ux4gStrokeCap };

export interface Ux4gHalfCircleProgressProps {
  /**
   * Progress value between 0.0 and 1.0
   */
  value: number;
  size?: Ux4gHalfCircleProgressSize;
  width?: number;
  strokeWidth?: number;
  progressColor?: string;
  trackColor?: string;
  gradientColors?: string[];
  strokeCap?: Ux4gStrokeCap;
  valueText?: string;
  description?: string;
  showScale?: boolean;
  valueStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  scaleStyle?: StyleProp<TextStyle>;
  gap?: number;
  containerStyle?: StyleProp<ViewStyle>;
  testID?: string;
}

const sizeMap: Record<Ux4gHalfCircleProgressSize, number> = {
  s: 80,
  m: 140,
  l: 200,
  xl: 280,
};

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export const Ux4gHalfCircleProgress: React.FC<Ux4gHalfCircleProgressProps> = ({
  value,
  size = 'l',
  width,
  strokeWidth,
  progressColor,
  trackColor,
  gradientColors,
  strokeCap = 'round',
  valueText,
  description,
  showScale = false,
  valueStyle,
  descriptionStyle,
  scaleStyle,
  gap = 4,
  containerStyle,
  testID,
}) => {
  const theme = useUx4gTheme();
  const { colors, typography, isDark } = theme;
  const gradientId = React.useId();

  const clampedValue = clamp(value, 0.0, 1.0);
  const resolvedWidth = width ?? sizeMap[size];
  const resolvedStrokeWidth = strokeWidth ?? clamp(resolvedWidth * 0.08, 4.0, 22.0);

  const arcHeight = resolvedWidth / 2 + resolvedStrokeWidth / 2;
  const radius = (resolvedWidth - resolvedStrokeWidth) / 2;

  const resolvedProgressColor = progressColor ?? colors.primary ?? UX4GColors.primary600;
  // Fallback to trackColor or onSurface with opacity
  const resolvedTrackColor =
    trackColor ??
    (isDark ? 'rgba(255,255,255,0.16)' : 'rgba(0,0,0,0.16)');

  const defaultGradient = isDark
    ? [UX4GColors.primary300, UX4GColors.primary950]
    : [UX4GColors.primary600, UX4GColors.primary200];
  const resolvedGradient = gradientColors ?? (progressColor == null ? defaultGradient : undefined);

  const percent = Math.round(clampedValue * 100);
  const displayValue = valueText ?? `${percent}%`;

  // Font sizing based on flutter source
  const valueFontSize = clamp(resolvedWidth * 0.18, 10, 48);
  const descFontSize = clamp(resolvedWidth * 0.1, 7, 20);
  const scaleFontSize = clamp(resolvedWidth * 0.075, 6, 14);

  const onSurfaceColor = colors.onSurface ?? (isDark ? UX4GColors.white : UX4GColors.neutral900);

  const descriptionFitsInside = resolvedWidth >= 120;
  const scaleLabelHeight = showScale ? scaleFontSize * 1.3 : 0;
  const totalHeight = arcHeight + scaleLabelHeight;

  // Arc path from left to right
  const startX = resolvedStrokeWidth / 2;
  const startY = arcHeight;
  const endX = resolvedWidth - resolvedStrokeWidth / 2;
  const endY = arcHeight;
  const pathData = `M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`;
  const arcLength = Math.PI * radius;
  const strokeDashoffset = arcLength - clampedValue * arcLength;

  return (
    <View style={[styles.container, containerStyle]} testID={testID}>
      <View style={{ width: resolvedWidth, height: totalHeight }}>
        <Svg width={resolvedWidth} height={arcHeight} viewBox={`0 0 ${resolvedWidth} ${arcHeight}`}>
          <Defs>
            {resolvedGradient && resolvedGradient.length >= 2 && (
              <LinearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
                {resolvedGradient.map((c, i) => (
                  <Stop key={i} offset={`${(i / (resolvedGradient.length - 1)) * 100}%`} stopColor={c} />
                ))}
              </LinearGradient>
            )}
          </Defs>

          {/* Track */}
          <Path
            d={pathData}
            stroke={resolvedTrackColor}
            strokeWidth={resolvedStrokeWidth}
            strokeLinecap={strokeCap}
            fill="transparent"
          />

          {/* Progress */}
          {clampedValue > 0 && (
            <Path
              d={pathData}
              stroke={resolvedGradient ? `url(#${gradientId})` : resolvedProgressColor}
              strokeWidth={resolvedStrokeWidth}
              strokeLinecap={strokeCap}
              strokeDasharray={`${arcLength} ${arcLength}`}
              strokeDashoffset={strokeDashoffset}
              fill="transparent"
            />
          )}
        </Svg>

        <View
          style={{
            position: 'absolute',
            left: resolvedStrokeWidth,
            right: resolvedStrokeWidth,
            bottom: scaleLabelHeight,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Text
            style={[
              {
                color: onSurfaceColor,
                fontSize: valueFontSize,
                fontWeight: typography.bS_strong.fontWeight as any,
                lineHeight: valueFontSize * 1.1,
              },
              valueStyle,
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            {displayValue}
          </Text>
          {description != null && descriptionFitsInside && (
            <Text
              style={[
                {
                  color: onSurfaceColor,
                  opacity: 0.6,
                  fontSize: descFontSize,
                  fontWeight: typography.bXS_default.fontWeight as any,
                  lineHeight: descFontSize * 1.2,
                  marginTop: gap * 0.25,
                },
                descriptionStyle,
              ]}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              {description}
            </Text>
          )}
        </View>

        {showScale && (
          <>
            <View
              style={{
                position: 'absolute',
                left: resolvedStrokeWidth / 2 - 50,
                bottom: 0,
                width: 100,
                alignItems: 'center',
              }}
            >
              <Text
                style={[
                  {
                    fontSize: scaleFontSize,
                    color: onSurfaceColor,
                    opacity: 0.5,
                    fontWeight: typography.bXS_default.fontWeight as any,
                    textAlign: 'center',
                  },
                  scaleStyle,
                ]}
              >
                0%
              </Text>
            </View>
            <View
              style={{
                position: 'absolute',
                right: resolvedStrokeWidth / 2 - 50,
                bottom: 0,
                width: 100,
                alignItems: 'center',
              }}
            >
              <Text
                style={[
                  {
                    fontSize: scaleFontSize,
                    color: onSurfaceColor,
                    opacity: 0.5,
                    fontWeight: typography.bXS_default.fontWeight as any,
                    textAlign: 'center',
                  },
                  scaleStyle,
                ]}
              >
                100%
              </Text>
            </View>
          </>
        )}
      </View>

      {description != null && !descriptionFitsInside && (
        <Text
          style={[
            {
              color: onSurfaceColor,
              opacity: 0.6,
              fontSize: descFontSize * 0.85,
              fontWeight: typography.bXS_default.fontWeight as any,
              lineHeight: descFontSize * 1.2,
              marginTop: gap * 0.5,
              textAlign: 'center',
            },
            descriptionStyle,
          ]}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {description}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  scaleText: {
    position: 'absolute',
  },
});
