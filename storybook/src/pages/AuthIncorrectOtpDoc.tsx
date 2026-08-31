import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gOtpInput } from '../../../src/components/otp-input/OtpInput';
import { Ux4gButton } from '../../../src/components/button/Button';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface AuthIncorrectOtpDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const AuthIncorrectOtpDoc: React.FC<AuthIncorrectOtpDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [otpValue, setOtpValue] = useState<string>('555555');

  // Exact Color Tokens from Flutter Design System (pattern_stories.dart lines 30-38)
  const colors = useMemo(() => {
    return {
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      defaultScreenBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      cardScreenBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
      cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      title: isDark ? UX4GColors.neutral50 : UX4GColors.gray900,
      subtitle: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      mutedText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
      textPrimary: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900,
    };
  }, [isDark]);

  // Exact TSX Code Strings matching Flutter Widgetbook _authIncorrectOtpCode & _authIncorrectOtpCardCode
  const codeString = useMemo(() => {
    if (variant === 'card') {
      return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gOtpInput,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const AuthIncorrectOtpCardPattern = ({ isDark = false }: { isDark?: boolean }) => {
  const [otp, setOtp] = useState('555555');

  return (
    <View style={[styles.container, { backgroundColor: isDark ? UX4GColors.primary800 : UX4GColors.primary100 }]}>
      {/* App Header */}
      <Ux4gAppHeader
        variant={isDark ? 'dark' : 'light'}
        leadingWidgets={[
          <View style={styles.headerLeading} key="leading">
            <Image
              source={{ uri: 'https://ux4g.gov.in/assets/img/emblem-dark.png' }}
              style={[styles.emblemImage, isDark && { tintColor: '#FFFFFF' }]}
              resizeMode="contain"
            />
            <View style={[styles.headerDivider, { backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300 }]} />
            <Text style={[styles.unionText, { color: isDark ? UX4GColors.neutral0 : UX4GColors.primary }]}>
              UNION
            </Text>
          </View>
        ]}
      />
      <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />

      {/* Soft-purple gap & floating white card */}
      <View style={styles.cardWrapper}>
        <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50 }]}>
          <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
            OTP Verification
          </Text>
          <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            Enter the 6-digit code sent to +91 98XXX XXXXX
          </Text>

          {/* OTP Input - Error Status */}
          <Ux4gOtpInput
            length={6}
            value={otp}
            onChanged={setOtp}
            status="error"
            captionVariant="attemptWithTimer"
            captionLeadingText="Incorrect OTP"
            captionTrailingText="Resend OTP in 00:17"
            boxSize={44}
            gap={8}
            showSeparator={false}
          />

          <View style={styles.buttonSpacing} />

          {/* Verify Button */}
          <Ux4gButton
            text="Verify OTP"
            onPress={() => alert('Verifying OTP...')}
            size="large"
            height={48}
            width="100%"
          />

          <View style={styles.ghostBtnSpacing} />

          {/* Change mobile number ghost button */}
          <View style={styles.centerGhostBtn}>
            <Ux4gButton
              text="Change mobile number"
              onPress={() => alert('Changing mobile number...')}
              variant="ghost"
              size="small"
              height={48}
            />
          </View>
        </View>
      </View>

      {/* Powered by - Digital India footer */}
      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
          Powered by -
        </Text>
        <Image
          source={{ uri: 'https://ux4g.gov.in/assets/img/digital-india-logo.png' }}
          style={[styles.digitalIndiaLogo, isDark && { tintColor: '#FFFFFF' }]}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerLeading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emblemImage: {
    height: 32,
    width: 24,
  },
  headerDivider: {
    width: 1,
    height: 24,
    marginHorizontal: 8,
  },
  unionText: {
    fontSize: 16,
    fontWeight: '700',
  },
  cardWrapper: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  card: {
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 28.8,
    letterSpacing: -0.3,
    marginBottom: 8,
    fontFamily: 'Inter',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18.2,
    marginBottom: 20,
    fontFamily: 'Inter',
  },
  buttonSpacing: {
    height: 20,
  },
  ghostBtnSpacing: {
    height: 4,
  },
  centerGhostBtn: {
    alignItems: 'center',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  footerText: {
    fontSize: 11,
    fontWeight: '400',
    marginBottom: 4,
    fontFamily: 'Inter',
  },
  digitalIndiaLogo: {
    height: 22,
    width: 100,
  },
});`;
    }

    return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gOtpInput,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const AuthIncorrectOtpDefaultPattern = ({ isDark = false }: { isDark?: boolean }) => {
  const [otp, setOtp] = useState('555555');

  return (
    <View style={[styles.container, { backgroundColor: isDark ? UX4GColors.gray900 : UX4GColors.neutral0 }]}>
      {/* App Header */}
      <Ux4gAppHeader
        variant={isDark ? 'dark' : 'light'}
        leadingWidgets={[
          <View style={styles.headerLeading} key="leading">
            <Image
              source={{ uri: 'https://ux4g.gov.in/assets/img/emblem-dark.png' }}
              style={[styles.emblemImage, isDark && { tintColor: '#FFFFFF' }]}
              resizeMode="contain"
            />
            <View style={[styles.headerDivider, { backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300 }]} />
            <Text style={[styles.unionText, { color: isDark ? UX4GColors.neutral0 : UX4GColors.primary }]}>
              UNION
            </Text>
          </View>
        ]}
      />
      <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />

      {/* Screen Content */}
      <View style={styles.content}>
        {/* Back Button */}
        <Ux4gButton
          text="Back"
          onPress={() => {}}
          variant="ghost"
          size="small"
          height={48}
        />
        <View style={styles.gap24} />

        <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
          OTP Verification
        </Text>
        <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
          Enter the 6-digit code sent to +91 98XXX XXXXX
        </Text>
        <View style={styles.gap24} />

        {/* OTP Input - Error Status */}
        <Ux4gOtpInput
          length={6}
          value={otp}
          onChanged={setOtp}
          status="error"
          captionVariant="attemptWithTimer"
          captionLeadingText="Incorrect OTP"
          captionTrailingText="Resend OTP in 00:17"
          boxSize={44}
          gap={8}
          showSeparator={false}
        />
      </View>

      {/* Bottom Actions */}
      <View style={styles.bottomSection}>
        <Ux4gButton
          text="Verify OTP"
          onPress={() => alert('Verifying OTP...')}
          size="large"
          height={48}
          width="100%"
        />

        {/* Digital India Footer */}
        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            Powered by -
          </Text>
          <Image
            source={{ uri: 'https://ux4g.gov.in/assets/img/digital-india-logo.png' }}
            style={[styles.digitalIndiaLogo, isDark && { tintColor: '#FFFFFF' }]}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerLeading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emblemImage: {
    height: 32,
    width: 24,
  },
  headerDivider: {
    width: 1,
    height: 24,
    marginHorizontal: 8,
  },
  unionText: {
    fontSize: 16,
    fontWeight: '700',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
    flex: 1,
  },
  gap24: {
    height: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 28.8,
    letterSpacing: -0.3,
    marginBottom: 8,
    fontFamily: 'Inter',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18.2,
    fontFamily: 'Inter',
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  footer: {
    alignItems: 'center',
    paddingTop: 16,
  },
  footerText: {
    fontSize: 11,
    fontWeight: '400',
    marginBottom: 4,
    fontFamily: 'Inter',
  },
  digitalIndiaLogo: {
    height: 22,
    width: 100,
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
        {/* Brand Header */}
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

        {/* Main Body */}
        {isCard ? (
          /* Card Style Variant */
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: colors.cardScreenBg,
              justifyContent: 'space-between',
              padding: '0 16px 20px 16px',
            }}
          >
            <div>
              {/* Soft purple gap above card */}
              <div style={{ height: 16 }} />

              {/* Floating Card Container */}
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: '24px 20px',
                  boxShadow: isDark
                    ? '0 4px 16px rgba(0, 0, 0, 0.4)'
                    : '0 4px 16px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <h2
                  style={{
                    fontSize: 24,
                    fontWeight: 800,
                    lineHeight: 1.2,
                    letterSpacing: '-0.3px',
                    color: colors.title,
                    margin: 0,
                    marginBottom: 8,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  OTP Verification
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 1.3,
                    color: colors.subtitle,
                    margin: 0,
                    marginBottom: 20,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Enter the 6-digit code sent to +91 98XXX XXXXX
                </p>

                {/* OTP Input with Error Status */}
                <Ux4gOtpInput
                  length={6}
                  value={otpValue}
                  onChanged={setOtpValue}
                  status="error"
                  captionVariant="attemptWithTimer"
                  captionLeadingText="Incorrect OTP"
                  captionTrailingText="Resend OTP in 00:17"
                  boxSize={44}
                  gap={8}
                  showSeparator={false}
                />

                <div style={{ height: 20 }} />

                {/* Verify Button */}
                <Ux4gButton
                  text="Verify OTP"
                  onPress={() => alert('Verifying OTP...')}
                  size="large"
                  height={48}
                  width="100%"
                />

                <div style={{ height: 4 }} />

                {/* Change Mobile Number Ghost Button */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Ux4gButton
                    text="Change mobile number"
                    onPress={() => alert('Changing mobile number...')}
                    variant="ghost"
                    size="small"
                    height={48}
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                paddingTop: 16,
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 400, color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500, fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
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
        ) : (
          /* Default Layout Variant */
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '24px 20px 20px 20px',
              backgroundColor: colors.defaultScreenBg,
            }}
          >
            <div>
              {/* Back Button */}
              <div style={{ alignSelf: 'flex-start', marginBottom: 24 }}>
                <Ux4gButton
                  text="Back"
                  onPress={() => {}}
                  variant="ghost"
                  size="small"
                  height={48}
                  leadingIcon={
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                      arrow_back
                    </span>
                  }
                />
              </div>

              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: '-0.3px',
                  color: colors.title,
                  margin: 0,
                  marginBottom: 8,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                OTP Verification
              </h2>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.3,
                  color: colors.subtitle,
                  margin: 0,
                  marginBottom: 24,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Enter the 6-digit code sent to +91 98XXX XXXXX
              </p>

              {/* OTP Input with Error Status */}
              <Ux4gOtpInput
                length={6}
                value={otpValue}
                onChanged={setOtpValue}
                status="error"
                captionVariant="attemptWithTimer"
                captionLeadingText="Incorrect OTP"
                captionTrailingText="Resend OTP in 00:17"
                boxSize={44}
                gap={8}
                showSeparator={false}
              />
            </div>

            {/* Bottom Actions */}
            <div>
              <div style={{ marginBottom: 12 }}>
                <Ux4gButton
                  text="Verify OTP"
                  onPress={() => alert('Verifying OTP...')}
                  size="large"
                  height={48}
                  width="100%"
                />
              </div>

              {/* Footer */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 4,
                  paddingTop: 8,
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 400, color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500, fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
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
        )}
      </div>
    );
  };

  return (
    <div className={`wb-page ${isDark ? 'dark' : ''}`}>
      {/* Header Bar */}
      <div className="wb-header">
        <div>
          <div className="wb-breadcrumb">
            <span>Patterns</span> / <span>Identity and Access</span> / <span>Auth errors and lockout</span> / <span className="active">OTP error — incorrect entry</span>
          </div>
          <h1 className="wb-title">OTP error — incorrect entry</h1>
          <p className="wb-subtitle">
            OTP verification screen showing the error state — 6 boxes filled with incorrect code rendered with red borders via status error, plus inline Incorrect OTP caption with live resend countdown.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
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
                  filename={variant === 'card' ? 'AuthIncorrectOtpCardPattern.tsx' : 'AuthIncorrectOtpDefaultPattern.tsx'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthIncorrectOtpDoc;
