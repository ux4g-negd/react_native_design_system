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

function buildFormOptionsFile(appCode: string): string {
  const rawBlock = sliceBetween(
    appCode,
    'const STEP_METADATA =',
    'export default function App()',
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
    );

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
`;
}

function buildStep1ScreenFile(appCode: string): string {
  const jsx = extractScreenJsx(
    appCode,
    '{step === 1 ? (',
    ') : (',
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
import { getEligibilityBannerSummary, validateHotelStep1 } from './src/utils/validators';
import { Step1BeforeYouStartScreen } from './src/screens/Step1BeforeYouStartScreen';
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

  const handleStepperNext = () => {
    if (step === 1) {
      handleContinueStep1();
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
      '    ├── constants/',
      '    │   ├── formOptions.ts                   # Categories, LGD location lists, Eligibility options & STEP_METADATA',
      '    │   └── initialFormData.ts               # Initial HotelFormData state factory',
      '    ├── types/',
      '    │   └── hotel.ts                         # TypeScript interfaces for form state & validation errors',
      '    ├── utils/',
      '    │   └── validators.ts                    # Step 1 validation rules & live eligibility banner helper',
      '    ├── styles/',
      '    │   └── commonStyles.ts                  # Shared StyleSheet using UX4GColors tokens',
      '    └── screens/',
      '        ├── Step1BeforeYouStartScreen.tsx    # Step 1 of 9: Service Required, Existing Reg, Location, Eligibility',
      '        └── UpcomingStepScreen.tsx           # Steps 2-9 scaffold synced with stepper & draft state',
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
    'src/types/hotel.ts': buildTypesFile(),
    'src/constants/formOptions.ts': buildFormOptionsFile(normalizedCode),
    'src/constants/initialFormData.ts': buildInitialFormDataFile(normalizedCode),
    'src/utils/validators.ts': buildValidatorsFile(),
    'src/styles/commonStyles.ts': buildCommonStylesFile(normalizedCode),
    'src/screens/Step1BeforeYouStartScreen.tsx': buildStep1ScreenFile(normalizedCode),
    'src/screens/UpcomingStepScreen.tsx': buildUpcomingStepScreenFile(),
    'App.tsx': buildRootAppFile(),
  };
}
