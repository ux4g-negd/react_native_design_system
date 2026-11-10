import React, { useState, useMemo } from 'react';
import JSZip from 'jszip';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';

interface HomestayRegistrationFlowDocProps {
  isDark: boolean;
}

// Official Snack ID with Multi-Step Flow (Step 1: Unit & Property Details, Step 2: Location)
const SNACK_ID = 'qjJh0I70gHc3Drb-IEoRv';

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
    return `import React, { useState } from 'react';
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
import Svg, { Path, Circle } from 'react-native-svg';
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
  Ux4gThemeProvider,
  UX4GColors,
} from 'ux4g-react-native-components';
import NationalEmblem from './NationalEmblem';

// Union.svg UX4G Logo
const UnionLogo = () => (
  <Svg width={36} height={36} viewBox="0 0 40 40" fill="none">
    <Path
      d="M5.85059 34.2637C7.72048 34.1583 9.59495 34.1583 11.4648 34.2637C15.1962 34.4138 19.3146 35.089 23.4326 35.4141C26.7822 35.6892 30.1618 35.6794 33.3105 34.9141C29.5061 38.2986 24.5517 40.1148 19.4521 39.9942C14.3524 39.8734 9.48932 37.8246 5.85059 34.2637ZM3.76172 22.7647C6.67001 21.8966 9.72795 21.6388 12.7412 22.0088C16.1158 22.359 19.7919 23.4248 23.4326 24.3301C27.0735 25.2355 30.7448 25.9604 34.1045 25.5752C36.0384 25.3889 37.9173 24.8268 39.6338 23.9199C39.3117 25.5465 38.7848 27.1265 38.0664 28.6221C37.0142 29.1907 35.9026 29.6437 34.752 29.9727C31.2316 31.013 27.319 30.8223 23.417 30.2471C19.5151 29.6719 15.5982 28.7163 12.083 28.2461C9.04791 27.8043 5.97725 27.652 2.91309 27.791C2.3808 27.8261 1.87828 27.8262 1.40625 27.8262C0.894651 26.6003 0.505956 25.3266 0.246094 24.0244C1.22033 23.6593 2.41088 23.1648 3.76172 22.7647ZM5.76562 10.7139C8.31822 9.4568 11.2249 9.10423 14.0059 9.71389C17.019 10.2691 20.2236 11.7797 23.4326 13.3203C26.6416 14.861 29.8609 16.4215 32.874 17.0518C35.1426 17.6051 37.5198 17.531 39.749 16.8369C39.9066 17.8298 39.9904 18.8328 40 19.8379C38.0088 20.919 35.7745 21.4787 33.5068 21.4639C30.333 21.5089 26.8324 20.4784 23.3975 19.253C19.9624 18.0275 16.5174 16.6212 13.3535 15.9209C10.5966 15.2104 7.71373 15.1324 4.92188 15.6914C3.21225 16.1055 1.55924 16.7253 0 17.5371C0.105071 16.6264 0.272632 15.7238 0.501953 14.836C1.99816 13.1633 3.78068 11.7674 5.76562 10.7139ZM19.9121 2.51716e-05C24.0578 -0.00157692 28.1024 1.27476 31.4912 3.65335C34.8799 6.03187 37.4469 9.39617 38.8398 13.2852C36.744 13.9628 34.4987 14.0397 32.3613 13.5059C29.529 12.9006 26.4909 11.3695 23.4326 9.63381C20.3744 7.8982 17.3161 6.0477 14.5039 4.86721C12.6733 4.03008 10.7035 3.53465 8.69336 3.40628C12.0074 1.18013 15.9149 -0.00630153 19.9121 2.51716e-05Z"
      fill="#4A2BC2"
    />
  </Svg>
);

// Material Outline Trash / Delete icon
const TrashOutlineIcon = ({ size = 20, color = '#1E293B' }) => (
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
const CrosshairsGpsIcon = ({ size = 18, color = '#1E293B' }) => (
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


// Screen 5 Material Outline Icons
const CopyOutlineIcon = ({ size = 14, color = '#475569' }) => (
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

const ChevronUpIcon = ({ size = 18, color = '#475569' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M18 15l-6-6-6 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const ChevronDownIcon = ({ size = 18, color = '#475569' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M6 9l6 6 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

// Screen 3 Material Outline Icons
const InfoOutlineIcon = ({ size = 13, color = '#64748B' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
    <Path d="M12 16V12M12 8H12.01" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </Svg>
);

const CalendarOutlineIcon = ({ size = 18, color = '#64748B' }) => (
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

const EyeOutlineIcon = ({ size = 18, color = '#64748B' }) => (
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

const EyeOffOutlineIcon = ({ size = 18, color = '#64748B' }) => (
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

// Official UX4G Status Banner Component
const Ux4gStatusBanner = ({
  variant = 'successLight',
  title,
  subtitle,
  leadingIcon,
  trailingIcon,
  backgroundColor,
  borderColor,
  marginStyle,
  paddingStyle,
  containerStyle,
  titleStyle,
  contentAlignment = 'left',
}) => {
  const isRight = contentAlignment === 'right';
  const bg = backgroundColor || (variant === 'successLight' ? '#ECFDF5' : '#F1F5F9');
  const border = borderColor || (variant === 'successLight' ? '#D1FAE5' : '#E2E8F0');
  const textColor = variant === 'successLight' ? '#065F46' : '#0F172A';

  const defaultIcon = variant === 'successLight' ? (
    <View
      style={{
        width: 13,
        height: 13,
        borderRadius: 6.5,
        backgroundColor: '#10B981',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
      }}
    >
      <Text style={{ color: '#FFFFFF', fontSize: 8.5, fontWeight: 'bold', marginTop: -1 }}>✓</Text>
    </View>
  ) : null;

  const icon = leadingIcon !== undefined ? leadingIcon : defaultIcon;

  return (
    <View
      style={[
        {
          width: '100%',
          backgroundColor: bg,
          borderWidth: 1,
          borderColor: border,
          borderRadius: 6,
          paddingVertical: 6,
          paddingHorizontal: 10,
          marginBottom: 8,
          justifyContent: 'center',
        },
        marginStyle,
        paddingStyle,
        containerStyle,
      ]}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: isRight ? 'flex-end' : 'flex-start',
        }}
      >
        {icon}
        {title ? (
          <Text
            style={[
              {
                fontSize: 11.5,
                fontWeight: '600',
                color: textColor,
              },
              titleStyle,
            ]}
          >
            {title}
          </Text>
        ) : null}
        {trailingIcon}
      </View>
    </View>
  );
};

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
                backgroundColor: isActive ? '#4A2BC2' : '#CBD5E1',
              }}
            />
          );
        })}
      </View>

      <View style={{ height: 16 }} />

      {/* Step Counter */}
      <Text style={{ textAlign: 'center', fontSize: 13, fontWeight: '700', color: '#0F172A' }}>
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
            backgroundColor: '#FFFFFF',
            borderWidth: 1.2,
            borderColor: currentStep > 1 ? '#E2E8F0' : '#F1F5F9',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: currentStep > 1 ? 1 : 0.4,
          }}
        >
          <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
            <Path
              d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
              fill={currentStep > 1 ? '#475569' : '#94A3B8'}
            />
          </Svg>
        </TouchableOpacity>

        {/* Center: Step Title & Subtitle */}
        <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 6 }}>
          <Text style={{ fontSize: 15.5, fontWeight: '700', color: '#4A2BC2', textAlign: 'center' }}>
            {resolvedLabel}
          </Text>
          {resolvedDesc ? (
            <Text
              style={{
                fontSize: 12,
                lineHeight: 16,
                color: '#64748B',
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
            backgroundColor: '#FFFFFF',
            borderWidth: 1.5,
            borderColor: currentStep < totalSteps ? '#818CF8' : '#E2E8F0',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: currentStep < totalSteps ? 1 : 0.4,
          }}
        >
          <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
            <Path
              d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
              fill={currentStep < totalSteps ? '#4A2BC2' : '#94A3B8'}
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

export default function App() {
  const [step, setStep] = useState(6);
  const [copyDropdownRoomIdx, setCopyDropdownRoomIdx] = useState(null);
  const [categorySlideIndex, setCategorySlideIndex] = useState(0);
  const [savedTime, setSavedTime] = useState('3:14 PM');

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
  });

  const [errors, setErrors] = useState({});

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

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(2);
  };

  const handleContinueStep2 = () => {
    const errs = {};
    if (!formData.whereIsProperty.trim()) errs.whereIsProperty = 'Property location link is required';
    if (!formData.pinCode.trim()) errs.pinCode = 'PIN code is required';
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
    if (!formData.panNumber.trim()) errs.panNumber = 'PAN is required';
    if (!formData.mobileNumber.trim()) errs.mobileNumber = 'Mobile number is required';
    if (!formData.emailAddress.trim()) errs.emailAddress = 'Email address is required';
    if (!formData.permPinCode.trim()) errs.permPinCode = 'PIN code is required';
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
      if (!formData.managerMobile.trim()) errs.managerMobile = 'Mobile number is required';
      if (!formData.managerPinCode.trim()) errs.managerPinCode = 'PIN code is required';
      if (!formData.managerStateUT.length) errs.managerStateUT = 'State / UT is required';
      if (!formData.managerDistrict.length) errs.managerDistrict = 'District is required';
      if (!formData.managerHouseStreet.trim()) errs.managerHouseStreet = 'House or building number is required';
    }
    if (!formData.totalStaff.trim()) errs.totalStaff = 'Total number of staff is required';
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
  const autoCategory =
    highestTariff >= 6000
      ? HOMESTAY_CATEGORIES[2]
      : highestTariff >= 3000
      ? HOMESTAY_CATEGORIES[1]
      : HOMESTAY_CATEGORIES[0];

  const handleContinueStep5 = () => {
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
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    alert('Step 6 (Amenities, Facilities & Distances) validated successfully! Ready for Step 7.');
  };

  return (
    <Ux4gThemeProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

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
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Main Card Container */}
          <View style={styles.mainCard}>
            {/* Auto-saved banner using UX4G Status Banner Component */}
            <Ux4gStatusBanner
              variant="successLight"
              title={'Saved ' + savedTime}
              contentAlignment="right"
              backgroundColor="#ECFDF5"
              borderColor="transparent"
              containerStyle={{ borderRadius: 6, marginBottom: 8 }}
              paddingStyle={{ paddingVertical: 6, paddingHorizontal: 10 }}
              titleStyle={{ fontSize: 11.5, fontWeight: '600', color: '#065F46' }}
            />

            {/* Stepper with centered title & back/next navigation */}
            <Ux4gCompactStepper
              totalSteps={10}
              currentStep={step}
              layout="centeredBetween"
              title={step === 1 ? 'Unit / Property details' : step === 2 ? 'Location' : step === 3 ? 'Owner / Applicant Details' : step === 4 ? 'Management & Staff' : step === 5 ? 'Rooms / Accommodation' : step === 6 ? 'Amenities, Facilities & Distances' : 'Step ' + step}
              stepLabel={step === 1 ? 'Unit / Property details' : step === 2 ? 'Location' : step === 3 ? 'Owner / Applicant Details' : step === 4 ? 'Management & Staff' : step === 5 ? 'Rooms / Accommodation' : step === 6 ? 'Amenities, Facilities & Distances' : 'Step ' + step}
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
                  : 'Multi-step registration workflow.'
              }
              onBackPress={() => {
                if (step > 1) setStep(step - 1);
              }}
              onPrevious={() => {
                if (step > 1) setStep(step - 1);
              }}
              onNextPress={() => {
                if (step === 1) handleContinueStep1();
                else if (step === 2) handleContinueStep2();
                else if (step === 3) handleContinueStep3();
                else if (step === 4) handleContinueStep4();
                else if (step === 5) handleContinueStep5();
                else if (step === 6) handleContinueStep6();
              }}
              onNext={() => {
                if (step === 1) handleContinueStep1();
                else if (step === 2) handleContinueStep2();
              }}
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
                            <TrashOutlineIcon size={20} color="#1E293B" />
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
                    backgroundColor="#4A2BC2"
                    contentColor="#FFFFFF"
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
                    contentColor="#4A2BC2"
                    borderColor="#C2B6FB"
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
                  <CrosshairsGpsIcon size={18} color="#1E293B" />
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
                    <Path d="M0 0h340v210H0z" fill="#EDE8DF" />

                    {/* Water Body (Top Left Curved Lake) */}
                    <Path
                      d="M0 0h145c0 30-15 55-45 55H0V0z"
                      fill="#93C5FD"
                    />

                    {/* Park Green Area (Top Right) */}
                    <Path
                      d="M175 10h155v50H175z"
                      fill="#C8E6C9"
                    />

                    {/* Building Blocks */}
                    <Path d="M15 15h35v30H15z" fill="#DCD6CB" rx={2} />
                    <Path d="M60 15h40v30H60z" fill="#DCD6CB" rx={2} />
                    <Path d="M15 75h55v30H15z" fill="#DCD6CB" rx={2} />
                    <Path d="M80 75h50v30H80z" fill="#DCD6CB" rx={2} />
                    <Path d="M15 120h45v35H15z" fill="#DCD6CB" rx={2} />
                    <Path d="M70 120h60v35H70z" fill="#DCD6CB" rx={2} />

                    <Path d="M175 75h60v30H175z" fill="#DCD6CB" rx={2} />
                    <Path d="M245 75h60v30H245z" fill="#DCD6CB" rx={2} />
                    <Path d="M175 120h50v35H175z" fill="#DCD6CB" rx={2} />
                    <Path d="M235 120h70v35H235z" fill="#DCD6CB" rx={2} />

                    {/* Roads Network */}
                    <Path d="M0 60h340v12H0z" fill="#FFFFFF" />
                    <Path d="M0 110h340v10H0z" fill="#FFFFFF" />
                    <Path d="M145 0v210h14V0z" fill="#FFFFFF" />
                    <Path d="M0 160l340 25v10L0 170z" fill="#FFFFFF" />

                    {/* Purple Location Pin on Road Center */}
                    <Path
                      d="M142 85C136 85 131 90 131 96c0 8 11 19 11 19s11-11 11-19c0-6-5-11-11-11z"
                      fill="#4A2BC2"
                    />
                    <Circle cx="142" cy="96" r="3.5" fill="#FFFFFF" />

                    {/* Zoom Buttons Controls (Top Right) */}
                    <Path d="M295 15h25v50h-25z" fill="#FFFFFF" rx={4} />
                    <Path d="M295 40h25v1h-25z" fill="#E2E8F0" />
                    <Path d="M304 27h7m-3.5-3.5v7" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
                    <Path d="M304 52h7" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
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
                    backgroundColor="#4A2BC2"
                    contentColor="#FFFFFF"
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
                    contentColor="#4A2BC2"
                    borderColor="#C2B6FB"
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
                    <InfoOutlineIcon size={13} color="#64748B" />
                    <Text style={styles.helperText}>Must match your PAN letter for letter</Text>
                  </View>
                </View>

                {/* Gender Radio Buttons */}
                <View style={styles.fieldSpacing}>
                  <Text style={styles.radioGroupLabel}>
                    Gender<Text style={{ color: '#EF4444' }}>*</Text>
                  </Text>
                  <View style={{ marginTop: 8, gap: 10 }}>
                    <Ux4gRadioButton
                      checked={formData.gender === 'male'}
                      onPress={() => updateField('gender', 'male')}
                      label="Male"
                      activeColor="#4A2BC2"
                    />
                    <Ux4gRadioButton
                      checked={formData.gender === 'female'}
                      onPress={() => updateField('gender', 'female')}
                      label="Female"
                      activeColor="#4A2BC2"
                    />
                    <Ux4gRadioButton
                      checked={formData.gender === 'others'}
                      onPress={() => updateField('gender', 'others')}
                      label="Others"
                      activeColor="#4A2BC2"
                    />
                    <Ux4gRadioButton
                      checked={formData.gender === 'prefer_not_to_say'}
                      onPress={() => updateField('gender', 'prefer_not_to_say')}
                      label="Prefer not to say"
                      activeColor="#4A2BC2"
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
                    Mobile number<Text style={{ color: '#EF4444' }}>*</Text>
                  </Text>
                  <View style={[styles.inlineInputBox, errors.mobileNumber && styles.inputBoxError]}>
                    <Text style={styles.prefixText}>+91</Text>
                    <TextInput
                      style={styles.inlineInput}
                      placeholder="10 digits"
                      placeholderTextColor="#94A3B8"
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
                    Email address<Text style={{ color: '#EF4444' }}>*</Text>
                  </Text>
                  <View style={[styles.inlineInputBox, errors.emailAddress && styles.inputBoxError]}>
                    <TextInput
                      style={styles.inlineInput}
                      placeholder="name@example.com"
                      placeholderTextColor="#94A3B8"
                      value={formData.emailAddress}
                      onChangeText={(v) => updateField('emailAddress', v)}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                    <TouchableOpacity
                      style={styles.verifyButton}
                      onPress={() => alert('Verification email sent to ' + (formData.emailAddress || 'email'))}
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
                    activeColor="#4A2BC2"
                  />
                </View>

                <View style={{ marginBottom: 16 }}>
                  <Ux4gCheckbox
                    checked={formData.addressOutsideState}
                    onPress={() => updateField('addressOutsideState', !formData.addressOutsideState)}
                    label="My current address is outside this State *"
                    activeColor="#4A2BC2"
                  />
                  <Text style={styles.checkboxSubHelperText}>
                    Opens a State field on the current-address block.
                  </Text>
                </View>

                {/* Capacity in which applying */}
                <View style={styles.fieldSpacing}>
                  <Text style={styles.capacityLabel}>
                    Capacity in which you are applying<Text style={{ color: '#EF4444' }}>*</Text>
                  </Text>
                  <View style={{ marginTop: 8, gap: 10 }}>
                    <Ux4gRadioButton
                      checked={formData.applyingCapacity === 'owner'}
                      onPress={() => updateField('applyingCapacity', 'owner')}
                      label="Owner of the property"
                      activeColor="#4A2BC2"
                    />
                    <Ux4gRadioButton
                      checked={formData.applyingCapacity === 'family_member'}
                      onPress={() => updateField('applyingCapacity', 'family_member')}
                      label="Family member managing the unit"
                      activeColor="#4A2BC2"
                    />
                    <Ux4gRadioButton
                      checked={formData.applyingCapacity === 'authorised_rep'}
                      onPress={() => updateField('applyingCapacity', 'authorised_rep')}
                      label="Authorised representative of the owner"
                      activeColor="#4A2BC2"
                    />
                  </View>
                </View>

                {/* Bottom Action Buttons */}
                <View style={styles.actionButtonContainer}>
                  <Ux4gButton
                    text="Continue"
                    variant="primary"
                    size="large"
                    backgroundColor="#4A2BC2"
                    contentColor="#FFFFFF"
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
                    contentColor="#4A2BC2"
                    borderColor="#C2B6FB"
                    borderWidth={1}
                    borderRadius={8}
                    onPress={() => {
                      setSavedTime('3:14 PM');
                      alert('Draft saved successfully!');
                    }}
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
                    activeColor="#4A2BC2"
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
                        Relationship to the owner<Text style={{ color: '#EF4444' }}>*</Text>
                      </Text>
                      <View style={{ marginTop: 8, gap: 10 }}>
                        <Ux4gRadioButton
                          value="self"
                          groupValue={formData.managerRelationship}
                          onChanged={(val) => updateField('managerRelationship', val)}
                          label="Self"
                          size="medium"
                          color="#4A2BC2"
                        />
                        <Ux4gRadioButton
                          value="family_member"
                          groupValue={formData.managerRelationship}
                          onChanged={(val) => updateField('managerRelationship', val)}
                          label="Family member"
                          size="medium"
                          color="#4A2BC2"
                        />
                        <Ux4gRadioButton
                          value="employee"
                          groupValue={formData.managerRelationship}
                          onChanged={(val) => updateField('managerRelationship', val)}
                          label="Employee"
                          size="medium"
                          color="#4A2BC2"
                        />
                        <Ux4gRadioButton
                          value="agent"
                          groupValue={formData.managerRelationship}
                          onChanged={(val) => updateField('managerRelationship', val)}
                          label="Agent"
                          size="medium"
                          color="#4A2BC2"
                        />
                      </View>
                      {errors.managerRelationship && (
                        <Text style={styles.errorCaption}>{errors.managerRelationship}</Text>
                      )}
                    </View>

                    {/* Mobile number with +91 prefix */}
                    <View style={styles.fieldSpacing}>
                      <Text style={styles.fieldLabelWithAsterisk}>
                        Mobile number<Text style={{ color: '#EF4444' }}>*</Text>
                      </Text>
                      <View style={[styles.inlineInputBox, errors.managerMobile && styles.inputBoxError]}>
                        <Text style={styles.prefixText}>+91</Text>
                        <TextInput
                          style={styles.inlineInput}
                          placeholder="Reachable during an inspection"
                          placeholderTextColor="#94A3B8"
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
                    labelIcon={<InfoOutlineIcon size={14} color="#64748B" />}
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
                    activeColor="#4A2BC2"
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
                    backgroundColor="#4A2BC2"
                    contentColor="#FFFFFF"
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
                    contentColor="#4A2BC2"
                    borderColor="#C2B6FB"
                    borderWidth={1}
                    borderRadius={8}
                    onPress={() => {
                      setSavedTime('3:14 PM');
                      alert('Draft saved successfully!');
                    }}
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
                      backgroundColor="#FFFFFF"
                      borderColor="#E2E8F0"
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
                          <ChevronUpIcon size={20} color="#475569" />
                        ) : (
                          <ChevronDownIcon size={20} color="#475569" />
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
                            <CopyOutlineIcon size={14} color="#334155" />
                            <Text style={styles.copyFromText}>Copy from...</Text>
                            <ChevronDownIcon size={15} color="#475569" />
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
                            />
                          </View>

                          {/* Room type Radio Buttons (3 + 1 wrap grid) */}
                          <View style={styles.fieldSpacing}>
                            <Text style={styles.radioGroupLabel}>
                              Room type<Text style={{ color: '#EF4444' }}>*</Text>
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
                                    color="#4A2BC2"
                                  />
                                </View>
                              ))}
                            </View>
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
                              trailingIconLabel={<InfoOutlineIcon size={14} color="#64748B" />}
                              prefixText="₹"
                              placeholder="Digits only"
                              type="number"
                              size="large"
                              value={room.tariff}
                              onValueChange={(v) => updateRoomField(roomIdx, 'tariff', v)}
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
                                      <Text style={{ color: '#EF4444' }}>*</Text>
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
                                      <Text style={{ color: '#EF4444' }}>*</Text>
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
                                  activeColor="#4A2BC2"
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
                    <Text style={{ fontWeight: '700', color: '#4A2BC2' }}>
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
                        backgroundColor="#FFFFFF"
                        borderColor={isMatchedCat ? '#4A2BC2' : '#CBD5E1'}
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

                        <Ux4gDivider style={{ marginVertical: 10 }} />

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
                      activeColor="#4A2BC2"
                      inactiveColor="#CBD5E1"
                    />
                  </View>
                </View>

                {/* Bottom Action Buttons */}
                <View style={styles.actionButtonContainer}>
                  <Ux4gButton
                    text="Continue"
                    variant="primary"
                    size="large"
                    backgroundColor="#4A2BC2"
                    contentColor="#FFFFFF"
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
                    contentColor="#4A2BC2"
                    borderColor="#C2B6FB"
                    borderWidth={1}
                    borderRadius={8}
                    onPress={() => {
                      setSavedTime('3:14 PM');
                      alert('Draft saved successfully!');
                    }}
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
                    Food provided<Text style={{ color: '#EF4444' }}>*</Text>
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
                        color="#4A2BC2"
                      />
                    ))}
                  </View>
                  {errors.foodProvided && (
                    <View style={styles.groupErrorRow}>
                      <InfoOutlineIcon size={13} color="#DC2626" />
                      <Text style={styles.groupErrorText}>{errors.foodProvided}</Text>
                    </View>
                  )}
                </View>

                {/* Drinking water* */}
                <View style={styles.fieldSpacing}>
                  <Text style={styles.radioGroupLabel}>
                    Drinking water<Text style={{ color: '#EF4444' }}>*</Text>
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
                        activeColor="#4A2BC2"
                      />
                    ))}
                  </View>
                  {errors.drinkingWater && (
                    <View style={styles.groupErrorRow}>
                      <InfoOutlineIcon size={13} color="#DC2626" />
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
                    activeColor="#4A2BC2"
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
                  />
                </View>

                {/* Dining area Checkbox + Unit + Dining area */}
                <View style={styles.fieldSpacing}>
                  <Ux4gCheckbox
                    value={formData.hasDiningArea}
                    onChanged={(val) => updateField('hasDiningArea', !!val)}
                    label="The property has a dining area with seating"
                    size="medium"
                    activeColor="#4A2BC2"
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
                        activeColor="#4A2BC2"
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
                        activeColor="#4A2BC2"
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
                        activeColor="#4A2BC2"
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
                        activeColor="#4A2BC2"
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
                        activeColor="#4A2BC2"
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
                    backgroundColor="#4A2BC2"
                    contentColor="#FFFFFF"
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
                    contentColor="#4A2BC2"
                    borderColor="#C2B6FB"
                    borderWidth={1}
                    borderRadius={8}
                    onPress={() => {
                      setSavedTime('3:14 PM');
                      alert('Draft saved successfully!');
                    }}
                    style={{ width: '100%' }}
                  />
                </View>
              </View>
            ) : null}
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
    backgroundColor: '#F8FAFC',
    paddingTop: STATUSBAR_HEIGHT,
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
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
    borderColor: '#C7D2FE',
    backgroundColor: '#F5F3FF',
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
    backgroundColor: '#4A2BC2',
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
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  savedBannerRow: {
    width: '100%',
    backgroundColor: '#ECFDF5',
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
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  savedCheckIcon: {
    color: '#FFFFFF',
    fontSize: 8.5,
    fontWeight: 'bold',
    marginTop: -1,
  },
  savedBannerText: {
    fontSize: 11.5,
    fontWeight: '600',
    color: '#065F46',
  },
  stepperBottomDivider: {
    height: 1,
    backgroundColor: '#F1F5F9',
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
    color: '#0F172A',
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
    color: '#1E293B',
  },
  landmarkCard: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 10,
    padding: 14,
    marginBottom: 14,
    backgroundColor: '#FAFAFA',
  },
  landmarkTypeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  landmarkTypeBox: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  landmarkTypeLabel: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '500',
  },
  landmarkTypeValue: {
    fontSize: 13,
    color: '#0F172A',
    fontWeight: '600',
    marginTop: 2,
  },
  deleteIconButton: {
    marginLeft: 12,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#F1F5F9',
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
    borderColor: '#818CF8',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F3FF',
    marginTop: 4,
    marginBottom: 8,
  },
  addLandmarkText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4A2BC2',
  },
  activitySubheading: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
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
    color: '#1E293B',
    marginLeft: 8,
  },
  mapContainer: {
    width: '100%',
    height: 210,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 16,
  },
  mapOverlayPill: {
    position: 'absolute',
    bottom: 8,
    left: 10,
    right: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    paddingVertical: 5,
    paddingHorizontal: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  mapOverlayPillText: {
    fontSize: 11,
    color: '#334155',
    fontWeight: '500',
    textAlign: 'center',
  },
  geoCoordLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 6,
  },
  geoCoordBox: {
    height: 48,
    backgroundColor: '#D9DDE2',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 12,
    marginBottom: 14,
  },
  geoCoordText: {
    fontSize: 13.5,
    color: '#475569',
  },
  geoCoordActiveText: {
    color: '#0F172A',
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
    backgroundColor: '#E2E8F0',
  },
  orDividerText: {
    marginHorizontal: 12,
    fontSize: 12.5,
    color: '#64748B',
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
    color: '#DC2626',
    fontSize: 12,
    lineHeight: 16,
    flex: 1,
  },
  errorCaption: {
    color: '#DC2626',
    fontSize: 12,
    lineHeight: 16,
    marginTop: 6,
    marginBottom: 4,
    marginLeft: 2,
  },
  readOnlyLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 6,
  },
  readOnlyBox: {
    height: 48,
    backgroundColor: '#E2E8F0',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  readOnlyText: {
    fontSize: 13.5,
    color: '#475569',
  },
  helperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 2,
  },
  helperText: {
    fontSize: 11.5,
    color: '#64748B',
    marginLeft: 4,
  },
  fieldLabelWithAsterisk: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 6,
  },
  datePickerBox: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },
  datePickerPlaceholderText: {
    fontSize: 14,
    color: '#94A3B8',
  },
  datePickerValueText: {
    fontSize: 14,
    color: '#0F172A',
    fontWeight: '500',
  },
  aadhaarInputContainer: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  aadhaarTextInput: {
    flex: 1,
    fontSize: 14,
    color: '#0F172A',
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
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  inputBoxError: {
    borderColor: '#DC2626',
  },
  prefixText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0F172A',
    marginRight: 8,
  },
  inlineInput: {
    flex: 1,
    fontSize: 14,
    color: '#0F172A',
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
    color: '#4A2BC2',
  },
  otpBlockContainer: {
    marginTop: 12,
  },
  otpHeadingLabel: {
    fontSize: 12.5,
    fontWeight: '500',
    color: '#334155',
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
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpBoxActive: {
    borderColor: '#4A2BC2',
    borderWidth: 1.5,
  },
  otpCursorText: {
    fontSize: 20,
    color: '#4A2BC2',
    fontWeight: '300',
    marginTop: -2,
  },
  otpDashText: {
    fontSize: 18,
    color: '#94A3B8',
  },
  otpCharText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
  },
  resendTimerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  resendGrayText: {
    fontSize: 12,
    color: '#64748B',
  },
  resendActiveTimer: {
    fontSize: 12,
    fontWeight: '600',
    color: '#475569',
  },
  checkboxSubHelperText: {
    fontSize: 11.5,
    color: '#64748B',
    marginLeft: 32,
    marginTop: 3,
  },
  capacityLabel: {
    fontSize: 12.5,
    fontWeight: '600',
    color: '#1E293B',
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
    color: '#1E293B',
  },
  sliderBadgeBox: {
    width: 44,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderBadgeValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0F172A',
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
    backgroundColor: '#CBD5E1',
  },
  sliderThumb: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
    shadowColor: '#000',
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
    backgroundColor: '#CBD5E1',
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
    color: '#64748B',
    marginLeft: 5,
  },
  sliderValueBadge: {
    width: 44,
    height: 38,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderValueText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0F172A',
  },
  roomCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  roomCardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
  },
  roomSummaryText: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 4,
  },
  copyFromPill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 6,
  },
  copyFromText: {
    fontSize: 12.5,
    fontWeight: '500',
    color: '#334155',
  },
  copyMenuBox: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    backgroundColor: '#F8FAFC',
    paddingVertical: 4,
  },
  copyMenuItem: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  copyMenuItemText: {
    fontSize: 12.5,
    color: '#1E293B',
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
    borderLeftColor: '#E2E8F0',
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
    color: '#1E293B',
  },
  facilitiesHeading: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1E293B',
  },
  categoryBannerContainer: {
    backgroundColor: '#F5F3FF',
    borderRadius: 12,
    padding: 14,
    marginTop: 4,
  },
  categoryBannerHeading: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
  },
  categoryBannerBody: {
    fontSize: 12.5,
    lineHeight: 18,
    color: '#334155',
    marginTop: 4,
  },
  tierLabel: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.6,
    color: '#64748B',
  },
  tierPrice: {
    fontSize: 19,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 4,
  },
  tierSub: {
    fontSize: 11.5,
    color: '#64748B',
    marginTop: 2,
  },
  tierSpecs: {
    fontSize: 11.5,
    fontWeight: '700',
    color: '#1E293B',
    lineHeight: 16,
  },
  tierAmenities: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 4,
    lineHeight: 15,
  },
  subGroupHeading: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
  },
  actionButtonContainer: {
    marginTop: 26,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
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

  // ZIP Downloader for the complete standalone application
  const handleDownloadZip = async () => {
    setIsDownloadingZip(true);
    try {
      const zip = new JSZip();

      zip.file(
        'package.json',
        JSON.stringify(
          {
            name: 'ux4g-homestay-registration-flow',
            version: '1.0.0',
            description: 'Complete multi-step Homestay Registration flow built with UX4G React Native components',
            main: 'index.js',
            scripts: {
              start: 'expo start',
              android: 'expo start --android',
              ios: 'expo start --ios',
              web: 'expo start --web',
            },
            dependencies: {
              expo: '~51.0.0',
              react: '18.2.0',
              'react-native': '0.74.5',
              'react-native-svg': '15.2.0',
              'ux4g-react-native-components': '^1.2.2',
            },
            devDependencies: {
              '@babel/core': '^7.20.0',
              typescript: '~5.3.3',
            },
          },
          null,
          2
        )
      );

      zip.file(
        'app.json',
        JSON.stringify(
          {
            expo: {
              name: 'Homestay Registration Flow',
              slug: 'ux4g-homestay-registration-flow',
              version: '1.0.0',
              orientation: 'portrait',
              userInterfaceStyle: 'light',
              splash: {
                resizeMode: 'contain',
                backgroundColor: '#ffffff',
              },
            },
          },
          null,
          2
        )
      );

      zip.file(
        'README.md',
        '# Homestay Registration Flow (UX4G React Native)\n\n' +
        'A complete government service pattern for registering a homestay or hospitality unit using UX4G Design System components.\n\n' +
        '## Screens Included\n' +
        '- **Step 1**: Unit & Property details (Unit Details, Property Details, Category of Registration, Website and Social Media, Nearby Landmarks, Activities Offered)\n' +
        '- **Step 2**: Location (Property Location, GPS Current Location, Interactive Geo Location Map with entrance pin, PIN Code, State/District/Tehsil/City LGD selectors, Street Address & Landmark)\n' +
        '- **Step 3**: Owner / Applicant Details (Applicant Details, PAN & Aadhaar Identity Details, Contact Details with Phone & OTP verification, Email verification, Permanent Address, Address for Correspondence & Capacity in which applying)\n' +
        '- **Step 4**: Management & Staff (Manager Details with personal run toggle, Address of Manager, Staff Details with interactive hired locally slider, Previous Registration Details)\n\n' +
        '## Getting Started\n\n' +
        'npm install\n' +
        'npx expo start\n'
      );

      zip.file('App.tsx', fullAppCodeString);

      const content = await zip.generateAsync({ type: 'blob' });
      const downloadUrl = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'Homestay-Registration-Flow-UX4G.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);

      triggerToast('Complete 2-Screen Homestay Registration Flow application downloaded successfully!');
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
                Service Pattern • 10 Steps (Steps 1 & 2 Active)
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
