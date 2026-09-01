import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gSwitch as Ux4gToggle } from '../../../src/components/switch/Switch';
import { Ux4gChoiceChip, Ux4gChipGroup } from '../../../src/components/chips/Chips';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface PerServiceDocProps {
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

interface ServiceNotifItem {
  id: string;
  label: string;
  subtitle?: string;
  enabled: boolean;
}

interface ServiceCategory {
  id: string;
  name: string;
  summary: string;
  expanded: boolean;
  items: ServiceNotifItem[];
}

export const PerServiceDoc: React.FC<PerServiceDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [activeTabIdx, setActiveTabIdx] = useState<number>(2);

  // Initial service categories state matching Flutter _buildPerServiceList()
  const [services, setServices] = useState<ServiceCategory[]>([
    {
      id: 's1',
      name: 'Income Certificate',
      summary: '3 of 3 notifications on',
      expanded: true,
      items: [
        { id: 's1_1', label: 'Status updates', subtitle: 'When your application changes stage', enabled: true },
        { id: 's1_2', label: 'Action reminders', subtitle: 'When you need to upload or pay', enabled: true },
        { id: 's1_3', label: 'Certificate expiry', subtitle: 'Renewal reminders before expiry', enabled: true },
      ],
    },
    {
      id: 's2',
      name: 'Ration Card Renewal',
      summary: '2 of 3 notifications on',
      expanded: false,
      items: [
        { id: 's2_1', label: 'Status updates', subtitle: 'When your application changes stage', enabled: true },
        { id: 's2_2', label: 'Action reminders', subtitle: 'When you need to upload or pay', enabled: true },
        { id: 's2_3', label: 'Certificate expiry', subtitle: 'Renewal reminders before expiry', enabled: false },
      ],
    },
    {
      id: 's3',
      name: 'PAN Correction',
      summary: '3 of 3 notifications on',
      expanded: false,
      items: [
        { id: 's3_1', label: 'Status updates', subtitle: 'When your application changes stage', enabled: true },
        { id: 's3_2', label: 'Action reminders', subtitle: 'When you need to upload or pay', enabled: true },
        { id: 's3_3', label: 'Certificate expiry', subtitle: 'Renewal reminders before expiry', enabled: true },
      ],
    },
    {
      id: 's4',
      name: 'Birth Certificate',
      summary: 'All notifications off',
      expanded: false,
      items: [
        { id: 's4_1', label: 'Status updates', subtitle: 'When your application changes stage', enabled: false },
        { id: 's4_2', label: 'Action reminders', subtitle: 'When you need to upload or pay', enabled: false },
        { id: 's4_3', label: 'Certificate expiry', subtitle: 'Renewal reminders before expiry', enabled: false },
      ],
    },
  ]);

  const toggleCategoryExpand = (catId: string) => {
    setServices((prev) =>
      prev.map((c) => (c.id === catId ? { ...c, expanded: !c.expanded } : c))
    );
  };

  const toggleItemState = (catId: string, itemId: string, newValue: boolean) => {
    setServices((prev) =>
      prev.map((cat) => {
        if (cat.id !== catId) return cat;
        const updatedItems = cat.items.map((item) =>
          item.id === itemId ? { ...item, enabled: newValue } : item
        );
        const onCount = updatedItems.filter((i) => i.enabled).length;
        const total = updatedItems.length;
        const newSummary =
          onCount === 0
            ? 'All notifications off'
            : `${onCount} of ${total} notifications on`;
        return {
          ...cat,
          summary: newSummary,
          items: updatedItems,
        };
      })
    );
  };

  // Colors matching Flutter notif_prefs_stories.dart
  const colors = useMemo(() => {
    return {
      bgScreen: isDark ? UX4GColors.neutral950 : UX4GColors.neutral0,
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      cardBorder: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300,
      cardBg: isDark ? '#1A1A1A' : UX4GColors.neutral0,
      accordionHeaderBg: isDark ? '#262626' : '#F3F4F6',
      title: isDark ? UX4GColors.neutral0 : '#111827',
      subtitle: isDark ? '#9CA3AF' : '#6B7280',
      mutedText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
    };
  }, [isDark]);

  // Clean TSX code string matching Flutter perServiceComponent
  const codeString = useMemo(() => {
    return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gToggle,
  Ux4gChoiceChip,
  Ux4gChipGroup,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const PerServicePattern = () => {
  const [services, setServices] = useState([
    {
      id: '1',
      name: 'Income Certificate',
      summary: '3 of 3 notifications on',
      expanded: true,
      items: [
        { id: '1_1', label: 'Status updates', subtitle: 'When your application changes stage', enabled: true },
        { id: '1_2', label: 'Action reminders', subtitle: 'When you need to upload or pay', enabled: true },
        { id: '1_3', label: 'Certificate expiry', subtitle: 'Renewal reminders before expiry', enabled: true },
      ],
    },
    {
      id: '2',
      name: 'Ration Card Renewal',
      summary: '2 of 3 notifications on',
      expanded: false,
      items: [
        { id: '2_1', label: 'Status updates', subtitle: 'When your application changes stage', enabled: true },
        { id: '2_2', label: 'Action reminders', subtitle: 'When you need to upload or pay', enabled: true },
        { id: '2_3', label: 'Certificate expiry', subtitle: 'Renewal reminders before expiry', enabled: false },
      ],
    },
  ]);

  const toggleExpand = (id: string) => {
    setServices((prev) =>
      prev.map((c) => (c.id === id ? { ...c, expanded: !c.expanded } : c))
    );
  };

  const toggleItem = (catId: string, itemId: string, val: boolean) => {
    setServices((prev) =>
      prev.map((cat) => {
        if (cat.id !== catId) return cat;
        const updated = cat.items.map((i) => (i.id === itemId ? { ...i, enabled: val } : i));
        return { ...cat, items: updated };
      })
    );
  };

  return (
    <View style={styles.screen}>
      {/* Official Government Header */}
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

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Notification Preferences</Text>
      </View>

      {/* Horizontal Filter Chips */}
      <Ux4gChipGroup arrangement="horizontal" spacing={8} containerStyle={styles.tabsContainer}>
        <Ux4gChoiceChip text="Notification channels" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Update Frequency" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Per Service Preferences" selected={true} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Mandatory Notification" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="WhatsApp notification" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Manage all Subscriptions" selected={false} onClick={() => {}} size="s" borderRadius={6} />
      </Ux4gChipGroup>

      {/* Per Service Accordions Card */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
        <View style={styles.outerCard}>
          {services.map((cat, idx) => (
            <View key={cat.id} style={[styles.accordionCard, idx < services.length - 1 && { marginBottom: 10 }]}>
              {/* Accordion Header */}
              <TouchableOpacity activeOpacity={0.7} onPress={() => toggleExpand(cat.id)} style={styles.accordionHeader}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.categoryName}>{cat.name}</Text>
                  <Text style={styles.categorySummary}>{cat.summary}</Text>
                </View>
                <Text style={styles.arrowIcon}>{cat.expanded ? '▲' : '▼'}</Text>
              </TouchableOpacity>

              {/* Accordion Body */}
              {cat.expanded && (
                <View>
                  <Ux4gDivider color={UX4GColors.neutral300} />
                  {cat.items.map((item, itemIdx) => (
                    <React.Fragment key={item.id}>
                      <View style={styles.itemRow}>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.itemLabel}>{item.label}</Text>
                          {item.subtitle && <Text style={styles.itemSubtitle}>{item.subtitle}</Text>}
                        </View>
                        <Ux4gToggle checked={item.enabled} onCheckedChange={(v) => toggleItem(cat.id, item.id, v)} />
                      </View>
                      {itemIdx < cat.items.length - 1 && <Ux4gDivider color={UX4GColors.neutral300} />}
                    </React.Fragment>
                  ))}
                </View>
              )}
            </View>
          ))}
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
  titleText: { fontSize: 18, fontWeight: '700', color: '#111827' },
  tabsContainer: { paddingHorizontal: 16 },
  outerCard: { backgroundColor: UX4GColors.neutral0, borderRadius: 12, borderWidth: 1, borderColor: UX4GColors.neutral300, padding: 14 },
  accordionCard: { backgroundColor: UX4GColors.neutral0, borderRadius: 10, borderWidth: 1, borderColor: UX4GColors.neutral300, overflow: 'hidden' },
  accordionHeader: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 12 },
  categoryName: { fontSize: 13, fontWeight: '700', color: '#111827' },
  categorySummary: { fontSize: 11, color: '#6B7280', marginTop: 2 },
  arrowIcon: { fontSize: 14, color: '#111827' },
  itemRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 12 },
  itemLabel: { fontSize: 12, fontWeight: '600', color: '#111827' },
  itemSubtitle: { fontSize: 11, color: '#6B7280', marginTop: 2 },
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
            <div style={{ padding: '16px 16px 12px 16px' }}>
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
                gap: 8,
                overflowX: 'auto',
                padding: '0 16px 16px 16px',
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

            {/* Per Service Accordions Card */}
            <div style={{ padding: '0 16px 16px 16px', flex: 1 }}>
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 12,
                  border: `1px solid ${colors.cardBorder}`,
                  padding: 14,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                {services.map((cat) => (
                  <div
                    key={cat.id}
                    style={{
                      backgroundColor: colors.cardBg,
                      borderRadius: 10,
                      border: `1px solid ${colors.cardBorder}`,
                      overflow: 'hidden',
                    }}
                  >
                    {/* Accordion Header */}
                    <div
                      onClick={() => toggleCategoryExpand(cat.id)}
                      style={{
                        padding: '12px 14px',
                        backgroundColor: cat.expanded ? colors.accordionHeaderBg : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        transition: 'background-color 0.15s ease',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span
                          style={{
                            fontSize: 13,
                            fontWeight: 700,
                            color: colors.title,
                            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                          }}
                        >
                          {cat.name}
                        </span>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 400,
                            color: colors.subtitle,
                            marginTop: 2,
                            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                          }}
                        >
                          {cat.summary}
                        </span>
                      </div>

                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: 20,
                          color: colors.title,
                          userSelect: 'none',
                        }}
                      >
                        {cat.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                      </span>
                    </div>

                    {/* Accordion Expanded Sub-Items */}
                    {cat.expanded && (
                      <div>
                        <div style={{ height: 1, backgroundColor: colors.cardBorder }} />
                        {cat.items.map((item, itemIdx) => (
                          <React.Fragment key={item.id}>
                            <div
                              style={{
                                padding: '12px 14px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                              }}
                            >
                              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingRight: 12 }}>
                                <span
                                  style={{
                                    fontSize: 12,
                                    fontWeight: 600,
                                    color: colors.title,
                                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                                  }}
                                >
                                  {item.label}
                                </span>
                                {item.subtitle && (
                                  <span
                                    style={{
                                      fontSize: 11,
                                      fontWeight: 400,
                                      color: colors.subtitle,
                                      marginTop: 2,
                                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                                    }}
                                  >
                                    {item.subtitle}
                                  </span>
                                )}
                              </div>

                              <Ux4gToggle
                                checked={item.enabled}
                                onCheckedChange={(v) => toggleItemState(cat.id, item.id, v)}
                              />
                            </div>

                            {itemIdx < cat.items.length - 1 && (
                              <div style={{ height: 1, backgroundColor: colors.cardBorder }} />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
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
          <h1 className="wb-title">Per Service</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Granular notification preference toggles grouped by government service application. Expandable accordion cards with dark mode compatibility.
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
