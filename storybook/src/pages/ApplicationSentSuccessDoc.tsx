import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
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
  SafeAreaView,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-design-system';

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
        leadingWidgets={
          <View style={styles.headerLeading}>
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
              color="#D1D5DB"
              style={{ height: 32 }}
            />
            <Image
              source={require('./assets/union_logo.png')}
              style={[styles.unionLogo, { tintColor: primaryColor }]}
              resizeMode="contain"
            />
          </View>
        }
      />
      <Ux4gDivider color="#E5E7EB" thickness={1} />

      {/* Main Content */}
      <View style={styles.content}>
        {/* Success Icon */}
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

        {/* Title */}
        <Text style={[styles.title, { color: titleColor }]}>
          Application sent!
        </Text>

        {/* Subtitle */}
        <Text style={[styles.subtitle, { color: subtitleColor }]}>
          We will review and contact you within 3 working days.
        </Text>
      </View>

      {/* Bottom Actions */}
      <View style={styles.actionsContainer}>
        <Ux4gButton
          text="View application status"
          onPress={onViewStatus}
          variant="primary"
          style={styles.actionButton}
        />
        <Ux4gButton
          text="Back to dashboard"
          onPress={onBackToDashboard}
          variant="outline"
          style={styles.actionButton}
        />
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
    gap: 12,
  },
  emblem: {
    height: 40,
    width: 28,
  },
  unionLogo: {
    height: 32,
    width: 44,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  checkIcon: {
    width: 48,
    height: 48,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  actionsContainer: {
    paddingHorizontal: 24,
    paddingBottom: 16,
    gap: 12,
  },
  actionButton: {
    width: '100%',
    height: 48,
    borderRadius: 8,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 24,
  },
  footerText: {
    fontSize: 11,
    marginBottom: 6,
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
  SafeAreaView,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-design-system';

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
        leadingWidgets={
          <View style={styles.headerLeading}>
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
              color="#D1D5DB"
              style={{ height: 32 }}
            />
            <Image
              source={require('./assets/union_logo.png')}
              style={[styles.unionLogo, { tintColor: primaryColor }]}
              resizeMode="contain"
            />
          </View>
        }
      />
      <Ux4gDivider color="#E5E7EB" thickness={1} />

      {/* Card Container */}
      <View style={styles.cardWrapper}>
        <View
          style={[
            styles.card,
            { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral0 },
          ]}
        >
          {/* Success Icon */}
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

          {/* Title */}
          <Text style={[styles.title, { color: titleColor }]}>
            Application sent!
          </Text>

          {/* Subtitle */}
          <Text style={[styles.subtitle, { color: subtitleColor }]}>
            We will review and contact you within 3 working days.
          </Text>
        </View>
      </View>

      {/* Bottom Actions */}
      <View style={styles.actionsContainer}>
        <Ux4gButton
          text="View application status"
          onPress={onViewStatus}
          variant="primary"
          style={styles.actionButton}
        />
        <Ux4gButton
          text="Back to dashboard"
          onPress={onBackToDashboard}
          variant="outline"
          style={styles.actionButton}
        />
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
    gap: 12,
  },
  emblem: {
    height: 40,
    width: 28,
  },
  unionLogo: {
    height: 32,
    width: 44,
  },
  cardWrapper: {
    flex: 1,
    padding: 24,
  },
  card: {
    flex: 1,
    borderRadius: 16,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  checkIcon: {
    width: 48,
    height: 48,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  actionsContainer: {
    paddingHorizontal: 24,
    paddingBottom: 16,
    gap: 12,
  },
  actionButton: {
    width: '100%',
    height: 48,
    borderRadius: 8,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 24,
  },
  footerText: {
    fontSize: 11,
    marginBottom: 6,
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
                <div
                  style={{
                    width: 360,
                    height: 760,
                    borderRadius: 20,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: colors.screenBg,
                    border: isDark ? 'none' : '1px solid #E5E7EB',
                    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)',
                    position: 'relative',
                    boxSizing: 'border-box',
                  }}
                >
                  {/* Top UX4G AppHeader */}
                  <div
                    style={{
                      backgroundColor: colors.headerBg,
                      padding: '12px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexShrink: 0,
                      borderBottom: `1px solid ${colors.dividerColor}`,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <img
                        src="/national_emblem_logo.svg"
                        alt="National Emblem"
                        style={{
                          height: 36,
                          width: 'auto',
                          filter: isDark ? 'brightness(0) invert(1)' : 'none',
                        }}
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div
                        style={{
                          width: 1,
                          height: 24,
                          backgroundColor: colors.verticalDividerColor,
                        }}
                      />
                      <UnionLogo color={colors.primaryColor} size={28} />
                    </div>
                  </div>

                  {/* Main Success Content Body */}
                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: isCard ? '24px' : '0 24px',
                      boxSizing: 'border-box',
                    }}
                  >
                    {isCard ? (
                      /* Card Container */
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: 16,
                          backgroundColor: colors.cardBg,
                          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 24,
                          boxSizing: 'border-box',
                        }}
                      >
                        {/* Circle Icon */}
                        <div
                          style={{
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            backgroundColor: colors.iconBg,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 32,
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
                            fontSize: 28,
                            fontWeight: 800,
                            color: colors.titleColor,
                            textAlign: 'center',
                            marginBottom: 16,
                            lineHeight: 1.2,
                          }}
                        >
                          Application sent!
                        </div>

                        {/* Subtitle */}
                        <div
                          style={{
                            fontSize: 16,
                            lineHeight: 1.5,
                            color: colors.subtleText,
                            textAlign: 'center',
                          }}
                        >
                          We will review and contact you within 3 working days.
                        </div>
                      </div>
                    ) : (
                      /* Default View (Direct Centered Content) */
                      <>
                        {/* Circle Icon */}
                        <div
                          style={{
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            backgroundColor: colors.iconBg,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 32,
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
                            fontSize: 28,
                            fontWeight: 800,
                            color: colors.titleColor,
                            textAlign: 'center',
                            marginBottom: 16,
                            lineHeight: 1.2,
                          }}
                        >
                          Application sent!
                        </div>

                        {/* Subtitle */}
                        <div
                          style={{
                            fontSize: 16,
                            lineHeight: 1.5,
                            color: colors.subtleText,
                            textAlign: 'center',
                          }}
                        >
                          We will review and contact you within 3 working days.
                        </div>
                      </>
                    )}
                  </div>

                  {/* Actions (Bottom) */}
                  <div
                    style={{
                      padding: isCard ? '0 24px 16px 24px' : '16px 24px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 12,
                      flexShrink: 0,
                    }}
                  >
                    <button
                      style={{
                        width: '100%',
                        height: 48,
                        borderRadius: 8,
                        backgroundColor: colors.primaryBtnBg,
                        color: colors.primaryBtnText,
                        border: 'none',
                        fontSize: 16,
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'opacity 0.2s ease',
                      }}
                    >
                      View application status
                    </button>

                    <button
                      style={{
                        width: '100%',
                        height: 48,
                        borderRadius: 8,
                        backgroundColor: 'transparent',
                        color: colors.outlineBtnText,
                        border: `1.5px solid ${colors.outlineBtnBorder}`,
                        fontSize: 16,
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background-color 0.2s ease',
                      }}
                    >
                      Back to dashboard
                    </button>
                  </div>

                  {/* Footer (Bottom) */}
                  <div
                    style={{
                      paddingBottom: 24,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        color: colors.footerText,
                        marginBottom: 6,
                      }}
                    >
                      Powered by -
                    </span>
                    <img
                      src="/digital_india_logo.png"
                      alt="Digital India"
                      style={{
                        height: 24,
                        width: 'auto',
                        filter: isDark ? 'brightness(0) invert(1)' : 'none',
                      }}
                    />
                  </div>
                </div>
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
