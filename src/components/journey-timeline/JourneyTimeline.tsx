import React from 'react';
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  Pressable,
  StyleSheet,
} from 'react-native';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { Ux4gIcons } from '../../foundation/icons';
import { UX4GColors } from '../../foundation/colors';
import { Ux4gUnifiedPillTag, Ux4gPillSegment } from '../tag/Tag';

// ─── Enums & Interfaces ──────────────────────────────────────────────────────

export type Ux4gJourneyStepState = 'completed' | 'current' | 'upcoming';
export type Ux4gJourneyOrientation = 'vertical' | 'horizontal';
export type Ux4gJourneyBadgePosition = 'bottom' | 'topRight';

export interface Ux4gJourneyStepStatus {
  /** Status text (e.g. "2 days remaining") */
  text: string;
  /** Color of the status dot */
  dotColor?: string;
  /** Optional badge/tag text (e.g. "Pending") */
  badgeText?: string;
  /** Badge background color */
  badgeColor?: string;
  /** Badge text color */
  badgeTextColor?: string;
  /** Position of the badge in the card (default: 'bottom') */
  badgePosition?: Ux4gJourneyBadgePosition;
}

export interface Ux4gJourneyStep {
  /** State of this step (completed, current, upcoming) */
  state?: Ux4gJourneyStepState;
  /** Date text shown at the top-left of the card */
  date?: string;
  /** Tag text shown at the top-right of the card */
  tag?: string;
  /** Title text */
  title: string;
  /** Optional helping/description text below the title */
  helpingText?: string;
  /** Optional icon below the title (e.g. link icon) */
  icon?: React.ReactNode;
  /** Optional icon color */
  iconColor?: string;
  /** Optional status indicator with dot + badge */
  status?: Ux4gJourneyStepStatus;
  /** Optional custom content widget below the title area */
  customContent?: React.ReactNode;
  /** Optional step number to show inside the indicator circle */
  stepNumber?: string;
  /** Optional background color override for this specific step card */
  cardColor?: string;
  /** Optional border color override for this specific step card */
  cardBorderColor?: string;
  /** Optional date text color override */
  dateColor?: string;
  /** Optional title text color override */
  titleColor?: string;
  /** Optional date text style override */
  dateStyle?: StyleProp<TextStyle>;
  /** Optional title text style override */
  titleStyle?: StyleProp<TextStyle>;
}

export interface Ux4gJourneyHeader {
  /** Title text */
  title: string;
  /** Description text below the title */
  description?: string;
  /** Optional trailing icon */
  icon?: React.ReactNode;
  /** Callback when trailing icon is tapped */
  onIconPressed?: () => void;
}

export interface Ux4gJourneyTimelineProps {
  /** List of journey steps */
  steps: Ux4gJourneyStep[];
  /** Optional header above the timeline */
  header?: Ux4gJourneyHeader;
  /** Current step index (0-based). Set to null to use each step's state */
  currentStep?: number | null;
  /** Timeline orientation (default: 'vertical') */
  orientation?: Ux4gJourneyOrientation;
  /** Size of the step indicator circle (default: 20) */
  indicatorSize?: number;
  /** Width of the connecting line (default: 3) */
  lineWidth?: number;
  /** Spacing between the indicator and the card (default: 12) */
  indicatorCardSpacing?: number;
  /** Vertical spacing between step cards (default: 12) */
  stepSpacing?: number;
  /** Color for completed/current indicators and lines */
  activeColor?: string;
  /** Color for upcoming indicators and lines */
  inactiveColor?: string;
  /** Card border radius (default: 8) */
  cardBorderRadius?: number;
  /** Card padding */
  cardPadding?: StyleProp<ViewStyle>;
  /** Card background color */
  cardColor?: string;
  /** Card border color */
  cardBorderColor?: string;
  /** Optional default date text style override for all steps */
  dateStyle?: StyleProp<TextStyle>;
  /** Optional default title text style override for all steps */
  titleStyle?: StyleProp<TextStyle>;
  /** Custom container style */
  style?: StyleProp<ViewStyle>;
}

// ─── Sub-Component: Step Indicator ──────────────────────────────────────────

