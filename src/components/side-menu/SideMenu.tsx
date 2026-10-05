import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
  Modal,
  Animated,
  Dimensions,
  StyleProp,
  ViewStyle,
  TextStyle,
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
  Easing,
  Image,
} from 'react-native';
import { UX4GColors } from '../../foundation/colors';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { Ux4gIcons, Ux4gIconName } from '../../foundation/icons';

// ─── INTERFACES & TYPES ──────────────────────────────────────────────────────

export type Ux4gSideMenuVariant =
  | 'standard'
  | 'citizen'
  | 'department-services'
  | 'department-switcher'
  | 'mailbox'
  | 'profile-summary';

export type Ux4gSideMenuHeaderVariant =
  | 'standard'
  | 'user'
  | 'department'
  | 'centered-profile';

export interface Ux4gSideMenuItem {
  /** Unique key for the item */
  key: string;
  /** Display label */
  label: string;
  /** Optional secondary subtitle text under label */
  subtitle?: string;
  /** Icon name from Ux4gIcons, ReactNode, or render function */
  icon?: Ux4gIconName | React.ReactNode | ((isActive: boolean, color: string) => React.ReactNode);
  /** Badge counter or text tag on the right (e.g. 3, 8, 9) */
  badge?: number | string;
  /** Background color of the badge */
  badgeColor?: string;
  /** Text color of the badge */
  badgeTextColor?: string;
  /** Status tag/pill text (e.g. '3 applications pending') */
  statusTag?: string;
  /** Background color of the status tag pill */
  statusTagBgColor?: string;
  /** Text color of the status tag pill */
  statusTagTextColor?: string;
  /** Initials or short text avatar box instead of an icon (e.g. 'RD', 'TD') */
  avatarText?: string;
  /** Background color of the item avatar box */
  avatarBgColor?: string;
  /** Text color of the item avatar box */
  avatarTextColor?: string;
  /** Shows a checkmark icon on the right side if true */
  isCheckmark?: boolean;
  /** Render this item as a styled colored action text link (e.g. 'Customize inbox') */
  isActionLink?: boolean;
  /** Color of the action link text */
  actionLinkColor?: string;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Press handler for this specific item */
  onPress?: () => void;
  /** Nested child items (sub-navigation tree) */
  children?: Ux4gSideMenuItem[];
  /** Whether child sub-items are expanded by default */
  defaultExpanded?: boolean;
  /** Accessibility label for screen readers */
  accessibilityLabel?: string;
  /** Test identifier */
  testID?: string;
}

export interface Ux4gSideMenuSection {
  /** Optional key for the section */
  key?: string;
  /** Section title header (e.g. 'SERVICES', 'WORKSPACE', 'MAILBOX', 'FOLDERS', 'ACCOUNT') */
  title?: string;
  /** List of items in this section */
  items: Ux4gSideMenuItem[];
}

export interface Ux4gSideMenuUser {
  /** Full user display name (e.g. 'Ramesh Kumar') */
  name: string;
  /** Role, email, or secondary subtitle (e.g. 'Citizen' or 'ramesh.kumar@gov.in') */
  roleOrEmail?: string;
  /** Alternate subtitle property */
  subtitle?: string;
  /** Initials text for avatar circle (e.g. 'RK') */
  avatarText?: string;
  /** Remote image URL for avatar */
  avatarUrl?: string;
  /** Background color for avatar circle */
  avatarBgColor?: string;
  /** Text color for avatar initials */
  avatarTextColor?: string;
}

export interface Ux4gSideMenuProfileSummary {
  /** Full user display name (e.g. 'Ramesh Kumar') */
  name: string;
  /** Role designation (e.g. 'Citizen') */
  role?: string;
  /** Meta information (e.g. '12 applications · 3 actions required') */
  metaInfo?: string;
  /** Initials text for large centered avatar (e.g. 'RK') */
  avatarText?: string;
  /** Remote image URL for avatar */
  avatarUrl?: string;
  /** Background color for avatar circle */
  avatarBgColor?: string;
  /** Text color for avatar initials */
  avatarTextColor?: string;
  /** Button label for profile action (default: 'View profile') */
  actionLabel?: string;
  /** Press callback for the profile action button */
  onActionPress?: () => void;
}

export interface Ux4gSideMenuActionCard {
  /** Optional section tag or header (default: 'ACTION REQUIRED') */
  tag?: string;
  /** Callout title (e.g. 'Verify your Aadhaar') */
  title: string;
  /** Description text */
  description: string;
  /** Button action label (e.g. 'Verify now') */
  buttonText: string;
  /** Button press handler */
  onButtonPress?: () => void;
  /** Card background color */
  backgroundColor?: string;
  /** Button background color */
  buttonColor?: string;
  /** Button text color */
  buttonTextColor?: string;
}

export interface Ux4gSideMenuFooterBranding {
  /** Organization or department title (e.g. 'Revenue Department') */
  title?: string;
  /** Subtitle text (e.g. 'Government of India' or 'Kanpur division') */
  subtitle?: string;
  /** Emblem logo icon or custom element */
  logo?: React.ReactNode | Ux4gIconName;
  /** Press handler for footer branding */
  onPress?: () => void;
}

export interface Ux4gSideMenuProps {
  /** Controls open / closed state of the drawer */
  isOpen: boolean;
  /** Callback when drawer requests closing */
  onClose: () => void;
  /** Pre-configured design system layout variant */
  variant?: Ux4gSideMenuVariant;
  /** Open direction: 'left' (default, left to right) or 'right' (right to left) */
  position?: 'left' | 'right';
  /** Custom width of the drawer panel (default: responsive 80% up to 340dp) */
  width?: number | string;

  // Header Props
  /** Style variant of the header: 'standard' | 'user' | 'department' | 'centered-profile' */
  headerVariant?: Ux4gSideMenuHeaderVariant;
  /** Organization or department title (default: 'Revenue Department') */
  title?: string;
  /** Subtitle text (default: 'Government of India') */
  subtitle?: string;
  /** Logo icon name or custom ReactNode (default: National Emblem logo) */
  logo?: React.ReactNode | Ux4gIconName;
  /** Whether to show the top close 'X' button (default: true) */
  showCloseButton?: boolean;
  /** Custom header component to replace default header */
  customHeader?: React.ReactNode;

  /** User profile information for 'user' header variant */
  user?: Ux4gSideMenuUser;
  /** Centered profile summary header data for 'centered-profile' header variant */
  profileSummary?: Ux4gSideMenuProfileSummary;

  // Search Props
  /** Whether to display the search input bar (default: true for standard, false for others unless set) */
  showSearch?: boolean;
  /** Placeholder text for the search input (default: 'Search for...') */
  searchPlaceholder?: string;
  /** Controlled search query */
  searchQuery?: string;
  /** Search query change handler */
  onSearchChange?: (query: string) => void;
  /** Whether to auto-filter menu items when typing in search bar (default: true) */
  autoFilterOnSearch?: boolean;

