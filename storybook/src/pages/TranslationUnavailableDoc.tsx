import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface TranslationUnavailableDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const TranslationUnavailableDoc: React.FC<TranslationUnavailableDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');

  const isCard = variant === 'card';

  const colors = useMemo(() => {
    const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
    const subtleText = isDark ? UX4GColors.neutral400 : '#4B5563';
    const mutedText = isDark ? UX4GColors.neutral500 : '#6B7280';
    const primaryColor = isDark ? UX4GColors.primary300 : '#432CBB';
    const scaffoldBg = isDark ? UX4GColors.neutral950 : '#FFFFFF';
    const containerCardBg = isDark ? '#1A1A1A' : '#FFFFFF';
    const containerCardBorder = isDark ? UX4GColors.neutral700 : '#E5E7EB';
    const headerBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
    const headerDividerColor = isDark ? UX4GColors.neutral700 : '#D1D5DB';
    const menuBtnBorder = isDark ? UX4GColors.primary400 : UX4GColors.primary200;
    const footerText = isDark ? UX4GColors.neutral400 : '#6B7280';
    const screenBg = isCard
      ? isDark
        ? '#1C1635'
        : '#ECE6FD'
      : scaffoldBg;
    // Warning card colors
    const warningBg = '#FFF8EC';
    const warningBorder = '#FFD591';
    const warningIconColor = '#FA8C16';
    const warningTextColor = '#AD4E00';
    // Button colors
    const primaryBtnBg = isDark ? UX4GColors.primary300 : '#432CBB';
    const primaryBtnText = isDark ? '#000000' : '#FFFFFF';
    const outlineBtnBorder = primaryColor;
    const outlineBtnText = primaryColor;

    return {
      titleColor,
      subtleText,
      mutedText,
      primaryColor,
      scaffoldBg,
      containerCardBg,
      containerCardBorder,
      headerBg,
      headerDividerColor,
      menuBtnBorder,
      footerText,
      screenBg,
      warningBg,
      warningBorder,
      warningIconColor,
      warningTextColor,
      primaryBtnBg,
      primaryBtnText,
      outlineBtnBorder,
      outlineBtnText,
    };
  }, [isDark, isCard]);

  // ── React Native TSX source code — Default ──
  const defaultCodeString = `import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gDividerOrientation,
  Ux4gButton,
  Ux4gButtonVariant,
  Ux4gButtonSize,
  Ux4gCard,
  UX4GColors,
} from 'ux4g-react-native-components';

export const TranslationUnavailableScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const screenBg = isDark ? UX4GColors.neutral950 : '#FFFFFF';
  const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
  const subtleText = isDark ? UX4GColors.neutral400 : '#4B5563';
  const mutedText = isDark ? UX4GColors.neutral500 : '#6B7280';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: screenBg }]}>
      {/* App Header */}
      <Ux4gAppHeader
        elevation={4}
        variant="light"
        title=""
        leadingSpacing={8}
        leadingWidgets={[
          <NationalEmblemLogo key="emblem" isDark={isDark} height={40} />,
          <View key="divider" style={styles.headerDividerWrapper}>
            <Ux4gDivider
              orientation={Ux4gDividerOrientation.vertical}
              color="#D1D5DB"
            />
          </View>,
          <UnionLogo
            key="union"
            size={32}
            color={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
          />,
        ]}
        actions={[
          {
            customWidget: (
              <TouchableOpacity
                key="menu"
                style={styles.menuBtn}
                onPress={() => {}}
              >
                <Text style={styles.menuIcon}>☰</Text>
              </TouchableOpacity>
            ),
          },
        ]}
      />

      {/* Content */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={[styles.title, { color: titleColor }]}>
          This page is not yet available in Tamil
        </Text>
        <Text style={[styles.subtitle, { color: subtleText }]}>
          We are translating Income Certificate pages — the Tamil version is coming in May 2026.
        </Text>

        {/* Warning Card */}
        <Ux4gCard
          backgroundColor="#FFF8EC"
          cornerRadius={12}
          borderColor="#FFD591"
          borderWidth={1}
        >
          <View style={styles.warningRow}>
            <Icon name="info" color="#FA8C16" size={20} />
            <View style={styles.warningTextCol}>
              <Text style={styles.warningTitle}>Translation in progress</Text>
              <Text style={styles.warningBody}>
                You can read this page in English meanwhile, or use your browser to auto-translate.
              </Text>
            </View>
          </View>
        </Ux4gCard>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.buttonsContainer}>
        <Ux4gButton
          onPress={() => {}}
          text="Switch to English"
          variant={Ux4gButtonVariant.primary}
          size={Ux4gButtonSize.large}
          height={48}
          fullWidth
        />
        <View style={{ height: 12 }} />
        <Ux4gButton
          onPress={() => {}}
          text="Translate with browser"
          variant={Ux4gButtonVariant.outline}
          size={Ux4gButtonSize.large}
          height={48}
          fullWidth
          borderColor="#432CBB"
          contentColor="#432CBB"
        />
      </View>

      {/* Powered by Digital India */}
      <View style={styles.footerRow}>
        <Text style={[styles.footerText, { color: mutedText }]}>
          Powered by -
        </Text>
        <Image
          source={{ uri: '/digital_india_logo.png' }}
          style={styles.digitalIndiaLogo}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
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
  safeArea: {
    flex: 1,
  },
  headerDividerWrapper: {
    height: 32,
    justifyContent: 'center',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    lineHeight: 26,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 24,
  },
  warningRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 14,
  },
  warningTextCol: {
    flex: 1,
    marginLeft: 10,
  },
  warningTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#AD4E00',
    marginBottom: 4,
  },
  warningBody: {
    fontSize: 13,
    color: '#AD4E00',
    lineHeight: 18,
  },
  buttonsContainer: {
    paddingHorizontal: 16,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 12,
  },
  footerText: {
    fontSize: 11,
  },
  digitalIndiaLogo: {
    height: 20,
    width: 60,
  },
});
`;

  // ── React Native TSX source code — Card Style ──
  const cardCodeString = `import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gDividerOrientation,
  Ux4gButton,
  Ux4gButtonVariant,
  Ux4gButtonSize,
  Ux4gCard,
  UX4GColors,
} from 'ux4g-react-native-components';

/// Card Style variant — translation unavailable inside a white card on lavender purple background.
export const TranslationUnavailableCardScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const screenBg = isDark ? '#1C1635' : '#ECE6FD';
  const cardBg = isDark ? '#1A1A1A' : '#FFFFFF';
  const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
  const subtleText = isDark ? UX4GColors.neutral400 : '#4B5563';
  const mutedText = isDark ? UX4GColors.neutral500 : '#6B7280';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: screenBg }]}>
      {/* App Header */}
      <Ux4gAppHeader
        elevation={4}
        variant="light"
        title=""
        leadingSpacing={8}
        leadingWidgets={[
          <NationalEmblemLogo key="emblem" isDark={isDark} height={40} />,
          <View key="divider" style={styles.headerDividerWrapper}>
            <Ux4gDivider
              orientation={Ux4gDividerOrientation.vertical}
              color="#D1D5DB"
            />
          </View>,
          <UnionLogo
            key="union"
            size={32}
            color={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
          />,
        ]}
        actions={[
          {
            customWidget: (
              <TouchableOpacity
                key="menu"
                style={styles.menuBtn}
                onPress={() => {}}
              >
                <Text style={styles.menuIcon}>☰</Text>
              </TouchableOpacity>
            ),
          },
        ]}
      />

      {/* Main Container */}
      <View style={styles.container}>
        {/* Unified White Card */}
        <Ux4gCard
          backgroundColor={cardBg}
          cornerRadius={16}
          style={styles.card}
        >
          <View style={styles.cardContent}>
            <Text style={[styles.title, { color: titleColor }]}>
              This page is not yet available in Tamil
            </Text>
            <Text style={[styles.subtitle, { color: subtleText }]}>
              We are translating Income Certificate pages — the Tamil version is coming in May 2026.
            </Text>

            {/* Warning Card */}
            <Ux4gCard
              backgroundColor="#FFF8EC"
              cornerRadius={12}
              borderColor="#FFD591"
              borderWidth={1}
            >
              <View style={styles.warningRow}>
                <Icon name="info" color="#FA8C16" size={20} />
                <View style={styles.warningTextCol}>
                  <Text style={styles.warningTitle}>Translation in progress</Text>
                  <Text style={styles.warningBody}>
                    You can read this page in English meanwhile, or use your browser to auto-translate.
                  </Text>
                </View>
              </View>
            </Ux4gCard>
          </View>

          {/* Card Action Buttons at Bottom of Card */}
          <View style={styles.buttonsContainer}>
            <Ux4gButton
              onPress={() => {}}
              text="Switch to English"
              variant={Ux4gButtonVariant.primary}
              size={Ux4gButtonSize.large}
              height={48}
              fullWidth
            />
            <View style={{ height: 12 }} />
            <Ux4gButton
              onPress={() => {}}
              text="Translate with browser"
              variant={Ux4gButtonVariant.outline}
              size={Ux4gButtonSize.large}
              height={48}
              fullWidth
              borderColor="#432CBB"
              contentColor="#432CBB"
            />
          </View>
        </Ux4gCard>
      </View>

      {/* Powered by Digital India */}
      <View style={styles.footerRow}>
        <Text style={[styles.footerText, { color: mutedText }]}>
          Powered by -
        </Text>
        <Image
          source={{ uri: '/digital_india_logo.png' }}
          style={styles.digitalIndiaLogo}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
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
  headerDividerWrapper: {
    height: 32,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    justifyContent: 'space-between',
  },
  cardContent: {
    flexShrink: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    lineHeight: 26,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  warningRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
  },
  warningTextCol: {
    flex: 1,
    marginLeft: 10,
  },
  warningTitle: {
    fontSize: 13.5,
    fontWeight: '700',
    color: '#AD4E00',
    marginBottom: 4,
  },
  warningBody: {
    fontSize: 12.5,
    color: '#AD4E00',
    lineHeight: 18,
  },
  buttonsContainer: {
    width: '100%',
    paddingTop: 16,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 12,
  },
  footerText: {
    fontSize: 11,
  },
  digitalIndiaLogo: {
    height: 20,
    width: 60,
  },
});
`;

  return (
    <div className="wb-page">
      {/* Top Header */}
      <div className="wb-header">
        <h1 className="wb-title">
          Translation Unavailable ({isCard ? 'Card Style' : 'Default'})
        </h1>
        <p className="wb-description">
          {isCard
            ? 'Translation unavailable notice with progress status and action buttons inside a card container with light purple background.'
            : 'Translation unavailable notice with progress status on white background.'}
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
              <div
                className={`wb-preview-area ${isDark ? 'dark' : ''}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '32px 16px',
                }}
              >
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
                      color:
                        variant === 'default'
                          ? UX4GColors.neutral0
                          : isDark
                          ? UX4GColors.neutral400
                          : UX4GColors.neutral600,
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
                      color:
                        variant === 'card'
                          ? UX4GColors.neutral0
                          : isDark
                          ? UX4GColors.neutral400
                          : UX4GColors.neutral600,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Card Style
                  </button>
                </div>

                {/* Mobile Phone Mockup Frame */}
                <div
                  style={{
                    width: '360px',
                    height: '640px',
                    backgroundColor: colors.screenBg,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: isDark
                      ? '0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px #333333'
                      : '0 20px 40px rgba(0,0,0,0.12), 0 0 0 1px #E5E7EB',
                    position: 'relative',
                    transition: 'background-color 0.2s ease',
                  }}
                >
                  {/* Ux4gAppHeader inside Mockup */}
                  <div
                    style={{
                      height: '56px',
                      backgroundColor: colors.headerBg,
                      borderBottom: `1px solid ${colors.headerDividerColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0 16px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      zIndex: 10,
                      flexShrink: 0,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <img
                        src="/national_emblem_logo.svg"
                        alt="National Emblem"
                        style={{
                          height: '36px',
                          filter: isDark ? 'brightness(0) invert(1)' : 'none',
                        }}
                      />
                      <div
                        style={{
                          width: '1px',
                          height: '28px',
                          backgroundColor: isDark ? UX4GColors.neutral700 : '#D1D5DB',
                          margin: '0 2px',
                        }}
                      />
                      <UnionLogo size={32} color={colors.primaryColor} isDark={isDark} />
                    </div>

                    {/* Hamburger Menu Button */}
                    <button
                      type="button"
                      onClick={() => {}}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: isDark ? 'transparent' : '#FFFFFF',
                        border: `1.5px solid ${colors.menuBtnBorder}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M4 6h16M4 12h16M4 18h16"
                          stroke={colors.primaryColor}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Body Content Area */}
                  {isCard ? (
                    /* CARD STYLE VARIANT (Image 2) */
                    <div
                      style={{
                        flex: 1,
                        padding: '16px 14px 10px 14px',
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: 0,
                      }}
                    >
                      {/* Unified White Card wrapping text + callout + buttons */}
                      <div
                        style={{
                          flex: 1,
                          backgroundColor: colors.containerCardBg,
                          borderRadius: '16px',
                          border: isDark ? `1px solid ${colors.containerCardBorder}` : 'none',
                          padding: '18px 16px',
                          boxShadow: isDark
                            ? '0 4px 12px rgba(0, 0, 0, 0.4)'
                            : '0 2px 10px rgba(0, 0, 0, 0.05)',
                          boxSizing: 'border-box',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          minHeight: 0,
                        }}
                      >
                        {/* Upper Section */}
                        <div>
                          {/* Title */}
                          <div
                            style={{
                              fontSize: '20px',
                              fontWeight: 700,
                              color: colors.titleColor,
                              marginBottom: '8px',
                              lineHeight: '26px',
                            }}
                          >
                            This page is not yet available in Tamil
                          </div>

                          {/* Subtitle */}
                          <div
                            style={{
                              fontSize: '13.5px',
                              color: colors.subtleText,
                              lineHeight: '20px',
                              marginBottom: '20px',
                            }}
                          >
                            We are translating Income Certificate pages — the Tamil version is coming in May 2026.
                          </div>

                          {/* Warning Callout Box */}
                          <div
                            style={{
                              backgroundColor: colors.warningBg,
                              borderRadius: '12px',
                              border: `1px solid ${colors.warningBorder}`,
                              padding: '12px 14px',
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'flex-start',
                              gap: '10px',
                            }}
                          >
                            {/* Warning / Exclamation Icon */}
                            <span
                              className="material-symbols-outlined"
                              style={{
                                color: colors.warningIconColor,
                                fontSize: '20px',
                                flexShrink: 0,
                                marginTop: '1px',
                                fontVariationSettings: "'FILL' 1",
                              }}
                            >
                              error
                            </span>
                            <div style={{ flex: 1 }}>
                              <div
                                style={{
                                  fontSize: '13.5px',
                                  fontWeight: 700,
                                  color: colors.warningTextColor,
                                  marginBottom: '3px',
                                }}
                              >
                                Translation in progress
                              </div>
                              <div
                                style={{
                                  fontSize: '12.5px',
                                  color: colors.warningTextColor,
                                  lineHeight: '17px',
                                }}
                              >
                                You can read this page in English meanwhile, or use your browser to auto-translate.
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons inside Card */}
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            width: '100%',
                            paddingTop: '20px',
                          }}
                        >
                          <button
                            type="button"
                            style={{
                              width: '100%',
                              height: '46px',
                              backgroundColor: colors.primaryBtnBg,
                              color: colors.primaryBtnText,
                              border: 'none',
                              borderRadius: '8px',
                              fontSize: '15px',
                              fontWeight: 600,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'background-color 0.15s ease',
                            }}
                          >
                            Switch to English
                          </button>
                          <button
                            type="button"
                            style={{
                              width: '100%',
                              height: '46px',
                              backgroundColor: 'transparent',
                              color: colors.outlineBtnText,
                              border: `1.5px solid ${colors.outlineBtnBorder}`,
                              borderRadius: '8px',
                              fontSize: '15px',
                              fontWeight: 600,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'all 0.15s ease',
                            }}
                          >
                            Translate with browser
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* DEFAULT VARIANT */
                    <>
                      <div
                        style={{
                          flex: 1,
                          overflowY: 'auto',
                          padding: '16px',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '20px',
                            fontWeight: 700,
                            color: colors.titleColor,
                            marginBottom: '8px',
                            lineHeight: '26px',
                          }}
                        >
                          This page is not yet available in Tamil
                        </div>

                        <div
                          style={{
                            fontSize: '13.5px',
                            color: colors.subtleText,
                            lineHeight: '20px',
                            marginBottom: '20px',
                          }}
                        >
                          We are translating Income Certificate pages — the Tamil version is coming in May 2026.
                        </div>

                        {/* Warning Callout Box */}
                        <div
                          style={{
                            backgroundColor: colors.warningBg,
                            borderRadius: '12px',
                            border: `1px solid ${colors.warningBorder}`,
                            padding: '12px 14px',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            gap: '10px',
                          }}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{
                              color: colors.warningIconColor,
                              fontSize: '20px',
                              flexShrink: 0,
                              marginTop: '1px',
                              fontVariationSettings: "'FILL' 1",
                            }}
                          >
                            error
                          </span>
                          <div style={{ flex: 1 }}>
                            <div
                              style={{
                                fontSize: '13.5px',
                                fontWeight: 700,
                                color: colors.warningTextColor,
                                marginBottom: '3px',
                              }}
                            >
                              Translation in progress
                            </div>
                            <div
                              style={{
                                fontSize: '12.5px',
                                color: colors.warningTextColor,
                                lineHeight: '17px',
                              }}
                            >
                              You can read this page in English meanwhile, or use your browser to auto-translate.
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Buttons */}
                      <div
                        style={{
                          padding: '0 16px',
                          flexShrink: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px',
                        }}
                      >
                        <button
                          type="button"
                          style={{
                            width: '100%',
                            height: '46px',
                            backgroundColor: colors.primaryBtnBg,
                            color: colors.primaryBtnText,
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '15px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          Switch to English
                        </button>
                        <button
                          type="button"
                          style={{
                            width: '100%',
                            height: '46px',
                            backgroundColor: 'transparent',
                            color: colors.outlineBtnText,
                            border: `1.5px solid ${colors.outlineBtnBorder}`,
                            borderRadius: '8px',
                            fontSize: '15px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          Translate with browser
                        </button>
                      </div>
                    </>
                  )}

                  <div style={{ height: '8px', flexShrink: 0 }} />

                  {/* Powered by Digital India */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                      paddingBottom: '12px',
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11px',
                        color: colors.footerText,
                      }}
                    >
                      Powered by -
                    </span>
                    <img
                      src="/digital_india_logo.png"
                      alt="Digital India"
                      style={{
                        height: '20px',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 2. Code Tab */}
            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                <CodeBlock
                  code={variant === 'card' ? cardCodeString : defaultCodeString}
                  language="tsx"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
