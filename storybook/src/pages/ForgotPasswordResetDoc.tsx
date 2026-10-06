import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { CodeBlock } from '../components/CodeBlock';

interface ForgotPasswordResetDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const ForgotPasswordResetDoc: React.FC<ForgotPasswordResetDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [mobile, setMobile] = useState('');

  // Color Palette tokens matching UX4G Design System
  const colors = useMemo(() => {
    return {
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      defaultScreenBg: isDark ? UX4GColors.neutral950 : '#FFFFFF',
      cardScreenBg: isDark ? '#1C1335' : '#F3F0FF',
      cardBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      inputBorder: isDark ? UX4GColors.neutral700 : '#E2E8F0',
      inputBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      title: isDark ? UX4GColors.neutral50 : '#0F172A',
      subtitle: isDark ? UX4GColors.neutral400 : '#475569',
      primary: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      menuBorder: isDark ? UX4GColors.primary400 : '#C0B3FF',
      menuIcon: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      btnPrimaryBg: isDark ? UX4GColors.primary : '#4F46E5',
      btnOutlineBorder: isDark ? UX4GColors.primary400 : '#C4B5FD',
      btnOutlineText: isDark ? UX4GColors.primary300 : '#4F46E5',
    };
  }, [isDark]);

  // TSX Code Strings for Default and Card style variants
  const codeString = useMemo(() => {
    if (variant === 'card') {
      return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  Ux4gAppHeader,
  UX4GColors,
} from 'ux4g-react-native-components';

export const ResetPasswordCardPattern = ({ isDark = false }: { isDark?: boolean }) => {
  const [mobile, setMobile] = useState('');

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
          {/* Back Navigation Link */}
          <TouchableOpacity style={styles.backBtn} onPress={() => {}}>
            <Text style={[styles.backText, { color: isDark ? UX4GColors.primary300 : '#4F46E5' }]}>
              ← Back to Sign in
            </Text>
          </TouchableOpacity>

          {/* Title & Subtitle */}
          <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : '#0F172A' }]}>
            Reset Password
          </Text>
          <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : '#475569' }]}>
            Enter your registered mobile number to receive a verification code
          </Text>

          {/* Mobile Number Input */}
          <Text style={[styles.inputLabel, { color: isDark ? UX4GColors.neutral200 : '#1E293B' }]}>
            Mobile Number
          </Text>
          <View style={[styles.inputBox, { borderColor: isDark ? UX4GColors.neutral700 : '#E2E8F0', backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' }]}>
            <Text style={[styles.prefixText, { color: isDark ? UX4GColors.neutral400 : '#475569' }]}>
              +91
            </Text>
            <TextInput
              value={mobile}
              onChangeText={setMobile}
              placeholder="Enter mobile number"
              placeholderTextColor="#94A3B8"
              keyboardType="phone-pad"
              maxLength={10}
              style={[styles.inputField, { color: isDark ? UX4GColors.neutral50 : '#0F172A' }]}
            />
          </View>

          {/* Send OTP Button */}
          <TouchableOpacity
            style={[styles.sendOtpBtn, { backgroundColor: isDark ? UX4GColors.primary : '#4F46E5' }]}
            onPress={() => {}}
          >
            <Text style={styles.sendOtpText}>Send OTP</Text>
          </TouchableOpacity>

          {/* Recover account using Aadhaar link */}
          <TouchableOpacity onPress={() => {}} style={styles.linkWrapper}>
            <Text style={[styles.linkText, { color: isDark ? UX4GColors.primary300 : '#4F46E5' }]}>
              Recover account using Aadhaar Number →
            </Text>
          </TouchableOpacity>

          {/* OR Divider */}
          <View style={styles.orRow}>
            <View style={[styles.orLine, { backgroundColor: isDark ? UX4GColors.neutral800 : '#E2E8F0' }]} />
            <Text style={styles.orText}>OR</Text>
            <View style={[styles.orLine, { backgroundColor: isDark ? UX4GColors.neutral800 : '#E2E8F0' }]} />
          </View>

          {/* Alternative Sign In Button */}
          <TouchableOpacity
            style={[styles.altBtn, { borderColor: isDark ? UX4GColors.primary400 : '#C4B5FD' }]}
            onPress={() => {}}
          >
            <Text style={[styles.altBtnText, { color: isDark ? UX4GColors.primary300 : '#4F46E5' }]}>
              Sign in with OTP instead
            </Text>
          </TouchableOpacity>
        </View>
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
  cardWrapper: { paddingHorizontal: 16, paddingTop: 16, flex: 1 },
  card: { borderRadius: 16, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 3 },
  backBtn: { alignSelf: 'flex-start', marginBottom: 16 },
  backText: { fontSize: 13.5, fontWeight: '600', fontFamily: 'Inter' },
  title: { fontSize: 24, fontWeight: '800', lineHeight: 30, marginBottom: 8, textAlign: 'left', fontFamily: 'Inter' },
  subtitle: { fontSize: 13.5, fontWeight: '400', lineHeight: 19, marginBottom: 20, textAlign: 'left', fontFamily: 'Inter' },
  inputLabel: { fontSize: 13.5, fontWeight: '600', marginBottom: 6, fontFamily: 'Inter' },
  inputBox: { height: 48, borderRadius: 10, borderWidth: 1.5, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, marginBottom: 16 },
  prefixText: { fontSize: 14, fontWeight: '600', marginRight: 8, fontFamily: 'Inter' },
  inputField: { flex: 1, fontSize: 14, fontFamily: 'Inter' },
  sendOtpBtn: { height: 48, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  sendOtpText: { color: '#FFFFFF', fontSize: 15, fontWeight: '600', fontFamily: 'Inter' },
  linkWrapper: { alignItems: 'center', marginBottom: 16 },
  linkText: { fontSize: 13.5, fontWeight: '600', fontFamily: 'Inter' },
  orRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  orLine: { flex: 1, height: 1 },
  orText: { paddingHorizontal: 12, fontSize: 11.5, fontWeight: '500', color: '#94A3B8', fontFamily: 'Inter' },
  altBtn: { height: 48, borderRadius: 10, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center' },
  altBtnText: { fontSize: 14, fontWeight: '600', fontFamily: 'Inter' },
  footer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, paddingBottom: 20 },
  footerText: { fontSize: 11, fontWeight: '400', fontFamily: 'Inter' },
  digitalIndiaLogo: { height: 22, width: 100 },
});`;
    }

    return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  Ux4gAppHeader,
  UX4GColors,
} from 'ux4g-react-native-components';

export const ResetPasswordDefaultPattern = ({ isDark = false }: { isDark?: boolean }) => {
  const [mobile, setMobile] = useState('');

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
        {/* Back Navigation Link */}
        <TouchableOpacity style={styles.backBtn} onPress={() => {}}>
          <Text style={[styles.backText, { color: isDark ? UX4GColors.primary300 : '#4F46E5' }]}>
            ← Back to Sign in
          </Text>
        </TouchableOpacity>

        {/* Title & Subtitle */}
        <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : '#0F172A' }]}>
          Reset Password
        </Text>
        <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : '#475569' }]}>
          Enter your registered mobile number to receive a verification code
        </Text>

        {/* Mobile Number Input */}
        <Text style={[styles.inputLabel, { color: isDark ? UX4GColors.neutral200 : '#1E293B' }]}>
          Mobile Number
        </Text>
        <View style={[styles.inputBox, { borderColor: isDark ? UX4GColors.neutral700 : '#E2E8F0', backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' }]}>
          <Text style={[styles.prefixText, { color: isDark ? UX4GColors.neutral400 : '#475569' }]}>
            +91
          </Text>
          <TextInput
            value={mobile}
            onChangeText={setMobile}
            placeholder="Enter mobile number"
            placeholderTextColor="#94A3B8"
            keyboardType="phone-pad"
            maxLength={10}
            style={[styles.inputField, { color: isDark ? UX4GColors.neutral50 : '#0F172A' }]}
          />
        </View>

        {/* Send OTP Button */}
        <TouchableOpacity
          style={[styles.sendOtpBtn, { backgroundColor: isDark ? UX4GColors.primary : '#4F46E5' }]}
          onPress={() => {}}
        >
          <Text style={styles.sendOtpText}>Send OTP</Text>
        </TouchableOpacity>

        {/* Recover account using Aadhaar link */}
        <TouchableOpacity onPress={() => {}} style={styles.linkWrapper}>
          <Text style={[styles.linkText, { color: isDark ? UX4GColors.primary300 : '#4F46E5' }]}>
            Recover account using Aadhaar Number →
          </Text>
        </TouchableOpacity>

        {/* OR Divider */}
        <View style={styles.orRow}>
          <View style={[styles.orLine, { backgroundColor: isDark ? UX4GColors.neutral800 : '#E2E8F0' }]} />
          <Text style={styles.orText}>OR</Text>
          <View style={[styles.orLine, { backgroundColor: isDark ? UX4GColors.neutral800 : '#E2E8F0' }]} />
        </View>

        {/* Alternative Sign In Button */}
        <TouchableOpacity
          style={[styles.altBtn, { borderColor: isDark ? UX4GColors.primary400 : '#C4B5FD' }]}
          onPress={() => {}}
        >
          <Text style={[styles.altBtnText, { color: isDark ? UX4GColors.primary300 : '#4F46E5' }]}>
            Sign in with Email instead
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
  backBtn: { alignSelf: 'flex-start', marginBottom: 16 },
  backText: { fontSize: 13.5, fontWeight: '600', fontFamily: 'Inter' },
  title: { fontSize: 24, fontWeight: '800', lineHeight: 30, marginBottom: 8, textAlign: 'left', fontFamily: 'Inter' },
  subtitle: { fontSize: 13.5, fontWeight: '400', lineHeight: 19, marginBottom: 20, textAlign: 'left', fontFamily: 'Inter' },
  inputLabel: { fontSize: 13.5, fontWeight: '600', marginBottom: 6, fontFamily: 'Inter' },
  inputBox: { height: 48, borderRadius: 10, borderWidth: 1.5, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, marginBottom: 16 },
  prefixText: { fontSize: 14, fontWeight: '600', marginRight: 8, fontFamily: 'Inter' },
  inputField: { flex: 1, fontSize: 14, fontFamily: 'Inter' },
  sendOtpBtn: { height: 48, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  sendOtpText: { color: '#FFFFFF', fontSize: 15, fontWeight: '600', fontFamily: 'Inter' },
  linkWrapper: { alignItems: 'center', marginBottom: 16 },
  linkText: { fontSize: 13.5, fontWeight: '600', fontFamily: 'Inter' },
  orRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  orLine: { flex: 1, height: 1 },
  orText: { paddingHorizontal: 12, fontSize: 11.5, fontWeight: '500', color: '#94A3B8', fontFamily: 'Inter' },
  altBtn: { height: 48, borderRadius: 10, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center' },
  altBtnText: { fontSize: 14, fontWeight: '600', fontFamily: 'Inter' },
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
        {/* Official Header */}
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

        {/* Main Content Body */}
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
                {/* Back to Sign In Link */}
                <div
                  onClick={() => alert('Back to Sign in')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    color: colors.primary,
                    fontSize: 13.5,
                    fontWeight: 600,
                    marginBottom: 16,
                    cursor: 'pointer',
                    width: 'max-content',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                    arrow_back
                  </span>
                  <span>Back to Sign in</span>
                </div>

                {/* Title & Subtitle */}
                <h2
                  style={{
                    fontSize: 24,
                    fontWeight: 800,
                    lineHeight: 1.25,
                    color: colors.title,
                    margin: 0,
                    marginBottom: 8,
                    textAlign: 'left',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Reset Password
                </h2>
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
                  Enter your registered mobile number to receive a verification code
                </p>

                {/* Mobile Number Label */}
                <label
                  style={{
                    fontSize: 13.5,
                    fontWeight: 600,
                    color: isDark ? UX4GColors.neutral200 : '#1E293B',
                    marginBottom: 6,
                    display: 'block',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Mobile Number
                </label>

                {/* Mobile Number Input with +91 prefix */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 48,
                    borderRadius: 10,
                    border: `1.5px solid ${colors.inputBorder}`,
                    backgroundColor: colors.inputBg,
                    padding: '0 14px',
                    marginBottom: 16,
                    boxSizing: 'border-box',
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: isDark ? UX4GColors.neutral400 : '#475569',
                      marginRight: 8,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    +91
                  </span>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="Enter mobile number"
                    style={{
                      flex: 1,
                      border: 'none',
                      outline: 'none',
                      backgroundColor: 'transparent',
                      fontSize: 14,
                      color: colors.title,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  />
                </div>

                {/* Send OTP Button */}
                <button
                  type="button"
                  onClick={() => alert('OTP sent to: +91 ' + (mobile || 'XXXXX'))}
                  style={{
                    width: '100%',
                    height: 48,
                    borderRadius: 10,
                    backgroundColor: colors.btnPrimaryBg,
                    color: '#FFFFFF',
                    border: 'none',
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: 'pointer',
                    marginBottom: 16,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Send OTP
                </button>

                {/* Recover account using Aadhaar link */}
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                  <span
                    onClick={() => alert('Recover using Aadhaar')}
                    style={{
                      fontSize: 13.5,
                      fontWeight: 600,
                      color: colors.primary,
                      cursor: 'pointer',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Recover account using Aadhaar Number →
                  </span>
                </div>

                {/* OR Divider */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 16,
                  }}
                >
                  <div style={{ flex: 1, height: 1, backgroundColor: isDark ? UX4GColors.neutral800 : '#E2E8F0' }} />
                  <span
                    style={{
                      padding: '0 12px',
                      fontSize: 11.5,
                      fontWeight: 500,
                      color: '#94A3B8',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    OR
                  </span>
                  <div style={{ flex: 1, height: 1, backgroundColor: isDark ? UX4GColors.neutral800 : '#E2E8F0' }} />
                </div>

                {/* Sign in with OTP instead Button */}
                <button
                  type="button"
                  onClick={() => alert('Sign in with OTP')}
                  style={{
                    width: '100%',
                    height: 48,
                    borderRadius: 10,
                    border: `1.5px solid ${colors.btnOutlineBorder}`,
                    backgroundColor: isDark ? 'rgba(91, 58, 230, 0.15)' : '#FAF8FF',
                    color: colors.btnOutlineText,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Sign in with OTP instead
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
              {/* Back to Sign In Link */}
              <div
                onClick={() => alert('Back to Sign in')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  color: colors.primary,
                  fontSize: 13.5,
                  fontWeight: 600,
                  marginBottom: 16,
                  cursor: 'pointer',
                  width: 'max-content',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                  arrow_back
                </span>
                <span>Back to Sign in</span>
              </div>

              {/* Title & Subtitle */}
              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  lineHeight: 1.25,
                  color: colors.title,
                  margin: 0,
                  marginBottom: 8,
                  textAlign: 'left',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Reset Password
              </h2>
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
                Enter your registered mobile number to receive a verification code
              </p>

              {/* Mobile Number Label */}
              <label
                style={{
                  fontSize: 13.5,
                  fontWeight: 600,
                  color: isDark ? UX4GColors.neutral200 : '#1E293B',
                  marginBottom: 6,
                  display: 'block',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Mobile Number
              </label>

              {/* Mobile Number Input with +91 prefix */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  height: 48,
                  borderRadius: 10,
                  border: `1.5px solid ${colors.inputBorder}`,
                  backgroundColor: colors.inputBg,
                  padding: '0 14px',
                  marginBottom: 16,
                  boxSizing: 'border-box',
                }}
              >
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: isDark ? UX4GColors.neutral400 : '#475569',
                    marginRight: 8,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  +91
                </span>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="Enter mobile number"
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    backgroundColor: 'transparent',
                    fontSize: 14,
                    color: colors.title,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                />
              </div>

              {/* Send OTP Button */}
              <button
                type="button"
                onClick={() => alert('OTP sent to: +91 ' + (mobile || 'XXXXX'))}
                style={{
                  width: '100%',
                  height: 48,
                  borderRadius: 10,
                  backgroundColor: colors.btnPrimaryBg,
                  color: '#FFFFFF',
                  border: 'none',
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginBottom: 16,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  transition: 'all 0.2s ease',
                }}
              >
                Send OTP
              </button>

              {/* Recover account using Aadhaar link */}
              <div style={{ textAlign: 'center', marginBottom: 16 }}>
                <span
                  onClick={() => alert('Recover using Aadhaar')}
                  style={{
                    fontSize: 13.5,
                    fontWeight: 600,
                    color: colors.primary,
                    cursor: 'pointer',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Recover account using Aadhaar Number →
                </span>
              </div>

              {/* OR Divider */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 16,
                }}
              >
                <div style={{ flex: 1, height: 1, backgroundColor: isDark ? UX4GColors.neutral800 : '#E2E8F0' }} />
                <span
                  style={{
                    padding: '0 12px',
                    fontSize: 11.5,
                    fontWeight: 500,
                    color: '#94A3B8',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  OR
                </span>
                <div style={{ flex: 1, height: 1, backgroundColor: isDark ? UX4GColors.neutral800 : '#E2E8F0' }} />
              </div>

              {/* Alternative Sign In Button */}
              <button
                type="button"
                onClick={() => alert('Sign in with Email')}
                style={{
                  width: '100%',
                  height: 48,
                  borderRadius: 10,
                  border: `1.5px solid ${colors.btnOutlineBorder}`,
                  backgroundColor: isDark ? 'rgba(91, 58, 230, 0.15)' : '#FAF8FF',
                  color: colors.btnOutlineText,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  transition: 'all 0.2s ease',
                }}
              >
                Sign in with Email instead
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
      {/* Header */}
      <div className="wb-header">
        <div>
          <div className="wb-breadcrumb">
            <span>Patterns</span> / <span>Identity and Access</span> / <span>Forgot Password and Account Recovery</span> / <span className="active">Reset Password</span>
          </div>
          <h1 className="wb-title">Reset Password</h1>
          <p className="wb-subtitle">
            Entry point for the forgot-password flow. User enters their registered mobile number to receive an OTP verification code.
          </p>
        </div>
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
                  filename={variant === 'card' ? 'ResetPasswordCardPattern.tsx' : 'ResetPasswordDefaultPattern.tsx'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordResetDoc;
