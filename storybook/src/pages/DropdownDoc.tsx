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
    { name: 'options', type: 'Ux4gDropdownOption[]', default: '[]', desc: 'Array of option objects (`{ id: string, label: string }`)' },
    { name: 'selectedOptionIds', type: 'string[]', default: '[]', desc: 'Array of currently selected option IDs' },
    { name: 'onSelectionChange', type: '(ids: string[]) => void', default: '—', desc: 'Callback fired when selected options change' },
    { name: 'label', type: 'string', default: 'undefined', desc: 'Label text displayed above the dropdown box' },
    { name: 'placeholder', type: 'string', default: "'Please select..'", desc: 'Placeholder text shown when no option is selected' },
    { name: 'mode', type: "'single' | 'multi'", default: "'single'", desc: 'Selection mode (`single` selection or `multi` chip selection)' },
    { name: 'size', type: "'s' | 'm' | 'l'", default: "'m'", desc: 'Size preset of the dropdown input field' },
    { name: 'status', type: "'defaultStatus' | 'error' | 'warning' | 'success'", default: "'defaultStatus'", desc: 'Validation status styling' },
    { name: 'searchEnabled', type: 'boolean', default: 'false', desc: 'Whether to show a filter search input inside the popover menu' },
    { name: 'enabled', type: 'boolean', default: 'true', desc: 'Whether the dropdown is interactive' },
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
                <table className="wb-props-table">
                  <thead>
                    <tr>
                      <th>Prop</th>
                      <th>Type</th>
                      <th>Default</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {propsData.map((prop) => (
                      <tr key={prop.name}>
                        <td><code className="wb-prop-name">{prop.name}</code></td>
                        <td><code className="wb-prop-type">{prop.type}</code></td>
                        <td><code className="wb-prop-default">{prop.default}</code></td>
                        <td>{prop.desc}</td>
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
