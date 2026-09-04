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
    const footerText = isDark ? UX4GColors.neutral400 : '#6B7280';
    const screenBg = isCard
      ? isDark
        ? UX4GColors.primary800
        : '#F2EFFF'
      : scaffoldBg;
    // Warning card colors
    const warningBg = '#FFF7E6';
    const warningBorder = '#FFC973';
    const warningIconColor = '#FA8C16';
    const warningTextColor = '#AD4E00';
    // Button colors
    const primaryBtnBg = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
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
} from 'ux4g-react-native-design-system';

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
          backgroundColor="#FFF7E6"
          cornerRadius={12}
          borderColor="#FFC973"
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
          text="Translate with Browser"
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
    fontWeight: '800',
    marginBottom: 8,
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
} from 'ux4g-react-native-design-system';

/// Card Style variant — translation unavailable inside a white card on purple background.
export const TranslationUnavailableCardScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const screenBg = isDark ? UX4GColors.primary800 : '#F2EFFF';
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
      />

      {/* White Card Content */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        <Ux4gCard
          backgroundColor={cardBg}
          cornerRadius={16}
          style={styles.card}
        >
          <Text style={[styles.title, { color: titleColor }]}>
            This page is not yet available in Tamil
          </Text>
          <Text style={[styles.subtitle, { color: subtleText }]}>
            We are translating Income Certificate pages — the Tamil version is coming in May 2026.
          </Text>

          {/* Warning Card */}
          <Ux4gCard
            backgroundColor="#FFF7E6"
            cornerRadius={12}
            borderColor="#FFC973"
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
          text="Translate with Browser"
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
  card: {
    padding: 16,
    borderRadius: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
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

  return (
    <div className="wb-page">
      {/* Top Header */}
      <div className="wb-header">
        <h1 className="wb-title">
          Translation Unavailable ({isCard ? 'Card Style' : 'Default'})
        </h1>
        <p className="wb-description">
          {isCard
            ? 'Translation unavailable notice with progress status inside a card container with light purple background.'
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
                      padding: '0 16px',
                      gap: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      zIndex: 10,
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src="/national_emblem_logo.svg"
                      alt="National Emblem"
                      style={{
                        height: '40px',
                        filter: isDark ? 'brightness(0) invert(1)' : 'none',
                      }}
                    />
                    <div
                      style={{
                        width: '1px',
                        height: '32px',
                        backgroundColor: colors.headerDividerColor,
                        margin: '0 4px',
                      }}
                    />
                    <UnionLogo size={32} color={colors.primaryColor} isDark={isDark} />
                  </div>

                  {/* Scrollable Content Area */}
                  <div
                    style={{
                      flex: 1,
                      overflowY: 'auto',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Main Content (with or without card wrapper) */}
                    <div
                      style={{
                        width: '100%',
                        backgroundColor: isCard ? colors.containerCardBg : 'transparent',
                        borderRadius: isCard ? '16px' : '0px',
                        border: isCard ? `1px solid ${colors.containerCardBorder}` : 'none',
                        padding: isCard ? '16px' : '0px',
                        boxShadow: isCard ? '0 4px 12px rgba(0, 0, 0, 0.05)' : 'none',
                        boxSizing: 'border-box' as const,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {/* Title */}
                      <div
                        style={{
                          fontSize: '20px',
                          fontWeight: 800,
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
                          fontSize: '14px',
                          color: colors.subtleText,
                          lineHeight: '20px',
                          marginBottom: '24px',
                        }}
                      >
                        We are translating Income Certificate pages — the Tamil version is coming in May 2026.
                      </div>

                      {/* Warning Card */}
                      <div
                        style={{
                          backgroundColor: colors.warningBg,
                          borderRadius: '12px',
                          border: `1px solid ${colors.warningBorder}`,
                          padding: '14px',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'flex-start',
                          gap: '10px',
                        }}
                      >
                        {/* Info icon */}
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
                          info
                        </span>
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              fontSize: '14px',
                              fontWeight: 700,
                              color: colors.warningTextColor,
                              marginBottom: '4px',
                            }}
                          >
                            Translation in progress
                          </div>
                          <div
                            style={{
                              fontSize: '13px',
                              color: colors.warningTextColor,
                              lineHeight: '18px',
                            }}
                          >
                            You can read this page in English meanwhile, or use your browser to auto-translate.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Buttons */}
                  <div
                    style={{
                      padding: '0 16px',
                      flexShrink: 0,
                    }}
                  >
                    <button
                      type="button"
                      style={{
                        width: '100%',
                        height: '48px',
                        backgroundColor: colors.primaryBtnBg,
                        color: colors.primaryBtnText,
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '16px',
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
                    <div style={{ height: '12px' }} />
                    <button
                      type="button"
                      style={{
                        width: '100%',
                        height: '48px',
                        backgroundColor: 'transparent',
                        color: colors.outlineBtnText,
                        border: `1.5px solid ${colors.outlineBtnBorder}`,
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      Translate with Browser
                    </button>
                  </div>
                  <div style={{ height: '12px', flexShrink: 0 }} />

                  {/* Powered by Digital India */}
                  <div
                    style={{
                      display: 'flex',
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
