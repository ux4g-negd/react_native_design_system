import React, { useState, useMemo } from 'react';
import { Ux4gButton, Ux4gButtonSize, Ux4gButtonVariant } from '../../../src/components/button/Button';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface ButtonDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const ButtonDoc: React.FC<ButtonDocProps> = ({ isDark, story = 'button-primary' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

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
    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gButton%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;
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
    { name: 'text', type: 'string', default: 'undefined', desc: 'Text label inside the button.', required: false },
    { name: 'children', type: 'ReactNode', default: 'undefined', desc: 'Custom child content overriding/supplementing text.', required: false },
    { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost'", default: "'primary'", desc: 'Visual button style variant.', required: false },
    { name: 'size', type: "'small' | 'medium' | 'large'", default: "'medium'", desc: 'Button sizing preset.', required: false },
    { name: 'enabled', type: 'boolean', default: 'true', desc: 'Whether button is interactive and enabled.', required: false },
    { name: 'isLoading', type: 'boolean', default: 'false', desc: 'Shows spinner and prevents press.', required: false },
    { name: 'backgroundColor', type: 'string', default: 'variant-based token', desc: 'Background color override.', required: false },
    { name: 'contentColor', type: 'string', default: 'variant-based token', desc: 'Foreground text/icon color override.', required: false },
    { name: 'disabledBackgroundColor', type: 'string', default: 'computed disabled color', desc: 'Background color override when disabled.', required: false },
    { name: 'disabledContentColor', type: 'string', default: 'computed disabled color', desc: 'Foreground color override when disabled.', required: false },
    { name: 'borderColor', type: 'string', default: 'variant-based token', desc: 'Border color override.', required: false },
    { name: 'borderWidth', type: 'number', default: 'variant-based', desc: 'Border width override.', required: false },
    { name: 'borderRadius', type: 'number', default: 'theme.radius.radius8', desc: 'Corner radius override.', required: false },
    { name: 'paddingHorizontal', type: 'number', default: 'size-based', desc: 'Horizontal padding override.', required: false },
    { name: 'paddingVertical', type: 'number', default: 'size-based', desc: 'Vertical padding override.', required: false },
    { name: 'leadingIcon', type: 'Ux4gIconProp', default: 'undefined', desc: 'Icon rendered before text.', required: false },
    { name: 'trailingIcon', type: 'Ux4gIconProp', default: 'undefined', desc: 'Icon rendered after text.', required: false },
    { name: 'iconSize', type: 'number', default: 'size-based', desc: 'Explicit icon size override.', required: false },
    { name: 'width', type: 'DimensionValue', default: 'undefined', desc: 'Explicit width.', required: false },
    { name: 'height', type: 'number', default: 'size-based', desc: 'Explicit height.', required: false },
    { name: 'elevation', type: 'number', default: '0', desc: 'Android elevation / iOS shadow depth.', required: false },
    { name: 'style', type: 'StyleProp<ViewStyle> | (state) => StyleProp<ViewStyle>', default: 'undefined', desc: 'Style override for button container.', required: false },
    { name: 'contentContainerStyle', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Style override for inner content row.', required: false },
    { name: 'textStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Style override for label text.', required: false },
    { name: 'onPress', type: '() => void', default: 'required', desc: 'Press handler callback.', required: true },
    { name: 'testID', type: 'string', default: 'undefined', desc: 'Test identifier for automation.', required: false },
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
        <p className="wb-subtitle" style={{ marginTop: 6 }}>
          <span style={{ color: '#E11D48', fontWeight: 700 }}>*</span> marks required props.
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
                      <th>Description</th>
                      <th>Default</th>
                    </tr>
                  </thead>
                  <tbody>
                    {propsData.map((p) => (
                      <tr key={p.name}>
                        <td>
                          <span className="prop-name">
                            {p.name}
                            {p.required ? <span style={{ color: '#E11D48' }}> *</span> : null}
                          </span>
                        </td>
                        <td><span className="prop-type">{p.type}</span></td>
                        <td>{p.desc}</td>
                        <td><span className="prop-default">{p.default}</span></td>
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
