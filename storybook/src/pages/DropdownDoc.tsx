import React, { useState, useMemo } from 'react';
import { Ux4gSelectionDropdown, Ux4gDropdownMode, Ux4gDropdownSize, Ux4gDropdownStatus } from '../../../src/components/dropdown/Dropdown';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface DropdownDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';
type PanelTab = 'panel' | 'settings';

export const DropdownDoc: React.FC<DropdownDocProps> = ({ isDark, story = 'dropdown-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Knobs ── */
  const [mode, setMode] = useState<Ux4gDropdownMode>('single');
  const [size, setSize] = useState<Ux4gDropdownSize>('m');
  const [status, setStatus] = useState<Ux4gDropdownStatus>('defaultStatus');
  const [searchEnabled, setSearchEnabled] = useState<boolean>(false);
  const [label, setLabel] = useState<string>('Select an Option');

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import { Ux4gSelectionDropdown } from 'ux4g-react-native-design-system';`);
    lines.push('');
    lines.push('<Ux4gSelectionDropdown');
    lines.push(`  options={[{ id: '1', label: 'Option 1' }, { id: '2', label: 'Option 2' }]}`);
    lines.push(`  selectedOptionIds={[]}`);
    lines.push(`  onSelectionChange={(ids) => console.log(ids)}`);
    lines.push(`  label="${label}"`);
    lines.push(`  mode="${mode}"`);
    lines.push(`  size="${size}"`);
    if (status !== 'defaultStatus') lines.push(`  status="${status}"`);
    if (searchEnabled) lines.push(`  searchEnabled={true}`);
    lines.push('/>');
    return lines.join('\n');
  }, [mode, size, status, searchEnabled, label]);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    let componentsSnippet = `        <Ux4gSelectionDropdown
          options={[
            { id: '1', label: 'Option 1' },
            { id: '2', label: 'Option 2' },
            { id: '3', label: 'Option 3' },
          ]}
          selectedOptionIds={[]}
          onSelectionChange={() => {}}
          label="${label}"
          mode="${mode}"
          size="${size}"
          status="${status}"
          searchEnabled={${searchEnabled}}
        />`;

    const snackCodeString = `import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gSelectionDropdown, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

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
    padding: 20
  }
});`;
    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gDropdown%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.0,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;
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
    { name: 'options', type: 'Ux4gDropdownOption[]', default: '[]', desc: 'List of selection options available' },
    { name: 'selectedOptionIds', type: 'string[]', default: '[]', desc: 'Array of currently selected option IDs' },
    { name: 'onSelectionChange', type: '(ids: string[]) => void', default: '—', desc: 'Callback fired when selection changes' },
    { name: 'label', type: 'string', default: '—', desc: 'Label text rendered above the dropdown box' },
    { name: 'placeholder', type: 'string', default: "'Please select..'", desc: 'Placeholder hint when nothing is selected' },
    { name: 'size', type: "'s' | 'm' | 'l'", default: "'m'", desc: 'Dropdown sizing preset' },
    { name: 'mode', type: "'single' | 'multi'", default: "'single'", desc: 'Selection mode (single selection or multi chip selection)' },
    { name: 'status', type: "Ux4gDropdownStatus", default: "'defaultStatus'", desc: 'Status state controlling validation colors' },
    { name: 'searchEnabled', type: 'boolean', default: 'false', desc: 'Whether to display an interactive search field' },
  ];

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Dropdown</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Dropdown allows users to select one or multiple options from a collapsed menu.
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

export default DropdownDoc;
