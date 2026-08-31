import React, { useState, useMemo } from 'react';
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
import { Ux4gOtpInput } from '../../../src/components/otp-input/OtpInput';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gStatusBanner } from '../../../src/components/status-banner/StatusBanner';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface VerifyMobileAccountLockedDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const VerifyMobileAccountLockedDoc: React.FC<VerifyMobileAccountLockedDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');

  // Exact color tokens from UX4G Flutter Design System
  const colors = useMemo(() => {
    return {
      title: isDark ? UX4GColors.neutral50 : UX4GColors.gray900, // #FAFAFA / #121212
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500, // #A1A1A1 / #737373
      mutedText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400, // #737373 / #A1A1A1
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200, // #262626 / #E5E5E5
      cardBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0, // #121212 / #FFFFFF
      cardScreenBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100, // #301C7D / #DCD4FF
      defaultScreenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50, // #0A0A0A / #FAFAFA
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0, // #121212 / #FFFFFF
      primary: UX4GColors.primary, // #4A2BC2
      primaryLight: UX4GColors.primary300, // #A391FF
      backIcon: isDark ? UX4GColors.primary300 : UX4GColors.primary, // #A391FF / #4A2BC2
      // Lock Badge Tokens (Image 1)
      lockBadgeBg: isDark ? UX4GColors.red800 : UX4GColors.red100, // #800000 / #FFEBEB
      lockIconColor: isDark ? UX4GColors.red500 : UX4GColors.red600, // #EF4444 / #DC2626
      // Error Banner Tokens (Image 2)
      bannerBg: isDark ? UX4GColors.red900 : UX4GColors.red50, // #4D0000 / #FFF5F5
      bannerBorder: isDark ? UX4GColors.red600 : UX4GColors.red300, // #DC2626 / #FFA3A3
      bannerTitle: isDark ? UX4GColors.red300 : UX4GColors.red800, // #FFA3A3 / #800000
      errorIcon: isDark ? UX4GColors.red500 : UX4GColors.red600, // #EF4444 / #DC2626
    };
  }, [isDark]);

  const handleBack = () => {
    alert('Back button pressed');
  };

  const handleSupportCall = () => {
    alert('Calling support: 1800-XXX-XXXX');
  };

  // Clean React Native TSX code snippet matching Flutter otpVerifyAccountLockedComponent
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
  Ux4gButton,
  Ux4gStatusBanner,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-design-system';
import Svg, { Circle, Path } from 'react-native-svg';

const LockIcon = ({ size = 28, color = UX4GColors.red600 }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
      fill={color}
    />
  </Svg>
);

const StatusBannerExclamationIcon = ({ size = 20, color = UX4GColors.red600 }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" fill={color} />
    <Path d="M12 7v6M12 16.5v.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
  </Svg>
);

