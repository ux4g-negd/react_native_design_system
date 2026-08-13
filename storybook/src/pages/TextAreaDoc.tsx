import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface TextAreaDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

const STORY_IDS = [
  'textarea-basic',
  'textarea-label',
  'textarea-status',
  'textarea-count',
  'textarea-disabled',
] as const;

type TextAreaStory = (typeof STORY_IDS)[number];

const normalizeStory = (story?: string): TextAreaStory => {
  return STORY_IDS.includes(story as TextAreaStory) ? (story as TextAreaStory) : 'textarea-basic';
};

const storyMeta: Record<TextAreaStory, { title: string; description: string }> = {
  'textarea-basic': {
    title: 'Text Area — Basic',
    description: 'Multiline text areas with size and min-height variants.',
  },
  'textarea-label': {
    title: 'Text Area — Label',
    description: 'Top label, required asterisk, and trailing icon.',
  },
  'textarea-status': {
    title: 'Text Area — Validation Status',
    description: 'Error, warning, and success statuses with caption icons.',
  },
  'textarea-count': {
    title: 'Text Area — Character Count',
    description: 'maxLength with automatic character counter.',
  },
  'textarea-disabled': {
    title: 'Text Area — Disabled & Read Only',
    description: 'Non-interactive and read-only text areas.',
  },
};

const exampleComponent = (name: string, body: string): string => {
  return `const ${name} = () => {
  const [value, setValue] = React.useState('');
  return (
    <View style={styles.row}>
      <Ux4gTextArea
        value={value}
        onValueChange={setValue}
${body}
      />
    </View>
  );
};`;
};

const getExampleComponents = (story: TextAreaStory): string => {
  switch (story) {
    case 'textarea-label':
      return `${exampleComponent(
        'BasicExample',
        `        label='Address'
        placeholder='Enter your full address'`
      )}
${exampleComponent(
  'RequiredExample',
  `        label='Feedback'
        required
        placeholder='Tell us what you think'`
)}
${exampleComponent(
  'TrailingExample',
  `        label='Tags'
        trailingIconLabel={Ux4gIcons.info({ size: 14, color: '#94A3B8' })}
        placeholder='Enter comma separated tags'`
)}`;
    case 'textarea-status':
      return `${exampleComponent(
        'ErrorExample',
        `        label='PAN Number'
        status='error'
        caption='PAN format is invalid. Example: ABCDE1234F'
        placeholder='Enter PAN number'`
      )}
${exampleComponent(
  'WarningExample',
  `        label='Remarks'
        status='warning'
        caption='Only 10 characters left before the limit'
        placeholder='Add remarks'`
)}
${exampleComponent(
  'SuccessExample',
  `        label='About'
        status='success'
        caption='Looks good'
        placeholder='Tell us about yourself'`
)}`;
    case 'textarea-count':
      return `${exampleComponent(
        'CountExample',
        `        label='Bio'
        maxLength={500}
        placeholder='Write something about yourself'`
      )}
${exampleComponent(
  'CustomCountExample',
  `        label='Words'
        characterCountText='0/50 words'
        maxLength={50}
        placeholder='Type here'`
)}`;
    case 'textarea-disabled':
      return `${exampleComponent(
        'DisabledExample',
        `        label='Not Allowed'
        enabled={false}
        value='This field is disabled'
        caption='Disabled fields cannot be edited'`
      )}
${exampleComponent(
  'ReadOnlyExample',
  `        label='Read Only'
        readOnly
        value='This field is read only. You cannot modify this text.'
        caption='Read-only fields display text without editing'`
)}`;
    default:
      return `${exampleComponent(
        'LargeExample',
        `        size='large'
        placeholder='Large size (16px padding)'`
      )}
${exampleComponent(
  'SmallExample',
  `        size='small'
        placeholder='Small size (12px padding)'`
)}
${exampleComponent(
  'MinHeightExample',
  `        minHeight='small'
        placeholder='Small min height (80px)'`
)}`;
  }
};

