import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface TimePickerDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

const STORY_IDS = [
  'timepicker-basic',
  'timepicker-label',
  'timepicker-status',
  'timepicker-interval',
  'timepicker-initial',
  'timepicker-disabled',
] as const;

type TimePickerStory = (typeof STORY_IDS)[number];

const normalizeStory = (story?: string): TimePickerStory => {
  return STORY_IDS.includes(story as TimePickerStory) ? (story as TimePickerStory) : 'timepicker-basic';
};

const storyMeta: Record<TimePickerStory, { title: string; description: string }> = {
  'timepicker-basic': {
    title: 'Time Picker — Basic',
    description: 'Field trigger that opens the hour/minute wheel dialog.',
  },
  'timepicker-label': {
    title: 'Time Picker — Label',
    description: 'Top label, required asterisk, and description caption.',
  },
  'timepicker-status': {
    title: 'Time Picker — Validation Status',
    description: 'Error, warning, and success status variants.',
  },
  'timepicker-interval': {
    title: 'Time Picker — Minute Interval',
    description: 'Minute wheel stepped by 1, 5, 15, and 30 minutes.',
  },
  'timepicker-initial': {
    title: 'Time Picker — Initial Time',
    description: 'Field pre-filled with an initial selected time.',
  },
  'timepicker-disabled': {
    title: 'Time Picker — Disabled',
    description: 'Non-interactive field with muted colors.',
  },
};

const exampleComponent = (name: string, body: string): string => {
  return `const ${name} = () => {
  const [time, setTime] = React.useState(undefined);
  return (
    <View style={styles.row}>
      <Ux4gTimePicker
        initialTime={time}
        onTimeSelected={(t) => setTime(t)}
${body}
      />
    </View>
  );
};`;
};

const getExampleComponents = (story: TimePickerStory): string => {
  switch (story) {
    case 'timepicker-label':
      return `${exampleComponent(
        'LabelExample',
        `        label='Meeting Time'
        placeholder='Select a time slot'`
      )}
${exampleComponent(
  'RequiredExample',
  `        label='Interview Time'
        isRequired
        description='Choose a slot between 10 AM and 6 PM'
        placeholder='Select time'`
)}
${exampleComponent(
  'DescExample',
  `        label='Delivery Window'
        description='We will deliver within the selected 2 hour window'
        placeholder='Select time'`
)}`;
    case 'timepicker-status':
      return `${exampleComponent(
        'ErrorExample',
        `        label='Appointment Time'
        status='error'
        description='This time slot is already booked'
        placeholder='Select time'`
      )}
${exampleComponent(
  'WarningExample',
  `        label='Reminder Time'
        status='warning'
        description='Reminder time is close to closing hours'
        placeholder='Select time'`
)}
${exampleComponent(
  'SuccessExample',
  `        label='Slot Booked'
        status='success'
        description='Time slot confirmed successfully'
        placeholder='Select time'`
)}`;
    case 'timepicker-interval':
      return `${exampleComponent(
        'Every5Min',
        `        label='Every 5 minutes'
        minuteInterval={5}
        placeholder='Select time'`
      )}
${exampleComponent(
  'Every15Min',
  `        label='Every 15 minutes'
        minuteInterval={15}
        placeholder='Select time'`
)}
${exampleComponent(
  'Every30Min',
  `        label='Every 30 minutes'
        minuteInterval={30}
        placeholder='Select time'`
)}`;
    case 'timepicker-initial':
      return `const InitialExample = () => {
  const [time, setTime] = React.useState({ hour: 14, minute: 30 });
  return (
    <View style={styles.row}>
      <Ux4gTimePicker
        initialTime={time}
        onTimeSelected={(t) => setTime(t)}
        label='Pre-filled Time'
        placeholder='Select time'
      />
    </View>
  );
};`;
    case 'timepicker-disabled':
      return `${exampleComponent(
        'DisabledExample',
        `        label='Not Available'
        enabled={false}
        description='Time picking is disabled'
        placeholder='Select time'`
      )}
${exampleComponent(
  'DisabledFilledExample',
  `        label='Booked Slot'
        enabled={false}
        initialTime={{ hour: 9, minute: 15 }}
        description='Slot has been booked'
        placeholder='Select time'`
)}`;
    default:
      return `${exampleComponent(
        'BasicExample',
        `        placeholder='Select time'`
      )}
${exampleComponent(
  'CustomPlaceholderExample',
  `        placeholder='Pick your schedule'`
)}`;
  }
};

