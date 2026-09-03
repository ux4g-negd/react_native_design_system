import React, { useState, useCallback } from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: string;
  children?: NavItem[];
}

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'introduction', label: 'Introduction', icon: 'bookmark' },
  { id: 'quickstart', label: 'Quick Start Guide', icon: 'bookmark' },
  {
    id: 'tokens',
    label: 'Token',
    icon: 'folder',
    children: [
      {
        id: 'colors',
        label: 'Colors',
        icon: 'folder',
        children: [
          { id: 'colors-primary', label: 'Primary', icon: 'layers' },
          { id: 'colors-secondary', label: 'Secondary', icon: 'layers' },
          { id: 'colors-tertiary', label: 'Tertiary', icon: 'layers' },
          { id: 'colors-red', label: 'Red (Error)', icon: 'layers' },
          { id: 'colors-orange', label: 'Orange (Warning)', icon: 'layers' },
          { id: 'colors-yellow', label: 'Yellow', icon: 'layers' },
          { id: 'colors-gold', label: 'Gold', icon: 'layers' },
          { id: 'colors-green', label: 'Green (Success)', icon: 'layers' },
          { id: 'colors-lime', label: 'Lime', icon: 'layers' },
          { id: 'colors-blue', label: 'Blue (Info)', icon: 'layers' },
          { id: 'colors-skyblue', label: 'Sky Blue', icon: 'layers' },
          { id: 'colors-cyan', label: 'Cyan', icon: 'layers' },
          { id: 'colors-purple', label: 'Purple', icon: 'layers' },
          { id: 'colors-pink', label: 'Pink', icon: 'layers' },
          { id: 'colors-neutral', label: 'Neutral', icon: 'layers' },
          { id: 'colors-semantic', label: 'Semantic Tokens', icon: 'layers' },
        ],
      },
      {
        id: 'typography',
        label: 'Typography',
        icon: 'folder',
        children: [
          { id: 'typography-header', label: 'Header', icon: 'layers' },
          { id: 'typography-display', label: 'Display', icon: 'layers' },
          { id: 'typography-body', label: 'Body', icon: 'layers' },
          { id: 'typography-label', label: 'Label', icon: 'layers' },
          { id: 'typography-title', label: 'Title', icon: 'layers' },
          { id: 'typography-usage', label: 'How to use', icon: 'layers' },
        ],
      },
      {
        id: 'shadow',
        label: 'Shadow',
        icon: 'folder',
        children: [
          { id: 'shadow-scale', label: 'Scale', icon: 'layers' },
          { id: 'shadow-usage', label: 'How to use', icon: 'layers' },
        ],
      },
      {
        id: 'dimensions',
        label: 'Dimensions',
        icon: 'folder',
        children: [
          { id: 'dimensions-spacing', label: 'Spacing', icon: 'layers' },
          { id: 'dimensions-radius', label: 'Border Radius', icon: 'layers' },
          { id: 'dimensions-border', label: 'Border Width', icon: 'layers' },
          { id: 'dimensions-usage', label: 'How to use', icon: 'layers' },
        ],
      },
    ],
  },
  {
    id: 'components',
    label: 'Components',
    icon: 'folder',
    children: [
      {
        id: 'accordion-grouping',
        label: 'Accordion',
        icon: 'folder',
        children: [
          { id: 'accordion-basic', label: 'Basic', icon: 'layers' },
          { id: 'accordion-group', label: 'AccordionGroup', icon: 'layers' },
        ],
      },
      {
        id: 'app-header-group',
        label: 'App Header',
        icon: 'folder',
        children: [
          { id: 'app-header-basic', label: 'Introduction', icon: 'layers' },
          { id: 'app-header-back', label: 'Back Button', icon: 'layers' },
          { id: 'app-header-filled', label: 'Filled', icon: 'layers' },
          { id: 'app-header-custom-leading', label: 'Custom Leading Widgets', icon: 'layers' },
        ],
      },
      {
        id: 'avatar-parent-group',
        label: 'Avatar',
        icon: 'folder',
        children: [
          { id: 'avatar-basic', label: 'Basic', icon: 'layers' },
          { id: 'avatar-status', label: 'Status Avatar', icon: 'layers' },
          { id: 'avatar-profile', label: 'Profile Badges & Actions', icon: 'layers' },
          { id: 'avatar-group', label: 'Avatar Group', icon: 'layers' },
        ],
      },
      {
        id: 'badge-parent-group',
        label: 'Badge',
        icon: 'folder',
        children: [
          { id: 'badge-basic', label: 'Basic & Dot', icon: 'layers' },
          { id: 'badge-count', label: 'Count Badge', icon: 'layers' },
          { id: 'badge-standalone', label: 'Standalone Variants', icon: 'layers' },
          { id: 'badge-semantic', label: 'Semantic Colors & Border', icon: 'layers' },
          { id: 'badge-overlay', label: 'Overlay & Placement', icon: 'layers' },
        ],
      },
      {
        id: 'card-parent-group',
        label: 'Card',
        icon: 'folder',
        children: [
          { id: 'card-basic', label: 'Basic Content', icon: 'layers' },
          { id: 'card-actions', label: 'With Actions', icon: 'layers' },
          { id: 'card-horizontal', label: 'Horizontal Layout', icon: 'layers' },
          { id: 'card-media', label: 'With Media', icon: 'layers' },
          { id: 'card-rich', label: 'Rich Card', icon: 'layers' },
          { id: 'card-rich-horizontal', label: 'Rich Card (Horizontal)', icon: 'layers' },
        ],
      },
      {
        id: 'button-group',
        label: 'Button',
        icon: 'folder',
        children: [
          { id: 'button-introduction', label: 'Introduction', icon: 'layers' },
          { id: 'button-variants', label: 'Variants', icon: 'layers' },
          { id: 'button-sizes', label: 'Sizes', icon: 'layers' },
          { id: 'button-showcase', label: 'Showcase', icon: 'layers' },
          { id: 'button-icon-button', label: 'IconButton', icon: 'layers' },
        ],
      },
      {
        id: 'checkbox-group',
        label: 'Checkbox',
        icon: 'folder',
        children: [
          { id: 'checkbox-basic', label: 'Basic & States', icon: 'layers' },
          { id: 'checkbox-sizes', label: 'Sizes', icon: 'layers' },
          { id: 'checkbox-tristate', label: 'Tristate (Indeterminate)', icon: 'layers' },
        ],
      },
      {
        id: 'chips-parent-group',
        label: 'Chips',
        icon: 'folder',
        children: [
          { id: 'chips-basic', label: 'Choice & Filter Chips', icon: 'layers' },
          { id: 'chips-action', label: 'Suggestion & Action Chips', icon: 'layers' },
          { id: 'chips-input', label: 'Input Chips', icon: 'layers' },
        ],
      },
      {
        id: 'chip-group-parent',
        label: 'Chip Group',
        icon: 'folder',
        children: [
          { id: 'chip-group-wrap', label: 'Wrap & Horizontal Groups', icon: 'layers' },
          { id: 'chip-group-input-field', label: 'Input Chip Field', icon: 'layers' },
        ],
      },
      {
        id: 'date-picker-group',
        label: 'Date Picker',
        icon: 'folder',
        children: [
          { id: 'date-picker-single', label: 'Single Date', icon: 'layers' },
          { id: 'date-picker-range', label: 'Date Range', icon: 'layers' },
        ],
      },
      {
        id: 'divider-group',
        label: 'Divider',
        icon: 'folder',
        children: [
          { id: 'divider-basic', label: 'Basic & Indents', icon: 'layers' },
          { id: 'divider-styles', label: 'Solid, Dashed & Dotted', icon: 'layers' },
          { id: 'divider-label', label: 'With Center Label', icon: 'layers' },
          { id: 'divider-vertical', label: 'Vertical Orientation', icon: 'layers' },
        ],
      },
      {
        id: 'status-banner-group',
        label: 'Draft Status',
        icon: 'folder',
        children: [
          { id: 'status-banner-basic', label: 'Basic Banners', icon: 'layers' },
          { id: 'status-banner-draft', label: 'Draft & Application Statuses', icon: 'layers' },
          { id: 'status-banner-variants', label: 'All Color Variants', icon: 'layers' },
        ],
      },
      {
        id: 'status-pipeline-group',
        label: 'Status Pipeline',
        icon: 'folder',
        children: [
          {
            id: 'status-pipeline-vertical-group',
            label: 'Vertical',
            icon: 'folder',
            children: [
              { id: 'status-pipeline-vertical', label: 'Basic', icon: 'layers' },
              { id: 'status-pipeline-vertical-states', label: 'All States', icon: 'layers' },
              { id: 'status-pipeline-vertical-sizes', label: 'Sizes', icon: 'layers' },
              { id: 'status-pipeline-vertical-colors', label: 'Custom Colors', icon: 'layers' },
              { id: 'status-pipeline-vertical-labels', label: 'Labels Only', icon: 'layers' },
              { id: 'status-pipeline-vertical-nolabels', label: 'Circles Only', icon: 'layers' },
            ],
          },
          {
            id: 'status-pipeline-horizontal-group',
            label: 'Horizontal',
            icon: 'folder',
            children: [
              { id: 'status-pipeline-horizontal', label: 'Basic', icon: 'layers' },
              { id: 'status-pipeline-horizontal-states', label: 'All States', icon: 'layers' },
              { id: 'status-pipeline-horizontal-sizes', label: 'Sizes', icon: 'layers' },
              { id: 'status-pipeline-horizontal-colors', label: 'Custom Colors', icon: 'layers' },
              { id: 'status-pipeline-horizontal-labels', label: 'Labels Only', icon: 'layers' },
              { id: 'status-pipeline-horizontal-nolabels', label: 'Circles Only', icon: 'layers' },
            ],
          },
        ],
      },
      {
        id: 'tag-group',
        label: 'Tag',
        icon: 'folder',
        children: [
          { id: 'tag-basic', label: 'Basic', icon: 'layers' },
          { id: 'tag-shapes', label: 'Shapes', icon: 'layers' },
          { id: 'tag-styles', label: 'Styles', icon: 'layers' },
          { id: 'tag-colors', label: 'Color Schemes', icon: 'layers' },
          { id: 'tag-leading', label: 'Leading Content', icon: 'layers' },
          { id: 'tag-dismissable', label: 'Dismissible', icon: 'layers' },
          { id: 'tag-pill', label: 'Unified Pill Tag', icon: 'layers' },
        ],
      },
      {
        id: 'textarea-group',
        label: 'Text Area',
        icon: 'folder',
        children: [
          { id: 'textarea-basic', label: 'Basic', icon: 'layers' },
          { id: 'textarea-label', label: 'Label & Required', icon: 'layers' },
          { id: 'textarea-status', label: 'Validation Status', icon: 'layers' },
          { id: 'textarea-count', label: 'Character Count', icon: 'layers' },
          { id: 'textarea-disabled', label: 'Disabled & Read Only', icon: 'layers' },
        ],
      },
      {
        id: 'timepicker-group',
        label: 'Time Picker',
        icon: 'folder',
        children: [
          { id: 'timepicker-basic', label: 'Basic', icon: 'layers' },
          { id: 'timepicker-label', label: 'Label & Required', icon: 'layers' },
          { id: 'timepicker-status', label: 'Validation Status', icon: 'layers' },
          { id: 'timepicker-interval', label: 'Minute Interval', icon: 'layers' },
          { id: 'timepicker-initial', label: 'Initial Time', icon: 'layers' },
          { id: 'timepicker-disabled', label: 'Disabled', icon: 'layers' },
        ],
      },
      {
        id: 'feedback-group',
        label: 'Feedback',
        icon: 'folder',
        children: [
          { id: 'feedbackformstar', label: 'feedbackformstar', icon: 'layers' },
          { id: 'feedbackformcsat', label: 'feedbackformcsat', icon: 'layers' },
          { id: 'feedbackformnps', label: 'feedbackformnps', icon: 'layers' },
        ],
      },
      {
        id: 'empty-state-group',
        label: 'Empty State',
        icon: 'folder',
        children: [
          { id: 'empty-state-basic', label: 'Basic', icon: 'layers' },
          { id: 'empty-state-variants', label: 'Variants', icon: 'layers' },
          { id: 'empty-state-action', label: 'With Action', icon: 'layers' },
        ],
      },
      {
        id: 'dropdown-group',
        label: 'Dropdown',
        icon: 'folder',
        children: [
          { id: 'dropdown-basic', label: 'Basic Single Select', icon: 'layers' },
          { id: 'dropdown-multi', label: 'Multi-Select Mode', icon: 'layers' },
          { id: 'dropdown-search', label: 'Searchable Dropdown', icon: 'layers' },
          { id: 'dropdown-status', label: 'Form Status Validation', icon: 'layers' },
        ],
      },
      {
        id: 'fileupload-group',
        label: 'FileUpload',
        icon: 'folder',
        children: [
          { id: 'fileupload-basic', label: 'Basic', icon: 'layers' },
          { id: 'fileupload-dashed', label: 'Dashed Border', icon: 'layers' },
          { id: 'fileupload-preloaded', label: 'Preloaded Files', icon: 'layers' },
        ],
      },
      {
        id: 'input-group',
        label: 'Input Field',
        icon: 'folder',
        children: [
          { id: 'input-basic', label: 'Basic', icon: 'layers' },
          { id: 'input-status', label: 'Validation Status', icon: 'layers' },
          { id: 'input-password', label: 'Password', icon: 'layers' },
          { id: 'input-icons', label: 'Icons', icon: 'layers' },
          { id: 'input-prefix-postfix', label: 'Prefix & Postfix', icon: 'layers' },
          { id: 'input-required-disabled', label: 'Required & Disabled', icon: 'layers' },
        ],
      },
      {
        id: 'input-aadhaar-group',
        label: 'Input Aadhaar',
        icon: 'folder',
        children: [
          { id: 'input-aadhaar-basic', label: 'Basic', icon: 'layers' },
          { id: 'input-aadhaar-varients', label: 'Varients', icon: 'layers' },
        ],
      },
      {
        id: 'input-pan-group',
        label: 'Input Pan',
        icon: 'folder',
        children: [
          { id: 'input-pan-basic', label: 'Basic', icon: 'layers' },
          { id: 'input-pan-varients', label: 'Varients', icon: 'layers' },
        ],
      },
      {
        id: 'input-otp-group',
        label: 'Input Otp',
        icon: 'folder',
        children: [
          { id: 'input-otp-basic', label: 'Basic', icon: 'layers' },
          { id: 'input-otp-varients', label: 'Varients', icon: 'layers' },
        ],
      },
      {
        id: 'carousel-group',
        label: 'Carousel',
        icon: 'folder',
        children: [
          { id: 'carousel-intro', label: 'Introduction', icon: 'layers' },
          { id: 'carousel-rich-hero', label: 'Rich Hero Carousel', icon: 'layers' },
          { id: 'carousel-image', label: 'Image Carousel', icon: 'layers' },
        ],
      },
      {
        id: 'journey-timeline-group',
        label: 'Journey Timeline',
        icon: 'folder',
        children: [
          { id: 'journey-timeline-basic', label: 'Basic', icon: 'layers' },
          { id: 'journey-timeline-horizontal', label: 'Horizontal', icon: 'layers' },
          { id: 'journey-timeline-custom', label: 'Custom Status', icon: 'layers' },
        ],
      },
      {
        id: 'link-group',
        label: 'Link',
        icon: 'folder',
        children: [
          { id: 'link-basic', label: 'Basic', icon: 'layers' },
          { id: 'link-text', label: 'Text Link', icon: 'layers' },
          { id: 'link-custom-child', label: 'Custom Child', icon: 'layers' },
        ],
      },
      {
        id: 'modal-group',
        label: 'Modal',
        icon: 'folder',
        children: [
          { id: 'modal-full-preview', label: 'Full Preview', icon: 'layers' },
          { id: 'modal-header-left', label: 'Header Left', icon: 'layers' },
          { id: 'modal-header-centered', label: 'Header Centered', icon: 'layers' },
        ],
      },
      {
        id: 'spinner-group',
        label: 'Spinner',
        icon: 'folder',
        children: [
          { id: 'spinner-basic', label: 'Basic', icon: 'layers' },
        ],
      },
      {
        id: 'pagination-group',
        label: 'Pagination',
        icon: 'folder',
        children: [
          { id: 'pagination-default-arrows', label: 'Default Arrows', icon: 'layers' },
          { id: 'pagination-capsule-arrows', label: 'Capsule Arrows', icon: 'layers' },
          { id: 'pagination-capsule-dots', label: 'Capsule Dots', icon: 'layers' },
          { id: 'pagination-arrows-right', label: 'Arrows Right', icon: 'layers' },
        ],
      },
      {
        id: 'progress-indicator-group',
        label: 'Progress Indicator',
        icon: 'folder',
        children: [
          { id: 'progress-linear', label: 'Linear', icon: 'layers' },
          { id: 'progress-circular', label: 'Circular', icon: 'layers' },
          { id: 'progress-half-circle', label: 'Half Circle', icon: 'layers' },
          { id: 'progress-animated', label: 'Animated', icon: 'layers' },
        ],
      },
      {
        id: 'progress-sla-group',
        label: 'Progress SLA Indicator',
        icon: 'folder',
        children: [
          { id: 'progress-sla-circular', label: 'Circular', icon: 'layers' },
          { id: 'progress-sla-linear', label: 'Linear', icon: 'layers' },
        ],
      },
      {
        id: 'popover-group',
        label: 'Popover',
        icon: 'folder',
        children: [
          { id: 'popover-basic', label: 'Basic', icon: 'layers' },
          { id: 'popover-rich', label: 'Rich', icon: 'layers' },
          { id: 'popover-placements', label: 'Placements', icon: 'layers' },
          { id: 'popover-custom-content', label: 'Custom Content', icon: 'layers' },
          { id: 'popover-trigger', label: 'Trigger', icon: 'layers' },
        ],
      },
      {
        id: 'radio-group',
        label: 'Radio Button',
        icon: 'folder',
        children: [
          { id: 'radio-basic', label: 'Basic', icon: 'layers' },
          { id: 'radio-sizes', label: 'Sizes', icon: 'layers' },
          { id: 'radio-status', label: 'Status', icon: 'layers' },
        ],
      },
      {
        id: 'result-list-group',
        label: 'Result List',
        icon: 'folder',
        children: [
          { id: 'result-list-basic', label: 'Basic', icon: 'layers' },
          { id: 'result-list-metadata', label: 'Metadata', icon: 'layers' },
          { id: 'result-list-expanded', label: 'Expanded', icon: 'layers' },
          { id: 'result-list-rejected', label: 'Rejected', icon: 'layers' },
        ],
      },
      {
        id: 'search-group',
        label: 'Search Field',
        icon: 'folder',
        children: [
          { id: 'search-basic', label: 'Basic', icon: 'layers' },
          { id: 'search-submit', label: 'Search with Submit', icon: 'layers' },
          { id: 'search-autocomplete', label: 'Autocomplete', icon: 'layers' },
          { id: 'search-status', label: 'Status', icon: 'layers' },
        ],
      },
      {
        id: 'slider-group',
        label: 'Slider',
        icon: 'folder',
        children: [
          { id: 'slider-basic', label: 'Basic', icon: 'layers' },
          { id: 'slider-sizes', label: 'Sizes', icon: 'layers' },
          { id: 'slider-steps', label: 'Steps', icon: 'layers' },
          { id: 'slider-custom-range', label: 'Custom Range', icon: 'layers' },
          { id: 'slider-formatter', label: 'Value Formatter', icon: 'layers' },
          { id: 'slider-disabled', label: 'Disabled', icon: 'layers' },
        ],
      },
      {
        id: 'stepper-group',
        label: 'Stepper',
        icon: 'folder',
        children: [
          { id: 'stepper-horizontal', label: 'Horizontal', icon: 'layers' },
          { id: 'stepper-horizontal-dashed', label: 'Horizontal (Dashed)', icon: 'layers' },
          { id: 'stepper-vertical', label: 'Vertical', icon: 'layers' },
          { id: 'stepper-error', label: 'Error State', icon: 'layers' },
          { id: 'stepper-bottom-lines', label: 'Horizontal (Bottom Line)', icon: 'layers' },
          { id: 'stepper-bottom-background', label: 'Bottom Lines + Background', icon: 'layers' },
          { id: 'stepper-edge-alignment', label: 'Edge Label Alignment', icon: 'layers' },
          {
            id: 'compact-stepper-group',
            label: 'Compact Stepper',
            icon: 'folder',
            children: [
              { id: 'compact-stepper-linear', label: 'Linear', icon: 'layers' },
              { id: 'compact-stepper-right-aligned', label: 'Right Aligned', icon: 'layers' },
              { id: 'compact-stepper-centered', label: 'Centered', icon: 'layers' },
              { id: 'compact-stepper-centered-between', label: 'Centered (Arrows Outside)', icon: 'layers' },
              { id: 'compact-stepper-split', label: 'Split', icon: 'layers' },
            ],
          },
        ],
      },
      {
        id: 'tooltip-group',
        label: 'Tooltip',
        icon: 'folder',
        children: [
          { id: 'tooltip-introduction', label: 'Introduction', icon: 'layers' },
          { id: 'tooltip-basic', label: 'Placements', icon: 'layers' },
          { id: 'tooltip-interactive', label: 'Interactive', icon: 'layers' },
          { id: 'tooltip-variants', label: 'All Variants', icon: 'layers' },
          { id: 'tooltip-rich', label: 'Rich Tooltip', icon: 'layers' },
        ],
      },
      // Placeholders for remaining components
      {
        id: 'switch-group',
        label: 'Switch',
        icon: 'folder',
        children: [
          { id: 'switch-basic', label: 'Basic & Sizes', icon: 'layers' },
          { id: 'switch-labels', label: 'Label Positions', icon: 'layers' },
          { id: 'switch-status', label: 'Status Descriptions', icon: 'layers' },
          { id: 'switch-required', label: 'Required & Icons', icon: 'layers' },
          { id: 'switch-disabled', label: 'Disabled', icon: 'layers' },
        ],
      },
      {
        id: 'toast-group',
        label: 'Toast',
        icon: 'folder',
        children: [
          { id: 'toast-basic', label: 'Categories', icon: 'layers' },
          { id: 'toast-stacked', label: 'Stacked Layout', icon: 'layers' },
          { id: 'toast-actions', label: 'Action & Close', icon: 'layers' },
          { id: 'toast-custom', label: 'Customization', icon: 'layers' },
          { id: 'toast-provider', label: 'Provider Demo', icon: 'layers' },
        ],
      },
      {
        id: 'timeslot-group',
        label: 'Time Slot',
        icon: 'folder',
        children: [
          { id: 'timeslot-introduction', label: 'Introduction', icon: 'layers' },
          { id: 'timeslot-basic', label: 'Booking (Expanded)', icon: 'layers' },
          { id: 'timeslot-compact', label: 'Compact View', icon: 'layers' },
          { id: 'timeslot-json', label: 'JSON Data Source', icon: 'layers' },
        ],
      },
    ],
  },
  {
    id: 'patterns',
    label: 'Patterns',
    icon: 'folder',
    children: [
      {
        id: 'identity-and-access-group',
        label: 'Identity and Access',
        icon: 'folder',
        children: [
          {
            id: 'signin-group',
            label: 'SignIn',
            icon: 'folder',
            children: [
              {
                id: 'pattern-signin-account',
                label: 'Sign in to your account',
                icon: 'layers',
              },
              {
                id: 'pattern-signin-otp',
                label: 'Enter OTP',
                icon: 'layers',
              },
              {
                id: 'pattern-signin-aadhaar',
                label: 'Sign in with Aadhaar',
                icon: 'layers',
              },
              {
                id: 'pattern-signin-success',
                label: 'Signed in success',
                icon: 'layers',
              },
              {
                id: 'pattern-signin-mobile',
                label: 'Sign in account with Mobile No',
                icon: 'layers',
              },
            ],
          },
          {
            id: 'otp-verification-group',
            label: 'OTP Verification',
            icon: 'folder',
            children: [
              {
                id: 'pattern-otp-verify-mobile',
                label: 'Verify your mobile number',
                icon: 'layers',
              },
              {
                id: 'pattern-otp-verify-voice',
                label: 'Verify mobile with voice fallback',
                icon: 'layers',
              },
              {
                id: 'pattern-otp-verify-attempt-warning',
                label: 'Verify mobile with attempt warning',
                icon: 'layers',
              },
              {
                id: 'pattern-otp-verify-last-attempt',
                label: 'Verify mobile with last-attempt warning',
                icon: 'layers',
              },
              {
                id: 'pattern-otp-verify-account-locked',
                label: 'Verify mobile — account locked',
                icon: 'layers',
              },
              {
                id: 'pattern-otp-verify-success',
                label: 'OTP verified — success',
                icon: 'layers',
              },
            ],
          },
          {
            id: 'session-timeout-dialog-group',
            label: 'Session Time-out Dialog',
            icon: 'folder',
            children: [
              {
                id: 'pattern-session-expiring',
                label: 'Your session is expiring',
                icon: 'layers',
              },
            ],
          },
          {
            id: 'auth-errors-and-lockout-group',
            label: 'Auth errors and lockout',
            icon: 'folder',
            children: [
              {
                id: 'pattern-auth-incorrect-otp',
                label: 'OTP error — incorrect entry',
                icon: 'layers',
              },
              {
                id: 'pattern-auth-attempt-warning',
                label: 'OTP error — attempt warning',
                icon: 'layers',
              },
              {
                id: 'pattern-auth-last-attempt',
                label: 'OTP error — last-attempt warning',
                icon: 'layers',
              },
              {
                id: 'pattern-auth-account-locked',
                label: 'OTP error — account locked',
                icon: 'layers',
              },
              {
                id: 'pattern-auth-retry-unlocked',
                label: 'OTP retry — unlocked',
                icon: 'layers',
              },
              {
                id: 'pattern-auth-suspicious-activity',
                label: 'OTP step-up — suspicious activity',
                icon: 'layers',
              },
            ],
          },
          {
            id: 'aadhaar-auth-gate-group',
            label: 'Aadhaar Authentication Gate',
            icon: 'folder',
            children: [
              {
                id: 'pattern-aadhaar-verify-method',
                label: 'Verify with Aadhaar — choose method',
                icon: 'layers',
              },
              {
                id: 'pattern-aadhaar-otp-enter',
                label: 'Aadhaar OTP — enter code',
                icon: 'layers',
              },
              {
                id: 'pattern-aadhaar-face-auth-permission',
                label: 'Aadhaar Face Auth — camera permission',
                icon: 'layers',
              },
              {
                id: 'pattern-aadhaar-verified-success',
                label: 'Aadhaar verified — success',
                icon: 'layers',
              },
              {
                id: 'pattern-aadhaar-verification-failed',
                label: 'Aadhaar verification failed',
                icon: 'layers',
              },
              {
                id: 'pattern-aadhaar-account-locked',
                label: 'Aadhaar account locked',
                icon: 'layers',
              },
              {
                id: 'pattern-operator-assisted-auth',
                label: 'Operator-assisted authentication',
                icon: 'layers',
              },
            ],
          },
          {
            id: 'signup-group',
            label: 'SignUp',
            icon: 'folder',
            children: [
              {
                id: 'pattern-signup-create-account',
                label: 'Create your account',
                icon: 'layers',
              },
              {
                id: 'pattern-signup-verify-mobile',
                label: 'Verify your mobile',
                icon: 'layers',
              },
              {
                id: 'pattern-signup-complete-profile',
                label: 'Complete your profile',
                icon: 'layers',
              },
              {
                id: 'pattern-signup-password-setup',
                label: 'Password setup',
                icon: 'layers',
              },
              {
                id: 'pattern-signup-account-created',
                label: 'Account Created',
                icon: 'layers',
              },
            ],
          },
          {
            id: 'forgot-password-group',
            label: 'Forgot Password and Account Recovery',
            icon: 'folder',
            children: [
              {
                id: 'pattern-fp-reset-password',
                label: 'Reset Password',
                icon: 'layers',
              },
              {
                id: 'pattern-fp-enter-otp',
                label: 'Enter OTP',
                icon: 'layers',
              },
              {
                id: 'pattern-fp-create-password',
                label: 'Create new password',
                icon: 'layers',
              },
              {
                id: 'pattern-fp-success',
                label: 'Password reset successfully',
                icon: 'layers',
              },
              {
                id: 'pattern-fp-account-recovery',
                label: 'Account recovery',
                icon: 'layers',
              },
            ],
          },
        ],
      },
      {
        id: 'notification-group',
        label: 'Notification',
        icon: 'folder',
        children: [
          {
            id: 'pattern-notification',
            label: 'Notification',
            icon: 'layers',
          },
          {
            id: 'pattern-reminder-alerts',
            label: 'Reminder Alerts',
            icon: 'layers',
          },
          {
            id: 'notification-preferences-group',
            label: 'Notification Preferences',
            icon: 'folder',
            children: [
              {
                id: 'pattern-notification-channels',
                label: 'Notification Channels',
                icon: 'layers',
              },
              {
                id: 'pattern-update-frequency',
                label: 'Update Frequency',
                icon: 'layers',
              },
              {
                id: 'pattern-per-service',
                label: 'Per Service',
                icon: 'layers',
              },
              {
                id: 'pattern-locked-notifications',
                label: 'Locked Notifications',
                icon: 'layers',
              },
              {
                id: 'pattern-whatsapp-consent',
                label: 'WhatsApp Consent',
                icon: 'layers',
              },
              {
                id: 'pattern-manage-all',
                label: 'Manage All',
                icon: 'layers',
              },
            ],
          },
          {
            id: 'proactive-status-update-group',
            label: 'Proactive Status Update',
            icon: 'folder',
            children: [
              {
                id: 'pattern-auto-dismiss-banner',
                label: 'Auto-dismiss Banner',
                icon: 'layers',
              },
              {
                id: 'pattern-live-status',
                label: 'Live Status',
                icon: 'layers',
              },
              {
                id: 'pattern-reconnecting-state',
                label: 'Reconnecting State',
                icon: 'layers',
              },
              {
                id: 'pattern-manual-refresh-prompt',
                label: 'Manual Refresh Prompt',
                icon: 'layers',
              },
            ],
          },
        ],
      },
      {
        id: 'payment-and-confirmation-group',
        label: 'Payment and Confirmation',
        icon: 'folder',
        children: [
          {
            id: 'pattern-payment',
            label: 'Payment',
            icon: 'layers',
          },
          {
            id: 'pattern-choose-payment-method',
            label: 'Choose Payment Method',
            icon: 'layers',
          },
          {
            id: 'pattern-payment-processing',
            label: 'Payment Processing',
            icon: 'layers',
          },
          {
            id: 'pattern-payment-success',
            label: 'Payment Successful',
            icon: 'layers',
          },
          {
            id: 'pattern-payment-failed',
            label: 'Payment Failed',
            icon: 'layers',
          },
          {
            id: 'pattern-payment-waived',
            label: 'Payment Waived',
            icon: 'layers',
          },
        ],
      },
      {
        id: 'status-and-tracking-group',
        label: 'Status and Tracking',
        icon: 'folder',
        children: [
          {
            id: 'pattern-application-status-tracker',
            label: 'Application Status Tracker',
            icon: 'layers',
          },
          {
            id: 'pattern-grievance-status-tracker',
            label: 'Grievance Status Tracker',
            icon: 'layers',
          },
        ],
      },
      {
        id: 'consent-and-declaration-group',
        label: 'Consent and Declaration',
        icon: 'folder',
        children: [
          {
            id: 'consent-capture-group',
            label: 'Consent Capture',
            icon: 'folder',
            children: [
              {
                id: 'pattern-consent-capture',
                label: 'Consent Capture',
                icon: 'layers',
              },
              {
                id: 'pattern-consent-capture-not-given',
                label: 'Consent Capture (Consent Not Given)',
                icon: 'layers',
              },
              {
                id: 'pattern-consent-management',
                label: 'Consent Management',
                icon: 'layers',
              },
            ],
          },
          {
            id: 'data-sharing-consent-group',
            label: 'Data Sharing Consent',
            icon: 'folder',
            children: [
              {
                id: 'pattern-data-sharing-consent',
                label: 'Data Sharing Consent',
                icon: 'layers',
              },
              {
                id: 'pattern-manage-data-sharing-consents',
                label: 'Manage Data Sharing Consents',
                icon: 'layers',
              },
              {
                id: 'pattern-withdraw-consent-dialog',
                label: 'Withdraw Consent Dialog',
                icon: 'layers',
              },
              {
                id: 'pattern-consent-history',
                label: 'Consent History',
                icon: 'layers',
              },
            ],
          },
          {
            id: 'declaration-before-submission-group',
            label: 'Declaration Before Submission',
            icon: 'folder',
            children: [
              {
                id: 'pattern-declaration-before-submission',
                label: 'Declaration Before Submission',
                icon: 'layers',
              },
              {
                id: 'pattern-declaration-with-digital-sign',
                label: 'Declaration with Digital Sign',
                icon: 'layers',
              },
            ],
          },
        ],
      },
      {
        id: 'application-and-submission-group',
        label: 'Application and Submission',
        icon: 'folder',
        children: [
          {
            id: 'save-and-resume-group',
            label: 'Save and Resume',
            icon: 'folder',
            children: [
              {
                id: 'pattern-save-and-resume',
                label: 'Save and Resume',
                icon: 'layers',
              },
              {
                id: 'pattern-continue-application',
                label: 'Continue Application',
                icon: 'layers',
              },
              {
                id: 'pattern-resume-application-missing-info',
                label: 'Resume Application Missing Info',
                icon: 'layers',
              },
              {
                id: 'pattern-auto-save-form',
                label: 'Auto-save Form',
                icon: 'layers',
              },
              {
                id: 'pattern-draft-expiry-form',
                label: 'Draft Expiry Form',
                icon: 'layers',
              },
              {
                id: 'pattern-unsaved-changes-dialog',
                label: 'Unsaved Changes Dialog',
                icon: 'layers',
              },
              {
                id: 'pattern-discard-draft-dialog',
                label: 'Discard Draft Dialog',
                icon: 'layers',
              },
            ],
          },
          {
            id: 'submission-acknowledgement-group',
            label: 'Submission Acknowledgement',
            icon: 'folder',
            children: [
              {
                id: 'pattern-application-submitted',
                label: 'Application Submitted',
                icon: 'layers',
              },
              {
                id: 'pattern-application-queued',
                label: 'Application Queued',
                icon: 'layers',
              },
              {
                id: 'pattern-could-not-submit',
                label: 'Could Not Submit',
                icon: 'layers',
              },
            ],
          },
          {
            id: 'document-scan-and-upload-group',
            label: 'Document scan and upload',
            icon: 'folder',
            children: [
              {
                id: 'pattern-document-scan-upload',
                label: 'Document scan and upload',
                icon: 'layers',
              },
              {
                id: 'pattern-document-upload-progress',
                label: 'Document upload with progress',
                icon: 'layers',
              },
              {
                id: 'pattern-document-upload-review',
                label: 'Document upload with review',
                icon: 'layers',
              },
              {
                id: 'pattern-document-upload-success',
                label: 'Document upload success',
                icon: 'layers',
              },
            ],
          },
          {
            id: 'eligibility-check-wizard-group',
            label: 'Eligibility Check Wizard',
            icon: 'folder',
            children: [
              {
                id: 'pattern-eligibility-check-landing',
                label: 'Eligibility Check Landing',
                icon: 'layers',
              },
              {
                id: 'pattern-eligibility-question-step',
                label: 'Eligibility Question Step',
                icon: 'layers',
              },
              {
                id: 'pattern-eligibility-final-question-step',
                label: 'Eligibility Final Question Step',
                icon: 'layers',
              },
              {
                id: 'pattern-eligibility-success-step',
                label: 'Eligibility Success Step',
                icon: 'layers',
              },
              {
                id: 'pattern-eligibility-failure-step',
                label: 'Eligibility Failure Step',
                icon: 'layers',
              },
              {
                id: 'pattern-eligibility-warning-step',
                label: 'Eligibility Warning Step',
                icon: 'layers',
              },
            ],
          },
          {
            id: 'journey-progress-indicator-group',
            label: 'Journey Progress Indicator',
            icon: 'folder',
            children: [
              {
                id: 'pattern-journey-progress-indicator',
                label: 'Journey Progress Indicator',
                icon: 'layers',
              },
              {
                id: 'pattern-resume-journey',
                label: 'Resume Journey',
                icon: 'layers',
              },
            ],
          },
        ],
      },
    ],
  },
];

