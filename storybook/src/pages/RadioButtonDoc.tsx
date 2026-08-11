import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface RadioButtonDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';
type RadioStory = 'radio-basic' | 'radio-sizes' | 'radio-status';

const normalizeStory = (story?: string): RadioStory => {
  if (story === 'radio' || story === 'radio-button') return 'radio-basic';
  const allowed: RadioStory[] = ['radio-basic', 'radio-sizes', 'radio-status'];
  return allowed.includes(story as RadioStory) ? (story as RadioStory) : 'radio-basic';
};

const storyMeta: Record<RadioStory, { title: string; description: string }> = {
  'radio-basic': {
    title: 'Radio Button',
    description: 'Single-choice selection control with label, helper text, required marker, and disabled states.',
  },
  'radio-sizes': {
    title: 'Radio Button',
    description: 'Size variants for compact to prominent radio controls in form layouts.',
  },
  'radio-status': {
    title: 'Radio Button',
    description: 'Validation-focused status styles with semantic ring and description variants.',
  },
};

const getStoryCode = (story: RadioStory): string => {
  if (story === 'radio-sizes') {
    return `import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gRadioButton } from 'ux4g-react-native-design-system';

export default function RadioButtonSizesExample() {
  const [sizeChoice, setSizeChoice] = useState('medium');

  return (
    <View style={{ gap: 14, width: '100%' }}>
      <Ux4gRadioButton value='small' groupValue={sizeChoice} onChanged={setSizeChoice} size='small' label='Small Radio (16pt)' description='Compact control' />
      <Ux4gRadioButton value='medium' groupValue={sizeChoice} onChanged={setSizeChoice} size='medium' label='Medium Radio (20pt)' description='Default size' />
      <Ux4gRadioButton value='large' groupValue={sizeChoice} onChanged={setSizeChoice} size='large' label='Large Radio (24pt)' description='High emphasis selection' />
    </View>
  );
}`;
  }

  if (story === 'radio-status') {
    return `import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gRadioButton } from 'ux4g-react-native-design-system';

export default function RadioButtonStatusExample() {
  const [statusChoice, setStatusChoice] = useState('defaultStatus');

  return (
    <View style={{ gap: 14, width: '100%' }}>
      <Ux4gRadioButton value='defaultStatus' groupValue={statusChoice} onChanged={setStatusChoice} label='Default State' description='Standard helper variant' descriptionVariant='helper' status='defaultStatus' />
      <Ux4gRadioButton value='error' groupValue={statusChoice} onChanged={setStatusChoice} label='Error State' description='Please correct this selection' descriptionVariant='error' status='error' />
      <Ux4gRadioButton value='warning' groupValue={statusChoice} onChanged={setStatusChoice} label='Warning State' description='Review this choice carefully' descriptionVariant='warning' status='warning' />
      <Ux4gRadioButton value='success' groupValue={statusChoice} onChanged={setStatusChoice} label='Success State' description='Selection looks good' descriptionVariant='success' status='success' />
    </View>
  );
}`;
  }

  return `import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gRadioButton } from 'ux4g-react-native-design-system';

export default function RadioButtonBasicExample() {
  const [groupValue, setGroupValue] = useState('option-a');

  return (
    <View style={{ gap: 14, width: '100%' }}>
      <Ux4gRadioButton value='option-a' groupValue={groupValue} onChanged={setGroupValue} label='Option A' description='Primary choice for this field' />
      <Ux4gRadioButton value='option-b' groupValue={groupValue} onChanged={setGroupValue} label='Option B' description='Secondary choice for this field' />
      <Ux4gRadioButton value='option-c' groupValue={groupValue} onChanged={setGroupValue} label='Required Option' description='Marked as mandatory input' isRequired={true} />
      <Ux4gRadioButton value='option-d' groupValue={groupValue} label='Disabled Option' description='Unavailable in current context' enabled={false} />
    </View>
  );
}`;
};

