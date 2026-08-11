import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface TagDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

const STORY_IDS = [
  'tag-basic',
  'tag-shapes',
  'tag-styles',
  'tag-colors',
  'tag-leading',
  'tag-dismissable',
  'tag-pill',
] as const;

type TagStory = (typeof STORY_IDS)[number];

const normalizeStory = (story?: string): TagStory => {
  return STORY_IDS.includes(story as TagStory) ? (story as TagStory) : 'tag-basic';
};

const storyMeta: Record<TagStory, { title: string; description: string }> = {
  'tag-basic': {
    title: 'Tag — Basic',
    description: 'Default tonal pill tags in small (m) and large (l) sizes.',
  },
  'tag-shapes': {
    title: 'Tag — Shapes',
    description: 'Circular (pill) and rectangular (4px radius) shapes.',
  },
  'tag-styles': {
    title: 'Tag — Styles',
    description: 'Tonal, filled, outline, and text visual styles.',
  },
  'tag-colors': {
    title: 'Tag — Color Schemes',
    description: 'Neutral, brand, success, warning, error, and info palettes.',
  },
  'tag-leading': {
    title: 'Tag — Leading Content',
    description: 'Custom icon or widget rendered before the tag label.',
  },
  'tag-dismissable': {
    title: 'Tag — Dismissible',
    description: 'Tags with a trailing close icon and onDismiss callback.',
  },
  'tag-pill': {
    title: 'Unified Pill Tag',
    description: 'Multi-segment pill tag with vertical dividers between segments.',
  },
};

const renderTag = (text: string, props: string): string => {
  return `        <View style={styles.tagRow}>
          <Ux4gTag text='${text}'${props} />
        </View>`;
};

const getStoryCode = (story: TagStory): string => {
  switch (story) {
    case 'tag-shapes':
      return `import React from 'react';
import { View } from 'react-native';
import { Ux4gTag } from 'ux4g-react-native-design-system';

export default function TagShapesExample() {
  return (
    <View>
${renderTag('Circular', " shape='circular' colorScheme='brand'")}
${renderTag('Rectangular', " shape='rectangular' colorScheme='brand'")}
    </View>
  );
}`;
    case 'tag-styles':
      return `import React from 'react';
import { View } from 'react-native';
import { Ux4gTag } from 'ux4g-react-native-design-system';

export default function TagStylesExample() {
  return (
    <View>
${renderTag('Tonal', " style='tonal' colorScheme='brand'")}
${renderTag('Filled', " style='filled' colorScheme='brand'")}
${renderTag('Outline', " style='outline' colorScheme='brand'")}
${renderTag('Text', " style='text' colorScheme='brand'")}
    </View>
  );
}`;
    case 'tag-colors':
      return `import React from 'react';
import { View } from 'react-native';
import { Ux4gTag } from 'ux4g-react-native-design-system';

export default function TagColorsExample() {
  return (
    <View>
${renderTag('Neutral', " colorScheme='neutral'")}
${renderTag('Brand', " colorScheme='brand'")}
${renderTag('Success', " colorScheme='success'")}
${renderTag('Warning', " colorScheme='warning'")}
${renderTag('Error', " colorScheme='error'")}
${renderTag('Info', " colorScheme='info'")}
    </View>
  );
}`;
    case 'tag-leading':
      return `import React from 'react';
import { View } from 'react-native';
import { Ux4gTag, Ux4gIcons } from 'ux4g-react-native-design-system';

export default function TagLeadingExample() {
  return (
    <View>
${renderTag('With Icon', " colorScheme='brand' leadingContent={Ux4gIcons.star({ size: 12, color: '#7B61FF' })}")}
${renderTag('With Check', " colorScheme='success' leadingContent={Ux4gIcons.check({ size: 12, color: '#16A34A' })}")}
    </View>
  );
}`;
    case 'tag-dismissable':
      return `import React from 'react';
import { View } from 'react-native';
import { Ux4gTag } from 'ux4g-react-native-design-system';

export default function TagDismissableExample() {
  return (
    <View>
${renderTag('Dismissible Brand', " colorScheme='brand' onDismiss={() => console.log('dismissed')}")}
${renderTag('Dismissible Success', " colorScheme='success' onDismiss={() => console.log('dismissed')}")}
    </View>
  );
}`;
    case 'tag-pill':
      return `import React from 'react';
import { View } from 'react-native';
import { Ux4gUnifiedPillTag } from 'ux4g-react-native-design-system';

export default function TagPillExample() {
  return (
    <View>
      <Ux4gUnifiedPillTag
        segments={[
          { text: 'Pending', bold: true, textColor: '#EA580C' },
          { text: '2 days remaining' },
          { text: 'Action needed' },
        ]}
      />
    </View>
  );
}`;
    default:
      return `import React from 'react';
import { View } from 'react-native';
import { Ux4gTag } from 'ux4g-react-native-design-system';

export default function TagBasicExample() {
  return (
    <View>
${renderTag('Small Tag', " size='m' colorScheme='neutral'")}
${renderTag('Large Tag', " size='l' colorScheme='brand'")}
${renderTag('Default', " colorScheme='success'")}
    </View>
  );
}`;
  }
};

