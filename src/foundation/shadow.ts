/**
 * UX4G Design System Shadow Tokens
 * Direct port of the UX4G Flutter design system shadows (`shadow.dart`).
 */

export interface Ux4gShadowLevel {
  level: number;
  name: string;
  tokenName: string;
  title: string;
  details: string;
  cssBoxShadow: string;
  cssBoxShadowDark: string;
}

export const Ux4gShadowLevels: Ux4gShadowLevel[] = [
  {
    level: 0,
    name: 'flat',
    tokenName: 'shadow0',
    title: 'Flat Surfaces',
    details: 'No shadow',
    cssBoxShadow: 'none',
    cssBoxShadowDark: 'none',
  },
  {
    level: 1,
    name: 'subtle',
    tokenName: 'shadow1',
    title: 'Subtle Lift',
    details: 'Key 0,1 · blur 2\nAmbient 0,1 · blur 2',
    cssBoxShadow: '0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.04)',
    cssBoxShadowDark: '0 1px 2px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.15)',
  },
  {
    level: 2,
    name: 'floating',
    tokenName: 'shadow2',
    title: 'Floating Content',
    details: 'Key 0,1 · blur 2\nAmbient 0,4 · blur 8',
    cssBoxShadow: '0 1px 2px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.08)',
    cssBoxShadowDark: '0 1px 2px rgba(0, 0, 0, 0.24), 0 4px 8px rgba(0, 0, 0, 0.3)',
  },
  {
    level: 3,
    name: 'prominent',
    tokenName: 'shadow3',
    title: 'Prominent overlay',
    details: 'Key 0,4 · blur 8\nAmbient 0,0 · blur 16',
    cssBoxShadow: '0 4px 8px rgba(0, 0, 0, 0.08), 0 0 16px rgba(0, 0, 0, 0.1)',
    cssBoxShadowDark: '0 4px 8px rgba(0, 0, 0, 0.3), 0 0 16px rgba(0, 0, 0, 0.4)',
  },
  {
    level: 4,
    name: 'highest',
    tokenName: 'shadow4',
    title: 'Highest emphasis',
    details: 'Key 0,8 · blur 16\nAmbient 0,16 · blur 32',
    cssBoxShadow: '0 8px 16px rgba(0, 0, 0, 0.12), 0 16px 32px rgba(0, 0, 0, 0.15)',
    cssBoxShadowDark: '0 8px 16px rgba(0, 0, 0, 0.4), 0 16px 32px rgba(0, 0, 0, 0.5)',
  },
];

export const Ux4gShadow = {
  shadow0: Ux4gShadowLevels[0],
  shadow1: Ux4gShadowLevels[1],
  shadow2: Ux4gShadowLevels[2],
  shadow3: Ux4gShadowLevels[3],
  shadow4: Ux4gShadowLevels[4],
  flat: Ux4gShadowLevels[0],
  subtle: Ux4gShadowLevels[1],
  floating: Ux4gShadowLevels[2],
  prominent: Ux4gShadowLevels[3],
  highest: Ux4gShadowLevels[4],
} as const;
