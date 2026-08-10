import React, { useState, useMemo } from 'react';
import { Ux4gStatusBanner, Ux4gBannerVariant } from '../../../src/components/status-banner/StatusBanner';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface StatusBannerDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const StatusBannerDoc: React.FC<StatusBannerDocProps> = ({ isDark, story = 'status-banner-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import { Ux4gStatusBanner } from 'ux4g-react-native-design-system';`);
    lines.push('');
    lines.push('// Warning Solid Banner');
    lines.push('<Ux4gStatusBanner');
    lines.push('  variant="warningSolid"');
    lines.push('  title="Action Needed"');
    lines.push('  subtitle="Please review your draft submission before the deadline."');
    lines.push('/>');
    lines.push('');
    lines.push('// Success Light Banner');
    lines.push('<Ux4gStatusBanner');
    lines.push('  variant="successLight"');
    lines.push('  title="Draft Saved Successfully"');
    lines.push('  subtitle="Your changes have been synced to the cloud."');
    lines.push('/>');
    lines.push('');
    lines.push('// Error Light Banner with Dismiss');
    lines.push('<Ux4gStatusBanner');
    lines.push('  variant="errorLight"');
    lines.push('  title="Draft Expired"');
    lines.push('  subtitle="This application draft expired on 9 April 2026."');
    lines.push('  onDismiss={() => console.log("Dismissed")}\n/>');
    return lines.join('\n');
  }, []);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    let componentsSnippet = '';

    if (story === 'status-banner-draft') {
      componentsSnippet = `        <Ux4gStatusBanner
          variant="warningSolid"
          title="Draft Application Pending"
          subtitle="Complete your profile details to submit."
        />
        
        <View style={{ height: 16 }} />
        
        <Ux4gStatusBanner
          variant="successLight"
          title="Draft Saved at 3:14 PM"
          subtitle="Auto-save enabled"
        />
        
        <View style={{ height: 16 }} />
        
        <Ux4gStatusBanner
          variant="errorLight"
          title="Draft Expired on 9 April 2026"
          subtitle="Please start a new application draft."
        />`;
    } else if (story === 'status-banner-variants') {
      componentsSnippet = `        <Ux4gStatusBanner variant="primaryLight" title="Primary Banner" subtitle="Information notice" />
        <View style={{ height: 12 }} />
        <Ux4gStatusBanner variant="infoLight" title="Info Banner" subtitle="System maintenance scheduled" />
        <View style={{ height: 12 }} />
        <Ux4gStatusBanner variant="successLight" title="Success Banner" subtitle="Operation completed" />
        <View style={{ height: 12 }} />
        <Ux4gStatusBanner variant="warningLight" title="Warning Light" subtitle="Low storage warning" />
        <View style={{ height: 12 }} />
        <Ux4gStatusBanner variant="errorLight" title="Error Light" subtitle="Network request failed" />`;
    } else {
      componentsSnippet = `        <Ux4gStatusBanner
          variant="warningSolid"
          title="Draft Action Needed"
          subtitle="Your application draft requires verification."
        />
        
        <View style={{ height: 16 }} />
        
        <Ux4gStatusBanner
          variant="infoLight"
          title="System Notification"
          subtitle="New features are now available in your portal."
        />
        
        <View style={{ height: 16 }} />
        
        <Ux4gStatusBanner
          variant="successLight"
          title="Draft Saved Successfully"
          subtitle="Synced at 3:14 PM"
        />`;
    }

    const snackCodeString = `import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gStatusBanner, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={styles.container}>
${componentsSnippet}
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24
  }
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gStatusBanner%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.2,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '600px', border: 'none', borderRadius: '8px' }}
        title="Expo Snack StatusBanner Preview"
      />
    );
  };

  /* ── Props Table Data ── */
  const propsData = [
    { name: 'variant', type: 'Ux4gBannerVariant', default: "'infoLight'", desc: 'Visual variant theme (`warningSolid`, `warningLight`, `errorLight`, `successLight`, `infoLight`, `primaryLight`, etc.)' },
    { name: 'title', type: 'string', default: '—', desc: 'Main title text header' },
    { name: 'subtitle', type: 'string', default: 'undefined', desc: 'Secondary description text' },
    { name: 'leadingIcon', type: 'ReactNode', default: 'undefined', desc: 'Custom leading icon widget' },
    { name: 'trailingIcon', type: 'ReactNode', default: 'undefined', desc: 'Custom trailing icon widget' },
    { name: 'badge', type: 'ReactNode', default: 'undefined', desc: 'Badge displayed next to title' },
    { name: 'actions', type: 'ReactNode[]', default: 'undefined', desc: 'Action buttons displayed at bottom of banner' },
    { name: 'onDismiss', type: '() => void', default: 'undefined', desc: 'Dismiss callback when close icon is tapped' },
  ];

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Status Banner</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Prominent alert banner used for draft statuses, system warnings, errors, success notifications, and workflow action prompts.
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
                <CodeBlock code={codeString} language="TSX" filename="StatusBannerExample.tsx" />
              </div>
            )}

            {activeMainTab === 'props' && (
              <div className="wb-props-area">
                <table className="wb-props-table">
                  <thead>
                    <tr>
                      <th>Prop</th>
                      <th>Type</th>
                      <th>Default</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {propsData.map((prop) => (
                      <tr key={prop.name}>
                        <td><code className="wb-prop-name">{prop.name}</code></td>
                        <td><code className="wb-prop-type">{prop.type}</code></td>
                        <td><code className="wb-prop-default">{prop.default}</code></td>
                        <td>{prop.desc}</td>
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
