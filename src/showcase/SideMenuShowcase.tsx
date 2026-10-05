import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Pressable,
} from 'react-native';
import { UX4GColors } from '../foundation/colors';
import { useUx4gTheme } from '../theme/Ux4gThemeContext';
import { Ux4gIcons } from '../foundation/icons';
import { Ux4gButton } from '../components/button';
import {
  Ux4gSideMenu,
  Ux4gSideMenuItem,
  Ux4gSideMenuVariant,
} from '../components/side-menu';
import { Ux4gCard } from '../components/card';
import { Ux4gBadge } from '../components/badge';

interface VariantInfo {
  id: Ux4gSideMenuVariant;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
}

const VARIANTS: VariantInfo[] = [
  {
    id: 'citizen',
    title: 'Citizen Profile (Variant 1)',
    badge: 'User Profile & Branding',
    description:
      'Features a user identity header with initials avatar ("RK"), citizen role tag, flat quick navigation with alerts badge, and bottom Government of India branding with sign out action.',
    highlights: [
      'Circular avatar initials ("RK") with user role ("Citizen")',
      'Notifications item with purple count badge (3)',
      'Bottom Revenue Department & Government of India branding',
      'Sign out footer action',
    ],
  },
  {
    id: 'department-services',
    title: 'Department Services + Action Card (Variant 2)',
    badge: 'Hierarchical & Callout',
    description:
      'Government departmental drawer with hierarchical nested sub-items (Applications tree with connector line), workspace sections, and an actionable peach alert card ("Verify your Aadhaar").',
    highlights: [
      'Emblem header with division subtitle ("Kanpur division")',
      'SERVICES & WORKSPACE sections with nested sub-items',
      'Action Required Callout Card with "Verify now" button',
      'Priority applications & Archive navigation',
    ],
  },
  {
    id: 'department-switcher',
    title: 'Department Switcher (Variant 3)',
    badge: 'Multi-Tenant Context',
    description:
      'Department selector allowing citizens or officers to switch between government departments with avatar badges ("RD", "TD"), active checkmark, and pending applications status pills.',
    highlights: [
      'Header: "Departments - Choose a department to work in."',
      'Square avatar badges ("RD", "TD") with subtitle links',
      'Status pill: "3 applications pending" in peach highlight',
      'Footer actions: "+ Request department access", "Settings", "Help & support"',
    ],
  },
  {
    id: 'mailbox',
    title: 'User Mailbox & Workspace (Variant 4)',
    badge: 'Inbox & Folders',
    description:
      'Mailbox and work items drawer displaying user email header ("ramesh.kumar@gov.in"), inbox item badge (9), folder hierarchy, "Customize inbox" action link, and Kanpur division branding.',
    highlights: [
      'User email identity header',
      'MAILBOX & FOLDERS categorized sections with active inbox state',
      '"Customize inbox" purple action link',
      'Footer with "Inbox settings" and division branding',
    ],
  },
  {
    id: 'profile-summary',
    title: 'Centered Profile Summary (Variant 5)',
    badge: 'Large Profile & Stats',
    description:
      'Citizen summary view with large 58dp centered avatar, role badge, application statistics ("12 applications · 3 actions required"), and "View profile" action button with categorized account links.',
    highlights: [
      'Large centered avatar circle with user name & citizen title',
      'Summary metrics: "12 applications · 3 actions required"',
      'Outline "View profile" action button',
      'ACCOUNT, APPLICATIONS & SUPPORT categorized navigation',
    ],
  },
  {
    id: 'standard',
    title: 'Standard Government Portal',
    badge: 'Default System',
    description:
      'Standard UX4G government navigation with Ashoka emblem, instant search bar filter, expandable accordion sections, and Sign out footer.',
    highlights: [
      'National Emblem branding & real-time search filter',
      'Expandable multi-level accordion tree',
      'Dark mode and Light mode automatic styling',
    ],
  },
];

