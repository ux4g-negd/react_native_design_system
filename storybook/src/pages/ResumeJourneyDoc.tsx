import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface ResumeJourneyDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

export const ResumeJourneyDoc: React.FC<ResumeJourneyDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');

  // Form pre-filled state for Resume Journey
  const [fullName, setFullName] = useState('Ramesh Kumar');
  const [panNumber, setPanNumber] = useState('ABCDE1234F');
  const [acceptTerms, setAcceptTerms] = useState(true);

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
      inputBorder: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
      inputBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      inputText: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtitleColor: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      labelColor: isDark ? UX4GColors.neutral200 : UX4GColors.neutral800,
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      stepperLineInactive: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      stepperCircleInactive: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
      stepperTextInactive: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
      stepperLabelText: isDark ? UX4GColors.neutral300 : UX4GColors.neutral600,
      footerText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
      backBtnText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      backBtnBorder: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
      bannerBg: isDark ? '#431407' : '#FFF7ED',
      bannerBorder: isDark ? '#7C2D12' : '#FFEDD5',
      bannerText: isDark ? '#FFD899' : '#AD4E00',
      bannerIcon: isDark ? '#FFBA4D' : '#FA8C16',
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
  TextInput,
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
  Ux4gStepper,
  Ux4gStatusBanner,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const ResumeJourneyCardScreen = ({
  isDark = false,
  onContinue = () => {},
  onBack = () => {},
}: {
  isDark?: boolean;
  onContinue?: () => void;
  onBack?: () => void;
}) => {
  const [fullName, setFullName] = useState('Ramesh Kumar');
  const [panNumber, setPanNumber] = useState('ABCDE1234F');
  const [acceptTerms, setAcceptTerms] = useState(true);

  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const subtleText = isDark ? UX4GColors.neutral300 : UX4GColors.neutral600;

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
                  { backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300 },
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
          <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} thickness={1} />
        </View>

        {/* Scrollable Content */}
        <ScrollView
          contentContainerStyle={styles.cardScrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Stepper */}
          <Ux4gStepper
            totalSteps={4}
            currentStep={3}
            stepSize={20}
            steps={[
              { title: '' },
              { title: '' },
              {
                title: 'Documents',
                titleStyle: {
                  fontSize: 11,
                  fontWeight: '600',
                  color: subtleText,
                },
              },
              { title: '' },
            ]}
          />

          <View style={{ height: 32 }} />

          {/* Alert Banner */}
          <Ux4gStatusBanner
            variant="warningLight"
            title="Resuming from Step 3 — review before continuing."
            leadingIcon={
              <Text style={{ color: isDark ? '#FFBA4D' : '#FA8C16', fontSize: 16 }}>
                ⚠
              </Text>
            }
          />

          <View style={{ height: 32 }} />

          {/* White Card */}
          <View
            style={[
              styles.cardContainer,
              { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' },
            ]}
          >
            {/* Title & Subtitle */}
            <Text
              style={[
                styles.title,
                { color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900 },
              ]}
            >
              Verify your details
            </Text>
            <View style={{ height: 8 }} />
            <Text style={[styles.subtitle, { color: subtleText }]}>
              Confirm the information below to proceed.
            </Text>

            <View style={{ height: 32 }} />

            {/* Input 1: Full name */}
            <Text
              style={[
                styles.inputLabel,
                { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral800 },
              ]}
            >
              Full name (as per Aadhaar)
            </Text>
            <View style={{ height: 6 }} />
            <TextInput
              style={[
                styles.inputField,
                {
                  borderColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
                  backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
                  color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
                },
              ]}
              value={fullName}
              onChangeText={setFullName}
            />

            <View style={{ height: 24 }} />

            {/* Input 2: PAN number */}
            <Text
              style={[
                styles.inputLabel,
                { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral800 },
              ]}
            >
              PAN number
            </Text>
            <View style={{ height: 6 }} />
            <TextInput
              style={[
                styles.inputField,
                {
                  borderColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
                  backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
                  color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
                },
              ]}
              value={panNumber}
              onChangeText={setPanNumber}
              autoCapitalize="characters"
            />

            <View style={{ height: 32 }} />

            {/* Checkbox */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setAcceptTerms(!acceptTerms)}
              style={styles.checkboxRow}
            >
              <View
                style={[
                  styles.checkboxBox,
                  {
                    borderColor: acceptTerms
                      ? primaryColor
                      : isDark
                      ? UX4GColors.neutral600
                      : UX4GColors.neutral400,
                    backgroundColor: acceptTerms ? primaryColor : 'transparent',
                  },
                ]}
              >
                {acceptTerms && <Text style={styles.checkmarkIcon}>✓</Text>}
              </View>
              <Text
                style={[
                  styles.checkboxLabel,
                  { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral800 },
                ]}
              >
                Accept terms and conditions{' '}
                <Text style={{ color: UX4GColors.red600 }}>*</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Actions */}
        <View style={styles.actionsContainer}>
          <Ux4gButton
            text="Continue"
            onPress={onContinue}
            enabled={acceptTerms}
            size="large"
            width="100%"
            height={48}
            backgroundColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
            contentColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral50}
          />
          <View style={{ height: 12 }} />
          <Ux4gButton
            text="Back"
            onPress={onBack}
            variant="outline"
            size="large"
            width="100%"
            height={48}
            contentColor={isDark ? UX4GColors.neutral400 : UX4GColors.neutral500}
            borderColor={isDark ? UX4GColors.neutral700 : UX4GColors.neutral300}
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
  emblemIcon: { height: 40, width: 28 },
  verticalDivider: { height: 32, width: 1 },
  unionIcon: { height: 32, width: 44 },
  cardScrollContainer: { paddingHorizontal: 24, paddingVertical: 32 },
  cardContainer: {
    padding: 24,
    borderRadius: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 28,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 21,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  inputField: {
    height: 44,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxBox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkmarkIcon: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    fontSize: 14,
    fontWeight: '500',
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
    fontWeight: '500',
    color: '#9CA3AF',
    marginBottom: 6,
  },
  digitalIndiaLogo: {
    height: 24,
    width: 90,
  },
});`;
    }

    return `import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
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
  Ux4gStepper,
  Ux4gStatusBanner,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const ResumeJourneyScreen = ({
  isDark = false,
  onContinue = () => {},
  onBack = () => {},
}: {
  isDark?: boolean;
  onContinue?: () => void;
  onBack?: () => void;
}) => {
  const [fullName, setFullName] = useState('Ramesh Kumar');
  const [panNumber, setPanNumber] = useState('ABCDE1234F');
  const [acceptTerms, setAcceptTerms] = useState(true);

  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const subtleText = isDark ? UX4GColors.neutral300 : UX4GColors.neutral600;

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
                { backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300 },
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
        <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} thickness={1} />

        {/* Main Content */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Stepper */}
          <Ux4gStepper
            totalSteps={4}
            currentStep={3}
            stepSize={20}
            steps={[
              { title: '' },
              { title: '' },
              {
                title: 'Documents',
                titleStyle: {
                  fontSize: 11,
                  fontWeight: '600',
                  color: subtleText,
                },
              },
              { title: '' },
            ]}
          />

          <View style={{ height: 32 }} />

          {/* Alert Banner */}
          <Ux4gStatusBanner
            variant="warningLight"
            title="Resuming from Step 3 — review before continuing."
            leadingIcon={
              <Text style={{ color: isDark ? '#FFBA4D' : '#FA8C16', fontSize: 16 }}>
                ⚠
              </Text>
            }
          />

          <View style={{ height: 40 }} />

          {/* Title & Subtitle */}
          <Text
            style={[
              styles.title,
              { color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900 },
            ]}
          >
            Verify your details
          </Text>
          <View style={{ height: 8 }} />
          <Text style={[styles.subtitle, { color: subtleText }]}>
            Confirm the information below to proceed.
          </Text>

          <View style={{ height: 32 }} />

          {/* Form Fields */}
          <Text
            style={[
              styles.inputLabel,
              { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral800 },
            ]}
          >
            Full name (as per Aadhaar)
          </Text>
          <View style={{ height: 6 }} />
          <TextInput
            style={[
              styles.inputField,
              {
                borderColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
                backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
                color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
              },
            ]}
            value={fullName}
            onChangeText={setFullName}
          />

          <View style={{ height: 24 }} />

          <Text
            style={[
              styles.inputLabel,
              { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral800 },
            ]}
          >
            PAN number
          </Text>
          <View style={{ height: 6 }} />
          <TextInput
            style={[
              styles.inputField,
              {
                borderColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
                backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
                color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
              },
            ]}
            value={panNumber}
            onChangeText={setPanNumber}
            autoCapitalize="characters"
          />

          <View style={{ height: 32 }} />

          {/* Checkbox */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setAcceptTerms(!acceptTerms)}
            style={styles.checkboxRow}
          >
            <View
              style={[
                styles.checkboxBox,
                {
                  borderColor: acceptTerms
                    ? primaryColor
                    : isDark
                    ? UX4GColors.neutral600
                    : UX4GColors.neutral400,
                  backgroundColor: acceptTerms ? primaryColor : 'transparent',
                },
              ]}
            >
              {acceptTerms && <Text style={styles.checkmarkIcon}>✓</Text>}
            </View>
            <Text
              style={[
                styles.checkboxLabel,
                { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral800 },
              ]}
            >
              Accept terms and conditions{' '}
              <Text style={{ color: UX4GColors.red600 }}>*</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Actions */}
        <View style={styles.actionsContainer}>
          <Ux4gButton
            text="Continue"
            onPress={onContinue}
            enabled={acceptTerms}
            size="large"
            width="100%"
            height={48}
            backgroundColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
            contentColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral50}
          />
          <View style={{ height: 12 }} />
          <Ux4gButton
            text="Back"
            onPress={onBack}
            variant="outline"
            size="large"
            width="100%"
            height={48}
            contentColor={isDark ? UX4GColors.neutral400 : UX4GColors.neutral500}
            borderColor={isDark ? UX4GColors.neutral700 : UX4GColors.neutral300}
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
  emblemIcon: { height: 40, width: 28 },
  verticalDivider: { height: 32, width: 1 },
  unionIcon: { height: 32, width: 44 },
  scrollContent: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 28,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 21,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  inputField: {
    height: 44,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxBox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkmarkIcon: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    fontSize: 14,
    fontWeight: '500',
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
    fontWeight: '500',
    color: '#9CA3AF',
    marginBottom: 6,
  },
  digitalIndiaLogo: {
    height: 24,
    width: 90,
  },
});`;
  }, [isDark, variant]);

  // Stepper Visual Component matching Flutter _HorizontalStepper exactly
  const renderStepper = () => (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Background Connecting Lines Layer */}
      <div
        style={{
          position: 'absolute',
          top: 9,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'row',
          zIndex: 1,
        }}
      >
        {/* Column 0 Lines */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ flex: 1 }} />
          <div style={{ width: 20 }} />
          <div style={{ flex: 1, height: 2, backgroundColor: colors.primaryColor }} />
        </div>

        {/* Column 1 Lines */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ flex: 1, height: 2, backgroundColor: colors.primaryColor }} />
          <div style={{ width: 20 }} />
          <div style={{ flex: 1, height: 2, backgroundColor: colors.primaryColor }} />
        </div>

        {/* Column 2 Lines */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ flex: 1, height: 2, backgroundColor: colors.primaryColor }} />
          <div style={{ width: 20 }} />
          <div style={{ flex: 1, height: 2, backgroundColor: colors.stepperLineInactive }} />
        </div>

        {/* Column 3 Lines */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ flex: 1, height: 2, backgroundColor: colors.stepperLineInactive }} />
          <div style={{ width: 20 }} />
          <div style={{ flex: 1 }} />
        </div>
      </div>

      {/* Foreground Step Icons & Labels Layer */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          width: '100%',
          zIndex: 2,
        }}
      >
        {/* Step 1: Completed */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: colors.primaryColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="12"
              height="12"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        {/* Step 2: Completed */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: colors.primaryColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="12"
              height="12"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        {/* Step 3: Current / Active */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: 'transparent',
              border: `2px solid ${colors.primaryColor}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxSizing: 'border-box',
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: colors.primaryColor,
              }}
            />
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 11,
              fontWeight: 600,
              color: colors.stepperLabelText,
              textAlign: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            Documents
          </div>
        </div>

        {/* Step 4: Pending / Inactive */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: 'transparent',
              border: `1.5px solid ${colors.stepperCircleInactive}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxSizing: 'border-box',
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: colors.stepperTextInactive,
                lineHeight: 1,
              }}
            >
              4
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  // Form Fields Component
  const renderFormContent = () => (
    <>
      {/* Title & Subtitle */}
      <div
        style={{
          fontSize: 24,
          fontWeight: 800,
          color: colors.titleColor,
          lineHeight: 1.2,
          marginBottom: 8,
          letterSpacing: '-0.3px',
        }}
      >
        Verify your details
      </div>
      <div
        style={{
          fontSize: 15,
          color: colors.subtitleColor,
          lineHeight: 1.4,
          marginBottom: 32,
        }}
      >
        Confirm the information below to proceed.
      </div>

      {/* Input 1: Full name */}
      <div style={{ width: '100%', marginBottom: 24 }}>
        <label
          style={{
            display: 'block',
            fontSize: 14,
            fontWeight: 600,
            color: colors.labelColor,
            marginBottom: 6,
          }}
        >
          Full name (as per Aadhaar)
        </label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder=""
          style={{
            width: '100%',
            height: 44,
            borderRadius: 8,
            border: `1px solid ${colors.inputBorder}`,
            backgroundColor: colors.inputBg,
            color: colors.inputText,
            padding: '0 12px',
            fontSize: 14,
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Input 2: PAN number */}
      <div style={{ width: '100%', marginBottom: 32 }}>
        <label
          style={{
            display: 'block',
            fontSize: 14,
            fontWeight: 600,
            color: colors.labelColor,
            marginBottom: 6,
          }}
        >
          PAN number
        </label>
        <input
          type="text"
          value={panNumber}
          onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
          placeholder=""
          style={{
            width: '100%',
            height: 44,
            borderRadius: 8,
            border: `1px solid ${colors.inputBorder}`,
            backgroundColor: colors.inputBg,
            color: colors.inputText,
            padding: '0 12px',
            fontSize: 14,
            outline: 'none',
            boxSizing: 'border-box',
            textTransform: 'uppercase',
          }}
        />
      </div>

      {/* Checkbox */}
      <div
        onClick={() => setAcceptTerms(!acceptTerms)}
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          userSelect: 'none',
          width: '100%',
        }}
      >
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: 4,
            border: `1.5px solid ${
              acceptTerms
                ? colors.primaryColor
                : isDark
                ? UX4GColors.neutral600
                : UX4GColors.neutral400
            }`,
            backgroundColor: acceptTerms ? colors.primaryColor : 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
            flexShrink: 0,
            transition: 'all 0.15s ease',
          }}
        >
          {acceptTerms && (
            <svg
              viewBox="0 0 24 24"
              width="12"
              height="12"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
        <span
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: colors.labelColor,
          }}
        >
          Accept terms and conditions{' '}
          <span style={{ color: UX4GColors.red600 }}>*</span>
        </span>
      </div>
    </>
  );

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
                  height: 40,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />
              <div
                style={{
                  width: 1,
                  height: 32,
                  backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
                }}
              />
              <UnionLogo size={32} isDark={isDark} />
            </div>
          </div>
          <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} thickness={1} />
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
            <div style={{ padding: '32px 24px' }}>
              {/* Stepper */}
              {renderStepper()}

              <div style={{ height: 32 }} />

              {/* Status Alert Banner */}
              <div
                style={{
                  backgroundColor: colors.bannerBg,
                  border: `1px solid ${colors.bannerBorder}`,
                  borderRadius: 8,
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill={colors.bannerIcon}
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: colors.bannerText,
                    lineHeight: 1.4,
                  }}
                >
                  Resuming from Step 3 — review before continuing.
                </span>
              </div>

              <div style={{ height: 32 }} />

              {/* White Card */}
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                }}
              >
                {renderFormContent()}
              </div>
            </div>
          ) : (
            <div
              style={{
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Stepper */}
              {renderStepper()}

              <div style={{ height: 32 }} />

              {/* Status Alert Banner */}
              <div
                style={{
                  backgroundColor: colors.bannerBg,
                  border: `1px solid ${colors.bannerBorder}`,
                  borderRadius: 8,
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill={colors.bannerIcon}
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: colors.bannerText,
                    lineHeight: 1.4,
                  }}
                >
                  Resuming from Step 3 — review before continuing.
                </span>
              </div>

              <div style={{ height: 40 }} />

              {/* Form Content */}
              {renderFormContent()}
            </div>
          )}
        </div>

        {/* Bottom Actions */}
        <div
          style={{
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: colors.screenBg,
            flexShrink: 0,
          }}
        >
          <Ux4gButton
            text="Continue"
            onPress={() => {}}
            enabled={acceptTerms}
            size="large"
            width="100%"
            height={48}
            backgroundColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
            contentColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral50}
          />
          <div style={{ height: 12 }} />
          <button
            type="button"
            style={{
              width: '100%',
              height: 48,
              borderRadius: 8,
              border: `1px solid ${colors.backBtnBorder}`,
              backgroundColor: 'transparent',
              color: colors.backBtnText,
              fontSize: 16,
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Back
          </button>
        </div>

        {/* Powered by Footer */}
        <div
          style={{
            padding: '0 0 24px 0',
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
              height: 24,
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
          <h1 className="wb-title">Resume Journey</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A pattern showing an application screen when a user resumes their journey from a previous step, featuring an alert banner and pre-filled data.
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

export default ResumeJourneyDoc;
