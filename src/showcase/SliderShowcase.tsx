import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useUx4gTheme } from '../theme/Ux4gThemeContext';
import { UX4GColors } from '../foundation/colors';
import { Ux4gSlider } from '../components/slider/Slider';

export const SliderShowcase: React.FC = () => {
  const theme = useUx4gTheme();

  // Basic slider state
  const [basicValue, setBasicValue] = useState(50);
  const [disabledValue] = useState(40);

  // Sizes state
  const [smallValue, setSmallValue] = useState(30);
  const [mediumValue, setMediumValue] = useState(60);

  // Steps state
  const [stepsValue, setStepsValue] = useState(50);

  // Caption variants state
  const [helperValue, setHelperValue] = useState(70);
  const [errorValue, setErrorValue] = useState(20);
  const [warningValue, setWarningValue] = useState(85);
  const [successValue, setSuccessValue] = useState(95);

  // Input fields state
  const [inputFieldValue, setInputFieldValue] = useState(65);

  // Value labels state
  const [valueLabelsValue, setValueLabelsValue] = useState(45);

  // Marks and values state
  const [marksValue, setMarksValue] = useState(50);

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={[
          styles.header,
          { borderBottomColor: theme.isDark ? UX4GColors.neutral800 : UX4GColors.neutral200 },
        ]}
      >
        <Text
          style={[
            styles.title,
            { color: theme.isDark ? UX4GColors.white : theme.colors.primary },
          ]}
        >
          Ux4gSlider (`Ux4gSliderProps`)
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.secondary }]}>
          Complete React Native port of Flutter `slider.dart`, matching all props, visual behavior,
          and features including caption variants, marks, input fields, and value labels.
        </Text>
      </View>

      {/* 1. Basic Sliders & States */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
          1. Basic Sliders & States
        </Text>
        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
              borderColor: theme.isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
            },
          ]}
        >
          <Ux4gSlider
            value={basicValue}
            onValueChange={setBasicValue}
            label="Basic Slider"
          />

          <View style={styles.spacer} />

          <Ux4gSlider
            value={basicValue}
            onValueChange={setBasicValue}
            label="Required Slider"
            isRequired={true}
          />

          <View style={styles.spacer} />

          <Ux4gSlider
            value={disabledValue}
            label="Disabled Slider"
            enabled={false}
          />
        </View>
      </View>

      {/* 2. Sizes */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
          2. Sizes (`s`/`small`, `m`/`medium`)
        </Text>
        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
              borderColor: theme.isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
            },
          ]}
        >
          <Ux4gSlider
            size="s"
            value={smallValue}
            onValueChange={setSmallValue}
            label="Small Size (thumb: 16, track: 4)"
          />

          <View style={styles.spacer} />

          <Ux4gSlider
            size="m"
            value={mediumValue}
            onValueChange={setMediumValue}
            label="Medium Size (thumb: 20, track: 6)"
          />
        </View>
      </View>

      {/* 3. Steps (Divisions) */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
          3. Steps (Divisions)
        </Text>
        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
              borderColor: theme.isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
            },
          ]}
        >
          <Ux4gSlider
            value={stepsValue}
            onValueChange={setStepsValue}
            label="4 Steps (5 positions)"
            steps={4}
          />

          <View style={styles.spacer} />

          <Ux4gSlider
            value={stepsValue}
            onValueChange={setStepsValue}
            label="9 Steps (10 positions)"
            steps={9}
          />
        </View>
      </View>

      {/* 4. Caption Variants */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
          4. Caption Variants (`helper`, `error`, `warning`, `success`)
        </Text>
        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
              borderColor: theme.isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
            },
          ]}
        >
          <Ux4gSlider
            value={helperValue}
            onValueChange={setHelperValue}
            label="Helper Caption"
            caption="Standard guidance text assisting the user with configuration."
            captionVariant="helper"
          />

          <View style={styles.spacer} />

          <Ux4gSlider
            value={errorValue}
            onValueChange={setErrorValue}
            label="Error Caption"
            isRequired={true}
            caption="You must select a value above 50 to proceed."
            captionVariant="error"
          />

          <View style={styles.spacer} />

          <Ux4gSlider
            value={warningValue}
            onValueChange={setWarningValue}
            label="Warning Caption"
            caption="Setting this value too high may impact performance."
            captionVariant="warning"
          />

          <View style={styles.spacer} />

          <Ux4gSlider
            value={successValue}
            onValueChange={setSuccessValue}
            label="Success Caption"
            caption="Configuration saved successfully!"
            captionVariant="success"
          />
        </View>
      </View>

      {/* 5. Marks and Values */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
          5. Marks and Values (`showMarksAndValues`)
        </Text>
        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
              borderColor: theme.isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
            },
          ]}
        >
          <Ux4gSlider
            value={marksValue}
            onValueChange={setMarksValue}
            label="With Tick Marks & Values"
            steps={4}
            showMarksAndValues={true}
          />

          <View style={styles.spacer} />

          <Ux4gSlider
            value={marksValue}
            onValueChange={setMarksValue}
            label="Custom Value Formatter"
            steps={4}
            showMarksAndValues={true}
            valueFormatter={(val) => `${val}°C`}
          />
        </View>
      </View>

      {/* 6. Value Labels */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
          6. Value Labels (`showValueLabels`)
        </Text>
        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
              borderColor: theme.isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
            },
          ]}
        >
          <Ux4gSlider
            value={valueLabelsValue}
            onValueChange={setValueLabelsValue}
            label="Default Value Labels"
            showValueLabels={true}
          />

          <View style={styles.spacer} />

          <Ux4gSlider
            value={valueLabelsValue}
            onValueChange={setValueLabelsValue}
            label="Custom Start/End Text"
            startValueText="Low Risk"
            endValueText="High Risk"
          />
        </View>
      </View>

      {/* 7. Input Fields */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
          7. Input Fields (`showInputFields`)
        </Text>
        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
              borderColor: theme.isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
            },
          ]}
        >
          <Ux4gSlider
            value={inputFieldValue}
            onValueChange={setInputFieldValue}
            label="Editable Input Fields"
            showInputFields={true}
          />

          <View style={styles.spacer} />

          <Ux4gSlider
            value={inputFieldValue}
            onValueChange={setInputFieldValue}
            label="With Steps & Input Fields"
            steps={9}
            showInputFields={true}
          />
        </View>
      </View>

      {/* 8. Combined Features */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
          8. Combined Features
        </Text>
        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
              borderColor: theme.isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
            },
          ]}
        >
          <Ux4gSlider
            value={marksValue}
            onValueChange={setMarksValue}
            label="Full Feature Slider"
            isRequired={true}
            size="m"
            steps={4}
            showMarksAndValues={true}
            showValueLabels={true}
            caption="All features enabled: labels, marks, steps, and caption."
            captionVariant="helper"
            valueFormatter={(val) => `${val}%`}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    paddingBottom: 16,
    marginBottom: 20,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
  },
  spacer: {
    height: 24,
  },
});
