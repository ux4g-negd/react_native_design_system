import React, { useState, useMemo } from 'react';
import { Ux4gDivider, Ux4gDividerOrientation, Ux4gDividerStyle } from '../../../src/components/divider/Divider';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface DividerDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const DividerDoc: React.FC<DividerDocProps> = ({ isDark, story = 'divider-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import { Ux4gDivider } from 'ux4g-react-native-design-system';`);
    lines.push(`import { View, Text } from 'react-native';`);
    lines.push('');
    lines.push('// Horizontal Solid Divider');
    lines.push('<Ux4gDivider />');
    lines.push('');
    lines.push('// Dashed Divider with Indents');
    lines.push('<Ux4gDivider');
    lines.push('  style="dashed"');
    lines.push('  thickness={2}');
    lines.push('  startIndent={16}');
    lines.push('  endIndent={16}');
    lines.push('/>');
    lines.push('');
    lines.push('// Divider with Center Label');
    lines.push('<Ux4gDivider label="OR" />');
    lines.push('');
    lines.push('// Vertical Divider');
    lines.push('<View style={{ flexDirection: "row", height: 40, alignItems: "center" }}>');
    lines.push('  <Text>Left Item</Text>');
    lines.push('  <Ux4gDivider orientation="vertical" />');
    lines.push('  <Text>Right Item</Text>');
    lines.push('</View>');
    return lines.join('\n');
  }, []);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    let componentsSnippet = '';

    if (story === 'divider-styles') {
      componentsSnippet = `        <Text style={{ color: ${isDark ? "'#fff'" : "'#333'"}, marginBottom: 8 }}>Solid Line (Default):</Text>
        <Ux4gDivider style="solid" thickness={1} />
        
        <View style={{ height: 24 }} />
        
        <Text style={{ color: ${isDark ? "'#fff'" : "'#333'"}, marginBottom: 8 }}>Dashed Line:</Text>
        <Ux4gDivider style="dashed" thickness={2} />
        
        <View style={{ height: 24 }} />
        
        <Text style={{ color: ${isDark ? "'#fff'" : "'#333'"}, marginBottom: 8 }}>Dotted Line:</Text>
        <Ux4gDivider style="dotted" thickness={2} />`;
    } else if (story === 'divider-label') {
      componentsSnippet = `        <Ux4gDivider label="OR" />
        
        <View style={{ height: 24 }} />
        
        <Ux4gDivider label="SECTION HEADER" style="dashed" />
        
        <View style={{ height: 24 }} />
        
        <Ux4gDivider label="CONTINUE" style="dotted" thickness={2} />`;
    } else if (story === 'divider-vertical') {
      componentsSnippet = `        <View style={{ flexDirection: 'row', alignItems: 'center', height: 48 }}>
          <Text style={{ color: ${isDark ? "'#fff'" : "'#333'"} }}>Section A</Text>
          <Ux4gDivider orientation="vertical" startIndent={8} endIndent={8} />
          <Text style={{ color: ${isDark ? "'#fff'" : "'#333'"} }}>Section B</Text>
          <Ux4gDivider orientation="vertical" style="dashed" startIndent={8} endIndent={8} />
          <Text style={{ color: ${isDark ? "'#fff'" : "'#333'"} }}>Section C</Text>
        </View>`;
    } else {
      componentsSnippet = `        <Text style={{ color: ${isDark ? "'#fff'" : "'#333'"}, marginBottom: 8 }}>Standard Horizontal Divider:</Text>
        <Ux4gDivider />
        
        <View style={{ height: 24 }} />
        
        <Text style={{ color: ${isDark ? "'#fff'" : "'#333'"}, marginBottom: 8 }}>Indented Dashed Divider:</Text>
        <Ux4gDivider style="dashed" startIndent={24} endIndent={24} thickness={1.5} />
        
        <View style={{ height: 24 }} />
        
        <Text style={{ color: ${isDark ? "'#fff'" : "'#333'"}, marginBottom: 8 }}>Divider with Center Label:</Text>
        <Ux4gDivider label="OR LOG IN WITH" />`;
    }

    const snackCodeString = `import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ux4gDivider, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
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
    padding: 24
  }
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gDivider%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@latest,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '600px', border: 'none', borderRadius: '8px' }}
        title="Expo Snack Divider Preview"
      />
    );
  };

  /* ── Props Table Data ── */
  const propsData = [
    { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", desc: 'Orientation direction of the divider line' },
    { name: 'style', type: "'solid' | 'dashed' | 'dotted'", default: "'solid'", desc: 'Stroke pattern style of the line' },
    { name: 'thickness', type: 'number', default: '1.0', desc: 'Thickness / stroke width of the line in pixels' },
    { name: 'color', type: 'string', default: 'theme.colors.onSurface (20%)', desc: 'Line color override' },
    { name: 'startIndent', type: 'number', default: '0.0', desc: 'Leading indentation before the divider line begins' },
    { name: 'endIndent', type: 'number', default: '0.0', desc: 'Trailing indentation after the divider line ends' },
    { name: 'label', type: 'ReactNode | string', default: 'undefined', desc: 'Center label text or custom component splitting the line' },
    { name: 'labelSpacing', type: 'number', default: '8.0', desc: 'Horizontal / vertical gap around center label' },
  ];

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Divider</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Visual rule separator used to group and partition content. Supports horizontal/vertical orientation, solid/dashed/dotted styles, indents, and center labels.
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
                <CodeBlock code={codeString} language="TSX" filename="DividerExample.tsx" />
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
