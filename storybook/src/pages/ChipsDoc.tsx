import React, { useState, useMemo } from 'react';
import {
  Ux4gChoiceChip,
  Ux4gFilterChip,
  Ux4gInputChip,
} from '../../../src/components/chips/Chips';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface ChipsDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const ChipsDoc: React.FC<ChipsDocProps> = ({ isDark, story = 'chips-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    if (story === 'chips-action') {
      return `import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Ux4gChoiceChip,
  Ux4gChipGroup,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';

export default function SuggestionAndActionChipsExample() {
  const [selectedTag, setSelectedTag] = useState('React Native');
  const [actionStatus, setActionStatus] = useState('Click a chip');

  return (
    <Ux4gThemeProvider isDark={false}>
      <View style={styles.container}>
        <Text style={styles.heading}>Suggestion Chips (Single Select):</Text>
        <Ux4gChipGroup
          chips={[
            { text: 'React Native', icon: '⚛️' },
            { text: 'UX4G Design System', icon: '🎨' },
            { text: 'TypeScript', icon: '📘' },
          ].map((item) => (
            <Ux4gChoiceChip
              key={item.text}
              text={item.text}
              selected={selectedTag === item.text}
              onClick={() => {
                setSelectedTag(item.text);
                setActionStatus(\`Selected: \${item.text}\`);
              }}
              size="m"
              leadingContent={<Text style={{ fontSize: 13 }}>{item.icon}</Text>}
            />
          ))}
          arrangement="wrap"
        />

        <View style={{ height: 24 }} />

        <Text style={styles.heading}>Action Chips:</Text>
        <Ux4gChipGroup
          chips={[
            <Ux4gChoiceChip
              key="download"
              text="Download Report"
              selected={false}
              onClick={() => setActionStatus('Downloading report...')}
              size="m"
              leadingContent={<Text style={{ fontSize: 13 }}>⬇️</Text>}
            />,
            <Ux4gChoiceChip
              key="share"
              text="Share Link"
              selected={false}
              onClick={() => setActionStatus('Link copied to clipboard!')}
              size="m"
              leadingContent={<Text style={{ fontSize: 13 }}>🔗</Text>}
            />,
            <Ux4gChoiceChip
              key="disabled"
              text="Disabled Action"
              selected={false}
              enabled={false}
              onClick={() => {}}
              size="m"
            />,
          ]}
          arrangement="wrap"
        />

        <View style={{ height: 20 }} />
        <Text style={styles.statusText}>
          Action Status: <Text style={styles.statusValue}>{actionStatus}</Text>
        </Text>
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
  heading: { fontSize: 14, fontWeight: '700', marginBottom: 8, color: '#334155' },
  statusText: { fontSize: 13, color: '#64748B' },
  statusValue: { fontWeight: '700', color: '#4F46E5' },
});`;
    }

    if (story === 'chips-input') {
      return `import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Ux4gInputChip,
  Ux4gChipGroup,
  Ux4gInputChipField,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';

export default function InputChipsExample() {
  const [chips, setChips] = useState(['React Native', 'TypeScript', 'Design System', 'Disabled Tag']);
  const [inputValue, setInputValue] = useState('');

  const handleDismiss = (tag: string) => {
    setChips((prev) => prev.filter((item) => item !== tag));
  };

  const handleAddChip = (newTag: string) => {
    if (newTag.trim() && !chips.includes(newTag.trim())) {
      setChips((prev) => [...prev, newTag.trim()]);
    }
  };

  return (
    <Ux4gThemeProvider isDark={false}>
      <View style={styles.container}>
        <Text style={styles.heading}>Interactive Input Chips (Tap ✕ to remove):</Text>
        <Ux4gChipGroup
          chips={chips.map((tag) => (
            <Ux4gInputChip
              key={tag}
              text={tag}
              enabled={tag !== 'Disabled Tag'}
              onDismiss={() => handleDismiss(tag)}
            />
          ))}
          arrangement="wrap"
        />

        <View style={{ height: 24 }} />

        <Text style={styles.heading}>Add Custom Input Tag:</Text>
        <Ux4gInputChipField
          value={inputValue}
          onValueChange={setInputValue}
          onAddChip={handleAddChip}
          placeholder="Type tag and press +..."
          chips={[]}
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
  heading: { fontSize: 14, fontWeight: '700', marginBottom: 8, color: '#334155' },
});`;
    }

    return `import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Ux4gChoiceChip,
  Ux4gFilterChip,
  Ux4gChipGroup,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';

export default function ChoiceAndFilterChipsExample() {
  const [selectedChoice, setSelectedChoice] = useState('Option 1');
  const [filterActive, setFilterActive] = useState(true);
  const [filterDraft, setFilterDraft] = useState(false);
  const [filterReview, setFilterReview] = useState(true);

  return (
    <Ux4gThemeProvider isDark={false}>
      <View style={styles.container}>
        <Text style={styles.heading}>Choice Chips (Single Select):</Text>
        <Ux4gChipGroup
          chips={['Option 1', 'Option 2', 'Option 3'].map((opt) => (
            <Ux4gChoiceChip
              key={opt}
              text={opt}
              selected={selectedChoice === opt}
              onClick={() => setSelectedChoice(opt)}
            />
          ))}
          arrangement="wrap"
        />

        <View style={{ height: 24 }} />

        <Text style={styles.heading}>Filter Chips (Multi Select):</Text>
        <Ux4gChipGroup
          chips={[
            <Ux4gFilterChip
              key="active"
              text="Active (Selected)"
              selected={filterActive}
              onClick={() => setFilterActive(!filterActive)}
            />,
            <Ux4gFilterChip
              key="draft"
              text="Draft"
              selected={filterDraft}
              onClick={() => setFilterDraft(!filterDraft)}
            />,
            <Ux4gFilterChip
              key="review"
              text="Under Review"
              selected={filterReview}
              onClick={() => setFilterReview(!filterReview)}
            />,
          ]}
          arrangement="wrap"
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
  heading: { fontSize: 14, fontWeight: '700', marginBottom: 8, color: '#334155' },
});`;
  }, [story]);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    let snackCodeString = '';

    if (story === 'chips-action') {
      snackCodeString = `import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Ux4gChoiceChip,
  Ux4gChipGroup,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';

export default function App() {
  const [selectedTag, setSelectedTag] = useState('React Native');
  const [actionStatus, setActionStatus] = useState('Click a chip');

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={styles.container}>
        <Text style={styles.heading}>Suggestion Chips (Single Select):</Text>
        <Ux4gChipGroup
          chips={[
            { text: 'React Native', icon: '⚛️' },
            { text: 'UX4G Design System', icon: '🎨' },
            { text: 'TypeScript', icon: '📘' },
          ].map((item) => (
            <Ux4gChoiceChip
              key={item.text}
              text={item.text}
              selected={selectedTag === item.text}
              onClick={() => {
                setSelectedTag(item.text);
                setActionStatus(\`Selected: \${item.text}\`);
              }}
              size="m"
              leadingContent={<Text style={{ fontSize: 13 }}>{item.icon}</Text>}
            />
          ))}
          arrangement="wrap"
        />

        <View style={{ height: 24 }} />

        <Text style={styles.heading}>Action Chips:</Text>
        <Ux4gChipGroup
          chips={[
            <Ux4gChoiceChip
              key="download"
              text="Download Report"
              selected={false}
              onClick={() => setActionStatus('Downloading report...')}
              size="m"
              leadingContent={<Text style={{ fontSize: 13 }}>⬇️</Text>}
            />,
            <Ux4gChoiceChip
              key="share"
              text="Share Link"
              selected={false}
              onClick={() => setActionStatus('Link copied to clipboard!')}
              size="m"
              leadingContent={<Text style={{ fontSize: 13 }}>🔗</Text>}
            />,
            <Ux4gChoiceChip
              key="disabled"
              text="Disabled Action"
              selected={false}
              enabled={false}
              onClick={() => {}}
              size="m"
            />,
          ]}
          arrangement="wrap"
        />

        <View style={{ height: 20 }} />
        <Text style={styles.statusText}>
          Action Status: <Text style={styles.statusValue}>{actionStatus}</Text>
        </Text>
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 24,
    backgroundColor: ${isDark ? "'#121212'" : "'#ffffff'"},
  },
  heading: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
    color: ${isDark ? "'#E2E8F0'" : "'#334155'"},
  },
  statusText: {
    fontSize: 13,
    color: ${isDark ? "'#94A3B8'" : "'#64748B'"},
  },
  statusValue: {
    fontWeight: '700',
    color: '#4F46E5',
  },
});`;
    } else if (story === 'chips-input') {
      snackCodeString = `import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Ux4gInputChip,
  Ux4gChipGroup,
  Ux4gInputChipField,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';

export default function App() {
  const [chips, setChips] = useState(['React Native', 'TypeScript', 'Design System', 'Disabled Tag']);
  const [inputValue, setInputValue] = useState('');

  const handleDismiss = (tag) => {
    setChips((prev) => prev.filter((item) => item !== tag));
  };

  const handleAddChip = (newTag) => {
    if (newTag.trim() && !chips.includes(newTag.trim())) {
      setChips((prev) => [...prev, newTag.trim()]);
    }
  };

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={styles.container}>
        <Text style={styles.heading}>Interactive Input Chips (Tap ✕ to remove):</Text>
        <Ux4gChipGroup
          chips={chips.map((tag) => (
            <Ux4gInputChip
              key={tag}
              text={tag}
              enabled={tag !== 'Disabled Tag'}
              onDismiss={() => handleDismiss(tag)}
            />
          ))}
          arrangement="wrap"
        />

        <View style={{ height: 24 }} />

        <Text style={styles.heading}>Add Custom Input Tag:</Text>
        <Ux4gInputChipField
          value={inputValue}
          onValueChange={setInputValue}
          onAddChip={handleAddChip}
          placeholder="Type tag and press +..."
          chips={[]}
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 24,
    backgroundColor: ${isDark ? "'#121212'" : "'#ffffff'"},
  },
  heading: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
    color: ${isDark ? "'#E2E8F0'" : "'#334155'"},
  },
});`;
    } else {
      snackCodeString = `import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Ux4gChoiceChip,
  Ux4gFilterChip,
  Ux4gChipGroup,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';

export default function App() {
  const [selectedChoice, setSelectedChoice] = useState('Option 1');
  const [filterActive, setFilterActive] = useState(true);
  const [filterDraft, setFilterDraft] = useState(false);
  const [filterReview, setFilterReview] = useState(true);

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={styles.container}>
        <Text style={styles.heading}>Choice Chips (Single Select):</Text>
        <Ux4gChipGroup
          chips={['Option 1', 'Option 2', 'Option 3'].map((opt) => (
            <Ux4gChoiceChip
              key={opt}
              text={opt}
              selected={selectedChoice === opt}
              onClick={() => setSelectedChoice(opt)}
            />
          ))}
          arrangement="wrap"
        />

        <View style={{ height: 24 }} />

        <Text style={styles.heading}>Filter Chips (Multi Select):</Text>
        <Ux4gChipGroup
          chips={[
            <Ux4gFilterChip
              key="active"
              text="Active (Selected)"
              selected={filterActive}
              onClick={() => setFilterActive(!filterActive)}
            />,
            <Ux4gFilterChip
              key="draft"
              text="Draft"
              selected={filterDraft}
              onClick={() => setFilterDraft(!filterDraft)}
            />,
            <Ux4gFilterChip
              key="review"
              text="Under Review"
              selected={filterReview}
              onClick={() => setFilterReview(!filterReview)}
            />,
          ]}
          arrangement="wrap"
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 24,
    backgroundColor: ${isDark ? "'#121212'" : "'#ffffff'"},
  },
  heading: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
    color: ${isDark ? "'#E2E8F0'" : "'#334155'"},
  },
});`;
    }

    const snackUrl = `https://snack.expo.dev/embedded?platform=android&supportedPlatforms=ios,android&theme=${isDark ? 'dark' : 'light'}&name=Ux4gChips%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.8-beta.0,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '600px', border: 'none', borderRadius: '8px' }}
        title="Expo Snack Chips Preview"
      />
    );
  };

  /* ── Props Table Data ── */
  const propsData = [
    { name: 'text', type: 'string', default: 'required', desc: 'Chip label text (required by ChoiceChip, FilterChip, InputChip).', required: true },
    { name: 'selected', type: 'boolean', default: 'required', desc: 'Selection state (required by ChoiceChip and FilterChip).', required: true },
    { name: 'onClick', type: '() => void', default: 'required', desc: 'Tap callback (required by ChoiceChip and FilterChip).', required: true },
    { name: 'onPress', type: '() => void', default: 'undefined', desc: 'Optional press callback alias for ChoiceChip/FilterChip.', required: false },
    { name: 'onDismiss', type: '() => void', default: 'undefined', desc: 'Dismiss callback for InputChip trailing close action.', required: false },
    { name: 'enabled', type: 'boolean', default: 'true', desc: 'Whether the chip is interactive.', required: false },
    { name: 'size', type: "Ux4gChoiceChipSize | Ux4gFilterChipSize | Ux4gInputChipSize", default: "'m'", desc: 'Size token (Choice/Filter: s|m, Input: xs|s|m).', required: false },
    { name: 'leadingContent', type: 'ReactNode', default: 'undefined', desc: 'Optional leading content/icon.', required: false },
    { name: 'trailingContent', type: 'ReactNode', default: 'undefined', desc: 'Optional trailing content/icon (Choice/Filter).', required: false },
    { name: 'borderRadius', type: 'number', default: 'size-based', desc: 'Corner radius override (ChoiceChip only).', required: false },
    { name: 'containerStyle', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Style override for chip container.', required: false },
    { name: 'textStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Style override for chip text.', required: false },
    { name: 'testID', type: 'string', default: 'undefined', desc: 'Test identifier for automation.', required: false },
  ];

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Chips</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Compact interactive elements representing choices, attributes, actions, or input tags. Includes Choice, Filter, Input, Suggestion, and Action chips.
        </p>
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
              className={`wb-tab ${activeMainTab === 'props' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('props')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">tune</span> Props
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
                <CodeBlock code={codeString} language="TSX" filename="ChipsExample.tsx" />
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
