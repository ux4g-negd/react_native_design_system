import { NATIONAL_EMBLEM_SOURCE } from './nationalEmblemSource';

function sliceBetween(source: string, startMarker: string, endMarker: string, label: string): string {
  const startIdx = source.indexOf(startMarker);
  if (startIdx === -1) {
    throw new Error(`Tourism Event Sponsorship modular ZIP extractor could not find start marker for ${label}: ${startMarker}`);
  }
  const endIdx = source.indexOf(endMarker, startIdx + startMarker.length);
  if (endIdx === -1) {
    throw new Error(`Tourism Event Sponsorship modular ZIP extractor could not find end marker for ${label}: ${endMarker}`);
  }
  return source.slice(startIdx, endIdx);
}

function extractScreenJsx(appCode: string, startMarker: string, endMarker: string, label: string): string {
  const startIdx = appCode.indexOf(startMarker);
  if (startIdx === -1) {
    throw new Error(`Could not locate ${label} start marker: ${startMarker}`);
  }
  const viewStart = appCode.indexOf('<View style={styles.formContainer}>', startIdx);
  const endIdx = appCode.indexOf(endMarker, viewStart);
  if (viewStart === -1 || endIdx === -1) {
    throw new Error(`Could not locate JSX boundaries for ${label}`);
  }
  const raw = appCode.slice(viewStart, endIdx).replace(/\n\s*$/, '');
  return raw
    .split('\n')
    .map((line) => {
      if (!line.trim()) return '';
      return line.startsWith('              ') ? '    ' + line.slice(14) : line;
    })
    .join('\n');
}

function buildTypesFile(): string {
  return `export interface RadioOption {
  id: string;
  label: string;
}

export interface DropdownOption {
  id: string;
  label: string;
}

export interface StepMeta {
  title: string;
  subtitle: string;
}

export interface TourismEventSponsorshipFormData {
  // Step 1: Who is applying
  fullName: string;
  designation: string;
  mobileNumber: string;
  emailAddress: string;
  registrationNumber: string;
  isRecordFound: boolean;
  organisationName: string;
  orgType: string;
  incorporationNumber: string;
  registeredAddress: string;
  district: string;

  // Step 2: The event
  eventName: string;
  eventDescription: string;
  expectedFootfall: string;
  venueAddress: string;
  eventDistrict: string;
  startDate: string;
  endDate: string;
  eventDuration: string;

  // Step 3: Documents
  docOrgRegistration: string;
  docProfilePastEvents: string;
  docEventProposal: string;
  docBudgetSheet: string;

  // Step 4: Clearances & Evidence
  policeNocStatus: 'obtained' | 'applied';
  municipalSanctionStatus: 'obtained' | 'applied';
  venuePermissionStatus: 'obtained' | 'applied';
  fireNocStatus: 'obtained' | 'applied';
  conceptDeckFile: string;
  budgetSheetFile: string;
  pastReportFile: string;
  bankChequeFile: string;

  // Step 5: Review & Declarations
  declarationAccuracy: boolean;
  declarationUtilisation: boolean;
  declarationGreenProtocol: boolean;
  isSubmitted: boolean;
  applicationNumber: string;
}
`;
}

