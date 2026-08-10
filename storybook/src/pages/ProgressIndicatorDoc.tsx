import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface ProgressIndicatorDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';
type ProgressStory =
  | 'progress-linear'
  | 'progress-circular'
  | 'progress-half-circle'
  | 'progress-animated'
  | 'progress-sla-circular'
  | 'progress-sla-linear';

const normalizeStory = (story?: string): ProgressStory => {
  if (story === 'progress' || story === 'progress-indicator') return 'progress-linear';
  if (story === 'progress-sla' || story === 'progress-sla-indicator') return 'progress-sla-circular';

  const allowed: ProgressStory[] = [
    'progress-linear',
    'progress-circular',
    'progress-half-circle',
    'progress-animated',
    'progress-sla-circular',
    'progress-sla-linear',
  ];

  return allowed.includes(story as ProgressStory) ? (story as ProgressStory) : 'progress-linear';
};

const storyMeta: Record<ProgressStory, { title: string; description: string }> = {
  'progress-linear': {
    title: 'Progress Indicator',
    description: 'Linear progress parity set: rounded, sharp, icon+hint, and inside/outside percentage placements.',
  },
  'progress-circular': {
    title: 'Progress Indicator',
    description: 'Circular progress parity set with size scaling, center content, metadata labels, and stroke cap variations.',
  },
  'progress-half-circle': {
    title: 'Progress Indicator',
    description: 'Half-circle progress parity set with showScale modes, size variants, and gradient rendering.',
  },
  'progress-animated': {
    title: 'Progress Indicator',
    description: 'Animated circular and half-circle indicators using Flutter-matched default easing duration behavior.',
  },
  'progress-sla-circular': {
    title: 'Progress SLA Indicator',
    description: 'SLA circular progress status cards with semantic color variants.',
  },
  'progress-sla-linear': {
    title: 'Progress SLA Indicator',
    description: 'SLA linear progress rows with sharp and rounded style columns.',
  },
};

