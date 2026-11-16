import React, { useState, useMemo, useRef } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { generateEntryAndAreaPermitZip } from '../utils/entryAndAreaPermitModularZip';

interface EntryAndAreaPermitFlowDocProps {
  isDark: boolean;
}

// Official Snack ID for Entry and Area Permit Flow (9-Step Service Pattern)
const SNACK_ID = 'YMClcPJCTKgHwyB8QTD3S';

export const EntryAndAreaPermitFlowDoc: React.FC<EntryAndAreaPermitFlowDocProps> = ({ isDark }) => {
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
} from 'react-native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';
import {
  Ux4gThemeProvider,
  UX4GColors,
  Ux4gInputField,
  Ux4gTextArea,
  Ux4gDatePicker,
  Ux4gSelectionDropdown,
  Ux4gCompactStepper,
  Ux4gCard,
  Ux4gButton,
} from 'ux4g-react-native-components';
import NationalEmblem from './NationalEmblem';

// ─── UNION LOGO (Wavy Stripes) ───
const UnionLogo = () => (
  <Svg width={36} height={28} viewBox="0 0 36 28" fill="none">
    <Path
      d="M3 7c6-4 12 4 18 0s12 4 12 4"
      stroke={UX4GColors.primary}
      strokeWidth={2.8}
      strokeLinecap="round"
    />
    <Path
      d="M3 14c6-4 12 4 18 0s12 4 12 4"
      stroke={UX4GColors.primary}
      strokeWidth={2.8}
      strokeLinecap="round"
    />
    <Path
      d="M3 21c6-4 12 4 18 0s12 4 12 4"
      stroke={UX4GColors.primary}
      strokeWidth={2.8}
      strokeLinecap="round"
    />
  </Svg>
);

const STEP_METADATA = {
  1: {
    title: 'Identity & eKYC',
    subtitle: 'Authenticate against the register the government already holds, then confirm what it returned.',
  },
  2: {
    title: 'Area & Protected Zone',
    subtitle: 'Select the restricted area, border belt, or protected wildlife sanctuary you wish to visit.',
  },
  3: {
    title: 'Purpose & Dates',
    subtitle: 'State the visit purpose, checkpost of entry, and exact travel duration.',
  },
  4: {
    title: 'Accompanying Persons',
    subtitle: 'Add details of any family members or group travelers accompanying you.',
  },
  5: {
    title: 'Local Guide & Stay',
    subtitle: 'Registered regional guide details and verified stay or basecamp information.',
  },
  6: {
    title: 'Documents & Evidence',
    subtitle: 'Government ID proofs, route itinerary, and vehicle registration documents.',
  },
  7: {
    title: 'Security Undertaking',
    subtitle: 'Compliance with border security protocols and zero-waste ecological guidelines.',
  },
  8: {
    title: 'Review & Declaration',
    subtitle: 'Everything you have entered, read back before final permit submission.',
  },
  9: {
    title: 'Permit Issued',
    subtitle: 'Your entry permit is granted and registered with the district administration.',
  },
};

