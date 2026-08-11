import React, { useState, useMemo } from 'react';
import { Ux4gSpinner } from '../../../src/components/spinner/Spinner';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface SpinnerDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const SpinnerDoc: React.FC<SpinnerDocProps> = ({ isDark, story = 'spinner-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Knobs ── */
  const [size, setSize] = useState<number>(40);
  const [strokeWidth, setStrokeWidth] = useState<number>(4);
  const [percentage, setPercentage] = useState<number>(100);

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import { Ux4gSpinner } from 'ux4g-react-native-design-system';`);
    lines.push('');
    lines.push('<Ux4gSpinner');
    lines.push(`  size={${size}}`);
    lines.push(`  strokeWidth={${strokeWidth}}`);
    if (percentage !== 100) lines.push(`  percentage={${percentage}}`);
    lines.push('/>');
    return lines.join('\n');
  }, [size, strokeWidth, percentage]);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    let componentsSnippet = `        <Ux4gSpinner
          size={${size}}
          strokeWidth={${strokeWidth}}
          percentage={${percentage}}
        />`;

    const snackCodeString = `import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gSpinner, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

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
    padding: 20
  }
});`;
    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gSpinner%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;
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
    { name: 'size', type: 'number', default: '40', desc: 'Diameter size of the spinner ring.', required: false },
    { name: 'color', type: 'string', default: 'theme.colors.primary', desc: 'Primary color of the spinner arc.', required: false },
    { name: 'gradientColors', type: 'string[]', default: 'undefined', desc: 'List of colors for multi-tone arc segments.', required: false },
    { name: 'percentage', type: 'number', default: '100', desc: 'Arc fill percentage from 0 to 100.', required: false },
    { name: 'strokeWidth', type: 'number', default: '4', desc: 'Thickness of the spinner ring.', required: false },
    { name: 'rotationDurationMillis', type: 'number', default: '1200', desc: 'Milliseconds for a full 360-degree rotation.', required: false },
    { name: 'style', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Style override for outer spinner container.', required: false },
    { name: 'testID', type: 'string', default: 'undefined', desc: 'Test identifier for automation.', required: false },
  ];

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Spinner</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Spinner displays an animated circular progress indicator for loading states.
        </p>
        <p className="wb-subtitle" style={{ marginTop: 6 }}>
          This component has no required props.
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
                <CodeBlock code={codeString} language="TSX" filename="SpinnerExample.tsx" />
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

export default SpinnerDoc;
