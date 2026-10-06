import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { CodeBlock } from '../components/CodeBlock';

interface AadhaarAccountLockedDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const AadhaarAccountLockedDoc: React.FC<AadhaarAccountLockedDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');

  // Color Palette tokens matching UX4G Design System
  const colors = useMemo(() => {
    return {
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      defaultScreenBg: isDark ? UX4GColors.neutral950 : '#FFFFFF',
      cardScreenBg: isDark ? '#1C1335' : '#F3F0FF',
      cardBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      divider: isDark ? UX4GColors.neutral800 : '#F1F5F9',
      title: isDark ? UX4GColors.neutral50 : '#0F172A',
      subtitle: isDark ? UX4GColors.neutral400 : '#475569',
      primary: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      menuBorder: isDark ? UX4GColors.primary400 : '#C0B3FF',
      menuIcon: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      // Lock Badge tokens
      lockBadgeBg: isDark ? 'rgba(239, 68, 68, 0.18)' : '#FEE2E2',
      lockBadgeIconColor: isDark ? '#F87171' : '#DC2626',
      // Yellow Countdown Box tokens
      countdownBoxBg: isDark ? '#2D1F08' : '#FFF8E7',
      countdownHeader: isDark ? UX4GColors.neutral200 : '#1F2937',
      countdownTimer: isDark ? '#FBBF24' : '#B45309',
      countdownInfoText: isDark ? UX4GColors.neutral300 : '#4B5563',
      // Button tokens
      btnBg: isDark ? 'rgba(91, 58, 230, 0.15)' : '#FAF8FF',
      btnBorder: isDark ? UX4GColors.primary400 : '#C4B5FD',
      btnText: isDark ? UX4GColors.primary300 : UX4GColors.primary,
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
  UX4GColors,
} from 'ux4g-react-native-components';

export const AadhaarAccountLockedCardPattern = ({ isDark = false }: { isDark?: boolean }) => {
  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#1C1335' : '#F3F0FF' }]}>
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

      {/* Floating Card Container */}
      <View style={styles.cardWrapper}>
        <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' }]}>
          {/* Centered Red Lock Badge */}
          <View style={styles.badgeContainer}>
            <View style={[styles.lockBadge, { backgroundColor: isDark ? 'rgba(239, 68, 68, 0.18)' : '#FEE2E2' }]}>
              <Text style={[styles.lockIcon, { color: isDark ? '#F87171' : '#DC2626' }]}>🔒</Text>
            </View>
          </View>

          {/* Left-Aligned Title & Subtitle */}
          <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : '#0F172A' }]}>
            Account Locked
          </Text>
          <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : '#475569' }]}>
            Your Aadhaar authentication has been suspended due to too many failed attempts.
          </Text>

          {/* Yellow Countdown Box */}
          <View style={[styles.countdownBox, { backgroundColor: isDark ? '#2D1F08' : '#FFF8E7' }]}>
            <Text style={[styles.countdownHeader, { color: isDark ? UX4GColors.neutral200 : '#1F2937' }]}>
              Try again in
            </Text>
            <Text style={[styles.countdownTimer, { color: isDark ? '#FBBF24' : '#B45309' }]}>
              23:45:00
            </Text>
            <Text style={[styles.countdownInfoText, { color: isDark ? UX4GColors.neutral300 : '#4B5563' }]}>
              Your account will be unlocked automatically. If you need immediate assistance, contact UIDAI support.
            </Text>
          </View>

          {/* Divider */}
          <View style={[styles.divider, { backgroundColor: isDark ? UX4GColors.neutral800 : '#F1F5F9' }]} />

          {/* Contact Support Button */}
          <TouchableOpacity
            style={[
              styles.contactBtn,
              {
                backgroundColor: isDark ? 'rgba(91, 58, 230, 0.15)' : '#FAF8FF',
                borderColor: isDark ? UX4GColors.primary400 : '#C4B5FD',
              }
            ]}
            onPress={() => {}}
          >
            <Text style={[styles.contactBtnText, { color: isDark ? UX4GColors.primary300 : UX4GColors.primary }]}>
              🛟 Contact UIDAI Support
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Digital India Footer outside card */}
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
  container: { flex: 1, justifyContent: 'space-between' },
  headerLeading: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  emblemImage: { height: 32, width: 24 },
  unionImage: { height: 24, width: 28 },
  menuBtn: { width: 38, height: 38, borderRadius: 8, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center' },
  cardWrapper: { paddingHorizontal: 16, paddingTop: 16, flex: 1 },
  card: { borderRadius: 16, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 3 },
  badgeContainer: { alignItems: 'center', marginBottom: 20 },
  lockBadge: { width: 64, height: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center' },
  lockIcon: { fontSize: 24 },
  title: { fontSize: 22, fontWeight: '800', lineHeight: 28, marginBottom: 8, textAlign: 'left', fontFamily: 'Inter' },
  subtitle: { fontSize: 13.5, fontWeight: '400', lineHeight: 19, color: '#475569', marginBottom: 20, textAlign: 'left', fontFamily: 'Inter' },
  countdownBox: { width: '100%', padding: 20, borderRadius: 12, alignItems: 'center', marginBottom: 20 },
  countdownHeader: { fontSize: 16, fontWeight: '700', marginBottom: 8, fontFamily: 'Inter' },
  countdownTimer: { fontSize: 26, fontWeight: '800', letterSpacing: 0.5, marginBottom: 12, fontFamily: 'Inter' },
  countdownInfoText: { fontSize: 12, fontWeight: '400', textAlign: 'center', lineHeight: 17, fontFamily: 'Inter' },
  divider: { height: 1, width: '100%', marginBottom: 16 },
  contactBtn: { width: '100%', height: 48, borderRadius: 10, borderWidth: 1.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  contactBtnText: { fontSize: 14, fontWeight: '600', fontFamily: 'Inter' },
  footer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, paddingBottom: 20 },
  footerText: { fontSize: 11, fontWeight: '400', fontFamily: 'Inter' },
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
  UX4GColors,
} from 'ux4g-react-native-components';

export const AadhaarAccountLockedDefaultPattern = ({ isDark = false }: { isDark?: boolean }) => {
  return (
    <View style={[styles.container, { backgroundColor: isDark ? UX4GColors.neutral950 : '#FFFFFF' }]}>
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

      {/* Main Content Area */}
      <View style={styles.content}>
        {/* Centered Red Lock Badge */}
        <View style={styles.badgeContainer}>
          <View style={[styles.lockBadge, { backgroundColor: isDark ? 'rgba(239, 68, 68, 0.18)' : '#FEE2E2' }]}>
            <Text style={[styles.lockIcon, { color: isDark ? '#F87171' : '#DC2626' }]}>🔒</Text>
          </View>
        </View>

        {/* Left-Aligned Title & Subtitle */}
        <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : '#0F172A' }]}>
          Account Locked
        </Text>
        <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : '#475569' }]}>
          Your Aadhaar authentication has been suspended due to too many failed attempts.
        </Text>

        {/* Yellow Countdown Box */}
        <View style={[styles.countdownBox, { backgroundColor: isDark ? '#2D1F08' : '#FFF8E7' }]}>
          <Text style={[styles.countdownHeader, { color: isDark ? UX4GColors.neutral200 : '#1F2937' }]}>
            Try again in
          </Text>
          <Text style={[styles.countdownTimer, { color: isDark ? '#FBBF24' : '#B45309' }]}>
            23:45:00
          </Text>
          <Text style={[styles.countdownInfoText, { color: isDark ? UX4GColors.neutral300 : '#4B5563' }]}>
            Your account will be unlocked automatically. If you need immediate assistance, contact UIDAI support.
          </Text>
        </View>

        {/* Divider */}
        <View style={[styles.divider, { backgroundColor: isDark ? UX4GColors.neutral800 : '#F1F5F9' }]} />

        {/* Contact Support Button */}
        <TouchableOpacity
          style={[
            styles.contactBtn,
            {
              backgroundColor: isDark ? 'rgba(91, 58, 230, 0.15)' : '#FAF8FF',
              borderColor: isDark ? UX4GColors.primary400 : '#C4B5FD',
            }
          ]}
          onPress={() => {}}
        >
          <Text style={[styles.contactBtnText, { color: isDark ? UX4GColors.primary300 : UX4GColors.primary }]}>
            🛟 Contact UIDAI Support
          </Text>
        </TouchableOpacity>
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
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between' },
  headerLeading: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  emblemImage: { height: 32, width: 24 },
  unionImage: { height: 24, width: 28 },
  menuBtn: { width: 38, height: 38, borderRadius: 8, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center' },
  content: { padding: 20, flex: 1 },
  badgeContainer: { alignItems: 'center', marginBottom: 20 },
  lockBadge: { width: 64, height: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center' },
  lockIcon: { fontSize: 24 },
  title: { fontSize: 22, fontWeight: '800', lineHeight: 28, marginBottom: 8, textAlign: 'left', fontFamily: 'Inter' },
  subtitle: { fontSize: 13.5, fontWeight: '400', lineHeight: 19, color: '#475569', marginBottom: 20, textAlign: 'left', fontFamily: 'Inter' },
  countdownBox: { width: '100%', padding: 20, borderRadius: 12, alignItems: 'center', marginBottom: 20 },
  countdownHeader: { fontSize: 16, fontWeight: '700', marginBottom: 8, fontFamily: 'Inter' },
  countdownTimer: { fontSize: 26, fontWeight: '800', letterSpacing: 0.5, marginBottom: 12, fontFamily: 'Inter' },
  countdownInfoText: { fontSize: 12, fontWeight: '400', textAlign: 'center', lineHeight: 17, fontFamily: 'Inter' },
  divider: { height: 1, width: '100%', marginBottom: 16 },
  contactBtn: { width: '100%', height: 48, borderRadius: 10, borderWidth: 1.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  contactBtnText: { fontSize: 14, fontWeight: '600', fontFamily: 'Inter' },
  footer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, paddingBottom: 20 },
  footerText: { fontSize: 11, fontWeight: '400', fontFamily: 'Inter' },
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
              <img
                key="union"
                src="/Union.svg"
                alt="Union"
                style={{
                  height: 24,
                  marginLeft: 4,
                }}
              />,
            ]}
            actions={[
              {
                customWidget: (
                  <div
                    key="menuAction"
                    style={{
                      width: 38,
                      height: 38,
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
          /* Card Style Variant (Image 3) */
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ padding: '16px' }}>
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
                {/* Centered Red Lock Badge */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      backgroundColor: colors.lockBadgeBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: 28,
                        color: colors.lockBadgeIconColor,
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      lock
                    </span>
                  </div>
                </div>

                {/* Left-Aligned Title */}
                <h2
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    lineHeight: 1.25,
                    color: colors.title,
                    margin: 0,
                    marginBottom: 8,
                    textAlign: 'left',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Account Locked
                </h2>

                {/* Left-Aligned Subtitle */}
                <p
                  style={{
                    fontSize: 13.5,
                    fontWeight: 400,
                    lineHeight: 1.4,
                    color: colors.subtitle,
                    margin: 0,
                    marginBottom: 20,
                    textAlign: 'left',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Your Aadhaar authentication has been suspended due to too many failed attempts.
                </p>

                {/* Yellow Countdown Box */}
                <div
                  style={{
                    width: '100%',
                    padding: '22px 18px',
                    borderRadius: 12,
                    backgroundColor: colors.countdownBoxBg,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                    marginBottom: 20,
                  }}
                >
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: colors.countdownHeader,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      marginBottom: 8,
                    }}
                  >
                    Try again in
                  </span>
                  <span
                    style={{
                      fontSize: 26,
                      fontWeight: 800,
                      letterSpacing: '0.5px',
                      color: colors.countdownTimer,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      marginBottom: 12,
                    }}
                  >
                    23:45:00
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      lineHeight: '17px',
                      color: colors.countdownInfoText,
                      textAlign: 'center',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Your account will be unlocked automatically. If you need immediate assistance, contact UIDAI support.
                  </span>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: 1,
                    backgroundColor: colors.divider,
                    width: '100%',
                    marginBottom: 16,
                  }}
                />

                {/* Contact UIDAI Support Button */}
                <button
                  type="button"
                  onClick={() => alert('Contacting UIDAI Support...')}
                  style={{
                    width: '100%',
                    height: 48,
                    borderRadius: 10,
                    border: `1.5px solid ${colors.btnBorder}`,
                    backgroundColor: colors.btnBg,
                    color: colors.btnText,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    fontSize: 14,
                    fontWeight: 600,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={colors.btnText}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                    <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
                    <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
                    <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
                    <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
                  </svg>
                  <span>Contact UIDAI Support</span>
                </button>
              </div>
            </div>

            {/* Digital India Footer outside card */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                paddingBottom: 20,
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
          /* Default Layout Variant (Image 2) */
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
              {/* Centered Red Lock Badge */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    backgroundColor: colors.lockBadgeBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: 28,
                      color: colors.lockBadgeIconColor,
                      fontVariationSettings: "'FILL' 1",
                    }}
                  >
                    lock
                  </span>
                </div>
              </div>

              {/* Left-Aligned Title */}
              <h2
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  lineHeight: 1.25,
                  color: colors.title,
                  margin: 0,
                  marginBottom: 8,
                  textAlign: 'left',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Account Locked
              </h2>

              {/* Left-Aligned Subtitle */}
              <p
                style={{
                  fontSize: 13.5,
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: colors.subtitle,
                  margin: 0,
                  marginBottom: 20,
                  textAlign: 'left',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Your Aadhaar authentication has been suspended due to too many failed attempts.
              </p>

              {/* Yellow Countdown Box */}
              <div
                style={{
                  width: '100%',
                  padding: '22px 18px',
                  borderRadius: 12,
                  backgroundColor: colors.countdownBoxBg,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxSizing: 'border-box',
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: colors.countdownHeader,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    marginBottom: 8,
                  }}
                >
                  Try again in
                </span>
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    letterSpacing: '0.5px',
                    color: colors.countdownTimer,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    marginBottom: 12,
                  }}
                >
                  23:45:00
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 400,
                    lineHeight: '17px',
                    color: colors.countdownInfoText,
                    textAlign: 'center',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Your account will be unlocked automatically. If you need immediate assistance, contact UIDAI support.
                </span>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  backgroundColor: colors.divider,
                  width: '100%',
                  marginBottom: 16,
                }}
              />

              {/* Contact UIDAI Support Button */}
              <button
                type="button"
                onClick={() => alert('Contacting UIDAI Support...')}
                style={{
                  width: '100%',
                  height: 48,
                  borderRadius: 10,
                  border: `1.5px solid ${colors.btnBorder}`,
                  backgroundColor: colors.btnBg,
                  color: colors.btnText,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={colors.btnText}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
                  <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
                  <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
                  <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
                </svg>
                <span>Contact UIDAI Support</span>
              </button>
            </div>

            {/* Digital India Footer */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
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
