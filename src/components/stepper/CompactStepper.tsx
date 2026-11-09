import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { Ux4gIcons } from '../../foundation/icons';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// ─── Types ───────────────────────────────────────────────────────────

export type Ux4gCompactStepperLayout =
  | 'linear'
  | 'rightAligned'
  | 'centered'
  | 'centeredBetween'
  | 'split';

export interface Ux4gCompactStepperProps {
  totalSteps: number;
  currentStep: number;
  stepLabel?: string;
  title?: string;
  description?: string;
  subtitle?: string;
  onNext?: () => void;
  onNextPress?: () => void;
  onPrevious?: () => void;
  onBackPress?: () => void;
  layout?: Ux4gCompactStepperLayout;
  labelAlignment?: 'flex-start' | 'center' | 'flex-end';
  activeColor?: string;
  inactiveColor?: string;
  cumulative?: boolean;
  style?: StyleProp<ViewStyle>;
}

// ─── Main Component ──────────────────────────────────────────────────

export const Ux4gCompactStepper: React.FC<Ux4gCompactStepperProps> = ({
  totalSteps,
  currentStep,
  stepLabel,
  title,
  description,
  subtitle,
  onNext,
  onNextPress,
  onPrevious,
  onBackPress,
  layout = 'linear',
  labelAlignment = 'flex-start',
  activeColor,
  inactiveColor,
  cumulative = true,
  style,
}) => {
  const theme = useUx4gTheme();

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [currentStep]);

  const primary = theme.colors.primary;
  const onSurface = theme.colors.onSurface;

  const resolvedActiveColor = activeColor || primary;
  const resolvedInactiveColor = inactiveColor || (onSurface + '33');
  const resolvedStepLabel = stepLabel || title || '';
  const resolvedDescription = description || subtitle;
  const resolvedOnNext = onNext || onNextPress || (() => {});
  const resolvedOnPrevious = onPrevious || onBackPress || (() => {});

  const commonProps = {
    totalSteps,
    currentStep,
    stepLabel: resolvedStepLabel,
    description: resolvedDescription,
    onNext: resolvedOnNext,
    onPrevious: resolvedOnPrevious,
    activeColor: resolvedActiveColor,
    inactiveColor: resolvedInactiveColor,
    cumulative,
  };

  let content: React.ReactElement;
  switch (layout) {
    case 'linear':
      content = <LinearLayout {...commonProps} labelAlignment={labelAlignment} />;
      break;
    case 'rightAligned':
      content = <RightAlignedLayout {...commonProps} />;
      break;
    case 'centered':
      content = <CenteredLayout {...commonProps} />;
      break;
    case 'centeredBetween':
      content = <CenteredBetweenLayout {...commonProps} />;
      break;
    case 'split':
      content = <SplitLayout {...commonProps} />;
      break;
    default:
      content = <LinearLayout {...commonProps} labelAlignment={labelAlignment} />;
      break;
  }

  return (
    <View style={[{ padding: 16 }, style]}>
      <View style={{ alignItems: 'flex-start' }}>
        {content}
      </View>
    </View>
  );
};

// ─── Capsule Indicator ───────────────────────────────────────────────

interface CapsuleIndicatorProps {
  totalSteps: number;
  currentStep: number;
  activeColor: string;
  inactiveColor: string;
  expand?: boolean;
  cumulative?: boolean;
}

const CapsuleIndicator: React.FC<CapsuleIndicatorProps> = ({
  totalSteps,
  currentStep,
  activeColor,
  inactiveColor,
  expand,
  cumulative = false,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
      }}
    >
      {Array.from({ length: totalSteps }).map((_, i) => (
        <CapsuleItem
          key={i}
          isActive={cumulative ? i + 1 <= currentStep : i + 1 === currentStep}
          activeColor={activeColor}
          inactiveColor={inactiveColor}
          marginRight={i === totalSteps - 1 ? 0 : totalSteps > 8 ? 4 : 6}
        />
      ))}
    </View>
  );
};

