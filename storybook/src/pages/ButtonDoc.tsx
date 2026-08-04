import React, { useState, useMemo } from 'react';
import { Text } from 'react-native';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gOutlineButton } from '../../../src/components/button/OutlineButton';
import { Ux4gTextButton } from '../../../src/components/button/TextButton';
import { Ux4gIconButton } from '../../../src/components/button/IconButton';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface ButtonDocProps {
  isDark: boolean;
}

type VariantFilter = 'primary' | 'secondary' | 'outline' | 'ghost';
type SizeFilter = 'small' | 'medium' | 'large';
type StateFilter = 'default' | 'disabled' | 'loading';
type TypeFilter = 'standard' | 'outline-preset' | 'text-preset' | 'icon';

interface FilterBarSectionProps {
  label: string;
  options: { value: string; label: string }[];
  active: string;
  onChange: (value: string) => void;
}

const FilterBarSection: React.FC<FilterBarSectionProps> = ({
  label,
  options,
  active,
  onChange,
}) => (
  <div className="filter-group">
    <span className="filter-label">{label}</span>
    <div className="filter-options">
      {options.map((opt) => (
        <button
          key={opt.value}
          className={`filter-option ${active === opt.value ? 'active' : ''}`}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  </div>
);

/** Render a Material Icon for button demo */
const renderDemoIcon = (iconName: string) => ({ color, size }: { color: string; size?: number }) => (
  <span
    className="material-symbols-outlined"
    style={{
      color,
      fontSize: size ?? 20,
      lineHeight: '1',
      userSelect: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {iconName}
  </span>
);

export const ButtonDoc: React.FC<ButtonDocProps> = ({ isDark }) => {
  const [variant, setVariant] = useState<VariantFilter>('primary');
  const [size, setSize] = useState<SizeFilter>('medium');
  const [state, setState] = useState<StateFilter>('default');
  const [type, setType] = useState<TypeFilter>('standard');

  const isDisabled = state === 'disabled';
  const isLoading = state === 'loading';

  // Build the code string dynamically from the current filter state
  const codeString = useMemo(() => {
    if (type === 'icon') {
      return buildIconButtonCode(variant, state);
    }
    if (type === 'outline-preset') {
      return buildOutlinePresetCode(size, state);
    }
    if (type === 'text-preset') {
      return buildTextPresetCode(size, state);
    }
    return buildStandardButtonCode(variant, size, state);
  }, [variant, size, state, type]);

  // Render the live preview component
  const renderPreview = () => {
    if (type === 'icon') {
      return (
        <Ux4gIconButton
          variant={variant}
          size={44}
          icon={renderDemoIcon('star')}
          enabled={!isDisabled}
          isLoading={isLoading}
          onPress={() => {}}
        />
      );
    }
    if (type === 'outline-preset') {
      return (
        <Ux4gOutlineButton
          text="Outline Button"
          size={size}
          enabled={!isDisabled}
          isLoading={isLoading}
          onPress={() => {}}
        />
      );
    }
    if (type === 'text-preset') {
      return (
        <Ux4gTextButton
          text="Text Button"
          size={size}
          enabled={!isDisabled}
          isLoading={isLoading}
          onPress={() => {}}
        />
      );
    }
    return (
      <Ux4gButton
        variant={variant}
        size={size}
        text="Click Me"
        enabled={!isDisabled}
        isLoading={isLoading}
        onPress={() => {}}
      />
    );
  };

  return (
    <div className="doc-container">
      {/* Header */}
      <div className="doc-header">
        <div className="doc-breadcrumb">
          <a href="#" onClick={(e) => { e.preventDefault(); }}>Components</a> / Button
        </div>
        <h1 className="doc-title">Button</h1>
        <p className="doc-description">
          A versatile, accessible button component with 4 variants (Primary, Secondary,
          Outline, Ghost), 3 sizes, loading/disabled states, icon support, and full
          style customization — ported from the UX4G Flutter design system.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="filter-bar">
        <FilterBarSection
          label="Type"
          options={[
            { value: 'standard', label: 'Standard' },
            { value: 'outline-preset', label: 'Outline' },
            { value: 'text-preset', label: 'Text' },
            { value: 'icon', label: 'Icon' },
          ]}
          active={type}
          onChange={(v) => setType(v as TypeFilter)}
        />
        {(type === 'standard' || type === 'icon') && (
          <FilterBarSection
            label="Variant"
            options={[
              { value: 'primary', label: 'Primary' },
              { value: 'secondary', label: 'Secondary' },
              { value: 'outline', label: 'Outline' },
              { value: 'ghost', label: 'Ghost' },
            ]}
            active={variant}
            onChange={(v) => setVariant(v as VariantFilter)}
          />
        )}
        {type !== 'icon' && (
          <FilterBarSection
            label="Size"
            options={[
              { value: 'small', label: 'Small' },
              { value: 'medium', label: 'Medium' },
              { value: 'large', label: 'Large' },
            ]}
            active={size}
            onChange={(v) => setSize(v as SizeFilter)}
          />
        )}
        <FilterBarSection
          label="State"
          options={[
            { value: 'default', label: 'Default' },
            { value: 'disabled', label: 'Disabled' },
            { value: 'loading', label: 'Loading' },
          ]}
          active={state}
          onChange={(v) => setState(v as StateFilter)}
        />
      </div>

      {/* Preview + Code */}
      <div className="preview-section">
        <div className="preview-section-label">Preview</div>
        <Ux4gThemeProvider isDark={isDark}>
          <div className={`preview-container ${isDark ? 'dark-preview' : ''}`}>
            <div className="checkerboard" />
            {renderPreview()}
          </div>
        </Ux4gThemeProvider>
        <CodeBlock code={codeString} language="TSX" filename="ButtonExample.tsx" />
      </div>

      {/* Props Table */}
      <div className="props-section">
        <h2 className="props-section-title">Props</h2>
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
            <tr>
              <td><span className="prop-name">text</span></td>
              <td><span className="prop-type">string</span></td>
              <td><span className="prop-default">—</span></td>
              <td>Text label inside the button</td>
            </tr>
            <tr>
              <td><span className="prop-name">variant</span></td>
              <td><span className="prop-type">'primary' | 'secondary' | 'outline' | 'ghost'</span></td>
              <td><span className="prop-default">'primary'</span></td>
              <td>Visual button style variant</td>
            </tr>
            <tr>
              <td><span className="prop-name">size</span></td>
              <td><span className="prop-type">'small' | 'medium' | 'large'</span></td>
              <td><span className="prop-default">'medium'</span></td>
              <td>Button sizing preset (32pt / 40pt / 48pt)</td>
            </tr>
            <tr>
              <td><span className="prop-name">enabled</span></td>
              <td><span className="prop-type">boolean</span></td>
              <td><span className="prop-default">true</span></td>
              <td>Whether button is interactive and enabled</td>
            </tr>
            <tr>
              <td><span className="prop-name">isLoading</span></td>
              <td><span className="prop-type">boolean</span></td>
              <td><span className="prop-default">false</span></td>
              <td>Shows spinner and prevents press</td>
            </tr>
            <tr>
              <td><span className="prop-name">leadingIcon</span></td>
              <td><span className="prop-type">ReactNode | Function</span></td>
              <td><span className="prop-default">—</span></td>
              <td>Icon rendered before text</td>
            </tr>
            <tr>
              <td><span className="prop-name">trailingIcon</span></td>
              <td><span className="prop-type">ReactNode | Function</span></td>
              <td><span className="prop-default">—</span></td>
              <td>Icon rendered after text</td>
            </tr>
            <tr>
              <td><span className="prop-name">backgroundColor</span></td>
              <td><span className="prop-type">string</span></td>
              <td><span className="prop-default">—</span></td>
              <td>Override background color</td>
            </tr>
            <tr>
              <td><span className="prop-name">contentColor</span></td>
              <td><span className="prop-type">string</span></td>
              <td><span className="prop-default">—</span></td>
              <td>Override foreground text/icon color</td>
            </tr>
            <tr>
              <td><span className="prop-name">borderRadius</span></td>
              <td><span className="prop-type">number</span></td>
              <td><span className="prop-default">8</span></td>
              <td>Corner radius in points</td>
            </tr>
            <tr>
              <td><span className="prop-name">borderColor</span></td>
              <td><span className="prop-type">string</span></td>
              <td><span className="prop-default">—</span></td>
              <td>Override border color</td>
            </tr>
            <tr>
              <td><span className="prop-name">borderWidth</span></td>
              <td><span className="prop-type">number</span></td>
              <td><span className="prop-default">—</span></td>
              <td>Override border width</td>
            </tr>
            <tr>
              <td><span className="prop-name">width</span></td>
              <td><span className="prop-type">DimensionValue</span></td>
              <td><span className="prop-default">—</span></td>
              <td>Explicit width dimension</td>
            </tr>
            <tr>
              <td><span className="prop-name">height</span></td>
              <td><span className="prop-type">number</span></td>
              <td><span className="prop-default">—</span></td>
              <td>Explicit height dimension</td>
            </tr>
            <tr>
              <td><span className="prop-name">elevation</span></td>
              <td><span className="prop-type">number</span></td>
              <td><span className="prop-default">0</span></td>
              <td>Shadow elevation (Android/iOS)</td>
            </tr>
            <tr>
              <td><span className="prop-name">onPress</span></td>
              <td><span className="prop-type">() =&gt; void</span></td>
              <td><span className="prop-default">—</span></td>
              <td>Press handler callback</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ─── Code Generators ─────────────────────────────────────────────── */

function buildStandardButtonCode(
  variant: VariantFilter,
  size: SizeFilter,
  state: StateFilter
): string {
  const lines: string[] = [];
  lines.push(`import { Ux4gButton } from 'ux4g-react-native-design-system';`);
  lines.push('');
  lines.push('<Ux4gButton');
  if (variant !== 'primary') lines.push(`  variant="${variant}"`);
  if (size !== 'medium') lines.push(`  size="${size}"`);
  lines.push('  text="Click Me"');
  if (state === 'disabled') lines.push('  enabled={false}');
  if (state === 'loading') lines.push('  isLoading={true}');
  lines.push('  onPress={() => {}}');
  lines.push('/>');
  return lines.join('\n');
}

function buildOutlinePresetCode(size: SizeFilter, state: StateFilter): string {
  const lines: string[] = [];
  lines.push(`import { Ux4gOutlineButton } from 'ux4g-react-native-design-system';`);
  lines.push('');
  lines.push('<Ux4gOutlineButton');
  lines.push('  text="Outline Button"');
  if (size !== 'medium') lines.push(`  size="${size}"`);
  if (state === 'disabled') lines.push('  enabled={false}');
  if (state === 'loading') lines.push('  isLoading={true}');
  lines.push('  onPress={() => {}}');
  lines.push('/>');
  return lines.join('\n');
}

function buildTextPresetCode(size: SizeFilter, state: StateFilter): string {
  const lines: string[] = [];
  lines.push(`import { Ux4gTextButton } from 'ux4g-react-native-design-system';`);
  lines.push('');
  lines.push('<Ux4gTextButton');
  lines.push('  text="Text Button"');
  if (size !== 'medium') lines.push(`  size="${size}"`);
  if (state === 'disabled') lines.push('  enabled={false}');
  if (state === 'loading') lines.push('  isLoading={true}');
  lines.push('  onPress={() => {}}');
  lines.push('/>');
  return lines.join('\n');
}

function buildIconButtonCode(variant: VariantFilter, state: StateFilter): string {
  const lines: string[] = [];
  lines.push(`import { Ux4gIconButton } from 'ux4g-react-native-design-system';`);
  lines.push('');
  lines.push('<Ux4gIconButton');
  if (variant !== 'primary') lines.push(`  variant="${variant}"`);
  lines.push('  size={44}');
  lines.push('  icon={({ color, size }) => (');
  lines.push('    <Icon name="star" color={color} size={size} />');
  lines.push('  )}');
  if (state === 'disabled') lines.push('  enabled={false}');
  if (state === 'loading') lines.push('  isLoading={true}');
  lines.push('  onPress={() => {}}');
  lines.push('/>');
  return lines.join('\n');
}

export default ButtonDoc;
