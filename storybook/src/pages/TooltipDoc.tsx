import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface TooltipDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

const STORY_IDS = [
  'tooltip-introduction',
  'tooltip-basic',
  'tooltip-interactive',
  'tooltip-variants',
  'tooltip-rich',
] as const;

type TooltipStory = (typeof STORY_IDS)[number];

const normalizeStory = (story?: string): TooltipStory => {
  return STORY_IDS.includes(story as TooltipStory) ? (story as TooltipStory) : 'tooltip-introduction';
};

const storyMeta: Record<TooltipStory, { title: string; description: string }> = {
  'tooltip-introduction': {
    title: 'Tooltip — Introduction',
    description: 'A small, contextual popup that appears when you tap or long-press a UI element, providing quick explanatory text without permanently cluttering the screen.',
  },
  'tooltip-basic': {
    title: 'Tooltip — Placements',
    description: 'Top, bottom, left, and right placement of the tooltip relative to the target element.',
  },
  'tooltip-interactive': {
    title: 'Tooltip — Interactive',
    description: 'Tooltip with optional title, leading icon, and configurable placement, colors, and trigger.',
  },
  'tooltip-variants': {
    title: 'Tooltip — All Variants',
    description: 'Visual reference for all directional placements and alignments (topStart, top, topEnd, ...).',
  },
  'tooltip-rich': {
    title: 'Rich Tooltip',
    description: 'Rich tooltip with a title, icon, and optional action button. Rich tooltips are persistent by default.',
  },
};

const getStoryCode = (story: TooltipStory): string => {
  switch (story) {
    case 'tooltip-basic':
      return `import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gTooltip } from 'ux4g-react-native-design-system';

const PlacementExample = () => {
  return (
    <View style={styles.grid}>
      <Ux4gTooltip text='Top Tooltip' placement='top' trigger='press'>
        <View style={styles.anchor}>
          <Text style={styles.anchorText}>Top</Text>
        </View>
      </Ux4gTooltip>
      <Ux4gTooltip text='Bottom Tooltip' placement='bottom' trigger='press'>
        <View style={styles.anchor}>
          <Text style={styles.anchorText}>Bottom</Text>
        </View>
      </Ux4gTooltip>
      <Ux4gTooltip text='Left Tooltip' placement='left' trigger='press'>
        <View style={styles.anchor}>
          <Text style={styles.anchorText}>Left</Text>
        </View>
      </Ux4gTooltip>
      <Ux4gTooltip text='Right Tooltip' placement='right' trigger='press'>
        <View style={styles.anchor}>
          <Text style={styles.anchorText}>Right</Text>
        </View>
      </Ux4gTooltip>
    </View>
  );
};

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PlacementExample />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    minHeight: '100%',
    justifyContent: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 24,
  },
});`;
    case 'tooltip-interactive':
      return `import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gTooltip, Ux4gIcons } from 'ux4g-react-native-design-system';

const InteractiveExample = () => {
  return (
    <View style={styles.wrap}>
      <Ux4gTooltip
        text='Interactive Tooltip'
        title='Information'
        icon={<Ux4gIcons.info size={16} color='#FAFAFA' />}
        placement='top'
        trigger='press'
        backgroundColor='#404040'
        contentColor='#FAFAFA'
        cornerRadius={4}
        arrowWidth={10}
        arrowHeight={6}
      >
        <View style={styles.anchor}>
          <Text style={styles.anchorText}>Long Press / Tap Me</Text>
        </View>
      </Ux4gTooltip>
    </View>
  );
};

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <InteractiveExample />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    minHeight: '100%',
    justifyContent: 'center',
  },
  wrap: {
    alignItems: 'center',
  },
});`;
    case 'tooltip-variants':
      return `import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gTooltip } from 'ux4g-react-native-design-system';

const placements = [
  'topStart', 'top', 'topEnd',
  'bottomStart', 'bottom', 'bottomEnd',
  'leftStart', 'left', 'leftEnd',
  'rightStart', 'right', 'rightEnd',
];

const VariantsExample = () => {
  return (
    <View style={styles.grid}>
      {placements.map((placement) => (
        <Ux4gTooltip
          key={placement}
          text='Tooltip'
          placement={placement}
          trigger='press'
        >
          <View style={styles.anchor}>
            <Text style={styles.anchorText}>{placement}</Text>
          </View>
        </Ux4gTooltip>
      ))}
    </View>
  );
};

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <VariantsExample />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    minHeight: '100%',
    justifyContent: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 24,
  },
  anchor: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 4,
  },
  anchorText: {
    fontSize: 13,
    color: '#374151',
  },
});`;
    case 'tooltip-rich':
      return `import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gRichTooltip, Ux4gIcons } from 'ux4g-react-native-design-system';

const RichExample = () => {
  return (
    <View style={styles.wrap}>
      <Ux4gRichTooltip
        text='This is a rich tooltip with a title, icon, and action.'
        title='More Info'
        icon={<Ux4gIcons.info size={16} color='#FAFAFA' />}
        placement='bottom'
        trigger='press'
        action={
          <Pressable onPress={() => {}}>
            <Text style={styles.action}>Learn more</Text>
          </Pressable>
        }
      >
        <View style={styles.anchor}>
          <Text style={styles.anchorText}>?</Text>
        </View>
      </Ux4gRichTooltip>
    </View>
  );
};

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RichExample />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    minHeight: '100%',
    justifyContent: 'center',
  },
  wrap: {
    alignItems: 'center',
  },
  anchor: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#9CA3AF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  anchorText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
  },
  action: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1D4ED8',
  },
});`;
    default:
      return `import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gTooltip } from 'ux4g-react-native-design-system';

const rows = [
  ['Top', 'top', 'Above the target, center aligned'],
  ['Bottom', 'bottom', 'Below the target, center aligned'],
  ['Left', 'left', 'To the left of the target'],
  ['Right', 'right', 'To the right of the target'],
];

const IntroductionExample = () => {
  return (
    <View>
      {rows.map(([label, placement, hint]) => (
        <View key={label} style={styles.row}>
          <Text style={styles.hint}>{hint}</Text>
          <Ux4gTooltip text={label + ' Tooltip'} placement={placement} trigger='press'>
            <View style={styles.anchor}>
              <Text style={styles.anchorText}>{label}</Text>
            </View>
          </Ux4gTooltip>
        </View>
      ))}
    </View>
  );
};

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <IntroductionExample />
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
    marginBottom: 32,
    alignItems: 'center',
  },
  hint: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 8,
  },
  anchor: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 6,
    backgroundColor: '#F3F4F6',
  },
  anchorText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#374151',
  },
});`;
  }
};

