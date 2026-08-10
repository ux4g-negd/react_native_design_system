import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface AvatarDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const AvatarDoc: React.FC<AvatarDocProps> = ({ isDark, story = 'avatar-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import { View } from 'react-native';`);

    if (story === 'avatar-status') {
      lines.push(`import { Ux4gStatusAvatar } from 'ux4g-react-native-design-system';`);
      lines.push('');
      lines.push('// Status Avatars (Initials)');
      lines.push('<Ux4gStatusAvatar variant="online" initials="JD" size="l" />');
      lines.push('<Ux4gStatusAvatar variant="busy" initials="AB" size="l" />');
      lines.push('<Ux4gStatusAvatar variant="offline" initials="CK" size="l" />');
      lines.push('<Ux4gStatusAvatar variant="warning" initials="MS" size="l" />');
      lines.push('<Ux4gStatusAvatar variant="error" initials="RK" size="l" />');
      lines.push('');
      lines.push('// Status Avatars (Image)');
      lines.push('<Ux4gStatusAvatar variant="online" imageUrl="https://i.pravatar.cc/150?u=user1" size="l" />');
      lines.push('<Ux4gStatusAvatar variant="busy" imageUrl="https://i.pravatar.cc/150?u=user2" size="l" />');
      lines.push('<Ux4gStatusAvatar variant="offline" imageUrl="https://i.pravatar.cc/150?u=user3" size="l" />');
      lines.push('<Ux4gStatusAvatar variant="warning" imageUrl="https://i.pravatar.cc/150?u=user4" size="l" />');
      lines.push('<Ux4gStatusAvatar variant="error" imageUrl="https://i.pravatar.cc/150?u=user5" size="l" />');
    } else if (story === 'avatar-profile') {
      lines.push(`import { Ux4gProfileAvatar } from 'ux4g-react-native-design-system';`);
      lines.push('');
      lines.push('// Profile Badges & Actions (Initials)');
      lines.push('<Ux4gProfileAvatar variant="verified" initials="JD" size="l" />');
      lines.push('<Ux4gProfileAvatar variant="star" initials="AB" size="l" />');
      lines.push('<Ux4gProfileAvatar variant="admin" initials="CK" size="l" />');
      lines.push('<Ux4gProfileAvatar variant="edit" initials="MS" size="l" />');
      lines.push('<Ux4gProfileAvatar variant="camera" initials="RK" size="l" />');
      lines.push('<Ux4gProfileAvatar variant="remove" initials="VP" size="l" />');
      lines.push('');
      lines.push('// Profile Badges & Actions (Image)');
      lines.push('<Ux4gProfileAvatar variant="verified" imageUrl="https://i.pravatar.cc/150?u=user1" size="l" />');
      lines.push('<Ux4gProfileAvatar variant="star" imageUrl="https://i.pravatar.cc/150?u=user2" size="l" />');
      lines.push('<Ux4gProfileAvatar variant="admin" imageUrl="https://i.pravatar.cc/150?u=user3" size="l" />');
      lines.push('<Ux4gProfileAvatar variant="edit" imageUrl="https://i.pravatar.cc/150?u=user4" size="l" />');
      lines.push('<Ux4gProfileAvatar variant="camera" imageUrl="https://i.pravatar.cc/150?u=user5" size="l" />');
      lines.push('<Ux4gProfileAvatar variant="remove" imageUrl="https://i.pravatar.cc/150?u=user6" size="l" />');
    } else if (story === 'avatar-group') {
      lines.push(`import { Ux4gAvatarGroup } from 'ux4g-react-native-design-system';`);
      lines.push('');
      lines.push('// Group with Images (Collapsed Overlapping)');
      lines.push('<Ux4gAvatarGroup');
      lines.push('  items={[');
      lines.push('    { imageUrl: "https://i.pravatar.cc/150?u=user1" },');
      lines.push('    { imageUrl: "https://i.pravatar.cc/150?u=user2" },');
      lines.push('    { imageUrl: "https://i.pravatar.cc/150?u=user3" },');
      lines.push('    { imageUrl: "https://i.pravatar.cc/150?u=user4" },');
      lines.push('    { imageUrl: "https://i.pravatar.cc/150?u=user5" }');
      lines.push('  ]}');
      lines.push('  maxLimit={4}');
      lines.push('  collapsed={true}');
      lines.push('/>');
      lines.push('');
      lines.push('// Group with Mixed Images & Initials (Spaced)');
      lines.push('<Ux4gAvatarGroup');
      lines.push('  items={[');
      lines.push('    { imageUrl: "https://i.pravatar.cc/150?u=user1" },');
      lines.push('    { imageUrl: "https://i.pravatar.cc/150?u=user2" },');
      lines.push('    { initials: "CK" },');
      lines.push('    { initials: "MS" }');
      lines.push('  ]}');
      lines.push('  collapsed={false}');
      lines.push('/>');
    } else {
      lines.push(`import { Ux4gAvatar } from 'ux4g-react-native-design-system';`);
      lines.push('');
      lines.push('// Initials Avatar (Sizes xs to xxl)');
      lines.push('<Ux4gAvatar initials="XS" size="xs" />');
      lines.push('<Ux4gAvatar initials="S" size="s" />');
      lines.push('<Ux4gAvatar initials="M" size="m" />');
      lines.push('<Ux4gAvatar initials="L" size="l" />');
      lines.push('<Ux4gAvatar initials="XL" size="xl" />');
      lines.push('<Ux4gAvatar initials="XXL" size="xxl" />');
      lines.push('');
      lines.push('// Image Avatars Across Sizes');
      lines.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user1" size="xs" />');
      lines.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user2" size="s" />');
      lines.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user3" size="m" />');
      lines.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user4" size="l" />');
      lines.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user5" size="xl" />');
      lines.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user6" size="xxl" />');
      lines.push('');
      lines.push('// Shapes with Images (Circle, Rounded, Square)');
      lines.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user1" size="l" shape="circle" />');
      lines.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user2" size="l" shape="rounded" />');
      lines.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user3" size="l" shape="square" />');
    }

    return lines.join('\n');
  }, [story]);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    let componentsSnippet = '';

    if (story === 'avatar-status') {
      componentsSnippet = `        <View style={{ gap: 16, alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <Ux4gStatusAvatar variant="online" initials="JD" size="l" />
            <Ux4gStatusAvatar variant="busy" initials="AB" size="l" />
            <Ux4gStatusAvatar variant="offline" initials="CK" size="l" />
            <Ux4gStatusAvatar variant="warning" initials="MS" size="l" />
            <Ux4gStatusAvatar variant="error" initials="RK" size="l" />
          </View>
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <Ux4gStatusAvatar variant="online" imageUrl="https://i.pravatar.cc/150?u=user1" size="l" />
            <Ux4gStatusAvatar variant="busy" imageUrl="https://i.pravatar.cc/150?u=user2" size="l" />
            <Ux4gStatusAvatar variant="offline" imageUrl="https://i.pravatar.cc/150?u=user3" size="l" />
            <Ux4gStatusAvatar variant="warning" imageUrl="https://i.pravatar.cc/150?u=user4" size="l" />
            <Ux4gStatusAvatar variant="error" imageUrl="https://i.pravatar.cc/150?u=user5" size="l" />
          </View>
        </View>`;
    } else if (story === 'avatar-profile') {
      componentsSnippet = `        <View style={{ gap: 16, alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <Ux4gProfileAvatar variant="verified" initials="JD" size="l" />
            <Ux4gProfileAvatar variant="star" initials="AB" size="l" />
            <Ux4gProfileAvatar variant="admin" initials="CK" size="l" />
            <Ux4gProfileAvatar variant="edit" initials="MS" size="l" />
            <Ux4gProfileAvatar variant="camera" initials="RK" size="l" />
            <Ux4gProfileAvatar variant="remove" initials="VP" size="l" />
          </View>
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <Ux4gProfileAvatar variant="verified" imageUrl="https://i.pravatar.cc/150?u=user1" size="l" />
            <Ux4gProfileAvatar variant="star" imageUrl="https://i.pravatar.cc/150?u=user2" size="l" />
            <Ux4gProfileAvatar variant="admin" imageUrl="https://i.pravatar.cc/150?u=user3" size="l" />
            <Ux4gProfileAvatar variant="edit" imageUrl="https://i.pravatar.cc/150?u=user4" size="l" />
            <Ux4gProfileAvatar variant="camera" imageUrl="https://i.pravatar.cc/150?u=user5" size="l" />
            <Ux4gProfileAvatar variant="remove" imageUrl="https://i.pravatar.cc/150?u=user6" size="l" />
          </View>
        </View>`;
    } else if (story === 'avatar-group') {
      componentsSnippet = `        <View style={{ gap: 24, alignItems: 'center' }}>
          <Ux4gAvatarGroup
            items={[
              { imageUrl: 'https://i.pravatar.cc/150?u=user1' },
              { imageUrl: 'https://i.pravatar.cc/150?u=user2' },
              { imageUrl: 'https://i.pravatar.cc/150?u=user3' },
              { imageUrl: 'https://i.pravatar.cc/150?u=user4' },
              { imageUrl: 'https://i.pravatar.cc/150?u=user5' },
            ]}
            maxLimit={4}
            collapsed={true}
          />
          <Ux4gAvatarGroup
            items={[
              { imageUrl: 'https://i.pravatar.cc/150?u=user1' },
              { imageUrl: 'https://i.pravatar.cc/150?u=user2' },
              { initials: 'CK' },
              { initials: 'MS' },
            ]}
            collapsed={false}
          />
        </View>`;
    } else {
      componentsSnippet = `        <View style={{ gap: 24, alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <Ux4gAvatar initials="XS" size="xs" />
            <Ux4gAvatar initials="S" size="s" />
            <Ux4gAvatar initials="M" size="m" />
            <Ux4gAvatar initials="L" size="l" />
            <Ux4gAvatar initials="XL" size="xl" />
            <Ux4gAvatar initials="XXL" size="xxl" />
          </View>
          <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user1" size="xs" />
            <Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user2" size="s" />
            <Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user3" size="m" />
            <Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user4" size="l" />
            <Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user5" size="xl" />
            <Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user6" size="xxl" />
          </View>
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
            <Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user1" size="l" shape="circle" />
            <Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user2" size="l" shape="rounded" />
            <Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user3" size="l" shape="square" />
          </View>
        </View>`;
    }

    const importsUsed = ['Ux4gThemeProvider'];
    if (story === 'avatar-status') importsUsed.push('Ux4gStatusAvatar');
    else if (story === 'avatar-profile') importsUsed.push('Ux4gProfileAvatar');
    else if (story === 'avatar-group') importsUsed.push('Ux4gAvatarGroup');
    else importsUsed.push('Ux4gAvatar');

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

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gAvatar%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.2,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '600px', border: 'none', borderRadius: '8px' }}
        title="Expo Snack Avatar Preview"
      />
    );
  };

  /* ── Props Table Data ── */
  const propsData = useMemo(() => {
    if (story === 'avatar-group') {
      return [
        { name: 'items', type: 'Ux4gAvatarGroupItem[]', default: '—', desc: 'List of avatar group items.', required: true },
        { name: 'size', type: "'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'", default: "'m'", desc: 'Avatar size for all items.', required: false },
        { name: 'maxLimit', type: 'number', default: 'items.length', desc: 'Maximum visible entries before +N overflow.', required: false },
        { name: 'collapsed', type: 'boolean', default: 'true', desc: 'Use overlapping collapsed layout.', required: false },
        { name: 'borderColor', type: 'string', default: 'theme.colors.surface', desc: 'Border color in collapsed mode.', required: false },
        { name: 'borderWidth', type: 'number', default: '2', desc: 'Border width in collapsed mode.', required: false },
        { name: 'onRemainingPress', type: '() => void', default: 'undefined', desc: 'Callback for +N remaining bubble.', required: false },
        { name: 'containerStyle', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Style override for group container.', required: false },
        { name: 'testID', type: 'string', default: 'undefined', desc: 'Test identifier for automation.', required: false },
      ];
    }

    if (story === 'avatar-status') {
      return [
        { name: 'size', type: "'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'", default: "'m'", desc: 'Size preset of status avatar.', required: false },
        { name: 'shape', type: "'circle' | 'rounded' | 'square'", default: "'circle'", desc: 'Shape of the main avatar.', required: false },
        { name: 'imageUrl', type: 'string', default: 'undefined', desc: 'Remote image URL.', required: false },
        { name: 'initials', type: 'string', default: 'undefined', desc: 'Fallback initials.', required: false },
        { name: 'avatarIcon', type: 'ReactNode', default: 'undefined', desc: 'Custom fallback icon for avatar.', required: false },
        { name: 'variant', type: "'online' | 'offline' | 'busy' | 'success' | 'error' | 'warning'", default: "'online'", desc: 'Status indicator variant.', required: false },
        { name: 'statusSize', type: 'number', default: 'auto by size', desc: 'Override size of status indicator.', required: false },
        { name: 'containerStyle', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Style override for outer wrapper.', required: false },
        { name: 'testID', type: 'string', default: 'undefined', desc: 'Test identifier for automation.', required: false },
      ];
    }

    if (story === 'avatar-profile') {
      return [
        { name: 'size', type: "'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'", default: "'m'", desc: 'Size preset of profile avatar.', required: false },
        { name: 'shape', type: "'circle' | 'rounded' | 'square'", default: "'circle'", desc: 'Shape of the main avatar.', required: false },
        { name: 'imageUrl', type: 'string', default: 'undefined', desc: 'Remote image URL.', required: false },
        { name: 'initials', type: 'string', default: 'undefined', desc: 'Fallback initials.', required: false },
        { name: 'avatarIcon', type: 'ReactNode', default: 'undefined', desc: 'Custom fallback icon for avatar.', required: false },
        { name: 'variant', type: "'verified' | 'star' | 'admin' | 'edit' | 'camera' | 'remove'", default: 'undefined', desc: 'Badge/action variant overlay.', required: false },
        { name: 'badgeSize', type: 'number', default: 'auto by size', desc: 'Override overlay badge/action size.', required: false },
        { name: 'onVariantPress', type: '() => void', default: 'undefined', desc: 'Callback when overlay badge/action is pressed.', required: false },
        { name: 'containerStyle', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Style override for outer wrapper.', required: false },
        { name: 'testID', type: 'string', default: 'undefined', desc: 'Test identifier for automation.', required: false },
      ];
    }

    return [
      { name: 'size', type: "'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'", default: "'m'", desc: 'Size preset of the avatar.', required: false },
      { name: 'shape', type: "'circle' | 'rounded' | 'square'", default: "'circle'", desc: 'Shape of the avatar border.', required: false },
      { name: 'imageUrl', type: 'string', default: 'undefined', desc: 'Remote image URL.', required: false },
      { name: 'initials', type: 'string', default: 'undefined', desc: 'Fallback text initials.', required: false },
      { name: 'icon', type: 'ReactNode', default: 'undefined', desc: 'Custom icon widget.', required: false },
      { name: 'containerColor', type: 'string', default: 'theme.colors.primary + 1A', desc: 'Background container color.', required: false },
      { name: 'contentColor', type: 'string', default: 'theme.colors.primary', desc: 'Text color for initials.', required: false },
      { name: 'iconColor', type: 'string', default: 'theme.colors.primary', desc: 'Icon color when icon is shown.', required: false },
      { name: 'containerStyle', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Style override for avatar container.', required: false },
      { name: 'testID', type: 'string', default: 'undefined', desc: 'Test identifier for automation.', required: false },
    ];
  }, [story]);

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Avatar</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Avatars represent user profiles, initials, status badges, and group representations across 7 sizes.
        </p>
        <p className="wb-subtitle" style={{ marginTop: 6 }}>
          {propsData.some((p) => p.required)
            ? <><span style={{ color: '#E11D48', fontWeight: 700 }}>*</span> marks required props.</>
            : 'This component variant has no required props.'}
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
                <CodeBlock code={codeString} language="TSX" filename="AvatarExample.tsx" />
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

export default AvatarDoc;