export default function App() {
  const [step, setStep] = useState(1);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [savedTime, setSavedTime] = useState('3:14 PM');
  const [toastMessage, setToastMessage] = useState(null);
  const [errors, setErrors] = useState({});
  const [isAadhaarMasked, setIsAadhaarMasked] = useState(true);

  // Form State initialized to match the provided image exactly
  const [formData, setFormData] = useState({
    // Step 1: Aadhaar Verification & eKYC
    aadhaarNumber: '9845 2014 6612',
    consentAadhaar: true,
    otp: '1', // first box focused/entered
    
    // Details Fetched from Aadhaar
    fullName: 'Rajeev chauhan',
    dob: '07 / 09 / 1995',
    gender: 'Male',
    permanentAddress: 'B-32, Sector 62',
    city: 'Noida',
    district: 'Gautam Buddha Nagar',
    state: 'Uttar Pradesh',
    pincode: '201309',

    // Other Details
    mobileNumber: '999999999',
    isWhatsAppSame: false,
    email: 'abc@gmail.com',
    nationality: 'indian', // 'indian' | 'foreign'
    permitRequiredFor: 'myself', // 'myself' | 'family' | 'clients'

    // Step 2: Area & Protected Zone
    permitZone: 'changthang',
    permitType: 'ilp',
    entryCheckpost: 'tsaga_la',

    // Step 3: Dates & Schedule
    startDate: '12/10/2026',
    endDate: '18/10/2026',
    durationDays: '7 days',
    visitPurpose: 'tourism_photography',
    vehicleNumber: 'DL 01 AB 4402',

    // Step 4: Members
    memberCount: '1',

    // Step 8 & 9: Submission
    declarationTrue: false,
    declarationEco: false,
    permitNumber: 'EAP-2026-009418',
  });

  const scrollRef = useRef(null);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
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

  const handleSaveDraft = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const timeStr = formattedHours + ':' + formattedMinutes + ' ' + ampm;
    setSavedTime(timeStr);
    triggerToast('Draft saved successfully at ' + timeStr);
  };

  const handleContinueStep1 = () => {
    const errs = {};
    if (!formData.consentAadhaar) {
      errs.consentAadhaar = 'Consent for Aadhaar eKYC is mandatory';
    }
    if (!formData.mobileNumber.trim()) {
      errs.mobileNumber = 'Mobile number is required';
    } else if (formData.mobileNumber.trim().length < 10) {
      errs.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      triggerToast('Please complete mandatory fields marked with *');
      scrollRef.current?.scrollTo({ y: 0, animated: true });
      return;
    }

    setErrors({});
    setStep(2);
    scrollRef.current?.scrollTo({ y: 0, animated: true });
    triggerToast('Identity verified. Proceeding to Protected Area selection.');
  };

  const handleContinue = () => {
    if (step === 1) {
      handleContinueStep1();
    } else if (step < 9) {
      setStep((prev) => prev + 1);
      scrollRef.current?.scrollTo({ y: 0, animated: true });
    } else {
      triggerToast('Permit ' + formData.permitNumber + ' is verified and active.');
      setStep(1);
      scrollRef.current?.scrollTo({ y: 0, animated: true });
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setErrors({});
      setStep((prev) => prev - 1);
      scrollRef.current?.scrollTo({ y: 0, animated: true });
    }
  };

  const jumpToStep = (targetStep) => {
    setErrors({});
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

        {/* ─── SAVED PILL BANNER ─── */}
        <View style={styles.savedBannerContainer}>
          <View style={styles.savedPill}>
            <Svg width={14} height={14} viewBox="0 0 24 24" fill="none" style={{ marginRight: 6 }}>
              <Circle cx={12} cy={12} r={10} stroke={UX4GColors.green600} strokeWidth={2} />
              <Path
                d="M8 12l2.5 2.5L16 9"
                stroke={UX4GColors.green600}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <Text style={styles.savedText}>Saved {savedTime}</Text>
          </View>
        </View>

        {/* ─── 9-SEGMENT STEPPER PROGRESS ─── */}
        <View style={styles.stepperContainer}>
          <View style={styles.progressSegmentsRow}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((s) => (
              <View
                key={s}
                style={[
                  styles.progressSegment,
                  s <= step ? styles.progressSegmentActive : styles.progressSegmentInactive,
                ]}
              />
            ))}
          </View>

          <Text style={styles.stepCounterText}>Step {step} of 9</Text>

          <View style={styles.stepperNavRow}>
            <TouchableOpacity
              style={[
                styles.navArrowBtn,
                step === 1 ? styles.navArrowBtnDisabled : styles.navArrowBtnActive,
              ]}
              onPress={handlePrevious}
              disabled={step === 1}
              activeOpacity={0.7}
            >
              <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                <Path
                  d="M19 12H5M12 19l-7-7 7-7"
                  stroke={step === 1 ? UX4GColors.neutral400 : UX4GColors.primary}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </TouchableOpacity>

            <View style={styles.stepperCenterInfo}>
              <Text style={styles.stepTitleText}>{activeMeta.title}</Text>
              <Text style={styles.stepSubtitleText}>{activeMeta.subtitle}</Text>
            </View>

            <TouchableOpacity
              style={[
                styles.navArrowBtn,
                step === 9 ? styles.navArrowBtnDisabled : styles.navArrowBtnActive,
              ]}
              onPress={handleContinue}
              disabled={step === 9}
              activeOpacity={0.7}
            >
              <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                <Path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke={step === 9 ? UX4GColors.neutral400 : UX4GColors.primary}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </TouchableOpacity>
          </View>
        </View>

        {/* ─── MAIN SCROLLABLE FORM BODY ─── */}
        <ScrollView
          ref={scrollRef}
          style={styles.mainScrollView}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 1: IDENTITY & eKYC (EXACT MATCH OF GIVEN USER IMAGE)                  */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 1 && (
            <View style={styles.formContainer}>
              {/* SECTION 1: Aadhaar Verification */}
              <Text style={styles.sectionHeading}>Aadhaar Verification</Text>

              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>
                  Aadhaar or VID number<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <View style={styles.aadhaarInputContainer}>
                  <TextInput
                    style={styles.aadhaarTextInput}
                    placeholder="xxxx xxxx xxxx"
                    placeholderTextColor={UX4GColors.neutral400}
                    value={
                      isAadhaarMasked
                        ? 'xxxx xxxx xxxx'
                        : formData.aadhaarNumber
                    }
                    editable={false}
                  />
                  <TouchableOpacity
                    style={styles.maskToggleBtn}
                    onPress={() => setIsAadhaarMasked(!isAadhaarMasked)}
                    activeOpacity={0.7}
                  >
                    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                      {isAadhaarMasked ? (
                        <>
                          <Path
                            d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"
                            stroke={UX4GColors.neutral600}
                            strokeWidth={1.8}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <Path
                            d="M1 1l22 22"
                            stroke={UX4GColors.neutral600}
                            strokeWidth={1.8}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </>
                      ) : (
                        <>
                          <Path
                            d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                            stroke={UX4GColors.neutral600}
                            strokeWidth={1.8}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <Circle cx={12} cy={12} r={3} stroke={UX4GColors.neutral600} strokeWidth={1.8} />
                        </>
                      )}
                    </Svg>
                  </TouchableOpacity>
                </View>
                <View style={styles.infoCaptionRow}>
                  <Svg width={13} height={13} viewBox="0 0 24 24" fill="none" style={{ marginRight: 5, marginTop: 1 }}>
                    <Circle cx={12} cy={12} r={10} stroke={UX4GColors.neutral500} strokeWidth={1.8} />
                    <Path d="M12 16v-4M12 8h.01" stroke={UX4GColors.neutral500} strokeWidth={2} strokeLinecap="round" />
                  </Svg>
                  <Text style={styles.infoCaptionText}>
                    12-digit Aadhaar or 16-digit VID. Masked as you type — the number is never shown in full again.
                  </Text>
                </View>
              </View>

              {/* Consent Checkbox */}
              <TouchableOpacity
                style={styles.consentCheckboxRow}
                activeOpacity={0.8}
                onPress={() => updateField('consentAadhaar', !formData.consentAadhaar)}
              >
                <View
                  style={[
                    styles.checkboxSquare,
                    formData.consentAadhaar && styles.checkboxSquareChecked,
                    errors.consentAadhaar && styles.checkboxSquareError,
                  ]}
                >
                  {formData.consentAadhaar && (
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
                <Text style={styles.consentLabelText}>
                  I consent to Aadhaar authentication and eKYC<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
              </TouchableOpacity>
              {errors.consentAadhaar && (
                <Text style={styles.errorMessageText}>{errors.consentAadhaar}</Text>
              )}

              {/* One-time password */}
              <View style={[styles.fieldGroup, { marginTop: 18 }]}>
                <Text style={styles.fieldLabel}>
                  One-time password<Text style={styles.requiredAsterisk}>*</Text>
                </Text>

                {/* 6-box OTP digits */}
                <View style={styles.otpBoxesRow}>
                  {/* Box 1 (Active/focused with vertical cursor) */}
                  <View style={[styles.otpBox, styles.otpBoxActive]}>
                    <Text style={styles.otpCursorText}>|</Text>
                  </View>
                  {/* Boxes 2 to 6 (Placeholders with '-') */}
                  {[2, 3, 4, 5, 6].map((boxIndex) => (
                    <View key={boxIndex} style={styles.otpBox}>
                      <Text style={styles.otpDashPlaceholder}>-</Text>
                    </View>
                  ))}
                </View>

                <Text style={styles.resendText}>Didn't receive OTP? Resend in 00:17</Text>
              </View>

              {/* Informational Callout Box (No Aadhaar) */}
              <View style={styles.calloutCard}>
                <View style={styles.calloutIconCol}>
                  <View style={styles.calloutCircle}>
                    <Text style={styles.calloutInfoIcon}>i</Text>
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.calloutBodyText}>
                    No Aadhaar? You can still apply in person. Named counters are listed on the service page — you do not need an Aadhaar number to obtain this permit.
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => triggerToast('Opening list of local district administrative counters')}
                  >
                    <Text style={styles.calloutLinkText}>See the list of counters</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* SECTION 2: Details Fetched from Aadhaar */}
              <Text style={[styles.sectionHeading, { marginTop: 28 }]}>
                Details Fetched from Aadhaar
              </Text>

              <View style={styles.readOnlyFieldGroup}>
                <Text style={styles.readOnlyLabel}>Full name</Text>
                <View style={styles.readOnlyBox}>
                  <Text style={styles.readOnlyValue}>{formData.fullName}</Text>
                </View>
              </View>

              <View style={styles.readOnlyFieldGroup}>
                <Text style={styles.readOnlyLabel}>Date of birth</Text>
                <View style={styles.readOnlyBox}>
                  <Text style={styles.readOnlyValue}>{formData.dob}</Text>
                </View>
              </View>

              <View style={styles.readOnlyFieldGroup}>
                <Text style={styles.readOnlyLabel}>Gender</Text>
                <View style={styles.readOnlyBox}>
                  <Text style={styles.readOnlyValue}>{formData.gender}</Text>
                </View>
              </View>

              <View style={styles.readOnlyFieldGroup}>
                <Text style={styles.readOnlyLabel}>Permanent address</Text>
                <View style={styles.readOnlyBox}>
                  <Text style={styles.readOnlyValue}>{formData.permanentAddress}</Text>
                </View>
              </View>

              <View style={styles.readOnlyFieldGroup}>
                <Text style={styles.readOnlyLabel}>City</Text>
                <View style={styles.readOnlyBox}>
                  <Text style={styles.readOnlyValue}>{formData.city}</Text>
                </View>
              </View>

              <View style={styles.readOnlyFieldGroup}>
                <Text style={styles.readOnlyLabel}>District</Text>
                <View style={styles.readOnlyBox}>
                  <Text style={styles.readOnlyValue}>{formData.district}</Text>
                </View>
              </View>

              <View style={styles.readOnlyFieldGroup}>
                <Text style={styles.readOnlyLabel}>State</Text>
                <View style={styles.readOnlyBox}>
                  <Text style={styles.readOnlyValue}>{formData.state}</Text>
                </View>
              </View>

              <View style={styles.readOnlyFieldGroup}>
                <Text style={styles.readOnlyLabel}>PIN code</Text>
                <View style={styles.readOnlyBox}>
                  <Text style={styles.readOnlyValue}>{formData.pincode}</Text>
                </View>
              </View>

              {/* SECTION 3: Other Details */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Other Details</Text>

              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>
                  Mobile number<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <View style={[styles.phoneInputContainer, errors.mobileNumber && styles.inputErrorBorder]}>
                  <Text style={styles.phoneCountryCode}>+91</Text>
                  <TextInput
                    style={styles.phoneTextInput}
                    value={formData.mobileNumber}
                    onChangeText={(val) => updateField('mobileNumber', val.replace(/[^0-9]/g, ''))}
                    placeholder="999999999"
                    placeholderTextColor={UX4GColors.neutral400}
                    keyboardType="numeric"
                    maxLength={10}
                  />
                </View>
                {errors.mobileNumber && (
                  <Text style={styles.errorMessageText}>{errors.mobileNumber}</Text>
                )}
              </View>

              {/* WhatsApp Checkbox */}
              <TouchableOpacity
                style={styles.plainCheckboxRow}
                activeOpacity={0.8}
                onPress={() => updateField('isWhatsAppSame', !formData.isWhatsAppSame)}
              >
                <View
                  style={[
                    styles.checkboxSquare,
                    formData.isWhatsAppSame && styles.checkboxSquareChecked,
                  ]}
                >
                  {formData.isWhatsAppSame && (
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
                <Text style={styles.plainCheckboxLabel}>This is also my WhatsApp number</Text>
              </TouchableOpacity>

              {/* Email */}
              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>Email</Text>
                <TextInput
                  style={styles.standardInput}
                  value={formData.email}
                  onChangeText={(val) => updateField('email', val)}
                  placeholder="abc@gmail.com"
                  placeholderTextColor={UX4GColors.neutral400}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              {/* Nationality */}
              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>
                  Nationality<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <View style={styles.radioOptionGroup}>
                  <TouchableOpacity
                    style={styles.radioItemRow}
                    activeOpacity={0.7}
                    onPress={() => updateField('nationality', 'indian')}
                  >
                    <View
                      style={[
                        styles.radioOuterCircle,
                        formData.nationality === 'indian' && styles.radioOuterCircleActive,
                      ]}
                    >
                      {formData.nationality === 'indian' && <View style={styles.radioInnerDot} />}
                    </View>
                    <Text style={styles.radioLabelText}>Indian citizen</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.radioItemRow, { marginTop: 10 }]}
                    activeOpacity={0.7}
                    onPress={() => updateField('nationality', 'foreign')}
                  >
                    <View
                      style={[
                        styles.radioOuterCircle,
                        formData.nationality === 'foreign' && styles.radioOuterCircleActive,
                      ]}
                    >
                      {formData.nationality === 'foreign' && <View style={styles.radioInnerDot} />}
                    </View>
                    <Text style={styles.radioLabelText}>Foreign national</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Permit Required For */}
              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>
                  Permit Required For<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <View style={styles.radioOptionGroup}>
                  <TouchableOpacity
                    style={styles.radioItemRow}
                    activeOpacity={0.7}
                    onPress={() => updateField('permitRequiredFor', 'myself')}
                  >
                    <View
                      style={[
                        styles.radioOuterCircle,
                        formData.permitRequiredFor === 'myself' && styles.radioOuterCircleActive,
                      ]}
                    >
                      {formData.permitRequiredFor === 'myself' && <View style={styles.radioInnerDot} />}
                    </View>
                    <Text style={styles.radioLabelText}>Myself</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.radioItemRow, { marginTop: 10 }]}
                    activeOpacity={0.7}
                    onPress={() => updateField('permitRequiredFor', 'family')}
                  >
                    <View
                      style={[
                        styles.radioOuterCircle,
                        formData.permitRequiredFor === 'family' && styles.radioOuterCircleActive,
                      ]}
                    >
                      {formData.permitRequiredFor === 'family' && <View style={styles.radioInnerDot} />}
                    </View>
                    <Text style={styles.radioLabelText}>Myself and my family</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.radioItemRow, { marginTop: 10 }]}
                    activeOpacity={0.7}
                    onPress={() => updateField('permitRequiredFor', 'clients')}
                  >
                    <View
                      style={[
                        styles.radioOuterCircle,
                        formData.permitRequiredFor === 'clients' && styles.radioOuterCircleActive,
                      ]}
                    >
                      {formData.permitRequiredFor === 'clients' && <View style={styles.radioInnerDot} />}
                    </View>
                    <Text style={styles.radioLabelText}>Clients travelling with me, as an agent</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 2: AREA & PROTECTED ZONE SELECTION                                   */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 2 && (
            <View style={styles.formContainer}>
              <Text style={styles.sectionHeading}>Restricted & Protected Zone</Text>

              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>
                  Permit Category<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <View style={styles.radioOptionGroup}>
                  <TouchableOpacity
                    style={styles.radioItemRow}
                    activeOpacity={0.7}
                    onPress={() => updateField('permitType', 'ilp')}
                  >
                    <View style={[styles.radioOuterCircle, formData.permitType === 'ilp' && styles.radioOuterCircleActive]}>
                      {formData.permitType === 'ilp' && <View style={styles.radioInnerDot} />}
                    </View>
                    <Text style={styles.radioLabelText}>Inner Line Permit (ILP) · Domestic travelers</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.radioItemRow, { marginTop: 10 }]}
                    activeOpacity={0.7}
                    onPress={() => updateField('permitType', 'pap')}
                  >
                    <View style={[styles.radioOuterCircle, formData.permitType === 'pap' && styles.radioOuterCircleActive]}>
                      {formData.permitType === 'pap' && <View style={styles.radioInnerDot} />}
                    </View>
                    <Text style={styles.radioLabelText}>Protected Area Permit (PAP) · Restricted zones</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>
                  Protected Zone / Circuit<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <View style={styles.standardInput}>
                  <Text style={{ fontSize: 14, color: UX4GColors.neutral900 }}>
                    Changthang Wildlife Sanctuary & Pangong Tso Belt
                  </Text>
                </View>
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>
                  Designated Entry Checkpost<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <View style={styles.standardInput}>
                  <Text style={{ fontSize: 14, color: UX4GColors.neutral900 }}>
                    Tsaga La / Chushul Border Outpost
                  </Text>
                </View>
              </View>
            </View>
          )}

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 3 to 8 PLACEHOLDER SIMULATION                                         */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step >= 3 && step <= 8 && (
            <View style={styles.formContainer}>
              <Text style={styles.sectionHeading}>{activeMeta.title}</Text>
              <Text style={styles.stepSubtitleText}>{activeMeta.subtitle}</Text>
              <View style={[styles.calloutCard, { marginTop: 16, backgroundColor: UX4GColors.primary50, borderColor: UX4GColors.primary200 }]}>
                <Text style={{ fontSize: 13.5, color: UX4GColors.primary800, lineHeight: 20 }}>
                  This step is configured for {activeMeta.title}. You can navigate forward or review declarations to complete your official permit submission.
                </Text>
              </View>
            </View>
          )}

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 9: PERMIT ISSUED & ACKNOWLEDGMENT                                    */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 9 && (
            <View style={styles.formContainer}>
              <View style={styles.step9TopContainer}>
                <View style={styles.step9SuccessOuterCircle}>
                  <View style={styles.step9SuccessInnerCircle}>
                    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                      <Path
                        d="M5 13l4 4L19 7"
                        stroke={UX4GColors.white}
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </Svg>
                  </View>
                </View>

                <Text style={styles.step9Heading}>Entry Permit Issued</Text>
                <Text style={styles.step9Description}>
                  Your entry and area permit has been officially granted and verified by the Office of the District Magistrate.
                </Text>
              </View>

              <View style={styles.step9DetailsCard}>
                <View style={styles.step9DetailRow}>
                  <Text style={styles.step9DetailLabel}>Permit number</Text>
                  <Text style={styles.step9DetailValue}>{formData.permitNumber}</Text>
                </View>
                <View style={styles.step9DetailRow}>
                  <Text style={styles.step9DetailLabel}>Applicant name</Text>
                  <Text style={styles.step9DetailValue}>{formData.fullName}</Text>
                </View>
                <View style={styles.step9DetailRow}>
                  <Text style={styles.step9DetailLabel}>Protected zone</Text>
                  <Text style={styles.step9DetailValue}>Changthang Wildlife Sanctuary</Text>
                </View>
                <View style={styles.step9DetailRow}>
                  <Text style={styles.step9DetailLabel}>Validity</Text>
                  <Text style={styles.step9DetailValue}>12 Oct 2026 – 18 Oct 2026</Text>
                </View>
                <View style={styles.step9DetailRow}>
                  <Text style={styles.step9DetailLabel}>Issuing Authority</Text>
                  <Text style={styles.step9DetailValue}>District Magistrate Office</Text>
                </View>
              </View>
            </View>
          )}

          <View style={{ height: 40 }} />
        </ScrollView>

        {/* ─── STICKY BOTTOM ACTIONS BAR ─── */}
        <View style={styles.bottomActionBar}>
          <TouchableOpacity
            style={styles.primaryContinueBtn}
            activeOpacity={0.85}
            onPress={handleContinue}
          >
            <Text style={styles.primaryContinueBtnText}>
              {step === 8
                ? 'Submit permit application'
                : step === 9
                ? 'Go to my permits'
                : 'Continue'}
            </Text>
          </TouchableOpacity>

          {step !== 9 && (
            <TouchableOpacity
              style={styles.secondarySaveDraftBtn}
              activeOpacity={0.85}
              onPress={handleSaveDraft}
            >
              <Text style={styles.secondarySaveDraftBtnText}>Save as draft</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* ─── HAMBURGER SIDE DRAWER MODAL ─── */}
        <Modal
          visible={isNavMenuOpen}
          transparent
          animationType="fade"
          onRequestClose={() => setIsNavMenuOpen(false)}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setIsNavMenuOpen(false)}
          >
            <View style={styles.sideDrawerContent}>
              <View style={styles.drawerHeader}>
                <Text style={styles.drawerTitle}>Permit Steps (1–9)</Text>
                <TouchableOpacity onPress={() => setIsNavMenuOpen(false)}>
                  <Text style={styles.drawerCloseText}>✕</Text>
                </TouchableOpacity>
              </View>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((s) => (
                <TouchableOpacity
                  key={s}
                  style={[styles.drawerStepItem, step === s && styles.drawerStepItemActive]}
                  onPress={() => jumpToStep(s)}
                >
                  <Text
                    style={[styles.drawerStepItemText, step === s && styles.drawerStepItemTextActive]}
                  >
                    Step {s}: {STEP_METADATA[s].title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableOpacity>
        </Modal>

        {/* ─── TOAST NOTIFICATION ─── */}
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
    backgroundColor: UX4GColors.white,
  },
  govTopBar: {
    backgroundColor: UX4GColors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 7,
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
  savedBannerContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 4,
  },
  savedPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: UX4GColors.green50,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
  },
  savedText: {
    color: UX4GColors.green800,
    fontSize: 12,
    fontWeight: '600',
  },
  stepperContainer: {
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: UX4GColors.neutral100,
  },
  progressSegmentsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  progressSegment: {
    flex: 1,
    height: 4,
    borderRadius: 2,
  },
  progressSegmentActive: {
    backgroundColor: UX4GColors.primary,
  },
  progressSegmentInactive: {
    backgroundColor: UX4GColors.neutral200,
  },
  stepCounterText: {
    textAlign: 'center',
    fontSize: 13.5,
    fontWeight: '700',
    color: UX4GColors.neutral900,
    marginTop: 10,
  },
  stepperNavRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  navArrowBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navArrowBtnActive: {
    borderColor: UX4GColors.primary300,
  },
  navArrowBtnDisabled: {
    borderColor: UX4GColors.neutral200,
    opacity: 0.5,
  },
  stepperCenterInfo: {
    flex: 1,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  stepTitleText: {
    fontSize: 15,
    fontWeight: '700',
    color: UX4GColors.primary,
  },
  stepSubtitleText: {
    fontSize: 12.5,
    color: UX4GColors.neutral700,
    textAlign: 'center',
    marginTop: 3,
    lineHeight: 16,
  },
  mainScrollView: {
    flex: 1,
    backgroundColor: UX4GColors.white,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  formContainer: {
    width: '100%',
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: '700',
    color: UX4GColors.neutral900,
    marginBottom: 12,
  },
  fieldGroup: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: UX4GColors.neutral800,
    marginBottom: 6,
  },
  requiredAsterisk: {
    color: UX4GColors.red600,
    marginLeft: 2,
  },
  aadhaarInputContainer: {
    height: 44,
    borderWidth: 1,
    borderColor: UX4GColors.neutral300,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: UX4GColors.white,
  },
  aadhaarTextInput: {
    flex: 1,
    fontSize: 14,
    color: UX4GColors.neutral900,
    letterSpacing: 1.5,
    paddingVertical: 0,
  },
  maskToggleBtn: {
    padding: 6,
  },
  infoCaptionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 5,
  },
  infoCaptionText: {
    flex: 1,
    fontSize: 11.5,
    color: UX4GColors.neutral500,
    lineHeight: 16,
  },
  consentCheckboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 6,
  },
  checkboxSquare: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: UX4GColors.neutral300,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    backgroundColor: UX4GColors.white,
  },
  checkboxSquareChecked: {
    backgroundColor: UX4GColors.primary,
    borderColor: UX4GColors.primary,
  },
  checkboxSquareError: {
    borderColor: UX4GColors.red600,
  },
  consentLabelText: {
    fontSize: 12.5,
    fontWeight: '600',
    color: UX4GColors.neutral800,
    flex: 1,
  },
  errorMessageText: {
    fontSize: 11.5,
    color: UX4GColors.red600,
    marginTop: 4,
  },
  otpBoxesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  otpBox: {
    flex: 1,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: UX4GColors.neutral300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: UX4GColors.white,
  },
  otpBoxActive: {
    borderColor: UX4GColors.primary,
    borderWidth: 1.5,
  },
  otpCursorText: {
    fontSize: 20,
    color: UX4GColors.primary,
    fontWeight: '300',
  },
  otpDashPlaceholder: {
    fontSize: 18,
    color: UX4GColors.neutral400,
  },
  resendText: {
    fontSize: 12,
    color: UX4GColors.neutral500,
    marginTop: 8,
  },
  calloutCard: {
    flexDirection: 'row',
    backgroundColor: '#F0FDFA', // Soft cyan / turquoise tint matching image
    borderWidth: 1,
    borderColor: '#99F6E4',
    borderRadius: 8,
    padding: 12,
    marginTop: 16,
  },
  calloutIconCol: {
    marginRight: 10,
    paddingTop: 1,
  },
  calloutCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#0D9488',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calloutInfoIcon: {
    color: UX4GColors.white,
    fontSize: 12,
    fontWeight: '700',
  },
  calloutBodyText: {
    fontSize: 12,
    color: '#0F766E',
    lineHeight: 17,
  },
  calloutLinkText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0D9488',
    marginTop: 4,
    textDecorationLine: 'underline',
  },
  readOnlyFieldGroup: {
    marginBottom: 10,
  },
  readOnlyLabel: {
    fontSize: 12.5,
    fontWeight: '500',
    color: UX4GColors.neutral700,
    marginBottom: 4,
  },
  readOnlyBox: {
    height: 44,
    borderRadius: 8,
    backgroundColor: '#E5E7EB', // Neutral grey filled box matching image
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  readOnlyValue: {
    fontSize: 13.5,
    fontWeight: '500',
    color: UX4GColors.neutral800,
  },
  phoneInputContainer: {
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: UX4GColors.neutral300,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  phoneCountryCode: {
    fontSize: 13.5,
    fontWeight: '600',
    color: UX4GColors.neutral700,
    marginRight: 8,
  },
  phoneTextInput: {
    flex: 1,
    fontSize: 14,
    color: UX4GColors.neutral900,
    paddingVertical: 0,
  },
  inputErrorBorder: {
    borderColor: UX4GColors.red600,
  },
  plainCheckboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 14,
  },
  plainCheckboxLabel: {
    fontSize: 12.5,
    color: UX4GColors.neutral700,
  },
  standardInput: {
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: UX4GColors.neutral300,
    paddingHorizontal: 12,
    fontSize: 14,
    color: UX4GColors.neutral900,
    justifyContent: 'center',
  },
  radioOptionGroup: {
    marginTop: 4,
  },
  radioItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioOuterCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: UX4GColors.neutral300,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  radioOuterCircleActive: {
    borderColor: UX4GColors.primary,
  },
  radioInnerDot: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    backgroundColor: UX4GColors.primary,
  },
  radioLabelText: {
    fontSize: 13,
    color: UX4GColors.neutral800,
  },
  step9TopContainer: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },
  step9SuccessOuterCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: UX4GColors.green100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  step9SuccessInnerCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: UX4GColors.green600,
    justifyContent: 'center',
    alignItems: 'center',
  },
  step9Heading: {
    fontSize: 20,
    fontWeight: '700',
    color: UX4GColors.neutral900,
    marginBottom: 8,
  },
  step9Description: {
    fontSize: 13.5,
    color: UX4GColors.neutral600,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 12,
  },
  step9DetailsCard: {
    backgroundColor: UX4GColors.green50,
    borderWidth: 1,
    borderColor: UX4GColors.green300,
    borderRadius: 12,
    padding: 16,
    marginTop: 10,
  },
  step9DetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7,
  },
  step9DetailLabel: {
    fontSize: 13,
    color: UX4GColors.neutral700,
  },
  step9DetailValue: {
    fontSize: 13,
    fontWeight: '700',
    color: UX4GColors.neutral900,
    textAlign: 'right',
  },
  bottomActionBar: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: UX4GColors.neutral200,
    backgroundColor: UX4GColors.white,
  },
  primaryContinueBtn: {
    backgroundColor: UX4GColors.primary,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryContinueBtnText: {
    color: UX4GColors.white,
    fontSize: 15,
    fontWeight: '600',
  },
  secondarySaveDraftBtn: {
    backgroundColor: UX4GColors.white,
    borderWidth: 1,
    borderColor: UX4GColors.primary300,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  secondarySaveDraftBtnText: {
    color: UX4GColors.primary,
    fontSize: 15,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  sideDrawerContent: {
    width: '78%',
    height: '100%',
    backgroundColor: UX4GColors.white,
    padding: 20,
  },
  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: UX4GColors.neutral200,
    marginBottom: 12,
  },
  drawerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: UX4GColors.neutral900,
  },
  drawerCloseText: {
    fontSize: 18,
    color: UX4GColors.neutral500,
    fontWeight: '600',
    padding: 4,
  },
  drawerStepItem: {
    paddingVertical: 11,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 4,
  },
  drawerStepItemActive: {
    backgroundColor: UX4GColors.primary50,
  },
  drawerStepItemText: {
    fontSize: 13,
    color: UX4GColors.neutral700,
  },
  drawerStepItemTextActive: {
    color: UX4GColors.primary,
    fontWeight: '700',
  },
  toastContainer: {
    position: 'absolute',
    bottom: 90,
    left: 20,
    right: 20,
    backgroundColor: UX4GColors.neutral900,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  toastText: {
    color: UX4GColors.white,
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
  },
});
`;
  }, []);

  const handleDownloadZip = async () => {
    try {
      setIsDownloadingZip(true);
      const blob = await generateEntryAndAreaPermitZip({
        appCode: fullAppCodeString,
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ux4g-entry-and-area-permit-flow.zip';
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
              Entry and Area Permit Flow
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
            Citizen service pattern for Inner Line Permit (ILP), Protected Area Permit (PAP), and Restricted Area Permit (RAP) entry into designated protected or border areas.
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
              color: UX4GColors.white,
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
            backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.green50,
            border: `1px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.green300}`,
            color: isDark ? UX4GColors.neutral100 : UX4GColors.green800,
            fontSize: 13,
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 18, color: UX4GColors.green600 }}>
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
          backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral50,
          border: `1px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.neutral200}`,
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
          title="Expo Snack Entry and Area Permit Flow Preview"
        />
      </div>
    </div>
  );
};

export default EntryAndAreaPermitFlowDoc;
