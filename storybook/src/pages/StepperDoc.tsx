import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface StepperDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

const STORY_IDS = [
  'stepper-horizontal',
  'stepper-horizontal-dashed',
  'stepper-vertical',
  'stepper-error',
  'stepper-bottom-lines',
  'stepper-bottom-background',
  'stepper-edge-alignment',
  'compact-stepper-linear',
  'compact-stepper-right-aligned',
  'compact-stepper-centered',
  'compact-stepper-centered-between',
  'compact-stepper-split',
] as const;

type StepperStory = (typeof STORY_IDS)[number];

const TOTAL_STEPS: Record<StepperStory, number> = {
  'stepper-horizontal': 4,
  'stepper-horizontal-dashed': 4,
  'stepper-vertical': 4,
  'stepper-error': 4,
  'stepper-bottom-lines': 4,
  'stepper-bottom-background': 4,
  'stepper-edge-alignment': 4,
  'compact-stepper-linear': 12,
  'compact-stepper-right-aligned': 12,
  'compact-stepper-centered': 12,
  'compact-stepper-centered-between': 12,
  'compact-stepper-split': 12,
};

const normalizeStory = (story?: string): StepperStory => {
  return STORY_IDS.includes(story as StepperStory)
    ? (story as StepperStory)
    : 'stepper-horizontal';
};

const storyMeta: Record<StepperStory, { title: string; description: string }> = {
  'stepper-horizontal': {
    title: 'Stepper — Horizontal',
    description: 'Horizontal stepper (default) with center-aligned connecting lines, completed checks, and active dots. Use the controls to navigate steps.',
  },
  'stepper-horizontal-dashed': {
    title: 'Stepper — Dashed Lines',
    description: 'Horizontal stepper with dashed connecting lines between steps.',
  },
  'stepper-vertical': {
    title: 'Stepper — Vertical',
    description: 'Vertical stepper with icons and labels stacked in a column.',
  },
  'stepper-error': {
    title: 'Stepper — Error State',
    description: 'Stepper with an error icon on the failed step and error-colored labels.',
  },
  'stepper-bottom-lines': {
    title: 'Stepper — Horizontal (Bottom Line)',
    description: 'Horizontal stepper with connecting lines placed below the step labels.',
  },
  'stepper-bottom-background': {
    title: 'Stepper — Bottom Lines + Background',
    description: 'Bottom-line stepper with a highlighted background behind the active step.',
  },
  'stepper-edge-alignment': {
    title: 'Stepper — Edge Label Alignment',
    description: 'Horizontal stepper whose first and last labels align to the container edges.',
  },
  'compact-stepper-linear': {
    title: 'Compact Stepper — Linear',
    description: 'Compact capsule stepper (default layout) with working prev/next arrows and left-aligned labels.',
  },
  'compact-stepper-right-aligned': {
    title: 'Compact Stepper — Right Aligned',
    description: 'Capsule stepper with the step label and description aligned to the right.',
  },
  'compact-stepper-centered': {
    title: 'Compact Stepper — Centered',
    description: 'Capsule stepper centered around the active capsule with "Step X of Y" counter.',
  },
  'compact-stepper-centered-between': {
    title: 'Compact Stepper — Centered (Arrows Outside)',
    description: 'Capsule stepper with the label centered between the prev/next arrows.',
  },
  'compact-stepper-split': {
    title: 'Compact Stepper — Split',
    description: 'Capsule stepper with the label on the left and counter + arrows on the right.',
  },
};

const basicSteps = (total = 4) => {
  const items: string[] = [];
  for (let i = 1; i <= total; i++) {
    items.push(`        { title: 'Step ${i}', description: 'Write description here' },`);
  }
  return items.join('\n');
};

const statusSteps = (step: number, total = 4) => {
  const items: string[] = [];
  for (let i = 1; i <= total; i++) {
    const status = step > i ? 'Completed' : step === i ? 'In progress' : 'Label';
    items.push(`        { title: 'Label', description: 'Write description here', statusLabel: '${status}' },`);
  }
  return items.join('\n');
};

