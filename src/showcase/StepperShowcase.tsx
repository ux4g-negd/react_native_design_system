import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Pressable } from 'react-native';
import {
  Ux4gStepper,
  Ux4gCompactStepper,
  Ux4gStepItem,
} from '../components';
import { useUx4gTheme } from '../theme/Ux4gThemeContext';

/**
 * Showcase matching the Flutter showcase_app.dart stepper sections exactly:
 * - Section 26: Stepper Component (Horizontal, Vertical, Error State)
 * - Section 29: Compact Stepper (Linear, RightAligned, Centered, Split)
 */
export const StepperShowcase = () => {
  const theme = useUx4gTheme();

  // Matches `_currentStep` in Flutter showcase (1-indexed, total 4)
  const [currentStep, setCurrentStep] = useState(2);
  // Matches `_capsuleStep` in Flutter showcase (1-indexed, total 12)
  const [capsuleStep, setCapsuleStep] = useState(2);

  // ── Steps data matching Flutter showcase_app.dart ──
  const horizontalSteps: Ux4gStepItem[] = [
    { title: 'Label', description: 'Write description here' },
    { title: 'Label', description: 'Write description here' },
    { title: 'Label', description: 'Write description here' },
    { title: 'Label', description: 'Write description here' },
  ];

  const verticalSteps: Ux4gStepItem[] = [
    { title: 'Label', description: 'Write description here' },
    { title: 'Label', description: 'Write description here' },
    { title: 'Label', description: 'Write description here' },
    { title: 'Label', description: 'Write description here' },
  ];

  const errorSteps: Ux4gStepItem[] = [
    { title: 'Account', description: 'Completed' },
    { title: 'Profile', description: 'Completed' },
    { title: 'Payment', description: 'Transaction failed', isError: true },
    { title: 'Done', description: 'Pending' },
  ];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.content}
    >
      {/* ─── 26. Stepper Component ─── */}
      <View style={[styles.card, { backgroundColor: theme.colors.surface, borderColor: `${theme.colors.onSurface}1A` }]}>
        <Text style={[styles.cardTitle, { color: theme.colors.onSurface }]}>
          Stepper Component
        </Text>

        {/* Horizontal Stepper */}
        <Text style={[styles.sectionLabel, { color: theme.colors.onSurface }]}>
          Horizontal Stepper
        </Text>
        <View style={{ height: 8 }} />
        <Ux4gStepper
          totalSteps={4}
          currentStep={currentStep}
          orientation="horizontal"
          steps={horizontalSteps}
        />

        <View style={{ height: 16 }} />
        <View style={{ height: 1, backgroundColor: `${theme.colors.onSurface}1A` }} />
        <View style={{ height: 16 }} />

        {/* Dashed Line Stepper */}
        <Text style={[styles.sectionLabel, { color: theme.colors.onSurface }]}>
          Horizontal Stepper — Dashed Line
        </Text>
        <View style={{ height: 8 }} />
        <Ux4gStepper
          totalSteps={4}
          currentStep={currentStep}
          orientation="horizontal"
          lineStyle="dashed"
          steps={[
            { title: 'Step 1' },
            { title: 'Step 2' },
            { title: 'Step 3' },
            { title: 'Step 4' },
          ]}
        />

        <View style={{ height: 24 }} />

        {/* Vertical Stepper */}
        <Text style={[styles.sectionLabel, { color: theme.colors.onSurface }]}>
          Vertical Stepper
        </Text>
        <View style={{ height: 8 }} />
        <Ux4gStepper
          totalSteps={4}
          currentStep={currentStep}
          orientation="vertical"
          steps={verticalSteps}
        />

        <View style={{ height: 12 }} />

        {/* Previous / Next buttons */}
        <View style={{ flexDirection: 'row' }}>
          <Pressable
            onPress={() => setCurrentStep(s => Math.max(1, s - 1))}
            disabled={currentStep <= 1}
            style={[
              styles.navButton,
              {
                backgroundColor: currentStep > 1 ? '#333333' : '#CCCCCC',
                flex: 1,
                marginRight: 4,
              },
            ]}
          >
            <Text style={styles.navButtonText}>Previous</Text>
          </Pressable>
          <Pressable
            onPress={() => setCurrentStep(s => Math.min(4, s + 1))}
            disabled={currentStep >= 4}
            style={[
              styles.navButton,
              {
                backgroundColor: currentStep < 4 ? theme.colors.primary : '#CCCCCC',
                flex: 1,
                marginLeft: 4,
              },
            ]}
          >
            <Text style={styles.navButtonText}>Next</Text>
          </Pressable>
        </View>

        <View style={{ height: 16 }} />
        <View style={{ height: 1, backgroundColor: `${theme.colors.onSurface}1A` }} />
        <View style={{ height: 16 }} />

        {/* Error State */}
        <Text style={[styles.sectionLabel, { color: theme.colors.onSurface }]}>
          Stepper with Error State
        </Text>
        <View style={{ height: 8 }} />
        <Ux4gStepper
          totalSteps={4}
          currentStep={3}
          orientation="horizontal"
          steps={errorSteps}
        />

        <View style={{ height: 16 }} />
        <View style={{ height: 1, backgroundColor: `${theme.colors.onSurface}1A` }} />
        <View style={{ height: 16 }} />

        {/* Bottom Lines */}
        <Text style={[styles.sectionLabel, { color: theme.colors.onSurface }]}>
          Stepper — Bottom Lines
        </Text>
        <View style={{ height: 8 }} />
        <Ux4gStepper
          totalSteps={4}
          currentStep={currentStep}
          orientation="horizontal"
          linePlacement="bottom"
          steps={[
            {
              title: 'Label',
              description: 'Write description here',
              statusLabel: currentStep > 1 ? 'Completed' : currentStep === 1 ? 'In progress' : 'Label',
            },
            {
              title: 'Label',
              description: 'Write description here',
              statusLabel: currentStep > 2 ? 'Completed' : currentStep === 2 ? 'In progress' : 'Label',
            },
            {
              title: 'Label',
              description: 'Write description here',
              statusLabel: currentStep > 3 ? 'Completed' : currentStep === 3 ? 'In progress' : 'Label',
            },
            {
              title: 'Label',
              description: 'Write description here',
              statusLabel: currentStep > 4 ? 'Completed' : currentStep === 4 ? 'In progress' : 'Label',
            },
          ]}
        />

        <View style={{ height: 16 }} />
        <View style={{ height: 1, backgroundColor: `${theme.colors.onSurface}1A` }} />
        <View style={{ height: 16 }} />

        {/* Bottom Lines with Active Step Background */}
        <Text style={[styles.sectionLabel, { color: theme.colors.onSurface }]}>
          Bottom Lines + Active Background
        </Text>
        <View style={{ height: 8 }} />
        <Ux4gStepper
          totalSteps={4}
          currentStep={currentStep}
          orientation="horizontal"
          linePlacement="bottom"
          activeStepBackground={true}
          steps={[
            {
              title: 'Label',
              description: 'Write description here',
              statusLabel: currentStep > 1 ? 'Completed' : currentStep === 1 ? 'In progress' : 'Label',
            },
            {
              title: 'Label',
              description: 'Write description here',
              statusLabel: currentStep > 2 ? 'Completed' : currentStep === 2 ? 'In progress' : 'Label',
            },
            {
              title: 'Label',
              description: 'Write description here',
              statusLabel: currentStep > 3 ? 'Completed' : currentStep === 3 ? 'In progress' : 'Label',
            },
            {
              title: 'Label',
              description: 'Write description here',
              statusLabel: currentStep > 4 ? 'Completed' : currentStep === 4 ? 'In progress' : 'Label',
            },
          ]}
        />
        <View style={{ height: 1, backgroundColor: `${theme.colors.onSurface}1A` }} />
        <View style={{ height: 16 }} />

        {/* Edge Label Alignment */}
        <Text style={[styles.sectionLabel, { color: theme.colors.onSurface }]}>
          Horizontal Stepper — Edge Label Alignment
        </Text>
        <View style={{ height: 8 }} />
        <Ux4gStepper
          totalSteps={4}
          currentStep={currentStep}
          orientation="horizontal"
          edgeLabelAlignment={true}
          steps={[
            {
              title: 'Label',
              description: 'Write description here',
              statusLabel: currentStep > 1 ? 'Completed' : currentStep === 1 ? 'In progress' : 'Label',
            },
            {
              title: 'Label',
              description: 'Write description here',
              statusLabel: currentStep > 2 ? 'Completed' : currentStep === 2 ? 'In progress' : 'Label',
            },
            {
              title: 'Label',
              description: 'Write description here',
              statusLabel: currentStep > 3 ? 'Completed' : currentStep === 3 ? 'In progress' : 'Label',
            },
            {
              title: 'Label',
              description: 'Write description here',
              statusLabel: currentStep > 4 ? 'Completed' : currentStep === 4 ? 'In progress' : 'Label',
            },
          ]}
        />
      </View>

      {/* ─── 29. Compact Stepper ─── */}
      <View style={[styles.card, { backgroundColor: theme.colors.surface, borderColor: `${theme.colors.onSurface}1A` }]}>
        <Text style={[styles.cardTitle, { color: theme.colors.onSurface }]}>
          Compact Stepper
        </Text>

        {/* Linear */}
        <Text style={[styles.layoutLabel, { color: theme.colors.onSurface }]}>
          Layout: Linear (Default)
        </Text>
        <View style={{ height: 8 }} />
        <Ux4gCompactStepper
          totalSteps={12}
          currentStep={capsuleStep}
          stepLabel="Account Setup"
          description="Enter your personal details to continue."
          layout="linear"
          onNext={capsuleStep < 12 ? () => setCapsuleStep(s => s + 1) : undefined}
          onPrevious={capsuleStep > 1 ? () => setCapsuleStep(s => s - 1) : undefined}
        />

        <View style={{ height: 16 }} />
        <View style={{ height: 1, backgroundColor: `${theme.colors.onSurface}1A` }} />
        <View style={{ height: 16 }} />

        {/* Right Aligned */}
        <Text style={[styles.layoutLabel, { color: theme.colors.onSurface }]}>
          Layout: Right Aligned
        </Text>
        <View style={{ height: 8 }} />
        <Ux4gCompactStepper
          totalSteps={12}
          currentStep={capsuleStep}
          stepLabel="Finalize Profile"
          description="Uploading your bio and other settings."
          layout="rightAligned"
          onNext={capsuleStep < 12 ? () => setCapsuleStep(s => s + 1) : undefined}
          onPrevious={capsuleStep > 1 ? () => setCapsuleStep(s => s - 1) : undefined}
        />

        <View style={{ height: 16 }} />
        <View style={{ height: 1, backgroundColor: `${theme.colors.onSurface}1A` }} />
        <View style={{ height: 16 }} />

        {/* Centered */}
        <Text style={[styles.layoutLabel, { color: theme.colors.onSurface }]}>
          Layout: Centered
        </Text>
        <View style={{ height: 8 }} />
        <Ux4gCompactStepper
          totalSteps={12}
          currentStep={capsuleStep}
          stepLabel="Payment Methods"
          description="Review your cards and billing address."
          layout="centered"
          onNext={capsuleStep < 12 ? () => setCapsuleStep(s => s + 1) : undefined}
          onPrevious={capsuleStep > 1 ? () => setCapsuleStep(s => s - 1) : undefined}
        />

        <View style={{ height: 16 }} />
        <View style={{ height: 1, backgroundColor: `${theme.colors.onSurface}1A` }} />
        <View style={{ height: 16 }} />

        {/* Centered (Arrows Outside) */}
        <Text style={[styles.layoutLabel, { color: theme.colors.onSurface }]}>
          Layout: Centered (Arrows Outside)
        </Text>
        <View style={{ height: 8 }} />
        <Ux4gCompactStepper
          totalSteps={12}
          currentStep={capsuleStep}
          stepLabel="Step label"
          description="Description"
          layout="centeredBetween"
          onNext={capsuleStep < 12 ? () => setCapsuleStep(s => s + 1) : undefined}
          onPrevious={capsuleStep > 1 ? () => setCapsuleStep(s => s - 1) : undefined}
        />

        <View style={{ height: 16 }} />
        <View style={{ height: 1, backgroundColor: `${theme.colors.onSurface}1A` }} />
        <View style={{ height: 16 }} />

        {/* Split */}
        <Text style={[styles.layoutLabel, { color: theme.colors.onSurface }]}>
          Layout: Split
        </Text>
        <View style={{ height: 8 }} />
        <Ux4gCompactStepper
          totalSteps={12}
          currentStep={capsuleStep}
          stepLabel="Confirmation"
          description="Almost done. Just one more click to finish your setup and start using the platform."
          layout="split"
          onNext={capsuleStep < 12 ? () => setCapsuleStep(s => s + 1) : undefined}
          onPrevious={capsuleStep > 1 ? () => setCapsuleStep(s => s - 1) : undefined}
        />
      </View>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  layoutLabel: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  navButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  navButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
