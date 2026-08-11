import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface TimeSlotDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

const STORY_IDS = [
  'timeslot-introduction',
  'timeslot-basic',
  'timeslot-compact',
  'timeslot-json',
] as const;

type TimeSlotStory = (typeof STORY_IDS)[number];

const normalizeStory = (story?: string): TimeSlotStory => {
  return STORY_IDS.includes(story as TimeSlotStory) ? (story as TimeSlotStory) : 'timeslot-introduction';
};

const storyMeta: Record<TimeSlotStory, { title: string; description: string }> = {
  'timeslot-introduction': {
    title: 'Time Slot — Introduction',
    description: 'Calendar grid with available dates, public holidays, weekly offs, and no-slot days.',
  },
  'timeslot-basic': {
    title: 'Time Slot — Booking (Expanded)',
    description: 'Tapping an available date opens the time slot sheet with available, limited, and no-slot times.',
  },
  'timeslot-compact': {
    title: 'Time Slot — Compact View',
    description: 'Compact view mode renders time slots in a two-column grid with count badges.',
  },
  'timeslot-json': {
    title: 'Time Slot — JSON Data Source',
    description: 'Build Ux4gTimeslotData from a plain JSON object with viewMode and dates.',
  },
};

const SHARED_PRELUDE = `const pad = (n) => String(n).padStart(2, '0');
const fmt = (d) => \`\${d.getFullYear()}-\${pad(d.getMonth() + 1)}-\${pad(d.getDate())}\`;
const now = new Date();
const addDays = (n) => { const d = new Date(now); d.setDate(d.getDate() + n); return d; };
const today = fmt(now);`;

const getDataExample = (story: TimeSlotStory): string => {
  switch (story) {
    case 'timeslot-basic':
    case 'timeslot-compact':
      return `const data = {
  year: now.getFullYear(),
  month: now.getMonth() + 1,
  today,
  weeklyOffWeekdays: [6, 7],
  allowTapOnPublicHoliday: false,
  allowTapOnWeeklyOff: false,
  viewMode: '${story === 'timeslot-compact' ? 'compact' : 'expanded'}',
  dates: [
    { date: fmt(addDays(2)), status: 'publicHoliday' },
    { date: fmt(addDays(4)), status: 'noSlots' },
    { date: fmt(addDays(6)), status: 'noSlots' },
  ],
};`;
    case 'timeslot-json':
      return `const data = {
  year: now.getFullYear(),
  month: now.getMonth() + 1,
  today,
  weeklyOffWeekdays: [6, 7],
  viewMode: 'compact',
  dates: [
    { date: fmt(addDays(2)), status: 'publicHoliday' },
    { date: fmt(addDays(5)), status: 'noSlots' },
  ],
};`;
    default:
      return `const data = {
  year: now.getFullYear(),
  month: now.getMonth() + 1,
  today,
  weeklyOffWeekdays: [6, 7],
  allowTapOnPublicHoliday: false,
  allowTapOnWeeklyOff: false,
  viewMode: 'expanded',
  dates: [
    { date: fmt(addDays(2)), status: 'publicHoliday' },
    { date: fmt(addDays(4)), status: 'noSlots' },
    { date: fmt(addDays(6)), status: 'noSlots' },
  ],
};`;
  }
};

const getExampleBody = (story: TimeSlotStory): string => {
  if (story === 'timeslot-basic' || story === 'timeslot-compact') {
    return `${getDataExample(story)}

const timeSlots = {
  default: [
    { time: '9:00 AM', slotCount: 4, status: 'available' },
    { time: '9:30 AM', slotCount: 6, status: 'available' },
    { time: '10:00 AM', slotCount: 3, status: 'available' },
    { time: '10:30 AM', slotCount: 0, status: 'noSlots' },
    { time: '11:00 AM', slotCount: 8, status: 'available' },
    { time: '2:00 PM', slotCount: 5, status: 'available' },
    { time: '2:30 PM', slotCount: 2, status: 'limited' },
    { time: '3:00 PM', slotCount: 2, status: 'limited' },
    { time: '4:00 PM', slotCount: 7, status: 'available' },
    { time: '5:30 PM', slotCount: 0, status: 'noSlots' },
  ],
};

const timeSlotProvider = (date) => timeSlots[fmt(date)] || timeSlots.default;

const BookingExample = () => {
  const [confirmed, setConfirmed] = React.useState(null);
  return (
    <View style={styles.row}>
      <Ux4gTimeslot
        data={data}
        timeSlotProvider={timeSlotProvider}
        onSlotConfirmed={(date, slot) => setConfirmed(\`\${fmt(date)} • \${slot.time}\`)}
      />
      {confirmed && <Text style={styles.result}>Confirmed: {confirmed}</Text>}
    </View>
  );
};`;
  }
  if (story === 'timeslot-json') {
    return `${getDataExample(story)}

const JsonExample = () => {
  const [selected, setSelected] = React.useState(null);
  return (
    <View style={styles.row}>
      <Ux4gTimeslot data={data} onDateSelected={(date) => setSelected(fmt(date))} />
      {selected && <Text style={styles.result}>Selected: {selected}</Text>}
    </View>
  );
};`;
  }
  return `${getDataExample(story)}

const CalendarExample = () => {
  const [selected, setSelected] = React.useState(null);
  return (
    <View style={styles.row}>
      <Text style={styles.caption}>Select an available date</Text>
      <Ux4gTimeslot data={data} onDateSelected={(date) => setSelected(fmt(date))} />
      {selected && <Text style={styles.result}>Selected: {selected}</Text>}
    </View>
  );
};`;
};