  // Sections & Items
  /** Grouped sections of navigation items */
  sections?: Ux4gSideMenuSection[];
  /** Flat list of navigation items (used if sections are not provided) */
  items?: Ux4gSideMenuItem[];
  /** Currently selected item key */
  selectedKey?: string;
  /** Default selected item key for uncontrolled selection */
  defaultSelectedKey?: string;
  /** Callback triggered when any item is pressed */
  onItemPress?: (item: Ux4gSideMenuItem, sectionIndex?: number) => void;

  // Action Callout Card
  /** Callout banner card (e.g. 'ACTION REQUIRED: Verify your Aadhaar') */
  actionCard?: Ux4gSideMenuActionCard;

  // Footer Props
  /** Footer navigation items */
  footerItems?: Ux4gSideMenuItem[];
  /** Whether to show the default Sign out item in footer */
  showSignOut?: boolean;
  /** Label for the default sign out item (default: 'Sign out') */
  signOutLabel?: string;
  /** Callback when Sign out is pressed */
  onSignOut?: () => void;
  /** Bottom organization branding block (e.g. National Emblem + Revenue Department) */
  footerBranding?: Ux4gSideMenuFooterBranding;
  /** Custom footer component */
  customFooter?: React.ReactNode;

  // Appearance & Theming
  /** Background color of the drawer panel */
  backgroundColor?: string;
  /** Background color for selected / active item (default: neutral100 or primary50) */
  activeItemBackgroundColor?: string;
  /** Color for active item text and icon */
  activeItemColor?: string;
  /** Color for inactive item text and icon */
  inactiveItemColor?: string;
  /** Background color for the backdrop scrim (default: 'rgba(0, 0, 0, 0.5)') */
  backdropColor?: string;
  /** Backdrop target opacity (default: 0.5) */
  backdropOpacity?: number;
  /** Whether pressing the backdrop closes the drawer (default: true) */
  closeOnBackdropPress?: boolean;
  /** Whether to wrap content inside SafeAreaView (default: true) */
  useSafeArea?: boolean;
  /** Elevation / shadow depth (default: 16) */
  elevation?: number;

  // Custom Styles
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  searchContainerStyle?: StyleProp<ViewStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  activeItemStyle?: StyleProp<ViewStyle>;

