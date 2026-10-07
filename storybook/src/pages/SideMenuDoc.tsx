import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface SideMenuDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const SideMenuDoc: React.FC<SideMenuDocProps> = ({ isDark, story = 'side-menu-variants' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import React, { useState } from 'react';`);
    lines.push(`import { View, StyleSheet } from 'react-native';`);
    lines.push(`import { Ux4gSideMenu, Ux4gButton } from 'ux4g-react-native-components';`);
    lines.push('');
    lines.push('export default function SideMenuExample() {');
    lines.push('  const [isOpen, setIsOpen] = useState(false);');
    lines.push('');
    lines.push('  return (');
    lines.push('    <View style={styles.container}>');
    lines.push('      <Ux4gButton text="Open Navigation Drawer" onPress={() => setIsOpen(true)} />');
    lines.push('');
    lines.push('      <Ux4gSideMenu');
    lines.push('        isOpen={isOpen}');
    lines.push('        onClose={() => setIsOpen(false)}');

    if (story === 'side-menu-services') {
      lines.push('        variant="department-services"');
      lines.push('        title="Revenue Department"');
      lines.push('        subtitle="Kanpur division"');
      lines.push('        actionCard={{');
      lines.push('          tag: "ACTION REQUIRED",');
      lines.push('          title: "Verify your Aadhaar",');
      lines.push('          description: "Complete identity verification to continue.",');
      lines.push('          buttonText: "Verify now",');
      lines.push('          onButtonPress: () => console.log("Verify pressed"),');
      lines.push('        }}');
    } else if (story === 'side-menu-switcher') {
      lines.push('        variant="department-switcher"');
      lines.push('        title="Departments"');
      lines.push('        subtitle="Choose a department to work in."');
    } else if (story === 'side-menu-mailbox') {
      lines.push('        variant="mailbox"');
      lines.push('        title="Mailbox"');
      lines.push('        subtitle="citizen@gov.in"');
    } else if (story === 'side-menu-profile') {
      lines.push('        variant="profile-summary"');
      lines.push('        profileSummary={{');
      lines.push('          name: "Ramesh Kumar",');
      lines.push('          roleOrDesignation: "Citizen Account",');
      lines.push('          avatarText: "RK",');
      lines.push('          metricText: "12 applications · 3 actions required",');
      lines.push('        }}');
    } else {
      lines.push('        variant="citizen"');
      lines.push('        user={{');
      lines.push('          name: "Ramesh Kumar",');
      lines.push('          roleOrEmail: "Citizen",');
      lines.push('          avatarText: "RK",');
      lines.push('        }}');
      lines.push('        footerBranding={{');
      lines.push('          title: "Revenue Department",');
      lines.push('          subtitle: "Government of India",');
      lines.push('        }}');
      lines.push('        onSignOut={() => console.log("Signed out")}');
    }

    lines.push('        onItemPress={(item) => {');
    lines.push('          console.log("Selected item:", item);');
    lines.push('          setIsOpen(false);');
    lines.push('        }}');
    lines.push('      />');
    lines.push('    </View>');
    lines.push('  );');
    lines.push('}');
    lines.push('');
    lines.push('const styles = StyleSheet.create({');
    lines.push('  container: { flex: 1, justifyContent: "center", alignItems: "center" },');
    lines.push('});');
    return lines.join('\n');
  }, [story]);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    let componentsSnippet = '';

    if (story === 'side-menu-citizen') {
      componentsSnippet = `        <Ux4gButton
          text="Open Citizen Profile Drawer"
          onPress={() => setIsOpen(true)}
        />
        <Ux4gSideMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          variant="citizen"
          user={{
            name: 'Ramesh Kumar',
            roleOrEmail: 'Citizen',
            avatarText: 'RK',
          }}
          footerBranding={{
            title: 'Revenue Department',
            subtitle: 'Government of India',
          }}
          onItemPress={(item) => {
            setCurrentScreen(item.label);
            setIsOpen(false);
          }}
          onSignOut={() => {
            setCurrentScreen('Signed Out');
            setIsOpen(false);
          }}
        />`;
    } else if (story === 'side-menu-services') {
      componentsSnippet = `        <Ux4gButton
          text="Open Department Services Drawer"
          onPress={() => setIsOpen(true)}
        />
        <Ux4gSideMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          variant="department-services"
          title="Revenue Department"
          subtitle="Kanpur division"
          actionCard={{
            tag: 'ACTION REQUIRED',
            title: 'Verify your Aadhaar',
            description: 'Complete identity verification to continue.',
            buttonText: 'Verify now',
            onButtonPress: () => alert('Verify pressed'),
          }}
          onItemPress={(item) => {
            setCurrentScreen(item.label);
            setIsOpen(false);
          }}
        />`;
    } else if (story === 'side-menu-switcher') {
      componentsSnippet = `        <Ux4gButton
          text="Open Department Switcher Drawer"
          onPress={() => setIsOpen(true)}
        />
        <Ux4gSideMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          variant="department-switcher"
          title="Departments"
          subtitle="Choose a department to work in."
          onItemPress={(item) => {
            setCurrentScreen(item.label);
            setIsOpen(false);
          }}
        />`;
    } else if (story === 'side-menu-mailbox') {
      componentsSnippet = `        <Ux4gButton
          text="Open Mailbox Drawer"
          onPress={() => setIsOpen(true)}
        />
        <Ux4gSideMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          variant="mailbox"
          title="Mailbox"
          subtitle="citizen@gov.in"
          onItemPress={(item) => {
            setCurrentScreen(item.label);
            setIsOpen(false);
          }}
        />`;
    } else if (story === 'side-menu-profile') {
      componentsSnippet = `        <Ux4gButton
          text="Open Centered Profile Drawer"
          onPress={() => setIsOpen(true)}
        />
        <Ux4gSideMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          variant="profile-summary"
          profileSummary={{
            name: 'Ramesh Kumar',
            roleOrDesignation: 'Citizen Account',
            avatarText: 'RK',
            metricText: '12 applications · 3 actions required',
          }}
          onItemPress={(item) => {
            setCurrentScreen(item.label);
            setIsOpen(false);
          }}
        />`;
    } else {
      // Default / All 5 Variants
      componentsSnippet = `        <View style={{ gap: 12, width: '100%', maxWidth: 320 }}>
          <Ux4gButton text="1. Open Citizen Profile Drawer" onPress={() => { setVariant('citizen'); setIsOpen(true); }} />
          <Ux4gButton text="2. Open Services Drawer" onPress={() => { setVariant('department-services'); setIsOpen(true); }} />
          <Ux4gButton text="3. Open Dept Switcher Drawer" onPress={() => { setVariant('department-switcher'); setIsOpen(true); }} />
          <Ux4gButton text="4. Open Mailbox Drawer" onPress={() => { setVariant('mailbox'); setIsOpen(true); }} />
          <Ux4gButton text="5. Open Centered Profile Drawer" onPress={() => { setVariant('profile-summary'); setIsOpen(true); }} />
        </View>
        <Ux4gSideMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          variant={variant}
          user={{
            name: 'Ramesh Kumar',
            roleOrEmail: 'Citizen',
            avatarText: 'RK',
          }}
          profileSummary={{
            name: 'Ramesh Kumar',
            roleOrDesignation: 'Citizen Account',
            avatarText: 'RK',
            metricText: '12 applications · 3 actions required',
          }}
          onItemPress={(item) => {
            setCurrentScreen(item.label);
            setIsOpen(false);
          }}
          onSignOut={() => {
            setCurrentScreen('Signed Out');
            setIsOpen(false);
          }}
        />`;
    }

    const snackCodeString = `import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ux4gSideMenu, Ux4gButton, Ux4gThemeProvider } from 'ux4g-react-native-components';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [variant, setVariant] = useState('citizen');
  const [currentScreen, setCurrentScreen] = useState('Home');

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={[styles.container, { backgroundColor: ${isDark ? "'#0F172A'" : "'#F8FAFC'"} }]}>
        <View style={styles.header}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: ${isDark ? "'#F8FAFC'" : "'#0F172A'"} }}>
            Current View: {currentScreen}
          </Text>
        </View>

