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
  'input-basic': 'components/input-field/basic',
  'input-status': 'components/input-field/status',
  'input-password': 'components/input-field/password',
  'input-icons': 'components/input-field/icons',
  'input-aadhaar-basic': 'components/input-aadhaar/basic',
  'input-aadhaar-varients': 'components/input-aadhaar/varients',
  'input-aadhaar': 'components/input-aadhaar/basic',
  'input-pan-basic': 'components/input-pan/basic',
  'input-pan-varients': 'components/input-pan/varients',
  'input-pan': 'components/input-pan/basic',
  'input-otp-basic': 'components/input-otp/basic',
  'input-otp-varients': 'components/input-otp/varients',
  'input-otp': 'components/input-otp/basic',
  'input-prefix-postfix': 'components/input-field/prefix-postfix',
  'input-required-disabled': 'components/input-field/required-disabled',
  checkbox: 'components/checkbox',
  'radio-button': 'components/radio-button/basic',
  radio: 'components/radio-button/basic',
  'radio-basic': 'components/radio-button/basic',
  'radio-sizes': 'components/radio-button/sizes',
  'radio-status': 'components/radio-button/status',
  'result-list': 'components/result-list/basic',
  result: 'components/result-list/basic',
  'result-list-basic': 'components/result-list/basic',
  'result-list-metadata': 'components/result-list/metadata',
  'result-list-expanded': 'components/result-list/expanded',
  'result-list-rejected': 'components/result-list/rejected',
  'search-field': 'components/search-field/basic',
  search: 'components/search-field/basic',
  'search-basic': 'components/search-field/basic',
  'search-submit': 'components/search-field/submit',
  'search-autocomplete': 'components/search-field/autocomplete',
  'search-status': 'components/search-field/status',
  switch: 'components/switch',
  card: 'components/card',
  'card-basic': 'components/card/basic',
  'card-actions': 'components/card/actions',
  'card-horizontal': 'components/card/horizontal',
  'card-media': 'components/card/media',
  'card-rich': 'components/card/rich',
  'card-rich-horizontal': 'components/card/rich-horizontal',
  carousel: 'components/carousel',
  'carousel-intro': 'components/carousel/introduction',
  'carousel-rich-hero': 'components/carousel/rich-hero',
  'carousel-image': 'components/carousel/image',
  'journey-timeline-basic': 'components/journey-timeline/basic',
  'journey-timeline-horizontal': 'components/journey-timeline/horizontal',
  'journey-timeline-custom': 'components/journey-timeline/custom',
  'journey-timeline': 'components/journey-timeline/basic',
  'status-pipeline-vertical': 'components/status-pipeline/vertical/basic',
  'status-pipeline-vertical-states': 'components/status-pipeline/vertical/states',
  'status-pipeline-vertical-sizes': 'components/status-pipeline/vertical/sizes',
  'status-pipeline-vertical-colors': 'components/status-pipeline/vertical/colors',
  'status-pipeline-vertical-labels': 'components/status-pipeline/vertical/labels',
  'status-pipeline-vertical-nolabels': 'components/status-pipeline/vertical/nolabels',
  'status-pipeline-horizontal': 'components/status-pipeline/horizontal/basic',
  'status-pipeline-horizontal-states': 'components/status-pipeline/horizontal/states',
  'status-pipeline-horizontal-sizes': 'components/status-pipeline/horizontal/sizes',
  'status-pipeline-horizontal-colors': 'components/status-pipeline/horizontal/colors',
  'status-pipeline-horizontal-labels': 'components/status-pipeline/horizontal/labels',
  'status-pipeline-horizontal-nolabels': 'components/status-pipeline/horizontal/nolabels',
  'status-pipeline-sizes': 'components/status-pipeline/vertical/sizes',
  'status-pipeline': 'components/status-pipeline/vertical/basic',
  'tag-basic': 'components/tag/basic',
  'tag-shapes': 'components/tag/shapes',
  'tag-styles': 'components/tag/styles',
  'tag-colors': 'components/tag/colors',
  'tag-leading': 'components/tag/leading',
  'tag-dismissable': 'components/tag/dismissable',
  'tag-pill': 'components/tag/pill',
  tag: 'components/tag/basic',
  'textarea-basic': 'components/text-area/basic',
  'textarea-label': 'components/text-area/label',
  'textarea-status': 'components/text-area/status',
  'textarea-count': 'components/text-area/count',
  'textarea-disabled': 'components/text-area/disabled',
  textarea: 'components/text-area/basic',
  'text-area': 'components/text-area/basic',
  'timepicker-basic': 'components/time-picker/basic',
  'timepicker-label': 'components/time-picker/label',
  'timepicker-status': 'components/time-picker/status',
  'timepicker-interval': 'components/time-picker/interval',
  'timepicker-initial': 'components/time-picker/initial',
  'timepicker-disabled': 'components/time-picker/disabled',
  timepicker: 'components/time-picker/basic',
  'time-picker': 'components/time-picker/basic',
  'stepper-horizontal': 'components/stepper/horizontal',
  'stepper-horizontal-dashed': 'components/stepper/horizontal-dashed',
  'stepper-vertical': 'components/stepper/vertical',
  'stepper-error': 'components/stepper/error',
  'stepper-bottom-lines': 'components/stepper/bottom-lines',
  'stepper-bottom-background': 'components/stepper/bottom-background',
  'stepper-edge-alignment': 'components/stepper/edge-alignment',
  'compact-stepper-linear': 'components/compact-stepper/linear',
  'compact-stepper-right-aligned': 'components/compact-stepper/right-aligned',
  'compact-stepper-centered': 'components/compact-stepper/centered',
  'compact-stepper-centered-between': 'components/compact-stepper/centered-between',
  'compact-stepper-split': 'components/compact-stepper/split',
  'link-basic': 'components/link/basic',
  'link-text': 'components/link/text',
  'link-custom-child': 'components/link/custom-child',
  link: 'components/link/basic',
  'modal-full-preview': 'components/modal/full-preview',
  'modal-header-left': 'components/modal/header-left',
  'modal-header-centered': 'components/modal/header-centered',
  'pagination-default-arrows': 'components/pagination/default-arrows',
  'pagination-capsule-arrows': 'components/pagination/capsule-arrows',
  'pagination-capsule-dots': 'components/pagination/capsule-dots',
  'pagination-arrows-right': 'components/pagination/arrows-right',
  'pagination-dotted': 'components/pagination/default-arrows',
  pagination: 'components/pagination/default-arrows',
  'progress-linear': 'components/progress-indicator/linear',
  'progress-circular': 'components/progress-indicator/circular',
  'progress-half-circle': 'components/progress-indicator/half-circle',
  'progress-animated': 'components/progress-indicator/animated',
  'progress-sla-circular': 'components/progress-sla-indicator/circular',
  'progress-sla-linear': 'components/progress-sla-indicator/linear',
  'progress-sla': 'components/progress-sla-indicator/circular',
  'progress-indicator': 'components/progress-indicator/linear',
  progress: 'components/progress-indicator/linear',
  'progress-sla-indicator': 'components/progress-sla-indicator/circular',
  'popover-basic': 'components/popover/basic',
  'popover-rich': 'components/popover/rich',
  'popover-placements': 'components/popover/placements',
  'popover-custom-content': 'components/popover/custom-content',
  'popover-trigger': 'components/popover/trigger',
  popover: 'components/popover/basic',
  tooltip: 'components/popover/basic',
  modal: 'components/modal/full-preview',
  badge: 'components/badge',
  'badge-basic': 'components/badge/basic',
  'badge-count': 'components/badge/count',
  'badge-label': 'components/badge/standalone',
  'badge-standalone': 'components/badge/standalone',
  'badge-semantic': 'components/badge/semantic',
  'badge-overlay': 'components/badge/overlay',
  'empty-state-basic': 'components/empty-state/basic',
  'empty-state-variants': 'components/empty-state/variants',
  'empty-state-action': 'components/empty-state/action',
  'fileupload-basic': 'components/fileupload/basic',
  'fileupload-dashed': 'components/fileupload/dashed',
  'fileupload-preloaded': 'components/fileupload/preloaded',
  feedbackformstar: 'components/feedback/feedbackformstar',
  feedbackformcsat: 'components/feedback/feedbackformcsat',
  feedbackformnps: 'components/feedback/feedbackformnps',
  avatar: 'components/avatar',
  'avatar-basic': 'components/avatar/basic',
  'avatar-status': 'components/avatar/status',
  'avatar-profile': 'components/avatar/profile',
  'avatar-group': 'components/avatar/group',
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

  if (cleanPath.startsWith('components/card') || cleanPath.startsWith('card')) {
    if (cleanPath.includes('actions')) return 'card-actions';
    if (cleanPath.includes('horizontal') && cleanPath.includes('rich')) return 'card-rich-horizontal';
    if (cleanPath.includes('horizontal')) return 'card-horizontal';
    if (cleanPath.includes('media')) return 'card-media';
    if (cleanPath.includes('rich') || cleanPath.includes('full')) return 'card-rich';
    return 'card-basic';
  }

  if (cleanPath.startsWith('components/badge') || cleanPath.startsWith('badge')) {
    if (cleanPath.includes('count')) return 'badge-count';
    if (cleanPath.includes('label') || cleanPath.includes('standalone')) return 'badge-standalone';
    if (cleanPath.includes('semantic')) return 'badge-semantic';
    if (cleanPath.includes('overlay')) return 'badge-overlay';
    return 'badge-basic';
  }

  if (cleanPath.startsWith('components/avatar') || cleanPath.startsWith('avatar')) {
    if (cleanPath.includes('status')) return 'avatar-status';
    if (cleanPath.includes('profile')) return 'avatar-profile';
    if (cleanPath.includes('group')) return 'avatar-group';
    return 'avatar-basic';
  }

  if (cleanPath.startsWith('components/empty-state') || cleanPath.startsWith('empty-state')) {
    if (cleanPath.includes('variants')) return 'empty-state-variants';
    if (cleanPath.includes('action')) return 'empty-state-action';
    return 'empty-state-basic';
  }

  if (cleanPath.startsWith('components/fileupload') || cleanPath.startsWith('fileupload')) {
    if (cleanPath.includes('dashed')) return 'fileupload-dashed';
    if (cleanPath.includes('preloaded')) return 'fileupload-preloaded';
    return 'fileupload-basic';
  }

  if (cleanPath.startsWith('components/input-aadhaar') || cleanPath.startsWith('input-aadhaar')) {
    if (cleanPath.includes('varients')) return 'input-aadhaar-varients';
    return 'input-aadhaar-basic';
  }

  if (cleanPath.startsWith('components/input-pan') || cleanPath.startsWith('input-pan')) {
    if (cleanPath.includes('varients')) return 'input-pan-varients';
    return 'input-pan-basic';
  }

  if (cleanPath.startsWith('components/input-otp') || cleanPath.startsWith('input-otp')) {
    if (cleanPath.includes('varients')) return 'input-otp-varients';
    return 'input-otp-basic';
  }

  if (cleanPath.startsWith('components/input-field') || cleanPath.startsWith('input-field') || cleanPath.startsWith('input')) {
    if (cleanPath.includes('status')) return 'input-status';
    if (cleanPath.includes('password')) return 'input-password';
    if (cleanPath.includes('icons')) return 'input-icons';
    if (cleanPath.includes('prefix') || cleanPath.includes('postfix')) return 'input-prefix-postfix';
    if (cleanPath.includes('required') || cleanPath.includes('disabled')) return 'input-required-disabled';
    return 'input-basic';
  }

  if (cleanPath.startsWith('components/feedback') || cleanPath.startsWith('feedback')) {
    if (cleanPath.includes('feedbackformcsat') || cleanPath.includes('csat')) return 'feedbackformcsat';
    if (cleanPath.includes('feedbackformnps') || cleanPath.includes('nps')) return 'feedbackformnps';
    return 'feedbackformstar';
  }

  if (cleanPath.startsWith('components/button')) {
    if (cleanPath.includes('introduction')) return 'button-introduction';
    if (cleanPath.includes('variants')) return 'button-variants';
    if (cleanPath.includes('sizes')) return 'button-sizes';
    if (cleanPath.includes('icon-button')) return 'button-icon-button';
    if (cleanPath.includes('icons')) return 'button-icons';
    if (cleanPath.includes('states')) return 'button-states';
    if (cleanPath.includes('convenience')) return 'button-convenience';
    if (cleanPath.includes('showcase')) return 'button-showcase';
    return 'button-introduction';
  }

  if (cleanPath.startsWith('components/date-picker')) {
    if (cleanPath.includes('range')) return 'date-picker-range';
    return 'date-picker-single';
  }

  if (cleanPath.startsWith('components/carousel') || cleanPath.startsWith('carousel')) {
    if (cleanPath.includes('rich-hero') || cleanPath.includes('richhero')) return 'carousel-rich-hero';
    if (cleanPath.includes('image')) return 'carousel-image';
    return 'carousel-intro';
  }

  if (cleanPath.startsWith('components/journey-timeline') || cleanPath.startsWith('journey-timeline')) {
    if (cleanPath.includes('horizontal')) return 'journey-timeline-horizontal';
    if (cleanPath.includes('custom')) return 'journey-timeline-custom';
    return 'journey-timeline-basic';
  }

  if (cleanPath.startsWith('components/status-pipeline') || cleanPath.startsWith('status-pipeline')) {
    const horizontal = cleanPath.includes('/horizontal') || cleanPath.includes('horizontal');
    const base = horizontal ? 'status-pipeline-horizontal' : 'status-pipeline-vertical';

    if (cleanPath.includes('states')) return `${base}-states`;
    if (cleanPath.includes('sizes')) return `${base}-sizes`;
    if (cleanPath.includes('color')) return `${base}-colors`;
    if (cleanPath.includes('label') || cleanPath.includes('nolabels')) return `${base}-${cleanPath.includes('nolabels') ? 'nolabels' : 'labels'}`;
    return base;
  }

  if (cleanPath.startsWith('components/tag') || cleanPath.startsWith('tag')) {
    if (cleanPath.includes('shapes')) return 'tag-shapes';
    if (cleanPath.includes('styles')) return 'tag-styles';
    if (cleanPath.includes('colors') || cleanPath.includes('colours')) return 'tag-colors';
    if (cleanPath.includes('leading')) return 'tag-leading';
    if (cleanPath.includes('dismiss')) return 'tag-dismissable';
    if (cleanPath.includes('pill')) return 'tag-pill';
    return 'tag-basic';
  }

  if (cleanPath.startsWith('components/text-area') || cleanPath.startsWith('text-area') || cleanPath.startsWith('textarea')) {
    if (cleanPath.includes('label')) return 'textarea-label';
    if (cleanPath.includes('status')) return 'textarea-status';
    if (cleanPath.includes('count')) return 'textarea-count';
    if (cleanPath.includes('disabled') || cleanPath.includes('readonly') || cleanPath.includes('read-only')) return 'textarea-disabled';
    return 'textarea-basic';
  }

  if (cleanPath.startsWith('components/time-picker') || cleanPath.startsWith('time-picker') || cleanPath.startsWith('timepicker')) {
    if (cleanPath.includes('label')) return 'timepicker-label';
    if (cleanPath.includes('status')) return 'timepicker-status';
    if (cleanPath.includes('interval')) return 'timepicker-interval';
    if (cleanPath.includes('initial')) return 'timepicker-initial';
    if (cleanPath.includes('disabled')) return 'timepicker-disabled';
    return 'timepicker-basic';
  }

  if (cleanPath.startsWith('components/stepper') || cleanPath.startsWith('stepper')) {
    if (cleanPath.includes('dashed')) return 'stepper-horizontal-dashed';
    if (cleanPath.includes('vertical')) return 'stepper-vertical';
    if (cleanPath.includes('error')) return 'stepper-error';
    if (cleanPath.includes('bottom')) {
      if (cleanPath.includes('background')) return 'stepper-bottom-background';
      return 'stepper-bottom-lines';
    }
    if (cleanPath.includes('edge')) return 'stepper-edge-alignment';
    return 'stepper-horizontal';
  }

  if (cleanPath.startsWith('components/compact-stepper') || cleanPath.startsWith('compact-stepper')) {
    if (cleanPath.includes('right-aligned') || cleanPath.includes('rightaligned')) return 'compact-stepper-right-aligned';
    if (cleanPath.includes('centered-between')) return 'compact-stepper-centered-between';
    if (cleanPath.includes('centered')) return 'compact-stepper-centered';
    if (cleanPath.includes('split')) return 'compact-stepper-split';
    return 'compact-stepper-linear';
  }

  if (cleanPath.startsWith('components/link') || cleanPath.startsWith('link')) {
    if (cleanPath.includes('text')) return 'link-text';
    if (cleanPath.includes('custom')) return 'link-custom-child';
    return 'link-basic';
  }

  if (cleanPath.startsWith('components/modal') || cleanPath.startsWith('modal')) {
    if (cleanPath.includes('header-centered')) return 'modal-header-centered';
    if (cleanPath.includes('header-left')) return 'modal-header-left';
    return 'modal-full-preview';
  }

  if (cleanPath.startsWith('components/pagination') || cleanPath.startsWith('pagination')) {
    if (cleanPath.includes('capsule-arrows')) return 'pagination-capsule-arrows';
    if (cleanPath.includes('capsule-dots')) return 'pagination-capsule-dots';
    if (cleanPath.includes('arrows-right')) return 'pagination-arrows-right';
    return 'pagination-default-arrows';
  }

  if (cleanPath.startsWith('components/radio-button') || cleanPath.startsWith('radio-button') || cleanPath.startsWith('radio')) {
    if (cleanPath.includes('sizes')) return 'radio-sizes';
    if (cleanPath.includes('status')) return 'radio-status';
    return 'radio-basic';
  }

  if (cleanPath.startsWith('components/result-list') || cleanPath.startsWith('result-list') || cleanPath.startsWith('result')) {
    if (cleanPath.includes('metadata')) return 'result-list-metadata';
    if (cleanPath.includes('expanded')) return 'result-list-expanded';
    if (cleanPath.includes('rejected')) return 'result-list-rejected';
    return 'result-list-basic';
  }

  if (cleanPath.startsWith('components/search-field') || cleanPath.startsWith('search-field') || cleanPath.startsWith('search')) {
    if (cleanPath.includes('submit')) return 'search-submit';
    if (cleanPath.includes('autocomplete')) return 'search-autocomplete';
    if (cleanPath.includes('status')) return 'search-status';
    return 'search-basic';
  }

  if (cleanPath.startsWith('components/progress-sla-indicator') || cleanPath.startsWith('progress-sla-indicator') || cleanPath.startsWith('progress-sla')) {
    if (cleanPath.includes('linear')) return 'progress-sla-linear';
    return 'progress-sla-circular';
  }

  if (cleanPath.startsWith('components/progress-indicator') || cleanPath.startsWith('progress-indicator') || cleanPath.startsWith('progress')) {
    if (cleanPath.includes('circular')) return 'progress-circular';
    if (cleanPath.includes('half-circle')) return 'progress-half-circle';
    if (cleanPath.includes('animated')) return 'progress-animated';
    return 'progress-linear';
  }

  if (cleanPath.startsWith('components/popover') || cleanPath.startsWith('popover') || cleanPath.startsWith('tooltip')) {
    if (cleanPath.includes('rich')) return 'popover-rich';
    if (cleanPath.includes('placement')) return 'popover-placements';
    if (cleanPath.includes('custom')) return 'popover-custom-content';
    if (cleanPath.includes('trigger')) return 'popover-trigger';
    return 'popover-basic';
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
