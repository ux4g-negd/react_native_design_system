import { NATIONAL_EMBLEM_SOURCE } from './nationalEmblemSource';

function sliceBetween(source: string, startMarker: string, endMarker: string, label: string): string {
  const startIdx = source.indexOf(startMarker);
  if (startIdx === -1) {
    throw new Error(`Modular ZIP extractor could not find start marker for ${label}: ${startMarker}`);
  }
  const endIdx = source.indexOf(endMarker, startIdx + startMarker.length);
  if (endIdx === -1) {
    throw new Error(`Modular ZIP extractor could not find end marker for ${label}: ${endMarker}`);
  }
  return source.slice(startIdx, endIdx);
}

function dedentBlock(block: string, spaces: number): string {
  const prefix = ' '.repeat(spaces);
  return block
    .split('\n')
    .map((line) => (line.startsWith(prefix) ? line.slice(spaces) : line))
    .join('\n')
    .trimEnd();
}

function normalizeScreenJsx(raw: string): string {
  let code = raw;

  // Normalize legacy inline draft alert on Steps 1 & 2 to shared handleSaveDraft callback
  code = code.replace(
    /onPress=\{\(\) => \{\s*setSavedTime\([^)]*\);\s*alert\([^)]*\);\s*\}\}/g,
    'onPress={handleSaveDraft}'
  );

  // Align Ux4gSelectionDropdown error prop (caption -> description) without crossing tag boundary
  code = code.replace(
    /(<Ux4gSelectionDropdown(?:(?!\/>)[\s\S])*?)(caption=\{errors\.)/g,
    '$1description={errors.'
  );

  // Align Ux4gInputField numeric keyboard prop to UX4G type="number"
  code = code.replace(/keyboardType="(?:numeric|number-pad)"/g, 'type="number"');

  // Remove invalid SVG Path rx attributes
  code = code.replace(/(<Path[^>]*?)\s+rx=\{\d+\}/g, '$1');

  // Align Step 1 Ux4gDatePicker props to canonical UX4G API
  code = code.replace(
    /<Ux4gDatePicker\s*\n\s*label="Date of commencement \*"\s*\n\s*value=\{formData\.dateOfCommencement\}\s*\n\s*onValueChange=\{\(v\) => updateField\('dateOfCommencement', v\)\}\s*\n\s*placeholder="Select date"\s*\n\s*size="l"\s*\/>/g,
    `<Ux4gDatePicker
          label="Date of commencement *"
          onDateSelected={(d: Date) =>
            updateField('dateOfCommencement', d.toLocaleDateString('en-GB'))
          }
          placeholder="Select date"
        />`
  );

  // Align Step 1 Ux4gRadioButton (selected/onSelect -> value/groupValue/onChanged)
  code = code.replace(
    /selected=\{formData\.([a-zA-Z0-9_]+) === '([^']+)'\}\s*\n(\s*)onSelect=\{\(\) => updateField\('\1', '\2'\)\}/g,
    "value='$2'\n$3groupValue={formData.$1}\n$3onChanged={(v) => updateField('$1', String(v))}"
  );

  // Align Step 1 Ux4gCheckbox (checked/onCheckChange -> value/onChanged)
  code = code.replace(
    /checked=\{formData\.([a-zA-Z0-9_]+)\.includes\('([^']+)'\)\}\s*\n(\s*)onCheckChange=\{\(chk\) => \{/g,
    'value={formData.$1.includes(\'$2\')}\n$3onChanged={(chk: boolean | null) => {'
  );

  // Align Step 3 Ux4gRadioButton (checked/onPress/activeColor -> value/groupValue/onChanged/color)
  code = code.replace(
    /<Ux4gRadioButton\s*\n(\s*)checked=\{formData\.([a-zA-Z0-9_]+) === '([^']+)'\}\s*\n\s*onPress=\{\(\) => updateField\('\2', '\3'\)\}\s*\n\s*label="([^"]+)"\s*\n\s*activeColor=\{UX4GColors\.primary\}/g,
    "<Ux4gRadioButton\n$1value='$3'\n$1groupValue={formData.$2}\n$1onChanged={(v) => updateField('$2', String(v))}\n$1label=\"$4\"\n$1color={UX4GColors.primary}"
  );

  // Align Step 3 Ux4gCheckbox (checked/onPress -> value/onChanged)
  code = code.replace(
    /<Ux4gCheckbox\s*\n(\s*)checked=\{formData\.([a-zA-Z0-9_]+)\}\s*\n\s*onPress=\{\(\) => updateField\('\2', !formData\.\2\)\}/g,
    "<Ux4gCheckbox\n$1value={formData.$2}\n$1onChanged={(v: boolean | null) => updateField('$2', Boolean(v))}"
  );

  return code;
}

function extractScreenJsx(appCode: string, stepNum: number, nextMarker: string): string {
  const stepHeader = `step === ${stepNum} ? (`;
  const stepIdx = appCode.indexOf(stepHeader);
  if (stepIdx === -1) {
    throw new Error(`Could not locate Step ${stepNum} JSX block`);
  }
  const viewStart = appCode.indexOf('<View style={styles.formContainer}>', stepIdx);
  const endIdx = appCode.indexOf(nextMarker, viewStart);
  if (viewStart === -1 || endIdx === -1) {
    throw new Error(`Could not locate boundaries for Step ${stepNum}`);
  }
  let raw = appCode.slice(viewStart, endIdx).replace(/\n\s*$/, '');
  raw = normalizeScreenJsx(raw);
  return raw
    .split('\n')
    .map((line) => {
      if (!line.trim()) return '';
      return line.startsWith('              ') ? '    ' + line.slice(14) : line;
    })
    .join('\n');
}

