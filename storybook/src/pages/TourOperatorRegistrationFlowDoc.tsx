import React, { useState, useMemo } from 'react';
import JSZip from 'jszip';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { buildTourOperatorModularProject } from '../utils/tourOperatorModularZip';

interface TourOperatorRegistrationFlowDocProps {
  isDark: boolean;
}

// Official Snack ID for Tour operator and Travel Agency Registration Flow (7-Step Workflow, Steps 1–2 Active)
const SNACK_ID = 'E3jcGw6xKpLirKyNzg5Md';

export const TourOperatorRegistrationFlowDoc: React.FC<TourOperatorRegistrationFlowDocProps> = ({ isDark }) => {
  const [isDownloadingZip, setIsDownloadingZip] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Complete standalone React Native application for Expo Snack & modular ZIP extraction
  const fullAppCodeString = useMemo(() => {
    return `import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import {
  Ux4gRadioButton,
  Ux4gInputField,
  Ux4gPanInputField,
  Ux4gSelectionDropdown,
  Ux4gDatePicker,
  Ux4gStatusBanner,
  Ux4gButton,
  Ux4gThemeProvider,
  UX4GColors,
} from 'ux4g-react-native-components';
import NationalEmblem from './NationalEmblem';

// Union.svg UX4G Logo
const UnionLogo = () => (
  <Svg width={36} height={36} viewBox="0 0 40 40" fill="none">
    <Path
      d="M5.85059 34.2637C7.72048 34.1583 9.59495 34.1583 11.4648 34.2637C15.1962 34.4138 19.3146 35.089 23.4326 35.4141C26.7822 35.6892 30.1618 35.6794 33.3105 34.9141C29.5061 38.2986 24.5517 40.1148 19.4521 39.9942C14.3524 39.8734 9.48932 37.8246 5.85059 34.2637ZM3.76172 22.7647C6.67001 21.8966 9.72795 21.6388 12.7412 22.0088C16.1158 22.359 19.7919 23.4248 23.4326 24.3301C27.0735 25.2355 30.7448 25.9604 34.1045 25.5752C36.0384 25.3889 37.9173 24.8268 39.6338 23.9199C39.3117 25.5465 38.7848 27.1265 38.0664 28.6221C37.0142 29.1907 35.9026 29.6437 34.752 29.9727C31.2316 31.013 27.319 30.8223 23.417 30.2471C19.5151 29.6719 15.5982 28.7163 12.083 28.2461C9.04791 27.8043 5.97725 27.652 2.91309 27.791C2.3808 27.8261 1.87828 27.8262 1.40625 27.8262C0.894651 26.6003 0.505956 25.3266 0.246094 24.0244C1.22033 23.6593 2.41088 23.1648 3.76172 22.7647ZM5.76562 10.7139C8.31822 9.4568 11.2249 9.10423 14.0059 9.71389C17.019 10.2691 20.2236 11.7797 23.4326 13.3203C26.6416 14.861 29.8609 16.4215 32.874 17.0518C35.1426 17.6051 37.5198 17.531 39.749 16.8369C39.9066 17.8298 39.9904 18.8328 40 19.8379C38.0088 20.919 35.7745 21.4787 33.5068 21.4639C30.333 21.5089 26.8324 20.4784 23.3975 19.253C19.9624 18.0275 16.5174 16.6212 13.3535 15.9209C10.5966 15.2104 7.71373 15.1324 4.92188 15.6914C3.21225 16.1055 1.55924 16.7253 0 17.5371C0.105071 16.6264 0.272632 15.7238 0.501953 14.836C1.99816 13.1633 3.78068 11.7674 5.76562 10.7139ZM19.9121 2.51716e-05C24.0578 -0.00157692 28.1024 1.27476 31.4912 3.65335C34.8799 6.03187 37.4469 9.39617 38.8398 13.2852C36.744 13.9628 34.4987 14.0397 32.3613 13.5059C29.529 12.9006 26.4909 11.3695 23.4326 9.63381C20.3744 7.8982 17.3161 6.0477 14.5039 4.86721C12.6733 4.03008 10.7035 3.53465 8.69336 3.40628C12.0074 1.18013 15.9149 -0.00630153 19.9121 2.51716e-05Z"
      fill={UX4GColors.primary}
    />
  </Svg>
);

// UX4G Compact Stepper (Centered Between layout with full-width capsules & arrow buttons)
const Ux4gCompactStepper = ({
  totalSteps = 7,
  currentStep = 1,
  stepLabel,
  title,
  description,
  subtitle,
  onPrevious,
  onBackPress,
  onNext,
  onNextPress,
  cumulative = true,
  style,
}) => {
  const resolvedLabel = stepLabel || title || '';
  const resolvedDesc = description || subtitle;
  const handlePrev = onPrevious || onBackPress || (() => {});
  const handleNext = onNext || onNextPress || (() => {});

  return (
    <View style={[{ paddingVertical: 2 }, style]}>
      {/* Full-width equal-width capsule progress indicators */}
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        {Array.from({ length: totalSteps }).map((_, i) => {
          const isActive = cumulative ? i + 1 <= currentStep : i + 1 === currentStep;
          return (
            <View
              key={i}
              style={{
                flex: 1,
                height: 6,
                marginRight: i === totalSteps - 1 ? 0 : 7,
                borderRadius: 3,
                backgroundColor: isActive ? UX4GColors.primary : UX4GColors.neutral300,
              }}
            />
          );
        })}
      </View>

      <View style={{ height: 18 }} />

      {/* Step Counter */}
      <Text
        style={{
          textAlign: 'center',
          fontSize: 14,
          fontWeight: '700',
          color: UX4GColors.neutral900,
        }}
      >
        {'Step ' + currentStep + ' of ' + totalSteps}
      </Text>

      <View style={{ height: 6 }} />

      {/* Navigation Row: Left Circle Button | Title + Subtitle | Right Circle Button */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {/* Previous Button (Left Arrow) */}
        <TouchableOpacity
          disabled={currentStep <= 1}
          onPress={handlePrev}
          activeOpacity={0.7}
          style={{
            width: 38,
            height: 38,
            borderRadius: 19,
            backgroundColor: UX4GColors.white,
            borderWidth: 1,
            borderColor: currentStep > 1 ? UX4GColors.primary400 : UX4GColors.neutral200,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Svg width={17} height={17} viewBox="0 0 24 24" fill="none">
            <Path
              d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
              fill={currentStep > 1 ? UX4GColors.primary : UX4GColors.neutral400}
            />
          </Svg>
        </TouchableOpacity>

        {/* Center: Step Title & Subtitle */}
        <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 8 }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              color: UX4GColors.primary,
              textAlign: 'center',
            }}
          >
            {resolvedLabel}
          </Text>
          {resolvedDesc ? (
            <Text
              style={{
                fontSize: 13.5,
                lineHeight: 19,
                color: UX4GColors.neutral800,
                textAlign: 'center',
                marginTop: 4,
                maxWidth: 230,
              }}
            >
              {resolvedDesc}
            </Text>
          ) : null}
        </View>

        {/* Next Button (Right Arrow) */}
        <TouchableOpacity
          disabled={currentStep >= totalSteps}
          onPress={handleNext}
          activeOpacity={0.7}
          style={{
            width: 38,
            height: 38,
            borderRadius: 19,
            backgroundColor: UX4GColors.white,
            borderWidth: 1.2,
            borderColor: currentStep < totalSteps ? UX4GColors.primary400 : UX4GColors.neutral200,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Svg width={17} height={17} viewBox="0 0 24 24" fill="none">
            <Path
              d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
              fill={currentStep < totalSteps ? UX4GColors.primary : UX4GColors.neutral400}
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const STEP_METADATA = {
  1: {
    title: 'Registration type',
    subtitle: 'What you are registering as, and whether this is a first registration or a renewal.',
  },
  2: {
    title: 'Applicant & firm',
    subtitle: 'Who is applying, how to reach them, and the business being registered.',
  },
  3: {
    title: 'Office & premises',
    subtitle: 'Where the agency or operator office is located and premises details.',
  },
  4: {
    title: 'Staff & experience',
    subtitle: 'Qualified staff, key personnel, and operational track record.',
  },
  5: {
    title: 'Operations & fleet',
    subtitle: 'Services offered, vehicle fleet details, and statutory clearances.',
  },
  6: {
    title: 'Documents',
    subtitle: 'Only the supporting documents your registration type requires.',
  },
  7: {
    title: 'Review & submit',
    subtitle: 'Verify all entered details, confirm declaration, and submit.',
  },
};

const TRADE_OPTIONS = [
  { id: 'travel_agent', label: 'Travel agent' },
  { id: 'tour_operator', label: 'Tour operator' },
  { id: 'tourist_transport_operator', label: 'Tourist transport operator' },
];

const APPLICATION_TYPE_OPTIONS = [
  { id: 'new', label: 'New registration' },
  { id: 'renewal', label: 'Renewal of an existing registration' },
];

const RELATION_TO_FIRM_OPTIONS = [
  { id: 'proprietor', label: 'Proprietor' },
  { id: 'partner', label: 'Partner' },
  { id: 'director', label: 'Director' },
  { id: 'authorised_signatory', label: 'Authorised signatory' },
];

const LEGAL_ENTITY_TYPES = [
  { id: 'individual', label: 'Individual / Sole Proprietor' },
  { id: 'partnership', label: 'Partnership Firm' },
  { id: 'llp', label: 'Limited Liability Partnership (LLP)' },
  { id: 'pvt_ltd', label: 'Private Limited Company' },
  { id: 'public_ltd', label: 'Public Limited Company' },
  { id: 'society_trust', label: 'Trust / Society' },
];

const BANK_OPTIONS = [
  { id: 'sbi', label: 'State Bank of India' },
  { id: 'hdfc', label: 'HDFC Bank' },
  { id: 'icici', label: 'ICICI Bank' },
  { id: 'axis', label: 'Axis Bank' },
  { id: 'kotak', label: 'Kotak Mahindra Bank' },
  { id: 'pnb', label: 'Punjab National Bank' },
  { id: 'bob', label: 'Bank of Baroda' },
  { id: 'canara', label: 'Canara Bank' },
  { id: 'union', label: 'Union Bank of India' },
  { id: 'indusind', label: 'IndusInd Bank' },
  { id: 'yes', label: 'Yes Bank' },
  { id: 'idfc', label: 'IDFC First Bank' },
];

const parseDateString = (str) => {
  if (!str) return undefined;
  const parts = str.split('/');
  if (parts.length !== 3) return undefined;
  const d = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10) - 1;
  const y = parseInt(parts[2], 10);
  if (isNaN(d) || isNaN(m) || isNaN(y)) return undefined;
  return new Date(y, m, d);
};

export default function App() {
  const [step, setStep] = useState(1);
  const [savedTime, setSavedTime] = useState('3:14 PM');
  const scrollViewRef = useRef(null);

  const [formData, setFormData] = useState({
    // Step 1: Registration type
    tradeType: 'travel_agent',
    applicationType: 'renewal',
    existingRegNumber: '',

    // Step 2: Applicant & firm
    applicantFullName: '',
    fathersName: '',
    relationToFirm: '',
    mobileNumber: '',
    emailAddress: '',
    landline: '',
    tradingName: '',
    legalEntityName: '',
    brandName: '',
    legalEntityType: [],
    firmRegistrationNumber: '',
    firmPan: '',
    gstNumber: '',
    firmEstablishedDate: '',
    website: '',
    bankName: [],
    bankBranch: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors({});
    if (scrollViewRef.current && scrollViewRef.current.scrollTo) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  }, [step]);

  const handleSaveDraft = () => {
    try {
      const now = new Date();
      const hrs = now.getHours();
      const mins = String(now.getMinutes()).padStart(2, '0');
      const ampm = hrs >= 12 ? 'PM' : 'AM';
      const h12 = hrs % 12 || 12;
      setSavedTime(h12 + ':' + mins + ' ' + ampm);
    } catch (_e) {
      setSavedTime('Just now');
    }
    alert('Draft saved successfully at Step ' + step + '!');
  };

  const updateField = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const handleContinueStep1 = () => {
    const errs = {};
    if (!formData.tradeType) {
      errs.tradeType = 'Please select the trade you are applying to register as';
    }
    if (!formData.applicationType) {
      errs.applicationType = 'Please select the type of application';
    }
    if (formData.applicationType === 'renewal' && !formData.existingRegNumber.trim()) {
      errs.existingRegNumber = 'Existing registration number is required for renewal';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(2);
  };

  const handleContinueStep2 = () => {
    const errs = {};
    if (!formData.applicantFullName.trim()) {
      errs.applicantFullName = 'Full name of the applicant is required';
    }
    if (!formData.fathersName.trim()) {
      errs.fathersName = "Father's name is required";
    }
    if (!formData.relationToFirm) {
      errs.relationToFirm = 'Please select your relation to the firm';
    }
    if (!/^[0-9]{10}$/.test(formData.mobileNumber.trim())) {
      errs.mobileNumber = 'Enter a valid 10-digit mobile number';
    }
    if (!/^[^@ ]+@[^@ ]+[.][^@ ]+$/.test(formData.emailAddress.trim())) {
      errs.emailAddress = 'Enter a valid email address';
    }
    if (!formData.tradingName.trim()) {
      errs.tradingName = 'Trading name of the agency is required';
    }
    if (!formData.legalEntityName.trim()) {
      errs.legalEntityName = 'Legal entity name as per PAN is required';
    }
    if (!formData.legalEntityType.length) {
      errs.legalEntityType = 'Please select the type of legal entity';
    }
    if (!formData.firmRegistrationNumber.trim()) {
      errs.firmRegistrationNumber = 'Firm registration or incorporation number is required';
    }
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/i.test(formData.firmPan.trim())) {
      errs.firmPan = 'Enter a valid 10-character PAN (e.g. ABCDE1234F)';
    }
    if (!formData.firmEstablishedDate.trim()) {
      errs.firmEstablishedDate = 'Date the firm was established is required';
    }
    if (!formData.bankName.length) {
      errs.bankName = 'Please select your bank';
    }
    if (!formData.bankBranch.trim()) {
      errs.bankBranch = 'Branch name or IFSC is required';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(3);
  };

  const handleStepperNext = () => {
    if (step === 1) {
      handleContinueStep1();
    } else if (step === 2) {
      handleContinueStep2();
    } else if (step < 7) {
      setStep(step + 1);
    }
  };

  const handleStepperBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const activeMeta = STEP_METADATA[step] || {
    title: 'Step ' + step,
    subtitle: 'Tour operator and travel agency registration workflow.',
  };

  const selectedTradeLabel =
    (TRADE_OPTIONS.find((item) => item.id === formData.tradeType) || {}).label || 'Travel agent';
  const selectedAppTypeLabel =
    (APPLICATION_TYPE_OPTIONS.find((item) => item.id === formData.applicationType) || {}).label ||
    'Renewal of an existing registration';

  return (
    <Ux4gThemeProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor={UX4GColors.white} />

        {/* Government App Header */}
        <View style={styles.headerBar}>
          <View style={styles.headerLeft}>
            <NationalEmblem width={28} height={36} />
            <View style={styles.headerBrandDivider} />
            <UnionLogo />
          </View>
          <TouchableOpacity style={styles.menuButton} activeOpacity={0.7}>
            <View style={styles.menuIconContainer}>
              <View style={styles.menuBar} />
              <View style={styles.menuBar} />
              <View style={styles.menuBar} />
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView
          ref={scrollViewRef}
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Floating Auto-saved Status Banner above the main card */}
          <Ux4gStatusBanner
            variant="successLight"
            title=""
            leadingIcon={<View />}
            trailingIcon={
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <Svg width={17} height={17} viewBox="0 0 24 24" fill="none">
                  <Circle cx="12" cy="12" r="9.5" stroke={UX4GColors.green} strokeWidth="1.8" />
                  <Path
                    d="M8.5 12.2L10.8 14.5L15.8 9.5"
                    stroke={UX4GColors.green}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
                <Text style={styles.savedBannerText}>{'Saved ' + savedTime}</Text>
              </View>
            }
            contentAlignment="right"
            backgroundColor={UX4GColors.green50}
            borderColor={UX4GColors.transparent}
            height={42}
            marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
            containerStyle={styles.savedBannerContainer}
            paddingStyle={{ paddingVertical: 2, paddingHorizontal: 14 }}
          />

          <View style={styles.mainCard}>
            {/* 7-Step Compact Stepper Header */}
            <Ux4gCompactStepper
              totalSteps={7}
              currentStep={step}
              stepLabel={activeMeta.title}
              description={activeMeta.subtitle}
              onPrevious={handleStepperBack}
              onNext={handleStepperNext}
              cumulative={true}
              style={{ padding: 0, marginVertical: 2 }}
            />

            <View style={styles.stepperBottomDivider} />

            {step === 1 ? (
              <View style={styles.formContainer}>
                {/* 1. Service Required */}
                <Text style={styles.sectionHeading}>Service Required</Text>

                {/* Trade you are applying to register as */}
                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>
                    Trade you are applying to register as<Text style={styles.requiredStar}>*</Text>
                  </Text>
                  <View style={styles.radioStack}>
                    {TRADE_OPTIONS.map((option) => (
                      <Ux4gRadioButton
                        key={option.id}
                        value={option.id}
                        groupValue={formData.tradeType}
                        onChanged={(val) => updateField('tradeType', val)}
                        label={option.label}
                        size="medium"
                        color={UX4GColors.primary}
                        labelStyle={styles.radioOptionLabel}
                        style={styles.radioRowItem}
                      />
                    ))}
                  </View>
                  {errors.tradeType && (
                    <Text style={styles.inlineErrorText}>{errors.tradeType}</Text>
                  )}
                </View>

                {/* Type of application */}
                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>
                    Type of application<Text style={styles.requiredStar}>*</Text>
                  </Text>
                  <View style={styles.radioStack}>
                    {APPLICATION_TYPE_OPTIONS.map((option) => (
                      <Ux4gRadioButton
                        key={option.id}
                        value={option.id}
                        groupValue={formData.applicationType}
                        onChanged={(val) => updateField('applicationType', val)}
                        label={option.label}
                        size="medium"
                        color={UX4GColors.primary}
                        labelStyle={styles.radioOptionLabel}
                        style={styles.radioRowItem}
                      />
                    ))}
                  </View>
                  {errors.applicationType && (
                    <Text style={styles.inlineErrorText}>{errors.applicationType}</Text>
                  )}
                </View>

                {/* 2. Existing Registration Details (shown for renewal) */}
                {formData.applicationType === 'renewal' && (
                  <View style={styles.existingRegSection}>
                    <Text style={styles.sectionHeading}>Existing Registration Details</Text>
                    <Ux4gInputField
                      label="Existing registration number"
                      required
                      size="large"
                      value={formData.existingRegNumber}
                      onValueChange={(v) => updateField('existingRegNumber', v)}
                      placeholder="For example TA/HP/2021/00412"
                      labelStyle={styles.inputLabelStyle}
                      borderColor={UX4GColors.neutral300}
                      status={errors.existingRegNumber ? 'error' : 'defaultStatus'}
                      caption={errors.existingRegNumber}
                    />
                  </View>
                )}
              </View>
            ) : step === 2 ? (
              <View style={styles.formContainer}>
                {/* 1. Applicant Details */}
                <Text style={styles.sectionHeading}>Applicant Details</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Full name of the applicant"
                    required
                    size="large"
                    value={formData.applicantFullName}
                    onValueChange={(v) => updateField('applicantFullName', v)}
                    placeholder="As it appears on the PAN"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                    status={errors.applicantFullName ? 'error' : 'defaultStatus'}
                    caption={errors.applicantFullName}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Father's name"
                    required
                    size="large"
                    value={formData.fathersName}
                    onValueChange={(v) => updateField('fathersName', v)}
                    placeholder="Full name"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                    status={errors.fathersName ? 'error' : 'defaultStatus'}
                    caption={errors.fathersName}
                  />
                </View>

                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>
                    Your relation to the firm<Text style={styles.requiredStar}>*</Text>
                  </Text>
                  <View style={styles.radioStack}>
                    {RELATION_TO_FIRM_OPTIONS.map((option) => (
                      <Ux4gRadioButton
                        key={option.id}
                        value={option.id}
                        groupValue={formData.relationToFirm}
                        onChanged={(val) => updateField('relationToFirm', val)}
                        label={option.label}
                        size="medium"
                        color={UX4GColors.primary}
                        labelStyle={styles.radioOptionLabel}
                        style={styles.radioRowItem}
                      />
                    ))}
                  </View>
                  {errors.relationToFirm && (
                    <Text style={styles.inlineErrorText}>{errors.relationToFirm}</Text>
                  )}
                </View>

                {/* 2. Contact Details */}
                <Text style={[styles.sectionHeading, { marginTop: 4 }]}>Contact Details</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Mobile number"
                    required
                    size="large"
                    prefixText="+91"
                    value={formData.mobileNumber}
                    onValueChange={(v) => updateField('mobileNumber', v)}
                    placeholder="10 digits"
                    type="number"
                    maxLength={10}
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                    status={errors.mobileNumber ? 'error' : 'defaultStatus'}
                    caption={errors.mobileNumber}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Email address"
                    required
                    size="large"
                    type="email"
                    value={formData.emailAddress}
                    onValueChange={(v) => updateField('emailAddress', v)}
                    placeholder="name@example.com"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                    status={errors.emailAddress ? 'error' : 'defaultStatus'}
                    caption={errors.emailAddress}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Landline"
                    size="large"
                    type="number"
                    value={formData.landline}
                    onValueChange={(v) => updateField('landline', v)}
                    placeholder="STD code and number"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                  />
                </View>

                {/* 3. Firm Details */}
                <Text style={[styles.sectionHeading, { marginTop: 6 }]}>Firm Details</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Trading name of the agency"
                    required
                    size="large"
                    value={formData.tradingName}
                    onValueChange={(v) => updateField('tradingName', v)}
                    placeholder="The name you trade under"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                    status={errors.tradingName ? 'error' : 'defaultStatus'}
                    caption={errors.tradingName}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Legal entity name, as per PAN"
                    required
                    size="large"
                    value={formData.legalEntityName}
                    onValueChange={(v) => updateField('legalEntityName', v)}
                    placeholder="As printed on the firm's PAN"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                    status={errors.legalEntityName ? 'error' : 'defaultStatus'}
                    caption={errors.legalEntityName}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Brand name"
                    size="large"
                    value={formData.brandName}
                    onValueChange={(v) => updateField('brandName', v)}
                    placeholder="If you market under a different name"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Type of legal entity"
                    required
                    size="l"
                    options={LEGAL_ENTITY_TYPES}
                    selectedOptionIds={formData.legalEntityType}
                    onSelectionChange={(ids) => updateField('legalEntityType', ids)}
                    placeholder="Select the entity type"
                    labelTextStyle={styles.inputLabelStyle}
                    status={errors.legalEntityType ? 'error' : 'defaultStatus'}
                    description={errors.legalEntityType}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Firm registration or incorporation number"
                    required
                    size="large"
                    value={formData.firmRegistrationNumber}
                    onValueChange={(v) => updateField('firmRegistrationNumber', v)}
                    placeholder="CIN, LLPIN,..."
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                    status={errors.firmRegistrationNumber ? 'error' : 'defaultStatus'}
                    caption={errors.firmRegistrationNumber}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gPanInputField
                    label="PAN of the firm"
                    required
                    size="large"
                    value={formData.firmPan}
                    onValueChange={(v) => updateField('firmPan', v.toUpperCase())}
                    placeholder="Ten characters"
                    labelStyle={styles.inputLabelStyle}
                    status={errors.firmPan ? 'error' : 'defaultStatus'}
                    caption={errors.firmPan || ''}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="GST number"
                    size="large"
                    value={formData.gstNumber}
                    onValueChange={(v) => updateField('gstNumber', v.toUpperCase())}
                    placeholder="If the firm is registered for GST"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gDatePicker
                    label="Date the firm was established"
                    required
                    initialDate={parseDateString(formData.firmEstablishedDate)}
                    onDateSelected={(d) =>
                      updateField('firmEstablishedDate', d.toLocaleDateString('en-GB'))
                    }
                    placeholder="Select date"
                    status={errors.firmEstablishedDate ? 'error' : 'defaultStatus'}
                    description={errors.firmEstablishedDate}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Website"
                    size="large"
                    value={formData.website}
                    onValueChange={(v) => updateField('website', v)}
                    placeholder="https://"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                  />
                </View>

                {/* 4. Bank Details */}
                <Text style={[styles.sectionHeading, { marginTop: 6 }]}>Bank Details</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Bank name"
                    required
                    size="l"
                    searchEnabled={true}
                    options={BANK_OPTIONS}
                    selectedOptionIds={formData.bankName}
                    onSelectionChange={(ids) => updateField('bankName', ids)}
                    placeholder="Search your bank"
                    labelTextStyle={styles.inputLabelStyle}
                    status={errors.bankName ? 'error' : 'defaultStatus'}
                    description={errors.bankName}
                  />
                </View>

                <View style={[styles.fieldSpacing, { marginBottom: 4 }]}>
                  <Ux4gInputField
                    label="Branch"
                    required
                    size="large"
                    value={formData.bankBranch}
                    onValueChange={(v) => updateField('bankBranch', v)}
                    placeholder="Branch name or IFSC"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                    status={errors.bankBranch ? 'error' : 'defaultStatus'}
                    caption={errors.bankBranch}
                  />
                </View>
              </View>
            ) : (
              <View style={styles.formContainer}>
                <Ux4gStatusBanner
                  variant="infoLight"
                  title={'Step ' + step + ' of 7 — ' + activeMeta.title}
                  subtitle={
                    activeMeta.subtitle +
                    ' Selected: ' +
                    selectedTradeLabel +
                    ' · ' +
                    selectedAppTypeLabel +
                    (formData.applicationType === 'renewal' && formData.existingRegNumber.trim()
                      ? ' (' + formData.existingRegNumber.trim() + ')'
                      : '') +
                    '.'
                  }
                  titleNumberOfLines={3}
                  subtitleNumberOfLines={5}
                  backgroundColor={UX4GColors.blue50}
                  borderColor={UX4GColors.blue200}
                  marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
                  paddingStyle={{ paddingVertical: 14, paddingHorizontal: 14 }}
                  containerStyle={{ borderRadius: 10 }}
                />
              </View>
            )}
          </View>
        </ScrollView>

        {/* Pinned Bottom Action Bar */}
        <View style={styles.bottomActionBar}>
          <Ux4gButton
            text="Continue"
            variant="primary"
            size="large"
            height={48}
            backgroundColor={UX4GColors.primary}
            contentColor={UX4GColors.white}
            borderRadius={8}
            onPress={handleStepperNext}
            style={{ width: '100%' }}
          />
          <View style={{ height: 10 }} />
          <Ux4gButton
            text="Save as draft"
            variant="outline"
            size="large"
            height={48}
            backgroundColor={UX4GColors.white}
            contentColor={UX4GColors.primary}
            borderColor={UX4GColors.primary200}
            borderWidth={1}
            borderRadius={8}
            onPress={handleSaveDraft}
            style={{ width: '100%' }}
          />
        </View>
      </SafeAreaView>
    </Ux4gThemeProvider>
  );
}

const STATUSBAR_HEIGHT =
  Platform.OS === 'android' ? (StatusBar.currentHeight ? StatusBar.currentHeight + 6 : 40) : 0;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: UX4GColors.neutral50,
    paddingTop: STATUSBAR_HEIGHT,
  },
  headerBar: {
    height: 60,
    backgroundColor: UX4GColors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: UX4GColors.neutral200,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerBrandDivider: {
    width: 1,
    height: 32,
    backgroundColor: UX4GColors.neutral300,
    marginHorizontal: 10,
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: UX4GColors.primary200,
    backgroundColor: UX4GColors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIconContainer: {
    gap: 3.5,
  },
  menuBar: {
    width: 17,
    height: 2,
    borderRadius: 1,
    backgroundColor: UX4GColors.primary,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 20,
  },
  savedBannerContainer: {
    borderRadius: 10,
    borderWidth: 0,
    marginBottom: 12,
    elevation: 0,
    shadowOpacity: 0,
    justifyContent: 'center',
  },
  savedBannerText: {
    fontSize: 12.5,
    fontWeight: '500',
    color: UX4GColors.green800,
  },
  mainCard: {
    backgroundColor: UX4GColors.white,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    shadowColor: UX4GColors.neutral900,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  stepperBottomDivider: {
    height: 1,
    backgroundColor: UX4GColors.neutral200,
    marginTop: 16,
    marginBottom: 16,
  },
  formContainer: {
    paddingTop: 2,
  },
  fieldSpacing: {
    marginBottom: 14,
  },
  sectionHeading: {
    fontSize: 15.5,
    fontWeight: '700',
    color: UX4GColors.neutral950,
    marginBottom: 12,
  },
  groupBlock: {
    marginBottom: 16,
  },
  fieldGroupLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: UX4GColors.neutral800,
    marginBottom: 8,
    lineHeight: 20,
  },
  requiredStar: {
    color: UX4GColors.red,
    fontWeight: '600',
  },
  radioStack: {
    gap: 4,
  },
  radioRowItem: {
    paddingVertical: 3,
  },
  radioOptionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: UX4GColors.neutral900,
  },
  existingRegSection: {
    marginTop: 4,
  },
  inputLabelStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: UX4GColors.neutral800,
  },
  inlineErrorText: {
    fontSize: 12,
    color: UX4GColors.red,
    marginTop: 6,
    fontWeight: '500',
  },
  bottomActionBar: {
    backgroundColor: UX4GColors.white,
    borderTopWidth: 1,
    borderTopColor: UX4GColors.neutral200,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 14,
  },
});
`;
  }, []);

  // Direct Expo Snack embed URL using official Snack ID
  const snackUrl = useMemo(() => {
    return `https://snack.expo.dev/embedded/${SNACK_ID}?platform=android&supportedPlatforms=ios,android&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&theme=${
      isDark ? 'dark' : 'light'
    }`;
  }, [isDark]);

  // Modular ZIP Downloader for the standalone React Native application
  const handleDownloadZip = async () => {
    setIsDownloadingZip(true);
    try {
      const zip = new JSZip();
      const modularFiles = buildTourOperatorModularProject(fullAppCodeString);

      Object.entries(modularFiles).forEach(([filePath, fileContent]) => {
        zip.file(filePath, fileContent);
      });

      const content = await zip.generateAsync({ type: 'blob' });
      const downloadUrl = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'Tour-Operator-Travel-Agency-Registration-Flow-UX4G.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);

      triggerToast('Tour operator and Travel Agency Registration Flow (Modular ZIP) downloaded successfully!');
    } catch (error) {
      console.error('Failed to create ZIP package:', error);
      triggerToast('Error generating ZIP file. Please try again.');
    } finally {
      setIsDownloadingZip(false);
    }
  };

  return (
    <Ux4gThemeProvider isDark={isDark}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 20px' }}>
        {/* Breadcrumb & Header Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 24,
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
              <h1
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  margin: 0,
                  color: isDark ? '#F1F5F9' : '#0F172A',
                  letterSpacing: '-0.5px',
                }}
              >
                Tour operator and Travel Agency Registration Flow
              </h1>
              <span
                style={{
                  display: 'inline-block',
                  padding: '3px 10px',
                  borderRadius: 12,
                  fontSize: 12,
                  fontWeight: 600,
                  backgroundColor: isDark ? '#312E81' : '#EEF2FF',
                  color: UX4GColors.primary600,
                  border: `1px solid ${isDark ? '#4338CA' : '#C7D2FE'}`,
                }}
              >
                Service Pattern • 7 Steps (Steps 1–2 Active)
              </span>
            </div>
            <p
              style={{
                fontSize: 14,
                margin: 0,
                color: isDark ? '#94A3B8' : '#64748B',
                maxWidth: 680,
                lineHeight: 1.5,
              }}
            >
              Government citizen service registration flow for travel agents, tour operators, and tourist
              transport operators. Rendered with Expo Snack and built strictly with UX4G React Native components.
            </p>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button
              onClick={handleDownloadZip}
              disabled={isDownloadingZip}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 20px',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
                backgroundColor: UX4GColors.primary600,
                color: '#FFFFFF',
                border: 'none',
                cursor: isDownloadingZip ? 'wait' : 'pointer',
                boxShadow: '0 2px 8px rgba(79, 70, 229, 0.3)',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                {isDownloadingZip ? 'hourglass_top' : 'download'}
              </span>
              {isDownloadingZip ? 'Preparing ZIP...' : 'Download Code (ZIP)'}
            </button>
          </div>
        </div>

        {/* Global Toast Alert */}
        {toastMessage && (
          <div
            style={{
              marginBottom: 16,
              padding: '10px 16px',
              borderRadius: 8,
              backgroundColor: isDark ? '#1E293B' : '#F0FDF4',
              border: `1px solid ${isDark ? '#334155' : '#86EFAC'}`,
              color: isDark ? '#F1F5F9' : '#166534',
              fontSize: 13,
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#16A34A' }}>
              check_circle
            </span>
            {toastMessage}
          </div>
        )}

        {/* --- EXPO SNACK EMBED CONTAINER --- */}
        <div
          className={`wb-preview-area ${isDark ? 'dark' : ''}`}
          style={{
            position: 'relative',
            padding: 0,
            overflow: 'hidden',
            borderRadius: 8,
            minHeight: 880,
            backgroundColor: isDark ? '#1E293B' : '#F8FAFC',
            border: `1px solid ${isDark ? '#334155' : '#E2E8F0'}`,
          }}
        >
          <iframe
            src={snackUrl}
            style={{
              width: '100%',
              height: '880px',
              border: 'none',
              borderRadius: '8px',
              display: 'block',
            }}
            title="Expo Snack Tour operator and Travel Agency Registration Flow Preview"
          />
        </div>
      </div>
    </Ux4gThemeProvider>
  );
};

export default TourOperatorRegistrationFlowDoc;
