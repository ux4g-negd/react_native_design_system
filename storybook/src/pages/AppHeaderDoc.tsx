import React, { useState, useMemo } from 'react';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { Ux4gIcons } from '../../../src/foundation/icons';
import { CodeBlock } from '../components/CodeBlock';
import { View, Text } from 'react-native';

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
    lines.push(`import { View } from 'react-native';`);
    lines.push(`import { Ux4gAppHeader, Ux4gIcons } from 'ux4g-react-native-design-system';`);
    lines.push('');
    if (story === 'app-header-back') {
      lines.push('// With Back Button');
      lines.push('<Ux4gAppHeader');
      lines.push('  title="App Header"');
      lines.push('  showBackButton={true}');
      lines.push('  showAvatar={true}');
      lines.push('  actions={[');
      lines.push('    { icon: "notifications", onPressed: () => {} },');
      lines.push('    { icon: "settings", onPressed: () => {} }');
      lines.push('  ]}');
      lines.push('/>');
    } else if (story === 'app-header-filled') {
      lines.push('// Filled Variant');
      lines.push('<Ux4gAppHeader');
      lines.push('  title="Page Title"');
      lines.push('  variant="filled"');
      lines.push('  showBackButton={true}');
      lines.push('  actions={[');
      lines.push('    { icon: "search", onPressed: () => {} }');
      lines.push('  ]}');
      lines.push('/>');
    } else if (story === 'app-header-custom-leading') {
      lines.push('// Custom Leading Widgets with Avatar');
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
      lines.push('');
      lines.push('// Custom Leading Widgets with Outlined Action Button');
      lines.push('<Ux4gAppHeader');
      lines.push('  title="Title"');
      lines.push('  leadingWidgets={[');
      lines.push('    <View style={{ flexDirection: "row", alignItems: "center" }} key="leading">');
      lines.push('      {Ux4gIcons.nationalEmblemLogo({ size: 26 })}');
      lines.push('      <View style={{ width: 1, height: 18, backgroundColor: "#D0D0D0", marginHorizontal: 8 }} />');
      lines.push('      {Ux4gIcons.union({ size: 20 })}');
      lines.push('    </View>');
      lines.push('  ]}');
      lines.push('  actions={[');
      lines.push('    { icon: "scan", onPressed: () => {} },');
      lines.push('    {');
      lines.push('      customWidget: (');
      lines.push('        <View style={{ width: 36, height: 36, borderWidth: 1, borderColor: "#E0E0E0", borderRadius: 8, justifyContent: "center", alignItems: "center" }}>');
      lines.push('          <Text style={{ fontSize: 16 }}>☰</Text>');
      lines.push('        </View>');
      lines.push('      )');
      lines.push('    }');
      lines.push('  ]}');
      lines.push('/>');
    } else {
      lines.push('// Basic');
      lines.push('<Ux4gAppHeader');
      lines.push('  title="App Header"');
      lines.push('  showAvatar={true}');
      lines.push('  leadingWidgets={[');
      lines.push('    <Text style={{ fontSize: 22, color: "#1C1B1F" }} key="menu">☰</Text>');
      lines.push('  ]}');
      lines.push('  actions={[');
      lines.push('    { icon: "notifications", onPressed: () => {} },');
      lines.push('    { icon: "settings", onPressed: () => {} }');
      lines.push('  ]}');
      lines.push('/>');
    }
    return lines.join('\n');
  }, [story]);

  /* ── Live Preview ── */
  const renderStoryPreview = () => {
    return (
      <Ux4gThemeProvider isDark={isDark}>
        <View style={{ padding: 24, backgroundColor: isDark ? '#1C1B1F' : '#F8F9FA', borderRadius: 12, width: '100%' }}>
          {story === 'app-header-back' && (
            <Ux4gAppHeader 
              title="App Header" 
              showBackButton={true}
              showAvatar={true}
              actions={[
                { icon: 'notifications', onPressed: () => {} },
                { icon: 'settings', onPressed: () => {} }
              ]}
            />
          )}

          {story === 'app-header-filled' && (
            <Ux4gAppHeader 
              title="Page Title" 
              variant="filled" 
              showBackButton={true}
              actions={[
                { icon: 'search', onPressed: () => {} }
              ]}
            />
          )}

          {story === 'app-header-custom-leading' && (
            <View style={{ gap: 24 }}>
              <Ux4gAppHeader 
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
                  { icon: 'scan', onPressed: () => {} }
                ]}
              />
              <View style={{ height: 16 }} />
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
                  { icon: 'scan', onPressed: () => {} },
                  {
                    customWidget: (
                      <View key="menu" style={{ width: 36, height: 36, borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, color: isDark ? '#E6E1E5' : '#1C1B1F' }}>☰</Text>
                      </View>
                    )
                  }
                ]}
              />
            </View>
          )}

          {story === 'app-header-basic' && (
            <Ux4gAppHeader 
              title="App Header" 
              showAvatar={true} 
              leadingWidgets={[
                <Text style={{ fontSize: 22, color: isDark ? '#E6E1E5' : '#1C1B1F' }} key="menu">☰</Text>
              ]}
              actions={[
                { icon: 'notifications', onPressed: () => {} },
                { icon: 'settings', onPressed: () => {} }
              ]}
            />
          )}
        </View>
      </Ux4gThemeProvider>
    );
  };

  /* ── Props Table Data ── */
  const propsData = [
    { name: 'title', type: 'string', default: "'Title'", desc: 'Header title text' },
    { name: 'variant', type: "'light' | 'filled' | 'outlined'", default: "'outlined'", desc: 'Visual variant of the header' },
    { name: 'showBackButton', type: 'boolean', default: 'false', desc: 'Whether to display the back arrow button' },
    { name: 'actions', type: 'Ux4gAppHeaderAction[]', default: '—', desc: 'Array of trailing action buttons/icons' },
    { name: 'showAvatar', type: 'boolean', default: 'false', desc: 'Whether to display a leading avatar' },
    { name: 'avatarInitials', type: 'string', default: '—', desc: 'Initials displayed on avatar if no image' },
  ];

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">
            {story === 'app-header-back' ? 'Back Button' : story === 'app-header-filled' ? 'Filled' : story === 'app-header-custom-leading' ? 'Custom Leading Widgets' : 'Basic'}
          </h1>
          <span className="wb-badge">AppHeader</span>
        </div>
        <p className="wb-subtitle">
          Top app bar component providing navigation and screen titles.
        </p>
      </div>

      <div className="wb-body">
        <div className="wb-main" style={{ flex: 1, paddingRight: 0 }}>
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
