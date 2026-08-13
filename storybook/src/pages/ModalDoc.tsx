import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface ModalDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';
type ModalStory = 'modal-full-preview' | 'modal-header-left' | 'modal-header-centered';

const normalizeStory = (story?: string): ModalStory => {
  if (story === 'modal') return 'modal-full-preview';

  const allowed: ModalStory[] = ['modal-full-preview', 'modal-header-left', 'modal-header-centered'];
  return allowed.includes(story as ModalStory) ? (story as ModalStory) : 'modal-full-preview';
};

const storyMeta: Record<ModalStory, { title: string; description: string }> = {
  'modal-full-preview': {
    title: 'Modal',
    description: 'Full preview modal with subtitle/body copy and two footer buttons.',
  },
  'modal-header-left': {
    title: 'Modal',
    description: 'Header-image modal with left-aligned content and standard action footer.',
  },
  'modal-header-centered': {
    title: 'Modal',
    description: 'Header-image modal with centered content and destructive primary CTA.',
  },
};

const getStoryCode = (story: ModalStory): string => {
  if (story === 'modal-header-left') {
    return `import React, { useState } from 'react';
  import { View } from 'react-native';
import { Ux4gButton, Ux4gIcons, Ux4gModal } from 'ux4g-react-native-design-system';

export default function ModalHeaderLeftExample() {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Ux4gButton text='Open Header Left Modal' onPress={() => setOpen(true)} />

      <Ux4gModal
        visible={open}
        onDismiss={() => setOpen(false)}
        headerImageStyle='fullBleed'
        headerImageUrl='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200'
        leadingItem='icon'
        leadingIcon={Ux4gIcons.warning({ size: 22, color: '#E53935' })}
        headerTitle='Header'
        showDescription={true}
        descriptionText='Write description here'
        subtitleText='Subtitle'
        bodyText='A modal is a design element that appears over the main content of a webpage, capturing user attention by disabling interaction.'
        primaryButtonText='Button'
        secondaryButtonText='Button'
        onPrimaryClick={() => setOpen(false)}
        onSecondaryClick={() => setOpen(false)}
      />
    </View>
  );
}`;
  }

  if (story === 'modal-header-centered') {
    return `import React, { useState } from 'react';
import { Ux4gButton, Ux4gIcons, Ux4gModal } from 'ux4g-react-native-design-system';

export default function ModalHeaderCenteredExample() {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Ux4gButton text='Open Header Centered Modal' variant='outline' onPress={() => setOpen(true)} />

      <Ux4gModal
        visible={open}
        onDismiss={() => setOpen(false)}
        alignment='centered'
        headerImageStyle='fullBleed'
        headerImageContent={<View style={{ flex: 1, backgroundColor: '#6D28D9' }} />}
        isDestructive={true}
        leadingItem='icon'
        leadingIcon={Ux4gIcons.warning({ size: 22, color: '#E53935' })}
        headerTitle='Header'
        showDescription={true}
        descriptionText='Write description here'
        subtitleText='Subtitle'
        bodyText='A modal is a design element that appears over the main content of a webpage, capturing user attention by disabling interaction.'
        footerButtons='twoButtons'
        footerAlign='right'
        primaryButtonText='Button'
        secondaryButtonText='Button'
        onPrimaryClick={() => setOpen(false)}
        onSecondaryClick={() => setOpen(false)}
      />
    </View>
  );
}`;
  }

  return `import React, { useState } from 'react';
import { Ux4gButton, Ux4gModal } from 'ux4g-react-native-design-system';

export default function ModalFullPreviewExample() {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Ux4gButton text='Open Full Preview Modal' onPress={() => setOpen(true)} />

      <Ux4gModal
        visible={open}
        onDismiss={() => setOpen(false)}
        headerTitle='Full Preview Modal'
        showDescription={false}
        showDividers={true}
        subtitleText='Subtitle'
        bodyText='This modal is shown here so you can see the visual effect while browsing the Props tab.'
        primaryButtonText='Button'
        secondaryButtonText='Button'
        onPrimaryClick={() => setOpen(false)}
        onSecondaryClick={() => setOpen(false)}
      />
    </View>
  );
}`;
};

