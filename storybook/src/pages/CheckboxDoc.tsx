import React, { useState, useMemo } from 'react';
import { Ux4gCheckbox } from '../../../src/components/checkbox/Checkbox';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface CheckboxDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const CheckboxDoc: React.FC<CheckboxDocProps> = ({ isDark, story = 'checkbox-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    if (story === 'checkbox-sizes') {
      return `import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gCheckbox, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function CheckboxSizesExample() {
  const [small, setSmall] = useState(true);
  const [medium, setMedium] = useState(true);
  const [large, setLarge] = useState(true);

  return (
    <Ux4gThemeProvider isDark={false}>
      <View style={styles.container}>
        <Ux4gCheckbox 
          value={small} 
          onChanged={setSmall} 
          size="small" 
          label="Small Checkbox (16pt)" 
          description="Helper info" 
        />
        <View style={{ height: 16 }} />
        <Ux4gCheckbox 
          value={medium} 
          onChanged={setMedium} 
          size="medium" 
          label="Medium Checkbox (20pt)" 
          description="Default size" 
        />
        <View style={{ height: 16 }} />
        <Ux4gCheckbox 
          value={large} 
          onChanged={setLarge} 
          size="large" 
          label="Large Checkbox (24pt)" 
          description="Prominent option" 
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});`;
    }

    if (story === 'checkbox-tristate') {
      return `import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gCheckbox, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function CheckboxTristateExample() {
  const [opt1, setOpt1] = useState(true);
  const [opt2, setOpt2] = useState(false);

  // Compute parent tristate value
  const parentValue = opt1 && opt2 ? true : !opt1 && !opt2 ? false : null;

  const handleParentChange = () => {
    const nextState = parentValue !== true;
    setOpt1(nextState);
    setOpt2(nextState);
  };

  return (
    <Ux4gThemeProvider isDark={false}>
      <View style={styles.container}>
        <Ux4gCheckbox 
          value={parentValue} 
          onChanged={handleParentChange} 
          label="Select All Items" 
          description="Parent-child tristate selection" 
        />
        <View style={{ height: 12 }} />
        <View style={{ paddingLeft: 24, gap: 12 }}>
          <Ux4gCheckbox 
            value={opt1} 
            onChanged={setOpt1} 
            label="Option 1" 
            size="small" 
          />
          <Ux4gCheckbox 
            value={opt2} 
            onChanged={setOpt2} 
            label="Option 2" 
            size="small" 
          />
        </View>
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});`;
    }

    return `import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gCheckbox, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function CheckboxBasicExample() {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [tristate, setTristate] = useState<boolean | null>(null);

  return (
    <Ux4gThemeProvider isDark={false}>
      <View style={styles.container}>
        <Ux4gCheckbox 
          value={checked1} 
          onChanged={setChecked1} 
          label="Checked Checkbox" 
          description="Standard checked state" 
        />
        
        <View style={{ height: 16 }} />
        
        <Ux4gCheckbox 
          value={checked2} 
          onChanged={setChecked2} 
          label="Unchecked Checkbox" 
          description="Standard unchecked state" 
        />
        
        <View style={{ height: 16 }} />
        
        <Ux4gCheckbox 
          value={tristate} 
          onChanged={setTristate} 
          label="Indeterminate Checkbox" 
          description="Tristate dash indicator" 
        />

        <View style={{ height: 16 }} />
        
        <Ux4gCheckbox 
          value={true} 
          enabled={false} 
          label="Disabled Checkbox" 
          description="Muted non-interactive state" 
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});`;
  }, [story]);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    let snackCodeString = '';

    if (story === 'checkbox-sizes') {
      snackCodeString = `import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gCheckbox, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [smallChecked, setSmallChecked] = useState(true);
  const [medChecked, setMedChecked] = useState(true);
  const [largeChecked, setLargeChecked] = useState(true);

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={styles.container}>
        <Ux4gCheckbox 
          value={smallChecked} 
          onChanged={setSmallChecked} 
          size="small" 
          label="Small Checkbox (16pt)" 
          description="Helper info" 
        />
        <View style={{ height: 16 }} />
        <Ux4gCheckbox 
          value={medChecked} 
          onChanged={setMedChecked} 
          size="medium" 
          label="Medium Checkbox (20pt)" 
          description="Default size" 
        />
        <View style={{ height: 16 }} />
        <Ux4gCheckbox 
          value={largeChecked} 
          onChanged={setLargeChecked} 
          size="large" 
          label="Large Checkbox (24pt)" 
          description="Prominent option" 
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
    backgroundColor: ${isDark ? "'#121212'" : "'#ffffff'"}
  }
});`;
    } else if (story === 'checkbox-tristate') {
      snackCodeString = `import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gCheckbox, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [opt1, setOpt1] = useState(true);
  const [opt2, setOpt2] = useState(false);

  const parentValue = opt1 && opt2 ? true : !opt1 && !opt2 ? false : null;

  const handleParentChange = () => {
    const nextState = parentValue !== true;
    setOpt1(nextState);
    setOpt2(nextState);
  };

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={styles.container}>
        <Ux4gCheckbox 
          value={parentValue} 
          onChanged={handleParentChange} 
          label="Select All Items" 
          description="Parent-child tristate selection (tap to toggle)" 
        />
        <View style={{ height: 12 }} />
        <View style={{ paddingLeft: 24, gap: 12 }}>
          <Ux4gCheckbox 
            value={opt1} 
            onChanged={setOpt1} 
            label="Option 1" 
            size="small" 
          />
          <Ux4gCheckbox 
            value={opt2} 
            onChanged={setOpt2} 
            label="Option 2" 
            size="small" 
          />
        </View>
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
    backgroundColor: ${isDark ? "'#121212'" : "'#ffffff'"}
  }
});`;
    } else {
      snackCodeString = `import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gCheckbox, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [tristate, setTristate] = useState(null);

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={styles.container}>
        <Ux4gCheckbox 
          value={checked1} 
          onChanged={setChecked1} 
          label="Checked Checkbox" 
          description="Standard checked state" 
        />
        
        <View style={{ height: 16 }} />
        
        <Ux4gCheckbox 
          value={checked2} 
          onChanged={setChecked2} 
          label="Unchecked Checkbox" 
          description="Standard unchecked state" 
        />
        
        <View style={{ height: 16 }} />
        
        <Ux4gCheckbox 
          value={tristate} 
          onChanged={setTristate} 
          label="Indeterminate Checkbox" 
          description="Tristate dash indicator (tap to toggle)" 
        />

        <View style={{ height: 16 }} />
        
        <Ux4gCheckbox 
          value={true} 
          enabled={false} 
          onChanged={() => {}} 
          label="Disabled Checkbox" 
          description="Muted non-interactive state" 
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
    backgroundColor: ${isDark ? "'#121212'" : "'#ffffff'"}
  }
});`;
    }

    const snackUrl = `https://snack.expo.dev/embedded?platform=android&supportedPlatforms=ios,android&theme=${isDark ? 'dark' : 'light'}&name=Ux4gCheckbox%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.6,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '600px', border: 'none', borderRadius: '8px' }}
        title="Expo Snack Preview"
      />
    );
  };

  /* ── Props Table Data ── */
  const propsData = [
    { name: 'value', type: 'boolean | null', default: 'false', desc: 'Checked state (`true` checked, `false` unchecked, `null` indeterminate).', required: true },
    { name: 'onChanged', type: '(newValue: boolean | null) => void', default: 'required', desc: 'Callback fired when user presses checkbox or label.', required: true },
    { name: 'label', type: 'string', default: 'undefined', desc: 'Primary text label next to checkbox.', required: false },
    { name: 'description', type: 'string', default: 'undefined', desc: 'Secondary helper/description text.', required: false },
    { name: 'size', type: "'small' | 'medium' | 'large'", default: "'medium'", desc: 'Checkbox box size.', required: false },
    { name: 'isRequired', type: 'boolean', default: 'false', desc: 'Appends red asterisk to the label.', required: false },
    { name: 'hasError', type: 'boolean', default: 'false', desc: 'Highlights checkbox border in error state.', required: false },
    { name: 'descriptionVariant', type: "'helper' | 'error' | 'warning' | 'success'", default: "'helper'", desc: 'Semantic style for description text.', required: false },
    { name: 'enabled', type: 'boolean', default: 'true', desc: 'Whether checkbox is interactive.', required: false },
    { name: 'activeColor', type: 'string', default: 'theme.colors.primary', desc: 'Active fill/border color for checked/indeterminate state.', required: false },
    { name: 'checkColor', type: 'string', default: 'theme.colors.onPrimary', desc: 'Checkmark/dash icon color.', required: false },
    { name: 'style', type: 'StyleProp<ViewStyle> | (state) => StyleProp<ViewStyle>', default: 'undefined', desc: 'Style override for outer Pressable row.', required: false },
    { name: 'labelStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Style override for label text.', required: false },
    { name: 'descriptionStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Style override for description text.', required: false },
    { name: 'testID', type: 'string', default: 'undefined', desc: 'Test identifier for automation.', required: false },
  ];

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Checkbox</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">
          Selection control for single items, multi-select lists, and parent-child tristate selection with interactive checkmark and indeterminate state animations.
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
                <CodeBlock code={codeString} language="TSX" filename="CheckboxExample.tsx" />
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
