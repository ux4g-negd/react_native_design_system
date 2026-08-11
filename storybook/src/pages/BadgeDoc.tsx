import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface BadgeDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const BadgeDoc: React.FC<BadgeDocProps> = ({ isDark, story = 'badge-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import { View } from 'react-native';`);

    if (story === 'badge-count') {
      lines.push(`import { Ux4gBadge, UX4GColors } from 'ux4g-react-native-design-system';`);
      lines.push('');
      lines.push('// Single Digit Threshold (9+)');
      lines.push('<Ux4gBadge count={5} />');
      lines.push('<Ux4gBadge count={12} limit="singleDigit" />');
      lines.push('');
      lines.push('// Double Digit Threshold (99+)');
      lines.push('<Ux4gBadge count={99} limit="doubleDigit" />');
      lines.push('<Ux4gBadge count={150} limit="doubleDigit" containerColor={UX4GColors.red500} />');
    } else if (story === 'badge-standalone' || story === 'badge-label') {
      lines.push(`import { Ux4gBadge, Ux4gIcons, UX4GColors } from 'ux4g-react-native-design-system';`);
      lines.push('');
      lines.push('// All Standalone Badge Variants');
      lines.push('<View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>');
      lines.push('  {/* 1. Dot Badge */}');
      lines.push('  <Ux4gBadge variant="dot" containerColor={UX4GColors.primary600} />');
      lines.push('');
      lines.push('  {/* 2. Count Badge (7) */}');
      lines.push('  <Ux4gBadge count={7} containerColor={UX4GColors.primary600} />');
      lines.push('');
      lines.push('  {/* 3. Count Badge (9+) */}');
      lines.push('  <Ux4gBadge count={12} limit="singleDigit" containerColor={UX4GColors.primary600} />');
      lines.push('');
      lines.push('  {/* 4. Count Badge (99+) */}');
      lines.push('  <Ux4gBadge count={150} limit="doubleDigit" containerColor={UX4GColors.primary600} />');
      lines.push('');
      lines.push('  {/* 5. Label Badge (BETA) */}');
      lines.push('  <Ux4gBadge label="BETA" containerColor={UX4GColors.primary600} />');
      lines.push('');
      lines.push('  {/* 6. Label Badge (NEW) */}');
      lines.push('  <Ux4gBadge label="NEW" containerColor={UX4GColors.primary600} />');
      lines.push('');
      lines.push('  {/* 7. Icon Badge (Checkmark) */}');
      lines.push('  <Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 14, color: UX4GColors.white })} containerColor={UX4GColors.primary600} />');
      lines.push('');
      lines.push('  {/* 8. Verification Shield Icon */}');
      lines.push('  {Ux4gIcons.verification({ size: 24, color: UX4GColors.blue600 })}');
      lines.push('');
      lines.push('  {/* 9. Gold Star Icon */}');
      lines.push('  {Ux4gIcons.star({ size: 24, color: UX4GColors.gold500 })}');
      lines.push('</View>');
    } else if (story === 'badge-semantic') {
      lines.push(`import { Ux4gBadge, Ux4gIcons, UX4GColors } from 'ux4g-react-native-design-system';`);
      lines.push('');
      lines.push('// Semantic Colors Matrix (Purple, Green, Orange, Red, Grey, Cyan)');
      lines.push('// Row 1: Dot Badges with White Border');
      lines.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.primary600} showBorder />');
      lines.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.green600} showBorder />');
      lines.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.orange500} showBorder />');
      lines.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.red600} showBorder />');
      lines.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.neutral400} showBorder />');
      lines.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.cyan600} showBorder />');
      lines.push('');
      lines.push('// Row 2: Checkmark Icon Badges with White Border');
      lines.push('<Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.primary600} showBorder />');
      lines.push('<Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.green600} showBorder />');
      lines.push('<Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.orange500} showBorder />');
      lines.push('<Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.red600} showBorder />');
      lines.push('<Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.neutral700 })} containerColor={UX4GColors.neutral300} showBorder />');
      lines.push('<Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.cyan600} showBorder />');
      lines.push('');
      lines.push('// Row 3: Count Badges (3) with White Border');
      lines.push('<Ux4gBadge count={3} containerColor={UX4GColors.primary600} showBorder />');
      lines.push('<Ux4gBadge count={3} containerColor={UX4GColors.green600} showBorder />');
      lines.push('<Ux4gBadge count={3} containerColor={UX4GColors.orange500} showBorder />');
      lines.push('<Ux4gBadge count={3} containerColor={UX4GColors.red600} showBorder />');
      lines.push('<Ux4gBadge count={3} containerColor={UX4GColors.neutral300} contentColor={UX4GColors.neutral800} showBorder />');
      lines.push('<Ux4gBadge count={3} containerColor={UX4GColors.cyan600} showBorder />');
      lines.push('');
      lines.push('// Row 4: ReadyToUse & Shield Icon Badges with White Border');
      lines.push('<Ux4gBadge variant="readyToUse" assetPath={Ux4gIcons.verification({ size: 18 })} showBorder />');
      lines.push('<Ux4gBadge variant="readyToUse" assetPath={Ux4gIcons.star({ size: 18 })} showBorder />');
      lines.push('<Ux4gBadge variant="icon" icon={Ux4gIcons.shield({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.primary600} showBorder />');
      lines.push('<Ux4gBadge variant="readyToUse" assetPath={Ux4gIcons.verification({ size: 18 })} showBorder />');
      lines.push('<Ux4gBadge variant="readyToUse" assetPath={Ux4gIcons.star({ size: 18 })} showBorder />');
    } else if (story === 'badge-overlay') {
      lines.push(`import { Ux4gBadge, Ux4gIcons, UX4GColors } from 'ux4g-react-native-design-system';`);
      lines.push('');
      lines.push('// 1. Star Icon with "NEW" Label Badge');
      lines.push('<Ux4gBadge label="NEW" alignment="topRight" containerColor={UX4GColors.primary600}>');
      lines.push('  {Ux4gIcons.star({ size: 28, color: "#1C1B1F" })}');
      lines.push('</Ux4gBadge>');
      lines.push('');
      lines.push('// 2. Thumb Up Icon with Count Badge (5)');
      lines.push('<Ux4gBadge count={5} alignment="topRight" containerColor={UX4GColors.primary600}>');
      lines.push('  {Ux4gIcons.thumbUp({ size: 28, color: "#1C1B1F" })}');
      lines.push('</Ux4gBadge>');
      lines.push('');
      lines.push('// 3. Verification Shield Icon with Dot Badge');
      lines.push('<Ux4gBadge variant="dot" alignment="topRight" containerColor={UX4GColors.primary600}>');
      lines.push('  {Ux4gIcons.verification({ size: 28, color: "#1C1B1F" })}');
      lines.push('</Ux4gBadge>');
    } else {
      lines.push(`import { Ux4gBadge, UX4GColors } from 'ux4g-react-native-design-system';`);
      lines.push('');
      lines.push('// Standalone Dot Badges');
      lines.push('<Ux4gBadge variant="dot" />');
      lines.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.green500} />');
      lines.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.orange500} />');
      lines.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.blue500} />');
    }

    return lines.join('\n');
  }, [story]);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    let componentsSnippet = '';
    const iconColor = isDark ? '#E6E1E5' : '#1C1B1F';

    if (story === 'badge-count') {
      componentsSnippet = `        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
          <Ux4gBadge count={5} />
          <Ux4gBadge count={12} limit="singleDigit" />
          <Ux4gBadge count={99} limit="doubleDigit" />
          <Ux4gBadge count={150} limit="doubleDigit" containerColor={UX4GColors.red500} />
        </View>`;
    } else if (story === 'badge-standalone' || story === 'badge-label') {
      componentsSnippet = `        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Ux4gBadge variant="dot" containerColor={UX4GColors.primary600} />
          <Ux4gBadge count={7} containerColor={UX4GColors.primary600} />
          <Ux4gBadge count={12} limit="singleDigit" containerColor={UX4GColors.primary600} />
          <Ux4gBadge count={150} limit="doubleDigit" containerColor={UX4GColors.primary600} />
          <Ux4gBadge label="BETA" containerColor={UX4GColors.primary600} />
          <Ux4gBadge label="NEW" containerColor={UX4GColors.primary600} />
          <Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 14, color: UX4GColors.white })} containerColor={UX4GColors.primary600} />
          {Ux4gIcons.verification({ size: 24, color: UX4GColors.blue600 })}
          {Ux4gIcons.star({ size: 24, color: UX4GColors.gold500 })}
        </View>`;
    } else if (story === 'badge-semantic') {
      componentsSnippet = `        <View style={{ gap: 24, alignItems: 'center', justifyContent: 'center' }}>
          {/* Row 1: Dot Badges */}
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Ux4gBadge variant="dot" containerColor={UX4GColors.primary600} showBorder />
            <Ux4gBadge variant="dot" containerColor={UX4GColors.green600} showBorder />
            <Ux4gBadge variant="dot" containerColor={UX4GColors.orange500} showBorder />
            <Ux4gBadge variant="dot" containerColor={UX4GColors.red600} showBorder />
            <Ux4gBadge variant="dot" containerColor={UX4GColors.neutral300} showBorder />
            <Ux4gBadge variant="dot" containerColor={UX4GColors.cyan600} showBorder />
          </View>

          {/* Row 2: Checkmark Icon Badges */}
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.primary600} showBorder />
            <Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.green600} showBorder />
            <Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.orange500} showBorder />
            <Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.red600} showBorder />
            <Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.neutral600 })} containerColor={UX4GColors.neutral300} showBorder />
            <Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.cyan600} showBorder />
          </View>

          {/* Row 3: Count Badges (3) */}
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Ux4gBadge count={3} containerColor={UX4GColors.primary600} showBorder />
            <Ux4gBadge count={3} containerColor={UX4GColors.green600} showBorder />
            <Ux4gBadge count={3} containerColor={UX4GColors.orange500} showBorder />
            <Ux4gBadge count={3} containerColor={UX4GColors.red600} showBorder />
            <Ux4gBadge count={3} containerColor={UX4GColors.neutral300} contentColor={UX4GColors.neutral800} showBorder />
            <Ux4gBadge count={3} containerColor={UX4GColors.cyan600} showBorder />
          </View>

          {/* Row 4: Verified, Star, and Shield Icon Badges */}
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Ux4gBadge variant="readyToUse" assetPath={Ux4gIcons.verification({ size: 18 })} showBorder />
            <Ux4gBadge variant="readyToUse" assetPath={Ux4gIcons.star({ size: 18 })} showBorder />
            <Ux4gBadge variant="icon" icon={Ux4gIcons.shield({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.primary600} showBorder />
            <Ux4gBadge variant="readyToUse" assetPath={Ux4gIcons.verification({ size: 18 })} showBorder />
            <Ux4gBadge variant="readyToUse" assetPath={Ux4gIcons.star({ size: 18 })} showBorder />
          </View>
        </View>`;
    } else if (story === 'badge-overlay') {
      componentsSnippet = `        <View style={{ flexDirection: 'row', gap: 48, alignItems: 'center', justifyContent: 'center' }}>
          {/* 1. Star Icon with NEW Label Badge */}
          <Ux4gBadge label="NEW" alignment="topRight" containerColor={UX4GColors.primary600}>
            {Ux4gIcons.star({ size: 28, color: "${iconColor}" })}
          </Ux4gBadge>

          {/* 2. Thumb Up Icon with Count Badge (5) */}
          <Ux4gBadge count={5} alignment="topRight" containerColor={UX4GColors.primary600}>
            {Ux4gIcons.thumbUp({ size: 28, color: "${iconColor}" })}
          </Ux4gBadge>

          {/* 3. Verification Shield Icon with Dot Badge */}
          <Ux4gBadge variant="dot" alignment="topRight" containerColor={UX4GColors.primary600}>
            {Ux4gIcons.verification({ size: 28, color: "${iconColor}" })}
          </Ux4gBadge>
        </View>`;
    } else {
      componentsSnippet = `        <View style={{ flexDirection: 'row', gap: 24, alignItems: 'center' }}>
          <Ux4gBadge variant="dot" />
          <Ux4gBadge variant="dot" containerColor={UX4GColors.green500} />
          <Ux4gBadge variant="dot" containerColor={UX4GColors.orange500} />
          <Ux4gBadge variant="dot" containerColor={UX4GColors.blue500} />
        </View>`;
    }

    const importsUsed = ['Ux4gThemeProvider', 'UX4GColors', 'Ux4gBadge'];
    if (story === 'badge-overlay' || story === 'badge-standalone' || story === 'badge-label' || story === 'badge-semantic') {
      importsUsed.push('Ux4gIcons');
    }

    const snackCodeString = `import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ${importsUsed.join(', ')} } from 'ux4g-react-native-design-system';

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
    alignItems: 'center',
    gap: 16,
    padding: 20
  }
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gBadge%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '600px', border: 'none', borderRadius: '8px' }}
        title="Expo Snack Badge Preview"
      />
    );
  };

  /* ── Props Table Data ── */
  const propsData = [
    { name: 'child', type: 'ReactNode', default: 'undefined', desc: 'Child element around which badge is overlaid.', required: false },
    { name: 'children', type: 'ReactNode', default: 'undefined', desc: 'Alias for child.', required: false },
    { name: 'variant', type: "'dot' | 'count' | 'label' | 'icon' | 'readyToUse'", default: "'dot'", desc: 'Type of badge indicator (auto-inferred when omitted).', required: false },
    { name: 'count', type: 'number', default: 'undefined', desc: 'Numeric count value for count variant.', required: false },
    { name: 'limit', type: "'singleDigit' | 'doubleDigit'", default: "'singleDigit'", desc: 'Threshold formatting (9+ or 99+).', required: false },
    { name: 'label', type: 'string', default: 'undefined', desc: 'Short text for label variant.', required: false },
    { name: 'icon', type: 'ReactNode', default: 'undefined', desc: 'Custom icon for icon variant.', required: false },
    { name: 'assetPath', type: 'string | ImageSourcePropType | ReactNode | ((props) => ReactElement)', default: 'undefined', desc: 'Asset source for readyToUse variant.', required: false },
    { name: 'containerColor', type: 'string', default: 'theme.colors.primary', desc: 'Badge background color.', required: false },
    { name: 'contentColor', type: 'string', default: 'UX4GColors.white', desc: 'Text/icon color inside badge.', required: false },
    { name: 'alignment', type: "'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft'", default: "'topRight'", desc: 'Overlay placement when wrapping a child.', required: false },
    { name: 'offset', type: '{ top?: number; right?: number; bottom?: number; left?: number }', default: 'undefined', desc: 'Precise offset override for overlay placement.', required: false },
    { name: 'showBorder', type: 'boolean', default: 'false', desc: 'Whether to render a border around badge.', required: false },
    { name: 'borderColor', type: 'string', default: 'theme.colors.surface', desc: 'Border color when showBorder is true.', required: false },
    { name: 'style', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Style override for wrapper/standalone container.', required: false },
    { name: 'badgeStyle', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Style override for badge pill element.', required: false },
    { name: 'textStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Text style override for count/label.', required: false },
    { name: 'testID', type: 'string', default: 'undefined', desc: 'Test identifier for automation.', required: false },
  ];

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Badge</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Badges display status indicators, numerical counts, text labels, or custom icons overlayed on UI elements or standalone.
        </p>
        <p className="wb-subtitle" style={{ marginTop: 6 }}>
          This component has no required props.
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
                <CodeBlock code={codeString} language="TSX" filename="BadgeExample.tsx" />
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

export default BadgeDoc;