export const VerifyMobileAccountLockedCardPattern = () => {
  const handleBack = () => {
    console.log('Go back');
  };

  const handleSupportCall = () => {
    console.log('Calling 1800-XXX-XXXX');
  };

  return (
    <View style={styles.screen}>
      {/* 1. Official Government Header with Bottom Separation */}
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
      <View style={styles.cardContainer}>
        {/* Floating White Card */}
        <View style={styles.card}>
          {/* Back Action */}
          <Ux4gButton
            text="Back"
            variant="ghost"
            size="small"
            height={48}
            onPress={handleBack}
            style={styles.backButton}
          />

          <View style={{ height: 16 }} />

          {/* Red Lock Badge (Image 1) */}
          <View style={styles.lockBadge}>
            <LockIcon size={28} color={UX4GColors.red600} />
          </View>

          <View style={{ height: 12 }} />

          {/* Title */}
          <Text style={styles.title}>
            Too many incorrect{\\n}attempts
          </Text>

          <View style={{ height: 20 }} />

          {/* 6 disabled OTP boxes with the [locked] caption */}
          <Ux4gOtpInput
            length={6}
            value=""
            onChanged={() => {}}
            enabled={false}
            boxSize={44}
            gap={8}
            showSeparator={false}
            captionVariant="locked"
            captionLeadingText="Locked for 28:43"
            captionTrailingText="Resend OTP"
          />

          <View style={{ height: 12 }} />

          {/* Error Status Banner (Image 2) */}
          <Ux4gStatusBanner
            variant="errorLight"
            backgroundColor={UX4GColors.red50}
            borderColor={UX4GColors.red300}
            title="Account locked. Please wait for the\\ncountdown to complete"
            titleStyle={styles.bannerTitle}
            leadingIcon={<StatusBannerExclamationIcon size={20} color={UX4GColors.red600} />}
          />

          <View style={{ height: 20 }} />

          {/* Support Link */}
          <View style={styles.supportRow}>
            <Text style={styles.supportLabel}>Need help?  </Text>
            <Ux4gButton
              text="Call 1800-XXX-XXXX"
              variant="ghost"
              size="small"
              height={48}
              onPress={handleSupportCall}
              style={styles.supportButton}
            />
          </View>
        </View>

        <View style={{ flex: 1 }} />

        {/* 3. Powered by Digital India Footer */}
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
  cardContainer: {
    flex: 1,
    backgroundColor: UX4GColors.primary100, // #DCD4FF
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 20,
    alignItems: 'center',
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
  card: {
    width: '100%',
    maxWidth: 328,
    backgroundColor: UX4GColors.neutral0,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
    shadowColor: UX4GColors.neutral1000black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 3,
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
  },
  lockBadge: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: UX4GColors.red100, // #FFEBEB
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: UX4GColors.gray900,
    lineHeight: 26,
    letterSpacing: -0.3,
    textAlign: 'center',
  },
  bannerTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: UX4GColors.red800,
    lineHeight: 19,
  },
  supportRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  supportLabel: {
    fontSize: 14,
    color: UX4GColors.neutral500,
    lineHeight: 18,
  },
  supportButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 4,
  },
  footer: {
    marginTop: 8,
    alignItems: 'center',
    gap: 6,
  },
  poweredByText: {
    fontSize: 11,
    color: UX4GColors.neutral400,
  },
  digitalIndiaLogo: {
    height: 22,
    width: 60,
  },
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
  Ux4gOtpInput,
  Ux4gButton,
  Ux4gStatusBanner,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-design-system';
import Svg, { Circle, Path } from 'react-native-svg';

const LockIcon = ({ size = 28, color = UX4GColors.red600 }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
      fill={color}
    />
  </Svg>
);

const StatusBannerExclamationIcon = ({ size = 20, color = UX4GColors.red600 }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" fill={color} />
    <Path d="M12 7v6M12 16.5v.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
  </Svg>
);

