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
  return `export interface RadioOption {
  id: string;
  label: string;
}

export interface StepMeta {
  title: string;
  subtitle: string;
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
}

export type TourOperatorFormErrors = Record<string, string | undefined>;
`;
}

function buildUnionLogoFile(appCode: string): string {
  const unionSlice = sliceBetween(
    appCode,
    'const UnionLogo = () => (',
    '// UX4G Compact Stepper',
    'UnionLogo'
  ).trim();
  return `import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { UX4GColors } from 'ux4g-react-native-components';

export ${unionSlice}

export default UnionLogo;
`;
}

function buildCompactStepperFile(appCode: string): string {
  const stepperSlice = sliceBetween(
    appCode,
    'const Ux4gCompactStepper = (',
    'const STEP_METADATA =',
    'Ux4gCompactStepper'
  ).trim();

  return `import React from 'react';
import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { UX4GColors } from 'ux4g-react-native-components';

export interface CompactStepperProps {
  totalSteps?: number;
  currentStep?: number;
  stepLabel?: string;
  title?: string;
  description?: string;
  subtitle?: string;
  onPrevious?: () => void;
  onBackPress?: () => void;
  onNext?: () => void;
  onNextPress?: () => void;
  cumulative?: boolean;
  style?: StyleProp<ViewStyle>;
}

${stepperSlice.replace(
  'const Ux4gCompactStepper = ({',
  'export const Ux4gCompactStepper: React.FC<CompactStepperProps> = ({'
)}

export default Ux4gCompactStepper;
`;
}

function buildFormOptionsFile(appCode: string): string {
  const rawBlock = sliceBetween(
    appCode,
    'const STEP_METADATA =',
    'const parseDateString =',
    'tourOperatorFormOptions'
  ).trim();

  const exported = rawBlock
    .replace(/^const /gm, 'export const ')
    .replace('export const STEP_METADATA =', 'export const STEP_METADATA: Record<number, StepMeta> =')
    .replace('export const TRADE_OPTIONS =', 'export const TRADE_OPTIONS: RadioOption[] =')
    .replace('export const APPLICATION_TYPE_OPTIONS =', 'export const APPLICATION_TYPE_OPTIONS: RadioOption[] =')
    .replace('export const RELATION_TO_FIRM_OPTIONS =', 'export const RELATION_TO_FIRM_OPTIONS: RadioOption[] =')
    .replace('export const LEGAL_ENTITY_TYPES =', 'export const LEGAL_ENTITY_TYPES: RadioOption[] =')
    .replace('export const BANK_OPTIONS =', 'export const BANK_OPTIONS: RadioOption[] =');

  return `import { RadioOption, StepMeta } from '../types/tourOperator';

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

  const rawObj = dedentBlock(appCode.slice(objStart, objEnd) + '\n  }', 2);

  return `import { TourOperatorFormData } from '../types/tourOperator';

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
    ') : (',
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
  Ux4gButton,
  Ux4gThemeProvider,
  UX4GColors,
} from 'ux4g-react-native-components';
import NationalEmblem from './src/assets/NationalEmblem';
import UnionLogo from './src/assets/UnionLogo';
import { Ux4gCompactStepper } from './src/components/CompactStepper';
import {
  STEP_METADATA,
  TRADE_OPTIONS,
  APPLICATION_TYPE_OPTIONS,
} from './src/constants/formOptions';
import { createInitialTourOperatorFormData } from './src/constants/initialFormData';
import {
  TourOperatorFormData,
  TourOperatorFormErrors,
} from './src/types/tourOperator';
import {
  validateTourOperatorStep1,
  validateTourOperatorStep2,
} from './src/utils/validators';
import { styles } from './src/styles/commonStyles';
import { Step1RegistrationTypeScreen } from './src/screens/Step1RegistrationTypeScreen';
import { Step2ApplicantFirmScreen } from './src/screens/Step2ApplicantFirmScreen';

export default function App() {
  const [step, setStep] = useState<number>(1);
  const [savedTime, setSavedTime] = useState<string>('3:14 PM');
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

  const handleStepperNext = () => {
    if (step === 1) {
      handleContinueStep1();
    } else if (step === 2) {
      handleContinueStep2();
    } else if (step < 7) {
      setStep(step + 1);
    }
  };

  const handleStepperBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const activeMeta = STEP_METADATA[step] || {
    title: 'Step ' + step,
    subtitle: 'Tour operator and travel agency registration workflow.',
  };

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
            {/* 7-Step Compact Stepper Header */}
            <Ux4gCompactStepper
              totalSteps={7}
              currentStep={step}
              stepLabel={activeMeta.title}
              description={activeMeta.subtitle}
              onPrevious={handleStepperBack}
              onNext={handleStepperNext}
              cumulative={true}
              style={{ padding: 0, marginVertical: 2 }}
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
            ) : (
              <View style={styles.formContainer}>
                <Ux4gStatusBanner
                  variant="infoLight"
                  title={'Step ' + step + ' of 7 — ' + activeMeta.title}
                  subtitle={
                    activeMeta.subtitle +
                    ' Selected: ' +
                    selectedTradeLabel +
                    ' · ' +
                    selectedAppTypeLabel +
                    (formData.applicationType === 'renewal' && formData.existingRegNumber.trim()
                      ? ' (' + formData.existingRegNumber.trim() + ')'
                      : '') +
                    '.'
                  }
                  titleNumberOfLines={3}
                  subtitleNumberOfLines={5}
                  backgroundColor={UX4GColors.blue50}
                  borderColor={UX4GColors.blue200}
                  marginStyle={{ marginHorizontal: 0, marginVertical: 0 }}
                  paddingStyle={{ paddingVertical: 14, paddingHorizontal: 14 }}
                  containerStyle={{ borderRadius: 10 }}
                />
              </View>
            )}
          </View>
        </ScrollView>

        {/* Pinned Bottom Action Bar */}
        <View style={styles.bottomActionBar}>
          <Ux4gButton
            text="Continue"
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
      '    │   └── CompactStepper.tsx                 # 7-step UX4G Compact Stepper header',
      '    ├── constants/',
      '    │   ├── formOptions.ts                     # Trade types, application types & STEP_METADATA',
      '    │   └── initialFormData.ts                 # Initial TourOperatorFormData state factory',
      '    ├── types/',
      '    │   └── tourOperator.ts                    # TypeScript interfaces for form state & validation errors',
      '    ├── utils/',
      '    │   └── validators.ts                      # Step validation rules',
      '    ├── styles/',
      '    │   └── commonStyles.ts                    # Shared StyleSheet using UX4GColors tokens',
      '    └── screens/',
      '        ├── Step1RegistrationTypeScreen.tsx    # Step 1 of 7: Service Required & Existing Registration Details',
      '        └── Step2ApplicantFirmScreen.tsx       # Step 2 of 7: Applicant, Contact, Firm & Bank Details',
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
    'src/components/CompactStepper.tsx': buildCompactStepperFile(normalizedCode),
    'src/types/tourOperator.ts': buildTypesFile(),
    'src/constants/formOptions.ts': buildFormOptionsFile(normalizedCode),
    'src/constants/initialFormData.ts': buildInitialFormDataFile(normalizedCode),
    'src/utils/validators.ts': buildValidatorsFile(),
    'src/styles/commonStyles.ts': buildCommonStylesFile(normalizedCode),
    'src/screens/Step1RegistrationTypeScreen.tsx': buildStep1ScreenFile(normalizedCode),
    'src/screens/Step2ApplicantFirmScreen.tsx': buildStep2ScreenFile(normalizedCode),
    'App.tsx': buildRootAppFile(),
  };
}

