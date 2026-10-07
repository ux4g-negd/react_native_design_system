# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2026-10-07

### Added
- **New Components**:
  - `Ux4gBottomSheet`: Interactive and modal bottom sheet component with draggable gesture handle support and customizable contents.
  - `Ux4gFab`: Floating Action Button component with support for all 5 style variants (standard, extended, speed-dial/group, subtle, primary).
  - `Ux4gBottomNavigationBar`: Bottom navigation component with 4 distinct layout styles (standard, floating-pill, circular-center action button, and icon-only) with badge counts.
  - `Ux4gSideMenu`: Responsive side drawer navigation menu with smooth open/close animations, RTL/LTR layout directions, search filter, and multiple styling variants (standard, bordered, minimal).
- **Component Enhancements**:
  - `Ux4gAadhaarInput`: Added Aadhaar number masking / unmasking toggle feature (`showMaskToggle`, `maskAll`, `defaultMasked`, `isMasked`) alongside Verhoeff checksum algorithm validation.
- **Pattern Suites & Wizard Workflows**:
  - **Eligibility Check Wizard**: Complete multi-step flow with landing page, question steps (progress indicator, responsive options), final question step with updated typography (`hS_strong`, `bM_default`, `bS_default`), and outcome steps (Success with custom status tokens `#BEEFBB` / `#128937`, Failure, and Warning).
  - **Document Verification & Upload**: Multi-stage upload workflows including file progress, verification review, success confirmation, and document scan preview.
  - **Aadhaar Authentication Flows**: Verification success, verification failed, locked profile, face capture with camera overlay, sign-in with mobile OTP, and sign-in with Aadhaar.
  - **Application Status & Lifecycle**: Grievance status tracker, application status tracker, auto-save and draft expiry handling, resume application, and continue application patterns.
  - **Identity & Recovery**: Password reset, create new password, password reset success, operator authentication, and account recovery.
  - **User Preferences & Consent**: Consent capture flows and notification preference settings.
  - **Payment & Checkout**: Payment confirmation and proactive transaction status updates.
- **Documentation & Migration Tooling**:
  - Added comprehensive `MIGRATION.md` guide and prompt dataset for smooth transitions to the UX4G React Native component suite.
  - Integrated AppHeader menu actions and refined dark/light theme previews in Storybook.

---

## [1.0.9-beta.0] - 2026-09-25

### Fixed
- **Feedback Components Validation**:
  - `Ux4gFeedbackFormStar`, `Ux4gFeedbackFormNps`, and `Ux4gFeedbackFormCsat`: Submit button now remains disabled until both rating/score and comment are provided by the user.
- **Storybook Previews in Dark Mode**:
  - Fixed dark theme backgrounds and iframe key reloading for `Avatar`, `Dropdown`, and `Feedback` component story documentation pages.
- **Side Menu Animation & Layout**:
  - Smoothed open/close animations for `Ux4gSideMenu`.
  - Added support for right-to-left open direction.
  - Made search bar optional and fixed top status bar padding / close button touch target.
- **Bottom Navigation Bar**:
  - Refined floating-pill variant indicator gap and border dimensions.

---

## [1.0.8-beta.0] - 2026-09-24

### Added
- Interactive documentation pages for Bottom Navigation Bar, Side Menu Drawer, and advanced patterns.

---

## [1.0.2] - 2026-08-07

### Fixed
- Removed invalid self-referencing `file:` dependency from `package.json`.

---

## [1.0.1] - 2026-08-07

### Changed
- Updated browser tab title to "React Native Documentation | UX4G Design System".

---

## [1.0.0] - Initial Release

### Added
- Initial release of UX4G React Native Design System.
- Design tokens and theme architecture.
- Component library with React Native and TypeScript support.
