import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gInputField } from '../../../src/components/input-field/InputField';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gLinearProgressBar } from '../../../src/components/linear-progress-bar/LinearProgressBar';
import { CodeBlock } from '../components/CodeBlock';

interface ForgotPasswordCreatePasswordDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const ForgotPasswordCreatePasswordDoc: React.FC<ForgotPasswordCreatePasswordDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [password, setPassword] = useState<string>('••••••••••••');
  const [confirmPassword, setConfirmPassword] = useState<string>('••••••••••••');

  // Exact color tokens from UX4G Design System
  const colors = useMemo(() => {
    return {
      title: isDark ? UX4GColors.neutral50 : '#0F172A',
      subtitle: isDark ? UX4GColors.neutral400 : '#475569',
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      cardBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      cardScreenBg: isDark ? '#1C1335' : '#F3F0FF',
      defaultScreenBg: isDark ? UX4GColors.neutral950 : '#FFFFFF',
      headerBg: isDark ? UX4GColors.gray900 : '#FFFFFF',
      primary: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      menuBorder: isDark ? UX4GColors.primary400 : '#C0B3FF',
      menuIcon: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      btnPrimaryBg: isDark ? UX4GColors.primary : '#4F46E5',
      // Strength checklist colors
      strengthContainerBg: isDark ? '#1E293B' : '#F8FAFC',
      greenTextColor: isDark ? '#86EFAC' : '#166534',
      redTextColor: isDark ? '#FCA5A5' : '#B91C1C',
      footerText: isDark ? UX4GColors.neutral400 : '#64748B',
    };
  }, [isDark]);

  const handleResetPassword = () => {
    alert('Password reset successfully!');
  };

  // TSX Code Strings for Default and Card style variants
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
  Ux4gInputField,
  Ux4gButton,
  Ux4gLinearProgressBar,
  UX4GColors,
} from 'ux4g-react-native-components';