function buildTypesFile(): string {
  return `export interface DropdownOption {
  id: string;
  label: string;
}

export interface LandmarkItem {
  id: string;
  type: string;
  place: string[];
  distance: string;
  unit: string[];
}

export interface RoomConfig {
  id: string;
  expanded: boolean;
  name: string;
  roomType: string;
  beds: string[];
  tariff: string;
  unit: string[];
  roomArea: string;
  bathrooms: string[];
  bathroomUnit: string[];
  bathroomAreas: string[];
  toilets: string[];
  toiletUnit: string[];
  toiletAreas: string[];
  facilities: string[];
}

export interface UploadedDocFile {
  id: string;
  name: string;
  fileSize: number;
  status: 'uploading' | 'success' | 'error';
  progress: number;
  uri?: string;
  type?: string;
}

export type DocSectionKey = 'ownership' | 'declarations' | 'identity' | 'photographs';

export type DocSlotKey =
  | 'ownership_proof'
  | 'building_map'
  | 'bye_laws_affidavit'
  | 'solvency_affidavit'
  | 'undertaking'
  | 'pledge'
  | 'identity_proof'
  | 'pan_tax'
  | 'exterior_photo'
  | 'room1_photo'
  | 'room2_photo'
  | 'common_photo';

export interface HomestayCategoryInfo {
  id: 'silver' | 'gold' | 'diamond';
  name: string;
  displayName: string;
  range: string;
  subtitle: string;
  specs: string;
  amenities: string;
}

export interface PaymentModeOption {
  id: 'upi' | 'netbanking' | 'card' | 'offline';
  title: string;
  subtitle: string;
}

export interface StepMeta {
  title: string;
  subtitle: string;
}

export interface HomestayFormData {
  // Step 1: Unit & Property details
  unitName: string;
  brandName: string;
  legalEntityName: string;
  promoterName: string;
  orgType: string[];
  firmRegNumber: string;
  dateOfCommencement: string;
  unitOfMeasurement: string[];
  totalLandArea: string;
  builtUpUnit: string[];
  builtUpArea: string;
  totalLettableRooms: string;
  ownership: string;
  buildingPlanApproved: string;
  approachRoadUnit: string[];
  approachRoadWidth: string;
  locationType: string;
  unitWebsite: string;
  roomBookingLink: string;
  landmarks: LandmarkItem[];
  tourismActivities: string[];
  tourismOtherText: string;
  adventureActivities: string[];
  adventureOtherText: string;
  entertainmentActivities: string[];
  entertainmentOtherText: string;

  // Step 2: Location
  whereIsProperty: string;
  pinPlaced: boolean;
  latitude: string;
  longitude: string;
  pinCode: string;
  stateUT: string[];
  district: string[];
  subDistrict: string[];
  cityVillage: string[];
  areaType: string[];
  houseStreet: string;
  landmarkText: string;

  // Step 3: Owner / Applicant Details
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  relationship: string[];
  relationshipFullName: string;
  panNumber: string;
  aadhaarNumber: string;
  showAadhaar: boolean;
  mobileNumber: string;
  otpSent: boolean;
  mobileVerified: boolean;
  emailVerified: boolean;
  otp: string;
  resendTimer: number;
  emailAddress: string;
  landline: string;
  permPinCode: string;
  permStateUT: string[];
  permDistrict: string[];
  permSubDistrict: string[];
  permHouseStreet: string;
  sameAsPermanent: boolean;
  addressOutsideState: boolean;
  applyingCapacity: string;

  // Step 4: Management & Staff
  ownerRunsPersonally: boolean;
  managerName: string;
  managerRelationship: string;
  managerMobile: string;
  managerPinCode: string;
  managerStateUT: string[];
  managerDistrict: string[];
  managerHouseStreet: string;
  totalStaff: string;
  hiredLocally: number;
  isRenewal: boolean;
  previousRegNumber: string;

  // Step 5: Rooms / Accommodation
  rooms: RoomConfig[];

  // Step 6: Amenities, Facilities & Distances
  foodProvided: string;
  drinkingWater: string[];
  hasLobby: boolean;
  lobbyUnit: string[];
  lobbyArea: string;
  hasDiningArea: boolean;
  diningUnit: string[];
  diningArea: string;
  parkingCapacity: string[];
  mandatoryCleanliness: string[];
  mandatoryGuestQuality: string[];
  mandatoryRecords: string[];
  additionalServices: string[];
  additionalComfort: string[];
  ecoFriendlyPractices: string;

  // Step 7: Compliance & Safety Checklist
  safetyDeclarations: string[];
  buildingServicesDeclarations: string[];
  guestSafetyDeclarations: string[];
  fireSafetyDetails: string;
  complianceConfirmed: boolean;

  // Step 8: Documents Upload
  byeLawsNotApplicable: boolean;
  docSectionsExpanded: Record<DocSectionKey, boolean>;
  docFiles: Record<DocSlotKey, UploadedDocFile[]>;

  // Step 9: Review & Declaration
  declTrueKnowledge: boolean;
  declPhysicalInspection: boolean;

  // Step 10: Fee Details
  feeNonRefundableConfirmed: boolean;

  // Screen 11: Payment Mode
  paymentMode: 'upi' | 'netbanking' | 'card' | 'offline';
  upiId: string;
  selectedBank: string[];
  cardHolderName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
  offlineRef: string;
}

export type FormErrors = Record<string, string | undefined>;
`;
}

function buildUnionLogoFile(appCode: string): string {
  const unionSlice = sliceBetween(
    appCode,
    'const UnionLogo = () => (',
    'const TrashOutlineIcon',
    'UnionLogo'
  ).trim();
  return `import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { UX4GColors } from 'ux4g-react-native-components';

export ${unionSlice}

export default UnionLogo;
`;
}

function buildIconsFile(appCode: string): string {
  let iconsSlice = sliceBetween(
    appCode,
    'const TrashOutlineIcon',
    '// UX4G Compact Stepper Component',
    'Icons'
  ).trim();

  iconsSlice = iconsSlice.replace(
    /const ([A-Za-z0-9_]+Icon) = \(\{([^)]+)\}\) => \(/g,
    'export const $1: React.FC<IconProps> = ({$2}: IconProps) => ('
  );

  return `import React from 'react';
import Svg, { Path, Circle, Rect } from 'react-native-svg';
import { UX4GColors } from 'ux4g-react-native-components';

export interface IconProps {
  size?: number;
  color?: string;
}

${iconsSlice}
`;
}

function buildStepperFile(appCode: string): string {
  const stepperSlice = sliceBetween(
    appCode,
    'const Ux4gCompactStepper = ({',
    'const ORGANISATION_TYPES',
    'Ux4gCompactStepper'
  ).trim();

  const typedHeader = `const Ux4gCompactStepper: React.FC<Ux4gCompactStepperProps> = ({
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
}: Ux4gCompactStepperProps) => {`;

  const bodyStart = stepperSlice.indexOf('const resolvedLabel');
  const stepperBody = stepperSlice.slice(bodyStart);

  return `import React from 'react';
import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { UX4GColors } from 'ux4g-react-native-components';

export interface Ux4gCompactStepperProps {
  totalSteps?: number;
  currentStep?: number;
  stepLabel?: string;
  title?: string;
  description?: string;
  subtitle?: string;
  layout?: string;
  onPrevious?: () => void;
  onBackPress?: () => void;
  onNext?: () => void;
  onNextPress?: () => void;
  cumulative?: boolean;
  style?: StyleProp<ViewStyle>;
}

export ${typedHeader}
  ${stepperBody}

export default Ux4gCompactStepper;
`;
}

function buildDocumentUploadSlotFile(appCode: string): string {
  const slotSlice = sliceBetween(
    appCode,
    'const DocumentUploadSlot = ({',
    'const PAYMENT_MODES',
    'DocumentUploadSlot'
  ).trim();

  const bodyStart = slotSlice.indexOf('const isUploaded');
  let slotBody = slotSlice.slice(bodyStart);
  slotBody = slotBody
    .replace(
      'initialFiles={uploadedFiles}',
      'initialFiles={uploadedFiles as unknown as Ux4gUploadFileList}'
    )
    .replace(
      'onFilesChanged={(files) => onFilesChanged && onFilesChanged(files)}',
      'onFilesChanged={(files) => onFilesChanged && onFilesChanged(files as unknown as UploadedDocFile[])}'
    );

  return `import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ux4gFileUpload, UX4GColors } from 'ux4g-react-native-components';
import { CheckSmallIcon } from './Icons';
import { UploadedDocFile } from '../types/homestay';
import { styles } from '../styles/commonStyles';

type Ux4gUploadFileList = NonNullable<React.ComponentProps<typeof Ux4gFileUpload>['initialFiles']>;

export interface DocumentUploadSlotProps {
  title: string;
  required?: boolean;
  ruleText: string;
  downloadLinkText?: string;
  onDownloadFormat?: () => void;
  uploadedFiles?: UploadedDocFile[];
  allowedExtensions?: string[];
  maxFiles?: number;
  onFilesChanged?: (files: UploadedDocFile[]) => void;
  disabled?: boolean;
}

export const DocumentUploadSlot: React.FC<DocumentUploadSlotProps> = ({
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
  ${slotBody}

export default DocumentUploadSlot;
`;
}

