import React, { useCallback, useState } from 'react';
import {
  UX4GColors,
  lightUx4gColors,
  darkUx4gColors,
} from '../../../src/foundation/colors';

export type ColorsSection =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'gold'
  | 'green'
  | 'lime'
  | 'blue'
  | 'skyblue'
  | 'cyan'
  | 'purple'
  | 'pink'
  | 'neutral'
  | 'semantic';

interface ColorsDocProps {
  isDark: boolean;
  section?: ColorsSection;
}

interface SwatchData {
  token: string;
  color: string;
  label: string;
  main?: boolean;
}

const SHADE_LABELS = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];

const colorVal = (key: string): string =>
  (UX4GColors as Record<string, string>)[key] ?? '#000000';

const solidScale = (family: string): SwatchData[] => [
  { token: family, color: colorVal(family), label: `${family} ★`, main: true },
  ...SHADE_LABELS.map((s) => ({
    token: `${family}-${s}`,
    color: colorVal(`${family}${s}`),
    label: s,
  })),
];

const alphaScale = (family: string): SwatchData[] =>
  SHADE_LABELS.map((s) => ({
    token: `${family}-${s}A`,
    color: colorVal(`${family}${s}A`),
    label: `${s}A`,
  }));

const neutralSolid: SwatchData[] = [
  { token: 'neutral-0', color: UX4GColors.neutral0, label: '0 (white)' },
  ...SHADE_LABELS.map((s) => ({
    token: `neutral-${s}`,
    color: colorVal(`neutral${s}`),
    label: s,
  })),
  { token: 'neutral-1000black', color: UX4GColors.neutral1000black, label: '1000 (black)' },
];

const neutralAlpha: SwatchData[] = [
  { token: 'neutral-0A', color: UX4GColors.neutral0A, label: '0A' },
  ...SHADE_LABELS.map((s) => ({
    token: `neutral-${s}A`,
    color: colorVal(`neutral${s}A`),
    label: `${s}A`,
  })),
  { token: 'neutral-1000A', color: UX4GColors.neutral1000A, label: '1000A' },
];

const neutralBeta: SwatchData[] = [
  { token: 'neutral-0B', color: UX4GColors.neutral0B, label: '0B' },
  { token: 'neutral-950B', color: UX4GColors.neutral950B, label: '950B' },
];

const grayAliases: SwatchData[] = ['gray100', 'gray200', 'gray800', 'gray900'].map((t) => ({
  token: t,
  color: colorVal(t),
  label: `gray-${t.replace('gray', '')}`,
}));

const commonColors: SwatchData[] = [
  { token: 'white', color: UX4GColors.white, label: 'white' },
  { token: 'transparent', color: UX4GColors.transparent, label: 'transparent' },
];

interface PaletteGroup {
  label: string;
  swatches: SwatchData[];
}

interface PaletteDef {
  header?: { title: string; subtitle: string };
  groups: PaletteGroup[];
}

const PALETTES: Record<Exclude<ColorsSection, 'semantic'>, PaletteDef> = {
  primary: {
    header: {
      title: 'UX4GColors Tokens',
      subtitle: 'UX4GColors.* (Ux4gPalette is a deprecated alias)',
    },
    groups: [
      { label: 'Primary Solid Scale', swatches: solidScale('primary') },
      { label: 'Primary Alpha Scale (25% Opacity)', swatches: alphaScale('primary') },
    ],
  },
  secondary: {
    groups: [
      { label: 'Secondary Solid Scale', swatches: solidScale('secondary') },
      { label: 'Secondary Alpha Scale (25% Opacity)', swatches: alphaScale('secondary') },
    ],
  },
  tertiary: {
    groups: [
      { label: 'Tertiary Solid Scale', swatches: solidScale('tertiary') },
      { label: 'Tertiary Alpha Scale (25% Opacity)', swatches: alphaScale('tertiary') },
    ],
  },
  red: { groups: [{ label: 'Red (Error)', swatches: solidScale('red') }] },
  orange: { groups: [{ label: 'Orange (Warning)', swatches: solidScale('orange') }] },
  yellow: { groups: [{ label: 'Yellow', swatches: solidScale('yellow') }] },
  gold: { groups: [{ label: 'Gold', swatches: solidScale('gold') }] },
  green: { groups: [{ label: 'Green (Success)', swatches: solidScale('green') }] },
  lime: { groups: [{ label: 'Lime', swatches: solidScale('lime') }] },
  blue: { groups: [{ label: 'Blue (Info)', swatches: solidScale('blue') }] },
  skyblue: { groups: [{ label: 'Sky Blue', swatches: solidScale('skyBlue') }] },
  cyan: { groups: [{ label: 'Cyan', swatches: solidScale('cyan') }] },
  purple: { groups: [{ label: 'Purple', swatches: solidScale('purple') }] },
  pink: { groups: [{ label: 'Pink', swatches: solidScale('pink') }] },
  neutral: {
    groups: [
      { label: 'Neutral Solid Scale', swatches: neutralSolid },
      { label: 'Neutral Alpha Scale (25% Opacity)', swatches: neutralAlpha },
      { label: 'Neutral Beta Scale (70% Opacity)', swatches: neutralBeta },
      { label: 'Legacy Gray Aliases', swatches: grayAliases },
      { label: 'Common Colors', swatches: commonColors },
    ],
  },
};

