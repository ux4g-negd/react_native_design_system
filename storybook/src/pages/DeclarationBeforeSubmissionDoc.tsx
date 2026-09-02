import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gCheckbox } from '../../../src/components/checkbox/Checkbox';
import { CodeBlock } from '../components/CodeBlock';

interface DeclarationBeforeSubmissionDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

export const DeclarationBeforeSubmissionDoc: React.FC<DeclarationBeforeSubmissionDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');
  const [agreed, setAgreed] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reset scroll and agreement when switching variants or tab
  useEffect(() => {
    setReachedEnd(false);
    setAgreed(false);
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [variant]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (target.scrollTop + target.clientHeight >= target.scrollHeight - 12) {
      if (!reachedEnd) {
        setReachedEnd(true);
      }
    }
  };

  const colors = useMemo(() => {
    return {
      screenBg: variant === 'Card style'
        ? (isDark ? UX4GColors.primary900 : UX4GColors.primary100)
        : (isDark ? UX4GColors.gray900 : UX4GColors.gray100),
      cardBg: isDark ? UX4GColors.gray800 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.gray900,
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
      declarationBoxBg: isDark ? UX4GColors.gray900 : UX4GColors.gray100,
      declarationBoxBorder: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      declarationText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral700,
      primaryText: isDark ? UX4GColors.primary400 : UX4GColors.primary600,
      warningBg: isDark ? UX4GColors.orange900 : UX4GColors.orange50,
      warningBorder: isDark ? UX4GColors.orange800 : UX4GColors.orange100,
      warningIcon: isDark ? UX4GColors.orange400 : UX4GColors.orange600,
      warningText: isDark ? UX4GColors.orange300 : UX4GColors.orange800,
      requiredStar: isDark ? UX4GColors.red400 : UX4GColors.red700,
      footerText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
    };
  }, [isDark, variant]);

  const codeString = useMemo(() => {
    const isCard = variant === 'Card style';
    if (isCard) {
      return `// Declaration – Card Style Layout
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gCheckbox,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const DeclarationCardPattern = ({
  isDark = ${isDark},
}: {
  isDark?: boolean;
}) => {
  const [agreed, setAgreed] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const paddingToBottom = 10;
    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom) {
      if (!reachedEnd) {
        setReachedEnd(true);
      }
    }
  };

  return (
    <View style={[styles.screen, { backgroundColor: isDark ? UX4GColors.primary900 : UX4GColors.primary100 }]}>
      {/* Header */}
      <Ux4gAppHeader
        variant="light"
        showBackButton={false}
      />

      <ScrollView contentContainerStyle={styles.cardScrollContainer}>
        <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.gray800 : '#FFFFFF' }]}>
          <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
            Declaration
          </Text>
          <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 }]}>
            Read the declaration in full. Scroll to the end before you can agree.
          </Text>

          {/* Declaration Box */}
          <View style={[styles.declarationBox, { backgroundColor: isDark ? UX4GColors.gray900 : UX4GColors.gray100, borderColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200 }]}>
            <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
              <Text style={[styles.declarationText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral700 }]}>
                I, the applicant, do hereby solemnly declare and affirm that:{\n\n}
                1. All information furnished in this application is true, complete and correct to the best of my knowledge and belief.{\n\n}
                2. I have not concealed, suppressed or misrepresented any material fact.{\n\n}
                3. I am aware that any false information or suppression of material facts will lead to rejection of my application or termination of service if already granted.{\n\n}
                4. I undertake to inform the department immediately of any changes in the information provided in this application.{\n\n}
                5. I understand that the data provided by me will be used for the purpose of processing this application and related government services.
              </Text>
            </ScrollView>
            {!reachedEnd && (
              <View style={[styles.scrollHintOverlay, { backgroundColor: isDark ? UX4GColors.gray900 : UX4GColors.gray100 }]}>
                <Text style={[styles.scrollHintText, { color: isDark ? UX4GColors.primary400 : UX4GColors.primary600 }]}>
                  Scroll to read all
                </Text>
              </View>
            )}
          </View>

          {/* Agreement Checkbox */}
          <View style={styles.checkboxRow}>
            <Ux4gCheckbox
              value={agreed}
              onChanged={(val) => reachedEnd && setAgreed(val ?? false)}
              disabled={!reachedEnd}
            />
            <Text style={[styles.checkboxLabel, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
              I have read and agree to the above declaration.
              <Text style={{ color: isDark ? UX4GColors.red400 : UX4GColors.red700 }}> *</Text>
            </Text>
          </View>

          {/* Warning Banner */}
          <View style={[styles.warningBox, { backgroundColor: isDark ? UX4GColors.orange900 : UX4GColors.orange50, borderColor: isDark ? UX4GColors.orange800 : UX4GColors.orange100 }]}>
            <Text style={[styles.warningIcon, { color: isDark ? UX4GColors.orange400 : UX4GColors.orange600 }]}>⚠️</Text>
            <Text style={[styles.warningText, { color: isDark ? UX4GColors.orange300 : UX4GColors.orange800 }]}>
              Furnishing false information is a punishable offence under Section 193 IPC — up to 7 years imprisonment.
            </Text>
          </View>

          {/* Submit Button */}
          <Ux4gButton
            text="Submit application"
            enabled={agreed}
            onPress={() => {}}
            height={48}
            size="large"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  cardScrollContainer: { padding: 16 },
  card: { padding: 20, borderRadius: 16, elevation: 2 },
  title: { fontSize: 24, fontWeight: '800', letterSpacing: -0.5, marginBottom: 12 },
  subtitle: { fontSize: 14, lineHeight: 21, marginBottom: 24 },
  declarationBox: { height: 200, padding: 16, borderRadius: 12, borderWidth: 1, marginBottom: 24, position: 'relative' },
  declarationText: { fontSize: 14, lineHeight: 22, fontWeight: '500' },
  scrollHintOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, paddingVertical: 8, alignItems: 'center' },
  scrollHintText: { fontSize: 13, fontWeight: '700' },
  checkboxRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 24, gap: 12 },
  checkboxLabel: { flex: 1, fontSize: 16, fontWeight: '600', lineHeight: 22 },
  warningBox: { padding: 16, borderRadius: 8, borderWidth: 1, flexDirection: 'row', gap: 12, marginBottom: 32 },
  warningIcon: { fontSize: 18 },
  warningText: { flex: 1, fontSize: 14, lineHeight: 21, fontWeight: '500' },
});`;
    }

    return `// Declaration Before Submission Screen Pattern
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gCheckbox,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const DeclarationBeforeSubmissionPattern = ({
  isDark = ${isDark},
}: {
  isDark?: boolean;
}) => {
  const [agreed, setAgreed] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const paddingToBottom = 10;
    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom) {
      if (!reachedEnd) {
        setReachedEnd(true);
      }
    }
  };

  return (
    <View style={[styles.screen, { backgroundColor: isDark ? UX4GColors.gray900 : UX4GColors.gray100 }]}>
      {/* Header */}
      <Ux4gAppHeader
        variant="light"
        showBackButton={false}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
          Declaration
        </Text>
        <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 }]}>
          Read the declaration in full. Scroll to the end before you can agree.
        </Text>

        {/* Declaration Box */}
        <View style={[styles.declarationBox, { backgroundColor: isDark ? UX4GColors.gray900 : UX4GColors.gray100, borderColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200 }]}>
          <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
            <Text style={[styles.declarationText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral700 }]}>
              I, the applicant, do hereby solemnly declare and affirm that:{\n\n}
              1. All information furnished in this application is true, complete and correct to the best of my knowledge and belief.{\n\n}
              2. I have not concealed, suppressed or misrepresented any material fact.{\n\n}
              3. I am aware that any false information or suppression of material facts will lead to rejection of my application or termination of service if already granted.{\n\n}
              4. I undertake to inform the department immediately of any changes in the information provided in this application.{\n\n}
              5. I understand that the data provided by me will be used for the purpose of processing this application and related government services.
            </Text>
          </ScrollView>
          {!reachedEnd && (
            <View style={[styles.scrollHintOverlay, { backgroundColor: isDark ? UX4GColors.gray900 : UX4GColors.gray100 }]}>
              <Text style={[styles.scrollHintText, { color: isDark ? UX4GColors.primary400 : UX4GColors.primary600 }]}>
                Scroll to read all
              </Text>
            </View>
          )}
        </View>

        {/* Agreement Checkbox */}
        <View style={styles.checkboxRow}>
          <Ux4gCheckbox
            value={agreed}
            onChanged={(val) => reachedEnd && setAgreed(val ?? false)}
            disabled={!reachedEnd}
          />
          <Text style={[styles.checkboxLabel, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
            I have read and agree to the above declaration.
            <Text style={{ color: isDark ? UX4GColors.red400 : UX4GColors.red700 }}> *</Text>
          </Text>
        </View>

        {/* Warning Banner */}
        <View style={[styles.warningBox, { backgroundColor: isDark ? UX4GColors.orange900 : UX4GColors.orange50, borderColor: isDark ? UX4GColors.orange800 : UX4GColors.orange100 }]}>
          <Text style={[styles.warningIcon, { color: isDark ? UX4GColors.orange400 : UX4GColors.orange600 }]}>⚠️</Text>
          <Text style={[styles.warningText, { color: isDark ? UX4GColors.orange300 : UX4GColors.orange800 }]}>
            Furnishing false information is a punishable offence under Section 193 IPC — up to 7 years imprisonment.
          </Text>
        </View>

        {/* Submit Button */}
        <Ux4gButton
          text="Submit application"
          enabled={agreed}
          onPress={() => {}}
          height={48}
          size="large"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  scrollContainer: { padding: 20 },
  title: { fontSize: 24, fontWeight: '800', letterSpacing: -0.5, marginBottom: 12 },
  subtitle: { fontSize: 14, lineHeight: 21, marginBottom: 24 },
  declarationBox: { height: 220, padding: 16, borderRadius: 12, borderWidth: 1, marginBottom: 24, position: 'relative' },
  declarationText: { fontSize: 14, lineHeight: 22, fontWeight: '500' },
  scrollHintOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, paddingVertical: 8, alignItems: 'center' },
  scrollHintText: { fontSize: 13, fontWeight: '700' },
  checkboxRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 24, gap: 12 },
  checkboxLabel: { flex: 1, fontSize: 16, fontWeight: '600', lineHeight: 22 },
  warningBox: { padding: 16, borderRadius: 8, borderWidth: 1, flexDirection: 'row', gap: 12, marginBottom: 32 },
  warningIcon: { fontSize: 18 },
  warningText: { flex: 1, fontSize: 14, lineHeight: 21, fontWeight: '500' },
});`;
  }, [isDark, variant]);

  const renderInnerContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Title */}
      <h2
        style={{
          fontSize: 24,
          fontWeight: 800,
          color: colors.titleColor,
          margin: 0,
          letterSpacing: '-0.5px',
          lineHeight: 1.2,
        }}
      >
        Declaration
      </h2>

      {/* Subtitle */}
      <p
        style={{
          fontSize: 14,
          color: colors.subtleText,
          margin: '12px 0 24px 0',
          lineHeight: 1.5,
          fontWeight: 400,
        }}
      >
        Read the declaration in full. Scroll to the end before you can agree.
      </p>

      {/* Declaration Scroll Box */}
      <div
        style={{
          height: variant === 'Card style' ? 200 : 220,
          backgroundColor: colors.declarationBoxBg,
          borderRadius: 12,
          border: `1px solid ${colors.declarationBoxBorder}`,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          marginBottom: 24,
        }}
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            paddingRight: '12px',
          }}
        >
          <div
            style={{
              fontSize: 14,
              color: colors.declarationText,
              lineHeight: 1.6,
              fontWeight: 500,
              whiteSpace: 'pre-line',
            }}
          >
            {'I, the applicant, do hereby solemnly declare and affirm that:\n\n' +
              '1. All information furnished in this application is true, complete and correct to the best of my knowledge and belief.\n\n' +
              '2. I have not concealed, suppressed or misrepresented any material fact.\n\n' +
              '3. I am aware that any false information or suppression of material facts will lead to rejection of my application or termination of service if already granted.\n\n' +
              '4. I undertake to inform the department immediately of any changes in the information provided in this application.\n\n' +
              '5. I understand that the data provided by me will be used for the purpose of processing this application and related government services.'}
          </div>
        </div>

        {/* Scroll To Read All Overlay */}
        {!reachedEnd && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '8px 0',
              background: `linear-gradient(to bottom, rgba(${isDark ? '18,18,18' : '245,245,245'}, 0) 0%, ${
                isDark ? UX4GColors.gray900 : UX4GColors.gray100
              } 100%)`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              pointerEvents: 'none',
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: colors.primaryText,
              }}
            >
              Scroll to read all
            </span>
          </div>
        )}
      </div>

      {/* Agreement Checkbox Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 12,
          marginBottom: 24,
          opacity: reachedEnd ? 1 : 0.6,
          cursor: reachedEnd ? 'pointer' : 'not-allowed',
        }}
        onClick={() => {
          if (reachedEnd) {
            setAgreed(!agreed);
          }
        }}
      >
        <div style={{ marginTop: 2 }}>
          <Ux4gCheckbox
            value={agreed}
            onChanged={(val) => {
              if (reachedEnd) {
                setAgreed(val ?? false);
              }
            }}
            disabled={!reachedEnd}
          />
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: colors.titleColor,
            lineHeight: 1.4,
            userSelect: 'none',
          }}
        >
          I have read and agree to the above declaration.
          <span style={{ color: colors.requiredStar, fontWeight: 'bold' }}> *</span>
        </div>
      </div>

      {/* Warning Notice Banner */}
      <div
        style={{
          padding: 16,
          backgroundColor: colors.warningBg,
          borderRadius: 8,
          border: `1px solid ${colors.warningBorder}`,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 12,
          marginBottom: 32,
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: 18,
            fontVariationSettings: "'FILL' 1",
            color: colors.warningIcon,
            marginTop: 2,
            flexShrink: 0,
          }}
        >
          error
        </span>
        <span
          style={{
            fontSize: 14,
            color: colors.warningText,
            lineHeight: 1.5,
            fontWeight: 500,
          }}
        >
          Furnishing false information is a punishable offence under Section 193 IPC — up to 7 years imprisonment.
        </span>
      </div>

      {/* Submit Button */}
      <Ux4gButton
        text="Submit application"
        enabled={agreed}
        onPress={() => {}}
        height={48}
        size="large"
        width="100%"
      />
    </div>
  );

  const renderLiveMockup = () => {
    return (
      <div
        style={{
          width: 360,
          height: 760,
          borderRadius: 20,
          boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)',
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
        {/* Consent Header */}
        <div style={{ backgroundColor: isDark ? UX4GColors.gray900 : '#FFFFFF' }}>
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
                  backgroundColor: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300,
                }}
              />
              <img
                src="/Union.svg"
                alt="Union Logo"
                style={{
                  height: 32,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />
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
          <div style={{ height: 1, backgroundColor: colors.border }} />
        </div>

        {/* Scrollable Container */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, padding: variant === 'Card style' ? 16 : 20 }}>
            {variant === 'Card style' ? (
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: 20,
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                }}
              >
                {renderInnerContent()}
              </div>
            ) : (
              renderInnerContent()
            )}
          </div>

          {/* Brand Footer */}
          <div style={{ padding: '8px 0 20px 0', textAlign: 'center', backgroundColor: colors.screenBg, flexShrink: 0 }}>
            <div style={{ fontSize: 11, fontWeight: 500, color: colors.footerText }}>
              Powered by -
            </div>
            <img
              src="/Digital_India_logo.svg"
              alt="Digital India"
              style={{
                height: 22,
                marginTop: 6,
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
          <h1 className="wb-title">Declaration Before Submission</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A screen pattern for a formal declaration before application submission. Features a scrollable declaration box that must be read before agreeing. Use the [Variant] knob on the right to toggle layouts.
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
                <div className={`wb-preview-area ${isDark ? 'dark' : ''}`} style={{ flexDirection: 'column', alignItems: 'center' }}>
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
                      <span style={{ fontSize: 13, fontWeight: 600, color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }}>
                        Variant:
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
                              color: variant === v ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                              transition: 'all 0.2s ease',
                            }}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Render Mobile Phone Mockup */}
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

export default DeclarationBeforeSubmissionDoc;