function buildFormOptionsFile(appCode: string): string {
  const optionsBlock1 = sliceBetween(
    appCode,
    'const ORGANISATION_TYPES = [',
    'const DocumentUploadSlot = ({',
    'formOptions block 1'
  ).trim();

  const optionsBlock2 = sliceBetween(
    appCode,
    'const PAYMENT_MODES = [',
    'export default function App()',
    'formOptions block 2'
  ).trim();

  const combined = `${optionsBlock1}\n\n${optionsBlock2}`
    .replace(/^const /gm, 'export const ')
    .replace(
      'export const HOMESTAY_CATEGORIES = [',
      'export const HOMESTAY_CATEGORIES: HomestayCategoryInfo[] = ['
    )
    .replace(
      'export const PAYMENT_MODES = [',
      'export const PAYMENT_MODES: PaymentModeOption[] = ['
    )
    .replace(
      'export const LANDMARK_PLACE_OPTIONS = {',
      'export const LANDMARK_PLACE_OPTIONS: Record<string, DropdownOption[]> = {'
    );

  return `import {
  DropdownOption,
  HomestayCategoryInfo,
  PaymentModeOption,
  StepMeta,
} from '../types/homestay';

export const STEP_METADATA: Record<number, StepMeta> = {
  1: {
    title: 'Unit / Property details',
    subtitle: 'Identity of the property and of the legal entity behind it.',
  },
  2: {
    title: 'Location',
    subtitle: 'Where the property physically is, to the depth this jurisdiction requires.',
  },
  3: {
    title: 'Owner / Applicant Details',
    subtitle: 'The person or entity applying, and their addresses.',
  },
  4: {
    title: 'Management & Staff',
    subtitle: 'Who runs the property day to day.',
  },
  5: {
    title: 'Rooms / Accommodation',
    subtitle: 'The lettable inventory.',
  },
  6: {
    title: 'Amenities, Facilities & Distances',
    subtitle: 'What the property offers, and how far it is from things.',
  },
  7: {
    title: 'Compliance & Safety Checklist',
    subtitle: 'The statutory minimums. Some are verified for you; the rest you confirm.',
  },
  8: {
    title: 'Documents Upload',
    subtitle: 'Evidence, with per-slot format, size and count rules.',
  },
  9: {
    title: 'Review',
    subtitle: 'Read back everything before committing.',
  },
  10: {
    title: 'Payment',
    subtitle: 'Fee calculation and transaction.',
  },
};

${combined}
`;
}

function buildInitialFormDataFile(appCode: string): string {
  const markerStart = 'const [formData, setFormData] = useState(';
  const idx = appCode.indexOf(markerStart);
  if (idx === -1) throw new Error('Could not find initial formData state');
  const objStart = idx + markerStart.length;
  const endMarker = '\n  });\n\n  const [errors';
  const objEnd = appCode.indexOf(endMarker, objStart);
  if (objEnd === -1) throw new Error('Could not find end of initial formData state');

  const rawObj = dedentBlock(appCode.slice(objStart, objEnd) + '\n  }', 2);

  return `import { HomestayFormData } from '../types/homestay';

export const createInitialFormData = (): HomestayFormData => (${rawObj});
`;
}

function buildCommonStylesFile(appCode: string): string {
  const stylesStart = appCode.indexOf('const STATUSBAR_HEIGHT =');
  if (stylesStart === -1) throw new Error('Could not locate STATUSBAR_HEIGHT');
  let stylesSlice = appCode.slice(stylesStart).trim();
  stylesSlice = stylesSlice
    .replace('const STATUSBAR_HEIGHT =', 'export const STATUSBAR_HEIGHT =')
    .replace('const styles = StyleSheet.create(', 'export const styles = StyleSheet.create(');

  return `import { StyleSheet, Platform, StatusBar } from 'react-native';
import { UX4GColors } from 'ux4g-react-native-components';

${stylesSlice}
`;
}

function buildFeeCalculatorFile(): string {
  return `import { HOMESTAY_CATEGORIES, ROOM_TYPES } from '../constants/formOptions';
import { DocSlotKey, HomestayCategoryInfo, RoomConfig, UploadedDocFile } from '../types/homestay';

export function getRoomSummary(room: RoomConfig): string {
  const parts: string[] = [];
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
}

export function getHighestTariff(rooms: RoomConfig[] = []): number {
  let highest = 0;
  rooms.forEach((r) => {
    const t = parseInt(r.tariff, 10);
    if (!isNaN(t) && t > highest) highest = t;
  });
  return highest;
}

export function getTotalBeds(rooms: RoomConfig[] = []): number {
  return rooms.reduce((acc, r) => acc + (parseInt((r.beds && r.beds[0]) || '0', 10) || 0), 0);
}

export function getAutoCategory(highestTariff: number): HomestayCategoryInfo {
  if (highestTariff >= 6000) return HOMESTAY_CATEGORIES[2];
  if (highestTariff >= 3000) return HOMESTAY_CATEGORIES[1];
  return HOMESTAY_CATEGORIES[0];
}

export function getAreaTypeDisplay(areaType: string[] = []): string {
  const areaTypeId = areaType[0] || 'rural';
  if (areaTypeId === 'urban') return 'Urban Municipal area';
  if (areaTypeId === 'semi_urban') return 'Semi-Urban area';
  return 'Gram Panchayat area';
}

export function calculatePayableFee(autoCategory: HomestayCategoryInfo): {
  payableFee: number;
  formattedFee: string;
} {
  const payableFee =
    autoCategory.id === 'diamond' ? 8000 : autoCategory.id === 'gold' ? 5000 : 3000;
  return {
    payableFee,
    formattedFee: '₹' + payableFee.toLocaleString('en-IN'),
  };
}

export function getMissingDocsText(df: Partial<Record<DocSlotKey, UploadedDocFile[]>> = {}): string {
  const missing: string[] = [];
  if (!df.ownership_proof || df.ownership_proof.length === 0) missing.push('Proof of ownership or lease');
  if (!df.solvency_affidavit || df.solvency_affidavit.length === 0) missing.push('Affidavit of solvency');
  if (!df.undertaking || df.undertaking.length === 0) missing.push('Undertaking');
  if (!df.pledge || df.pledge.length === 0) missing.push('Pledge');
  if (!df.identity_proof || df.identity_proof.length === 0) missing.push('Identity proof');
  const r2Count = (df.room2_photo || []).length;
  if (r2Count < 2) missing.push('Room 2 photographs (' + r2Count + ' of 2)');
  return missing.join('  •  ');
}
`;
}

