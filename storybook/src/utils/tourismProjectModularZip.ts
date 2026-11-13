import { NATIONAL_EMBLEM_SOURCE } from './nationalEmblemSource';

function sliceBetween(source: string, startMarker: string, endMarker: string, label: string): string {
  const startIdx = source.indexOf(startMarker);
  if (startIdx === -1) {
    throw new Error(`Tourism Project modular ZIP extractor could not find start marker for ${label}: ${startMarker}`);
  }
  const endIdx = source.indexOf(endMarker, startIdx + startMarker.length);
  if (endIdx === -1) {
    throw new Error(`Tourism Project modular ZIP extractor could not find end marker for ${label}: ${endMarker}`);
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

export interface TourismProjectFormData {
  sanctionNumber: string;
  isRecordFound: boolean;
  projectType: string[];
  projectNature: 'new' | 'expansion';
  projectCost: string;
  sanctionRevised: 'yes' | 'no';
  // Step 2: Location
  district: string[];
  tehsil: string;
  village: string;
  khasraNo: string;
  totalLandArea: string;
  landOwnershipType: string;
  // Step 3: Components
  roomCount: string;
  diningCapacity: string;
  parkingSpaces: string;
  facilities: string[];
  // Step 4: Clearances
  hasSipbCopy: boolean;
  hasDprReport: boolean;
  hasPcbNoc: boolean;
  hasForestNoc: boolean;
  // Step 5: Declaration
  confirmedAccuracy: boolean;
  agreeToAudit: boolean;
}
`;
}

function buildFormOptionsFile(): string {
  return `import { DropdownOption, RadioOption } from '../types/tourismProject';

export const PROJECT_TYPES: DropdownOption[] = [
  { id: 'eco_resort', label: 'Eco-resort / Nature lodge' },
  { id: 'hotel_resort', label: 'Hotel / Resort (3-star & above)' },
  { id: 'heritage_hotel', label: 'Heritage Hotel conversion' },
  { id: 'wellness_ayush', label: 'Wellness Resort / AYUSH Centre' },
  { id: 'amusement_park', label: 'Amusement / Theme Park' },
  { id: 'adventure_camp', label: 'Adventure / Camping Facility' },
  { id: 'mice_centre', label: 'MICE / Convention Centre' },
  { id: 'wayside_amenity', label: 'Wayside Amenity / Caravan Park' },
];

export const PROJECT_NATURE_OPTIONS: RadioOption[] = [
  { id: 'new', label: 'A new tourism project' },
  { id: 'expansion', label: 'An expansion of an existing one' },
];

export const SANCTION_REVISED_OPTIONS: RadioOption[] = [
  { id: 'yes', label: 'Yes — an amended order was issued' },
  { id: 'no', label: 'No' },
];

export const DISTRICT_OPTIONS: DropdownOption[] = [
  { id: 'dehradun', label: 'Dehradun' },
  { id: 'haridwar', label: 'Haridwar' },
  { id: 'nainital', label: 'Nainital' },
  { id: 'tehri_garhwal', label: 'Tehri Garhwal' },
  { id: 'uttarkashi', label: 'Uttarkashi' },
  { id: 'chamoli', label: 'Chamoli' },
  { id: 'pauri_garhwal', label: 'Pauri Garhwal' },
  { id: 'rudraprayag', label: 'Rudraprayag' },
  { id: 'almora', label: 'Almora' },
  { id: 'pithoragarh', label: 'Pithoragarh' },
  { id: 'bageshwar', label: 'Bageshwar' },
  { id: 'champawat', label: 'Champawat' },
  { id: 'udham_singh_nagar', label: 'Udham Singh Nagar' },
];
`;
}

function buildInitialDataFile(): string {
  return `import { TourismProjectFormData, StepMeta } from '../types/tourismProject';

export const INITIAL_FORM_DATA: TourismProjectFormData = {
  sanctionNumber: 'SIPB/2026/00412',
  isRecordFound: true,
  projectType: ['eco_resort'],
  projectNature: 'new',
  projectCost: '',
  sanctionRevised: 'yes',
  district: ['dehradun'],
  tehsil: 'Rishikesh',
  village: 'Shivpuri',
  khasraNo: '412/1, 412/2',
  totalLandArea: '12.5',
  landOwnershipType: 'Freehold (Privately owned)',
  roomCount: '48',
  diningCapacity: '120',
  parkingSpaces: '60',
  facilities: ['cottages', 'restaurant', 'spa', 'adventure_deck'],
  hasSipbCopy: true,
  hasDprReport: true,
  hasPcbNoc: true,
  hasForestNoc: false,
  confirmedAccuracy: true,
  agreeToAudit: true,
};

export const STEP_METADATA: Record<number, StepMeta> = {
  1: {
    title: 'The approval you hold',
    subtitle: 'The sanction order you already have, and what the project is.',
  },
  2: {
    title: 'Project location & land',
    subtitle: 'Where the project is located, land area, and zoning clearances.',
  },
  3: {
    title: 'Components & facilities',
    subtitle: 'Proposed facilities, room/visitor capacity, and investment breakup.',
  },
  4: {
    title: 'Clearances & documents',
    subtitle: 'Statutory approvals, DPR, environmental clearances, and order copy.',
  },
  5: {
    title: 'Review & submit',
    subtitle: 'Everything you have entered, read back before you submit for final approval.',
  },
};
`;
}

function buildCommonStylesFile(appCode: string): string {
  const stylesBlock = sliceBetween(appCode, 'const styles = StyleSheet.create({', '});\n', 'commonStyles');
  return `import { StyleSheet, Platform } from 'react-native';
import { UX4GColors } from 'ux4g-react-native-components';

export ${stylesBlock}});\n`;
}

function buildStep1ScreenFile(appCode: string): string {
  const jsx = extractScreenJsx(
    appCode,
    '{/* ─── STEP 1: APPROVAL DETAILS ─── */}',
    '{/* ─── STEP 2:',
    'Step1ApprovalScreen'
  );

  return `import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import {
  Ux4gRadioButton,
  Ux4gSelectionDropdown,
  UX4GColors,
} from 'ux4g-react-native-components';
import { TourismProjectFormData } from '../types/tourismProject';
import { PROJECT_TYPES, PROJECT_NATURE_OPTIONS, SANCTION_REVISED_OPTIONS } from '../constants/formOptions';
import { styles } from '../styles/commonStyles';