const buildFunctionalCode = (story: StepperStory, isDark: boolean): string => {
  const total = TOTAL_STEPS[story];
  const isCompact = story.startsWith('compact-stepper');

  const layoutMap: Record<string, string> = {
    'compact-stepper-linear': 'linear',
    'compact-stepper-right-aligned': 'rightAligned',
    'compact-stepper-centered': 'centered',
    'compact-stepper-centered-between': 'centeredBetween',
    'compact-stepper-split': 'split',
  };

  const stepperBody = isCompact
    ? `        <Ux4gCompactStepper
          totalSteps={${total}}
          currentStep={step}
          stepLabel='Account Setup'
          description='Enter your personal details to continue.'
          layout='${layoutMap[story]}'
          onNext={() => setStep((s) => Math.min(${total}, s + 1))}
          onPrevious={() => setStep((s) => Math.max(1, s - 1))}
        />`
    : story === 'stepper-horizontal-dashed'
    ? `        <Ux4gStepper
          totalSteps={${total}}
          currentStep={step}
          orientation='horizontal'
          lineStyle='dashed'
          steps={[
${basicSteps(total)}
          ]}
        />`
    : story === 'stepper-vertical'
    ? `        <View style={{ alignSelf: 'flex-start', width: '100%' }}>
          <Ux4gStepper
            totalSteps={${total}}
            currentStep={step}
            orientation='vertical'
            steps={[
${basicSteps(total)}
            ]}
          />
        </View>`
    : story === 'stepper-error'
    ? `        <Ux4gStepper
          totalSteps={${total}}
          currentStep={step}
          orientation='horizontal'
          steps={[
            { title: 'Account', description: step > 1 ? 'Completed' : 'Pending' },
            { title: 'Profile', description: step > 2 ? 'Completed' : 'Pending' },
            { title: 'Payment', description: step === 3 ? 'Transaction failed' : step > 3 ? 'Completed' : 'Pending', isError: step === 3 },
            { title: 'Done', description: step > 3 ? 'Completed' : 'Pending' },
          ]}
        />`
    : story === 'stepper-bottom-lines'
    ? `        <Ux4gStepper
          totalSteps={${total}}
          currentStep={step}
          orientation='horizontal'
          linePlacement='bottom'
          steps={[
${statusSteps(2, total)}
          ]}
        />`
    : story === 'stepper-bottom-background'
    ? `        <Ux4gStepper
          totalSteps={${total}}
          currentStep={step}
          orientation='horizontal'
          linePlacement='bottom'
          activeStepBackground
          steps={[
${statusSteps(2, total)}
          ]}
        />`
    : `        <Ux4gStepper
          totalSteps={${total}}
          currentStep={step}
          orientation='horizontal'
          edgeLabelAlignment
          steps={[
${statusSteps(2, total)}
          ]}
        />`;

  const controls = isCompact
    ? ''
    : `      <View style={{ height: 24 }} />
      <Text style={styles.controlCount}>Step {step} of ${total}</Text>
      <View style={{ height: 8 }} />
      <View style={styles.controls}>
        <Pressable
          style={[styles.controlButton, { backgroundColor: step > 1 ? '#3447E0' : '#CCCCCC' }]}
          disabled={step <= 1}
          onPress={() => setStep((s) => Math.max(1, s - 1))}
        >
          <Text style={styles.controlButtonText}>Previous</Text>
        </Pressable>
        <Pressable
          style={[styles.controlButton, { backgroundColor: step < ${total} ? '#3447E0' : '#CCCCCC' }]}
          disabled={step >= ${total}}
          onPress={() => setStep((s) => Math.min(${total}, s + 1))}
        >
          <Text style={styles.controlButtonText}>Next</Text>
        </Pressable>
      </View>`;

  return `import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gStepper, Ux4gCompactStepper, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [step, setStep] = useState(2);

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <ScrollView contentContainerStyle={styles.container}>
${stepperBody}
${controls}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  controlButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
  controlCount: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
  },
});`;
};

