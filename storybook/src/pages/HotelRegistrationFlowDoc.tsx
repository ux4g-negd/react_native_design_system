import React, { useState, useMemo } from 'react';
import JSZip from 'jszip';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { buildHotelModularProject } from '../utils/hotelModularZip';

interface HotelRegistrationFlowDocProps {
  isDark: boolean;
}

// Official Snack ID for Hotel Registration Flow (9-Step Workflow, Step 1 Active)
const SNACK_ID = '_-ZZZ_eGNovJN_sZwkmtV';

export const HotelRegistrationFlowDoc: React.FC<HotelRegistrationFlowDocProps> = ({ isDark }) => {
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
  Ux4gSelectionDropdown,
  Ux4gInputField,
  Ux4gCheckbox,
  Ux4gStatusBanner,
  Ux4gCompactStepper,
  Ux4gCard,
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

const STEP_METADATA = {
  1: {
    title: 'Before you start',
    subtitle: 'What you are registering, where it is, and what the application will need.',
  },
  2: {
    title: 'Hotel & Unit Details',
    subtitle: 'Identity of the hotel property and legal promoter details.',
  },
  3: {
    title: 'Owner & Management',
    subtitle: 'Applicant, proprietor, and day-to-day management information.',
  },
  4: {
    title: 'Rooms & Tariff',
    subtitle: 'Total guest rooms, suite classifications, and nightly rates.',
  },
  5: {
    title: 'Facilities & Services',
    subtitle: 'Dining, parking, accessibility, and mandatory hotel amenities.',
  },
  6: {
    title: 'Safety & Statutory Compliance',
    subtitle: 'Fire NOC, sanitation, and statutory compliance confirmations.',
  },
  7: {
    title: 'Documents Upload',
    subtitle: 'Required certificates, clearances, and property photographs.',
  },
  8: {
    title: 'Review & Declaration',
    subtitle: 'Verify all entered details before fee calculation.',
  },
  9: {
    title: 'Fee & Payment',
    subtitle: 'Registration fee summary and online transaction.',
  },
};

const UNIT_CATEGORIES = [
  { id: '1_star', label: '1 Star Hotel' },
  { id: '2_star', label: '2 Star Hotel' },
  { id: '3_star', label: '3 Star Hotel' },
  { id: '4_star', label: '4 Star Hotel' },
  { id: '5_star', label: '5 Star Hotel' },
  { id: '5_star_deluxe', label: '5 Star Deluxe Hotel' },
  { id: 'heritage', label: 'Heritage Hotel' },
  { id: 'resort', label: 'Resort / Spa Hotel' },
  { id: 'budget', label: 'Budget / Lodge Hotel' },
];

const STATES_AND_UTS = [
  { id: 'uk', label: 'Uttarakhand' },
  { id: 'hp', label: 'Himachal Pradesh' },
  { id: 'dl', label: 'Delhi' },
  { id: 'mh', label: 'Maharashtra' },
  { id: 'rj', label: 'Rajasthan' },
  { id: 'ga', label: 'Goa' },
  { id: 'ka', label: 'Karnataka' },
];

const DISTRICTS_OPTIONS = [
  { id: 'ddn', label: 'Dehradun' },
  { id: 'nni', label: 'Nainital' },
  { id: 'hdw', label: 'Haridwar' },
  { id: 'tehri', label: 'Tehri Garhwal' },
  { id: 'alm', label: 'Almora' },
];

const CIRCLE_SUB_OFFICES = [
  { id: 'mus_circle', label: 'Mussoorie Tourism Circle' },
  { id: 'ddn_central', label: 'Dehradun Central Sub-Office' },
  { id: 'rishikesh_circle', label: 'Rishikesh Tourism Circle' },
];

const SUB_DISTRICTS = [
  { id: 'mus', label: 'Mussoorie' },
  { id: 'vik', label: 'Vikasnagar' },
  { id: 'doi', label: 'Doiwala' },
  { id: 'rsh', label: 'Rishikesh' },
];

const CITIES_VILLAGES = [
  { id: 'mus_city', label: 'Mussoorie (Municipal Board)' },
  { id: 'landour', label: 'Landour Cantonment' },
  { id: 'rajpur', label: 'Rajpur' },
  { id: 'ddn_city', label: 'Dehradun City' },
];

const WARDS_PANCHAYATS = [
  { id: 'ward_1', label: 'Ward 01 — Library Bazaar' },
  { id: 'ward_2', label: 'Ward 02 — Mall Road' },
  { id: 'ward_3', label: 'Ward 03 — Kulri' },
  { id: 'gp_kyarkuli', label: 'Kyarkuli Bhatta Gram Panchayat' },
];

const ELIGIBILITY_STATEMENTS = [
  { id: 'occupancy_cert', label: 'The building has an occupancy or completion certificate' },
  { id: 'fire_safety', label: 'Fire safety clearance has been obtained or applied for' },
  { id: 'commercial_utilities', label: 'Water and power are sanctioned for commercial use' },
  { id: 'no_litigation', label: 'There is no pending litigation on the land or premises' },
];

export default function App() {
  const [step, setStep] = useState(1);
  const [savedTime, setSavedTime] = useState('3:14 PM');
  const scrollViewRef = useRef(null);

  const [formData, setFormData] = useState({
    applicationType: '',
    unitCategory: [],
    registrationSought: '',
    existingRegNumber: '',
    stateUT: [],
    district: [],
    circleSubOffice: [],
    subDistrict: [],
    cityVillage: [],
    wardPanchayat: [],
    pinCode: '',
    eligibilityCriteria: [],
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

  const toggleEligibilityItem = (id) => {
    setFormData((prev) => {
      const exists = prev.eligibilityCriteria.includes(id);
      return {
        ...prev,
        eligibilityCriteria: exists
          ? prev.eligibilityCriteria.filter((x) => x !== id)
          : [...prev.eligibilityCriteria, id],
      };
    });
  };

  const getEligibilityBannerSummary = () => {
    const total = ELIGIBILITY_STATEMENTS.length;
    const unticked = total - formData.eligibilityCriteria.length;
    if (unticked <= 0) {
      return {
        isPermanentEligible: true,
        message:
          'All four statements are ticked. Your unit qualifies for a PERMANENT hotel registration.',
      };
    }
    const wordMap = {
      1: 'One statement is unticked.',
      2: 'Two statements are unticked.',
      3: 'Three statements are unticked.',
      4: 'Four statements are unticked.',
    };
    return {
      isPermanentEligible: false,
      message:
        (wordMap[unticked] || unticked + ' statements are unticked.') +
        ' You can still apply, but the registration issued will be TEMPORARY — valid one year, extendable once on request. Tick all four for a permanent registration.',
    };
  };

  const eligibilitySummary = getEligibilityBannerSummary();

  const handleContinueStep1 = () => {
    const errs = {};
    if (!formData.applicationType) {
      errs.applicationType = 'Please select the type of application';
    }
    if (!formData.unitCategory.length) {
      errs.unitCategory = 'Please select the category of unit';
    }
    if (!formData.registrationSought) {
      errs.registrationSought = 'Please select the registration sought';
    }
    if (formData.applicationType === 'renewal' && !formData.existingRegNumber.trim()) {
      errs.existingRegNumber = 'Existing registration number is required for renewal';
    }
    if (!formData.stateUT.length) {
      errs.stateUT = 'State / UT is required';
    }
    if (!formData.district.length) {
      errs.district = 'District is required';
    }
    if (!formData.circleSubOffice.length) {
      errs.circleSubOffice = 'Circle / sub-office is required';
    }
    if (!formData.subDistrict.length) {
      errs.subDistrict = 'Sub-district is required';
    }
    if (!formData.cityVillage.length) {
      errs.cityVillage = 'City / Town / Village is required';
    }
    if (!/^\\d{6}$/.test(formData.pinCode.trim())) {
      errs.pinCode = 'Enter a valid 6-digit PIN code';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(2);
  };

  const handleStepperNext = () => {
    if (step === 1) {
      handleContinueStep1();
    } else if (step < 9) {
      setStep(step + 1);
    }
  };

  const handleStepperBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const activeMeta = STEP_METADATA[step] || {
    title: 'Step ' + step,
    subtitle: 'Hotel registration workflow.',
  };

  return (
    <Ux4gThemeProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor={UX4GColors.white} />

        {/* Government App Header */}
        <View style={styles.headerBar}>
          <View style={styles.headerLeft}>
            <NationalEmblem width={32} height={36} />
            <View style={{ width: 8 }} />
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
          <View style={styles.mainCard}>
            {/* Auto-saved Status Banner */}
            <Ux4gStatusBanner
              variant="successLight"
              title=""
              leadingIcon={<View />}
              trailingIcon={
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                  <Svg width={15} height={15} viewBox="0 0 24 24" fill="none">
                    <Circle cx="12" cy="12" r="9.5" stroke={UX4GColors.green} strokeWidth="1.8" />
                    <Path
                      d="M8.5 12.2L10.8 14.5L15.8 9.5"
                      stroke={UX4GColors.green}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                  <Text style={{ fontSize: 11.5, fontWeight: '600', color: UX4GColors.green800 }}>
                    {'Saved ' + savedTime}
                  </Text>
                </View>
              }
              contentAlignment="right"
              backgroundColor={UX4GColors.green50}
              borderColor={UX4GColors.transparent}
              height={34}
              marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
              containerStyle={{
                borderRadius: 6,
                marginBottom: 8,
                elevation: 0,
                shadowOpacity: 0,
                justifyContent: 'center',
              }}
              paddingStyle={{ paddingVertical: 1, paddingHorizontal: 12 }}
            />

            {/* 9-Step Compact Stepper Header using official UX4G Component */}
            <Ux4gCompactStepper
              totalSteps={9}
              currentStep={step}
              layout="centeredBetween"
              stepLabel={activeMeta.title}
              description={activeMeta.subtitle}
              onPrevious={handleStepperBack}
              onNext={handleStepperNext}
              activeColor={UX4GColors.primary}
              inactiveColor={UX4GColors.neutral300}
              style={{ padding: 0, marginVertical: 4 }}
            />

            <View style={styles.stepperBottomDivider} />

            {step === 1 ? (
              <View style={styles.formContainer}>
                {/* 1. Service Required */}
                <Text style={styles.sectionHeading}>Service Required</Text>

                {/* Type of application */}
                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>
                    Type of application<Text style={{ color: UX4GColors.red }}>*</Text>
                  </Text>
                  <View style={styles.radioStack}>
                    <Ux4gRadioButton
                      value="new"
                      groupValue={formData.applicationType}
                      onChanged={(val) => updateField('applicationType', val)}
                      label="New registration"
                      size="small"
                      color={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      value="renewal"
                      groupValue={formData.applicationType}
                      onChanged={(val) => updateField('applicationType', val)}
                      label="Renewal of an existing registration"
                      size="small"
                      color={UX4GColors.primary}
                    />
                  </View>
                  {errors.applicationType && (
                    <Text style={styles.inlineErrorText}>{errors.applicationType}</Text>
                  )}
                </View>

                {/* Category of unit */}
                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Category of unit"
                    required
                    size="l"
                    options={UNIT_CATEGORIES}
                    selectedOptionIds={formData.unitCategory}
                    onSelectionChange={(ids) => updateField('unitCategory', ids)}
                    placeholder="Select the category"
                    status={errors.unitCategory ? 'error' : 'defaultStatus'}
                    description={errors.unitCategory}
                  />
                </View>

                {/* Registration sought */}
                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>
                    Registration sought<Text style={{ color: UX4GColors.red }}>*</Text>
                  </Text>
                  <View style={styles.radioStack}>
                    <Ux4gRadioButton
                      value="permanent"
                      groupValue={formData.registrationSought}
                      onChanged={(val) => updateField('registrationSought', val)}
                      label="Permanent"
                      size="small"
                      color={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      value="temporary"
                      groupValue={formData.registrationSought}
                      onChanged={(val) => updateField('registrationSought', val)}
                      label="Temporary — valid 1 year, extendable"
                      size="small"
                      color={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      value="not_sure"
                      groupValue={formData.registrationSought}
                      onChanged={(val) => updateField('registrationSought', val)}
                      label="Not sure — check my eligibility below"
                      size="small"
                      color={UX4GColors.primary}
                    />
                  </View>
                  {errors.registrationSought && (
                    <Text style={styles.inlineErrorText}>{errors.registrationSought}</Text>
                  )}
                </View>

                {/* 2. Existing Registration Details */}
                <Text style={[styles.sectionHeading, { marginTop: 8 }]}>
                  Existing Registration Details
                </Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Existing registration number"
                    required
                    size="large"
                    value={formData.existingRegNumber}
                    onValueChange={(v) => updateField('existingRegNumber', v)}
                    placeholder="As printed on the certificate you are renewing"
                    status={errors.existingRegNumber ? 'error' : 'defaultStatus'}
                    caption={errors.existingRegNumber}
                  />
                </View>

                {/* 3. Location Details */}
                <Text style={[styles.sectionHeading, { marginTop: 8 }]}>Location Details</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="State / UT"
                    required
                    size="l"
                    options={STATES_AND_UTS}
                    selectedOptionIds={formData.stateUT}
                    onSelectionChange={(ids) => updateField('stateUT', ids)}
                    placeholder="Select State / UT"
                    status={errors.stateUT ? 'error' : 'defaultStatus'}
                    description={errors.stateUT}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="District"
                    required
                    size="l"
                    options={DISTRICTS_OPTIONS}
                    selectedOptionIds={formData.district}
                    onSelectionChange={(ids) => updateField('district', ids)}
                    placeholder="Select District"
                    status={errors.district ? 'error' : 'defaultStatus'}
                    description={errors.district}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Circle / sub-office"
                    required
                    size="l"
                    options={CIRCLE_SUB_OFFICES}
                    selectedOptionIds={formData.circleSubOffice}
                    onSelectionChange={(ids) => updateField('circleSubOffice', ids)}
                    placeholder="Shown only where the department divides districts"
                    status={errors.circleSubOffice ? 'error' : 'defaultStatus'}
                    description={errors.circleSubOffice}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Sub-district — Tehsil / Mandal / Taluka"
                    required
                    size="l"
                    options={SUB_DISTRICTS}
                    selectedOptionIds={formData.subDistrict}
                    onSelectionChange={(ids) => updateField('subDistrict', ids)}
                    placeholder="Select Sub-district"
                    status={errors.subDistrict ? 'error' : 'defaultStatus'}
                    description={errors.subDistrict}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="City / Town / Village"
                    required
                    size="l"
                    options={CITIES_VILLAGES}
                    selectedOptionIds={formData.cityVillage}
                    onSelectionChange={(ids) => updateField('cityVillage', ids)}
                    placeholder="Select City, Town or Village"
                    status={errors.cityVillage ? 'error' : 'defaultStatus'}
                    description={errors.cityVillage}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Ward / Gram panchayat"
                    size="l"
                    options={WARDS_PANCHAYATS}
                    selectedOptionIds={formData.wardPanchayat}
                    onSelectionChange={(ids) => updateField('wardPanchayat', ids)}
                    placeholder="Select Ward or Gram panchayat"
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="PIN code"
                    required
                    size="large"
                    value={formData.pinCode}
                    onValueChange={(v) => updateField('pinCode', v)}
                    placeholder="6 digits"
                    type="number"
                    maxLength={6}
                    status={errors.pinCode ? 'error' : 'defaultStatus'}
                    caption={errors.pinCode}
                  />
                </View>

                {/* 4. Eligibility Criteria */}
                <Text style={[styles.sectionHeading, { marginTop: 10 }]}>Eligibility Criteria</Text>

                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>
                    Tick every statement that is true of your unit
                    <Text style={{ color: UX4GColors.red }}>*</Text>
                  </Text>
                  <View style={styles.checkboxStack}>
                    {ELIGIBILITY_STATEMENTS.map((stmt) => (
                      <Ux4gCheckbox
                        key={stmt.id}
                        value={formData.eligibilityCriteria.includes(stmt.id)}
                        onChanged={() => toggleEligibilityItem(stmt.id)}
                        label={stmt.label}
                        size="small"
                        activeColor={UX4GColors.primary}
                      />
                    ))}
                  </View>
                </View>

                {/* Dynamic Eligibility Guidance Callout using official Ux4gStatusBanner */}
                <View style={{ marginTop: 6, marginBottom: 4 }}>
                  <Ux4gStatusBanner
                    variant={eligibilitySummary.isPermanentEligible ? 'successLight' : 'warningLight'}
                    title={eligibilitySummary.message}
                    subtitle=""
                    titleNumberOfLines={6}
                    backgroundColor={
                      eligibilitySummary.isPermanentEligible
                        ? UX4GColors.green50
                        : UX4GColors.orange50
                    }
                    borderColor={
                      eligibilitySummary.isPermanentEligible
                        ? UX4GColors.green200
                        : UX4GColors.orange300
                    }
                    marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
                    paddingStyle={{ paddingVertical: 12, paddingHorizontal: 14 }}
                    containerStyle={{ borderRadius: 10 }}
                    titleStyle={{
                      fontSize: 12.5,
                      lineHeight: 18,
                      fontWeight: '500',
                      color: eligibilitySummary.isPermanentEligible
                        ? UX4GColors.green800
                        : UX4GColors.orange800,
                    }}
                  />
                </View>

                {/* Bottom Action Buttons */}
                <View style={styles.actionButtonContainer}>
                  <Ux4gButton
                    text="Continue"
                    variant="primary"
                    size="large"
                    backgroundColor={UX4GColors.primary}
                    borderRadius={8}
                    onPress={handleContinueStep1}
                    style={{ width: '100%' }}
                  />
                  <View style={{ height: 10 }} />
                  <Ux4gButton
                    text="Save as draft"
                    variant="outline"
                    size="large"
                    backgroundColor={UX4GColors.transparent}
                    contentColor={UX4GColors.primary}
                    borderColor={UX4GColors.primary200}
                    borderWidth={1}
                    borderRadius={8}
                    onPress={handleSaveDraft}
                    style={{ width: '100%' }}
                  />
                </View>
              </View>
            ) : (
              <View style={styles.formContainer}>
                <Ux4gStatusBanner
                  variant="infoLight"
                  title={'Step ' + step + ' of 9 — ' + activeMeta.title}
                  subtitle={
                    activeMeta.subtitle +
                    ' Your Step 1 selections (' +
                    (eligibilitySummary.isPermanentEligible
                      ? 'Permanent eligible'
                      : 'Temporary 1-year eligible') +
                    (formData.pinCode ? ' • PIN ' + formData.pinCode : '') +
                    ') are preserved in the draft.'
                  }
                  titleNumberOfLines={2}
                  subtitleNumberOfLines={4}
                  backgroundColor={UX4GColors.primary50}
                  borderColor={UX4GColors.primary200}
                  marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
                  paddingStyle={{ paddingVertical: 14, paddingHorizontal: 14 }}
                  containerStyle={{ borderRadius: 10, marginBottom: 16 }}
                />

                <Ux4gCard
                  cornerRadius={10}
                  borderWidth={1}
                  borderColor={UX4GColors.neutral200}
                  backgroundColor={UX4GColors.neutral50}
                  elevation={0}
                  style={{ padding: 14 }}
                >
                  <Text style={styles.sectionHeading}>{activeMeta.title}</Text>
                  <Text style={styles.helperNoteText}>
                    This step screen is synced with the 9-step Hotel Registration workflow stepper and draft state.
                  </Text>
                </Ux4gCard>

                <View style={styles.actionButtonContainer}>
                  {step < 9 && (
                    <>
                      <Ux4gButton
                        text="Continue"
                        variant="primary"
                        size="large"
                        backgroundColor={UX4GColors.primary}
                        borderRadius={8}
                        onPress={handleStepperNext}
                        style={{ width: '100%' }}
                      />
                      <View style={{ height: 10 }} />
                    </>
                  )}
                  <Ux4gButton
                    text="Back"
                    variant="outline"
                    size="large"
                    backgroundColor={UX4GColors.transparent}
                    contentColor={UX4GColors.primary}
                    borderColor={UX4GColors.primary200}
                    borderWidth={1}
                    borderRadius={8}
                    onPress={handleStepperBack}
                    style={{ width: '100%' }}
                  />
                  <View style={{ height: 10 }} />
                  <Ux4gButton
                    text="Save as draft"
                    variant="outline"
                    size="large"
                    backgroundColor={UX4GColors.transparent}
                    contentColor={UX4GColors.primary}
                    borderColor={UX4GColors.primary200}
                    borderWidth={1}
                    borderRadius={8}
                    onPress={handleSaveDraft}
                    style={{ width: '100%' }}
                  />
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </Ux4gThemeProvider>
  );
}

const STATUSBAR_HEIGHT = Platform.OS === 'android' ? (StatusBar.currentHeight ? StatusBar.currentHeight + 6 : 40) : 0;

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
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: UX4GColors.neutral100,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: UX4GColors.primary100,
    backgroundColor: UX4GColors.primary50,
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
    paddingTop: 14,
    paddingBottom: 28,
  },
  mainCard: {
    backgroundColor: UX4GColors.white,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 18,
    borderWidth: 1,
    borderColor: UX4GColors.neutral100,
    shadowColor: UX4GColors.neutral900,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  stepperBottomDivider: {
    height: 1,
    backgroundColor: UX4GColors.neutral100,
    marginTop: 10,
    marginBottom: 14,
  },
  formContainer: {
    paddingTop: 2,
  },
  sectionHeading: {
    fontSize: 15,
    fontWeight: '700',
    color: UX4GColors.neutral900,
    marginBottom: 12,
  },
  fieldSpacing: {
    marginBottom: 14,
  },
  groupBlock: {
    marginBottom: 14,
  },
  fieldGroupLabel: {
    fontSize: 13.5,
    fontWeight: '600',
    color: UX4GColors.neutral800,
    marginBottom: 8,
    lineHeight: 19,
  },
  radioStack: {
    gap: 10,
  },
  checkboxStack: {
    gap: 10,
  },
  inlineErrorText: {
    fontSize: 12,
    color: UX4GColors.red,
    marginTop: 5,
    fontWeight: '500',
  },
  helperNoteText: {
    fontSize: 13,
    lineHeight: 19,
    color: UX4GColors.neutral600,
  },
  actionButtonContainer: {
    marginTop: 22,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: UX4GColors.neutral100,
    marginBottom: 4,
  },
});
`;
  }, []);

  // Direct Expo Snack embed URL using official Snack ID
  const snackUrl = useMemo(() => {
    return `https://snack.expo.dev/embedded/${SNACK_ID}?platform=android&supportedPlatforms=ios,android&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&theme=${isDark ? 'dark' : 'light'
      }`;
  }, [isDark]);

  // Modular ZIP Downloader for the standalone React Native application
  const handleDownloadZip = async () => {
    setIsDownloadingZip(true);
    try {
      const zip = new JSZip();
      const modularFiles = buildHotelModularProject(fullAppCodeString);

      Object.entries(modularFiles).forEach(([filePath, fileContent]) => {
        zip.file(filePath, fileContent);
      });

      const content = await zip.generateAsync({ type: 'blob' });
      const downloadUrl = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'Hotel-Registration-Flow-UX4G.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);

      triggerToast('Hotel Registration Flow (9-Step Modular ZIP) downloaded successfully!');
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
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <h1
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  margin: 0,
                  color: isDark ? '#F1F5F9' : '#0F172A',
                  letterSpacing: '-0.5px',
                }}
              >
                Hotel Registration flow
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
                Service Pattern • 9 Steps (Step 1 Active)
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
              Government citizen service registration flow for hotels and commercial accommodation units.
              Rendered with Expo Snack and built strictly with UX4G React Native components.
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
            title="Expo Snack Hotel Registration Flow Preview"
          />
        </div>
      </div>
    </Ux4gThemeProvider>
  );
};

export default HotelRegistrationFlowDoc;