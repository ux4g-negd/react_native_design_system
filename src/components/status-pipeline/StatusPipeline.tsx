import React from 'react';
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { Ux4gIcons } from '../../foundation/icons';
import { UX4GColors } from '../../foundation/colors';

// ─── Enums & Types ───────────────────────────────────────────────────────────

export type Ux4gPipelineOrientation = 'vertical' | 'horizontal';

export type Ux4gPipelineStepState =
  | 'completed'
  | 'current'
  | 'upcoming'
  | 'error'
  | 'warning';

export type Ux4gPipelineSize = 's' | 'm' | 'l';

export interface Ux4gPipelineStep {
  /** Label text (e.g. "Submitted", "Verification") */
  label?: string;
  /** Description text (e.g. "5 Apr", "In progress") */
  description?: string;
  /** Step state — controls icon, color, and line style */
  state?: Ux4gPipelineStepState;
  /** Custom icon widget to display inside the circle (overrides default) */
  customIcon?: React.ReactNode;
  /** Custom color for the step circle (overrides state color) */
  customColor?: string;
}

export interface Ux4gStatusPipelineProps {
  /** Steps to display */
  steps: Ux4gPipelineStep[];
  /** Current active step index (0-based). Set to -1 to rely purely on step.state */
  currentStep?: number;
  /** Orientation: 'vertical' | 'horizontal' (default: 'vertical') */
  orientation?: Ux4gPipelineOrientation;
  /** Size preset: 's' | 'm' | 'l' (default: 'm') */
  size?: Ux4gPipelineSize;
  /** Whether to show labels (default: true) */
  showLabels?: boolean;
  /** Whether to show descriptions (default: true) */
  showDescriptions?: boolean;
  /** Thickness of completed/active lines (overrides default) */
  activeLineWidth?: number;
  /** Thickness of upcoming lines (overrides default) */
  inactiveLineWidth?: number;
  /** Color for completed steps (overrides default green) */
  completedColor?: string;
  /** Color for current step (overrides default primary) */
  currentColor?: string;
  /** Color for upcoming steps (overrides default gray) */
  upcomingColor?: string;
  /** Color for error steps (overrides default red) */
  errorColor?: string;
  /** Color for warning steps (overrides default orange) */
  warningColor?: string;
  /** Custom line color for completed segments */
  completedLineColor?: string;
  /** Custom line color for upcoming segments */
  upcomingLineColor?: string;
  /** Spacing between step indicator and label text */
  labelSpacing?: number;
  /** Custom circle size override */
  circleSize?: number;
  /** Custom container style */
  style?: StyleProp<ViewStyle>;
}

// ─── Component ───────────────────────────────────────────────────────────────