function buildFormOptionsFile(): string {
  return `import { DropdownOption, RadioOption } from '../types/tourismEventSponsorship';

export const ORG_TYPES: DropdownOption[] = [
  { id: 'pvt_ltd', label: 'Private Limited Company' },
  { id: 'pub_ltd', label: 'Public Limited Company' },
  { id: 'llp', label: 'Limited Liability Partnership (LLP)' },
  { id: 'partnership', label: 'Registered Partnership Firm' },
  { id: 'proprietorship', label: 'Proprietorship Firm' },
  { id: 'society_trust', label: 'Registered Cultural Society / Trust' },
  { id: 'event_assoc', label: 'Event Management / Industry Association' },
  { id: 'ngo', label: 'Non-Governmental Organisation (NGO)' },
];

export const DISTRICT_OPTIONS: DropdownOption[] = [
  { id: 'mumbai_city', label: 'Mumbai City' },
  { id: 'mumbai_suburban', label: 'Mumbai Suburban' },
  { id: 'pune', label: 'Pune' },
  { id: 'ratnagiri', label: 'Ratnagiri' },
  { id: 'sindhudurg', label: 'Sindhudurg' },
  { id: 'raigad', label: 'Raigad' },
  { id: 'aurangabad', label: 'Chhatrapati Sambhajinagar (Aurangabad)' },
  { id: 'nashik', label: 'Nashik' },
  { id: 'nagpur', label: 'Nagpur' },
  { id: 'kolhapur', label: 'Kolhapur' },
  { id: 'thane', label: 'Thane' },
  { id: 'satara', label: 'Satara' },
];

export const EVENT_CATEGORIES: DropdownOption[] = [
  { id: 'cultural_heritage', label: 'Cultural & Heritage Festival' },
  { id: 'eco_adventure', label: 'Eco-Tourism & Adventure Sports Fest' },
  { id: 'food_culinary', label: 'Food, Wine & Culinary Carnival' },
  { id: 'arts_music', label: 'Music, Arts & Literature Festival' },
  { id: 'traditional_sports', label: 'Traditional Sports & Beach Regatta' },
  { id: 'mice_conclave', label: 'Tourism & Hospitality Conclave / MICE' },
];

export const EVENT_EDITIONS: RadioOption[] = [
  { id: 'new', label: 'First Edition (New Tourism Initiative)' },
  { id: 'recurring', label: 'Recurring Annual Edition (2nd / 3rd+ year)' },
];

export const SPONSORSHIP_TIERS: RadioOption[] = [
  { id: 'title', label: 'Title Sponsor (Up to 30% of eligible budget)' },
  { id: 'associate', label: 'Associate / Powered By Sponsor (Up to 20%)' },
  { id: 'supporting', label: 'Supporting / Co-Host Partner (Up to 10%)' },
];

export const OTHER_SPONSOR_OPTIONS: RadioOption[] = [
  { id: 'yes', label: 'Yes — other commercial / PSU sponsors confirmed' },
  { id: 'no', label: 'No — direct grant requested with organizer co-share' },
];

export const ENTRY_MODEL_OPTIONS: RadioOption[] = [
  { id: 'free', label: 'Free Public Entry (Maximum Community Reach)' },
  { id: 'ticketed', label: 'Ticketed / Regulated Entry' },
  { id: 'hybrid', label: 'Hybrid (Free General Access + VIP Ticketed Arena)' },
];

export const CLEARANCE_STATUS_OPTIONS: RadioOption[] = [
  { id: 'obtained', label: 'Obtained & Uploaded' },
  { id: 'applied', label: 'In-Process (Acknowledgement Attached)' },
];

export const FOOTFALL_OPTIONS: DropdownOption[] = [
  { id: 'footfall_1', label: '5,000 – 15,000 Visitors' },
  { id: 'footfall_2', label: '15,000 – 50,000 Visitors' },
  { id: 'footfall_3', label: '50,000 – 1,00,000 Visitors' },
  { id: 'footfall_4', label: '1,00,000+ Visitors (Mega Event)' },
];
`;
}

