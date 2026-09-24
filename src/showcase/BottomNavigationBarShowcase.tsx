import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Platform,
  Modal,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';
import {
  Ux4gBottomNavigationBar,
  Ux4gBottomNavItem,
  Ux4gBottomNavIndicatorVariant,
  Ux4gBottomNavVariant,
  Ux4gPillBottomNavBar,
  Ux4gBarBottomNavBar,
  Ux4gPlainBottomNavBar,
  Ux4gFloatingBottomNavBar,
  Ux4gCenterActionBottomNavBar,
} from '../components/bottom-navigation-bar';
import { UX4GColors } from '../foundation/colors';
import { useUx4gTheme } from '../theme/Ux4gThemeContext';

export const BottomNavigationBarShowcase: React.FC = () => {
  const theme = useUx4gTheme();
  const { isDark, toggleTheme } = theme;
  const { width } = useWindowDimensions();

  // Full screen interactive mode state
  const [isFullScreenOpen, setIsFullScreenOpen] = useState<boolean>(false);
  const [fullScreenActiveTab, setFullScreenActiveTab] = useState<number>(0);
  const [fullScreenIndicator, setFullScreenIndicator] =
    useState<Ux4gBottomNavIndicatorVariant>('pill');
  const [fullScreenVariant, setFullScreenVariant] =
    useState<Ux4gBottomNavVariant>('labelled');
  const [isQuickActionModalOpen, setIsQuickActionModalOpen] = useState<boolean>(false);

  // Showcase state for live playground
  const [activePlaygroundIndex, setActivePlaygroundIndex] = useState<number>(0);
  const [selectedIndicator, setSelectedIndicator] =
    useState<Ux4gBottomNavIndicatorVariant>('pill');
  const [selectedVariant, setSelectedVariant] =
    useState<Ux4gBottomNavVariant>('labelled');
  const [showBadges, setShowBadges] = useState<boolean>(true);
  const [lastActionMessage, setLastActionMessage] = useState<string>('Home tab selected');

  // Matrix tab states (5 rows x 3 columns)
  const [matrixIndices, setMatrixIndices] = useState<number[][]>([
    [0, 0, 0], // Labelled (Pill, Bar, Plain)
    [0, 0, 0], // Top-rounded (Pill, Bar, Plain)
    [0, 0, 0], // Icon only (Pill, Bar, Plain)
    [0, 0, 0], // Centre action (Pill, Bar, Plain)
    [0, 0, 0], // Pill floating (Pill, Bar, Plain)
  ]);

  const updateMatrixIndex = (row: number, col: number, idx: number, label: string) => {
    setMatrixIndices((prev) => {
      const next = prev.map((r, rIdx) =>
        rIdx === row ? r.map((c, cIdx) => (cIdx === col ? idx : c)) : [...r]
      );
      return next;
    });
    setLastActionMessage(`[Row ${row + 1}, Col ${col + 1}] selected "${label}"`);
  };

  // Base 5 navigation items matching the design image
  const standardItems: Ux4gBottomNavItem[] = [
    { key: 'home', label: 'Home', icon: 'home' },
    { key: 'services', label: 'Services', icon: 'services' },
    { key: 'status', label: 'Status', icon: 'status' },
    { key: 'alerts', label: 'Alerts', icon: 'alerts', badge: showBadges ? 3 : undefined },
    { key: 'profile', label: 'Profile', icon: 'profile' },
  ];

  // 4 items for Centre Action mode (Home, Services | Status, Alerts)
  const centreActionItems: Ux4gBottomNavItem[] = [
    { key: 'home', label: 'Home', icon: 'home' },
    { key: 'services', label: 'Services', icon: 'services' },
    { key: 'status', label: 'Status', icon: 'status' },
    { key: 'alerts', label: 'Alerts', icon: 'alerts', badge: showBadges ? '!' : undefined },
  ];

  const rows: { label: string; variant: Ux4gBottomNavVariant; items: Ux4gBottomNavItem[] }[] = [
    { label: 'Labelled', variant: 'labelled', items: standardItems },
    { label: 'Top-rounded', variant: 'top-rounded', items: standardItems },
    { label: 'Icon only', variant: 'icon-only', items: standardItems },
    { label: 'Centre action', variant: 'centre-action', items: centreActionItems },
    { label: 'Pill (floating)', variant: 'floating-pill', items: standardItems },
  ];

  const cols: { title: string; indicator: Ux4gBottomNavIndicatorVariant }[] = [
    { title: 'Pill', indicator: 'pill' },
    { title: 'Bar', indicator: 'bar' },
    { title: 'Plain', indicator: 'plain' },
  ];

  // Full Screen Screen Content per Tab
  const renderFullScreenTabContent = () => {
    const isDarkBg = isDark;
    const activeLabel =
      fullScreenVariant === 'centre-action'
        ? centreActionItems[fullScreenActiveTab]?.label || 'Home'
        : standardItems[fullScreenActiveTab]?.label || 'Home';

    switch (activeLabel) {
      case 'Home':
        return (
          <ScrollView contentContainerStyle={styles.fullScreenScrollContent}>
            {/* Greeting Hero Card */}
            <View
              style={[
                styles.fsHeroCard,
                {
                  backgroundColor: UX4GColors.primary600,
                },
              ]}
            >
              <View style={styles.fsHeroBadge}>
                <Text style={styles.fsHeroBadgeText}>DIGITAL CITIZEN PORTAL</Text>
              </View>
              <Text style={styles.fsHeroTitle}>Welcome, Priya Sharma 👋</Text>
              <Text style={styles.fsHeroSub}>
                Your citizen services, documents, and active requests in one place.
              </Text>

              <View style={styles.fsHeroStatsRow}>
                <View style={styles.fsHeroStatBox}>
                  <Text style={styles.fsHeroStatNum}>4</Text>
                  <Text style={styles.fsHeroStatLabel}>Active Apps</Text>
                </View>
                <View style={styles.fsHeroStatDivider} />
                <View style={styles.fsHeroStatBox}>
                  <Text style={styles.fsHeroStatNum}>8</Text>
                  <Text style={styles.fsHeroStatLabel}>Verified Docs</Text>
                </View>
                <View style={styles.fsHeroStatDivider} />
                <View style={styles.fsHeroStatBox}>
                  <Text style={styles.fsHeroStatNum}>2</Text>
                  <Text style={styles.fsHeroStatLabel}>Pending Tasks</Text>
                </View>
              </View>
            </View>

            {/* Quick Actions Grid */}
            <Text
              style={[
                styles.fsSectionHeader,
                { color: isDarkBg ? UX4GColors.neutral100 : UX4GColors.neutral900 },
              ]}
            >
              Popular Quick Actions
            </Text>
            <View style={styles.fsQuickGrid}>
              {[
                { title: 'Apply Certificate', icon: '📄', color: UX4GColors.primary50 },
                { title: 'Pay Utility Bill', icon: '⚡', color: '#FFF5EA' },
                { title: 'Locker & Aadhaar', icon: '🔒', color: '#F6EFFB' },
                { title: 'File Grievance', icon: '📢', color: '#EFF6FF' },
              ].map((item, i) => (
                <Pressable
                  key={`quick-${i}`}
                  onPress={() => setLastActionMessage(`Action "${item.title}" tapped`)}
                  style={[
                    styles.fsQuickCard,
                    {
                      backgroundColor: isDarkBg ? UX4GColors.neutral900 : UX4GColors.neutral0,
                      borderColor: isDarkBg ? UX4GColors.neutral800 : UX4GColors.neutral200,
                    },
                  ]}
                >
                  <View style={[styles.fsQuickIconCircle, { backgroundColor: item.color }]}>
                    <Text style={{ fontSize: 20 }}>{item.icon}</Text>
                  </View>
                  <Text
                    style={[
                      styles.fsQuickTitle,
                      { color: isDarkBg ? UX4GColors.neutral100 : UX4GColors.neutral800 },
                    ]}
                  >
                    {item.title}
                  </Text>
                </Pressable>
              ))}
            </View>

            {/* Recent Application Tracker */}
            <Text
              style={[
                styles.fsSectionHeader,
                { color: isDarkBg ? UX4GColors.neutral100 : UX4GColors.neutral900 },
              ]}
            >
              Recent Status Trackers
            </Text>
            <View
              style={[
                styles.fsStatusCard,
                {
                  backgroundColor: isDarkBg ? UX4GColors.neutral900 : UX4GColors.neutral0,
                  borderColor: isDarkBg ? UX4GColors.neutral800 : UX4GColors.neutral200,
                },
              ]}
            >
              <View style={styles.fsStatusHeader}>
                <View>
                  <Text style={[styles.fsStatusTitle, { color: isDarkBg ? UX4GColors.neutral100 : UX4GColors.neutral900 }]}>
                    Domicile Certificate #DL-98231
                  </Text>
                  <Text style={styles.fsStatusSub}>Submitted on 22 Sep 2026</Text>
                </View>
                <View style={styles.fsStatusBadgeInProgress}>
                  <Text style={styles.fsStatusBadgeText}>In Review</Text>
                </View>
              </View>
              <View style={styles.fsProgressBarTrack}>
                <View style={[styles.fsProgressBarFill, { width: '70%' }]} />
              </View>
              <Text style={styles.fsStatusStepInfo}>Step 3 of 4: District Officer Verification</Text>
            </View>
          </ScrollView>
        );

      case 'Services':
        return (
          <ScrollView contentContainerStyle={styles.fullScreenScrollContent}>
            <Text style={[styles.fsSectionHeader, { color: isDarkBg ? UX4GColors.neutral100 : UX4GColors.neutral900 }]}>
              All Citizen Services
            </Text>
            {[
              { cat: 'Identity & Certificates', count: '14 Services', icon: '🆔' },
              { cat: 'Revenue & Land Records', count: '9 Services', icon: '📜' },
              { cat: 'Electricity & Water Utilities', count: '6 Services', icon: '💡' },
              { cat: 'Transport & Driving Licenses', count: '12 Services', icon: '🚗' },
              { cat: 'Public Grievance Portal (CPGRAMS)', count: 'Direct Filing', icon: '📣' },
            ].map((s, i) => (
              <Pressable
                key={`srv-${i}`}
                style={[
                  styles.fsServiceListItem,
                  {
                    backgroundColor: isDarkBg ? UX4GColors.neutral900 : UX4GColors.neutral0,
                    borderColor: isDarkBg ? UX4GColors.neutral800 : UX4GColors.neutral200,
                  },
                ]}
              >
                <Text style={{ fontSize: 26, marginRight: 12 }}>{s.icon}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.fsServiceItemTitle, { color: isDarkBg ? UX4GColors.neutral100 : UX4GColors.neutral900 }]}>
                    {s.cat}
                  </Text>
                  <Text style={styles.fsServiceItemSub}>{s.count}</Text>
                </View>
                <Text style={{ color: UX4GColors.primary600, fontSize: 18 }}>›</Text>
              </Pressable>
            ))}
          </ScrollView>
        );

      case 'Status':
        return (
          <ScrollView contentContainerStyle={styles.fullScreenScrollContent}>
            <Text style={[styles.fsSectionHeader, { color: isDarkBg ? UX4GColors.neutral100 : UX4GColors.neutral900 }]}>
              Application Status Pipeline
            </Text>
            {[
              { id: 'APP-99824', name: 'Income Certificate', status: 'Approved', step: 'Ready to Download', color: UX4GColors.green600 },
              { id: 'APP-99810', name: 'Water Connection Request', status: 'In Review', step: 'Site Inspection', color: UX4GColors.primary600 },
              { id: 'APP-99754', name: 'Driving License Renewal', status: 'Submitted', step: 'Payment Verified', color: UX4GColors.orange600 },
            ].map((st, i) => (
              <View
                key={`status-${i}`}
                style={[
                  styles.fsStatusCard,
                  {
                    backgroundColor: isDarkBg ? UX4GColors.neutral900 : UX4GColors.neutral0,
                    borderColor: isDarkBg ? UX4GColors.neutral800 : UX4GColors.neutral200,
                  },
                ]}
              >
                <View style={styles.fsStatusHeader}>
                  <View>
                    <Text style={[styles.fsStatusTitle, { color: isDarkBg ? UX4GColors.neutral100 : UX4GColors.neutral900 }]}>
                      {st.name}
                    </Text>
                    <Text style={styles.fsStatusSub}>Ref: {st.id}</Text>
                  </View>
                  <View style={[styles.fsStatusBadgeGeneric, { backgroundColor: `${st.color}22` }]}>
                    <Text style={{ color: st.color, fontWeight: '700', fontSize: 12 }}>{st.status}</Text>
                  </View>
                </View>
                <Text style={{ color: isDarkBg ? UX4GColors.neutral300 : UX4GColors.neutral700, fontSize: 13, marginTop: 8 }}>
                  Current Status: <Text style={{ fontWeight: '600' }}>{st.step}</Text>
                </Text>
              </View>
            ))}
          </ScrollView>
        );

      case 'Alerts':
        return (
          <ScrollView contentContainerStyle={styles.fullScreenScrollContent}>
            <Text style={[styles.fsSectionHeader, { color: isDarkBg ? UX4GColors.neutral100 : UX4GColors.neutral900 }]}>
              Notifications & Alerts
            </Text>
            {[
              { title: 'Certificate Issued!', desc: 'Your Income Certificate #IC-2026 is generated and ready to download.', time: '10 mins ago', unread: true },
              { title: 'Electricity Bill Due', desc: 'Bill of ₹ 1,420 due on 28 Sep 2026. Pay now to avoid late fee.', time: '2 hours ago', unread: true },
              { title: 'DigiLocker Synced', desc: 'Driving license was automatically synced with DigiLocker.', time: 'Yesterday', unread: false },
            ].map((notif, i) => (
              <View
                key={`notif-${i}`}
                style={[
                  styles.fsNotifCard,
                  {
                    backgroundColor: notif.unread
                      ? isDarkBg
                        ? `${UX4GColors.primary600}22`
                        : UX4GColors.primary50
                      : isDarkBg
                      ? UX4GColors.neutral900
                      : UX4GColors.neutral0,
                    borderColor: isDarkBg ? UX4GColors.neutral800 : UX4GColors.neutral200,
                  },
                ]}
              >
                <View style={{ flex: 1 }}>
                  <Text style={[styles.fsNotifTitle, { color: isDarkBg ? UX4GColors.neutral100 : UX4GColors.neutral900 }]}>
                    {notif.title}
                  </Text>
                  <Text style={[styles.fsNotifDesc, { color: isDarkBg ? UX4GColors.neutral400 : UX4GColors.neutral600 }]}>
                    {notif.desc}
                  </Text>
                  <Text style={styles.fsNotifTime}>{notif.time}</Text>
                </View>
                {notif.unread && <View style={styles.fsUnreadDot} />}
              </View>
            ))}
          </ScrollView>
        );

      case 'Profile':
        return (
          <ScrollView contentContainerStyle={styles.fullScreenScrollContent}>
            <View
              style={[
                styles.fsProfileCard,
                {
                  backgroundColor: isDarkBg ? UX4GColors.neutral900 : UX4GColors.neutral0,
                  borderColor: isDarkBg ? UX4GColors.neutral800 : UX4GColors.neutral200,
                },
              ]}
            >
              <View style={styles.fsProfileAvatarCircle}>
                <Text style={{ fontSize: 32 }}>👩‍💼</Text>
              </View>
              <Text style={[styles.fsProfileName, { color: isDarkBg ? UX4GColors.neutral100 : UX4GColors.neutral900 }]}>
                Priya Sharma
              </Text>
              <Text style={styles.fsProfileEmail}>priya.sharma@example.gov.in</Text>
              <View style={styles.fsAadhaarVerifiedBadge}>
                <Text style={styles.fsAadhaarVerifiedText}>✓ Aadhaar & DigiLocker Verified</Text>
              </View>
            </View>

            <View style={styles.fsSettingsGroup}>
              {[
                { title: 'Personal Information', icon: '👤' },
                { title: 'Linked Documents & Certificates', icon: '📑' },
                { title: 'Payment Methods & History', icon: '💳' },
                { title: 'App Security & Biometrics', icon: '🛡️' },
                { title: 'Language (English / हिन्दी)', icon: '🌐' },
              ].map((setting, i) => (
                <Pressable
                  key={`sett-${i}`}
                  style={[
                    styles.fsSettingItem,
                    {
                      backgroundColor: isDarkBg ? UX4GColors.neutral900 : UX4GColors.neutral0,
                      borderColor: isDarkBg ? UX4GColors.neutral800 : UX4GColors.neutral200,
                    },
                  ]}
                >
                  <Text style={{ fontSize: 20, marginRight: 12 }}>{setting.icon}</Text>
                  <Text
                    style={[
                      styles.fsSettingTitle,
                      { color: isDarkBg ? UX4GColors.neutral100 : UX4GColors.neutral800 },
                    ]}
                  >
                    {setting.title}
                  </Text>
                  <Text style={{ color: UX4GColors.neutral400, fontSize: 16 }}>›</Text>
                </Pressable>
              ))}
            </View>
          </ScrollView>
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.outerContainer}>
      {/* ─── FULL SCREEN INTERACTIVE APP MODAL ─── */}
      <Modal
        visible={isFullScreenOpen}
        animationType="slide"
        onRequestClose={() => setIsFullScreenOpen(false)}
      >
        <SafeAreaView
          style={[
            styles.fullScreenModalWrapper,
            { backgroundColor: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50 },
          ]}
        >
          {/* Top Bar with Controller Tools and Exit Button */}
          <View
            style={[
              styles.fsTopBar,
              {
                backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
                borderBottomColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
              },
            ]}
          >
            <View>
              <Text
                style={[
                  styles.fsTopBarTitle,
                  { color: isDark ? UX4GColors.neutral100 : UX4GColors.neutral900 },
                ]}
              >
                Full Screen Live App
              </Text>
              <Text style={styles.fsTopBarSub}>
                Indicator: <Text style={{ fontWeight: '700', color: UX4GColors.primary600 }}>{fullScreenIndicator}</Text> | Shape: <Text style={{ fontWeight: '700', color: UX4GColors.primary600 }}>{fullScreenVariant}</Text>
              </Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Pressable
                onPress={toggleTheme}
                style={[
                  styles.fsIconButton,
                  { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100 },
                ]}
              >
                <Text>{isDark ? '☀️' : '🌙'}</Text>
              </Pressable>

              <Pressable
                onPress={() => setIsFullScreenOpen(false)}
                style={styles.fsCloseButton}
              >
                <Text style={styles.fsCloseButtonText}>✕ Exit Full Screen</Text>
              </Pressable>
            </View>
          </View>

          {/* Quick Style Switcher Bar inside Full Screen */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={[
              styles.fsSwitcherBar,
              {
                backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral100,
                borderColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
              },
            ]}
            contentContainerStyle={{ paddingHorizontal: 12, alignItems: 'center', gap: 6 }}
          >
            <Text style={{ fontSize: 11, fontWeight: '700', color: UX4GColors.neutral500, marginRight: 4 }}>
              INDICATOR:
            </Text>
            {(['pill', 'bar', 'plain'] as Ux4gBottomNavIndicatorVariant[]).map((ind) => (
              <Pressable
                key={`fs-ind-${ind}`}
                onPress={() => setFullScreenIndicator(ind)}
                style={[
                  styles.fsSwitcherPill,
                  fullScreenIndicator === ind && { backgroundColor: UX4GColors.primary600 },
                ]}
              >
                <Text
                  style={[
                    styles.fsSwitcherPillText,
                    fullScreenIndicator === ind && { color: UX4GColors.neutral0 },
                  ]}
                >
                  {ind}
                </Text>
              </Pressable>
            ))}

            <View style={styles.fsSwitcherDivider} />

            <Text style={{ fontSize: 11, fontWeight: '700', color: UX4GColors.neutral500, marginRight: 4 }}>
              SHAPE:
            </Text>
            {(
              [
                'labelled',
                'top-rounded',
                'icon-only',
                'centre-action',
                'floating-pill',
              ] as Ux4gBottomNavVariant[]
            ).map((v) => (
              <Pressable
                key={`fs-var-${v}`}
                onPress={() => {
                  setFullScreenVariant(v);
                  if (v === 'centre-action' && fullScreenActiveTab >= 4) {
                    setFullScreenActiveTab(0);
                  }
                }}
                style={[
                  styles.fsSwitcherPill,
                  fullScreenVariant === v && { backgroundColor: UX4GColors.primary600 },
                ]}
              >
                <Text
                  style={[
                    styles.fsSwitcherPillText,
                    fullScreenVariant === v && { color: UX4GColors.neutral0 },
                  ]}
                >
                  {v}
                </Text>
              </Pressable>
            ))}
          </ScrollView>

          {/* Active Screen Tab View */}
          <View style={styles.fullScreenContentArea}>
            {renderFullScreenTabContent()}
          </View>

          {/* Fixed Bottom Navigation Bar */}
          <View style={styles.fullScreenBottomNavWrapper}>
            <Ux4gBottomNavigationBar
              items={fullScreenVariant === 'centre-action' ? centreActionItems : standardItems}
              variant={fullScreenVariant}
              indicatorVariant={fullScreenIndicator}
              selectedIndex={fullScreenActiveTab}
              onTabChange={(idx) => setFullScreenActiveTab(idx)}
              centerAction={
                fullScreenVariant === 'centre-action'
                  ? {
                      onPress: () => setIsQuickActionModalOpen(true),
                    }
                  : undefined
              }
              useSafeArea={true}
              testID="fullscreen-bottom-nav"
            />
          </View>

          {/* Centre Action Quick Action Sheet Modal */}
          <Modal
            visible={isQuickActionModalOpen}
            transparent={true}
            animationType="fade"
            onRequestClose={() => setIsQuickActionModalOpen(false)}
          >
            <Pressable
              style={styles.modalBackdrop}
              onPress={() => setIsQuickActionModalOpen(false)}
            >
              <View
                style={[
                  styles.modalSheet,
                  {
                    backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
                    borderColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
                  },
                ]}
              >
                <View style={styles.modalHandle} />
                <Text
                  style={[
                    styles.modalTitle,
                    { color: isDark ? UX4GColors.neutral100 : UX4GColors.neutral900 },
                  ]}
                >
                  Quick Actions (+)
                </Text>
                <Text style={styles.modalSub}>
                  Create a new application or perform instant service request:
                </Text>

                <View style={styles.modalActionsGrid}>
                  {[
                    { label: 'New Application', icon: '📝', color: UX4GColors.primary50 },
                    { label: 'Upload Document', icon: '📤', color: '#EFF6FF' },
                    { label: 'Scan QR Code', icon: '📷', color: '#F6EFFB' },
                    { label: 'Raise Grievance', icon: '🚨', color: '#FFF5EA' },
                  ].map((act, i) => (
                    <Pressable
                      key={`modal-act-${i}`}
                      onPress={() => setIsQuickActionModalOpen(false)}
                      style={[
                        styles.modalActionCard,
                        {
                          backgroundColor: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
                          borderColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
                        },
                      ]}
                    >
                      <View style={[styles.modalActionIconCircle, { backgroundColor: act.color }]}>
                        <Text style={{ fontSize: 22 }}>{act.icon}</Text>
                      </View>
                      <Text
                        style={[
                          styles.modalActionLabel,
                          { color: isDark ? UX4GColors.neutral100 : UX4GColors.neutral800 },
                        ]}
                      >
                        {act.label}
                      </Text>
                    </Pressable>
                  ))}
                </View>

                <Pressable
                  onPress={() => setIsQuickActionModalOpen(false)}
                  style={styles.modalDismissBtn}
                >
                  <Text style={styles.modalDismissText}>Close</Text>
                </Pressable>
              </View>
            </Pressable>
          </Modal>
        </SafeAreaView>
      </Modal>

      {/* ─── MAIN SHOWCASE SCROLL VIEW ─── */}
      <ScrollView
        style={[
          styles.container,
          { backgroundColor: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50 },
        ]}
        contentContainerStyle={styles.contentContainer}
      >
        {/* ─── Header ─── */}
        <View style={styles.header}>
          <View style={styles.titleRow}>
            <View style={styles.titleBadge}>
              <Text style={styles.titleBadgeText}>UX4G NAVIGATION</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              {/* Prominent Full Screen Launch Button */}
              <Pressable
                onPress={() => setIsFullScreenOpen(true)}
                style={styles.fullScreenLaunchHeroBtn}
              >
                <Text style={styles.fullScreenLaunchHeroBtnText}>
                  📱 Open Full Screen Demo
                </Text>
              </Pressable>

              <Pressable
                onPress={toggleTheme}
                style={[
                  styles.themeToggle,
                  { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.primary50 },
                ]}
              >
                <Text style={{ color: isDark ? UX4GColors.gold500 : UX4GColors.primary600, fontWeight: '600' }}>
                  {isDark ? '☀️ Light' : '🌙 Dark'}
                </Text>
              </Pressable>
            </View>
          </View>

          <Text style={[styles.mainTitle, { color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900 }]}>
            Bottom Navigation Bar
          </Text>
          <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 }]}>
            Complete design system matrix featuring Pill, Bar, and Plain active indicators across Labelled,
            Top-rounded, Icon only, Centre action (+ FAB), and Pill (floating) shapes.
          </Text>
        </View>

        {/* ─── Full Screen Quick Callout Banner ─── */}
        <Pressable
          onPress={() => setIsFullScreenOpen(true)}
          style={[
            styles.fullScreenBannerCard,
            { backgroundColor: UX4GColors.primary600 },
          ]}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.fsBannerTitle}>📱 Experience Full Screen Mobile Demo</Text>
            <Text style={styles.fsBannerSub}>
              Preview the Bottom Navigation Bar anchored in a realistic full-screen mobile app with live feeds,
              citizen dashboard, notifications, and tab navigation!
            </Text>
          </View>
          <View style={styles.fsBannerBtn}>
            <Text style={styles.fsBannerBtnText}>Launch ↗</Text>
          </View>
        </Pressable>

        {/* ─── Action Toast Banner ─── */}
        <View
          style={[
            styles.actionBanner,
            {
              backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
              borderColor: UX4GColors.primary300,
            },
          ]}
        >
          <Text style={styles.actionBannerLabel}>Event Log:</Text>
          <Text style={[styles.actionBannerText, { color: UX4GColors.primary600 }]}>
            {lastActionMessage}
          </Text>
        </View>

        {/* ─── SECTION 1: DESIGN SYSTEM MATRIX (5x3 GRID) ─── */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
              borderColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
            },
          ]}
        >
          <View style={styles.cardHeader}>
            <Text style={[styles.cardTitle, { color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900 }]}>
              Design System Variants Matrix (Exact UI & Design Flow)
            </Text>
            <Text style={[styles.cardSubtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 }]}>
              Tap any tab in the matrix below to interact with that specific variant live.
            </Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.matrixScrollView}>
            <View style={styles.matrixContainer}>
              {/* Column Header Titles */}
              <View style={styles.matrixHeaderRow}>
                <View style={styles.rowLabelHeaderCell} />
                {cols.map((col) => (
                  <View key={`col-title-${col.title}`} style={styles.matrixHeaderCell}>
                    <Text style={[styles.matrixHeaderTitle, { color: isDark ? UX4GColors.neutral100 : UX4GColors.neutral800 }]}>
                      {col.title}
                    </Text>
                    <View style={styles.headerIndicatorLine} />
                  </View>
                ))}
              </View>

              {/* Matrix Rows (Labelled, Top-rounded, Icon only, Centre action, Pill floating) */}
              {rows.map((row, rowIdx) => (
                <View key={`row-${row.variant}`} style={styles.matrixRow}>
                  {/* Row Header Label */}
                  <View style={styles.rowLabelCell}>
                    <Text style={[styles.rowLabelText, { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral800 }]}>
                      {row.label}
                    </Text>
                  </View>

                  {/* 3 Columns: Pill, Bar, Plain */}
                  {cols.map((col, colIdx) => (
                    <View key={`cell-${row.variant}-${col.indicator}`} style={styles.matrixCell}>
                      <View
                        style={[
                          styles.cellDeviceFrame,
                          {
                            backgroundColor: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
                            borderColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
                          },
                        ]}
                      >
                        <View style={styles.cellMockBody}>
                          <View style={styles.cellMockContentPlaceholder} />
                        </View>

                        <Ux4gBottomNavigationBar
                          items={row.items}
                          variant={row.variant}
                          indicatorVariant={col.indicator}
                          selectedIndex={matrixIndices[rowIdx][colIdx]}
                          onTabChange={(idx, item) => updateMatrixIndex(rowIdx, colIdx, idx, item.label)}
                          centerAction={
                            row.variant === 'centre-action'
                              ? {
                                  onPress: () =>
                                    setLastActionMessage(
                                      `[Row ${rowIdx + 1}, Col ${colIdx + 1}] Center Action (+) pressed!`
                                    ),
                                }
                              : undefined
                          }
                          useSafeArea={false}
                          testID={`matrix-${row.variant}-${col.indicator}`}
                        />
                      </View>
                    </View>
                  ))}
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* ─── SECTION 2: INTERACTIVE LIVE PLAYGROUND ─── */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
              borderColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
            },
          ]}
        >
          <View style={styles.cardHeader}>
            <Text style={[styles.cardTitle, { color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900 }]}>
              Interactive Live Playground
            </Text>
            <Text style={[styles.cardSubtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 }]}>
              Customize indicators, layout variants, center action, and badges in real-time.
            </Text>
          </View>

          {/* Controls */}
          <View style={styles.controlsGrid}>
            {/* Indicator Variant Selector */}
            <View style={styles.controlGroup}>
              <Text style={[styles.controlLabel, { color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }]}>
                Indicator Variant
              </Text>
              <View style={styles.pillSelectorRow}>
                {(['pill', 'bar', 'plain'] as Ux4gBottomNavIndicatorVariant[]).map((ind) => (
                  <Pressable
                    key={`ind-${ind}`}
                    onPress={() => setSelectedIndicator(ind)}
                    style={[
                      styles.selectorPill,
                      selectedIndicator === ind
                        ? { backgroundColor: UX4GColors.primary600 }
                        : { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100 },
                    ]}
                  >
                    <Text
                      style={[
                        styles.selectorPillText,
                        {
                          color:
                            selectedIndicator === ind
                              ? UX4GColors.neutral0
                              : isDark
                              ? UX4GColors.neutral300
                              : UX4GColors.neutral700,
                        },
                      ]}
                    >
                      {ind.toUpperCase()}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>

            {/* Layout Variant Selector */}
            <View style={styles.controlGroup}>
              <Text style={[styles.controlLabel, { color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }]}>
                Shape / Layout Variant
              </Text>
              <View style={styles.pillSelectorRow}>
                {(
                  [
                    'labelled',
                    'top-rounded',
                    'icon-only',
                    'centre-action',
                    'floating-pill',
                  ] as Ux4gBottomNavVariant[]
                ).map((v) => (
                  <Pressable
                    key={`var-${v}`}
                    onPress={() => setSelectedVariant(v)}
                    style={[
                      styles.selectorPill,
                      selectedVariant === v
                        ? { backgroundColor: UX4GColors.primary600 }
                        : { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100 },
                    ]}
                  >
                    <Text
                      style={[
                        styles.selectorPillText,
                        {
                          color:
                            selectedVariant === v
                              ? UX4GColors.neutral0
                              : isDark
                              ? UX4GColors.neutral300
                              : UX4GColors.neutral700,
                        },
                      ]}
                    >
                      {v}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>

            {/* Badges Toggle */}
            <View style={styles.controlGroup}>
              <Text style={[styles.controlLabel, { color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }]}>
                Options
              </Text>
              <View style={styles.pillSelectorRow}>
                <Pressable
                  onPress={() => setShowBadges(!showBadges)}
                  style={[
                    styles.selectorPill,
                    showBadges
                      ? { backgroundColor: UX4GColors.blue600 }
                      : { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100 },
                  ]}
                >
                  <Text
                    style={[
                      styles.selectorPillText,
                      {
                        color: showBadges
                          ? UX4GColors.neutral0
                          : isDark
                          ? UX4GColors.neutral300
                          : UX4GColors.neutral700,
                      },
                    ]}
                  >
                    {showBadges ? '✓ Badges On' : 'Badges Off'}
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>

          {/* Live Device Simulator */}
          <View
            style={[
              styles.playgroundDevice,
              {
                backgroundColor: isDark ? UX4GColors.neutral950 : UX4GColors.neutral100,
                borderColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral300,
              },
            ]}
          >
            {/* Simulated App Screen Content */}
            <View style={styles.playgroundScreenBody}>
              <View style={styles.playgroundAppHeader}>
                <Text
                  style={[
                    styles.playgroundAppHeaderTitle,
                    { color: isDark ? UX4GColors.neutral100 : UX4GColors.neutral900 },
                  ]}
                >
                  {selectedVariant === 'centre-action'
                    ? centreActionItems[activePlaygroundIndex]?.label || 'Active Tab'
                    : standardItems[activePlaygroundIndex]?.label || 'Active Tab'}
                </Text>
                <Text
                  style={[
                    styles.playgroundAppHeaderSub,
                    { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 },
                  ]}
                >
                  Active Indicator: {selectedIndicator} | Variant: {selectedVariant}
                </Text>
              </View>

              <View
                style={[
                  styles.playgroundCardItem,
                  {
                    backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
                    borderColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
                  },
                ]}
              >
                <Text style={{ color: UX4GColors.primary600, fontWeight: '700', fontSize: 16 }}>
                  Active Tab Content
                </Text>
                <Text
                  style={{
                    color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                    marginTop: 4,
                    fontSize: 13,
                  }}
                >
                  Currently displaying screen for{' '}
                  <Text style={{ fontWeight: '600', color: UX4GColors.primary500 }}>
                    {selectedVariant === 'centre-action'
                      ? centreActionItems[activePlaygroundIndex]?.label
                      : standardItems[activePlaygroundIndex]?.label}
                  </Text>
                  .
                </Text>
              </View>
            </View>

            {/* Render Active Component */}
            <Ux4gBottomNavigationBar
              items={selectedVariant === 'centre-action' ? centreActionItems : standardItems}
              variant={selectedVariant}
              indicatorVariant={selectedIndicator}
              selectedIndex={activePlaygroundIndex}
              onTabChange={(idx, item) => {
                setActivePlaygroundIndex(idx);
                setLastActionMessage(`Switched to tab: ${item.label} (Index ${idx})`);
              }}
              centerAction={
                selectedVariant === 'centre-action'
                  ? {
                      onPress: () =>
                        setLastActionMessage('Center Action (+) Pressed in Live Playground!'),
                    }
                  : undefined
              }
              useSafeArea={false}
              testID="playground-bottom-nav"
            />
          </View>
        </View>

        {/* ─── SECTION 3: PRESET COMPONENTS QUICK CODE REFERENCE ─── */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
              borderColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
            },
          ]}
        >
          <Text style={[styles.cardTitle, { color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900 }]}>
            Developer Usage & Component Presets
          </Text>
          <Text style={[styles.cardSubtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 }]}>
            Use modular props on &lt;Ux4gBottomNavigationBar /&gt; or quick presets:
          </Text>

          <View
            style={[
              styles.codeBlock,
              { backgroundColor: isDark ? UX4GColors.neutral950 : UX4GColors.neutral900 },
            ]}
          >
            <Text style={styles.codeText}>
              {`import {
  Ux4gBottomNavigationBar,
  Ux4gPillBottomNavBar,
  Ux4gBarBottomNavBar,
  Ux4gPlainBottomNavBar,
  Ux4gFloatingBottomNavBar,
  Ux4gCenterActionBottomNavBar
} from 'ux4g-react-native-design-system';

// 1. Standard Pill Navigation Bar
<Ux4gBottomNavigationBar
  items={items}
  indicatorVariant="pill"
  variant="labelled"
  selectedIndex={selectedIndex}
  onTabChange={(index, item) => setIndex(index)}
/>

// 2. Top-Rounded Bar Indicator
<Ux4gBarBottomNavBar
  items={items}
  variant="top-rounded"
  selectedIndex={selectedIndex}
  onTabChange={(index) => setIndex(index)}
/>

// 3. Centre Action Button Bar (+)
<Ux4gCenterActionBottomNavBar
  items={items}
  indicatorVariant="pill"
  centerAction={{
    onPress: () => openCreateModal(),
  }}
/>

// 4. Floating Capsule Navigation Bar
<Ux4gFloatingBottomNavBar
  items={items}
  indicatorVariant="pill"
/>`}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// ─── STYLES ──────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 48,
  },
  header: {
    marginBottom: 16,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    flexWrap: 'wrap',
    gap: 8,
  },
  titleBadge: {
    backgroundColor: UX4GColors.primary100,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  titleBadgeText: {
    color: UX4GColors.primary700,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  fullScreenLaunchHeroBtn: {
    backgroundColor: UX4GColors.primary600,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    shadowColor: UX4GColors.primary600,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  fullScreenLaunchHeroBtnText: {
    color: UX4GColors.neutral0,
    fontSize: 12,
    fontWeight: '700',
  },
  themeToggle: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
  },
  fullScreenBannerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 14,
    marginBottom: 16,
    gap: 12,
    shadowColor: UX4GColors.primary600,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  fsBannerTitle: {
    color: UX4GColors.neutral0,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  fsBannerSub: {
    color: `${UX4GColors.neutral0}EE`,
    fontSize: 12,
    lineHeight: 17,
  },
  fsBannerBtn: {
    backgroundColor: UX4GColors.neutral0,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  fsBannerBtnText: {
    color: UX4GColors.primary700,
    fontWeight: '700',
    fontSize: 13,
  },
  actionBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
    gap: 8,
  },
  actionBannerLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: UX4GColors.neutral500,
  },
  actionBannerText: {
    fontSize: 13,
    fontWeight: '600',
    flex: 1,
  },
  card: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    marginBottom: 20,
    overflow: 'hidden',
  },
  cardHeader: {
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    lineHeight: 18,
  },
  matrixScrollView: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
  matrixContainer: {
    paddingVertical: 8,
    minWidth: 960,
  },
  matrixHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rowLabelHeaderCell: {
    width: 130,
  },
  matrixHeaderCell: {
    width: 320,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  matrixHeaderTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  headerIndicatorLine: {
    width: 220,
    height: 2,
    backgroundColor: `${UX4GColors.primary400}66`,
    borderRadius: 1,
  },
  matrixRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  rowLabelCell: {
    width: 130,
    paddingRight: 12,
  },
  rowLabelText: {
    fontSize: 14,
    fontWeight: '600',
  },
  matrixCell: {
    width: 320,
    paddingHorizontal: 8,
  },
  cellDeviceFrame: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
    shadowColor: UX4GColors.neutral1000black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cellMockBody: {
    height: 48,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellMockContentPlaceholder: {
    width: '60%',
    height: 8,
    backgroundColor: `${UX4GColors.neutral400}22`,
    borderRadius: 4,
  },
  controlsGrid: {
    gap: 12,
    marginBottom: 16,
  },
  controlGroup: {
    gap: 6,
  },
  controlLabel: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  pillSelectorRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  selectorPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  selectorPillText: {
    fontSize: 12,
    fontWeight: '600',
  },
  playgroundDevice: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
    minHeight: 280,
    justifyContent: 'space-between',
  },
  playgroundScreenBody: {
    padding: 16,
  },
  playgroundAppHeader: {
    marginBottom: 16,
  },
  playgroundAppHeaderTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  playgroundAppHeaderSub: {
    fontSize: 12,
    marginTop: 2,
  },
  playgroundCardItem: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
  },
  codeBlock: {
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
  },
  codeText: {
    color: '#86E1FC',
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    fontSize: 12,
    lineHeight: 18,
  },

  // ─── FULL SCREEN MODAL STYLES ───
  fullScreenModalWrapper: {
    flex: 1,
  },
  fsTopBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  fsTopBarTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  fsTopBarSub: {
    fontSize: 11,
    color: UX4GColors.neutral500,
    marginTop: 2,
  },
  fsIconButton: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fsCloseButton: {
    backgroundColor: UX4GColors.red600,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  fsCloseButtonText: {
    color: UX4GColors.neutral0,
    fontSize: 12,
    fontWeight: '700',
  },
  fsSwitcherBar: {
    maxHeight: 48,
    borderBottomWidth: 1,
    paddingVertical: 6,
  },
  fsSwitcherPill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: 'transparent',
  },
  fsSwitcherPillText: {
    fontSize: 11,
    fontWeight: '600',
    color: UX4GColors.neutral500,
  },
  fsSwitcherDivider: {
    width: 1,
    height: 18,
    backgroundColor: UX4GColors.neutral400,
    marginHorizontal: 4,
  },
  fullScreenContentArea: {
    flex: 1,
  },
  fullScreenScrollContent: {
    padding: 16,
    paddingBottom: 24,
  },
  fullScreenBottomNavWrapper: {
    width: '100%',
  },
  fsHeroCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: UX4GColors.primary600,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  fsHeroBadge: {
    backgroundColor: '#FFFFFF22',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  fsHeroBadgeText: {
    color: UX4GColors.neutral0,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  fsHeroTitle: {
    color: UX4GColors.neutral0,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
  },
  fsHeroSub: {
    color: `${UX4GColors.neutral0}CC`,
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 16,
  },
  fsHeroStatsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF18',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 8,
    justifyContent: 'space-around',
  },
  fsHeroStatBox: {
    alignItems: 'center',
  },
  fsHeroStatNum: {
    color: UX4GColors.neutral0,
    fontSize: 18,
    fontWeight: '700',
  },
  fsHeroStatLabel: {
    color: `${UX4GColors.neutral0}BB`,
    fontSize: 11,
    marginTop: 2,
  },
  fsHeroStatDivider: {
    width: 1,
    height: 24,
    backgroundColor: '#FFFFFF33',
  },
  fsSectionHeader: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
    marginTop: 4,
  },
  fsQuickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 20,
  },
  fsQuickCard: {
    width: '48%',
    flexGrow: 1,
    borderRadius: 12,
    borderWidth: 1,
    padding: 14,
    alignItems: 'center',
    gap: 8,
  },
  fsQuickIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fsQuickTitle: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  fsStatusCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    marginBottom: 14,
  },
  fsStatusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  fsStatusTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  fsStatusSub: {
    fontSize: 12,
    color: UX4GColors.neutral500,
    marginTop: 2,
  },
  fsStatusBadgeInProgress: {
    backgroundColor: `${UX4GColors.primary600}22`,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  fsStatusBadgeGeneric: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  fsStatusBadgeText: {
    color: UX4GColors.primary600,
    fontSize: 11,
    fontWeight: '700',
  },
  fsProgressBarTrack: {
    height: 6,
    backgroundColor: `${UX4GColors.neutral400}33`,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  fsProgressBarFill: {
    height: '100%',
    backgroundColor: UX4GColors.primary600,
    borderRadius: 3,
  },
  fsStatusStepInfo: {
    fontSize: 11,
    color: UX4GColors.neutral500,
  },
  fsServiceListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 10,
  },
  fsServiceItemTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  fsServiceItemSub: {
    fontSize: 12,
    color: UX4GColors.neutral500,
    marginTop: 2,
  },
  fsNotifCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 10,
    gap: 10,
  },
  fsNotifTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 2,
  },
  fsNotifDesc: {
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 4,
  },
  fsNotifTime: {
    fontSize: 11,
    color: UX4GColors.neutral400,
  },
  fsUnreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: UX4GColors.primary600,
  },
  fsProfileCard: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 16,
  },
  fsProfileAvatarCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: UX4GColors.primary100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  fsProfileName: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 2,
  },
  fsProfileEmail: {
    fontSize: 12,
    color: UX4GColors.neutral500,
    marginBottom: 10,
  },
  fsAadhaarVerifiedBadge: {
    backgroundColor: '#E6F4EA',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  fsAadhaarVerifiedText: {
    color: UX4GColors.green700,
    fontSize: 11,
    fontWeight: '700',
  },
  fsSettingsGroup: {
    gap: 8,
  },
  fsSettingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
  },
  fsSettingTitle: {
    fontSize: 13,
    fontWeight: '600',
    flex: 1,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: '#00000077',
    justifyContent: 'flex-end',
  },
  modalSheet: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 1,
    padding: 20,
    paddingBottom: 36,
  },
  modalHandle: {
    width: 36,
    height: 4,
    backgroundColor: UX4GColors.neutral400,
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  modalSub: {
    fontSize: 12,
    color: UX4GColors.neutral500,
    marginBottom: 16,
  },
  modalActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 20,
  },
  modalActionCard: {
    width: '48%',
    flexGrow: 1,
    borderRadius: 12,
    borderWidth: 1,
    padding: 14,
    alignItems: 'center',
    gap: 8,
  },
  modalActionIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalActionLabel: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  modalDismissBtn: {
    backgroundColor: UX4GColors.neutral200,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalDismissText: {
    color: UX4GColors.neutral800,
    fontWeight: '700',
    fontSize: 14,
  },
});
