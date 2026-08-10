import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface EmptyStateDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const EmptyStateDoc: React.FC<EmptyStateDocProps> = ({
  isDark,
  story = 'empty-state-basic',
}) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import { Ux4gEmptyState, Ux4gIcons } from 'ux4g-react-native-design-system';`);
    lines.push('');

    if (story === 'empty-state-variants') {
      lines.push('// Variant presets');
      lines.push('<Ux4gEmptyState variant="noResults" title="No results found" subtitle="Try a different keyword." />');
      lines.push('<Ux4gEmptyState variant="noData" title="No records available" subtitle="There is nothing to show yet." />');
      lines.push('<Ux4gEmptyState variant="comingSoon" title="Feature coming soon" subtitle="This module will be available shortly." />');
      lines.push('<Ux4gEmptyState variant="error" title="Unable to load" subtitle="Please check your network and retry." />');
    } else if (story === 'empty-state-action') {
      lines.push('// Action button + custom icon');
      lines.push('<Ux4gEmptyState');
      lines.push('  variant="error"');
      lines.push('  title="Something went wrong"');
      lines.push('  subtitle="Unable to fetch latest data."');
      lines.push('  buttonText="Retry"');
      lines.push('  onButtonPressed={() => {}}');
      lines.push('/>');
      lines.push('');
      lines.push('<Ux4gEmptyState');
      lines.push('  variant="custom"');
      lines.push('  icon={Ux4gIcons.verification({ size: 56 })}');
      lines.push('  title="All caught up"');
      lines.push('  subtitle="No pending tasks in this queue."');
      lines.push('/>');
    } else {
      lines.push('// Basic usage');
      lines.push('<Ux4gEmptyState');
      lines.push('  variant="noResults"');
      lines.push('  title="No results found"');
      lines.push('  subtitle="Did you mean driving license or ration card?"');
      lines.push('  buttonText="Clear filters"');
      lines.push('  onButtonPressed={() => {}}');
      lines.push('/>');
    }

    return lines.join('\n');
  }, [story]);

  const renderStoryPreview = () => {
    let componentsSnippet = '';

    if (story === 'empty-state-variants') {
      componentsSnippet = `        <Ux4gEmptyState
          variant="noResults"
          title="No results found"
          subtitle="Try a different keyword."
        />

        <View style={{ height: 20 }} />

        <Ux4gEmptyState
          variant="noData"
          title="No records available"
          subtitle="There is nothing to show yet."
        />

        <View style={{ height: 20 }} />

        <Ux4gEmptyState
          variant="comingSoon"
          title="Feature coming soon"
          subtitle="This module will be available shortly."
        />

        <View style={{ height: 20 }} />

        <Ux4gEmptyState
          variant="error"
          title="Unable to load"
          subtitle="Please check your network and retry."
        />`;
    } else if (story === 'empty-state-action') {
      componentsSnippet = `        <Ux4gEmptyState
          variant="error"
          title="Something went wrong"
          subtitle="Unable to fetch latest data."
          buttonText="Retry"
          onButtonPressed={() => {}}
        />

        <View style={{ height: 24 }} />

        <Ux4gEmptyState
          variant="custom"
          icon={Ux4gIcons.verification({ size: 56 })}
          title="All caught up"
          subtitle="No pending tasks in this queue."
        />`;
    } else {
      componentsSnippet = `        <Ux4gEmptyState
          variant="noResults"
          title="No results found"
          subtitle="Did you mean driving license or ration card?"
          buttonText="Clear filters"
          onButtonPressed={() => {}}
        />`;
    }

    const snackCodeString = `import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Ux4gEmptyState, Ux4gIcons, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <ScrollView contentContainerStyle={styles.container}>
${componentsSnippet}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center'
  }
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gEmptyState%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.2,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '600px', border: 'none', borderRadius: '8px' }}
        title="Expo Snack EmptyState Preview"
      />
    );
  };

  const propsData = [
    { name: 'title', type: 'string', default: '—', desc: 'Primary message.', required: true },
    { name: 'variant', type: "'noResults' | 'noData' | 'comingSoon' | 'error' | 'custom'", default: "'custom'", desc: 'Semantic preset for the empty state.', required: false },
    { name: 'subtitle', type: 'string', default: 'undefined', desc: 'Secondary message.', required: false },
    { name: 'description', type: 'string', default: 'undefined', desc: 'Descriptive text.', required: false },
    { name: 'icon', type: 'ReactNode', default: 'undefined', desc: 'Icon displayed above title.', required: false },
    { name: 'iconSize', type: 'number', default: '48', desc: 'Size of the top icon.', required: false },
    { name: 'iconColor', type: 'string', default: 'theme.colors.primary', desc: 'Color of the top icon.', required: false },
    { name: 'titleStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Custom style for the title.', required: false },
    { name: 'bodyStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Custom style for subtitle and description.', required: false },
    { name: 'buttonText', type: 'string', default: 'undefined', desc: 'CTA button label.', required: false },
    { name: 'onButtonPressed', type: '() => void', default: 'undefined', desc: 'CTA button callback.', required: false },
    { name: 'buttonSize', type: "'small' | 'medium' | 'large'", default: "'small'", desc: 'Size of the CTA button.', required: false },
    { name: 'buttonLeadingIcon', type: 'Ux4gIconProp', default: 'undefined', desc: 'Icon shown inside the CTA button.', required: false },
    { name: 'padding', type: 'number', default: '24', desc: 'Padding around the whole component.', required: false },
    { name: 'bodyHorizontalPadding', type: 'number', default: '24', desc: 'Extra horizontal padding for text.', required: false },
    { name: 'containerStyle', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Style override for outer container.', required: false },
    { name: 'testID', type: 'string', default: 'undefined', desc: 'Test identifier for automation.', required: false },
  ];

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Empty State</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Empty state layout with semantic variant icons, clear messaging, and optional recovery action.
        </p>
        <p className="wb-subtitle" style={{ marginTop: 6 }}>
          <span style={{ color: '#E11D48', fontWeight: 700 }}>*</span> marks required props.
        </p>
      </div>

      <div className="wb-body">
        <div className="wb-main">
          <div className="wb-tab-bar">
            <button
              className={`wb-tab ${activeMainTab === 'preview' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('preview')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">visibility</span> Preview
            </button>
            <button
              className={`wb-tab ${activeMainTab === 'code' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('code')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">code</span> Code
            </button>
            <button
              className={`wb-tab ${activeMainTab === 'props' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('props')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">tune</span> Props
            </button>
          </div>

          <div className="wb-content">
            {activeMainTab === 'preview' && (
              <Ux4gThemeProvider isDark={isDark}>
                <div className={`wb-preview-area ${isDark ? 'dark' : ''}`}>
                  {renderStoryPreview()}
                </div>
              </Ux4gThemeProvider>
            )}

            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                <CodeBlock code={codeString} language="TSX" filename="EmptyStateExample.tsx" />
              </div>
            )}

            {activeMainTab === 'props' && (
              <div className="wb-props-area">
                <table className="props-table">
                  <thead>
                    <tr>
                      <th>Prop</th>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Default</th>
                    </tr>
                  </thead>
                  <tbody>
                    {propsData.map((prop) => (
                      <tr key={prop.name}>
                        <td>
                          <span className="prop-name">
                            {prop.name}
                            {prop.required ? <span style={{ color: '#E11D48' }}> *</span> : null}
                          </span>
                        </td>
                        <td><span className="prop-type">{prop.type}</span></td>
                        <td>{prop.desc}</td>
                        <td><span className="prop-default">{prop.default}</span></td>
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

export default EmptyStateDoc;
