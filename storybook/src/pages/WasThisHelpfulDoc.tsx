import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface WasThisHelpfulDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';
type FeedbackState = 'idle' | 'yes' | 'no';

export const WasThisHelpfulDoc: React.FC<WasThisHelpfulDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [feedback, setFeedback] = useState<FeedbackState>('idle');

  const isCard = variant === 'card';

  const colors = useMemo(() => {
    const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
    const subtitleColor = isDark ? UX4GColors.neutral200 : UX4GColors.neutral700;
    const metaColor = isDark ? UX4GColors.neutral400 : UX4GColors.neutral500;
    const scaffoldBg = isDark ? UX4GColors.neutral900 : UX4GColors.neutral50;
    const cardBg = isDark ? UX4GColors.neutral800 : UX4GColors.neutral0;
    const borderColor = isDark ? UX4GColors.neutral700 : UX4GColors.neutral200;
    const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
    const headerBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
    const headerDividerColor = '#D1D5DB';
    const footerText = isDark ? UX4GColors.neutral400 : '#6B7280';
    const buttonText = isDark ? UX4GColors.neutral300 : UX4GColors.neutral800;
    const screenBg = isCard
      ? isDark
        ? UX4GColors.primary800
        : UX4GColors.primary100
      : scaffoldBg;

    return {
      titleColor,
      subtitleColor,
      metaColor,
      scaffoldBg,
      cardBg,
      borderColor,
      primaryColor,
      headerBg,
      headerDividerColor,
      footerText,
      buttonText,
      screenBg,
    };
  }, [isDark, isCard]);

  // Clean React Native TSX source code string matching Flutter implementation
  const defaultCodeString = `import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gDividerOrientation,
  Ux4gButton,
  Ux4gButtonVariant,
  Ux4gButtonSize,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const WasThisHelpfulScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const [feedback, setFeedback] = useState<'idle' | 'yes' | 'no'>('idle');

  const scaffoldBg = isDark ? UX4GColors.neutral900 : UX4GColors.neutral50;
  const cardBg = isDark ? UX4GColors.neutral800 : UX4GColors.neutral0;
  const borderColor = isDark ? UX4GColors.neutral700 : UX4GColors.neutral200;
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const bodyColor = isDark ? UX4GColors.neutral200 : UX4GColors.neutral700;
  const metaColor = isDark ? UX4GColors.neutral400 : UX4GColors.neutral500;
  const buttonColor = isDark ? UX4GColors.neutral300 : UX4GColors.neutral800;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: scaffoldBg }]}>
      {/* App Header */}
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
            size={32}
            color={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
          />,
        ]}
      />

      <View style={styles.container}>
        {/* Background Page Content (Article Detail) */}
        <ScrollView contentContainerStyle={styles.articleContent}>
          <Text style={[styles.categoryTag, { color: metaColor }]}>
            SUPPORT &gt; REGISTRATION
          </Text>
          <Text style={[styles.articleTitle, { color: titleColor }]}>
            How to update your registered mobile number?
          </Text>
          <Text style={[styles.articleBody, { color: bodyColor }]}>
            To update your mobile number, log in to your account dashboard and
            navigate to Account Settings. Under the Profile tab, locate your phone
            number, click Edit, enter the new mobile number, and verify using the
            OTP sent to your new number.
          </Text>
        </ScrollView>

        {/* Semi-transparent backdrop overlay */}
        <View style={styles.overlay} pointerEvents="none" />

        {/* Floating Toast / Alert Card at bottom */}
        <View
          style={[
            styles.floatingAlertCard,
            {
              backgroundColor: cardBg,
              borderColor: borderColor,
            },
          ]}
        >
          <Text style={[styles.alertTitle, { color: titleColor }]}>
            Was this helpful?
          </Text>
          <View style={styles.buttonsRow}>
            <Ux4gButton
              onPress={() => setFeedback('yes')}
              text="Yes"
              variant={feedback === 'yes' ? Ux4gButtonVariant.primary : Ux4gButtonVariant.outline}
              size={Ux4gButtonSize.small}
              leadingIcon="thumb-up"
              borderColor={borderColor}
              contentColor={feedback === 'yes' ? '#FFFFFF' : buttonColor}
            />
            <View style={{ width: 8 }} />
            <Ux4gButton
              onPress={() => setFeedback('no')}
              text="No"
              variant={feedback === 'no' ? Ux4gButtonVariant.primary : Ux4gButtonVariant.outline}
              size={Ux4gButtonSize.small}
              leadingIcon="thumb-down"
              borderColor={borderColor}
              contentColor={feedback === 'no' ? '#FFFFFF' : buttonColor}
            />
          </View>
        </View>
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
  container: {
    flex: 1,
    position: 'relative',
  },
  articleContent: {
    padding: 16,
  },
  categoryTag: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  articleTitle: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 26,
    marginBottom: 16,
  },
  articleBody: {
    fontSize: 14,
    lineHeight: 22,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  floatingAlertCard: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 16,
    elevation: 4,
  },
  alertTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 12,
  },
  buttonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
`;

  return (
    <div className="wb-page">
      {/* Top Header */}
      <div className="wb-header">
        <h1 className="wb-title">
          Was This Helpful Alert ({isCard ? 'Card Style' : 'Default'})
        </h1>
        <p className="wb-description">
          A bottom floating dialog/toast alert asking users for feedback on helpfulness with article backdrop.
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
                    onClick={() => {
                      setVariant('default');
                      setFeedback('idle');
                    }}
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
                    onClick={() => {
                      setVariant('card');
                      setFeedback('idle');
                    }}
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

                {/* Mobile Phone Mockup Frame */}
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
                    transition: 'background-color 0.2s ease',
                  }}
                >
                  {/* Ux4gAppHeader inside Mockup */}
                  <div
                    style={{
                      height: '56px',
                      backgroundColor: colors.headerBg,
                      borderBottom: `1px solid ${colors.headerDividerColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 16px',
                      gap: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      zIndex: 10,
                      flexShrink: 0,
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
                    <UnionLogo size={32} color={colors.primaryColor} isDark={isDark} />
                  </div>

                  {/* Relative Container with Article Content & Toast */}
                  <div
                    style={{
                      flex: 1,
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Article Page Content */}
                    <div
                      style={{
                        flex: 1,
                        padding: '16px',
                        overflowY: 'auto',
                      }}
                    >
                      {/* Breadcrumbs / Tag */}
                      <div
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          color: colors.metaColor,
                          letterSpacing: '0.6px',
                          marginBottom: '8px',
                        }}
                      >
                        SUPPORT &gt; REGISTRATION
                      </div>

                      {/* Article Title */}
                      <h2
                        style={{
                          fontSize: '19px',
                          fontWeight: 800,
                          color: colors.titleColor,
                          lineHeight: '26px',
                          marginBottom: '14px',
                        }}
                      >
                        How to update your registered mobile number?
                      </h2>

                      {/* Article Body */}
                      <p
                        style={{
                          fontSize: '13px',
                          lineHeight: '21px',
                          color: colors.subtitleColor,
                          marginBottom: '16px',
                        }}
                      >
                        To update your mobile number, log in to your account dashboard and navigate
                        to Account Settings. Under the Profile tab, locate your phone number, click
                        Edit, enter the new mobile number, and verify using the OTP sent to your new
                        number.
                      </p>

                      <p
                        style={{
                          fontSize: '13px',
                          lineHeight: '21px',
                          color: colors.subtitleColor,
                        }}
                      >
                        Once verified, all future alerts, notifications, and OTPs will be sent to the updated mobile number.
                      </p>
                    </div>

                    {/* Semi-transparent backdrop overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.15)',
                        pointerEvents: 'none',
                        zIndex: 2,
                      }}
                    />

                    {/* Floating Toast / Alert Card at bottom */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '16px',
                        left: '16px',
                        right: '16px',
                        backgroundColor: colors.cardBg,
                        borderRadius: '16px',
                        border: `1px solid ${colors.borderColor}`,
                        padding: '16px',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                        zIndex: 5,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '15px',
                          fontWeight: 700,
                          color: colors.titleColor,
                          marginBottom: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span>Was this helpful?</span>
                        {feedback !== 'idle' && (
                          <button
                            type="button"
                            onClick={() => setFeedback('idle')}
                            style={{
                              border: 'none',
                              background: 'transparent',
                              color: colors.metaColor,
                              fontSize: '11px',
                              cursor: 'pointer',
                              textDecoration: 'underline',
                            }}
                          >
                            Reset
                          </button>
                        )}
                      </div>

                      {feedback === 'idle' ? (
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                          <button
                            type="button"
                            onClick={() => setFeedback('yes')}
                            style={{
                              padding: '8px 16px',
                              borderRadius: '8px',
                              border: `1px solid ${colors.borderColor}`,
                              backgroundColor: 'transparent',
                              color: colors.buttonText,
                              fontSize: '13px',
                              fontWeight: 600,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              transition: 'all 0.15s ease',
                            }}
                          >
                            <span
                              className="material-symbols-outlined"
                              style={{ fontSize: '18px' }}
                            >
                              thumb_up
                            </span>
                            Yes
                          </button>

                          <button
                            type="button"
                            onClick={() => setFeedback('no')}
                            style={{
                              padding: '8px 16px',
                              borderRadius: '8px',
                              border: `1px solid ${colors.borderColor}`,
                              backgroundColor: 'transparent',
                              color: colors.buttonText,
                              fontSize: '13px',
                              fontWeight: 600,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              transition: 'all 0.15s ease',
                            }}
                          >
                            <span
                              className="material-symbols-outlined"
                              style={{ fontSize: '18px' }}
                            >
                              thumb_down
                            </span>
                            No
                          </button>
                        </div>
                      ) : (
                        <div
                          style={{
                            fontSize: '13px',
                            color: colors.primaryColor,
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '4px 0',
                          }}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: '18px' }}
                          >
                            check_circle
                          </span>
                          Thank you for your feedback!
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Code Tab */}
            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                <CodeBlock code={defaultCodeString} language="tsx" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
