import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface EligibilityQuestionStepDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

export const EligibilityQuestionStepDoc: React.FC<EligibilityQuestionStepDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');
  const [selectedOption, setSelectedOption] = useState<'yes' | 'no' | null>('yes');

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
      progressTrack: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      optionSelectedBg: isDark ? UX4GColors.primary900 : UX4GColors.primary50,
      optionUnselectedBg: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
      radioBorderSelected: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      radioBorderUnselected: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      radioBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      footerText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
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
} from 'ux4g-react-native-design-system';

export const EligibilityQuestionCardScreen = ({
  isDark = false,
  onContinue = () => {},
  onBack = () => {},
}: {
  isDark?: boolean;
  onContinue?: (answer: string) => void;
  onBack?: () => void;
}) => {
  const [selected, setSelected] = useState<'yes' | 'no' | null>('yes');
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
          />
          <Ux4gDivider color={isDark ? UX4GColors.neutral800 : '#E5E7EB'} thickness={1} />
        </View>

        {/* Scrollable Area */}
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
            {/* Progress indicator */}
            <Text style={[styles.progressText, { color: subtleText }]}>
              Question 1 of 5
            </Text>
            <View style={{ height: 8 }} />
            <View
              style={[
                styles.progressBarTrack,
                { backgroundColor: isDark ? UX4GColors.neutral700 : '#E5E7EB' },
              ]}
            >
              <View
                style={[
                  styles.progressBarFill,
                  { backgroundColor: primaryColor, width: '20%' },
                ]}
              />
            </View>
            <View style={{ height: 20 }} />

            {/* Question */}
            <Text style={[styles.questionTitle, { color: titleColor }]}>
              Are you a resident of Maharashtra?
            </Text>
            <View style={{ height: 10 }} />
            <Text style={[styles.questionHelper, { color: subtleText }]}>
              You must be a resident to apply for a state-issued income certificate.
            </Text>
            <View style={{ height: 24 }} />

            {/* Option: Yes */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setSelected('yes')}
              style={[
                styles.optionContainer,
                {
                  backgroundColor:
                    selected === 'yes'
                      ? isDark
                        ? UX4GColors.primary900
                        : UX4GColors.primary50
                      : isDark
                      ? UX4GColors.neutral800
                      : UX4GColors.neutral100,
                },
              ]}
            >
              <View
                style={[
                  styles.radioCircle,
                  {
                    borderColor:
                      selected === 'yes'
                        ? primaryColor
                        : isDark
                        ? UX4GColors.neutral700
                        : UX4GColors.neutral200,
                    borderWidth: selected === 'yes' ? 6 : 2,
                    backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
                  },
                ]}
              />
              <View style={styles.optionTextCol}>
                <Text
                  style={[
                    styles.optionTitle,
                    {
                      color:
                        selected === 'yes'
                          ? primaryColor
                          : titleColor,
                    },
                  ]}
                >
                  Yes
                </Text>
                <Text style={[styles.optionSubtitle, { color: subtleText }]}>
                  I am a resident of Maharashtra
                </Text>
              </View>
            </TouchableOpacity>

            <View style={{ height: 12 }} />

            {/* Option: No */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setSelected('no')}
              style={[
                styles.optionContainer,
                {
                  backgroundColor:
                    selected === 'no'
                      ? isDark
                        ? UX4GColors.primary900
                        : UX4GColors.primary50
                      : isDark
                      ? UX4GColors.neutral800
                      : UX4GColors.neutral100,
                },
              ]}
            >
              <View
                style={[
                  styles.radioCircle,
                  {
                    borderColor:
                      selected === 'no'
                        ? primaryColor
                        : isDark
                        ? UX4GColors.neutral700
                        : UX4GColors.neutral200,
                    borderWidth: selected === 'no' ? 6 : 2,
                    backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
                  },
                ]}
              />
              <View style={styles.optionTextCol}>
                <Text
                  style={[
                    styles.optionTitle,
                    {
                      color:
                        selected === 'no'
                          ? primaryColor
                          : titleColor,
                    },
                  ]}
                >
                  No
                </Text>
                <Text style={[styles.optionSubtitle, { color: subtleText }]}>
                  I reside in a different state
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Actions & Footer Outside Card */}
        <Ux4gDivider color={isDark ? UX4GColors.neutral800 : '#E5E7EB'} thickness={1} />
        <View style={styles.actionsContainer}>
          <Ux4gButton
            text="Continue"
            onPress={() => selected && onContinue(selected)}
            enabled={selected !== null}
            size="large"
            width="100%"
            height={48}
            backgroundColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
            contentColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral50}
          />
          <View style={{ height: 4 }} />
          <Ux4gButton
            text="Back"
            onPress={onBack}
            variant="ghost"
            size="large"
            width="100%"
            height={48}
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
  safeArea: { flex: 1 },
  container: { flex: 1, position: 'relative' },
  emblemIcon: { height: 32, width: 22 },
  verticalDivider: { height: 20, width: 1 },
  unionIcon: { height: 32, width: 44 },
  cardScrollContainer: { padding: 16 },
  cardContainer: {
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
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
  questionTitle: {
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 28,
    letterSpacing: -0.3,
  },
  questionHelper: {
    fontSize: 14,
    lineHeight: 21,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
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
  optionTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  optionSubtitle: {
    fontSize: 13,
    marginTop: 2,
    lineHeight: 18,
  },
  actionsContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    alignItems: 'center',
  },
  footerContainer: {
    alignItems: 'center',
    paddingTop: 12,
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
} from 'ux4g-react-native-design-system';

export const EligibilityQuestionScreen = ({
  isDark = false,
  onContinue = () => {},
  onBack = () => {},
}: {
  isDark?: boolean;
  onContinue?: (answer: string) => void;
  onBack?: () => void;
}) => {
  const [selected, setSelected] = useState<'yes' | 'no' | null>('yes');
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
        />
        <Ux4gDivider color={isDark ? UX4GColors.neutral800 : '#E5E7EB'} thickness={1} />

        {/* Content */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Progress indicator */}
          <Text style={[styles.progressText, { color: subtleText }]}>
            Question 1 of 5
          </Text>
          <View style={{ height: 8 }} />
          <View
            style={[
              styles.progressBarTrack,
              { backgroundColor: isDark ? UX4GColors.neutral700 : '#E5E7EB' },
            ]}
          >
            <View
              style={[
                styles.progressBarFill,
                { backgroundColor: primaryColor, width: '20%' },
              ]}
            />
          </View>
          <View style={{ height: 20 }} />

          {/* Question */}
          <Text style={[styles.questionTitle, { color: titleColor }]}>
            Are you a resident of Maharashtra?
          </Text>
          <View style={{ height: 10 }} />
          <Text style={[styles.questionHelper, { color: subtleText }]}>
            You must be a resident to apply for a state-issued income certificate.
          </Text>
          <View style={{ height: 24 }} />

          {/* Option: Yes */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSelected('yes')}
            style={[
              styles.optionContainer,
              {
                backgroundColor:
                  selected === 'yes'
                    ? isDark
                      ? UX4GColors.primary900
                      : UX4GColors.primary50
                    : isDark
                    ? UX4GColors.neutral800
                    : UX4GColors.neutral100,
              },
            ]}
          >
            <View
              style={[
                styles.radioCircle,
                {
                  borderColor:
                    selected === 'yes'
                      ? primaryColor
                      : isDark
                      ? UX4GColors.neutral700
                      : UX4GColors.neutral200,
                  borderWidth: selected === 'yes' ? 6 : 2,
                  backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
                },
              ]}
            />
            <View style={styles.optionTextCol}>
              <Text
                style={[
                  styles.optionTitle,
                  {
                    color:
                      selected === 'yes'
                        ? primaryColor
                        : titleColor,
                  },
                ]}
              >
                Yes
              </Text>
              <Text style={[styles.optionSubtitle, { color: subtleText }]}>
                I am a resident of Maharashtra
              </Text>
            </View>
          </TouchableOpacity>

          <View style={{ height: 12 }} />

          {/* Option: No */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSelected('no')}
            style={[
              styles.optionContainer,
              {
                backgroundColor:
                  selected === 'no'
                    ? isDark
                      ? UX4GColors.primary900
                      : UX4GColors.primary50
                    : isDark
                    ? UX4GColors.neutral800
                    : UX4GColors.neutral100,
              },
            ]}
          >
            <View
              style={[
                styles.radioCircle,
                {
                  borderColor:
                    selected === 'no'
                      ? primaryColor
                      : isDark
                      ? UX4GColors.neutral700
                      : UX4GColors.neutral200,
                  borderWidth: selected === 'no' ? 6 : 2,
                  backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
                },
              ]}
            />
            <View style={styles.optionTextCol}>
              <Text
                style={[
                  styles.optionTitle,
                  {
                    color:
                      selected === 'no'
                        ? primaryColor
                        : titleColor,
                  },
                ]}
              >
                No
              </Text>
              <Text style={[styles.optionSubtitle, { color: subtleText }]}>
                I reside in a different state
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        {/* Actions */}
        <Ux4gDivider color={isDark ? UX4GColors.neutral800 : '#E5E7EB'} thickness={1} />
        <View style={styles.actionsContainer}>
          <Ux4gButton
            text="Continue"
            onPress={() => selected && onContinue(selected)}
            enabled={selected !== null}
            size="large"
            width="100%"
            height={48}
            backgroundColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
            contentColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral50}
          />
          <View style={{ height: 4 }} />
          <Ux4gButton
            text="Back"
            onPress={onBack}
            variant="ghost"
            size="large"
            width="100%"
            height={48}
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
  safeArea: { flex: 1 },
  container: { flex: 1, position: 'relative' },
  emblemIcon: { height: 32, width: 22 },
  verticalDivider: { height: 20, width: 1 },
  unionIcon: { height: 32, width: 44 },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
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
  questionTitle: {
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 26,
  },
  questionHelper: {
    fontSize: 14,
    lineHeight: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
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
  optionTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  optionSubtitle: {
    fontSize: 13,
    marginTop: 2,
    lineHeight: 18,
  },
  actionsContainer: {
    paddingHorizontal: 20,
    paddingTop: 12,
    alignItems: 'center',
  },
  footerContainer: {
    alignItems: 'center',
    paddingTop: 12,
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
          Question 1 of 5
        </div>

        {/* Progress bar (20%) */}
        <div
          style={{
            height: 6,
            borderRadius: 3,
            width: '100%',
            backgroundColor: colors.progressTrack,
            overflow: 'hidden',
            marginBottom: 20,
          }}
        >
          <div
            style={{
              height: '100%',
              borderRadius: 3,
              width: '20%',
              backgroundColor: colors.primaryColor,
            }}
          />
        </div>

        {/* Question Title */}
        <div
          style={{
            fontSize: isCard ? 22 : 20,
            fontWeight: 800,
            color: colors.titleColor,
            lineHeight: 1.3,
            letterSpacing: '-0.3px',
            marginBottom: 10,
          }}
        >
          Are you a resident of Maharashtra?
        </div>

        {/* Question Helper */}
        <div
          style={{
            fontSize: 14,
            color: colors.subtleText,
            lineHeight: 1.4,
            marginBottom: 24,
          }}
        >
          You must be a resident to apply for a state-issued income certificate.
        </div>

        {/* Option 1: Yes */}
        <div
          onClick={() => setSelectedOption('yes')}
          style={{
            padding: '14px 16px',
            borderRadius: 12,
            backgroundColor:
              selectedOption === 'yes'
                ? colors.optionSelectedBg
                : colors.optionUnselectedBg,
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            marginBottom: 12,
            transition: 'all 0.15s ease',
          }}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: '50%',
              backgroundColor: colors.radioBg,
              border:
                selectedOption === 'yes'
                  ? `6px solid ${colors.radioBorderSelected}`
                  : `2px solid ${colors.radioBorderUnselected}`,
              boxSizing: 'border-box',
              flexShrink: 0,
            }}
          />
          <div style={{ marginLeft: 14, display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontSize: 16,
                fontWeight: 700,
                color:
                  selectedOption === 'yes'
                    ? colors.primaryColor
                    : colors.titleColor,
              }}
            >
              Yes
            </div>
            <div
              style={{
                fontSize: 13,
                color: colors.subtleText,
                marginTop: 2,
                lineHeight: 1.3,
              }}
            >
              I am a resident of Maharashtra
            </div>
          </div>
        </div>

        {/* Option 2: No */}
        <div
          onClick={() => setSelectedOption('no')}
          style={{
            padding: '14px 16px',
            borderRadius: 12,
            backgroundColor:
              selectedOption === 'no'
                ? colors.optionSelectedBg
                : colors.optionUnselectedBg,
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: '50%',
              backgroundColor: colors.radioBg,
              border:
                selectedOption === 'no'
                  ? `6px solid ${colors.radioBorderSelected}`
                  : `2px solid ${colors.radioBorderUnselected}`,
              boxSizing: 'border-box',
              flexShrink: 0,
            }}
          />
          <div style={{ marginLeft: 14, display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontSize: 16,
                fontWeight: 700,
                color:
                  selectedOption === 'no'
                    ? colors.primaryColor
                    : colors.titleColor,
              }}
            >
              No
            </div>
            <div
              style={{
                fontSize: 13,
                color: colors.subtleText,
                marginTop: 2,
                lineHeight: 1.3,
              }}
            >
              I reside in a different state
            </div>
          </div>
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
                }}
              >
                {renderQuestionBody()}
              </div>
            </div>
          ) : (
            <div
              style={{
                padding: '20px 20px 0 20px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {renderQuestionBody()}
            </div>
          )}
        </div>

        {/* Bottom Actions */}
        <Ux4gDivider color={isDark ? UX4GColors.neutral800 : '#E5E7EB'} thickness={1} />
        <div
          style={{
            padding: '12px 20px 0 20px',
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
          <div style={{ height: 4 }} />
          <Ux4gButton
            text="Back"
            onPress={() => {}}
            variant="ghost"
            size="large"
            width="100%"
            height={48}
            contentColor={colors.primaryColor}
          />
        </div>

        {/* Powered by Footer */}
        <div
          style={{
            padding: '12px 0 20px 0',
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
          <h1 className="wb-title">Eligibility Question Step</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A single question step in the eligibility wizard flow. Shows a progress indicator, question with helper text, and radio options for the user to answer.
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

export default EligibilityQuestionStepDoc;
