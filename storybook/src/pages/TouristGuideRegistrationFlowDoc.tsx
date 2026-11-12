import React, { useState, useMemo } from 'react';
import JSZip from 'jszip';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { buildTouristGuideModularProject } from '../utils/touristGuideModularZip';

interface TouristGuideRegistrationFlowDocProps {
  isDark: boolean;
}

// Official Snack ID for Tourist guide Registration Flow (6-Step Workflow, Step 1 Active)
const SNACK_ID = '0462uOBqXIx4YNVBIVZ53';

export const TouristGuideRegistrationFlowDoc: React.FC<TouristGuideRegistrationFlowDocProps> = ({ isDark }) => {
  const [isDownloadingZip, setIsDownloadingZip] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Complete Standalone React Native Expo App Source Code (Tourist guide Registration Flow)
  const fullAppCodeString = useMemo(() => {
    return `import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import {
  Ux4gRadioButton,
  Ux4gInputField,
  Ux4gSelectionDropdown,
  Ux4gDatePicker,
  Ux4gStatusBanner,
  Ux4gCompactStepper,
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
    title: 'About you',
    subtitle: 'Who you are, how the department reaches you, and where you live.',
  },
  2: {
    title: 'Qualifications & languages',
    subtitle: 'Your education, guide training, and the languages you guide in.',
  },
  3: {
    title: 'Guiding area & experience',
    subtitle: 'Where you plan to guide, and your track record.',
  },
  4: {
    title: 'Documents',
    subtitle: 'Supporting identity, qualification, and background documents.',
  },
  5: {
    title: 'Review & declaration',
    subtitle: 'Everything you have entered, read back before you commit to it.',
  },
  6: {
    title: 'Fee & payment',
    subtitle: 'What the fee is, what it was worked out from, and how long it lasts.',
  },
};

const PHOTO_GUIDELINES = [
  'Front-facing, shoulders up, eyes open, face unobstructed',
  'Plain, light background — no patterns or other people',
  'JPEG or PNG, up to 2 MB',
];

const GENDER_OPTIONS = [
  { id: 'male', label: 'Male' },
  { id: 'female', label: 'Female' },
  { id: 'other', label: 'Other' },
];

const STATES_AND_UTS = [
  { id: 'hp', label: 'Himachal Pradesh' },
  { id: 'uk', label: 'Uttarakhand' },
  { id: 'dl', label: 'Delhi' },
  { id: 'rj', label: 'Rajasthan' },
  { id: 'mh', label: 'Maharashtra' },
  { id: 'ka', label: 'Karnataka' },
];

const DISTRICTS_OPTIONS = [
  { id: 'shimla', label: 'Shimla' },
  { id: 'kullu', label: 'Kullu' },
  { id: 'kangra', label: 'Kangra' },
  { id: 'dehradun', label: 'Dehradun' },
  { id: 'jaipur', label: 'Jaipur' },
];

const SUB_DISTRICTS = [
  { id: 'shimla_urban', label: 'Shimla (Urban)' },
  { id: 'shimla_rural', label: 'Shimla (Rural)' },
  { id: 'theog', label: 'Theog' },
  { id: 'manali', label: 'Manali' },
  { id: 'mussoorie', label: 'Mussoorie' },
];

const CITIES_VILLAGES = [
  { id: 'shimla_mc', label: 'Shimla (M Corp.)' },
  { id: 'theog_np', label: 'Theog (NP)' },
  { id: 'manali_mc', label: 'Manali (M Cl)' },
  { id: 'gp_kyarkuli', label: 'Kyarkuli Bhatta (GP)' },
];

const CheckSmallIcon = ({ size = 11, color = UX4GColors.white }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M5 12.5L9.5 17L19 7.5"
      stroke={color}
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const AvatarPlaceholderSvg = () => (
  <Svg width={180} height={195} viewBox="0 0 180 195" fill="none">
    <Circle cx="90" cy="70" r="38" fill={UX4GColors.neutral300} />
    <Path
      d="M22 195C22 150 52 122 90 122C128 122 158 150 158 195H22Z"
      fill={UX4GColors.neutral300}
    />
  </Svg>
);

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
    // Step 1: About you
    photoCaptured: false,
    photoSource: '',
    fullName: '',
    fathersName: '',
    dateOfBirth: '',
    gender: '',
    mobileNumber: '',
    emailAddress: '',
    stateUT: [],
    district: [],
    subDistrict: [],
    cityVillage: [],
    permanentHouseStreet: '',
    permanentLandmark: '',
    pinCode: '',
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

  const handlePhotoAction = (source) => {
    updateField('photoCaptured', true);
    updateField('photoSource', source);
  };

  const handleContinueStep1 = () => {
    const errs = {};
    if (!formData.photoCaptured) {
      errs.photoCaptured = 'Please take or upload your photograph';
    }
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    }
    if (!formData.fathersName.trim()) {
      errs.fathersName = "Father's name is required";
    }
    if (!formData.dateOfBirth.trim()) {
      errs.dateOfBirth = 'Date of birth is required';
    }
    if (!formData.gender) {
      errs.gender = 'Please select your gender';
    }
    if (!/^[0-9]{10}$/.test(formData.mobileNumber.trim())) {
      errs.mobileNumber = 'Enter a valid 10-digit mobile number';
    }
    if (!/^[^@ ]+@[^@ ]+[.][^@ ]+$/.test(formData.emailAddress.trim())) {
      errs.emailAddress = 'Enter a valid email address';
    }
    if (!formData.stateUT.length) {
      errs.stateUT = 'State / UT is required';
    }
    if (!formData.district.length) {
      errs.district = 'District is required';
    }
    if (!formData.subDistrict.length) {
      errs.subDistrict = 'Sub-district / Tehsil is required';
    }
    if (!formData.cityVillage.length) {
      errs.cityVillage = 'City / Town / Village is required';
    }
    if (!formData.permanentHouseStreet.trim()) {
      errs.permanentHouseStreet = 'House or building number and street is required';
    }
    if (!/^[0-9]{6}$/.test(formData.pinCode.trim())) {
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
    } else if (step < 6) {
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
    subtitle: 'Tourist guide registration workflow.',
  };

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
            {/* 6-Step Compact Stepper Header using official UX4G Component */}
            <Ux4gCompactStepper
              totalSteps={6}
              currentStep={step}
              layout="centeredBetween"
              stepLabel={activeMeta.title}
              description={activeMeta.subtitle}
              onPrevious={handleStepperBack}
              onNext={handleStepperNext}
              activeColor={UX4GColors.primary}
              inactiveColor={UX4GColors.neutral300}
              cumulative={true}
              style={{ padding: 0, marginVertical: 4 }}
            />

            <View style={styles.stepperBottomDivider} />

            {step === 1 ? (
              <View style={styles.formContainer}>
                {/* 1. Photograph */}
                <Text style={styles.sectionHeading}>Photograph</Text>

                <View
                  style={[
                    styles.photoPreviewBox,
                    formData.photoCaptured && styles.photoPreviewCapturedBox,
                  ]}
                >
                  {formData.photoCaptured ? (
                    <View style={{ alignItems: 'center', gap: 10 }}>
                      <View style={styles.photoCapturedBadge}>
                        <CheckSmallIcon size={18} color={UX4GColors.white} />
                      </View>
                      <Text style={styles.photoCapturedTitle}>
                        {formData.photoSource === 'camera'
                          ? 'Photo captured'
                          : 'Photo uploaded'}
                      </Text>
                      <Text style={styles.photoCapturedSubtitle}>
                        tourist_guide_photo.jpg · Ready for licence
                      </Text>
                    </View>
                  ) : (
                    <AvatarPlaceholderSvg />
                  )}
                </View>

                <View style={styles.photoChecklistBlock}>
                  {PHOTO_GUIDELINES.map((item, idx) => (
                    <View key={idx} style={styles.photoCheckRow}>
                      <View style={styles.photoCheckCircle}>
                        <CheckSmallIcon size={11} color={UX4GColors.white} />
                      </View>
                      <Text style={styles.photoCheckText}>{item}</Text>
                    </View>
                  ))}
                  <Text style={styles.photoFootnote}>
                    This photograph is printed on your licence, so it is checked.
                  </Text>
                </View>

                {errors.photoCaptured ? (
                  <Text style={[styles.inlineErrorText, { marginBottom: 10 }]}>
                    {errors.photoCaptured}
                  </Text>
                ) : null}

                <View style={{ gap: 10, marginBottom: 20 }}>
                  <Ux4gButton
                    text="Take a photo"
                    variant="primary"
                    size="large"
                    height={48}
                    backgroundColor={UX4GColors.primary}
                    contentColor={UX4GColors.white}
                    borderRadius={8}
                    onPress={() => handlePhotoAction('camera')}
                    style={{ width: '100%' }}
                  />
                  <Ux4gButton
                    text="Upload a photo"
                    variant="outline"
                    size="large"
                    height={48}
                    backgroundColor={UX4GColors.white}
                    contentColor={UX4GColors.primary}
                    borderColor={UX4GColors.primary200}
                    borderWidth={1}
                    borderRadius={8}
                    onPress={() => handlePhotoAction('upload')}
                    style={{ width: '100%' }}
                  />
                </View>

                {/* 2. Applicant Details */}
                <Text style={styles.sectionHeading}>Applicant Details</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Full name"
                    required
                    size="large"
                    value={formData.fullName}
                    onValueChange={(v) => updateField('fullName', v)}
                    placeholder="As it appears on your identity document"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                    status={errors.fullName ? 'error' : 'defaultStatus'}
                    caption={errors.fullName}
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

                <View style={styles.fieldSpacing}>
                  <Ux4gDatePicker
                    label="Date of birth"
                    required
                    placeholder="Select date"
                    initialDate={parseDateString(formData.dateOfBirth)}
                    onDateSelected={(d) => {
                      const dd = String(d.getDate()).padStart(2, '0');
                      const mm = String(d.getMonth() + 1).padStart(2, '0');
                      const yyyy = d.getFullYear();
                      updateField('dateOfBirth', dd + '/' + mm + '/' + yyyy);
                    }}
                    status={errors.dateOfBirth ? 'error' : 'defaultStatus'}
                    description={errors.dateOfBirth}
                  />
                </View>

                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>
                    Gender<Text style={styles.requiredStar}>*</Text>
                  </Text>
                  <View style={styles.radioStack}>
                    {GENDER_OPTIONS.map((option) => (
                      <Ux4gRadioButton
                        key={option.id}
                        value={option.id}
                        groupValue={formData.gender}
                        onChanged={(val) => updateField('gender', val)}
                        label={option.label}
                        size="medium"
                        color={UX4GColors.primary}
                        labelStyle={styles.radioOptionLabel}
                        style={styles.radioRowItem}
                      />
                    ))}
                  </View>
                  {errors.gender ? (
                    <Text style={styles.inlineErrorText}>{errors.gender}</Text>
                  ) : null}
                </View>

                {/* 3. Contact Details */}
                <Text style={[styles.sectionHeading, { marginTop: 4 }]}>Contact Details</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Mobile number"
                    required
                    type="number"
                    size="large"
                    prefixText="+91"
                    maxLength={10}
                    value={formData.mobileNumber}
                    onValueChange={(v) => updateField('mobileNumber', v.slice(0, 10))}
                    placeholder="10 digits"
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
                    type="email"
                    size="large"
                    value={formData.emailAddress}
                    onValueChange={(v) => updateField('emailAddress', v)}
                    placeholder="name@example.com"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                    status={errors.emailAddress ? 'error' : 'defaultStatus'}
                    caption={errors.emailAddress}
                  />
                </View>

                {/* 4. Location Details */}
                <Text style={[styles.sectionHeading, { marginTop: 6 }]}>Location Details</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="State / UT"
                    required
                    size="l"
                    options={STATES_AND_UTS}
                    selectedOptionIds={formData.stateUT}
                    onSelectionChange={(ids) => updateField('stateUT', ids)}
                    placeholder="Select state or union territory"
                    labelTextStyle={styles.inputLabelStyle}
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
                    placeholder="Select district"
                    labelTextStyle={styles.inputLabelStyle}
                    status={errors.district ? 'error' : 'defaultStatus'}
                    description={errors.district}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Sub-district / Tehsil"
                    required
                    size="l"
                    options={SUB_DISTRICTS}
                    selectedOptionIds={formData.subDistrict}
                    onSelectionChange={(ids) => updateField('subDistrict', ids)}
                    placeholder="Select sub-district or tehsil"
                    labelTextStyle={styles.inputLabelStyle}
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
                    placeholder="Select city, town or village"
                    labelTextStyle={styles.inputLabelStyle}
                    status={errors.cityVillage ? 'error' : 'defaultStatus'}
                    description={errors.cityVillage}
                  />
                </View>

                {/* 5. Permanent Address */}
                <Text style={[styles.sectionHeading, { marginTop: 6 }]}>Permanent Address</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="House or building number and street"
                    required
                    size="large"
                    value={formData.permanentHouseStreet}
                    onValueChange={(v) => updateField('permanentHouseStreet', v)}
                    placeholder="As it would be written on a letter"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                    status={errors.permanentHouseStreet ? 'error' : 'defaultStatus'}
                    caption={errors.permanentHouseStreet}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Landmark"
                    size="large"
                    value={formData.permanentLandmark}
                    onValueChange={(v) => updateField('permanentLandmark', v)}
                    placeholder="Something a visitor would recognise"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                  />
                </View>

                <View style={{ marginBottom: 4 }}>
                  <Ux4gInputField
                    label="PIN code"
                    required
                    type="number"
                    size="large"
                    maxLength={6}
                    value={formData.pinCode}
                    onValueChange={(v) => updateField('pinCode', v.slice(0, 6))}
                    placeholder="6 digits"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                    status={errors.pinCode ? 'error' : 'defaultStatus'}
                    caption={errors.pinCode}
                  />
                </View>
              </View>
            ) : (
              <View style={styles.formContainer}>
                <Ux4gStatusBanner
                  variant="infoLight"
                  title={'Step ' + step + ' of 6 — ' + activeMeta.title}
                  subtitle={activeMeta.subtitle}
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

const STATUSBAR_HEIGHT = Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: UX4GColors.neutral100,
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: UX4GColors.white,
    paddingHorizontal: 14,
    paddingTop: STATUSBAR_HEIGHT + 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: UX4GColors.neutral200,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerBrandDivider: {
    width: 1,
    height: 30,
    backgroundColor: UX4GColors.neutral300,
    marginHorizontal: 12,
  },
  menuButton: {
    width: 40,
    height: 36,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: UX4GColors.primary200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: UX4GColors.white,
  },
  menuIconContainer: {
    width: 18,
    height: 14,
    justifyContent: 'space-between',
  },
  menuBar: {
    width: 18,
    height: 2,
    backgroundColor: UX4GColors.primary,
    borderRadius: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 24,
  },
  savedBannerContainer: {
    borderRadius: 8,
    marginBottom: 12,
    elevation: 0,
    shadowOpacity: 0,
    justifyContent: 'center',
  },
  savedBannerText: {
    fontSize: 13,
    fontWeight: '600',
    color: UX4GColors.green800,
  },
  mainCard: {
    backgroundColor: UX4GColors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    paddingHorizontal: 14,
    paddingTop: 16,
    paddingBottom: 20,
  },
  stepperBottomDivider: {
    height: 1,
    backgroundColor: UX4GColors.neutral200,
    marginTop: 14,
    marginBottom: 16,
  },
  formContainer: {
    width: '100%',
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: '700',
    color: UX4GColors.neutral1000black,
    marginBottom: 12,
  },
  photoPreviewBox: {
    height: 230,
    borderRadius: 12,
    backgroundColor: UX4GColors.neutral100,
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    marginBottom: 14,
  },
  photoPreviewCapturedBox: {
    backgroundColor: UX4GColors.green50,
    borderWidth: 1,
    borderColor: UX4GColors.green200,
    justifyContent: 'center',
  },
  photoCapturedBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: UX4GColors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoCapturedTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: UX4GColors.green700,
  },
  photoCapturedSubtitle: {
    fontSize: 12.5,
    color: UX4GColors.green700,
  },
  photoChecklistBlock: {
    marginBottom: 14,
  },
  photoCheckRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 8,
  },
  photoCheckCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: UX4GColors.green,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  photoCheckText: {
    flex: 1,
    fontSize: 13.5,
    lineHeight: 19,
    color: UX4GColors.neutral800,
  },
  photoFootnote: {
    fontSize: 12,
    lineHeight: 17,
    color: UX4GColors.neutral600,
    marginTop: 2,
  },
  groupBlock: {
    marginBottom: 18,
  },
  fieldSpacing: {
    marginBottom: 14,
  },
  fieldGroupLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: UX4GColors.neutral900,
    marginBottom: 8,
    lineHeight: 20,
  },
  inputLabelStyle: {
    fontSize: 14,
    fontWeight: '600',
    color: UX4GColors.neutral900,
  },
  requiredStar: {
    color: UX4GColors.red,
    fontWeight: '700',
  },
  radioStack: {
    gap: 4,
  },
  radioRowItem: {
    paddingVertical: 5,
    paddingHorizontal: 0,
  },
  radioOptionLabel: {
    fontSize: 14.5,
    color: UX4GColors.neutral900,
    fontWeight: '500',
  },
  inlineErrorText: {
    fontSize: 12,
    color: UX4GColors.red,
    marginTop: 4,
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
      const modularFiles = buildTouristGuideModularProject(fullAppCodeString);

      Object.entries(modularFiles).forEach(([filePath, fileContent]) => {
        zip.file(filePath, fileContent);
      });

      const content = await zip.generateAsync({ type: 'blob' });
      const downloadUrl = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'Tourist-Guide-Registration-Flow-UX4G.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);

      triggerToast('Tourist guide Registration Flow (Modular ZIP) downloaded successfully!');
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
                Tourist guide Registration Flow
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
                Service Pattern • 6 Steps (Step 1 Active)
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
              Government citizen service registration flow for tourist guides. Rendered with Expo Snack and built
              strictly with UX4G React Native components.
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
            title="Expo Snack Tourist guide Registration Flow Preview"
          />
        </div>
      </div>
    </Ux4gThemeProvider>
  );
};

export default TouristGuideRegistrationFlowDoc;
