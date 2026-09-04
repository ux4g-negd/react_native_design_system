import React, { useState, useMemo, useEffect, useRef } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
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

  // Form interactive states matching Flutter GovernmentFormErrorsScreen
  const [fullName] = useState('Ramesh Kumar');
  const [mobileNumber, setMobileNumber] = useState('+91 98765 43210');
  const [emailAddress, setEmailAddress] = useState('ramesh@example');
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [maritalStatus, setMaritalStatus] = useState<string | null>('Married');
  const [reason, setReason] = useState('');
  const [income, setIncome] = useState(40);
  const [smsUpdates, setSmsUpdates] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(true);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const colors = useMemo(() => {
    const isCard = variant === 'Card style';
    return {
      screenBg: isCard
        ? isDark
          ? UX4GColors.primary900
          : UX4GColors.primary50
        : isDark
        ? UX4GColors.neutral900
        : UX4GColors.neutral0,
      headerBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      dividerColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      verticalDividerColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
      labelColor: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      inputBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      inputDisabledBg: isDark ? UX4GColors.neutral800 : '#F3F4F6',
      inputDisabledText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral800,
      inputBorder: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
      inputText: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      primaryBrand: '#432CBB',
      ghostButtonColor: isDark ? UX4GColors.primary300 : UX4GColors.primary900,
      buttonDisabledBg: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      buttonDisabledText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
      sliderTrackInactive: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      stepperLineInactive: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      stepperCircleInactive: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
      stepperTextInactive: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      dropdownMenuBg: isDark ? UX4GColors.neutral800 : UX4GColors.neutral0,
      dropdownMenuBorder: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      dropdownHoverBg: isDark ? UX4GColors.neutral700 : UX4GColors.neutral100,
      footerText: isDark ? UX4GColors.neutral600 : UX4GColors.neutral400,
      bannerBg: isDark ? '#064E3B' : '#F0FDF4',
      bannerBorder: isDark ? '#065F46' : 'transparent',
      bannerText: isDark ? '#34D399' : '#065F46',
      errorColor: '#EF4444',
      errorBorder: '#EF4444',
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
  Ux4gToggle,
  Ux4gCheckbox,
  Ux4gStepper,
  Ux4gStatusBanner,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const GovernmentFormErrorsScreen = ({
  isDark = false,
  onBack = () => {},
  onContinue = () => {},
}: {
  isDark?: boolean;
  onBack?: () => void;
  onContinue?: () => void;
}) => {
  const [acceptTerms, setAcceptTerms] = useState(true);
  const [smsUpdates, setSmsUpdates] = useState(false);
  const [fullName, setFullName] = useState('Ramesh Kumar');
  const [mobileNumber, setMobileNumber] = useState('+91 98765 43210');
  const [emailAddress, setEmailAddress] = useState('ramesh@example');
  const [maritalStatus, setMaritalStatus] = useState<string | null>('Married');
  const [reason, setReason] = useState('');
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [income, setIncome] = useState(40);

  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleText = isDark ? UX4GColors.neutral400 : UX4GColors.neutral600;

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0 },
      ]}
    >
      {/* App Header */}
      <Ux4gAppHeader
        variant="light"
        title=""
        leadingWidgets={
          <View style={styles.headerLeading}>
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
          </View>
        }
      />
      <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />

      {/* Top Success Banner */}
      <Ux4gStatusBanner
        variant="successLight"
        height={44}
        backgroundColor="#F0FDF4"
        borderColor="transparent"
        trailingIcon={
          <View style={styles.bannerContent}>
            <Text style={styles.bannerIcon}>✓</Text>
            <Text style={styles.bannerText}>Saved 3:14 PM</Text>
          </View>
        }
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Stepper */}
        <Ux4gStepper
          totalSteps={4}
          currentStep={2}
          stepSize={20}
          steps={[
            { title: 'Eligibility' },
            { title: 'Personal' },
            { title: 'Documents' },
            { title: '' },
          ]}
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
          onValueChange={setFullName}
        />
        <TouchableOpacity style={styles.helperRow} activeOpacity={0.7}>
          <Text style={[styles.helperLink, { color: primaryColor }]}>
            From Aadhaar · Update via UIDAI
          </Text>
        </TouchableOpacity>

        {/* Mobile Number */}
        <Ux4gInputField
          label="Mobile number"
          value={mobileNumber}
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

        {/* State Selection Dropdown */}
        <Ux4gSelectionDropdown
          label="State of residence"
          placeholder="Please select.."
          options={[
            { id: 'dl', label: 'Delhi' },
            { id: 'mh', label: 'Maharashtra' },
          ]}
          selectedOptionIds={selectedState ? [selectedState] : []}
          onSelectionChange={(ids) => setSelectedState(ids[0] || null)}
          size="medium"
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
          rightLabelWidget={
            <Text style={styles.sliderValue}>₹3.2 Lakh</Text>
          }
          onValueChange={setIncome}
        />

        {/* Toggle SMS Updates */}
        <View style={styles.toggleRow}>
          <Text style={[styles.toggleLabel, { color: titleColor }]}>
            Receive SMS updates
          </Text>
          <Ux4gToggle
            checked={smsUpdates}
            onCheckedChange={setSmsUpdates}
            size="small"
          />
        </View>

        {/* Accept Terms Checkbox */}
        <Ux4gCheckbox
          label="Accept terms and conditions"
          isRequired
          value={acceptTerms}
          onChanged={(val) => setAcceptTerms(Boolean(val))}
        />
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <Ux4gButton
          text="Continue"
          size="large"
          height={48}
          width="100%"
          onPressed={onContinue}
        />
        <Ux4gButton
          text="Back"
          size="large"
          height={48}
          width="100%"
          variant="outline"
          contentColor={primaryColor}
          borderColor={primaryColor}
          onPressed={onBack}
        />
      </View>

      {/* Powered by Footer */}
      <View style={styles.footer}>
        <Text
          style={[
            styles.footerText,
            { color: isDark ? UX4GColors.neutral600 : UX4GColors.neutral400 },
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  headerLeading: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  emblem: { height: 40, width: 30 },
  unionLogo: { height: 32, width: 48 },
  bannerContent: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  bannerIcon: { color: '#065F46', fontSize: 14, fontWeight: '700' },
  bannerText: { color: '#065F46', fontSize: 12, fontWeight: '500' },
  scrollContent: { paddingHorizontal: 24, paddingVertical: 24, gap: 24 },
  title: { fontSize: 24, fontWeight: '800' },
  subtitle: { fontSize: 15 },
  helperRow: { marginTop: -16, marginBottom: 8 },
  helperLink: { fontSize: 12, fontWeight: '500' },
  fieldLabel: { fontSize: 14, fontWeight: '500', marginBottom: 8 },
  sliderValue: { fontSize: 13, fontWeight: '800' },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  toggleLabel: { fontSize: 15, fontWeight: '600' },
  buttonContainer: { paddingHorizontal: 24, paddingVertical: 16, gap: 12 },
  footer: { alignItems: 'center', paddingBottom: 24, gap: 6 },
  footerText: { fontSize: 11 },
  digitalIndiaLogo: { height: 24, width: 120 },
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
  Ux4gToggle,
  Ux4gCheckbox,
  Ux4gStepper,
  Ux4gStatusBanner,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const GovernmentFormErrorsCardScreen = ({
  isDark = false,
  onBack = () => {},
  onContinue = () => {},
}: {
  isDark?: boolean;
  onBack?: () => void;
  onContinue?: () => void;
}) => {
  const [acceptTerms, setAcceptTerms] = useState(true);
  const [smsUpdates, setSmsUpdates] = useState(false);
  const [fullName, setFullName] = useState('Ramesh Kumar');
  const [emailAddress, setEmailAddress] = useState('ramesh@example');
  const [maritalStatus, setMaritalStatus] = useState<string | null>('Married');
  const [reason, setReason] = useState('');
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [income, setIncome] = useState(40);

  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleText = isDark ? UX4GColors.neutral400 : UX4GColors.neutral600;

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        {
          backgroundColor: isDark ? UX4GColors.primary900 : UX4GColors.primary50,
        },
      ]}
    >
      {/* Top Header */}
      <View
        style={{
          backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
        }}
      >
        <Ux4gAppHeader
          variant="light"
          title=""
          leadingWidgets={
            <View style={styles.headerLeading}>
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
            </View>
          }
        />
        <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Elevated Form Card */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
            },
          ]}
        >
          {/* Status Banner Inside Card */}
          <Ux4gStatusBanner
            variant="successLight"
            height={44}
            backgroundColor="#F0FDF4"
            borderColor="transparent"
            trailingIcon={
              <View style={styles.bannerContent}>
                <Text style={styles.bannerIcon}>✓</Text>
                <Text style={styles.bannerText}>Saved 3:14 PM</Text>
              </View>
            }
          />

          {/* Stepper */}
          <Ux4gStepper
            totalSteps={4}
            currentStep={2}
            stepSize={20}
            steps={[
              { title: 'Eligibility' },
              { title: 'Personal' },
              { title: 'Documents' },
              { title: '' },
            ]}
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
            onValueChange={setFullName}
          />
          <TouchableOpacity style={styles.helperRow} activeOpacity={0.7}>
            <Text style={[styles.helperLink, { color: primaryColor }]}>
              From Aadhaar · Update via UIDAI
            </Text>
          </TouchableOpacity>

          {/* Email Address with Error State */}
          <Ux4gInputField
            label="Email address"
            value={emailAddress}
            size="medium"
            status="error"
            caption="Enter a valid email."
            onValueChange={setEmailAddress}
          />

          {/* State Selection Dropdown */}
          <Ux4gSelectionDropdown
            label="State of residence"
            placeholder="Please select.."
            options={[
              { id: 'dl', label: 'Delhi' },
              { id: 'mh', label: 'Maharashtra' },
            ]}
            selectedOptionIds={selectedState ? [selectedState] : []}
            onSelectionChange={(ids) => setSelectedState(ids[0] || null)}
            size="medium"
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
            rightLabelWidget={
              <Text style={styles.sliderValue}>₹3.2 Lakh</Text>
            }
            onValueChange={setIncome}
          />

          {/* Toggle SMS Updates */}
          <View style={styles.toggleRow}>
            <Text style={[styles.toggleLabel, { color: titleColor }]}>
              Receive SMS updates
            </Text>
            <Ux4gToggle
              checked={smsUpdates}
              onCheckedChange={setSmsUpdates}
              size="small"
            />
          </View>

          {/* Accept Terms Checkbox */}
          <Ux4gCheckbox
            label="Accept terms and conditions"
            isRequired
            value={acceptTerms}
            onChanged={(val) => setAcceptTerms(Boolean(val))}
          />
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <Ux4gButton
          text="Continue"
          size="large"
          height={48}
          width="100%"
          onPressed={onContinue}
        />
        <Ux4gButton
          text="Back"
          size="large"
          height={48}
          width="100%"
          variant="outline"
          contentColor={primaryColor}
          borderColor={primaryColor}
          onPressed={onBack}
        />
      </View>

      {/* Powered by Footer */}
      <View style={styles.footer}>
        <Text
          style={[
            styles.footerText,
            { color: isDark ? UX4GColors.neutral600 : UX4GColors.neutral400 },
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  headerLeading: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  emblem: { height: 40, width: 30 },
  unionLogo: { height: 32, width: 48 },
  bannerContent: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  bannerIcon: { color: '#065F46', fontSize: 14, fontWeight: '700' },
  bannerText: { color: '#065F46', fontSize: 12, fontWeight: '500' },
  scrollContent: { paddingHorizontal: 24, paddingVertical: 32 },
  card: {
    borderRadius: 16,
    padding: 24,
    gap: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  title: { fontSize: 24, fontWeight: '800' },
  subtitle: { fontSize: 15 },
  helperRow: { marginTop: -16, marginBottom: 8 },
  helperLink: { fontSize: 12, fontWeight: '500' },
  fieldLabel: { fontSize: 14, fontWeight: '500', marginBottom: 8 },
  sliderValue: { fontSize: 13, fontWeight: '800' },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  toggleLabel: { fontSize: 15, fontWeight: '600' },
  buttonContainer: { paddingHorizontal: 24, paddingVertical: 16, gap: 12 },
  footer: { alignItems: 'center', paddingBottom: 24, gap: 6 },
  footerText: { fontSize: 11 },
  digitalIndiaLogo: { height: 24, width: 120 },
});`;
  }, []);

  // Render Status Banner matching Ux4gStatusBanner successLight
  const renderStatusBanner = (isInsideCard: boolean = false) => (
    <div
      style={{
        height: 48,
        backgroundColor: colors.bannerBg,
        border: `1px solid ${colors.bannerBorder}`,
        borderRadius: isInsideCard ? 12 : 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 16px',
        width: '100%',
        boxSizing: 'border-box',
        marginBottom: isInsideCard ? 24 : 0,
        flexShrink: 0,
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
          <circle cx="12" cy="12" r="10" stroke={colors.bannerText} strokeWidth="2" fill="none" />
          <path d="M8 12L11 15L16 9" stroke={colors.bannerText} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          style={{
            fontSize: 13,
            fontWeight: 500,
            color: colors.bannerText,
          }}
        >
          Saved 3:14 PM
        </span>
      </div>
    </div>
  );

  // Stepper matching actual Ux4gStepper component architecture
  const renderStepper = () => {
    const totalSteps = 4;
    const currentStep = 2;
    const stepSize = 24;
    const stepsData = [
      { title: 'Eligibility' },
      { title: 'Personal' },
      { title: 'Documents' },
      { title: '' },
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
      <>
        {/* Top banner if inside card */}
        {isCard && renderStatusBanner(true)}

        {/* Stepper */}
        <div style={{ width: '100%', marginBottom: 32 }}>{renderStepper()}</div>

        {/* Heading & Subheading */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 800,
            color: colors.titleColor,
            lineHeight: 1.25,
            marginBottom: 8,
            letterSpacing: '-0.3px',
          }}
        >
          Personal information
        </div>
        <div
          style={{
            fontSize: 15,
            color: colors.subtleText,
            lineHeight: 1.4,
            marginBottom: 32,
          }}
        >
          Please enter your details.
        </div>

        {/* Field 1: Full name (Disabled / Pre-filled) */}
        <div style={{ width: '100%', marginBottom: 8 }}>
          <label
            style={{
              display: 'block',
              fontSize: 14,
              fontWeight: 500,
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
              height: 40,
              borderRadius: 8,
              border: `1px solid ${colors.inputBorder}`,
              backgroundColor: colors.inputDisabledBg,
              color: colors.inputDisabledText,
              padding: '0 12px',
              fontSize: 14,
              outline: 'none',
              boxSizing: 'border-box',
              cursor: 'not-allowed',
            }}
          />
        </div>

        {/* Helper Link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            marginBottom: 24,
            cursor: 'pointer',
          }}
          onClick={() => {}}
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
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: 14,
              color: colors.primaryColor,
            }}
          >
            open_in_new
          </span>
        </div>

        {/* Field 2: Mobile number (Present in Default variant) */}
        {!isCard && (
          <div style={{ width: '100%', marginBottom: 24 }}>
            <label
              style={{
                display: 'block',
                fontSize: 14,
                fontWeight: 500,
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
              placeholder=""
              style={{
                width: '100%',
                height: 40,
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
        )}

        {/* Field 3: Email address with Error State */}
        <div style={{ width: '100%', marginBottom: 24 }}>
          <label
            style={{
              display: 'block',
              fontSize: 14,
              fontWeight: 500,
              color: colors.labelColor,
              marginBottom: 6,
            }}
          >
            Email address
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              placeholder=""
              style={{
                width: '100%',
                height: 40,
                borderRadius: 8,
                border: `1.5px solid ${colors.errorBorder}`,
                backgroundColor: colors.inputBg,
                color: colors.inputText,
                padding: '0 36px 0 12px',
                fontSize: 14,
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            <span
              className="material-symbols-outlined"
              style={{
                position: 'absolute',
                right: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: 18,
                color: colors.errorColor,
                pointerEvents: 'none',
              }}
            >
              error
            </span>
          </div>
          {/* Validation Error Caption */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              marginTop: 6,
            }}
          >
            <span
              style={{
                fontSize: 12,
                color: colors.errorColor,
                fontWeight: 500,
              }}
            >
              Enter a valid email.
            </span>
          </div>
        </div>

        {/* Field 4: State of residence Dropdown */}
        <div style={{ width: '100%', marginBottom: 24, position: 'relative' }} ref={dropdownRef}>
          <label
            style={{
              display: 'block',
              fontSize: 14,
              fontWeight: 500,
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
              height: 40,
              borderRadius: 8,
              border: `1px solid ${colors.inputBorder}`,
              backgroundColor: colors.inputBg,
              color: selectedState
                ? colors.inputText
                : isDark
                ? UX4GColors.neutral500
                : UX4GColors.neutral400,
              padding: '0 12px',
              fontSize: 14,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              boxSizing: 'border-box',
              userSelect: 'none',
            }}
          >
            <span>
              {selectedState
                ? stateOptions.find((o) => o.id === selectedState)?.label || 'Please select..'
                : 'Please select..'}
            </span>
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: 20,
                color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
                transform: isDropdownOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s ease',
              }}
            >
              expand_more
            </span>
          </div>

          {/* Dropdown Options Overlay */}
          {isDropdownOpen && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                marginTop: 4,
                backgroundColor: colors.dropdownMenuBg,
                border: `1px solid ${colors.dropdownMenuBorder}`,
                borderRadius: 8,
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                zIndex: 50,
                overflow: 'hidden',
              }}
            >
              {stateOptions.map((opt) => {
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
                      fontSize: 14,
                      color: isSelected ? colors.primaryColor : colors.inputText,
                      fontWeight: isSelected ? 600 : 400,
                      backgroundColor: isSelected
                        ? colors.dropdownHoverBg
                        : 'transparent',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>{opt.label}</span>
                    {isSelected && (
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 16, color: colors.primaryColor }}
                      >
                        check
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Marital Status */}
        <div style={{ width: '100%', marginBottom: 24 }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: colors.labelColor,
              marginBottom: 8,
            }}
          >
            Your marital status
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
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
                      fontSize: 14,
                      color: colors.inputText,
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Brief reason (optional) */}
        <div style={{ width: '100%', marginBottom: 24 }}>
          <label
            style={{
              display: 'block',
              fontSize: 14,
              fontWeight: 500,
              color: colors.labelColor,
              marginBottom: 6,
            }}
          >
            Brief reason (optional)
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
            }}
          />
        </div>

        {/* Annual Income Slider matching exact screenshot UI */}
        <div style={{ width: '100%', marginBottom: 32 }}>
          {/* Label Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 12,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 500, color: colors.titleColor }}>
              Annual Income (Lakh ₹) <span style={{ color: '#EF4444' }}>*</span>
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: colors.titleColor,
              }}
            >
              ₹3.2 Lakh
            </div>
          </div>

          {/* Slider Input with Custom Track & White Thumb */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              padding: '10px 0',
              userSelect: 'none',
            }}
          >
            {/* Base Gray Track */}
            <div
              style={{
                width: '100%',
                height: 4,
                backgroundColor: isDark ? UX4GColors.neutral700 : '#E5E7EB',
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
                  width: `${(income / 100) * 100}%`,
                  backgroundColor: isDark ? UX4GColors.primary300 : colors.primaryBrand,
                  borderRadius: 2,
                  transition: 'width 0.08s ease',
                }}
              />
            </div>

            {/* Custom White Thumb */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: `calc(${(income / 100) * 100}% - ${(income / 100) * 20}px)`,
                transform: 'translateY(-50%)',
                width: 20,
                height: 20,
                borderRadius: '50%',
                backgroundColor: isDark ? UX4GColors.neutral100 : '#FFFFFF',
                border: `1.5px solid ${isDark ? UX4GColors.neutral400 : '#E5E7EB'}`,
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.18)',
                pointerEvents: 'none',
                transition: 'left 0.08s ease',
                zIndex: 3,
              }}
            />

            {/* Invisible native range input on top */}
            <input
              type="range"
              min={0}
              max={100}
              step={10}
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

          {/* Marks & Values Row below track (9 steps / 0 to 100) */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 28,
              marginTop: 2,
            }}
          >
            {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((val) => {
              const isSelected = income === val;
              const leftPercent = (val / 100) * 100;
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
                  {/* Tick line */}
                  <div
                    style={{
                      width: isSelected ? 1.5 : 1,
                      height: 6,
                      backgroundColor: isSelected
                        ? isDark
                          ? UX4GColors.primary300
                          : colors.primaryBrand
                        : isDark
                        ? UX4GColors.neutral600
                        : '#9CA3AF',
                      borderRadius: 1,
                      marginBottom: 4,
                      transition: 'background-color 0.15s ease',
                    }}
                  />
                  {/* Number label */}
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: isSelected ? 600 : 400,
                      color: isSelected
                        ? isDark
                          ? UX4GColors.primary300
                          : colors.primaryBrand
                        : isDark
                        ? UX4GColors.neutral400
                        : '#6B7280',
                      transition: 'color 0.15s ease',
                    }}
                  >
                    {val}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Toggle SMS Updates */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}
        >
          <span
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: colors.titleColor,
            }}
          >
            Receive SMS updates
          </span>
          {/* Toggle Switch */}
          <div
            onClick={() => setSmsUpdates(!smsUpdates)}
            style={{
              width: 38,
              height: 22,
              borderRadius: 12,
              backgroundColor: smsUpdates
                ? colors.primaryColor
                : isDark
                ? UX4GColors.neutral700
                : UX4GColors.neutral300,
              position: 'relative',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                position: 'absolute',
                top: 3,
                left: smsUpdates ? 19 : 3,
                transition: 'left 0.2s ease',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
              }}
            />
          </div>
        </div>

        {/* Accept terms checkbox */}
        <div
          onClick={() => setAcceptTerms(!acceptTerms)}
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            userSelect: 'none',
            marginBottom: isCard ? 0 : 16,
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 4,
              border: `1.5px solid ${
                acceptTerms ? colors.primaryColor : colors.inputBorder
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
            Accept terms and conditions <span style={{ color: '#EF4444' }}>*</span>
          </span>
        </div>
      </>
    );
  };

  const renderLiveMockup = () => {
    const isCard = variant === 'Card style';

    return (
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
          <div
            style={{
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
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
            </div>
          </div>
          <div style={{ height: 1, backgroundColor: colors.dividerColor }} />
        </div>

        {/* Top Banner (For Default Variant) */}
        {!isCard && renderStatusBanner(false)}

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
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: 24,
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {renderFormContent(true)}
              </div>
            </div>
          ) : (
            <div style={{ padding: '24px 24px' }}>
              {renderFormContent(false)}
            </div>
          )}
        </div>

        {/* Bottom Actions */}
        <div
          style={{
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            backgroundColor: isCard ? colors.screenBg : colors.headerBg,
            flexShrink: 0,
          }}
        >
          {/* Continue Button */}
          <button
            type="button"
            onClick={() => {}}
            style={{
              height: 48,
              width: '100%',
              borderRadius: 8,
              border: 'none',
              backgroundColor: colors.primaryBrand,
              color: '#FFFFFF',
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            Continue
          </button>

          {/* Back Outline Button */}
          <button
            type="button"
            onClick={() => {}}
            style={{
              height: 48,
              width: '100%',
              borderRadius: 8,
              border: `1.5px solid ${colors.primaryBrand}`,
              backgroundColor: 'transparent',
              color: isDark ? UX4GColors.primary300 : colors.primaryBrand,
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
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
            backgroundColor: isCard ? colors.screenBg : colors.headerBg,
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
