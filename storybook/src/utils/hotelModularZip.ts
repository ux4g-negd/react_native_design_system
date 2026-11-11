import { NATIONAL_EMBLEM_SOURCE } from './nationalEmblemSource';

function sliceBetween(source: string, startMarker: string, endMarker: string, label: string): string {
  const startIdx = source.indexOf(startMarker);
  if (startIdx === -1) {
    throw new Error(`Hotel modular ZIP extractor could not find start marker for ${label}: ${startMarker}`);
  }
  const endIdx = source.indexOf(endMarker, startIdx + startMarker.length);
  if (endIdx === -1) {
    throw new Error(`Hotel modular ZIP extractor could not find end marker for ${label}: ${endMarker}`);
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
  return `export interface EligibilityOption {
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

export interface HotelFormData {
  // Step 1: Before you start
  applicationType: string;
  unitCategory: string[];
  registrationSought: string;
  existingRegNumber: string;

  // Location Details (LGD Hierarchy)
  stateUT: string[];
  district: string[];
  circleSubOffice: string[];
  subDistrict: string[];
  cityVillage: string[];
  wardPanchayat: string[];
  pinCode: string;

  // Eligibility Criteria
  eligibilityCriteria: string[];

  // Step 2: Applicant & entity
  legalEntityType: string[];
  applyingOnBehalfOf: string;
  applicantFullName: string;
  firmCompanyName: string;
  incorporationNumber: string;
  incorporationDate: string;
  panNumber: string;
  aadhaarNumber: string;
  applicantMobile: string;
  applicantEmail: string;
  applicantLandline: string;
  sameAsUnitAddress: boolean;
  applicantHouseStreet: string;
  applicantLocalityLandmark: string;
  applicantPinCode: string;
  applicantStateUT: string[];
  applicantDistrict: string[];
  applicantSubDistrict: string[];
  applicantCityVillage: string[];
  authSameAsApplicant: boolean;
  authPersonName: string;
  authPersonDesignation: string[];
  authPersonRelationship: string[];
  authPersonMobile: string;
  authPersonEmail: string;

  // Step 3: Unit identity & location
  unitName: string;
  servesMeals: string;
  unitClassGrade: string[];
  premisesOwnership: string;
  leaseExpiryDate: string;
  yearOfCommencement: string;
  unitMapLink: string;
  unitHouseStreet: string;
  unitLocalityLandmark: string;
  unitPinCode: string;
  unitStateUT: string[];
  unitDistrict: string[];
  unitCircleSubOffice: string[];
  unitSubDistrict: string[];
  unitCityVillage: string[];
  unitWardPanchayat: string[];
  coastalRegulationZone: boolean;
  landAreaUnit: string[];
  totalExtentLand: string;
  builtUpAreaSqm: string;
  unitTelephone: string;
  unitFax: string;
  unitEmail: string;

  // Step 4: Rooms & accommodation
  singleBedRooms: string;
  doubleBedRooms: string;
  familySuites: string;
  dormitoryBeds: string;
  lowestTariff: string;
  highestTariff: string;
  tariffIncludes: string[];
  receptionLoungeArea: string;
  diningHallArea: string;
  parkingSpaces: string;
  conferenceHallCapacity: string;
  facilitiesAvailable: string[];
  otherAccommodationFacilities: string;

  // Step 5: Facilities, services & compliance
  servicesOffered: string[];
  hasSewagePlant: string;
  sewagePlantWorking: string;
  fireSafetyClearanceStatus: string;
  pollutionBoardConsent: string;
  tradeLicenceStatus: string;
  publicLiabilityInsurance: string;
  waterSupplySource: string[];
  solidWasteDisposal: string[];
  additionalComplianceNotes: string;
}

export type HotelFormErrors = Record<string, string | undefined>;
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
  const iconsSlice = sliceBetween(
    appCode,
    'const CrosshairsGpsIcon =',
    'export default function App()',
    'hotelIcons'
  )
    .trim()
    .replace(
      'const CrosshairsGpsIcon = ({ size = 18, color = UX4GColors.neutral800 }) => (',
      'export const CrosshairsGpsIcon: React.FC<IconProps> = ({ size = 18, color = UX4GColors.neutral800 }: IconProps) => ('
    );

  return `import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { UX4GColors } from 'ux4g-react-native-components';

export interface IconProps {
  size?: number;
  color?: string;
}

${iconsSlice}
`;
}

function buildFormOptionsFile(appCode: string): string {
  const rawBlock = sliceBetween(
    appCode,
    'const STEP_METADATA =',
    'const CrosshairsGpsIcon =',
    'hotelFormOptions'
  ).trim();

  const exported = rawBlock
    .replace(/^const /gm, 'export const ')
    .replace('export const STEP_METADATA =', 'export const STEP_METADATA: Record<number, StepMeta> =')
    .replace('export const UNIT_CATEGORIES =', 'export const UNIT_CATEGORIES: DropdownOption[] =')
    .replace('export const STATES_AND_UTS =', 'export const STATES_AND_UTS: DropdownOption[] =')
    .replace('export const DISTRICTS_OPTIONS =', 'export const DISTRICTS_OPTIONS: DropdownOption[] =')
    .replace('export const CIRCLE_SUB_OFFICES =', 'export const CIRCLE_SUB_OFFICES: DropdownOption[] =')
    .replace('export const SUB_DISTRICTS =', 'export const SUB_DISTRICTS: DropdownOption[] =')
    .replace('export const CITIES_VILLAGES =', 'export const CITIES_VILLAGES: DropdownOption[] =')
    .replace('export const WARDS_PANCHAYATS =', 'export const WARDS_PANCHAYATS: DropdownOption[] =')
    .replace(
      'export const ELIGIBILITY_STATEMENTS =',
      'export const ELIGIBILITY_STATEMENTS: EligibilityOption[] ='
    )
    .replace('export const LEGAL_ENTITY_TYPES =', 'export const LEGAL_ENTITY_TYPES: DropdownOption[] =')
    .replace('export const DESIGNATION_OPTIONS =', 'export const DESIGNATION_OPTIONS: DropdownOption[] =')
    .replace('export const RELATIONSHIP_OPTIONS =', 'export const RELATIONSHIP_OPTIONS: DropdownOption[] =')
    .replace('export const HOTEL_CLASS_OPTIONS =', 'export const HOTEL_CLASS_OPTIONS: DropdownOption[] =')
    .replace('export const LAND_AREA_UNITS =', 'export const LAND_AREA_UNITS: DropdownOption[] =')
    .replace('export const TARIFF_INCLUDES_OPTIONS =', 'export const TARIFF_INCLUDES_OPTIONS: DropdownOption[] =')
    .replace('export const FACILITIES_AVAILABLE_OPTIONS =', 'export const FACILITIES_AVAILABLE_OPTIONS: DropdownOption[] =')
    .replace('export const SERVICES_OFFERED_OPTIONS =', 'export const SERVICES_OFFERED_OPTIONS: DropdownOption[] =')
    .replace('export const WATER_SUPPLY_SOURCES =', 'export const WATER_SUPPLY_SOURCES: DropdownOption[] =')
    .replace('export const SOLID_WASTE_DISPOSAL_METHODS =', 'export const SOLID_WASTE_DISPOSAL_METHODS: DropdownOption[] =');

  return `import { DropdownOption, EligibilityOption, StepMeta } from '../types/hotel';

${exported}
`;
}

function buildInitialFormDataFile(appCode: string): string {
  const markerStart = 'const [formData, setFormData] = useState(';
  const idx = appCode.indexOf(markerStart);
  if (idx === -1) throw new Error('Could not find initial hotel formData state');
  const objStart = idx + markerStart.length;
  const endMarker = '\n  });\n\n  const [errors';
  const objEnd = appCode.indexOf(endMarker, objStart);
  if (objEnd === -1) throw new Error('Could not find end of initial hotel formData state');

  const rawObj = dedentBlock(appCode.slice(objStart, objEnd) + '\n  }', 2);

  return `import { HotelFormData } from '../types/hotel';

export const createInitialHotelFormData = (): HotelFormData => (${rawObj});
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
  return `import { ELIGIBILITY_STATEMENTS } from '../constants/formOptions';
import { HotelFormData, HotelFormErrors } from '../types/hotel';

export function getEligibilityBannerSummary(tickedIds: string[]): {
  isPermanentEligible: boolean;
  message: string;
} {
  const total = ELIGIBILITY_STATEMENTS.length;
  const unticked = total - tickedIds.length;
  if (unticked <= 0) {
    return {
      isPermanentEligible: true,
      message:
        'All four statements are ticked. Your unit qualifies for a PERMANENT hotel registration.',
    };
  }
  const wordMap: Record<number, string> = {
    1: 'One statement is unticked.',
    2: 'Two statements are unticked.',
    3: 'Three statements are unticked.',
    4: 'Four statements are unticked.',
  };
  const prefix = wordMap[unticked] || unticked + ' statements are unticked.';
  return {
    isPermanentEligible: false,
    message:
      prefix +
      ' You can still apply, but the registration issued will be TEMPORARY — valid one year, extendable once on request. Tick all four for a permanent registration.',
  };
}

export function validateHotelStep1(formData: HotelFormData): HotelFormErrors {
  const errs: HotelFormErrors = {};
  if (!formData.applicationType) {
    errs.applicationType = 'Please select the type of application';
  }
  if (!formData.unitCategory.length) {
    errs.unitCategory = 'Please select the category of unit';
  }
  if (!formData.registrationSought) {
    errs.registrationSought = 'Please select the registration type sought';
  }
  if (formData.applicationType === 'renewal' && !formData.existingRegNumber.trim()) {
    errs.existingRegNumber = 'Existing registration number is required for renewal';
  }
  if (!formData.stateUT.length) {
    errs.stateUT = 'State / UT is required';
  }
  if (!formData.district.length) {
    errs.district = 'District is required';
  }
  if (!formData.circleSubOffice.length) {
    errs.circleSubOffice = 'Circle / sub-office is required';
  }
  if (!formData.subDistrict.length) {
    errs.subDistrict = 'Sub-district is required';
  }
  if (!formData.cityVillage.length) {
    errs.cityVillage = 'City / Town / Village is required';
  }
  if (!/^\\d{6}$/.test(formData.pinCode.trim())) {
    errs.pinCode = 'Enter a valid 6-digit PIN code';
  }
  return errs;
}

export function validateHotelStep2(formData: HotelFormData): HotelFormErrors {
  const errs: HotelFormErrors = {};
  if (!formData.legalEntityType.length) {
    errs.legalEntityType = 'Please select the type of legal entity';
  }
  if (!formData.applyingOnBehalfOf) {
    errs.applyingOnBehalfOf = 'Please select who you are applying on behalf of';
  }
  if (!formData.applicantFullName.trim()) {
    errs.applicantFullName = 'Full name of the applicant is required';
  }
  if (formData.legalEntityType[0] !== 'individual') {
    if (!formData.firmCompanyName.trim()) {
      errs.firmCompanyName = 'Name of the firm, company or society is required';
    }
    if (!formData.incorporationNumber.trim()) {
      errs.incorporationNumber = 'Registration or incorporation number is required';
    }
    if (!formData.incorporationDate.trim()) {
      errs.incorporationDate = 'Date of incorporation or registration is required';
    }
  }
  if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/i.test(formData.panNumber.trim())) {
    errs.panNumber = 'Enter a valid 10-character PAN (e.g. ABCDE1234F)';
  }
  if (
    formData.aadhaarNumber.trim() &&
    !/^\\d{12}$/.test(formData.aadhaarNumber.replace(/\\s/g, ''))
  ) {
    errs.aadhaarNumber = 'Aadhaar number must be 12 digits';
  }
  if (!/^\\d{10}$/.test(formData.applicantMobile.trim())) {
    errs.applicantMobile = 'Enter a valid 10-digit mobile number';
  }
  if (!/^\\S+@\\S+\\.\\S+$/.test(formData.applicantEmail.trim())) {
    errs.applicantEmail = 'Enter a valid email address';
  }
  if (!formData.applicantHouseStreet.trim()) {
    errs.applicantHouseStreet = 'House or building number and street is required';
  }
  if (!/^\\d{6}$/.test(formData.applicantPinCode.trim())) {
    errs.applicantPinCode = 'Enter a valid 6-digit PIN code';
  }
  if (!formData.applicantStateUT.length) {
    errs.applicantStateUT = 'State / UT is required';
  }
  if (!formData.applicantDistrict.length) {
    errs.applicantDistrict = 'District is required';
  }
  if (!formData.applicantSubDistrict.length) {
    errs.applicantSubDistrict = 'Sub-district is required';
  }
  if (!formData.applicantCityVillage.length) {
    errs.applicantCityVillage = 'City / Town / Village is required';
  }
  if (!formData.authPersonName.trim()) {
    errs.authPersonName = 'Name of the authorised person is required';
  }
  if (!formData.authPersonDesignation.length) {
    errs.authPersonDesignation = 'Please select a designation';
  }
  if (!formData.authPersonRelationship.length) {
    errs.authPersonRelationship = 'Please select relationship to the applicant';
  }
  if (!/^\\d{10}$/.test(formData.authPersonMobile.trim())) {
    errs.authPersonMobile = 'Enter a valid 10-digit mobile number';
  }
  if (!/^\\S+@\\S+\\.\\S+$/.test(formData.authPersonEmail.trim())) {
    errs.authPersonEmail = 'Enter a valid email address';
  }
  return errs;
}

export function getConvertedSqMetres(totalExtentLand: string, landAreaUnit: string[]): string {
  const rawVal = parseFloat(totalExtentLand);
  if (isNaN(rawVal) || rawVal <= 0) {
    return '2,023.43';
  }
  const unitId = landAreaUnit[0] || 'acres';
  const factorMap: Record<string, number> = {
    acres: 4046.8564224,
    hectares: 10000,
    sq_m: 1,
    sq_ft: 0.092903,
    sq_yd: 0.836127,
    nali: 200.67,
  };
  const sqM = rawVal * (factorMap[unitId] || 1);
  return sqM.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function validateHotelStep3(formData: HotelFormData): HotelFormErrors {
  const errs: HotelFormErrors = {};
  if (!formData.unitName.trim()) {
    errs.unitName = 'Name of the unit is required';
  }
  if (!formData.unitClassGrade.length) {
    errs.unitClassGrade = 'Please select the class or grade of the unit';
  }
  if (!formData.premisesOwnership) {
    errs.premisesOwnership = 'Please select ownership of the premises';
  }
  if (
    (formData.premisesOwnership === 'leased' || formData.premisesOwnership === 'rented') &&
    !formData.leaseExpiryDate.trim()
  ) {
    errs.leaseExpiryDate = 'Lease or rent expiry date is required';
  }
  if (!formData.unitMapLink.trim()) {
    errs.unitMapLink = 'Location link is required';
  }
  if (!formData.unitHouseStreet.trim()) {
    errs.unitHouseStreet = 'House or building number and street is required';
  }
  if (!/^[0-9]{6}$/.test(formData.unitPinCode.trim())) {
    errs.unitPinCode = 'Enter a valid 6-digit PIN code';
  }
  if (!formData.unitStateUT.length) {
    errs.unitStateUT = 'State / UT is required';
  }
  if (!formData.unitDistrict.length) {
    errs.unitDistrict = 'District is required';
  }
  if (!formData.unitCircleSubOffice.length) {
    errs.unitCircleSubOffice = 'Circle / sub-office is required';
  }
  if (!formData.unitSubDistrict.length) {
    errs.unitSubDistrict = 'Sub-district is required';
  }
  if (!formData.unitCityVillage.length) {
    errs.unitCityVillage = 'City / Town / Village is required';
  }
  if (!formData.landAreaUnit.length) {
    errs.landAreaUnit = 'Please select unit of measurement';
  }
  if (!formData.totalExtentLand.trim() || parseFloat(formData.totalExtentLand) <= 0) {
    errs.totalExtentLand = 'Enter total extent of land';
  }
  if (!formData.builtUpAreaSqm.trim() || parseFloat(formData.builtUpAreaSqm) <= 0) {
    errs.builtUpAreaSqm = 'Enter valid built-up area in Sq. m.';
  }
  if (!formData.unitTelephone.trim()) {
    errs.unitTelephone = 'Telephone number of the unit is required';
  }
  if (!/^[^@ ]+@[^@ ]+[.][^@ ]+$/.test(formData.unitEmail.trim())) {
    errs.unitEmail = 'Enter a valid unit email address';
  }
  return errs;
}

export function getTotalRoomsDisplay(formData: HotelFormData): string {
  const hasAnyInput =
    formData.singleBedRooms.trim() !== '' ||
    formData.doubleBedRooms.trim() !== '' ||
    formData.familySuites.trim() !== '';
  if (!hasAnyInput) {
    return '24';
  }
  const s = parseInt(formData.singleBedRooms, 10) || 0;
  const d = parseInt(formData.doubleBedRooms, 10) || 0;
  const f = parseInt(formData.familySuites, 10) || 0;
  return String(s + d + f);
}

export function validateHotelStep4(formData: HotelFormData): HotelFormErrors {
  const errs: HotelFormErrors = {};
  if (formData.singleBedRooms.trim() === '' || isNaN(parseInt(formData.singleBedRooms, 10))) {
    errs.singleBedRooms = 'Enter number of single-bed rooms (0 if none)';
  }
  if (formData.doubleBedRooms.trim() === '' || isNaN(parseInt(formData.doubleBedRooms, 10))) {
    errs.doubleBedRooms = 'Enter number of double-bed rooms (0 if none)';
  }
  if (formData.familySuites.trim() === '' || isNaN(parseInt(formData.familySuites, 10))) {
    errs.familySuites = 'Enter number of family suites (0 if none)';
  }
  const low = parseInt(formData.lowestTariff, 10);
  const high = parseInt(formData.highestTariff, 10);
  if (!formData.lowestTariff.trim() || isNaN(low) || low <= 0) {
    errs.lowestTariff = 'Enter valid lowest tariff per night';
  }
  if (!formData.highestTariff.trim() || isNaN(high) || high <= 0) {
    errs.highestTariff = 'Enter valid highest tariff per night';
  } else if (!isNaN(low) && high < low) {
    errs.highestTariff = 'Highest tariff cannot be less than lowest tariff';
  }
  if (!formData.receptionLoungeArea.trim() || parseFloat(formData.receptionLoungeArea) <= 0) {
    errs.receptionLoungeArea = 'Enter reception and lounge area in Sq. m.';
  }
  if (formData.parkingSpaces.trim() === '' || isNaN(parseInt(formData.parkingSpaces, 10))) {
    errs.parkingSpaces = 'Enter number of parking spaces (0 if none)';
  }
  return errs;
}

export function validateHotelStep5(formData: HotelFormData): HotelFormErrors {
  const errs: HotelFormErrors = {};
  if (!formData.hasSewagePlant) {
    errs.hasSewagePlant = 'Please select whether a sewage treatment plant is present';
  }
  if (formData.hasSewagePlant === 'yes' && !formData.sewagePlantWorking) {
    errs.sewagePlantWorking = 'Please indicate whether the sewage treatment plant is working';
  }
  if (!formData.fireSafetyClearanceStatus) {
    errs.fireSafetyClearanceStatus = 'Please select fire safety clearance status';
  }
  if (!formData.pollutionBoardConsent) {
    errs.pollutionBoardConsent = 'Please select pollution control board consent status';
  }
  if (!formData.tradeLicenceStatus) {
    errs.tradeLicenceStatus = 'Please select trade or shops-and-establishments licence status';
  }
  if (!formData.publicLiabilityInsurance) {
    errs.publicLiabilityInsurance = 'Please select public liability insurance status';
  }
  if (!formData.waterSupplySource.length) {
    errs.waterSupplySource = 'Please select source of water supply';
  }
  if (!formData.solidWasteDisposal.length) {
    errs.solidWasteDisposal = 'Please select solid waste disposal method';
  }
  return errs;
}
`;
}

function buildStep1ScreenFile(appCode: string): string {
  const jsx = extractScreenJsx(
    appCode,
    '{step === 1 ? (',
    ') : step === 2 ? (',
    'Hotel Step 1'
  );

  return `import React from 'react';
import { View, Text } from 'react-native';
import {
  Ux4gRadioButton,
  Ux4gSelectionDropdown,
  Ux4gInputField,
  Ux4gCheckbox,
  Ux4gStatusBanner,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';
import {
  UNIT_CATEGORIES,
  STATES_AND_UTS,
  DISTRICTS_OPTIONS,
  CIRCLE_SUB_OFFICES,
  SUB_DISTRICTS,
  CITIES_VILLAGES,
  WARDS_PANCHAYATS,
  ELIGIBILITY_STATEMENTS,
} from '../constants/formOptions';
import { HotelFormData, HotelFormErrors } from '../types/hotel';
import { styles } from '../styles/commonStyles';

export interface Step1BeforeYouStartScreenProps {
  formData: HotelFormData;
  errors: HotelFormErrors;
  eligibilitySummary: {
    isPermanentEligible: boolean;
    message: string;
  };
  updateField: <K extends keyof HotelFormData>(key: K, value: HotelFormData[K]) => void;
  toggleEligibilityItem: (id: string) => void;
  handleContinueStep1: () => void;
  handleSaveDraft: () => void;
}

export const Step1BeforeYouStartScreen: React.FC<Step1BeforeYouStartScreenProps> = ({
  formData,
  errors,
  eligibilitySummary,
  updateField,
  toggleEligibilityItem,
  handleContinueStep1,
  handleSaveDraft,
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
    'Hotel Step 2'
  );

  // Provide explicit Date parameter type for strict TypeScript
  jsx = jsx.replace(
    'onDateSelected={(d) =>',
    'onDateSelected={(d: Date) =>'
  );

  return `import React from 'react';
import { View, Text } from 'react-native';
import {
  Ux4gSelectionDropdown,
  Ux4gRadioButton,
  Ux4gInputField,
  Ux4gDatePicker,
  Ux4gPanInputField,
  Ux4gAadhaarInputField,
  Ux4gCheckbox,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';
import {
  LEGAL_ENTITY_TYPES,
  STATES_AND_UTS,
  DISTRICTS_OPTIONS,
  SUB_DISTRICTS,
  CITIES_VILLAGES,
  DESIGNATION_OPTIONS,
  RELATIONSHIP_OPTIONS,
} from '../constants/formOptions';
import { HotelFormData, HotelFormErrors } from '../types/hotel';
import { styles } from '../styles/commonStyles';

export interface Step2ApplicantEntityScreenProps {
  formData: HotelFormData;
  errors: HotelFormErrors;
  updateField: <K extends keyof HotelFormData>(key: K, value: HotelFormData[K]) => void;
  toggleSameAsUnitAddress: (checked: boolean) => void;
  toggleAuthSameAsApplicant: (checked: boolean) => void;
  handleContinueStep2: () => void;
  handleSaveDraft: () => void;
}

export const Step2ApplicantEntityScreen: React.FC<Step2ApplicantEntityScreenProps> = ({
  formData,
  errors,
  updateField,
  toggleSameAsUnitAddress,
  toggleAuthSameAsApplicant,
  handleContinueStep2,
  handleSaveDraft,
}) => (
${jsx}
);
`;
}

function buildStep3ScreenFile(appCode: string): string {
  let jsx = extractScreenJsx(
    appCode,
    ') : step === 3 ? (',
    ') : step === 4 ? (',
    'Hotel Step 3'
  );

  jsx = jsx.replace(
    'onDateSelected={(d) =>',
    'onDateSelected={(d: Date) =>'
  );

  return `import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  Ux4gSelectionDropdown,
  Ux4gRadioButton,
  Ux4gInputField,
  Ux4gDatePicker,
  Ux4gCheckbox,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';
import { CrosshairsGpsIcon } from '../components/Icons';
import {
  HOTEL_CLASS_OPTIONS,
  STATES_AND_UTS,
  DISTRICTS_OPTIONS,
  CIRCLE_SUB_OFFICES,
  SUB_DISTRICTS,
  CITIES_VILLAGES,
  WARDS_PANCHAYATS,
  LAND_AREA_UNITS,
} from '../constants/formOptions';
import { HotelFormData, HotelFormErrors } from '../types/hotel';
import { styles } from '../styles/commonStyles';

export interface Step3UnitIdentityLocationScreenProps {
  formData: HotelFormData;
  errors: HotelFormErrors;
  computedSqMetresDisplay: string;
  updateField: <K extends keyof HotelFormData>(key: K, value: HotelFormData[K]) => void;
  handleUseCurrentLocation: () => void;
  handleContinueStep3: () => void;
  handleSaveDraft: () => void;
}

export const Step3UnitIdentityLocationScreen: React.FC<Step3UnitIdentityLocationScreenProps> = ({
  formData,
  errors,
  computedSqMetresDisplay,
  updateField,
  handleUseCurrentLocation,
  handleContinueStep3,
  handleSaveDraft,
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
    'Hotel Step 4'
  );

  return `import React from 'react';
import { View, Text } from 'react-native';
import {
  Ux4gSelectionDropdown,
  Ux4gInputField,
  Ux4gTextArea,
  Ux4gCheckbox,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';
import {
  TARIFF_INCLUDES_OPTIONS,
  FACILITIES_AVAILABLE_OPTIONS,
} from '../constants/formOptions';
import { HotelFormData, HotelFormErrors } from '../types/hotel';
import { styles } from '../styles/commonStyles';

export interface Step4RoomsAccommodationScreenProps {
  formData: HotelFormData;
  errors: HotelFormErrors;
  totalRoomsDisplay: string;
  updateField: <K extends keyof HotelFormData>(key: K, value: HotelFormData[K]) => void;
  toggleFacilityAvailable: (id: string) => void;
  handleContinueStep4: () => void;
  handleSaveDraft: () => void;
}

export const Step4RoomsAccommodationScreen: React.FC<Step4RoomsAccommodationScreenProps> = ({
  formData,
  errors,
  totalRoomsDisplay,
  updateField,
  toggleFacilityAvailable,
  handleContinueStep4,
  handleSaveDraft,
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
    'Hotel Step 5'
  );

  return `import React from 'react';
import { View, Text } from 'react-native';
import {
  Ux4gCheckbox,
  Ux4gRadioButton,
  Ux4gSelectionDropdown,
  Ux4gTextArea,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';
import {
  SERVICES_OFFERED_OPTIONS,
  WATER_SUPPLY_SOURCES,
  SOLID_WASTE_DISPOSAL_METHODS,
} from '../constants/formOptions';
import { HotelFormData, HotelFormErrors } from '../types/hotel';
import { styles } from '../styles/commonStyles';

export interface Step5FacilitiesComplianceScreenProps {
  formData: HotelFormData;
  errors: HotelFormErrors;
  updateField: <K extends keyof HotelFormData>(key: K, value: HotelFormData[K]) => void;
  toggleServiceOffered: (id: string) => void;
  handleContinueStep5: () => void;
  handleSaveDraft: () => void;
}

export const Step5FacilitiesComplianceScreen: React.FC<Step5FacilitiesComplianceScreenProps> = ({
  formData,
  errors,
  updateField,
  toggleServiceOffered,
  handleContinueStep5,
  handleSaveDraft,
}) => (
${jsx}
);
`;
}

function buildUpcomingStepScreenFile(): string {
  return `import React from 'react';
import { View, Text } from 'react-native';
import {
  Ux4gCard,
  Ux4gStatusBanner,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';
import { STEP_METADATA } from '../constants/formOptions';
import { HotelFormData } from '../types/hotel';
import { styles } from '../styles/commonStyles';

export interface UpcomingStepScreenProps {
  step: number;
  formData: HotelFormData;
  eligibilityPermanent: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSaveDraft: () => void;
}

export const UpcomingStepScreen: React.FC<UpcomingStepScreenProps> = ({
  step,
  formData,
  eligibilityPermanent,
  onPrevious,
  onNext,
  onSaveDraft,
}) => {
  const meta = STEP_METADATA[step] || { title: 'Step ' + step, subtitle: '' };
  return (
    <View style={styles.formContainer}>
      <Ux4gStatusBanner
        variant="infoLight"
        title={'Step ' + step + ' of 9 — ' + meta.title}
        subtitle={
          meta.subtitle +
          ' Your Step 1 selections (' +
          (eligibilityPermanent ? 'Permanent eligible' : 'Temporary 1-year eligible') +
          (formData.pinCode ? ' • PIN ' + formData.pinCode : '') +
          ') are preserved in the draft.'
        }
        titleNumberOfLines={2}
        subtitleNumberOfLines={4}
        backgroundColor={UX4GColors.primary50}
        borderColor={UX4GColors.primary200}
        marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
        paddingStyle={{ paddingVertical: 14, paddingHorizontal: 14 }}
        containerStyle={{ borderRadius: 10, marginBottom: 16 }}
      />

      <Ux4gCard
        cornerRadius={10}
        borderWidth={1}
        borderColor={UX4GColors.neutral200}
        backgroundColor={UX4GColors.neutral50}
        elevation={0}
        style={{ padding: 14 }}
      >
        <Text style={styles.sectionHeading}>{meta.title}</Text>
        <Text style={styles.helperNoteText}>
          This step screen is synced with the 9-step Hotel Registration workflow stepper and draft state.
        </Text>
      </Ux4gCard>

      <View style={styles.actionButtonContainer}>
        {step < 9 && (
          <>
            <Ux4gButton
              text="Continue"
              variant="primary"
              size="large"
              backgroundColor={UX4GColors.primary}
              borderRadius={8}
              onPress={onNext}
              style={{ width: '100%' }}
            />
            <View style={{ height: 10 }} />
          </>
        )}
        <Ux4gButton
          text="Back"
          variant="outline"
          size="large"
          backgroundColor={UX4GColors.transparent}
          contentColor={UX4GColors.primary}
          borderColor={UX4GColors.primary200}
          borderWidth={1}
          borderRadius={8}
          onPress={onPrevious}
          style={{ width: '100%' }}
        />
        <View style={{ height: 10 }} />
        <Ux4gButton
          text="Save as draft"
          variant="outline"
          size="large"
          backgroundColor={UX4GColors.transparent}
          contentColor={UX4GColors.primary}
          borderColor={UX4GColors.primary200}
          borderWidth={1}
          borderRadius={8}
          onPress={onSaveDraft}
          style={{ width: '100%' }}
        />
      </View>
    </View>
  );
};
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
  Ux4gThemeProvider,
  UX4GColors,
} from 'ux4g-react-native-components';

import NationalEmblem from './src/assets/NationalEmblem';
import UnionLogo from './src/assets/UnionLogo';
import { STEP_METADATA } from './src/constants/formOptions';
import { createInitialHotelFormData } from './src/constants/initialFormData';
import { styles } from './src/styles/commonStyles';
import { HotelFormData, HotelFormErrors } from './src/types/hotel';
import {
  getConvertedSqMetres,
  getEligibilityBannerSummary,
  getTotalRoomsDisplay,
  validateHotelStep1,
  validateHotelStep2,
  validateHotelStep3,
  validateHotelStep4,
  validateHotelStep5,
} from './src/utils/validators';
import { Step1BeforeYouStartScreen } from './src/screens/Step1BeforeYouStartScreen';
import { Step2ApplicantEntityScreen } from './src/screens/Step2ApplicantEntityScreen';
import { Step3UnitIdentityLocationScreen } from './src/screens/Step3UnitIdentityLocationScreen';
import { Step4RoomsAccommodationScreen } from './src/screens/Step4RoomsAccommodationScreen';
import { Step5FacilitiesComplianceScreen } from './src/screens/Step5FacilitiesComplianceScreen';
import { UpcomingStepScreen } from './src/screens/UpcomingStepScreen';

export default function App() {
  const [step, setStep] = useState<number>(1);
  const [savedTime, setSavedTime] = useState<string>('3:14 PM');
  const scrollViewRef = useRef<ScrollView | null>(null);

  const [formData, setFormData] = useState<HotelFormData>(createInitialHotelFormData);
  const [errors, setErrors] = useState<HotelFormErrors>({});

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

  const updateField = <K extends keyof HotelFormData>(
    key: K,
    value: HotelFormData[K]
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

  const toggleEligibilityItem = (id: string) => {
    setFormData((prev) => {
      const exists = prev.eligibilityCriteria.includes(id);
      return {
        ...prev,
        eligibilityCriteria: exists
          ? prev.eligibilityCriteria.filter((item) => item !== id)
          : [...prev.eligibilityCriteria, id],
      };
    });
  };

  const eligibilitySummary = getEligibilityBannerSummary(formData.eligibilityCriteria);

  const handleContinueStep1 = () => {
    const errs = validateHotelStep1(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(2);
  };

  const toggleSameAsUnitAddress = (checked: boolean) => {
    setFormData((prev) => {
      if (!checked) return { ...prev, sameAsUnitAddress: false };
      return {
        ...prev,
        sameAsUnitAddress: true,
        applicantPinCode: prev.pinCode || prev.applicantPinCode,
        applicantStateUT: prev.stateUT.length ? [...prev.stateUT] : prev.applicantStateUT,
        applicantDistrict: prev.district.length ? [...prev.district] : prev.applicantDistrict,
        applicantSubDistrict: prev.subDistrict.length
          ? [...prev.subDistrict]
          : prev.applicantSubDistrict,
        applicantCityVillage: prev.cityVillage.length
          ? [...prev.cityVillage]
          : prev.applicantCityVillage,
      };
    });
  };

  const toggleAuthSameAsApplicant = (checked: boolean) => {
    setFormData((prev) => {
      if (!checked) return { ...prev, authSameAsApplicant: false };
      return {
        ...prev,
        authSameAsApplicant: true,
        authPersonName: prev.applicantFullName || prev.authPersonName,
        authPersonMobile: prev.applicantMobile || prev.authPersonMobile,
        authPersonEmail: prev.applicantEmail || prev.authPersonEmail,
        authPersonRelationship: prev.authPersonRelationship.length
          ? prev.authPersonRelationship
          : ['self'],
      };
    });
  };

  const handleContinueStep2 = () => {
    const errs = validateHotelStep2(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(3);
  };

  const computedSqMetresDisplay = getConvertedSqMetres(
    formData.totalExtentLand,
    formData.landAreaUnit
  );

  const handleUseCurrentLocation = () => {
    updateField('unitMapLink', 'https://maps.google.com/?q=30.4598,78.0644');
  };

  const handleContinueStep3 = () => {
    const errs = validateHotelStep3(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(4);
  };

  const totalRoomsDisplay = getTotalRoomsDisplay(formData);

  const toggleFacilityAvailable = (id: string) => {
    setFormData((prev) => {
      const exists = prev.facilitiesAvailable.includes(id);
      return {
        ...prev,
        facilitiesAvailable: exists
          ? prev.facilitiesAvailable.filter((x) => x !== id)
          : [...prev.facilitiesAvailable, id],
      };
    });
  };

  const handleContinueStep4 = () => {
    const errs = validateHotelStep4(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(5);
  };

  const toggleServiceOffered = (id: string) => {
    setFormData((prev) => {
      const exists = prev.servicesOffered.includes(id);
      return {
        ...prev,
        servicesOffered: exists
          ? prev.servicesOffered.filter((x) => x !== id)
          : [...prev.servicesOffered, id],
      };
    });
  };

  const handleContinueStep5 = () => {
    const errs = validateHotelStep5(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(6);
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
    } else if (step < 9) {
      setStep(step + 1);
    }
  };

  const handleStepperBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const activeMeta = STEP_METADATA[step] || {
    title: 'Step ' + step,
    subtitle: 'Hotel registration workflow.',
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

            {/* 9-Step Compact Stepper Header using official UX4G Component */}
            <Ux4gCompactStepper
              totalSteps={9}
              currentStep={step}
              layout="centeredBetween"
              stepLabel={activeMeta.title}
              description={activeMeta.subtitle}
              onPrevious={handleStepperBack}
              onNext={handleStepperNext}
              activeColor={UX4GColors.primary}
              inactiveColor={UX4GColors.neutral300}
              style={{ padding: 0, marginVertical: 4 }}
            />

            <View style={styles.stepperBottomDivider} />

            {step === 1 ? (
              <Step1BeforeYouStartScreen
                formData={formData}
                errors={errors}
                eligibilitySummary={eligibilitySummary}
                updateField={updateField}
                toggleEligibilityItem={toggleEligibilityItem}
                handleContinueStep1={handleContinueStep1}
                handleSaveDraft={handleSaveDraft}
              />
            ) : step === 2 ? (
              <Step2ApplicantEntityScreen
                formData={formData}
                errors={errors}
                updateField={updateField}
                toggleSameAsUnitAddress={toggleSameAsUnitAddress}
                toggleAuthSameAsApplicant={toggleAuthSameAsApplicant}
                handleContinueStep2={handleContinueStep2}
                handleSaveDraft={handleSaveDraft}
              />
            ) : step === 3 ? (
              <Step3UnitIdentityLocationScreen
                formData={formData}
                errors={errors}
                computedSqMetresDisplay={computedSqMetresDisplay}
                updateField={updateField}
                handleUseCurrentLocation={handleUseCurrentLocation}
                handleContinueStep3={handleContinueStep3}
                handleSaveDraft={handleSaveDraft}
              />
            ) : step === 4 ? (
              <Step4RoomsAccommodationScreen
                formData={formData}
                errors={errors}
                totalRoomsDisplay={totalRoomsDisplay}
                updateField={updateField}
                toggleFacilityAvailable={toggleFacilityAvailable}
                handleContinueStep4={handleContinueStep4}
                handleSaveDraft={handleSaveDraft}
              />
            ) : step === 5 ? (
              <Step5FacilitiesComplianceScreen
                formData={formData}
                errors={errors}
                updateField={updateField}
                toggleServiceOffered={toggleServiceOffered}
                handleContinueStep5={handleContinueStep5}
                handleSaveDraft={handleSaveDraft}
              />
            ) : (
              <UpcomingStepScreen
                step={step}
                formData={formData}
                eligibilityPermanent={eligibilitySummary.isPermanentEligible}
                onPrevious={handleStepperBack}
                onNext={handleStepperNext}
                onSaveDraft={handleSaveDraft}
              />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </Ux4gThemeProvider>
  );
}
`;
}

export function buildHotelModularProject(fullAppCodeString: string): Record<string, string> {
  const normalizedCode = fullAppCodeString.replace(/\r\n/g, '\n');

  return {
    'package.json': JSON.stringify(
      {
        name: 'ux4g-hotel-registration-flow',
        version: '1.0.0',
        description:
          '9-Step Hotel Registration flow built exclusively with UX4G React Native components',
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
          name: 'Hotel Registration Flow',
          slug: 'ux4g-hotel-registration-flow',
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
      '# Hotel Registration Flow (UX4G React Native)',
      '',
      'A modular government service pattern for **Hotel Registration (9-Step Workflow)** built using official **UX4G Design System** React Native components.',
      '',
      '## Project Structure',
      '',
      '```text',
      '├── App.tsx                                  # Root orchestrator, header, StatusBanner, 9-step stepper',
      '├── index.js                                 # Expo entry point',
      '├── package.json',
      '├── tsconfig.json',
      '├── app.json',
      '└── src/',
      '    ├── assets/',
      '    │   ├── NationalEmblem.tsx               # Official Government of India Emblem SVG',
      '    │   └── UnionLogo.tsx                    # Portal Union.svg brand mark SVG',
      '    ├── components/',
      '    │   └── Icons.tsx                        # Shared vector outline icons (GPS crosshairs, etc.)',
      '    ├── constants/',
      '    │   ├── formOptions.ts                   # Categories, LGD location lists, Eligibility options & STEP_METADATA',
      '    │   └── initialFormData.ts               # Initial HotelFormData state factory',
      '    ├── types/',
      '    │   └── hotel.ts                         # TypeScript interfaces for form state & validation errors',
      '    ├── utils/',
      '    │   └── validators.ts                    # Step validation rules, land conversion & eligibility helper',
      '    ├── styles/',
      '    │   └── commonStyles.ts                  # Shared StyleSheet using UX4GColors tokens',
      '    └── screens/',
      '        ├── Step1BeforeYouStartScreen.tsx       # Step 1 of 9: Service Required, Existing Reg, Location, Eligibility',
      '        ├── Step2ApplicantEntityScreen.tsx      # Step 2 of 9: Applicant & Entity, Identity, Contact, Address, Authorised Person',
      '        ├── Step3UnitIdentityLocationScreen.tsx # Step 3 of 9: Unit Details, Location, Land & Premises, Contact Details',
      '        ├── Step4RoomsAccommodationScreen.tsx   # Step 4 of 9: Accommodation, Tariff, Public Areas & Facilities',
      '        ├── Step5FacilitiesComplianceScreen.tsx # Step 5 of 9: Services Offered, Compliance & Safety Details',
      '        └── UpcomingStepScreen.tsx              # Steps 6-9 scaffold synced with stepper & draft state',
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
    'src/types/hotel.ts': buildTypesFile(),
    'src/constants/formOptions.ts': buildFormOptionsFile(normalizedCode),
    'src/constants/initialFormData.ts': buildInitialFormDataFile(normalizedCode),
    'src/utils/validators.ts': buildValidatorsFile(),
    'src/styles/commonStyles.ts': buildCommonStylesFile(normalizedCode),
    'src/screens/Step1BeforeYouStartScreen.tsx': buildStep1ScreenFile(normalizedCode),
    'src/screens/Step2ApplicantEntityScreen.tsx': buildStep2ScreenFile(normalizedCode),
    'src/screens/Step3UnitIdentityLocationScreen.tsx': buildStep3ScreenFile(normalizedCode),
    'src/screens/Step4RoomsAccommodationScreen.tsx': buildStep4ScreenFile(normalizedCode),
    'src/screens/Step5FacilitiesComplianceScreen.tsx': buildStep5ScreenFile(normalizedCode),
    'src/screens/UpcomingStepScreen.tsx': buildUpcomingStepScreenFile(),
    'App.tsx': buildRootAppFile(),
  };
}
