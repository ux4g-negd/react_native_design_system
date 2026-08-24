import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface PatternsHeadersDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code' | 'guidelines';

export const PatternsHeadersDoc: React.FC<PatternsHeadersDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [headerVariant, setHeaderVariant] = useState<'service-header' | 'search-header'>('service-header');

  const codeString = useMemo(() => {
    if (headerVariant === 'search-header') {
      return `import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gSearchField,
  Ux4gAvatar,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';

export const SearchHeaderPattern = () => {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.container}>
      {/* Top Standard Header */}
      <Ux4gAppHeader
        title="National Portal Services"
        showBack={true}
        onBackPress={() => console.log('Back pressed')}
        trailing={
          <Ux4gAvatar
            name="Rahul Sharma"
            size="small"
            status="online"
          />
        }
      />

      {/* Integrated Search Row */}
      <View style={styles.searchContainer}>
        <Ux4gSearchField
          value={query}
          onValueChange={setQuery}
          placeholder="Search certificates, schemes, licenses..."
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
});`;
    }

    return `import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gAvatar,
  Ux4gBadge,
  Ux4gIconButton,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';
import Svg, { Path } from 'react-native-svg';

const BellIcon = ({ color, size }: { color: string; size: number }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <Path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </Svg>
);

const HelpIcon = ({ color, size }: { color: string; size: number }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <Path d="M12 17h.01" />
  </Svg>
);

export const ServiceAppHeaderPattern = () => {
  return (
    <View style={styles.container}>
      <Ux4gAppHeader
        title="DigiLocker Services"
        showBack={true}
        onBackPress={() => console.log('Back')}
        trailing={
          <View style={styles.actions}>
            <Ux4gIconButton
              icon={BellIcon}
              variant="ghost"
              size={36}
              onPress={() => console.log('Notifications')}
            />
            <Ux4gIconButton
              icon={HelpIcon}
              variant="ghost"
              size={36}
              onPress={() => console.log('Help')}
            />
            <Ux4gAvatar
              name="Anita Desai"
              size="small"
              status="online"
            />
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});`;
  }, [headerVariant]);

  const renderStoryPreview = () => {
    const snackCodeString = `import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gAvatar,
  Ux4gSearchField,
  Ux4gCard,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';

export default function App() {
  const [search, setSearch] = useState('');

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={[styles.screen, { backgroundColor: ${isDark ? "'#121212'" : "'#F9FAFB'"} }]}>
        {/* Ministry App Header */}
        <Ux4gAppHeader
          title="Digital India Citizen Portal"
          showBack={true}
          onBackPress={() => {}}
          trailing={
            <Ux4gAvatar
              name="Pooja Sharma"
              size="small"
              status="online"
            />
          }
        />

        <View style={styles.body}>
          <Ux4gSearchField
            value={search}
            onValueChange={setSearch}
            placeholder="Search citizen services..."
          />

          <View style={{ height: 16 }} />

          <Ux4gCard
            title="Service Dashboard"
            subtitle="Access authenticated welfare applications and issued certificates."
            variant="elevated"
          />
        </View>
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  body: {
    padding: 16,
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${
      isDark ? 'dark' : 'light'
    }&name=UX4G%20Header%20Pattern&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(
      snackCodeString
    )}`;

    return (
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
          <button
            className={`wb-tab ${headerVariant === 'service-header' ? 'active' : ''}`}
            onClick={() => setHeaderVariant('service-header')}
            type="button"
          >
            Service App Header
          </button>
          <button
            className={`wb-tab ${headerVariant === 'search-header' ? 'active' : ''}`}
            onClick={() => setHeaderVariant('search-header')}
            type="button"
          >
            Search Integrated Header
          </button>
        </div>

        <iframe
          src={snackUrl}
          style={{ width: '100%', height: '560px', border: 'none', borderRadius: '8px' }}
          title="Expo Snack Header Pattern Preview"
        />
      </div>
    );
  };

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Header Patterns</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Government-grade header compositions featuring official titles, back navigation, user identity status, notification hubs, and search integration.
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
              className={`wb-tab ${activeMainTab === 'guidelines' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('guidelines')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">menu_book</span> Guidelines
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
                <CodeBlock
                  code={codeString}
                  language="TSX"
                  filename={headerVariant === 'service-header' ? 'ServiceAppHeader.tsx' : 'SearchHeaderPattern.tsx'}
                />
              </div>
            )}

            {activeMainTab === 'guidelines' && (
              <div className="wb-props-area" style={{ padding: '24px 0' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Public Service Header Best Practices</h3>
                <div className="cards-grid cards-grid-2x2" style={{ marginTop: 16 }}>
                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <span className="material-symbols-outlined">navigation</span>
                    </div>
                    <h4 className="feature-card-title">Consistent Navigation Hierarchy</h4>
                    <p className="feature-card-desc">
                      Always provide a clear back button on inner detail and step screens. Top-level tabs or home dashboards should omit the back button.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <span className="material-symbols-outlined">account_circle</span>
                    </div>
                    <h4 className="feature-card-title">Authenticated Identity</h4>
                    <p className="feature-card-desc">
                      Use <code>Ux4gAvatar</code> on the right side of the header to confirm citizen session status and provide quick access to profile settings.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <span className="material-symbols-outlined">search</span>
                    </div>
                    <h4 className="feature-card-title">Search Affordance</h4>
                    <p className="feature-card-desc">
                      For large multi-service portals, embed the <code>Ux4gSearchField</code> directly underneath the header for immediate discoverability.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <span className="material-symbols-outlined">notifications</span>
                    </div>
                    <h4 className="feature-card-title">Action Density</h4>
                    <p className="feature-card-desc">
                      Limit header actions to 2-3 icons maximum (e.g., Notifications, Help, Profile) to prevent visual clutter and accidental taps on mobile.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternsHeadersDoc;
