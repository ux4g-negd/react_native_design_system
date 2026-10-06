import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gAadhaarInputField } from '../../../src/components/aadhaar-input-field/AadhaarInputField';
import { Ux4gCheckbox } from '../../../src/components/checkbox/Checkbox';
import { Ux4gButton } from '../../../src/components/button/Button';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface ForgotPasswordAccountRecoveryDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const ForgotPasswordAccountRecoveryDoc: React.FC<ForgotPasswordAccountRecoveryDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [aadhaar, setAadhaar] = useState<string>('5489 7621 1234');
  const [agree, setAgree] = useState<boolean>(false);

  // Exact color tokens from UX4G Flutter Design System (1:1 match with Ux4gColors/Ux4gPalette)
  const colors = useMemo(() => {
    return {
      title: isDark ? UX4GColors.neutral50 : '#0F172A',
      subtleText: isDark ? UX4GColors.neutral400 : '#475569',
      mutedText: isDark ? UX4GColors.neutral500 : '#64748B',
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      cardBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      cardScreenBg: isDark ? '#1C1335' : '#F3F0FF',
      defaultScreenBg: isDark ? UX4GColors.neutral950 : '#FFFFFF',
      headerBg: isDark ? UX4GColors.gray900 : '#FFFFFF',
      primary: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      menuBorder: isDark ? UX4GColors.primary400 : '#C0B3FF',
      menuIcon: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      buttonBg: isDark ? UX4GColors.primary : '#4F46E5',
    };
  }, [isDark]);

  const handleSendOtp = () => {
    alert('Aadhaar OTP sent successfully!');
  };

  // Clean React Native TSX code snippet matching Flutter fpStep5Component
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
  Ux4gAadhaarInputField,
  Ux4gCheckbox,
  Ux4gButton,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-components';

export const AccountRecoveryCardPattern = ({ isDark = false }: { isDark?: boolean }) => {
  const [aadhaar, setAadhaar] = useState('5489 7621 1234');
  const [agree, setAgree] = useState(false);

  return (
    <View style={[styles.screen, { backgroundColor: isDark ? '#1C1335' : '#F3F0FF' }]}>
      {/* 1. Official Government Header */}
      <Ux4gAppHeader
        title=""
        variant={isDark ? 'dark' : 'light'}
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
          </TouchableOpacity>,
        ]}
      />
      <Ux4gDivider color={UX4GColors.neutral200} />

      {/* 2. Card Layout Body */}
      <View style={styles.cardContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' }]}>
            {/* Back Navigation Link */}
            <TouchableOpacity style={styles.backBtn} onPress={() => {}}>
              <Text style={[styles.backText, { color: isDark ? UX4GColors.primary300 : '#4F46E5' }]}>
                ← Back to Sign in
              </Text>
            </TouchableOpacity>

            <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : '#0F172A' }]}>
              Account recovery
            </Text>

            <View style={{ height: 20 }} />

            {/* Aadhaar Input Field with Eye Mask Toggle */}
            <Ux4gAadhaarInputField
              value={aadhaar}
              onValueChange={setAadhaar}
              label="Aadhaar Number"
              placeholder="XXXX XXXX 1234"
              showMaskToggle={true}
              defaultMasked={true}
              maskAll={false}
              size="large"
            />

            <View style={{ height: 16 }} />

            <Ux4gCheckbox
              value={agree}
              onValueChange={setAgree}
              label="I agree to verify my identity via Aadhaar OTP for the purpose of password recovery."
            />

            <View style={{ height: 24 }} />

            <Ux4gButton
              text="Send OTP"
              variant="primary"
              size="large"
              onPress={() => {}}
              style={styles.actionButton}
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
    </View>
  );
};

const styles = StyleSheet.create({
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: UX4GColors.primary200,
    backgroundColor: UX4GColors.neutral0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 18,
    color: UX4GColors.primary,
  },
  screen: { flex: 1, backgroundColor: UX4GColors.neutral0 },
  emblemLogo: { width: 32, height: 32 },
  headerDivider: {
    width: 1, height: 28,
    backgroundColor: UX4GColors.neutral300,
    marginHorizontal: 4,
  },
  unionLogo: { width: 32, height: 32 },
  cardContainer: {
    flex: 1,
  },
  scrollContainer: { padding: 16 },
  card: {
    borderRadius: 16,
    padding: 20,
    paddingBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 3,
  },
  backBtn: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  backText: {
    fontSize: 13.5,
    fontWeight: '600',
    fontFamily: 'Inter',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: -0.3,
    lineHeight: 30,
    fontFamily: 'Inter',
  },
  actionButton: {
    width: '100%',
    height: 48,
    borderRadius: 8,
  },
  footer: {
    paddingVertical: 14,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  poweredByText: { fontSize: 11, fontFamily: 'Inter' },
  digitalIndiaLogo: { height: 22, width: 90 },
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
  Ux4gAadhaarInputField,
  Ux4gCheckbox,
  Ux4gButton,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-components';

export const AccountRecoveryDefaultPattern = ({ isDark = false }: { isDark?: boolean }) => {
  const [aadhaar, setAadhaar] = useState('5489 7621 1234');
  const [agree, setAgree] = useState(false);

  return (
    <View style={[styles.screen, { backgroundColor: isDark ? UX4GColors.neutral950 : '#FFFFFF' }]}>
      {/* 1. Official Government Header */}
      <Ux4gAppHeader
        title=""
        variant={isDark ? 'dark' : 'light'}
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
          </TouchableOpacity>,
        ]}
      />
      <Ux4gDivider color={UX4GColors.neutral200} />

      {/* 2. Main Content Body */}
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Back Navigation Link */}
          <TouchableOpacity style={styles.backBtn} onPress={() => {}}>
            <Text style={[styles.backText, { color: isDark ? UX4GColors.primary300 : '#4F46E5' }]}>
              ← Back to Sign in
            </Text>
          </TouchableOpacity>

          <View style={{ height: 16 }} />

          <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : '#0F172A' }]}>
            Account recovery
          </Text>

          <View style={{ height: 24 }} />

          {/* Aadhaar Input Field with Eye Mask Toggle */}
          <Ux4gAadhaarInputField
            value={aadhaar}
            onValueChange={setAadhaar}
            label="Aadhaar Number"
            placeholder="XXXX XXXX 1234"
            showMaskToggle={true}
            defaultMasked={true}
            maskAll={false}
            size="large"
          />

          <View style={{ height: 16 }} />

          <Ux4gCheckbox
            value={agree}
            onValueChange={setAgree}
            label="I agree to verify my identity via Aadhaar OTP for the purpose of password recovery."
          />

          <View style={{ height: 24 }} />

          <Ux4gButton
            text="Send OTP"
            variant="primary"
            size="large"
            onPress={() => {}}
            style={styles.actionButton}
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
    </View>
  );
};

