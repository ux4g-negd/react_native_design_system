import React, { useState, useMemo, useRef } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { generateAdventureActivityApprovalZip } from '../utils/adventureActivityApprovalModularZip';

interface AdventureActivityApprovalFlowDocProps {
  isDark: boolean;
}

// Official Snack ID for Adventure Activity Approval Flow (Complete 9-Step Flow)
const SNACK_ID = '-0KGbyAZGH2RBd_ijVYKr';

export const AdventureActivityApprovalFlowDoc: React.FC<AdventureActivityApprovalFlowDocProps> = ({ isDark }) => {
  const [isDownloadingZip, setIsDownloadingZip] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const fullAppCodeString = useMemo(() => {
    return `import React, { useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  Modal,
  Animated,
  Easing,
  Platform,
} from 'react-native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';
import {
  Ux4gThemeProvider,
  UX4GColors,
  Ux4gInputField,
  Ux4gTextArea,
  Ux4gDatePicker,
  Ux4gSelectionDropdown,
  Ux4gRadioButton,
  Ux4gCheckbox,
  Ux4gCard,
  Ux4gButton,
  Ux4gStatusBanner,
  Ux4gCompactStepper,
  Ux4gFileUpload,
  Ux4gSpinner,
  Ux4gModal,
} from 'ux4g-react-native-components';

import NationalEmblem from './NationalEmblem';

// Helper to parse 'DD/MM/YYYY' or ISO string to Date object
const parseDate = (str) => {
  if (!str) return undefined;
  if (str instanceof Date) return isNaN(str.getTime()) ? undefined : str;
  const parts = String(str).replace(/\s+/g, '').split('/');
  if (parts.length === 3) {
    const d = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10) - 1;
    const y = parseInt(parts[2], 10);
    const dt = new Date(y, m, d);
    return isNaN(dt.getTime()) ? undefined : dt;
  }
  const dt = new Date(str);
  return isNaN(dt.getTime()) ? undefined : dt;
};

// Helper to format Date object to 'DD/MM/YYYY' string
const formatDate = (date) => {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) return '';
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const y = String(date.getFullYear());
  return [d, m, y].join('/');
};

// ─── UNION LOGO (Union.svg UX4G Logo) ───
const UnionLogo = () => (
  <Svg width={36} height={36} viewBox="0 0 40 40" fill="none">
    <Path
      d="M5.85059 34.2637C7.72048 34.1583 9.59495 34.1583 11.4648 34.2637C15.1962 34.4138 19.3146 35.089 23.4326 35.4141C26.7822 35.6892 30.1618 35.6794 33.3105 34.9141C29.5061 38.2986 24.5517 40.1148 19.4521 39.9942C14.3524 39.8734 9.48932 37.8246 5.85059 34.2637ZM3.76172 22.7647C6.67001 21.8966 9.72795 21.6388 12.7412 22.0088C16.1158 22.359 19.7919 23.4248 23.4326 24.3301C27.0735 25.2355 30.7448 25.9604 34.1045 25.5752C36.0384 25.3889 37.9173 24.8268 39.6338 23.9199C39.3117 25.5465 38.7848 27.1265 38.0664 28.6221C37.0142 29.1907 35.9026 29.6437 34.752 29.9727C31.2316 31.013 27.319 30.8223 23.417 30.2471C19.5151 29.6719 15.5982 28.7163 12.083 28.2461C9.04791 27.8043 5.97725 27.652 2.91309 27.791C2.3808 27.8261 1.87828 27.8262 1.40625 27.8262C0.894651 26.6003 0.505956 25.3266 0.246094 24.0244C1.22033 23.6593 2.41088 23.1648 3.76172 22.7647ZM5.76562 10.7139C8.31822 9.4568 11.2249 9.10423 14.0059 9.71389C17.019 10.2691 20.2236 11.7797 23.4326 13.3203C26.6416 14.861 29.8609 16.4215 32.874 17.0518C35.1426 17.6051 37.5198 17.531 39.749 16.8369C39.9066 17.8298 39.9904 18.8328 40 19.8379C38.0088 20.919 35.7745 21.4787 33.5068 21.4639C30.333 21.5089 26.8324 20.4784 23.3975 19.253C19.9624 18.0275 16.5174 16.6212 13.3535 15.9209C10.5966 15.2104 7.71373 15.1324 4.92188 15.6914C3.21225 16.1055 1.55924 16.7253 0 17.5371C0.105071 16.6264 0.272632 15.7238 0.501953 14.836C1.99816 13.1633 3.78068 11.7674 5.76562 10.7139ZM19.9121 2.51716e-05C24.0578 -0.00157692 28.1024 1.27476 31.4912 3.65335C34.8799 6.03187 37.4469 9.39617 38.8398 13.2852C36.744 13.9628 34.4987 14.0397 32.3613 13.5059C29.529 12.9006 26.4909 11.3695 23.4326 9.63381C20.3744 7.8982 17.3161 6.0477 14.5039 4.86721C12.6733 4.03008 10.7035 3.53465 8.69336 3.40628C12.0074 1.18013 15.9149 -0.00630153 19.9121 2.51716e-05Z"
      fill={UX4GColors.primary}
    />
  </Svg>
);

const PERMIT_QR_PATH_D = 'M0,0h7v1h-7z M9,0h1v1h-1z M13,0h2v1h-2z M16,0h3v1h-3z M22,0h7v1h-7z M0,1h1v1h-1z M6,1h1v1h-1z M12,1h1v1h-1z M14,1h5v1h-5z M20,1h1v1h-1z M22,1h1v1h-1z M28,1h1v1h-1z M0,2h1v1h-1z M2,2h3v1h-3z M6,2h1v1h-1z M9,2h1v1h-1z M13,2h2v1h-2z M17,2h3v1h-3z M22,2h1v1h-1z M24,2h3v1h-3z M28,2h1v1h-1z M0,3h1v1h-1z M2,3h3v1h-3z M6,3h1v1h-1z M10,3h3v1h-3z M14,3h1v1h-1z M16,3h1v1h-1z M19,3h2v1h-2z M22,3h1v1h-1z M24,3h3v1h-3z M28,3h1v1h-1z M0,4h1v1h-1z M2,4h3v1h-3z M6,4h1v1h-1z M8,4h1v1h-1z M11,4h2v1h-2z M15,4h1v1h-1z M17,4h4v1h-4z M22,4h1v1h-1z M24,4h3v1h-3z M28,4h1v1h-1z M0,5h1v1h-1z M6,5h1v1h-1z M8,5h1v1h-1z M10,5h1v1h-1z M13,5h1v1h-1z M18,5h1v1h-1z M22,5h1v1h-1z M28,5h1v1h-1z M0,6h7v1h-7z M8,6h1v1h-1z M10,6h1v1h-1z M12,6h1v1h-1z M14,6h1v1h-1z M16,6h1v1h-1z M18,6h1v1h-1z M20,6h1v1h-1z M22,6h7v1h-7z M9,7h1v1h-1z M12,7h1v1h-1z M17,7h4v1h-4z M0,8h5v1h-5z M6,8h2v1h-2z M11,8h1v1h-1z M14,8h2v1h-2z M21,8h2v1h-2z M25,8h4v1h-4z M1,9h1v1h-1z M5,9h1v1h-1z M7,9h1v1h-1z M9,9h1v1h-1z M11,9h1v1h-1z M13,9h1v1h-1z M15,9h2v1h-2z M18,9h2v1h-2z M21,9h1v1h-1z M26,9h1v1h-1z M6,10h3v1h-3z M10,10h2v1h-2z M13,10h6v1h-6z M20,10h2v1h-2z M23,10h1v1h-1z M26,10h1v1h-1z M2,11h1v1h-1z M4,11h2v1h-2z M7,11h1v1h-1z M9,11h4v1h-4z M16,11h3v1h-3z M23,11h2v1h-2z M0,12h8v1h-8z M14,12h1v1h-1z M17,12h3v1h-3z M22,12h2v1h-2z M25,12h1v1h-1z M27,12h2v1h-2z M3,13h1v1h-1z M5,13h1v1h-1z M8,13h3v1h-3z M13,13h1v1h-1z M15,13h1v1h-1z M19,13h1v1h-1z M21,13h1v1h-1z M23,13h3v1h-3z M27,13h1v1h-1z M0,14h5v1h-5z M6,14h2v1h-2z M11,14h1v1h-1z M13,14h1v1h-1z M15,14h1v1h-1z M17,14h1v1h-1z M19,14h1v1h-1z M21,14h1v1h-1z M26,14h2v1h-2z M1,15h1v1h-1z M3,15h1v1h-1z M5,15h1v1h-1z M8,15h3v1h-3z M12,15h1v1h-1z M15,15h2v1h-2z M18,15h1v1h-1z M22,15h1v1h-1z M24,15h4v1h-4z M2,16h1v1h-1z M4,16h1v1h-1z M6,16h6v1h-6z M14,16h1v1h-1z M16,16h4v1h-4z M22,16h1v1h-1z M24,16h1v1h-1z M4,17h2v1h-2z M8,17h1v1h-1z M11,17h1v1h-1z M14,17h1v1h-1z M16,17h2v1h-2z M19,17h3v1h-3z M24,17h1v1h-1z M26,17h3v1h-3z M0,18h2v1h-2z M3,18h1v1h-1z M6,18h2v1h-2z M9,18h5v1h-5z M15,18h2v1h-2z M18,18h1v1h-1z M22,18h1v1h-1z M26,18h1v1h-1z M28,18h1v1h-1z M1,19h2v1h-2z M5,19h1v1h-1z M7,19h2v1h-2z M10,19h3v1h-3z M14,19h1v1h-1z M16,19h1v1h-1z M18,19h1v1h-1z M26,19h1v1h-1z M28,19h1v1h-1z M0,20h4v1h-4z M6,20h1v1h-1z M8,20h2v1h-2z M11,20h1v1h-1z M17,20h2v1h-2z M20,20h5v1h-5z M8,21h1v1h-1z M14,21h2v1h-2z M20,21h1v1h-1z M24,21h1v1h-1z M27,21h2v1h-2z M0,22h7v1h-7z M8,22h2v1h-2z M12,22h2v1h-2z M16,22h3v1h-3z M20,22h1v1h-1z M22,22h1v1h-1z M24,22h1v1h-1z M26,22h1v1h-1z M0,23h1v1h-1z M6,23h1v1h-1z M9,23h1v1h-1z M12,23h1v1h-1z M14,23h3v1h-3z M20,23h1v1h-1z M24,23h1v1h-1z M28,23h1v1h-1z M0,24h1v1h-1z M2,24h3v1h-3z M6,24h1v1h-1z M9,24h1v1h-1z M11,24h1v1h-1z M16,24h3v1h-3z M20,24h5v1h-5z M27,24h1v1h-1z M0,25h1v1h-1z M2,25h3v1h-3z M6,25h1v1h-1z M10,25h1v1h-1z M12,25h3v1h-3z M16,25h3v1h-3z M26,25h1v1h-1z M28,25h1v1h-1z M0,26h1v1h-1z M2,26h3v1h-3z M6,26h1v1h-1z M8,26h3v1h-3z M12,26h1v1h-1z M19,26h1v1h-1z M22,26h3v1h-3z M26,26h1v1h-1z M0,27h1v1h-1z M6,27h1v1h-1z M8,27h1v1h-1z M12,27h2v1h-2z M17,27h1v1h-1z M19,27h2v1h-2z M23,27h1v1h-1z M25,27h1v1h-1z M27,27h2v1h-2z M0,28h7v1h-7z M8,28h1v1h-1z M10,28h4v1h-4z M15,28h4v1h-4z M21,28h1v1h-1z M26,28h1v1h-1z';

const STEP_METADATA = {
  1: {
    title: 'Before you start',
    subtitle: 'Everything this registration depends on, named up front — so nothing is discovered by failing.',
  },
  2: {
    title: 'Applicant & entity',
    subtitle: 'Who is applying, how we reach you, and where you are registered.',
  },
  3: {
    title: 'Registration category',
    subtitle: 'What kind of operator you are, and which domain you operate in.',
  },
  4: {
    title: 'Location & site',
    subtitle: 'Where the activity runs, down to the plot and the point on the map.',
  },
  5: {
    title: 'Activity & safety',
    subtitle: 'What you will operate, who will lead it, and how people are kept safe.',
  },
  6: {
    title: 'Documents',
    subtitle: 'Proof for everything you have declared. Reuse what the portal already holds.',
  },
  7: {
    title: 'Insurance & compliance',
    subtitle: 'Third-party liability coverage, participant accident insurance, and policy bounds.',
  },
  8: {
    title: 'Fee & payment',
    subtitle: 'Inspection fee, departmental activity approval charges, and settlement gateway.',
  },
  9: {
    title: 'Acknowledgement & credential',
    subtitle: 'Your issued approval certificate, inspection order, and verifiable QR credential.',
  },
};

const APPLICANT_TYPE_OPTIONS = [
  { id: 'individual', label: 'Individual organiser' },
  { id: 'proprietorship', label: 'Proprietorship' },
  { id: 'partnership', label: 'Partnership firm' },
  { id: 'llp', label: 'Limited Liability Partnership (LLP)' },
  { id: 'pvt_ltd', label: 'Private Limited Company' },
  { id: 'public_ltd', label: 'Public Limited Company' },
  { id: 'society', label: 'Society / Trust / Association' },
];

const REGISTRATION_CATEGORY_OPTIONS = [
  { id: 'commercial_operator', label: 'Commercial adventure tour operator' },
  { id: 'technical_provider', label: 'Technical service provider organisation' },
  { id: 'non_profit', label: 'Non-profit organisation running adventure activities' },
  { id: 'aggregator_reseller', label: 'Aggregator or reseller' },
  { id: 'campsite_space_only', label: 'Campsite or resort providing space only' },
  { id: 'resort_own_setup', label: 'Resort or campsite with its own adventure setup' },
  { id: 'training_institute', label: 'Training institute running adventure courses' },
  { id: 'individual_expert', label: 'Individual organiser or outdoor expert' },
];

const REGISTRATION_PERIOD_OPTIONS = [
  { id: '1_year', label: '1 Year (Annual renewal cycle)' },
  { id: '2_years', label: '2 Years (Standard validity)' },
  { id: '3_years', label: '3 Years (Recognised multi-year approval)' },
  { id: '5_years', label: '5 Years (Certified master operator tier)' },
];

const STATE_UT_OPTIONS = [
  { id: 'uttarakhand', label: 'Uttarakhand' },
  { id: 'himachal', label: 'Himachal Pradesh' },
  { id: 'jammu_kashmir', label: 'Jammu & Kashmir' },
  { id: 'ladakh', label: 'Ladakh' },
  { id: 'sikkim', label: 'Sikkim' },
  { id: 'arunachal', label: 'Arunachal Pradesh' },
  { id: 'goa', label: 'Goa' },
  { id: 'kerala', label: 'Kerala' },
  { id: 'maharashtra', label: 'Maharashtra' },
  { id: 'karnataka', label: 'Karnataka' },
  { id: 'rajasthan', label: 'Rajasthan' },
];

const REVENUE_DIVISION_OPTIONS = [
  { id: 'garhwal', label: 'Garhwal Division' },
  { id: 'kumaon', label: 'Kumaon Division' },
  { id: 'northern', label: 'Northern Hill Division' },
  { id: 'plains', label: 'Terai & Plains Division' },
];

const DISTRICT_OPTIONS = [
  { id: 'tehri_garhwal', label: 'Tehri Garhwal' },
  { id: 'dehradun', label: 'Dehradun' },
  { id: 'pauri_garhwal', label: 'Pauri Garhwal' },
  { id: 'uttarkashi', label: 'Uttarkashi' },
  { id: 'chamoli', label: 'Chamoli' },
  { id: 'rudraprayag', label: 'Rudraprayag' },
  { id: 'nainital', label: 'Nainital' },
];

const SUB_DISTRICT_OPTIONS = [
  { id: 'rishikesh', label: 'Rishikesh' },
  { id: 'narendra_nagar', label: 'Narendra Nagar' },
  { id: 'devprayag', label: 'Devprayag' },
  { id: 'dhanaulti', label: 'Dhanaulti' },
  { id: 'tehri', label: 'Tehri' },
];

const VILLAGE_TOWN_OPTIONS = [
  { id: 'shivpuri', label: 'Shivpuri' },
  { id: 'tapovan', label: 'Tapovan' },
  { id: 'muni_ki_reti', label: 'Muni Ki Reti' },
  { id: 'kaudiyala', label: 'Kaudiyala' },
  { id: 'byasi', label: 'Byasi' },
  { id: 'singtali', label: 'Singtali' },
];

const UNIT_OF_AREA_OPTIONS = [
  { id: 'hectare', label: 'Hectare (ha)' },
  { id: 'acre', label: 'Acre (ac)' },
  { id: 'sq_metre', label: 'Square Metre (sq m)' },
  { id: 'bigha', label: 'Bigha' },
];

const LAND_HOLDING_OPTIONS = [
  { id: 'owned', label: 'Owned by applicant / organisation' },
  { id: 'leased', label: 'Registered commercial lease agreement' },
  { id: 'government', label: 'Government allotment / concession' },
  { id: 'forest', label: 'Forest department licensed corridor' },
  { id: 'panchayat', label: 'Gram Panchayat permission deed' },
];

const SITE_ACTIVITIES_OPTIONS = [
  { id: 'trekking_hiking', label: 'Trekking and hiking' },
  { id: 'rock_climbing', label: 'Rock climbing and bouldering' },
  { id: 'rappelling_ferrata', label: 'Rappelling and via ferrata' },
  { id: 'zipline_rope', label: 'Zip line and rope course' },
  { id: 'mountain_biking', label: 'Mountain biking' },
  { id: 'camping_bivouac', label: 'Camping and bivouac' },
  { id: 'caving', label: 'Caving' },
  { id: 'off_road', label: 'All-terrain and off-road driving' },
];

const OPERATING_SEASON_OPTIONS = [
  { id: 'all_year', label: 'All year, or specified months' },
  { id: 'all_year_round', label: 'All year (12 months uninterrupted)' },
  { id: 'sep_jun', label: 'September to June (Standard hill season)' },
  { id: 'oct_mar', label: 'October to March (Winter / dry season)' },
  { id: 'may_sep', label: 'May to September (High altitude summer season)' },
];

const DAILY_OPERATING_HOURS_OPTIONS = [
  { id: 'window_operating', label: 'Select the window you operate in' },
  { id: 'daylight', label: 'Sunrise to Sunset (Daylight hours only)' },
  { id: '6am_6pm', label: '06:00 AM to 06:00 PM' },
  { id: '8am_5pm', label: '08:00 AM to 05:00 PM' },
  { id: '24hours', label: '24 Hours (Overnight camping / expeditions)' },
];

const LEAD_QUALIFICATION_OPTIONS = [
  { id: 'moi', label: 'Method of Instruction (MOI) - National Institute' },
  { id: 'amc', label: 'Advance Mountaineering Course (AMC) - Grade A' },
  { id: 'bmc', label: 'Basic Mountaineering Course (BMC) - Grade A' },
  { id: 'wfr', label: 'WFR / Wilderness First Responder (NOLS / WMA)' },
  { id: 'federation', label: 'National / International Federations Certified Lead' },
];

const EQUIPMENT_HOLD_OPTIONS = [
  { id: 'owned', label: 'Owned by the operating organisation' },
  { id: 'hired', label: 'Hired from a certified technical equipment supplier' },
  { id: 'leased_amc', label: 'Leased with annual maintenance contract (AMC)' },
  { id: 'combination', label: 'Combination of owned and leased gear' },
];

const LAND_ACTIVITIES = [
  { id: 'trekking', label: 'Trekking & Mountaineering Expedition' },
  { id: 'rock_climbing', label: 'Rock Climbing & Bouldering' },
  { id: 'zipline', label: 'Zipline & Aerial Rope Course' },
  { id: 'all_terrain', label: 'All-Terrain Vehicle (ATV) Safari' },
  { id: 'caving', label: 'Caving & Speleology' },
];

const WATER_ACTIVITIES = [
  { id: 'white_water_rafting', label: 'White Water River Rafting (Grade II - IV)' },
  { id: 'kayaking', label: 'Kayaking & River Canoeing' },
  { id: 'scuba_diving', label: 'Scuba Diving & Snorkeling' },
  { id: 'cliff_jumping', label: 'Cliff Jumping & Canyoneering' },
  { id: 'jet_ski', label: 'Jet Skiing & Power Boating' },
];

const AIR_ACTIVITIES = [
  { id: 'paragliding_tandem', label: 'Paragliding (Tandem & Solo)' },
  { id: 'paramotor', label: 'Powered Paragliding / Paramotor' },
  { id: 'hot_air_balloon', label: 'Hot Air Ballooning (Tethered & Free)' },
  { id: 'bungee_jumping', label: 'Bungee Jumping & Reverse Bungee' },
  { id: 'skydiving', label: 'Tandem Skydiving' },
];

export default function App() {
  const [step, setStep] = useState(6); // Directly land on Step 6 for testing as requested
  const [lastSavedTime, setLastSavedTime] = useState('3:14 PM');
  const [isDraftSaved, setIsDraftSaved] = useState(true);
  const [showDraftToast, setShowDraftToast] = useState(false);
  const [showPrereqModal, setShowPrereqModal] = useState(false);
  const [showSectorRegModal, setShowSectorRegModal] = useState(false);
  const [isApplicantTypeDropdownOpen, setIsApplicantTypeDropdownOpen] = useState(false);
  const [isPeriodDropdownOpen, setIsPeriodDropdownOpen] = useState(false);
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [isDivisionDropdownOpen, setIsDivisionDropdownOpen] = useState(false);
  const [isDistrictDropdownOpen, setIsDistrictDropdownOpen] = useState(false);
  const [isSubDistrictDropdownOpen, setIsSubDistrictDropdownOpen] = useState(false);
  const [isVillageDropdownOpen, setIsVillageDropdownOpen] = useState(false);
  const [isUnitAreaDropdownOpen, setIsUnitAreaDropdownOpen] = useState(false);
  const [isLandHoldingDropdownOpen, setIsLandHoldingDropdownOpen] = useState(false);
  const [isSeasonDropdownOpen, setIsSeasonDropdownOpen] = useState(false);
  const [isHoursDropdownOpen, setIsHoursDropdownOpen] = useState(false);
  const [isQualificationDropdownOpen, setIsQualificationDropdownOpen] = useState(false);
  const [isEquipmentHoldDropdownOpen, setIsEquipmentHoldDropdownOpen] = useState(false);
  const [isSiteDocsExpanded, setIsSiteDocsExpanded] = useState(true);
  const [isSafetyDocsExpanded, setIsSafetyDocsExpanded] = useState(false);
  const [isOnRecordDocsExpanded, setIsOnRecordDocsExpanded] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Before you start
    registrationType: 'new', // 'new' | 'renewal'
    activityDomain: 'land', // 'land' | 'water' | 'air'
    hasPrerequisiteRegistrations: false,

    // Step 2: Applicant & entity (Matches media_1794976345102_2f0352d5.png)
    applicantType: '',
    applicantOrOrgName: '',
    ownerOrDirectorName: '',
    designation: '',
    aadhaarNumber: '',
    isAadhaarMasked: true,
    entityPan: '',
    mobileNumber: '',
    emailAddress: '',
    registeredAddress: '',
    sameAsRegisteredAddress: false,
    correspondenceAddress: '',

    // Step 3: Registration category (Matches media_1794977065300_4ab5953d.png)
    registrationCategory: '',
    sectorTourismRegNumber: '',
    registrationIssueDate: '24/09/2024',
    registrationPeriod: '',

    // Step 4: Location & site (Matches media_1794978281758_954b4266.png)
    siteState: '',
    siteDivision: '',
    siteDistrict: '',
    siteSubDistrict: '',
    siteVillageOrTown: '',
    surveyPlotNumber: '',
    siteArea: '',
    unitOfArea: '',
    landHoldingType: '',
    mapLink: '',
    latitude: '',
    longitude: '',
    siteFullAddress: '',
    sitePinCode: '',

    // Step 5: Activity & safety (Matches media_1794983740939_13a504aa.png)
    selectedActivities: [],
    maxBatchParticipants: '',
    maxBatchesPerDay: '',
    operatingSeason: '',
    dailyOperatingHours: '',
    certifiedLeadsCount: '',
    leadHighestQualification: '',
    certifyingBody: '',
    supportStaffCount: '',
    equipmentHoldType: '',
    lastEquipmentInspectionDate: '',
    inspectingAgency: '',
    liabilityPolicyNumber: '',
    policyValidUntilDate: '',
    nearestHospitalAndDistance: '',
    emergencyContactNumber: '',
    hasWrittenEmergencyPlan: false,

    // Step 6: Documents (Matches media_1794985978361_58fbc30a.png)
    landRecordFiles: [],
    landRecordDoc: null,
    leaseDeedFiles: [],
    leaseDeedDoc: null,
    siteLayoutFiles: [],
    siteLayoutDoc: null,
    sopManualFiles: [],
    sopManualDoc: null,
    eapPlanFiles: [],
    eapPlanDoc: null,
    equipmentInspectionFiles: [],
    equipmentInspectionDoc: null,
    leadCertificatesFiles: [],
    leadCertificatesDoc: null,

    // Legacy / downstream compatibility
    enterpriseName: 'Himalayan Apex Adventures Pvt Ltd',
    enterpriseType: 'Private Limited Company',
    regNumber: 'UDYAM-UK-04-0091823',
    panNumber: 'AABCH7821K',
    gstin: '05AABCH7821K1ZB',
    district: 'Tehri Garhwal',
    state: 'Uttarakhand',
    pinCode: '249192',

    // Step 3: Activity & location
    specificActivity: 'trekking',
    activityLocation: 'Rishikesh to Shivpuri River Corridor',
    geoCoordinates: '30.1378° N, 78.3842° E',
    baseCampName: 'Camp Tapovan Alpha',
    seasonFrom: '15/09/2026',
    seasonTo: '15/06/2027',

    // Step 4: Safety & emergency
    sopDocumentUploaded: true,
    emergencyPlanReady: true,
    tieUpHospitalName: 'AIIMS Rishikesh Super Speciality Hospital',
    hospitalDistanceKm: '12 km',
    emergencyContact: '+91 98765 43210',
    ambulanceStandby: 'Yes - On-call tie-up with local EMS',

    // Step 5: Equipment & fitness
    equipmentInventoryCount: '64 harness sets, 28 dynamic ropes, 120 helmets',
    safetyStandard: 'UIAA / CE / EN 12277 Standard Compliant',
    lastInspectionDate: '10/08/2026',
    fitnessCertUploaded: true,

    // Step 6: Guides & instructors
    leadInstructorName: 'Capt. Virendra Rawat (Retd.)',
    certifyingBody: 'Nehru Institute of Mountaineering (NIM) & NIWS',
    instructorLicenseNo: 'NIM-ADV-INST-2018-884',
    wildernessFirstAidCertified: true,
    instructorRatio: '1 Instructor per 6 Participants',

    // Step 7: Insurance & compliance
    insurancePolicyNo: 'NIA-ADV-LIAB-2026-992144',
    insurerName: 'The New India Assurance Co. Ltd.',
    liabilityCoverAmount: '₹ 50,00,000 (Fifty Lakhs)',
    passengerCoverPerPerson: '₹ 5,00,000 per participant',
    insuranceValidTill: '30/09/2027',

    // Step 8: Fee & payment
    paymentMethod: 'upi', // 'upi' | 'card' | 'netbanking'
    upiId: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    selectedBank: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const scrollRef = useRef(null);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSaveDraft = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    setLastSavedTime(hours + ':' + minutes + ' ' + ampm);
    setIsDraftSaved(true);
    setShowDraftToast(true);
    setTimeout(() => setShowDraftToast(false), 2500);
  };

  const validateCurrentStep = () => {
    const errors = {};
    if (step === 1) {
      if (!formData.registrationType) {
        errors.registrationType = 'Please select type of registration';
      }
      if (!formData.activityDomain) {
        errors.activityDomain = 'Please select adventure activity domain';
      }
      if (!formData.hasPrerequisiteRegistrations) {
        errors.hasPrerequisiteRegistrations =
          'You must confirm that you have prerequisite registrations or will obtain them';
      }
    } else if (step === 2) {
      if (!formData.applicantType) errors.applicantType = 'Please select type of applicant';
      if (!formData.applicantOrOrgName.trim()) errors.applicantOrOrgName = 'Please enter name of applicant or organisation';
      if (!formData.ownerOrDirectorName.trim()) errors.ownerOrDirectorName = 'Please enter name of owner, director or partner';
      if (!formData.designation.trim()) errors.designation = 'Please enter designation';
      if (!formData.aadhaarNumber.trim() || formData.aadhaarNumber.replace(/\s/g, '').length < 12) {
        errors.aadhaarNumber = 'Please enter valid 12-digit Aadhaar number';
      }
      if (!formData.mobileNumber.trim() || formData.mobileNumber.length < 10) {
        errors.mobileNumber = 'Please enter valid 10-digit mobile number';
      }
      if (!formData.emailAddress.trim() || !formData.emailAddress.includes('@')) {
        errors.emailAddress = 'Please enter valid email address';
      }
      if (!formData.registeredAddress.trim()) {
        errors.registeredAddress = 'Please enter registered address';
      }
    } else if (step === 3) {
      if (!formData.registrationCategory) errors.registrationCategory = 'Please select category of registration';
      if (!formData.sectorTourismRegNumber.trim()) errors.sectorTourismRegNumber = 'Please enter sector tourism registration number';
      if (!formData.registrationIssueDate.trim()) errors.registrationIssueDate = 'Please enter date that registration was issued';
      if (!formData.registrationPeriod) errors.registrationPeriod = 'Please select registration period';
    } else if (step === 4) {
      if (!formData.siteState) errors.siteState = 'Please select state or union territory';
      if (!formData.siteDistrict) errors.siteDistrict = 'Please select district';
      if (!formData.siteSubDistrict) errors.siteSubDistrict = 'Please select sub-district, taluka or tehsil';
      if (!formData.siteVillageOrTown) errors.siteVillageOrTown = 'Please select village, town or ward';
      if (!formData.surveyPlotNumber.trim()) errors.surveyPlotNumber = 'Please enter survey, khasra or plot number';
      if (!formData.siteArea.trim()) errors.siteArea = 'Please enter area of the site';
      if (!formData.unitOfArea) errors.unitOfArea = 'Please select unit of area';
      if (!formData.landHoldingType) errors.landHoldingType = 'Please select how you hold this land';
      if (!formData.mapLink.trim()) errors.mapLink = 'Please provide a valid map link';
      if (!formData.siteFullAddress.trim()) errors.siteFullAddress = 'Please enter full address of the site';
      if (!formData.sitePinCode.trim() || formData.sitePinCode.length < 6) {
        errors.sitePinCode = 'Please enter valid 6-digit PIN code';
      }
    } else if (step === 5) {
      if (!formData.selectedActivities || formData.selectedActivities.length === 0) {
        errors.selectedActivities = 'Please select at least one activity offered at this site';
      }
      if (!formData.maxBatchParticipants.trim()) errors.maxBatchParticipants = 'Please enter maximum participants in one batch';
      if (!formData.maxBatchesPerDay.trim()) errors.maxBatchesPerDay = 'Please enter maximum batches in one day';
      if (!formData.operatingSeason) errors.operatingSeason = 'Please select operating season';
      if (!formData.dailyOperatingHours) errors.dailyOperatingHours = 'Please select daily operating hours';
      if (!formData.certifiedLeadsCount.trim()) errors.certifiedLeadsCount = 'Please enter number of certified activity leads';
      if (!formData.leadHighestQualification) errors.leadHighestQualification = 'Please select highest qualification held by lead';
      if (!formData.certifyingBody.trim()) errors.certifyingBody = 'Please enter certifying body';
      if (!formData.equipmentHoldType) errors.equipmentHoldType = 'Please select how equipment is held';
      if (!formData.lastEquipmentInspectionDate.trim()) errors.lastEquipmentInspectionDate = 'Please select date of the last equipment inspection';
      if (!formData.inspectingAgency.trim()) errors.inspectingAgency = 'Please enter inspecting authority or agency';
      if (!formData.liabilityPolicyNumber.trim()) errors.liabilityPolicyNumber = 'Please enter public liability policy number';
      if (!formData.policyValidUntilDate.trim()) errors.policyValidUntilDate = 'Please select policy validity date';
      if (!formData.nearestHospitalAndDistance.trim()) errors.nearestHospitalAndDistance = 'Please enter nearest hospital and distance from the site';
      if (!formData.emergencyContactNumber.trim()) errors.emergencyContactNumber = 'Please enter emergency contact number at the site';
      if (!formData.hasWrittenEmergencyPlan) errors.hasWrittenEmergencyPlan = 'Please confirm that a written emergency response plan exists';
    } else if (step === 6) {
      if (!formData.landRecordDoc) {
        errors.landRecordDoc = 'Please upload land record document';
      }
      if (!formData.siteLayoutDoc) {
        errors.siteLayoutDoc = 'Please upload site layout plan';
      }
    } else if (step === 7) {
      if (!formData.insurancePolicyNo.trim()) errors.insurancePolicyNo = 'Insurance policy number is required';
    } else if (step === 8) {
      if (formData.paymentMethod === 'upi' && !formData.upiId.trim()) {
        errors.upiId = 'Please enter a valid UPI ID';
      } else if (formData.paymentMethod === 'card' && (!formData.cardNumber.trim() || !formData.cardExpiry.trim())) {
        errors.card = 'Please enter card details';
      } else if (formData.paymentMethod === 'netbanking' && !formData.selectedBank) {
        errors.bank = 'Please select your bank';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleContinue = () => {
    if (!validateCurrentStep()) {
      return;
    }
    if (step === 8) {
      // Process simulated payment
      setIsProcessingPayment(true);
      setTimeout(() => {
        setIsProcessingPayment(false);
        setPaymentDone(true);
        setStep(9);
        handleSaveDraft();
      }, 1800);
      return;
    }

    if (step < 9) {
      setStep(step + 1);
      handleSaveDraft();
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ y: 0, animated: true });
      }
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ y: 0, animated: true });
      }
    }
  };

  const activeMeta = STEP_METADATA[step] || STEP_METADATA[1];

  return (
    <Ux4gThemeProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" backgroundColor="#4A2BC2" />

        {/* ─── TOP GOI BAR ─── */}
        <View style={styles.goiTopBar}>
          <View style={styles.goiLeft}>
            {/* Indian Flag SVG */}
            <Svg width={20} height={14} viewBox="0 0 60 40" style={styles.goiFlag}>
              <Rect width={60} height={13.33} fill="#FF9933" />
              <Rect y={13.33} width={60} height={13.33} fill="#FFFFFF" />
              <Rect y={26.66} width={60} height={13.33} fill="#138808" />
              <Circle cx={30} cy={20} r={4.5} fill="#000080" />
            </Svg>
            <Text style={styles.goiText}>Government of India</Text>
            {/* External Link Icon */}
            <Svg width={12} height={12} viewBox="0 0 24 24" fill="none" style={{ marginLeft: 3 }}>
              <Path
                d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                stroke="#FFFFFF"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <View style={styles.goiRight}>
            {/* Accessibility Icon */}
            <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
              <Circle cx={12} cy={4} r={2} fill="#FFFFFF" />
              <Path
                d="M4 8h16M12 8v13M8 21l4-7 4 7"
                stroke="#FFFFFF"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
        </View>

        {/* ─── APP HEADER ─── */}
        <View style={styles.appHeader}>
          <View style={styles.headerBrand}>
            <NationalEmblem width={36} height={36} />
            <View style={{ width: 8 }} />
            <UnionLogo />
          </View>

          {/* Hamburger Menu Button */}
          <TouchableOpacity style={styles.menuButton} activeOpacity={0.7}>
            <View style={styles.menuBar} />
            <View style={[styles.menuBar, { marginVertical: 3.5 }]} />
            <View style={styles.menuBar} />
          </TouchableOpacity>
        </View>

        {/* ─── SAVED STATUS PILL BANNER ─── */}
        <View style={styles.savedBannerRow}>
          <View style={styles.savedPill}>
            <Svg width={14} height={14} viewBox="0 0 24 24" fill="none" style={{ marginRight: 6 }}>
              <Circle cx={12} cy={12} r={10} stroke="#16A34A" strokeWidth={2} />
              <Path
                d="M8 12.5l2.5 2.5 5.5-5.5"
                stroke="#16A34A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <Text style={styles.savedText}>Saved {lastSavedTime}</Text>
          </View>
        </View>

        {/* ─── 9-SEGMENT STEPPER PROGRESS (CENTERED BETWEEN LAYOUT) ─── */}
        <Ux4gCompactStepper
          totalSteps={9}
          currentStep={step}
          layout="centeredBetween"
          stepLabel={activeMeta.title}
          description={activeMeta.subtitle}
          onPrevious={handlePrevious}
          onNext={handleContinue}
          cumulative={true}
          activeColor={UX4GColors.primary}
          inactiveColor={UX4GColors.neutral300}
        />

        <View style={styles.stepperDivider} />

        {/* ─── MAIN SCROLLABLE FORM BODY ─── */}
        <ScrollView
          ref={scrollRef}
          style={styles.mainScrollView}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 1: BEFORE YOU START (EXACT REPLICA OF USER REFERENCE IMAGE)          */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 1 && (
            <View style={styles.formContainer}>
              {/* SECTION 1: Prerequisite Registrations */}
              <Text style={styles.sectionHeading}>Prerequisite Registrations</Text>

              {/* Amber Callout Box */}
              <View style={styles.warningCallout}>
                <View style={styles.warningIconContainer}>
                  {/* Filled Amber Circle with white ! */}
                  <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
                    <Circle cx={12} cy={12} r={11} fill="#D97706" />
                    <Path d="M12 7v6" stroke="#FFFFFF" strokeWidth={2.5} strokeLinecap="round" />
                    <Circle cx={12} cy={16.5} r={1.25} fill="#FFFFFF" />
                  </Svg>
                </View>
                <View style={styles.warningTextContainer}>
                  <Text style={styles.warningParagraph}>
                    Four registrations must exist before this application can be approved: a portal account, an
                    applicant profile, a registered unit or establishment, and a sector tourism registration. You can
                    fill this form now and save it as a draft, but you cannot submit until all four are in place.
                  </Text>
                  <TouchableOpacity
                    onPress={() => setShowPrereqModal(true)}
                    activeOpacity={0.7}
                    style={styles.warningLinkTouch}
                  >
                    <Text style={styles.warningLinkText}>How to obtain each one</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* SECTION 2: Service Required */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Service Required</Text>

              {/* Field 1: Type of registration */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Type of registration<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <View style={styles.radioOptionGroup}>
                  <Ux4gRadioButton
                    label="New registration"
                    value="new"
                    groupValue={formData.registrationType}
                    onChanged={(val) => updateField('registrationType', val)}
                    size="medium"
                  />
                  <View style={{ height: 10 }} />
                  <Ux4gRadioButton
                    label="Renewal of an existing registration"
                    value="renewal"
                    groupValue={formData.registrationType}
                    onChanged={(val) => updateField('registrationType', val)}
                    size="medium"
                  />
                </View>
                {formErrors.registrationType && (
                  <Text style={styles.errorHelperText}>{formErrors.registrationType}</Text>
                )}
              </View>

              {/* Field 2: Adventure activity domain */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Adventure activity domain<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <View style={styles.radioOptionGroup}>
                  <Ux4gRadioButton
                    label="On land"
                    value="land"
                    groupValue={formData.activityDomain}
                    onChanged={(val) => updateField('activityDomain', val)}
                    size="medium"
                  />
                  <View style={{ height: 10 }} />
                  <Ux4gRadioButton
                    label="On or in water"
                    value="water"
                    groupValue={formData.activityDomain}
                    onChanged={(val) => updateField('activityDomain', val)}
                    size="medium"
                  />
                  <View style={{ height: 10 }} />
                  <Ux4gRadioButton
                    label="In the air"
                    value="air"
                    groupValue={formData.activityDomain}
                    onChanged={(val) => updateField('activityDomain', val)}
                    size="medium"
                  />
                </View>
                {formErrors.activityDomain && (
                  <Text style={styles.errorHelperText}>{formErrors.activityDomain}</Text>
                )}
              </View>

              {/* SECTION 3: Declaration */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Declaration</Text>

              <View style={styles.declarationBlock}>
                <Ux4gCheckbox
                  label="I have the registrations listed above, or I will obtain them before I submit"
                  isRequired={true}
                  value={formData.hasPrerequisiteRegistrations}
                  onChanged={(v) => updateField('hasPrerequisiteRegistrations', !!v)}
                  hasError={!!formErrors.hasPrerequisiteRegistrations}
                />
                {formErrors.hasPrerequisiteRegistrations && (
                  <Text style={[styles.errorHelperText, { marginTop: 6 }]}>
                    {formErrors.hasPrerequisiteRegistrations}
                  </Text>
                )}
              </View>
            </View>
          )}

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 2: APPLICANT & ENTITY (EXACT REPLICA OF USER REFERENCE IMAGE)        */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 2 && (
            <View style={styles.formContainer}>
              {/* SECTION 1: Applicant Details */}
              <Text style={styles.sectionHeading}>Applicant Details</Text>

              {/* Field 1: Type of applicant */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Type of applicant<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TouchableOpacity
                  style={[
                    styles.dropdownTrigger,
                    formErrors.applicantType && styles.inputErrorBorder,
                  ]}
                  activeOpacity={0.8}
                  onPress={() => setIsApplicantTypeDropdownOpen(!isApplicantTypeDropdownOpen)}
                >
                  <Text
                    style={
                      formData.applicantType
                        ? styles.dropdownValueText
                        : styles.dropdownPlaceholderText
                    }
                  >
                    {APPLICANT_TYPE_OPTIONS.find((o) => o.id === formData.applicantType)?.label ||
                      'Select the legal form of the applicant'}
                  </Text>
                  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
                    <Path
                      d={isApplicantTypeDropdownOpen ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'}
                      stroke="#4B5563"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>

                {isApplicantTypeDropdownOpen && (
                  <View style={styles.dropdownMenu}>
                    {APPLICANT_TYPE_OPTIONS.map((opt, oIdx) => (
                      <TouchableOpacity
                        key={opt.id}
                        style={[
                          styles.dropdownMenuItem,
                          formData.applicantType === opt.id && styles.dropdownMenuItemActive,
                          oIdx === APPLICANT_TYPE_OPTIONS.length - 1 && { borderBottomWidth: 0 },
                        ]}
                        activeOpacity={0.7}
                        onPress={() => {
                          updateField('applicantType', opt.id);
                          setIsApplicantTypeDropdownOpen(false);
                        }}
                      >
                        <Text
                          style={[
                            styles.dropdownMenuItemText,
                            formData.applicantType === opt.id && styles.dropdownMenuItemTextActive,
                          ]}
                        >
                          {opt.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}

                <View style={styles.helperInfoRow}>
                  <Svg width={13} height={13} viewBox="0 0 24 24" fill="none" style={styles.infoIcon}>
                    <Circle cx={12} cy={12} r={10} stroke="#6B7280" strokeWidth={1.8} />
                    <Path d="M12 16v-4M12 8h.01" stroke="#6B7280" strokeWidth={2} strokeLinecap="round" />
                  </Svg>
                  <Text style={styles.helperInfoText}>
                    If you operate on you own, choose Individual organiser - not other.
                  </Text>
                </View>
                {formErrors.applicantType && (
                  <Text style={styles.errorHelperText}>{formErrors.applicantType}</Text>
                )}
              </View>

              {/* Field 2: Name of applicant or organisation */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Name of applicant or organisation<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[styles.textInput, formErrors.applicantOrOrgName && styles.inputErrorBorder]}
                  value={formData.applicantOrOrgName}
                  onChangeText={(val) => {
                    updateField('applicantOrOrgName', val);
                    updateField('enterpriseName', val);
                  }}
                  placeholder="As it appears on your registration certificate"
                  placeholderTextColor="#9CA3AF"
                />
                {formErrors.applicantOrOrgName && (
                  <Text style={styles.errorHelperText}>{formErrors.applicantOrOrgName}</Text>
                )}
              </View>

              {/* Field 3: Name of owner, director or partner */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Name of owner, director or partner<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[styles.textInput, formErrors.ownerOrDirectorName && styles.inputErrorBorder]}
                  value={formData.ownerOrDirectorName}
                  onChangeText={(val) => updateField('ownerOrDirectorName', val)}
                  placeholder="Full name"
                  placeholderTextColor="#9CA3AF"
                />
                {formErrors.ownerOrDirectorName && (
                  <Text style={styles.errorHelperText}>{formErrors.ownerOrDirectorName}</Text>
                )}
              </View>

              {/* Field 4: Designation */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Designation<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[styles.textInput, formErrors.designation && styles.inputErrorBorder]}
                  value={formData.designation}
                  onChangeText={(val) => updateField('designation', val)}
                  placeholder="Proprietor, Director, Managing Partner"
                  placeholderTextColor="#9CA3AF"
                />
                {formErrors.designation && (
                  <Text style={styles.errorHelperText}>{formErrors.designation}</Text>
                )}
              </View>

              {/* SECTION 2: Identity Details */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Identity Details</Text>

              {/* Field 5: Aadhaar number of the applicant */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Aadhaar number of the applicant<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <View style={[styles.inputWithIconRow, formErrors.aadhaarNumber && styles.inputErrorBorder]}>
                  <TextInput
                    style={styles.inputInnerFlex}
                    value={formData.aadhaarNumber}
                    onChangeText={(val) => {
                      const clean = val.replace(/[^0-9]/g, '').slice(0, 12);
                      const chunks = clean.match(/.{1,4}/g);
                      updateField('aadhaarNumber', chunks ? chunks.join(' ') : clean);
                    }}
                    placeholder="xxxx xxxx xxxx"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="number-pad"
                    secureTextEntry={formData.isAadhaarMasked}
                    maxLength={14}
                  />
                  <TouchableOpacity
                    onPress={() => updateField('isAadhaarMasked', !formData.isAadhaarMasked)}
                    style={styles.iconInsideInput}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    {formData.isAadhaarMasked ? (
                      <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                        <Path
                          d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"
                          stroke="#374151"
                          strokeWidth={1.75}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </Svg>
                    ) : (
                      <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                        <Path
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                          stroke="#374151"
                          strokeWidth={1.75}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <Circle cx={12} cy={12} r={3} stroke="#374151" strokeWidth={1.75} />
                      </Svg>
                    )}
                  </TouchableOpacity>
                </View>

                <View style={styles.helperInfoRow}>
                  <Svg width={13} height={13} viewBox="0 0 24 24" fill="none" style={styles.infoIcon}>
                    <Circle cx={12} cy={12} r={10} stroke="#6B7280" strokeWidth={1.8} />
                    <Path d="M12 16v-4M12 8h.01" stroke="#6B7280" strokeWidth={2} strokeLinecap="round" />
                  </Svg>
                  <Text style={styles.helperInfoText}>
                    Masked as you type. Verified once against UIDAI and never shown again in full.
                  </Text>
                </View>
                {formErrors.aadhaarNumber && (
                  <Text style={styles.errorHelperText}>{formErrors.aadhaarNumber}</Text>
                )}
              </View>

              {/* Field 6: PAN of the applicant entity */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>PAN of the applicant entity</Text>
                <TextInput
                  style={[styles.textInput, formErrors.entityPan && styles.inputErrorBorder]}
                  value={formData.entityPan}
                  onChangeText={(val) => {
                    updateField('entityPan', val.toUpperCase());
                    updateField('panNumber', val.toUpperCase());
                  }}
                  placeholder="Ten characters, as printed on the card"
                  placeholderTextColor="#9CA3AF"
                  maxLength={10}
                  autoCapitalize="characters"
                />
                {formErrors.entityPan && (
                  <Text style={styles.errorHelperText}>{formErrors.entityPan}</Text>
                )}
              </View>

              {/* SECTION 3: Contact Details */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Contact Details</Text>

              {/* Field 7: Mobile number */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Mobile number<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <View style={[styles.mobileUnifiedBox, formErrors.mobileNumber && styles.inputErrorBorder]}>
                  <Text style={styles.countryCodePrefix}>+91</Text>
                  <TextInput
                    style={styles.mobileUnifiedInput}
                    value={formData.mobileNumber}
                    onChangeText={(val) => updateField('mobileNumber', val.replace(/[^0-9]/g, ''))}
                    placeholder="10 digits"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="phone-pad"
                    maxLength={10}
                  />
                </View>
                {formErrors.mobileNumber && (
                  <Text style={styles.errorHelperText}>{formErrors.mobileNumber}</Text>
                )}
              </View>

              {/* Field 8: Email address */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Email address<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[styles.textInput, formErrors.emailAddress && styles.inputErrorBorder]}
                  value={formData.emailAddress}
                  onChangeText={(val) => updateField('emailAddress', val)}
                  placeholder="name@example.com"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                {formErrors.emailAddress && (
                  <Text style={styles.errorHelperText}>{formErrors.emailAddress}</Text>
                )}
              </View>

              {/* SECTION 4: Address Details */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Address Details</Text>

              {/* Field 9: Registered address */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Registered address<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <View style={[styles.textAreaContainer, formErrors.registeredAddress && styles.inputErrorBorder]}>
                  <TextInput
                    style={styles.textAreaInput}
                    value={formData.registeredAddress}
                    onChangeText={(val) => {
                      if (val.length <= 200) {
                        updateField('registeredAddress', val);
                        if (formData.sameAsRegisteredAddress) {
                          updateField('correspondenceAddress', val);
                        }
                      }
                    }}
                    placeholder="Placeholder"
                    placeholderTextColor="#9CA3AF"
                    multiline={true}
                    maxLength={200}
                  />
                  <View style={styles.textAreaFooter}>
                    <Text style={styles.charCounterText}>
                      {formData.registeredAddress.length}/200
                    </Text>
                    <Svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{ marginLeft: 4 }}>
                      <Path d="M9 1L1 9M9 5L5 9M9 9L9 9" stroke="#9CA3AF" strokeWidth={1.5} strokeLinecap="round" />
                    </Svg>
                  </View>
                </View>
                <View style={styles.helperInfoRow}>
                  <Svg width={13} height={13} viewBox="0 0 24 24" fill="none" style={styles.infoIcon}>
                    <Circle cx={12} cy={12} r={10} stroke="#6B7280" strokeWidth={1.8} />
                    <Path d="M12 16v-4M12 8h.01" stroke="#6B7280" strokeWidth={2} strokeLinecap="round" />
                  </Svg>
                  <Text style={styles.helperInfoText}>Description</Text>
                </View>
                {formErrors.registeredAddress && (
                  <Text style={styles.errorHelperText}>{formErrors.registeredAddress}</Text>
                )}
              </View>

              {/* Checkbox: My correspondence address is the same as my registered address */}
              <View style={[styles.declarationBlock, { marginTop: 12, marginBottom: 16 }]}>
                <Ux4gCheckbox
                  label="My correspondence address is the same as my registered address"
                  isRequired={true}
                  value={formData.sameAsRegisteredAddress}
                  onChanged={(v) => {
                    const checked = !!v;
                    updateField('sameAsRegisteredAddress', checked);
                    if (checked) {
                      updateField('correspondenceAddress', formData.registeredAddress);
                    }
                  }}
                />
              </View>

              {/* Field 10: Correspondence address */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>Correspondence address</Text>
                <View style={[styles.textAreaContainer, formErrors.correspondenceAddress && styles.inputErrorBorder]}>
                  <TextInput
                    style={styles.textAreaInput}
                    value={formData.correspondenceAddress}
                    onChangeText={(val) => {
                      if (val.length <= 200) {
                        updateField('correspondenceAddress', val);
                      }
                    }}
                    placeholder="Placeholder"
                    placeholderTextColor="#9CA3AF"
                    multiline={true}
                    maxLength={200}
                    editable={!formData.sameAsRegisteredAddress}
                  />
                  <View style={styles.textAreaFooter}>
                    <Text style={styles.charCounterText}>
                      {formData.correspondenceAddress.length}/200
                    </Text>
                    <Svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{ marginLeft: 4 }}>
                      <Path d="M9 1L1 9M9 5L5 9M9 9L9 9" stroke="#9CA3AF" strokeWidth={1.5} strokeLinecap="round" />
                    </Svg>
                  </View>
                </View>
                <View style={styles.helperInfoRow}>
                  <Svg width={13} height={13} viewBox="0 0 24 24" fill="none" style={styles.infoIcon}>
                    <Circle cx={12} cy={12} r={10} stroke="#6B7280" strokeWidth={1.8} />
                    <Path d="M12 16v-4M12 8h.01" stroke="#6B7280" strokeWidth={2} strokeLinecap="round" />
                  </Svg>
                  <Text style={styles.helperInfoText}>Description</Text>
                </View>
              </View>
            </View>
          )}

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 3: REGISTRATION CATEGORY (EXACT REPLICA OF USER REFERENCE IMAGE)      */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 3 && (
            <View style={styles.formContainer}>
              {/* SECTION 1: Category of Registration* */}
              <Text style={styles.sectionHeading}>
                Category of Registration<Text style={styles.requiredAsterisk}>*</Text>
              </Text>

              <View style={[styles.radioOptionGroup, { marginTop: 12 }]}>
                {REGISTRATION_CATEGORY_OPTIONS.map((cat) => (
                  <View key={cat.id} style={{ marginBottom: 12 }}>
                    <Ux4gRadioButton
                      label={cat.label}
                      value={cat.id}
                      groupValue={formData.registrationCategory}
                      onChanged={(val) => updateField('registrationCategory', val)}
                      size="medium"
                    />
                  </View>
                ))}
              </View>
              {formErrors.registrationCategory && (
                <Text style={styles.errorHelperText}>{formErrors.registrationCategory}</Text>
              )}

              {/* SECTION 2: Requirements for This Category */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>
                Requirements for This Category
              </Text>
              <View style={styles.requirementCard}>
                <View style={styles.requirementIconCol}>
                  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                    <Circle cx={12} cy={12} r={10} fill="#06B6D4" />
                    <Path d="M12 16v-4M12 8h.01" stroke="#FFFFFF" strokeWidth={2.2} strokeLinecap="round" />
                  </Svg>
                </View>
                <Text style={styles.requirementCardText}>
                  Commercial adventure tour operator, on land. This combination needs a certified activity lead, equipment certification and public liability cover. It does not need a water-safety plan or a DGCA clearance.
                </Text>
              </View>

              {/* SECTION 3: Existing Registration Details */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>
                Existing Registration Details
              </Text>

              {/* Field 1: Sector tourism registration number* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Sector tourism registration number<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[
                    styles.textInput,
                    formErrors.sectorTourismRegNumber && styles.inputErrorBorder,
                  ]}
                  value={formData.sectorTourismRegNumber}
                  onChangeText={(val) => updateField('sectorTourismRegNumber', val)}
                  placeholder="Number issued by the state tourism depart..."
                  placeholderTextColor="#9CA3AF"
                />
                {formErrors.sectorTourismRegNumber && (
                  <Text style={styles.errorHelperText}>{formErrors.sectorTourismRegNumber}</Text>
                )}
              </View>

              {/* Field 2: Date that registration was issued* (Ux4gDatePicker) */}
              <View style={styles.fieldBlock}>
                <Ux4gDatePicker
                  label="Date that registration was issued"
                  required
                  placeholder="DD / MM / YYYY"
                  initialDate={parseDate(formData.registrationIssueDate)}
                  onDateSelected={(date) => {
                    updateField('registrationIssueDate', formatDate(date));
                  }}
                  status={formErrors.registrationIssueDate ? 'error' : 'defaultStatus'}
                  description={formErrors.registrationIssueDate}
                />

                {/* External link: I do not have this number — how do I get one? ↗ */}
                <TouchableOpacity
                  style={styles.externalLinkRow}
                  activeOpacity={0.7}
                  onPress={() => setShowSectorRegModal(true)}
                >
                  <Text style={styles.externalLinkText}>
                    I do not have this number — how do I get one?
                  </Text>
                  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none" style={{ marginLeft: 6 }}>
                    <Path
                      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                      stroke="#4A2BC2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>
              </View>

              {/* SECTION 4: Period of Registration */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>
                Period of Registration
              </Text>

              {/* Field 3: Registration period* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Registration period<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TouchableOpacity
                  style={[
                    styles.dropdownTrigger,
                    formErrors.registrationPeriod && styles.inputErrorBorder,
                  ]}
                  activeOpacity={0.8}
                  onPress={() => setIsPeriodDropdownOpen(!isPeriodDropdownOpen)}
                >
                  <Text
                    style={
                      formData.registrationPeriod
                        ? styles.dropdownValueText
                        : styles.dropdownPlaceholderText
                    }
                  >
                    {REGISTRATION_PERIOD_OPTIONS.find((o) => o.id === formData.registrationPeriod)?.label ||
                      'Select how long the registration should...'}
                  </Text>
                  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
                    <Path
                      d={isPeriodDropdownOpen ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'}
                      stroke="#4B5563"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>

                {isPeriodDropdownOpen && (
                  <View style={styles.dropdownMenu}>
                    {REGISTRATION_PERIOD_OPTIONS.map((opt, oIdx) => (
                      <TouchableOpacity
                        key={opt.id}
                        style={[
                          styles.dropdownMenuItem,
                          formData.registrationPeriod === opt.id && styles.dropdownMenuItemActive,
                          oIdx === REGISTRATION_PERIOD_OPTIONS.length - 1 && { borderBottomWidth: 0 },
                        ]}
                        activeOpacity={0.7}
                        onPress={() => {
                          updateField('registrationPeriod', opt.id);
                          setIsPeriodDropdownOpen(false);
                        }}
                      >
                        <Text
                          style={[
                            styles.dropdownMenuItemText,
                            formData.registrationPeriod === opt.id && styles.dropdownMenuItemTextActive,
                          ]}
                        >
                          {opt.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
                {formErrors.registrationPeriod && (
                  <Text style={styles.errorHelperText}>{formErrors.registrationPeriod}</Text>
                )}
              </View>
            </View>
          )}

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 4: LOCATION & SITE (EXACT REPLICA OF USER REFERENCE IMAGE)           */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 4 && (
            <View style={styles.formContainer}>
              {/* SECTION 1: Location Details */}
              <Text style={styles.sectionHeading}>Location Details</Text>

              {/* Field 1: State or union territory* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  State or union territory<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TouchableOpacity
                  style={[
                    styles.dropdownTrigger,
                    formErrors.siteState && styles.inputErrorBorder,
                  ]}
                  activeOpacity={0.8}
                  onPress={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
                >
                  <Text
                    style={
                      formData.siteState
                        ? styles.dropdownValueText
                        : styles.dropdownPlaceholderText
                    }
                  >
                    {STATE_UT_OPTIONS.find((o) => o.id === formData.siteState)?.label ||
                      'Type to search 36 states and union terri...'}
                  </Text>
                  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
                    <Path
                      d={isStateDropdownOpen ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'}
                      stroke="#4B5563"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>

                {isStateDropdownOpen && (
                  <View style={styles.dropdownMenu}>
                    {STATE_UT_OPTIONS.map((opt, oIdx) => (
                      <TouchableOpacity
                        key={opt.id}
                        style={[
                          styles.dropdownMenuItem,
                          formData.siteState === opt.id && styles.dropdownMenuItemActive,
                          oIdx === STATE_UT_OPTIONS.length - 1 && { borderBottomWidth: 0 },
                        ]}
                        activeOpacity={0.7}
                        onPress={() => {
                          updateField('siteState', opt.id);
                          setIsStateDropdownOpen(false);
                        }}
                      >
                        <Text
                          style={[
                            styles.dropdownMenuItemText,
                            formData.siteState === opt.id && styles.dropdownMenuItemTextActive,
                          ]}
                        >
                          {opt.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
                {formErrors.siteState && (
                  <Text style={styles.errorHelperText}>{formErrors.siteState}</Text>
                )}
              </View>

              {/* Field 2: Revenue division or region */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>Revenue division or region</Text>
                <TouchableOpacity
                  style={styles.dropdownTrigger}
                  activeOpacity={0.8}
                  onPress={() => setIsDivisionDropdownOpen(!isDivisionDropdownOpen)}
                >
                  <Text
                    style={
                      formData.siteDivision
                        ? styles.dropdownValueText
                        : styles.dropdownPlaceholderText
                    }
                  >
                    {REVENUE_DIVISION_OPTIONS.find((o) => o.id === formData.siteDivision)?.label ||
                      'Select a division'}
                  </Text>
                  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
                    <Path
                      d={isDivisionDropdownOpen ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'}
                      stroke="#4B5563"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>

                {isDivisionDropdownOpen && (
                  <View style={styles.dropdownMenu}>
                    {REVENUE_DIVISION_OPTIONS.map((opt, oIdx) => (
                      <TouchableOpacity
                        key={opt.id}
                        style={[
                          styles.dropdownMenuItem,
                          formData.siteDivision === opt.id && styles.dropdownMenuItemActive,
                          oIdx === REVENUE_DIVISION_OPTIONS.length - 1 && { borderBottomWidth: 0 },
                        ]}
                        activeOpacity={0.7}
                        onPress={() => {
                          updateField('siteDivision', opt.id);
                          setIsDivisionDropdownOpen(false);
                        }}
                      >
                        <Text
                          style={[
                            styles.dropdownMenuItemText,
                            formData.siteDivision === opt.id && styles.dropdownMenuItemTextActive,
                          ]}
                        >
                          {opt.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>

              {/* Field 3: District* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  District<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TouchableOpacity
                  style={[
                    styles.dropdownTrigger,
                    formErrors.siteDistrict && styles.inputErrorBorder,
                  ]}
                  activeOpacity={0.8}
                  onPress={() => setIsDistrictDropdownOpen(!isDistrictDropdownOpen)}
                >
                  <Text
                    style={
                      formData.siteDistrict
                        ? styles.dropdownValueText
                        : styles.dropdownPlaceholderText
                    }
                  >
                    {DISTRICT_OPTIONS.find((o) => o.id === formData.siteDistrict)?.label ||
                      'Type to search districts in the selected s...'}
                  </Text>
                  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
                    <Path
                      d={isDistrictDropdownOpen ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'}
                      stroke="#4B5563"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>

                {isDistrictDropdownOpen && (
                  <View style={styles.dropdownMenu}>
                    {DISTRICT_OPTIONS.map((opt, oIdx) => (
                      <TouchableOpacity
                        key={opt.id}
                        style={[
                          styles.dropdownMenuItem,
                          formData.siteDistrict === opt.id && styles.dropdownMenuItemActive,
                          oIdx === DISTRICT_OPTIONS.length - 1 && { borderBottomWidth: 0 },
                        ]}
                        activeOpacity={0.7}
                        onPress={() => {
                          updateField('siteDistrict', opt.id);
                          setIsDistrictDropdownOpen(false);
                        }}
                      >
                        <Text
                          style={[
                            styles.dropdownMenuItemText,
                            formData.siteDistrict === opt.id && styles.dropdownMenuItemTextActive,
                          ]}
                        >
                          {opt.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
                {formErrors.siteDistrict && (
                  <Text style={styles.errorHelperText}>{formErrors.siteDistrict}</Text>
                )}
              </View>

              {/* Field 4: Sub-district, taluka or tehsil* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Sub-district, taluka or tehsil<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TouchableOpacity
                  style={[
                    styles.dropdownTrigger,
                    formErrors.siteSubDistrict && styles.inputErrorBorder,
                  ]}
                  activeOpacity={0.8}
                  onPress={() => setIsSubDistrictDropdownOpen(!isSubDistrictDropdownOpen)}
                >
                  <Text
                    style={
                      formData.siteSubDistrict
                        ? styles.dropdownValueText
                        : styles.dropdownPlaceholderText
                    }
                  >
                    {SUB_DISTRICT_OPTIONS.find((o) => o.id === formData.siteSubDistrict)?.label ||
                      'Select a sub-district'}
                  </Text>
                  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
                    <Path
                      d={isSubDistrictDropdownOpen ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'}
                      stroke="#4B5563"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>

                {isSubDistrictDropdownOpen && (
                  <View style={styles.dropdownMenu}>
                    {SUB_DISTRICT_OPTIONS.map((opt, oIdx) => (
                      <TouchableOpacity
                        key={opt.id}
                        style={[
                          styles.dropdownMenuItem,
                          formData.siteSubDistrict === opt.id && styles.dropdownMenuItemActive,
                          oIdx === SUB_DISTRICT_OPTIONS.length - 1 && { borderBottomWidth: 0 },
                        ]}
                        activeOpacity={0.7}
                        onPress={() => {
                          updateField('siteSubDistrict', opt.id);
                          setIsSubDistrictDropdownOpen(false);
                        }}
                      >
                        <Text
                          style={[
                            styles.dropdownMenuItemText,
                            formData.siteSubDistrict === opt.id && styles.dropdownMenuItemTextActive,
                          ]}
                        >
                          {opt.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
                {formErrors.siteSubDistrict && (
                  <Text style={styles.errorHelperText}>{formErrors.siteSubDistrict}</Text>
                )}
              </View>

              {/* Field 5: Village, town or ward* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Village, town or ward<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TouchableOpacity
                  style={[
                    styles.dropdownTrigger,
                    formErrors.siteVillageOrTown && styles.inputErrorBorder,
                  ]}
                  activeOpacity={0.8}
                  onPress={() => setIsVillageDropdownOpen(!isVillageDropdownOpen)}
                >
                  <Text
                    style={
                      formData.siteVillageOrTown
                        ? styles.dropdownValueText
                        : styles.dropdownPlaceholderText
                    }
                  >
                    {VILLAGE_TOWN_OPTIONS.find((o) => o.id === formData.siteVillageOrTown)?.label ||
                      'Select a village or town'}
                  </Text>
                  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
                    <Path
                      d={isVillageDropdownOpen ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'}
                      stroke="#4B5563"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>

                {isVillageDropdownOpen && (
                  <View style={styles.dropdownMenu}>
                    {VILLAGE_TOWN_OPTIONS.map((opt, oIdx) => (
                      <TouchableOpacity
                        key={opt.id}
                        style={[
                          styles.dropdownMenuItem,
                          formData.siteVillageOrTown === opt.id && styles.dropdownMenuItemActive,
                          oIdx === VILLAGE_TOWN_OPTIONS.length - 1 && { borderBottomWidth: 0 },
                        ]}
                        activeOpacity={0.7}
                        onPress={() => {
                          updateField('siteVillageOrTown', opt.id);
                          setIsVillageDropdownOpen(false);
                        }}
                      >
                        <Text
                          style={[
                            styles.dropdownMenuItemText,
                            formData.siteVillageOrTown === opt.id && styles.dropdownMenuItemTextActive,
                          ]}
                        >
                          {opt.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
                {formErrors.siteVillageOrTown && (
                  <Text style={styles.errorHelperText}>{formErrors.siteVillageOrTown}</Text>
                )}
              </View>

              {/* SECTION 2: Land Details */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Land Details</Text>

              {/* Field 6: Survey, khasra or plot number* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Survey, khasra or plot number<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[
                    styles.textInput,
                    formErrors.surveyPlotNumber && styles.inputErrorBorder,
                  ]}
                  value={formData.surveyPlotNumber}
                  onChangeText={(val) => updateField('surveyPlotNumber', val)}
                  placeholder="As recorded in the land record"
                  placeholderTextColor="#9CA3AF"
                />
                {formErrors.surveyPlotNumber && (
                  <Text style={styles.errorHelperText}>{formErrors.surveyPlotNumber}</Text>
                )}
              </View>

              {/* Field 7: Area of the site* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Area of the site<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[
                    styles.textInput,
                    formErrors.siteArea && styles.inputErrorBorder,
                  ]}
                  value={formData.siteArea}
                  onChangeText={(val) => updateField('siteArea', val)}
                  placeholder="Numeric area"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                />
                {formErrors.siteArea && (
                  <Text style={styles.errorHelperText}>{formErrors.siteArea}</Text>
                )}
              </View>

              {/* Field 8: Unit of area* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Unit of area<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TouchableOpacity
                  style={[
                    styles.dropdownTrigger,
                    formErrors.unitOfArea && styles.inputErrorBorder,
                  ]}
                  activeOpacity={0.8}
                  onPress={() => setIsUnitAreaDropdownOpen(!isUnitAreaDropdownOpen)}
                >
                  <Text
                    style={
                      formData.unitOfArea
                        ? styles.dropdownValueText
                        : styles.dropdownPlaceholderText
                    }
                  >
                    {UNIT_OF_AREA_OPTIONS.find((o) => o.id === formData.unitOfArea)?.label ||
                      'Hectare, acre or square metre'}
                  </Text>
                  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
                    <Path
                      d={isUnitAreaDropdownOpen ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'}
                      stroke="#4B5563"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>

                {isUnitAreaDropdownOpen && (
                  <View style={styles.dropdownMenu}>
                    {UNIT_OF_AREA_OPTIONS.map((opt, oIdx) => (
                      <TouchableOpacity
                        key={opt.id}
                        style={[
                          styles.dropdownMenuItem,
                          formData.unitOfArea === opt.id && styles.dropdownMenuItemActive,
                          oIdx === UNIT_OF_AREA_OPTIONS.length - 1 && { borderBottomWidth: 0 },
                        ]}
                        activeOpacity={0.7}
                        onPress={() => {
                          updateField('unitOfArea', opt.id);
                          setIsUnitAreaDropdownOpen(false);
                        }}
                      >
                        <Text
                          style={[
                            styles.dropdownMenuItemText,
                            formData.unitOfArea === opt.id && styles.dropdownMenuItemTextActive,
                          ]}
                        >
                          {opt.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
                {formErrors.unitOfArea && (
                  <Text style={styles.errorHelperText}>{formErrors.unitOfArea}</Text>
                )}
              </View>

              {/* Field 9: How you hold this land* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  How you hold this land<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TouchableOpacity
                  style={[
                    styles.dropdownTrigger,
                    formErrors.landHoldingType && styles.inputErrorBorder,
                  ]}
                  activeOpacity={0.8}
                  onPress={() => setIsLandHoldingDropdownOpen(!isLandHoldingDropdownOpen)}
                >
                  <Text
                    style={
                      formData.landHoldingType
                        ? styles.dropdownValueText
                        : styles.dropdownPlaceholderText
                    }
                  >
                    {LAND_HOLDING_OPTIONS.find((o) => o.id === formData.landHoldingType)?.label ||
                      'Owned, leased, government or forest la...'}
                  </Text>
                  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
                    <Path
                      d={isLandHoldingDropdownOpen ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'}
                      stroke="#4B5563"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>

                {isLandHoldingDropdownOpen && (
                  <View style={styles.dropdownMenu}>
                    {LAND_HOLDING_OPTIONS.map((opt, oIdx) => (
                      <TouchableOpacity
                        key={opt.id}
                        style={[
                          styles.dropdownMenuItem,
                          formData.landHoldingType === opt.id && styles.dropdownMenuItemActive,
                          oIdx === LAND_HOLDING_OPTIONS.length - 1 && { borderBottomWidth: 0 },
                        ]}
                        activeOpacity={0.7}
                        onPress={() => {
                          updateField('landHoldingType', opt.id);
                          setIsLandHoldingDropdownOpen(false);
                        }}
                      >
                        <Text
                          style={[
                            styles.dropdownMenuItemText,
                            formData.landHoldingType === opt.id && styles.dropdownMenuItemTextActive,
                          ]}
                        >
                          {opt.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
                {formErrors.landHoldingType && (
                  <Text style={styles.errorHelperText}>{formErrors.landHoldingType}</Text>
                )}
              </View>

              {/* SECTION 3: Geo Location */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Geo Location</Text>

              {/* Field 10: Map link* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Map link<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[
                    styles.textInput,
                    formErrors.mapLink && styles.inputErrorBorder,
                  ]}
                  value={formData.mapLink}
                  onChangeText={(val) => updateField('mapLink', val)}
                  placeholder="Paste a Google Maps or Apple Maps link to t..."
                  placeholderTextColor="#9CA3AF"
                />
                {formErrors.mapLink && (
                  <Text style={styles.errorHelperText}>{formErrors.mapLink}</Text>
                )}

                {/* Target icon + Use my current location */}
                <TouchableOpacity
                  style={styles.locationActionRow}
                  activeOpacity={0.7}
                  onPress={() => {
                    updateField('latitude', '30.1378° N');
                    updateField('longitude', '78.3842° E');
                    if (!formData.mapLink) {
                      updateField('mapLink', 'https://maps.google.com/?q=30.1378,78.3842');
                    }
                  }}
                >
                  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                    <Circle cx={12} cy={12} r={8} stroke="#111827" strokeWidth={1.8} />
                    <Circle cx={12} cy={12} r={3} fill="#111827" />
                    <Path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="#111827" strokeWidth={1.8} strokeLinecap="round" />
                  </Svg>
                  <Text style={styles.locationActionText}>Use my current location</Text>
                </TouchableOpacity>
              </View>

              {/* Field 11: Latitude */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>Latitude</Text>
                <View style={styles.disabledFilledBox}>
                  <Text style={styles.disabledFilledText}>
                    {formData.latitude || 'Set when you place the pin'}
                  </Text>
                </View>
              </View>

              {/* Field 12: Longitude */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>Longitude</Text>
                <View style={styles.disabledFilledBox}>
                  <Text style={styles.disabledFilledText}>
                    {formData.longitude || 'Set when you place the pin'}
                  </Text>
                </View>
              </View>

              {/* SECTION 4: Address of the Site */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Address of the Site</Text>

              {/* Field 13: Full address of the site* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Full address of the site<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <View style={[styles.textAreaContainer, formErrors.siteFullAddress && styles.inputErrorBorder]}>
                  <TextInput
                    style={styles.textAreaInput}
                    value={formData.siteFullAddress}
                    onChangeText={(val) => {
                      if (val.length <= 200) {
                        updateField('siteFullAddress', val);
                      }
                    }}
                    placeholder="Placeholder"
                    placeholderTextColor="#9CA3AF"
                    multiline={true}
                    maxLength={200}
                  />
                  <View style={styles.textAreaFooter}>
                    <Text style={styles.charCounterText}>
                      {formData.siteFullAddress.length}/200
                    </Text>
                    <Svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{ marginLeft: 4 }}>
                      <Path d="M9 1L1 9M9 5L5 9M9 9L9 9" stroke="#9CA3AF" strokeWidth={1.5} strokeLinecap="round" />
                    </Svg>
                  </View>
                </View>
                <View style={styles.helperInfoRow}>
                  <Svg width={13} height={13} viewBox="0 0 24 24" fill="none" style={styles.infoIcon}>
                    <Circle cx={12} cy={12} r={10} stroke="#6B7280" strokeWidth={1.8} />
                    <Path d="M12 16v-4M12 8h.01" stroke="#6B7280" strokeWidth={2} strokeLinecap="round" />
                  </Svg>
                  <Text style={styles.helperInfoText}>Description</Text>
                </View>
                {formErrors.siteFullAddress && (
                  <Text style={styles.errorHelperText}>{formErrors.siteFullAddress}</Text>
                )}
              </View>

              {/* Field 14: PIN code* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  PIN code<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[styles.textInput, formErrors.sitePinCode && styles.inputErrorBorder]}
                  value={formData.sitePinCode}
                  onChangeText={(val) => updateField('sitePinCode', val.replace(/\D/g, '').slice(0, 6))}
                  placeholder="6-digit PIN code"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                  maxLength={6}
                />
                {formErrors.sitePinCode && (
                  <Text style={styles.errorHelperText}>{formErrors.sitePinCode}</Text>
                )}
              </View>
            </View>
          )}

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 5: ACTIVITY & SAFETY (EXACT REPLICA OF USER REFERENCE IMAGE)         */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 5 && (
            <View style={styles.formContainer}>
              {/* SECTION 1: Safety Requirements */}
              <Text style={styles.sectionHeading}>Safety Requirements</Text>

              {/* Cyan info callout */}
              <View style={styles.requirementCard}>
                <View style={styles.requirementIconCol}>
                  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                    <Circle cx={12} cy={12} r={10} fill="#06B6D4" />
                    <Path d="M12 16v-4M12 8h.01" stroke="#FFFFFF" strokeWidth={2.2} strokeLinecap="round" />
                  </Svg>
                </View>
                <Text style={styles.requirementCardText}>
                  Safety is what this registration is for: who leads each activity, how the equipment is certified, what cover you hold, and what happens if something goes wrong on site.
                </Text>
              </View>

              {/* SECTION 2: Activities Offered at This Site* */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>
                Activities Offered at This Site<Text style={styles.requiredAsterisk}>*</Text>
              </Text>

              <View style={[styles.radioOptionGroup, { marginTop: 12 }]}>
                {SITE_ACTIVITIES_OPTIONS.map((act) => {
                  const isChecked = (formData.selectedActivities || []).includes(act.id);
                  return (
                    <View key={act.id} style={{ marginBottom: 12 }}>
                      <Ux4gCheckbox
                        label={act.label}
                        value={isChecked}
                        onChanged={() => {
                          const list = formData.selectedActivities || [];
                          const next = list.includes(act.id)
                            ? list.filter((id) => id !== act.id)
                            : [...list, act.id];
                          updateField('selectedActivities', next);
                        }}
                      />
                    </View>
                  );
                })}
              </View>
              {formErrors.selectedActivities && (
                <Text style={styles.errorHelperText}>{formErrors.selectedActivities}</Text>
              )}

              {/* SECTION 3: Scale of Operation */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Scale of Operation</Text>

              {/* Field 1: Maximum participants in one batch* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Maximum participants in one batch<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[styles.textInput, formErrors.maxBatchParticipants && styles.inputErrorBorder]}
                  value={formData.maxBatchParticipants}
                  onChangeText={(val) => updateField('maxBatchParticipants', val.replace(/\D/g, ''))}
                  placeholder="Number of people"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                />
                {formErrors.maxBatchParticipants && (
                  <Text style={styles.errorHelperText}>{formErrors.maxBatchParticipants}</Text>
                )}
              </View>

              {/* Field 2: Maximum batches in one day* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Maximum batches in one day<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[styles.textInput, formErrors.maxBatchesPerDay && styles.inputErrorBorder]}
                  value={formData.maxBatchesPerDay}
                  onChangeText={(val) => updateField('maxBatchesPerDay', val.replace(/\D/g, ''))}
                  placeholder="Number of batches"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                />
                {formErrors.maxBatchesPerDay && (
                  <Text style={styles.errorHelperText}>{formErrors.maxBatchesPerDay}</Text>
                )}
              </View>

              {/* Field 3: Operating season* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Operating season<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TouchableOpacity
                  style={[styles.dropdownTrigger, formErrors.operatingSeason && styles.inputErrorBorder]}
                  activeOpacity={0.8}
                  onPress={() => setIsSeasonDropdownOpen(!isSeasonDropdownOpen)}
                >
                  <Text
                    style={
                      formData.operatingSeason
                        ? styles.dropdownValueText
                        : styles.dropdownPlaceholderText
                    }
                  >
                    {OPERATING_SEASON_OPTIONS.find((o) => o.id === formData.operatingSeason)?.label ||
                      'All year, or specified months'}
                  </Text>
                  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
                    <Path
                      d={isSeasonDropdownOpen ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'}
                      stroke="#4B5563"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>

                {isSeasonDropdownOpen && (
                  <View style={styles.dropdownMenu}>
                    {OPERATING_SEASON_OPTIONS.map((opt, oIdx) => (
                      <TouchableOpacity
                        key={opt.id}
                        style={[
                          styles.dropdownMenuItem,
                          formData.operatingSeason === opt.id && styles.dropdownMenuItemActive,
                          oIdx === OPERATING_SEASON_OPTIONS.length - 1 && { borderBottomWidth: 0 },
                        ]}
                        activeOpacity={0.7}
                        onPress={() => {
                          updateField('operatingSeason', opt.id);
                          setIsSeasonDropdownOpen(false);
                        }}
                      >
                        <Text
                          style={[
                            styles.dropdownMenuItemText,
                            formData.operatingSeason === opt.id && styles.dropdownMenuItemTextActive,
                          ]}
                        >
                          {opt.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
                {formErrors.operatingSeason && (
                  <Text style={styles.errorHelperText}>{formErrors.operatingSeason}</Text>
                )}
              </View>

              {/* Field 4: Daily operating hours* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Daily operating hours<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TouchableOpacity
                  style={[styles.dropdownTrigger, formErrors.dailyOperatingHours && styles.inputErrorBorder]}
                  activeOpacity={0.8}
                  onPress={() => setIsHoursDropdownOpen(!isHoursDropdownOpen)}
                >
                  <Text
                    style={
                      formData.dailyOperatingHours
                        ? styles.dropdownValueText
                        : styles.dropdownPlaceholderText
                    }
                  >
                    {DAILY_OPERATING_HOURS_OPTIONS.find((o) => o.id === formData.dailyOperatingHours)?.label ||
                      'Select the window you operate in'}
                  </Text>
                  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
                    <Path
                      d={isHoursDropdownOpen ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'}
                      stroke="#4B5563"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>

                {isHoursDropdownOpen && (
                  <View style={styles.dropdownMenu}>
                    {DAILY_OPERATING_HOURS_OPTIONS.map((opt, oIdx) => (
                      <TouchableOpacity
                        key={opt.id}
                        style={[
                          styles.dropdownMenuItem,
                          formData.dailyOperatingHours === opt.id && styles.dropdownMenuItemActive,
                          oIdx === DAILY_OPERATING_HOURS_OPTIONS.length - 1 && { borderBottomWidth: 0 },
                        ]}
                        activeOpacity={0.7}
                        onPress={() => {
                          updateField('dailyOperatingHours', opt.id);
                          setIsHoursDropdownOpen(false);
                        }}
                      >
                        <Text
                          style={[
                            styles.dropdownMenuItemText,
                            formData.dailyOperatingHours === opt.id && styles.dropdownMenuItemTextActive,
                          ]}
                        >
                          {opt.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
                {formErrors.dailyOperatingHours && (
                  <Text style={styles.errorHelperText}>{formErrors.dailyOperatingHours}</Text>
                )}
              </View>

              {/* SECTION 4: Details of Activity Leads */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Details of Activity Leads</Text>

              {/* Field 5: Number of certified activity leads* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Number of certified activity leads<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[styles.textInput, formErrors.certifiedLeadsCount && styles.inputErrorBorder]}
                  value={formData.certifiedLeadsCount}
                  onChangeText={(val) => updateField('certifiedLeadsCount', val.replace(/\D/g, ''))}
                  placeholder="Headcount"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                />
                {formErrors.certifiedLeadsCount && (
                  <Text style={styles.errorHelperText}>{formErrors.certifiedLeadsCount}</Text>
                )}
              </View>

              {/* Field 6: Highest qualification held by the lead* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Highest qualification held by the lead<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TouchableOpacity
                  style={[styles.dropdownTrigger, formErrors.leadHighestQualification && styles.inputErrorBorder]}
                  activeOpacity={0.8}
                  onPress={() => setIsQualificationDropdownOpen(!isQualificationDropdownOpen)}
                >
                  <Text
                    style={
                      formData.leadHighestQualification
                        ? styles.dropdownValueText
                        : styles.dropdownPlaceholderText
                    }
                  >
                    {LEAD_QUALIFICATION_OPTIONS.find((o) => o.id === formData.leadHighestQualification)?.label ||
                      'Select the certification level'}
                  </Text>
                  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
                    <Path
                      d={isQualificationDropdownOpen ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'}
                      stroke="#4B5563"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>

                {isQualificationDropdownOpen && (
                  <View style={styles.dropdownMenu}>
                    {LEAD_QUALIFICATION_OPTIONS.map((opt, oIdx) => (
                      <TouchableOpacity
                        key={opt.id}
                        style={[
                          styles.dropdownMenuItem,
                          formData.leadHighestQualification === opt.id && styles.dropdownMenuItemActive,
                          oIdx === LEAD_QUALIFICATION_OPTIONS.length - 1 && { borderBottomWidth: 0 },
                        ]}
                        activeOpacity={0.7}
                        onPress={() => {
                          updateField('leadHighestQualification', opt.id);
                          setIsQualificationDropdownOpen(false);
                        }}
                      >
                        <Text
                          style={[
                            styles.dropdownMenuItemText,
                            formData.leadHighestQualification === opt.id && styles.dropdownMenuItemTextActive,
                          ]}
                        >
                          {opt.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
                {formErrors.leadHighestQualification && (
                  <Text style={styles.errorHelperText}>{formErrors.leadHighestQualification}</Text>
                )}
              </View>

              {/* Field 7: Certifying body* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Certifying body<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[styles.textInput, formErrors.certifyingBody && styles.inputErrorBorder]}
                  value={formData.certifyingBody}
                  onChangeText={(val) => updateField('certifyingBody', val)}
                  placeholder="Institute or authority that issued it"
                  placeholderTextColor="#9CA3AF"
                />
                {formErrors.certifyingBody && (
                  <Text style={styles.errorHelperText}>{formErrors.certifyingBody}</Text>
                )}
              </View>

              {/* Field 8: Number of trained support staff (Optional) */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>Number of trained support staff</Text>
                <TextInput
                  style={styles.textInput}
                  value={formData.supportStaffCount}
                  onChangeText={(val) => updateField('supportStaffCount', val.replace(/\D/g, ''))}
                  placeholder="Headcount"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                />
              </View>

              {/* SECTION 5: Equipment Details */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Equipment Details</Text>

              {/* Field 9: How equipment is held* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  How equipment is held<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TouchableOpacity
                  style={[styles.dropdownTrigger, formErrors.equipmentHoldType && styles.inputErrorBorder]}
                  activeOpacity={0.8}
                  onPress={() => setIsEquipmentHoldDropdownOpen(!isEquipmentHoldDropdownOpen)}
                >
                  <Text
                    style={
                      formData.equipmentHoldType
                        ? styles.dropdownValueText
                        : styles.dropdownPlaceholderText
                    }
                  >
                    {EQUIPMENT_HOLD_OPTIONS.find((o) => o.id === formData.equipmentHoldType)?.label ||
                      'Owned, hired from a certified supplier,...'}
                  </Text>
                  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
                    <Path
                      d={isEquipmentHoldDropdownOpen ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'}
                      stroke="#4B5563"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>

                {isEquipmentHoldDropdownOpen && (
                  <View style={styles.dropdownMenu}>
                    {EQUIPMENT_HOLD_OPTIONS.map((opt, oIdx) => (
                      <TouchableOpacity
                        key={opt.id}
                        style={[
                          styles.dropdownMenuItem,
                          formData.equipmentHoldType === opt.id && styles.dropdownMenuItemActive,
                          oIdx === EQUIPMENT_HOLD_OPTIONS.length - 1 && { borderBottomWidth: 0 },
                        ]}
                        activeOpacity={0.7}
                        onPress={() => {
                          updateField('equipmentHoldType', opt.id);
                          setIsEquipmentHoldDropdownOpen(false);
                        }}
                      >
                        <Text
                          style={[
                            styles.dropdownMenuItemText,
                            formData.equipmentHoldType === opt.id && styles.dropdownMenuItemTextActive,
                          ]}
                        >
                          {opt.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
                {formErrors.equipmentHoldType && (
                  <Text style={styles.errorHelperText}>{formErrors.equipmentHoldType}</Text>
                )}
              </View>

              {/* Field 10: Date of the last equipment inspection* (Ux4gDatePicker) */}
              <View style={styles.fieldBlock}>
                <Ux4gDatePicker
                  label="Date of the last equipment inspection"
                  required
                  placeholder="DD / MM / YYYY"
                  initialDate={parseDate(formData.lastEquipmentInspectionDate)}
                  onDateSelected={(date) => updateField('lastEquipmentInspectionDate', formatDate(date))}
                  status={formErrors.lastEquipmentInspectionDate ? 'error' : 'defaultStatus'}
                  description={formErrors.lastEquipmentInspectionDate}
                />
              </View>

              {/* Field 11: Inspecting authority or agency* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Inspecting authority or agency<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[styles.textInput, formErrors.inspectingAgency && styles.inputErrorBorder]}
                  value={formData.inspectingAgency}
                  onChangeText={(val) => updateField('inspectingAgency', val)}
                  placeholder="Who carried out the inspection"
                  placeholderTextColor="#9CA3AF"
                />
                {formErrors.inspectingAgency && (
                  <Text style={styles.errorHelperText}>{formErrors.inspectingAgency}</Text>
                )}
              </View>

              {/* SECTION 6: Insurance and Emergency Details */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Insurance and Emergency Details</Text>

              {/* Field 12: Public liability policy number* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Public liability policy number<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[styles.textInput, formErrors.liabilityPolicyNumber && styles.inputErrorBorder]}
                  value={formData.liabilityPolicyNumber}
                  onChangeText={(val) => updateField('liabilityPolicyNumber', val)}
                  placeholder="As printed on the policy"
                  placeholderTextColor="#9CA3AF"
                />
                {formErrors.liabilityPolicyNumber && (
                  <Text style={styles.errorHelperText}>{formErrors.liabilityPolicyNumber}</Text>
                )}
              </View>

              {/* Field 13: Policy valid until* (Ux4gDatePicker) */}
              <View style={styles.fieldBlock}>
                <Ux4gDatePicker
                  label="Policy valid until"
                  required
                  placeholder="DD / MM / YYYY"
                  initialDate={parseDate(formData.policyValidUntilDate)}
                  onDateSelected={(date) => updateField('policyValidUntilDate', formatDate(date))}
                  status={formErrors.policyValidUntilDate ? 'error' : 'defaultStatus'}
                  description={formErrors.policyValidUntilDate}
                />
              </View>

              {/* Field 14: Nearest hospital and distance from the site* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Nearest hospital and distance from the site<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[styles.textInput, formErrors.nearestHospitalAndDistance && styles.inputErrorBorder]}
                  value={formData.nearestHospitalAndDistance}
                  onChangeText={(val) => updateField('nearestHospitalAndDistance', val)}
                  placeholder="Name and distance in km"
                  placeholderTextColor="#9CA3AF"
                />
                {formErrors.nearestHospitalAndDistance && (
                  <Text style={styles.errorHelperText}>{formErrors.nearestHospitalAndDistance}</Text>
                )}
              </View>

              {/* Field 15: Emergency contact number at the site* */}
              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Emergency contact number at the site<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <View style={[styles.mobileUnifiedBox, formErrors.emergencyContactNumber && styles.inputErrorBorder]}>
                  <Text style={styles.countryCodePrefix}>+91</Text>
                  <TextInput
                    style={styles.mobileUnifiedInput}
                    value={formData.emergencyContactNumber}
                    onChangeText={(val) => updateField('emergencyContactNumber', val)}
                    placeholder="Reachable during operating hours"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="phone-pad"
                  />
                </View>
                {formErrors.emergencyContactNumber && (
                  <Text style={styles.errorHelperText}>{formErrors.emergencyContactNumber}</Text>
                )}
              </View>

              {/* Field 16: Checkbox: A written emergency response plan exists for this site* */}
              <View style={[styles.declarationBlock, { marginTop: 16 }]}>
                <Ux4gCheckbox
                  label="A written emergency response plan exists for this site"
                  isRequired={true}
                  value={formData.hasWrittenEmergencyPlan}
                  onChanged={(v) => updateField('hasWrittenEmergencyPlan', !!v)}
                  hasError={!!formErrors.hasWrittenEmergencyPlan}
                />
                {formErrors.hasWrittenEmergencyPlan && (
                  <Text style={[styles.errorHelperText, { marginTop: 6 }]}>
                    {formErrors.hasWrittenEmergencyPlan}
                  </Text>
                )}
              </View>
            </View>
          )}

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 6: DOCUMENTS (EXACT REPLICA OF USER REFERENCE IMAGE)                  */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 6 && (
            <View style={styles.formContainer}>
              {/* Cyan Info Callout Box */}
              <View style={[styles.requirementCard, { marginTop: 0, marginBottom: 16 }]}>
                <View style={styles.requirementIconCol}>
                  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                    <Circle cx={12} cy={12} r={10} fill="#06B6D4" />
                    <Path d="M12 11v6M12 8h.01" stroke="#FFFFFF" strokeWidth={2.2} strokeLinecap="round" />
                  </Svg>
                </View>
                <Text style={styles.requirementCardText}>
                  PDF or JPEG · up to 5 MB each · no password-protected files
                </Text>
              </View>

              {/* ─── ACCORDION 1: Documents of the Site ─── */}
              <View style={styles.docAccordionCard}>
                <TouchableOpacity
                  style={styles.docAccordionHeader}
                  activeOpacity={0.7}
                  onPress={() => setIsSiteDocsExpanded(!isSiteDocsExpanded)}
                >
                  <Text style={styles.docAccordionTitle}>Documents of the Site</Text>
                  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                    <Path
                      d={isSiteDocsExpanded ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'}
                      stroke="#374151"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>

                {isSiteDocsExpanded && (
                  <View style={styles.docAccordionBody}>
                    {/* Document 1: Land record */}
                    <View style={[styles.docItemBlock, { marginTop: 4 }]}>
                      <View style={styles.docItemTitleRow}>
                        {formData.landRecordFiles && formData.landRecordFiles.length > 0 ? (
                          <View style={styles.docStatusCircleChecked}>
                            <Svg width={11} height={11} viewBox="0 0 24 24" fill="none">
                              <Path
                                d="M5 13l4 4L19 7"
                                stroke="#FFFFFF"
                                strokeWidth={3}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </Svg>
                          </View>
                        ) : (
                          <View style={styles.docStatusCircleHollow} />
                        )}
                        <Text style={styles.docItemTitle}>
                          Land record — khasra extract or allotment order<Text style={styles.requiredAsterisk}>*</Text>
                        </Text>
                      </View>
                      <Text style={styles.docItemSub}>
                        PDF or JPEG · 1 file · for the survey number entered at step 4
                      </Text>

                      <View style={{ marginLeft: 28, marginTop: 10 }}>
                        <Ux4gFileUpload
                          title="Drop file here"
                          showScanButton={false}
                          showOrDivider={true}
                          maxFiles={1}
                          maxFileSize={5 * 1024 * 1024}
                          allowedExtensions={['pdf', 'jpg', 'png']}
                          borderStyle="dashed"
                          buttonBorderRadius={6}
                          buttonColor={UX4GColors.primary}
                          buttonBorderColor={UX4GColors.primary}
                          initialFiles={formData.landRecordFiles}
                          onFilesChanged={(files) => {
                            updateField('landRecordFiles', files);
                            updateField('landRecordDoc', files && files.length > 0 ? files[0] : null);
                          }}
                        />
                      </View>
                      {formErrors.landRecordDoc && (
                        <Text style={[styles.errorHelperText, { marginLeft: 28, marginTop: 4 }]}>{formErrors.landRecordDoc}</Text>
                      )}
                    </View>

                    {/* Document 2: Lease deed or landowner consent */}
                    <View style={styles.docItemBlock}>
                      <View style={styles.docItemTitleRow}>
                        {formData.leaseDeedFiles && formData.leaseDeedFiles.length > 0 ? (
                          <View style={styles.docStatusCircleChecked}>
                            <Svg width={11} height={11} viewBox="0 0 24 24" fill="none">
                              <Path
                                d="M5 13l4 4L19 7"
                                stroke="#FFFFFF"
                                strokeWidth={3}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </Svg>
                          </View>
                        ) : (
                          <View style={styles.docStatusCircleHollow} />
                        )}
                        <Text style={styles.docItemTitle}>
                          Lease deed or landowner consent<Text style={styles.requiredAsterisk}>*</Text>
                        </Text>
                      </View>
                      <Text style={styles.docItemSub}>
                        PDF · 1 file · asked because the land is leased or owned by someone else
                      </Text>

                      <View style={{ marginLeft: 28, marginTop: 10 }}>
                        <Ux4gFileUpload
                          title="Drop file here"
                          showScanButton={false}
                          showOrDivider={true}
                          maxFiles={1}
                          maxFileSize={5 * 1024 * 1024}
                          allowedExtensions={['pdf', 'jpg', 'png']}
                          borderStyle="dashed"
                          buttonBorderRadius={6}
                          buttonColor={UX4GColors.primary}
                          buttonBorderColor={UX4GColors.primary}
                          initialFiles={formData.leaseDeedFiles}
                          onFilesChanged={(files) => {
                            updateField('leaseDeedFiles', files);
                            updateField('leaseDeedDoc', files && files.length > 0 ? files[0] : null);
                          }}
                        />
                      </View>
                      {formErrors.leaseDeedDoc && (
                        <Text style={[styles.errorHelperText, { marginLeft: 28, marginTop: 4 }]}>{formErrors.leaseDeedDoc}</Text>
                      )}
                    </View>

                    {/* Document 3: Site layout plan */}
                    <View style={styles.docItemBlock}>
                      <View style={styles.docItemTitleRow}>
                        {formData.siteLayoutFiles && formData.siteLayoutFiles.length > 0 ? (
                          <View style={styles.docStatusCircleChecked}>
                            <Svg width={11} height={11} viewBox="0 0 24 24" fill="none">
                              <Path
                                d="M5 13l4 4L19 7"
                                stroke="#FFFFFF"
                                strokeWidth={3}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </Svg>
                          </View>
                        ) : (
                          <View style={styles.docStatusCircleHollow} />
                        )}
                        <Text style={styles.docItemTitle}>
                          Site layout plan<Text style={styles.requiredAsterisk}>*</Text>
                        </Text>
                      </View>
                      <Text style={styles.docItemSub}>
                        PDF or JPEG · 1 file · activity zones, assembly point and approach route
                      </Text>

                      <View style={{ marginLeft: 28, marginTop: 10 }}>
                        <Ux4gFileUpload
                          title="Drop file here"
                          showScanButton={false}
                          showOrDivider={true}
                          maxFiles={1}
                          maxFileSize={5 * 1024 * 1024}
                          allowedExtensions={['pdf', 'jpg', 'png']}
                          borderStyle="dashed"
                          buttonBorderRadius={6}
                          buttonColor={UX4GColors.primary}
                          buttonBorderColor={UX4GColors.primary}
                          initialFiles={formData.siteLayoutFiles}
                          onFilesChanged={(files) => {
                            updateField('siteLayoutFiles', files);
                            updateField('siteLayoutDoc', files && files.length > 0 ? files[0] : null);
                          }}
                        />
                      </View>
                      {formErrors.siteLayoutDoc && (
                        <Text style={[styles.errorHelperText, { marginLeft: 28, marginTop: 4 }]}>{formErrors.siteLayoutDoc}</Text>
                      )}
                    </View>
                  </View>
                )}
              </View>

              {/* ─── ACCORDION 2: Safety Documents ─── */}
              <View style={styles.docAccordionCard}>
                <TouchableOpacity
                  style={styles.docAccordionHeader}
                  activeOpacity={0.7}
                  onPress={() => setIsSafetyDocsExpanded(!isSafetyDocsExpanded)}
                >
                  <View style={styles.docAccordionHeaderLeft}>
                    <Text style={styles.docAccordionTitle}>Safety Documents</Text>
                    <Text style={styles.docAccordionSub}>
                      {[formData.sopManualFiles, formData.eapPlanFiles, formData.equipmentInspectionFiles, formData.leadCertificatesFiles].filter((a) => a && a.length > 0).length === 0
                        ? '4 documents · none uploaded yet'
                        : '4 documents · ' + [formData.sopManualFiles, formData.eapPlanFiles, formData.equipmentInspectionFiles, formData.leadCertificatesFiles].filter((a) => a && a.length > 0).length + ' uploaded'}
                    </Text>
                    <View style={styles.docStatusDotsRow}>
                      {[formData.sopManualFiles, formData.eapPlanFiles, formData.equipmentInspectionFiles, formData.leadCertificatesFiles].map((docFiles, idx) =>
                        docFiles && docFiles.length > 0 ? (
                          <View key={idx} style={styles.docMiniDotChecked}>
                            <Svg width={9} height={9} viewBox="0 0 24 24" fill="none">
                              <Path
                                d="M5 13l4 4L19 7"
                                stroke="#FFFFFF"
                                strokeWidth={3}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </Svg>
                          </View>
                        ) : (
                          <View key={idx} style={styles.docMiniDotHollow} />
                        )
                      )}
                    </View>
                  </View>
                  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                    <Path
                      d={isSafetyDocsExpanded ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'}
                      stroke="#374151"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>

                {isSafetyDocsExpanded && (
                  <View style={styles.docAccordionBody}>
                    {/* Safety Doc 1: SOP manual */}
                    <View style={[styles.docItemBlock, { marginTop: 4 }]}>
                      <View style={styles.docItemTitleRow}>
                        {formData.sopManualFiles && formData.sopManualFiles.length > 0 ? (
                          <View style={styles.docStatusCircleChecked}>
                            <Svg width={11} height={11} viewBox="0 0 24 24" fill="none">
                              <Path d="M5 13l4 4L19 7" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                            </Svg>
                          </View>
                        ) : (
                          <View style={styles.docStatusCircleHollow} />
                        )}
                        <Text style={styles.docItemTitle}>
                          Standard Operating Procedure (SOP) manual<Text style={styles.requiredAsterisk}>*</Text>
                        </Text>
                      </View>
                      <Text style={styles.docItemSub}>
                        PDF · 1 file · standard safety and operating procedures for all activities
                      </Text>
                      <View style={{ marginLeft: 28, marginTop: 10 }}>
                        <Ux4gFileUpload
                          title="Drop file here"
                          showScanButton={false}
                          showOrDivider={true}
                          maxFiles={1}
                          maxFileSize={5 * 1024 * 1024}
                          allowedExtensions={['pdf', 'jpg', 'png']}
                          borderStyle="dashed"
                          buttonBorderRadius={6}
                          buttonColor={UX4GColors.primary}
                          buttonBorderColor={UX4GColors.primary}
                          initialFiles={formData.sopManualFiles}
                          onFilesChanged={(files) => {
                            updateField('sopManualFiles', files);
                            updateField('sopManualDoc', files && files.length > 0 ? files[0] : null);
                          }}
                        />
                      </View>
                    </View>

                    {/* Safety Doc 2: Emergency Action Plan */}
                    <View style={styles.docItemBlock}>
                      <View style={styles.docItemTitleRow}>
                        {formData.eapPlanFiles && formData.eapPlanFiles.length > 0 ? (
                          <View style={styles.docStatusCircleChecked}>
                            <Svg width={11} height={11} viewBox="0 0 24 24" fill="none"><Path d="M5 13l4 4L19 7" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" /></Svg>
                          </View>
                        ) : (
                          <View style={styles.docStatusCircleHollow} />
                        )}
                        <Text style={styles.docItemTitle}>
                          Comprehensive Emergency Action Plan (EAP)<Text style={styles.requiredAsterisk}>*</Text>
                        </Text>
                      </View>
                      <Text style={styles.docItemSub}>
                        PDF · 1 file · evacuation routes, emergency protocols, and hospital tie-up
                      </Text>
                      <View style={{ marginLeft: 28, marginTop: 10 }}>
                        <Ux4gFileUpload
                          title="Drop file here"
                          showScanButton={false}
                          showOrDivider={true}
                          maxFiles={1}
                          maxFileSize={5 * 1024 * 1024}
                          allowedExtensions={['pdf', 'jpg', 'png']}
                          borderStyle="dashed"
                          buttonBorderRadius={6}
                          buttonColor={UX4GColors.primary}
                          buttonBorderColor={UX4GColors.primary}
                          initialFiles={formData.eapPlanFiles}
                          onFilesChanged={(files) => {
                            updateField('eapPlanFiles', files);
                            updateField('eapPlanDoc', files && files.length > 0 ? files[0] : null);
                          }}
                        />
                      </View>
                    </View>

                    {/* Safety Doc 3: Equipment fitness report */}
                    <View style={styles.docItemBlock}>
                      <View style={styles.docItemTitleRow}>
                        {formData.equipmentInspectionFiles && formData.equipmentInspectionFiles.length > 0 ? (
                          <View style={styles.docStatusCircleChecked}>
                            <Svg width={11} height={11} viewBox="0 0 24 24" fill="none"><Path d="M5 13l4 4L19 7" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" /></Svg>
                          </View>
                        ) : (
                          <View style={styles.docStatusCircleHollow} />
                        )}
                        <Text style={styles.docItemTitle}>
                          Equipment fitness and inspection report<Text style={styles.requiredAsterisk}>*</Text>
                        </Text>
                      </View>
                      <Text style={styles.docItemSub}>
                        PDF or JPEG · 1 file · fitness certificate from certified inspection authority
                      </Text>
                      <View style={{ marginLeft: 28, marginTop: 10 }}>
                        <Ux4gFileUpload
                          title="Drop file here"
                          showScanButton={false}
                          showOrDivider={true}
                          maxFiles={1}
                          maxFileSize={5 * 1024 * 1024}
                          allowedExtensions={['pdf', 'jpg', 'png']}
                          borderStyle="dashed"
                          buttonBorderRadius={6}
                          buttonColor={UX4GColors.primary}
                          buttonBorderColor={UX4GColors.primary}
                          initialFiles={formData.equipmentInspectionFiles}
                          onFilesChanged={(files) => {
                            updateField('equipmentInspectionFiles', files);
                            updateField('equipmentInspectionDoc', files && files.length > 0 ? files[0] : null);
                          }}
                        />
                      </View>
                    </View>

                    {/* Safety Doc 4: Lead certificates */}
                    <View style={styles.docItemBlock}>
                      <View style={styles.docItemTitleRow}>
                        {formData.leadCertificatesFiles && formData.leadCertificatesFiles.length > 0 ? (
                          <View style={styles.docStatusCircleChecked}>
                            <Svg width={11} height={11} viewBox="0 0 24 24" fill="none"><Path d="M5 13l4 4L19 7" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" /></Svg>
                          </View>
                        ) : (
                          <View style={styles.docStatusCircleHollow} />
                        )}
                        <Text style={styles.docItemTitle}>
                          Activity lead qualification and license certificates<Text style={styles.requiredAsterisk}>*</Text>
                        </Text>
                      </View>
                      <Text style={styles.docItemSub}>
                        PDF or JPEG · up to 5 files · MOI/AMC/WFR certificates for certified leads
                      </Text>
                      <View style={{ marginLeft: 28, marginTop: 10 }}>
                        <Ux4gFileUpload
                          title="Drop file here"
                          showScanButton={false}
                          showOrDivider={true}
                          maxFiles={5}
                          maxFileSize={5 * 1024 * 1024}
                          allowedExtensions={['pdf', 'jpg', 'png']}
                          borderStyle="dashed"
                          buttonBorderRadius={6}
                          buttonColor={UX4GColors.primary}
                          buttonBorderColor={UX4GColors.primary}
                          initialFiles={formData.leadCertificatesFiles}
                          onFilesChanged={(files) => {
                            updateField('leadCertificatesFiles', files);
                            updateField('leadCertificatesDoc', files && files.length > 0 ? files[0] : null);
                          }}
                        />
                      </View>
                    </View>
                  </View>
                )}
              </View>

              {/* ─── ACCORDION 3: Documents Already on Record ─── */}
              <View style={styles.docAccordionCard}>
                <TouchableOpacity
                  style={styles.docAccordionHeader}
                  activeOpacity={0.7}
                  onPress={() => setIsOnRecordDocsExpanded(!isOnRecordDocsExpanded)}
                >
                  <View style={styles.docAccordionHeaderLeft}>
                    <Text style={styles.docAccordionTitle}>Documents Already on Record</Text>
                    <Text style={styles.docAccordionSub}>2 documents · both already on file</Text>
                    <View style={styles.docStatusDotsRow}>
                      <View style={styles.docMiniDotChecked}>
                        <Svg width={9} height={9} viewBox="0 0 24 24" fill="none">
                          <Path d="M5 13l4 4L19 7" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                        </Svg>
                      </View>
                      <View style={styles.docMiniDotChecked}>
                        <Svg width={9} height={9} viewBox="0 0 24 24" fill="none">
                          <Path d="M5 13l4 4L19 7" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                        </Svg>
                      </View>
                    </View>
                  </View>
                  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                    <Path
                      d={isOnRecordDocsExpanded ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'}
                      stroke="#374151"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>

                {isOnRecordDocsExpanded && (
                  <View style={styles.docAccordionBody}>
                    {/* Record Doc 1: PAN Card */}
                    <View style={[styles.docRecordCard, { marginTop: 4 }]}>
                      <Text style={styles.docRecordTitle}>PAN Card of Applicant Entity</Text>
                      <Text style={styles.docRecordSub}>UDYAM-UK-PAN-AABCH7821K.pdf · Verified via DigiLocker</Text>
                      <View style={styles.docRecordBadgeRow}>
                        <View style={styles.docRecordBadge}>
                          <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                            <Path d="M5 13l4 4L19 7" stroke="#047857" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
                          </Svg>
                          <Text style={styles.docRecordBadgeText}>Verified via DigiLocker</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.7}>
                          <Text style={styles.docRecordLinkText}>View document ↗</Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    {/* Record Doc 2: Tourism Registration */}
                    <View style={styles.docRecordCard}>
                      <Text style={styles.docRecordTitle}>Sector Tourism Operator Registration Certificate</Text>
                      <Text style={styles.docRecordSub}>ST-TOUR-UK-2024-004821.pdf · Verified on portal</Text>
                      <View style={styles.docRecordBadgeRow}>
                        <View style={styles.docRecordBadge}>
                          <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                            <Path d="M5 13l4 4L19 7" stroke="#047857" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
                          </Svg>
                          <Text style={styles.docRecordBadgeText}>Verified on portal</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.7}>
                          <Text style={styles.docRecordLinkText}>View document ↗</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              </View>
            </View>
          )}

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 7: INSURANCE & COMPLIANCE                                            */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 7 && (
            <View style={styles.formContainer}>
              <Text style={styles.sectionHeading}>Liability & Passenger Cover</Text>

              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>
                  Third-Party Comprehensive Policy No<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[styles.textInput, formErrors.insurancePolicyNo && styles.inputErrorBorder]}
                  value={formData.insurancePolicyNo}
                  onChangeText={(val) => updateField('insurancePolicyNo', val)}
                />
              </View>

              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>Insurance Underwriting Company</Text>
                <TextInput
                  style={styles.textInput}
                  value={formData.insurerName}
                  onChangeText={(val) => updateField('insurerName', val)}
                />
              </View>

              <View style={styles.rowTwoCols}>
                <View style={{ flex: 1, marginRight: 8 }}>
                  <Text style={styles.fieldLabel}>Total Liability Cover</Text>
                  <TextInput
                    style={styles.textInput}
                    value={formData.liabilityCoverAmount}
                    onChangeText={(val) => updateField('liabilityCoverAmount', val)}
                  />
                </View>
                <View style={{ flex: 1, marginLeft: 8 }}>
                  <Text style={styles.fieldLabel}>Passenger Personal Cover</Text>
                  <TextInput
                    style={styles.textInput}
                    value={formData.passengerCoverPerPerson}
                    onChangeText={(val) => updateField('passengerCoverPerPerson', val)}
                  />
                </View>
              </View>

              <View style={styles.fieldBlock}>
                <Text style={styles.fieldLabel}>Policy Valid Until</Text>
                <TextInput
                  style={styles.textInput}
                  value={formData.insuranceValidTill}
                  onChangeText={(val) => updateField('insuranceValidTill', val)}
                  placeholder="DD/MM/YYYY"
                />
              </View>
            </View>
          )}

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 8: FEE & PAYMENT                                                     */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 8 && (
            <View style={styles.formContainer}>
              <Text style={styles.sectionHeading}>Fee Details</Text>

              {/* Fee Summary Card */}
              <View style={styles.feeCard}>
                <Text style={styles.feeCardHeader}>Adventure Activity Approval · UK-ADV-2026-009412</Text>

                <View style={styles.feeCardRow}>
                  <Text style={styles.feeItemLabel}>Technical Safety Inspection Fee</Text>
                  <Text style={styles.feeItemAmount}>₹5,000</Text>
                </View>
                <View style={styles.feeCardRow}>
                  <Text style={styles.feeItemLabel}>Departmental Registration & License Fee</Text>
                  <Text style={styles.feeItemAmount}>₹2,500</Text>
                </View>

                <View style={styles.feeDivider} />

                <View style={styles.feeCardRowTotal}>
                  <Text style={styles.feeTotalLabel}>Total payable</Text>
                  <Text style={styles.feeTotalAmount}>₹7,500</Text>
                </View>
              </View>

              {/* Mode of Payment */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Mode of Payment</Text>
              <Text style={styles.feeSubNotice}>₹7,500 payable for UK-ADV-2026-009412.</Text>

              {/* Payment Option 1: UPI */}
              <TouchableOpacity
                style={[styles.paymentCard, formData.paymentMethod === 'upi' && styles.paymentCardSelected]}
                onPress={() => updateField('paymentMethod', 'upi')}
                activeOpacity={0.8}
              >
                <View style={styles.paymentRadioRow}>
                  <View style={styles.radioOuterCircle}>
                    {formData.paymentMethod === 'upi' && <View style={styles.radioInnerCircle} />}
                  </View>
                  <View style={{ marginLeft: 12 }}>
                    <Text style={styles.paymentOptionTitle}>UPI</Text>
                    <Text style={styles.paymentOptionSub}>Pay with Google Pay, PhonePe, Paytm or BHIM</Text>
                  </View>
                </View>
              </TouchableOpacity>

              {formData.paymentMethod === 'upi' && (
                <View style={styles.paymentDetailBox}>
                  <Text style={styles.fieldLabel}>
                    UPI ID<Text style={styles.requiredAsterisk}>*</Text>
                  </Text>
                  <TextInput
                    style={[styles.textInput, formErrors.upiId && styles.inputErrorBorder]}
                    placeholder="e.g. name@upi"
                    value={formData.upiId}
                    onChangeText={(v) => updateField('upiId', v)}
                  />
                  {formErrors.upiId && <Text style={styles.errorHelperText}>{formErrors.upiId}</Text>}
                </View>
              )}

              {/* Payment Option 2: Card */}
              <TouchableOpacity
                style={[
                  styles.paymentCard,
                  formData.paymentMethod === 'card' && styles.paymentCardSelected,
                  { marginTop: 12 },
                ]}
                onPress={() => updateField('paymentMethod', 'card')}
                activeOpacity={0.8}
              >
                <View style={styles.paymentRadioRow}>
                  <View style={styles.radioOuterCircle}>
                    {formData.paymentMethod === 'card' && <View style={styles.radioInnerCircle} />}
                  </View>
                  <View style={{ marginLeft: 12 }}>
                    <Text style={styles.paymentOptionTitle}>Debit / Credit Card</Text>
                    <Text style={styles.paymentOptionSub}>Visa, MasterCard, RuPay</Text>
                  </View>
                </View>
              </TouchableOpacity>

              {formData.paymentMethod === 'card' && (
                <View style={styles.paymentDetailBox}>
                  <Text style={styles.fieldLabel}>
                    Card Number<Text style={styles.requiredAsterisk}>*</Text>
                  </Text>
                  <TextInput
                    style={[styles.textInput, formErrors.card && styles.inputErrorBorder]}
                    placeholder="XXXX - XXXX - XXXX - XXXX"
                    value={formData.cardNumber}
                    onChangeText={(v) => updateField('cardNumber', v)}
                    keyboardType="number-pad"
                  />
                  <View style={[styles.rowTwoCols, { marginTop: 12 }]}>
                    <View style={{ flex: 1, marginRight: 8 }}>
                      <Text style={styles.fieldLabel}>Expiry Date</Text>
                      <TextInput
                        style={styles.textInput}
                        placeholder="MM/YY"
                        value={formData.cardExpiry}
                        onChangeText={(v) => updateField('cardExpiry', v)}
                      />
                    </View>
                    <View style={{ flex: 1, marginLeft: 8 }}>
                      <Text style={styles.fieldLabel}>CVV</Text>
                      <TextInput
                        style={styles.textInput}
                        placeholder="XXX"
                        value={formData.cardCvv}
                        onChangeText={(v) => updateField('cardCvv', v)}
                        secureTextEntry={true}
                        maxLength={4}
                      />
                    </View>
                  </View>
                </View>
              )}

              {/* Payment Option 3: Net Banking */}
              <TouchableOpacity
                style={[
                  styles.paymentCard,
                  formData.paymentMethod === 'netbanking' && styles.paymentCardSelected,
                  { marginTop: 12 },
                ]}
                onPress={() => updateField('paymentMethod', 'netbanking')}
                activeOpacity={0.8}
              >
                <View style={styles.paymentRadioRow}>
                  <View style={styles.radioOuterCircle}>
                    {formData.paymentMethod === 'netbanking' && <View style={styles.radioInnerCircle} />}
                  </View>
                  <View style={{ marginLeft: 12 }}>
                    <Text style={styles.paymentOptionTitle}>Net Banking</Text>
                    <Text style={styles.paymentOptionSub}>60+ major scheduled banks supported</Text>
                  </View>
                </View>
              </TouchableOpacity>

              {formData.paymentMethod === 'netbanking' && (
                <View style={styles.paymentDetailBox}>
                  <Text style={styles.fieldLabel}>
                    Choose Your Bank<Text style={styles.requiredAsterisk}>*</Text>
                  </Text>
                  <View style={styles.bankGrid}>
                    {['State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Punjab National Bank'].map(
                      (b) => (
                        <TouchableOpacity
                          key={b}
                          style={[styles.bankChip, formData.selectedBank === b && styles.bankChipSelected]}
                          onPress={() => updateField('selectedBank', b)}
                        >
                          <Text
                            style={[
                              styles.bankChipText,
                              formData.selectedBank === b && styles.bankChipTextSelected,
                            ]}
                          >
                            {b}
                          </Text>
                        </TouchableOpacity>
                      )
                    )}
                  </View>
                  {formErrors.bank && <Text style={styles.errorHelperText}>{formErrors.bank}</Text>}
                </View>
              )}
            </View>
          )}

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 9: ACKNOWLEDGEMENT & CREDENTIAL                                      */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 9 && (
            <View style={styles.formContainer}>
              <Text style={styles.sectionHeading}>Approval Application Details</Text>

              {/* Green Success Banner */}
              <View style={styles.successBanner}>
                <View style={styles.successIconCol}>
                  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                    <Circle cx={12} cy={12} r={10} fill="#16A34A" />
                    <Path
                      d="M8 12.5l2.5 2.5 5.5-5.5"
                      stroke="#FFFFFF"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </View>
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={styles.successBannerText}>
                    Adventure Activity Application <Text style={{ fontWeight: '700' }}>UK-ADV-2026-009412</Text>{' '}
                    registered on 24 September 2026. On-site technical inspection is scheduled for{' '}
                    <Text style={{ fontWeight: '700' }}>02 October 2026</Text>.
                  </Text>
                </View>
              </View>

              <Text style={styles.refNumberLabel}>Application Reference</Text>
              <Text style={styles.refNumberValue}>UK-ADV-2026-009412</Text>

              {/* High Quality Verifiable QR Credential */}
              <View style={styles.qrContainer}>
                <Svg width={230} height={230} viewBox="0 0 29 29">
                  <Path d={PERMIT_QR_PATH_D} fill="#111827" />
                </Svg>
              </View>

              <View style={styles.buttonActionGroup}>
                <TouchableOpacity style={styles.primaryActionButton} activeOpacity={0.8}>
                  <Text style={styles.primaryActionButtonText}>Download acknowledgement</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondaryActionButton} activeOpacity={0.8}>
                  <Text style={styles.secondaryActionButtonText}>Save to phone</Text>
                </TouchableOpacity>
              </View>

              {/* Registered Unit Details */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Applicant & Activity Summary</Text>
              <View style={styles.summaryCard}>
                <View style={styles.summaryItem}>
                  <Text style={styles.summaryItemLabel}>Operator</Text>
                  <Text style={styles.summaryItemValue}>{formData.enterpriseName}</Text>
                </View>
                <View style={styles.summaryDivider} />
                <View style={styles.summaryItem}>
                  <Text style={styles.summaryItemLabel}>Activity</Text>
                  <Text style={styles.summaryItemValue}>
                    {formData.activityDomain === 'land'
                      ? 'Trekking & Mountaineering'
                      : formData.activityDomain === 'water'
                      ? 'White Water Rafting'
                      : 'Paragliding & Air Sports'}
                  </Text>
                </View>
                <View style={styles.summaryDivider} />
                <View style={styles.summaryItem}>
                  <Text style={styles.summaryItemLabel}>Stretch / Zone</Text>
                  <Text style={styles.summaryItemValue}>{formData.activityLocation}</Text>
                </View>
                <View style={styles.summaryDivider} />
                <View style={styles.summaryItem}>
                  <Text style={styles.summaryItemLabel}>Lead Instructor</Text>
                  <Text style={styles.summaryItemValue}>{formData.leadInstructorName}</Text>
                </View>
              </View>

              {/* Info Note on Inspection */}
              <View style={styles.infoNoticeCard}>
                <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" style={{ marginRight: 8, marginTop: 2 }}>
                  <Circle cx={12} cy={12} r={10} stroke="#0284C7" strokeWidth={2} />
                  <Path d="M12 16v-4M12 8h.01" stroke="#0284C7" strokeWidth={2} strokeLinecap="round" />
                </Svg>
                <View style={{ flex: 1 }}>
                  <Text style={styles.infoNoticeText}>
                    The Joint Technical Inspection Committee will inspect the equipment stock, first-aid equipment,
                    and guide certifications at the base camp before the final Certificate of Approval is issued.
                  </Text>
                </View>
              </View>
            </View>
          )}

          <View style={{ height: 20 }} />
        </ScrollView>

        {/* ─── STICKY BOTTOM ACTION BAR ─── */}
        <View style={styles.bottomActionBar}>
          <View style={styles.bottomActionInner}>
            {step < 8 && (
              <>
                <TouchableOpacity
                  style={styles.primaryActionButton}
                  onPress={handleContinue}
                  activeOpacity={0.8}
                >
                  <Text style={styles.primaryActionButtonText}>
                    {step === 1 ? 'Start the application' : 'Continue'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.secondaryActionButton}
                  onPress={handleSaveDraft}
                  activeOpacity={0.8}
                >
                  <Text style={styles.secondaryActionButtonText}>Save as draft</Text>
                </TouchableOpacity>
              </>
            )}

            {step === 8 && (
              <>
                <TouchableOpacity
                  style={styles.primaryActionButton}
                  onPress={handleContinue}
                  activeOpacity={0.8}
                  disabled={isProcessingPayment}
                >
                  <Text style={styles.primaryActionButtonText}>
                    {isProcessingPayment ? 'Processing...' : 'Pay ₹7,500'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.secondaryActionButton}
                  onPress={handleSaveDraft}
                  activeOpacity={0.8}
                >
                  <Text style={styles.secondaryActionButtonText}>Save as draft</Text>
                </TouchableOpacity>
              </>
            )}

            {step === 9 && (
              <TouchableOpacity
                style={styles.primaryActionButton}
                onPress={() => setStep(1)}
                activeOpacity={0.8}
              >
                <Text style={styles.primaryActionButtonText}>Back to my applications</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* ─── MODAL: HOW TO OBTAIN PREREQUISITE REGISTRATIONS ─── */}
        <Modal
          visible={showPrereqModal}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setShowPrereqModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalCard}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Required Prerequisite Registrations</Text>
                <TouchableOpacity onPress={() => setShowPrereqModal(false)} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                  <Text style={styles.modalCloseText}>✕</Text>
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.modalBody}>
                <Text style={styles.modalParagraph}>
                  The Adventure Tourism Safety and Operational Regulations require operators to possess four active
                  registrations prior to departmental approval:
                </Text>

                <View style={styles.prereqItem}>
                  <Text style={styles.prereqNumber}>1</Text>
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={styles.prereqTitle}>Portal Account</Text>
                    <Text style={styles.prereqDesc}>
                      An active single-sign-on login account on the National Single Window System or State Tourism
                      Services Portal.
                    </Text>
                  </View>
                </View>

                <View style={styles.prereqItem}>
                  <Text style={styles.prereqNumber}>2</Text>
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={styles.prereqTitle}>Applicant Profile</Text>
                    <Text style={styles.prereqDesc}>
                      A fully verified citizen/director profile authenticated with Aadhaar / DigiLocker eKYC.
                    </Text>
                  </View>
                </View>

                <View style={styles.prereqItem}>
                  <Text style={styles.prereqNumber}>3</Text>
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={styles.prereqTitle}>Registered Unit or Establishment</Text>
                    <Text style={styles.prereqDesc}>
                      MSME Udyam Registration Certificate or Shops & Commercial Establishment Act license under local
                      municipal jurisdiction.
                    </Text>
                  </View>
                </View>

                <View style={styles.prereqItem}>
                  <Text style={styles.prereqNumber}>4</Text>
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={styles.prereqTitle}>Sector Tourism Registration</Text>
                    <Text style={styles.prereqDesc}>
                      State Department of Tourism Tour/Adventure Operator classification or provisional registration.
                    </Text>
                  </View>
                </View>
              </ScrollView>
              <TouchableOpacity
                style={styles.modalPrimaryBtn}
                onPress={() => setShowPrereqModal(false)}
                activeOpacity={0.8}
              >
                <Text style={styles.modalPrimaryBtnText}>I Understand</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* ─── MODAL: HOW TO OBTAIN SECTOR TOURISM REGISTRATION ─── */}
        <Modal
          visible={showSectorRegModal}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setShowSectorRegModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalCard}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Sector Tourism Registration</Text>
                <TouchableOpacity onPress={() => setShowSectorRegModal(false)} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                  <Text style={styles.modalCloseText}>✕</Text>
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.modalBody}>
                <Text style={styles.modalParagraph}>
                  Sector Tourism Registration is granted by the State Department of Tourism under the State Adventure Tourism Promotion & Safety Framework.
                </Text>
                <View style={styles.prereqItem}>
                  <Text style={styles.prereqNumber}>1</Text>
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={styles.prereqTitle}>Apply Online or at District Office</Text>
                    <Text style={styles.prereqDesc}>
                      Submit Form-A on your State Tourism Single Window Portal or at the District Tourism Development Office (DTDO).
                    </Text>
                  </View>
                </View>
                <View style={styles.prereqItem}>
                  <Text style={styles.prereqNumber}>2</Text>
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={styles.prereqTitle}>Documents Required</Text>
                    <Text style={styles.prereqDesc}>
                      Enterprise registration (Udyam / MSME / ROC), applicant identity proof, GSTIN, and lease/premises ownership documents.
                    </Text>
                  </View>
                </View>
                <View style={styles.prereqItem}>
                  <Text style={styles.prereqNumber}>3</Text>
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={styles.prereqTitle}>Provisional Number Allotment</Text>
                    <Text style={styles.prereqDesc}>
                      A provisional registration number is issued within 3 to 5 business days upon scrutiny of submitted documents.
                    </Text>
                  </View>
                </View>
              </ScrollView>
              <TouchableOpacity
                style={styles.modalPrimaryBtn}
                onPress={() => setShowSectorRegModal(false)}
                activeOpacity={0.8}
              >
                <Text style={styles.modalPrimaryBtnText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* ─── PAYMENT PROCESSING MODAL ─── */}
        <Modal visible={isProcessingPayment} transparent={true} animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.redirectModalCard}>
              <View style={styles.spinnerCircle}>
                <Ux4gSpinner size="large" color={UX4GColors.primary} />
              </View>
              <Text style={styles.redirectTitle}>Redirecting..</Text>
              <Text style={styles.redirectSubtitle}>
                Please do not close or refresh this page. We are securely processing your payment.
              </Text>
            </View>
          </View>
        </Modal>

        {/* ─── DRAFT SAVED TOAST ─── */}
        {showDraftToast && (
          <View style={styles.toastContainer}>
            <Text style={styles.toastText}>✓ Draft saved successfully ({lastSavedTime})</Text>
          </View>
        )}
      </SafeAreaView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  goiTopBar: {
    height: 34,
    backgroundColor: '#4A2BC2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  goiLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goiFlag: {
    marginRight: 8,
  },
  goiText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  goiRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appHeader: {
    height: 60,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  headerBrand: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  menuBar: {
    width: 18,
    height: 2,
    backgroundColor: '#374151',
    borderRadius: 1,
  },
  savedBannerRow: {
    backgroundColor: '#F7FEF7',
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#ECFDF5',
  },
  savedPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2FCEF',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  savedText: {
    color: '#16A34A',
    fontSize: 13,
    fontWeight: '500',
  },
  stepperDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
  },
  mainScrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 175,
    flexGrow: 1,
  },
  formContainer: {
    width: '100%',
    maxWidth: 540,
    alignSelf: 'center',
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  warningCallout: {
    backgroundColor: '#FFFBEB',
    borderWidth: 1,
    borderColor: '#FDE68A',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  warningIconContainer: {
    marginRight: 12,
    marginTop: 2,
  },
  warningTextContainer: {
    flex: 1,
  },
  warningParagraph: {
    fontSize: 13.5,
    lineHeight: 20,
    color: '#92400E',
    fontWeight: '400',
  },
  warningLinkTouch: {
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  warningLinkText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#B45309',
  },
  fieldBlock: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  requiredAsterisk: {
    color: '#DC2626',
    fontWeight: '700',
  },
  radioOptionGroup: {
    paddingLeft: 2,
  },
  declarationBlock: {
    marginBottom: 24,
    paddingLeft: 2,
    width: '100%',
  },
  errorHelperText: {
    fontSize: 12,
    color: '#DC2626',
    marginTop: 4,
    fontWeight: '500',
  },
  textInput: {
    height: 46,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#111827',
    backgroundColor: '#FFFFFF',
  },
  dropdownTrigger: {
    height: 46,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  dropdownValueText: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '500',
  },
  dropdownPlaceholderText: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  dropdownMenu: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginTop: 4,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dropdownMenuItem: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  dropdownMenuItemActive: {
    backgroundColor: '#F5F3FF',
  },
  dropdownMenuItemText: {
    fontSize: 14,
    color: '#374151',
  },
  dropdownMenuItemTextActive: {
    color: '#4A2BC2',
    fontWeight: '600',
  },
  requirementCard: {
    backgroundColor: '#ECFEFF',
    borderWidth: 1,
    borderColor: '#A5F3FC',
    borderRadius: 8,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 12,
  },
  requirementIconCol: {
    marginRight: 10,
    marginTop: 2,
  },
  requirementCardText: {
    color: '#0E7490',
    fontSize: 13.5,
    lineHeight: 20,
    flex: 1,
    fontWeight: '400',
  },
  dateInputWrapper: {
    height: 46,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  dateTextInput: {
    flex: 1,
    fontSize: 14,
    color: '#111827',
    paddingVertical: 0,
  },
  dateIconTouchable: {
    paddingLeft: 8,
  },
  externalLinkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 2,
  },
  externalLinkText: {
    fontSize: 13.5,
    color: '#4A2BC2',
    fontWeight: '500',
  },
  disabledFilledBox: {
    height: 46,
    backgroundColor: '#E5E7EB',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 14,
    justifyContent: 'center',
  },
  disabledFilledText: {
    fontSize: 14,
    color: '#4B5563',
    fontWeight: '500',
  },
  locationActionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 4,
    paddingHorizontal: 2,
  },
  locationActionText: {
    fontSize: 13.5,
    fontWeight: '600',
    color: '#111827',
    marginLeft: 8,
  },
  helperInfoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 6,
    paddingHorizontal: 2,
  },
  infoIcon: {
    marginRight: 6,
    marginTop: 2,
  },
  helperInfoText: {
    fontSize: 12,
    color: '#6B7280',
    lineHeight: 16,
    flex: 1,
  },
  inputWithIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    height: 46,
    paddingHorizontal: 14,
    backgroundColor: '#FFFFFF',
  },
  inputInnerFlex: {
    flex: 1,
    height: '100%',
    fontSize: 14,
    color: '#111827',
  },
  iconInsideInput: {
    padding: 4,
  },
  mobileUnifiedBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    height: 46,
    paddingHorizontal: 14,
    backgroundColor: '#FFFFFF',
  },
  countryCodePrefix: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '600',
    marginRight: 10,
  },
  mobileUnifiedInput: {
    flex: 1,
    height: '100%',
    fontSize: 14,
    color: '#111827',
  },
  textAreaContainer: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 8,
    minHeight: 100,
  },
  textAreaInput: {
    minHeight: 70,
    fontSize: 14,
    color: '#111827',
    textAlignVertical: 'top',
    padding: 0,
  },
  textAreaFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 4,
  },
  charCounterText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  inputErrorBorder: {
    borderColor: '#DC2626',
  },
  rowTwoCols: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  readonlyPill: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  readonlyPillText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B5563',
  },
  infoCard: {
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#BFDBFE',
    borderRadius: 8,
    padding: 14,
    marginBottom: 16,
  },
  infoCardTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E40AF',
    marginBottom: 4,
  },
  infoCardBody: {
    fontSize: 13,
    lineHeight: 18,
    color: '#1E3A8A',
  },
  uploadCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#F9FAFB',
    marginBottom: 16,
  },
  uploadIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadCardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  uploadCardSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  uploadedCheck: {
    backgroundColor: '#DEF7EC',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  uploadedCheckText: {
    color: '#03543F',
    fontSize: 12,
    fontWeight: '600',
  },
  feeCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 16,
  },
  feeCardHeader: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  feeCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  feeItemLabel: {
    fontSize: 14,
    color: '#4B5563',
  },
  feeItemAmount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  feeDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 12,
  },
  feeCardRowTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  feeTotalLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  feeTotalAmount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  feeSubNotice: {
    fontSize: 13.5,
    color: '#4B5563',
    marginBottom: 12,
  },
  paymentCard: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 14,
    backgroundColor: '#FFFFFF',
  },
  paymentCardSelected: {
    borderColor: '#4A2BC2',
    backgroundColor: '#F5F3FF',
  },
  paymentRadioRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioOuterCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4A2BC2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInnerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4A2BC2',
  },
  paymentOptionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  paymentOptionSub: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  paymentDetailBox: {
    borderLeftWidth: 2,
    borderLeftColor: '#4A2BC2',
    paddingLeft: 12,
    marginTop: 12,
    marginBottom: 8,
  },
  bankGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  bankChip: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    marginBottom: 8,
    marginRight: 8,
  },
  bankChipSelected: {
    borderColor: '#4A2BC2',
    backgroundColor: '#EDE9FE',
  },
  bankChipText: {
    fontSize: 13,
    color: '#374151',
  },
  bankChipTextSelected: {
    color: '#4A2BC2',
    fontWeight: '600',
  },
  successBanner: {
    backgroundColor: '#F0FDF4',
    borderWidth: 1,
    borderColor: '#BBF7D0',
    borderRadius: 8,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  successIconCol: {
    marginTop: 2,
  },
  successBannerText: {
    fontSize: 13.5,
    lineHeight: 20,
    color: '#15803D',
  },
  refNumberLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 2,
  },
  refNumberValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 16,
  },
  qrContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    marginBottom: 20,
  },
  buttonActionGroup: {
    marginBottom: 20,
  },
  summaryCard: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 14,
    backgroundColor: '#FAFAFA',
    marginBottom: 16,
  },
  summaryItem: {
    paddingVertical: 6,
  },
  summaryItemLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 2,
  },
  summaryItemValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  summaryDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 4,
  },
  infoNoticeCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#F0F9FF',
    borderWidth: 1,
    borderColor: '#BAE6FD',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  infoNoticeText: {
    fontSize: 12.5,
    lineHeight: 18,
    color: '#0369A1',
  },
  bottomActionBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: Platform.OS === 'ios' ? 24 : 16,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 8,
  },
  bottomActionInner: {
    width: '100%',
    maxWidth: 540,
  },
  primaryActionButton: {
    height: 48,
    backgroundColor: '#4A2BC2',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryActionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryActionButton: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#4A2BC2',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  secondaryActionButtonText: {
    color: '#4A2BC2',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalCard: {
    width: '100%',
    maxHeight: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    paddingBottom: 10,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  modalCloseText: {
    fontSize: 18,
    color: '#6B7280',
    paddingHorizontal: 6,
  },
  modalBody: {
    marginBottom: 16,
  },
  modalParagraph: {
    fontSize: 13.5,
    lineHeight: 20,
    color: '#4B5563',
    marginBottom: 14,
  },
  prereqItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  prereqNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#EDE9FE',
    color: '#4A2BC2',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 24,
  },
  prereqTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 2,
  },
  prereqDesc: {
    fontSize: 12.5,
    lineHeight: 18,
    color: '#6B7280',
  },
  modalPrimaryBtn: {
    height: 44,
    backgroundColor: '#4A2BC2',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPrimaryBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  redirectModalCard: {
    width: 280,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
  },
  spinnerCircle: {
    marginBottom: 16,
  },
  redirectTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  redirectSubtitle: {
    fontSize: 13,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 18,
  },
  toastContainer: {
    position: 'absolute',
    top: 60,
    alignSelf: 'center',
    backgroundColor: '#111827',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
  },
  toastText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },

  // Accordion & Document Upload Styles for Step 6
  docAccordionCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    marginBottom: 14,
    overflow: 'hidden',
  },
  docAccordionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#FFFFFF',
  },
  docAccordionHeaderLeft: {
    flex: 1,
    marginRight: 10,
  },
  docAccordionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  docAccordionSub: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  docStatusDotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  docMiniDotHollow: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: '#9CA3AF',
    backgroundColor: '#FFFFFF',
    marginRight: 6,
  },
  docMiniDotChecked: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#16A34A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  docAccordionBody: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  docItemBlock: {
    marginTop: 14,
  },
  docItemTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  docStatusCircleHollow: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: '#9CA3AF',
    backgroundColor: '#FFFFFF',
    marginRight: 10,
    marginTop: 2,
  },
  docStatusCircleChecked: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#16A34A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 2,
  },
  docItemTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    color: '#1F2937',
    lineHeight: 20,
  },
  docItemSub: {
    marginLeft: 28,
    fontSize: 12,
    color: '#6B7280',
    marginTop: 3,
    lineHeight: 17,
  },
  docDropzoneBox: {
    marginLeft: 28,
    marginTop: 10,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#4A2BC2',
    borderRadius: 8,
    paddingVertical: 18,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: '#FAF9FF',
  },
  docDropzoneTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
    marginTop: 8,
  },
  docDropzoneSub: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  docDropzoneOrRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    maxWidth: 200,
    marginVertical: 12,
  },
  docDropzoneOrLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  docDropzoneOrText: {
    marginHorizontal: 10,
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  docDropzoneUploadBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#4A2BC2',
    borderRadius: 6,
    paddingVertical: 7,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  docDropzoneUploadBtnText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4A2BC2',
    marginLeft: 6,
  },
  docAttachedFileCard: {
    marginLeft: 28,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#F5F3FF',
    borderWidth: 1,
    borderColor: '#DDD6FE',
    borderRadius: 8,
  },
  docAttachedFileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  docAttachedFileName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1F2937',
  },
  docAttachedFileSize: {
    fontSize: 11.5,
    color: '#059669',
    marginTop: 2,
    fontWeight: '500',
  },
  docAttachedRemoveBtn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  docAttachedRemoveText: {
    color: '#DC2626',
    fontSize: 12,
    fontWeight: '600',
  },
  docRecordCard: {
    marginTop: 10,
    padding: 12,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
  },
  docRecordTitle: {
    fontSize: 13.5,
    fontWeight: '700',
    color: '#111827',
  },
  docRecordSub: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  docRecordBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  docRecordBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECFDF5',
    borderWidth: 1,
    borderColor: '#A7F3D0',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  docRecordBadgeText: {
    fontSize: 11.5,
    fontWeight: '600',
    color: '#047857',
    marginLeft: 4,
  },
  docRecordLinkText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4A2BC2',
  },
});
`;
  }, []);

  const handleDownloadZip = async () => {
    try {
      setIsDownloadingZip(true);
      const blob = await generateAdventureActivityApprovalZip({
        appCode: fullAppCodeString,
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ux4g-adventure-activity-approval-flow.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setToastMessage('ZIP file downloaded successfully!');
      setTimeout(() => setToastMessage(null), 3000);
    } catch (e) {
      console.error(e);
      setToastMessage('Failed to download ZIP file.');
      setTimeout(() => setToastMessage(null), 3000);
    } finally {
      setIsDownloadingZip(false);
    }
  };

  const snackUrl = useMemo(() => {
    return `https://snack.expo.dev/embedded/${SNACK_ID}?platform=android&supportedPlatforms=ios,android&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&theme=${
      isDark ? 'dark' : 'light'
    }`;
  }, [isDark]);

  return (
    <div
      style={{
        padding: '24px 32px',
        maxWidth: 1200,
        margin: '0 auto',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Top Section Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 20,
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <h1
              style={{
                fontSize: 26,
                fontWeight: 700,
                color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
                margin: 0,
              }}
            >
              Adventure Activity Approval Flow
            </h1>
            <span
              style={{
                display: 'inline-block',
                padding: '3px 10px',
                borderRadius: 12,
                fontSize: 12,
                fontWeight: 600,
                backgroundColor: isDark ? UX4GColors.primary800 : UX4GColors.primary50,
                color: UX4GColors.primary600,
                border: `1px solid ${isDark ? UX4GColors.primary700 : UX4GColors.primary200}`,
              }}
            >
              Service Pattern • 9-Step Complete Flow
            </span>
          </div>
          <p
            style={{
              fontSize: 14,
              margin: 0,
              color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
              maxWidth: 720,
              lineHeight: 1.5,
            }}
          >
            The official UX4G Adventure Activity Approval service pattern for operators seeking safety, domain, and
            operational clearance for adventure sports on land, water, and in the air.
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            onClick={handleDownloadZip}
            disabled={isDownloadingZip}
            style={{
              backgroundColor: UX4GColors.primary,
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 8,
              padding: '10px 18px',
              fontSize: 14,
              fontWeight: 600,
              cursor: isDownloadingZip ? 'wait' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {isDownloadingZip ? 'Generating ZIP...' : 'Download Code (ZIP)'}
          </button>
        </div>
      </div>

      {/* Embedded Expo Snack Simulator */}
      <div
        style={{
          borderRadius: 12,
          overflow: 'hidden',
          border: `1px solid ${isDark ? '#334155' : '#E2E8F0'}`,
          backgroundColor: isDark ? '#0F172A' : '#FFFFFF',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
        }}
      >
        <div
          style={{
            padding: '12px 16px',
            backgroundColor: isDark ? '#1E293B' : '#F8FAFC',
            borderBottom: `1px solid ${isDark ? '#334155' : '#E2E8F0'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span
              style={{
                display: 'inline-block',
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: '#22C55E',
              }}
            />
            <span style={{ fontSize: 13, fontWeight: 600, color: isDark ? '#E2E8F0' : '#334155' }}>
              Interactive Mobile Preview (Expo Snack)
            </span>
          </div>
          <span style={{ fontSize: 12, color: isDark ? '#94A3B8' : '#64748B' }}>
            9 Steps · Complete Unified Flow (Steps 1 → 9)
          </span>
        </div>
        <div style={{ minHeight: 880, width: '100%' }}>
          <iframe
            src={snackUrl}
            style={{
              width: '100%',
              height: '880px',
              border: 'none',
              borderRadius: '8px',
              display: 'block',
            }}
            title="Expo Snack Adventure Activity Approval Flow Preview"
          />
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            backgroundColor: '#1E293B',
            color: '#FFFFFF',
            padding: '12px 20px',
            borderRadius: 8,
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            zIndex: 9999,
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default AdventureActivityApprovalFlowDoc;
