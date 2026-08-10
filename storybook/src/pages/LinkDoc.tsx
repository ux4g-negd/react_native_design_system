import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface LinkDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';
type LinkStory = 'link-basic' | 'link-text' | 'link-custom-child';

const normalizeStory = (story?: string): LinkStory => {
  if (story === 'link') return 'link-basic';

  const allowed: LinkStory[] = ['link-basic', 'link-text', 'link-custom-child'];
  return allowed.includes(story as LinkStory) ? (story as LinkStory) : 'link-basic';
};

const storyMeta: Record<LinkStory, { title: string; description: string }> = {
  'link-basic': {
    title: 'Link',
    description: 'Wrap any child widget and open an external URL on tap.',
  },
  'link-text': {
    title: 'Link',
    description: 'Text-only hyperlinks using Ux4gLink wrapper.',
  },
  'link-custom-child': {
    title: 'Link',
    description: 'Custom child content (card/button row) made clickable via Ux4gLink.',
  },
};

const getStoryCode = (story: LinkStory): string => {
  if (story === 'link-text') {
    return `import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gLink } from 'ux4g-react-native-design-system';

export default function LinkTextExample() {
  return (
    <View style={{ gap: 12 }}>
      <Ux4gLink url='https://ux4g.com'>
        <Text style={{ color: '#2563EB', textDecorationLine: 'underline' }}>
          Visit UX4G website
        </Text>
      </Ux4gLink>

      <Ux4gLink url='https://github.com'>
        <Text style={{ color: '#2563EB', textDecorationLine: 'underline' }}>
          Open GitHub
        </Text>
      </Ux4gLink>
    </View>
  );
}`;
  }

  if (story === 'link-custom-child') {
    return `import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gLink, Ux4gIcons } from 'ux4g-react-native-design-system';

export default function LinkCustomChildExample() {
  return (
    <Ux4gLink url='https://ux4g.com/docs'>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#D4D4D8',
          borderRadius: 10,
          padding: 14,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#111827' }}>
            UX4G Documentation
          </Text>
          <Text style={{ fontSize: 12, color: '#6B7280', marginTop: 4 }}>
            Open component guidelines and API docs
          </Text>
        </View>
        {Ux4gIcons.link({ size: 18, color: '#2563EB' })}
      </View>
    </Ux4gLink>
  );
}`;
  }

  return `import React from 'react';
import { Text } from 'react-native';
import { Ux4gLink } from 'ux4g-react-native-design-system';

export default function LinkBasicExample() {
  return (
    <Ux4gLink url='https://www.ux4g.com'>
      <Text style={{ color: '#2563EB', fontWeight: '600' }}>Open UX4G</Text>
    </Ux4gLink>
  );
}`;
};

const getSnackFields = (story: LinkStory): string => {
  if (story === 'link-text') {
    return `        <View style={styles.stack}>
          <Ux4gLink url='https://ux4g.com'>
            <Text style={{ color: '#2563EB', textDecorationLine: 'underline' }}>
              Visit UX4G website
            </Text>
          </Ux4gLink>
          <Ux4gLink url='https://github.com'>
            <Text style={{ color: '#2563EB', textDecorationLine: 'underline' }}>
              Open GitHub
            </Text>
          </Ux4gLink>
        </View>`;
  }

  if (story === 'link-custom-child') {
    return `        <Ux4gLink url='https://ux4g.com/docs'>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#D4D4D8',
              borderRadius: 10,
              padding: 14,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#111827' }}>
                UX4G Documentation
              </Text>
              <Text style={{ fontSize: 12, color: '#6B7280', marginTop: 4 }}>
                Open component guidelines and API docs
              </Text>
            </View>
            {Ux4gIcons.link({ size: 18, color: '#2563EB' })}
          </View>
        </Ux4gLink>`;
  }

  return `        <Ux4gLink url='https://www.ux4g.com'>
          <Text style={{ color: '#2563EB', fontWeight: '600' }}>Open UX4G</Text>
        </Ux4gLink>`;
};

export const LinkDoc: React.FC<LinkDocProps> = ({ isDark, story = 'link-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const activeStory = normalizeStory(story);
  const config = storyMeta[activeStory];
  const codeString = useMemo(() => getStoryCode(activeStory), [activeStory]);

  const renderStoryPreview = () => {
    const snackCodeString = `import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native';
import { Ux4gLink, Ux4gIcons, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <ScrollView contentContainerStyle={styles.container}>
${getSnackFields(activeStory)}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  stack: {
    gap: 16,
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gLink%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.2,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '680px', border: 'none', borderRadius: '8px' }}
        title='Expo Snack Link Preview'
      />
    );
  };

  const propsData = [
    { name: 'child', type: 'ReactNode', default: 'required', desc: 'Widget rendered as clickable content.', required: true },
    { name: 'url', type: 'string', default: 'required', desc: 'URL opened externally on tap.', required: true },
    { name: 'style', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Style override for wrapper.', required: false },
    { name: 'accessibilityLabel', type: 'string', default: 'url', desc: 'Screen reader label.', required: false },
    { name: 'disabled', type: 'boolean', default: 'false', desc: 'Disables interaction when true.', required: false },
    { name: 'testID', type: 'string', default: 'undefined', desc: 'Test identifier for automation.', required: false },
  ];

  return (
    <div className='wb-page'>
      <div className='wb-header'>
        <div className='wb-header-row'>
          <h1 className='wb-title'>{config.title}</h1>
          <span className='wb-badge'>Component</span>
        </div>
        <p className='wb-subtitle'>{config.description}</p>
        <p className='wb-subtitle' style={{ marginTop: 6 }}>
          <span style={{ color: '#E11D48', fontWeight: 700 }}>*</span> marks required props.
        </p>
      </div>

      <div className='wb-body'>
        <div className='wb-main'>
          <div className='wb-tab-bar'>
            <button className={`wb-tab ${activeMainTab === 'preview' ? 'active' : ''}`} onClick={() => setActiveMainTab('preview')} type='button'>
              <span className='material-symbols-outlined wb-tab-icon'>visibility</span>
              Preview
            </button>
            <button className={`wb-tab ${activeMainTab === 'code' ? 'active' : ''}`} onClick={() => setActiveMainTab('code')} type='button'>
              <span className='material-symbols-outlined wb-tab-icon'>code</span>
              Code
            </button>
            <button className={`wb-tab ${activeMainTab === 'props' ? 'active' : ''}`} onClick={() => setActiveMainTab('props')} type='button'>
              <span className='material-symbols-outlined wb-tab-icon'>tune</span>
              Props
            </button>
          </div>

          <div className='wb-tab-content'>
            {activeMainTab === 'preview' && (
              <Ux4gThemeProvider isDark={isDark}>
                <div className={`wb-preview-area ${isDark ? 'dark' : ''}`}>{renderStoryPreview()}</div>
              </Ux4gThemeProvider>
            )}

            {activeMainTab === 'code' && (
              <div className='wb-code-area'>
                <CodeBlock code={codeString} language='TSX' filename='LinkExample.tsx' />
              </div>
            )}

            {activeMainTab === 'props' && (
              <div className='wb-props-area'>
                <table className='props-table'>
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
                          <span className='prop-name'>
                            {p.name}
                            {p.required ? <span style={{ color: '#E11D48' }}> *</span> : null}
                          </span>
                        </td>
                        <td><span className='prop-type'>{p.type}</span></td>
                        <td>{p.desc}</td>
                        <td><span className='prop-default'>{p.default}</span></td>
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

export default LinkDoc;