const SECTION_TITLES: Record<ColorsSection, string> = {
  primary: 'Primary',
  secondary: 'Secondary',
  tertiary: 'Tertiary',
  red: 'Red (Error)',
  orange: 'Orange (Warning)',
  yellow: 'Yellow',
  gold: 'Gold',
  green: 'Green (Success)',
  lime: 'Lime',
  blue: 'Blue (Info)',
  skyblue: 'Sky Blue',
  cyan: 'Cyan',
  purple: 'Purple',
  pink: 'Pink',
  neutral: 'Neutral',
  semantic: 'Semantic Tokens',
};

const SEMANTIC_PAIRS: { base: string; on: string }[] = [
  { base: 'primary', on: 'onPrimary' },
  { base: 'secondary', on: 'onSecondary' },
  { base: 'background', on: 'onBackground' },
  { base: 'surface', on: 'onSurface' },
  { base: 'error', on: 'onError' },
  { base: 'success', on: 'onSuccess' },
  { base: 'warning', on: 'onWarning' },
  { base: 'info', on: 'onInfo' },
];

const displayHex = (c: string): string => (/^#/.test(c) ? c.toUpperCase() : c);

const luminance = (c: string): number => {
  const m = c.match(/^#([0-9a-fA-F]{6})([0-9a-fA-F]{2})?$/);
  if (!m) return 1;
  const r = parseInt(m[1].slice(0, 2), 16);
  const g = parseInt(m[1].slice(2, 4), 16);
  const b = parseInt(m[1].slice(4, 6), 16);
  return (r * 0.299 + g * 0.587 + b * 0.114) / 255;
};

const isDarkColor = (c: string): boolean => luminance(c) < 0.5;

/* ── Swatch tile ─────────────────────────────────────────────────── */

const SwatchTile: React.FC<{ swatch: SwatchData; isDark: boolean }> = ({ swatch, isDark }) => {
  const [copiedTarget, setCopiedTarget] = useState<'card' | 'top' | 'code' | null>(null);

  const hex = displayHex(swatch.color);
  const code = `UX4GColors.${swatch.token.replace(/-/g, '')}`;
  const darkSwatch = isDarkColor(swatch.color);
  const fg = darkSwatch ? '#FFFFFF' : '#000000';

  const copy = useCallback(
    async (text: string, target: 'card' | 'top' | 'code') => {
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        /* clipboard unavailable */
      }
      setCopiedTarget(target);
      setTimeout(() => setCopiedTarget(null), 1500);
    },
    []
  );

  const isCardCopied = copiedTarget === 'card';
  const isTopCopied = copiedTarget === 'top';
  const isCodeCopied = copiedTarget === 'code';

  return (
    <div className={`swatch-tile ${swatch.main ? 'main' : ''}`}>
      <div
        className="swatch-color"
        style={{ background: swatch.color }}
        onClick={() => copy(hex, 'card')}
        title={`Tap to copy ${hex}`}
      >
        {isCardCopied && (
          <span className="material-symbols-outlined swatch-copied-check" style={{ color: fg }}>
            check
          </span>
        )}
        <button
          className="swatch-copy-btn"
          style={{
            color: darkSwatch ? '#FFFFFF' : '#111827',
            background: darkSwatch ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.08)',
          }}
          onClick={(e) => {
            e.stopPropagation();
            copy(hex, 'top');
          }}
          title={isTopCopied ? 'Copied!' : `Copy Hex Code (${hex})`}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 13 }}>
            {isTopCopied ? 'check' : 'content_copy'}
          </span>
        </button>
      </div>
      <div className="swatch-info">
        <div className="swatch-meta">
          <span className="swatch-label" title={swatch.label}>
            {swatch.label}
          </span>
          <span className="swatch-hex">{hex}</span>
        </div>
        <div className="swatch-code">
          <span className="swatch-code-text" title={code}>
            {code}
          </span>
          <button
            className="swatch-mini-copy"
            onClick={() => copy(code, 'code')}
            title={isCodeCopied ? 'Copied!' : `Copy Code (${code})`}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 13 }}>
              {isCodeCopied ? 'check' : 'content_copy'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

const PaletteView: React.FC<{ group: PaletteGroup; isDark: boolean; pad?: boolean }> = ({
  group,
  isDark,
  pad = true,
}) => (
  <div className="palette-view">
    <div className="palette-label">{group.label}</div>
    <div className="palette-grid">
      {group.swatches.map((s) => (
        <SwatchTile key={s.token} swatch={s} isDark={isDark} />
      ))}
    </div>
  </div>
);

/* ── Semantic tokens ─────────────────────────────────────────────── */

const SemanticTile: React.FC<{ token: string; color: string }> = ({ token, color }) => {
  const [copiedTarget, setCopiedTarget] = useState<'card' | 'code' | null>(null);

  const hex = displayHex(color);
  const accessor = `useUx4gTheme().colors.${token}`;
  const darkSwatch = isDarkColor(color);
  const fg = darkSwatch ? '#FFFFFF' : '#111827';

  const copy = useCallback(
    async (text: string, target: 'card' | 'code') => {
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        /* clipboard unavailable */
      }
      setCopiedTarget(target);
      setTimeout(() => setCopiedTarget(null), 1500);
    },
    []
  );

  const isCardCopied = copiedTarget === 'card';
  const isCodeCopied = copiedTarget === 'code';

  return (
    <div
      className="semantic-tile"
      style={{ background: color }}
      onClick={() => copy(hex, 'card')}
      title={`Tap to copy ${hex}`}
    >
      <button
        className="swatch-copy-btn"
        style={{
          color: darkSwatch ? '#FFFFFF' : '#111827',
          background: darkSwatch ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.08)',
        }}
        onClick={(e) => {
          e.stopPropagation();
          copy(accessor, 'code');
        }}
        title={isCodeCopied ? 'Copied!' : `Copy Code (${accessor})`}
      >
        <span className="material-symbols-outlined" style={{ fontSize: 13 }}>
          {isCodeCopied ? 'check' : 'content_copy'}
        </span>
      </button>
      <div className="semantic-tile-body" style={{ color: fg }}>
        <div className="semantic-tile-token">
          <span className="semantic-tile-token-text">colors.{token}</span>
          {isCardCopied && (
            <span className="material-symbols-outlined semantic-tile-check" style={{ fontSize: 14 }}>
              check
            </span>
          )}
        </div>
        <div className="semantic-tile-hex">{hex}</div>
      </div>
    </div>
  );
};

