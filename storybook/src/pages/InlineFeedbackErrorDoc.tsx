import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface InlineFeedbackErrorDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const InlineFeedbackErrorDoc: React.FC<InlineFeedbackErrorDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [mobileNumber, setMobileNumber] = useState<string>('98765432');

  const isCard = variant === 'card';

  const colors = useMemo(() => {
    return {
      primaryColor: isDark ? UX4GColors.primary300 : '#432CBB',
      titleColor: isDark ? UX4GColors.neutral50 : '#111827',
      subtleColor: isDark ? UX4GColors.neutral200 : '#4B5563',
      errorColor: isDark ? UX4GColors.red400 : '#DB372D',
      errorBg: isDark ? 'rgba(219, 55, 45, 0.15)' : UX4GColors.red50,
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
      inputBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      prefixBg: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
      prefixBorder: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
      phoneBorder: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
    };
  }, [isDark, isCard]);

  // Clean React Native TSX source code strings matching Flutter implementation
  const defaultCodeString = `import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gButtonVariant,
  Ux4gButtonSize,
  Ux4gInputField,
  Ux4gInputFieldStatus,
  Ux4gDivider,
  Ux4gDividerOrientation,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const InlineFeedbackErrorScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const [mobileNumber, setMobileNumber] = useState('98765432');

  const primaryColor = isDark ? UX4GColors.primary300 : '#432CBB';
  const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
  const subtleColor = isDark ? UX4GColors.neutral200 : '#4B5563';
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
        {/* Back button */}
        <View style={styles.backWrapper}>
          <Ux4gButton
            text="Back"
            onPress={() => {}}
            variant={Ux4gButtonVariant.ghost}
            leadingIcon="arrow_back"
            contentColor={primaryColor}
            size={Ux4gButtonSize.small}
          />
        </View>

        {/* Title */}
        <Text style={[styles.title, { color: titleColor }]}>
          Enter your Mobile Number
        </Text>

        {/* Description */}
        <Text style={[styles.description, { color: subtleColor }]}>
          Provide your mobile number for OTP verification and updates.
        </Text>

        {/* Input field with error status */}
        <Ux4gInputField
          value={mobileNumber}
          onValueChange={setMobileNumber}
          label="Mobile Number"
          prefixText="+91"
          status={Ux4gInputFieldStatus.error}
          caption="Enter a valid 10-digit mobile number"
        />

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
  backWrapper: {
    alignSelf: 'flex-start',
    marginBottom: 20,
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
  spacer: {
    flex: 1,
  },
});
`;

  const cardCodeString = `import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gButtonVariant,
  Ux4gButtonSize,
  Ux4gInputField,
  Ux4gInputFieldStatus,
  Ux4gDivider,
  Ux4gDividerOrientation,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const InlineFeedbackErrorCardScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const [mobileNumber, setMobileNumber] = useState('98765432');

  const primaryColor = isDark ? UX4GColors.primary300 : '#432CBB';
  const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
  const subtleColor = isDark ? UX4GColors.neutral200 : '#4B5563';
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
          {/* Back button */}
          <View style={styles.backWrapper}>
            <Ux4gButton
              text="Back"
              onPress={() => {}}
              variant={Ux4gButtonVariant.ghost}
              leadingIcon="arrow_back"
              contentColor={primaryColor}
              size={Ux4gButtonSize.small}
            />
          </View>

          {/* Title */}
          <Text style={[styles.title, { color: titleColor }]}>
            Enter your Mobile Number
          </Text>

          {/* Description */}
          <Text style={[styles.description, { color: subtleColor }]}>
            Provide your mobile number for OTP verification and updates.
          </Text>

          {/* Input field with error status */}
          <Ux4gInputField
            value={mobileNumber}
            onValueChange={setMobileNumber}
            label="Mobile Number"
            prefixText="+91"
            status={Ux4gInputFieldStatus.error}
            caption="Enter a valid 10-digit mobile number"
          />
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
  backWrapper: {
    alignSelf: 'flex-start',
    marginBottom: 20,
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
  bottomBar: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
`;

  const codeString = isCard ? cardCodeString : defaultCodeString;

  const renderFormFields = () => (
    <div>
      {/* Back button */}
      <div
        style={{
          display: 'inline-flex',
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
        Enter your Mobile Number
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
        Provide your mobile number for OTP verification and updates.
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
        Mobile Number
      </div>

      {/* Input box with prefix & error red border */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          border: `1px solid ${colors.errorColor}`,
          borderRadius: '8px',
          backgroundColor: colors.inputBg,
          overflow: 'hidden',
          marginBottom: '6px',
        }}
      >
        {/* Prefix +91 */}
        <div
          style={{
            padding: '12px 14px',
            backgroundColor: colors.prefixBg,
            borderRight: `1px solid ${colors.prefixBorder}`,
            fontSize: '14px',
            fontWeight: 600,
            color: colors.titleColor,
          }}
        >
          +91
        </div>
        {/* Input value */}
        <input
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          placeholder="Enter 10-digit number"
          style={{
            flex: 1,
            padding: '12px 14px',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            fontSize: '15px',
            color: colors.titleColor,
            fontWeight: 500,
          }}
        />
      </div>

      {/* Error inline feedback message */}
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
            color: colors.errorColor,
            fontWeight: 600,
          }}
        >
          error
        </span>
        <span
          style={{
            fontSize: '12px',
            color: colors.errorColor,
            fontWeight: 500,
          }}
        >
          Enter a valid 10-digit mobile number
        </span>
      </div>
    </div>
  );

  return (
    <div className="wb-page">
      {/* Top Header */}
      <div className="wb-header">
        <h1 className="wb-title">
          Inline Feedback Error ({isCard ? 'Card Style' : 'Default'})
        </h1>
        <p className="wb-description">
          {isCard
            ? 'Form input with inline error validation feedback inside a card container. Shows an error message below the input field with a light purple card background.'
            : 'Form input with inline error validation feedback. Shows an error message below the input field when validation fails.'}
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
                      ? 'InlineFeedbackErrorCardPattern.tsx'
                      : 'InlineFeedbackErrorDefaultPattern.tsx'
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

export default InlineFeedbackErrorDoc;
