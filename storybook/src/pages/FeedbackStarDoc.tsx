import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface FeedbackStarDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code' | 'props';

export const FeedbackStarDoc: React.FC<FeedbackStarDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push("import { Ux4gFeedbackFormStar } from 'ux4g-react-native-design-system';");
    lines.push('');
    lines.push('<Ux4gFeedbackFormStar');
    lines.push('  onSubmit={(rating, selectedOptions, comment) => console.log(rating, selectedOptions, comment)}');
    lines.push('/>');
    return lines.join('\n');
  }, []);

  const renderStoryPreview = () => {
    const snackCodeString = `import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gFeedbackFormStar, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={styles.container}>
        <Ux4gFeedbackFormStar
          onSubmit={(rating, selectedOptions, comment) => console.log(rating, selectedOptions, comment)}
          onSkip={() => console.log('Skipped')}
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gFeedbackFormStar%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '640px', border: 'none', borderRadius: '8px' }}
        title="Expo Snack Feedback Star Preview"
      />
    );
  };

  const propsData = [
    { name: 'title', type: 'string', default: "'Rate your experience'", desc: 'Top heading text.', required: false },
    { name: 'improvementTitle', type: 'string', default: "'What can we improve?'", desc: 'Heading above improvement chips.', required: false },
    { name: 'commentPlaceholder', type: 'string', default: "'Tell us more about your experience'", desc: 'Placeholder for comment box.', required: false },
    { name: 'submitButtonText', type: 'string', default: "'Submit'", desc: 'Primary button text.', required: false },
    { name: 'skipButtonText', type: 'string', default: "'Skip'", desc: 'Skip button text.', required: false },
    { name: 'successTitle', type: 'string', default: "'Feedback submitted'", desc: 'Success view title.', required: false },
    { name: 'successMessage', type: 'string', default: 'default success copy', desc: 'Success view message.', required: false },
    { name: 'improvementOptions', type: 'string[]', default: "['Speed','Design','Reliability','Features','Other']", desc: 'Selectable improvement options.', required: false },
    { name: 'maxStars', type: 'number', default: '5', desc: 'Number of stars.', required: false },
    { name: 'initialRating', type: 'number', default: '0', desc: 'Initial star rating value.', required: false },
    { name: 'minWords', type: 'number', default: '0', desc: 'Minimum words required in comment.', required: false },
    { name: 'maxLength', type: 'number', default: '200', desc: 'Max comment length.', required: false },
    { name: 'onSubmit', type: '(rating: number, selectedOptions: string[], comment: string) => void', default: 'undefined', desc: 'Submit callback.', required: false },
    { name: 'onSkip', type: '() => void', default: 'undefined', desc: 'Skip callback.', required: false },
    { name: 'onCloseSuccess', type: '() => void', default: 'undefined', desc: 'Close callback for success state.', required: false },
    { name: 'activeRatingColor', type: 'string', default: 'auto by rating', desc: 'Active star color override.', required: false },
    { name: 'lowRatingColor', type: 'string', default: 'UX4GColors.red600', desc: 'Low rating color.', required: false },
    { name: 'highRatingColor', type: 'string', default: 'UX4GColors.yellow600', desc: 'High rating color.', required: false },
    { name: 'inactiveRatingColor', type: 'string', default: 'theme-based muted', desc: 'Inactive star color.', required: false },
    { name: 'successIconColor', type: 'string', default: 'theme success color', desc: 'Success icon color.', required: false },
    { name: 'successBackgroundColor', type: 'string', default: 'undefined', desc: 'Success background override.', required: false },
    { name: 'lowRatingThreshold', type: 'number', default: '2', desc: 'Threshold for low/high color split.', required: false },
  ];

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">feedbackformstar</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">Star rating feedback form variant.</p>
        <p className="wb-subtitle" style={{ marginTop: 6 }}>This component has no required props.</p>
      </div>

      <div className="wb-body">
        <div className="wb-main">
          <div className="wb-tab-bar">
            <button className={`wb-tab ${activeMainTab === 'preview' ? 'active' : ''}`} onClick={() => setActiveMainTab('preview')} type="button"><span className="material-symbols-outlined wb-tab-icon">visibility</span> Preview</button>
            <button className={`wb-tab ${activeMainTab === 'code' ? 'active' : ''}`} onClick={() => setActiveMainTab('code')} type="button"><span className="material-symbols-outlined wb-tab-icon">code</span> Code</button>
            <button className={`wb-tab ${activeMainTab === 'props' ? 'active' : ''}`} onClick={() => setActiveMainTab('props')} type="button"><span className="material-symbols-outlined wb-tab-icon">tune</span> Props</button>
          </div>

          <div className="wb-tab-content">
            {activeMainTab === 'preview' && (
              <Ux4gThemeProvider isDark={isDark}>
                <div className={`wb-preview-area ${isDark ? 'dark' : ''}`}>{renderStoryPreview()}</div>
              </Ux4gThemeProvider>
            )}
            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                <CodeBlock code={codeString} language="TSX" filename="FeedbackStarExample.tsx" />
              </div>
            )}
            {activeMainTab === 'props' && (
              <div className="wb-props-area">
                <table className="props-table">
                  <thead><tr><th>Prop</th><th>Type</th><th>Description</th><th>Default</th></tr></thead>
                  <tbody>
                    {propsData.map((p) => (
                      <tr key={p.name}>
                        <td><span className="prop-name">{p.name}{p.required ? <span style={{ color: '#E11D48' }}> *</span> : null}</span></td>
                        <td><span className="prop-type">{p.type}</span></td>
                        <td>{p.desc}</td>
                        <td><span className="prop-default">{p.default}</span></td>
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

export default FeedbackStarDoc;
