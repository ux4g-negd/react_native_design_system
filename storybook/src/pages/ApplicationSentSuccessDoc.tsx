import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { Ux4gButton } from '../../../src/components/button/Button';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface ApplicationSentSuccessDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

export const ApplicationSentSuccessDoc: React.FC<ApplicationSentSuccessDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');

  const colors = useMemo(() => {
    const isCard = variant === 'Card style';
    return {
      screenBg: isCard
        ? isDark
          ? UX4GColors.primary900
          : UX4GColors.primary50
        : isDark
        ? UX4GColors.neutral900
        : UX4GColors.neutral0,
      headerBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      cardBg: isDark ? UX4GColors.neutral800 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      dividerColor: isDark ? UX4GColors.neutral800 : '#E5E7EB',
      verticalDividerColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
      titleColor: isDark ? UX4GColors.neutral50 : '#111827',
      subtleText: isDark ? UX4GColors.neutral200 : '#4B5563',
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      primaryBtnBg: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      primaryBtnText: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
      outlineBtnBorder: isDark ? UX4GColors.primary600 : UX4GColors.primary300,
      outlineBtnText: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      iconBg: isDark ? UX4GColors.green800 : UX4GColors.green100,
      iconColor: isDark ? UX4GColors.green500 : UX4GColors.green600,
      menuBtnBorder: isDark ? UX4GColors.primary700 : UX4GColors.primary200,
      footerText: isDark ? UX4GColors.neutral400 : '#9CA3AF',
    };
  }, [isDark, variant]);

  const defaultCodeString = useMemo(() => {
    return `import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';

export const ApplicationSentScreen = ({
  isDark = false,
  onViewStatus = () => {},
  onBackToDashboard = () => {},
}: {
  isDark?: boolean;
  onViewStatus?: () => void;
  onBackToDashboard?: () => void;
}) => {
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
  const subtitleColor = isDark ? UX4GColors.neutral200 : '#4B5563';

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0 },
      ]}
    >
      {/* Header */}
      <Ux4gAppHeader
        variant="light"
        title=""
        backgroundColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral0}
        leadingWidgets={[
          <View key="emblem-union" style={styles.headerLeading}>
            <Image
              source={require('./assets/national_emblem.png')}
              style={[
                styles.emblem,
                isDark && { tintColor: '#FFFFFF' },
              ]}
              resizeMode="contain"
            />
            <Ux4gDivider
              orientation="vertical"
              color={isDark ? UX4GColors.neutral700 : UX4GColors.neutral300}
              thickness={1}
            />
            <Image
              source={require('./assets/union_logo.png')}
              style={[styles.unionLogo, { tintColor: primaryColor }]}
              resizeMode="contain"
            />
          </View>,
        ]}
        actions={[
          {
            customWidget: (
              <TouchableOpacity
                key="menu"
                style={[
                  styles.menuBtn,
                  {
                    borderColor: isDark ? UX4GColors.primary700 : UX4GColors.primary200,
                    backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral0,
                  },
                ]}
                onPress={() => {}}
              >
                <Text style={[styles.menuIcon, { color: primaryColor }]}>☰</Text>
              </TouchableOpacity>
            ),
          },
        ]}
      />
      <Ux4gDivider
        color={isDark ? UX4GColors.neutral800 : '#E5E7EB'}
        thickness={1}
      />

      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Success Info */}
        <View style={styles.centerSection}>
          <View
            style={[
              styles.iconCircle,
              { backgroundColor: isDark ? UX4GColors.green800 : UX4GColors.green100 },
            ]}
          >
            <Image
              source={require('./assets/check_circle.png')}
              style={[
                styles.checkIcon,
                { tintColor: isDark ? UX4GColors.green500 : UX4GColors.green600 },
              ]}
              resizeMode="contain"
            />
          </View>

          <Text style={[styles.title, { color: titleColor }]}>
            Application sent!
          </Text>

          <Text style={[styles.subtitle, { color: subtitleColor }]}>
            We will review and contact you within 3 working days.
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <Ux4gButton
            text="View application status"
            size="large"
            height={48}
            width="100%"
            onPress={onViewStatus}
          />
          <Ux4gButton
            text="Back to dashboard"
            size="large"
            height={48}
            width="100%"
            variant="outline"
            contentColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
            borderColor={isDark ? UX4GColors.primary600 : UX4GColors.primary300}
            onPress={onBackToDashboard}
          />
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text
          style={[
            styles.footerText,
            { color: isDark ? UX4GColors.neutral400 : '#9CA3AF' },
          ]}
        >
          Powered by -
        </Text>
        <Image
          source={require('./assets/digital_india_logo.png')}
          style={[
            styles.digitalIndiaLogo,
            isDark && { tintColor: '#FFFFFF' },
          ]}
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
  headerLeading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  emblem: {
    height: 40,
    width: 28,
  },
  unionLogo: {
    height: 32,
    width: 44,
  },
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 24,
  },
  centerSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkIcon: {
    width: 48,
    height: 48,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    maxWidth: 240,
  },
  actionsContainer: {
    gap: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingBottom: 24,
  },
  footerText: {
    fontSize: 11,
    fontWeight: '500',
  },
  digitalIndiaLogo: {
    height: 24,
    width: 90,
  },
});
`;
  }, []);

  const cardCodeString = useMemo(() => {
    return `import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';

export const ApplicationSentCardScreen = ({
  isDark = false,
  onViewStatus = () => {},
  onBackToDashboard = () => {},
}: {
  isDark?: boolean;
  onViewStatus?: () => void;
  onBackToDashboard?: () => void;
}) => {
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
  const subtitleColor = isDark ? UX4GColors.neutral200 : '#4B5563';

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.primary900 : UX4GColors.primary50 },
      ]}
    >
      {/* Header */}
      <Ux4gAppHeader
        variant="light"
        title=""
        backgroundColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral0}
        leadingWidgets={[
          <View key="emblem-union" style={styles.headerLeading}>
            <Image
              source={require('./assets/national_emblem.png')}
              style={[styles.emblem, isDark && { tintColor: '#FFFFFF' }]}
              resizeMode="contain"
            />
            <Ux4gDivider
              orientation="vertical"
              color={isDark ? UX4GColors.neutral700 : UX4GColors.neutral300}
              thickness={1}
            />
            <Image
              source={require('./assets/union_logo.png')}
              style={[styles.unionLogo, { tintColor: primaryColor }]}
              resizeMode="contain"
            />
          </View>,
        ]}
        actions={[
          {
            customWidget: (
              <TouchableOpacity
                key="menu"
                style={[
                  styles.menuBtn,
                  {
                    borderColor: isDark ? UX4GColors.primary700 : UX4GColors.primary200,
                    backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral0,
                  },
                ]}
                onPress={() => {}}
              >
                <Text style={[styles.menuIcon, { color: primaryColor }]}>☰</Text>
              </TouchableOpacity>
            ),
          },
        ]}
      />
      <Ux4gDivider
        color={isDark ? UX4GColors.neutral800 : '#E5E7EB'}
        thickness={1}
      />

      {/* Main Content Area */}
      <View style={styles.mainWrapper}>
        {/* Card */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral0,
              borderColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
            },
          ]}
        >
          {/* Success Info */}
          <View style={styles.cardCenterSection}>
            <View
              style={[
                styles.iconCircle,
                {
                  backgroundColor: isDark ? UX4GColors.green800 : UX4GColors.green100,
                },
              ]}
            >
              <Image
                source={require('./assets/check_circle.png')}
                style={[
                  styles.checkIcon,
                  { tintColor: isDark ? UX4GColors.green500 : UX4GColors.green600 },
                ]}
                resizeMode="contain"
              />
            </View>

            <Text style={[styles.title, { color: titleColor }]}>
              Application sent!
            </Text>

            <Text style={[styles.subtitle, { color: subtitleColor }]}>
              We will review and contact you within 3 working days.
            </Text>
          </View>

          {/* Action Buttons inside Card */}
          <View style={styles.actionsContainer}>
            <Ux4gButton
              text="View application status"
              size="large"
              height={48}
              width="100%"
              onPress={onViewStatus}
            />
            <Ux4gButton
              text="Back to dashboard"
              size="large"
              height={48}
              width="100%"
              variant="outline"
              contentColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
              borderColor={isDark ? UX4GColors.primary600 : UX4GColors.primary300}
              onPress={onBackToDashboard}
            />
          </View>
        </View>

        {/* Footer outside Card */}
        <View style={styles.footer}>
          <Text
            style={[
              styles.footerText,
              { color: isDark ? UX4GColors.neutral400 : '#9CA3AF' },
            ]}
          >
            Powered by -
          </Text>
          <Image
            source={require('./assets/digital_india_logo.png')}
            style={[
              styles.digitalIndiaLogo,
              isDark && { tintColor: '#FFFFFF' },
            ]}
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerLeading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  emblem: {
    height: 40,
    width: 28,
  },
  unionLogo: {
    height: 32,
    width: 44,
  },
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mainWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
    paddingBottom: 24,
  },
  card: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 24,
    paddingTop: 36,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  cardCenterSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkIcon: {
    width: 48,
    height: 48,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    maxWidth: 240,
  },
  actionsContainer: {
    gap: 12,
    width: '100%',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingTop: 12,
  },
  footerText: {
    fontSize: 11,
    fontWeight: '500',
  },
  digitalIndiaLogo: {
    height: 24,
    width: 90,
  },
});
`;
  }, []);

  const isCard = variant === 'Card style';

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Application sent success</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A success screen pattern shown after an application is submitted.
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
                <Ux4gThemeProvider isDark={isDark}>
                  <div
                    style={{
                      width: 360,
                      height: 760,
                      borderRadius: 20,
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: colors.screenBg,
                      border: `1px solid ${colors.border}`,
                      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                      position: 'relative',
                      boxSizing: 'border-box',
                      fontFamily:
                        "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                    }}
                  >
                    {/* Top UX4G AppHeader */}
                    <div style={{ backgroundColor: colors.headerBg, flexShrink: 0 }}>
                      <Ux4gAppHeader
                        variant="light"
                        title=""
                        backgroundColor={colors.headerBg}
                        leadingWidgets={[
                          <div
                            key="emblem-union"
                            style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                          >
                            <img
                              src="/national_emblem_logo.svg"
                              alt="National Emblem"
                              style={{
                                height: 40,
                                filter: isDark ? 'brightness(0) invert(1)' : 'none',
                              }}
                            />
                            <div
                              style={{
                                width: 1,
                                height: 32,
                                backgroundColor: colors.verticalDividerColor,
                              }}
                            />
                            <UnionLogo size={32} isDark={isDark} />
                          </div>,
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
                                  border: `1.5px solid ${colors.menuBtnBorder}`,
                                  backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral0,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  cursor: 'pointer',
                                }}
                              >
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke={colors.primaryColor}
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <line x1="3" y1="6" x2="21" y2="6" />
                                  <line x1="3" y1="12" x2="21" y2="12" />
                                  <line x1="3" y1="18" x2="21" y2="18" />
                                </svg>
                              </div>
                            ),
                          },
                        ]}
                      />
                      <Ux4gDivider color={colors.dividerColor} thickness={1} />
                    </div>

                    {/* Main Success Content Body */}
                    {isCard ? (
                      /* Card Style Layout */
                      <div
                        style={{
                          flex: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          padding: '16px 16px 20px 16px',
                          boxSizing: 'border-box',
                        }}
                      >
                        {/* Card Box */}
                        <div
                          style={{
                            backgroundColor: colors.cardBg,
                            borderRadius: 16,
                            border: `1px solid ${colors.border}`,
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                            padding: '36px 20px 24px 20px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                          }}
                        >
                          {/* Success Icon Circle */}
                          <div
                            style={{
                              width: 80,
                              height: 80,
                              borderRadius: 40,
                              backgroundColor: colors.iconBg,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginBottom: 24,
                            }}
                          >
                            <span
                              className="material-symbols-outlined"
                              style={{
                                fontSize: 48,
                                color: colors.iconColor,
                                fontVariationSettings: "'FILL' 1",
                              }}
                            >
                              check_circle
                            </span>
                          </div>

                          {/* Title */}
                          <div
                            style={{
                              fontSize: 24,
                              fontWeight: 800,
                              color: colors.titleColor,
                              marginBottom: 12,
                              lineHeight: 1.2,
                            }}
                          >
                            Application sent!
                          </div>

                          {/* Subtitle */}
                          <div
                            style={{
                              fontSize: 14,
                              lineHeight: 1.5,
                              color: colors.subtleText,
                              maxWidth: 240,
                              marginBottom: 32,
                            }}
                          >
                            We will review and contact you within 3 working days.
                          </div>

                          {/* Buttons inside Card */}
                          <div
                            style={{
                              width: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 12,
                            }}
                          >
                            <Ux4gButton
                              text="View application status"
                              size="large"
                              height={48}
                              width="100%"
                              backgroundColor={colors.primaryBtnBg}
                              contentColor={colors.primaryBtnText}
                              onPress={() => {}}
                            />
                            <Ux4gButton
                              text="Back to dashboard"
                              size="large"
                              height={48}
                              width="100%"
                              variant="outline"
                              contentColor={colors.outlineBtnText}
                              borderColor={colors.outlineBtnBorder}
                              onPress={() => {}}
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
                            paddingTop: 12,
                          }}
                        >
                          <span
                            style={{
                              fontSize: 11,
                              fontWeight: 500,
                              color: colors.footerText,
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
                      /* Default Layout */
                      <div
                        style={{
                          flex: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          padding: '40px 24px 20px 24px',
                          boxSizing: 'border-box',
                        }}
                      >
                        {/* Center Info Section */}
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            marginTop: 40,
                          }}
                        >
                          {/* Success Icon Circle */}
                          <div
                            style={{
                              width: 80,
                              height: 80,
                              borderRadius: 40,
                              backgroundColor: colors.iconBg,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginBottom: 28,
                            }}
                          >
                            <span
                              className="material-symbols-outlined"
                              style={{
                                fontSize: 48,
                                color: colors.iconColor,
                                fontVariationSettings: "'FILL' 1",
                              }}
                            >
                              check_circle
                            </span>
                          </div>

                          {/* Title */}
                          <div
                            style={{
                              fontSize: 24,
                              fontWeight: 800,
                              color: colors.titleColor,
                              marginBottom: 12,
                              lineHeight: 1.2,
                            }}
                          >
                            Application sent!
                          </div>

                          {/* Subtitle */}
                          <div
                            style={{
                              fontSize: 14,
                              lineHeight: 1.5,
                              color: colors.subtleText,
                              maxWidth: 240,
                            }}
                          >
                            We will review and contact you within 3 working days.
                          </div>
                        </div>

                        {/* Bottom Actions & Footer */}
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 24,
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 12,
                            }}
                          >
                            <Ux4gButton
                              text="View application status"
                              size="large"
                              height={48}
                              width="100%"
                              backgroundColor={colors.primaryBtnBg}
                              contentColor={colors.primaryBtnText}
                              onPress={() => {}}
                            />
                            <Ux4gButton
                              text="Back to dashboard"
                              size="large"
                              height={48}
                              width="100%"
                              variant="outline"
                              contentColor={colors.outlineBtnText}
                              borderColor={colors.outlineBtnBorder}
                              onPress={() => {}}
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
                            }}
                          >
                            <span
                              style={{
                                fontSize: 11,
                                fontWeight: 500,
                                color: colors.footerText,
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
                      </div>
                    )}
                  </div>
                </Ux4gThemeProvider>
              </div>
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

                <CodeBlock
                  code={variant === 'Card style' ? cardCodeString : defaultCodeString}
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

export default ApplicationSentSuccessDoc;
