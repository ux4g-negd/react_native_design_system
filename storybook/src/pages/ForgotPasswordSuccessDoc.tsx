import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gButton } from '../../../src/components/button/Button';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface ForgotPasswordSuccessDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const ForgotPasswordSuccessDoc: React.FC<ForgotPasswordSuccessDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');

  // Exact color tokens from UX4G Flutter Design System (1:1 match with Ux4gColors/Ux4gPalette)
  const colors = useMemo(() => {
    return {
      title: isDark ? UX4GColors.green300 : UX4GColors.green800,           // Ux4gColors.green300 / green800
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,  // _getSubtleText
      mutedText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,   // _getMutedText
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,      // _getBorder
      cardBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      cardScreenBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100, // _getSuCardBg
      defaultScreenBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      primary: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      buttonBg: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      greenCircleBg: isDark ? UX4GColors.green800 : UX4GColors.green100,
      greenIconColor: isDark ? UX4GColors.green500 : UX4GColors.green600,
    };
  }, [isDark]);

  const handleSignIn = () => {
    alert('Navigating to Sign In...');
  };

  // Clean React Native TSX code snippet matching Flutter fpStep4Component
  const codeString = useMemo(() => {
    if (variant === 'card') {
      return `import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gDivider,
  Ux4gIcons,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const PasswordResetSuccessCardPattern = () => {
  return (
    <View style={styles.screen}>
      {/* 1. Official Government Header */}
      <Ux4gAppHeader
        title=""
        variant="light"
        elevation={0}
        useSafeArea={false}
        horizontalPadding={16}
        leadingSpacing={12}
        backgroundColor={UX4GColors.neutral0}
        borderColor={UX4GColors.neutral200}
        leadingWidgets={[
          <Image
            key="emblem"
            source={{ uri: '/national_emblem_logo.svg' }}
            style={styles.emblemLogo}
            resizeMode="contain"
          />,
          <View key="divider" style={styles.headerDivider} />,
          <Image
            key="union"
            source={{ uri: '/Union.svg' }}
            style={styles.unionLogo}
            resizeMode="contain"
          />,
        ]}
      />
      <Ux4gDivider color={UX4GColors.neutral200} />

      {/* 2. Card Layout Body */}
      <View style={styles.cardContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.card}>
            {/* Green Check Circle Badge */}
            <View style={styles.iconCircle}>
              <Text style={styles.checkIcon}>✓</Text>
            </View>

            <View style={{ height: 20 }} />

            <Text style={styles.title}>
              {'Password reset\nsuccessfully'}
            </Text>

            <View style={{ height: 10 }} />

            <Text style={styles.subtitleText}>
              Sign in with your new password to continue access to government services.
            </Text>

            <View style={{ height: 28 }} />

            <Ux4gButton
              text="Sign in"
              variant="primary"
              size="large"
              onPress={() => {}}
              style={styles.actionButton}
            />
          </View>
        </ScrollView>

        {/* Powered by Digital India Footer */}
        <View style={styles.footer}>
          <Text style={styles.poweredByText}>Powered by -</Text>
          <Image
            source={{ uri: '/Digital_India_logo.svg' }}
            style={styles.digitalIndiaLogo}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: UX4GColors.neutral0 },
  emblemLogo: { width: 32, height: 32 },
  headerDivider: {
    width: 1, height: 28,
    backgroundColor: UX4GColors.neutral300,
    marginHorizontal: 4,
  },
  unionLogo: { width: 32, height: 32 },
  cardContainer: {
    flex: 1, backgroundColor: UX4GColors.primary100,
  },
  scrollContainer: { padding: 16 },
  card: {
    backgroundColor: UX4GColors.neutral0,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingTop: 36,
    paddingBottom: 28,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 2,
  },
  iconCircle: {
    width: 64, height: 64, borderRadius: 32,
    backgroundColor: UX4GColors.green100,
    alignItems: 'center', justifyContent: 'center',
  },
  checkIcon: {
    fontSize: 32, fontWeight: 'bold',
    color: UX4GColors.green600,
  },
  title: {
    fontSize: 26, fontWeight: '700',
    color: UX4GColors.green800, textAlign: 'center',
    letterSpacing: -0.3, lineHeight: 32.5,
  },
  subtitleText: {
    fontSize: 13, color: UX4GColors.neutral500,
    textAlign: 'center', lineHeight: 19.5,
  },
  actionButton: {
    width: '100%', height: 48, borderRadius: 8,
  },
  footer: {
    paddingVertical: 14, alignItems: 'center',
    flexDirection: 'row', justifyContent: 'center', gap: 4,
  },
  poweredByText: { fontSize: 11, color: UX4GColors.neutral400 },
  digitalIndiaLogo: { height: 24, width: 80 },
});`;
    }

    return `import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const PasswordResetSuccessDefaultPattern = () => {
  return (
    <View style={styles.screen}>
      {/* 1. Official Government Header */}
      <Ux4gAppHeader
        title=""
        variant="light"
        elevation={0}
        useSafeArea={false}
        horizontalPadding={16}
        leadingSpacing={12}
        backgroundColor={UX4GColors.neutral0}
        borderColor={UX4GColors.neutral200}
        leadingWidgets={[
          <Image
            key="emblem"
            source={{ uri: '/national_emblem_logo.svg' }}
            style={styles.emblemLogo}
            resizeMode="contain"
          />,
          <View key="divider" style={styles.headerDivider} />,
          <Image
            key="union"
            source={{ uri: '/Union.svg' }}
            style={styles.unionLogo}
            resizeMode="contain"
          />,
        ]}
      />
      <Ux4gDivider color={UX4GColors.neutral200} />

      {/* 2. Main Content Body */}
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={{ alignItems: 'center' }}>
            {/* Green Check Circle Badge */}
            <View style={styles.iconCircle}>
              <Text style={styles.checkIcon}>✓</Text>
            </View>

            <View style={{ height: 24 }} />

            <Text style={styles.title}>
              {'Password reset\nsuccessfully'}
            </Text>

            <View style={{ height: 12 }} />

            <Text style={styles.subtitleText}>
              Sign in with your new password to continue access to government services.
            </Text>
          </View>
        </ScrollView>

        <View style={{ padding: 16 }}>
          <Ux4gButton
            text="Sign in"
            variant="primary"
            size="large"
            onPress={() => {}}
            style={styles.actionButton}
          />
        </View>

        {/* Powered by Digital India Footer */}
        <View style={styles.footer}>
          <Text style={styles.poweredByText}>Powered by -</Text>
          <Image
            source={{ uri: '/Digital_India_logo.svg' }}
            style={styles.digitalIndiaLogo}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: UX4GColors.neutral0 },
  emblemLogo: { width: 32, height: 32 },
  headerDivider: {
    width: 1, height: 28,
    backgroundColor: UX4GColors.neutral300,
    marginHorizontal: 4,
  },
  unionLogo: { width: 32, height: 32 },
  scrollContainer: {
    paddingHorizontal: 20, paddingTop: 48,
  },
  iconCircle: {
    width: 64, height: 64, borderRadius: 32,
    backgroundColor: UX4GColors.green100,
    alignItems: 'center', justifyContent: 'center',
  },
  checkIcon: {
    fontSize: 32, fontWeight: 'bold',
    color: UX4GColors.green600,
  },
  title: {
    fontSize: 26, fontWeight: '700',
    color: UX4GColors.green800, textAlign: 'center',
    letterSpacing: -0.3, lineHeight: 32.5,
  },
  subtitleText: {
    fontSize: 14, color: UX4GColors.neutral500,
    textAlign: 'center', lineHeight: 21,
  },
  actionButton: {
    width: '100%', height: 48, borderRadius: 8,
  },
  footer: {
    paddingVertical: 14, paddingHorizontal: 20,
    alignItems: 'center', flexDirection: 'row',
    justifyContent: 'center', gap: 4,
  },
  poweredByText: { fontSize: 11, color: UX4GColors.neutral400 },
  digitalIndiaLogo: { height: 24, width: 80 },
});`;
  }, [variant]);

  // Interactive Live Mockup for Web Preview (1:1 match with Flutter FP Step 4)
  const renderLiveMockup = () => {
    const isCard = variant === 'card';
    const bgScreenColor = isCard ? colors.cardScreenBg : colors.defaultScreenBg;

    return (
      <div
        style={{
          width: 360,
          height: 760,
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: isDark
            ? '0 12px 32px rgba(0, 0, 0, 0.6), 0 0 0 1px #333333'
            : '0 12px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px #E5E7EB',
          backgroundColor: bgScreenColor,
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* Official Header */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <Ux4gAppHeader
            title=""
            variant="light"
            elevation={0}
            useSafeArea={false}
            height={56}
            horizontalPadding={16}
            leadingSpacing={12}
            backgroundColor={colors.headerBg}
            borderColor={colors.border}
            leadingWidgets={[
              <img
                key="emblem"
                src="/national_emblem_logo.svg"
                alt="National Emblem"
                style={{
                  height: 32,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />,
              <div
                key="divider"
                style={{
                  width: 1,
                  height: 28,
                  backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
                  margin: '0 4px',
                }}
              />,
              <UnionLogo key="union" size={32} isDark={isDark} />,
            ]}
          />
          <div
            style={{
              height: 1,
              backgroundColor: colors.border,
              width: '100%',
            }}
          />
        </div>

        {/* Main Content Body */}
        {isCard ? (
          /* Card Style Variant */
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: colors.cardScreenBg,
              justifyContent: 'space-between',
            }}
          >
            <div style={{ padding: '16px', flex: 1, overflow: 'auto' }}>
              {/* Elevated Card */}
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: '36px 20px 28px 20px',
                  boxShadow: isDark
                    ? '0 4px 16px rgba(0, 0, 0, 0.4)'
                    : '0 4px 16px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {/* Green Check Circle Badge */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 32,
                    backgroundColor: colors.greenCircleBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: 36,
                      color: colors.greenIconColor,
                    }}
                  >
                    check_circle
                  </span>
                </div>

                <div style={{ height: 20 }} />

                {/* Title */}
                <h2
                  style={{
                    fontSize: 26,
                    fontWeight: 700,
                    lineHeight: 1.25,
                    letterSpacing: '-0.3px',
                    color: colors.title,
                    margin: 0,
                    textAlign: 'center',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {`Password reset\nsuccessfully`}
                </h2>

                <div style={{ height: 10 }} />

                {/* Subtitle */}
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: colors.subtleText,
                    margin: 0,
                    textAlign: 'center',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Sign in with your new password to continue access to government services.
                </p>

                <div style={{ height: 28 }} />

                {/* Sign In Button */}
                <Ux4gButton
                  text="Sign in"
                  variant="primary"
                  size="large"
                  onPress={handleSignIn}
                  style={{
                    height: 48,
                    borderRadius: 8,
                    width: '100%',
                    backgroundColor: colors.buttonBg,
                  }}
                />
              </div>
            </div>

            {/* Brand Footer */}
            <div
              style={{
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 400,
                  color: colors.mutedText,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Powered by -
              </span>
              <img
                src="/Digital_India_logo.svg"
                alt="Digital India"
                style={{
                  height: 24,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />
            </div>
          </div>
        ) : (
          /* Default Flat Variant */
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: colors.defaultScreenBg,
            }}
          >
            <div
              style={{
                padding: '48px 20px 0 20px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                overflow: 'auto',
              }}
            >
              {/* Green Check Circle Badge */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 32,
                  backgroundColor: colors.greenCircleBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: 36,
                    color: colors.greenIconColor,
                  }}
                >
                  check_circle
                </span>
              </div>

              <div style={{ height: 24 }} />

              {/* Title */}
              <h2
                style={{
                  fontSize: 26,
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: '-0.3px',
                  color: colors.title,
                  margin: 0,
                  textAlign: 'center',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  whiteSpace: 'pre-line',
                }}
              >
                {`Password reset\nsuccessfully`}
              </h2>

              <div style={{ height: 12 }} />

              {/* Subtitle */}
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: colors.subtleText,
                  margin: 0,
                  textAlign: 'center',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Sign in with your new password to continue access to government services.
              </p>
            </div>

            {/* Sign In Button + Footer at bottom */}
            <div>
              <div style={{ padding: '0 20px 16px 20px' }}>
                <Ux4gButton
                  text="Sign in"
                  variant="primary"
                  size="large"
                  onPress={handleSignIn}
                  style={{
                    height: 48,
                    borderRadius: 8,
                    width: '100%',
                    backgroundColor: colors.buttonBg,
                  }}
                />
              </div>

              {/* Brand Footer */}
              <div
                style={{
                  padding: '14px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 4,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 400,
                    color: colors.mutedText,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Powered by -
                </span>
                <img
                  src="/Digital_India_logo.svg"
                  alt="Digital India"
                  style={{
                    height: 24,
                    filter: isDark ? 'brightness(0) invert(1)' : 'none',
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Password reset successfully</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Success confirmation after the new password has been saved.
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
                        color: variant === 'default' ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
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
                        color: variant === 'card' ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      Card style
                    </button>
                  </div>

                  {/* Render Mobile Phone Mockup */}
                  {renderLiveMockup()}
                </div>
              </Ux4gThemeProvider>
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
                  <span style={{ fontSize: 13, fontWeight: 600, color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }}>
                    Active Variant:
                  </span>
                  <button
                    type="button"
                    onClick={() => setVariant('default')}
                    style={{
                      padding: '4px 12px',
                      borderRadius: 6,
                      border: 'none',
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: 'pointer',
                      backgroundColor: variant === 'default' ? UX4GColors.primary : 'transparent',
                      color: variant === 'default' ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                    }}
                  >
                    Default
                  </button>
                  <button
                    type="button"
                    onClick={() => setVariant('card')}
                    style={{
                      padding: '4px 12px',
                      borderRadius: 6,
                      border: 'none',
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: 'pointer',
                      backgroundColor: variant === 'card' ? UX4GColors.primary : 'transparent',
                      color: variant === 'card' ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                    }}
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
