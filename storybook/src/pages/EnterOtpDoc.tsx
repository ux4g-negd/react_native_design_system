import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { defaultUx4gTypography } from '../../../src/foundation/typography';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gOtpInput } from '../../../src/components/otp-input/OtpInput';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { CodeBlock } from '../components/CodeBlock';

interface EnterOtpDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const EnterOtpDoc: React.FC<EnterOtpDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [otp, setOtp] = useState<string>('');
  const [resendNonce, setResendNonce] = useState<number>(0);

  // Exact color tokens from UX4G Flutter Design System
  const colors = useMemo(() => {
    return {
      title: isDark ? UX4GColors.neutral50 : UX4GColors.gray900, // #FAFAFA / #121212
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500, // #A1A1A1 / #737373
      mutedText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400, // #737373 / #A1A1A1
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200, // #262626 / #E5E5E5
      cardBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0, // #121212 / #FFFFFF
      cardScreenBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100, // #301C7D / #DCD4FF
      defaultScreenBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral50, // #121212 / #FAFAFA
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0, // #121212 / #FFFFFF
      primary: UX4GColors.primary, // #4A2BC2
      primaryLight: UX4GColors.primary300, // #A391FF
      buttonBg: isDark ? UX4GColors.primary300 : UX4GColors.primary, // #A391FF / #4A2BC2
      buttonText: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0, // #171717 / #FFFFFF
      backIcon: isDark ? UX4GColors.primary300 : UX4GColors.primary, // #A391FF / #4A2BC2
    };
  }, [isDark]);

  const handleVerify = () => {
    alert(otp.length === 6 ? `OTP Verified: ${otp}` : 'Please enter all 6 digits of the OTP.');
  };

  // Clean React Native TSX code snippet matching Flutter signInEnterOtpComponent
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
  Ux4gOtpInput,
  Ux4gButton,
  Ux4gDivider,
  Ux4gThemeProvider,
  UX4GColors,
  defaultUx4gTypography,
} from 'ux4g-react-native-design-system';

