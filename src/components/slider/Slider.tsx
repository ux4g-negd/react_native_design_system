import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  StyleProp,
  ViewStyle,
  TextStyle,
  Platform,
  LayoutChangeEvent,
} from 'react-native';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { Ux4gIcons } from '../../foundation/icons';
import { Ux4gInputField } from '../input-field/InputField';

/**
 * Size variants matching Flutter `Ux4gSliderSize` enum.
 * Flutter: `small(16, 4)`, `medium(20, 6)` -> (thumbSize, trackHeight)
 */
export type Ux4gSliderSize = 's' | 'm' | 'small' | 'medium';

/** Matches Flutter `Ux4gSliderCaptionVariant`. */
export type Ux4gSliderCaptionVariant = 'helper' | 'error' | 'warning' | 'success';

/** Matches Flutter `RangeValues`. */
export interface Ux4gRangeValues {
  start: number;
  end: number;
}

interface SliderSizeConfig {
  thumbSize: number;
  trackHeight: number;
}

const SLIDER_SIZE_MAP: Record<Ux4gSliderSize, SliderSizeConfig> = {
  s: { thumbSize: 16, trackHeight: 4 },
  small: { thumbSize: 16, trackHeight: 4 },
  m: { thumbSize: 20, trackHeight: 6 },
  medium: { thumbSize: 20, trackHeight: 6 },
};

/** Flutter `SizedBox(height: 24)` wrapping the Material `Slider`. */
const SLIDER_ROW_HEIGHT = 24;
/** Flutter marks `SizedBox(height: 28)`. */
const MARKS_HEIGHT = 28;
/** Flutter marks label `Positioned(left: leftPosition - 50, width: 100)`. */
const TICK_LABEL_WIDTH = 100;

/**
 * Applies an alpha channel to a hex / rgb color, mirroring Flutter's
 * `Color.withValues(alpha: x)`.
 */
const withAlpha = (color: string, alpha: number): string => {
  if (!color) return `rgba(0, 0, 0, ${alpha})`;
  if (color.startsWith('#')) {
    let hex = color.slice(1);
    if (hex.length === 3) {
      hex = hex
        .split('')
        .map((c) => c + c)
        .join('');
    }
    if (hex.length === 6 || hex.length === 8) {
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
  }
  if (color.startsWith('rgb')) {
    return color.replace(/rgba?\(([^)]+)\)/, (_match, group: string) => {
      const parts = group.split(',').map((s) => s.trim());
      return `rgba(${parts[0]}, ${parts[1]}, ${parts[2]}, ${alpha})`;
    });
  }
  return color;
};

/**
 * Format value matching Flutter's `_formatValue`:
 * whole numbers render without decimals, otherwise 1 decimal place.
 */
