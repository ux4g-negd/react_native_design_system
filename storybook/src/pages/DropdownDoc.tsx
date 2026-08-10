import React, { useState, useMemo } from 'react';
import { Ux4gSelectionDropdown, Ux4gDropdownMode, Ux4gDropdownSize, Ux4gDropdownStatus } from '../../../src/components/dropdown/Dropdown';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface DropdownDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const DropdownDoc: React.FC<DropdownDocProps> = ({ isDark, story = 'dropdown-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import { Ux4gSelectionDropdown } from 'ux4g-react-native-design-system';`);
    lines.push(`import { useState } from 'react';`);
    lines.push('');
    lines.push('// Complete Interactive Dropdown');
    lines.push('const [selected, setSelected] = useState<string[]>(["1"]);');
    lines.push('');
    lines.push('<Ux4gSelectionDropdown');
    lines.push('  label="Select Framework"');
    lines.push('  placeholder="Choose an option..."');
    lines.push('  options={[');
    lines.push('    { id: "1", label: "React Native CLI" },');
    lines.push('    { id: "2", label: "Expo" },');
    lines.push('    { id: "3", label: "Flutter" }');
    lines.push('  ]}');
    lines.push('  selectedOptionIds={selected}');
    lines.push('  onSelectionChange={setSelected}');
    lines.push('/>');
    lines.push('');
    lines.push('// Multi-Select Searchable Dropdown');
    lines.push('const [selectedMulti, setSelectedMulti] = useState<string[]>(["1", "2"]);');
    lines.push('<Ux4gSelectionDropdown');
    lines.push('  label="Select Technologies"');
    lines.push('  mode="multi"');
    lines.push('  searchEnabled={true}');
    lines.push('  options={[');
    lines.push('    { id: "1", label: "React Native" },');
    lines.push('    { id: "2", label: "TypeScript" },');
    lines.push('    { id: "3", label: "Storybook" }');
    lines.push('  ]}');
    lines.push('  selectedOptionIds={selectedMulti}');
    lines.push('  onSelectionChange={setSelectedMulti}');
    lines.push('/>');
    return lines.join('\n');
  }, []);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    let snackCodeString = '';

    if (story === 'dropdown-multi') {
      snackCodeString = `import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gSelectionDropdown, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [selectedIds, setSelectedIds] = useState(['1', '2']);

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={styles.container}>
        <Ux4gSelectionDropdown
          label="Multi-Select Dropdown"
          placeholder="Select multiple items..."
          mode="multi"
          options={[
            { id: '1', label: 'React Native' },
            { id: '2', label: 'TypeScript' },
            { id: '3', label: 'Expo' },
            { id: '4', label: 'Storybook' }
          ]}
          selectedOptionIds={selectedIds}
          onSelectionChange={setSelectedIds}
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24
  }
});`;
    } else if (story === 'dropdown-search') {
      snackCodeString = `import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gSelectionDropdown, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [selectedIds, setSelectedIds] = useState(['in']);

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={styles.container}>
        <Ux4gSelectionDropdown
          label="Searchable Dropdown"
          placeholder="Search and select country..."
          searchEnabled={true}
          options={[
            { id: 'in', label: 'India' },
            { id: 'us', label: 'United States' },
            { id: 'uk', label: 'United Kingdom' },
            { id: 'ca', label: 'Canada' },
            { id: 'au', label: 'Australia' },
            { id: 'de', label: 'Germany' },
            { id: 'jp', label: 'Japan' }
          ]}
          selectedOptionIds={selectedIds}
          onSelectionChange={setSelectedIds}
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24
  }
});`;
    } else if (story === 'dropdown-status') {
      snackCodeString = `import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gSelectionDropdown, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [errSelected, setErrSelected] = useState([]);
  const [succSelected, setSuccSelected] = useState(['1']);

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={styles.container}>
        <Ux4gSelectionDropdown
          label="Error Status Dropdown"
          placeholder="Selection required..."
          status="error"
          options={[
            { id: '1', label: 'Option 1' },
            { id: '2', label: 'Option 2' }
          ]}
          selectedOptionIds={errSelected}
          onSelectionChange={setErrSelected}
        />
        
        <View style={{ height: 24 }} />
        
        <Ux4gSelectionDropdown
          label="Success Status Dropdown"
          placeholder="Valid selection..."
          status="success"
          options={[
            { id: '1', label: 'Option 1' },
            { id: '2', label: 'Option 2' }
          ]}
          selectedOptionIds={succSelected}
          onSelectionChange={setSuccSelected}
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24
  }
});`;
    } else {
      snackCodeString = `import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gSelectionDropdown, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [singleSelected, setSingleSelected] = useState(['1']);
  const [multiSelected, setMultiSelected] = useState(['1', '2']);

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={styles.container}>
        <Ux4gSelectionDropdown
          label="Standard Single Selection"
          placeholder="Please select an option..."
          options={[
            { id: '1', label: 'Option 1 - First Choice' },
            { id: '2', label: 'Option 2 - Second Choice' },
            { id: '3', label: 'Option 3 - Third Choice' }
          ]}
          selectedOptionIds={singleSelected}
          onSelectionChange={setSingleSelected}
        />
        
        <View style={{ height: 24 }} />
        
        <Ux4gSelectionDropdown
          label="Searchable Multi-Select"
          mode="multi"
          searchEnabled={true}
          options={[
            { id: '1', label: 'Frontend Development' },
            { id: '2', label: 'Mobile Design Tokens' },
            { id: '3', label: 'Backend Architecture' },
            { id: '4', label: 'DevOps & Pipeline' }
          ]}
          selectedOptionIds={multiSelected}
          onSelectionChange={setMultiSelected}
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24
  }
});`;
    }

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gDropdown%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.2,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '600px', border: 'none', borderRadius: '8px' }}
        title="Expo Snack Dropdown Interactive Preview"
      />
    );
  };

  /* ── Props Table Data ── */
  const propsData = [
    { name: 'options', type: 'Ux4gDropdownOption[]', default: 'required', desc: 'List of selectable dropdown options.', required: true },
    { name: 'selectedOptionIds', type: 'string[]', default: 'required', desc: 'Currently selected option IDs.', required: true },
    { name: 'onSelectionChange', type: '(selectedOptionIds: string[]) => void', default: 'required', desc: 'Callback fired when selection changes.', required: true },
    { name: 'label', type: 'string', default: 'undefined', desc: 'Label text displayed above dropdown box.', required: false },
    { name: 'description', type: 'string', default: 'undefined', desc: 'Helper/error text displayed below dropdown box.', required: false },
    { name: 'placeholder', type: 'string', default: "'Please select..'", desc: 'Placeholder shown when nothing is selected.', required: false },
    { name: 'size', type: "'s' | 'm' | 'l'", default: "'m'", desc: 'Dropdown field size preset.', required: false },
    { name: 'mode', type: "'single' | 'multi'", default: "'single'", desc: 'Selection mode.', required: false },
    { name: 'status', type: "'defaultStatus' | 'error' | 'disabled'", default: "'defaultStatus'", desc: 'Validation/disabled status.', required: false },
    { name: 'searchEnabled', type: 'boolean', default: 'false', desc: 'Shows search input inside dropdown menu.', required: false },
    { name: 'filterType', type: "'contains' | 'startsWith' | 'startsWithPerTerm'", default: "'contains'", desc: 'Search filter matching strategy.', required: false },
    { name: 'labelTextStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Style override for label text.', required: false },
    { name: 'valueTextStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Style override for selected value text.', required: false },
    { name: 'leadingIcon', type: 'ReactNode', default: 'undefined', desc: 'Leading icon/content inside dropdown trigger.', required: false },
    { name: 'containerStyle', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Container style override.', required: false },
    { name: 'testID', type: 'string', default: 'undefined', desc: 'Test identifier for automation.', required: false },
  ];

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Dropdown</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Collapsible selection menu supporting single choice, multi-select tag chips, search filtering, and form validation states.
        </p>
        <p className="wb-subtitle" style={{ marginTop: 6 }}>
          <span style={{ color: '#E11D48', fontWeight: 700 }}>*</span> marks required props.
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
              className={`wb-tab ${activeMainTab === 'props' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('props')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">tune</span> Props
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
                <CodeBlock code={codeString} language="TSX" filename="DropdownExample.tsx" />
              </div>
            )}

            {activeMainTab === 'props' && (
              <div className="wb-props-area">
                <table className="props-table">
                  <thead>
                    <tr>
                      <th>Prop</th>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Default</th>
                    </tr>
                  </thead>
                  <tbody>
                    {propsData.map((prop) => (
                      <tr key={prop.name}>
                        <td>
                          <span className="prop-name">
                            {prop.name}
                            {prop.required ? <span style={{ color: '#E11D48' }}> *</span> : null}
                          </span>
                        </td>
                        <td><span className="prop-type">{prop.type}</span></td>
                        <td>{prop.desc}</td>
                        <td><span className="prop-default">{prop.default}</span></td>
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