// Sort the Components group alphabetically by label (sub-sections keep their own order)
const componentsNavItem = NAV_ITEMS.find((item) => item.id === 'components');
if (componentsNavItem?.children) {
  componentsNavItem.children.sort((a, b) =>
    a.label.localeCompare(b.label, undefined, { sensitivity: 'base' })
  );
}

export const Sidebar: React.FC<SidebarProps> = ({
  activePage,
  onNavigate,
  isDark,
  onToggleTheme,
  isMobileOpen = false,
  onCloseMobile,
}) => {
  // All sidebar folders collapsed by default
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarWidth, setSidebarWidth] = useState(260);
  const [isResizing, setIsResizing] = useState(false);

  // Tracks groups the user has manually toggled, so auto-expand never overrides their choice
  const userToggledRef = React.useRef<Set<string>>(new Set());

  const getAutoExpandIds = (page: string): string[] => {
    if (!page || page === 'introduction' || page === 'quickstart') return [];
    if (page.startsWith('colors-')) return ['tokens', 'colors'];
    if (page.startsWith('typography')) return ['tokens', 'typography'];
    if (page.startsWith('shadow')) return ['tokens', 'shadow'];
    if (page.startsWith('dimensions') || ['spacing', 'radius'].includes(page)) return ['tokens', 'dimensions'];
    if (
      page === 'pattern-save-and-resume' ||
      page === 'pattern-continue-application' ||
      page === 'pattern-resume-application-missing-info' ||
      page === 'pattern-auto-save-form' ||
      page === 'pattern-draft-expiry-form' ||
      page === 'pattern-unsaved-changes-dialog' ||
      page === 'pattern-discard-draft-dialog' ||
      page.includes('save-and-resume') ||
      page.includes('continue-application') ||
      page.includes('missing-info') ||
      page.includes('auto-save') ||
      page.includes('draft-expiry') ||
      page.includes('unsaved-changes') ||
      page.includes('discard-draft')
    ) {
      return ['patterns', 'application-and-submission-group', 'save-and-resume-group'];
    }
    if (
      page === 'pattern-application-submitted' ||
      page === 'pattern-application-queued' ||
      page === 'pattern-could-not-submit' ||
      page.includes('application-submitted') ||
      page.includes('application-queued') ||
      page.includes('could-not-submit') ||
      page.includes('submission-acknowledgement')
    ) {
      return ['patterns', 'application-and-submission-group', 'submission-acknowledgement-group'];
    }
    if (
      page === 'pattern-document-scan-upload' ||
      page === 'pattern-document-upload-progress' ||
      page === 'pattern-document-upload-review' ||
      page === 'pattern-document-upload-success' ||
      page.includes('document-scan-upload') ||
      page.includes('document-upload-progress') ||
      page.includes('document-upload-review') ||
      page.includes('document-upload-success') ||
      page.includes('document-scan-and-upload')
    ) {
      return ['patterns', 'application-and-submission-group', 'document-scan-and-upload-group'];
    }
    if (
      page === 'pattern-eligibility-check-landing' ||
      page === 'pattern-eligibility-question-step' ||
      page === 'pattern-eligibility-final-question-step' ||
      page === 'pattern-eligibility-success-step' ||
      page === 'pattern-eligibility-failure-step' ||
      page === 'pattern-eligibility-warning-step' ||
      page.includes('eligibility-check-landing') ||
      page.includes('eligibility-question-step') ||
      page.includes('eligibility-final-question-step') ||
      page.includes('eligibility-success-step') ||
      page.includes('eligibility-failure-step') ||
      page.includes('eligibility-warning-step') ||
      page.includes('eligibility-check-wizard')
    ) {
      return ['patterns', 'application-and-submission-group', 'eligibility-check-wizard-group'];
    }
    if (
      page === 'pattern-journey-progress-indicator' ||
      page === 'pattern-resume-journey' ||
      page.includes('journey-progress-indicator') ||
      page.includes('resume-journey') ||
      page.includes('journey-progress')
    ) {
      return ['patterns', 'application-and-submission-group', 'journey-progress-indicator-group'];
    }
    if (page === 'pattern-consent-capture' || page.includes('consent')) {
      return ['patterns', 'consent-and-declaration-group', 'consent-capture-group'];
    }
    if (page === 'pattern-payment' || page.includes('payment')) {
      return ['patterns', 'payment-and-confirmation-group'];
    }
    if (page === 'pattern-otp-verify-mobile' || page.startsWith('pattern-otp') || page.includes('verify-mobile')) {
      return ['patterns', 'identity-and-access-group', 'otp-verification-group'];
    }
    if (page === 'pattern-signin-account' || page.startsWith('signin') || page.startsWith('identity')) {
      return ['patterns', 'identity-and-access-group', 'signin-group'];
    }
    if (page.startsWith('patterns-') || ['patterns', 'forms', 'headers', 'auth', 'cards', 'feedback'].includes(page)) return ['patterns'];
    if (page.startsWith('button')) return ['components', 'button-group'];
    if (page.startsWith('date-picker')) return ['components', 'date-picker-group'];
    if (page.startsWith('modal')) return ['components', 'modal-group'];
    if (page.startsWith('accordion')) return ['components', 'accordion-grouping'];
    if (page.startsWith('app-header')) return ['components', 'app-header-group'];
    if (page.startsWith('avatar')) return ['components', 'avatar-parent-group'];
    if (page.startsWith('checkbox')) return ['components', 'checkbox-group'];
    if (page.startsWith('chips')) return ['components', 'chips-parent-group'];
    if (page.startsWith('chip-group')) return ['components', 'chip-group-parent'];
    if (page.startsWith('divider')) return ['components', 'divider-group'];
    if (page.startsWith('status-banner')) return ['components', 'status-banner-group'];
    if (page.startsWith('dropdown')) return ['components', 'dropdown-group'];
    if (page.startsWith('spinner')) return ['components', 'spinner-group'];
    if (page.startsWith('card')) return ['components', 'card-parent-group'];
    if (page.startsWith('carousel')) return ['components', 'carousel-group'];
    if (page.startsWith('journey-timeline')) return ['components', 'journey-timeline-group'];
    if (page.startsWith('link')) return ['components', 'link-group'];
    if (page.startsWith('pagination')) return ['components', 'pagination-group'];
    if (page.startsWith('progress-sla')) return ['components', 'progress-sla-group'];
    if (page.startsWith('progress')) return ['components', 'progress-indicator-group'];
    if (page.startsWith('tooltip')) return ['components', 'tooltip-group'];
    if (page.startsWith('popover')) return ['components', 'popover-group'];
    if (page.startsWith('radio')) return ['components', 'radio-group'];
    if (page.startsWith('result-list')) return ['components', 'result-list-group'];
    if (page.startsWith('search')) return ['components', 'search-group'];
    if (page.startsWith('badge')) return ['components', 'badge-parent-group'];
    if (page.startsWith('input-aadhaar')) return ['components', 'input-aadhaar-group'];
    if (page.startsWith('input-pan')) return ['components', 'input-pan-group'];
    if (page.startsWith('input-otp')) return ['components', 'input-otp-group'];
    if (page.startsWith('input')) return ['components', 'input-group'];
    if (page.startsWith('fileupload')) return ['components', 'fileupload-group'];
    if (page.startsWith('feedbackform')) return ['components', 'feedback-group'];
    if (page.startsWith('empty-state')) return ['components', 'empty-state-group'];
    if (page.startsWith('status-pipeline-horizontal')) {
      return ['components', 'status-pipeline-group', 'status-pipeline-horizontal-group'];
    }
    if (page.startsWith('status-pipeline')) {
      return ['components', 'status-pipeline-group', 'status-pipeline-vertical-group'];
    }
    if (page.startsWith('timepicker')) return ['components', 'timepicker-group'];
    if (page.startsWith('toast')) return ['components', 'toast-group'];
    if (page.startsWith('textarea')) return ['components', 'textarea-group'];
    if (page.startsWith('tag')) return ['components', 'tag-group'];
    if (page.startsWith('compact-stepper')) {
      return ['components', 'stepper-group', 'compact-stepper-group'];
    }
    if (page.startsWith('stepper')) return ['components', 'stepper-group'];
    if (page.startsWith('timeslot')) return ['components', 'timeslot-group'];
    if (page.startsWith('switch')) return ['components', 'switch-group'];
    if (page.startsWith('slider')) return ['components', 'slider-group'];
    if (
      ['input-field', 'checkbox', 'radio-button', 'switch', 'card', 'badge', 'avatar', 'toast'].includes(page)
    ) {
      return ['components'];
    }
    return [];
  };

  // Auto-expand only the groups of the currently active page, but never override
  // groups the user has manually collapsed/expanded
  React.useEffect(() => {
    const ids = getAutoExpandIds(activePage);
    setExpandedGroups((prev) => {
      const next = { ...prev };
      for (const id of ids) {
        if (!userToggledRef.current.has(id)) next[id] = true;
      }
      return next;
    });
  }, [activePage]);

  const startResizing = useCallback(
    (mouseDownEvent: React.MouseEvent) => {
      mouseDownEvent.preventDefault();
      setIsResizing(true);

      const startX = mouseDownEvent.clientX;
      const startWidth = sidebarWidth;

      const onMouseMove = (mouseMoveEvent: MouseEvent) => {
        const currentWidth = startWidth + (mouseMoveEvent.clientX - startX);
        const clampedWidth = Math.min(Math.max(currentWidth, 180), 500);
        setSidebarWidth(clampedWidth);
      };

      const onMouseUp = () => {
        setIsResizing(false);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    },
    [sidebarWidth]
  );

  const handleResetWidth = () => {
    setSidebarWidth(260);
  };

  const toggleGroup = (id: string) => {
    userToggledRef.current.add(id);
    setExpandedGroups((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filterItems = (items: NavItem[]): NavItem[] => {
    if (!searchQuery.trim()) return items;
    const q = searchQuery.toLowerCase();
    const filter = (list: NavItem[]): NavItem[] =>
      list
        .map((item) => {
          if (item.children) {
            const filteredChildren = filter(item.children);
            if (filteredChildren.length > 0) {
              return { ...item, children: filteredChildren };
            }
          }
          if (item.label.toLowerCase().includes(q)) return item;
          return null;
        })
        .filter(Boolean) as NavItem[];
    return filter(items);
  };

  const renderNavItem = (item: NavItem, depth: number): React.ReactElement => {
    if (item.children && item.children.length > 0) {
      const isExpanded = expandedGroups[item.id] || !!searchQuery.trim();
      return (
        <div key={item.id}>
          <button
            className={`nav-group-header ${depth > 0 ? 'nav-group-header-nested' : ''}`}
            onClick={() => {
              toggleGroup(item.id);
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className="material-symbols-outlined nav-icon">
                {isExpanded ? 'folder_open' : item.icon}
              </span>
              {item.label}
            </span>
            <span
              className="material-symbols-outlined chevron-icon"
              style={{
                fontSize: 16,
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease',
              }}
            >
              expand_more
            </span>
          </button>
          <div className={`nav-group-children ${isExpanded ? 'expanded' : ''}`}>
            {item.children.map((child) => renderNavItem(child, depth + 1))}
          </div>
        </div>
      );
    }

    return (
      <button
        key={item.id}
        className={`nav-item ${depth > 0 ? 'nav-item-nested' : ''} ${activePage === item.id ? 'active' : ''
          }`}
        onClick={() => onNavigate(item.id)}
      >
        <span className="material-symbols-outlined nav-icon">{item.icon}</span>
        {item.label}
      </button>
    );
  };

  const filteredItems = filterItems(NAV_ITEMS);

  return (
    <aside
      className={`sidebar ${isDark ? 'dark' : ''} ${isResizing ? 'resizing' : ''} ${isMobileOpen ? 'mobile-open' : ''
        }`}
      style={{
        width: sidebarWidth,
        minWidth: sidebarWidth,
        maxWidth: sidebarWidth,
        flexShrink: 0,
        position: 'relative',
      }}
    >
      {/* Bottom Sheet Pull Handle (visible on mobile) */}
      <div className="bottom-sheet-handle-wrapper" onClick={onCloseMobile}>
        <div className="bottom-sheet-handle" />
      </div>

      {/* Header with UX4G Logo asset */}
      <div className="sidebar-header">
        <div
          className="sidebar-logo-img-wrapper"
          onClick={() => onNavigate('introduction')}
          style={{ cursor: 'pointer' }}
        >
          <img
            src="/ux4g_logo.svg"
            alt="UX4G Logo"
            className="sidebar-logo-img"
            style={{ height: 28, width: 'auto', display: 'block' }}
          />
        </div>
        <button
          className="theme-toggle-btn"
          onClick={onToggleTheme}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className="material-symbols-outlined theme-toggle-icon">
            {isDark ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
      </div>

      {/* Search */}
      <div className="sidebar-search">
        <div className="search-wrapper">
          <span className="material-symbols-outlined search-icon" style={{ fontSize: 18 }}>
            search
          </span>
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {filteredItems.map((item) => renderNavItem(item, 0))}
      </nav>

      {/* Resizer Handle */}
      <div
        className="sidebar-resizer"
        onMouseDown={startResizing}
        onDoubleClick={handleResetWidth}
        title="Drag to resize sidebar (Double click to reset)"
      />
    </aside>
  );
};

export default Sidebar;
