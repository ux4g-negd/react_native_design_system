import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { UX4GColors } from '../foundation/colors';
import { useUx4gTheme } from '../theme/Ux4gThemeContext';
import { Ux4gIcons } from '../foundation/icons';
import { Ux4gButton } from '../components/button';
import { Ux4gSideMenu, Ux4gSideMenuItem, Ux4gSideMenuSection } from '../components/side-menu';
import { Ux4gCard } from '../components/card';
import { Ux4gBadge } from '../components/badge';

export const SideMenuShowcase: React.FC = () => {
  const theme = useUx4gTheme();
  const { colors, isDark } = theme;

  // Drawer open state and position
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>('left');
  const [selectedKey, setSelectedKey] = useState('dashboard');
  const [showSearch, setShowSearch] = useState(true);
  const [activeScreenTitle, setActiveScreenTitle] = useState('Dashboard');

  // Custom menu sections definition
  const customSections: Ux4gSideMenuSection[] = [
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

  const handleOpenDrawer = (pos: 'left' | 'right') => {
    setDrawerPosition(pos);
    setIsDrawerOpen(true);
  };

  const handleItemPress = (item: Ux4gSideMenuItem) => {
    setSelectedKey(item.key);
    setActiveScreenTitle(item.label);
    setIsDrawerOpen(false);
  };

  const handleSignOut = () => {
    setIsDrawerOpen(false);
    setActiveScreenTitle('Signed Out');
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
        <Text style={[styles.title, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
          Side Menu (Drawer)
        </Text>
        <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 }]}>
          Responsive government navigation drawer supporting hierarchical sub-items, real-time search, left/right transitions, and theme awareness.
        </Text>
      </View>

      {/* Interactive Trigger Cards */}
      <Ux4gCard style={styles.card}>
        <Text style={[styles.cardTitle, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
          Live Drawer Controls
        </Text>
        <Text style={[styles.cardDesc, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 }]}>
          Open the side menu from either left or right edge.
        </Text>

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
          <Text style={[styles.toggleLabel, { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral800 }]}>
            Enable Search Bar:
          </Text>
          <Switch
            value={showSearch}
            onValueChange={setShowSearch}
            trackColor={{ false: UX4GColors.neutral300, true: UX4GColors.primary600 }}
          />
        </View>
      </Ux4gCard>

      {/* Simulated Mobile Screen Preview */}
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
              borderBottomColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
              backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral0,
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => handleOpenDrawer('left')}
            style={styles.hamburgerBtn}
            accessibilityLabel="Open Navigation Menu"
          >
            <Ux4gIcons.menu size={24} color={isDark ? UX4GColors.neutral0 : UX4GColors.neutral900} />
          </TouchableOpacity>

          <View style={styles.mockAppTitleGroup}>
            <Text
              style={[
                styles.mockAppTitle,
                { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 },
              ]}
            >
              Revenue Portal
            </Text>
            <Text
              style={[
                styles.mockAppSubtitle,
                { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 },
              ]}
            >
              Government of India
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => handleOpenDrawer('right')}
            style={styles.hamburgerBtn}
            accessibilityLabel="Open Right Drawer"
          >
            <Ux4gIcons.profile size={22} color={isDark ? UX4GColors.neutral0 : UX4GColors.neutral900} />
          </TouchableOpacity>
        </View>

        {/* Mock Screen Content Body */}
        <View style={styles.mockScreenBody}>
          <View style={styles.activeStatusBadgeRow}>
            <Text style={[styles.activeScreenHeading, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
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
            Tap the menu icon (top-left) to open the side menu matching the exact UX4G government design specifications.
          </Text>

          {/* Quick Info Tiles */}
          <View style={styles.tilesGrid}>
            <View
              style={[
                styles.infoTile,
                { backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.primary50 },
              ]}
            >
              <Text style={[styles.tileNum, { color: UX4GColors.primary600 }]}>12</Text>
              <Text
                style={[
                  styles.tileLabel,
                  { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral800 },
                ]}
              >
                In Progress
              </Text>
            </View>

            <View
              style={[
                styles.infoTile,
                { backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.green50 },
              ]}
            >
              <Text style={[styles.tileNum, { color: UX4GColors.green700 }]}>48</Text>
              <Text
                style={[
                  styles.tileLabel,
                  { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral800 },
                ]}
              >
                Approved
              </Text>
            </View>

            <View
              style={[
                styles.infoTile,
                { backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.primary50 },
              ]}
            >
              <Text style={[styles.tileNum, { color: UX4GColors.primary700 }]}>3</Text>
              <Text
                style={[
                  styles.tileLabel,
                  { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral800 },
                ]}
              >
                Alerts
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* The Ux4gSideMenu Drawer Component */}
      <Ux4gSideMenu
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        position={drawerPosition}
        sections={customSections}
        selectedKey={selectedKey}
        onItemPress={handleItemPress}
        showSearch={showSearch}
        onSignOut={handleSignOut}
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
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
  },
  card: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 13,
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 16,
  },
  actionBtn: {
    flex: 1,
    minWidth: 140,
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
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
    minHeight: 380,
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
  },
  mockScreenBody: {
    padding: 16,
  },
  activeStatusBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  activeScreenHeading: {
    fontSize: 20,
    fontWeight: '700',
  },
  screenInfoText: {
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 20,
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
