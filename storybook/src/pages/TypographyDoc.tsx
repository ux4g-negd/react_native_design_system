import React, { useState, useCallback } from 'react';
import {
  defaultUx4gTypography,
  Ux4gTextStyle,
} from '../../../src/foundation/typography';
import CodeBlock from '../components/CodeBlock';

export type TypographySection =
  | 'header'
  | 'display'
  | 'body'
  | 'label'
  | 'title'
  | 'usage';

interface TypographyDocProps {
  isDark: boolean;
  section?: TypographySection;
}

interface TypographyItem {
  tokenName: string;
  label: string;
  style: Ux4gTextStyle;
}

const fontWeightLabel = (weight: string): string => {
  switch (weight) {
    case '400':
      return '400 (Regular)';
    case '500':
      return '500 (Medium)';
    case '600':
      return '600 (SemiBold)';
    case '700':
      return '700 (Bold)';
    default:
      return weight;
  }
};

const HEADER_TOKENS: TypographyItem[] = [
  { tokenName: 'hXXS_default', label: 'Header XXS (Default)', style: defaultUx4gTypography.hXXS_default },
  { tokenName: 'hXXS_strong', label: 'Header XXS (Strong)', style: defaultUx4gTypography.hXXS_strong },
  { tokenName: 'hXS_default', label: 'Header XS (Default)', style: defaultUx4gTypography.hXS_default },
  { tokenName: 'hXS_strong', label: 'Header XS (Strong)', style: defaultUx4gTypography.hXS_strong },
  { tokenName: 'hS_default', label: 'Header S (Default)', style: defaultUx4gTypography.hS_default },
  { tokenName: 'hS_strong', label: 'Header S (Strong)', style: defaultUx4gTypography.hS_strong },
  { tokenName: 'hM_default', label: 'Header M (Default)', style: defaultUx4gTypography.hM_default },
  { tokenName: 'hM_strong', label: 'Header M (Strong)', style: defaultUx4gTypography.hM_strong },
  { tokenName: 'hL_default', label: 'Header L (Default)', style: defaultUx4gTypography.hL_default },
  { tokenName: 'hL_strong', label: 'Header L (Strong)', style: defaultUx4gTypography.hL_strong },
  { tokenName: 'hXL_default', label: 'Header XL (Default)', style: defaultUx4gTypography.hXL_default },
  { tokenName: 'hXL_strong', label: 'Header XL (Strong)', style: defaultUx4gTypography.hXL_strong },
  { tokenName: 'hXXL_default', label: 'Header XXL (Default)', style: defaultUx4gTypography.hXXL_default },
  { tokenName: 'hXXL_strong', label: 'Header XXL (Strong)', style: defaultUx4gTypography.hXXL_strong },
];

const DISPLAY_TOKENS: TypographyItem[] = [
  { tokenName: 'dXS_default', label: 'Display XS (Default)', style: defaultUx4gTypography.dXS_default },
  { tokenName: 'dXS_strong', label: 'Display XS (Strong)', style: defaultUx4gTypography.dXS_strong },
  { tokenName: 'dS_default', label: 'Display S (Default)', style: defaultUx4gTypography.dS_default },
  { tokenName: 'dS_strong', label: 'Display S (Strong)', style: defaultUx4gTypography.dS_strong },
  { tokenName: 'dM_default', label: 'Display M (Default)', style: defaultUx4gTypography.dM_default },
  { tokenName: 'dM_strong', label: 'Display M (Strong)', style: defaultUx4gTypography.dM_strong },
  { tokenName: 'dL_default', label: 'Display L (Default)', style: defaultUx4gTypography.dL_default },
  { tokenName: 'dL_strong', label: 'Display L (Strong)', style: defaultUx4gTypography.dL_strong },
];

const BODY_TOKENS: TypographyItem[] = [
  { tokenName: 'bXS_default', label: 'Body XS (Default)', style: defaultUx4gTypography.bXS_default },
  { tokenName: 'bXS_strong', label: 'Body XS (Strong)', style: defaultUx4gTypography.bXS_strong },
  { tokenName: 'bS_default', label: 'Body S (Default)', style: defaultUx4gTypography.bS_default },
  { tokenName: 'bS_strong', label: 'Body S (Strong)', style: defaultUx4gTypography.bS_strong },
  { tokenName: 'bM_default', label: 'Body M (Default)', style: defaultUx4gTypography.bM_default },
  { tokenName: 'bM_strong', label: 'Body M (Strong)', style: defaultUx4gTypography.bM_strong },
  { tokenName: 'bL_default', label: 'Body L (Default)', style: defaultUx4gTypography.bL_default },
  { tokenName: 'bL_strong', label: 'Body L (Strong)', style: defaultUx4gTypography.bL_strong },
];

const LABEL_TOKENS: TypographyItem[] = [
  { tokenName: 'lS_default', label: 'Label S (Default)', style: defaultUx4gTypography.lS_default },
  { tokenName: 'lS_strong', label: 'Label S (Strong)', style: defaultUx4gTypography.lS_strong },
  { tokenName: 'lM_default', label: 'Label M (Default)', style: defaultUx4gTypography.lM_default },
  { tokenName: 'lM_strong', label: 'Label M (Strong)', style: defaultUx4gTypography.lM_strong },
  { tokenName: 'lL_default', label: 'Label L (Default)', style: defaultUx4gTypography.lL_default },
  { tokenName: 'lL_strong', label: 'Label L (Strong)', style: defaultUx4gTypography.lL_strong },
  { tokenName: 'lXL_default', label: 'Label XL (Default)', style: defaultUx4gTypography.lXL_default },
  { tokenName: 'lXL_strong', label: 'Label XL (Strong)', style: defaultUx4gTypography.lXL_strong },
];

