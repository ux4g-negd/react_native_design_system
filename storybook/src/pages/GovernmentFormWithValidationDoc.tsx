import React, { useState, useMemo, useEffect, useRef } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface GovernmentFormWithValidationDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

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
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showBanner) {
      timer = setTimeout(() => {
        setShowBanner(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showBanner]);

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
    };
  }, [isDark, variant]);

  const defaultCodeString = useMemo(() => {
    return `import React, { useState, useEffect } from 'react';
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
} from 'ux4g-react-native-design-system';

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
  const [fullName, setFullName] = useState('Ramesh Kumar');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [maritalStatus, setMaritalStatus] = useState<string | null>(null);
  const [reason, setReason] = useState('');
  const [income, setIncome] = useState(0);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleText = isDark ? UX4GColors.neutral400 : UX4GColors.neutral600;

  const handleContinue = () => {
    if (!acceptTerms) return;
    setShowBanner(true);
    setTimeout(() => {
      setShowBanner(false);
    }, 3000);
    onContinue();
  };

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0 },
      ]}
    >
      <View style={styles.container}>
        {/* Top Header */}
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

        {/* Back Button */}
        <View style={styles.backButtonContainer}>
          <Ux4gButton
            text="Back"
            variant="ghost"
            onPress={onBack}
            leadingIcon="arrow_back"
            contentColor={isDark ? UX4GColors.primary300 : UX4GColors.primary900}
          />
        </View>

        {/* Form Content */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Progress Stepper */}
          <Ux4gStepper
            totalSteps={4}
            currentStep={2}
            stepSize={20}
            steps={[
              { title: 'Eligibility', titleStyle: { fontSize: 10, fontWeight: '600' } },
              { title: 'Personal', titleStyle: { fontSize: 10, fontWeight: '600' } },
              { title: 'Documents', titleStyle: { fontSize: 10, fontWeight: '600' } },
              { title: '' },
            ]}
          />

          <View style={{ height: 32 }} />

          {/* Heading */}
          <Text style={[styles.heading, { color: titleColor }]}>
            Personal information
          </Text>
          <View style={{ height: 8 }} />
          <Text style={[styles.subheading, { color: subtleText }]}>
            Please enter your details.
          </Text>

          <View style={{ height: 32 }} />

          {/* Full Name (Disabled / Pre-filled) */}
          <Ux4gInputField
            label="Full name"
            value={fullName}
            enabled={false}
            onValueChange={setFullName}
            size="medium"
          />
          <View style={{ height: 8 }} />
          <TouchableOpacity
            style={styles.uidaiLinkRow}
            onPress={() => {}}
            activeOpacity={0.7}
          >
            <Text style={[styles.uidaiLinkText, { color: primaryColor }]}>
              From Aadhaar · Update via UIDAI
            </Text>
            <Image
              source={require('./assets/open_in_new.png')}
              style={[styles.externalIcon, { tintColor: primaryColor }]}
            />
          </TouchableOpacity>

          <View style={{ height: 24 }} />

          {/* Mobile Number */}
          <Ux4gInputField
            label="Mobile number"
            value={mobileNumber}
            onValueChange={setMobileNumber}
            size="medium"
          />

          <View style={{ height: 24 }} />

          {/* Email Address */}
          <Ux4gInputField
            label="Email address"
            value={emailAddress}
            onValueChange={setEmailAddress}
            size="medium"
          />

          <View style={{ height: 24 }} />

          {/* Aadhaar Number */}
          <Ux4gInputField
            label="Aadhaar number"
            value={aadhaarNumber}
            onValueChange={setAadhaarNumber}
            size="medium"
          />

          <View style={{ height: 24 }} />

          {/* State of Residence */}
          <Ux4gSelectionDropdown
            label="State of residence"
            placeholder="Please select.."
            options={[
              { id: 'dl', label: 'Delhi' },
              { id: 'mh', label: 'Maharashtra' },
              { id: 'up', label: 'Uttar Pradesh' },
            ]}
            selectedOptionIds={selectedState ? [selectedState] : []}
            onSelectionChange={(ids: string[]) => setSelectedState(ids[0] || null)}
            size="m"
          />

          <View style={{ height: 24 }} />

          {/* Marital Status */}
          <Text
            style={[
              styles.radioGroupLabel,
              { color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 },
            ]}
          >
            Your marital status
          </Text>
          <View style={{ height: 8 }} />
          <Ux4gRadioButton
            label="Single"
            value="Single"
            groupValue={maritalStatus}
            onChanged={(v: string) => setMaritalStatus(v)}
          />
          <Ux4gRadioButton
            label="Married"
            value="Married"
            groupValue={maritalStatus}
            onChanged={(v: string) => setMaritalStatus(v)}
          />
          <Ux4gRadioButton
            label="Divorced or widowed"
            value="Divorced"
            groupValue={maritalStatus}
            onChanged={(v: string) => setMaritalStatus(v)}
          />
          <Ux4gRadioButton
            label="Option 4"
            value="Option4"
            groupValue={maritalStatus}
            onChanged={(v: string) => setMaritalStatus(v)}
          />

          <View style={{ height: 24 }} />

          {/* Application Reason */}
          <Ux4gTextArea
            label="Brief reason for application (optional)"
            value={reason}
            onValueChange={setReason}
            placeholder="Placeholder"
          />

          <View style={{ height: 24 }} />

          {/* Annual Income Slider */}
          <Ux4gSlider
            label="Annual Income (Lakh ₹)"
            isRequired
            value={income}
            min={0}
            max={10}
            steps={9}
            showMarksAndValues
            valueFormatter={(val: number) => (val === 10 ? '10+' : val.toString())}
            onValueChange={setIncome}
          />

          <View style={{ height: 32 }} />

          {/* SMS Updates Label */}
          <Text
            style={[
              styles.smsUpdatesTitle,
              { color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900 },
            ]}
          >
            Receive application status updates via SMS
          </Text>

          <View style={{ height: 16 }} />

          {/* Terms Checkbox */}
          <Ux4gCheckbox
            label="Accept terms and conditions"
            isRequired
            value={acceptTerms}
            onChanged={(val) => setAcceptTerms(val ?? false)}
          />

          <View style={{ height: 32 }} />
        </ScrollView>

        {/* Floating Saved Banner */}
        {showBanner && (
          <View style={styles.bannerPosition}>
            <Ux4gStatusBanner
              variant="successLight"
              title=""
              backgroundColor="#F0FDF4"
              trailingIcon={
                <View style={styles.bannerRow}>
                  <Image
                    source={require('./assets/check_circle.png')}
                    style={{ width: 14, height: 14, tintColor: '#065F46' }}
                  />
                  <Text style={styles.bannerText}>Saved 3:14 PM</Text>
                </View>
              }
            />
          </View>
        )}

        {/* Bottom Actions */}
        <View style={styles.actionsContainer}>
          <Ux4gButton
            text="Continue"
            onPress={handleContinue}
            size="large"
            width="100%"
            height={48}
            enabled={acceptTerms}
          />
          <View style={{ height: 12 }} />
          <Ux4gButton
            text="Save as Draft"
            onPress={onSaveDraft}
            variant="ghost"
            size="large"
            width="100%"
            height={48}
            contentColor="#432CBB"
          />
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text
            style={[
              styles.poweredByText,
              { color: isDark ? UX4GColors.neutral600 : UX4GColors.neutral400 },
            ]}
          >
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
  emblemIcon: { height: 40, width: 26 },
  verticalDivider: { height: 32, width: 1 },
  unionIcon: { height: 32, width: 44 },
  backButtonContainer: {
    paddingLeft: 8,
    paddingTop: 8,
    alignItems: 'flex-start',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 30,
  },
  subheading: {
    fontSize: 15,
    lineHeight: 22,
  },
  uidaiLinkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  uidaiLinkText: {
    fontSize: 12,
    fontWeight: '500',
  },
  externalIcon: {
    width: 12,
    height: 12,
  },
  radioGroupLabel: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  smsUpdatesTitle: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22,
  },
  bannerPosition: {
    position: 'absolute',
    top: 74,
    left: 16,
    right: 16,
    zIndex: 100,
  },
  bannerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  bannerText: {
    color: '#065F46',
    fontSize: 12,
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
    marginBottom: 6,
  },
  digitalIndiaLogo: {
    height: 24,
    width: 88,
  },
});`;
  }, []);

  const cardCodeString = useMemo(() => {
    return `import React, { useState, useEffect } from 'react';
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
  Ux4gSlider,
  Ux4gCheckbox,
  Ux4gStepper,
  Ux4gStatusBanner,
  UX4GColors,
} from 'ux4g-react-native-design-system';

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
  const [fullName, setFullName] = useState('Ramesh Kumar');
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [income, setIncome] = useState(0);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleText = isDark ? UX4GColors.neutral400 : UX4GColors.neutral600;

  const handleContinue = () => {
    if (!acceptTerms) return;
    setShowBanner(true);
    setTimeout(() => {
      setShowBanner(false);
    }, 3000);
    onContinue();
  };

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
        {/* Top Header Card Bar */}
        <View
          style={{
            backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
          }}
        >
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
          <View style={styles.backButtonContainer}>
            <Ux4gButton
              text="Back"
              variant="ghost"
              onPress={onBack}
              leadingIcon="arrow_back"
              contentColor={isDark ? UX4GColors.primary300 : UX4GColors.primary900}
            />
          </View>
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
              {
                backgroundColor: isDark
                  ? UX4GColors.neutral900
                  : UX4GColors.neutral0,
              },
            ]}
          >
            {/* Stepper */}
            <View style={{ marginTop: 8 }}>
              <Ux4gStepper
                totalSteps={4}
                currentStep={2}
                stepSize={20}
                steps={[
                  { title: 'Eligibility', titleStyle: { fontSize: 10, fontWeight: '600' } },
                  { title: 'Personal', titleStyle: { fontSize: 10, fontWeight: '600' } },
                  { title: 'Documents', titleStyle: { fontSize: 10, fontWeight: '600' } },
                  { title: '' },
                ]}
              />
            </View>

            <View style={{ height: 32 }} />

            {/* Heading */}
            <Text style={[styles.heading, { color: titleColor }]}>
              Personal information
            </Text>
            <View style={{ height: 8 }} />
            <Text style={[styles.subheading, { color: subtleText }]}>
              Please enter your details.
            </Text>

            <View style={{ height: 32 }} />

            {/* Full Name */}
            <Ux4gInputField
              label="Full name"
              value={fullName}
              enabled={false}
              onValueChange={setFullName}
              size="medium"
            />
            <View style={{ height: 8 }} />
            <TouchableOpacity
              style={styles.uidaiLinkRow}
              onPress={() => {}}
              activeOpacity={0.7}
            >
              <Text style={[styles.uidaiLinkText, { color: primaryColor }]}>
                From Aadhaar · Update via UIDAI
              </Text>
              <Image
                source={require('./assets/open_in_new.png')}
                style={[styles.externalIcon, { tintColor: primaryColor }]}
              />
            </TouchableOpacity>

            <View style={{ height: 24 }} />

            {/* Mobile Number */}
            <Ux4gInputField
              label="Mobile number"
              value={mobileNumber}
              onValueChange={setMobileNumber}
              size="medium"
            />

            <View style={{ height: 24 }} />

            {/* State of Residence */}
            <Ux4gSelectionDropdown
              label="State of residence"
              placeholder="Please select.."
              options={[
                { id: 'dl', label: 'Delhi' },
                { id: 'mh', label: 'Maharashtra' },
              ]}
              selectedOptionIds={selectedState ? [selectedState] : []}
              onSelectionChange={(ids: string[]) => setSelectedState(ids[0] || null)}
              size="m"
            />

            <View style={{ height: 24 }} />

            {/* Annual Income */}
            <Ux4gSlider
              label="Annual Income (Lakh ₹)"
              isRequired
              value={income}
              min={0}
              max={10}
              steps={9}
              showMarksAndValues
              valueFormatter={(val: number) => (val === 10 ? '10+' : val.toString())}
              onValueChange={setIncome}
            />

            <View style={{ height: 32 }} />

            {/* Terms Checkbox */}
            <Ux4gCheckbox
              label="Accept terms and conditions"
              isRequired
              value={acceptTerms}
              onChanged={(val) => setAcceptTerms(val ?? false)}
            />
          </View>
        </ScrollView>

        {/* Floating Saved Banner */}
        {showBanner && (
          <View style={styles.bannerPosition}>
            <Ux4gStatusBanner
              variant="successLight"
              title=""
              backgroundColor="#F0FDF4"
              trailingIcon={
                <View style={styles.bannerRow}>
                  <Image
                    source={require('./assets/check_circle.png')}
                    style={{ width: 14, height: 14, tintColor: '#065F46' }}
                  />
                  <Text style={styles.bannerText}>Saved 3:14 PM</Text>
                </View>
              }
            />
          </View>
        )}

        {/* Bottom Actions */}
        <View style={styles.actionsContainer}>
          <Ux4gButton
            text="Continue"
            onPress={handleContinue}
            size="large"
            width="100%"
            height={48}
            enabled={acceptTerms}
          />
          <View style={{ height: 12 }} />
          <Ux4gButton
            text="Save as Draft"
            onPress={onSaveDraft}
            variant="ghost"
            size="large"
            width="100%"
            height={48}
            contentColor="#432CBB"
          />
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text
            style={[
              styles.poweredByText,
              { color: isDark ? UX4GColors.neutral600 : UX4GColors.neutral400 },
            ]}
          >
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
  emblemIcon: { height: 40, width: 26 },
  verticalDivider: { height: 32, width: 1 },
  unionIcon: { height: 32, width: 44 },
  backButtonContainer: {
    paddingLeft: 8,
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'flex-start',
  },
  cardScrollContainer: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  cardContainer: {
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  heading: {
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 30,
  },
  subheading: {
    fontSize: 15,
    lineHeight: 22,
  },
  uidaiLinkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  uidaiLinkText: {
    fontSize: 12,
    fontWeight: '500',
  },
  externalIcon: {
    width: 12,
    height: 12,
  },
  bannerPosition: {
    position: 'absolute',
    top: 74,
    left: 16,
    right: 16,
    zIndex: 100,
  },
  bannerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  bannerText: {
    color: '#065F46',
    fontSize: 12,
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
    marginBottom: 6,
  },
  digitalIndiaLogo: {
    height: 24,
    width: 88,
  },
});`;
  }, []);

  // Stepper Visual Component matching Flutter Ux4gStepper exactly (Step 2 active)
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
        {/* Step 1 to 2 line (completed) */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ flex: 1 }} />
          <div style={{ width: 20 }} />
          <div style={{ flex: 1, height: 2, backgroundColor: colors.primaryColor }} />
        </div>

        {/* Step 2 to 3 line (inactive) */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ flex: 1, height: 2, backgroundColor: colors.primaryColor }} />
          <div style={{ width: 20 }} />
          <div style={{ flex: 1, height: 2, backgroundColor: colors.stepperLineInactive }} />
        </div>

        {/* Step 3 to 4 line (inactive) */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ flex: 1, height: 2, backgroundColor: colors.stepperLineInactive }} />
          <div style={{ width: 20 }} />
          <div style={{ flex: 1, height: 2, backgroundColor: colors.stepperLineInactive }} />
        </div>

        {/* Step 4 tail */}
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
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
              marginTop: 6,
              fontSize: 10,
              fontWeight: 600,
              color: colors.subtleText,
              textAlign: 'center',
            }}
          >
            Eligibility
          </div>
        </div>

        {/* Step 2: Active / Current */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1,
              }}
            >
              2
            </span>
          </div>
          <div
            style={{
              marginTop: 6,
              fontSize: 10,
              fontWeight: 600,
              color: colors.titleColor,
              textAlign: 'center',
            }}
          >
            Personal
          </div>
        </div>

        {/* Step 3: Upcoming */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: colors.inputBg,
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
                fontWeight: 600,
                color: colors.stepperTextInactive,
                lineHeight: 1,
              }}
            >
              3
            </span>
          </div>
          <div
            style={{
              marginTop: 6,
              fontSize: 10,
              fontWeight: 600,
              color: colors.subtleText,
              textAlign: 'center',
            }}
          >
            Documents
          </div>
        </div>

        {/* Step 4: Upcoming (no label) */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: colors.inputBg,
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
                fontWeight: 600,
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

  // Form Fields Component matching Flutter implementation exactly
  const renderFormContent = (isCard: boolean) => {
    const stateOptions = isCard
      ? [
          { id: 'dl', label: 'Delhi' },
          { id: 'mh', label: 'Maharashtra' },
        ]
      : [
          { id: 'dl', label: 'Delhi' },
          { id: 'mh', label: 'Maharashtra' },
          { id: 'up', label: 'Uttar Pradesh' },
        ];

    return (
      <>
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

        {/* Field 2: Mobile number */}
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

        {/* Default Variant Fields */}
        {!isCard && (
          <>
            {/* Field 3: Email address */}
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
              <input
                type="email"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
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

            {/* Field 4: Aadhaar number */}
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
                Aadhaar number
              </label>
              <input
                type="text"
                value={aadhaarNumber}
                onChange={(e) => setAadhaarNumber(e.target.value)}
                placeholder=""
                maxLength={14}
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
          </>
        )}

        {/* Field 5: State of residence Dropdown */}
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

        {/* Marital Status (Default variant) */}
        {!isCard && (
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
        )}

        {/* Brief reason (Default variant) */}
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
              }}
            />
          </div>
        )}

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
                fontSize: 16,
                fontWeight: 700,
                color: colors.titleColor,
              }}
            >
              ₹{income}
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
                  width: `${(income / 10) * 100}%`,
                  backgroundColor: isDark ? UX4GColors.primary300 : colors.primaryBrand,
                  borderRadius: 2,
                  transition: 'width 0.08s ease',
                }}
              />
            </div>

            {/* Custom White Thumb matching user screenshot */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: `calc(${(income / 10) * 100}% - ${(income / 10) * 20}px)`,
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

            {/* Invisible native range input on top for smooth dragging */}
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

          {/* Marks & Values Row below track */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 28,
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
                      fontSize: 12,
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
                    {val === 10 ? '10+' : val}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* SMS status updates text (Default variant) */}
        {!isCard && (
          <div
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: colors.titleColor,
              lineHeight: 1.4,
              marginBottom: 16,
            }}
          >
            Receive application status updates via SMS
          </div>
        )}

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

          {/* Back Button */}
          <div
            style={{
              paddingLeft: 8,
              paddingTop: 8,
              paddingBottom: isCard ? 8 : 0,
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            <button
              type="button"
              onClick={() => {}}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                background: 'transparent',
                border: 'none',
                padding: '6px 12px',
                borderRadius: 6,
                color: colors.ghostButtonColor,
                fontSize: 14,
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 18, color: colors.ghostButtonColor }}
              >
                arrow_back
              </span>
              Back
            </button>
          </div>
        </div>

        {/* Floating Top Saved Banner */}
        {showBanner && (
          <div
            style={{
              position: 'absolute',
              top: 74,
              left: 16,
              right: 16,
              zIndex: 100,
              animation: 'fadeIn 0.25s ease-in-out',
            }}
          >
            <div
              style={{
                height: 44,
                width: '100%',
                backgroundColor: colors.bannerBg,
                borderRadius: 8,
                border: `1px solid ${colors.bannerBorder}`,
                padding: '0 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                boxSizing: 'border-box',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: 16,
                    color: colors.bannerText,
                  }}
                >
                  check_circle
                </span>
                <span
                  style={{
                    color: colors.bannerText,
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                >
                  Saved 3:14 PM
                </span>
              </div>
            </div>
          </div>
        )}

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
          <button
            type="button"
            disabled={!acceptTerms}
            onClick={() => {
              if (!acceptTerms) return;
              setShowBanner(true);
            }}
            style={{
              height: 48,
              width: '100%',
              borderRadius: 8,
              border: 'none',
              backgroundColor: acceptTerms
                ? isDark
                  ? UX4GColors.primary300
                  : colors.primaryBrand
                : colors.buttonDisabledBg,
              color: acceptTerms
                ? isDark
                  ? UX4GColors.neutral900
                  : '#FFFFFF'
                : colors.buttonDisabledText,
              fontSize: 15,
              fontWeight: 600,
              cursor: acceptTerms ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s ease',
            }}
          >
            Continue
          </button>
          <button
            type="button"
            onClick={() => {}}
            style={{
              height: 48,
              width: '100%',
              borderRadius: 8,
              border: 'none',
              backgroundColor: 'transparent',
              color: isDark ? UX4GColors.primary300 : colors.primaryBrand,
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Save as Draft
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

export default GovernmentFormWithValidationDoc;