export interface Step1ScreenProps {
  formData: TourismProjectFormData;
  updateField: <K extends keyof TourismProjectFormData>(key: K, value: TourismProjectFormData[K]) => void;
  onFetchSanction: () => void;
}

export const Step1ApprovalScreen: React.FC<Step1ScreenProps> = ({
  formData,
  updateField,
  onFetchSanction,
}) => {
  return (
${jsx}
  );
};
`;
}

function buildHeaderFile(): string {
  return `import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { UX4GColors } from 'ux4g-react-native-components';
import NationalEmblem from './NationalEmblem';

export const UnionLogo: React.FC = () => (
  <Svg width={36} height={36} viewBox="0 0 40 40" fill="none">
    <Path
      d="M5.85059 34.2637C7.72048 34.1583 9.59495 34.1583 11.4648 34.2637C15.1962 34.4138 19.3146 35.089 23.4326 35.4141C26.7822 35.6892 30.1618 35.6794 33.3105 34.9141C29.5061 38.2986 24.5517 40.1148 19.4521 39.9942C14.3524 39.8734 9.48932 37.8246 5.85059 34.2637ZM3.76172 22.7647C6.67001 21.8966 9.72795 21.6388 12.7412 22.0088C16.1158 22.359 19.7919 23.4248 23.4326 24.3301C27.0735 25.2355 30.7448 25.9604 34.1045 25.5752C36.0384 25.3889 37.9173 24.8268 39.6338 23.9199C39.3117 25.5465 38.7848 27.1265 38.0664 28.6221C37.0142 29.1907 35.9026 29.6437 34.752 29.9727C31.2316 31.013 27.319 30.8223 23.417 30.2471C19.5151 29.6719 15.5982 28.7163 12.083 28.2461C9.04791 27.8043 5.97725 27.652 2.91309 27.791C2.3808 27.8261 1.87828 27.8262 1.40625 27.8262C0.894651 26.6003 0.505956 25.3266 0.246094 24.0244C1.22033 23.6593 2.41088 23.1648 3.76172 22.7647ZM5.76562 10.7139C8.31822 9.4568 11.2249 9.10423 14.0059 9.71389C17.019 10.2691 20.2236 11.7797 23.4326 13.3203C26.6416 14.861 29.8609 16.4215 32.874 17.0518C35.1426 17.6051 37.5198 17.531 39.749 16.8369C39.9066 17.8298 39.9904 18.8328 40 19.8379C38.0088 20.919 35.7745 21.4787 33.5068 21.4639C30.333 21.5089 26.8324 20.4784 23.3975 19.253C19.9624 18.0275 16.5174 16.6212 13.3535 15.9209C10.5966 15.2104 7.71373 15.1324 4.92188 15.6914C3.21225 16.1055 1.55924 16.7253 0 17.5371C0.105071 16.6264 0.272632 15.7238 0.501953 14.836C1.99816 13.1633 3.78068 11.7674 5.76562 10.7139ZM19.9121 2.51716e-05C24.0578 -0.00157692 28.1024 1.27476 31.4912 3.65335C34.8799 6.03187 37.4469 9.39617 38.8398 13.2852C36.744 13.9628 34.4987 14.0397 32.3613 13.5059C29.529 12.9006 26.4909 11.3695 23.4326 9.63381C20.3744 7.8982 17.3161 6.0477 14.5039 4.86721C12.6733 4.03008 10.7035 3.53465 8.69336 3.40628C12.0074 1.18013 15.9149 -0.00630153 19.9121 2.51716e-05Z"
      fill={UX4GColors.primary}
    />
  </Svg>
);

