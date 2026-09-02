import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface PaymentSuccessDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const PaymentSuccessDoc: React.FC<PaymentSuccessDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');

  // Exact color tokens from UX4G Flutter Design System
  const colors = useMemo(() => {
    const isCard = variant === 'card';
    return {
      screenBg: isCard
        ? isDark
          ? UX4GColors.primary800 // #301C7D
          : UX4GColors.primary100 // #DCD4FF
        : isDark
        ? UX4GColors.neutral950 // #0A0A0A
        : UX4GColors.neutral50, // #FAFAFA
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.gray900,
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      primary: UX4GColors.primary,
      primaryLight: UX4GColors.primary300,
      // Success green palette tokens from Flutter
      greenOuterBg: isDark ? UX4GColors.green800 : UX4GColors.green100,
      greenInnerBg: isDark ? UX4GColors.green600 : UX4GColors.green,
      greenBorder: isDark ? UX4GColors.green600 : UX4GColors.green300,
    };
  }, [isDark, variant]);

  // Clean React Native TSX code snippet matching Flutter paymentSuccessComponent
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

export const PaymentSuccessCardPattern = ({ isDark }: { isDark: boolean }) => {
  const details = [
    { label: 'Amount paid', value: 'Rs 41.30', isBold: true },
    { label: 'Transaction ID', value: 'PG2026MH04127TX' },
    { label: 'Method', value: 'UPI · ramesh@upi' },
    { label: 'Date and time', value: '12 Apr 2026, 2:34 PM IST' },
  ];

  return (
    <View style={[styles.screen, { backgroundColor: isDark ? UX4GColors.primary800 : UX4GColors.primary100 }]}>
      {/* Official Header */}
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

      {/* Main Content Area */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Floating White Card Container (Wraps Stepper + Badge + Details) */}
        <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0 }]}>
          {/* Stepper Bar Inside Card */}
          <View style={styles.stepBarContainer}>
            {/* Horizontal 4-Step Stepper */}
          </View>

          {/* Green Checkmark Badge */}
          <View style={[styles.outerBadge, { backgroundColor: isDark ? UX4GColors.green800 : UX4GColors.green100 }]}>
            <View style={[styles.innerBadge, { backgroundColor: isDark ? UX4GColors.green600 : UX4GColors.green }]}>
              <Text style={styles.checkmarkText}>✓</Text>
            </View>
          </View>

          {/* Title */}
          <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900 }]}>
            Payment Successful
          </Text>

          {/* Subtitle */}
          <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral500 }]}>
            Rs 41.30 paid via UPI to Revenue{'\n'}Department, Maharashtra.
          </Text>

          {/* Transaction Detail Card */}
          <View
            style={[
              styles.detailBox,
              {
                backgroundColor: isDark ? UX4GColors.green800 : UX4GColors.green100,
                borderColor: isDark ? UX4GColors.green600 : UX4GColors.green300,
              },
            ]}
          >
            {details.map((row, idx) => (
              <View key={idx} style={styles.detailRow}>
                <Text style={[styles.detailLabel, { color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral600 }]}>
                  {row.label}
                </Text>
                <Text
                  style={[
                    styles.detailValue,
                    {
                      color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
                      fontWeight: row.isBold ? '700' : '500',
                    },
                  ]}
                >
                  {row.value}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Action Buttons OUTSIDE the Card (on soft purple background) */}
        <Ux4gButton text="Track my application" variant="primary" size="large" style={{ marginTop: 20 }} />

        <Ux4gButton text="Download receipt (PDF)" variant="outline" size="large" style={{ marginTop: 10 }} />

        <TouchableOpacity style={styles.linkButton} onPress={() => {}}>
          <Text style={[styles.linkButtonText, { color: isDark ? UX4GColors.primary300 : UX4GColors.primary }]}>
            Return to services
          </Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.poweredByText}>Powered by -</Text>
          <Image source={{ uri: '/Digital_India_logo.svg' }} style={styles.digitalIndiaLogo} resizeMode="contain" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  scrollContainer: { padding: 16 },
  card: { borderRadius: 16, padding: 16, alignItems: 'center' },
  emblemLogo: { height: 32, width: 32 },
  headerDivider: { width: 1, height: 24, backgroundColor: '#E5E7EB', marginHorizontal: 4 },
  unionLogo: { height: 32, width: 32 },
  stepBarContainer: { paddingVertical: 12, width: '100%' },
  outerBadge: { width: 64, height: 64, borderRadius: 32, alignItems: 'center', justifyContent: 'center', marginTop: 16 },
  innerBadge: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  checkmarkText: { color: '#FFFFFF', fontSize: 20, fontWeight: '700' },
  title: { fontSize: 22, fontWeight: '800', marginTop: 16, textAlign: 'center' },
  subtitle: { fontSize: 13, marginTop: 6, textAlign: 'center', lineHeight: 18 },
  detailBox: { width: '100%', borderRadius: 10, borderWidth: 1, paddingVertical: 8, paddingHorizontal: 16, marginTop: 20 },
  detailRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6 },
  detailLabel: { fontSize: 13 },
  detailValue: { fontSize: 13 },
  linkButton: { marginTop: 12, paddingVertical: 8, alignItems: 'center' },
  linkButtonText: { fontSize: 14, fontWeight: '500' },
  footer: { alignItems: 'center', marginVertical: 20 },
  poweredByText: { fontSize: 11, color: '#A3A3A3' },
  digitalIndiaLogo: { height: 22, width: 80, marginTop: 6 },
});`;
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

export const PaymentSuccessDefaultPattern = ({ isDark }: { isDark: boolean }) => {
  const details = [
    { label: 'Amount paid', value: 'Rs 41.30', isBold: true },
    { label: 'Transaction ID', value: 'PG2026MH04127TX' },
    { label: 'Method', value: 'UPI · ramesh@upi' },
    { label: 'Date and time', value: '12 Apr 2026, 2:34 PM IST' },
  ];

  return (
    <View style={[styles.screen, { backgroundColor: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50 }]}>
      {/* Official Header */}
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

      {/* Stepper Bar */}
      <View style={styles.stepBarContainer}>
        {/* Horizontal 4-Step Stepper */}
      </View>
      <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />

      {/* Main Content Area */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Green Checkmark Badge */}
        <View style={[styles.outerBadge, { backgroundColor: isDark ? UX4GColors.green800 : UX4GColors.green100 }]}>
          <View style={[styles.innerBadge, { backgroundColor: isDark ? UX4GColors.green600 : UX4GColors.green }]}>
            <Text style={styles.checkmarkText}>✓</Text>
          </View>
        </View>

        {/* Title */}
        <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900 }]}>
          Payment Successful
        </Text>

        {/* Subtitle */}
        <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral500 }]}>
          Rs 41.30 paid via UPI to Revenue{'\n'}Department, Maharashtra.
        </Text>

        {/* Transaction Detail Card */}
        <View
          style={[
            styles.detailBox,
            {
              backgroundColor: isDark ? UX4GColors.green800 : UX4GColors.green100,
              borderColor: isDark ? UX4GColors.green600 : UX4GColors.green300,
            },
          ]}
        >
          {details.map((row, idx) => (
            <View key={idx} style={styles.detailRow}>
              <Text style={[styles.detailLabel, { color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral600 }]}>
                {row.label}
              </Text>
              <Text
                style={[
                  styles.detailValue,
                  {
                    color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
                    fontWeight: row.isBold ? '700' : '500',
                  },
                ]}
              >
                {row.value}
              </Text>
            </View>
          ))}
        </View>

        {/* Action Buttons */}
        <Ux4gButton text="Track my application" variant="primary" size="large" style={{ marginTop: 20 }} />

        <Ux4gButton text="Download receipt (PDF)" variant="outline" size="large" style={{ marginTop: 10 }} />

        <TouchableOpacity style={styles.linkButton} onPress={() => {}}>
          <Text style={[styles.linkButtonText, { color: isDark ? UX4GColors.primary300 : UX4GColors.primary }]}>
            Return to services
          </Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.poweredByText}>Powered by -</Text>
          <Image source={{ uri: '/Digital_India_logo.svg' }} style={styles.digitalIndiaLogo} resizeMode="contain" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  scrollContainer: { padding: 16, alignItems: 'center' },
  emblemLogo: { height: 32, width: 32 },
  headerDivider: { width: 1, height: 24, backgroundColor: '#E5E7EB', marginHorizontal: 4 },
  unionLogo: { height: 32, width: 32 },
  stepBarContainer: { paddingVertical: 12, paddingHorizontal: 16, width: '100%' },
  outerBadge: { width: 64, height: 64, borderRadius: 32, alignItems: 'center', justifyContent: 'center', marginTop: 16 },
  innerBadge: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  checkmarkText: { color: '#FFFFFF', fontSize: 20, fontWeight: '700' },
  title: { fontSize: 22, fontWeight: '800', marginTop: 16, textAlign: 'center' },
  subtitle: { fontSize: 13, marginTop: 6, textAlign: 'center', lineHeight: 18 },
  detailBox: { width: '100%', borderRadius: 10, borderWidth: 1, paddingVertical: 8, paddingHorizontal: 16, marginTop: 20 },
  detailRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6 },
  detailLabel: { fontSize: 13 },
  detailValue: { fontSize: 13 },
  linkButton: { marginTop: 12, paddingVertical: 8, alignItems: 'center' },
  linkButtonText: { fontSize: 14, fontWeight: '500' },
  footer: { alignItems: 'center', marginVertical: 20 },
  poweredByText: { fontSize: 11, color: '#A3A3A3' },
  digitalIndiaLogo: { height: 22, width: 80, marginTop: 6 },
});`;
  }, [variant]);

  // Live interactive mockup matching Flutter paymentSuccessComponent (_PaymentSuccessMockup / _PaymentSuccessCardMockup) EXACTLY
  const renderLiveMockup = () => {
    const isCard = variant === 'card';
    const bgScreenColor = colors.screenBg;

    const details = [
      { label: 'Amount paid', value: 'Rs 41.30', isBold: true },
      { label: 'Transaction ID', value: 'PG2026MH04127TX' },
      { label: 'Method', value: 'UPI · ramesh@upi' },
      { label: 'Date and time', value: '12 Apr 2026, 2:34 PM IST' },
    ];

    // Helper to render 4-step stepper bar with 3 completed checkmarks and Step 4 active
    const renderStepperBar = () => {
      const primaryColor = isDark ? colors.primaryLight : colors.primary;

      return (
        <div style={{ width: '100%', padding: isCard ? '4px 0 12px 0' : '0' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', position: 'relative' }}>
            {[1, 2, 3, 4].map((stepIndex, idx) => {
              const isCompleted = stepIndex < 4;
              const isActive = stepIndex === 4;

              return (
                <React.Fragment key={stepIndex}>
                  {idx > 0 && (
                    <div
                      style={{
                        flex: 1,
                        height: 2.5,
                        borderRadius: 1.25,
                        backgroundColor: primaryColor,
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
                        border: `2px solid ${primaryColor}`,
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
                      ) : (
                        <div
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            backgroundColor: primaryColor,
                          }}
                        />
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
      );
    };

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

        {/* Stepper Bar for Default Variant */}
        {!isCard && (
          <div
            style={{
              backgroundColor: colors.headerBg,
              padding: '24px 28px 6px 16px',
              borderBottom: `1px solid ${colors.border}`,
            }}
          >
            {renderStepperBar()}
          </div>
        )}

        {/* Main Content Scroll Area */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '20px 16px 16px 16px',
            backgroundColor: bgScreenColor,
          }}
        >
          {/* Card Container (Wraps Stepper + Green Badge + Details) */}
          <div
            style={{
              backgroundColor: isCard ? colors.cardBg : 'transparent',
              borderRadius: isCard ? 16 : 0,
              padding: isCard ? '16px 16px 20px 16px' : '0',
              boxShadow: isCard
                ? isDark
                  ? '0 4px 16px rgba(0,0,0,0.4)'
                  : '0 4px 16px rgba(0,0,0,0.04)'
                : 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            {/* Stepper Bar Inside White Card for Card Style Variant */}
            {isCard && renderStepperBar()}

            {/* Green Checkmark Success Badge */}
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                backgroundColor: colors.greenOuterBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: isCard ? 4 : 4,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  backgroundColor: colors.greenInnerBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(22, 163, 74, 0.3)',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2
              style={{
                fontSize: 22,
                fontWeight: 800,
                lineHeight: 1.2,
                color: colors.titleColor,
                margin: '16px 0 0 0',
                textAlign: 'center',
                letterSpacing: '-0.3px',
              }}
            >
              Payment Successful
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.4,
                color: colors.subtleText,
                margin: '6px 0 0 0',
                textAlign: 'center',
              }}
            >
              Rs 41.30 paid via UPI to Revenue
              <br />
              Department, Maharashtra.
            </p>

            {/* Key Value Transaction Detail Table */}
            <div
              style={{
                width: '100%',
                borderRadius: 10,
                backgroundColor: colors.greenOuterBg,
                border: `1px solid ${colors.greenBorder}`,
                padding: '10px 14px',
                marginTop: 20,
                boxSizing: 'border-box',
              }}
            >
              {details.map((row, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '5px 0',
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral600,
                    }}
                  >
                    {row.label}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: row.isBold ? 700 : 500,
                      color: colors.titleColor,
                    }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons & Footer OUTSIDE the White Card Container (Directly on Screen Background) */}
          <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            {/* Track Application Solid Primary Button */}
            <button
              type="button"
              onClick={() => alert('Tracking application...')}
              style={{
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
              Track my application
            </button>

            {/* Download Receipt Outline Button */}
            <button
              type="button"
              onClick={() => alert('Downloading receipt PDF...')}
              style={{
                marginTop: 10,
                width: '100%',
                height: 48,
                backgroundColor: isCard ? (isDark ? 'rgba(163, 145, 255, 0.15)' : 'rgba(74, 43, 194, 0.08)') : 'transparent',
                color: isDark ? colors.primaryLight : colors.primary,
                border: `1px solid ${isDark ? colors.primaryLight : colors.primary}`,
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              Download receipt (PDF)
            </button>

            {/* Return to services Ghost Button */}
            <div style={{ textAlign: 'center', marginTop: 12 }}>
              <button
                type="button"
                onClick={() => alert('Return to services')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: isDark ? colors.primaryLight : colors.primary,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: 'pointer',
                  padding: '8px 16px',
                  borderRadius: 8,
                }}
              >
                Return to services
              </button>
            </div>

            {/* Powered by Digital India Footer */}
            <div
              style={{
                paddingTop: 16,
                paddingBottom: 12,
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
      </div>
    );
  };

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Payment Successful</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Confirmation screen after a successful payment. Displays a green checkmark badge, transaction details table, and options to track the application or download the receipt. Toggle between flat phone layout and card-style layout. Mobile-sized layout (360px).
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
