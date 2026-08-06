import React, { useState, useMemo } from 'react';
import { Ux4gDatePickerMode } from '../../../src/components/date-picker/DatePicker';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface DatePickerDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';
type PanelTab = 'panel' | 'settings';

export const DatePickerDoc: React.FC<DatePickerDocProps> = ({ isDark, story = 'date-picker-single' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Knobs ── */
  const [mode, setMode] = useState<Ux4gDatePickerMode>('single');
  const [label, setLabel] = useState<string>('Select Date');
  const [enabled, setEnabled] = useState<boolean>(true);

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import { Ux4gDatePicker } from 'ux4g-react-native-design-system';`);
    lines.push('');
    lines.push('<Ux4gDatePicker');
    lines.push(`  mode="${mode}"`);
    lines.push(`  label="${label}"`);
    if (!enabled) lines.push('  enabled={false}');
    lines.push('/>');
    return lines.join('\n');
  }, [mode, label, enabled]);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    let componentsSnippet = '';

    if (story === 'date-picker-single') {
      componentsSnippet = `        <Ux4gDatePicker mode="single" label="Single Date Picker" enabled={${enabled}} />`;
    } else if (story === 'date-picker-range') {
      componentsSnippet = `        <Ux4gDatePicker mode="range" label="Date Range Picker" enabled={${enabled}} />`;
    } else {
      componentsSnippet = `        <Ux4gDatePicker
          mode="${mode}"
          label="${label}"
          enabled={${enabled}}
        />`;
    }

    const snackCodeString = `import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gDatePicker, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={false}>
      <View style={styles.container}>
${componentsSnippet}
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    padding: 20
  }
});`;
    const snackUrl = `https://snack.expo.dev/embedded?platform=android&supportedPlatforms=ios,android&theme=${isDark ? 'dark' : 'light'}&name=Ux4gDatePicker%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.0,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;
    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '600px', border: 'none', borderRadius: '8px' }}
        title="Expo Snack Preview"
      />
    );
  };

  /* ── Props Table Data ── */
  const propsData = [
    { name: 'mode', type: "'single' | 'range'", default: "'single'", desc: 'Mode for date selection' },
    { name: 'initialDate', type: 'Date', default: '—', desc: 'Initial selected date' },
    { name: 'initialDateRange', type: 'DateRange', default: '—', desc: 'Initial selected date range' },
    { name: 'minDate', type: 'Date', default: '—', desc: 'Minimum selectable date' },
    { name: 'maxDate', type: 'Date', default: '—', desc: 'Maximum selectable date' },
    { name: 'onDateSelected', type: '(date: Date) => void', default: '—', desc: 'Callback fired when a single date is selected' },
    { name: 'onDateRangeSelected', type: '(range: DateRange) => void', default: '—', desc: 'Callback fired when a date range is selected' },
    { name: 'placeholder', type: 'string', default: "'Select date'", desc: 'Placeholder hint when no date is selected' },
    { name: 'enabled', type: 'boolean', default: 'true', desc: 'Whether interaction is enabled' },
    { name: 'label', type: 'string', default: '—', desc: 'Label text rendered above the field box' },
    { name: 'description', type: 'string', default: '—', desc: 'Description / caption text rendered below the field box' },
    { name: 'isRequired', type: 'boolean', default: 'false', desc: 'Whether field is required' },
    { name: 'status', type: 'Ux4gInputFieldStatus', default: "'defaultStatus'", desc: 'Status variant controlling border & caption color' },
  ];

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Date Picker</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Date Picker allows users to select a specific date or a range of dates from a calendar interface.
        </p>
      </div>

      {/* Main Body */}
      <div className="wb-body">
        <div className="wb-main">
          {/* Main Tab Bar: Preview / Code / Props */}
          <div className="wb-tab-bar">
            <button
              className={`wb-tab ${activeMainTab === 'preview' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('preview')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">visibility</span>
              Preview
            </button>
            <button
              className={`wb-tab ${activeMainTab === 'code' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('code')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">code</span>
              Code
            </button>
            <button
              className={`wb-tab ${activeMainTab === 'props' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('props')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">tune</span>
              Props
            </button>
          </div>

          <div className="wb-tab-content">
            {activeMainTab === 'preview' && (
              <Ux4gThemeProvider isDark={isDark}>
                <div className={`wb-preview-area ${isDark ? 'dark' : ''}`}>
                  {renderStoryPreview()}
                </div>
              </Ux4gThemeProvider>
            )}

            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                <CodeBlock code={codeString} language="TSX" filename="DatePickerExample.tsx" />
              </div>
            )}

            {activeMainTab === 'props' && (
              <div className="wb-props-area">
                <table className="props-table">
                  <thead>
                    <tr>
                      <th>Prop</th>
                      <th>Type</th>
                      <th>Default</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {propsData.map((p) => (
                      <tr key={p.name}>
                        <td><span className="prop-name">{p.name}</span></td>
                        <td><span className="prop-type">{p.type}</span></td>
                        <td><span className="prop-default">{p.default}</span></td>
                        <td>{p.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DatePickerDoc;