// ─── Capsule Item (Native Hardware Accelerated) ─────────────────────

interface CapsuleItemProps {
  isActive: boolean;
  activeColor: string;
  inactiveColor: string;
  marginRight: number;
}

const CapsuleItem: React.FC<CapsuleItemProps> = ({
  isActive,
  activeColor,
  inactiveColor,
  marginRight,
}) => {
  const anim = useRef(new Animated.Value(isActive ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: isActive ? 1 : 0,
      duration: 300,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1.0),
      useNativeDriver: true,
    }).start();
  }, [isActive]);

  const scaleX = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 2.2],
  });

  const activeOpacity = anim;
  const inactiveOpacity = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  return (
    <View style={{ flex: isActive ? 2.2 : 1, height: 8, marginRight, overflow: 'hidden', borderRadius: 4 }}>
      <Animated.View
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 4,
          transform: [{ scaleX }],
        }}
      >
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            {
              backgroundColor: inactiveColor,
              borderRadius: 4,
              opacity: inactiveOpacity,
            },
          ]}
        />
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            {
              backgroundColor: activeColor,
              borderRadius: 4,
              opacity: activeOpacity,
            },
          ]}
        />
      </Animated.View>
    </View>
  );
};

// ─── Stepper Icon Button ─────────────────────────────────────────────
// Matches _StepperIconButton from Flutter: 40x40 circle with border

interface StepperIconButtonProps {
  direction: 'left' | 'right';
  enabled: boolean;
  onPress: () => void;
  iconType?: 'chevron' | 'arrow';
}

const StepperIconButton: React.FC<StepperIconButtonProps> = ({
  direction,
  enabled,
  onPress,
  iconType = 'chevron',
}) => {
  const theme = useUx4gTheme();

  const primary = theme.colors.primary;
  const onSurface = theme.colors.onSurface;
  const surface = theme.colors.surface;

  let contentColor = enabled ? primary : (onSurface + '4D');
  let borderColor = enabled ? (primary + '1F') : (onSurface + '33');

  if (iconType === 'arrow') {
    if (direction === 'left') {
      contentColor = enabled ? '#475569' : (onSurface + '4D');
      borderColor = enabled ? '#E2E8F0' : (onSurface + '33');
    } else {
      contentColor = enabled ? primary : (onSurface + '4D');
      borderColor = enabled ? (primary + '80') : (onSurface + '33');
    }
  }

  const IconComponent = iconType === 'arrow'
    ? (direction === 'left' ? Ux4gIcons.arrowBack : Ux4gIcons.arrowForward)
    : (direction === 'left' ? Ux4gIcons.chevronLeft : Ux4gIcons.chevronRight);

  return (
    <TouchableOpacity
      disabled={!enabled}
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: surface,
        borderWidth: 1.5,
        borderColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <IconComponent size={20} color={contentColor} />
    </TouchableOpacity>
  );
};

// ─── Layout: Linear ──────────────────────────────────────────────────
// Flutter: _LinearCapsuleStepper

interface LayoutProps {
  totalSteps: number;
  currentStep: number;
  stepLabel: string;
  description?: string;
  onNext: () => void;
  onPrevious: () => void;
  activeColor: string;
  inactiveColor: string;
  cumulative?: boolean;
}

interface LinearLayoutProps extends LayoutProps {
  labelAlignment: 'flex-start' | 'center' | 'flex-end';
}

