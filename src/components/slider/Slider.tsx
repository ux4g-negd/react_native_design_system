import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  Animated,
  StyleProp,
  ViewStyle,
  TextStyle,
  Platform,
  LayoutChangeEvent,
  TextInput,
} from 'react-native';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { UX4GColors } from '../../foundation/colors';
import { Ux4gTypography } from '@/foundation/typography';

// Dynamic import of react-native-svg for icons
let SvgComponent: any = null;
let PathComponent: any = null;
try {
  const Svg = require('react-native-svg');
  SvgComponent = Svg.Svg || Svg.default || Svg;
  PathComponent = Svg.Path || Svg.default?.Path;
} catch (e) {
  // react-native-svg not installed; fallback to Text icons
}

export type Ux4gSliderSize = 's' | 'm' | 'small' | 'medium';
export type Ux4gSliderCaptionVariant = 'helper' | 'error' | 'warning' | 'success';

/**
 * Size configuration matching Flutter `Ux4gSliderSize` enum.
 * Flutter: small(16, 4), medium(20, 6)
 */
const SLIDER_SIZE_MAP: Record<
  Ux4gSliderSize,
  {
    thumbSize: number;
    trackHeight: number;
    labelTypographyKey: keyof Ux4gTypography;
  }
> = {
  s: {
    thumbSize: 16,
    trackHeight: 4,
    labelTypographyKey: 'lM_default',
  },
  small: {
    thumbSize: 16,
    trackHeight: 4,
    labelTypographyKey: 'lM_default',
  },
  m: {
    thumbSize: 20,
    trackHeight: 6,
    labelTypographyKey: 'lM_default',
  },
  medium: {
    thumbSize: 20,
    trackHeight: 6,
    labelTypographyKey: 'lM_default',
  },
};

export interface Ux4gSliderProps {
  /**
   * Current value of the slider (required, controlled component).
   */
  value: number;
  /**
   * Callback fired when the value changes.
   */
  onValueChange?: (value: number) => void;
  /**
   * Minimum value of the slider.
   * @default 0
   */
  min?: number;
  /**
   * Maximum value of the slider.
   * @default 100
   */
  max?: number;
  /**
   * Number of discrete steps (divisions).
   * If set, slider snaps to (steps + 2) positions.
   */
  steps?: number;
  /**
   * Size of the slider (`s`/`small` or `m`/`medium`).
   * @default 'small'
   */
  size?: Ux4gSliderSize;
  /**
   * Whether the slider is enabled.
   * @default true
   */
  enabled?: boolean;
  /**
   * Label text displayed above the slider.
   */
  label?: string;
  /**
   * Whether to show a required asterisk (*) next to the label.
   * @default false
   */
  isRequired?: boolean;
  /**
   * Icon name for react-native-vector-icons (e.g., 'info-circle' for FontAwesome).
   * Rendered next to the label text.
   */
  labelIcon?: React.ReactNode;
  /**
   * Custom text for the start value label (overrides formatted min).
   */
  startValueText?: string;
  /**
   * Custom text for the end value label (overrides formatted max).
   */
  endValueText?: string;
  /**
   * Caption text displayed below the slider.
   */
  caption?: string;
  /**
   * Semantic variant for the caption.
   * @default 'helper'
   */
  captionVariant?: Ux4gSliderCaptionVariant;
  /**
   * Whether to show tick marks and value labels at each step.
   * @default false
   */
  showMarksAndValues?: boolean;
  /**
   * Whether to show a value indicator tooltip on drag (not implemented in RN).
   * @default false
   */
  showIndicator?: boolean;
  /**
   * Whether to show editable input fields for min/max values.
   * @default false
   */
  showInputFields?: boolean;
  /**
   * Whether to show formatted value labels (start/end) above the slider.
   * @default false
   */
  showValueLabels?: boolean;
  /**
   * Custom formatter for value display (default: _formatValue).
   */
  valueFormatter?: (value: number) => string;
  /**
   * Custom right-aligned widget displayed next to the label.
   */
  rightLabelElement?: React.ReactNode;
  /**
   * Custom style for the container.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Custom style for the label text.
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * Test ID for testing.
   */
  testID?: string;
}

/**
 * **Ux4gSlider**
 *
 * Complete React Native port of Flutter `slider.dart` (`Ux4gSlider`), matching all props,
 * visual behavior, and features including caption variants, marks, input fields, and value labels.
 */
