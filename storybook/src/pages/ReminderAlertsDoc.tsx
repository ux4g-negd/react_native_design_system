import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';
import { Ux4gToast, Ux4gToastCategory } from '../../../src/components/toast/Toast';

interface ReminderAlertsDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type AlertTypeOption =
  | '30 days before expiry'
  | '5 days before expiry'
  | '2 days before expiry'
  | 'On expiry day'
  | '1 hour before'
  | 'All Reminders (Panel)';

interface ReminderAlertItem {
  id: string;
  title: string;
  body: string;
  category: Ux4gToastCategory;
  iconName: string;
  iconColor: string;
  actionLabel?: string;
  dismissed: boolean;
}

export const ReminderAlertsDoc: React.FC<ReminderAlertsDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [alertType, setAlertType] = useState<AlertTypeOption>('30 days before expiry');

  // Master list of 5 reminder alerts matching Flutter _buildReminderAlerts()
  const initialAlerts: ReminderAlertItem[] = useMemo(() => [
    {
      id: '30days',
      title: '30 days before expiry',
      body: 'Your Income Certificate expires on 15 May 2026 (30 days away). Renew early to avoid a service gap: bit.ly/renew-mh.',
      category: 'info',
      iconName: 'info',
      iconColor: '#14B8A6',
      actionLabel: 'Renew Application',
      dismissed: false,
    },
    {
      id: '5days',
      title: '5 days before expiry',
      body: 'Your Income Certificate draft expires in 5 days (16 Apr). Resume now: bit.ly/resume-mh.',
      category: 'warning',
      iconName: 'warning',
      iconColor: '#F59E0B',
      actionLabel: 'Resume Application',
      dismissed: false,
    },
    {
      id: '2days',
      title: '2 days before expiry',
      body: 'Only 2 days left. Submit your Income Certificate before 16 Apr or your draft will be deleted. Resume: bit.ly/resume-mh.',
      category: 'error',
      iconName: 'error',
      iconColor: '#EF4444',
      actionLabel: 'Start new Application',
      dismissed: false,
    },
    {
      id: 'expiryDay',
      title: 'On expiry day',
      body: 'Your Income Certificate draft expired on 16 Apr. Your saved data has been removed. Start a new application: bit.ly/apply-mh.',
      category: 'error',
      iconName: 'error',
      iconColor: '#EF4444',
      actionLabel: 'Start new Application',
      dismissed: false,
    },
    {
      id: '1hour',
      title: '1 hour before: Sent 10:13 AM',
      body: 'In 1 hour: Your 11:00 AM field inspection. Revenue Inspector, Sector 12 office. Directions: bit.ly/dir-mh.',
      category: 'success',
      iconName: 'check_circle',
      iconColor: '#22C55E',
      actionLabel: 'View Application',
      dismissed: false,
    },
  ], []);

  const [alerts, setAlerts] = useState<ReminderAlertItem[]>(initialAlerts);
  const [singleDismissed, setSingleDismissed] = useState<boolean>(false);

  // Reset single dismissal when switching option
  const handleAlertTypeChange = (newType: AlertTypeOption) => {
    setAlertType(newType);
    setSingleDismissed(false);
  };

  const handleDismissSingle = () => {
    setSingleDismissed(true);
  };

  const handleDismissItem = (id: string) => {
    setAlerts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, dismissed: true } : item))
    );
  };

  const handleResetAll = () => {
    setAlerts(initialAlerts.map((item) => ({ ...item, dismissed: false })));
    setSingleDismissed(false);
  };

  const colors = useMemo(() => {
    return {
      bgScreen: isDark ? UX4GColors.neutral950 : UX4GColors.neutral0,
      headerBg: isDark ? UX4GColors.neutral800 : UX4GColors.neutral0,
      headerTitle: isDark ? UX4GColors.neutral0 : '#111827',
      border: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      sectionBg: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
      sectionText: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      toastBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
      subtleText: isDark ? UX4GColors.neutral400 : '#4B5563',
    };
  }, [isDark]);

  // Map active code snippet
  const codeString = useMemo(() => {
    switch (alertType) {
      case '30 days before expiry':
        return `import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gToast, UX4GColors } from 'ux4g-react-native-design-system';

export const Reminder30DaysAlert = () => {
  return (
    <View style={styles.container}>
      <Ux4gToast
        category="info"
        title="30 days before expiry"
        subtitle="Your Income Certificate expires on 15 May 2026 (30 days away). Renew early to avoid a service gap: bit.ly/renew-mh."
        actionText="Renew Application"
        onActionClick={() => {}}
        onCloseClick={() => {}}
        showCloseButton={true}
        layout="stacked"
        backgroundColor={UX4GColors.neutral50}
        iconColor="#14B8A6"
        actionColor="#6A4EFF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
});`;
      case '5 days before expiry':
        return `import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gToast, UX4GColors } from 'ux4g-react-native-design-system';

export const Reminder5DaysAlert = () => {
  return (
    <View style={styles.container}>
      <Ux4gToast
        category="warning"
        title="5 days before expiry"
        subtitle="Your Income Certificate draft expires in 5 days (16 Apr). Resume now: bit.ly/resume-mh."
        actionText="Resume Application"
        onActionClick={() => {}}
        onCloseClick={() => {}}
        showCloseButton={true}
        layout="stacked"
        backgroundColor={UX4GColors.neutral50}
        iconColor="#F59E0B"
        actionColor="#6A4EFF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
});`;
      case '2 days before expiry':
        return `import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gToast, UX4GColors } from 'ux4g-react-native-design-system';

export const Reminder2DaysAlert = () => {
  return (
    <View style={styles.container}>
      <Ux4gToast
        category="error"
        title="2 days before expiry"
        subtitle="Only 2 days left. Submit your Income Certificate before 16 Apr or your draft will be deleted. Resume: bit.ly/resume-mh."
        actionText="Start new Application"
        onActionClick={() => {}}
        onCloseClick={() => {}}
        showCloseButton={true}
        layout="stacked"
        backgroundColor={UX4GColors.neutral50}
        iconColor="#EF4444"
        actionColor="#6A4EFF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
});`;
      case 'On expiry day':
        return `import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gToast, UX4GColors } from 'ux4g-react-native-design-system';

export const ReminderExpiryDayAlert = () => {
  return (
    <View style={styles.container}>
      <Ux4gToast
        category="error"
        title="On expiry day"
        subtitle="Your Income Certificate draft expired on 16 Apr. Your saved data has been removed. Start a new application: bit.ly/apply-mh."
        actionText="Start new Application"
        onActionClick={() => {}}
        onCloseClick={() => {}}
        showCloseButton={true}
        layout="stacked"
        backgroundColor={UX4GColors.neutral50}
        iconColor="#EF4444"
        actionColor="#6A4EFF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
});`;
      case '1 hour before':
        return `import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gToast, UX4GColors } from 'ux4g-react-native-design-system';

export const Reminder1HourAlert = () => {
  return (
    <View style={styles.container}>
      <Ux4gToast
        category="success"
        title="1 hour before: Sent 10:13 AM"
        subtitle="In 1 hour: Your 11:00 AM field inspection. Revenue Inspector, Sector 12 office. Directions: bit.ly/dir-mh."
        actionText="View Application"
        onActionClick={() => {}}
        onCloseClick={() => {}}
        showCloseButton={true}
        layout="stacked"
        backgroundColor={UX4GColors.neutral50}
        iconColor="#22C55E"
        actionColor="#6A4EFF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
});`;
      case 'All Reminders (Panel)':
      default:
        return `import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ux4gToast, UX4GColors } from 'ux4g-react-native-design-system';

export const RemindersPanelPattern = () => {
  const [alerts, setAlerts] = useState([
    { id: '1', title: '30 days before expiry', body: 'Your Income Certificate expires on 15 May 2026...', category: 'info', iconColor: '#14B8A6', actionText: 'Renew Application' },
    { id: '2', title: '5 days before expiry', body: 'Your Income Certificate draft expires in 5 days...', category: 'warning', iconColor: '#F59E0B', actionText: 'Resume Application' },
    { id: '3', title: '2 days before expiry', body: 'Only 2 days left. Submit before 16 Apr...', category: 'error', iconColor: '#EF4444', actionText: 'Start new Application' },
    { id: '4', title: '1 hour before: Sent 10:13 AM', body: 'In 1 hour: Your 11:00 AM field inspection...', category: 'success', iconColor: '#22C55E', actionText: 'View Application' },
  ]);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notification</Text>
      </View>
      <View style={styles.divider} />

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionText}>REMINDERS</Text>
        </View>

        {alerts.map((item) => (
          <View key={item.id} style={{ paddingHorizontal: 12, paddingVertical: 4 }}>
            <Ux4gToast
              category={item.category as any}
              title={item.title}
              subtitle={item.body}
              actionText={item.actionText}
              showCloseButton={true}
              layout="stacked"
              backgroundColor={UX4GColors.neutral50}
              iconColor={item.iconColor}
              actionColor="#6A4EFF"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: UX4GColors.neutral0 },
  header: { paddingHorizontal: 16, paddingVertical: 14 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#111827' },
  divider: { height: 1, backgroundColor: '#E5E7EB' },
  sectionHeader: { backgroundColor: UX4GColors.neutral100, paddingHorizontal: 16, paddingVertical: 8 },
  sectionText: { fontSize: 12, fontWeight: '500', color: UX4GColors.neutral900 },
});`;
    }
  }, [alertType]);

  // Selected single alert for single-toast view
  const currentSingleAlert = useMemo(() => {
    if (alertType === '1 hour before') {
      return alerts.find((a) => a.id === '1hour')!;
    }
    if (alertType === '30 days before expiry') {
      return alerts.find((a) => a.id === '30days')!;
    }
    if (alertType === '5 days before expiry') {
      return alerts.find((a) => a.id === '5days')!;
    }
    if (alertType === '2 days before expiry') {
      return alerts.find((a) => a.id === '2days')!;
    }
    if (alertType === 'On expiry day') {
      return alerts.find((a) => a.id === 'expiryDay')!;
    }
    return alerts[0];
  }, [alertType, alerts]);

  // Render Mobile Phone Mockup
  const renderLiveMockup = () => {
    const isPanel = alertType === 'All Reminders (Panel)';
    const visibleAlerts = alerts.filter((a) => !a.dismissed);

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
            padding: '14px 16px',
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

          <span
            className="material-symbols-outlined"
            style={{
              fontSize: 22,
              color: colors.headerTitle,
              cursor: 'pointer',
              padding: 4,
            }}
          >
            close
          </span>
        </div>

        {/* Content Area */}
        {isPanel ? (
          /* Stacked Panel View */
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {visibleAlerts.length === 0 ? (
              /* All Dismissed Empty State */
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
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 32,
                    backgroundColor: isDark ? UX4GColors.neutral800 : '#F3F4F6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: 32,
                      color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral400,
                    }}
                  >
                    notifications_none
                  </span>
                </div>
                <div style={{ height: 16 }} />
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: colors.headerTitle,
                    margin: 0,
                    textAlign: 'center',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  No reminders
                </h3>
                <div style={{ height: 8 }} />
                <p
                  style={{
                    fontSize: 13,
                    color: colors.subtleText,
                    margin: 0,
                    textAlign: 'center',
                    lineHeight: 1.5,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  All reminders have been dismissed.
                </p>
                <div style={{ height: 16 }} />
                <button
                  type="button"
                  onClick={handleResetAll}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 8,
                    border: 'none',
                    backgroundColor: UX4GColors.primary,
                    color: UX4GColors.neutral0,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Reset Reminders
                </button>
              </div>
            ) : (
              /* List of Visible Reminder Toasts */
              <div style={{ flex: 1, overflowY: 'auto' }}>
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
                    REMINDERS
                  </span>
                </div>

                <div style={{ padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {visibleAlerts.map((item) => (
                    <Ux4gToast
                      key={item.id}
                      category={item.category}
                      title={item.title}
                      subtitle={item.body}
                      actionText={item.actionLabel}
                      onActionClick={item.actionLabel ? () => alert(`Action: ${item.actionLabel}`) : undefined}
                      onCloseClick={() => handleDismissItem(item.id)}
                      showCloseButton={true}
                      layout="stacked"
                      backgroundColor={colors.toastBg}
                      iconColor={item.iconColor}
                      actionColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Single Toast Alert View (Pinned at bottom matching Flutter _ReminderAlertMockup) */
          <div
            style={{
              flex: 1,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: 12,
            }}
          >
            {singleDismissed ? (
              <div style={{ textAlign: 'center', padding: 24 }}>
                <span
                  style={{
                    fontSize: 13,
                    color: colors.subtleText,
                    display: 'block',
                    marginBottom: 12,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Alert dismissed
                </span>
                <button
                  type="button"
                  onClick={() => setSingleDismissed(false)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 6,
                    border: 'none',
                    backgroundColor: UX4GColors.primary,
                    color: UX4GColors.neutral0,
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Show Alert Again
                </button>
              </div>
            ) : (
              <div
                style={{
                  borderRadius: 12,
                  boxShadow: isDark
                    ? '0 4px 16px rgba(0, 0, 0, 0.4)'
                    : '0 4px 16px rgba(0, 0, 0, 0.08)',
                }}
              >
                <Ux4gToast
                  category={currentSingleAlert.category}
                  title={currentSingleAlert.title}
                  subtitle={currentSingleAlert.body}
                  actionText={currentSingleAlert.actionLabel}
                  onActionClick={
                    currentSingleAlert.actionLabel
                      ? () => alert(`Action: ${currentSingleAlert.actionLabel}`)
                      : undefined
                  }
                  onCloseClick={handleDismissSingle}
                  showCloseButton={true}
                  layout="stacked"
                  backgroundColor={colors.toastBg}
                  iconColor={currentSingleAlert.iconColor}
                  actionColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
                />
              </div>
            )}
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
          <h1 className="wb-title">Reminder Alerts</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Deadline-aware reminder alerts using stacked Toast notifications. Category changes by urgency: info (30 days) · warning (5 days) · error (2 days / expiry day) · success (1 hour).
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
                  {/* Alert Type Knob Control */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 6,
                      justifyContent: 'center',
                      marginBottom: 24,
                      backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
                      padding: 6,
                      borderRadius: 12,
                      border: `1px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.neutral200}`,
                      maxWidth: 680,
                    }}
                  >
                    {[
                      '30 days before expiry',
                      '5 days before expiry',
                      '2 days before expiry',
                      'On expiry day',
                      '1 hour before',
                      'All Reminders (Panel)',
                    ].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleAlertTypeChange(opt as AlertTypeOption)}
                        style={{
                          padding: '6px 14px',
                          borderRadius: 8,
                          border: 'none',
                          fontSize: 12,
                          fontWeight: 600,
                          cursor: 'pointer',
                          backgroundColor: alertType === opt ? UX4GColors.primary : 'transparent',
                          color: alertType === opt ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  {/* Render Mobile Phone Mockup */}
                  {renderLiveMockup()}
                </div>
              </Ux4gThemeProvider>
            )}

            {/* 2. Code Tab */}
            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                {/* Alert Type Switch in Code Tab */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 6,
                    marginBottom: 16,
                    padding: '8px 12px',
                    backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
                    borderRadius: 8,
                    alignItems: 'center',
                    border: `1px solid ${isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}`,
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 600, color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700, marginRight: 4 }}>
                    Active Scenario:
                  </span>
                  {[
                    '30 days before expiry',
                    '5 days before expiry',
                    '2 days before expiry',
                    'On expiry day',
                    '1 hour before',
                    'All Reminders (Panel)',
                  ].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleAlertTypeChange(opt as AlertTypeOption)}
                      style={{
                        padding: '4px 10px',
                        borderRadius: 6,
                        border: 'none',
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: 'pointer',
                        backgroundColor: alertType === opt ? UX4GColors.primary : 'transparent',
                        color: alertType === opt ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                      }}
                    >
                      {opt}
                    </button>
                  ))}
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
