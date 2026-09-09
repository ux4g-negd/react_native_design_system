# UX4G React Native Design System — Complete Migration & Adoption Guide (MIGRATION.md)

This comprehensive guide outlines how to migrate an existing React Native application (whether built with **Vanilla React Native**, **React Native Paper**, **React Native Elements**, **NativeBase**, or **custom UI components**) to the **UX4G React Native Design System (`ux4g-react-native-design-system`)** seamlessly — **preserving 100% of your original project colors, typography styles, exact component sizes, user flows, and business logic**.

---

## Table of Contents
1. [Core Migration Philosophy & The 5 Golden Rules](#1-core-migration-philosophy--the-5-golden-rules)
2. [Installation & Package Setup](#2-installation--package-setup)
3. [Global Theme & Brand Palette Binding](#3-global-theme--brand-palette-binding)
   - [Method A: Global Theme Injection (Recommended)](#method-a-global-theme-injection-recommended)
   - [Method B: Component-Level Color & Size Overrides](#method-b-component-level-color--size-overrides)
4. [Master Component Mapping Catalog (35+ Components)](#4-master-component-mapping-catalog-35-components)
5. [Side-by-Side Migration Recipes (With Size & Color Preservation)](#5-side-by-side-migration-recipes-with-size--color-preservation)
   - [1. Buttons & Icon Buttons](#1-buttons--icon-buttons)
   - [2. Text Inputs, Search Fields & Text Areas](#2-text-inputs-search-fields--text-areas)
   - [3. Cards, Balance Containers & Surfaces](#3-cards-balance-containers--surfaces)
   - [4. Banner Carousels & Sliders](#4-banner-carousels--sliders)
   - [5. Modals, Action Sheets & Dialogs](#5-modals-action-sheets--dialogs)
   - [6. Dropdowns & Selection Pickers](#6-dropdowns--selection-pickers)
   - [7. Checkboxes, Radios & Switches](#7-checkboxes-radios--switches)
   - [8. Tags, Badges & Filter Chips](#8-tags-badges--filter-chips)
   - [9. Journey Timelines & Status Pipelines](#9-journey-timelines--status-pipelines)
   - [10. Progress Indicators, Bars & Spinners](#10-progress-indicators-bars--spinners)
   - [11. Government KYC Modules (Aadhaar, PAN, OTP, File Upload)](#11-government-kyc-modules-aadhaar-pan-otp-file-upload)
   - [12. App Headers & Navigation Bars](#12-app-headers--navigation-bars)
   - [13. Empty States, Result Lists & Pagination](#13-empty-states-result-lists--pagination)
6. [Preserving Exact Sizing, Typography & Layout Hierarchy](#6-preserving-exact-sizing-typography--layout-hierarchy)
7. [Troubleshooting & Common Migration Pitfalls](#7-troubleshooting--common-migration-pitfalls)
8. [Step-by-Step Gradual Migration Checklist](#8-step-by-step-gradual-migration-checklist)

---

## 1. Core Migration Philosophy & The 5 Golden Rules

When migrating any existing app to UX4G, ensure no visual regressions or broken flows occur by adhering to these **5 Golden Rules**:

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                           THE 5 GOLDEN RULES OF MIGRATION                        │
├──────────────────────────────────────────────────────────────────────────────────┤
│ 1. MAXIMIZE COMPONENT USAGE : If a UI part can be built with a UX4G component,   │
│    use it (e.g. Carousel, Tag, Card, Modal, Timeline, Dropdown, OtpInput).       │
│                                                                                  │
│ 2. ZERO COLOR LOSS          : Bind your project's brand palette to               │
│    <Ux4gThemeProvider colors={...}> or override local color props so default     │
│    colors NEVER overwrite your existing brand identity.                         │
│                                                                                  │
│ 3. ZERO SIZE DISTORTION     : Explicitly configure size props (sm/md/lg or size, │
│    height, width, borderRadius) & style objects so elements retain exact bounds. │
│                                                                                  │
│ 4. PRESERVE TYPOGRAPHY      : Pass custom font families and line heights to the  │
│    theme provider or text style props so fonts do not reset to browser defaults. │
│                                                                                  │
│ 5. PRESERVE LOGIC & FLOW    : Keep existing state bindings (value, checked),     │
│    callbacks (onPress, onChangeText, onSelect), validation, and navigation intact│
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Installation & Package Setup

Install the UX4G React Native Design System and required peer dependencies:

```bash
# Using npm
npm install ux4g-react-native-design-system react-native-svg react-native-safe-area-context

# Using yarn
yarn add ux4g-react-native-design-system react-native-svg react-native-safe-area-context

# Using pnpm
pnpm add ux4g-react-native-design-system react-native-svg react-native-safe-area-context
```

> **For iOS (Bare React Native)**: Run `npx pod-install` or `cd ios && pod install`.  
> **For Expo**: Dependencies work seamlessly in Expo SDK 50+ out of the box.

---

## 3. Global Theme & Brand Palette Binding

### Method A: Global Theme Injection (Recommended)
You do **NOT** have to adopt default UX4G blue/orange colors if your application already has a defined brand identity (e.g., Purple, Emerald, Indigo, Teal, or Dark Mode).

Map your existing app theme directly into `<Ux4gThemeProvider>` at your root `App.tsx`:

```tsx
// App.tsx
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ux4gThemeProvider, Ux4gToastProvider } from 'ux4g-react-native-design-system';
import AppNavigator from './src/navigation/AppNavigator';

// Your existing project theme tokens
const MY_APP_COLORS = {
  primary: '#4F46E5',         // Your Brand Primary (e.g. Indigo)
  primaryLight: '#EEF2FF',    // Light tint
  primaryDark: '#3730A3',     // Dark tint
  secondary: '#06B6D4',       // Brand Accent / Secondary (Cyan)
  background: '#F8FAFC',      // Screen background
  surface: '#FFFFFF',         // Card / Modal background
  textPrimary: '#0F172A',     // Main text color
  textSecondary: '#64748B',   // Muted text color
  border: '#E2E8F0',          // Input / Card border
  success: '#10B981',         // Positive alert / badge
  warning: '#F59E0B',         // Warning alert / badge
  error: '#EF4444',           // Validation error
};

// Optional: Custom font families matching your existing app
const MY_APP_TYPOGRAPHY = {
  fontFamily: 'Inter-Regular',
  fontFamilyMedium: 'Inter-Medium',
  fontFamilyBold: 'Inter-Bold',
};

export default function App() {
  return (
    <SafeAreaProvider>
      <Ux4gThemeProvider
        isDark={false}
        colors={MY_APP_COLORS}
        typography={MY_APP_TYPOGRAPHY}
      >
        <Ux4gToastProvider>
          <AppNavigator />
        </Ux4gToastProvider>
      </Ux4gThemeProvider>
    </SafeAreaProvider>
  );
}
```

---

### Method B: Component-Level Color & Size Overrides
For custom one-off components (e.g., a special purple quick action button, a tinted card, or an alert tag), UX4G components accept direct style and color overrides:

```tsx
// Example: Customizing color, size, and border radius directly on UX4G component
<Ux4gIconButton
  icon={({ color }) => <CustomIcon name="send" size={20} color="#6366F1" />}
  size={52}                         // Exact numeric size in px
  borderRadius={16}                 // Exact border radius
  backgroundColor="#EEF2FF"         // Exact background color
  borderColor="#C7D2FE"             // Exact border color
  style={{ borderWidth: 1 }}        // Standard React Native style object
  onPress={handleSend}
/>
```

---

## 4. Master Component Mapping Catalog (35+ Components)

If any part of your UI can be represented by a UX4G component, use the corresponding component below:

| UI Category | Legacy / Custom RN | RN Paper / Elements | UX4G Component | Key Props to Preserve Sizing & Colors |
| :--- | :--- | :--- | :--- | :--- |
| **Action Button** | `<TouchableOpacity>`, `<Button>` | `<Button>` | `<Ux4gButton>` | `variant`, `size`, `backgroundColor`, `textColor`, `style` |
| **Icon Button** | `<TouchableOpacity><Icon /></TouchableOpacity>` | `<IconButton>` | `<Ux4gIconButton>` | `size`, `borderRadius`, `backgroundColor`, `contentColor` |
| **Text Input** | `<TextInput>` | `<TextInput>`, `<Input>` | `<Ux4gInputField>` | `label`, `placeholder`, `errorText`, `required`, `style`, `inputStyle` |
| **Search Input** | `<TextInput>` | `<Searchbar>`, `<SearchBar>`| `<Ux4gSearchField>` | `placeholder`, `onSearch`, `value`, `onChangeText` |
| **Multi-line Text**| `<TextInput multiline>` | `<TextInput multiline>` | `<Ux4gTextArea>` | `rows`, `maxLength`, `showCharCount`, `style` |
| **Card / Container**| `<View style={cardStyle}>`| `<Card>` | `<Ux4gCard>` | `title`, `subtitle`, `variant`, `style`, `borderRadius` |
| **Carousel / Swiper**| Custom `<FlatList horizontal>`| `react-native-snap-carousel`| `<Ux4gCarousel>` | `data`, `renderItem`, `autoPlay`, `pagination`, `height` |
| **Modal / Dialog** | `<Modal>`, Bottom Sheet | `<Modal>`, `<Dialog>` | `<Ux4gModal>` | `visible`, `onClose`, `title`, `actions`, `animationType` |
| **Dropdown / Select**| `@react-native-picker/picker`| `<Menu>`, `<Overlay>` | `<Ux4gDropdown>` | `options`, `value`, `onSelect`, `searchable`, `placeholder` |
| **Checkbox** | `@react-native-community/checkbox` | `<Checkbox>` | `<Ux4gCheckbox>` | `label`, `checked`, `onChange`, `colorScheme` |
| **Checkbox Group** | Custom list of checkboxes | Custom view | `<Ux4gCheckboxGroup>` | `options`, `selectedValues`, `onChange` |
| **Radio Button** | Custom Touchable circles | `<RadioButton>` | `<Ux4gRadioButton>` | `label`, `selected`, `onSelect`, `colorScheme` |
| **Radio Group** | Custom radio lists | `<RadioButton.Group>` | `<Ux4gRadioGroup>` | `options`, `selectedValue`, `onValueChange` |
| **Toggle Switch** | `<Switch>` | `<Switch>` | `<Ux4gSwitch>` | `checked`, `onToggle`, `colorScheme`, `disabled` |
| **Tag / Pill** | `<View style={tagStyle}>` | `<Chip>` | `<Ux4gTag>` | `text`, `size`, `colorScheme`, `shape`, `style` |
| **Filter Chip** | Custom touchable pill | `<Chip mode="flat">` | `<Ux4gChip>` | `label`, `selected`, `onPress`, `removable` |
| **Badge Counter** | `<View style={badgeStyle}>` | `<Badge>` | `<Ux4gBadge>` | `count`, `variant`, `size`, `colorScheme` |
| **Avatar** | `<Image style={{ borderRadius }}>` | `<Avatar.Image>` | `<Ux4gAvatar>` | `source`, `name`, `size`, `shape`, `badge` |
| **Avatar Group** | Custom overlapping Images | Custom flex row | `<Ux4gAvatarGroup>` | `avatars`, `max`, `size` |
| **Accordion** | Custom expandable view | `<List.Accordion>` | `<Ux4gAccordion>` | `title`, `subtitle`, `expanded`, `onToggle` |
| **Linear Progress**| `<ProgressBarAndroid>` | `<ProgressBar>` | `<Ux4gLinearProgressBar>` | `progress`, `colorScheme`, `height`, `showLabel` |
| **Circle Progress**| `<ActivityIndicator>` | `<ActivityIndicator>` | `<Ux4gCircularProgressIndicator>` | `progress`, `size`, `strokeWidth`, `colorScheme` |
| **Half Circle Gauge**| Custom SVG Gauge | Custom view | `<Ux4gHalfCircleProgress>` | `progress`, `size`, `thickness`, `colorScheme` |
| **Spinner Loader** | `<ActivityIndicator>` | `<ActivityIndicator>` | `<Ux4gSpinner>` | `size`, `colorScheme` |
| **Slider / Range** | `@react-native-community/slider` | `<Slider>` | `<Ux4gSlider>` | `value`, `onValueChange`, `min`, `max`, `step`, `colorScheme` |
| **Toast / Alert** | `Alert.alert()`, `react-native-toast-message` | `<Snackbar>` | `<Ux4gToast>`, `useUx4gToast()` | `title`, `message`, `variant`, `duration` |
| **Status Banner** | Custom colored banner view | `<Banner>` | `<Ux4gStatusBanner>` | `type`, `title`, `description`, `actionLabel`, `onAction` |
| **Step Timeline** | Custom step list | Custom timeline | `<Ux4gJourneyTimeline>` | `stages`, `currentStage`, `orientation` |
| **Status Pipeline**| Custom stage breadcrumb | Custom pipeline | `<Ux4gStatusPipeline>` | `steps`, `activeStep`, `orientation` |
| **Stepper Counter**| Custom `-` `+` buttons | Custom counter | `<Ux4gStepper>` | `value`, `onChange`, `min`, `max`, `step` |
| **Aadhaar Input** | Custom masked TextInput | N/A | `<Ux4gAadhaarInputField>` | `value`, `onChangeText`, `maskPeekToggle` (Verhoeff checksum) |
| **PAN Card Input** | Custom regex TextInput | N/A | `<Ux4gPanInputField>` | `value`, `onChangeText` (Auto uppercase & syntax check) |
| **OTP Box Input** | 4/6 individual TextInputs | N/A | `<Ux4gOtpInput>` | `length`, `onComplete`, `autoFocus`, `secureTextEntry` |
| **File Upload** | Custom DocumentPicker View | N/A | `<Ux4gFileUpload>` | `onSelectFiles`, `accept`, `maxFiles`, `maxSizeMB` |
| **Slot Grid** | Custom time/date grid | Custom grid | `<Ux4gSlotGrid>` | `slots`, `selectedSlot`, `onSelectSlot` |
| **Date Picker** | `@react-native-community/datetimepicker` | `react-native-paper-dates` | `<Ux4gDatePicker>` | `value`, `onChange`, `minDate`, `maxDate` |
| **Time Picker** | `@react-native-community/datetimepicker` | `react-native-paper-dates` | `<Ux4gTimePicker>` | `value`, `onChange`, `is24Hour` |
| **Empty State** | Custom "No Data" View | Custom view | `<Ux4gEmptyState>` | `title`, `description`, `icon`, `actionButton` |
| **Pagination** | Custom Prev/Next Buttons | Custom footer | `<Ux4gPagination>` | `currentPage`, `totalPages`, `onPageChange` |
| **Result List** | Custom search results list | `<FlatList>` | `<Ux4gResultList>` | `items`, `renderItem`, `keyExtractor`, `emptyText` |
| **Divider** | `<View style={{ height: 1 }} />`| `<Divider>` | `<Ux4gDivider>` | `orientation`, `thickness`, `color` |
| **App Header** | Custom Header Bar | `<Appbar.Header>` | `<Ux4gAppHeader>` | `title`, `subtitle`, `showBackButton`, `onBackPress`, `rightActions` |

---

## 5. Side-by-Side Migration Recipes (With Size & Color Preservation)

### 1. Buttons & Icon Buttons

#### Before (Legacy React Native / Custom Touchable):
```tsx
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

<TouchableOpacity
  style={[styles.primaryBtn, { backgroundColor: '#4F46E5', height: 48, borderRadius: 12 }]}
  onPress={handleCheckout}
  disabled={isLoading}
>
  <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>
    {isLoading ? 'Processing...' : 'Proceed to Checkout'}
  </Text>
</TouchableOpacity>
```

#### After (UX4G — Preserving Exact Dimensions & Brand Color):
```tsx
import { Ux4gButton } from 'ux4g-react-native-design-system';

<Ux4gButton
  variant="primary"
  size="md"
  loading={isLoading}
  onPress={handleCheckout}
  backgroundColor="#4F46E5"              // Preserves exact brand color
  textColor="#FFFFFF"                    // Preserves exact text color
  style={{ height: 48, borderRadius: 12 }} // Preserves exact height & radius
>
  Proceed to Checkout
</Ux4gButton>
```

---

### 2. Text Inputs, Search Fields & Text Areas

#### Before (Vanilla TextInput with manual error & label):
```tsx
<View style={{ marginBottom: 16 }}>
  <Text style={{ fontSize: 14, fontWeight: '500', color: '#334155', marginBottom: 6 }}>
    Mobile Number <Text style={{ color: 'red' }}>*</Text>
  </Text>
  <TextInput
    value={phone}
    onChangeText={setPhone}
    placeholder="Enter 10-digit number"
    keyboardType="phone-pad"
    maxLength={10}
    style={{
      height: 48,
      borderWidth: 1,
      borderColor: error ? '#EF4444' : '#CBD5E1',
      borderRadius: 10,
      paddingHorizontal: 14,
      fontSize: 15,
      backgroundColor: '#FFFFFF',
    }}
  />
  {error && <Text style={{ color: '#EF4444', fontSize: 12, marginTop: 4 }}>{error}</Text>}
</View>
```

#### After (UX4G — Preserves Layout, Adds Accessibility & Clear Error Handling):
```tsx
import { Ux4gInputField } from 'ux4g-react-native-design-system';

<Ux4gInputField
  label="Mobile Number"
  required
  value={phone}
  onChangeText={setPhone}
  placeholder="Enter 10-digit number"
  keyboardType="phone-pad"
  maxLength={10}
  errorText={error}
  style={{ marginBottom: 16 }}
  inputStyle={{ height: 48, borderRadius: 10, fontSize: 15 }} // Maintains exact size & font
/>
```

---

### 3. Cards, Balance Containers & Surfaces

#### Before (Custom Balance Card with Gradient / Tinted Background):
```tsx
<View style={{
  backgroundColor: '#1E293B',
  borderRadius: 16,
  padding: 20,
  marginHorizontal: 16,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 8,
}}>
  <Text style={{ color: '#94A3B8', fontSize: 13 }}>Total Portfolio Balance</Text>
  <Text style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 'bold', marginVertical: 8 }}>
    ₹1,48,920.00
  </Text>
  <TouchableOpacity onPress={handleTopUp} style={{ backgroundColor: '#4F46E5', padding: 10, borderRadius: 8 }}>
    <Text style={{ color: '#FFF', textAlign: 'center' }}>+ Add Funds</Text>
  </TouchableOpacity>
</View>
```

#### After (UX4G Card — Preserving Exact Background, Padding & Flow):
```tsx
import { Ux4gCard, Ux4gButton } from 'ux4g-react-native-design-system';
import { View, Text } from 'react-native';

<Ux4gCard
  variant="elevated"
  style={{
    backgroundColor: '#1E293B',    // Preserves original dark card background
    borderRadius: 16,              // Preserves exact radius
    padding: 20,                   // Preserves original spacing
    marginHorizontal: 16,
  }}
>
  <Text style={{ color: '#94A3B8', fontSize: 13 }}>Total Portfolio Balance</Text>
  <Text style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 'bold', marginVertical: 8 }}>
    ₹1,48,920.00
  </Text>
  <Ux4gButton
    variant="primary"
    size="sm"
    backgroundColor="#4F46E5"
    onPress={handleTopUp}
    style={{ marginTop: 8, borderRadius: 8 }}
  >
    + Add Funds
  </Ux4gButton>
</Ux4gCard>
```

---

### 4. Banner Carousels & Sliders

If your app contains a promo banner or image carousel created with a custom `ScrollView` or `FlatList`, replace it with `<Ux4gCarousel>` to preserve slide dimensions, auto-play, and indicator dots:

```tsx
import { Ux4gCarousel } from 'ux4g-react-native-design-system';
import { View, Text, Image, StyleSheet } from 'react-native';

const PROMO_SLIDES = [
  { id: '1', title: '50% Cashback on Electricity Bills', code: 'POWER50', bg: '#4F46E5' },
  { id: '2', title: 'Instant Zero-Fee Bank Transfer', code: 'FREEPAY', bg: '#059669' },
];

export const PromoCarousel = () => {
  return (
    <Ux4gCarousel
      data={PROMO_SLIDES}
      height={140}
      autoPlay
      autoPlayInterval={4000}
      showPagination
      renderItem={({ item }) => (
        <View style={[styles.slide, { backgroundColor: item.bg }]}>
          <Text style={styles.slideTitle}>{item.title}</Text>
          <Text style={styles.slideCode}>Code: {item.code}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    height: 140,
    borderRadius: 14,
    padding: 16,
    marginHorizontal: 16,
    justifyContent: 'center',
  },
  slideTitle: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  slideCode: { color: '#E0E7FF', fontSize: 12, marginTop: 4 },
});
```

---

### 5. Modals, Action Sheets & Dialogs

#### Before (React Native `<Modal>` with custom backdrop & sheet):
```tsx
<Modal visible={isOpen} transparent animationType="slide">
  <View style={styles.backdrop}>
    <View style={styles.bottomSheet}>
      <Text style={styles.sheetTitle}>Transfer Confirmation</Text>
      <Text style={styles.sheetBody}>Are you sure you want to send ₹5,000 to Monu?</Text>
      <View style={styles.rowButtons}>
        <TouchableOpacity onPress={() => setIsOpen(false)} style={styles.cancelBtn}>
          <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleConfirmTransfer} style={styles.confirmBtn}>
          <Text style={{ color: '#FFF' }}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>
```

#### After (UX4G Modal — Preserves Sheet Layout, Back-drop, & Action Flow):
```tsx
import { Ux4gModal, Ux4gButton } from 'ux4g-react-native-design-system';
import { Text } from 'react-native';

<Ux4gModal
  visible={isOpen}
  onClose={() => setIsOpen(false)}
  title="Transfer Confirmation"
  actions={
    <>
      <Ux4gButton
        variant="secondary"
        size="md"
        onPress={() => setIsOpen(false)}
        style={{ flex: 1, marginRight: 8 }}
      >
        Cancel
      </Ux4gButton>
      <Ux4gButton
        variant="primary"
        size="md"
        backgroundColor="#4F46E5"
        onPress={handleConfirmTransfer}
        style={{ flex: 1 }}
      >
        Confirm
      </Ux4gButton>
    </>
  }
>
  <Text style={{ fontSize: 14, color: '#475569', lineHeight: 20 }}>
    Are you sure you want to send ₹5,000 to Monu?
  </Text>
</Ux4gModal>
```

---

### 6. Dropdowns & Selection Pickers

#### Before (React Native Community Picker):
```tsx
<Picker selectedValue={bank} onValueChange={(val) => setBank(val)}>
  <Picker.Item label="State Bank of India" value="SBI" />
  <Picker.Item label="HDFC Bank" value="HDFC" />
  <Picker.Item label="ICICI Bank" value="ICICI" />
</Picker>
```

#### After (UX4G Searchable Dropdown with Custom Styling):
```tsx
import { Ux4gDropdown } from 'ux4g-react-native-design-system';

const BANK_OPTIONS = [
  { label: 'State Bank of India', value: 'SBI' },
  { label: 'HDFC Bank', value: 'HDFC' },
  { label: 'ICICI Bank', value: 'ICICI' },
];

<Ux4gDropdown
  label="Select Bank Account"
  placeholder="Choose your bank"
  options={BANK_OPTIONS}
  value={bank}
  onSelect={(option) => setBank(option.value)}
  searchable
  style={{ marginBottom: 16 }}
/>
```

---

### 7. Checkboxes, Radios & Switches

```tsx
import {
  Ux4gCheckbox,
  Ux4gRadioButton,
  Ux4gRadioGroup,
  Ux4gSwitch
} from 'ux4g-react-native-design-system';

// 1. Single Checkbox (Preserves original label & active brand color)
<Ux4gCheckbox
  label="Set as default payment method"
  checked={isDefault}
  onChange={setIsDefault}
  colorScheme="primary" // Automatically uses theme primary color
/>

// 2. Radio Group
<Ux4gRadioGroup
  options={[
    { label: 'UPI / QR Code', value: 'upi' },
    { label: 'Net Banking', value: 'netbanking' },
    { label: 'Debit / Credit Card', value: 'card' },
  ]}
  selectedValue={paymentMode}
  onValueChange={setPaymentMode}
/>

// 3. Toggle Switch
<Ux4gSwitch
  checked={enableBiometrics}
  onToggle={setEnableBiometrics}
  colorScheme="primary"
/>
```

---

### 8. Tags, Badges & Filter Chips

#### Replacing custom status indicators and pill chips:
```tsx
import { Ux4gTag, Ux4gBadge, Ux4gChip } from 'ux4g-react-native-design-system';

// Status Tag (e.g. Success, Pending, Failed)
<Ux4gTag
  text="COMPLETED"
  size="m"
  shape="rounded"
  colorScheme="success"
  style="filled"
/>

// Badge Counter on Notifications
<Ux4gBadge
  count={3}
  size="md"
  colorScheme="error"
/>

// Interactive Filter Chip
<Ux4gChip
  label="Electricity Bills"
  selected={activeFilter === 'bills'}
  onPress={() => setActiveFilter('bills')}
/>
```

---

### 9. Journey Timelines & Status Pipelines

Replace custom multi-step status tracks with `<Ux4gJourneyTimeline>` or `<Ux4gStatusPipeline>`:

```tsx
import { Ux4gJourneyTimeline, Ux4gStatusPipeline } from 'ux4g-react-native-design-system';

// Multi-step Application / Delivery Journey
<Ux4gJourneyTimeline
  stages={[
    { title: 'Payment Initiated', status: 'completed', date: '09 Mar 2026, 10:30 AM' },
    { title: 'Processing at Bank', status: 'completed', date: '09 Mar 2026, 10:32 AM' },
    { title: 'Credited to Beneficiary', status: 'active', date: 'In Progress' },
    { title: 'Confirmation Receipt', status: 'pending' },
  ]}
/>
```

---

### 10. Progress Indicators, Bars & Spinners

```tsx
import {
  Ux4gLinearProgressBar,
  Ux4gCircularProgressIndicator,
  Ux4gHalfCircleProgress,
  Ux4gSpinner,
} from 'ux4g-react-native-design-system';

// 1. Linear Progress Bar
<Ux4gLinearProgressBar
  progress={0.75}
  height={8}
  colorScheme="primary"
  showLabel
/>

// 2. Circular Score / Progress Indicator
<Ux4gCircularProgressIndicator
  progress={0.85}
  size={64}
  strokeWidth={6}
  colorScheme="success"
/>

// 3. Half-Circle Gauge (e.g. Credit Score or Speedometer)
<Ux4gHalfCircleProgress
  progress={0.72}
  size={120}
  thickness={10}
  colorScheme="primary"
/>
```

---

### 11. Government KYC Modules (Aadhaar, PAN, OTP, File Upload)

Upgrade unmasked, raw inputs to built-in UX4G secure validation fields:

```tsx
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

// 4. File / Document Uploader
<Ux4gFileUpload
  label="Upload Salary Slip (PDF / PNG)"
  maxFiles={2}
  maxSizeMB={5}
  onSelectFiles={(files) => handleAttachFiles(files)}
/>
```

---

### 12. App Headers & Navigation Bars

```tsx
import { Ux4gAppHeader } from 'ux4g-react-native-design-system';

<Ux4gAppHeader
  title="Payments Dashboard"
  subtitle="UPI & Bank Accounts"
  showBackButton
  onBackPress={() => navigation.goBack()}
  rightActions={[
    { icon: 'notifications', onPress: () => navigation.navigate('Alerts') },
    { icon: 'help-circle', onPress: () => openHelpSheet() },
  ]}
/>
```

---

### 13. Empty States, Result Lists & Pagination

```tsx
import { Ux4gEmptyState, Ux4gPagination } from 'ux4g-react-native-design-system';

// When a search returns no items:
<Ux4gEmptyState
  title="No Transactions Found"
  description="We could not find any transactions matching your filter criteria."
  actionButton={{
    text: 'Reset Filters',
    onPress: () => resetFilters(),
  }}
/>

// Pagination controls for tables / logs:
<Ux4gPagination
  currentPage={page}
  totalPages={10}
  onPageChange={(newPage) => setPage(newPage)}
/>
```

---

## 6. Preserving Exact Sizing, Typography & Layout Hierarchy

To ensure **no elements shrink, expand, or misalign** after switching to UX4G:

### 1. Sizing Grid & Flex Preservation
```tsx
// If your previous grid had 4 items per row (width: '23%'):
<View style={styles.gridRow}>
  {items.map((item) => (
    <View key={item.id} style={{ width: '23%', alignItems: 'center' }}>
      <Ux4gIconButton
        icon={({ color }) => <Icon name={item.icon} size={22} color={item.color} />}
        size={54}             // Set exact diameter in px
        borderRadius={18}     // Set exact corner curve
        backgroundColor={item.bgLight}
        onPress={() => handleAction(item)}
      />
      <Text style={styles.itemLabel}>{item.title}</Text>
    </View>
  ))}
</View>
```

### 2. Form Input Heights & Margins
- Default UX4G inputs use standard 48px touch targets.
- If your previous form used 40px or 52px height, pass `inputStyle={{ height: 40 }}` or `inputStyle={{ height: 52 }}`.

### 3. Font Family & Text Hierarchy
- Never rely on default system fonts if your app uses custom branding (e.g. `Poppins`, `Inter`, `SF Pro`).
- Provide font families to `Ux4gThemeProvider` via `typography={{ fontFamily: 'YourCustomFont' }}`.

---

## 7. Troubleshooting & Common Migration Pitfalls

| Issue Observed | Root Cause | Exact Solution |
| :--- | :--- | :--- |
| **"Button color changed to default blue"** | Theme not supplied with brand colors | Pass `colors={{ primary: '#YourColor' }}` to `<Ux4gThemeProvider>` or set `backgroundColor="#YourColor"` on `<Ux4gButton>`. |
| **"Buttons shrunk or expanded"** | Omitted `size` or parent `flex` constraints | Set `size="md"` or supply explicit `style={{ height: 48, width: '100%' }}`. |
| **"Input border looks different"** | Custom borders in old stylesheet | Pass `inputStyle={{ borderRadius: 10, borderColor: '#CBD5E1' }}` to `<Ux4gInputField>`. |
| **"Custom Icons not appearing"** | Using raw string instead of icon render callback | Use the render prop syntax: `icon={({ color }) => <YourIcon name="star" size={20} color={color} />}`. |
| **"Modal not opening on click"** | State variable not wired to `visible` / `onClose` | Bind `visible={isOpen}` and `onClose={() => setIsOpen(false)}` on `<Ux4gModal>`. |
| **"Toast alert not popping up"** | `<Ux4gToastProvider>` missing at App root | Wrap your root `<AppNavigator>` inside `<Ux4gToastProvider>` within `<Ux4gThemeProvider>`. |

---

## 8. Step-by-Step Gradual Migration Checklist

- [ ] **Step 1: Root Integration**
  - [ ] Wrap App in `<Ux4gThemeProvider>` with your project's custom `colors` and `typography`.
  - [ ] Wrap in `<Ux4gToastProvider>`.
- [ ] **Step 2: Buttons & Interactive Elements**
  - [ ] Replace `<TouchableOpacity>` / `<Button>` with `<Ux4gButton>` and `<Ux4gIconButton>`.
  - [ ] Verify `onPress`, `loading`, `disabled`, and custom background colors.
- [ ] **Step 3: Form Controls**
  - [ ] Replace `<TextInput>` with `<Ux4gInputField>`, `<Ux4gTextArea>`, and `<Ux4gSearchField>`.
  - [ ] Replace native pickers with `<Ux4gDropdown>`.
  - [ ] Replace native checkboxes/switches with `<Ux4gCheckbox>`, `<Ux4gRadioButton>`, and `<Ux4gSwitch>`.
- [ ] **Step 4: Surface Containers & Sliders**
  - [ ] Replace custom cards with `<Ux4gCard>`.
  - [ ] Replace custom carousels with `<Ux4gCarousel>`.
  - [ ] Replace range controls with `<Ux4gSlider>`.
- [ ] **Step 5: Overlays & Modals**
  - [ ] Replace custom bottom sheets / modals with `<Ux4gModal>`.
  - [ ] Replace `Alert.alert()` calls with `useUx4gToast()`.
- [ ] **Step 6: Identity & Gov Validation Modules**
  - [ ] Migrate Aadhaar fields to `<Ux4gAadhaarInputField>`.
  - [ ] Migrate PAN fields to `<Ux4gPanInputField>`.
  - [ ] Migrate OTP boxes to `<Ux4gOtpInput>`.
- [ ] **Step 7: Final QA & Visual Polish**
  - [ ] Verify font styles, text colors, and dark mode toggling.
  - [ ] Verify responsive spacing and layout bounds on multiple device screen sizes (Android & iOS).
  - [ ] Confirm zero regressions in business logic, state mutations, and navigation flows.

---

*For interactive live demos, code sandboxes, and complete token references, visit the [UX4G Interactive Documentation Portal](https://ux4g.gov.in).*