const SemanticSection: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const colors = isDark ? darkUx4gColors : lightUx4gColors;
  const colorMap = colors as unknown as Record<string, string>;

  return (
    <div className="semantic-section">
      <h2 className="semantic-title">Semantic Color Tokens</h2>
      <p className="semantic-description">
        Theme-aware colors from useUx4gTheme().colors — automatically adapt between Light and
        Dark themes. Use the theme toggle in the sidebar to see the change.
      </p>
      <div className="semantic-note">
        <pre>{`const { colors } = useUx4gTheme();
// Use: colors.primary  colors.onPrimary  colors.surface …`}</pre>
      </div>
      <div className="semantic-pairs">
        {SEMANTIC_PAIRS.map((pair) => (
          <div key={pair.base} className="semantic-pair-row">
            <SemanticTile token={pair.base} color={colorMap[pair.base]} />
            <SemanticTile token={pair.on} color={colorMap[pair.on]} />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Page ────────────────────────────────────────────────────────── */

export const ColorsDoc: React.FC<ColorsDocProps> = ({ isDark, section = 'primary' }) => {
  const paletteKey = section === 'semantic' ? undefined : section;
  const palette: PaletteDef | undefined = paletteKey ? PALETTES[paletteKey] : undefined;

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
          / Colors
        </div>
        <h1 className="doc-title">Colors</h1>
        <p className="doc-description">
          Fixed color palette tokens from UX4GColors.* plus theme-aware semantic tokens from
          useUx4gTheme().colors. Click any swatch to copy its hex value.
        </p>
      </div>

      {palette ? (
        <>
          {palette.header && (
            <div className="palette-section-header">
              <div className="palette-section-title">{palette.header.title}</div>
              <div className="palette-section-subtitle">{palette.header.subtitle}</div>
            </div>
          )}
          {palette.groups.map((group) => (
            <PaletteView key={group.label} group={group} isDark={isDark} />
          ))}
        </>
      ) : (
        <SemanticSection isDark={isDark} />
      )}
    </div>
  );
};

export default ColorsDoc;
