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

interface VerifyMobileAttemptWarningDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const VerifyMobileAttemptWarningDoc: React.FC<VerifyMobileAttemptWarningDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [otp, setOtp] = useState<string>('');

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
      buttonBg: isDark ? UX4GColors.primary300 : UX4GColors.primary, // #A391FF / #4A2BC2
      buttonText: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0, // #171717 / #FFFFFF
      backIcon: isDark ? UX4GColors.primary300 : UX4GColors.primary, // #A391FF / #4A2BC2
      // Warning Banner Tokens
      bannerBg: isDark ? UX4GColors.orange900 : UX4GColors.orange50, // #4D2600 / #FFFBF0
      bannerBorder: isDark ? UX4GColors.orange600 : UX4GColors.orange300, // #E67300 / #FFD580
      bannerTitle: isDark ? UX4GColors.orange300 : UX4GColors.orange800, // #FFD580 / #803B00
      bannerSubtitle: isDark ? UX4GColors.orange300 : UX4GColors.orange800, // #FFD580 / #803B00
      badgeBg: isDark ? UX4GColors.orange800 : UX4GColors.orange100, // #803B00 / #FFEEC2
      badgeText: isDark ? UX4GColors.orange300 : UX4GColors.orange800, // #FFD580 / #803B00
      warningIcon: isDark ? UX4GColors.orange500 : UX4GColors.orange600, // #FF9933 / #E67300
    };
  }, [isDark]);

  const handleVerify = () => {
    alert(otp.length === 6 ? `OTP Verified: ${otp}` : 'Please enter all 6 digits of the OTP.');
  };

  const handleBack = () => {
    alert('Back button pressed');
  };

  // Clean React Native TSX code snippet matching Flutter otpVerifyAttemptWarningComponent
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
  Ux4gStatusBanner,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-design-system';
import Svg, { Circle, Path } from 'react-native-svg';

const WarningIcon = ({ size = 20, color = UX4GColors.orange600 }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" fill={color} />
    <Path d="M12 7v6M12 16v1" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
  </Svg>
);

