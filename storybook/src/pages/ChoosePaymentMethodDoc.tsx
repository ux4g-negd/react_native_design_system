import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { defaultUx4gTypography } from '../../../src/foundation/typography';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { Ux4gButton } from '../../../src/components/button/Button';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface ChoosePaymentMethodDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';
type PaymentMethodType = 'upi' | 'netbanking' | 'card' | 'csc';

export const ChoosePaymentMethodDoc: React.FC<ChoosePaymentMethodDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethodType>('upi');
  const [upiId, setUpiId] = useState('');

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
    };
  }, [isDark, variant]);

  // Clean React Native TSX code snippet matching Flutter paymentMethodComponent
  const codeString = useMemo(() => {
    if (variant === 'card') {
      return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const ChoosePaymentMethodCardPattern = ({ isDark }: { isDark: boolean }) => {
  const [selectedMethod, setSelectedMethod] = useState<'upi' | 'netbanking' | 'card' | 'csc'>('upi');
  const [upiId, setUpiId] = useState('');

  const options = [
    { id: 'upi', label: 'UPI', subtitle: 'Pay with any UPI app' },
    { id: 'netbanking', label: 'Net Banking', subtitle: '60+ banks supported' },
    { id: 'card', label: 'Debit / Credit Card', subtitle: 'Visa, MasterCard, RuPay' },
    { id: 'csc', label: 'CSC Centre', subtitle: 'Pay in cash at your nearest CSC' },
  ];

  return (
    <View style={[styles.screen, { backgroundColor: isDark ? UX4GColors.primary800 : UX4GColors.primary100 }]}>
      {/* Official Government Header */}
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
        {/* Horizontal 4-Step Stepper (Step 4: Payment Active) */}
      </View>
      <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />

      {/* Floating Card Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0 }]}>
          <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
            Choose payment method
          </Text>
          <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            Select how you would like to pay Rs 41.30.
          </Text>

          {/* Payment Method Radio Option Tiles */}
          {options.map((option) => {
            const isSelected = selectedMethod === option.id;
            return (
              <TouchableOpacity
                key={option.id}
                onPress={() => setSelectedMethod(option.id as any)}
                activeOpacity={0.8}
                style={[
                  styles.optionTile,
                  {
                    backgroundColor: isSelected
                      ? isDark ? UX4GColors.primary900 : UX4GColors.primary50
                      : isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
                  },
                ]}
              >
                {/* Radio Circle */}
                <View
                  style={[
                    styles.radioCircle,
                    {
                      borderColor: isSelected
                        ? isDark ? UX4GColors.primary300 : UX4GColors.primary
                        : UX4GColors.neutral400,
                    },
                  ]}
                >
                  {isSelected && (
                    <View
                      style={[
                        styles.radioInnerDot,
                        { backgroundColor: isDark ? UX4GColors.primary300 : UX4GColors.primary },
                      ]}
                    />
                  )}
                </View>
                <View style={styles.optionTextContainer}>
                  <Text
                    style={[
                      styles.optionLabel,
                      {
                        color: isSelected
                          ? isDark ? UX4GColors.primary300 : UX4GColors.primary
                          : isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
                      },
                    ]}
                  >
                    {option.label}
                  </Text>
                  <Text
                    style={[
                      styles.optionSubtitle,
                      {
                        color: isSelected
                          ? isDark ? UX4GColors.primary300 : UX4GColors.primary600
                          : isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
                      },
                    ]}
                  >
                    {option.subtitle}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}

          {/* Inline UPI ID Input Field (Appears after all 4 tiles when UPI is selected) */}
          {selectedMethod === 'upi' && (
            <View style={styles.upiInputContainer}>
              <Text style={[styles.inputLabel, { color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral800 }]}>
                Enter UPI ID
              </Text>
              <TextInput
                value={upiId}
                onChangeText={setUpiId}
                placeholder="e.g. name@upi"
                placeholderTextColor={isDark ? UX4GColors.neutral500 : UX4GColors.neutral400}
                style={[
                  styles.textInput,
                  {
                    backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
                    borderColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
                    color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
                  },
                ]}
              />
            </View>
          )}

          {/* Pay Button */}
          <Ux4gButton text="Pay Rs 41.30" variant="primary" size="large" style={{ marginTop: 20 }} />

          {/* Back to summary Link */}
          <Ux4gButton
            text="Back to summary"
            variant="ghost"
            size="medium"
            style={{ alignSelf: 'center', marginTop: 12 }}
            onPress={() => alert('Back to summary')}
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

    return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const ChoosePaymentMethodDefaultPattern = ({ isDark }: { isDark: boolean }) => {
  const [selectedMethod, setSelectedMethod] = useState<'upi' | 'netbanking' | 'card' | 'csc'>('upi');
  const [upiId, setUpiId] = useState('');

  const options = [
    { id: 'upi', label: 'UPI', subtitle: 'Pay with any UPI app' },
    { id: 'netbanking', label: 'Net Banking', subtitle: '60+ banks supported' },
    { id: 'card', label: 'Debit / Credit Card', subtitle: 'Visa, MasterCard, RuPay' },
    { id: 'csc', label: 'CSC Centre', subtitle: 'Pay in cash at your nearest CSC' },
  ];

  return (
    <View style={[styles.screen, { backgroundColor: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50 }]}>
      {/* Official Government Header */}
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
        {/* Horizontal 4-Step Stepper (Step 4: Payment Active) */}
      </View>
      <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />

      {/* Main Body */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
          Choose payment method
        </Text>
        <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
          Select how you would like to pay Rs 41.30.
        </Text>

        {/* Payment Method Radio Option Tiles */}
        {options.map((option) => {
          const isSelected = selectedMethod === option.id;
          return (
            <TouchableOpacity
              key={option.id}
              onPress={() => setSelectedMethod(option.id as any)}
              activeOpacity={0.8}
              style={[
                styles.optionTile,
                {
                  backgroundColor: isSelected
                    ? isDark ? UX4GColors.primary900 : UX4GColors.primary50
                    : isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
                },
              ]}
            >
              {/* Radio Circle */}
              <View
                style={[
                  styles.radioCircle,
                  {
                    borderColor: isSelected
                      ? isDark ? UX4GColors.primary300 : UX4GColors.primary
                      : UX4GColors.neutral400,
                  },
                ]}
              >
                {isSelected && (
                  <View
                    style={[
                      styles.radioInnerDot,
                      { backgroundColor: isDark ? UX4GColors.primary300 : UX4GColors.primary },
                    ]}
                  />
                )}
              </View>
              <View style={styles.optionTextContainer}>
                <Text
                  style={[
                    styles.optionLabel,
                    {
                      color: isSelected
                        ? isDark ? UX4GColors.primary300 : UX4GColors.primary
                        : isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
                    },
                  ]}
                >
                  {option.label}
                </Text>
                <Text
                  style={[
                    styles.optionSubtitle,
                    {
                      color: isSelected
                        ? isDark ? UX4GColors.primary300 : UX4GColors.primary600
                        : isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
                    },
                  ]}
                >
                  {option.subtitle}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}

        {/* Inline UPI ID Input Field (Appears after all 4 tiles when UPI is selected) */}
        {selectedMethod === 'upi' && (
          <View style={styles.upiInputContainer}>
            <Text style={[styles.inputLabel, { color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral800 }]}>
              Enter UPI ID
            </Text>
            <TextInput
              value={upiId}
              onChangeText={setUpiId}
              placeholder="e.g. name@upi"
              placeholderTextColor={isDark ? UX4GColors.neutral500 : UX4GColors.neutral400}
              style={[
                styles.textInput,
                {
                  backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
                  borderColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
                  color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
                },
              ]}
            />
          </View>
        )}

        {/* Pay Button */}
        <Ux4gButton text="Pay Rs 41.30" variant="primary" size="large" style={{ marginTop: 20 }} />

        {/* Back to summary Link */}
        <Ux4gButton
          text="Back to summary"
          variant="ghost"
          size="medium"
          style={{ alignSelf: 'center', marginTop: 12 }}
          onPress={() => alert('Back to summary')}
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

  // Live interactive mockup matching Flutter paymentMethodComponent (_PaymentMethodMockup / _PaymentMethodCardMockup) EXACTLY
  const renderLiveMockup = () => {
    const isCard = variant === 'card';
    const bgScreenColor = colors.screenBg;

    const paymentOptions: { id: PaymentMethodType; label: string; subtitle: string }[] = [
      { id: 'upi', label: 'UPI', subtitle: 'Pay with any UPI app' },
      { id: 'netbanking', label: 'Net Banking', subtitle: '60+ banks supported' },
      { id: 'card', label: 'Debit / Credit Card', subtitle: 'Visa, MasterCard, RuPay' },
      { id: 'csc', label: 'CSC Centre', subtitle: 'Pay in cash at your nearest CSC' },
    ];

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
            {/* Title */}
            <h2
              style={{
                fontSize: 22,
                fontWeight: 800,
                lineHeight: 1.2,
                color: colors.titleColor,
                margin: 0,
                letterSpacing: '-0.3px',
              }}
            >
              Choose payment method
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 13,
                lineHeight: '1.4',
                color: colors.subtleText,
                margin: '4px 0 0 0',
              }}
            >
              Select how you would like to pay Rs 41.30.
            </p>

            {/* Payment Method Option Tiles (All 4 option tiles rendered sequentially) */}
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {paymentOptions.map((option) => {
                const isSelected = selectedMethod === option.id;
                const tileBg = isSelected
                  ? isDark ? UX4GColors.primary900 : UX4GColors.primary50
                  : isDark ? UX4GColors.neutral800 : UX4GColors.neutral100;
                const titleColor = isSelected
                  ? isDark ? UX4GColors.primary300 : UX4GColors.primary
                  : isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
                const subtitleColor = isSelected
                  ? isDark ? UX4GColors.primary300 : UX4GColors.primary600
                  : isDark ? UX4GColors.neutral200 : UX4GColors.neutral700;
                const radioBorderColor = isSelected
                  ? isDark ? UX4GColors.primary300 : UX4GColors.primary
                  : UX4GColors.neutral400;

                return (
                  <div
                    key={option.id}
                    onClick={() => setSelectedMethod(option.id)}
                    style={{
                      padding: '14px 16px',
                      borderRadius: 12,
                      backgroundColor: tileBg,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {/* Radio Circle */}
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        border: `2px solid ${radioBorderColor}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxSizing: 'border-box',
                      }}
                    >
                      {isSelected && (
                        <div
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            backgroundColor: isDark ? UX4GColors.primary300 : UX4GColors.primary,
                          }}
                        />
                      )}
                    </div>

                    {/* Text Labels */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color: titleColor, lineHeight: '1.3' }}>
                        {option.label}
                      </span>
                      <span style={{ fontSize: 12, color: subtitleColor, lineHeight: '1.3', marginTop: 2 }}>
                        {option.subtitle}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Inline UPI ID Input Field (Appears AFTER all 4 tiles when UPI is selected, exactly like Flutter) */}
            {selectedMethod === 'upi' && (
              <div style={{ marginTop: 8, paddingLeft: 4, paddingRight: 4 }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: 12,
                    fontWeight: 600,
                    color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral800,
                    marginBottom: 4,
                  }}
                >
                  Enter UPI ID
                </label>
                <input
                  type="text"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder="e.g. name@upi"
                  style={{
                    width: '100%',
                    height: 42,
                    borderRadius: 8,
                    padding: '0 12px',
                    fontSize: 14,
                    border: `1px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.neutral300}`,
                    backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
                    color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            )}

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={() => alert(`Proceeding payment via ${selectedMethod.toUpperCase()}`)}
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
              Pay Rs 41.30
            </button>

            {/* Secondary Link Button (Ghost Button) */}
            <div style={{ textAlign: 'center', marginTop: 12 }}>
              <button
                type="button"
                onClick={() => alert('Back to summary')}
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
                Back to summary
              </button>
            </div>
          </div>

          {/* Powered by Digital India Footer */}
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
          <h1 className="wb-title">Choose Payment Method</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Radio-tile payment method selector. Includes UPI, Net Banking, Debit/Credit Card, and CSC Centre options. Selecting UPI reveals an inline UPI ID input field. Toggle between flat phone layout and card-style layout. Mobile-sized layout (360px).
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
