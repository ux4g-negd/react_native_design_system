import React, { useState, useMemo } from 'react';
import JSZip from 'jszip';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { buildTouristGuideModularProject } from '../utils/touristGuideModularZip';

interface TouristGuideRegistrationFlowDocProps {
  isDark: boolean;
}

// Official Snack ID for Tourist guide Registration Flow (6-Step Workflow, All 6 Steps Active)
const SNACK_ID = 'wEF76ZoGqfH_a8VXABZR3';

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
  Ux4gCheckbox,
  Ux4gInputField,
  Ux4gSelectionDropdown,
  Ux4gDatePicker,
  Ux4gStatusBanner,
  Ux4gCompactStepper,
  Ux4gCard,
  Ux4gFileUpload,
  Ux4gModal,
  Ux4gSpinner,
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
    title: 'Category & eligibility',
    subtitle: 'What you are registering as, and what that category asks you to prove.',
  },
  3: {
    title: 'Skills & service area',
    subtitle: 'The languages you guide in, what you specialise in, and where you work.',
  },
  4: {
    title: 'Documents',
    subtitle: 'What you attach, grouped by what each one proves.',
  },
  5: {
    title: 'Review & declaration',
    subtitle: 'Everything you have entered, read back before you commit to it.',
  },
  6: {
    title: 'Fee & payment',
    subtitle: 'What the fee is, any concession that applies, and how long the licence lasts.',
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

const GUIDE_CATEGORIES = [
  { id: 'general', label: 'General guide' },
  { id: 'general_linguistic', label: 'General guide — linguistic' },
  { id: 'expert', label: 'Expert guide' },
  { id: 'expert_linguistic', label: 'Expert guide — linguistic' },
];

const HIGHEST_QUALIFICATIONS = [
  { id: 'class_10', label: 'Class 10 (Matriculation)' },
  { id: 'class_12', label: '10+2 (Higher Secondary)' },
  { id: 'graduate', label: "Graduate (Bachelor's Degree)" },
  { id: 'post_graduate', label: "Post Graduate / Master's Degree" },
  { id: 'diploma_tourism', label: 'Diploma / Certificate in Tourism' },
];

const LANGUAGE_OPTIONS = [
  { id: 'hindi', label: 'Hindi' },
  { id: 'english', label: 'English' },
  { id: 'garhwali', label: 'Garhwali' },
  { id: 'kumaoni', label: 'Kumaoni' },
  { id: 'punjabi', label: 'Punjabi' },
  { id: 'french', label: 'French' },
  { id: 'german', label: 'German' },
  { id: 'spanish', label: 'Spanish' },
  { id: 'japanese', label: 'Japanese' },
];

const SPECIALISM_OPTIONS = [
  { id: 'char_dham', label: 'Char Dham and pilgrimage' },
  { id: 'adventure', label: 'Adventure and trekking' },
  { id: 'cultural_heritage', label: 'Cultural heritage' },
  { id: 'eco_tourism', label: 'Eco tourism' },
  { id: 'wildlife', label: 'Wildlife' },
  { id: 'astro_tourism', label: 'Astro tourism' },
  { id: 'paragliding', label: 'Paragliding and aero sports' },
  { id: 'tour_manager', label: 'Tour manager' },
  { id: 'destination_guide', label: 'Destination guide' },
];

const OPERATION_DISTRICTS = [
  { id: 'almora', label: 'Almora' },
  { id: 'bageshwar', label: 'Bageshwar' },
  { id: 'chamoli', label: 'Chamoli' },
  { id: 'champawat', label: 'Champawat' },
  { id: 'dehradun', label: 'Dehradun' },
  { id: 'haridwar', label: 'Haridwar' },
  { id: 'nainital', label: 'Nainital' },
  { id: 'pauri_garhwal', label: 'Pauri Garhwal' },
  { id: 'pithoragarh', label: 'Pithoragarh' },
  { id: 'rudraprayag', label: 'Rudraprayag' },
  { id: 'tehri_garhwal', label: 'Tehri Garhwal' },
  { id: 'udham_singh_nagar', label: 'Udham Singh Nagar' },
  { id: 'uttarkashi', label: 'Uttarkashi' },
];

const CONCESSION_CATEGORIES = [
  { id: 'none', label: 'None — I pay the full fee' },
  { id: 'woman', label: 'Woman applicant — half the fee' },
  { id: 'sc_st', label: 'Scheduled Caste or Scheduled Tribe — no fee' },
  { id: 'aspirational_district', label: 'Aspirational district — no fee' },
];

const BANK_OPTIONS = [
  { id: 'sbi', label: 'State Bank of India' },
  { id: 'hdfc', label: 'HDFC Bank' },
  { id: 'icici', label: 'ICICI Bank' },
  { id: 'pnb', label: 'Punjab National Bank' },
  { id: 'axis', label: 'Axis Bank' },
  { id: 'bob', label: 'Bank of Baroda' },
];

const PAYMENT_MODES = [
  { id: 'upi', title: 'UPI', subtitle: 'Pay with any UPI app' },
  { id: 'netbanking', title: 'Net Banking', subtitle: '60+ banks supported' },
  { id: 'card', title: 'Debit / Credit Card', subtitle: 'Visa, MasterCard, RuPay' },
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

const TrashCanIcon = ({ size = 18, color = UX4GColors.neutral700 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ChevronUpIcon = ({ size = 16, color = UX4GColors.neutral900 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 15L12 9L6 15"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ChevronDownIcon = ({ size = 16, color = UX4GColors.neutral900 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M6 9L12 15L18 9"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const PencilOutlineIcon = ({ size = 17, color = UX4GColors.neutral800 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15 5l4 4"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const InfoOutlineIcon = ({ size = 16, color = UX4GColors.neutral600 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="9.5" stroke={color} strokeWidth="1.8" />
    <Path d="M12 11V16" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <Circle cx="12" cy="8" r="1" fill={color} />
  </Svg>
);

const DocumentUploadSlot = ({
  title,
  required,
  ruleText,
  files,
  onFilesChanged,
  maxFiles = 1,
  maxFileSize = 2 * 1024 * 1024,
  allowedExtensions = ['pdf', 'jpg', 'png'],
  isLast = false,
}) => {
  const hasFile = files && files.length > 0;
  return (
    <View style={[styles.docSlotWrapper, isLast && { marginBottom: 0 }]}>
      <View style={styles.docSlotHeaderRow}>
        <View style={[styles.statusCircle, hasFile ? styles.statusCircleDone : styles.statusCircleEmpty]}>
          {hasFile ? <CheckSmallIcon size={11} color={UX4GColors.white} /> : null}
        </View>
        <Text style={styles.docSlotTitle}>
          {title}
          {required ? <Text style={styles.requiredStar}>*</Text> : null}
        </Text>
      </View>
      <Text style={styles.docSlotRuleText}>{ruleText}</Text>
      <Ux4gFileUpload
        maxFiles={maxFiles}
        maxFileSize={maxFileSize}
        initialFiles={files}
        onFilesChanged={onFilesChanged}
        allowedExtensions={allowedExtensions}
        borderStyle="dashed"
        buttonBorderRadius={8}
        buttonColor={UX4GColors.primary}
        buttonBorderColor={UX4GColors.purple700}
      />
    </View>
  );
};

const getTouristGuideReviewItems = (fd) => {
  const findLabel = (arr, id) => (arr.find((x) => x.id === id) || {}).label;
  const fullName = (fd.fullName || '').trim() || 'Saksham Kharbanda';
  const dob = (fd.dateOfBirth || '').trim() || '15 Sep 1994';
  const districtLabel = findLabel(DISTRICTS_OPTIONS, (fd.district || [])[0]) || 'Dehradun';
  const stateLabel = findLabel(STATES_AND_UTS, (fd.stateUT || [])[0]) || 'Uttarakhand';
  const step1Sub = fullName + ' · ' + dob + ' · ' + districtLabel + ', ' + stateLabel;

  const catLabel = findLabel(GUIDE_CATEGORIES, fd.guideCategory) || 'General guide';
  const qualLabel =
    findLabel(HIGHEST_QUALIFICATIONS, (fd.highestQualification || [])[0]) || '10+2';
  const step2Sub = catLabel + ' · ' + qualLabel + ' · meets every threshold';

  const langCount = (fd.languagesKnown || []).length;
  const specCount = (fd.specialisms || []).length;
  const distCount = (fd.operationDistricts || []).length;
  const step3Sub =
    langCount +
    ' language' +
    (langCount === 1 ? '' : 's') +
    ' · ' +
    specCount +
    ' specialism' +
    (specCount === 1 ? '' : 's') +
    ' · ' +
    distCount +
    ' district' +
    (distCount === 1 ? '' : 's');

  const df = fd.docFiles || {};
  const allDocKeys = Object.keys(df);
  const uploadedCount = allDocKeys.filter((k) => df[k] && df[k].length > 0).length;
  const requiredKeys = [
    'identity_proof',
    'police_clearance',
    'education_cert',
    'signed_declaration',
  ];
  const missingReq = requiredKeys.filter((k) => !df[k] || df[k].length === 0).length;
  const docsComplete = missingReq === 0;
  const step4Sub = docsComplete
    ? 'All required documents attached (' + uploadedCount + ' of ' + allDocKeys.length + ' uploaded)'
    : uploadedCount + ' of ' + allDocKeys.length + ' attached — ' + missingReq + ' required still missing';

  return [
    { stepNum: 1, title: 'Step 1 · About you', subtitle: step1Sub, isWarning: false },
    { stepNum: 2, title: 'Step 2 · Category & eligibility', subtitle: step2Sub, isWarning: false },
    { stepNum: 3, title: 'Step 3 · Skills & service area', subtitle: step3Sub, isWarning: false },
    { stepNum: 4, title: 'Step 4 · Documents', subtitle: step4Sub, isWarning: !docsComplete },
  ];
};

const getTouristGuideFeeSummary = (fd) => {
  const catObj = GUIDE_CATEGORIES.find((c) => c.id === fd.guideCategory);
  const guideLabel = (catObj && catObj.label) || 'General guide';
  const baseFee =
    fd.guideCategory === 'expert' || fd.guideCategory === 'expert_linguistic' ? 1000 : 500;
  let payable = baseFee;
  let bannerTitle = 'No concession claimed — you pay ₹' + payable;

  if (fd.concessionCategory === 'woman') {
    payable = Math.round(baseFee / 2);
    bannerTitle = 'Woman applicant concession — you pay ₹' + payable;
  } else if (fd.concessionCategory === 'sc_st') {
    payable = 0;
    bannerTitle = 'SC / ST concession — ₹0 payable';
  } else if (fd.concessionCategory === 'aspirational_district') {
    payable = 0;
    bannerTitle = 'Aspirational district concession — ₹0 payable';
  }

  return {
    shortRef: 'TG-2026-000000',
    applicationRef: 'Tourist guide licence · TG-2026-000000',
    description: 'Licence fee — ' + guideLabel + ', five-year term',
    formattedAmount: '₹' + payable,
    bannerTitle,
  };
};

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

const calculateAgeFromDob = (dobStr) => {
  const dob = parseDateString(dobStr);
  if (!dob) return 32;
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const mDiff = today.getMonth() - dob.getMonth();
  if (mDiff < 0 || (mDiff === 0 && today.getDate() < dob.getDate())) {
    age -= 1;
  }
  return age > 0 ? age : 32;
};

export default function App() {
  const [step, setStep] = useState(6);
  const [savedTime, setSavedTime] = useState('3:14 PM');
  const [isPaymentModeView, setIsPaymentModeView] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
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

    // Step 2: Category & eligibility
    guideCategory: 'general',
    highestQualification: [],

    // Step 3: Skills & service area
    selectedLanguageAdd: [],
    languagesKnown: [
      { id: 'hindi', name: 'Hindi', read: true, write: true, speak: true },
      { id: 'english', name: 'English', read: true, write: true, speak: true },
      { id: 'garhwali', name: 'Garhwali', read: false, write: false, speak: true },
    ],
    specialisms: ['adventure', 'cultural_heritage', 'destination_guide'],
    yearsGuiding: '',
    districtFilter: '',
    operationDistricts: ['dehradun', 'haridwar', 'tehri_garhwal'],

    // Step 4: Documents
    docSectionsExpanded: {
      identity: true,
      knowledge: false,
      specialism: false,
      declaration: false,
    },
    docFiles: {
      identity_proof: [],
      police_clearance: [],
      education_cert: [
        {
          id: 'tg-doc-edu-1',
          name: 'Class12_Marksheet.pdf',
          fileSize: 824000,
          status: 'success',
          progress: 1,
        },
      ],
      language_cert: [],
      specialism_cert: [],
      signed_declaration: [],
    },

    // Step 5: Review & declaration
    declarationTruth: false,
    declarationPoliceVerification: false,

    // Step 6: Fee & payment
    concessionCategory: 'none',
    feeNonRefundable: false,
    paymentMode: 'upi',
    upiId: '',
    selectedNetBank: [],
    cardHolderName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors({});
    if (scrollViewRef.current && scrollViewRef.current.scrollTo) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  }, [step]);

  useEffect(() => {
    if (!isRedirecting) return;
    const timer = setTimeout(() => {
      setIsRedirecting(false);
      setPaymentCompleted(true);
    }, 2200);
    return () => clearTimeout(timer);
  }, [isRedirecting]);

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

  const handleContinueStep2 = () => {
    const errs = {};
    if (!formData.guideCategory) {
      errs.guideCategory = 'Please select a guide category';
    }
    if (!formData.highestQualification.length) {
      errs.highestQualification = 'Please select the highest qualification you hold';
    }
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(3);
  };

  const handleAddLanguage = (ids) => {
    updateField('selectedLanguageAdd', ids);
    if (!ids || !ids.length) return;
    const langId = ids[0];
    const opt = LANGUAGE_OPTIONS.find((l) => l.id === langId);
    if (!opt) return;
    setFormData((prev) => {
      const exists = (prev.languagesKnown || []).some((item) => item.id === langId);
      if (exists) return prev;
      return {
        ...prev,
        languagesKnown: [
          ...(prev.languagesKnown || []),
          { id: langId, name: opt.label, read: true, write: true, speak: true },
        ],
      };
    });
    if (errors.languagesKnown) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.languagesKnown;
        return next;
      });
    }
  };

  const toggleLanguageSkill = (langId, skillKey) => {
    setFormData((prev) => ({
      ...prev,
      languagesKnown: (prev.languagesKnown || []).map((item) =>
        item.id === langId ? { ...item, [skillKey]: !item[skillKey] } : item
      ),
    }));
  };

  const removeLanguage = (langId) => {
    setFormData((prev) => ({
      ...prev,
      languagesKnown: (prev.languagesKnown || []).filter((item) => item.id !== langId),
    }));
  };

  const toggleSpecialism = (id) => {
    setFormData((prev) => {
      const current = prev.specialisms || [];
      const exists = current.includes(id);
      return {
        ...prev,
        specialisms: exists ? current.filter((x) => x !== id) : [...current, id],
      };
    });
    if (errors.specialisms) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.specialisms;
        return next;
      });
    }
  };

  const toggleOperationDistrict = (id) => {
    setFormData((prev) => {
      const current = prev.operationDistricts || [];
      const exists = current.includes(id);
      return {
        ...prev,
        operationDistricts: exists ? current.filter((x) => x !== id) : [...current, id],
      };
    });
    if (errors.operationDistricts) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.operationDistricts;
        return next;
      });
    }
  };

  const handleContinueStep3 = () => {
    const errs = {};
    if (!formData.languagesKnown || formData.languagesKnown.length === 0) {
      errs.languagesKnown = 'Please add at least one language';
    }
    if (!formData.specialisms || formData.specialisms.length === 0) {
      errs.specialisms = 'Please select at least one area of specialisation';
    }
    if (!formData.yearsGuiding.trim()) {
      errs.yearsGuiding = 'Years guiding is required';
    }
    if (!formData.operationDistricts || formData.operationDistricts.length === 0) {
      errs.operationDistricts = 'Please select at least one district';
    }
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(4);
  };

  const toggleDocSection = (sectionKey) => {
    setFormData((prev) => ({
      ...prev,
      docSectionsExpanded: {
        ...prev.docSectionsExpanded,
        [sectionKey]: !prev.docSectionsExpanded[sectionKey],
      },
    }));
  };

  const setDocSlotFiles = (slotKey, files) => {
    setFormData((prev) => ({
      ...prev,
      docFiles: {
        ...prev.docFiles,
        [slotKey]: files,
      },
    }));
    if (errors.documents) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.documents;
        return next;
      });
    }
  };

  const handleContinueStep4 = () => {
    const df = formData.docFiles || {};
    const requiredKeys = [
      'identity_proof',
      'police_clearance',
      'education_cert',
      'signed_declaration',
    ];
    const missing = requiredKeys.some((k) => !df[k] || df[k].length === 0);
    if (missing) {
      setErrors({
        documents: 'Please upload all required (*) documents before continuing.',
      });
      return;
    }
    setStep(5);
  };

  const handleContinueStep5 = () => {
    const errs = {};
    if (!formData.declarationTruth) {
      errs.declarationTruth = 'Please confirm that everything you have entered is true';
    }
    if (!formData.declarationPoliceVerification) {
      errs.declarationPoliceVerification =
        'Please agree to police verification of the details you have given';
    }
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(6);
  };

  const handleContinueStep6 = () => {
    if (!isPaymentModeView) {
      const errs = {};
      if (!formData.concessionCategory) {
        errs.concessionCategory = 'Please select a concession category';
      }
      if (!formData.feeNonRefundable) {
        errs.feeNonRefundable =
          'Please confirm that you understand the fee is non-refundable once submitted';
      }
      if (Object.keys(errs).length > 0) {
        setErrors(errs);
        return;
      }
      setErrors({});
      setIsPaymentModeView(true);
      if (scrollViewRef.current && scrollViewRef.current.scrollTo) {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
      }
      return;
    }

    const errs = {};
    if (formData.paymentMode === 'upi') {
      if (!formData.upiId.trim() || !formData.upiId.includes('@')) {
        errs.upiId = 'Enter a valid UPI ID (e.g. name@upi)';
      }
    } else if (formData.paymentMode === 'netbanking') {
      if (!formData.selectedNetBank.length) {
        errs.selectedNetBank = 'Please select your bank';
      }
    } else {
      if (!formData.cardHolderName.trim()) {
        errs.cardHolderName = 'Name on card is required';
      }
      if (!/^[0-9]{12,19}$/.test(formData.cardNumber.replace(/\s+/g, ''))) {
        errs.cardNumber = 'Enter a valid card number';
      }
      if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(formData.cardExpiry.trim())) {
        errs.cardExpiry = 'Use MM/YY format';
      }
      if (!/^[0-9]{3,4}$/.test(formData.cardCvv.trim())) {
        errs.cardCvv = 'Enter a valid CVV';
      }
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setIsRedirecting(true);
  };

  const handleStepperNext = () => {
    if (step === 1) {
      handleContinueStep1();
    } else if (step === 2) {
      handleContinueStep2();
    } else if (step === 3) {
      handleContinueStep3();
    } else if (step === 4) {
      handleContinueStep4();
    } else if (step === 5) {
      handleContinueStep5();
    } else if (step === 6) {
      handleContinueStep6();
    }
  };

  const handleStepperBack = () => {
    if (step === 6 && isPaymentModeView && !paymentCompleted) {
      setIsPaymentModeView(false);
      return;
    }
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const activeMeta = STEP_METADATA[step] || {
    title: 'Step ' + step,
    subtitle: 'Tourist guide registration workflow.',
  };
  const feeSummary = getTouristGuideFeeSummary(formData);

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
              description={
                step === 6 && isPaymentModeView && !paymentCompleted
                  ? 'Choose how you would like to pay ' + feeSummary.formattedAmount + '.'
                  : activeMeta.subtitle
              }
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
            ) : step === 2 ? (
              <View style={styles.formContainer}>
                {/* 1. Category of Registration */}
                <Text style={styles.sectionHeading}>Category of Registration</Text>

                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>
                    Guide category<Text style={styles.requiredStar}>*</Text>
                  </Text>
                  <View style={styles.radioStack}>
                    {GUIDE_CATEGORIES.map((option) => (
                      <Ux4gRadioButton
                        key={option.id}
                        value={option.id}
                        groupValue={formData.guideCategory}
                        onChanged={(val) => updateField('guideCategory', val)}
                        label={option.label}
                        size="medium"
                        color={UX4GColors.primary}
                        labelStyle={styles.radioOptionLabel}
                        style={styles.radioRowItem}
                      />
                    ))}
                  </View>
                  {errors.guideCategory ? (
                    <Text style={styles.inlineErrorText}>{errors.guideCategory}</Text>
                  ) : null}
                </View>

                {/* 2. Educational Qualification */}
                <Text style={[styles.sectionHeading, { marginTop: 4 }]}>
                  Educational Qualification
                </Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Highest qualification held"
                    required
                    size="l"
                    options={HIGHEST_QUALIFICATIONS}
                    selectedOptionIds={formData.highestQualification}
                    onSelectionChange={(ids) => updateField('highestQualification', ids)}
                    placeholder="Select the highest qualification you hold"
                    labelTextStyle={styles.inputLabelStyle}
                    status={errors.highestQualification ? 'error' : 'defaultStatus'}
                    description={errors.highestQualification}
                  />
                </View>

                {/* 3. Eligibility Criteria */}
                <Text style={[styles.sectionHeading, { marginTop: 6 }]}>
                  Eligibility Criteria
                </Text>

                <View style={{ marginBottom: 12 }}>
                  <Ux4gStatusBanner
                    variant="successLight"
                    title={'Age — you are ' + calculateAgeFromDob(formData.dateOfBirth)}
                    subtitle="The minimum is 18. Karnataka also sets an upper bound of 45, relaxed to 48 for SC, ST and widows."
                    titleNumberOfLines={2}
                    subtitleNumberOfLines={4}
                    backgroundColor={UX4GColors.green50}
                    borderColor={UX4GColors.green200}
                    marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
                    paddingStyle={{ paddingVertical: 12, paddingHorizontal: 14 }}
                    containerStyle={{ borderRadius: 10 }}
                    titleStyle={{
                      fontSize: 13.5,
                      fontWeight: '700',
                      color: UX4GColors.green700,
                      lineHeight: 19,
                    }}
                    subtitleStyle={{
                      fontSize: 12.5,
                      lineHeight: 18,
                      color: UX4GColors.green700,
                      marginTop: 3,
                    }}
                  />
                </View>

                <View style={{ marginBottom: 4 }}>
                  <Ux4gStatusBanner
                    variant="successLight"
                    title={
                      'Education — ' +
                      ((
                        HIGHEST_QUALIFICATIONS.find(
                          (q) => q.id === (formData.highestQualification || [])[0]
                        ) || {}
                      ).label || '10+2') +
                      ', which meets the bar'
                    }
                    subtitle="A General guide under 40 must hold 10+2. At 40 and over the bar drops to Class 10."
                    titleNumberOfLines={2}
                    subtitleNumberOfLines={4}
                    backgroundColor={UX4GColors.green50}
                    borderColor={UX4GColors.green200}
                    marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
                    paddingStyle={{ paddingVertical: 12, paddingHorizontal: 14 }}
                    containerStyle={{ borderRadius: 10 }}
                    titleStyle={{
                      fontSize: 13.5,
                      fontWeight: '700',
                      color: UX4GColors.green700,
                      lineHeight: 19,
                    }}
                    subtitleStyle={{
                      fontSize: 12.5,
                      lineHeight: 18,
                      color: UX4GColors.green700,
                      marginTop: 3,
                    }}
                  />
                </View>
              </View>
            ) : step === 3 ? (
              <View style={styles.formContainer}>
                {/* 1. Languages Known */}
                <Text style={styles.sectionHeading}>Languages Known</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Add a language"
                    required
                    searchEnabled={true}
                    size="l"
                    options={LANGUAGE_OPTIONS}
                    selectedOptionIds={formData.selectedLanguageAdd}
                    onSelectionChange={handleAddLanguage}
                    placeholder="Search languages"
                    labelTextStyle={styles.inputLabelStyle}
                    status={errors.languagesKnown ? 'error' : 'defaultStatus'}
                    description={errors.languagesKnown}
                  />
                </View>

                <View style={styles.langTableCard}>
                  <View style={styles.langTableHeader}>
                    <Text style={[styles.langTableHeaderText, styles.langNameCell]}>
                      Language
                    </Text>
                    <Text style={[styles.langTableHeaderText, styles.langSkillCell]}>
                      Read
                    </Text>
                    <Text style={[styles.langTableHeaderText, styles.langSkillCell]}>
                      Write
                    </Text>
                    <Text style={[styles.langTableHeaderText, styles.langSkillCell]}>
                      Speak
                    </Text>
                    <View style={styles.langTrashCell} />
                  </View>

                  {(formData.languagesKnown || []).map((lang, idx, arr) => (
                    <View
                      key={lang.id}
                      style={[
                        styles.langTableRow,
                        idx === arr.length - 1 && { borderBottomWidth: 0 },
                      ]}
                    >
                      <Text style={[styles.langNameText, styles.langNameCell]}>
                        {lang.name}
                      </Text>
                      <View style={styles.langSkillCell}>
                        <Ux4gCheckbox
                          value={lang.read}
                          onChanged={() => toggleLanguageSkill(lang.id, 'read')}
                          size="medium"
                          activeColor={UX4GColors.primary}
                          style={{ paddingVertical: 0, paddingHorizontal: 0 }}
                        />
                      </View>
                      <View style={styles.langSkillCell}>
                        <Ux4gCheckbox
                          value={lang.write}
                          onChanged={() => toggleLanguageSkill(lang.id, 'write')}
                          size="medium"
                          activeColor={UX4GColors.primary}
                          style={{ paddingVertical: 0, paddingHorizontal: 0 }}
                        />
                      </View>
                      <View style={styles.langSkillCell}>
                        <Ux4gCheckbox
                          value={lang.speak}
                          onChanged={() => toggleLanguageSkill(lang.id, 'speak')}
                          size="medium"
                          activeColor={UX4GColors.primary}
                          style={{ paddingVertical: 0, paddingHorizontal: 0 }}
                        />
                      </View>
                      <TouchableOpacity
                        style={styles.langTrashCell}
                        onPress={() => removeLanguage(lang.id)}
                        activeOpacity={0.7}
                        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                      >
                        <TrashCanIcon size={18} color={UX4GColors.neutral700} />
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>

                {/* 2. Area of Specialisation */}
                <Text style={[styles.sectionHeading, { marginTop: 6 }]}>
                  Area of Specialisation
                </Text>

                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>
                    Tick every specialism you guide in. At least one.
                    <Text style={styles.requiredStar}>*</Text>
                  </Text>
                  <View style={styles.radioStack}>
                    {SPECIALISM_OPTIONS.map((option) => (
                      <Ux4gCheckbox
                        key={option.id}
                        value={(formData.specialisms || []).includes(option.id)}
                        onChanged={() => toggleSpecialism(option.id)}
                        label={option.label}
                        size="medium"
                        activeColor={UX4GColors.primary}
                        labelStyle={styles.radioOptionLabel}
                        style={styles.radioRowItem}
                      />
                    ))}
                  </View>
                  {errors.specialisms ? (
                    <Text style={styles.inlineErrorText}>{errors.specialisms}</Text>
                  ) : null}
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Years guiding"
                    required
                    type="number"
                    size="large"
                    value={formData.yearsGuiding}
                    onValueChange={(v) => updateField('yearsGuiding', v)}
                    placeholder="Whole years"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                    status={errors.yearsGuiding ? 'error' : 'defaultStatus'}
                    caption={errors.yearsGuiding}
                  />
                </View>

                {/* 3. Area of Operation */}
                <Text style={[styles.sectionHeading, { marginTop: 6 }]}>
                  Area of Operation
                </Text>

                <View style={styles.districtBoxCard}>
                  <Text style={styles.fieldGroupLabel}>
                    Districts you will work in<Text style={styles.requiredStar}>*</Text>
                  </Text>

                  <View style={{ marginBottom: 10 }}>
                    <Ux4gInputField
                      size="large"
                      value={formData.districtFilter}
                      onValueChange={(v) => updateField('districtFilter', v)}
                      placeholder="Type to filter the 13 districts"
                      borderColor={UX4GColors.neutral300}
                    />
                  </View>

                  <View style={styles.radioStack}>
                    {OPERATION_DISTRICTS.filter((d) =>
                      !formData.districtFilter.trim()
                        ? true
                        : d.label
                            .toLowerCase()
                            .includes(formData.districtFilter.trim().toLowerCase())
                    ).map((option) => (
                      <Ux4gCheckbox
                        key={option.id}
                        value={(formData.operationDistricts || []).includes(option.id)}
                        onChanged={() => toggleOperationDistrict(option.id)}
                        label={option.label}
                        size="medium"
                        activeColor={UX4GColors.primary}
                        labelStyle={styles.radioOptionLabel}
                        style={styles.radioRowItem}
                      />
                    ))}
                  </View>

                  {errors.operationDistricts ? (
                    <Text style={styles.inlineErrorText}>{errors.operationDistricts}</Text>
                  ) : null}
                </View>
              </View>
            ) : step === 4 ? (
              <View style={styles.formContainer}>
                {/* Info Banner using official UX4G Component with UX4GColors cyan palette */}
                <Ux4gStatusBanner
                  variant="infoLight"
                  title="PDF, JPG or PNG · up to 2 MB each · no password-protected files"
                  titleNumberOfLines={2}
                  titleStyle={{ color: UX4GColors.cyan800, fontWeight: '500', fontSize: 13.5 }}
                  leadingIcon={
                    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                      <Circle cx="12" cy="12" r="10" fill={UX4GColors.cyan600} />
                      <Path d="M12 11V16.5" stroke={UX4GColors.white} strokeWidth="2" strokeLinecap="round" />
                      <Circle cx="12" cy="7.8" r="1.15" fill={UX4GColors.white} />
                    </Svg>
                  }
                  backgroundColor={UX4GColors.cyan50}
                  borderColor={UX4GColors.cyan200}
                  marginStyle={{ marginHorizontal: 0, marginTop: 0, marginBottom: 14 }}
                />

                {errors.documents ? (
                  <Text style={[styles.inlineErrorText, { marginBottom: 12 }]}>
                    {errors.documents}
                  </Text>
                ) : null}

                {/* Accordion 1: What proves who you are */}
                <Ux4gCard
                  cornerRadius={10}
                  borderWidth={1}
                  borderColor={UX4GColors.neutral200}
                  backgroundColor={UX4GColors.white}
                  elevation={0}
                  style={{ padding: 14, marginBottom: 14 }}
                >
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => toggleDocSection('identity')}
                    style={styles.docSectionCardHeader}
                  >
                    <View style={{ flex: 1, paddingRight: 8 }}>
                      <Text style={styles.docSectionCardTitle}>What proves who you are</Text>
                      {!formData.docSectionsExpanded.identity && (
                        <>
                          <Text style={styles.docSectionSummaryText}>
                            {'2 documents · ' +
                              ([
                                formData.docFiles.identity_proof,
                                formData.docFiles.police_clearance,
                              ].filter((arr) => arr.length > 0).length > 0
                                ? [
                                    formData.docFiles.identity_proof,
                                    formData.docFiles.police_clearance,
                                  ].filter((arr) => arr.length > 0).length + ' uploaded'
                                : 'none uploaded yet')}
                          </Text>
                          <View style={styles.docStatusDotRow}>
                            {[
                              formData.docFiles.identity_proof,
                              formData.docFiles.police_clearance,
                            ].map((arr, idx) => (
                              <View
                                key={idx}
                                style={[
                                  styles.statusCircle,
                                  arr.length > 0 ? styles.statusCircleDone : styles.statusCircleEmpty,
                                ]}
                              >
                                {arr.length > 0 ? <CheckSmallIcon size={11} color={UX4GColors.white} /> : null}
                              </View>
                            ))}
                          </View>
                        </>
                      )}
                    </View>
                    {formData.docSectionsExpanded.identity ? (
                      <ChevronUpIcon size={16} color={UX4GColors.neutral900} />
                    ) : (
                      <ChevronDownIcon size={16} color={UX4GColors.neutral900} />
                    )}
                  </TouchableOpacity>

                  {formData.docSectionsExpanded.identity && (
                    <View style={{ marginTop: 14 }}>
                      <DocumentUploadSlot
                        title="Identity and address proof"
                        required
                        ruleText="Aadhaar, Voter ID or Passport · 1 file"
                        files={formData.docFiles.identity_proof}
                        onFilesChanged={(f) => setDocSlotFiles('identity_proof', f)}
                        maxFiles={1}
                        maxFileSize={2 * 1024 * 1024}
                        allowedExtensions={['pdf', 'jpg', 'png']}
                      />
                      <DocumentUploadSlot
                        title="Police clearance certificate"
                        required
                        ruleText="1 file · issued within the last six months"
                        files={formData.docFiles.police_clearance}
                        onFilesChanged={(f) => setDocSlotFiles('police_clearance', f)}
                        maxFiles={1}
                        maxFileSize={2 * 1024 * 1024}
                        allowedExtensions={['pdf', 'jpg', 'png']}
                        isLast
                      />
                    </View>
                  )}
                </Ux4gCard>

                {/* Accordion 2: What proves what you know */}
                <Ux4gCard
                  cornerRadius={10}
                  borderWidth={1}
                  borderColor={UX4GColors.neutral200}
                  backgroundColor={UX4GColors.white}
                  elevation={0}
                  style={{ padding: 14, marginBottom: 14 }}
                >
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => toggleDocSection('knowledge')}
                    style={styles.docSectionCardHeader}
                  >
                    <View style={{ flex: 1, paddingRight: 8 }}>
                      <Text style={styles.docSectionCardTitle}>What proves what you know</Text>
                      {!formData.docSectionsExpanded.knowledge && (
                        <>
                          <Text style={styles.docSectionSummaryText}>
                            {'2 documents · ' +
                              ([
                                formData.docFiles.education_cert,
                                formData.docFiles.language_cert,
                              ].filter((arr) => arr.length > 0).length > 0
                                ? [
                                    formData.docFiles.education_cert,
                                    formData.docFiles.language_cert,
                                  ].filter((arr) => arr.length > 0).length + ' uploaded'
                                : 'none uploaded yet')}
                          </Text>
                          <View style={styles.docStatusDotRow}>
                            {[
                              formData.docFiles.education_cert,
                              formData.docFiles.language_cert,
                            ].map((arr, idx) => (
                              <View
                                key={idx}
                                style={[
                                  styles.statusCircle,
                                  arr.length > 0 ? styles.statusCircleDone : styles.statusCircleEmpty,
                                ]}
                              >
                                {arr.length > 0 ? <CheckSmallIcon size={11} color={UX4GColors.white} /> : null}
                              </View>
                            ))}
                          </View>
                        </>
                      )}
                    </View>
                    {formData.docSectionsExpanded.knowledge ? (
                      <ChevronUpIcon size={16} color={UX4GColors.neutral900} />
                    ) : (
                      <ChevronDownIcon size={16} color={UX4GColors.neutral900} />
                    )}
                  </TouchableOpacity>

                  {formData.docSectionsExpanded.knowledge && (
                    <View style={{ marginTop: 14 }}>
                      <DocumentUploadSlot
                        title="Educational qualification certificate"
                        required
                        ruleText="1 file · 10+2 / Degree marksheet or certificate"
                        files={formData.docFiles.education_cert}
                        onFilesChanged={(f) => setDocSlotFiles('education_cert', f)}
                        maxFiles={1}
                        maxFileSize={2 * 1024 * 1024}
                        allowedExtensions={['pdf', 'jpg', 'png']}
                      />
                      <DocumentUploadSlot
                        title="Language proficiency / guide training certificate"
                        ruleText="PDF, JPG or PNG · up to 2 files"
                        files={formData.docFiles.language_cert}
                        onFilesChanged={(f) => setDocSlotFiles('language_cert', f)}
                        maxFiles={2}
                        maxFileSize={2 * 1024 * 1024}
                        allowedExtensions={['pdf', 'jpg', 'png']}
                        isLast
                      />
                    </View>
                  )}
                </Ux4gCard>

                {/* Accordion 3: What your specialism requires */}
                <Ux4gCard
                  cornerRadius={10}
                  borderWidth={1}
                  borderColor={UX4GColors.neutral200}
                  backgroundColor={UX4GColors.white}
                  elevation={0}
                  style={{ padding: 14, marginBottom: 14 }}
                >
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => toggleDocSection('specialism')}
                    style={styles.docSectionCardHeader}
                  >
                    <View style={{ flex: 1, paddingRight: 8 }}>
                      <Text style={styles.docSectionCardTitle}>What your specialism requires</Text>
                      {!formData.docSectionsExpanded.specialism && (
                        <>
                          <Text style={styles.docSectionSummaryText}>
                            {'1 document · ' +
                              (formData.docFiles.specialism_cert.length > 0
                                ? '1 uploaded'
                                : 'none uploaded yet')}
                          </Text>
                          <View style={styles.docStatusDotRow}>
                            <View
                              style={[
                                styles.statusCircle,
                                formData.docFiles.specialism_cert.length > 0
                                  ? styles.statusCircleDone
                                  : styles.statusCircleEmpty,
                              ]}
                            >
                              {formData.docFiles.specialism_cert.length > 0 ? (
                                <CheckSmallIcon size={11} color={UX4GColors.white} />
                              ) : null}
                            </View>
                          </View>
                        </>
                      )}
                    </View>
                    {formData.docSectionsExpanded.specialism ? (
                      <ChevronUpIcon size={16} color={UX4GColors.neutral900} />
                    ) : (
                      <ChevronDownIcon size={16} color={UX4GColors.neutral900} />
                    )}
                  </TouchableOpacity>

                  {formData.docSectionsExpanded.specialism && (
                    <View style={{ marginTop: 14 }}>
                      <DocumentUploadSlot
                        title="Adventure / specialism certification"
                        ruleText="1 file · mountaineering, first-aid or relevant certificate"
                        files={formData.docFiles.specialism_cert}
                        onFilesChanged={(f) => setDocSlotFiles('specialism_cert', f)}
                        maxFiles={1}
                        maxFileSize={2 * 1024 * 1024}
                        allowedExtensions={['pdf', 'jpg', 'png']}
                        isLast
                      />
                    </View>
                  )}
                </Ux4gCard>

                {/* Accordion 4: What you declare */}
                <Ux4gCard
                  cornerRadius={10}
                  borderWidth={1}
                  borderColor={UX4GColors.neutral200}
                  backgroundColor={UX4GColors.white}
                  elevation={0}
                  style={{ padding: 14, marginBottom: 4 }}
                >
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => toggleDocSection('declaration')}
                    style={styles.docSectionCardHeader}
                  >
                    <View style={{ flex: 1, paddingRight: 8 }}>
                      <Text style={styles.docSectionCardTitle}>What you declare</Text>
                      {!formData.docSectionsExpanded.declaration && (
                        <>
                          <Text style={styles.docSectionSummaryText}>
                            {'1 document · ' +
                              (formData.docFiles.signed_declaration.length > 0
                                ? '1 uploaded'
                                : 'none uploaded yet')}
                          </Text>
                          <View style={styles.docStatusDotRow}>
                            <View
                              style={[
                                styles.statusCircle,
                                formData.docFiles.signed_declaration.length > 0
                                  ? styles.statusCircleDone
                                  : styles.statusCircleEmpty,
                              ]}
                            >
                              {formData.docFiles.signed_declaration.length > 0 ? (
                                <CheckSmallIcon size={11} color={UX4GColors.white} />
                              ) : null}
                            </View>
                          </View>
                        </>
                      )}
                    </View>
                    {formData.docSectionsExpanded.declaration ? (
                      <ChevronUpIcon size={16} color={UX4GColors.neutral900} />
                    ) : (
                      <ChevronDownIcon size={16} color={UX4GColors.neutral900} />
                    )}
                  </TouchableOpacity>

                  {formData.docSectionsExpanded.declaration && (
                    <View style={{ marginTop: 14 }}>
                      <DocumentUploadSlot
                        title="Signed self-declaration / undertaking"
                        required
                        ruleText="PDF, JPG or PNG · 1 file"
                        files={formData.docFiles.signed_declaration}
                        onFilesChanged={(f) => setDocSlotFiles('signed_declaration', f)}
                        maxFiles={1}
                        maxFileSize={2 * 1024 * 1024}
                        allowedExtensions={['pdf', 'jpg', 'png']}
                        isLast
                      />
                    </View>
                  )}
                </Ux4gCard>
              </View>
            ) : step === 5 ? (
              <View style={styles.formContainer}>
                <Text style={styles.sectionHeading}>Preview Your Application</Text>

                {getTouristGuideReviewItems(formData).map((item, idx, arr) => (
                  <View
                    key={item.stepNum}
                    style={{ marginBottom: idx === arr.length - 1 ? 18 : 12 }}
                  >
                    <Ux4gStatusBanner
                      variant={item.isWarning ? 'warningLight' : 'successLight'}
                      title={item.title}
                      subtitle={item.subtitle}
                      titleNumberOfLines={2}
                      subtitleNumberOfLines={4}
                      backgroundColor={item.isWarning ? UX4GColors.orange50 : UX4GColors.green50}
                      borderColor={item.isWarning ? UX4GColors.orange200 : UX4GColors.green200}
                      marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
                      paddingStyle={{ paddingVertical: 12, paddingHorizontal: 14 }}
                      containerStyle={{ borderRadius: 10 }}
                      titleStyle={{
                        fontSize: 13.5,
                        fontWeight: '700',
                        color: item.isWarning ? UX4GColors.orange800 : UX4GColors.green700,
                        lineHeight: 19,
                      }}
                      subtitleStyle={{
                        fontSize: 12.5,
                        lineHeight: 18,
                        color: item.isWarning ? UX4GColors.orange800 : UX4GColors.green700,
                        marginTop: 3,
                      }}
                      trailingIcon={
                        <TouchableOpacity
                          activeOpacity={0.7}
                          onPress={() => setStep(item.stepNum)}
                          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                          style={{ padding: 2 }}
                        >
                          <PencilOutlineIcon size={17} color={UX4GColors.neutral800} />
                        </TouchableOpacity>
                      }
                    />
                  </View>
                ))}

                {/* Declaration */}
                <Text style={styles.sectionHeading}>Declaration</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gCheckbox
                    value={formData.declarationTruth}
                    onChanged={(val) => updateField('declarationTruth', !!val)}
                    label="Everything I have entered is true to the best of my knowledge"
                    isRequired={true}
                    hasError={!!errors.declarationTruth}
                    size="medium"
                    activeColor={UX4GColors.primary}
                    labelStyle={{ fontWeight: '600', color: UX4GColors.neutral800 }}
                  />
                  {errors.declarationTruth ? (
                    <Text style={styles.inlineErrorText}>{errors.declarationTruth}</Text>
                  ) : null}
                </View>

                <View style={{ marginBottom: 4 }}>
                  <Ux4gCheckbox
                    value={formData.declarationPoliceVerification}
                    onChanged={(val) => updateField('declarationPoliceVerification', !!val)}
                    label="I agree to police verification of the details I have given"
                    isRequired={true}
                    hasError={!!errors.declarationPoliceVerification}
                    size="medium"
                    activeColor={UX4GColors.primary}
                    labelStyle={{ fontWeight: '600', color: UX4GColors.neutral800 }}
                  />
                  {errors.declarationPoliceVerification ? (
                    <Text style={styles.inlineErrorText}>
                      {errors.declarationPoliceVerification}
                    </Text>
                  ) : null}
                </View>
              </View>
            ) : step === 6 && !isPaymentModeView && !paymentCompleted ? (
              <View style={styles.formContainer}>
                {/* 1. Concession Claimed */}
                <Text style={styles.sectionHeading}>Concession Claimed</Text>

                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>
                    Concession category<Text style={styles.requiredStar}>*</Text>
                  </Text>
                  <View style={styles.radioStack}>
                    {CONCESSION_CATEGORIES.map((option) => (
                      <Ux4gRadioButton
                        key={option.id}
                        value={option.id}
                        groupValue={formData.concessionCategory}
                        onChanged={(val) => updateField('concessionCategory', val)}
                        label={option.label}
                        size="medium"
                        color={UX4GColors.primary}
                        labelStyle={styles.radioOptionLabel}
                        style={styles.radioRowItem}
                      />
                    ))}
                  </View>
                  {errors.concessionCategory ? (
                    <Text style={styles.inlineErrorText}>{errors.concessionCategory}</Text>
                  ) : null}
                </View>

                <View style={{ marginBottom: 18 }}>
                  <Ux4gStatusBanner
                    variant="infoLight"
                    title={feeSummary.bannerTitle}
                    subtitle="Pick a concession and the fee below changes before you pay, not after. A concession you claim must be proved: step 4 asks for the certificate."
                    titleNumberOfLines={2}
                    subtitleNumberOfLines={6}
                    titleStyle={{ color: UX4GColors.cyan800, fontWeight: '600', fontSize: 13.5 }}
                    subtitleStyle={{ color: UX4GColors.cyan800, fontSize: 13, lineHeight: 19, marginTop: 4 }}
                    leadingIcon={
                      <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                        <Circle cx="12" cy="12" r="10" fill={UX4GColors.cyan600} />
                        <Path d="M12 11V16.5" stroke={UX4GColors.white} strokeWidth="2" strokeLinecap="round" />
                        <Circle cx="12" cy="7.8" r="1.15" fill={UX4GColors.white} />
                      </Svg>
                    }
                    backgroundColor={UX4GColors.cyan50}
                    borderColor={UX4GColors.cyan200}
                    marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
                    containerStyle={{ borderRadius: 10 }}
                  />
                </View>

                {/* 2. Fee Details */}
                <Text style={styles.sectionHeading}>Fee Details</Text>

                <Ux4gCard
                  cornerRadius={12}
                  backgroundColor={UX4GColors.white}
                  borderColor={UX4GColors.neutral200}
                  borderWidth={1}
                  elevation={0}
                  style={{ padding: 16, marginBottom: 16 }}
                >
                  <Text style={styles.feeAppNumberHeading}>
                    {feeSummary.applicationRef}
                  </Text>

                  <View style={styles.feeRow}>
                    <View style={{ flex: 1, paddingRight: 16 }}>
                      <Text style={styles.feeLineDescription}>
                        {feeSummary.description}
                      </Text>
                    </View>
                    <Text style={styles.feeLineAmount}>{feeSummary.formattedAmount}</Text>
                  </View>

                  <View style={styles.feeCardDivider} />

                  <View style={styles.feeTotalRow}>
                    <Text style={styles.feeTotalLabel}>Total payable</Text>
                    <Text style={styles.feeTotalAmount}>{feeSummary.formattedAmount}</Text>
                  </View>
                </Ux4gCard>

                <View style={{ marginBottom: 4 }}>
                  <Ux4gCheckbox
                    value={formData.feeNonRefundable}
                    onChanged={(val) => updateField('feeNonRefundable', !!val)}
                    label="I understand the fee is non-refundable once the application is submitted"
                    isRequired={true}
                    hasError={!!errors.feeNonRefundable}
                    size="medium"
                    activeColor={UX4GColors.primary}
                    labelStyle={{ fontWeight: '600', color: UX4GColors.neutral800 }}
                  />
                  {errors.feeNonRefundable ? (
                    <Text style={styles.inlineErrorText}>{errors.feeNonRefundable}</Text>
                  ) : null}
                </View>
              </View>
            ) : step === 6 && isPaymentModeView && !paymentCompleted ? (
              <View style={styles.formContainer}>
                <Text style={styles.sectionHeading}>Mode of Payment</Text>
                <Text style={styles.paymentSubtitleText}>
                  {feeSummary.formattedAmount + ' payable for ' + feeSummary.shortRef + '.'}
                </Text>

                {/* Payment Mode Radio Cards */}
                <View style={{ gap: 10, marginBottom: 22 }}>
                  {PAYMENT_MODES.map((mode) => {
                    const isSelected = formData.paymentMode === mode.id;
                    return (
                      <Ux4gCard
                        key={mode.id}
                        cornerRadius={10}
                        backgroundColor={isSelected ? UX4GColors.primary50 : UX4GColors.white}
                        borderColor={isSelected ? UX4GColors.primary300 : UX4GColors.neutral200}
                        borderWidth={1}
                        elevation={0}
                        isClickable={true}
                        onPress={() => updateField('paymentMode', mode.id)}
                        style={{ paddingVertical: 14, paddingHorizontal: 14 }}
                      >
                        <View style={styles.paymentModeRow}>
                          <Ux4gRadioButton
                            value={mode.id}
                            groupValue={formData.paymentMode}
                            onChanged={(val) => updateField('paymentMode', val)}
                            size="medium"
                            color={UX4GColors.primary}
                          />
                          <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text
                              style={[
                                styles.paymentModeTitle,
                                isSelected && { color: UX4GColors.primary },
                              ]}
                            >
                              {mode.title}
                            </Text>
                            <Text
                              style={[
                                styles.paymentModeDesc,
                                isSelected && { color: UX4GColors.primary },
                              ]}
                            >
                              {mode.subtitle}
                            </Text>
                          </View>
                        </View>
                      </Ux4gCard>
                    );
                  })}
                </View>

                {/* Conditional Payment Input Fields */}
                {formData.paymentMode === 'upi' ? (
                  <View>
                    <Text style={styles.sectionHeading}>Enter Your UPI ID</Text>
                    <View style={{ marginBottom: 8 }}>
                      <Ux4gInputField
                        label="UPI ID"
                        required
                        size="large"
                        value={formData.upiId}
                        onValueChange={(v) => updateField('upiId', v)}
                        placeholder="e.g. name@upi"
                        labelStyle={styles.inputLabelStyle}
                        borderColor={UX4GColors.neutral300}
                        status={errors.upiId ? 'error' : 'defaultStatus'}
                        caption={errors.upiId}
                      />
                    </View>
                    <View style={styles.paymentInfoRow}>
                      <View style={{ marginTop: 1 }}>
                        <InfoOutlineIcon size={16} color={UX4GColors.neutral600} />
                      </View>
                      <Text style={styles.paymentInfoText}>
                        {'You will get a request in your UPI app to approve ' +
                          feeSummary.formattedAmount +
                          '.'}
                      </Text>
                    </View>
                  </View>
                ) : formData.paymentMode === 'netbanking' ? (
                  <View>
                    <Text style={styles.sectionHeading}>Choose Your Bank</Text>
                    <View style={styles.fieldSpacing}>
                      <Ux4gSelectionDropdown
                        label="Bank"
                        required
                        size="l"
                        options={BANK_OPTIONS}
                        selectedOptionIds={formData.selectedNetBank}
                        onSelectionChange={(ids) => updateField('selectedNetBank', ids)}
                        placeholder="Select your bank"
                        labelTextStyle={styles.inputLabelStyle}
                        status={errors.selectedNetBank ? 'error' : 'defaultStatus'}
                        description={errors.selectedNetBank}
                      />
                    </View>
                  </View>
                ) : (
                  <View>
                    <Text style={styles.sectionHeading}>Enter Card Details</Text>
                    <View style={styles.fieldSpacing}>
                      <Ux4gInputField
                        label="Name on card"
                        required
                        size="large"
                        value={formData.cardHolderName}
                        onValueChange={(v) => updateField('cardHolderName', v)}
                        placeholder="As printed on the card"
                        labelStyle={styles.inputLabelStyle}
                        borderColor={UX4GColors.neutral300}
                        status={errors.cardHolderName ? 'error' : 'defaultStatus'}
                        caption={errors.cardHolderName}
                      />
                    </View>
                    <View style={styles.fieldSpacing}>
                      <Ux4gInputField
                        label="Card number"
                        required
                        type="number"
                        maxLength={19}
                        size="large"
                        value={formData.cardNumber}
                        onValueChange={(v) => updateField('cardNumber', v)}
                        placeholder="16-digit card number"
                        labelStyle={styles.inputLabelStyle}
                        borderColor={UX4GColors.neutral300}
                        status={errors.cardNumber ? 'error' : 'defaultStatus'}
                        caption={errors.cardNumber}
                      />
                    </View>
                    <View style={{ flexDirection: 'row', gap: 12 }}>
                      <View style={{ flex: 1 }}>
                        <Ux4gInputField
                          label="Expiry"
                          required
                          maxLength={5}
                          size="large"
                          value={formData.cardExpiry}
                          onValueChange={(v) => updateField('cardExpiry', v)}
                          placeholder="MM/YY"
                          labelStyle={styles.inputLabelStyle}
                          borderColor={UX4GColors.neutral300}
                          status={errors.cardExpiry ? 'error' : 'defaultStatus'}
                          caption={errors.cardExpiry}
                        />
                      </View>
                      <View style={{ flex: 1 }}>
                        <Ux4gInputField
                          label="CVV"
                          required
                          type="number"
                          maxLength={4}
                          size="large"
                          value={formData.cardCvv}
                          onValueChange={(v) => updateField('cardCvv', v)}
                          placeholder="3 digits"
                          labelStyle={styles.inputLabelStyle}
                          borderColor={UX4GColors.neutral300}
                          status={errors.cardCvv ? 'error' : 'defaultStatus'}
                          caption={errors.cardCvv}
                        />
                      </View>
                    </View>
                  </View>
                )}
              </View>
            ) : (
              <View style={styles.formContainer}>
                <Ux4gStatusBanner
                  variant="successLight"
                  title={'Payment of ' + feeSummary.formattedAmount + ' received'}
                  subtitle={
                    feeSummary.applicationRef +
                    ' has been submitted successfully. Keep your application number for tracking.'
                  }
                  titleNumberOfLines={2}
                  subtitleNumberOfLines={4}
                  backgroundColor={UX4GColors.green50}
                  borderColor={UX4GColors.green200}
                  marginStyle={{ marginHorizontal: 0, marginTop: 0, marginBottom: 16 }}
                  paddingStyle={{ paddingVertical: 14, paddingHorizontal: 14 }}
                  containerStyle={{ borderRadius: 10 }}
                  titleStyle={{
                    fontSize: 14,
                    fontWeight: '700',
                    color: UX4GColors.green700,
                  }}
                  subtitleStyle={{
                    fontSize: 12.5,
                    color: UX4GColors.green700,
                    marginTop: 4,
                  }}
                />
              </View>
            )}
          </View>
        </ScrollView>

        {/* Pinned Bottom Action Bar */}
        <View style={styles.bottomActionBar}>
          <Ux4gButton
            text={
              step === 5
                ? 'Continue to payment'
                : step === 6
                  ? 'Pay ' + feeSummary.formattedAmount
                  : 'Continue'
            }
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

        {/* Payment Redirecting Processing Modal using official Ux4gModal & Ux4gSpinner */}
        <Ux4gModal
          visible={step === 6 && isPaymentModeView && !paymentCompleted && isRedirecting}
          onDismiss={() => setIsRedirecting(false)}
          alignment="centered"
          leadingItem="icon"
          leadingIcon={
            <Ux4gSpinner
              size={44}
              strokeWidth={4}
              color={UX4GColors.primary}
              gradientColors={[
                UX4GColors.primary100,
                UX4GColors.primary300,
                UX4GColors.primary,
              ]}
            />
          }
          showHeader={true}
          headerTitle="Redirecting.."
          showDescription={true}
          descriptionText="Please do not close or refresh this page. We are securely processing your payment."
          showDividers={false}
          showSubtitle={false}
          showBody={false}
          showFooter={false}
          showCloseButton={false}
          cornerRadius={12}
          backgroundColor={UX4GColors.white}
        />
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
  langTableCard: {
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    borderRadius: 10,
    backgroundColor: UX4GColors.white,
    overflow: 'hidden',
    marginBottom: 18,
  },
  langTableHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: UX4GColors.neutral100,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: UX4GColors.neutral200,
  },
  langTableHeaderText: {
    fontSize: 12.5,
    fontWeight: '700',
    color: UX4GColors.neutral800,
  },
  langTableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: UX4GColors.neutral200,
  },
  langNameCell: {
    flex: 1.4,
    paddingRight: 6,
  },
  langNameText: {
    fontSize: 13.5,
    color: UX4GColors.neutral800,
    fontWeight: '500',
  },
  langSkillCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  langTrashCell: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  districtBoxCard: {
    backgroundColor: UX4GColors.white,
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    borderRadius: 10,
    padding: 14,
    marginBottom: 4,
  },
  docSectionCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  docSectionCardTitle: {
    fontSize: 14.5,
    fontWeight: '700',
    color: UX4GColors.neutral900,
  },
  docSectionSummaryText: {
    fontSize: 12.5,
    color: UX4GColors.neutral600,
    marginTop: 4,
  },
  docStatusDotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 10,
  },
  statusCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  statusCircleEmpty: {
    borderWidth: 1.5,
    borderColor: UX4GColors.neutral300,
    backgroundColor: UX4GColors.white,
  },
  statusCircleDone: {
    backgroundColor: UX4GColors.green,
    borderWidth: 0,
  },
  docSlotWrapper: {
    marginBottom: 18,
  },
  docSlotHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 4,
  },
  docSlotTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: UX4GColors.neutral900,
    lineHeight: 20,
  },
  docSlotRuleText: {
    fontSize: 12.5,
    lineHeight: 18,
    color: UX4GColors.neutral600,
    marginBottom: 10,
  },
  feeAppNumberHeading: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 22,
    color: UX4GColors.neutral900,
    marginBottom: 14,
  },
  feeRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  feeLineDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: UX4GColors.neutral700,
  },
  feeLineAmount: {
    fontSize: 14.5,
    fontWeight: '600',
    color: UX4GColors.neutral900,
  },
  feeCardDivider: {
    height: 1,
    backgroundColor: UX4GColors.neutral200,
    marginVertical: 14,
  },
  feeTotalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  feeTotalLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: UX4GColors.neutral900,
  },
  feeTotalAmount: {
    fontSize: 15,
    fontWeight: '700',
    color: UX4GColors.neutral900,
  },
  paymentSubtitleText: {
    fontSize: 13.5,
    color: UX4GColors.neutral700,
    marginBottom: 14,
  },
  paymentModeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentModeTitle: {
    fontSize: 14.5,
    fontWeight: '600',
    color: UX4GColors.neutral900,
  },
  paymentModeDesc: {
    fontSize: 12.5,
    color: UX4GColors.neutral600,
    marginTop: 2,
  },
  paymentInfoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginTop: 4,
  },
  paymentInfoText: {
    flex: 1,
    fontSize: 12.5,
    lineHeight: 18,
    color: UX4GColors.neutral600,
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
                Service Pattern • 6 Steps (All 6 Steps Active)
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