const LinearLayout: React.FC<LinearLayoutProps> = ({
  totalSteps,
  currentStep,
  stepLabel,
  description,
  onNext,
  onPrevious,
  labelAlignment,
  activeColor,
  inactiveColor,
}) => {
  const theme = useUx4gTheme();
  const centered = labelAlignment === 'center';
  const textAlign = centered ? 'center' as const : 'left' as const;

  return (
    <View style={{ width: '100%' }}>
      {/* Row: LeftArrow | Capsules | RightArrow */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <StepperIconButton direction="left" enabled={currentStep > 1} onPress={onPrevious} />
        <View style={{ width: 12 }} />
        <View style={{ flex: 1 }}>
          <CapsuleIndicator
            totalSteps={totalSteps}
            currentStep={currentStep}
            activeColor={activeColor}
            inactiveColor={inactiveColor}
          />
        </View>
        <View style={{ width: 12 }} />
        <StepperIconButton direction="right" enabled={currentStep < totalSteps} onPress={onNext} />
      </View>

      <View style={{ height: 16 }} />

      {/* Labels */}
      <View style={{ alignItems: labelAlignment }}>
        <Text style={[theme.typography.lM_strong, { color: theme.colors.onSurface, textAlign }]}>
          Step {currentStep} of {totalSteps}
        </Text>
        <Text style={[theme.typography.lL_strong, { color: theme.colors.primary, textAlign }]}>
          {stepLabel}
        </Text>
        {description != null && (
          <Text style={[theme.typography.lM_default, { color: `${theme.colors.onSurface}80`, textAlign }]}>
            {description}
          </Text>
        )}
      </View>
    </View>
  );
};

// ─── Layout: Right Aligned ───────────────────────────────────────────
// Flutter: _RightAlignedCapsuleStepper

const RightAlignedLayout: React.FC<LayoutProps> = ({
  totalSteps,
  currentStep,
  stepLabel,
  description,
  onNext,
  onPrevious,
  activeColor,
  inactiveColor,
}) => {
  const theme = useUx4gTheme();

  return (
    <View style={{ width: '100%' }}>
      {/* Row: LeftArrow | Capsules | RightArrow */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <StepperIconButton direction="left" enabled={currentStep > 1} onPress={onPrevious} />
        <View style={{ width: 12 }} />
        <View style={{ flex: 1 }}>
          <CapsuleIndicator
            totalSteps={totalSteps}
            currentStep={currentStep}
            activeColor={activeColor}
            inactiveColor={inactiveColor}
          />
        </View>
        <View style={{ width: 12 }} />
        <StepperIconButton direction="right" enabled={currentStep < totalSteps} onPress={onNext} />
      </View>

      <View style={{ height: 16 }} />

      {/* Row: StepCounter left | Label+Desc right */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Text style={[theme.typography.lM_strong, { color: theme.colors.onSurface }]}>
          Step {currentStep} of {totalSteps}
        </Text>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={[theme.typography.lL_strong, { color: theme.colors.primary }]}>
            {stepLabel}
          </Text>
          {description != null && (
            <Text style={[theme.typography.lM_default, { color: `${theme.colors.onSurface}80` }]}>
              {description}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

// ─── Layout: Centered ────────────────────────────────────────────────
// Flutter: _CenteredCapsuleStepper

const CenteredLayout: React.FC<LayoutProps> = ({
  totalSteps,
  currentStep,
  stepLabel,
  description,
  onNext,
  onPrevious,
  activeColor,
  inactiveColor,
}) => {
  const theme = useUx4gTheme();

  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      {/* Full-width capsule indicator */}
      <CapsuleIndicator
        totalSteps={totalSteps}
        currentStep={currentStep}
        activeColor={activeColor}
        inactiveColor={inactiveColor}
        expand
      />

      <View style={{ height: 16 }} />

      {/* Row: LeftArrow | "Step X of Y" | RightArrow */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <StepperIconButton direction="left" enabled={currentStep > 1} onPress={onPrevious} />
        <Text style={[theme.typography.lM_strong, { color: theme.colors.onSurface, marginHorizontal: 16 }]}>
          Step {currentStep} of {totalSteps}
        </Text>
        <StepperIconButton direction="right" enabled={currentStep < totalSteps} onPress={onNext} />
      </View>

      <View style={{ height: 8 }} />

      {/* Label + Description */}
      <Text style={[theme.typography.lL_strong, { color: theme.colors.primary, textAlign: 'center' }]}>
        {stepLabel}
      </Text>
      {description != null && (
        <Text style={[theme.typography.lM_default, { color: `${theme.colors.onSurface}80`, textAlign: 'center' }]}>
          {description}
        </Text>
      )}
    </View>
  );
};

// ─── Layout: Centered Between ────────────────────────────────────────
// Flutter: _CenteredBetweenCapsuleStepper

const CenteredBetweenLayout: React.FC<LayoutProps> = ({
  totalSteps,
  currentStep,
  stepLabel,
  description,
  onNext,
  onPrevious,
  activeColor,
  inactiveColor,
  cumulative = true,
}) => {
  const theme = useUx4gTheme();

  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      {/* Full-width capsule indicator */}
      <CapsuleIndicator
        totalSteps={totalSteps}
        currentStep={currentStep}
        activeColor={activeColor}
        inactiveColor={inactiveColor}
        cumulative={cumulative}
      />

      <View style={{ height: 16 }} />

      {/* Step counter */}
      <Text style={[theme.typography.lM_strong, { color: theme.colors.onSurface, fontWeight: '700' }]}>
        Step {currentStep} of {totalSteps}
      </Text>

      <View style={{ height: 6 }} />

      {/* Row: LeftArrow | Label+Desc | RightArrow */}
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        <StepperIconButton direction="left" enabled={currentStep > 1} onPress={onPrevious} iconType="arrow" />
        <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 6 }}>
          <Text style={[theme.typography.lL_strong, { color: activeColor || theme.colors.primary, textAlign: 'center', fontWeight: '700' }]}>
            {stepLabel}
          </Text>
          {description != null && (
            <>
              <View style={{ height: 4 }} />
              <Text style={[theme.typography.lM_default, { color: '#64748B', textAlign: 'center', fontSize: 13, lineHeight: 18, maxWidth: 240 }]}>
                {description}
              </Text>
            </>
          )}
        </View>
        <StepperIconButton direction="right" enabled={currentStep < totalSteps} onPress={onNext} iconType="arrow" />
      </View>
    </View>
  );
};

// ─── Layout: Split ───────────────────────────────────────────────────
// Flutter: _SplitCapsuleStepper

const SplitLayout: React.FC<LayoutProps> = ({
  totalSteps,
  currentStep,
  stepLabel,
  description,
  onNext,
  onPrevious,
  activeColor,
  inactiveColor,
}) => {
  const theme = useUx4gTheme();

  return (
    <View style={{ width: '100%' }}>
      {/* Full-width capsule indicator */}
      <CapsuleIndicator
        totalSteps={totalSteps}
        currentStep={currentStep}
        activeColor={activeColor}
        inactiveColor={inactiveColor}
        expand
      />

      <View style={{ height: 16 }} />

      {/* Row: Label+Desc left | StepCounter + Arrows right */}
      <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        {/* Left side: label + description */}
        <View style={{ flex: 1, alignItems: 'flex-start', marginRight: 16 }}>
          <Text style={[theme.typography.lL_strong, { color: theme.colors.primary }]}>
            {stepLabel}
          </Text>
          {description != null && (
            <>
              <View style={{ height: 4 }} />
              <Text style={[theme.typography.lM_default, { color: `${theme.colors.onSurface}80` }]}>
                {description}
              </Text>
            </>
          )}
        </View>

        {/* Right side: step counter + arrows */}
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={[theme.typography.lM_strong, { color: theme.colors.onSurface }]}>
            Step {currentStep} of {totalSteps}
          </Text>
          <View style={{ height: 12 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <StepperIconButton direction="left" enabled={currentStep > 1} onPress={onPrevious} />
            <View style={{ width: 8 }} />
            <StepperIconButton direction="right" enabled={currentStep < totalSteps} onPress={onNext} />
          </View>
        </View>
      </View>
    </View>
  );
};