const StepIndicator: React.FC<{
  state: Ux4gJourneyStepState;
  size: number;
  activeColor: string;
  inactiveColor: string;
  stepNumber?: string;
}> = ({ state, size, activeColor, inactiveColor, stepNumber }) => {
  const theme = useUx4gTheme();
  const surfaceColor = theme.colors.surface ?? (theme.isDark ? UX4GColors.neutral950 : UX4GColors.neutral0);

  if (state === 'completed') {
    return (
      <View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: activeColor,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {stepNumber ? (
          <Text
            style={{
              fontSize: size * 0.55,
              fontWeight: '600',
              color: surfaceColor,
            }}
          >
            {stepNumber}
          </Text>
        ) : (
          <Ux4gIcons.check size={size * 0.6} color={surfaceColor} />
        )}
      </View>
    );
  }

  if (state === 'current') {
    return (
      <View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: stepNumber ? activeColor : surfaceColor,
          borderWidth: stepNumber ? 0 : 2.5,
          borderColor: activeColor,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {stepNumber ? (
          <Text
            style={{
              fontSize: size * 0.55,
              fontWeight: '600',
              color: surfaceColor,
            }}
          >
            {stepNumber}
          </Text>
        ) : (
          <View
            style={{
              width: size * 0.45,
              height: size * 0.45,
              borderRadius: (size * 0.45) / 2,
              backgroundColor: activeColor,
            }}
          />
        )}
      </View>
    );
  }

  // upcoming
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: stepNumber ? activeColor : surfaceColor,
        borderWidth: stepNumber ? 0 : 2.5,
        borderColor: inactiveColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {stepNumber ? (
        <Text
          style={{
            fontSize: size * 0.55,
            fontWeight: '600',
            color: surfaceColor,
          }}
        >
          {stepNumber}
        </Text>
      ) : (
        <View
          style={{
            width: size * 0.45,
            height: size * 0.45,
            borderRadius: (size * 0.45) / 2,
            backgroundColor: inactiveColor,
          }}
        />
      )}
    </View>
  );
};

// ─── Sub-Component: Step Card ───────────────────────────────────────────────

