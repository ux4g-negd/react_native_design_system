import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface PatternsFeedbackDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code' | 'guidelines';

export const PatternsFeedbackDoc: React.FC<PatternsFeedbackDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const codeString = useMemo(() => {
    return `import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {
  Ux4gFeedbackCsat,
  Ux4gFeedbackStar,
  Ux4gTextArea,
  Ux4gChips,
  Ux4gButton,
  Ux4gOutlineButton,
  Ux4gDivider,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';

export const CitizenServiceFeedbackPattern = () => {
  const [rating, setRating] = useState<number>(4);
  const [selectedAspects, setSelectedAspects] = useState<string[]>([]);
  const [comments, setComments] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const aspectChips = [
    { id: 'speed', label: 'Processing Speed' },
    { id: 'simplicity', label: 'Simple Steps' },
    { id: 'support', label: 'Helpdesk Support' },
    { id: 'clarity', label: 'Instruction Clarity' },
  ];

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>Thank you for your feedback!</Text>
        <Text style={styles.subtitle}>
          Your response helps us continuously improve digital government services.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Rate Your Service Experience</Text>
        <Text style={styles.subtitle}>
          How satisfied were you with the Passport Application Renewal process?
        </Text>

        <Ux4gDivider style={{ marginVertical: 16 }} />

        {/* CSAT Rating Scale */}
        <Text style={styles.sectionLabel}>Overall Satisfaction</Text>
        <View style={{ marginVertical: 12 }}>
          <Ux4gFeedbackCsat
            selectedRating={rating}
            onRatingSelect={setRating}
          />
        </View>

        <Ux4gDivider style={{ marginVertical: 16 }} />

        {/* Highlight Aspects */}
        <Text style={styles.sectionLabel}>What went well?</Text>
        <View style={styles.chipGroup}>
          {aspectChips.map((chip) => (
            <Ux4gChips
              key={chip.id}
              label={chip.label}
              variant="choice"
              selected={selectedAspects.includes(chip.id)}
              onPress={() => {
                setSelectedAspects((prev) =>
                  prev.includes(chip.id) ? prev.filter((id) => id !== chip.id) : [...prev, chip.id]
                );
              }}
            />
          ))}
        </View>

        <View style={{ height: 16 }} />

        {/* Detailed Comments */}
        <Ux4gTextArea
          label="Additional Comments (Optional)"
          placeholder="Share suggestions or describe any difficulties you encountered..."
          value={comments}
          onValueChange={setComments}
          maxLength={300}
        />

        <View style={styles.actions}>
          <Ux4gOutlineButton
            text="Skip"
            onPress={() => {}}
            style={{ flex: 1 }}
          />
          <View style={{ width: 12 }} />
          <Ux4gButton
            text="Submit Feedback"
            isLoading={isSubmitting}
            onPress={handleSubmit}
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
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
    lineHeight: 20,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  chipGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 10,
  },
  actions: {
    flexDirection: 'row',
    marginTop: 24,
  },
});`;
  }, []);

  const renderStoryPreview = () => {
    const snackCodeString = `import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import {
  Ux4gFeedbackCsat,
  Ux4gTextArea,
  Ux4gButton,
  Ux4gOutlineButton,
  Ux4gDivider,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';

export default function App() {
  const [rating, setRating] = useState(4);
  const [comments, setComments] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={[styles.card, { backgroundColor: ${isDark ? "'#1E1E1E'" : "'#FFFFFF'"} }]}>
          <Text style={[styles.title, { color: ${isDark ? "'#F9FAFB'" : "'#111827'"} }]}>
            Rate Your Service Experience
          </Text>
          <Text style={[styles.subtitle, { color: ${isDark ? "'#9CA3AF'" : "'#6B7280'"} }]}>
            How satisfied were you with the Passport Application Renewal process?
          </Text>

          <Ux4gDivider style={{ marginVertical: 16 }} />

          <Text style={[styles.label, { color: ${isDark ? "'#E5E7EB'" : "'#374151'"} }]}>
            Overall Satisfaction
          </Text>
          <View style={{ marginVertical: 12 }}>
            <Ux4gFeedbackCsat selectedRating={rating} onRatingSelect={setRating} />
          </View>

          <Ux4gDivider style={{ marginVertical: 16 }} />

          <Ux4gTextArea
            label="Additional Comments"
            placeholder="Share feedback or suggestions..."
            value={comments}
            onValueChange={setComments}
            maxLength={300}
          />

          <View style={styles.actions}>
            <Ux4gOutlineButton text="Skip" onPress={() => {}} style={{ flex: 1 }} />
            <View style={{ width: 12 }} />
            <Ux4gButton
              text="Submit"
              isLoading={isSubmitting}
              onPress={() => {
                setIsSubmitting(true);
                setTimeout(() => setIsSubmitting(false), 1200);
              }}
              style={{ flex: 1 }}
            />
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
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    marginTop: 24,
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${
      isDark ? 'dark' : 'light'
    }&name=UX4G%20Feedback%20Pattern&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(
      snackCodeString
    )}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '620px', border: 'none', borderRadius: '8px' }}
        title="Expo Snack Feedback Pattern Preview"
      />
    );
  };

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Feedback & Survey Patterns</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Standardized post-service citizen feedback flows combining CSAT/NPS ratings, multi-select reason chips, multi-line comment areas, and clear submission confirmation.
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
                  filename="CitizenServiceFeedbackPattern.tsx"
                />
              </div>
            )}

            {activeMainTab === 'guidelines' && (
              <div className="wb-props-area" style={{ padding: '24px 0' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Citizen Feedback Pattern Guidelines</h3>
                <div className="cards-grid cards-grid-2x2" style={{ marginTop: 16 }}>
                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <span className="material-symbols-outlined">sentiment_satisfied</span>
                    </div>
                    <h4 className="feature-card-title">Standardized CSAT & NPS</h4>
                    <p className="feature-card-desc">
                      Use <code>Ux4gFeedbackCsat</code> for 1-5 scale satisfaction or <code>Ux4gFeedbackStar</code> for general rating workflows.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <span className="material-symbols-outlined">low_priority</span>
                    </div>
                    <h4 className="feature-card-title">Low Friction Interaction</h4>
                    <p className="feature-card-desc">
                      Combine rating with one-tap <code>Ux4gChips</code> so users can give specific feedback in seconds without typing lengthy text.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <span className="material-symbols-outlined">close</span>
                    </div>
                    <h4 className="feature-card-title">Optional & Dismissible</h4>
                    <p className="feature-card-desc">
                      Always provide a "Skip" or close action to ensure feedback prompts never block critical citizen workflows.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <span className="material-symbols-outlined">thumb_up</span>
                    </div>
                    <h4 className="feature-card-title">Gratitude State</h4>
                    <p className="feature-card-desc">
                      Upon submission, transition immediately to a clean confirmation message acknowledging citizen input.
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

export default PatternsFeedbackDoc;
