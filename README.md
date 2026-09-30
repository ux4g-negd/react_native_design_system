# UX4G React Native Design System

[![npm version](https://img.shields.io/npm/v/ux4g-react-native-design-system.svg?style=flat-square)](https://www.npmjs.com/package/ux4g-react-native-design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![React Native](https://img.shields.io/badge/React%20Native-0.70+-61DAFB.svg?style=flat-square&logo=react)](https://reactnative.dev/)

Official React Native implementation of the **UX4G (Unified Experience for Government)** Design System. Designed to create consistent, accessible, modern, and high-performance digital experiences across iOS, Android, and mobile platforms.

---

## 🌟 Highlights & Features

- 🌓 **Comprehensive Theming:** Seamless Dark & Light mode support powered by `Ux4gThemeProvider` and the `useUx4gTheme` hook.
- 🎨 **Design Tokens Architecture:** Strict compliance with UX4G palettes, typography scales, elevation shadows, borders, and spacing tokens.
- 🧩 **45+ Production-Ready Components:** Rich suite of accessible UI controls, specialized Indian identity inputs (Aadhaar, PAN, OTP), navigation drawers, and feedback mechanisms.
- ♿ **Accessibility First:** Follows universal design principles and screen reader support out of the box.
- ⚡ **Native TypeScript:** First-class TypeScript declarations with full autocompletion and type safety.
- 📱 **Cross-Platform:** Optimized for both Android and iOS with fluid native-like interactions.

---

## 📦 Installation

Install the package and required peer dependencies:

```bash
# Using npm
npm install ux4g-react-native-design-system react-native-svg

# Using yarn
yarn add ux4g-react-native-design-system react-native-svg

# Using pnpm
pnpm add ux4g-react-native-design-system react-native-svg
```

### Peer Dependencies

| Dependency | Version | Required | Description |
| :--- | :--- | :--- | :--- |
| `react` | `>=18.0.0` | **Yes** | Core React library |
| `react-native` | `>=0.70.0` | **Yes** | React Native framework |
| `react-native-svg` | `>=15.0.0` | **Yes** | Required for vector icons & illustrations |
| `react-native-document-picker` | `*` | Optional | Required only if using `Ux4gFileUpload` |

---

## 🚀 Quick Start

### 1. Wrap your Root Application with `Ux4gThemeProvider`

```tsx
import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import {
  Ux4gThemeProvider,
  Ux4gButton,
  Ux4gAppHeader,
  Ux4gCard,
  Ux4gSwitch,
} from 'ux4g-react-native-design-system';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <Ux4gThemeProvider isDark={isDark}>
      <SafeAreaView style={styles.container}>
        <Ux4gAppHeader
          title="UX4G Mobile App"
          showBackButton={false}
        />

        <View style={styles.content}>
          <Ux4gCard style={styles.card}>
            <Ux4gSwitch
              label="Dark Theme"
              value={isDark}
              onValueChange={setIsDark}
            />
            <Ux4gButton
              text="Primary Action"
              variant="primary"
              onPress={() => alert('Button Clicked!')}
            />
          </Ux4gCard>
        </View>
      </SafeAreaView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    gap: 16,
  },
  card: {
    padding: 16,
    gap: 16,
  },
});
```

---

## 🧩 Component Library

### 1. Core Inputs & Forms
- **`Ux4gInputField`** - Standard text input with prefix/suffix icons, helper text, and validation states.
- **`Ux4gAadhaarInputField`** - Auto-formatting 12-digit Aadhaar input with built-in validation & masking.
- **`Ux4gPanInputField`** - Auto-uppercase formatting for 10-character Indian PAN cards with regex verification.
- **`Ux4gOtpInput`** - Multi-box PIN/OTP entry with auto-focus shifting and clipboard paste support.
- **`Ux4gSearchField`** - Search bar with clear button, loading spinner, and search callbacks.
- **`Ux4gTextArea`** - Multiline text area with character counters and max-length constraints.
- **`Ux4gFileUpload`** - Mobile file attachment picker with progress feedback and mime-type filters.

### 2. Actions & Buttons
- **`Ux4gButton`** - Standard buttons with `primary`, `secondary`, `outline`, and `ghost` variants.
- **`Ux4gIconButton`** - Accessible icon-only buttons with hover and active states.
- **`Ux4gFab`** - Floating Action Button for prominent primary screen actions.
- **`Ux4gLink`** - Accessible hyperlink component for in-app or external navigation.

### 3. Selection & Controls
- **`Ux4gCheckbox`** & **`Ux4gRadioButton`** - Standardized selection controls with labels and helper text.
- **`Ux4gSwitch`** - Smooth animated toggle switches.
- **`Ux4gSelectionDropdown`** / **`Ux4gActionDropdown`** - Mobile-optimized select dropdowns and actions.
- **`Ux4gChips`** (`Ux4gChoiceChip`, `Ux4gFilterChip`, `Ux4gInputChip`) - Interactive filter and tag chips.
- **`Ux4gSlider`** - Continuous and stepped range sliders.
- **`Ux4gDatePicker`** & **`Ux4gTimePicker`** - Standard date and time selection modals.
- **`Ux4gSlotGrid`** - Appointment / time-slot grid selector.

### 4. Navigation & Structure
- **`Ux4gSideMenu`** - Animated drawer navigation with left/right opening directions and backdrop dimming.
- **`Ux4gBottomNavigationBar`** - Modern bottom bar supporting standard, floating pill, and extended variants.
- **`Ux4gAppHeader`** - Top app bar with titles, back buttons, and action icons.
- **`Ux4gStepper`** - Multi-step process indicator (horizontal and vertical).
- **`Ux4gPagination`** - Page navigation controls with numeric and arrow indicators.
- **`Ux4gJourneyTimeline`** - Vertical step-by-step milestone timeline.

### 5. Feedback, Dialogs & Modals
- **`Ux4gModal`** & **`Ux4gBottomSheet`** - Smooth bottom sheets and center dialogs with backdrop dismissal.
- **`Ux4gToast`** - Notification toasts with severity styles (`success`, `info`, `warning`, `danger`).
- **`Ux4gStatusBanner`** - Prominent banner alerts for inline messaging.
- **`Ux4gStatusPipeline`** - Status tracking bar for service lifecycle monitoring.
- **`Ux4gFeedbackForm`** (`Ux4gFeedbackFormStar`, `Ux4gFeedbackFormNps`, `Ux4gFeedbackFormCsat`) - Built-in feedback rating forms with comment validation.

### 6. Indicators, Progress & Data Display
- **`Ux4gSpinner`** - Animated circular loading indicators.
- **`Ux4gLinearProgressBar`** & **`Ux4gCircularProgressIndicator`** - Deterministic and indeterminate progress meters.
- **`Ux4gHalfCircleProgress`** - Semi-circular gauge and score indicators.
- **`Ux4gAvatar`** & **`Ux4gAvatarGroup`** - User profile pictures, fallback initials, and stacked avatar groups.
- **`Ux4gBadge`** & **`Ux4gTag`** - Contextual tags, status badges, and counters.
- **`Ux4gTooltip`** - Informational popovers.
- **`Ux4gCard`** & **`Ux4gAccordion`** - Content containers and collapsible panels.
- **`Ux4gEmptyState`** - Visual placeholders for empty views and 404/no-data states.
- **`Ux4gCarousel`** - Touch-friendly image and card carousel with pagination dots.

---

## 🎨 Design Tokens & Custom Theming

You can consume tokens or access the active theme dynamically using the `useUx4gTheme` hook:

```tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useUx4gTheme, UX4G_COLORS, UX4G_SPACING } from 'ux4g-react-native-design-system';

export const ThemedProfile = () => {
  const { colors, typography, isDark } = useUx4gTheme();

  return (
    <View style={[styles.box, { backgroundColor: colors.backgroundSurface }]}>
      <Text style={[typography.hM_strong, { color: colors.textPrimary }]}>
        Welcome to UX4G
      </Text>
      <Text style={[typography.bodyM_regular, { color: colors.textSecondary }]}>
        Active Mode: {isDark ? 'Dark Mode 🌙' : 'Light Mode ☀️'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: UX4G_SPACING.spacing_16,
    borderRadius: 8,
  },
});
```

---

## 🤝 Contributing & Guidelines

We welcome contributions to help expand and improve the UX4G React Native Design System. Please ensure your components adhere to:
1. UX4G Design Guidelines and accessibility specifications.
2. Complete TypeScript definitions.
3. Light & Dark mode theme token usage.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](file:///c:/Users/Monu/Desktop/prac/openforge/react_native_design_system/LICENSE) file for details.
