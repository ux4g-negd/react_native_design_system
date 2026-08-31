import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gStatusBanner } from '../../../src/components/status-banner/StatusBanner';
import { Ux4gCard } from '../../../src/components/card/Card';
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
      defaultScreenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
      cardScreenBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
      cardBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      title: isDark ? UX4GColors.neutral50 : UX4GColors.gray900,
      subtitle: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      primary: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      menuBorder: isDark ? UX4GColors.primary600 : UX4GColors.primary300,
      menuIcon: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      // Error Badge & Banner tokens
      badgeOuterBg: isDark ? UX4GColors.red900 : UX4GColors.red100,
      badgeInnerBg: UX4GColors.red600,
      bannerTitle: isDark ? UX4GColors.red300 : UX4GColors.red800,
      bannerIcon: isDark ? UX4GColors.red500 : UX4GColors.red600,
      attemptPillBg: isDark ? UX4GColors.red800 : UX4GColors.red200,
      attemptPillText: isDark ? UX4GColors.red300 : UX4GColors.red800,
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
  Ux4gStatusBanner,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const AadhaarVerificationFailedCardPattern = ({ isDark = false }: { isDark?: boolean }) => {
  return (
    <View style={[styles.container, { backgroundColor: isDark ? UX4GColors.primary800 : UX4GColors.primary100 }]}>
      {/* App Header with Menu Action */}
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
            <Text style={[styles.unionText, { color: isDark ? UX4GColors.primary300 : UX4GColors.primary }]}>
              UNION
            </Text>
          </View>
        ]}
        actions={[
          {
            customWidget: (
              <TouchableOpacity
                key="menu"
                style={[
                  styles.menuBtn,
                  {
                    backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
                    borderColor: isDark ? UX4GColors.primary600 : UX4GColors.primary300,
                  },
                ]}
                onPress={() => {}}
              >
                <Text style={{ color: isDark ? UX4GColors.primary300 : UX4GColors.primary, fontSize: 18 }}>☰</Text>
              </TouchableOpacity>
            ),
          },
        ]}
      />
      <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />

      {/* Floating Card Container */}
      <View style={styles.cardWrapper}>
        <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.gray900 : '#FFFFFF' }]}>
          {/* Red Error Badge */}
          <View style={[styles.badgeOuter, { backgroundColor: isDark ? UX4GColors.red900 : UX4GColors.red100 }]}>
            <View style={styles.badgeInner}>
              <Text style={styles.badgeIcon}>!</Text>
            </View>
          </View>
          <View style={styles.gap16} />

          <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
            Authentication Failed
          </Text>
          <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            The OTP entered is incorrect. You have 2 attempts remaining before your account is temporarily locked.
          </Text>
          <View style={styles.gap12} />

          <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />
          <View style={styles.gap4} />

          {/* Inline Error Banner */}
          <Ux4gStatusBanner
            variant="errorLight"
            title={'Verification failed, Please try a different\nmethod or try again'}
            marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
            paddingStyle={{ paddingHorizontal: 12, paddingVertical: 12 }}
            titleStyle={{
              fontSize: 13,
              fontWeight: '500',
              color: isDark ? UX4GColors.red300 : UX4GColors.red800,
              lineHeight: 17.55,
            }}
            subtitleWidget={
              <View style={[styles.attemptPill, { backgroundColor: isDark ? UX4GColors.red800 : UX4GColors.red200 }]}>
                <Text style={[styles.attemptPillText, { color: isDark ? UX4GColors.red300 : UX4GColors.red800 }]}>
                  Attempt 1 of 2
                </Text>
              </View>
            }
          />
        </View>
      </View>

      <View style={styles.flex1} />

      {/* Footer Section */}
      <View style={styles.cardFooterSection}>
        <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />
        <View style={styles.gap6} />
        <View style={styles.actionRow}>
          <Ux4gButton
            text="Try Different Method"
            onPress={() => {}}
            variant="ghost"
            size="medium"
            height={48}
          />
          <Ux4gButton
            text="Try Again"
            onPress={() => {}}
            size="medium"
            height={48}
          />
        </View>
        <View style={styles.gap8} />

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
  container: { flex: 1, justifyContent: 'space-between' },
  headerLeading: { flexDirection: 'row', alignItems: 'center' },
  emblemImage: { height: 32, width: 24 },
  headerDivider: { width: 1, height: 24, marginHorizontal: 8 },
  unionText: { fontSize: 16, fontWeight: '700' },
  menuBtn: { width: 40, height: 40, borderRadius: 10, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center' },
  cardWrapper: { paddingHorizontal: 16, paddingTop: 16 },
  card: { borderRadius: 16, paddingHorizontal: 20, paddingVertical: 20, elevation: 4 },
  badgeOuter: { width: 64, height: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center' },
  badgeInner: { width: 36, height: 36, borderRadius: 18, backgroundColor: UX4GColors.red600, justifyContent: 'center', alignItems: 'center' },
  badgeIcon: { color: '#FFFFFF', fontSize: 20, fontWeight: '800' },
  flex1: { flex: 1 },
  gap4: { height: 4 },
  gap6: { height: 6 },
  gap8: { height: 8 },
  gap12: { height: 12 },
  gap16: { height: 16 },
  title: { fontSize: 26, fontWeight: '800', lineHeight: 31.2, letterSpacing: -0.3, marginBottom: 8, fontFamily: 'Inter' },
  subtitle: { fontSize: 14, fontWeight: '400', lineHeight: 18.9, fontFamily: 'Inter' },
  attemptPill: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, alignSelf: 'flex-start' },
  attemptPillText: { fontSize: 11, fontWeight: '500', lineHeight: 13.2, fontFamily: 'Inter' },
  cardFooterSection: { paddingHorizontal: 20, paddingBottom: 20 },
  actionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  footer: { alignItems: 'center' },
  footerText: { fontSize: 11, fontWeight: '400', marginBottom: 4, fontFamily: 'Inter' },
  digitalIndiaLogo: { height: 22, width: 100 },
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
  Ux4gStatusBanner,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const AadhaarVerificationFailedDefaultPattern = ({ isDark = false }: { isDark?: boolean }) => {
  return (
    <View style={[styles.container, { backgroundColor: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50 }]}>
      {/* App Header with Menu Action */}
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
            <Text style={[styles.unionText, { color: isDark ? UX4GColors.primary300 : UX4GColors.primary }]}>
              UNION
            </Text>
          </View>
        ]}
        actions={[
          {
            customWidget: (
              <TouchableOpacity
                key="menu"
                style={[
                  styles.menuBtn,
                  {
                    backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
                    borderColor: isDark ? UX4GColors.primary600 : UX4GColors.primary300,
                  },
                ]}
                onPress={() => {}}
              >
                <Text style={{ color: isDark ? UX4GColors.primary300 : UX4GColors.primary, fontSize: 18 }}>☰</Text>
              </TouchableOpacity>
            ),
          },
        ]}
      />
      <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />

      {/* Main Content */}
      <View style={styles.content}>
        {/* Red Error Badge */}
        <View style={[styles.badgeOuter, { backgroundColor: isDark ? UX4GColors.red900 : UX4GColors.red100 }]}>
          <View style={styles.badgeInner}>
            <Text style={styles.badgeIcon}>!</Text>
          </View>
        </View>
        <View style={styles.gap16} />

        <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
          Authentication Failed
        </Text>
        <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
          The OTP entered is incorrect. You have 2 attempts remaining before your account is temporarily locked.
        </Text>
        <View style={styles.gap16} />

        {/* Inline Error Banner */}
        <Ux4gStatusBanner
          variant="errorLight"
          title={'Verification failed, Please try a different\nmethod or try again'}
          marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
          paddingStyle={{ paddingHorizontal: 12, paddingVertical: 12 }}
          titleStyle={{
            fontSize: 13,
            fontWeight: '500',
            color: isDark ? UX4GColors.red300 : UX4GColors.red800,
            lineHeight: 17.55,
          }}
          subtitleWidget={
            <View style={[styles.attemptPill, { backgroundColor: isDark ? UX4GColors.red800 : UX4GColors.red200 }]}>
              <Text style={[styles.attemptPillText, { color: isDark ? UX4GColors.red300 : UX4GColors.red800 }]}>
                Attempt 1 of 2
              </Text>
            </View>
          }
        />
      </View>

      {/* Footer Section */}
      <View style={styles.footerSection}>
        <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />
        <View style={styles.gap6} />
        <View style={styles.actionRow}>
          <Ux4gButton
            text="Try Different Method"
            onPress={() => {}}
            variant="ghost"
            size="medium"
            height={48}
          />
          <Ux4gButton
            text="Try Again"
            onPress={() => {}}
            size="medium"
            height={48}
          />
        </View>
        <View style={styles.gap8} />

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
  container: { flex: 1, justifyContent: 'space-between' },
  headerLeading: { flexDirection: 'row', alignItems: 'center' },
  emblemImage: { height: 32, width: 24 },
  headerDivider: { width: 1, height: 24, marginHorizontal: 8 },
  unionText: { fontSize: 16, fontWeight: '700' },
  menuBtn: { width: 40, height: 40, borderRadius: 10, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center' },
  content: { paddingHorizontal: 20, paddingTop: 20, flex: 1 },
  badgeOuter: { width: 64, height: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center' },
  badgeInner: { width: 36, height: 36, borderRadius: 18, backgroundColor: UX4GColors.red600, justifyContent: 'center', alignItems: 'center' },
  badgeIcon: { color: '#FFFFFF', fontSize: 20, fontWeight: '800' },
  gap6: { height: 6 },
  gap8: { height: 8 },
  gap16: { height: 16 },
  title: { fontSize: 26, fontWeight: '800', lineHeight: 31.2, letterSpacing: -0.3, marginBottom: 8, fontFamily: 'Inter' },
  subtitle: { fontSize: 14, fontWeight: '400', lineHeight: 18.9, fontFamily: 'Inter' },
  attemptPill: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, alignSelf: 'flex-start' },
  attemptPillText: { fontSize: 11, fontWeight: '500', lineHeight: 13.2, fontFamily: 'Inter' },
  footerSection: { paddingHorizontal: 20, paddingBottom: 20 },
  actionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  footer: { alignItems: 'center' },
  footerText: { fontSize: 11, fontWeight: '400', marginBottom: 4, fontFamily: 'Inter' },
  digitalIndiaLogo: { height: 22, width: 100 },
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
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      border: `1.5px solid ${colors.menuBorder}`,
                      backgroundColor: colors.headerBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: 20,
                        color: colors.menuIcon,
                      }}
                    >
                      menu
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
            }}
          >
            <div style={{ padding: '0 16px' }}>
              <div style={{ height: 16 }} />

              {/* Floating Card Container */}
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: '20px',
                  boxShadow: isDark
                    ? '0 4px 16px rgba(0, 0, 0, 0.4)'
                    : '0 4px 16px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Red Error Badge */}
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
                      width: 36,
                      height: 36,
                      borderRadius: 18,
                      backgroundColor: colors.badgeInnerBg,
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
                        fontWeight: 800,
                      }}
                    >
                      priority_high
                    </span>
                  </div>
                </div>
                <div style={{ height: 16 }} />

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
                    lineHeight: 1.35,
                    color: colors.subtitle,
                    margin: 0,
                    marginBottom: 12,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  The OTP entered is incorrect. You have 2 attempts remaining before your account is temporarily locked.
                </p>

                {/* Card divider */}
                <div
                  style={{
                    height: 1,
                    backgroundColor: colors.border,
                    width: '100%',
                    marginBottom: 16,
                  }}
                />

                {/* Inline Error Status Banner */}
                <Ux4gStatusBanner
                  variant="errorLight"
                  title={'Verification failed, Please try a different\nmethod or try again'}
                  marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
                  paddingStyle={{ paddingLeft: 12, paddingTop: 12, paddingRight: 10, paddingBottom: 12 }}
                  titleStyle={{
                    fontSize: 13,
                    fontWeight: '500',
                    color: colors.bannerTitle,
                    lineHeight: 17.55,
                    whiteSpace: 'pre-line',
                  } as any}
                  leadingIcon={
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: 18,
                        color: colors.bannerIcon,
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      error
                    </span>
                  }
                  subtitleWidget={
                    <div
                      style={{
                        padding: '4px 10px',
                        backgroundColor: colors.attemptPillBg,
                        borderRadius: 6,
                        display: 'inline-flex',
                        alignSelf: 'flex-start',
                        width: 'fit-content',
                      }}
                    >
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 500,
                          color: colors.attemptPillText,
                          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                          lineHeight: '13.2px',
                        }}
                      >
                        Attempt 1 of 2
                      </span>
                    </div>
                  }
                />
              </div>
            </div>

            {/* Action Footer */}
            <div style={{ padding: '12px 20px 20px 20px' }}>
              <div
                style={{
                  height: 1,
                  backgroundColor: colors.border,
                  width: '100%',
                  marginBottom: 6,
                }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Ux4gButton
                  text="Try Different Method"
                  onPress={() => alert('Choosing different method...')}
                  variant="ghost"
                  size="medium"
                  height={48}
                />
                <Ux4gButton
                  text="Try Again"
                  onPress={() => alert('Retrying...')}
                  size="medium"
                  height={48}
                />
              </div>
              <div style={{ height: 8 }} />

              {/* Digital India Footer */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
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
        ) : (
          /* Default Layout Variant */
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '20px 20px 20px 20px',
              backgroundColor: colors.defaultScreenBg,
            }}
          >
            <div>
              {/* Red Error Badge */}
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
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    backgroundColor: colors.badgeInnerBg,
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
                      fontWeight: 800,
                    }}
                  >
                    priority_high
                  </span>
                </div>
              </div>
              <div style={{ height: 16 }} />

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
                  lineHeight: 1.35,
                  color: colors.subtitle,
                  margin: 0,
                  marginBottom: 16,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                The OTP entered is incorrect. You have 2 attempts remaining before your account is temporarily locked.
              </p>

              {/* Inline Error Status Banner */}
              <Ux4gStatusBanner
                variant="errorLight"
                title={'Verification failed, Please try a different\nmethod or try again'}
                marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
                paddingStyle={{ paddingLeft: 12, paddingTop: 12, paddingRight: 10, paddingBottom: 12 }}
                titleStyle={{
                  fontSize: 13,
                  fontWeight: '500',
                  color: colors.bannerTitle,
                  lineHeight: 17.55,
                  whiteSpace: 'pre-line',
                } as any}
                leadingIcon={
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: 18,
                      color: colors.bannerIcon,
                      fontVariationSettings: "'FILL' 1",
                    }}
                  >
                    error
                  </span>
                }
                subtitleWidget={
                  <div
                    style={{
                      padding: '4px 10px',
                      backgroundColor: colors.attemptPillBg,
                      borderRadius: 6,
                      display: 'inline-flex',
                      alignSelf: 'flex-start',
                      width: 'fit-content',
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        color: colors.attemptPillText,
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                        lineHeight: '13.2px',
                      }}
                    >
                      Attempt 1 of 2
                    </span>
                  </div>
                }
              />
            </div>

            {/* Bottom Section */}
            <div>
              <div
                style={{
                  height: 1,
                  backgroundColor: colors.border,
                  width: '100%',
                  marginBottom: 6,
                }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Ux4gButton
                  text="Try Different Method"
                  onPress={() => alert('Choosing different method...')}
                  variant="ghost"
                  size="medium"
                  height={48}
                />
                <Ux4gButton
                  text="Try Again"
                  onPress={() => alert('Retrying...')}
                  size="medium"
                  height={48}
                />
              </div>
              <div style={{ height: 8 }} />

              {/* Digital India Footer */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
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
            Failure state of the Aadhaar gate flow. Shows a red error badge, a clear failure title, a description that includes the remaining-attempts count, and an inline error banner with an attempt counter pill.
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