export const Ux4gStatusPipeline: React.FC<Ux4gStatusPipelineProps> = ({
  steps = [],
  currentStep = 0,
  orientation = 'vertical',
  size = 'm',
  showLabels = true,
  showDescriptions = true,
  activeLineWidth,
  inactiveLineWidth,
  completedColor,
  currentColor,
  upcomingColor,
  errorColor,
  warningColor,
  completedLineColor,
  upcomingLineColor,
  labelSpacing,
  circleSize,
  style,
}) => {
  const theme = useUx4gTheme();
  const colors = theme.colors;
  const isDark = theme.isDark;

  // ── Resolved sizes ──

  const resolvedCircleSize =
    circleSize ?? (size === 's' ? 20 : size === 'm' ? 32 : 40);

  const resolvedActiveLineW =
    activeLineWidth ?? (size === 's' ? 2 : size === 'm' ? 3 : 3);

  const resolvedInactiveLineW =
    inactiveLineWidth ?? (size === 's' ? 1 : size === 'm' ? 2 : 2);

  const iconSize = size === 's' ? 12 : size === 'm' ? 18 : 22;
  const fontSize = size === 's' ? 10 : size === 'm' ? 12 : 14;

  // ── Resolve step state from currentStep index ──

  const resolveState = (index: number): Ux4gPipelineStepState => {
    const step = steps[index];
    if (currentStep < 0) return step.state ?? 'upcoming';

    if (
      step.state === 'error' ||
      step.state === 'warning'
    ) {
      return step.state;
    }

    if (index < currentStep) return 'completed';
    if (index === currentStep) return 'current';
    return 'upcoming';
  };

  // ── State colors ──

  const stepColor = (state: Ux4gPipelineStepState): string => {
    const success = colors.success ?? UX4GColors.green500;
    const primary = colors.primary ?? UX4GColors.primary600;
    const onSurface = colors.onSurface ?? UX4GColors.neutral900;
    const err = colors.error ?? UX4GColors.red500;
    const warn =
      colors.warning ??
      (isDark ? UX4GColors.orange500 : UX4GColors.orange600);

    switch (state) {
      case 'completed':
        return completedColor ?? success;
      case 'current':
        return currentColor ?? primary;
      case 'upcoming':
        return upcomingColor ?? `${onSurface}4D`; // 0.3 opacity
      case 'error':
        return errorColor ?? err;
      case 'warning':
        return warningColor ?? warn;
    }
  };

  const lineColor = (fromState: Ux4gPipelineStepState): string => {
    const isActive = fromState === 'completed';
    if (isActive) {
      return (
        completedLineColor ?? colors.success ?? UX4GColors.green500
      );
    }
    const onSurface = colors.onSurface ?? UX4GColors.neutral900;
    return upcomingLineColor ?? `${onSurface}26`; // 0.15 opacity
  };

  const getLineWidth = (fromState: Ux4gPipelineStepState): number => {
    const isActive = fromState === 'completed';
    return isActive ? resolvedActiveLineW : resolvedInactiveLineW;
  };

  // ── Text Styles ──

  const labelTextStyle = (state: Ux4gPipelineStepState): TextStyle => {
    const isActive = state === 'completed' || state === 'current';
    const onSurface = colors.onSurface ?? UX4GColors.neutral900;
    const textColor =
      state === 'error'
        ? isDark
          ? UX4GColors.red300
          : UX4GColors.red800
        : isActive
        ? onSurface
        : `${onSurface}73`; // 0.45 opacity

    const baseStyle =
      size === 's'
        ? theme.typography.bXS_strong
        : size === 'm'
        ? theme.typography.bS_strong
        : theme.typography.bM_strong;

    return StyleSheet.flatten([baseStyle, { color: textColor }]);
  };

  const descTextStyle = (state: Ux4gPipelineStepState): TextStyle => {
    const isActive = state === 'completed' || state === 'current';
    const onSurface = colors.onSurface ?? UX4GColors.neutral900;
    const descColor =
      state === 'error'
        ? isDark
          ? UX4GColors.red300
          : UX4GColors.red800
        : isActive
        ? `${onSurface}99` // 0.6 opacity
        : `${onSurface}59`; // 0.35 opacity

    const baseStyle =
      size === 's'
        ? theme.typography.bXS_default
        : size === 'm'
        ? theme.typography.bXS_default
        : theme.typography.bS_default;

    return StyleSheet.flatten([baseStyle, { color: descColor }]);
  };

  // ─── Render Step Circle ───

  const renderCircle = (index: number) => {
    const step = steps[index];
    const state = resolveState(index);
    const color = step.customColor ?? stepColor(state);
    const surfaceColor = colors.surface ?? (isDark ? '#121212' : '#FFFFFF');

    if (step.customIcon) {
      return (
        <View
          style={{
            width: resolvedCircleSize,
            height: resolvedCircleSize,
            borderRadius: resolvedCircleSize / 2,
            backgroundColor: color,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {step.customIcon}
        </View>
      );
    }

    if (state === 'completed') {
      return (
        <View
          style={{
            width: resolvedCircleSize,
            height: resolvedCircleSize,
            borderRadius: resolvedCircleSize / 2,
            backgroundColor: color,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Ux4gIcons.check size={iconSize} color="#FFFFFF" />
        </View>
      );
    }

    if (state === 'current') {
      const innerSize = resolvedCircleSize * 0.55;
      return (
        <View
          style={{
            width: resolvedCircleSize,
            height: resolvedCircleSize,
            borderRadius: resolvedCircleSize / 2,
            backgroundColor: color,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: innerSize,
              height: innerSize,
              borderRadius: innerSize / 2,
              backgroundColor: surfaceColor,
            }}
          />
        </View>
      );
    }

    // upcoming / error / warning
    return (
      <View
        style={{
          width: resolvedCircleSize,
          height: resolvedCircleSize,
          borderRadius: resolvedCircleSize / 2,
          backgroundColor: 'transparent',
          borderWidth: 1.5,
          borderColor: color,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color,
            fontSize,
            fontWeight: '600',
            lineHeight: fontSize,
            textAlign: 'center',
          }}
        >
          {index + 1}
        </Text>
      </View>
    );
  };

  // ─── Vertical Layout ───

  if (orientation === 'vertical') {
    const spacing = labelSpacing ?? 12;

    return (
      <View style={[{ flexDirection: 'column' }, style]}>
        {steps.map((step, index) => {
          const state = resolveState(index);
          const isLast = index === steps.length - 1;
          const hasLabel = showLabels && step.label != null;
          const hasDesc = showDescriptions && step.description != null;
          const lineSegmentHeight = (hasLabel || hasDesc) ? 28 : 24;

          return (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              {/* Circle + Line column */}
              <View style={{ width: resolvedCircleSize, alignItems: 'center' }}>
                {renderCircle(index)}
                {!isLast && (
                  <View
                    style={{
                      width: getLineWidth(state),
                      minHeight: lineSegmentHeight,
                      backgroundColor: lineColor(state),
                    }}
                  />
                )}
              </View>

              {/* Label + Description text */}
              {(hasLabel || hasDesc) && (
                <View
                  style={{
                    marginLeft: spacing,
                    flex: 1,
                    paddingBottom: isLast ? 0 : 8,
                    justifyContent: 'center',
                    minHeight: resolvedCircleSize,
                  }}
                >
                  {hasLabel && (
                    <Text style={labelTextStyle(state)}>{step.label}</Text>
                  )}
                  {hasLabel && hasDesc && <View style={{ height: 2 }} />}
                  {hasDesc && (
                    <Text style={descTextStyle(state)}>{step.description}</Text>
                  )}
                </View>
              )}
            </View>
          );
        })}
      </View>
    );
  }

  // ─── Horizontal Layout ───

  return (
    <View style={[{ flexDirection: 'column' }, style]}>
      {/* Row of circles and connecting lines */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {steps.map((step, index) => {
          const state = resolveState(index);
          const isLast = index === steps.length - 1;

          return (
            <React.Fragment key={index}>
              {renderCircle(index)}
              {!isLast && (
                <View
                  style={{
                    flex: 1,
                    height: getLineWidth(state),
                    backgroundColor: lineColor(state),
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </View>

      {/* Row of labels and descriptions */}
      {((showLabels && steps.some((s) => s.label != null)) ||
        (showDescriptions && steps.some((s) => s.description != null))) && (
        <View style={{ marginTop: labelSpacing ?? 6, flexDirection: 'row' }}>
          {steps.map((step, index) => {
            const state = resolveState(index);
            const isLast = index === steps.length - 1;
            const hasLabel = showLabels && step.label != null;
            const hasDesc = showDescriptions && step.description != null;

            return (
              <React.Fragment key={index}>
                <View
                  style={{
                    width: resolvedCircleSize,
                    alignItems: 'center',
                    overflow: 'visible',
                  }}
                >
                  <View style={{ width: 100, alignItems: 'center' }}>
                    {hasLabel && (
                      <Text
                        style={[labelTextStyle(state), { textAlign: 'center' }]}
                        numberOfLines={2}
                      >
                        {step.label}
                      </Text>
                    )}
                    {hasLabel && hasDesc && <View style={{ height: 2 }} />}
                    {hasDesc && (
                      <Text
                        style={[descTextStyle(state), { textAlign: 'center' }]}
                        numberOfLines={2}
                      >
                        {step.description}
                      </Text>
                    )}
                  </View>
                </View>
                {!isLast && <View style={{ flex: 1 }} />}
              </React.Fragment>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default Ux4gStatusPipeline;
