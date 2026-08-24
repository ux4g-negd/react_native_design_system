import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface PatternsCardsDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code' | 'guidelines';

export const PatternsCardsDoc: React.FC<PatternsCardsDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const codeString = useMemo(() => {
    return `import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {
  Ux4gCard,
  Ux4gStatusBanner,
  Ux4gJourneyTimeline,
  Ux4gBadge,
  Ux4gButton,
  Ux4gOutlineButton,
  Ux4gDivider,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';

export const ApplicationStatusCardPattern = () => {
  const timelineSteps = [
    { title: 'Application Submitted', subtitle: '12 Aug 2026, 10:30 AM', state: 'completed' as const },
    { title: 'Document Verification', subtitle: '14 Aug 2026, 03:15 PM', state: 'completed' as const },
    { title: 'Field Inspection', subtitle: 'Under processing by district officer', state: 'inProgress' as const },
    { title: 'Certificate Issuance', subtitle: 'Pending approval', state: 'upcoming' as const },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 1. Status Banner */}
      <Ux4gStatusBanner
        variant="warning"
        title="Application Under Review"
        description="Your scheme subsidy request is being processed by the nodal office."
      />

      <View style={{ height: 16 }} />

      {/* 2. Detailed Application Overview Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View>
            <Text style={styles.appNumber}>APP-2026-981244</Text>
            <Text style={styles.appTitle}>Kisan Solar Irrigation Subsidy</Text>
          </View>
          <Ux4gBadge
            label="In Progress"
            variant="warning"
          />
        </View>

        <Ux4gDivider style={{ marginVertical: 16 }} />

        {/* 3. Embedded Journey Progress */}
        <Text style={styles.sectionTitle}>Verification Milestones</Text>
        <View style={{ marginVertical: 12 }}>
          <Ux4gJourneyTimeline
            steps={timelineSteps}
            orientation="vertical"
          />
        </View>

        <Ux4gDivider style={{ marginVertical: 16 }} />

        {/* 4. Action Row */}
        <View style={styles.actions}>
          <Ux4gOutlineButton
            text="Download Receipt"
            onPress={() => console.log('Download')}
            style={{ flex: 1 }}
          />
          <View style={{ width: 12 }} />
          <Ux4gButton
            text="Track Details"
            onPress={() => console.log('Track')}
            style={{ flex: 1 }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F9FAFB',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  appNumber: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  appTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  actions: {
    flexDirection: 'row',
  },
});`;
  }, []);

  const renderStoryPreview = () => {
    const snackCodeString = `import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import {
  Ux4gStatusBanner,
  Ux4gBadge,
  Ux4gButton,
  Ux4gOutlineButton,
  Ux4gDivider,
  Ux4gJourneyTimeline,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';

export default function App() {
  const steps = [
    { title: 'Application Submitted', subtitle: '12 Aug 2026', state: 'completed' },
    { title: 'Document Verification', subtitle: '14 Aug 2026', state: 'completed' },
    { title: 'Field Inspection', subtitle: 'In progress', state: 'inProgress' },
    { title: 'Certificate Issuance', subtitle: 'Pending', state: 'upcoming' },
  ];

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <ScrollView contentContainerStyle={styles.container}>
        <Ux4gStatusBanner
          variant="warning"
          title="Application Under Review"
          description="Your scheme subsidy request is being processed."
        />

        <View style={{ height: 16 }} />

        <View style={[styles.card, { backgroundColor: ${isDark ? "'#1E1E1E'" : "'#FFFFFF'"} }]}>
          <View style={styles.header}>
            <View>
              <Text style={{ fontSize: 12, color: ${isDark ? "'#9CA3AF'" : "'#6B7280'"} }}>APP-2026-981244</Text>
              <Text style={[styles.title, { color: ${isDark ? "'#F9FAFB'" : "'#111827'"} }]}>
                Kisan Solar Irrigation Subsidy
              </Text>
            </View>
            <Ux4gBadge label="In Progress" variant="warning" />
          </View>

          <Ux4gDivider style={{ marginVertical: 16 }} />

          <Ux4gJourneyTimeline steps={steps} orientation="vertical" />

          <Ux4gDivider style={{ marginVertical: 16 }} />

          <View style={styles.actions}>
            <Ux4gOutlineButton text="Download Receipt" onPress={() => {}} style={{ flex: 1 }} />
            <View style={{ width: 12 }} />
            <Ux4gButton text="Track Details" onPress={() => {}} style={{ flex: 1 }} />
          </View>
        </View>
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    borderRadius: 12,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  actions: {
    flexDirection: 'row',
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${
      isDark ? 'dark' : 'light'
    }&name=UX4G%20Dashboard%20Card%20Pattern&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(
      snackCodeString
    )}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '620px', border: 'none', borderRadius: '8px' }}
        title="Expo Snack Dashboard Card Pattern Preview"
      />
    );
  };

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Cards & Dashboard Patterns</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Composite service cards displaying live application progress, timeline tracking, status badges, contextual warnings, and immediate action buttons.
        </p>
      </div>

      <div className="wb-body">
        <div className="wb-main">
          <div className="wb-tab-bar">
            <button
              className={`wb-tab ${activeMainTab === 'preview' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('preview')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">visibility</span> Preview
            </button>
            <button
              className={`wb-tab ${activeMainTab === 'code' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('code')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">code</span> Code
            </button>
            <button
              className={`wb-tab ${activeMainTab === 'guidelines' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('guidelines')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">menu_book</span> Guidelines
            </button>
          </div>

          <div className="wb-content">
            {activeMainTab === 'preview' && (
              <Ux4gThemeProvider isDark={isDark}>
                <div className={`wb-preview-area ${isDark ? 'dark' : ''}`}>
                  {renderStoryPreview()}
                </div>
              </Ux4gThemeProvider>
            )}

            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                <CodeBlock
                  code={codeString}
                  language="TSX"
                  filename="ApplicationStatusCardPattern.tsx"
                />
              </div>
            )}

            {activeMainTab === 'guidelines' && (
              <div className="wb-props-area" style={{ padding: '24px 0' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Dashboard Card Design Guidelines</h3>
                <div className="cards-grid cards-grid-2x2" style={{ marginTop: 16 }}>
                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <span className="material-symbols-outlined">timeline</span>
                    </div>
                    <h4 className="feature-card-title">Live Tracking Milestones</h4>
                    <p className="feature-card-desc">
                      Embed <code>Ux4gJourneyTimeline</code> inside service summary cards to show completed, active, and upcoming stages clearly.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <span className="material-symbols-outlined">label</span>
                    </div>
                    <h4 className="feature-card-title">Visual Status Alignment</h4>
                    <p className="feature-card-desc">
                      Match the semantic color of the <code>Ux4gBadge</code> (e.g. Warning for in-progress, Success for approved) with top-level <code>Ux4gStatusBanner</code>.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <span className="material-symbols-outlined">call_to_action</span>
                    </div>
                    <h4 className="feature-card-title">Primary vs Secondary CTAs</h4>
                    <p className="feature-card-desc">
                      Combine a solid <code>Ux4gButton</code> for the primary progression action and an <code>Ux4gOutlineButton</code> for document download/print.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <span className="material-symbols-outlined">view_agenda</span>
                    </div>
                    <h4 className="feature-card-title">Structured Dividers</h4>
                    <p className="feature-card-desc">
                      Use <code>Ux4gDivider</code> to create clear visual separation between the header, timeline progress, and footer actions.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternsCardsDoc;