const styles = StyleSheet.create({
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: UX4GColors.primary200,
    backgroundColor: UX4GColors.neutral0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 18,
    color: UX4GColors.primary,
  },
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
  backBtn: {
    alignSelf: 'flex-start',
    marginBottom: 4,
  },
  backText: {
    fontSize: 13.5,
    fontWeight: '600',
    fontFamily: 'Inter',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: -0.3,
    lineHeight: 30,
    fontFamily: 'Inter',
  },
  actionButton: {
    width: '100%',
    height: 48,
    borderRadius: 8,
  },
  footer: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  poweredByText: { fontSize: 11, fontFamily: 'Inter' },
  digitalIndiaLogo: { height: 22, width: 90 },
});`;
  }, [variant]);

  // Interactive Live Mockup for Web Preview (1:1 match with Flutter FP Step 5)
  const renderLiveMockup = () => {
    const isCard = variant === 'card';
    const bgScreenColor = isCard ? colors.cardScreenBg : colors.defaultScreenBg;

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
              {/* Elevated Card */}
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: '20px 20px 24px 20px',
                  boxShadow: isDark
                    ? '0 4px 16px rgba(0, 0, 0, 0.4)'
                    : '0 4px 16px rgba(0, 0, 0, 0.04)',
                }}
              >
                {/* Back Link */}
                <div
                  onClick={() => {}}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    cursor: 'pointer',
                    padding: '2px 0',
                    marginBottom: 16,
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
                      fontSize: 13.5,
                      fontWeight: 600,
                      color: colors.primary,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Back to Sign in
                  </span>
                </div>

                {/* Title */}
                <h2
                  style={{
                    fontSize: 24,
                    fontWeight: 800,
                    lineHeight: 1.25,
                    letterSpacing: '-0.3px',
                    color: colors.title,
                    margin: 0,
                    marginBottom: 20,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Account recovery
                </h2>

                {/* Aadhaar Input with Eye Mask Toggle */}
                <Ux4gAadhaarInputField
                  value={aadhaar}
                  onValueChange={setAadhaar}
                  label="Aadhaar Number"
                  placeholder="XXXX XXXX 1234"
                  showMaskToggle={true}
                  defaultMasked={true}
                  maskAll={false}
                  size="large"
                />

                <div style={{ height: 16 }} />

                {/* Agreement Checkbox */}
                <Ux4gCheckbox
                  value={agree}
                  onChanged={(v) => setAgree(!!v)}
                  label="I agree to verify my identity via Aadhaar OTP for the purpose of password recovery."
                />

                <div style={{ height: 24 }} />

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
              </div>
            </div>

            {/* Brand Footer */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '14px 20px',
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
              backgroundColor: colors.defaultScreenBg,
            }}
          >
            <div
              style={{
                padding: '20px 20px 0 20px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'auto',
              }}
            >
              {/* Back Link */}
              <div
                onClick={() => {}}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  cursor: 'pointer',
                  padding: '2px 0',
                  marginBottom: 16,
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
                    fontSize: 13.5,
                    fontWeight: 600,
                    color: colors.primary,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Back to Sign in
                </span>
              </div>

              {/* Title */}
              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  lineHeight: 1.25,
                  letterSpacing: '-0.3px',
                  color: colors.title,
                  margin: 0,
                  marginBottom: 20,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Account recovery
              </h2>

              {/* Aadhaar Input with Eye Mask Toggle */}
              <Ux4gAadhaarInputField
                value={aadhaar}
                onValueChange={setAadhaar}
                label="Aadhaar Number"
                placeholder="XXXX XXXX 1234"
                showMaskToggle={true}
                defaultMasked={true}
                maskAll={false}
                size="large"
              />

              <div style={{ height: 16 }} />

              {/* Agreement Checkbox */}
              <Ux4gCheckbox
                value={agree}
                onChanged={(v) => setAgree(!!v)}
                label="I agree to verify my identity via Aadhaar OTP for the purpose of password recovery."
              />

              <div style={{ height: 24 }} />

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
            </div>

            {/* Brand Footer */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '14px 20px',
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
          <h1 className="wb-title">Account recovery</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Aadhaar-based account recovery screen. Shows masked Aadhaar number with eye toggle and consent text before sending OTP.
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
                  filename={variant === 'card' ? 'AccountRecoveryCardPattern.tsx' : 'AccountRecoveryDefaultPattern.tsx'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