export const GovHeader: React.FC = () => {
  return (
    <View>
      <View style={headerStyles.govTopBar}>
        <View style={headerStyles.govLeft}>
          <View style={headerStyles.flagBox}>
            <View style={{ flex: 1, backgroundColor: '#FF9933' }} />
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }} />
            <View style={{ flex: 1, backgroundColor: '#138808' }} />
          </View>
          <Text style={headerStyles.govText}>Government of India</Text>
          <Svg width={12} height={12} viewBox="0 0 24 24" fill="none" style={{ marginLeft: 4 }}>
            <Path d="M14 3h7v7M10 14L20 4M21 14v6a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h6" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </View>
        <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
          <Path d="M12 2a2 2 0 100 4 2 2 0 000-4zM7 8h10v2H7V8zm2 4h6v10H9V12z" fill="#FFFFFF" />
        </Svg>
      </View>
      <View style={headerStyles.whiteHeader}>
        <View style={headerStyles.logoRow}>
          <NationalEmblem width={36} height={36} />
          <View style={{ width: 10 }} />
          <UnionLogo />
        </View>
        <TouchableOpacity style={headerStyles.hamburgerBtn} activeOpacity={0.7}>
          <View style={headerStyles.hamburgerBar} />
          <View style={headerStyles.hamburgerBar} />
          <View style={headerStyles.hamburgerBar} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const headerStyles = StyleSheet.create({
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
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  whiteHeader: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
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
    borderColor: '#C7D2FE',
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
});
`;
}

function buildReadme(): string {
  return `# Tourism Project Approval Flow (UX4G React Native)

A comprehensive 5-step government single-window service pattern for **Tourism Project Approval Flow**, built using official \`ux4g-react-native-components\`.

## Features
- **Accurate Step 1 UI**: Sanction order fetch input with pre-filled match banner, notified project type dropdown, project nature radio group, formatted project cost input, and amended order verification.
- **Official UX4G Compact Stepper**: Center-between layout with 5 progress indicators and step navigation arrows.
- **Standard Header**: Government of India national banner with Ashoka emblem and Union UX4G logo.
- **Sticky Actions**: Pinned \`Continue\` and \`Save as draft\` buttons with tactile feedback.

## Setup & Running

\`\`\`bash
npm install
npx expo start
\`\`\`
`;
}

export function buildTourismProjectModularProject(fullAppCode: string): Record<string, string> {
  const files: Record<string, string> = {};

  files['package.json'] = JSON.stringify(
    {
      name: 'ux4g-tourism-project-approval-flow',
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
        name: 'Tourism Project Approval Flow',
        slug: 'tourism-project-approval-flow',
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
  files['src/types/tourismProject.ts'] = buildTypesFile();
  files['src/constants/formOptions.ts'] = buildFormOptionsFile();
  files['src/constants/initialFormData.ts'] = buildInitialDataFile();
  files['src/styles/commonStyles.ts'] = buildCommonStylesFile(fullAppCode);
  files['src/components/Header.tsx'] = buildHeaderFile();
  files['src/components/NationalEmblem.tsx'] = NATIONAL_EMBLEM_SOURCE;
  files['src/screens/Step1ApprovalScreen.tsx'] = buildStep1ScreenFile(fullAppCode);

  return files;
}

