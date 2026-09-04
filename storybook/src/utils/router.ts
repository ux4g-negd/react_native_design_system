// Helper mapping between activePage ID and clean URL path string
const PAGE_TO_PATH: Record<string, string> = {
  introduction: 'introduction',
  quickstart: 'quickstart',
  'pattern-government-form-with-validation': 'patterns/application-and-submission/government-form-with-validation/government-form-with-validation',
  'pattern-government-form-with-errors': 'patterns/application-and-submission/government-form-with-validation/government-form-with-errors',
  'pattern-government-form-with-multiple-errors': 'patterns/application-and-submission/government-form-with-validation/government-form-with-multiple-errors',
  'pattern-application-sent-success': 'patterns/application-and-submission/government-form-with-validation/application-sent-success',
  'application-sent-success': 'patterns/application-and-submission/government-form-with-validation/application-sent-success',
  'application-sent': 'patterns/application-and-submission/government-form-with-validation/application-sent-success',
  'pattern-my-applications': 'patterns/dashboard-and-my-application/my-applications/my-applications',
  'my-applications': 'patterns/dashboard-and-my-application/my-applications/my-applications',
  'pattern-no-applications': 'patterns/dashboard-and-my-application/my-applications/no-applications',
  'no-applications': 'patterns/dashboard-and-my-application/my-applications/no-applications',
  'pattern-search-applications': 'patterns/dashboard-and-my-application/my-applications/search-applications',
  'search-applications': 'patterns/dashboard-and-my-application/my-applications/search-applications',
  'pattern-bulk-actions': 'patterns/dashboard-and-my-application/my-applications/bulk-actions',
  'bulk-actions': 'patterns/dashboard-and-my-application/my-applications/bulk-actions',
  'pattern-pending-tasks': 'patterns/dashboard-and-my-application/pending-tasks/pending-tasks',
  'pending-tasks': 'patterns/dashboard-and-my-application/pending-tasks/pending-tasks',
  'pattern-no-pending-tasks': 'patterns/dashboard-and-my-application/pending-tasks/no-pending-tasks',
  'no-pending-tasks': 'patterns/dashboard-and-my-application/pending-tasks/no-pending-tasks',
  'pattern-citizen-profile': 'patterns/dashboard-and-my-application/citizen-profile-and-preferences/citizen-profile',
  'citizen-profile': 'patterns/dashboard-and-my-application/citizen-profile-and-preferences/citizen-profile',
  'pattern-edit-profile': 'patterns/dashboard-and-my-application/citizen-profile-and-preferences/edit-profile',
  'edit-profile': 'patterns/dashboard-and-my-application/citizen-profile-and-preferences/edit-profile',
  'pattern-delete-account-dialog': 'patterns/dashboard-and-my-application/citizen-profile-and-preferences/delete-account-dialog',
  'delete-account-dialog': 'patterns/dashboard-and-my-application/citizen-profile-and-preferences/delete-account-dialog',
  'pattern-save-and-resume': 'patterns/application-and-submission/save-and-resume/save-and-resume',
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
  'pattern-aadhaar-verified-success': 'patterns/identity-and-access/aadhaar-authentication-gate/aadhaar-verified-success',
  'aadhaar-verified-success': 'patterns/identity-and-access/aadhaar-authentication-gate/aadhaar-verified-success',
  'pattern-aadhaar-verification-failed': 'patterns/identity-and-access/aadhaar-authentication-gate/aadhaar-verification-failed',
  'aadhaar-verification-failed': 'patterns/identity-and-access/aadhaar-authentication-gate/aadhaar-verification-failed',
  'aadhaar-failed': 'patterns/identity-and-access/aadhaar-authentication-gate/aadhaar-verification-failed',
  'pattern-aadhaar-account-locked': 'patterns/identity-and-access/aadhaar-authentication-gate/aadhaar-account-locked',
  'aadhaar-account-locked': 'patterns/identity-and-access/aadhaar-authentication-gate/aadhaar-account-locked',
  'aadhaar-locked': 'patterns/identity-and-access/aadhaar-authentication-gate/aadhaar-account-locked',
  'pattern-operator-assisted-auth': 'patterns/identity-and-access/aadhaar-authentication-gate/operator-assisted-authentication',
  'operator-assisted-authentication': 'patterns/identity-and-access/aadhaar-authentication-gate/operator-assisted-authentication',
  'operator-assisted-auth': 'patterns/identity-and-access/aadhaar-authentication-gate/operator-assisted-authentication',
  'pattern-signup-create-account': 'patterns/identity-and-access/signup/create-account',
  'signup-create-account': 'patterns/identity-and-access/signup/create-account',
  'create-account': 'patterns/identity-and-access/signup/create-account',
  'pattern-signup-verify-mobile': 'patterns/identity-and-access/signup/verify-your-mobile',
  'signup-verify-mobile': 'patterns/identity-and-access/signup/verify-your-mobile',
  'pattern-signup-complete-profile': 'patterns/identity-and-access/signup/complete-your-profile',
  'signup-complete-profile': 'patterns/identity-and-access/signup/complete-your-profile',
  'complete-your-profile': 'patterns/identity-and-access/signup/complete-your-profile',
  'pattern-signup-password-setup': 'patterns/identity-and-access/signup/password-setup',
  'signup-password-setup': 'patterns/identity-and-access/signup/password-setup',
  'password-setup': 'patterns/identity-and-access/signup/password-setup',
  'pattern-signup-account-created': 'patterns/identity-and-access/signup/account-created',
  'signup-account-created': 'patterns/identity-and-access/signup/account-created',
  'account-created': 'patterns/identity-and-access/signup/account-created',
  'pattern-fp-reset-password': 'patterns/identity-and-access/forgot-password-and-account-recovery/reset-password',
  'fp-reset-password': 'patterns/identity-and-access/forgot-password-and-account-recovery/reset-password',
  'reset-password': 'patterns/identity-and-access/forgot-password-and-account-recovery/reset-password',
  'pattern-fp-enter-otp': 'patterns/identity-and-access/forgot-password-and-account-recovery/enter-otp',
  'fp-enter-otp': 'patterns/identity-and-access/forgot-password-and-account-recovery/enter-otp',
  'pattern-fp-create-password': 'patterns/identity-and-access/forgot-password-and-account-recovery/create-new-password',
  'fp-create-password': 'patterns/identity-and-access/forgot-password-and-account-recovery/create-new-password',
  'create-new-password': 'patterns/identity-and-access/forgot-password-and-account-recovery/create-new-password',
  'pattern-fp-success': 'patterns/identity-and-access/forgot-password-and-account-recovery/password-reset-successfully',
  'fp-success': 'patterns/identity-and-access/forgot-password-and-account-recovery/password-reset-successfully',
  'password-reset-successfully': 'patterns/identity-and-access/forgot-password-and-account-recovery/password-reset-successfully',
  'pattern-fp-account-recovery': 'patterns/identity-and-access/forgot-password-and-account-recovery/account-recovery',
  'fp-account-recovery': 'patterns/identity-and-access/forgot-password-and-account-recovery/account-recovery',
  'account-recovery': 'patterns/identity-and-access/forgot-password-and-account-recovery/account-recovery',
  'pattern-notification': 'patterns/notification/notification',
  'pattern-reminder-alerts': 'patterns/notification/reminder-alerts',
  'pattern-notification-channels': 'patterns/notification/notification-preferences/notification-channels',
  'pattern-update-frequency': 'patterns/notification/notification-preferences/update-frequency',
  'pattern-per-service': 'patterns/notification/notification-preferences/per-service',
  'pattern-locked-notifications': 'patterns/notification/notification-preferences/locked-notifications',
  'pattern-whatsapp-consent': 'patterns/notification/notification-preferences/whatsapp-consent',
  'pattern-manage-all': 'patterns/notification/notification-preferences/manage-all',
  'pattern-auto-dismiss-banner': 'patterns/notification/proactive-status-update/auto-dismiss-banner',
  'pattern-live-status': 'patterns/notification/proactive-status-update/live-status',
  'pattern-reconnecting-state': 'patterns/notification/proactive-status-update/reconnecting-state',
  'pattern-manual-refresh-prompt': 'patterns/notification/proactive-status-update/manual-refresh-prompt',
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
  'pattern-application-status-tracker': 'patterns/status-and-tracking/application-status-tracker',
  'pattern-grievance-status-tracker': 'patterns/status-and-tracking/grievance-status-tracker',
  'pattern-consent-capture': 'patterns/consent-and-declaration/consent-capture/consent-capture',
  'pattern-consent-capture-not-given': 'patterns/consent-and-declaration/consent-capture/consent-capture-consent-not-given',
  'pattern-consent-management': 'patterns/consent-and-declaration/consent-capture/consent-management',
  'pattern-data-sharing-consent': 'patterns/consent-and-declaration/data-sharing-consent/data-sharing-consent',
  'pattern-manage-data-sharing-consents': 'patterns/consent-and-declaration/data-sharing-consent/manage-data-sharing-consents',
  'pattern-withdraw-consent-dialog': 'patterns/consent-and-declaration/data-sharing-consent/withdraw-consent-dialog',
  'pattern-consent-history': 'patterns/consent-and-declaration/data-sharing-consent/consent-history',
  'pattern-declaration-before-submission': 'patterns/consent-and-declaration/declaration-before-submission/declaration-before-submission',
  'pattern-declaration-with-digital-sign': 'patterns/consent-and-declaration/declaration-before-submission/declaration-with-digital-sign',
  'pattern-continue-application': 'patterns/application-and-submission/save-and-resume/continue-application',
  'pattern-resume-application-missing-info': 'patterns/application-and-submission/save-and-resume/resume-application-missing-info',
  'pattern-auto-save-form': 'patterns/application-and-submission/save-and-resume/auto-save-form',
  'pattern-draft-expiry-form': 'patterns/application-and-submission/save-and-resume/draft-expiry-form',
  'pattern-unsaved-changes-dialog': 'patterns/application-and-submission/save-and-resume/unsaved-changes-dialog',
  'pattern-discard-draft-dialog': 'patterns/application-and-submission/save-and-resume/discard-draft-dialog',
  'pattern-application-submitted': 'patterns/application-and-submission/submission-acknowledgement/application-submitted',
  'application-submitted': 'patterns/application-and-submission/submission-acknowledgement/application-submitted',
  'pattern-application-queued': 'patterns/application-and-submission/submission-acknowledgement/application-queued',
  'application-queued': 'patterns/application-and-submission/submission-acknowledgement/application-queued',
  'pattern-could-not-submit': 'patterns/application-and-submission/submission-acknowledgement/could-not-submit',
  'could-not-submit': 'patterns/application-and-submission/submission-acknowledgement/could-not-submit',
  'pattern-document-scan-upload': 'patterns/application-and-submission/document-scan-and-upload/document-scan-and-upload',
  'document-scan-and-upload': 'patterns/application-and-submission/document-scan-and-upload/document-scan-and-upload',
  'pattern-document-upload-progress': 'patterns/application-and-submission/document-scan-and-upload/document-upload-with-progress',
  'document-upload-with-progress': 'patterns/application-and-submission/document-scan-and-upload/document-upload-with-progress',
  'pattern-document-upload-review': 'patterns/application-and-submission/document-scan-and-upload/document-upload-with-review',
  'document-upload-with-review': 'patterns/application-and-submission/document-scan-and-upload/document-upload-with-review',
  'pattern-document-upload-success': 'patterns/application-and-submission/document-scan-and-upload/document-upload-success',
  'document-upload-success': 'patterns/application-and-submission/document-scan-and-upload/document-upload-success',
  'pattern-eligibility-check-landing': 'patterns/application-and-submission/eligibility-check-wizard/eligibility-check-landing',
  'eligibility-check-landing': 'patterns/application-and-submission/eligibility-check-wizard/eligibility-check-landing',
  'pattern-eligibility-question-step': 'patterns/application-and-submission/eligibility-check-wizard/eligibility-question-step',
  'eligibility-question-step': 'patterns/application-and-submission/eligibility-check-wizard/eligibility-question-step',
  'pattern-eligibility-final-question-step': 'patterns/application-and-submission/eligibility-check-wizard/eligibility-final-question-step',
  'eligibility-final-question-step': 'patterns/application-and-submission/eligibility-check-wizard/eligibility-final-question-step',
  'pattern-eligibility-success-step': 'patterns/application-and-submission/eligibility-check-wizard/eligibility-success-step',
  'eligibility-success-step': 'patterns/application-and-submission/eligibility-check-wizard/eligibility-success-step',
  'pattern-eligibility-failure-step': 'patterns/application-and-submission/eligibility-check-wizard/eligibility-failure-step',
  'eligibility-failure-step': 'patterns/application-and-submission/eligibility-check-wizard/eligibility-failure-step',
  'pattern-eligibility-warning-step': 'patterns/application-and-submission/eligibility-check-wizard/eligibility-warning-step',
  'eligibility-warning-step': 'patterns/application-and-submission/eligibility-check-wizard/eligibility-warning-step',
  'pattern-journey-progress-indicator': 'patterns/application-and-submission/journey-progress-indicator/journey-progress-indicator',
  'journey-progress-indicator': 'patterns/application-and-submission/journey-progress-indicator/journey-progress-indicator',
  'pattern-resume-journey': 'patterns/application-and-submission/journey-progress-indicator/resume-journey',
  'resume-journey': 'patterns/application-and-submission/journey-progress-indicator/resume-journey',
  'pattern-validation-error': 'patterns/application-and-submission/journey-progress-indicator/validation-error',
  'validation-error': 'patterns/application-and-submission/journey-progress-indicator/validation-error',
  'government-form-with-multiple-errors': 'patterns/application-and-submission/government-form-with-validation/government-form-with-multiple-errors',
  'government-form-with-errors': 'patterns/application-and-submission/government-form-with-validation/government-form-with-errors',
  'government-form-with-validation': 'patterns/application-and-submission/government-form-with-validation/government-form-with-validation',
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
    if (cleanPath.includes('application-status-tracker') || cleanPath.includes('status-and-tracking') || cleanPath.includes('status-tracker') || (cleanPath.includes('status') && cleanPath.includes('application'))) {
      return 'pattern-application-status-tracker';
    }
    if (cleanPath.includes('payment-waived') || cleanPath.includes('fee-waived') || cleanPath.includes('waived')) {
      return 'pattern-payment-waived';
    }
    if (cleanPath.includes('payment-failed') || cleanPath.includes('failed')) {
      return 'pattern-payment-failed';
    }
    if (cleanPath.includes('payment-success') || cleanPath.includes('payment-successful')) {
      return 'pattern-payment-success';
    }
    if (cleanPath.includes('payment-processing') || cleanPath.includes('processing')) {
      return 'pattern-payment-processing';
    }
    if (cleanPath.includes('choose-payment-method') || cleanPath.includes('payment-method')) {
      return 'pattern-choose-payment-method';
    }
    if (cleanPath.includes('payment') || cleanPath.includes('payment-and-confirmation')) {
      return 'pattern-payment';
    }
    if (cleanPath.includes('operator-assisted') || cleanPath.includes('operator')) {
      return 'pattern-operator-assisted-auth';
    }
    if (cleanPath.includes('aadhaar-account-locked') || (cleanPath.includes('aadhaar') && cleanPath.includes('locked'))) {
      return 'pattern-aadhaar-account-locked';
    }
    if (cleanPath.includes('aadhaar-verification-failed') || (cleanPath.includes('aadhaar') && cleanPath.includes('failed'))) {
      return 'pattern-aadhaar-verification-failed';
    }
    if (cleanPath.includes('aadhaar-verified-success') || (cleanPath.includes('aadhaar') && cleanPath.includes('verified-success'))) {
      return 'pattern-aadhaar-verified-success';
    }
    if (cleanPath.includes('aadhaar-face-auth-camera-permission') || cleanPath.includes('aadhaar-face-auth-permission') || (cleanPath.includes('aadhaar') && cleanPath.includes('camera-permission'))) {
      return 'pattern-aadhaar-face-auth-permission';
    }
    if (cleanPath.includes('aadhaar-otp-enter-code') || cleanPath.includes('aadhaar-otp-enter') || (cleanPath.includes('aadhaar') && cleanPath.includes('enter-code'))) {
      return 'pattern-aadhaar-otp-enter';
    }
    if (cleanPath.includes('verify-with-aadhaar-choose-method') || cleanPath.includes('aadhaar-verify-method') || (cleanPath.includes('aadhaar') && cleanPath.includes('choose-method'))) {
      return 'pattern-aadhaar-verify-method';
    }
    if (cleanPath.includes('signup/create-account') || cleanPath.includes('create-account') || (cleanPath.includes('signup') && cleanPath.includes('create-account'))) {
      return 'pattern-signup-create-account';
    }
    if (cleanPath.includes('signup/verify-mobile') || cleanPath.includes('signup/verify-your-mobile') || (cleanPath.includes('signup') && cleanPath.includes('verify'))) {
      return 'pattern-signup-verify-mobile';
    }
    if (cleanPath.includes('signup/complete-profile') || cleanPath.includes('complete-your-profile') || (cleanPath.includes('signup') && cleanPath.includes('profile'))) {
      return 'pattern-signup-complete-profile';
    }
    if (cleanPath.includes('signup/password-setup') || cleanPath.includes('password-setup') || (cleanPath.includes('signup') && cleanPath.includes('password'))) {
      return 'pattern-signup-password-setup';
    }
    if (cleanPath.includes('signup/account-created') || cleanPath.includes('account-created') || (cleanPath.includes('signup') && cleanPath.includes('created'))) {
      return 'pattern-signup-account-created';
    }
    if (cleanPath.includes('forgot-password') && cleanPath.includes('reset-password') || cleanPath.includes('fp-reset-password') || (cleanPath.includes('forgot-password') && cleanPath.includes('reset'))) {
      return 'pattern-fp-reset-password';
    }
    if (cleanPath.includes('forgot-password') && cleanPath.includes('enter-otp') || cleanPath.includes('fp-enter-otp')) {
      return 'pattern-fp-enter-otp';
    }
    if (cleanPath.includes('forgot-password') && cleanPath.includes('create') || cleanPath.includes('fp-create-password') || cleanPath.includes('create-new-password')) {
      return 'pattern-fp-create-password';
    }
    if (cleanPath.includes('forgot-password') && cleanPath.includes('successfully') || cleanPath.includes('fp-success') || cleanPath.includes('password-reset-successfully')) {
      return 'pattern-fp-success';
    }
    if (cleanPath.includes('forgot-password') && cleanPath.includes('recovery') || cleanPath.includes('fp-account-recovery') || cleanPath.includes('account-recovery')) {
      return 'pattern-fp-account-recovery';
    }
    if (cleanPath.includes('declaration-with-digital-sign') || cleanPath.includes('digital-sign')) {
      return 'pattern-declaration-with-digital-sign';
    }
    if (cleanPath.includes('declaration-before-submission') || cleanPath.includes('declaration')) {
      return 'pattern-declaration-before-submission';
    }
    if (cleanPath.includes('consent-history') || (cleanPath.includes('data-sharing') && cleanPath.includes('history'))) {
      return 'pattern-consent-history';
    }
    if (cleanPath.includes('withdraw-consent') || (cleanPath.includes('data-sharing') && cleanPath.includes('withdraw'))) {
      return 'pattern-withdraw-consent-dialog';
    }
    if (cleanPath.includes('manage-data-sharing') || (cleanPath.includes('data-sharing') && cleanPath.includes('manage'))) {
      return 'pattern-manage-data-sharing-consents';
    }
    if (cleanPath.includes('data-sharing-consent') || cleanPath.includes('data-sharing')) {
      return 'pattern-data-sharing-consent';
    }
    if (cleanPath.includes('consent-management') || (cleanPath.includes('consent') && cleanPath.includes('management'))) {
      return 'pattern-consent-management';
    }
    if (cleanPath.includes('consent-capture-not-given') || cleanPath.includes('consent-not-given') || (cleanPath.includes('consent') && cleanPath.includes('not-given'))) {
      return 'pattern-consent-capture-not-given';
    }
    if (cleanPath.includes('consent-capture') || cleanPath.includes('consent')) {
      return 'pattern-consent-capture';
    }
    if (cleanPath.includes('manual-refresh-prompt') || cleanPath.includes('manual-refresh') || (cleanPath.includes('proactive-status-update') && cleanPath.includes('refresh'))) {
      return 'pattern-manual-refresh-prompt';
    }
    if (cleanPath.includes('reconnecting-state') || cleanPath.includes('reconnecting') || (cleanPath.includes('proactive-status-update') && cleanPath.includes('reconnect'))) {
      return 'pattern-reconnecting-state';
    }
    if (cleanPath.includes('live-status') || (cleanPath.includes('proactive-status-update') && cleanPath.includes('live'))) {
      return 'pattern-live-status';
    }
    if (cleanPath.includes('auto-dismiss-banner') || cleanPath.includes('auto-dismiss') || (cleanPath.includes('proactive-status-update') && cleanPath.includes('banner'))) {
      return 'pattern-auto-dismiss-banner';
    }
    if (cleanPath.includes('manage-all') || cleanPath.includes('manage-all-subscriptions') || (cleanPath.includes('notification-preferences') && cleanPath.includes('manage'))) {
      return 'pattern-manage-all';
    }
    if (cleanPath.includes('whatsapp-consent') || cleanPath.includes('whatsapp-notification') || (cleanPath.includes('notification-preferences') && cleanPath.includes('whatsapp'))) {
      return 'pattern-whatsapp-consent';
    }
    if (cleanPath.includes('locked-notifications') || cleanPath.includes('mandatory-notification') || (cleanPath.includes('notification-preferences') && cleanPath.includes('locked'))) {
      return 'pattern-locked-notifications';
    }
    if (cleanPath.includes('per-service') || (cleanPath.includes('notification-preferences') && cleanPath.includes('service'))) {
      return 'pattern-per-service';
    }
    if (cleanPath.includes('validation-error')) {
      return 'pattern-validation-error';
    }
    if (cleanPath.includes('resume-journey')) {
      return 'pattern-resume-journey';
    }
    if (cleanPath.includes('journey-progress-indicator') || cleanPath.includes('journey-progress')) {
      return 'pattern-journey-progress-indicator';
    }
    if (cleanPath.includes('eligibility-warning-step') || (cleanPath.includes('eligibility') && cleanPath.includes('warning'))) {
      return 'pattern-eligibility-warning-step';
    }
    if (cleanPath.includes('eligibility-failure-step') || (cleanPath.includes('eligibility') && cleanPath.includes('failure'))) {
      return 'pattern-eligibility-failure-step';
    }
    if (cleanPath.includes('eligibility-success-step') || (cleanPath.includes('eligibility') && cleanPath.includes('success'))) {
      return 'pattern-eligibility-success-step';
    }
    if (cleanPath.includes('eligibility-final-question-step') || (cleanPath.includes('eligibility') && cleanPath.includes('final'))) {
      return 'pattern-eligibility-final-question-step';
    }
    if (cleanPath.includes('eligibility-question-step') || (cleanPath.includes('eligibility') && cleanPath.includes('question'))) {
      return 'pattern-eligibility-question-step';
    }
    if (cleanPath.includes('eligibility-check-landing') || (cleanPath.includes('eligibility') && cleanPath.includes('landing'))) {
      return 'pattern-eligibility-check-landing';
    }
    if (cleanPath.includes('delete-account-dialog') || cleanPath.includes('delete-account')) {
      return 'pattern-delete-account-dialog';
    }
    if (cleanPath.includes('edit-profile')) {
      return 'pattern-edit-profile';
    }
    if (cleanPath.includes('citizen-profile') || cleanPath.includes('citizen-profile-and-preferences')) {
      return 'pattern-citizen-profile';
    }
    if (cleanPath.includes('no-pending-tasks') || cleanPath.includes('no-pending-task')) {
      return 'pattern-no-pending-tasks';
    }
    if (cleanPath.includes('pending-tasks') || cleanPath.includes('pending-task')) {
      return 'pattern-pending-tasks';
    }
    if (cleanPath.includes('bulk-actions') || cleanPath.includes('bulk-action')) {
      return 'pattern-bulk-actions';
    }
    if (cleanPath.includes('search-applications') || cleanPath.includes('search-application')) {
      return 'pattern-search-applications';
    }
    if (cleanPath.includes('no-applications') || cleanPath.includes('no-application')) {
      return 'pattern-no-applications';
    }
    if (cleanPath.includes('my-applications') || cleanPath.includes('my-application') || cleanPath.includes('dashboard-and-my-application')) {
      return 'pattern-my-applications';
    }
    if (cleanPath.includes('application-sent-success') || cleanPath.includes('application-sent')) {
      return 'pattern-application-sent-success';
    }
    if (cleanPath.includes('government-form-with-multiple-errors') || cleanPath.includes('multiple-errors')) {
      return 'pattern-government-form-with-multiple-errors';
    }
    if (cleanPath.includes('government-form-with-errors') || cleanPath.includes('form-errors') || cleanPath.includes('form-with-errors')) {
      return 'pattern-government-form-with-errors';
    }
    if (cleanPath.includes('government-form-with-validation') || cleanPath.includes('government-form')) {
      return 'pattern-government-form-with-validation';
    }
    if (cleanPath.includes('document-upload-success') || (cleanPath.includes('upload') && cleanPath.includes('success'))) {
      return 'pattern-document-upload-success';
    }
    if (cleanPath.includes('document-upload-review') || cleanPath.includes('document-upload-with-review') || (cleanPath.includes('upload') && cleanPath.includes('review'))) {
      return 'pattern-document-upload-review';
    }
    if (cleanPath.includes('document-upload-progress') || cleanPath.includes('document-upload-with-progress') || (cleanPath.includes('upload') && cleanPath.includes('progress'))) {
      return 'pattern-document-upload-progress';
    }
    if (cleanPath.includes('document-scan-upload') || cleanPath.includes('document-scan-and-upload') || (cleanPath.includes('document-scan') && cleanPath.includes('upload'))) {
      return 'pattern-document-scan-upload';
    }
    if (cleanPath.includes('could-not-submit') || (cleanPath.includes('submission-acknowledgement') && cleanPath.includes('could-not-submit'))) {
      return 'pattern-could-not-submit';
    }
    if (cleanPath.includes('application-queued') || (cleanPath.includes('submission-acknowledgement') && cleanPath.includes('queued'))) {
      return 'pattern-application-queued';
    }
    if (cleanPath.includes('application-submitted') || (cleanPath.includes('submission-acknowledgement') && cleanPath.includes('submitted')) || (cleanPath.includes('submission-acknowledgement') && cleanPath.includes('application'))) {
      return 'pattern-application-submitted';
    }
    if (cleanPath.includes('discard-draft')) {
      return 'pattern-discard-draft-dialog';
    }
    if (cleanPath.includes('unsaved-changes')) {
      return 'pattern-unsaved-changes-dialog';
    }
    if (cleanPath.includes('draft-expiry')) {
      return 'pattern-draft-expiry-form';
    }
    if (cleanPath.includes('auto-save')) {
      return 'pattern-auto-save-form';
    }
    if (cleanPath.includes('resume-application-missing-info') || cleanPath.includes('missing-info')) {
      return 'pattern-resume-application-missing-info';
    }
    if (cleanPath.includes('continue-application')) {
      return 'pattern-continue-application';
    }
    if (cleanPath.includes('save-and-resume')) {
      return 'pattern-save-and-resume';
    }
    if (cleanPath.includes('update-frequency') || (cleanPath.includes('notification-preferences') && cleanPath.includes('frequency'))) {
      return 'pattern-update-frequency';
    }
    if (cleanPath.includes('notification-channels') || (cleanPath.includes('notification-preferences') && cleanPath.includes('channels'))) {
      return 'pattern-notification-channels';
    }
    if (cleanPath.includes('reminder-alerts') || (cleanPath.includes('notification') && cleanPath.includes('reminder'))) {
      return 'pattern-reminder-alerts';
    }
    if (cleanPath.includes('patterns/notification') || cleanPath.endsWith('/notification') || cleanPath === 'pattern-notification') {
      return 'pattern-notification';
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
