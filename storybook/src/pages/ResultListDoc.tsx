import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface ResultListDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';
type ResultListStory = 'result-list-basic' | 'result-list-metadata' | 'result-list-expanded' | 'result-list-rejected';

const normalizeStory = (story?: string): ResultListStory => {
  if (story === 'result-list' || story === 'result') return 'result-list-basic';
  const allowed: ResultListStory[] = ['result-list-basic', 'result-list-metadata', 'result-list-expanded', 'result-list-rejected'];
  return allowed.includes(story as ResultListStory) ? (story as ResultListStory) : 'result-list-basic';
};

const storyMeta: Record<ResultListStory, { title: string; description: string }> = {
  'result-list-basic': {
    title: 'Result List',
    description: 'Collapsible summary row with details grid and optional action button.',
  },
  'result-list-metadata': {
    title: 'Result List',
    description: 'Result list variants with status tags and segmented metadata pills.',
  },
  'result-list-expanded': {
    title: 'Result List',
    description: 'Initially expanded view with custom content and multi-column details.',
  },
  'result-list-rejected': {
    title: 'Result List',
    description: 'Rejected application state with CTA and rejection help details.',
  },
};

const getStoryCode = (story: ResultListStory): string => {
  if (story === 'result-list-rejected') {
    return `import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gResultList } from 'ux4g-react-native-design-system';

const rejectionDetails = [
  { label: 'Rejection Reason', value: 'Address Proof Mismatch', isBold: true },
  { label: 'Applied Date', value: '05 Feb 2026' },
];

const grievanceHelp = (
  <View style={{ marginTop: 6 }}>
    <Text style={{ fontSize: 13, color: '#B45309', marginBottom: 2 }}>Need Help?</Text>
    <Text style={{ fontSize: 14, fontWeight: '600', color: '#4338CA' }}>Register grievance -></Text>
  </View>
);

export default function ResultListRejectedExample() {
  return (
    <View style={{ width: '100%', gap: 14, backgroundColor: '#F8FAFC', borderRadius: 16, padding: 4 }}>
      <Ux4gResultList
        title='Ration Card Transfer Request'
        statusTag='Rejected'
        tagColorScheme='error'
        actionButtonText='Re-apply'
        initialExpanded={true}
        showBottomDivider={false}
        details={rejectionDetails}
        expandedChild={grievanceHelp}
      />
    </View>
  );
}`;
  }

  if (story === 'result-list-metadata') {
    return `import React from 'react';
import { View } from 'react-native';
import { Ux4gResultList } from 'ux4g-react-native-design-system';

export default function ResultListMetadataExample() {
  return (
    <View style={{ width: '100%', gap: 12, backgroundColor: '#F8FAFC', borderRadius: 16, padding: 4 }}>
      <Ux4gResultList
        title='Income Certificate Application'
        metadataSegments={[
          {
            text: '8 days left',
            leading: <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: '#F59E0B' }} />,
            textColor: '#374151',
          },
          { text: 'Under Review', textColor: '#D97706' },
        ]}
        actionButtonText='Track Status'
        initialExpanded={true}
        showBottomDivider={false}
        details={[
          { label: 'Reference Number', value: 'INC-2026-MH-04127' },
          { label: 'Last Updated Date', value: '10 Apr 2026' },
          { label: 'Assigned Officer', value: 'Rahul Sharma' },
          { label: 'Department', value: 'Revenue Department' },
        ]}
      />
    </View>
  );
}`;
  }

  if (story === 'result-list-expanded') {
    return `import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gResultList } from 'ux4g-react-native-design-system';

export default function ResultListExpandedExample() {
  return (
    <View style={{ width: '100%', gap: 12 }}>
      <Ux4gResultList
        title='KYC Verification'
        statusTag='Completed'
        tagColorScheme='success'
        initialExpanded={true}
        detailsColumns={2}
        details={[
          { label: 'Verified On', value: '10 Aug 2026' },
          { label: 'Method', value: 'DigiLocker + OTP' },
          { label: 'Verifier', value: 'Automated Engine' },
          { label: 'Confidence', value: '98%', valueColor: '#16A34A', isBold: true },
        ]}
        expandedChild={
          <View style={{ marginTop: 8 }}>
            <Text style={{ color: '#6B7280', fontSize: 13 }}>No manual intervention required.</Text>
          </View>
        }
      />
    </View>
  );
}`;
  }

  return `import React from 'react';
import { View } from 'react-native';
import { Ux4gResultList } from 'ux4g-react-native-design-system';

export default function ResultListBasicExample() {
  return (
    <View style={{ width: '100%', gap: 12 }}>
      <Ux4gResultList
        title='Service Application'
        actionButtonText='Open'
        details={[
          { label: 'Applicant', value: 'Priya Verma' },
          { label: 'Service', value: 'Birth Certificate' },
          { label: 'Submitted', value: '08 Aug 2026' },
          { label: 'Status', value: 'Pending Review' },
        ]}
      />
    </View>
  );
}`;
};

