import React, { useState, useMemo } from 'react';
import { Ux4gAccordion } from '../../../src/components/accordion/Accordion';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface AccordionDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const AccordionDoc: React.FC<AccordionDocProps> = ({ isDark, story = 'accordion-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import { Ux4gAccordion } from 'ux4g-react-native-design-system';`);
    lines.push(`import { Text } from 'react-native';`);
    lines.push(`import { useState } from 'react';`);
    lines.push('');
    lines.push('// Basic Accordion');
    lines.push('const [expanded1, setExpanded1] = useState(false);');
    lines.push('<Ux4gAccordion');
    lines.push('  title="Basic Accordion"');
    lines.push('  expanded={expanded1}');
    lines.push('  onExpandedChange={setExpanded1}');
    lines.push('>');
    lines.push('  <Text>Content</Text>');
    lines.push('</Ux4gAccordion>');
    lines.push('');
    lines.push('// Leading Chevron');
    lines.push('const [expanded2, setExpanded2] = useState(false);');
    lines.push('<Ux4gAccordion');
    lines.push('  title="Leading Chevron"');
    lines.push('  chevronPosition="leading"');
    lines.push('  expanded={expanded2}');
    lines.push('  onExpandedChange={setExpanded2}');
    lines.push('>');
    lines.push('  <Text>Content</Text>');
    lines.push('</Ux4gAccordion>');
    lines.push('');
    lines.push('// Disabled Accordion');
    lines.push('<Ux4gAccordion');
    lines.push('  title="Disabled Accordion"');
    lines.push('  enabled={false}');
    lines.push('>');
    lines.push('  <Text>Content</Text>');
    lines.push('</Ux4gAccordion>');
    return lines.join('\n');
  }, []);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    const snackCodeString = `import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ux4gAccordion, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [basicExpanded, setBasicExpanded] = useState(false);
  const [leadingExpanded, setLeadingExpanded] = useState(false);

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={styles.container}>
        <Ux4gAccordion 
          title="Basic Accordion"
          expanded={basicExpanded}
          onExpandedChange={setBasicExpanded}
        >
          <Text style={{ color: ${isDark ? "'#fff'" : "'#000'"} }}>This is a basic accordion with trailing chevron.</Text>
        </Ux4gAccordion>
        
        <View style={{ height: 16 }} />
        
        <Ux4gAccordion 
          title="Leading Chevron" 
          chevronPosition="leading"
          expanded={leadingExpanded}
          onExpandedChange={setLeadingExpanded}
        >
          <Text style={{ color: ${isDark ? "'#fff'" : "'#000'"} }}>This accordion has a leading chevron.</Text>
        </Ux4gAccordion>
        
        <View style={{ height: 16 }} />
        
        <Ux4gAccordion 
          title="Disabled Accordion" 
          enabled={false}
        >
          <Text style={{ color: ${isDark ? "'#fff'" : "'#000'"} }}>This accordion is disabled.</Text>
        </Ux4gAccordion>
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
    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gAccordion%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;
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
    { name: 'title', type: 'string', default: '—', desc: 'Title text displayed in the accordion header.', required: true },
    { name: 'children', type: 'ReactNode', default: 'undefined', desc: 'Content inside the expandable panel.', required: false },
    { name: 'content', type: 'ReactNode', default: 'undefined', desc: 'Alias for children, mirrors Flutter child.', required: false },
    { name: 'expanded', type: 'boolean', default: 'false', desc: 'Whether the accordion panel is currently expanded.', required: false },
    { name: 'enabled', type: 'boolean', default: 'true', desc: 'Whether the accordion is interactive and enabled.', required: false },
    { name: 'onExpandedChange', type: '(expanded: boolean) => void', default: 'undefined', desc: 'Callback fired when user taps the header.', required: false },
    { name: 'backgroundColor', type: 'string', default: 'theme.colors.surface', desc: 'Background color for the header bar.', required: false },
    { name: 'contentBackgroundColor', type: 'string', default: 'backgroundColor', desc: 'Background color for expanded content container.', required: false },
    { name: 'collapsedBorderColor', type: 'string', default: 'onSurface @ 12%', desc: 'Border color when collapsed.', required: false },
    { name: 'expandedBorderColor', type: 'string', default: 'collapsedBorderColor', desc: 'Border color when expanded.', required: false },
    { name: 'titleColor', type: 'string', default: 'theme.colors.onSurface', desc: 'Title text color.', required: false },
    { name: 'disabledTitleColor', type: 'string', default: 'onSurface @ 38%', desc: 'Title text color when disabled.', required: false },
    { name: 'iconColor', type: 'string', default: 'theme.colors.onSurface', desc: 'Chevron and leading icon color.', required: false },
    { name: 'disabledIconColor', type: 'string', default: 'onSurface @ 38%', desc: 'Chevron and leading icon color when disabled.', required: false },
    { name: 'leadingIcon', type: 'ReactNode', default: 'undefined', desc: 'Optional leading icon displayed before title.', required: false },
    { name: 'chevronPosition', type: "'leading' | 'trailing'", default: "'trailing'", desc: 'Position of the chevron indicator.', required: false },
    { name: 'style', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Custom style for outer wrapper.', required: false },
    { name: 'headerStyle', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Custom style for header row container.', required: false },
    { name: 'contentStyle', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Custom style for expanded content container.', required: false },
    { name: 'titleStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Custom style for header title text.', required: false },
    { name: 'testID', type: 'string', default: 'undefined', desc: 'Test identifier for automation.', required: false },
  ];

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Accordion</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Expandable panel component supporting custom borders, chevrons, and animated transitions.
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
                <CodeBlock code={codeString} language="TSX" filename="AccordionExample.tsx" />
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
