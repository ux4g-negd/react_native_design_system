import React, { useState, useMemo } from 'react';
import JSZip from 'jszip';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { buildTourOperatorModularProject } from '../utils/tourOperatorModularZip';

interface TourOperatorRegistrationFlowDocProps {
  isDark: boolean;
}

// Official Snack ID for Tour operator and Travel Agency Registration Flow (7-Step Workflow, Steps 1–5 Active)
const SNACK_ID = 'v7wF5F8SmQ_NcluvS3amE';

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
import Svg, { Path, Circle, Rect } from 'react-native-svg';
import {
  Ux4gRadioButton,
  Ux4gCheckbox,
  Ux4gInputField,
  Ux4gPanInputField,
  Ux4gSelectionDropdown,
  Ux4gDatePicker,
  Ux4gStatusBanner,
  Ux4gCompactStepper,
  Ux4gCard,
  Ux4gFileUpload,
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
    title: 'Registration type',
    subtitle: 'What you are registering as, and whether this is a first registration or a renewal.',
  },
  2: {
    title: 'Applicant & firm',
    subtitle: 'Who is applying, how to reach them, and the business being registered.',
  },
  3: {
    title: 'Office & premises',
    subtitle: 'Where the office is, and what kind of premises it is.',
  },
  4: {
    title: 'Services & capability',
    subtitle: 'What the agency does, the scale it works at, and the experience behind it.',
  },
  5: {
    title: 'Documents',
    subtitle: 'What you attach, grouped by what each one proves.',
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

const STATES_AND_UTS = [
  { id: 'hp', label: 'Himachal Pradesh' },
  { id: 'uk', label: 'Uttarakhand' },
  { id: 'dl', label: 'Delhi' },
  { id: 'mh', label: 'Maharashtra' },
  { id: 'rj', label: 'Rajasthan' },
  { id: 'ga', label: 'Goa' },
  { id: 'ka', label: 'Karnataka' },
];

const DISTRICTS_OPTIONS = [
  { id: 'shimla', label: 'Shimla' },
  { id: 'kullu', label: 'Kullu' },
  { id: 'kangra', label: 'Kangra' },
  { id: 'ddn', label: 'Dehradun' },
  { id: 'nni', label: 'Nainital' },
];

const SUB_DISTRICTS = [
  { id: 'shimla_urban', label: 'Shimla (Urban)' },
  { id: 'manali', label: 'Manali' },
  { id: 'dharamshala', label: 'Dharamshala' },
  { id: 'mus', label: 'Mussoorie' },
];

const CITIES_VILLAGES = [
  { id: 'shimla_mc', label: 'Shimla (M Corp.)' },
  { id: 'manali_np', label: 'Manali (NP)' },
  { id: 'mus_city', label: 'Mussoorie (Municipal Board)' },
  { id: 'gp_kyarkuli', label: 'Kyarkuli Bhatta Gram Panchayat' },
];

const AREA_TYPES = [
  { id: 'urban', label: 'Urban — from the LGD record for this town' },
  { id: 'semi_urban', label: 'Semi-Urban — from the LGD record' },
  { id: 'rural', label: 'Rural — Gram Panchayat LGD record' },
];

const OFFICE_HOLDING_OPTIONS = [
  { id: 'owned', label: 'Owned by the firm' },
  { id: 'lease', label: 'On lease' },
  { id: 'rented', label: 'Rented' },
  { id: 'partnership', label: 'Partnership premises' },
];

const BUILDING_TYPE_OPTIONS = [
  { id: 'commercial', label: 'Commercial' },
  { id: 'residential', label: 'Residential' },
];

const OFFICE_FACILITIES_OPTIONS = [
  { id: 'separate_reception', label: 'A separate reception area' },
  { id: 'toilet_facility', label: 'A toilet facility' },
  { id: 'cloak_room', label: 'A cloak room' },
];

const FIRM_ACTIVITIES_OPTIONS = [
  { id: 'air_ticketing', label: 'Air ticketing' },
  { id: 'rail_bus_ticketing', label: 'Rail and bus ticketing' },
  { id: 'hotel_booking', label: 'Hotel and accommodation booking' },
  { id: 'domestic_packages', label: 'Domestic tour packages' },
  { id: 'inbound_packages', label: 'Inbound tour packages for foreign tourists' },
  { id: 'outbound_packages', label: 'Outbound tour packages' },
  { id: 'passport_visa', label: 'Passport and visa assistance' },
  { id: 'foreign_exchange', label: 'Foreign exchange' },
  { id: 'car_coach_rental', label: 'Car or coach rental' },
  { id: 'travel_insurance', label: 'Travel insurance' },
  { id: 'other', label: 'Other — specify below' },
];

const QUALIFICATION_OPTIONS = [
  { id: 'graduate', label: 'Graduate (Any discipline)' },
  { id: 'post_graduate', label: 'Post Graduate / MBA (Tourism)' },
  { id: 'diploma_tourism', label: 'Diploma / Degree in Travel & Tourism' },
  { id: 'iata_certified', label: 'IATA / UFTAA Certified' },
  { id: 'higher_secondary', label: 'Higher Secondary (10+2)' },
];

const CrosshairsGpsIcon = ({ size = 18, color = UX4GColors.neutral800 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="7.5" stroke={color} strokeWidth="1.8" />
    <Path
      d="M12 2V5.5M12 18.5V22M2 12H5.5M18.5 12H22"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <Circle cx="12" cy="12" r="2.8" fill={color} />
  </Svg>
);

const TrashCanIcon = ({ size = 18, color = UX4GColors.neutral600 }) => (
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

const PlusIcon = ({ size = 16, color = UX4GColors.primary }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 5v14M5 12h14"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </Svg>
);

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

const DocumentUploadSlot = ({
  title,
  required,
  ruleText,
  files,
  onFilesChanged,
  maxFiles = 1,
  maxFileSize = 5 * 1024 * 1024,
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
  const [step, setStep] = useState(5);
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

    // Step 3: Office & premises
    officeLocationLink: '',
    pinPlaced: false,
    latitude: '',
    longitude: '',
    pinCode: '',
    stateUT: [],
    district: [],
    subDistrict: [],
    cityVillage: [],
    areaType: [],
    officeHouseStreet: '',
    officeLandmark: '',
    officeHoldingType: '',
    officeFloorArea: '',
    receptionArea: '',
    buildingCategory: '',
    officeFacilities: [],

    // Step 4: Services & capability
    activities: [],
    otherActivity: '',
    paidUpCapital: '',
    previousYearTurnover: '',
    yearsExperienceInTrade: '',
    employeesCount: '3',
    highestQualification: [],
    tourismTrainingExperience: '',
    staffMembers: [
      { name: 'Neha Sharma', role: 'Counter executive', qualification: 'B.Com', yearsInTrade: '3' },
      { name: 'Imran Qureshi', role: 'Tour coordinator', qualification: 'BA Tourism Studies', yearsInTrade: '5' },
      { name: '', role: '', qualification: '', yearsInTrade: '' },
    ],

    // Step 5: Documents
    docSectionsExpanded: {
      person: true,
      premises: false,
      business: false,
    },
    docFiles: {
      person_photo: [],
      person_pan: [],
      person_qualification: [],
      person_experience: [],
      premises_ownership: [
        {
          id: 'doc-premises-1',
          name: 'Office_Lease_Agreement.pdf',
          fileSize: 1245000,
          status: 'success',
          progress: 1,
        },
      ],
      premises_layout: [],
      business_reg: [],
      business_pan: [],
      business_gst: [],
      business_bank_report: [],
      business_itr: [],
      business_other: [],
    },
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

  const handleSetLocationPin = () => {
    updateField('pinPlaced', true);
    updateField('latitude', '31.1048° N');
    updateField('longitude', '77.1734° E');
    if (!formData.officeLocationLink) {
      updateField('officeLocationLink', 'https://maps.google.com/?q=31.1048,77.1734');
    }
  };

  const handleCityVillageChange = (ids) => {
    updateField('cityVillage', ids);
    if (ids && ids.length > 0) {
      updateField('areaType', ids[0] === 'gp_kyarkuli' ? ['rural'] : ['urban']);
    }
  };

  const toggleOfficeFacility = (id) => {
    setFormData((prev) => {
      const current = prev.officeFacilities || [];
      const exists = current.includes(id);
      return {
        ...prev,
        officeFacilities: exists ? current.filter((x) => x !== id) : [...current, id],
      };
    });
  };

  const handleContinueStep3 = () => {
    const errs = {};
    if (!formData.officeLocationLink.trim()) {
      errs.officeLocationLink = 'Please enter or select the office location link';
    }
    if (!/^[0-9]{6}$/.test(formData.pinCode.trim())) {
      errs.pinCode = 'Enter a valid 6-digit PIN code';
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
    if (!formData.officeHouseStreet.trim()) {
      errs.officeHouseStreet = 'House or building number and street is required';
    }
    if (!formData.officeHoldingType) {
      errs.officeHoldingType = 'Please select how you hold the office';
    }
    if (!formData.officeFloorArea.trim() || parseFloat(formData.officeFloorArea) <= 0) {
      errs.officeFloorArea = 'Enter a valid office floor area in Sq. ft.';
    }
    if (!formData.buildingCategory) {
      errs.buildingCategory = 'Please select whether the building is commercial or residential';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(4);
  };

  const toggleActivity = (id) => {
    setFormData((prev) => {
      const current = prev.activities || [];
      const exists = current.includes(id);
      return {
        ...prev,
        activities: exists ? current.filter((x) => x !== id) : [...current, id],
      };
    });
    if (errors.activities) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.activities;
        return next;
      });
    }
  };

  const updateStaffMember = (index, field, value) => {
    setFormData((prev) => {
      const updated = (prev.staffMembers || []).map((item, idx) =>
        idx === index ? { ...item, [field]: value } : item
      );
      return { ...prev, staffMembers: updated };
    });
    const errKey = 'staff_' + index + '_' + field;
    if (errors[errKey]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[errKey];
        return next;
      });
    }
  };

  const addStaffMember = () => {
    setFormData((prev) => ({
      ...prev,
      staffMembers: [
        ...(prev.staffMembers || []),
        { name: '', role: '', qualification: '', yearsInTrade: '' },
      ],
    }));
  };

  const removeStaffMember = (index) => {
    setFormData((prev) => ({
      ...prev,
      staffMembers: (prev.staffMembers || []).filter((_, idx) => idx !== index),
    }));
  };

  const handleContinueStep4 = () => {
    const errs = {};
    if (!formData.activities.length) {
      errs.activities = 'Please select at least one activity undertaken by the firm';
    }
    if (!formData.paidUpCapital.trim()) {
      errs.paidUpCapital = 'Paid-up capital is required';
    }
    if (!formData.previousYearTurnover.trim()) {
      errs.previousYearTurnover = 'Turnover in the previous financial year is required';
    }
    if (!formData.yearsExperienceInTrade.trim()) {
      errs.yearsExperienceInTrade = 'Years of experience in the trade is required';
    }
    if (!formData.employeesCount.trim()) {
      errs.employeesCount = 'Number of employees is required';
    }
    if (!formData.highestQualification.length) {
      errs.highestQualification = 'Please select the highest qualification of the person responsible';
    }
    if (!formData.tourismTrainingExperience.trim()) {
      errs.tourismTrainingExperience = 'Training or experience in tourism is required';
    }
    (formData.staffMembers || []).forEach((staff, idx) => {
      if (!staff.name.trim()) {
        errs['staff_' + idx + '_name'] = 'Name is required';
      }
      if (!staff.role.trim()) {
        errs['staff_' + idx + '_role'] = 'Role is required';
      }
      if (!staff.qualification.trim()) {
        errs['staff_' + idx + '_qualification'] = 'Qualification is required';
      }
      if (!staff.yearsInTrade.trim()) {
        errs['staff_' + idx + '_yearsInTrade'] = 'Years in the trade is required';
      }
    });

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(5);
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

  const handleContinueStep5 = () => {
    const df = formData.docFiles || {};
    const requiredKeys = [
      'person_photo',
      'person_pan',
      'person_qualification',
      'premises_ownership',
      'business_reg',
      'business_pan',
      'business_bank_report',
      'business_itr',
    ];
    const missing = requiredKeys.some((k) => !df[k] || df[k].length === 0);
    if (missing) {
      setErrors({
        documents: 'Please upload all required (*) documents before continuing.',
      });
      return;
    }
    setStep(6);
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
            {/* 7-Step Compact Stepper Header using official UX4G Component */}
            <Ux4gCompactStepper
              totalSteps={7}
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
            ) : step === 3 ? (
              <View style={styles.formContainer}>
                {/* 1. Office Location */}
                <Text style={styles.sectionHeading}>Office Location</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Where is the office?"
                    required
                    size="large"
                    value={formData.officeLocationLink}
                    onValueChange={(v) => updateField('officeLocationLink', v)}
                    placeholder="Paste a Google Maps or Apple Maps link to t..."
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                    status={errors.officeLocationLink ? 'error' : 'defaultStatus'}
                    caption={errors.officeLocationLink}
                  />
                </View>

                <TouchableOpacity
                  style={styles.gpsLocationRow}
                  onPress={handleSetLocationPin}
                  activeOpacity={0.7}
                >
                  <CrosshairsGpsIcon size={18} color={UX4GColors.neutral800} />
                  <Text style={styles.gpsLocationText}>Use my current location</Text>
                </TouchableOpacity>

                {/* 2. Geo Location */}
                <Text style={[styles.sectionHeading, { marginTop: 4 }]}>Geo Location</Text>

                <TouchableOpacity
                  style={styles.mapContainer}
                  activeOpacity={0.9}
                  onPress={handleSetLocationPin}
                >
                  <Svg width="100%" height={210} viewBox="0 0 340 210">
                    <Path d="M0 0h340v210H0z" fill={UX4GColors.neutral100} />

                    {/* Water Body (Top Left Curved Lake) */}
                    <Path
                      d="M0 0h145c0 30-15 55-45 55H0V0z"
                      fill={UX4GColors.blue300}
                    />

                    {/* Park Green Area (Right) */}
                    <Rect
                      x={175}
                      y={68}
                      width={155}
                      height={42}
                      fill={UX4GColors.green100}
                    />

                    {/* Building Blocks */}
                    <Rect x={15} y={15} width={35} height={30} rx={2} fill={UX4GColors.neutral200} />
                    <Rect x={60} y={15} width={40} height={30} rx={2} fill={UX4GColors.neutral200} />
                    <Rect x={15} y={75} width={55} height={30} rx={2} fill={UX4GColors.neutral200} />
                    <Rect x={80} y={75} width={50} height={30} rx={2} fill={UX4GColors.neutral200} />
                    <Rect x={15} y={120} width={45} height={35} rx={2} fill={UX4GColors.neutral200} />
                    <Rect x={70} y={120} width={60} height={35} rx={2} fill={UX4GColors.neutral200} />

                    <Rect x={175} y={15} width={60} height={38} rx={2} fill={UX4GColors.neutral200} />
                    <Rect x={245} y={15} width={45} height={38} rx={2} fill={UX4GColors.neutral200} />
                    <Rect x={175} y={120} width={50} height={35} rx={2} fill={UX4GColors.neutral200} />
                    <Rect x={235} y={120} width={70} height={35} rx={2} fill={UX4GColors.neutral200} />

                    {/* Roads Network */}
                    <Path d="M0 60h340v12H0z" fill={UX4GColors.white} />
                    <Path d="M0 110h340v10H0z" fill={UX4GColors.white} />
                    <Path d="M145 0v210h14V0z" fill={UX4GColors.white} />
                    <Path d="M0 160l340 25v10L0 170z" fill={UX4GColors.white} />

                    {/* Purple Location Pin */}
                    <Path
                      d="M152 80C144 80 138 86 138 94c0 10 14 23 14 23s14-13 14-23c0-8-6-14-14-14z"
                      fill={UX4GColors.primary}
                    />
                    <Circle cx="152" cy="94" r="4.5" fill={UX4GColors.white} />

                    {/* Zoom Controls (Top Right) */}
                    <Rect x={295} y={15} width={26} height={52} rx={4} fill={UX4GColors.white} />
                    <Rect x={295} y={41} width={26} height={1} fill={UX4GColors.neutral200} />
                    <Path
                      d="M304.5 28h7M308 24.5v7"
                      stroke={UX4GColors.neutral600}
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <Path
                      d="M304.5 54h7"
                      stroke={UX4GColors.neutral600}
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </Svg>

                  <View style={styles.mapOverlayPill}>
                    <Text style={styles.mapOverlayPillText}>
                      Illustrative map — drag the pin to set the exact entrance
                    </Text>
                  </View>
                </TouchableOpacity>

                {/* Latitude & Longitude Read-only Boxes */}
                <Text style={styles.geoCoordLabel}>Latitude — set by the map</Text>
                <View style={styles.geoCoordBox}>
                  <Text style={[styles.geoCoordText, formData.pinPlaced && styles.geoCoordActiveText]}>
                    {formData.pinPlaced ? formData.latitude : 'Set when you place the pin'}
                  </Text>
                </View>

                <Text style={styles.geoCoordLabel}>Longitude — set by the map</Text>
                <View style={styles.geoCoordBox}>
                  <Text style={[styles.geoCoordText, formData.pinPlaced && styles.geoCoordActiveText]}>
                    {formData.pinPlaced ? formData.longitude : 'Set when you place the pin'}
                  </Text>
                </View>

                {/* Divider */}
                <View style={styles.orDividerContainer}>
                  <View style={styles.orDividerLine} />
                  <Text style={styles.orDividerText}>Or enter the location yourself</Text>
                  <View style={styles.orDividerLine} />
                </View>

                {/* PIN Code */}
                <View style={styles.fieldSpacing}>
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

                {/* 3. Location Details */}
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
                    onSelectionChange={handleCityVillageChange}
                    placeholder="Select city, town or village"
                    labelTextStyle={styles.inputLabelStyle}
                    status={errors.cityVillage ? 'error' : 'defaultStatus'}
                    description={errors.cityVillage}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Area type — set from the town or village you chose"
                    size="l"
                    options={AREA_TYPES}
                    selectedOptionIds={formData.areaType}
                    onSelectionChange={(ids) => updateField('areaType', ids)}
                    placeholder="Urban — from the LGD record for this t..."
                    labelTextStyle={styles.inputLabelStyle}
                  />
                </View>

                {/* 4. Address of the Office */}
                <Text style={[styles.sectionHeading, { marginTop: 6 }]}>Address of the Office</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="House or building number and street"
                    required
                    size="large"
                    value={formData.officeHouseStreet}
                    onValueChange={(v) => updateField('officeHouseStreet', v)}
                    placeholder="As it would be written on a letter"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                    status={errors.officeHouseStreet ? 'error' : 'defaultStatus'}
                    caption={errors.officeHouseStreet}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Landmark"
                    size="large"
                    value={formData.officeLandmark}
                    onValueChange={(v) => updateField('officeLandmark', v)}
                    placeholder="Something a visitor would recognise"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                  />
                </View>

                {/* 5. Premises Details */}
                <Text style={[styles.sectionHeading, { marginTop: 6 }]}>Premises Details</Text>

                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>
                    How do you hold the office?<Text style={styles.requiredStar}>*</Text>
                  </Text>
                  <View style={styles.radioStack}>
                    {OFFICE_HOLDING_OPTIONS.map((option) => (
                      <Ux4gRadioButton
                        key={option.id}
                        value={option.id}
                        groupValue={formData.officeHoldingType}
                        onChanged={(val) => updateField('officeHoldingType', val)}
                        label={option.label}
                        size="medium"
                        color={UX4GColors.primary}
                        labelStyle={styles.radioOptionLabel}
                        style={styles.radioRowItem}
                      />
                    ))}
                  </View>
                  {errors.officeHoldingType && (
                    <Text style={styles.inlineErrorText}>{errors.officeHoldingType}</Text>
                  )}
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Office floor area, Sq. ft."
                    required
                    type="number"
                    size="large"
                    value={formData.officeFloorArea}
                    onValueChange={(v) => updateField('officeFloorArea', v)}
                    placeholder="Carpet area"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                    status={errors.officeFloorArea ? 'error' : 'defaultStatus'}
                    caption={errors.officeFloorArea}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Reception area, Sq. ft."
                    type="number"
                    size="large"
                    value={formData.receptionArea}
                    onValueChange={(v) => updateField('receptionArea', v)}
                    placeholder="If the office has one"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                  />
                </View>

                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>
                    Is the office in a commercial or a residential building?
                    <Text style={styles.requiredStar}>*</Text>
                  </Text>
                  <View style={styles.radioStack}>
                    {BUILDING_TYPE_OPTIONS.map((option) => (
                      <Ux4gRadioButton
                        key={option.id}
                        value={option.id}
                        groupValue={formData.buildingCategory}
                        onChanged={(val) => updateField('buildingCategory', val)}
                        label={option.label}
                        size="medium"
                        color={UX4GColors.primary}
                        labelStyle={styles.radioOptionLabel}
                        style={styles.radioRowItem}
                      />
                    ))}
                  </View>
                  {errors.buildingCategory && (
                    <Text style={styles.inlineErrorText}>{errors.buildingCategory}</Text>
                  )}
                </View>

                <View style={[styles.groupBlock, { marginBottom: 4 }]}>
                  <Text style={styles.fieldGroupLabel}>The office has</Text>
                  <View style={styles.radioStack}>
                    {OFFICE_FACILITIES_OPTIONS.map((option) => (
                      <Ux4gCheckbox
                        key={option.id}
                        value={formData.officeFacilities.includes(option.id)}
                        onChanged={() => toggleOfficeFacility(option.id)}
                        label={option.label}
                        size="medium"
                        activeColor={UX4GColors.primary}
                        labelStyle={styles.radioOptionLabel}
                        style={styles.radioRowItem}
                      />
                    ))}
                  </View>
                </View>
              </View>
            ) : step === 4 ? (
              <View style={styles.formContainer}>
                {/* 1. Activities Undertaken by the Firm */}
                <Text style={styles.sectionHeading}>Activities Undertaken by the Firm</Text>

                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>
                    Tick every activity the agency offers. At least one
                    <Text style={styles.requiredStar}>*</Text>
                  </Text>
                  <View style={styles.radioStack}>
                    {FIRM_ACTIVITIES_OPTIONS.map((option) => (
                      <Ux4gCheckbox
                        key={option.id}
                        value={formData.activities.includes(option.id)}
                        onChanged={() => toggleActivity(option.id)}
                        label={option.label}
                        size="medium"
                        activeColor={UX4GColors.primary}
                        labelStyle={styles.radioOptionLabel}
                        style={styles.radioRowItem}
                      />
                    ))}
                  </View>
                  {errors.activities && (
                    <Text style={styles.inlineErrorText}>{errors.activities}</Text>
                  )}
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Other activity"
                    size="large"
                    value={formData.otherActivity}
                    onValueChange={(v) => updateField('otherActivity', v)}
                    placeholder="Name the activity — separate several with commas"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                  />
                </View>

                <Text style={styles.alternativeHintText}>
                  ALTERNATIVE — the same question as a multi-select combobox
                </Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Tick every activity the agency offers. At least one"
                    required
                    mode="multi"
                    searchEnabled={true}
                    size="l"
                    options={FIRM_ACTIVITIES_OPTIONS}
                    selectedOptionIds={formData.activities}
                    onSelectionChange={(ids) => updateField('activities', ids)}
                    placeholder="Start typing..."
                    labelTextStyle={styles.inputLabelStyle}
                    status={errors.activities ? 'error' : 'defaultStatus'}
                    description={errors.activities}
                  />
                </View>

                {/* 2. Scale of Operation */}
                <Text style={[styles.sectionHeading, { marginTop: 6 }]}>Scale of Operation</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Paid-up capital"
                    required
                    type="number"
                    size="large"
                    prefixText="₹"
                    value={formData.paidUpCapital}
                    onValueChange={(v) => updateField('paidUpCapital', v)}
                    placeholder="Digits only"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                    status={errors.paidUpCapital ? 'error' : 'defaultStatus'}
                    caption={errors.paidUpCapital}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Turnover in the previous financial year"
                    required
                    type="number"
                    size="large"
                    prefixText="₹"
                    value={formData.previousYearTurnover}
                    onValueChange={(v) => updateField('previousYearTurnover', v)}
                    placeholder="Digits only"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                    status={errors.previousYearTurnover ? 'error' : 'defaultStatus'}
                    caption={errors.previousYearTurnover}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Years of experience in the trade"
                    required
                    type="number"
                    size="large"
                    value={formData.yearsExperienceInTrade}
                    onValueChange={(v) => updateField('yearsExperienceInTrade', v)}
                    placeholder="Whole years"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                    status={errors.yearsExperienceInTrade ? 'error' : 'defaultStatus'}
                    caption={errors.yearsExperienceInTrade}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="People you employ, not counting yourself"
                    required
                    type="number"
                    size="large"
                    value={formData.employeesCount}
                    onValueChange={(v) => updateField('employeesCount', v)}
                    placeholder="0"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                    status={errors.employeesCount ? 'error' : 'defaultStatus'}
                    caption={errors.employeesCount}
                  />
                </View>

                {/* 3. Staff Employed and Qualifications */}
                <Text style={[styles.sectionHeading, { marginTop: 6 }]}>
                  Staff Employed and Qualifications
                </Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Highest qualification of the person responsible"
                    required
                    size="l"
                    options={QUALIFICATION_OPTIONS}
                    selectedOptionIds={formData.highestQualification}
                    onSelectionChange={(ids) => updateField('highestQualification', ids)}
                    placeholder="Select the qualification"
                    labelTextStyle={styles.inputLabelStyle}
                    status={errors.highestQualification ? 'error' : 'defaultStatus'}
                    description={errors.highestQualification}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Training or experience in tourism"
                    required
                    size="large"
                    value={formData.tourismTrainingExperience}
                    onValueChange={(v) => updateField('tourismTrainingExperience', v)}
                    placeholder="Course, employer or years in the trade"
                    labelStyle={styles.inputLabelStyle}
                    borderColor={UX4GColors.neutral300}
                    status={errors.tourismTrainingExperience ? 'error' : 'defaultStatus'}
                    caption={errors.tourismTrainingExperience}
                  />
                </View>

                <Text style={[styles.fieldGroupLabel, { marginTop: 4, marginBottom: 10 }]}>
                  Staff and what qualifies them
                </Text>

                {(formData.staffMembers || []).map((staff, idx) => (
                  <View key={idx} style={styles.staffCard}>
                    <View style={styles.staffCardHeader}>
                      <Text style={styles.staffCardTitle}>{'Staff member ' + (idx + 1)}</Text>
                      <TouchableOpacity
                        onPress={() => removeStaffMember(idx)}
                        activeOpacity={0.7}
                        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                      >
                        <TrashCanIcon size={18} color={UX4GColors.neutral600} />
                      </TouchableOpacity>
                    </View>

                    <View style={styles.fieldSpacing}>
                      <Ux4gInputField
                        label="Name"
                        required
                        size="large"
                        value={staff.name}
                        onValueChange={(v) => updateStaffMember(idx, 'name', v)}
                        placeholder="Full name"
                        labelStyle={styles.inputLabelStyle}
                        borderColor={UX4GColors.neutral300}
                        status={errors['staff_' + idx + '_name'] ? 'error' : 'defaultStatus'}
                        caption={errors['staff_' + idx + '_name']}
                      />
                    </View>

                    <View style={styles.fieldSpacing}>
                      <Ux4gInputField
                        label="Role"
                        required
                        size="large"
                        value={staff.role}
                        onValueChange={(v) => updateStaffMember(idx, 'role', v)}
                        placeholder="What they do"
                        labelStyle={styles.inputLabelStyle}
                        borderColor={UX4GColors.neutral300}
                        status={errors['staff_' + idx + '_role'] ? 'error' : 'defaultStatus'}
                        caption={errors['staff_' + idx + '_role']}
                      />
                    </View>

                    <View style={styles.fieldSpacing}>
                      <Ux4gInputField
                        label="Qualification"
                        required
                        size="large"
                        value={staff.qualification}
                        onValueChange={(v) => updateStaffMember(idx, 'qualification', v)}
                        placeholder="Highest qualification"
                        labelStyle={styles.inputLabelStyle}
                        borderColor={UX4GColors.neutral300}
                        status={errors['staff_' + idx + '_qualification'] ? 'error' : 'defaultStatus'}
                        caption={errors['staff_' + idx + '_qualification']}
                      />
                    </View>

                    <View style={{ marginBottom: 2 }}>
                      <Ux4gInputField
                        label="Years in the trade"
                        required
                        type="number"
                        size="large"
                        value={staff.yearsInTrade}
                        onValueChange={(v) => updateStaffMember(idx, 'yearsInTrade', v)}
                        placeholder="Whole years"
                        labelStyle={styles.inputLabelStyle}
                        borderColor={UX4GColors.neutral300}
                        status={errors['staff_' + idx + '_yearsInTrade'] ? 'error' : 'defaultStatus'}
                        caption={errors['staff_' + idx + '_yearsInTrade']}
                      />
                    </View>
                  </View>
                ))}

                <TouchableOpacity
                  style={styles.addStaffButton}
                  onPress={addStaffMember}
                  activeOpacity={0.7}
                >
                  <PlusIcon size={16} color={UX4GColors.primary} />
                  <Text style={styles.addStaffButtonText}>Add another staff member</Text>
                </TouchableOpacity>
              </View>
            ) : step === 5 ? (
              <View style={styles.formContainer}>
                {/* Info Banner using official UX4G Component with UX4GColors cyan palette */}
                <Ux4gStatusBanner
                  variant="infoLight"
                  title="PDF, JPG or PNG · up to 5 MB each · no password-protected files"
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

                {/* Accordion 1: What proves the person */}
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
                    onPress={() => toggleDocSection('person')}
                    style={styles.docSectionCardHeader}
                  >
                    <View style={{ flex: 1, paddingRight: 8 }}>
                      <Text style={styles.docSectionCardTitle}>What proves the person</Text>
                      {!formData.docSectionsExpanded.person && (
                        <>
                          <Text style={styles.docSectionSummaryText}>
                            {'4 documents · ' +
                              ([
                                formData.docFiles.person_photo,
                                formData.docFiles.person_pan,
                                formData.docFiles.person_qualification,
                                formData.docFiles.person_experience,
                              ].filter((arr) => arr.length > 0).length > 0
                                ? [
                                    formData.docFiles.person_photo,
                                    formData.docFiles.person_pan,
                                    formData.docFiles.person_qualification,
                                    formData.docFiles.person_experience,
                                  ].filter((arr) => arr.length > 0).length + ' uploaded'
                                : 'none uploaded yet')}
                          </Text>
                          <View style={styles.docStatusDotRow}>
                            {[
                              formData.docFiles.person_photo,
                              formData.docFiles.person_pan,
                              formData.docFiles.person_qualification,
                              formData.docFiles.person_experience,
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
                    {formData.docSectionsExpanded.person ? (
                      <ChevronUpIcon size={16} color={UX4GColors.neutral900} />
                    ) : (
                      <ChevronDownIcon size={16} color={UX4GColors.neutral900} />
                    )}
                  </TouchableOpacity>

                  {formData.docSectionsExpanded.person && (
                    <View style={{ marginTop: 14 }}>
                      <DocumentUploadSlot
                        title="Photograph of the applicant"
                        required
                        ruleText="JPG or PNG · 1 file"
                        files={formData.docFiles.person_photo}
                        onFilesChanged={(f) => setDocSlotFiles('person_photo', f)}
                        maxFiles={1}
                        maxFileSize={5 * 1024 * 1024}
                        allowedExtensions={['jpg', 'png']}
                      />
                      <DocumentUploadSlot
                        title="PAN of the person"
                        required
                        ruleText="PDF, JPG or PNG · 1 file"
                        files={formData.docFiles.person_pan}
                        onFilesChanged={(f) => setDocSlotFiles('person_pan', f)}
                        maxFiles={1}
                        maxFileSize={5 * 1024 * 1024}
                        allowedExtensions={['pdf', 'jpg', 'png']}
                      />
                      <DocumentUploadSlot
                        title="Qualification certificate"
                        required
                        ruleText="PDF, JPG or PNG · 1 file"
                        files={formData.docFiles.person_qualification}
                        onFilesChanged={(f) => setDocSlotFiles('person_qualification', f)}
                        maxFiles={1}
                        maxFileSize={5 * 1024 * 1024}
                        allowedExtensions={['pdf', 'jpg', 'png']}
                      />
                      <DocumentUploadSlot
                        title="Experience or training certificate"
                        ruleText="PDF, JPG or PNG · up to 3 files"
                        files={formData.docFiles.person_experience}
                        onFilesChanged={(f) => setDocSlotFiles('person_experience', f)}
                        maxFiles={3}
                        maxFileSize={5 * 1024 * 1024}
                        allowedExtensions={['pdf', 'jpg', 'png']}
                        isLast
                      />
                    </View>
                  )}
                </Ux4gCard>

                {/* Accordion 2: What proves the premises */}
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
                    onPress={() => toggleDocSection('premises')}
                    style={styles.docSectionCardHeader}
                  >
                    <View style={{ flex: 1, paddingRight: 8 }}>
                      <Text style={styles.docSectionCardTitle}>What proves the premises</Text>
                      {!formData.docSectionsExpanded.premises && (
                        <>
                          <Text style={styles.docSectionSummaryText}>
                            {'2 documents · ' +
                              ([
                                formData.docFiles.premises_ownership,
                                formData.docFiles.premises_layout,
                              ].filter((arr) => arr.length > 0).length > 0
                                ? [
                                    formData.docFiles.premises_ownership,
                                    formData.docFiles.premises_layout,
                                  ].filter((arr) => arr.length > 0).length + ' uploaded'
                                : 'none uploaded yet')}
                          </Text>
                          <View style={styles.docStatusDotRow}>
                            {[
                              formData.docFiles.premises_ownership,
                              formData.docFiles.premises_layout,
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
                    {formData.docSectionsExpanded.premises ? (
                      <ChevronUpIcon size={16} color={UX4GColors.neutral900} />
                    ) : (
                      <ChevronDownIcon size={16} color={UX4GColors.neutral900} />
                    )}
                  </TouchableOpacity>

                  {formData.docSectionsExpanded.premises && (
                    <View style={{ marginTop: 14 }}>
                      <DocumentUploadSlot
                        title="Proof of ownership or lease of the office"
                        required
                        ruleText="PDF, JPG or PNG · 1 file"
                        files={formData.docFiles.premises_ownership}
                        onFilesChanged={(f) => setDocSlotFiles('premises_ownership', f)}
                        maxFiles={1}
                        maxFileSize={5 * 1024 * 1024}
                        allowedExtensions={['pdf', 'jpg', 'png']}
                      />
                      <DocumentUploadSlot
                        title="Office photograph or layout plan"
                        ruleText="PDF, JPG or PNG · up to 3 files"
                        files={formData.docFiles.premises_layout}
                        onFilesChanged={(f) => setDocSlotFiles('premises_layout', f)}
                        maxFiles={3}
                        maxFileSize={5 * 1024 * 1024}
                        allowedExtensions={['pdf', 'jpg', 'png']}
                        isLast
                      />
                    </View>
                  )}
                </Ux4gCard>

                {/* Accordion 3: What proves the business */}
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
                    onPress={() => toggleDocSection('business')}
                    style={styles.docSectionCardHeader}
                  >
                    <View style={{ flex: 1, paddingRight: 8 }}>
                      <Text style={styles.docSectionCardTitle}>What proves the business</Text>
                      {!formData.docSectionsExpanded.business && (
                        <>
                          <Text style={styles.docSectionSummaryText}>
                            {'6 documents · ' +
                              ([
                                formData.docFiles.business_reg,
                                formData.docFiles.business_pan,
                                formData.docFiles.business_gst,
                                formData.docFiles.business_bank_report,
                                formData.docFiles.business_itr,
                                formData.docFiles.business_other,
                              ].filter((arr) => arr.length > 0).length > 0
                                ? [
                                    formData.docFiles.business_reg,
                                    formData.docFiles.business_pan,
                                    formData.docFiles.business_gst,
                                    formData.docFiles.business_bank_report,
                                    formData.docFiles.business_itr,
                                    formData.docFiles.business_other,
                                  ].filter((arr) => arr.length > 0).length + ' uploaded'
                                : 'none uploaded yet')}
                          </Text>
                          <View style={styles.docStatusDotRow}>
                            {[
                              formData.docFiles.business_reg,
                              formData.docFiles.business_pan,
                              formData.docFiles.business_gst,
                              formData.docFiles.business_bank_report,
                              formData.docFiles.business_itr,
                              formData.docFiles.business_other,
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
                    {formData.docSectionsExpanded.business ? (
                      <ChevronUpIcon size={16} color={UX4GColors.neutral900} />
                    ) : (
                      <ChevronDownIcon size={16} color={UX4GColors.neutral900} />
                    )}
                  </TouchableOpacity>

                  {formData.docSectionsExpanded.business && (
                    <View style={{ marginTop: 14 }}>
                      <DocumentUploadSlot
                        title="Firm registration or incorporation certificate"
                        required
                        ruleText="PDF, JPG or PNG · 1 file"
                        files={formData.docFiles.business_reg}
                        onFilesChanged={(f) => setDocSlotFiles('business_reg', f)}
                        maxFiles={1}
                        maxFileSize={5 * 1024 * 1024}
                        allowedExtensions={['pdf', 'jpg', 'png']}
                      />
                      <DocumentUploadSlot
                        title="PAN of the firm"
                        required
                        ruleText="PDF, JPG or PNG · 1 file"
                        files={formData.docFiles.business_pan}
                        onFilesChanged={(f) => setDocSlotFiles('business_pan', f)}
                        maxFiles={1}
                        maxFileSize={5 * 1024 * 1024}
                        allowedExtensions={['pdf', 'jpg', 'png']}
                      />
                      <DocumentUploadSlot
                        title="GST registration certificate"
                        ruleText="PDF, JPG or PNG · 1 file"
                        files={formData.docFiles.business_gst}
                        onFilesChanged={(f) => setDocSlotFiles('business_gst', f)}
                        maxFiles={1}
                        maxFileSize={5 * 1024 * 1024}
                        allowedExtensions={['pdf', 'jpg', 'png']}
                      />
                      <DocumentUploadSlot
                        title="Banker's confidential report / net worth certificate"
                        required
                        ruleText="PDF, JPG or PNG · 1 file"
                        files={formData.docFiles.business_bank_report}
                        onFilesChanged={(f) => setDocSlotFiles('business_bank_report', f)}
                        maxFiles={1}
                        maxFileSize={5 * 1024 * 1024}
                        allowedExtensions={['pdf', 'jpg', 'png']}
                      />
                      <DocumentUploadSlot
                        title="Audited balance sheet / ITR of previous financial year"
                        required
                        ruleText="PDF, JPG or PNG · up to 2 files"
                        files={formData.docFiles.business_itr}
                        onFilesChanged={(f) => setDocSlotFiles('business_itr', f)}
                        maxFiles={2}
                        maxFileSize={5 * 1024 * 1024}
                        allowedExtensions={['pdf', 'jpg', 'png']}
                      />
                      <DocumentUploadSlot
                        title="Other supporting business document"
                        ruleText="PDF, JPG or PNG · up to 3 files"
                        files={formData.docFiles.business_other}
                        onFilesChanged={(f) => setDocSlotFiles('business_other', f)}
                        maxFiles={3}
                        maxFileSize={5 * 1024 * 1024}
                        allowedExtensions={['pdf', 'jpg', 'png']}
                        isLast
                      />
                    </View>
                  )}
                </Ux4gCard>
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
  gpsLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -4,
    marginBottom: 16,
    paddingVertical: 4,
  },
  gpsLocationText: {
    fontSize: 13.5,
    fontWeight: '600',
    color: UX4GColors.neutral800,
    marginLeft: 8,
  },
  mapContainer: {
    width: '100%',
    height: 210,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: UX4GColors.neutral300,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 16,
  },
  mapOverlayPill: {
    position: 'absolute',
    bottom: 8,
    left: 10,
    right: 10,
    backgroundColor: UX4GColors.white,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: UX4GColors.neutral300,
    paddingVertical: 5,
    paddingHorizontal: 8,
    alignItems: 'center',
    shadowColor: UX4GColors.neutral1000black,
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  mapOverlayPillText: {
    fontSize: 11,
    color: UX4GColors.neutral700,
    fontWeight: '500',
    textAlign: 'center',
  },
  geoCoordLabel: {
    fontSize: 13.5,
    fontWeight: '400',
    color: UX4GColors.neutral800,
    marginBottom: 6,
  },
  geoCoordBox: {
    height: 48,
    backgroundColor: UX4GColors.neutral300,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 12,
    marginBottom: 14,
  },
  geoCoordText: {
    fontSize: 13.5,
    color: UX4GColors.neutral600,
  },
  geoCoordActiveText: {
    color: UX4GColors.neutral900,
    fontWeight: '600',
  },
  orDividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  orDividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: UX4GColors.neutral200,
  },
  orDividerText: {
    marginHorizontal: 12,
    fontSize: 12.5,
    color: UX4GColors.neutral500,
    fontWeight: '400',
  },
  alternativeHintText: {
    fontSize: 11.5,
    color: UX4GColors.neutral500,
    marginTop: 2,
    marginBottom: 8,
  },
  staffCard: {
    backgroundColor: UX4GColors.white,
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    borderRadius: 10,
    padding: 14,
    marginBottom: 14,
  },
  staffCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  staffCardTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: UX4GColors.neutral900,
  },
  addStaffButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: UX4GColors.primary200,
    backgroundColor: UX4GColors.white,
    marginTop: 2,
  },
  addStaffButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: UX4GColors.primary,
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
                Service Pattern • 7 Steps (Steps 1–5 Active)
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
