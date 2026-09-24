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
} from 'react-native';
import { UX4GColors } from '../../foundation/colors';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { Ux4gIcons, Ux4gIconName } from '../../foundation/icons';

// ─── INTERFACES & TYPES ──────────────────────────────────────────────────────

export interface Ux4gSideMenuItem {
  /** Unique key for the item */
  key: string;
  /** Display label */
  label: string;
  /** Icon name from Ux4gIcons, ReactNode, or render function */
  icon?: Ux4gIconName | React.ReactNode | ((isActive: boolean, color: string) => React.ReactNode);
  /** Badge counter or text tag */
  badge?: number | string;
  /** Background color of the badge */
  badgeColor?: string;
  /** Text color of the badge */
  badgeTextColor?: string;
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
  /** Section title header (e.g. 'SERVICES', 'ACCOUNT') */
  title?: string;
  /** List of items in this section */
  items: Ux4gSideMenuItem[];
}

export interface Ux4gSideMenuProps {
  /** Controls open / closed state of the drawer */
  isOpen: boolean;
  /** Callback when drawer requests closing */
  onClose: () => void;
  /** Open direction: 'left' (default, left to right) or 'right' (right to left) */
  position?: 'left' | 'right';
  /** Custom width of the drawer panel (default: responsive 80% up to 340dp) */
  width?: number | string;

  // Header Props
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

  // Search Props
  /** Whether to display the search input bar (default: true) */
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

  // Footer Props
  /** Footer navigation items */
  footerItems?: Ux4gSideMenuItem[];
  /** Whether to show the default Sign out item in footer (default: true) */
  showSignOut?: boolean;
  /** Label for the default sign out item (default: 'Sign out') */
  signOutLabel?: string;
  /** Callback when Sign out is pressed */
  onSignOut?: () => void;
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
  position = 'left',
  width,
  title = 'Revenue Department',
  subtitle = 'Government of India',
  logo = 'national-emblem-logo',
  showCloseButton = true,
  customHeader,
  showSearch = true,
  searchPlaceholder = 'Search for...',
  searchQuery: controlledSearch,
  onSearchChange,
  autoFilterOnSearch = true,
  sections: customSections,
  items: flatItems,
  selectedKey: controlledSelectedKey,
  defaultSelectedKey = 'dashboard',
  onItemPress,
  footerItems,
  showSignOut = true,
  signOutLabel = 'Sign out',
  onSignOut,
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

  // Screen dimensions
  const screenWidth = Dimensions.get('window').width;
  const resolvedDrawerWidth =
    typeof width === 'number'
      ? width
      : typeof width === 'string' && width.endsWith('%')
      ? (screenWidth * parseFloat(width)) / 100
      : Math.min(screenWidth * 0.82, 340);

  // Animation values
  const slideAnim = useRef(
    new Animated.Value(position === 'left' ? -resolvedDrawerWidth : resolvedDrawerWidth)
  ).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Internal state for controlled/uncontrolled selection & search
  const [internalSelectedKey, setInternalSelectedKey] = useState<string>(defaultSelectedKey);
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
  const resolvedSectionHeaderColor = theme.isDark ? UX4GColors.neutral500 : UX4GColors.neutral600;

