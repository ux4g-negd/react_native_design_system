import React, { useState, useMemo } from 'react';
import { Ux4gButton, Ux4gButtonSize, Ux4gButtonVariant } from '../../../src/components/button/Button';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface ButtonDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';
type PanelTab = 'panel' | 'settings';

export const ButtonDoc: React.FC<ButtonDocProps> = ({ isDark, story = 'button-primary' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [activePanelTab, setActivePanelTab] = useState<PanelTab>('panel');

  /* ── Knobs (Matching Flutter Widgetbook Image) ── */
  const [size, setSize] = useState<Ux4gButtonSize>('medium');
  const [text, setText] = useState<string>('Primary Button');
  const [enabled, setEnabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [variant, setVariant] = useState<Ux4gButtonVariant>('primary');

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import { Ux4gButton } from 'ux4g-react-native-design-system';`);
    lines.push('');
    lines.push('<Ux4gButton');
    if (variant !== 'primary') lines.push(`  variant="${variant}"`);
    if (size !== 'medium') lines.push(`  size="${size}"`);
    lines.push(`  text="${text}"`);
    if (!enabled) lines.push('  enabled={false}');
    if (loading) lines.push('  isLoading={true}');
    lines.push('  onPress={() => console.log("Button pressed")}\n/>');
    return lines.join('\n');
  }, [variant, size, text, enabled, loading]);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    let componentsSnippet = '';

    if (story === 'button-introduction') {
      componentsSnippet = `        <Ux4gButton text="Primary Button" variant="primary" size="${size}" enabled={${enabled}} isLoading={${loading}} />
        <Ux4gButton text="Tonal Button" variant="primary" backgroundColor={${isDark ? 'UX4GColors.primary700' : 'UX4GColors.primary50'}} contentColor={${isDark ? 'UX4GColors.primary50' : 'UX4GColors.primary600'}} size="${size}" enabled={${enabled}} isLoading={${loading}} />
        <Ux4gButton text="Outline Button" variant="outline" size="${size}" enabled={${enabled}} isLoading={${loading}} />
        <Ux4gButton text="Ghost Button" variant="ghost" size="${size}" enabled={${enabled}} isLoading={${loading}} />`;
    } else if (story === 'button-variants') {
      componentsSnippet = `        <Ux4gButton text="Primary" variant="primary" size="${size}" enabled={${enabled}} isLoading={${loading}} />
        <Ux4gButton text="Tonal" variant="primary" backgroundColor={${isDark ? 'UX4GColors.primary700' : 'UX4GColors.primary50'}} contentColor={${isDark ? 'UX4GColors.primary50' : 'UX4GColors.primary600'}} size="${size}" enabled={${enabled}} isLoading={${loading}} />
        <Ux4gButton text="Secondary" variant="secondary" size="${size}" enabled={${enabled}} isLoading={${loading}} />
        <Ux4gButton text="Outline" variant="outline" size="${size}" enabled={${enabled}} isLoading={${loading}} />
        <Ux4gButton text="Ghost" variant="ghost" size="${size}" enabled={${enabled}} isLoading={${loading}} />`;
    } else if (story === 'button-sizes') {
      componentsSnippet = `        <Ux4gButton text="Small" size="small" variant="${variant}" enabled={${enabled}} isLoading={${loading}} />
        <Ux4gButton text="Medium" size="medium" variant="${variant}" enabled={${enabled}} isLoading={${loading}} />
        <Ux4gButton text="Large" size="large" variant="${variant}" enabled={${enabled}} isLoading={${loading}} />`;
    } else {
      componentsSnippet = `        <Ux4gButton
          variant="${variant}"
          size="${size}"
          text="${text}"
          enabled={${enabled}}
          isLoading={${loading}}
          onPress={() => console.log("Button pressed")}
        />`;
    }

    const snackCodeString = `import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gButton, Ux4gThemeProvider, UX4GColors } from 'ux4g-react-native-design-system';

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
    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gButton%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.0,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;
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
    { name: 'text', type: 'string', default: '—', desc: 'Text label inside the button' },
    { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost'", default: "'primary'", desc: 'Visual button style variant' },
    { name: 'size', type: "'small' | 'medium' | 'large'", default: "'medium'", desc: 'Button sizing preset (32pt / 40pt / 48pt)' },
    { name: 'enabled', type: 'boolean', default: 'true', desc: 'Whether button is interactive and enabled' },
    { name: 'isLoading', type: 'boolean', default: 'false', desc: 'Shows spinner and prevents press' },
    { name: 'leadingIcon', type: 'ReactNode | Function', default: '—', desc: 'Icon rendered before text' },
    { name: 'trailingIcon', type: 'ReactNode | Function', default: '—', desc: 'Icon rendered after text' },
    { name: 'onPress', type: '() => void', default: '—', desc: 'Press handler callback' },
  ];

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Button</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Button trigger an action or event, such as submitting a form, opening a dialog or performing a specific task. It provide users with a clear Call to Action (CTA), guiding them through a workflow.
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
                <CodeBlock code={codeString} language="TSX" filename="ButtonExample.tsx" />
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

export default ButtonDoc;