const getStoryCode = (story: TimePickerStory): string => {
  return `import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gTimePicker } from 'ux4g-react-native-design-system';

${getExampleComponents(story)}

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
${(() => {
  const names: Record<TimePickerStory, string[]> = {
    'timepicker-basic': ['BasicExample', 'CustomPlaceholderExample'],
    'timepicker-label': ['LabelExample', 'RequiredExample', 'DescExample'],
    'timepicker-status': ['ErrorExample', 'WarningExample', 'SuccessExample'],
    'timepicker-interval': ['Every5Min', 'Every15Min', 'Every30Min'],
    'timepicker-initial': ['InitialExample'],
    'timepicker-disabled': ['DisabledExample', 'DisabledFilledExample'],
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

const getSnackBody = (story: TimePickerStory): string => {
  const names: Record<TimePickerStory, string[]> = {
    'timepicker-basic': ['BasicExample', 'CustomPlaceholderExample'],
    'timepicker-label': ['LabelExample', 'RequiredExample', 'DescExample'],
    'timepicker-status': ['ErrorExample', 'WarningExample', 'SuccessExample'],
    'timepicker-interval': ['Every5Min', 'Every15Min', 'Every30Min'],
    'timepicker-initial': ['InitialExample'],
    'timepicker-disabled': ['DisabledExample', 'DisabledFilledExample'],
  };
  return names[story].map((n) => `          <${n} />`).join('\n');
};

export const TimePickerDoc: React.FC<TimePickerDocProps> = ({ isDark, story = 'timepicker-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const activeStory = normalizeStory(story);
  const config = storyMeta[activeStory];
  const codeString = useMemo(() => getStoryCode(activeStory), [activeStory]);

  const renderStoryPreview = () => {
    const snackCodeString = `import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gTimePicker, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

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

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gTimePicker%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '680px', border: 'none', borderRadius: '8px' }}
        title='Expo Snack TimePicker Preview'
      />
    );
  };

  const timePickerPropsData = [
    { name: 'initialTime', type: 'Ux4gTimeOfDay', default: 'undefined', desc: 'Initial selected time ({ hour: 0-23, minute: 0-59 }).', required: false },
    { name: 'onTimeSelected', type: '(time: Ux4gTimeOfDay) => void', default: 'undefined', desc: 'Callback fired when a time is confirmed.', required: false },
    { name: 'placeholder', type: 'string', default: "'Select time'", desc: 'Hint text displayed when no time is selected.', required: false },
    { name: 'enabled', type: 'boolean', default: 'true', desc: 'Whether interaction is enabled.', required: false },
    { name: 'minuteInterval', type: 'number', default: '1', desc: 'Step interval for the minute wheel (1, 5, 10, 15, 30...).', required: false },
    { name: 'label', type: 'string', default: 'undefined', desc: 'Label rendered above the field box.', required: false },
    { name: 'description', type: 'string', default: 'undefined', desc: 'Caption rendered below the field box.', required: false },
    { name: 'isRequired', type: 'boolean', default: 'false', desc: 'Renders a red asterisk next to the label.', required: false },
    { name: 'required', type: 'boolean', default: 'false', desc: 'Alias for isRequired.', required: false },
    { name: 'status', type: "'defaultStatus' | 'error' | 'warning' | 'success'", default: "'defaultStatus'", desc: 'Status variant controlling border and caption color.', required: false },
    { name: 'style', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Custom container style override.', required: false },
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
                <CodeBlock code={codeString} language='TSX' filename='TimePickerExample.tsx' />
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
                    {timePickerPropsData.map((p) => (
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

export default TimePickerDoc;