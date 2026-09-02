import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { defaultUx4gTypography } from '../../../src/foundation/typography';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface PaymentDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const PaymentDoc: React.FC<PaymentDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');

  // Exact color tokens from UX4G Flutter Design System (_getBg, _getBorder, _getTitleColor, _getSubtleText)
  const colors = useMemo(() => {
    const isCard = variant === 'card';
    return {
      // Screen Background
      screenBg: isCard
        ? isDark
          ? UX4GColors.primary800 // #301C7D
          : UX4GColors.primary100 // #DCD4FF
        : isDark
        ? UX4GColors.neutral950 // #0A0A0A
        : UX4GColors.neutral50, // #FAFAFA
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0, // #121212 / #FFFFFF
      cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0, // #171717 / #FFFFFF
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200, // #262626 / #E5E5E5
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.gray900, // #FAFAFA / #121212
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500, // #A1A1A1 / #737373
      mutedText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400, // #737373 / #A1A1A1
      primary: UX4GColors.primary, // #4A2BC2
      primaryLight: UX4GColors.primary300, // #A391FF
      // PayGov Info Banner (Cyan variant from Flutter Ux4gBannerVariant.infoLight)
      bannerBg: isDark ? UX4GColors.cyan900 : UX4GColors.cyan50, // #164E63 / #ECFEFF
      bannerBorder: isDark ? UX4GColors.cyan600 : UX4GColors.cyan300, // #0891B2 / #67E8F9
      bannerText: isDark ? UX4GColors.cyan300 : UX4GColors.cyan800, // #67E8F9 / #155E75
      bannerIcon: isDark ? UX4GColors.cyan500 : UX4GColors.cyan600, // #06B6D4 / #0891B2
    };
  }, [isDark, variant]);

  // Clean React Native TSX code snippet matching Flutter paymentSummaryComponent
  const codeString = useMemo(() => {
    if (variant === 'card') {
      return `import React from 'react';
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
  Ux4gButton,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-design-system';
import Svg, { Circle, Path } from 'react-native-svg';

export const PaymentSummaryCardPattern = ({ isDark }: { isDark: boolean }) => {
  return (
    <View style={[styles.screen, { backgroundColor: isDark ? UX4GColors.primary800 : UX4GColors.primary100 }]}>
      {/* 1. Official Government Header */}
      <Ux4gAppHeader
        title=""
        variant={isDark ? 'dark' : 'light'}
        elevation={2}
        useSafeArea={false}
        horizontalPadding={16}
        leadingSpacing={8}
        backgroundColor={isDark ? UX4GColors.gray900 : UX4GColors.neutral0}
        borderColor={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}
        leadingWidgets={[
          <Image key="emblem" source={{ uri: '/national_emblem_logo.svg' }} style={styles.emblemLogo} resizeMode="contain" />,
          <View key="divider" style={styles.headerDivider} />,
          <Image key="union" source={{ uri: '/Union.svg' }} style={styles.unionLogo} resizeMode="contain" />,
        ]}
      />
      <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />

      {/* 2. Step Bar (4 steps: 3 completed, 1 active 'Payment') */}
      <View style={styles.stepBarContainer}>
        {/* Horizontal 4-Step Stepper */}
      </View>
      <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />

      {/* 3. Floating Rounded Card */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0 }]}>
          <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
            Payment
          </Text>
          <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            Pay the application fee to complete your Income Certificate submission.
          </Text>

          {/* Fee Table */}
          <View style={[styles.tableCard, { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF', borderColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200 }]}>
            <Text style={[styles.tableHeader, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
              Income Certificate Application
            </Text>
            <View style={styles.feeRow}>
              <Text style={[styles.feeLabel, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>Application fee</Text>
              <Text style={[styles.feeAmount, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>Rs 30.00</Text>
            </View>
            <View style={styles.feeRow}>
              <Text style={[styles.feeLabel, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>Processing charge</Text>
              <Text style={[styles.feeAmount, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>Rs 5.00</Text>
            </View>
            <View style={styles.feeRow}>
              <Text style={[styles.feeLabel, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>GST (18%)</Text>
              <Text style={[styles.feeAmount, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>Rs 6.30</Text>
            </View>
            <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />
            <View style={styles.totalRow}>
              <Text style={[styles.totalLabel, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>Total</Text>
              <Text style={[styles.totalAmount, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>Rs 41.30</Text>
            </View>
          </View>

          {/* PayGov Status Info Banner */}
          <View style={[styles.banner, { backgroundColor: isDark ? UX4GColors.cyan900 : UX4GColors.cyan50, borderColor: isDark ? UX4GColors.cyan600 : UX4GColors.cyan300 }]}>
            <View style={styles.bannerRow}>
              <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
                <Circle cx={12} cy={12} r={10} fill={isDark ? UX4GColors.cyan500 : UX4GColors.cyan600} />
                <Path d="M12 11v5M12 8h.01" stroke="#FFFFFF" strokeWidth={2.2} strokeLinecap="round" />
              </Svg>
              <View style={{ flex: 1 }}>
                <Text style={[styles.bannerText, { color: isDark ? UX4GColors.cyan300 : UX4GColors.cyan800 }]}>
                  Secure payment via PayGov — National Information Centre payment gateway.
                </Text>
              </View>
            </View>
          </View>

          {/* Primary CTA */}
          <Ux4gButton text="Continue to payment" variant="primary" size="large" style={{ marginTop: 20 }} />

          {/* Secondary Link (Ghost / Text button) */}
          <Ux4gButton
            text="Back to review"
            variant="ghost"
            size="medium"
            style={{ alignSelf: 'center', marginTop: 12 }}
            onPress={() => alert('Back to review')}
          />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.poweredByText}>Powered by -</Text>
          <Image source={{ uri: '/Digital_India_logo.svg' }} style={styles.digitalIndiaLogo} resizeMode="contain" />
        </View>
      </ScrollView>
    </View>
  );
};`;
    }

    return `import React from 'react';
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
  Ux4gButton,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-design-system';
import Svg, { Circle, Path } from 'react-native-svg';

export const PaymentSummaryDefaultPattern = ({ isDark }: { isDark: boolean }) => {
  return (
    <View style={[styles.screen, { backgroundColor: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50 }]}>
      {/* 1. Official Government Header */}
      <Ux4gAppHeader
        title=""
        variant={isDark ? 'dark' : 'light'}
        elevation={2}
        useSafeArea={false}
        horizontalPadding={16}
        leadingSpacing={8}
        backgroundColor={isDark ? UX4GColors.gray900 : UX4GColors.neutral0}
        borderColor={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}
        leadingWidgets={[
          <Image key="emblem" source={{ uri: '/national_emblem_logo.svg' }} style={styles.emblemLogo} resizeMode="contain" />,
          <View key="divider" style={styles.headerDivider} />,
          <Image key="union" source={{ uri: '/Union.svg' }} style={styles.unionLogo} resizeMode="contain" />,
        ]}
      />
      <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />

      {/* 2. Step Bar (4 steps: 3 completed, 1 active 'Payment') */}
      <View style={styles.stepBarContainer}>
        {/* Horizontal 4-Step Stepper */}
      </View>
      <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />

      {/* 3. Main Body */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
          Payment
        </Text>
        <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
          Pay the application fee to complete your Income Certificate submission.
        </Text>

        {/* Fee Table */}
        <View style={[styles.tableCard, { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF', borderColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200 }]}>
          <Text style={[styles.tableHeader, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
            Income Certificate Application
          </Text>
          <View style={styles.feeRow}>
            <Text style={[styles.feeLabel, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>Application fee</Text>
            <Text style={[styles.feeAmount, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>Rs 30.00</Text>
          </View>
          <View style={styles.feeRow}>
            <Text style={[styles.feeLabel, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>Processing charge</Text>
            <Text style={[styles.feeAmount, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>Rs 5.00</Text>
          </View>
          <View style={styles.feeRow}>
            <Text style={[styles.feeLabel, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>GST (18%)</Text>
            <Text style={[styles.feeAmount, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>Rs 6.30</Text>
          </View>
          <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />
          <View style={styles.totalRow}>
            <Text style={[styles.totalLabel, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>Total</Text>
            <Text style={[styles.totalAmount, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>Rs 41.30</Text>
          </View>
        </View>

        {/* PayGov Status Info Banner */}
        <View style={[styles.banner, { backgroundColor: isDark ? UX4GColors.cyan900 : UX4GColors.cyan50, borderColor: isDark ? UX4GColors.cyan600 : UX4GColors.cyan300 }]}>
          <View style={styles.bannerRow}>
            <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
              <Circle cx={12} cy={12} r={10} fill={isDark ? UX4GColors.cyan500 : UX4GColors.cyan600} />
              <Path d="M12 11v5M12 8h.01" stroke="#FFFFFF" strokeWidth={2.2} strokeLinecap="round" />
            </Svg>
            <View style={{ flex: 1 }}>
              <Text style={[styles.bannerText, { color: isDark ? UX4GColors.cyan300 : UX4GColors.cyan800 }]}>
                Secure payment via PayGov — National Information Centre payment gateway.
              </Text>
            </View>
          </View>
        </View>

        {/* Primary CTA */}
        <Ux4gButton text="Continue to payment" variant="primary" size="large" style={{ marginTop: 20 }} />

        {/* Secondary Link (Ghost / Text button) */}
        <Ux4gButton
          text="Back to review"
          variant="ghost"
          size="medium"
          style={{ alignSelf: 'center', marginTop: 12 }}
          onPress={() => alert('Back to review')}
        />

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.poweredByText}>Powered by -</Text>
          <Image source={{ uri: '/Digital_India_logo.svg' }} style={styles.digitalIndiaLogo} resizeMode="contain" />
        </View>
      </ScrollView>
    </View>
  );
};`;
  }, [variant]);

  // Live interactive mockup matching Flutter paymentSummaryComponent (_PaymentSummaryMockup / _PaymentSummaryCardMockup) EXACTLY
  const renderLiveMockup = () => {
    const isCard = variant === 'card';
    const bgScreenColor = colors.screenBg;

    return (
      <div
        style={{
          width: '100%',
          maxWidth: 360,
          borderRadius: 24,
          overflow: 'hidden',
          boxShadow: isDark
            ? '0 12px 32px rgba(0, 0, 0, 0.6), 0 0 0 1px #333333'
            : '0 12px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px #E5E7EB',
          backgroundColor: bgScreenColor,
          display: 'flex',
          flexDirection: 'column',
          minHeight: 680,
          margin: '0 auto',
        }}
      >
        {/* Top Header Bar (_BrandHeader in Flutter) */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            boxShadow: isDark
              ? '0 3px 10px rgba(0, 0, 0, 0.5)'
              : '0 3px 12px rgba(0, 0, 0, 0.08)',
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
          />
          <div
            style={{
              height: 1,
              backgroundColor: colors.border,
              width: '100%',
            }}
          />
        </div>

        {/* Stepper Bar (_PmtStepBar in Flutter: 4 steps, circles with no labels except the last step which shows "Payment") */}
        <div
          style={{
            backgroundColor: colors.headerBg,
            padding: '24px 28px 6px 16px',
            borderBottom: `1px solid ${colors.border}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', position: 'relative' }}>
            {[1, 2, 3, 4].map((stepIndex, idx) => {
              const isCompleted = stepIndex < 4;
              const isActive = stepIndex === 4;
              const primaryColor = isDark ? colors.primaryLight : colors.primary;

              return (
                <React.Fragment key={stepIndex}>
                  {idx > 0 && (
                    <div
                      style={{
                        flex: 1,
                        height: 2.5,
                        borderRadius: 1.25,
                        backgroundColor: idx < 4 ? primaryColor : (isDark ? UX4GColors.neutral800 : UX4GColors.neutral300),
                        margin: '11px 4px 0 4px',
                      }}
                    />
                  )}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        backgroundColor: isCompleted ? primaryColor : 'transparent',
                        border: `2px solid ${
                          isCompleted || isActive
                            ? primaryColor
                            : (isDark ? UX4GColors.neutral800 : UX4GColors.neutral300)
                        }`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxSizing: 'border-box',
                      }}
                    >
                      {isCompleted ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isDark ? UX4GColors.neutral900 : '#FFFFFF'} strokeWidth="3.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : isActive ? (
                        <div
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            backgroundColor: primaryColor,
                          }}
                        />
                      ) : (
                        <span style={{ fontSize: 11, fontWeight: 700, color: isDark ? UX4GColors.neutral600 : UX4GColors.neutral400 }}>
                          {stepIndex}
                        </span>
                      )}
                    </div>
                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          top: 27,
                          fontSize: 11,
                          fontWeight: 600,
                          color: colors.titleColor,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Payment
                      </span>
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <div style={{ height: 18 }} />
        </div>

        {/* Main Content Area */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: isCard ? '20px 16px 16px 16px' : '20px 16px 16px 16px',
            backgroundColor: bgScreenColor,
          }}
        >
          {/* Card style vs Default layout Container */}
          <div
            style={{
              backgroundColor: isCard ? colors.cardBg : 'transparent',
              borderRadius: isCard ? 16 : 0,
              padding: isCard ? '24px 16px 20px 16px' : '0',
              boxShadow: isCard
                ? isDark
                  ? '0 4px 16px rgba(0,0,0,0.4)'
                  : '0 4px 16px rgba(0,0,0,0.04)'
                : 'none',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Title (hL_strong: fontSize 24, fontWeight 800) */}
            <h2
              style={{
                fontSize: 24,
                fontWeight: 800,
                lineHeight: 1.2,
                color: colors.titleColor,
                margin: 0,
                letterSpacing: '-0.3px',
              }}
            >
              Payment
            </h2>

            {/* Subtitle (bM_default: fontSize 14, lineHeight 1.4) */}
            <p
              style={{
                fontSize: 14,
                lineHeight: '1.4',
                color: colors.subtleText,
                margin: '4px 0 0 0',
              }}
            >
              Pay the application fee to complete your Income Certificate submission.
            </p>

            {/* Fee Breakdown Table Container */}
            <div
              style={{
                marginTop: 20,
                backgroundColor: colors.cardBg,
                borderRadius: 10,
                border: `1px solid ${colors.border}`,
                padding: 16,
              }}
            >
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: colors.titleColor,
                  marginBottom: 16,
                }}
              >
                Income Certificate Application
              </div>

              {/* Fee Row: Application fee */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: 13, fontWeight: 400, color: colors.subtleText, lineHeight: '1.3' }}>
                  Application fee
                </span>
                <span style={{ fontSize: 13, fontWeight: 700, color: colors.titleColor, lineHeight: '1.3' }}>
                  Rs 30.00
                </span>
              </div>

              {/* Fee Row: Processing charge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: 13, fontWeight: 400, color: colors.subtleText, lineHeight: '1.3' }}>
                  Processing charge
                </span>
                <span style={{ fontSize: 13, fontWeight: 700, color: colors.titleColor, lineHeight: '1.3' }}>
                  Rs 5.00
                </span>
              </div>

              {/* Fee Row: GST (18%) */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <span style={{ fontSize: 13, fontWeight: 400, color: colors.subtleText, lineHeight: '1.3' }}>
                  GST (18%)
                </span>
                <span style={{ fontSize: 13, fontWeight: 700, color: colors.titleColor, lineHeight: '1.3' }}>
                  Rs 6.30
                </span>
              </div>

              {/* Divider Line */}
              <div
                style={{
                  height: 1,
                  backgroundColor: colors.border,
                  marginBottom: 14,
                }}
              />

              {/* Fee Row: Total */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: colors.titleColor, lineHeight: '1.3' }}>
                  Total
                </span>
                <span style={{ fontSize: 17, fontWeight: 700, color: colors.titleColor, lineHeight: '1.3' }}>
                  Rs 41.30
                </span>
              </div>
            </div>

            {/* PayGov Info Security Banner (Ux4gStatusBanner infoLight cyan) */}
            <div
              style={{
                marginTop: 16,
                backgroundColor: colors.bannerBg,
                border: `1px solid ${colors.bannerBorder}`,
                borderRadius: 8,
                padding: '12px',
                display: 'flex',
                gap: 10,
                alignItems: 'flex-start',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
                <circle cx="12" cy="12" r="10" fill={colors.bannerIcon} />
                <path d="M12 11v5M12 8h.01" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: colors.bannerText, lineHeight: '1.35' }}>
                  Secure payment via PayGov — National
                </div>
                <div style={{ fontSize: 13, fontWeight: 500, color: colors.bannerText, lineHeight: '1.35' }}>
                  Information Centre payment gateway.
                </div>
              </div>
            </div>

            {/* Primary CTA Button (Ux4gButton: large, height 48) */}
            <button
              type="button"
              onClick={() => alert('Continue to payment')}
              style={{
                marginTop: 20,
                width: '100%',
                height: 48,
                backgroundColor: isDark ? colors.primaryLight : colors.primary,
                color: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
                border: 'none',
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(74, 43, 194, 0.2)',
                transition: 'all 0.15s ease',
              }}
            >
              Continue to payment
            </button>

            {/* Secondary Text Link Button */}
            <div style={{ textAlign: 'center', marginTop: 12 }}>
              <button
                type="button"
                onClick={() => alert('Back to review')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: isDark ? colors.primaryLight : colors.primary,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                Back to review
              </button>
            </div>
          </div>

          {/* Powered by Digital India Footer (_BrandFooter in Flutter) */}
          <div
            style={{
              paddingTop: 8,
              paddingBottom: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: UX4GColors.neutral400,
                lineHeight: '1.3',
              }}
            >
              Powered by -
            </span>
            <div style={{ height: 6 }} />
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
    );
  };

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Payment</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Fee breakdown and payment gateway entry screen. Shows the application fee table, a PayGov info banner, and a Continue CTA. Use the Variant knob to toggle between flat phone layout and card-style layout. Mobile-sized layout (360px).
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
                {/* Variant Switch in Code Tab as well */}
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
                <CodeBlock code={codeString} language="tsx" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
