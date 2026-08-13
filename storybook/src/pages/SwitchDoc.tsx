import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface SwitchDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

const STORY_IDS = [
  'switch-basic',
  'switch-labels',
  'switch-status',
  'switch-required',
  'switch-disabled',
] as const;

type SwitchStory = (typeof STORY_IDS)[number];

const normalizeStory = (story?: string): SwitchStory => {
  return STORY_IDS.includes(story as SwitchStory) ? (story as SwitchStory) : 'switch-basic';
};

const storyMeta: Record<SwitchStory, { title: string; description: string }> = {
  'switch-basic': {
    title: 'Switch — Basic',
    description: 'Small, medium, and large switches in default right-label position.',
  },
  'switch-labels': {
    title: 'Switch — Label Positions',
    description: 'noLabel, left, right, and bothSides label placement.',
  },
  'switch-status': {
    title: 'Switch — Status Descriptions',
    description: 'Helper, error, warning, and success description variants.',
  },
  'switch-required': {
    title: 'Switch — Required & Icons',
    description: 'Required asterisks, trailing icons, and secondary labels.',
  },
  'switch-disabled': {
    title: 'Switch — Disabled',
    description: 'Disabled switches in on and off states.',
  },
};

const switchExample = (name: string, stateName: string, body: string): string => {
  return `const ${name} = () => {
  const [${stateName}, set${stateName[0].toUpperCase()}${stateName.slice(1)}] = React.useState(false);
  return (
    <View style={styles.row}>
      <Ux4gSwitch
        checked={${stateName}}
        onCheckedChange={set${stateName[0].toUpperCase()}${stateName.slice(1)}}
${body}
      />
    </View>
  );
};`;
};

const getExampleComponents = (story: SwitchStory): string => {
  switch (story) {
    case 'switch-labels':
      return `${switchExample('RightExample', 'right', `        label='Label on the right'
        description='Default position with supporting text'
        labelPosition='right'`)}
${switchExample('LeftExample', 'left', `        label='Label on the left'
        description='Switch control sits after the text'
        labelPosition='left'`)}
${switchExample('BothSidesExample', 'both', `        label='Left label'
        labelPosition='bothSides'
        secondaryLabel='Right label'`)}
${switchExample('NoLabelExample', 'noLabel', `        labelPosition='noLabel'`)}`;
    case 'switch-status':
      return `${switchExample('HelperExample', 'helper', `        label='Notifications'
        description='Receive email notifications'
        descriptionVariant='helper'`)}
${switchExample('ErrorExample', 'error', `        label='Auto-renewal'
        description='Payment method expired, please update'
        descriptionVariant='error'`)}
${switchExample('WarningExample', 'warning', `        label='Data sync'
        description='Roaming charges may apply'
        descriptionVariant='warning'`)}
${switchExample('SuccessExample', 'success', `        label='Backup'
        description='Last backup 2 minutes ago'
        descriptionVariant='success'`)}`;
    case 'switch-required':
      return `${switchExample('RequiredExample', 'required', `        label='Terms & Conditions'
        description='I agree to the terms of service'
        isRequired`)}
${switchExample('SecondaryExample', 'secondary', `        label='Dark mode'
        labelPosition='bothSides'
        secondaryLabel='On'
        isSecondaryRequired`)}
${switchExample('IconExample', 'iconed', `        label='Biometric login'
        description='Use fingerprint to unlock'`)}`;
    case 'switch-disabled':
      return `const DisabledOffExample = () => {
  const [disabledOff, setDisabledOff] = React.useState(false);
  return (
    <View style={styles.row}>
      <Ux4gSwitch
        checked={disabledOff}
        onCheckedChange={setDisabledOff}
        enabled={false}
        label='Disabled Off'
        description='This switch cannot be toggled'
      />
    </View>
  );
};

const DisabledOnExample = () => {
  const [disabledOn, setDisabledOn] = React.useState(true);
  return (
    <View style={styles.row}>
      <Ux4gSwitch
        checked={disabledOn}
        onCheckedChange={setDisabledOn}
        enabled={false}
        label='Disabled On'
        description='Locked in the on position'
      />
    </View>
  );
};

const DisabledNoLabelExample = () => {
  const [disabledNoLabel, setDisabledNoLabel] = React.useState(false);
  return (
    <View style={styles.row}>
      <Ux4gSwitch
        checked={disabledNoLabel}
        onCheckedChange={setDisabledNoLabel}
        enabled={false}
        labelPosition='noLabel'
      />
    </View>
  );
};`;
    default:
      return `${switchExample('SmallExample', 'small', `        size='s'
        label='Small (32 x 18)'
        description='Compact size for dense layouts'`)}
${switchExample('MediumExample', 'medium', `        size='m'
        label='Medium (40 x 22)'
        description='Default size'`)}
${switchExample('LargeExample', 'large', `        size='l'
        label='Large (48 x 28)'
        description='Prominent size for settings'`)}`;
  }
};

