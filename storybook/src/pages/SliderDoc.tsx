import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface SliderDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

const STORY_IDS = [
  'slider-basic',
  'slider-sizes',
  'slider-steps',
  'slider-custom-range',
  'slider-formatter',
  'slider-disabled',
] as const;

type SliderStory = (typeof STORY_IDS)[number];

const normalizeStory = (story?: string): SliderStory => {
  return STORY_IDS.includes(story as SliderStory) ? (story as SliderStory) : 'slider-basic';
};

const storyMeta: Record<SliderStory, { title: string; description: string }> = {
  'slider-basic': {
    title: 'Slider — Basic',
    description: 'Controlled slider with label, error caption variant, and division marks.',
  },
  'slider-sizes': {
    title: 'Slider — Sizes',
    description: 'Small (thumb: 16px, track: 4px) and medium (thumb: 20px, track: 6px) sizes.',
  },
  'slider-steps': {
    title: 'Slider — Steps',
    description: 'Discrete stepped sliders snapping to fixed division intervals with tick marks.',
  },
  'slider-custom-range': {
    title: 'Slider — Custom Range',
    description: 'Slider with custom minimum and maximum range ($0 to $1000) and currency formatting.',
  },
  'slider-formatter': {
    title: 'Slider — Value Formatter & Labels',
    description: 'Custom value formatters (°C) and min/max value boundary labels.',
  },
  'slider-disabled': {
    title: 'Slider — Disabled',
    description: 'Non-interactive disabled sliders with muted styling.',
  },
};

const getExampleComponents = (story: SliderStory): string => {
  switch (story) {
    case 'slider-sizes':
      return `const SmallExample = () => {
  const [smallVal, setSmallVal] = React.useState(30);
  return (
    <View style={styles.row}>
      <Ux4gSlider
        size="s"
        value={smallVal}
        onValueChange={setSmallVal}
        label="Small Size (thumb: 16, track: 4)"
      />
    </View>
  );
};

const MediumExample = () => {
  const [mediumVal, setMediumVal] = React.useState(60);
  return (
    <View style={styles.row}>
      <Ux4gSlider
        size="m"
        value={mediumVal}
        onValueChange={setMediumVal}
        label="Medium Size (thumb: 20, track: 6)"
      />
    </View>
  );
};`;

    case 'slider-steps':
      return `const Step4Example = () => {
  const [step4, setStep4] = React.useState(50);
  return (
    <View style={styles.row}>
      <Ux4gSlider
        value={step4}
        onValueChange={setStep4}
        label="4 Steps (5 snap positions)"
        steps={4}
        showMarksAndValues={true}
      />
    </View>
  );
};

const Step9Example = () => {
  const [step9, setStep9] = React.useState(70);
  return (
    <View style={styles.row}>
      <Ux4gSlider
        value={step9}
        onValueChange={setStep9}
        label="9 Steps (10 snap positions)"
        steps={9}
        showMarksAndValues={true}
      />
    </View>
  );
};`;

    case 'slider-custom-range':
      return `const CustomRangeExample = () => {
  const [priceVal, setPriceVal] = React.useState(500);
  return (
    <View style={styles.row}>
      <Ux4gSlider
        value={priceVal}
        onValueChange={setPriceVal}
        label="Price Range ($0 - $1000)"
        min={0}
        max={1000}
        steps={9}
        showMarksAndValues={true}
        valueFormatter={(v) => \`$\${Math.round(v)}\`}
      />
    </View>
  );
};`;

    case 'slider-formatter':
      return `const FormatterTempExample = () => {
  const [tempVal, setTempVal] = React.useState(22);
  return (
    <View style={styles.row}>
      <Ux4gSlider
        value={tempVal}
        onValueChange={setTempVal}
        label="Temperature"
        min={0}
        max={40}
        steps={8}
        showMarksAndValues={true}
        valueFormatter={(v) => \`\${Math.round(v)}°C\`}
      />
    </View>
  );
};

const FormatterProgressExample = () => {
  const [percentVal, setPercentVal] = React.useState(65);
  return (
    <View style={styles.row}>
      <Ux4gSlider
        value={percentVal}
        onValueChange={setPercentVal}
        label="Progress"
        showValueLabels={true}
        startValueText="0%"
        endValueText="100%"
      />
    </View>
  );
};`;

    case 'slider-disabled':
      return `const DisabledBasicExample = () => {
  return (
    <View style={styles.row}>
      <Ux4gSlider
        value={40}
        label="Disabled Slider"
        enabled={false}
      />
    </View>
  );
};

const DisabledCaptionExample = () => {
  return (
    <View style={styles.row}>
      <Ux4gSlider
        value={75}
        label="Disabled with Caption"
        enabled={false}
        caption="This slider is locked"
      />
    </View>
  );
};`;

    default:
      return `const BasicExample = () => {
  const [basicVal, setBasicVal] = React.useState(50);
  return (
    <View style={styles.row}>
      <Ux4gSlider
        value={basicVal}
        onValueChange={setBasicVal}
        label="Basic Slider"
      />
    </View>
  );
};

const ErrorExample = () => {
  const [errorVal, setErrorVal] = React.useState(20);
  return (
    <View style={styles.row}>
      <Ux4gSlider
        value={errorVal}
        onValueChange={setErrorVal}
        label="Error Caption"
        isRequired={true}
        caption="Value must be above 50"
        captionVariant="error"
      />
    </View>
  );
};

const MarksExample = () => {
  const [marksVal, setMarksVal] = React.useState(50);
  return (
    <View style={styles.row}>
      <Ux4gSlider
        value={marksVal}
        onValueChange={setMarksVal}
        label="With Marks & Values"
        steps={4}
        showMarksAndValues={true}
      />
    </View>
  );
};`;
  }
};