function formatValue(v: number): string {
  if (!isFinite(v)) return '0';
  if (v % 1 === 0) return String(Math.round(v));
  return v.toFixed(1);
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/**
 * Snaps to Flutter's `divisions: steps + 1` behaviour.
 */
const snapToDivisions = (val: number, min: number, max: number, steps?: number): number => {
  const bounded = clamp(val, min, max);
  if (steps != null && steps > 0 && max > min) {
    const divisions = steps + 1;
    const stepSize = (max - min) / divisions;
    return clamp(min + Math.round((bounded - min) / stepSize) * stepSize, min, max);
  }
  return bounded;
};

/* -------------------------------------------------------------------------- */
/*                             Shared sub-elements                            */
/* -------------------------------------------------------------------------- */

interface SharedVisualProps {
  size: SliderSizeConfig;
  enabled: boolean;
  activeColor: string;
  inactiveColor: string;
  thumbFillColor: string;
  thumbBorderColor: string;
}

const Track: React.FC<
  SharedVisualProps & {
    trackWidth: number;
    activeStartPx: number;
    activeEndPx: number;
  }
> = ({ size, activeColor, inactiveColor, trackWidth, activeStartPx, activeEndPx }) => (
  <>
    <View
      style={[
        styles.track,
        {
          height: size.trackHeight,
          borderRadius: size.trackHeight / 2,
          backgroundColor: inactiveColor,
        },
      ]}
    />
    <View
      style={[
        styles.activeTrack,
        {
          height: size.trackHeight,
          borderRadius: size.trackHeight / 2,
          backgroundColor: activeColor,
          top: (SLIDER_ROW_HEIGHT - size.trackHeight) / 2,
          left: activeStartPx,
          width: trackWidth <= 0 ? 0 : Math.max(0, activeEndPx - activeStartPx),
        },
      ]}
    />
  </>
);

const Thumb: React.FC<SharedVisualProps & { positionPx: number }> = ({
  size,
  enabled,
  thumbFillColor,
  thumbBorderColor,
  positionPx,
}) => (
  <View
    pointerEvents="none"
    style={[
      styles.thumb,
      {
        width: size.thumbSize,
        height: size.thumbSize,
        borderRadius: size.thumbSize / 2,
        backgroundColor: thumbFillColor,
        borderWidth: 0.5,
        borderColor: thumbBorderColor,
        left: positionPx - size.thumbSize / 2,
        top: (SLIDER_ROW_HEIGHT - size.thumbSize) / 2,
      },
      enabled && styles.thumbShadow,
    ]}
  />
);

/**
 * Value indicator bubble, the RN equivalent of Flutter's
 * `PaddleSliderValueIndicatorShape` shown with `ShowValueIndicator.onDrag`.
 */
const ValueIndicator: React.FC<{
  label: string;
  positionPx: number;
  backgroundColor: string;
  textColor: string;
  textStyle: TextStyle;
}> = ({ label, positionPx, backgroundColor, textColor, textStyle }) => (
  <View pointerEvents="none" style={[styles.indicatorWrapper, { left: positionPx - 40 }]}>
    <View style={[styles.indicatorBubble, { backgroundColor }]}>
      <Text numberOfLines={1} style={[textStyle, { color: textColor }]}>
        {label}
      </Text>
    </View>
    <View style={[styles.indicatorArrow, { borderTopColor: backgroundColor }]} />
  </View>
);

/**
 * Tick marks + value labels rendered under the track, mirroring Flutter's
 * `_buildMarksAndValues`.
 *
 * Positions are measured from the *outer* row edge (`thumbRadius + offsetAlongTrack`)
 * so the ticks line up exactly with the track and the thumb travel.
 */
const Marks: React.FC<{
  totalTicks: number;
  min: number;
  max: number;
  trackWidth: number;
  thumbRadius: number;
  activeStart: number;
  activeEnd: number;
  enabled: boolean;
  activeColor: string;
  onSurfaceColor: string;
  labelTextStyle: TextStyle;
  format: (value: number) => string;
}> = ({
  totalTicks,
  min,
  max,
  trackWidth,
  thumbRadius,
  activeStart,
  activeEnd,
  enabled,
  activeColor,
  onSurfaceColor,
  labelTextStyle,
  format,
}) => {
  const lastIndex = totalTicks - 1;
  const rowWidth = trackWidth + thumbRadius * 2;

  return (
    <View style={styles.marksContainer}>
      {Array.from({ length: totalTicks }, (_, i) => {
        const val = min + ((max - min) * i) / lastIndex;
        const isActive = val >= activeStart && val <= activeEnd;

        const tickColor = !enabled
          ? withAlpha(onSurfaceColor, 0.12)
          : isActive
            ? activeColor
            : withAlpha(onSurfaceColor, 0.38);
        const textColor = !enabled
          ? withAlpha(onSurfaceColor, 0.38)
          : isActive
            ? activeColor
            : withAlpha(onSurfaceColor, 0.6);

        // Center of the tick, relative to the outer row (not the track).
        const center = thumbRadius + (trackWidth * i) / lastIndex;

        // Flutter uses `Stack(clipBehavior: Clip.none)` so the first/last labels
        // may overflow. In RN any ancestor with a borderRadius clips on Android,
        // so the edge labels are aligned to the track ends instead of overflowing.
        const isFirst = i === 0;
        const isLast = i === lastIndex;
        const labelLeft = isFirst
          ? 0
          : isLast
            ? Math.max(0, rowWidth - TICK_LABEL_WIDTH)
            : center - TICK_LABEL_WIDTH / 2;
        const textAlign: TextStyle['textAlign'] = isFirst
          ? 'left'
          : isLast
            ? 'right'
            : 'center';

        return (
          <React.Fragment key={i}>
            <View
              style={[
                styles.tick,
                {
                  left: clamp(center - 0.5, 0, Math.max(0, rowWidth - 1)),
                  backgroundColor: tickColor,
                },
              ]}
            />
            <Text
              numberOfLines={1}
              style={[
                labelTextStyle,
                styles.tickValue,
                { left: labelLeft, textAlign, color: textColor },
              ]}
            >
              {format(val)}
            </Text>
          </React.Fragment>
        );
      })}
    </View>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 Ux4gSlider                                 */
/* -------------------------------------------------------------------------- */

export interface Ux4gSliderProps {
  /** Current value of the slider (controlled). */
  value: number;
  /** Callback fired when the value changes. */
  onValueChange?: (value: number) => void;
  /** Minimum value. @default 0 */
  min?: number;
  /** Maximum value. @default 100 */
  max?: number;
  /** Number of discrete steps. Flutter maps this to `divisions: steps + 1`. */
  steps?: number;
  /** Size of the slider. @default 'small' */
  size?: Ux4gSliderSize;
  /** Whether the slider is interactive. @default true */
  enabled?: boolean;
  /** Label text displayed above the slider. */
  label?: string;
  /** Shows a red asterisk next to the label. @default false */
  isRequired?: boolean;
  /** Icon rendered right after the label text. */
  labelIcon?: React.ReactNode;
  /** Custom text for the start value label (overrides formatted `min`). */
  startValueText?: string;
  /** Custom text for the end value label (overrides formatted `max`). */
  endValueText?: string;
  /** Caption text displayed below the slider. */
  caption?: string;
  /** Semantic variant for the caption. @default 'helper' */
  captionVariant?: Ux4gSliderCaptionVariant;
  /** Show tick marks + value labels under the track. @default false */
  showMarksAndValues?: boolean;
  /** Show the value indicator bubble while dragging. @default false */
  showIndicator?: boolean;
  /** Show editable value / read-only max input fields. @default false */
  showInputFields?: boolean;
  /** Show the start/end value labels above the slider. @default false */
  showValueLabels?: boolean;
  /** Custom value formatter. */
  valueFormatter?: (value: number) => string;
  /** Custom right-aligned element rendered in the label row. */
  rightLabelElement?: React.ReactNode;
  /** Container style. */
  style?: StyleProp<ViewStyle>;
  /** Label text style override. */
  labelStyle?: StyleProp<TextStyle>;
  /** Test ID. */
  testID?: string;
}

/**
 * **Ux4gSlider**
 *
 * React Native port of Flutter `Ux4gSlider` (`slider.dart`) with identical layout,
 * color resolution, typography and feature set.
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
  const { colors, typography } = theme;

  const sizeConfig = SLIDER_SIZE_MAP[size] ?? SLIDER_SIZE_MAP.small;
  const thumbRadius = sizeConfig.thumbSize / 2;

  const [trackWidth, setTrackWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [inputText, setInputText] = useState(() => formatValue(value));

  /* ---- Colors (mirrors Flutter build()) ---- */
  const isError = captionVariant === 'error';
  const activeColor = enabled
    ? isError
      ? colors.error
      : colors.primary
    : withAlpha(colors.onSurface, 0.38);
  const inactiveColor = withAlpha(colors.onSurface, 0.12);
  const thumbBorderColor = withAlpha(colors.onSurface, enabled ? 0.12 : 0.38);
  const disabledTextColor = withAlpha(colors.onSurface, 0.38);

  const visuals: SharedVisualProps = {
    size: sizeConfig,
    enabled,
    activeColor,
    inactiveColor,
    thumbFillColor: colors.onPrimary,
    thumbBorderColor,
  };

  const format = useCallback(
    (v: number) => (valueFormatter ? valueFormatter(v) : formatValue(v)),
    [valueFormatter]
  );

  /* ---- Geometry ---- */
  const fraction = max > min ? clamp((value - min) / (max - min), 0, 1) : 0;
  const thumbPx = fraction * trackWidth;

  /* ---- Gesture (refs avoid the stale-closure bug) ---- */
  const latest = useRef({ trackWidth, min, max, steps, enabled, onValueChange, thumbRadius });
  latest.current = { trackWidth, min, max, steps, enabled, onValueChange, thumbRadius };

  const grantXRef = useRef(0);

  const updateFromLocalX = useCallback((localX: number) => {
    const s = latest.current;
    if (!s.enabled || !s.onValueChange || s.trackWidth <= 0) return;
    const pos = clamp(localX - s.thumbRadius, 0, s.trackWidth);
    const raw = s.min + (pos / s.trackWidth) * (s.max - s.min);
    s.onValueChange(snapToDivisions(raw, s.min, s.max, s.steps));
  }, []);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => latest.current.enabled,
        onMoveShouldSetPanResponder: () => latest.current.enabled,
        onPanResponderTerminationRequest: () => false,
        onPanResponderGrant: (evt) => {
          if (!latest.current.enabled) return;
          grantXRef.current = evt.nativeEvent.locationX;
          setIsDragging(true);
          updateFromLocalX(grantXRef.current);
        },
        onPanResponderMove: (_evt, gestureState) => {
          updateFromLocalX(grantXRef.current + gestureState.dx);
        },
        onPanResponderRelease: () => setIsDragging(false),
        onPanResponderTerminate: () => setIsDragging(false),
      }),
    [updateFromLocalX]
  );

  /* ---- Keep the input field text in sync with the controlled value ---- */
  useEffect(() => {
    setInputText(formatValue(value));
  }, [value]);

  const handleTrackLayout = (event: LayoutChangeEvent) => {
    setTrackWidth(event.nativeEvent.layout.width);
  };

  const handleInputChange = (text: string) => {
    setInputText(text);
    const parsed = parseFloat(text);
    if (!isNaN(parsed) && onValueChange && enabled) {
      onValueChange(clamp(parsed, min, max));
    }
  };

  /* ---- Caption ---- */
  const captionColor = (() => {
    switch (captionVariant) {
      case 'error':
        return colors.error;
      case 'warning':
        return colors.warning;
      case 'success':
        return colors.success;
      case 'helper':
      default:
        return withAlpha(colors.onSurface, 0.7);
    }
  })();

  const renderCaptionIcon = () => {
    if (captionVariant === 'helper') return null;
    if (captionVariant === 'error') return Ux4gIcons.error({ size: 14, color: captionColor });
    return Ux4gIcons.infoOutline({ size: 14, color: captionColor });
  };

  /* ---- Marks and values ---- */
  const renderMarksAndValues = () => {
    if (!showMarksAndValues || !steps || steps <= 0) return null;
    return (
      <Marks
        totalTicks={steps + 2}
        min={min}
        max={max}
        trackWidth={trackWidth}
        thumbRadius={thumbRadius}
        activeStart={min}
        activeEnd={value}
        enabled={enabled}
        activeColor={activeColor}
        onSurfaceColor={colors.onSurface}
        labelTextStyle={typography.lM_default}
        format={format}
      />
    );
  };

  /* ---- Top row ---- */
  const showTopRow = label != null || showValueLabels || showInputFields;

  const valueLabelColor = enabled ? colors.onSurface : disabledTextColor;

  return (
    <View style={[styles.container, style]} testID={testID}>
      {showTopRow && (
        <View style={{ paddingHorizontal: thumbRadius }}>
          {label != null && (
            <View style={styles.labelRow}>
              <Text
                style={[typography.lM_default, { color: valueLabelColor }, labelStyle]}
              >
                {label}
              </Text>
              {isRequired && (
                <Text style={[typography.lM_default, { color: colors.error, marginLeft: 4 }]}>
                  *
                </Text>
              )}
              {labelIcon != null && <View style={{ marginLeft: 4 }}>{labelIcon}</View>}
              {rightLabelElement != null && (
                <View style={styles.rightLabel}>{rightLabelElement}</View>
              )}
            </View>
          )}

          {showInputFields ? (
            <View style={styles.inputFieldsRow}>
              <View style={styles.inputWrapper}>
                <Ux4gInputField
                  value={inputText}
                  onValueChange={handleInputChange}
                  size="small"
                  type="number"
                  postfixText="%"
                  enabled={enabled}
                />
              </View>
              <View style={styles.inputWrapper}>
                <Ux4gInputField
                  value={formatValue(max)}
                  onValueChange={() => {}}
                  size="small"
                  type="number"
                  postfixText="%"
                  enabled={false}
                />
              </View>
            </View>
          ) : (
            (showValueLabels || startValueText != null || endValueText != null) && (
              <View style={styles.valueLabelsRow}>
                <Text style={[typography.lM_strong, { color: valueLabelColor }]}>
                  {startValueText ?? `${formatValue(min)}%`}
                </Text>
                <Text style={[typography.lM_strong, { color: valueLabelColor }]}>
                  {endValueText ?? `${formatValue(max)}%`}
                </Text>
              </View>
            )
          )}
        </View>
      )}

      {/* Track + thumb */}
      <View
        style={[styles.sliderContainer, { paddingHorizontal: thumbRadius }]}
        {...panResponder.panHandlers}
      >
        <View style={styles.trackWrapper} onLayout={handleTrackLayout}>
          <Track {...visuals} trackWidth={trackWidth} activeStartPx={0} activeEndPx={thumbPx} />
          <Thumb {...visuals} positionPx={thumbPx} />
          {showIndicator && isDragging && (
            <ValueIndicator
              label={format(value)}
              positionPx={thumbPx}
              backgroundColor={colors.onSurface}
              textColor={colors.surface}
              textStyle={typography.lS_strong}
            />
          )}
        </View>
      </View>

      {renderMarksAndValues()}

      {caption != null && (
        <View style={[styles.captionRow, { paddingHorizontal: thumbRadius }]}>
          {renderCaptionIcon()}
          {captionVariant !== 'helper' && <View style={{ width: 4 }} />}
          <Text style={[typography.lS_default, { color: captionColor, flex: 1 }]}>{caption}</Text>
        </View>
      )}
    </View>
  );
};

