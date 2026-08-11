import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface JourneyTimelineDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';
type JourneyStory = 'journey-timeline-basic' | 'journey-timeline-horizontal' | 'journey-timeline-custom';

const normalizeStory = (story?: string): JourneyStory => {
  if (story === 'journey-timeline') return 'journey-timeline-basic';

  const allowed: JourneyStory[] = [
    'journey-timeline-basic',
    'journey-timeline-horizontal',
    'journey-timeline-custom',
  ];

  return allowed.includes(story as JourneyStory) ? (story as JourneyStory) : 'journey-timeline-basic';
};

const storyMeta: Record<JourneyStory, { title: string; description: string }> = {
  'journey-timeline-basic': {
    title: 'Journey Timeline',
    description: 'Vertical step-by-step journey with completed, current, and upcoming states.',
  },
  'journey-timeline-horizontal': {
    title: 'Horizontal Timeline',
    description: 'A timeline arranged horizontally, useful for wide spaces or scrolling views.',
  },
  'journey-timeline-custom': {
    title: 'Journey Timeline',
    description: 'Custom statuses with badge positions, step numbers, and custom card content.',
  },
};

const getStoryCode = (story: JourneyStory): string => {
  if (story === 'journey-timeline-horizontal') {
    return `import React from 'react';
import { Ux4gJourneyTimeline, Ux4gIcons } from 'ux4g-react-native-design-system';

export default function JourneyTimelineHorizontalExample() {
  return (
    <Ux4gJourneyTimeline
      orientation='horizontal'
      currentStep={1}
      header={{
        title: 'Title',
        description: 'Description',
        icon: Ux4gIcons.settings({ size: 16, color: '#6B7280' }),
      }}
      steps={[
        {
          title: 'Step 1',
          date: 'Date',
          tag: 'Tag',
        },
        {
          title: 'Title',
          date: 'Date',
          tag: 'Tag',
          helpingText: 'Description',
        },
        { title: 'Step 3', date: 'Date', tag: 'Tag' },
        { title: 'Step 4', date: 'Date', tag: 'Tag' },
        { title: 'Step 5', date: 'Date', tag: 'Tag' },
        { title: 'Step 6', date: 'Date', tag: 'Tag' },
      ]}
    />
  );
}`;
  }

  if (story === 'journey-timeline-custom') {
    return `import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gJourneyTimeline, Ux4gIcons } from 'ux4g-react-native-design-system';

export default function JourneyTimelineCustomExample() {
  return (
    <Ux4gJourneyTimeline
      currentStep={1}
      header={{
        title: 'Passport Service Journey',
        description: 'Track the current status of your application',
        icon: Ux4gIcons.info({ size: 18, color: '#4B5563' }),
      }}
      steps={[
        {
          title: 'Application Submitted',
          date: '08 Aug 2026',
          state: 'completed',
          stepNumber: '1',
          status: {
            text: 'Completed',
            dotColor: '#16A34A',
            badgeText: 'Done',
            badgeTextColor: '#16A34A',
          },
        },
        {
          title: 'Police Verification',
          date: '11 Aug 2026',
          state: 'current',
          stepNumber: '2',
          helpingText: 'Officer visit is scheduled for tomorrow',
          status: {
            text: '1 day remaining',
            dotColor: '#EA580C',
            badgeText: 'Pending',
            badgeColor: '#FFF7ED',
            badgeTextColor: '#EA580C',
            badgePosition: 'topRight',
          },
          customContent: (
            <View style={{ marginTop: 4 }}>
              <Text style={{ color: '#4B5563', fontSize: 12 }}>
                Keep ID proof and address proof ready
              </Text>
            </View>
          ),
        },
        {
          title: 'Passport Issued',
          date: '15 Aug 2026',
          state: 'upcoming',
          stepNumber: '3',
          tag: 'Upcoming',
        },
      ]}
    />
  );
}`;
  }

  return `import React from 'react';
import { Ux4gJourneyTimeline } from 'ux4g-react-native-design-system';

export default function JourneyTimelineBasicExample() {
  return (
    <Ux4gJourneyTimeline
      currentStep={1}
      header={{
        title: 'Driving License Journey',
        description: 'Track the status of each application step',
      }}
      steps={[
        {
          title: 'Application Submitted',
          date: '01 Aug 2026',
          helpingText: 'Your request has been successfully submitted',
        },
        {
          title: 'Document Verification',
          date: '03 Aug 2026',
          helpingText: 'Verification is currently in progress',
          status: {
            text: '2 days remaining',
            badgeText: 'Pending',
          },
        },
        {
          title: 'Approval',
          date: '06 Aug 2026',
          helpingText: 'Final approval will be shown here',
        },
      ]}
    />
  );
}`;
};

