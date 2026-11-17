import React, { useState, useMemo, useRef } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { generateEntryAndAreaPermitZip } from '../utils/entryAndAreaPermitModularZip';

interface EntryAndAreaPermitFlowDocProps {
  isDark: boolean;
}

// Official Snack ID for Entry and Area Permit Flow (Complete 9-Step Flow)
const SNACK_ID = 'eJbez6yj2B7fggIVKex4q';

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
  Ux4gAadhaarInputField,
  Ux4gOtpInput,
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
} from 'ux4g-react-native-components';
import NationalEmblem from './NationalEmblem';

// ─── UNION LOGO (Union.svg UX4G Logo) ───
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
    title: 'Identity & eKYC',
    subtitle: 'Authenticate against the register the government already holds, then confirm what it returned.',
  },
  2: {
    title: 'Trip details',
    subtitle: 'When the trip runs, where it goes, and whether there is room on those dates.',
  },
  3: {
    title: 'Purpose & Schedule of Visit',
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

const ZONE_OPTIONS = [
  { id: 'changthang', label: 'Changthang Wildlife Sanctuary & Pangong Tso Belt' },
  { id: 'nubra', label: 'Nubra Valley & Siachen Base Camp Route' },
  { id: 'tawang', label: 'Tawang & Bum La Border Circuit' },
  { id: 'nathula', label: 'Nathu La Pass & Gurudongmar Lake Zone' },
  { id: 'dzongu', label: 'Dzongu Tribal & Forest Reserve' },
];

const CHECKPOST_OPTIONS = [
  { id: 'tsaga_la', label: 'Tsaga La / Chushul Border Outpost' },
  { id: 'khardung_la', label: 'Khardung La Northern Checkpost' },
  { id: 'bhalukpong', label: 'Bhalukpong Inter-State Gate' },
  { id: 'rangpo', label: 'Rangpo Entry Check Barrier' },
];

const PURPOSE_OPTIONS = [
  { id: 'tourism', label: 'Tourism & Sightseeing' },
  { id: 'photography', label: 'Cultural & Landscape Photography' },
  { id: 'trekking', label: 'High-Altitude Trekking & Expedition' },
  { id: 'official', label: 'Government / Official Work' },
  { id: 'research', label: 'Ecological & Flora-Fauna Research' },
];

const TRIP_PURPOSE_OPTIONS = [
  { id: 'tourist', label: 'Tourist' },
  { id: 'pilgrimage', label: 'Pilgrimage' },
  { id: 'trekking', label: 'Trekking & Mountaineering' },
  { id: 'official', label: 'Government / Official Work' },
  { id: 'research', label: 'Ecological & Flora-Fauna Research' },
];

const AVAILABLE_DESTINATIONS = [
  'Yamunotri',
  'Gangotri',
  'Kedarnath',
  'Badrinath',
  'Hemkund Sahib',
  'Valley of Flowers',
  'Gaumukh Tapovan',
  'Tungnath & Chandrashila',
];

const parseDate = (str) => {
  if (!str) return undefined;
  const clean = String(str).replace(/\s+/g, '');
  const parts = clean.split('/');
  if (parts.length === 3) {
    const d = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10) - 1;
    const y = parseInt(parts[2], 10);
    const date = new Date(y, m, d);
    return isNaN(date.getTime()) ? undefined : date;
  }
  return undefined;
};

const formatDate = (date) => {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) return '';
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const y = String(date.getFullYear());
  return d + ' / ' + m + ' / ' + y;
};

