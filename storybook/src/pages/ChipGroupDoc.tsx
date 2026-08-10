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
    lines.push('  chips={tags.map(t => <Ux4gInputChip key={t} text={t} onDeleted={() => setTags(tags.filter(x => x !== t))} />)}');
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
              onDeleted={() => setChipsList(chipsList.filter((c) => c !== chipText))}
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

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gChipGroup%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.2,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

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
    { name: 'arrangement', type: "'wrap' | 'horizontal'", default: "'wrap'", desc: 'Arrangement layout mode for the grouped chips' },
    { name: 'spacing', type: 'number', default: '8', desc: 'Horizontal gap spacing between chips in pixels' },
    { name: 'runSpacing', type: 'number', default: '8', desc: 'Vertical row spacing when wrapped onto multiple lines' },
    { name: 'chips', type: 'ReactNode[]', default: '[]', desc: 'Array of chip elements to lay out in group or field' },
    { name: 'value', type: 'string', default: '—', desc: 'Input text value for `Ux4gInputChipField`' },
    { name: 'onValueChange', type: '(val: string) => void', default: '—', desc: 'Text change handler for `Ux4gInputChipField`' },
    { name: 'onAddChip', type: '(chipText: string) => void', default: '—', desc: 'Add chip callback triggered when user submits input tag' },
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
                <table className="wb-props-table">
                  <thead>
                    <tr>
                      <th>Prop</th>
                      <th>Type</th>
                      <th>Default</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {propsData.map((prop) => (
                      <tr key={prop.name}>
                        <td><code className="wb-prop-name">{prop.name}</code></td>
                        <td><code className="wb-prop-type">{prop.type}</code></td>
                        <td><code className="wb-prop-default">{prop.default}</code></td>
                        <td>{prop.desc}</td>
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
