import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface BottomNavigationBarDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const BottomNavigationBarDoc: React.FC<BottomNavigationBarDocProps> = ({
  isDark,
  story = 'bottom-navigation-basic',
}) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import React, { useState } from 'react';`);
    lines.push(`import { View, StyleSheet, Text } from 'react-native';`);
    lines.push(`import { Ux4gBottomNavigationBar, Ux4gThemeProvider, UX4GColors } from 'ux4g-react-native-components';`);
    lines.push('');
    lines.push('export default function BottomNavExample() {');
    lines.push('  const [selectedIndex, setSelectedIndex] = useState(0);');
    lines.push('');

    if (story === 'bottom-navigation-centre-action') {
      lines.push('  const items = [');
      lines.push(`    { key: 'home', label: 'Home', icon: 'home' },`);
      lines.push(`    { key: 'services', label: 'Services', icon: 'services' },`);
      lines.push(`    { key: 'status', label: 'Status', icon: 'status' },`);
      lines.push(`    { key: 'alerts', label: 'Alerts', icon: 'alerts', badge: 3 },`);
      lines.push('  ];');
      lines.push('');
      lines.push('  return (');
      lines.push('    <Ux4gBottomNavigationBar');
      lines.push('      variant="centre-action"');
      lines.push('      indicatorVariant="pill"');
      lines.push('      items={items}');
      lines.push('      selectedIndex={selectedIndex}');
      lines.push('      onTabChange={(idx) => setSelectedIndex(idx)}');
      lines.push('      centerAction={{');
      lines.push('        icon: "plus",');
      lines.push('        onPress: () => console.log("Center action pressed"),');
      lines.push('      }}');
      lines.push('    />');
    } else if (story === 'bottom-navigation-top-rounded') {
      lines.push('  const items = [');
      lines.push(`    { key: 'home', label: 'Home', icon: 'home' },`);
      lines.push(`    { key: 'services', label: 'Services', icon: 'services' },`);
      lines.push(`    { key: 'status', label: 'Status', icon: 'status' },`);
      lines.push(`    { key: 'alerts', label: 'Alerts', icon: 'alerts', badge: 3 },`);
      lines.push(`    { key: 'profile', label: 'Profile', icon: 'profile' },`);
      lines.push('  ];');
      lines.push('');
      lines.push('  return (');
      lines.push('    <Ux4gBottomNavigationBar');
      lines.push('      variant="top-rounded"');
      lines.push('      indicatorVariant="pill"');
      lines.push('      items={items}');
      lines.push('      selectedIndex={selectedIndex}');
      lines.push('      onTabChange={(idx) => setSelectedIndex(idx)}');
      lines.push('    />');
    } else if (story === 'bottom-navigation-icon-only') {
      lines.push('  const items = [');
      lines.push(`    { key: 'home', label: 'Home', icon: 'home' },`);
      lines.push(`    { key: 'services', label: 'Services', icon: 'services' },`);
      lines.push(`    { key: 'status', label: 'Status', icon: 'status' },`);
      lines.push(`    { key: 'alerts', label: 'Alerts', icon: 'alerts', badge: 3 },`);
      lines.push(`    { key: 'profile', label: 'Profile', icon: 'profile' },`);
      lines.push('  ];');
      lines.push('');
      lines.push('  return (');
      lines.push('    <Ux4gBottomNavigationBar');
      lines.push('      variant="icon-only"');
      lines.push('      indicatorVariant="bar"');
      lines.push('      items={items}');
      lines.push('      selectedIndex={selectedIndex}');
      lines.push('      onTabChange={(idx) => setSelectedIndex(idx)}');
      lines.push('    />');
    } else if (story === 'bottom-navigation-floating-pill') {
      lines.push('  const items = [');
      lines.push(`    { key: 'home', label: 'Home', icon: 'home' },`);
      lines.push(`    { key: 'services', label: 'Services', icon: 'services' },`);
      lines.push(`    { key: 'status', label: 'Status', icon: 'status' },`);
      lines.push(`    { key: 'alerts', label: 'Alerts', icon: 'alerts', badge: 3 },`);
      lines.push(`    { key: 'profile', label: 'Profile', icon: 'profile' },`);
      lines.push('  ];');
      lines.push('');
      lines.push('  return (');
      lines.push('    <Ux4gBottomNavigationBar');
      lines.push('      variant="floating-pill"');
      lines.push('      indicatorVariant="pill"');
      lines.push('      items={items}');
      lines.push('      selectedIndex={selectedIndex}');
      lines.push('      onTabChange={(idx) => setSelectedIndex(idx)}');
      lines.push('    />');
    } else {
      lines.push('  const items = [');
      lines.push(`    { key: 'home', label: 'Home', icon: 'home' },`);
      lines.push(`    { key: 'services', label: 'Services', icon: 'services' },`);
      lines.push(`    { key: 'status', label: 'Status', icon: 'status' },`);
      lines.push(`    { key: 'alerts', label: 'Alerts', icon: 'alerts', badge: 3 },`);
      lines.push(`    { key: 'profile', label: 'Profile', icon: 'profile' },`);
      lines.push('  ];');
      lines.push('');
      lines.push('  return (');
      lines.push('    <Ux4gBottomNavigationBar');
      lines.push('      variant="labelled"');
      lines.push('      indicatorVariant="pill"');
      lines.push('      items={items}');
      lines.push('      selectedIndex={selectedIndex}');
      lines.push('      onTabChange={(idx) => setSelectedIndex(idx)}');
      lines.push('    />');
    }

    lines.push('  );');
    lines.push('}');
    return lines.join('\n');
  }, [story]);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    let componentsSnippet = '';

    if (story === 'bottom-navigation-top-rounded') {
      componentsSnippet = `        <Ux4gBottomNavigationBar
          variant="top-rounded"
          indicatorVariant="pill"
          items={standardItems}
          selectedIndex={selectedIndex}
          onTabChange={(idx) => setSelectedIndex(idx)}
        />`;
    } else if (story === 'bottom-navigation-icon-only') {
      componentsSnippet = `        <Ux4gBottomNavigationBar
          variant="icon-only"
          indicatorVariant="bar"
          items={standardItems}
          selectedIndex={selectedIndex}
          onTabChange={(idx) => setSelectedIndex(idx)}
        />`;
    } else if (story === 'bottom-navigation-centre-action') {
      componentsSnippet = `        <Ux4gBottomNavigationBar
          variant="centre-action"
          indicatorVariant="pill"
          items={centreActionItems}
          selectedIndex={selectedIndex}
          onTabChange={(idx) => setSelectedIndex(idx)}
          centerAction={{
            icon: 'plus',
            onPress: () => alert('Center Action Clicked!'),
          }}
        />`;
    } else if (story === 'bottom-navigation-floating-pill') {
      componentsSnippet = `        <Ux4gBottomNavigationBar
          variant="floating-pill"
          indicatorVariant="pill"
          items={standardItems}
          selectedIndex={selectedIndex}
          onTabChange={(idx) => setSelectedIndex(idx)}
        />`;
    } else {
      // Labelled / Default
      componentsSnippet = `        <Ux4gBottomNavigationBar
          variant="labelled"
          indicatorVariant="pill"
          items={standardItems}
          selectedIndex={selectedIndex}
          onTabChange={(idx) => setSelectedIndex(idx)}
        />`;
    }

    const isCentre = story === 'bottom-navigation-centre-action';

    const snackCodeString = `import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ux4gBottomNavigationBar, Ux4gThemeProvider, UX4GColors } from 'ux4g-react-native-components';

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const standardItems = [
    { key: 'home', label: 'Home', icon: 'home' },
    { key: 'services', label: 'Services', icon: 'services' },
    { key: 'status', label: 'Status', icon: 'status' },
    { key: 'alerts', label: 'Alerts', icon: 'alerts', badge: 3 },
    { key: 'profile', label: 'Profile', icon: 'profile' },
  ];

  const centreActionItems = [
    { key: 'home', label: 'Home', icon: 'home' },
    { key: 'services', label: 'Services', icon: 'services' },
    { key: 'status', label: 'Status', icon: 'status' },
    { key: 'alerts', label: 'Alerts', icon: 'alerts', badge: '!' },
  ];

  const currentItems = ${isCentre ? 'centreActionItems' : 'standardItems'};

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={[styles.container, { backgroundColor: ${isDark ? "'#0F172A'" : "'#F8FAFC'"} }]}>
        <View style={styles.content}>
          <Text style={[styles.title, { color: ${isDark ? "'#F8FAFC'" : "'#0F172A'"} }]}>
            {currentItems[selectedIndex]?.label || 'Tab'} Screen
          </Text>
          <Text style={[styles.subtitle, { color: ${isDark ? "'#94A3B8'" : "'#64748B'"} }]}>
            Active Tab Index: {selectedIndex}
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
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=android&supportedPlatforms=ios,android&theme=${
      isDark ? 'dark' : 'light'
    }&name=Ux4gBottomNavigationBar%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-components@1.1.0,react-native-svg@*&code=${encodeURIComponent(
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
      name: 'items',
      type: 'Ux4gBottomNavItem[]',
      default: '[]',
      desc: 'Array of 3 to 5 navigation items with key, label, icon, activeIcon, badge, and disabled state.',
      required: true,
    },
    {
      name: 'selectedIndex',
      type: 'number',
      default: '0',
      desc: 'Controlled zero-based index of the currently active tab.',
      required: false,
    },
    {
      name: 'defaultSelectedIndex',
      type: 'number',
      default: '0',
      desc: 'Default active tab index for uncontrolled usage.',
      required: false,
    },
    {
      name: 'onTabChange',
      type: '(index: number, item: Ux4gBottomNavItem) => void',
      default: 'undefined',
      desc: 'Callback triggered when user selects a tab item.',
      required: false,
    },
    {
      name: 'variant',
      type: "'labelled' | 'top-rounded' | 'icon-only' | 'centre-action' | 'floating-pill'",
      default: "'labelled'",
      desc: 'Layout shape variant preset adhering to UX4G government standards.',
      required: false,
    },
    {
      name: 'indicatorVariant',
      type: "'pill' | 'bar' | 'plain'",
      default: "'pill'",
      desc: 'Active tab indicator style (pill capsule, top bar, or plain highlight).',
      required: false,
    },
    {
      name: 'centerAction',
      type: 'Ux4gBottomNavCenterAction',
      default: 'undefined',
      desc: 'Configuration for elevated center action button (used with "centre-action" variant).',
      required: false,
    },
    {
      name: 'backgroundColor',
      type: 'string',
      default: 'theme.colors.surface',
      desc: 'Custom background color override for the navigation bar.',
      required: false,
    },
    {
      name: 'activeColor',
      type: 'string',
      default: 'UX4GColors.primary500',
      desc: 'Color for active tab icon and label.',
      required: false,
    },
    {
      name: 'inactiveColor',
      type: 'string',
      default: 'UX4GColors.neutral500',
      desc: 'Color for inactive tab icon and label.',
      required: false,
    },
    {
      name: 'pillBackgroundColor',
      type: 'string',
      default: 'UX4GColors.primary50',
      desc: 'Background color for pill capsule indicator.',
      required: false,
    },
    {
      name: 'barIndicatorColor',
      type: 'string',
      default: 'UX4GColors.primary500',
      desc: 'Color for the top bar indicator in "bar" mode.',
      required: false,
    },
    {
      name: 'elevation',
      type: 'number',
      default: '4',
      desc: 'Elevation/shadow depth for bottom navigation container.',
      required: false,
    },
    {
      name: 'showLabels',
      type: 'boolean',
      default: 'true',
      desc: 'Whether to display text labels below icons.',
      required: false,
    },
  ];

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Bottom Navigation Bar</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Standardized navigation bar anchored at the bottom of mobile screens, offering 5 distinct layout variants (Labelled, Top-rounded, Icon Only, Centre Action, Floating Pill) and 3 active indicator styles (Pill, Bar, Plain).
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
                <CodeBlock code={codeString} language="TSX" filename="BottomNavExample.tsx" />
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

export default BottomNavigationBarDoc;