  /** Test identifier */
  testID?: string;
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export const Ux4gSideMenu: React.FC<Ux4gSideMenuProps> = ({
  isOpen,
  onClose,
  variant,
  position = 'left',
  width,
  headerVariant: explicitHeaderVariant,
  title: explicitTitle,
  subtitle: explicitSubtitle,
  logo: explicitLogo,
  showCloseButton = true,
  customHeader,
  user: explicitUser,
  profileSummary: explicitProfileSummary,
  showSearch: explicitShowSearch,
  searchPlaceholder = 'Search for...',
  searchQuery: controlledSearch,
  onSearchChange,
  autoFilterOnSearch = true,
  sections: customSections,
  items: flatItems,
  selectedKey: controlledSelectedKey,
  defaultSelectedKey,
  onItemPress,
  actionCard: explicitActionCard,
  footerItems: explicitFooterItems,
  showSignOut: explicitShowSignOut,
  signOutLabel = 'Sign out',
  onSignOut,
  footerBranding: explicitFooterBranding,
  customFooter,
  backgroundColor,
  activeItemBackgroundColor,
  activeItemColor,
  inactiveItemColor,
  backdropColor = 'rgba(0, 0, 0, 0.5)',
  backdropOpacity = 0.5,
  closeOnBackdropPress = true,
  useSafeArea = true,
  elevation = 16,
  style,
  contentContainerStyle,
  headerStyle,
  searchContainerStyle,
  itemStyle,
  activeItemStyle,
  testID = 'ux4g-side-menu',
}) => {
  const theme = useUx4gTheme();
  const { colors } = theme;

  // ─── RESOLVE PRESET DEFAULTS ACCORDING TO VARIANT ──────────────────────────
  const resolvedHeaderVariant: Ux4gSideMenuHeaderVariant = useMemo(() => {
    if (explicitHeaderVariant) return explicitHeaderVariant;
    if (explicitProfileSummary || variant === 'profile-summary') return 'centered-profile';
    if (explicitUser || variant === 'citizen' || variant === 'mailbox') return 'user';
    if (variant === 'department-switcher') return 'department';
    return 'standard';
  }, [explicitHeaderVariant, explicitProfileSummary, explicitUser, variant]);

  const resolvedTitle = useMemo(() => {
    if (explicitTitle !== undefined) return explicitTitle;
    if (variant === 'department-switcher') return 'Departments';
    return 'Revenue Department';
  }, [explicitTitle, variant]);

  const resolvedSubtitle = useMemo(() => {
    if (explicitSubtitle !== undefined) return explicitSubtitle;
    if (variant === 'department-switcher') return 'Choose a department to work in.';
    if (variant === 'department-services' || variant === 'mailbox') return 'Kanpur division';
    return 'Government of India';
  }, [explicitSubtitle, variant]);

  const resolvedLogo = explicitLogo !== undefined ? explicitLogo : 'national-emblem-logo';

  const resolvedUser: Ux4gSideMenuUser | undefined = useMemo(() => {
    if (explicitUser) return explicitUser;
    if (variant === 'citizen') {
      return {
        name: 'Ramesh Kumar',
        roleOrEmail: 'Citizen',
        avatarText: 'RK',
        avatarBgColor: '#EDE9FE',
        avatarTextColor: UX4GColors.primary600,
      };
    }
    if (variant === 'mailbox') {
      return {
        name: 'Ramesh Kumar',
        roleOrEmail: 'ramesh.kumar@gov.in',
        avatarText: 'RK',
        avatarBgColor: '#EDE9FE',
        avatarTextColor: UX4GColors.primary600,
      };
    }
    return undefined;
  }, [explicitUser, variant]);

  const resolvedProfileSummary: Ux4gSideMenuProfileSummary | undefined = useMemo(() => {
    if (explicitProfileSummary) return explicitProfileSummary;
    if (variant === 'profile-summary') {
      return {
        name: 'Ramesh Kumar',
        role: 'Citizen',
        metaInfo: '12 applications · 3 actions required',
        avatarText: 'RK',
        avatarBgColor: '#EDE9FE',
        avatarTextColor: UX4GColors.primary600,
        actionLabel: 'View profile',
      };
    }
    return undefined;
  }, [explicitProfileSummary, variant]);

  const resolvedShowSearch = useMemo(() => {
    if (explicitShowSearch !== undefined) return explicitShowSearch;
    // Default search bar on standard variant only
    return !variant || variant === 'standard';
  }, [explicitShowSearch, variant]);

  const resolvedActionCard = useMemo(() => {
    if (explicitActionCard) return explicitActionCard;
    if (variant === 'department-services') {
      return {
        tag: 'ACTION REQUIRED',
        title: 'Verify your Aadhaar',
        description: 'Complete identity verification to continue.',
        buttonText: 'Verify now',
      };
    }
    return undefined;
  }, [explicitActionCard, variant]);

  const resolvedFooterBranding = useMemo(() => {
    if (explicitFooterBranding !== undefined) return explicitFooterBranding;
    if (variant === 'citizen') {
      return {
        title: 'Revenue Department',
        subtitle: 'Government of India',
        logo: 'national-emblem-logo',
      };
    }
    if (variant === 'mailbox') {
      return {
        title: 'Revenue Department',
        subtitle: 'Kanpur division',
        logo: 'national-emblem-logo',
      };
    }
    return undefined;
  }, [explicitFooterBranding, variant]);

  const resolvedFooterItems = useMemo(() => {
    if (explicitFooterItems) return explicitFooterItems;
    if (variant === 'department-switcher') {
      return [
        {
          key: 'request-access',
          label: 'Request department access',
          icon: 'add',
        },
        {
          key: 'settings',
          label: 'Settings',
          icon: 'more-vert',
        },
        {
          key: 'help-support',
          label: 'Help & support',
          icon: 'help',
        },
      ];
    }
    if (variant === 'mailbox') {
      return [
        {
          key: 'inbox-settings',
          label: 'Inbox settings',
          icon: 'more-vert',
        },
      ];
    }
    return undefined;
  }, [explicitFooterItems, variant]);

  const resolvedShowSignOut = useMemo(() => {
    if (explicitShowSignOut !== undefined) return explicitShowSignOut;
    if (variant === 'department-switcher' || variant === 'department-services' || variant === 'mailbox') {
      return false;
    }
    return true;
  }, [explicitShowSignOut, variant]);

  // Default initial key
  const resolvedDefaultKey = useMemo(() => {
    if (defaultSelectedKey !== undefined) return defaultSelectedKey;
    if (variant === 'department-switcher') return 'dept-revenue';
    if (variant === 'mailbox') return 'inbox';
    if (variant === 'citizen') return 'my-applications';
    return 'dashboard';
  }, [defaultSelectedKey, variant]);

  // Screen dimensions
  const screenWidth = Dimensions.get('window').width;
  const resolvedDrawerWidth =
    typeof width === 'number'
      ? width
      : typeof width === 'string' && width.endsWith('%')
      ? (screenWidth * parseFloat(width)) / 100
      : Math.min(screenWidth * 0.84, 340);

  // Animation values
  const slideAnim = useRef(
    new Animated.Value(position === 'left' ? -resolvedDrawerWidth : resolvedDrawerWidth)
  ).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Internal state for selection & search
  const [internalSelectedKey, setInternalSelectedKey] = useState<string>(resolvedDefaultKey);
  const currentSelectedKey =
    controlledSelectedKey !== undefined ? controlledSelectedKey : internalSelectedKey;

  const [internalSearch, setInternalSearch] = useState<string>('');
  const currentSearch = controlledSearch !== undefined ? controlledSearch : internalSearch;

  // Accordion expanded state map
  const [expandedKeys, setExpandedKeys] = useState<Record<string, boolean>>({
    applications: true,
  });

  // Color resolution with Dark Mode support
  const resolvedBgColor =
    backgroundColor ?? (theme.isDark ? UX4GColors.neutral900 : colors.surface);
  const resolvedActiveBg =
    activeItemBackgroundColor ??
    (theme.isDark ? `${UX4GColors.primary400}22` : UX4GColors.neutral100);
  const resolvedActiveFg =
    activeItemColor ?? (theme.isDark ? UX4GColors.primary300 : UX4GColors.neutral1000black);
  const resolvedInactiveFg =
    inactiveItemColor ?? (theme.isDark ? UX4GColors.neutral400 : UX4GColors.neutral800);
  const resolvedBorderColor = theme.isDark ? UX4GColors.neutral700 : `${UX4GColors.neutral400}33`;
  const resolvedSectionHeaderColor = theme.isDark ? UX4GColors.neutral400 : UX4GColors.neutral600;

  // Modal mount lifecycle state
  const [isModalMounted, setIsModalMounted] = useState<boolean>(isOpen);

  // Manage buttery smooth drawer slide animation on isOpen changes
  useEffect(() => {
    const offScreenPosition = position === 'left' ? -resolvedDrawerWidth : resolvedDrawerWidth;

    if (isOpen) {
      setIsModalMounted(true);
      slideAnim.setValue(offScreenPosition);
      fadeAnim.setValue(0);

      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 280,
          easing: Easing.bezier(0.16, 1, 0.3, 1),
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: backdropOpacity,
          duration: 250,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
      ]).start();
    } else if (isModalMounted) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: offScreenPosition,
          duration: 220,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]).start(({ finished }) => {
        if (finished) {
          setIsModalMounted(false);
        }
      });
    }
  }, [isOpen, position, resolvedDrawerWidth, backdropOpacity]);

  // Toggle item accordion expansion
  const toggleAccordion = (key: string) => {
    setExpandedKeys((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Handle Search Input
  const handleSearchChange = (text: string) => {
    if (controlledSearch === undefined) {
      setInternalSearch(text);
    }
    if (onSearchChange) {
      onSearchChange(text);
    }
  };

  // Preset Sections Mapping
  const defaultSections: Ux4gSideMenuSection[] = useMemo(() => {
    if (variant === 'citizen') {
      return [
        {
          key: 'main-links',
          items: [
            {
              key: 'my-applications',
              label: 'My applications',
              icon: 'applications',
            },
            {
              key: 'my-documents',
              label: 'My documents',
              icon: 'layers',
            },
            {
              key: 'notifications',
              label: 'Notifications',
              icon: 'alerts',
              badge: 3,
              badgeColor: UX4GColors.primary600,
              badgeTextColor: UX4GColors.neutral0,
            },
            {
              key: 'profile-settings',
              label: 'Profile & settings',
              icon: 'account-circle',
            },
            {
              key: 'help-support',
              label: 'Help & support',
              icon: 'help',
            },
          ],
        },
      ];
    }

    if (variant === 'department-services') {
      return [
        {
          key: 'services-section',
          title: 'SERVICES',
          items: [
            {
              key: 'dashboard',
              label: 'Dashboard',
              icon: 'dashboard',
            },
            {
              key: 'applications',
              label: 'Applications',
              icon: 'applications',
              children: [
                {
                  key: 'applications-new',
                  label: 'New applications',
                },
                {
                  key: 'applications-under-review',
                  label: 'Under review',
                },
                {
                  key: 'applications-approved',
                  label: 'Approved applications',
                },
              ],
            },
            {
              key: 'inbox',
              label: 'Inbox',
              icon: 'inbox',
              badge: 8,
              badgeColor: UX4GColors.primary600,
              badgeTextColor: UX4GColors.neutral0,
            },
          ],
        },
        {
          key: 'workspace-section',
          title: 'WORKSPACE',
          items: [
            {
              key: 'priority-applications',
              label: 'Priority applications',
              icon: 'priority',
            },
            {
              key: 'archive',
              label: 'Archive',
              icon: 'archive',
            },
          ],
        },
      ];
    }

    if (variant === 'department-switcher') {
      return [
        {
          key: 'departments-list',
          items: [
            {
              key: 'dept-revenue',
              label: 'Revenue Department',
              subtitle: 'Current department',
              avatarText: 'RD',
              avatarBgColor: '#EDE9FE',
              avatarTextColor: UX4GColors.primary600,
              isCheckmark: true,
            },
            {
              key: 'dept-transport',
              label: 'Transport Department',
              subtitle: 'transport.up.gov.in',
              avatarText: 'TD',
              avatarBgColor: '#EDE9FE',
              avatarTextColor: UX4GColors.primary600,
              statusTag: '3 applications pending',
              statusTagBgColor: '#FFEDD5',
              statusTagTextColor: '#9A3412',
            },
          ],
        },
      ];
    }

    if (variant === 'mailbox') {
      return [
        {
          key: 'mailbox-section',
          title: 'MAILBOX',
          items: [
            {
              key: 'inbox',
              label: 'Inbox',
              icon: 'inbox',
              badge: 9,
              badgeColor: UX4GColors.primary600,
              badgeTextColor: UX4GColors.neutral0,
            },
            {
              key: 'assigned-to-me',
              label: 'Assigned to me',
              icon: 'account-circle',
            },
          ],
        },
        {
          key: 'folders-section',
          title: 'FOLDERS',
          items: [
            {
              key: 'sent',
              label: 'Sent',
              icon: 'send',
            },
            {
              key: 'drafts',
              label: 'Drafts',
              icon: 'drafts',
            },
            {
              key: 'archive',
              label: 'Archive',
              icon: 'archive',
            },
            {
              key: 'rejected-applications',
              label: 'Rejected applications',
              icon: 'priority',
            },
            {
              key: 'customize-inbox',
              label: 'Customize inbox',
              isActionLink: true,
              actionLinkColor: UX4GColors.primary600,
            },
          ],
        },
      ];
    }

    if (variant === 'profile-summary') {
      return [
        {
          key: 'account-section',
          title: 'ACCOUNT',
          items: [
            {
              key: 'profile-settings',
              label: 'Profile & settings',
              icon: 'account-circle',
            },
            {
              key: 'saved-items',
              label: 'Saved items',
              icon: 'layers',
            },
          ],
        },
        {
          key: 'applications-section',
          title: 'APPLICATIONS',
          items: [
            {
              key: 'my-applications',
              label: 'My applications',
              icon: 'applications',
            },
            {
              key: 'track-application',
              label: 'Track an application',
              icon: 'track',
            },
          ],
        },
        {
          key: 'support-section',
          title: 'SUPPORT',
          items: [
            {
              key: 'help-support',
              label: 'Help & support',
              icon: 'help',
            },
          ],
        },
      ];
    }

    // Default Standard Government Menu
    return [
      {
        key: 'services-section',
        title: 'SERVICES',
        items: [
          {
            key: 'dashboard',
            label: 'Dashboard',
            icon: 'dashboard',
          },
          {
            key: 'applications',
            label: 'Applications',
            icon: 'applications',
            children: [
              {
                key: 'applications-in-progress',
                label: 'In progress',
                icon: 'applications',
              },
              {
                key: 'applications-approved',
                label: 'Approved',
                icon: 'applications',
              },
            ],
          },
          {
            key: 'notifications',
            label: 'Notifications',
            icon: 'alerts',
            badge: 3,
            badgeColor: UX4GColors.primary600,
            badgeTextColor: UX4GColors.neutral0,
          },
        ],
      },
      {
        key: 'account-section',
        title: 'ACCOUNT',
        items: [
          {
            key: 'my-account',
            label: 'My account',
            icon: 'account-circle',
          },
          {
            key: 'help-support',
            label: 'Help & support',
            icon: 'help',
          },
        ],
      },
    ];
  }, [variant]);

  // Resolve active sections list
  const activeSections = useMemo(() => {
    if (customSections && customSections.length > 0) {
      return customSections;
    }
    if (flatItems && flatItems.length > 0) {
      return [{ key: 'main-section', items: flatItems }];
    }
    return defaultSections;
  }, [customSections, flatItems, defaultSections]);

  // Filter sections by search query if enabled
  const filteredSections = useMemo(() => {
    if (!autoFilterOnSearch || !currentSearch.trim()) {
      return activeSections;
    }
    const query = currentSearch.toLowerCase().trim();

    return activeSections
      .map((section) => {
        const matchingItems = section.items
          .map((item) => {
            const matchesParent =
              item.label.toLowerCase().includes(query) ||
              (item.subtitle && item.subtitle.toLowerCase().includes(query));
            const matchingChildren = item.children?.filter((child) =>
              child.label.toLowerCase().includes(query)
            );

            if (matchesParent) {
              return item;
            }
            if (matchingChildren && matchingChildren.length > 0) {
              return { ...item, children: matchingChildren };
            }
            return null;
          })
          .filter(Boolean) as Ux4gSideMenuItem[];

        return { ...section, items: matchingItems };
      })
      .filter((section) => section.items.length > 0);
  }, [activeSections, autoFilterOnSearch, currentSearch]);

  // Item click handler
  const handleItemPress = (item: Ux4gSideMenuItem, sectionIndex?: number) => {
    if (item.disabled) return;

    if (item.children && item.children.length > 0) {
      toggleAccordion(item.key);
      return;
    }

    if (controlledSelectedKey === undefined) {
      setInternalSelectedKey(item.key);
    }

    if (item.onPress) {
      item.onPress();
    }
    if (onItemPress) {
      onItemPress(item, sectionIndex);
    }
  };

  // Helper to render icon
  const renderIcon = (
    icon: Ux4gSideMenuItem['icon'],
    isActive: boolean,
    iconColor: string,
    size = 20
  ) => {
    if (!icon) return null;

    if (typeof icon === 'function') {
      return icon(isActive, iconColor);
    }

    if (typeof icon === 'string') {
      const camelName = icon.replace(/-([a-z])/g, (g) =>
        g[1].toUpperCase()
      ) as keyof typeof Ux4gIcons;
      const IconComponent = Ux4gIcons[camelName] || Ux4gIcons[icon as keyof typeof Ux4gIcons];
      if (IconComponent) {
        return <IconComponent size={size} color={iconColor} />;
      }
    }

    if (React.isValidElement(icon)) {
      return icon;
    }

    return null;
  };

  // Helper to render logo
  const renderEmblemLogo = (targetLogo: React.ReactNode | Ux4gIconName | undefined, size = 32) => {
    if (!targetLogo) return null;
    if (React.isValidElement(targetLogo)) {
      return targetLogo;
    }
    if (typeof targetLogo === 'string') {
      const camelName = targetLogo.replace(/-([a-z])/g, (g) =>
        g[1].toUpperCase()
      ) as keyof typeof Ux4gIcons;
      const LogoComp = Ux4gIcons[camelName] || Ux4gIcons[targetLogo as keyof typeof Ux4gIcons];
      if (LogoComp) {
        return <LogoComp size={size} color={resolvedActiveFg} />;
      }
    }
    return <Ux4gIcons.nationalEmblemLogo size={size} />;
  };

  // ─── RENDER A SINGLE MENU ITEM ─────────────────────────────────────────────
  const renderMenuItem = (
    item: Ux4gSideMenuItem,
    sectionIndex: number,
    isSubItem = false
  ) => {
    const isSelected = currentSelectedKey === item.key;
    const hasChildren = !!(item.children && item.children.length > 0);
    const isExpanded = expandedKeys[item.key] || false;
    const fgColor = isSelected ? resolvedActiveFg : resolvedInactiveFg;

    // Action Link rendering (e.g. 'Customize inbox')
    if (item.isActionLink) {
      return (
        <Pressable
          key={item.key}
          onPress={() => handleItemPress(item, sectionIndex)}
          accessibilityRole="button"
          accessibilityLabel={item.label}
          testID={item.testID || `${testID}-item-${item.key}`}
          style={({ pressed }) => [
            styles.actionLinkPressable,
            pressed && { opacity: 0.7 },
            itemStyle,
          ]}
        >
          <Text
            style={[
              styles.actionLinkLabel,
              { color: item.actionLinkColor || UX4GColors.primary600 },
            ]}
          >
            {item.label}
          </Text>
        </Pressable>
      );
    }

    // Has Avatar or Subtitle or Complex Card layout (e.g. Department item)
    const isComplexItem = !!item.avatarText || !!item.subtitle || !!item.statusTag;

    return (
      <View key={item.key} style={styles.itemWrapper}>
        <Pressable
          onPress={() => handleItemPress(item, sectionIndex)}
          disabled={item.disabled}
          accessibilityRole="button"
          accessibilityState={{ selected: isSelected, disabled: !!item.disabled }}
          accessibilityLabel={item.accessibilityLabel || item.label}
          testID={item.testID || `${testID}-item-${item.key}`}
          style={({ pressed }) => [
            styles.menuItemPressable,
            isComplexItem && styles.complexItemPressable,
            isSubItem && styles.subItemPressable,
            isSelected && [
              styles.selectedMenuItem,
              { backgroundColor: resolvedActiveBg },
              activeItemStyle,
            ],
            pressed && !isSelected && { backgroundColor: resolvedBorderColor },
            item.disabled && styles.disabledItem,
            itemStyle,
          ]}
        >
          {/* Avatar Box (e.g. 'RD', 'TD') */}
          {item.avatarText ? (
            <View
              style={[
                styles.itemAvatarBox,
                {
                  backgroundColor: item.avatarBgColor || '#EDE9FE',
                },
              ]}
            >
              <Text
                style={[
                  styles.itemAvatarText,
                  { color: item.avatarTextColor || UX4GColors.primary600 },
                ]}
              >
                {item.avatarText}
              </Text>
            </View>
          ) : item.icon ? (
            /* Left Icon Slot */
            <View style={styles.itemIconSlot}>
              {renderIcon(item.icon, isSelected, fgColor, isSubItem ? 18 : 20)}
            </View>
          ) : null}

          {/* Item Text & Subtitle Area */}
          <View style={styles.itemContentArea}>
            <Text
              style={[
                styles.itemLabel,
                { color: fgColor },
                isSelected && styles.selectedItemLabel,
                isSubItem && styles.subItemLabel,
              ]}
              numberOfLines={1}
            >
              {item.label}
            </Text>
            {item.subtitle ? (
              <Text
                style={[
                  styles.itemSubtitle,
                  { color: theme.isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 },
                ]}
                numberOfLines={1}
              >
                {item.subtitle}
              </Text>
            ) : null}

            {/* Status Tag Pill under text (e.g. '3 applications pending') */}
            {item.statusTag ? (
              <View
                style={[
                  styles.statusTagPill,
                  {
                    backgroundColor: item.statusTagBgColor || '#FFEDD5',
                  },
                ]}
              >
                <Text
                  style={[
                    styles.statusTagText,
                    { color: item.statusTagTextColor || '#9A3412' },
                  ]}
                >
                  {item.statusTag}
                </Text>
              </View>
            ) : null}
          </View>

          {/* Right Badge (if present) */}
          {item.badge !== undefined && item.badge !== null && (
            <View
              style={[
                styles.badgeContainer,
                { backgroundColor: item.badgeColor ?? UX4GColors.primary600 },
              ]}
              testID={`${item.testID || item.key}-badge`}
            >
              <Text
                style={[
                  styles.badgeText,
                  { color: item.badgeTextColor ?? UX4GColors.neutral0 },
                ]}
              >
                {String(item.badge)}
              </Text>
            </View>
          )}

          {/* Right Checkmark Icon */}
          {item.isCheckmark && (
            <View style={styles.itemCheckmarkSlot}>
              <Ux4gIcons.check size={18} color={resolvedActiveFg} />
            </View>
          )}

          {/* Right Accordion Chevron (if item has children) */}
          {hasChildren && (
            <View style={styles.accordionChevron}>
              {isExpanded ? (
                <Ux4gIcons.chevronUp size={18} color={resolvedInactiveFg} />
              ) : (
                <Ux4gIcons.chevronDown size={18} color={resolvedInactiveFg} />
              )}
            </View>
          )}
        </Pressable>

        {/* Sub-items Tree with Vertical Connector Line */}
        {hasChildren && isExpanded && (
          <View style={styles.subItemsContainer}>
            {/* Vertical connector line */}
            <View
              style={[
                styles.subTreeVerticalLine,
                { backgroundColor: resolvedBorderColor },
              ]}
            />
            <View style={styles.subItemsList}>
              {item.children!.map((child) =>
                renderMenuItem(child, sectionIndex, true)
              )}
            </View>
          </View>
        )}
      </View>
    );
  };

  // Helper to extract initials from full name
  const getInitials = (name?: string): string => {
    if (!name) return 'U';
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  // ─── RENDER HEADER ─────────────────────────────────────────────────────────
  const renderHeader = () => {
    if (customHeader) {
      return customHeader;
    }

    // Close button element
    const closeBtnElement = showCloseButton ? (
      <Pressable
        onPress={onClose}
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        accessibilityRole="button"
        accessibilityLabel="Close side menu"
        testID={`${testID}-close-btn`}
        style={({ pressed }) => [
          styles.closeButton,
          pressed && { opacity: 0.6, backgroundColor: resolvedBorderColor },
        ]}
      >
        <Ux4gIcons.close size={20} color={resolvedInactiveFg} />
      </Pressable>
    ) : null;

    // 1. User Profile Header Variant (e.g. Ramesh Kumar · Citizen)
    if (resolvedHeaderVariant === 'user' && resolvedUser) {
      return (
        <View
          style={[
            styles.headerContainer,
            { borderBottomColor: resolvedBorderColor },
            headerStyle,
          ]}
        >
          <View style={styles.headerLeftArea}>
            <View
              style={[
                styles.userAvatarCircle,
                { backgroundColor: resolvedUser.avatarBgColor || '#EDE9FE' },
              ]}
            >
              <Text
                style={[
                  styles.userAvatarText,
                  { color: resolvedUser.avatarTextColor || UX4GColors.primary600 },
                ]}
              >
                {resolvedUser.avatarText || getInitials(resolvedUser.name)}
              </Text>
            </View>
            <View style={styles.headerTitlesArea}>
              <Text
                style={[styles.headerTitle, { color: resolvedActiveFg }]}
                numberOfLines={1}
              >
                {resolvedUser.name}
              </Text>
              {resolvedUser.roleOrEmail || resolvedUser.subtitle ? (
                <Text
                  style={[
                    styles.headerSubtitle,
                    { color: resolvedSectionHeaderColor },
                  ]}
                  numberOfLines={1}
                >
                  {resolvedUser.roleOrEmail || resolvedUser.subtitle}
                </Text>
              ) : null}
            </View>
          </View>
          {closeBtnElement}
        </View>
      );
    }

    // 2. Centered Profile Summary Variant (Large Centered Avatar + Stats + View Profile)
    if (resolvedHeaderVariant === 'centered-profile' && resolvedProfileSummary) {
      return (
        <View
          style={[
            styles.centeredProfileHeader,
            { borderBottomColor: resolvedBorderColor },
            headerStyle,
          ]}
        >
          {/* Top-Right Close Button */}
          {showCloseButton && (
            <View style={styles.centeredProfileCloseWrapper}>
              {closeBtnElement}
            </View>
          )}

          {/* Large Centered Avatar */}
          <View
            style={[
              styles.centeredAvatarCircle,
              { backgroundColor: resolvedProfileSummary.avatarBgColor || '#EDE9FE' },
            ]}
          >
            <Text
              style={[
                styles.centeredAvatarText,
                { color: resolvedProfileSummary.avatarTextColor || UX4GColors.primary600 },
              ]}
            >
              {resolvedProfileSummary.avatarText || getInitials(resolvedProfileSummary.name)}
            </Text>
          </View>

          {/* User Name & Role */}
          <Text
            style={[styles.centeredProfileName, { color: resolvedActiveFg }]}
            numberOfLines={1}
          >
            {resolvedProfileSummary.name}
          </Text>
          {resolvedProfileSummary.role ? (
            <Text
              style={[
                styles.centeredProfileRole,
                { color: resolvedSectionHeaderColor },
              ]}
              numberOfLines={1}
            >
              {resolvedProfileSummary.role}
            </Text>
          ) : null}

          {/* Meta Info (e.g. 12 applications · 3 actions required) */}
          {resolvedProfileSummary.metaInfo ? (
            <Text
              style={[
                styles.centeredProfileMeta,
                { color: theme.isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 },
              ]}
              numberOfLines={1}
            >
              {resolvedProfileSummary.metaInfo}
            </Text>
          ) : null}

          {/* View Profile Outline Button */}
          <Pressable
            onPress={resolvedProfileSummary.onActionPress}
            style={({ pressed }) => [
              styles.viewProfileBtn,
              { borderColor: resolvedBorderColor },
              pressed && { backgroundColor: resolvedActiveBg },
            ]}
            accessibilityRole="button"
            accessibilityLabel={resolvedProfileSummary.actionLabel || 'View profile'}
          >
            <Text
              style={[
                styles.viewProfileBtnText,
                { color: resolvedActiveFg },
              ]}
            >
              {resolvedProfileSummary.actionLabel || 'View profile'}
            </Text>
          </Pressable>
        </View>
      );
    }

    // 3. Department Switcher Header Variant (Departments / Choose a department...)
    if (resolvedHeaderVariant === 'department') {
      return (
        <View
          style={[
            styles.departmentHeaderContainer,
            { borderBottomColor: resolvedBorderColor },
            headerStyle,
          ]}
        >
          <View style={styles.headerTitlesArea}>
            <Text
              style={[styles.departmentHeaderTitle, { color: resolvedActiveFg }]}
              numberOfLines={1}
            >
              {resolvedTitle}
            </Text>
            {resolvedSubtitle ? (
              <Text
                style={[
                  styles.departmentHeaderSubtitle,
                  { color: resolvedSectionHeaderColor },
                ]}
                numberOfLines={2}
              >
                {resolvedSubtitle}
              </Text>
            ) : null}
          </View>
          {closeBtnElement}
        </View>
      );
    }

    // 4. Default Standard Organization Header (Emblem Logo + Title + Subtitle)
    return (
      <View
        style={[
          styles.headerContainer,
          { borderBottomColor: resolvedBorderColor },
          headerStyle,
        ]}
      >
        <View style={styles.headerLeftArea}>
          <View style={styles.headerLogoWrapper}>{renderEmblemLogo(resolvedLogo, 32)}</View>
          <View style={styles.headerTitlesArea}>
            <Text
              style={[styles.headerTitle, { color: resolvedActiveFg }]}
              numberOfLines={1}
            >
              {resolvedTitle}
            </Text>
            {resolvedSubtitle ? (
              <Text
                style={[
                  styles.headerSubtitle,
                  { color: resolvedSectionHeaderColor },
                ]}
                numberOfLines={1}
              >
                {resolvedSubtitle}
              </Text>
            ) : null}
          </View>
        </View>
        {closeBtnElement}
      </View>
    );
  };

  // ─── DRAWER CONTENT BODY ───────────────────────────────────────────────────
  const drawerPanel = (
    <Animated.View
      style={[
        styles.drawerContainer,
        {
          width: resolvedDrawerWidth,
          backgroundColor: resolvedBgColor,
          borderColor: resolvedBorderColor,
          transform: [{ translateX: slideAnim }],
          ...(position === 'left' ? { left: 0 } : { right: 0 }),
        },
        Platform.select({
          ios: {
            shadowColor: UX4GColors.neutral1000black,
            shadowOffset: { width: position === 'left' ? 4 : -4, height: 0 },
            shadowOpacity: 0.18,
            shadowRadius: 16,
          },
          android: {
            elevation: elevation,
          },
        }),
        style,
      ]}
      testID={testID}
      accessibilityRole="menu"
    >
      {/* ─── 1. HEADER ──────────────────────────────────────────────────────── */}
      {renderHeader()}

      {/* ─── 2. SEARCH INPUT BAR ────────────────────────────────────────────── */}
      {resolvedShowSearch && (
        <View style={styles.searchSection}>
          <View
            style={[
              styles.searchBarContainer,
              {
                borderColor: resolvedBorderColor,
                backgroundColor: theme.isDark
                  ? UX4GColors.neutral800
                  : UX4GColors.neutral0,
              },
              searchContainerStyle,
            ]}
          >
            <View style={styles.searchIconSlot}>
              <Ux4gIcons.search size={16} color={resolvedSectionHeaderColor} />
            </View>
            <TextInput
              value={currentSearch}
              onChangeText={handleSearchChange}
              placeholder={searchPlaceholder}
              placeholderTextColor={resolvedSectionHeaderColor}
              style={[
                styles.searchInput,
                { color: resolvedActiveFg },
              ]}
              testID={`${testID}-search-input`}
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="search"
            />
            {currentSearch.length > 0 && (
              <Pressable
                onPress={() => handleSearchChange('')}
                accessibilityLabel="Clear search"
                style={styles.searchClearBtn}
              >
                <Ux4gIcons.close size={14} color={resolvedSectionHeaderColor} />
              </Pressable>
            )}
          </View>
        </View>
      )}

      {/* ─── 3. SCROLLABLE MENU SECTIONS ────────────────────────────────────── */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          contentContainerStyle,
        ]}
      >
        {filteredSections.map((section, sIndex) => (
          <View key={section.key || `section-${sIndex}`} style={styles.sectionGroup}>
            {section.title ? (
              <Text
                style={[
                  styles.sectionTitle,
                  { color: resolvedSectionHeaderColor },
                ]}
              >
                {section.title}
              </Text>
            ) : null}

            <View style={styles.sectionItemsList}>
              {section.items.map((item) =>
                renderMenuItem(item, sIndex)
              )}
            </View>
          </View>
        ))}

        {filteredSections.length === 0 && (
          <View style={styles.emptyState}>
            <Text
              style={[
                styles.emptyStateText,
                { color: resolvedSectionHeaderColor },
              ]}
            >
              No matching options found
            </Text>
          </View>
        )}

        {/* Action Callout Card Banner (e.g. Verify your Aadhaar) */}
        {resolvedActionCard && (
          <View
            style={[
              styles.actionCardSection,
              { borderTopColor: resolvedBorderColor },
            ]}
          >
            {resolvedActionCard.tag ? (
              <Text
                style={[
                  styles.sectionTitle,
                  styles.actionCardTag,
                  { color: resolvedSectionHeaderColor },
                ]}
              >
                {resolvedActionCard.tag}
              </Text>
            ) : null}
            <View
              style={[
                styles.actionCardContainer,
                {
                  backgroundColor:
                    resolvedActionCard.backgroundColor ||
                    (theme.isDark ? '#3E2723' : '#FEF3C7'),
                },
              ]}
            >
              <Text
                style={[
                  styles.actionCardTitle,
                  { color: theme.isDark ? '#FDE68A' : '#78350F' },
                ]}
              >
                {resolvedActionCard.title}
              </Text>
              <Text
                style={[
                  styles.actionCardDescription,
                  { color: theme.isDark ? '#F3F4F6' : '#92400E' },
                ]}
              >
                {resolvedActionCard.description}
              </Text>
              <Pressable
                onPress={resolvedActionCard.onButtonPress}
                style={({ pressed }) => [
                  styles.actionCardButton,
                  {
                    backgroundColor:
                      resolvedActionCard.buttonColor || UX4GColors.primary600,
                  },
                  pressed && { opacity: 0.85 },
                ]}
                accessibilityRole="button"
                accessibilityLabel={resolvedActionCard.buttonText}
              >
                <Text
                  style={[
                    styles.actionCardBtnText,
                    {
                      color:
                        resolvedActionCard.buttonTextColor || UX4GColors.neutral0,
                    },
                  ]}
                >
                  {resolvedActionCard.buttonText}
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      </ScrollView>

      {/* ─── 4. FOOTER ──────────────────────────────────────────────────────── */}
      {customFooter ? (
        customFooter
      ) : (
        <View
          style={[
            styles.footerContainer,
            { borderTopColor: resolvedBorderColor },
          ]}
        >
          {/* Footer Navigation Items (e.g. Request access, Settings, Help) */}
          {resolvedFooterItems && resolvedFooterItems.length > 0 && (
            <View style={styles.footerItemsWrapper}>
              {resolvedFooterItems.map((fItem, fIndex) =>
                renderMenuItem(fItem, 999)
              )}
            </View>
          )}

          {/* Sign out button */}
          {resolvedShowSignOut && (
            <Pressable
              onPress={onSignOut || onClose}
              accessibilityRole="button"
              accessibilityLabel={signOutLabel}
              testID={`${testID}-sign-out`}
              style={({ pressed }) => [
                styles.signOutButton,
                pressed && { backgroundColor: resolvedBorderColor },
              ]}
            >
              <View style={styles.signOutIconSlot}>
                <Ux4gIcons.signOut size={20} color={resolvedInactiveFg} />
              </View>
              <Text
                style={[
                  styles.signOutText,
                  { color: resolvedInactiveFg },
                ]}
              >
                {signOutLabel}
              </Text>
            </Pressable>
          )}

          {/* Bottom Branding (e.g. National Emblem + Revenue Department) */}
          {resolvedFooterBranding && (
            <Pressable
              onPress={resolvedFooterBranding.onPress}
              disabled={!resolvedFooterBranding.onPress}
              style={[
                styles.footerBrandingContainer,
                resolvedFooterItems || resolvedShowSignOut ? styles.footerBrandingSpacing : null,
              ]}
            >
              <View style={styles.footerBrandingLogoSlot}>
                {renderEmblemLogo(resolvedFooterBranding.logo, 28)}
              </View>
              <View style={styles.footerBrandingTextSlot}>
                <Text
                  style={[styles.footerBrandingTitle, { color: resolvedActiveFg }]}
                  numberOfLines={1}
                >
                  {resolvedFooterBranding.title || 'Revenue Department'}
                </Text>
                {resolvedFooterBranding.subtitle ? (
                  <Text
                    style={[
                      styles.footerBrandingSubtitle,
                      { color: resolvedSectionHeaderColor },
                    ]}
                    numberOfLines={1}
                  >
                    {resolvedFooterBranding.subtitle}
                  </Text>
                ) : null}
              </View>
            </Pressable>
          )}
        </View>
      )}
    </Animated.View>
  );

  if (!isModalMounted && !isOpen) {
    return null;
  }

  // Return full Modal with Backdrop Scrim
  return (
    <Modal
      transparent
      visible={isModalMounted}
      animationType="none"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={styles.modalOverlay}>
        {/* Backdrop Scrim */}
        <TouchableWithoutFeedback
          onPress={closeOnBackdropPress ? onClose : undefined}
          testID={`${testID}-backdrop`}
        >
          <Animated.View
            style={[
              styles.backdrop,
              {
                backgroundColor: backdropColor,
                opacity: fadeAnim,
              },
            ]}
          />
        </TouchableWithoutFeedback>

        {/* Drawer Panel Container with SafeArea */}
        {useSafeArea ? (
          <SafeAreaView style={styles.safeAreaWrapper}>
            {drawerPanel}
          </SafeAreaView>
        ) : (
          drawerPanel
        )}
      </View>
    </Modal>
  );
};

// ─── ALIAS EXPORT ────────────────────────────────────────────────────────────

/**
 * Ux4gDrawer - Alias for Ux4gSideMenu
 */
export const Ux4gDrawer = Ux4gSideMenu;

// ─── STYLES ──────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    position: 'relative',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  safeAreaWrapper: {
    flex: 1,
  },
  drawerContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    height: '100%',
    flexDirection: 'column',
    overflow: 'hidden',
    borderRightWidth: Platform.OS === 'ios' ? 0.5 : 0,
  },

  // ─── Header Styles ────────────────────────────────────────────────────────
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? ((StatusBar.currentHeight || 28) + 14) : 16,
    paddingBottom: 14,
    borderBottomWidth: 1,
  },
  departmentHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? ((StatusBar.currentHeight || 28) + 14) : 16,
    paddingBottom: 14,
    borderBottomWidth: 1,
  },
  departmentHeaderTitle: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  departmentHeaderSubtitle: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: 3,
    lineHeight: 16,
  },
  headerLeftArea: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  headerLogoWrapper: {
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitlesArea: {
    flex: 1,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  headerSubtitle: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: 2,
  },
  closeButton: {
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 36,
    minHeight: 36,
  },

  // User Header Avatar Circle
  userAvatarCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  userAvatarText: {
    fontSize: 14,
    fontWeight: '700',
  },

  // Centered Profile Header
  centeredProfileHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? ((StatusBar.currentHeight || 28) + 14) : 16,
    paddingBottom: 18,
    borderBottomWidth: 1,
    position: 'relative',
  },
  centeredProfileCloseWrapper: {
    position: 'absolute',
    top: Platform.OS === 'android' ? ((StatusBar.currentHeight || 28) + 10) : 12,
    right: 12,
    zIndex: 10,
  },
  centeredAvatarCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  centeredAvatarText: {
    fontSize: 20,
    fontWeight: '700',
  },
  centeredProfileName: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 2,
  },
  centeredProfileRole: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 4,
  },
  centeredProfileMeta: {
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 12,
  },
  viewProfileBtn: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewProfileBtnText: {
    fontSize: 13,
    fontWeight: '600',
  },

  // ─── Search Bar Styles ────────────────────────────────────────────────────
  searchSection: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 4,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 10,
  },
  searchIconSlot: {
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 0,
    height: '100%',
  },
  searchClearBtn: {
    padding: 4,
    marginLeft: 4,
  },

  // ─── Scrollable Content ───────────────────────────────────────────────────
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionGroup: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.8,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  sectionItemsList: {
    flexDirection: 'column',
  },
  itemWrapper: {
    marginBottom: 3,
  },
  menuItemPressable: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 42,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  complexItemPressable: {
    minHeight: 52,
    paddingVertical: 8,
  },
  subItemPressable: {
    minHeight: 36,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  selectedMenuItem: {
    borderRadius: 8,
  },
  disabledItem: {
    opacity: 0.4,
  },
  itemIconSlot: {
    width: 26,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: 8,
  },
  itemAvatarBox: {
    width: 32,
    height: 32,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  itemAvatarText: {
    fontSize: 12,
    fontWeight: '700',
  },
  itemContentArea: {
    flex: 1,
    justifyContent: 'center',
  },
  itemLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  selectedItemLabel: {
    fontWeight: '600',
  },
  subItemLabel: {
    fontSize: 13,
    fontWeight: '400',
  },
  itemSubtitle: {
    fontSize: 11,
    fontWeight: '400',
    marginTop: 2,
  },
  statusTagPill: {
    alignSelf: 'flex-start',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginTop: 4,
  },
  statusTagText: {
    fontSize: 11,
    fontWeight: '600',
  },
  badgeContainer: {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    includeFontPadding: false,
    textAlign: 'center',
  },
  itemCheckmarkSlot: {
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  accordionChevron: {
    marginLeft: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Action Link item
  actionLinkPressable: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginTop: 4,
  },
  actionLinkLabel: {
    fontSize: 13,
    fontWeight: '600',
  },

  // Sub-items Tree Structure
  subItemsContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    marginTop: 2,
    position: 'relative',
  },
  subTreeVerticalLine: {
    position: 'absolute',
    left: 20,
    top: 4,
    bottom: 8,
    width: 1.5,
    borderRadius: 1,
  },
  subItemsList: {
    flex: 1,
    paddingLeft: 14,
  },

  // Action Callout Card
  actionCardSection: {
    marginTop: 'auto',
    paddingTop: 16,
    borderTopWidth: 1,
    paddingBottom: 8,
  },
  actionCardTag: {
    marginBottom: 10,
  },
  actionCardContainer: {
    borderRadius: 12,
    padding: 16,
  },
  actionCardTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 6,
  },
  actionCardDescription: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 14,
  },
  actionCardButton: {
    borderRadius: 8,
    paddingVertical: 9,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionCardBtnText: {
    fontSize: 13,
    fontWeight: '700',
  },

  // Empty State
  emptyState: {
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyStateText: {
    fontSize: 13,
  },

  // ─── Footer ───────────────────────────────────────────────────────────────
  footerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
  },
  footerItemsWrapper: {
    marginBottom: 4,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 42,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  signOutIconSlot: {
    width: 26,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: 8,
  },
  signOutText: {
    fontSize: 14,
    fontWeight: '500',
  },

  // Footer Branding (Emblem + Department)
  footerBrandingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  footerBrandingSpacing: {
    marginTop: 8,
  },
  footerBrandingLogoSlot: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerBrandingTextSlot: {
    flex: 1,
    justifyContent: 'center',
  },
  footerBrandingTitle: {
    fontSize: 13,
    fontWeight: '700',
  },
  footerBrandingSubtitle: {
    fontSize: 11,
    fontWeight: '400',
    marginTop: 1,
  },
});