function buildValidatorsFile(): string {
  return `import { FormErrors, HomestayFormData } from '../types/homestay';

export function validateStep1(formData: HomestayFormData): FormErrors {
  const errs: FormErrors = {};
  if (!formData.unitName.trim()) errs.unitName = 'Name of the unit is required';
  if (!formData.legalEntityName.trim()) errs.legalEntityName = 'Legal entity name is required';
  if (!formData.promoterName.trim()) errs.promoterName = 'Promoter name is required';
  const roomCnt = parseInt(formData.totalLettableRooms, 10);
  if (formData.totalLettableRooms.trim() && (isNaN(roomCnt) || roomCnt < 1 || roomCnt > 20)) {
    errs.totalLettableRooms = 'Enter a valid room count between 1 and 20';
  }
  return errs;
}

export function validateStep2(formData: HomestayFormData): FormErrors {
  const errs: FormErrors = {};
  if (!formData.whereIsProperty.trim()) errs.whereIsProperty = 'Property location link is required';
  if (!/^\d{6}$/.test(formData.pinCode.trim())) errs.pinCode = 'Enter a valid 6-digit PIN code';
  if (!formData.stateUT.length) errs.stateUT = 'State / UT is required';
  if (!formData.district.length) errs.district = 'District is required';
  if (!formData.subDistrict.length) errs.subDistrict = 'Sub-district is required';
  if (!formData.cityVillage.length) errs.cityVillage = 'City / Town / Village is required';
  if (!formData.houseStreet.trim()) errs.houseStreet = 'House or building number and street is required';
  return errs;
}

export function validateStep3(formData: HomestayFormData): FormErrors {
  const errs: FormErrors = {};
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
  return errs;
}

export function validateStep4(formData: HomestayFormData): FormErrors {
  const errs: FormErrors = {};
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
  return errs;
}

export function validateStep5(formData: HomestayFormData): {
  errs: FormErrors;
  firstInvalidRoomIdx: number;
} {
  const errs: FormErrors = {};
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
  return { errs, firstInvalidRoomIdx };
}

export function validateStep6(formData: HomestayFormData): FormErrors {
  const errs: FormErrors = {};
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
  return errs;
}

export function validateStep7(formData: HomestayFormData): FormErrors {
  const errs: FormErrors = {};
  if (!formData.fireSafetyDetails || formData.fireSafetyDetails.trim().length < 10) {
    errs.fireSafetyDetails = 'Please describe installed fire safety equipment (at least 10 characters).';
  }
  if (!formData.complianceConfirmed) {
    errs.complianceConfirmed = 'Please confirm the declaration above to continue.';
  }
  return errs;
}

export function validateStep9(formData: HomestayFormData): FormErrors {
  const errs: FormErrors = {};
  if (!formData.declTrueKnowledge) {
    errs.declTrueKnowledge = 'Please confirm that everything entered is true.';
  }
  if (!formData.declPhysicalInspection) {
    errs.declPhysicalInspection = 'Please agree to a physical inspection of the property.';
  }
  return errs;
}

export function validateStep10(formData: HomestayFormData): FormErrors {
  const errs: FormErrors = {};
  if (!formData.feeNonRefundableConfirmed) {
    errs.feeNonRefundableConfirmed = 'Please confirm that the fee is non-refundable before proceeding.';
  }
  return errs;
}

export function validatePayment(formData: HomestayFormData): FormErrors {
  const errs: FormErrors = {};
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
  return errs;
}
`;
}

