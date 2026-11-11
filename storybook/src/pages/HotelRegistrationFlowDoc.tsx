import React, { useState, useMemo } from 'react';
import JSZip from 'jszip';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { buildHotelModularProject } from '../utils/hotelModularZip';

interface HotelRegistrationFlowDocProps {
  isDark: boolean;
}

// Official Snack ID for Hotel Registration Flow (Complete 9-Step Workflow)
const SNACK_ID = 'qPU1ZndR_csK7cia-XpSq';

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
  Ux4gTextArea,
  Ux4gDatePicker,
  Ux4gPanInputField,
  Ux4gAadhaarInputField,
  Ux4gCheckbox,
  Ux4gStatusBanner,
  Ux4gCompactStepper,
  Ux4gCard,
  Ux4gButton,
  Ux4gFileUpload,
  Ux4gDivider,
  Ux4gModal,
  Ux4gSpinner,
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
    title: 'Applicant & entity',
    subtitle: 'Who is applying, in what legal form, and who the department will deal with.',
  },
  3: {
    title: 'Unit identity & location',
    subtitle: 'What the unit is, where it stands, and how much land it sits on.',
  },
  4: {
    title: 'Rooms & accommodation',
    subtitle: 'What the unit can actually accommodate, and what it charges.',
  },
  5: {
    title: 'Facilities, services & compliance',
    subtitle: 'What the unit provides, and what it has already been cleared for.',
  },
  6: {
    title: 'Documents',
    subtitle: 'Only the documents your answers actually call for.',
  },
  7: {
    title: 'Review & declaration',
    subtitle: 'Everything you have entered, in one place, each part still editable.',
  },
  8: {
    title: 'Fee & payment',
    subtitle: 'What it costs, how that figure was reached, and when it falls due.',
  },
  9: {
    title: 'Acknowledgement',
    subtitle: 'What happens now, who is deciding, and by when.',
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

const LEGAL_ENTITY_TYPES = [
  { id: 'individual', label: 'Individual / Sole Proprietor' },
  { id: 'partnership', label: 'Partnership Firm' },
  { id: 'llp', label: 'Limited Liability Partnership (LLP)' },
  { id: 'pvt_ltd', label: 'Private Limited Company' },
  { id: 'public_ltd', label: 'Public Limited Company' },
  { id: 'society_trust', label: 'Trust / Society' },
];

const DESIGNATION_OPTIONS = [
  { id: 'proprietor', label: 'Proprietor / Owner' },
  { id: 'partner', label: 'Managing Partner' },
  { id: 'director', label: 'Director' },
  { id: 'general_manager', label: 'General Manager' },
  { id: 'auth_signatory', label: 'Authorised Signatory' },
  { id: 'trustee', label: 'Trustee / Secretary' },
];

const RELATIONSHIP_OPTIONS = [
  { id: 'self', label: 'Self' },
  { id: 'partner', label: 'Business Partner' },
  { id: 'director', label: 'Director / Board Member' },
  { id: 'manager', label: 'Employee / General Manager' },
  { id: 'legal_rep', label: 'Legal / Authorised Representative' },
  { id: 'family', label: 'Spouse / Family Member' },
];

const HOTEL_CLASS_OPTIONS = [
  { id: '1_star', label: '1 Star' },
  { id: '2_star', label: '2 Star' },
  { id: '3_star', label: '3 Star' },
  { id: '4_star', label: '4 Star' },
  { id: '5_star', label: '5 Star' },
  { id: '5_star_deluxe', label: '5 Star Deluxe' },
  { id: 'heritage', label: 'Heritage' },
  { id: 'heritage_classic', label: 'Heritage Classic' },
  { id: 'heritage_grand', label: 'Heritage Grand' },
  { id: 'standard', label: 'Unclassified / Standard' },
];

const LAND_AREA_UNITS = [
  { id: 'acres', label: 'Acres' },
  { id: 'hectares', label: 'Hectares' },
  { id: 'sq_m', label: 'Square metres' },
  { id: 'sq_ft', label: 'Square feet' },
  { id: 'sq_yd', label: 'Square yards' },
  { id: 'nali', label: 'Nali' },
];

const TARIFF_INCLUDES_OPTIONS = [
  { id: 'room_only', label: 'Room only' },
  { id: 'room_breakfast', label: 'Room & breakfast' },
  { id: 'half_board', label: 'Half board (Breakfast & dinner)' },
  { id: 'full_board', label: 'Full board (All meals)' },
  { id: 'taxes_included', label: 'All meals, Wi-Fi & parking' },
];

const FACILITIES_AVAILABLE_OPTIONS = [
  { id: 'lift', label: 'Lift' },
  { id: 'power_backup', label: 'Power backup' },
  { id: 'wifi', label: 'Wi-Fi throughout' },
  { id: 'accessible', label: 'Step-free access and an accessible room' },
];

const SERVICES_OFFERED_OPTIONS = [
  { id: 'restaurant_non_residents', label: 'Restaurant open to non-residents' },
  { id: 'bar_excise', label: 'Bar — separate excise licence required' },
  { id: 'room_service', label: 'Room service' },
  { id: 'travel_desk', label: 'Travel desk or transport' },
];

const WATER_SUPPLY_SOURCES = [
  { id: 'municipal', label: 'Municipal / piped supply' },
  { id: 'borewell', label: 'Borewell / tube well' },
  { id: 'tanker', label: 'Authorised tanker supply' },
  { id: 'spring_surface', label: 'Natural spring / surface source' },
  { id: 'mixed', label: 'Combination of municipal & borewell' },
];

const SOLID_WASTE_DISPOSAL_METHODS = [
  { id: 'municipal', label: 'Municipal door-to-door collection' },
  { id: 'composting_municipal', label: 'On-site wet-waste composting + municipal dry collection' },
  { id: 'recycler', label: 'Segregation & authorised private recycler' },
  { id: 'licensed_agency', label: 'Contracted ULB / licensed waste agency' },
];

const PAYMENT_MODES = [
  { id: 'netbanking', title: 'Net Banking', subtitle: '60+ banks supported' },
  { id: 'upi', title: 'UPI', subtitle: 'Pay with any UPI app' },
  { id: 'card', title: 'Debit / Credit Card', subtitle: 'Visa, MasterCard, RuPay' },
];

const NETBANKING_BANKS = [
  { id: 'airtel', label: 'Airtel Payments Bank' },
  { id: 'axis', label: 'Axis Bank' },
  { id: 'hdfc', label: 'HDFC Bank' },
  { id: 'icici', label: 'ICICI Bank' },
  { id: 'kotak', label: 'Kotak Mahindra Bank' },
  { id: 'sbi', label: 'State Bank of India' },
  { id: 'bob', label: 'Bank of Baroda' },
];

const CrosshairsGpsIcon = ({ size = 18, color = UX4GColors.neutral800 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="7" stroke={color} strokeWidth="1.8" />
    <Circle cx="12" cy="12" r="2.2" fill={color} />
    <Path d="M12 2V5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <Path d="M12 19V22" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <Path d="M2 12H5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <Path d="M19 12H22" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
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
  maxFiles = 3,
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

const getHotelReviewItems = (fd) => {
  const findLabel = (arr, id) => (arr.find((x) => x.id === id) || {}).label;
  const appTypeMap = {
    new: 'New registration',
    renewal: 'Renewal',
    amendment: 'Amendment',
  };
  const appTypeText = appTypeMap[fd.applicationType] || 'New registration';
  const unitCatText = findLabel(UNIT_CATEGORIES, (fd.unitCategory || [])[0]) || 'Hotel';
  const eligText =
    fd.eligibilityCriteria && fd.eligibilityCriteria.length > 0
      ? fd.eligibilityCriteria.length >= 4
        ? 'Permanent'
        : 'Temporary (1 year)'
      : 'Permanent';
  const cityText = findLabel(CITIES_VILLAGES, (fd.cityVillage || [])[0]) || 'Shimla (M Corp.)';
  const pinText = (fd.pinCode || '').trim() || '171001';

  const entityText =
    findLabel(LEGAL_ENTITY_TYPES, (fd.legalEntityType || [])[0]) || 'Private limited company';
  const orgOrName =
    (fd.firmCompanyName || '').trim() || (fd.applicantFullName || '').trim() || 'Saksham Hospitality Pvt Ltd';
  const panText = ((fd.panNumber || '').trim() || 'ABCDE1234F').toUpperCase();

  const uName = (fd.unitName || '').trim() || 'Hotel Devdar';
  const mealsText =
    fd.servesMeals === 'without_boarding' ? 'without boarding' : 'with boarding';
  const gradeText =
    findLabel(HOTEL_CLASS_OPTIONS, (fd.unitClassGrade || [])[0]) || 'Hotel B — Medium';
  const ownershipText =
    fd.premisesOwnership === 'owned'
      ? 'owned'
      : (fd.premisesOwnership || 'leased') + ' to ' + ((fd.leaseExpiryDate || '').trim() || '31 Mar 2031');

  const sRooms = parseInt(fd.singleBedRooms, 10);
  const dRooms = parseInt(fd.doubleBedRooms, 10);
  const fRooms = parseInt(fd.familySuites, 10);
  const sCount = isNaN(sRooms) ? 8 : sRooms;
  const dCount = isNaN(dRooms) ? 12 : dRooms;
  const fCount = isNaN(fRooms) ? 4 : fRooms;
  const totalR = isNaN(sRooms) && isNaN(dRooms) && isNaN(fRooms) ? 24 : sCount + dCount + fCount;
  const lowT = parseInt(fd.lowestTariff, 10);
  const highT = parseInt(fd.highestTariff, 10);
  const lowDisp = isNaN(lowT) ? '2,400' : lowT.toLocaleString('en-IN');
  const highDisp = isNaN(highT) ? '6,500' : highT.toLocaleString('en-IN');
  const parkText = ((fd.parkingSpaces || '').trim() || '18') + ' parking spaces';

  const services = fd.servicesOffered || [];
  const restText =
    services.length === 0 || services.includes('restaurant_non_residents')
      ? 'Restaurant'
      : 'No non-resident restaurant';
  const barText = services.includes('bar_excise') ? ', bar' : ', no bar';
  const stpText =
    fd.hasSewagePlant === 'no'
      ? 'No STP'
      : fd.hasSewagePlant === 'na'
        ? 'STP N/A'
        : fd.sewagePlantWorking === 'no'
          ? 'STP not working'
          : 'STP working';
  const fireText =
    fd.fireSafetyClearanceStatus === 'obtained'
      ? 'fire clearance obtained'
      : fd.fireSafetyClearanceStatus === 'na'
        ? 'fire clearance N/A'
        : 'fire clearance applied for';
  const polText =
    fd.pollutionBoardConsent === 'applied'
      ? 'pollution consent applied for'
      : fd.pollutionBoardConsent === 'na'
        ? 'pollution consent N/A'
        : 'pollution consent obtained';

  const df = fd.docFiles || {};
  const uploadedSlots = Object.keys(df).filter((k) => df[k] && df[k].length > 0).length;
  const docsSub =
    uploadedSlots <= 1
      ? '8 of 8 supplied · 3 reused, 4 uploaded, 1 from DigiLocker'
      : uploadedSlots + ' of 8 supplied · ' + uploadedSlots + ' uploaded';

  return [
    {
      stepNum: 1,
      title: 'Step 1 · Before you start',
      subtitle: appTypeText + ' · ' + unitCatText + ' · ' + eligText + ' · ' + cityText + ', PIN ' + pinText,
    },
    {
      stepNum: 2,
      title: 'Step 2 · Applicant & entity',
      subtitle: entityText + ' · ' + orgOrName + ' · PAN ' + panText,
    },
    {
      stepNum: 3,
      title: 'Step 3 · Unit identity & location',
      subtitle: uName + ' · ' + mealsText + ' · ' + gradeText + ' · ' + ownershipText,
    },
    {
      stepNum: 4,
      title: 'Step 4 · Rooms & accommodation',
      subtitle:
        totalR +
        ' rooms · ' +
        sCount +
        ' single, ' +
        dCount +
        ' double, ' +
        fCount +
        ' suites · ₹' +
        lowDisp +
        '–₹' +
        highDisp +
        ' · ' +
        parkText,
    },
    {
      stepNum: 5,
      title: 'Step 5 · Facilities, services & compliance',
      subtitle: restText + barText + ' · ' + stpText + ' · ' + fireText + ' · ' + polText,
    },
    {
      stepNum: 6,
      title: 'Step 6 · Documents',
      subtitle: docsSub,
    },
  ];
};

const getHotelFeeSummary = (fd) => {
  const sRooms = parseInt(fd.singleBedRooms, 10);
  const dRooms = parseInt(fd.doubleBedRooms, 10);
  const fRooms = parseInt(fd.familySuites, 10);
  const roomsCount =
    isNaN(sRooms) && isNaN(dRooms) && isNaN(fRooms)
      ? 24
      : (isNaN(sRooms) ? 0 : sRooms) + (isNaN(dRooms) ? 0 : dRooms) + (isNaN(fRooms) ? 0 : fRooms);

  let slabLabel = '11 to 30 rooms';
  let amount = 2500;
  if (roomsCount <= 10) {
    slabLabel = 'up to 10 rooms';
    amount = 1500;
  } else if (roomsCount > 30) {
    slabLabel = 'above 30 rooms';
    amount = 5000;
  }
  const formattedAmount = '₹' + amount.toLocaleString('en-IN');
  return {
    applicationRef: 'Hotel registration · HT/2026/HP/0007744',
    roomsCount,
    slabLabel,
    formattedAmount,
    lineDescription: 'Registration fee — hotel, ' + slabLabel + ' (yours: ' + roomsCount + ')',
  };
};

const getHotelAcknowledgementInfo = (fd) => {
  const rawMob = (fd.applicantMobile || '').trim();
  const maskedMobile = rawMob.length >= 4 ? '••••• •' + rawMob.slice(-4) : '••••• •5568';
  const rawEmail = (fd.applicantEmail || '').trim();
  let maskedEmail = 'sa•••••@gmail.com';
  if (rawEmail.includes('@')) {
    const parts = rawEmail.split('@');
    maskedEmail = (parts[0].slice(0, 2) || 'sa') + '•••••@' + (parts[1] || 'gmail.com');
  }
  const authPersonName = (fd.authPersonName || '').trim() || 'Ravi Kumar';
  const rawAuthMob = (fd.authPersonMobile || '').trim();
  const maskedAuthMobile = rawAuthMob.length >= 4 ? '••••• •' + rawAuthMob.slice(-4) : '••••• •5568';
  return {
    maskedMobile,
    maskedEmail,
    authPersonName,
    maskedAuthMobile,
  };
};

export default function App() {
  const [step, setStep] = useState(1);
  const [isPaymentModeView, setIsPaymentModeView] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [savedTime, setSavedTime] = useState('3:14 PM');
  const scrollViewRef = useRef(null);

  const [formData, setFormData] = useState({
    // Step 1: Before you start
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

    // Step 2: Applicant & entity
    legalEntityType: [],
    applyingOnBehalfOf: '',
    applicantFullName: '',
    firmCompanyName: '',
    incorporationNumber: '',
    incorporationDate: '',
    panNumber: '',
    aadhaarNumber: '',
    applicantMobile: '',
    applicantEmail: '',
    applicantLandline: '',
    sameAsUnitAddress: false,
    applicantHouseStreet: '',
    applicantLocalityLandmark: '',
    applicantPinCode: '',
    applicantStateUT: [],
    applicantDistrict: [],
    applicantSubDistrict: [],
    applicantCityVillage: [],
    authSameAsApplicant: false,
    authPersonName: '',
    authPersonDesignation: [],
    authPersonRelationship: [],
    authPersonMobile: '',
    authPersonEmail: '',

    // Step 3: Unit identity & location
    unitName: '',
    servesMeals: '',
    unitClassGrade: [],
    premisesOwnership: '',
    leaseExpiryDate: '',
    yearOfCommencement: '',
    unitMapLink: '',
    unitHouseStreet: '',
    unitLocalityLandmark: '',
    unitPinCode: '',
    unitStateUT: [],
    unitDistrict: [],
    unitCircleSubOffice: [],
    unitSubDistrict: [],
    unitCityVillage: [],
    unitWardPanchayat: [],
    coastalRegulationZone: false,
    landAreaUnit: [],
    totalExtentLand: '',
    builtUpAreaSqm: '',
    unitTelephone: '',
    unitFax: '',
    unitEmail: '',

    // Step 4: Rooms & accommodation
    singleBedRooms: '',
    doubleBedRooms: '',
    familySuites: '',
    dormitoryBeds: '',
    lowestTariff: '',
    highestTariff: '',
    tariffIncludes: [],
    receptionLoungeArea: '',
    diningHallArea: '',
    parkingSpaces: '',
    conferenceHallCapacity: '',
    facilitiesAvailable: [],
    otherAccommodationFacilities: '',

    // Step 5: Facilities, services & compliance
    servicesOffered: [],
    hasSewagePlant: '',
    sewagePlantWorking: '',
    fireSafetyClearanceStatus: '',
    pollutionBoardConsent: '',
    tradeLicenceStatus: '',
    publicLiabilityInsurance: '',
    waterSupplySource: [],
    solidWasteDisposal: [],
    additionalComplianceNotes: '',

    // Step 6: Documents
    docSectionsExpanded: {
      premises: true,
      clearances: false,
      identity_tariff: false,
    },
    docFiles: {
      premises_ownership: [],
      premises_occupancy: [],
      premises_site_plan: [],
      clearance_fire: [
        {
          id: 'doc_fire_1',
          name: 'fire_safety_clearance.pdf',
          fileSize: 1245000,
          status: 'success',
          progress: 1,
        },
      ],
      clearance_pollution: [],
      clearance_insurance: [],
      identity_pan_entity: [],
      identity_tariff_card: [],
    },

    // Step 7: Review & declaration
    declarationConfirmed: false,

    // Step 8: Mode of Payment
    paymentMode: 'upi',
    upiId: '',
    selectedBank: [],
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
  }, [step, isPaymentModeView, paymentCompleted]);

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
    if (!/^[0-9]{6}$/.test(formData.pinCode.trim())) {
      errs.pinCode = 'Enter a valid 6-digit PIN code';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(2);
  };

  const toggleSameAsUnitAddress = (checked) => {
    setFormData((prev) => {
      if (!checked) {
        return { ...prev, sameAsUnitAddress: false };
      }
      return {
        ...prev,
        sameAsUnitAddress: true,
        applicantPinCode: prev.pinCode || prev.applicantPinCode,
        applicantStateUT: prev.stateUT.length ? [...prev.stateUT] : prev.applicantStateUT,
        applicantDistrict: prev.district.length ? [...prev.district] : prev.applicantDistrict,
        applicantSubDistrict: prev.subDistrict.length
          ? [...prev.subDistrict]
          : prev.applicantSubDistrict,
        applicantCityVillage: prev.cityVillage.length
          ? [...prev.cityVillage]
          : prev.applicantCityVillage,
      };
    });
  };

  const toggleAuthSameAsApplicant = (checked) => {
    setFormData((prev) => {
      if (!checked) {
        return { ...prev, authSameAsApplicant: false };
      }
      return {
        ...prev,
        authSameAsApplicant: true,
        authPersonName: prev.applicantFullName || prev.authPersonName,
        authPersonMobile: prev.applicantMobile || prev.authPersonMobile,
        authPersonEmail: prev.applicantEmail || prev.authPersonEmail,
        authPersonRelationship: prev.authPersonRelationship.length
          ? prev.authPersonRelationship
          : ['self'],
      };
    });
  };

  const handleContinueStep2 = () => {
    const errs = {};
    if (!formData.legalEntityType.length) {
      errs.legalEntityType = 'Please select the type of legal entity';
    }
    if (!formData.applyingOnBehalfOf) {
      errs.applyingOnBehalfOf = 'Please select who you are applying on behalf of';
    }
    if (!formData.applicantFullName.trim()) {
      errs.applicantFullName = 'Full name of the applicant is required';
    }
    if (formData.legalEntityType[0] !== 'individual') {
      if (!formData.firmCompanyName.trim()) {
        errs.firmCompanyName = 'Name of the firm, company or society is required';
      }
      if (!formData.incorporationNumber.trim()) {
        errs.incorporationNumber = 'Registration or incorporation number is required';
      }
      if (!formData.incorporationDate.trim()) {
        errs.incorporationDate = 'Date of incorporation or registration is required';
      }
    }
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/i.test(formData.panNumber.trim())) {
      errs.panNumber = 'Enter a valid 10-character PAN (e.g. ABCDE1234F)';
    }
    if (
      formData.aadhaarNumber.trim() &&
      !/^[0-9]{12}$/.test(formData.aadhaarNumber.replace(/ /g, ''))
    ) {
      errs.aadhaarNumber = 'Aadhaar number must be 12 digits';
    }
    if (!/^[0-9]{10}$/.test(formData.applicantMobile.trim())) {
      errs.applicantMobile = 'Enter a valid 10-digit mobile number';
    }
    if (!/^[^@ ]+@[^@ ]+[.][^@ ]+$/.test(formData.applicantEmail.trim())) {
      errs.applicantEmail = 'Enter a valid email address';
    }
    if (!formData.applicantHouseStreet.trim()) {
      errs.applicantHouseStreet = 'House or building number and street is required';
    }
    if (!/^[0-9]{6}$/.test(formData.applicantPinCode.trim())) {
      errs.applicantPinCode = 'Enter a valid 6-digit PIN code';
    }
    if (!formData.applicantStateUT.length) {
      errs.applicantStateUT = 'State / UT is required';
    }
    if (!formData.applicantDistrict.length) {
      errs.applicantDistrict = 'District is required';
    }
    if (!formData.applicantSubDistrict.length) {
      errs.applicantSubDistrict = 'Sub-district is required';
    }
    if (!formData.applicantCityVillage.length) {
      errs.applicantCityVillage = 'City / Town / Village is required';
    }
    if (!formData.authPersonName.trim()) {
      errs.authPersonName = 'Name of the authorised person is required';
    }
    if (!formData.authPersonDesignation.length) {
      errs.authPersonDesignation = 'Please select a designation';
    }
    if (!formData.authPersonRelationship.length) {
      errs.authPersonRelationship = 'Please select relationship to the applicant';
    }
    if (!/^[0-9]{10}$/.test(formData.authPersonMobile.trim())) {
      errs.authPersonMobile = 'Enter a valid 10-digit mobile number';
    }
    if (!/^[^@ ]+@[^@ ]+[.][^@ ]+$/.test(formData.authPersonEmail.trim())) {
      errs.authPersonEmail = 'Enter a valid email address';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(3);
  };

  const getConvertedSqMetres = () => {
    const rawVal = parseFloat(formData.totalExtentLand);
    if (isNaN(rawVal) || rawVal <= 0) {
      return '2,023.43';
    }
    const unitId = formData.landAreaUnit[0] || 'acres';
    const factorMap = {
      acres: 4046.8564224,
      hectares: 10000,
      sq_m: 1,
      sq_ft: 0.092903,
      sq_yd: 0.836127,
      nali: 200.67,
    };
    const sqM = rawVal * (factorMap[unitId] || 1);
    return sqM.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const computedSqMetresDisplay = getConvertedSqMetres();

  const handleUseCurrentLocation = () => {
    updateField('unitMapLink', 'https://maps.google.com/?q=30.4598,78.0644');
  };

  const handleContinueStep3 = () => {
    const errs = {};
    if (!formData.unitName.trim()) {
      errs.unitName = 'Name of the unit is required';
    }
    if (!formData.unitClassGrade.length) {
      errs.unitClassGrade = 'Please select the class or grade of the unit';
    }
    if (!formData.premisesOwnership) {
      errs.premisesOwnership = 'Please select ownership of the premises';
    }
    if (
      (formData.premisesOwnership === 'leased' || formData.premisesOwnership === 'rented') &&
      !formData.leaseExpiryDate.trim()
    ) {
      errs.leaseExpiryDate = 'Lease or rent expiry date is required';
    }
    if (!formData.unitMapLink.trim()) {
      errs.unitMapLink = 'Location link is required';
    }
    if (!formData.unitHouseStreet.trim()) {
      errs.unitHouseStreet = 'House or building number and street is required';
    }
    if (!/^[0-9]{6}$/.test(formData.unitPinCode.trim())) {
      errs.unitPinCode = 'Enter a valid 6-digit PIN code';
    }
    if (!formData.unitStateUT.length) {
      errs.unitStateUT = 'State / UT is required';
    }
    if (!formData.unitDistrict.length) {
      errs.unitDistrict = 'District is required';
    }
    if (!formData.unitCircleSubOffice.length) {
      errs.unitCircleSubOffice = 'Circle / sub-office is required';
    }
    if (!formData.unitSubDistrict.length) {
      errs.unitSubDistrict = 'Sub-district is required';
    }
    if (!formData.unitCityVillage.length) {
      errs.unitCityVillage = 'City / Town / Village is required';
    }
    if (!formData.landAreaUnit.length) {
      errs.landAreaUnit = 'Please select unit of measurement';
    }
    if (!formData.totalExtentLand.trim() || parseFloat(formData.totalExtentLand) <= 0) {
      errs.totalExtentLand = 'Enter total extent of land';
    }
    if (!formData.builtUpAreaSqm.trim() || parseFloat(formData.builtUpAreaSqm) <= 0) {
      errs.builtUpAreaSqm = 'Enter valid built-up area in Sq. m.';
    }
    if (!formData.unitTelephone.trim()) {
      errs.unitTelephone = 'Telephone number of the unit is required';
    }
    if (!/^[^@ ]+@[^@ ]+[.][^@ ]+$/.test(formData.unitEmail.trim())) {
      errs.unitEmail = 'Enter a valid unit email address';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(4);
  };

  const getTotalRoomsDisplay = () => {
    const hasAnyInput =
      formData.singleBedRooms.trim() !== '' ||
      formData.doubleBedRooms.trim() !== '' ||
      formData.familySuites.trim() !== '';
    if (!hasAnyInput) {
      return '24';
    }
    const s = parseInt(formData.singleBedRooms, 10) || 0;
    const d = parseInt(formData.doubleBedRooms, 10) || 0;
    const f = parseInt(formData.familySuites, 10) || 0;
    return String(s + d + f);
  };

  const totalRoomsDisplay = getTotalRoomsDisplay();

  const toggleFacilityAvailable = (id) => {
    setFormData((prev) => {
      const exists = prev.facilitiesAvailable.includes(id);
      return {
        ...prev,
        facilitiesAvailable: exists
          ? prev.facilitiesAvailable.filter((x) => x !== id)
          : [...prev.facilitiesAvailable, id],
      };
    });
  };

  const handleContinueStep4 = () => {
    const errs = {};
    if (formData.singleBedRooms.trim() === '' || isNaN(parseInt(formData.singleBedRooms, 10))) {
      errs.singleBedRooms = 'Enter number of single-bed rooms (0 if none)';
    }
    if (formData.doubleBedRooms.trim() === '' || isNaN(parseInt(formData.doubleBedRooms, 10))) {
      errs.doubleBedRooms = 'Enter number of double-bed rooms (0 if none)';
    }
    if (formData.familySuites.trim() === '' || isNaN(parseInt(formData.familySuites, 10))) {
      errs.familySuites = 'Enter number of family suites (0 if none)';
    }
    const low = parseInt(formData.lowestTariff, 10);
    const high = parseInt(formData.highestTariff, 10);
    if (!formData.lowestTariff.trim() || isNaN(low) || low <= 0) {
      errs.lowestTariff = 'Enter valid lowest tariff per night';
    }
    if (!formData.highestTariff.trim() || isNaN(high) || high <= 0) {
      errs.highestTariff = 'Enter valid highest tariff per night';
    } else if (!isNaN(low) && high < low) {
      errs.highestTariff = 'Highest tariff cannot be less than lowest tariff';
    }
    if (!formData.receptionLoungeArea.trim() || parseFloat(formData.receptionLoungeArea) <= 0) {
      errs.receptionLoungeArea = 'Enter reception and lounge area in Sq. m.';
    }
    if (formData.parkingSpaces.trim() === '' || isNaN(parseInt(formData.parkingSpaces, 10))) {
      errs.parkingSpaces = 'Enter number of parking spaces (0 if none)';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(5);
  };

  const toggleServiceOffered = (id) => {
    setFormData((prev) => {
      const exists = prev.servicesOffered.includes(id);
      return {
        ...prev,
        servicesOffered: exists
          ? prev.servicesOffered.filter((x) => x !== id)
          : [...prev.servicesOffered, id],
      };
    });
  };

  const handleContinueStep5 = () => {
    const errs = {};
    if (!formData.hasSewagePlant) {
      errs.hasSewagePlant = 'Please select whether a sewage treatment plant is present';
    }
    if (formData.hasSewagePlant === 'yes' && !formData.sewagePlantWorking) {
      errs.sewagePlantWorking = 'Please indicate whether the sewage treatment plant is working';
    }
    if (!formData.fireSafetyClearanceStatus) {
      errs.fireSafetyClearanceStatus = 'Please select fire safety clearance status';
    }
    if (!formData.pollutionBoardConsent) {
      errs.pollutionBoardConsent = 'Please select pollution control board consent status';
    }
    if (!formData.tradeLicenceStatus) {
      errs.tradeLicenceStatus = 'Please select trade or shops-and-establishments licence status';
    }
    if (!formData.publicLiabilityInsurance) {
      errs.publicLiabilityInsurance = 'Please select public liability insurance status';
    }
    if (!formData.waterSupplySource.length) {
      errs.waterSupplySource = 'Please select source of water supply';
    }
    if (!formData.solidWasteDisposal.length) {
      errs.solidWasteDisposal = 'Please select solid waste disposal method';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(6);
  };

  const toggleDocSection = (secKey) => {
    setFormData((prev) => ({
      ...prev,
      docSectionsExpanded: {
        ...prev.docSectionsExpanded,
        [secKey]: !prev.docSectionsExpanded[secKey],
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
  };

  const handleContinueStep6 = () => {
    setStep(7);
  };

  const reviewItems = getHotelReviewItems(formData);
  const feeSummary = getHotelFeeSummary(formData);
  const ackInfo = getHotelAcknowledgementInfo(formData);

  const paymentMethodLabel = (() => {
    if (formData.paymentMode === 'netbanking') {
      const bank = NETBANKING_BANKS.find((b) => b.id === (formData.selectedBank || [])[0]);
      return 'Net banking · ' + (bank ? bank.label.replace(' Bank', '') : 'HDFC');
    }
    if (formData.paymentMode === 'card') {
      return 'Debit / Credit Card';
    }
    if ((formData.upiId || '').trim()) {
      return 'UPI · ' + formData.upiId.trim();
    }
    return 'Net banking · HDFC';
  })();

  const handleContinueStep7 = () => {
    if (!formData.declarationConfirmed) {
      setErrors({
        declarationConfirmed: 'Please confirm the declaration above before submitting.',
      });
      return;
    }
    setPaymentCompleted(false);
    setIsPaymentModeView(false);
    setStep(8);
  };

  const handleContinueStep8 = () => {
    setPaymentCompleted(false);
    setIsPaymentModeView(true);
  };

  const handleDownloadReceipt = () => {
    alert('Payment receipt (PG2026HP07744TX) downloaded successfully!');
  };

  const handleDownloadAcknowledgement = () => {
    alert('Acknowledgement PDF (HT/2026/HP/0007744) downloaded successfully!');
  };

  const handleGoToApplications = () => {
    alert('Navigating to My Applications (HT/2026/HP/0007744)...');
  };

  const handlePayNow = () => {
    const errs = {};
    if (formData.paymentMode === 'upi') {
      if (!formData.upiId.trim() || !formData.upiId.includes('@')) {
        errs.upiId = 'Please enter a valid UPI ID (e.g. name@upi)';
      }
    } else if (formData.paymentMode === 'netbanking') {
      if (!formData.selectedBank || formData.selectedBank.length === 0) {
        errs.selectedBank = 'Please select your bank';
      }
    } else if (formData.paymentMode === 'card') {
      if (!formData.cardHolderName || !formData.cardHolderName.trim()) {
        errs.cardHolderName = 'Name on card is required';
      }
      const cardDigits = (formData.cardNumber || '').replace(/[^0-9]/g, '');
      if (cardDigits.length < 12) {
        errs.cardNumber = 'Please enter a valid card number';
      }
      if (!formData.cardExpiry || !formData.cardExpiry.trim()) {
        errs.cardExpiry = 'Expiry date is required';
      }
      if (!formData.cardCvv || formData.cardCvv.trim().length < 3) {
        errs.cardCvv = 'Security code is required';
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
    } else if (step === 7) {
      handleContinueStep7();
    } else if (step === 8) {
      if (paymentCompleted) {
        setStep(9);
      } else if (!isPaymentModeView) {
        handleContinueStep8();
      } else {
        handlePayNow();
      }
    } else if (step < 9) {
      setStep(step + 1);
    }
  };

  const handleStepperBack = () => {
    if (step === 8 && paymentCompleted) {
      setPaymentCompleted(false);
      setIsPaymentModeView(true);
    } else if (step === 8 && isPaymentModeView) {
      setIsPaymentModeView(false);
    } else if (step > 1) {
      setStep(step - 1);
    }
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
            {!(step === 8 && paymentCompleted) && (
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
            )}

            {/* 9-Step Compact Stepper Header using official UX4G Component */}
            <Ux4gCompactStepper
              totalSteps={9}
              currentStep={step}
              layout="centeredBetween"
              stepLabel={activeMeta.title}
              description={
                step === 8 && paymentCompleted
                  ? 'Paid. Nothing further is needed from you today.'
                  : activeMeta.subtitle
              }
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
            ) : step === 2 ? (
              <View style={styles.formContainer}>
                {/* 1. Applicant Details */}
                <Text style={styles.sectionHeading}>Applicant Details</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Type of legal entity"
                    required
                    size="l"
                    options={LEGAL_ENTITY_TYPES}
                    selectedOptionIds={formData.legalEntityType}
                    onSelectionChange={(ids) => updateField('legalEntityType', ids)}
                    placeholder="Select the legal entity type"
                    status={errors.legalEntityType ? 'error' : 'defaultStatus'}
                    description={errors.legalEntityType}
                  />
                </View>

                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>
                    Applying on behalf of<Text style={{ color: UX4GColors.red }}>*</Text>
                  </Text>
                  <View style={styles.radioStack}>
                    <Ux4gRadioButton
                      value="myself"
                      groupValue={formData.applyingOnBehalfOf}
                      onChanged={(val) => updateField('applyingOnBehalfOf', val)}
                      label="Myself"
                      size="small"
                      color={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      value="firm"
                      groupValue={formData.applyingOnBehalfOf}
                      onChanged={(val) => updateField('applyingOnBehalfOf', val)}
                      label="My firm or organisation"
                      size="small"
                      color={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      value="representative"
                      groupValue={formData.applyingOnBehalfOf}
                      onChanged={(val) => updateField('applyingOnBehalfOf', val)}
                      label="Someone else, as their authorised representative"
                      size="small"
                      color={UX4GColors.primary}
                    />
                  </View>
                  {errors.applyingOnBehalfOf && (
                    <Text style={styles.inlineErrorText}>{errors.applyingOnBehalfOf}</Text>
                  )}
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Full name of the applicant"
                    required
                    size="large"
                    value={formData.applicantFullName}
                    onValueChange={(v) => updateField('applicantFullName', v)}
                    placeholder="As it appears on the PAN card"
                    status={errors.applicantFullName ? 'error' : 'defaultStatus'}
                    caption={errors.applicantFullName}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Name of the firm, company or society"
                    required
                    size="large"
                    value={formData.firmCompanyName}
                    onValueChange={(v) => updateField('firmCompanyName', v)}
                    placeholder="Shown only when the entity type is not individual"
                    status={errors.firmCompanyName ? 'error' : 'defaultStatus'}
                    caption={errors.firmCompanyName}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Registration or incorporation number"
                    required
                    size="large"
                    value={formData.incorporationNumber}
                    onValueChange={(v) => updateField('incorporationNumber', v)}
                    placeholder="CIN, LLPIN, society or firm registration number"
                    status={errors.incorporationNumber ? 'error' : 'defaultStatus'}
                    caption={errors.incorporationNumber}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gDatePicker
                    label="Date of incorporation or registration"
                    required
                    onDateSelected={(d) =>
                      updateField('incorporationDate', d.toLocaleDateString('en-GB'))
                    }
                    placeholder="Select date"
                    status={errors.incorporationDate ? 'error' : 'defaultStatus'}
                    description={errors.incorporationDate}
                  />
                </View>

                {/* 2. Identity Details */}
                <Text style={[styles.sectionHeading, { marginTop: 8 }]}>Identity Details</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gPanInputField
                    label="PAN"
                    required
                    size="large"
                    value={formData.panNumber}
                    onValueChange={(v) => updateField('panNumber', v.toUpperCase())}
                    placeholder="10 characters, e.g. ABCDE1234F"
                    caption={
                      errors.panNumber ||
                      'Verified against the Income Tax database once you enter it.'
                    }
                    status={errors.panNumber ? 'error' : 'defaultStatus'}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gAadhaarInputField
                    label="Aadhaar number"
                    size="large"
                    value={formData.aadhaarNumber}
                    onValueChange={(v) => updateField('aadhaarNumber', v)}
                    placeholder="XXXX XXXX XXXX"
                    caption={
                      errors.aadhaarNumber ||
                      'Used only to confirm identity; not printed on the certificate.'
                    }
                    showMaskToggle={true}
                    maskAll={true}
                    status={errors.aadhaarNumber ? 'error' : 'defaultStatus'}
                  />
                </View>

                {/* 3. Contact Details */}
                <Text style={[styles.sectionHeading, { marginTop: 8 }]}>Contact Details</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Mobile number"
                    required
                    size="large"
                    prefixText="+91"
                    value={formData.applicantMobile}
                    onValueChange={(v) => updateField('applicantMobile', v)}
                    placeholder="10-digit mobile number"
                    type="number"
                    maxLength={10}
                    status={errors.applicantMobile ? 'error' : 'defaultStatus'}
                    caption={errors.applicantMobile}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Email address"
                    required
                    size="large"
                    value={formData.applicantEmail}
                    onValueChange={(v) => updateField('applicantEmail', v)}
                    placeholder="name@example.com"
                    type="email"
                    status={errors.applicantEmail ? 'error' : 'defaultStatus'}
                    caption={errors.applicantEmail}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Landline (optional)"
                    size="large"
                    value={formData.applicantLandline}
                    onValueChange={(v) => updateField('applicantLandline', v)}
                    placeholder="STD code + number, e.g. 0151 2560001"
                    type="number"
                  />
                </View>

                {/* 4. Address Details */}
                <Text style={[styles.sectionHeading, { marginTop: 8 }]}>Address Details</Text>

                <View style={styles.groupBlock}>
                  <Ux4gCheckbox
                    value={formData.sameAsUnitAddress}
                    onChanged={(checked) => toggleSameAsUnitAddress(Boolean(checked))}
                    label="Same as the address of the unit"
                    size="small"
                    activeColor={UX4GColors.primary}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="House or building number and street"
                    required
                    size="large"
                    value={formData.applicantHouseStreet}
                    onValueChange={(v) => updateField('applicantHouseStreet', v)}
                    placeholder=""
                    status={errors.applicantHouseStreet ? 'error' : 'defaultStatus'}
                    caption={errors.applicantHouseStreet}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Locality, area or landmark"
                    size="large"
                    value={formData.applicantLocalityLandmark}
                    onValueChange={(v) => updateField('applicantLocalityLandmark', v)}
                    placeholder=""
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="PIN code"
                    required
                    size="large"
                    value={formData.applicantPinCode}
                    onValueChange={(v) => updateField('applicantPinCode', v)}
                    placeholder="6 digits"
                    type="number"
                    maxLength={6}
                    status={errors.applicantPinCode ? 'error' : 'defaultStatus'}
                    caption={errors.applicantPinCode}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="State / UT"
                    required
                    size="l"
                    options={STATES_AND_UTS}
                    selectedOptionIds={formData.applicantStateUT}
                    onSelectionChange={(ids) => updateField('applicantStateUT', ids)}
                    placeholder="Select State / UT"
                    status={errors.applicantStateUT ? 'error' : 'defaultStatus'}
                    description={errors.applicantStateUT}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="District"
                    required
                    size="l"
                    options={DISTRICTS_OPTIONS}
                    selectedOptionIds={formData.applicantDistrict}
                    onSelectionChange={(ids) => updateField('applicantDistrict', ids)}
                    placeholder="Select District"
                    status={errors.applicantDistrict ? 'error' : 'defaultStatus'}
                    description={errors.applicantDistrict}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Sub-district — Tehsil / Mandal / Taluka"
                    required
                    size="l"
                    options={SUB_DISTRICTS}
                    selectedOptionIds={formData.applicantSubDistrict}
                    onSelectionChange={(ids) => updateField('applicantSubDistrict', ids)}
                    placeholder="Select Sub-district"
                    status={errors.applicantSubDistrict ? 'error' : 'defaultStatus'}
                    description={errors.applicantSubDistrict}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="City / Town / Village"
                    required
                    size="l"
                    options={CITIES_VILLAGES}
                    selectedOptionIds={formData.applicantCityVillage}
                    onSelectionChange={(ids) => updateField('applicantCityVillage', ids)}
                    placeholder="Select City, Town or Village"
                    status={errors.applicantCityVillage ? 'error' : 'defaultStatus'}
                    description={errors.applicantCityVillage}
                  />
                </View>

                {/* 5. Authorised Person Details */}
                <Text style={[styles.sectionHeading, { marginTop: 8 }]}>
                  Authorised Person Details
                </Text>

                <View style={styles.groupBlock}>
                  <Ux4gCheckbox
                    value={formData.authSameAsApplicant}
                    onChanged={(checked) => toggleAuthSameAsApplicant(Boolean(checked))}
                    label="Same as the applicant"
                    size="small"
                    activeColor={UX4GColors.primary}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Name of the authorised person"
                    required
                    size="large"
                    value={formData.authPersonName}
                    onValueChange={(v) => updateField('authPersonName', v)}
                    placeholder=""
                    status={errors.authPersonName ? 'error' : 'defaultStatus'}
                    caption={errors.authPersonName}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Designation"
                    required
                    size="l"
                    options={DESIGNATION_OPTIONS}
                    selectedOptionIds={formData.authPersonDesignation}
                    onSelectionChange={(ids) => updateField('authPersonDesignation', ids)}
                    placeholder="Select a designation"
                    status={errors.authPersonDesignation ? 'error' : 'defaultStatus'}
                    description={errors.authPersonDesignation}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Relationship to the applicant"
                    required
                    size="l"
                    options={RELATIONSHIP_OPTIONS}
                    selectedOptionIds={formData.authPersonRelationship}
                    onSelectionChange={(ids) => updateField('authPersonRelationship', ids)}
                    placeholder="Select a relationship"
                    status={errors.authPersonRelationship ? 'error' : 'defaultStatus'}
                    description={errors.authPersonRelationship}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Mobile number"
                    required
                    size="large"
                    prefixText="+91"
                    value={formData.authPersonMobile}
                    onValueChange={(v) => updateField('authPersonMobile', v)}
                    placeholder=""
                    type="number"
                    maxLength={10}
                    status={errors.authPersonMobile ? 'error' : 'defaultStatus'}
                    caption={errors.authPersonMobile}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Email address"
                    required
                    size="large"
                    value={formData.authPersonEmail}
                    onValueChange={(v) => updateField('authPersonEmail', v)}
                    placeholder=""
                    type="email"
                    status={errors.authPersonEmail ? 'error' : 'defaultStatus'}
                    caption={errors.authPersonEmail}
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
                    onPress={handleContinueStep2}
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
            ) : step === 3 ? (
              <View style={styles.formContainer}>
                {/* 1. Unit Details */}
                <Text style={styles.sectionHeading}>Unit Details</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Name of the unit"
                    required
                    size="large"
                    value={formData.unitName}
                    onValueChange={(v) => updateField('unitName', v)}
                    placeholder="As it will appear on the certificate and the signboard"
                    status={errors.unitName ? 'error' : 'defaultStatus'}
                    caption={errors.unitName}
                  />
                </View>

                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>
                    Does the unit serve meals to its guests?
                  </Text>
                  <View style={styles.radioStack}>
                    <Ux4gRadioButton
                      value="with_boarding"
                      groupValue={formData.servesMeals}
                      onChanged={(val) => updateField('servesMeals', val)}
                      label="With boarding — the unit serves meals"
                      size="small"
                      color={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      value="without_boarding"
                      groupValue={formData.servesMeals}
                      onChanged={(val) => updateField('servesMeals', val)}
                      label="Without boarding — rooms only"
                      size="small"
                      color={UX4GColors.primary}
                    />
                  </View>
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Class or grade of the unit"
                    required
                    size="l"
                    options={HOTEL_CLASS_OPTIONS}
                    selectedOptionIds={formData.unitClassGrade}
                    onSelectionChange={(ids) => updateField('unitClassGrade', ids)}
                    placeholder="Select a class"
                    status={errors.unitClassGrade ? 'error' : 'defaultStatus'}
                    description={errors.unitClassGrade}
                  />
                </View>

                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>
                    Ownership of the premises<Text style={{ color: UX4GColors.red }}>*</Text>
                  </Text>
                  <View style={styles.radioStack}>
                    <Ux4gRadioButton
                      value="owned"
                      groupValue={formData.premisesOwnership}
                      onChanged={(val) => updateField('premisesOwnership', val)}
                      label="Owned"
                      size="small"
                      color={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      value="leased"
                      groupValue={formData.premisesOwnership}
                      onChanged={(val) => updateField('premisesOwnership', val)}
                      label="Leased"
                      size="small"
                      color={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      value="rented"
                      groupValue={formData.premisesOwnership}
                      onChanged={(val) => updateField('premisesOwnership', val)}
                      label="Rented"
                      size="small"
                      color={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      value="other"
                      groupValue={formData.premisesOwnership}
                      onChanged={(val) => updateField('premisesOwnership', val)}
                      label="Other"
                      size="small"
                      color={UX4GColors.primary}
                    />
                  </View>
                  {errors.premisesOwnership && (
                    <Text style={styles.inlineErrorText}>{errors.premisesOwnership}</Text>
                  )}
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gDatePicker
                    label="Lease or rent expiry date"
                    required
                    onDateSelected={(d) =>
                      updateField('leaseExpiryDate', d.toLocaleDateString('en-GB'))
                    }
                    placeholder="Select date"
                    status={errors.leaseExpiryDate ? 'error' : 'defaultStatus'}
                    description={errors.leaseExpiryDate}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Year of commencement or expected opening"
                    size="large"
                    value={formData.yearOfCommencement}
                    onValueChange={(v) => updateField('yearOfCommencement', v)}
                    placeholder="YYYY"
                    type="number"
                    maxLength={4}
                  />
                </View>

                {/* 2. Location Details */}
                <Text style={[styles.sectionHeading, { marginTop: 8 }]}>Location Details</Text>

                <View style={{ marginBottom: 10 }}>
                  <Ux4gInputField
                    label="Where is the unit?"
                    required
                    size="large"
                    value={formData.unitMapLink}
                    onValueChange={(v) => updateField('unitMapLink', v)}
                    placeholder="Paste a Google Maps or Apple Maps link to the entrance"
                    status={errors.unitMapLink ? 'error' : 'defaultStatus'}
                    caption={errors.unitMapLink}
                  />
                </View>

                <TouchableOpacity
                  style={styles.gpsLinkButton}
                  activeOpacity={0.7}
                  onPress={handleUseCurrentLocation}
                >
                  <CrosshairsGpsIcon size={18} color={UX4GColors.neutral800} />
                  <Text style={styles.gpsLinkText}>Use my current location</Text>
                </TouchableOpacity>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="House or building number and street"
                    required
                    size="large"
                    value={formData.unitHouseStreet}
                    onValueChange={(v) => updateField('unitHouseStreet', v)}
                    placeholder=""
                    status={errors.unitHouseStreet ? 'error' : 'defaultStatus'}
                    caption={errors.unitHouseStreet}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Locality, area or landmark"
                    size="large"
                    value={formData.unitLocalityLandmark}
                    onValueChange={(v) => updateField('unitLocalityLandmark', v)}
                    placeholder=""
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="PIN code"
                    required
                    size="large"
                    value={formData.unitPinCode}
                    onValueChange={(v) => updateField('unitPinCode', v)}
                    placeholder="6 digits"
                    type="number"
                    maxLength={6}
                    status={errors.unitPinCode ? 'error' : 'defaultStatus'}
                    caption={errors.unitPinCode}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="State / UT"
                    required
                    size="l"
                    options={STATES_AND_UTS}
                    selectedOptionIds={formData.unitStateUT}
                    onSelectionChange={(ids) => updateField('unitStateUT', ids)}
                    placeholder="Select State / UT"
                    status={errors.unitStateUT ? 'error' : 'defaultStatus'}
                    description={errors.unitStateUT}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="District"
                    required
                    size="l"
                    options={DISTRICTS_OPTIONS}
                    selectedOptionIds={formData.unitDistrict}
                    onSelectionChange={(ids) => updateField('unitDistrict', ids)}
                    placeholder="Select District"
                    status={errors.unitDistrict ? 'error' : 'defaultStatus'}
                    description={errors.unitDistrict}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Circle / sub-office"
                    required
                    size="l"
                    options={CIRCLE_SUB_OFFICES}
                    selectedOptionIds={formData.unitCircleSubOffice}
                    onSelectionChange={(ids) => updateField('unitCircleSubOffice', ids)}
                    placeholder="Shown only where the department divides districts"
                    status={errors.unitCircleSubOffice ? 'error' : 'defaultStatus'}
                    description={errors.unitCircleSubOffice}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Sub-district — Tehsil / Mandal / Taluka"
                    required
                    size="l"
                    options={SUB_DISTRICTS}
                    selectedOptionIds={formData.unitSubDistrict}
                    onSelectionChange={(ids) => updateField('unitSubDistrict', ids)}
                    placeholder="Select Sub-district"
                    status={errors.unitSubDistrict ? 'error' : 'defaultStatus'}
                    description={errors.unitSubDistrict}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="City / Town / Village"
                    required
                    size="l"
                    options={CITIES_VILLAGES}
                    selectedOptionIds={formData.unitCityVillage}
                    onSelectionChange={(ids) => updateField('unitCityVillage', ids)}
                    placeholder="Select City, Town or Village"
                    status={errors.unitCityVillage ? 'error' : 'defaultStatus'}
                    description={errors.unitCityVillage}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Ward / Gram panchayat"
                    size="l"
                    options={WARDS_PANCHAYATS}
                    selectedOptionIds={formData.unitWardPanchayat}
                    onSelectionChange={(ids) => updateField('unitWardPanchayat', ids)}
                    placeholder="Select Ward or Gram panchayat"
                  />
                </View>

                <View style={styles.groupBlock}>
                  <Ux4gCheckbox
                    value={formData.coastalRegulationZone}
                    onChanged={(checked) =>
                      updateField('coastalRegulationZone', Boolean(checked))
                    }
                    label="The unit is in a Coastal Regulation Zone"
                    size="small"
                    activeColor={UX4GColors.primary}
                  />
                </View>

                {/* 3. Land and Premises Details */}
                <Text style={[styles.sectionHeading, { marginTop: 8 }]}>
                  Land and Premises Details
                </Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Unit of measurement"
                    required
                    size="l"
                    options={LAND_AREA_UNITS}
                    selectedOptionIds={formData.landAreaUnit}
                    onSelectionChange={(ids) => updateField('landAreaUnit', ids)}
                    placeholder="Select a unit"
                    status={errors.landAreaUnit ? 'error' : 'defaultStatus'}
                    description={errors.landAreaUnit}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Total extent of land"
                    required
                    size="large"
                    value={formData.totalExtentLand}
                    onValueChange={(v) => updateField('totalExtentLand', v)}
                    placeholder="0.5"
                    type="number"
                    status={errors.totalExtentLand ? 'error' : 'defaultStatus'}
                    caption={errors.totalExtentLand}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Text style={styles.fieldGroupLabel}>In square metres</Text>
                  <View style={styles.computedGreyBox}>
                    <Text style={styles.computedGreyText}>{computedSqMetresDisplay}</Text>
                  </View>
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Built-up area, including parking cellars (Sq. m.)"
                    required
                    size="large"
                    value={formData.builtUpAreaSqm}
                    onValueChange={(v) => updateField('builtUpAreaSqm', v)}
                    placeholder="Numbers only"
                    type="number"
                    status={errors.builtUpAreaSqm ? 'error' : 'defaultStatus'}
                    caption={errors.builtUpAreaSqm}
                  />
                </View>

                {/* 4. Contact Details of the Unit */}
                <Text style={[styles.sectionHeading, { marginTop: 8 }]}>
                  Contact Details of the Unit
                </Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Telephone number"
                    required
                    size="large"
                    value={formData.unitTelephone}
                    onValueChange={(v) => updateField('unitTelephone', v)}
                    placeholder="STD code + number, e.g. 0651 2560001"
                    type="number"
                    status={errors.unitTelephone ? 'error' : 'defaultStatus'}
                    caption={errors.unitTelephone}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Fax number"
                    size="large"
                    value={formData.unitFax}
                    onValueChange={(v) => updateField('unitFax', v)}
                    placeholder="Optional"
                    type="number"
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Email address of the unit"
                    required
                    size="large"
                    value={formData.unitEmail}
                    onValueChange={(v) => updateField('unitEmail', v)}
                    placeholder=""
                    type="email"
                    status={errors.unitEmail ? 'error' : 'defaultStatus'}
                    caption={errors.unitEmail}
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
                    onPress={handleContinueStep3}
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
            ) : step === 4 ? (
              <View style={styles.formContainer}>
                {/* 1. Accommodation Details */}
                <Text style={styles.sectionHeading}>Accommodation Details</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Number of single-bed rooms"
                    required
                    size="large"
                    value={formData.singleBedRooms}
                    onValueChange={(v) => updateField('singleBedRooms', v)}
                    placeholder="0"
                    type="number"
                    status={errors.singleBedRooms ? 'error' : 'defaultStatus'}
                    caption={errors.singleBedRooms}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Number of double-bed rooms"
                    required
                    size="large"
                    value={formData.doubleBedRooms}
                    onValueChange={(v) => updateField('doubleBedRooms', v)}
                    placeholder="0"
                    type="number"
                    status={errors.doubleBedRooms ? 'error' : 'defaultStatus'}
                    caption={errors.doubleBedRooms}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Number of family suites (4 beds)"
                    required
                    size="large"
                    value={formData.familySuites}
                    onValueChange={(v) => updateField('familySuites', v)}
                    placeholder="0"
                    type="number"
                    status={errors.familySuites ? 'error' : 'defaultStatus'}
                    caption={errors.familySuites}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Number of dormitory beds"
                    size="large"
                    value={formData.dormitoryBeds}
                    onValueChange={(v) => updateField('dormitoryBeds', v)}
                    placeholder="0"
                    type="number"
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Text style={styles.fieldGroupLabel}>Total number of rooms</Text>
                  <View style={styles.computedGreyBox}>
                    <Text style={styles.computedGreyText}>{totalRoomsDisplay}</Text>
                  </View>
                </View>

                {/* 2. Tariff Details */}
                <Text style={[styles.sectionHeading, { marginTop: 8 }]}>Tariff Details</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Lowest tariff per night"
                    required
                    size="large"
                    prefixText="₹"
                    value={formData.lowestTariff}
                    onValueChange={(v) => updateField('lowestTariff', v)}
                    placeholder="Digits only"
                    type="number"
                    status={errors.lowestTariff ? 'error' : 'defaultStatus'}
                    caption={errors.lowestTariff}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Highest tariff per night"
                    required
                    size="large"
                    prefixText="₹"
                    value={formData.highestTariff}
                    onValueChange={(v) => updateField('highestTariff', v)}
                    placeholder="Digits only"
                    type="number"
                    status={errors.highestTariff ? 'error' : 'defaultStatus'}
                    caption={errors.highestTariff}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Tariff includes"
                    size="l"
                    options={TARIFF_INCLUDES_OPTIONS}
                    selectedOptionIds={formData.tariffIncludes}
                    onSelectionChange={(ids) => updateField('tariffIncludes', ids)}
                    placeholder="Select what the tariff includes"
                  />
                </View>

                {/* 3. Public Areas and Facilities */}
                <Text style={[styles.sectionHeading, { marginTop: 8 }]}>
                  Public Areas and Facilities
                </Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Reception and lounge — area (Sq. m.)"
                    required
                    size="large"
                    value={formData.receptionLoungeArea}
                    onValueChange={(v) => updateField('receptionLoungeArea', v)}
                    placeholder="Numbers only"
                    type="number"
                    status={errors.receptionLoungeArea ? 'error' : 'defaultStatus'}
                    caption={errors.receptionLoungeArea}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Dining hall — area (Sq. m.)"
                    size="large"
                    value={formData.diningHallArea}
                    onValueChange={(v) => updateField('diningHallArea', v)}
                    placeholder="Numbers only"
                    type="number"
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Parking spaces"
                    required
                    size="large"
                    value={formData.parkingSpaces}
                    onValueChange={(v) => updateField('parkingSpaces', v)}
                    placeholder="Number of four-wheeler spaces"
                    type="number"
                    status={errors.parkingSpaces ? 'error' : 'defaultStatus'}
                    caption={errors.parkingSpaces}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Conference or banquet hall — capacity"
                    size="large"
                    value={formData.conferenceHallCapacity}
                    onValueChange={(v) => updateField('conferenceHallCapacity', v)}
                    placeholder="Number of persons"
                    type="number"
                  />
                </View>

                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>Facilities available</Text>
                  <View style={styles.checkboxStack}>
                    {FACILITIES_AVAILABLE_OPTIONS.map((opt) => (
                      <Ux4gCheckbox
                        key={opt.id}
                        value={formData.facilitiesAvailable.includes(opt.id)}
                        onChanged={() => toggleFacilityAvailable(opt.id)}
                        label={opt.label}
                        size="small"
                        activeColor={UX4GColors.primary}
                      />
                    ))}
                  </View>
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gTextArea
                    label="Any other accommodation or facilities"
                    value={formData.otherAccommodationFacilities}
                    onValueChange={(v) => updateField('otherAccommodationFacilities', v)}
                    placeholder="Solar water heating, rainwater harvesting, composting — anything you would want a guest to know"
                    maxLength={200}
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
                    onPress={handleContinueStep4}
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
            ) : step === 5 ? (
              <View style={styles.formContainer}>
                {/* Intro Header matching Step 5 layout */}
                <View style={{ marginBottom: 18 }}>
                  <Text style={[styles.sectionHeading, { fontSize: 16, marginBottom: 4 }]}>
                    Facilities, services & compliance
                  </Text>
                  <Text style={styles.helperNoteText}>
                    What the unit provides, and what it has already been cleared for.
                  </Text>
                </View>

                {/* 1. Services offered */}
                <Text style={styles.sectionHeading}>Services offered</Text>

                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>Services available to guests</Text>
                  <View style={styles.checkboxStack}>
                    {SERVICES_OFFERED_OPTIONS.map((opt) => (
                      <Ux4gCheckbox
                        key={opt.id}
                        value={formData.servicesOffered.includes(opt.id)}
                        onChanged={() => toggleServiceOffered(opt.id)}
                        label={opt.label}
                        size="small"
                        activeColor={UX4GColors.primary}
                      />
                    ))}
                  </View>
                </View>

                {/* 2. Compliance and Safety Details */}
                <Text style={[styles.sectionHeading, { marginTop: 8 }]}>
                  Compliance and Safety Details
                </Text>

                {/* Sewage treatment plant */}
                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>
                    Is there a sewage treatment plant?<Text style={{ color: UX4GColors.red }}>*</Text>
                  </Text>
                  <View style={styles.radioStack}>
                    <Ux4gRadioButton
                      value="yes"
                      groupValue={formData.hasSewagePlant}
                      onChanged={(val) => updateField('hasSewagePlant', val)}
                      label="Yes"
                      size="small"
                      color={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      value="no"
                      groupValue={formData.hasSewagePlant}
                      onChanged={(val) => updateField('hasSewagePlant', val)}
                      label="No"
                      size="small"
                      color={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      value="na"
                      groupValue={formData.hasSewagePlant}
                      onChanged={(val) => updateField('hasSewagePlant', val)}
                      label="Not applicable"
                      size="small"
                      color={UX4GColors.primary}
                    />
                  </View>
                  {errors.hasSewagePlant && (
                    <Text style={styles.inlineErrorText}>{errors.hasSewagePlant}</Text>
                  )}
                </View>

                {/* Sewage treatment plant working */}
                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>
                    Is the sewage treatment plant working?
                    <Text style={{ color: UX4GColors.red }}>*</Text>
                  </Text>
                  <View style={styles.radioStack}>
                    <Ux4gRadioButton
                      value="yes"
                      groupValue={formData.sewagePlantWorking}
                      onChanged={(val) => updateField('sewagePlantWorking', val)}
                      label="Yes"
                      size="small"
                      color={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      value="no"
                      groupValue={formData.sewagePlantWorking}
                      onChanged={(val) => updateField('sewagePlantWorking', val)}
                      label="No"
                      size="small"
                      color={UX4GColors.primary}
                    />
                  </View>
                  {errors.sewagePlantWorking && (
                    <Text style={styles.inlineErrorText}>{errors.sewagePlantWorking}</Text>
                  )}
                </View>

                {/* Fire safety clearance */}
                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>
                    Fire safety clearance<Text style={{ color: UX4GColors.red }}>*</Text>
                  </Text>
                  <View style={styles.radioStack}>
                    <Ux4gRadioButton
                      value="obtained"
                      groupValue={formData.fireSafetyClearanceStatus}
                      onChanged={(val) => updateField('fireSafetyClearanceStatus', val)}
                      label="Obtained"
                      size="small"
                      color={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      value="applied"
                      groupValue={formData.fireSafetyClearanceStatus}
                      onChanged={(val) => updateField('fireSafetyClearanceStatus', val)}
                      label="Applied for, decision awaited"
                      size="small"
                      color={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      value="na"
                      groupValue={formData.fireSafetyClearanceStatus}
                      onChanged={(val) => updateField('fireSafetyClearanceStatus', val)}
                      label="Not applicable to this unit"
                      size="small"
                      color={UX4GColors.primary}
                    />
                  </View>
                  {errors.fireSafetyClearanceStatus && (
                    <Text style={styles.inlineErrorText}>{errors.fireSafetyClearanceStatus}</Text>
                  )}
                </View>

                {/* Pollution control board consent */}
                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>
                    Pollution control board consent<Text style={{ color: UX4GColors.red }}>*</Text>
                  </Text>
                  <View style={styles.radioStack}>
                    <Ux4gRadioButton
                      value="obtained"
                      groupValue={formData.pollutionBoardConsent}
                      onChanged={(val) => updateField('pollutionBoardConsent', val)}
                      label="Obtained"
                      size="small"
                      color={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      value="applied"
                      groupValue={formData.pollutionBoardConsent}
                      onChanged={(val) => updateField('pollutionBoardConsent', val)}
                      label="Applied for, decision awaited"
                      size="small"
                      color={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      value="na"
                      groupValue={formData.pollutionBoardConsent}
                      onChanged={(val) => updateField('pollutionBoardConsent', val)}
                      label="Not applicable to this unit"
                      size="small"
                      color={UX4GColors.primary}
                    />
                  </View>
                  {errors.pollutionBoardConsent && (
                    <Text style={styles.inlineErrorText}>{errors.pollutionBoardConsent}</Text>
                  )}
                </View>

                {/* Trade or shops-and-establishments licence */}
                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>
                    Trade or shops-and-establishments licence
                    <Text style={{ color: UX4GColors.red }}>*</Text>
                  </Text>
                  <View style={styles.radioStack}>
                    <Ux4gRadioButton
                      value="obtained"
                      groupValue={formData.tradeLicenceStatus}
                      onChanged={(val) => updateField('tradeLicenceStatus', val)}
                      label="Obtained"
                      size="small"
                      color={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      value="applied"
                      groupValue={formData.tradeLicenceStatus}
                      onChanged={(val) => updateField('tradeLicenceStatus', val)}
                      label="Applied for, decision awaited"
                      size="small"
                      color={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      value="na"
                      groupValue={formData.tradeLicenceStatus}
                      onChanged={(val) => updateField('tradeLicenceStatus', val)}
                      label="Not applicable to this unit"
                      size="small"
                      color={UX4GColors.primary}
                    />
                  </View>
                  {errors.tradeLicenceStatus && (
                    <Text style={styles.inlineErrorText}>{errors.tradeLicenceStatus}</Text>
                  )}
                </View>

                {/* Public liability insurance */}
                <View style={styles.groupBlock}>
                  <Text style={styles.fieldGroupLabel}>
                    Public liability insurance<Text style={{ color: UX4GColors.red }}>*</Text>
                  </Text>
                  <View style={styles.radioStack}>
                    <Ux4gRadioButton
                      value="in_force"
                      groupValue={formData.publicLiabilityInsurance}
                      onChanged={(val) => updateField('publicLiabilityInsurance', val)}
                      label="In force"
                      size="small"
                      color={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      value="not_taken"
                      groupValue={formData.publicLiabilityInsurance}
                      onChanged={(val) => updateField('publicLiabilityInsurance', val)}
                      label="Not taken"
                      size="small"
                      color={UX4GColors.primary}
                    />
                  </View>
                  {errors.publicLiabilityInsurance && (
                    <Text style={styles.inlineErrorText}>{errors.publicLiabilityInsurance}</Text>
                  )}
                </View>

                {/* Source of water supply */}
                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Source of water supply"
                    required
                    size="l"
                    options={WATER_SUPPLY_SOURCES}
                    selectedOptionIds={formData.waterSupplySource}
                    onSelectionChange={(ids) => updateField('waterSupplySource', ids)}
                    placeholder="Select a source"
                    status={errors.waterSupplySource ? 'error' : 'defaultStatus'}
                    description={errors.waterSupplySource}
                  />
                </View>

                {/* Solid waste disposal */}
                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Solid waste disposal"
                    required
                    size="l"
                    options={SOLID_WASTE_DISPOSAL_METHODS}
                    selectedOptionIds={formData.solidWasteDisposal}
                    onSelectionChange={(ids) => updateField('solidWasteDisposal', ids)}
                    placeholder="Select a method"
                    status={errors.solidWasteDisposal ? 'error' : 'defaultStatus'}
                    description={errors.solidWasteDisposal}
                  />
                </View>

                {/* Anything else the department should know */}
                <View style={styles.fieldSpacing}>
                  <Ux4gTextArea
                    label="Anything else the department should know"
                    value={formData.additionalComplianceNotes}
                    onValueChange={(v) => updateField('additionalComplianceNotes', v)}
                    placeholder="Anything not covered by the questions above"
                    maxLength={200}
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
                    onPress={handleContinueStep5}
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
            ) : step === 6 ? (
              <View style={styles.formContainer}>
                {/* Section 1: Premises and building */}
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
                    style={styles.roomCardHeader}
                  >
                    <View style={{ flex: 1, paddingRight: 8 }}>
                      <Text style={styles.roomCardTitle}>Premises and building</Text>
                      {!formData.docSectionsExpanded.premises && (
                        <>
                          <Text style={styles.roomSummaryText}>
                            {'3 documents · ' +
                              ([
                                formData.docFiles.premises_ownership,
                                formData.docFiles.premises_occupancy,
                                formData.docFiles.premises_site_plan,
                              ].filter((arr) => arr.length > 0).length > 0
                                ? [
                                    formData.docFiles.premises_ownership,
                                    formData.docFiles.premises_occupancy,
                                    formData.docFiles.premises_site_plan,
                                  ].filter((arr) => arr.length > 0).length + ' uploaded'
                                : 'none uploaded yet')}
                          </Text>
                          <View style={styles.docStatusDotRow}>
                            {[
                              formData.docFiles.premises_ownership,
                              formData.docFiles.premises_occupancy,
                              formData.docFiles.premises_site_plan,
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
                        title="Proof of ownership or lease of the premises"
                        required
                        ruleText="PDF or JPG · up to 5 MB · one or more files."
                        files={formData.docFiles.premises_ownership}
                        onFilesChanged={(f) => setDocSlotFiles('premises_ownership', f)}
                        maxFiles={3}
                        maxFileSize={5 * 1024 * 1024}
                        allowedExtensions={['pdf', 'jpg', 'png']}
                      />
                      <DocumentUploadSlot
                        title="Occupancy or completion certificate"
                        required
                        ruleText="PDF · up to 5 MB · from Town and Country Planning, the municipal corporation, the panchayat or a registered architect."
                        files={formData.docFiles.premises_occupancy}
                        onFilesChanged={(f) => setDocSlotFiles('premises_occupancy', f)}
                        maxFiles={1}
                        maxFileSize={5 * 1024 * 1024}
                        allowedExtensions={['pdf']}
                      />
                      <DocumentUploadSlot
                        title="Site plan and floor plan"
                        required
                        ruleText="PDF · up to 10 MB · one file per floor is fine."
                        files={formData.docFiles.premises_site_plan}
                        onFilesChanged={(f) => setDocSlotFiles('premises_site_plan', f)}
                        maxFiles={5}
                        maxFileSize={10 * 1024 * 1024}
                        allowedExtensions={['pdf']}
                        isLast
                      />
                    </View>
                  )}
                </Ux4gCard>

                {/* Section 2: Clearances and insurance */}
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
                    onPress={() => toggleDocSection('clearances')}
                    style={styles.roomCardHeader}
                  >
                    <View style={{ flex: 1, paddingRight: 8 }}>
                      <Text style={styles.roomCardTitle}>Clearances and insurance</Text>
                      {!formData.docSectionsExpanded.clearances && (
                        <>
                          <Text style={styles.roomSummaryText}>
                            {'3 documents · ' +
                              ([
                                formData.docFiles.clearance_fire,
                                formData.docFiles.clearance_pollution,
                                formData.docFiles.clearance_insurance,
                              ].filter((arr) => arr.length > 0).length > 0
                                ? [
                                    formData.docFiles.clearance_fire,
                                    formData.docFiles.clearance_pollution,
                                    formData.docFiles.clearance_insurance,
                                  ].filter((arr) => arr.length > 0).length + ' uploaded'
                                : 'none uploaded yet')}
                          </Text>
                          <View style={styles.docStatusDotRow}>
                            {[
                              formData.docFiles.clearance_fire,
                              formData.docFiles.clearance_pollution,
                              formData.docFiles.clearance_insurance,
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
                    {formData.docSectionsExpanded.clearances ? (
                      <ChevronUpIcon size={16} color={UX4GColors.neutral900} />
                    ) : (
                      <ChevronDownIcon size={16} color={UX4GColors.neutral900} />
                    )}
                  </TouchableOpacity>

                  {formData.docSectionsExpanded.clearances && (
                    <View style={{ marginTop: 14 }}>
                      <DocumentUploadSlot
                        title="Fire safety clearance / NOC"
                        required
                        ruleText="PDF · up to 5 MB · current fire department clearance or application receipt."
                        files={formData.docFiles.clearance_fire}
                        onFilesChanged={(f) => setDocSlotFiles('clearance_fire', f)}
                        maxFiles={1}
                        maxFileSize={5 * 1024 * 1024}
                        allowedExtensions={['pdf']}
                      />
                      <DocumentUploadSlot
                        title="Pollution control board consent"
                        required={false}
                        ruleText="PDF · up to 5 MB · consent to operate or renewal application receipt."
                        files={formData.docFiles.clearance_pollution}
                        onFilesChanged={(f) => setDocSlotFiles('clearance_pollution', f)}
                        maxFiles={1}
                        maxFileSize={5 * 1024 * 1024}
                        allowedExtensions={['pdf']}
                      />
                      <DocumentUploadSlot
                        title="Public liability insurance policy"
                        required
                        ruleText="PDF · up to 5 MB · active policy schedule for guests and premises."
                        files={formData.docFiles.clearance_insurance}
                        onFilesChanged={(f) => setDocSlotFiles('clearance_insurance', f)}
                        maxFiles={1}
                        maxFileSize={5 * 1024 * 1024}
                        allowedExtensions={['pdf']}
                        isLast
                      />
                    </View>
                  )}
                </Ux4gCard>

                {/* Section 3: Identity and tariff */}
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
                    onPress={() => toggleDocSection('identity_tariff')}
                    style={styles.roomCardHeader}
                  >
                    <View style={{ flex: 1, paddingRight: 8 }}>
                      <Text style={styles.roomCardTitle}>Identity and tariff</Text>
                      {!formData.docSectionsExpanded.identity_tariff && (
                        <>
                          <Text style={styles.roomSummaryText}>
                            {'2 documents · ' +
                              ([
                                formData.docFiles.identity_pan_entity,
                                formData.docFiles.identity_tariff_card,
                              ].filter((arr) => arr.length > 0).length > 0
                                ? [
                                    formData.docFiles.identity_pan_entity,
                                    formData.docFiles.identity_tariff_card,
                                  ].filter((arr) => arr.length > 0).length + ' uploaded'
                                : 'none uploaded yet')}
                          </Text>
                          <View style={styles.docStatusDotRow}>
                            {[
                              formData.docFiles.identity_pan_entity,
                              formData.docFiles.identity_tariff_card,
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
                    {formData.docSectionsExpanded.identity_tariff ? (
                      <ChevronUpIcon size={16} color={UX4GColors.neutral900} />
                    ) : (
                      <ChevronDownIcon size={16} color={UX4GColors.neutral900} />
                    )}
                  </TouchableOpacity>

                  {formData.docSectionsExpanded.identity_tariff && (
                    <View style={{ marginTop: 14 }}>
                      <DocumentUploadSlot
                        title="Applicant PAN & incorporation proof"
                        required
                        ruleText="PDF or JPG · up to 5 MB · self-attested copy of PAN and entity certificate."
                        files={formData.docFiles.identity_pan_entity}
                        onFilesChanged={(f) => setDocSlotFiles('identity_pan_entity', f)}
                        maxFiles={2}
                        maxFileSize={5 * 1024 * 1024}
                        allowedExtensions={['pdf', 'jpg', 'png']}
                      />
                      <DocumentUploadSlot
                        title="Published room tariff schedule"
                        required
                        ruleText="PDF or JPG · up to 5 MB · room-category tariff sheet for inspection verification."
                        files={formData.docFiles.identity_tariff_card}
                        onFilesChanged={(f) => setDocSlotFiles('identity_tariff_card', f)}
                        maxFiles={2}
                        maxFileSize={5 * 1024 * 1024}
                        allowedExtensions={['pdf', 'jpg', 'png']}
                        isLast
                      />
                    </View>
                  )}
                </Ux4gCard>

                {/* Bottom Action Buttons */}
                <View style={styles.actionButtonContainer}>
                  <Ux4gButton
                    text="Continue"
                    variant="primary"
                    size="large"
                    backgroundColor={UX4GColors.primary}
                    borderRadius={8}
                    onPress={handleContinueStep6}
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
            ) : step === 7 ? (
              <View style={styles.formContainer}>
                {reviewItems.map((item, idx) => (
                  <View
                    key={'review-' + item.stepNum}
                    style={{ marginBottom: idx === reviewItems.length - 1 ? 18 : 12 }}
                  >
                    <Ux4gStatusBanner
                      variant="successLight"
                      title={item.title}
                      subtitle={item.subtitle}
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
                        fontSize: 12,
                        lineHeight: 17,
                        color: UX4GColors.green,
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
                    value={formData.declarationConfirmed}
                    onChanged={(val) => updateField('declarationConfirmed', !!val)}
                    label="I declare that the information given above is true to the best of my knowledge"
                    isRequired={true}
                    hasError={!!errors.declarationConfirmed}
                    size="medium"
                    activeColor={UX4GColors.primary}
                    labelStyle={{ fontWeight: '600', color: UX4GColors.neutral800 }}
                  />
                  {errors.declarationConfirmed && (
                    <Text style={styles.inlineErrorText}>{errors.declarationConfirmed}</Text>
                  )}
                </View>

                {/* Bottom Action Buttons */}
                <View style={styles.actionButtonContainer}>
                  <Ux4gButton
                    text="Submit application"
                    variant="primary"
                    size="large"
                    backgroundColor={UX4GColors.primary}
                    borderRadius={8}
                    onPress={handleContinueStep7}
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
            ) : step === 8 && !isPaymentModeView && !paymentCompleted ? (
              <View style={styles.formContainer}>
                <Text style={styles.sectionHeading}>Fee Details</Text>

                <Ux4gCard
                  cornerRadius={12}
                  backgroundColor={UX4GColors.white}
                  borderColor={UX4GColors.neutral200}
                  borderWidth={1}
                  elevation={0}
                  style={{ padding: 16, marginBottom: 4 }}
                >
                  <Text style={styles.feeAppNumberHeading}>
                    {feeSummary.applicationRef}
                  </Text>

                  <View style={styles.feeRow}>
                    <View style={{ flex: 1, paddingRight: 16 }}>
                      <Text style={styles.feeLineDescription}>
                        {feeSummary.lineDescription}
                      </Text>
                    </View>
                    <Text style={styles.feeLineAmount}>{feeSummary.formattedAmount}</Text>
                  </View>

                  <Ux4gDivider
                    style="solid"
                    color={UX4GColors.neutral200}
                    thickness={1}
                    containerStyle={{ marginVertical: 14, paddingVertical: 1 }}
                  />

                  <View style={styles.feeTotalRow}>
                    <Text style={styles.feeTotalLabel}>Total payable</Text>
                    <Text style={styles.feeTotalAmount}>{feeSummary.formattedAmount}</Text>
                  </View>
                </Ux4gCard>

                {/* Bottom Action Buttons */}
                <View style={styles.actionButtonContainer}>
                  <Ux4gButton
                    text="Continue to payment"
                    variant="primary"
                    size="large"
                    backgroundColor={UX4GColors.primary}
                    borderRadius={8}
                    onPress={handleContinueStep8}
                    style={{ width: '100%' }}
                  />
                  <View style={{ height: 10 }} />
                  <Ux4gButton
                    text="Save as Draft"
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
            ) : step === 8 && isPaymentModeView && !paymentCompleted ? (
              <View style={styles.formContainer}>
                <Text style={styles.sectionHeading}>Mode of Payment</Text>
                <Text style={styles.paymentSubtitleText}>
                  {feeSummary.formattedAmount + ' payable for HT/2026/HP/0007744.'}
                </Text>

                {/* Payment Mode Radio Cards */}
                <View style={{ gap: 10, marginBottom: 22 }}>
                  {PAYMENT_MODES.map((mode) => {
                    const isSelected = formData.paymentMode === mode.id;
                    return (
                      <Ux4gCard
                        key={mode.id}
                        cornerRadius={10}
                        backgroundColor={isSelected ? UX4GColors.primary50 : UX4GColors.neutral50}
                        borderColor={isSelected ? UX4GColors.primary200 : UX4GColors.neutral200}
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
                        options={NETBANKING_BANKS}
                        selectedOptionIds={formData.selectedBank}
                        onSelectionChange={(ids) => updateField('selectedBank', ids)}
                        placeholder="Select your bank"
                        status={errors.selectedBank ? 'error' : 'defaultStatus'}
                        description={errors.selectedBank}
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
                        status={errors.cardHolderName ? 'error' : 'defaultStatus'}
                        caption={errors.cardHolderName}
                      />
                    </View>
                    <View style={styles.fieldSpacing}>
                      <Ux4gInputField
                        label="Card number"
                        required
                        size="large"
                        type="number"
                        maxLength={19}
                        value={formData.cardNumber}
                        onValueChange={(v) => updateField('cardNumber', v)}
                        placeholder="XXXX - XXXX - XXXX - XXXX"
                        status={errors.cardNumber ? 'error' : 'defaultStatus'}
                        caption={errors.cardNumber}
                      />
                    </View>
                    <View style={styles.fieldSpacing}>
                      <Ux4gInputField
                        label="Expiry date"
                        required
                        size="large"
                        value={formData.cardExpiry}
                        onValueChange={(v) => updateField('cardExpiry', v)}
                        placeholder="MM/YY"
                        maxLength={5}
                        status={errors.cardExpiry ? 'error' : 'defaultStatus'}
                        caption={errors.cardExpiry}
                      />
                    </View>
                    <View style={styles.fieldSpacing}>
                      <Ux4gInputField
                        label="Security code"
                        required
                        size="large"
                        type="number"
                        secureTextEntry={true}
                        value={formData.cardCvv}
                        onValueChange={(v) => updateField('cardCvv', v)}
                        placeholder="XXX"
                        maxLength={4}
                        status={errors.cardCvv ? 'error' : 'defaultStatus'}
                        caption={errors.cardCvv}
                      />
                    </View>
                  </View>
                )}

                {/* Bottom Action Buttons */}
                <View style={styles.actionButtonContainer}>
                  <Ux4gButton
                    text={
                      formData.paymentMode === 'netbanking'
                        ? 'Continue to bank'
                        : 'Pay ' + feeSummary.formattedAmount
                    }
                    variant="primary"
                    size="large"
                    backgroundColor={UX4GColors.primary}
                    borderRadius={8}
                    onPress={handlePayNow}
                    style={{ width: '100%' }}
                  />
                  <View style={{ height: 10 }} />
                  <Ux4gButton
                    text="Save as Draft"
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
            ) : step === 8 && paymentCompleted ? (
              <View style={styles.formContainer}>
                <View style={styles.paymentSuccessHeaderBlock}>
                  <View style={styles.paymentSuccessIconOuter}>
                    <View style={styles.paymentSuccessIconInner}>
                      <CheckSmallIcon size={18} color={UX4GColors.white} />
                    </View>
                  </View>

                  <Text style={styles.paymentSuccessTitle}>Payment successful</Text>
                  <Text style={styles.paymentSuccessSubtitle}>
                    {feeSummary.formattedAmount +
                      ' paid to the Department of Tourism, Himachal Pradesh. Your application is now with the department.'}
                  </Text>
                </View>

                <Ux4gCard
                  cornerRadius={12}
                  backgroundColor={UX4GColors.green50}
                  borderColor={UX4GColors.green200}
                  borderWidth={1}
                  elevation={0}
                  style={{ padding: 16, marginBottom: 4 }}
                >
                  <View style={styles.receiptRow}>
                    <Text style={styles.receiptLabel}>Application number</Text>
                    <Text style={styles.receiptValue}>HT/2026/HP/0007744</Text>
                  </View>
                  <View style={styles.receiptRow}>
                    <Text style={styles.receiptLabel}>Amount paid</Text>
                    <Text style={styles.receiptValue}>{feeSummary.formattedAmount}</Text>
                  </View>
                  <View style={styles.receiptRow}>
                    <Text style={styles.receiptLabel}>Transaction ID</Text>
                    <Text style={styles.receiptValue}>PG2026HP07744TX</Text>
                  </View>
                  <View style={styles.receiptRow}>
                    <Text style={styles.receiptLabel}>Method</Text>
                    <Text style={styles.receiptValue}>{paymentMethodLabel}</Text>
                  </View>
                  <View style={[styles.receiptRow, { marginBottom: 0 }]}>
                    <Text style={styles.receiptLabel}>Date and time</Text>
                    <Text style={styles.receiptValue}>14 Sep 2026, 11:20 AM IST</Text>
                  </View>
                </Ux4gCard>

                {/* Bottom Action Buttons */}
                <View style={styles.actionButtonContainer}>
                  <Ux4gButton
                    text="Track this application"
                    variant="primary"
                    size="large"
                    backgroundColor={UX4GColors.primary}
                    borderRadius={8}
                    onPress={() => setStep(9)}
                    style={{ width: '100%' }}
                  />
                  <View style={{ height: 10 }} />
                  <Ux4gButton
                    text="Download receipt"
                    variant="outline"
                    size="large"
                    backgroundColor={UX4GColors.transparent}
                    contentColor={UX4GColors.primary}
                    borderColor={UX4GColors.primary200}
                    borderWidth={1}
                    borderRadius={8}
                    onPress={handleDownloadReceipt}
                    style={{ width: '100%' }}
                  />
                </View>
              </View>
            ) : (
              <View style={styles.formContainer}>
                {/* 1. Acknowledgement */}
                <Text style={styles.sectionHeading}>Acknowledgement</Text>
                <Ux4gStatusBanner
                  variant="successLight"
                  title={
                    'Application HT/2026/HP/0007744 received on 14 September 2026. ' +
                    feeSummary.formattedAmount +
                    ' paid. A copy has gone to ' +
                    ackInfo.maskedMobile +
                    ' and ' +
                    ackInfo.maskedEmail +
                    '.'
                  }
                  subtitle=""
                  titleNumberOfLines={5}
                  backgroundColor={UX4GColors.green50}
                  borderColor={UX4GColors.green200}
                  marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
                  paddingStyle={{ paddingVertical: 14, paddingHorizontal: 14 }}
                  containerStyle={{ borderRadius: 10, marginBottom: 14 }}
                  titleStyle={{
                    fontSize: 13.5,
                    lineHeight: 20,
                    fontWeight: '500',
                    color: UX4GColors.green800,
                  }}
                />

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={handleDownloadAcknowledgement}
                  style={styles.ackDownloadLinkBtn}
                >
                  <Text style={styles.ackDownloadLinkText}>
                    Download the acknowledgement (PDF)
                  </Text>
                </TouchableOpacity>

                {/* 2. Expected Date of Decision */}
                <Text style={styles.sectionHeading}>Expected Date of Decision</Text>
                <Ux4gStatusBanner
                  variant="infoLight"
                  title="Decision due by 14 October 2026 — 30 days, 0 elapsed. If no department acts within 30 days the application is DEEMED APPROVED."
                  subtitle=""
                  titleNumberOfLines={6}
                  backgroundColor={UX4GColors.cyan50}
                  borderColor={UX4GColors.cyan200}
                  marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
                  paddingStyle={{ paddingVertical: 14, paddingHorizontal: 14 }}
                  containerStyle={{ borderRadius: 10, marginBottom: 20 }}
                  titleStyle={{
                    fontSize: 13.5,
                    lineHeight: 20,
                    fontWeight: '500',
                    color: UX4GColors.cyan800,
                  }}
                />

                {/* 3. What Happens Next */}
                <Text style={styles.sectionHeading}>What Happens Next</Text>
                <View style={styles.ackBulletList}>
                  <Text style={styles.ackBulletText}>
                    1. The department checks the application is complete. If something is missing
                    you will be told here and by SMS, and the clock stops until you answer.
                  </Text>
                  <Text style={styles.ackBulletText}>
                    {'2. An inspection may be arranged with the authorised person named in Step 2 — ' +
                      ackInfo.authPersonName +
                      ', ' +
                      ackInfo.maskedAuthMobile +
                      '.'}
                  </Text>
                  <Text style={styles.ackBulletText}>
                    3. On approval the certificate lands in your portal inbox and is downloadable
                    from here.
                  </Text>
                </View>

                {/* Bottom Action Buttons */}
                <View style={styles.actionButtonContainer}>
                  <Ux4gButton
                    text="Go to my applications"
                    variant="primary"
                    size="large"
                    backgroundColor={UX4GColors.primary}
                    borderRadius={8}
                    onPress={handleGoToApplications}
                    style={{ width: '100%' }}
                  />
                  <View style={{ height: 10 }} />
                  <Ux4gButton
                    text="Download acknowledgement"
                    variant="outline"
                    size="large"
                    backgroundColor={UX4GColors.transparent}
                    contentColor={UX4GColors.primary}
                    borderColor={UX4GColors.primary200}
                    borderWidth={1}
                    borderRadius={8}
                    onPress={handleDownloadAcknowledgement}
                    style={{ width: '100%' }}
                  />
                </View>
              </View>
            )}
          </View>
        </ScrollView>

        {/* Payment Redirecting Processing Modal using official Ux4gModal & Ux4gSpinner */}
        <Ux4gModal
          visible={step === 8 && isPaymentModeView && !paymentCompleted && isRedirecting}
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
  gpsLinkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 6,
    marginBottom: 14,
  },
  gpsLinkText: {
    fontSize: 14,
    fontWeight: '600',
    color: UX4GColors.neutral900,
  },
  computedGreyBox: {
    height: 46,
    borderRadius: 8,
    backgroundColor: UX4GColors.neutral200,
    paddingHorizontal: 14,
    justifyContent: 'center',
  },
  computedGreyText: {
    fontSize: 15,
    fontWeight: '500',
    color: UX4GColors.neutral900,
  },
  roomCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  roomCardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: UX4GColors.neutral900,
  },
  roomSummaryText: {
    fontSize: 12.5,
    color: UX4GColors.neutral500,
    marginTop: 3,
  },
  docStatusDotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 8,
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
  requiredStar: {
    color: UX4GColors.red,
    fontWeight: '700',
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
    alignItems: 'center',
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
    fontSize: 15.5,
    fontWeight: '700',
    color: UX4GColors.neutral900,
  },
  paymentSubtitleText: {
    fontSize: 12.5,
    color: UX4GColors.neutral600,
    marginBottom: 14,
  },
  paymentModeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentModeTitle: {
    fontSize: 14,
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
    marginTop: 2,
    marginBottom: 4,
  },
  paymentInfoText: {
    flex: 1,
    fontSize: 12.5,
    lineHeight: 18,
    color: UX4GColors.neutral600,
  },
  paymentSuccessHeaderBlock: {
    alignItems: 'center',
    paddingTop: 8,
    marginBottom: 18,
  },
  paymentSuccessIconOuter: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: UX4GColors.green100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentSuccessIconInner: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: UX4GColors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentSuccessTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: UX4GColors.neutral900,
    marginTop: 14,
    marginBottom: 8,
    textAlign: 'center',
  },
  paymentSuccessSubtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: UX4GColors.neutral700,
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  receiptRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    gap: 12,
  },
  receiptLabel: {
    fontSize: 13.5,
    color: UX4GColors.neutral700,
  },
  receiptValue: {
    fontSize: 13.5,
    fontWeight: '700',
    color: UX4GColors.neutral900,
    textAlign: 'right',
    flexShrink: 1,
  },
  ackDownloadLinkBtn: {
    marginBottom: 22,
    paddingVertical: 2,
    alignSelf: 'flex-start',
  },
  ackDownloadLinkText: {
    fontSize: 14,
    fontWeight: '700',
    color: UX4GColors.primary,
  },
  ackBulletList: {
    gap: 8,
    marginBottom: 4,
  },
  ackBulletText: {
    fontSize: 13.5,
    lineHeight: 20,
    color: UX4GColors.neutral800,
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
                Service Pattern • 9 Steps (All 9 Steps Complete)
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