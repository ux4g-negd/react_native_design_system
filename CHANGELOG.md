# Changelog

All notable changes to this project will be documented in this file.

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