const getSnackFields = (story: TagStory): string => {
  switch (story) {
    case 'tag-shapes':
      return `${renderTag('Circular', " shape='circular' colorScheme='brand'")}
${renderTag('Rectangular', " shape='rectangular' colorScheme='brand'")}`;
    case 'tag-styles':
      return `${renderTag('Tonal', " style='tonal' colorScheme='brand'")}
${renderTag('Filled', " style='filled' colorScheme='brand'")}
${renderTag('Outline', " style='outline' colorScheme='brand'")}
${renderTag('Text', " style='text' colorScheme='brand'")}`;
    case 'tag-colors':
      return `${renderTag('Neutral', " colorScheme='neutral'")}
${renderTag('Brand', " colorScheme='brand'")}
${renderTag('Success', " colorScheme='success'")}
${renderTag('Warning', " colorScheme='warning'")}
${renderTag('Error', " colorScheme='error'")}
${renderTag('Info', " colorScheme='info'")}`;
    case 'tag-leading':
      return `        <View style={styles.tagRow}>
          <Ux4gTag
            text='With Icon'
            colorScheme='brand'
            leadingContent={Ux4gIcons.star({ size: 12, color: '#7B61FF' })}
          />
        </View>
        <View style={styles.tagRow}>
          <Ux4gTag
            text='With Check'
            colorScheme='success'
            leadingContent={Ux4gIcons.check({ size: 12, color: '#16A34A' })}
          />
        </View>`;
    case 'tag-dismissable':
      return `        <View style={styles.tagRow}>
          <Ux4gTag text='Dismissible Brand' colorScheme='brand' onDismiss={() => console.log('dismissed')} />
        </View>
        <View style={styles.tagRow}>
          <Ux4gTag text='Dismissible Success' colorScheme='success' onDismiss={() => console.log('dismissed')} />
        </View>`;
    case 'tag-pill':
      return `        <View style={styles.tagRow}>
          <Ux4gUnifiedPillTag
            segments={[
              { text: 'Pending', bold: true, textColor: '#EA580C' },
              { text: '2 days remaining' },
              { text: 'Action needed' },
            ]}
          />
        </View>`;
    default:
      return `${renderTag('Small Tag', " size='m' colorScheme='neutral'")}
${renderTag('Large Tag', " size='l' colorScheme='brand'")}
${renderTag('Default', " colorScheme='success'")}`;
  }
};

export const TagDoc: React.FC<TagDocProps> = ({ isDark, story = 'tag-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const activeStory = normalizeStory(story);
  const config = storyMeta[activeStory];
  const codeString = useMemo(() => getStoryCode(activeStory), [activeStory]);

  const renderStoryPreview = () => {
    const needsIcons = activeStory === 'tag-leading';
    const snackCodeString = `import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gTag, Ux4gUnifiedPillTag${needsIcons ? ', Ux4gIcons' : ''}, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

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
  tagRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gTag%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '680px', border: 'none', borderRadius: '8px' }}
        title='Expo Snack Tag Preview'
      />
    );
  };

  const tagPropsData = [
    { name: 'text', type: 'string', default: 'required', desc: 'Text displayed inside the tag label.', required: true },
    { name: 'size', type: "'m' | 'l' | 'medium' | 'large'", default: "'m'", desc: 'Size of the tag (m = 20px height, l = 24px height).', required: false },
    { name: 'shape', type: "'circular' | 'rectangular'", default: "'circular'", desc: 'Pill (999px) vs rectangular (4px) border radius.', required: false },
    { name: 'style', type: "'tonal' | 'filled' | 'outline' | 'text'", default: "'tonal'", desc: 'Visual style of the tag.', required: false },
    { name: 'colorScheme', type: "'neutral' | 'brand' | 'success' | 'warning' | 'error' | 'info'", default: "'neutral'", desc: 'Color palette from the design foundation tokens.', required: false },
    { name: 'leadingContent', type: 'React.ReactNode', default: 'undefined', desc: 'Custom widget/icon rendered before the text label.', required: false },
    { name: 'onDismiss', type: '() => void', default: 'undefined', desc: 'Dismiss callback; renders a trailing close (x) icon.', required: false },
    { name: 'customBackgroundColor', type: 'string', default: 'style-based', desc: 'Custom background color override.', required: false },
    { name: 'customContentColor', type: 'string', default: 'style-based', desc: 'Custom content/text color override.', required: false },
    { name: 'customBorderColor', type: 'string', default: 'style-based', desc: 'Custom border color override.', required: false },
    { name: 'customBorderRadius', type: 'number', default: 'shape-based', desc: 'Custom border radius override in pixels.', required: false },
    { name: 'containerStyle', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Custom container style override.', required: false },
    { name: 'textStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Custom text style override.', required: false },
    { name: 'testID', type: 'string', default: 'undefined', desc: 'Test identifier for automation.', required: false },
  ];

  const pillPropsData = [
    { name: 'segments', type: 'Ux4gPillSegment[]', default: 'required', desc: 'Segments (text, leading, textColor, bold) separated by dividers.', required: true },
    { name: 'backgroundColor', type: 'string', default: 'theme surface', desc: 'Background color override.', required: false },
    { name: 'borderColor', type: 'string', default: 'onSurface @ 12%', desc: 'Border color override.', required: false },
    { name: 'dividerColor', type: 'string', default: 'onSurface @ 15%', desc: 'Segment divider color override.', required: false },
    { name: 'height', type: 'number', default: '24', desc: 'Pill height.', required: false },
    { name: 'containerStyle', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Container style override.', required: false },
    { name: 'testID', type: 'string', default: 'undefined', desc: 'Test identifier for automation.', required: false },
  ];

  const isPill = activeStory === 'tag-pill';

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
                <CodeBlock code={codeString} language='TSX' filename={isPill ? 'UnifiedPillTagExample.tsx' : 'TagExample.tsx'} />
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
                    {(isPill ? pillPropsData : tagPropsData).map((p) => (
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

export default TagDoc;