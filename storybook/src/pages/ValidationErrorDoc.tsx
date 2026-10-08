import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface ValidationErrorDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

const DOMAIN_OPTIONS = [
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'education', label: 'Education' },
  { id: 'agriculture', label: 'Agriculture' },
  { id: 'finance', label: 'Finance' },
];

export const ValidationErrorDoc: React.FC<ValidationErrorDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');

  // Form interactive state for Validation Error
  const [fullName, setFullName] = useState('Ramesh Kumar');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [panNumber, setPanNumber] = useState('ABCDE12345');
  const [confirmDetails, setConfirmDetails] = useState(false);

  const colors = useMemo(() => {
    const isCard = variant === 'Card style';
    return {
      screenBg: isCard
        ? isDark
          ? UX4GColors.primary900
          : '#F4F0FF'
        : isDark
        ? UX4GColors.neutral900
        : '#FFFFFF',
      headerBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      cardBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral800 : '#E5E7EB',
      inputBorder: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
      inputBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      inputText: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      inputPlaceholder: isDark ? UX4GColors.neutral500 : '#9CA3AF',
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtitleColor: isDark ? UX4GColors.neutral300 : UX4GColors.neutral600,
      labelColor: isDark ? UX4GColors.neutral200 : UX4GColors.neutral800,
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      stepperLineInactive: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      stepperCircleInactive: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
      stepperTextInactive: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
      stepperLabelText: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700,
      footerText: isDark ? UX4GColors.neutral500 : '#9CA3AF',
      backBtnText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral900,
      backBtnBorder: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
      menuBtnBorder: isDark ? UX4GColors.primary700 : '#D8D6F6',
      errorColor: isDark ? '#F87171' : '#EF4444',
      bannerBg: isDark ? '#450A0A' : '#FEF2F2',
      bannerBorder: isDark ? '#7F1D1D' : '#FECACA',
      bannerText: isDark ? '#FECACA' : '#991B1B',
      bannerIcon: isDark ? '#F87171' : '#EF4444',
      inputErrorBorder: isDark ? '#F87171' : '#EF4444',
      captionErrorText: isDark ? '#FCA5A5' : '#DC2626',
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
  Ux4gStepper,
  Ux4gStatusBanner,
  Ux4gInputField,
  Ux4gSelectionDropdown,
  Ux4gCheckbox,
  UX4GColors,
} from 'ux4g-react-native-components';

export const ValidationErrorCardScreen = ({
  isDark = false,
  onContinue = () => {},
  onBack = () => {},
  onJumpToError = () => {},
}: {
  isDark?: boolean;
  onContinue?: () => void;
  onBack?: () => void;
  onJumpToError?: () => void;
}) => {
  const [fullName, setFullName] = useState('Ramesh Kumar');
  const [selectedDomain, setSelectedDomain] = useState<string[]>([]);
  const [panNumber, setPanNumber] = useState('ABCDE12345');
  const [confirmDetails, setConfirmDetails] = useState(false);

  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const subtleText = isDark ? UX4GColors.neutral300 : UX4GColors.neutral600;
  const errorColor = isDark ? '#F87171' : '#EF4444';

  const domainOptions = [
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'education', label: 'Education' },
    { id: 'agriculture', label: 'Agriculture' },
    { id: 'finance', label: 'Finance' },
  ];

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
            actions={[
              {
                customWidget: (
                  <TouchableOpacity
                    key="menu"
                    style={styles.menuBtn}
                    onPress={() => {}}
                  >
                    <Text style={styles.menuIcon}>☰</Text>
                  </TouchableOpacity>
                ),
              },
            ]}
          />
          <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} thickness={1} />
        </View>

        {/* Scrollable Content */}
        <ScrollView
          contentContainerStyle={styles.cardScrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* White Card */}
          <View
            style={[
              styles.cardContainer,
              { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' },
            ]}
          >
            {/* Stepper with error on Step 3 */}
            <Ux4gStepper
              totalSteps={4}
              currentStep={3}
              stepSize={20}
              steps={[
                { title: 'Eligibility' },
                { title: 'Personal' },
                {
                  title: 'Documents',
                  isError: true,
                  titleStyle: {
                    fontSize: 11,
                    fontWeight: '600',
                    color: subtleText,
                  },
                },
                { title: 'Submit' },
              ]}
            />

            <View style={{ height: 20 }} />

            {/* Global Error Banner */}
            <Ux4gStatusBanner
              variant="errorLight"
              title="Documents — 1 error found. Tap to jump."
              leadingIcon={
                <Text style={{ color: errorColor, fontSize: 16 }}>
                  ⚠
                </Text>
              }
              action={
                <TouchableOpacity onPress={onJumpToError}>
                  <Text style={[styles.jumpLink, { color: isDark ? '#FECACA' : '#991B1B' }]}>
                    Jump to error
                  </Text>
                </TouchableOpacity>
              }
            />

            <View style={{ height: 24 }} />

            {/* Title & Subtitle */}
            <Text
              style={[
                styles.title,
                { color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900 },
              ]}
            >
              Verify your details
            </Text>
            <View style={{ height: 6 }} />
            <Text style={[styles.subtitle, { color: subtleText }]}>
              Confirm the information below to proceed.
            </Text>

            <View style={{ height: 24 }} />

            {/* Input 1: Full name */}
            <Ux4gInputField
              label="Full name (as per Aadhaar)"
              placeholder="Ramesh Kumar"
              value={fullName}
              onValueChange={setFullName}
              size="large"
            />

            <View style={{ height: 16 }} />

            {/* Input 2: Select domain */}
            <Ux4gSelectionDropdown
              label="Select domain"
              placeholder="Please select.."
              options={domainOptions}
              selectedOptionIds={selectedDomain}
              onSelectionChange={setSelectedDomain}
              size="l"
            />

            <View style={{ height: 16 }} />

            {/* Input 3: PAN number (with error status) */}
            <Ux4gInputField
              label="PAN number"
              placeholder="ABCDE1234F"
              value={panNumber}
              onValueChange={(val) => setPanNumber(val.toUpperCase())}
              status="error"
              caption="Enter a valid 10-character PAN (e.g. ABCDE1234F)."
              size="large"
            />

            <View style={{ height: 20 }} />

            {/* Checkbox */}
            <Ux4gCheckbox
              value={confirmDetails}
              onChanged={(val) => setConfirmDetails(!!val)}
              label="I confirm these details match my official documents."
              isRequired={true}
              size="small"
            />

            <View style={{ height: 24 }} />

            {/* Action Buttons Inside Card */}
            <Ux4gButton
              text="Continue"
              onPress={onContinue}
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
              contentColor={isDark ? UX4GColors.neutral200 : UX4GColors.neutral900}
              borderColor={isDark ? UX4GColors.neutral700 : UX4GColors.neutral300}
            />
          </View>

          {/* Footer outside Card */}
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
        </ScrollView>
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
    borderColor: '#D8D6F6',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 18,
    color: UX4GColors.primary,
  },
  safeArea: { flex: 1 },
  container: { flex: 1, position: 'relative' },
  emblemIcon: { height: 40, width: 28 },
  verticalDivider: { height: 32, width: 1 },
  unionIcon: { height: 32, width: 44 },
  cardScrollContainer: { paddingHorizontal: 16, paddingVertical: 20 },
  cardContainer: {
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  jumpLink: {
    fontSize: 13,
    fontWeight: '700',
    marginTop: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 26,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
  },
  footerContainer: {
    alignItems: 'center',
    paddingVertical: 24,
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
  Ux4gInputField,
  Ux4gSelectionDropdown,
  Ux4gCheckbox,
  UX4GColors,
} from 'ux4g-react-native-components';

export const ValidationErrorScreen = ({
  isDark = false,
  onContinue = () => {},
  onBack = () => {},
  onJumpToError = () => {},
}: {
  isDark?: boolean;
  onContinue?: () => void;
  onBack?: () => void;
  onJumpToError?: () => void;
}) => {
  const [fullName, setFullName] = useState('Ramesh Kumar');
  const [selectedDomain, setSelectedDomain] = useState<string[]>([]);
  const [panNumber, setPanNumber] = useState('ABCDE12345');
  const [confirmDetails, setConfirmDetails] = useState(false);

  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const subtleText = isDark ? UX4GColors.neutral300 : UX4GColors.neutral600;
  const errorColor = isDark ? '#F87171' : '#EF4444';

  const domainOptions = [
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'education', label: 'Education' },
    { id: 'agriculture', label: 'Agriculture' },
    { id: 'finance', label: 'Finance' },
  ];

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' },
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
          actions={[
            {
              customWidget: (
                <TouchableOpacity
                  key="menu"
                  style={styles.menuBtn}
                  onPress={() => {}}
                >
                  <Text style={styles.menuIcon}>☰</Text>
                </TouchableOpacity>
              ),
            },
          ]}
        />
        <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} thickness={1} />

        {/* Main Content */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Stepper with error on Step 3 */}
          <Ux4gStepper
            totalSteps={4}
            currentStep={3}
            stepSize={20}
            steps={[
              { title: 'Eligibility' },
              { title: 'Personal' },
              {
                title: 'Documents',
                isError: true,
                titleStyle: {
                  fontSize: 11,
                  fontWeight: '600',
                  color: subtleText,
                },
              },
              { title: 'Submit' },
            ]}
          />

          <View style={{ height: 20 }} />

          {/* Global Error Banner */}
          <Ux4gStatusBanner
            variant="errorLight"
            title="Documents — 1 error found. Tap to jump."
            leadingIcon={
              <Text style={{ color: errorColor, fontSize: 16 }}>
                ⚠
              </Text>
            }
            action={
              <TouchableOpacity onPress={onJumpToError}>
                <Text style={[styles.jumpLink, { color: isDark ? '#FECACA' : '#991B1B' }]}>
                  Jump to error
                </Text>
              </TouchableOpacity>
            }
          />

          <View style={{ height: 24 }} />

          {/* Title & Subtitle */}
          <Text
            style={[
              styles.title,
              { color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900 },
            ]}
          >
            Verify your details
          </Text>
          <View style={{ height: 6 }} />
          <Text style={[styles.subtitle, { color: subtleText }]}>
            Confirm the information below to proceed.
          </Text>

          <View style={{ height: 24 }} />

          {/* Form Fields using UX4G Components */}
          {/* Input 1: Full name */}
          <Ux4gInputField
            label="Full name (as per Aadhaar)"
            placeholder="Ramesh Kumar"
            value={fullName}
            onValueChange={setFullName}
            size="large"
          />

          <View style={{ height: 16 }} />

          {/* Input 2: Select domain */}
          <Ux4gSelectionDropdown
            label="Select domain"
            placeholder="Please select.."
            options={domainOptions}
            selectedOptionIds={selectedDomain}
            onSelectionChange={setSelectedDomain}
            size="l"
          />

          <View style={{ height: 16 }} />

          {/* Input 3: PAN number (with error status) */}
          <Ux4gInputField
            label="PAN number"
            placeholder="ABCDE1234F"
            value={panNumber}
            onValueChange={(val) => setPanNumber(val.toUpperCase())}
            status="error"
            caption="Enter a valid 10-character PAN (e.g. ABCDE1234F)."
            size="large"
          />

          <View style={{ height: 20 }} />

          {/* Checkbox */}
          <Ux4gCheckbox
            value={confirmDetails}
            onChanged={(val) => setConfirmDetails(!!val)}
            label="I confirm these details match my official documents."
            isRequired={true}
            size="small"
          />

          <View style={{ height: 28 }} />

          {/* Actions */}
          <Ux4gButton
            text="Continue"
            onPress={onContinue}
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
            contentColor={isDark ? UX4GColors.neutral200 : UX4GColors.neutral900}
            borderColor={isDark ? UX4GColors.neutral700 : UX4GColors.neutral300}
          />

          <View style={{ height: 24 }} />

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
        </ScrollView>
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
    borderColor: '#D8D6F6',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 18,
    color: UX4GColors.primary,
  },
  safeArea: { flex: 1 },
  container: { flex: 1, position: 'relative' },
  emblemIcon: { height: 40, width: 28 },
  verticalDivider: { height: 32, width: 1 },
  unionIcon: { height: 32, width: 44 },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  jumpLink: {
    fontSize: 13,
    fontWeight: '700',
    marginTop: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 26,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
  },
  footerContainer: {
    alignItems: 'center',
    paddingVertical: 24,
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
          top: 9, // Centered vertically on the 20px step icon
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
          <div
            style={{
              marginTop: 8,
              fontSize: 11,
              fontWeight: 500,
              color: colors.stepperLabelText,
              textAlign: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            Eligibility
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
          <div
            style={{
              marginTop: 8,
              fontSize: 11,
              fontWeight: 500,
              color: colors.stepperLabelText,
              textAlign: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            Personal
          </div>
        </div>

        {/* Step 3: Error Step (Red exclamation circle) */}
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
              border: `2px solid ${colors.errorColor}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxSizing: 'border-box',
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="12"
              height="12"
              fill={colors.errorColor}
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
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
          <div
            style={{
              marginTop: 8,
              fontSize: 11,
              fontWeight: 500,
              color: colors.stepperTextInactive,
              textAlign: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            Submit
          </div>
        </div>
      </div>
    </div>
  );

  // Status Error Banner Component
  const renderErrorBanner = () => (
    <div
      style={{
        backgroundColor: colors.bannerBg,
        border: `1px solid ${colors.bannerBorder}`,
        borderRadius: 8,
        padding: '12px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill={colors.bannerIcon}
          style={{ flexShrink: 0 }}
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
        <span
          style={{
            fontSize: 12.5,
            fontWeight: 500,
            color: colors.bannerText,
            lineHeight: 1.4,
          }}
        >
          Documents — 1 error found. Tap to jump.
        </span>
      </div>
      <div
        style={{
          paddingLeft: 26,
          fontSize: 12.5,
          fontWeight: 700,
          color: colors.bannerText,
          cursor: 'pointer',
        }}
      >
        Jump to error
      </div>
    </div>
  );

  // Form Fields Component matching UX4G Components behavior
  const renderFormContent = () => {
    const selectedDomainObj = DOMAIN_OPTIONS.find((o) => o.id === selectedDomain);

    return (
      <>
        {/* Title & Subtitle */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: colors.titleColor,
            lineHeight: 1.2,
            marginBottom: 6,
            letterSpacing: '-0.3px',
          }}
        >
          Verify your details
        </div>
        <div
          style={{
            fontSize: 14,
            color: colors.subtitleColor,
            lineHeight: 1.4,
            marginBottom: 24,
          }}
        >
          Confirm the information below to proceed.
        </div>

        {/* Ux4gInputField 1: Full name */}
        <div style={{ width: '100%', marginBottom: 16 }}>
          <label
            style={{
              display: 'block',
              fontSize: 13,
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
            placeholder="Ramesh Kumar"
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
              transition: 'border-color 0.15s, box-shadow 0.15s',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = colors.primaryColor;
              e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.primaryColor}22`;
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = colors.inputBorder;
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Ux4gSelectionDropdown: Select domain */}
        <div style={{ width: '100%', marginBottom: 16, position: 'relative' }}>
          <label
            style={{
              display: 'block',
              fontSize: 13,
              fontWeight: 600,
              color: colors.labelColor,
              marginBottom: 6,
            }}
          >
            Select domain
          </label>

          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            style={{
              width: '100%',
              height: 44,
              borderRadius: 8,
              border: `1px solid ${isDropdownOpen ? colors.primaryColor : colors.inputBorder}`,
              boxShadow: isDropdownOpen ? `0 0 0 3px ${colors.primaryColor}22` : 'none',
              backgroundColor: colors.inputBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 12px',
              cursor: 'pointer',
              boxSizing: 'border-box',
              userSelect: 'none',
              transition: 'border-color 0.15s, box-shadow 0.15s',
            }}
          >
            <span
              style={{
                fontSize: 14,
                color: selectedDomainObj ? colors.inputText : colors.inputPlaceholder,
              }}
            >
              {selectedDomainObj ? selectedDomainObj.label : 'Please select..'}
            </span>
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke={colors.subtitleColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease',
              }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>

          {/* Floating Dropdown Overlay Menu */}
          {isDropdownOpen && (
            <>
              <div
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 99,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDropdownOpen(false);
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 4px)',
                  left: 0,
                  right: 0,
                  backgroundColor: colors.inputBg,
                  borderRadius: 8,
                  border: `1px solid ${colors.border}`,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.14)',
                  zIndex: 100,
                  overflow: 'hidden',
                  padding: '4px 0',
                }}
              >
                {DOMAIN_OPTIONS.map((opt) => {
                  const isSelected = selectedDomain === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => {
                        setSelectedDomain(opt.id);
                        setIsDropdownOpen(false);
                      }}
                      style={{
                        padding: '10px 14px',
                        fontSize: 13,
                        fontWeight: isSelected ? 600 : 400,
                        color: isSelected ? colors.primaryColor : colors.inputText,
                        backgroundColor: isSelected
                          ? isDark
                            ? UX4GColors.primary900
                            : UX4GColors.primary50
                          : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        transition: 'background-color 0.15s',
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.backgroundColor = isDark
                            ? UX4GColors.neutral800
                            : UX4GColors.neutral100;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      <span>{opt.label}</span>
                      {isSelected && (
                        <svg
                          viewBox="0 0 24 24"
                          width="14"
                          height="14"
                          fill="none"
                          stroke={colors.primaryColor}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {/* Ux4gInputField 2: PAN number with Error */}
        <div style={{ width: '100%', marginBottom: 20 }}>
          <label
            style={{
              display: 'block',
              fontSize: 13,
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
            placeholder="ABCDE1234F"
            style={{
              width: '100%',
              height: 44,
              borderRadius: 8,
              border: `1.5px solid ${colors.inputErrorBorder}`,
              backgroundColor: colors.inputBg,
              color: colors.inputText,
              padding: '0 12px',
              fontSize: 14,
              outline: 'none',
              boxSizing: 'border-box',
              textTransform: 'uppercase',
            }}
          />
          {/* Error message caption */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              marginTop: 6,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="13"
              height="13"
              fill={colors.captionErrorText}
              style={{ flexShrink: 0 }}
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            <span
              style={{
                fontSize: 12,
                color: colors.captionErrorText,
                lineHeight: 1.3,
              }}
            >
              Enter a valid 10-character PAN (e.g. ABCDE1234F).
            </span>
          </div>
        </div>

        {/* Ux4gCheckbox: Official documents agreement */}
        <div
          onClick={() => setConfirmDetails(!confirmDetails)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            userSelect: 'none',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', flex: 1, marginRight: 8 }}>
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 4,
                border: `1.5px solid ${
                  confirmDetails
                    ? colors.primaryColor
                    : isDark
                    ? UX4GColors.neutral600
                    : UX4GColors.neutral400
                }`,
                backgroundColor: confirmDetails ? colors.primaryColor : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
                flexShrink: 0,
                transition: 'all 0.15s ease',
              }}
            >
              {confirmDetails && (
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
                fontSize: 13,
                fontWeight: 500,
                color: colors.labelColor,
                lineHeight: 1.3,
              }}
            >
              I confirm these details match my official documents.
            </span>
          </div>
          <span style={{ color: UX4GColors.red600, fontWeight: 700, fontSize: 16 }}>*</span>
        </div>
      </>
    );
  };

  const renderButtons = () => (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Ux4gButton
        text="Continue"
        onPress={() => {}}
        size="large"
        width="100%"
        height={46}
        backgroundColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
        contentColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral50}
      />
      <div style={{ height: 10 }} />
      <button
        type="button"
        style={{
          width: '100%',
          height: 46,
          borderRadius: 8,
          border: `1px solid ${colors.backBtnBorder}`,
          backgroundColor: 'transparent',
          color: colors.backBtnText,
          fontSize: 15,
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
  );

  const renderLiveMockup = () => {
    const isCard = variant === 'Card style';

    return (
      <div
        style={{
          width: 360,
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
                  height: 36,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />
              <div
                style={{
                  width: 1,
                  height: 28,
                  backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
                }}
              />
              <UnionLogo size={28} isDark={isDark} />
            </div>

            {/* Menu button */}
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                border: `1.5px solid ${colors.menuBtnBorder}`,
                backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 3.5,
                cursor: 'pointer',
              }}
            >
              <div style={{ width: 16, height: 2, backgroundColor: colors.primaryColor, borderRadius: 1 }} />
              <div style={{ width: 16, height: 2, backgroundColor: colors.primaryColor, borderRadius: 1 }} />
              <div style={{ width: 16, height: 2, backgroundColor: colors.primaryColor, borderRadius: 1 }} />
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
            <div style={{ padding: '20px 16px' }}>
              {/* White Card containing Stepper, Error Banner, Form Content, and Action Buttons */}
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                  border: `1px solid ${isDark ? UX4GColors.neutral800 : '#F3F4F6'}`,
                }}
              >
                {renderStepper()}

                <div style={{ height: 16 }} />

                {renderErrorBanner()}

                <div style={{ height: 24 }} />

                {renderFormContent()}

                <div style={{ height: 24 }} />

                {renderButtons()}
              </div>

              <div style={{ height: 24 }} />

              {/* Powered by Footer outside card */}
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
          ) : (
            <div
              style={{
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Stepper */}
              {renderStepper()}

              <div style={{ height: 16 }} />

              {/* Status Error Banner */}
              {renderErrorBanner()}

              <div style={{ height: 24 }} />

              {/* Form Content */}
              {renderFormContent()}

              <div style={{ height: 28 }} />

              {/* Action Buttons */}
              {renderButtons()}

              <div style={{ height: 24 }} />

              {/* Powered by Footer */}
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
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Validation Error</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A pattern showing an application screen with validation errors across steps and form fields, featuring a global error banner and input error states.
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

export default ValidationErrorDoc;