function buildInitialDataFile(): string {
  return `import { TourismEventSponsorshipFormData } from '../types/tourismEventSponsorship';

export const INITIAL_FORM_DATA: TourismEventSponsorshipFormData = {
  // Step 1: Who is applying
  fullName: 'Rajesh V. Deshmukh',
  designation: 'General Secretary',
  mobileNumber: '9820144821',
  emailAddress: 'rajesh.deshmukh@abcevents.in',
  registrationNumber: 'MA/2023/0041827',
  isRecordFound: true,
  organisationName: 'ABC Tourism & Cultural Promotion Foundation',
  orgType: 'society_trust',
  incorporationNumber: 'MH/2021/SOC/09841',
  registeredAddress: '402, Heritage Plaza, Senapati Bapat Marg, Lower Parel, Mumbai',
  district: 'mumbai_city',

  // Step 2: The event
  eventName: '',
  eventDescription: '',
  expectedFootfall: '',
  venueAddress: '',
  eventDistrict: '',
  startDate: '',
  endDate: '',
  eventDuration: '6 days',

  // Step 3: Documents
  docOrgRegistration: 'MH_Tourism_Vendor_Registration_Certificate.pdf',
  docProfilePastEvents: '',
  docEventProposal: '',
  docBudgetSheet: '',

  // Step 4: Clearances & Evidence
  policeNocStatus: 'obtained',
  municipalSanctionStatus: 'obtained',
  venuePermissionStatus: 'obtained',
  fireNocStatus: 'applied',
  conceptDeckFile: 'Konkan_Fest_2026_Proposal.pdf',
  budgetSheetFile: 'Detailed_Budget_Breakdown.xlsx',
  pastReportFile: 'Konkan_Fest_2025_Audited_Report.pdf',
  bankChequeFile: 'Cancelled_Cheque_ABC_Foundation.pdf',

  // Step 5: Review & Declarations
  declarationAccuracy: true,
  declarationUtilisation: true,
  declarationGreenProtocol: true,
  isSubmitted: false,
  applicationNumber: 'MH-TES-2026-00892',
};
`;
}

function buildReadme(): string {
  return `# UX4G Tourism Event Sponsorship Flow

Official Government Service pattern for State Tourism Event & Cultural Festival Sponsorship Applications.
Constructed using **UX4G React Native Design System** components.

## Architecture
- **5-Step End-to-End Flow**:
  - Step 1: Who is applying (Applicant, MahaAtithi integration, Organisation structure)
  - Step 2: Event details (Genre, Venue, Schedule, Expected footfall, Audience)
  - Step 3: Budget & Sponsorship Claimed (Total cost, Grant request, Tier, Department deliverables)
  - Step 4: Clearances & Evidence (Police, Local body, Fire NOCs, Proposal upload)
  - Step 5: Review & declaration / Acknowledgement receipt
- **Standard Gov Bar**: Ashoka emblem, Union wave logo, accessibility anchor.
- **Auto-Save Pill**: Real-time background sync status.
- **Segmented Stepper**: 5 progress bars with forward/back navigation.

## Quick Start

\`\`\`bash
npm install
npx expo start
\`\`\`
`;
}

export function buildTourismEventSponsorshipModularProject(fullAppCode: string): Record<string, string> {
  const files: Record<string, string> = {};

  files['package.json'] = JSON.stringify(
    {
      name: 'ux4g-tourism-event-sponsorship-flow',
      version: '1.0.0',
      scripts: {
        start: 'expo start',
        android: 'expo start --android',
        ios: 'expo start --ios',
        web: 'expo start --web',
      },
      dependencies: {
        expo: '~51.0.0',
        'expo-status-bar': '~1.12.1',
        react: '18.2.0',
        'react-native': '0.74.5',
        'react-native-svg': '15.2.0',
        'ux4g-react-native-components': 'latest',
      },
      devDependencies: {
        '@types/react': '~18.2.45',
        typescript: '~5.3.3',
      },
      private: true,
    },
    null,
    2
  );

  files['app.json'] = JSON.stringify(
    {
      expo: {
        name: 'Tourism Event Sponsorship Flow',
        slug: 'tourism-event-sponsorship-flow',
        version: '1.0.0',
        orientation: 'portrait',
        userInterfaceStyle: 'light',
        newArchEnabled: true,
      },
    },
    null,
    2
  );

  files['tsconfig.json'] = JSON.stringify(
    {
      extends: 'expo/tsconfig.base',
      compilerOptions: {
        strict: true,
      },
    },
    null,
    2
  );

  files['README.md'] = buildReadme();
  files['App.tsx'] = fullAppCode;
  files['NationalEmblem.tsx'] = NATIONAL_EMBLEM_SOURCE;
  files['src/types/tourismEventSponsorship.ts'] = buildTypesFile();
  files['src/constants/formOptions.ts'] = buildFormOptionsFile();
  files['src/constants/initialFormData.ts'] = buildInitialDataFile();

  return files;
}

