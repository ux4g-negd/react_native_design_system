import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gTag } from '../../../src/components/tag/Tag';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface SaveAndResumeDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

export const SaveAndResumeDoc: React.FC<SaveAndResumeDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');

  const colors = useMemo(() => {
    return {
      screenBg: variant === 'Card style'
        ? (isDark ? UX4GColors.primary900 : UX4GColors.primary100)
        : (isDark ? UX4GColors.neutral950 : '#FAFAFA'),
      cardBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral800 : '#E5E7EB',
      headerBg: isDark ? UX4GColors.neutral950 : '#FFFFFF',
      statusCardBg: isDark ? UX4GColors.orange900 : UX4GColors.orange50,
      statusTitleColor: isDark ? UX4GColors.neutral50 : '#171717',
      statusIconColor: isDark ? UX4GColors.neutral50 : '#171717',
      stepBadgeBg: isDark ? UX4GColors.orange800 : UX4GColors.orange100,
      stepBadgeText: isDark ? UX4GColors.orange300 : UX4GColors.orange800,
      savedTextColor: isDark ? UX4GColors.neutral200 : '#404040',
      shimmerBase: isDark ? UX4GColors.neutral800 : '#E5E7EB',
      shimmerHighlight: isDark ? UX4GColors.neutral700 : '#F9FAFB',
      shimmerBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      startFreshColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      primaryColor: isDark ? UX4GColors.primary600 : '#432CBB',
      footerText: isDark ? UX4GColors.neutral500 : '#9CA3AF',
    };
  }, [isDark, variant]);

  // Clean React Native TSX code snippet using UX4G components
  const codeString = useMemo(() => {
    const isCard = variant === 'Card style';
    if (isCard) {
      return `// Save and Resume Screen Pattern (Card Style Layout)

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gStatusBanner,
  Ux4gButton,
  Ux4gCard,
  Ux4gTag,
  UX4GColors,
  Ux4gIcons,
} from 'ux4g-react-native-design-system';

export const SaveAndResumeCardScreen = ({
  isDark = ${isDark},
  onResume = () => {},
  onStartFresh = () => {},
}: {
  isDark?: boolean;
  onResume?: () => void;
  onStartFresh?: () => void;
}) => {
  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.primary900 : UX4GColors.primary100 },
      ]}
    >
      {/* Header with UX4G AppHeader & Ux4gDivider */}
      <View style={{ backgroundColor: isDark ? UX4GColors.neutral950 : '#FFFFFF' }}>
        <Ux4gAppHeader
          variant="light"
          showBackButton={false}
          leadingWidgets={[
            <Image
              key="emblem"
              source={require('./assets/national_emblem.png')}
              style={[
                styles.emblemIcon,
                isDark && { tintColor: '#FFFFFF' },
              ]}
              resizeMode="contain"
            />,
            <View
              key="divider"
              style={[
                styles.verticalDivider,
                { backgroundColor: isDark ? UX4GColors.neutral700 : '#D1D5DB' },
              ]}
            />,
            <Image
              key="union"
              source={require('./assets/union_logo.png')}
              style={[
                styles.unionIcon,
                { tintColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600 },
              ]}
              resizeMode="contain"
            />,
          ]}
          actions={[
            {
              icon: 'menu',
              onPressed: () => {},
              tooltip: 'Menu',
            },
          ]}
        />
        <Ux4gDivider
          color={isDark ? UX4GColors.neutral800 : '#E5E7EB'}
          thickness={1}
        />
      </View>

      {/* Main Content inside Ux4gCard */}
      <ScrollView
        contentContainerStyle={styles.cardScrollPadding}
        showsVerticalScrollIndicator={false}
      >
        <Ux4gCard
          cornerRadius={16}
          backgroundColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
          borderColor={isDark ? UX4GColors.neutral800 : 'transparent'}
          borderWidth={isDark ? 1 : 0}
          elevation={2}
        >
          <View style={styles.cardInner}>
            {/* Draft Application Banner using Ux4gStatusBanner */}
            <Ux4gStatusBanner
              variant="warningLight"
              title="Income Certificate Application"
              trailingIcon={
                <Ux4gIcons.arrowDropDown
                  size={20}
                  color={isDark ? UX4GColors.neutral50 : UX4GColors.neutral900}
                />
              }
              subtitleWidget={
                <View style={{ marginTop: 8 }}>
                  <View style={{ alignSelf: 'flex-start' }}>
                    <Ux4gTag
                      text="Step 3 of 5 Document Upload"
                      shape="rectangular"
                      size="m"
                      customBackgroundColor={isDark ? UX4GColors.orange800 : UX4GColors.orange100}
                      customContentColor={isDark ? UX4GColors.orange300 : UX4GColors.orange800}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
                      marginTop: 8,
                    }}
                  >
                    Last saved: 10 Apr 2026
                  </Text>
                </View>
              }
            />

            {/* Placeholders / Shimmer */}
            <View
              style={[
                styles.placeholderCard,
                {
                  backgroundColor: isDark ? UX4GColors.neutral800 : '#E5E7EB',
                  marginTop: 32,
                },
              ]}
            />
            <View
              style={[
                styles.placeholderCard,
                {
                  backgroundColor: isDark ? UX4GColors.neutral800 : '#E5E7EB',
                  marginTop: 16,
                },
              ]}
            />
          </View>
        </Ux4gCard>
      </ScrollView>

      {/* Actions with Ux4gButton Components */}
      <View style={styles.actionsContainer}>
        <Ux4gButton
          text="Resume application"
          onPress={onResume}
          size="large"
          height={48}
          width="100%"
        />
        <View style={{ height: 12 }} />
        <Ux4gButton
          text="Start fresh"
          onPress={onStartFresh}
          variant="outline"
          size="large"
          height={48}
          width="100%"
          contentColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
          borderColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
        />
      </View>

      {/* Powered by Footer */}
      <View style={styles.footerContainer}>
        <Text style={[styles.poweredByText, { color: isDark ? UX4GColors.neutral500 : '#9CA3AF' }]}>
          Powered by -
        </Text>
        <Image
          source={require('./assets/digital_india_logo.png')}
          style={[styles.digitalIndiaLogo, isDark && { tintColor: '#FFFFFF' }]}
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
  emblemIcon: {
    height: 40,
    width: 28,
  },
  verticalDivider: {
    height: 32,
    width: 1,
  },
  unionIcon: {
    height: 32,
    width: 44,
  },
  cardScrollPadding: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  cardInner: {
    padding: 24,
  },
  statusCard: {
    borderRadius: 12,
  },
  statusTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  statusTitle: {
    fontSize: 15,
    fontWeight: '700',
    flex: 1,
  },
  chevronIcon: {
    fontSize: 14,
    marginLeft: 8,
  },
  tagWrapper: {
    alignSelf: 'flex-start',
    marginVertical: 6,
  },
  savedTimeText: {
    fontSize: 14,
    marginTop: 4,
  },
  placeholderCard: {
    height: 140,
    borderRadius: 12,
  },
  actionsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  footerContainer: {
    alignItems: 'center',
    paddingBottom: 24,
  },
  poweredByText: {
    fontSize: 11,
    marginBottom: 6,
  },
  digitalIndiaLogo: {
    height: 24,
    width: 90,
  },
});`;
    }

    return `// Save and Resume Screen Pattern (Default Layout)

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gStatusBanner,
  Ux4gButton,
  Ux4gTag,
  UX4GColors,
  Ux4gIcons,
} from 'ux4g-react-native-design-system';

export const SaveAndResumeScreen = ({
  isDark = ${isDark},
  onResume = () => {},
  onStartFresh = () => {},
}: {
  isDark?: boolean;
  onResume?: () => void;
  onStartFresh?: () => void;
}) => {
  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.neutral950 : '#FAFAFA' },
      ]}
    >
      {/* Header with UX4G AppHeader & Ux4gDivider */}
      <Ux4gAppHeader
        variant="light"
        showBackButton={false}
        backgroundColor={isDark ? UX4GColors.neutral950 : '#FFFFFF'}
        leadingWidgets={[
          <Image
            key="emblem"
            source={require('./assets/national_emblem.png')}
            style={[
              styles.emblemIcon,
              isDark && { tintColor: '#FFFFFF' },
            ]}
            resizeMode="contain"
          />,
          <View
            key="divider"
            style={[
              styles.verticalDivider,
              { backgroundColor: isDark ? UX4GColors.neutral700 : '#D1D5DB' },
            ]}
          />,
          <Image
            key="union"
            source={require('./assets/union_logo.png')}
            style={[
              styles.unionIcon,
              { tintColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600 },
            ]}
            resizeMode="contain"
          />,
        ]}
        actions={[
          {
            icon: 'menu',
            onPressed: () => {},
            tooltip: 'Menu',
          },
        ]}
      />
      <Ux4gDivider
        color={isDark ? UX4GColors.neutral800 : '#E5E7EB'}
        thickness={1}
      />

      {/* Main Content Area */}
      <ScrollView
        contentContainerStyle={styles.scrollPadding}
        showsVerticalScrollIndicator={false}
      >
        {/* Draft Application Banner using Ux4gStatusBanner */}
        <Ux4gStatusBanner
          variant="warningLight"
          title="Income Certificate Application"
          trailingIcon={
            <Ux4gIcons.arrowDropDown
              size={20}
              color={isDark ? UX4GColors.neutral50 : UX4GColors.neutral900}
            />
          }
          subtitleWidget={
            <View style={{ marginTop: 8 }}>
              <View style={{ alignSelf: 'flex-start' }}>
                <Ux4gTag
                  text="Step 3 of 5 Document Upload"
                  shape="rectangular"
                  size="m"
                  customBackgroundColor={isDark ? UX4GColors.orange800 : UX4GColors.orange100}
                  customContentColor={isDark ? UX4GColors.orange300 : UX4GColors.orange800}
                />
              </View>
              <Text
                style={{
                  fontSize: 14,
                  color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
                  marginTop: 12,
                }}
              >
                Last saved: 10 Apr 2026
              </Text>
            </View>
          }
        />

        {/* Placeholders / Shimmer */}
        <View
          style={[
            styles.placeholderCard,
            {
              backgroundColor: isDark ? UX4GColors.neutral800 : '#E5E7EB',
              marginTop: 32,
            },
          ]}
        />
        <View
          style={[
            styles.placeholderCard,
            {
              backgroundColor: isDark ? UX4GColors.neutral800 : '#E5E7EB',
              marginTop: 16,
            },
          ]}
        />
      </ScrollView>

      {/* Actions with Ux4gButton Components */}
      <View style={styles.actionsContainer}>
        <Ux4gButton
          text="Resume application"
          onPress={onResume}
          size="large"
          height={48}
          width="100%"
        />
        <View style={{ height: 12 }} />
        <Ux4gButton
          text="Start fresh"
          onPress={onStartFresh}
          variant="outline"
          size="large"
          height={48}
          width="100%"
          contentColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
          borderColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
        />
      </View>

      {/* Powered by Footer */}
      <View style={styles.footerContainer}>
        <Text style={[styles.poweredByText, { color: isDark ? UX4GColors.neutral500 : '#9CA3AF' }]}>
          Powered by -
        </Text>
        <Image
          source={require('./assets/digital_india_logo.png')}
          style={[styles.digitalIndiaLogo, isDark && { tintColor: '#FFFFFF' }]}
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
  emblemIcon: {
    height: 40,
    width: 28,
  },
  verticalDivider: {
    height: 32,
    width: 1,
  },
  unionIcon: {
    height: 32,
    width: 44,
  },
  scrollPadding: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  statusCard: {
    borderRadius: 12,
  },
  statusTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  statusTitle: {
    fontSize: 15,
    fontWeight: '700',
    flex: 1,
  },
  chevronIcon: {
    fontSize: 14,
    marginLeft: 8,
  },
  tagWrapper: {
    alignSelf: 'flex-start',
    marginVertical: 8,
  },
  savedTimeText: {
    fontSize: 14,
  },
  placeholderCard: {
    height: 140,
    borderRadius: 12,
  },
  actionsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  footerContainer: {
    alignItems: 'center',
    paddingBottom: 24,
  },
  poweredByText: {
    fontSize: 11,
    marginBottom: 6,
  },
  digitalIndiaLogo: {
    height: 24,
    width: 90,
  },
});`;
  }, [isDark, variant]);

  const renderInnerStatusCard = (isCardLayout: boolean) => {
    return (
      <div
        style={{
          padding: isCardLayout ? 16 : 20,
          backgroundColor: colors.statusCardBg,
          borderRadius: 12,
        }}
      >
        {/* Title and Chevron Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: colors.statusTitleColor,
              lineHeight: 1.3,
            }}
          >
            Income Certificate Application
          </div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke={colors.statusIconColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginLeft: 8, flexShrink: 0 }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>

        {/* Step Badge matching Flutter Container */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: isCardLayout ? '2px 8px' : '4px 10px',
            backgroundColor: colors.stepBadgeBg,
            borderRadius: 4,
            marginTop: 8,
            marginBottom: isCardLayout ? 8 : 12,
          }}
        >
          <span
            style={{
              fontSize: isCardLayout ? 11 : 12,
              fontWeight: isCardLayout ? 700 : 600,
              color: colors.stepBadgeText,
              lineHeight: 1.3,
              letterSpacing: '0.01em',
            }}
          >
            Step 3 of 5 Document Upload
          </span>
        </div>

        {/* Last Saved Timestamp */}
        <div
          style={{
            fontSize: 14,
            color: colors.savedTextColor,
            fontWeight: 400,
            lineHeight: 1.3,
          }}
        >
          Last saved: 10 Apr 2026
        </div>
      </div>
    );
  };

  const renderShimmerPlaceholder = () => {
    return (
      <div
        style={{
          height: 140,
          borderRadius: 12,
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: colors.shimmerBase,
          backgroundImage: `linear-gradient(90deg, ${colors.shimmerBase} 0%, ${colors.shimmerHighlight} 50%, ${colors.shimmerBase} 100%)`,
          backgroundSize: '200% 100%',
          animation: 'saveResumeShimmer 1.8s infinite linear',
        }}
      />
    );
  };

  const renderLiveMockup = () => {
    const isCard = variant === 'Card style';

    return (
      <div
        style={{
          width: 360,
          height: 760,
          borderRadius: 20,
          boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)',
          overflow: 'hidden',
          backgroundColor: colors.screenBg,
          border: `1px solid ${colors.border}`,
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          position: 'relative',
        }}
      >
        <style>
          {`
            @keyframes saveResumeShimmer {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
          `}
        </style>

        {/* Top UX4G AppHeader */}
        <div style={{ backgroundColor: colors.headerBg, flexShrink: 0 }}>
          <div
            style={{
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img
                src="/national_emblem_logo.svg"
                alt="National Emblem"
                style={{
                  height: 38,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />
              <div
                style={{
                  width: 1,
                  height: 32,
                  backgroundColor: isDark ? UX4GColors.neutral700 : '#D1D5DB',
                }}
              />
              <UnionLogo size={32} isDark={isDark} />
            </div>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                border: `1px solid ${isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 20,
                  color: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
                }}
              >
                menu
              </span>
            </div>
          </div>
          <Ux4gDivider color={colors.border} thickness={1} />
        </div>

        {/* Scrollable Center Content */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              flex: 1,
              padding: isCard ? '32px 24px' : '24px 24px',
            }}
          >
            {isCard ? (
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: 24,
                  border: isDark ? `1px solid ${UX4GColors.neutral800}` : 'none',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
                }}
              >
                {renderInnerStatusCard(true)}
                <div style={{ height: 32 }} />
                {renderShimmerPlaceholder()}
                <div style={{ height: 16 }} />
                {renderShimmerPlaceholder()}
              </div>
            ) : (
              <div>
                {renderInnerStatusCard(false)}
                <div style={{ height: 32 }} />
                {renderShimmerPlaceholder()}
                <div style={{ height: 16 }} />
                {renderShimmerPlaceholder()}
              </div>
            )}
          </div>
        </div>

        {/* Fixed Bottom Action Buttons */}
        <div
          style={{
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            backgroundColor: isCard ? (isDark ? UX4GColors.primary900 : UX4GColors.primary100) : colors.screenBg,
            flexShrink: 0,
          }}
        >
          {/* Resume Application Button */}
          <Ux4gButton
            text="Resume application"
            onPress={() => { }}
            height={48}
            size="large"
            width="100%"
          />

          {/* Start Fresh Button */}
          <Ux4gButton
            text="Start fresh"
            variant="outline"
            onPress={() => { }}
            height={48}
            size="large"
            width="100%"
            contentColor={colors.startFreshColor}
            borderColor={colors.startFreshColor}
          />
        </div>

        {/* Powered by Footer */}
        <div
          style={{
            padding: '0 0 24px 0',
            textAlign: 'center',
            backgroundColor: isCard ? (isDark ? UX4GColors.primary900 : UX4GColors.primary100) : colors.screenBg,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 500,
              color: colors.footerText,
            }}
          >
            Powered by -
          </div>
          <img
            src="/Digital_India_logo.svg"
            alt="Digital India"
            style={{
              height: 24,
              marginTop: 6,
              filter: isDark ? 'brightness(0) invert(1)' : 'none',
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Save and Resume</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A pattern allowing users to resume a previously saved application or start fresh.
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
                <div
                  className={`wb-preview-area ${isDark ? 'dark' : ''}`}
                  style={{ flexDirection: 'column', alignItems: 'center' }}
                >
                  {/* Knob Controls Toolbar */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 16,
                      marginBottom: 24,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Variant Knob */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700,
                        }}
                      >
                        Layout Variant:
                      </span>
                      <div
                        style={{
                          display: 'flex',
                          gap: 4,
                          backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
                          padding: 4,
                          borderRadius: 10,
                          border: `1px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.neutral200}`,
                        }}
                      >
                        {(['Default', 'Card style'] as VariantType[]).map((v) => (
                          <button
                            key={v}
                            type="button"
                            onClick={() => setVariant(v)}
                            style={{
                              padding: '6px 14px',
                              borderRadius: 6,
                              border: 'none',
                              fontSize: 12,
                              fontWeight: 600,
                              cursor: 'pointer',
                              backgroundColor: variant === v ? UX4GColors.primary : 'transparent',
                              color:
                                variant === v
                                  ? UX4GColors.neutral0
                                  : isDark
                                    ? UX4GColors.neutral400
                                    : UX4GColors.neutral600,
                              transition: 'all 0.2s ease',
                            }}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Render Live Mobile Mockup */}
                  {renderLiveMockup()}
                </div>
              </Ux4gThemeProvider>
            )}

            {/* 2. Code Tab */}
            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                  <button
                    type="button"
                    onClick={() => setVariant('Default')}
                    className={`wb-tab ${variant === 'Default' ? 'active' : ''}`}
                    style={{ padding: '4px 12px', fontSize: 12 }}
                  >
                    Default
                  </button>
                  <button
                    type="button"
                    onClick={() => setVariant('Card style')}
                    className={`wb-tab ${variant === 'Card style' ? 'active' : ''}`}
                    style={{ padding: '4px 12px', fontSize: 12 }}
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

export default SaveAndResumeDoc;
