import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface ContinueApplicationDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

interface StepData {
  title: string;
  subtitle: string;
  status: 'completed' | 'inProgress' | 'notStarted';
}

const STEPS: StepData[] = [
  {
    title: 'Eligibility check',
    subtitle: 'Completed',
    status: 'completed',
  },
  {
    title: 'Personal information',
    subtitle: 'Completed',
    status: 'completed',
  },
  {
    title: 'Upload documents',
    subtitle: 'In progress · 1 of 4 uploaded',
    status: 'inProgress',
  },
  {
    title: 'Review',
    subtitle: 'Not started',
    status: 'notStarted',
  },
  {
    title: 'Submit',
    subtitle: 'Not started',
    status: 'notStarted',
  },
];

export const ContinueApplicationDoc: React.FC<ContinueApplicationDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');

  const colors = useMemo(() => {
    return {
      screenBg: variant === 'Card style'
        ? (isDark ? UX4GColors.primary900 : UX4GColors.primary100)
        : (isDark ? UX4GColors.neutral950 : '#FAFAFA'),
      cardBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral800 : '#E5E7EB',
      headerBg: isDark ? UX4GColors.neutral950 : '#FFFFFF',
      titleColor: isDark ? UX4GColors.neutral50 : '#111827',
      subtleText: isDark ? UX4GColors.neutral400 : '#4B5563',
      stepTitle: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      stepSubtitle: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      timestampColor: variant === 'Card style'
        ? (isDark ? UX4GColors.neutral500 : '#9CA3AF')
        : (isDark ? UX4GColors.neutral200 : UX4GColors.neutral700),
      completedIconBg: isDark ? UX4GColors.green500 : UX4GColors.green600,
      completedBorder: isDark ? UX4GColors.green500 : UX4GColors.green600,
      inProgressBg: isDark ? UX4GColors.neutral800 : '#FFFFFF',
      inProgressBorder: isDark ? UX4GColors.neutral500 : '#D1D5DB',
      notStartedBg: isDark ? UX4GColors.neutral800 : '#FFFFFF',
      notStartedBorder: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      startFreshColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      footerText: isDark ? UX4GColors.neutral500 : '#9CA3AF',
    };
  }, [isDark, variant]);

  // Clean React Native TSX code snippet using UX4G components
  const codeString = useMemo(() => {
    const isCard = variant === 'Card style';
    if (isCard) {
      return `// Continue Application Screen Pattern (Card Style Layout)

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gButton,
  Ux4gCard,
  UX4GColors,
} from 'ux4g-react-native-design-system';

interface StepItem {
  title: string;
  subtitle: string;
  status: 'completed' | 'inProgress' | 'notStarted';
}

const STEPS: StepItem[] = [
  { title: 'Eligibility check', subtitle: 'Completed', status: 'completed' },
  { title: 'Personal information', subtitle: 'Completed', status: 'completed' },
  { title: 'Upload documents', subtitle: 'In progress · 1 of 4 uploaded', status: 'inProgress' },
  { title: 'Review', subtitle: 'Not started', status: 'notStarted' },
  { title: 'Submit', subtitle: 'Not started', status: 'notStarted' },
];

export const ContinueApplicationCardScreen = ({
  isDark = ${isDark},
  onContinue = () => {},
  onStartFresh = () => {},
}: {
  isDark?: boolean;
  onContinue?: () => void;
  onStartFresh?: () => void;
}) => {
  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.primary900 : UX4GColors.primary100 },
      ]}
    >
      {/* Header Container */}
      <View style={{ backgroundColor: isDark ? UX4GColors.neutral950 : '#FFFFFF' }}>
        <Ux4gAppHeader
          variant="light"
          showBackButton={false}
          leadingWidgets={[
            <Image
              key="emblem"
              source={require('./assets/national_emblem.png')}
              style={[
                styles.emblemIcon,
                isDark && { tintColor: '#FFFFFF' },
              ]}
              resizeMode="contain"
            />,
            <View
              key="divider"
              style={[
                styles.verticalDivider,
                { backgroundColor: isDark ? UX4GColors.neutral700 : '#D1D5DB' },
              ]}
            />,
            <Image
              key="union"
              source={require('./assets/union_logo.png')}
              style={[
                styles.unionIcon,
                { tintColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600 },
              ]}
              resizeMode="contain"
            />,
          ]}
          actions={[
            {
              icon: 'menu',
              onPressed: () => {},
              tooltip: 'Menu',
            },
          ]}
        />
        <Ux4gDivider
          color={isDark ? UX4GColors.neutral800 : '#E5E7EB'}
          thickness={1}
        />
      </View>

      {/* Main Content inside Ux4gCard */}
      <ScrollView
        contentContainerStyle={styles.cardScrollPadding}
        showsVerticalScrollIndicator={false}
      >
        <Ux4gCard
          cornerRadius={16}
          backgroundColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
          borderColor={isDark ? UX4GColors.neutral800 : 'transparent'}
          borderWidth={isDark ? 1 : 0}
          elevation={2}
        >
          <View style={styles.cardInner}>
            {/* Title & Subtitle */}
            <Text
              style={[
                styles.headingText,
                { color: isDark ? UX4GColors.neutral50 : '#111827' },
              ]}
            >
              {'Continue your\\napplication?'}
            </Text>
            <Text
              style={[
                styles.subheadingText,
                { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
              ]}
            >
              Income Certificate · Started 10 Apr 2026
            </Text>

            {/* Section Title */}
            <Text
              style={[
                styles.sectionTitle,
                { color: isDark ? UX4GColors.neutral50 : '#111827' },
              ]}
            >
              Your progress
            </Text>

            {/* Step List */}
            <View style={styles.stepListContainer}>
              {STEPS.map((step, index) => {
                const isCompleted = step.status === 'completed';
                const isInProgress = step.status === 'inProgress';

                return (
                  <View
                    key={step.title}
                    style={[
                      styles.stepRow,
                      index < STEPS.length - 1 && { marginBottom: 20 },
                    ]}
                  >
                    {/* Status Circle Indicator */}
                    <View
                      style={[
                        styles.indicatorCircle,
                        isCompleted && {
                          backgroundColor: isDark ? UX4GColors.green500 : UX4GColors.green600,
                          borderColor: isDark ? UX4GColors.green500 : UX4GColors.green600,
                        },
                        isInProgress && {
                          backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
                          borderColor: isDark ? UX4GColors.neutral500 : '#D1D5DB',
                          borderWidth: 2,
                        },
                        step.status === 'notStarted' && {
                          backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
                          borderColor: isDark ? UX4GColors.neutral700 : '#E5E7EB',
                          borderWidth: 1.5,
                        },
                      ]}
                    >
                      {isCompleted && (
                        <Text style={styles.checkmarkIcon}>✓</Text>
                      )}
                    </View>

                    {/* Step Details */}
                    <View style={styles.stepDetails}>
                      <Text
                        style={[
                          styles.stepTitle,
                          { color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900 },
                        ]}
                      >
                        {step.title}
                      </Text>
                      <Text
                        style={[
                          styles.stepSubtitle,
                          { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700 },
                        ]}
                      >
                        {step.subtitle}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>

            {/* Timestamp */}
            <Text
              style={[
                styles.timestampText,
                { color: isDark ? UX4GColors.neutral500 : '#9CA3AF' },
              ]}
            >
              Last saved 10 Apr 2026 at 3:12 PM
            </Text>
          </View>
        </Ux4gCard>
      </ScrollView>

      {/* Actions */}
      <View style={styles.actionsContainer}>
        <Ux4gButton
          text="Continue from Step 3"
          onPress={onContinue}
          size="large"
          height={48}
          width="100%"
        />
        <View style={{ height: 12 }} />
        <Ux4gButton
          text="Start fresh"
          onPress={onStartFresh}
          variant="outline"
          size="large"
          height={48}
          width="100%"
          contentColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
          borderColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
        />
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <Text style={[styles.poweredByText, { color: isDark ? UX4GColors.neutral500 : '#9CA3AF' }]}>
          Powered by -
        </Text>
        <Image
          source={require('./assets/digital_india_logo.png')}
          style={[styles.digitalIndiaLogo, isDark && { tintColor: '#FFFFFF' }]}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  emblemIcon: {
    height: 40,
    width: 28,
  },
  verticalDivider: {
    height: 32,
    width: 1,
  },
  unionIcon: {
    height: 32,
    width: 44,
  },
  cardScrollPadding: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  cardInner: {
    padding: 24,
  },
  headingText: {
    fontSize: 26,
    fontWeight: '800',
    lineHeight: 31,
  },
  subheadingText: {
    fontSize: 14,
    marginTop: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 20,
  },
  stepListContainer: {
    marginBottom: 20,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  indicatorCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    marginTop: 2,
  },
  checkmarkIcon: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  stepDetails: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
  stepSubtitle: {
    fontSize: 13,
    marginTop: 2,
  },
  timestampText: {
    fontSize: 13,
  },
  actionsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  footerContainer: {
    alignItems: 'center',
    paddingBottom: 24,
  },
  poweredByText: {
    fontSize: 11,
    marginBottom: 6,
  },
  digitalIndiaLogo: {
    height: 24,
    width: 90,
  },
});`;
    }

    return `// Continue Application Screen Pattern (Default Layout)

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-design-system';

interface StepItem {
  title: string;
  subtitle: string;
  status: 'completed' | 'inProgress' | 'notStarted';
}

const STEPS: StepItem[] = [
  { title: 'Eligibility check', subtitle: 'Completed', status: 'completed' },
  { title: 'Personal information', subtitle: 'Completed', status: 'completed' },
  { title: 'Upload documents', subtitle: 'In progress · 1 of 4 uploaded', status: 'inProgress' },
  { title: 'Review', subtitle: 'Not started', status: 'notStarted' },
  { title: 'Submit', subtitle: 'Not started', status: 'notStarted' },
];

export const ContinueApplicationScreen = ({
  isDark = ${isDark},
  onContinue = () => {},
  onStartFresh = () => {},
}: {
  isDark?: boolean;
  onContinue?: () => void;
  onStartFresh?: () => void;
}) => {
  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.neutral950 : '#FAFAFA' },
      ]}
    >
      {/* Header with UX4G AppHeader & Ux4gDivider */}
      <Ux4gAppHeader
        variant="light"
        showBackButton={false}
        backgroundColor={isDark ? UX4GColors.neutral950 : '#FFFFFF'}
        leadingWidgets={[
          <Image
            key="emblem"
            source={require('./assets/national_emblem.png')}
            style={[
              styles.emblemIcon,
              isDark && { tintColor: '#FFFFFF' },
            ]}
            resizeMode="contain"
          />,
          <View
            key="divider"
            style={[
              styles.verticalDivider,
              { backgroundColor: isDark ? UX4GColors.neutral700 : '#D1D5DB' },
            ]}
          />,
          <Image
            key="union"
            source={require('./assets/union_logo.png')}
            style={[
              styles.unionIcon,
              { tintColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600 },
            ]}
            resizeMode="contain"
          />,
        ]}
        actions={[
          {
            icon: 'menu',
            onPressed: () => {},
            tooltip: 'Menu',
          },
        ]}
      />
      <Ux4gDivider
        color={isDark ? UX4GColors.neutral800 : '#E5E7EB'}
        thickness={1}
      />

      {/* Main Content Area */}
      <ScrollView
        contentContainerStyle={styles.scrollPadding}
        showsVerticalScrollIndicator={false}
      >
        {/* Title & Subtitle */}
        <Text
          style={[
            styles.headingText,
            { color: isDark ? UX4GColors.neutral50 : '#111827' },
          ]}
        >
          {'Continue your\\napplication?'}
        </Text>
        <Text
          style={[
            styles.subheadingText,
            { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
          ]}
        >
          Income Certificate · Started 10 Apr 2026
        </Text>

        {/* Section Title */}
        <Text
          style={[
            styles.sectionTitle,
            { color: isDark ? UX4GColors.neutral50 : '#111827' },
          ]}
        >
          Your progress
        </Text>

        {/* Step List */}
        <View style={styles.stepListContainer}>
          {STEPS.map((step, index) => {
            const isCompleted = step.status === 'completed';
            const isInProgress = step.status === 'inProgress';

            return (
              <View
                key={step.title}
                style={[
                  styles.stepRow,
                  index < STEPS.length - 1 && { marginBottom: 20 },
                ]}
              >
                {/* Status Circle Indicator */}
                <View
                  style={[
                    styles.indicatorCircle,
                    isCompleted && {
                      backgroundColor: isDark ? UX4GColors.green500 : UX4GColors.green600,
                      borderColor: isDark ? UX4GColors.green500 : UX4GColors.green600,
                    },
                    isInProgress && {
                      backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
                      borderColor: isDark ? UX4GColors.neutral500 : '#D1D5DB',
                      borderWidth: 2,
                    },
                    step.status === 'notStarted' && {
                      backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
                      borderColor: isDark ? UX4GColors.neutral700 : '#E5E7EB',
                      borderWidth: 1.5,
                    },
                  ]}
                >
                  {isCompleted && (
                    <Text style={styles.checkmarkIcon}>✓</Text>
                  )}
                </View>

                {/* Step Details */}
                <View style={styles.stepDetails}>
                  <Text
                    style={[
                      styles.stepTitle,
                      { color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900 },
                    ]}
                  >
                    {step.title}
                  </Text>
                  <Text
                    style={[
                      styles.stepSubtitle,
                      { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700 },
                    ]}
                  >
                    {step.subtitle}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>

        {/* Timestamp */}
        <Text
          style={[
            styles.timestampText,
            { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700 },
          ]}
        >
          Last saved 10 Apr 2026 at 3:12 PM
        </Text>
      </ScrollView>

      {/* Actions */}
      <View style={styles.actionsContainer}>
        <Ux4gButton
          text="Continue from Step 3"
          onPress={onContinue}
          size="large"
          height={48}
          width="100%"
        />
        <View style={{ height: 12 }} />
        <Ux4gButton
          text="Start fresh"
          onPress={onStartFresh}
          variant="outline"
          size="large"
          height={48}
          width="100%"
          contentColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
          borderColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
        />
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <Text style={[styles.poweredByText, { color: isDark ? UX4GColors.neutral500 : '#9CA3AF' }]}>
          Powered by -
        </Text>
        <Image
          source={require('./assets/digital_india_logo.png')}
          style={[styles.digitalIndiaLogo, isDark && { tintColor: '#FFFFFF' }]}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  emblemIcon: {
    height: 40,
    width: 28,
  },
  verticalDivider: {
    height: 32,
    width: 1,
  },
  unionIcon: {
    height: 32,
    width: 44,
  },
  scrollPadding: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  headingText: {
    fontSize: 26,
    fontWeight: '800',
    lineHeight: 31,
  },
  subheadingText: {
    fontSize: 14,
    marginTop: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 20,
  },
  stepListContainer: {
    marginBottom: 20,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  indicatorCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    marginTop: 2,
  },
  checkmarkIcon: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  stepDetails: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
  stepSubtitle: {
    fontSize: 13,
    marginTop: 2,
  },
  timestampText: {
    fontSize: 13,
  },
  actionsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  footerContainer: {
    alignItems: 'center',
    paddingBottom: 24,
  },
  poweredByText: {
    fontSize: 11,
    marginBottom: 6,
  },
  digitalIndiaLogo: {
    height: 24,
    width: 90,
  },
});`;
  }, [isDark, variant]);

  const renderProgressStepList = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {STEPS.map((step, index) => {
          const isCompleted = step.status === 'completed';
          const isInProgress = step.status === 'inProgress';

          let circleBg = colors.notStartedBg;
          let circleBorder = `1.5px solid ${colors.notStartedBorder}`;

          if (isCompleted) {
            circleBg = colors.completedIconBg;
            circleBorder = `1.5px solid ${colors.completedBorder}`;
          } else if (isInProgress) {
            circleBg = colors.inProgressBg;
            circleBorder = `2px solid ${colors.inProgressBorder}`;
          }

          return (
            <div
              key={step.title}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: index < STEPS.length - 1 ? 20 : 0,
              }}
            >
              {/* Status Indicator */}
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  backgroundColor: circleBg,
                  border: circleBorder,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 14,
                  marginTop: 2,
                  flexShrink: 0,
                  boxSizing: 'border-box',
                }}
              >
                {isCompleted && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>

              {/* Step Text Details */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: colors.stepTitle,
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: colors.stepSubtitle,
                    marginTop: 2,
                    lineHeight: 1.3,
                  }}
                >
                  {step.subtitle}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderContentBody = () => {
    return (
      <div>
        {/* Title */}
        <div
          style={{
            fontSize: 26,
            fontWeight: 800,
            color: colors.titleColor,
            lineHeight: 1.2,
            whiteSpace: 'pre-line',
          }}
        >
          {'Continue your\napplication?'}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 14,
            color: colors.subtleText,
            marginTop: 8,
            marginBottom: 20,
            lineHeight: 1.4,
          }}
        >
          Income Certificate · Started 10 Apr 2026
        </div>

        {/* Section Title */}
        <div
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: colors.titleColor,
            marginBottom: 20,
          }}
        >
          Your progress
        </div>

        {/* Progress Step List */}
        {renderProgressStepList()}

        {/* Timestamp */}
        <div
          style={{
            fontSize: 13,
            color: colors.timestampColor,
            marginTop: 20,
            lineHeight: 1.3,
          }}
        >
          Last saved 10 Apr 2026 at 3:12 PM
        </div>
      </div>
    );
  };

  const renderLiveMockup = () => {
    const isCard = variant === 'Card style';

    return (
      <div
        style={{
          width: 360,
          height: 760,
          borderRadius: 20,
          boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)',
          overflow: 'hidden',
          backgroundColor: colors.screenBg,
          border: `1px solid ${colors.border}`,
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          position: 'relative',
        }}
      >
        {/* Top UX4G AppHeader */}
        <div style={{ backgroundColor: colors.headerBg, flexShrink: 0 }}>
          <div
            style={{
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img
                src="/national_emblem_logo.svg"
                alt="National Emblem"
                style={{
                  height: 38,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />
              <div
                style={{
                  width: 1,
                  height: 32,
                  backgroundColor: isDark ? UX4GColors.neutral700 : '#D1D5DB',
                }}
              />
              <UnionLogo size={32} isDark={isDark} />
            </div>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                border: `1px solid ${isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 20,
                  color: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
                }}
              >
                menu
              </span>
            </div>
          </div>
          <Ux4gDivider color={colors.border} thickness={1} />
        </div>

        {/* Scrollable Center Content */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              flex: 1,
              padding: isCard ? '32px 24px' : '32px 24px',
            }}
          >
            {isCard ? (
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: 24,
                  border: isDark ? `1px solid ${UX4GColors.neutral800}` : 'none',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
                }}
              >
                {renderContentBody()}
              </div>
            ) : (
              renderContentBody()
            )}
          </div>
        </div>

        {/* Fixed Bottom Action Buttons */}
        <div
          style={{
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            backgroundColor: isCard ? (isDark ? UX4GColors.primary900 : UX4GColors.primary100) : colors.screenBg,
            flexShrink: 0,
          }}
        >
          {/* Continue Button */}
          <Ux4gButton
            text="Continue from Step 3"
            onPress={() => {}}
            height={48}
            size="large"
            width="100%"
          />

          {/* Start Fresh Button */}
          <Ux4gButton
            text="Start fresh"
            variant="outline"
            onPress={() => {}}
            height={48}
            size="large"
            width="100%"
            contentColor={colors.startFreshColor}
            borderColor={colors.startFreshColor}
          />
        </div>

        {/* Powered by Footer */}
        <div
          style={{
            padding: '0 0 24px 0',
            textAlign: 'center',
            backgroundColor: isCard ? (isDark ? UX4GColors.primary900 : UX4GColors.primary100) : colors.screenBg,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 500,
              color: colors.footerText,
            }}
          >
            Powered by -
          </div>
          <img
            src="/Digital_India_logo.svg"
            alt="Digital India"
            style={{
              height: 24,
              marginTop: 6,
              filter: isDark ? 'brightness(0) invert(1)' : 'none',
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Continue Application</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A pattern showing the user's saved application progress with step-by-step status, allowing them to continue from where they left off or start fresh.
        </p>
      </div>

      {/* Main Body */}
      <div className="wb-body">
        <div className="wb-main">
          {/* Main Tabs */}
          <div className="wb-tab-bar">
            <button
              className={`wb-tab ${activeMainTab === 'preview' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('preview')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">visibility</span> Preview
            </button>
            <button
              className={`wb-tab ${activeMainTab === 'code' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('code')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">code</span> Code
            </button>
          </div>

          <div className="wb-content">
            {/* 1. Preview Tab */}
            {activeMainTab === 'preview' && (
              <Ux4gThemeProvider isDark={isDark}>
                <div
                  className={`wb-preview-area ${isDark ? 'dark' : ''}`}
                  style={{ flexDirection: 'column', alignItems: 'center' }}
                >
                  {/* Knob Controls Toolbar */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 16,
                      marginBottom: 24,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Variant Knob */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700,
                        }}
                      >
                        Layout Variant:
                      </span>
                      <div
                        style={{
                          display: 'flex',
                          gap: 4,
                          backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
                          padding: 4,
                          borderRadius: 10,
                          border: `1px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.neutral200}`,
                        }}
                      >
                        {(['Default', 'Card style'] as VariantType[]).map((v) => (
                          <button
                            key={v}
                            type="button"
                            onClick={() => setVariant(v)}
                            style={{
                              padding: '6px 14px',
                              borderRadius: 6,
                              border: 'none',
                              fontSize: 12,
                              fontWeight: 600,
                              cursor: 'pointer',
                              backgroundColor: variant === v ? UX4GColors.primary : 'transparent',
                              color:
                                variant === v
                                  ? UX4GColors.neutral0
                                  : isDark
                                  ? UX4GColors.neutral400
                                  : UX4GColors.neutral600,
                              transition: 'all 0.2s ease',
                            }}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Render Live Mobile Mockup */}
                  {renderLiveMockup()}
                </div>
              </Ux4gThemeProvider>
            )}

            {/* 2. Code Tab */}
            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                  <button
                    type="button"
                    onClick={() => setVariant('Default')}
                    className={`wb-tab ${variant === 'Default' ? 'active' : ''}`}
                    style={{ padding: '4px 12px', fontSize: 12 }}
                  >
                    Default
                  </button>
                  <button
                    type="button"
                    onClick={() => setVariant('Card style')}
                    className={`wb-tab ${variant === 'Card style' ? 'active' : ''}`}
                    style={{ padding: '4px 12px', fontSize: 12 }}
                  >
                    Card style
                  </button>
                </div>

                <CodeBlock code={codeString} language="tsx" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueApplicationDoc;
