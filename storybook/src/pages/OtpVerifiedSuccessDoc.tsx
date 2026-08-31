import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gOtpInput } from '../../../src/components/otp-input/OtpInput';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface OtpVerifiedSuccessDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const OtpVerifiedSuccessDoc: React.FC<OtpVerifiedSuccessDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');

  // Exact color tokens from UX4G Flutter Design System
  const colors = useMemo(() => {
    return {
      title: isDark ? UX4GColors.neutral50 : UX4GColors.gray900,
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      mutedText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      cardBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      cardScreenBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
      defaultScreenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      primary: UX4GColors.primary,
      successMid: UX4GColors.green,
      successLight: UX4GColors.green100,
    };
  }, [isDark]);

  // Clean React Native TSX code snippet matching Flutter otpVerifiedSuccessComponent
  const codeString = useMemo(() => {
    if (variant === 'card') {
      return `import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gOtpInput,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-design-system';
import Svg, { Path } from 'react-native-svg';

const CheckIcon = ({ size = 22, color = '#FFFFFF' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
      fill={color}
    />
  </Svg>
);

export const OtpVerifiedSuccessCardPattern = ({ isDark = false }: { isDark?: boolean }) => {
  return (
    <View style={[styles.container, { backgroundColor: isDark ? UX4GColors.primary800 : UX4GColors.primary100 }]}>
      {/* App Header */}
      <Ux4gAppHeader
        variant={isDark ? 'dark' : 'light'}
        leadingWidgets={[
          <View style={styles.headerLeading} key="leading">
            <Image
              source={{ uri: 'https://ux4g.gov.in/assets/img/emblem-dark.png' }}
              style={styles.emblemImage}
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

      {/* Floating Card View */}
      <View style={styles.cardWrapper}>
        <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.gray900 : UX4GColors.neutral0 }]}>
          {/* Success Badge: Concentric Circles */}
          <View style={styles.successOuterCircle}>
            <View style={styles.successInnerCircle}>
              <CheckIcon size={22} color="#FFFFFF" />
            </View>
          </View>

          {/* Title */}
          <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
            Verified!
          </Text>

          {/* Subtitle */}
          <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            Redirecting you to your dashboard...
          </Text>

          {/* OTP Input with Built-in Success Status & Caption */}
          <Ux4gOtpInput
            length={6}
            value="555555"
            onChanged={() => {}}
            status="success"
            captionVariant="success"
            captionText="Verification successful"
            boxSize={44}
            gap={8}
            showSeparator={false}
          />
        </View>
      </View>

      {/* Digital India Footer */}
      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400 }]}>
          Powered by -
        </Text>
        <Image
          source={{ uri: 'https://ux4g.gov.in/assets/img/digital-india.png' }}
          style={styles.digitalIndiaLogo}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  headerLeading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emblemImage: {
    width: 32,
    height: 32,
  },
  headerDivider: {
    width: 1,
    height: 24,
    marginHorizontal: 10,
  },
  unionText: {
    fontSize: 16,
    fontWeight: '700',
  },
  cardWrapper: {
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  card: {
    paddingVertical: 28,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 2,
  },
  successOuterCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: UX4GColors.green100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  successInnerCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: UX4GColors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: -0.3,
    lineHeight: 26,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 24,
    textAlign: 'center',
  },
  footer: {
    marginTop: 'auto',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 8,
  },
  footerText: {
    fontSize: 11,
    marginBottom: 6,
  },
  digitalIndiaLogo: {
    width: 90,
    height: 22,
  },
});`;
    }

    return `import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gOtpInput,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-design-system';
import Svg, { Path } from 'react-native-svg';

const CheckIcon = ({ size = 22, color = '#FFFFFF' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
      fill={color}
    />
  </Svg>
);

export const OtpVerifiedSuccessDefaultPattern = ({ isDark = false }: { isDark?: boolean }) => {
  return (
    <View style={[styles.container, { backgroundColor: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50 }]}>
      {/* App Header */}
      <Ux4gAppHeader
        variant={isDark ? 'dark' : 'light'}
        leadingWidgets={[
          <View style={styles.headerLeading} key="leading">
            <Image
              source={{ uri: 'https://ux4g.gov.in/assets/img/emblem-dark.png' }}
              style={styles.emblemImage}
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

      {/* Main Content Area */}
      <View style={styles.content}>
        {/* Success Badge: Concentric Circles */}
        <View style={styles.successOuterCircle}>
          <View style={styles.successInnerCircle}>
            <CheckIcon size={22} color="#FFFFFF" />
          </View>
        </View>

        {/* Title */}
        <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
          Verified!
        </Text>

        {/* Subtitle */}
        <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
          Redirecting you to your dashboard...
        </Text>

        {/* OTP Input with Built-in Success Status & Caption */}
        <Ux4gOtpInput
          length={6}
          value="555555"
          onChanged={() => {}}
          status="success"
          captionVariant="success"
          captionText="Verification successful"
          boxSize={44}
          gap={8}
          showSeparator={false}
        />
      </View>

      {/* Digital India Footer */}
      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400 }]}>
          Powered by -
        </Text>
        <Image
          source={{ uri: 'https://ux4g.gov.in/assets/img/digital-india.png' }}
          style={styles.digitalIndiaLogo}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  headerLeading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emblemImage: {
    width: 32,
    height: 32,
  },
  headerDivider: {
    width: 1,
    height: 24,
    marginHorizontal: 10,
  },
  unionText: {
    fontSize: 16,
    fontWeight: '700',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 64,
    alignItems: 'center',
  },
  successOuterCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: UX4GColors.green100,
    justify.content: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  successInnerCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: UX4GColors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: -0.3,
    lineHeight: 26,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 24,
    textAlign: 'center',
  },
  footer: {
    marginTop: 'auto',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 8,
  },
  footerText: {
    fontSize: 11,
    marginBottom: 6,
  },
  digitalIndiaLogo: {
    width: 90,
    height: 22,
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

        {variant === 'card' ? (
          /* Card Variant */
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '32px 16px 20px 16px',
            }}
          >
            <div
              style={{
                backgroundColor: colors.cardBg,
                borderRadius: 16,
                padding: '28px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: isDark ? 'none' : '0 4px 16px rgba(0,0,0,0.04)',
                border: `1px solid ${colors.border}`,
              }}
            >
              {/* Concentric Circles Success Badge */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  backgroundColor: colors.successLight,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: colors.successMid,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#FFFFFF' }}>
                    check
                  </span>
                </div>
              </div>

              {/* Title */}
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: colors.title,
                  letterSpacing: '-0.3px',
                  lineHeight: '26px',
                  marginBottom: 8,
                  textAlign: 'center',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Verified!
              </div>

              {/* Subtitle */}
              <div
                style={{
                  fontSize: 14,
                  lineHeight: '18px',
                  color: colors.subtleText,
                  marginBottom: 24,
                  textAlign: 'center',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Redirecting you to your dashboard...
              </div>

              {/* OTP Input displaying 555555 & Success State */}
              <Ux4gOtpInput
                length={6}
                value="555555"
                onChanged={() => {}}
                status="success"
                captionVariant="success"
                captionText="Verification successful"
                boxSize={44}
                gap={8}
                showSeparator={false}
              />
            </div>

            {/* Digital India Footer */}
            <div
              style={{
                textAlign: 'center',
                marginTop: 16,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  lineHeight: '14px',
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
                  height: 22,
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
              padding: '64px 20px 20px 20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Concentric Circles Success Badge */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  backgroundColor: colors.successLight,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: colors.successMid,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#FFFFFF' }}>
                    check
                  </span>
                </div>
              </div>

              {/* Title */}
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: colors.title,
                  letterSpacing: '-0.3px',
                  lineHeight: '26px',
                  marginBottom: 8,
                  textAlign: 'center',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Verified!
              </div>

              {/* Subtitle */}
              <div
                style={{
                  fontSize: 14,
                  lineHeight: '18px',
                  color: colors.subtleText,
                  marginBottom: 24,
                  textAlign: 'center',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Redirecting you to your dashboard...
              </div>

              {/* OTP Input displaying 555555 & Success State */}
              <Ux4gOtpInput
                length={6}
                value="555555"
                onChanged={() => {}}
                status="success"
                captionVariant="success"
                captionText="Verification successful"
                boxSize={44}
                gap={8}
                showSeparator={false}
              />
            </div>

            {/* Digital India Footer */}
            <div
              style={{
                textAlign: 'center',
                marginTop: 16,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  lineHeight: '14px',
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
                  height: 22,
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
    <div className={`wb-page ${isDark ? 'dark' : ''}`}>
      <div className="wb-header">
        <div>
          <div className="wb-breadcrumb">
            <span>Patterns</span> / <span>Identity and Access</span> / <span>OTP Verification</span> / <span className="active">OTP verified — success</span>
          </div>
          <h1 className="wb-title">OTP verified — success</h1>
          <p className="wb-subtitle">
            OTP verified — success state shown right after a correct OTP is entered, before automatically redirecting to the user dashboard.
          </p>
        </div>
      </div>

      <div className="wb-body">
        <div className="wb-main">
          {/* Header Tab Bar: Preview / Code */}
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
                  filename={variant === 'card' ? 'OtpVerifiedSuccessCardPattern.tsx' : 'OtpVerifiedSuccessDefaultPattern.tsx'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerifiedSuccessDoc;
