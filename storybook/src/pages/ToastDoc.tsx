import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface ToastDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

const STORY_IDS = [
  'toast-basic',
  'toast-stacked',
  'toast-actions',
  'toast-custom',
  'toast-provider',
] as const;

type ToastStory = (typeof STORY_IDS)[number];

const normalizeStory = (story?: string): ToastStory => {
  return STORY_IDS.includes(story as ToastStory) ? (story as ToastStory) : 'toast-basic';
};

const storyMeta: Record<ToastStory, { title: string; description: string }> = {
  'toast-basic': {
    title: 'Toast — Categories',
    description: 'Semantic categories for informative messages (info, success, warning, error).',
  },
  'toast-stacked': {
    title: 'Toast — Stacked Layout',
    description: 'Stacked layout with title and subtitle stacked vertically.',
  },
  'toast-actions': {
    title: 'Toast — Action & Close',
    description: 'Toasts with action text and close buttons.',
  },
  'toast-custom': {
    title: 'Toast — Customization',
    description: 'Custom icon, background, and action colors.',
  },
  'toast-provider': {
    title: 'Toast — Provider Demo',
    description: 'Interactive showToast demo via Ux4gToastProvider and useUx4gToast.',
  },
};

const toastBlock = (category: string, title: string, subtitle: string, extra: string): string => {
  return `      <Ux4gToast
        category='${category}'
        title='${title}'
        subtitle='${subtitle}'
        showCloseButton={false}
${extra}
      />`;
};

const getStoryCode = (story: ToastStory): string => {
  const block = toastBlock;
  switch (story) {
    case 'toast-stacked':
      return `import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gToast } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
${block('success', 'Payment Successful', 'Your payment of ₹1,250 has been processed', `        layout='stacked'`)}
${block('info', 'Update Available', 'Version 2.4.0 brings new features and bug fixes', `        layout='stacked'`)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  card: {
    marginBottom: 16,
  },
});`;
    case 'toast-actions':
      return `import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gToast } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
${block('success', 'Order Confirmed', 'Your order #ORD-1024 has been placed', `        layout='full'
        actionText='Track'
        onActionClick={() => console.log('track pressed')}`)}
${block('warning', 'Session Expired', 'Please sign in again to continue', `        layout='full'
        actionText='Sign In'
        onActionClick={() => console.log('sign in pressed')}`)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  card: {
    marginBottom: 16,
  },
});`;
    case 'toast-custom':
      return `import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gToast, Ux4gIcons } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
${block('slot', 'Custom Icon Toast', 'Star icon with custom background', `        layout='full'
        icon={Ux4gIcons.star({ size: 20, color: '#7B61FF' })}
        backgroundColor='#EDE9FE'
        iconColor='#7B61FF'
        actionColor='#7B61FF'
        actionText='View'
        onActionClick={() => console.log('view pressed')}`)}
${block('success', 'Download Complete', 'Report exported successfully', `        layout='full'
        backgroundColor='#DCFCE7'
        iconColor='#16A34A'
        actionColor='#16A34A'
        actionText='Open'
        onActionClick={() => console.log('open pressed')}`)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  card: {
    marginBottom: 16,
  },
});`;
    case 'toast-provider':
      return `import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gToastProvider, useUx4gToast, Ux4gButton } from 'ux4g-react-native-design-system';

const Demo = () => {
  const { showToast } = useUx4gToast();
  return (
    <View>
      <View style={styles.row}>
        <Ux4gButton
          text='Info'
          variant='primary'
          onPress={() => showToast({ category: 'info', title: 'New message received', subtitle: 'You have 3 unread notifications' })}
        />
      </View>
      <View style={styles.row}>
        <Ux4gButton
          text='Success'
          variant='primary'
          onPress={() => showToast({ category: 'success', title: 'Changes saved', subtitle: 'Your profile was updated successfully' })}
        />
      </View>
      <View style={styles.row}>
        <Ux4gButton
          text='Warning'
          variant='primary'
          onPress={() => showToast({ category: 'warning', title: 'Low battery', subtitle: 'Charge your device soon', actionText: 'OK' })}
        />
      </View>
      <View style={styles.row}>
        <Ux4gButton
          text='Error'
          variant='primary'
          onPress={() => showToast({ category: 'error', title: 'Upload failed', subtitle: 'Please check your connection and retry' })}
        />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <Ux4gToastProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Demo />
      </ScrollView>
    </Ux4gToastProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  row: {
    marginBottom: 12,
  },
});`;
    default:
      return `import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gToast } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
${block('info', 'Info message', 'Supporting description text.', '')}
${block('success', 'Success message', 'Supporting description text.', '')}
${block('warning', 'Warning message', 'Supporting description text.', '')}
${block('error', 'Error message', 'Supporting description text.', '')}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  card: {
    marginBottom: 16,
  },
});`;
  }
};