const getStoryCode = (story: ProgressStory): string => {
  if (story === 'progress-sla-circular') {
    return `import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gCircularProgress } from 'ux4g-react-native-design-system';

const SlaBadge = ({ text, fg, bg }: { text: string; fg: string; bg: string }) => (
  <View style={{ backgroundColor: bg, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4 }}>
    <Text style={{ color: fg, fontSize: 12, fontWeight: '700' }}>{text}</Text>
  </View>
);

export default function ProgressSlaCircularExample() {
  return (
    <View style={{ gap: 24, width: '100%' }}>
      <Text style={{ fontSize: 18, fontWeight: '700', color: '#111827' }}>SLA Circular Progress</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Ux4gCircularProgress value={0.5} size='xl' progressColor='#6A4EFF' gradientColors={['#DCD4FF', '#6A4EFF']} centerValueText='8' centerDescription='days left' label='Label' description='Description' footer={<SlaBadge text='Label' fg='#6A4EFF' bg='#EFEAFF' />} />
        <Ux4gCircularProgress value={0.5} size='xl' progressColor='#FFA827' gradientColors={['#FFF2D9', '#FFA827']} centerValueText='8' centerDescription='days left' label='Label' description='Description' footer={<SlaBadge text='Label' fg='#FFA827' bg='#FFF7E6' />} />
        <Ux4gCircularProgress value={0.5} size='xl' progressColor='#F55E57' gradientColors={['#FFECEE', '#F55E57']} centerValueText='8' centerDescription='days left' label='Label' description='Description' footer={<SlaBadge text='Label' fg='#F55E57' bg='#FFF0F0' />} />
        <Ux4gCircularProgress value={0.5} size='xl' progressColor='#1AA64A' gradientColors={['#DFF9E8', '#1AA64A']} centerValueText='8' centerDescription='days left' label='Label' description='Description' footer={<SlaBadge text='Label' fg='#1AA64A' bg='#F2FCEF' />} />
      </View>
    </View>
  );
}`;
  }

  if (story === 'progress-sla-linear') {
    return `import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gIcons, Ux4gLinearProgressBar } from 'ux4g-react-native-design-system';

export default function ProgressSlaLinearExample() {
  return (
    <View style={{ gap: 24, width: '100%' }}>
      <Text style={{ fontSize: 18, fontWeight: '700', color: '#111827' }}>Linear Progress</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ width: '48%', gap: 14 }}>
          <Text style={{ color: '#6B7280' }}>Sharp</Text>
          <Ux4gLinearProgressBar value={0.5} shape='sharp' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#6A4EFF' })} iconBackgroundColor='#6A4EFF1F' gradientColors={['#6A4EFF', '#9B59B6']} />
          <Ux4gLinearProgressBar value={0.5} shape='sharp' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#F39C12' })} iconBackgroundColor='#F39C121F' gradientColors={['#FFAE00', '#FF5F00']} />
          <Ux4gLinearProgressBar value={0.5} shape='sharp' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#E74C3C' })} iconBackgroundColor='#E74C3C1F' gradientColors={['#FFB3AE', '#E74C3C']} />
          <Ux4gLinearProgressBar value={0.5} shape='sharp' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#27AE60' })} iconBackgroundColor='#27AE601F' gradientColors={['#90EE90', '#27AE60']} />
        </View>

        <View style={{ width: '48%', gap: 14 }}>
          <Text style={{ color: '#6B7280' }}>Rounded</Text>
          <Ux4gLinearProgressBar value={0.5} shape='rounded' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#6A4EFF' })} iconBackgroundColor='#6A4EFF1F' gradientColors={['#6A4EFF', '#9B59B6']} />
          <Ux4gLinearProgressBar value={0.5} shape='rounded' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#F39C12' })} iconBackgroundColor='#F39C121F' gradientColors={['#FFAE00', '#FF5F00']} />
          <Ux4gLinearProgressBar value={0.5} shape='rounded' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#E74C3C' })} iconBackgroundColor='#E74C3C1F' gradientColors={['#FFB3AE', '#E74C3C']} />
          <Ux4gLinearProgressBar value={0.5} shape='rounded' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#27AE60' })} iconBackgroundColor='#27AE601F' gradientColors={['#90EE90', '#27AE60']} />
        </View>
      </View>
    </View>
  );
}`;
  }

  if (story === 'progress-circular') {
    return `import React from 'react';
import { View } from 'react-native';
import { Ux4gCircularProgress } from 'ux4g-react-native-design-system';

export default function ProgressCircularExample() {
  return (
    <View style={{ gap: 24, alignItems: 'center' }}>
      <Ux4gCircularProgress
        value={0.72}
        size='xl'
        centerValueText='72%'
        centerDescription='Profile'
        strokeCap='round'
      />

      <Ux4gCircularProgress
        value={0.45}
        size='l'
        label='KYC Progress'
        description='3/7 steps complete'
        strokeCap='butt'
      />

      <Ux4gCircularProgress
        value={0.88}
        size='xxl'
        centerValueText='88%'
        centerDescription='Portfolio'
        gradientColors={['#DCD4FF', '#4A2BC2']}
      />
    </View>
  );
}`;
  }

  if (story === 'progress-half-circle') {
    return `import React from 'react';
import { View } from 'react-native';
import { Ux4gHalfCircleProgress } from 'ux4g-react-native-design-system';

export default function ProgressHalfCircleExample() {
  return (
    <View style={{ gap: 28, alignItems: 'center' }}>
      <Ux4gHalfCircleProgress
        value={0.64}
        size='l'
        valueText='64%'
        description='Portfolio Health'
        showScale={true}
      />

      <Ux4gHalfCircleProgress
        value={0.38}
        size='m'
        valueText='38%'
        description='Goal Coverage'
        showScale={false}
      />

      <Ux4gHalfCircleProgress
        value={0.91}
        size='xl'
        valueText='91%'
        description='Credit Health'
        gradientColors={['#4A2BC2', '#DCD4FF']}
      />
    </View>
  );
}`;
  }

  if (story === 'progress-animated') {
    return `import React from 'react';
import { View } from 'react-native';
import { Ux4gAnimatedCircularProgress, Ux4gAnimatedHalfCircleProgress } from 'ux4g-react-native-design-system';

export default function ProgressAnimatedExample() {
  return (
    <View style={{ gap: 28, alignItems: 'center' }}>
      <Ux4gAnimatedCircularProgress
        value={0.82}
        size='xl'
        duration={700}
        centerValueText='82%'
        centerDescription='Completion'
      />

      <Ux4gAnimatedHalfCircleProgress
        value={0.57}
        size='l'
        duration={700}
        valueText='57%'
        description='Target Achieved'
        showScale={true}
      />
    </View>
  );
}`;
  }

  return `import React from 'react';
import { View } from 'react-native';
import { Ux4gLinearProgressBar, Ux4gIcons } from 'ux4g-react-native-design-system';

export default function ProgressLinearExample() {
  return (
    <View style={{ gap: 18, width: '100%' }}>
      <Ux4gLinearProgressBar
        value={0.35}
        icon={Ux4gIcons.info({ size: 16, color: '#4A2BC2' })}
        label='Profile Completion'
        hint='Step 2 of 6'
        showPercentage={true}
        labelPosition='outside'
        shape='rounded'
      />

      <Ux4gLinearProgressBar
        value={0.68}
        label='Document Upload'
        showPercentage={true}
        labelPosition='inside'
        height={14}
        shape='rounded'
      />

      <Ux4gLinearProgressBar
        value={0.86}
        label='Loan Eligibility'
        gradientColors={['#DCD4FF', '#4A2BC2']}
        showPercentage={true}
        labelPosition='outside'
        shape='sharp'
      />

      <Ux4gLinearProgressBar
        value={0.22}
        label='Verification Queue'
        hint='Pending'
        showPercentage={false}
        shape='rounded'
      />
    </View>
  );
}`;
};

