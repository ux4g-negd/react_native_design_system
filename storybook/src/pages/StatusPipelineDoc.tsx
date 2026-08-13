import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface StatusPipelineDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

const STORY_IDS = [
  'status-pipeline-vertical',
  'status-pipeline-vertical-states',
  'status-pipeline-vertical-sizes',
  'status-pipeline-vertical-colors',
  'status-pipeline-vertical-labels',
  'status-pipeline-vertical-nolabels',
  'status-pipeline-horizontal',
  'status-pipeline-horizontal-states',
  'status-pipeline-horizontal-sizes',
  'status-pipeline-horizontal-colors',
  'status-pipeline-horizontal-labels',
  'status-pipeline-horizontal-nolabels',
] as const;

type PipelineStory = (typeof STORY_IDS)[number];

const normalizeStory = (story?: string): PipelineStory => {
  if (story === 'status-pipeline-sizes') return 'status-pipeline-vertical-sizes';

  return STORY_IDS.includes(story as PipelineStory)
    ? (story as PipelineStory)
    : 'status-pipeline-vertical';
};

const isHorizontal = (story: PipelineStory): boolean => story.startsWith('status-pipeline-horizontal');

const storyMeta: Record<PipelineStory, { title: string; description: string }> = {
  'status-pipeline-vertical': {
    title: 'Status Pipeline — Vertical',
    description: 'Vertical step-by-step flow with completed, current, and upcoming states.',
  },
  'status-pipeline-vertical-states': {
    title: 'Vertical — All States',
    description: 'Every step state: completed, current, upcoming, error (red), and warning (orange).',
  },
  'status-pipeline-vertical-sizes': {
    title: 'Vertical — Sizes',
    description: 'Small (s), Medium (m), and Large (l) size presets in vertical layout.',
  },
  'status-pipeline-vertical-colors': {
    title: 'Vertical — Custom Colors',
    description: 'Per-state color overrides and custom active/inactive line colors.',
  },
  'status-pipeline-vertical-labels': {
    title: 'Vertical — Labels Only',
    description: 'Labels without descriptions, useful for compact vertical lists.',
  },
  'status-pipeline-vertical-nolabels': {
    title: 'Vertical — Circles Only',
    description: 'Step circles and connecting lines only, with labels and descriptions hidden. No error/warning states.',
  },
  'status-pipeline-horizontal': {
    title: 'Status Pipeline — Horizontal',
    description: 'Horizontal step-by-step flow for wizards and multi-step forms.',
  },
  'status-pipeline-horizontal-states': {
    title: 'Horizontal — All States',
    description: 'Every step state laid out horizontally with connecting lines.',
  },
  'status-pipeline-horizontal-sizes': {
    title: 'Horizontal — Sizes',
    description: 'Small (s), Medium (m), and Large (l) size presets in horizontal layout.',
  },
  'status-pipeline-horizontal-colors': {
    title: 'Horizontal — Custom Colors',
    description: 'Per-state color overrides and custom active/inactive line colors.',
  },
  'status-pipeline-horizontal-labels': {
    title: 'Horizontal — Labels Only',
    description: 'Compact header row with labels and no descriptions below.',
  },
  'status-pipeline-horizontal-nolabels': {
    title: 'Horizontal — Circles Only',
    description: 'Step circles and connecting lines only, with labels and descriptions hidden. No error/warning states.',
  },
};

