# UX4G React Native Design System

Official React Native implementation of the **UX4G Design System**. Built with TypeScript, comprehensive design tokens, accessible components, and full light/dark mode theming support.

---

## 🚀 Features

- **🌓 Built-in Light & Dark Theming:** Effortless theme switching with `Ux4gThemeProvider` and `useUx4gTheme`.
- **🧩 40+ Production-Ready Components:** Buttons, Form Controls, Navigation Drawers, Dialogs, Sliders, Feedback Forms, and more.
- **🎨 Design Tokens Architecture:** Strict compliance with UX4G color palettes, typography scales, border radii, shadows, and spacing rules.
- **♿ Accessible & Standardized:** Standard UX guidelines tailored for public digital services and modern mobile apps.
- **⚡ Native TypeScript:** Full type definitions and auto-completion out of the box.

---

## 📦 Installation

```bash
# Using npm
npm install ux4g-react-native-design-system react-native-svg

# Using yarn
yarn add ux4g-react-native-design-system react-native-svg
```

### Peer Dependencies

Ensure `react-native-svg` is installed in your project:
```bash
npm install react-native-svg@>=15.0.0
```

*Optional peer dependencies for specialized components:*
- `react-native-document-picker` (for file upload)
- `react-native-image-picker` (for media pickers)

---

## 🏁 Quick Start

Wrap your application root with `Ux4gThemeProvider`:

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Ux4gThemeProvider,
  Ux4gButton,
  Ux4gFeedbackFormStar,
} from 'ux4g-react-native-design-system';

export default function App() {
  const [isDark, setIsDark] = React.useState(false);

  return (
    <Ux4gThemeProvider isDark={isDark}>
      <View style={[styles.container, { backgroundColor: isDark ? '#121212' : '#FFFFFF' }]}>
        <Ux4gButton
          text="Toggle Theme"
          variant="primary"
          onPress={() => setIsDark(!isDark)}
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
```

---

## 📚 Component Catalog

### 1. Actions & Inputs
- `Ux4gButton` / `Ux4gIconButton` / `Ux4gFab`
- `Ux4gInputField` / `Ux4gSearchField` / `Ux4gTextArea`
- `Ux4gAadhaarInputField` / `Ux4gPanInputField` / `Ux4gOtpInput`
- `Ux4gFileUpload`

### 2. Selection & Form Controls
- `Ux4gCheckbox` / `Ux4gRadioButton` / `Ux4gSwitch`
- `Ux4gSelectionDropdown` / `Ux4gActionDropdown`
- `Ux4gChoiceChip` / `Ux4gFilterChip` / `Ux4gInputChip`
- `Ux4gSlider` / `Ux4gDatePicker` / `Ux4gTimePicker`

### 3. Feedback & Indicators
- `Ux4gFeedbackFormStar` (Star ratings + category chips + required comment validation)
- `Ux4gFeedbackFormNps` (0-10 Net Promoter Score + comment validation)
- `Ux4gFeedbackFormCsat` (Emoji sentiment ratings + comment validation)
- `Ux4gToast` / `Ux4gStatusBanner` / `Ux4gStatusPipeline`
- `Ux4gSpinner` / `Ux4gLinearProgressBar` / `Ux4gCircularProgressIndicator`

### 4. Navigation & Layout
- `Ux4gSideMenu` (Responsive Drawer with Left/Right open direction & smooth transitions)
- `Ux4gBottomNavigationBar` (Floating Pill, Extended, Standard variants)
- `Ux4gAppHeader` / `Ux4gStepper` / `Ux4gPagination` / `Ux4gJourneyTimeline`
- `Ux4gBottomSheet` / `Ux4gModal` / `Ux4gAccordion` / `Ux4gCard`
- `Ux4gAvatar` / `Ux4gAvatarGroup` / `Ux4gStatusAvatar` / `Ux4gProfileAvatar`
- `Ux4gBadge` / `Ux4gTag` / `Ux4gTooltip` / `Ux4gDivider` / `Ux4gEmptyState`

---

## 💡 Example: Feedback Forms

All feedback components enforce validation where the submit button activates once both rating and feedback comment are provided:

```tsx
import React from 'react';
import { View } from 'react-native';
import {
  Ux4gFeedbackFormStar,
  Ux4gFeedbackFormNps,
  Ux4gFeedbackFormCsat,
} from 'ux4g-react-native-design-system';

export function FeedbackExample() {
  return (
    <View style={{ gap: 24, padding: 16 }}>
      {/* 5-Star Feedback Form */}
      <Ux4gFeedbackFormStar
        title="Rate your experience"
        improvementTitle="What can we improve?"
        onSubmit={(rating, options, comment) => {
          console.log('Star submitted:', { rating, options, comment });
        }}
      />

      {/* NPS Feedback Form (0-10) */}
      <Ux4gFeedbackFormNps
        title="How likely are you to recommend us?"
        onSubmit={(score, comment) => {
          console.log('NPS submitted:', { score, comment });
        }}
      />

      {/* CSAT Smiley Sentiment Form */}
      <Ux4gFeedbackFormCsat
        title="How do you feel about this service?"
        onSubmit={(rating, comment) => {
          console.log('CSAT submitted:', { rating, comment });
        }}
      />
    </View>
  );
}
```

---

## 🎨 Theme & Tokens Customization

Access active theme properties anywhere using the `useUx4gTheme` hook:

```tsx
import { useUx4gTheme } from 'ux4g-react-native-design-system';

const MyComponent = () => {
  const { colors, typography, isDark } = useUx4gTheme();

  return (
    <Text style={[typography.hM_strong, { color: colors.primary }]}>
      Theme is {isDark ? 'Dark' : 'Light'}
    </Text>
  );
};
```

---

## 📄 License

MIT © [UX4G Team](https://ux4g.gov.in)