export const SideMenuShowcase: React.FC = () => {
  const theme = useUx4gTheme();
  const { isDark } = theme;

  // Selected variant state
  const [activeVariant, setActiveVariant] = useState<Ux4gSideMenuVariant>('citizen');

  // Drawer state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>('left');
  const [selectedKey, setSelectedKey] = useState('my-applications');
  const [showSearch, setShowSearch] = useState(false);
  const [activeScreenTitle, setActiveScreenTitle] = useState('My applications');
  const [lastActionMessage, setLastActionMessage] = useState<string | null>(null);

  const currentVariantInfo =
    VARIANTS.find((v) => v.id === activeVariant) || VARIANTS[0];

  const handleSelectVariant = (v: Ux4gSideMenuVariant) => {
    setActiveVariant(v);
    if (v === 'citizen') {
      setSelectedKey('my-applications');
      setActiveScreenTitle('My applications');
      setShowSearch(false);
    } else if (v === 'department-services') {
      setSelectedKey('dashboard');
      setActiveScreenTitle('Dashboard');
      setShowSearch(false);
    } else if (v === 'department-switcher') {
      setSelectedKey('dept-revenue');
      setActiveScreenTitle('Revenue Department');
      setShowSearch(false);
    } else if (v === 'mailbox') {
      setSelectedKey('inbox');
      setActiveScreenTitle('Inbox');
      setShowSearch(false);
    } else if (v === 'profile-summary') {
      setSelectedKey('profile-settings');
      setActiveScreenTitle('Profile & settings');
      setShowSearch(false);
    } else {
      setSelectedKey('dashboard');
      setActiveScreenTitle('Dashboard');
      setShowSearch(true);
    }
  };

  const handleOpenDrawer = (pos: 'left' | 'right') => {
    setDrawerPosition(pos);
    setIsDrawerOpen(true);
  };

  const handleItemPress = (item: Ux4gSideMenuItem) => {
    setSelectedKey(item.key);
    setActiveScreenTitle(item.label);
    setLastActionMessage(`Selected menu item: "${item.label}" (key: ${item.key})`);
    setIsDrawerOpen(false);
  };

  const handleSignOut = () => {
    setIsDrawerOpen(false);
    setActiveScreenTitle('Signed Out');
    setLastActionMessage('Sign out action triggered.');
  };

  const handleActionCardPress = () => {
    setIsDrawerOpen(false);
    setActiveScreenTitle('Identity Verification');
    setLastActionMessage('Action Card button "Verify now" clicked.');
  };

  const handleViewProfilePress = () => {
    setIsDrawerOpen(false);
    setActiveScreenTitle('User Profile Details');
    setLastActionMessage('"View profile" button clicked.');
  };

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50 },
      ]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Title Header */}
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Text
            style={[
              styles.title,
              { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 },
            ]}
          >
            Side Menu / Navigation Drawer
          </Text>
          <Ux4gBadge label="6 UI Variants" variant="label" />
        </View>
        <Text
          style={[
            styles.subtitle,
            { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 },
          ]}
        >
          Comprehensive government navigation drawer supporting Citizen Profile, Department Services with Action Callouts, Department Switcher, User Mailbox, and Centered Profile Summary variants with fully responsive layout.
        </Text>
      </View>

      {/* ─── VARIANT SELECTOR PILLS ────────────────────────────────────────── */}
      <View style={styles.selectorSection}>
        <Text
          style={[
            styles.sectionHeading,
            { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 },
          ]}
        >
          Select Design Variant:
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.pillsScroll}
        >
          {VARIANTS.map((v) => {
            const isSelected = activeVariant === v.id;
            return (
              <Pressable
                key={v.id}
                onPress={() => handleSelectVariant(v.id)}
                style={[
                  styles.variantPill,
                  {
                    backgroundColor: isSelected
                      ? UX4GColors.primary600
                      : isDark
                      ? UX4GColors.neutral800
                      : UX4GColors.neutral0,
                    borderColor: isSelected
                      ? UX4GColors.primary600
                      : isDark
                      ? UX4GColors.neutral700
                      : UX4GColors.neutral300,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.variantPillText,
                    {
                      color: isSelected
                        ? UX4GColors.neutral0
                        : isDark
                        ? UX4GColors.neutral200
                        : UX4GColors.neutral800,
                      fontWeight: isSelected ? '700' : '500',
                    },
                  ]}
                >
                  {v.title}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      {/* ─── VARIANT DETAILS CARD ─────────────────────────────────────────── */}
      <Ux4gCard style={styles.card}>
        <View style={styles.cardHeaderRow}>
          <View style={styles.cardTitleGroup}>
            <Text
              style={[
                styles.cardTitle,
                { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 },
              ]}
            >
              {currentVariantInfo.title}
            </Text>
            <Text
              style={[
                styles.cardDesc,
                { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 },
              ]}
            >
              {currentVariantInfo.description}
            </Text>
          </View>
          <Ux4gBadge label={currentVariantInfo.badge} variant="label" />
        </View>

        {/* Highlight Bullets */}
        <View style={styles.highlightsBox}>
          {currentVariantInfo.highlights.map((h, i) => (
            <View key={i} style={styles.highlightRow}>
              <View
                style={[
                  styles.bulletDot,
                  { backgroundColor: UX4GColors.primary600 },
                ]}
              />
              <Text
                style={[
                  styles.highlightText,
                  {
                    color: isDark
                      ? UX4GColors.neutral300
                      : UX4GColors.neutral700,
                  },
                ]}
              >
                {h}
              </Text>
            </View>
          ))}
        </View>

        {/* Live Triggers */}
        <View style={styles.buttonRow}>
          <Ux4gButton
            text="Open Left Drawer"
            variant="primary"
            onPress={() => handleOpenDrawer('left')}
            style={styles.actionBtn}
          />
          <Ux4gButton
            text="Open Right Drawer"
            variant="outline"
            onPress={() => handleOpenDrawer('right')}
            style={styles.actionBtn}
          />
        </View>

        {/* Options Toggles */}
        <View style={styles.toggleRow}>
          <Text
            style={[
              styles.toggleLabel,
              { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral800 },
            ]}
          >
            Show Search Input:
          </Text>
          <Switch
            value={showSearch}
            onValueChange={setShowSearch}
            trackColor={{
              false: UX4GColors.neutral300,
              true: UX4GColors.primary600,
            }}
          />
        </View>
      </Ux4gCard>

      {/* ─── SIMULATED MOBILE SCREEN PREVIEW ──────────────────────────────── */}
      <View
        style={[
          styles.screenMockup,
          {
            backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral0,
            borderColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
          },
        ]}
      >
        {/* Mock Top App Bar */}
        <View
          style={[
            styles.mockAppBar,
            {
              borderBottomColor: isDark
                ? UX4GColors.neutral700
                : UX4GColors.neutral200,
              backgroundColor: isDark
                ? UX4GColors.neutral800
                : UX4GColors.neutral0,
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => handleOpenDrawer('left')}
            style={styles.hamburgerBtn}
            accessibilityLabel="Open Navigation Menu"
          >
            <Ux4gIcons.menu
              size={24}
              color={isDark ? UX4GColors.neutral0 : UX4GColors.neutral900}
            />
          </TouchableOpacity>

          <View style={styles.mockAppTitleGroup}>
            <Text
              style={[
                styles.mockAppTitle,
                { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 },
              ]}
            >
              National Citizen Portal
            </Text>
            <Text
              style={[
                styles.mockAppSubtitle,
                { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 },
              ]}
            >
              Active Variant: {activeVariant}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => handleOpenDrawer('right')}
            style={styles.hamburgerBtn}
            accessibilityLabel="Open Right Drawer"
          >
            <Ux4gIcons.profile
              size={22}
              color={isDark ? UX4GColors.neutral0 : UX4GColors.neutral900}
            />
          </TouchableOpacity>
        </View>

        {/* Mock Screen Content Body */}
        <View style={styles.mockScreenBody}>
          <View style={styles.activeStatusBadgeRow}>
            <Text
              style={[
                styles.activeScreenHeading,
                { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 },
              ]}
            >
              {activeScreenTitle}
            </Text>
            <Ux4gBadge label={`Key: ${selectedKey}`} variant="label" />
          </View>

          <Text
            style={[
              styles.screenInfoText,
              { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 },
            ]}
          >
            Tap the menu icon (top-left) or profile icon (top-right) to preview the drawer matching the exact UX4G visual design specifications.
          </Text>

          {lastActionMessage && (
            <View
              style={[
                styles.feedbackToastBox,
                {
                  backgroundColor: isDark
                    ? `${UX4GColors.primary400}20`
                    : UX4GColors.primary50,
                  borderColor: isDark
                    ? UX4GColors.primary400
                    : UX4GColors.primary200,
                },
              ]}
            >
              <Text
                style={[
                  styles.feedbackToastText,
                  { color: UX4GColors.primary700 },
                ]}
              >
                ✓ {lastActionMessage}
              </Text>
            </View>
          )}

          {/* Quick Info Dashboard Tiles */}
          <View style={styles.tilesGrid}>
            <View
              style={[
                styles.infoTile,
                {
                  backgroundColor: isDark
                    ? UX4GColors.neutral700
                    : UX4GColors.primary50,
                },
              ]}
            >
              <Text
                style={[styles.tileNum, { color: UX4GColors.primary600 }]}
              >
                12
              </Text>
              <Text
                style={[
                  styles.tileLabel,
                  {
                    color: isDark
                      ? UX4GColors.neutral200
                      : UX4GColors.neutral800,
                  },
                ]}
              >
                Applications
              </Text>
            </View>

            <View
              style={[
                styles.infoTile,
                {
                  backgroundColor: isDark
                    ? UX4GColors.neutral700
                    : '#ECFDF5',
                },
              ]}
            >
              <Text
                style={[styles.tileNum, { color: '#059669' }]}
              >
                48
              </Text>
              <Text
                style={[
                  styles.tileLabel,
                  {
                    color: isDark
                      ? UX4GColors.neutral200
                      : UX4GColors.neutral800,
                  },
                ]}
              >
                Approved
              </Text>
            </View>

            <View
              style={[
                styles.infoTile,
                {
                  backgroundColor: isDark
                    ? UX4GColors.neutral700
                    : '#FEF3C7',
                },
              ]}
            >
              <Text
                style={[styles.tileNum, { color: '#D97706' }]}
              >
                3
              </Text>
              <Text
                style={[
                  styles.tileLabel,
                  {
                    color: isDark
                      ? UX4GColors.neutral200
                      : UX4GColors.neutral800,
                  },
                ]}
              >
                Pending
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* ─── LIVE UX4G SIDE MENU DRAWER COMPONENT ─────────────────────────── */}
      <Ux4gSideMenu
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        variant={activeVariant}
        position={drawerPosition}
        selectedKey={selectedKey}
        onItemPress={handleItemPress}
        showSearch={showSearch}
        onSignOut={handleSignOut}
        actionCard={
          activeVariant === 'department-services'
            ? {
                tag: 'ACTION REQUIRED',
                title: 'Verify your Aadhaar',
                description: 'Complete identity verification to continue.',
                buttonText: 'Verify now',
                onButtonPress: handleActionCardPress,
              }
            : undefined
        }
        profileSummary={
          activeVariant === 'profile-summary'
            ? {
                name: 'Ramesh Kumar',
                role: 'Citizen',
                metaInfo: '12 applications · 3 actions required',
                avatarText: 'RK',
                actionLabel: 'View profile',
                onActionPress: handleViewProfilePress,
              }
            : undefined
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 16,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
  },
  selectorSection: {
    marginBottom: 16,
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  pillsScroll: {
    gap: 8,
    paddingBottom: 4,
  },
  variantPill: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  variantPillText: {
    fontSize: 13,
  },
  card: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 12,
    gap: 12,
  },
  cardTitleGroup: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 13,
    lineHeight: 18,
  },
  highlightsBox: {
    backgroundColor: 'rgba(0,0,0,0.02)',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    gap: 8,
  },
  highlightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  bulletDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  highlightText: {
    fontSize: 12,
    flex: 1,
    lineHeight: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 14,
  },
  actionBtn: {
    flex: 1,
    minWidth: 140,
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.06)',
  },
  toggleLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  screenMockup: {
    borderWidth: 1,
    borderRadius: 16,
    overflow: 'hidden',
    minHeight: 360,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  mockAppBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  hamburgerBtn: {
    padding: 6,
    borderRadius: 6,
  },
  mockAppTitleGroup: {
    alignItems: 'center',
  },
  mockAppTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  mockAppSubtitle: {
    fontSize: 11,
    marginTop: 1,
  },
  mockScreenBody: {
    padding: 16,
  },
  activeStatusBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  activeScreenHeading: {
    fontSize: 20,
    fontWeight: '700',
  },
  screenInfoText: {
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 14,
  },
  feedbackToastBox: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 14,
  },
  feedbackToastText: {
    fontSize: 12,
    fontWeight: '600',
  },
  tilesGrid: {
    flexDirection: 'row',
    gap: 10,
  },
  infoTile: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  tileNum: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 2,
  },
  tileLabel: {
    fontSize: 11,
    fontWeight: '600',
  },
});