const getStoryCode = (story: PipelineStory): string => {
  const horizontal = isHorizontal(story);
  const orientation = horizontal ? 'horizontal' : 'vertical';

  if (story.endsWith('-states')) {
    return `import React from 'react';
import { Ux4gStatusPipeline } from 'ux4g-react-native-design-system';

export default function StatusPipelineStatesExample() {
  return (
    <Ux4gStatusPipeline
      orientation='${orientation}'
      currentStep={-1}
      steps={[
        { label: 'Order Placed', description: 'Completed', state: 'completed' },
        { label: 'Document Review', description: 'Failed verification', state: 'error' },
        { label: 'Payment Gateway', description: 'Pending retry', state: 'warning' },
        { label: 'Approval Stage', description: 'Upcoming', state: 'upcoming' },
        { label: 'Final Certificate', description: 'Est. 25 Apr', state: 'upcoming' },
      ]}
    />
  );
}`;
  }

  if (story.endsWith('-sizes')) {
    const render = (size: string) => `      <Ux4gStatusPipeline
        orientation='${orientation}'
        size='${size}'
        currentStep={1}
        steps={[
          { label: 'Submitted', description: '5 Apr' },
          { label: 'Verification', description: 'In progress' },
          { label: 'Approval', description: 'Pending' },
          { label: 'Completed', description: 'Done' },
        ]}
      />
      <View style={{ height: ${horizontal ? '40' : '32'} }} />`;

    return `import React from 'react';
import { View } from 'react-native';
import { Ux4gStatusPipeline } from 'ux4g-react-native-design-system';

export default function StatusPipelineSizesExample() {
  return (
    <View>
${render('s')}
${render('m')}
      <Ux4gStatusPipeline
        orientation='${orientation}'
        size='l'
        currentStep={1}
        steps={[
          { label: 'Submitted', description: '5 Apr' },
          { label: 'Verification', description: 'In progress' },
          { label: 'Approval', description: 'Pending' },
          { label: 'Completed', description: 'Done' },
        ]}
      />
    </View>
  );
}`;
  }

  if (story.endsWith('-colors')) {
    return `import React from 'react';
import { Ux4gStatusPipeline } from 'ux4g-react-native-design-system';

export default function StatusPipelineColorsExample() {
  return (
    <Ux4gStatusPipeline
      orientation='${orientation}'
      currentStep={2}
      completedColor='#0284C7'
      currentColor='#7C3AED'
      upcomingColor='#94A3B8'
      errorColor='#DC2626'
      warningColor='#EA580C'
      completedLineColor='#0284C7'
      upcomingLineColor='#CBD5E1'
      steps={[
        { label: 'Submitted', description: '5 Apr' },
        { label: 'Under Review', description: 'In progress' },
        { label: 'KYC', description: 'Action needed', state: 'warning' },
        { label: 'Payment', description: 'Retry', state: 'error' },
        { label: 'Approval', description: 'Pending' },
        { label: 'Completed', description: 'Done' },
      ]}
    />
  );
}`;
  }

  if (story.endsWith('-labels')) {
    return `import React from 'react';
import { Ux4gStatusPipeline } from 'ux4g-react-native-design-system';

export default function StatusPipelineLabelsExample() {
  return (
    <Ux4gStatusPipeline
      orientation='${orientation}'
      currentStep={2}
      showDescriptions={false}
      steps={[
        { label: 'Submitted' },
        { label: 'Under Review' },
        { label: 'Verification', state: 'error' },
        { label: 'Approval' },
        { label: 'Completed' },
      ]}
    </Ux4gStatusPipeline>
  );
}`;
  }

  if (story.endsWith('-nolabels')) {
    return `import React from 'react';
import { Ux4gStatusPipeline } from 'ux4g-react-native-design-system';

export default function StatusPipelineCirclesOnlyExample() {
  return (
    <Ux4gStatusPipeline
      orientation='${orientation}'
      currentStep={2}
      showLabels={false}
      showDescriptions={false}
      steps={[
        {},
        {},
        {},
        {},
        {},
        {},
      ]}
    />
  );
}`;
  }

  return `import React from 'react';
import { Ux4gStatusPipeline } from 'ux4g-react-native-design-system';

export default function StatusPipelineBasicExample() {
  return (
    <Ux4gStatusPipeline
      orientation='${orientation}'
      currentStep={2}
      steps={[
        { label: 'Submitted', description: '5 Apr' },
        { label: 'Under Review', description: 'In progress' },
        { label: 'Verification', description: 'Pending' },
        { label: 'Approval', description: 'Pending' },
        { label: 'Completed', description: 'Done' },
      ]}
    />
  );
}`;
};

const getSnackFields = (story: PipelineStory): string => {
  const horizontal = isHorizontal(story);
  const orientation = horizontal ? 'horizontal' : 'vertical';

  if (story.endsWith('-states')) {
    return `        <Ux4gStatusPipeline
          orientation='${orientation}'
          currentStep={-1}
          steps={[
            { label: 'Order Placed', description: 'Completed', state: 'completed' },
            { label: 'Document Review', description: 'Failed verification', state: 'error' },
            { label: 'Payment Gateway', description: 'Pending retry', state: 'warning' },
            { label: 'Approval Stage', description: 'Upcoming', state: 'upcoming' },
            { label: 'Final Certificate', description: 'Est. 25 Apr', state: 'upcoming' },
          ]}
        />`;
  }

  if (story.endsWith('-sizes')) {
    const gap = horizontal ? 48 : 32;
    return `        <Ux4gStatusPipeline
          orientation='${orientation}'
          size='s'
          currentStep={1}
          steps={[
            { label: 'Submitted', description: '5 Apr' },
            { label: 'Verification', description: 'In progress' },
            { label: 'Approval', description: 'Pending' },
            { label: 'Completed', description: 'Done' },
          ]}
        />
        <View style={{ height: ${gap} }} />
        <Ux4gStatusPipeline
          orientation='${orientation}'
          size='m'
          currentStep={1}
          steps={[
            { label: 'Submitted', description: '5 Apr' },
            { label: 'Verification', description: 'In progress' },
            { label: 'Approval', description: 'Pending' },
            { label: 'Completed', description: 'Done' },
          ]}
        />
        <View style={{ height: ${gap} }} />
        <Ux4gStatusPipeline
          orientation='${orientation}'
          size='l'
          currentStep={1}
          steps={[
            { label: 'Submitted', description: '5 Apr' },
            { label: 'Verification', description: 'In progress' },
            { label: 'Approval', description: 'Pending' },
            { label: 'Completed', description: 'Done' },
          ]}
        />`;
  }

  if (story.endsWith('-colors')) {
    return `        <Ux4gStatusPipeline
          orientation='${orientation}'
          currentStep={2}
          completedColor='#0284C7'
          currentColor='#7C3AED'
          upcomingColor='#94A3B8'
          errorColor='#DC2626'
          warningColor='#EA580C'
          completedLineColor='#0284C7'
          upcomingLineColor='#CBD5E1'
          steps={[
            { label: 'Submitted', description: '5 Apr' },
            { label: 'Under Review', description: 'In progress' },
            { label: 'KYC', description: 'Action needed', state: 'warning' },
            { label: 'Payment', description: 'Retry', state: 'error' },
            { label: 'Approval', description: 'Pending' },
            { label: 'Completed', description: 'Done' },
          ]}
        />`;
  }

  if (story.endsWith('-labels')) {
    return `        <Ux4gStatusPipeline
          orientation='${orientation}'
          currentStep={2}
          showDescriptions={false}
          steps={[
            { label: 'Submitted' },
            { label: 'Under Review' },
            { label: 'Verification', state: 'error' },
            { label: 'Approval' },
            { label: 'Completed' },
          ]}
        />`;
  }

  if (story.endsWith('-nolabels')) {
    return `        <Ux4gStatusPipeline
          orientation='${orientation}'
          currentStep={2}
          showLabels={false}
          showDescriptions={false}
          steps={[
            {},
            {},
            {},
            {},
            {},
            {},
          ]}
        />`;
  }

  return `        <Ux4gStatusPipeline
          orientation='${orientation}'
          currentStep={2}
          steps={[
            { label: 'Submitted', description: '5 Apr' },
            { label: 'Under Review', description: 'In progress' },
            { label: 'Verification', description: 'Pending' },
            { label: 'Approval', description: 'Pending' },
            { label: 'Completed', description: 'Done' },
          ]}
        />`;
};

