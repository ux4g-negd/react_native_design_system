export interface ChangelogItem {
  component?: string;
  componentLink?: string;
  summary: string;
  details?: string[];
}

export interface ChangelogCategory {
  type: 'Added' | 'Fixed' | 'Enhanced' | 'Changed' | 'Initial';
  label?: string;
  items: ChangelogItem[];
}

export interface ReleaseVersion {
  version: string;
  date: string;
  relativeDate: string;
  changesCount: number;
  tag?: 'Latest' | 'Stable';
  isLatest?: boolean;
  title: string;
  overview: string;
  highlights?: string[];
  categories: ChangelogCategory[];
  installCommand?: string;
}

export const LATEST_VERSION = '1.2.2';

export const CHANGELOG_DATA: ReleaseVersion[] = [
  {
    version: '1.2.2',
    date: 'October 13, 2026',
    relativeDate: '16 days ago',
    changesCount: 20,
    tag: 'Latest',
    isLatest: true,
    title: 'Navigation Bar & FAB Layout Refinements',
    overview:
      'Addresses device navigation bar detection for devices with fixed navigation bars, fine-tunes Floating Action Button (FAB) safe area insets and bottom navigation offsets, and updates Storybook Snack dependencies.',
    highlights: [
      'Refined navigation bar detection eliminating excessive bottom padding on devices with fixed navigation bars while preserving clearance on gesture bars.',
      'Aligned Ux4gFab floating position when paired with Ux4gBottomNavigationBar (aboveBottomNav={true}) with an optimal 80dp baseline offset.',
      'Corrected menu-labelled FAB UI alignment to align items to the right side (UX4G design system standard) and introduced customizable alignment prop.',
      'Updated all documentation and Expo Snack previews to ux4g-react-native-components@1.2.2.',
    ],
    installCommand: 'npm install ux4g-react-native-components@1.2.2',
    categories: [
      {
        type: 'Fixed',
        label: 'Fixed & Enhanced',
        items: [
          {
            component: 'Ux4gBottomSheet',
            componentLink: 'bottom-sheet-basic',
            summary: 'Refined device navigation bar detection',
            details: [
              'Eliminated excessive bottom padding on devices with fixed navigation bars.',
              'Preserved accurate safe clearance on gesture-navigation devices.',
            ],
          },
          {
            component: 'Ux4gFab',
            componentLink: 'fab-basic',
            summary: 'Safe area and offset coordination',
            details: [
              'Refined safe area inset detection to prevent excessive bottom gap on devices with fixed navigation bars.',
              'Aligned floating position when used with Ux4gBottomNavigationBar (aboveBottomNav={true}) with an optimal 80dp baseline offset.',
              'Corrected menu-labelled variant UI alignment to align items to the right side (matching UX4G design system specification).',
              'Added customizable alignment prop (\'start\' | \'center\' | \'end\').',
            ],
          },
          {
            component: 'Storybook & Snack Previews',
            componentLink: 'quickstart',
            summary: 'Dependency & Documentation sync',
            details: [
              'Updated Quick Start documentation and all interactive Expo Snack preview dependencies to ux4g-react-native-components@1.2.2.',
            ],
          },
        ],
      },
    ],
  },
  {
    version: '1.2.1',
    date: 'October 13, 2026',
    relativeDate: '16 days ago',
    changesCount: 0,
    tag: 'Stable',
    title: 'Safe Area Coordination & Floating Anchor Enhancements',
    overview:
      'Introduces automatic device navigation bar detection and safe-area padding for bottom sheets, elevated action buttons, and seamless FAB coordination above bottom navigation bars.',
    highlights: [
      'Automatic device navigation bar detection and safe-area padding (useSafeArea default true) for Ux4gBottomSheet.',
      'Elevated bottom sheet action buttons above system navigation bars (gesture bars and hardware navigation bars).',
      'Added aboveBottomNav and bottomNavOffset support to Ux4gFab for clean sequential floating above Ux4gBottomNavigationBar.',
    ],
    installCommand: 'npm install ux4g-react-native-components@1.2.1',
    categories: [
      {
        type: 'Fixed',
        label: 'Fixed & Enhanced',
        items: [
          {
            component: 'Ux4gBottomSheet',
            componentLink: 'bottom-sheet-basic',
            summary: 'Safe-area padding and action button elevation',
            details: [
              'Added automatic device navigation bar detection and safe-area padding (useSafeArea default true).',
              'Elevated bottom sheet action buttons above system navigation bars (gesture bars and hardware navigation bars) so buttons are never obstructed.',
              'Added explicit bottomInset override support.',
            ],
          },
          {
            component: 'Ux4gFab',
            componentLink: 'fab-basic',
            summary: 'Sequential floating coordination above Bottom Nav',
            details: [
              'Added aboveBottomNav and bottomNavOffset support to float cleanly and sequentially above Ux4gBottomNavigationBar without overlapping navigation tabs.',
              'Added safe area offset coordination for floating FAB anchors.',
            ],
          },
          {
            component: 'Documentation & Previews',
            componentLink: 'quickstart',
            summary: 'Interactive Snack preview version update',
            details: [
              'Updated all component documentation interactive Snack previews and dependencies targeting v1.2.1.',
            ],
          },
        ],
      },
    ],
  },
  {
    version: '1.2.0',
    date: 'October 12, 2026',
    relativeDate: '16 days ago',
    changesCount: 1,
    tag: 'Stable',
    title: 'Side Menu 6 Specialized Presets & Bottom Nav Center Action',
    overview:
      'Major update adding 6 specialized design presets for Side Menu Drawer, official center-action bottom navigation variant, UI pattern suites, and comprehensive migration tooling.',
    highlights: [
      'Full support and dedicated stories for all 6 specialized Side Menu presets: standard, citizen, department-services, department-switcher, mailbox, and profile-summary.',
      'Official variant="center-action" support in Ux4gBottomNavigationBar with backwards compatibility alias centreAction.',
      'Expanded UI pattern suites for Contact & Support, Language Switcher, Inline Feedback, Search Applications, and Auth Flows.',
      'Targeted migration guide and non-destructive prompt datasets for v1.2.0.',
    ],
    installCommand: 'npm install ux4g-react-native-components@1.2.0',
    categories: [
      {
        type: 'Added',
        label: 'Added & Enhanced',
        items: [
          {
            component: 'Ux4gSideMenu',
            componentLink: 'side-menu-standard',
            summary: 'Dedicated presets for Government citizen services',
            details: [
              'Full support and dedicated stories for all 6 specialized design presets: standard, citizen, department-services, department-switcher, mailbox, and profile-summary.',
              'Added dedicated preview, interactive code generator, and Expo Snack support for standard preset.',
              'Aligned naming convention across props and documentation for profile-summary.',
              'Streamlined direct component props documentation.',
            ],
          },
          {
            component: 'Ux4gBottomNavigationBar',
            componentLink: 'bottom-navigation-center-action',
            summary: 'Center Action Layout & shape variants',
            details: [
              'Added official variant="center-action" support with backwards compatibility alias centreAction.',
              'Updated test coverage and Storybook documentation for all layout shape variants.',
            ],
          },
          {
            component: 'Pattern Suites & Migration',
            componentLink: 'component-mapping',
            summary: 'Citizen journey patterns and prompt datasets',
            details: [
              'Added and updated UI patterns for Contact & Support, Language Switcher, Inline Feedback, Search Applications, and Auth Flows.',
              'Updated migration guide, non-destructive migration prompt dataset, and Quickstart guides targeting v1.2.0.',
            ],
          },
        ],
      },
    ],
  },
  {
    version: '1.1.0',
    date: 'October 07, 2026',
    relativeDate: '22 days ago',
    changesCount: 145,
    tag: 'Stable',
    title: 'New Navigation Suite, Aadhaar Masking & Pattern Wizards',
    overview:
      'Milestone release adding 4 core government navigation components (BottomSheet, FAB, BottomNavigationBar, SideMenu), Aadhaar masking toggle, full multi-step Eligibility Check Wizard, and authentication flows.',
    highlights: [
      'Introduced 4 new flagship components: Ux4gBottomSheet, Ux4gFab, Ux4gBottomNavigationBar, and Ux4gSideMenu.',
      'Aadhaar number masking/unmasking toggle with Verhoeff checksum algorithm validation.',
      'Complete Citizen Pattern Suites: Eligibility Check Wizard, Document Verification, Aadhaar Auth, Lifecycle Tracking, Identity Recovery, and Payments.',
      'Comprehensive MIGRATION.md guide and automated transformation prompts.',
    ],
    installCommand: 'npm install ux4g-react-native-components@1.1.0',
    categories: [
      {
        type: 'Added',
        label: 'New Components',
        items: [
          {
            component: 'Ux4gBottomSheet',
            componentLink: 'bottom-sheet-basic',
            summary: 'Interactive and modal bottom sheet with gesture support',
            details: [
              'Modal and inline bottom sheet component with draggable gesture handle support.',
              'Peek, Half, Expanded, and Full screen preset heights.',
              'Customizable header, footer actions, and backdrop dismiss.',
            ],
          },
          {
            component: 'Ux4gFab',
            componentLink: 'fab-basic',
            summary: 'Floating Action Button with 5 style variants',
            details: [
              'Support for standard, extended (labelled), speed-dial/group, subtle, and primary variants.',
              'Dynamic icon transitions, badge counters, and placement anchoring.',
            ],
          },
          {
            component: 'Ux4gBottomNavigationBar',
            componentLink: 'bottom-navigation-basic',
            summary: 'Bottom navigation bar with 4 distinct layout styles',
            details: [
              'Standard, floating-pill, circular-center action button, and icon-only layouts.',
              'Badge counter integration and accessibility tab roles.',
            ],
          },
          {
            component: 'Ux4gSideMenu',
            componentLink: 'side-menu-variants',
            summary: 'Responsive drawer navigation with smooth animations',
            details: [
              'RTL/LTR layout directions, built-in search filter, and custom headers.',
              'Multiple styling variants: standard, bordered, and minimal.',
            ],
          },
        ],
      },
      {
        type: 'Enhanced',
        label: 'Component Enhancements',
        items: [
          {
            component: 'Ux4gAadhaarInput',
            componentLink: 'input-field-basic',
            summary: 'Aadhaar masking / unmasking toggle & checksum validation',
            details: [
              'Added showMaskToggle, maskAll, defaultMasked, and isMasked props.',
              'Built-in Verhoeff checksum algorithm for instant validation feedback.',
            ],
          },
        ],
      },
      {
        type: 'Added',
        label: 'Pattern Suites & Wizard Workflows',
        items: [
          {
            component: 'Eligibility Check Wizard',
            componentLink: 'pattern-eligibility-landing',
            summary: 'Multi-step questionnaire flow',
            details: [
              'Landing page, question steps, progress indicator, responsive options.',
              'Final question step with typography tokens (hS_strong, bM_default, bS_default).',
              'Outcome steps: Success (#BEEFBB / #128937), Failure, and Warning.',
            ],
          },
          {
            component: 'Document Verification & Upload',
            componentLink: 'pattern-document-upload-progress',
            summary: 'Multi-stage file verification',
            details: [
              'File upload progress, verification review, success confirmation, and document scan preview.',
            ],
          },
          {
            component: 'Aadhaar Authentication Flows',
            componentLink: 'pattern-aadhaar-verify-method',
            summary: 'Government identity verification flows',
            details: [
              'Verification success, verification failed, locked profile, face capture with camera overlay, sign-in with mobile OTP, and sign-in with Aadhaar.',
            ],
          },
          {
            component: 'Application Status & Lifecycle',
            componentLink: 'pattern-application-status-tracker',
            summary: 'Tracking and draft persistence',
            details: [
              'Grievance status tracker, application status tracker, auto-save and draft expiry handling, resume application, and continue application patterns.',
            ],
          },
          {
            component: 'Identity & Recovery',
            componentLink: 'pattern-forgot-password-reset',
            summary: 'Account recovery and security',
            details: [
              'Password reset, create new password, password reset success, operator authentication, and account recovery.',
            ],
          },
        ],
      },
      {
        type: 'Added',
        label: 'Documentation & Migration Tooling',
        items: [
          {
            component: 'Migration Guide',
            componentLink: 'component-mapping',
            summary: 'Comprehensive migration guide and AI prompts',
            details: [
              'Added comprehensive MIGRATION.md guide and prompt dataset for smooth transitions to the UX4G React Native component suite.',
              'Integrated AppHeader menu actions and refined dark/light theme previews in Storybook.',
            ],
          },
        ],
      },
    ],
  },
  {
    version: '1.0.0',
    date: 'August 01, 2026',
    relativeDate: 'a month ago',
    changesCount: 1,
    title: 'Initial Release: UX4G React Native Design System Foundation',
    overview:
      'Initial foundation release of the UX4G React Native Design System. This release introduced 40+ foundational components across Form Controls, Display, Overlays, and Layout (all components except BottomSheet, FAB, BottomNavigationBar, and SideMenu which were subsequently introduced in v1.1.0). It also established the core token architecture, dynamic theme provider, and the initial citizen journey pattern suites.',
    highlights: [
      '40+ core React Native components launched (Buttons, Forms, Inputs, Cards, Headers, Feedback, Steppers, Accordions, Overlays).',
      'Excluded navigation/gesture components (Ux4gBottomSheet, Ux4gFab, Ux4gBottomNavigationBar, Ux4gSideMenu) — reserved and delivered in v1.1.0.',
      'Government-grade design tokens (UX4G Color Palette, Typography scale, Dimensions & Shadows).',
      'Dynamic Theming via Ux4gThemeProvider supporting light & dark modes with instant context propagation.',
      'Initial Foundation Pattern Suites (Government Form Validation, Core Authentication, Citizen Dashboard, Search & Browse). Remaining advanced wizard patterns added in v1.1.0.',
    ],
    categories: [
      {
        type: 'Added',
        label: 'Component Library (40+ Components Created)',
        items: [
          {
            component: 'Form & Input Controls (13 Components)',
            componentLink: 'button-introduction',
            summary: 'Complete suite of accessible input controls and form elements',
            details: [
              'Components: Ux4gButton, Ux4gIconButton, Ux4gInputField, Ux4gTextArea, Ux4gDropdown, Ux4gDatePicker, Ux4gTimePicker, Ux4gCheckbox, Ux4gRadioButton, Ux4gSwitch, Ux4gSlider, Ux4gSearchField, Ux4gFileUpload.',
              'Features: Full keyboard accessibility, helper/error text states, disabled and focused variants, and dark theme support.',
            ],
          },
          {
            component: 'Display & Layout Components (17 Components)',
            componentLink: 'card-basic',
            summary: 'Comprehensive structure, visual feedback, and container components',
            details: [
              'Components: Ux4gAppHeader, Ux4gAvatar, Ux4gBadge, Ux4gCard, Ux4gChips, Ux4gChipGroup, Ux4gDivider, Ux4gProgressIndicator, Ux4gSpinner, Ux4gStatusBanner, Ux4gStatusPipeline, Ux4gStepper, Ux4gTag, Ux4gTimeSlot, Ux4gAccordion, Ux4gAccordionGroup, Ux4gCarousel, Ux4gJourneyTimeline, Ux4gLink, Ux4gPagination, Ux4gResultList.',
              'Designed specifically for public service portals, dashboards, and multi-step citizen processes.',
            ],
          },
          {
            component: 'Feedback & Overlays (8 Components)',
            componentLink: 'modal-basic',
            summary: 'Interactive modal dialogs, contextual tooltips, and feedback surveys',
            details: [
              'Components: Ux4gModal, Ux4gPopover, Ux4gToast, Ux4gTooltip, Ux4gEmptyState, Ux4gFeedbackFormStar, Ux4gFeedbackFormCsat, Ux4gFeedbackFormNps.',
              'Includes accessibility roles, focus management, and citizen survey rating mechanisms.',
            ],
          },
          {
            component: 'Excluded Navigation Components (Added in v1.1.0)',
            componentLink: 'bottom-sheet-basic',
            summary: 'BottomSheet, FAB, BottomNavigationBar, and SideMenu reserved for v1.1.0',
            details: [
              'All components were created in this initial v1.0.0 release EXCEPT 4 specialized navigation components: Ux4gBottomSheet, Ux4gFab, Ux4gBottomNavigationBar, and Ux4gSideMenu.',
              'These 4 advanced navigation and drawer components were subsequently engineered and released in v1.1.0.',
            ],
          },
        ],
      },
      {
        type: 'Added',
        label: 'Design Tokens & Theme Architecture',
        items: [
          {
            component: 'UX4G Design Tokens',
            componentLink: 'colors-primary',
            summary: 'Official Government of India UI design tokens',
            details: [
              'Colors: Primary, Secondary, Tertiary, Neutral, and Semantic tokens (Success, Warning, Error, Info).',
              'Typography: Header tokens (hL, hM, hS), Body tokens (bL, bM, bS), Label, Title, and Display styles.',
              'Dimensions & Elevation: 4dp–64dp spacing scales, border radii, and 4-tier elevation shadow system.',
            ],
          },
          {
            component: 'Ux4gThemeProvider',
            componentLink: 'quickstart',
            summary: 'Context-based runtime theming with dynamic dark mode',
            details: [
              'Seamless runtime switching between light and dark themes.',
              'Provides complete token tree access via useUx4gTheme hook.',
            ],
          },
        ],
      },
      {
        type: 'Added',
        label: 'Initial Citizen UI Patterns (Remaining in v1.1.0)',
        items: [
          {
            component: 'Foundational Patterns Suite',
            componentLink: 'pattern-government-form-with-validation',
            summary: 'Initial core patterns created in v1.0.0',
            details: [
              'Government Forms with validation, single/multiple error displays, and submission confirmation.',
              'Core Authentication: Default Sign-In, OTP entry screen, and mobile number input.',
              'Citizen Dashboard: My Applications list, search applications, and empty states.',
              'Search & Discovery: Service discovery catalog, search with results, and no-results states.',
              'Remaining advanced patterns (Eligibility Check Wizard, Document Verification, Lifecycle Tracker, and Payment checkout) were subsequently released in v1.1.0.',
            ],
          },
        ],
      },
    ],
  },
];
