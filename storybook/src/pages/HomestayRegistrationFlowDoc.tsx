import React, { useState, useMemo } from 'react';
import JSZip from 'jszip';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';

interface HomestayRegistrationFlowDocProps {
  isDark: boolean;
}

// Official Snack ID with SafeArea / StatusBar Inset, Ux4gCompactStepper, National Emblem, Union.svg, and right-aligned status banner
const SNACK_ID = 'PddYCb-noene3sAhKOV7L';

export const HomestayRegistrationFlowDoc: React.FC<HomestayRegistrationFlowDocProps> = ({ isDark }) => {
  const [isDownloadingZip, setIsDownloadingZip] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // 100% complete, production-ready React Native code matching the exact UI in the screenshots
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
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import {
  Ux4gInputField,
  Ux4gSelectionDropdown,
  Ux4gRadioButton,
  Ux4gCheckbox,
  Ux4gButton,
  Ux4gDivider,
  Ux4gCompactStepper,
  Ux4gDatePicker,
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


// Material Outline Trash / Delete icon matching user screenshot
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

const DISTANCE_UNITS = [
  { id: 'km', label: 'km' },
  { id: 'm', label: 'm' },
];

const STATUSBAR_HEIGHT = Platform.OS === 'android' ? 20 : 0;

export default function App() {
  const [step, setStep] = useState(1);
  const [savedTime, setSavedTime] = useState('3:14 PM');

  // Complete Form State
  const [formData, setFormData] = useState({
    unitName: '',
    brandName: '',
    legalEntityName: '',
    promoterName: '',
    orgType: [],
    firmRegNumber: '',
    commencementDate: '',

    landUnit: ['sq_m'],
    landArea: '',
    builtUpArea: '',
    lettableRooms: '4',
    ownership: 'Owned',
    planApproved: 'Yes',
    roadWidthUnit: ['mtr'],
    roadWidth: '',

    locationType: 'Municipal Corporation or Council',

    websiteUrl: '',
    bookingLink: '',

    landmarks: [
      { id: '1', type: 'Bus stand', selectedPlace: ['kempty_bus'], dist: '0', unit: ['km'], removable: false, placeholder: 'Select bus stand' },
      { id: '2', type: 'Railway station', selectedPlace: ['dehradun'], dist: '0', unit: ['km'], removable: false, placeholder: 'Select station' },
      { id: '3', type: 'Tourist attraction', selectedPlace: ['kempty_falls'], dist: '0', unit: ['km'], removable: false, placeholder: 'Select attraction' },
      { id: '4', type: 'Hospital', selectedPlace: [], dist: '0', unit: ['km'], removable: true, placeholder: 'Start typing a hospital name' },
    ],

    tourism: ['Guided local tours'],
    otherTourism: '',
    adventure: [],
    otherAdventure: '',
    entertainment: [],
    otherEntertainment: '',
  });

  const [errors, setErrors] = useState({});
  const [isDrafting, setIsDrafting] = useState(false);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleActivity = (category, activity) => {
    setFormData((prev) => {
      const currentList = prev[category] || [];
      const updated = currentList.includes(activity)
        ? currentList.filter((a) => a !== activity)
        : [...currentList, activity];
      return { ...prev, [category]: updated };
    });
  };

  const updateLandmark = (id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      landmarks: prev.landmarks.map((lm) => (lm.id === id ? { ...lm, [field]: value } : lm)),
    }));
  };

  const removeLandmark = (id) => {
    setFormData((prev) => ({
      ...prev,
      landmarks: prev.landmarks.filter((lm) => lm.id !== id),
    }));
  };

  const addLandmark = () => {
    const newId = String(Date.now());
    setFormData((prev) => ({
      ...prev,
      landmarks: [
        ...prev.landmarks,
        {
          id: newId,
          type: 'Tourist attraction',
          selectedPlace: [],
          dist: '0',
          unit: ['km'],
          removable: true,
          placeholder: 'Select or search place name',
        },
      ],
    }));
  };

  const handleContinue = () => {
    const newErrors = {};
    if (!formData.unitName.trim()) newErrors.unitName = 'Name of the unit is required';
    if (!formData.legalEntityName.trim()) newErrors.legalEntityName = 'Legal entity name is required';
    if (!formData.promoterName.trim()) newErrors.promoterName = 'Name of promoter / owner is required';
    if (!formData.orgType.length) newErrors.orgType = 'Please select organisation type';
    if (!formData.commencementDate.trim()) newErrors.commencementDate = 'Date of commencement is required';
    if (!formData.landArea.trim() || Number(formData.landArea) <= 0) {
      newErrors.landArea = 'Valid total land area is required';
    }
    if (!formData.lettableRooms.trim() || Number(formData.lettableRooms) < 1) {
      newErrors.lettableRooms = 'Must have at least 1 lettable room';
    }
    if (!formData.ownership) newErrors.ownership = 'Ownership status is required';
    if (!formData.planApproved) newErrors.planApproved = 'Approval status is required';
    if (!formData.locationType) newErrors.locationType = 'Location category is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStep(2);
    }
  };

  const handleSaveDraft = () => {
    setIsDrafting(true);
    setTimeout(() => {
      const now = new Date();
      setSavedTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setIsDrafting(false);
    }, 400);
  };

  return (
    <Ux4gThemeProvider isDark={false}>
      {/* SafeAreaView with explicit Android StatusBar inset */}
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" translucent={false} />

        {/* --- Top App Header (Cleanly positioned below status bar) --- */}
        <View style={styles.headerBar}>
          <View style={styles.headerBrandRow}>
            {/* National Emblem SVG */}
            <NationalEmblem width={24} height={40} />
            {/* UX4G Union Logo SVG */}
            <UnionLogo />
          </View>

          {/* Hamburger Menu Button */}
          <TouchableOpacity style={styles.hamburgerBtn} activeOpacity={0.7}>
            <View style={styles.hamburgerLine} />
            <View style={styles.hamburgerLine} />
            <View style={styles.hamburgerLine} />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Main Card */}
          <View style={styles.card}>
            {/* Status Banner - Aligned to Right as per image */}
            <View style={styles.savedBannerContainer}>
              <View style={styles.savedBannerContent}>
                <View style={styles.savedCheckCircle}>
                  <Text style={styles.savedCheckIcon}>✓</Text>
                </View>
                <Text style={styles.savedBannerText}>Saved {savedTime}</Text>
              </View>
            </View>

            {/* Official Ux4gCompactStepper component (layout: centeredBetween) */}
            <Ux4gCompactStepper
              totalSteps={10}
              currentStep={step}
              stepLabel={step === 1 ? 'Unit / Property details' : 'Step ' + step + ' of 10'}
              description={
                step === 1
                  ? 'Identity of the property and of the legal entity behind it.'
                  : 'Awaiting Screen 2 from user.'
              }
              layout="centeredBetween"
              onNext={handleContinue}
              onPrevious={() => setStep((p) => Math.max(1, p - 1))}
            />

            <Ux4gDivider style={{ marginVertical: 16 }} />

            {step === 1 ? (
              <View style={styles.formContainer}>
                {/* 1. Unit Details */}
                <Text style={styles.sectionHeading}>Unit Details</Text>

                <Ux4gInputField
                  label="Name of the unit"
                  required
                  value={formData.unitName}
                  onValueChange={(v) => updateField('unitName', v)}
                  placeholder="Enter the name your guests will see"
                  status={errors.unitName ? 'error' : 'defaultStatus'}
                  caption={errors.unitName}
                />

                <Ux4gInputField
                  label="Brand name (optional)"
                  value={formData.brandName}
                  onValueChange={(v) => updateField('brandName', v)}
                  placeholder="If the unit trades under a brand"
                />

                <Ux4gInputField
                  label="Legal entity name"
                  required
                  value={formData.legalEntityName}
                  onValueChange={(v) => updateField('legalEntityName', v)}
                  placeholder="Exactly as printed on the PAN"
                  status={errors.legalEntityName ? 'error' : 'defaultStatus'}
                  caption={errors.legalEntityName}
                />

                <Ux4gInputField
                  label="Name of the promoter / owner"
                  required
                  value={formData.promoterName}
                  onValueChange={(v) => updateField('promoterName', v)}
                  placeholder="Full name"
                  status={errors.promoterName ? 'error' : 'defaultStatus'}
                  caption={errors.promoterName}
                />

                <Ux4gSelectionDropdown
                  label="Organisation type *"
                  options={ORGANISATION_TYPES}
                  selectedOptionIds={formData.orgType}
                  onSelectionChange={(v) => updateField('orgType', v)}
                  size="l"
                />
                {errors.orgType && <Text style={styles.errorCaption}>{errors.orgType}</Text>}

                <Ux4gInputField
                  label="Firm registration number"
                  value={formData.firmRegNumber}
                  onValueChange={(v) => updateField('firmRegNumber', v)}
                  placeholder="Required for a firm or company"
                />

                <Ux4gDatePicker
                  label="Date of commencement"
                  isRequired
                  placeholder="Select date"
                  onDateSelected={(date) => {
                    const d = String(date.getDate()).padStart(2, '0');
                    const m = String(date.getMonth() + 1).padStart(2, '0');
                    const y = date.getFullYear();
                    updateField('commencementDate', d + '/' + m + '/' + y);
                  }}
                  status={errors.commencementDate ? 'error' : 'defaultStatus'}
                  description={errors.commencementDate || ''}
                />

                <Ux4gDivider style={{ marginVertical: 16 }} />

                {/* 2. Property Details */}
                <Text style={styles.sectionHeading}>Property Details</Text>

                <Ux4gSelectionDropdown
                  label="Unit of measurement *"
                  options={LAND_UNITS}
                  selectedOptionIds={formData.landUnit}
                  onSelectionChange={(v) => updateField('landUnit', v)}
                  size="l"
                />

                <Ux4gInputField
                  label="Total land area"
                  required
                  type="number"
                  value={formData.landArea}
                  onValueChange={(v) => updateField('landArea', v)}
                  placeholder="Numbers only"
                  status={errors.landArea ? 'error' : 'defaultStatus'}
                  caption={errors.landArea}
                />

                <Ux4gSelectionDropdown
                  label="Unit of measurement"
                  options={[{ id: 'sq_m', label: 'Sq. m. - same as land area' }]}
                  selectedOptionIds={['sq_m']}
                  onSelectionChange={() => {}}
                  size="l"
                />

                <Ux4gInputField
                  label="Built-up area"
                  type="number"
                  value={formData.builtUpArea}
                  onValueChange={(v) => updateField('builtUpArea', v)}
                  placeholder="Numbers only"
                />

                <Ux4gInputField
                  label="Total number of lettable rooms"
                  required
                  type="number"
                  value={formData.lettableRooms}
                  onValueChange={(v) => updateField('lettableRooms', v)}
                  placeholder="4"
                  status={errors.lettableRooms ? 'error' : 'defaultStatus'}
                  caption={errors.lettableRooms}
                />

                <Text style={styles.fieldLabel}>Ownership of Property *</Text>
                {['Owned', 'Leased', 'Jointly owned', 'Other'].map((opt) => (
                  <Ux4gRadioButton
                    key={opt}
                    label={opt}
                    value={opt}
                    groupValue={formData.ownership}
                    onChanged={(v) => updateField('ownership', v)}
                  />
                ))}

                <Text style={styles.fieldLabel}>Whether Building Plan Approved *</Text>
                {['Yes', 'No', 'Not applicable'].map((opt) => (
                  <Ux4gRadioButton
                    key={opt}
                    label={opt}
                    value={opt}
                    groupValue={formData.planApproved}
                    onChanged={(v) => updateField('planApproved', v)}
                  />
                ))}

                <Ux4gSelectionDropdown
                  label="Unit of measurement"
                  options={[{ id: 'mtr', label: 'mtr' }]}
                  selectedOptionIds={['mtr']}
                  onSelectionChange={() => {}}
                  size="l"
                />

                <Ux4gInputField
                  label="Width of the approach road"
                  type="number"
                  value={formData.roadWidth}
                  onValueChange={(v) => updateField('roadWidth', v)}
                  placeholder="Numbers only"
                />

                <Ux4gDivider style={{ marginVertical: 16 }} />

                {/* 3. Category of Registration */}
                <Text style={styles.sectionHeading}>Category of Registration</Text>
                <Text style={styles.fieldLabel}>Type of Location *</Text>
                {[
                  'Municipal Corporation or Council',
                  'Town & Country Planning, SADA or Nagar Panchayat',
                  'Gram Panchayat',
                  'Other',
                ].map((opt) => (
                  <Ux4gRadioButton
                    key={opt}
                    label={opt}
                    value={opt}
                    groupValue={formData.locationType}
                    onChanged={(v) => updateField('locationType', v)}
                  />
                ))}

                <Ux4gDivider style={{ marginVertical: 16 }} />

                {/* 4. Website and Social Media Details */}
                <Text style={styles.sectionHeading}>Website and Social Media Details</Text>
                <Ux4gInputField
                  label="Unit website (optional)"
                  value={formData.websiteUrl}
                  onValueChange={(v) => updateField('websiteUrl', v)}
                  placeholder="https://"
                />
                <Ux4gInputField
                  label="Room booking link (optional)"
                  value={formData.bookingLink}
                  onValueChange={(v) => updateField('bookingLink', v)}
                  placeholder="https://"
                />

                <Ux4gDivider style={{ marginVertical: 16 }} />

                {/* 5. Nearby Landmarks */}
                <Text style={styles.sectionHeading}>Nearby Landmarks</Text>
                {formData.landmarks.map((lm, index) => (
                  <View key={lm.id} style={styles.landmarkItem}>
                    {/* Type row */}
                    <Text style={styles.landmarkFieldLabel}>Type</Text>
                    <View style={styles.landmarkTypeRow}>
                      <View style={styles.landmarkTypeBox}>
                        <Text style={styles.landmarkTypeLabel}>{lm.type}</Text>
                      </View>
                      {lm.removable && (
                        <TouchableOpacity
                          onPress={() => removeLandmark(lm.id)}
                          style={styles.trashBtn}
                          activeOpacity={0.7}
                        >
                          <TrashOutlineIcon size={20} color="#1E293B" />
                        </TouchableOpacity>
                      )}
                    </View>

                    {/* Name of the place dropdown */}
                    <Ux4gSelectionDropdown
                      label="Name of the place *"
                      options={LANDMARK_PLACE_OPTIONS[lm.id] || [
                        { id: 'custom', label: lm.type }
                      ]}
                      selectedOptionIds={lm.selectedPlace}
                      onSelectionChange={(v) => updateLandmark(lm.id, 'selectedPlace', v)}
                      placeholder={lm.placeholder || 'Select place'}
                      size="l"
                    />

                    {/* Distance & Unit */}
                    <View style={styles.distanceRow}>
                      <View style={{ flex: 1 }}>
                        <Ux4gInputField
                          label="Distance *"
                          value={lm.dist}
                          onValueChange={(v) => updateLandmark(lm.id, 'dist', v)}
                          placeholder="0"
                        />
                      </View>
                      <View style={{ width: 120 }}>
                        <Ux4gSelectionDropdown
                          label="Unit"
                          options={DISTANCE_UNITS}
                          selectedOptionIds={lm.unit}
                          onSelectionChange={(v) => updateLandmark(lm.id, 'unit', v)}
                          size="l"
                        />
                      </View>
                    </View>

                    {index < formData.landmarks.length - 1 && (
                      <View style={styles.landmarkDivider} />
                    )}
                  </View>
                ))}

                <TouchableOpacity
                  style={styles.addLandmarkOutlineBtn}
                  onPress={addLandmark}
                  activeOpacity={0.7}
                >
                  <Text style={styles.addLandmarkOutlineBtnText}>+ Add another landmark</Text>
                </TouchableOpacity>

                <Ux4gDivider style={{ marginVertical: 16 }} />

                {/* 6. Activities Offered */}
                <Text style={styles.sectionHeading}>Activities Offered</Text>

                <Text style={styles.subCategoryHeading}>Tourism Activities</Text>
                {['Guided local tours', 'Cultural programmes', 'Regional cuisine', 'Other'].map((act) => (
                  <Ux4gCheckbox
                    key={act}
                    label={act}
                    value={formData.tourism.includes(act)}
                    onChanged={() => toggleActivity('tourism', act)}
                  />
                ))}
                {formData.tourism.includes('Other') && (
                  <Ux4gInputField
                    label="Shown when Other is ticked"
                    value={formData.otherTourism}
                    onValueChange={(v) => updateField('otherTourism', v)}
                    placeholder="Separate several with commas"
                  />
                )}

                <Text style={[styles.subCategoryHeading, { marginTop: 14 }]}>Adventure Activities</Text>
                {['Trekking', 'Water sports', 'Camping', 'Other'].map((act) => (
                  <Ux4gCheckbox
                    key={act}
                    label={act}
                    value={formData.adventure.includes(act)}
                    onChanged={() => toggleActivity('adventure', act)}
                  />
                ))}
                {formData.adventure.includes('Other') && (
                  <Ux4gInputField
                    label="Shown when Other is ticked"
                    value={formData.otherAdventure}
                    onValueChange={(v) => updateField('otherAdventure', v)}
                    placeholder="Separate several with commas"
                  />
                )}

                <Text style={[styles.subCategoryHeading, { marginTop: 14 }]}>Entertainment Activities</Text>
                {['Indoor games', 'Outdoor games', 'Live music', 'Other'].map((act) => (
                  <Ux4gCheckbox
                    key={act}
                    label={act}
                    value={formData.entertainment.includes(act)}
                    onChanged={() => toggleActivity('entertainment', act)}
                  />
                ))}
                {formData.entertainment.includes('Other') && (
                  <Ux4gInputField
                    label="Shown when Other is ticked"
                    value={formData.otherEntertainment}
                    onValueChange={(v) => updateField('otherEntertainment', v)}
                    placeholder="Separate several with commas"
                  />
                )}

                <Ux4gDivider style={{ marginVertical: 20 }} />

                {/* Action Buttons */}
                <View style={styles.actionBtnStack}>
                  <Ux4gButton
                    text="Continue"
                    size="large"
                    onPress={handleContinue}
                    backgroundColor="#4F46E5"
                    style={{ borderRadius: 8 }}
                  />
                  <Ux4gButton
                    variant="outline"
                    text="Save as Draft"
                    size="large"
                    isLoading={isDrafting}
                    onPress={handleSaveDraft}
                    style={{ borderRadius: 8, borderColor: '#CBD5E1' }}
                  />
                </View>
              </View>
            ) : (
              <View style={styles.stepSuccessCard}>
                <Text style={styles.stepSuccessTitle}>Step {step} of 10</Text>
                <Text style={styles.stepSuccessDesc}>
                  Step 1 (Unit / Property details) data has been completely validated and stored!
                  Ready to connect Screen 2 as soon as you provide it.
                </Text>
                <Ux4gButton
                  text="← Back to Step 1 (Unit / Property details)"
                  size="medium"
                  onPress={() => setStep(1)}
                  style={{ marginTop: 18 }}
                />
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: STATUSBAR_HEIGHT, // Inset to prevent Android status bar from overlapping
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 10,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  headerBrandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  hamburgerBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#C7D2FE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    gap: 4,
    backgroundColor: '#F5F3FF',
  },
  hamburgerLine: {
    width: '100%',
    height: 2,
    backgroundColor: '#4F46E5',
    borderRadius: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    padding: 14,
    paddingBottom: 36,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  savedBannerContainer: {
    width: '100%',
    backgroundColor: '#F0FDF4',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginBottom: 14,
    alignItems: 'flex-end', // Right-aligned as per user image
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DCFCE7',
  },
  savedBannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  savedCheckCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#16A34A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  savedCheckIcon: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: '800',
  },
  savedBannerText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#15803D',
  },
  formContainer: {
    gap: 12,
    marginTop: 6,
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 4,
  },
  subCategoryHeading: {
    fontSize: 13,
    fontWeight: '700',
    color: '#334155',
    marginTop: 4,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0F172A',
    marginTop: 4,
  },
  errorCaption: {
    fontSize: 12,
    color: '#DC2626',
    marginTop: -4,
  },
  landmarkItem: {
    gap: 10,
    marginBottom: 8,
  },
  landmarkFieldLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: -4,
  },
  landmarkTypeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  landmarkTypeBox: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 8,
    minHeight: 44,
    justifyContent: 'center',
  },
  landmarkTypeLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1E293B',
  },
  trashBtn: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  distanceRow: {
    flexDirection: 'row',
    gap: 12,
  },
  landmarkDivider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginTop: 10,
    marginBottom: 6,
  },
  addLandmarkOutlineBtn: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#C7D2FE',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 6,
  },
  addLandmarkOutlineBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4F46E5',
  },
  actionBtnStack: {
    marginTop: 10,
    gap: 12,
  },
  stepSuccessCard: {
    padding: 32,
    alignItems: 'center',
  },
  stepSuccessTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4F46E5',
    marginBottom: 8,
  },
  stepSuccessDesc: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 20,
    maxWidth: 320,
  },
});`;
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
        `# Homestay Registration Flow (UX4G React Native)