const getStoryCode = (story: SwitchStory): string => {
  return `import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gSwitch } from 'ux4g-react-native-design-system';

${getExampleComponents(story)}

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
${(() => {
  const names: Record<SwitchStory, string[]> = {
    'switch-basic': ['SmallExample', 'MediumExample', 'LargeExample'],
    'switch-labels': ['RightExample', 'LeftExample', 'BothSidesExample', 'NoLabelExample'],
    'switch-status': ['HelperExample', 'ErrorExample', 'WarningExample', 'SuccessExample'],
    'switch-required': ['RequiredExample', 'SecondaryExample', 'IconExample'],
    'switch-disabled': ['DisabledOffExample', 'DisabledOnExample', 'DisabledNoLabelExample'],
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

const getSnackBody = (story: SwitchStory): string => {
  const names: Record<SwitchStory, string[]> = {
    'switch-basic': ['SmallExample', 'MediumExample', 'LargeExample'],
    'switch-labels': ['RightExample', 'LeftExample', 'BothSidesExample', 'NoLabelExample'],
    'switch-status': ['HelperExample', 'ErrorExample', 'WarningExample', 'SuccessExample'],
    'switch-required': ['RequiredExample', 'SecondaryExample', 'IconExample'],
    'switch-disabled': ['DisabledOffExample', 'DisabledOnExample', 'DisabledNoLabelExample'],
  };
  return names[story].map((n) => `          <${n} />`).join('\n');
};

export const SwitchDoc: React.FC<SwitchDocProps> = ({ isDark, story = 'switch-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const activeStory = normalizeStory(story);
  const config = storyMeta[activeStory];
  const codeString = useMemo(() => getStoryCode(activeStory), [activeStory]);

  const renderStoryPreview = () => {
    const snackCodeString = `import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gSwitch, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

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

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gSwitch%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '680px', border: 'none', borderRadius: '8px' }}
        title='Expo Snack Switch Preview'
      />
    );
  };

  const switchPropsData = [
    { name: 'checked', type: 'boolean', default: 'false', desc: 'Whether the switch is on (true) or off (false).', required: false },
    { name: 'value', type: 'boolean', default: 'false', desc: 'Alias for checked (React Native form compatibility).', required: false },
    { name: 'onCheckedChange', type: '(checked: boolean) => void', default: 'undefined', desc: 'Callback fired when the checked state toggles.', required: false },
    { name: 'onChanged', type: '(checked: boolean) => void', default: 'undefined', desc: 'Alias for onCheckedChange.', required: false },
    { name: 'label', type: 'string', default: 'undefined', desc: 'Primary label text next to the switch.', required: false },
    { name: 'description', type: 'string', default: 'undefined', desc: 'Supporting description below the label.', required: false },
    { name: 'size', type: "'s' | 'm' | 'l' | 'small' | 'medium' | 'large'", default: "'m'", desc: 'Switch size (s = 32x18, m = 40x22, l = 48x28).', required: false },
    { name: 'labelPosition', type: "'noLabel' | 'left' | 'right' | 'bothSides'", default: "'right'", desc: 'Position of the label relative to the switch.', required: false },
    { name: 'enabled', type: 'boolean', default: 'true', desc: 'Whether the switch is interactive.', required: false },
    { name: 'isRequired', type: 'boolean', default: 'false', desc: 'Shows a red asterisk next to the primary label.', required: false },
    { name: 'icon', type: 'React.ReactNode', default: 'undefined', desc: 'Trailing icon next to the primary label.', required: false },
    { name: 'labelStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Custom label typography style.', required: false },
    { name: 'descriptionStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Custom description typography style.', required: false },
    { name: 'secondaryLabel', type: 'string', default: 'undefined', desc: 'Secondary label when labelPosition is bothSides.', required: false },
    { name: 'isSecondaryRequired', type: 'boolean', default: 'false', desc: 'Red asterisk next to the secondary label.', required: false },
    { name: 'secondaryIcon', type: 'React.ReactNode', default: 'undefined', desc: 'Trailing icon next to the secondary label.', required: false },
    { name: 'descriptionVariant', type: "'helper' | 'error' | 'warning' | 'success'", default: 'undefined', desc: 'Status variant coloring and icon for the description.', required: false },
    { name: 'descriptionIcon', type: 'React.ReactNode', default: 'undefined', desc: 'Custom status icon before the description.', required: false },
    { name: 'style', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Root container style override.', required: false },
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
                <CodeBlock code={codeString} language='TSX' filename='SwitchExample.tsx' />
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
                    {switchPropsData.map((p) => (
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

export default SwitchDoc;