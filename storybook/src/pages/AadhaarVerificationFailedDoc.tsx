import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gButton } from '../../../src/components/button/Button';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface AadhaarVerificationFailedDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const AadhaarVerificationFailedDoc: React.FC<AadhaarVerificationFailedDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');

  // Color Palette tokens matching Flutter Design System
  const colors = useMemo(() => {
    return {
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      defaultScreenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral0,
      cardScreenBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
      cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      title: isDark ? UX4GColors.neutral50 : UX4GColors.gray900,
      subtitle: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      primary: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      menuBorder: isDark ? UX4GColors.primary400 : '#C0B3FF',
      menuIcon: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      // Error Badge & Banner tokens
      badgeOuterBg: isDark ? 'rgba(239, 68, 68, 0.2)' : '#FEE2E2',
      badgeInnerBg: '#DC2626',
      bannerBg: isDark ? '#450A0A' : '#FFF5F5',
      bannerBorder: isDark ? '#7F1D1D' : '#FECACA',
      bannerTitle: isDark ? '#FCA5A5' : '#991B1B',
      bannerIcon: isDark ? '#F87171' : '#DC2626',
      attemptPillBg: isDark ? 'rgba(239, 68, 68, 0.25)' : '#FEE2E2',
      attemptPillText: isDark ? '#FCA5A5' : '#991B1B',
    };
  }, [isDark]);

  // TSX Code Strings for Default and Card style variants
  const codeString = useMemo(() => {
    if (variant === 'card') {
      return `import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';

export const AadhaarVerificationFailedCardPattern = ({ isDark = false }: { isDark?: boolean }) => {
  return (
    <View style={[styles.container, { backgroundColor: isDark ? UX4GColors.primary800 : UX4GColors.primary100 }]}>
      {/* App Header with Menu Action */}
      <Ux4gAppHeader
        variant={isDark ? 'dark' : 'light'}
        leadingWidgets={[
          <View style={styles.headerLeading} key="leading">
            <Image
              source={{ uri: '/national_emblem_logo.svg' }}
              style={[styles.emblemImage, isDark && { tintColor: '#FFFFFF' }]}
              resizeMode="contain"
            />
            <View style={[styles.headerDivider, { backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300 }]} />
            <Image
              source={{ uri: '/Union.svg' }}
              style={styles.unionImage}
              resizeMode="contain"
            />
          </View>
        ]}
        actions={[
          <TouchableOpacity
            key="menu"
            style={[
              styles.menuBtn,
              {
                backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
                borderColor: isDark ? UX4GColors.primary400 : '#C0B3FF',
              },
            ]}
            onPress={() => {}}
          >
            <Text style={{ color: isDark ? UX4GColors.primary300 : UX4GColors.primary, fontSize: 18 }}>☰</Text>
          </TouchableOpacity>
        ]}
      />
      <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />

      {/* Floating Card Container */}
      <View style={styles.cardWrapper}>
        <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0 }]}>
          {/* Centered Red Error Badge */}
          <View style={styles.badgeContainer}>
            <View style={[styles.badgeOuter, { backgroundColor: isDark ? 'rgba(239, 68, 68, 0.2)' : '#FEE2E2' }]}>
              <View style={styles.badgeInner}>
                <Text style={styles.badgeIcon}>!</Text>
              </View>
            </View>
          </View>

          <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
            Authentication Failed
          </Text>
          <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            The OTP entered is incorrect. You have 2 attempts remaining before your account is temporarily locked.
          </Text>

          {/* Divider above error banner */}
          <View style={[styles.cardDivider, { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200 }]} />

          {/* Error Banner */}
          <View
            style={[
              styles.errorBanner,
              {
                backgroundColor: isDark ? '#450A0A' : '#FFF5F5',
                borderColor: isDark ? '#7F1D1D' : '#FECACA',
              },
            ]}
          >
            <View style={styles.errorTitleRow}>
              <View style={[styles.errorIconCircle, { backgroundColor: '#DC2626' }]}>
                <Text style={styles.errorIconExcl}>!</Text>
              </View>
              <Text style={[styles.errorBannerText, { color: isDark ? '#FCA5A5' : '#991B1B' }]}>
                Verification failed, Please try a different method or try again
              </Text>
            </View>
            <View style={[styles.attemptPill, { backgroundColor: isDark ? 'rgba(239, 68, 68, 0.25)' : '#FEE2E2' }]}>
              <Text style={[styles.attemptPillText, { color: isDark ? '#FCA5A5' : '#991B1B' }]}>
                Attempt 1 of 2
              </Text>
            </View>
          </View>

          {/* Divider below error banner */}
          <View style={[styles.divider, { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200 }]} />

          {/* Action Buttons inside Card */}
          <View style={styles.actionBtnRow}>
            <TouchableOpacity onPress={() => {}} style={styles.ghostBtn}>
              <Text style={{ color: isDark ? UX4GColors.primary300 : UX4GColors.primary, fontWeight: '600', fontSize: 15 }}>
                Try Different Method
              </Text>
            </TouchableOpacity>
            <Ux4gButton
              text="Try Again"
              onPress={() => alert('Retrying...')}
              size="medium"
              height={44}
            />
          </View>
        </View>
      </View>

      {/* Digital India Footer outside Card */}
      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
          Powered by -
        </Text>
        <Image
          source={{ uri: '/Digital_India_logo.svg' }}
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
    paddingBottom: 16,
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
  unionImage: {
    width: 32,
    height: 32,
  },
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardWrapper: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  card: {
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 4,
  },
  badgeContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  badgeOuter: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeInner: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#DC2626',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeIcon: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    lineHeight: 31.2,
    letterSpacing: -0.3,
    marginBottom: 8,
    fontFamily: 'Inter',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18.2,
    fontFamily: 'Inter',
    marginBottom: 16,
  },
  cardDivider: {
    height: 1,
    width: '100%',
    marginBottom: 16,
  },
  errorBanner: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 14,
  },
  errorTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  errorIconCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  errorIconExcl: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
    lineHeight: 12,
  },
  errorBannerText: {
    fontSize: 13.5,
    fontWeight: '500',
    lineHeight: 18,
    flex: 1,
    fontFamily: 'Inter',
  },
  attemptPill: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginTop: 8,
    marginLeft: 24,
  },
  attemptPillText: {
    fontSize: 11.5,
    fontWeight: '600',
    fontFamily: 'Inter',
  },
  divider: {
    height: 1,
    width: '100%',
    marginTop: 24,
    marginBottom: 16,
  },
  actionBtnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ghostBtn: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginTop: 'auto',
    paddingTop: 16,
  },
  footerText: {
    fontSize: 11,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  digitalIndiaLogo: {
    height: 22,
    width: 100,
  },
});`;
    }

    return `import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';

export const AadhaarVerificationFailedDefaultPattern = ({ isDark = false }: { isDark?: boolean }) => {
  return (
    <View style={[styles.container, { backgroundColor: isDark ? UX4GColors.neutral950 : UX4GColors.neutral0 }]}>
      {/* App Header with Menu Action */}
      <Ux4gAppHeader
        variant={isDark ? 'dark' : 'light'}
        leadingWidgets={[
          <View style={styles.headerLeading} key="leading">
            <Image
              source={{ uri: '/national_emblem_logo.svg' }}
              style={[styles.emblemImage, isDark && { tintColor: '#FFFFFF' }]}
              resizeMode="contain"
            />
            <View style={[styles.headerDivider, { backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300 }]} />
            <Image
              source={{ uri: '/Union.svg' }}
              style={styles.unionImage}
              resizeMode="contain"
            />
          </View>
        ]}
        actions={[
          <TouchableOpacity
            key="menu"
            style={[
              styles.menuBtn,
              {
                backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
                borderColor: isDark ? UX4GColors.primary400 : '#C0B3FF',
              },
            ]}
            onPress={() => {}}
          >
            <Text style={{ color: isDark ? UX4GColors.primary300 : UX4GColors.primary, fontSize: 18 }}>☰</Text>
          </TouchableOpacity>
        ]}
      />
      <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />

      {/* Main Content */}
      <View style={styles.content}>
        {/* Centered Red Error Badge */}
        <View style={styles.badgeContainer}>
          <View style={[styles.badgeOuter, { backgroundColor: isDark ? 'rgba(239, 68, 68, 0.2)' : '#FEE2E2' }]}>
            <View style={styles.badgeInner}>
              <Text style={styles.badgeIcon}>!</Text>
            </View>
          </View>
        </View>

        <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
          Authentication Failed
        </Text>
        <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
          The OTP entered is incorrect. You have 2 attempts remaining before your account is temporarily locked.
        </Text>

        <View style={styles.gap20} />

        {/* Error Banner */}
        <View
          style={[
            styles.errorBanner,
            {
              backgroundColor: isDark ? '#450A0A' : '#FFF5F5',
              borderColor: isDark ? '#7F1D1D' : '#FECACA',
            },
          ]}
        >
          <View style={styles.errorTitleRow}>
            <View style={[styles.errorIconCircle, { backgroundColor: '#DC2626' }]}>
              <Text style={styles.errorIconExcl}>!</Text>
            </View>
            <Text style={[styles.errorBannerText, { color: isDark ? '#FCA5A5' : '#991B1B' }]}>
              Verification failed, Please try a different method or try again
            </Text>
          </View>
          <View style={[styles.attemptPill, { backgroundColor: isDark ? 'rgba(239, 68, 68, 0.25)' : '#FEE2E2' }]}>
            <Text style={[styles.attemptPillText, { color: isDark ? '#FCA5A5' : '#991B1B' }]}>
              Attempt 1 of 2
            </Text>
          </View>
        </View>
      </View>

      {/* Footer Section */}
      <View style={styles.footerSection}>
        <View style={[styles.divider, { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200 }]} />
        <View style={styles.actionBtnRow}>
          <TouchableOpacity onPress={() => {}} style={styles.ghostBtn}>
            <Text style={{ color: isDark ? UX4GColors.primary300 : UX4GColors.primary, fontWeight: '600', fontSize: 15 }}>
              Try Different Method
            </Text>
          </TouchableOpacity>
          <Ux4gButton
            text="Try Again"
            onPress={() => alert('Retrying...')}
            size="medium"
            height={44}
          />
        </View>

        {/* Digital India Footer */}
        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            Powered by -
          </Text>
          <Image
            source={{ uri: '/Digital_India_logo.svg' }}
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
    paddingBottom: 16,
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
  unionImage: {
    width: 32,
    height: 32,
  },
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
    flex: 1,
  },
  badgeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  badgeOuter: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeInner: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#DC2626',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeIcon: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  gap20: {
    height: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    lineHeight: 31.2,
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
  errorBanner: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 14,
  },
  errorTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  errorIconCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  errorIconExcl: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
    lineHeight: 12,
  },
  errorBannerText: {
    fontSize: 13.5,
    fontWeight: '500',
    lineHeight: 18,
    flex: 1,
    fontFamily: 'Inter',
  },
  attemptPill: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginTop: 8,
    marginLeft: 24,
  },
  attemptPillText: {
    fontSize: 11.5,
    fontWeight: '600',
    fontFamily: 'Inter',
  },
  footerSection: {
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
  divider: {
    height: 1,
    width: '100%',
    marginBottom: 16,
  },
  actionBtnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  ghostBtn: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  footerText: {
    fontSize: 11,
    fontWeight: '400',
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

    const renderBanner = () => (
      <div
        style={{
          backgroundColor: colors.bannerBg,
          border: `1px solid ${colors.bannerBorder}`,
          borderRadius: 10,
          padding: '14px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 8,
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 8,
              backgroundColor: colors.bannerIcon,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontSize: 11,
              fontWeight: 800,
              lineHeight: 1,
              marginTop: 2,
              flexShrink: 0,
            }}
          >
            !
          </div>
          <span
            style={{
              fontSize: 13.5,
              fontWeight: 500,
              color: colors.bannerTitle,
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              lineHeight: 1.35,
            }}
          >
            Verification failed, Please try a different method or try again
          </span>
        </div>
        <div
          style={{
            padding: '3px 8px',
            backgroundColor: colors.attemptPillBg,
            borderRadius: 6,
            display: 'inline-flex',
            alignSelf: 'flex-start',
            marginTop: 8,
            marginLeft: 24,
          }}
        >
          <span
            style={{
              fontSize: 11.5,
              fontWeight: 600,
              color: colors.attemptPillText,
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            }}
          >
            Attempt 1 of 2
          </span>
        </div>
      </div>
    );

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
        {/* Brand Header with Menu Action Button */}
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
            actions={[
              {
                customWidget: (
                  <div
                    key="menuAction"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      border: `1.5px solid ${colors.menuBorder}`,
                      backgroundColor: colors.headerBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <span
                      style={{
                        fontSize: 18,
                        color: colors.menuIcon,
                        lineHeight: 1,
                      }}
                    >
                      ☰
                    </span>
                  </div>
                ),
              },
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
              {/* Soft lavender gap above card */}
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
                {/* Centered Red Error Badge */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 32,
                      backgroundColor: colors.badgeOuterBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 16,
                        backgroundColor: colors.badgeInnerBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        fontSize: 18,
                        fontWeight: 800,
                      }}
                    >
                      !
                    </div>
                  </div>
                </div>

                <h2
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    lineHeight: 1.2,
                    letterSpacing: '-0.3px',
                    color: colors.title,
                    margin: 0,
                    marginBottom: 8,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Authentication Failed
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 1.4,
                    color: colors.subtitle,
                    margin: 0,
                    marginBottom: 16,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  The OTP entered is incorrect. You have 2 attempts remaining before your account is temporarily locked.
                </p>

                {/* Subtle Divider above error banner */}
                <div
                  style={{
                    height: 1,
                    backgroundColor: colors.border,
                    width: '100%',
                    marginBottom: 16,
                  }}
                />

                {/* Error Banner */}
                {renderBanner()}

                {/* Subtle Divider below error banner inside Card */}
                <div
                  style={{
                    height: 1,
                    backgroundColor: colors.border,
                    width: '100%',
                    marginTop: 24,
                    marginBottom: 16,
                  }}
                />

                {/* Action Buttons inside Card */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {}}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      padding: '8px 4px',
                      color: colors.primary,
                      fontSize: 15,
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Try Different Method
                  </button>
                  <Ux4gButton
                    text="Try Again"
                    onPress={() => alert('Retrying...')}
                    size="medium"
                    height={44}
                  />
                </div>
              </div>
            </div>

            {/* Footer Section outside Card */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
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
              {/* Centered Red Error Badge */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 32,
                    backgroundColor: colors.badgeOuterBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 16,
                      backgroundColor: colors.badgeInnerBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontSize: 18,
                      fontWeight: 800,
                    }}
                  >
                    !
                  </div>
                </div>
              </div>

              <h2
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: '-0.3px',
                  color: colors.title,
                  margin: 0,
                  marginBottom: 8,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Authentication Failed
              </h2>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: colors.subtitle,
                  margin: 0,
                  marginBottom: 20,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                The OTP entered is incorrect. You have 2 attempts remaining before your account is temporarily locked.
              </p>

              {/* Error Banner */}
              {renderBanner()}
            </div>

            {/* Bottom Section */}
            <div>
              <div
                style={{
                  height: 1,
                  backgroundColor: colors.border,
                  width: '100%',
                  marginBottom: 16,
                }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 16,
                }}
              >
                <button
                  type="button"
                  onClick={() => {}}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '8px 4px',
                    color: colors.primary,
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Try Different Method
                </button>
                <Ux4gButton
                  text="Try Again"
                  onPress={() => alert('Retrying...')}
                  size="medium"
                  height={44}
                />
              </div>

              {/* Footer */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 4,
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
            <span>Patterns</span> / <span>Identity and Access</span> / <span>Aadhaar Authentication Gate</span> / <span className="active">Aadhaar verification failed</span>
          </div>
          <h1 className="wb-title">Aadhaar verification failed</h1>
          <p className="wb-subtitle">
            Failure state of the Aadhaar authentication flow shown after a failed OTP or face-match attempt. Displays an attempt counter, a retry action, and a fallback to switch authentication methods.
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
                  filename={variant === 'card' ? 'AadhaarVerificationFailedCardPattern.tsx' : 'AadhaarVerificationFailedDefaultPattern.tsx'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AadhaarVerificationFailedDoc;
