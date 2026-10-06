import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
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
    title: 'Submit',
    subtitle: 'Not started',
    status: 'notStarted',
  },
];

export const ContinueApplicationDoc: React.FC<ContinueApplicationDocProps> = ({ isDark }) => {
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
      timestampColor: isDark ? UX4GColors.neutral400 : '#6B7280',
      completedGreen: isDark ? '#1AA64A' : '#128937',
      circleBorder: isDark ? UX4GColors.neutral600 : '#D1D5DB',
      primaryBtnBg: isDark ? UX4GColors.primary300 : '#432CBB',
      primaryBtnText: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      outlineBtnBorder: isDark ? UX4GColors.primary300 : '#432CBB',
      outlineBtnText: isDark ? UX4GColors.primary300 : '#432CBB',
      footerText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
    };
  }, [isDark, variant]);

  const codeString = useMemo(() => {
    const isCard = variant === 'Card style';
    return `import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';

interface StepItem {
  title: string;
  subtitle: string;
  status: 'completed' | 'inProgress' | 'notStarted';
}

const STEPS: StepItem[] = [
  { title: 'Eligibility check', subtitle: 'Completed', status: 'completed' },
  { title: 'Personal information', subtitle: 'Completed', status: 'completed' },
  { title: 'Upload documents', subtitle: 'In progress · 1 of 4 uploaded', status: 'inProgress' },
  { title: 'Submit', subtitle: 'Not started', status: 'notStarted' },
];

export const ContinueApplicationPattern = ({
  isDark = ${isDark},
  variant = '${variant}',
  onContinue = () => {},
  onStartFresh = () => {},
}: {
  isDark?: boolean;
  variant?: 'Default' | 'Card style';
  onContinue?: () => void;
  onStartFresh?: () => void;
}) => {
  const isCard = variant === 'Card style';

  const renderContent = () => (
    <View>
      {/* Title */}
      <Text style={[styles.mainTitle, { color: isDark ? UX4GColors.neutral0 : '#111827' }]}>
        Continue your application?
      </Text>
      <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : '#4B5563' }]}>
        Income Certificate · Started 10 Apr 2026
      </Text>

      {/* Progress Section Heading */}
      <Text style={[styles.sectionHeading, { color: isDark ? UX4GColors.neutral0 : '#111827' }]}>
        Your progress
      </Text>

      {/* Steps List */}
      <View style={styles.stepList}>
        {STEPS.map((step, index) => {
          const isCompleted = step.status === 'completed';
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
                  isCompleted
                    ? { backgroundColor: isDark ? '#1AA64A' : '#128937', borderColor: isDark ? '#1AA64A' : '#128937' }
                    : { backgroundColor: 'transparent', borderColor: isDark ? UX4GColors.neutral600 : '#D1D5DB' },
                ]}
              >
                {isCompleted && <Text style={styles.checkmarkIcon}>✓</Text>}
              </View>

              {/* Step Info */}
              <View style={styles.stepInfo}>
                <Text style={[styles.stepTitle, { color: isDark ? UX4GColors.neutral0 : '#111827' }]}>
                  {step.title}
                </Text>
                <Text style={[styles.stepSubtitle, { color: isDark ? UX4GColors.neutral400 : '#4B5563' }]}>
                  {step.subtitle}
                </Text>
              </View>
            </View>
          );
        })}
      </View>

      {/* Timestamp */}
      <Text style={[styles.timestamp, { color: isDark ? UX4GColors.neutral400 : '#6B7280' }]}>
        Last saved 10 Apr 2026 at 3:12 PM
      </Text>

      {/* Action Buttons */}
      <View style={styles.buttonGroup}>
        <Ux4gButton
          text="Continue from Step 3"
          variant="filled"
          onPress={onContinue}
          size="large"
          style={{
            width: '100%',
            height: 46,
            backgroundColor: isDark ? UX4GColors.primary300 : '#432CBB',
          }}
          contentColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
        />

        <Ux4gButton
          text="Start fresh"
          variant="outline"
          onPress={onStartFresh}
          size="large"
          style={{
            width: '100%',
            height: 46,
            borderColor: isDark ? UX4GColors.primary300 : '#432CBB',
            marginTop: 10,
          }}
          contentColor={isDark ? UX4GColors.primary300 : '#432CBB'}
        />
      </View>
    </View>
  );

  return (
    <View style={[styles.screen, { backgroundColor: isDark ? UX4GColors.neutral900 : (isCard ? '#ECE8FF' : '#FFFFFF') }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF', borderBottomColor: isDark ? UX4GColors.neutral800 : '#F0F0F2' }]}>
        <View style={styles.headerLeft}>
          <Image source={{ uri: '/national_emblem_logo.svg' }} style={styles.emblemLogo} resizeMode="contain" />
          <View style={[styles.headerDivider, { backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300 }]} />
          <Image source={{ uri: '/Union.svg' }} style={styles.unionLogo} resizeMode="contain" />
        </View>
        <TouchableOpacity style={[styles.menuBtn, { borderColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200 }]}>
          <Text style={[styles.menuIcon, { color: isDark ? UX4GColors.primary300 : UX4GColors.primary }]}>☰</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {isCard ? (
          <View style={[styles.cardContainer, { backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF' }]}>
            {renderContent()}
          </View>
        ) : (
          <View style={styles.flatContainer}>
            {renderContent()}
          </View>
        )}

        {/* Brand Footer */}
        <View style={styles.footer}>
          <Text style={[styles.poweredByText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            Powered by -
          </Text>
          <Image source={{ uri: '/Digital_India_logo.svg' }} style={styles.digitalIndiaLogo} resizeMode="contain" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  emblemLogo: { height: 32, width: 24 },
  headerDivider: { width: 1, height: 26 },
  unionLogo: { height: 32, width: 44 },
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: { fontSize: 18 },
  scrollContainer: { paddingVertical: 16 },
  flatContainer: { paddingHorizontal: 16 },
  cardContainer: {
    marginHorizontal: 14,
    padding: 18,
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 4 },
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 26,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    marginBottom: 16,
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 16,
  },
  stepList: {
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
  checkmarkIcon: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  stepInfo: {
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
  timestamp: {
    fontSize: 12,
    marginBottom: 20,
  },
  buttonGroup: {
    width: '100%',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginVertical: 18,
  },
  poweredByText: { fontSize: 11, fontWeight: '500' },
  digitalIndiaLogo: { height: 22, width: 80 },
});
`;
  }, [isDark, variant]);

  const renderInnerContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Main Title */}
      <h2
        style={{
          fontSize: 20,
          fontWeight: 800,
          color: colors.titleColor,
          margin: '0 0 6px 0',
          letterSpacing: '-0.01em',
          lineHeight: 1.3,
        }}
      >
        Continue your application?
      </h2>

      {/* Subtitle */}
      <p
        style={{
          fontSize: 13,
          color: colors.subtleText,
          margin: '0 0 18px 0',
          lineHeight: 1.4,
          fontWeight: 400,
        }}
      >
        Income Certificate · Started 10 Apr 2026
      </p>

      {/* Section Title */}
      <div
        style={{
          fontSize: 14,
          fontWeight: 700,
          color: colors.sectionTitle,
          marginBottom: 16,
        }}
      >
        Your progress
      </div>

      {/* Step List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 22 }}>
        {STEPS.map((step) => {
          const isCompleted = step.status === 'completed';

          return (
            <div
              key={step.title}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
              }}
            >
              {/* Circle Indicator */}
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  backgroundColor: isCompleted ? colors.completedGreen : 'transparent',
                  border: `1.5px solid ${isCompleted ? colors.completedGreen : colors.circleBorder}`,
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
                    }}
                  >
                    ✓
                  </span>
                )}
              </div>

              {/* Step Info */}
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
          fontSize: 12,
          color: colors.timestampColor,
          marginBottom: 20,
        }}
      >
        Last saved 10 Apr 2026 at 3:12 PM
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {/* Continue Button */}
        <button
          type="button"
          onClick={() => alert('Continuing application from Step 3...')}
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
          Continue from Step 3
        </button>

        {/* Start Fresh Button */}
        <button
          type="button"
          onClick={() => alert('Starting a fresh application...')}
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
          Start fresh
        </button>
      </div>
    </div>
  );

  const renderLiveMockup = () => {
    return (
      <div
        style={{
          width: 360,
          height: 760,
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
        {/* Header */}
        <div style={{ backgroundColor: colors.headerBg }}>
          <div
            style={{
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <img
                src="/national_emblem_logo.svg"
                alt="National Emblem"
                style={{
                  height: 32,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />
              <div
                style={{
                  width: 1,
                  height: 28,
                  backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
                }}
              />
              <UnionLogo size={32} isDark={isDark} />
            </div>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                border: `1px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.neutral200}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 20,
                  color: isDark ? UX4GColors.primary300 : UX4GColors.primary,
                }}
              >
                menu
              </span>
            </div>
          </div>
          <div style={{ height: 1, backgroundColor: isDark ? UX4GColors.neutral800 : '#F0F0F2' }} />
        </div>

        {/* Scrollable Container */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, padding: variant === 'Card style' ? '14px 14px' : '20px 16px' }}>
            {variant === 'Card style' ? (
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: '20px 18px',
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

          {/* Brand Footer */}
          <div
            style={{
              padding: '8px 0 18px 0',
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
          <h1 className="wb-title">Continue Application</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Pattern showing user's saved application progress with step-by-step status, allowing them to resume directly from the last active step or start fresh.
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

export default ContinueApplicationDoc;