${componentsSnippet}
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  header: {
    marginBottom: 20,
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=android&supportedPlatforms=ios,android&theme=${
      isDark ? 'dark' : 'light'
    }&name=Ux4gSideMenu%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-components@1.1.0,react-native-svg@*&code=${encodeURIComponent(
      snackCodeString
    )}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '600px', border: 'none', borderRadius: '8px' }}
        title="Expo Snack Preview"
      />
    );
  };

  /* ── Props Table Data ── */
  const propsData = [
    {
      name: 'isOpen',
      type: 'boolean',
      default: 'false',
      desc: 'Controls whether the drawer side menu is open and visible.',
      required: true,
    },
    {
      name: 'onClose',
      type: '() => void',
      default: 'undefined',
      desc: 'Callback fired when drawer backdrop is tapped or close icon is clicked.',
      required: true,
    },
    {
      name: 'variant',
      type: "'standard' | 'citizen' | 'department-services' | 'department-switcher' | 'mailbox' | 'profile-summary'",
      default: "'standard'",
      desc: 'High-level UX4G government navigation drawer preset.',
      required: false,
    },
    {
      name: 'position',
      type: "'left' | 'right'",
      default: "'left'",
      desc: 'Slide edge origin (left or right side).',
      required: false,
    },
    {
      name: 'user',
      type: 'Ux4gSideMenuUser',
      default: 'undefined',
      desc: 'User identity details (name, roleOrEmail, avatarText, badgeCount) for "citizen" header.',
      required: false,
    },
    {
      name: 'profileSummary',
      type: 'Ux4gSideMenuProfileSummary',
      default: 'undefined',
      desc: 'Centered avatar and application counts for "profile-summary" variant.',
      required: false,
    },
    {
      name: 'actionCard',
      type: 'Ux4gSideMenuActionCard',
      default: 'undefined',
      desc: 'Action required banner card (e.g. Verify your Aadhaar) for "department-services".',
      required: false,
    },
    {
      name: 'footerBranding',
      type: 'Ux4gSideMenuFooterBranding',
      default: 'undefined',
      desc: 'National emblem logo and department subtitle branding pinned to drawer bottom.',
      required: false,
    },
    {
      name: 'selectedKey',
      type: 'string',
      default: 'undefined',
      desc: 'Key identifier of currently selected menu item.',
      required: false,
    },
    {
      name: 'onItemPress',
      type: '(item: Ux4gSideMenuItem) => void',
      default: 'undefined',
      desc: 'Callback triggered when user taps any navigation item.',
      required: false,
    },
    {
      name: 'onSignOut',
      type: '() => void',
      default: 'undefined',
      desc: 'Callback triggered when user taps sign out button.',
      required: false,
    },
  ];

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Side Menu (Navigation Drawer)</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Government-grade navigation drawer supporting 5 specialized design presets: Citizen Profile, Department Services with Action Callout, Department Switcher, User Mailbox, and Centered Profile Summary with smooth left/right sliding animations.
        </p>
        <p className="wb-subtitle" style={{ marginTop: 6 }}>
          <span style={{ color: '#E11D48', fontWeight: 700 }}>*</span> marks required props.
        </p>
      </div>

      {/* Main Body */}
      <div className="wb-body">
        <div className="wb-main">
          {/* Main Tab Bar: Preview / Code / Props */}
          <div className="wb-tab-bar">
            <button
              className={`wb-tab ${activeMainTab === 'preview' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('preview')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">visibility</span>
              Preview
            </button>
            <button
              className={`wb-tab ${activeMainTab === 'code' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('code')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">code</span>
              Code
            </button>
            <button
              className={`wb-tab ${activeMainTab === 'props' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('props')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">tune</span>
              Props
            </button>
          </div>

          <div className="wb-tab-content">
            {activeMainTab === 'preview' && (
              <Ux4gThemeProvider isDark={isDark}>
                <div className={`wb-preview-area ${isDark ? 'dark' : ''}`}>
                  {renderStoryPreview()}
                </div>
              </Ux4gThemeProvider>
            )}

            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                <CodeBlock code={codeString} language="TSX" filename="SideMenuExample.tsx" />
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
                    {propsData.map((p) => (
                      <tr key={p.name}>
                        <td>
                          <span className="prop-name">
                            {p.name}
                            {p.required ? <span style={{ color: '#E11D48' }}> *</span> : null}
                          </span>
                        </td>
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

export default SideMenuDoc;
