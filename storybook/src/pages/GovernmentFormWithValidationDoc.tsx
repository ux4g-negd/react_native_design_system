import React, { useState, useMemo, useEffect, useRef } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface GovernmentFormWithValidationDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

const STATE_OPTIONS = [
  { id: 'dl', label: 'Delhi' },
  { id: 'mh', label: 'Maharashtra' },
  { id: 'up', label: 'Uttar Pradesh' },
  { id: 'ka', label: 'Karnataka' },
  { id: 'tn', label: 'Tamil Nadu' },
];

export const GovernmentFormWithValidationDoc: React.FC<GovernmentFormWithValidationDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');

  // Form interactive states
  const [fullName] = useState('Ramesh Kumar');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [maritalStatus, setMaritalStatus] = useState<string | null>(null);
  const [reason, setReason] = useState('');
  const [income, setIncome] = useState(0);
  const [confirmAccuracy, setConfirmAccuracy] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

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
      inputDisabledBg: isDark ? UX4GColors.neutral800 : '#E5E7EB',
      inputDisabledText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral900,
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
      backBtnText: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      backBtnBorder: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
      menuBtnBorder: isDark ? UX4GColors.primary700 : '#D8D6F6',
      bannerBg: isDark ? '#064E3B' : '#F2FCEF',
      bannerBorder: isDark ? '#065F46' : 'transparent',
      bannerText: isDark ? '#34D399' : '#00522C',
      bannerIcon: isDark ? '#34D399' : '#128937',
    };
  }, [isDark, variant]);

  const defaultCodeString = useMemo(() => {
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
  Ux4gInputField,
  Ux4gSelectionDropdown,
  Ux4gRadioButton,
  Ux4gTextArea,
  Ux4gSlider,
  Ux4gCheckbox,
  Ux4gStepper,
  Ux4gStatusBanner,
  UX4GColors,
} from 'ux4g-react-native-components';

export const GovernmentFormScreen = ({
  isDark = false,
  onBack = () => {},
  onContinue = () => {},
  onSaveDraft = () => {},
}: {
  isDark?: boolean;
  onBack?: () => void;
  onContinue?: () => void;
  onSaveDraft?: () => void;
}) => {
  const [fullName] = useState('Ramesh Kumar');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [selectedState, setSelectedState] = useState<string[]>([]);
  const [maritalStatus, setMaritalStatus] = useState<string | null>(null);
  const [reason, setReason] = useState('');
  const [income, setIncome] = useState(0);
  const [confirmAccuracy, setConfirmAccuracy] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleText = isDark ? UX4GColors.neutral300 : UX4GColors.neutral600;

  const stateOptions = [
    { id: 'dl', label: 'Delhi' },
    { id: 'mh', label: 'Maharashtra' },
    { id: 'up', label: 'Uttar Pradesh' },
    { id: 'ka', label: 'Karnataka' },
    { id: 'tn', label: 'Tamil Nadu' },
  ];

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' },
      ]}
    >
      <View style={styles.container}>
        {/* Top Header */}
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

        {/* Scrollable Content */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Back Navigation Link */}
          <TouchableOpacity onPress={onBack} style={styles.backRow}>
            <Text style={[styles.backText, { color: primaryColor }]}>← Back</Text>
          </TouchableOpacity>

          <View style={{ height: 16 }} />

          {/* Stepper */}
          <Ux4gStepper
            totalSteps={4}
            currentStep={2}
            stepSize={20}
            steps={[
              { title: 'Eligibility' },
              {
                title: 'Personal',
                titleStyle: {
                  fontSize: 11,
                  fontWeight: '600',
                  color: primaryColor,
                },
              },
              { title: 'Documents' },
              { title: 'Submit' },
            ]}
          />

          <View style={{ height: 16 }} />

          {/* Saved Status Banner */}
          <Ux4gStatusBanner
            variant="successLight"
            title="Saved 3:14 PM"
            leadingIcon={
              <Text style={{ color: '#128937', fontSize: 16 }}>✓</Text>
            }
          />

          <View style={{ height: 24 }} />

          {/* Section Heading */}
          <Text style={[styles.heading, { color: titleColor }]}>
            Personal information
          </Text>
          <View style={{ height: 6 }} />
          <Text style={[styles.subheading, { color: subtleText }]}>
            Please enter your details.
          </Text>

          <View style={{ height: 24 }} />

          {/* 1. Full name (Disabled / Pre-filled) */}
          <Ux4gInputField
            label="Full name"
            value={fullName}
            enabled={false}
            size="large"
          />

          {/* Aadhaar Update Link */}
          <TouchableOpacity onPress={() => {}} style={styles.uidaiLink}>
            <Text style={{ fontSize: 12, color: primaryColor, fontWeight: '500' }}>
              From Aadhaar · Update via UIDAI ↗
            </Text>
          </TouchableOpacity>

          <View style={{ height: 16 }} />

          {/* 2. Mobile number */}
          <Ux4gInputField
            label="Mobile number"
            placeholder="Placeholder"
            value={mobileNumber}
            onValueChange={setMobileNumber}
            keyboardType="phone-pad"
            size="large"
          />

          <View style={{ height: 16 }} />

          {/* 3. Email address */}
          <Ux4gInputField
            label="Email address"
            placeholder="Placeholder"
            value={emailAddress}
            onValueChange={setEmailAddress}
            keyboardType="email-address"
            size="large"
          />

          <View style={{ height: 16 }} />

          {/* 4. Aadhaar number */}
          <Ux4gInputField
            label="Aadhaar number"
            placeholder="Placeholder"
            value={aadhaarNumber}
            onValueChange={setAadhaarNumber}
            keyboardType="numeric"
            maxLength={14}
            size="large"
          />

          <View style={{ height: 16 }} />

          {/* 5. State of residence */}
          <Ux4gSelectionDropdown
            label="State of residence"
            placeholder="Please select.."
            options={stateOptions}
            selectedOptionIds={selectedState}
            onSelectionChange={setSelectedState}
            size="l"
          />

          <View style={{ height: 20 }} />

          {/* 6. Marital status Radio buttons */}
          <Text style={[styles.inputLabel, { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral800 }]}>
            Your marital status
          </Text>
          <View style={{ height: 8 }} />
          <View style={{ gap: 10 }}>
            {[
              { label: 'Single', value: 'Single' },
              { label: 'Married', value: 'Married' },
              { label: 'Divorced or widowed', value: 'Divorced' },
              { label: 'Option 4', value: 'Option4' },
            ].map((opt) => (
              <Ux4gRadioButton
                key={opt.value}
                label={opt.label}
                selected={maritalStatus === opt.value}
                onSelect={() => setMaritalStatus(opt.value)}
              />
            ))}
          </View>

          <View style={{ height: 20 }} />

          {/* 7. Brief reason textarea */}
          <Ux4gTextArea
            label="Brief reason for application (optional)"
            placeholder="Placeholder"
            value={reason}
            onValueChange={setReason}
            rows={3}
          />

          <View style={{ height: 20 }} />

          {/* 8. Annual Income Slider */}
          <Ux4gSlider
            label="Annual Income (Lakh ₹)"
            isRequired={true}
            value={income}
            min={0}
            max={10}
            step={1}
            onValueChange={setIncome}
          />

          <View style={{ height: 20 }} />

          {/* Checkbox 1: Accuracy confirmation */}
          <Ux4gCheckbox
            value={confirmAccuracy}
            onChanged={(val) => setConfirmAccuracy(!!val)}
            label="I confirm the above information is accurate and authorise verification."
            isRequired={true}
            size="small"
          />

          <View style={{ height: 14 }} />

          {/* Checkbox 2: Accept terms */}
          <Ux4gCheckbox
            value={acceptTerms}
            onChanged={(val) => setAcceptTerms(!!val)}
            label="Accept terms and conditions"
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
            text="Save as Draft"
            onPress={onSaveDraft}
            variant="outline"
            size="large"
            width="100%"
            height={48}
            contentColor={primaryColor}
            borderColor={isDark ? UX4GColors.primary700 : '#C7D2FE'}
          />

          <View style={{ height: 24 }} />

          {/* Footer */}
          <View style={styles.footerContainer}>
            <Text style={styles.poweredByText}>Powered by -</Text>
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
    paddingVertical: 20,
  },
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 14,
    fontWeight: '600',
  },
  heading: {
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 26,
  },
  subheading: {
    fontSize: 14,
    lineHeight: 20,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '600',
  },
  uidaiLink: {
    marginTop: 6,
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
  }, []);

  const cardCodeString = useMemo(() => {
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
  Ux4gInputField,
  Ux4gSelectionDropdown,
  Ux4gRadioButton,
  Ux4gTextArea,
  Ux4gSlider,
  Ux4gCheckbox,
  Ux4gStepper,
  Ux4gStatusBanner,
  UX4GColors,
} from 'ux4g-react-native-components';

export const GovernmentFormCardScreen = ({
  isDark = false,
  onBack = () => {},
  onContinue = () => {},
  onSaveDraft = () => {},
}: {
  isDark?: boolean;
  onBack?: () => void;
  onContinue?: () => void;
  onSaveDraft?: () => void;
}) => {
  const [fullName] = useState('Ramesh Kumar');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [selectedState, setSelectedState] = useState<string[]>([]);
  const [maritalStatus, setMaritalStatus] = useState<string | null>(null);
  const [reason, setReason] = useState('');
  const [income, setIncome] = useState(0);
  const [confirmAccuracy, setConfirmAccuracy] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleText = isDark ? UX4GColors.neutral300 : UX4GColors.neutral600;

  const stateOptions = [
    { id: 'dl', label: 'Delhi' },
    { id: 'mh', label: 'Maharashtra' },
    { id: 'up', label: 'Uttar Pradesh' },
    { id: 'ka', label: 'Karnataka' },
    { id: 'tn', label: 'Tamil Nadu' },
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
        {/* Top Header */}
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

        {/* Scrollable Content with White Card */}
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
            {/* Back Navigation Link */}
            <TouchableOpacity onPress={onBack} style={styles.backRow}>
              <Text style={[styles.backText, { color: primaryColor }]}>← Back</Text>
            </TouchableOpacity>

            <View style={{ height: 16 }} />

            {/* Stepper */}
            <Ux4gStepper
              totalSteps={4}
              currentStep={2}
              stepSize={20}
              steps={[
                { title: 'Eligibility' },
                {
                  title: 'Personal',
                  titleStyle: {
                    fontSize: 11,
                    fontWeight: '600',
                    color: primaryColor,
                  },
                },
                { title: 'Documents' },
                { title: 'Submit' },
              ]}
            />

            <View style={{ height: 16 }} />

            {/* Saved Status Banner */}
            <Ux4gStatusBanner
              variant="successLight"
              title="Saved 3:14 PM"
              leadingIcon={
                <Text style={{ color: '#128937', fontSize: 16 }}>✓</Text>
              }
            />

            <View style={{ height: 24 }} />

            {/* Section Heading */}
            <Text style={[styles.heading, { color: titleColor }]}>
              Personal information
            </Text>
            <View style={{ height: 6 }} />
            <Text style={[styles.subheading, { color: subtleText }]}>
              Please enter your details.
            </Text>

            <View style={{ height: 24 }} />

            {/* 1. Full name (Disabled / Pre-filled) */}
            <Ux4gInputField
              label="Full name"
              value={fullName}
              enabled={false}
              size="large"
            />

            {/* Aadhaar Update Link */}
            <TouchableOpacity onPress={() => {}} style={styles.uidaiLink}>
              <Text style={{ fontSize: 12, color: primaryColor, fontWeight: '500' }}>
                From Aadhaar · Update via UIDAI ↗
              </Text>
            </TouchableOpacity>

            <View style={{ height: 16 }} />

            {/* 2. Mobile number */}
            <Ux4gInputField
              label="Mobile number"
              placeholder="Placeholder"
              value={mobileNumber}
              onValueChange={setMobileNumber}
              keyboardType="phone-pad"
              size="large"
            />

            <View style={{ height: 16 }} />

            {/* 3. Email address */}
            <Ux4gInputField
              label="Email address"
              placeholder="Placeholder"
              value={emailAddress}
              onValueChange={setEmailAddress}
              keyboardType="email-address"
              size="large"
            />

            <View style={{ height: 16 }} />

            {/* 4. Aadhaar number */}
            <Ux4gInputField
              label="Aadhaar number"
              placeholder="Placeholder"
              value={aadhaarNumber}
              onValueChange={setAadhaarNumber}
              keyboardType="numeric"
              maxLength={14}
              size="large"
            />

            <View style={{ height: 16 }} />

            {/* 5. State of residence */}
            <Ux4gSelectionDropdown
              label="State of residence"
              placeholder="Please select.."
              options={stateOptions}
              selectedOptionIds={selectedState}
              onSelectionChange={setSelectedState}
              size="l"
            />

            <View style={{ height: 20 }} />

            {/* 6. Marital status Radio buttons */}
            <Text style={[styles.inputLabel, { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral800 }]}>
              Your marital status
            </Text>
            <View style={{ height: 8 }} />
            <View style={{ gap: 10 }}>
              {[
                { label: 'Single', value: 'Single' },
                { label: 'Married', value: 'Married' },
                { label: 'Divorced or widowed', value: 'Divorced' },
                { label: 'Option 4', value: 'Option4' },
              ].map((opt) => (
                <Ux4gRadioButton
                  key={opt.value}
                  label={opt.label}
                  selected={maritalStatus === opt.value}
                  onSelect={() => setMaritalStatus(opt.value)}
                />
              ))}
            </View>

            <View style={{ height: 20 }} />

            {/* 7. Brief reason textarea */}
            <Ux4gTextArea
              label="Brief reason for application (optional)"
              placeholder="Placeholder"
              value={reason}
              onValueChange={setReason}
              rows={3}
            />

            <View style={{ height: 20 }} />

            {/* 8. Annual Income Slider */}
            <Ux4gSlider
              label="Annual Income (Lakh ₹)"
              isRequired={true}
              value={income}
              min={0}
              max={10}
              step={1}
              onValueChange={setIncome}
            />

            <View style={{ height: 20 }} />

            {/* Checkbox 1: Accuracy confirmation */}
            <Ux4gCheckbox
              value={confirmAccuracy}
              onChanged={(val) => setConfirmAccuracy(!!val)}
              label="I confirm the above information is accurate and authorise verification."
              isRequired={true}
              size="small"
            />

            <View style={{ height: 14 }} />

            {/* Checkbox 2: Accept terms */}
            <Ux4gCheckbox
              value={acceptTerms}
              onChanged={(val) => setAcceptTerms(!!val)}
              label="Accept terms and conditions"
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
              text="Save as Draft"
              onPress={onSaveDraft}
              variant="outline"
              size="large"
              width="100%"
              height={48}
              contentColor={primaryColor}
              borderColor={isDark ? UX4GColors.primary700 : '#C7D2FE'}
            />
          </View>

          {/* Footer outside Card */}
          <View style={styles.footerContainer}>
            <Text style={styles.poweredByText}>Powered by -</Text>
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
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 14,
    fontWeight: '600',
  },
  heading: {
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 26,
  },
  subheading: {
    fontSize: 14,
    lineHeight: 20,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '600',
  },
  uidaiLink: {
    marginTop: 6,
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
  }, []);

  // Stepper Visual Component
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
          <div style={{ flex: 1, height: 2, backgroundColor: colors.stepperLineInactive }} />
        </div>

        {/* Column 2 Lines */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ flex: 1, height: 2, backgroundColor: colors.stepperLineInactive }} />
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

        {/* Step 2: Current / Active (Personal) */}
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
              color: colors.primaryColor,
              textAlign: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            Personal
          </div>
        </div>

        {/* Step 3: Pending (Documents) */}
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
              3
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
            Documents
          </div>
        </div>

        {/* Step 4: Pending (Submit) */}
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

  // Status Banner: Saved 3:14 PM
  const renderSavedBanner = () => (
    <div
      style={{
        backgroundColor: colors.bannerBg,
        border: `1px solid ${colors.bannerBorder}`,
        borderRadius: 8,
        padding: '10px 14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 6,
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke={colors.bannerIcon}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
      <span
        style={{
          fontSize: 12,
          fontWeight: 600,
          color: colors.bannerText,
        }}
      >
        Saved 3:14 PM
      </span>
    </div>
  );

  // Form Fields Component matching UX4G Components behavior
  const renderFormContent = () => {
    const selectedStateObj = STATE_OPTIONS.find((o) => o.id === selectedState);

    return (
      <>
        {/* Back Link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            cursor: 'pointer',
            marginBottom: 16,
            userSelect: 'none',
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: colors.primaryColor,
            }}
          >
            ← Back
          </span>
        </div>

        {/* Stepper */}
        {renderStepper()}

        <div style={{ height: 16 }} />

        {/* Saved Banner */}
        {renderSavedBanner()}

        <div style={{ height: 24 }} />

        {/* Heading & Subheading */}
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
          Personal information
        </div>
        <div
          style={{
            fontSize: 14,
            color: colors.subtitleColor,
            lineHeight: 1.4,
            marginBottom: 24,
          }}
        >
          Please enter your details.
        </div>

        {/* 1. Full name (Disabled / Pre-filled) */}
        <div style={{ width: '100%', marginBottom: 6 }}>
          <label
            style={{
              display: 'block',
              fontSize: 13,
              fontWeight: 600,
              color: colors.labelColor,
              marginBottom: 6,
            }}
          >
            Full name
          </label>
          <input
            type="text"
            value={fullName}
            disabled
            style={{
              width: '100%',
              height: 44,
              borderRadius: 8,
              border: `1px solid ${colors.inputBorder}`,
              backgroundColor: colors.inputDisabledBg,
              color: colors.inputDisabledText,
              padding: '0 12px',
              fontSize: 14,
              fontWeight: 500,
              outline: 'none',
              boxSizing: 'border-box',
              cursor: 'not-allowed',
            }}
          />
        </div>

        {/* Aadhaar Update Link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            marginBottom: 16,
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              fontSize: 12,
              color: colors.primaryColor,
              fontWeight: 500,
            }}
          >
            From Aadhaar · Update via UIDAI
          </span>
          <svg
            viewBox="0 0 24 24"
            width="12"
            height="12"
            fill="none"
            stroke={colors.primaryColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </div>

        {/* 2. Mobile number */}
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
            Mobile number
          </label>
          <input
            type="tel"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Placeholder"
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

        {/* 3. Email address */}
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
            Email address
          </label>
          <input
            type="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            placeholder="Placeholder"
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

        {/* 4. Aadhaar number */}
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
            Aadhaar number
          </label>
          <input
            type="text"
            value={aadhaarNumber}
            onChange={(e) => setAadhaarNumber(e.target.value)}
            placeholder="Placeholder"
            maxLength={14}
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

        {/* 5. State of residence Dropdown */}
        <div style={{ width: '100%', marginBottom: 20, position: 'relative' }}>
          <label
            style={{
              display: 'block',
              fontSize: 13,
              fontWeight: 600,
              color: colors.labelColor,
              marginBottom: 6,
            }}
          >
            State of residence
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
                color: selectedStateObj ? colors.inputText : colors.inputPlaceholder,
              }}
            >
              {selectedStateObj ? selectedStateObj.label : 'Please select..'}
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
                {STATE_OPTIONS.map((opt) => {
                  const isSelected = selectedState === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => {
                        setSelectedState(opt.id);
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

        {/* 6. Marital status Radio buttons */}
        <div style={{ width: '100%', marginBottom: 20 }}>
          <label
            style={{
              display: 'block',
              fontSize: 13,
              fontWeight: 600,
              color: colors.labelColor,
              marginBottom: 10,
            }}
          >
            Your marital status
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { label: 'Single', value: 'Single' },
              { label: 'Married', value: 'Married' },
              { label: 'Divorced or widowed', value: 'Divorced' },
              { label: 'Option 4', value: 'Option4' },
            ].map((item) => {
              const isSelected = maritalStatus === item.value;
              return (
                <div
                  key={item.value}
                  onClick={() => setMaritalStatus(item.value)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      border: `1.5px solid ${
                        isSelected ? colors.primaryColor : colors.inputBorder
                      }`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 10,
                      backgroundColor: 'transparent',
                      transition: 'border-color 0.15s',
                    }}
                  >
                    {isSelected && (
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          backgroundColor: colors.primaryColor,
                        }}
                      />
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: 13.5,
                      fontWeight: 500,
                      color: colors.labelColor,
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 7. Brief reason textarea */}
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
            Brief reason for application (optional)
          </label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Placeholder"
            rows={3}
            style={{
              width: '100%',
              borderRadius: 8,
              border: `1px solid ${colors.inputBorder}`,
              backgroundColor: colors.inputBg,
              color: colors.inputText,
              padding: '10px 12px',
              fontSize: 14,
              outline: 'none',
              boxSizing: 'border-box',
              resize: 'none',
              fontFamily: 'inherit',
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

        {/* 8. Annual Income Slider */}
        <div style={{ width: '100%', marginBottom: 24 }}>
          {/* Label Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 8,
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 600, color: colors.labelColor }}>
              Annual Income (Lakh ₹) <span style={{ color: UX4GColors.red600 }}>*</span>
            </div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: colors.titleColor,
              }}
            >
              ₹{income}
            </div>
          </div>

          {/* Slider Input with Custom Track */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              padding: '8px 0',
              userSelect: 'none',
            }}
          >
            {/* Base Gray Track */}
            <div
              style={{
                width: '100%',
                height: 4,
                backgroundColor: colors.stepperLineInactive,
                borderRadius: 2,
                position: 'relative',
              }}
            >
              {/* Active Purple Track */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: `${(income / 10) * 100}%`,
                  backgroundColor: colors.primaryColor,
                  borderRadius: 2,
                }}
              />
            </div>

            {/* Custom White Thumb */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: `calc(${(income / 10) * 100}% - ${(income / 10) * 16}px)`,
                transform: 'translateY(-50%)',
                width: 18,
                height: 18,
                borderRadius: '50%',
                backgroundColor: isDark ? UX4GColors.neutral100 : '#FFFFFF',
                border: `1.5px solid ${isDark ? UX4GColors.neutral400 : '#D1D5DB'}`,
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
                pointerEvents: 'none',
                zIndex: 3,
              }}
            />

            {/* Native range input for dragging */}
            <input
              type="range"
              min={0}
              max={10}
              step={1}
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0,
                cursor: 'pointer',
                zIndex: 4,
                margin: 0,
              }}
            />
          </div>

          {/* Marks Row */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 24,
              marginTop: 2,
            }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => {
              const isSelected = income === val;
              const leftPercent = (val / 10) * 100;
              return (
                <div
                  key={val}
                  onClick={() => setIncome(val)}
                  style={{
                    position: 'absolute',
                    left: `${leftPercent}%`,
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <div
                    style={{
                      width: 1,
                      height: 4,
                      backgroundColor: isSelected ? colors.primaryColor : colors.inputBorder,
                      marginBottom: 2,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: isSelected ? 700 : 400,
                      color: isSelected ? colors.primaryColor : colors.footerText,
                    }}
                  >
                    {val === 10 ? '10+' : val}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Checkbox 1: Accuracy verification */}
        <div
          onClick={() => setConfirmAccuracy(!confirmAccuracy)}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            cursor: 'pointer',
            userSelect: 'none',
            width: '100%',
            marginBottom: 14,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', flex: 1, marginRight: 8 }}>
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 4,
                border: `1.5px solid ${
                  confirmAccuracy
                    ? colors.primaryColor
                    : isDark
                    ? UX4GColors.neutral600
                    : UX4GColors.neutral400
                }`,
                backgroundColor: confirmAccuracy ? colors.primaryColor : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
                marginTop: 1,
                flexShrink: 0,
                transition: 'all 0.15s ease',
              }}
            >
              {confirmAccuracy && (
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
                lineHeight: '20px',
              }}
            >
              I confirm the above information is accurate and authorise verification.
            </span>
          </div>
          <span
            style={{
              color: UX4GColors.red600,
              fontWeight: 700,
              fontSize: 16,
              lineHeight: '20px',
              flexShrink: 0,
            }}
          >
            *
          </span>
        </div>

        {/* Checkbox 2: Accept terms */}
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
              fontSize: 13,
              fontWeight: 500,
              color: colors.labelColor,
              lineHeight: '20px',
            }}
          >
            Accept terms and conditions{' '}
            <span style={{ color: UX4GColors.red600, fontWeight: 700 }}>*</span>
          </span>
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
          border: `1.5px solid ${isDark ? UX4GColors.primary700 : '#C7D2FE'}`,
          backgroundColor: 'transparent',
          color: colors.primaryColor,
          fontSize: 15,
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Save as Draft
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
              {/* White Card containing Stepper, Form Content, and Action Buttons */}
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
          <h1 className="wb-title">Government form with validation</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A comprehensive government form pattern featuring validation, pre-filled data, status banners, and various input types.
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

export default GovernmentFormWithValidationDoc;
