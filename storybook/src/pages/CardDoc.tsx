import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface CardDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const CardDoc: React.FC<CardDocProps> = ({ isDark, story = 'card-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import { Ux4gCard, UX4GColors } from 'ux4g-react-native-design-system';`);
    lines.push('');

    const bgVal = isDark ? 'UX4GColors.neutral900' : 'UX4GColors.white';
    const borderVal = isDark ? 'UX4GColors.neutral700' : 'UX4GColors.neutral200';

    lines.push('<View style={{ width: "100%", maxWidth: 360 }}>');

    if (story === 'card-actions') {
      lines.push('  // Card With Footer Actions');
      lines.push('  <Ux4gCard');
      lines.push('    title="Card with Actions"');
      lines.push('    body="This card has primary and secondary action buttons."');
      lines.push('    footerType="primaryAndSecondary"');
      lines.push('    primaryButtonText="Confirm"');
      lines.push('    secondaryButtonText="Cancel"');
      lines.push('    borderWidth={1}');
      lines.push(`    borderColor={${borderVal}}`);
      lines.push('    elevation={2}');
      lines.push(`    backgroundColor={${bgVal}}`);
      lines.push('  />');
    } else if (story === 'card-horizontal') {
      lines.push('  // Horizontal Card Layout');
      lines.push('  <Ux4gCard');
      lines.push('    direction="horizontal"');
      lines.push('    mediaImageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400"');
      lines.push('    title="Horizontal Card"');
      lines.push('    subtitle="Side-by-side layout"');
      lines.push('    body="The media thumbnail appears on the left in horizontal mode."');
      lines.push('    borderWidth={1}');
      lines.push(`    borderColor={${borderVal}}`);
      lines.push('    elevation={2}');
      lines.push(`    backgroundColor={${bgVal}}`);
      lines.push('  />');
    } else if (story === 'card-media') {
      lines.push('  // Media Card Layout');
      lines.push('  <Ux4gCard');
      lines.push('    mediaImageUrl="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600"');
      lines.push('    title="Media Card"');
      lines.push('    subtitle="Hero image above content"');
      lines.push('    body="This card displays a hero image at the top."');
      lines.push('    borderWidth={1}');
      lines.push(`    borderColor={${borderVal}}`);
      lines.push('    elevation={2}');
      lines.push(`    backgroundColor={${bgVal}}`);
      lines.push('  />');
    } else if (story === 'card-rich' || story === 'card-full-vertical') {
      lines.push('  // Complex Rich Card (Custom Composition)');
      lines.push('  <Ux4gCard');
      lines.push('    mediaImageUrl="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600"');
      lines.push('    mediaLabelText="Label"');
      lines.push('    title="Title"');
      lines.push('    subtitle="Subtitle"');
      lines.push('    statusChips={["Label", "Label", "Label"]}');
      lines.push('    body="Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."');
      lines.push('    bottomChips={["Label", "Label", "Label", "Label"]}');
      lines.push('    footerType="primaryAndSecondary"');
      lines.push('    primaryButtonText="+ Button"');
      lines.push('    secondaryButtonText="+ Button"');
      lines.push('    borderWidth={1}');
      lines.push(`    borderColor={${borderVal}}`);
      lines.push('    elevation={2}');
      lines.push(`    backgroundColor={${bgVal}}`);
      lines.push('  />');
    } else if (story === 'card-rich-horizontal') {
      lines.push('  // Complex Rich Card (Horizontal)');
      lines.push('  <Ux4gCard');
      lines.push('    direction="horizontal"');
      lines.push('    mediaImageUrl="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600"');
      lines.push('    mediaLabelText="Label"');
      lines.push('    avatar={<Ux4gAvatar initials="JD" size="m" />}');
      lines.push('    title="Title"');
      lines.push('    subtitle="Subtitle"');
      lines.push('    statusChips={["Label", "Label", "Label"]}');
      lines.push('    body="Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."');
      lines.push('    bottomChips={["Label", "Label", "Label", "Label"]}');
      lines.push('    footerType="primaryAndSecondary"');
      lines.push('    primaryButtonText="Button"');
      lines.push('    secondaryButtonText="Button"');
      lines.push('    borderWidth={1}');
      lines.push(`    borderColor={${borderVal}}`);
      lines.push('    elevation={2}');
      lines.push(`    backgroundColor={${bgVal}}`);
      lines.push('  />');
    } else {
      lines.push('  // Basic Card Layout');
      lines.push('  <Ux4gCard');
      lines.push('    title="Card Title"');
      lines.push('    subtitle="Card subtitle"');
      lines.push('    body="This is the card body."');
      lines.push('    borderWidth={1}');
      lines.push(`    borderColor={${borderVal}}`);
      lines.push('    elevation={2}');
      lines.push(`    backgroundColor={${bgVal}}`);
      lines.push('  />');
    }

    lines.push('</View>');
    return lines.join('\n');
  }, [story, isDark]);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    let componentsSnippet = '';
    const cardBgColor = isDark ? 'UX4GColors.neutral900' : 'UX4GColors.white';
    const cardBorderColor = isDark ? 'UX4GColors.neutral700' : 'UX4GColors.neutral200';

    if (story === 'card-actions') {
      componentsSnippet = `          <Ux4gCard
            title="Card with Actions"
            body="This card has primary and secondary action buttons."
            footerType="primaryAndSecondary"
            primaryButtonText="Confirm"
            secondaryButtonText="Cancel"
            borderWidth={1}
            borderColor={${cardBorderColor}}
            elevation={2}
            backgroundColor={${cardBgColor}}
          />`;
    } else if (story === 'card-horizontal') {
      componentsSnippet = `          <Ux4gCard
            direction="horizontal"
            mediaImageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400"
            title="Horizontal Card"
            subtitle="Side-by-side layout"
            body="The media thumbnail appears on the left in horizontal mode."
            borderWidth={1}
            borderColor={${cardBorderColor}}
            elevation={2}
            backgroundColor={${cardBgColor}}
          />`;
    } else if (story === 'card-media') {
      componentsSnippet = `          <Ux4gCard
            mediaImageUrl="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600"
            title="Media Card"
            subtitle="Hero image above content"
            body="This card displays a hero image at the top."
            borderWidth={1}
            borderColor={${cardBorderColor}}
            elevation={2}
            backgroundColor={${cardBgColor}}
          />`;
    } else if (story === 'card-rich' || story === 'card-full-vertical') {
      componentsSnippet = `          <Ux4gCard
            mediaImageUrl="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600"
            mediaLabelText="Label"
            avatar={<Ux4gAvatar initials="JD" size="m" />}
            title="Title"
            subtitle="Subtitle"
            statusChips={["Label", "Label", "Label"]}
            body="Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."
            bottomChips={["Label", "Label", "Label", "Label"]}
            footerType="primaryAndSecondary"
            primaryButtonText="+ Button"
            secondaryButtonText="+ Button"
            borderWidth={1}
            borderColor={${cardBorderColor}}
            elevation={2}
            backgroundColor={${cardBgColor}}
          />`;
    } else if (story === 'card-rich-horizontal') {
      componentsSnippet = `          <Ux4gCard
            direction="horizontal"
            mediaImageUrl="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600"
            mediaLabelText="Label"
            avatar={<Ux4gAvatar initials="JD" size="m" />}
            title="Title"
            subtitle="Subtitle"
            statusChips={["Label", "Label", "Label"]}
            body="Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."
            bottomChips={["Label", "Label", "Label", "Label"]}
            footerType="primaryAndSecondary"
            primaryButtonText="Button"
            secondaryButtonText="Button"
            borderWidth={1}
            borderColor={${cardBorderColor}}
            elevation={2}
            backgroundColor={${cardBgColor}}
          />`;
    } else {
      componentsSnippet = `          <Ux4gCard
            title="Card Title"
            subtitle="Card subtitle"
            body="This is the card body."
            borderWidth={1}
            borderColor={${cardBorderColor}}
            elevation={2}
            backgroundColor={${cardBgColor}}
          />`;
    }

    const importsUsed = ['Ux4gThemeProvider', 'UX4GColors', 'Ux4gCard'];
    if (story === 'card-rich' || story === 'card-full-vertical' || story === 'card-rich-horizontal') {
      importsUsed.push('Ux4gAvatar');
    }

    const isHorizontal = story === 'card-horizontal' || story === 'card-rich-horizontal';
    const cardMaxWidth = isHorizontal ? 520 : 360;

    const snackCodeString = `import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ${importsUsed.join(', ')} } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={styles.container}>
        <View style={styles.cardWrapper}>
${componentsSnippet}
        </View>
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  cardWrapper: {
    width: '100%',
    maxWidth: ${cardMaxWidth},
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gCard%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&ratio=1:1.5&dependencies=ux4g-react-native-design-system@latest,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: isHorizontal ? '500px' : '650px', border: 'none', borderRadius: '8px' }}
        title="Expo Snack Card Preview"
      />
    );
  };

  /* ── Props Table Data ── */
  const propsData = [
    { name: 'direction', type: "'vertical' | 'horizontal'", default: "'vertical'", desc: 'Layout orientation of media thumbnail and content' },
    { name: 'title', type: 'string', default: 'undefined', desc: 'Primary card headline title' },
    { name: 'subtitle', type: 'string', default: 'undefined', desc: 'Secondary subtitle text below headline' },
    { name: 'body', type: 'string', default: 'undefined', desc: 'Main description body text' },
    { name: 'mediaImageUrl', type: 'string', default: 'undefined', desc: 'Image asset URL for top hero (vertical) or left thumbnail (horizontal)' },
    { name: 'mediaLabelText', type: 'string', default: 'undefined', desc: 'Badge label overlayed on top left of media image' },
    { name: 'avatar', type: 'ReactNode', default: 'undefined', desc: 'Avatar component in card header' },
    { name: 'statusChips', type: '(string | ReactNode)[]', default: 'undefined', desc: 'Status tags separated by vertical dividers' },
    { name: 'bottomChips', type: '(string | ReactNode)[]', default: 'undefined', desc: 'Pill chips/tags rendered below body text' },
    { name: 'footerType', type: "'none' | 'primaryOnly' | 'secondaryOnly' | 'primaryAndSecondary'", default: "'none'", desc: 'Footer action button layout configuration' },
    { name: 'primaryButtonText', type: 'string', default: "'Confirm'", desc: 'Label text for primary action button' },
    { name: 'secondaryButtonText', type: 'string', default: "'Cancel'", desc: 'Label text for secondary action button' },
    { name: 'cornerRadius', type: 'number', default: '12', desc: 'Corner border radius in density pixels' },
    { name: 'borderWidth', type: 'number', default: '0', desc: 'Outer border stroke width' },
    { name: 'borderColor', type: 'string', default: "'transparent'", desc: 'Border stroke color' },
    { name: 'elevation', type: 'number', default: '0', desc: 'Shadow elevation depth' },
    { name: 'backgroundColor', type: 'string', default: 'theme.colors.surface', desc: 'Explicit background surface color' },
  ];

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Card</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Cards contain content and actions about a single subject, supporting hero images, avatars, tags, and flexible action footers.
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
                <CodeBlock code={codeString} language="TSX" filename="CardExample.tsx" />
              </div>
            )}

            {activeMainTab === 'props' && (
              <div className="wb-props-area">
                <table className="props-table">
                  <thead>
                    <tr>
                      <th>Prop</th>
                      <th>Type</th>
                      <th>Default</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {propsData.map((p) => (
                      <tr key={p.name}>
                        <td><span className="prop-name">{p.name}</span></td>
                        <td><span className="prop-type">{p.type}</span></td>
                        <td><span className="prop-default">{p.default}</span></td>
                        <td>{p.desc}</td>
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

export default CardDoc;
