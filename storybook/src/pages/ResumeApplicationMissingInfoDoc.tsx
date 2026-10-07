import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface ResumeApplicationMissingInfoDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

interface StepData {
  title: string;
  subtitle: string;
  status: 'completed' | 'warning' | 'notStarted';
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
    status: 'warning',
  },
  {
    title: 'Upload documents',
    subtitle: '1 required document missing',
    status: 'notStarted',
  },
  {
    title: 'Submit',
    subtitle: 'Not started',
    status: 'notStarted',
  },
];

export const ResumeApplicationMissingInfoDoc: React.FC<ResumeApplicationMissingInfoDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');

  const colors = useMemo(() => {
    const isCard = variant === 'Card style';
    return {
      screenBg: isCard
        ? (isDark ? UX4GColors.primary900 : '#ECE8FF')
        : (isDark ? UX4GColors.neutral900 : '#FFFFFF'),
      headerBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      cardBg: isDark ? UX4GColors.neutral800 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral800 : '#F0F0F2',
      titleColor: isDark ? UX4GColors.neutral0 : '#111827',
      subtleText: isDark ? UX4GColors.neutral400 : '#4B5563',
      sectionTitle: isDark ? UX4GColors.neutral0 : '#111827',
      stepTitle: isDark ? UX4GColors.neutral0 : '#111827',
      stepSubtitle: isDark ? UX4GColors.neutral400 : '#4B5563',
      timestampColor: isDark ? UX4GColors.neutral400 : '#4B5563',
      completedGreen: isDark ? '#1AA64A' : '#128937',
      warningOrange: isDark ? '#F59E0B' : '#EA580C',
      circleBorder: isDark ? UX4GColors.neutral600 : '#D1D5DB',
      primaryBtnBg: isDark ? UX4GColors.primary300 : '#432CBB',
      primaryBtnText: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      outlineBtnBorder: isDark ? UX4GColors.primary300 : '#432CBB',
      outlineBtnText: isDark ? UX4GColors.primary300 : '#432CBB',
      footerText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
    };
  }, [isDark, variant]);

  // Clean React Native TSX code snippet using UX4G components
  const codeString = useMemo(() => {
    const isCard = variant === 'Card style';
    if (isCard) {
      return `// Resume Application Missing Info Screen Pattern (Card Style Layout)

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
} from 'ux4g-react-native-components';

interface StepItem {
  title: string;
  subtitle: string;
  status: 'completed' | 'warning' | 'notStarted';
}

const STEPS: StepItem[] = [
  { title: 'Eligibility check', subtitle: 'Completed', status: 'completed' },
  { title: 'Personal information', subtitle: 'Completed', status: 'warning' },
  { title: 'Upload documents', subtitle: '1 required document missing', status: 'notStarted' },
  { title: 'Submit', subtitle: 'Not started', status: 'notStarted' },
];

export const ResumeApplicationMissingInfoCardScreen = ({
  isDark = ${isDark},
  onGoToIncomplete = () => {},
  onContinueBeginning = () => {},
}: {
  isDark?: boolean;
  onGoToIncomplete?: () => void;
  onContinueBeginning?: () => void;
}) => {
  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.primary900 : '#ECE8FF' },
      ]}
    >
      {/* Header Container */}
      <View style={{ backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' }}>
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
          color={isDark ? UX4GColors.neutral800 : '#F0F0F2'}
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
          backgroundColor={isDark ? UX4GColors.neutral800 : '#FFFFFF'}
          borderColor={isDark ? UX4GColors.neutral700 : 'rgba(0,0,0,0.04)'}
          borderWidth={1}
          elevation={2}
        >
          <View style={styles.cardInner}>
            {/* Title & Subtitle */}
            <Text
              style={[
                styles.headingText,
                { color: isDark ? UX4GColors.neutral0 : '#111827' },
              ]}
            >
              Continue your application?
            </Text>
            <Text
              style={[
                styles.subheadingText,
                { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
              ]}
            >
              Some sections have missing information
            </Text>

            {/* Section Title */}
            <Text
              style={[
                styles.sectionTitle,
                { color: isDark ? UX4GColors.neutral0 : '#111827' },
              ]}
            >
              Your progress
            </Text>

            {/* Step List */}
            <View style={styles.stepListContainer}>
              {STEPS.map((step, index) => {
                const isCompleted = step.status === 'completed';
                const isWarning = step.status === 'warning';

                return (
                  <View
                    key={step.title}
                    style={[
                      styles.stepRow,
                      index < STEPS.length - 1 && { marginBottom: 18 },
                    ]}
                  >
                    {/* Status Circle Indicator */}
                    <View
                      style={[
                        styles.indicatorCircle,
                        isCompleted && {
                          backgroundColor: isDark ? '#1AA64A' : '#128937',
                          borderColor: isDark ? '#1AA64A' : '#128937',
                        },
                        isWarning && {
                          backgroundColor: isDark ? '#F59E0B' : '#EA580C',
                          borderColor: isDark ? '#F59E0B' : '#EA580C',
                        },
                        step.status === 'notStarted' && {
                          backgroundColor: 'transparent',
                          borderColor: isDark ? UX4GColors.neutral600 : '#D1D5DB',
                        },
                      ]}
                    >
                      {isCompleted && <Text style={styles.iconText}>✓</Text>}
                      {isWarning && <Text style={styles.iconText}>!</Text>}
                    </View>

                    {/* Step Details */}
                    <View style={styles.stepDetails}>
                      <Text
                        style={[
                          styles.stepTitle,
                          { color: isDark ? UX4GColors.neutral0 : '#111827' },
                        ]}
                      >
                        {step.title}
                      </Text>
                      <Text
                        style={[
                          styles.stepSubtitle,
                          { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
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
                { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
              ]}
            >
              Last saved 10 Apr 2026 at 3:12 PM
            </Text>

            {/* Action Buttons inside Card */}
            <View style={styles.buttonGroup}>
              <Ux4gButton
                text="Go to incomplete section"
                onPress={onGoToIncomplete}
                size="large"
                height={46}
                width="100%"
              />
              <View style={{ height: 12 }} />
              <Ux4gButton
                text="Continue from beginning"
                onPress={onContinueBeginning}
                variant="outline"
                size="large"
                height={46}
                width="100%"
                contentColor={isDark ? UX4GColors.primary300 : '#432CBB'}
                borderColor={isDark ? UX4GColors.primary300 : '#432CBB'}
              />
            </View>
          </View>
        </Ux4gCard>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text style={[styles.poweredByText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            Powered by -
          </Text>
          <Image
            source={require('./assets/digital_india_logo.png')}
            style={[styles.digitalIndiaLogo, isDark && { tintColor: '#FFFFFF' }]}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  emblemIcon: {
    height: 36,
    width: 28,
  },
  unionIcon: {
    height: 30,
    width: 40,
    marginLeft: 8,
  },
  cardScrollPadding: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  cardInner: {
    padding: 20,
  },
  headingText: {
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 28,
  },
  subheadingText: {
    fontSize: 14,
    marginTop: 6,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 18,
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
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  iconText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  stepDetails: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  stepSubtitle: {
    fontSize: 12,
    marginTop: 2,
  },
  timestampText: {
    fontSize: 13,
    marginBottom: 20,
  },
  buttonGroup: {
    width: '100%',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 20,
    paddingBottom: 16,
  },
  poweredByText: {
    fontSize: 11,
    fontWeight: '500',
  },
  digitalIndiaLogo: {
    height: 22,
    width: 80,
  },
});`;
    }

    return `// Resume Application Missing Info Screen Pattern (Default Layout)

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
} from 'ux4g-react-native-components';

interface StepItem {
  title: string;
  subtitle: string;
  status: 'completed' | 'warning' | 'notStarted';
}

const STEPS: StepItem[] = [
  { title: 'Eligibility check', subtitle: 'Completed', status: 'completed' },
  { title: 'Personal information', subtitle: 'Completed', status: 'warning' },
  { title: 'Upload documents', subtitle: '1 required document missing', status: 'notStarted' },
  { title: 'Submit', subtitle: 'Not started', status: 'notStarted' },
];

export const ResumeApplicationMissingInfoScreen = ({
  isDark = ${isDark},
  onGoToIncomplete = () => {},
  onContinueBeginning = () => {},
}: {
  isDark?: boolean;
  onGoToIncomplete?: () => void;
  onContinueBeginning?: () => void;
}) => {
  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' },
      ]}
    >
      {/* Header with UX4G AppHeader & Ux4gDivider */}
      <Ux4gAppHeader
        variant="light"
        showBackButton={false}
        backgroundColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
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
        color={isDark ? UX4GColors.neutral800 : '#F0F0F2'}
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
            { color: isDark ? UX4GColors.neutral0 : '#111827' },
          ]}
        >
          Continue your application?
        </Text>
        <Text
          style={[
            styles.subheadingText,
            { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
          ]}
        >
          Some sections have missing information
        </Text>

        {/* Section Title */}
        <Text
          style={[
            styles.sectionTitle,
            { color: isDark ? UX4GColors.neutral0 : '#111827' },
          ]}
        >
          Your progress
        </Text>

        {/* Step List */}
        <View style={styles.stepListContainer}>
          {STEPS.map((step, index) => {
            const isCompleted = step.status === 'completed';
            const isWarning = step.status === 'warning';

            return (
              <View
                key={step.title}
                style={[
                  styles.stepRow,
                  index < STEPS.length - 1 && { marginBottom: 18 },
                ]}
              >
                {/* Status Circle Indicator */}
                <View
                  style={[
                    styles.indicatorCircle,
                    isCompleted && {
                      backgroundColor: isDark ? '#1AA64A' : '#128937',
                      borderColor: isDark ? '#1AA64A' : '#128937',
                    },
                    isWarning && {
                      backgroundColor: isDark ? '#F59E0B' : '#EA580C',
                      borderColor: isDark ? '#F59E0B' : '#EA580C',
                    },
                    step.status === 'notStarted' && {
                      backgroundColor: 'transparent',
                      borderColor: isDark ? UX4GColors.neutral600 : '#D1D5DB',
                    },
                  ]}
                >
                  {isCompleted && <Text style={styles.iconText}>✓</Text>}
                  {isWarning && <Text style={styles.iconText}>!</Text>}
                </View>

                {/* Step Details */}
                <View style={styles.stepDetails}>
                  <Text
                    style={[
                      styles.stepTitle,
                      { color: isDark ? UX4GColors.neutral0 : '#111827' },
                    ]}
                  >
                    {step.title}
                  </Text>
                  <Text
                    style={[
                      styles.stepSubtitle,
                      { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
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
            { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
          ]}
        >
          Last saved 10 Apr 2026 at 3:12 PM
        </Text>

        {/* Actions */}
        <View style={styles.buttonGroup}>
          <Ux4gButton
            text="Go to incomplete section"
            onPress={onGoToIncomplete}
            size="large"
            height={46}
            width="100%"
          />
          <View style={{ height: 12 }} />
          <Ux4gButton
            text="Continue from beginning"
            onPress={onContinueBeginning}
            variant="outline"
            size="large"
            height={46}
            width="100%"
            contentColor={isDark ? UX4GColors.primary300 : '#432CBB'}
            borderColor={isDark ? UX4GColors.primary300 : '#432CBB'}
          />
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text style={[styles.poweredByText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            Powered by -
          </Text>
          <Image
            source={require('./assets/digital_india_logo.png')}
            style={[styles.digitalIndiaLogo, isDark && { tintColor: '#FFFFFF' }]}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  emblemIcon: {
    height: 36,
    width: 28,
  },
  unionIcon: {
    height: 30,
    width: 40,
    marginLeft: 8,
  },
  scrollPadding: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headingText: {
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 28,
  },
  subheadingText: {
    fontSize: 14,
    marginTop: 6,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 18,
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
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  iconText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  stepDetails: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  stepSubtitle: {
    fontSize: 12,
    marginTop: 2,
  },
  timestampText: {
    fontSize: 13,
    marginBottom: 20,
  },
  buttonGroup: {
    width: '100%',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 24,
    paddingBottom: 16,
  },
  poweredByText: {
    fontSize: 11,
    fontWeight: '500',
  },
  digitalIndiaLogo: {
    height: 22,
    width: 80,
  },
});`;
  }, [isDark, variant]);

  const renderInnerContent = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Title */}
        <h2
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: colors.titleColor,
            margin: '0 0 6px 0',
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
          }}
        >
          Continue your application?
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 14,
            color: colors.subtleText,
            margin: '0 0 20px 0',
            lineHeight: 1.4,
            fontWeight: 400,
          }}
        >
          Some sections have missing information
        </p>

        {/* Section Title */}
        <div
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: colors.sectionTitle,
            marginBottom: 18,
          }}
        >
          Your progress
        </div>

        {/* Progress Step List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 20 }}>
          {STEPS.map((step) => {
            const isCompleted = step.status === 'completed';
            const isWarning = step.status === 'warning';

            return (
              <div
                key={step.title}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                }}
              >
                {/* Status Indicator */}
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    backgroundColor: isCompleted
                      ? colors.completedGreen
                      : isWarning
                        ? colors.warningOrange
                        : 'transparent',
                    border: `1.5px solid ${isCompleted
                      ? colors.completedGreen
                      : isWarning
                        ? colors.warningOrange
                        : colors.circleBorder
                      }`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: 2,
                    boxSizing: 'border-box',
                  }}
                >
                  {isCompleted && (
                    <span
                      style={{
                        color: '#FFFFFF',
                        fontSize: 11,
                        fontWeight: 700,
                        userSelect: 'none',
                        lineHeight: 1,
                      }}
                    >
                      ✓
                    </span>
                  )}
                  {isWarning && (
                    <span
                      style={{
                        color: '#FFFFFF',
                        fontSize: 12,
                        fontWeight: 800,
                        userSelect: 'none',
                        lineHeight: 1,
                      }}
                    >
                      !
                    </span>
                  )}
                </div>

                {/* Step Text Details */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: colors.stepTitle,
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
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

        {/* Timestamp */}
        <div
          style={{
            fontSize: 13,
            color: colors.timestampColor,
            marginBottom: 22,
            lineHeight: 1.3,
          }}
        >
          Last saved 10 Apr 2026 at 3:12 PM
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {/* Go to incomplete section Button */}
          <button
            type="button"
            onClick={() => alert('Navigating to incomplete section...')}
            style={{
              width: '100%',
              height: 44,
              backgroundColor: colors.primaryBtnBg,
              color: colors.primaryBtnText,
              border: 'none',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.2s ease',
            }}
          >
            Go to incomplete section
          </button>

          {/* Continue from beginning Button */}
          <button
            type="button"
            onClick={() => alert('Continuing from beginning...')}
            style={{
              width: '100%',
              height: 44,
              backgroundColor: 'transparent',
              color: colors.outlineBtnText,
              border: `1.5px solid ${colors.outlineBtnBorder}`,
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.2s ease',
            }}
          >
            Continue from beginning
          </button>
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
          minHeight: 680,
          maxHeight: 760,
          borderRadius: 24,
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
          backgroundColor: colors.screenBg,
          border: `1px solid ${isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}`,
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
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
                  height: 36,
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
                border: `1.5px solid ${isDark ? UX4GColors.primary300 : '#C7D2FE'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 20,
                  color: isDark ? UX4GColors.primary300 : '#432CBB',
                }}
              >
                menu
              </span>
            </div>
          </div>
          <div style={{ height: 1, backgroundColor: isDark ? UX4GColors.neutral800 : '#F0F0F2' }} />
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
              padding: isCard ? '16px 14px' : '20px 18px',
            }}
          >
            {isCard ? (
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: '22px 18px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                  border: `1px solid ${isDark ? UX4GColors.neutral700 : 'rgba(0,0,0,0.03)'}`,
                }}
              >
                {renderInnerContent()}
              </div>
            ) : (
              renderInnerContent()
            )}
          </div>

          {/* Powered by Footer */}
          <div
            style={{
              padding: '10px 0 20px 0',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: colors.footerText,
              }}
            >
              Powered by -
            </span>
            <img
              src="/Digital_India_logo.svg"
              alt="Digital India"
              style={{
                height: 22,
                filter: isDark ? 'brightness(0) invert(1)' : 'none',
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Resume Application Missing Info</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A pattern showing the user's saved application progress with missing information highlights, allowing them to jump directly to incomplete sections or continue from the beginning.
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
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 16,
                    marginBottom: 16,
                    padding: '12px 16px',
                    backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
                    borderRadius: 8,
                    alignItems: 'center',
                    border: `1px solid ${isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}`,
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 600, color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }}>
                    Active Variant: <span style={{ color: UX4GColors.primary }}>{variant}</span>
                  </span>
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

export default ResumeApplicationMissingInfoDoc;
