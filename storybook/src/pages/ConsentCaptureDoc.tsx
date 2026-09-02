import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gCheckbox } from '../../../src/components/checkbox/Checkbox';
import { Ux4gTag } from '../../../src/components/tag/Tag';
import { CodeBlock } from '../components/CodeBlock';

interface ConsentCaptureDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

export const ConsentCaptureDoc: React.FC<ConsentCaptureDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');
  const [isInfoConsentGiven, setIsInfoConsentGiven] = useState(true);
  const [isEmailUpdatesConsentGiven, setIsEmailUpdatesConsentGiven] = useState(false);

  const colors = useMemo(() => {
    return {
      screenBg: variant === 'Card style'
        ? (isDark ? UX4GColors.primary900 : UX4GColors.primary100)
        : (isDark ? UX4GColors.gray900 : UX4GColors.gray100),
      cardBg: isDark ? UX4GColors.gray900 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.gray900,
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      iconBg: isDark ? UX4GColors.gray800 : '#EEF2F6',
      primary: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      tagBg: isDark ? UX4GColors.red900 : '#FFF0F0',
      tagText: isDark ? UX4GColors.red300 : '#8A1A16',
      footerText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
    };
  }, [isDark, variant]);

  const codeString = useMemo(() => {
    const isCard = variant === 'Card style';
    return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gCheckbox,
  Ux4gTag,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const ConsentCapturePattern = ({
  isDark = ${isDark},
  variant = '${variant}',
}: {
  isDark?: boolean;
  variant?: 'Default' | 'Card style';
}) => {
  const [isInfoConsentGiven, setIsInfoConsentGiven] = useState(true);
  const [isEmailUpdatesConsentGiven, setIsEmailUpdatesConsentGiven] = useState(false);

  const isCard = variant === 'Card style';

  const dataItems = [
    { title: 'Aadhaar Number', purpose: 'Identity verification', retention: '7 years' },
    { title: 'Address', purpose: 'Record keeping', retention: '7 years' },
    { title: 'Email', purpose: 'Status updates', retention: '1 year' },
  ];

  return (
    <View style={[styles.screen, { backgroundColor: isDark ? UX4GColors.gray900 : (isCard ? UX4GColors.primary100 : UX4GColors.gray100) }]}>
      {/* Header */}
      <Ux4gAppHeader
        variant="light"
        showBackButton={false}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={isCard ? [styles.cardContainer, { backgroundColor: isDark ? UX4GColors.gray900 : '#FFFFFF' }] : styles.flatContainer}>
          {/* Shield Icon Header */}
          <View style={[styles.iconCircle, { backgroundColor: isDark ? UX4GColors.gray800 : '#EEF2F6' }]}>
            <Text style={{ fontSize: 28 }}>🛡️</Text>
          </View>

          <Text style={[styles.headline, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
            Your Data, Your Control
          </Text>
          <Text style={[styles.description, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            To process your Income Certificate application, the Revenue Department will use the following data:
          </Text>

          {/* Data Cards */}
          {dataItems.map((item, index) => (
            <View key={index} style={[styles.dataCard, { backgroundColor: isDark ? UX4GColors.gray900 : '#FFFFFF', borderColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200 }]}>
              <View style={styles.dataCardRow}>
                <Text style={[styles.dataTitle, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>{item.title}</Text>
                <Ux4gTag text="Required" customBackgroundColor={isDark ? UX4GColors.red900 : '#FFF0F0'} customContentColor={isDark ? UX4GColors.red300 : '#8A1A16'} shape="rectangular" size="m" />
              </View>
              <Text style={[styles.dataDetail, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
                Purpose · {item.purpose}
              </Text>
              <Text style={[styles.dataDetail, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
                Retention · {item.retention}
              </Text>
            </View>
          ))}

          {/* Divider */}
          <View style={[styles.divider, { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200 }]} />

          {/* Consent Checkboxes */}
          <Ux4gCheckbox
            value={isInfoConsentGiven}
            onChanged={(val) => setIsInfoConsentGiven(val ?? false)}
            label="I consent to sharing the required information listed above"
            isRequired={true}
          />
          <View style={{ height: 8 }} />
          <Ux4gCheckbox
            value={isEmailUpdatesConsentGiven}
            onChanged={(val) => setIsEmailUpdatesConsentGiven(val ?? false)}
            label="I also consent to receiving email updates regarding my application"
            isRequired={false}
          />

          {/* Action Buttons */}
          <View style={{ marginTop: 24, gap: 4 }}>
            <Ux4gButton
              text="Proceed"
              enabled={isInfoConsentGiven}
              height={48}
              size="large"
            />
            <Ux4gButton
              text="Decline and exit"
              variant="ghost"
              contentColor={isDark ? UX4GColors.neutral50 : UX4GColors.neutral900}
              height={48}
              size="large"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  scrollContainer: { padding: 16 },
  flatContainer: { padding: 4 },
  cardContainer: { padding: 20, borderRadius: 16, elevation: 2 },
  iconCircle: { width: 56, height: 56, borderRadius: 28, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginBottom: 16 },
  headline: { fontSize: 20, fontWeight: '700', textAlign: 'center', marginBottom: 8 },
  description: { fontSize: 14, textAlign: 'center', lineHeight: 20, marginBottom: 24 },
  dataCard: { padding: 16, borderRadius: 12, borderWidth: 1, marginBottom: 12 },
  dataCardRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  dataTitle: { fontSize: 16, fontWeight: '700' },
  dataDetail: { fontSize: 13, lineHeight: 18, marginTop: 2 },
  divider: { height: 1, marginVertical: 20 },
});
`;
  }, [isDark, variant]);

  const renderDataCard = (title: string, purpose: string, retention: string) => (
    <div
      style={{
        width: '100%',
        padding: 16,
        backgroundColor: colors.cardBg,
        borderRadius: 12,
        border: `1px solid ${colors.border}`,
        boxSizing: 'border-box',
        marginBottom: 12,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 16, fontWeight: 600, color: colors.titleColor, letterSpacing: '-0.01em' }}>
          {title}
        </span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            padding: '2px 8px',
            borderRadius: 4,
            backgroundColor: colors.tagBg,
            color: colors.tagText,
            lineHeight: '1.2',
          }}
        >
          Required
        </span>
      </div>
      <div style={{ fontSize: 13, fontWeight: 400, color: colors.subtleText, marginTop: 6, lineHeight: '1.25' }}>
        Purpose · {purpose}
      </div>
      <div style={{ fontSize: 13, fontWeight: 400, color: colors.subtleText, marginTop: 2, lineHeight: '1.25' }}>
        Retention · {retention}
      </div>
    </div>
  );

  const renderMockupContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Shield Icon Indicator */}
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          backgroundColor: colors.iconBg,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: 28,
            color: colors.primary,
          }}
        >
          shield
        </span>
      </div>

      {/* Headline */}
      <h2
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: colors.titleColor,
          textAlign: 'center',
          margin: '0 0 8px 0',
          letterSpacing: '-0.01em',
          lineHeight: '1.3',
        }}
      >
        Your Data, Your Control
      </h2>

      {/* Description */}
      <p
        style={{
          fontSize: 14,
          fontWeight: 400,
          color: colors.subtleText,
          textAlign: 'center',
          margin: '0 0 24px 0',
          lineHeight: '1.4',
        }}
      >
        To process your Income Certificate application, the Revenue Department will use the following data:
      </p>

      {/* Data Cards */}
      {renderDataCard('Aadhaar Number', 'Identity verification', '7 years')}
      {renderDataCard('Address', 'Record keeping', '7 years')}
      {renderDataCard('Email', 'Status updates', '1 year')}

      {/* Divider */}
      <div
        style={{
          width: '100%',
          height: 1,
          backgroundColor: colors.border,
          margin: '12px 0 20px 0',
        }}
      />

      {/* Checkboxes */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Ux4gCheckbox
          value={isInfoConsentGiven}
          onChanged={(val) => setIsInfoConsentGiven(val ?? false)}
          label="I consent to sharing the required information listed above"
          isRequired={true}
        />
        <Ux4gCheckbox
          value={isEmailUpdatesConsentGiven}
          onChanged={(val) => setIsEmailUpdatesConsentGiven(val ?? false)}
          label="I also consent to receiving email updates regarding my application"
          isRequired={false}
        />
      </div>

      {/* Actions */}
      <div style={{ width: '100%', marginTop: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Ux4gButton
          text="Proceed"
          enabled={isInfoConsentGiven}
          onPress={() => {}}
          height={48}
          size="large"
          width="100%"
        />
        <Ux4gButton
          text="Decline and exit"
          variant="ghost"
          contentColor={isDark ? UX4GColors.neutral50 : UX4GColors.neutral900}
          onPress={() => {}}
          height={48}
          size="large"
          width="100%"
        />
      </div>
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
          <div style={{ flex: 1, padding: variant === 'Card style' ? 16 : '20px 20px 0 20px' }}>
            {variant === 'Card style' ? (
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: 20,
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                }}
              >
                {renderMockupContent()}
              </div>
            ) : (
              renderMockupContent()
            )}
            <div style={{ height: 16 }} />
          </div>

          {/* Brand Footer */}
          <div style={{ padding: '12px 0 16px 0', textAlign: 'center', backgroundColor: colors.screenBg, flexShrink: 0 }}>
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
          <h1 className="wb-title">Consent Capture</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Pattern for capturing user consent to share data and optionally receive updates. Use the Variant knob to switch between the standard flat layout and the card-style layout on a soft-purple background.
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

export default ConsentCaptureDoc;
