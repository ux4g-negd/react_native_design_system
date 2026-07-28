import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Pressable } from 'react-native';
import {
  Ux4gStatusPipeline,
  Ux4gPipelineStep,
  Ux4gPipelineSize,
} from '../components/status-pipeline';
import { useUx4gTheme } from '../theme/Ux4gThemeContext';

export const StatusPipelineShowcase: React.FC = () => {
  const theme = useUx4gTheme();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [pipelineSize, setPipelineSize] = useState<Ux4gPipelineSize>('m');

  const standardSteps: Ux4gPipelineStep[] = [
    { label: 'Submitted', description: '5 Apr' },
    { label: 'Verification', description: 'In progress' },
    { label: 'Inspection', description: 'Est. 10 Apr' },
    { label: 'Decision', description: 'Est. 18 Apr' },
    { label: 'Issued', description: 'Est. 20 Apr' },
  ];

  const stateVariationSteps: Ux4gPipelineStep[] = [
    { label: 'Order Placed', description: 'Completed', state: 'completed' },
    { label: 'Document Review', description: 'Failed verification', state: 'error' },
    { label: 'Payment Gateway', description: 'Pending retry', state: 'warning' },
    { label: 'Approval Stage', description: 'Upcoming', state: 'upcoming' },
    { label: 'Final Certificate', description: 'Est. 25 Apr', state: 'upcoming' },
  ];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.content}
    >
      {/* Card 1: Vertical Status Pipeline */}
      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.colors.surface,
            borderColor: `${theme.colors.onSurface}1A`,
          },
        ]}
      >
        <Text style={[styles.cardTitle, { color: theme.colors.onSurface }]}>
          Status Pipeline — Vertical Flow
        </Text>
        <Text style={[styles.cardSubtitle, { color: `${theme.colors.onSurface}99` }]}>
          Vertical step timeline demonstrating step states (`completed`, `current`, `upcoming`). Ported directly from Flutter `status_pipeline.dart`.
        </Text>

        <View style={{ height: 20 }} />

        <Ux4gStatusPipeline
          orientation="vertical"
          size={pipelineSize}
          currentStep={currentStep}
          steps={standardSteps}
        />

        <View style={{ height: 24 }} />
        <View style={{ height: 1, backgroundColor: `${theme.colors.onSurface}1A` }} />
        <View style={{ height: 16 }} />

        {/* Step Nav Controls */}
        <Text style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>
          Pipeline Controls (Active Step: {currentStep + 1} of {standardSteps.length})
        </Text>
        <View style={{ height: 12 }} />

        <View style={{ flexDirection: 'row' }}>
          <Pressable
            onPress={() => setCurrentStep((s) => Math.max(0, s - 1))}
            disabled={currentStep <= 0}
            style={[
              styles.navButton,
              {
                backgroundColor:
                  currentStep > 0 ? theme.colors.primary : `${theme.colors.onSurface}26`,
                flex: 1,
                marginRight: 6,
              },
            ]}
          >
            <Text style={styles.navButtonText}>Previous Step</Text>
          </Pressable>
          <Pressable
            onPress={() => setCurrentStep((s) => Math.min(standardSteps.length - 1, s + 1))}
            disabled={currentStep >= standardSteps.length - 1}
            style={[
              styles.navButton,
              {
                backgroundColor:
                  currentStep < standardSteps.length - 1
                    ? theme.colors.primary
                    : `${theme.colors.onSurface}26`,
                flex: 1,
                marginLeft: 6,
              },
            ]}
          >
            <Text style={styles.navButtonText}>Next Step</Text>
          </Pressable>
        </View>

        <View style={{ height: 16 }} />

        {/* Size Preset Selector */}
        <View style={styles.controlRow}>
          <Text style={[theme.typography.bM_strong, { color: theme.colors.onSurface }]}>
            Size Preset:
          </Text>
          <View style={{ flexDirection: 'row' }}>
            {(['s', 'm', 'l'] as Ux4gPipelineSize[]).map((sz) => (
              <Pressable
                key={sz}
                onPress={() => setPipelineSize(sz)}
                style={[
                  styles.chip,
                  {
                    backgroundColor:
                      pipelineSize === sz ? theme.colors.primary : `${theme.colors.onSurface}12`,
                  },
                ]}
              >
                <Text
                  style={{
                    color: pipelineSize === sz ? '#FFFFFF' : theme.colors.onSurface,
                    fontWeight: 'bold',
                    fontSize: 12,
                    textTransform: 'uppercase',
                  }}
                >
                  Size {sz.toUpperCase()}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>

      {/* Card 2: Horizontal Status Pipeline */}
      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.colors.surface,
            borderColor: `${theme.colors.onSurface}1A`,
          },
        ]}
      >
        <Text style={[styles.cardTitle, { color: theme.colors.onSurface }]}>
          Status Pipeline — Horizontal Flow
        </Text>
        <Text style={[styles.cardSubtitle, { color: `${theme.colors.onSurface}99` }]}>
          Horizontal layout connecting step circles and lines across screen width.
        </Text>

        <View style={{ height: 20 }} />

        <Ux4gStatusPipeline
          orientation="horizontal"
          size="m"
          currentStep={currentStep}
          steps={standardSteps}
        />
      </View>

      {/* Card 3: State Variations (Error & Warning) */}
      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.colors.surface,
            borderColor: `${theme.colors.onSurface}1A`,
          },
        ]}
      >
        <Text style={[styles.cardTitle, { color: theme.colors.onSurface }]}>
          State Variations (Error & Warning)
        </Text>
        <Text style={[styles.cardSubtitle, { color: `${theme.colors.onSurface}99` }]}>
          Steps with explicit state overrides (`error` red circle, `warning` orange circle).
        </Text>

        <View style={{ height: 20 }} />

        <Ux4gStatusPipeline
          orientation="vertical"
          size="m"
          currentStep={-1}
          steps={stateVariationSteps}
        />
      </View>

      <View style={{ height: 60 }} />
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
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 13,
    lineHeight: 18,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  controlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  navButton: {
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginLeft: 6,
  },
});