export const Ux4gSlider: React.FC<Ux4gSliderProps> = ({
  value,
  onValueChange,
  min = 0,
  max = 100,
  steps,
  size = 'small',
  enabled = true,
  label,
  isRequired = false,
  labelIcon,
  startValueText,
  endValueText,
  caption,
  captionVariant = 'helper',
  showMarksAndValues = false,
  showIndicator = false,
  showInputFields = false,
  showValueLabels = false,
  valueFormatter,
  rightLabelElement,
  style,
  labelStyle,
  testID,
}) => {
  const theme = useUx4gTheme();
  const sizeConfig = SLIDER_SIZE_MAP[size] ?? SLIDER_SIZE_MAP.small;
  const thumbRadius = sizeConfig.thumbSize / 2;

  // Track layout
  const [trackWidth, setTrackWidth] = useState(0);
  const [thumbPosition] = useState(new Animated.Value(0));

  // Input field state
  const [inputValue, setInputValue] = useState(_formatValue(value));

  // Calculate percentage
  const getPercentage = (val: number) => {
    return Math.max(0, Math.min(100, ((val - min) / (max - min)) * 100));
  };

  // Update thumb position when value changes
  useEffect(() => {
    if (trackWidth > 0) {
      const percentage = getPercentage(value);
      const effectiveTrackWidth = trackWidth - sizeConfig.thumbSize;
      const newPosition = (percentage / 100) * effectiveTrackWidth;
      Animated.spring(thumbPosition, {
        toValue: newPosition,
        useNativeDriver: false,
        tension: 100,
        friction: 7,
      }).start();
    }
  }, [value, trackWidth, sizeConfig.thumbSize, min, max]);

  // Sync input field with value
  useEffect(() => {
    setInputValue(_formatValue(value));
  }, [value]);

  // Snap value to divisions
  const snapToDivisions = (val: number) => {
    if (steps != null && steps > 0) {
      const divisions = steps + 1;
      const stepped = Math.round(((val - min) / (max - min)) * divisions) / divisions * (max - min) + min;
      return Math.max(min, Math.min(max, stepped));
    }
    return Math.max(min, Math.min(max, val));
  };

  // Handle value change
  const handleValueChange = (newValue: number) => {
    if (!enabled || !onValueChange) return;
    const snappedValue = snapToDivisions(newValue);
    onValueChange(snappedValue);
  };

  // Pan responder for thumb dragging
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => enabled,
      onMoveShouldSetPanResponder: () => enabled,
      onPanResponderGrant: (evt) => {
        // Handle immediate tap
        const locationX = evt.nativeEvent.locationX - thumbRadius;
        const clampedPosition = Math.max(0, Math.min(locationX, trackWidth - sizeConfig.thumbSize));
        const newValue = min + (clampedPosition / (trackWidth - sizeConfig.thumbSize)) * (max - min);
        handleValueChange(newValue);
      },
      onPanResponderMove: (_, gestureState) => {
        if (trackWidth === 0) return;
        const rawPosition = gestureState.moveX - thumbRadius;
        const clampedPosition = Math.max(0, Math.min(rawPosition, trackWidth - sizeConfig.thumbSize));
        const newValue = min + (clampedPosition / (trackWidth - sizeConfig.thumbSize)) * (max - min);
        handleValueChange(newValue);
      },
      onPanResponderRelease: () => {},
    })
  ).current;

  // Handle track layout
  const handleTrackLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setTrackWidth(width);
  };

  // Handle input field change
  const handleInputChange = (text: string) => {
    setInputValue(text);
    const val = parseFloat(text);
    if (!isNaN(val)) {
      handleValueChange(val);
    }
  };

  // Colors matching Flutter implementation
  const isDark = theme.isDark;
  const isError = captionVariant === 'error';
  const activeColor = enabled
    ? isError
      ? theme.colors.error
      : theme.colors.primary ?? (isDark ? UX4GColors.primary300 : UX4GColors.primary600)
    : isDark
      ? UX4GColors.neutral700
      : UX4GColors.neutral400;
  
  const inactiveColor = isDark
    ? UX4GColors.neutral800
    : UX4GColors.neutral200;

  const thumbBorderColor = enabled
    ? isDark
      ? 'rgba(255, 255, 255, 0.12)'
      : 'rgba(0, 0, 0, 0.12)'
    : isDark
      ? 'rgba(255, 255, 255, 0.38)'
      : 'rgba(0, 0, 0, 0.38)';

  const percentage = getPercentage(value);

  // Label typography
  const labelTypo = theme.typography[sizeConfig.labelTypographyKey];

  // Caption icon
  const renderCaptionIcon = () => {
    const iconColor = getCaptionColor();
    const iconSize = 14;

    if (captionVariant === 'error') {
      if (SvgComponent && PathComponent) {
        return (
          <SvgComponent width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
            <PathComponent
              d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
              stroke={iconColor}
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </SvgComponent>
        );
      }
      return <Text style={{ color: iconColor, fontSize: 12, fontWeight: '700' }}>⚠</Text>;
    }

    if (captionVariant !== 'helper') {
      if (SvgComponent && PathComponent) {
        return (
          <SvgComponent width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
            <PathComponent
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke={iconColor}
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </SvgComponent>
        );
      }
      return <Text style={{ color: iconColor, fontSize: 12, fontWeight: '700' }}>ⓘ</Text>;
    }

    return null;
  };

  const getCaptionColor = () => {
    switch (captionVariant) {
      case 'helper':
        return isDark
          ? 'rgba(255, 255, 255, 0.7)'
          : 'rgba(0, 0, 0, 0.7)';
      case 'error':
        return theme.colors.error;
      case 'warning':
        return theme.colors.warning ?? UX4GColors.orange500;
      case 'success':
        return theme.colors.success ?? UX4GColors.green500;
    }
  };

  // Render tick marks and values
  const renderMarksAndValues = () => {
    if (!showMarksAndValues || !steps || steps <= 0 || trackWidth === 0) return null;

    const totalTicks = steps + 2;
    const values = Array.from({ length: totalTicks }, (_, i) =>
      min + ((max - min) * i) / (totalTicks - 1)
    );

    const effectiveTrackWidth = trackWidth - sizeConfig.thumbSize;

    return (
      <View style={[styles.marksContainer, { paddingHorizontal: thumbRadius }]}>
        {values.map((val, i) => {
          const isActive = val <= value;
          const tickColor = !enabled
            ? isDark
              ? 'rgba(255, 255, 255, 0.12)'
              : 'rgba(0, 0, 0, 0.12)'
            : isActive
              ? activeColor
              : isDark
                ? 'rgba(255, 255, 255, 0.38)'
                : 'rgba(0, 0, 0, 0.38)';

          const textColor = !enabled
            ? isDark
              ? 'rgba(255, 255, 255, 0.38)'
              : 'rgba(0, 0, 0, 0.38)'
            : isActive
              ? activeColor
              : isDark
                ? 'rgba(255, 255, 255, 0.6)'
                : 'rgba(0, 0, 0, 0.6)';

          const leftPosition = effectiveTrackWidth === 0 ? 0 : (effectiveTrackWidth * i) / (totalTicks - 1);

          return (
            <View key={i} style={[styles.tickMark, { left: leftPosition }]}>
              <View style={[styles.tick, { backgroundColor: tickColor }]} />
              <Text style={[styles.tickValue, { color: textColor }]}>
                {valueFormatter ? valueFormatter(val) : _formatValue(val)}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={[styles.container, style]} testID={testID}>
      {/* Top Row: Label, Icons, Input Fields, Value Labels */}
      {(label || showValueLabels || showInputFields) && (
        <View style={[styles.topRowContainer, { paddingHorizontal: thumbRadius }]}>
          {label && (
            <View style={styles.labelRow}>
              <Text
                style={[
                  {
                    fontSize: labelTypo.fontSize,
                    fontWeight: labelTypo.fontWeight,
                    lineHeight: labelTypo.lineHeight,
                    color: enabled
                      ? theme.colors.onSurface
                      : isDark
                        ? 'rgba(255, 255, 255, 0.38)'
                        : 'rgba(0, 0, 0, 0.38)',
                  },
                  labelStyle,
                ]}
              >
                {label}
              </Text>
              {isRequired && (
                <Text style={[{ color: theme.colors.error, marginLeft: 4 }]}>*</Text>
              )}
              {labelIcon && <View style={{ marginLeft: 4 }}>{labelIcon}</View>}
              {rightLabelElement && <View style={{ marginLeft: 'auto' }}>{rightLabelElement}</View>}
            </View>
          )}

          {showInputFields && (
            <View style={styles.inputFieldsRow}>
              <View style={styles.inputWrapper}>
                <TextInput
                  value={inputValue}
                  onChangeText={handleInputChange}
                  keyboardType="numeric"
                  editable={enabled}
                  style={[
                    styles.inputField,
                    {
                      color: theme.colors.onSurface,
                      backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
                      borderColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
                    },
                  ]}
                />
                <Text style={styles.inputPostfix}>%</Text>
              </View>
              <View style={styles.inputWrapper}>
                <TextInput
                  value={_formatValue(max)}
                  editable={false}
                  style={[
                    styles.inputField,
                    {
                      color: isDark ? 'rgba(255, 255, 255, 0.38)' : 'rgba(0, 0, 0, 0.38)',
                      backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
                      borderColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
                    },
                  ]}
                />
                <Text style={styles.inputPostfix}>%</Text>
              </View>
            </View>
          )}

          {!showInputFields && (showValueLabels || startValueText || endValueText) && (
            <View style={styles.valueLabelsRow}>
              <Text
                style={{
                  fontSize: labelTypo.fontSize,
                  fontWeight: '600',
                  color: enabled
                    ? theme.colors.onSurface
                    : isDark
                      ? 'rgba(255, 255, 255, 0.38)'
                      : 'rgba(0, 0, 0, 0.38)',
                }}
              >
                {startValueText ?? `${_formatValue(min)}%`}
              </Text>
              <Text
                style={{
                  fontSize: labelTypo.fontSize,
                  fontWeight: '600',
                  color: enabled
                    ? theme.colors.onSurface
                    : isDark
                      ? 'rgba(255, 255, 255, 0.38)'
                      : 'rgba(0, 0, 0, 0.38)',
                }}
              >
                {endValueText ?? `${_formatValue(max)}%`}
              </Text>
            </View>
          )}
        </View>
      )}

      {/* Slider Track and Thumb */}
      <View
        style={[styles.sliderContainer, { paddingHorizontal: thumbRadius }]}
        onLayout={handleTrackLayout}
        {...panResponder.panHandlers}
      >
        <View style={styles.trackWrapper}>
          {/* Inactive Track */}
          <View
            style={[
              styles.track,
              {
                height: sizeConfig.trackHeight,
                borderRadius: sizeConfig.trackHeight / 2,
                backgroundColor: inactiveColor,
              },
            ]}
          />

          {/* Active Track */}
          <View
            style={[
              styles.activeTrack,
              {
                height: sizeConfig.trackHeight,
                borderRadius: sizeConfig.trackHeight / 2,
                backgroundColor: activeColor,
                width: `${percentage}%`,
              },
            ]}
          />

          {/* Thumb */}
          <Animated.View
            style={[
              styles.thumb,
              {
                width: sizeConfig.thumbSize,
                height: sizeConfig.thumbSize,
                borderRadius: thumbRadius,
                backgroundColor: UX4GColors.white,
                borderWidth: 0.5,
                borderColor: thumbBorderColor,
                transform: [{ translateX: thumbPosition }],
              },
              enabled && styles.thumbShadow,
            ]}
          />
        </View>
      </View>

      {/* Marks and Values */}
      {renderMarksAndValues()}

      {/* Caption */}
      {caption && (
        <View style={[styles.captionRow, { paddingHorizontal: thumbRadius }]}>
          {renderCaptionIcon()}
          {renderCaptionIcon() && <View style={{ width: 4 }} />}
          <Text
            style={[
              {
                fontSize: theme.typography.lS_default.fontSize,
                lineHeight: theme.typography.lS_default.lineHeight,
                color: getCaptionColor(),
              },
            ]}
          >
            {caption}
          </Text>
        </View>
      )}
    </View>
  );
};

/**
 * Format value matching Flutter's `_formatValue`:
 * - Returns integer string if value is a whole number
 * - Returns 1 decimal place otherwise
 */
function _formatValue(v: number): string {
  if (v % 1 === 0) return v.toFixed(0);
  return v.toFixed(1);
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  topRowContainer: {
    marginBottom: 8,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  inputFieldsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  inputWrapper: {
    width: 80,
    position: 'relative',
  },
  inputField: {
    height: 32,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingRight: 24,
    fontSize: 13,
  },
  inputPostfix: {
    position: 'absolute',
    right: 8,
    top: 8,
    fontSize: 13,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  valueLabelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  sliderContainer: {
    height: 24,
    justifyContent: 'center',
  },
  trackWrapper: {
    position: 'relative',
    height: '100%',
    justifyContent: 'center',
  },
  track: {
    width: '100%',
  },
  activeTrack: {
    position: 'absolute',
    left: 0,
  },
  thumb: {
    position: 'absolute',
    top: '50%',
    marginTop: -10, // Will be adjusted dynamically by size
  },
  thumbShadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
    }),
  },
  marksContainer: {
    position: 'relative',
    height: 28,
    marginTop: 4,
  },
  tickMark: {
    position: 'absolute',
    alignItems: 'center',
  },
  tick: {
    width: 1,
    height: 4,
  },
  tickValue: {
    marginTop: 4,
    fontSize: 12,
    textAlign: 'center',
    width: 100,
    marginLeft: -50,
  },
  captionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
});