const getSnackFields = (story: ToastStory): string => {
  const block = toastBlock;
  switch (story) {
    case 'toast-stacked':
      return `${block('success', 'Payment Successful', 'Your payment of ₹1,250 has been processed', `        layout='stacked'`)}
${block('info', 'Update Available', 'Version 2.4.0 brings new features and bug fixes', `        layout='stacked'`)}`;
    case 'toast-actions':
      return `${block('success', 'Order Confirmed', 'Your order #ORD-1024 has been placed', `        layout='full'
        actionText='Track'
        onActionClick={() => console.log('track pressed')}`)}
${block('warning', 'Session Expired', 'Please sign in again to continue', `        layout='full'
        actionText='Sign In'
        onActionClick={() => console.log('sign in pressed')}`)}`;
    case 'toast-custom':
      return `${block('slot', 'Custom Icon Toast', 'Star icon with custom background', `        layout='full'
        icon={Ux4gIcons.star({ size: 20, color: '#7B61FF' })}
        backgroundColor='#EDE9FE'
        iconColor='#7B61FF'
        actionColor='#7B61FF'
        actionText='View'
        onActionClick={() => console.log('view pressed')}`)}
${block('success', 'Download Complete', 'Report exported successfully', `        layout='full'
        backgroundColor='#DCFCE7'
        iconColor='#16A34A'
        actionColor='#16A34A'
        actionText='Open'
        onActionClick={() => console.log('open pressed')}`)}`;
    default:
      return `${block('info', 'Info message', 'Supporting description text.', '')}
${block('success', 'Success message', 'Supporting description text.', '')}
${block('warning', 'Warning message', 'Supporting description text.', '')}
${block('error', 'Error message', 'Supporting description text.', '')}`;
  }
};

export const ToastDoc: React.FC<ToastDocProps> = ({ isDark, story = 'toast-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const activeStory = normalizeStory(story);
  const config = storyMeta[activeStory];
  const codeString = useMemo(() => getStoryCode(activeStory), [activeStory]);

  const renderStoryPreview = () => {
    const isProvider = activeStory === 'toast-provider';

    let snackCodeString: string;
    if (isProvider) {
      snackCodeString = `import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gToastProvider, useUx4gToast, Ux4gButton, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

const Demo = () => {
  const { showToast } = useUx4gToast();
  return (
    <View>
      <View style={styles.row}>
        <Ux4gButton text='Info' variant='primary' onPress={() => showToast({ category: 'info', title: 'New message received', subtitle: 'You have 3 unread notifications' })} />
      </View>
      <View style={styles.row}>
        <Ux4gButton text='Success' variant='primary' onPress={() => showToast({ category: 'success', title: 'Changes saved', subtitle: 'Your profile was updated successfully' })} />
      </View>
      <View style={styles.row}>
        <Ux4gButton text='Warning' variant='primary' onPress={() => showToast({ category: 'warning', title: 'Low battery', subtitle: 'Charge your device soon', actionText: 'OK' })} />
      </View>
      <View style={styles.row}>
        <Ux4gButton text='Error' variant='primary' onPress={() => showToast({ category: 'error', title: 'Upload failed', subtitle: 'Please check your connection and retry' })} />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <Ux4gToastProvider>
        <ScrollView contentContainerStyle={styles.container}>
          <Demo />
        </ScrollView>
      </Ux4gToastProvider>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  row: {
    marginBottom: 12,
  },
});`;
    } else {
      const needsIcons = activeStory === 'toast-custom';
      snackCodeString = `import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gToast${needsIcons ? ', Ux4gIcons' : ''}, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

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
  card: {
    marginBottom: 16,
  },
});`;
    }

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gToast%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '680px', border: 'none', borderRadius: '8px' }}
        title='Expo Snack Toast Preview'
      />
    );
  };

  const toastPropsData = [
    { name: 'category', type: "'info' | 'success' | 'warning' | 'error' | 'slot'", default: 'required', desc: 'Category driving the default icon, tint, and action color.', required: true },
    { name: 'title', type: 'string', default: 'required', desc: 'Toast title text.', required: true },
    { name: 'subtitle', type: 'string', default: 'undefined', desc: 'Secondary description text.', required: false },
    { name: 'actionText', type: 'string', default: 'undefined', desc: 'Action label rendered on the right side.', required: false },
    { name: 'onActionClick', type: '() => void', default: 'undefined', desc: 'Action press callback.', required: false },
    { name: 'onCloseClick', type: '() => void', default: 'undefined', desc: 'Close button press callback (hides the button when omitted).', required: false },
    { name: 'showCloseButton', type: 'boolean', default: 'true', desc: 'Whether the close button is shown.', required: false },
    { name: 'layout', type: "'full' | 'stacked'", default: 'full on wide, stacked on narrow', desc: 'Row layout vs stacked (title/subtitle) layout.', required: false },
    { name: 'backgroundColor', type: 'string', default: 'category tint', desc: 'Tint overlay color override.', required: false },
    { name: 'icon', type: 'React.ReactNode', default: 'category icon', desc: 'Custom icon override.', required: false },
    { name: 'iconColor', type: 'string', default: 'category color', desc: 'Icon color override.', required: false },
    { name: 'actionColor', type: 'string', default: 'category color', desc: 'Action text color override.', required: false },
    { name: 'style', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Container style override.', required: false },
  ];

  const providerPropsData = [
    { name: 'children', type: 'React.ReactNode', default: 'required', desc: 'App tree that can call useUx4gToast().', required: true },
    { name: 'isBottom', type: 'boolean', default: 'false', desc: 'Toasts slide in from the bottom instead of the top.', required: false },
  ];

  const hookData = [
    { name: 'showToast', type: '(data: Ux4gToastData) => void', default: '—', desc: 'Shows a toast. Data: category, title, subtitle, actionText, onActionClick, showCloseButton, backgroundColor, icon, iconColor, actionColor, autoClose (default true), durationMs (default 3000), isBottom.', required: false },
    { name: 'dismiss', type: '() => void', default: '—', desc: 'Dismisses the current toast.', required: false },
  ];

  const isProvider = activeStory === 'toast-provider';

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
                <CodeBlock code={codeString} language='TSX' filename={isProvider ? 'ToastProviderExample.tsx' : 'ToastExample.tsx'} />
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
                    {(isProvider ? [...providerPropsData, ...hookData] : toastPropsData).map((p) => (
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

export default ToastDoc;