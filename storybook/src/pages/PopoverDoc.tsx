import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface PopoverDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';
type PopoverStory =
  | 'popover-basic'
  | 'popover-rich'
  | 'popover-placements'
  | 'popover-custom-content'
  | 'popover-trigger';

const normalizeStory = (story?: string): PopoverStory => {
  if (story === 'popover' || story === 'tooltip') return 'popover-basic';

  const allowed: PopoverStory[] = [
    'popover-basic',
    'popover-rich',
    'popover-placements',
    'popover-custom-content',
    'popover-trigger',
  ];

  return allowed.includes(story as PopoverStory) ? (story as PopoverStory) : 'popover-basic';
};

const storyMeta: Record<PopoverStory, { title: string; description: string }> = {
  'popover-basic': {
    title: 'Popover',
    description: 'Basic popover built with Ux4gTooltip using text content.',
  },
  'popover-rich': {
    title: 'Popover',
    description: 'Rich popover with title, body, and action area.',
  },
  'popover-placements': {
    title: 'Popover',
    description: 'Placement variants: top, bottom, left, and right.',
  },
  'popover-custom-content': {
    title: 'Popover',
    description: 'Custom content popover using a fully custom React node.',
  },
  'popover-trigger': {
    title: 'Popover',
    description: 'Trigger variants using press and long press interactions.',
  },
};

const getStoryCode = (story: PopoverStory): string => {
  if (story === 'popover-rich') {
    return `import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gButton, Ux4gTooltip } from 'ux4g-react-native-design-system';

export default function PopoverRichExample() {
  return (
    <Ux4gTooltip
      title='Verification Required'
      text='Please verify your mobile number to continue this step.'
      placement='bottom'
      trigger='press'
      action={<Ux4gButton text='Verify Now' size='small' />}
      isPersistent={true}
    >
      <View style={{ paddingHorizontal: 14, paddingVertical: 10, borderRadius: 8, backgroundColor: '#4A2BC2' }}>
        <Text style={{ color: '#FFFFFF', fontWeight: '600' }}>Open Rich Popover</Text>
      </View>
    </Ux4gTooltip>
  );
}`;
  }

  if (story === 'popover-placements') {
    return `import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gTooltip } from 'ux4g-react-native-design-system';

const Anchor = ({ label }: { label: string }) => (
  <View style={{ paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, backgroundColor: '#EEF2FF' }}>
    <Text style={{ color: '#312E81', fontWeight: '600' }}>{label}</Text>
  </View>
);

export default function PopoverPlacementsExample() {
  return (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <Ux4gTooltip text='Top placement' placement='top' trigger='press'>
        <Anchor label='Top' />
      </Ux4gTooltip>
      <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
        <Ux4gTooltip text='Left placement' placement='left' trigger='press'>
          <Anchor label='Left' />
        </Ux4gTooltip>
        <Ux4gTooltip text='Right placement' placement='right' trigger='press'>
          <Anchor label='Right' />
        </Ux4gTooltip>
      </View>
      <Ux4gTooltip text='Bottom placement' placement='bottom' trigger='press'>
        <Anchor label='Bottom' />
      </Ux4gTooltip>
    </View>
  );
}`;
  }

  if (story === 'popover-custom-content') {
    return `import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gTooltip } from 'ux4g-react-native-design-system';

export default function PopoverCustomContentExample() {
  return (
    <Ux4gTooltip
      placement='bottomStart'
      trigger='press'
      isPersistent={true}
      customContent={
        <View style={{ width: 220 }}>
          <Text style={{ fontSize: 14, fontWeight: '700', color: '#FFFFFF' }}>Payment Summary</Text>
          <Text style={{ fontSize: 12, color: '#E5E7EB', marginTop: 6 }}>Subtotal: INR 1499</Text>
          <Text style={{ fontSize: 12, color: '#E5E7EB', marginTop: 2 }}>Tax: INR 270</Text>
          <Text style={{ fontSize: 13, color: '#FFFFFF', marginTop: 10, fontWeight: '600' }}>Total: INR 1769</Text>
        </View>
      }
    >
      <View style={{ paddingHorizontal: 14, paddingVertical: 10, borderRadius: 8, backgroundColor: '#E0E7FF' }}>
        <Text style={{ color: '#312E81', fontWeight: '600' }}>Open Custom Popover</Text>
      </View>
    </Ux4gTooltip>
  );
}`;
  }

  if (story === 'popover-trigger') {
    return `import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gTooltip } from 'ux4g-react-native-design-system';

const TriggerChip = ({ label }: { label: string }) => (
  <View style={{ paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, backgroundColor: '#F3F4F6' }}>
    <Text style={{ color: '#111827', fontWeight: '600' }}>{label}</Text>
  </View>
);

export default function PopoverTriggerExample() {
  return (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <Ux4gTooltip text='Opens on press' trigger='press' placement='top'>
        <TriggerChip label='Press Trigger' />
      </Ux4gTooltip>
      <Ux4gTooltip text='Opens on long press' trigger='longPress' placement='top'>
        <TriggerChip label='Long Press Trigger' />
      </Ux4gTooltip>
    </View>
  );
}`;
  }

  return `import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gTooltip } from 'ux4g-react-native-design-system';

export default function PopoverBasicExample() {
  return (
    <Ux4gTooltip text='This is a basic popover message.' placement='top' trigger='press'>
      <View style={{ paddingHorizontal: 14, paddingVertical: 10, borderRadius: 8, backgroundColor: '#EEF2FF' }}>
        <Text style={{ color: '#312E81', fontWeight: '600' }}>Open Popover</Text>
      </View>
    </Ux4gTooltip>
  );
}`;
};

