import React, { useState, useMemo } from 'react';
import {
  Ux4gChipGroup,
  Ux4gChoiceChip,
  Ux4gInputChip,
  Ux4gInputChipField,
} from '../../../src/components/chips/Chips';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface ChipGroupDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const ChipGroupDoc: React.FC<ChipGroupDocProps> = ({ isDark, story = 'chip-group-wrap' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import { Ux4gChipGroup, Ux4gChoiceChip, Ux4gInputChipField, Ux4gInputChip } from 'ux4g-react-native-design-system';`);
    lines.push(`import { useState } from 'react';`);
    lines.push('');
    lines.push('// Wrap Chip Group');
    lines.push('const [selectedIdx, setSelectedIdx] = useState(0);');
    lines.push('<Ux4gChipGroup');
    lines.push('  arrangement="wrap"');
    lines.push('  spacing={8}');
    lines.push('  runSpacing={8}');
    lines.push('  chips={["React Native", "TypeScript", "Expo", "Storybook", "UX4G"].map((tag, i) => (');
    lines.push('    <Ux4gChoiceChip');
    lines.push('      key={tag}');
    lines.push('      text={tag}');
    lines.push('      selected={selectedIdx === i}');
    lines.push('      onClick={() => setSelectedIdx(i)}');
    lines.push('    />');
    lines.push('  ))}');
    lines.push('/>');
    lines.push('');
    lines.push('// Input Chip Field');
    lines.push('const [text, setText] = useState("");');
    lines.push('const [tags, setTags] = useState(["Frontend", "UI"]);');
    lines.push('<Ux4gInputChipField');
    lines.push('  value={text}');
    lines.push('  onValueChange={setText}');
    lines.push('  onAddChip={(newTag) => setTags([...tags, newTag])}');
    lines.push('  chips={tags.map(t => <Ux4gInputChip key={t} text={t} onDismiss={() => setTags(tags.filter(x => x !== t))} />)}');
    lines.push('/>');
    return lines.join('\n');
  }, []);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    let componentsSnippet = '';

    if (story === 'chip-group-input-field') {
      componentsSnippet = `        <Ux4gInputChipField
          value={inputValue}
          onValueChange={setInputValue}
          onAddChip={(newChip) => setChipsList([...chipsList, newChip])}
          placeholder="Type tag and press add..."
          chips={chipsList.map((chipText) => (
            <Ux4gInputChip
              key={chipText}
              text={chipText}
              onDismiss={() => setChipsList(chipsList.filter((c) => c !== chipText))}
            />
          ))}
        />`;
    } else {
      componentsSnippet = `        <Ux4gChipGroup
          arrangement="wrap"
          spacing={8}
          runSpacing={8}
          chips={['React Native', 'TypeScript', 'Expo', 'Storybook', 'UX4G Design System', 'Government Stack'].map((item, idx) => (
            <Ux4gChoiceChip
              key={item}
              text={item}
              selected={selectedCategory === idx}
              onClick={() => setSelectedCategory(idx)}
            />
          ))}
        />`;
    }

    const snackCodeString = `import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Ux4gChipGroup,
  Ux4gChoiceChip,
  Ux4gInputChip,
  Ux4gInputChipField,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [chipsList, setChipsList] = useState(['React Native', 'UI Design']);

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
    padding: 24
  }
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gChipGroup%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '600px', border: 'none', borderRadius: '8px' }}
        title="Expo Snack ChipGroup Preview"
      />
    );
  };

  /* ── Props Table Data ── */
  const propsData = [
    { name: 'chips', type: 'ReactNode[]', default: 'required in InputChipField / optional in ChipGroup', desc: 'Chip elements to render in group/field.', required: true },
    { name: 'children', type: 'ReactNode', default: 'undefined', desc: 'Alternative to `chips` for Ux4gChipGroup.', required: false },
    { name: 'arrangement', type: "'horizontal' | 'wrap'", default: "'wrap'", desc: 'Layout arrangement for Ux4gChipGroup and InputChipField chips.', required: false },
    { name: 'spacing', type: 'number', default: '8', desc: 'Horizontal gap between chips (Ux4gChipGroup).', required: false },
    { name: 'runSpacing', type: 'number', default: '8', desc: 'Vertical gap between wrapped rows (Ux4gChipGroup).', required: false },
    { name: 'value', type: 'string', default: 'required', desc: 'Current input text value (Ux4gInputChipField).', required: true },
    { name: 'onValueChange', type: '(value: string) => void', default: 'required', desc: 'Input change callback (Ux4gInputChipField).', required: true },
    { name: 'onAddChip', type: '(chipText: string) => void', default: 'required', desc: 'Callback when a new chip is added (Ux4gInputChipField).', required: true },
    { name: 'isDropdown', type: 'boolean', default: 'false', desc: 'Switches field to dropdown selection mode.', required: false },
    { name: 'dropdownOptions', type: 'string[]', default: '[]', desc: 'Dropdown options when `isDropdown` is true.', required: false },
    { name: 'placeholder', type: 'string', default: "'Add chip...'", desc: 'Placeholder text for input/dropdown trigger.', required: false },
    { name: 'enabled', type: 'boolean', default: 'true', desc: 'Whether the field/group interaction is enabled.', required: false },
    { name: 'containerStyle', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Container style override.', required: false },
    { name: 'testID', type: 'string', default: 'undefined', desc: 'Test identifier for automation.', required: false },
  ];

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Chip Group</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Group container for arranging multiple chips horizontally or wrapped across multiple lines, including interactive InputChipField controls.
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
                <CodeBlock code={codeString} language="TSX" filename="ChipGroupExample.tsx" />
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
