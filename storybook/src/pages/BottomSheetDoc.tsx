import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface BottomSheetDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';
type BottomSheetStory =
  | 'bottom-sheet-introduction'
  | 'bottom-sheet-peek'
  | 'bottom-sheet-half'
  | 'bottom-sheet-expanded'
  | 'bottom-sheet-full';

const normalizeStory = (story?: string): BottomSheetStory => {
  if (!story || story === 'bottom-sheet' || story === 'bottom-sheet-group') {
    return 'bottom-sheet-introduction';
  }
  const allowed: BottomSheetStory[] = [
    'bottom-sheet-introduction',
    'bottom-sheet-peek',
    'bottom-sheet-half',
    'bottom-sheet-expanded',
    'bottom-sheet-full',
  ];
  return allowed.includes(story as BottomSheetStory)
    ? (story as BottomSheetStory)
    : 'bottom-sheet-introduction';
};

const storyMeta: Record<BottomSheetStory, { title: string; description: string }> = {
  'bottom-sheet-introduction': {
    title: 'Bottom Sheet',
    description:
      'Modal bottom sheet component adhering strictly to UX4G Design System guidelines with 16dp top corner radius, drag handle indicator, standardized header, and UX4G action buttons.',
  },
  'bottom-sheet-peek': {
    title: 'Bottom Sheet — Peek (26%)',
    description:
      'Compact peek snap point taking ~26% of screen height. Ideal for quick action menus, confirmation prompts, or status previews.',
  },
  'bottom-sheet-half': {
    title: 'Bottom Sheet — Half (50%)',
    description:
      'Standard 50% screen height sheet. Default preset suitable for item selection, filters, and standard form workflows.',
  },
  'bottom-sheet-expanded': {
    title: 'Bottom Sheet — Expanded (75%)',
    description:
      'Expanded snap point occupying 75% screen height for complex content, multi-field forms, and lists.',
  },
  'bottom-sheet-full': {
    title: 'Bottom Sheet — Full (94%)',
    description:
      'Near full-screen sheet taking 94% height with top safe area margin. Perfect for comprehensive flows and document previews.',
  },
};

const getStoryCode = (story: BottomSheetStory): string => {
  if (story === 'bottom-sheet-peek') {
    return `import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Ux4gButton, Ux4gBottomSheet } from 'ux4g-react-native-design-system';

export default function BottomSheetPeekExample() {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Ux4gButton text="Open Peek Sheet (26%)" onPress={() => setOpen(true)} />

      <Ux4gBottomSheet
        visible={open}
        onDismiss={() => setOpen(false)}
        size="peek"
        cornerRadius={16}
        title="Header"
        description="Write description here"
        primaryButtonText="Button"
        secondaryButtonText="Button"
        onPrimaryPress={() => setOpen(false)}
        onSecondaryPress={() => setOpen(false)}
      >
        <Text style={{ fontSize: 14, color: '#64748B' }}>
          This is a compact peek bottom sheet (26% screen height).
        </Text>
      </Ux4gBottomSheet>
    </View>
  );
}`;
  }

  if (story === 'bottom-sheet-expanded') {
    return `import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Ux4gButton, Ux4gBottomSheet } from 'ux4g-react-native-design-system';

export default function BottomSheetExpandedExample() {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Ux4gButton text="Open Expanded Sheet (75%)" onPress={() => setOpen(true)} />

      <Ux4gBottomSheet
        visible={open}
        onDismiss={() => setOpen(false)}
        size="expanded"
        cornerRadius={16}
        title="Header"
        description="Write description here"
        primaryButtonText="Button"
        secondaryButtonText="Button"
        onPrimaryPress={() => setOpen(false)}
        onSecondaryPress={() => setOpen(false)}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <Text key={i} style={{ fontSize: 14, color: '#64748B', marginBottom: 12 }}>
            {i + 1}. Expanded bottom sheet content row for detailed forms and multi-item lists.
          </Text>
        ))}
      </Ux4gBottomSheet>
    </View>
  );
}`;
  }

  if (story === 'bottom-sheet-full') {
    return `import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Ux4gButton, Ux4gBottomSheet } from 'ux4g-react-native-design-system';

export default function BottomSheetFullExample() {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Ux4gButton text="Open Full Sheet (94%)" onPress={() => setOpen(true)} />

      <Ux4gBottomSheet
        visible={open}
        onDismiss={() => setOpen(false)}
        size="full"
        cornerRadius={16}
        title="Header"
        description="Write description here"
        primaryButtonText="Button"
        secondaryButtonText="Button"
        onPrimaryPress={() => setOpen(false)}
        onSecondaryPress={() => setOpen(false)}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <Text key={i} style={{ fontSize: 14, color: '#64748B', marginBottom: 12 }}>
            {i + 1}. Full-screen bottom sheet item with scrollable body and 16dp top corner radius.
          </Text>
        ))}
      </Ux4gBottomSheet>
    </View>
  );
}`;
  }

  // Default: Half (50%)
  return `import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Ux4gButton, Ux4gBottomSheet } from 'ux4g-react-native-design-system';

export default function BottomSheetHalfExample() {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Ux4gButton text="Open Bottom Sheet (50%)" onPress={() => setOpen(true)} />

      <Ux4gBottomSheet
        visible={open}
        onDismiss={() => setOpen(false)}
        size="half"
        cornerRadius={16}
        title="Header"
        description="Write description here"
        primaryButtonText="Button"
        secondaryButtonText="Button"
        onPrimaryPress={() => setOpen(false)}
        onSecondaryPress={() => setOpen(false)}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <Text key={i} style={{ fontSize: 14, color: '#64748B', marginBottom: 12, lineHeight: 20 }}>
            {i + 1}. Bottom sheet body content with 16dp top border radius and UX4G buttons.
          </Text>
        ))}
      </Ux4gBottomSheet>
    </View>
  );
}`;
};

