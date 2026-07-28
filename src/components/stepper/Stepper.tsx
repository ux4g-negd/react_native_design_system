import React from 'react';
import { View, Text, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { Ux4gIcons } from '../../foundation/icons';
import { UX4GColors } from '../../foundation/colors';
import Svg, { Line } from 'react-native-svg';

// ─── Types ───────────────────────────────────────────────────────────

export type Ux4gStepperOrientation = 'horizontal' | 'vertical';
export type Ux4gStepperLineStyle = 'solid' | 'dashed';
export type Ux4gStepperLinePlacement = 'center' | 'bottom';

export interface Ux4gStepItem {
  title: string;
  description?: string;
  statusLabel?: string;
  isError?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  statusStyle?: StyleProp<TextStyle>;
}

export interface Ux4gStepperProps {
  totalSteps: number;
  currentStep: number;
  orientation?: Ux4gStepperOrientation;
  lineStyle?: Ux4gStepperLineStyle;
  linePlacement?: Ux4gStepperLinePlacement;
  steps?: Ux4gStepItem[];
  stepSize?: number;
  showLabels?: boolean;
  edgeLabelAlignment?: boolean;
  activeStepBackground?: boolean;
  stepSpacing?: number;
  alignIconWithDescription?: boolean;
  style?: StyleProp<ViewStyle>;
}

// ─── Main Component ──────────────────────────────────────────────────

export const Ux4gStepper: React.FC<Ux4gStepperProps> = ({
  totalSteps,
  currentStep,
  orientation = 'horizontal',
  lineStyle = 'solid',
  linePlacement = 'center',
  steps = [],
  stepSize = 32,
  showLabels = true,
  edgeLabelAlignment = false,
  activeStepBackground = false,
  stepSpacing = 24,
  alignIconWithDescription = false,
  style,
}) => {
  if (orientation === 'horizontal') {
    return (
      <HorizontalStepper
        totalSteps={totalSteps}
        currentStep={currentStep}
        lineStyle={lineStyle}
        linePlacement={linePlacement}
        steps={steps}
        stepSize={stepSize}
        showLabels={showLabels}
        edgeLabelAlignment={edgeLabelAlignment}
        activeStepBackground={activeStepBackground}
        style={style}
      />
    );
  }

  return (
    <VerticalStepper
      totalSteps={totalSteps}
      currentStep={currentStep}
      lineStyle={lineStyle}
      steps={steps}
      stepSize={stepSize}
      showLabels={showLabels}
      stepSpacing={stepSpacing}
      alignIconWithDescription={alignIconWithDescription}
      style={style}
    />
  );
};

// ─── Horizontal Stepper ──────────────────────────────────────────────

interface HorizontalStepperProps {
  totalSteps: number;
  currentStep: number;
  lineStyle: Ux4gStepperLineStyle;
  linePlacement: Ux4gStepperLinePlacement;
  steps: Ux4gStepItem[];
  stepSize: number;
  showLabels: boolean;
  edgeLabelAlignment: boolean;
  activeStepBackground: boolean;
  style?: StyleProp<ViewStyle>;
}

const HorizontalStepper: React.FC<HorizontalStepperProps> = ({
  totalSteps,
  currentStep,
  lineStyle,
  linePlacement,
  steps,
  stepSize,
  showLabels,
  edgeLabelAlignment,
  activeStepBackground,
  style,
}) => {
  const theme = useUx4gTheme();

  // ── Bottom Line Placement ──
  if (linePlacement === 'bottom') {
    return (
      <View style={[{ flexDirection: 'row', alignItems: 'flex-start' }, style]}>
        {Array.from({ length: totalSteps }).map((_, i) => {
          const stepIndex = i + 1;
          const isCompleted = currentStep > stepIndex;
          const isActive = currentStep === stepIndex;
          const isPending = currentStep < stepIndex;
          const stepData = i < steps.length ? steps[i] : null;

          const showActiveBg = activeStepBackground && isActive;
          const bgColor = showActiveBg
            ? (theme.isDark ? UX4GColors.primary900 : UX4GColors.primary50)
            : 'transparent';

          return (
            <View key={i} style={{ flex: 1, backgroundColor: bgColor, paddingTop: 16, alignItems: 'center' }}>
              <StepIcon
                stepIndex={stepIndex}
                isCompleted={isCompleted}
                isActive={isActive}
                isPending={isPending}
                isError={stepData?.isError ?? false}
                size={stepSize}
              />
              {showLabels && (
                <>
                  <View style={{ height: 8 }} />
                  <StepLabels
                    title={stepData?.title ?? `Step ${stepIndex}`}
                    description={stepData?.description}
                    statusLabel={stepData?.statusLabel}
                    isCompleted={isCompleted}
                    isActive={isActive}
                    isPending={isPending}
                    isError={stepData?.isError ?? false}
                    textAlign="center"
                    titleStyle={stepData?.titleStyle}
                    descriptionStyle={stepData?.descriptionStyle}
                    statusStyle={stepData?.statusStyle}
                  />
                </>
              )}
              <View style={{ height: 12 }} />
              <View style={{ width: '100%', paddingLeft: i === 0 ? 0 : 4, paddingRight: i === totalSteps - 1 ? 0 : 4 }}>
                <StepperLine isCompleted={isCompleted} orientation="horizontal" lineStyle={lineStyle} />
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  // ── Center Line Placement (default) ──
  // Uses Stack approach: lines behind, icons + labels on top
  return (
    <View style={style}>
      {/* Lines layer */}
      <View style={{ position: 'absolute', top: stepSize / 2, left: 0, right: 0, flexDirection: 'row' }}>
        {Array.from({ length: totalSteps }).map((_, i) => (
          <View key={i} style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            {/* Left segment */}
            {edgeLabelAlignment && i === 0 ? (
              <View style={{ width: stepSize }} />
            ) : i === 0 ? (
              <View style={{ flex: 1 }} />
            ) : (
              <View style={{ flex: 1 }}>
                <StepperLine isCompleted={currentStep > i} orientation="horizontal" lineStyle={lineStyle} />
              </View>
            )}

            {/* Gap for icon */}
            {!(edgeLabelAlignment && i === 0) && !(edgeLabelAlignment && i === totalSteps - 1) && (
              <View style={{ width: stepSize }} />
            )}

            {/* Right segment */}
            {edgeLabelAlignment && i === totalSteps - 1 ? (
              <View style={{ width: stepSize }} />
            ) : i === totalSteps - 1 ? (
              <View style={{ flex: 1 }} />
            ) : (
              <View style={{ flex: 1 }}>
                <StepperLine isCompleted={currentStep > i + 1} orientation="horizontal" lineStyle={lineStyle} />
              </View>
            )}
          </View>
        ))}
      </View>

      {/* Icons + labels layer */}
      <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
        {Array.from({ length: totalSteps }).map((_, i) => {
          const stepIndex = i + 1;
          const isCompleted = currentStep > stepIndex;
          const isActive = currentStep === stepIndex;
          const isPending = currentStep < stepIndex;
          const stepData = i < steps.length ? steps[i] : null;

          let columnAlignment: 'center' | 'flex-start' | 'flex-end' = 'center';
          let textAlign: 'center' | 'left' | 'right' = 'center';
          if (edgeLabelAlignment) {
            if (i === 0) {
              columnAlignment = 'flex-start';
              textAlign = 'left';
            }
            if (i === totalSteps - 1) {
              columnAlignment = 'flex-end';
              textAlign = 'right';
            }
          }

          return (
            <View key={i} style={{ flex: 1, alignItems: columnAlignment }}>
              <StepIcon
                stepIndex={stepIndex}
                isCompleted={isCompleted}
                isActive={isActive}
                isPending={isPending}
                isError={stepData?.isError ?? false}
                size={stepSize}
              />
              {showLabels && (
                <>
                  <View style={{ height: 8 }} />
                  <View style={{ paddingHorizontal: 4 }}>
                    <StepLabels
                      title={stepData?.title ?? `Step ${stepIndex}`}
                      description={stepData?.description}
                      statusLabel={stepData?.statusLabel}
                      isCompleted={isCompleted}
                      isActive={isActive}
                      isPending={isPending}
                      isError={stepData?.isError ?? false}
                      textAlign={textAlign}
                      titleStyle={stepData?.titleStyle}
                      descriptionStyle={stepData?.descriptionStyle}
                      statusStyle={stepData?.statusStyle}
                    />
                  </View>
                </>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

// ─── Vertical Stepper ────────────────────────────────────────────────

interface VerticalStepperProps {
  totalSteps: number;
  currentStep: number;
  lineStyle: Ux4gStepperLineStyle;
  steps: Ux4gStepItem[];
  stepSize: number;
  showLabels: boolean;
  stepSpacing: number;
  alignIconWithDescription: boolean;
  style?: StyleProp<ViewStyle>;
}

const VerticalStepper: React.FC<VerticalStepperProps> = ({
  totalSteps,
  currentStep,
  lineStyle,
  steps,
  stepSize,
  showLabels,
  stepSpacing,
  alignIconWithDescription,
  style,
}) => {
  return (
    <View style={style}>
      {Array.from({ length: totalSteps }).map((_, i) => {
        const stepIndex = i + 1;
        const isCompleted = currentStep > stepIndex;
        const isActive = currentStep === stepIndex;
        const isPending = currentStep < stepIndex;
        const stepData = i < steps.length ? steps[i] : null;

        return (
          <View key={i} style={{ flexDirection: 'row' }}>
            {/* Icon column */}
            <View style={{ width: stepSize, alignItems: 'center' }}>
              {/* Optional leading line when alignIconWithDescription */}
              {alignIconWithDescription && stepData && stepData.title ? (
                <View style={{ height: 28 }}>
                  {i > 0 && (
                    <StepperLine isCompleted={currentStep > i} orientation="vertical" lineStyle={lineStyle} />
                  )}
                </View>
              ) : null}

              <StepIcon
                stepIndex={stepIndex}
                isCompleted={isCompleted}
                isActive={isActive}
                isPending={isPending}
                isError={stepData?.isError ?? false}
                size={stepSize}
              />

              {i < totalSteps - 1 && (
                showLabels ? (
                  <View style={{ flex: 1 }}>
                    <StepperLine isCompleted={isCompleted} orientation="vertical" lineStyle={lineStyle} />
                  </View>
                ) : (
                  <View style={{ height: stepSpacing }}>
                    <StepperLine isCompleted={isCompleted} orientation="vertical" lineStyle={lineStyle} />
                  </View>
                )
              )}
            </View>

            {/* Label column */}
            {showLabels && (
              <>
                <View style={{ width: 12 }} />
                <View style={{ flex: 1, paddingTop: 4, paddingBottom: i < totalSteps - 1 ? stepSpacing : 0 }}>
                  <StepLabels
                    title={stepData?.title ?? `Step ${stepIndex}`}
                    description={stepData?.description}
                    statusLabel={stepData?.statusLabel}
                    isCompleted={isCompleted}
                    isActive={isActive}
                    isPending={isPending}
                    isError={stepData?.isError ?? false}
                    textAlign="left"
                    titleStyle={stepData?.titleStyle}
                    descriptionStyle={stepData?.descriptionStyle}
                    statusStyle={stepData?.statusStyle}
                  />
                </View>
              </>
            )}
          </View>
        );
      })}
    </View>
  );
};

// ─── Step Icon ───────────────────────────────────────────────────────

interface StepIconProps {
  stepIndex: number;
  isCompleted: boolean;
  isActive: boolean;
  isPending: boolean;
  isError: boolean;
  size: number;
}

const StepIcon: React.FC<StepIconProps> = ({
  stepIndex,
  isCompleted,
  isActive,
  isPending,
  isError,
  size,
}) => {
  const theme = useUx4gTheme();

  const primary = theme.colors.primary;
  const onPrimary = theme.colors.onPrimary;
  const onSurface = theme.colors.onSurface;
  const error = theme.colors.error;

  const backgroundColor = isError
    ? 'transparent'
    : isCompleted
      ? primary
      : 'transparent';

  const borderColor = isError
    ? error
    : (isCompleted || isActive)
      ? primary
      : `${onSurface}33`; // 0.2 opacity

  const borderWidth = (isActive || isPending || isError) ? 2 : 0;

  const iconSize = size * 0.625;

  let child: React.ReactElement;
  if (isError) {
    child = <Ux4gIcons.error size={iconSize} color={error} />;
  } else if (isCompleted) {
    child = <Ux4gIcons.check size={iconSize} color={onPrimary} />;
  } else if (isActive) {
    child = (
      <View
        style={{
          width: size * 0.375,
          height: size * 0.375,
          borderRadius: size,
          backgroundColor: primary,
        }}
      />
    );
  } else {
    child = (
      <Text
        style={[
          theme.typography.lM_default,
          {
            color: `${onSurface}4D`, // 0.3 opacity
            fontWeight: 'bold',
            fontSize: size * 0.375,
          },
        ]}
      >
        {stepIndex}
      </Text>
    );
  }

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        borderColor,
        borderWidth,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {child}
    </View>
  );
};

// ─── Step Labels ─────────────────────────────────────────────────────

interface StepLabelsProps {
  title: string;
  description?: string;
  statusLabel?: string;
  isCompleted: boolean;
  isActive: boolean;
  isPending: boolean;
  isError: boolean;
  textAlign: 'center' | 'left' | 'right';
  titleStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  statusStyle?: StyleProp<TextStyle>;
}

const StepLabels: React.FC<StepLabelsProps> = ({
  title,
  description,
  statusLabel,
  isCompleted,
  isActive,
  isPending,
  isError,
  textAlign,
  titleStyle,
  descriptionStyle,
  statusStyle,
}) => {
  const theme = useUx4gTheme();
  const primary = theme.colors.primary;
  const onSurface = theme.colors.onSurface;
  const error = theme.colors.error;
  const success = theme.colors.success;

  const titleColor = isError
    ? error
    : isPending
      ? `${onSurface}66` // 0.4 opacity
      : onSurface;

  const resolvedDescriptionColor = isError
    ? error
    : `${onSurface}66`; // 0.4 opacity

  const statusColor = isError
    ? error
    : isCompleted
      ? success
      : isActive
        ? primary
        : `${onSurface}66`; // 0.4 opacity

  const alignMap = {
    center: 'center' as const,
    left: 'flex-start' as const,
    right: 'flex-end' as const,
  };

  const resolvedStatusText =
    statusLabel ??
    (isError
      ? 'Error'
      : isCompleted
        ? 'Completed'
        : isActive
          ? 'In progress'
          : undefined);

  return (
    <View style={{ alignItems: alignMap[textAlign] }}>
      <Text
        style={[
          theme.typography.lL_strong,
          { color: titleColor, textAlign },
          titleStyle,
        ]}
      >
        {title}
      </Text>
      {description != null && (
        <Text
          style={[
            theme.typography.lM_default,
            { color: resolvedDescriptionColor, textAlign },
            descriptionStyle,
          ]}
        >
          {description}
        </Text>
      )}
      {resolvedStatusText != null && (
        <Text
          style={[
            theme.typography.lS_strong,
            { color: statusColor, textAlign },
            statusStyle,
          ]}
        >
          {resolvedStatusText}
        </Text>
      )}
    </View>
  );
};

// ─── Stepper Line ────────────────────────────────────────────────────

interface StepperLineProps {
  isCompleted: boolean;
  orientation: Ux4gStepperOrientation;
  lineStyle: Ux4gStepperLineStyle;
}

export const StepperLine: React.FC<StepperLineProps> = ({
  isCompleted,
  orientation,
  lineStyle,
}) => {
  const theme = useUx4gTheme();
  const isHorizontal = orientation === 'horizontal';
  const color = isCompleted
    ? theme.colors.primary
    : `${theme.colors.onSurface}33`; // 0.2 opacity

  if (lineStyle === 'dashed') {
    return (
      <View style={{ flex: 1, overflow: 'hidden' }}>
        <Svg
          height={isHorizontal ? '2' : '100%'}
          width={isHorizontal ? '100%' : '2'}
        >
          <Line
            x1={isHorizontal ? '0' : '1'}
            y1={isHorizontal ? '1' : '0'}
            x2={isHorizontal ? '100%' : '1'}
            y2={isHorizontal ? '1' : '100%'}
            stroke={color}
            strokeWidth="2"
            strokeDasharray="12 8"
          />
        </Svg>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color,
        height: isHorizontal ? 2 : undefined,
        width: isHorizontal ? undefined : 2,
        alignSelf: isHorizontal ? undefined : 'center',
      }}
    />
  );
};
