import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface EligibilityWarningStepDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

interface CriteriaItem {
  text: string;
  status: 'passed' | 'warning';
}

const CRITERIA_ITEMS: CriteriaItem[] = [
  { text: 'Age requirement met (18 years or above)', status: 'passed' },
  { text: 'Valid government-issued ID submitted', status: 'passed' },
  { text: 'Residential address confirmed', status: 'passed' },
  { text: 'Income within eligible range', status: 'warning' },
  { text: 'No outstanding dues or penalties', status: 'passed' },
];

export const EligibilityWarningStepDoc: React.FC<EligibilityWarningStepDocProps> = ({ isDark }) => {
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
        : UX4GColors.neutral50,
      headerBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      cardBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral800 : '#E5E7EB',
      titleColor: isDark ? UX4GColors.orange200 : UX4GColors.orange800,
      sectionTitle: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      warningIconBg: isDark ? UX4GColors.orange900 : UX4GColors.orange100,
      warningIconColor: isDark ? UX4GColors.orange400 : UX4GColors.orange600,
      checkBg: isDark ? '#064E3B' : '#DCFCE7',
      checkColor: isDark ? '#34D399' : '#16A34A',
      questionBg: isDark ? UX4GColors.orange900 : UX4GColors.orange100,
      questionColor: isDark ? UX4GColors.orange400 : UX4GColors.orange600,
      footerText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
    };
  }, [isDark, variant]);

  // Clean React Native TSX source snippet
  const codeString = useMemo(() => {
    const isCard = variant === 'Card style';
    if (isCard) {
      return `import React from 'react';
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
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-design-system';

interface CriteriaItem {
  text: string;
  status: 'passed' | 'warning';
}

const CRITERIA_ITEMS: CriteriaItem[] = [
  { text: 'Age requirement met (18 years or above)', status: 'passed' },
  { text: 'Valid government-issued ID submitted', status: 'passed' },
  { text: 'Residential address confirmed', status: 'passed' },
  { text: 'Income within eligible range', status: 'warning' },
  { text: 'No outstanding dues or penalties', status: 'passed' },
];

export const EligibilityWarningCardScreen = ({
  isDark = false,
  onProceedToApply = () => {},
}: {
  isDark?: boolean;
  onProceedToApply?: () => void;
}) => {
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const subtleText = isDark ? UX4GColors.neutral200 : UX4GColors.neutral700;

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
      <View style={styles.container}>
        {/* Header */}
        <View style={{ backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' }}>
          <Ux4gAppHeader
            variant="light"
            showBackButton={false}
            leadingWidgets={[
              <Image
                key="emblem"
                source={require('./assets/national_emblem.png')}
                style={[styles.emblemIcon, isDark && { tintColor: '#FFFFFF' }]}
                resizeMode="contain"
              />,
              <View
                key="divider"
                style={[
                  styles.verticalDivider,
                  { backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200 },
                ]}
              />,
              <Image
                key="union"
                source={require('./assets/union_logo.png')}
                style={[styles.unionIcon, { tintColor: primaryColor }]}
                resizeMode="contain"
              />,
            ]}
          />
          <Ux4gDivider color={isDark ? UX4GColors.neutral800 : '#E5E7EB'} thickness={1} />
        </View>

        {/* Scrollable Content */}
        <ScrollView
          contentContainerStyle={styles.cardScrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Elevated Card */}
          <View
            style={[
              styles.cardContainer,
              { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' },
            ]}
          >
            {/* Warning Icon */}
            <View
              style={[
                styles.warningIconContainer,
                { backgroundColor: isDark ? '#7C2D12' : '#FFEDD5' },
              ]}
            >
              <Text style={[styles.warningIconSymbol, { color: isDark ? '#FB923C' : '#EA580C' }]}>
                ⚠
              </Text>
            </View>

            <View style={{ height: 16 }} />

            {/* Title */}
            <Text style={[styles.warningTitle, { color: isDark ? '#FED7AA' : '#9A3412' }]}>
              You May Be Eligible
            </Text>

            <View style={{ height: 12 }} />

            {/* Subtitle */}
            <Text style={[styles.warningSubtitle, { color: subtleText }]}>
              One or more criteria could not be confirmed automatically. An officer will review and verify your eligibility.
            </Text>

            <View style={{ height: 24 }} />
            <Ux4gDivider color={isDark ? UX4GColors.neutral800 : '#E5E7EB'} thickness={1} />
            <View style={{ height: 20 }} />

            {/* Criteria Title */}
            <Text
              style={[
                styles.criteriaHeading,
                { color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900 },
              ]}
            >
              Eligibility Criteria
            </Text>

            <View style={{ height: 16 }} />

            {/* Criteria List */}
            {CRITERIA_ITEMS.map((item, idx) => (
              <View key={idx} style={styles.criteriaRow}>
                <Text style={[styles.criteriaText, { color: subtleText }]}>
                  {item.text}
                </Text>
                <View
                  style={[
                    styles.badge,
                    {
                      backgroundColor:
                        item.status === 'passed'
                          ? isDark
                            ? '#064E3B'
                            : '#DCFCE7'
                          : isDark
                          ? '#7C2D12'
                          : '#FFEDD5',
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.badgeIcon,
                      {
                        color:
                          item.status === 'passed'
                            ? isDark
                              ? '#34D399'
                              : '#16A34A'
                            : isDark
                            ? '#FB923C'
                            : '#EA580C',
                      },
                    ]}
                  >
                    {item.status === 'passed' ? '✓' : '?'}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Actions & Footer Outside Card */}
        <Ux4gDivider color={isDark ? UX4GColors.neutral800 : '#E5E7EB'} thickness={1} />
        <View style={styles.actionsContainer}>
          <Ux4gButton
            text="Proceed to Apply"
            onPress={onProceedToApply}
            size="large"
            width="100%"
            height={48}
            backgroundColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
            contentColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral50}
          />
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text style={styles.poweredByText}>
            Powered by -
          </Text>
          <Image
            source={require('./assets/digital_india_logo.png')}
            style={[styles.digitalIndiaLogo, isDark && { tintColor: '#FFFFFF' }]}
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1, position: 'relative' },
  emblemIcon: { height: 32, width: 22 },
  verticalDivider: { height: 20, width: 1 },
  unionIcon: { height: 32, width: 44 },
  cardScrollContainer: { padding: 16 },
  cardContainer: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 3,
    alignItems: 'center',
  },
  warningIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningIconSymbol: {
    fontSize: 32,
    fontWeight: '700',
  },
  warningTitle: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },
  warningSubtitle: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
  },
  criteriaHeading: {
    fontSize: 14,
    fontWeight: '700',
    alignSelf: 'flex-start',
  },
  criteriaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 14,
  },
  criteriaText: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 18,
    flex: 1,
    paddingRight: 12,
  },
  badge: {
    width: 20,
    height: 20,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeIcon: {
    fontSize: 13,
    fontWeight: '800',
  },
  actionsContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    alignItems: 'center',
  },
  footerContainer: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 20,
  },
  poweredByText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#9CA3AF',
    marginBottom: 6,
  },
  digitalIndiaLogo: {
    height: 22,
    width: 84,
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
  SafeAreaView,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-design-system';

interface CriteriaItem {
  text: string;
  status: 'passed' | 'warning';
}

const CRITERIA_ITEMS: CriteriaItem[] = [
  { text: 'Age requirement met (18 years or above)', status: 'passed' },
  { text: 'Valid government-issued ID submitted', status: 'passed' },
  { text: 'Residential address confirmed', status: 'passed' },
  { text: 'Income within eligible range', status: 'warning' },
  { text: 'No outstanding dues or penalties', status: 'passed' },
];

export const EligibilityWarningScreen = ({
  isDark = false,
  onProceedToApply = () => {},
}: {
  isDark?: boolean;
  onProceedToApply?: () => void;
}) => {
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const subtleText = isDark ? UX4GColors.neutral200 : UX4GColors.neutral700;

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50 },
      ]}
    >
      <View style={styles.container}>
        {/* Header */}
        <Ux4gAppHeader
          variant="light"
          showBackButton={false}
          backgroundColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
          leadingWidgets={[
            <Image
              key="emblem"
              source={require('./assets/national_emblem.png')}
              style={[styles.emblemIcon, isDark && { tintColor: '#FFFFFF' }]}
              resizeMode="contain"
            />,
            <View
              key="divider"
              style={[
                styles.verticalDivider,
                { backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200 },
              ]}
            />,
            <Image
              key="union"
              source={require('./assets/union_logo.png')}
              style={[styles.unionIcon, { tintColor: primaryColor }]}
              resizeMode="contain"
            />,
          ]}
        />
        <Ux4gDivider color={isDark ? UX4GColors.neutral800 : '#E5E7EB'} thickness={1} />

        {/* Content */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Warning Icon */}
          <View
            style={[
              styles.warningIconContainer,
              { backgroundColor: isDark ? '#7C2D12' : '#FFEDD5' },
            ]}
          >
            <Text style={[styles.warningIconSymbol, { color: isDark ? '#FB923C' : '#EA580C' }]}>
              ⚠
            </Text>
          </View>

          <View style={{ height: 16 }} />

          {/* Title */}
          <Text style={[styles.warningTitle, { color: isDark ? '#FED7AA' : '#9A3412' }]}>
            You May Be Eligible
          </Text>

          <View style={{ height: 12 }} />

          {/* Subtitle */}
          <Text style={[styles.warningSubtitle, { color: subtleText }]}>
            One or more criteria could not be confirmed automatically. An officer will review and verify your eligibility.
          </Text>

          <View style={{ height: 24 }} />
          <Ux4gDivider color={isDark ? UX4GColors.neutral800 : '#E5E7EB'} thickness={1} />
          <View style={{ height: 20 }} />

          {/* Criteria Title */}
          <Text
            style={[
              styles.criteriaHeading,
              { color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900 },
            ]}
          >
            Eligibility Criteria
          </Text>

          <View style={{ height: 16 }} />

          {/* Criteria List */}
          {CRITERIA_ITEMS.map((item, idx) => (
            <View key={idx} style={styles.criteriaRow}>
              <Text style={[styles.criteriaText, { color: subtleText }]}>
                {item.text}
              </Text>
              <View
                style={[
                  styles.badge,
                  {
                    backgroundColor:
                      item.status === 'passed'
                        ? isDark
                          ? '#064E3B'
                          : '#DCFCE7'
                        : isDark
                        ? '#7C2D12'
                        : '#FFEDD5',
                  },
                ]}
              >
                <Text
                  style={[
                    styles.badgeIcon,
                    {
                      color:
                        item.status === 'passed'
                          ? isDark
                            ? '#34D399'
                            : '#16A34A'
                          : isDark
                          ? '#FB923C'
                          : '#EA580C',
                    },
                  ]}
                >
                  {item.status === 'passed' ? '✓' : '?'}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Actions */}
        <Ux4gDivider color={isDark ? UX4GColors.neutral800 : '#E5E7EB'} thickness={1} />
        <View style={styles.actionsContainer}>
          <Ux4gButton
            text="Proceed to Apply"
            onPress={onProceedToApply}
            size="large"
            width="100%"
            height={48}
            backgroundColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
            contentColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral50}
          />
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text style={styles.poweredByText}>
            Powered by -
          </Text>
          <Image
            source={require('./assets/digital_india_logo.png')}
            style={[styles.digitalIndiaLogo, isDark && { tintColor: '#FFFFFF' }]}
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1, position: 'relative' },
  emblemIcon: { height: 32, width: 22 },
  verticalDivider: { height: 20, width: 1 },
  unionIcon: { height: 32, width: 44 },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 32,
    alignItems: 'center',
  },
  warningIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningIconSymbol: {
    fontSize: 32,
    fontWeight: '700',
  },
  warningTitle: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },
  warningSubtitle: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
  },
  criteriaHeading: {
    fontSize: 14,
    fontWeight: '700',
    alignSelf: 'flex-start',
  },
  criteriaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 14,
  },
  criteriaText: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 18,
    flex: 1,
    paddingRight: 12,
  },
  badge: {
    width: 20,
    height: 20,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeIcon: {
    fontSize: 13,
    fontWeight: '800',
  },
  actionsContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    alignItems: 'center',
  },
  footerContainer: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 20,
  },
  poweredByText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#9CA3AF',
    marginBottom: 6,
  },
  digitalIndiaLogo: {
    height: 22,
    width: 84,
  },
});`;
  }, [isDark, variant]);

  const renderLiveMockup = () => {
    const isCard = variant === 'Card style';

    const renderWarningBody = () => (
      <>
        {/* Warning Icon */}
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            backgroundColor: colors.warningIconBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 16,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="32"
            height="32"
            fill={colors.warningIconColor}
          >
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 800,
            color: colors.titleColor,
            textAlign: 'center',
            marginBottom: 12,
            letterSpacing: '-0.3px',
          }}
        >
          You May Be Eligible
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 14,
            color: colors.subtleText,
            lineHeight: 1.5,
            textAlign: 'center',
            marginBottom: 24,
          }}
        >
          One or more criteria could not be confirmed automatically. An officer will review and verify your eligibility.
        </div>

        {/* Divider */}
        <div style={{ width: '100%', marginBottom: 20 }}>
          <Ux4gDivider color={colors.border} thickness={1} />
        </div>

        {/* Criteria Section Header */}
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: colors.sectionTitle,
            alignSelf: 'flex-start',
            marginBottom: 16,
          }}
        >
          Eligibility Criteria
        </div>

        {/* Criteria List */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          {CRITERIA_ITEMS.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                paddingBottom: 14,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: colors.subtleText,
                  lineHeight: 1.4,
                  flex: 1,
                  paddingRight: 12,
                }}
              >
                {item.text}
              </div>
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 4,
                  backgroundColor: item.status === 'passed' ? colors.checkBg : colors.questionBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {item.status === 'passed' ? (
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="none"
                    stroke={colors.checkColor}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 800,
                      color: colors.questionColor,
                      lineHeight: 1,
                    }}
                  >
                    ?
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </>
    );

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
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <img
                src="/national_emblem_logo.svg"
                alt="National Emblem"
                style={{
                  height: 32,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />
              <div
                style={{
                  width: 1,
                  height: 20,
                  backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
                }}
              />
              <UnionLogo size={32} isDark={isDark} />
            </div>
          </div>
          <Ux4gDivider color={isDark ? UX4GColors.neutral800 : '#E5E7EB'} thickness={1} />
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
          {isCard ? (
            <div style={{ padding: 16 }}>
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: 20,
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {renderWarningBody()}
              </div>
            </div>
          ) : (
            <div
              style={{
                padding: '32px 24px 0 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {renderWarningBody()}
            </div>
          )}
        </div>

        {/* Bottom Actions */}
        <Ux4gDivider color={isDark ? UX4GColors.neutral800 : '#E5E7EB'} thickness={1} />
        <div
          style={{
            padding: '16px 24px 0 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: colors.screenBg,
            flexShrink: 0,
          }}
        >
          <Ux4gButton
            text="Proceed to Apply"
            onPress={() => {}}
            size="large"
            width="100%"
            height={48}
            backgroundColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
            contentColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral50}
          />
        </div>

        {/* Powered by Footer */}
        <div
          style={{
            padding: '16px 0 20px 0',
            textAlign: 'center',
            backgroundColor: colors.screenBg,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 500,
              color: colors.footerText,
              marginBottom: 6,
            }}
          >
            Powered by -
          </div>
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
    );
  };

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Eligibility Warning Step</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          The warning screen of the eligibility wizard flow when some criteria require manual review. Shows an orange warning icon, message, and a list of criteria highlighting unconfirmed ones.
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
                        Variant:
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

export default EligibilityWarningStepDoc;