/* -------------------------------------------------------------------------- */
/*                              Ux4gRangeSlider                               */
/* -------------------------------------------------------------------------- */

export interface Ux4gRangeSliderProps {
  /** Current `{ start, end }` values (controlled). */
  values: Ux4gRangeValues;
  /** Callback fired when either thumb moves. */
  onValueChange?: (values: Ux4gRangeValues) => void;
  /** Minimum value. @default 0 */
  min?: number;
  /** Maximum value. @default 100 */
  max?: number;
  /** Number of discrete steps. */
  steps?: number;
  /** Size of the slider. @default 'small' */
  size?: Ux4gSliderSize;
  /** Whether the slider is interactive. @default true */
  enabled?: boolean;
  /** Label text displayed above the slider. */
  label?: string;
  /** Shows a red asterisk next to the label. @default false */
  isRequired?: boolean;
  /** Custom text for the start value label. */
  startValueText?: string;
  /** Custom text for the end value label. */
  endValueText?: string;
  /** Show tick marks + value labels under the track. @default false */
  showMarksAndValues?: boolean;
  /** Show the value indicator bubbles while dragging. @default false */
  showIndicator?: boolean;
  /** Show editable start/end input fields. @default false */
  showInputFields?: boolean;
  /** Show the start/end value labels above the slider. @default false */
  showValueLabels?: boolean;
  /** Custom value formatter. */
  valueFormatter?: (value: number) => string;
  /** Container style. */
  style?: StyleProp<ViewStyle>;
  /** Label text style override. */
  labelStyle?: StyleProp<TextStyle>;
  /** Test ID. */
  testID?: string;
}

