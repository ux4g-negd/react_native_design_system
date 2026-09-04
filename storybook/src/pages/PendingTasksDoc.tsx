import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface PendingTasksDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

export const PendingTasksDoc: React.FC<PendingTasksDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [selectedTab, setSelectedTab] = useState<number>(2); // 'Under Review' default
  const [expandedCard1, setExpandedCard1] = useState<boolean>(true);
  const [expandedCard2, setExpandedCard2] = useState<boolean>(false);
  const [expandedCard3, setExpandedCard3] = useState<boolean>(false);
  const [expandedCard4, setExpandedCard4] = useState<boolean>(false);

  const colors = useMemo(() => {
    return {
      screenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
      headerBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      dividerColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      verticalDividerColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      detailLabel: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      detailValue: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      iconBg: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
      redUrgencyText: isDark ? UX4GColors.red300 : UX4GColors.red600,
      redUrgencyBg: isDark ? '#450A0A' : UX4GColors.red100,
      orangeUrgencyText: isDark ? '#FDBA74' : '#AD4E00',
      orangeUrgencyBg: isDark ? '#431407' : UX4GColors.orange100,
      tealUrgencyText: isDark ? '#5EEAD4' : '#006D75',
      tealUrgencyBg: isDark ? '#042F2E' : '#C9F7F2',
      greenUrgencyText: isDark ? UX4GColors.green300 : UX4GColors.green600,
      greenUrgencyBg: isDark ? '#052E16' : UX4GColors.green100,
      outlineBtnBorder: isDark ? UX4GColors.primary400 : UX4GColors.primary300,
    };
  }, [isDark]);

  const tabs = [
    { label: 'All', count: '62' },
    { label: 'Pending', count: '3' },
    { label: 'Under Review', count: '12' },
    { label: 'Approved', count: '41' },
    { label: 'Rejected', count: '6' },
  ];

  const codeString = useMemo(() => {
    return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const PendingTasksScreen = ({
  isDark = false,
  onUploadNow = () => {},
  onPayNow = () => {},
  onScheduleSlot = () => {},
  onViewReceipt = () => {},
}: {
  isDark?: boolean;
  onUploadNow?: () => void;
  onPayNow?: () => void;
  onScheduleSlot?: () => void;
  onViewReceipt?: () => void;
}) => {
  const [selectedTab, setSelectedTab] = useState(2);
  const [expandedCard1, setExpandedCard1] = useState(true);
  const [expandedCard2, setExpandedCard2] = useState(false);
  const [expandedCard3, setExpandedCard3] = useState(false);

  const tabs = [
    { label: 'All', count: '62' },
    { label: 'Pending', count: '3' },
    { label: 'Under Review', count: '12' },
    { label: 'Approved', count: '41' },
    { label: 'Rejected', count: '6' },
  ];

  const screenBg = isDark ? UX4GColors.neutral950 : UX4GColors.neutral50;
  const headerBg = isDark ? UX4GColors.neutral900 : UX4GColors.neutral0;
  const cardBg = isDark ? UX4GColors.neutral900 : UX4GColors.neutral0;
  const borderColor = isDark ? UX4GColors.neutral700 : UX4GColors.neutral200;
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleText = isDark ? UX4GColors.neutral200 : UX4GColors.neutral700;
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: screenBg }]}>
      {/* Header */}
      <Ux4gAppHeader
        variant={isDark ? 'dark' : 'light'}
        title=""
        leadingWidgets={[
          <View key="logos" style={styles.headerLeading}>
            <Image
              source={require('./assets/national_emblem.png')}
              style={[
                styles.emblem,
                { tintColor: isDark ? '#FFFFFF' : undefined },
              ]}
              resizeMode="contain"
            />
            <Ux4gDivider orientation="vertical" color={borderColor} style={{ height: 24 }} />
            <Image
              source={require('./assets/union.png')}
              style={styles.unionLogo}
              resizeMode="contain"
            />
            <Text style={[styles.govTitle, { color: titleColor }]}>
              Government of India
            </Text>
          </View>,
        ]}
        actions={[
          {
            icon: 'notifications-outline',
            onPress: () => {},
          },
        ]}
        showAvatar
        avatarInitials="R"
      />
      <Ux4gDivider color={borderColor} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Title */}
        <Text style={[styles.greetingTitle, { color: titleColor }]}>
          Pending Tasks
        </Text>
        <Text style={[styles.greetingSubtitle, { color: subtleText }]}>
          3 tasks need your attention
        </Text>

        {/* Tab Filters */}
        <View style={styles.tabBar}>
          {tabs.map((tab, index) => {
            const isSelected = selectedTab === index;
            return (
              <TouchableOpacity
                key={tab.label}
                onPress={() => setSelectedTab(index)}
                style={[
                  styles.tabChip,
                  {
                    backgroundColor: isSelected ? UX4GColors.primary600 : cardBg,
                    borderColor: isSelected ? UX4GColors.primary600 : borderColor,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.tabChipText,
                    { color: isSelected ? '#FFFFFF' : titleColor },
                  ]}
                >
                  {tab.label}
                </Text>
                <View
                  style={[
                    styles.tabCountBadge,
                    { backgroundColor: isSelected ? 'transparent' : UX4GColors.primary600 },
                  ]}
                >
                  <Text style={styles.tabCountText}>{tab.count}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Task Card 1 (Expanded) */}
        <View style={[styles.taskCard, { backgroundColor: cardBg, borderColor }]}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setExpandedCard1(!expandedCard1)}
            style={styles.cardHeaderRow}
          >
            <View style={[styles.iconBox, { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100 }]}>
              <Text style={{ fontSize: 16 }}>📤</Text>
            </View>
            <View style={styles.cardHeaderContent}>
              <Text style={[styles.cardTitle, { color: titleColor }]}>
                Upload income proof
              </Text>
              <Text style={[styles.cardSubtitle, { color: subtleText }]}>
                Income Certificate · INC-2026-MH-04127
              </Text>
            </View>
            <Text style={{ color: subtleText, fontSize: 14 }}>
              {expandedCard1 ? '▲' : '▼'}
            </Text>
          </TouchableOpacity>

          <View style={[styles.urgencyTag, { backgroundColor: isDark ? '#450A0A' : UX4GColors.red100 }]}>
            <Text style={[styles.urgencyText, { color: isDark ? UX4GColors.red300 : UX4GColors.red600 }]}>
              Overdue by 2 days
            </Text>
          </View>

          {expandedCard1 && (
            <>
              <Ux4gDivider color={borderColor} style={{ marginVertical: 12 }} />
              <View style={styles.detailsGrid}>
                <View style={styles.detailRow}>
                  <View style={styles.detailCol}>
                    <Text style={[styles.detailLabel, { color: subtleText }]}>Deadline</Text>
                    <Text style={[styles.detailValue, { color: titleColor }]}>10 Apr 2026</Text>
                  </View>
                  <View style={styles.detailCol}>
                    <Text style={[styles.detailLabel, { color: subtleText }]}>Reference</Text>
                    <Text style={[styles.detailValue, { color: titleColor }]}>INC-2026-MH-04127</Text>
                  </View>
                </View>
                <View style={styles.detailRow}>
                  <View style={styles.detailCol}>
                    <Text style={[styles.detailLabel, { color: subtleText }]}>Department</Text>
                    <Text style={[styles.detailValue, { color: titleColor }]}>Revenue Department</Text>
                  </View>
                  <View style={styles.detailCol}>
                    <Text style={[styles.detailLabel, { color: subtleText }]}>Have issues?</Text>
                    <TouchableOpacity>
                      <Text style={[styles.linkText, { color: primaryColor }]}>Contact support →</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={{ marginTop: 16 }}>
                <Ux4gButton
                  text="Upload now"
                  onPress={onUploadNow}
                  variant="primary"
                  backgroundColor={UX4GColors.primary600}
                />
              </View>
            </>
          )}
        </View>

        {/* Task Card 2 (Collapsed) */}
        <View style={[styles.taskCard, { backgroundColor: cardBg, borderColor }]}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setExpandedCard2(!expandedCard2)}
            style={styles.cardHeaderRow}
          >
            <View style={[styles.iconBox, { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100 }]}>
              <Text style={{ fontSize: 16 }}>💳</Text>
            </View>
            <View style={styles.cardHeaderContent}>
              <Text style={[styles.cardTitle, { color: titleColor }]}>
                Pay application fee
              </Text>
              <Text style={[styles.cardSubtitle, { color: subtleText }]}>
                Birth Certificate · ₹50 application fee
              </Text>
            </View>
            <Text style={{ color: subtleText, fontSize: 14 }}>
              {expandedCard2 ? '▲' : '▼'}
            </Text>
          </TouchableOpacity>

          <View style={[styles.urgencyTag, { backgroundColor: isDark ? '#431407' : UX4GColors.orange100 }]}>
            <Text style={[styles.urgencyText, { color: isDark ? '#FDBA74' : '#AD4E00' }]}>
              Due in 5 days
            </Text>
          </View>

          <View style={{ marginTop: 12 }}>
            <Ux4gButton
              text="Pay now"
              onPress={onPayNow}
              variant="primary"
              backgroundColor={UX4GColors.primary600}
            />
          </View>
        </View>

        {/* Task Card 3 (Collapsed) */}
        <View style={[styles.taskCard, { backgroundColor: cardBg, borderColor }]}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setExpandedCard3(!expandedCard3)}
            style={styles.cardHeaderRow}
          >
            <View style={[styles.iconBox, { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100 }]}>
              <Text style={{ fontSize: 16 }}>📅</Text>
            </View>
            <View style={styles.cardHeaderContent}>
              <Text style={[styles.cardTitle, { color: titleColor }]}>
                Schedule field inspection
              </Text>
              <Text style={[styles.cardSubtitle, { color: subtleText }]}>
                Land Records Update · LRU-2026-MH-00231
              </Text>
            </View>
            <Text style={{ color: subtleText, fontSize: 14 }}>
              {expandedCard3 ? '▲' : '▼'}
            </Text>
          </TouchableOpacity>

          <View style={[styles.urgencyTag, { backgroundColor: isDark ? '#042F2E' : '#C9F7F2' }]}>
            <Text style={[styles.urgencyText, { color: isDark ? '#5EEAD4' : '#006D75' }]}>
              Due in 9 days
            </Text>
          </View>

          <View style={{ marginTop: 12 }}>
            <Ux4gButton
              text="Schedule slot"
              onPress={onScheduleSlot}
              variant="outline"
              borderColor={isDark ? UX4GColors.primary400 : UX4GColors.primary300}
              contentColor={primaryColor}
            />
          </View>
        </View>

        {/* Completed Section */}
        <Text style={[styles.sectionHeading, { color: titleColor }]}>
          Completed today
        </Text>

        {/* Completed Card */}
        <View style={[styles.taskCard, { backgroundColor: cardBg, borderColor }]}>
          <View style={styles.cardHeaderRow}>
            <View style={[styles.iconBox, { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100 }]}>
              <Text style={{ fontSize: 16 }}>🛡️</Text>
            </View>
            <View style={styles.cardHeaderContent}>
              <Text style={[styles.cardTitle, { color: titleColor }]}>
                Aadhaar e-KYC verification
              </Text>
              <Text style={[styles.cardSubtitle, { color: subtleText }]}>
                Ration Card Renewal · RCR-2026-MH-00917
              </Text>
            </View>
            <Text style={{ color: subtleText, fontSize: 14 }}>▼</Text>
          </View>

          <View style={[styles.urgencyTag, { backgroundColor: isDark ? '#052E16' : UX4GColors.green100 }]}>
            <Text style={[styles.urgencyText, { color: isDark ? UX4GColors.green300 : UX4GColors.green600 }]}>
              Completed
            </Text>
          </View>

          <TouchableOpacity onPress={onViewReceipt} style={styles.viewReceiptBtn}>
            <Text style={[styles.linkText, { color: primaryColor }]}>
              View receipt
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  headerLeading: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  emblem: { height: 36, width: 26 },
  unionLogo: { height: 26, width: 34 },
  govTitle: { fontSize: 13, fontWeight: '600' },
  scrollContent: { padding: 20 },
  greetingTitle: { fontSize: 20, fontWeight: '800', marginBottom: 4 },
  greetingSubtitle: { fontSize: 13, marginBottom: 16 },
  tabBar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  tabChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    borderWidth: 1,
    gap: 6,
  },
  tabChipText: { fontSize: 12, fontWeight: '500' },
  tabCountBadge: {
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  tabCountText: { fontSize: 11, fontWeight: '600', color: '#FFFFFF' },
  taskCard: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  iconBox: {
    width: 32,
    height: 32,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardHeaderContent: { flex: 1 },
  cardTitle: { fontSize: 14, fontWeight: '700', marginBottom: 2 },
  cardSubtitle: { fontSize: 12 },
  urgencyTag: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    marginTop: 8,
  },
  urgencyText: { fontSize: 12, fontWeight: '500' },
  detailsGrid: { gap: 12 },
  detailRow: { flexDirection: 'row', gap: 12 },
  detailCol: { flex: 1 },
  detailLabel: { fontSize: 11, marginBottom: 2 },
  detailValue: { fontSize: 13, fontWeight: '500' },
  linkText: { fontSize: 13, fontWeight: '500' },
  sectionHeading: { fontSize: 14, fontWeight: '700', marginVertical: 16 },
  viewReceiptBtn: {
    alignItems: 'center',
    marginTop: 12,
    paddingVertical: 4,
  },
});
`;
  }, []);

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Pending Tasks</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A task-oriented pattern showing pending actions the user needs to complete. Includes tab filters, expandable task cards with deadlines, and completed tasks section.
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
              <div
                className={`wb-preview-area ${isDark ? 'dark' : ''}`}
                style={{ flexDirection: 'column', alignItems: 'center' }}
              >
                {/* Phone Frame Mockup */}
                <div
                  style={{
                    width: 360,
                    height: 760,
                    borderRadius: 20,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: colors.screenBg,
                    border: isDark ? 'none' : '1px solid #E5E7EB',
                    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)',
                    position: 'relative',
                    boxSizing: 'border-box',
                  }}
                >
                  {/* Header (Top) */}
                  <div
                    style={{
                      backgroundColor: colors.headerBg,
                      padding: '10px 14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexShrink: 0,
                      borderBottom: `1px solid ${colors.dividerColor}`,
                    }}
                  >
                    {/* Left group */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <img
                        src="/national_emblem_logo.svg"
                        alt="National Emblem"
                        style={{
                          height: 28,
                          width: 'auto',
                          filter: isDark ? 'brightness(0) invert(1)' : 'none',
                        }}
                      />
                      <div
                        style={{
                          width: 1,
                          height: 24,
                          backgroundColor: colors.verticalDividerColor,
                        }}
                      />
                      <UnionLogo color={colors.primaryColor} size={24} />
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: colors.titleColor,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Government of India
                      </span>
                    </div>

                    {/* Right group */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <button
                        type="button"
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 4,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: colors.titleColor,
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                          notifications
                        </span>
                      </button>
                      {/* Avatar with online dot */}
                      <div style={{ position: 'relative' }}>
                        <div
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: '50%',
                            backgroundColor: UX4GColors.primary600,
                            color: '#FFFFFF',
                            fontSize: 12,
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          R
                        </div>
                        <div
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: 7,
                            height: 7,
                            borderRadius: '50%',
                            backgroundColor: '#22C55E',
                            border: `1.5px solid ${colors.headerBg}`,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Scrollable Body */}
                  <div
                    style={{
                      flex: 1,
                      overflowY: 'auto',
                      padding: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      boxSizing: 'border-box',
                    }}
                  >
                    {/* Title */}
                    <div
                      style={{
                        fontSize: 20,
                        fontWeight: 800,
                        color: colors.titleColor,
                        marginBottom: 4,
                        letterSpacing: '-0.3px',
                      }}
                    >
                      Pending Tasks
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: colors.subtleText,
                        marginBottom: 16,
                      }}
                    >
                      3 tasks need your attention
                    </div>

                    {/* Tab Filters */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 8,
                        marginBottom: 20,
                      }}
                    >
                      {tabs.map((tab, index) => {
                        const isSelected = selectedTab === index;
                        return (
                          <div
                            key={tab.label}
                            onClick={() => setSelectedTab(index)}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 6,
                              padding: '6px 8px',
                              borderRadius: 4,
                              border: `1px solid ${
                                isSelected ? UX4GColors.primary600 : colors.border
                              }`,
                              backgroundColor: isSelected
                                ? UX4GColors.primary600
                                : colors.cardBg,
                              cursor: 'pointer',
                              userSelect: 'none',
                            }}
                          >
                            <span
                              style={{
                                fontSize: 12,
                                fontWeight: 500,
                                color: isSelected ? '#FFFFFF' : colors.titleColor,
                              }}
                            >
                              {tab.label}
                            </span>
                            {isSelected ? (
                              <span
                                style={{
                                  fontSize: 11,
                                  fontWeight: 600,
                                  color: '#FFFFFF',
                                  lineHeight: 1,
                                }}
                              >
                                {tab.count}
                              </span>
                            ) : (
                              <span
                                style={{
                                  backgroundColor: UX4GColors.primary600,
                                  color: '#FFFFFF',
                                  fontSize: 11,
                                  fontWeight: 600,
                                  padding: '1px 5px',
                                  borderRadius: 10,
                                  lineHeight: 1.2,
                                }}
                              >
                                {tab.count}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Task Card 1 (Expanded) */}
                    <div
                      style={{
                        backgroundColor: colors.cardBg,
                        border: `1px solid ${colors.border}`,
                        borderRadius: 12,
                        padding: 16,
                        marginBottom: 16,
                      }}
                    >
                      <div
                        onClick={() => setExpandedCard1(!expandedCard1)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 8,
                          cursor: 'pointer',
                        }}
                      >
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 4,
                            backgroundColor: colors.iconBg,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 18, color: colors.subtleText }}
                          >
                            upload_file
                          </span>
                        </div>
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              fontSize: 14,
                              fontWeight: 700,
                              color: colors.titleColor,
                              marginBottom: 2,
                            }}
                          >
                            Upload income proof
                          </div>
                          <div style={{ fontSize: 12, color: colors.subtleText }}>
                            Income Certificate · INC-2026-MH-04127
                          </div>
                        </div>
                        <span
                          className="material-symbols-outlined"
                          style={{
                            fontSize: 18,
                            color: colors.subtleText,
                            transform: expandedCard1 ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                          }}
                        >
                          keyboard_arrow_down
                        </span>
                      </div>

                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '3px 8px',
                          borderRadius: 4,
                          backgroundColor: colors.redUrgencyBg,
                          color: colors.redUrgencyText,
                          fontSize: 12,
                          fontWeight: 500,
                          marginTop: 8,
                        }}
                      >
                        Overdue by 2 days
                      </div>

                      {expandedCard1 && (
                        <div style={{ marginTop: 10 }}>
                          <div
                            style={{
                              height: 1,
                              backgroundColor: colors.border,
                              marginBottom: 12,
                            }}
                          />
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            <div style={{ display: 'flex', gap: 12 }}>
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 11, color: colors.detailLabel, marginBottom: 2 }}>
                                  Deadline
                                </div>
                                <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue }}>
                                  10 Apr 2026
                                </div>
                              </div>
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 11, color: colors.detailLabel, marginBottom: 2 }}>
                                  Reference
                                </div>
                                <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue }}>
                                  INC-2026-MH-04127
                                </div>
                              </div>
                            </div>

                            <div style={{ display: 'flex', gap: 12 }}>
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 11, color: colors.detailLabel, marginBottom: 2 }}>
                                  Department
                                </div>
                                <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue }}>
                                  Revenue Department
                                </div>
                              </div>
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 11, color: colors.detailLabel, marginBottom: 2 }}>
                                  Have issues?
                                </div>
                                <div
                                  style={{
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: colors.primaryColor,
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 4,
                                    cursor: 'pointer',
                                  }}
                                >
                                  Contact support
                                  <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
                                    arrow_forward
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <button
                            type="button"
                            style={{
                              width: '100%',
                              height: 44,
                              marginTop: 16,
                              borderRadius: 8,
                              border: 'none',
                              backgroundColor: UX4GColors.primary600,
                              color: '#FFFFFF',
                              fontSize: 14,
                              fontWeight: 600,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            Upload now
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Task Card 2 (Collapsed) */}
                    <div
                      style={{
                        backgroundColor: colors.cardBg,
                        border: `1px solid ${colors.border}`,
                        borderRadius: 12,
                        padding: 16,
                        marginBottom: 16,
                      }}
                    >
                      <div
                        onClick={() => setExpandedCard2(!expandedCard2)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 8,
                          cursor: 'pointer',
                        }}
                      >
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 4,
                            backgroundColor: colors.iconBg,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 18, color: colors.subtleText }}
                          >
                            payments
                          </span>
                        </div>
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              fontSize: 14,
                              fontWeight: 700,
                              color: colors.titleColor,
                              marginBottom: 2,
                            }}
                          >
                            Pay application fee
                          </div>
                          <div style={{ fontSize: 12, color: colors.subtleText }}>
                            Birth Certificate · ₹50 application fee
                          </div>
                        </div>
                        <span
                          className="material-symbols-outlined"
                          style={{
                            fontSize: 18,
                            color: colors.subtleText,
                            transform: expandedCard2 ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                          }}
                        >
                          keyboard_arrow_down
                        </span>
                      </div>

                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '3px 8px',
                          borderRadius: 4,
                          backgroundColor: colors.orangeUrgencyBg,
                          color: colors.orangeUrgencyText,
                          fontSize: 12,
                          fontWeight: 500,
                          marginTop: 8,
                        }}
                      >
                        Due in 5 days
                      </div>

                      <button
                        type="button"
                        style={{
                          width: '100%',
                          height: 44,
                          marginTop: 12,
                          borderRadius: 8,
                          border: 'none',
                          backgroundColor: UX4GColors.primary600,
                          color: '#FFFFFF',
                          fontSize: 14,
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        Pay now
                      </button>
                    </div>

                    {/* Task Card 3 (Collapsed) */}
                    <div
                      style={{
                        backgroundColor: colors.cardBg,
                        border: `1px solid ${colors.border}`,
                        borderRadius: 12,
                        padding: 16,
                        marginBottom: 16,
                      }}
                    >
                      <div
                        onClick={() => setExpandedCard3(!expandedCard3)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 8,
                          cursor: 'pointer',
                        }}
                      >
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 4,
                            backgroundColor: colors.iconBg,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 18, color: colors.subtleText }}
                          >
                            calendar_today
                          </span>
                        </div>
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              fontSize: 14,
                              fontWeight: 700,
                              color: colors.titleColor,
                              marginBottom: 2,
                            }}
                          >
                            Schedule field inspection
                          </div>
                          <div style={{ fontSize: 12, color: colors.subtleText }}>
                            Land Records Update · LRU-2026-MH-00231
                          </div>
                        </div>
                        <span
                          className="material-symbols-outlined"
                          style={{
                            fontSize: 18,
                            color: colors.subtleText,
                            transform: expandedCard3 ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                          }}
                        >
                          keyboard_arrow_down
                        </span>
                      </div>

                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '3px 8px',
                          borderRadius: 4,
                          backgroundColor: colors.tealUrgencyBg,
                          color: colors.tealUrgencyText,
                          fontSize: 12,
                          fontWeight: 500,
                          marginTop: 8,
                        }}
                      >
                        Due in 9 days
                      </div>

                      <button
                        type="button"
                        style={{
                          width: '100%',
                          height: 44,
                          marginTop: 12,
                          borderRadius: 8,
                          border: `1.5px solid ${colors.outlineBtnBorder}`,
                          backgroundColor: 'transparent',
                          color: colors.primaryColor,
                          fontSize: 14,
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        Schedule slot
                      </button>
                    </div>

                    {/* Section Heading */}
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: colors.titleColor,
                        margin: '16px 0',
                      }}
                    >
                      Completed today
                    </div>

                    {/* Completed Card */}
                    <div
                      style={{
                        backgroundColor: colors.cardBg,
                        border: `1px solid ${colors.border}`,
                        borderRadius: 12,
                        padding: 16,
                        marginBottom: 16,
                      }}
                    >
                      <div
                        onClick={() => setExpandedCard4(!expandedCard4)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 8,
                          cursor: 'pointer',
                        }}
                      >
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 4,
                            backgroundColor: colors.iconBg,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 18, color: colors.subtleText }}
                          >
                            verified_user
                          </span>
                        </div>
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              fontSize: 14,
                              fontWeight: 700,
                              color: colors.titleColor,
                              marginBottom: 2,
                            }}
                          >
                            Aadhaar e-KYC verification
                          </div>
                          <div style={{ fontSize: 12, color: colors.subtleText }}>
                            Ration Card Renewal · RCR-2026-MH-00917
                          </div>
                        </div>
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: 18, color: colors.subtleText }}
                        >
                          keyboard_arrow_down
                        </span>
                      </div>

                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '3px 8px',
                          borderRadius: 4,
                          backgroundColor: colors.greenUrgencyBg,
                          color: colors.greenUrgencyText,
                          fontSize: 12,
                          fontWeight: 500,
                          marginTop: 8,
                        }}
                      >
                        Completed
                      </div>

                      <div
                        style={{
                          textAlign: 'center',
                          marginTop: 12,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 13,
                            fontWeight: 500,
                            color: colors.primaryColor,
                            cursor: 'pointer',
                          }}
                        >
                          View receipt
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

export default PendingTasksDoc;