const getSnackFields = (story: ProgressStory): string => {
  if (story === 'progress-sla-circular') {
    return `        <View style={styles.slaContainer}>
          <Text style={styles.sectionTitle}>SLA Circular Progress</Text>
          <View style={styles.slaCircularRow}>
            <Ux4gCircularProgress value={0.5} size='xl' progressColor='#6A4EFF' gradientColors={['#DCD4FF', '#6A4EFF']} centerValueText='8' centerDescription='days left' label='Label' description='Description' footer={<View style={{ backgroundColor: '#EFEAFF', borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4 }}><Text style={{ color: '#6A4EFF', fontSize: 12, fontWeight: '700' }}>Label</Text></View>} />
            <Ux4gCircularProgress value={0.5} size='xl' progressColor='#FFA827' gradientColors={['#FFF2D9', '#FFA827']} centerValueText='8' centerDescription='days left' label='Label' description='Description' footer={<View style={{ backgroundColor: '#FFF7E6', borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4 }}><Text style={{ color: '#FFA827', fontSize: 12, fontWeight: '700' }}>Label</Text></View>} />
            <Ux4gCircularProgress value={0.5} size='xl' progressColor='#F55E57' gradientColors={['#FFECEE', '#F55E57']} centerValueText='8' centerDescription='days left' label='Label' description='Description' footer={<View style={{ backgroundColor: '#FFF0F0', borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4 }}><Text style={{ color: '#F55E57', fontSize: 12, fontWeight: '700' }}>Label</Text></View>} />
            <Ux4gCircularProgress value={0.5} size='xl' progressColor='#1AA64A' gradientColors={['#DFF9E8', '#1AA64A']} centerValueText='8' centerDescription='days left' label='Label' description='Description' footer={<View style={{ backgroundColor: '#F2FCEF', borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4 }}><Text style={{ color: '#1AA64A', fontSize: 12, fontWeight: '700' }}>Label</Text></View>} />
          </View>
        </View>`;
  }

  if (story === 'progress-sla-linear') {
    return `        <View style={styles.slaContainer}>
          <Text style={styles.sectionTitle}>Linear Progress</Text>

          <View style={styles.slaLinearRow}>
            <View style={styles.slaCol}>
              <Text style={styles.colTitle}>Sharp</Text>
              <Ux4gLinearProgressBar value={0.5} shape='sharp' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#6A4EFF' })} iconBackgroundColor='#6A4EFF1F' gradientColors={['#6A4EFF', '#9B59B6']} />
              <Ux4gLinearProgressBar value={0.5} shape='sharp' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#F39C12' })} iconBackgroundColor='#F39C121F' gradientColors={['#FFAE00', '#FF5F00']} />
              <Ux4gLinearProgressBar value={0.5} shape='sharp' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#E74C3C' })} iconBackgroundColor='#E74C3C1F' gradientColors={['#FFB3AE', '#E74C3C']} />
              <Ux4gLinearProgressBar value={0.5} shape='sharp' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#27AE60' })} iconBackgroundColor='#27AE601F' gradientColors={['#90EE90', '#27AE60']} />
            </View>

            <View style={styles.slaCol}>
              <Text style={styles.colTitle}>Rounded</Text>
              <Ux4gLinearProgressBar value={0.5} shape='rounded' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#6A4EFF' })} iconBackgroundColor='#6A4EFF1F' gradientColors={['#6A4EFF', '#9B59B6']} />
              <Ux4gLinearProgressBar value={0.5} shape='rounded' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#F39C12' })} iconBackgroundColor='#F39C121F' gradientColors={['#FFAE00', '#FF5F00']} />
              <Ux4gLinearProgressBar value={0.5} shape='rounded' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#E74C3C' })} iconBackgroundColor='#E74C3C1F' gradientColors={['#FFB3AE', '#E74C3C']} />
              <Ux4gLinearProgressBar value={0.5} shape='rounded' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#27AE60' })} iconBackgroundColor='#27AE601F' gradientColors={['#90EE90', '#27AE60']} />
            </View>
          </View>
        </View>`;
  }

  if (story === 'progress-circular') {
    return `        <View style={styles.stackCentered}>
          <Ux4gCircularProgress
            value={0.72}
            size='xl'
            centerValueText='72%'
            centerDescription='Profile'
            strokeCap='round'
          />
          <Ux4gCircularProgress
            value={0.45}
            size='l'
            label='KYC Progress'
            description='3/7 steps complete'
            strokeCap='butt'
          />
          <Ux4gCircularProgress
            value={0.88}
            size='xxl'
            centerValueText='88%'
            centerDescription='Portfolio'
            gradientColors={['#DCD4FF', '#4A2BC2']}
          />
        </View>`;
  }

  if (story === 'progress-half-circle') {
    return `        <View style={styles.stackCentered}>
          <Ux4gHalfCircleProgress
            value={0.64}
            size='l'
            valueText='64%'
            description='Portfolio Health'
            showScale={true}
          />
          <Ux4gHalfCircleProgress
            value={0.38}
            size='m'
            valueText='38%'
            description='Goal Coverage'
            showScale={false}
          />
          <Ux4gHalfCircleProgress
            value={0.91}
            size='xl'
            valueText='91%'
            description='Credit Health'
            gradientColors={['#4A2BC2', '#DCD4FF']}
          />
        </View>`;
  }

  if (story === 'progress-animated') {
    return `        <View style={styles.stackCentered}>
          <Ux4gAnimatedCircularProgress
            value={0.82}
            size='xl'
            duration={700}
            centerValueText='82%'
            centerDescription='Completion'
          />
          <Ux4gAnimatedHalfCircleProgress
            value={0.57}
            size='l'
            duration={700}
            valueText='57%'
            description='Target Achieved'
            showScale={true}
          />
        </View>`;
  }

  return `        <View style={styles.stackFull}>
          <Ux4gLinearProgressBar
            value={0.35}
            icon={Ux4gIcons.info({ size: 16, color: '#4A2BC2' })}
            label='Profile Completion'
            hint='Step 2 of 6'
            showPercentage={true}
            labelPosition='outside'
            shape='rounded'
          />
          <Ux4gLinearProgressBar
            value={0.68}
            label='Document Upload'
            showPercentage={true}
            labelPosition='inside'
            height={14}
            shape='rounded'
          />
          <Ux4gLinearProgressBar
            value={0.86}
            label='Loan Eligibility'
            gradientColors={['#DCD4FF', '#4A2BC2']}
            showPercentage={true}
            labelPosition='outside'
            shape='sharp'
          />
          <Ux4gLinearProgressBar
            value={0.22}
            label='Verification Queue'
            hint='Pending'
            showPercentage={false}
            shape='rounded'
          />
        </View>`;
};

