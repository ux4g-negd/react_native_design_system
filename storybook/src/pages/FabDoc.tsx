import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface FabDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const FabDoc: React.FC<FabDocProps> = ({ isDark, story = 'fab-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import React from 'react';`);
    lines.push(`import { View, StyleSheet, Alert } from 'react-native';`);
    lines.push(`import { Ux4gFab, Ux4gFabActionItem, Ux4gThemeProvider } from 'ux4g-react-native-components';`);
    lines.push('');
    lines.push('export default function FabExample() {');
    lines.push('  const actions: Ux4gFabActionItem[] = [');
    lines.push(`    { id: 'add', label: 'Add', icon: 'plus', onPress: () => Alert.alert('Add Tapped') },`);
    lines.push(`    { id: 'message', label: 'Message', icon: 'message', onPress: () => Alert.alert('Message Tapped') },`);
    lines.push(`    { id: 'share', label: 'Share', icon: 'share', onPress: () => Alert.alert('Share Tapped') },`);
    lines.push(`    { id: 'call', label: 'Call', icon: 'call', onPress: () => Alert.alert('Call Tapped') },`);
    lines.push('  ];');
    lines.push('');
    lines.push('  return (');
    lines.push('    <View style={styles.container}>');

    if (story === 'fab-icon') {
      lines.push('      <Ux4gFab');
      lines.push('        variant="icon"');
      lines.push('        colorTheme="brand"');
      lines.push('        position="bottom-right"');
      lines.push('        onPress={() => console.log("FAB Pressed")}');
      lines.push('      />');
    } else if (story === 'fab-labelled') {
      lines.push('      <Ux4gFab');
      lines.push('        variant="labelled"');
      lines.push('        colorTheme="brand"');
      lines.push('        position="bottom-right"');
      lines.push('        label="Create Application"');
      lines.push('        onPress={() => console.log("FAB Pressed")}');
      lines.push('      />');
    } else if (story === 'fab-menu-joined') {
      lines.push('      <Ux4gFab');
      lines.push('        variant="menu-joined"');
      lines.push('        colorTheme="brand"');
      lines.push('        position="bottom-right"');
      lines.push('        actions={actions}');
      lines.push('      />');
    } else if (story === 'fab-menu-spaced') {
      lines.push('      <Ux4gFab');
      lines.push('        variant="menu-spaced"');
      lines.push('        colorTheme="brand"');
      lines.push('        position="bottom-right"');
      lines.push('        actions={actions}');
      lines.push('      />');
    } else if (story === 'fab-menu-labelled') {
      lines.push('      <Ux4gFab');
      lines.push('        variant="menu-labelled"');
      lines.push('        colorTheme="brand"');
      lines.push('        position="bottom-right"');
      lines.push('        actions={actions}');
      lines.push('      />');
    } else {
      lines.push('      <Ux4gFab');
      lines.push('        variant="menu-labelled"');
      lines.push('        colorTheme="brand"');
      lines.push('        position="bottom-right"');
      lines.push('        actions={actions}');
      lines.push('      />');
    }

    lines.push('    </View>');
    lines.push('  );');
    lines.push('}');
    lines.push('');
    lines.push('const styles = StyleSheet.create({');
    lines.push('  container: { flex: 1, backgroundColor: "#F8FAFC" },');
    lines.push('});');
    return lines.join('\n');
  }, [story]);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    let componentsSnippet = '';

    if (story === 'fab-icon') {
      componentsSnippet = `        <Ux4gFab
          variant="icon"
          colorTheme="brand"
          position="bottom-right"
          onPress={() => Alert.alert('FAB Pressed!')}
        />`;
    } else if (story === 'fab-labelled') {
      componentsSnippet = `        <Ux4gFab
          variant="labelled"
          colorTheme="brand"
          position="bottom-right"
          label="Button"
          onPress={() => Alert.alert('Labelled FAB Pressed!')}
        />`;
    } else if (story === 'fab-menu-joined') {
      componentsSnippet = `        <Ux4gFab
          variant="menu-joined"
          colorTheme="brand"
          position="bottom-right"
          actions={actions}
        />`;
    } else if (story === 'fab-menu-spaced') {
      componentsSnippet = `        <Ux4gFab
          variant="menu-spaced"
          colorTheme="brand"
          position="bottom-right"
          actions={actions}
        />`;
    } else if (story === 'fab-menu-labelled') {
      componentsSnippet = `        <Ux4gFab
          variant="menu-labelled"
          colorTheme="brand"
          position="bottom-right"
          actions={actions}
        />`;
    } else {
      // Basic / Introduction overview: Menu labelled speed dial
      componentsSnippet = `        <Ux4gFab
          variant="menu-labelled"
          colorTheme="brand"
          position="bottom-right"
          actions={actions}
        />`;
    }

    const snackCodeString = `import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Ux4gFab, Ux4gThemeProvider, UX4GColors } from 'ux4g-react-native-components';

export default function App() {
  const actions = [
    { id: 'add', label: 'Add', icon: 'plus', onPress: () => Alert.alert('Add Tapped') },
    { id: 'message', label: 'Message', icon: 'message', onPress: () => Alert.alert('Message Tapped') },
    { id: 'share', label: 'Share', icon: 'share', onPress: () => Alert.alert('Share Tapped') },
    { id: 'call', label: 'Call', icon: 'call', onPress: () => Alert.alert('Call Tapped') },
  ];

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={[styles.container, { backgroundColor: ${isDark ? "'#0F172A'" : "'#F8FAFC'"} }]}>
        <View style={styles.content}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: ${isDark ? "'#F8FAFC'" : "'#0F172A'"} }}>
            UX4G Floating Action Button
          </Text>
          <Text style={{ fontSize: 13, color: ${isDark ? "'#94A3B8'" : "'#64748B'"}, marginTop: 6, textAlign: 'center' }}>
            Tap the FAB at the bottom right corner to interact with the component.
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
    position: 'relative',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=android&supportedPlatforms=ios,android&theme=${
      isDark ? 'dark' : 'light'
    }&name=Ux4gFab%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-components@1.1.0,react-native-svg@*&code=${encodeURIComponent(
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
      name: 'variant',
      type: "'icon' | 'labelled' | 'menu-joined' | 'menu-spaced' | 'menu-labelled'",
      default: "'icon'",
      desc: 'FAB appearance variant: standard circular icon, extended labelled button, or 3 speed-dial vertical menu styles.',
      required: false,
    },
    {
      name: 'colorTheme',
      type: "'brand' | 'surface' | 'light'",
      default: "'brand'",
      desc: 'Color palette preset (primary brand purple, dark/light surface container, or light elevated tone).',
      required: false,
    },
    {
      name: 'position',
      type: "'bottom-right' | 'bottom-left' | 'bottom-center' | 'top-right' | 'top-left'",
      default: "'bottom-right'",
      desc: 'Screen anchor placement with standardized safe area offsets.',
      required: false,
    },
    {
      name: 'label',
      type: 'string',
      default: 'undefined',
      desc: 'Text label rendered on extended "labelled" FAB.',
      required: false,
    },
    {
      name: 'actions',
      type: 'Ux4gFabActionItem[]',
      default: '[]',
      desc: 'Array of menu items (id, label, icon, onPress, disabled) rendered when speed dial opens.',
      required: false,
    },
    {
      name: 'showBackdrop',
      type: 'boolean',
      default: 'true',
      desc: 'Whether to show dim background overlay when speed dial is open.',
      required: false,
    },
    {
      name: 'isExpanded',
      type: 'boolean',
      default: 'undefined',
      desc: 'Optional controlled state for speed dial open/close.',
      required: false,
    },
    {
      name: 'onToggle',
      type: '(isOpen: boolean) => void',
      default: 'undefined',
      desc: 'Callback fired when speed dial expands or collapses.',
      required: false,
    },
    {
      name: 'onPress',
      type: '() => void',
      default: 'undefined',
      desc: 'Callback fired when single FAB (icon/labelled) is pressed.',
      required: false,
    },
    {
      name: 'icon',
      type: 'Ux4gIconName | ReactNode',
      default: "'plus'",
      desc: 'Custom icon name or custom element inside the main button.',
      required: false,
    },
    {
      name: 'elevation',
      type: 'number',
      default: '6',
      desc: 'Elevation/shadow depth for the primary FAB.',
      required: false,
    },
  ];

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Floating Action Button (FAB)</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Primary action trigger anchored above screen content. Features single icon, extended labelled, and 3 high-impact speed-dial menu variants (Joined, Spaced, Labelled Cards) with smooth rotation animations and backdrops.
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
                <CodeBlock code={codeString} language="TSX" filename="FabExample.tsx" />
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

export default FabDoc;