const JourneyStepCard: React.FC<{
  step: Ux4gJourneyStep;
  state: Ux4gJourneyStepState;
  borderRadius: number;
  padding?: StyleProp<ViewStyle>;
  cardColor?: string;
  cardBorderColor?: string;
  dateStyle?: StyleProp<TextStyle>;
  titleStyle?: StyleProp<TextStyle>;
}> = ({
  step,
  state,
  borderRadius,
  padding,
  cardColor,
  cardBorderColor,
  dateStyle,
  titleStyle,
}) => {
    const theme = useUx4gTheme();
    const colors = theme.colors;
    const isDark = theme.isDark;

    const isUpcoming = state === 'upcoming';
    const textOpacity = isUpcoming ? 0.5 : 1.0;

    const onSurface = colors.onSurface ?? UX4GColors.neutral900;
    const primary = colors.primary ?? UX4GColors.primary600;
    const secondaryColor = colors.secondary ?? (isDark ? UX4GColors.secondary300 : UX4GColors.secondary600);

    const defaultBg = step.cardColor ?? cardColor ?? (isDark ? UX4GColors.neutral950 : UX4GColors.neutral0);
    const defaultBorder = step.cardBorderColor ?? cardBorderColor ?? `${onSurface}1A`;

    const hasTopRightBadge =
      step.status != null &&
      step.status.badgeText != null &&
      step.status.badgePosition === 'topRight';

    const hasHeaderRow =
      step.date != null || step.tag != null || hasTopRightBadge;

    // Build bottom status pill segments
    const statusPillSegments: Ux4gPillSegment[] = [];
    if (step.status && step.status.badgePosition !== 'topRight') {
      const dotColor = step.status.dotColor ?? secondaryColor;
      statusPillSegments.push({
        text: step.status.text,
        leading: (
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: dotColor,
              marginRight: 6,
            }}
          />
        ),
      });
      if (step.status.badgeText) {
        statusPillSegments.push({
          text: step.status.badgeText,
          bold: true,
          textColor: step.status.badgeTextColor ?? secondaryColor,
        });
      }
    }

    return (
      <View
        style={[
          {
            paddingHorizontal: 16,
            paddingVertical: 12,
            backgroundColor: defaultBg,
            borderRadius,
            borderWidth: 1,
            borderColor: defaultBorder,
          },
          padding,
        ]}
      >
        {/* Date + Tag / Badge Top Row */}
        {hasHeaderRow && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 6,
            }}
          >
            {step.date ? (
              <Text
                style={[
                  theme.typography.bXS_default,
                  {
                    color:
                      step.dateColor ??
                      `${onSurface}${isUpcoming ? '66' : '99'}`,
                  },
                  dateStyle,
                  step.dateStyle,
                ]}
              >
                {step.date}
              </Text>
            ) : (
              <View />
            )}

            {hasTopRightBadge ? (
              <View
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 2,
                  backgroundColor:
                    step.status!.badgeColor ?? `${onSurface}0F`,
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: '600',
                    color:
                      step.status!.badgeTextColor ?? `${onSurface}99`,
                  }}
                >
                  {step.status!.badgeText}
                </Text>
              </View>
            ) : step.tag ? (
              <View
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 2,
                  backgroundColor: `${onSurface}0F`,
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 11,
                    color: `${onSurface}${isUpcoming ? '66' : '99'}`,
                  }}
                >
                  {step.tag}
                </Text>
              </View>
            ) : null}
          </View>
        )}

        {/* Title */}
        <Text
          style={[
            theme.typography.tS_strong,
            {
              color:
                step.titleColor ??
                (isUpcoming ? `${onSurface}80` : onSurface),
            },
            titleStyle,
            step.titleStyle,
          ]}
        >
          {step.title}
        </Text>

        {/* Helping Text */}
        {step.helpingText != null && (
          <Text
            style={[
              theme.typography.bXS_default,
              { color: `${onSurface}80`, marginTop: 4 },
            ]}
          >
            {step.helpingText}
          </Text>
        )}

        {/* Optional Icon */}
        {step.icon != null && (
          <View style={{ marginTop: 6 }}>
            {typeof step.icon === 'function'
              ? step.icon
              : step.icon}
          </View>
        )}

        {/* Status indicator at bottom (when badgePosition is 'bottom') */}
        {statusPillSegments.length > 0 && (
          <View style={{ marginTop: 8, alignSelf: 'flex-start' }}>
            <Ux4gUnifiedPillTag
              height={24}
              containerStyle={{ borderRadius: 8 }}
              segments={statusPillSegments}
            />
          </View>
        )}

        {/* Custom Content */}
        {step.customContent != null && (
          <View style={{ marginTop: 8 }}>{step.customContent}</View>
        )}
      </View>
    );
  };

// ─── Main Component: Ux4gJourneyTimeline ────────────────────────────────────