export const ProgressIndicatorDoc: React.FC<ProgressIndicatorDocProps> = ({ isDark, story = 'progress-linear' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const activeStory = normalizeStory(story);
  const config = storyMeta[activeStory];
  const codeString = useMemo(() => getStoryCode(activeStory), [activeStory]);

  const renderStoryPreview = () => {
    const snackCodeString = `import React from 'react';
  import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  Ux4gAnimatedCircularProgress,
  Ux4gAnimatedHalfCircleProgress,
  Ux4gCircularProgress,
  Ux4gHalfCircleProgress,
  Ux4gIcons,
  Ux4gLinearProgressBar,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';

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
  stackCentered: {
    gap: 28,
    alignItems: 'center',
  },
  stackFull: {
    gap: 18,
    width: '100%',
  },
  slaContainer: {
    width: '100%',
    gap: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  slaCircularRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slaLinearRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slaCol: {
    width: '48%',
    gap: 14,
  },
  colTitle: {
    color: '#6B7280',
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gProgress%20Indicator%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.2,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '680px', border: 'none', borderRadius: '8px' }}
        title='Expo Snack Progress Indicator Preview'
      />
    );
  };

  const propsData = [
    { name: 'value', type: 'number', default: 'required', desc: 'Progress value from 0.0 to 1.0.', required: true },
    { name: 'shape', type: "'sharp' | 'rounded'", default: "'rounded'", desc: 'Linear progress corner shape parity with Flutter.', required: false },
    { name: 'showScale', type: 'boolean', default: 'false', desc: 'Shows 0% and 100% scale labels on half-circle indicators.', required: false },
    { name: 'strokeCap', type: "'butt' | 'round'", default: 'component-specific', desc: 'Arc endpoint style for circular and half-circle indicators.', required: false },
    { name: 'startAngle', type: 'number', default: '-90', desc: 'Start angle for circular progress arc.', required: false },
    { name: 'gradientColors', type: 'string[]', default: 'theme-based', desc: 'Gradient colors for progress fill.', required: false },
    { name: 'progressColor / color', type: 'string', default: 'theme primary', desc: 'Solid progress color override.', required: false },
    { name: 'trackColor', type: 'string', default: 'theme-based', desc: 'Background track color.', required: false },
    { name: 'size', type: 'variant string', default: 'component-specific', desc: 'Preset size token for circular and half-circle indicators.', required: false },
    { name: 'strokeWidth', type: 'number', default: 'auto', desc: 'Stroke thickness for circular and half-circle indicators.', required: false },
    { name: 'label / hint / description', type: 'string', default: 'undefined', desc: 'Supporting text fields depending on indicator type.', required: false },
    { name: 'showPercentage / labelPosition', type: 'boolean / enum', default: 'false / outside', desc: 'Linear progress percentage visibility and placement.', required: false },
    { name: 'duration', type: 'number', default: '700', desc: 'Animation duration for animated progress components.', required: false },
    { name: 'testID', type: 'string', default: 'undefined', desc: 'Test identifier for automation.', required: false },
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
                <CodeBlock code={codeString} language='TSX' filename='ProgressIndicatorExample.tsx' />
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

export default ProgressIndicatorDoc;