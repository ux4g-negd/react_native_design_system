import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gSwitch as Ux4gToggle } from '../../../src/components/switch/Switch';
import { Ux4gButton, Ux4gButtonVariant } from '../../../src/components/button/Button';
import { Ux4gChoiceChip, Ux4gChipGroup } from '../../../src/components/chips/Chips';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface ManageAllDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

const TAB_CHIPS = [
  'Notification channels',
  'Update Frequency',
  'Per Service Preferences',
  'Mandatory Notification',
  'WhatsApp notification',
  'Manage all Subscriptions',
];

interface OptionalNotifItem {
  id: string;
  title: string;
  subtitle: string;
  enabled: boolean;
}

export const ManageAllDoc: React.FC<ManageAllDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [activeTabIdx, setActiveTabIdx] = useState<number>(5);

  const [optionalItems, setOptionalItems] = useState<OptionalNotifItem[]>([
    {
      id: 'o1',
      title: 'Status updates',
      subtitle: 'Stage changes across all your applications',
      enabled: true,
    },
    {
      id: 'o2',
      title: 'Action reminders',
      subtitle: 'Upload and payment reminders',
      enabled: true,
    },
    {
      id: 'o3',
      title: 'Certificate expiry',
      subtitle: 'Renewal reminders before documents expire',
      enabled: true,
    },
    {
      id: 'o4',
      title: 'Promotional updates',
      subtitle: 'New services and scheme announcements',
      enabled: true,
    },
  ]);

  const toggleOptionalItem = (id: string, val: boolean) => {
    setOptionalItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, enabled: val } : item))
    );
  };

  const turnOffAllOptional = () => {
    setOptionalItems((prev) => prev.map((item) => ({ ...item, enabled: false })));
  };

  // Colors matching Flutter notif_prefs_stories.dart
  const colors = useMemo(() => {
    return {
      bgScreen: isDark ? UX4GColors.neutral950 : UX4GColors.neutral0,
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      cardBorder: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300,
      cardBg: isDark ? '#1A1A1A' : UX4GColors.neutral0,
      title: isDark ? UX4GColors.neutral0 : '#111827',
      subtitle: isDark ? '#9CA3AF' : '#6B7280',
      sectionHeader: isDark ? '#9CA3AF' : '#4B5563',
      badgeBg: isDark ? '#262626' : '#E5E7EB',
      badgeText: isDark ? '#E5E7EB' : '#111827',
      btnBorder: '#EF4444',
      btnContent: isDark ? '#F87171' : '#991B1B',
      btnBg: isDark ? '#2C0B0E' : '#FEF2F2',
      mutedText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
    };
  }, [isDark]);

  // Clean TSX code string matching Flutter manageAllComponent
  const codeString = useMemo(() => {
    return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gToggle,
  Ux4gButton,
  Ux4gButtonVariant,
  Ux4gChoiceChip,
  Ux4gChipGroup,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const ManageAllPattern = () => {
  const [optionalItems, setOptionalItems] = useState([
    { id: '1', title: 'Status updates', subtitle: 'Stage changes across all your applications', enabled: true },
    { id: '2', title: 'Action reminders', subtitle: 'Upload and payment reminders', enabled: true },
    { id: '3', title: 'Certificate expiry', subtitle: 'Renewal reminders before documents expire', enabled: true },
    { id: '4', title: 'Promotional updates', subtitle: 'New services and scheme announcements', enabled: true },
  ]);

  const toggleItem = (id: string, val: boolean) => {
    setOptionalItems((prev) => prev.map((item) => (item.id === id ? { ...item, enabled: val } : item)));
  };

  const turnOffAll = () => {
    setOptionalItems((prev) => prev.map((item) => ({ ...item, enabled: false })));
  };

  return (
    <View style={styles.screen}>
      {/* 1. Official Government Header */}
      <Ux4gAppHeader
        title=""
        variant="light"
        elevation={0}
        useSafeArea={false}
        horizontalPadding={16}
        leadingSpacing={12}
        backgroundColor={UX4GColors.neutral0}
        borderColor={UX4GColors.neutral200}
        leadingWidgets={[
          <Image key="emblem" source={{ uri: '/national_emblem_logo.svg' }} style={styles.emblemLogo} resizeMode="contain" />,
          <View key="divider" style={styles.headerDivider} />,
          <Image key="union" source={{ uri: '/Union.svg' }} style={styles.unionLogo} resizeMode="contain" />,
        ]}
      />
      <Ux4gDivider color={UX4GColors.neutral200} />

      {/* 2. Main Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Notification Preferences</Text>
      </View>

      {/* 3. Horizontal Filter Chips */}
      <Ux4gChipGroup arrangement="horizontal" spacing={8} containerStyle={styles.tabsContainer}>
        <Ux4gChoiceChip text="Notification channels" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Update Frequency" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Per Service Preferences" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Mandatory Notification" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="WhatsApp notification" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Manage all Subscriptions" selected={true} onClick={() => {}} size="s" borderRadius={6} />
      </Ux4gChipGroup>

      {/* 4. Manage All Content Card */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
        <View style={styles.card}>
          {/* Section 1: Optional */}
          <Text style={styles.sectionHeader}>OPTIONAL — YOU CAN TURN OFF</Text>
          {optionalItems.map((item, idx) => (
            <React.Fragment key={item.id}>
              <View style={styles.row}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                </View>
                <Ux4gToggle checked={item.enabled} onCheckedChange={(v) => toggleItem(item.id, v)} />
              </View>
              {idx < optionalItems.length - 1 && <Ux4gDivider color={UX4GColors.neutral300} />}
            </React.Fragment>
          ))}

          <View style={{ height: 24 }} />

          {/* Section 2: Mandatory */}
          <Text style={styles.sectionHeader}>MANDATORY — REQUIRED BY GOVERNMENT POLICY</Text>
          
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.itemTitle}>SLA breach alerts</Text>
              <Text style={styles.itemSubtitle}>Service guarantee deadline notifications</Text>
            </View>
            <View style={styles.alwaysOnBadge}>
              <Text style={styles.alwaysOnText}>Always on</Text>
            </View>
          </View>
          <Ux4gDivider color={UX4GColors.neutral300} />

          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.itemTitle}>Rejection notices</Text>
              <Text style={styles.itemSubtitle}>Application rejection with reasons</Text>
            </View>
            <View style={styles.alwaysOnBadge}>
              <Text style={styles.alwaysOnText}>Always on</Text>
            </View>
          </View>

          <View style={{ height: 20 }} />

          {/* Turn Off Optional CTA */}
          <Ux4gButton
            text="Turn off all optional notifications"
            onPress={turnOffAll}
            variant={Ux4gButtonVariant.outline}
            width="100%"
            height={48}
            borderColor="#EF4444"
            contentColor="#991B1B"
            backgroundColor="#FEF2F2"
            borderRadius={8}
          />
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.poweredByText}>Powered by -</Text>
        <Image source={{ uri: '/Digital_India_logo.svg' }} style={styles.digitalIndiaLogo} resizeMode="contain" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: UX4GColors.neutral0 },
  emblemLogo: { width: 32, height: 32 },
  headerDivider: { width: 1, height: 28, backgroundColor: UX4GColors.neutral300, marginHorizontal: 4 },
  unionLogo: { width: 32, height: 32 },
  titleContainer: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 12 },
  titleText: { fontSize: 18, fontWeight: '700', color: '#111827', letterSpacing: -0.2 },
  tabsContainer: { paddingHorizontal: 16 },
  card: { backgroundColor: UX4GColors.neutral0, borderRadius: 12, borderWidth: 1, borderColor: UX4GColors.neutral300, padding: 16 },
  sectionHeader: { fontSize: 11, fontWeight: '700', color: '#4B5563', letterSpacing: 0.5, marginBottom: 8, marginLeft: 4 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, paddingHorizontal: 4 },
  itemTitle: { fontSize: 13, fontWeight: '700', color: '#111827' },
  itemSubtitle: { fontSize: 11, color: '#6B7280', marginTop: 3 },
  alwaysOnBadge: { backgroundColor: '#E5E7EB', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 },
  alwaysOnText: { fontSize: 11, fontWeight: '600', color: '#111827' },
  footer: { paddingVertical: 14, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 4 },
  poweredByText: { fontSize: 11, color: UX4GColors.neutral400 },
  digitalIndiaLogo: { height: 24, width: 80 },
});`;
  }, []);

  // Interactive Live Mockup for Web Preview
  const renderLiveMockup = () => {
    return (
      <div
        style={{
          width: 360,
          height: 760,
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: isDark
            ? '0 12px 32px rgba(0, 0, 0, 0.6), 0 0 0 1px #333333'
            : '0 12px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px #E5E7EB',
          backgroundColor: colors.bgScreen,
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* Official Header */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <Ux4gAppHeader
            title=""
            variant="light"
            elevation={0}
            useSafeArea={false}
            height={56}
            horizontalPadding={16}
            leadingSpacing={12}
            backgroundColor={colors.headerBg}
            borderColor={colors.border}
            leadingWidgets={[
              <img
                key="emblem"
                src="/national_emblem_logo.svg"
                alt="National Emblem"
                style={{
                  height: 32,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />,
              <div
                key="divider"
                style={{
                  width: 1,
                  height: 28,
                  backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
                  margin: '0 4px',
                }}
              />,
              <UnionLogo key="union" size={32} isDark={isDark} />,
            ]}
          />
          <div
            style={{
              height: 1,
              backgroundColor: colors.border,
              width: '100%',
            }}
          />
        </div>

        {/* Content Body */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
            {/* Title */}
            <div style={{ padding: '16px 16px 12px 16px', flexShrink: 0 }}>
              <h2
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: colors.title,
                  margin: 0,
                  letterSpacing: '-0.2px',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Notification Preferences
              </h2>
            </div>

            {/* Horizontal Scrollable Filter Chips */}
            <div
              onMouseDown={(e) => {
                const el = e.currentTarget;
                let startX = e.pageX - el.offsetLeft;
                let scrollLeft = el.scrollLeft;
                let isDown = true;
                const onMouseMove = (me: MouseEvent) => {
                  if (!isDown) return;
                  me.preventDefault();
                  const x = me.pageX - el.offsetLeft;
                  const walk = (x - startX) * 1.5;
                  el.scrollLeft = scrollLeft - walk;
                };
                const onMouseUp = () => {
                  isDown = false;
                  window.removeEventListener('mousemove', onMouseMove);
                  window.removeEventListener('mouseup', onMouseUp);
                };
                window.addEventListener('mousemove', onMouseMove);
                window.addEventListener('mouseup', onMouseUp);
              }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                flexShrink: 0,
                minHeight: 48,
                gap: 8,
                overflowX: 'auto',
                padding: '4px 16px 16px 16px',
                cursor: 'grab',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
              }}
            >
              {TAB_CHIPS.map((chip, idx) => {
                const isSelected = activeTabIdx === idx;
                const activeBg = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
                const activeText = isDark ? UX4GColors.gray900 : UX4GColors.neutral0;
                const inactiveBg = isDark ? '#1E1E1E' : UX4GColors.neutral0;
                const inactiveBorder = isDark ? '#333333' : '#E5E7EB';
                const inactiveText = isDark ? '#D1D5DB' : '#1F2937';

                return (
                  <Ux4gChoiceChip
                    key={chip}
                    text={chip}
                    selected={isSelected}
                    onClick={() => setActiveTabIdx(idx)}
                    size="s"
                    borderRadius={6}
                    containerStyle={{
                      backgroundColor: isSelected ? activeBg : inactiveBg,
                      borderColor: isSelected ? activeBg : inactiveBorder,
                      borderWidth: 1,
                    }}
                    textStyle={{
                      color: isSelected ? activeText : inactiveText,
                      fontWeight: isSelected ? '600' : '500',
                    }}
                  />
                );
              })}
            </div>

            {/* Manage All Content Card */}
            <div style={{ padding: '0 16px 16px 16px', flex: 1 }}>
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 12,
                  border: `1px solid ${colors.cardBorder}`,
                  padding: 16,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Section 1 Header */}
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: colors.sectionHeader,
                    letterSpacing: '0.5px',
                    marginBottom: 8,
                    marginLeft: 4,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  OPTIONAL — YOU CAN TURN OFF
                </span>

                {optionalItems.map((item, idx) => (
                  <React.Fragment key={item.id}>
                    <div
                      style={{
                        padding: '14px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingRight: 12 }}>
                        <span
                          style={{
                            fontSize: 13,
                            fontWeight: 700,
                            color: colors.title,
                            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                          }}
                        >
                          {item.title}
                        </span>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 400,
                            color: colors.subtitle,
                            marginTop: 3,
                            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                          }}
                        >
                          {item.subtitle}
                        </span>
                      </div>

                      <Ux4gToggle
                        checked={item.enabled}
                        onCheckedChange={(v) => toggleOptionalItem(item.id, v)}
                      />
                    </div>

                    {idx < optionalItems.length - 1 && (
                      <div style={{ height: 1, backgroundColor: colors.cardBorder }} />
                    )}
                  </React.Fragment>
                ))}

                <div style={{ height: 24 }} />

                {/* Section 2 Header */}
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: colors.sectionHeader,
                    letterSpacing: '0.5px',
                    marginBottom: 8,
                    marginLeft: 4,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  MANDATORY — REQUIRED BY GOVERNMENT POLICY
                </span>

                {/* SLA breach alerts */}
                <div
                  style={{
                    padding: '14px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingRight: 12 }}>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: colors.title,
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      }}
                    >
                      SLA breach alerts
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 400,
                        color: colors.subtitle,
                        marginTop: 3,
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      }}
                    >
                      Service guarantee deadline notifications
                    </span>
                  </div>

                  <span
                    style={{
                      padding: '4px 8px',
                      borderRadius: 4,
                      backgroundColor: colors.badgeBg,
                      color: colors.badgeText,
                      fontSize: 11,
                      fontWeight: 600,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Always on
                  </span>
                </div>
                <div style={{ height: 1, backgroundColor: colors.cardBorder }} />

                {/* Rejection notices */}
                <div
                  style={{
                    padding: '14px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingRight: 12 }}>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: colors.title,
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      }}
                    >
                      Rejection notices
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 400,
                        color: colors.subtitle,
                        marginTop: 3,
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      }}
                    >
                      Application rejection with reasons
                    </span>
                  </div>

                  <span
                    style={{
                      padding: '4px 8px',
                      borderRadius: 4,
                      backgroundColor: colors.badgeBg,
                      color: colors.badgeText,
                      fontSize: 11,
                      fontWeight: 600,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Always on
                  </span>
                </div>

                <div style={{ height: 20 }} />

                {/* Turn Off Optional Button */}
                <Ux4gButton
                  text="Turn off all optional notifications"
                  onPress={turnOffAllOptional}
                  variant="outline"
                  width="100%"
                  height={48}
                  borderColor={colors.btnBorder}
                  contentColor={colors.btnContent}
                  backgroundColor={colors.btnBg}
                  borderRadius={8}
                />
              </div>
            </div>
          </div>

          {/* Brand Footer */}
          <div
            style={{
              padding: '14px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 400,
                color: colors.mutedText,
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              }}
            >
              Powered by -
            </span>
            <img
              src="/Digital_India_logo.svg"
              alt="Digital India"
              style={{
                height: 24,
                filter: isDark ? 'brightness(0) invert(1)' : 'none',
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Manage All</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Master control screen separating optional vs mandatory statutory notifications with bulk opt-out CTA.
        </p>
      </div>

      {/* Main Body */}
      <div className="wb-body">
        <div className="wb-main">
          {/* Main Tabs */}
          <div className="wb-tab-bar">
            <button
              className={`wb-tab ${activeMainTab === 'preview' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('preview')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">visibility</span> Preview
            </button>
            <button
              className={`wb-tab ${activeMainTab === 'code' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('code')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">code</span> Code
            </button>
          </div>

          <div className="wb-content">
            {/* 1. Preview Tab */}
            {activeMainTab === 'preview' && (
              <Ux4gThemeProvider isDark={isDark}>
                <div className={`wb-preview-area ${isDark ? 'dark' : ''}`} style={{ flexDirection: 'column', alignItems: 'center' }}>
                  {renderLiveMockup()}
                </div>
              </Ux4gThemeProvider>
            )}

            {/* 2. Code Tab */}
            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                <CodeBlock code={codeString} language="tsx" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