export const Ux4gJourneyTimeline: React.FC<Ux4gJourneyTimelineProps> = ({
  steps = [],
  header,
  currentStep,
  orientation = 'vertical',
  indicatorSize = 20,
  lineWidth = 3,
  indicatorCardSpacing = 12,
  stepSpacing = 12,
  activeColor,
  inactiveColor,
  cardBorderRadius = 8,
  cardPadding,
  cardColor,
  cardBorderColor,
  dateStyle,
  titleStyle,
  style,
}) => {
  const theme = useUx4gTheme();
  const colors = theme.colors;

  const primary = colors.primary ?? UX4GColors.primary600;
  const onSurface = colors.onSurface ?? UX4GColors.neutral900;

  const resolvedActiveColor = activeColor ?? primary;
  const resolvedInactiveColor =
    inactiveColor ?? `${onSurface}40`; // 0.25 opacity

  const resolveState = (index: number): Ux4gJourneyStepState => {
    if (currentStep !== undefined && currentStep !== null) {
      if (index < currentStep) return 'completed';
      if (index === currentStep) return 'current';
      return 'upcoming';
    }
    return steps[index].state ?? 'upcoming';
  };

  // ── Render Header ──
  const renderHeader = () => {
    if (!header) return null;
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 16,
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={[
                theme.typography.tS_strong,
                { color: colors.onSurface },
              ]}
            >
              {header.title}
            </Text>
            {header.icon && (
              <Pressable
                onPress={header.onIconPressed}
                style={{ marginLeft: 8 }}
              >
                {header.icon}
              </Pressable>
            )}
          </View>
          {header.description && (
            <Text
              style={[
                theme.typography.bS_default,
                { color: `${colors.onSurface}99`, marginTop: 4 },
              ]}
            >
              {header.description}
            </Text>
          )}
        </View>
      </View>
    );
  };

  // ── Render Vertical Layout ──
  if (orientation === 'vertical') {
    return (
      <View style={[{ flexDirection: 'column' }, style]}>
        {renderHeader()}
        {steps.map((step, i) => {
          const state = resolveState(i);
          const isFirst = i === 0;
          const isLast = i === steps.length - 1;

          // Top line color
          const topLineColor =
            state === 'completed' || state === 'current'
              ? resolvedActiveColor
              : resolvedInactiveColor;

          // Bottom line color
          const bottomLineColor =
            state === 'completed'
              ? resolvedActiveColor
              : resolvedInactiveColor;

          return (
            <View
              key={i}
              style={{
                flexDirection: 'row',
                alignItems: 'stretch',
              }}
            >
              {/* Indicator Column */}
              <View style={{ width: indicatorSize, alignItems: 'center' }}>
                {/* Top connecting line */}
                {!isFirst ? (
                  <View
                    style={{
                      width: lineWidth,
                      flex: 1,
                      backgroundColor: topLineColor,
                    }}
                  />
                ) : (
                  <View style={{ flex: 1 }} />
                )}

                {/* Circle Indicator */}
                <StepIndicator
                  state={state}
                  size={indicatorSize}
                  activeColor={resolvedActiveColor}
                  inactiveColor={resolvedInactiveColor}
                  stepNumber={step.stepNumber}
                />

                {/* Bottom connecting line */}
                {!isLast ? (
                  <View
                    style={{
                      width: lineWidth,
                      flex: 1,
                      backgroundColor: bottomLineColor,
                    }}
                  />
                ) : (
                  <View style={{ flex: 1 }} />
                )}
              </View>

              <View style={{ width: indicatorCardSpacing }} />

              {/* Step Card Container */}
              <View style={{ flex: 1, paddingBottom: isLast ? 0 : stepSpacing }}>
                <JourneyStepCard
                  step={step}
                  state={state}
                  borderRadius={cardBorderRadius}
                  padding={cardPadding}
                  cardColor={cardColor}
                  cardBorderColor={cardBorderColor}
                  dateStyle={step.dateStyle ?? dateStyle}
                  titleStyle={step.titleStyle ?? titleStyle}
                />
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  // ── Render Horizontal Layout ──
  const activeIndex =
    currentStep !== undefined && currentStep !== null
      ? currentStep
      : steps.findIndex((s) => s.state === 'current');

  const resolvedActiveIndex = activeIndex >= 0 ? activeIndex : 0;

  return (
    <View style={[{ flexDirection: 'column' }, style]}>
      {renderHeader()}

      {/* Horizontal Stepper Line Row */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {steps.map((step, i) => {
          const state = resolveState(i);
          const isLast = i === steps.length - 1;

          return (
            <React.Fragment key={i}>
              <StepIndicator
                state={state}
                size={indicatorSize}
                activeColor={resolvedActiveColor}
                inactiveColor={resolvedInactiveColor}
                stepNumber={step.stepNumber}
              />
              {!isLast && (
                <View
                  style={{
                    flex: 1,
                    height: lineWidth,
                    backgroundColor:
                      state === 'completed'
                        ? resolvedActiveColor
                        : resolvedInactiveColor,
                    marginHorizontal: stepSpacing * 0.5,
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </View>

      {/* Active Step Card */}
      {steps[resolvedActiveIndex] && (
        <View style={{ marginTop: indicatorCardSpacing }}>
          <JourneyStepCard
            step={steps[resolvedActiveIndex]}
            state={resolveState(resolvedActiveIndex)}
            borderRadius={cardBorderRadius}
            padding={cardPadding}
            cardColor={cardColor}
            cardBorderColor={cardBorderColor}
            dateStyle={steps[resolvedActiveIndex].dateStyle ?? dateStyle}
            titleStyle={steps[resolvedActiveIndex].titleStyle ?? titleStyle}
          />
        </View>
      )}
    </View>
  );
};

export default Ux4gJourneyTimeline;