export const StepperDoc: React.FC<StepperDocProps> = ({ isDark, story = 'stepper-horizontal' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const activeStory = normalizeStory(story);
  const config = storyMeta[activeStory];
  const codeString = useMemo(() => buildFunctionalCode(activeStory, isDark), [activeStory, isDark]);

  const renderStoryPreview = () => {
    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gStepper%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(codeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '680px', border: 'none', borderRadius: '8px' }}
        title='Expo Snack Stepper Preview'
      />
    );
  };

  const stepperPropsData = [
    { name: 'totalSteps', type: 'number', default: 'required', desc: 'Total number of steps to display.', required: true },
    { name: 'currentStep', type: 'number', default: 'required', desc: 'Current active step (1-indexed).', required: true },
    { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", desc: 'Direction of the stepper layout.', required: false },
    { name: 'lineStyle', type: "'solid' | 'dashed'", default: "'solid'", desc: 'Style of the connecting lines.', required: false },
    { name: 'linePlacement', type: "'center' | 'bottom'", default: "'center'", desc: 'Where connecting lines are placed relative to labels.', required: false },
    { name: 'steps', type: 'Ux4gStepItem[]', default: '[]', desc: 'Step data (title, description, statusLabel, isError, text styles).', required: false },
    { name: 'stepSize', type: 'number', default: '32', desc: 'Diameter of the step icons.', required: false },
    { name: 'showLabels', type: 'boolean', default: 'true', desc: 'Whether to show labels below/beside icons.', required: false },
    { name: 'edgeLabelAlignment', type: 'boolean', default: 'false', desc: 'Align first/last labels to container edges.', required: false },
    { name: 'activeStepBackground', type: 'boolean', default: 'false', desc: 'Highlight background behind the active step (bottom placement).', required: false },
    { name: 'stepSpacing', type: 'number', default: '24', desc: 'Spacing between vertical steps when labels are hidden.', required: false },
    { name: 'alignIconWithDescription', type: 'boolean', default: 'false', desc: 'Align vertical icons with the description line.', required: false },
    { name: 'style', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Style override for the stepper container.', required: false },
  ];

  const compactPropsData = [
    { name: 'totalSteps', type: 'number', default: 'required', desc: 'Total number of capsule segments.', required: true },
    { name: 'currentStep', type: 'number', default: 'required', desc: 'Current active step (1-indexed).', required: true },
    { name: 'stepLabel', type: 'string', default: 'required', desc: 'Label text for the current step.', required: true },
    { name: 'description', type: 'string', default: 'undefined', desc: 'Helper description below the step label.', required: false },
    { name: 'onNext', type: '() => void', default: 'noop', desc: 'Callback when the next arrow is pressed.', required: false },
    { name: 'onPrevious', type: '() => void', default: 'noop', desc: 'Callback when the previous arrow is pressed.', required: false },
    { name: 'layout', type: "'linear' | 'rightAligned' | 'centered' | 'centeredBetween' | 'split'", default: "'linear'", desc: 'Capsule stepper layout preset.', required: false },
    { name: 'labelAlignment', type: "'flex-start' | 'center' | 'flex-end'", default: "'flex-start'", desc: 'Alignment of labels in the linear layout.', required: false },
    { name: 'activeColor', type: 'string', default: 'theme primary', desc: 'Color of the active capsule.', required: false },
    { name: 'inactiveColor', type: 'string', default: 'onSurface @ 20%', desc: 'Color of inactive capsules.', required: false },
    { name: 'style', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Style override for the container.', required: false },
  ];

  const isCompact = activeStory.startsWith('compact-stepper');
  const titleKey = isCompact ? 'CompactStepper' : 'Stepper';

  return (
    <div className='wb-page'>
      <div className='wb-header'>
        <div className='wb-header-row'>
          <h1 className='wb-title'>{config.title}</h1>
          <span className='wb-badge'>Component</span>
        </div>
        <p className='wb-subtitle'>{config.description}</p>
        <p className='wb-subtitle' style={{ marginTop: 6 }}>
          <span style={{ color: '#E11D48', fontWeight: 700 }}>*</span> marks required props.
        </p>
      </div>

      <div className='wb-body'>
        <div className='wb-main'>
          <div className='wb-tab-bar'>
            <button className={`wb-tab ${activeMainTab === 'preview' ? 'active' : ''}`} onClick={() => setActiveMainTab('preview')} type='button'>
              <span className='material-symbols-outlined wb-tab-icon'>visibility</span>
              Preview
            </button>
            <button className={`wb-tab ${activeMainTab === 'code' ? 'active' : ''}`} onClick={() => setActiveMainTab('code')} type='button'>
              <span className='material-symbols-outlined wb-tab-icon'>code</span>
              Code
            </button>
            <button className={`wb-tab ${activeMainTab === 'props' ? 'active' : ''}`} onClick={() => setActiveMainTab('props')} type='button'>
              <span className='material-symbols-outlined wb-tab-icon'>tune</span>
              Props
            </button>
          </div>

          <div className='wb-tab-content'>
            {activeMainTab === 'preview' && (
              <Ux4gThemeProvider isDark={isDark}>
                <div className={`wb-preview-area ${isDark ? 'dark' : ''}`}>{renderStoryPreview()}</div>
              </Ux4gThemeProvider>
            )}

            {activeMainTab === 'code' && (
              <div className='wb-code-area'>
                <CodeBlock code={codeString} language='TSX' filename={`${titleKey}Example.tsx`} />
              </div>
            )}

            {activeMainTab === 'props' && (
              <div className='wb-props-area'>
                <table className='props-table'>
                  <thead>
                    <tr>
                      <th>Prop</th>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Default</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(isCompact ? compactPropsData : stepperPropsData).map((p) => (
                      <tr key={p.name}>
                        <td>
                          <span className='prop-name'>
                            {p.name}
                            {p.required ? <span style={{ color: '#E11D48' }}> *</span> : null}
                          </span>
                        </td>
                        <td><span className='prop-type'>{p.type}</span></td>
                        <td>{p.desc}</td>
                        <td><span className='prop-default'>{p.default}</span></td>
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

export default StepperDoc;