const getSnackBody = (story: SliderStory): string => {
  const names: Record<SliderStory, string[]> = {
    'slider-basic': ['BasicExample', 'ErrorExample', 'MarksExample'],
    'slider-sizes': ['SmallExample', 'MediumExample'],
    'slider-steps': ['Step4Example', 'Step9Example'],
    'slider-custom-range': ['CustomRangeExample'],
    'slider-formatter': ['FormatterTempExample', 'FormatterProgressExample'],
    'slider-disabled': ['DisabledBasicExample', 'DisabledCaptionExample'],
  };
  return names[story].map((n) => `          <${n} />`).join('\n');
};

const getStoryCode = (story: SliderStory): string => {
  return `import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gSlider } from 'ux4g-react-native-design-system';

${getExampleComponents(story)}

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
${(() => {
      const names: Record<SliderStory, string[]> = {
        'slider-basic': ['BasicExample', 'ErrorExample', 'MarksExample'],
        'slider-sizes': ['SmallExample', 'MediumExample'],
        'slider-steps': ['Step4Example', 'Step9Example'],
        'slider-custom-range': ['CustomRangeExample'],
        'slider-formatter': ['FormatterTempExample', 'FormatterProgressExample'],
        'slider-disabled': ['DisabledBasicExample', 'DisabledCaptionExample'],
      };
      return names[story].map((n) => `      <${n} />`).join('\n');
    })()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    minHeight: '100%',
    justifyContent: 'center',
  },
  row: {
    marginBottom: 28,
  },
});`;
};

export const SliderDoc: React.FC<SliderDocProps> = ({ isDark, story = 'slider-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const activeStory = normalizeStory(story);
  const config = storyMeta[activeStory];
  const codeString = useMemo(() => getStoryCode(activeStory), [activeStory]);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    const snackCodeString = `import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gSlider, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

${getExampleComponents(activeStory)}

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <ScrollView contentContainerStyle={styles.container}>
${getSnackBody(activeStory)}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    minHeight: '100%',
    justifyContent: 'center',
    backgroundColor: ${isDark ? "'#121212'" : "'#ffffff'"},
  },
  row: {
    marginBottom: 28,
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=android&supportedPlatforms=ios,android&theme=${isDark ? 'dark' : 'light'}&name=Ux4gSlider%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.9-beta.0,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '680px', border: 'none', borderRadius: '8px' }}
        title="Expo Snack Slider Preview"
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
    { name: 'showIndicator', type: 'boolean', default: 'false', desc: 'Whether to show a value indicator tooltip on drag.', required: false },
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
          <h1 className="wb-title">{config.title}</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">{config.description}</p>
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
