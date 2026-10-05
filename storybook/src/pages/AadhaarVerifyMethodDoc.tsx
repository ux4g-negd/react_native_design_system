import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gCard } from '../../../src/components/card/Card';
import { Ux4gRadioButton } from '../../../src/components/radio-button/RadioButton';
import { Ux4gButton } from '../../../src/components/button/Button';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface AadhaarVerifyMethodDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';
type AuthMethod = 'otp' | 'face';

export const AadhaarVerifyMethodDoc: React.FC<AadhaarVerifyMethodDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [selectedMethod, setSelectedMethod] = useState<AuthMethod>('otp');

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
      // Card states for Card style (borderless pill cards inside white card)
      cardOptionSelectedBg: isDark ? UX4GColors.primary900 : '#EDE9FE',
      cardOptionUnselectedBg: isDark ? UX4GColors.neutral800 : '#F3F4F6',
      // Card states for Default style (bordered cards)
      defaultOptionSelectedBg: isDark ? UX4GColors.primary900 : '#F0EBFF',
      defaultOptionSelectedBorder: isDark ? UX4GColors.primary400 : '#C0B3FF',
      defaultOptionUnselectedBg: isDark ? UX4GColors.neutral900 : '#FAFAFA',
      defaultOptionUnselectedBorder: isDark ? UX4GColors.neutral800 : '#E5E7EB',
      menuBorder: isDark ? UX4GColors.primary400 : '#C0B3FF',
      menuIcon: isDark ? UX4GColors.primary300 : UX4GColors.primary,
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
  TouchableOpacity,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gCard,
  Ux4gRadioButton,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';

export const AadhaarVerifyMethodCardPattern = ({ isDark = false }: { isDark?: boolean }) => {
  const [method, setMethod] = useState<'otp' | 'face'>('otp');

  const methods = [
    {
      id: 'otp',
      title: 'Aadhaar OTP',
      subtitle: 'Receive a one-time password on your...',
    },
    {
      id: 'face',
      title: 'Face Authentication',
      subtitle: 'Verify identity using face recognition....',
    },
  ];

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
          {/* Back Button */}
          <TouchableOpacity style={styles.backWrapper} onPress={() => {}}>
            <Text style={[styles.backText, { color: isDark ? UX4GColors.primary300 : UX4GColors.primary }]}>
              ← Back
            </Text>
          </TouchableOpacity>

          <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
            Verify with Aadhaar
          </Text>
          <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            Choose how you want to authenticate. Your Aadhaar number is never stored.
          </Text>

          <View style={styles.cardList}>
            {methods.map((item) => {
              const isSelected = method === item.id;
              return (
                <Ux4gCard
                  key={item.id}
                  cornerRadius={12}
                  isClickable
                  onPressed={() => setMethod(item.id as any)}
                  backgroundColor={
                    isSelected
                      ? isDark ? UX4GColors.primary900 : '#EDE9FE'
                      : isDark ? UX4GColors.neutral800 : '#F3F4F6'
                  }
                  borderColor="transparent"
                  borderWidth={0}
                >
                  <View style={styles.cardRow}>
                    <Ux4gRadioButton
                      value={item.id}
                      groupValue={method}
                      onChanged={(v) => setMethod(v as any)}
                    />
                    <View style={styles.cardTextCol}>
                      <Text style={[
                        styles.cardTitle,
                        { color: isSelected ? (isDark ? UX4GColors.primary300 : UX4GColors.primary) : (isDark ? UX4GColors.neutral50 : UX4GColors.gray900) }
                      ]}>
                        {item.title}
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={[
                          styles.cardSubtitle,
                          { color: isSelected ? (isDark ? UX4GColors.primary300 : UX4GColors.primary) : (isDark ? UX4GColors.neutral400 : UX4GColors.neutral500) }
                        ]}
                      >
                        {item.subtitle}
                      </Text>
                    </View>
                  </View>
                </Ux4gCard>
              );
            })}
          </View>

          {/* Divider inside Card */}
          <View style={[styles.divider, { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200 }]} />

          {/* Cancel + Continue buttons inside Card */}
          <View style={styles.actionBtnRow}>
            <TouchableOpacity onPress={() => {}} style={styles.cancelBtn}>
              <Text style={{ color: isDark ? UX4GColors.primary300 : UX4GColors.primary, fontWeight: '600', fontSize: 15 }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <Ux4gButton
              text="Continue"
              onPress={() => {}}
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
  backWrapper: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  backText: {
    fontSize: 14,
    fontWeight: '600',
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
    marginBottom: 20,
    fontFamily: 'Inter',
  },
  cardList: {
    gap: 12,
    marginBottom: 20,
  },
  cardRow: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 14,
    alignItems: 'flex-start',
  },
  cardTextCol: {
    marginLeft: 10,
    flex: 1,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 19.5,
    marginBottom: 2,
    fontFamily: 'Inter',
  },
  cardSubtitle: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.55,
    fontFamily: 'Inter',
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
  },
  cancelBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingTop: 16,
  },
  footerText: {
    fontSize: 11,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  digitalIndiaLogo: {
    height: 22,
    width: 70,
  },
});`;
    }

    return `import React, { useState } from 'react';
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
  Ux4gCard,
  Ux4gRadioButton,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';