function buildScreens(appCode: string): Record<string, string> {
  const jsx1 = extractScreenJsx(appCode, 1, ') : step === 2 ? (');
  const jsx2 = extractScreenJsx(appCode, 2, ') : step === 3 ? (');
  const jsx3 = extractScreenJsx(appCode, 3, ') : step === 4 ? (');
  const jsx4 = extractScreenJsx(appCode, 4, ') : step === 5 ? (');
  const jsx5 = extractScreenJsx(appCode, 5, ') : step === 6 ? (');
  const jsx6 = extractScreenJsx(appCode, 6, ') : step === 7 ? (');
  const jsx7 = extractScreenJsx(appCode, 7, ') : step === 8 ? (');
  const jsx8 = extractScreenJsx(appCode, 8, ') : step === 9 ? (');
  const jsx9 = extractScreenJsx(appCode, 9, ') : step === 10 ? (');
  const jsx10 = extractScreenJsx(appCode, 10, ') : step === 11 ? (');
  const jsx11 = extractScreenJsx(appCode, 11, ') : null}\n          </View>\n        </ScrollView>');

  return {
    'src/screens/Step1UnitPropertyScreen.tsx': `import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  Ux4gInputField,
  Ux4gSelectionDropdown,
  Ux4gDatePicker,
  Ux4gRadioButton,
  Ux4gCheckbox,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';
import { TrashOutlineIcon } from '../components/Icons';
import {
  ORGANISATION_TYPES,
  LAND_UNITS,
  LANDMARK_PLACE_OPTIONS,
} from '../constants/formOptions';
import { FormErrors, HomestayFormData } from '../types/homestay';
import { styles } from '../styles/commonStyles';

export interface Step1UnitPropertyScreenProps {
  formData: HomestayFormData;
  errors: FormErrors;
  updateField: <K extends keyof HomestayFormData>(key: K, value: HomestayFormData[K]) => void;
  handleContinueStep1: () => void;
  handleSaveDraft: () => void;
}

export const Step1UnitPropertyScreen: React.FC<Step1UnitPropertyScreenProps> = ({
  formData,
  errors,
  updateField,
  handleContinueStep1,
  handleSaveDraft,
}) => (
${jsx1}
);
`,

    'src/screens/Step2LocationScreen.tsx': `import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import {
  Ux4gInputField,
  Ux4gSelectionDropdown,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';
import { CrosshairsGpsIcon } from '../components/Icons';
import {
  STATES_AND_UTS,
  DISTRICTS_UTTARAKHAND,
  TEHSILS_DEHRADUN,
  CITIES_MUSSOORIE,
  AREA_TYPES,
} from '../constants/formOptions';
import { FormErrors, HomestayFormData } from '../types/homestay';
import { styles } from '../styles/commonStyles';

export interface Step2LocationScreenProps {
  formData: HomestayFormData;
  errors: FormErrors;
  updateField: <K extends keyof HomestayFormData>(key: K, value: HomestayFormData[K]) => void;
  handleSetLocationPin: () => void;
  handleContinueStep2: () => void;
  handleSaveDraft: () => void;
}

export const Step2LocationScreen: React.FC<Step2LocationScreenProps> = ({
  formData,
  errors,
  updateField,
  handleSetLocationPin,
  handleContinueStep2,
  handleSaveDraft,
}) => (
${jsx2}
);
`,

    'src/screens/Step3OwnerApplicantScreen.tsx': `import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {
  Ux4gInputField,
  Ux4gRadioButton,
  Ux4gDatePicker,
  Ux4gSelectionDropdown,
  Ux4gPanInputField,
  Ux4gAadhaarInputField,
  Ux4gOtpInput,
  Ux4gCheckbox,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';
import { InfoOutlineIcon } from '../components/Icons';
import {
  RELATIONSHIP_OPTIONS,
  STATES_AND_UTS,
  DISTRICTS_UTTARAKHAND,
  TEHSILS_DEHRADUN,
} from '../constants/formOptions';
import { FormErrors, HomestayFormData } from '../types/homestay';
import { styles } from '../styles/commonStyles';

export interface Step3OwnerApplicantScreenProps {
  formData: HomestayFormData;
  errors: FormErrors;
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
  updateField: <K extends keyof HomestayFormData>(key: K, value: HomestayFormData[K]) => void;
  handleContinueStep3: () => void;
  handleSaveDraft: () => void;
}

export const Step3OwnerApplicantScreen: React.FC<Step3OwnerApplicantScreenProps> = ({
  formData,
  errors,
  setErrors,
  updateField,
  handleContinueStep3,
  handleSaveDraft,
}) => (
${jsx3}
);
`,

    'src/screens/Step4ManagementStaffScreen.tsx': `import React from 'react';
import { View, Text, TextInput } from 'react-native';
import {
  Ux4gCheckbox,
  Ux4gInputField,
  Ux4gRadioButton,
  Ux4gSelectionDropdown,
  Ux4gSlider,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';
import { InfoOutlineIcon } from '../components/Icons';
import { STATES_AND_UTS, DISTRICTS_UTTARAKHAND } from '../constants/formOptions';
import { FormErrors, HomestayFormData } from '../types/homestay';
import { styles } from '../styles/commonStyles';

export interface Step4ManagementStaffScreenProps {
  formData: HomestayFormData;
  errors: FormErrors;
  updateField: <K extends keyof HomestayFormData>(key: K, value: HomestayFormData[K]) => void;
  handleContinueStep4: () => void;
  handleSaveDraft: () => void;
}

export const Step4ManagementStaffScreen: React.FC<Step4ManagementStaffScreenProps> = ({
  formData,
  errors,
  updateField,
  handleContinueStep4,
  handleSaveDraft,
}) => (
${jsx4}
);
`,

    'src/screens/Step5RoomsAccommodationScreen.tsx': `import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  Ux4gCard,
  Ux4gInputField,
  Ux4gRadioButton,
  Ux4gSelectionDropdown,
  Ux4gCheckbox,
  Ux4gDivider,
  Ux4gPaginationDotted,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  CopyOutlineIcon,
  InfoOutlineIcon,
} from '../components/Icons';
import {
  ROOM_TYPES,
  BEDS_OPTIONS,
  AREA_UNITS,
  COUNT_OPTIONS,
  FACILITY_OPTIONS,
  HOMESTAY_CATEGORIES,
} from '../constants/formOptions';
import {
  FormErrors,
  HomestayCategoryInfo,
  HomestayFormData,
  RoomConfig,
} from '../types/homestay';
import { styles } from '../styles/commonStyles';

export interface Step5RoomsAccommodationScreenProps {
  formData: HomestayFormData;
  errors: FormErrors;
  copyDropdownRoomIdx: number | null;
  setCopyDropdownRoomIdx: React.Dispatch<React.SetStateAction<number | null>>;
  toggleRoomExpanded: (roomIdx: number) => void;
  getRoomSummary: (room: RoomConfig) => string;
  copyRoomFrom: (targetIdx: number, sourceIdx: number) => void;
  updateRoomField: <K extends keyof RoomConfig>(roomIdx: number, field: K, val: RoomConfig[K]) => void;
  updateRoomSubArea: (
    roomIdx: number,
    kind: 'bathroom' | 'toilet',
    subIdx: number,
    val: string
  ) => void;
  toggleRoomFacility: (roomIdx: number, facilityId: string) => void;
  highestTariff: number;
  autoCategory: HomestayCategoryInfo;
  categorySlideIndex: number;
  setCategorySlideIndex: React.Dispatch<React.SetStateAction<number>>;
  handleContinueStep5: () => void;
  handleSaveDraft: () => void;
}

export const Step5RoomsAccommodationScreen: React.FC<Step5RoomsAccommodationScreenProps> = ({
  formData,
  errors,
  copyDropdownRoomIdx,
  setCopyDropdownRoomIdx,
  toggleRoomExpanded,
  getRoomSummary,
  copyRoomFrom,
  updateRoomField,
  updateRoomSubArea,
  toggleRoomFacility,
  highestTariff,
  autoCategory,
  categorySlideIndex,
  setCategorySlideIndex,
  handleContinueStep5,
  handleSaveDraft,
}) => (
${jsx5}
);
`,

    'src/screens/Step6AmenitiesFacilitiesScreen.tsx': `import React from 'react';
import { View, Text } from 'react-native';
import {
  Ux4gRadioButton,
  Ux4gCheckbox,
  Ux4gSelectionDropdown,
  Ux4gInputField,
  Ux4gTextArea,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';
import { InfoOutlineIcon } from '../components/Icons';
import {
  FOOD_OPTIONS,
  DRINKING_WATER_OPTIONS,
  AREA_UNITS,
  PARKING_CAPACITY_OPTIONS,
  MANDATORY_CLEANLINESS_OPTIONS,
  MANDATORY_GUEST_QUALITY_OPTIONS,
  MANDATORY_RECORDS_OPTIONS,
  ADDITIONAL_SERVICES_OPTIONS,
  ADDITIONAL_COMFORT_OPTIONS,
} from '../constants/formOptions';
import { FormErrors, HomestayFormData } from '../types/homestay';
import { styles } from '../styles/commonStyles';

type MultiSelectField =
  | 'drinkingWater'
  | 'mandatoryCleanliness'
  | 'mandatoryGuestQuality'
  | 'mandatoryRecords'
  | 'additionalServices'
  | 'additionalComfort'
  | 'safetyDeclarations'
  | 'buildingServicesDeclarations'
  | 'guestSafetyDeclarations';

export interface Step6AmenitiesFacilitiesScreenProps {
  formData: HomestayFormData;
  errors: FormErrors;
  updateField: <K extends keyof HomestayFormData>(key: K, value: HomestayFormData[K]) => void;
  toggleArrayItem: (field: MultiSelectField, itemId: string) => void;
  handleContinueStep6: () => void;
  handleSaveDraft: () => void;
}

export const Step6AmenitiesFacilitiesScreen: React.FC<Step6AmenitiesFacilitiesScreenProps> = ({
  formData,
  errors,
  updateField,
  toggleArrayItem,
  handleContinueStep6,
  handleSaveDraft,
}) => (
${jsx6}
);
`,

    'src/screens/Step7ComplianceSafetyScreen.tsx': `import React from 'react';
import { View, Text } from 'react-native';
import {
  Ux4gCheckbox,
  Ux4gStatusBanner,
  Ux4gTextArea,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';
import { InfoOutlineIcon } from '../components/Icons';
import {
  VERIFIED_BY_DEPT_ITEMS,
  SAFETY_DECLARATION_OPTIONS,
  BUILDING_SERVICES_OPTIONS,
  GUEST_SAFETY_OPTIONS,
} from '../constants/formOptions';
import { FormErrors, HomestayFormData } from '../types/homestay';
import { styles } from '../styles/commonStyles';

type MultiSelectField =
  | 'drinkingWater'
  | 'mandatoryCleanliness'
  | 'mandatoryGuestQuality'
  | 'mandatoryRecords'
  | 'additionalServices'
  | 'additionalComfort'
  | 'safetyDeclarations'
  | 'buildingServicesDeclarations'
  | 'guestSafetyDeclarations';

export interface Step7ComplianceSafetyScreenProps {
  formData: HomestayFormData;
  errors: FormErrors;
  updateField: <K extends keyof HomestayFormData>(key: K, value: HomestayFormData[K]) => void;
  toggleArrayItem: (field: MultiSelectField, itemId: string) => void;
  handleContinueStep7: () => void;
  handleSaveDraft: () => void;
}

export const Step7ComplianceSafetyScreen: React.FC<Step7ComplianceSafetyScreenProps> = ({
  formData,
  errors,
  updateField,
  toggleArrayItem,
  handleContinueStep7,
  handleSaveDraft,
}) => (
${jsx7}
);
`,

    'src/screens/Step8DocumentsUploadScreen.tsx': `import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  Ux4gStatusBanner,
  Ux4gCard,
  Ux4gCheckbox,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  CheckSmallIcon,
} from '../components/Icons';
import { DocumentUploadSlot } from '../components/DocumentUploadSlot';
import {
  DocSectionKey,
  DocSlotKey,
  HomestayFormData,
  UploadedDocFile,
} from '../types/homestay';
import { styles } from '../styles/commonStyles';

export interface Step8DocumentsUploadScreenProps {
  formData: HomestayFormData;
  toggleDocSection: (secKey: DocSectionKey) => void;
  setDocSlotFiles: (slotKey: DocSlotKey, files: UploadedDocFile[]) => void;
  updateField: <K extends keyof HomestayFormData>(key: K, value: HomestayFormData[K]) => void;
  getMissingDocsText: () => string;
  handleContinueStep8: () => void;
  handleSaveDraft: () => void;
}

export const Step8DocumentsUploadScreen: React.FC<Step8DocumentsUploadScreenProps> = ({
  formData,
  toggleDocSection,
  setDocSlotFiles,
  updateField,
  getMissingDocsText,
  handleContinueStep8,
  handleSaveDraft,
}) => (
${jsx8}
);
`,

    'src/screens/Step9ReviewScreen.tsx': `import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  Ux4gStatusBanner,
  Ux4gCheckbox,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';
import { PencilOutlineIcon, InfoOutlineIcon } from '../components/Icons';
import {
  FormErrors,
  HomestayCategoryInfo,
  HomestayFormData,
} from '../types/homestay';
import { styles } from '../styles/commonStyles';

export interface Step9ReviewScreenProps {
  formData: HomestayFormData;
  errors: FormErrors;
  autoCategory: HomestayCategoryInfo;
  totalBeds: number;
  highestTariff: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updateField: <K extends keyof HomestayFormData>(key: K, value: HomestayFormData[K]) => void;
  handleContinueStep9: () => void;
  handleSaveDraft: () => void;
}

export const Step9ReviewScreen: React.FC<Step9ReviewScreenProps> = ({
  formData,
  errors,
  autoCategory,
  totalBeds,
  highestTariff,
  setStep,
  updateField,
  handleContinueStep9,
  handleSaveDraft,
}) => (
${jsx9}
);
`,

    'src/screens/Step10FeeDetailsScreen.tsx': `import React from 'react';
import { View, Text } from 'react-native';
import {
  Ux4gCard,
  Ux4gDivider,
  Ux4gCheckbox,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';
import { InfoOutlineIcon } from '../components/Icons';
import {
  FormErrors,
  HomestayCategoryInfo,
  HomestayFormData,
} from '../types/homestay';
import { styles } from '../styles/commonStyles';

export interface Step10FeeDetailsScreenProps {
  formData: HomestayFormData;
  errors: FormErrors;
  autoCategory: HomestayCategoryInfo;
  areaTypeDisplay: string;
  formattedFee: string;
  updateField: <K extends keyof HomestayFormData>(key: K, value: HomestayFormData[K]) => void;
  handleContinueStep10: () => void;
  handleSaveDraft: () => void;
}

export const Step10FeeDetailsScreen: React.FC<Step10FeeDetailsScreenProps> = ({
  formData,
  errors,
  autoCategory,
  areaTypeDisplay,
  formattedFee,
  updateField,
  handleContinueStep10,
  handleSaveDraft,
}) => (
${jsx10}
);
`,

    'src/screens/Step11PaymentModeScreen.tsx': `import React from 'react';
import { View, Text } from 'react-native';
import {
  Ux4gCard,
  Ux4gRadioButton,
  Ux4gInputField,
  Ux4gSelectionDropdown,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';
import { PAYMENT_MODES, NETBANKING_BANKS } from '../constants/formOptions';
import { FormErrors, HomestayFormData } from '../types/homestay';
import { styles } from '../styles/commonStyles';

export interface Step11PaymentModeScreenProps {
  formData: HomestayFormData;
  errors: FormErrors;
  formattedFee: string;
  updateField: <K extends keyof HomestayFormData>(key: K, value: HomestayFormData[K]) => void;
  handlePayNow: () => void;
  handleSaveDraft: () => void;
}

export const Step11PaymentModeScreen: React.FC<Step11PaymentModeScreenProps> = ({
  formData,
  errors,
  formattedFee,
  updateField,
  handlePayNow,
  handleSaveDraft,
}) => (
${jsx11}
);
`,
  };
}