const getExampleComponentName = (story: TimeSlotStory): string => {
  switch (story) {
    case 'timeslot-basic':
    case 'timeslot-compact':
      return 'BookingExample';
    case 'timeslot-json':
      return 'JsonExample';
    default:
      return 'CalendarExample';
  }
};

const getStoryCode = (story: TimeSlotStory): string => {
  return `import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gTimeslot } from 'ux4g-react-native-design-system';

${SHARED_PRELUDE}

${getExampleBody(story)}

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <${getExampleComponentName(story)} />
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
  caption: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 10,
    color: '#6B7280',
  },
  result: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: '600',
    color: '#1D4ED8',
  },
});`;
};

export const TimeSlotDoc: React.FC<TimeSlotDocProps> = ({ isDark, story = 'timeslot-introduction' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const activeStory = normalizeStory(story);
  const config = storyMeta[activeStory];
  const codeString = useMemo(() => getStoryCode(activeStory), [activeStory]);

  const renderStoryPreview = () => {
    const snackCodeString = `import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gTimeslot, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

${SHARED_PRELUDE}

${getExampleBody(activeStory)}

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <ScrollView contentContainerStyle={styles.container}>
        <${getExampleComponentName(activeStory)} />
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
  caption: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 10,
    color: '#6B7280',
  },
  result: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: '600',
    color: '#1D4ED8',
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gTimeslot%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '680px', border: 'none', borderRadius: '8px' }}
        title='Expo Snack TimeSlot Preview'
      />
    );
  };

  const timeslotPropsData = [
    { name: 'data', type: 'Ux4gTimeslotData', default: '—', desc: 'Calendar data model: year, month, selectedDate, today, weeklyOffWeekdays, dates, allowTapOnPublicHoliday, allowTapOnWeeklyOff, viewMode.', required: true },
    { name: 'onDateSelected', type: '(date: Date) => void', default: 'undefined', desc: 'Called when the user taps an available date (when no timeSlotProvider is set).', required: false },
    { name: 'onMonthChanged', type: '(year: number, month: number) => void', default: 'undefined', desc: 'Called when the prev/next month arrow is tapped.', required: false },
    { name: 'timeSlotProvider', type: '(date: Date) => Promise<SlotTimeEntry[]> | SlotTimeEntry[]', default: 'undefined', desc: 'Supplies time slots for a date; when set, tapping a date opens the SlotTimePickerSheet.', required: false },
    { name: 'onSlotConfirmed', type: '(date: Date, slot: SlotTimeEntry) => void', default: 'undefined', desc: 'Called when the user confirms a time slot in the sheet.', required: false },
    { name: 'style', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Root container style override.', required: false },
  ];

  const timeslotDataPropsData = [
    { name: 'year', type: 'number', default: '—', desc: 'Initial year of the calendar grid.', required: true },
    { name: 'month', type: 'number', default: '—', desc: 'Initial month (1–12) of the calendar grid.', required: true },
    { name: 'selectedDate', type: 'string', default: 'undefined', desc: 'ISO date (YYYY-MM-DD) initially selected.', required: false },
    { name: 'today', type: 'string', default: 'new Date()', desc: 'ISO date (YYYY-MM-DD) treated as today; past dates are non-interactive.', required: false },
    { name: 'weeklyOffWeekdays', type: 'number[]', default: '[6, 7]', desc: 'ISO weekday numbers (1=Mon…7=Sun) shown as weekly off.', required: false },
    { name: 'dates', type: 'SlotDateEntry[]', default: '[]', desc: 'Per-date statuses: { date, status } with status = available | noSlots | publicHoliday | weeklyOff.', required: false },
    { name: 'allowTapOnPublicHoliday', type: 'boolean', default: 'false', desc: 'Allows tapping publicHoliday dates.', required: false },
    { name: 'allowTapOnWeeklyOff', type: 'boolean', default: 'false', desc: 'Allows tapping weeklyOff dates.', required: false },
    { name: 'viewMode', type: "'expanded' | 'compact'", default: "'expanded'", desc: 'Time slot sheet layout: full-width rows (expanded) or two-column grid with badges (compact).', required: false },
  ];

  const slotTimeEntryPropsData = [
    { name: 'time', type: 'string', default: '—', desc: 'Display label of the slot (e.g. "9:00 AM").', required: true },
    { name: 'slotCount', type: 'number', default: '—', desc: 'Remaining slots; 0 renders the slot as "No slots available".', required: true },
    { name: 'status', type: "'available' | 'limited' | 'noSlots'", default: 'undefined', desc: 'Optional status; limited is highlighted with the warning color.', required: false },
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
                <CodeBlock code={codeString} language='TSX' filename='TimeSlotExample.tsx' />
              </div>
            )}

            {activeMainTab === 'props' && (
              <div className='wb-props-area'>
                <h3 className='props-section-title'>Ux4gTimeslot Props</h3>
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
                    {timeslotPropsData.map((p) => (
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

                <h3 className='props-section-title'>Ux4gTimeslotData (data prop)</h3>
                <table className='props-table'>
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Default</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timeslotDataPropsData.map((p) => (
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

                <h3 className='props-section-title'>SlotTimeEntry (timeSlotProvider result)</h3>
                <table className='props-table'>
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Default</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slotTimeEntryPropsData.map((p) => (
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

export default TimeSlotDoc;