export const EnterOtpCardPattern = () => {
  const [otp, setOtp] = useState('');
  const [resendNonce, setResendNonce] = useState(0);

  const handleVerify = () => {
    console.log('Verify OTP:', otp);
  };

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
          {/* Back Button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => console.log('Go back')}
          >
            <Text style={styles.backIcon}>←</Text>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          <View style={{ height: 16 }} />

          {/* Title & Subtitle */}
          <Text style={styles.title}>Enter OTP</Text>
          <Text style={styles.subtitle}>Sent to +91 98765 XXXXX</Text>

          <View style={{ height: 20 }} />

          {/* 6-box OTP Input with auto-countdown using actual component */}
          <Ux4gOtpInput
            key={\`otp_card_\${resendNonce}\`}
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
              setResendNonce((n) => n + 1);
            }}
          />

          <View style={{ height: 24 }} />

          {/* Primary CTA: Verify OTP */}
          <Ux4gButton
            text="Verify OTP"
            variant="primary"
            size="large"
            width="100%"
            onPress={handleVerify}
            style={styles.verifyButton}
          />

          <View style={{ height: 12 }} />

          {/* Expiry Note */}
          <Text style={styles.expiryNote}>
            OTP is valid for 10 minutes
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
    padding: 16,
    paddingBottom: 24,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: UX4GColors.neutral0,
    borderRadius: 16,
    padding: 20,
    paddingBottom: 24,
    shadowColor: UX4GColors.neutral1000black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 3,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  backIcon: {
    fontSize: 16,
    color: UX4GColors.primary,
  },
  backText: {
    fontSize: defaultUx4gTypography.lL_default.fontSize,
    fontWeight: '600',
    lineHeight: defaultUx4gTypography.lL_default.lineHeight,
    color: UX4GColors.primary,
  },
  title: {
    fontSize: defaultUx4gTypography.hM_strong.fontSize,
    fontWeight: defaultUx4gTypography.hM_strong.fontWeight,
    lineHeight: defaultUx4gTypography.hM_strong.lineHeight,
    letterSpacing: -0.3,
    color: UX4GColors.gray900,
  },
  subtitle: {
    fontSize: defaultUx4gTypography.bM_default.fontSize,
    fontWeight: defaultUx4gTypography.bM_default.fontWeight,
    lineHeight: defaultUx4gTypography.bM_default.lineHeight,
    color: UX4GColors.neutral500,
    marginTop: 6,
  },
  verifyButton: {
    width: '100%',
    backgroundColor: UX4GColors.primary,
    height: 48,
    borderRadius: 8,
  },
  expiryNote: {
    fontSize: defaultUx4gTypography.bS_default.fontSize,
    fontWeight: defaultUx4gTypography.bS_default.fontWeight,
    lineHeight: defaultUx4gTypography.bS_default.lineHeight,
    color: UX4GColors.neutral500,
    textAlign: 'center',
  },
  footer: {
    marginTop: 24,
    alignItems: 'center',
    gap: 6,
  },
  poweredByText: {
    fontSize: defaultUx4gTypography.lS_default.fontSize,
    color: UX4GColors.neutral500,
  },
  digitalIndiaLogo: {
    width: 70,
    height: 26,
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
  Ux4gOtpInput,
  Ux4gButton,
  Ux4gDivider,
  Ux4gThemeProvider,
  UX4GColors,
  defaultUx4gTypography,
} from 'ux4g-react-native-design-system';

export const EnterOtpDefaultPattern = () => {
  const [otp, setOtp] = useState('');
  const [resendNonce, setResendNonce] = useState(0);

  const handleVerify = () => {
    console.log('Verify OTP:', otp);
  };

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

      {/* 2. Main Flat Layout */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          {/* Back Button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => console.log('Go back')}
          >
            <Text style={styles.backIcon}>←</Text>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          <View style={{ height: 32 }} />

          {/* Title & Subtitle */}
          <Text style={styles.title}>Enter OTP</Text>
          <Text style={styles.subtitle}>Sent to +91 98765 XXXXX</Text>

          <View style={{ height: 24 }} />

          {/* 6-box OTP Input with auto-countdown using actual component */}
          <Ux4gOtpInput
            key={\`otp_\${resendNonce}\`}
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
              setResendNonce((n) => n + 1);
            }}
          />

          <View style={{ height: 28 }} />

          {/* Primary CTA: Verify OTP */}
          <Ux4gButton
            text="Verify OTP"
            variant="primary"
            size="large"
            width="100%"
            onPress={handleVerify}
            style={styles.verifyButton}
          />

          <View style={{ height: 12 }} />

          {/* Expiry Note */}
          <Text style={styles.expiryNote}>
            OTP is valid for 10 minutes
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
    paddingTop: 12,
  },
  content: {
    width: '100%',
    maxWidth: 360,
    alignSelf: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  backIcon: {
    fontSize: 16,
    color: UX4GColors.primary,
  },
  backText: {
    fontSize: defaultUx4gTypography.lL_default.fontSize,
    fontWeight: '600',
    lineHeight: defaultUx4gTypography.lL_default.lineHeight,
    color: UX4GColors.primary,
  },
  title: {
    fontSize: defaultUx4gTypography.hM_strong.fontSize,
    fontWeight: defaultUx4gTypography.hM_strong.fontWeight,
    lineHeight: defaultUx4gTypography.hM_strong.lineHeight,
    letterSpacing: -0.3,
    color: UX4GColors.gray900,
  },
  subtitle: {
    fontSize: defaultUx4gTypography.bM_default.fontSize,
    fontWeight: defaultUx4gTypography.bM_default.fontWeight,
    lineHeight: defaultUx4gTypography.bM_default.lineHeight,
    color: UX4GColors.neutral500,
    marginTop: 6,
  },
  verifyButton: {
    width: '100%',
    backgroundColor: UX4GColors.primary,
    height: 48,
    borderRadius: 8,
  },
  expiryNote: {
    fontSize: defaultUx4gTypography.bS_default.fontSize,
    fontWeight: defaultUx4gTypography.bS_default.fontWeight,
    lineHeight: defaultUx4gTypography.bS_default.lineHeight,
    color: UX4GColors.neutral500,
    textAlign: 'center',
  },
  footer: {
    marginTop: 32,
    alignItems: 'center',
    gap: 6,
    paddingBottom: 8,
  },
  poweredByText: {
    fontSize: defaultUx4gTypography.lS_default.fontSize,
    color: UX4GColors.neutral500,
  },
  digitalIndiaLogo: {
    width: 70,
    height: 26,
  },
});`;
  }, [variant]);

  // Live interactive mockup using our actual Ux4gOtpInput component
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
            padding: isCard ? '16px' : '20px 20px 24px 20px',
          }}
        >
          {/* Card or Flat Content Container */}
          <div
            style={{
              backgroundColor: isCard ? colors.cardBg : 'transparent',
              borderRadius: isCard ? 16 : 0,
              padding: isCard ? '20px 20px 24px 20px' : '0',
              boxShadow: isCard
                ? isDark
                  ? '0 6px 20px rgba(0,0,0,0.4)'
                  : '0 6px 20px rgba(74, 43, 194, 0.08)'
                : 'none',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Back Button */}
            <button
              type="button"
              onClick={() => alert('Navigate back')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: 'transparent',
                border: 'none',
                color: colors.backIcon,
                fontSize: defaultUx4gTypography.lL_default.fontSize,
                fontWeight: '600',
                cursor: 'pointer',
                padding: 0,
                alignSelf: 'flex-start',
                marginBottom: isCard ? 16 : 28,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                arrow_back
              </span>
              Back
            </button>

            {/* Title */}
            <h2
              style={{
                fontSize: defaultUx4gTypography.hM_strong.fontSize,
                fontWeight: defaultUx4gTypography.hM_strong.fontWeight,
                lineHeight: `${defaultUx4gTypography.hM_strong.lineHeight}px`,
                letterSpacing: '-0.3px',
                color: colors.title,
                margin: 0,
              }}
            >
              Enter OTP
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: defaultUx4gTypography.bM_default.fontSize,
                fontWeight: defaultUx4gTypography.bM_default.fontWeight,
                lineHeight: `${defaultUx4gTypography.bM_default.lineHeight}px`,
                color: colors.subtleText,
                margin: '6px 0 0 0',
              }}
            >
              Sent to +91 98765 XXXXX
            </p>

            {/* Actual Ux4gOtpInput Component from design system */}
            <div style={{ marginTop: 22 }}>
              <Ux4gOtpInput
                key={`live_otp_${variant}_${resendNonce}`}
                length={6}
                value={otp}
                onChanged={(val) => setOtp(val)}
                boxSize={44}
                gap={8}
                showSeparator={false}
                captionVariant="resendTimer"
                captionLeadingText="Didn't receive OTP?"
                captionTrailingText="Resend OTP"
                autoCountdownSeconds={60}
                onCaptionTrailingTap={() => {
                  setOtp('');
                  setResendNonce((n) => n + 1);
                }}
              />
            </div>

            {/* Verify OTP Primary Button */}
            <div style={{ marginTop: 24, width: '100%', display: 'flex' }}>
              <Ux4gButton
                text="Verify OTP"
                variant="primary"
                size="large"
                width="100%"
                onPress={handleVerify}
                style={{
                  width: '100%',
                  height: 48,
                  backgroundColor: colors.buttonBg,
                  borderRadius: 8,
                }}
                textStyle={{
                  color: colors.buttonText,
                  fontWeight: '600',
                  fontSize: defaultUx4gTypography.lL_default.fontSize,
                }}
              />
            </div>

            {/* Expiry Note */}
            <p
              style={{
                textAlign: 'center',
                marginTop: 12,
                fontSize: defaultUx4gTypography.bS_default.fontSize,
                fontWeight: defaultUx4gTypography.bS_default.fontWeight,
                lineHeight: `${defaultUx4gTypography.bS_default.lineHeight}px`,
                color: colors.subtleText,
                margin: '12px 0 0 0',
              }}
            >
              OTP is valid for 10 minutes
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
            }}
          >
            <span
              style={{
                fontSize: defaultUx4gTypography.lS_default.fontSize,
                fontWeight: defaultUx4gTypography.lS_default.fontWeight,
                lineHeight: `${defaultUx4gTypography.lS_default.lineHeight}px`,
                color: colors.subtleText,
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
          <h1 className="wb-title">Enter OTP</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          OTP verification screen with 6 single-digit input boxes, a built-in countdown timer, and a verify action. Toggle between the flat layout and the card-style layout. Mobile-sized layout (360px).
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
                  filename={variant === 'card' ? 'EnterOtpCardPattern.tsx' : 'EnterOtpDefaultPattern.tsx'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterOtpDoc;