function buildRootAppFile(): string {
  return `import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import {
  Ux4gStatusBanner,
  Ux4gModal,
  Ux4gSpinner,
  Ux4gThemeProvider,
  UX4GColors,
} from 'ux4g-react-native-components';

import NationalEmblem from './src/assets/NationalEmblem';
import UnionLogo from './src/assets/UnionLogo';
import { CheckSmallIcon } from './src/components/Icons';
import { Ux4gCompactStepper } from './src/components/Ux4gCompactStepper';
import { STEP_METADATA } from './src/constants/formOptions';
import { createInitialFormData } from './src/constants/initialFormData';
import { styles } from './src/styles/commonStyles';
import {
  DocSectionKey,
  DocSlotKey,
  FormErrors,
  HomestayFormData,
  RoomConfig,
  UploadedDocFile,
} from './src/types/homestay';
import {
  calculatePayableFee,
  getAreaTypeDisplay,
  getAutoCategory,
  getHighestTariff,
  getMissingDocsText,
  getRoomSummary,
  getTotalBeds,
} from './src/utils/feeCalculator';
import {
  validatePayment,
  validateStep1,
  validateStep10,
  validateStep2,
  validateStep3,
  validateStep4,
  validateStep5,
  validateStep6,
  validateStep7,
  validateStep9,
} from './src/utils/validators';

import { Step1UnitPropertyScreen } from './src/screens/Step1UnitPropertyScreen';
import { Step2LocationScreen } from './src/screens/Step2LocationScreen';
import { Step3OwnerApplicantScreen } from './src/screens/Step3OwnerApplicantScreen';
import { Step4ManagementStaffScreen } from './src/screens/Step4ManagementStaffScreen';
import { Step5RoomsAccommodationScreen } from './src/screens/Step5RoomsAccommodationScreen';
import { Step6AmenitiesFacilitiesScreen } from './src/screens/Step6AmenitiesFacilitiesScreen';
import { Step7ComplianceSafetyScreen } from './src/screens/Step7ComplianceSafetyScreen';
import { Step8DocumentsUploadScreen } from './src/screens/Step8DocumentsUploadScreen';
import { Step9ReviewScreen } from './src/screens/Step9ReviewScreen';
import { Step10FeeDetailsScreen } from './src/screens/Step10FeeDetailsScreen';
import { Step11PaymentModeScreen } from './src/screens/Step11PaymentModeScreen';

export default function App() {
  const [step, setStep] = useState<number>(1);
  const [copyDropdownRoomIdx, setCopyDropdownRoomIdx] = useState<number | null>(null);
  const [categorySlideIndex, setCategorySlideIndex] = useState<number>(0);
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);
  const [paymentCompleted, setPaymentCompleted] = useState<boolean>(false);
  const [savedTime, setSavedTime] = useState<string>('3:14 PM');
  const scrollViewRef = useRef<ScrollView | null>(null);

  const [formData, setFormData] = useState<HomestayFormData>(createInitialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

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
    }, 2400);
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

  const updateField = <K extends keyof HomestayFormData>(
    key: K,
    value: HomestayFormData[K]
  ) => {
    setFormData((prev) => {
      const next: HomestayFormData = { ...prev, [key]: value };
      if (key === 'totalLettableRooms') {
        const count = Math.max(1, Math.min(10, parseInt(String(value), 10) || 1));
        const curRooms = prev.rooms || [];
        if (count !== curRooms.length) {
          const syncedRooms: RoomConfig[] = [];
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
        const maxS = Math.max(1, parseInt(String(value), 10) || 1);
        if ((prev.hiredLocally || 0) > maxS) {
          next.hiredLocally = maxS;
        }
      }
      return next;
    });
    if (errors[key as string]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key as string];
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

  const toggleRoomExpanded = (roomIdx: number) => {
    setFormData((prev) => ({
      ...prev,
      rooms: prev.rooms.map((r, i) => (i === roomIdx ? { ...r, expanded: !r.expanded } : r)),
    }));
  };

  const updateRoomField = <K extends keyof RoomConfig>(
    roomIdx: number,
    field: K,
    val: RoomConfig[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      rooms: prev.rooms.map((r, i) => {
        if (i !== roomIdx) return r;
        const updated: RoomConfig = { ...r, [field]: val };
        if (field === 'bathrooms') {
          const arrVal = val as string[];
          const count = parseInt(arrVal && arrVal[0], 10) || 0;
          const prevAreas = r.bathroomAreas || [];
          const resized: string[] = [];
          for (let k = 0; k < count; k++) {
            resized.push(prevAreas[k] !== undefined ? prevAreas[k] : '');
          }
          updated.bathroomAreas = resized;
        } else if (field === 'toilets') {
          const arrVal = val as string[];
          const count = parseInt(arrVal && arrVal[0], 10) || 0;
          const prevAreas = r.toiletAreas || [];
          const resized: string[] = [];
          for (let k = 0; k < count; k++) {
            resized.push(prevAreas[k] !== undefined ? prevAreas[k] : '');
          }
          updated.toiletAreas = resized;
        }
        return updated;
      }),
    }));
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

  const updateRoomSubArea = (
    roomIdx: number,
    kind: 'bathroom' | 'toilet',
    subIdx: number,
    val: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      rooms: prev.rooms.map((r, i) => {
        if (i !== roomIdx) return r;
        const arrKey = kind === 'bathroom' ? 'bathroomAreas' : 'toiletAreas';
        const nextArr = [...(r[arrKey] || [])];
        nextArr[subIdx] = val;
        return { ...r, [arrKey]: nextArr };
      }),
    }));
  };

  const toggleRoomFacility = (roomIdx: number, facilityId: string) => {
    setFormData((prev) => ({
      ...prev,
      rooms: prev.rooms.map((r, i) => {
        if (i !== roomIdx) return r;
        const cur = r.facilities || [];
        const exists = cur.includes(facilityId);
        return {
          ...r,
          facilities: exists ? cur.filter((f) => f !== facilityId) : [...cur, facilityId],
        };
      }),
    }));
  };

  const copyRoomFrom = (targetIdx: number, sourceIdx: number) => {
    setFormData((prev) => {
      const src = prev.rooms[sourceIdx];
      if (!src) return prev;
      return {
        ...prev,
        rooms: prev.rooms.map((r, i) =>
          i !== targetIdx
            ? r
            : {
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
              }
        ),
      };
    });
    setCopyDropdownRoomIdx(null);
  };

  const toggleArrayItem = (
    field:
      | 'drinkingWater'
      | 'mandatoryCleanliness'
      | 'mandatoryGuestQuality'
      | 'mandatoryRecords'
      | 'additionalServices'
      | 'additionalComfort'
      | 'safetyDeclarations'
      | 'buildingServicesDeclarations'
      | 'guestSafetyDeclarations',
    itemId: string
  ) => {
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

  const toggleDocSection = (secKey: DocSectionKey) => {
    setFormData((prev) => ({
      ...prev,
      docSectionsExpanded: {
        ...prev.docSectionsExpanded,
        [secKey]: !prev.docSectionsExpanded[secKey],
      },
    }));
  };

  const setDocSlotFiles = (slotKey: DocSlotKey, files: UploadedDocFile[]) => {
    setFormData((prev) => ({
      ...prev,
      docFiles: {
        ...prev.docFiles,
        [slotKey]: files || [],
      },
    }));
  };

  const highestTariff = getHighestTariff(formData.rooms);
  const totalBeds = getTotalBeds(formData.rooms);
  const autoCategory = getAutoCategory(highestTariff);
  const areaTypeDisplay = getAreaTypeDisplay(formData.areaType);
  const { formattedFee } = calculatePayableFee(autoCategory);

  const handleContinueStep1 = () => {
    const errs = validateStep1(formData);
    if (Object.keys(errs).length > 0) return setErrors(errs);
    setStep(2);
  };

  const handleContinueStep2 = () => {
    const errs = validateStep2(formData);
    if (Object.keys(errs).length > 0) return setErrors(errs);
    setStep(3);
  };

  const handleContinueStep3 = () => {
    const errs = validateStep3(formData);
    if (Object.keys(errs).length > 0) return setErrors(errs);
    setStep(4);
  };

  const handleContinueStep4 = () => {
    const errs = validateStep4(formData);
    if (Object.keys(errs).length > 0) return setErrors(errs);
    setStep(5);
  };

  const handleContinueStep5 = () => {
    const { errs, firstInvalidRoomIdx } = validateStep5(formData);
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

  const handleContinueStep6 = () => {
    const errs = validateStep6(formData);
    if (Object.keys(errs).length > 0) return setErrors(errs);
    setStep(7);
  };

  const handleContinueStep7 = () => {
    const errs = validateStep7(formData);
    if (Object.keys(errs).length > 0) return setErrors(errs);
    setStep(8);
  };

  const handleContinueStep8 = () => setStep(9);

  const handleContinueStep9 = () => {
    const errs = validateStep9(formData);
    if (Object.keys(errs).length > 0) return setErrors(errs);
    setStep(10);
  };

  const handleContinueStep10 = () => {
    const errs = validateStep10(formData);
    if (Object.keys(errs).length > 0) return setErrors(errs);
    setStep(11);
  };

  const handlePayNow = () => {
    const errs = validatePayment(formData);
    if (Object.keys(errs).length > 0) return setErrors(errs);
    setIsRedirecting(true);
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

  const activeMeta = STEP_METADATA[step > 10 ? 10 : step] || {
    title: 'Step ' + step,
    subtitle: 'Multi-step registration workflow.',
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

            {/* Stepper Header */}
            <Ux4gCompactStepper
              totalSteps={10}
              currentStep={step > 10 ? 10 : step}
              layout="centeredBetween"
              title={activeMeta.title}
              stepLabel={activeMeta.title}
              subtitle={activeMeta.subtitle}
              description={activeMeta.subtitle}
              onBackPress={handleStepperBack}
              onPrevious={handleStepperBack}
              onNextPress={handleStepperNext}
              onNext={handleStepperNext}
              cumulative={true}
              style={{ marginVertical: 4 }}
            />

            <View style={styles.stepperBottomDivider} />

            {step === 1 && (
              <Step1UnitPropertyScreen
                formData={formData}
                errors={errors}
                updateField={updateField}
                handleContinueStep1={handleContinueStep1}
                handleSaveDraft={handleSaveDraft}
              />
            )}
            {step === 2 && (
              <Step2LocationScreen
                formData={formData}
                errors={errors}
                updateField={updateField}
                handleSetLocationPin={handleSetLocationPin}
                handleContinueStep2={handleContinueStep2}
                handleSaveDraft={handleSaveDraft}
              />
            )}
            {step === 3 && (
              <Step3OwnerApplicantScreen
                formData={formData}
                errors={errors}
                setErrors={setErrors}
                updateField={updateField}
                handleContinueStep3={handleContinueStep3}
                handleSaveDraft={handleSaveDraft}
              />
            )}
            {step === 4 && (
              <Step4ManagementStaffScreen
                formData={formData}
                errors={errors}
                updateField={updateField}
                handleContinueStep4={handleContinueStep4}
                handleSaveDraft={handleSaveDraft}
              />
            )}
            {step === 5 && (
              <Step5RoomsAccommodationScreen
                formData={formData}
                errors={errors}
                copyDropdownRoomIdx={copyDropdownRoomIdx}
                setCopyDropdownRoomIdx={setCopyDropdownRoomIdx}
                toggleRoomExpanded={toggleRoomExpanded}
                getRoomSummary={getRoomSummary}
                copyRoomFrom={copyRoomFrom}
                updateRoomField={updateRoomField}
                updateRoomSubArea={updateRoomSubArea}
                toggleRoomFacility={toggleRoomFacility}
                highestTariff={highestTariff}
                autoCategory={autoCategory}
                categorySlideIndex={categorySlideIndex}
                setCategorySlideIndex={setCategorySlideIndex}
                handleContinueStep5={handleContinueStep5}
                handleSaveDraft={handleSaveDraft}
              />
            )}
            {step === 6 && (
              <Step6AmenitiesFacilitiesScreen
                formData={formData}
                errors={errors}
                updateField={updateField}
                toggleArrayItem={toggleArrayItem}
                handleContinueStep6={handleContinueStep6}
                handleSaveDraft={handleSaveDraft}
              />
            )}
            {step === 7 && (
              <Step7ComplianceSafetyScreen
                formData={formData}
                errors={errors}
                updateField={updateField}
                toggleArrayItem={toggleArrayItem}
                handleContinueStep7={handleContinueStep7}
                handleSaveDraft={handleSaveDraft}
              />
            )}
            {step === 8 && (
              <Step8DocumentsUploadScreen
                formData={formData}
                toggleDocSection={toggleDocSection}
                setDocSlotFiles={setDocSlotFiles}
                updateField={updateField}
                getMissingDocsText={() => getMissingDocsText(formData.docFiles)}
                handleContinueStep8={handleContinueStep8}
                handleSaveDraft={handleSaveDraft}
              />
            )}
            {step === 9 && (
              <Step9ReviewScreen
                formData={formData}
                errors={errors}
                autoCategory={autoCategory}
                totalBeds={totalBeds}
                highestTariff={highestTariff}
                setStep={setStep}
                updateField={updateField}
                handleContinueStep9={handleContinueStep9}
                handleSaveDraft={handleSaveDraft}
              />
            )}
            {step === 10 && (
              <Step10FeeDetailsScreen
                formData={formData}
                errors={errors}
                autoCategory={autoCategory}
                areaTypeDisplay={areaTypeDisplay}
                formattedFee={formattedFee}
                updateField={updateField}
                handleContinueStep10={handleContinueStep10}
                handleSaveDraft={handleSaveDraft}
              />
            )}
            {step === 11 && (
              <Step11PaymentModeScreen
                formData={formData}
                errors={errors}
                formattedFee={formattedFee}
                updateField={updateField}
                handlePayNow={handlePayNow}
                handleSaveDraft={handleSaveDraft}
              />
            )}
          </View>
        </ScrollView>

        {/* Payment Redirecting Processing Modal */}
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
`;
}

