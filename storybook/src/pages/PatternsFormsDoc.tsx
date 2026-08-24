import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface PatternsFormsDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code' | 'guidelines';

export const PatternsFormsDoc: React.FC<PatternsFormsDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [formVariant, setFormVariant] = useState<'citizen-application' | 'filter-panel'>('citizen-application');

  const codeString = useMemo(() => {
    if (formVariant === 'filter-panel') {
      return `import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
  Ux4gSearchField,
  Ux4gSelectionDropdown,
  Ux4gDatePicker,
  Ux4gCheckbox,
  Ux4gButton,
  Ux4gOutlineButton,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';

export const ServiceFilterPattern = () => {
  const [search, setSearch] = useState('');
  const [selectedDept, setSelectedDept] = useState<string[]>([]);
  const [activeOnly, setActiveOnly] = useState(true);

  const departments = [
    { id: 'revenue', label: 'Revenue & Land Records' },
    { id: 'transport', label: 'Transport & Driving Licences' },
    { id: 'health', label: 'Public Health & Welfare' },
    { id: 'education', label: 'Higher & Technical Education' },
  ];

  const handleReset = () => {
    setSearch('');
    setSelectedDept([]);
    setActiveOnly(false);
  };

  return (
    <View style={styles.filterCard}>
      <Ux4gSearchField
        value={search}
        onValueChange={setSearch}
        placeholder="Search citizen services, schemes..."
      />

      <View style={{ height: 16 }} />

      <Ux4gSelectionDropdown
        label="Department"
        placeholder="Select department..."
        options={departments}
        selectedOptionIds={selectedDept}
        onSelectionChange={setSelectedDept}
      />

      <View style={{ height: 16 }} />

      <Ux4gDatePicker
        label="Application Date Range"
        mode="range"
        placeholder="Select submission period"
      />

      <View style={{ height: 16 }} />

      <Ux4gCheckbox
        checked={activeOnly}
        onCheckedChange={setActiveOnly}
        label="Show active & open schemes only"
      />

      <View style={styles.actionRow}>
        <Ux4gOutlineButton
          text="Reset Filters"
          onPress={handleReset}
          style={{ flex: 1 }}
        />
        <View style={{ width: 12 }} />
        <Ux4gButton
          text="Apply Filters"
          onPress={() => console.log('Filters applied')}
          style={{ flex: 1 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterCard: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  actionRow: {
    flexDirection: 'row',
    marginTop: 24,
    gap: 12,
  },
});`;
    }

    return `import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {
  Ux4gInputField,
  Ux4gAadhaarInputField,
  Ux4gPanInputField,
  Ux4gSelectionDropdown,
  Ux4gDatePicker,
  Ux4gFileUpload,
  Ux4gCheckbox,
  Ux4gButton,
  Ux4gOutlineButton,
  Ux4gDivider,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';

export const CitizenApplicationFormPattern = () => {
  const [name, setName] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [pan, setPan] = useState('');
  const [email, setEmail] = useState('');
  const [stateCode, setStateCode] = useState<string[]>([]);
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const stateOptions = [
    { id: 'DL', label: 'Delhi (NCT)' },
    { id: 'MH', label: 'Maharashtra' },
    { id: 'KA', label: 'Karnataka' },
    { id: 'UP', label: 'Uttar Pradesh' },
    { id: 'TN', label: 'Tamil Nadu' },
  ];

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.formTitle}>Citizen Scheme Application</Text>
      <Text style={styles.formSubtitle}>
        Fill in your verified identity details and upload supporting documents.
      </Text>

      <Ux4gDivider style={{ marginVertical: 16 }} />

      {/* Personal Identity */}
      <Ux4gInputField
        label="Full Legal Name"
        placeholder="Enter name as per Aadhaar"
        required
        value={name}
        onValueChange={setName}
      />

      <View style={{ height: 16 }} />

      <Ux4gAadhaarInputField
        label="Aadhaar Number"
        required
        value={aadhaar}
        onValueChange={setAadhaar}
      />

      <View style={{ height: 16 }} />

      <Ux4gPanInputField
        label="Permanent Account Number (PAN)"
        value={pan}
        onValueChange={setPan}
      />

      <View style={{ height: 16 }} />

      <Ux4gSelectionDropdown
        label="State / Union Territory"
        required
        placeholder="Select your resident state"
        options={stateOptions}
        selectedOptionIds={stateCode}
        onSelectionChange={setStateCode}
      />

      <View style={{ height: 16 }} />

      <Ux4gDatePicker
        label="Date of Birth"
        required
        placeholder="DD/MM/YYYY"
      />

      <View style={{ height: 20 }} />

      <Text style={styles.sectionHeader}>Document Proofs</Text>
      <Ux4gFileUpload
        allowedExtensions={['pdf', 'jpg', 'png']}
        maxFiles={3}
        maxFileSize={5 * 1024 * 1024}
        borderStyle="dashed"
      />

      <View style={{ height: 20 }} />

      <Ux4gCheckbox
        checked={agreed}
        onCheckedChange={setAgreed}
        label="I declare that all provided documents and details are true and verifiable."
      />

      <View style={styles.buttonRow}>
        <Ux4gOutlineButton
          text="Save Draft"
          onPress={() => {}}
          style={{ flex: 1 }}
        />
        <View style={{ width: 12 }} />
        <Ux4gButton
          text="Submit Application"
          enabled={agreed && name.length > 0}
          isLoading={isSubmitting}
          onPress={handleSubmit}
          style={{ flex: 1 }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  formSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  sectionHeader: {
    fontSize: 15,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 24,
  },
});`;
  }, [formVariant]);

  const renderStoryPreview = () => {
    const snackCodeString = `import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import {
  Ux4gInputField,
  Ux4gAadhaarInputField,
  Ux4gPanInputField,
  Ux4gSelectionDropdown,
  Ux4gDatePicker,
  Ux4gFileUpload,
  Ux4gCheckbox,
  Ux4gButton,
  Ux4gOutlineButton,
  Ux4gDivider,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';

export default function App() {
  const [name, setName] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [pan, setPan] = useState('');
  const [stateCode, setStateCode] = useState([]);
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const stateOptions = [
    { id: 'DL', label: 'Delhi (NCT)' },
    { id: 'MH', label: 'Maharashtra' },
    { id: 'KA', label: 'Karnataka' },
    { id: 'UP', label: 'Uttar Pradesh' },
    { id: 'TN', label: 'Tamil Nadu' },
  ];

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={[styles.title, { color: ${isDark ? "'#F9FAFB'" : "'#111827'"} }]}>
            Citizen Scheme Application
          </Text>
          <Text style={[styles.subtitle, { color: ${isDark ? "'#9CA3AF'" : "'#6B7280'"} }]}>
            Verified identity details and document uploads.
          </Text>

          <Ux4gDivider style={{ marginVertical: 16 }} />

          <Ux4gInputField
            label="Full Legal Name"
            placeholder="Enter name as per Aadhaar"
            required
            value={name}
            onValueChange={setName}
          />

          <View style={{ height: 16 }} />

          <Ux4gAadhaarInputField
            label="Aadhaar Number"
            required
            value={aadhaar}
            onValueChange={setAadhaar}
          />

          <View style={{ height: 16 }} />

          <Ux4gPanInputField
            label="PAN Number"
            value={pan}
            onValueChange={setPan}
          />

          <View style={{ height: 16 }} />

          <Ux4gSelectionDropdown
            label="State / Union Territory"
            required
            placeholder="Select state"
            options={stateOptions}
            selectedOptionIds={stateCode}
            onSelectionChange={setStateCode}
          />

          <View style={{ height: 20 }} />

          <Ux4gCheckbox
            checked={agreed}
            onCheckedChange={setAgreed}
            label="I declare that all details are accurate."
          />

          <View style={styles.buttonRow}>
            <Ux4gButton
              text="Submit Application"
              enabled={agreed && name.length > 0}
              isLoading={isSubmitting}
              onPress={() => {
                setIsSubmitting(true);
                setTimeout(() => setIsSubmitting(false), 1500);
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
    backgroundColor: ${isDark ? "'#121212'" : "'#F3F4F6'"},
  },
  card: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: ${isDark ? "'#1E1E1E'" : "'#FFFFFF'"},
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
  },
  buttonRow: {
    marginTop: 24,
    flexDirection: 'row',
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${
      isDark ? 'dark' : 'light'
    }&name=UX4G%20Form%20Pattern&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(
      snackCodeString
    )}`;

    return (
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
          <button
            className={`wb-tab ${formVariant === 'citizen-application' ? 'active' : ''}`}
            onClick={() => setFormVariant('citizen-application')}
            type="button"
          >
            Citizen Application Form
          </button>
          <button
            className={`wb-tab ${formVariant === 'filter-panel' ? 'active' : ''}`}
            onClick={() => setFormVariant('filter-panel')}
            type="button"
          >
            Search & Filter Panel
          </button>
        </div>

        <iframe
          src={snackUrl}
          style={{ width: '100%', height: '640px', border: 'none', borderRadius: '8px' }}
          title="Expo Snack Form Pattern Preview"
        />
      </div>
    );
  };

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Form Patterns</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Standardized patterns for citizen registration, multi-field verification, document proofs, and complex filter criteria.
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
                  filename={formVariant === 'citizen-application' ? 'CitizenApplicationForm.tsx' : 'ServiceFilterPattern.tsx'}
                />
              </div>
            )}

            {activeMainTab === 'guidelines' && (
              <div className="wb-props-area" style={{ padding: '24px 0' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Design Principles for Public Service Forms</h3>
                <div className="cards-grid cards-grid-2x2" style={{ marginTop: 16 }}>
                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <span className="material-symbols-outlined">verified</span>
                    </div>
                    <h4 className="feature-card-title">Dedicated Identity Inputs</h4>
                    <p className="feature-card-desc">
                      Always use <code>Ux4gAadhaarInputField</code> and <code>Ux4gPanInputField</code> for automatic grouping, masking, and input sanitation.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <span className="material-symbols-outlined">rule</span>
                    </div>
                    <h4 className="feature-card-title">Clear Validation States</h4>
                    <p className="feature-card-desc">
                      Provide inline error captions before submission. Use the red asterisk on required fields and assistive helper text for expected formats.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <span className="material-symbols-outlined">touch_app</span>
                    </div>
                    <h4 className="feature-card-title">Accessible Action Buttons</h4>
                    <p className="feature-card-desc">
                      Place the primary CTA on the right/bottom with clear loading states (<code>isLoading</code>) to prevent duplicate submissions.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <span className="material-symbols-outlined">save</span>
                    </div>
                    <h4 className="feature-card-title">Draft Preservation</h4>
                    <p className="feature-card-desc">
                      For long government forms, provide a secondary "Save Draft" action so citizens never lose in-progress data.
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

export default PatternsFormsDoc;
