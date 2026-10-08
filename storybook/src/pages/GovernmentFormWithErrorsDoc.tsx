import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gInputField } from '../../../src/components/input-field/InputField';
import { Ux4gSelectionDropdown } from '../../../src/components/dropdown/Dropdown';
import { Ux4gRadioButton } from '../../../src/components/radio-button/RadioButton';
import { Ux4gTextArea } from '../../../src/components/text-area/TextArea';
import { Ux4gSlider } from '../../../src/components/slider/Slider';
import { Ux4gCheckbox } from '../../../src/components/checkbox/Checkbox';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface GovernmentFormWithErrorsDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

export const GovernmentFormWithErrorsDoc: React.FC<GovernmentFormWithErrorsDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');

  // Form interactive states matching Flutter/RN GovernmentFormErrorsScreen
  const [fullName] = useState('Ramesh Kumar');
  const [mobileNumber, setMobileNumber] = useState('+91 98765 43210');
  const [emailAddress, setEmailAddress] = useState('ramesh@example');
  const [aadhaarNumber, setAadhaarNumber] = useState('1234 5678 9012');
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [maritalStatus, setMaritalStatus] = useState<string | null>('Married');
  const [reason, setReason] = useState('');
  const [income, setIncome] = useState(32);
  const [confirmAccuracy, setConfirmAccuracy] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(true);

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
      dividerColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      verticalDividerColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
      labelColor: isDark ? UX4GColors.neutral200 : UX4GColors.neutral800,
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      primaryBrand: '#432CBB',
      menuBtnBorder: isDark ? UX4GColors.primary700 : '#D8D6F6',
      footerText: isDark ? UX4GColors.neutral500 : '#9CA3AF',
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

