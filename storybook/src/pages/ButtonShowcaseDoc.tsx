import React, { useState } from 'react';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';

export const ButtonShowcaseDoc: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<'preview' | 'code'>('preview');

  const componentsSnippet = `        <View style={styles.row}>
          <Ux4gButton text="Primary" variant="primary" />
          <Ux4gButton text="Tonal" variant="primary" backgroundColor={${isDark ? 'UX4GColors.primary700' : 'UX4GColors.primary50'}} contentColor={${isDark ? 'UX4GColors.primary50' : 'UX4GColors.primary600'}} />
          <Ux4gButton text="Outline" variant="outline" />
          <Ux4gButton text="Ghost" variant="ghost" />
        </View>

        <View style={styles.row}>
          <Ux4gButton text="Button" variant="primary" isLoading={true} />
          <Ux4gButton text="Tonal" variant="primary" backgroundColor={${isDark ? 'UX4GColors.primary700' : 'UX4GColors.primary50'}} contentColor={${isDark ? 'UX4GColors.primary50' : 'UX4GColors.primary600'}} isLoading={true} />
          <Ux4gButton text="Button" variant="outline" isLoading={true} />
          <Ux4gButton text="Button" variant="ghost" isLoading={true} />
        </View>

        <View style={styles.row}>
          <Ux4gButton text="Button" variant="primary" leadingIcon={PlusIcon} />
          <Ux4gButton text="Tonal" variant="primary" backgroundColor={${isDark ? 'UX4GColors.primary700' : 'UX4GColors.primary50'}} contentColor={${isDark ? 'UX4GColors.primary50' : 'UX4GColors.primary600'}} leadingIcon={PlusIcon} />
          <Ux4gButton text="Button" variant="primary" trailingIcon={ArrowIcon} />
          <Ux4gButton text="Tonal" variant="primary" backgroundColor={${isDark ? 'UX4GColors.primary700' : 'UX4GColors.primary50'}} contentColor={${isDark ? 'UX4GColors.primary50' : 'UX4GColors.primary600'}} trailingIcon={ArrowIcon} />
          <Ux4gButton text="Button" variant="primary" leadingIcon={PlusIcon} trailingIcon={ArrowIcon} />
          <Ux4gButton text="Tonal" variant="primary" backgroundColor={${isDark ? 'UX4GColors.primary700' : 'UX4GColors.primary50'}} contentColor={${isDark ? 'UX4GColors.primary50' : 'UX4GColors.primary600'}} leadingIcon={PlusIcon} trailingIcon={ArrowIcon} />
        </View>`;

  const snackCodeString = `import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Ux4gButton, Ux4gThemeProvider, UX4GColors } from 'ux4g-react-native-design-system';
import Svg, { Path } from 'react-native-svg';

const PlusIcon = ({ color, size }: any) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 5V19M5 12H19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const ArrowIcon = ({ color, size }: any) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M7 10L12 15L17 10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <ScrollView contentContainerStyle={styles.container}>
${componentsSnippet}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 24,
    padding: 32,
    backgroundColor: ${isDark ? 'UX4GColors.neutral900' : 'UX4GColors.neutral100'}
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  }
});`;

  const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gButton%20Showcase&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.0,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Button Showcase</h1>
          <span className="wb-badge">Showcase</span>
        </div>
        <p className="wb-subtitle">A full grid showcase of button variants, matching the Flutter widgetbook layout.</p>
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
          </div>

          <div className="wb-content">
            {activeMainTab === 'preview' ? (
              <iframe src={snackUrl} style={{ width: '100%', height: '600px', border: 'none', borderRadius: '8px' }} title="Expo Snack Preview" />
            ) : (
              <pre style={{ padding: 16, backgroundColor: isDark ? '#1e1e1e' : '#f5f5f5', borderRadius: 8, overflow: 'auto' }}>
                <code>{snackCodeString}</code>
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
