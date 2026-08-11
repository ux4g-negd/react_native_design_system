import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface SearchFieldDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';
type SearchStory = 'search-basic' | 'search-submit' | 'search-autocomplete' | 'search-status';

const normalizeStory = (story?: string): SearchStory => {
  if (story === 'search' || story === 'search-field') return 'search-basic';
  const allowed: SearchStory[] = ['search-basic', 'search-submit', 'search-autocomplete', 'search-status'];
  return allowed.includes(story as SearchStory) ? (story as SearchStory) : 'search-basic';
};

const storyMeta: Record<SearchStory, { title: string; description: string }> = {
  'search-basic': {
    title: 'Search Field',
    description: 'Basic search input with search icon, optional voice/clear actions, and helper caption.',
  },
  'search-submit': {
    title: 'Search Field',
    description: 'Search field with attached submit button using filled or tonal style variants.',
  },
  'search-autocomplete': {
    title: 'Search Field',
    description: 'Autocomplete dropdown with filtering modes and option selection behavior.',
  },
  'search-status': {
    title: 'Search Field',
    description: 'Validation states with semantic status color, icon, and caption feedback.',
  },
};

const getStoryCode = (story: SearchStory): string => {
  if (story === 'search-submit') {
    return `import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gSearchField } from 'ux4g-react-native-design-system';

export default function SearchFieldSubmitExample() {
  const [filledValue, setFilledValue] = useState('Delhi');
  const [tonalValue, setTonalValue] = useState('');

  return (
    <View style={{ width: '100%', gap: 14 }}>
      <Ux4gSearchField
        label='Filled Button Style'
        value={filledValue}
        onValueChange={setFilledValue}
        variant='searchWithSubmit'
        buttonStyle='filled'
        placeholder='Search city...'
      />
      <Ux4gSearchField
        label='Tonal Button Style'
        value={tonalValue}
        onValueChange={setTonalValue}
        variant='searchWithSubmit'
        buttonStyle='tonal'
        placeholder='Search postal code...'
      />
    </View>
  );
}`;
  }

  if (story === 'search-autocomplete') {
    return `import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gSearchField } from 'ux4g-react-native-design-system';

const options = ['India', 'Indonesia', 'United States', 'United Kingdom', 'Australia', 'Canada'];

export default function SearchFieldAutocompleteExample() {
  const [containsValue, setContainsValue] = useState('');
  const [startsWithValue, setStartsWithValue] = useState('');

  return (
    <View style={{ width: '100%', gap: 14 }}>
      <Ux4gSearchField
        label='Contains Filter'
        value={containsValue}
        onValueChange={setContainsValue}
        variant='autocomplete'
        filterType='contains'
        options={options}
        placeholder='Type to search countries...'
      />
      <Ux4gSearchField
        label='Starts With Filter'
        value={startsWithValue}
        onValueChange={setStartsWithValue}
        variant='autocomplete'
        filterType='startsWith'
        options={options}
        placeholder='Try "Uni" or "Ind"...'
      />
    </View>
  );
}`;
  }

  if (story === 'search-status') {
    return `import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gSearchField } from 'ux4g-react-native-design-system';

export default function SearchFieldStatusExample() {
  const [errorValue, setErrorValue] = useState('Invalid @#$');
  const [warningValue, setWarningValue] = useState('Slow search index');
  const [successValue, setSuccessValue] = useState('TRK-2026-9912');

  return (
    <View style={{ width: '100%', gap: 14 }}>
      <Ux4gSearchField
        label='Error Status'
        value={errorValue}
        onValueChange={setErrorValue}
        status='error'
        caption='Please remove unsupported characters.'
      />
      <Ux4gSearchField
        label='Warning Status'
        value={warningValue}
        onValueChange={setWarningValue}
        status='warning'
        caption='Search index is rebuilding. Results may delay.'
      />
      <Ux4gSearchField
        label='Success Status'
        value={successValue}
        onValueChange={setSuccessValue}
        status='success'
        caption='Tracking number verified.'
      />
    </View>
  );
}`;
  }

  return `import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gSearchField } from 'ux4g-react-native-design-system';

export default function SearchFieldBasicExample() {
  const [value, setValue] = useState('');

  return (
    <View style={{ width: '100%', gap: 14 }}>
      <Ux4gSearchField
        label='Search Directory'
        value={value}
        onValueChange={setValue}
        variant='basicSearch'
        showVoiceIcon={true}
        showClearIcon={true}
        placeholder='Search documents, people, or tags...'
        caption='Type keywords to search quickly.'
      />
    </View>
  );
}`;
};