export const AadhaarVerifyMethodDefaultPattern = ({ isDark = false }: { isDark?: boolean }) => {
  const [method, setMethod] = useState<'otp' | 'face'>('otp');

  const methods = [
    {
      id: 'otp',
      title: 'Aadhaar OTP',
      subtitle: 'Receive a one-time password on your Aa...',
    },
    {
      id: 'face',
      title: 'Face Authentication',
      subtitle: 'Verify identity using face recognition. C...',
    },
  ];

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
        {/* Back Button */}
        <TouchableOpacity style={styles.backWrapper} onPress={() => {}}>
          <Text style={[styles.backText, { color: isDark ? UX4GColors.primary300 : UX4GColors.primary }]}>
            ← Back
          </Text>
        </TouchableOpacity>

        <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
          Verify with Aadhaar
        </Text>
        <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
          Choose how you want to authenticate. Your Aadhaar number is never stored.
        </Text>

        {/* Method Option Cards */}
        <View style={styles.cardList}>
          {methods.map((item) => {
            const isSelected = method === item.id;
            return (
              <Ux4gCard
                key={item.id}
                cornerRadius={12}
                isClickable
                onPressed={() => setMethod(item.id as any)}
                backgroundColor={
                  isSelected
                    ? isDark ? UX4GColors.primary900 : '#F0EBFF'
                    : isDark ? UX4GColors.neutral900 : '#FAFAFA'
                }
                borderColor={
                  isSelected
                    ? isDark ? UX4GColors.primary400 : '#C0B3FF'
                    : isDark ? UX4GColors.neutral800 : '#E5E7EB'
                }
                borderWidth={isSelected ? 1.5 : 1}
              >
                <View style={styles.cardRow}>
                  <Ux4gRadioButton
                    value={item.id}
                    groupValue={method}
                    onChanged={(v) => setMethod(v as any)}
                  />
                  <View style={styles.cardTextCol}>
                    <Text style={[
                      styles.cardTitle,
                      { color: isSelected ? (isDark ? UX4GColors.primary300 : UX4GColors.primary) : (isDark ? UX4GColors.neutral50 : UX4GColors.gray900) }
                    ]}>
                      {item.title}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={[
                        styles.cardSubtitle,
                        { color: isSelected ? (isDark ? UX4GColors.primary300 : UX4GColors.primary) : (isDark ? UX4GColors.neutral400 : UX4GColors.neutral500) }
                      ]}
                    >
                      {item.subtitle}
                    </Text>
                  </View>
                </View>
              </Ux4gCard>
            );
          })}
        </View>
      </View>

      {/* Footer Section */}
      <View style={styles.footerSection}>
        <View style={[styles.divider, { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200 }]} />
        <View style={styles.actionBtnRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cancelBtn}>
            <Text style={{ color: isDark ? UX4GColors.primary300 : UX4GColors.primary, fontWeight: '600', fontSize: 15 }}>
              Cancel
            </Text>
          </TouchableOpacity>
          <Ux4gButton
            text="Continue"
            onPress={() => {}}
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
    paddingTop: 20,
    flex: 1,
  },
  backWrapper: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  backText: {
    fontSize: 14,
    fontWeight: '600',
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
    marginBottom: 20,
    fontFamily: 'Inter',
  },
  cardList: {
    gap: 12,
  },
  cardRow: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 14,
    alignItems: 'flex-start',
  },
  cardTextCol: {
    marginLeft: 10,
    flex: 1,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 19.5,
    marginBottom: 2,
    fontFamily: 'Inter',
  },
  cardSubtitle: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17.55,
    fontFamily: 'Inter',
  },
  footerSection: {
    paddingHorizontal: 20,
    paddingBottom: 16,
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
    marginBottom: 20,
  },
  cancelBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  footerText: {
    fontSize: 11,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  digitalIndiaLogo: {
    height: 22,
    width: 70,
  },
});`;
  }, [variant]);

  // Method Option Cards Definition
  const methodOptions: { id: AuthMethod; title: string; subtitle: string }[] = [
    {
      id: 'otp',
      title: 'Aadhaar OTP',
      subtitle: 'Receive a one-time password on your...',
    },
    {
      id: 'face',
      title: 'Face Authentication',
      subtitle: 'Verify identity using face recognition....',
    },
  ];

  // Interactive Live Mockup for Web Preview
  const renderLiveMockup = () => {
    const isCard = variant === 'card';
    const bgScreenColor = isCard ? colors.cardScreenBg : colors.defaultScreenBg;

    return (
      <div
        style={{
          width: 360,
          minHeight: 680,
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
                  <button
                    key="menu"
                    type="button"
                    onClick={() => {}}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      backgroundColor: isDark ? 'transparent' : '#FFFFFF',
                      border: `1.5px solid ${colors.menuBorder}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M4 6h16M4 12h16M4 18h16" stroke={colors.menuIcon} strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </button>
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
          /* Card Style Variant (Matching Image) */
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: colors.cardScreenBg,
              justifyContent: 'space-between',
              padding: '16px 16px 20px 16px',
            }}
          >
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
              {/* Back Button */}
              <button
                type="button"
                onClick={() => {}}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'transparent',
                  border: 'none',
                  color: colors.primary,
                  fontSize: 14,
                  fontWeight: '600',
                  cursor: 'pointer',
                  padding: 0,
                  marginBottom: 16,
                  alignSelf: 'flex-start',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                  arrow_back
                </span>
                Back
              </button>

              <h2
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: '-0.3px',
                  color: colors.title,
                  margin: '0 0 8px 0',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Verify with Aadhaar
              </h2>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: colors.subtitle,
                  margin: '0 0 20px 0',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Choose how you want to authenticate. Your Aadhaar number is never stored.
              </p>

              {/* Option Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
                {methodOptions.map((item) => {
                  const isSelected = selectedMethod === item.id;
                  const cardBg = isSelected ? colors.cardOptionSelectedBg : colors.cardOptionUnselectedBg;
                  const textColor = isSelected ? colors.primary : isDark ? UX4GColors.neutral50 : UX4GColors.gray900;
                  const subTextColor = isSelected ? (isDark ? UX4GColors.primary300 : UX4GColors.primary) : isDark ? UX4GColors.neutral400 : UX4GColors.neutral500;

                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedMethod(item.id)}
                      style={{
                        backgroundColor: cardBg,
                        border: 'none',
                        borderRadius: 12,
                        padding: '14px 16px 14px 14px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 12,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div style={{ paddingTop: 2 }}>
                        <Ux4gRadioButton
                          value={item.id}
                          groupValue={selectedMethod}
                          onChanged={(v) => setSelectedMethod(v as AuthMethod)}
                        />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
                        <span
                          style={{
                            fontSize: 15,
                            fontWeight: 700,
                            lineHeight: '20px',
                            color: textColor,
                            marginBottom: 2,
                            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                          }}
                        >
                          {item.title}
                        </span>
                        <span
                          style={{
                            fontSize: 13,
                            fontWeight: 400,
                            lineHeight: '18px',
                            color: subTextColor,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                          }}
                        >
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Divider inside Card */}
              <div
                style={{
                  height: 1,
                  backgroundColor: isDark ? UX4GColors.neutral800 : '#F3F4F6',
                  width: '100%',
                  marginBottom: 16,
                }}
              />

              {/* Action Buttons inside Card */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <button
                  type="button"
                  onClick={() => alert('Cancel clicked')}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: colors.primary,
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: 'pointer',
                    padding: '8px 12px',
                  }}
                >
                  Cancel
                </button>
                <Ux4gButton
                  text="Continue"
                  onPress={() => alert(`Selected method: ${selectedMethod}`)}
                  size="medium"
                  style={{
                    height: 44,
                    paddingHorizontal: 24,
                    backgroundColor: colors.primary,
                    borderRadius: 8,
                  }}
                />
              </div>
            </div>

            {/* Footer outside Card */}
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
        ) : (
          /* Default Layout Variant */
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '24px 20px 16px 20px',
              backgroundColor: colors.defaultScreenBg,
            }}
          >
            <div>
              {/* Back Button */}
              <button
                type="button"
                onClick={() => {}}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'transparent',
                  border: 'none',
                  color: colors.primary,
                  fontSize: 14,
                  fontWeight: '600',
                  cursor: 'pointer',
                  padding: 0,
                  marginBottom: 16,
                  alignSelf: 'flex-start',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                  arrow_back
                </span>
                Back
              </button>

              <h2
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: '-0.3px',
                  color: colors.title,
                  margin: '0 0 8px 0',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Verify with Aadhaar
              </h2>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: colors.subtitle,
                  margin: '0 0 20px 0',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Choose how you want to authenticate. Your Aadhaar number is never stored.
              </p>

              {/* Option Cards with borders */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {methodOptions.map((item) => {
                  const isSelected = selectedMethod === item.id;
                  const cardBg = isSelected ? colors.defaultOptionSelectedBg : colors.defaultOptionUnselectedBg;
                  const cardBorder = isSelected
                    ? `1.5px solid ${colors.defaultOptionSelectedBorder}`
                    : `1px solid ${colors.defaultOptionUnselectedBorder}`;
                  const textColor = isSelected ? colors.primary : isDark ? UX4GColors.neutral50 : UX4GColors.gray900;
                  const subTextColor = isSelected ? (isDark ? UX4GColors.primary300 : UX4GColors.primary) : isDark ? UX4GColors.neutral400 : UX4GColors.neutral500;

                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedMethod(item.id)}
                      style={{
                        backgroundColor: cardBg,
                        border: cardBorder,
                        borderRadius: 12,
                        padding: '14px 16px 14px 14px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 12,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div style={{ paddingTop: 2 }}>
                        <Ux4gRadioButton
                          value={item.id}
                          groupValue={selectedMethod}
                          onChanged={(v) => setSelectedMethod(v as AuthMethod)}
                        />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
                        <span
                          style={{
                            fontSize: 15,
                            fontWeight: 700,
                            lineHeight: '20px',
                            color: textColor,
                            marginBottom: 2,
                            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                          }}
                        >
                          {item.title}
                        </span>
                        <span
                          style={{
                            fontSize: 13,
                            fontWeight: 400,
                            lineHeight: '18px',
                            color: subTextColor,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                          }}
                        >
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
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
                  marginBottom: 20,
                }}
              >
                <button
                  type="button"
                  onClick={() => alert('Cancel clicked')}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: colors.primary,
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: 'pointer',
                    padding: '8px 12px',
                  }}
                >
                  Cancel
                </button>
                <Ux4gButton
                  text="Continue"
                  onPress={() => alert(`Selected method: ${selectedMethod}`)}
                  size="medium"
                  style={{
                    height: 44,
                    paddingHorizontal: 24,
                    backgroundColor: colors.primary,
                    borderRadius: 8,
                  }}
                />
              </div>

              {/* Footer */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  paddingBottom: 8,
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
            <span>Patterns</span> / <span>Identity and Access</span> / <span>Aadhaar Authentication Gate</span> / <span className="active">Verify with Aadhaar — choose method</span>
          </div>
          <h1 className="wb-title">Verify with Aadhaar — choose method</h1>
          <p className="wb-subtitle">
            Method-picker shown after the user enters their Aadhaar number. Selectable option cards (Aadhaar OTP, Face Authentication) built with the design system's Ux4gCard and Ux4gRadioButton.
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
                  filename={variant === 'card' ? 'AadhaarVerifyMethodCardPattern.tsx' : 'AadhaarVerifyMethodDefaultPattern.tsx'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AadhaarVerifyMethodDoc;
