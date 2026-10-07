import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface EligibilityFinalQuestionStepDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';
type OptionKey = 'expired_rejected' | 'currently_valid' | 'first_time';

interface RadioOption {
  key: OptionKey;
  title: string;
  subtitle: string;
}

const OPTIONS: RadioOption[] = [
  {
    key: 'expired_rejected',
    title: 'Yes, but it expired or was rejected',
    subtitle: 'Previously held certificate has expired or was rejected',
  },
  {
    key: 'currently_valid',
    title: 'Yes, I currently have a valid certificate',
    subtitle: 'Currently holding a valid certificate',
  },
  {
    key: 'first_time',
    title: "No, I haven't applied before",
    subtitle: 'First-time applicant for this certificate',
  },
];

export const EligibilityFinalQuestionStepDoc: React.FC<EligibilityFinalQuestionStepDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');
  const [selectedOption, setSelectedOption] = useState<OptionKey | null>('first_time');

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
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      progressTrack: isDark ? '#2D284B' : '#EAE8FA',
      optionSelectedBg: isDark ? 'rgba(163, 145, 255, 0.12)' : '#F2EFFF',
      optionSelectedBorder: isDark ? UX4GColors.primary400 : UX4GColors.primary200,
      optionUnselectedBg: isDark ? UX4GColors.neutral800 : '#FAFAFA',
      optionUnselectedBorder: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      radioBorderSelected: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      radioBorderUnselected: isDark ? UX4GColors.neutral600 : '#D1D5DB',
      radioBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      footerText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
      menuBorder: isDark ? UX4GColors.primary300 : UX4GColors.primary200,
    };
  }, [isDark, variant]);

  // Clean React Native TSX source snippet
  const codeString = useMemo(() => {
    const isCard = variant === 'Card style';
    if (isCard) {
      return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
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

interface RadioOption {
  key: string;
  title: string;
  subtitle: string;
}

const OPTIONS: RadioOption[] = [
  {
    key: 'expired_rejected',
    title: 'Yes, but it expired or was rejected',
    subtitle: 'Previously held certificate has expired or was rejected',
  },
  {
    key: 'currently_valid',
    title: 'Yes, I currently have a valid certificate',
    subtitle: 'Currently holding a valid certificate',
  },
  {
    key: 'first_time',
    title: "No, I haven't applied before",
    subtitle: 'First-time applicant for this certificate',
  },
];

export const EligibilityFinalQuestionCardScreen = ({
  isDark = false,
  onCheckEligibility = () => {},
  onBack = () => {},
}: {
  isDark?: boolean;
  onCheckEligibility?: (answer: string) => void;
  onBack?: () => void;
}) => {
  const [selected, setSelected] = useState<string | null>('first_time');
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
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
            actions={[
              {
                customWidget: (
                  <TouchableOpacity
                    key="menu"
                    style={[
                      styles.menuBtn,
                      {
                        borderColor: isDark ? UX4GColors.primary300 : UX4GColors.primary200,
                        backgroundColor: isDark ? 'transparent' : '#FFFFFF',
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
          <Ux4gDivider color={isDark ? UX4GColors.neutral800 : '#E5E7EB'} thickness={1} />
        </View>

        {/* Scrollable Content */}
        <ScrollView
          contentContainerStyle={styles.cardScrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Elevated Card Containing Content and Actions */}
          <View
            style={[
              styles.cardContainer,
              { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' },
            ]}
          >
            {/* Progress indicator */}
            <Text style={[styles.progressText, { color: subtleText }]}>
              Question 5 of 5
            </Text>
            <View style={{ height: 8 }} />
            <View
              style={[
                styles.progressBarTrack,
                { backgroundColor: isDark ? '#2D284B' : '#EAE8FA' },
              ]}
            >
              <View
                style={[
                  styles.progressBarFill,
                  {
                    width: '100%',
                    backgroundColor: primaryColor,
                  },
                ]}
              />
            </View>
            <View style={{ height: 20 }} />

            {/* Question (hS_Strong typo) */}
            <Text style={[styles.questionTitle, { color: titleColor }]}>
              Have you applied for this certificate before in the last 1 year?
            </Text>
            <View style={{ height: 20 }} />

            {/* Radio options */}
            {OPTIONS.map((opt, idx) => {
              const isSelected = selected === opt.key;
              return (
                <View key={opt.key}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setSelected(opt.key)}
                    style={[
                      styles.optionContainer,
                      {
                        backgroundColor: isSelected
                          ? isDark
                            ? 'rgba(163, 145, 255, 0.12)'
                            : '#F2EFFF'
                          : isDark
                          ? UX4GColors.neutral800
                          : '#FAFAFA',
                        borderColor: isSelected
                          ? isDark
                            ? UX4GColors.primary400
                            : UX4GColors.primary200
                          : isDark
                          ? UX4GColors.neutral700
                          : '#E5E7EB',
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.radioCircle,
                        {
                          borderColor: isSelected
                            ? primaryColor
                            : isDark
                            ? UX4GColors.neutral600
                            : '#D1D5DB',
                          borderWidth: isSelected ? 6 : 2,
                          backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
                        },
                      ]}
                    />
                    <View style={styles.optionTextCol}>
                      {/* Card Title (bM_Default typo) */}
                      <Text
                        style={[
                          styles.optionTitle,
                          {
                            color: isSelected ? primaryColor : titleColor,
                          },
                        ]}
                      >
                        {opt.title}
                      </Text>
                      {/* Card Description (bS_Default typo) */}
                      <Text
                        style={[
                          styles.optionSubtitle,
                          {
                            color: isSelected
                              ? isDark
                                ? UX4GColors.primary200
                                : UX4GColors.primary700
                              : subtleText,
                          },
                        ]}
                      >
                        {opt.subtitle}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  {idx < OPTIONS.length - 1 && <View style={{ height: 12 }} />}
                </View>
              );
            })}

            <View style={{ height: 28 }} />

            {/* Action Buttons inside Card */}
            <View style={styles.cardActionsContainer}>
              <Ux4gButton
                text="Check Eligibility"
                onPress={() => selected && onCheckEligibility(selected)}
                enabled={selected !== null}
                size="large"
                width="100%"
                height={48}
                backgroundColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
                contentColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral50}
              />
              <View style={{ height: 8 }} />
              <Ux4gButton
                text="Back"
                onPress={onBack}
                variant="ghost"
                size="large"
                width="100%"
                height={44}
                contentColor={primaryColor}
              />
            </View>
          </View>
        </ScrollView>

        {/* Footer Outside Card */}
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
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: UX4GColors.primary200,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 18,
    color: UX4GColors.primary600,
  },
  safeArea: { flex: 1 },
  container: { flex: 1, position: 'relative' },
  emblemIcon: { height: 32, width: 22 },
  verticalDivider: { height: 20, width: 1 },
  unionIcon: { height: 32, width: 44 },
  cardScrollContainer: {
    padding: 16,
    flexGrow: 1,
    justifyContent: 'center',
  },
  cardContainer: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 24,
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 16,
    elevation: 3,
  },
  progressText: {
    fontSize: 13,
    fontWeight: '600',
  },
  progressBarTrack: {
    height: 6,
    borderRadius: 3,
    width: '100%',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  // hS_Strong typography
  questionTitle: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1.5,
  },
  radioCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
  },
  optionTextCol: {
    marginLeft: 14,
    flex: 1,
  },
  // bM_Default typography
  optionTitle: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
  },
  // bS_Default typography
  optionSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2,
    lineHeight: 16,
  },
  cardActionsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingTop: 12,
    paddingBottom: 16,
  },
  poweredByText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#9CA3AF',
  },
  digitalIndiaLogo: {
    height: 22,
    width: 84,
  },
});`;
    }

    return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
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

interface RadioOption {
  key: string;
  title: string;
  subtitle: string;
}

const OPTIONS: RadioOption[] = [
  {
    key: 'expired_rejected',
    title: 'Yes, but it expired or was rejected',
    subtitle: 'Previously held certificate has expired or was rejected',
  },
  {
    key: 'currently_valid',
    title: 'Yes, I currently have a valid certificate',
    subtitle: 'Currently holding a valid certificate',
  },
  {
    key: 'first_time',
    title: "No, I haven't applied before",
    subtitle: 'First-time applicant for this certificate',
  },
];

export const EligibilityFinalQuestionScreen = ({
  isDark = false,
  onCheckEligibility = () => {},
  onBack = () => {},
}: {
  isDark?: boolean;
  onCheckEligibility?: (answer: string) => void;
  onBack?: () => void;
}) => {
  const [selected, setSelected] = useState<string | null>('first_time');
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
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
          actions={[
            {
              customWidget: (
                <TouchableOpacity
                  key="menu"
                  style={[
                    styles.menuBtn,
                    {
                      borderColor: isDark ? UX4GColors.primary300 : UX4GColors.primary200,
                      backgroundColor: isDark ? 'transparent' : '#FFFFFF',
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
        <Ux4gDivider color={isDark ? UX4GColors.neutral800 : '#E5E7EB'} thickness={1} />

        {/* Content */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Progress indicator */}
          <Text style={[styles.progressText, { color: subtleText }]}>
            Question 5 of 5
          </Text>
          <View style={{ height: 8 }} />
          <View
            style={[
              styles.progressBarTrack,
              { backgroundColor: isDark ? '#2D284B' : '#EAE8FA' },
            ]}
          >
            <View
              style={[
                styles.progressBarFill,
                {
                  width: '100%',
                  backgroundColor: primaryColor,
                },
              ]}
            />
          </View>
          <View style={{ height: 20 }} />

          {/* Question (hS_Strong typo) */}
          <Text style={[styles.questionTitle, { color: titleColor }]}>
            Have you applied for this certificate before in the last 1 year?
          </Text>
          <View style={{ height: 20 }} />

          {/* Radio options */}
          {OPTIONS.map((opt, idx) => {
            const isSelected = selected === opt.key;
            return (
              <View key={opt.key}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setSelected(opt.key)}
                  style={[
                    styles.optionContainer,
                    {
                      backgroundColor: isSelected
                        ? isDark
                          ? 'rgba(163, 145, 255, 0.12)'
                          : '#F2EFFF'
                        : isDark
                        ? UX4GColors.neutral800
                        : '#FAFAFA',
                      borderColor: isSelected
                        ? isDark
                          ? UX4GColors.primary400
                          : UX4GColors.primary200
                        : isDark
                        ? UX4GColors.neutral700
                        : '#E5E7EB',
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.radioCircle,
                      {
                        borderColor: isSelected
                          ? primaryColor
                          : isDark
                          ? UX4GColors.neutral600
                          : '#D1D5DB',
                        borderWidth: isSelected ? 6 : 2,
                        backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
                      },
                    ]}
                  />
                  <View style={styles.optionTextCol}>
                    {/* Card Title (bM_Default typo) */}
                    <Text
                      style={[
                        styles.optionTitle,
                        {
                          color: isSelected ? primaryColor : titleColor,
                        },
                      ]}
                    >
                      {opt.title}
                    </Text>
                    {/* Card Description (bS_Default typo) */}
                    <Text
                      style={[
                        styles.optionSubtitle,
                        {
                          color: isSelected
                            ? isDark
                              ? UX4GColors.primary200
                              : UX4GColors.primary700
                            : subtleText,
                        },
                      ]}
                    >
                      {opt.subtitle}
                    </Text>
                  </View>
                </TouchableOpacity>
                {idx < OPTIONS.length - 1 && <View style={{ height: 12 }} />}
              </View>
            );
          })}
        </ScrollView>

        {/* Actions */}
        <View style={styles.actionsContainer}>
          <Ux4gButton
            text="Continue"
            onPress={() => selected && onCheckEligibility(selected)}
            enabled={selected !== null}
            size="large"
            width="100%"
            height={48}
            backgroundColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
            contentColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral50}
          />
          <View style={{ height: 8 }} />
          <Ux4gButton
            text="Back"
            onPress={onBack}
            variant="ghost"
            size="large"
            width="100%"
            height={44}
            contentColor={primaryColor}
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
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: UX4GColors.primary200,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 18,
    color: UX4GColors.primary600,
  },
  safeArea: { flex: 1 },
  container: { flex: 1, position: 'relative' },
  emblemIcon: { height: 32, width: 22 },
  verticalDivider: { height: 20, width: 1 },
  unionIcon: { height: 32, width: 44 },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  progressText: {
    fontSize: 13,
    fontWeight: '600',
  },
  progressBarTrack: {
    height: 6,
    borderRadius: 3,
    width: '100%',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  // hS_Strong typography
  questionTitle: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1.5,
  },
  radioCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
  },
  optionTextCol: {
    marginLeft: 14,
    flex: 1,
  },
  // bM_Default typography
  optionTitle: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
  },
  // bS_Default typography
  optionSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2,
    lineHeight: 16,
  },
  actionsContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    alignItems: 'center',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingTop: 16,
    paddingBottom: 20,
  },
  poweredByText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#9CA3AF',
  },
  digitalIndiaLogo: {
    height: 22,
    width: 84,
  },
});`;
  }, [isDark, variant]);

  const renderLiveMockup = () => {
    const isCard = variant === 'Card style';

    const renderQuestionBody = () => (
      <>
        {/* Progress indicator */}
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: colors.subtleText,
            marginBottom: 8,
          }}
        >
          Question 5 of 5
        </div>

        {/* Progress bar (100% with purple gradient) */}
        <div
          style={{
            height: 6,
            borderRadius: 9999,
            width: '100%',
            backgroundColor: colors.progressTrack,
            overflow: 'hidden',
            marginBottom: 20,
          }}
        >
          <div
            style={{
              height: '100%',
              borderRadius: 9999,
              width: '100%',
              background: isDark
                ? 'linear-gradient(90deg, rgba(163, 145, 255, 0.4) 0%, #A391FF 100%)'
                : 'linear-gradient(90deg, #D4CBFD 0%, #4A2BC2 100%)',
            }}
          />
        </div>

        {/* Question Title (hS_Strong typo: fontSize 20, fontWeight 700, lineHeight 24px) */}
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: colors.titleColor,
            lineHeight: '24px',
            marginBottom: 20,
          }}
        >
          Have you applied for this certificate before in the last 1 year?
        </div>

        {/* Radio options */}
        {OPTIONS.map((opt, idx) => {
          const isSelected = selectedOption === opt.key;
          return (
            <div
              key={opt.key}
              onClick={() => setSelectedOption(opt.key)}
              style={{
                padding: '14px 16px',
                borderRadius: 12,
                backgroundColor: isSelected
                  ? colors.optionSelectedBg
                  : colors.optionUnselectedBg,
                border: `1.5px solid ${
                  isSelected
                    ? colors.optionSelectedBorder
                    : colors.optionUnselectedBorder
                }`,
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                marginBottom: idx === OPTIONS.length - 1 ? 0 : 12,
                transition: 'all 0.15s ease',
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  backgroundColor: colors.radioBg,
                  border: isSelected
                    ? `6px solid ${colors.radioBorderSelected}`
                    : `2px solid ${colors.radioBorderUnselected}`,
                  boxSizing: 'border-box',
                  flexShrink: 0,
                }}
              />
              <div style={{ marginLeft: 14, display: 'flex', flexDirection: 'column' }}>
                {/* Card Title (bM_Default typo: fontSize 14, fontWeight 500, lineHeight 18px) */}
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: '18px',
                    color: isSelected
                      ? colors.primaryColor
                      : colors.titleColor,
                  }}
                >
                  {opt.title}
                </div>
                {/* Card Description (bS_Default typo: fontSize 12, fontWeight 500, lineHeight 16px) */}
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: isSelected
                      ? isDark
                        ? UX4GColors.primary200
                        : UX4GColors.primary700
                      : colors.subtleText,
                    marginTop: 2,
                    lineHeight: '16px',
                  }}
                >
                  {opt.subtitle}
                </div>
              </div>
            </div>
          );
        })}
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
        {/* Top UX4G AppHeader with Menu Button */}
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

            {/* Right Side Menu Icon Button */}
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                border: `1.5px solid ${colors.menuBorder}`,
                backgroundColor: isDark ? 'transparent' : '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 20,
                  color: colors.primaryColor,
                }}
              >
                menu
              </span>
            </div>
          </div>
          <Ux4gDivider color={isDark ? UX4GColors.neutral800 : '#E5E7EB'} thickness={1} />
        </div>

        {/* Center Content */}
        {isCard ? (
          /* Card Style Variant */
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '16px 16px 12px 16px',
              overflowY: 'auto',
            }}
          >
            {/* Elevated Card Containing Question and Action Buttons */}
            <div
              style={{
                backgroundColor: colors.cardBg,
                borderRadius: 16,
                padding: '24px 20px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {renderQuestionBody()}

              <div style={{ height: 28 }} />

              {/* Action Buttons inside Card */}
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Ux4gButton
                  text="Check Eligibility"
                  onPress={() => {}}
                  enabled={selectedOption !== null}
                  size="large"
                  width="100%"
                  height={48}
                  backgroundColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
                  contentColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral50}
                />
                <div style={{ height: 8 }} />
                <Ux4gButton
                  text="Back"
                  onPress={() => {}}
                  variant="ghost"
                  size="large"
                  width="100%"
                  height={44}
                  contentColor={colors.primaryColor}
                />
              </div>
            </div>

            {/* Powered by Footer outside Card */}
            <div
              style={{
                paddingTop: 12,
                paddingBottom: 4,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                flexShrink: 0,
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
                  height: 22,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />
            </div>
          </div>
        ) : (
          /* Default Variant */
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
            }}
          >
            <div
              style={{
                padding: '24px 20px 0 20px',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
              }}
            >
              {renderQuestionBody()}
            </div>

            {/* Bottom Actions for Default */}
            <div
              style={{
                padding: '16px 20px 0 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: colors.screenBg,
                flexShrink: 0,
              }}
            >
              <Ux4gButton
                text="Continue"
                onPress={() => {}}
                enabled={selectedOption !== null}
                size="large"
                width="100%"
                height={48}
                backgroundColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
                contentColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral50}
              />
              <div style={{ height: 8 }} />
              <Ux4gButton
                text="Back"
                onPress={() => {}}
                variant="ghost"
                size="large"
                width="100%"
                height={44}
                contentColor={colors.primaryColor}
              />
            </div>

            {/* Powered by Footer */}
            <div
              style={{
                padding: '16px 0 20px 0',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                backgroundColor: colors.screenBg,
                flexShrink: 0,
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
                  height: 22,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Eligibility Final Question Step</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          The final question step in the eligibility wizard flow before checking eligibility. Shows a near-complete progress indicator, a question, multiple radio options, and a Check Eligibility call-to-action.
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

export default EligibilityFinalQuestionStepDoc;