const getSnackFields = (story: JourneyStory): string => {
  if (story === 'journey-timeline-horizontal') {
    return `        <Ux4gJourneyTimeline
          orientation='horizontal'
          currentStep={1}
          header={{
            title: 'Title',
            description: 'Description',
            icon: Ux4gIcons.settings({ size: 16, color: '#6B7280' }),
          }}
          steps={[
            {
              title: 'Step 1',
              date: 'Date',
              tag: 'Tag',
            },
            {
              title: 'Title',
              date: 'Date',
              tag: 'Tag',
              helpingText: 'Description',
            },
            { title: 'Step 3', date: 'Date', tag: 'Tag' },
            { title: 'Step 4', date: 'Date', tag: 'Tag' },
            { title: 'Step 5', date: 'Date', tag: 'Tag' },
            { title: 'Step 6', date: 'Date', tag: 'Tag' },
          ]}
        />`;
  }

  if (story === 'journey-timeline-custom') {
    return `        <Ux4gJourneyTimeline
          currentStep={1}
          header={{
            title: 'Passport Service Journey',
            description: 'Track the current status of your application',
            icon: Ux4gIcons.info({ size: 18, color: '#4B5563' }),
          }}
          steps={[
            {
              title: 'Application Submitted',
              date: '08 Aug 2026',
              state: 'completed',
              stepNumber: '1',
              status: {
                text: 'Completed',
                dotColor: '#16A34A',
                badgeText: 'Done',
                badgeTextColor: '#16A34A',
              },
            },
            {
              title: 'Police Verification',
              date: '11 Aug 2026',
              state: 'current',
              stepNumber: '2',
              helpingText: 'Officer visit is scheduled for tomorrow',
              status: {
                text: '1 day remaining',
                dotColor: '#EA580C',
                badgeText: 'Pending',
                badgeColor: '#FFF7ED',
                badgeTextColor: '#EA580C',
                badgePosition: 'topRight',
              },
              customContent: (
                <View style={{ marginTop: 4 }}>
                  <Text style={{ color: '#4B5563', fontSize: 12 }}>
                    Keep ID proof and address proof ready
                  </Text>
                </View>
              ),
            },
            {
              title: 'Passport Issued',
              date: '15 Aug 2026',
              state: 'upcoming',
              stepNumber: '3',
              tag: 'Upcoming',
            },
          ]}
        />`;
  }

  return `        <Ux4gJourneyTimeline
          currentStep={1}
          header={{
            title: 'Driving License Journey',
            description: 'Track the status of each application step',
          }}
          steps={[
            {
              title: 'Application Submitted',
              date: '01 Aug 2026',
              helpingText: 'Your request has been successfully submitted',
            },
            {
              title: 'Document Verification',
              date: '03 Aug 2026',
              helpingText: 'Verification is currently in progress',
              status: {
                text: '2 days remaining',
                badgeText: 'Pending',
              },
            },
            {
              title: 'Approval',
              date: '06 Aug 2026',
              helpingText: 'Final approval will be shown here',
            },
          ]}
        />`;
};

export const JourneyTimelineDoc: React.FC<JourneyTimelineDocProps> = ({ isDark, story = 'journey-timeline-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const activeStory = normalizeStory(story);
  const config = storyMeta[activeStory];
  const codeString = useMemo(() => getStoryCode(activeStory), [activeStory]);

  const renderStoryPreview = () => {
    const snackCodeString = `import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gJourneyTimeline, Ux4gThemeProvider, Ux4gIcons } from 'ux4g-react-native-design-system';

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

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gJourneyTimeline%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '680px', border: 'none', borderRadius: '8px' }}
        title='Expo Snack JourneyTimeline Preview'
      />
    );
  };

  const propsData = [
    { name: 'steps', type: 'Ux4gJourneyStep[]', default: 'required', desc: 'List of journey steps to render.', required: true },
    { name: 'header', type: 'Ux4gJourneyHeader', default: 'undefined', desc: 'Optional title/description/header icon block.', required: false },
    { name: 'currentStep', type: 'number | null', default: 'undefined', desc: 'Current active step index. Overrides step-level state.', required: false },
    { name: 'orientation', type: "'vertical' | 'horizontal'", default: "'vertical'", desc: 'Direction of timeline layout.', required: false },
    { name: 'indicatorSize', type: 'number', default: '20', desc: 'Diameter of step indicator circles.', required: false },
    { name: 'lineWidth', type: 'number', default: '3', desc: 'Thickness of connecting lines.', required: false },
    { name: 'indicatorCardSpacing', type: 'number', default: '12', desc: 'Gap between indicator and step card.', required: false },
    { name: 'stepSpacing', type: 'number', default: '12', desc: 'Spacing between steps.', required: false },
    { name: 'activeColor', type: 'string', default: 'theme primary', desc: 'Color for completed/current indicators and lines.', required: false },
    { name: 'inactiveColor', type: 'string', default: 'onSurface @ 25%', desc: 'Color for upcoming indicators and lines.', required: false },
    { name: 'cardBorderRadius', type: 'number', default: '8', desc: 'Border radius for step cards.', required: false },
    { name: 'cardPadding', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Padding override for each step card.', required: false },
    { name: 'cardColor', type: 'string', default: 'theme surface', desc: 'Background color for cards.', required: false },
    { name: 'cardBorderColor', type: 'string', default: 'onSurface @ 10%', desc: 'Border color for cards.', required: false },
    { name: 'dateStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Default style override for date text.', required: false },
    { name: 'titleStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Default style override for title text.', required: false },
    { name: 'style', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Style override for timeline container.', required: false },
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
                <CodeBlock code={codeString} language='TSX' filename='JourneyTimelineExample.tsx' />
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

export default JourneyTimelineDoc;
