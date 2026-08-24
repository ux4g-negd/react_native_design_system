import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { defaultUx4gTypography } from '../../../src/foundation/typography';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gBadge } from '../../../src/components/badge/Badge';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { CodeBlock } from '../components/CodeBlock';

interface SignedInSuccessDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const SignedInSuccessDoc: React.FC<SignedInSuccessDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [secondsLeft, setSecondsLeft] = useState<number>(3);

  // Auto-countdown timer looping 3 -> 0 for demo
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 1 ? prev - 1 : 3));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Theme & color tokens matching Flutter pattern
  const colors = useMemo(() => {
    return {
      successDark: isDark ? UX4GColors.green300 : UX4GColors.green700, // #86EFAC / #15803D
      successMid: UX4GColors.green, // #22C55E / #16A34A
      successLight: isDark ? UX4GColors.green900 : UX4GColors.green100, // #064E3B / #D1FAE5
      title: isDark ? UX4GColors.neutral50 : UX4GColors.gray900,
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500, // #A1A1A1 / #737373
      mutedText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400, // #737373 / #A1A1A1
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      cardBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      cardScreenBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100, // #301C7D / #DCD4FF
      defaultScreenBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral50, // #121212 / #FAFAFA
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      primary: isDark ? UX4GColors.primary300 : UX4GColors.primary,
    };
  }, [isDark]);

  // Clean React Native TSX code snippet matching Flutter signInSuccessComponent
  const codeString = useMemo(() => {
    if (variant === 'card') {
      return `import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gBadge,
  Ux4gDivider,
  UX4GColors,
  defaultUx4gTypography,
} from 'ux4g-react-native-design-system';

export const SignedInSuccessCardPattern = () => {
  const [secondsLeft, setSecondsLeft] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 1 ? prev - 1 : 3));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.screen}>
      {/* 1. Brand Header with Bottom Elevation */}
      <Ux4gAppHeader
        title=""
        variant="light"
        elevation={2}
        useSafeArea={false}
        horizontalPadding={16}
        leadingSpacing={8}
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

      {/* 2. Soft-Purple Background & Floating Card */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          {/* Success Badge - Concentric Circles + Check Icon */}
          <View style={styles.successBadgeOuter}>
            <View style={styles.successBadgeInner}>
              <Text style={styles.checkIcon}>✓</Text>
            </View>
          </View>

          <View style={{ height: 24 }} />

          {/* Heading */}
          <Text style={styles.title}>Signed in successfully!</Text>

          <View style={{ height: 8 }} />

          {/* Subtitle */}
          <Text style={styles.subtitle}>
            You are being redirected to your service
          </Text>

          <View style={{ height: 24 }} />

          {/* 3-Dot Status Indicator */}
          <View style={styles.dotRow}>
            <Ux4gBadge.dot containerColor={UX4GColors.primary} />
            <Ux4gBadge.dot containerColor={UX4GColors.primary} />
            <Ux4gBadge.dot containerColor="rgba(74, 43, 194, 0.4)" />
          </View>

          <View style={{ height: 18 }} />

          {/* Countdown Redirect Text */}
          <Text style={styles.countdownText}>
            Redirecting in {secondsLeft} seconds...
          </Text>
        </View>

        {/* 3. Powered by Digital India Footer */}
        <View style={styles.footer}>
          <Text style={styles.poweredByText}>Powered by -</Text>
          <Image
            source={{ uri: '/Digital_India_logo.svg' }}
            style={styles.digitalIndiaLogo}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: UX4GColors.primary100, // #DCD4FF
  },
  emblemLogo: {
    width: 32,
    height: 32,
  },
  headerDivider: {
    width: 1,
    height: 24,
    backgroundColor: UX4GColors.neutral300,
    marginHorizontal: 4,
  },
  unionLogo: {
    width: 32,
    height: 32,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 20,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: UX4GColors.neutral0,
    borderRadius: 16,
    padding: 24,
    paddingVertical: 28,
    alignItems: 'center',
    shadowColor: UX4GColors.neutral1000black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 3,
  },
  successBadgeOuter: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: UX4GColors.green100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successBadgeInner: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: UX4GColors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkIcon: {
    color: UX4GColors.neutral0,
    fontSize: 20,
    fontWeight: '700',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: -0.3,
    color: UX4GColors.green700,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: UX4GColors.neutral500,
    textAlign: 'center',
  },
  dotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  countdownText: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    color: UX4GColors.neutral400,
    textAlign: 'center',
  },
  footer: {
    marginTop: 24,
    alignItems: 'center',
    gap: 6,
    paddingBottom: 8,
  },
  poweredByText: {
    fontSize: 11,
    fontWeight: '400',
    color: UX4GColors.neutral400,
  },
  digitalIndiaLogo: {
    width: 70,
    height: 26,
  },
});`;
    }

    return `import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gBadge,
  Ux4gDivider,
  UX4GColors,
  defaultUx4gTypography,
} from 'ux4g-react-native-design-system';

export const SignedInSuccessDefaultPattern = () => {
  const [secondsLeft, setSecondsLeft] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 1 ? prev - 1 : 3));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.screen}>
      {/* 1. Brand Header with Bottom Elevation */}
      <Ux4gAppHeader
        title=""
        variant="light"
        elevation={2}
        useSafeArea={false}
        horizontalPadding={16}
        leadingSpacing={8}
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

      {/* 2. Flat Layout with Centered Success Message */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          {/* Success Badge - Concentric Circles + Check Icon */}
          <View style={styles.successBadgeOuter}>
            <View style={styles.successBadgeInner}>
              <Text style={styles.checkIcon}>✓</Text>
            </View>
          </View>

          <View style={{ height: 24 }} />

          {/* Heading */}
          <Text style={styles.title}>Signed in successfully!</Text>

          <View style={{ height: 8 }} />

          {/* Subtitle */}
          <Text style={styles.subtitle}>
            You are being redirected to your service
          </Text>

          <View style={{ height: 28 }} />

          {/* 3-Dot Status Indicator */}
          <View style={styles.dotRow}>
            <Ux4gBadge.dot containerColor={UX4GColors.primary} />
            <Ux4gBadge.dot containerColor={UX4GColors.primary} />
            <Ux4gBadge.dot containerColor="rgba(74, 43, 194, 0.4)" />
          </View>

          <View style={{ height: 14 }} />

          {/* Countdown Redirect Text */}
          <Text style={styles.countdownText}>
            Redirecting in {secondsLeft} seconds...
          </Text>
        </View>

        {/* 3. Powered by Digital India Footer */}
        <View style={styles.footer}>
          <Text style={styles.poweredByText}>Powered by -</Text>
          <Image
            source={{ uri: '/Digital_India_logo.svg' }}
            style={styles.digitalIndiaLogo}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: UX4GColors.neutral50, // #FAFAFA
  },
  emblemLogo: {
    width: 32,
    height: 32,
  },
  headerDivider: {
    width: 1,
    height: 24,
    backgroundColor: UX4GColors.neutral300,
    marginHorizontal: 4,
  },
  unionLogo: {
    width: 32,
    height: 32,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  content: {
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
  },
  successBadgeOuter: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: UX4GColors.green100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successBadgeInner: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: UX4GColors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkIcon: {
    color: UX4GColors.neutral0,
    fontSize: 20,
    fontWeight: '700',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: -0.3,
    color: UX4GColors.green700,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: UX4GColors.neutral500,
    textAlign: 'center',
  },
  dotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  countdownText: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    color: UX4GColors.neutral400,
    textAlign: 'center',
  },
  footer: {
    marginTop: 32,
    alignItems: 'center',
    gap: 6,
    paddingBottom: 8,
  },
  poweredByText: {
    fontSize: 11,
    fontWeight: '400',
    color: UX4GColors.neutral400,
  },
  digitalIndiaLogo: {
    width: 70,
    height: 26,
  },
});`;
  }, [variant]);

  // Live interactive mockup using our actual components
  const renderLiveMockup = () => {
    const isCard = variant === 'card';
    const bgScreenColor = isCard ? colors.cardScreenBg : colors.defaultScreenBg;

    return (
      <div
        style={{
          width: '100%',
          maxWidth: 380,
          borderRadius: 24,
          overflow: 'hidden',
          boxShadow: isDark
            ? '0 12px 32px rgba(0, 0, 0, 0.6), 0 0 0 1px #333333'
            : '0 12px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px #E5E7EB',
          backgroundColor: bgScreenColor,
          display: 'flex',
          flexDirection: 'column',
          minHeight: 680,
          margin: '0 auto',
        }}
      >
        {/* Top Header Bar with Bottom Elevation Shadow & Divider */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            boxShadow: isDark
              ? '0 3px 10px rgba(0, 0, 0, 0.5)'
              : '0 3px 12px rgba(0, 0, 0, 0.08)',
          }}
        >
          <Ux4gAppHeader
            title=""
            variant="light"
            elevation={2}
            useSafeArea={false}
            height={56}
            horizontalPadding={16}
            leadingSpacing={8}
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
                  height: 24,
                  backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
                  margin: '0 4px',
                }}
              />,
              <img
                key="union"
                src="/Union.svg"
                alt="Union Logo"
                style={{
                  height: 32,
                  filter: isDark ? 'brightness(1.5)' : 'none',
                }}
              />,
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

        {/* Body Container */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: isCard ? '20px 16px 20px 16px' : '40px 20px 24px 20px',
          }}
        >
          {/* Card or Flat Content Container */}
          <div
            style={{
              backgroundColor: isCard ? colors.cardBg : 'transparent',
              borderRadius: isCard ? 16 : 0,
              padding: isCard ? '28px 20px 28px 20px' : '0',
              boxShadow: isCard
                ? isDark
                  ? '0 6px 20px rgba(0,0,0,0.4)'
                  : '0 6px 20px rgba(74, 43, 194, 0.08)'
                : 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {/* Success Badge - Concentric Circles + Check Icon */}
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 32,
                backgroundColor: colors.successLight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  backgroundColor: colors.successMid,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: 22,
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                  }}
                >
                  check
                </span>
              </div>
            </div>

            {/* Title */}
            <h2
              style={{
                fontSize: 24,
                fontWeight: 700,
                lineHeight: '28px',
                letterSpacing: '-0.3px',
                color: colors.successDark,
                margin: '24px 0 0 0',
              }}
            >
              Signed in successfully!
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 14,
                fontWeight: 400,
                lineHeight: '20px',
                color: colors.subtleText,
                margin: '8px 0 0 0',
              }}
            >
              You are being redirected to your service
            </p>

            {/* 3-Dot Status Indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                marginTop: isCard ? 24 : 28,
              }}
            >
              <Ux4gBadge.dot containerColor={colors.primary} />
              <Ux4gBadge.dot containerColor={colors.primary} />
              <Ux4gBadge.dot
                containerColor={
                  isDark ? 'rgba(163, 145, 255, 0.4)' : 'rgba(74, 43, 194, 0.4)'
                }
              />
            </div>

            {/* Redirecting countdown */}
            <p
              style={{
                fontSize: 13,
                fontWeight: 400,
                lineHeight: '18px',
                color: colors.mutedText,
                margin: isCard ? '18px 0 0 0' : '14px 0 0 0',
              }}
            >
              Redirecting in {secondsLeft} seconds...
            </p>
          </div>

          {/* Powered by Digital India Footer */}
          <div
            style={{
              textAlign: 'center',
              marginTop: 24,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
              paddingBottom: 8,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 400,
                lineHeight: '14px',
                color: colors.mutedText,
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
    );
  };

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Signed in success</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Success confirmation screen shown after a successful sign-in. Includes a green check badge, a 3-second redirect countdown, and a 3-dot status indicator built with Ux4gBadge.dot. Mobile-sized layout (360px).
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
                {/* Variant Switch in Code Tab as well */}
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
                    Card style
                  </button>
                </div>

                <CodeBlock
                  code={codeString}
                  language="TSX"
                  filename={variant === 'card' ? 'SignedInSuccessCardPattern.tsx' : 'SignedInSuccessDefaultPattern.tsx'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignedInSuccessDoc;