export const TooltipDoc: React.FC<TooltipDocProps> = ({ isDark, story = 'tooltip-introduction' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const activeStory = normalizeStory(story);
  const config = storyMeta[activeStory];
  const codeString = useMemo(() => getStoryCode(activeStory), [activeStory]);

  const renderStoryPreview = () => {
    const exampleCode = getStoryCode(activeStory)
      .split('\nexport default function App')[0]
      .replace(/^import React from 'react';\nimport .*?from 'react-native';\nimport .*?from 'ux4g-react-native-design-system';\n\n/, '')
      .trim();

    const snackCodeString = `import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gTooltip, Ux4gRichTooltip, Ux4gIcons, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

${exampleCode}

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <ScrollView contentContainerStyle={styles.container}>
        ${(() => {
          const names: Record<TooltipStory, string> = {
            'tooltip-introduction': '<IntroductionExample />',
            'tooltip-basic': '<PlacementExample />',
            'tooltip-interactive': '<InteractiveExample />',
            'tooltip-variants': '<VariantsExample />',
            'tooltip-rich': '<RichExample />',
          };
          return names[activeStory];
        })()}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    minHeight: '100%',
    justifyContent: 'center',
  },
  row: {
    marginBottom: 32,
    alignItems: 'center',
  },
  hint: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 8,
  },
  wrap: {
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 24,
  },
  anchor: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 4,
    backgroundColor: '#F3F4F6',
  },
  anchorText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#374151',
  },
  action: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1D4ED8',
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gTooltip%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '680px', border: 'none', borderRadius: '8px' }}
        title='Expo Snack Tooltip Preview'
      />
    );
  };

  const tooltipPropsData = [
    { name: 'children', type: 'ReactNode', default: '—', desc: 'The anchor element that triggers the tooltip (button, icon, etc.).', required: true },
    { name: 'text', type: 'string', default: 'undefined', desc: 'Tooltip body text.', required: false },
    { name: 'title', type: 'string', default: 'undefined', desc: 'Optional title; when set, the tooltip renders the rich layout and becomes persistent.', required: false },
    { name: 'icon', type: 'ReactNode', default: 'undefined', desc: 'Optional leading icon next to the title or text.', required: false },
    { name: 'placement', type: "'topStart' | 'top' | 'topEnd' | 'bottomStart' | 'bottom' | 'bottomEnd' | 'leftStart' | 'left' | 'leftEnd' | 'rightStart' | 'right' | 'rightEnd'", default: "'top'", desc: 'Placement of the tooltip relative to the target.', required: false },
    { name: 'trigger', type: "'press' | 'longPress'", default: "'longPress'", desc: 'Gesture that opens the tooltip.', required: false },
    { name: 'backgroundColor', type: 'string', default: 'neutral700 (light) / neutral300 (dark)', desc: 'Tooltip bubble background color.', required: false },
    { name: 'contentColor', type: 'string', default: 'neutral50 (light) / neutral900 (dark)', desc: 'Tooltip text and icon color.', required: false },
    { name: 'textStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Custom typography style for the body text.', required: false },
    { name: 'cornerRadius', type: 'number', default: '4', desc: 'Border radius of the tooltip bubble.', required: false },
    { name: 'arrowWidth', type: 'number', default: '10', desc: 'Width of the caret/arrow.', required: false },
    { name: 'arrowHeight', type: 'number', default: '6', desc: 'Height of the caret/arrow.', required: false },
    { name: 'isPersistent', type: 'boolean', default: 'false', desc: 'If true, the tooltip does not auto-dismiss after 2s.', required: false },
    { name: 'action', type: 'ReactNode', default: 'undefined', desc: 'Optional action element rendered at the bottom (rich tooltip).', required: false },
    { name: 'customContent', type: 'ReactNode', default: 'undefined', desc: 'Fully custom tooltip body replacing the default layout.', required: false },
    { name: 'maxWidth', type: 'number', default: '240', desc: 'Maximum width of the tooltip bubble.', required: false },
    { name: 'autoShow', type: 'boolean', default: 'false', desc: 'Automatically opens the tooltip once when the anchor layout completes.', required: false },
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
                <CodeBlock code={codeString} language='TSX' filename='TooltipExample.tsx' />
              </div>
            )}

            {activeMainTab === 'props' && (
              <div className='wb-props-area'>
                <h3 className='props-section-title'>Ux4gTooltip / Ux4gRichTooltip Props</h3>
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
                    {tooltipPropsData.map((p) => (
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
                <p className='props-note'>
                  <strong>Ux4gRichTooltip</strong> is the same component with <code>isPersistent={'{true}'}</code> forced, so rich tooltips with title/icon/action never auto-dismiss.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TooltipDoc;