export const VerifyMobileAccountLockedDefaultPattern = () => {
  const handleBack = () => {
    console.log('Go back');
  };

  const handleSupportCall = () => {
    console.log('Calling 1800-XXX-XXXX');
  };

  return (
    <View style={styles.screen}>
      {/* 1. Official Government Header with Bottom Separation */}
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

      {/* 2. Flat Layout with 24px Top Inset & Back Action */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          {/* Back Action */}
          <Ux4gButton
            text="Back"
            variant="ghost"
            size="small"
            height={48}
            onPress={handleBack}
            style={styles.backButton}
          />

          <View style={{ height: 24 }} />

          {/* Red Lock Badge (Image 1) */}
          <View style={styles.lockBadge}>
            <LockIcon size={28} color={UX4GColors.red600} />
          </View>

          <View style={{ height: 16 }} />

          {/* Title */}
          <Text style={styles.title}>
            Too many incorrect{\\n}attempts
          </Text>

          <View style={{ height: 24 }} />

          {/* 6 disabled OTP boxes with the [locked] caption */}
          <Ux4gOtpInput
            length={6}
            value=""
            onChanged={() => {}}
            enabled={false}
            boxSize={44}
            gap={8}
            showSeparator={false}
            captionVariant="locked"
            captionLeadingText="Locked for 28:43"
            captionTrailingText="Resend OTP"
          />

          <View style={{ height: 12 }} />

          {/* Error Status Banner (Image 2) */}
          <Ux4gStatusBanner
            variant="errorLight"
            backgroundColor={UX4GColors.red50}
            borderColor={UX4GColors.red300}
            title="Account locked. Please wait for the\\ncountdown to complete"
            titleStyle={styles.bannerTitle}
            leadingIcon={<StatusBannerExclamationIcon size={20} color={UX4GColors.red600} />}
          />

          <View style={{ height: 20 }} />

          {/* Support Link */}
          <View style={styles.supportRow}>
            <Text style={styles.supportLabel}>Need help?  </Text>
            <Ux4gButton
              text="Call 1800-XXX-XXXX"
              variant="ghost"
              size="small"
              height={48}
              onPress={handleSupportCall}
              style={styles.supportButton}
            />
          </View>
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
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 20,
  },
  content: {
    width: '100%',
    maxWidth: 328,
    alignSelf: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
  },
  lockBadge: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: UX4GColors.red100, // #FFEBEB
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: UX4GColors.gray900,
    lineHeight: 26,
    letterSpacing: -0.3,
    textAlign: 'center',
  },
  bannerTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: UX4GColors.red800,
    lineHeight: 19,
  },
  supportRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  supportLabel: {
    fontSize: 14,
    color: UX4GColors.neutral500,
    lineHeight: 18,
  },
  supportButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 4,
  },
  footer: {
    marginTop: 8,
    alignItems: 'center',
    gap: 6,
    paddingBottom: 4,
  },
  poweredByText: {
    fontSize: 11,
    color: UX4GColors.neutral400,
  },
  digitalIndiaLogo: {
    height: 22,
    width: 60,
  },
});`;
  }, [variant]);

  // Live interactive mockup using our actual Ux4gOtpInput, Ux4gAppHeader, Ux4gStatusBanner & Ux4gButton
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
        {/* 1. Official Government Header */}
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

        {/* 2. Main Content Body */}
        {isCard ? (
          /* Card Style Variant */
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: colors.cardScreenBg,
              justifyContent: 'space-between',
              padding: '24px 16px 20px 16px',
            }}
          >
            <div>
              {/* Floating White Card */}
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: '16px 20px 24px 20px',
                  boxShadow: isDark
                    ? '0 4px 16px rgba(0, 0, 0, 0.4)'
                    : '0 4px 16px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Back Button */}
                <button
                  type="button"
                  onClick={handleBack}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    background: 'transparent',
                    border: 'none',
                    color: colors.backIcon,
                    fontSize: 14,
                    fontWeight: '600',
                    cursor: 'pointer',
                    padding: 0,
                    alignSelf: 'flex-start',
                    marginBottom: 16,
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                    arrow_back
                  </span>
                  Back
                </button>

                {/* Red Lock Badge (Image 1) */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 32,
                    backgroundColor: colors.lockBadgeBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
                      fill={colors.lockIconColor}
                    />
                  </svg>
                </div>

                {/* 2-line Title */}
                <h2
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    lineHeight: 1.2,
                    letterSpacing: '-0.3px',
                    color: colors.title,
                    margin: '12px 0 0 0',
                    textAlign: 'center',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {`Too many incorrect\nattempts`}
                </h2>

                {/* 6 disabled OTP boxes with caption */}
                <div style={{ marginTop: 20 }}>
                  <Ux4gOtpInput
                    key="verify_mobile_locked_card"
                    length={6}
                    value=""
                    onChanged={() => { }}
                    enabled={false}
                    boxSize={44}
                    gap={8}
                    showSeparator={false}
                    captionVariant="locked"
                    captionLeadingText="Locked for 28:43"
                    captionTrailingText="Resend OTP"
                  />
                </div>

                {/* Error Status Banner (Image 2) */}
                <div
                  style={{
                    marginTop: 12,
                    backgroundColor: colors.bannerBg,
                    border: `1px solid ${colors.bannerBorder}`,
                    borderRadius: 8,
                    padding: '12px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
                    <circle cx="12" cy="12" r="10" fill={colors.errorIcon} />
                    <path d="M12 7v6M12 16.5v.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      color: colors.bannerTitle,
                      lineHeight: '19px',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {`Account locked. Please wait for the\ncountdown to complete`}
                  </span>
                </div>

                {/* Need Help / Support Link */}
                <div
                  style={{
                    marginTop: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      lineHeight: '18px',
                      color: colors.subtleText,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Need help?{' '}
                  </span>
                  <button
                    type="button"
                    onClick={handleSupportCall}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: colors.primary,
                      fontSize: 14,
                      fontWeight: '600',
                      cursor: 'pointer',
                      padding: '0 4px',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Call 1800-XXX-XXXX
                  </button>
                </div>
              </div>
            </div>

            {/* Powered by Digital India Footer */}
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
              padding: '24px 20px 20px 20px',
            }}
          >
            <div>
              {/* Back Button */}
              <button
                type="button"
                onClick={handleBack}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'transparent',
                  border: 'none',
                  color: colors.backIcon,
                  fontSize: 14,
                  fontWeight: '600',
                  cursor: 'pointer',
                  padding: 0,
                  alignSelf: 'flex-start',
                  marginBottom: 24,
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                  arrow_back
                </span>
                Back
              </button>

              {/* Red Lock Badge (Image 1) */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 32,
                  backgroundColor: colors.lockBadgeBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
                    fill={colors.lockIconColor}
                  />
                </svg>
              </div>

              {/* 2-line Title */}
              <h2
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: '-0.3px',
                  color: colors.title,
                  margin: '16px 0 0 0',
                  textAlign: 'center',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  whiteSpace: 'pre-line',
                }}
              >
                {`Too many incorrect\nattempts`}
              </h2>

              {/* 6 disabled OTP boxes with caption */}
              <div style={{ marginTop: 24 }}>
                <Ux4gOtpInput
                  key="verify_mobile_locked_default"
                  length={6}
                  value=""
                  onChanged={() => { }}
                  enabled={false}
                  boxSize={44}
                  gap={8}
                  showSeparator={false}
                  captionVariant="locked"
                  captionLeadingText="Locked for 28:43"
                  captionTrailingText="Resend OTP"
                />
              </div>

              {/* Error Status Banner (Image 2) */}
              <div
                style={{
                  marginTop: 12,
                  backgroundColor: colors.bannerBg,
                  border: `1px solid ${colors.bannerBorder}`,
                  borderRadius: 8,
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
                  <circle cx="12" cy="12" r="10" fill={colors.errorIcon} />
                  <path d="M12 7v6M12 16.5v.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: colors.bannerTitle,
                    lineHeight: '19px',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {`Account locked. Please wait for the\ncountdown to complete`}
                </span>
              </div>

              {/* Need Help / Support Link */}
              <div
                style={{
                  marginTop: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    fontSize: 14,
                    lineHeight: '18px',
                    color: colors.subtleText,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Need help?{' '}
                </span>
                <button
                  type="button"
                  onClick={handleSupportCall}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: colors.primary,
                    fontSize: 14,
                    fontWeight: '600',
                    cursor: 'pointer',
                    padding: '0 4px',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Call 1800-XXX-XXXX
                </button>
              </div>
            </div>

            {/* Powered by Digital India Footer */}
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
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Verify mobile — account locked</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Terminal lockout state shown after the user exhausts all OTP attempts. Includes a disabled OTP field, a live "Locked for mm:ss" caption from the design-system OTP component, an error banner, and a support phone link. Use the [Variant] knob on the right to toggle between the flat layout and the card-style layout. Mobile-sized layout (360px).
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
                  filename={variant === 'card' ? 'VerifyMobileAccountLockedCardPattern.tsx' : 'VerifyMobileAccountLockedDefaultPattern.tsx'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyMobileAccountLockedDoc;
