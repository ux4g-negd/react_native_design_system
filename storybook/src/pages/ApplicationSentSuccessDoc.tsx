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
  const [copied, setCopied] = useState(false);

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
      <Ux4gDivider color={isDark ? UX4GColors.neutral800 : '#E5E7EB'} />

      {/* Content */}
      <View style={styles.contentContainer}>
        {/* Success Circle Icon */}
        <View
          style={[
            styles.iconCircle,
            {
              backgroundColor: isDark
                ? UX4GColors.green800
                : UX4GColors.green100,
            },
          ]}
        >
          <Image
            source={require('./assets/check_circle.png')}
            style={[
              styles.checkIcon,
              {
                tintColor: isDark
                  ? UX4GColors.green500
                  : UX4GColors.green600,
              },
            ]}
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

      {/* Actions */}
      <View style={styles.actionsContainer}>
        <Ux4gButton
          text="View application status"
          onPress={onViewStatus}
          size="large"
          variant="primary"
          style={[
            styles.actionButton,
            {
              backgroundColor: isDark
                ? UX4GColors.primary300
                : UX4GColors.primary600,
            },
          ]}
          textColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral50}
        />
        <Ux4gButton
          text="Back to dashboard"
          onPress={onBackToDashboard}
          size="large"
          variant="outline"
          style={[
            styles.actionButton,
            {
              borderColor: isDark
                ? UX4GColors.primary600
                : UX4GColors.primary300,
            },
          ]}
          textColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
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
  contentContainer: {
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
    paddingVertical: 16,
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
        {
          backgroundColor: isDark
            ? UX4GColors.primary900
            : UX4GColors.primary50,
        },
      ]}
    >
      {/* Header with White Background */}
      <View
        style={{
          backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
        }}
      >
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
        <Ux4gDivider color={isDark ? UX4GColors.neutral800 : '#E5E7EB'} />
      </View>

      {/* Card Content */}
      <View style={styles.cardWrapper}>
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDark
                ? UX4GColors.neutral800
                : UX4GColors.neutral0,
            },
          ]}
        >
          {/* Success Circle Icon */}
          <View
            style={[
              styles.iconCircle,
              {
                backgroundColor: isDark
                  ? UX4GColors.green800
                  : UX4GColors.green100,
              },
            ]}
          >
            <Image
              source={require('./assets/check_circle.png')}
              style={[
                styles.checkIcon,
                {
                  tintColor: isDark
                    ? UX4GColors.green500
                    : UX4GColors.green600,
                },
              ]}
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

      {/* Actions */}
      <View style={styles.actionsContainer}>
        <Ux4gButton
          text="View application status"
          onPress={onViewStatus}
          size="large"
          variant="primary"
          style={[
            styles.actionButton,
            {
              backgroundColor: isDark
                ? UX4GColors.primary300
                : UX4GColors.primary600,
            },
          ]}
          textColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral50}
        />
        <Ux4gButton
          text="Back to dashboard"
          onPress={onBackToDashboard}
          size="large"
          variant="outline"
          style={[
            styles.actionButton,
            {
              borderColor: isDark
                ? UX4GColors.primary600
                : UX4GColors.primary300,
            },
          ]}
          textColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
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
    justifyContent: 'center',
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

  const handleCopyCode = () => {
    const code = variant === 'Card style' ? cardCodeString : defaultCodeString;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isCard = variant === 'Card style';

  return (
    <div style={{ padding: '24px 32px', maxWidth: 1200, margin: '0 auto' }}>
      {/* Title & Pattern Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
              margin: 0,
            }}
          >
            Application sent success
          </h1>
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              backgroundColor: isDark ? 'rgba(99, 102, 241, 0.2)' : '#EEF2FF',
              color: isDark ? '#A5B4FC' : '#432CBB',
              padding: '4px 10px',
              borderRadius: 12,
            }}
          >
            Pattern
          </span>
        </div>
        <p
          style={{
            fontSize: 14,
            color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
            margin: 0,
          }}
        >
          A success screen pattern shown after an application is submitted.
        </p>
      </div>

      {/* Main Tabs (Preview / Code) */}
      <div
        style={{
          display: 'flex',
          gap: 16,
          borderBottom: `1px solid ${isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}`,
          marginBottom: 24,
        }}
      >
        <button
          onClick={() => setActiveMainTab('preview')}
          style={{
            padding: '8px 16px',
            fontSize: 14,
            fontWeight: 600,
            background: 'none',
            border: 'none',
            borderBottom: `2px solid ${
              activeMainTab === 'preview'
                ? isDark
                  ? UX4GColors.primary300
                  : UX4GColors.primary600
                : 'transparent'
            }`,
            color:
              activeMainTab === 'preview'
                ? isDark
                  ? UX4GColors.primary300
                  : UX4GColors.primary600
                : isDark
                ? UX4GColors.neutral400
                : UX4GColors.neutral500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
            visibility
          </span>
          Preview
        </button>
        <button
          onClick={() => setActiveMainTab('code')}
          style={{
            padding: '8px 16px',
            fontSize: 14,
            fontWeight: 600,
            background: 'none',
            border: 'none',
            borderBottom: `2px solid ${
              activeMainTab === 'code'
                ? isDark
                  ? UX4GColors.primary300
                  : UX4GColors.primary600
                : 'transparent'
            }`,
            color:
              activeMainTab === 'code'
                ? isDark
                  ? UX4GColors.primary300
                  : UX4GColors.primary600
                : isDark
                ? UX4GColors.neutral400
                : UX4GColors.neutral500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
            code
          </span>
          Code
        </button>
      </div>

      {/* Toolbar Controls */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 24,
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <label
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700,
            }}
          >
            Layout Variant:
          </label>
          <div
            style={{
              display: 'inline-flex',
              backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
              borderRadius: 8,
              padding: 3,
            }}
          >
            {(['Default', 'Card style'] as VariantType[]).map((v) => (
              <button
                key={v}
                onClick={() => setVariant(v)}
                style={{
                  padding: '6px 14px',
                  fontSize: 13,
                  fontWeight: 500,
                  border: 'none',
                  borderRadius: 6,
                  cursor: 'pointer',
                  backgroundColor:
                    variant === v
                      ? isDark
                        ? UX4GColors.neutral700
                        : '#FFFFFF'
                      : 'transparent',
                  color:
                    variant === v
                      ? isDark
                        ? UX4GColors.neutral50
                        : UX4GColors.neutral900
                      : isDark
                      ? UX4GColors.neutral400
                      : UX4GColors.neutral600,
                  boxShadow:
                    variant === v ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                  transition: 'all 0.15s ease',
                }}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleCopyCode}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '7px 14px',
            fontSize: 13,
            fontWeight: 500,
            borderRadius: 6,
            border: `1px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.neutral300}`,
            backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
            color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
            cursor: 'pointer',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
            {copied ? 'check' : 'content_copy'}
          </span>
          {copied ? 'Copied!' : 'Copy React Native Code'}
        </button>
      </div>

      {activeMainTab === 'preview' ? (
        /* Preview Canvas */
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px 16px',
            backgroundColor: isDark ? '#0B0F19' : '#F9FAFB',
            borderRadius: 16,
            border: `1px solid ${isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}`,
            minHeight: 820,
          }}
        >
          {/* Phone Frame Mockup */}
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
            {/* Header (Top) */}
            <div
              style={{
                backgroundColor: colors.headerBg,
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <img
                  src="/national_emblem_logo.svg"
                  alt="National Emblem"
                  style={{
                    height: 40,
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
                    height: 32,
                    backgroundColor: '#D1D5DB',
                  }}
                />
                <UnionLogo color={colors.primaryColor} size={32} />
              </div>
            </div>
            <div
              style={{
                height: 1,
                backgroundColor: colors.dividerColor,
                width: '100%',
                flexShrink: 0,
              }}
            />

            {/* Content (Middle - Centered) */}
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
      ) : (
        /* Code Tab */
        <div style={{ marginTop: 16 }}>
          <CodeBlock
            code={variant === 'Card style' ? cardCodeString : defaultCodeString}
            language="tsx"
          />
        </div>
      )}
    </div>
  );
};

export default ApplicationSentSuccessDoc;
