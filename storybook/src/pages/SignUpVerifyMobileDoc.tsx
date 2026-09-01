import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gOtpInput } from '../../../src/components/otp-input/OtpInput';
import { Ux4gButton } from '../../../src/components/button/Button';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface SignUpVerifyMobileDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const SignUpVerifyMobileDoc: React.FC<SignUpVerifyMobileDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [otp, setOtp] = useState<string>('');
  const [resendNonce, setResendNonce] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  // Exact color tokens from UX4G Flutter Design System (Ux4gColors & Ux4gPalette)
  const colors = useMemo(() => {
    return {
      title: isDark ? UX4GColors.neutral50 : UX4GColors.gray900,
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      mutedText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      cardBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      cardScreenBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
      defaultScreenBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral50,
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      primary: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      buttonBg: isDark ? UX4GColors.primary300 : UX4GColors.primary,
    };
  }, [isDark]);

  const handleVerify = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert(otp.length === 6 ? `OTP Verified: ${otp}` : 'Please enter complete 6-digit OTP.');
    }, 1200);
  };

  // Clean React Native TSX code snippet matching Flutter signUpStep2Component
  const codeString = useMemo(() => {
    if (variant === 'card') {
      return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gOtpInput,
  Ux4gButton,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const SignUpVerifyMobileCardPattern = () => {
  const [otp, setOtp] = useState('');
  const [resendNonce, setResendNonce] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1200);
  };

  return (
    <View style={styles.screen}>
      {/* 1. Official Government Header */}
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

      {/* 2. Elevated Card Layout */}
      <View style={styles.cardContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.card}>
            {/* Title */}
            <Text style={styles.cardTitle}>Verify your mobile</Text>
            {/* Subtitle */}
            <Text style={styles.cardSubtitle}>
              Enter the 6-digit OTP sent to +91 98765 XXXXX
            </Text>

            <View style={{ height: 24 }} />

            {/* 6-Digit OTP Input with 60s Resend Timer */}
            <Ux4gOtpInput
              key={\`su2c_\${resendNonce}\`}
              length={6}
              value={otp}
              onChanged={setOtp}
              boxSize={44}
              gap={8}
              showSeparator={false}
              captionVariant="resendTimer"
              captionLeadingText="Didn't receive OTP?"
              captionTrailingText="Resend OTP"
              autoCountdownSeconds={60}
              onCaptionTrailingTap={() => {
                setOtp('');
                setResendNonce((prev) => prev + 1);
              }}
            />

            <View style={{ height: 24 }} />

            {/* Primary CTA Button */}
            <Ux4gButton
              text="Verify OTP"
              variant="primary"
              size="large"
              isLoading={isLoading}
              onPress={handleVerify}
              style={styles.verifyButton}
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
  screen: {
    flex: 1,
    backgroundColor: UX4GColors.neutral0,
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
  cardContainer: {
    flex: 1,
    backgroundColor: UX4GColors.primary100, // #DCD4FF
  },
  scrollContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: UX4GColors.neutral0,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 26.4,
    letterSpacing: -0.3,
    color: '#111827',
  },
  cardSubtitle: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18.2,
    color: UX4GColors.neutral500,
    marginTop: 6,
  },
  verifyButton: {
    backgroundColor: UX4GColors.primary,
    height: 48,
    borderRadius: 8,
    width: '100%',
  },
  footer: {
    paddingVertical: 14,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  poweredByText: {
    fontSize: 11,
    color: UX4GColors.neutral400,
  },
  digitalIndiaLogo: {
    height: 24,
    width: 80,
  },
});`;
    }

    return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gOtpInput,
  Ux4gButton,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const SignUpVerifyMobileDefaultPattern = () => {
  const [otp, setOtp] = useState('');
  const [resendNonce, setResendNonce] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1200);
  };

  return (
    <View style={styles.screen}>
      {/* 1. Official Government Header */}
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

      {/* 2. Main Flat Layout */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          {/* Title */}
          <Text style={styles.title}>Verify your mobile</Text>
          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Enter the 6-digit OTP sent to +91 98765 XXXXX
          </Text>

          <View style={{ height: 28 }} />

          {/* 6-Digit OTP Input with 60s Resend Timer */}
          <Ux4gOtpInput
            key={\`su2_\${resendNonce}\`}
            length={6}
            value={otp}
            onChanged={setOtp}
            boxSize={44}
            gap={8}
            showSeparator={false}
            captionVariant="resendTimer"
            captionLeadingText="Didn't receive OTP?"
            captionTrailingText="Resend OTP"
            autoCountdownSeconds={60}
            onCaptionTrailingTap={() => {
              setOtp('');
              setResendNonce((prev) => prev + 1);
            }}
          />

          <View style={{ height: 28 }} />

          {/* Primary CTA Button */}
          <Ux4gButton
            text="Verify OTP"
            variant="primary"
            size="large"
            isLoading={isLoading}
            onPress={handleVerify}
            style={styles.verifyButton}
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
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: UX4GColors.neutral50,
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
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    lineHeight: 31.2,
    letterSpacing: -0.3,
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19.6,
    color: UX4GColors.neutral500,
    marginTop: 6,
  },
  verifyButton: {
    backgroundColor: UX4GColors.primary,
    height: 48,
    borderRadius: 8,
    width: '100%',
  },
  footer: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  poweredByText: {
    fontSize: 11,
    color: UX4GColors.neutral400,
  },
  digitalIndiaLogo: {
    height: 24,
    width: 80,
  },
});`;
  }, [variant]);

  // Interactive Live Mockup for Web Preview
  const renderLiveMockup = () => {
    const isCard = variant === 'card';
    const bgScreenColor = isCard ? colors.cardScreenBg : colors.defaultScreenBg;

    return (
      <div
        style={{
          width: 360,
          minHeight: 760,
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
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            boxShadow: isDark
              ? '0 2px 8px rgba(0, 0, 0, 0.4)'
              : '0 2px 8px rgba(0, 0, 0, 0.04)',
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
            <div style={{ padding: '16px', flex: 1 }}>
              {/* Elevated Floating Card */}
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: '20px 20px 24px 20px',
                  boxShadow: isDark
                    ? '0 4px 16px rgba(0, 0, 0, 0.4)'
                    : '0 4px 16px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <h2
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    lineHeight: 1.2,
                    letterSpacing: '-0.3px',
                    color: colors.title,
                    margin: 0,
                    marginBottom: 6,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Verify your mobile
                </h2>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 400,
                    lineHeight: 1.4,
                    color: colors.subtleText,
                    margin: 0,
                    marginBottom: 24,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Enter the 6-digit OTP sent to +91 98765 XXXXX
                </p>

                {/* OTP Input Component */}
                <Ux4gOtpInput
                  key={`su2c_${resendNonce}`}
                  length={6}
                  value={otp}
                  onChanged={setOtp}
                  boxSize={44}
                  gap={8}
                  showSeparator={false}
                  captionVariant="resendTimer"
                  captionLeadingText="Didn't receive OTP?"
                  captionTrailingText="Resend OTP"
                  autoCountdownSeconds={60}
                  onCaptionTrailingTap={() => {
                    setOtp('');
                    setResendNonce((prev) => prev + 1);
                  }}
                />

                <div style={{ height: 24 }} />

                {/* Verify OTP CTA */}
                <Ux4gButton
                  text="Verify OTP"
                  variant="primary"
                  size="large"
                  isLoading={isLoading}
                  onPress={handleVerify}
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
                  color: UX4GColors.neutral400,
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
            <div style={{ padding: '24px 20px 0 20px', flex: 1 }}>
              <h2
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: '-0.3px',
                  color: colors.title,
                  margin: 0,
                  marginBottom: 6,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Verify your mobile
              </h2>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: colors.subtleText,
                  margin: 0,
                  marginBottom: 28,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Enter the 6-digit OTP sent to +91 98765 XXXXX
              </p>

              {/* OTP Input Component */}
              <Ux4gOtpInput
                key={`su2_${resendNonce}`}
                length={6}
                value={otp}
                onChanged={setOtp}
                boxSize={44}
                gap={8}
                showSeparator={false}
                captionVariant="resendTimer"
                captionLeadingText="Didn't receive OTP?"
                captionTrailingText="Resend OTP"
                autoCountdownSeconds={60}
                onCaptionTrailingTap={() => {
                  setOtp('');
                  setResendNonce((prev) => prev + 1);
                }}
              />

              <div style={{ height: 28 }} />

              {/* Verify OTP CTA */}
              <Ux4gButton
                text="Verify OTP"
                variant="primary"
                size="large"
                isLoading={isLoading}
                onPress={handleVerify}
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
                  color: UX4GColors.neutral400,
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
        )}
      </div>
    );
  };

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Verify your mobile</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          OTP verification screen with 6 single-digit boxes, a built-in 60-second resend countdown, and a Verify OTP action.
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
