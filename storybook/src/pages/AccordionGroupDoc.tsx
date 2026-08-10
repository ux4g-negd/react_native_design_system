import React, { useState, useMemo } from 'react';
import { Ux4gAccordionGroup } from '../../../src/components/accordion/Accordion';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';
import { Text } from 'react-native';

interface AccordionGroupDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const AccordionGroupDoc: React.FC<AccordionGroupDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import { Ux4gAccordionGroup, Ux4gAccordionItem } from 'ux4g-react-native-design-system';`);
    lines.push(`import { Text } from 'react-native';`);
    lines.push(`import { useState } from 'react';`);
    lines.push('');
    lines.push('const items: Ux4gAccordionItem[] = [');
    lines.push('  {');
    lines.push('    title: "What is UX4G?",');
    lines.push('    content: <Text>UX4G is a React Native design system.</Text>');
    lines.push('  },');
    lines.push('  {');
    lines.push('    title: "How do I install it?",');
    lines.push('    content: <Text>Install it via npm or yarn.</Text>');
    lines.push('  },');
    lines.push('  {');
    lines.push('    title: "Is it open source?",');
    lines.push('    content: <Text>Yes, UX4G is open source under the MIT license.</Text>');
    lines.push('  }');
    lines.push('];');
    lines.push('');
    lines.push('const [expandedIndex, setExpandedIndex] = useState<number | null>(2);');
    lines.push('');
    lines.push('<Ux4gAccordionGroup');
    lines.push('  items={items}');
    lines.push('  expandedIndex={expandedIndex}');
    lines.push('  onExpandedIndexChange={setExpandedIndex}');
    lines.push('/>');
    return lines.join('\n');
  }, []);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    const snackCodeString = `import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ux4gAccordionGroup, Ux4gAccordionItem, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [expandedIndex, setExpandedIndex] = useState(2);

  const items = [
    {
      title: "What is UX4G?",
      content: <Text style={{ color: ${isDark ? "'#fff'" : "'#000'"} }}>UX4G is a React Native design system.</Text>
    },
    {
      title: "How do I install it?",
      content: <Text style={{ color: ${isDark ? "'#fff'" : "'#000'"} }}>Install it via npm or yarn.</Text>
    },
    {
      title: "Is it open source?",
      content: <Text style={{ color: ${isDark ? "'#fff'" : "'#000'"} }}>Yes, UX4G is open source under the MIT license.</Text>
    }
  ];

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={styles.container}>
        <Ux4gAccordionGroup 
          items={items}
          expandedIndex={expandedIndex}
          onExpandedIndexChange={setExpandedIndex}
        />
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

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gAccordionGroup%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.2,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;
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
    { name: 'items', type: 'Ux4gAccordionItem[]', default: '—', desc: 'Array of accordion items' },
    { name: 'expandedIndex', type: 'number | null', default: '—', desc: 'Index of the currently expanded item' },
    { name: 'onExpandedIndexChange', type: '(index: number | null) => void', default: '—', desc: 'Callback fired when an item is expanded or collapsed' },
    { name: 'itemSpacing', type: 'number', default: 'Ux4gSpace.space20', desc: 'Vertical spacing between accordion items' },
    { name: 'contentBuilder', type: '(index, item) => React.ReactNode', default: '—', desc: 'Optional builder function returning ReactNode for a given item/index' },
  ];

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">AccordionGroup</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          AccordionGroup ensures only one item is open at a time.
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
                <CodeBlock code={codeString} language="TSX" filename="AccordionGroupExample.tsx" />
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