export default function App() {
  const [step, setStep] = useState(2);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [savedTime, setSavedTime] = useState('3:14 PM');
  const [toastMessage, setToastMessage] = useState(null);
  const [errors, setErrors] = useState({});
  const [destModalMode, setDestModalMode] = useState(null);
  const [editingDestId, setEditingDestId] = useState(null);
  const [destModalName, setDestModalName] = useState('');
  const [destModalDate, setDestModalDate] = useState('');

  // Full 9-Step Application State
  const [formData, setFormData] = useState({
    // Step 1: Aadhaar Verification & eKYC (Initialized to unverified state to demonstrate full validation checks)
    aadhaarNumber: '',
    consentAadhaar: false,
    otp: '',
    
    // Details Fetched from Aadhaar (Rendered into official read-only summary boxes)
    fullName: 'Rajeev chauhan',
    dob: '07 / 09 / 1995',
    gender: 'Male',
    permanentAddress: 'B-32, Sector 62',
    city: 'Noida',
    district: 'Gautam Buddha Nagar',
    state: 'Uttar Pradesh',
    pincode: '201309',

    // Other Details
    mobileNumber: '',
    isWhatsAppSame: false,
    email: '',
    nationality: '', // 'indian' | 'foreign'
    permitRequiredFor: '', // 'myself' | 'family' | 'clients'

    // Step 2: Trip Details & Destinations
    tripStartDate: '',
    tripEndDate: '',
    tripPurpose: 'tourist',
    destinations: [
      { id: '1', name: 'Yamunotri', date: '25 / 09 / 2026' },
      { id: '2', name: 'Gangotri', date: '26 / 09 / 2026' },
      { id: '3', name: 'Kedarnath', date: '28 / 09 / 2026' },
    ],
    numTravellers: '2',

    // Legacy Fallback for downstream steps
    permitType: 'ilp',
    selectedZone: 'changthang',
    selectedCheckpost: 'tsaga_la',

    // Step 3: Purpose & Schedule of Visit
    visitPurpose: 'tourism',
    startDate: '12/10/2026',
    endDate: '18/10/2026',
    durationDays: '7 days',
    vehicleNumber: 'DL 01 AB 4402',
    driverName: 'Sanjay Rawat',

    // Step 4: Accompanying Persons
    hasMembers: false,
    members: [
      { id: '1', name: 'Sunita Chauhan', age: '29', relation: 'spouse' }
    ],

    // Step 5: Local Guide & Stay
    guideName: 'Tenzing Dorjee',
    guideLicense: 'LG-LDK-2024-0041',
    guidePhone: '9419123456',
    accommodationName: 'Pangong Eco Lake Camp, Spangmik',
    accommodationBookingRef: 'BK-LDK-88412',

    // Step 6: Documents & Evidence
    idProofUploaded: true,
    idProofFileName: 'Rajeev_Aadhaar_Card_Verified.pdf',
    itineraryUploaded: true,
    itineraryFileName: '7Day_Changthang_Pangong_Route_Plan.pdf',
    vehicleRcUploaded: true,
    vehicleRcFileName: 'DL01AB4402_Registration_Certificate.pdf',

    // Step 7: Security & Environmental Undertakings
    undertakingSecurity: true,
    undertakingZeroWaste: true,
    undertakingOriginalId: true,

    // Step 8 & 9: Final Declaration & Submission
    declarationAccuracy: false,
    permitNumber: 'EAP-2026-009418',
    isSubmitted: false,
  });

  const scrollRef = useRef(null);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const cleanAadhaar = (formData.aadhaarNumber || '').replace(/[^0-9]/g, '');
  const isAadhaarValid = cleanAadhaar.length === 12 && !cleanAadhaar.startsWith('0') && !cleanAadhaar.startsWith('1');

  const updateField = (key, value) => {
    setFormData((prev) => {
      const next = { ...prev, [key]: value };
      if (key === 'startDate' || key === 'endDate') {
        if (next.startDate && next.endDate) {
          next.durationDays = '7 days';
        }
      }
      if (key === 'aadhaarNumber') {
        const digits = String(value).replace(/[^0-9]/g, '');
        if (digits.length === 12 && !digits.startsWith('0') && !digits.startsWith('1')) {
          triggerToast('12-digit Aadhaar verified. OTP section activated.');
        }
      }
      if (key === 'otp' && String(value).length === 6) {
        triggerToast('Aadhaar OTP authenticated successfully');
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

  // Quick fill helper for testing validation and complete flow
  const handleQuickFillStep1 = () => {
    setFormData((prev) => ({
      ...prev,
      aadhaarNumber: '9845 2014 6612',
      consentAadhaar: true,
      otp: '123456',
      mobileNumber: '9999999999',
      email: 'abc@gmail.com',
      nationality: 'indian',
      permitRequiredFor: 'myself',
    }));
    setErrors({});
    triggerToast('Sample data filled for Step 1');
  };

  // Step 1 Validation Check - Comprehensive checks for all fields
  const handleContinueStep1 = () => {
    const errs = {};
    if (!cleanAadhaar) {
      errs.aadhaarNumber = 'Please enter your 12-digit Aadhaar number';
    } else if (cleanAadhaar.length < 12) {
      errs.aadhaarNumber = 'Aadhaar number must contain 12 digits (entered ' + cleanAadhaar.length + ' of 12)';
    } else if (cleanAadhaar.startsWith('0') || cleanAadhaar.startsWith('1')) {
      errs.aadhaarNumber = 'Aadhaar number cannot start with 0 or 1';
    }

    if (!formData.consentAadhaar) {
      errs.consentAadhaar = 'Aadhaar authentication consent is required to proceed';
    }

    // Only validate OTP if valid Aadhaar has been entered
    if (isAadhaarValid) {
      const cleanOtp = (formData.otp || '').replace(/[^0-9]/g, '');
      if (!cleanOtp) {
        errs.otp = 'Please enter the 6-digit OTP received on mobile';
      } else if (cleanOtp.length < 6) {
        errs.otp = 'Please enter complete 6-digit OTP (entered ' + cleanOtp.length + ' of 6)';
      }
    } else {
      errs.aadhaarNumber = errs.aadhaarNumber || 'Please enter valid 12-digit Aadhaar before OTP verification';
    }

    const cleanMobile = (formData.mobileNumber || '').trim().replace(/[^0-9]/g, '');
    if (!cleanMobile) {
      errs.mobileNumber = 'Mobile number is required';
    } else if (cleanMobile.length !== 10 || !['6', '7', '8', '9'].includes(cleanMobile[0])) {
      errs.mobileNumber = 'Enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9';
    }

    if (formData.email && formData.email.trim()) {
      const emailStr = formData.email.trim();
      const atIdx = emailStr.indexOf('@');
      const dotIdx = emailStr.lastIndexOf('.');
      if (atIdx < 1 || dotIdx <= atIdx + 1 || dotIdx === emailStr.length - 1) {
        errs.email = 'Please enter a valid email address (e.g. name@domain.com)';
      }
    }

    if (!formData.nationality) {
      errs.nationality = 'Please select your nationality';
    }

    if (!formData.permitRequiredFor) {
      errs.permitRequiredFor = 'Please select whom the permit is required for';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstError = Object.values(errs)[0];
      triggerToast(firstError);
      scrollRef.current?.scrollTo({ y: 0, animated: true });
      return;
    }

    setErrors({});
    setStep(2);
    scrollRef.current?.scrollTo({ y: 0, animated: true });
    triggerToast('Identity & eKYC verified successfully. Proceeding to Step 2.');
  };

  // Quick fill helper for Step 2
  const handleQuickFillStep2 = () => {
    setFormData((prev) => ({
      ...prev,
      tripStartDate: '24 / 09 / 2026',
      tripEndDate: '30 / 09 / 2026',
      tripPurpose: 'tourist',
      destinations: [
        { id: '1', name: 'Yamunotri', date: '25 / 09 / 2026' },
        { id: '2', name: 'Gangotri', date: '26 / 09 / 2026' },
        { id: '3', name: 'Kedarnath', date: '28 / 09 / 2026' },
      ],
      numTravellers: '2',
    }));
    setErrors({});
    triggerToast('Sample data filled for Step 2');
  };

  const handleDeleteDestination = (id) => {
    if (formData.destinations.length <= 1) {
      triggerToast('At least one destination is required for the permit');
      return;
    }
    const target = formData.destinations.find((d) => d.id === id);
    setFormData((prev) => ({
      ...prev,
      destinations: prev.destinations.filter((d) => d.id !== id),
    }));
    triggerToast('Removed ' + (target ? target.name : 'destination'));
  };

  const handleOpenAddDestModal = () => {
    setDestModalMode('add');
    setEditingDestId(null);
    setDestModalName('Badrinath');
    setDestModalDate('29 / 09 / 2026');
  };

  const handleOpenEditDestModal = (item) => {
    setDestModalMode('edit');
    setEditingDestId(item.id);
    setDestModalName(item.name);
    setDestModalDate(item.date || '');
  };

  const handleSaveDestModal = () => {
    if (!destModalName.trim()) {
      triggerToast('Please enter destination name');
      return;
    }
    if (destModalMode === 'add') {
      const newDest = {
        id: String(Date.now()),
        name: destModalName.trim(),
        date: destModalDate.trim() || '29 / 09 / 2026',
      };
      setFormData((prev) => ({
        ...prev,
        destinations: [...prev.destinations, newDest],
      }));
      triggerToast('Added ' + newDest.name + ' to itinerary');
    } else if (destModalMode === 'edit' && editingDestId) {
      setFormData((prev) => ({
        ...prev,
        destinations: prev.destinations.map((d) =>
          d.id === editingDestId
            ? { ...d, name: destModalName.trim(), date: destModalDate.trim() || d.date }
            : d
        ),
      }));
      triggerToast('Updated destination details');
    }
    setDestModalMode(null);
  };

  const handleCheckAvailability = () => {
    const count = formData.numTravellers || '2';
    triggerToast('Slots available: Quota open for ' + count + ' travellers across selected circuits');
  };

  // Step 2 Validation Check
  const handleContinueStep2 = () => {
    const errs = {};
    if (!formData.tripStartDate) {
      errs.tripStartDate = 'Please select trip start date';
    }
    if (!formData.tripEndDate) {
      errs.tripEndDate = 'Please select trip end date';
    }
    if (!formData.tripPurpose) {
      errs.tripPurpose = 'Please select purpose of visit';
    }
    if (!formData.destinations || formData.destinations.length === 0) {
      errs.destinations = 'At least one destination is required';
    } else {
      const missingDate = formData.destinations.find((d) => !d.date || !d.date.trim());
      if (missingDate) {
        errs.destinations = 'Please select date of visit for ' + missingDate.name;
      }
    }
    const cleanNum = parseInt(formData.numTravellers, 10);
    if (!formData.numTravellers || isNaN(cleanNum) || cleanNum < 1) {
      errs.numTravellers = 'Please enter a valid number of travellers (at least 1)';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstError = Object.values(errs)[0];
      triggerToast(firstError);
      scrollRef.current?.scrollTo({ y: 0, animated: true });
      return;
    }

    setErrors({});
    setStep(3);
    scrollRef.current?.scrollTo({ y: 0, animated: true });
    triggerToast('Trip details saved successfully. Proceeding to Step 3.');
  };

  // Step 3 Validation Check
  const handleContinueStep3 = () => {
    const errs = {};
    if (!formData.visitPurpose) {
      errs.visitPurpose = 'Please select purpose of visit';
    }
    if (!formData.startDate) {
      errs.startDate = 'Entry date is required';
    }
    if (!formData.endDate) {
      errs.endDate = 'Exit date is required';
    }
    if (!formData.vehicleNumber.trim()) {
      errs.vehicleNumber = 'Vehicle registration number is required';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      triggerToast('Please complete visit dates and vehicle details');
      return;
    }

    setErrors({});
    setStep(4);
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  // Step 4 Validation Check
  const handleContinueStep4 = () => {
    setErrors({});
    setStep(5);
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  // Step 5 Validation Check
  const handleContinueStep5 = () => {
    const errs = {};
    if (!formData.guideName.trim()) {
      errs.guideName = 'Local certified guide name is required';
    }
    if (!formData.accommodationName.trim()) {
      errs.accommodationName = 'Hotel or basecamp booking name is required';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      triggerToast('Please provide guide and accommodation details');
      return;
    }

    setErrors({});
    setStep(6);
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  // Step 6 Validation Check
  const handleContinueStep6 = () => {
    const errs = {};
    if (!formData.idProofUploaded) {
      errs.idProofUploaded = 'Please attach government photo ID';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      triggerToast('Please upload required identity documents');
      return;
    }

    setErrors({});
    setStep(7);
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  // Step 7 Validation Check
  const handleContinueStep7 = () => {
    const errs = {};
    if (!formData.undertakingSecurity) {
      errs.undertakingSecurity = 'Border security protocol undertaking is required';
    }
    if (!formData.undertakingZeroWaste) {
      errs.undertakingZeroWaste = 'Zero waste policy agreement is required';
    }
    if (!formData.undertakingOriginalId) {
      errs.undertakingOriginalId = 'Physical ID verification undertaking is required';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      triggerToast('Please accept all security undertakings');
      return;
    }

    setErrors({});
    setStep(8);
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  // Step 8 Validation Check & Final Permit Generation
  const handleContinueStep8 = () => {
    const errs = {};
    if (!formData.declarationAccuracy) {
      errs.declarationAccuracy = 'Please accept the declaration before submitting';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      triggerToast('Please confirm your declaration to submit');
      return;
    }

    setErrors({});
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const newPermitNum = 'EAP-2026-' + randomSuffix;
    setFormData((prev) => ({
      ...prev,
      isSubmitted: true,
      permitNumber: newPermitNum,
    }));
    setStep(9);
    triggerToast('Entry & Area Permit successfully issued! ID: ' + newPermitNum);
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  const handleContinue = () => {
    if (step === 1) handleContinueStep1();
    else if (step === 2) handleContinueStep2();
    else if (step === 3) handleContinueStep3();
    else if (step === 4) handleContinueStep4();
    else if (step === 5) handleContinueStep5();
    else if (step === 6) handleContinueStep6();
    else if (step === 7) handleContinueStep7();
    else if (step === 8) handleContinueStep8();
    else if (step === 9) {
      triggerToast('Permit ' + formData.permitNumber + ' is active. Returning to step 1.');
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

        {/* ─── SAVED STATUS BANNER (USING UX4GSTATUSBANNER) ─── */}
        {step < 9 && (
          <View style={{ paddingHorizontal: 16, paddingTop: 10, paddingBottom: 2 }}>
            <Ux4gStatusBanner
              variant="successLight"
              title=""
              leadingIcon={<View />}
              trailingIcon={
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
                    <Circle cx="12" cy="12" r="9.5" stroke={UX4GColors.green} strokeWidth="1.8" />
                    <Path
                      d="M8.5 12.2L10.8 14.5L15.8 9.5"
                      stroke={UX4GColors.green}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                  <Text style={{ fontSize: 12.5, fontWeight: '600', color: UX4GColors.green800 }}>
                    {'Saved ' + savedTime}
                  </Text>
                </View>
              }
              contentAlignment="right"
              backgroundColor="#f2fcef"
              borderColor="transparent"
              height={36}
              marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
              containerStyle={{
                borderRadius: 8,
                elevation: 0,
                shadowOpacity: 0,
                justifyContent: 'center',
              }}
              paddingStyle={{ paddingVertical: 2, paddingHorizontal: 14 }}
            />
          </View>
        )}

        {/* ─── 9-SEGMENT STEPPER PROGRESS ─── */}
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

        {/* ─── MAIN SCROLLABLE FORM BODY ─── */}
        <ScrollView
          ref={scrollRef}
          style={styles.mainScrollView}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 1: IDENTITY & eKYC (USING OFFICIAL UX4G COMPONENTS)                   */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 1 && (
            <View style={styles.formContainer}>
              {/* SECTION 1: Aadhaar Verification */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <Text style={styles.sectionHeading}>Aadhaar Verification</Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={handleQuickFillStep1}
                  style={{
                    paddingVertical: 4,
                    paddingHorizontal: 10,
                    borderRadius: 14,
                    backgroundColor: UX4GColors.primary50,
                    borderWidth: 1,
                    borderColor: UX4GColors.primary200,
                  }}
                >
                  <Text style={{ fontSize: 11.5, fontWeight: '600', color: UX4GColors.primary }}>
                    Fill sample data
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Official UX4G Aadhaar Input Component */}
              <View style={styles.fieldGroup}>
                <Ux4gAadhaarInputField
                  label="Aadhaar or VID number"
                  required
                  value={formData.aadhaarNumber}
                  onValueChange={(val) => updateField('aadhaarNumber', val)}
                  placeholder="xxxx xxxx xxxx"
                  showMaskToggle={true}
                  defaultMasked={true}
                  status={errors.aadhaarNumber ? 'error' : 'defaultStatus'}
                  caption={
                    errors.aadhaarNumber ||
                    '12-digit Aadhaar or 16-digit VID. Masked as you type — the number is never shown in full again.'
                  }
                  size="large"
                />
              </View>

              {/* Official UX4G Checkbox for Aadhaar Consent */}
              <View style={{ marginTop: 2, marginBottom: 8 }}>
                <Ux4gCheckbox
                  label="I consent to Aadhaar authentication and eKYC"
                  isRequired
                  value={formData.consentAadhaar}
                  onChanged={(val) => updateField('consentAadhaar', !!val)}
                  hasError={!!errors.consentAadhaar}
                  description={errors.consentAadhaar}
                  descriptionVariant="error"
                  size="medium"
                />
              </View>

              {/* Official UX4G 6-Digit OTP Input Component (Only displayed when valid 12-digit Aadhaar is entered) */}
              {isAadhaarValid && (
                <View style={[styles.fieldGroup, { marginTop: 14 }]}>
                  <Ux4gOtpInput
                    label="One-time password"
                    required
                    length={6}
                    value={formData.otp}
                    onChanged={(val) => updateField('otp', val)}
                    status={errors.otp ? 'error' : (formData.otp && formData.otp.length === 6) ? 'success' : 'defaultStatus'}
                    captionVariant="resendTimer"
                    autoCountdownSeconds={17}
                    captionLeadingText="Didn't receive OTP?"
                    captionTrailingText="Resend in"
                    onCaptionTrailingTap={() => triggerToast('New OTP sent to registered mobile: +91 ' + (formData.mobileNumber || '9999999999'))}
                  />
                  {errors.otp && (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
                      <Text style={{ fontSize: 12, color: UX4GColors.red600, fontWeight: '500' }}>
                        {errors.otp}
                      </Text>
                    </View>
                  )}
                </View>
              )}

              {/* Informational Callout Banner (No Aadhaar counter service - Using Ux4gStatusBanner) */}
              <Ux4gStatusBanner
                variant="infoLight"
                title="No Aadhaar? You can still apply in person."
                titleStyle={{
                  fontSize: 13,
                  fontWeight: '700',
                  color: '#002329',
                  lineHeight: 18,
                  includeFontPadding: false,
                }}
                leadingIcon={
                  <View
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: 8,
                      backgroundColor: '#13c2c2',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: -6,
                      marginTop: 1,
                    }}
                  >
                    <Text
                      style={{
                        color: '#ffffff',
                        fontSize: 10.5,
                        fontWeight: '700',
                        fontStyle: 'italic',
                        lineHeight: 12,
                        includeFontPadding: false,
                      }}
                    >
                      i
                    </Text>
                  </View>
                }
                subtitleWidget={
                  <Text style={{ fontSize: 12, lineHeight: 17, color: '#475569', marginTop: 2 }}>
                    {'Named counters are listed on the service page — you do not need an Aadhaar number to obtain this permit. '}
                    <Text
                      style={{ color: '#08979c', fontWeight: '600' }}
                      onPress={() => triggerToast('Opening list of local district administrative counters')}
                    >
                      See the list of counters
                    </Text>
                  </Text>
                }
                paddingStyle={{ paddingHorizontal: 12, paddingVertical: 10 }}
                marginStyle={{ marginHorizontal: 0, marginVertical: 14 }}
                containerStyle={{
                  backgroundColor: '#e6fffb',
                  borderColor: '#87e8de',
                  borderWidth: 1,
                  borderRadius: 6,
                  elevation: 0,
                  shadowOpacity: 0,
                }}
              />

              {/* SECTION 2: Details Fetched from Aadhaar */}
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 28, marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                <Text style={styles.sectionHeading}>Details Fetched from Aadhaar</Text>
                {formData.otp && formData.otp.length === 6 && (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: '#F0FDF4',
                      paddingHorizontal: 8,
                      paddingVertical: 3,
                      borderRadius: 12,
                      borderWidth: 1,
                      borderColor: '#BBF7D0',
                      gap: 4,
                    }}
                  >
                    <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                      <Circle cx={12} cy={12} r={10} stroke="#16A34A" strokeWidth={2.2} />
                      <Path d="M8 12l2.5 2.5L16 9" stroke="#16A34A" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
                    </Svg>
                    <Text style={{ fontSize: 11, fontWeight: '600', color: '#166534' }}>Verified via eKYC</Text>
                  </View>
                )}
              </View>

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

              {/* Mobile Number with Official Ux4gInputField */}
              <View style={styles.fieldGroup}>
                <Ux4gInputField
                  label="Mobile number"
                  required
                  value={formData.mobileNumber}
                  onValueChange={(val) => updateField('mobileNumber', val.replace(/[^0-9]/g, ''))}
                  placeholder="9999999999"
                  type="number"
                  maxLength={10}
                  size="large"
                  status={errors.mobileNumber ? 'error' : 'defaultStatus'}
                  caption={errors.mobileNumber}
                  leadingIcon={
                    <Text style={{ fontSize: 13.5, fontWeight: '700', color: UX4GColors.neutral700, marginRight: 4 }}>
                      +91
                    </Text>
                  }
                />
              </View>

              {/* WhatsApp Checkbox with Official Ux4gCheckbox */}
              <View style={{ marginTop: 2, marginBottom: 12 }}>
                <Ux4gCheckbox
                  label="This is also my WhatsApp number"
                  value={formData.isWhatsAppSame}
                  onChanged={(val) => updateField('isWhatsAppSame', !!val)}
                  size="medium"
                />
              </View>

              {/* Email with Official Ux4gInputField */}
              <View style={styles.fieldGroup}>
                <Ux4gInputField
                  label="Email"
                  value={formData.email}
                  onValueChange={(val) => updateField('email', val)}
                  placeholder="abc@gmail.com"
                  size="large"
                  status={errors.email ? 'error' : 'defaultStatus'}
                  caption={errors.email}
                />
              </View>

              {/* Nationality with Official Ux4gRadioButton */}
              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>
                  Nationality<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <View style={styles.radioOptionGroup}>
                  <Ux4gRadioButton
                    label="Indian citizen"
                    value="indian"
                    groupValue={formData.nationality}
                    onChanged={(val) => updateField('nationality', val)}
                    size="medium"
                  />
                  <View style={{ height: 8 }} />
                  <Ux4gRadioButton
                    label="Foreign national"
                    value="foreign"
                    groupValue={formData.nationality}
                    onChanged={(val) => updateField('nationality', val)}
                    size="medium"
                  />
                </View>
                {errors.nationality && (
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
                    <Text style={{ fontSize: 12, color: UX4GColors.red600, fontWeight: '500' }}>
                      {errors.nationality}
                    </Text>
                  </View>
                )}
              </View>

              {/* Permit Required For with Official Ux4gRadioButton */}
              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>
                  Permit Required For<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <View style={styles.radioOptionGroup}>
                  <Ux4gRadioButton
                    label="Myself"
                    value="myself"
                    groupValue={formData.permitRequiredFor}
                    onChanged={(val) => updateField('permitRequiredFor', val)}
                    size="medium"
                  />
                  <View style={{ height: 8 }} />
                  <Ux4gRadioButton
                    label="Myself and my family"
                    value="family"
                    groupValue={formData.permitRequiredFor}
                    onChanged={(val) => updateField('permitRequiredFor', val)}
                    size="medium"
                  />
                  <View style={{ height: 8 }} />
                  <Ux4gRadioButton
                    label="Clients travelling with me, as an agent"
                    value="clients"
                    groupValue={formData.permitRequiredFor}
                    onChanged={(val) => updateField('permitRequiredFor', val)}
                    size="medium"
                  />
                </View>
                {errors.permitRequiredFor && (
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
                    <Text style={{ fontSize: 12, color: UX4GColors.red600, fontWeight: '500' }}>
                      {errors.permitRequiredFor}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          )}

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 2: TRIP DETAILS (EXACT MATCH TO DESIGN)                                */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 2 && (
            <View style={styles.formContainer}>
              {/* Top Row: Section Heading & Quick Fill */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <Text style={styles.sectionHeading}>Travel Dates</Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={handleQuickFillStep2}
                  style={{
                    paddingVertical: 4,
                    paddingHorizontal: 10,
                    borderRadius: 14,
                    backgroundColor: UX4GColors.primary50,
                    borderWidth: 1,
                    borderColor: UX4GColors.primary200,
                  }}
                >
                  <Text style={{ fontSize: 11.5, fontWeight: '600', color: UX4GColors.primary }}>
                    Fill sample data
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Trip start date* */}
              <View style={styles.fieldGroup}>
                <Ux4gDatePicker
                  label="Trip start date"
                  required
                  placeholder="Select date"
                  initialDate={parseDate(formData.tripStartDate)}
                  onDateSelected={(date) => updateField('tripStartDate', formatDate(date))}
                />
                {errors.tripStartDate ? (
                  <Text style={styles.errorText}>{errors.tripStartDate}</Text>
                ) : null}
              </View>

              {/* Trip end date* */}
              <View style={styles.fieldGroup}>
                <Ux4gDatePicker
                  label="Trip end date"
                  required
                  placeholder="Select date"
                  initialDate={parseDate(formData.tripEndDate)}
                  onDateSelected={(date) => updateField('tripEndDate', formatDate(date))}
                />
                {errors.tripEndDate ? (
                  <Text style={styles.errorText}>{errors.tripEndDate}</Text>
                ) : null}
              </View>

              {/* Purpose of visit* */}
              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>
                  Purpose of visit<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <Ux4gSelectionDropdown
                  placeholder="Select purpose of visit"
                  options={TRIP_PURPOSE_OPTIONS}
                  selectedOptionIds={formData.tripPurpose ? [formData.tripPurpose] : ['tourist']}
                  onSelectionChange={(selected) => updateField('tripPurpose', selected[0] || 'tourist')}
                  size="l"
                  status={errors.tripPurpose ? 'error' : 'defaultStatus'}
                  description={errors.tripPurpose}
                />
              </View>

              {/* Section 2: Destination and Dates* */}
              <View style={{ marginTop: 24, marginBottom: 12 }}>
                <Text style={styles.sectionHeading}>
                  Destination and Dates<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                {errors.destinations ? (
                  <Text style={[styles.errorText, { marginBottom: 8 }]}>{errors.destinations}</Text>
                ) : null}
              </View>

              {/* Destination Cards */}
              {formData.destinations.map((item) => (
                <View key={item.id} style={styles.destinationCard}>
                  <View style={styles.destinationCardHeader}>
                    <Text style={styles.destinationName}>{item.name}</Text>
                    <View style={styles.cardActionsRow}>
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => handleOpenEditDestModal(item)}
                        style={styles.cardActionBtn}
                      >
                        <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                          <Path
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                            stroke={UX4GColors.neutral700}
                            strokeWidth={1.8}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </Svg>
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => handleDeleteDestination(item.id)}
                        style={styles.cardActionBtn}
                      >
                        <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                          <Path
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            stroke={UX4GColors.primary}
                            strokeWidth={1.8}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </Svg>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <Ux4gDatePicker
                    label="Date of visit"
                    placeholder="Select date"
                    initialDate={parseDate(item.date)}
                    onDateSelected={(date) => {
                      const formatted = formatDate(date);
                      setFormData((prev) => ({
                        ...prev,
                        destinations: prev.destinations.map((d) =>
                          d.id === item.id ? { ...d, date: formatted } : d
                        ),
                      }));
                    }}
                  />
                </View>
              ))}

              {/* Button: Add destination */}
              <TouchableOpacity
                style={styles.addDestinationBtn}
                activeOpacity={0.8}
                onPress={handleOpenAddDestModal}
              >
                <Text style={styles.addDestinationBtnText}>Add destination</Text>
              </TouchableOpacity>

              {/* Button: Check availability */}
              <TouchableOpacity
                style={styles.checkAvailabilityBtn}
                activeOpacity={0.8}
                onPress={handleCheckAvailability}
              >
                <Text style={styles.checkAvailabilityBtnText}>Check availability</Text>
              </TouchableOpacity>

              {/* Section 3: Number of Travellers */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Number of Travellers</Text>
              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>
                  Number of travellers<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[
                    styles.singleLineInput,
                    errors.numTravellers && styles.singleLineInputError,
                  ]}
                  value={formData.numTravellers}
                  onChangeText={(val) => updateField('numTravellers', val.replace(/[^0-9]/g, ''))}
                  placeholder="2"
                  placeholderTextColor={UX4GColors.neutral400}
                  keyboardType="numeric"
                />
                {errors.numTravellers ? (
                  <Text style={styles.errorText}>{errors.numTravellers}</Text>
                ) : null}
              </View>
            </View>
          )}

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 3: PURPOSE & SCHEDULE OF VISIT                                       */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 3 && (
            <View style={styles.formContainer}>
              <Text style={styles.sectionHeading}>Purpose & Schedule</Text>

              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>
                  Purpose of Visit<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <Ux4gSelectionDropdown
                  placeholder="Select purpose of entry"
                  options={PURPOSE_OPTIONS}
                  selectedOptionIds={formData.visitPurpose ? [formData.visitPurpose] : []}
                  onSelectionChange={(selected) => updateField('visitPurpose', selected[0] || '')}
                  size="l"
                  status={errors.visitPurpose ? 'error' : 'defaultStatus'}
                  description={errors.visitPurpose}
                />
              </View>

              <View style={styles.fieldGroup}>
                <Ux4gDatePicker
                  label="Entry Date"
                  required
                  placeholder="Select entry date"
                  onDateSelected={(d) => updateField('startDate', d ? d.toLocaleDateString('en-GB') : '')}
                  status={errors.startDate ? 'error' : 'defaultStatus'}
                  description={errors.startDate}
                />
              </View>

              <View style={styles.fieldGroup}>
                <Ux4gDatePicker
                  label="Exit Date"
                  required
                  placeholder="Select exit date"
                  onDateSelected={(d) => updateField('endDate', d ? d.toLocaleDateString('en-GB') : '')}
                  status={errors.endDate ? 'error' : 'defaultStatus'}
                  description={errors.endDate}
                />
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>Permit Duration</Text>
                <View style={styles.readOnlyBox}>
                  <Text style={styles.readOnlyValue}>{formData.durationDays}</Text>
                </View>
              </View>

              <View style={styles.fieldGroup}>
                <Ux4gInputField
                  label="Vehicle Registration Number"
                  required
                  placeholder="e.g. DL 01 AB 4402"
                  value={formData.vehicleNumber}
                  onValueChange={(val) => updateField('vehicleNumber', val)}
                  size="large"
                  status={errors.vehicleNumber ? 'error' : 'defaultStatus'}
                  caption={errors.vehicleNumber}
                />
              </View>
            </View>
          )}

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 4: ACCOMPANYING PERSONS                                              */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 4 && (
            <View style={styles.formContainer}>
              <Text style={styles.sectionHeading}>Accompanying Persons</Text>
              <Text style={styles.stepSubtitleText}>
                Primary applicant and co-travelers included under this entry permit.
              </Text>

              {/* Primary Applicant Card */}
              <View style={[styles.reviewCardGreen, { marginTop: 14 }]}>
                <View style={styles.reviewCardHeader}>
                  <Text style={styles.reviewCardTitleGreen}>1. {formData.fullName} (Primary Applicant)</Text>
                  <Text style={{ fontSize: 12, fontWeight: '700', color: UX4GColors.green800 }}>SELF</Text>
                </View>
                <Text style={styles.reviewCardSubTextGreen}>
                  DOB: {formData.dob} · {formData.gender} · Aadhaar Verified
                </Text>
              </View>

              {/* Accompanying Member Card */}
              {formData.members.map((m, idx) => (
                <View key={m.id} style={[styles.reviewCardGreen, { marginTop: 10 }]}>
                  <View style={styles.reviewCardHeader}>
                    <Text style={styles.reviewCardTitleGreen}>{idx + 2}. {m.name}</Text>
                    <Text style={{ fontSize: 12, fontWeight: '600', color: UX4GColors.neutral700 }}>
                      {m.relation.toUpperCase()}
                    </Text>
                  </View>
                  <Text style={styles.reviewCardSubTextGreen}>
                    Age: {m.age} years · Co-traveler
                  </Text>
                </View>
              ))}

              <TouchableOpacity
                style={styles.addMemberBtn}
                activeOpacity={0.7}
                onPress={() => triggerToast('Opening member registration form')}
              >
                <Text style={styles.addMemberBtnText}>+ Add Accompanying Member</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 5: LOCAL GUIDE & STAY                                                */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 5 && (
            <View style={styles.formContainer}>
              <Text style={styles.sectionHeading}>Certified Guide & Stay Details</Text>

              <View style={styles.fieldGroup}>
                <Ux4gInputField
                  label="Registered Regional Guide Name"
                  required
                  placeholder="e.g. Tenzing Dorjee"
                  value={formData.guideName}
                  onValueChange={(val) => updateField('guideName', val)}
                  size="large"
                  status={errors.guideName ? 'error' : 'defaultStatus'}
                  caption={errors.guideName}
                />
              </View>

              <View style={styles.fieldGroup}>
                <Ux4gInputField
                  label="Guide Government License Number"
                  placeholder="e.g. LG-LDK-2024-0041"
                  value={formData.guideLicense}
                  onValueChange={(val) => updateField('guideLicense', val)}
                  size="large"
                />
              </View>

              <View style={styles.fieldGroup}>
                <Ux4gInputField
                  label="Accommodation / Basecamp Name"
                  required
                  placeholder="e.g. Pangong Eco Camp, Spangmik"
                  value={formData.accommodationName}
                  onValueChange={(val) => updateField('accommodationName', val)}
                  size="large"
                  status={errors.accommodationName ? 'error' : 'defaultStatus'}
                  caption={errors.accommodationName}
                />
              </View>

              <View style={styles.fieldGroup}>
                <Ux4gInputField
                  label="Stay Booking Reference / Receipt"
                  placeholder="e.g. BK-LDK-88412"
                  value={formData.accommodationBookingRef}
                  onValueChange={(val) => updateField('accommodationBookingRef', val)}
                  size="large"
                />
              </View>
            </View>
          )}

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 6: DOCUMENTS & EVIDENCE                                              */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 6 && (
            <View style={styles.formContainer}>
              <Text style={styles.sectionHeading}>Documents & Evidence</Text>

              {/* ID Document Card */}
              <View style={styles.docItemCard}>
                <View style={styles.docHeaderRow}>
                  <View style={styles.docIconCircleGreen}>
                    <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                      <Path d="M5 13l4 4L19 7" stroke={UX4GColors.white} strokeWidth={3} strokeLinecap="round" />
                    </Svg>
                  </View>
                  <Text style={styles.docItemTitle}>Government Photo ID Proof*</Text>
                </View>
                <Text style={styles.docSubText}>{formData.idProofFileName}</Text>
                <Ux4gButton
                  text="Replace Document"
                  variant="outline"
                  size="small"
                  borderRadius={6}
                  onPress={() => triggerToast('Identity document updated')}
                />
              </View>

              {/* Itinerary Card */}
              <View style={[styles.docItemCard, { marginTop: 12 }]}>
                <View style={styles.docHeaderRow}>
                  <View style={styles.docIconCircleGreen}>
                    <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                      <Path d="M5 13l4 4L19 7" stroke={UX4GColors.white} strokeWidth={3} strokeLinecap="round" />
                    </Svg>
                  </View>
                  <Text style={styles.docItemTitle}>Route Itinerary & Schedule*</Text>
                </View>
                <Text style={styles.docSubText}>{formData.itineraryFileName}</Text>
                <Ux4gButton
                  text="Replace Document"
                  variant="outline"
                  size="small"
                  borderRadius={6}
                  onPress={() => triggerToast('Route itinerary updated')}
                />
              </View>

              {/* Vehicle RC Card */}
              <View style={[styles.docItemCard, { marginTop: 12 }]}>
                <View style={styles.docHeaderRow}>
                  <View style={styles.docIconCircleGreen}>
                    <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                      <Path d="M5 13l4 4L19 7" stroke={UX4GColors.white} strokeWidth={3} strokeLinecap="round" />
                    </Svg>
                  </View>
                  <Text style={styles.docItemTitle}>Vehicle Registration Certificate (RC)*</Text>
                </View>
                <Text style={styles.docSubText}>{formData.vehicleRcFileName}</Text>
                <Ux4gButton
                  text="Replace Document"
                  variant="outline"
                  size="small"
                  borderRadius={6}
                  onPress={() => triggerToast('Vehicle RC document updated')}
                />
              </View>
            </View>
          )}

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 7: SECURITY & ENVIRONMENTAL UNDERTAKINGS                             */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 7 && (
            <View style={styles.formContainer}>
              <Text style={styles.sectionHeading}>Security & Environmental Undertakings</Text>
              <Text style={styles.stepSubtitleText}>
                Compliance with border security protocols and zero-waste ecological guidelines is statutory.
              </Text>

              <View style={{ marginTop: 16 }}>
                <Ux4gCheckbox
                  label="I undertake not to enter restricted defence zones, military outposts, or unpermitted border tracks."
                  isRequired
                  value={formData.undertakingSecurity}
                  onChanged={(val) => updateField('undertakingSecurity', !!val)}
                  size="medium"
                  hasError={!!errors.undertakingSecurity}
                  description={errors.undertakingSecurity}
                  descriptionVariant="error"
                />
              </View>

              <View style={{ marginTop: 16 }}>
                <Ux4gCheckbox
                  label="I will strictly adhere to the Zero Waste Policy and will not carry or discard single-use plastic in the protected sanctuary."
                  isRequired
                  value={formData.undertakingZeroWaste}
                  onChanged={(val) => updateField('undertakingZeroWaste', !!val)}
                  size="medium"
                  hasError={!!errors.undertakingZeroWaste}
                  description={errors.undertakingZeroWaste}
                  descriptionVariant="error"
                />
              </View>

              <View style={{ marginTop: 16 }}>
                <Ux4gCheckbox
                  label="I will carry my original entry permit and government photo ID card at all inspection checkposts."
                  isRequired
                  value={formData.undertakingOriginalId}
                  onChanged={(val) => updateField('undertakingOriginalId', !!val)}
                  size="medium"
                  hasError={!!errors.undertakingOriginalId}
                  description={errors.undertakingOriginalId}
                  descriptionVariant="error"
                />
              </View>
            </View>
          )}

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 8: REVIEW & DECLARATION                                              */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 8 && (
            <View style={styles.formContainer}>
              <Text style={styles.sectionHeading}>Preview Your Application</Text>

              {/* Card 1: Identity Summary */}
              <View style={styles.reviewCardGreen}>
                <View style={styles.reviewCardHeader}>
                  <View style={styles.reviewCardLeft}>
                    <View style={styles.reviewIconCircleGreen}>
                      <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                        <Path d="M5 13l4 4L19 7" stroke={UX4GColors.white} strokeWidth={3} strokeLinecap="round" />
                      </Svg>
                    </View>
                    <Text style={styles.reviewCardTitleGreen}>Step 1 · Identity & eKYC</Text>
                  </View>
                  <TouchableOpacity onPress={() => jumpToStep(1)}>
                    <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                      <Path
                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                        fill={UX4GColors.neutral900}
                      />
                    </Svg>
                  </TouchableOpacity>
                </View>
                <Text style={styles.reviewCardSubTextGreen}>
                  {formData.fullName} · {formData.gender} · {formData.city}, {formData.state} · +91 {formData.mobileNumber}
                </Text>
              </View>

              {/* Card 2: Zone & Checkpost Summary */}
              <View style={[styles.reviewCardGreen, { marginTop: 12 }]}>
                <View style={styles.reviewCardHeader}>
                  <View style={styles.reviewCardLeft}>
                    <View style={styles.reviewIconCircleGreen}>
                      <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                        <Path d="M5 13l4 4L19 7" stroke={UX4GColors.white} strokeWidth={3} strokeLinecap="round" />
                      </Svg>
                    </View>
                    <Text style={styles.reviewCardTitleGreen}>Step 2 · Trip Details</Text>
                  </View>
                  <TouchableOpacity onPress={() => jumpToStep(2)}>
                    <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                      <Path
                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                        fill={UX4GColors.neutral900}
                      />
                    </Svg>
                  </TouchableOpacity>
                </View>
                <Text style={styles.reviewCardSubTextGreen}>
                  {formData.destinations && formData.destinations.length > 0
                    ? formData.destinations.map((d) => d.name).join(' → ')
                    : 'Yamunotri → Gangotri → Kedarnath'} · {formData.numTravellers || '2'} Travellers · {formData.tripPurpose === 'tourist' ? 'Tourist' : (formData.tripPurpose || 'Tourist')}
                </Text>
              </View>

              {/* Card 3: Dates & Guide Summary */}
              <View style={[styles.reviewCardGreen, { marginTop: 12 }]}>
                <View style={styles.reviewCardHeader}>
                  <View style={styles.reviewCardLeft}>
                    <View style={styles.reviewIconCircleGreen}>
                      <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                        <Path d="M5 13l4 4L19 7" stroke={UX4GColors.white} strokeWidth={3} strokeLinecap="round" />
                      </Svg>
                    </View>
                    <Text style={styles.reviewCardTitleGreen}>Step 3 & 5 · Schedule & Stay</Text>
                  </View>
                  <TouchableOpacity onPress={() => jumpToStep(3)}>
                    <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                      <Path
                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                        fill={UX4GColors.neutral900}
                      />
                    </Svg>
                  </TouchableOpacity>
                </View>
                <Text style={styles.reviewCardSubTextGreen}>
                  {formData.startDate} – {formData.endDate} (7 days) · Vehicle: {formData.vehicleNumber} · Guide: {formData.guideName}
                </Text>
              </View>

              {/* Declaration Section */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Declaration</Text>
              <View style={{ marginTop: 6 }}>
                <Ux4gCheckbox
                  label="I hereby declare that all information furnished is true, correct, and complete to the best of my knowledge."
                  isRequired
                  value={formData.declarationAccuracy}
                  onChanged={(val) => updateField('declarationAccuracy', !!val)}
                  size="medium"
                  hasError={!!errors.declarationAccuracy}
                  description={errors.declarationAccuracy}
                  descriptionVariant="error"
                />
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
                  <Text style={styles.step9DetailLabel}>Checkpost</Text>
                  <Text style={styles.step9DetailValue}>Tsaga La / Chushul Outpost</Text>
                </View>
                <View style={styles.step9DetailRow}>
                  <Text style={styles.step9DetailLabel}>Validity</Text>
                  <Text style={styles.step9DetailValue}>{formData.startDate} – {formData.endDate}</Text>
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

        {/* ─── ADD / EDIT DESTINATION MODAL ─── */}
        <Modal
          visible={destModalMode !== null}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setDestModalMode(null)}
        >
          <TouchableOpacity
            style={styles.modalBackdrop}
            activeOpacity={1}
            onPress={() => setDestModalMode(null)}
          >
            <TouchableOpacity
              style={styles.modalCard}
              activeOpacity={1}
              onPress={(e) => e.stopPropagation()}
            >
              <Text style={styles.modalTitle}>
                {destModalMode === 'add' ? 'Add Destination' : 'Edit Destination'}
              </Text>
              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>
                  Destination Name<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={styles.singleLineInput}
                  value={destModalName}
                  onChangeText={setDestModalName}
                  placeholder="e.g. Badrinath"
                  placeholderTextColor={UX4GColors.neutral400}
                />
              </View>
              <View style={[styles.fieldGroup, { marginTop: 12 }]}>
                <Text style={styles.fieldLabel}>Date of visit</Text>
                <TextInput
                  style={styles.singleLineInput}
                  value={destModalDate}
                  onChangeText={setDestModalDate}
                  placeholder="DD / MM / YYYY"
                  placeholderTextColor={UX4GColors.neutral400}
                />
              </View>
              <View style={styles.modalBtnRow}>
                <TouchableOpacity
                  style={styles.modalCancelBtn}
                  onPress={() => setDestModalMode(null)}
                >
                  <Text style={styles.modalCancelBtnText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalSaveBtn}
                  onPress={handleSaveDestModal}
                >
                  <Text style={styles.modalSaveBtnText}>
                    {destModalMode === 'add' ? 'Add destination' : 'Save changes'}
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
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
  radioOptionGroup: {
    marginTop: 4,
  },
  docItemCard: {
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    borderRadius: 8,
    padding: 14,
    backgroundColor: UX4GColors.white,
  },
  docHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  docIconCircleGreen: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: UX4GColors.green600,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  docItemTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: UX4GColors.neutral900,
  },
  docSubText: {
    fontSize: 12,
    color: UX4GColors.neutral600,
    marginBottom: 10,
  },
  reviewCardGreen: {
    backgroundColor: UX4GColors.green50,
    borderWidth: 1,
    borderColor: UX4GColors.green300,
    borderRadius: 10,
    padding: 14,
  },
  reviewCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  reviewCardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewIconCircleGreen: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: UX4GColors.green600,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  reviewCardTitleGreen: {
    fontSize: 14,
    fontWeight: '700',
    color: UX4GColors.green900,
  },
  reviewCardSubTextGreen: {
    fontSize: 12.5,
    color: UX4GColors.green800,
    marginTop: 4,
    lineHeight: 18,
  },
  addMemberBtn: {
    borderWidth: 1,
    borderColor: UX4GColors.primary300,
    borderStyle: 'dashed',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 14,
  },
  addMemberBtnText: {
    color: UX4GColors.primary,
    fontSize: 13.5,
    fontWeight: '600',
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
  // ─── STEP 2: TRIP DETAILS & DESTINATIONS ───
  destinationCard: {
    backgroundColor: UX4GColors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    padding: 16,
    marginBottom: 12,
  },
  destinationCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  destinationName: {
    fontSize: 15,
    fontWeight: '700',
    color: UX4GColors.neutral900,
  },
  cardActionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardActionBtn: {
    padding: 4,
  },
  addDestinationBtn: {
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: UX4GColors.primary,
    backgroundColor: UX4GColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  addDestinationBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: UX4GColors.primary,
  },
  checkAvailabilityBtn: {
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: UX4GColors.neutral300,
    backgroundColor: UX4GColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  checkAvailabilityBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: UX4GColors.neutral900,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalCard: {
    backgroundColor: UX4GColors.white,
    borderRadius: 12,
    padding: 20,
    width: '100%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: UX4GColors.neutral900,
    marginBottom: 16,
  },
  modalBtnRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    marginTop: 20,
  },
  modalCancelBtn: {
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: UX4GColors.neutral300,
  },
  modalCancelBtnText: {
    fontSize: 13,
    fontWeight: '600',
    color: UX4GColors.neutral700,
  },
  modalSaveBtn: {
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 6,
    backgroundColor: UX4GColors.primary,
  },
  modalSaveBtnText: {
    fontSize: 13,
    fontWeight: '600',
    color: UX4GColors.white,
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
