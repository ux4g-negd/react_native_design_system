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
  'switch-basic': 'components/switch/basic',
  'switch-labels': 'components/switch/labels',
  'switch-status': 'components/switch/status',
  'switch-required': 'components/switch/required',
  'switch-disabled': 'components/switch/disabled',
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
  'timeslot-introduction': 'components/time-slot/introduction',
  'timeslot-basic': 'components/time-slot/basic',
  'timeslot-compact': 'components/time-slot/compact',
  'timeslot-json': 'components/time-slot/json',
  timeslot: 'components/time-slot/introduction',
  'time-slot': 'components/time-slot/introduction',
  'toast-basic': 'components/toast/basic',
  'toast-stacked': 'components/toast/stacked',
  'toast-actions': 'components/toast/actions',
  'toast-custom': 'components/toast/custom',
  'toast-provider': 'components/toast/provider',
  toast: 'components/toast/basic',
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
  'tooltip-introduction': 'components/tooltip/introduction',
  'tooltip-basic': 'components/tooltip/basic',
  'tooltip-interactive': 'components/tooltip/interactive',
  'tooltip-variants': 'components/tooltip/variants',
  'tooltip-rich': 'components/tooltip/rich',
  tooltip: 'components/tooltip/introduction',
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
  'accordion-basic': 'components/accordion/basic',
  'accordion-group': 'components/accordion/group',
  'app-header-basic': 'components/app-header/introduction',
  'app-header-back': 'components/app-header/back',
  'app-header-filled': 'components/app-header/filled',
  'app-header-custom-leading': 'components/app-header/custom-leading',
  'button-introduction': 'components/button/introduction',
  'button-variants': 'components/button/variants',
  'button-sizes': 'components/button/sizes',
  'button-showcase': 'components/button/showcase',
  'button-icon-button': 'components/button/icon-button',
  'checkbox-basic': 'components/checkbox/basic',
  'checkbox-sizes': 'components/checkbox/sizes',
  'checkbox-tristate': 'components/checkbox/tristate',
  'chips-basic': 'components/chips/basic',
  'chips-action': 'components/chips/action',
  'chips-input': 'components/chips/input',
  'chip-group-wrap': 'components/chip-group/wrap',
  'chip-group-input-field': 'components/chip-group/input-field',
  'date-picker-single': 'components/date-picker/single',
  'date-picker-range': 'components/date-picker/range',
  'divider-basic': 'components/divider/basic',
  'divider-styles': 'components/divider/styles',
  'divider-label': 'components/divider/label',
  'divider-vertical': 'components/divider/vertical',
  'status-banner-basic': 'components/status-banner/basic',
  'status-banner-draft': 'components/status-banner/draft',
  'status-banner-variants': 'components/status-banner/variants',
  'dropdown-basic': 'components/dropdown/basic',
  'dropdown-multi': 'components/dropdown/multi',
  'dropdown-search': 'components/dropdown/search',
  'dropdown-status': 'components/dropdown/status',
  'spinner-basic': 'components/spinner/basic',
  'slider-basic': 'components/slider/basic',
  'slider-sizes': 'components/slider/sizes',
  'slider-steps': 'components/slider/steps',
  'slider-custom-range': 'components/slider/custom-range',
  'slider-formatter': 'components/slider/formatter',
  'slider-disabled': 'components/slider/disabled',
  'patterns-forms': 'patterns/forms',
  'patterns-headers': 'patterns/headers',
  'patterns-auth': 'patterns/authentication',
  'patterns-cards': 'patterns/cards',
  'patterns-feedback': 'patterns/feedback',
  'pattern-signin-account': 'patterns/identity-and-access/signin/sign-in-to-your-account',
  'pattern-signin-otp': 'patterns/identity-and-access/signin/enter-otp',
  'pattern-signin-aadhaar': 'patterns/identity-and-access/signin/sign-in-with-aadhaar',
  'pattern-signin-success': 'patterns/identity-and-access/signin/signed-in-success',
  'pattern-signin-mobile': 'patterns/identity-and-access/signin/sign-in-account-with-mobile-no',
  'pattern-otp-verify-mobile': 'patterns/identity-and-access/otp-verification/verify-your-mobile-number',
  'verify-your-mobile-number': 'patterns/identity-and-access/otp-verification/verify-your-mobile-number',
  'verify-mobile': 'patterns/identity-and-access/otp-verification/verify-your-mobile-number',
  'pattern-otp-verify-voice': 'patterns/identity-and-access/otp-verification/verify-mobile-with-voice-fallback',
  'verify-mobile-with-voice-fallback': 'patterns/identity-and-access/otp-verification/verify-mobile-with-voice-fallback',
  'verify-voice': 'patterns/identity-and-access/otp-verification/verify-mobile-with-voice-fallback',
  'pattern-otp-verify-attempt-warning': 'patterns/identity-and-access/otp-verification/verify-mobile-with-attempt-warning',
  'verify-mobile-with-attempt-warning': 'patterns/identity-and-access/otp-verification/verify-mobile-with-attempt-warning',
  'verify-attempt-warning': 'patterns/identity-and-access/otp-verification/verify-mobile-with-attempt-warning',
  'verify-attempt': 'patterns/identity-and-access/otp-verification/verify-mobile-with-attempt-warning',
  'pattern-otp-verify-last-attempt': 'patterns/identity-and-access/otp-verification/verify-mobile-with-last-attempt-warning',
  'verify-mobile-with-last-attempt-warning': 'patterns/identity-and-access/otp-verification/verify-mobile-with-last-attempt-warning',
  'verify-mobile-with-lats-attempt-warning': 'patterns/identity-and-access/otp-verification/verify-mobile-with-last-attempt-warning',
  'verify-last-attempt-warning': 'patterns/identity-and-access/otp-verification/verify-mobile-with-last-attempt-warning',
  'verify-last-attempt': 'patterns/identity-and-access/otp-verification/verify-mobile-with-last-attempt-warning',
  'pattern-otp-verify-account-locked': 'patterns/identity-and-access/otp-verification/verify-mobile-account-locked',
  'verify-mobile-account-locked': 'patterns/identity-and-access/otp-verification/verify-mobile-account-locked',
  'verify-account-locked': 'patterns/identity-and-access/otp-verification/verify-mobile-account-locked',
  'account-locked': 'patterns/identity-and-access/otp-verification/verify-mobile-account-locked',
  'pattern-otp-verify-success': 'patterns/identity-and-access/otp-verification/otp-verified-success',
  'otp-verified-success': 'patterns/identity-and-access/otp-verification/otp-verified-success',
  'otp-success': 'patterns/identity-and-access/otp-verification/otp-verified-success',
  'pattern-session-expiring': 'patterns/identity-and-access/session-timeout-dialog/your-session-is-expiring',
  'your-session-is-expiring': 'patterns/identity-and-access/session-timeout-dialog/your-session-is-expiring',
  'session-expiring': 'patterns/identity-and-access/session-timeout-dialog/your-session-is-expiring',
  'pattern-session-expiring-soon': 'patterns/identity-and-access/session-timeout-dialog/your-session-is-expiring-soon',
  'your-session-is-expiring-soon': 'patterns/identity-and-access/session-timeout-dialog/your-session-is-expiring-soon',
  'session-expiring-soon': 'patterns/identity-and-access/session-timeout-dialog/your-session-is-expiring-soon',
  'pattern-session-ended': 'patterns/identity-and-access/session-timeout-dialog/session-ended',
  'session-ended': 'patterns/identity-and-access/session-timeout-dialog/session-ended',
  'pattern-auth-incorrect-otp': 'patterns/identity-and-access/auth-errors-and-lockout/otp-error-incorrect-entry',
  'otp-error-incorrect-entry': 'patterns/identity-and-access/auth-errors-and-lockout/otp-error-incorrect-entry',
  'incorrect-entry': 'patterns/identity-and-access/auth-errors-and-lockout/otp-error-incorrect-entry',
  'pattern-auth-attempt-warning': 'patterns/identity-and-access/auth-errors-and-lockout/otp-error-attempt-warning',
  'otp-error-attempt-warning': 'patterns/identity-and-access/auth-errors-and-lockout/otp-error-attempt-warning',
  'attempt-warning': 'patterns/identity-and-access/auth-errors-and-lockout/otp-error-attempt-warning',
  'pattern-auth-last-attempt': 'patterns/identity-and-access/auth-errors-and-lockout/otp-error-last-attempt-warning',
  'otp-error-last-attempt-warning': 'patterns/identity-and-access/auth-errors-and-lockout/otp-error-last-attempt-warning',
  'last-attempt-warning': 'patterns/identity-and-access/auth-errors-and-lockout/otp-error-last-attempt-warning',
  'pattern-auth-account-locked': 'patterns/identity-and-access/auth-errors-and-lockout/otp-error-account-locked',
  'otp-error-account-locked': 'patterns/identity-and-access/auth-errors-and-lockout/otp-error-account-locked',
  'pattern-auth-retry-unlocked': 'patterns/identity-and-access/auth-errors-and-lockout/otp-retry-unlocked',
  'otp-retry-unlocked': 'patterns/identity-and-access/auth-errors-and-lockout/otp-retry-unlocked',
  'retry-unlocked': 'patterns/identity-and-access/auth-errors-and-lockout/otp-retry-unlocked',
  'pattern-auth-suspicious-activity': 'patterns/identity-and-access/auth-errors-and-lockout/otp-step-up-suspicious-activity',
  'otp-step-up-suspicious-activity': 'patterns/identity-and-access/auth-errors-and-lockout/otp-step-up-suspicious-activity',
  'suspicious-activity': 'patterns/identity-and-access/auth-errors-and-lockout/otp-step-up-suspicious-activity',
  'pattern-aadhaar-verify-method': 'patterns/identity-and-access/aadhaar-authentication-gate/verify-with-aadhaar-choose-method',
  'aadhaar-verify-method': 'patterns/identity-and-access/aadhaar-authentication-gate/verify-with-aadhaar-choose-method',
  'verify-with-aadhaar-choose-method': 'patterns/identity-and-access/aadhaar-authentication-gate/verify-with-aadhaar-choose-method',
  'pattern-aadhaar-otp-enter': 'patterns/identity-and-access/aadhaar-authentication-gate/aadhaar-otp-enter-code',
  'aadhaar-otp-enter-code': 'patterns/identity-and-access/aadhaar-authentication-gate/aadhaar-otp-enter-code',
  'aadhaar-otp-enter': 'patterns/identity-and-access/aadhaar-authentication-gate/aadhaar-otp-enter-code',
  'pattern-aadhaar-face-auth-permission': 'patterns/identity-and-access/aadhaar-authentication-gate/aadhaar-face-auth-camera-permission',
  'aadhaar-face-auth-camera-permission': 'patterns/identity-and-access/aadhaar-authentication-gate/aadhaar-face-auth-camera-permission',
  'aadhaar-face-auth-permission': 'patterns/identity-and-access/aadhaar-authentication-gate/aadhaar-face-auth-camera-permission',
  'signin-account': 'patterns/identity-and-access/signin/sign-in-to-your-account',
  'signin-otp': 'patterns/identity-and-access/signin/enter-otp',
  'enter-otp': 'patterns/identity-and-access/signin/enter-otp',
  'signin-aadhaar': 'patterns/identity-and-access/signin/sign-in-with-aadhaar',
  'signin-with-aadhaar': 'patterns/identity-and-access/signin/sign-in-with-aadhaar',
  'signin-success': 'patterns/identity-and-access/signin/signed-in-success',
  'signed-in-success': 'patterns/identity-and-access/signin/signed-in-success',
  'signin-mobile': 'patterns/identity-and-access/signin/sign-in-account-with-mobile-no',
  forms: 'patterns/forms',
  headers: 'patterns/headers',
  auth: 'patterns/authentication',
  cards: 'patterns/cards',
  feedback: 'patterns/feedback',
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

  if (cleanPath.startsWith('components/switch') || cleanPath.startsWith('switch')) {
    if (cleanPath.includes('label')) return 'switch-labels';
    if (cleanPath.includes('status')) return 'switch-status';
    if (cleanPath.includes('required')) return 'switch-required';
    if (cleanPath.includes('disabled')) return 'switch-disabled';
    return 'switch-basic';
  }

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

  if (cleanPath.startsWith('components/time-slot') || cleanPath.startsWith('time-slot') || cleanPath.startsWith('timeslot')) {
    if (cleanPath.includes('compact')) return 'timeslot-compact';
    if (cleanPath.includes('json')) return 'timeslot-json';
    if (cleanPath.includes('basic')) return 'timeslot-basic';
    return 'timeslot-introduction';
  }

  if (cleanPath.startsWith('components/time-picker') || cleanPath.startsWith('time-picker') || cleanPath.startsWith('timepicker')) {
    if (cleanPath.includes('label')) return 'timepicker-label';
    if (cleanPath.includes('status')) return 'timepicker-status';
    if (cleanPath.includes('interval')) return 'timepicker-interval';
    if (cleanPath.includes('initial')) return 'timepicker-initial';
    if (cleanPath.includes('disabled')) return 'timepicker-disabled';
    return 'timepicker-basic';
  }

  if (cleanPath.startsWith('components/toast') || cleanPath.startsWith('toast')) {
    if (cleanPath.includes('stacked')) return 'toast-stacked';
    if (cleanPath.includes('actions')) return 'toast-actions';
    if (cleanPath.includes('custom')) return 'toast-custom';
    if (cleanPath.includes('provider')) return 'toast-provider';
    return 'toast-basic';
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

  if (cleanPath.startsWith('components/tooltip') || cleanPath.startsWith('tooltip')) {
    if (cleanPath.includes('rich')) return 'tooltip-rich';
    if (cleanPath.includes('interactive')) return 'tooltip-interactive';
    if (cleanPath.includes('variants') || cleanPath.includes('variant')) return 'tooltip-variants';
    if (cleanPath.includes('basic')) return 'tooltip-basic';
    return 'tooltip-introduction';
  }

  if (cleanPath.startsWith('components/popover') || cleanPath.startsWith('popover')) {
    if (cleanPath.includes('rich')) return 'popover-rich';
    if (cleanPath.includes('placement')) return 'popover-placements';
    if (cleanPath.includes('custom')) return 'popover-custom-content';
    if (cleanPath.includes('trigger')) return 'popover-trigger';
    return 'popover-basic';
  }

  if (cleanPath.startsWith('components/accordion') || cleanPath.startsWith('accordion')) {
    if (cleanPath.includes('group')) return 'accordion-group';
    return 'accordion-basic';
  }

  if (cleanPath.startsWith('components/app-header') || cleanPath.startsWith('app-header')) {
    if (cleanPath.includes('back')) return 'app-header-back';
    if (cleanPath.includes('filled')) return 'app-header-filled';
    if (cleanPath.includes('custom-leading')) return 'app-header-custom-leading';
    return 'app-header-basic';
  }

  if (cleanPath.startsWith('components/checkbox') || cleanPath.startsWith('checkbox')) {
    if (cleanPath.includes('sizes')) return 'checkbox-sizes';
    if (cleanPath.includes('tristate') || cleanPath.includes('indeterminate')) return 'checkbox-tristate';
    return 'checkbox-basic';
  }

  if (cleanPath.startsWith('components/chips') || cleanPath.startsWith('chips')) {
    if (cleanPath.includes('action')) return 'chips-action';
    if (cleanPath.includes('input')) return 'chips-input';
    return 'chips-basic';
  }

  if (cleanPath.startsWith('components/chip-group') || cleanPath.startsWith('chip-group')) {
    if (cleanPath.includes('input-field')) return 'chip-group-input-field';
    return 'chip-group-wrap';
  }

  if (cleanPath.startsWith('components/divider') || cleanPath.startsWith('divider')) {
    if (cleanPath.includes('styles') || cleanPath.includes('solid') || cleanPath.includes('dashed') || cleanPath.includes('dotted')) return 'divider-styles';
    if (cleanPath.includes('label')) return 'divider-label';
    if (cleanPath.includes('vertical')) return 'divider-vertical';
    return 'divider-basic';
  }

  if (cleanPath.startsWith('components/status-banner') || cleanPath.startsWith('status-banner')) {
    if (cleanPath.includes('draft')) return 'status-banner-draft';
    if (cleanPath.includes('variants')) return 'status-banner-variants';
    return 'status-banner-basic';
  }

  if (cleanPath.startsWith('components/dropdown') || cleanPath.startsWith('dropdown')) {
    if (cleanPath.includes('multi')) return 'dropdown-multi';
    if (cleanPath.includes('search')) return 'dropdown-search';
    if (cleanPath.includes('status')) return 'dropdown-status';
    return 'dropdown-basic';
  }

  if (cleanPath.startsWith('components/spinner') || cleanPath.startsWith('spinner')) {
    return 'spinner-basic';
  }

  if (cleanPath.startsWith('components/slider') || cleanPath.startsWith('slider')) {
    if (cleanPath.includes('sizes')) return 'slider-sizes';
    if (cleanPath.includes('steps')) return 'slider-steps';
    if (cleanPath.includes('custom-range')) return 'slider-custom-range';
    if (cleanPath.includes('formatter')) return 'slider-formatter';
    if (cleanPath.includes('disabled')) return 'slider-disabled';
    return 'slider-basic';
  }

  if (cleanPath.startsWith('patterns/') || cleanPath.startsWith('patterns') || cleanPath.startsWith('pattern')) {
    if (cleanPath.includes('aadhaar-face-auth-camera-permission') || cleanPath.includes('aadhaar-face-auth-permission') || (cleanPath.includes('aadhaar') && cleanPath.includes('camera-permission'))) {
      return 'pattern-aadhaar-face-auth-permission';
    }
    if (cleanPath.includes('aadhaar-otp-enter-code') || cleanPath.includes('aadhaar-otp-enter') || (cleanPath.includes('aadhaar') && cleanPath.includes('enter-code'))) {
      return 'pattern-aadhaar-otp-enter';
    }
    if (cleanPath.includes('verify-with-aadhaar-choose-method') || cleanPath.includes('aadhaar-verify-method') || (cleanPath.includes('aadhaar') && cleanPath.includes('choose-method'))) {
      return 'pattern-aadhaar-verify-method';
    }
    if (cleanPath.includes('otp-step-up-suspicious-activity') || cleanPath.includes('suspicious-activity') || (cleanPath.includes('auth-errors') && cleanPath.includes('suspicious'))) {
      return 'pattern-auth-suspicious-activity';
    }
    if (cleanPath.includes('otp-retry-unlocked') || cleanPath.includes('retry-unlocked') || (cleanPath.includes('auth-errors') && cleanPath.includes('unlocked'))) {
      return 'pattern-auth-retry-unlocked';
    }
    if (cleanPath.includes('otp-error-account-locked') || (cleanPath.includes('auth-errors') && cleanPath.includes('account-locked')) || (cleanPath.includes('auth-errors') && cleanPath.includes('locked'))) {
      return 'pattern-auth-account-locked';
    }
    if (cleanPath.includes('otp-error-last-attempt-warning') || cleanPath.includes('last-attempt-warning') || (cleanPath.includes('auth-errors') && cleanPath.includes('last-attempt'))) {
      return 'pattern-auth-last-attempt';
    }
    if (cleanPath.includes('otp-error-attempt-warning') || cleanPath.includes('attempt-warning') || (cleanPath.includes('auth-errors') && cleanPath.includes('attempt'))) {
      return 'pattern-auth-attempt-warning';
    }
    if (cleanPath.includes('otp-error-incorrect-entry') || cleanPath.includes('incorrect-entry') || (cleanPath.includes('auth-errors') && cleanPath.includes('incorrect'))) {
      return 'pattern-auth-incorrect-otp';
    }
    if (cleanPath.includes('session-ended') || (cleanPath.includes('session-timeout') && cleanPath.includes('ended'))) {
      return 'pattern-session-ended';
    }
    if (cleanPath.includes('your-session-is-expiring-soon') || cleanPath.includes('expiring-soon') || (cleanPath.includes('session-timeout') && cleanPath.includes('soon'))) {
      return 'pattern-session-expiring-soon';
    }
    if (cleanPath.includes('your-session-is-expiring') || cleanPath.includes('session-expiring') || cleanPath.includes('session-timeout')) {
      return 'pattern-session-expiring';
    }
    if (cleanPath.includes('otp-verified-success') || cleanPath.includes('otp-verified') || (cleanPath.includes('otp-verification') && cleanPath.includes('success'))) {
      return 'pattern-otp-verify-success';
    }
    if (cleanPath.includes('verify-mobile-account-locked') || cleanPath.includes('account-locked') || (cleanPath.includes('otp-verification') && cleanPath.includes('locked')) || (cleanPath.includes('locked') && cleanPath.includes('mobile'))) {
      return 'pattern-otp-verify-account-locked';
    }
    if (cleanPath.includes('verify-mobile-with-last-attempt-warning') || cleanPath.includes('last-attempt') || cleanPath.includes('lats-attempt') || (cleanPath.includes('otp-verification') && (cleanPath.includes('last') || cleanPath.includes('lats')))) {
      return 'pattern-otp-verify-last-attempt';
    }
    if (cleanPath.includes('verify-mobile-with-attempt-warning') || cleanPath.includes('attempt-warning') || cleanPath.includes('verify-attempt') || (cleanPath.includes('otp-verification') && cleanPath.includes('attempt'))) {
      return 'pattern-otp-verify-attempt-warning';
    }
    if (cleanPath.includes('verify-mobile-with-voice-fallback') || cleanPath.includes('voice-fallback') || cleanPath.includes('verify-voice') || (cleanPath.includes('otp-verification') && cleanPath.includes('voice'))) {
      return 'pattern-otp-verify-voice';
    }
    if (cleanPath.includes('verify-your-mobile-number') || cleanPath.includes('verify-mobile') || (cleanPath.includes('otp-verification') && cleanPath.includes('mobile'))) {
      return 'pattern-otp-verify-mobile';
    }
    if (cleanPath.includes('enter-otp') || cleanPath.includes('signin-otp') || cleanPath.includes('signin/otp')) {
      return 'pattern-signin-otp';
    }
    if (cleanPath.includes('otp-verification')) {
      return 'pattern-otp-verify-mobile';
    }
    if (cleanPath.includes('otp')) {
      return 'pattern-signin-otp';
    }
    if (cleanPath.includes('aadhaar')) {
      return 'pattern-signin-aadhaar';
    }
    if (cleanPath.includes('success')) {
      return 'pattern-signin-success';
    }
    if (cleanPath.includes('mobile')) {
      return 'pattern-signin-mobile';
    }
    if (cleanPath.includes('sign-in') || cleanPath.includes('signin') || cleanPath.includes('account') || cleanPath.includes('identity')) {
      return 'pattern-signin-account';
    }
    if (cleanPath.includes('header')) return 'patterns-headers';
    if (cleanPath.includes('auth') || cleanPath.includes('otp')) return 'patterns-auth';
    if (cleanPath.includes('card') || cleanPath.includes('dashboard')) return 'patterns-cards';
    if (cleanPath.includes('feedback') || cleanPath.includes('survey')) return 'patterns-feedback';
    return 'pattern-signin-account';
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
