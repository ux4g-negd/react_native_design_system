import React, { useState, useMemo } from 'react';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface AppHeaderDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const AppHeaderDoc: React.FC<AppHeaderDocProps> = ({ isDark, story = 'app-header-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import { View, Text } from 'react-native';`);
    lines.push(`import { Ux4gAppHeader, Ux4gIcons } from 'ux4g-react-native-design-system';`);
    lines.push('');
    if (story === 'app-header-back') {
      lines.push('// With Back Button');
      lines.push('<Ux4gAppHeader');
      lines.push('  title="App Header"');
      lines.push('  showBackButton={true}');
      lines.push('  showAvatar={true}');
      lines.push('  actions={[');
      lines.push('    { icon: "notifications", onPressed: () => console.log("Notification") },');
      lines.push('    { icon: "settings", onPressed: () => console.log("Settings") }');
      lines.push('  ]}');
      lines.push('/>');
    } else if (story === 'app-header-filled') {
      lines.push('// Filled Variant');
      lines.push('<Ux4gAppHeader');
      lines.push('  title="Page Title"');
      lines.push('  variant="filled"');
      lines.push('  showBackButton={true}');
      lines.push('  actions={[');
      lines.push('    { icon: "search", onPressed: () => console.log("Search") }');
      lines.push('  ]}');
      lines.push('/>');
    } else if (story === 'app-header-custom-leading') {
      lines.push('// Custom Leading Logos & Custom Action Menu');
      lines.push('<Ux4gAppHeader');
      lines.push('  title="Title"');
      lines.push('  showAvatar={true}');
      lines.push('  avatarInitials="JD"');
      lines.push('  leadingWidgets={[');
      lines.push('    <View style={{ flexDirection: "row", alignItems: "center" }} key="leading">');
      lines.push('      {Ux4gIcons.nationalEmblemLogo({ size: 26 })}');
      lines.push('      <View style={{ width: 1, height: 18, backgroundColor: "#D0D0D0", marginHorizontal: 8 }} />');
      lines.push('      {Ux4gIcons.union({ size: 20 })}');
      lines.push('    </View>');
      lines.push('  ]}');
      lines.push('  actions={[');
      lines.push('    { icon: "scan", onPressed: () => {} }');
      lines.push('  ]}');
      lines.push('/>');
    } else {
      lines.push('// Basic App Header');
      lines.push('<Ux4gAppHeader');
      lines.push('  title="App Header"');
      lines.push('  showAvatar={true}');
      lines.push('  leadingWidgets={[');
      lines.push('    <Text style={{ fontSize: 22 }} key="menu">☰</Text>');
      lines.push('  ]}');
      lines.push('  actions={[');
      lines.push('    { icon: "notifications", onPressed: () => {} },');
      lines.push('    { icon: "settings", onPressed: () => {} }');
      lines.push('  ]}');
      lines.push('/>');
    }
    return lines.join('\n');
  }, [story]);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    let componentsSnippet = '';

    if (story === 'app-header-back') {
      componentsSnippet = `        <Ux4gAppHeader
          title="App Header"
          showBackButton={true}
          showAvatar={true}
          actions={[
            { icon: 'notifications', onPressed: () => console.log('Notification pressed') },
            { icon: 'settings', onPressed: () => console.log('Settings pressed') }
          ]}
        />`;
    } else if (story === 'app-header-filled') {
      componentsSnippet = `        <Ux4gAppHeader
          title="Page Title"
          variant="filled"
          showBackButton={true}
          actions={[
            { icon: 'search', onPressed: () => console.log('Search pressed') }
          ]}
        />`;
    } else if (story === 'app-header-custom-leading') {
      componentsSnippet = `        <Ux4gAppHeader
          title="Title"
          showAvatar={true}
          avatarInitials="JD"
          leadingWidgets={[
            <View style={{ flexDirection: 'row', alignItems: 'center' }} key="leading">
              {Ux4gIcons.nationalEmblemLogo({ size: 26 })}
              <View style={{ width: 1, height: 18, backgroundColor: '#D0D0D0', marginHorizontal: 8 }} />
              {Ux4gIcons.union({ size: 20 })}
            </View>
          ]}
          actions={[
            { icon: 'scan', onPressed: () => console.log('Scan pressed') }
          ]}
        />
        
        <View style={{ height: 24 }} />
        
        <Ux4gAppHeader
          title="Title"
          leadingWidgets={[
            <View style={{ flexDirection: 'row', alignItems: 'center' }} key="leading">
              {Ux4gIcons.nationalEmblemLogo({ size: 26 })}
              <View style={{ width: 1, height: 18, backgroundColor: '#D0D0D0', marginHorizontal: 8 }} />
              {Ux4gIcons.union({ size: 20 })}
            </View>
          ]}
          actions={[
            { icon: 'scan', onPressed: () => console.log('Scan pressed') },
            {
              customWidget: (
                <View key="menu" style={{ width: 36, height: 36, borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 16, color: ${isDark ? "'#E6E1E5'" : "'#1C1B1F'"} }}>☰</Text>
                </View>
              )
            }
          ]}
        />`;
    } else {
      componentsSnippet = `        <Ux4gAppHeader
          title="App Header"
          showAvatar={true}
          leadingWidgets={[
            <Text style={{ fontSize: 22, color: ${isDark ? "'#E6E1E5'" : "'#1C1B1F'"} }} key="menu">☰</Text>
          ]}
          actions={[
            { icon: 'notifications', onPressed: () => console.log('Notification pressed') },
            { icon: 'settings', onPressed: () => console.log('Settings pressed') }
          ]}
        />`;
    }

    const snackCodeString = `import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ux4gAppHeader, Ux4gIcons, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

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
    padding: 20
  }
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gAppHeader%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.2,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '600px', border: 'none', borderRadius: '8px' }}
        title="Expo Snack AppHeader Preview"
      />
    );
  };

  /* ── Props Table Data ── */
  const propsData = [
    { name: 'title', type: 'string', default: "'Title'", desc: 'Header title text.', required: false },
    { name: 'variant', type: "'light' | 'filled' | 'outlined'", default: "'outlined'", desc: 'Visual variant of the app header.', required: false },
    { name: 'showBackButton', type: 'boolean', default: 'false', desc: 'Whether to display the back arrow button.', required: false },
    { name: 'onBackPressed', type: '() => void', default: 'undefined', desc: 'Callback fired when back button is pressed.', required: false },
    { name: 'leadingWidgets', type: 'ReactNode[]', default: 'undefined', desc: 'Custom leading widgets/logo row.', required: false },
    { name: 'actions', type: 'Ux4gAppHeaderAction[]', default: 'undefined', desc: 'Array of trailing action buttons/icons.', required: false },
    { name: 'avatar', type: 'ReactNode', default: 'undefined', desc: 'Custom avatar widget.', required: false },
    { name: 'avatarSize', type: "'xs' | 's' | 'm' | 'l' | 'xl'", default: "'s'", desc: 'Size used when rendering default avatar.', required: false },
    { name: 'showAvatar', type: 'boolean', default: 'false', desc: 'Whether to display default leading avatar.', required: false },
    { name: 'avatarImageUrl', type: 'string', default: 'undefined', desc: 'Avatar image URL for default avatar.', required: false },
    { name: 'avatarInitials', type: 'string', default: 'undefined', desc: 'Initials used when avatar image is absent.', required: false },
    { name: 'onAvatarPressed', type: '() => void', default: 'undefined', desc: 'Callback fired when avatar is tapped.', required: false },
    { name: 'titleWidget', type: 'ReactNode', default: 'undefined', desc: 'Custom title widget replacing text title.', required: false },
    { name: 'titleStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Style override for title text.', required: false },
    { name: 'backgroundColor', type: 'string', default: 'variant-based token', desc: 'Header background color override.', required: false },
    { name: 'foregroundColor', type: 'string', default: 'variant-based token', desc: 'Foreground color for title/icons.', required: false },
    { name: 'borderColor', type: 'string', default: 'onSurface @ 12%', desc: 'Bottom border color for outlined variant.', required: false },
    { name: 'height', type: 'number', default: '48/56 responsive', desc: 'Explicit header height override.', required: false },
    { name: 'horizontalPadding', type: 'number', default: '12', desc: 'Horizontal padding inside header.', required: false },
    { name: 'leadingSpacing', type: 'number', default: '8', desc: 'Spacing between leading section and title.', required: false },
    { name: 'actionSpacing', type: 'number', default: '4', desc: 'Spacing between action items.', required: false },
    { name: 'elevation', type: 'number', default: '0', desc: 'Android elevation/iOS shadow intensity.', required: false },
    { name: 'useSafeArea', type: 'boolean', default: 'true', desc: 'Wrap content with SafeAreaView.', required: false },
    { name: 'testID', type: 'string', default: 'undefined', desc: 'Test identifier for automation.', required: false },
  ];

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">App Header</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Top app bar navigation header supporting screen titles, back buttons, avatars, leading national emblem logos, and trailing actions.
        </p>
        <p className="wb-subtitle" style={{ marginTop: 6 }}>
          This component has no required props.
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
                <CodeBlock code={codeString} language="TSX" filename="AppHeaderExample.tsx" />
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
