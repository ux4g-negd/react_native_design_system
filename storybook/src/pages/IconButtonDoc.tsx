import React, { useState, useMemo } from 'react';
import { Ux4gButtonVariant } from '../../../src/components/button/Button';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';

interface IconButtonDocProps {
  isDark: boolean;
  story?: string;
}

export const IconButtonDoc: React.FC<IconButtonDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<'preview' | 'code' | 'props'>('preview');

  const [variant, setVariant] = useState<Ux4gButtonVariant>('primary');
  const [size, setSize] = useState<number>(40);
  const [enabled, setEnabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import { Ux4gIconButton } from 'ux4g-react-native-design-system';`);
    lines.push(`import Svg, { Path } from 'react-native-svg';`);
    lines.push('');
    lines.push('const HeartIcon = ({ color, size }: any) => (');
    lines.push('  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>');
    lines.push('    <Path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>');
    lines.push('  </Svg>');
    lines.push(');');
    lines.push('');
    lines.push('const ShareIcon = ({ color, size }: any) => (');
    lines.push('  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">');
    lines.push('    <Path d="M18 8a3 3 0 100-6 3 3 0 000 6zM6 15a3 3 0 100-6 3 3 0 000 6zM18 22a3 3 0 100-6 3 3 0 000 6zM8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />');
    lines.push('  </Svg>');
    lines.push(');');
    lines.push('');
    lines.push('const TrashIcon = ({ color, size }: any) => (');
    lines.push('  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">');
    lines.push('    <Path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />');
    lines.push('  </Svg>');
    lines.push(');');
    lines.push('');
    lines.push('<View style={styles.row}>');
    lines.push('  <Ux4gIconButton');
    lines.push(`    icon={HeartIcon}`);
    lines.push(`    variant="primary"`);
    if (size !== 40) lines.push(`    size={${size}}`);
    if (!enabled) lines.push('    enabled={false}');
    if (loading) lines.push('    isLoading={true}');
    lines.push('  />');
    lines.push('  <Ux4gIconButton');
    lines.push(`    icon={ShareIcon}`);
    lines.push(`    variant="outline"`);
    if (size !== 40) lines.push(`    size={${size}}`);
    if (!enabled) lines.push('    enabled={false}');
    if (loading) lines.push('    isLoading={true}');
    lines.push('  />');
    lines.push('  <Ux4gIconButton');
    lines.push(`    icon={TrashIcon}`);
    lines.push(`    variant="ghost"`);
    if (size !== 40) lines.push(`    size={${size}}`);
    if (!enabled) lines.push('    enabled={false}');
    if (loading) lines.push('    isLoading={true}');
    lines.push('  />');
    lines.push('</View>');
    return lines.join('\n');
  }, [variant, size, enabled, loading]);

  const renderStoryPreview = () => {
    const componentsSnippet = `        <View style={styles.row}>
          <Ux4gIconButton
            icon={HeartIcon}
            variant="primary"
          />
          <Ux4gIconButton
            icon={ShareIcon}
            variant="outline"
          />
          <Ux4gIconButton
            icon={TrashIcon}
            variant="ghost"
          />
        </View>`;

    const snackCodeString = `import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gIconButton, Ux4gThemeProvider, UX4GColors } from 'ux4g-react-native-design-system';
import Svg, { Path } from 'react-native-svg';

const HeartIcon = ({ color, size }: any) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <Path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </Svg>
);

const ShareIcon = ({ color, size }: any) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M18 8a3 3 0 100-6 3 3 0 000 6zM6 15a3 3 0 100-6 3 3 0 000 6zM18 22a3 3 0 100-6 3 3 0 000 6zM8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
  </Svg>
);

const TrashIcon = ({ color, size }: any) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
  </Svg>
);

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
    padding: 20,
    backgroundColor: ${isDark ? 'UX4GColors.neutral900' : 'UX4GColors.neutral50'}
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32
  }
});`;
    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gIconButton%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;
    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '600px', border: 'none', borderRadius: '8px' }}
        title="Expo Snack Preview"
      />
    );
  };

  const propsData = [
    { name: 'icon', type: 'Ux4gIconProp', default: '—', desc: 'Icon element or callback ({ color, size }) => ReactNode.', required: true },
    { name: 'isLoading', type: 'boolean', default: 'false', desc: 'Displays spinner instead of icon.', required: false },
    { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost'", default: "'primary'", desc: 'Visual button style variant.', required: false },
    { name: 'size', type: 'number', default: '40', desc: 'Square width and height in points.', required: false },
    { name: 'enabled', type: 'boolean', default: 'true', desc: 'Whether icon button is interactive.', required: false },
    { name: 'backgroundColor', type: 'string', default: 'variant-based token', desc: 'Background color override.', required: false },
    { name: 'contentColor', type: 'string', default: 'variant-based token', desc: 'Icon foreground color override.', required: false },
    { name: 'borderColor', type: 'string', default: 'variant-based token', desc: 'Border color override.', required: false },
    { name: 'borderRadius', type: 'number', default: 'theme.radius.radius8', desc: 'Corner radius override.', required: false },
    { name: 'elevation', type: 'number', default: '0', desc: 'Android elevation/iOS shadow depth.', required: false },
    { name: 'style', type: 'StyleProp<ViewStyle> | (state) => StyleProp<ViewStyle>', default: 'undefined', desc: 'Style override for icon button container.', required: false },
    { name: 'onPress', type: '() => void', default: 'required', desc: 'Press handler callback.', required: true },
    { name: 'testID', type: 'string', default: 'undefined', desc: 'Test identifier for automation.', required: false },
  ];

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">IconButton</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">Icon button contain only an icon and do not include text labels. It is used to represent common actions in a compact and visually accessible way.</p>
        <p className="wb-subtitle" style={{ marginTop: 6 }}>
          <span style={{ color: '#E11D48', fontWeight: 700 }}>*</span> marks required props.
        </p>
      </div>

      <div className="wb-body" style={{ display: 'block' }}>
        <div className="wb-main" style={{ width: '100%' }}>
          <div className="wb-tab-bar">
            <button className={`wb-tab ${activeMainTab === 'preview' ? 'active' : ''}`} onClick={() => setActiveMainTab('preview')} type="button">
              <span className="material-symbols-outlined wb-tab-icon">visibility</span> Preview
            </button>
            <button className={`wb-tab ${activeMainTab === 'code' ? 'active' : ''}`} onClick={() => setActiveMainTab('code')} type="button">
              <span className="material-symbols-outlined wb-tab-icon">code</span> Code
            </button>
            <button className={`wb-tab ${activeMainTab === 'props' ? 'active' : ''}`} onClick={() => setActiveMainTab('props')} type="button">
              <span className="material-symbols-outlined wb-tab-icon">list_alt</span> Props
            </button>
          </div>
          <div className="wb-content">
            {activeMainTab === 'preview' && renderStoryPreview()}
            {activeMainTab === 'code' && (
              <pre style={{ padding: 16, backgroundColor: isDark ? '#1e1e1e' : '#f5f5f5', borderRadius: 8, overflow: 'auto' }}>
                <code>{codeString}</code>
              </pre>
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
