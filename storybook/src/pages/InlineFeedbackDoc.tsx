import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface InlineFeedbackDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const InlineFeedbackDoc: React.FC<InlineFeedbackDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');

  const isCard = variant === 'card';

  const colors = useMemo(() => {
    return {
      primaryColor: isDark ? UX4GColors.primary300 : '#432CBB',
      titleColor: isDark ? UX4GColors.neutral50 : '#111827',
      subtleColor: isDark ? UX4GColors.neutral200 : '#4B5563',
      successColor: isDark ? UX4GColors.green300 : '#16A34A',
      screenBg: isCard
        ? isDark
          ? UX4GColors.primary800
          : '#F2EFFF'
        : isDark
        ? UX4GColors.neutral900
        : '#FFFFFF',
      cardBg: isDark ? UX4GColors.neutral800 : '#FFFFFF',
      buttonBg: isDark ? UX4GColors.primary300 : '#4A2BC2',
      buttonTextColor: isDark ? '#000000' : '#FFFFFF',
      headerBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      dividerColor: isDark ? UX4GColors.neutral700 : '#D1D5DB',
      unionColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      phoneBorder: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
    };
  }, [isDark, isCard]);

  // Clean React Native TSX source code strings matching Flutter implementation
  const defaultCodeString = `import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gButtonVariant,
  Ux4gButtonSize,
  Ux4gDivider,
  Ux4gDividerOrientation,
  Ux4gIcon,
  UX4GColors,
} from 'ux4g-react-native-design-system';
import Svg, { Path } from 'react-native-svg';

export const InlineFeedbackScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const primaryColor = isDark ? UX4GColors.primary300 : '#432CBB';
  const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
  const subtleColor = isDark ? UX4GColors.neutral200 : '#4B5563';
  const successColor = isDark ? UX4GColors.green300 : '#16A34A';
  const screenBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: screenBg }]}>
      {/* App Header with logos and elevation */}
      <Ux4gAppHeader
        elevation={2}
        variant="light"
        title=""
        leadingSpacing={8}
        leadingWidgets={[
          <NationalEmblemLogo key="emblem" isDark={isDark} height={40} />,
          <View key="divider" style={styles.headerDividerWrapper}>
            <Ux4gDivider
              orientation={Ux4gDividerOrientation.vertical}
              color="#D1D5DB"
            />
          </View>,
          <UnionLogo
            key="union"
            height={32}
            color={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
          />,
        ]}
      />

      <View style={styles.content}>
        {/* Back link */}
        <TouchableOpacity style={styles.backRow} activeOpacity={0.7}>
          <Ux4gIcon name="arrow_back" size={16} color={primaryColor} />
          <Text style={[styles.backText, { color: primaryColor }]}>Back</Text>
        </TouchableOpacity>

        {/* Title */}
        <Text style={[styles.title, { color: titleColor }]}>
          Enter your Annual Income
        </Text>

        {/* Description */}
        <Text style={[styles.description, { color: subtleColor }]}>
          Enter your total annual household income for FY 2025–2026 to verify eligibility.
        </Text>

        {/* Field Label */}
        <Text style={[styles.inputLabel, { color: titleColor }]}>
          Income Amount
        </Text>

        {/* Input field with success state */}
        <View style={[styles.inputContainer, { borderColor: successColor }]}>
          <Text style={[styles.inputText, { color: titleColor }]}>
            ₹  2,50,000
          </Text>
        </View>

        {/* Success inline feedback */}
        <View style={styles.feedbackRow}>
          <Ux4gIcon name="check_circle" size={16} color={successColor} />
          <Text style={[styles.feedbackText, { color: successColor }]}>
            Amount format looks correct
          </Text>
        </View>

        <View style={styles.spacer} />

        {/* Continue button */}
        <Ux4gButton
          text="Continue"
          onPress={() => {}}
          variant={Ux4gButtonVariant.primary}
          size={Ux4gButtonSize.large}
          height={48}
          backgroundColor={isDark ? UX4GColors.primary300 : '#4A2BC2'}
          contentColor={isDark ? '#000000' : '#FFFFFF'}
          borderRadius={8}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerDividerWrapper: {
    height: 32,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 20,
  },
  backText: {
    fontSize: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
  },
  inputText: {
    fontSize: 15,
  },
  feedbackRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  feedbackText: {
    fontSize: 13,
  },
  spacer: {
    flex: 1,
  },
});
`;

  const cardCodeString = `import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gButtonVariant,
  Ux4gButtonSize,
  Ux4gDivider,
  Ux4gDividerOrientation,
  Ux4gIcon,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const InlineFeedbackCardScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const primaryColor = isDark ? UX4GColors.primary300 : '#432CBB';
  const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
  const subtleColor = isDark ? UX4GColors.neutral200 : '#4B5563';
  const successColor = isDark ? UX4GColors.green300 : '#16A34A';
  const screenBg = isDark ? UX4GColors.primary800 : '#F2EFFF';
  const cardBg = isDark ? UX4GColors.neutral800 : '#FFFFFF';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: screenBg }]}>
      {/* App Header with logos and elevation */}
      <Ux4gAppHeader
        elevation={2}
        variant="light"
        title=""
        leadingSpacing={8}
        leadingWidgets={[
          <NationalEmblemLogo key="emblem" isDark={isDark} height={40} />,
          <View key="divider" style={styles.headerDividerWrapper}>
            <Ux4gDivider
              orientation={Ux4gDividerOrientation.vertical}
              color="#D1D5DB"
            />
          </View>,
          <UnionLogo
            key="union"
            height={32}
            color={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
          />,
        ]}
      />

      <View style={styles.content}>
        {/* Card container */}
        <View style={[styles.card, { backgroundColor: cardBg }]}>
          {/* Back link */}
          <TouchableOpacity style={styles.backRow} activeOpacity={0.7}>
            <Ux4gIcon name="arrow_back" size={16} color={primaryColor} />
            <Text style={[styles.backText, { color: primaryColor }]}>Back</Text>
          </TouchableOpacity>

          {/* Title */}
          <Text style={[styles.title, { color: titleColor }]}>
            Enter your Annual Income
          </Text>

          {/* Description */}
          <Text style={[styles.description, { color: subtleColor }]}>
            Enter your total annual household income for FY 2025–2026 to verify eligibility.
          </Text>

          {/* Field Label */}
          <Text style={[styles.inputLabel, { color: titleColor }]}>
            Income Amount
          </Text>

          {/* Input field with success state */}
          <View style={[styles.inputContainer, { borderColor: successColor }]}>
            <Text style={[styles.inputText, { color: titleColor }]}>
              ₹  2,50,000
            </Text>
          </View>

          {/* Success inline feedback */}
          <View style={styles.feedbackRow}>
            <Ux4gIcon name="check_circle" size={16} color={successColor} />
            <Text style={[styles.feedbackText, { color: successColor }]}>
              Amount format looks correct
            </Text>
          </View>
        </View>
      </View>

      {/* Continue button at bottom */}
      <View style={styles.bottomBar}>
        <Ux4gButton
          text="Continue"
          onPress={() => {}}
          variant={Ux4gButtonVariant.primary}
          size={Ux4gButtonSize.large}
          height={48}
          backgroundColor={isDark ? UX4GColors.primary300 : '#4A2BC2'}
          contentColor={isDark ? '#000000' : '#FFFFFF'}
          borderRadius={8}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerDividerWrapper: {
    height: 32,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    width: '100%',
    padding: 16,
    borderRadius: 16,
  },
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 20,
  },
  backText: {
    fontSize: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
  },
  inputText: {
    fontSize: 15,
  },
  feedbackRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  feedbackText: {
    fontSize: 13,
  },
  bottomBar: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
`;

  const codeString = isCard ? cardCodeString : defaultCodeString;

  const renderFormFields = () => (
    <div>
      {/* Back link */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
        onClick={() => alert('Back pressed')}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: '16px', color: colors.primaryColor }}
        >
          arrow_back
        </span>
        <span
          style={{
            fontSize: '14px',
            color: colors.primaryColor,
            fontWeight: 500,
          }}
        >
          Back
        </span>
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: '18px',
          fontWeight: 800,
          color: colors.titleColor,
          marginBottom: '8px',
          lineHeight: '1.3',
        }}
      >
        Enter your Annual Income
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: '13px',
          color: colors.subtleColor,
          marginBottom: '20px',
          lineHeight: '1.4',
        }}
      >
        Enter your total annual household income for FY 2025–2026 to verify eligibility.
      </div>

      {/* Field Label */}
      <div
        style={{
          fontSize: '14px',
          fontWeight: 600,
          color: colors.titleColor,
          marginBottom: '8px',
        }}
      >
        Income Amount
      </div>

      {/* Input box with success state green border */}
      <div
        style={{
          width: '100%',
          padding: '14px 16px',
          border: `1px solid ${colors.successColor}`,
          borderRadius: '8px',
          backgroundColor: isDark ? 'transparent' : '#FFFFFF',
          fontSize: '15px',
          color: colors.titleColor,
          boxSizing: 'border-box',
          marginBottom: '8px',
          fontWeight: 500,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        ₹  2,50,000
      </div>

      {/* Success inline feedback */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: '16px',
            color: colors.successColor,
            fontWeight: 600,
          }}
        >
          check_circle
        </span>
        <span
          style={{
            fontSize: '13px',
            color: colors.successColor,
            fontWeight: 400,
          }}
        >
          Amount format looks correct
        </span>
      </div>
    </div>
  );

  return (
    <div className="wb-page">
      {/* Top Header */}
      <div className="wb-header">
        <h1 className="wb-title">
          Inline Feedback ({isCard ? 'Card Style' : 'Default'})
        </h1>
        <p className="wb-description">
          {isCard
            ? 'Form input with inline validation feedback inside a card container. Shows a success message below the input field with a light purple card background.'
            : 'Form input with inline validation feedback. Shows a success message below the input field on white background.'}
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
              <div
                className={`wb-preview-area ${isDark ? 'dark' : ''}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '32px 16px',
                }}
              >
                {/* Variant Selector Pill Control */}
                <div
                  style={{
                    display: 'flex',
                    gap: 8,
                    marginBottom: 24,
                    backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
                    padding: 4,
                    borderRadius: 10,
                    border: `1px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.neutral200}`,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setVariant('default')}
                    style={{
                      padding: '8px 18px',
                      borderRadius: 8,
                      border: 'none',
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: 'pointer',
                      backgroundColor: variant === 'default' ? UX4GColors.primary : 'transparent',
                      color:
                        variant === 'default'
                          ? UX4GColors.neutral0
                          : isDark
                          ? UX4GColors.neutral400
                          : UX4GColors.neutral600,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Default
                  </button>
                  <button
                    type="button"
                    onClick={() => setVariant('card')}
                    style={{
                      padding: '8px 18px',
                      borderRadius: 8,
                      border: 'none',
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: 'pointer',
                      backgroundColor: variant === 'card' ? UX4GColors.primary : 'transparent',
                      color:
                        variant === 'card'
                          ? UX4GColors.neutral0
                          : isDark
                          ? UX4GColors.neutral400
                          : UX4GColors.neutral600,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Card Style
                  </button>
                </div>

                {/* Mobile Phone Mockup */}
                <div
                  style={{
                    width: '360px',
                    height: '640px',
                    backgroundColor: colors.screenBg,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: isDark
                      ? '0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px #333333'
                      : '0 20px 40px rgba(0,0,0,0.12), 0 0 0 1px #E5E7EB',
                    position: 'relative',
                  }}
                >
                  {/* Ux4gAppHeader inside Mockup */}
                  <div
                    style={{
                      height: '56px',
                      backgroundColor: colors.headerBg,
                      borderBottom: `1px solid ${colors.dividerColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 16px',
                      gap: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      zIndex: 10,
                    }}
                  >
                    <img
                      src="/national_emblem_logo.svg"
                      alt="National Emblem"
                      style={{
                        height: '40px',
                        filter: isDark ? 'brightness(0) invert(1)' : 'none',
                      }}
                    />
                    <div
                      style={{
                        width: '1px',
                        height: '32px',
                        backgroundColor: '#D1D5DB',
                        margin: '0 4px',
                      }}
                    />
                    <UnionLogo size={32} color={colors.unionColor} isDark={isDark} />
                  </div>

                  {/* Body Content */}
                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '16px',
                      boxSizing: 'border-box',
                      overflowY: 'auto',
                    }}
                  >
                    {isCard ? (
                      /* Card Style Variant */
                      <>
                        <div
                          style={{
                            width: '100%',
                            backgroundColor: colors.cardBg,
                            borderRadius: '16px',
                            padding: '16px',
                            boxSizing: 'border-box',
                          }}
                        >
                          {renderFormFields()}
                        </div>
                        <div style={{ flex: 1 }} />
                        {/* Continue Button at bottom of card view */}
                        <button
                          type="button"
                          onClick={() => alert('Continue pressed')}
                          style={{
                            width: '100%',
                            height: '48px',
                            backgroundColor: colors.buttonBg,
                            color: colors.buttonTextColor,
                            borderRadius: '8px',
                            border: 'none',
                            fontSize: '15px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'opacity 0.2s',
                          }}
                        >
                          Continue
                        </button>
                      </>
                    ) : (
                      /* Default Variant */
                      <>
                        {renderFormFields()}
                        <div style={{ flex: 1 }} />
                        {/* Continue Button at bottom */}
                        <button
                          type="button"
                          onClick={() => alert('Continue pressed')}
                          style={{
                            width: '100%',
                            height: '48px',
                            backgroundColor: colors.buttonBg,
                            color: colors.buttonTextColor,
                            borderRadius: '8px',
                            border: 'none',
                            fontSize: '15px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'opacity 0.2s',
                          }}
                        >
                          Continue
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 2. Code Tab */}
            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                {/* Variant Switch in Code Tab */}
                <div
                  style={{
                    display: 'flex',
                    gap: 8,
                    marginBottom: 16,
                    padding: '8px 16px',
                    backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
                    borderRadius: 8,
                    alignItems: 'center',
                    border: `1px solid ${isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}`,
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700,
                    }}
                  >
                    Active Variant:
                  </span>
                  <button
                    type="button"
                    onClick={() => setVariant('default')}
                    className={`wb-tab ${variant === 'default' ? 'active' : ''}`}
                    style={{ padding: '4px 12px', fontSize: 12 }}
                  >
                    Default
                  </button>
                  <button
                    type="button"
                    onClick={() => setVariant('card')}
                    className={`wb-tab ${variant === 'card' ? 'active' : ''}`}
                    style={{ padding: '4px 12px', fontSize: 12 }}
                  >
                    Card Style
                  </button>
                </div>

                <CodeBlock
                  code={codeString}
                  language="tsx"
                  filename={
                    variant === 'card'
                      ? 'InlineFeedbackCardPattern.tsx'
                      : 'InlineFeedbackDefaultPattern.tsx'
                  }
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InlineFeedbackDoc;