const getSnackFields = (story: ModalStory): string => {
  if (story === 'modal-header-left') {
    return `        <Ux4gButton text='Open Header Left Modal' onPress={() => setOpen(true)} />
        <Ux4gModal
          visible={open}
          onDismiss={() => setOpen(false)}
          headerImageStyle='fullBleed'
          headerImageUrl='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200'
          leadingItem='icon'
          leadingIcon={Ux4gIcons.warning({ size: 22, color: '#E53935' })}
          headerTitle='Header'
          showDescription={true}
          descriptionText='Write description here'
          subtitleText='Subtitle'
          bodyText='A modal is a design element that appears over the main content of a webpage, capturing user attention by disabling interaction.'
          primaryButtonText='Button'
          secondaryButtonText='Button'
          onPrimaryClick={() => setOpen(false)}
          onSecondaryClick={() => setOpen(false)}
        />`;
  }

  if (story === 'modal-header-centered') {
    return `        <Ux4gButton text='Open Header Centered Modal' variant='outline' onPress={() => setOpen(true)} />
        <Ux4gModal
          visible={open}
          onDismiss={() => setOpen(false)}
          alignment='centered'
          headerImageStyle='fullBleed'
          headerImageContent={<View style={{ flex: 1, backgroundColor: '#6D28D9' }} />}
          isDestructive={true}
          leadingItem='icon'
          leadingIcon={Ux4gIcons.warning({ size: 22, color: '#E53935' })}
          headerTitle='Header'
          showDescription={true}
          descriptionText='Write description here'
          subtitleText='Subtitle'
          bodyText='A modal is a design element that appears over the main content of a webpage, capturing user attention by disabling interaction.'
          footerButtons='twoButtons'
          footerAlign='right'
          primaryButtonText='Button'
          secondaryButtonText='Button'
          onPrimaryClick={() => setOpen(false)}
          onSecondaryClick={() => setOpen(false)}
        />`;
  }

  return `        <Ux4gButton text='Open Full Preview Modal' onPress={() => setOpen(true)} />
        <Ux4gModal
          visible={open}
          onDismiss={() => setOpen(false)}
          headerTitle='Full Preview Modal'
          showDescription={false}
          showDividers={true}
          subtitleText='Subtitle'
          bodyText='This modal is shown here so you can see the visual effect while browsing the Props tab.'
          primaryButtonText='Button'
          secondaryButtonText='Button'
          onPrimaryClick={() => setOpen(false)}
          onSecondaryClick={() => setOpen(false)}
        />`;
};

export const ModalDoc: React.FC<ModalDocProps> = ({ isDark, story = 'modal-full-preview' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const activeStory = normalizeStory(story);
  const config = storyMeta[activeStory];
  const codeString = useMemo(() => getStoryCode(activeStory), [activeStory]);

  const renderStoryPreview = () => {
    const snackCodeString = `import React, { useState } from 'react';
  import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gButton, Ux4gIcons, Ux4gModal, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [open, setOpen] = useState(false);

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
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gModal%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '680px', border: 'none', borderRadius: '8px' }}
        title='Expo Snack Modal Preview'
      />
    );
  };

  const propsData = [
    { name: 'visible', type: 'boolean', default: 'required', desc: 'Controls modal visibility.', required: true },
    { name: 'onDismiss', type: '() => void', default: 'required', desc: 'Callback when backdrop or close action dismisses modal.', required: true },
    { name: 'alignment', type: "'leftAligned' | 'centered'", default: "'leftAligned'", desc: 'Header/content alignment mode.', required: false },
    { name: 'headerTitle', type: 'string', default: "'Header'", desc: 'Modal header title.', required: false },
    { name: 'showDescription', type: 'boolean', default: 'false', desc: 'Show or hide description text under header.', required: false },
    { name: 'descriptionText', type: 'string', default: "'Write description here'", desc: 'Header description text.', required: false },
    { name: 'showSubtitle', type: 'boolean', default: 'true', desc: 'Show or hide subtitle inside content.', required: false },
    { name: 'subtitleText', type: 'string', default: "'Subtitle'", desc: 'Subtitle text in body section.', required: false },
    { name: 'showBody', type: 'boolean', default: 'true', desc: 'Show body content section.', required: false },
    { name: 'bodyText', type: 'string', default: 'component default', desc: 'Body copy when bodyContent is not provided.', required: false },
    { name: 'bodyContent', type: 'ReactNode', default: 'undefined', desc: 'Custom body content override.', required: false },
    { name: 'leadingItem', type: "'none' | 'icon' | 'avatar' | 'image'", default: "'none'", desc: 'Leading item type in header.', required: false },
    { name: 'showFooter', type: 'boolean', default: 'true', desc: 'Show or hide footer action area.', required: false },
    { name: 'footerButtons', type: "'oneButton' | 'twoButtons' | 'oneButtonWithIcon' | 'twoButtonsWithIcon'", default: "'twoButtons'", desc: 'Footer action layout preset.', required: false },
    { name: 'footerAlign', type: "'left' | 'right' | 'center' | 'split'", default: "'right'", desc: 'Footer button alignment.', required: false },
    { name: 'isDestructive', type: 'boolean', default: 'false', desc: 'Use destructive color styling for primary action.', required: false },
    { name: 'primaryButtonText', type: 'string', default: "'Button'", desc: 'Primary CTA text.', required: false },
    { name: 'secondaryButtonText', type: 'string', default: "'Button'", desc: 'Secondary CTA text.', required: false },
    { name: 'showCloseButton', type: 'boolean', default: 'true', desc: 'Show top-right close icon button.', required: false },
    { name: 'backgroundColor', type: 'string', default: 'theme surface', desc: 'Modal surface background override.', required: false },
    { name: 'cornerRadius', type: 'number', default: 'theme radius16', desc: 'Modal corner radius override.', required: false },
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
                <CodeBlock code={codeString} language='TSX' filename='ModalExample.tsx' />
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

export default ModalDoc;
