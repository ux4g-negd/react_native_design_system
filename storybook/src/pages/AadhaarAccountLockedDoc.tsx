import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gButton } from '../../../src/components/button/Button';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface AadhaarAccountLockedDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const AadhaarAccountLockedDoc: React.FC<AadhaarAccountLockedDocProps> = ({ isDark }) => {
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
      // Lock Badge tokens
      lockBadgeOuterBg: isDark ? UX4GColors.red900 : UX4GColors.red50,
      lockBadgeInnerBg: isDark ? UX4GColors.red800 : UX4GColors.red100,
      lockBadgeIconColor: isDark ? UX4GColors.red400 : UX4GColors.red600,
      // Yellow Countdown Box tokens
      countdownBoxBg: isDark ? UX4GColors.orange900 : UX4GColors.orange50,
      countdownHeader: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      countdownTimer: isDark ? UX4GColors.orange300 : UX4GColors.orange800,
      countdownInfoText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
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
} from 'ux4g-react-native-design-system';

export const AadhaarAccountLockedCardPattern = ({ isDark = false }: { isDark?: boolean }) => {
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
          {/* Red Lock Badge */}
          <View style={[styles.badgeOuter, { backgroundColor: isDark ? UX4GColors.red900 : UX4GColors.red50 }]}>
            <View style={[styles.badgeInner, { backgroundColor: isDark ? UX4GColors.red800 : UX4GColors.red100 }]}>
              <Text style={[styles.lockIcon, { color: isDark ? UX4GColors.red400 : UX4GColors.red600 }]}>🔒</Text>
            </View>
          </View>
          <View style={styles.gap16} />

          <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
            Account Locked
          </Text>
          <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            Your Aadhaar authentication has been suspended due to too many failed attempts.
          </Text>
          <View style={styles.gap24} />

          {/* Yellow Countdown Box */}
          <View style={[styles.countdownBox, { backgroundColor: isDark ? UX4GColors.orange900 : UX4GColors.orange50 }]}>
            <Text style={[styles.countdownHeader, { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700 }]}>
              Try again in
            </Text>
            <View style={styles.gap8} />
            <Text style={[styles.countdownTimer, { color: isDark ? UX4GColors.orange300 : UX4GColors.orange800 }]}>
              23:45:00
            </Text>
            <View style={styles.gap16} />
            <Text style={[styles.countdownInfoText, { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700 }]}>
              Your account will be unlocked automatically. If you need immediate assistance, contact UIDAI support.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.flex1} />

      {/* Footer Section */}
      <View style={styles.cardFooterSection}>
        <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />
        <View style={styles.gap12} />
        <Ux4gButton
          text="Contact UIDAI Support"
          onPress={() => {}}
          variant="outline"
          size="large"
          height={48}
        />
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
  badgeInner: { width: 36, height: 36, borderRadius: 18, justifyContent: 'center', alignItems: 'center' },
  lockIcon: { fontSize: 20 },
  flex1: { flex: 1 },
  gap8: { height: 8 },
  gap12: { height: 12 },
  gap16: { height: 16 },
  gap24: { height: 24 },
  title: { fontSize: 26, fontWeight: '800', lineHeight: 31.2, letterSpacing: -0.3, marginBottom: 8, fontFamily: 'Inter' },
  subtitle: { fontSize: 14, fontWeight: '400', lineHeight: 18.9, fontFamily: 'Inter' },
  countdownBox: { width: '100%', padding: 20, borderRadius: 12, alignItems: 'center' },
  countdownHeader: { fontSize: 16, fontWeight: '700', fontFamily: 'Inter' },
  countdownTimer: { fontSize: 32, fontWeight: '800', letterSpacing: 1, fontFamily: 'Inter' },
  countdownInfoText: { fontSize: 12, fontWeight: '400', textAlign: 'center', lineHeight: 16.8, fontFamily: 'Inter' },
  cardFooterSection: { paddingHorizontal: 20, paddingBottom: 20 },
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
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const AadhaarAccountLockedDefaultPattern = ({ isDark = false }: { isDark?: boolean }) => {
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
        {/* Red Lock Badge */}
        <View style={[styles.badgeOuter, { backgroundColor: isDark ? UX4GColors.red900 : UX4GColors.red50 }]}>
          <View style={[styles.badgeInner, { backgroundColor: isDark ? UX4GColors.red800 : UX4GColors.red100 }]}>
            <Text style={[styles.lockIcon, { color: isDark ? UX4GColors.red400 : UX4GColors.red600 }]}>🔒</Text>
          </View>
        </View>
        <View style={styles.gap16} />

        <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
          Account Locked
        </Text>
        <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
          Your Aadhaar authentication has been suspended due to too many failed attempts.
        </Text>
        <View style={styles.gap24} />

        {/* Yellow Countdown Box */}
        <View style={[styles.countdownBox, { backgroundColor: isDark ? UX4GColors.orange900 : UX4GColors.orange50 }]}>
          <Text style={[styles.countdownHeader, { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700 }]}>
            Try again in
          </Text>
          <View style={styles.gap8} />
          <Text style={[styles.countdownTimer, { color: isDark ? UX4GColors.orange300 : UX4GColors.orange800 }]}>
            23:45:00
          </Text>
          <View style={styles.gap16} />
          <Text style={[styles.countdownInfoText, { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700 }]}>
            Your account will be unlocked automatically. If you need immediate assistance, contact UIDAI support.
          </Text>
        </View>
      </View>

      {/* Footer Section */}
      <View style={styles.footerSection}>
        <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />
        <View style={styles.gap12} />
        <Ux4gButton
          text="Contact UIDAI Support"
          onPress={() => {}}
          variant="outline"
          size="large"
          height={48}
        />
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
  badgeInner: { width: 36, height: 36, borderRadius: 18, justifyContent: 'center', alignItems: 'center' },
  lockIcon: { fontSize: 20 },
  gap8: { height: 8 },
  gap12: { height: 12 },
  gap16: { height: 16 },
  gap24: { height: 24 },
  title: { fontSize: 26, fontWeight: '800', lineHeight: 31.2, letterSpacing: -0.3, marginBottom: 8, fontFamily: 'Inter' },
  subtitle: { fontSize: 14, fontWeight: '400', lineHeight: 18.9, fontFamily: 'Inter' },
  countdownBox: { width: '100%', padding: 20, borderRadius: 12, alignItems: 'center' },
  countdownHeader: { fontSize: 16, fontWeight: '700', fontFamily: 'Inter' },
  countdownTimer: { fontSize: 32, fontWeight: '800', letterSpacing: 1, fontFamily: 'Inter' },
  countdownInfoText: { fontSize: 12, fontWeight: '400', textAlign: 'center', lineHeight: 16.8, fontFamily: 'Inter' },
  footerSection: { paddingHorizontal: 20, paddingBottom: 20 },
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
                {/* Red Lock Badge */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 32,
                    backgroundColor: colors.lockBadgeOuterBg,
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
                      backgroundColor: colors.lockBadgeInnerBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: 22,
                        color: colors.lockBadgeIconColor,
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      lock
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
                  Account Locked
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 1.35,
                    color: colors.subtitle,
                    margin: 0,
                    marginBottom: 24,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Your Aadhaar authentication has been suspended due to too many failed attempts.
                </p>

                {/* Yellow Countdown Box */}
                <div
                  style={{
                    width: '100%',
                    padding: 20,
                    borderRadius: 12,
                    backgroundColor: colors.countdownBoxBg,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                  }}
                >
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: colors.countdownHeader,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Try again in
                  </span>
                  <div style={{ height: 8 }} />
                  <span
                    style={{
                      fontSize: 32,
                      fontWeight: 800,
                      letterSpacing: '1px',
                      color: colors.countdownTimer,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    23:45:00
                  </span>
                  <div style={{ height: 16 }} />
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      lineHeight: '16.8px',
                      color: colors.countdownInfoText,
                      textAlign: 'center',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Your account will be unlocked automatically. If you need immediate assistance, contact UIDAI support.
                  </span>
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div style={{ padding: '12px 20px 20px 20px' }}>
              <div
                style={{
                  height: 1,
                  backgroundColor: colors.border,
                  width: '100%',
                  marginBottom: 12,
                }}
              />
              <Ux4gButton
                text="Contact UIDAI Support"
                onPress={() => alert('Contacting UIDAI Support...')}
                variant="outline"
                size="large"
                height={48}
                width="100%"
                leadingIcon={
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: 20,
                      color: colors.primary,
                      marginRight: 8,
                    }}
                  >
                    support
                  </span>
                }
              />
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
              {/* Red Lock Badge */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 32,
                  backgroundColor: colors.lockBadgeOuterBg,
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
                    backgroundColor: colors.lockBadgeInnerBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: 22,
                      color: colors.lockBadgeIconColor,
                      fontVariationSettings: "'FILL' 1",
                    }}
                  >
                    lock
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
                Account Locked
              </h2>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.35,
                  color: colors.subtitle,
                  margin: 0,
                  marginBottom: 24,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Your Aadhaar authentication has been suspended due to too many failed attempts.
              </p>

              {/* Yellow Countdown Box */}
              <div
                style={{
                  width: '100%',
                  padding: 20,
                  borderRadius: 12,
                  backgroundColor: colors.countdownBoxBg,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxSizing: 'border-box',
                }}
              >
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: colors.countdownHeader,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Try again in
                </span>
                <div style={{ height: 8 }} />
                <span
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    letterSpacing: '1px',
                    color: colors.countdownTimer,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  23:45:00
                </span>
                <div style={{ height: 16 }} />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 400,
                    lineHeight: '16.8px',
                    color: colors.countdownInfoText,
                    textAlign: 'center',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Your account will be unlocked automatically. If you need immediate assistance, contact UIDAI support.
                </span>
              </div>
            </div>

            {/* Bottom Section */}
            <div>
              <div
                style={{
                  height: 1,
                  backgroundColor: colors.border,
                  width: '100%',
                  marginBottom: 12,
                }}
              />
              <Ux4gButton
                text="Contact UIDAI Support"
                onPress={() => alert('Contacting UIDAI Support...')}
                variant="outline"
                size="large"
                height={48}
                width="100%"
                leadingIcon={
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: 20,
                      color: colors.primary,
                      marginRight: 8,
                    }}
                  >
                    support
                  </span>
                }
              />
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
            <span>Patterns</span> / <span>Identity and Access</span> / <span>Aadhaar Authentication Gate</span> / <span className="active">Aadhaar account locked</span>
          </div>
          <h1 className="wb-title">Aadhaar account locked</h1>
          <p className="wb-subtitle">
            Terminal error state of the Aadhaar flow shown when the user exceeds the maximum number of failed attempts. Features a lock badge, a clear status title, and a prominent countdown timer box to indicate when the account will be automatically unlocked. Action footer allows contacting support.
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
                  filename={variant === 'card' ? 'AadhaarAccountLockedCardPattern.tsx' : 'AadhaarAccountLockedDefaultPattern.tsx'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AadhaarAccountLockedDoc;
