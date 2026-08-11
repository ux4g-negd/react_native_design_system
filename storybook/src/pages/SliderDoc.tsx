import React, { useState, useMemo } from 'react';
import { Ux4gSlider } from '../../../src/components/slider/Slider';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface SliderDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const SliderDoc: React.FC<SliderDocProps> = ({ isDark, story = 'slider-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import { Ux4gSlider } from 'ux4g-react-native-design-system';`);
    lines.push(`import { useState } from 'react';`);
    lines.push('');
    lines.push('// Basic Slider (Controlled)');
    lines.push('const [value, setValue] = useState(50);');
    lines.push('<Ux4gSlider');
    lines.push('  value={value}');
    lines.push('  onValueChange={setValue}');
    lines.push('  label="Volume"');
    lines.push('  min={0}');
    lines.push('  max={100}');
    lines.push('/>');
    lines.push('');
    lines.push('// With Steps (Divisions)');
    lines.push('<Ux4gSlider');
    lines.push('  value={value}');
    lines.push('  onValueChange={setValue}');
    lines.push('  label="4 Steps"');
    lines.push('  steps={4}  // Creates 5 snap positions');
    lines.push('/>');
    lines.push('');
    lines.push('// With Caption Variant');
    lines.push('<Ux4gSlider');
    lines.push('  value={value}');
    lines.push('  onValueChange={setValue}');
    lines.push('  label="Risk Level"');
    lines.push('  isRequired={true}');
    lines.push('  caption="Setting above 80 may trigger alerts"');
    lines.push('  captionVariant="warning"');
    lines.push('/>');
    lines.push('');
    lines.push('// With Marks and Values');
    lines.push('<Ux4gSlider');
    lines.push('  value={value}');
    lines.push('  onValueChange={setValue}');
    lines.push('  label="Progress"');
    lines.push('  steps={4}');
    lines.push('  showMarksAndValues={true}');
    lines.push('  valueFormatter={(v) => \`\${v}%\`}');
    lines.push('/>');
    return lines.join('\n');
  }, []);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    let componentsSnippet = '';

    if (story === 'slider-sizes') {
      componentsSnippet = `        <Ux4gSlider size="s" value={smallVal} onValueChange={setSmallVal} label="Small Size (thumb: 16, track: 4)" />
        <View style={{ height: 24 }} />
        <Ux4gSlider size="m" value={mediumVal} onValueChange={setMediumVal} label="Medium Size (thumb: 20, track: 6)" />`;
    } else if (story === 'slider-steps') {
      componentsSnippet = `        <Ux4gSlider value={step4} onValueChange={setStep4} label="4 Steps (5 positions)" steps={4} />
        <View style={{ height: 24 }} />
        <Ux4gSlider value={step9} onValueChange={setStep9} label="9 Steps (10 positions)" steps={9} />`;
    } else if (story === 'slider-custom-range') {
      componentsSnippet = `        <Ux4gSlider value={priceVal} onValueChange={setPriceVal} label="Price Range" min={0} max={1000} steps={9} valueFormatter={(v) => \`$\${v}\`} />`;
    } else if (story === 'slider-disabled') {
      componentsSnippet = `        <Ux4gSlider value={40} label="Disabled Slider" enabled={false} />
        <View style={{ height: 24 }} />
        <Ux4gSlider value={75} label="Disabled with Caption" enabled={false} caption="This slider is locked" />`;
    } else if (story === 'slider-formatter') {
      componentsSnippet = `        <Ux4gSlider 
          value={tempVal} 
          onValueChange={setTempVal} 
          label="Temperature" 
          min={0} 
          max={40} 
          steps={7}
          showMarksAndValues={true}
          valueFormatter={(v) => \`\${v}°C\`} 
        />
        <View style={{ height: 32 }} />
        <Ux4gSlider 
          value={percentVal} 
          onValueChange={setPercentVal} 
          label="Progress" 
          showValueLabels={true}
          startValueText="0%"
          endValueText="100%"
        />`;
    } else {
      componentsSnippet = `        <Ux4gSlider 
          value={basicVal} 
          onValueChange={setBasicVal} 
          label="Basic Slider" 
        />
        
        <View style={{ height: 24 }} />
        
        <Ux4gSlider 
          value={errorVal} 
          onValueChange={setErrorVal} 
          label="Error Caption" 
          isRequired={true}
          caption="Value must be above 50"
          captionVariant="error"
        />

        <View style={{ height: 24 }} />
        
        <Ux4gSlider 
          value={marksVal} 
          onValueChange={setMarksVal} 
          label="With Marks & Values" 
          steps={4}
          showMarksAndValues={true}
        />`;
    }

    const snackCodeString = `import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gSlider, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [basicVal, setBasicVal] = useState(50);
  const [errorVal, setErrorVal] = useState(20);
  const [marksVal, setMarksVal] = useState(50);
  const [smallVal, setSmallVal] = useState(30);
  const [mediumVal, setMediumVal] = useState(60);
  const [step4, setStep4] = useState(50);
  const [step9, setStep9] = useState(75);
  const [priceVal, setPriceVal] = useState(500);
  const [tempVal, setTempVal] = useState(22);
  const [percentVal, setPercentVal] = useState(65);

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

    // Note: Slider component is available in v1.0.5+
    // Using latest version for preview
    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gSlider%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@latest,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

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
    { name: 'value', type: 'number', default: 'required', desc: 'Current value of the slider (controlled component).', required: true },
    { name: 'onValueChange', type: '(value: number) => void', default: 'undefined', desc: 'Callback fired when the value changes.', required: false },
    { name: 'min', type: 'number', default: '0', desc: 'Minimum value of the slider.', required: false },
    { name: 'max', type: 'number', default: '100', desc: 'Maximum value of the slider.', required: false },
    { name: 'steps', type: 'number', default: 'undefined', desc: 'Number of discrete steps (divisions). Creates (steps + 2) snap positions.', required: false },
    { name: 'size', type: "'s' | 'm' | 'small' | 'medium'", default: "'small'", desc: 'Size of the slider (small: thumb 16, track 4; medium: thumb 20, track 6).', required: false },
    { name: 'enabled', type: 'boolean', default: 'true', desc: 'Whether the slider is interactive.', required: false },
    { name: 'label', type: 'string', default: 'undefined', desc: 'Label text displayed above the slider.', required: false },
    { name: 'isRequired', type: 'boolean', default: 'false', desc: 'Whether to show a required asterisk (*) next to the label.', required: false },
    { name: 'labelIcon', type: 'ReactNode', default: 'undefined', desc: 'Icon element rendered next to the label text.', required: false },
    { name: 'startValueText', type: 'string', default: 'undefined', desc: 'Custom text for the start value label (overrides formatted min).', required: false },
    { name: 'endValueText', type: 'string', default: 'undefined', desc: 'Custom text for the end value label (overrides formatted max).', required: false },
    { name: 'caption', type: 'string', default: 'undefined', desc: 'Caption text displayed below the slider.', required: false },
    { name: 'captionVariant', type: "'helper' | 'error' | 'warning' | 'success'", default: "'helper'", desc: 'Semantic variant for the caption (affects color and icon).', required: false },
    { name: 'showMarksAndValues', type: 'boolean', default: 'false', desc: 'Whether to show tick marks and value labels at each step.', required: false },
    { name: 'showIndicator', type: 'boolean', default: 'false', desc: 'Whether to show a value indicator tooltip on drag (Flutter feature).', required: false },
    { name: 'showInputFields', type: 'boolean', default: 'false', desc: 'Whether to show editable input fields for current/max values.', required: false },
    { name: 'showValueLabels', type: 'boolean', default: 'false', desc: 'Whether to show formatted value labels (start/end) above the slider.', required: false },
    { name: 'valueFormatter', type: '(value: number) => string', default: '_formatValue', desc: 'Custom formatter for value display (default: integer or 1 decimal).', required: false },
    { name: 'rightLabelElement', type: 'ReactNode', default: 'undefined', desc: 'Custom right-aligned element displayed next to the label.', required: false },
    { name: 'style', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Custom style for the container.', required: false },
    { name: 'labelStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Custom style for the label text.', required: false },
    { name: 'testID', type: 'string', default: 'undefined', desc: 'Test ID for testing.', required: false },
  ];

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Slider</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Complete React Native port of Flutter `slider.dart`, matching all props, visual behavior,
          and features including caption variants, marks, input fields, and value labels.
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
                <CodeBlock code={codeString} language="TSX" filename="SliderExample.tsx" />
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

export default SliderDoc;
