import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Pressable } from 'react-native';
import {
  Ux4gJourneyTimeline,
  Ux4gJourneyStep,
} from '../components/journey-timeline';
import { useUx4gTheme } from '../theme/Ux4gThemeContext';
import { Ux4gIcons } from '../foundation/icons';

export const JourneyTimelineShowcase: React.FC = () => {
  const theme = useUx4gTheme();
  const [currentStep, setCurrentStep] = useState<number>(1);

  const applicationJourneySteps: Ux4gJourneyStep[] = [
    {
      date: '05 Apr 2026',
      tag: 'COMPLETED',
      title: 'Application Submitted',
      helpingText: 'Reference ID: #APP-948210-IN',
      status: {
        text: 'Verified by Citizen Portal',
        badgeText: 'Success',
        badgePosition: 'bottom',
      },
    },
    {
      date: '08 Apr 2026',
      tag: 'IN PROGRESS',
      title: 'Document Verification',
      helpingText: 'Aadhaar & PAN card verification under review.',
      status: {
        text: '2 days remaining',
        badgeText: 'Pending',
        badgePosition: 'bottom',
      },
    },
    {
      date: '12 Apr 2026',
      tag: 'UPCOMING',
      title: 'Field Inspection',
      helpingText: 'Scheduled physical premises verification.',
    },
    {
      date: '18 Apr 2026',
      tag: 'UPCOMING',
      title: 'Final Approval & Issuance',
      helpingText: 'Digital Certificate generation.',
    },
  ];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.content}
    >
      {/* Card 1: Vertical Journey Timeline with Header & Status Badges */}
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
          Journey Timeline — Vertical Application Flow
        </Text>
        <Text style={[styles.cardSubtitle, { color: `${theme.colors.onSurface}99` }]}>
          Sequential timeline with header, dates, tags, status pills, and line connections. Ported directly from Flutter `journey_timeline.dart`.
        </Text>

        <View style={{ height: 20 }} />

        <Ux4gJourneyTimeline
          orientation="vertical"
          currentStep={currentStep}
          header={{
            title: 'Citizen Service Application Progress',
            description: 'Track real-time status updates of your digital certificate application.',
          }}
          steps={applicationJourneySteps}
        />

        <View style={{ height: 24 }} />
        <View style={{ height: 1, backgroundColor: `${theme.colors.onSurface}1A` }} />
        <View style={{ height: 16 }} />

        {/* Step Nav Controls */}
        <Text style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>
          Interactive Timeline Navigation (Active Step: {currentStep + 1} of {applicationJourneySteps.length})
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
            onPress={() =>
              setCurrentStep((s) => Math.min(applicationJourneySteps.length - 1, s + 1))
            }
            disabled={currentStep >= applicationJourneySteps.length - 1}
            style={[
              styles.navButton,
              {
                backgroundColor:
                  currentStep < applicationJourneySteps.length - 1
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
      </View>

      {/* Card 2: Timeline Card Variants (Widgetbook Variant) */}
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
          Timeline Card Variants
        </Text>
        <Text style={[styles.cardSubtitle, { color: `${theme.colors.onSurface}99` }]}>
          Demonstrates different step card features including helping text, external link icons, and status badges. Ported directly from Flutter Widgetbook `data_stories.dart`.
        </Text>

        <View style={{ height: 20 }} />

        <Ux4gJourneyTimeline
          currentStep={4}
          steps={[
            {
              title: 'Application Submitted',
              date: '01 Jan 2025',
              tag: 'Completed',
            },
            {
              title: 'Document Verification',
              date: '03 Jan 2025',
              tag: 'Verified',
              helpingText: 'All uploaded certificates have been verified by the authority.',
            },
            {
              title: 'External Link Attached',
              date: '04 Jan 2025',
              tag: 'Attachment',
              icon: Ux4gIcons.link({ size: 18, color: theme.colors.primary }),
            },
            {
              title: 'Approval Pending',
              date: '05 Jan 2025',
              tag: 'In Progress',
              status: {
                text: '2 days remaining',
                badgeText: 'Pending',
                badgePosition: 'bottom',
              },
            },
            {
              title: 'Final Disbursement',
              date: 'Upcoming',
              tag: 'Scheduled',
            },
          ]}
        />
      </View>

      {/* Card 3: Vertical Timeline with Header (Widgetbook Variant) */}
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
          Vertical Timeline with Header
        </Text>
        <Text style={[styles.cardSubtitle, { color: `${theme.colors.onSurface}99` }]}>
          A vertical timeline with header section, compact date + tag cards, and trailing settings icon. Ported from Flutter Widgetbook `data_stories.dart`.
        </Text>

        <View style={{ height: 20 }} />

        <Ux4gJourneyTimeline
          currentStep={1}
          header={{
            title: 'Title',
            description: 'Description',
            icon: Ux4gIcons.settings({ size: 20, color: `${theme.colors.onSurface}99` }),
          }}
          steps={[
            { title: 'Title', date: 'Date', tag: 'Tag' },
            { title: 'Title', date: 'Date', tag: 'Tag' },
            { title: 'Title', date: 'Date', tag: 'Tag' },
            { title: 'Title', date: 'Date', tag: 'Tag' },
            { title: 'Title', date: 'Date', tag: 'Tag' },
          ]}
        />
      </View>

      {/* Card 3: Horizontal Timeline with Header (Widgetbook Variant) */}
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
          Horizontal Timeline with Header
        </Text>
        <Text style={[styles.cardSubtitle, { color: `${theme.colors.onSurface}99` }]}>
          Horizontal layout with header section, 6-step progress indicator line, and active step card detail. Ported from Flutter Widgetbook `data_stories.dart`.
        </Text>

        <View style={{ height: 20 }} />

        <Ux4gJourneyTimeline
          orientation="horizontal"
          currentStep={1}
          header={{
            title: 'Title',
            description: 'Description',
            icon: Ux4gIcons.settings({ size: 20, color: `${theme.colors.onSurface}99` }),
          }}
          steps={[
            { title: 'Title', date: 'Date', tag: 'Tag' },
            { title: 'Title', date: 'Date', tag: 'Tag' },
            { title: 'Title', date: 'Date', tag: 'Tag' },
            { title: 'Title', date: 'Date', tag: 'Tag' },
            { title: 'Title', date: 'Date', tag: 'Tag' },
            { title: 'Title', date: 'Date', tag: 'Tag' },
          ]}
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
});
