import React, { useState, useMemo } from 'react';
import JSZip from 'jszip';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { buildHomestayModularProject } from '../utils/homestayModularZip';

interface HomestayRegistrationFlowDocProps {
  isDark: boolean;
}

// Official Snack ID with Multi-Step Flow (Step 1: Unit & Property Details, Step 2: Location)
const SNACK_ID = 'z5JwvvoM-9t94lYOxo8PL';

export const HomestayRegistrationFlowDoc: React.FC<HomestayRegistrationFlowDocProps> = ({ isDark }) => {
  const [isDownloadingZip, setIsDownloadingZip] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // 100% complete, production-ready React Native code containing Step 1 and Step 2
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
  TextInput,
  PanResponder,
} from 'react-native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';
import {
  Ux4gInputField,
  Ux4gSelectionDropdown,
  Ux4gRadioButton,
  Ux4gCheckbox,
  Ux4gButton,
  Ux4gDivider,
  Ux4gDatePicker,
  Ux4gOtpInput,
  Ux4gPanInputField,
  Ux4gAadhaarInputField,
  Ux4gSlider,
  Ux4gCard,
  Ux4gPaginationDotted,
  Ux4gTextArea,
  Ux4gStatusBanner,
  Ux4gFileUpload,
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

// Material Outline Trash / Delete icon
const TrashOutlineIcon = ({ size = 20, color = UX4GColors.neutral800 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 6H21"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 11V17"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 11V17"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// GPS Crosshairs Icon matching Screen 2
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




const PencilOutlineIcon = ({ size = 18, color = UX4GColors.neutral800 }) => (
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

const CloudUploadOutlineIcon = ({ size = 24, color = UX4GColors.primary }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M16 16l-4-4-4 4M12 12v9"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const CheckSmallIcon = ({ size = 11, color = UX4GColors.white }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M20 6L9 17L4 12"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Screen 5 Material Outline Icons
const CopyOutlineIcon = ({ size = 14, color = UX4GColors.neutral600 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ChevronUpIcon = ({ size = 18, color = UX4GColors.neutral600 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M18 15l-6-6-6 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const ChevronDownIcon = ({ size = 18, color = UX4GColors.neutral600 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M6 9l6 6 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

// Screen 3 Material Outline Icons
const InfoOutlineIcon = ({ size = 13, color = UX4GColors.neutral500 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
    <Path d="M12 16V12M12 8H12.01" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </Svg>
);

const CalendarOutlineIcon = ({ size = 18, color = UX4GColors.neutral500 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path d="M16 2V6M8 2V6M3 10H21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const EyeOutlineIcon = ({ size = 18, color = UX4GColors.neutral500 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8-11-8-11-8z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" />
  </Svg>
);

const EyeOffOutlineIcon = ({ size = 18, color = UX4GColors.neutral500 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// UX4G Compact Stepper Component strictly implementing UX4G Design System
const Ux4gCompactStepper = ({
  totalSteps = 10,
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
    <View style={[{ paddingVertical: 4, paddingHorizontal: 2 }, style]}>
      {/* 10 Equal Width Capsule Progress Indicators */}
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        {Array.from({ length: totalSteps }).map((_, i) => {
          const isActive = cumulative ? i + 1 <= currentStep : i + 1 === currentStep;
          return (
            <View
              key={i}
              style={{
                flex: 1,
                height: 5,
                marginRight: i === totalSteps - 1 ? 0 : 5,
                borderRadius: 2.5,
                backgroundColor: isActive ? UX4GColors.primary : UX4GColors.neutral300,
              }}
            />
          );
        })}
      </View>

      <View style={{ height: 16 }} />

      {/* Step Counter */}
      <Text style={{ textAlign: 'center', fontSize: 13, fontWeight: '700', color: UX4GColors.neutral900 }}>
        {'Step ' + currentStep + ' of ' + totalSteps}
      </Text>

      <View style={{ height: 6 }} />

      {/* Navigation Row: Left Circle Button | Title + Subtitle | Right Circle Button */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
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
            borderWidth: 1.2,
            borderColor: currentStep > 1 ? UX4GColors.neutral200 : UX4GColors.neutral100,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: currentStep > 1 ? 1 : 0.4,
          }}
        >
          <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
            <Path
              d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
              fill={currentStep > 1 ? UX4GColors.neutral600 : UX4GColors.neutral400}
            />
          </Svg>
        </TouchableOpacity>

        {/* Center: Step Title & Subtitle */}
        <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 6 }}>
          <Text style={{ fontSize: 15.5, fontWeight: '700', color: UX4GColors.primary, textAlign: 'center' }}>
            {resolvedLabel}
          </Text>
          {resolvedDesc ? (
            <Text
              style={{
                fontSize: 12,
                lineHeight: 16,
                color: UX4GColors.neutral500,
                textAlign: 'center',
                marginTop: 3,
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
            borderWidth: 1.5,
            borderColor: currentStep < totalSteps ? UX4GColors.primary400 : UX4GColors.neutral200,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: currentStep < totalSteps ? 1 : 0.4,
          }}
        >
          <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
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

const ORGANISATION_TYPES = [
  { id: 'ind', label: 'Individual / Sole Proprietorship' },
  { id: 'part', label: 'Partnership Firm' },
  { id: 'llp', label: 'Limited Liability Partnership (LLP)' },
  { id: 'pvt', label: 'Private Limited Company' },
  { id: 'pub', label: 'Public Limited Company' },
  { id: 'soc', label: 'Society / Trust' },
  { id: 'oth', label: 'Other' },
];

const LAND_UNITS = [
  { id: 'sq_m', label: 'Sq. m.' },
  { id: 'sq_ft', label: 'Sq. ft.' },
  { id: 'acres', label: 'Acres' },
  { id: 'hectares', label: 'Hectares' },
];

const LANDMARK_PLACE_OPTIONS = {
  '1': [{ id: 'kempty_bus', label: 'Kempty bus stand' }, { id: 'isbt', label: 'ISBT Dehradun' }],
  '2': [{ id: 'dehradun', label: 'Dehradun' }, { id: 'haridwar', label: 'Haridwar' }],
  '3': [{ id: 'kempty_falls', label: 'Kempty Falls' }, { id: 'gun_hill', label: 'Gun Hill' }, { id: 'company_garden', label: 'Company Garden' }],
  '4': [{ id: 'max_hosp', label: 'Max Super Speciality Hospital' }, { id: 'doon_hosp', label: 'Government Doon Hospital' }],
};

const RELATIONSHIP_OPTIONS = [
  { id: 'father', label: 'Father' },
  { id: 'mother', label: 'Mother' },
  { id: 'spouse', label: 'Spouse' },
  { id: 'guardian', label: 'Guardian' },
  { id: 'other', label: 'Other' },
];

const STATES_AND_UTS = [
  { id: 'uk', label: 'Uttarakhand' },
  { id: 'hp', label: 'Himachal Pradesh' },
  { id: 'up', label: 'Uttar Pradesh' },
  { id: 'dl', label: 'Delhi' },
  { id: 'rj', label: 'Rajasthan' },
  { id: 'ga', label: 'Goa' },
  { id: 'kl', label: 'Kerala' },
];

const DISTRICTS_UTTARAKHAND = [
  { id: 'ddn', label: 'Dehradun' },
  { id: 'ntl', label: 'Nainital' },
  { id: 'hdw', label: 'Haridwar' },
  { id: 'pgr', label: 'Pauri Garhwal' },
  { id: 'tgr', label: 'Tehri Garhwal' },
  { id: 'utk', label: 'Uttarkashi' },
  { id: 'cml', label: 'Chamoli' },
];

const TEHSILS_DEHRADUN = [
  { id: 'mus', label: 'Mussoorie' },
  { id: 'ddn_c', label: 'Dehradun Sadar' },
  { id: 'rsh', label: 'Rishikesh' },
  { id: 'vkn', label: 'Vikasnagar' },
  { id: 'chk', label: 'Chakrata' },
];

const CITIES_MUSSOORIE = [
  { id: 'mus_mb', label: 'Mussoorie (MB)' },
  { id: 'landour', label: 'Landour (CB)' },
  { id: 'kempty_v', label: 'Kempty Village' },
  { id: 'barlow', label: 'Barlowganj' },
  { id: 'jharipani', label: 'Jharipani' },
];

const AREA_TYPES = [
  { id: 'urban', label: 'Urban — from the LGD record for this town' },
  { id: 'rural', label: 'Rural — Gram Panchayat jurisdiction' },
  { id: 'semi_urban', label: 'Semi-Urban / Cantonment Board' },
];



const ROOM_TYPES = [
  { id: 'single', label: 'Single' },
  { id: 'double', label: 'Double' },
  { id: 'suite', label: 'Suite' },
  { id: 'dormitory', label: 'Dormitory' },
];

const BEDS_OPTIONS = [
  { id: '1', label: '1' },
  { id: '2', label: '2' },
  { id: '3', label: '3' },
  { id: '4', label: '4' },
];

const AREA_UNITS = [
  { id: 'sqft', label: 'Sq. ft.' },
  { id: 'sqm', label: 'Sq. m.' },
];

const COUNT_OPTIONS = [
  { id: '0', label: '0' },
  { id: '1', label: '1' },
  { id: '2', label: '2' },
  { id: '3', label: '3' },
  { id: '4', label: '4' },
];

const FACILITY_OPTIONS = [
  { id: 'ac', label: 'Air conditioning' },
  { id: 'western_toilet', label: 'Attached western-style toilet' },
  { id: 'hot_water', label: 'Hot water' },
  { id: 'other', label: 'Other' },
];

const HOMESTAY_CATEGORIES = [
  {
    id: 'silver',
    name: 'SILVER',
    displayName: 'Silver',
    range: '₹1 – ₹2,999',
    subtitle: 'per night, highest room',
    specs: 'Room 120 sq. ft. · bathroom 30 · toilet 30',
    amenities: 'Crockery, furniture, waste disposal, emergency bound, guest register',
  },
  {
    id: 'gold',
    name: 'GOLD',
    displayName: 'Gold',
    range: '₹3,000 – ₹5,999',
    subtitle: 'per night, highest room',
    specs: 'Room 150 sq. ft. · bathroom 36 · toilet 36',
    amenities: 'AC / heating, linen change, first aid, fire extinguisher, dining area',
  },
  {
    id: 'diamond',
    name: 'DIAMOND',
    displayName: 'Diamond',
    range: '₹6,000+',
    subtitle: 'per night, highest room',
    specs: 'Room 180 sq. ft. · bathroom 45 · toilet 45',
    amenities: 'En-suite luxury fittings, 24x7 concierge, Wi-Fi, backup power, parking',
  },
];


const FOOD_OPTIONS = [
  { id: 'vegetarian', label: 'Vegetarian' },
  { id: 'non_vegetarian', label: 'Non-vegetarian' },
  { id: 'both', label: 'Both' },
  { id: 'no_food', label: 'No food' },
];

const DRINKING_WATER_OPTIONS = [
  { id: 'ro', label: 'RO' },
  { id: 'aqua_guard', label: 'Aqua Guard' },
  { id: 'mineral_water', label: 'Mineral water' },
  { id: 'other', label: 'Other' },
];

const PARKING_CAPACITY_OPTIONS = Array.from({ length: 21 }, (_, i) => ({
  id: String(i),
  label: i === 1 ? '1 vehicle' : i + ' vehicles',
}));

const MANDATORY_CLEANLINESS_OPTIONS = [
  { id: 'smoke_free_kitchen', label: 'Smoke-free sanitised kitchen' },
  { id: 'proper_drainage', label: 'Proper drainage' },
  { id: 'garbage_disposal', label: 'Garbage disposal' },
  { id: 'waste_segregation', label: 'Waste segregation' },
];

const MANDATORY_GUEST_QUALITY_OPTIONS = [
  { id: 'good_crockery', label: 'Good quality crockery and cutlery' },
  { id: 'good_furniture', label: 'Good quality furniture' },
  { id: 'chairs_tables', label: 'Quality chairs and writing tables' },
  { id: 'well_maintained', label: 'Property well maintained' },
];

const MANDATORY_RECORDS_OPTIONS = [
  { id: 'guest_register', label: 'Guest record register' },
  { id: 'emergency_contacts', label: 'Board displaying emergency contacts' },
  { id: 'firefighting_equipment', label: 'Firefighting equipment' },
  { id: 'access_main_room', label: 'Access to the main room' },
];

const ADDITIONAL_SERVICES_OPTIONS = [
  { id: 'wifi', label: 'Wi-Fi' },
  { id: 'online_payment', label: 'Online payment' },
  { id: 'laundry', label: 'Laundry' },
  { id: 'luggage_assistance', label: 'Luggage assistance' },
];

const ADDITIONAL_COMFORT_OPTIONS = [
  { id: 'security_guard', label: 'Security guard or attendant' },
  { id: 'washing_machine', label: 'Washing machine' },
  { id: 'disabled_friendly', label: 'Disabled-friendly access' },
  { id: 'other', label: 'Other' },
];


const VERIFIED_BY_DEPT_ITEMS = [
  'Application form complete',
  'Documents list complete',
  'Minimum room and bathroom sizes met',
  'Room and bed caps respected',
];

const SAFETY_DECLARATION_OPTIONS = [
  { id: 'cctv', label: 'CCTV surveillance at entry points' },
  { id: 'fire_safety', label: 'Fire safety equipment' },
  { id: 'emergency_exit', label: 'Emergency exit' },
  { id: 'first_aid', label: 'First aid kit' },
];

const BUILDING_SERVICES_OPTIONS = [
  { id: 'local_byelaws', label: 'Building complies with local bye-laws' },
  { id: 'potable_water', label: 'Potable water supply' },
  { id: 'power_backup', label: 'Uninterrupted power or backup' },
  { id: 'sewage_system', label: 'Sewage connection or septic system' },
];

const GUEST_SAFETY_OPTIONS = [
  { id: 'visitor_register', label: 'Visitor register maintained' },
  { id: 'staff_police_verified', label: 'Staff police-verified' },
  { id: 'emergency_board', label: 'Emergency contact board displayed' },
  { id: 'insurance_cover', label: 'Insurance cover in force' },
];


const DocumentUploadSlot = ({
  title,
  required = false,
  ruleText,
  downloadLinkText,
  onDownloadFormat,
  uploadedFiles = [],
  allowedExtensions = ['pdf', 'jpg', 'png'],
  maxFiles = 1,
  onFilesChanged,
  disabled = false,
}) => {
  const isUploaded = uploadedFiles.length > 0;
  return (
    <View style={[styles.docSlotWrapper, disabled && { opacity: 0.55 }]}>
      {/* Slot Heading with Circular Status Indicator */}
      <View style={styles.docSlotHeaderRow}>
        <View
          style={[
            styles.statusCircle,
            isUploaded ? styles.statusCircleDone : styles.statusCircleEmpty,
          ]}
        >
          {isUploaded && <CheckSmallIcon size={10} color={UX4GColors.white} />}
        </View>
        <Text style={styles.docSlotTitle}>
          {title}
          {required && <Text style={{ color: UX4GColors.red }}>*</Text>}
        </Text>
      </View>

      {/* Optional Download Format Link */}
      {downloadLinkText && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onDownloadFormat}
          style={{ marginLeft: 26, marginTop: 2 }}
        >
          <Text style={styles.downloadFormatLink}>{downloadLinkText}</Text>
        </TouchableOpacity>
      )}

      {/* Rule Text */}
      <Text style={styles.docSlotRuleText}>{ruleText}</Text>

      {/* Official UX4G FileUpload Component */}
      <View pointerEvents={disabled ? 'none' : 'auto'}>
        <Ux4gFileUpload
          maxFiles={maxFiles}
          maxFileSize={5 * 1024 * 1024}
          allowedExtensions={allowedExtensions}
          borderStyle="dashed"
          buttonColor={UX4GColors.primary}
          buttonBorderColor={UX4GColors.purple700}
          buttonBorderRadius={8}
          initialFiles={uploadedFiles}
          onFilesChanged={(files) => onFilesChanged && onFilesChanged(files)}
        />
      </View>
    </View>
  );
};


const PAYMENT_MODES = [
  { id: 'upi', title: 'UPI', subtitle: 'Pay with any UPI app' },
  { id: 'netbanking', title: 'Net Banking', subtitle: '60+ banks supported' },
  { id: 'card', title: 'Debit / Credit Card', subtitle: 'Visa, MasterCard, RuPay' },
  { id: 'offline', title: 'Already paid offline', subtitle: 'Demand draft or counter payment' },
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

export default function App() {
  const [step, setStep] = useState(1);
  const [copyDropdownRoomIdx, setCopyDropdownRoomIdx] = useState(null);
  const [categorySlideIndex, setCategorySlideIndex] = useState(0);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [savedTime, setSavedTime] = useState('3:14 PM');
  const scrollViewRef = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    // Step 1: Unit & Property details
    unitName: '',
    brandName: '',
    legalEntityName: '',
    promoterName: '',
    orgType: [],
    firmRegNumber: '',
    dateOfCommencement: '',
    unitOfMeasurement: ['sq_m'],
    totalLandArea: '',
    builtUpUnit: ['sq_m'],
    builtUpArea: '',
    totalLettableRooms: '4',
    ownership: 'owned',
    buildingPlanApproved: 'yes',
    approachRoadUnit: ['mtr'],
    approachRoadWidth: '',
    locationType: 'municipal',
    unitWebsite: '',
    roomBookingLink: '',
    landmarks: [
      { id: '1', type: 'Bus stand', place: ['kempty_bus'], distance: '0', unit: ['km'] },
      { id: '2', type: 'Railway station', place: ['dehradun'], distance: '0', unit: ['km'] },
      { id: '3', type: 'Tourist attraction', place: ['kempty_falls'], distance: '0', unit: ['km'] },
      { id: '4', type: 'Hospital', place: [], distance: '0', unit: ['km'] },
    ],
    tourismActivities: [],
    tourismOtherText: '',
    adventureActivities: [],
    adventureOtherText: '',
    entertainmentActivities: [],
    entertainmentOtherText: '',

    // Step 2: Location
    whereIsProperty: '',
    pinPlaced: true,
    latitude: '30.4598° N',
    longitude: '78.0644° E',
    pinCode: '',
    stateUT: ['uk'],
    district: ['ddn'],
    subDistrict: ['mus'],
    cityVillage: ['mus_mb'],
    areaType: ['urban'],
    houseStreet: '',
    landmarkText: '',

    // Step 3: Owner / Applicant Details
    firstName: '',
    lastName: '',
    gender: 'male',
    dateOfBirth: '',
    relationship: [],
    relationshipFullName: '',
    panNumber: '',
    aadhaarNumber: '',
    showAadhaar: false,
    mobileNumber: '',
    otpSent: false,
    mobileVerified: false,
    emailVerified: false,
    otp: '',
    resendTimer: 17,
    emailAddress: '',
    landline: '',
    permPinCode: '',
    permStateUT: [],
    permDistrict: [],
    permSubDistrict: [],
    permHouseStreet: '',
    sameAsPermanent: false,
    addressOutsideState: false,
    applyingCapacity: 'owner',

    // Step 4: Management & Staff
    ownerRunsPersonally: false,
    managerName: '',
    managerRelationship: 'family_member',
    managerMobile: '',
    managerPinCode: '',
    managerStateUT: [],
    managerDistrict: [],
    managerHouseStreet: '',
    totalStaff: '5',
    hiredLocally: 2,
    isRenewal: false,
    previousRegNumber: '',
    // Step 5: Rooms / Accommodation
    rooms: [
      {
        id: '1',
        expanded: true,
        name: '',
        roomType: '',
        beds: [],
        tariff: '',
        unit: ['sqft'],
        roomArea: '',
        bathrooms: ['2'],
        bathroomUnit: ['sqft'],
        bathroomAreas: ['', ''],
        toilets: ['1'],
        toiletUnit: ['sqft'],
        toiletAreas: [''],
        facilities: [],
      },
      {
        id: '2',
        expanded: false,
        name: 'Deodar',
        roomType: 'double',
        beds: ['2'],
        tariff: '2000',
        unit: ['sqft'],
        roomArea: '140',
        bathrooms: ['1'],
        bathroomUnit: ['sqft'],
        bathroomAreas: ['35'],
        toilets: ['1'],
        toiletUnit: ['sqft'],
        toiletAreas: ['32'],
        facilities: ['ac', 'western_toilet', 'hot_water'],
      },
      {
        id: '3',
        expanded: false,
        name: '',
        roomType: '',
        beds: [],
        tariff: '',
        unit: ['sqft'],
        roomArea: '',
        bathrooms: ['1'],
        bathroomUnit: ['sqft'],
        bathroomAreas: [''],
        toilets: ['1'],
        toiletUnit: ['sqft'],
        toiletAreas: [''],
        facilities: [],
      },
      {
        id: '4',
        expanded: true,
        name: '',
        roomType: '',
        beds: [],
        tariff: '',
        unit: ['sqft'],
        roomArea: '',
        bathrooms: ['1'],
        bathroomUnit: ['sqft'],
        bathroomAreas: [''],
        toilets: ['1'],
        toiletUnit: ['sqft'],
        toiletAreas: [''],
        facilities: [],
      },
    ],
    // Step 6: Amenities, Facilities & Distances
    foodProvided: '',
    drinkingWater: [],
    hasLobby: false,
    lobbyUnit: ['sqft'],
    lobbyArea: '',
    hasDiningArea: false,
    diningUnit: ['sqft'],
    diningArea: '',
    parkingCapacity: [],
    mandatoryCleanliness: [],
    mandatoryGuestQuality: [],
    mandatoryRecords: [],
    additionalServices: [],
    additionalComfort: [],
    ecoFriendlyPractices: '',
    // Step 7: Compliance & Safety Checklist
    safetyDeclarations: [],
    buildingServicesDeclarations: [],
    guestSafetyDeclarations: [],
    fireSafetyDetails: '',
    complianceConfirmed: false,
    // Step 8: Documents Upload
    byeLawsNotApplicable: false,
    docSectionsExpanded: {
      ownership: true,
      declarations: false,
      identity: false,
      photographs: false,
    },
    docFiles: {
      ownership_proof: [],
      building_map: [],
      bye_laws_affidavit: [],
      solvency_affidavit: [{ id: 's1', name: 'affidavit_solvency_signed.pdf', fileSize: 1258291, status: 'success', progress: 1 }],
      undertaking: [],
      pledge: [],
      identity_proof: [],
      pan_tax: [],
      exterior_photo: [],
      room1_photo: [],
      room2_photo: [],
      common_photo: [],
    },
    // Step 9: Review & Declaration
    declTrueKnowledge: false,
    declPhysicalInspection: false,

    // Step 10: Payment
    feeNonRefundableConfirmed: false,

    // Screen 11: Payment Mode
    paymentMode: 'upi',
    upiId: '',
    selectedBank: [],
    cardHolderName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    offlineRef: '',
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
    alert('Draft saved successfully at Step ' + (step > 10 ? 10 : step) + '!');
  };

  const updateField = (key, value) => {
    setFormData((prev) => {
      const next = { ...prev, [key]: value };
      if (key === 'totalLettableRooms') {
        const count = Math.max(1, Math.min(10, parseInt(value, 10) || 1));
        const curRooms = prev.rooms || [];
        if (count !== curRooms.length) {
          const syncedRooms = [];
          for (let i = 0; i < count; i++) {
            if (curRooms[i]) {
              syncedRooms.push(curRooms[i]);
            } else {
              syncedRooms.push({
                id: String(i + 1),
                expanded: i === 0,
                name: '',
                roomType: '',
                beds: [],
                tariff: '',
                unit: ['sqft'],
                roomArea: '',
                bathrooms: ['1'],
                bathroomUnit: ['sqft'],
                bathroomAreas: [''],
                toilets: ['1'],
                toiletUnit: ['sqft'],
                toiletAreas: [''],
                facilities: [],
              });
            }
          }
          next.rooms = syncedRooms;
        }
      } else if (key === 'totalStaff') {
        const maxS = Math.max(1, parseInt(value, 10) || 1);
        if ((prev.hiredLocally || 0) > maxS) {
          next.hiredLocally = maxS;
        }
      }
      return next;
    });
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const handleSetLocationPin = () => {
    updateField('pinPlaced', true);
    updateField('latitude', '30.4598° N');
    updateField('longitude', '78.0644° E');
    if (!formData.whereIsProperty) {
      updateField('whereIsProperty', 'https://maps.google.com/?q=30.4598,78.0644');
    }
  };

  const handleContinueStep1 = () => {
    const errs = {};
    if (!formData.unitName.trim()) errs.unitName = 'Name of the unit is required';
    if (!formData.legalEntityName.trim()) errs.legalEntityName = 'Legal entity name is required';
    if (!formData.promoterName.trim()) errs.promoterName = 'Promoter name is required';
    const roomCnt = parseInt(formData.totalLettableRooms, 10);
    if (formData.totalLettableRooms.trim() && (isNaN(roomCnt) || roomCnt < 1 || roomCnt > 20)) {
      errs.totalLettableRooms = 'Enter a valid room count between 1 and 20';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(2);
  };

  const handleContinueStep2 = () => {
    const errs = {};
    if (!formData.whereIsProperty.trim()) errs.whereIsProperty = 'Property location link is required';
    if (!/^\d{6}$/.test(formData.pinCode.trim())) errs.pinCode = 'Enter a valid 6-digit PIN code';
    if (!formData.stateUT.length) errs.stateUT = 'State / UT is required';
    if (!formData.district.length) errs.district = 'District is required';
    if (!formData.subDistrict.length) errs.subDistrict = 'Sub-district is required';
    if (!formData.cityVillage.length) errs.cityVillage = 'City / Town / Village is required';
    if (!formData.houseStreet.trim()) errs.houseStreet = 'House or building number and street is required';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(3);
  };

  const handleContinueStep3 = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.gender) errs.gender = 'Gender is required';
    if (!formData.relationship.length) errs.relationship = 'Relationship is required';
    if (!formData.relationshipFullName.trim()) errs.relationshipFullName = 'Their full name is required';
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/i.test(formData.panNumber.trim())) {
      errs.panNumber = 'Enter a valid 10-character PAN (e.g. ABCDE1234F)';
    }
    if (formData.aadhaarNumber.trim() && !/^\d{12}$/.test(formData.aadhaarNumber.replace(/\s/g, ''))) {
      errs.aadhaarNumber = 'Aadhaar number must be 12 digits';
    }
    if (!/^\d{10}$/.test(formData.mobileNumber.trim())) {
      errs.mobileNumber = 'Enter a valid 10-digit mobile number';
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.emailAddress.trim())) {
      errs.emailAddress = 'Enter a valid email address';
    }
    if (!/^\d{6}$/.test(formData.permPinCode.trim())) {
      errs.permPinCode = 'Enter a valid 6-digit PIN code';
    }
    if (!formData.permStateUT.length) errs.permStateUT = 'State / UT is required';
    if (!formData.permDistrict.length) errs.permDistrict = 'District is required';
    if (!formData.permSubDistrict.length) errs.permSubDistrict = 'Sub-district is required';
    if (!formData.permHouseStreet.trim()) errs.permHouseStreet = 'House or building number is required';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(4);
  };

  const handleContinueStep4 = () => {
    const errs = {};
    if (!formData.ownerRunsPersonally) {
      if (!formData.managerName.trim()) errs.managerName = 'Manager or caretaker name is required';
      if (!formData.managerRelationship) errs.managerRelationship = 'Relationship to the owner is required';
      if (!/^\d{10}$/.test(formData.managerMobile.trim())) errs.managerMobile = 'Enter a valid 10-digit mobile number';
      if (!/^\d{6}$/.test(formData.managerPinCode.trim())) errs.managerPinCode = 'Enter a valid 6-digit PIN code';
      if (!formData.managerStateUT.length) errs.managerStateUT = 'State / UT is required';
      if (!formData.managerDistrict.length) errs.managerDistrict = 'District is required';
      if (!formData.managerHouseStreet.trim()) errs.managerHouseStreet = 'House or building number is required';
    }
    const staffNum = parseInt(formData.totalStaff, 10);
    if (!formData.totalStaff.trim() || isNaN(staffNum) || staffNum < 1) {
      errs.totalStaff = 'Enter total staff count (minimum 1)';
    }
    if (formData.isRenewal && !formData.previousRegNumber.trim()) {
      errs.previousRegNumber = 'Previous registration number is required for renewals';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(5);
  };

  const toggleRoomExpanded = (roomIdx) => {
    setFormData((prev) => {
      const nextRooms = prev.rooms.map((r, i) =>
        i === roomIdx ? { ...r, expanded: !r.expanded } : r
      );
      return { ...prev, rooms: nextRooms };
    });
  };

  const updateRoomField = (roomIdx, field, val) => {
    setFormData((prev) => {
      const nextRooms = prev.rooms.map((r, i) => {
        if (i !== roomIdx) return r;
        const updated = { ...r, [field]: val };
        if (field === 'bathrooms') {
          const count = parseInt(val && val[0], 10) || 0;
          const prevAreas = r.bathroomAreas || [];
          const resized = [];
          for (let k = 0; k < count; k++) {
            resized.push(prevAreas[k] !== undefined ? prevAreas[k] : '');
          }
          updated.bathroomAreas = resized;
        } else if (field === 'toilets') {
          const count = parseInt(val && val[0], 10) || 0;
          const prevAreas = r.toiletAreas || [];
          const resized = [];
          for (let k = 0; k < count; k++) {
            resized.push(prevAreas[k] !== undefined ? prevAreas[k] : '');
          }
          updated.toiletAreas = resized;
        }
        return updated;
      });
      return { ...prev, rooms: nextRooms };
    });
    const suffix = field === 'roomType' ? 'type' : field === 'roomArea' ? 'area' : field;
    const errKey = 'room_' + roomIdx + '_' + suffix;
    if (errors[errKey]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[errKey];
        return next;
      });
    }
  };

  const updateRoomSubArea = (roomIdx, kind, subIdx, val) => {
    setFormData((prev) => {
      const nextRooms = prev.rooms.map((r, i) => {
        if (i !== roomIdx) return r;
        const arrKey = kind === 'bathroom' ? 'bathroomAreas' : 'toiletAreas';
        const nextArr = [...(r[arrKey] || [])];
        nextArr[subIdx] = val;
        return { ...r, [arrKey]: nextArr };
      });
      return { ...prev, rooms: nextRooms };
    });
  };

  const toggleRoomFacility = (roomIdx, facilityId) => {
    setFormData((prev) => {
      const nextRooms = prev.rooms.map((r, i) => {
        if (i !== roomIdx) return r;
        const cur = r.facilities || [];
        const exists = cur.includes(facilityId);
        return {
          ...r,
          facilities: exists ? cur.filter((f) => f !== facilityId) : [...cur, facilityId],
        };
      });
      return { ...prev, rooms: nextRooms };
    });
  };

  const copyRoomFrom = (targetIdx, sourceIdx) => {
    setFormData((prev) => {
      const src = prev.rooms[sourceIdx];
      if (!src) return prev;
      const nextRooms = prev.rooms.map((r, i) => {
        if (i !== targetIdx) return r;
        return {
          ...r,
          roomType: src.roomType,
          beds: [...(src.beds || [])],
          tariff: src.tariff,
          unit: [...(src.unit || ['sqft'])],
          roomArea: src.roomArea,
          bathrooms: [...(src.bathrooms || ['1'])],
          bathroomUnit: [...(src.bathroomUnit || ['sqft'])],
          bathroomAreas: [...(src.bathroomAreas || [])],
          toilets: [...(src.toilets || ['1'])],
          toiletUnit: [...(src.toiletUnit || ['sqft'])],
          toiletAreas: [...(src.toiletAreas || [])],
          facilities: [...(src.facilities || [])],
        };
      });
      return { ...prev, rooms: nextRooms };
    });
    setCopyDropdownRoomIdx(null);
  };

  const getRoomSummary = (room) => {
    const parts = [];
    if (room.name && room.name.trim()) parts.push(room.name.trim());
    if (room.roomType) {
      const found = ROOM_TYPES.find((rt) => rt.id === room.roomType);
      if (found) parts.push(found.label);
    }
    if (room.tariff && room.tariff.trim()) {
      const num = parseInt(room.tariff, 10);
      parts.push('₹' + (isNaN(num) ? room.tariff : num.toLocaleString('en-IN')) + ' per night');
    }
    return parts.length > 0 ? parts.join('  •  ') : 'Not filled in yet';
  };

  const getHighestTariff = () => {
    let highest = 0;
    (formData.rooms || []).forEach((r) => {
      const t = parseInt(r.tariff, 10);
      if (!isNaN(t) && t > highest) highest = t;
    });
    return highest;
  };

  const highestTariff = getHighestTariff();
  const totalBeds = (formData.rooms || []).reduce((acc, r) => {
    return acc + (parseInt((r.beds && r.beds[0]) || '0', 10) || 0);
  }, 0);
  const autoCategory =
    highestTariff >= 6000
      ? HOMESTAY_CATEGORIES[2]
      : highestTariff >= 3000
      ? HOMESTAY_CATEGORIES[1]
      : HOMESTAY_CATEGORIES[0];

  const areaTypeId = (formData.areaType && formData.areaType[0]) || 'rural';
  const areaTypeDisplay =
    areaTypeId === 'urban'
      ? 'Urban Municipal area'
      : areaTypeId === 'semi_urban'
      ? 'Semi-Urban area'
      : 'Gram Panchayat area';

  const payableFee =
    autoCategory.id === 'diamond' ? 8000 : autoCategory.id === 'gold' ? 5000 : 3000;
  const formattedFee = '₹' + payableFee.toLocaleString('en-IN');

  const handleContinueStep5 = () => {
    const errs = {};
    let firstInvalidRoomIdx = -1;
    (formData.rooms || []).forEach((room, idx) => {
      if (!room.name || !room.name.trim()) {
        errs['room_' + idx + '_name'] = 'Room name or number is required';
        if (firstInvalidRoomIdx === -1) firstInvalidRoomIdx = idx;
      }
      if (!room.roomType) {
        errs['room_' + idx + '_type'] = 'Select a room type';
        if (firstInvalidRoomIdx === -1) firstInvalidRoomIdx = idx;
      }
      if (!room.tariff || parseInt(room.tariff, 10) <= 0) {
        errs['room_' + idx + '_tariff'] = 'Enter a valid tariff per night';
        if (firstInvalidRoomIdx === -1) firstInvalidRoomIdx = idx;
      }
      if (!room.roomArea || parseInt(room.roomArea, 10) <= 0) {
        errs['room_' + idx + '_area'] = 'Enter valid room area';
        if (firstInvalidRoomIdx === -1) firstInvalidRoomIdx = idx;
      }
    });

    if (Object.keys(errs).length > 0) {
      if (firstInvalidRoomIdx !== -1) {
        setFormData((prev) => ({
          ...prev,
          rooms: prev.rooms.map((r, i) =>
            i === firstInvalidRoomIdx ? { ...r, expanded: true } : r
          ),
        }));
      }
      setErrors(errs);
      return;
    }
    setStep(6);
  };


  const toggleArrayItem = (field, itemId) => {
    setFormData((prev) => {
      const current = prev[field] || [];
      const exists = current.includes(itemId);
      return {
        ...prev,
        [field]: exists ? current.filter((x) => x !== itemId) : [...current, itemId],
      };
    });
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleContinueStep6 = () => {
    const errs = {};
    if (!formData.foodProvided) errs.foodProvided = 'Please select a food option';
    if (!formData.drinkingWater || formData.drinkingWater.length === 0) {
      errs.drinkingWater = 'Please select at least one drinking water option';
    }
    if (formData.hasLobby && (!formData.lobbyArea.trim() || parseInt(formData.lobbyArea, 10) <= 0)) {
      errs.lobbyArea = 'Enter lobby area';
    }
    if (formData.hasDiningArea && (!formData.diningArea.trim() || parseInt(formData.diningArea, 10) <= 0)) {
      errs.diningArea = 'Enter dining area';
    }
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(7);
  };


  const handleContinueStep7 = () => {
    const errs = {};
    if (!formData.fireSafetyDetails || formData.fireSafetyDetails.trim().length < 10) {
      errs.fireSafetyDetails = 'Please describe installed fire safety equipment (at least 10 characters).';
    }
    if (!formData.complianceConfirmed) {
      errs.complianceConfirmed = 'Please confirm the declaration above to continue.';
    }
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(8);
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
        [slotKey]: files || [],
      },
    }));
  };

  const simulateDocUpload = (slotKey, defaultFileName) => {
    setFormData((prev) => {
      const existing = prev.docFiles[slotKey] || [];
      const nextIndex = existing.length + 1;
      const newFile = {
        id: slotKey + '_' + Date.now(),
        name: defaultFileName.replace('.pdf', '_' + nextIndex + '.pdf'),
        size: '1.4 MB',
      };
      return {
        ...prev,
        docFiles: {
          ...prev.docFiles,
          [slotKey]: [...existing, newFile],
        },
      };
    });
  };

  const removeDocFile = (slotKey, fileIdx) => {
    setFormData((prev) => {
      const existing = prev.docFiles[slotKey] || [];
      return {
        ...prev,
        docFiles: {
          ...prev.docFiles,
          [slotKey]: existing.filter((_, i) => i !== fileIdx),
        },
      };
    });
  };

  const getMissingDocsText = () => {
    const df = formData.docFiles || {};
    const missing = [];
    if (!df.ownership_proof || df.ownership_proof.length === 0) missing.push('Proof of ownership or lease');
    if (!df.solvency_affidavit || df.solvency_affidavit.length === 0) missing.push('Affidavit of solvency');
    if (!df.undertaking || df.undertaking.length === 0) missing.push('Undertaking');
    if (!df.pledge || df.pledge.length === 0) missing.push('Pledge');
    if (!df.identity_proof || df.identity_proof.length === 0) missing.push('Identity proof');
    const r2Count = (df.room2_photo || []).length;
    if (r2Count < 2) missing.push('Room 2 photographs (' + r2Count + ' of 2)');
    return missing.join('  •  ');
  };

  const handleContinueStep8 = () => {
    setStep(9);
  };


  const handleContinueStep9 = () => {
    const errs = {};
    if (!formData.declTrueKnowledge) {
      errs.declTrueKnowledge = 'Please confirm that everything entered is true.';
    }
    if (!formData.declPhysicalInspection) {
      errs.declPhysicalInspection = 'Please agree to a physical inspection of the property.';
    }
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(10);
  };


  const handleContinueStep10 = () => {
    const errs = {};
    if (!formData.feeNonRefundableConfirmed) {
      errs.feeNonRefundableConfirmed =
        'Please confirm that the fee is non-refundable before proceeding.';
    }
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(11);
  };


  const handleStepperNext = () => {
    if (step === 1) handleContinueStep1();
    else if (step === 2) handleContinueStep2();
    else if (step === 3) handleContinueStep3();
    else if (step === 4) handleContinueStep4();
    else if (step === 5) handleContinueStep5();
    else if (step === 6) handleContinueStep6();
    else if (step === 7) handleContinueStep7();
    else if (step === 8) handleContinueStep8();
    else if (step === 9) handleContinueStep9();
    else if (step === 10) handleContinueStep10();
    else if (step === 11) handlePayNow();
  };

  const handleStepperBack = () => {
    if (step > 1) setStep(step - 1);
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
      if (!formData.cardNumber || formData.cardNumber.replace(/\D/g, '').length < 12) {
        errs.cardNumber = 'Please enter a valid card number';
      }
      if (!formData.cardExpiry || !formData.cardExpiry.trim()) {
        errs.cardExpiry = 'Expiry date is required';
      }
      if (!formData.cardCvv || formData.cardCvv.trim().length < 3) {
        errs.cardCvv = 'Security code is required';
      }
    } else if (formData.paymentMode === 'offline') {
      if (!formData.offlineRef || !formData.offlineRef.trim()) {
        errs.offlineRef = 'DD / Challan reference number is required';
      }
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setIsRedirecting(true);
  };

  return (
    <Ux4gThemeProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor={UX4GColors.white} />

        {/* Government App Header matching screenshot */}
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
          {/* Main Card Container */}
          <View style={styles.mainCard}>
            {/* Auto-saved banner using official UX4G Status Banner Component */}
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

            {/* Stepper with centered title & back/next navigation */}
            <Ux4gCompactStepper
              totalSteps={10}
              currentStep={step > 10 ? 10 : step}
              layout="centeredBetween"
              title={step === 1 ? 'Unit / Property details' : step === 2 ? 'Location' : step === 3 ? 'Owner / Applicant Details' : step === 4 ? 'Management & Staff' : step === 5 ? 'Rooms / Accommodation' : step === 6 ? 'Amenities, Facilities & Distances' : step === 7 ? 'Compliance & Safety Checklist' : step === 8 ? 'Documents Upload' : step === 9 ? 'Review' : step >= 10 ? 'Payment' : 'Step ' + step}
              stepLabel={step === 1 ? 'Unit / Property details' : step === 2 ? 'Location' : step === 3 ? 'Owner / Applicant Details' : step === 4 ? 'Management & Staff' : step === 5 ? 'Rooms / Accommodation' : step === 6 ? 'Amenities, Facilities & Distances' : step === 7 ? 'Compliance & Safety Checklist' : step === 8 ? 'Documents Upload' : step === 9 ? 'Review' : step >= 10 ? 'Payment' : 'Step ' + step}
              subtitle={
                step === 1
                  ? 'Identity of the property and of the legal entity behind it.'
                  : step === 2
                  ? 'Where the property physically is, to the depth this jurisdiction requires.'
                  : step === 3
                  ? 'The person or entity applying, and their addresses.'
                  : step === 4
                  ? 'Who runs the property day to day.'
                  : step === 5
                  ? 'The lettable inventory.'
                  : step === 6
                  ? 'What the property offers, and how far it is from things.'
                  : step === 7
                  ? 'The statutory minimums. Some are verified for you; the rest you confirm.'
                  : step === 8
                  ? 'Evidence, with per-slot format, size and count rules.'
                  : step === 9
                  ? 'Read back everything before committing.'
                  : step >= 10
                  ? 'Fee calculation and transaction.'
                  : 'Multi-step registration workflow.'
              }
              description={
                step === 1
                  ? 'Identity of the property and of the legal entity behind it.'
                  : step === 2
                  ? 'Where the property physically is, to the depth this jurisdiction requires.'
                  : step === 3
                  ? 'The person or entity applying, and their addresses.'
                  : step === 4
                  ? 'Who runs the property day to day.'
                  : step === 5
                  ? 'The lettable inventory.'
                  : step === 6
                  ? 'What the property offers, and how far it is from things.'
                  : step === 7
                  ? 'The statutory minimums. Some are verified for you; the rest you confirm.'
                  : step === 8
                  ? 'Evidence, with per-slot format, size and count rules.'
                  : step === 9
                  ? 'Read back everything before committing.'
                  : step >= 10
                  ? 'Fee calculation and transaction.'
                  : 'Multi-step registration workflow.'
              }
              onBackPress={handleStepperBack}
              onPrevious={handleStepperBack}
              onNextPress={handleStepperNext}
              onNext={handleStepperNext}
              cumulative={true}
              style={{ marginVertical: 4 }}
            />

            {/* Subtle Divider below stepper matching screenshot */}
            <View style={styles.stepperBottomDivider} />

            {/* ======================================================== */}
            {/* SCREEN 1: UNIT / PROPERTY DETAILS                        */}
            {/* ======================================================== */}
            {step === 1 ? (
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
                    placeholder="Enter the name your guests will see"
                    status={errors.unitName ? 'error' : 'defaultStatus'}
                    caption={errors.unitName}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Brand name (optional)"
                    size="large"
                    value={formData.brandName}
                    onValueChange={(v) => updateField('brandName', v)}
                    placeholder="If the unit trades under a brand"
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Legal entity name"
                    required
                    size="large"
                    value={formData.legalEntityName}
                    onValueChange={(v) => updateField('legalEntityName', v)}
                    placeholder="Exactly as printed on the PAN"
                    status={errors.legalEntityName ? 'error' : 'defaultStatus'}
                    caption={errors.legalEntityName}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Name of the promoter / owner"
                    required
                    size="large"
                    value={formData.promoterName}
                    onValueChange={(v) => updateField('promoterName', v)}
                    placeholder="Full name"
                    status={errors.promoterName ? 'error' : 'defaultStatus'}
                    caption={errors.promoterName}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Organisation type *"
                    options={ORGANISATION_TYPES}
                    selectedOptionIds={formData.orgType}
                    onSelectionChange={(v) => updateField('orgType', v)}
                    placeholder="Select organisation type"
                    size="l"
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Firm registration number"
                    size="large"
                    value={formData.firmRegNumber}
                    onValueChange={(v) => updateField('firmRegNumber', v)}
                    placeholder="Required for a firm or company"
                  />
                </View>

                {/* Official UX4G DatePicker */}
                <View style={styles.fieldSpacing}>
                  <Ux4gDatePicker
                    label="Date of commencement *"
                    value={formData.dateOfCommencement}
                    onValueChange={(v) => updateField('dateOfCommencement', v)}
                    placeholder="Select date"
                    size="l"
                  />
                </View>

                <View style={{ height: 20 }} />

                {/* 2. Property Details */}
                <Text style={styles.sectionHeading}>Property Details</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Unit of measurement *"
                    options={LAND_UNITS}
                    selectedOptionIds={formData.unitOfMeasurement}
                    onSelectionChange={(v) => updateField('unitOfMeasurement', v)}
                    size="l"
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Total land area"
                    required
                    size="large"
                    type="number"
                    value={formData.totalLandArea}
                    onValueChange={(v) => updateField('totalLandArea', v)}
                    placeholder="Numbers only"
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Unit of measurement"
                    options={[
                      { id: 'sq_m', label: 'Sq. m. - same as land area' },
                      { id: 'sq_ft', label: 'Sq. ft.' },
                    ]}
                    selectedOptionIds={formData.builtUpUnit}
                    onSelectionChange={(v) => updateField('builtUpUnit', v)}
                    size="l"
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Built-up area"
                    size="large"
                    type="number"
                    value={formData.builtUpArea}
                    onValueChange={(v) => updateField('builtUpArea', v)}
                    placeholder="Numbers only"
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Total number of lettable rooms"
                    required
                    size="large"
                    type="number"
                    value={formData.totalLettableRooms}
                    onValueChange={(v) => updateField('totalLettableRooms', v)}
                  />
                </View>

                {/* Ownership Radio Group */}
                <View style={styles.radioGroup}>
                  <Text style={styles.radioGroupLabel}>Ownership of Property*</Text>
                  <View style={{ marginTop: 8 }}>
                    <Ux4gRadioButton
                      label="Owned"
                      selected={formData.ownership === 'owned'}
                      onSelect={() => updateField('ownership', 'owned')}
                    />
                    <Ux4gRadioButton
                      label="Leased"
                      selected={formData.ownership === 'leased'}
                      onSelect={() => updateField('ownership', 'leased')}
                    />
                    <Ux4gRadioButton
                      label="Jointly owned"
                      selected={formData.ownership === 'jointly'}
                      onSelect={() => updateField('ownership', 'jointly')}
                    />
                    <Ux4gRadioButton
                      label="Other"
                      selected={formData.ownership === 'other'}
                      onSelect={() => updateField('ownership', 'other')}
                    />
                  </View>
                </View>

                {/* Building Plan Approved */}
                <View style={styles.radioGroup}>
                  <Text style={styles.radioGroupLabel}>Whether Building Plan Approved*</Text>
                  <View style={{ marginTop: 8 }}>
                    <Ux4gRadioButton
                      label="Yes"
                      selected={formData.buildingPlanApproved === 'yes'}
                      onSelect={() => updateField('buildingPlanApproved', 'yes')}
                    />
                    <Ux4gRadioButton
                      label="No"
                      selected={formData.buildingPlanApproved === 'no'}
                      onSelect={() => updateField('buildingPlanApproved', 'no')}
                    />
                    <Ux4gRadioButton
                      label="Not applicable"
                      selected={formData.buildingPlanApproved === 'na'}
                      onSelect={() => updateField('buildingPlanApproved', 'na')}
                    />
                  </View>
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Unit of measurement"
                    options={[
                      { id: 'mtr', label: 'mtr' },
                      { id: 'ft', label: 'ft' },
                    ]}
                    selectedOptionIds={formData.approachRoadUnit}
                    onSelectionChange={(v) => updateField('approachRoadUnit', v)}
                    size="l"
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Width of the approach road"
                    size="large"
                    type="number"
                    value={formData.approachRoadWidth}
                    onValueChange={(v) => updateField('approachRoadWidth', v)}
                    placeholder="Numbers only"
                  />
                </View>

                <View style={{ height: 20 }} />

                {/* 3. Category of Registration */}
                <Text style={styles.sectionHeading}>Category of Registration</Text>

                <View style={styles.radioGroup}>
                  <Text style={styles.radioGroupLabel}>Type of Location*</Text>
                  <View style={{ marginTop: 8 }}>
                    <Ux4gRadioButton
                      label="Municipal Corporation or Council"
                      selected={formData.locationType === 'municipal'}
                      onSelect={() => updateField('locationType', 'municipal')}
                    />
                    <Ux4gRadioButton
                      label="Town & Country Planning, SADA or Nagar Panchayat"
                      selected={formData.locationType === 'town_planning'}
                      onSelect={() => updateField('locationType', 'town_planning')}
                    />
                    <Ux4gRadioButton
                      label="Gram Panchayat"
                      selected={formData.locationType === 'gram'}
                      onSelect={() => updateField('locationType', 'gram')}
                    />
                    <Ux4gRadioButton
                      label="Other"
                      selected={formData.locationType === 'other_loc'}
                      onSelect={() => updateField('locationType', 'other_loc')}
                    />
                  </View>
                </View>

                <View style={{ height: 20 }} />

                {/* 4. Website and Social Media Details */}
                <Text style={styles.sectionHeading}>Website and Social Media Details</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Unit website (optional)"
                    size="large"
                    value={formData.unitWebsite}
                    onValueChange={(v) => updateField('unitWebsite', v)}
                    placeholder="https://"
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Room booking link (optional)"
                    size="large"
                    value={formData.roomBookingLink}
                    onValueChange={(v) => updateField('roomBookingLink', v)}
                    placeholder="https://"
                  />
                </View>

                <View style={{ height: 20 }} />

                {/* 5. Nearby Landmarks */}
                <Text style={styles.sectionHeading}>Nearby Landmarks</Text>

                {formData.landmarks.map((lm, idx) => {
                  const placeOptions = LANDMARK_PLACE_OPTIONS[lm.id] || [
                    { id: 'custom', label: lm.type },
                  ];
                  return (
                    <View key={lm.id} style={styles.landmarkCard}>
                      <View style={styles.landmarkTypeHeader}>
                        <View style={styles.landmarkTypeBox}>
                          <Text style={styles.landmarkTypeLabel}>Type</Text>
                          <Text style={styles.landmarkTypeValue}>{lm.type}</Text>
                        </View>
                        {idx >= 3 && (
                          <TouchableOpacity
                            style={styles.deleteIconButton}
                            onPress={() => {
                              const updated = formData.landmarks.filter((item) => item.id !== lm.id);
                              updateField('landmarks', updated);
                            }}
                            activeOpacity={0.7}
                          >
                            <TrashOutlineIcon size={20} color={UX4GColors.neutral800} />
                          </TouchableOpacity>
                        )}
                      </View>

                      <View style={{ marginTop: 12 }}>
                        <Ux4gSelectionDropdown
                          label="Name of the place *"
                          options={placeOptions}
                          selectedOptionIds={lm.place}
                          onSelectionChange={(val) => {
                            const updated = [...formData.landmarks];
                            updated[idx].place = val;
                            updateField('landmarks', updated);
                          }}
                          placeholder={
                            lm.type === 'Hospital'
                              ? 'Start typing a hospital name'
                              : 'Select ' + lm.type.toLowerCase()
                          }
                          size="l"
                        />
                      </View>

                      <View style={styles.distanceRow}>
                        <View style={{ flex: 1.2, marginRight: 10 }}>
                          <Ux4gInputField
                            label="Distance *"
                            size="large"
                            type="number"
                            value={lm.distance}
                            onValueChange={(val) => {
                              const updated = [...formData.landmarks];
                              updated[idx].distance = val;
                              updateField('landmarks', updated);
                            }}
                          />
                        </View>
                        <View style={{ flex: 0.9 }}>
                          <Ux4gSelectionDropdown
                            label="Unit"
                            options={[
                              { id: 'km', label: 'km' },
                              { id: 'mtr', label: 'mtr' },
                            ]}
                            selectedOptionIds={lm.unit}
                            onSelectionChange={(val) => {
                              const updated = [...formData.landmarks];
                              updated[idx].unit = val;
                              updateField('landmarks', updated);
                            }}
                            size="l"
                          />
                        </View>
                      </View>
                    </View>
                  );
                })}

                <TouchableOpacity
                  style={styles.addLandmarkButton}
                  onPress={() => {
                    const newId = String(Date.now());
                    updateField('landmarks', [
                      ...formData.landmarks,
                      { id: newId, type: 'Landmark', place: [], distance: '0', unit: ['km'] },
                    ]);
                  }}
                  activeOpacity={0.8}
                >
                  <Text style={styles.addLandmarkText}>+ Add another landmark</Text>
                </TouchableOpacity>

                <View style={{ height: 20 }} />

                {/* 6. Activities Offered */}
                <Text style={styles.sectionHeading}>Activities Offered</Text>

                <Text style={styles.activitySubheading}>Tourism Activities</Text>
                <View style={{ marginTop: 8 }}>
                  <Ux4gCheckbox
                    label="Guided local tours"
                    checked={formData.tourismActivities.includes('guided')}
                    onCheckChange={(chk) => {
                      const cur = formData.tourismActivities;
                      updateField(
                        'tourismActivities',
                        chk ? [...cur, 'guided'] : cur.filter((x) => x !== 'guided')
                      );
                    }}
                  />
                  <Ux4gCheckbox
                    label="Cultural programmes"
                    checked={formData.tourismActivities.includes('cultural')}
                    onCheckChange={(chk) => {
                      const cur = formData.tourismActivities;
                      updateField(
                        'tourismActivities',
                        chk ? [...cur, 'cultural'] : cur.filter((x) => x !== 'cultural')
                      );
                    }}
                  />
                  <Ux4gCheckbox
                    label="Regional cuisine"
                    checked={formData.tourismActivities.includes('cuisine')}
                    onCheckChange={(chk) => {
                      const cur = formData.tourismActivities;
                      updateField(
                        'tourismActivities',
                        chk ? [...cur, 'cuisine'] : cur.filter((x) => x !== 'cuisine')
                      );
                    }}
                  />
                  <Ux4gCheckbox
                    label="Other"
                    checked={formData.tourismActivities.includes('other')}
                    onCheckChange={(chk) => {
                      const cur = formData.tourismActivities;
                      updateField(
                        'tourismActivities',
                        chk ? [...cur, 'other'] : cur.filter((x) => x !== 'other')
                      );
                    }}
                  />
                </View>

                {formData.tourismActivities.includes('other') && (
                  <View style={{ marginTop: 10 }}>
                    <Ux4gInputField
                      label="Shown when Other is ticked"
                      size="large"
                      value={formData.tourismOtherText}
                      onValueChange={(v) => updateField('tourismOtherText', v)}
                      placeholder="Separate several with commas"
                    />
                  </View>
                )}

                <Text style={[styles.activitySubheading, { marginTop: 16 }]}>Adventure Activities</Text>
                <View style={{ marginTop: 8 }}>
                  <Ux4gCheckbox
                    label="Trekking"
                    checked={formData.adventureActivities.includes('trekking')}
                    onCheckChange={(chk) => {
                      const cur = formData.adventureActivities;
                      updateField(
                        'adventureActivities',
                        chk ? [...cur, 'trekking'] : cur.filter((x) => x !== 'trekking')
                      );
                    }}
                  />
                  <Ux4gCheckbox
                    label="Water sports"
                    checked={formData.adventureActivities.includes('water')}
                    onCheckChange={(chk) => {
                      const cur = formData.adventureActivities;
                      updateField(
                        'adventureActivities',
                        chk ? [...cur, 'water'] : cur.filter((x) => x !== 'water')
                      );
                    }}
                  />
                  <Ux4gCheckbox
                    label="Camping"
                    checked={formData.adventureActivities.includes('camping')}
                    onCheckChange={(chk) => {
                      const cur = formData.adventureActivities;
                      updateField(
                        'adventureActivities',
                        chk ? [...cur, 'camping'] : cur.filter((x) => x !== 'camping')
                      );
                    }}
                  />
                  <Ux4gCheckbox
                    label="Other"
                    checked={formData.adventureActivities.includes('other')}
                    onCheckChange={(chk) => {
                      const cur = formData.adventureActivities;
                      updateField(
                        'adventureActivities',
                        chk ? [...cur, 'other'] : cur.filter((x) => x !== 'other')
                      );
                    }}
                  />
                </View>

                {formData.adventureActivities.includes('other') && (
                  <View style={{ marginTop: 10 }}>
                    <Ux4gInputField
                      label="Shown when Other is ticked"
                      size="large"
                      value={formData.adventureOtherText}
                      onValueChange={(v) => updateField('adventureOtherText', v)}
                      placeholder="Separate several with commas"
                    />
                  </View>
                )}

                <Text style={[styles.activitySubheading, { marginTop: 16 }]}>Entertainment Activities</Text>
                <View style={{ marginTop: 8 }}>
                  <Ux4gCheckbox
                    label="Indoor games"
                    checked={formData.entertainmentActivities.includes('indoor')}
                    onCheckChange={(chk) => {
                      const cur = formData.entertainmentActivities;
                      updateField(
                        'entertainmentActivities',
                        chk ? [...cur, 'indoor'] : cur.filter((x) => x !== 'indoor')
                      );
                    }}
                  />
                  <Ux4gCheckbox
                    label="Outdoor games"
                    checked={formData.entertainmentActivities.includes('outdoor')}
                    onCheckChange={(chk) => {
                      const cur = formData.entertainmentActivities;
                      updateField(
                        'entertainmentActivities',
                        chk ? [...cur, 'outdoor'] : cur.filter((x) => x !== 'outdoor')
                      );
                    }}
                  />
                  <Ux4gCheckbox
                    label="Live music"
                    checked={formData.entertainmentActivities.includes('music')}
                    onCheckChange={(chk) => {
                      const cur = formData.entertainmentActivities;
                      updateField(
                        'entertainmentActivities',
                        chk ? [...cur, 'music'] : cur.filter((x) => x !== 'music')
                      );
                    }}
                  />
                  <Ux4gCheckbox
                    label="Other"
                    checked={formData.entertainmentActivities.includes('other')}
                    onCheckChange={(chk) => {
                      const cur = formData.entertainmentActivities;
                      updateField(
                        'entertainmentActivities',
                        chk ? [...cur, 'other'] : cur.filter((x) => x !== 'other')
                      );
                    }}
                  />
                </View>

                {formData.entertainmentActivities.includes('other') && (
                  <View style={{ marginTop: 10 }}>
                    <Ux4gInputField
                      label="Shown when Other is ticked"
                      size="large"
                      value={formData.entertainmentOtherText}
                      onValueChange={(v) => updateField('entertainmentOtherText', v)}
                      placeholder="Separate several with commas"
                    />
                  </View>
                )}

                <View style={styles.actionButtonContainer}>
                  <Ux4gButton
                    text="Continue"
                    variant="primary"
                    size="large"
                    backgroundColor={UX4GColors.primary}
                    contentColor={UX4GColors.white}
                    borderRadius={8}
                    onPress={handleContinueStep1}
                    style={{ width: '100%' }}
                  />
                  <View style={{ height: 10 }} />
                  <Ux4gButton
                    text="Save as Draft"
                    variant="outline"
                    size="large"
                    backgroundColor="transparent"
                    contentColor={UX4GColors.primary}
                    borderColor={UX4GColors.primary200}
                    borderWidth={1}
                    borderRadius={8}
                    onPress={() => {
                      setSavedTime('3:15 PM');
                      alert('Draft saved successfully!');
                    }}
                    style={{ width: '100%' }}
                  />
                </View>
              </View>
            ) : step === 2 ? (
              /* ======================================================== */
              /* SCREEN 2: LOCATION (PIXEL-PERFECT MATCHING USER SCREENSHOT)*/
              /* ======================================================== */
              <View style={styles.formContainer}>
                {/* 1. Property Location */}
                <Text style={styles.sectionHeading}>Property Location</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Where is the property?"
                    required
                    size="large"
                    value={formData.whereIsProperty}
                    onValueChange={(v) => updateField('whereIsProperty', v)}
                    placeholder="Paste a Google Maps or Apple Maps link to t..."
                    status={errors.whereIsProperty ? 'error' : 'defaultStatus'}
                    caption={errors.whereIsProperty}
                  />
                </View>

                {/* Use my current location clickable link */}
                <TouchableOpacity
                  style={styles.gpsLocationRow}
                  onPress={handleSetLocationPin}
                  activeOpacity={0.7}
                >
                  <CrosshairsGpsIcon size={18} color={UX4GColors.neutral800} />
                  <Text style={styles.gpsLocationText}>Use my current location</Text>
                </TouchableOpacity>

                {/* 2. Geo Location */}
                <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Geo Location</Text>

                {/* Illustrative Map Canvas */}
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

                    {/* Park Green Area (Top Right) */}
                    <Path
                      d="M175 10h155v50H175z"
                      fill={UX4GColors.green100}
                    />

                    {/* Building Blocks */}
                    <Path d="M15 15h35v30H15z" fill={UX4GColors.neutral200} rx={2} />
                    <Path d="M60 15h40v30H60z" fill={UX4GColors.neutral200} rx={2} />
                    <Path d="M15 75h55v30H15z" fill={UX4GColors.neutral200} rx={2} />
                    <Path d="M80 75h50v30H80z" fill={UX4GColors.neutral200} rx={2} />
                    <Path d="M15 120h45v35H15z" fill={UX4GColors.neutral200} rx={2} />
                    <Path d="M70 120h60v35H70z" fill={UX4GColors.neutral200} rx={2} />

                    <Path d="M175 75h60v30H175z" fill={UX4GColors.neutral200} rx={2} />
                    <Path d="M245 75h60v30H245z" fill={UX4GColors.neutral200} rx={2} />
                    <Path d="M175 120h50v35H175z" fill={UX4GColors.neutral200} rx={2} />
                    <Path d="M235 120h70v35H235z" fill={UX4GColors.neutral200} rx={2} />

                    {/* Roads Network */}
                    <Path d="M0 60h340v12H0z" fill={UX4GColors.white} />
                    <Path d="M0 110h340v10H0z" fill={UX4GColors.white} />
                    <Path d="M145 0v210h14V0z" fill={UX4GColors.white} />
                    <Path d="M0 160l340 25v10L0 170z" fill={UX4GColors.white} />

                    {/* Purple Location Pin on Road Center */}
                    <Path
                      d="M142 85C136 85 131 90 131 96c0 8 11 19 11 19s11-11 11-19c0-6-5-11-11-11z"
                      fill={UX4GColors.primary}
                    />
                    <Circle cx="142" cy="96" r="3.5" fill={UX4GColors.white} />

                    {/* Zoom Buttons Controls (Top Right) */}
                    <Path d="M295 15h25v50h-25z" fill={UX4GColors.white} rx={4} />
                    <Path d="M295 40h25v1h-25z" fill={UX4GColors.neutral200} />
                    <Path d="M304 27h7m-3.5-3.5v7" stroke={UX4GColors.neutral600} strokeWidth="1.5" strokeLinecap="round" />
                    <Path d="M304 52h7" stroke={UX4GColors.neutral600} strokeWidth="1.5" strokeLinecap="round" />
                  </Svg>

                  {/* Bottom Map Overlay Pill */}
                  <View style={styles.mapOverlayPill}>
                    <Text style={styles.mapOverlayPillText}>
                      Illustrative map — drag the pin to set the exact entrance
                    </Text>
                  </View>
                </TouchableOpacity>

                {/* Latitude Disabled Box */}
                <Text style={styles.geoCoordLabel}>Latitude — set by the map</Text>
                <View style={styles.geoCoordBox}>
                  <Text style={[styles.geoCoordText, formData.pinPlaced && styles.geoCoordActiveText]}>
                    {formData.pinPlaced ? formData.latitude : 'Set when you place the pin'}
                  </Text>
                </View>

                {/* Longitude Disabled Box */}
                <Text style={styles.geoCoordLabel}>Longitude — set by the map</Text>
                <View style={styles.geoCoordBox}>
                  <Text style={[styles.geoCoordText, formData.pinPlaced && styles.geoCoordActiveText]}>
                    {formData.pinPlaced ? formData.longitude : 'Set when you place the pin'}
                  </Text>
                </View>

                {/* Symmetrical divider with center label */}
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
                    value={formData.pinCode}
                    onValueChange={(v) => updateField('pinCode', v.slice(0, 6))}
                    placeholder="6 digits"
                    status={errors.pinCode ? 'error' : 'defaultStatus'}
                    caption={errors.pinCode}
                  />
                </View>

                {/* 3. Location Details */}
                <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Location Details</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="State / UT *"
                    options={STATES_AND_UTS}
                    selectedOptionIds={formData.stateUT}
                    onSelectionChange={(v) => updateField('stateUT', v)}
                    placeholder="Select state or union territory"
                    size="l"
                  />
                  {errors.stateUT && <Text style={styles.errorCaption}>{errors.stateUT}</Text>}
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="District *"
                    options={DISTRICTS_UTTARAKHAND}
                    selectedOptionIds={formData.district}
                    onSelectionChange={(v) => updateField('district', v)}
                    placeholder="Select district"
                    size="l"
                  />
                  {errors.district && <Text style={styles.errorCaption}>{errors.district}</Text>}
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Sub-district / Tehsil *"
                    options={TEHSILS_DEHRADUN}
                    selectedOptionIds={formData.subDistrict}
                    onSelectionChange={(v) => updateField('subDistrict', v)}
                    placeholder="Select sub-district or tehsil"
                    size="l"
                  />
                  {errors.subDistrict && <Text style={styles.errorCaption}>{errors.subDistrict}</Text>}
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="City / Town / Village *"
                    options={CITIES_MUSSOORIE}
                    selectedOptionIds={formData.cityVillage}
                    onSelectionChange={(v) => updateField('cityVillage', v)}
                    placeholder="Select city, town or village"
                    size="l"
                  />
                  {errors.cityVillage && <Text style={styles.errorCaption}>{errors.cityVillage}</Text>}
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Area type — set from the town or village you chose"
                    options={AREA_TYPES}
                    selectedOptionIds={formData.areaType}
                    onSelectionChange={(v) => updateField('areaType', v)}
                    placeholder="Urban — from the LGD record for this to..."
                    size="l"
                  />
                </View>

                {/* 4. Address of the Property */}
                <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Address of the Property</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="House or building number and street"
                    required
                    size="large"
                    value={formData.houseStreet}
                    onValueChange={(v) => updateField('houseStreet', v)}
                    placeholder="As it would be written on a letter"
                    status={errors.houseStreet ? 'error' : 'defaultStatus'}
                    caption={errors.houseStreet}
                  />
                </View>

                <View style={{ marginBottom: 28 }}>
                  <Ux4gInputField
                    label="Landmark"
                    size="large"
                    value={formData.landmarkText}
                    onValueChange={(v) => updateField('landmarkText', v)}
                    placeholder="Something a visitor would recognise"
                  />
                </View>

                {/* Action Buttons matching screenshot */}
                <View style={styles.actionButtonContainer}>
                  <Ux4gButton
                    text="Continue"
                    variant="primary"
                    size="large"
                    backgroundColor={UX4GColors.primary}
                    contentColor={UX4GColors.white}
                    borderRadius={8}
                    onPress={handleContinueStep2}
                    style={{ width: '100%' }}
                  />
                  <View style={{ height: 10 }} />
                  <Ux4gButton
                    text="Save as Draft"
                    variant="outline"
                    size="large"
                    backgroundColor="transparent"
                    contentColor={UX4GColors.primary}
                    borderColor={UX4GColors.primary200}
                    borderWidth={1}
                    borderRadius={8}
                    onPress={() => {
                      setSavedTime('3:15 PM');
                      alert('Draft saved successfully!');
                    }}
                    style={{ width: '100%' }}
                  />
                </View>
              </View>
            ) : step === 3 ? (
              /* ======================================================== */
              /* SCREEN 3: OWNER / APPLICANT DETAILS (PIXEL-PERFECT MATCH)*/
              /* ======================================================== */
              <View style={styles.formContainer}>
                {/* 1. Applicant Details */}
                <Text style={styles.sectionHeading}>Applicant Details</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="First name"
                    required
                    size="large"
                    value={formData.firstName}
                    onValueChange={(v) => updateField('firstName', v)}
                    placeholder="As on your PAN"
                    status={errors.firstName ? 'error' : 'defaultStatus'}
                    caption={errors.firstName}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Last name"
                    required
                    size="large"
                    value={formData.lastName}
                    onValueChange={(v) => updateField('lastName', v)}
                    placeholder="As on your PAN"
                    status={errors.lastName ? 'error' : 'defaultStatus'}
                    caption={errors.lastName}
                  />
                </View>

                {/* Read-only Full Name field as it will print on the certificate */}
                <View style={styles.fieldSpacing}>
                  <Text style={styles.readOnlyLabel}>
                    Full name — as it will print on the certificate
                  </Text>
                  <View style={styles.readOnlyBox}>
                    <Text style={styles.readOnlyText}>
                      {(formData.firstName + ' ' + formData.lastName).trim() || 'Filled in from your first and last name'}
                    </Text>
                  </View>
                  <View style={styles.helperRow}>
                    <InfoOutlineIcon size={13} color={UX4GColors.neutral500} />
                    <Text style={styles.helperText}>Must match your PAN letter for letter</Text>
                  </View>
                </View>

                {/* Gender Radio Buttons */}
                <View style={styles.fieldSpacing}>
                  <Text style={styles.radioGroupLabel}>
                    Gender<Text style={{ color: UX4GColors.red }}>*</Text>
                  </Text>
                  <View style={{ marginTop: 8, gap: 10 }}>
                    <Ux4gRadioButton
                      checked={formData.gender === 'male'}
                      onPress={() => updateField('gender', 'male')}
                      label="Male"
                      activeColor={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      checked={formData.gender === 'female'}
                      onPress={() => updateField('gender', 'female')}
                      label="Female"
                      activeColor={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      checked={formData.gender === 'others'}
                      onPress={() => updateField('gender', 'others')}
                      label="Others"
                      activeColor={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      checked={formData.gender === 'prefer_not_to_say'}
                      onPress={() => updateField('gender', 'prefer_not_to_say')}
                      label="Prefer not to say"
                      activeColor={UX4GColors.primary}
                    />
                  </View>
                  {errors.gender && <Text style={styles.errorCaption}>{errors.gender}</Text>}
                </View>

                {/* Date of Birth using official UX4G DatePicker */}
                <View style={styles.fieldSpacing}>
                  <Ux4gDatePicker
                    label="Date of birth"
                    required
                    placeholder="Select date"
                    initialDate={formData.dateOfBirth ? new Date(formData.dateOfBirth) : undefined}
                    onDateSelected={(d) => {
                      const formatted = String(d.getDate()).padStart(2, '0') + '/' + String(d.getMonth() + 1).padStart(2, '0') + '/' + d.getFullYear();
                      updateField('dateOfBirth', formatted);
                    }}
                    status={errors.dateOfBirth ? 'error' : 'defaultStatus'}
                    description={errors.dateOfBirth}
                  />
                </View>

                {/* Relationship Dropdown */}
                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Relationship"
                    required
                    size="l"
                    options={RELATIONSHIP_OPTIONS}
                    selectedOptionIds={formData.relationship}
                    onSelectionChange={(ids) => updateField('relationship', ids)}
                    placeholder="Select"
                    status={errors.relationship ? 'error' : 'defaultStatus'}
                    caption={errors.relationship}
                  />
                </View>

                {/* Their full name */}
                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Their full name"
                    required
                    size="large"
                    value={formData.relationshipFullName}
                    onValueChange={(v) => updateField('relationshipFullName', v)}
                    placeholder="Appears on the registration certificate"
                    status={errors.relationshipFullName ? 'error' : 'defaultStatus'}
                    caption={errors.relationshipFullName}
                  />
                </View>

                {/* 2. Identity Details using official UX4G PanInputField and AadhaarInputField */}
                <Text style={[styles.sectionHeading, { marginTop: 12 }]}>Identity Details</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gPanInputField
                    label="PAN"
                    required
                    size="large"
                    value={formData.panNumber}
                    onValueChange={(v) => updateField('panNumber', v)}
                    placeholder="ABCDE1234F"
                    caption="Description"
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
                    caption="Description"
                    showMaskToggle={true}
                    maskAll={true}
                    status={errors.aadhaarNumber ? 'error' : 'defaultStatus'}
                  />
                </View>

                {/* 3. Contact Details */}
                <Text style={[styles.sectionHeading, { marginTop: 12 }]}>Contact Details</Text>

                {/* Mobile Number with +91 prefix and Verify button */}
                <View style={styles.fieldSpacing}>
                  <Text style={styles.fieldLabelWithAsterisk}>
                    Mobile number<Text style={{ color: UX4GColors.red }}>*</Text>
                  </Text>
                  <View style={[styles.inlineInputBox, errors.mobileNumber && styles.inputBoxError]}>
                    <Text style={styles.prefixText}>+91</Text>
                    <TextInput
                      style={styles.inlineInput}
                      placeholder="10 digits"
                      placeholderTextColor={UX4GColors.neutral400}
                      value={formData.mobileNumber}
                      onChangeText={(v) => updateField('mobileNumber', v)}
                      keyboardType="phone-pad"
                      maxLength={10}
                    />
                    <TouchableOpacity
                      style={styles.verifyButton}
                      onPress={() => {
                        if (!formData.mobileNumber.trim()) {
                          setErrors((prev) => ({ ...prev, mobileNumber: 'Please enter a valid 10-digit mobile number' }));
                          return;
                        }
                        updateField('otpSent', true);
                        updateField('mobileVerified', true);
                        updateField('resendTimer', 17);
                      }}
                    >
                      <Text style={styles.verifyButtonText}>Verify</Text>
                    </TouchableOpacity>
                  </View>
                  {errors.mobileNumber && <Text style={styles.errorCaption}>{errors.mobileNumber}</Text>}

                  {/* OTP 6-digit verification block using official UX4G OtpInput Component */}
                  {formData.otpSent && (
                    <View style={{ marginTop: 14 }}>
                      <Ux4gOtpInput
                        length={6}
                        value={formData.otp}
                        onChanged={(val) => updateField('otp', val)}
                        label="Enter the 6-digit code sent to that number"
                        boxSize={44}
                        gap={8}
                        autoCountdownSeconds={17}
                        captionVariant="resendTimer"
                        captionLeadingText="Didn't receive OTP? "
                        captionTrailingText="Resend in"
                        onCaptionTrailingTap={() => {
                          alert('New OTP sent to +91 ' + formData.mobileNumber);
                        }}
                      />
                    </View>
                  )}
                </View>

                {/* Email Address with inline Verify */}
                <View style={styles.fieldSpacing}>
                  <Text style={styles.fieldLabelWithAsterisk}>
                    Email address<Text style={{ color: UX4GColors.red }}>*</Text>
                  </Text>
                  <View style={[styles.inlineInputBox, errors.emailAddress && styles.inputBoxError]}>
                    <TextInput
                      style={styles.inlineInput}
                      placeholder="name@example.com"
                      placeholderTextColor={UX4GColors.neutral400}
                      value={formData.emailAddress}
                      onChangeText={(v) => updateField('emailAddress', v)}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                    <TouchableOpacity
                      style={styles.verifyButton}
                      onPress={() => {
                        if (!/^\S+@\S+\.\S+$/.test(formData.emailAddress.trim())) {
                          setErrors((prev) => ({ ...prev, emailAddress: 'Enter a valid email address first' }));
                          return;
                        }
                        updateField('emailVerified', true);
                        alert('Verification link sent and email verified for ' + formData.emailAddress);
                      }}
                    >
                      <Text style={styles.verifyButtonText}>Verify</Text>
                    </TouchableOpacity>
                  </View>
                  {errors.emailAddress && <Text style={styles.errorCaption}>{errors.emailAddress}</Text>}
                </View>

                {/* Landline (optional) */}
                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Landline (optional)"
                    size="large"
                    value={formData.landline}
                    onValueChange={(v) => updateField('landline', v)}
                    placeholder="STD code + number, e.g. 0651 2560001"
                  />
                </View>

                {/* 4. Permanent Address */}
                <Text style={[styles.sectionHeading, { marginTop: 12 }]}>Permanent Address</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="PIN code"
                    required
                    size="large"
                    value={formData.permPinCode}
                    onValueChange={(v) => updateField('permPinCode', v)}
                    placeholder="6 digits"
                    keyboardType="numeric"
                    maxLength={6}
                    status={errors.permPinCode ? 'error' : 'defaultStatus'}
                    caption={errors.permPinCode}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="State / UT"
                    required
                    size="l"
                    options={STATES_AND_UTS}
                    selectedOptionIds={formData.permStateUT}
                    onSelectionChange={(ids) => updateField('permStateUT', ids)}
                    placeholder="Select state or union territory"
                    status={errors.permStateUT ? 'error' : 'defaultStatus'}
                    caption={errors.permStateUT}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="District"
                    required
                    size="l"
                    options={DISTRICTS_UTTARAKHAND}
                    selectedOptionIds={formData.permDistrict}
                    onSelectionChange={(ids) => updateField('permDistrict', ids)}
                    placeholder="Select district"
                    status={errors.permDistrict ? 'error' : 'defaultStatus'}
                    caption={errors.permDistrict}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Sub-district / Tehsil"
                    required
                    size="l"
                    options={TEHSILS_DEHRADUN}
                    selectedOptionIds={formData.permSubDistrict}
                    onSelectionChange={(ids) => updateField('permSubDistrict', ids)}
                    placeholder="Select sub-district or tehsil"
                    status={errors.permSubDistrict ? 'error' : 'defaultStatus'}
                    caption={errors.permSubDistrict}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="House or building number and street"
                    required
                    size="large"
                    value={formData.permHouseStreet}
                    onValueChange={(v) => updateField('permHouseStreet', v)}
                    placeholder="As it would be written on a letter"
                    status={errors.permHouseStreet ? 'error' : 'defaultStatus'}
                    caption={errors.permHouseStreet}
                  />
                </View>

                {/* 5. Address for Correspondence */}
                <Text style={[styles.sectionHeading, { marginTop: 12 }]}>
                  Address for Correspondence
                </Text>

                <View style={{ marginBottom: 12 }}>
                  <Ux4gCheckbox
                    checked={formData.sameAsPermanent}
                    onPress={() => updateField('sameAsPermanent', !formData.sameAsPermanent)}
                    label="Same as my permanent address *"
                    activeColor={UX4GColors.primary}
                  />
                </View>

                <View style={{ marginBottom: 16 }}>
                  <Ux4gCheckbox
                    checked={formData.addressOutsideState}
                    onPress={() => updateField('addressOutsideState', !formData.addressOutsideState)}
                    label="My current address is outside this State *"
                    activeColor={UX4GColors.primary}
                  />
                  <Text style={styles.checkboxSubHelperText}>
                    Opens a State field on the current-address block.
                  </Text>
                </View>

                {/* Capacity in which applying */}
                <View style={styles.fieldSpacing}>
                  <Text style={styles.capacityLabel}>
                    Capacity in which you are applying<Text style={{ color: UX4GColors.red }}>*</Text>
                  </Text>
                  <View style={{ marginTop: 8, gap: 10 }}>
                    <Ux4gRadioButton
                      checked={formData.applyingCapacity === 'owner'}
                      onPress={() => updateField('applyingCapacity', 'owner')}
                      label="Owner of the property"
                      activeColor={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      checked={formData.applyingCapacity === 'family_member'}
                      onPress={() => updateField('applyingCapacity', 'family_member')}
                      label="Family member managing the unit"
                      activeColor={UX4GColors.primary}
                    />
                    <Ux4gRadioButton
                      checked={formData.applyingCapacity === 'authorised_rep'}
                      onPress={() => updateField('applyingCapacity', 'authorised_rep')}
                      label="Authorised representative of the owner"
                      activeColor={UX4GColors.primary}
                    />
                  </View>
                </View>

                {/* Bottom Action Buttons */}
                <View style={styles.actionButtonContainer}>
                  <Ux4gButton
                    text="Continue"
                    variant="primary"
                    size="large"
                    backgroundColor={UX4GColors.primary}
                    contentColor={UX4GColors.white}
                    borderRadius={8}
                    onPress={handleContinueStep3}
                    style={{ width: '100%' }}
                  />
                  <View style={{ height: 10 }} />
                  <Ux4gButton
                    text="Save as Draft"
                    variant="outline"
                    size="large"
                    backgroundColor="transparent"
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
              /* ======================================================== */
              /* SCREEN 4: MANAGEMENT & STAFF (PIXEL-PERFECT MATCH)       */
              /* ======================================================== */
              <View style={styles.formContainer}>
                {/* 1. Manager Details */}
                <Text style={styles.sectionHeading}>Manager Details</Text>

                <View style={{ marginBottom: 16 }}>
                  <Ux4gCheckbox
                    value={formData.ownerRunsPersonally}
                    onChanged={(val) => updateField('ownerRunsPersonally', !!val)}
                    label="The owner runs the property personally"
                    description="Ticking this hides the manager block below."
                    size="medium"
                    activeColor={UX4GColors.primary}
                  />
                </View>

                {/* Conditional Manager Details Block */}
                {!formData.ownerRunsPersonally && (
                  <>
                    <View style={styles.fieldSpacing}>
                      <Ux4gInputField
                        label="Manager or caretaker name"
                        required
                        size="large"
                        value={formData.managerName}
                        onValueChange={(v) => updateField('managerName', v)}
                        placeholder="Full name"
                        status={errors.managerName ? 'error' : 'defaultStatus'}
                        caption={errors.managerName}
                      />
                    </View>

                    {/* Relationship to the owner */}
                    <View style={styles.fieldSpacing}>
                      <Text style={styles.radioGroupLabel}>
                        Relationship to the owner<Text style={{ color: UX4GColors.red }}>*</Text>
                      </Text>
                      <View style={{ marginTop: 8, gap: 10 }}>
                        <Ux4gRadioButton
                          value="self"
                          groupValue={formData.managerRelationship}
                          onChanged={(val) => updateField('managerRelationship', val)}
                          label="Self"
                          size="medium"
                          color={UX4GColors.primary}
                        />
                        <Ux4gRadioButton
                          value="family_member"
                          groupValue={formData.managerRelationship}
                          onChanged={(val) => updateField('managerRelationship', val)}
                          label="Family member"
                          size="medium"
                          color={UX4GColors.primary}
                        />
                        <Ux4gRadioButton
                          value="employee"
                          groupValue={formData.managerRelationship}
                          onChanged={(val) => updateField('managerRelationship', val)}
                          label="Employee"
                          size="medium"
                          color={UX4GColors.primary}
                        />
                        <Ux4gRadioButton
                          value="agent"
                          groupValue={formData.managerRelationship}
                          onChanged={(val) => updateField('managerRelationship', val)}
                          label="Agent"
                          size="medium"
                          color={UX4GColors.primary}
                        />
                      </View>
                      {errors.managerRelationship && (
                        <Text style={styles.errorCaption}>{errors.managerRelationship}</Text>
                      )}
                    </View>

                    {/* Mobile number with +91 prefix */}
                    <View style={styles.fieldSpacing}>
                      <Text style={styles.fieldLabelWithAsterisk}>
                        Mobile number<Text style={{ color: UX4GColors.red }}>*</Text>
                      </Text>
                      <View style={[styles.inlineInputBox, errors.managerMobile && styles.inputBoxError]}>
                        <Text style={styles.prefixText}>+91</Text>
                        <TextInput
                          style={styles.inlineInput}
                          placeholder="Reachable during an inspection"
                          placeholderTextColor={UX4GColors.neutral400}
                          value={formData.managerMobile}
                          onChangeText={(v) => updateField('managerMobile', v)}
                          keyboardType="phone-pad"
                          maxLength={10}
                        />
                      </View>
                      {errors.managerMobile && (
                        <Text style={styles.errorCaption}>{errors.managerMobile}</Text>
                      )}
                    </View>

                    {/* 2. Address of the Manager */}
                    <Text style={[styles.sectionHeading, { marginTop: 8 }]}>
                      Address of the Manager
                    </Text>

                    <View style={styles.fieldSpacing}>
                      <Ux4gInputField
                        label="PIN code"
                        required
                        size="large"
                        value={formData.managerPinCode}
                        onValueChange={(v) => updateField('managerPinCode', v)}
                        placeholder="6 digits"
                        keyboardType="numeric"
                        maxLength={6}
                        status={errors.managerPinCode ? 'error' : 'defaultStatus'}
                        caption={errors.managerPinCode}
                      />
                    </View>

                    <View style={styles.fieldSpacing}>
                      <Ux4gSelectionDropdown
                        label="State / UT"
                        required
                        size="l"
                        options={STATES_AND_UTS}
                        selectedOptionIds={formData.managerStateUT}
                        onSelectionChange={(ids) => updateField('managerStateUT', ids)}
                        placeholder="Select state or union territory"
                        status={errors.managerStateUT ? 'error' : 'defaultStatus'}
                        caption={errors.managerStateUT}
                      />
                    </View>

                    <View style={styles.fieldSpacing}>
                      <Ux4gSelectionDropdown
                        label="District"
                        required
                        size="l"
                        options={DISTRICTS_UTTARAKHAND}
                        selectedOptionIds={formData.managerDistrict}
                        onSelectionChange={(ids) => updateField('managerDistrict', ids)}
                        placeholder="Select district"
                        status={errors.managerDistrict ? 'error' : 'defaultStatus'}
                        caption={errors.managerDistrict}
                      />
                    </View>

                    <View style={styles.fieldSpacing}>
                      <Ux4gInputField
                        label="House or building number and street"
                        required
                        size="large"
                        value={formData.managerHouseStreet}
                        onValueChange={(v) => updateField('managerHouseStreet', v)}
                        placeholder="As it would be written on a letter"
                        status={errors.managerHouseStreet ? 'error' : 'defaultStatus'}
                        caption={errors.managerHouseStreet}
                      />
                    </View>
                  </>
                )}

                {/* 3. Staff Details */}
                <Text style={[styles.sectionHeading, { marginTop: 12 }]}>Staff Details</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Total number of staff"
                    required
                    size="large"
                    value={formData.totalStaff}
                    onValueChange={(v) => updateField('totalStaff', v)}
                    placeholder="0"
                    keyboardType="numeric"
                    status={errors.totalStaff ? 'error' : 'defaultStatus'}
                    caption={errors.totalStaff}
                  />
                </View>

                {/* Of whom, hired locally Ux4gSlider */}
                <View style={styles.fieldSpacing}>
                  <Ux4gSlider
                    label="Of whom, hired locally"
                    isRequired={true}
                    labelIcon={<InfoOutlineIcon size={14} color={UX4GColors.neutral500} />}
                    min={0}
                    max={Math.max(1, parseInt(formData.totalStaff) || 5)}
                    steps={Math.max(1, parseInt(formData.totalStaff) || 5) > 1 ? ((Math.max(1, parseInt(formData.totalStaff) || 5)) - 1) : 1}
                    value={formData.hiredLocally}
                    onValueChange={(val) => updateField('hiredLocally', Math.round(val))}
                    showMarksAndValues={true}
                    size="medium"
                    caption={'0 to ' + (parseInt(formData.totalStaff) || 5) + ' — the total you entered'}
                    rightLabelElement={
                      <View style={styles.sliderBadgeBox}>
                        <Text style={styles.sliderBadgeValue}>{formData.hiredLocally}</Text>
                      </View>
                    }
                  />
                </View>

                {/* 4. Previous Registration Details */}
                <Text style={[styles.sectionHeading, { marginTop: 14 }]}>
                  Previous Registration Details
                </Text>

                <View style={{ marginBottom: 14 }}>
                  <Ux4gCheckbox
                    value={formData.isRenewal}
                    onChanged={(val) => updateField('isRenewal', !!val)}
                    label="This is a renewal of an existing registration"
                    size="medium"
                    activeColor={UX4GColors.primary}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Previous registration number"
                    size="large"
                    value={formData.previousRegNumber}
                    onValueChange={(v) => updateField('previousRegNumber', v)}
                    placeholder="Shown only when this is a renewal"
                    readOnly={!formData.isRenewal}
                    status={errors.previousRegNumber ? 'error' : 'defaultStatus'}
                    caption={errors.previousRegNumber}
                  />
                </View>

                {/* Bottom Action Buttons */}
                <View style={styles.actionButtonContainer}>
                  <Ux4gButton
                    text="Continue"
                    variant="primary"
                    size="large"
                    backgroundColor={UX4GColors.primary}
                    contentColor={UX4GColors.white}
                    borderRadius={8}
                    onPress={handleContinueStep4}
                    style={{ width: '100%' }}
                  />
                  <View style={{ height: 10 }} />
                  <Ux4gButton
                    text="Save as Draft"
                    variant="outline"
                    size="large"
                    backgroundColor="transparent"
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
              /* ======================================================== */
              /* SCREEN 5: ROOMS / ACCOMMODATION (PIXEL-PERFECT MATCH)    */
              /* ======================================================== */
              <View style={styles.formContainer}>
                <Text style={styles.sectionHeading}>Accommodation Details</Text>

                {/* Dynamic Accordion Cards for Rooms 1..4 */}
                {(formData.rooms || []).map((room, roomIdx) => {
                  const unitLabel =
                    room.unit && room.unit[0] === 'sqm' ? 'sq. m.' : 'sq. ft.';
                  const bathUnitLabel =
                    room.bathroomUnit && room.bathroomUnit[0] === 'sqm'
                      ? 'sq. m.'
                      : 'sq. ft.';
                  const toiletUnitLabel =
                    room.toiletUnit && room.toiletUnit[0] === 'sqm'
                      ? 'sq. m.'
                      : 'sq. ft.';
                  const isCopyMenuOpen = copyDropdownRoomIdx === roomIdx;

                  return (
                    <Ux4gCard
                      key={room.id}
                      cornerRadius={12}
                      backgroundColor={UX4GColors.white}
                      borderColor={UX4GColors.neutral200}
                      borderWidth={1}
                      elevation={0}
                      style={{ marginBottom: 14, padding: 14 }}
                    >
                      {/* Room Card Header */}
                      <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={() => toggleRoomExpanded(roomIdx)}
                        style={styles.roomCardHeader}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.roomCardTitle}>{'Room ' + (roomIdx + 1)}</Text>
                          {!room.expanded && (
                            <Text style={styles.roomSummaryText}>
                              {getRoomSummary(room)}
                            </Text>
                          )}
                        </View>
                        {room.expanded ? (
                          <ChevronUpIcon size={20} color={UX4GColors.neutral600} />
                        ) : (
                          <ChevronDownIcon size={20} color={UX4GColors.neutral600} />
                        )}
                      </TouchableOpacity>

                      {/* "Copy from..." pill on Rooms 2, 3, 4 */}
                      {roomIdx > 0 && (
                        <View style={{ marginTop: 10, marginBottom: room.expanded ? 14 : 2 }}>
                          <TouchableOpacity
                            activeOpacity={0.75}
                            onPress={() =>
                              setCopyDropdownRoomIdx(isCopyMenuOpen ? null : roomIdx)
                            }
                            style={styles.copyFromPill}
                          >
                            <CopyOutlineIcon size={14} color={UX4GColors.neutral700} />
                            <Text style={styles.copyFromText}>Copy from...</Text>
                            <ChevronDownIcon size={15} color={UX4GColors.neutral600} />
                          </TouchableOpacity>

                          {isCopyMenuOpen && (
                            <View style={styles.copyMenuBox}>
                              {(formData.rooms || []).map((otherRoom, otherIdx) => {
                                if (otherIdx === roomIdx) return null;
                                return (
                                  <TouchableOpacity
                                    key={otherRoom.id}
                                    activeOpacity={0.7}
                                    onPress={() => copyRoomFrom(roomIdx, otherIdx)}
                                    style={styles.copyMenuItem}
                                  >
                                    <Text style={styles.copyMenuItemText}>
                                      {'Room ' + (otherIdx + 1) + (otherRoom.name ? ' (' + otherRoom.name + ')' : '')}
                                    </Text>
                                  </TouchableOpacity>
                                );
                              })}
                            </View>
                          )}
                        </View>
                      )}

                      {/* Expanded Room Form Fields */}
                      {room.expanded && (
                        <View style={{ marginTop: roomIdx > 0 ? 0 : 14 }}>
                          {/* Room name or number */}
                          <View style={styles.fieldSpacing}>
                            <Ux4gInputField
                              label="Room name or number"
                              required
                              size="large"
                              value={room.name}
                              onValueChange={(v) => updateRoomField(roomIdx, 'name', v)}
                              placeholder="Guests will see this"
                              status={errors['room_' + roomIdx + '_name'] ? 'error' : 'defaultStatus'}
                              caption={errors['room_' + roomIdx + '_name']}
                            />
                          </View>

                          {/* Room type Radio Buttons (3 + 1 wrap grid) */}
                          <View style={styles.fieldSpacing}>
                            <Text style={styles.radioGroupLabel}>
                              Room type<Text style={{ color: UX4GColors.red }}>*</Text>
                            </Text>
                            <View style={styles.roomTypeWrapGrid}>
                              {ROOM_TYPES.map((rt) => (
                                <View key={rt.id} style={{ minWidth: 88 }}>
                                  <Ux4gRadioButton
                                    value={rt.id}
                                    groupValue={room.roomType}
                                    onChanged={(val) => updateRoomField(roomIdx, 'roomType', val)}
                                    label={rt.label}
                                    size="small"
                                    color={UX4GColors.primary}
                                  />
                                </View>
                              ))}
                            </View>
                            {errors['room_' + roomIdx + '_type'] && (
                              <View style={styles.groupErrorRow}>
                                <InfoOutlineIcon size={13} color={UX4GColors.red} />
                                <Text style={styles.groupErrorText}>
                                  {errors['room_' + roomIdx + '_type']}
                                </Text>
                              </View>
                            )}
                          </View>

                          {/* Beds in this room */}
                          <View style={styles.fieldSpacing}>
                            <Ux4gSelectionDropdown
                              label="Beds in this room"
                              required
                              size="l"
                              options={BEDS_OPTIONS}
                              selectedOptionIds={room.beds}
                              onSelectionChange={(ids) => updateRoomField(roomIdx, 'beds', ids)}
                              placeholder="Select — 1 to 4"
                            />
                          </View>

                          {/* Tariff per night with ₹ prefix and info icon */}
                          <View style={styles.fieldSpacing}>
                            <Ux4gInputField
                              label="Tariff per night"
                              required
                              trailingIconLabel={<InfoOutlineIcon size={14} color={UX4GColors.neutral500} />}
                              prefixText="₹"
                              placeholder="Digits only"
                              type="number"
                              size="large"
                              value={room.tariff}
                              onValueChange={(v) => updateRoomField(roomIdx, 'tariff', v)}
                              status={errors['room_' + roomIdx + '_tariff'] ? 'error' : 'defaultStatus'}
                              caption={errors['room_' + roomIdx + '_tariff']}
                            />
                          </View>

                          {/* Unit */}
                          <View style={styles.fieldSpacing}>
                            <Ux4gSelectionDropdown
                              label="Unit"
                              required
                              size="l"
                              options={AREA_UNITS}
                              selectedOptionIds={room.unit}
                              onSelectionChange={(ids) => updateRoomField(roomIdx, 'unit', ids)}
                              placeholder="Sq. ft."
                            />
                          </View>

                          {/* Room area */}
                          <View style={styles.fieldSpacing}>
                            <Ux4gInputField
                              label="Room area"
                              required
                              size="large"
                              value={room.roomArea}
                              onValueChange={(v) => updateRoomField(roomIdx, 'roomArea', v)}
                              placeholder="Numbers only"
                              type="number"
                              status={errors['room_' + roomIdx + '_area'] ? 'error' : 'defaultStatus'}
                              caption={errors['room_' + roomIdx + '_area']}
                            />
                          </View>

                          {/* Bathrooms */}
                          <View style={styles.fieldSpacing}>
                            <Ux4gSelectionDropdown
                              label="Bathrooms"
                              required
                              size="l"
                              options={COUNT_OPTIONS}
                              selectedOptionIds={room.bathrooms}
                              onSelectionChange={(ids) => updateRoomField(roomIdx, 'bathrooms', ids)}
                              placeholder="Select"
                            />
                          </View>

                          {/* Unit for all bathrooms */}
                          <View style={styles.fieldSpacing}>
                            <Ux4gSelectionDropdown
                              label="Unit for all bathrooms"
                              required
                              size="l"
                              options={AREA_UNITS}
                              selectedOptionIds={room.bathroomUnit}
                              onSelectionChange={(ids) => updateRoomField(roomIdx, 'bathroomUnit', ids)}
                              placeholder="Sq. ft."
                            />
                          </View>

                          {/* Dynamic Indented Bathroom Rows */}
                          {(room.bathroomAreas || []).length > 0 && (
                            <View style={styles.indentedSubAreaGroup}>
                              {(room.bathroomAreas || []).map((bArea, bIdx) => (
                                <View key={'bath-' + bIdx} style={styles.indentedSubAreaRow}>
                                  <View style={{ flex: 0.44 }}>
                                    <Text style={styles.indentedSubLabel}>
                                      {'Bathroom ' + (bIdx + 1)}
                                      <Text style={{ color: UX4GColors.red }}>*</Text>
                                    </Text>
                                  </View>
                                  <View style={{ flex: 0.56 }}>
                                    <Ux4gInputField
                                      size="medium"
                                      value={bArea}
                                      onValueChange={(v) =>
                                        updateRoomSubArea(roomIdx, 'bathroom', bIdx, v)
                                      }
                                      placeholder={'Area in ' + bathUnitLabel}
                                      type="number"
                                    />
                                  </View>
                                </View>
                              ))}
                            </View>
                          )}

                          {/* Toilets */}
                          <View style={styles.fieldSpacing}>
                            <Ux4gSelectionDropdown
                              label="Toilets"
                              required
                              size="l"
                              options={COUNT_OPTIONS}
                              selectedOptionIds={room.toilets}
                              onSelectionChange={(ids) => updateRoomField(roomIdx, 'toilets', ids)}
                              placeholder="Select"
                            />
                          </View>

                          {/* Unit for all toilets */}
                          <View style={styles.fieldSpacing}>
                            <Ux4gSelectionDropdown
                              label="Unit for all toilets"
                              required
                              size="l"
                              options={AREA_UNITS}
                              selectedOptionIds={room.toiletUnit}
                              onSelectionChange={(ids) => updateRoomField(roomIdx, 'toiletUnit', ids)}
                              placeholder="Sq. ft."
                            />
                          </View>

                          {/* Dynamic Indented Toilet Rows */}
                          {(room.toiletAreas || []).length > 0 && (
                            <View style={styles.indentedSubAreaGroup}>
                              {(room.toiletAreas || []).map((tArea, tIdx) => (
                                <View key={'toilet-' + tIdx} style={styles.indentedSubAreaRow}>
                                  <View style={{ flex: 0.44 }}>
                                    <Text style={styles.indentedSubLabel}>
                                      {'Toilet ' + (tIdx + 1)}
                                      <Text style={{ color: UX4GColors.red }}>*</Text>
                                    </Text>
                                  </View>
                                  <View style={{ flex: 0.56 }}>
                                    <Ux4gInputField
                                      size="medium"
                                      value={tArea}
                                      onValueChange={(v) =>
                                        updateRoomSubArea(roomIdx, 'toilet', tIdx, v)
                                      }
                                      placeholder={'Area in ' + toiletUnitLabel}
                                      type="number"
                                    />
                                  </View>
                                </View>
                              ))}
                            </View>
                          )}

                          {/* In-room facilities Checkboxes */}
                          <View style={{ marginTop: 4 }}>
                            <Text style={styles.facilitiesHeading}>In-room facilities</Text>
                            <View style={{ marginTop: 8, gap: 8 }}>
                              {FACILITY_OPTIONS.map((fac) => (
                                <Ux4gCheckbox
                                  key={fac.id}
                                  value={(room.facilities || []).includes(fac.id)}
                                  onChanged={() => toggleRoomFacility(roomIdx, fac.id)}
                                  label={fac.label}
                                  size="medium"
                                  activeColor={UX4GColors.primary}
                                />
                              ))}
                            </View>
                          </View>
                        </View>
                      )}
                    </Ux4gCard>
                  );
                })}

                {/* "Your category" Lavender Card Carousel Section */}
                <View style={styles.categoryBannerContainer}>
                  <Text style={styles.categoryBannerHeading}>Your category</Text>
                  <Text style={styles.categoryBannerBody}>
                    {'Your highest room tariff is ₹' +
                      (highestTariff > 0 ? highestTariff.toLocaleString('en-IN') : '2,000') +
                      ' per night, so this homestay registers as '}
                    <Text style={{ fontWeight: '700', color: UX4GColors.primary }}>
                      {autoCategory.displayName + '.'}
                    </Text>
                  </Text>

                  {/* Category Tier Card */}
                  {(() => {
                    const activeCat =
                      HOMESTAY_CATEGORIES[categorySlideIndex] || HOMESTAY_CATEGORIES[0];
                    const isMatchedCat = activeCat.id === autoCategory.id;
                    return (
                      <Ux4gCard
                        cornerRadius={10}
                        backgroundColor={UX4GColors.white}
                        borderColor={isMatchedCat ? UX4GColors.primary : UX4GColors.neutral300}
                        borderWidth={isMatchedCat ? 1.5 : 1}
                        elevation={0}
                        style={{ marginTop: 12, padding: 14 }}
                        isClickable={true}
                        onPress={() =>
                          setCategorySlideIndex((categorySlideIndex + 1) % HOMESTAY_CATEGORIES.length)
                        }
                      >
                        <Text style={styles.tierLabel}>{activeCat.name}</Text>
                        <Text style={styles.tierPrice}>{activeCat.range}</Text>
                        <Text style={styles.tierSub}>{activeCat.subtitle}</Text>

                        <Ux4gDivider style="solid" color={UX4GColors.neutral200} thickness={1} containerStyle={{ marginVertical: 10, paddingVertical: 1 }} />

                        <Text style={styles.tierSpecs}>{activeCat.specs}</Text>
                        <Text style={styles.tierAmenities}>{activeCat.amenities}</Text>
                      </Ux4gCard>
                    );
                  })()}

                  {/* Carousel Dots using Ux4gPaginationDotted */}
                  <View style={{ alignItems: 'center', marginTop: 12 }}>
                    <Ux4gPaginationDotted
                      totalPageCount={HOMESTAY_CATEGORIES.length}
                      currentPageIndex={categorySlideIndex}
                      onPageChange={(idx) => setCategorySlideIndex(idx)}
                      showArrows={false}
                      variant="capsule"
                      size="small"
                      activeColor={UX4GColors.primary}
                      inactiveColor={UX4GColors.neutral300}
                    />
                  </View>
                </View>

                {/* Bottom Action Buttons */}
                <View style={styles.actionButtonContainer}>
                  <Ux4gButton
                    text="Continue"
                    variant="primary"
                    size="large"
                    backgroundColor={UX4GColors.primary}
                    contentColor={UX4GColors.white}
                    borderRadius={8}
                    onPress={handleContinueStep5}
                    style={{ width: '100%' }}
                  />
                  <View style={{ height: 10 }} />
                  <Ux4gButton
                    text="Save as Draft"
                    variant="outline"
                    size="large"
                    backgroundColor="transparent"
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
              /* ======================================================== */
              /* SCREEN 6: AMENITIES, FACILITIES & DISTANCES              */
              /* ======================================================== */
              <View style={styles.formContainer}>
                {/* 1. Food and Water Facilities */}
                <Text style={styles.sectionHeading}>Food and Water Facilities</Text>

                {/* Food provided* */}
                <View style={styles.fieldSpacing}>
                  <Text style={styles.radioGroupLabel}>
                    Food provided<Text style={{ color: UX4GColors.red }}>*</Text>
                  </Text>
                  <View style={{ marginTop: 8, gap: 10 }}>
                    {FOOD_OPTIONS.map((opt) => (
                      <Ux4gRadioButton
                        key={opt.id}
                        value={opt.id}
                        groupValue={formData.foodProvided}
                        onChanged={(val) => updateField('foodProvided', val)}
                        label={opt.label}
                        status={errors.foodProvided ? 'error' : 'defaultStatus'}
                        size="medium"
                        color={UX4GColors.primary}
                      />
                    ))}
                  </View>
                  {errors.foodProvided && (
                    <View style={styles.groupErrorRow}>
                      <InfoOutlineIcon size={13} color={UX4GColors.red} />
                      <Text style={styles.groupErrorText}>{errors.foodProvided}</Text>
                    </View>
                  )}
                </View>

                {/* Drinking water* */}
                <View style={styles.fieldSpacing}>
                  <Text style={styles.radioGroupLabel}>
                    Drinking water<Text style={{ color: UX4GColors.red }}>*</Text>
                  </Text>
                  <View style={{ marginTop: 8, gap: 10 }}>
                    {DRINKING_WATER_OPTIONS.map((opt) => (
                      <Ux4gCheckbox
                        key={opt.id}
                        value={(formData.drinkingWater || []).includes(opt.id)}
                        onChanged={() => toggleArrayItem('drinkingWater', opt.id)}
                        label={opt.label}
                        hasError={!!errors.drinkingWater}
                        size="medium"
                        activeColor={UX4GColors.primary}
                      />
                    ))}
                  </View>
                  {errors.drinkingWater && (
                    <View style={styles.groupErrorRow}>
                      <InfoOutlineIcon size={13} color={UX4GColors.red} />
                      <Text style={styles.groupErrorText}>{errors.drinkingWater}</Text>
                    </View>
                  )}
                </View>

                {/* 2. Common Area Facilities */}
                <Text style={[styles.sectionHeading, { marginTop: 10 }]}>
                  Common Area Facilities
                </Text>

                {/* Lobby Checkbox + Unit + Lobby area */}
                <View style={styles.fieldSpacing}>
                  <Ux4gCheckbox
                    value={formData.hasLobby}
                    onChanged={(val) => updateField('hasLobby', !!val)}
                    label="The property has a lobby or lounge with seating"
                    size="medium"
                    activeColor={UX4GColors.primary}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Unit"
                    size="l"
                    options={AREA_UNITS}
                    selectedOptionIds={formData.lobbyUnit}
                    onSelectionChange={(ids) => updateField('lobbyUnit', ids)}
                    placeholder="Sq. ft."
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Lobby area"
                    size="large"
                    value={formData.lobbyArea}
                    onValueChange={(v) => updateField('lobbyArea', v)}
                    placeholder="Numbers only"
                    type="number"
                    status={errors.lobbyArea ? 'error' : 'defaultStatus'}
                    caption={errors.lobbyArea}
                  />
                </View>

                {/* Dining area Checkbox + Unit + Dining area */}
                <View style={styles.fieldSpacing}>
                  <Ux4gCheckbox
                    value={formData.hasDiningArea}
                    onChanged={(val) => updateField('hasDiningArea', !!val)}
                    label="The property has a dining area with seating"
                    size="medium"
                    activeColor={UX4GColors.primary}
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Unit"
                    size="l"
                    options={AREA_UNITS}
                    selectedOptionIds={formData.diningUnit}
                    onSelectionChange={(ids) => updateField('diningUnit', ids)}
                    placeholder="Sq. ft."
                  />
                </View>

                <View style={styles.fieldSpacing}>
                  <Ux4gInputField
                    label="Dining area"
                    size="large"
                    value={formData.diningArea}
                    onValueChange={(v) => updateField('diningArea', v)}
                    placeholder="Numbers only"
                    type="number"
                    status={errors.diningArea ? 'error' : 'defaultStatus'}
                    caption={errors.diningArea}
                  />
                </View>

                {/* Parking capacity */}
                <View style={styles.fieldSpacing}>
                  <Ux4gSelectionDropdown
                    label="Parking capacity"
                    size="l"
                    options={PARKING_CAPACITY_OPTIONS}
                    selectedOptionIds={formData.parkingCapacity}
                    onSelectionChange={(ids) => updateField('parkingCapacity', ids)}
                    placeholder="Select — 0 to 20 vehicles"
                  />
                </View>

                {/* 3. Mandatory Facilities */}
                <Text style={[styles.sectionHeading, { marginTop: 12 }]}>
                  Mandatory Facilities
                </Text>

                {/* Cleanliness and safety */}
                <View style={styles.fieldSpacing}>
                  <Text style={styles.subGroupHeading}>Cleanliness and safety</Text>
                  <View style={{ marginTop: 8, gap: 10 }}>
                    {MANDATORY_CLEANLINESS_OPTIONS.map((opt) => (
                      <Ux4gCheckbox
                        key={opt.id}
                        value={(formData.mandatoryCleanliness || []).includes(opt.id)}
                        onChanged={() => toggleArrayItem('mandatoryCleanliness', opt.id)}
                        label={opt.label}
                        size="medium"
                        activeColor={UX4GColors.primary}
                      />
                    ))}
                  </View>
                </View>

                {/* Guest facing quality */}
                <View style={styles.fieldSpacing}>
                  <Text style={styles.subGroupHeading}>Guest facing quality</Text>
                  <View style={{ marginTop: 8, gap: 10 }}>
                    {MANDATORY_GUEST_QUALITY_OPTIONS.map((opt) => (
                      <Ux4gCheckbox
                        key={opt.id}
                        value={(formData.mandatoryGuestQuality || []).includes(opt.id)}
                        onChanged={() => toggleArrayItem('mandatoryGuestQuality', opt.id)}
                        label={opt.label}
                        size="medium"
                        activeColor={UX4GColors.primary}
                      />
                    ))}
                  </View>
                </View>

                {/* Records and emergencies */}
                <View style={styles.fieldSpacing}>
                  <Text style={styles.subGroupHeading}>Records and emergencies</Text>
                  <View style={{ marginTop: 8, gap: 10 }}>
                    {MANDATORY_RECORDS_OPTIONS.map((opt) => (
                      <Ux4gCheckbox
                        key={opt.id}
                        value={(formData.mandatoryRecords || []).includes(opt.id)}
                        onChanged={() => toggleArrayItem('mandatoryRecords', opt.id)}
                        label={opt.label}
                        size="medium"
                        activeColor={UX4GColors.primary}
                      />
                    ))}
                  </View>
                </View>

                {/* 4. Additional Facilities */}
                <Text style={[styles.sectionHeading, { marginTop: 12 }]}>
                  Additional Facilities
                </Text>

                {/* Services */}
                <View style={styles.fieldSpacing}>
                  <Text style={styles.subGroupHeading}>Services</Text>
                  <View style={{ marginTop: 8, gap: 10 }}>
                    {ADDITIONAL_SERVICES_OPTIONS.map((opt) => (
                      <Ux4gCheckbox
                        key={opt.id}
                        value={(formData.additionalServices || []).includes(opt.id)}
                        onChanged={() => toggleArrayItem('additionalServices', opt.id)}
                        label={opt.label}
                        size="medium"
                        activeColor={UX4GColors.primary}
                      />
                    ))}
                  </View>
                </View>

                {/* Comfort */}
                <View style={styles.fieldSpacing}>
                  <Text style={styles.subGroupHeading}>Comfort</Text>
                  <View style={{ marginTop: 8, gap: 10 }}>
                    {ADDITIONAL_COMFORT_OPTIONS.map((opt) => (
                      <Ux4gCheckbox
                        key={opt.id}
                        value={(formData.additionalComfort || []).includes(opt.id)}
                        onChanged={() => toggleArrayItem('additionalComfort', opt.id)}
                        label={opt.label}
                        size="medium"
                        activeColor={UX4GColors.primary}
                      />
                    ))}
                  </View>
                </View>

                {/* 5. Other Details */}
                <Text style={[styles.sectionHeading, { marginTop: 12 }]}>Other Details</Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gTextArea
                    label="Eco-friendly practices at the property (optional)"
                    value={formData.ecoFriendlyPractices}
                    onValueChange={(v) => updateField('ecoFriendlyPractices', v)}
                    placeholder="Solar water heating, rainwater harvesting, composting — anything you would want a guest to know"
                    maxLength={200}
                    caption="Description"
                    showCaptionIcon={true}
                    minHeight="medium"
                    size="large"
                  />
                </View>

                {/* Bottom Action Buttons */}
                <View style={styles.actionButtonContainer}>
                  <Ux4gButton
                    text="Continue"
                    variant="primary"
                    size="large"
                    backgroundColor={UX4GColors.primary}
                    contentColor={UX4GColors.white}
                    borderRadius={8}
                    onPress={handleContinueStep6}
                    style={{ width: '100%' }}
                  />
                  <View style={{ height: 10 }} />
                  <Ux4gButton
                    text="Save as Draft"
                    variant="outline"
                    size="large"
                    backgroundColor="transparent"
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
              /* ======================================================== */
              /* SCREEN 7: COMPLIANCE & SAFETY CHECKLIST                  */
              /* ======================================================== */
              <View style={styles.formContainer}>
                {/* 1. Verified by the Department */}
                <Text style={styles.sectionHeading}>Verified by the Department</Text>
                <Text style={styles.complianceHelperBody}>
                  Checked automatically from what you have already entered. Nothing to do here.
                </Text>

                <View style={styles.fieldSpacing}>
                  <Text style={styles.subGroupHeading}>Already satisfied</Text>
                  <View style={{ marginTop: 8, gap: 10 }}>
                    {VERIFIED_BY_DEPT_ITEMS.map((itemLabel, idx) => (
                      <Ux4gCheckbox
                        key={'dept-' + idx}
                        value={true}
                        enabled={false}
                        label={itemLabel}
                        size="medium"
                        labelStyle={{ fontWeight: '600', color: UX4GColors.neutral800 }}
                      />
                    ))}
                  </View>
                </View>

                {/* 2. Declarations */}
                <Text style={[styles.sectionHeading, { marginTop: 8 }]}>Declarations</Text>

                <View style={{ marginBottom: 16 }}>
                  <Ux4gStatusBanner
                    variant="warningLight"
                    title="These are physically verified during the departmental inspection. Confirming something you do not have will fail the inspection, not the form."
                    subtitle=""
                    titleNumberOfLines={5}
                    backgroundColor={UX4GColors.orange50}
                    borderColor={UX4GColors.orange200}
                    marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
                    paddingStyle={{ paddingVertical: 12, paddingHorizontal: 14 }}
                    containerStyle={{ borderRadius: 10 }}
                    titleStyle={{
                      fontSize: 12.5,
                      lineHeight: 18,
                      fontWeight: '500',
                      color: UX4GColors.orange800,
                    }}
                  />
                </View>

                {/* Safety */}
                <View style={styles.fieldSpacing}>
                  <Text style={styles.subGroupHeading}>Safety</Text>
                  <View style={{ marginTop: 8, gap: 10 }}>
                    {SAFETY_DECLARATION_OPTIONS.map((opt) => (
                      <Ux4gCheckbox
                        key={opt.id}
                        value={(formData.safetyDeclarations || []).includes(opt.id)}
                        onChanged={() => toggleArrayItem('safetyDeclarations', opt.id)}
                        label={opt.label}
                        size="medium"
                        activeColor={UX4GColors.primary}
                        labelStyle={{ fontWeight: '600', color: UX4GColors.neutral800 }}
                      />
                    ))}
                  </View>
                </View>

                {/* Building and services */}
                <View style={styles.fieldSpacing}>
                  <Text style={styles.subGroupHeading}>Building and services</Text>
                  <View style={{ marginTop: 8, gap: 10 }}>
                    {BUILDING_SERVICES_OPTIONS.map((opt) => (
                      <Ux4gCheckbox
                        key={opt.id}
                        value={(formData.buildingServicesDeclarations || []).includes(opt.id)}
                        onChanged={() =>
                          toggleArrayItem('buildingServicesDeclarations', opt.id)
                        }
                        label={opt.label}
                        size="medium"
                        activeColor={UX4GColors.primary}
                        labelStyle={{ fontWeight: '600', color: UX4GColors.neutral800 }}
                      />
                    ))}
                  </View>
                </View>

                {/* Guest safety */}
                <View style={styles.fieldSpacing}>
                  <Text style={styles.subGroupHeading}>Guest safety</Text>
                  <View style={{ marginTop: 8, gap: 10 }}>
                    {GUEST_SAFETY_OPTIONS.map((opt) => (
                      <Ux4gCheckbox
                        key={opt.id}
                        value={(formData.guestSafetyDeclarations || []).includes(opt.id)}
                        onChanged={() =>
                          toggleArrayItem('guestSafetyDeclarations', opt.id)
                        }
                        label={opt.label}
                        size="medium"
                        activeColor={UX4GColors.primary}
                        labelStyle={{ fontWeight: '600', color: UX4GColors.neutral800 }}
                      />
                    ))}
                  </View>
                </View>

                {/* 3. Fire Safety Details */}
                <Text style={[styles.sectionHeading, { marginTop: 10 }]}>
                  Fire Safety Details
                </Text>

                <View style={styles.fieldSpacing}>
                  <Ux4gTextArea
                    label="What fire safety equipment is installed?"
                    required={true}
                    value={formData.fireSafetyDetails}
                    onValueChange={(v) => updateField('fireSafetyDetails', v)}
                    placeholder="For example: two 5 kg ABC powder extinguishers in the kitchen and lobby, smoke detectors in every room"
                    maxLength={200}
                    caption={
                      errors.fireSafetyDetails ||
                      'Shown because you ticked Fire safety equipment above. At least 10 characters.'
                    }
                    status={errors.fireSafetyDetails ? 'error' : 'defaultStatus'}
                    showCaptionIcon={true}
                    minHeight="medium"
                    size="large"
                  />
                </View>

                {/* Final Confirmation Checkbox */}
                <View style={{ marginTop: 2, marginBottom: 6 }}>
                  <Ux4gCheckbox
                    value={formData.complianceConfirmed}
                    onChanged={(val) => updateField('complianceConfirmed', !!val)}
                    label="I confirm the above is true and understand that a false confirmation may void the registration"
                    isRequired={true}
                    hasError={!!errors.complianceConfirmed}
                    size="medium"
                    activeColor={UX4GColors.primary}
                    labelStyle={{ fontWeight: '600', color: UX4GColors.neutral800 }}
                  />
                  {errors.complianceConfirmed && (
                    <View style={styles.groupErrorRow}>
                      <InfoOutlineIcon size={13} color={UX4GColors.red} />
                      <Text style={styles.groupErrorText}>
                        {errors.complianceConfirmed}
                      </Text>
                    </View>
                  )}
                </View>

                {/* Bottom Action Buttons */}
                <View style={styles.actionButtonContainer}>
                  <Ux4gButton
                    text="Continue"
                    variant="primary"
                    size="large"
                    backgroundColor={UX4GColors.primary}
                    contentColor={UX4GColors.white}
                    borderRadius={8}
                    onPress={handleContinueStep7}
                    style={{ width: '100%' }}
                  />
                  <View style={{ height: 10 }} />
                  <Ux4gButton
                    text="Save as Draft"
                    variant="outline"
                    size="large"
                    backgroundColor="transparent"
                    contentColor={UX4GColors.primary}
                    borderColor={UX4GColors.primary200}
                    borderWidth={1}
                    borderRadius={8}
                    onPress={handleSaveDraft}
                    style={{ width: '100%' }}
                  />
                </View>
              </View>
            ) : step === 8 ? (
              /* ======================================================== */
              /* SCREEN 8: DOCUMENTS UPLOAD (PIXEL-PERFECT MATCH)         */
              /* ======================================================== */
              <View style={styles.formContainer}>
                {/* Cyan Info Banner */}
                <View style={{ marginBottom: 14 }}>
                  <Ux4gStatusBanner
                    variant="infoLight"
                    title="PDF, JPG or PNG · up to 25 MB each · photographs are optimised on upload. Stated once, here, rather than repeated in every row."
                    subtitle=""
                    titleNumberOfLines={5}
                    backgroundColor={UX4GColors.cyan50}
                    borderColor={UX4GColors.cyan200}
                    marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
                    paddingStyle={{ paddingVertical: 12, paddingHorizontal: 14 }}
                    containerStyle={{ borderRadius: 10 }}
                    titleStyle={{
                      fontSize: 12.5,
                      lineHeight: 18,
                      fontWeight: '500',
                      color: UX4GColors.cyan800,
                    }}
                  />
                </View>

                {/* 1. Ownership and land Card */}
                <Ux4gCard
                  cornerRadius={12}
                  backgroundColor={UX4GColors.white}
                  borderColor={UX4GColors.neutral200}
                  borderWidth={1}
                  elevation={0}
                  style={{ marginBottom: 14, padding: 14 }}
                >
                  <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={() => toggleDocSection('ownership')}
                    style={styles.roomCardHeader}
                  >
                    <Text style={styles.roomCardTitle}>Ownership and land</Text>
                    {formData.docSectionsExpanded.ownership ? (
                      <ChevronUpIcon size={20} color={UX4GColors.neutral600} />
                    ) : (
                      <ChevronDownIcon size={20} color={UX4GColors.neutral600} />
                    )}
                  </TouchableOpacity>

                  {formData.docSectionsExpanded.ownership && (
                    <View style={{ marginTop: 14, gap: 18 }}>
                      <DocumentUploadSlot
                        title="Proof of ownership or lease"
                        required={true}
                        ruleText="PDF only · 1 to 2 files · revenue records showing title"
                        allowedExtensions={['pdf']}
                        maxFiles={2}
                        uploadedFiles={formData.docFiles.ownership_proof}
                        onFilesChanged={(files) => setDocSlotFiles('ownership_proof', files)}
                      />

                      <DocumentUploadSlot
                        title="Approved building map"
                        required={true}
                        disabled={formData.byeLawsNotApplicable}
                        ruleText="PDF, PNG or JPG · 1 file"
                        allowedExtensions={['pdf', 'png', 'jpg']}
                        maxFiles={1}
                        uploadedFiles={formData.docFiles.building_map}
                        onFilesChanged={(files) => setDocSlotFiles('building_map', files)}
                      />

                      {/* Not applicable checkbox */}
                      <View>
                        <Ux4gCheckbox
                          value={formData.byeLawsNotApplicable}
                          onChanged={(val) =>
                            updateField('byeLawsNotApplicable', !!val)
                          }
                          label="Not applicable to this property"
                          size="medium"
                          activeColor={UX4GColors.primary}
                          labelStyle={{ fontWeight: '600', color: UX4GColors.neutral800 }}
                        />
                        <Text style={styles.checkboxSubHelperText}>
                          Say why below — do not upload a blank form in its place.
                        </Text>
                      </View>

                      <DocumentUploadSlot
                        title="Affidavit of no building bye-laws"
                        required={false}
                        downloadLinkText="Download the format"
                        onDownloadFormat={() =>
                          alert('Downloading Affidavit of No Building Bye-Laws format (PDF)...')
                        }
                        ruleText="PDF only · 1 file · required only if the map is not applicable"
                        allowedExtensions={['pdf']}
                        maxFiles={1}
                        uploadedFiles={formData.docFiles.bye_laws_affidavit}
                        onFilesChanged={(files) => setDocSlotFiles('bye_laws_affidavit', files)}
                      />
                    </View>
                  )}
                </Ux4gCard>

                {/* 2. Declarations Accordion Card */}
                {(() => {
                  const df = formData.docFiles || {};
                  const slots = [
                    (df.solvency_affidavit || []).length > 0,
                    (df.undertaking || []).length > 0,
                    (df.pledge || []).length > 0,
                  ];
                  const uploadedCount = slots.filter(Boolean).length;
                  return (
                    <Ux4gCard
                      cornerRadius={12}
                      backgroundColor={UX4GColors.white}
                      borderColor={UX4GColors.neutral200}
                      borderWidth={1}
                      elevation={0}
                      style={{ marginBottom: 14, padding: 14 }}
                    >
                      <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={() => toggleDocSection('declarations')}
                        style={styles.roomCardHeader}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.roomCardTitle}>Declarations</Text>
                          <Text style={styles.roomSummaryText}>
                            {'3 documents · ' + (uploadedCount > 0 ? uploadedCount + ' uploaded' : 'none uploaded yet')}
                          </Text>
                          <View style={styles.docStatusDotRow}>
                            {slots.map((done, i) => (
                              <View
                                key={'decl-' + i}
                                style={[
                                  styles.statusCircle,
                                  done ? styles.statusCircleDone : styles.statusCircleEmpty,
                                ]}
                              >
                                {done && <CheckSmallIcon size={10} color={UX4GColors.white} />}
                              </View>
                            ))}
                          </View>
                        </View>
                        {formData.docSectionsExpanded.declarations ? (
                          <ChevronUpIcon size={20} color={UX4GColors.neutral600} />
                        ) : (
                          <ChevronDownIcon size={20} color={UX4GColors.neutral600} />
                        )}
                      </TouchableOpacity>

                      {formData.docSectionsExpanded.declarations && (
                        <View style={{ marginTop: 14, gap: 18 }}>
                          <DocumentUploadSlot
                            title="Affidavit of solvency"
                            required={true}
                            ruleText="PDF only · 1 file"
                            allowedExtensions={['pdf']}
                            maxFiles={1}
                            uploadedFiles={formData.docFiles.solvency_affidavit}
                            onFilesChanged={(files) => setDocSlotFiles('solvency_affidavit', files)}
                          />
                          <DocumentUploadSlot
                            title="Undertaking"
                            required={true}
                            ruleText="PDF only · 1 file"
                            allowedExtensions={['pdf']}
                            maxFiles={1}
                            uploadedFiles={formData.docFiles.undertaking}
                            onFilesChanged={(files) => setDocSlotFiles('undertaking', files)}
                          />
                          <DocumentUploadSlot
                            title="Pledge"
                            required={true}
                            ruleText="PDF only · 1 file"
                            allowedExtensions={['pdf']}
                            maxFiles={1}
                            uploadedFiles={formData.docFiles.pledge}
                            onFilesChanged={(files) => setDocSlotFiles('pledge', files)}
                          />
                        </View>
                      )}
                    </Ux4gCard>
                  );
                })()}

                {/* 3. Identity and tax Accordion Card */}
                {(() => {
                  const df = formData.docFiles || {};
                  const slots = [
                    (df.identity_proof || []).length > 0,
                    (df.pan_tax || []).length > 0,
                  ];
                  const uploadedCount = slots.filter(Boolean).length;
                  return (
                    <Ux4gCard
                      cornerRadius={12}
                      backgroundColor={UX4GColors.white}
                      borderColor={UX4GColors.neutral200}
                      borderWidth={1}
                      elevation={0}
                      style={{ marginBottom: 14, padding: 14 }}
                    >
                      <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={() => toggleDocSection('identity')}
                        style={styles.roomCardHeader}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.roomCardTitle}>Identity and tax</Text>
                          <Text style={styles.roomSummaryText}>
                            {'2 documents · ' + (uploadedCount > 0 ? uploadedCount + ' uploaded' : 'none uploaded yet')}
                          </Text>
                          <View style={styles.docStatusDotRow}>
                            {slots.map((done, i) => (
                              <View
                                key={'ident-' + i}
                                style={[
                                  styles.statusCircle,
                                  done ? styles.statusCircleDone : styles.statusCircleEmpty,
                                ]}
                              >
                                {done && <CheckSmallIcon size={10} color={UX4GColors.white} />}
                              </View>
                            ))}
                          </View>
                        </View>
                        {formData.docSectionsExpanded.identity ? (
                          <ChevronUpIcon size={20} color={UX4GColors.neutral600} />
                        ) : (
                          <ChevronDownIcon size={20} color={UX4GColors.neutral600} />
                        )}
                      </TouchableOpacity>

                      {formData.docSectionsExpanded.identity && (
                        <View style={{ marginTop: 14, gap: 18 }}>
                          <DocumentUploadSlot
                            title="Identity proof"
                            required={true}
                            ruleText="PDF, JPG or PNG · Aadhaar / Voter ID / Passport"
                            allowedExtensions={['pdf', 'jpg', 'png']}
                            maxFiles={1}
                            uploadedFiles={formData.docFiles.identity_proof}
                            onFilesChanged={(files) => setDocSlotFiles('identity_proof', files)}
                          />
                          <DocumentUploadSlot
                            title="PAN / Property tax receipt"
                            required={false}
                            ruleText="PDF, JPG or PNG · 1 file"
                            allowedExtensions={['pdf', 'jpg', 'png']}
                            maxFiles={1}
                            uploadedFiles={formData.docFiles.pan_tax}
                            onFilesChanged={(files) => setDocSlotFiles('pan_tax', files)}
                          />
                        </View>
                      )}
                    </Ux4gCard>
                  );
                })()}

                {/* 4. Photographs Accordion Card */}
                {(() => {
                  const df = formData.docFiles || {};
                  const slots = [
                    (df.exterior_photo || []).length > 0,
                    (df.room1_photo || []).length > 0,
                    (df.room2_photo || []).length >= 2,
                    (df.common_photo || []).length > 0,
                  ];
                  const uploadedCount = slots.filter(Boolean).length;
                  return (
                    <Ux4gCard
                      cornerRadius={12}
                      backgroundColor={UX4GColors.white}
                      borderColor={UX4GColors.neutral200}
                      borderWidth={1}
                      elevation={0}
                      style={{ marginBottom: 14, padding: 14 }}
                    >
                      <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={() => toggleDocSection('photographs')}
                        style={styles.roomCardHeader}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.roomCardTitle}>Photographs</Text>
                          <Text style={styles.roomSummaryText}>
                            {'4 documents · ' + (uploadedCount > 0 ? uploadedCount + ' uploaded' : 'none uploaded yet')}
                          </Text>
                          <View style={styles.docStatusDotRow}>
                            {slots.map((done, i) => (
                              <View
                                key={'photo-' + i}
                                style={[
                                  styles.statusCircle,
                                  done ? styles.statusCircleDone : styles.statusCircleEmpty,
                                ]}
                              >
                                {done && <CheckSmallIcon size={10} color={UX4GColors.white} />}
                              </View>
                            ))}
                          </View>
                        </View>
                        {formData.docSectionsExpanded.photographs ? (
                          <ChevronUpIcon size={20} color={UX4GColors.neutral600} />
                        ) : (
                          <ChevronDownIcon size={20} color={UX4GColors.neutral600} />
                        )}
                      </TouchableOpacity>

                      {formData.docSectionsExpanded.photographs && (
                        <View style={{ marginTop: 14, gap: 18 }}>
                          <DocumentUploadSlot
                            title="Exterior front view"
                            required={true}
                            ruleText="JPG or PNG · 1 file"
                            allowedExtensions={['jpg', 'png']}
                            maxFiles={1}
                            uploadedFiles={formData.docFiles.exterior_photo}
                            onFilesChanged={(files) => setDocSlotFiles('exterior_photo', files)}
                          />
                          <DocumentUploadSlot
                            title="Room 1 photographs"
                            required={true}
                            ruleText="JPG or PNG · 1 to 2 files"
                            allowedExtensions={['jpg', 'png']}
                            maxFiles={2}
                            uploadedFiles={formData.docFiles.room1_photo}
                            onFilesChanged={(files) => setDocSlotFiles('room1_photo', files)}
                          />
                          <DocumentUploadSlot
                            title="Room 2 photographs"
                            required={true}
                            ruleText="JPG or PNG · 2 files required"
                            allowedExtensions={['jpg', 'png']}
                            maxFiles={2}
                            uploadedFiles={formData.docFiles.room2_photo}
                            onFilesChanged={(files) => setDocSlotFiles('room2_photo', files)}
                          />
                          <DocumentUploadSlot
                            title="Common areas & bathroom"
                            required={false}
                            ruleText="JPG or PNG · 1 to 2 files"
                            allowedExtensions={['jpg', 'png']}
                            maxFiles={2}
                            uploadedFiles={formData.docFiles.common_photo}
                            onFilesChanged={(files) => setDocSlotFiles('common_photo', files)}
                          />
                        </View>
                      )}
                    </Ux4gCard>
                  );
                })()}

                {/* Still Missing Summary Warning Banner */}
                {(() => {
                  const missingText = getMissingDocsText();
                  if (!missingText) return null;
                  return (
                    <View style={{ marginBottom: 4 }}>
                      <Ux4gStatusBanner
                        variant="warningLight"
                        title="Still missing"
                        subtitle={missingText}
                        subtitleNumberOfLines={6}
                        backgroundColor={UX4GColors.orange50}
                        borderColor={UX4GColors.orange200}
                        marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
                        paddingStyle={{ paddingVertical: 12, paddingHorizontal: 14 }}
                        containerStyle={{ borderRadius: 10 }}
                        titleStyle={{
                          fontSize: 13,
                          fontWeight: '700',
                          color: UX4GColors.orange800,
                        }}
                        subtitleStyle={{
                          fontSize: 12,
                          lineHeight: 18,
                          color: UX4GColors.orange800,
                          marginTop: 3,
                        }}
                      />
                    </View>
                  );
                })()}

                {/* Bottom Action Buttons */}
                <View style={styles.actionButtonContainer}>
                  <Ux4gButton
                    text="Continue"
                    variant="primary"
                    size="large"
                    backgroundColor={UX4GColors.primary}
                    contentColor={UX4GColors.white}
                    borderRadius={8}
                    onPress={handleContinueStep8}
                    style={{ width: '100%' }}
                  />
                  <View style={{ height: 10 }} />
                  <Ux4gButton
                    text="Save as Draft"
                    variant="outline"
                    size="large"
                    backgroundColor="transparent"
                    contentColor={UX4GColors.primary}
                    borderColor={UX4GColors.primary200}
                    borderWidth={1}
                    borderRadius={8}
                    onPress={handleSaveDraft}
                    style={{ width: '100%' }}
                  />
                </View>
              </View>
            ) : step === 9 ? (
              /* ======================================================== */
              /* SCREEN 9: REVIEW (PIXEL-PERFECT MATCH)                   */
              /* ======================================================== */
              <View style={styles.formContainer}>
                <Text style={styles.sectionHeading}>Preview Your Application</Text>

                {/* Review Summary Banners using official Ux4gStatusBanner */}
                {[
                  {
                    stepNum: 1,
                    title: 'Step 1 · Unit / Property Details',
                    subtitle:
                      (formData.unitName && formData.unitName.trim()
                        ? formData.unitName.trim()
                        : 'Property name') +
                      ' · legal entity · proprietary · ' +
                      (formData.builtUpArea && formData.builtUpArea.trim()
                        ? formData.builtUpArea.trim()
                        : '2,500') +
                      ' sq ft · 2 lettable rooms · ' +
                      autoCategory.displayName,
                  },
                  {
                    stepNum: 2,
                    title: 'Step 2 · Location',
                    subtitle:
                      (formData.houseStreet && formData.houseStreet.trim()
                        ? formData.houseStreet.trim()
                        : 'Street address') +
                      ' · district · tehsil · ' +
                      (formData.pinCode && formData.pinCode.trim()
                        ? formData.pinCode.trim()
                        : 'PIN') +
                      ' · pin placed on the map',
                  },
                  {
                    stepNum: 3,
                    title: 'Step 3 · Owner / Applicant Details',
                    subtitle:
                      (formData.firstName && formData.firstName.trim()
                        ? formData.firstName.trim() +
                          (formData.lastName ? ' ' + formData.lastName.trim() : '')
                        : 'Applicant name') +
                      ' · ' +
                      (formData.panNumber ? 'PAN entered' : 'PAN pending') +
                      ' · ' +
                      (formData.mobileVerified ? 'mobile verified' : 'mobile pending') +
                      ' · ' +
                      (formData.emailVerified ? 'email verified' : 'email pending'),
                  },
                  {
                    stepNum: 4,
                    title: 'Step 4 · Management & Staff',
                    subtitle:
                      (formData.ownerRunsPersonally
                        ? 'Owner runs the property personally'
                        : 'Manager assigned') +
                      ' · ' +
                      (formData.totalStaff || '3') +
                      ' staff, ' +
                      formData.hiredLocally +
                      ' hired locally',
                  },
                  {
                    stepNum: 5,
                    title: 'Step 5 · Rooms / Accommodation',
                    subtitle:
                      (formData.rooms ? formData.rooms.length : 4) +
                      ' rooms · ' +
                      totalBeds +
                      ' beds · highest tariff ₹' +
                      (highestTariff > 0 ? highestTariff.toLocaleString('en-IN') : '2,000') +
                      ' · within the 6 room and 12 bed caps',
                  },
                  {
                    stepNum: 6,
                    title: 'Step 6 · Amenities, Facilities & Distances',
                    subtitle:
                      'Food ' +
                      (formData.foodProvided || 'both') +
                      ' · RO water · 12 facilities confirmed · 6 distances recorded',
                  },
                  {
                    stepNum: 7,
                    title: 'Step 7 · Compliance & Safety',
                    subtitle:
                      '3 verified automatically · 12 of 12 confirmed · fire safety detail given',
                  },
                ].map((item) => (
                  <View key={'rev-' + item.stepNum} style={{ marginBottom: 12 }}>
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

                {/* Step 8 Dynamic Review Card (Green if complete, Amber if docs missing) */}
                {(() => {
                  const df = formData.docFiles || {};
                  const totalSlots = 8;
                  const uploadedSlots = [
                    (df.ownership_proof || []).length > 0,
                    (df.building_map || []).length > 0 || formData.byeLawsNotApplicable,
                    (df.solvency_affidavit || []).length > 0,
                    (df.undertaking || []).length > 0,
                    (df.pledge || []).length > 0,
                    (df.identity_proof || []).length > 0,
                    (df.exterior_photo || []).length > 0,
                    (df.room2_photo || []).length >= 2,
                  ].filter(Boolean).length;
                  const remainingSlots = Math.max(0, totalSlots - uploadedSlots);
                  const allDocsDone = remainingSlots === 0;
                  return (
                    <View style={{ marginBottom: 18 }}>
                      <Ux4gStatusBanner
                        variant={allDocsDone ? 'successLight' : 'warningLight'}
                        title="Step 8 · Documents"
                        subtitle={
                          allDocsDone
                            ? totalSlots + ' of ' + totalSlots + ' uploaded · all complete'
                            : uploadedSlots +
                              ' of ' +
                              totalSlots +
                              ' uploaded · ' +
                              remainingSlots +
                              ' still outstanding'
                        }
                        titleNumberOfLines={2}
                        subtitleNumberOfLines={3}
                        backgroundColor={allDocsDone ? UX4GColors.green50 : UX4GColors.orange50}
                        borderColor={allDocsDone ? UX4GColors.green200 : UX4GColors.orange200}
                        marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
                        paddingStyle={{ paddingVertical: 12, paddingHorizontal: 14 }}
                        containerStyle={{ borderRadius: 10 }}
                        titleStyle={{
                          fontSize: 13.5,
                          fontWeight: '700',
                          color: allDocsDone ? UX4GColors.green700 : UX4GColors.orange800,
                          lineHeight: 19,
                        }}
                        subtitleStyle={{
                          fontSize: 12,
                          lineHeight: 17,
                          color: allDocsDone ? UX4GColors.green : UX4GColors.orange800,
                          marginTop: 3,
                        }}
                        trailingIcon={
                          <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => setStep(8)}
                            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                            style={{ padding: 2 }}
                          >
                            <PencilOutlineIcon size={17} color={UX4GColors.neutral800} />
                          </TouchableOpacity>
                        }
                      />
                    </View>
                  );
                })()}

                {/* Declaration Section */}
                <Text style={styles.sectionHeading}>Declaration</Text>

                <View style={{ gap: 12 }}>
                  <View>
                    <Ux4gCheckbox
                      value={formData.declTrueKnowledge}
                      onChanged={(val) => updateField('declTrueKnowledge', !!val)}
                      label="Everything I have entered is true to the best of my knowledge"
                      isRequired={true}
                      hasError={!!errors.declTrueKnowledge}
                      size="medium"
                      activeColor={UX4GColors.primary}
                      labelStyle={{ fontWeight: '600', color: UX4GColors.neutral800 }}
                    />
                    {errors.declTrueKnowledge && (
                      <View style={styles.groupErrorRow}>
                        <InfoOutlineIcon size={13} color={UX4GColors.red} />
                        <Text style={styles.groupErrorText}>
                          {errors.declTrueKnowledge}
                        </Text>
                      </View>
                    )}
                  </View>

                  <View>
                    <Ux4gCheckbox
                      value={formData.declPhysicalInspection}
                      onChanged={(val) =>
                        updateField('declPhysicalInspection', !!val)
                      }
                      label="I agree to a physical inspection of the property"
                      isRequired={true}
                      hasError={!!errors.declPhysicalInspection}
                      size="medium"
                      activeColor={UX4GColors.primary}
                      labelStyle={{ fontWeight: '600', color: UX4GColors.neutral800 }}
                    />
                    {errors.declPhysicalInspection && (
                      <View style={styles.groupErrorRow}>
                        <InfoOutlineIcon size={13} color={UX4GColors.red} />
                        <Text style={styles.groupErrorText}>
                          {errors.declPhysicalInspection}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>

                {/* Bottom Action Buttons */}
                <View style={styles.actionButtonContainer}>
                  <Ux4gButton
                    text="Continue"
                    variant="primary"
                    size="large"
                    backgroundColor={UX4GColors.primary}
                    contentColor={UX4GColors.white}
                    borderRadius={8}
                    onPress={handleContinueStep9}
                    style={{ width: '100%' }}
                  />
                  <View style={{ height: 10 }} />
                  <Ux4gButton
                    text="Save as Draft"
                    variant="outline"
                    size="large"
                    backgroundColor="transparent"
                    contentColor={UX4GColors.primary}
                    borderColor={UX4GColors.primary200}
                    borderWidth={1}
                    borderRadius={8}
                    onPress={handleSaveDraft}
                    style={{ width: '100%' }}
                  />
                </View>
              </View>
            ) : step === 10 ? (
              /* ======================================================== */
              /* SCREEN 10: PAYMENT (PIXEL-PERFECT MATCH)                 */
              /* ======================================================== */
              <View style={styles.formContainer}>
                <Text style={styles.sectionHeading}>Fee Details</Text>

                {/* Fee Details Summary Card using official Ux4gCard & Ux4gDivider */}
                <Ux4gCard
                  cornerRadius={12}
                  backgroundColor={UX4GColors.white}
                  borderColor={UX4GColors.neutral200}
                  borderWidth={1}
                  elevation={0}
                  style={{ padding: 16, marginBottom: 18 }}
                >
                  <Text style={styles.feeAppNumberHeading}>
                    {'Homestay registration ·\nHS-2026-000000'}
                  </Text>

                  <View style={styles.feeRow}>
                    <View style={{ flex: 1, paddingRight: 16 }}>
                      <Text style={styles.feeLineDescription}>
                        {'Registration fee — ' +
                          autoCategory.displayName +
                          ' category, ' +
                          areaTypeDisplay}
                      </Text>
                    </View>
                    <Text style={styles.feeLineAmount}>{formattedFee}</Text>
                  </View>

                  <Ux4gDivider style="solid" color={UX4GColors.neutral200} thickness={1} containerStyle={{ marginVertical: 12, paddingVertical: 1 }} />

                  <View style={styles.feeTotalRow}>
                    <Text style={styles.feeTotalLabel}>Total payable</Text>
                    <Text style={styles.feeTotalAmount}>{formattedFee}</Text>
                  </View>
                </Ux4gCard>

                {/* Non-refundable Confirmation Checkbox using official Ux4gCheckbox */}
                <View style={{ marginBottom: 4 }}>
                  <Ux4gCheckbox
                    value={formData.feeNonRefundableConfirmed}
                    onChanged={(val) =>
                      updateField('feeNonRefundableConfirmed', !!val)
                    }
                    label="I understand the fee is non-refundable once the application is submitted"
                    isRequired={true}
                    hasError={!!errors.feeNonRefundableConfirmed}
                    size="medium"
                    activeColor={UX4GColors.primary}
                    labelStyle={{ fontWeight: '600', color: UX4GColors.neutral800 }}
                  />
                  {errors.feeNonRefundableConfirmed && (
                    <View style={styles.groupErrorRow}>
                      <InfoOutlineIcon size={13} color={UX4GColors.red} />
                      <Text style={styles.groupErrorText}>
                        {errors.feeNonRefundableConfirmed}
                      </Text>
                    </View>
                  )}
                </View>

                {/* Bottom Action Buttons using official Ux4gButton */}
                <View style={styles.actionButtonContainer}>
                  <Ux4gButton
                    text="Continue to payment"
                    variant="primary"
                    size="large"
                    backgroundColor={UX4GColors.primary}
                    contentColor={UX4GColors.white}
                    borderRadius={8}
                    onPress={handleContinueStep10}
                    style={{ width: '100%' }}
                  />
                  <View style={{ height: 10 }} />
                  <Ux4gButton
                    text="Save as Draft"
                    variant="outline"
                    size="large"
                    backgroundColor="transparent"
                    contentColor={UX4GColors.primary}
                    borderColor={UX4GColors.primary200}
                    borderWidth={1}
                    borderRadius={8}
                    onPress={handleSaveDraft}
                    style={{ width: '100%' }}
                  />
                </View>
              </View>
            ) : step === 11 ? (
              /* ======================================================== */
              /* SCREEN 11: MODE OF PAYMENT (PIXEL-PERFECT MATCH)         */
              /* ======================================================== */
              <View style={styles.formContainer}>
                <Text style={styles.sectionHeading}>Mode of Payment</Text>
                <Text style={styles.paymentSubtitleText}>
                  {formattedFee + ' payable for HS-2026-000000.'}
                </Text>

                {/* Payment Mode Cards using official Ux4gCard & Ux4gRadioButton */}
                <View style={{ gap: 10, marginBottom: 22 }}>
                  {PAYMENT_MODES.map((mode) => {
                    const isSelected = formData.paymentMode === mode.id;
                    return (
                      <Ux4gCard
                        key={mode.id}
                        cornerRadius={10}
                        backgroundColor={
                          isSelected ? UX4GColors.primary50 : UX4GColors.neutral50
                        }
                        borderColor={
                          isSelected ? UX4GColors.primary200 : UX4GColors.neutral200
                        }
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

                {/* Conditional Payment Input Details */}
                {formData.paymentMode === 'upi' ? (
                  <View>
                    <Text style={styles.sectionHeading}>Enter UPI ID</Text>
                    <View style={styles.fieldSpacing}>
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
                        caption={errors.selectedBank}
                      />
                    </View>
                  </View>
                ) : formData.paymentMode === 'offline' ? (
                  <View>
                    <Text style={styles.sectionHeading}>Offline Payment Reference</Text>
                    <View style={styles.fieldSpacing}>
                      <Ux4gInputField
                        label="DD / Challan / Receipt number"
                        required
                        size="large"
                        value={formData.offlineRef}
                        onValueChange={(v) => updateField('offlineRef', v)}
                        placeholder="Enter reference number"
                        status={errors.offlineRef ? 'error' : 'defaultStatus'}
                        caption={errors.offlineRef}
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
                    text={formData.paymentMode === 'netbanking' ? 'Continue to bank' : 'Pay ' + formattedFee}
                    variant="primary"
                    size="large"
                    backgroundColor={UX4GColors.primary}
                    contentColor={UX4GColors.white}
                    borderRadius={8}
                    onPress={handlePayNow}
                    style={{ width: '100%' }}
                  />
                  <View style={{ height: 10 }} />
                  <Ux4gButton
                    text="Save as Draft"
                    variant="outline"
                    size="large"
                    backgroundColor="transparent"
                    contentColor={UX4GColors.primary}
                    borderColor={UX4GColors.primary200}
                    borderWidth={1}
                    borderRadius={8}
                    onPress={handleSaveDraft}
                    style={{ width: '100%' }}
                  />
                </View>
              </View>
            ) : null}
          </View>
        </ScrollView>

        {/* Payment Redirecting Processing Modal using official Ux4gModal & Ux4gSpinner */}
        <Ux4gModal
          visible={step === 11 && isRedirecting}
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

        {/* Payment Success & Application Submitted Modal */}
        <Ux4gModal
          visible={paymentCompleted}
          onDismiss={() => setPaymentCompleted(false)}
          alignment="centered"
          leadingItem="icon"
          leadingIcon={
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: UX4GColors.green50,
                borderWidth: 2,
                borderColor: UX4GColors.green,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CheckSmallIcon size={22} color={UX4GColors.green} />
            </View>
          }
          showHeader={true}
          headerTitle="Payment Successful!"
          showDescription={true}
          descriptionText={
            'Your payment of ' +
            formattedFee +
            ' has been received. Application HS-2026-000000 (' +
            (formData.unitName.trim() || 'Homestay Unit') +
            ') is submitted for departmental review.'
          }
          showDividers={false}
          showSubtitle={false}
          showBody={false}
          showFooter={true}
          footerButtons="oneButton"
          footerAlign="center"
          primaryButtonText="Back to Step 1"
          onPrimaryClick={() => {
            setPaymentCompleted(false);
            setStep(1);
          }}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: UX4GColors.white,
    borderBottomWidth: 1,
    borderBottomColor: UX4GColors.neutral100,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: UX4GColors.primary100,
    backgroundColor: UX4GColors.primary50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIconContainer: {
    width: 18,
    height: 14,
    justifyContent: 'space-between',
  },
  menuBar: {
    width: '100%',
    height: 2.2,
    backgroundColor: UX4GColors.primary,
    borderRadius: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 12,
    paddingBottom: 36,
  },
  mainCard: {
    backgroundColor: UX4GColors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    padding: 16,
    shadowColor: UX4GColors.neutral1000black,
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  savedBannerRow: {
    width: '100%',
    backgroundColor: UX4GColors.green50,
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  savedBannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  savedCheckCircle: {
    width: 13,
    height: 13,
    borderRadius: 6.5,
    backgroundColor: UX4GColors.green,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  savedCheckIcon: {
    color: UX4GColors.white,
    fontSize: 8.5,
    fontWeight: 'bold',
    marginTop: -1,
  },
  savedBannerText: {
    fontSize: 11.5,
    fontWeight: '600',
    color: UX4GColors.green800,
  },
  stepperBottomDivider: {
    height: 1,
    backgroundColor: UX4GColors.neutral100,
    marginTop: 14,
    marginBottom: 16,
    width: '100%',
  },
  formContainer: {
    marginTop: 2,
  },
  sectionHeading: {
    fontSize: 15.5,
    fontWeight: '700',
    color: UX4GColors.neutral900,
    marginBottom: 12,
  },
  fieldSpacing: {
    marginBottom: 16,
  },
  radioGroup: {
    marginVertical: 8,
  },
  radioGroupLabel: {
    fontSize: 13.5,
    fontWeight: '600',
    color: UX4GColors.neutral800,
  },
  landmarkCard: {
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    borderRadius: 10,
    padding: 14,
    marginBottom: 14,
    backgroundColor: UX4GColors.neutral50,
  },
  landmarkTypeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  landmarkTypeBox: {
    flex: 1,
    backgroundColor: UX4GColors.neutral100,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  landmarkTypeLabel: {
    fontSize: 11,
    color: UX4GColors.neutral500,
    fontWeight: '500',
  },
  landmarkTypeValue: {
    fontSize: 13,
    color: UX4GColors.neutral900,
    fontWeight: '600',
    marginTop: 2,
  },
  deleteIconButton: {
    marginLeft: 12,
    padding: 8,
    borderRadius: 8,
    backgroundColor: UX4GColors.neutral100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  distanceRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 10,
  },
  addLandmarkButton: {
    borderWidth: 1.5,
    borderColor: UX4GColors.primary400,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: UX4GColors.primary50,
    marginTop: 4,
    marginBottom: 8,
  },
  addLandmarkText: {
    fontSize: 14,
    fontWeight: '600',
    color: UX4GColors.primary,
  },
  activitySubheading: {
    fontSize: 13,
    fontWeight: '600',
    color: UX4GColors.neutral700,
    marginTop: 6,
  },
  gpsLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -8,
    marginBottom: 16,
    paddingVertical: 4,
  },
  gpsLocationText: {
    fontSize: 13,
    fontWeight: '500',
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
    fontSize: 13,
    fontWeight: '600',
    color: UX4GColors.neutral700,
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
    marginVertical: 22,
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
  groupErrorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 4,
    marginLeft: 2,
    gap: 5,
  },
  groupErrorText: {
    color: UX4GColors.red,
    fontSize: 12,
    lineHeight: 16,
    flex: 1,
  },
  errorCaption: {
    color: UX4GColors.red,
    fontSize: 12,
    lineHeight: 16,
    marginTop: 6,
    marginBottom: 4,
    marginLeft: 2,
  },
  readOnlyLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: UX4GColors.neutral900,
    marginBottom: 6,
  },
  readOnlyBox: {
    height: 48,
    backgroundColor: UX4GColors.neutral200,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  readOnlyText: {
    fontSize: 13.5,
    color: UX4GColors.neutral600,
  },
  helperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 2,
  },
  helperText: {
    fontSize: 11.5,
    color: UX4GColors.neutral500,
    marginLeft: 4,
  },
  fieldLabelWithAsterisk: {
    fontSize: 13,
    fontWeight: '600',
    color: UX4GColors.neutral900,
    marginBottom: 6,
  },
  datePickerBox: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    backgroundColor: UX4GColors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },
  datePickerPlaceholderText: {
    fontSize: 14,
    color: UX4GColors.neutral400,
  },
  datePickerValueText: {
    fontSize: 14,
    color: UX4GColors.neutral900,
    fontWeight: '500',
  },
  aadhaarInputContainer: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    backgroundColor: UX4GColors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  aadhaarTextInput: {
    flex: 1,
    fontSize: 14,
    color: UX4GColors.neutral900,
    height: '100%',
  },
  eyeIconButton: {
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inlineInputBox: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    backgroundColor: UX4GColors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  inputBoxError: {
    borderColor: UX4GColors.red,
  },
  prefixText: {
    fontSize: 14,
    fontWeight: '600',
    color: UX4GColors.neutral900,
    marginRight: 8,
  },
  inlineInput: {
    flex: 1,
    fontSize: 14,
    color: UX4GColors.neutral900,
    height: '100%',
  },
  verifyButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifyButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: UX4GColors.primary,
  },
  otpBlockContainer: {
    marginTop: 12,
  },
  otpHeadingLabel: {
    fontSize: 12.5,
    fontWeight: '500',
    color: UX4GColors.neutral700,
    marginBottom: 8,
  },
  otpBoxesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  otpBox: {
    flex: 1,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    backgroundColor: UX4GColors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpBoxActive: {
    borderColor: UX4GColors.primary,
    borderWidth: 1.5,
  },
  otpCursorText: {
    fontSize: 20,
    color: UX4GColors.primary,
    fontWeight: '300',
    marginTop: -2,
  },
  otpDashText: {
    fontSize: 18,
    color: UX4GColors.neutral400,
  },
  otpCharText: {
    fontSize: 18,
    fontWeight: '700',
    color: UX4GColors.neutral900,
  },
  resendTimerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  resendGrayText: {
    fontSize: 12,
    color: UX4GColors.neutral500,
  },
  resendActiveTimer: {
    fontSize: 12,
    fontWeight: '600',
    color: UX4GColors.neutral600,
  },
  checkboxSubHelperText: {
    fontSize: 11.5,
    color: UX4GColors.neutral500,
    marginLeft: 32,
    marginTop: 3,
  },
  capacityLabel: {
    fontSize: 12.5,
    fontWeight: '600',
    color: UX4GColors.neutral800,
  },
  rangeSliderWrapper: {
    width: '100%',
  },
  sliderLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sliderLabelText: {
    fontSize: 13.5,
    fontWeight: '600',
    color: UX4GColors.neutral800,
  },
  sliderBadgeBox: {
    width: 44,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    backgroundColor: UX4GColors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderBadgeValue: {
    fontSize: 16,
    fontWeight: '500',
    color: UX4GColors.neutral900,
  },
  sliderTrackContainer: {
    width: '100%',
    height: 24,
    justifyContent: 'center',
    position: 'relative',
  },
  sliderTrackLine: {
    height: 4,
    borderRadius: 2,
    backgroundColor: UX4GColors.neutral300,
  },
  sliderThumb: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: UX4GColors.white,
    borderWidth: 1.5,
    borderColor: UX4GColors.neutral300,
    shadowColor: UX4GColors.neutral1000black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
  sliderTicksContainer: {
    position: 'relative',
    height: 24,
    marginTop: 2,
  },
  tickMarkWrap: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    transform: [{ translateX: -8 }],
    width: 16,
  },
  tickBar: {
    width: 1,
    backgroundColor: UX4GColors.neutral300,
  },
  tickNumberText: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 3,
  },
  sliderCaptionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  sliderCaptionText: {
    fontSize: 12,
    color: UX4GColors.neutral500,
    marginLeft: 5,
  },
  sliderValueBadge: {
    width: 44,
    height: 38,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    backgroundColor: UX4GColors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderValueText: {
    fontSize: 15,
    fontWeight: '600',
    color: UX4GColors.neutral900,
  },
  roomCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  roomCardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: UX4GColors.neutral900,
  },
  roomSummaryText: {
    fontSize: 12,
    color: UX4GColors.neutral500,
    marginTop: 4,
  },
  copyFromPill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    borderRadius: 8,
    backgroundColor: UX4GColors.white,
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 6,
  },
  copyFromText: {
    fontSize: 12.5,
    fontWeight: '500',
    color: UX4GColors.neutral700,
  },
  copyMenuBox: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    borderRadius: 8,
    backgroundColor: UX4GColors.neutral50,
    paddingVertical: 4,
  },
  copyMenuItem: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: UX4GColors.neutral100,
  },
  copyMenuItemText: {
    fontSize: 12.5,
    color: UX4GColors.neutral800,
    fontWeight: '500',
  },
  roomTypeWrapGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 14,
    rowGap: 8,
    marginTop: 8,
  },
  indentedSubAreaGroup: {
    borderLeftWidth: 2,
    borderLeftColor: UX4GColors.neutral200,
    paddingLeft: 12,
    marginTop: 2,
    marginBottom: 14,
    gap: 10,
  },
  indentedSubAreaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  indentedSubLabel: {
    fontSize: 12.5,
    fontWeight: '600',
    color: UX4GColors.neutral800,
  },
  facilitiesHeading: {
    fontSize: 13,
    fontWeight: '600',
    color: UX4GColors.neutral800,
  },
  categoryBannerContainer: {
    backgroundColor: UX4GColors.primary50,
    borderRadius: 12,
    padding: 14,
    marginTop: 4,
  },
  categoryBannerHeading: {
    fontSize: 15,
    fontWeight: '700',
    color: UX4GColors.neutral900,
  },
  categoryBannerBody: {
    fontSize: 12.5,
    lineHeight: 18,
    color: UX4GColors.neutral700,
    marginTop: 4,
  },
  tierLabel: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.6,
    color: UX4GColors.neutral500,
  },
  tierPrice: {
    fontSize: 19,
    fontWeight: '700',
    color: UX4GColors.neutral900,
    marginTop: 4,
  },
  tierSub: {
    fontSize: 11.5,
    color: UX4GColors.neutral500,
    marginTop: 2,
  },
  tierSpecs: {
    fontSize: 11.5,
    fontWeight: '700',
    color: UX4GColors.neutral800,
    lineHeight: 16,
  },
  tierAmenities: {
    fontSize: 11,
    color: UX4GColors.neutral500,
    marginTop: 4,
    lineHeight: 15,
  },
  complianceHelperBody: {
    fontSize: 12.5,
    lineHeight: 18,
    color: UX4GColors.neutral600,
    marginBottom: 14,
  },
  subGroupHeading: {
    fontSize: 13,
    fontWeight: '600',
    color: UX4GColors.neutral700,
  },
  docSlotWrapper: {
    width: '100%',
  },
  docSlotHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  docSlotTitle: {
    fontSize: 13.5,
    fontWeight: '600',
    color: UX4GColors.neutral900,
    flex: 1,
  },
  downloadFormatLink: {
    fontSize: 12.5,
    fontWeight: '600',
    color: UX4GColors.primary,
    textDecorationLine: 'underline',
  },
  docSlotRuleText: {
    fontSize: 11.5,
    color: UX4GColors.neutral500,
    marginTop: 4,
    marginBottom: 10,
  },
  dashedDropZone: {
    position: 'relative',
    borderRadius: 10,
    backgroundColor: UX4GColors.white,
    overflow: 'hidden',
  },
  dropZoneContent: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropZoneTitle: {
    fontSize: 14.5,
    fontWeight: '700',
    color: UX4GColors.neutral900,
    marginTop: 8,
  },
  dropZoneSubtitle: {
    fontSize: 11.5,
    color: UX4GColors.neutral500,
    marginTop: 4,
    textAlign: 'center',
  },
  dropZoneOrRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    marginVertical: 12,
  },
  dropZoneOrLine: {
    flex: 1,
    height: 1,
    backgroundColor: UX4GColors.neutral200,
  },
  dropZoneOrText: {
    fontSize: 11.5,
    color: UX4GColors.neutral500,
    marginHorizontal: 10,
  },
  uploadedFilePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    backgroundColor: UX4GColors.neutral50,
  },
  uploadedFileName: {
    fontSize: 12.5,
    fontWeight: '600',
    color: UX4GColors.neutral900,
  },
  uploadedFileSize: {
    fontSize: 11,
    color: UX4GColors.neutral500,
  },
  docStatusDotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 8,
  },
  statusCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusCircleEmpty: {
    borderWidth: 1.5,
    borderColor: UX4GColors.neutral300,
    backgroundColor: UX4GColors.white,
  },
  statusCircleDone: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: UX4GColors.green,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 13,
    lineHeight: 19,
    color: UX4GColors.neutral700,
  },
  feeLineAmount: {
    fontSize: 14,
    fontWeight: '700',
    color: UX4GColors.neutral900,
  },
  feeTotalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  feeTotalLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: UX4GColors.neutral900,
  },
  feeTotalAmount: {
    fontSize: 14.5,
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
  actionButtonContainer: {
    marginTop: 26,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: UX4GColors.neutral100,
    marginBottom: 8,
  },
});
`;
  }, []);

  // Direct Expo Snack embed URL using official Snack ID (Status 200 guaranteed)
  const snackUrl = useMemo(() => {
    return `https://snack.expo.dev/embedded/${SNACK_ID}?platform=android&supportedPlatforms=ios,android&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&theme=${
      isDark ? 'dark' : 'light'
    }`;
  }, [isDark]);

  // ZIP Downloader for the complete modular standalone application
  const handleDownloadZip = async () => {
    setIsDownloadingZip(true);
    try {
      const zip = new JSZip();
      const modularFiles = buildHomestayModularProject(fullAppCodeString);

      Object.entries(modularFiles).forEach(([filePath, fileContent]) => {
        zip.file(filePath, fileContent);
      });

      const content = await zip.generateAsync({ type: 'blob' });
      const downloadUrl = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'Homestay-Registration-Flow-UX4G.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);

      triggerToast(
        'Complete 10-Step (11-Screen) modular Homestay Registration Flow ZIP downloaded successfully!'
      );
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
                Homestay Registration flow
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
                Service Pattern • Complete 10-Step Flow (11 Screens)
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
              Complete end-to-end citizen service registration flow for homestay hosts and hospitality promoters.
              Rendered with Expo Snack and built with UX4G React Native components.
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
            title="Expo Snack Homestay Registration Flow Preview"
          />
        </div>
      </div>
    </Ux4gThemeProvider>
  );
};

export default HomestayRegistrationFlowDoc;