  // Manage drawer slide animation on isOpen changes
  useEffect(() => {
    if (isOpen) {
      Animated.parallel([
        Animated.spring(slideAnim, {
          toValue: 0,
          useNativeDriver: true,
          bounciness: 0,
          speed: 16,
        }),
        Animated.timing(fadeAnim, {
          toValue: backdropOpacity,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: position === 'left' ? -resolvedDrawerWidth : resolvedDrawerWidth,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
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

  // Default menu structure matching the reference image exactly
  const defaultSections: Ux4gSideMenuSection[] = useMemo(
    () => [
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
    ],
    []
  );

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
            const matchesParent = item.label.toLowerCase().includes(query);
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
  const renderHeaderLogo = () => {
    if (!logo) return null;
    if (React.isValidElement(logo)) {
      return logo;
    }
    if (typeof logo === 'string') {
      const camelName = logo.replace(/-([a-z])/g, (g) =>
        g[1].toUpperCase()
      ) as keyof typeof Ux4gIcons;
      const LogoComp = Ux4gIcons[camelName] || Ux4gIcons[logo as keyof typeof Ux4gIcons];
      if (LogoComp) {
        return <LogoComp size={34} color={resolvedActiveFg} />;
      }
    }
    return <Ux4gIcons.nationalEmblemLogo size={34} />;
  };

  // Render a Single Item (Parent or Standalone)
  const renderMenuItem = (
    item: Ux4gSideMenuItem,
    sectionIndex: number,
    isSubItem = false
  ) => {
    const isSelected = currentSelectedKey === item.key;
    const hasChildren = !!(item.children && item.children.length > 0);
    const isExpanded = expandedKeys[item.key] || false;
    const fgColor = isSelected ? resolvedActiveFg : resolvedInactiveFg;

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
            isSubItem && styles.subItemPressable,
            isSelected && [
              styles.selectedMenuItem,
              { backgroundColor: resolvedActiveBg },
              activeItemStyle,
            ],
            pressed && !isSelected && { backgroundColor: `${resolvedBorderColor}` },
            item.disabled && styles.disabledItem,
            itemStyle,
          ]}
        >
          {/* Left Icon */}
          <View style={styles.itemIconSlot}>
            {renderIcon(item.icon, isSelected, fgColor, isSubItem ? 18 : 20)}
          </View>

          {/* Item Label */}
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

  // Drawer Content Body
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
      {customHeader ? (
        customHeader
      ) : (
        <View
          style={[
            styles.headerContainer,
            { borderBottomColor: resolvedBorderColor },
            headerStyle,
          ]}
        >
          <View style={styles.headerLeftArea}>
            <View style={styles.headerLogoWrapper}>{renderHeaderLogo()}</View>
            <View style={styles.headerTitlesArea}>
              <Text
                style={[styles.headerTitle, { color: resolvedActiveFg }]}
                numberOfLines={1}
              >
                {title}
              </Text>
              {subtitle ? (
                <Text
                  style={[
                    styles.headerSubtitle,
                    { color: resolvedSectionHeaderColor },
                  ]}
                  numberOfLines={1}
                >
                  {subtitle}
                </Text>
              ) : null}
            </View>
          </View>

          {showCloseButton && (
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
          )}
        </View>
      )}

      {/* ─── 2. SEARCH INPUT BAR ────────────────────────────────────────────── */}
      {showSearch && (
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
      </ScrollView>

      {/* ─── 4. FOOTER (Sign out & custom actions) ─────────────────────────── */}
      {customFooter ? (
        customFooter
      ) : (
        <View
          style={[
            styles.footerContainer,
            { borderTopColor: resolvedBorderColor },
          ]}
        >
          {footerItems && footerItems.length > 0 ? (
            footerItems.map((fItem, fIndex) =>
              renderMenuItem(fItem, 999)
            )
          ) : showSignOut ? (
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
          ) : null}
        </View>
      )}
    </Animated.View>
  );

  // Return full Modal with Backdrop Scrim
  return (
    <Modal
      transparent
      visible={isOpen}
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
  // Header Styles
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? ((StatusBar.currentHeight || 28) + 14) : 14,
    paddingBottom: 14,
    borderBottomWidth: 1,
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
  // Search Bar Styles
  searchSection: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 6,
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
  // Scrollable Content
  scrollContent: {
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
    marginBottom: 2,
  },
  menuItemPressable: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  subItemPressable: {
    height: 38,
    paddingHorizontal: 8,
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
  itemLabel: {
    flex: 1,
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
  accordionChevron: {
    marginLeft: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Sub-items Tree Structure
  subItemsContainer: {
    flexDirection: 'row',
    paddingLeft: 22,
    marginTop: 2,
    position: 'relative',
  },
  subTreeVerticalLine: {
    position: 'absolute',
    left: 22,
    top: 4,
    bottom: 8,
    width: 1.5,
    borderRadius: 1,
  },
  subItemsList: {
    flex: 1,
    paddingLeft: 14,
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
  // Footer
  footerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
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
});
