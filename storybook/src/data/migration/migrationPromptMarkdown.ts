export const MIGRATION_PROMPT_MD_CONTENT = `# UX4G React Native Design System — Non-Destructive AI Migration Prompt

## Context

I have an existing React Native application that currently uses [Current UI Library: Vanilla React Native / React Native Paper (MD3) / React Native Elements / NativeBase / Custom UI Components]. I need to migrate it to the **UX4G React Native Design System** (\`ux4g-react-native-design-system\` package) **without altering my existing application flow, working functionality, custom color combinations, brand theme, exact component sizing, or typography hierarchy**.

## Project Details

- **React Native Framework / SDK:** [e.g. Expo SDK 50+ / Bare React Native 0.72+ / React Native 0.76+ (New Architecture)]
- **Current UI Library:** [Vanilla React Native / React Native Paper / React Native Elements / NativeBase / Custom Components]
- **Current Color Palette / Brand Theme:** [e.g. Indigo #4F46E5, Emerald Green #059669, Saffron #FF9933, Navy #0F172A, Custom Palette]
- **State Management & Form Libraries:** [React Hooks / Redux Toolkit / Zustand / MobX / React Hook Form / Formik]
- **Navigation Library:** [React Navigation v6/v7 / Expo Router]
- **Target Platforms:** [Android / iOS / Web / Windows / macOS]
- **Scope:** [Full Application / Specific Feature Screens / Component-by-Component]

## What I Need

Migrate my React Native application from [current UI library] to the UX4G React Native Design System (\`ux4g-react-native-design-system\`) adhering strictly to the **Zero-Disruption Migration Contract** below.

---

## Zero-Disruption Migration Contract (Critical Rules)

### Rule 1: Zero Functional & Flow Disruption (100% Logic Preservation)
- **Do NOT alter existing application flows, screen navigations, or business logic.**
- Retain all state bindings and hooks (\`useState\`, \`useReducer\`, Redux \`useSelector\`/\`useDispatch\`, Zustand stores, \`useContext\`).
- Retain all form controllers, refs, and validation logic (\`value\`, \`onChangeText\`, \`onBlur\`, Formik/React Hook Form integrations, regex validators).
- Retain all callback handlers (\`onPress\`, \`onSelect\`, \`onToggle\`, asynchronous submission flows, API triggers).
- Retain all screen navigation calls (\`navigation.navigate()\`, \`navigation.goBack()\`, \`router.push()\`).

### Rule 2: Safe, Non-Destructive Theme Integration
- **Do NOT overwrite or break the host project's existing theme setup or global styles.**
- Map your project's active brand colors and typography directly into \`<Ux4gThemeProvider>\` at your app's root (\`App.tsx\` or layout wrapper):

\`\`\`tsx
// SAFE: Non-destructive theme integration preserving your exact brand identity
import { Ux4gThemeProvider, Ux4gToastProvider } from 'ux4g-react-native-design-system';

const MY_APP_COLORS = {
  primary: '#4F46E5',         // Your Brand Primary (e.g. Indigo)
  primaryLight: '#EEF2FF',    // Light tint
  primaryDark: '#3730A3',     // Dark tint
  secondary: '#06B6D4',       // Brand Accent / Secondary
  background: '#F8FAFC',      // Screen background
  surface: '#FFFFFF',         // Card / Modal background
  textPrimary: '#0F172A',     // Main text color
  textSecondary: '#64748B',   // Muted text color
  border: '#E2E8F0',          // Input / Card border
  success: '#10B981',         // Positive alert / badge
  warning: '#F59E0B',         // Warning alert / badge
  error: '#EF4444',           // Validation error
};

export default function App() {
  return (
    <Ux4gThemeProvider isDark={false} colors={MY_APP_COLORS}>
      <Ux4gToastProvider>
        <AppNavigator />
      </Ux4gToastProvider>
    </Ux4gThemeProvider>
  );
}
\`\`\`

### Rule 3: Zero Color & Visual Identity Distortion
- **Do NOT force default UX4G blue/purple (\`#5B3AE6\`) onto components that use custom brand colors.**
- When replacing buttons, headers, inputs, chips, and cards, **explicitly forward existing brand colors** via component styling props:
  - \`backgroundColor={existingBrandColor}\`
  - \`textColor={existingTextColor}\`
  - \`borderColor={existingBorderColor}\`
  - \`colorScheme="primary" | "success" | "warning" | "error"\`
  - \`style={{ ...existingStyles }}\`

### Rule 4: Zero Typography Breakdown
- **Do NOT override custom project font families, font sizes, or line heights.**
- Pass custom font families to \`<Ux4gThemeProvider typography={{ fontFamily: 'Inter' }}>\` or directly into component \`style\` / \`inputStyle\` / \`textStyle\` props.

### Rule 5: Zero Layout Breakage & Exact Size Preservation
- Preserve all surrounding layout containers: \`View\`, \`ScrollView\`, \`FlatList\`, \`SafeAreaView\`, \`KeyboardAvoidingView\`, \`Row\`, \`Col\`, flexbox hierarchies, and absolute position overlays.
- Forward exact sizing parameters (\`height\`, \`width\`, \`borderRadius\`, \`padding\`, \`margin\`, \`size="sm" | "md" | "lg"\`) directly into UX4G components so elements do not shrink or misalign.

### Rule 6: Replace Raw & Third-Party Widgets with UX4G Equivalents
Replace standard React Native / Paper / Elements components with their designated \`Ux4g*\` equivalents while preserving all properties:
- \`<TouchableOpacity>\` / \`<Button>\` / \`<PaperButton>\` → \`<Ux4gButton>\`
- \`<TouchableOpacity><Icon /></TouchableOpacity>\` / \`<IconButton>\` → \`<Ux4gIconButton>\`
- \`<TextInput>\` / \`<PaperTextInput>\` / \`<Input>\` → \`<Ux4gInputField>\`
- \`<TextInput multiline>\` → \`<Ux4gTextArea>\`
- \`<Searchbar>\` / \`<SearchBar>\` → \`<Ux4gSearchField>\`
- \`<View style={cardStyle}>\` / \`<Card>\` → \`<Ux4gCard>\`
- \`<Modal>\` / \`<Dialog>\` → \`<Ux4gModal>\`
- \`<Picker>\` / \`<Menu>\` / \`<Overlay>\` → \`<Ux4gDropdown>\`
- \`<Checkbox>\` / \`<CheckBox>\` → \`<Ux4gCheckbox>\` / \`<Ux4gCheckboxGroup>\`
- \`<RadioButton>\` → \`<Ux4gRadioButton>\` / \`<Ux4gRadioGroup>\`
- \`<Switch>\` → \`<Ux4gSwitch>\`
- \`<Chip>\` → \`<Ux4gChip>\` / \`<Ux4gTag>\`
- \`<Badge>\` → \`<Ux4gBadge>\`
- \`<Avatar>\` → \`<Ux4gAvatar>\` / \`<Ux4gAvatarGroup>\`
- \`<ProgressBar>\` → \`<Ux4gLinearProgressBar>\`
- \`<ActivityIndicator>\` → \`<Ux4gCircularProgressIndicator>\` / \`<Ux4gSpinner>\`
- \`<Slider>\` → \`<Ux4gSlider>\`
- \`Alert.alert()\` / \`<Snackbar>\` → \`<Ux4gToast>\` (via \`useUx4gToast()\`)
- Custom App Bar / \`<Appbar.Header>\` → \`<Ux4gAppHeader>\`

### Rule 7: Leverage Government-Exclusive Modules Seamlessly
Where applicable, upgrade custom manual input logic to UX4G's official Government modules without disrupting the form flow:
- **Aadhaar Input:** \`<Ux4gAadhaarInputField>\` (built-in Verhoeff checksum algorithm & auto 4-4-4 spacing)
- **PAN Card Input:** \`<Ux4gPanInputField>\` (built-in format validator & auto uppercase)
- **OTP Verification:** \`<Ux4gOtpInput>\` (4-digit / 6-digit auto-focus PIN box)
- **Journey / Stepper:** \`<Ux4gJourneyTimeline>\` / \`<Ux4gStatusPipeline>\` (application tracking pipeline)
- **Document / KYC Upload:** \`<Ux4gFileUpload>\` (built-in file size & format constraints)
- **Appointment Booking:** \`<Ux4gSlotGrid>\` (time/date slot selector)
- **Empty States:** \`<Ux4gEmptyState>\`
- **Citizen Feedback:** \`<Ux4gFeedbackForm>\` (Star ratings, CSAT emoji, NPS 0-10)

---

## Side-by-Side Migration Examples (Preserving Exact Style & Flow)

### 1. Button Migration (Preserving Custom Brand Color & Logic)

#### Before (Legacy React Native / Custom Touchable):
\`\`\`tsx
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

<TouchableOpacity
  style={[styles.primaryBtn, { backgroundColor: '#00695C', height: 48, borderRadius: 10 }]}
  onPress={handlePayment}
  disabled={isSubmitting}
>
  <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600', fontFamily: 'Inter' }}>
    {isSubmitting ? 'Processing...' : 'Pay Application Fee'}
  </Text>
</TouchableOpacity>
\`\`\`

#### After (UX4G React Native — Exact Style & Logic Preserved):
\`\`\`tsx
import { Ux4gButton } from 'ux4g-react-native-design-system';

<Ux4gButton
  variant="primary"
  size="md"
  loading={isSubmitting}
  onPress={handlePayment}
  backgroundColor="#00695C"               // Brand color preserved
  textColor="#FFFFFF"                     // Text color preserved
  style={{ height: 48, borderRadius: 10 }} // Height & radius preserved
>
  Pay Application Fee
</Ux4gButton>
\`\`\`

---

### 2. Form Input Field (Preserving State, Validation & Typography)

#### Before (Vanilla TextInput with Manual Label & Error):
\`\`\`tsx
<View style={{ marginBottom: 16 }}>
  <Text style={{ fontSize: 14, fontWeight: '500', color: '#1E293B', marginBottom: 6 }}>
    Applicant Full Name <Text style={{ color: '#EF4444' }}>*</Text>
  </Text>
  <TextInput
    value={name}
    onChangeText={setName}
    placeholder="Enter name as per Aadhaar"
    style={{
      height: 48,
      borderWidth: 1,
      borderColor: error ? '#EF4444' : '#CBD5E1',
      borderRadius: 8,
      paddingHorizontal: 14,
      fontSize: 14,
      fontFamily: 'Inter',
      backgroundColor: '#FFFFFF',
    }}
  />
  {error && <Text style={{ color: '#EF4444', fontSize: 12, marginTop: 4 }}>{error}</Text>}
</View>
\`\`\`

#### After (UX4G React Native — Exact State, Validation & Style Preserved):
\`\`\`tsx
import { Ux4gInputField } from 'ux4g-react-native-design-system';

<Ux4gInputField
  label="Applicant Full Name"
  required
  value={name}
  onChangeText={setName}
  placeholder="Enter name as per Aadhaar"
  errorText={error}
  helperText="Must match official records exactly"
  style={{ marginBottom: 16 }}
  inputStyle={{ height: 48, borderRadius: 8, fontSize: 14 }}
/>
\`\`\`

---

### 3. Application App Bar / Navigation Header

#### Before (Custom Header Bar):
\`\`\`tsx
<View style={{ height: 56, backgroundColor: '#00695C', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 }}>
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Icon name="arrow-back" size={24} color="#FFF" />
  </TouchableOpacity>
  <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold', marginLeft: 16, flex: 1 }}>
    National Scholarship Portal
  </Text>
  <TouchableOpacity onPress={openNotifications}>
    <Icon name="notifications" size={24} color="#FFF" />
  </TouchableOpacity>
</View>
\`\`\`

#### After (UX4G React Native):
\`\`\`tsx
import { Ux4gAppHeader } from 'ux4g-react-native-design-system';

<Ux4gAppHeader
  title="National Scholarship Portal"
  subtitle="Government of India"
  showBackButton
  onBackPress={() => navigation.goBack()}
  backgroundColor="#00695C"
  rightActions={[
    { icon: 'notifications', badgeCount: 2, onPress: openNotifications },
    { icon: 'account-circle', onPress: openProfile },
  ]}
/>
\`\`\`

---

### 4. Custom Cards & Surfaces

#### Before (Custom Styled Container):
\`\`\`tsx
<View style={{
  backgroundColor: '#FFFFFF',
  borderRadius: 12,
  padding: 16,
  shadowColor: '#000',
  shadowOpacity: 0.08,
  shadowRadius: 8,
  elevation: 2,
}}>
  <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#0F172A' }}>Application Status</Text>
  <Text style={{ color: '#64748B', marginTop: 8 }}>Your application is under officer review.</Text>
</View>
\`\`\`

#### After (UX4G React Native):
\`\`\`tsx
import { Ux4gCard } from 'ux4g-react-native-design-system';

<Ux4gCard
  variant="elevated"
  style={{
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
  }}
>
  <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#0F172A' }}>Application Status</Text>
  <Text style={{ color: '#64748B', marginTop: 8 }}>Your application is under officer review.</Text>
</Ux4gCard>
\`\`\`

---

### 5. Government KYC & Security Modules

\`\`\`tsx
import {
  Ux4gAadhaarInputField,
  Ux4gPanInputField,
  Ux4gOtpInput,
  Ux4gFileUpload,
} from 'ux4g-react-native-design-system';

// 1. Aadhaar Input (Auto 4-4-4 spacing & Verhoeff checksum calculation)
<Ux4gAadhaarInputField
  label="Aadhaar Number"
  value={aadhaar}
  onChangeText={setAadhaar}
  maskPeekToggle
  required
/>

// 2. PAN Card Input (Automatic uppercase & 10-char regex verification)
<Ux4gPanInputField
  label="PAN Number"
  value={pan}
  onChangeText={setPan}
  required
/>

// 3. OTP 6-Digit PIN Box (Auto-focus & SMS autofill support)
<Ux4gOtpInput
  length={6}
  onComplete={(code) => handleVerifyOtp(code)}
  autoFocus
/>

// 4. Document / File Uploader
<Ux4gFileUpload
  label="Upload Income Certificate (PDF / PNG)"
  maxFiles={2}
  maxSizeMB={5}
  onSelectFiles={(files) => handleAttachFiles(files)}
/>
\`\`\`

---

## Step-by-Step Migration Process

1. **Step 1 — Codebase & Dependency Audit**:
   - Inspect \`package.json\`, dependencies, state management architecture, and navigation setup.
   - Install \`ux4g-react-native-design-system react-native-svg react-native-safe-area-context\`.

2. **Step 2 — Safe Theme Setup**:
   - Wrap application root with \`<Ux4gThemeProvider colors={...}>\` and \`<Ux4gToastProvider>\` without overriding existing styles or fonts.

3. **Step 3 — Screen-by-Screen Component Replacement**:
   - Migrate widgets screen-by-screen.
   - Forward all existing \`value\`, \`onChangeText\`, \`onPress\`, \`backgroundColor\`, \`textColor\`, \`borderRadius\`, \`style\`, and \`inputStyle\` properties.

4. **Step 4 — Government Modules Integration (Optional Upgrade)**:
   - Replace generic numeric inputs with \`<Ux4gAadhaarInputField>\` or \`<Ux4gPanInputField>\` where citizen identity validation is needed.
   - Replace custom OTP boxes with \`<Ux4gOtpInput>\`.

5. **Step 5 — Verification & QA**:
   - Verify that forms submit, validate, and navigate exactly as before.
   - Verify that custom colors, fonts, and dark mode toggles operate smoothly across iOS & Android.

---

## Post-Migration Verification Checklist

- [ ] **Zero Logic Breakage:** All form submit flows, API integrations, and state updates trigger without error.
- [ ] **Zero Styling Loss:** Custom brand colors, font families, font sizes, and layout margins remain visually identical.
- [ ] **Validation Parity:** All validators, error texts, and controller listeners function properly.
- [ ] **Dark Mode Parity:** Light and dark theme transitions work seamlessly.
- [ ] **TypeScript / Build Clean:** \`npm run build\` / \`tsc --noEmit\` passes with zero errors.

---

## Start Migration

Begin by inspecting my React Native project structure. Present a structured screen-by-screen migration plan confirming that all existing state controllers, business flows, custom colors, sizing bounds, and typography will be strictly preserved before writing any replacement code.

---

*UX4G React Native Design System | ux4g-react-native-design-system | National e-Governance Division (NeGD) | Government of India*
`;