export const GovernmentFormErrorsScreen = ({
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
  const [mobileNumber, setMobileNumber] = useState('+91 98765 43210');
  const [emailAddress, setEmailAddress] = useState('ramesh@example');
  const [aadhaarNumber, setAadhaarNumber] = useState('1234 5678 9012');
  const [selectedState, setSelectedState] = useState<string[]>([]);
  const [maritalStatus, setMaritalStatus] = useState<string | null>('Married');
  const [reason, setReason] = useState('');
  const [income, setIncome] = useState(40);
  const [confirmAccuracy, setConfirmAccuracy] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(true);

  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleText = isDark ? UX4GColors.neutral400 : UX4GColors.neutral600;

  const stateOptions = [
    { id: 'dl', label: 'Delhi' },
    { id: 'mh', label: 'Maharashtra' },
  ];

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' },
      ]}
    >
      {/* Top Header */}
      <Ux4gAppHeader
        variant="light"
        title=""
        leadingWidgets={[
          <View key="brand" style={styles.headerLeading}>
            <Image
              source={require('./assets/national_emblem.png')}
              style={styles.emblem}
              resizeMode="contain"
            />
            <Ux4gDivider
              orientation="vertical"
              color={isDark ? UX4GColors.neutral700 : UX4GColors.neutral300}
              style={{ height: 32 }}
            />
            <Image
              source={require('./assets/union_logo.png')}
              style={[styles.unionLogo, { tintColor: primaryColor }]}
              resizeMode="contain"
            />
          </View>,
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
      <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Back Link */}
        <TouchableOpacity onPress={onBack} style={styles.backRow}>
          <Text style={[styles.backText, { color: primaryColor }]}>← Back</Text>
        </TouchableOpacity>

        {/* Stepper */}
        <Ux4gStepper
          totalSteps={4}
          currentStep={2}
          stepSize={20}
          steps={[
            { title: 'Eligibility' },
            { title: 'Personal' },
            { title: 'Documents' },
            { title: 'Submit' },
          ]}
        />

        {/* Top Success Banner */}
        <Ux4gStatusBanner
          variant="successLight"
          title="Saved 3:14 PM"
          height={44}
          backgroundColor="#F2FCEF"
          borderColor="transparent"
          leadingIcon={
            <Text style={{ color: '#065F46', fontSize: 16 }}>✓</Text>
          }
        />

        {/* Section Heading */}
        <Text style={[styles.title, { color: titleColor }]}>Personal information</Text>
        <Text style={[styles.subtitle, { color: subtleText }]}>
          Please enter your details.
        </Text>

        {/* Full Name (Disabled) */}
        <Ux4gInputField
          label="Full name"
          value={fullName}
          enabled={false}
          size="medium"
          onValueChange={() => {}}
        />
        <TouchableOpacity style={styles.helperRow} activeOpacity={0.7}>
          <Text style={[styles.helperLink, { color: primaryColor }]}>
            From Aadhaar · Update via UIDAI ↗
          </Text>
        </TouchableOpacity>

        {/* Mobile Number (Disabled) */}
        <Ux4gInputField
          label="Mobile number"
          value={mobileNumber}
          enabled={false}
          size="medium"
          onValueChange={setMobileNumber}
        />

        {/* Email Address with Error State */}
        <Ux4gInputField
          label="Email address"
          value={emailAddress}
          size="medium"
          status="error"
          caption="Enter a valid email."
          onValueChange={setEmailAddress}
        />

        {/* Aadhaar Number (Disabled) */}
        <Ux4gInputField
          label="Aadhaar number"
          value={aadhaarNumber}
          enabled={false}
          size="medium"
          onValueChange={setAadhaarNumber}
        />

        {/* State Selection Dropdown */}
        <Ux4gSelectionDropdown
          label="State of residence"
          placeholder="Please select.."
          options={stateOptions}
          selectedOptionIds={selectedState}
          onSelectionChange={setSelectedState}
          size="m"
        />

        {/* Marital Status */}
        <Text style={[styles.fieldLabel, { color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }]}>
          Your marital status
        </Text>
        <Ux4gRadioButton
          label="Single"
          value="Single"
          groupValue={maritalStatus}
          onChanged={setMaritalStatus}
        />
        <Ux4gRadioButton
          label="Married"
          value="Married"
          groupValue={maritalStatus}
          onChanged={setMaritalStatus}
        />
        <Ux4gRadioButton
          label="Divorced or widowed"
          value="Divorced"
          groupValue={maritalStatus}
          onChanged={setMaritalStatus}
        />
        <Ux4gRadioButton
          label="Option 4"
          value="Option4"
          groupValue={maritalStatus}
          onChanged={setMaritalStatus}
        />

        {/* Reason */}
        <Ux4gTextArea
          label="Brief reason (optional)"
          value={reason}
          placeholder="Placeholder"
          onValueChange={setReason}
          size="small"
        />

        {/* Income Slider */}
        <Ux4gSlider
          label="Annual Income (Lakh ₹)"
          isRequired
          value={income}
          min={0}
          max={100}
          steps={9}
          showMarksAndValues
          rightLabelElement={
            <Text style={styles.sliderValue}>{\`₹\${(income / 10).toFixed(1)} Lakh\`}</Text>
          }
          onValueChange={setIncome}
        />

        {/* Checkbox 1: Accuracy confirmation */}
        <Ux4gCheckbox
          label="I confirm the above information is accurate and authorise verification."
          isRequired
          value={confirmAccuracy}
          onChanged={(val) => setConfirmAccuracy(Boolean(val))}
          size="small"
        />

        {/* Checkbox 2: Accept Terms */}
        <Ux4gCheckbox
          label="Accept terms and conditions"
          isRequired
          value={acceptTerms}
          onChanged={(val) => setAcceptTerms(Boolean(val))}
          size="small"
        />

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <Ux4gButton
            text="Continue"
            size="large"
            height={48}
            width="100%"
            onPress={onContinue}
          />
          <Ux4gButton
            text="Save as Draft"
            size="large"
            height={48}
            width="100%"
            variant="outline"
            contentColor={primaryColor}
            borderColor={isDark ? UX4GColors.primary700 : '#C7D2FE'}
            onPress={onSaveDraft}
          />
        </View>

        {/* Powered by Footer */}
        <View style={styles.footer}>
          <Text
            style={[
              styles.footerText,
              { color: isDark ? UX4GColors.neutral600 : '#9CA3AF' },
            ]}
          >
            Powered by -
          </Text>
          <Image
            source={require('./assets/digital_india_logo.png')}
            style={styles.digitalIndiaLogo}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
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
  headerLeading: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  emblem: { height: 40, width: 30 },
  unionLogo: { height: 32, width: 48 },
  bannerContent: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  bannerIcon: { color: '#065F46', fontSize: 14, fontWeight: '700' },
  bannerText: { color: '#065F46', fontSize: 12, fontWeight: '500' },
  scrollContent: { paddingHorizontal: 20, paddingVertical: 20, gap: 20 },
  backRow: { marginBottom: 4 },
  backText: { fontSize: 14, fontWeight: '600' },
  title: { fontSize: 22, fontWeight: '800' },
  subtitle: { fontSize: 14 },
  helperRow: { marginTop: -14, marginBottom: 8 },
  helperLink: { fontSize: 12, fontWeight: '500' },
  fieldLabel: { fontSize: 13, fontWeight: '600', marginBottom: 8 },
  sliderValue: { fontSize: 13, fontWeight: '800' },
  buttonContainer: { gap: 12, marginTop: 8 },
  footer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 20, gap: 6 },
  footerText: { fontSize: 11 },
  digitalIndiaLogo: { height: 24, width: 90 },
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

export const GovernmentFormErrorsCardScreen = ({
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
  const [mobileNumber, setMobileNumber] = useState('+91 98765 43210');
  const [emailAddress, setEmailAddress] = useState('ramesh@example');
  const [aadhaarNumber, setAadhaarNumber] = useState('1234 5678 9012');
  const [selectedState, setSelectedState] = useState<string[]>([]);
  const [maritalStatus, setMaritalStatus] = useState<string | null>('Married');
  const [reason, setReason] = useState('');
  const [income, setIncome] = useState(40);
  const [confirmAccuracy, setConfirmAccuracy] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(true);

  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleText = isDark ? UX4GColors.neutral400 : UX4GColors.neutral600;

  const stateOptions = [
    { id: 'dl', label: 'Delhi' },
    { id: 'mh', label: 'Maharashtra' },
  ];

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        {
          backgroundColor: isDark ? UX4GColors.primary900 : '#F4F0FF',
        },
      ]}
    >
      {/* Top Header */}
      <View
        style={{
          backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
        }}
      >
        <Ux4gAppHeader
          variant="light"
          title=""
          leadingWidgets={[
            <View key="brand" style={styles.headerLeading}>
              <Image
                source={require('./assets/national_emblem.png')}
                style={styles.emblem}
                resizeMode="contain"
              />
              <Ux4gDivider
                orientation="vertical"
                color={isDark ? UX4GColors.neutral700 : UX4GColors.neutral300}
                style={{ height: 32 }}
              />
              <Image
                source={require('./assets/union_logo.png')}
                style={[styles.unionLogo, { tintColor: primaryColor }]}
                resizeMode="contain"
              />
            </View>,
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
        <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Elevated Form Card */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
            },
          ]}
        >
          {/* Back Link */}
          <TouchableOpacity onPress={onBack} style={styles.backRow}>
            <Text style={[styles.backText, { color: primaryColor }]}>← Back</Text>
          </TouchableOpacity>

          {/* Stepper */}
          <Ux4gStepper
            totalSteps={4}
            currentStep={2}
            stepSize={20}
            steps={[
              { title: 'Eligibility' },
              { title: 'Personal' },
              { title: 'Documents' },
              { title: 'Submit' },
            ]}
          />

          {/* Status Banner Inside Card */}
          <Ux4gStatusBanner
            variant="successLight"
            title="Saved 3:14 PM"
            height={44}
            backgroundColor="#F2FCEF"
            borderColor="transparent"
            leadingIcon={
              <Text style={{ color: '#065F46', fontSize: 16 }}>✓</Text>
            }
          />

          {/* Section Heading */}
          <Text style={[styles.title, { color: titleColor }]}>
            Personal information
          </Text>
          <Text style={[styles.subtitle, { color: subtleText }]}>
            Please enter your details.
          </Text>

          {/* Full Name (Disabled) */}
          <Ux4gInputField
            label="Full name"
            value={fullName}
            enabled={false}
            size="medium"
            onValueChange={() => {}}
          />
          <TouchableOpacity style={styles.helperRow} activeOpacity={0.7}>
            <Text style={[styles.helperLink, { color: primaryColor }]}>
              From Aadhaar · Update via UIDAI ↗
            </Text>
          </TouchableOpacity>

          {/* Mobile Number (Disabled) */}
          <Ux4gInputField
            label="Mobile number"
            value={mobileNumber}
            enabled={false}
            size="medium"
            onValueChange={setMobileNumber}
          />

          {/* Email Address with Error State */}
          <Ux4gInputField
            label="Email address"
            value={emailAddress}
            size="medium"
            status="error"
            caption="Enter a valid email."
            onValueChange={setEmailAddress}
          />

          {/* Aadhaar Number (Disabled) */}
          <Ux4gInputField
            label="Aadhaar number"
            value={aadhaarNumber}
            enabled={false}
            size="medium"
            onValueChange={setAadhaarNumber}
          />

          {/* State Selection Dropdown */}
          <Ux4gSelectionDropdown
            label="State of residence"
            placeholder="Please select.."
            options={stateOptions}
            selectedOptionIds={selectedState}
            onSelectionChange={setSelectedState}
            size="m"
          />

          {/* Marital Status */}
          <Text
            style={[
              styles.fieldLabel,
              { color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 },
            ]}
          >
            Your marital status
          </Text>
          <Ux4gRadioButton
            label="Single"
            value="Single"
            groupValue={maritalStatus}
            onChanged={setMaritalStatus}
          />
          <Ux4gRadioButton
            label="Married"
            value="Married"
            groupValue={maritalStatus}
            onChanged={setMaritalStatus}
          />
          <Ux4gRadioButton
            label="Divorced or widowed"
            value="Divorced"
            groupValue={maritalStatus}
            onChanged={setMaritalStatus}
          />
          <Ux4gRadioButton
            label="Option 4"
            value="Option4"
            groupValue={maritalStatus}
            onChanged={setMaritalStatus}
          />

          {/* Reason */}
          <Ux4gTextArea
            label="Brief reason (optional)"
            value={reason}
            placeholder="Placeholder"
            onValueChange={setReason}
            size="small"
          />

          {/* Income Slider */}
          <Ux4gSlider
            label="Annual Income (Lakh ₹)"
            isRequired
            value={income}
            min={0}
            max={100}
            steps={9}
            showMarksAndValues
            rightLabelElement={
              <Text style={styles.sliderValue}>{\`₹\${(income / 10).toFixed(1)} Lakh\`}</Text>
            }
            onValueChange={setIncome}
          />

          {/* Checkbox 1: Accuracy confirmation */}
          <Ux4gCheckbox
            label="I confirm the above information is accurate and authorise verification."
            isRequired
            value={confirmAccuracy}
            onChanged={(val) => setConfirmAccuracy(Boolean(val))}
            size="small"
          />

          {/* Checkbox 2: Accept Terms */}
          <Ux4gCheckbox
            label="Accept terms and conditions"
            isRequired
            value={acceptTerms}
            onChanged={(val) => setAcceptTerms(Boolean(val))}
            size="small"
          />

          {/* Action Buttons inside Card */}
          <View style={styles.buttonContainer}>
            <Ux4gButton
              text="Continue"
              size="large"
              height={48}
              width="100%"
              onPress={onContinue}
            />
            <Ux4gButton
              text="Save as Draft"
              size="large"
              height={48}
              width="100%"
              variant="outline"
              contentColor={primaryColor}
              borderColor={isDark ? UX4GColors.primary700 : '#C7D2FE'}
              onPress={onSaveDraft}
            />
          </View>
        </View>

        {/* Powered by Footer outside Card */}
        <View style={styles.footer}>
          <Text
            style={[
              styles.footerText,
              { color: isDark ? UX4GColors.neutral600 : '#9CA3AF' },
            ]}
          >
            Powered by -
          </Text>
          <Image
            source={require('./assets/digital_india_logo.png')}
            style={styles.digitalIndiaLogo}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
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
  headerLeading: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  emblem: { height: 40, width: 30 },
  unionLogo: { height: 32, width: 48 },
  bannerContent: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  bannerIcon: { color: '#065F46', fontSize: 14, fontWeight: '700' },
  bannerText: { color: '#065F46', fontSize: 12, fontWeight: '500' },
  scrollContent: { paddingHorizontal: 16, paddingVertical: 20 },
  card: {
    borderRadius: 16,
    padding: 20,
    gap: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
  },
  backRow: { marginBottom: 4 },
  backText: { fontSize: 14, fontWeight: '600' },
  title: { fontSize: 22, fontWeight: '800' },
  subtitle: { fontSize: 14 },
  helperRow: { marginTop: -14, marginBottom: 8 },
  helperLink: { fontSize: 12, fontWeight: '500' },
  fieldLabel: { fontSize: 13, fontWeight: '600', marginBottom: 8 },
  sliderValue: { fontSize: 13, fontWeight: '800' },
  buttonContainer: { gap: 12, marginTop: 8 },
  footer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 20, gap: 6 },
  footerText: { fontSize: 11 },
  digitalIndiaLogo: { height: 24, width: 90 },
});`;
  }, []);

  // Status Banner exact matching original styling
  const renderStatusBanner = () => (
    <div
      style={{
        height: 44,
        backgroundColor: colors.bannerBg,
        border: `1px solid ${colors.bannerBorder}`,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 16px',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" stroke={colors.bannerIcon} strokeWidth="2" fill="none" />
          <path d="M8 12L11 15L16 9" stroke={colors.bannerIcon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
    </div>
  );

  // Stepper exact matching original layout with connecting lines and Submit label
  const renderStepper = () => {
    const totalSteps = 4;
    const currentStep = 2;
    const stepSize = 24;
    const stepsData = [
      { title: 'Eligibility' },
      { title: 'Personal' },
      { title: 'Documents' },
      { title: 'Submit' },
    ];

    return (
      <div style={{ width: '100%', position: 'relative' }}>
        {/* Layer 1: Connecting Lines between step circles */}
        <div
          style={{
            position: 'absolute',
            top: stepSize / 2,
            left: 0,
            right: 0,
            display: 'flex',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
          }}
        >
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {/* Left half segment */}
              {i === 0 ? (
                <div style={{ flex: 1 }} />
              ) : (
                <div
                  style={{
                    flex: 1,
                    height: 2,
                    backgroundColor:
                      currentStep > i
                        ? colors.primaryColor
                        : isDark
                        ? UX4GColors.neutral700
                        : UX4GColors.neutral300,
                  }}
                />
              )}

              {/* Gap for Icon */}
              <div style={{ width: stepSize, flexShrink: 0 }} />

              {/* Right half segment */}
              {i === totalSteps - 1 ? (
                <div style={{ flex: 1 }} />
              ) : (
                <div
                  style={{
                    flex: 1,
                    height: 2,
                    backgroundColor:
                      currentStep > i + 1
                        ? colors.primaryColor
                        : isDark
                        ? UX4GColors.neutral700
                        : UX4GColors.neutral300,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Layer 2: Step Icons and Labels */}
        <div style={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
          {Array.from({ length: totalSteps }).map((_, i) => {
            const stepIndex = i + 1;
            const isCompleted = currentStep > stepIndex;
            const isActive = currentStep === stepIndex;
            const isPending = currentStep < stepIndex;
            const stepData = stepsData[i];

            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {/* Step Icon */}
                <div
                  style={{
                    width: stepSize,
                    height: stepSize,
                    borderRadius: '50%',
                    backgroundColor: isCompleted
                      ? colors.primaryColor
                      : isDark
                      ? colors.cardBg
                      : '#FFFFFF',
                    border: isCompleted
                      ? `2px solid ${colors.primaryColor}`
                      : isActive
                      ? `2px solid ${colors.primaryColor}`
                      : `1.5px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.neutral300}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxSizing: 'border-box',
                  }}
                >
                  {isCompleted && (
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                  {isActive && (
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: colors.primaryColor,
                      }}
                    />
                  )}
                  {isPending && (
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
                        lineHeight: 1,
                      }}
                    >
                      {stepIndex}
                    </span>
                  )}
                </div>

                {/* Step Label */}
                {stepData.title ? (
                  <span
                    style={{
                      marginTop: 8,
                      fontSize: 11,
                      fontWeight: isCompleted || isActive ? 600 : 500,
                      color: isCompleted || isActive ? colors.titleColor : colors.subtleText,
                      textAlign: 'center',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {stepData.title}
                  </span>
                ) : (
                  <div style={{ height: 18, marginTop: 8 }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Form Fields Content
  const renderFormContent = (isCard: boolean) => {
    const stateOptions = [
      { id: 'dl', label: 'Delhi' },
      { id: 'mh', label: 'Maharashtra' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {/* Back navigation link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            width: 'fit-content',
            marginBottom: -4,
          }}
          onClick={() => {}}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: colors.primaryBrand,
            }}
          >
            ← Back
          </span>
        </div>

        {/* Stepper with connecting lines and Submit label */}
        <div style={{ width: '100%' }}>{renderStepper()}</div>

        {/* Status Banner */}
        <div style={{ width: '100%' }}>{renderStatusBanner()}</div>

        {/* Heading & Subheading */}
        <div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: colors.titleColor,
              lineHeight: 1.25,
              marginBottom: 4,
              letterSpacing: '-0.3px',
            }}
          >
            Personal information
          </div>
          <div
            style={{
              fontSize: 14,
              color: colors.subtleText,
              lineHeight: 1.4,
            }}
          >
            Please enter your details.
          </div>
        </div>

        {/* Field 1: Full name (Disabled / Pre-filled) */}
        <div>
          <Ux4gInputField
            label="Full name"
            value={fullName}
            enabled={false}
            size="medium"
            onValueChange={() => {}}
          />
          {/* Helper Link */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              marginTop: 4,
              cursor: 'pointer',
              width: 'fit-content',
            }}
            onClick={() => {}}
          >
            <span
              style={{
                fontSize: 12,
                color: colors.primaryBrand,
                fontWeight: 500,
              }}
            >
              From Aadhaar · Update via UIDAI
            </span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke={colors.primaryBrand}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </div>
        </div>

        {/* Field 2: Mobile number (Disabled) */}
        <Ux4gInputField
          label="Mobile number"
          value={mobileNumber}
          enabled={false}
          size="medium"
          onValueChange={setMobileNumber}
        />

        {/* Field 3: Email address with Error State */}
        <Ux4gInputField
          label="Email address"
          value={emailAddress}
          size="medium"
          status="error"
          caption="Enter a valid email."
          onValueChange={setEmailAddress}
        />

        {/* Field 4: Aadhaar number (Disabled) */}
        <Ux4gInputField
          label="Aadhaar number"
          value={aadhaarNumber}
          enabled={false}
          size="medium"
          onValueChange={setAadhaarNumber}
        />

        {/* Field 5: State of residence Dropdown */}
        <Ux4gSelectionDropdown
          label="State of residence"
          placeholder="Please select.."
          options={stateOptions}
          selectedOptionIds={selectedState ? [selectedState] : []}
          onSelectionChange={(ids) => setSelectedState(ids[0] || null)}
          size="m"
        />

        {/* Field 6: Marital Status Radio Group */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: colors.labelColor,
            }}
          >
            Your marital status
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Ux4gRadioButton
              label="Single"
              value="Single"
              groupValue={maritalStatus}
              onChanged={setMaritalStatus}
            />
            <Ux4gRadioButton
              label="Married"
              value="Married"
              groupValue={maritalStatus}
              onChanged={setMaritalStatus}
            />
            <Ux4gRadioButton
              label="Divorced or widowed"
              value="Divorced"
              groupValue={maritalStatus}
              onChanged={setMaritalStatus}
            />
            <Ux4gRadioButton
              label="Option 4"
              value="Option4"
              groupValue={maritalStatus}
              onChanged={setMaritalStatus}
            />
          </div>
        </div>

        {/* Field 7: Brief reason (optional) TextArea */}
        <Ux4gTextArea
          label="Brief reason (optional)"
          value={reason}
          placeholder="Placeholder"
          onValueChange={setReason}
          size="small"
        />

        {/* Field 8: Annual Income Slider Component */}
        <Ux4gSlider
          label="Annual Income (Lakh ₹)"
          isRequired={true}
          value={income}
          min={0}
          max={100}
          steps={9}
          showMarksAndValues={true}
          rightLabelElement={
            <span style={{ fontSize: 13, fontWeight: 700, color: colors.titleColor }}>
              ₹{(income / 10).toFixed(1)} Lakh
            </span>
          }
          onValueChange={setIncome}
        />

        {/* Field 9: Checkbox 1 (Accuracy Confirmation) */}
        <Ux4gCheckbox
          label="I confirm the above information is accurate and authorise verification."
          isRequired={true}
          value={confirmAccuracy}
          onChanged={(val) => setConfirmAccuracy(Boolean(val))}
          size="small"
        />

        {/* Field 10: Checkbox 2 (Accept Terms) */}
        <Ux4gCheckbox
          label="Accept terms and conditions"
          isRequired={true}
          value={acceptTerms}
          onChanged={(val) => setAcceptTerms(Boolean(val))}
          size="small"
        />

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            marginTop: 4,
            marginBottom: isCard ? 0 : 8,
          }}
        >
          {/* Continue Button */}
          <Ux4gButton
            text="Continue"
            size="large"
            height={48}
            width="100%"
            onPress={() => {}}
          />

          {/* Save as Draft Outline Button */}
          <Ux4gButton
            text="Save as Draft"
            size="large"
            height={48}
            width="100%"
            variant="outline"
            contentColor={colors.primaryBrand}
            borderColor={isDark ? UX4GColors.primary700 : '#C7D2FE'}
            onPress={() => {}}
          />
        </div>

        {/* Footer for Default variant inside scroll flow */}
        {!isCard && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              paddingTop: 8,
              paddingBottom: 24,
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
        )}
      </div>
    );
  };

  const renderLiveMockup = () => {
    const isCard = variant === 'Card style';

    return (
      <Ux4gThemeProvider isDark={isDark}>
        <div
          style={{
            width: 360,
            height: 760,
            borderRadius: 20,
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
            overflow: 'hidden',
            backgroundColor: colors.screenBg,
            border: `1px solid ${colors.border}`,
            display: 'flex',
            flexDirection: 'column',
            fontFamily:
              "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            position: 'relative',
          }}
        >
          {/* Top UX4G AppHeader */}
          <div style={{ backgroundColor: colors.headerBg, flexShrink: 0 }}>
            <Ux4gAppHeader
              variant="light"
              title=""
              backgroundColor={colors.headerBg}
              leadingWidgets={[
                <div key="emblem-union" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
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
                      backgroundColor: colors.verticalDividerColor,
                    }}
                  />
                  <UnionLogo size={32} isDark={isDark} />
                </div>,
              ]}
              actions={[
                {
                  customWidget: (
                    <div
                      key="menu"
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 8,
                        border: `1.5px solid ${colors.menuBtnBorder}`,
                        backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={colors.primaryBrand}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                      </svg>
                    </div>
                  ),
                },
              ]}
            />
            <Ux4gDivider color={colors.dividerColor} thickness={1} />
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
                {/* White Elevated Card */}
                <div
                  style={{
                    backgroundColor: colors.cardBg,
                    borderRadius: 16,
                    padding: 20,
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
                    border: `1px solid ${colors.border}`,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {renderFormContent(true)}
                </div>

                {/* Footer outside card on lavender bg */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    paddingTop: 20,
                    paddingBottom: 16,
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
              <div style={{ padding: '20px 20px 0 20px' }}>
                {renderFormContent(false)}
              </div>
            )}
          </div>
        </div>
      </Ux4gThemeProvider>
    );
  };

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Government form with errors</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A government form pattern demonstrating field-level validation errors, toggle switches, and customized sliders.
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

export default GovernmentFormWithErrorsDoc;