const getSnackFields = (story: RadioStory): string => {
  if (story === 'radio-sizes') {
    return `        <View style={styles.stackFull}>
          <Ux4gRadioButton value='small' groupValue={sizeChoice} onChanged={setSizeChoice} size='small' label='Small Radio (16pt)' description='Compact control' />
          <Ux4gRadioButton value='medium' groupValue={sizeChoice} onChanged={setSizeChoice} size='medium' label='Medium Radio (20pt)' description='Default size' />
          <Ux4gRadioButton value='large' groupValue={sizeChoice} onChanged={setSizeChoice} size='large' label='Large Radio (24pt)' description='High emphasis selection' />
        </View>`;
  }

  if (story === 'radio-status') {
    return `        <View style={styles.stackFull}>
          <Ux4gRadioButton value='defaultStatus' groupValue={statusChoice} onChanged={setStatusChoice} label='Default State' description='Standard helper variant' descriptionVariant='helper' status='defaultStatus' />
          <Ux4gRadioButton value='error' groupValue={statusChoice} onChanged={setStatusChoice} label='Error State' description='Please correct this selection' descriptionVariant='error' status='error' />
          <Ux4gRadioButton value='warning' groupValue={statusChoice} onChanged={setStatusChoice} label='Warning State' description='Review this choice carefully' descriptionVariant='warning' status='warning' />
          <Ux4gRadioButton value='success' groupValue={statusChoice} onChanged={setStatusChoice} label='Success State' description='Selection looks good' descriptionVariant='success' status='success' />
        </View>`;
  }

  return `        <View style={styles.stackFull}>
          <Ux4gRadioButton value='option-a' groupValue={groupValue} onChanged={setGroupValue} label='Option A' description='Primary choice for this field' />
          <Ux4gRadioButton value='option-b' groupValue={groupValue} onChanged={setGroupValue} label='Option B' description='Secondary choice for this field' />
          <Ux4gRadioButton value='option-c' groupValue={groupValue} onChanged={setGroupValue} label='Required Option' description='Marked as mandatory input' isRequired={true} />
          <Ux4gRadioButton value='option-d' groupValue={groupValue} label='Disabled Option' description='Unavailable in current context' enabled={false} />
        </View>`;
};

export const RadioButtonDoc: React.FC<RadioButtonDocProps> = ({ isDark, story = 'radio-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const activeStory = normalizeStory(story);
  const config = storyMeta[activeStory];
  const codeString = useMemo(() => getStoryCode(activeStory), [activeStory]);

  const renderStoryPreview = () => {
    const snackCodeString = `import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gRadioButton, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [groupValue, setGroupValue] = useState('option-a');
  const [sizeChoice, setSizeChoice] = useState('medium');
  const [statusChoice, setStatusChoice] = useState('defaultStatus');

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={styles.container}>
${getSnackFields(activeStory)}
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  stackFull: {
    width: '100%',
    gap: 14,
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gRadioButton%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '620px', border: 'none', borderRadius: '8px' }}
        title='Expo Snack Radio Button Preview'
      />
    );
  };

  const propsData = [
    { name: 'value', type: 'T', default: 'required', desc: 'The value represented by this radio option.', required: true },
    { name: 'groupValue', type: 'T | null', default: 'undefined', desc: 'Currently selected value in the radio group.', required: false },
    { name: 'onChanged', type: '(value: T) => void', default: 'undefined', desc: 'Called when this option is selected.', required: false },
    { name: 'label', type: 'string', default: 'undefined', desc: 'Primary label text.', required: false },
    { name: 'description', type: 'string', default: 'undefined', desc: 'Secondary helper or status message.', required: false },
    { name: 'size', type: "'small' | 'medium' | 'large'", default: "'medium'", desc: 'Radio indicator size token.', required: false },
    { name: 'isRequired', type: 'boolean', default: 'false', desc: 'Shows required asterisk on label.', required: false },
    { name: 'descriptionVariant', type: "'helper' | 'error' | 'warning' | 'success'", default: "'helper'", desc: 'Semantic style for description text and icon.', required: false },
    { name: 'status', type: "'defaultStatus' | 'error' | 'warning' | 'success'", default: "'defaultStatus'", desc: 'Visual status for radio ring color.', required: false },
    { name: 'color', type: 'string', default: 'theme.colors.primary', desc: 'Explicit ring color override.', required: false },
    { name: 'labelColor', type: 'string', default: 'theme.colors.onSurface', desc: 'Custom label text color.', required: false },
    { name: 'trailingIcon', type: 'Ux4gIconProp', default: 'undefined', desc: 'Optional trailing icon beside label.', required: false },
    { name: 'enabled', type: 'boolean', default: 'true', desc: 'Whether option is interactive.', required: false },
    { name: 'style', type: 'StyleProp<ViewStyle> | ((state) => StyleProp<ViewStyle>)', default: 'undefined', desc: 'Style override for row Pressable.', required: false },
    { name: 'labelStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Style override for label text.', required: false },
    { name: 'descriptionStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Style override for description text.', required: false },
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
                <CodeBlock code={codeString} language='TSX' filename='RadioButtonExample.tsx' />
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

export default RadioButtonDoc;