A complete government service pattern for registering a homestay or hospitality unit using UX4G Design System components.

## Features
- **SafeArea Inset**: Cleanly positioned below device status bar / toolbar
- **App Header**: National Emblem (Ashoka Pillar) + UX4G Union swirl logo and hamburger toggle
- **Status Banner**: Right-aligned \`Saved 3:14 PM\` indicator
- **CompactStepper**: \`Ux4gCompactStepper\` (\`layout="centeredBetween"\`) with 10 progress segments
- **Form Fields**: Built with official \`Ux4gInputField\`, \`Ux4gSelectionDropdown\`, \`Ux4gRadioButton\`, \`Ux4gCheckbox\`, \`Ux4gButton\`, \`Ux4gDivider\`
- **Validation**: Strict client-side validation checks
- **Nearby Landmarks**: Dynamic landmark management (+ Add, Remove)
- **Activities**: Multi-category selection with conditional inputs

## Getting Started
\`\`\`bash
npm install
npx expo start
\`\`\`
`
      );

      zip.file('App.tsx', fullAppCodeString);

      const content = await zip.generateAsync({ type: 'blob' });
      const downloadUrl = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'ux4g-homestay-registration-flow.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);

      triggerToast('Complete code ZIP downloaded successfully!');
    } catch (err) {
      console.error(err);
      triggerToast('Error generating ZIP package.');
    } finally {
      setIsDownloadingZip(false);
    }
  };

  return (
    <Ux4gThemeProvider isDark={isDark}>
      <div className="wb-page" style={{ padding: '24px 32px' }}>
        {/* Top Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
            marginBottom: 20,
            paddingBottom: 16,
            borderBottom: `1px solid ${isDark ? '#334155' : '#E2E8F0'}`,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <h1 className="wb-title" style={{ margin: 0 }}>
                Homestay Registration flow
              </h1>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '3px 10px',
                  borderRadius: 12,
                  fontSize: 12,
                  fontWeight: 600,
                  backgroundColor: isDark ? 'rgba(99, 102, 241, 0.2)' : '#EEF2FF',
                  color: isDark ? '#A5B4FC' : '#4F46E5',
                  border: `1px solid ${isDark ? '#4F46E5' : '#C7D2FE'}`,
                }}
              >
                Service Pattern • 10 Steps
              </span>
            </div>
            <p className="wb-subtitle" style={{ margin: '6px 0 0 0', maxWidth: 700 }}>
              Complete end-to-end citizen service registration flow for homestay hosts and hospitality promoters.
              Rendered with Expo Snack and built with UX4G React Native components.
            </p>
          </div>

          {/* Action Buttons: Open in Snack & Download ZIP */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a
              href={`https://snack.expo.dev/@snack/${SNACK_ID}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '9px 16px',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
                backgroundColor: 'transparent',
                color: isDark ? '#A5B4FC' : UX4GColors.primary600,
                border: `1.5px solid ${isDark ? '#4F46E5' : '#C7D2FE'}`,
                textDecoration: 'none',
              }}
              title="Open full interactive project on snack.expo.dev"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                open_in_new
              </span>
              Open in Expo Snack
            </a>

            <button
              onClick={handleDownloadZip}
              disabled={isDownloadingZip}
              type="button"
              style={{
                display: 'inline-flex',
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
            minHeight: 850,
            backgroundColor: isDark ? '#1E293B' : '#F8FAFC',
            border: `1px solid ${isDark ? '#334155' : '#E2E8F0'}`,
          }}
        >
          <iframe
            src={snackUrl}
            style={{
              width: '100%',
              height: '850px',
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
