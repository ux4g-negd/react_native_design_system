import React, { useState, useMemo } from 'react';
import JSZip from 'jszip';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { buildTourismEventSponsorshipModularProject } from '../utils/tourismEventSponsorshipModularZip';

interface TourismEventSponsorshipFlowDocProps {
  isDark: boolean;
}

// Official Snack ID for Tourism Event Sponsorship Flow (Step 5: UX4G Color Palette)
const SNACK_ID = 'Ew51X-4v_VLOJiBzS8OGX';

export const TourismEventSponsorshipFlowDoc: React.FC<TourismEventSponsorshipFlowDocProps> = ({ isDark }) => {
  const [isDownloadingZip, setIsDownloadingZip] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Direct Expo Snack embed URL
  const snackUrl = useMemo(() => {
    return `https://snack.expo.dev/embedded/${SNACK_ID}?platform=android&supportedPlatforms=ios,android&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&theme=${
      isDark ? 'dark' : 'light'
    }`;
  }, [isDark]);

  // Standalone React Native Expo App Source Code (Tourism Event Sponsorship Flow)
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
  Modal,
} from 'react-native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';
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
  Ux4gTextArea,
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
    title: 'Who is applying',
    subtitle: 'The person making the application, and the organisation they act for.',
  },
  2: {
    title: 'The event',
    subtitle: 'The festival or event you are proposing, and when and where it happens.',
  },
  3: {
    title: 'Documents',
    subtitle: 'What proves the organisation can hold it.',
  },
  4: {
    title: 'Review & declaration',
    subtitle: 'Everything you have entered, read back before you commit to it.',
  },
  5: {
    title: 'Submitted',
    subtitle: 'Your application is with the department.',
  },
};

const ORG_TYPE_OPTIONS = [
  { id: 'pvt_ltd', label: 'Private Limited Company' },
  { id: 'pub_ltd', label: 'Public Limited Company' },
  { id: 'society_trust', label: 'Registered Society / Trust' },
  { id: 'llp', label: 'Limited Liability Partnership (LLP)' },
  { id: 'partnership', label: 'Registered Partnership Firm' },
  { id: 'proprietorship', label: 'Proprietorship' },
  { id: 'event_assoc', label: 'Event Management Association' },
  { id: 'ngo', label: 'NGO / Non-Profit Organisation' },
];

const DISTRICT_OPTIONS = [
  { id: 'mumbai_city', label: 'Mumbai City' },
  { id: 'mumbai_suburban', label: 'Mumbai Suburban' },
  { id: 'pune', label: 'Pune' },
  { id: 'ratnagiri', label: 'Ratnagiri' },
  { id: 'sindhudurg', label: 'Sindhudurg' },
  { id: 'raigad', label: 'Raigad' },
  { id: 'chhatrapati_sambhajinagar', label: 'Chhatrapati Sambhajinagar (Aurangabad)' },
  { id: 'nashik', label: 'Nashik' },
  { id: 'nagpur', label: 'Nagpur' },
  { id: 'kolhapur', label: 'Kolhapur' },
  { id: 'thane', label: 'Thane' },
  { id: 'satara', label: 'Satara' },
];

const EVENT_CATEGORY_OPTIONS = [
  { id: 'cultural_heritage', label: 'Cultural & Heritage Festival' },
  { id: 'eco_adventure', label: 'Eco-Tourism & Adventure Sports Fest' },
  { id: 'food_culinary', label: 'Food, Wine & Culinary Carnival' },
  { id: 'arts_music', label: 'Music, Arts & Performing Festival' },
  { id: 'traditional_sports', label: 'Traditional Sports & Regatta' },
  { id: 'mice_conclave', label: 'Tourism & MICE Business Conclave' },
];

const EVENT_EDITION_OPTIONS = [
  { id: 'new', label: 'First Edition (New Event)' },
  { id: 'recurring', label: 'Recurring Annual Edition (2nd / 3rd+ year)' },
];

const FOOTFALL_OPTIONS = [
  { id: 'footfall_1', label: '5,000 – 15,000 Visitors' },
  { id: 'footfall_2', label: '15,000 – 50,000 Visitors' },
  { id: 'footfall_3', label: '50,000 – 1,00,000 Visitors' },
  { id: 'footfall_4', label: '1,00,000+ Visitors (Mega Festival)' },
];

const SPONSORSHIP_TIER_OPTIONS = [
  { id: 'title', label: 'Title Sponsor (Up to 30% of total budget)' },
  { id: 'associate', label: 'Associate / Powered By Sponsor (Up to 20%)' },
  { id: 'supporting', label: 'Supporting Partner / Stall Partner (Up to 10%)' },
];

const OTHER_SPONSOR_OPTIONS = [
  { id: 'yes', label: 'Yes — other commercial / PSU co-sponsors onboard' },
  { id: 'no', label: 'No — department grant requested with organizer co-share' },
];

const ENTRY_MODEL_OPTIONS = [
  { id: 'free', label: 'Free Public Entry (Maximum Tourism Footfall)' },
  { id: 'ticketed', label: 'Ticketed / Regulated Entry' },
  { id: 'hybrid', label: 'Hybrid (Free General Access + VIP Arena)' },
];

const CLEARANCE_STATUS_OPTIONS = [
  { id: 'obtained', label: 'Obtained & Uploaded' },
  { id: 'applied', label: 'In-Process (Application Acknowledgement Attached)' },
];

