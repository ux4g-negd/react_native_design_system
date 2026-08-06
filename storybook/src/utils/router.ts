// Helper mapping between activePage ID and clean URL path string
const PAGE_TO_PATH: Record<string, string> = {
  introduction: 'introduction',
  quickstart: 'quickstart',
  'colors-primary': 'token/colors/primary',
  'colors-secondary': 'token/colors/secondary',
  'colors-tertiary': 'token/colors/tertiary',
  'colors-red': 'token/colors/red',
  'colors-orange': 'token/colors/orange',
  'colors-yellow': 'token/colors/yellow',
  'colors-gold': 'token/colors/gold',
  'colors-green': 'token/colors/green',
  'colors-lime': 'token/colors/lime',
  'colors-blue': 'token/colors/blue',
  'colors-skyblue': 'token/colors/skyblue',
  'colors-cyan': 'token/colors/cyan',
  'colors-purple': 'token/colors/purple',
  'colors-pink': 'token/colors/pink',
  'colors-neutral': 'token/colors/neutral',
  'colors-semantic': 'token/colors/semantic',
  typography: 'token/typography/header',
  'typography-header': 'token/typography/header',
  'typography-display': 'token/typography/display',
  'typography-body': 'token/typography/body',
  'typography-label': 'token/typography/label',
  'typography-title': 'token/typography/title',
  'typography-usage': 'token/typography/usage',
  shadow: 'token/shadow/scale',
  'shadow-scale': 'token/shadow/scale',
  'shadow-usage': 'token/shadow/usage',
  dimensions: 'token/dimensions/spacing',
  'dimensions-spacing': 'token/dimensions/spacing',
  'dimensions-radius': 'token/dimensions/radius',
  'dimensions-border': 'token/dimensions/border',
  'dimensions-usage': 'token/dimensions/usage',
  spacing: 'token/dimensions/spacing',
  radius: 'token/dimensions/radius',
  button: 'components/button',
  'input-field': 'components/input-field',
  checkbox: 'components/checkbox',
  'radio-button': 'components/radio-button',
  switch: 'components/switch',
  card: 'components/card',
  badge: 'components/badge',
  avatar: 'components/avatar',
  modal: 'components/modal',
  toast: 'components/toast',
  forms: 'patterns/forms',
  headers: 'patterns/headers',
};

// Reverse map from clean URL path to activePage ID
const PATH_TO_PAGE: Record<string, string> = Object.fromEntries(
  Object.entries(PAGE_TO_PATH).map(([page, path]) => [path.toLowerCase(), page])
);

export function getPathFromPage(page: string): string {
  return PAGE_TO_PATH[page] ?? page;
}

export function getPageFromPath(path: string): string {
  const cleanPath = decodeURIComponent(path).replace(/^\/+|\/+$/g, '').toLowerCase();

  if (cleanPath.startsWith('components/button')) {
    if (cleanPath.includes('introduction')) return 'button-introduction';
    if (cleanPath.includes('variants')) return 'button-variants';
    if (cleanPath.includes('sizes')) return 'button-sizes';
    if (cleanPath.includes('icon-button')) return 'button-icon-button';
    if (cleanPath.includes('icons')) return 'button-icons';
    if (cleanPath.includes('states')) return 'button-states';
    if (cleanPath.includes('convenience')) return 'button-convenience';
    return 'button-primary';
  }

  if (cleanPath.startsWith('components/date-picker')) {
    if (cleanPath.includes('range')) return 'date-picker-range';
    return 'date-picker-default';
  }

  return PATH_TO_PAGE[cleanPath] ?? 'introduction';
}

export function getPageFromUrl(): string {
  const hash = window.location.hash;
  if (!hash) return 'introduction';

  // Support /#/?path=token/colors/primary and /#/token/colors/primary
  const matchPathQuery = hash.match(/#\/\?path=([^&]+)/);
  if (matchPathQuery && matchPathQuery[1]) {
    return getPageFromPath(matchPathQuery[1]);
  }

  const matchSimpleHash = hash.match(/#\/(.+)/);
  if (matchSimpleHash && matchSimpleHash[1]) {
    return getPageFromPath(matchSimpleHash[1]);
  }

  return 'introduction';
}

export function updateUrlForPage(page: string) {
  const path = getPathFromPage(page);
  const targetHash = `#/?path=${path}`;
  if (window.location.hash !== targetHash) {
    window.history.pushState(null, '', targetHash);
  }
}
