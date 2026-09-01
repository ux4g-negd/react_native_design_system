import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';

interface NotificationPatternDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'withNotifications' | 'notificationTypes' | 'emptyState';

type NotifType = 'actionRequired' | 'statusUpdate' | 'reminder' | 'info';

interface NotifData {
  id: string;
  type: NotifType;
  title: string;
  body: string;
  time: string;
  actionLabel?: string;
  customLabel?: string;
  isRead: boolean;
}

interface NotifSection {
  label: string;
  items: NotifData[];
}

export const NotificationPatternDoc: React.FC<NotificationPatternDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('withNotifications');

  // Interactive notification items state
  const [sections, setSections] = useState<NotifSection[]>(() => [
    {
      label: 'TODAY',
      items: [
        {
          id: '1',
          type: 'actionRequired',
          title: 'Income Certificate · Action required',
          body: 'Upload your income proof by 15 Apr to avoid rejection.',
          time: '10:24 AM',
          actionLabel: 'Upload now',
          isRead: false,
        },
        {
          id: '2',
          type: 'statusUpdate',
          title: 'Income Certificate · Action required',
          body: 'Upload your income proof by 15 Apr to avoid rejection.',
          time: '8:03 AM',
          customLabel: 'Action required',
          isRead: false,
        },
      ],
    },
    {
      label: 'YESTERDAY',
      items: [
        {
          id: '3',
          type: 'reminder',
          title: 'Draft expiring · Income Certificate',
          body: 'Your draft expires in 5 days.',
          time: '8:03 AM',
          isRead: true,
        },
        {
          id: '4',
          type: 'info',
          title: 'PAN Correction · Status update',
          body: 'Under review by Income Tax Dept.',
          time: '8:03 AM',
          isRead: true,
        },
      ],
    },
    {
      label: 'EARLIER THIS WEEK',
      items: [
        {
          id: '5',
          type: 'info',
          title: 'Birth Certificate · Submitted',
          body: 'Reference: BC-2026-MH-001.',
          time: '8:03 AM',
          isRead: true,
        },
      ],
    },
  ]);

  const [typeSections] = useState<NotifSection[]>(() => [
    {
      label: 'NOTIFICATION TYPES',
      items: [
        {
          id: 't1',
          type: 'actionRequired',
          title: 'Income Certificate · Action required',
          body: 'Upload your income proof by 15 Apr to avoid rejection.',
          time: '8:03 AM',
          isRead: false,
        },
        {
          id: 't2',
          type: 'statusUpdate',
          title: 'Income Certificate · Action required',
          body: 'Upload your income proof by 15 Apr to avoid rejection.',
          time: '8:03 AM',
          isRead: true,
        },
        {
          id: 't3',
          type: 'reminder',
          title: 'Draft expiring · Income Certificate',
          body: 'Your draft expires in 5 days.',
          time: '8:03 AM',
          isRead: true,
        },
        {
          id: 't4',
          type: 'info',
          title: 'Birth Certificate · Submitted',
          body: 'Reference: BC-2026-MH-001.',
          time: '8:03 AM',
          isRead: true,
        },
      ],
    },
  ]);

  const colors = useMemo(() => {
    return {
      bgScreen: isDark ? UX4GColors.neutral950 : UX4GColors.neutral0,
      headerBg: isDark ? UX4GColors.neutral800 : UX4GColors.neutral0,
      headerTitle: isDark ? UX4GColors.neutral0 : '#111827',
      border: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      markReadText: isDark ? UX4GColors.primary300 : '#6A4EFF',
      markReadDisabled: isDark ? UX4GColors.neutral600 : '#D1D5DB',
      sectionBg: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
      sectionText: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      unreadTileBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
      readTileBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral0,
      titleText: isDark ? UX4GColors.neutral0 : '#111827',
      subtleText: isDark ? UX4GColors.neutral300 : '#4B5563',
      timeText: isDark ? UX4GColors.neutral400 : '#4B5563',
      actionText: isDark ? UX4GColors.primary300 : '#6A4EFF',
      // Dot Colors
      actionDot: isDark ? UX4GColors.red300 : UX4GColors.red600,
      statusDot: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      reminderDot: isDark ? UX4GColors.secondary300 : UX4GColors.secondary600,
      infoDot: isDark ? UX4GColors.cyan300 : UX4GColors.cyan600,
      // Empty state colors
      emptyIconBg: isDark ? UX4GColors.primary900 : '#F4EFFE',
      emptyIconColor: isDark ? UX4GColors.primary300 : '#6A4EFF',
    };
  }, [isDark]);

  const getDotColor = (type: NotifType) => {
    switch (type) {
      case 'actionRequired':
        return colors.actionDot;
      case 'statusUpdate':
        return colors.statusDot;
      case 'reminder':
        return colors.reminderDot;
      case 'info':
        return colors.infoDot;
    }
  };

  const getLabelText = (item: NotifData) => {
    if (item.customLabel) return item.customLabel;
    switch (item.type) {
      case 'actionRequired':
        return 'Action required';
      case 'statusUpdate':
        return 'Status Update';
      case 'reminder':
        return 'Reminder';
      case 'info':
        return 'Info';
    }
  };

  const handleMarkAllAsRead = () => {
    setSections((prev) =>
      prev.map((sec) => ({
        ...sec,
        items: sec.items.map((item) => ({ ...item, isRead: true })),
      }))
    );
  };

  // Clean React Native TSX code snippet matching Flutter notificationComponent
  const codeString = useMemo(() => {
    if (variant === 'emptyState') {
      return `import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { UX4GColors } from 'ux4g-react-native-design-system';

export const NotificationEmptyPattern = () => {
  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notification</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity disabled style={{ paddingHorizontal: 8, paddingVertical: 4 }}>
            <Text style={styles.markReadDisabled}>Mark as read</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 6 }}>
            <Text style={styles.closeIcon}>✕</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.divider} />

      {/* Empty Body */}
      <View style={styles.emptyContainer}>
        <View style={styles.iconCircle}>
          <Text style={styles.bellIcon}>🔔</Text>
        </View>
        <View style={{ height: 16 }} />
        <Text style={styles.emptyTitle}>No new notifications</Text>
        <View style={{ height: 8 }} />
        <Text style={styles.emptySubtitle}>
          Currently, there are no notifications to display. You can check back later!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: UX4GColors.neutral0 },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 14, backgroundColor: UX4GColors.neutral0,
  },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#111827', letterSpacing: -0.2 },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  markReadDisabled: { fontSize: 13, fontWeight: '500', color: '#D1D5DB' },
  closeIcon: { fontSize: 18, color: '#111827' },
  divider: { height: 1, backgroundColor: '#E5E7EB' },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  iconCircle: {
    width: 64, height: 64, borderRadius: 32,
    backgroundColor: '#F4EFFE', alignItems: 'center', justifyContent: 'center',
  },
  bellIcon: { fontSize: 28, color: '#6A4EFF' },
  emptyTitle: { fontSize: 18, fontWeight: '700', color: '#111827', textAlign: 'center' },
  emptySubtitle: { fontSize: 13, color: '#4B5563', textAlign: 'center', lineHeight: 19.5 },
});`;
    }

    if (variant === 'notificationTypes') {
      return `import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { UX4GColors } from 'ux4g-react-native-design-system';

export const NotificationTypesPattern = () => {
  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notification</Text>
      </View>
      <View style={styles.divider} />

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionText}>NOTIFICATION TYPES</Text>
        </View>

        {/* Tile 1: Action required */}
        <View style={[styles.tile, styles.unreadBg]}>
          <View style={[styles.dot, { backgroundColor: UX4GColors.red600 }]} />
          <View style={styles.tileContent}>
            <View style={styles.tileHeader}>
              <Text style={styles.typeLabel}>Action required</Text>
              <Text style={styles.timeText}>8:03 AM</Text>
            </View>
            <Text style={styles.title}>Income Certificate · Action required</Text>
            <Text style={styles.body}>Upload your income proof by 15 Apr to avoid rejection.</Text>
          </View>
        </View>

        {/* Tile 2: Status Update */}
        <View style={[styles.tile, styles.readBg]}>
          <View style={[styles.dot, { backgroundColor: UX4GColors.primary600 }]} />
          <View style={styles.tileContent}>
            <View style={styles.tileHeader}>
              <Text style={styles.typeLabel}>Status Update</Text>
              <Text style={styles.timeText}>8:03 AM</Text>
            </View>
            <Text style={styles.title}>Income Certificate · Action required</Text>
            <Text style={styles.body}>Upload your income proof by 15 Apr to avoid rejection.</Text>
          </View>
        </View>

        {/* Tile 3: Reminder */}
        <View style={[styles.tile, styles.readBg]}>
          <View style={[styles.dot, { backgroundColor: UX4GColors.secondary600 }]} />
          <View style={styles.tileContent}>
            <View style={styles.tileHeader}>
              <Text style={styles.typeLabel}>Reminder</Text>
              <Text style={styles.timeText}>8:03 AM</Text>
            </View>
            <Text style={styles.title}>Draft expiring · Income Certificate</Text>
            <Text style={styles.body}>Your draft expires in 5 days.</Text>
          </View>
        </View>

        {/* Tile 4: Info */}
        <View style={[styles.tile, styles.readBg]}>
          <View style={[styles.dot, { backgroundColor: UX4GColors.cyan600 }]} />
          <View style={styles.tileContent}>
            <View style={styles.tileHeader}>
              <Text style={styles.typeLabel}>Info</Text>
              <Text style={styles.timeText}>8:03 AM</Text>
            </View>
            <Text style={styles.title}>Birth Certificate · Submitted</Text>
            <Text style={styles.body}>Reference: BC-2026-MH-001.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: UX4GColors.neutral0 },
  header: { paddingHorizontal: 16, paddingVertical: 14, backgroundColor: UX4GColors.neutral0 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#111827' },
  divider: { height: 1, backgroundColor: '#E5E7EB' },
  sectionHeader: { backgroundColor: UX4GColors.neutral100, paddingHorizontal: 16, paddingVertical: 8 },
  sectionText: { fontSize: 12, fontWeight: '500', color: UX4GColors.neutral900 },
  tile: { flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 12 },
  unreadBg: { backgroundColor: UX4GColors.neutral50 },
  readBg: { backgroundColor: UX4GColors.neutral0 },
  dot: { width: 8, height: 8, borderRadius: 4, marginTop: 5, marginRight: 10 },
  tileContent: { flex: 1 },
  tileHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  typeLabel: { fontSize: 12, fontWeight: '600', color: '#111827' },
  timeText: { fontSize: 12, color: '#4B5563' },
  title: { fontSize: 13, fontWeight: '700', color: '#111827', marginTop: 4 },
  body: { fontSize: 12, color: '#4B5563', marginTop: 3, lineHeight: 17.4 },
});`;
    }

    return `import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { UX4GColors } from 'ux4g-react-native-design-system';

export const NotificationPanelDefaultPattern = () => {
  const [items, setItems] = useState([
    { id: '1', title: 'Income Certificate · Action required', body: 'Upload your income proof by 15 Apr.', time: '10:24 AM', isRead: false, action: 'Upload now' },
    { id: '2', title: 'Income Certificate · Action required', body: 'Upload your income proof by 15 Apr.', time: '8:03 AM', isRead: false },
    { id: '3', title: 'Draft expiring · Income Certificate', body: 'Your draft expires in 5 days.', time: '8:03 AM', isRead: true },
  ]);

  const markAllRead = () => {
    setItems((prev) => prev.map((item) => ({ ...item, isRead: true })));
  };

  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notification</Text>
        <TouchableOpacity onPress={markAllRead}>
          <Text style={styles.markReadText}>Mark as read</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionText}>TODAY</Text>
        </View>
        {items.map((item) => (
          <View key={item.id} style={[styles.tile, !item.isRead ? styles.unreadBg : styles.readBg]}>
            <View style={styles.dot} />
            <View style={styles.tileContent}>
              <View style={styles.tileHeader}>
                <Text style={styles.typeLabel}>Action required</Text>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
              {item.action && <Text style={styles.actionText}>{item.action}</Text>}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: UX4GColors.neutral0 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 14 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#111827' },
  markReadText: { fontSize: 13, fontWeight: '500', color: '#6A4EFF' },
  divider: { height: 1, backgroundColor: '#E5E7EB' },
  sectionHeader: { backgroundColor: UX4GColors.neutral100, paddingHorizontal: 16, paddingVertical: 8 },
  sectionText: { fontSize: 12, fontWeight: '500', color: UX4GColors.neutral900 },
  tile: { flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 12 },
  unreadBg: { backgroundColor: UX4GColors.neutral50 },
  readBg: { backgroundColor: UX4GColors.neutral0 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: UX4GColors.red600, marginTop: 5, marginRight: 10 },
  tileContent: { flex: 1 },
  tileHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  typeLabel: { fontSize: 12, fontWeight: '600', color: '#111827' },
  timeText: { fontSize: 12, color: '#4B5563' },
  title: { fontSize: 13, fontWeight: '700', color: '#111827', marginTop: 4 },
  body: { fontSize: 12, color: '#4B5563', marginTop: 3 },
  actionText: { fontSize: 12, fontWeight: '600', color: '#6A4EFF', marginTop: 6 },
});`;
  }, [variant]);

  // Render a notification tile
  const renderTile = (item: NotifData, isLastInSection: boolean) => {
    const tileBg = !item.isRead ? colors.unreadTileBg : colors.readTileBg;
    const dotColor = getDotColor(item.type);

    return (
      <React.Fragment key={item.id}>
        <div
          style={{
            backgroundColor: tileBg,
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
          }}
        >
          {/* Dot */}
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: dotColor,
              marginTop: 5,
              flexShrink: 0,
            }}
          />

          {/* Content Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Top row: type label + time */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: colors.titleText,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                {getLabelText(item)}
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: colors.timeText,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                {item.time}
              </span>
            </div>

            <div style={{ height: 4 }} />

            {/* Title */}
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: colors.titleText,
                lineHeight: 1.3,
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              }}
            >
              {item.title}
            </span>

            <div style={{ height: 3 }} />

            {/* Body */}
            <span
              style={{
                fontSize: 12,
                fontWeight: 400,
                color: colors.subtleText,
                lineHeight: 1.45,
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              }}
            >
              {item.body}
            </span>

            {/* Action Label Link */}
            {item.actionLabel && (
              <div style={{ marginTop: 6 }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: colors.actionText,
                    cursor: 'pointer',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                  onClick={() => alert(`Action: ${item.actionLabel}`)}
                >
                  {item.actionLabel}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Divider line between items */}
        <div
          style={{
            height: 1,
            backgroundColor: colors.border,
            marginLeft: isLastInSection ? 0 : 26,
            marginRight: isLastInSection ? 0 : 0,
          }}
        />
      </React.Fragment>
    );
  };

  // Interactive Live Mockup for Web Preview
  const renderLiveMockup = () => {
    const activeSections = variant === 'notificationTypes' ? typeSections : sections;
    const hasUnread = sections.some((s) => s.items.some((i) => !i.isRead));

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
        {/* Panel Header */}
        <div
          style={{
            backgroundColor: colors.headerBg,
            padding: '14px 8px 14px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${colors.border}`,
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: colors.headerTitle,
              letterSpacing: '-0.2px',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            }}
          >
            Notification
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <button
              type="button"
              disabled={variant === 'emptyState' || !hasUnread}
              onClick={handleMarkAllAsRead}
              style={{
                background: 'none',
                border: 'none',
                padding: '4px 8px',
                fontSize: 13,
                fontWeight: 500,
                color: variant === 'emptyState' || !hasUnread ? colors.markReadDisabled : colors.markReadText,
                cursor: variant === 'emptyState' || !hasUnread ? 'default' : 'pointer',
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              }}
            >
              Mark as read
            </button>
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: 22,
                color: colors.headerTitle,
                cursor: 'pointer',
                padding: 6,
              }}
            >
              close
            </span>
          </div>
        </div>

        {/* Panel Content Body */}
        {variant === 'emptyState' ? (
          /* Empty State View */
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 24,
            }}
          >
            {/* Bell Icon Circle */}
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 32,
                backgroundColor: colors.emptyIconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 32,
                  color: colors.emptyIconColor,
                }}
              >
                notifications_none
              </span>
            </div>

            <div style={{ height: 16 }} />

            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: colors.headerTitle,
                margin: 0,
                textAlign: 'center',
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              }}
            >
              No new notifications
            </h3>

            <div style={{ height: 8 }} />

            <p
              style={{
                fontSize: 13,
                fontWeight: 400,
                color: colors.subtleText,
                margin: 0,
                textAlign: 'center',
                lineHeight: 1.5,
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              }}
            >
              Currently, there are no notifications to display. You can check back later!
            </p>
          </div>
        ) : (
          /* List View (With Notifications or Notification Types) */
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {activeSections.map((section) => (
              <div key={section.label}>
                {/* Section Header */}
                <div
                  style={{
                    backgroundColor: colors.sectionBg,
                    padding: '8px 16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: colors.sectionText,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      letterSpacing: '0.3px',
                    }}
                  >
                    {section.label}
                  </span>
                </div>

                {/* Section Items */}
                {section.items.map((item, idx) =>
                  renderTile(item, idx === section.items.length - 1)
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Notification</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Notification panel pattern. Unread items have a light background; read items are white. Tap "Mark as read" to clear unread states.
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
                  {/* Variant Selector Pill Control */}
                  <div
                    style={{
                      display: 'flex',
                      gap: 8,
                      marginBottom: 24,
                      backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
                      padding: 4,
                      borderRadius: 10,
                      border: `1px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.neutral200}`,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setVariant('withNotifications')}
                      style={{
                        padding: '8px 16px',
                        borderRadius: 8,
                        border: 'none',
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: 'pointer',
                        backgroundColor: variant === 'withNotifications' ? UX4GColors.primary : 'transparent',
                        color: variant === 'withNotifications' ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      With Notifications
                    </button>
                    <button
                      type="button"
                      onClick={() => setVariant('notificationTypes')}
                      style={{
                        padding: '8px 16px',
                        borderRadius: 8,
                        border: 'none',
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: 'pointer',
                        backgroundColor: variant === 'notificationTypes' ? UX4GColors.primary : 'transparent',
                        color: variant === 'notificationTypes' ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      Notification Types
                    </button>
                    <button
                      type="button"
                      onClick={() => setVariant('emptyState')}
                      style={{
                        padding: '8px 16px',
                        borderRadius: 8,
                        border: 'none',
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: 'pointer',
                        backgroundColor: variant === 'emptyState' ? UX4GColors.primary : 'transparent',
                        color: variant === 'emptyState' ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      Empty State
                    </button>
                  </div>

                  {/* Render Mobile Phone Mockup */}
                  {renderLiveMockup()}
                </div>
              </Ux4gThemeProvider>
            )}

            {/* 2. Code Tab */}
            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                {/* Variant Switch in Code Tab */}
                <div
                  style={{
                    display: 'flex',
                    gap: 8,
                    marginBottom: 16,
                    padding: '8px 16px',
                    backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
                    borderRadius: 8,
                    alignItems: 'center',
                    border: `1px solid ${isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}`,
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 600, color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }}>
                    Active Variant:
                  </span>
                  <button
                    type="button"
                    onClick={() => setVariant('withNotifications')}
                    style={{
                      padding: '4px 12px',
                      borderRadius: 6,
                      border: 'none',
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: 'pointer',
                      backgroundColor: variant === 'withNotifications' ? UX4GColors.primary : 'transparent',
                      color: variant === 'withNotifications' ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                    }}
                  >
                    With Notifications
                  </button>
                  <button
                    type="button"
                    onClick={() => setVariant('notificationTypes')}
                    style={{
                      padding: '4px 12px',
                      borderRadius: 6,
                      border: 'none',
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: 'pointer',
                      backgroundColor: variant === 'notificationTypes' ? UX4GColors.primary : 'transparent',
                      color: variant === 'notificationTypes' ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                    }}
                  >
                    Notification Types
                  </button>
                  <button
                    type="button"
                    onClick={() => setVariant('emptyState')}
                    style={{
                      padding: '4px 12px',
                      borderRadius: 6,
                      border: 'none',
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: 'pointer',
                      backgroundColor: variant === 'emptyState' ? UX4GColors.primary : 'transparent',
                      color: variant === 'emptyState' ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                    }}
                  >
                    Empty State
                  </button>
                </div>
                <CodeBlock code={codeString} language="tsx" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
