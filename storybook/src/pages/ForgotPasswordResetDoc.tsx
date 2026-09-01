import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gInputField } from '../../../src/components/input-field/InputField';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gStatusBanner } from '../../../src/components/status-banner/StatusBanner';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface ForgotPasswordResetDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const ForgotPasswordResetDoc: React.FC<ForgotPasswordResetDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [mobile, setMobile] = useState('');

  // Exact color tokens from UX4G Flutter Design System (1:1 match with Ux4gColors/Ux4gPalette)
  const colors = useMemo(() => {
    return {
      title: isDark ? UX4GColors.neutral50 : UX4GColors.gray900,           // _getTitleColor
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,  // _getSubtleText
      mutedText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,   // _getMutedText
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,      // _getBorder
      cardBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      cardScreenBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100, // _getSuCardBg
      defaultScreenBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      primary: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      buttonBg: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      warningBannerText: '#92400E',
      warningBannerIcon: '#D97706',
    };
  }, [isDark]);

  const handleSendOtp = () => {
    alert('OTP sent to mobile number');
  };

  // Clean React Native TSX code snippet matching Flutter fpStep1Component
  const codeString = useMemo(() => {
    if (variant === 'card') {
      return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gInputField,
  Ux4gButton,
  Ux4gDivider,
  Ux4gStatusBanner,
  Ux4gIcons,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const ResetPasswordCardPattern = () => {
  const [mobile, setMobile] = useState('');

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
          {/* Reusable Back Navigation Link */}
          <Ux4gButton
            text="Back to Sign In"
            variant="ghost"
            size="small"
            leadingIcon="arrow_back"
            iconSize={18}
            onPress={() => {}}
            style={styles.backButton}
          />

          <View style={{ height: 12 }} />

          {/* Elevated Card Container */}
          <View style={styles.card}>
            <Text style={styles.title}>Reset Password</Text>
            <View style={{ height: 6 }} />
            <Text style={styles.subtitleText}>
              Enter your registered mobile number to receive a verification code
            </Text>

            <View style={{ height: 20 }} />

            <Ux4gInputField
              value={mobile}
              onValueChange={setMobile}
              label="Mobile Number"
              placeholder="Enter mobile number"
              prefixText="+91"
              type="number"
              maxLength={10}
            />

            <View style={{ height: 16 }} />

            <Ux4gButton
              text="Send OTP"
              variant="primary"
              size="large"
              onPress={() => {}}
              style={styles.actionButton}
            />

            <View style={{ height: 12 }} />

            <Pressable onPress={() => {}}>
              <Text style={styles.linkText}>
                Recover account using Aadhaar Number  ?
              </Text>
            </Pressable>

            <View style={{ height: 6 }} />

            {/* OR Divider */}
            <View style={styles.orRow}>
              <View style={styles.orLine} />
              <Text style={styles.orText}>OR</Text>
              <View style={styles.orLine} />
            </View>

            <View style={{ height: 6 }} />

            <Ux4gButton
              text="Sign in with OTP instead"
              variant="outline"
              size="large"
              onPress={() => {}}
              style={styles.actionButton}
            />

            <View style={{ height: 14 }} />

            {/* Warning Banner */}
            <Ux4gStatusBanner
              variant="warningLight"
              title="Most services use OTP login so you may not need a password."
              leadingIcon={Ux4gIcons.fillRevInfo({ size: 18, color: '#D97706' })}
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
  backButton: {
    alignSelf: 'flex-start',
    height: 36,
    paddingHorizontal: 0,
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
  title: {
    fontSize: 22, fontWeight: '800',
    color: '#111827', letterSpacing: -0.3,
    lineHeight: 26.4,
  },
  subtitleText: {
    fontSize: 13, color: UX4GColors.neutral500,
    lineHeight: 18.2,
  },
  actionButton: {
    width: '100%', height: 48, borderRadius: 8,
  },
  linkText: {
    fontSize: 12, fontWeight: '600',
    color: UX4GColors.primary, textAlign: 'center',
  },
  orRow: {
    flexDirection: 'row', alignItems: 'center',
  },
  orLine: {
    flex: 1, height: 1, backgroundColor: UX4GColors.neutral200,
  },
  orText: {
    fontSize: 12, fontWeight: '500',
    color: UX4GColors.neutral400,
    paddingHorizontal: 12,
  },
  footer: {
    paddingVertical: 14, alignItems: 'center',
    flexDirection: 'row', justifyContent: 'center', gap: 4,
  },
  poweredByText: { fontSize: 11, color: UX4GColors.neutral400 },
  digitalIndiaLogo: { height: 24, width: 80 },
});`;
    }

    return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gInputField,
  Ux4gButton,
  Ux4gDivider,
  Ux4gStatusBanner,
  Ux4gIcons,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const ResetPasswordDefaultPattern = () => {
  const [mobile, setMobile] = useState('');

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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Back navigation link */}
        <Ux4gButton
          text="Back to Sign In"
          variant="ghost"
          size="small"
          leadingIcon="arrow_back"
          iconSize={18}
          onPress={() => {}}
          style={styles.backButton}
        />

        <View style={{ height: 20 }} />

        <Text style={styles.title}>Reset Password</Text>
        <View style={{ height: 6 }} />
        <Text style={styles.subtitleText}>
          Enter your registered mobile number to receive a verification code
        </Text>

        <View style={{ height: 24 }} />

        <Ux4gInputField
          value={mobile}
          onValueChange={setMobile}
          label="Mobile Number"
          placeholder="Enter mobile number"
          prefixText="+91"
          type="number"
          maxLength={10}
        />

        <View style={{ height: 20 }} />

        <Ux4gButton
          text="Send OTP"
          variant="primary"
          size="large"
          onPress={() => {}}
          style={styles.actionButton}
        />

        <View style={{ height: 14 }} />

        <Pressable onPress={() => {}} style={{ alignSelf: 'center' }}>
          <Text style={styles.linkText}>
            Recover account using Aadhaar Number  ?
          </Text>
        </Pressable>

        <View style={{ height: 8 }} />

        {/* OR Divider */}
        <View style={styles.orRow}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orLine} />
        </View>

        <View style={{ height: 8 }} />

        <Ux4gButton
          text="Sign in with OTP instead"
          variant="outline"
          size="large"
          onPress={() => {}}
          style={styles.actionButton}
        />

        <View style={{ height: 16 }} />

        {/* Warning Banner */}
        <Ux4gStatusBanner
          variant="warningLight"
          title="Most services use OTP login so you may not need a password."
          leadingIcon={Ux4gIcons.fillRevInfo({ size: 18, color: '#D97706' })}
        />
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
  screen: { flex: 1, backgroundColor: UX4GColors.neutral0 },
  emblemLogo: { width: 32, height: 32 },
  headerDivider: {
    width: 1, height: 28,
    backgroundColor: UX4GColors.neutral300,
    marginHorizontal: 4,
  },
  unionLogo: { width: 32, height: 32 },
  scrollContainer: {
    paddingHorizontal: 20, paddingTop: 16,
  },
  backButton: {
    alignSelf: 'flex-start',
    height: 36,
    paddingHorizontal: 0,
  },
  title: {
    fontSize: 24, fontWeight: '800',
    color: '#111827', letterSpacing: -0.3,
    lineHeight: 28.8,
  },
  subtitleText: {
    fontSize: 14, color: UX4GColors.neutral500,
    lineHeight: 19.6,
  },
  actionButton: {
    width: '100%', height: 48, borderRadius: 8,
  },
  linkText: {
    fontSize: 13, fontWeight: '600',
    color: UX4GColors.primary,
  },
  orRow: {
    flexDirection: 'row', alignItems: 'center',
  },
  orLine: {
    flex: 1, height: 1, backgroundColor: UX4GColors.neutral200,
  },
  orText: {
    fontSize: 12, fontWeight: '500',
    color: UX4GColors.neutral400,
    paddingHorizontal: 16, letterSpacing: 0.5,
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

  // Interactive Live Mockup for Web Preview (1:1 match with Flutter FP Step 1)
  const renderLiveMockup = () => {
    const isCard = variant === 'card';
    const bgScreenColor = isCard ? colors.cardScreenBg : colors.defaultScreenBg;

    // SVG for fillRevInfo matching Flutter Ux4gIcons.fillRevInfo
    const fillRevInfoIcon = (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#D97706" style={{ flexShrink: 0 }}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm1-4h-2V7h2v6z" />
      </svg>
    );

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
              {/* Back to Sign In Link */}
              <div
                onClick={() => {}}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  cursor: 'pointer',
                  padding: '2px 0',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: 18,
                    color: colors.primary,
                  }}
                >
                  arrow_back
                </span>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: colors.primary,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Back to Sign In
                </span>
              </div>

              <div style={{ height: 12 }} />

              {/* Elevated Card */}
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: '20px',
                  boxShadow: isDark
                    ? '0 4px 16px rgba(0, 0, 0, 0.4)'
                    : '0 4px 16px rgba(0, 0, 0, 0.04)',
                }}
              >
                {/* Title */}
                <h2
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    lineHeight: 1.2,
                    letterSpacing: '-0.3px',
                    color: colors.title,
                    margin: 0,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Reset Password
                </h2>

                <div style={{ height: 6 }} />

                {/* Subtitle */}
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 400,
                    lineHeight: 1.4,
                    color: colors.subtleText,
                    margin: 0,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Enter your registered mobile number to receive a verification code
                </p>

                <div style={{ height: 20 }} />

                {/* Mobile Number Input */}
                <Ux4gInputField
                  value={mobile}
                  onValueChange={setMobile}
                  label="Mobile Number"
                  placeholder="Enter mobile number"
                  prefixText="+91"
                  type="number"
                  maxLength={10}
                />

                <div style={{ height: 16 }} />

                {/* Send OTP Button */}
                <Ux4gButton
                  text="Send OTP"
                  variant="primary"
                  size="large"
                  onPress={handleSendOtp}
                  style={{
                    height: 48,
                    borderRadius: 8,
                    width: '100%',
                    backgroundColor: colors.buttonBg,
                  }}
                />

                <div style={{ height: 12 }} />

                {/* Aadhaar recovery link */}
                <div style={{ textAlign: 'center' }}>
                  <button
                    type="button"
                    onClick={() => alert('Recover via Aadhaar')}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '4px',
                      fontSize: 12,
                      fontWeight: 600,
                      color: colors.primary,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Recover account using Aadhaar Number  ?
                  </button>
                </div>

                <div style={{ height: 6 }} />

                {/* OR Divider */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0,
                  }}
                >
                  <div style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: colors.mutedText,
                      padding: '0 12px',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    OR
                  </span>
                  <div style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
                </div>

                <div style={{ height: 6 }} />

                {/* Sign in with OTP Button */}
                <Ux4gButton
                  text="Sign in with OTP instead"
                  variant="outline"
                  size="large"
                  onPress={() => alert('Sign in with OTP')}
                  style={{
                    height: 48,
                    borderRadius: 8,
                    width: '100%',
                  }}
                />

                <div style={{ height: 14 }} />

                {/* Warning Banner with exact Flutter fillRevInfo icon */}
                <Ux4gStatusBanner
                  variant="warningLight"
                  title="Most services use OTP login so you may not need a password."
                  leadingIcon={fillRevInfoIcon}
                  titleStyle={{
                    fontSize: 13,
                    fontWeight: 400,
                    color: colors.warningBannerText,
                    lineHeight: 1.4,
                  } as any}
                  marginStyle={{ margin: 0 }}
                  paddingStyle={{ paddingHorizontal: 12, paddingVertical: 10 }}
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
                padding: '16px 20px 0 20px',
                flex: 1,
                overflow: 'auto',
              }}
            >
              {/* Back to Sign In Link */}
              <div
                onClick={() => {}}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  cursor: 'pointer',
                  padding: '2px 0',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: 18,
                    color: colors.primary,
                  }}
                >
                  arrow_back
                </span>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: colors.primary,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Back to Sign In
                </span>
              </div>

              <div style={{ height: 20 }} />

              {/* Title */}
              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: '-0.3px',
                  color: colors.title,
                  margin: 0,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Reset Password
              </h2>

              <div style={{ height: 6 }} />

              {/* Subtitle */}
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: colors.subtleText,
                  margin: 0,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Enter your registered mobile number to receive a verification code
              </p>

              <div style={{ height: 24 }} />

              {/* Mobile Number Input */}
              <Ux4gInputField
                value={mobile}
                onValueChange={setMobile}
                label="Mobile Number"
                placeholder="Enter mobile number"
                prefixText="+91"
                type="number"
                maxLength={10}
              />

              <div style={{ height: 20 }} />

              {/* Send OTP Button */}
              <Ux4gButton
                text="Send OTP"
                variant="primary"
                size="large"
                onPress={handleSendOtp}
                style={{
                  height: 48,
                  borderRadius: 8,
                  width: '100%',
                  backgroundColor: colors.buttonBg,
                }}
              />

              <div style={{ height: 14 }} />

              {/* Aadhaar recovery link */}
              <div style={{ textAlign: 'center' }}>
                <button
                  type="button"
                  onClick={() => alert('Recover via Aadhaar')}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px',
                    fontSize: 13,
                    fontWeight: 600,
                    color: colors.primary,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Recover account using Aadhaar Number  ?
                </button>
              </div>

              <div style={{ height: 8 }} />

              {/* OR Divider */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0,
                }}
              >
                <div style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: colors.mutedText,
                    padding: '0 16px',
                    letterSpacing: '0.5px',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  OR
                </span>
                <div style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
              </div>

              <div style={{ height: 8 }} />

              {/* Sign in with OTP Button */}
              <Ux4gButton
                text="Sign in with OTP instead"
                variant="outline"
                size="large"
                onPress={() => alert('Sign in with OTP')}
                style={{
                  height: 48,
                  borderRadius: 8,
                  width: '100%',
                }}
              />

              <div style={{ height: 16 }} />

              {/* Warning Banner with exact Flutter fillRevInfo icon */}
              <Ux4gStatusBanner
                variant="warningLight"
                title="Most services use OTP login so you may not need a password."
                leadingIcon={fillRevInfoIcon}
                titleStyle={{
                  fontSize: 13,
                  fontWeight: 400,
                  color: colors.warningBannerText,
                  lineHeight: 1.4,
                } as any}
                marginStyle={{ margin: 0 }}
                paddingStyle={{ paddingHorizontal: 12, paddingVertical: 10 }}
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
        )}
      </div>
    );
  };

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Reset Password</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Entry point for the forgot-password flow. User enters their registered mobile number to receive an OTP.
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