export const VerifyMobileAttemptWarningCardPattern = () => {
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    console.log('Verify OTP:', otp);
  };

  const handleBack = () => {
    console.log('Go back');
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

          <Text style={styles.title}>
            Verify your mobile{\\n}number
          </Text>
          <View style={{ height: 8 }} />
          <Text style={styles.subtitle}>OTP sent to +91 98765 XXXXX</Text>

          <View style={{ height: 20 }} />

          {/* 6 OTP boxes without caption */}
          <Ux4gOtpInput
            length={6}
            value={otp}
            onChanged={setOtp}
            boxSize={44}
            gap={8}
            showSeparator={false}
          />

          <View style={{ height: 16 }} />

          {/* Warning banner  Incorrect OTP with countdown to lockout */}
          <Ux4gStatusBanner
            variant="warningLight"
            backgroundColor={UX4GColors.orange50}
            borderColor={UX4GColors.orange300}
            title="Incorrect OTP"
            titleStyle={styles.bannerTitle}
            leadingIcon={<WarningIcon size={20} color={UX4GColors.orange600} />}
            subtitleWidget={
              <View style={styles.bannerSubtitleRow}>
                <Text style={styles.bannerSubtitleText}>
                  1 more incorrect entry{\\n}before 30-min lockout
                </Text>
                <View style={styles.attemptBadge}>
                  <Text style={styles.attemptBadgeText}>Attempt 1 of 3</Text>
                </View>
              </View>
            }
          />

          <View style={{ height: 20 }} />

          {/* Primary CTA: Verify OTP */}
          <Ux4gButton
            text="Verify OTP"
            variant="primary"
            size="large"
            height={48}
            width="100%"
            onPress={handleVerify}
          />
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
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: UX4GColors.gray900,
    lineHeight: 31,
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 14,
    color: UX4GColors.neutral500,
    lineHeight: 18,
  },
  bannerTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: UX4GColors.orange800,
    lineHeight: 18,
  },
  bannerSubtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  bannerSubtitleText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    color: UX4GColors.orange800,
    lineHeight: 18,
  },
  attemptBadge: {
    backgroundColor: UX4GColors.orange100,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    marginLeft: 8,
  },
  attemptBadgeText: {
    fontSize: 12,
    fontWeight: '500',
    color: UX4GColors.orange800,
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
  Ux4gStatusBanner,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-design-system';
import Svg, { Circle, Path } from 'react-native-svg';

const WarningIcon = ({ size = 20, color = UX4GColors.orange600 }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" fill={color} />
    <Path d="M12 7v6M12 16v1" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
  </Svg>
);

export const VerifyMobileAttemptWarningDefaultPattern = () => {
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    console.log('Verify OTP:', otp);
  };

  const handleBack = () => {
    console.log('Go back');
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

      {/* 2. Flat Layout with 32px Top Inset & Back Action */}
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

          <Text style={styles.title}>
            Verify your mobile{\\n}number
          </Text>
          <View style={{ height: 8 }} />
          <Text style={styles.subtitle}>OTP sent to +91 98765 XXXXX</Text>

          <View style={{ height: 24 }} />

          {/* 6 OTP boxes without caption */}
          <Ux4gOtpInput
            length={6}
            value={otp}
            onChanged={setOtp}
            boxSize={44}
            gap={8}
            showSeparator={false}
          />

          <View style={{ height: 16 }} />

          {/* Warning banner  Incorrect OTP with countdown to lockout */}
          <Ux4gStatusBanner
            variant="warningLight"
            backgroundColor={UX4GColors.orange50}
            borderColor={UX4GColors.orange300}
            title="Incorrect OTP"
            titleStyle={styles.bannerTitle}
            leadingIcon={<WarningIcon size={20} color={UX4GColors.orange600} />}
            subtitleWidget={
              <View style={styles.bannerSubtitleRow}>
                <Text style={styles.bannerSubtitleText}>
                  1 more incorrect entry{\\n}before 30-min lockout
                </Text>
                <View style={styles.attemptBadge}>
                  <Text style={styles.attemptBadgeText}>Attempt 1 of 3</Text>
                </View>
              </View>
            }
          />

          <View style={{ height: 20 }} />

          {/* Primary CTA: Verify OTP */}
          <Ux4gButton
            text="Verify OTP"
            variant="primary"
            size="large"
            height={48}
            width="100%"
            onPress={handleVerify}
          />
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
    paddingTop: 32,
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
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: UX4GColors.gray900,
    lineHeight: 31,
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 14,
    color: UX4GColors.neutral500,
    lineHeight: 18,
  },
  bannerTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: UX4GColors.orange800,
    lineHeight: 18,
  },
  bannerSubtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  bannerSubtitleText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    color: UX4GColors.orange800,
    lineHeight: 18,
  },
  attemptBadge: {
    backgroundColor: UX4GColors.orange100,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    marginLeft: 8,
  },
  attemptBadgeText: {
    fontSize: 12,
    fontWeight: '500',
    color: UX4GColors.orange800,
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

                {/* 2-line Title */}
                <h2
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    lineHeight: 1.2,
                    letterSpacing: '-0.3px',
                    color: colors.title,
                    margin: 0,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {`Verify your mobile\nnumber`}
                </h2>

                {/* Subtitle */}
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.3,
                    color: colors.subtleText,
                    margin: '8px 0 0 0',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  OTP sent to +91 98765 XXXXX
                </p>

                {/* 6 OTP boxes without caption */}
                <div style={{ marginTop: 20 }}>
                  <Ux4gOtpInput
                    key="verify_mobile_attempt_card"
                    length={6}
                    value={otp}
                    onChanged={(val) => setOtp(val)}
                    boxSize={44}
                    gap={8}
                    showSeparator={false}
                  />
                </div>

                {/* Warning Banner: Incorrect OTP with Attempt Pill */}
                <div
                  style={{
                    marginTop: 16,
                    backgroundColor: colors.bannerBg,
                    border: `1px solid ${colors.bannerBorder}`,
                    borderRadius: 8,
                    padding: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                  }}
                >
                  {/* Top row: Warning icon + Title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: 20,
                        color: colors.warningIcon,
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      error
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: colors.bannerTitle,
                        lineHeight: '18px',
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      }}
                    >
                      Incorrect OTP
                    </span>
                  </div>

                  {/* Bottom row: Subtitle + Attempt Badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingLeft: 28,
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: colors.bannerSubtitle,
                        lineHeight: '18px',
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {`1 more incorrect entry\nbefore 30-min lockout`}
                    </span>
                    <span
                      style={{
                        backgroundColor: colors.badgeBg,
                        color: colors.badgeText,
                        fontSize: 12,
                        fontWeight: 500,
                        padding: '4px 10px',
                        borderRadius: 6,
                        whiteSpace: 'nowrap',
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      }}
                    >
                      Attempt 1 of 3
                    </span>
                  </div>
                </div>

                {/* Verify OTP Primary Button */}
                <div style={{ marginTop: 20, width: '100%' }}>
                  <Ux4gButton
                    text="Verify OTP"
                    variant="primary"
                    size="large"
                    height={48}
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
              padding: '32px 20px 20px 20px',
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

              {/* 2-line Title */}
              <h2
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: '-0.3px',
                  color: colors.title,
                  margin: 0,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  whiteSpace: 'pre-line',
                }}
              >
                {`Verify your mobile\nnumber`}
              </h2>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.3,
                  color: colors.subtleText,
                  margin: '8px 0 0 0',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                OTP sent to +91 98765 XXXXX
              </p>

              {/* 6 OTP boxes without caption */}
              <div style={{ marginTop: 24 }}>
                <Ux4gOtpInput
                  key="verify_mobile_attempt_default"
                  length={6}
                  value={otp}
                  onChanged={(val) => setOtp(val)}
                  boxSize={44}
                  gap={8}
                  showSeparator={false}
                />
              </div>

              {/* Warning Banner: Incorrect OTP with Attempt Pill */}
              <div
                style={{
                  marginTop: 16,
                  backgroundColor: colors.bannerBg,
                  border: `1px solid ${colors.bannerBorder}`,
                  borderRadius: 8,
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                }}
              >
                {/* Top row: Warning icon + Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: 20,
                      color: colors.warningIcon,
                      fontVariationSettings: "'FILL' 1",
                    }}
                  >
                    error
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      color: colors.bannerTitle,
                      lineHeight: '18px',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Incorrect OTP
                  </span>
                </div>

                {/* Bottom row: Subtitle + Attempt Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingLeft: 28,
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: colors.bannerSubtitle,
                      lineHeight: '18px',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {`1 more incorrect entry\nbefore 30-min lockout`}
                  </span>
                  <span
                    style={{
                      backgroundColor: colors.badgeBg,
                      color: colors.badgeText,
                      fontSize: 12,
                      fontWeight: 500,
                      padding: '4px 10px',
                      borderRadius: 6,
                      whiteSpace: 'nowrap',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Attempt 1 of 3
                  </span>
                </div>
              </div>

              {/* Verify OTP Primary Button */}
              <div style={{ marginTop: 20, width: '100%' }}>
                <Ux4gButton
                  text="Verify OTP"
                  variant="primary"
                  size="large"
                  height={48}
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
          <h1 className="wb-title">Verify mobile with attempt warning</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Mobile-number OTP verification screen showing a warning banner after a wrong OTP. Counts down remaining attempts before a 30-minute lockout. Toggle between the flat layout and the card-style layout. Mobile-sized layout (360px).
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
                  filename={variant === 'card' ? 'VerifyMobileAttemptWarningCardPattern.tsx' : 'VerifyMobileAttemptWarningDefaultPattern.tsx'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyMobileAttemptWarningDoc;
