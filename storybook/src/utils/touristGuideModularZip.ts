import { NATIONAL_EMBLEM_SOURCE } from './nationalEmblemSource';

function sliceBetween(source: string, startMarker: string, endMarker: string, label: string): string {
  const startIdx = source.indexOf(startMarker);
  if (startIdx === -1) {
    throw new Error(`Tourist Guide modular ZIP extractor could not find start marker for ${label}: ${startMarker}`);
  }
  const endIdx = source.indexOf(endMarker, startIdx + startMarker.length);
  if (endIdx === -1) {
    throw new Error(`Tourist Guide modular ZIP extractor could not find end marker for ${label}: ${endMarker}`);
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
  return `import { UploadedFile } from 'ux4g-react-native-components';

export interface RadioOption {
  id: string;
  label: string;
}

export interface PaymentModeOption {
  id: string;
  title: string;
  subtitle: string;
}

export interface StepMeta {
  title: string;
  subtitle: string;
}

export interface LanguageProficiency {
  id: string;
  name: string;
  read: boolean;
  write: boolean;
  speak: boolean;
}

export interface TouristGuideFormData {
  // Step 1: About you
  photoCaptured: boolean;
  photoSource: string;
  fullName: string;
  fathersName: string;
  dateOfBirth: string;
  gender: string;
  mobileNumber: string;
  emailAddress: string;
  stateUT: string[];
  district: string[];
  subDistrict: string[];
  cityVillage: string[];
  permanentHouseStreet: string;
  permanentLandmark: string;
  pinCode: string;

  // Step 2: Category & eligibility
  guideCategory: string;
  highestQualification: string[];

  // Step 3: Skills & service area
  selectedLanguageAdd: string[];
  languagesKnown: LanguageProficiency[];
  specialisms: string[];
  yearsGuiding: string;
  districtFilter: string;
  operationDistricts: string[];

  // Step 4: Documents
  docSectionsExpanded: {
    identity: boolean;
    knowledge: boolean;
    specialism: boolean;
    declaration: boolean;
  };
  docFiles: Record<string, UploadedFile[]>;

  // Step 5: Review & declaration
  declarationTruth: boolean;
  declarationPoliceVerification: boolean;

  // Step 6: Fee & payment
  concessionCategory: string;
  feeNonRefundable: boolean;
  paymentMode: string;
  upiId: string;
  selectedNetBank: string[];
  cardHolderName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
}

export type TouristGuideFormErrors = Record<string, string | undefined>;
`;
}

function buildUnionLogoFile(appCode: string): string {
  const unionSlice = sliceBetween(
    appCode,
    'const UnionLogo = () => (',
    'const STEP_METADATA =',
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
  const iconSlice = sliceBetween(
    appCode,
    'const CheckSmallIcon =',
    'const DocumentUploadSlot =',
    'Icons'
  ).trim();

  const exported = iconSlice
    .replace(/^const /gm, 'export const ')
    .replace(
      'export const CheckSmallIcon = ({ size = 11, color = UX4GColors.white }) =>',
      'export const CheckSmallIcon: React.FC<IconProps> = ({ size = 11, color = UX4GColors.white }) =>'
    )
    .replace(
      'export const AvatarPlaceholderSvg = () =>',
      'export const AvatarPlaceholderSvg: React.FC = () =>'
    )
    .replace(
      'export const TrashCanIcon = ({ size = 18, color = UX4GColors.neutral700 }) =>',
      'export const TrashCanIcon: React.FC<IconProps> = ({ size = 18, color = UX4GColors.neutral700 }) =>'
    )
    .replace(
      'export const ChevronUpIcon = ({ size = 16, color = UX4GColors.neutral900 }) =>',
      'export const ChevronUpIcon: React.FC<IconProps> = ({ size = 16, color = UX4GColors.neutral900 }) =>'
    )
    .replace(
      'export const ChevronDownIcon = ({ size = 16, color = UX4GColors.neutral900 }) =>',
      'export const ChevronDownIcon: React.FC<IconProps> = ({ size = 16, color = UX4GColors.neutral900 }) =>'
    )
    .replace(
      'export const PencilOutlineIcon = ({ size = 17, color = UX4GColors.neutral800 }) =>',
      'export const PencilOutlineIcon: React.FC<IconProps> = ({ size = 17, color = UX4GColors.neutral800 }) =>'
    )
    .replace(
      'export const InfoOutlineIcon = ({ size = 16, color = UX4GColors.neutral600 }) =>',
      'export const InfoOutlineIcon: React.FC<IconProps> = ({ size = 16, color = UX4GColors.neutral600 }) =>'
    );

  return `import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { UX4GColors } from 'ux4g-react-native-components';

export interface IconProps {
  size?: number;
  color?: string;
}

${exported}
`;
}

function buildDocumentUploadSlotFile(appCode: string): string {
  const slotSlice = sliceBetween(
    appCode,
    'const DocumentUploadSlot = ({',
    'const getTouristGuideReviewItems =',
    'DocumentUploadSlot'
  ).trim();

  const typedSlot = slotSlice.replace(
    'const DocumentUploadSlot = ({',
    'export const DocumentUploadSlot: React.FC<DocumentUploadSlotProps> = ({'
  );

  return `import React from 'react';
import { View, Text } from 'react-native';
import { Ux4gFileUpload, UX4GColors, UploadedFile } from 'ux4g-react-native-components';
import { CheckSmallIcon } from './Icons';
import { styles } from '../styles/commonStyles';

export interface DocumentUploadSlotProps {
  title: string;
  required?: boolean;
  ruleText: string;
  files: UploadedFile[];
  onFilesChanged: (files: UploadedFile[]) => void;
  maxFiles?: number;
  maxFileSize?: number;
  allowedExtensions?: string[];
  isLast?: boolean;
}

${typedSlot}
`;
}

function buildFormOptionsFile(appCode: string): string {
  const rawBlock = sliceBetween(
    appCode,
    'const STEP_METADATA =',
    'const CheckSmallIcon =',
    'touristGuideFormOptions'
  ).trim();

  const exported = rawBlock
    .replace(/^const /gm, 'export const ')
    .replace('export const STEP_METADATA =', 'export const STEP_METADATA: Record<number, StepMeta> =')
    .replace('export const PHOTO_GUIDELINES =', 'export const PHOTO_GUIDELINES: string[] =')
    .replace('export const GENDER_OPTIONS =', 'export const GENDER_OPTIONS: RadioOption[] =')
    .replace('export const STATES_AND_UTS =', 'export const STATES_AND_UTS: RadioOption[] =')
    .replace('export const DISTRICTS_OPTIONS =', 'export const DISTRICTS_OPTIONS: RadioOption[] =')
    .replace('export const SUB_DISTRICTS =', 'export const SUB_DISTRICTS: RadioOption[] =')
    .replace('export const CITIES_VILLAGES =', 'export const CITIES_VILLAGES: RadioOption[] =')
    .replace('export const GUIDE_CATEGORIES =', 'export const GUIDE_CATEGORIES: RadioOption[] =')
    .replace('export const HIGHEST_QUALIFICATIONS =', 'export const HIGHEST_QUALIFICATIONS: RadioOption[] =')
    .replace('export const LANGUAGE_OPTIONS =', 'export const LANGUAGE_OPTIONS: RadioOption[] =')
    .replace('export const SPECIALISM_OPTIONS =', 'export const SPECIALISM_OPTIONS: RadioOption[] =')
    .replace('export const OPERATION_DISTRICTS =', 'export const OPERATION_DISTRICTS: RadioOption[] =')
    .replace('export const CONCESSION_CATEGORIES =', 'export const CONCESSION_CATEGORIES: RadioOption[] =')
    .replace('export const BANK_OPTIONS =', 'export const BANK_OPTIONS: RadioOption[] =')
    .replace('export const PAYMENT_MODES =', 'export const PAYMENT_MODES: PaymentModeOption[] =');

  return `import { PaymentModeOption, RadioOption, StepMeta } from '../types/touristGuide';

${exported}
`;
}

function buildInitialFormDataFile(appCode: string): string {
  const markerStart = 'const [formData, setFormData] = useState(';
  const idx = appCode.indexOf(markerStart);
  if (idx === -1) throw new Error('Could not find initial tourist guide formData state');
  const objStart = idx + markerStart.length;
  const endMarker = '\n  });\n\n  const [errors';
  const objEnd = appCode.indexOf(endMarker, objStart);
  if (objEnd === -1) throw new Error('Could not find end of initial tourist guide formData state');

  const rawObj = dedentBlock(appCode.slice(objStart, objEnd) + '\n  }', 2).replace(
    /status: 'success'/g,
    'status: UploadStatus.success'
  );

  return `import { UploadStatus } from 'ux4g-react-native-components';
import { TouristGuideFormData } from '../types/touristGuide';

export const createInitialTouristGuideFormData = (): TouristGuideFormData => (${rawObj});
`;
}

function buildCommonStylesFile(appCode: string): string {
  const stylesStart = appCode.indexOf('const STATUSBAR_HEIGHT =');
  if (stylesStart === -1) throw new Error('Could not locate STATUSBAR_HEIGHT');
  const stylesSlice = appCode
    .slice(stylesStart)
    .trim()
    .replace('const STATUSBAR_HEIGHT =', 'export const STATUSBAR_HEIGHT =')
    .replace('const styles = StyleSheet.create(', 'export const styles = StyleSheet.create(');

  return `import { StyleSheet, Platform, StatusBar } from 'react-native';
import { UX4GColors } from 'ux4g-react-native-components';

${stylesSlice}
`;
}

function buildValidatorsFile(): string {
  return `import {
  DISTRICTS_OPTIONS,
  STATES_AND_UTS,
  GUIDE_CATEGORIES,
  HIGHEST_QUALIFICATIONS,
} from '../constants/formOptions';
import {
  RadioOption,
  TouristGuideFormData,
  TouristGuideFormErrors,
} from '../types/touristGuide';

export function parseDateString(str: string): Date | undefined {
  if (!str) return undefined;
  const parts = str.split('/');
  if (parts.length !== 3) return undefined;
  const d = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10) - 1;
  const y = parseInt(parts[2], 10);
  if (isNaN(d) || isNaN(m) || isNaN(y)) return undefined;
  return new Date(y, m, d);
}

export function calculateAgeFromDob(dobStr: string): number {
  const dob = parseDateString(dobStr);
  if (!dob) return 32;
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const mDiff = today.getMonth() - dob.getMonth();
  if (mDiff < 0 || (mDiff === 0 && today.getDate() < dob.getDate())) {
    age -= 1;
  }
  return age > 0 ? age : 32;
}

export function validateTouristGuideStep1(
  formData: TouristGuideFormData
): TouristGuideFormErrors {
  const errs: TouristGuideFormErrors = {};
  if (!formData.photoCaptured) {
    errs.photoCaptured = 'Please take or upload your photograph';
  }
  if (!formData.fullName.trim()) {
    errs.fullName = 'Full name is required';
  }
  if (!formData.fathersName.trim()) {
    errs.fathersName = "Father's name is required";
  }
  if (!formData.dateOfBirth.trim()) {
    errs.dateOfBirth = 'Date of birth is required';
  }
  if (!formData.gender) {
    errs.gender = 'Please select your gender';
  }
  if (!/^[0-9]{10}$/.test(formData.mobileNumber.trim())) {
    errs.mobileNumber = 'Enter a valid 10-digit mobile number';
  }
  if (!/^[^@ ]+@[^@ ]+[.][^@ ]+$/.test(formData.emailAddress.trim())) {
    errs.emailAddress = 'Enter a valid email address';
  }
  if (!formData.stateUT.length) {
    errs.stateUT = 'State / UT is required';
  }
  if (!formData.district.length) {
    errs.district = 'District is required';
  }
  if (!formData.subDistrict.length) {
    errs.subDistrict = 'Sub-district / Tehsil is required';
  }
  if (!formData.cityVillage.length) {
    errs.cityVillage = 'City / Town / Village is required';
  }
  if (!formData.permanentHouseStreet.trim()) {
    errs.permanentHouseStreet = 'House or building number and street is required';
  }
  if (!/^[0-9]{6}$/.test(formData.pinCode.trim())) {
    errs.pinCode = 'Enter a valid 6-digit PIN code';
  }
  return errs;
}

export function validateTouristGuideStep2(
  formData: TouristGuideFormData
): TouristGuideFormErrors {
  const errs: TouristGuideFormErrors = {};
  if (!formData.guideCategory) {
    errs.guideCategory = 'Please select a guide category';
  }
  if (!formData.highestQualification.length) {
    errs.highestQualification = 'Please select the highest qualification you hold';
  }
  return errs;
}

export function validateTouristGuideStep3(
  formData: TouristGuideFormData
): TouristGuideFormErrors {
  const errs: TouristGuideFormErrors = {};
  if (!formData.languagesKnown || formData.languagesKnown.length === 0) {
    errs.languagesKnown = 'Please add at least one language';
  }
  if (!formData.specialisms || formData.specialisms.length === 0) {
    errs.specialisms = 'Please select at least one area of specialisation';
  }
  if (!formData.yearsGuiding.trim()) {
    errs.yearsGuiding = 'Years guiding is required';
  }
  if (!formData.operationDistricts || formData.operationDistricts.length === 0) {
    errs.operationDistricts = 'Please select at least one district';
  }
  return errs;
}

export function validateTouristGuideStep4(
  formData: TouristGuideFormData
): TouristGuideFormErrors {
  const errs: TouristGuideFormErrors = {};
  const df = formData.docFiles || {};
  const requiredKeys = [
    'identity_proof',
    'police_clearance',
    'education_cert',
    'signed_declaration',
  ];
  const missing = requiredKeys.some((k) => !df[k] || df[k].length === 0);
  if (missing) {
    errs.documents = 'Please upload all required (*) documents before continuing.';
  }
  return errs;
}

export function validateTouristGuideStep5(
  formData: TouristGuideFormData
): TouristGuideFormErrors {
  const errs: TouristGuideFormErrors = {};
  if (!formData.declarationTruth) {
    errs.declarationTruth = 'Please confirm that everything you have entered is true';
  }
  if (!formData.declarationPoliceVerification) {
    errs.declarationPoliceVerification =
      'Please agree to police verification of the details you have given';
  }
  return errs;
}

export interface TouristGuideReviewItem {
  stepNum: number;
  title: string;
  subtitle: string;
  isWarning: boolean;
}

export function getTouristGuideReviewItems(
  fd: TouristGuideFormData
): TouristGuideReviewItem[] {
  const findLabel = (arr: RadioOption[], id: string) =>
    (arr.find((x) => x.id === id) || {}).label;
  const fullName = (fd.fullName || '').trim() || 'Saksham Kharbanda';
  const dob = (fd.dateOfBirth || '').trim() || '15 Sep 1994';
  const districtLabel = findLabel(DISTRICTS_OPTIONS, (fd.district || [])[0]) || 'Dehradun';
  const stateLabel = findLabel(STATES_AND_UTS, (fd.stateUT || [])[0]) || 'Uttarakhand';
  const step1Sub = fullName + ' · ' + dob + ' · ' + districtLabel + ', ' + stateLabel;

  const catLabel = findLabel(GUIDE_CATEGORIES, fd.guideCategory) || 'General guide';
  const qualLabel =
    findLabel(HIGHEST_QUALIFICATIONS, (fd.highestQualification || [])[0]) || '10+2';
  const step2Sub = catLabel + ' · ' + qualLabel + ' · meets every threshold';

  const langCount = (fd.languagesKnown || []).length;
  const specCount = (fd.specialisms || []).length;
  const distCount = (fd.operationDistricts || []).length;
  const step3Sub =
    langCount +
    ' language' +
    (langCount === 1 ? '' : 's') +
    ' · ' +
    specCount +
    ' specialism' +
    (specCount === 1 ? '' : 's') +
    ' · ' +
    distCount +
    ' district' +
    (distCount === 1 ? '' : 's');

  const df = fd.docFiles || {};
  const allDocKeys = Object.keys(df);
  const uploadedCount = allDocKeys.filter((k) => df[k] && df[k].length > 0).length;
  const requiredKeys = [
    'identity_proof',
    'police_clearance',
    'education_cert',
    'signed_declaration',
  ];
  const missingReq = requiredKeys.filter((k) => !df[k] || df[k].length === 0).length;
  const docsComplete = missingReq === 0;
  const step4Sub = docsComplete
    ? 'All required documents attached (' + uploadedCount + ' of ' + allDocKeys.length + ' uploaded)'
    : uploadedCount + ' of ' + allDocKeys.length + ' attached — ' + missingReq + ' required still missing';

  return [
    { stepNum: 1, title: 'Step 1 · About you', subtitle: step1Sub, isWarning: false },
    { stepNum: 2, title: 'Step 2 · Category & eligibility', subtitle: step2Sub, isWarning: false },
    { stepNum: 3, title: 'Step 3 · Skills & service area', subtitle: step3Sub, isWarning: false },
    { stepNum: 4, title: 'Step 4 · Documents', subtitle: step4Sub, isWarning: !docsComplete },
  ];
}

export function validateTouristGuideStep6(
  formData: TouristGuideFormData
): TouristGuideFormErrors {
  const errs: TouristGuideFormErrors = {};
  if (!formData.concessionCategory) {
    errs.concessionCategory = 'Please select a concession category';
  }
  if (!formData.feeNonRefundable) {
    errs.feeNonRefundable =
      'Please confirm that you understand the fee is non-refundable once submitted';
  }
  return errs;
}

export function validateTouristGuidePaymentMode(
  formData: TouristGuideFormData
): TouristGuideFormErrors {
  const errs: TouristGuideFormErrors = {};
  if (formData.paymentMode === 'upi') {
    if (!formData.upiId.trim() || !formData.upiId.includes('@')) {
      errs.upiId = 'Enter a valid UPI ID (e.g. name@upi)';
    }
  } else if (formData.paymentMode === 'netbanking') {
    if (!formData.selectedNetBank.length) {
      errs.selectedNetBank = 'Please select your bank';
    }
  } else {
    if (!formData.cardHolderName.trim()) {
      errs.cardHolderName = 'Name on card is required';
    }
    if (!/^[0-9]{12,19}$/.test(formData.cardNumber.replace(/\s+/g, ''))) {
      errs.cardNumber = 'Enter a valid card number';
    }
    if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(formData.cardExpiry.trim())) {
      errs.cardExpiry = 'Use MM/YY format';
    }
    if (!/^[0-9]{3,4}$/.test(formData.cardCvv.trim())) {
      errs.cardCvv = 'Enter a valid CVV';
    }
  }
  return errs;
}

export interface TouristGuideFeeSummary {
  shortRef: string;
  applicationRef: string;
  description: string;
  formattedAmount: string;
  bannerTitle: string;
}

export function getTouristGuideFeeSummary(
  fd: TouristGuideFormData
): TouristGuideFeeSummary {
  const catObj = GUIDE_CATEGORIES.find((c) => c.id === fd.guideCategory);
  const guideLabel = (catObj && catObj.label) || 'General guide';
  const baseFee =
    fd.guideCategory === 'expert' || fd.guideCategory === 'expert_linguistic' ? 1000 : 500;
  let payable = baseFee;
  let bannerTitle = 'No concession claimed — you pay ₹' + payable;

  if (fd.concessionCategory === 'woman') {
    payable = Math.round(baseFee / 2);
    bannerTitle = 'Woman applicant concession — you pay ₹' + payable;
  } else if (fd.concessionCategory === 'sc_st') {
    payable = 0;
    bannerTitle = 'SC / ST concession — ₹0 payable';
  } else if (fd.concessionCategory === 'aspirational_district') {
    payable = 0;
    bannerTitle = 'Aspirational district concession — ₹0 payable';
  }

  return {
    shortRef: 'TG-2026-000000',
    applicationRef: 'Tourist guide licence · TG-2026-000000',
    description: 'Licence fee — ' + guideLabel + ', five-year term',
    formattedAmount: '₹' + payable,
    bannerTitle,
  };
}
`;
}

function buildStep1ScreenFile(appCode: string): string {
  let jsx = extractScreenJsx(
    appCode,
    '{step === 1 ? (',
    ') : step === 2 ? (',
    'Tourist Guide Step 1'
  );

  jsx = jsx.replace('onDateSelected={(d) =>', 'onDateSelected={(d: Date) =>');

  return `import React from 'react';
import { View, Text } from 'react-native';
import {
  Ux4gRadioButton,
  Ux4gInputField,
  Ux4gSelectionDropdown,
  Ux4gDatePicker,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';
import { CheckSmallIcon, AvatarPlaceholderSvg } from '../components/Icons';
import {
  PHOTO_GUIDELINES,
  GENDER_OPTIONS,
  STATES_AND_UTS,
  DISTRICTS_OPTIONS,
  SUB_DISTRICTS,
  CITIES_VILLAGES,
} from '../constants/formOptions';
import { TouristGuideFormData, TouristGuideFormErrors } from '../types/touristGuide';
import { parseDateString } from '../utils/validators';
import { styles } from '../styles/commonStyles';

export interface Step1AboutYouScreenProps {
  formData: TouristGuideFormData;
  errors: TouristGuideFormErrors;
  updateField: <K extends keyof TouristGuideFormData>(
    key: K,
    value: TouristGuideFormData[K]
  ) => void;
  handlePhotoAction: (source: 'camera' | 'upload') => void;
}

export const Step1AboutYouScreen: React.FC<Step1AboutYouScreenProps> = ({
  formData,
  errors,
  updateField,
  handlePhotoAction,
}) => (
${jsx}
);
`;
}

function buildStep2ScreenFile(appCode: string): string {
  const jsx = extractScreenJsx(
    appCode,
    ') : step === 2 ? (',
    ') : step === 3 ? (',
    'Tourist Guide Step 2'
  );

  return `import React from 'react';
import { View, Text } from 'react-native';
import {
  Ux4gRadioButton,
  Ux4gSelectionDropdown,
  Ux4gStatusBanner,
  UX4GColors,
} from 'ux4g-react-native-components';
import {
  GUIDE_CATEGORIES,
  HIGHEST_QUALIFICATIONS,
} from '../constants/formOptions';
import { TouristGuideFormData, TouristGuideFormErrors } from '../types/touristGuide';
import { calculateAgeFromDob } from '../utils/validators';
import { styles } from '../styles/commonStyles';

export interface Step2CategoryEligibilityScreenProps {
  formData: TouristGuideFormData;
  errors: TouristGuideFormErrors;
  updateField: <K extends keyof TouristGuideFormData>(
    key: K,
    value: TouristGuideFormData[K]
  ) => void;
}

export const Step2CategoryEligibilityScreen: React.FC<Step2CategoryEligibilityScreenProps> = ({
  formData,
  errors,
  updateField,
}) => (
${jsx}
);
`;
}

function buildStep3ScreenFile(appCode: string): string {
  const jsx = extractScreenJsx(
    appCode,
    ') : step === 3 ? (',
    ') : step === 4 ? (',
    'Tourist Guide Step 3'
  );

  return `import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  Ux4gCheckbox,
  Ux4gInputField,
  Ux4gSelectionDropdown,
  UX4GColors,
} from 'ux4g-react-native-components';
import { TrashCanIcon } from '../components/Icons';
import {
  LANGUAGE_OPTIONS,
  SPECIALISM_OPTIONS,
  OPERATION_DISTRICTS,
} from '../constants/formOptions';
import {
  LanguageProficiency,
  TouristGuideFormData,
  TouristGuideFormErrors,
} from '../types/touristGuide';
import { styles } from '../styles/commonStyles';

export interface Step3SkillsServiceAreaScreenProps {
  formData: TouristGuideFormData;
  errors: TouristGuideFormErrors;
  updateField: <K extends keyof TouristGuideFormData>(
    key: K,
    value: TouristGuideFormData[K]
  ) => void;
  handleAddLanguage: (ids: string[]) => void;
  toggleLanguageSkill: (langId: string, skillKey: keyof Pick<LanguageProficiency, 'read' | 'write' | 'speak'>) => void;
  removeLanguage: (langId: string) => void;
  toggleSpecialism: (id: string) => void;
  toggleOperationDistrict: (id: string) => void;
}

export const Step3SkillsServiceAreaScreen: React.FC<Step3SkillsServiceAreaScreenProps> = ({
  formData,
  errors,
  updateField,
  handleAddLanguage,
  toggleLanguageSkill,
  removeLanguage,
  toggleSpecialism,
  toggleOperationDistrict,
}) => (
${jsx}
);
`;
}

function buildStep4ScreenFile(appCode: string): string {
  const jsx = extractScreenJsx(
    appCode,
    ') : step === 4 ? (',
    ') : step === 5 ? (',
    'Tourist Guide Step 4'
  );

  return `import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import {
  Ux4gCard,
  Ux4gStatusBanner,
  UX4GColors,
  UploadedFile,
} from 'ux4g-react-native-components';
import {
  CheckSmallIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from '../components/Icons';
import { DocumentUploadSlot } from '../components/DocumentUploadSlot';
import { TouristGuideFormData, TouristGuideFormErrors } from '../types/touristGuide';
import { styles } from '../styles/commonStyles';

export interface Step4DocumentsScreenProps {
  formData: TouristGuideFormData;
  errors: TouristGuideFormErrors;
  toggleDocSection: (sectionKey: 'identity' | 'knowledge' | 'specialism' | 'declaration') => void;
  setDocSlotFiles: (slotKey: string, files: UploadedFile[]) => void;
}

export const Step4DocumentsScreen: React.FC<Step4DocumentsScreenProps> = ({
  formData,
  errors,
  toggleDocSection,
  setDocSlotFiles,
}) => (
${jsx}
);
`;
}

function buildStep5ScreenFile(appCode: string): string {
  const jsx = extractScreenJsx(
    appCode,
    ') : step === 5 ? (',
    ') : (',
    'Tourist Guide Step 5'
  );

  return `import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  Ux4gStatusBanner,
  Ux4gCheckbox,
  UX4GColors,
} from 'ux4g-react-native-components';
import { PencilOutlineIcon } from '../components/Icons';
import { getTouristGuideReviewItems } from '../utils/validators';
import { TouristGuideFormData, TouristGuideFormErrors } from '../types/touristGuide';
import { styles } from '../styles/commonStyles';

export interface Step5ReviewDeclarationScreenProps {
  formData: TouristGuideFormData;
  errors: TouristGuideFormErrors;
  updateField: <K extends keyof TouristGuideFormData>(
    key: K,
    value: TouristGuideFormData[K]
  ) => void;
  setStep: (step: number) => void;
}

export const Step5ReviewDeclarationScreen: React.FC<Step5ReviewDeclarationScreenProps> = ({
  formData,
  errors,
  updateField,
  setStep,
}) => (
${jsx}
);
`;
}

function buildStep6ScreenFile(appCode: string): string {
  const rawBlock = sliceBetween(
    appCode,
    ') : step === 6 && !isPaymentModeView && !paymentCompleted ? (',
    '\n            )}\n          </View>\n        </ScrollView>',
    'Tourist Guide Step 6'
  );

  const jsx = rawBlock
    .replace(
      ') : step === 6 && !isPaymentModeView && !paymentCompleted ? (',
      '  !isPaymentModeView && !paymentCompleted ? ('
    )
    .split('\n')
    .map((line) => (line.startsWith('            ') ? '  ' + line.slice(12) : line))
    .join('\n') + '\n  )';

  return `import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import {
  Ux4gRadioButton,
  Ux4gCard,
  Ux4gCheckbox,
  Ux4gInputField,
  Ux4gSelectionDropdown,
  Ux4gStatusBanner,
  UX4GColors,
} from 'ux4g-react-native-components';
import { InfoOutlineIcon } from '../components/Icons';
import {
  BANK_OPTIONS,
  CONCESSION_CATEGORIES,
  PAYMENT_MODES,
} from '../constants/formOptions';
import { TouristGuideFeeSummary } from '../utils/validators';
import { TouristGuideFormData, TouristGuideFormErrors } from '../types/touristGuide';
import { styles } from '../styles/commonStyles';

export interface Step6FeePaymentScreenProps {
  formData: TouristGuideFormData;
  errors: TouristGuideFormErrors;
  updateField: <K extends keyof TouristGuideFormData>(
    key: K,
    value: TouristGuideFormData[K]
  ) => void;
  feeSummary: TouristGuideFeeSummary;
  isPaymentModeView: boolean;
  paymentCompleted: boolean;
}

export const Step6FeePaymentScreen: React.FC<Step6FeePaymentScreenProps> = ({
  formData,
  errors,
  updateField,
  feeSummary,
  isPaymentModeView,
  paymentCompleted,
}) => (
${jsx}
);
`;
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
  Ux4gCompactStepper,
  Ux4gButton,
  Ux4gThemeProvider,
  UX4GColors,
  UploadedFile,
} from 'ux4g-react-native-components';
import NationalEmblem from './src/assets/NationalEmblem';
import UnionLogo from './src/assets/UnionLogo';
import { LANGUAGE_OPTIONS, STEP_METADATA } from './src/constants/formOptions';
import { createInitialTouristGuideFormData } from './src/constants/initialFormData';
import {
  LanguageProficiency,
  TouristGuideFormData,
  TouristGuideFormErrors,
} from './src/types/touristGuide';
import {
  validateTouristGuideStep1,
  validateTouristGuideStep2,
  validateTouristGuideStep3,
  validateTouristGuideStep4,
  validateTouristGuideStep5,
  validateTouristGuideStep6,
  validateTouristGuidePaymentMode,
  getTouristGuideFeeSummary,
} from './src/utils/validators';
import { styles } from './src/styles/commonStyles';
import { Step1AboutYouScreen } from './src/screens/Step1AboutYouScreen';
import { Step2CategoryEligibilityScreen } from './src/screens/Step2CategoryEligibilityScreen';
import { Step3SkillsServiceAreaScreen } from './src/screens/Step3SkillsServiceAreaScreen';
import { Step4DocumentsScreen } from './src/screens/Step4DocumentsScreen';
import { Step5ReviewDeclarationScreen } from './src/screens/Step5ReviewDeclarationScreen';
import { Step6FeePaymentScreen } from './src/screens/Step6FeePaymentScreen';

export default function App() {
  const [step, setStep] = useState<number>(6);
  const [savedTime, setSavedTime] = useState<string>('3:14 PM');
  const [isPaymentModeView, setIsPaymentModeView] = useState<boolean>(true);
  const [paymentCompleted, setPaymentCompleted] = useState<boolean>(false);
  const scrollViewRef = useRef<ScrollView | null>(null);

  const [formData, setFormData] = useState<TouristGuideFormData>(
    createInitialTouristGuideFormData
  );
  const [errors, setErrors] = useState<TouristGuideFormErrors>({});

  useEffect(() => {
    setErrors({});
    if (scrollViewRef.current && scrollViewRef.current.scrollTo) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  }, [step]);

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
    alert('Draft saved successfully at Step ' + step + '!');
  };

  const updateField = <K extends keyof TouristGuideFormData>(
    key: K,
    value: TouristGuideFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key as string]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key as string];
        return next;
      });
    }
  };

  const handlePhotoAction = (source: 'camera' | 'upload') => {
    updateField('photoCaptured', true);
    updateField('photoSource', source);
  };

  const handleContinueStep1 = () => {
    const errs = validateTouristGuideStep1(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(2);
  };

  const handleContinueStep2 = () => {
    const errs = validateTouristGuideStep2(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(3);
  };

  const handleAddLanguage = (ids: string[]) => {
    updateField('selectedLanguageAdd', ids);
    if (!ids || !ids.length) return;
    const langId = ids[0];
    const opt = LANGUAGE_OPTIONS.find((l) => l.id === langId);
    if (!opt) return;
    setFormData((prev) => {
      const exists = (prev.languagesKnown || []).some((item) => item.id === langId);
      if (exists) return prev;
      return {
        ...prev,
        languagesKnown: [
          ...(prev.languagesKnown || []),
          { id: langId, name: opt.label, read: true, write: true, speak: true },
        ],
      };
    });
    if (errors.languagesKnown) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.languagesKnown;
        return next;
      });
    }
  };

  const toggleLanguageSkill = (
    langId: string,
    skillKey: keyof Pick<LanguageProficiency, 'read' | 'write' | 'speak'>
  ) => {
    setFormData((prev) => ({
      ...prev,
      languagesKnown: (prev.languagesKnown || []).map((item) =>
        item.id === langId ? { ...item, [skillKey]: !item[skillKey] } : item
      ),
    }));
  };

  const removeLanguage = (langId: string) => {
    setFormData((prev) => ({
      ...prev,
      languagesKnown: (prev.languagesKnown || []).filter((item) => item.id !== langId),
    }));
  };

  const toggleSpecialism = (id: string) => {
    setFormData((prev) => {
      const current = prev.specialisms || [];
      const exists = current.includes(id);
      return {
        ...prev,
        specialisms: exists ? current.filter((x) => x !== id) : [...current, id],
      };
    });
    if (errors.specialisms) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.specialisms;
        return next;
      });
    }
  };

  const toggleOperationDistrict = (id: string) => {
    setFormData((prev) => {
      const current = prev.operationDistricts || [];
      const exists = current.includes(id);
      return {
        ...prev,
        operationDistricts: exists ? current.filter((x) => x !== id) : [...current, id],
      };
    });
    if (errors.operationDistricts) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.operationDistricts;
        return next;
      });
    }
  };

  const handleContinueStep3 = () => {
    const errs = validateTouristGuideStep3(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(4);
  };

  const toggleDocSection = (
    sectionKey: 'identity' | 'knowledge' | 'specialism' | 'declaration'
  ) => {
    setFormData((prev) => ({
      ...prev,
      docSectionsExpanded: {
        ...prev.docSectionsExpanded,
        [sectionKey]: !prev.docSectionsExpanded[sectionKey],
      },
    }));
  };

  const setDocSlotFiles = (slotKey: string, files: UploadedFile[]) => {
    setFormData((prev) => ({
      ...prev,
      docFiles: {
        ...prev.docFiles,
        [slotKey]: files,
      },
    }));
    if (errors.documents) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.documents;
        return next;
      });
    }
  };

  const handleContinueStep4 = () => {
    const errs = validateTouristGuideStep4(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(5);
  };

  const handleContinueStep5 = () => {
    const errs = validateTouristGuideStep5(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(6);
  };

  const handleContinueStep6 = () => {
    if (!isPaymentModeView) {
      const errs = validateTouristGuideStep6(formData);
      if (Object.keys(errs).length > 0) {
        setErrors(errs);
        return;
      }
      setErrors({});
      setIsPaymentModeView(true);
      if (scrollViewRef.current && scrollViewRef.current.scrollTo) {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
      }
      return;
    }

    const errs = validateTouristGuidePaymentMode(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setPaymentCompleted(true);
    alert(
      'Payment of ' +
        getTouristGuideFeeSummary(formData).formattedAmount +
        ' successful! Your application has been submitted.'
    );
  };

  const handleStepperNext = () => {
    if (step === 1) {
      handleContinueStep1();
    } else if (step === 2) {
      handleContinueStep2();
    } else if (step === 3) {
      handleContinueStep3();
    } else if (step === 4) {
      handleContinueStep4();
    } else if (step === 5) {
      handleContinueStep5();
    } else if (step === 6) {
      handleContinueStep6();
    }
  };

  const handleStepperBack = () => {
    if (step === 6 && isPaymentModeView && !paymentCompleted) {
      setIsPaymentModeView(false);
      return;
    }
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const activeMeta = STEP_METADATA[step] || {
    title: 'Step ' + step,
    subtitle: 'Tourist guide registration workflow.',
  };
  const feeSummary = getTouristGuideFeeSummary(formData);

  return (
    <Ux4gThemeProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor={UX4GColors.white} />

        {/* Government App Header */}
        <View style={styles.headerBar}>
          <View style={styles.headerLeft}>
            <NationalEmblem width={28} height={36} />
            <View style={styles.headerBrandDivider} />
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
          {/* Floating Auto-saved Status Banner above the main card */}
          <Ux4gStatusBanner
            variant="successLight"
            title=""
            leadingIcon={<View />}
            trailingIcon={
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <Svg width={17} height={17} viewBox="0 0 24 24" fill="none">
                  <Circle cx="12" cy="12" r="9.5" stroke={UX4GColors.green} strokeWidth="1.8" />
                  <Path
                    d="M8.5 12.2L10.8 14.5L15.8 9.5"
                    stroke={UX4GColors.green}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
                <Text style={styles.savedBannerText}>{'Saved ' + savedTime}</Text>
              </View>
            }
            contentAlignment="right"
            backgroundColor={UX4GColors.green50}
            borderColor={UX4GColors.transparent}
            height={42}
            marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
            containerStyle={styles.savedBannerContainer}
            paddingStyle={{ paddingVertical: 2, paddingHorizontal: 14 }}
          />

          <View style={styles.mainCard}>
            {/* 6-Step Compact Stepper Header using official UX4G Component */}
            <Ux4gCompactStepper
              totalSteps={6}
              currentStep={step}
              layout="centeredBetween"
              stepLabel={activeMeta.title}
              description={
                step === 6 && isPaymentModeView && !paymentCompleted
                  ? 'Choose how you would like to pay ' + feeSummary.formattedAmount + '.'
                  : activeMeta.subtitle
              }
              onPrevious={handleStepperBack}
              onNext={handleStepperNext}
              activeColor={UX4GColors.primary}
              inactiveColor={UX4GColors.neutral300}
              cumulative={true}
              style={{ padding: 0, marginVertical: 4 }}
            />

            <View style={styles.stepperBottomDivider} />

            {step === 1 ? (
              <Step1AboutYouScreen
                formData={formData}
                errors={errors}
                updateField={updateField}
                handlePhotoAction={handlePhotoAction}
              />
            ) : step === 2 ? (
              <Step2CategoryEligibilityScreen
                formData={formData}
                errors={errors}
                updateField={updateField}
              />
            ) : step === 3 ? (
              <Step3SkillsServiceAreaScreen
                formData={formData}
                errors={errors}
                updateField={updateField}
                handleAddLanguage={handleAddLanguage}
                toggleLanguageSkill={toggleLanguageSkill}
                removeLanguage={removeLanguage}
                toggleSpecialism={toggleSpecialism}
                toggleOperationDistrict={toggleOperationDistrict}
              />
            ) : step === 4 ? (
              <Step4DocumentsScreen
                formData={formData}
                errors={errors}
                toggleDocSection={toggleDocSection}
                setDocSlotFiles={setDocSlotFiles}
              />
            ) : step === 5 ? (
              <Step5ReviewDeclarationScreen
                formData={formData}
                errors={errors}
                updateField={updateField}
                setStep={setStep}
              />
            ) : (
              <Step6FeePaymentScreen
                formData={formData}
                errors={errors}
                updateField={updateField}
                feeSummary={feeSummary}
                isPaymentModeView={isPaymentModeView}
                paymentCompleted={paymentCompleted}
              />
            )}
          </View>
        </ScrollView>

        {/* Pinned Bottom Action Bar */}
        <View style={styles.bottomActionBar}>
          <Ux4gButton
            text={
              step === 5
                ? 'Continue to payment'
                : step === 6
                  ? 'Pay ' + feeSummary.formattedAmount
                  : 'Continue'
            }
            variant="primary"
            size="large"
            height={48}
            backgroundColor={UX4GColors.primary}
            contentColor={UX4GColors.white}
            borderRadius={8}
            onPress={handleStepperNext}
            style={{ width: '100%' }}
          />
          <View style={{ height: 10 }} />
          <Ux4gButton
            text="Save as draft"
            variant="outline"
            size="large"
            height={48}
            backgroundColor={UX4GColors.white}
            contentColor={UX4GColors.primary}
            borderColor={UX4GColors.primary200}
            borderWidth={1}
            borderRadius={8}
            onPress={handleSaveDraft}
            style={{ width: '100%' }}
          />
        </View>
      </SafeAreaView>
    </Ux4gThemeProvider>
  );
}
`;
}

export function buildTouristGuideModularProject(fullAppCodeString: string): Record<string, string> {
  const normalizedCode = fullAppCodeString.replace(/\r\n/g, '\n');

  return {
    'package.json': JSON.stringify(
      {
        name: 'ux4g-tourist-guide-registration-flow',
        version: '1.0.0',
        description:
          '6-Step Tourist guide Registration Flow built exclusively with UX4G React Native components',
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
          name: 'Tourist Guide Registration',
          slug: 'ux4g-tourist-guide-registration-flow',
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
      '# Tourist guide Registration Flow (UX4G React Native)',
      '',
      'A modular government service pattern for **Tourist guide Registration (6-Step Workflow, Screen 1)** built using official **UX4G Design System** React Native components.',
      '',
      '## Project Structure',
      '',
      '```text',
      '├── App.tsx                                    # Root orchestrator, header, StatusBanner, 6-step stepper',
      '├── index.js                                   # Expo entry point',
      '├── package.json',
      '├── tsconfig.json',
      '├── app.json',
      '└── src/',
      '    ├── assets/',
      '    │   ├── NationalEmblem.tsx                 # Official Government of India Emblem SVG',
      '    │   └── UnionLogo.tsx                      # Portal Union.svg brand mark SVG',
      '    ├── components/',
      '    │   ├── DocumentUploadSlot.tsx           # Document upload slot with status indicator',
      '    │   └── Icons.tsx                          # SVG icons',
      '    ├── constants/',
      '    │   ├── formOptions.ts                     # Guidelines, gender, location options & STEP_METADATA',
      '    │   └── initialFormData.ts                 # Initial TouristGuideFormData state factory',
      '    ├── types/',
      '    │   └── touristGuide.ts                    # TypeScript interfaces for form state & validation errors',
      '    ├── utils/',
      '    │   └── validators.ts                      # Step validation rules',
      '    ├── styles/',
      '    │   └── commonStyles.ts                    # Shared StyleSheet using UX4GColors tokens',
      '    └── screens/',
      '        ├── Step1AboutYouScreen.tsx            # Step 1 of 6: Photograph, Applicant, Contact, Location & Address',
      '        ├── Step2CategoryEligibilityScreen.tsx # Step 2 of 6: Category of Registration, Qualification & Eligibility',
      '        ├── Step3SkillsServiceAreaScreen.tsx   # Step 3 of 6: Languages Known, Specialisation & Districts',
      '        ├── Step4DocumentsScreen.tsx           # Step 4 of 6: Grouped Document Uploads',
      '        ├── Step5ReviewDeclarationScreen.tsx   # Step 5 of 6: Application Preview & Declaration',
      '        └── Step6FeePaymentScreen.tsx          # Step 6 of 6: Concession Claimed, Fee Details & Payment',
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
    'src/components/DocumentUploadSlot.tsx': buildDocumentUploadSlotFile(normalizedCode),
    'src/components/Icons.tsx': buildIconsFile(normalizedCode),
    'src/types/touristGuide.ts': buildTypesFile(),
    'src/constants/formOptions.ts': buildFormOptionsFile(normalizedCode),
    'src/constants/initialFormData.ts': buildInitialFormDataFile(normalizedCode),
    'src/utils/validators.ts': buildValidatorsFile(),
    'src/styles/commonStyles.ts': buildCommonStylesFile(normalizedCode),
    'src/screens/Step1AboutYouScreen.tsx': buildStep1ScreenFile(normalizedCode),
    'src/screens/Step2CategoryEligibilityScreen.tsx': buildStep2ScreenFile(normalizedCode),
    'src/screens/Step3SkillsServiceAreaScreen.tsx': buildStep3ScreenFile(normalizedCode),
    'src/screens/Step4DocumentsScreen.tsx': buildStep4ScreenFile(normalizedCode),
    'src/screens/Step5ReviewDeclarationScreen.tsx': buildStep5ScreenFile(normalizedCode),
    'src/screens/Step6FeePaymentScreen.tsx': buildStep6ScreenFile(normalizedCode),
    'App.tsx': buildRootAppFile(),
  };
}