const getSnackFields = (story: ResultListStory): string => {
  if (story === 'result-list-rejected') {
    return `        <View style={styles.metadataCard}>
          <Ux4gResultList
            title='Ration Card Transfer Request'
            statusTag='Rejected'
            tagColorScheme='error'
            actionButtonText='Re-apply'
            initialExpanded={true}
            showBottomDivider={false}
            details={[
              { label: 'Rejection Reason', value: 'Address Proof Mismatch', isBold: true },
              { label: 'Applied Date', value: '05 Feb 2026' },
            ]}
            expandedChild={
              <View style={{ marginTop: 6 }}>
                <Text style={{ fontSize: 13, color: '#B45309', marginBottom: 2 }}>Need Help?</Text>
                <Text style={{ fontSize: 14, fontWeight: '600', color: '#4338CA' }}>Register grievance -></Text>
              </View>
            }
          />
        </View>`;
  }

  if (story === 'result-list-metadata') {
    return `        <View style={styles.metadataCard}>
          <Ux4gResultList
            title='Income Certificate Application'
            metadataSegments={[
              {
                text: '8 days left',
                leading: <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: '#F59E0B' }} />,
                textColor: '#374151',
              },
              { text: 'Under Review', textColor: '#D97706' },
            ]}
            actionButtonText='Track Status'
            initialExpanded={true}
            showBottomDivider={false}
            details={[
              { label: 'Reference Number', value: 'INC-2026-MH-04127' },
              { label: 'Last Updated Date', value: '10 Apr 2026' },
              { label: 'Assigned Officer', value: 'Rahul Sharma' },
              { label: 'Department', value: 'Revenue Department' },
            ]}
          />
        </View>`;
  }

  if (story === 'result-list-expanded') {
    return `        <View style={styles.stackFull}>
          <Ux4gResultList
            title='KYC Verification'
            statusTag='Completed'
            tagColorScheme='success'
            initialExpanded={true}
            detailsColumns={2}
            details={[
              { label: 'Verified On', value: '10 Aug 2026' },
              { label: 'Method', value: 'DigiLocker + OTP' },
              { label: 'Verifier', value: 'Automated Engine' },
              { label: 'Confidence', value: '98%', valueColor: '#16A34A', isBold: true },
            ]}
            expandedChild={<Text style={styles.expandedNote}>No manual intervention required.</Text>}
          />
        </View>`;
  }

  return `        <View style={styles.stackFull}>
          <Ux4gResultList
            title='Service Application'
            actionButtonText='Open'
            details={[
              { label: 'Applicant', value: 'Priya Verma' },
              { label: 'Service', value: 'Birth Certificate' },
              { label: 'Submitted', value: '08 Aug 2026' },
              { label: 'Status', value: 'Pending Review' },
            ]}
          />
        </View>`;
};

export const ResultListDoc: React.FC<ResultListDocProps> = ({ isDark, story = 'result-list-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const activeStory = normalizeStory(story);
  const config = storyMeta[activeStory];
  const codeString = useMemo(() => getStoryCode(activeStory), [activeStory]);

  const renderStoryPreview = () => {
    const snackCodeString = `import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ux4gResultList, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
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
    padding: 20,
  },
  stackFull: {
    width: '100%',
    gap: 12,
  },
  metadataCard: {
    width: '100%',
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    padding: 4,
  },
  expandedNote: {
    marginTop: 8,
    fontSize: 13,
    color: '#6B7280',
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gResultList%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '640px', border: 'none', borderRadius: '8px' }}
        title='Expo Snack Result List Preview'
      />
    );
  };

  const propsData = [
    { name: 'title', type: 'string', default: 'required', desc: 'Primary heading for the result row.', required: true },
    { name: 'titleTrailing', type: 'ReactNode', default: 'undefined', desc: 'Widget rendered inline after title.', required: false },
    { name: 'statusTag', type: 'string', default: 'undefined', desc: 'Optional status text shown as a tag.', required: false },
    { name: 'tagColorScheme', type: "'neutral' | 'brand' | 'success' | 'warning' | 'error' | 'info'", default: "'neutral'", desc: 'Color scheme for status tag.', required: false },
    { name: 'metadataSegments', type: 'Ux4gPillSegment[]', default: 'undefined', desc: 'Segmented pill metadata row.', required: false },
    { name: 'customMetadata', type: 'ReactNode', default: 'undefined', desc: 'Custom metadata widget replacing segments.', required: false },
    { name: 'actionButtonText', type: 'string', default: 'undefined', desc: 'Action button label on right side.', required: false },
    { name: 'onActionPressed', type: '() => void', default: 'undefined', desc: 'Action button press handler.', required: false },
    { name: 'details', type: 'Ux4gResultDetail[]', default: '[]', desc: 'Details grid shown when expanded.', required: false },
    { name: 'detailsColumns', type: 'number', default: '2', desc: 'Number of detail columns on wide layouts.', required: false },
    { name: 'expandedChild', type: 'ReactNode', default: 'undefined', desc: 'Additional custom content in expanded area.', required: false },
    { name: 'initialExpanded', type: 'boolean', default: 'false', desc: 'Initial expanded/collapsed state.', required: false },
    { name: 'onToggle', type: '(expanded: boolean) => void', default: 'undefined', desc: 'Called when expansion toggles.', required: false },
    { name: 'showBottomDivider', type: 'boolean', default: 'true', desc: 'Controls bottom divider visibility.', required: false },
    { name: 'contentPadding', type: 'number', default: '16', desc: 'Internal content padding for header and body.', required: false },
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
                <CodeBlock code={codeString} language='TSX' filename='ResultListExample.tsx' />
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

export default ResultListDoc;
