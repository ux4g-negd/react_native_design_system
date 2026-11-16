import React, { useState, useMemo } from 'react';
import JSZip from 'jszip';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { buildTourismProjectModularProject } from '../utils/tourismProjectModularZip';

interface TourismProjectApprovalFlowDocProps {
  isDark: boolean;
}

// Official Snack ID for Tourism Project Approval Flow (Complete 5-Step Workflow with Ux4gDatePicker)
const SNACK_ID = '6Or6lQugyiK2BZ6VV6-c0';

export const TourismProjectApprovalFlowDoc: React.FC<TourismProjectApprovalFlowDocProps> = ({ isDark }) => {
  const [isDownloadingZip, setIsDownloadingZip] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Direct Expo Snack embed URL using official Snack ID
  const snackUrl = useMemo(() => {
    return `https://snack.expo.dev/embedded/${SNACK_ID}?platform=android&supportedPlatforms=ios,android&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&theme=${
      isDark ? 'dark' : 'light'
    }`;
  }, [isDark]);

  // Standalone React Native Expo App Source Code (Tourism Project Approval Flow)
  const fullAppCodeString = useMemo(() => {
    return `import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
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
  Ux4gStatusBanner,
  Ux4gCompactStepper,
  Ux4gCard,
  Ux4gFileUpload,
  Ux4gModal,
  Ux4gSpinner,
  Ux4gButton,
  Ux4gDatePicker,
  Ux4gThemeProvider,
  UX4GColors,
} from 'ux4g-react-native-components';
import NationalEmblem from './NationalEmblem';

// Helper to parse 'DD/MM/YYYY' or ISO string to Date object
const parseDate = (str) => {
  if (!str) return undefined;
  if (str instanceof Date) return isNaN(str.getTime()) ? undefined : str;
  const parts = String(str).trim().split('/');
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
    title: 'The approval you hold',
    subtitle: 'The sanction order you already have, and what the project is.',
  },
  2: {
    title: 'How the project was funded',
    subtitle: 'What it cost, what you are claiming, and where the money came from.',
  },
  3: {
    title: 'Completion and evidence',
    subtitle: 'Whether the project is finished, and the proof that it exists.',
  },
  4: {
    title: 'Review & declaration',
    subtitle: 'Check every section. Nothing can be changed after you submit.',
  },
  5: {
    title: 'Submitted',
    subtitle: 'Your application is with the department.',
  },
};

const PROJECT_TYPES = [
  { id: 'eco_resort', label: 'Eco-resort / Nature lodge' },
  { id: 'hotel_resort', label: 'Hotel / Resort (3-star & above)' },
  { id: 'heritage_hotel', label: 'Heritage Hotel conversion' },
  { id: 'wellness_ayush', label: 'Wellness Resort / AYUSH Centre' },
  { id: 'amusement_park', label: 'Amusement / Theme Park' },
  { id: 'adventure_camp', label: 'Adventure / Camping Facility' },
  { id: 'mice_centre', label: 'MICE / Convention Centre' },
  { id: 'wayside_amenity', label: 'Wayside Amenity / Caravan Park' },
];

const PROJECT_NATURE_OPTIONS = [
  { id: 'new', label: 'A new tourism project' },
  { id: 'expansion', label: 'An expansion of an existing one' },
];

const SANCTION_REVISED_OPTIONS = [
  { id: 'yes', label: 'Yes — an amended order was issued' },
  { id: 'no', label: 'No' },
];

const PROJECT_COMPLETION_OPTIONS = [
  { id: 'yes', label: 'Yes — it is built and operating' },
  { id: 'no', label: 'No — it is still under construction' },
];

const BORROWED_OPTIONS = [
  { id: 'yes', label: 'Yes — from a bank or financial institution' },
  { id: 'no', label: 'No' },
];

const LENDER_OPTIONS = [
  { id: 'sbi', label: 'State Bank of India (SBI)' },
  { id: 'pnb', label: 'Punjab National Bank (PNB)' },
  { id: 'bob', label: 'Bank of Baroda' },
  { id: 'hdfc', label: 'HDFC Bank Ltd' },
  { id: 'icici', label: 'ICICI Bank Ltd' },
  { id: 'sidbi', label: 'SIDBI (Small Industries Dev Bank)' },
  { id: 'tfci', label: 'Tourism Finance Corp of India (TFCI)' },
  { id: 'other', label: 'Other Scheduled Commercial Bank' },
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [savedTime, setSavedTime] = useState('3:14 PM');
  const [toastMessage, setToastMessage] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Approval Details
    sanctionNumber: 'SIPB/2026/00412',
    isRecordFound: true,
    projectType: [],
    projectNature: 'new',
    projectCost: '',
    sanctionRevised: 'yes',
    // Step 2: Project Funding (matches exact UI image)
    eligibleProjectCost: '5,00,00,000',
    subsidyClaimed: '',
    ownContribution: '3,00,00,000',
    otherGrants: '',
    hasBorrowed: 'yes',
    anythingElse: '',
    totalFunding: '3,00,00,000',
    amountBorrowed: '',
    lender: [],
    branch: '',
    interestRate: '',
    loanTerm: '',
    loanSanctionFiles: [],
    repaymentScheduleFiles: [],
    // Step 3 Completion & Evidence (matches exact UI image)
    hasProjectCompleted: 'yes',
    completionDate: '',
    expandedCategory: 'completion', // 'completion' | 'clearance' | 'photos' | null
    occupancyCertFiles: [],
    inspectionReportFiles: [],
    fireNocFiles: [],
    pollutionNocFiles: [],
    forestNocFiles: [],
    layoutMapFiles: [],
    projectPhotoFiles: [],
    // Step 3 Components legacy fallback
    roomCount: '48',
    diningCapacity: '120',
    conferenceHall: true,
    spaWellness: true,
    adventureZone: true,
    // Step 4 Clearances
    hasSipbOrder: true,
    hasDpr: true,
    hasPcbNoc: true,
    hasForestNoc: false,
    // Step 4 Review & Declaration
    declarationAccuracy: false,
    declarationInspection: false,
    // Step 5 Legacy
    declarationAccurate: true,
    declarationTerms: true,
  });

  const scrollRef = useRef(null);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleFetchSanction = () => {
    setFormData((prev) => ({
      ...prev,
      isRecordFound: true,
    }));
    triggerToast('Sanction order record found and verified.');
  };

  const handleSaveDraft = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const timeStr = formattedHours + ':' + formattedMinutes + ' ' + ampm;
    setSavedTime(timeStr);
    triggerToast('Draft saved at ' + timeStr);
  };

  const handleContinue = () => {
    if (step < 5) {
      setStep((prev) => prev + 1);
      scrollRef.current?.scrollTo({ y: 0, animated: true });
    } else {
      triggerToast('Application submitted for Tourism Project Approval!');
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
      scrollRef.current?.scrollTo({ y: 0, animated: true });
    }
  };

  const jumpToStep = (targetStep) => {
    setStep(targetStep);
    setIsNavMenuOpen(false);
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  const activeMeta = STEP_METADATA[step] || STEP_METADATA[1];

  return (
    <Ux4gThemeProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" backgroundColor={UX4GColors.primary} />

        {/* ─── GOV TOP BAR ─── */}
        <View style={styles.govTopBar}>
          <View style={styles.govLeft}>
            <View style={styles.flagBox}>
              <View style={{ flex: 1, backgroundColor: '#FF9933' }} />
              <View style={{ flex: 1, backgroundColor: '#FFFFFF' }} />
              <View style={{ flex: 1, backgroundColor: '#138808' }} />
            </View>
            <Text style={styles.govText}>Government of India</Text>
            <Svg width={12} height={12} viewBox="0 0 24 24" fill="none" style={{ marginLeft: 4 }}>
              <Path
                d="M14 3h7v7M10 14L20 4M21 14v6a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h6"
                stroke={UX4GColors.white}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
            <Path
              d="M12 2a2 2 0 100 4 2 2 0 000-4zM7 8h10v2H7V8zm2 4h6v10H9V12z"
              fill={UX4GColors.white}
            />
          </Svg>
        </View>

        {/* ─── WHITE HEADER BAR ─── */}
        <View style={styles.whiteHeader}>
          <View style={styles.logoRow}>
            <NationalEmblem width={36} height={36} />
            <View style={{ width: 10 }} />
            <UnionLogo />
          </View>
          <TouchableOpacity
            style={styles.hamburgerBtn}
            activeOpacity={0.7}
            onPress={() => setIsNavMenuOpen(true)}
          >
            <View style={styles.hamburgerBar} />
            <View style={styles.hamburgerBar} />
            <View style={styles.hamburgerBar} />
          </TouchableOpacity>
        </View>

        {/* ─── MAIN SCROLLABLE CONTENT ─── */}
        <ScrollView
          ref={scrollRef}
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Saved Status Banner (Steps 1-4, using Ux4gStatusBanner) */}
          {step < 5 && (
            <Ux4gStatusBanner
              variant="successLight"
              title={'Saved ' + savedTime}
              titleStyle={{ fontSize: 13, fontWeight: '600', color: '#15803D' }}
              contentAlignment="right"
              leadingIcon={
                <View style={{ marginRight: -8 }}>
                  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
                    <Circle cx={12} cy={12} r={10} stroke="#15803D" strokeWidth={2} />
                    <Path
                      d="M8 12l2.5 2.5L16 9"
                      stroke="#15803D"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </View>
              }
              paddingStyle={{ paddingVertical: 8, paddingHorizontal: 16 }}
              marginStyle={{ marginHorizontal: 16, marginTop: 12, marginBottom: 4 }}
              containerStyle={{
                backgroundColor: '#EBF9F1',
                borderColor: 'transparent',
                elevation: 0,
                shadowOpacity: 0,
                borderRadius: 8,
              }}
            />
          )}

          {/* Stepper Card */}
          <View style={styles.stepperCard}>
            <Ux4gCompactStepper
              totalSteps={5}
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
          </View>

          {/* ─── STEP 1: APPROVAL DETAILS ─── */}
          {step === 1 && (
            <View style={styles.formContainer}>
              {/* Approval Details Section */}
              <Text style={styles.sectionHeading}>Approval Details</Text>

              <Text style={styles.fieldLabel}>
                Sanction order, LOI or SIPB application number<Text style={styles.asterisk}>*</Text>
              </Text>
              <View style={styles.inputWithActionContainer}>
                <TextInput
                  style={styles.inputWithAction}
                  value={formData.sanctionNumber}
                  onChangeText={(val) => setFormData((prev) => ({ ...prev, sanctionNumber: val }))}
                  placeholder="As printed on the order, for example SIPB/2026/00412"
                  placeholderTextColor={UX4GColors.neutral400}
                />
                <TouchableOpacity
                  style={styles.fetchButton}
                  onPress={handleFetchSanction}
                  activeOpacity={0.7}
                >
                  <Text style={styles.fetchButtonText}>Fetch</Text>
                </TouchableOpacity>
              </View>

              {/* Verified Match Found Banner */}
              {formData.isRecordFound && (
                <View style={styles.recordFoundBox}>
                  <View style={styles.recordFoundIconCol}>
                    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                      <Circle cx={12} cy={12} r={12} fill={UX4GColors.green600} />
                      <Path
                        d="M7 12.5L10.5 16L17 8.5"
                        stroke={UX4GColors.white}
                        strokeWidth={2.2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </Svg>
                  </View>
                  <Text style={styles.recordFoundText}>
                    <Text style={styles.recordFoundBold}>Found</Text> — Valley View Eco Resort, sanctioned 15 April 2026 by the State Investment Promotion Board. The project name and sanction date come from this record and are not asked again.
                  </Text>
                </View>
              )}

              {/* Project Details Section */}
              <Text style={[styles.sectionHeading, { marginTop: 28 }]}>Project Details</Text>

              <Text style={styles.fieldLabel}>
                Type of tourism project<Text style={styles.asterisk}>*</Text>
              </Text>
              <Ux4gSelectionDropdown
                placeholder="Select the notified project type"
                options={PROJECT_TYPES}
                selectedOptionIds={formData.projectType}
                onSelectionChange={(val) => setFormData((prev) => ({ ...prev, projectType: val }))}
                size="l"
              />

              <Text style={[styles.fieldLabel, { marginTop: 20 }]}>
                Is this a new project or an expansion?<Text style={styles.asterisk}>*</Text>
              </Text>
              <View style={styles.radioGroup}>
                {PROJECT_NATURE_OPTIONS.map((opt) => (
                  <View key={opt.id} style={styles.radioItem}>
                    <Ux4gRadioButton
                      label={opt.label}
                      checked={formData.projectNature === opt.id}
                      onChange={() => setFormData((prev) => ({ ...prev, projectNature: opt.id }))}
                    />
                  </View>
                ))}
              </View>

              <Text style={[styles.fieldLabel, { marginTop: 20 }]}>
                Total cost of the project<Text style={styles.asterisk}>*</Text>
              </Text>
              <View style={styles.currencyInputContainer}>
                <Text style={styles.currencyPrefix}>₹</Text>
                <TextInput
                  style={styles.currencyInput}
                  value={formData.projectCost}
                  onChangeText={(val) =>
                    setFormData((prev) => ({ ...prev, projectCost: val.replace(/[^0-9]/g, '') }))
                  }
                  placeholder="Digits only"
                  placeholderTextColor={UX4GColors.neutral400}
                  keyboardType="numeric"
                />
              </View>

              <Text style={[styles.fieldLabel, { marginTop: 20 }]}>
                Has the sanction order been revised since it was issued?<Text style={styles.asterisk}>*</Text>
              </Text>
              <View style={styles.radioGroup}>
                {SANCTION_REVISED_OPTIONS.map((opt) => (
                  <View key={opt.id} style={styles.radioItem}>
                    <Ux4gRadioButton
                      label={opt.label}
                      checked={formData.sanctionRevised === opt.id}
                      onChange={() => setFormData((prev) => ({ ...prev, sanctionRevised: opt.id }))}
                    />
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* ─── STEP 2: PROJECT FUNDING ─── */}
          {step === 2 && (
            <View style={styles.formContainer}>
              {/* Project Cost and Subsidy Claimed */}
              <Text style={styles.sectionHeading}>Project Cost and Subsidy Claimed</Text>

              <Text style={styles.fieldLabel}>
                Eligible project cost<Text style={styles.asterisk}>*</Text>
              </Text>
              <View style={styles.currencyInputReadOnlyContainer}>
                <Text style={styles.currencyPrefix}>₹</Text>
                <Text style={styles.currencyInputReadOnlyText}>{formData.eligibleProjectCost}</Text>
              </View>

              <Text style={[styles.fieldLabel, { marginTop: 18 }]}>
                Capital investment subsidy claimed<Text style={styles.asterisk}>*</Text>
              </Text>
              <View style={styles.currencyInputContainer}>
                <Text style={styles.currencyPrefix}>₹</Text>
                <TextInput
                  style={styles.currencyInput}
                  value={formData.subsidyClaimed}
                  onChangeText={(val) =>
                    setFormData((prev) => ({ ...prev, subsidyClaimed: val.replace(/[^0-9]/g, '') }))
                  }
                  placeholder="Digits only"
                  placeholderTextColor={UX4GColors.neutral400}
                  keyboardType="numeric"
                />
              </View>

              {/* Source of Funds */}
              <Text style={[styles.sectionHeading, { marginTop: 28 }]}>Source of Funds</Text>

              <Text style={styles.fieldLabel}>
                Your own contribution<Text style={styles.asterisk}>*</Text>
              </Text>
              <View style={styles.currencyInputContainer}>
                <Text style={styles.currencyPrefix}>₹</Text>
                <TextInput
                  style={styles.currencyInput}
                  value={formData.ownContribution}
                  onChangeText={(val) =>
                    setFormData((prev) => ({ ...prev, ownContribution: val }))
                  }
                  placeholder="Digits only"
                  placeholderTextColor={UX4GColors.neutral400}
                  keyboardType="numeric"
                />
              </View>

              <Text style={[styles.fieldLabel, { marginTop: 18 }]}>
                Other grants or subsidies<Text style={styles.asterisk}>*</Text>
              </Text>
              <View style={styles.currencyInputContainer}>
                <Text style={styles.currencyPrefix}>₹</Text>
                <TextInput
                  style={styles.currencyInput}
                  value={formData.otherGrants}
                  onChangeText={(val) =>
                    setFormData((prev) => ({ ...prev, otherGrants: val }))
                  }
                  placeholder="0 if none"
                  placeholderTextColor={UX4GColors.neutral400}
                  keyboardType="numeric"
                />
              </View>

              <Text style={[styles.fieldLabel, { marginTop: 18 }]}>
                Have you borrowed for this project?<Text style={styles.asterisk}>*</Text>
              </Text>
              <View style={styles.radioGroup}>
                {BORROWED_OPTIONS.map((opt) => (
                  <View key={opt.id} style={styles.radioItem}>
                    <Ux4gRadioButton
                      label={opt.label}
                      checked={formData.hasBorrowed === opt.id}
                      onChange={() => setFormData((prev) => ({ ...prev, hasBorrowed: opt.id }))}
                    />
                  </View>
                ))}
              </View>

              <Text style={[styles.fieldLabel, { marginTop: 18 }]}>
                Anything else<Text style={styles.asterisk}>*</Text>
              </Text>
              <View style={styles.currencyInputContainer}>
                <Text style={styles.currencyPrefix}>₹</Text>
                <TextInput
                  style={styles.currencyInput}
                  value={formData.anythingElse}
                  onChangeText={(val) =>
                    setFormData((prev) => ({ ...prev, anythingElse: val }))
                  }
                  placeholder="0 if none"
                  placeholderTextColor={UX4GColors.neutral400}
                  keyboardType="numeric"
                />
              </View>

              <Text style={[styles.fieldLabel, { marginTop: 18 }]}>
                Total<Text style={styles.asterisk}>*</Text>
              </Text>
              <View style={styles.currencyInputReadOnlyContainer}>
                <Text style={styles.currencyPrefix}>₹</Text>
                <Text style={styles.currencyInputReadOnlyText}>{formData.totalFunding}</Text>
              </View>

              {/* Warning Banner */}
              <View style={styles.warningBanner}>
                <View style={styles.warningIconCol}>
                  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                    <Circle cx={12} cy={12} r={10} fill={UX4GColors.gold600} />
                    <Path
                      d="M12 7v6M12 16.5v.5"
                      stroke={UX4GColors.white}
                      strokeWidth={2.2}
                      strokeLinecap="round"
                    />
                  </Svg>
                </View>
                <Text style={styles.warningText}>
                  Your funding adds up to ₹{formData.totalFunding} against an eligible project cost of ₹{formData.eligibleProjectCost} — ₹2,00,00,000 is unaccounted for. Correct one of the two before you continue.
                </Text>
              </View>

              {/* Loan Details Section (conditional on hasBorrowed === 'yes') */}
              {formData.hasBorrowed === 'yes' && (
                <View style={{ marginTop: 28 }}>
                  <Text style={styles.sectionHeading}>Loan Details</Text>

                  <Text style={styles.fieldLabel}>
                    Amount borrowed<Text style={styles.asterisk}>*</Text>
                  </Text>
                  <View style={styles.currencyInputContainer}>
                    <Text style={styles.currencyPrefix}>₹</Text>
                    <TextInput
                      style={styles.currencyInput}
                      value={formData.amountBorrowed}
                      onChangeText={(val) =>
                        setFormData((prev) => ({ ...prev, amountBorrowed: val.replace(/[^0-9]/g, '') }))
                      }
                      placeholder="Digits only"
                      placeholderTextColor={UX4GColors.neutral400}
                      keyboardType="numeric"
                    />
                  </View>

                  <Text style={[styles.fieldLabel, { marginTop: 18 }]}>
                    Bank or financial institution<Text style={styles.asterisk}>*</Text>
                  </Text>
                  <Ux4gSelectionDropdown
                    placeholder="Search the lender"
                    options={LENDER_OPTIONS}
                    selectedOptionIds={formData.lender}
                    onSelectionChange={(val) => setFormData((prev) => ({ ...prev, lender: val }))}
                    size="l"
                  />

                  <Text style={[styles.fieldLabel, { marginTop: 18 }]}>
                    Branch<Text style={styles.asterisk}>*</Text>
                  </Text>
                  <TextInput
                    style={styles.standardInput}
                    value={formData.branch}
                    onChangeText={(val) => setFormData((prev) => ({ ...prev, branch: val }))}
                    placeholder="Branch name or IFSC"
                    placeholderTextColor={UX4GColors.neutral400}
                  />

                  <Text style={[styles.fieldLabel, { marginTop: 18 }]}>
                    Interest rate<Text style={styles.asterisk}>*</Text>
                  </Text>
                  <View style={styles.suffixInputContainer}>
                    <TextInput
                      style={styles.suffixInput}
                      value={formData.interestRate}
                      onChangeText={(val) => setFormData((prev) => ({ ...prev, interestRate: val }))}
                      placeholder="Per cent per year"
                      placeholderTextColor={UX4GColors.neutral400}
                      keyboardType="numeric"
                    />
                    <Text style={styles.suffixText}>%</Text>
                  </View>

                  <Text style={[styles.fieldLabel, { marginTop: 18 }]}>
                    Term<Text style={styles.asterisk}>*</Text>
                  </Text>
                  <TextInput
                    style={styles.standardInput}
                    value={formData.loanTerm}
                    onChangeText={(val) => setFormData((prev) => ({ ...prev, loanTerm: val }))}
                    placeholder="Months"
                    placeholderTextColor={UX4GColors.neutral400}
                    keyboardType="numeric"
                  />

                  {/* Loan sanction letter file upload using official Ux4gFileUpload */}
                  <Text style={[styles.fieldLabel, { marginTop: 20 }]}>
                    Loan sanction letter<Text style={styles.asterisk}>*</Text>
                  </Text>
                  <Text style={styles.fieldSubCaption}>PDF · 1 file · self-attested</Text>
                  <Ux4gFileUpload
                    maxFiles={1}
                    maxFileSize={5 * 1024 * 1024}
                    allowedExtensions={['pdf', 'jpg', 'png']}
                    borderStyle="dashed"
                    buttonBorderRadius={8}
                    buttonColor={UX4GColors.primary}
                    buttonBorderColor={UX4GColors.purple700}
                    initialFiles={formData.loanSanctionFiles}
                    onFilesChanged={(files) =>
                      setFormData((prev) => ({ ...prev, loanSanctionFiles: files }))
                    }
                  />

                  {/* Interest repayment schedule file upload using official Ux4gFileUpload */}
                  <Text style={[styles.fieldLabel, { marginTop: 24 }]}>
                    Interest repayment schedule<Text style={styles.asterisk}>*</Text>
                  </Text>
                  <Text style={styles.fieldSubCaption}>PDF · 1 file</Text>
                  <Ux4gFileUpload
                    maxFiles={1}
                    maxFileSize={5 * 1024 * 1024}
                    allowedExtensions={['pdf']}
                    borderStyle="dashed"
                    buttonBorderRadius={8}
                    buttonColor={UX4GColors.primary}
                    buttonBorderColor={UX4GColors.purple700}
                    initialFiles={formData.repaymentScheduleFiles}
                    onFilesChanged={(files) =>
                      setFormData((prev) => ({ ...prev, repaymentScheduleFiles: files }))
                    }
                  />
                </View>
              )}
            </View>
          )}

          {/* ─── STEP 3: COMPLETION & EVIDENCE ─── */}
          {step === 3 && (
            <View style={styles.formContainer}>
              {/* Completion Status Section */}
              <Text style={styles.sectionHeading}>Completion Status</Text>

              <Text style={styles.fieldLabel}>
                Has the project been completed?<Text style={styles.asterisk}>*</Text>
              </Text>
              <View style={styles.radioGroup}>
                {PROJECT_COMPLETION_OPTIONS.map((opt) => (
                  <View key={opt.id} style={styles.radioItem}>
                    <Ux4gRadioButton
                      label={opt.label}
                      checked={formData.hasProjectCompleted === opt.id}
                      onChange={() => setFormData((prev) => ({ ...prev, hasProjectCompleted: opt.id }))}
                    />
                  </View>
                ))}
              </View>

              {formData.hasProjectCompleted === 'yes' && (
                <>
                  <View style={{ marginTop: 20 }}>
                    <Ux4gDatePicker
                      label="Date of completion"
                      required
                      placeholder="Select date"
                      initialDate={parseDate(formData.completionDate)}
                      onDateSelected={(date) => {
                        setFormData((prev) => ({ ...prev, completionDate: formatDate(date) }));
                      }}
                    />
                  </View>

                  {/* ── Accordion 1: Completion Documents (Expanded by default) ── */}
                  <View style={[styles.accordionCard, { marginTop: 24 }]}>
                    <TouchableOpacity
                      style={styles.accordionHeader}
                      activeOpacity={0.7}
                      onPress={() =>
                        setFormData((prev) => ({
                          ...prev,
                          expandedCategory: prev.expandedCategory === 'completion' ? null : 'completion',
                        }))
                      }
                    >
                      <Text style={styles.accordionTitle}>Completion Documents</Text>
                      <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                        {formData.expandedCategory === 'completion' ? (
                          <Path
                            d="M18 15l-6-6-6 6"
                            stroke={UX4GColors.neutral900}
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        ) : (
                          <Path
                            d="M6 9l6 6 6-6"
                            stroke={UX4GColors.neutral900}
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        )}
                      </Svg>
                    </TouchableOpacity>

                    {formData.expandedCategory === 'completion' && (
                      <View style={styles.accordionContent}>
                        {/* Occupancy or completion certificate */}
                        <View style={styles.docItemHeaderRow}>
                          <View
                            style={[
                              styles.circleIndicator,
                              formData.occupancyCertFiles?.length > 0 && styles.circleIndicatorActive,
                            ]}
                          >
                            {formData.occupancyCertFiles?.length > 0 && (
                              <Svg width={10} height={10} viewBox="0 0 24 24" fill="none">
                                <Path
                                  d="M5 13l4 4L19 7"
                                  stroke={UX4GColors.white}
                                  strokeWidth={3}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </Svg>
                            )}
                          </View>
                          <Text style={styles.docItemTitleText}>
                            Occupancy or completion certificate<Text style={styles.asterisk}>*</Text>
                          </Text>
                        </View>
                        <Text style={styles.fieldSubCaption}>
                          PDF · 1 file · issued by the local authority
                        </Text>
                        <Ux4gFileUpload
                          maxFiles={1}
                          maxFileSize={5 * 1024 * 1024}
                          allowedExtensions={['pdf', 'jpg', 'png']}
                          borderStyle="dashed"
                          buttonBorderRadius={8}
                          buttonColor={UX4GColors.primary}
                          buttonBorderColor={UX4GColors.purple700}
                          initialFiles={formData.occupancyCertFiles}
                          onFilesChanged={(files) =>
                            setFormData((prev) => ({ ...prev, occupancyCertFiles: files }))
                          }
                        />

                        {/* Inspection report by the departmental committee */}
                        <View style={[styles.docItemHeaderRow, { marginTop: 24 }]}>
                          <View
                            style={[
                              styles.circleIndicator,
                              formData.inspectionReportFiles?.length > 0 && styles.circleIndicatorActive,
                            ]}
                          >
                            {formData.inspectionReportFiles?.length > 0 && (
                              <Svg width={10} height={10} viewBox="0 0 24 24" fill="none">
                                <Path
                                  d="M5 13l4 4L19 7"
                                  stroke={UX4GColors.white}
                                  strokeWidth={3}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </Svg>
                            )}
                          </View>
                          <Text style={styles.docItemTitleText}>
                            Inspection report by the departmental committee<Text style={styles.asterisk}>*</Text>
                          </Text>
                        </View>
                        <Text style={styles.fieldSubCaption}>PDF · 1 file</Text>
                        <Ux4gFileUpload
                          maxFiles={1}
                          maxFileSize={5 * 1024 * 1024}
                          allowedExtensions={['pdf', 'jpg', 'png']}
                          borderStyle="dashed"
                          buttonBorderRadius={8}
                          buttonColor={UX4GColors.primary}
                          buttonBorderColor={UX4GColors.purple700}
                          initialFiles={formData.inspectionReportFiles}
                          onFilesChanged={(files) =>
                            setFormData((prev) => ({ ...prev, inspectionReportFiles: files }))
                          }
                        />
                      </View>
                    )}
                  </View>

                  {/* ── Accordion 2: Clearance Documents (Collapsed by default) ── */}
                  <View style={[styles.accordionCard, { marginTop: 16 }]}>
                    <TouchableOpacity
                      style={styles.accordionHeader}
                      activeOpacity={0.7}
                      onPress={() =>
                        setFormData((prev) => ({
                          ...prev,
                          expandedCategory: prev.expandedCategory === 'clearance' ? null : 'clearance',
                        }))
                      }
                    >
                      <View style={{ flex: 1 }}>
                        <Text style={styles.accordionTitle}>Clearance Documents</Text>
                        <Text style={styles.accordionSubtitle}>
                          {formData.fireNocFiles?.length +
                            formData.pollutionNocFiles?.length +
                            formData.forestNocFiles?.length +
                            formData.layoutMapFiles?.length >
                          0
                            ? String(
                                (formData.fireNocFiles?.length || 0) +
                                (formData.pollutionNocFiles?.length || 0) +
                                (formData.forestNocFiles?.length || 0) +
                                (formData.layoutMapFiles?.length || 0)
                              ) + ' of 4 uploaded'
                            : '4 documents · none uploaded yet'}
                        </Text>
                        <View style={styles.dotsRow}>
                          <View
                            style={[
                              styles.docDot,
                              formData.fireNocFiles?.length > 0 && styles.docDotFilled,
                            ]}
                          />
                          <View
                            style={[
                              styles.docDot,
                              formData.pollutionNocFiles?.length > 0 && styles.docDotFilled,
                            ]}
                          />
                          <View
                            style={[
                              styles.docDot,
                              formData.forestNocFiles?.length > 0 && styles.docDotFilled,
                            ]}
                          />
                          <View
                            style={[
                              styles.docDot,
                              formData.layoutMapFiles?.length > 0 && styles.docDotFilled,
                            ]}
                          />
                        </View>
                      </View>
                      <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                        {formData.expandedCategory === 'clearance' ? (
                          <Path
                            d="M18 15l-6-6-6 6"
                            stroke={UX4GColors.neutral900}
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        ) : (
                          <Path
                            d="M6 9l6 6 6-6"
                            stroke={UX4GColors.neutral900}
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        )}
                      </Svg>
                    </TouchableOpacity>

                    {formData.expandedCategory === 'clearance' && (
                      <View style={styles.accordionContent}>
                        <Text style={styles.fieldLabel}>Fire safety clearance / NOC*</Text>
                        <Text style={styles.fieldSubCaption}>PDF · 1 file</Text>
                        <Ux4gFileUpload
                          maxFiles={1}
                          maxFileSize={5 * 1024 * 1024}
                          allowedExtensions={['pdf']}
                          borderStyle="dashed"
                          buttonBorderRadius={8}
                          buttonColor={UX4GColors.primary}
                          buttonBorderColor={UX4GColors.purple700}
                          initialFiles={formData.fireNocFiles}
                          onFilesChanged={(files) =>
                            setFormData((prev) => ({ ...prev, fireNocFiles: files }))
                          }
                        />

                        <Text style={[styles.fieldLabel, { marginTop: 20 }]}>
                          State Pollution Control Board CTE / CTO*
                        </Text>
                        <Text style={styles.fieldSubCaption}>PDF · 1 file</Text>
                        <Ux4gFileUpload
                          maxFiles={1}
                          maxFileSize={5 * 1024 * 1024}
                          allowedExtensions={['pdf']}
                          borderStyle="dashed"
                          buttonBorderRadius={8}
                          buttonColor={UX4GColors.primary}
                          buttonBorderColor={UX4GColors.purple700}
                          initialFiles={formData.pollutionNocFiles}
                          onFilesChanged={(files) =>
                            setFormData((prev) => ({ ...prev, pollutionNocFiles: files }))
                          }
                        />

                        <Text style={[styles.fieldLabel, { marginTop: 20 }]}>
                          Forest / CRZ / Wildlife Clearance (if applicable)
                        </Text>
                        <Text style={styles.fieldSubCaption}>PDF · 1 file</Text>
                        <Ux4gFileUpload
                          maxFiles={1}
                          maxFileSize={5 * 1024 * 1024}
                          allowedExtensions={['pdf']}
                          borderStyle="dashed"
                          buttonBorderRadius={8}
                          buttonColor={UX4GColors.primary}
                          buttonBorderColor={UX4GColors.purple700}
                          initialFiles={formData.forestNocFiles}
                          onFilesChanged={(files) =>
                            setFormData((prev) => ({ ...prev, forestNocFiles: files }))
                          }
                        />

                        <Text style={[styles.fieldLabel, { marginTop: 20 }]}>
                          Approved Building Layout Plan & Map*
                        </Text>
                        <Text style={styles.fieldSubCaption}>PDF, DWG · 1 file</Text>
                        <Ux4gFileUpload
                          maxFiles={1}
                          maxFileSize={10 * 1024 * 1024}
                          allowedExtensions={['pdf', 'jpg', 'png']}
                          borderStyle="dashed"
                          buttonBorderRadius={8}
                          buttonColor={UX4GColors.primary}
                          buttonBorderColor={UX4GColors.purple700}
                          initialFiles={formData.layoutMapFiles}
                          onFilesChanged={(files) =>
                            setFormData((prev) => ({ ...prev, layoutMapFiles: files }))
                          }
                        />
                      </View>
                    )}
                  </View>

                  {/* ── Accordion 3: Photographs of the Project (Collapsed by default) ── */}
                  <View style={[styles.accordionCard, { marginTop: 16 }]}>
                    <TouchableOpacity
                      style={styles.accordionHeader}
                      activeOpacity={0.7}
                      onPress={() =>
                        setFormData((prev) => ({
                          ...prev,
                          expandedCategory: prev.expandedCategory === 'photos' ? null : 'photos',
                        }))
                      }
                    >
                      <View style={{ flex: 1 }}>
                        <Text style={styles.accordionTitle}>Photographs of the Project</Text>
                        <Text style={styles.accordionSubtitle}>
                          {formData.projectPhotoFiles?.length > 0
                            ? '1 document uploaded'
                            : '1 document · none uploaded yet'}
                        </Text>
                        <View style={styles.dotsRow}>
                          <View
                            style={[
                              styles.docDot,
                              formData.projectPhotoFiles?.length > 0 && styles.docDotFilled,
                            ]}
                          />
                        </View>
                      </View>
                      <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                        {formData.expandedCategory === 'photos' ? (
                          <Path
                            d="M18 15l-6-6-6 6"
                            stroke={UX4GColors.neutral900}
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        ) : (
                          <Path
                            d="M6 9l6 6 6-6"
                            stroke={UX4GColors.neutral900}
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        )}
                      </Svg>
                    </TouchableOpacity>

                    {formData.expandedCategory === 'photos' && (
                      <View style={styles.accordionContent}>
                        <Text style={styles.fieldLabel}>
                          Geo-tagged photographs of completed project & facilities*
                        </Text>
                        <Text style={styles.fieldSubCaption}>JPG, PNG · 1 file · geo-tagged</Text>
                        <Ux4gFileUpload
                          maxFiles={1}
                          maxFileSize={8 * 1024 * 1024}
                          allowedExtensions={['jpg', 'jpeg', 'png']}
                          borderStyle="dashed"
                          buttonBorderRadius={8}
                          buttonColor={UX4GColors.primary}
                          buttonBorderColor={UX4GColors.purple700}
                          initialFiles={formData.projectPhotoFiles}
                          onFilesChanged={(files) =>
                            setFormData((prev) => ({ ...prev, projectPhotoFiles: files }))
                          }
                        />
                      </View>
                    )}
                  </View>
                </>
              )}
            </View>
          )}

          {/* ─── STEP 4: REVIEW & DECLARATION ─── */}
          {step === 4 && (
            <View style={styles.formContainer}>
              <Text style={styles.sectionHeading}>Preview Your Application</Text>

              {/* Card 1: Step 1 Summary */}
              <View style={styles.previewCard}>
                <View style={styles.previewCardHeader}>
                  <View style={styles.previewCardHeaderLeft}>
                    <View style={styles.checkCircleIcon}>
                      <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                        <Path
                          d="M5 13l4 4L19 7"
                          stroke={UX4GColors.white}
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </Svg>
                    </View>
                    <Text style={styles.previewCardTitle}>Step 1 · The approval you hold</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.editPencilBtn}
                    onPress={() => jumpToStep(1)}
                    activeOpacity={0.7}
                  >
                    <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                      <Path
                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                        fill={UX4GColors.neutral900}
                      />
                    </Svg>
                  </TouchableOpacity>
                </View>
                <Text style={styles.previewCardSubText}>
                  SIPB/2026/00412 · Valley View Eco Resort · eco tourism project · new
                </Text>
              </View>

              {/* Card 2: Step 2 Summary */}
              <View style={styles.previewCard}>
                <View style={styles.previewCardHeader}>
                  <View style={styles.previewCardHeaderLeft}>
                    <View style={styles.checkCircleIcon}>
                      <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                        <Path
                          d="M5 13l4 4L19 7"
                          stroke={UX4GColors.white}
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </Svg>
                    </View>
                    <Text style={styles.previewCardTitle}>Step 2 · How it was funded</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.editPencilBtn}
                    onPress={() => jumpToStep(2)}
                    activeOpacity={0.7}
                  >
                    <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                      <Path
                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                        fill={UX4GColors.neutral900}
                      />
                    </Svg>
                  </TouchableOpacity>
                </View>
                <Text style={styles.previewCardSubText}>
                  ₹5,00,00,000 cost · ₹1,00,00,000 claimed · funding short by ₹2,00,00,000
                </Text>
              </View>

              {/* Card 3: Step 3 Summary */}
              <View style={styles.previewCard}>
                <View style={styles.previewCardHeader}>
                  <View style={styles.previewCardHeaderLeft}>
                    <View style={styles.checkCircleIcon}>
                      <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                        <Path
                          d="M5 13l4 4L19 7"
                          stroke={UX4GColors.white}
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </Svg>
                    </View>
                    <Text style={styles.previewCardTitle}>Step 3 · Completion and evidence</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.editPencilBtn}
                    onPress={() => jumpToStep(3)}
                    activeOpacity={0.7}
                  >
                    <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                      <Path
                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                        fill={UX4GColors.neutral900}
                      />
                    </Svg>
                  </TouchableOpacity>
                </View>
                <Text style={styles.previewCardSubText}>
                  Completed 1 September 2026 · 2 certificates · 3 clearances · 1 photograph
                </Text>
              </View>

              {/* Declaration Section */}
              <Text style={[styles.sectionHeading, { marginTop: 28 }]}>Declaration</Text>

              {/* Checkbox 1 */}
              <TouchableOpacity
                style={styles.declarationRow}
                activeOpacity={0.7}
                onPress={() =>
                  setFormData((prev) => ({
                    ...prev,
                    declarationAccuracy: !prev.declarationAccuracy,
                  }))
                }
              >
                <View
                  style={[
                    styles.checkboxSquare,
                    formData.declarationAccuracy && styles.checkboxSquareChecked,
                  ]}
                >
                  {formData.declarationAccuracy && (
                    <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                      <Path
                        d="M5 13l4 4L19 7"
                        stroke={UX4GColors.white}
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </Svg>
                  )}
                </View>
                <Text style={styles.declarationText}>
                  Everything I have entered is true, and the project described is the one covered by sanction order SIPB/2026/00412
                </Text>
                <Text style={styles.asterisk}>*</Text>
              </TouchableOpacity>

              {/* Checkbox 2 */}
              <TouchableOpacity
                style={[styles.declarationRow, { marginTop: 16 }]}
                activeOpacity={0.7}
                onPress={() =>
                  setFormData((prev) => ({
                    ...prev,
                    declarationInspection: !prev.declarationInspection,
                  }))
                }
              >
                <View
                  style={[
                    styles.checkboxSquare,
                    formData.declarationInspection && styles.checkboxSquareChecked,
                  ]}
                >
                  {formData.declarationInspection && (
                    <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                      <Path
                        d="M5 13l4 4L19 7"
                        stroke={UX4GColors.white}
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </Svg>
                  )}
                </View>
                <Text style={styles.declarationText}>
                  I agree to an inspection of the completed project before any amount is sanctioned
                </Text>
                <Text style={styles.asterisk}>*</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* ─── STEP 5: SUBMITTED / ACKNOWLEDGEMENT ─── */}
          {step === 5 && (
            <View style={styles.formContainer}>
              <Text style={styles.sectionHeading}>Acknowledgement</Text>

              <View style={styles.acknowledgementCard}>
                <View style={styles.ackCheckIconWrapper}>
                  <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                    <Path
                      d="M20 6L9 17L4 12"
                      stroke={UX4GColors.white}
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </View>
                <Text style={styles.acknowledgementText}>
                  Submitted. Your application number is TPA-2026-004417. Keep it — every enquiry about this claim is answered against it.
                </Text>
              </View>
            </View>
          )}

          <View style={{ height: 32 }} />
        </ScrollView>

        {/* ─── STICKY BOTTOM ACTION BAR ─── */}
        <View style={styles.bottomActionBar}>
          {step === 5 ? (
            <TouchableOpacity
              style={styles.continueButton}
              onPress={() => triggerToast('Opening tracking for application TPA-2026-004417...')}
              activeOpacity={0.8}
            >
              <Text style={styles.continueButtonText}>Track this application</Text>
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity
                style={styles.continueButton}
                onPress={handleContinue}
                activeOpacity={0.8}
              >
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.saveDraftButton}
                onPress={handleSaveDraft}
                activeOpacity={0.8}
              >
                <Text style={styles.saveDraftButtonText}>Save as draft</Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        {/* Step Navigation Drawer Modal */}
        {isNavMenuOpen && (
          <View style={styles.navMenuOverlay}>
            <TouchableOpacity
              style={StyleSheet.absoluteFillObject}
              onPress={() => setIsNavMenuOpen(false)}
              activeOpacity={1}
            />
            <View style={styles.navMenuCard}>
              <View style={styles.navMenuHeader}>
                <Text style={styles.navMenuTitle}>Jump to Screen (Step 1 - 5)</Text>
                <TouchableOpacity
                  onPress={() => setIsNavMenuOpen(false)}
                  style={styles.navMenuCloseBtn}
                >
                  <Text style={styles.navMenuCloseText}>✕</Text>
                </TouchableOpacity>
              </View>
              {[1, 2, 3, 4, 5].map((s) => (
                <TouchableOpacity
                  key={s}
                  style={[
                    styles.menuStepItem,
                    step === s && styles.menuStepItemActive,
                  ]}
                  onPress={() => jumpToStep(s)}
                  activeOpacity={0.7}
                >
                  <View
                    style={[
                      styles.menuStepBadge,
                      step === s && styles.menuStepBadgeActive,
                    ]}
                  >
                    <Text
                      style={[
                        styles.menuStepBadgeText,
                        step === s && styles.menuStepBadgeTextActive,
                      ]}
                    >
                      {s}
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={[
                        styles.menuStepTitle,
                        step === s && styles.menuStepTitleActive,
                      ]}
                    >
                      {STEP_METADATA[s].title}
                    </Text>
                    <Text style={styles.menuStepSubtitle} numberOfLines={1}>
                      {STEP_METADATA[s].subtitle}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Toast Feedback */}
        {toastMessage && (
          <View style={styles.toastContainer}>
            <Text style={styles.toastText}>{toastMessage}</Text>
          </View>
        )}
      </SafeAreaView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: UX4GColors.neutral50,
  },
  govTopBar: {
    backgroundColor: UX4GColors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  govLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagBox: {
    width: 18,
    height: 12,
    marginRight: 8,
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.4)',
  },
  govText: {
    color: UX4GColors.white,
    fontSize: 13,
    fontWeight: '600',
  },
  whiteHeader: {
    backgroundColor: UX4GColors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: UX4GColors.neutral200,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hamburgerBtn: {
    width: 36,
    height: 36,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: UX4GColors.primary200,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
  },
  hamburgerBar: {
    width: 18,
    height: 2,
    backgroundColor: UX4GColors.primary,
    marginVertical: 1.5,
    borderRadius: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  savedBannerRow: {
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  savedPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: UX4GColors.green50,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  savedText: {
    color: UX4GColors.green800,
    fontSize: 12,
    fontWeight: '600',
  },
  stepperCard: {
    backgroundColor: UX4GColors.white,
    borderRadius: 10,
    paddingVertical: 8,
    marginBottom: 16,
  },
  formContainer: {
    backgroundColor: UX4GColors.white,
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: UX4GColors.neutral100,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: '700',
    color: UX4GColors.neutral900,
    marginBottom: 14,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: UX4GColors.neutral800,
    marginBottom: 8,
  },
  fieldSubCaption: {
    fontSize: 12,
    color: UX4GColors.neutral500,
    marginTop: -4,
    marginBottom: 8,
  },
  asterisk: {
    color: UX4GColors.red600,
  },
  inputWithActionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: UX4GColors.neutral300,
    borderRadius: 8,
    backgroundColor: UX4GColors.white,
    paddingHorizontal: 14,
    minHeight: 48,
  },
  inputWithAction: {
    flex: 1,
    fontSize: 14,
    color: UX4GColors.neutral900,
    paddingVertical: 10,
  },
  fetchButton: {
    paddingLeft: 12,
    paddingVertical: 8,
  },
  fetchButtonText: {
    color: UX4GColors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  recordFoundBox: {
    flexDirection: 'row',
    backgroundColor: UX4GColors.green50,
    borderWidth: 1,
    borderColor: UX4GColors.green300,
    borderRadius: 8,
    padding: 14,
    marginTop: 14,
  },
  recordFoundIconCol: {
    marginRight: 10,
    marginTop: 2,
  },
  recordFoundText: {
    flex: 1,
    fontSize: 13,
    color: UX4GColors.green900,
    lineHeight: 19,
  },
  recordFoundBold: {
    fontWeight: '700',
  },
  radioGroup: {
    marginTop: 4,
  },
  radioItem: {
    marginVertical: 4,
  },
  currencyInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: UX4GColors.neutral300,
    borderRadius: 8,
    backgroundColor: UX4GColors.white,
    paddingHorizontal: 12,
    height: 48,
  },
  currencyInputReadOnlyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: UX4GColors.neutral300,
    borderRadius: 8,
    backgroundColor: UX4GColors.neutral200,
    paddingHorizontal: 12,
    height: 48,
  },
  currencyInputReadOnlyText: {
    fontSize: 14,
    color: UX4GColors.neutral700,
    fontWeight: '500',
  },
  currencyPrefix: {
    fontSize: 16,
    fontWeight: '500',
    color: UX4GColors.neutral600,
    marginRight: 8,
    paddingLeft: 2,
  },
  currencyInput: {
    flex: 1,
    fontSize: 14,
    color: UX4GColors.neutral900,
    paddingVertical: 10,
  },
  standardInput: {
    borderWidth: 1,
    borderColor: UX4GColors.neutral300,
    borderRadius: 8,
    backgroundColor: UX4GColors.white,
    paddingHorizontal: 14,
    height: 48,
    fontSize: 14,
    color: UX4GColors.neutral900,
  },
  suffixInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: UX4GColors.neutral300,
    borderRadius: 8,
    backgroundColor: UX4GColors.white,
    paddingHorizontal: 12,
    height: 48,
  },
  suffixInput: {
    flex: 1,
    fontSize: 14,
    color: UX4GColors.neutral900,
    paddingVertical: 10,
  },
  suffixText: {
    fontSize: 15,
    fontWeight: '600',
    color: UX4GColors.neutral500,
    paddingHorizontal: 6,
  },
  warningBanner: {
    flexDirection: 'row',
    backgroundColor: UX4GColors.gold50,
    borderWidth: 1,
    borderColor: UX4GColors.gold200,
    borderRadius: 8,
    padding: 14,
    marginTop: 18,
  },
  warningIconCol: {
    marginRight: 10,
    marginTop: 2,
  },
  warningText: {
    flex: 1,
    fontSize: 13,
    color: UX4GColors.gold900,
    lineHeight: 19,
  },
  uploadBox: {
    borderWidth: 1.5,
    borderColor: UX4GColors.primary,
    borderStyle: 'dashed',
    borderRadius: 8,
    backgroundColor: UX4GColors.primary50,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
  cloudIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: UX4GColors.primary100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  dropTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: UX4GColors.neutral800,
    marginBottom: 4,
  },
  dropSub: {
    fontSize: 12,
    color: UX4GColors.neutral500,
    marginBottom: 4,
  },
  dropOr: {
    fontSize: 12,
    color: UX4GColors.neutral400,
    marginVertical: 4,
  },
  uploadButtonPill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: UX4GColors.white,
    borderWidth: 1,
    borderColor: UX4GColors.primary200,
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginTop: 4,
  },
  uploadButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: UX4GColors.primary,
  },
  attachedFileBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: UX4GColors.neutral50,
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    borderRadius: 8,
    padding: 12,
    marginTop: 6,
  },
  attachedFileName: {
    fontSize: 13,
    fontWeight: '600',
    color: UX4GColors.neutral900,
  },
  attachedFileSize: {
    fontSize: 12,
    color: UX4GColors.neutral500,
    marginTop: 2,
  },
  removeFileBtn: {
    fontSize: 13,
    fontWeight: '600',
    color: UX4GColors.red600,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  checkItem: {
    marginVertical: 6,
  },
  docItemCard: {
    backgroundColor: UX4GColors.neutral50,
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    borderRadius: 8,
    padding: 14,
  },
  docItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  docItemTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: UX4GColors.neutral900,
  },
  docItemSub: {
    fontSize: 12,
    color: UX4GColors.neutral500,
    marginTop: 2,
  },
  docStatusBadge: {
    fontSize: 12,
    fontWeight: '600',
    color: UX4GColors.green800,
    backgroundColor: UX4GColors.green50,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  reviewCard: {
    backgroundColor: UX4GColors.neutral50,
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    borderRadius: 8,
    padding: 14,
  },
  reviewStepTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: UX4GColors.primary,
    marginBottom: 6,
  },
  reviewText: {
    fontSize: 13,
    color: UX4GColors.neutral700,
    marginTop: 2,
    lineHeight: 18,
  },
  bottomActionBar: {
    backgroundColor: UX4GColors.white,
    borderTopWidth: 1,
    borderTopColor: UX4GColors.neutral200,
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 24 : 16,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: UX4GColors.neutral300,
    borderRadius: 8,
    backgroundColor: UX4GColors.white,
    paddingHorizontal: 14,
    height: 48,
  },
  datePickerInput: {
    flex: 1,
    fontSize: 14,
    color: UX4GColors.neutral900,
  },
  accordionCard: {
    backgroundColor: UX4GColors.white,
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    borderRadius: 12,
    padding: 16,
  },
  accordionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accordionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: UX4GColors.neutral900,
  },
  accordionSubtitle: {
    fontSize: 13,
    color: UX4GColors.neutral500,
    marginTop: 2,
  },
  accordionContent: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: UX4GColors.neutral100,
  },
  docItemHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  circleIndicator: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: UX4GColors.neutral300,
    backgroundColor: UX4GColors.white,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleIndicatorActive: {
    borderColor: UX4GColors.green600,
    backgroundColor: UX4GColors.green600,
  },
  docItemTitleText: {
    fontSize: 14,
    fontWeight: '600',
    color: UX4GColors.neutral800,
    flex: 1,
  },
  dotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 6,
  },
  docDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1.2,
    borderColor: UX4GColors.neutral300,
    backgroundColor: UX4GColors.white,
  },
  docDotFilled: {
    borderColor: UX4GColors.green600,
    backgroundColor: UX4GColors.green600,
  },
  previewCard: {
    backgroundColor: UX4GColors.green50,
    borderWidth: 1,
    borderColor: UX4GColors.green300,
    borderRadius: 10,
    padding: 14,
    marginTop: 12,
  },
  previewCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  previewCardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  checkCircleIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: UX4GColors.green600,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  previewCardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: UX4GColors.green800,
    flex: 1,
  },
  editPencilBtn: {
    padding: 4,
    marginLeft: 8,
  },
  previewCardSubText: {
    fontSize: 13,
    color: UX4GColors.green700,
    lineHeight: 18,
    marginTop: 4,
    paddingLeft: 30,
  },
  declarationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkboxSquare: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: UX4GColors.neutral300,
    backgroundColor: UX4GColors.white,
    marginRight: 12,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxSquareChecked: {
    backgroundColor: UX4GColors.primary,
    borderColor: UX4GColors.primary,
  },
  declarationText: {
    flex: 1,
    fontSize: 14,
    color: UX4GColors.neutral800,
    lineHeight: 20,
    fontWeight: '500',
  },
  acknowledgementCard: {
    backgroundColor: UX4GColors.green50,
    borderWidth: 1,
    borderColor: UX4GColors.green300,
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 4,
  },
  ackCheckIconWrapper: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: UX4GColors.green600,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 2,
    flexShrink: 0,
  },
  acknowledgementText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 22,
    color: UX4GColors.green700,
    fontWeight: '400',
  },
  continueButton: {
    backgroundColor: UX4GColors.primary,
    borderRadius: 8,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    color: UX4GColors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  saveDraftButton: {
    backgroundColor: UX4GColors.white,
    borderWidth: 1,
    borderColor: UX4GColors.primary,
    borderRadius: 8,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  saveDraftButtonText: {
    color: UX4GColors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  toastContainer: {
    position: 'absolute',
    bottom: 120,
    left: 20,
    right: 20,
    backgroundColor: UX4GColors.neutral800,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: UX4GColors.neutral1000black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  toastText: {
    color: UX4GColors.white,
    fontSize: 14,
    fontWeight: '500',
  },
  navMenuOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    zIndex: 999,
  },
  navMenuCard: {
    backgroundColor: UX4GColors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
    maxHeight: '80%',
  },
  navMenuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: UX4GColors.neutral100,
  },
  navMenuTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: UX4GColors.neutral900,
  },
  navMenuCloseBtn: {
    padding: 4,
  },
  navMenuCloseText: {
    fontSize: 18,
    color: UX4GColors.neutral500,
    fontWeight: '600',
  },
  menuStepItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: UX4GColors.neutral50,
  },
  menuStepItemActive: {
    backgroundColor: UX4GColors.primary50,
    borderWidth: 1,
    borderColor: UX4GColors.primary200,
  },
  menuStepBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: UX4GColors.neutral200,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuStepBadgeActive: {
    backgroundColor: UX4GColors.primary,
  },
  menuStepBadgeText: {
    fontSize: 13,
    fontWeight: '700',
    color: UX4GColors.neutral600,
  },
  menuStepBadgeTextActive: {
    color: UX4GColors.white,
  },
  menuStepTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: UX4GColors.neutral800,
  },
  menuStepTitleActive: {
    color: UX4GColors.primary,
    fontWeight: '700',
  },
  menuStepSubtitle: {
    fontSize: 12,
    color: UX4GColors.neutral500,
    marginTop: 2,
  },
});
`;
  }, []);

  const handleDownloadZip = async () => {
    try {
      setIsDownloadingZip(true);
      const zip = new JSZip();
      const files = buildTourismProjectModularProject(fullAppCodeString);

      Object.entries(files).forEach(([path, content]) => {
        zip.file(path, content);
      });

      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'tourism-project-approval-flow-ux4g.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      triggerToast('Downloaded modular project ZIP!');
    } catch (err: any) {
      console.error('Failed to download ZIP:', err);
      triggerToast('Download error: ' + (err?.message || 'Failed to generate ZIP'));
    } finally {
      setIsDownloadingZip(false);
    }
  };

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 16px' }}>
      {/* Top Banner / Breadcrumb */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 13, color: isDark ? '#94A3B8' : '#64748B', marginBottom: 4 }}>
          Service Patterns / Tourism Project Approval Flow
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 700, margin: 0, color: isDark ? '#F1F5F9' : '#0F172A' }}>
              Tourism project Approval Flow
            </h1>
            <p style={{ margin: '4px 0 0 0', fontSize: 14, color: isDark ? '#94A3B8' : '#64748B' }}>
              Single-window statutory approval workflow for state tourism projects and eco-resorts.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
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
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {isDownloadingZip ? 'Generating ZIP...' : 'Download Code (ZIP)'}
            </button>
          </div>
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
            <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', backgroundColor: '#22C55E' }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: isDark ? '#E2E8F0' : '#334155' }}>
              Interactive Mobile Preview (Expo Snack)
            </span>
          </div>
          <span style={{ fontSize: 12, color: isDark ? '#94A3B8' : '#64748B' }}>
            5 Steps · Complete Unified Flow (Steps 1 → 5)
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
            title="Expo Snack Tourism Project Approval Flow Preview"
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