const TITLE_TOKENS: TypographyItem[] = [
  { tokenName: 'tS_default', label: 'Title S (Default)', style: defaultUx4gTypography.tS_default },
  { tokenName: 'tS_strong', label: 'Title S (Strong)', style: defaultUx4gTypography.tS_strong },
  { tokenName: 'tM_default', label: 'Title M (Default)', style: defaultUx4gTypography.tM_default },
  { tokenName: 'tM_strong', label: 'Title M (Strong)', style: defaultUx4gTypography.tM_strong },
  { tokenName: 'tL_default', label: 'Title L (Default)', style: defaultUx4gTypography.tL_default },
  { tokenName: 'tL_strong', label: 'Title L (Strong)', style: defaultUx4gTypography.tL_strong },
];

const CATEGORY_MAP: Record<Exclude<TypographySection, 'usage'>, { title: string; tokenPrefix: string; items: TypographyItem[] }> = {
  header: {
    title: 'Header Tokens',
    tokenPrefix: 'useUx4gTheme().typography.h*',
    items: HEADER_TOKENS,
  },
  display: {
    title: 'Display Tokens',
    tokenPrefix: 'useUx4gTheme().typography.d*',
    items: DISPLAY_TOKENS,
  },
  body: {
    title: 'Body Tokens',
    tokenPrefix: 'useUx4gTheme().typography.b*',
    items: BODY_TOKENS,
  },
  label: {
    title: 'Label Tokens',
    tokenPrefix: 'useUx4gTheme().typography.l*',
    items: LABEL_TOKENS,
  },
  title: {
    title: 'Title Tokens',
    tokenPrefix: 'useUx4gTheme().typography.t*',
    items: TITLE_TOKENS,
  },
};

const TypographyRow: React.FC<{ item: TypographyItem }> = ({ item }) => {
  const [copied, setCopied] = useState(false);
  const codeSnippet = `useUx4gTheme().typography.${item.tokenName}`;

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet);
    } catch {
      /* clipboard fallback */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [codeSnippet]);

  return (
    <div className="typography-card">
      <div className="typography-card-header">
        <span className="typography-card-title">{item.label}</span>
        <span className="typography-pill">Size: {item.style.fontSize}px</span>
        <span className="typography-pill">Weight: {fontWeightLabel(item.style.fontWeight)}</span>
        <span className="typography-pill">Line height: {item.style.lineHeight}px</span>
      </div>

      <div className="typography-code-row">
        <span className="typography-code-text" title={codeSnippet}>
          {codeSnippet}
        </span>
        <button
          className="swatch-mini-copy"
          onClick={copy}
          title={copied ? 'Copied!' : `Copy Code (${codeSnippet})`}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 13 }}>
            {copied ? 'check' : 'content_copy'}
          </span>
        </button>
      </div>
    </div>
  );
};

const TypographyUsage: React.FC = () => {
  return (
    <div className="typography-usage-section">
      <h2 className="semantic-title">Using UX4G Typography</h2>
      <p className="semantic-description">
        All text styles in UX4G are structured under <code>Ux4gTypography</code> and are accessible
        through the theme hook <code>useUx4gTheme().typography</code>. Every scale has both{' '}
        <code>default</code> (standard weight) and <code>strong</code> (bold/semibold weight) variations.
      </p>

      <CodeBlock
        language="TSX"
        filename="Basic Usage Example"
        code={`import React from 'react';
import { Text, View } from 'react-native';
import { useUx4gTheme } from 'ux4g-react-native-design-system';

export const PortalHeader = () => {
  const { typography, colors } = useUx4gTheme();

  return (
    <View>
      <Text style={[typography.hL_strong, { color: colors.onSurface }]}>
        Government Service Portal
      </Text>
      <Text style={[typography.bM_default, { color: colors.onSurface, marginTop: 8 }]}>
        Please review the eligibility criteria carefully before applying.
      </Text>
    </View>
  );
};`}
      />

      <div style={{ marginTop: 24 }}>
        <CodeBlock
          language="TSX"
          filename="Customizing Styles with Arrays"
          code={`// You can customize color, alignment, or letterSpacing by combining style objects:
<Text
  style={[
    typography.lS_strong,
    {
      color: colors.error,
      letterSpacing: 0.5,
    },
  ]}
>
  Required field *
</Text>`}
        />
      </div>
    </div>
  );
};

export const TypographyDoc: React.FC<TypographyDocProps> = ({ section = 'header' }) => {
  const isUsage = section === 'usage';
  const category = isUsage ? undefined : CATEGORY_MAP[section];

  return (
    <div className="doc-container">
      <div className="doc-header">
        <div className="doc-breadcrumb">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Token
          </a>{' '}
          / Typography
        </div>
        <h1 className="doc-title">Typography</h1>
        <p className="doc-description">
          Responsive typography scale tokens for UX4G design system. Includes Header, Display,
          Body, Label, and Title styles with default and strong weights.
        </p>
      </div>

      {isUsage ? (
        <TypographyUsage />
      ) : (
        category && (
          <div className="typography-category-section">
            <div className="palette-section-header">
              <div className="palette-section-title">{category.title}</div>
              <div className="palette-section-subtitle">{category.tokenPrefix}</div>
            </div>
            {category.items.map((item) => (
              <TypographyRow key={item.tokenName} item={item} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default TypographyDoc;
