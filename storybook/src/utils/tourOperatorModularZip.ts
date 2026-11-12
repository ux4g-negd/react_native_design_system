import { NATIONAL_EMBLEM_SOURCE } from './nationalEmblemSource';

function sliceBetween(source: string, startMarker: string, endMarker: string, label: string): string {
  const startIdx = source.indexOf(startMarker);
  if (startIdx === -1) {
    throw new Error(`Tour Operator modular ZIP extractor could not find start marker for ${label}: ${startMarker}`);
  }
  const endIdx = source.indexOf(endMarker, startIdx + startMarker.length);
  if (endIdx === -1) {
    throw new Error(`Tour Operator modular ZIP extractor could not find end marker for ${label}: ${endMarker}`);
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

export interface StaffMember {
  name: string;
  role: string;
  qualification: string;
  yearsInTrade: string;
}

export interface TourOperatorFormData {
  // Step 1: Registration type
  tradeType: string;
  applicationType: string;
  existingRegNumber: string;

  // Step 2: Applicant & firm
  applicantFullName: string;
  fathersName: string;
  relationToFirm: string;
  mobileNumber: string;
  emailAddress: string;
  landline: string;
  tradingName: string;
  legalEntityName: string;
  brandName: string;
  legalEntityType: string[];
  firmRegistrationNumber: string;
  firmPan: string;
  gstNumber: string;
  firmEstablishedDate: string;
  website: string;
  bankName: string[];
  bankBranch: string;

  // Step 3: Office & premises
  officeLocationLink: string;
  pinPlaced: boolean;
  latitude: string;
  longitude: string;
  pinCode: string;
  stateUT: string[];
  district: string[];
  subDistrict: string[];
  cityVillage: string[];
  areaType: string[];
  officeHouseStreet: string;
  officeLandmark: string;
  officeHoldingType: string;
  officeFloorArea: string;
  receptionArea: string;
  buildingCategory: string;
  officeFacilities: string[];

  // Step 4: Services & capability
  activities: string[];
  otherActivity: string;
  paidUpCapital: string;
  previousYearTurnover: string;
  yearsExperienceInTrade: string;
  employeesCount: string;
  highestQualification: string[];
  tourismTrainingExperience: string;
  staffMembers: StaffMember[];

  // Step 5: Documents
  docSectionsExpanded: {
    person: boolean;
    premises: boolean;
    business: boolean;
  };
  docFiles: Record<string, UploadedFile[]>;

  // Step 6: Review & declaration
  declarationTruth: boolean;
  declarationInspection: boolean;

  // Step 7: Fee & payment
  feeNonRefundable: boolean;
  paymentMode: string;
  upiId: string;
  selectedNetBank: string[];
  cardHolderName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
}

export type TourOperatorFormErrors = Record<string, string | undefined>;
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
    'const CrosshairsGpsIcon =',
    'const DocumentUploadSlot =',
    'Icons'
  ).trim();

  const exported = iconSlice
    .replace(/^const /gm, 'export const ')
    .replace(
      'export const CrosshairsGpsIcon = ({ size = 18, color = UX4GColors.neutral800 }) =>',
      'export const CrosshairsGpsIcon: React.FC<IconProps> = ({ size = 18, color = UX4GColors.neutral800 }) =>'
    )
    .replace(
      'export const TrashCanIcon = ({ size = 18, color = UX4GColors.neutral600 }) =>',
      'export const TrashCanIcon: React.FC<IconProps> = ({ size = 18, color = UX4GColors.neutral600 }) =>'
    )
    .replace(
      'export const PlusIcon = ({ size = 16, color = UX4GColors.primary }) =>',
      'export const PlusIcon: React.FC<IconProps> = ({ size = 16, color = UX4GColors.primary }) =>'
    )
    .replace(
      'export const CheckSmallIcon = ({ size = 11, color = UX4GColors.white }) =>',
      'export const CheckSmallIcon: React.FC<IconProps> = ({ size = 11, color = UX4GColors.white }) =>'
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
    'const getTourOperatorReviewItems =',
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
    'const CrosshairsGpsIcon =',
    'tourOperatorFormOptions'
  ).trim();

  const exported = rawBlock
    .replace(/^const /gm, 'export const ')
    .replace('export const STEP_METADATA =', 'export const STEP_METADATA: Record<number, StepMeta> =')
    .replace('export const TRADE_OPTIONS =', 'export const TRADE_OPTIONS: RadioOption[] =')
    .replace('export const APPLICATION_TYPE_OPTIONS =', 'export const APPLICATION_TYPE_OPTIONS: RadioOption[] =')
    .replace('export const RELATION_TO_FIRM_OPTIONS =', 'export const RELATION_TO_FIRM_OPTIONS: RadioOption[] =')
    .replace('export const LEGAL_ENTITY_TYPES =', 'export const LEGAL_ENTITY_TYPES: RadioOption[] =')
    .replace('export const BANK_OPTIONS =', 'export const BANK_OPTIONS: RadioOption[] =')
    .replace('export const STATES_AND_UTS =', 'export const STATES_AND_UTS: RadioOption[] =')
    .replace('export const DISTRICTS_OPTIONS =', 'export const DISTRICTS_OPTIONS: RadioOption[] =')
    .replace('export const SUB_DISTRICTS =', 'export const SUB_DISTRICTS: RadioOption[] =')
    .replace('export const CITIES_VILLAGES =', 'export const CITIES_VILLAGES: RadioOption[] =')
    .replace('export const AREA_TYPES =', 'export const AREA_TYPES: RadioOption[] =')
    .replace('export const OFFICE_HOLDING_OPTIONS =', 'export const OFFICE_HOLDING_OPTIONS: RadioOption[] =')
    .replace('export const BUILDING_TYPE_OPTIONS =', 'export const BUILDING_TYPE_OPTIONS: RadioOption[] =')
    .replace('export const OFFICE_FACILITIES_OPTIONS =', 'export const OFFICE_FACILITIES_OPTIONS: RadioOption[] =')
    .replace('export const FIRM_ACTIVITIES_OPTIONS =', 'export const FIRM_ACTIVITIES_OPTIONS: RadioOption[] =')
    .replace('export const QUALIFICATION_OPTIONS =', 'export const QUALIFICATION_OPTIONS: RadioOption[] =')
    .replace('export const PAYMENT_MODES =', 'export const PAYMENT_MODES: PaymentModeOption[] =');

  return `import { PaymentModeOption, RadioOption, StepMeta } from '../types/tourOperator';

${exported}
`;
}