export const CreateNewPasswordCardPattern = ({ isDark = false }: { isDark?: boolean }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    console.log('Reset password action');
  };

  return (
    <View style={[styles.screen, { backgroundColor: isDark ? '#1C1335' : '#F3F0FF' }]}>
      {/* 1. Official Government Header */}
      <Ux4gAppHeader
        variant={isDark ? 'dark' : 'light'}
        leadingWidgets={[
          <View style={styles.headerLeading} key="leading">
            <Image
              source={{ uri: '/national_emblem_logo.svg' }}
              style={[styles.emblemLogo, isDark && { tintColor: '#FFFFFF' }]}
              resizeMode="contain"
            />
            <View style={[styles.headerDivider, { backgroundColor: isDark ? UX4GColors.neutral700 : '#E2E8F0' }]} />
            <Image
              source={{ uri: '/Union.svg' }}
              style={styles.unionLogo}
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

      {/* 2. Floating Card Container */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' }]}>
          <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : '#0F172A' }]}>
            Create new password
          </Text>
          <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : '#475569' }]}>
            Choose a strong password to secure your account
          </Text>

          {/* Password Input using Ux4gInputField */}
          <Ux4gInputField
            label="Password"
            placeholder="••••••••••••"
            value={password}
            onValueChange={setPassword}
            type="password"
            size="large"
          />

          {/* Password Strength Progress */}
          <View style={styles.strengthBarContainer}>
            <Ux4gLinearProgressBar
              value={0.78}
              gradientColors={['#86EFAC', '#15803D']}
              trackColor={isDark ? UX4GColors.neutral800 : '#E2E8F0'}
              shape="rounded"
              height={8}
            />
            <Text style={styles.strengthLabel}>Password Strength: Strong</Text>
          </View>

          {/* Criteria Checklist Box with Filled Icons */}
          <View style={[styles.checklistContainer, { backgroundColor: isDark ? '#1E293B' : '#F8FAFC' }]}>
            <View style={styles.checkItem}>
              <View style={styles.greenFilledCircle}>
                <Text style={styles.whiteIconText}>✓</Text>
              </View>
              <Text style={[styles.checkText, { color: isDark ? '#86EFAC' : '#166534' }]}>8+ characters</Text>
            </View>
            <View style={styles.checkItem}>
              <View style={styles.greenFilledCircle}>
                <Text style={styles.whiteIconText}>✓</Text>
              </View>
              <Text style={[styles.checkText, { color: isDark ? '#86EFAC' : '#166534' }]}>Uppercase letter</Text>
            </View>
            <View style={styles.checkItem}>
              <View style={styles.greenFilledCircle}>
                <Text style={styles.whiteIconText}>✓</Text>
              </View>
              <Text style={[styles.checkText, { color: isDark ? '#86EFAC' : '#166534' }]}>Number</Text>
            </View>
            <View style={styles.checkItem}>
              <View style={styles.redFilledCircle}>
                <Text style={styles.whiteIconText}>!</Text>
              </View>
              <Text style={[styles.checkText, { color: isDark ? '#FCA5A5' : '#B91C1C' }]}>Special character</Text>
            </View>
          </View>

          <View style={{ height: 16 }} />

          {/* Confirm Password Input using Ux4gInputField with error status */}
          <Ux4gInputField
            label="Confirm password"
            placeholder="••••••••••••"
            value={confirmPassword}
            onValueChange={setConfirmPassword}
            type="password"
            size="large"
            status="error"
            caption="Passwords do not match"
          />

          <View style={{ height: 24 }} />

          {/* Reset Password Action Button */}
          <Ux4gButton
            text="Reset password"
            variant="primary"
            size="large"
            onPress={handleResetPassword}
            style={styles.resetBtn}
          />
        </View>
      </ScrollView>

      {/* Powered by Digital India Footer */}
      <View style={styles.footer}>
        <Text style={[styles.poweredByText, { color: isDark ? UX4GColors.neutral400 : '#64748B' }]}>
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
  screen: { flex: 1, justifyContent: 'space-between' },
  headerLeading: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  emblemLogo: { width: 32, height: 32 },
  headerDivider: { width: 1, height: 26, marginHorizontal: 2 },
  unionLogo: { width: 28, height: 28 },
  menuBtn: {
    width: 38,
    height: 38,
    borderRadius: 8,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: { padding: 16 },
  card: {
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 30,
    marginBottom: 6,
    fontFamily: 'Inter',
  },
  subtitle: {
    fontSize: 13.5,
    fontWeight: '400',
    lineHeight: 19,
    marginBottom: 20,
    fontFamily: 'Inter',
  },
  strengthBarContainer: {
    marginTop: 12,
    gap: 6,
  },
  strengthLabel: {
    fontSize: 12.5,
    fontWeight: '700',
    color: '#15803D',
    marginBottom: 10,
    fontFamily: 'Inter',
  },
  checklistContainer: {
    borderRadius: 10,
    padding: 14,
    gap: 8,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  greenFilledCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#16A34A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  redFilledCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#DC2626',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteIconText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
  },
  checkText: {
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  resetBtn: {
    height: 48,
    borderRadius: 8,
    width: '100%',
  },
  footer: {
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  poweredByText: {
    fontSize: 11,
    fontFamily: 'Inter',
  },
  digitalIndiaLogo: {
    height: 22,
    width: 90,
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
  Ux4gInputField,
  Ux4gButton,
  Ux4gLinearProgressBar,
  UX4GColors,
} from 'ux4g-react-native-components';

export const CreateNewPasswordDefaultPattern = ({ isDark = false }: { isDark?: boolean }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    console.log('Reset password action');
  };

  return (
    <View style={[styles.screen, { backgroundColor: isDark ? UX4GColors.neutral950 : '#FFFFFF' }]}>
      {/* 1. Official Government Header */}
      <Ux4gAppHeader
        variant={isDark ? 'dark' : 'light'}
        leadingWidgets={[
          <View style={styles.headerLeading} key="leading">
            <Image
              source={{ uri: '/national_emblem_logo.svg' }}
              style={[styles.emblemLogo, isDark && { tintColor: '#FFFFFF' }]}
              resizeMode="contain"
            />
            <View style={[styles.headerDivider, { backgroundColor: isDark ? UX4GColors.neutral700 : '#E2E8F0' }]} />
            <Image
              source={{ uri: '/Union.svg' }}
              style={styles.unionLogo}
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

      {/* 2. Main Content Form */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : '#0F172A' }]}>
          Create new password
        </Text>
        <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : '#475569' }]}>
          Choose a strong password to secure your account
        </Text>

        {/* Password Input using Ux4gInputField */}
        <Ux4gInputField
          label="Password"
          placeholder="••••••••••••"
          value={password}
          onValueChange={setPassword}
          type="password"
          size="large"
        />

        {/* Password Strength Progress */}
        <View style={styles.strengthBarContainer}>
          <Ux4gLinearProgressBar
            value={0.78}
            gradientColors={['#86EFAC', '#15803D']}
            trackColor={isDark ? UX4GColors.neutral800 : '#E2E8F0'}
            shape="rounded"
            height={8}
          />
          <Text style={styles.strengthLabel}>Password Strength: Strong</Text>
        </View>

        {/* Criteria Checklist Box with Filled Icons */}
        <View style={[styles.checklistContainer, { backgroundColor: isDark ? '#1E293B' : '#F8FAFC' }]}>
          <View style={styles.checkItem}>
            <View style={styles.greenFilledCircle}>
              <Text style={styles.whiteIconText}>✓</Text>
            </View>
            <Text style={[styles.checkText, { color: isDark ? '#86EFAC' : '#166534' }]}>8+ characters</Text>
          </View>
          <View style={styles.checkItem}>
            <View style={styles.greenFilledCircle}>
              <Text style={styles.whiteIconText}>✓</Text>
            </View>
            <Text style={[styles.checkText, { color: isDark ? '#86EFAC' : '#166534' }]}>Uppercase letter</Text>
          </View>
          <View style={styles.checkItem}>
            <View style={styles.greenFilledCircle}>
              <Text style={styles.whiteIconText}>✓</Text>
            </View>
            <Text style={[styles.checkText, { color: isDark ? '#86EFAC' : '#166534' }]}>Number</Text>
          </View>
          <View style={styles.checkItem}>
            <View style={styles.redFilledCircle}>
              <Text style={styles.whiteIconText}>!</Text>
            </View>
            <Text style={[styles.checkText, { color: isDark ? '#FCA5A5' : '#B91C1C' }]}>Special character</Text>
          </View>
        </View>

        <View style={{ height: 16 }} />

        {/* Confirm Password Input using Ux4gInputField with error status */}
        <Ux4gInputField
          label="Confirm password"
          placeholder="••••••••••••"
          value={confirmPassword}
          onValueChange={setConfirmPassword}
          type="password"
          size="large"
          status="error"
          caption="Passwords do not match"
        />

        <View style={{ height: 24 }} />

        {/* Reset Password Action Button */}
        <Ux4gButton
          text="Reset password"
          variant="primary"
          size="large"
          onPress={handleResetPassword}
          style={styles.resetBtn}
        />
      </ScrollView>

      {/* Powered by Digital India Footer */}
      <View style={styles.footer}>
        <Text style={[styles.poweredByText, { color: isDark ? UX4GColors.neutral400 : '#64748B' }]}>
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
  screen: { flex: 1, justifyContent: 'space-between' },
  headerLeading: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  emblemLogo: { width: 32, height: 32 },
  headerDivider: { width: 1, height: 26, marginHorizontal: 2 },
  unionLogo: { width: 28, height: 28 },
  menuBtn: {
    width: 38,
    height: 38,
    borderRadius: 8,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: { padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 30,
    marginBottom: 6,
    fontFamily: 'Inter',
  },
  subtitle: {
    fontSize: 13.5,
    fontWeight: '400',
    lineHeight: 19,
    marginBottom: 20,
    fontFamily: 'Inter',
  },
  strengthBarContainer: {
    marginTop: 12,
    gap: 6,
  },
  strengthLabel: {
    fontSize: 12.5,
    fontWeight: '700',
    color: '#15803D',
    marginBottom: 10,
    fontFamily: 'Inter',
  },
  checklistContainer: {
    borderRadius: 10,
    padding: 14,
    gap: 8,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  greenFilledCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#16A34A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  redFilledCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#DC2626',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteIconText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
  },
  checkText: {
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  resetBtn: {
    height: 48,
    borderRadius: 8,
    width: '100%',
  },
  footer: {
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  poweredByText: {
    fontSize: 11,
    fontFamily: 'Inter',
  },
  digitalIndiaLogo: {
    height: 22,
    width: 90,
  },
});`;
  }, [variant]);

  // Interactive Live Mockup for Web Preview (Using actual Ux4gInputField & Filled Icons)
  const renderLiveMockup = () => {
    const isCard = variant === 'card';
    const bgScreenColor = isCard ? colors.cardScreenBg : colors.defaultScreenBg;

    return (
      <div
        style={{
          width: 360,
          minHeight: 740,
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
                  height: 26,
                  backgroundColor: isDark ? UX4GColors.neutral700 : '#E2E8F0',
                  margin: '0 2px',
                }}
              />,
              <img
                key="union"
                src="/Union.svg"
                alt="Union"
                style={{
                  height: 26,
                }}
              />,
            ]}
            actions={[
              {
                customWidget: (
                  <div
                    key="menu"
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
              {/* Floating Elevated Card */}
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
                {/* Title */}
                <h2
                  style={{
                    fontSize: 24,
                    fontWeight: 800,
                    lineHeight: 1.25,
                    letterSpacing: '-0.3px',
                    color: colors.title,
                    margin: 0,
                    marginBottom: 6,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Create new password
                </h2>

                {/* Subtitle */}
                <p
                  style={{
                    fontSize: 13.5,
                    fontWeight: 400,
                    lineHeight: 1.4,
                    color: colors.subtitle,
                    margin: 0,
                    marginBottom: 20,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Choose a strong password to secure your account
                </p>

                {/* Password Input using actual Ux4gInputField */}
                <Ux4gInputField
                  label="Password"
                  placeholder="••••••••••••"
                  value={password}
                  onValueChange={setPassword}
                  type="password"
                  size="large"
                />

                {/* Password Strength Progress Bar */}
                <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <Ux4gLinearProgressBar
                    value={0.78}
                    gradientColors={['#86EFAC', '#15803D']}
                    trackColor={isDark ? UX4GColors.neutral800 : '#E2E8F0'}
                    shape="rounded"
                    height={8}
                  />
                  <span
                    style={{
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: '#15803D',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Password Strength: Strong
                  </span>
                </div>

                {/* Criteria Checklist Box with FILLED icons */}
                <div
                  style={{
                    backgroundColor: colors.strengthContainerBg,
                    borderRadius: 10,
                    padding: '12px 14px',
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                      <circle cx="10" cy="10" r="10" fill="#16A34A" />
                      <path d="M6 10.2L8.8 13L14.2 7" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: 13, fontWeight: 500, color: colors.greenTextColor, fontFamily: 'Inter, system-ui, sans-serif' }}>
                      8+ characters
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                      <circle cx="10" cy="10" r="10" fill="#16A34A" />
                      <path d="M6 10.2L8.8 13L14.2 7" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: 13, fontWeight: 500, color: colors.greenTextColor, fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Uppercase letter
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                      <circle cx="10" cy="10" r="10" fill="#16A34A" />
                      <path d="M6 10.2L8.8 13L14.2 7" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: 13, fontWeight: 500, color: colors.greenTextColor, fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Number
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                      <circle cx="10" cy="10" r="10" fill="#DC2626" />
                      <path d="M10 5.5v5.5M10 14v.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
                    </svg>
                    <span style={{ fontSize: 13, fontWeight: 500, color: colors.redTextColor, fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Special character
                    </span>
                  </div>
                </div>

                <div style={{ height: 16 }} />

                {/* Confirm Password Input using actual Ux4gInputField with error status */}
                <Ux4gInputField
                  label="Confirm password"
                  placeholder="••••••••••••"
                  value={confirmPassword}
                  onValueChange={setConfirmPassword}
                  type="password"
                  size="large"
                  status="error"
                  caption="Passwords do not match"
                />

                <div style={{ height: 24 }} />

                {/* Reset Password Button */}
                <Ux4gButton
                  text="Reset password"
                  variant="primary"
                  size="large"
                  onPress={handleResetPassword}
                  style={{
                    height: 48,
                    borderRadius: 8,
                    width: '100%',
                    backgroundColor: colors.btnPrimaryBg,
                  }}
                />
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
              <span style={{ fontSize: 11, fontWeight: 400, color: colors.footerText, fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
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
              backgroundColor: colors.defaultScreenBg,
            }}
          >
            <div
              style={{
                padding: '24px 20px 20px 20px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Title */}
              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  lineHeight: 1.25,
                  letterSpacing: '-0.3px',
                  color: colors.title,
                  margin: 0,
                  marginBottom: 6,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Create new password
              </h2>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: 13.5,
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: colors.subtitle,
                  margin: 0,
                  marginBottom: 20,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Choose a strong password to secure your account
              </p>

              {/* Password Input using actual Ux4gInputField */}
              <Ux4gInputField
                label="Password"
                placeholder="••••••••••••"
                value={password}
                onValueChange={setPassword}
                type="password"
                size="large"
              />

              {/* Password Strength Progress Bar */}
              <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <Ux4gLinearProgressBar
                  value={0.78}
                  gradientColors={['#86EFAC', '#15803D']}
                  trackColor={isDark ? UX4GColors.neutral800 : '#E2E8F0'}
                  shape="rounded"
                  height={8}
                />
                <span
                  style={{
                    fontSize: 12.5,
                    fontWeight: 700,
                    color: '#15803D',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Password Strength: Strong
                </span>
              </div>

              {/* Criteria Checklist Box with FILLED icons */}
              <div
                style={{
                  backgroundColor: colors.strengthContainerBg,
                  borderRadius: 10,
                  padding: '12px 14px',
                  marginTop: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                    <circle cx="10" cy="10" r="10" fill="#16A34A" />
                    <path d="M6 10.2L8.8 13L14.2 7" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontSize: 13, fontWeight: 500, color: colors.greenTextColor, fontFamily: 'Inter, system-ui, sans-serif' }}>
                    8+ characters
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                    <circle cx="10" cy="10" r="10" fill="#16A34A" />
                    <path d="M6 10.2L8.8 13L14.2 7" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontSize: 13, fontWeight: 500, color: colors.greenTextColor, fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Uppercase letter
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                    <circle cx="10" cy="10" r="10" fill="#16A34A" />
                    <path d="M6 10.2L8.8 13L14.2 7" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontSize: 13, fontWeight: 500, color: colors.greenTextColor, fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Number
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                    <circle cx="10" cy="10" r="10" fill="#DC2626" />
                    <path d="M10 5.5v5.5M10 14v.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                  <span style={{ fontSize: 13, fontWeight: 500, color: colors.redTextColor, fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Special character
                  </span>
                </div>
              </div>

              <div style={{ height: 16 }} />

              {/* Confirm Password Input using actual Ux4gInputField with error status */}
              <Ux4gInputField
                label="Confirm password"
                placeholder="••••••••••••"
                value={confirmPassword}
                onValueChange={setConfirmPassword}
                type="password"
                size="large"
                status="error"
                caption="Passwords do not match"
              />

              <div style={{ height: 24 }} />

              {/* Reset Password Button */}
              <Ux4gButton
                text="Reset password"
                variant="primary"
                size="large"
                onPress={handleResetPassword}
                style={{
                  height: 48,
                  borderRadius: 8,
                  width: '100%',
                  backgroundColor: colors.btnPrimaryBg,
                }}
              />
            </div>

            {/* Brand Footer */}
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
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 400,
                  color: colors.footerText,
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
          <h1 className="wb-title">Create new password</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Password creation screen with strength indicator and mismatch error state.
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
                <CodeBlock
                  code={codeString}
                  language="TSX"
                  filename={variant === 'card' ? 'CreateNewPasswordCardPattern.tsx' : 'CreateNewPasswordDefaultPattern.tsx'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
