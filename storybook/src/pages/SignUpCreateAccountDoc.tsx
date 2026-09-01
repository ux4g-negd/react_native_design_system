import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gInputField } from '../../../src/components/input-field/InputField';
import { Ux4gButton } from '../../../src/components/button/Button';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface SignUpCreateAccountDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const SignUpCreateAccountDoc: React.FC<SignUpCreateAccountDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [mobile, setMobile] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Colors mapping matching Flutter Design System
  const colors = useMemo(() => {
    return {
      title: isDark ? UX4GColors.neutral50 : UX4GColors.gray900,
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      cardBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      cardScreenBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
      defaultScreenBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral50,
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      primary: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      buttonBg: isDark ? UX4GColors.primary300 : UX4GColors.primary,
    };
  }, [isDark]);

  // Clean React Native TSX code snippet matching Flutter signUpStep1Component
  const codeString = useMemo(() => {
    if (variant === 'card') {
      return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gInputField,
  Ux4gButton,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const SignUpCreateAccountCardPattern = () => {
  const [mobile, setMobile] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOtp = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
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

      {/* 2. Primary Layout with Elevated Card */}
      <View style={styles.cardContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.card}>
            {/* Title */}
            <Text style={styles.cardTitle}>Create your account</Text>
            {/* Subtitle */}
            <Text style={styles.cardSubtitle}>
              Enter your mobile number to get started
            </Text>

            <View style={{ height: 20 }} />

            {/* Mobile Number Input */}
            <Ux4gInputField
              label="Mobile Number"
              placeholder="Enter mobile number"
              value={mobile}
              onValueChange={setMobile}
              prefixText="+91"
              type="number"
              maxLength={10}
            />

            <View style={{ height: 16 }} />

            {/* Primary CTA Button */}
            <Ux4gButton
              text="Send OTP"
              variant="primary"
              size="large"
              isLoading={isLoading}
              onPress={handleSendOtp}
              style={styles.sendOtpButton}
            />

            <View style={{ height: 16 }} />

            {/* Sign In Link */}
            <TouchableOpacity
              style={styles.signInLinkContainer}
              onPress={() => console.log('Sign in')}
            >
              <Text style={styles.signInText}>Already have an account? Sign in</Text>
            </TouchableOpacity>
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
    fontWeight: '700',
    lineHeight: 26.4,
    letterSpacing: -0.3,
    color: '#111827',
  },
  cardSubtitle: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16.9,
    color: UX4GColors.neutral500,
    marginTop: 6,
  },
  sendOtpButton: {
    backgroundColor: UX4GColors.primary,
    height: 48,
    borderRadius: 8,
    width: '100%',
  },
  signInLinkContainer: {
    alignItems: 'center',
  },
  signInText: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: -0.1,
    color: UX4GColors.primary,
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
  TouchableOpacity,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gInputField,
  Ux4gButton,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const SignUpCreateAccountDefaultPattern = () => {
  const [mobile, setMobile] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOtp = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
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

      {/* 2. Main Flat Phone Layout */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          {/* Title */}
          <Text style={styles.title}>Create your account</Text>
          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Enter your mobile number to get started
          </Text>

          <View style={{ height: 24 }} />

          {/* Mobile Number Input */}
          <Ux4gInputField
            label="Mobile Number"
            placeholder="Enter mobile number"
            value={mobile}
            onValueChange={setMobile}
            prefixText="+91"
            type="number"
            maxLength={10}
          />

          <View style={{ height: 20 }} />

          {/* Primary CTA Button */}
          <Ux4gButton
            text="Send OTP"
            variant="primary"
            size="large"
            isLoading={isLoading}
            onPress={handleSendOtp}
            style={styles.sendOtpButton}
          />

          <View style={{ height: 20 }} />

          {/* Sign In Link */}
          <TouchableOpacity
            style={styles.signInLinkContainer}
            onPress={() => console.log('Sign in')}
          >
            <Text style={styles.signInText}>Already have an account? Sign in</Text>
          </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28.8,
    letterSpacing: -0.3,
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18.2,
    color: UX4GColors.neutral500,
    marginTop: 6,
  },
  sendOtpButton: {
    backgroundColor: UX4GColors.primary,
    height: 48,
    borderRadius: 8,
    width: '100%',
  },
  signInLinkContainer: {
    alignItems: 'center',
  },
  signInText: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.1,
    color: UX4GColors.primary,
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

  const handleSendOtp = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

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
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: '-0.3px',
                    color: colors.title,
                    margin: 0,
                    marginBottom: 6,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Create your account
                </h2>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 400,
                    lineHeight: 1.3,
                    color: colors.subtleText,
                    margin: 0,
                    marginBottom: 20,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Enter your mobile number to get started
                </p>

                {/* Mobile Number Input */}
                <Ux4gInputField
                  label="Mobile Number"
                  placeholder="Enter mobile number"
                  value={mobile}
                  onValueChange={setMobile}
                  prefixText="+91"
                  type="number"
                  maxLength={10}
                />

                <div style={{ height: 16 }} />

                {/* Send OTP CTA */}
                <Ux4gButton
                  text="Send OTP"
                  variant="primary"
                  size="large"
                  isLoading={isLoading}
                  onPress={handleSendOtp}
                  style={{
                    height: 48,
                    borderRadius: 8,
                    width: '100%',
                    backgroundColor: colors.buttonBg,
                  }}
                />

                <div style={{ height: 16 }} />

                {/* Sign In Link */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button
                    type="button"
                    onClick={() => alert('Navigate to Sign In')}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: '8px 12px',
                      cursor: 'pointer',
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: '-0.1px',
                      color: colors.primary,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Already have an account? Sign in
                  </button>
                </div>
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
                  color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral400,
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
                  fontSize: 24,
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: '-0.3px',
                  color: colors.title,
                  margin: 0,
                  marginBottom: 6,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Create your account
              </h2>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.3,
                  color: colors.subtleText,
                  margin: 0,
                  marginBottom: 24,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Enter your mobile number to get started
              </p>

              {/* Mobile Input */}
              <Ux4gInputField
                label="Mobile Number"
                placeholder="Enter mobile number"
                value={mobile}
                onValueChange={setMobile}
                prefixText="+91"
                type="number"
                maxLength={10}
              />

              <div style={{ height: 20 }} />

              {/* Send OTP CTA */}
              <Ux4gButton
                text="Send OTP"
                variant="primary"
                size="large"
                isLoading={isLoading}
                onPress={handleSendOtp}
                style={{
                  height: 48,
                  borderRadius: 8,
                  width: '100%',
                  backgroundColor: colors.buttonBg,
                }}
              />

              <div style={{ height: 20 }} />

              {/* Sign In Link */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  type="button"
                  onClick={() => alert('Navigate to Sign In')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '8px 12px',
                    cursor: 'pointer',
                    fontSize: 15,
                    fontWeight: 700,
                    letterSpacing: '-0.1px',
                    color: colors.primary,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Already have an account? Sign in
                </button>
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
        )}
      </div>
    );
  };

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Create your account</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          First step of the sign-up flow. User enters their +91 mobile number and taps Send OTP. An error banner appears on invalid input.
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