export const StatusPipelineDoc: React.FC<StatusPipelineDocProps> = ({ isDark, story = 'status-pipeline-vertical' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const activeStory = normalizeStory(story);
  const config = storyMeta[activeStory];
  const codeString = useMemo(() => getStoryCode(activeStory), [activeStory]);

  const renderStoryPreview = () => {
    const snackCodeString = `import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gStatusPipeline, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <ScrollView contentContainerStyle={styles.container}>
${getSnackFields(activeStory)}
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
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gStatusPipeline%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '680px', border: 'none', borderRadius: '8px' }}
        title='Expo Snack StatusPipeline Preview'
      />
    );
  };

  const propsData = [
    { name: 'steps', type: 'Ux4gPipelineStep[]', default: 'required', desc: 'List of pipeline steps (label, description, state, customIcon, customColor).', required: true },
    { name: 'currentStep', type: 'number', default: '0', desc: 'Current active step index. Set to -1 to rely purely on step.state.', required: false },
    { name: 'orientation', type: "'vertical' | 'horizontal'", default: "'vertical'", desc: 'Direction of pipeline layout.', required: false },
    { name: 'size', type: "'s' | 'm' | 'l'", default: "'m'", desc: 'Size preset controlling circle, icon, and text scale.', required: false },
    { name: 'showLabels', type: 'boolean', default: 'true', desc: 'Whether to show step labels.', required: false },
    { name: 'showDescriptions', type: 'boolean', default: 'true', desc: 'Whether to show step descriptions.', required: false },
    { name: 'activeLineWidth', type: 'number', default: 'size-based', desc: 'Thickness of completed/active connecting lines.', required: false },
    { name: 'inactiveLineWidth', type: 'number', default: 'size-based', desc: 'Thickness of upcoming connecting lines.', required: false },
    { name: 'completedColor', type: 'string', default: 'theme success', desc: 'Color override for completed steps.', required: false },
    { name: 'currentColor', type: 'string', default: 'theme primary', desc: 'Color override for current step.', required: false },
    { name: 'upcomingColor', type: 'string', default: 'onSurface @ 30%', desc: 'Color override for upcoming steps.', required: false },
    { name: 'errorColor', type: 'string', default: 'theme error', desc: 'Color override for error steps.', required: false },
    { name: 'warningColor', type: 'string', default: 'theme warning', desc: 'Color override for warning steps.', required: false },
    { name: 'completedLineColor', type: 'string', default: 'theme success', desc: 'Custom line color for completed segments.', required: false },
    { name: 'upcomingLineColor', type: 'string', default: 'onSurface @ 15%', desc: 'Custom line color for upcoming segments.', required: false },
    { name: 'labelSpacing', type: 'number', default: '12 (vertical) / 6 (horizontal)', desc: 'Spacing between step indicator and label text.', required: false },
    { name: 'circleSize', type: 'number', default: 'size-based', desc: 'Explicit diameter override for step circles.', required: false },
    { name: 'style', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Style override for pipeline container.', required: false },
  ];

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
                <CodeBlock code={codeString} language='TSX' filename='StatusPipelineExample.tsx' />
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
                    {propsData.map((p) => (
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

export default StatusPipelineDoc;