const getSnackFields = (story: BottomSheetStory): string => {
  if (story === 'bottom-sheet-peek') {
    return `        <Ux4gButton text="Open Peek Sheet (26%)" onPress={() => setOpen(true)} />
        <Ux4gBottomSheet
          visible={open}
          onDismiss={() => setOpen(false)}
          size="peek"
          cornerRadius={16}
          title="Header"
          description="Write description here"
          primaryButtonText="Button"
          secondaryButtonText="Button"
          onPrimaryPress={() => setOpen(false)}
          onSecondaryPress={() => setOpen(false)}
        >
          <Text style={{ fontSize: 14, color: '#64748B' }}>
            This is a compact peek bottom sheet (26% screen height).
          </Text>
        </Ux4gBottomSheet>`;
  }

  if (story === 'bottom-sheet-expanded') {
    return `        <Ux4gButton text="Open Expanded Sheet (75%)" onPress={() => setOpen(true)} />
        <Ux4gBottomSheet
          visible={open}
          onDismiss={() => setOpen(false)}
          size="expanded"
          cornerRadius={16}
          title="Header"
          description="Write description here"
          primaryButtonText="Button"
          secondaryButtonText="Button"
          onPrimaryPress={() => setOpen(false)}
          onSecondaryPress={() => setOpen(false)}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <Text key={i} style={{ fontSize: 14, color: '#64748B', marginBottom: 12 }}>
              {i + 1}. Expanded bottom sheet content row for detailed forms and multi-item lists.
            </Text>
          ))}
        </Ux4gBottomSheet>`;
  }

  if (story === 'bottom-sheet-full') {
    return `        <Ux4gButton text="Open Full Sheet (94%)" onPress={() => setOpen(true)} />
        <Ux4gBottomSheet
          visible={open}
          onDismiss={() => setOpen(false)}
          size="full"
          cornerRadius={16}
          title="Header"
          description="Write description here"
          primaryButtonText="Button"
          secondaryButtonText="Button"
          onPrimaryPress={() => setOpen(false)}
          onSecondaryPress={() => setOpen(false)}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <Text key={i} style={{ fontSize: 14, color: '#64748B', marginBottom: 12 }}>
              {i + 1}. Full-screen bottom sheet item with scrollable body and 16dp top corner radius.
            </Text>
          ))}
        </Ux4gBottomSheet>`;
  }

  // Default: Half (50%)
  return `        <Ux4gButton text="Open Bottom Sheet (50%)" onPress={() => setOpen(true)} />
        <Ux4gBottomSheet
          visible={open}
          onDismiss={() => setOpen(false)}
          size="half"
          cornerRadius={16}
          title="Header"
          description="Write description here"
          primaryButtonText="Button"
          secondaryButtonText="Button"
          onPrimaryPress={() => setOpen(false)}
          onSecondaryPress={() => setOpen(false)}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <Text key={i} style={{ fontSize: 14, color: '#64748B', marginBottom: 12, lineHeight: 20 }}>
              {i + 1}. Bottom sheet body content with 16dp top border radius and UX4G buttons.
            </Text>
          ))}
        </Ux4gBottomSheet>`;
};

