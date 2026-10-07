import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface BottomSheetDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const BottomSheetDoc: React.FC<BottomSheetDocProps> = ({
  isDark,
  story = 'bottom-sheet-basic',
}) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import React, { useState } from 'react';`);
    lines.push(`import { View, Text } from 'react-native';`);
    lines.push(`import { Ux4gBottomSheet, Ux4gButton } from 'ux4g-react-native-components';`);
    lines.push('');
    lines.push('export default function BottomSheetExample() {');
    lines.push('  const [visible, setVisible] = useState(false);');
    lines.push('');

    let sizeStr = 'half';
    if (story === 'bottom-sheet-peek') sizeStr = 'peek';
    else if (story === 'bottom-sheet-expanded') sizeStr = 'expanded';
    else if (story === 'bottom-sheet-full') sizeStr = 'full';

    lines.push('  return (');
    lines.push('    <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>');
    lines.push(`      <Ux4gButton text="Open ${sizeStr.toUpperCase()} Sheet" onPress={() => setVisible(true)} />`);
    lines.push('');
    lines.push('      <Ux4gBottomSheet');
    lines.push('        visible={visible}');
    lines.push('        onDismiss={() => setVisible(false)}');
    lines.push(`        size="${sizeStr}"`);
    lines.push('        cornerRadius={16}');
    lines.push('        title="Header"');
    lines.push('        description="Write description here"');
    lines.push('        primaryButtonText="Confirm"');
    lines.push('        secondaryButtonText="Cancel"');
    lines.push('        onPrimaryPress={() => setVisible(false)}');
    lines.push('        onSecondaryPress={() => setVisible(false)}');
    lines.push('      >');
    lines.push('        <Text style={{ fontSize: 14, color: "#64748B", lineHeight: 20 }}>');
    lines.push(`          This is the content inside the ${sizeStr} bottom sheet.`);
    lines.push('        </Text>');
    lines.push('      </Ux4gBottomSheet>');
    lines.push('    </View>');
    lines.push('  );');
    lines.push('}');
    return lines.join('\n');
  }, [story]);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    let componentsSnippet = '';

    if (story === 'bottom-sheet-peek') {
      componentsSnippet = `        <Ux4gButton
          text="Open Peek Sheet (26%)"
          onPress={() => setOpen(true)}
        />

        <Ux4gBottomSheet
          visible={open}
          onDismiss={() => setOpen(false)}
          size="peek"
          cornerRadius={16}
          title="Header"
          description="Write description here"
          primaryButtonText="Button"
          secondaryButtonText="Button"
          onPrimaryPress={() => setOpen(false)}
          onSecondaryPress={() => setOpen(false)}
        >
          <Text style={{ fontSize: 14, color: ${isDark ? "'#94A3B8'" : "'#64748B'"}, lineHeight: 20 }}>
            Compact peek bottom sheet taking ~26% of screen height for quick confirmations.
          </Text>
        </Ux4gBottomSheet>`;
    } else if (story === 'bottom-sheet-expanded') {
      componentsSnippet = `        <Ux4gButton
          text="Open Expanded Sheet (75%)"
          onPress={() => setOpen(true)}
        />

        <Ux4gBottomSheet
          visible={open}
          onDismiss={() => setOpen(false)}
          size="expanded"
          cornerRadius={16}
          title="Header"
          description="Write description here"
          primaryButtonText="Button"
          secondaryButtonText="Button"
          onPrimaryPress={() => setOpen(false)}
          onSecondaryPress={() => setOpen(false)}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <Text key={i} style={{ fontSize: 14, color: ${isDark ? "'#94A3B8'" : "'#64748B'"}, marginBottom: 10, lineHeight: 20 }}>
              {i + 1}. Expanded bottom sheet content row for detailed forms and multi-item lists.
            </Text>
          ))}
        </Ux4gBottomSheet>`;
    } else if (story === 'bottom-sheet-full') {
      componentsSnippet = `        <Ux4gButton
          text="Open Full Sheet (94%)"
          onPress={() => setOpen(true)}
        />

        <Ux4gBottomSheet
          visible={open}
          onDismiss={() => setOpen(false)}
          size="full"
          cornerRadius={16}
          title="Header"
          description="Write description here"
          primaryButtonText="Button"
          secondaryButtonText="Button"
          onPrimaryPress={() => setOpen(false)}
          onSecondaryPress={() => setOpen(false)}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <Text key={i} style={{ fontSize: 14, color: ${isDark ? "'#94A3B8'" : "'#64748B'"}, marginBottom: 12, lineHeight: 20 }}>
              {i + 1}. Full-screen bottom sheet item with scrollable body and 16dp top corner radius.
            </Text>
          ))}
        </Ux4gBottomSheet>`;
    } else {
      // Default: Half (50%) & Basic
      componentsSnippet = `        <Ux4gButton
          text="Open Bottom Sheet (50%)"
          onPress={() => setOpen(true)}
        />

        <Ux4gBottomSheet
          visible={open}
          onDismiss={() => setOpen(false)}
          size="half"
          cornerRadius={16}
          title="Header"
          description="Write description here"
          primaryButtonText="Button"
          secondaryButtonText="Button"
          onPrimaryPress={() => setOpen(false)}
          onSecondaryPress={() => setOpen(false)}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <Text key={i} style={{ fontSize: 14, color: ${isDark ? "'#94A3B8'" : "'#64748B'"}, marginBottom: 10, lineHeight: 20 }}>
              {i + 1}. Bottom sheet body content with 16dp top border radius and UX4G action buttons.
            </Text>
          ))}
        </Ux4gBottomSheet>`;
    }

    const snackCodeString = `import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ux4gBottomSheet, Ux4gButton, Ux4gThemeProvider } from 'ux4g-react-native-components';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={[styles.container, { backgroundColor: ${isDark ? "'#0F172A'" : "'#F8FAFC'"} }]}>
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
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=android&supportedPlatforms=ios,android&theme=${
      isDark ? 'dark' : 'light'
    }&name=Ux4gBottomSheet%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-components@1.1.0,react-native-svg@*&code=${encodeURIComponent(
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
      name: 'visible',
      type: 'boolean',
      default: 'false',
      desc: 'Controls whether the bottom sheet modal is open and visible.',
      required: true,
    },
    {
      name: 'onDismiss',
      type: '() => void',
      default: 'undefined',
      desc: 'Callback fired when the user taps the backdrop or drags down to dismiss.',
      required: true,
    },
    {
      name: 'size',
      type: "'peek' | 'half' | 'expanded' | 'full'",
      default: "'half'",
      desc: 'Snap point height: peek (~26%), half (50%), expanded (75%), or full (94%).',
      required: false,
    },
    {
      name: 'cornerRadius',
      type: 'number',
      default: '16',
      desc: 'Top-left and top-right border radius in pixels (UX4G standard is 16dp).',
      required: false,
    },
    {
      name: 'title',
      type: 'string',
      default: 'undefined',
      desc: 'Standardized header title text.',
      required: false,
    },
    {
      name: 'description',
      type: 'string',
      default: 'undefined',
      desc: 'Standardized subtitle description text under header.',
      required: false,
    },
    {
      name: 'primaryButtonText',
      type: 'string',
      default: 'undefined',
      desc: 'Label text for primary filled button in footer action row.',
      required: false,
    },
    {
      name: 'secondaryButtonText',
      type: 'string',
      default: 'undefined',
      desc: 'Label text for secondary outline button in footer action row.',
      required: false,
    },
    {
      name: 'onPrimaryPress',
      type: '() => void',
      default: 'undefined',
      desc: 'Callback fired when primary footer button is tapped.',
      required: false,
    },
    {
      name: 'onSecondaryPress',
      type: '() => void',
      default: 'undefined',
      desc: 'Callback fired when secondary footer button is tapped.',
      required: false,
    },
    {
      name: 'showHandle',
      type: 'boolean',
      default: 'true',
      desc: 'Whether to show the top drag handle pill indicator.',
      required: false,
    },
    {
      name: 'children',
      type: 'ReactNode',
      default: 'undefined',
      desc: 'Custom body content rendered inside scrollable sheet area.',
      required: false,
    },
  ];

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Bottom Sheet</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Modal surface anchored to the bottom of the screen with standardized 16dp top corner radius, drag handle pill, header/description, and action buttons across 4 snap point sizes (Peek 26%, Half 50%, Expanded 75%, Full 94%).
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
                <CodeBlock code={codeString} language="TSX" filename="BottomSheetExample.tsx" />
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

export default BottomSheetDoc;