const getSnackFields = (story: SearchStory): string => {
  if (story === 'search-submit') {
    return `        <View style={styles.stackFull}>
          <Ux4gSearchField
            label='Filled Button Style'
            value={filledValue}
            onValueChange={setFilledValue}
            variant='searchWithSubmit'
            buttonStyle='filled'
            placeholder='Search city...'
          />
          <Ux4gSearchField
            label='Tonal Button Style'
            value={tonalValue}
            onValueChange={setTonalValue}
            variant='searchWithSubmit'
            buttonStyle='tonal'
            placeholder='Search postal code...'
          />
        </View>`;
  }

  if (story === 'search-autocomplete') {
    return `        <View style={styles.stackFull}>
          <Ux4gSearchField
            label='Contains Filter'
            value={containsValue}
            onValueChange={setContainsValue}
            variant='autocomplete'
            filterType='contains'
            options={sampleOptions}
            placeholder='Type to search countries...'
          />
          <Ux4gSearchField
            label='Starts With Filter'
            value={startsWithValue}
            onValueChange={setStartsWithValue}
            variant='autocomplete'
            filterType='startsWith'
            options={sampleOptions}
            placeholder='Try "Uni" or "Ind"...'
          />
        </View>`;
  }

  if (story === 'search-status') {
    return `        <View style={styles.stackFull}>
          <Ux4gSearchField
            label='Error Status'
            value={errorValue}
            onValueChange={setErrorValue}
            status='error'
            caption='Please remove unsupported characters.'
          />
          <Ux4gSearchField
            label='Warning Status'
            value={warningValue}
            onValueChange={setWarningValue}
            status='warning'
            caption='Search index is rebuilding. Results may delay.'
          />
          <Ux4gSearchField
            label='Success Status'
            value={successValue}
            onValueChange={setSuccessValue}
            status='success'
            caption='Tracking number verified.'
          />
        </View>`;
  }

  return `        <View style={styles.stackFull}>
          <Ux4gSearchField
            label='Search Directory'
            value={basicValue}
            onValueChange={setBasicValue}
            variant='basicSearch'
            showVoiceIcon={true}
            showClearIcon={true}
            placeholder='Search documents, people, or tags...'
            caption='Type keywords to search quickly.'
          />
        </View>`;
};

export const SearchFieldDoc: React.FC<SearchFieldDocProps> = ({ isDark, story = 'search-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const activeStory = normalizeStory(story);
  const config = storyMeta[activeStory];
  const codeString = useMemo(() => getStoryCode(activeStory), [activeStory]);

  const renderStoryPreview = () => {
    const snackCodeString = `import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Ux4gSearchField, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

const sampleOptions = ['India', 'Indonesia', 'United States', 'United Kingdom', 'Australia', 'Canada'];

export default function App() {
  const [basicValue, setBasicValue] = useState('');
  const [filledValue, setFilledValue] = useState('Delhi');
  const [tonalValue, setTonalValue] = useState('');
  const [containsValue, setContainsValue] = useState('');
  const [startsWithValue, setStartsWithValue] = useState('');
  const [errorValue, setErrorValue] = useState('Invalid @#$');
  const [warningValue, setWarningValue] = useState('Slow search index');
  const [successValue, setSuccessValue] = useState('TRK-2026-9912');

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={styles.container}>
${getSnackFields(activeStory)}
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  stackFull: {
    width: '100%',
    gap: 14,
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gSearchField%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '640px', border: 'none', borderRadius: '8px' }}
        title='Expo Snack Search Field Preview'
      />
    );
  };

  const propsData = [
    { name: 'value', type: 'string', default: 'required', desc: 'Current search input value.', required: true },
    { name: 'onValueChange', type: '(value: string) => void', default: 'required', desc: 'Called when input text changes.', required: true },
    { name: 'variant', type: "'basicSearch' | 'searchWithSubmit' | 'autocomplete'", default: "'basicSearch'", desc: 'Search interaction mode.', required: false },
    { name: 'filterType', type: "'contains' | 'startsWith' | 'startsWithPerTerm'", default: "'contains'", desc: 'Autocomplete filter behavior.', required: false },
    { name: 'size', type: "'small' | 'medium' | 'large' | 'xl'", default: "'medium'", desc: 'Height variant of search field.', required: false },
    { name: 'status', type: "'defaultStatus' | 'error' | 'warning' | 'success'", default: "'defaultStatus'", desc: 'Validation state coloring and icon.', required: false },
    { name: 'buttonStyle', type: "'filled' | 'tonal'", default: "'filled'", desc: 'Submit button style in submit variant.', required: false },
    { name: 'label / placeholder / caption', type: 'string', default: 'undefined', desc: 'Supportive field text configuration.', required: false },
    { name: 'options', type: 'string[]', default: '[]', desc: 'Autocomplete options list.', required: false },
    { name: 'showVoiceIcon / showClearIcon', type: 'boolean', default: 'true / true', desc: 'Voice and clear icon visibility toggles.', required: false },
    { name: 'isLoading', type: 'boolean', default: 'false', desc: 'Shows loading spinner in dropdown.', required: false },
    { name: 'enabled / readOnly', type: 'boolean', default: 'true / false', desc: 'Input interactivity controls.', required: false },
    { name: 'onSubmitClick', type: '(value: string) => void', default: 'undefined', desc: 'Submit callback for button/keyboard action.', required: false },
    { name: 'onOptionSelected', type: '(option: string) => void', default: 'undefined', desc: 'Called when autocomplete option is chosen.', required: false },
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
                <CodeBlock code={codeString} language='TSX' filename='SearchFieldExample.tsx' />
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

export default SearchFieldDoc;
