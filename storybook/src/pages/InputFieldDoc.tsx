import React, { useState, useMemo } from 'react';
import { Ux4gInputField, Ux4gInputFieldSize, Ux4gInputFieldType, Ux4gInputFieldStatus } from '../../../src/components/input-field/InputField';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface InputFieldDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';
type PanelTab = 'panel' | 'settings';

export const InputFieldDoc: React.FC<InputFieldDocProps> = ({ isDark, story = 'input-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Knobs ── */
  const [size, setSize] = useState<Ux4gInputFieldSize>('medium');
  const [type, setType] = useState<Ux4gInputFieldType>('text');
  const [status, setStatus] = useState<Ux4gInputFieldStatus>('defaultStatus');
  const [label, setLabel] = useState<string>('Label');
  const [placeholder, setPlaceholder] = useState<string>('Enter text...');
  const [required, setRequired] = useState<boolean>(false);
  const [caption, setCaption] = useState<string>('');
  
  const [value, setValue] = useState<string>('');

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import { Ux4gInputField } from 'ux4g-react-native-design-system';`);
    lines.push('');
    lines.push('<Ux4gInputField');
    lines.push(`  value={value}`);
    lines.push(`  onValueChange={setValue}`);
    if (label) lines.push(`  label="${label}"`);
    if (placeholder) lines.push(`  placeholder="${placeholder}"`);
    if (caption) lines.push(`  caption="${caption}"`);
    if (required) lines.push(`  required={true}`);
    lines.push(`  size="${size}"`);
    lines.push(`  type="${type}"`);
    if (status !== 'defaultStatus') lines.push(`  status="${status}"`);
    lines.push('/>');
    return lines.join('\n');
  }, [size, type, status, label, placeholder, caption, required]);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    let componentsSnippet = `        <Ux4gInputField
          value="${value}"
          onValueChange={(val) => {}}
          label="${label}"
          placeholder="${placeholder}"
          caption="${caption}"
          required={${required}}
          size="${size}"
          type="${type}"
          status="${status}"
        />`;

    const snackCodeString = `import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gInputField, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [value, setValue] = useState('');

  return (
    <Ux4gThemeProvider isDark={false}>
      <View style={styles.container}>
        <Ux4gInputField
          value={value}
          onValueChange={setValue}
          label="${label}"
          placeholder="${placeholder}"
          caption="${caption}"
          required={${required}}
          size="${size}"
          type="${type}"
          status="${status}"
        />
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
    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gInputField%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.0,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;
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
    { name: 'value', type: 'string', default: "''", desc: 'Current text string inside the input field' },
    { name: 'onValueChange', type: '(value: string) => void', default: '—', desc: 'Callback triggered when text changes' },
    { name: 'size', type: "'small' | 'medium' | 'large' | 'xl'", default: "'medium'", desc: 'Size of the input field' },
    { name: 'type', type: "'text' | 'password' | 'number' | 'email'", default: "'text'", desc: 'Type of input field' },
    { name: 'status', type: "'defaultStatus' | 'error' | 'warning' | 'success'", default: "'defaultStatus'", desc: 'Validation status controlling border & text color' },
    { name: 'label', type: 'string', default: '—', desc: 'Label displayed above the input box' },
    { name: 'required', type: 'boolean', default: 'false', desc: 'Whether the field is required' },
    { name: 'placeholder', type: 'string', default: '—', desc: 'Placeholder hint text' },
    { name: 'caption', type: 'string', default: '—', desc: 'Optional caption or validation message' },
  ];

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Input Field</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Input Field allows users to enter text, numbers, passwords, and other typed data.
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
                <CodeBlock code={codeString} language="TSX" filename="InputFieldExample.tsx" />
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

export default InputFieldDoc;