const getStoryCode = (story: TextAreaStory): string => {
  return `import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gTextArea${story === 'textarea-label' ? ', Ux4gIcons' : ''} } from 'ux4g-react-native-design-system';

${getExampleComponents(story)}

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
${(() => {
  const names: Record<TextAreaStory, string[]> = {
    'textarea-basic': ['LargeExample', 'SmallExample', 'MinHeightExample'],
    'textarea-label': ['BasicExample', 'RequiredExample', 'TrailingExample'],
    'textarea-status': ['ErrorExample', 'WarningExample', 'SuccessExample'],
    'textarea-count': ['CountExample', 'CustomCountExample'],
    'textarea-disabled': ['DisabledExample', 'ReadOnlyExample'],
  };
  return names[story].map((n) => `      <${n} />`).join('\n');
})()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  row: {
    marginBottom: 20,
  },
});`;
};

const getSnackBody = (story: TextAreaStory): string => {
  const names: Record<TextAreaStory, string[]> = {
    'textarea-basic': ['LargeExample', 'SmallExample', 'MinHeightExample'],
    'textarea-label': ['BasicExample', 'RequiredExample', 'TrailingExample'],
    'textarea-status': ['ErrorExample', 'WarningExample', 'SuccessExample'],
    'textarea-count': ['CountExample', 'CustomCountExample'],
    'textarea-disabled': ['DisabledExample', 'ReadOnlyExample'],
  };
  return names[story].map((n) => `          <${n} />`).join('\n');
};

export const TextAreaDoc: React.FC<TextAreaDocProps> = ({ isDark, story = 'textarea-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const activeStory = normalizeStory(story);
  const config = storyMeta[activeStory];
  const codeString = useMemo(() => getStoryCode(activeStory), [activeStory]);

  const renderStoryPreview = () => {
    const snackCodeString = `import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gTextArea${activeStory === 'textarea-label' ? ', Ux4gIcons' : ''}, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

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
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  row: {
    marginBottom: 20,
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gTextArea%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '680px', border: 'none', borderRadius: '8px' }}
        title='Expo Snack TextArea Preview'
      />
    );
  };

  const textAreaPropsData = [
    { name: 'value', type: 'string', default: 'required', desc: 'Current text string inside the text area.', required: true },
    { name: 'onValueChange', type: '(value: string) => void', default: 'required', desc: 'Callback invoked when text changes.', required: true },
    { name: 'size', type: "'small' | 'large'", default: "'large'", desc: 'Padding sizing (small = 12px, large = 16px).', required: false },
    { name: 'minHeight', type: "'small' | 'medium' | 'large' | number", default: "'medium'", desc: 'Min height token (80/120/160px) or exact number.', required: false },
    { name: 'status', type: "'defaultStatus' | 'error' | 'warning' | 'success'", default: "'defaultStatus'", desc: 'Semantic validation status.', required: false },
    { name: 'label', type: 'string', default: 'undefined', desc: 'Optional top label above the text area.', required: false },
    { name: 'required', type: 'boolean', default: 'false', desc: 'Shows a red asterisk next to the label.', required: false },
    { name: 'placeholder', type: 'string', default: 'undefined', desc: 'Hint text displayed when empty.', required: false },
    { name: 'caption', type: 'string', default: 'undefined', desc: 'Helper or status caption below the text area.', required: false },
    { name: 'showCaptionIcon', type: 'boolean', default: 'true', desc: 'Show semantic status icon next to the caption.', required: false },
    { name: 'trailingIconLabel', type: 'React.ReactNode', default: 'undefined', desc: 'Trailing icon/node next to the label.', required: false },
    { name: 'characterCountText', type: 'string', default: 'undefined', desc: 'Custom character count text override.', required: false },
    { name: 'enabled', type: 'boolean', default: 'true', desc: 'Whether the text area is interactive.', required: false },
    { name: 'readOnly', type: 'boolean', default: 'false', desc: 'Whether the text area is read-only.', required: false },
    { name: 'maxLength', type: 'number', default: 'undefined', desc: 'Maximum character length limit.', required: false },
    { name: 'style', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Custom inner TextInput style.', required: false },
    { name: 'containerStyle', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Custom outer container style.', required: false },
    { name: 'labelStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Custom label style.', required: false },
    { name: 'captionStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Custom caption style.', required: false },
    { name: 'placeholderTextColor', type: 'string', default: 'onSurface @ 40%', desc: 'Custom placeholder color.', required: false },
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
                <CodeBlock code={codeString} language='TSX' filename='TextAreaExample.tsx' />
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
                    {textAreaPropsData.map((p) => (
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

export default TextAreaDoc;