const getSnackFields = (story: PopoverStory): string => {
  if (story === 'popover-rich') {
    return `        <Ux4gTooltip
          title='Verification Required'
          text='Please verify your mobile number to continue this step.'
          placement='bottom'
          trigger='press'
          action={<Ux4gButton text='Verify Now' size='small' />}
          isPersistent={true}
        >
          <View style={styles.primaryAnchor}>
            <Text style={styles.primaryAnchorText}>Open Rich Popover</Text>
          </View>
        </Ux4gTooltip>`;
  }

  if (story === 'popover-placements') {
    return `        <View style={styles.placementStack}>
          <Ux4gTooltip text='Top placement' placement='top' trigger='press'>
            <View style={styles.neutralAnchor}><Text style={styles.neutralAnchorText}>Top</Text></View>
          </Ux4gTooltip>
          <View style={styles.rowGap}>
            <Ux4gTooltip text='Left placement' placement='left' trigger='press'>
              <View style={styles.neutralAnchor}><Text style={styles.neutralAnchorText}>Left</Text></View>
            </Ux4gTooltip>
            <Ux4gTooltip text='Right placement' placement='right' trigger='press'>
              <View style={styles.neutralAnchor}><Text style={styles.neutralAnchorText}>Right</Text></View>
            </Ux4gTooltip>
          </View>
          <Ux4gTooltip text='Bottom placement' placement='bottom' trigger='press'>
            <View style={styles.neutralAnchor}><Text style={styles.neutralAnchorText}>Bottom</Text></View>
          </Ux4gTooltip>
        </View>`;
  }

  if (story === 'popover-custom-content') {
    return `        <Ux4gTooltip
          placement='bottomStart'
          trigger='press'
          isPersistent={true}
          customContent={
            <View style={{ width: 220 }}>
              <Text style={{ fontSize: 14, fontWeight: '700', color: '#FFFFFF' }}>Payment Summary</Text>
              <Text style={{ fontSize: 12, color: '#E5E7EB', marginTop: 6 }}>Subtotal: INR 1499</Text>
              <Text style={{ fontSize: 12, color: '#E5E7EB', marginTop: 2 }}>Tax: INR 270</Text>
              <Text style={{ fontSize: 13, color: '#FFFFFF', marginTop: 10, fontWeight: '600' }}>Total: INR 1769</Text>
            </View>
          }
        >
          <View style={styles.neutralAnchor}>
            <Text style={styles.neutralAnchorText}>Open Custom Popover</Text>
          </View>
        </Ux4gTooltip>`;
  }

  if (story === 'popover-trigger') {
    return `        <View style={styles.placementStack}>
          <Ux4gTooltip text='Opens on press' trigger='press' placement='top'>
            <View style={styles.grayAnchor}><Text style={styles.grayAnchorText}>Press Trigger</Text></View>
          </Ux4gTooltip>
          <Ux4gTooltip text='Opens on long press' trigger='longPress' placement='top'>
            <View style={styles.grayAnchor}><Text style={styles.grayAnchorText}>Long Press Trigger</Text></View>
          </Ux4gTooltip>
        </View>`;
  }

  return `        <Ux4gTooltip text='This is a basic popover message.' placement='top' trigger='press'>
          <View style={styles.neutralAnchor}>
            <Text style={styles.neutralAnchorText}>Open Popover</Text>
          </View>
        </Ux4gTooltip>`;
};