export const BottomSheetDoc: React.FC<BottomSheetDocProps> = ({
  isDark,
  story = 'bottom-sheet-introduction',
}) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const activeStory = normalizeStory(story);
  const config = storyMeta[activeStory];
  const codeString = useMemo(() => getStoryCode(activeStory), [activeStory]);

  const renderStoryPreview = () => {
    const snackCodeString = `import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gButton, Ux4gBottomSheet, Ux4gIcons, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [open, setOpen] = useState(true);

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

    const snackUrl = `https://snack.expo.dev/embedded?platform=android&supportedPlatforms=ios,android&theme=${
      isDark ? 'dark' : 'light'
    }&name=Ux4gBottomSheet%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.8-beta.0,react-native-svg@*&code=${encodeURIComponent(
      snackCodeString
    )}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '680px', border: 'none', borderRadius: '8px' }}
        title="Expo Snack Bottom Sheet Preview"
      />
    );
  };

  const propsData = [
    {
      name: 'visible',
      type: 'boolean',
      default: 'required',
      desc: 'Whether the bottom sheet is open. The component is fully controlled.',
      required: true,
    },
    {
      name: 'onDismiss',
      type: '() => void',
      default: 'required',
      desc: 'Fired on backdrop press, swipe-down gesture, Android back button, or close button.',
      required: true,
    },
    {
      name: 'size',
      type: "'peek' | 'half' | 'expanded' | 'full'",
      default: "'half'",
      desc: 'Snap point preset ratio: peek (26%), half (50%), expanded (75%), full (94%).',
      required: false,
    },
    {
      name: 'snapPoint',
      type: "'peek' | 'half' | 'expanded' | 'full'",
      default: 'undefined',
      desc: 'Convenience alias for `size`.',
      required: false,
    },
    {
      name: 'height',
      type: 'number',
      default: 'calculated by size',
      desc: 'Explicit pixel height override for the bottom sheet surface.',
      required: false,
    },
    {
      name: 'cornerRadius',
      type: 'number',
      default: '16',
      desc: 'Top-left and top-right border radius in pixels (16dp as per UX4G UI spec).',
      required: false,
    },
    {
      name: 'showHeader',
      type: 'boolean',
      default: 'true',
      desc: 'Whether to render the header block (title, description, icon, close button).',
      required: false,
    },
    {
      name: 'title',
      type: 'string',
      default: "'Header'",
      desc: 'Header primary title string.',
      required: false,
    },
    {
      name: 'description',
      type: 'string',
      default: "'Write description here'",
      desc: 'Subtitle or description rendered directly under the title.',
      required: false,
    },
    {
      name: 'subtleText',
      type: 'string',
      default: 'undefined',
      desc: 'Subtle tag or muted note rendered in the header title row.',
      required: false,
    },
    {
      name: 'icon',
      type: 'ReactNode',
      default: 'undefined',
      desc: 'Leading icon or widget rendered before the title.',
      required: false,
    },
    {
      name: 'showCloseButton',
      type: 'boolean',
      default: 'true',
      desc: 'Whether to show the top-right close (✕) button.',
      required: false,
    },
    {
      name: 'onCloseClick',
      type: '() => void',
      default: 'onDismiss',
      desc: 'Custom callback when close (✕) button is pressed.',
      required: false,
    },
    {
      name: 'showHeaderDivider',
      type: 'boolean',
      default: 'false',
      desc: 'Whether to show a divider line directly below the header.',
      required: false,
    },
    {
      name: 'showBottomDivider',
      type: 'boolean',
      default: 'false',
      desc: 'Whether to show a divider line between the body content and footer.',
      required: false,
    },
    {
      name: 'showFooter',
      type: 'boolean',
      default: 'true',
      desc: 'Whether to render the bottom action footer container.',
      required: false,
    },
    {
      name: 'showPrimaryButton',
      type: 'boolean',
      default: 'true',
      desc: 'Whether to render the primary action button on the left.',
      required: false,
    },
    {
      name: 'showSecondaryButton',
      type: 'boolean',
      default: 'true',
      desc: 'Whether to render the secondary outline button on the right.',
      required: false,
    },
    {
      name: 'primaryButtonText',
      type: 'string',
      default: "'Button'",
      desc: 'Text label for the primary action button.',
      required: false,
    },
    {
      name: 'secondaryButtonText',
      type: 'string',
      default: "'Button'",
      desc: 'Text label for the secondary action button.',
      required: false,
    },
    {
      name: 'onPrimaryPress',
      type: '() => void',
      default: 'onDismiss',
      desc: 'Callback fired when the primary button is tapped.',
      required: false,
    },
    {
      name: 'onSecondaryPress',
      type: '() => void',
      default: 'onDismiss',
      desc: 'Callback fired when the secondary button is tapped.',
      required: false,
    },
    {
      name: 'isDestructive',
      type: 'boolean',
      default: 'false',
      desc: 'Renders the primary action button in destructive error theme color.',
      required: false,
    },
    {
      name: 'footerAlign',
      type: "'split' | 'left' | 'center' | 'right'",
      default: "'split'",
      desc: 'Layout arrangement of footer buttons (split stretches both to 50% width).',
      required: false,
    },
    {
      name: 'footerContent',
      type: 'ReactNode',
      default: 'undefined',
      desc: 'Custom footer JSX override to replace the default action buttons.',
      required: false,
    },
    {
      name: 'showDragHandle',
      type: 'boolean',
      default: 'true',
      desc: 'Whether to render the top pill drag handle indicator.',
      required: false,
    },
    {
      name: 'draggable',
      type: 'boolean',
      default: 'true',
      desc: 'Enables gesture swipe-down-to-dismiss physics.',
      required: false,
    },
    {
      name: 'showBackdrop',
      type: 'boolean',
      default: 'true',
      desc: 'Whether to render the dimmed backdrop scrim overlay behind the sheet.',
      required: false,
    },
    {
      name: 'dismissOnBackdropPress',
      type: 'boolean',
      default: 'true',
      desc: 'Whether tapping on the backdrop scrim dismisses the sheet.',
      required: false,
    },
    {
      name: 'scrollable',
      type: 'boolean',
      default: 'true',
      desc: 'Whether children content is wrapped in a ScrollView.',
      required: false,
    },
    {
      name: 'backgroundColor',
      type: 'string',
      default: 'theme surface',
      desc: 'Custom surface background color override for the sheet container.',
      required: false,
    },
    {
      name: 'scrimColor',
      type: 'string',
      default: 'neutral950 (with opacity)',
      desc: 'Custom backdrop scrim color override.',
      required: false,
    },
    {
      name: 'bottomInset',
      type: 'number',
      default: '0',
      desc: 'Extra safe area padding at the bottom of the sheet.',
      required: false,
    },
  ];

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">{config.title}</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">{config.description}</p>
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
                <CodeBlock code={codeString} language="TSX" filename="BottomSheetExample.tsx" />
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
                        <td>
                          <span className="prop-type">{p.type}</span>
                        </td>
                        <td>{p.desc}</td>
                        <td>
                          <span className="prop-default">{p.default}</span>
                        </td>
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

export default BottomSheetDoc;