export function buildHomestayModularProject(fullAppCodeString: string): Record<string, string> {
  const normalizedCode = fullAppCodeString.replace(/\r\n/g, '\n');

  const files: Record<string, string> = {
    'package.json': JSON.stringify(
      {
        name: 'ux4g-homestay-registration-flow',
        version: '1.0.0',
        description:
          'Complete 10-step (11-screen) Homestay Registration flow built with UX4G React Native components',
        main: 'index.js',
        scripts: {
          start: 'expo start',
          android: 'expo start --android',
          ios: 'expo start --ios',
          web: 'expo start --web',
          typecheck: 'tsc --noEmit',
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
          '@types/react': '~18.2.45',
          typescript: '~5.3.3',
        },
      },
      null,
      2
    ),
    'app.json': JSON.stringify(
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
    ),
    'tsconfig.json': JSON.stringify(
      {
        compilerOptions: {
          target: 'esnext',
          module: 'esnext',
          lib: ['esnext', 'dom'],
          allowJs: true,
          jsx: 'react-native',
          noEmit: true,
          isolatedModules: true,
          strict: true,
          moduleResolution: 'bundler',
          allowSyntheticDefaultImports: true,
          esModuleInterop: true,
          skipLibCheck: true,
          resolveJsonModule: true,
        },
        include: ['App.tsx', 'src/**/*'],
      },
      null,
      2
    ),
    'index.js':
      "import { registerRootComponent } from 'expo';\nimport App from './App';\n\nregisterRootComponent(App);\n",
    'README.md': [
      '# Homestay Registration Flow (UX4G React Native)',
      '',
      'A complete 10-step (11-screen) government service pattern for registering a homestay or hospitality unit using **UX4G Design System** components, organized into a clean modular React Native + TypeScript codebase.',
      '',
      '## Project Structure',
      '',
      '```text',
      '├── App.tsx                                    # Root orchestrator, header, stepper & step routing',
      '├── index.js                                   # Expo entry point',
      '├── package.json',
      '├── tsconfig.json',
      '├── app.json',
      '└── src/',
      '    ├── assets/',
      '    │   ├── NationalEmblem.tsx                 # Official Government of India Emblem SVG',
      '    │   └── UnionLogo.tsx                      # Portal brand logo SVG',
      '    ├── components/',
      '    │   ├── Icons.tsx                          # Shared Material outline & custom SVG icons',
      '    │   ├── Ux4gCompactStepper.tsx             # 10-step progress & navigation bar',
      '    │   └── DocumentUploadSlot.tsx             # Statutory document upload slot row',
      '    ├── constants/',
      '    │   ├── formOptions.ts                     # LGD dropdowns, radio/checkbox lists & STEP_METADATA',
      '    │   └── initialFormData.ts                 # Initial HomestayFormData state factory',
      '    ├── types/',
      '    │   └── homestay.ts                        # Shared TypeScript interfaces & types',
      '    ├── utils/',
      '    │   ├── feeCalculator.ts                   # Room tariff, category tier & fee calculators',
      '    │   └── validators.ts                      # Step-by-step & payment form validation rules',
      '    ├── styles/',
      '    │   └── commonStyles.ts                    # Shared StyleSheet & UX4GColors tokens',
      '    └── screens/',
      '        ├── Step1UnitPropertyScreen.tsx        # Step 1: Unit & Property details',
      '        ├── Step2LocationScreen.tsx            # Step 2: Location & Geo-tagging',
      '        ├── Step3OwnerApplicantScreen.tsx      # Step 3: Owner / Applicant & KYC',
      '        ├── Step4ManagementStaffScreen.tsx     # Step 4: Management & Staff details',
      '        ├── Step5RoomsAccommodationScreen.tsx  # Step 5: Rooms, Inventory & Category',
      '        ├── Step6AmenitiesFacilitiesScreen.tsx # Step 6: Amenities & Facilities',
      '        ├── Step7ComplianceSafetyScreen.tsx    # Step 7: Compliance & Safety Checklist',
      '        ├── Step8DocumentsUploadScreen.tsx     # Step 8: Statutory Documents Upload',
      '        ├── Step9ReviewScreen.tsx              # Step 9: Review & Declarations',
      '        ├── Step10FeeDetailsScreen.tsx         # Step 10: Fee Calculation Details',
      '        └── Step11PaymentModeScreen.tsx        # Step 10B: Payment Mode (UPI / Card / NetBanking / Offline)',
      '```',
      '',
      '## Getting Started',
      '',
      '```bash',
      'npm install',
      'npm run typecheck',
      'npx expo start',
      '```',
      '',
    ].join('\n'),
    'src/assets/NationalEmblem.tsx': NATIONAL_EMBLEM_SOURCE,
    'src/assets/UnionLogo.tsx': buildUnionLogoFile(normalizedCode),
    'src/components/Icons.tsx': buildIconsFile(normalizedCode),
    'src/components/Ux4gCompactStepper.tsx': buildStepperFile(normalizedCode),
    'src/components/DocumentUploadSlot.tsx': buildDocumentUploadSlotFile(normalizedCode),
    'src/types/homestay.ts': buildTypesFile(),
    'src/constants/formOptions.ts': buildFormOptionsFile(normalizedCode),
    'src/constants/initialFormData.ts': buildInitialFormDataFile(normalizedCode),
    'src/styles/commonStyles.ts': buildCommonStylesFile(normalizedCode),
    'src/utils/feeCalculator.ts': buildFeeCalculatorFile(),
    'src/utils/validators.ts': buildValidatorsFile(),
    ...buildScreens(normalizedCode),
    'App.tsx': buildRootAppFile(),
  };

  return files;
}
