import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gButton } from '../../../src/components/button/Button';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface SignUpAccountCreatedDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const SignUpAccountCreatedDoc: React.FC<SignUpAccountCreatedDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');

  // Exact color tokens from UX4G Flutter Design System (1:1 match with Ux4gColors/Ux4gPalette)
  const colors = useMemo(() => {
    return {
      title: isDark ? UX4GColors.neutral50 : UX4GColors.gray900,           // _getTitleColor
      welcomeText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700, // Welcome subtitle
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,  // _getSubtleText
      mutedText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,   // _getMutedText (footer)
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,      // _getBorder
      cardBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,           // card surface
      cardScreenBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100, // _getSuCardBg
      defaultScreenBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      greenOuter: UX4GColors.green100,  // #DDF8D8 — Ux4gColors.green100
      greenInner: UX4GColors.green,     // #128937 — Ux4gColors.green
      badgeBg: isDark ? UX4GColors.orange800 : UX4GColors.orange100,       // RECOMMENDED pill bg
      badgeText: isDark ? UX4GColors.orange300 : UX4GColors.orange800,     // RECOMMENDED pill text
      primaryBtnBg: isDark ? UX4GColors.primary300 : UX4GColors.primary,
    };
  }, [isDark]);

  const handleLinkAadhaar = () => {
    alert('Navigating to Aadhaar linking flow...');
  };

  const handleSkip = () => {
    alert('Skipping to home dashboard...');
  };

  // Clean React Native TSX code snippet matching Flutter signUpStep5Component
  const codeString = useMemo(() => {
    if (variant === 'card') {
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
  Ux4gButton,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const SignUpAccountCreatedCardPattern = () => {
  return (
    <View style={styles.screen}>
      {/* 1. Official Government Header */}
      <Ux4gAppHeader
        title=""
        variant="light"
        elevation={0}
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
        actions={[
          {
            icon: 'menu',
            onPressed: () => {},
          },
        ]}
      />
      <Ux4gDivider color={UX4GColors.neutral200} />

      {/* 2. Elevated Card Layout */}
      <View style={styles.cardContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.card}>
            {/* Concentric Green Success Check Badge */}
            <View style={styles.greenOuterBadge}>
              <View style={styles.greenInnerBadge}>
                <Text style={styles.checkIcon}>✓</Text>
              </View>
            </View>

            <View style={{ height: 20 }} />

            {/* Title */}
            <Text style={styles.cardTitle}>Account Created!</Text>

            {/* Subtitle */}
            <Text style={styles.welcomeText}>Welcome, Ramesh Kumar</Text>

            <View style={{ height: 28 }} />

            {/* Recommended Pill Badge */}
            <View style={styles.recommendedBadge}>
              <Text style={styles.recommendedText}>RECOMMENDED</Text>
            </View>

            <View style={{ height: 12 }} />

            {/* Primary Action Button */}
            <Ux4gButton
              text="Link Aadhaar Now"
              variant="primary"
              size="large"
              onPress={() => {}}
              style={styles.actionButton}
            />

            <View style={{ height: 12 }} />

            {/* Secondary Action Button */}
            <Ux4gButton
              text="Skip and Browse Services"
              variant="outline"
              size="large"
              onPress={() => {}}
              style={styles.actionButton}
            />

            <View style={{ height: 12 }} />

            {/* Caption */}
            <Text style={styles.captionText}>
              You can link Aadhaar later from your profile
            </Text>
          </View>
        </ScrollView>

        {/* Powered by Digital India Footer */}
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
  cardContainer: {
    flex: 1,
    backgroundColor: UX4GColors.primary100, // #DCD4FF
  },
  scrollContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: UX4GColors.neutral0,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 2,
  },
  greenOuterBadge: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: UX4GColors.green100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenInnerBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: UX4GColors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkIcon: {
    color: UX4GColors.neutral0,
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 26.4,
    letterSpacing: -0.3,
    color: '#111827',
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20.8,
    color: UX4GColors.neutral700,
    marginTop: 6,
    textAlign: 'center',
  },
  recommendedBadge: {
    backgroundColor: UX4GColors.orange100,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
  },
  recommendedText: {
    fontSize: 11,
    fontWeight: '700',
    color: UX4GColors.orange800,
    letterSpacing: 0.8,
  },
  actionButton: {
    width: '100%',
    height: 48,
    borderRadius: 8,
  },
  captionText: {
    fontSize: 12,
    color: UX4GColors.neutral500,
    textAlign: 'center',
    lineHeight: 16.8,
  },
  footer: {
    paddingVertical: 14,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  poweredByText: {
    fontSize: 11,
    color: UX4GColors.neutral400,
  },
  digitalIndiaLogo: {
    height: 24,
    width: 80,
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
  Ux4gButton,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const SignUpAccountCreatedDefaultPattern = () => {
  return (
    <View style={styles.screen}>
      {/* 1. Official Government Header */}
      <Ux4gAppHeader
        title=""
        variant="light"
        elevation={0}
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
        actions={[
          {
            icon: 'menu',
            onPressed: () => {},
          },
        ]}
      />
      <Ux4gDivider color={UX4GColors.neutral200} />

      {/* 2. Main Flat Layout */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          {/* Concentric Green Success Check Badge */}
          <View style={styles.greenOuterBadge}>
            <View style={styles.greenInnerBadge}>
              <Text style={styles.checkIcon}>✓</Text>
            </View>
          </View>

          <View style={{ height: 24 }} />

          {/* Title */}
          <Text style={styles.title}>Account Created!</Text>

          {/* Subtitle */}
          <Text style={styles.welcomeText}>Welcome, Ramesh Kumar</Text>

          <View style={{ height: 32 }} />

          {/* Recommended Pill Badge */}
          <View style={styles.recommendedBadge}>
            <Text style={styles.recommendedText}>RECOMMENDED</Text>
          </View>

          <View style={{ height: 12 }} />

          {/* Primary Action Button */}
          <Ux4gButton
            text="Link Aadhaar Now"
            variant="primary"
            size="large"
            onPress={() => {}}
            style={styles.actionButton}
          />

          <View style={{ height: 12 }} />

          {/* Secondary Action Button */}
          <Ux4gButton
            text="Skip and Browse Services"
            variant="outline"
            size="large"
            onPress={() => {}}
            style={styles.actionButton}
          />

          <View style={{ height: 16 }} />

          {/* Caption */}
          <Text style={styles.captionText}>
            You can link Aadhaar later from your profile
          </Text>
        </View>
      </ScrollView>

      {/* Powered by Digital India Footer */}
      <View style={styles.footer}>
        <Text style={styles.poweredByText}>Powered by -</Text>
        <Image
          source={{ uri: '/Digital_India_logo.svg' }}
          style={styles.digitalIndiaLogo}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: UX4GColors.neutral0,
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
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  greenOuterBadge: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: UX4GColors.green100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenInnerBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: UX4GColors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkIcon: {
    color: UX4GColors.neutral0,
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    lineHeight: 31.2,
    letterSpacing: -0.3,
    color: '#111827',
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20.8,
    color: UX4GColors.neutral700,
    marginTop: 8,
    textAlign: 'center',
  },
  recommendedBadge: {
    backgroundColor: UX4GColors.orange100,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
  },
  recommendedText: {
    fontSize: 11,
    fontWeight: '700',
    color: UX4GColors.orange800,
    letterSpacing: 0.8,
  },
  actionButton: {
    width: '100%',
    height: 48,
    borderRadius: 8,
  },
  captionText: {
    fontSize: 13,
    color: UX4GColors.neutral500,
    textAlign: 'center',
    lineHeight: 18.2,
  },
  footer: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  poweredByText: {
    fontSize: 11,
    color: UX4GColors.neutral400,
  },
  digitalIndiaLogo: {
    height: 24,
    width: 80,
  },
});`;
  }, [variant]);

  // Interactive Live Mockup for Web Preview (Exact 1:1 match with Flutter Widgetbook Image 1)
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
        <div
          style={{
            position: 'relative',
            zIndex: 10,
          }}
        >
          <Ux4gAppHeader
            title=""
            variant="light"
            elevation={0}
            useSafeArea={false}
            height={56}
            horizontalPadding={16}
            leadingSpacing={12}
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
                  height: 28,
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
                    key="menu"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      border: `1px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.primary200}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'transparent',
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: 20,
                        color: isDark ? UX4GColors.neutral300 : UX4GColors.primary,
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
            <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              {/* Elevated Floating Card */}
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: '32px 20px 24px 20px',
                  boxShadow: isDark
                    ? '0 4px 16px rgba(0, 0, 0, 0.4)'
                    : '0 4px 16px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {/* Concentric Green Circle Check Badge */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 32,
                    backgroundColor: colors.greenOuter,
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
                      backgroundColor: colors.greenInner,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>

                <div style={{ height: 20 }} />

                {/* Title */}
                <h2
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    lineHeight: 1.2,
                    letterSpacing: '-0.3px',
                    color: colors.title,
                    margin: 0,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    textAlign: 'center',
                  }}
                >
                  Account Created!
                </h2>

                {/* Subtitle */}
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    lineHeight: 1.3,
                    color: colors.welcomeText,
                    margin: 0,
                    marginTop: 6,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    textAlign: 'center',
                  }}
                >
                  Welcome, Ramesh Kumar
                </p>

                <div style={{ height: 28 }} />

                {/* Recommended Badge */}
                <div
                  style={{
                    backgroundColor: colors.badgeBg,
                    padding: '4px 12px',
                    borderRadius: 6,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: colors.badgeText,
                      letterSpacing: '0.8px',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    RECOMMENDED
                  </span>
                </div>

                <div style={{ height: 12 }} />

                {/* Primary Button */}
                <Ux4gButton
                  text="Link Aadhaar Now"
                  variant="primary"
                  size="large"
                  onPress={handleLinkAadhaar}
                  style={{
                    height: 48,
                    borderRadius: 8,
                    width: '100%',
                    backgroundColor: colors.primaryBtnBg,
                  }}
                />

                <div style={{ height: 12 }} />

                {/* Secondary Outline Button */}
                <Ux4gButton
                  text="Skip and Browse Services"
                  variant="outline"
                  size="large"
                  onPress={handleSkip}
                  style={{
                    height: 48,
                    borderRadius: 8,
                    width: '100%',
                  }}
                />

                <div style={{ height: 12 }} />

                {/* Caption */}
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 400,
                    lineHeight: 1.4,
                    color: colors.subtleText,
                    margin: 0,
                    textAlign: 'center',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  You can link Aadhaar later from your profile
                </p>
              </div>
            </div>

            {/* Brand Footer */}
            <div
              style={{
                padding: '14px 20px',
                display: 'flex',
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
                  height: 24,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />
            </div>
          </div>
        ) : (
          /* Default Flat Variant (Matching Image 1 Exactly) */
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
                padding: '40px 20px 0 20px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Concentric Green Circle Check Badge */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 32,
                  backgroundColor: colors.greenOuter,
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
                    backgroundColor: colors.greenInner,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>

              <div style={{ height: 24 }} />

              {/* Title */}
              <h2
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: '-0.3px',
                  color: colors.title,
                  margin: 0,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  textAlign: 'center',
                }}
              >
                Account Created!
              </h2>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.3,
                  color: colors.welcomeText,
                  margin: 0,
                  marginTop: 8,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  textAlign: 'center',
                }}
              >
                Welcome, Ramesh Kumar
              </p>

              <div style={{ height: 32 }} />

              {/* Recommended Badge */}
              <div
                style={{
                  backgroundColor: colors.badgeBg,
                  padding: '4px 12px',
                  borderRadius: 6,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: colors.badgeText,
                    letterSpacing: '0.8px',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  RECOMMENDED
                </span>
              </div>

              <div style={{ height: 12 }} />

              {/* Primary Button */}
              <Ux4gButton
                text="Link Aadhaar Now"
                variant="primary"
                size="large"
                onPress={handleLinkAadhaar}
                style={{
                  height: 48,
                  borderRadius: 8,
                  width: '100%',
                  backgroundColor: colors.primaryBtnBg,
                }}
              />

              <div style={{ height: 12 }} />

              {/* Secondary Outline Button */}
              <Ux4gButton
                text="Skip and Browse Services"
                variant="outline"
                size="large"
                onPress={handleSkip}
                style={{
                  height: 48,
                  borderRadius: 8,
                  width: '100%',
                }}
              />

              <div style={{ height: 16 }} />

              {/* Caption */}
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: colors.subtleText,
                  margin: 0,
                  textAlign: 'center',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                You can link Aadhaar later from your profile
              </p>
            </div>

            {/* Brand Footer */}
            <div
              style={{
                padding: '14px 20px',
                display: 'flex',
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
                  height: 24,
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
          <h1 className="wb-title">Account Created</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Success screen after registration. Offers a recommended action to link Aadhaar or skip to browse services.
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
                <CodeBlock code={codeString} language="tsx" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