function buildInitialFormDataFile(appCode: string): string {
  const markerStart = 'const [formData, setFormData] = useState(';
  const idx = appCode.indexOf(markerStart);
  if (idx === -1) throw new Error('Could not find initial tour operator formData state');
  const objStart = idx + markerStart.length;
  const endMarker = '\n  });\n\n  const [errors';
  const objEnd = appCode.indexOf(endMarker, objStart);
  if (objEnd === -1) throw new Error('Could not find end of initial tour operator formData state');

  const rawObj = dedentBlock(appCode.slice(objStart, objEnd) + '\n  }', 2).replace(
    /status: 'success'/g,
    'status: UploadStatus.success'
  );

  return `import { UploadStatus } from 'ux4g-react-native-components';
import { TourOperatorFormData } from '../types/tourOperator';

export const createInitialTourOperatorFormData = (): TourOperatorFormData => (${rawObj});
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
  TRADE_OPTIONS,
  LEGAL_ENTITY_TYPES,
  CITIES_VILLAGES,
  STATES_AND_UTS,
  OFFICE_HOLDING_OPTIONS,
} from '../constants/formOptions';
import {
  RadioOption,
  TourOperatorFormData,
  TourOperatorFormErrors,
} from '../types/tourOperator';

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

export function validateTourOperatorStep1(
  formData: TourOperatorFormData
): TourOperatorFormErrors {
  const errs: TourOperatorFormErrors = {};
  if (!formData.tradeType) {
    errs.tradeType = 'Please select the trade you are applying to register as';
  }
  if (!formData.applicationType) {
    errs.applicationType = 'Please select the type of application';
  }
  if (formData.applicationType === 'renewal' && !formData.existingRegNumber.trim()) {
    errs.existingRegNumber = 'Existing registration number is required for renewal';
  }
  return errs;
}

export function validateTourOperatorStep2(
  formData: TourOperatorFormData
): TourOperatorFormErrors {
  const errs: TourOperatorFormErrors = {};
  if (!formData.applicantFullName.trim()) {
    errs.applicantFullName = 'Full name of the applicant is required';
  }
  if (!formData.fathersName.trim()) {
    errs.fathersName = "Father's name is required";
  }
  if (!formData.relationToFirm) {
    errs.relationToFirm = 'Please select your relation to the firm';
  }
  if (!/^[0-9]{10}$/.test(formData.mobileNumber.trim())) {
    errs.mobileNumber = 'Enter a valid 10-digit mobile number';
  }
  if (!/^[^@ ]+@[^@ ]+[.][^@ ]+$/.test(formData.emailAddress.trim())) {
    errs.emailAddress = 'Enter a valid email address';
  }
  if (!formData.tradingName.trim()) {
    errs.tradingName = 'Trading name of the agency is required';
  }
  if (!formData.legalEntityName.trim()) {
    errs.legalEntityName = 'Legal entity name as per PAN is required';
  }
  if (!formData.legalEntityType.length) {
    errs.legalEntityType = 'Please select the type of legal entity';
  }
  if (!formData.firmRegistrationNumber.trim()) {
    errs.firmRegistrationNumber = 'Firm registration or incorporation number is required';
  }
  if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/i.test(formData.firmPan.trim())) {
    errs.firmPan = 'Enter a valid 10-character PAN (e.g. ABCDE1234F)';
  }
  if (!formData.firmEstablishedDate.trim()) {
    errs.firmEstablishedDate = 'Date the firm was established is required';
  }
  if (!formData.bankName.length) {
    errs.bankName = 'Please select your bank';
  }
  if (!formData.bankBranch.trim()) {
    errs.bankBranch = 'Branch name or IFSC is required';
  }
  return errs;
}

export function validateTourOperatorStep3(
  formData: TourOperatorFormData
): TourOperatorFormErrors {
  const errs: TourOperatorFormErrors = {};
  if (!formData.officeLocationLink.trim()) {
    errs.officeLocationLink = 'Please enter or select the office location link';
  }
  if (!/^[0-9]{6}$/.test(formData.pinCode.trim())) {
    errs.pinCode = 'Enter a valid 6-digit PIN code';
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
  if (!formData.officeHouseStreet.trim()) {
    errs.officeHouseStreet = 'House or building number and street is required';
  }
  if (!formData.officeHoldingType) {
    errs.officeHoldingType = 'Please select how you hold the office';
  }
  if (!formData.officeFloorArea.trim() || parseFloat(formData.officeFloorArea) <= 0) {
    errs.officeFloorArea = 'Enter a valid office floor area in Sq. ft.';
  }
  if (!formData.buildingCategory) {
    errs.buildingCategory = 'Please select whether the building is commercial or residential';
  }
  return errs;
}

export function validateTourOperatorStep4(
  formData: TourOperatorFormData
): TourOperatorFormErrors {
  const errs: TourOperatorFormErrors = {};
  if (!formData.activities.length) {
    errs.activities = 'Please select at least one activity undertaken by the firm';
  }
  if (!formData.paidUpCapital.trim()) {
    errs.paidUpCapital = 'Paid-up capital is required';
  }
  if (!formData.previousYearTurnover.trim()) {
    errs.previousYearTurnover = 'Turnover in the previous financial year is required';
  }
  if (!formData.yearsExperienceInTrade.trim()) {
    errs.yearsExperienceInTrade = 'Years of experience in the trade is required';
  }
  if (!formData.employeesCount.trim()) {
    errs.employeesCount = 'Number of employees is required';
  }
  if (!formData.highestQualification.length) {
    errs.highestQualification = 'Please select the highest qualification of the person responsible';
  }
  if (!formData.tourismTrainingExperience.trim()) {
    errs.tourismTrainingExperience = 'Training or experience in tourism is required';
  }
  (formData.staffMembers || []).forEach((staff, idx) => {
    if (!staff.name.trim()) {
      errs['staff_' + idx + '_name'] = 'Name is required';
    }
    if (!staff.role.trim()) {
      errs['staff_' + idx + '_role'] = 'Role is required';
    }
    if (!staff.qualification.trim()) {
      errs['staff_' + idx + '_qualification'] = 'Qualification is required';
    }
    if (!staff.yearsInTrade.trim()) {
      errs['staff_' + idx + '_yearsInTrade'] = 'Years in the trade is required';
    }
  });
  return errs;
}

export function validateTourOperatorStep5(
  formData: TourOperatorFormData
): TourOperatorFormErrors {
  const errs: TourOperatorFormErrors = {};
  const df = formData.docFiles || {};
  const requiredKeys = [
    'person_photo',
    'person_pan',
    'person_qualification',
    'premises_ownership',
    'business_reg',
    'business_pan',
    'business_bank_report',
    'business_itr',
  ];
  const missing = requiredKeys.some((k) => !df[k] || df[k].length === 0);
  if (missing) {
    errs.documents = 'Please upload all required (*) documents before continuing.';
  }
  return errs;
}

export function validateTourOperatorStep6(
  formData: TourOperatorFormData
): TourOperatorFormErrors {
  const errs: TourOperatorFormErrors = {};
  if (!formData.declarationTruth) {
    errs.declarationTruth = 'Please confirm that everything you have entered is true';
  }
  if (!formData.declarationInspection) {
    errs.declarationInspection = 'Please agree to a physical inspection of the office';
  }
  return errs;
}

export interface TourOperatorReviewItem {
  stepNum: number;
  title: string;
  subtitle: string;
  isWarning: boolean;
}

export function getTourOperatorReviewItems(
  fd: TourOperatorFormData
): TourOperatorReviewItem[] {
  const findLabel = (arr: RadioOption[], id: string) =>
    (arr.find((x) => x.id === id) || {}).label;
  const tradeLabel = findLabel(TRADE_OPTIONS, fd.tradeType) || 'Travel agent';
  const step1Sub =
    fd.applicationType === 'renewal'
      ? tradeLabel + ' · renewal of ' + ((fd.existingRegNumber || '').trim() || 'TA/HP/2021/00412')
      : tradeLabel + ' · New registration';

  const applicantName = (fd.applicantFullName || '').trim() || 'Saksham Kharbanda';
  const tradingName = (fd.tradingName || '').trim() || 'Kharbanda Travels';
  const entityLabel =
    findLabel(LEGAL_ENTITY_TYPES, (fd.legalEntityType || [])[0]) || 'partnership';
  const step2Sub = applicantName + ' · ' + tradingName + ' · ' + entityLabel.toLowerCase();

  const cityLabel = findLabel(CITIES_VILLAGES, (fd.cityVillage || [])[0]) || 'Shimla';
  const stateLabel = findLabel(STATES_AND_UTS, (fd.stateUT || [])[0]) || 'Himachal Pradesh';
  const holdingLabel = findLabel(OFFICE_HOLDING_OPTIONS, fd.officeHoldingType) || 'on lease';
  const floorArea = (fd.officeFloorArea || '').trim() || '420';
  const step3Sub =
    cityLabel + ', ' + stateLabel + ' · ' + holdingLabel.toLowerCase() + ' · ' + floorArea + ' Sq. ft.';

  const actText =
    fd.activities && fd.activities.length > 0
      ? fd.activities.length + ' activities'
      : 'Six activities';
  const staffText =
    fd.staffMembers && fd.staffMembers.length > 0
      ? fd.staffMembers.length + ' staff'
      : 'four staff';
  const expText = (fd.yearsExperienceInTrade || '').trim()
    ? fd.yearsExperienceInTrade.trim() + ' years in the trade'
    : 'seven years in the trade';
  const step4Sub = actText + ' · ' + staffText + ' · ' + expText;

  const df = fd.docFiles || {};
  const allDocKeys = Object.keys(df);
  const uploadedCount = allDocKeys.filter((k) => df[k] && df[k].length > 0).length;
  const requiredDocKeys = [
    'person_photo',
    'person_pan',
    'person_qualification',
    'premises_ownership',
    'business_reg',
    'business_pan',
    'business_bank_report',
    'business_itr',
  ];
  const missingReq = requiredDocKeys.filter((k) => !df[k] || df[k].length === 0).length;
  const docsComplete = missingReq === 0;
  const step5Sub = docsComplete
    ? 'All required documents attached (' + uploadedCount + ' of ' + allDocKeys.length + ' uploaded)'
    : uploadedCount + ' of ' + allDocKeys.length + ' attached — ' + missingReq + ' required still missing';

  return [
    { stepNum: 1, title: 'Step 1 · Registration type', subtitle: step1Sub, isWarning: false },
    { stepNum: 2, title: 'Step 2 · Applicant & firm', subtitle: step2Sub, isWarning: false },
    { stepNum: 3, title: 'Step 3 · Office & premises', subtitle: step3Sub, isWarning: false },
    { stepNum: 4, title: 'Step 4 · Services & capability', subtitle: step4Sub, isWarning: false },
    { stepNum: 5, title: 'Step 5 · Documents', subtitle: step5Sub, isWarning: !docsComplete },
  ];
}

export function validateTourOperatorStep7(
  formData: TourOperatorFormData
): TourOperatorFormErrors {
  const errs: TourOperatorFormErrors = {};
  if (!formData.feeNonRefundable) {
    errs.feeNonRefundable =
      'Please confirm that you understand the fee is non-refundable once submitted';
  }
  return errs;
}

export function validateTourOperatorPaymentMode(
  formData: TourOperatorFormData
): TourOperatorFormErrors {
  const errs: TourOperatorFormErrors = {};
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

export interface TourOperatorFeeSummary {
  shortRef: string;
  applicationRef: string;
  description: string;
  formattedAmount: string;
}

export function getTourOperatorFeeSummary(
  fd: TourOperatorFormData
): TourOperatorFeeSummary {
  const trade = fd.tradeType || 'travel_agent';
  const shortRefMap: Record<string, string> = {
    travel_agent: 'TA-2026-000000',
    tour_operator: 'TO-2026-000000',
    tourist_transport_operator: 'TT-2026-000000',
  };
  const refMap: Record<string, string> = {
    travel_agent: 'Travel agency registration · TA-2026-000000',
    tour_operator: 'Tour operator registration · TO-2026-000000',
    tourist_transport_operator: 'Tourist transport registration · TT-2026-000000',
  };
  const labelMap: Record<string, string> = {
    travel_agent: 'Registration fee — travel agent, three-year term',
    tour_operator: 'Registration fee — tour operator, three-year term',
    tourist_transport_operator: 'Registration fee — tourist transport operator, three-year term',
  };
  const amountMap: Record<string, string> = {
    travel_agent: '₹3,000',
    tour_operator: '₹4,500',
    tourist_transport_operator: '₹3,000',
  };
  return {
    shortRef: shortRefMap[trade] || shortRefMap.travel_agent,
    applicationRef: refMap[trade] || refMap.travel_agent,
    description: labelMap[trade] || labelMap.travel_agent,
    formattedAmount: amountMap[trade] || '₹3,000',
  };
}
`;
}