export const PopoverDoc: React.FC<PopoverDocProps> = ({ isDark, story = 'popover-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const activeStory = normalizeStory(story);
  const config = storyMeta[activeStory];
  const codeString = useMemo(() => getStoryCode(activeStory), [activeStory]);

  const renderStoryPreview = () => {
    const snackCodeString = `import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gButton, Ux4gThemeProvider, Ux4gTooltip } from 'ux4g-react-native-design-system';

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
    alignItems: 'center',
  },
  rowGap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  placementStack: {
    gap: 16,
    alignItems: 'center',
  },
  neutralAnchor: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#EEF2FF',
  },
  neutralAnchorText: {
    color: '#312E81',
    fontWeight: '600',
  },
  primaryAnchor: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#4A2BC2',
  },
  primaryAnchorText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  grayAnchor: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
  },
  grayAnchorText: {
    color: '#111827',
    fontWeight: '600',
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gPopover%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '680px', border: 'none', borderRadius: '8px' }}
        title='Expo Snack Popover Preview'
      />
    );
  };

  const propsData = [
    { name: 'children', type: 'ReactNode', default: 'required', desc: 'Anchor node that triggers the popover.', required: true },
    { name: 'text', type: 'string', default: 'undefined', desc: 'Primary message text.', required: false },
    { name: 'title', type: 'string', default: 'undefined', desc: 'Title text for rich popover.', required: false },
    { name: 'icon', type: 'ReactNode', default: 'undefined', desc: 'Optional icon content before text/title.', required: false },
    { name: 'placement', type: 'Ux4gTooltipPlacement', default: "'top'", desc: 'Placement of popover relative to anchor.', required: false },
    { name: 'trigger', type: "'press' | 'longPress'", default: "'longPress'", desc: 'Interaction used to open popover.', required: false },
    { name: 'isPersistent', type: 'boolean', default: 'false', desc: 'Keeps popover open until dismissed when true.', required: false },
    { name: 'action', type: 'ReactNode', default: 'undefined', desc: 'Action area content for rich popover.', required: false },
    { name: 'customContent', type: 'ReactNode', default: 'undefined', desc: 'Completely custom content replacing default body.', required: false },
    { name: 'backgroundColor', type: 'string', default: 'theme-based', desc: 'Popover background color override.', required: false },
    { name: 'contentColor', type: 'string', default: 'theme-based', desc: 'Text/content color override.', required: false },
    { name: 'textStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Style override for default text.', required: false },
    { name: 'cornerRadius', type: 'number', default: '4', desc: 'Corner radius for popover bubble.', required: false },
    { name: 'arrowWidth', type: 'number', default: '10', desc: 'Arrow width for popover pointer.', required: false },
    { name: 'arrowHeight', type: 'number', default: '6', desc: 'Arrow height for popover pointer.', required: false },
    { name: 'maxWidth', type: 'number', default: '240', desc: 'Maximum width of popover content.', required: false },
    { name: 'autoShow', type: 'boolean', default: 'false', desc: 'Shows popover automatically after mount.', required: false },
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
                <CodeBlock code={codeString} language='TSX' filename='PopoverExample.tsx' />
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

export default PopoverDoc;