export default function App() {
  const [step, setStep] = useState(5);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [savedTime, setSavedTime] = useState('3:14 PM');
  const [toastMessage, setToastMessage] = useState(null);
  const [errors, setErrors] = useState({});
  const [docSectionsExpanded, setDocSectionsExpanded] = useState({
    organisation: true,
    event: false,
  });

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Who is applying
    fullName: 'Anil Kumar',
    designation: 'Secretary',
    mobileNumber: '9820144821',
    emailAddress: 'anil.kumar@abc.org.in',
    registrationNumber: 'MA/2023/0041827',
    isRecordFound: true,
    organisationName: 'ABC',
    orgType: 'society_trust',
    incorporationNumber: 'MH/2021/SOC/09841',
    registeredAddress: '402, Heritage Plaza, Senapati Bapat Marg, Lower Parel, Mumbai',
    district: 'mumbai_city',

    // Step 2: The event
    eventName: 'ABC Festival 2026',
    eventDescription:
      'A 6-day regional mega festival showcasing traditional music, cultural exhibitions, beach sports, and state cuisine to boost state tourism.',
    expectedFootfall: '5,000',
    venueAddress: 'Bhatye Beach Promenade, Dehradun 248001',
    eventDistrict: 'Dehradun',
    startDate: '10 Dec',
    endDate: '15 Dec',
    eventDuration: 'six days',

    // Step 3: Documents
    docOrgRegistration: 'MH_Tourism_Vendor_Registration_Certificate.pdf',
    docProfilePastEvents: '',
    docEventProposal: '',
    docBudgetSheet: '',

    // Step 4: Declarations
    declarationTrueKnowledge: true,
    declarationVenueRight: true,

    // Step 5: Submitted
    isSubmitted: true,
    applicationNumber: 'TE-2026-000000',
  });

  const scrollRef = useRef(null);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const updateField = (key, value) => {
    setFormData((prev) => {
      const next = { ...prev, [key]: value };
      if (key === 'startDate' || key === 'endDate') {
        if (next.startDate && next.endDate) {
          next.eventDuration = '6 days';
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

  const handleFetchDetails = () => {
    if (!formData.registrationNumber.trim()) {
      setErrors((prev) => ({
        ...prev,
        registrationNumber: 'Please enter registration number first to fetch details',
      }));
      triggerToast('Enter registration number first');
      return;
    }
    setFormData((prev) => ({
      ...prev,
      isRecordFound: true,
      organisationName: 'ABC Tourism & Cultural Promotion Foundation',
      orgType: 'society_trust',
      incorporationNumber: 'MH/2021/SOC/09841',
      registeredAddress: '402, Heritage Plaza, Senapati Bapat Marg, Lower Parel, Mumbai',
      district: 'mumbai_city',
    }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next.registrationNumber;
      delete next.organisationName;
      delete next.orgType;
      delete next.incorporationNumber;
      delete next.registeredAddress;
      delete next.district;
      return next;
    });
    triggerToast('MahaAtithi vendor record found and details auto-filled!');
  };

  const handleFillSampleEvent = () => {
    setFormData((prev) => ({
      ...prev,
      eventName: 'Konkan Cultural & Seafood Carnival 2026',
      eventDescription:
        'A 6-day coastal mega festival showcasing traditional Malvani music, beach sports, coastal handicraft exhibitions, and Konkani cuisine to boost state tourism.',
      expectedFootfall: '75000',
      venueAddress: 'Bhatye Beach Promenade, Ratnagiri Coastal Highway, Maharashtra 415612',
      eventDistrict: 'ratnagiri',
      startDate: '15/12/2026',
      endDate: '20/12/2026',
      eventDuration: '6 days',
    }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next.eventName;
      delete next.eventDescription;
      delete next.expectedFootfall;
      delete next.venueAddress;
      delete next.eventDistrict;
      delete next.startDate;
      delete next.endDate;
      return next;
    });
    triggerToast('Sample event details loaded!');
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
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required as per official record';
    }
    if (!formData.designation.trim()) {
      errs.designation = 'Designation in organisation is required';
    }
    if (!formData.mobileNumber.trim()) {
      errs.mobileNumber = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber.trim())) {
      errs.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.emailAddress.trim()) {
      errs.emailAddress = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())) {
      errs.emailAddress = 'Please enter a valid email address';
    }
    if (!formData.registrationNumber.trim()) {
      errs.registrationNumber = 'MahaAtithi or Mahabooking registration number is required';
    }
    if (!formData.organisationName.trim()) {
      errs.organisationName = 'Organisation name is required';
    }
    if (!formData.orgType) {
      errs.orgType = 'Please select type of organisation';
    }
    if (!formData.incorporationNumber.trim()) {
      errs.incorporationNumber = 'Registration or incorporation number is required';
    }
    if (!formData.registeredAddress.trim()) {
      errs.registeredAddress = 'Registered address is required';
    }
    if (!formData.district) {
      errs.district = 'Please select district';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      triggerToast('Please complete all required fields in Step 1');
      scrollRef.current?.scrollTo({ y: 0, animated: true });
      return;
    }

    setErrors({});
    setStep(2);
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  const handleContinueStep2 = () => {
    const errs = {};
    if (!formData.eventName.trim()) {
      errs.eventName = 'Name of the event or festival is required';
    }
    if (!formData.eventDescription.trim()) {
      errs.eventDescription = 'Description of the event is required';
    } else if (formData.eventDescription.trim().length < 15) {
      errs.eventDescription = 'Description must be at least 15 characters';
    }
    if (!formData.expectedFootfall.trim()) {
      errs.expectedFootfall = 'Expected footfall is required';
    } else if (isNaN(parseInt(formData.expectedFootfall.replace(/,/g, ''), 10))) {
      errs.expectedFootfall = 'Enter a valid numeric footfall';
    }
    if (!formData.venueAddress.trim()) {
      errs.venueAddress = 'Venue address is required';
    }
    if (!formData.eventDistrict) {
      errs.eventDistrict = 'Please select district where the event takes place';
    }
    if (!formData.startDate) {
      errs.startDate = 'First day of the event is required';
    }
    if (!formData.endDate) {
      errs.endDate = 'Last day of the event is required';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      triggerToast('Please complete all required fields in Step 2');
      scrollRef.current?.scrollTo({ y: 0, animated: true });
      return;
    }

    setErrors({});
    setStep(3);
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  const toggleDocSection = (section) => {
    setDocSectionsExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleUploadDoc = (key) => {
    const sampleFiles = {
      docOrgRegistration: 'MH_Tourism_Vendor_Registration_Certificate.pdf',
      docProfilePastEvents: 'ABC_Foundation_Profile_and_Past_Festivals.pdf',
      docEventProposal: 'Konkan_Carnival_2026_Proposal_Deck.pdf',
      docBudgetSheet: 'Itemised_Event_Budget_Sheet.xlsx',
    };
    const docNames = {
      docOrgRegistration: 'Organisation registration certificate',
      docProfilePastEvents: 'Profile and past events',
      docEventProposal: 'Concept deck or event proposal',
      docBudgetSheet: 'Estimated event budget sheet',
    };

    const fileName = sampleFiles[key] || 'Document.pdf';
    setFormData((prev) => ({
      ...prev,
      [key]: fileName,
    }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
    triggerToast((docNames[key] || 'Document') + ' updated successfully');
  };

  const handleContinueStep3 = () => {
    const errs = {};
    if (!formData.docOrgRegistration) {
      errs.docOrgRegistration = 'Organisation registration certificate is required';
    }
    if (!formData.docProfilePastEvents) {
      errs.docProfilePastEvents = 'Profile and past events is required';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setDocSectionsExpanded((prev) => ({ ...prev, organisation: true }));
      triggerToast('Please upload all required organisation documents');
      scrollRef.current?.scrollTo({ y: 0, animated: true });
      return;
    }

    setErrors({});
    setStep(4);
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  const handleContinueStep4 = () => {
    const errs = {};
    if (!formData.declarationTrueKnowledge) {
      errs.declarationTrueKnowledge = 'Please confirm that everything entered is true';
    }
    if (!formData.declarationVenueRight) {
      errs.declarationVenueRight = 'Please confirm the right to hold this event';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      triggerToast('Please accept all mandatory declarations to submit');
      return;
    }

    setErrors({});
    setFormData((prev) => ({ ...prev, isSubmitted: true }));
    setStep(5);
    triggerToast('Application submitted successfully!');
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  const handleContinue = () => {
    if (step === 1) {
      handleContinueStep1();
    } else if (step === 2) {
      handleContinueStep2();
    } else if (step === 3) {
      handleContinueStep3();
    } else if (step === 4) {
      handleContinueStep4();
    } else if (step === 5) {
      triggerToast('Tracking application: ' + formData.applicationNumber);
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

  const orgUploadedCount = (formData.docOrgRegistration ? 1 : 0) + (formData.docProfilePastEvents ? 1 : 0);
  const eventUploadedCount = (formData.docEventProposal ? 1 : 0) + (formData.docBudgetSheet ? 1 : 0);
  const totalDocsAttached =
    (formData.docOrgRegistration ? 1 : 0) +
    (formData.docProfilePastEvents ? 1 : 0) +
    (formData.docEventProposal ? 1 : 0) +
    (formData.docBudgetSheet ? 1 : 0);

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

        {/* ─── WHITE APP HEADER WITH EMBLEM & LOGO ─── */}
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

        {/* ─── TOP STATUS BANNER (SAVED NOTIFICATION) ─── */}
        {step !== 5 && (
          <View style={styles.autoSaveBanner}>
            <View style={styles.autoSaveRow}>
              <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
                <Circle cx={12} cy={12} r={10} stroke={UX4GColors.green600} strokeWidth={2} />
                <Path
                  d="M8 12l3 3 5-5"
                  stroke={UX4GColors.green600}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <Text style={styles.autoSaveText}>Saved {savedTime}</Text>
            </View>
          </View>
        )}

        {/* ─── 5-SEGMENT STEPPER PROGRESS ─── */}
        <View style={styles.stepperContainer}>
          <View style={styles.progressSegmentsRow}>
            {[1, 2, 3, 4, 5].map((s) => (
              <View
                key={s}
                style={[
                  styles.progressSegment,
                  s <= step ? styles.progressSegmentActive : styles.progressSegmentInactive,
                ]}
              />
            ))}
          </View>

          <Text style={styles.stepCounterText}>Step {step} of 5</Text>

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
                step === 5 ? styles.navArrowBtnDisabled : styles.navArrowBtnActive,
              ]}
              onPress={handleContinue}
              disabled={step === 5}
              activeOpacity={0.7}
            >
              <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                <Path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke={step === 5 ? UX4GColors.neutral400 : UX4GColors.primary}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </TouchableOpacity>
          </View>

          <View style={styles.stepperDivider} />
        </View>

        {/* ─── MAIN SCROLLABLE FORM BODY ─── */}
        <ScrollView
          ref={scrollRef}
          style={styles.mainScrollView}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 1: WHO IS APPLYING (EXACT IMAGE REPLICATION WITH VALIDATION FLOW)    */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 1 && (
            <View style={styles.formContainer}>
              {/* Section 1: Applicant Details */}
              <Text style={styles.sectionHeading}>Applicant Details</Text>

              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>
                  Full name<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[styles.textInput, errors.fullName && styles.textInputError]}
                  placeholder="As it appears on your official record"
                  placeholderTextColor={UX4GColors.neutral400}
                  value={formData.fullName}
                  onChangeText={(text) => updateField('fullName', text)}
                />
                {errors.fullName && (
                  <View style={styles.errorCaptionRow}>
                    <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                      <Circle cx={12} cy={12} r={10} stroke={UX4GColors.red600} strokeWidth={2} />
                      <Path d="M12 8v5M12 16h.01" stroke={UX4GColors.red600} strokeWidth={2} strokeLinecap="round" />
                    </Svg>
                    <Text style={styles.errorCaptionText}>{errors.fullName}</Text>
                  </View>
                )}
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>
                  Designation in the organisation<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[styles.textInput, errors.designation && styles.textInputError]}
                  placeholder="For example: General Secretary / President"
                  placeholderTextColor={UX4GColors.neutral400}
                  value={formData.designation}
                  onChangeText={(text) => updateField('designation', text)}
                />
                {errors.designation && (
                  <View style={styles.errorCaptionRow}>
                    <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                      <Circle cx={12} cy={12} r={10} stroke={UX4GColors.red600} strokeWidth={2} />
                      <Path d="M12 8v5M12 16h.01" stroke={UX4GColors.red600} strokeWidth={2} strokeLinecap="round" />
                    </Svg>
                    <Text style={styles.errorCaptionText}>{errors.designation}</Text>
                  </View>
                )}
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>
                  Mobile number<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <View
                  style={[
                    styles.phoneInputRow,
                    errors.mobileNumber && styles.phoneInputRowError,
                  ]}
                >
                  <View style={styles.phonePrefixBox}>
                    <Text style={styles.phonePrefixText}>+91</Text>
                  </View>
                  <TextInput
                    style={[styles.textInput, styles.phoneTextInput]}
                    placeholder="10 digits"
                    placeholderTextColor={UX4GColors.neutral400}
                    keyboardType="number-pad"
                    maxLength={10}
                    value={formData.mobileNumber}
                    onChangeText={(text) => updateField('mobileNumber', text)}
                  />
                </View>
                {errors.mobileNumber && (
                  <View style={styles.errorCaptionRow}>
                    <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                      <Circle cx={12} cy={12} r={10} stroke={UX4GColors.red600} strokeWidth={2} />
                      <Path d="M12 8v5M12 16h.01" stroke={UX4GColors.red600} strokeWidth={2} strokeLinecap="round" />
                    </Svg>
                    <Text style={styles.errorCaptionText}>{errors.mobileNumber}</Text>
                  </View>
                )}
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>
                  Email address<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[styles.textInput, errors.emailAddress && styles.textInputError]}
                  placeholder="name@example.com"
                  placeholderTextColor={UX4GColors.neutral400}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={formData.emailAddress}
                  onChangeText={(text) => updateField('emailAddress', text)}
                />
                {errors.emailAddress && (
                  <View style={styles.errorCaptionRow}>
                    <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                      <Circle cx={12} cy={12} r={10} stroke={UX4GColors.red600} strokeWidth={2} />
                      <Path d="M12 8v5M12 16h.01" stroke={UX4GColors.red600} strokeWidth={2} strokeLinecap="round" />
                    </Svg>
                    <Text style={styles.errorCaptionText}>{errors.emailAddress}</Text>
                  </View>
                )}
              </View>

              {/* Section 2: Existing Registration Details */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>
                Existing Registration Details
              </Text>

              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>
                  MahaAtithi or Mahabooking registration number
                  <Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[styles.textInput, errors.registrationNumber && styles.textInputError]}
                  placeholder="e.g. MA/2023/0041827"
                  placeholderTextColor={UX4GColors.neutral400}
                  value={formData.registrationNumber}
                  onChangeText={(text) => updateField('registrationNumber', text)}
                />
                {errors.registrationNumber && (
                  <View style={styles.errorCaptionRow}>
                    <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                      <Circle cx={12} cy={12} r={10} stroke={UX4GColors.red600} strokeWidth={2} />
                      <Path d="M12 8v5M12 16h.01" stroke={UX4GColors.red600} strokeWidth={2} strokeLinecap="round" />
                    </Svg>
                    <Text style={styles.errorCaptionText}>{errors.registrationNumber}</Text>
                  </View>
                )}
              </View>

              {/* Fetch my details Action Button */}
              <TouchableOpacity
                style={styles.outlineFetchBtn}
                activeOpacity={0.75}
                onPress={handleFetchDetails}
              >
                <Text style={styles.outlineFetchBtnText}>Fetch my details</Text>
              </TouchableOpacity>

              {/* Verified Record Green Card */}
              {formData.isRecordFound && (
                <View style={styles.foundRecordCard}>
                  <View style={styles.foundRecordHeaderRow}>
                    <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                      <Circle cx={12} cy={12} r={10} fill={UX4GColors.green600} />
                      <Path
                        d="M8 12l3 3 5-5"
                        stroke={UX4GColors.white}
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </Svg>
                    <Text style={styles.foundRecordTitle}>
                      Found — ABC, registered vendor since 2023
                    </Text>
                  </View>
                  <Text style={styles.foundRecordBody}>
                    Organisation name, type, registration number and registered address above were
                    filled from this record. Correct anything that has changed.
                  </Text>
                </View>
              )}

              {/* Section 3: Organisation Details */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Organisation Details</Text>

              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>
                  Organisation name<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[styles.textInput, errors.organisationName && styles.textInputError]}
                  placeholder="As registered"
                  placeholderTextColor={UX4GColors.neutral400}
                  value={formData.organisationName}
                  onChangeText={(text) => updateField('organisationName', text)}
                />
                {errors.organisationName && (
                  <View style={styles.errorCaptionRow}>
                    <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                      <Circle cx={12} cy={12} r={10} stroke={UX4GColors.red600} strokeWidth={2} />
                      <Path d="M12 8v5M12 16h.01" stroke={UX4GColors.red600} strokeWidth={2} strokeLinecap="round" />
                    </Svg>
                    <Text style={styles.errorCaptionText}>{errors.organisationName}</Text>
                  </View>
                )}
              </View>

              <View style={styles.fieldGroup}>
                <Ux4gSelectionDropdown
                  label="Type of organisation"
                  required
                  placeholder="Select the legal structure"
                  options={ORG_TYPE_OPTIONS}
                  selectedOptionIds={formData.orgType ? [formData.orgType] : []}
                  onSelectionChange={(selected) => updateField('orgType', selected[0] || '')}
                  size="l"
                  status={errors.orgType ? 'error' : 'defaultStatus'}
                  description={errors.orgType}
                />
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>
                  Registration or Incorporation number
                  <Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <TextInput
                  style={[styles.textInput, errors.incorporationNumber && styles.textInputError]}
                  placeholder="Society, trust, company or firm registration num"
                  placeholderTextColor={UX4GColors.neutral400}
                  value={formData.incorporationNumber}
                  onChangeText={(text) => updateField('incorporationNumber', text)}
                />
                {errors.incorporationNumber && (
                  <View style={styles.errorCaptionRow}>
                    <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                      <Circle cx={12} cy={12} r={10} stroke={UX4GColors.red600} strokeWidth={2} />
                      <Path d="M12 8v5M12 16h.01" stroke={UX4GColors.red600} strokeWidth={2} strokeLinecap="round" />
                    </Svg>
                    <Text style={styles.errorCaptionText}>{errors.incorporationNumber}</Text>
                  </View>
                )}
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>
                  Registered address<Text style={styles.requiredAsterisk}>*</Text>
                </Text>
                <View
                  style={[
                    styles.textAreaContainer,
                    errors.registeredAddress && styles.textAreaContainerError,
                  ]}
                >
                  <TextInput
                    style={styles.textAreaInput}
                    placeholder="Registered office address"
                    placeholderTextColor={UX4GColors.neutral400}
                    multiline
                    numberOfLines={4}
                    maxLength={200}
                    value={formData.registeredAddress}
                    onChangeText={(text) => updateField('registeredAddress', text)}
                  />
                  <View style={styles.charCounterRow}>
                    <Text style={styles.charCounterText}>
                      {formData.registeredAddress.length}/200
                    </Text>
                    <Svg width={12} height={12} viewBox="0 0 24 24" fill="none" style={{ marginLeft: 4 }}>
                      <Path
                        d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"
                        stroke={UX4GColors.neutral400}
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </Svg>
                  </View>
                </View>
                {errors.registeredAddress && (
                  <View style={styles.errorCaptionRow}>
                    <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                      <Circle cx={12} cy={12} r={10} stroke={UX4GColors.red600} strokeWidth={2} />
                      <Path d="M12 8v5M12 16h.01" stroke={UX4GColors.red600} strokeWidth={2} strokeLinecap="round" />
                    </Svg>
                    <Text style={styles.errorCaptionText}>{errors.registeredAddress}</Text>
                  </View>
                )}
              </View>

              <View style={styles.fieldGroup}>
                <Ux4gSelectionDropdown
                  label="District"
                  required
                  placeholder="Select the district"
                  options={DISTRICT_OPTIONS}
                  selectedOptionIds={formData.district ? [formData.district] : []}
                  onSelectionChange={(selected) => updateField('district', selected[0] || '')}
                  size="l"
                  status={errors.district ? 'error' : 'defaultStatus'}
                  description={errors.district}
                />
              </View>
            </View>
          )}

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 2: THE EVENT (EXACT IMAGE REPLICATION WITH VALIDATION FLOW)           */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 2 && (
            <View style={styles.formContainer}>
              {/* Section 1: Event Details */}
              <Text style={styles.sectionHeading}>Event Details</Text>

              <View style={styles.fieldGroup}>
                <Ux4gInputField
                  label="Name of the event or festival"
                  required
                  placeholder="As it will be advertised"
                  value={formData.eventName}
                  onValueChange={(text) => updateField('eventName', text)}
                  size="large"
                  status={errors.eventName ? 'error' : 'defaultStatus'}
                  caption={errors.eventName}
                />
              </View>

              <View style={styles.fieldGroup}>
                <Ux4gTextArea
                  label="Description of the event"
                  required
                  placeholder="One paragraph: what happens, who it is for, and why it needs support"
                  value={formData.eventDescription}
                  onValueChange={(text) => updateField('eventDescription', text)}
                  maxLength={200}
                  characterCountText={formData.eventDescription.length + '/200'}
                  minHeight="medium"
                  size="large"
                  status={errors.eventDescription ? 'error' : 'defaultStatus'}
                  caption={errors.eventDescription}
                />
              </View>

              <View style={styles.fieldGroup}>
                <Ux4gInputField
                  label="Expected footfall"
                  required
                  placeholder="Number of visitors you expect"
                  type="number"
                  value={formData.expectedFootfall}
                  onValueChange={(text) => updateField('expectedFootfall', text)}
                  size="large"
                  status={errors.expectedFootfall ? 'error' : 'defaultStatus'}
                  caption={errors.expectedFootfall}
                />
              </View>

              {/* Section 2: Venue Details */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Venue Details</Text>

              <View style={styles.fieldGroup}>
                <Ux4gTextArea
                  label="Venue address"
                  required
                  placeholder="Placeholder"
                  value={formData.venueAddress}
                  onValueChange={(text) => updateField('venueAddress', text)}
                  maxLength={200}
                  characterCountText={formData.venueAddress.length + '/200'}
                  minHeight="medium"
                  size="large"
                  status={errors.venueAddress ? 'error' : 'defaultStatus'}
                  caption={errors.venueAddress}
                />
              </View>

              <View style={styles.fieldGroup}>
                <Ux4gSelectionDropdown
                  label="District"
                  required
                  placeholder="Select the district"
                  options={DISTRICT_OPTIONS}
                  selectedOptionIds={formData.eventDistrict ? [formData.eventDistrict] : []}
                  onSelectionChange={(selected) => updateField('eventDistrict', selected[0] || '')}
                  size="l"
                  status={errors.eventDistrict ? 'error' : 'defaultStatus'}
                  description={errors.eventDistrict}
                />
              </View>

              {/* Section 3: Date and Duration of the Event */}
              <Text style={[styles.sectionHeading, { marginTop: 24 }]}>
                Date and Duration of the Event
              </Text>

              <View style={styles.fieldGroup}>
                <Ux4gDatePicker
                  label="First day of the event"
                  required
                  placeholder="Select date"
                  initialDate={parseDate(formData.startDate)}
                  onDateSelected={(date) => updateField('startDate', formatDate(date))}
                  status={errors.startDate ? 'error' : 'defaultStatus'}
                  description={errors.startDate}
                />
              </View>

              <View style={styles.fieldGroup}>
                <Ux4gDatePicker
                  label="Last day of the event"
                  required
                  placeholder="Select date"
                  initialDate={parseDate(formData.endDate)}
                  onDateSelected={(date) => updateField('endDate', formatDate(date))}
                  status={errors.endDate ? 'error' : 'defaultStatus'}
                  description={errors.endDate}
                />
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>
                  Duration — set by the two dates above
                </Text>
                <View style={styles.disabledDurationBox}>
                  <Text style={styles.disabledDurationText}>
                    {formData.eventDuration || '6 days'}
                  </Text>
                </View>
              </View>
            </View>
          )}

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 3: DOCUMENTS                                                         */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 3 && (
            <View style={styles.formContainer}>
              <Text style={styles.sectionHeading}>Documents</Text>
              <Text style={styles.sectionSubheading}>
                What proves the organisation can hold it.
              </Text>

              {/* Accordion 1: What proves the organisation */}
              <Ux4gCard
                cornerRadius={12}
                borderWidth={1}
                borderColor={errors.docSectionOrg ? UX4GColors.red600 : UX4GColors.neutral200}
                backgroundColor={UX4GColors.white}
                elevation={0}
                style={styles.docCardContainer}
              >
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => toggleDocSection('organisation')}
                  style={styles.docCardHeader}
                >
                  <View style={{ flex: 1, paddingRight: 8 }}>
                    <Text style={styles.docCardTitle}>What proves the organisation</Text>
                    {!docSectionsExpanded.organisation && (
                      <>
                        <Text style={styles.docCardSummaryText}>
                          {'2 documents · ' +
                            (orgUploadedCount === 2
                              ? '2 uploaded'
                              : orgUploadedCount === 1
                              ? '1 uploaded'
                              : 'none uploaded yet')}
                        </Text>
                        <View style={styles.docDotRow}>
                          <View
                            style={[
                              styles.docStatusDot,
                              formData.docOrgRegistration
                                ? styles.docStatusDotDone
                                : styles.docStatusDotEmpty,
                            ]}
                          >
                            {formData.docOrgRegistration ? (
                              <Svg width={10} height={10} viewBox="0 0 24 24" fill="none">
                                <Path
                                  d="M5 13l4 4L19 7"
                                  stroke={UX4GColors.white}
                                  strokeWidth={3}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </Svg>
                            ) : null}
                          </View>
                          <View
                            style={[
                              styles.docStatusDot,
                              formData.docProfilePastEvents
                                ? styles.docStatusDotDone
                                : styles.docStatusDotEmpty,
                            ]}
                          >
                            {formData.docProfilePastEvents ? (
                              <Svg width={10} height={10} viewBox="0 0 24 24" fill="none">
                                <Path
                                  d="M5 13l4 4L19 7"
                                  stroke={UX4GColors.white}
                                  strokeWidth={3}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </Svg>
                            ) : null}
                          </View>
                        </View>
                      </>
                    )}
                  </View>
                  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
                    <Path
                      d={docSectionsExpanded.organisation ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'}
                      stroke={UX4GColors.neutral800}
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>

                {docSectionsExpanded.organisation && (
                  <View style={styles.docCardContent}>
                    {/* Item 1: Organisation registration certificate */}
                    <View style={styles.docItemRow}>
                      <View
                        style={[
                          styles.docIconCircle,
                          formData.docOrgRegistration
                            ? styles.docIconCircleDone
                            : styles.docIconCircleEmpty,
                        ]}
                      >
                        {formData.docOrgRegistration ? (
                          <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                            <Path
                              d="M5 13l4 4L19 7"
                              stroke={UX4GColors.white}
                              strokeWidth={3}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </Svg>
                        ) : null}
                      </View>
                      <Text style={styles.docItemLabel}>
                        Organisation registration certificate
                        <Text style={styles.requiredAsterisk}>*</Text>
                      </Text>
                    </View>

                    <Ux4gButton
                      text={formData.docOrgRegistration ? 'Replace' : 'Upload'}
                      variant="outline"
                      size="medium"
                      borderColor={UX4GColors.primary300}
                      contentColor={UX4GColors.primary}
                      borderRadius={8}
                      onPress={() => handleUploadDoc('docOrgRegistration')}
                      style={styles.docActionButton}
                    />

                    <View style={styles.docItemDivider} />

                    {/* Item 2: Profile and past events */}
                    <View style={styles.docItemRow}>
                      <View
                        style={[
                          styles.docIconCircle,
                          formData.docProfilePastEvents
                            ? styles.docIconCircleDone
                            : styles.docIconCircleEmpty,
                        ]}
                      >
                        {formData.docProfilePastEvents ? (
                          <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                            <Path
                              d="M5 13l4 4L19 7"
                              stroke={UX4GColors.white}
                              strokeWidth={3}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </Svg>
                        ) : null}
                      </View>
                      <Text style={styles.docItemLabel}>
                        Profile and past events<Text style={styles.requiredAsterisk}>*</Text>
                      </Text>
                    </View>

                    <Ux4gButton
                      text={formData.docProfilePastEvents ? 'Replace' : 'Upload'}
                      variant="outline"
                      size="medium"
                      borderColor={UX4GColors.primary300}
                      contentColor={UX4GColors.primary}
                      borderRadius={8}
                      onPress={() => handleUploadDoc('docProfilePastEvents')}
                      style={styles.docActionButton}
                    />
                    {errors.docProfilePastEvents && (
                      <View style={styles.errorCaptionRow}>
                        <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                          <Circle cx={12} cy={12} r={10} stroke={UX4GColors.red600} strokeWidth={2} />
                          <Path d="M12 8v5M12 16h.01" stroke={UX4GColors.red600} strokeWidth={2} strokeLinecap="round" />
                        </Svg>
                        <Text style={styles.errorCaptionText}>{errors.docProfilePastEvents}</Text>
                      </View>
                    )}
                  </View>
                )}
              </Ux4gCard>

              {/* Accordion 2: What proves the event */}
              <Ux4gCard
                cornerRadius={12}
                borderWidth={1}
                borderColor={errors.docSectionEvent ? UX4GColors.red600 : UX4GColors.neutral200}
                backgroundColor={UX4GColors.white}
                elevation={0}
                style={styles.docCardContainer}
              >
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => toggleDocSection('event')}
                  style={styles.docCardHeader}
                >
                  <View style={{ flex: 1, paddingRight: 8 }}>
                    <Text style={styles.docCardTitle}>What proves the event</Text>
                    {!docSectionsExpanded.event && (
                      <>
                        <Text style={styles.docCardSummaryText}>
                          {'2 documents · ' +
                            (eventUploadedCount > 0
                              ? eventUploadedCount + ' uploaded'
                              : 'none uploaded yet')}
                        </Text>
                        <View style={styles.docDotRow}>
                          <View
                            style={[
                              styles.docStatusDot,
                              formData.docEventProposal
                                ? styles.docStatusDotDone
                                : styles.docStatusDotEmpty,
                            ]}
                          >
                            {formData.docEventProposal ? (
                              <Svg width={10} height={10} viewBox="0 0 24 24" fill="none">
                                <Path
                                  d="M5 13l4 4L19 7"
                                  stroke={UX4GColors.white}
                                  strokeWidth={3}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </Svg>
                            ) : null}
                          </View>
                          <View
                            style={[
                              styles.docStatusDot,
                              formData.docBudgetSheet
                                ? styles.docStatusDotDone
                                : styles.docStatusDotEmpty,
                            ]}
                          >
                            {formData.docBudgetSheet ? (
                              <Svg width={10} height={10} viewBox="0 0 24 24" fill="none">
                                <Path
                                  d="M5 13l4 4L19 7"
                                  stroke={UX4GColors.white}
                                  strokeWidth={3}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </Svg>
                            ) : null}
                          </View>
                        </View>
                      </>
                    )}
                  </View>
                  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
                    <Path
                      d={docSectionsExpanded.event ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'}
                      stroke={UX4GColors.neutral800}
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>

                {docSectionsExpanded.event && (
                  <View style={styles.docCardContent}>
                    {/* Item 1: Concept deck or event proposal */}
                    <View style={styles.docItemRow}>
                      <View
                        style={[
                          styles.docIconCircle,
                          formData.docEventProposal
                            ? styles.docIconCircleDone
                            : styles.docIconCircleEmpty,
                        ]}
                      >
                        {formData.docEventProposal ? (
                          <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                            <Path
                              d="M5 13l4 4L19 7"
                              stroke={UX4GColors.white}
                              strokeWidth={3}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </Svg>
                        ) : null}
                      </View>
                      <Text style={styles.docItemLabel}>
                        Concept deck or event proposal
                        <Text style={styles.requiredAsterisk}>*</Text>
                      </Text>
                    </View>

                    <Ux4gButton
                      text={formData.docEventProposal ? 'Replace' : 'Upload'}
                      variant="outline"
                      size="medium"
                      borderColor={UX4GColors.primary300}
                      contentColor={UX4GColors.primary}
                      borderRadius={8}
                      onPress={() => handleUploadDoc('docEventProposal')}
                      style={styles.docActionButton}
                    />

                    <View style={styles.docItemDivider} />

                    {/* Item 2: Estimated event budget sheet */}
                    <View style={styles.docItemRow}>
                      <View
                        style={[
                          styles.docIconCircle,
                          formData.docBudgetSheet
                            ? styles.docIconCircleDone
                            : styles.docIconCircleEmpty,
                        ]}
                      >
                        {formData.docBudgetSheet ? (
                          <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                            <Path
                              d="M5 13l4 4L19 7"
                              stroke={UX4GColors.white}
                              strokeWidth={3}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </Svg>
                        ) : null}
                      </View>
                      <Text style={styles.docItemLabel}>
                        Estimated event budget sheet
                        <Text style={styles.requiredAsterisk}>*</Text>
                      </Text>
                    </View>

                    <Ux4gButton
                      text={formData.docBudgetSheet ? 'Replace' : 'Upload'}
                      variant="outline"
                      size="medium"
                      borderColor={UX4GColors.primary300}
                      contentColor={UX4GColors.primary}
                      borderRadius={8}
                      onPress={() => handleUploadDoc('docBudgetSheet')}
                      style={styles.docActionButton}
                    />
                  </View>
                )}
              </Ux4gCard>
            </View>
          )}

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 4: REVIEW & DECLARATION                                              */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 4 && (
            <View style={styles.formContainer}>
              <Text style={styles.sectionHeading}>Preview Your Application</Text>

              {/* Card 1: Step 1 · Who is applying */}
              <View style={styles.reviewStepCardGreen}>
                <View style={styles.reviewStepCardHeader}>
                  <View style={styles.reviewStepCardHeaderLeft}>
                    <View style={styles.reviewStepIconCircleGreen}>
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
                    <Text style={styles.reviewStepCardTitleGreen}>
                      Step 1 · Who is applying
                    </Text>
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
                <Text style={styles.reviewStepCardSubTextGreen}>
                  {formData.fullName +
                    ', ' +
                    formData.designation +
                    ' · ' +
                    formData.organisationName +
                    ' · vendor record ' +
                    formData.registrationNumber}
                </Text>
              </View>

              {/* Card 2: Step 2 · The event */}
              <View style={styles.reviewStepCardGreen}>
                <View style={styles.reviewStepCardHeader}>
                  <View style={styles.reviewStepCardHeaderLeft}>
                    <View style={styles.reviewStepIconCircleGreen}>
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
                    <Text style={styles.reviewStepCardTitleGreen}>
                      Step 2 · The event
                    </Text>
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
                <Text style={styles.reviewStepCardSubTextGreen}>
                  {formData.eventName +
                    ' · ' +
                    formData.eventDistrict +
                    ' · ' +
                    formData.startDate +
                    '–' +
                    formData.endDate +
                    ', ' +
                    formData.eventDuration +
                    ' · ' +
                    formData.expectedFootfall +
                    ' expected'}
                </Text>
              </View>

              {/* Card 3: Step 3 · Documents */}
              <View
                style={
                  totalDocsAttached === 4
                    ? styles.reviewStepCardGreen
                    : styles.reviewStepCardAmber
                }
              >
                <View style={styles.reviewStepCardHeader}>
                  <View style={styles.reviewStepCardHeaderLeft}>
                    <View
                      style={
                        totalDocsAttached === 4
                          ? styles.reviewStepIconCircleGreen
                          : styles.reviewStepIconCircleAmber
                      }
                    >
                      {totalDocsAttached === 4 ? (
                        <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                          <Path
                            d="M5 13l4 4L19 7"
                            stroke={UX4GColors.white}
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </Svg>
                      ) : (
                        <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                          <Path
                            d="M12 7v6M12 17h.01"
                            stroke={UX4GColors.white}
                            strokeWidth={2.8}
                            strokeLinecap="round"
                          />
                        </Svg>
                      )}
                    </View>
                    <Text
                      style={
                        totalDocsAttached === 4
                          ? styles.reviewStepCardTitleGreen
                          : styles.reviewStepCardTitleAmber
                      }
                    >
                      Step 3 · Documents
                    </Text>
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
                <Text
                  style={
                    totalDocsAttached === 4
                      ? styles.reviewStepCardSubTextGreen
                      : styles.reviewStepCardSubTextAmber
                  }
                >
                  {totalDocsAttached === 4
                    ? 'All four documents attached and verified'
                    : totalDocsAttached === 1
                    ? 'One of four attached — three still outstanding'
                    : totalDocsAttached === 2
                    ? 'Two of four attached — two still outstanding'
                    : totalDocsAttached === 3
                    ? 'Three of four attached — one still outstanding'
                    : 'None of four attached — four still outstanding'}
                </Text>
              </View>

              {/* Section: Declaration */}
              <Text style={[styles.sectionHeading, { marginTop: 20 }]}>Declaration</Text>

              <TouchableOpacity
                style={styles.declarationRow}
                activeOpacity={0.8}
                onPress={() =>
                  updateField('declarationTrueKnowledge', !formData.declarationTrueKnowledge)
                }
              >
                <View
                  style={[
                    styles.declarationCheckboxBox,
                    formData.declarationTrueKnowledge && styles.declarationCheckboxBoxActive,
                    errors.declarationTrueKnowledge && styles.declarationCheckboxBoxError,
                  ]}
                >
                  {formData.declarationTrueKnowledge && (
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
                  Everything I have entered is true to the best of my knowledge
                </Text>
                <Text style={styles.declarationAsterisk}>*</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.declarationRow}
                activeOpacity={0.8}
                onPress={() =>
                  updateField('declarationVenueRight', !formData.declarationVenueRight)
                }
              >
                <View
                  style={[
                    styles.declarationCheckboxBox,
                    formData.declarationVenueRight && styles.declarationCheckboxBoxActive,
                    errors.declarationVenueRight && styles.declarationCheckboxBoxError,
                  ]}
                >
                  {formData.declarationVenueRight && (
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
                  I confirm the organisation has the right to hold this event at this venue on these dates
                </Text>
                <Text style={styles.declarationAsterisk}>*</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* STEP 5: SUBMITTED (FINAL SCREEN)                                         */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {step === 5 && (
            <View style={styles.formContainer}>
              <View style={styles.step5TopContainer}>
                <View style={styles.step5SuccessOuterCircle}>
                  <View style={styles.step5SuccessInnerCircle}>
                    <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
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

                <Text style={styles.step5Heading}>Application submitted</Text>

                <Text style={styles.step5Description}>
                  {(formData.eventName || 'Netoyed Festival 2026') +
                    ' is with the Directorate of Tourism. Nothing is owed — this application asks the department for support, it does not charge you.'}
                </Text>
              </View>

              {/* Green Details Card */}
              <View style={styles.step5DetailsCard}>
                <View style={styles.step5DetailRow}>
                  <Text style={styles.step5DetailLabel}>Application number</Text>
                  <Text style={styles.step5DetailValue}>
                    {formData.applicationNumber || 'TE-2026-000000'}
                  </Text>
                </View>

                <View style={styles.step5DetailRow}>
                  <Text style={styles.step5DetailLabel}>Event</Text>
                  <Text style={styles.step5DetailValue}>
                    {formData.eventName || 'ABC Festival 2026'}
                  </Text>
                </View>

                <View style={styles.step5DetailRow}>
                  <Text style={styles.step5DetailLabel}>Event dates</Text>
                  <Text style={styles.step5DetailValue}>10–15 December 2026</Text>
                </View>

                <View style={styles.step5DetailRow}>
                  <Text style={styles.step5DetailLabel}>Submitted on</Text>
                  <Text style={styles.step5DetailValue}>
                    {'18 September 2026, ' + savedTime + ' IST'}
                  </Text>
                </View>

                <View style={styles.step5DetailRow}>
                  <Text style={styles.step5DetailLabel}>Assessed by</Text>
                  <Text style={styles.step5DetailValue}>
                    {'Directorate of Tourism,\n' + (formData.eventDistrict || 'Dehradun')}
                  </Text>
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
              {step === 4
                ? 'Submit application'
                : step === 5
                ? 'Go to my applications'
                : 'Continue'}
            </Text>
          </TouchableOpacity>

          {step !== 5 && (
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
                <Text style={styles.drawerTitle}>Sponsorship Steps</Text>
                <TouchableOpacity onPress={() => setIsNavMenuOpen(false)}>
                  <Text style={styles.drawerCloseText}>✕</Text>
                </TouchableOpacity>
              </View>
              {[1, 2, 3, 4, 5].map((s) => (
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
    height: 38,
    backgroundColor: UX4GColors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  govLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagBox: {
    width: 22,
    height: 14,
    borderRadius: 2,
    overflow: 'hidden',
    marginRight: 8,
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.4)',
  },
  govText: {
    color: UX4GColors.white,
    fontSize: 12.5,
    fontWeight: '600',
  },
  whiteHeader: {
    height: 58,
    backgroundColor: UX4GColors.white,
    borderBottomWidth: 1,
    borderBottomColor: UX4GColors.neutral100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hamburgerBtn: {
    width: 38,
    height: 38,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: UX4GColors.primary200,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 9,
  },
  hamburgerBar: {
    width: 18,
    height: 2,
    backgroundColor: UX4GColors.primary,
    marginVertical: 1.5,
    borderRadius: 1,
  },
  autoSaveBanner: {
    marginHorizontal: 16,
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: UX4GColors.green50,
    alignItems: 'flex-end',
  },
  autoSaveRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  autoSaveText: {
    fontSize: 12.5,
    color: UX4GColors.green800,
    fontWeight: '600',
  },
  stepperContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  progressSegmentsRow: {
    flexDirection: 'row',
    gap: 6,
  },
  progressSegment: {
    flex: 1,
    height: 6,
    borderRadius: 3,
  },
  progressSegmentActive: {
    backgroundColor: UX4GColors.primary,
  },
  progressSegmentInactive: {
    backgroundColor: UX4GColors.neutral300,
  },
  stepCounterText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    color: UX4GColors.neutral800,
    marginTop: 12,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  navArrowBtnActive: {
    borderWidth: 1.5,
    borderColor: UX4GColors.primary,
    backgroundColor: UX4GColors.white,
  },
  navArrowBtnDisabled: {
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    backgroundColor: UX4GColors.white,
  },
  stepperCenterInfo: {
    flex: 1,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  stepTitleText: {
    fontSize: 16,
    fontWeight: '700',
    color: UX4GColors.primary,
    textAlign: 'center',
  },
  stepSubtitleText: {
    fontSize: 12.5,
    color: UX4GColors.neutral600,
    textAlign: 'center',
    marginTop: 2,
    lineHeight: 17,
  },
  stepperDivider: {
    height: 1,
    backgroundColor: UX4GColors.neutral200,
    marginTop: 12,
  },
  mainScrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  formContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: '700',
    color: UX4GColors.neutral900,
    marginBottom: 12,
  },
  sectionSubheading: {
    fontSize: 13.5,
    color: UX4GColors.neutral600,
    marginTop: -4,
    marginBottom: 16,
    lineHeight: 18,
  },
  docCardContainer: {
    padding: 16,
    marginBottom: 16,
  },
  docCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  docCardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: UX4GColors.neutral900,
  },
  docCardSummaryText: {
    fontSize: 12.5,
    color: UX4GColors.neutral500,
    marginTop: 4,
  },
  docDotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 10,
  },
  docStatusDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  docStatusDotDone: {
    backgroundColor: UX4GColors.green600,
  },
  docStatusDotEmpty: {
    borderWidth: 1.5,
    borderColor: UX4GColors.neutral300,
    backgroundColor: UX4GColors.white,
  },
  docCardContent: {
    marginTop: 16,
  },
  docItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  docIconCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  docIconCircleDone: {
    backgroundColor: UX4GColors.green600,
  },
  docIconCircleEmpty: {
    borderWidth: 1.5,
    borderColor: UX4GColors.neutral300,
    backgroundColor: UX4GColors.white,
  },
  docItemLabel: {
    fontSize: 14.5,
    fontWeight: '600',
    color: UX4GColors.neutral900,
    flex: 1,
  },
  docActionButton: {
    width: '100%',
    height: 44,
    backgroundColor: UX4GColors.white,
  },
  docItemDivider: {
    height: 1,
    backgroundColor: UX4GColors.neutral200,
    marginVertical: 16,
  },
  fieldGroup: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 13.5,
    fontWeight: '600',
    color: UX4GColors.neutral800,
    marginBottom: 6,
  },
  requiredAsterisk: {
    color: UX4GColors.red600,
    fontWeight: '700',
  },
  textInput: {
    backgroundColor: UX4GColors.white,
    borderWidth: 1,
    borderColor: UX4GColors.neutral300,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: UX4GColors.neutral800,
  },
  phoneInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: UX4GColors.neutral300,
    borderRadius: 8,
    backgroundColor: UX4GColors.white,
    overflow: 'hidden',
  },
  phonePrefixBox: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRightWidth: 1,
    borderRightColor: UX4GColors.neutral200,
    backgroundColor: UX4GColors.neutral50,
  },
  phonePrefixText: {
    fontSize: 14,
    color: UX4GColors.neutral600,
    fontWeight: '600',
  },
  phoneTextInput: {
    flex: 1,
    borderWidth: 0,
    borderRadius: 0,
    paddingHorizontal: 12,
  },
  outlineFetchBtn: {
    borderWidth: 1.5,
    borderColor: UX4GColors.primary,
    backgroundColor: UX4GColors.white,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 4,
  },
  outlineFetchBtnText: {
    color: UX4GColors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  foundRecordCard: {
    backgroundColor: UX4GColors.green50,
    borderWidth: 1.5,
    borderColor: UX4GColors.green300,
    borderRadius: 8,
    padding: 12,
    marginTop: 14,
  },
  foundRecordHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  foundRecordTitle: {
    fontSize: 13.5,
    fontWeight: '700',
    color: UX4GColors.green800,
  },
  foundRecordBody: {
    fontSize: 12.5,
    color: UX4GColors.green700,
    lineHeight: 18,
    marginTop: 6,
  },
  dropdownSelectBox: {
    backgroundColor: UX4GColors.white,
    borderWidth: 1,
    borderColor: UX4GColors.neutral300,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 11,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownPlaceholder: {
    fontSize: 14,
    color: UX4GColors.neutral400,
  },
  dropdownSelectedText: {
    fontSize: 14,
    color: UX4GColors.neutral800,
    fontWeight: '500',
  },
  textAreaContainer: {
    backgroundColor: UX4GColors.white,
    borderWidth: 1,
    borderColor: UX4GColors.neutral300,
    borderRadius: 8,
    padding: 10,
  },
  textAreaInput: {
    fontSize: 14,
    color: UX4GColors.neutral800,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  charCounterRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 4,
  },
  charCounterText: {
    fontSize: 11.5,
    color: UX4GColors.neutral400,
  },
  datePickerInput: {
    backgroundColor: UX4GColors.white,
    borderWidth: 1,
    borderColor: UX4GColors.neutral300,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  datePickerText: {
    fontSize: 14,
    color: UX4GColors.neutral800,
  },
  datePickerPlaceholder: {
    fontSize: 14,
    color: UX4GColors.neutral400,
  },
  disabledDurationBox: {
    backgroundColor: UX4GColors.neutral200,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 13,
    justifyContent: 'center',
  },
  disabledDurationText: {
    fontSize: 14,
    color: UX4GColors.neutral800,
    fontWeight: '500',
  },
  currencyInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: UX4GColors.neutral300,
    borderRadius: 8,
    backgroundColor: UX4GColors.white,
    overflow: 'hidden',
  },
  currencySymbolBox: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: UX4GColors.neutral50,
    borderRightWidth: 1,
    borderRightColor: UX4GColors.neutral200,
  },
  currencySymbolText: {
    fontSize: 15,
    fontWeight: '700',
    color: UX4GColors.neutral600,
  },
  currencyTextInput: {
    flex: 1,
    borderWidth: 0,
    borderRadius: 0,
    paddingHorizontal: 12,
  },
  helperNoticeText: {
    fontSize: 11.5,
    color: UX4GColors.neutral500,
    marginTop: 5,
    lineHeight: 16,
  },
  radioGroupWrapper: {
    gap: 8,
  },
  radioItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    borderRadius: 8,
    backgroundColor: UX4GColors.white,
  },
  radioItemRowActive: {
    borderColor: UX4GColors.primary,
    backgroundColor: UX4GColors.primary50,
  },
  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: UX4GColors.neutral400,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  radioOuterActive: {
    borderColor: UX4GColors.primary,
  },
  radioInner: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    backgroundColor: UX4GColors.primary,
  },
  radioLabelText: {
    fontSize: 13.5,
    color: UX4GColors.neutral700,
    flex: 1,
  },
  radioLabelTextActive: {
    color: UX4GColors.primary900,
    fontWeight: '600',
  },
  checkboxGroupWrapper: {
    gap: 10,
  },
  checkboxItemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    paddingVertical: 4,
  },
  checkboxBox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: UX4GColors.neutral400,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  checkboxBoxActive: {
    borderColor: UX4GColors.primary,
    backgroundColor: UX4GColors.primary,
  },
  checkboxLabelText: {
    fontSize: 13,
    color: UX4GColors.neutral700,
    flex: 1,
    lineHeight: 18,
  },
  docUploadCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    borderRadius: 8,
    backgroundColor: UX4GColors.white,
    marginBottom: 10,
  },
  docUploadTitle: {
    fontSize: 13.5,
    fontWeight: '600',
    color: UX4GColors.neutral800,
  },
  docUploadSub: {
    fontSize: 11.5,
    color: UX4GColors.neutral500,
    marginTop: 2,
  },
  docUploadedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 6,
  },
  docUploadedFileName: {
    fontSize: 12,
    color: UX4GColors.green600,
    fontWeight: '600',
  },
  docReuploadBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: UX4GColors.primary,
    borderRadius: 6,
    marginLeft: 8,
  },
  docReuploadBtnText: {
    fontSize: 12,
    color: UX4GColors.primary,
    fontWeight: '600',
  },
  reviewStepCardGreen: {
    backgroundColor: UX4GColors.green50,
    borderWidth: 1,
    borderColor: UX4GColors.green300,
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
  reviewStepCardAmber: {
    backgroundColor: UX4GColors.gold50,
    borderWidth: 1,
    borderColor: UX4GColors.gold300,
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
  reviewStepCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reviewStepCardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  reviewStepIconCircleGreen: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: UX4GColors.green600,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  reviewStepIconCircleAmber: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: UX4GColors.gold600,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  reviewStepCardTitleGreen: {
    fontSize: 14.5,
    fontWeight: '700',
    color: UX4GColors.green800,
  },
  reviewStepCardTitleAmber: {
    fontSize: 14.5,
    fontWeight: '700',
    color: UX4GColors.gold800,
  },
  editPencilBtn: {
    padding: 4,
    marginLeft: 8,
  },
  reviewStepCardSubTextGreen: {
    fontSize: 13,
    color: UX4GColors.green700,
    marginTop: 4,
    marginLeft: 28,
    lineHeight: 18,
  },
  reviewStepCardSubTextAmber: {
    fontSize: 13,
    color: UX4GColors.gold800,
    marginTop: 4,
    marginLeft: 28,
    lineHeight: 18,
  },
  declarationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  declarationCheckboxBox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: UX4GColors.neutral300,
    backgroundColor: UX4GColors.white,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  declarationCheckboxBoxActive: {
    backgroundColor: UX4GColors.primary,
    borderColor: UX4GColors.primary,
  },
  declarationCheckboxBoxError: {
    borderColor: UX4GColors.red600,
  },
  declarationText: {
    flex: 1,
    fontSize: 13.5,
    color: UX4GColors.neutral800,
    lineHeight: 19,
    marginLeft: 10,
  },
  declarationAsterisk: {
    color: UX4GColors.red600,
    fontWeight: '700',
    fontSize: 15,
    marginLeft: 6,
  },
  ackGreenCard: {
    backgroundColor: UX4GColors.green50,
    borderWidth: 1,
    borderColor: UX4GColors.green300,
    borderRadius: 10,
    padding: 16,
    marginTop: 6,
  },
  ackCardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  ackCheckCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: UX4GColors.green600,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 1,
  },
  ackCardMessage: {
    flex: 1,
    fontSize: 14,
    color: UX4GColors.green900,
    lineHeight: 20,
    fontWeight: '500',
  },
  step5TopContainer: {
    alignItems: 'center',
    paddingTop: 16,
    paddingHorizontal: 8,
  },
  step5SuccessOuterCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: UX4GColors.green100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  step5SuccessInnerCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: UX4GColors.green600,
    alignItems: 'center',
    justifyContent: 'center',
  },
  step5Heading: {
    fontSize: 20,
    fontWeight: '700',
    color: UX4GColors.neutral900,
    textAlign: 'center',
    marginBottom: 10,
  },
  step5Description: {
    fontSize: 14,
    color: UX4GColors.neutral600,
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 20,
    paddingHorizontal: 6,
  },
  step5DetailsCard: {
    backgroundColor: UX4GColors.green100,
    borderWidth: 1,
    borderColor: UX4GColors.green300,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  step5DetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 7,
  },
  step5DetailLabel: {
    fontSize: 13.5,
    color: UX4GColors.neutral700,
    flex: 1,
  },
  step5DetailValue: {
    fontSize: 13.5,
    fontWeight: '700',
    color: UX4GColors.neutral900,
    textAlign: 'right',
    flex: 1,
    marginLeft: 8,
    lineHeight: 19,
  },
  submittedContainer: {
    padding: 20,
    alignItems: 'center',
  },
  successIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: UX4GColors.green100,
    borderWidth: 3,
    borderColor: UX4GColors.green300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  submittedTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: UX4GColors.neutral800,
    textAlign: 'center',
  },
  submittedSubtitle: {
    fontSize: 13,
    color: UX4GColors.neutral500,
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 18,
  },
  refNumberBadge: {
    marginTop: 16,
    backgroundColor: UX4GColors.neutral100,
    borderWidth: 1,
    borderColor: UX4GColors.neutral300,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '100%',
  },
  refNumberLabel: {
    fontSize: 11,
    color: UX4GColors.neutral500,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  refNumberValue: {
    fontSize: 16,
    fontWeight: '700',
    color: UX4GColors.primary,
    marginTop: 2,
  },
  timelineCard: {
    width: '100%',
    backgroundColor: UX4GColors.white,
    borderWidth: 1,
    borderColor: UX4GColors.neutral200,
    borderRadius: 8,
    padding: 14,
    marginTop: 16,
  },
  timelineCardTitle: {
    fontSize: 13.5,
    fontWeight: '700',
    color: UX4GColors.neutral800,
    marginBottom: 12,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: UX4GColors.neutral300,
    marginTop: 3,
    marginRight: 10,
  },
  timelineDotDone: {
    backgroundColor: UX4GColors.green600,
  },
  timelineDotActive: {
    backgroundColor: UX4GColors.primary,
  },
  timelineHeading: {
    fontSize: 13,
    fontWeight: '600',
    color: UX4GColors.neutral800,
  },
  timelineDesc: {
    fontSize: 11.5,
    color: UX4GColors.neutral500,
    marginTop: 1,
  },
  downloadReceiptBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: UX4GColors.primary,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginTop: 20,
    width: '100%',
  },
  downloadReceiptBtnText: {
    color: UX4GColors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  restartBtn: {
    marginTop: 12,
    paddingVertical: 12,
    alignItems: 'center',
    width: '100%',
  },
  restartBtnText: {
    fontSize: 13.5,
    color: UX4GColors.primary,
    fontWeight: '600',
  },
  bottomActionBar: {
    paddingHorizontal: 16,
    paddingVertical: 12,
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
    borderWidth: 1.5,
    borderColor: UX4GColors.primary200,
    borderRadius: 8,
    paddingVertical: 13,
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
  },
  sideDrawerContent: {
    width: '80%',
    height: '100%',
    backgroundColor: UX4GColors.white,
    padding: 20,
  },
  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: UX4GColors.neutral200,
  },
  drawerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: UX4GColors.neutral800,
  },
  drawerCloseText: {
    fontSize: 18,
    color: UX4GColors.neutral500,
    padding: 4,
  },
  drawerStepItem: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 6,
  },
  drawerStepItemActive: {
    backgroundColor: UX4GColors.primary50,
  },
  drawerStepItemText: {
    fontSize: 13.5,
    color: UX4GColors.neutral700,
  },
  drawerStepItemTextActive: {
    color: UX4GColors.primary,
    fontWeight: '600',
  },
  textInputError: {
    borderColor: UX4GColors.red600,
    borderWidth: 1.5,
    backgroundColor: UX4GColors.red50,
  },
  phoneInputRowError: {
    borderColor: UX4GColors.red600,
    borderWidth: 1.5,
  },
  textAreaContainerError: {
    borderColor: UX4GColors.red600,
    borderWidth: 1.5,
    backgroundColor: UX4GColors.red50,
  },
  dropdownSelectBoxError: {
    borderColor: UX4GColors.red600,
    borderWidth: 1.5,
    backgroundColor: UX4GColors.red50,
  },
  datePickerInputError: {
    borderColor: UX4GColors.red600,
    borderWidth: 1.5,
    backgroundColor: UX4GColors.red50,
  },
  errorCaptionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 5,
  },
  errorCaptionText: {
    fontSize: 12,
    color: UX4GColors.red600,
    fontWeight: '500',
  },
  fillSampleBtn: {
    alignSelf: 'flex-start',
    backgroundColor: UX4GColors.primary50,
    borderWidth: 1,
    borderColor: UX4GColors.primary200,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 16,
  },
  fillSampleBtnText: {
    fontSize: 12.5,
    color: UX4GColors.primary,
    fontWeight: '600',
  },
  pickerModalContent: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: UX4GColors.white,
    borderRadius: 16,
    padding: 20,
    shadowColor: UX4GColors.neutral1000black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  pickerModalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: UX4GColors.neutral100,
  },
  pickerModalTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: UX4GColors.neutral800,
  },
  pickerModalCloseBtn: {
    padding: 4,
  },
  pickerModalCloseText: {
    fontSize: 18,
    fontWeight: '600',
    color: UX4GColors.neutral500,
  },
  pickerModalSubText: {
    fontSize: 12.5,
    color: UX4GColors.neutral500,
    marginBottom: 12,
  },
  pickerOptionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 6,
    backgroundColor: UX4GColors.neutral50,
  },
  pickerOptionItemActive: {
    backgroundColor: UX4GColors.primary50,
    borderWidth: 1,
    borderColor: UX4GColors.primary200,
  },
  pickerRadioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: UX4GColors.neutral300,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  pickerRadioOuterActive: {
    borderColor: UX4GColors.primary,
  },
  pickerRadioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: UX4GColors.primary,
  },
  pickerOptionText: {
    fontSize: 14,
    color: UX4GColors.neutral700,
    fontWeight: '500',
  },
  pickerOptionTextActive: {
    color: UX4GColors.primary,
    fontWeight: '700',
  },
  pickerOptionSub: {
    fontSize: 11.5,
    color: UX4GColors.neutral500,
    marginTop: 2,
  },
  toastContainer: {
    position: 'absolute',
    bottom: 90,
    left: 20,
    right: 20,
    backgroundColor: UX4GColors.neutral800,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    shadowColor: UX4GColors.neutral1000black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
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
    setIsDownloadingZip(true);
    try {
      const zip = new JSZip();
      const files = buildTourismEventSponsorshipModularProject(fullAppCodeString);
      Object.entries(files).forEach(([path, content]) => {
        zip.file(path, content);
      });
      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ux4g-tourism-event-sponsorship-flow.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      triggerToast('Downloaded modular project ZIP successfully!');
    } catch (err) {
      console.error(err);
      triggerToast('Failed to generate ZIP package.');
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
                  color: isDark ? UX4GColors.neutral100 : UX4GColors.neutral900,
                  letterSpacing: '-0.5px',
                }}
              >
                Tourism Event Sponsorship Flow
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
                Service Pattern • Complete 5-Step Flow
              </span>
            </div>
            <p
              style={{
                fontSize: 14,
                margin: 0,
                color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
                maxWidth: 680,
                lineHeight: 1.5,
              }}
            >
              Government citizen service sponsorship flow for tourism events, festivals, and cultural conclaves.
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
            title="Expo Snack Tourism Event Sponsorship Flow Preview"
          />
        </div>
      </div>
    </Ux4gThemeProvider>
  );
};

export default TourismEventSponsorshipFlowDoc;