function buildStep1ScreenFile(appCode: string): string {
  const jsx = extractScreenJsx(
    appCode,
    '{step === 1 ? (',
    ') : step === 2 ? (',
    'Tour Operator Step 1'
  );

  return `import React from 'react';
import { View, Text } from 'react-native';
import {
  Ux4gRadioButton,
  Ux4gInputField,
  UX4GColors,
} from 'ux4g-react-native-components';
import {
  TRADE_OPTIONS,
  APPLICATION_TYPE_OPTIONS,
} from '../constants/formOptions';
import { TourOperatorFormData, TourOperatorFormErrors } from '../types/tourOperator';
import { styles } from '../styles/commonStyles';

export interface Step1RegistrationTypeScreenProps {
  formData: TourOperatorFormData;
  errors: TourOperatorFormErrors;
  updateField: <K extends keyof TourOperatorFormData>(
    key: K,
    value: TourOperatorFormData[K]
  ) => void;
}

export const Step1RegistrationTypeScreen: React.FC<Step1RegistrationTypeScreenProps> = ({
  formData,
  errors,
  updateField,
}) => (
${jsx}
);
`;
}

function buildStep2ScreenFile(appCode: string): string {
  let jsx = extractScreenJsx(
    appCode,
    ') : step === 2 ? (',
    ') : step === 3 ? (',
    'Tour Operator Step 2'
  );

  jsx = jsx.replace('onDateSelected={(d) =>', 'onDateSelected={(d: Date) =>');

  return `import React from 'react';
import { View, Text } from 'react-native';
import {
  Ux4gRadioButton,
  Ux4gInputField,
  Ux4gPanInputField,
  Ux4gSelectionDropdown,
  Ux4gDatePicker,
  UX4GColors,
} from 'ux4g-react-native-components';
import {
  RELATION_TO_FIRM_OPTIONS,
  LEGAL_ENTITY_TYPES,
  BANK_OPTIONS,
} from '../constants/formOptions';
import { TourOperatorFormData, TourOperatorFormErrors } from '../types/tourOperator';
import { parseDateString } from '../utils/validators';
import { styles } from '../styles/commonStyles';

export interface Step2ApplicantFirmScreenProps {
  formData: TourOperatorFormData;
  errors: TourOperatorFormErrors;
  updateField: <K extends keyof TourOperatorFormData>(
    key: K,
    value: TourOperatorFormData[K]
  ) => void;
}

export const Step2ApplicantFirmScreen: React.FC<Step2ApplicantFirmScreenProps> = ({
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
    'Tour Operator Step 3'
  );

  return `import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';
import {
  Ux4gRadioButton,
  Ux4gCheckbox,
  Ux4gInputField,
  Ux4gSelectionDropdown,
  UX4GColors,
} from 'ux4g-react-native-components';
import { CrosshairsGpsIcon } from '../components/Icons';
import {
  STATES_AND_UTS,
  DISTRICTS_OPTIONS,
  SUB_DISTRICTS,
  CITIES_VILLAGES,
  AREA_TYPES,
  OFFICE_HOLDING_OPTIONS,
  BUILDING_TYPE_OPTIONS,
  OFFICE_FACILITIES_OPTIONS,
} from '../constants/formOptions';
import { TourOperatorFormData, TourOperatorFormErrors } from '../types/tourOperator';
import { styles } from '../styles/commonStyles';

export interface Step3OfficePremisesScreenProps {
  formData: TourOperatorFormData;
  errors: TourOperatorFormErrors;
  updateField: <K extends keyof TourOperatorFormData>(
    key: K,
    value: TourOperatorFormData[K]
  ) => void;
  handleSetLocationPin: () => void;
  handleCityVillageChange: (ids: string[]) => void;
  toggleOfficeFacility: (id: string) => void;
}

export const Step3OfficePremisesScreen: React.FC<Step3OfficePremisesScreenProps> = ({
  formData,
  errors,
  updateField,
  handleSetLocationPin,
  handleCityVillageChange,
  toggleOfficeFacility,
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
    'Tour Operator Step 4'
  );

  return `import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  Ux4gCheckbox,
  Ux4gInputField,
  Ux4gSelectionDropdown,
  UX4GColors,
} from 'ux4g-react-native-components';
import { TrashCanIcon, PlusIcon } from '../components/Icons';
import {
  FIRM_ACTIVITIES_OPTIONS,
  QUALIFICATION_OPTIONS,
} from '../constants/formOptions';
import {
  StaffMember,
  TourOperatorFormData,
  TourOperatorFormErrors,
} from '../types/tourOperator';
import { styles } from '../styles/commonStyles';

export interface Step4ServicesCapabilityScreenProps {
  formData: TourOperatorFormData;
  errors: TourOperatorFormErrors;
  updateField: <K extends keyof TourOperatorFormData>(
    key: K,
    value: TourOperatorFormData[K]
  ) => void;
  toggleActivity: (id: string) => void;
  updateStaffMember: (index: number, field: keyof StaffMember, value: string) => void;
  addStaffMember: () => void;
  removeStaffMember: (index: number) => void;
}

export const Step4ServicesCapabilityScreen: React.FC<Step4ServicesCapabilityScreenProps> = ({
  formData,
  errors,
  updateField,
  toggleActivity,
  updateStaffMember,
  addStaffMember,
  removeStaffMember,
}) => (
${jsx}
);
`;
}

function buildStep5ScreenFile(appCode: string): string {
  const jsx = extractScreenJsx(
    appCode,
    ') : step === 5 ? (',
    ') : step === 6 ? (',
    'Tour Operator Step 5'
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
import { TourOperatorFormData, TourOperatorFormErrors } from '../types/tourOperator';
import { styles } from '../styles/commonStyles';

export interface Step5DocumentsScreenProps {
  formData: TourOperatorFormData;
  errors: TourOperatorFormErrors;
  toggleDocSection: (sectionKey: 'person' | 'premises' | 'business') => void;
  setDocSlotFiles: (slotKey: string, files: UploadedFile[]) => void;
}

export const Step5DocumentsScreen: React.FC<Step5DocumentsScreenProps> = ({
  formData,
  errors,
  toggleDocSection,
  setDocSlotFiles,
}) => (
${jsx}
);
`;
}

function buildStep6ScreenFile(appCode: string): string {
  const jsx = extractScreenJsx(
    appCode,
    ') : step === 6 ? (',
    ') : (',
    'Tour Operator Step 6'
  );

  return `import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  Ux4gStatusBanner,
  Ux4gCheckbox,
  UX4GColors,
} from 'ux4g-react-native-components';
import { PencilOutlineIcon } from '../components/Icons';
import { getTourOperatorReviewItems } from '../utils/validators';
import { TourOperatorFormData, TourOperatorFormErrors } from '../types/tourOperator';
import { styles } from '../styles/commonStyles';

export interface Step6ReviewDeclarationScreenProps {
  formData: TourOperatorFormData;
  errors: TourOperatorFormErrors;
  updateField: <K extends keyof TourOperatorFormData>(
    key: K,
    value: TourOperatorFormData[K]
  ) => void;
  setStep: (step: number) => void;
}

export const Step6ReviewDeclarationScreen: React.FC<Step6ReviewDeclarationScreenProps> = ({
  formData,
  errors,
  updateField,
  setStep,
}) => (
${jsx}
);
`;
}

function buildStep7ScreenFile(appCode: string): string {
  const rawBlock = sliceBetween(
    appCode,
    ') : step === 7 && !isPaymentModeView && !paymentCompleted ? (',
    '\n            )}\n          </View>\n        </ScrollView>',
    'Tour Operator Step 7'
  );

  const jsx = rawBlock
    .replace(
      ') : step === 7 && !isPaymentModeView && !paymentCompleted ? (',
      '  !isPaymentModeView && !paymentCompleted ? ('
    )
    .split('\n')
    .map((line) => (line.startsWith('            ') ? '  ' + line.slice(12) : line))
    .join('\n') + '\n  )';

  return `import React from 'react';
import { View, Text } from 'react-native';
import {
  Ux4gCard,
  Ux4gCheckbox,
  Ux4gRadioButton,
  Ux4gInputField,
  Ux4gSelectionDropdown,
  Ux4gStatusBanner,
  UX4GColors,
} from 'ux4g-react-native-components';
import { InfoOutlineIcon } from '../components/Icons';
import { BANK_OPTIONS, PAYMENT_MODES } from '../constants/formOptions';
import { TourOperatorFeeSummary } from '../utils/validators';
import { TourOperatorFormData, TourOperatorFormErrors } from '../types/tourOperator';
import { styles } from '../styles/commonStyles';

export interface Step7FeePaymentScreenProps {
  formData: TourOperatorFormData;
  errors: TourOperatorFormErrors;
  updateField: <K extends keyof TourOperatorFormData>(
    key: K,
    value: TourOperatorFormData[K]
  ) => void;
  feeSummary: TourOperatorFeeSummary;
  isPaymentModeView: boolean;
  paymentCompleted: boolean;
}

export const Step7FeePaymentScreen: React.FC<Step7FeePaymentScreenProps> = ({
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
import {
  STEP_METADATA,
  TRADE_OPTIONS,
  APPLICATION_TYPE_OPTIONS,
} from './src/constants/formOptions';
import { createInitialTourOperatorFormData } from './src/constants/initialFormData';
import {
  StaffMember,
  TourOperatorFormData,
  TourOperatorFormErrors,
} from './src/types/tourOperator';
import {
  validateTourOperatorStep1,
  validateTourOperatorStep2,
  validateTourOperatorStep3,
  validateTourOperatorStep4,
  validateTourOperatorStep5,
  validateTourOperatorStep6,
  validateTourOperatorStep7,
  validateTourOperatorPaymentMode,
  getTourOperatorFeeSummary,
} from './src/utils/validators';
import { styles } from './src/styles/commonStyles';
import { Step1RegistrationTypeScreen } from './src/screens/Step1RegistrationTypeScreen';
import { Step2ApplicantFirmScreen } from './src/screens/Step2ApplicantFirmScreen';
import { Step3OfficePremisesScreen } from './src/screens/Step3OfficePremisesScreen';
import { Step4ServicesCapabilityScreen } from './src/screens/Step4ServicesCapabilityScreen';
import { Step5DocumentsScreen } from './src/screens/Step5DocumentsScreen';
import { Step6ReviewDeclarationScreen } from './src/screens/Step6ReviewDeclarationScreen';
import { Step7FeePaymentScreen } from './src/screens/Step7FeePaymentScreen';

export default function App() {
  const [step, setStep] = useState<number>(7);
  const [savedTime, setSavedTime] = useState<string>('3:14 PM');
  const [isPaymentModeView, setIsPaymentModeView] = useState<boolean>(true);
  const [paymentCompleted, setPaymentCompleted] = useState<boolean>(false);
  const scrollViewRef = useRef<ScrollView | null>(null);

  const [formData, setFormData] = useState<TourOperatorFormData>(
    createInitialTourOperatorFormData
  );
  const [errors, setErrors] = useState<TourOperatorFormErrors>({});

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

  const updateField = <K extends keyof TourOperatorFormData>(
    key: K,
    value: TourOperatorFormData[K]
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

  const handleContinueStep1 = () => {
    const errs = validateTourOperatorStep1(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(2);
  };

  const handleContinueStep2 = () => {
    const errs = validateTourOperatorStep2(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(3);
  };

  const handleSetLocationPin = () => {
    updateField('pinPlaced', true);
    updateField('latitude', '31.1048° N');
    updateField('longitude', '77.1734° E');
    if (!formData.officeLocationLink) {
      updateField('officeLocationLink', 'https://maps.google.com/?q=31.1048,77.1734');
    }
  };

  const handleCityVillageChange = (ids: string[]) => {
    updateField('cityVillage', ids);
    if (ids && ids.length > 0) {
      updateField('areaType', ids[0] === 'gp_kyarkuli' ? ['rural'] : ['urban']);
    }
  };

  const toggleOfficeFacility = (id: string) => {
    setFormData((prev) => {
      const current = prev.officeFacilities || [];
      const exists = current.includes(id);
      return {
        ...prev,
        officeFacilities: exists ? current.filter((x) => x !== id) : [...current, id],
      };
    });
  };

  const handleContinueStep3 = () => {
    const errs = validateTourOperatorStep3(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(4);
  };

  const toggleActivity = (id: string) => {
    setFormData((prev) => {
      const current = prev.activities || [];
      const exists = current.includes(id);
      return {
        ...prev,
        activities: exists ? current.filter((x) => x !== id) : [...current, id],
      };
    });
    if (errors.activities) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.activities;
        return next;
      });
    }
  };

  const updateStaffMember = (index: number, field: keyof StaffMember, value: string) => {
    setFormData((prev) => {
      const updated = (prev.staffMembers || []).map((item, idx) =>
        idx === index ? { ...item, [field]: value } : item
      );
      return { ...prev, staffMembers: updated };
    });
    const errKey = 'staff_' + index + '_' + field;
    if (errors[errKey]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[errKey];
        return next;
      });
    }
  };

  const addStaffMember = () => {
    setFormData((prev) => ({
      ...prev,
      staffMembers: [
        ...(prev.staffMembers || []),
        { name: '', role: '', qualification: '', yearsInTrade: '' },
      ],
    }));
  };

  const removeStaffMember = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      staffMembers: (prev.staffMembers || []).filter((_, idx) => idx !== index),
    }));
  };

  const handleContinueStep4 = () => {
    const errs = validateTourOperatorStep4(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(5);
  };

  const toggleDocSection = (sectionKey: 'person' | 'premises' | 'business') => {
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

  const handleContinueStep5 = () => {
    const errs = validateTourOperatorStep5(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(6);
  };

  const handleContinueStep6 = () => {
    const errs = validateTourOperatorStep6(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(7);
  };

  const handleContinueStep7 = () => {
    if (!isPaymentModeView) {
      const errs = validateTourOperatorStep7(formData);
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

    const errs = validateTourOperatorPaymentMode(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setPaymentCompleted(true);
    alert(
      'Payment of ' +
        getTourOperatorFeeSummary(formData).formattedAmount +
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
    } else if (step === 7) {
      handleContinueStep7();
    }
  };

  const handleStepperBack = () => {
    if (step === 7 && isPaymentModeView && !paymentCompleted) {
      setIsPaymentModeView(false);
      return;
    }
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const activeMeta = STEP_METADATA[step] || {
    title: 'Step ' + step,
    subtitle: 'Tour operator and travel agency registration workflow.',
  };
  const feeSummary = getTourOperatorFeeSummary(formData);

  const selectedTradeLabel =
    (TRADE_OPTIONS.find((item) => item.id === formData.tradeType) || {}).label || 'Travel agent';
  const selectedAppTypeLabel =
    (APPLICATION_TYPE_OPTIONS.find((item) => item.id === formData.applicationType) || {}).label ||
    'Renewal of an existing registration';

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
            {/* 7-Step Compact Stepper Header using official UX4G Component */}
            <Ux4gCompactStepper
              totalSteps={7}
              currentStep={step}
              layout="centeredBetween"
              stepLabel={activeMeta.title}
              description={
                step === 7 && isPaymentModeView && !paymentCompleted
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
              <Step1RegistrationTypeScreen
                formData={formData}
                errors={errors}
                updateField={updateField}
              />
            ) : step === 2 ? (
              <Step2ApplicantFirmScreen
                formData={formData}
                errors={errors}
                updateField={updateField}
              />
            ) : step === 3 ? (
              <Step3OfficePremisesScreen
                formData={formData}
                errors={errors}
                updateField={updateField}
                handleSetLocationPin={handleSetLocationPin}
                handleCityVillageChange={handleCityVillageChange}
                toggleOfficeFacility={toggleOfficeFacility}
              />
            ) : step === 4 ? (
              <Step4ServicesCapabilityScreen
                formData={formData}
                errors={errors}
                updateField={updateField}
                toggleActivity={toggleActivity}
                updateStaffMember={updateStaffMember}
                addStaffMember={addStaffMember}
                removeStaffMember={removeStaffMember}
              />
            ) : step === 5 ? (
              <Step5DocumentsScreen
                formData={formData}
                errors={errors}
                toggleDocSection={toggleDocSection}
                setDocSlotFiles={setDocSlotFiles}
              />
            ) : step === 6 ? (
              <Step6ReviewDeclarationScreen
                formData={formData}
                errors={errors}
                updateField={updateField}
                setStep={setStep}
              />
            ) : (
              <Step7FeePaymentScreen
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
              step === 6
                ? 'Continue to payment'
                : step === 7
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

export function buildTourOperatorModularProject(fullAppCodeString: string): Record<string, string> {
  const normalizedCode = fullAppCodeString.replace(/\r\n/g, '\n');

  return {
    'package.json': JSON.stringify(
      {
        name: 'ux4g-tour-operator-registration-flow',
        version: '1.0.0',
        description:
          '7-Step Tour operator and Travel Agency Registration Flow built exclusively with UX4G React Native components',
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
          name: 'Tour Operator & Travel Agency Registration',
          slug: 'ux4g-tour-operator-registration-flow',
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
      '# Tour operator and Travel Agency Registration Flow (UX4G React Native)',
      '',
      'A modular government service pattern for **Tour operator and Travel Agency Registration (7-Step Workflow, Screen 1)** built using official **UX4G Design System** React Native components.',
      '',
      '## Project Structure',
      '',
      '```text',
      '├── App.tsx                                    # Root orchestrator, header, StatusBanner, 7-step stepper',
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
      '    │   ├── formOptions.ts                     # Trade types, location options & STEP_METADATA',
      '    │   └── initialFormData.ts                 # Initial TourOperatorFormData state factory',
      '    ├── types/',
      '    │   └── tourOperator.ts                    # TypeScript interfaces for form state & validation errors',
      '    ├── utils/',
      '    │   └── validators.ts                      # Step validation rules',
      '    ├── styles/',
      '    │   └── commonStyles.ts                    # Shared StyleSheet using UX4GColors tokens',
      '    └── screens/',
      '        ├── Step1RegistrationTypeScreen.tsx    # Step 1 of 7: Service Required & Existing Registration Details',
      '        ├── Step2ApplicantFirmScreen.tsx       # Step 2 of 7: Applicant, Contact, Firm & Bank Details',
      '        ├── Step3OfficePremisesScreen.tsx      # Step 3 of 7: Office Location, Geo Location & Premises Details',
      '        ├── Step4ServicesCapabilityScreen.tsx  # Step 4 of 7: Activities, Scale of Operation & Staff Qualifications',
      '        ├── Step5DocumentsScreen.tsx           # Step 5 of 7: Grouped Document Uploads',
      '        ├── Step6ReviewDeclarationScreen.tsx   # Step 6 of 7: Application Preview & Declaration',
      '        └── Step7FeePaymentScreen.tsx          # Step 7 of 7: Fee Details & Payment',
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
    'src/types/tourOperator.ts': buildTypesFile(),
    'src/constants/formOptions.ts': buildFormOptionsFile(normalizedCode),
    'src/constants/initialFormData.ts': buildInitialFormDataFile(normalizedCode),
    'src/utils/validators.ts': buildValidatorsFile(),
    'src/styles/commonStyles.ts': buildCommonStylesFile(normalizedCode),
    'src/screens/Step1RegistrationTypeScreen.tsx': buildStep1ScreenFile(normalizedCode),
    'src/screens/Step2ApplicantFirmScreen.tsx': buildStep2ScreenFile(normalizedCode),
    'src/screens/Step3OfficePremisesScreen.tsx': buildStep3ScreenFile(normalizedCode),
    'src/screens/Step4ServicesCapabilityScreen.tsx': buildStep4ScreenFile(normalizedCode),
    'src/screens/Step5DocumentsScreen.tsx': buildStep5ScreenFile(normalizedCode),
    'src/screens/Step6ReviewDeclarationScreen.tsx': buildStep6ScreenFile(normalizedCode),
    'src/screens/Step7FeePaymentScreen.tsx': buildStep7ScreenFile(normalizedCode),
    'App.tsx': buildRootAppFile(),
  };
}

