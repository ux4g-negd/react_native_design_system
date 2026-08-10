import React, { useState, useMemo } from 'react';
import { Ux4gCheckbox } from '../../../src/components/checkbox/Checkbox';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface CheckboxDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const CheckboxDoc: React.FC<CheckboxDocProps> = ({ isDark, story = 'checkbox-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import { Ux4gCheckbox } from 'ux4g-react-native-design-system';`);
    lines.push(`import { useState } from 'react';`);
    lines.push('');
    lines.push('// Checked State');
    lines.push('const [checked, setChecked] = useState(true);');
    lines.push('<Ux4gCheckbox');
    lines.push('  value={checked}');
    lines.push('  label="Checked Checkbox"');
    lines.push('  description="Standard checked state"');
    lines.push('  onChanged={setChecked}');
    lines.push('/>');
    lines.push('');
    lines.push('// Indeterminate (Tristate) State');
    lines.push('const [tristate, setTristate] = useState<boolean | null>(null);');
    lines.push('<Ux4gCheckbox');
    lines.push('  value={tristate}');
    lines.push('  label="Indeterminate Checkbox"');
    lines.push('  description="Tristate dash indicator"');
    lines.push('  onChanged={setTristate}');
    lines.push('/>');
    lines.push('');
    lines.push('// Disabled Checkbox');
    lines.push('<Ux4gCheckbox');
    lines.push('  value={true}');
    lines.push('  label="Disabled Checkbox"');
    lines.push('  enabled={false}');
    lines.push('/>');
    return lines.join('\n');
  }, []);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    let componentsSnippet = '';

    if (story === 'checkbox-sizes') {
      componentsSnippet = `        <Ux4gCheckbox value={true} size="small" label="Small Checkbox (16pt)" description="Helper info" />
        <View style={{ height: 16 }} />
        <Ux4gCheckbox value={true} size="medium" label="Medium Checkbox (20pt)" description="Default size" />
        <View style={{ height: 16 }} />
        <Ux4gCheckbox value={true} size="large" label="Large Checkbox (24pt)" description="Prominent option" />`;
    } else if (story === 'checkbox-tristate') {
      componentsSnippet = `        <Ux4gCheckbox value={null} label="Select All Items" description="Partial selection state (null value)" />
        <View style={{ height: 12 }} />
        <View style={{ paddingLeft: 24, gap: 12 }}>
          <Ux4gCheckbox value={true} label="Option 1" size="small" />
          <Ux4gCheckbox value={false} label="Option 2" size="small" />
        </View>`;
    } else {
      componentsSnippet = `        <Ux4gCheckbox 
          value={checked1} 
          onChanged={setChecked1} 
          label="Checked Checkbox" 
          description="Standard checked state" 
        />
        
        <View style={{ height: 16 }} />
        
        <Ux4gCheckbox 
          value={checked2} 
          onChanged={setChecked2} 
          label="Unchecked Checkbox" 
          description="Standard unchecked state" 
        />
        
        <View style={{ height: 16 }} />
        
        <Ux4gCheckbox 
          value={null} 
          label="Indeterminate Checkbox" 
          description="Tristate dash indicator" 
        />

        <View style={{ height: 16 }} />
        
        <Ux4gCheckbox 
          value={true} 
          enabled={false} 
          label="Disabled Checkbox" 
          description="Muted non-interactive state" 
        />`;
    }

    const snackCodeString = `import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gCheckbox, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
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
    alignItems: 'flex-start',
    padding: 24
  }
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gCheckbox%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.2,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

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
    { name: 'value', type: 'boolean | null', default: 'false', desc: 'Checked state (`true` = checked, `false` = unchecked, `null` = indeterminate dash)' },
    { name: 'onChanged', type: '(val: boolean | null) => void', default: '—', desc: 'Callback fired when user taps the checkbox or label text' },
    { name: 'label', type: 'string', default: '—', desc: 'Primary text label next to the checkbox' },
    { name: 'description', type: 'string', default: '—', desc: 'Secondary helper/description text below the primary label' },
    { name: 'size', type: "'small' | 'medium' | 'large'", default: "'medium'", desc: 'Size of the checkbox box (`small`=16pt, `medium`=20pt, `large`=24pt)' },
    { name: 'isRequired', type: 'boolean', default: 'false', desc: 'Appends a red asterisk (`*`) to the label text' },
    { name: 'hasError', type: 'boolean', default: 'false', desc: 'Highlights the checkbox box border in error state color' },
    { name: 'enabled', type: 'boolean', default: 'true', desc: 'Enables or disables touch interaction and applies muted opacity' },
    { name: 'descriptionVariant', type: "'helper' | 'error' | 'warning' | 'success'", default: "'helper'", desc: 'Semantic color variant for description text' },
    { name: 'activeColor', type: 'string', default: 'theme.colors.primary', desc: 'Custom fill/border background color when checked' },
    { name: 'checkColor', type: 'string', default: 'theme.colors.onPrimary', desc: 'Custom checkmark / dash icon color' },
  ];

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Checkbox</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Selection control for single items, multi-select lists, and parent-child tristate selection with interactive checkmark and indeterminate state animations.
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
                <CodeBlock code={codeString} language="TSX" filename="CheckboxExample.tsx" />
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