/**
 * **Ux4gRangeSlider**
 *
 * React Native port of Flutter `Ux4gRangeSlider` (`slider.dart`).
 */
export const Ux4gRangeSlider: React.FC<Ux4gRangeSliderProps> = ({
  values,
  onValueChange,
  min = 0,
  max = 100,
  steps,
  size = 'small',
  enabled = true,
  label,
  isRequired = false,
  startValueText,
  endValueText,
  showMarksAndValues = false,
  showIndicator = false,
  showInputFields = false,
  showValueLabels = false,
  valueFormatter,
  style,
  labelStyle,
  testID,
}) => {
  const theme = useUx4gTheme();
  const { colors, typography } = theme;

  const sizeConfig = SLIDER_SIZE_MAP[size] ?? SLIDER_SIZE_MAP.small;
  const thumbRadius = sizeConfig.thumbSize / 2;

  const [trackWidth, setTrackWidth] = useState(0);
  const [activeThumb, setActiveThumb] = useState<'start' | 'end' | null>(null);
  const [startText, setStartText] = useState(() => formatValue(values.start));
  const [endText, setEndText] = useState(() => formatValue(values.end));

  const activeColor = enabled ? colors.primary : withAlpha(colors.onSurface, 0.38);
  const inactiveColor = withAlpha(colors.onSurface, 0.12);
  const thumbBorderColor = withAlpha(colors.onSurface, enabled ? 0.12 : 0.38);
  const disabledTextColor = withAlpha(colors.onSurface, 0.38);

  const visuals: SharedVisualProps = {
    size: sizeConfig,
    enabled,
    activeColor,
    inactiveColor,
    thumbFillColor: colors.onPrimary,
    thumbBorderColor,
  };

  const format = useCallback(
    (v: number) => (valueFormatter ? valueFormatter(v) : formatValue(v)),
    [valueFormatter]
  );

  const toFraction = (v: number) => (max > min ? clamp((v - min) / (max - min), 0, 1) : 0);
  const startPx = toFraction(values.start) * trackWidth;
  const endPx = toFraction(values.end) * trackWidth;

  const latest = useRef({
    trackWidth,
    min,
    max,
    steps,
    enabled,
    onValueChange,
    thumbRadius,
    values,
  });
  latest.current = { trackWidth, min, max, steps, enabled, onValueChange, thumbRadius, values };

  const grantXRef = useRef(0);
  const activeThumbRef = useRef<'start' | 'end'>('start');

  const valueFromLocalX = (localX: number) => {
    const s = latest.current;
    const pos = clamp(localX - s.thumbRadius, 0, s.trackWidth);
    const raw = s.min + (pos / s.trackWidth) * (s.max - s.min);
    return snapToDivisions(raw, s.min, s.max, s.steps);
  };

  const updateFromLocalX = useCallback((localX: number) => {
    const s = latest.current;
    if (!s.enabled || !s.onValueChange || s.trackWidth <= 0) return;
    const next = valueFromLocalX(localX);
    if (activeThumbRef.current === 'start') {
      s.onValueChange({ start: Math.min(next, s.values.end), end: s.values.end });
    } else {
      s.onValueChange({ start: s.values.start, end: Math.max(next, s.values.start) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => latest.current.enabled,
        onMoveShouldSetPanResponder: () => latest.current.enabled,
        onPanResponderTerminationRequest: () => false,
        onPanResponderGrant: (evt) => {
          const s = latest.current;
          if (!s.enabled || s.trackWidth <= 0) return;
          grantXRef.current = evt.nativeEvent.locationX;

          // Pick the nearest thumb to the touch point.
          const touched = valueFromLocalX(grantXRef.current);
          const nearest =
            Math.abs(touched - s.values.start) <= Math.abs(touched - s.values.end)
              ? 'start'
              : 'end';
          activeThumbRef.current = nearest;
          setActiveThumb(nearest);
          updateFromLocalX(grantXRef.current);
        },
        onPanResponderMove: (_evt, gestureState) => {
          updateFromLocalX(grantXRef.current + gestureState.dx);
        },
        onPanResponderRelease: () => setActiveThumb(null),
        onPanResponderTerminate: () => setActiveThumb(null),
      }),
    [updateFromLocalX]
  );

  useEffect(() => {
    setStartText(formatValue(values.start));
  }, [values.start]);

  useEffect(() => {
    setEndText(formatValue(values.end));
  }, [values.end]);

  const handleStartInput = (text: string) => {
    setStartText(text);
    const parsed = parseFloat(text);
    if (!isNaN(parsed) && onValueChange && enabled) {
      onValueChange({ start: clamp(parsed, min, values.end), end: values.end });
    }
  };

  const handleEndInput = (text: string) => {
    setEndText(text);
    const parsed = parseFloat(text);
    if (!isNaN(parsed) && onValueChange && enabled) {
      onValueChange({ start: values.start, end: clamp(parsed, values.start, max) });
    }
  };

  const renderMarksAndValues = () => {
    if (!showMarksAndValues || !steps || steps <= 0) return null;
    return (
      <Marks
        totalTicks={steps + 2}
        min={min}
        max={max}
        trackWidth={trackWidth}
        thumbRadius={thumbRadius}
        activeStart={values.start}
        activeEnd={values.end}
        enabled={enabled}
        activeColor={activeColor}
        onSurfaceColor={colors.onSurface}
        labelTextStyle={typography.lM_default}
        format={format}
      />
    );
  };

  const showTopRow = label != null || showValueLabels || showInputFields;
  const valueLabelColor = enabled ? colors.onSurface : disabledTextColor;

  return (
    <View style={[styles.container, style]} testID={testID}>
      {showTopRow && (
        <View style={{ paddingHorizontal: thumbRadius }}>
          {label != null && (
            <View style={styles.labelRow}>
              <Text style={[typography.lM_default, { color: valueLabelColor }, labelStyle]}>
                {label}
              </Text>
              {isRequired && (
                <Text style={[typography.lM_default, { color: colors.error, marginLeft: 4 }]}>
                  *
                </Text>
              )}
            </View>
          )}

          {showInputFields ? (
            <View style={styles.inputFieldsRow}>
              <View style={styles.inputWrapper}>
                <Ux4gInputField
                  value={startText}
                  onValueChange={handleStartInput}
                  size="small"
                  type="number"
                  postfixText="%"
                  enabled={enabled}
                />
              </View>
              <View style={styles.inputWrapper}>
                <Ux4gInputField
                  value={endText}
                  onValueChange={handleEndInput}
                  size="small"
                  type="number"
                  postfixText="%"
                  enabled={enabled}
                />
              </View>
            </View>
          ) : (
            (showValueLabels || startValueText != null || endValueText != null) && (
              <View style={styles.valueLabelsRow}>
                <Text style={[typography.lM_strong, { color: valueLabelColor }]}>
                  {startValueText ?? `${formatValue(values.start)}%`}
                </Text>
                <Text style={[typography.lM_strong, { color: valueLabelColor }]}>
                  {endValueText ?? `${formatValue(values.end)}%`}
                </Text>
              </View>
            )
          )}
        </View>
      )}

      <View
        style={[styles.sliderContainer, { paddingHorizontal: thumbRadius }]}
        {...panResponder.panHandlers}
      >
        <View style={styles.trackWrapper} onLayout={(e) => setTrackWidth(e.nativeEvent.layout.width)}>
          <Track
            {...visuals}
            trackWidth={trackWidth}
            activeStartPx={startPx}
            activeEndPx={endPx}
          />
          <Thumb {...visuals} positionPx={startPx} />
          <Thumb {...visuals} positionPx={endPx} />
          {showIndicator && activeThumb != null && (
            <ValueIndicator
              label={format(activeThumb === 'start' ? values.start : values.end)}
              positionPx={activeThumb === 'start' ? startPx : endPx}
              backgroundColor={colors.onSurface}
              textColor={colors.surface}
              textStyle={typography.lS_strong}
            />
          )}
        </View>
      </View>

      {renderMarksAndValues()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightLabel: {
    marginLeft: 'auto',
  },
  inputFieldsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  inputWrapper: {
    width: 80,
  },
  valueLabelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  sliderContainer: {
    height: SLIDER_ROW_HEIGHT,
    justifyContent: 'center',
  },
  trackWrapper: {
    position: 'relative',
    height: SLIDER_ROW_HEIGHT,
    justifyContent: 'center',
  },
  track: {
    width: '100%',
  },
  activeTrack: {
    position: 'absolute',
  },
  thumb: {
    position: 'absolute',
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
  indicatorWrapper: {
    position: 'absolute',
    bottom: SLIDER_ROW_HEIGHT - 2,
    width: 80,
    alignItems: 'center',
  },
  indicatorBubble: {
    minWidth: 32,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorArrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  marksContainer: {
    position: 'relative',
    width: '100%',
    height: MARKS_HEIGHT,
  },
  tick: {
    position: 'absolute',
    top: 0,
    width: 1,
    height: 4,
  },
  tickValue: {
    position: 'absolute',
    top: 8,
    width: TICK_LABEL_WIDTH,
  },
  captionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
});
