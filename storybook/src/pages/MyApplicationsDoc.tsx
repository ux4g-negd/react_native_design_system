import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface MyApplicationsDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

export const MyApplicationsDoc: React.FC<MyApplicationsDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [selectedTab, setSelectedTab] = useState<number>(2); // 'Under Review' default
  const [expandedCard1, setExpandedCard1] = useState<boolean>(true);
  const [expandedCard2, setExpandedCard2] = useState<boolean>(true);
  const [expandedCard3, setExpandedCard3] = useState<boolean>(false);
  const [expandedCard4, setExpandedCard4] = useState<boolean>(false);
  const [copied, setCopied] = useState(false);

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
      primaryChipBg: UX4GColors.primary600,
      errorColor: isDark ? UX4GColors.red300 : UX4GColors.red600,
      card1StatusColor: isDark ? UX4GColors.red300 : UX4GColors.red600,
      card1BadgeColor: isDark ? UX4GColors.red300 : UX4GColors.red800,
      card2StatusColor: isDark ? UX4GColors.red300 : UX4GColors.red600,
      card2BadgeColor: isDark ? UX4GColors.red300 : UX4GColors.red800,
      card3StatusColor: isDark ? UX4GColors.secondary300 : UX4GColors.secondary600,
      card3BadgeColor: isDark ? UX4GColors.orange300 : UX4GColors.orange800,
      greenColor: UX4GColors.green600,
      buttonOutlineBorder: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300,
      buttonOutlineText: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      statCardBorder: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
    };
  }, [isDark]);

  const tabsData = [
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
  Ux4gCard,
  Ux4gUnifiedPillTag,
  Ux4gStatusAvatar,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const MyApplicationsScreen = ({
  isDark = false,
  onTrack = () => {},
  onDownload = () => {},
  onGrievance = () => {},
  onUploadDoc = () => {},
}: {
  isDark?: boolean;
  onTrack?: (ref: string) => void;
  onDownload?: () => void;
  onGrievance?: () => void;
  onUploadDoc?: () => void;
}) => {
  const [selectedTab, setSelectedTab] = useState(2); // 'Under Review' default
  const [expanded1, setExpanded1] = useState(true);
  const [expanded2, setExpanded2] = useState(true);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);

  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleText = isDark ? UX4GColors.neutral400 : UX4GColors.neutral600;
  const cardBg = isDark ? UX4GColors.neutral900 : UX4GColors.neutral0;
  const borderColor = isDark ? UX4GColors.neutral700 : UX4GColors.neutral200;
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;

  const tabs = [
    { label: 'All', count: '62' },
    { label: 'Pending', count: '3' },
    { label: 'Under Review', count: '12' },
    { label: 'Approved', count: '41' },
    { label: 'Rejected', count: '6' },
  ];

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50 },
      ]}
    >
      {/* Header */}
      <View style={{ backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0 }}>
        <Ux4gAppHeader
          variant="light"
          title=""
          leadingWidgets={
            <View style={styles.headerLeading}>
              <Image
                source={require('./assets/national_emblem.png')}
                style={[styles.emblem, isDark && { tintColor: '#FFFFFF' }]}
                resizeMode="contain"
              />
              <Ux4gDivider
                orientation="vertical"
                color={borderColor}
                style={{ height: 24 }}
              />
              <Image
                source={require('./assets/union_logo.png')}
                style={[styles.unionLogo, { tintColor: primaryColor }]}
                resizeMode="contain"
              />
              <Text style={[styles.govTitle, { color: titleColor }]}>
                Government of India
              </Text>
            </View>
          }
          actions={[
            {
              icon: 'notifications_outlined',
              onPress: () => {},
            },
          ]}
          showAvatar
          avatar={
            <Ux4gStatusAvatar
              size="s"
              initials="R"
              variant="online"
            />
          }
        />
        <Ux4gDivider color={borderColor} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Greeting */}
        <Text style={[styles.greetingTitle, { color: titleColor }]}>
          Good morning, Ramesh
        </Text>
        <Text style={[styles.greetingSubtitle, { color: subtleText }]}>
          An overview of your applications
        </Text>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={styles.statsRow}>
            <View style={[styles.statCard, { backgroundColor: cardBg, borderColor }]}>
              <Text style={[styles.statValue, { color: titleColor }]}>2</Text>
              <Text style={[styles.statLabel, { color: subtleText }]}>Active</Text>
            </View>
            <View style={[styles.statCard, { backgroundColor: cardBg, borderColor }]}>
              <View style={styles.statValueRow}>
                <Text style={[styles.statValue, { color: titleColor }]}>1</Text>
                <View style={[styles.dot, { backgroundColor: UX4GColors.error500 }]} />
              </View>
              <Text style={[styles.statLabel, { color: subtleText }]}>Needs attention</Text>
            </View>
          </View>
          <View style={styles.statsRow}>
            <View style={[styles.statCard, { backgroundColor: cardBg, borderColor }]}>
              <Text style={[styles.statValue, { color: titleColor }]}>5</Text>
              <Text style={[styles.statLabel, { color: subtleText }]}>Completed</Text>
            </View>
            <View style={[styles.statCard, { backgroundColor: cardBg, borderColor }]}>
              <Text style={[styles.statValue, { color: titleColor }]}>8</Text>
              <Text style={[styles.statLabel, { color: subtleText }]}>Total</Text>
            </View>
          </View>
        </View>

        {/* Section Heading */}
        <Text style={[styles.sectionTitle, { color: titleColor }]}>
          Your applications
        </Text>

        {/* Tab Filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContainer}
        >
          {tabs.map((tab, idx) => {
            const isSelected = selectedTab === idx;
            return (
              <TouchableOpacity
                key={tab.label}
                activeOpacity={0.7}
                onPress={() => setSelectedTab(idx)}
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
                    styles.tabLabel,
                    { color: isSelected ? UX4GColors.neutral0 : titleColor },
                  ]}
                >
                  {tab.label}
                </Text>
                <View
                  style={[
                    styles.tabCountBadge,
                    {
                      backgroundColor: isSelected
                        ? 'rgba(255, 255, 255, 0.25)'
                        : UX4GColors.primary600,
                    },
                  ]}
                >
                  <Text style={styles.tabCountText}>{tab.count}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Application Card 1: Escalation available */}
        <Ux4gCard
          cornerRadius={12}
          borderColor={borderColor}
          backgroundColor={cardBg}
          style={styles.cardWrapper}
        >
          <View style={styles.cardHeader}>
            <Text style={[styles.cardTitle, { color: titleColor }]}>
              Income Certificate
            </Text>
            <View style={styles.actionRow}>
              <Ux4gButton
                text="Track"
                onPress={() => onTrack('PMS-2026-MH-02231')}
                variant="outline"
                size="small"
              />
              <TouchableOpacity onPress={() => setExpanded1(!expanded1)}>
                <Image
                  source={require('./assets/chevron_down.png')}
                  style={[
                    styles.chevronIcon,
                    expanded1 && { transform: [{ rotate: '180deg' }] },
                  ]}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Ux4gUnifiedPillTag
            segments={[
              {
                text: '2 days overdue',
                textColor: titleColor,
                leading: (
                  <View
                    style={[
                      styles.tagDot,
                      {
                        backgroundColor: isDark
                          ? UX4GColors.red300
                          : UX4GColors.red600,
                      },
                    ]}
                  />
                ),
              },
              {
                text: 'Escalation available',
                textColor: isDark ? UX4GColors.red300 : UX4GColors.red800,
              },
            ]}
          />

          {expanded1 && (
            <View style={styles.detailsContainer}>
              <View style={styles.detailRow}>
                <View style={styles.detailCol}>
                  <Text style={styles.detailLabel}>Reference Number</Text>
                  <Text style={[styles.detailValue, { color: titleColor }]}>
                    PMS-2026-MH-02231
                  </Text>
                </View>
                <View style={styles.detailCol}>
                  <Text style={styles.detailLabel}>Last Updated Date</Text>
                  <Text style={[styles.detailValue, { color: titleColor }]}>
                    10 Apr 2026
                  </Text>
                </View>
              </View>

              <View style={styles.detailRow}>
                <View style={styles.detailCol}>
                  <Text style={styles.detailLabel}>Submitted Date</Text>
                  <Text style={[styles.detailValue, { color: titleColor }]}>
                    1 Apr 2026
                  </Text>
                </View>
                <View style={styles.detailCol}>
                  <Text style={styles.detailLabel}>Assigned Officer</Text>
                  <Text style={[styles.detailValue, { color: titleColor }]}>
                    Rahul Sharma
                  </Text>
                </View>
              </View>

              <View style={styles.detailRow}>
                <View style={styles.detailCol}>
                  <Text style={styles.detailLabel}>Department</Text>
                  <Text style={[styles.detailValue, { color: titleColor }]}>
                    Social Welfare Department
                  </Text>
                </View>
                <View style={styles.detailCol}>
                  <Text style={styles.detailLabel}>Documents</Text>
                  <Text style={[styles.detailValue, { color: titleColor }]}>
                    ID Proof, Address Proof
                  </Text>
                </View>
              </View>

              <View style={styles.actionSection}>
                <Text style={styles.escalationLabel}>Escalation</Text>
                <TouchableOpacity
                  style={styles.linkButton}
                  onPress={onGrievance}
                >
                  <Text style={[styles.linkButtonText, { color: primaryColor }]}>
                    Register grievance →
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Ux4gCard>

        {/* Application Card 2: Action needed */}
        <Ux4gCard
          cornerRadius={12}
          borderColor={borderColor}
          backgroundColor={cardBg}
          style={styles.cardWrapper}
        >
          <View style={styles.cardHeader}>
            <Text style={[styles.cardTitle, { color: titleColor }]}>
              Income Certificate
            </Text>
            <View style={styles.actionRow}>
              <Ux4gButton
                text="Track"
                onPress={() => onTrack('INC-2026-MH-04127')}
                variant="outline"
                size="small"
              />
              <TouchableOpacity onPress={() => setExpanded2(!expanded2)}>
                <Image
                  source={require('./assets/chevron_down.png')}
                  style={[
                    styles.chevronIcon,
                    expanded2 && { transform: [{ rotate: '180deg' }] },
                  ]}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Ux4gUnifiedPillTag
            segments={[
              {
                text: '4 days left',
                textColor: titleColor,
                leading: (
                  <View
                    style={[
                      styles.tagDot,
                      {
                        backgroundColor: isDark
                          ? UX4GColors.red300
                          : UX4GColors.red600,
                      },
                    ]}
                  />
                ),
              },
              {
                text: 'Action needed',
                textColor: isDark ? UX4GColors.red300 : UX4GColors.red800,
              },
            ]}
          />

          {expanded2 && (
            <View style={styles.detailsContainer}>
              <View style={styles.detailRow}>
                <View style={styles.detailCol}>
                  <Text style={styles.detailLabel}>Reference Number</Text>
                  <Text style={[styles.detailValue, { color: titleColor }]}>
                    INC-2026-MH-04127
                  </Text>
                </View>
                <View style={styles.detailCol}>
                  <Text style={styles.detailLabel}>Last Updated Date</Text>
                  <Text style={[styles.detailValue, { color: titleColor }]}>
                    10 Apr 2026
                  </Text>
                </View>
              </View>

              <View style={styles.detailRow}>
                <View style={styles.detailCol}>
                  <Text style={styles.detailLabel}>Submitted Date</Text>
                  <Text style={[styles.detailValue, { color: titleColor }]}>
                    1 Apr 2026
                  </Text>
                </View>
                <View style={styles.detailCol}>
                  <Text style={styles.detailLabel}>Assigned Officer</Text>
                  <Text style={[styles.detailValue, { color: titleColor }]}>
                    Rahul Sharma
                  </Text>
                </View>
              </View>

              <View style={styles.detailRow}>
                <View style={styles.detailCol}>
                  <Text style={styles.detailLabel}>Department</Text>
                  <Text style={[styles.detailValue, { color: titleColor }]}>
                    Revenue Department
                  </Text>
                </View>
                <View style={styles.detailCol}>
                  <Text style={styles.detailLabel}>Documents</Text>
                  <Text style={[styles.detailValue, { color: titleColor }]}>
                    ID Proof, Address Proof
                  </Text>
                </View>
              </View>

              <View style={styles.actionSection}>
                <Text style={styles.escalationLabel}>Action needed</Text>
                <TouchableOpacity
                  style={styles.linkButton}
                  onPress={onUploadDoc}
                >
                  <Text style={[styles.linkButtonText, { color: primaryColor }]}>
                    Upload document →
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Ux4gCard>

        {/* Application Card 3: Compact Under Review */}
        <Ux4gCard
          cornerRadius={12}
          borderColor={borderColor}
          backgroundColor={cardBg}
          style={styles.cardWrapper}
        >
          <View style={styles.cardHeader}>
            <Text style={[styles.cardTitle, { color: titleColor }]}>
              Income Certificate
            </Text>
            <View style={styles.actionRow}>
              <Ux4gButton
                text="Track"
                onPress={() => onTrack('INC-2026-MH-04128')}
                variant="outline"
                size="small"
              />
              <TouchableOpacity onPress={() => setExpanded3(!expanded3)}>
                <Image
                  source={require('./assets/chevron_down.png')}
                  style={[
                    styles.chevronIcon,
                    expanded3 && { transform: [{ rotate: '180deg' }] },
                  ]}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Ux4gUnifiedPillTag
            segments={[
              {
                text: '8 days left',
                textColor: titleColor,
                leading: (
                  <View
                    style={[
                      styles.tagDot,
                      {
                        backgroundColor: isDark
                          ? UX4GColors.secondary300
                          : UX4GColors.secondary600,
                      },
                    ]}
                  />
                ),
              },
              {
                text: 'Under review',
                textColor: isDark ? UX4GColors.orange300 : UX4GColors.orange800,
              },
            ]}
          />

          {expanded3 && (
            <View style={styles.detailsContainer}>
              <View style={styles.detailRow}>
                <View style={styles.detailCol}>
                  <Text style={styles.detailLabel}>Reference Number</Text>
                  <Text style={[styles.detailValue, { color: titleColor }]}>
                    INC-2026-MH-04128
                  </Text>
                </View>
                <View style={styles.detailCol}>
                  <Text style={styles.detailLabel}>Last Updated Date</Text>
                  <Text style={[styles.detailValue, { color: titleColor }]}>
                    10 Apr 2026
                  </Text>
                </View>
              </View>
            </View>
          )}
        </Ux4gCard>

        {/* Application Card 4: Birth Certificate Download */}
        <Ux4gCard
          cornerRadius={12}
          borderColor={borderColor}
          backgroundColor={cardBg}
          style={styles.cardWrapper}
        >
          <View style={styles.cardHeader}>
            <View style={styles.titleWithCheck}>
              <Text style={[styles.cardTitle, { color: titleColor }]}>
                Birth Certificate
              </Text>
              <View style={styles.greenCheckBadge}>
                <Text style={styles.greenCheckText}>✓</Text>
              </View>
            </View>
            <View style={styles.actionRow}>
              <Ux4gButton
                text="Download"
                onPress={onDownload}
                variant="outline"
                size="small"
                leadingIcon="file_download_outlined"
              />
              <TouchableOpacity onPress={() => setExpanded4(!expanded4)}>
                <Image
                  source={require('./assets/chevron_down.png')}
                  style={[
                    styles.chevronIcon,
                    expanded4 && { transform: [{ rotate: '180deg' }] },
                  ]}
                />
              </TouchableOpacity>
            </View>
          </View>

          {expanded4 && (
            <View style={styles.detailsContainer}>
              <View style={styles.detailRow}>
                <View style={styles.detailCol}>
                  <Text style={styles.detailLabel}>Issued</Text>
                  <Text style={[styles.detailValue, { color: titleColor }]}>
                    05 Apr 2026
                  </Text>
                </View>
                <View style={styles.detailCol}>
                  <Text style={styles.detailLabel}>Valid till</Text>
                  <Text style={[styles.detailValue, { color: titleColor }]}>
                    05 Apr 2027
                  </Text>
                </View>
              </View>
            </View>
          )}
        </Ux4gCard>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  headerLeading: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  emblem: { height: 28, width: 20 },
  unionLogo: { height: 24, width: 32 },
  govTitle: { fontSize: 12, fontWeight: '600' },
  scrollContent: { padding: 20 },
  greetingTitle: { fontSize: 20, fontWeight: '700', marginBottom: 4 },
  greetingSubtitle: { fontSize: 13, marginBottom: 20 },
  statsGrid: { gap: 12, marginBottom: 24 },
  statsRow: { flexDirection: 'row', gap: 12 },
  statCard: { flex: 1, padding: 14, borderRadius: 10, borderWidth: 1 },
  statValueRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  statValue: { fontSize: 18, fontWeight: '700' },
  dot: { width: 8, height: 8, borderRadius: 4 },
  statLabel: { fontSize: 12, marginTop: 4 },
  sectionTitle: { fontSize: 16, fontWeight: '700', marginBottom: 16 },
  tabsContainer: { gap: 8, marginBottom: 20 },
  tabChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
    borderWidth: 1,
    gap: 6,
  },
  tabLabel: { fontSize: 13, fontWeight: '500' },
  tabCountBadge: {
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 10,
  },
  tabCountText: { fontSize: 11, fontWeight: '600', color: '#FFFFFF' },
  cardWrapper: { padding: 16, marginBottom: 16 },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: { fontSize: 15, fontWeight: '700' },
  actionRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  chevronIcon: { width: 16, height: 16 },
  tagDot: { width: 8, height: 8, borderRadius: 4, marginRight: 6 },
  detailsContainer: { marginTop: 14, gap: 12 },
  detailRow: { flexDirection: 'row', gap: 12 },
  detailCol: { flex: 1 },
  detailLabel: { fontSize: 11, color: '#6B7280', marginBottom: 2 },
  detailValue: { fontSize: 13, fontWeight: '500' },
  actionSection: { marginTop: 4 },
  escalationLabel: { fontSize: 11, color: '#DC2626', marginBottom: 2 },
  linkButton: { paddingVertical: 2 },
  linkButtonText: { fontSize: 13, fontWeight: '600' },
  titleWithCheck: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  greenCheckBadge: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#16A34A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenCheckText: { fontSize: 9, color: '#FFFFFF', fontWeight: 'bold' },
});
`;
  }, []);

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">My Applications</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A dashboard pattern showing an overview of user applications with summary stats, tab filters, and detailed application cards with tracking.
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
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div
                  style={{
                    width: 1,
                    height: 22,
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

              {/* Right actions: Bell + Avatar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
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
                      backgroundColor: colors.primaryChipBg,
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

            {/* Scrollable Dashboard Body */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px 16px 24px',
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box',
              }}
            >
              {/* Greeting */}
              <div
                style={{
                  fontSize: 19,
                  fontWeight: 700,
                  color: colors.titleColor,
                  marginBottom: 3,
                }}
              >
                Good morning, Ramesh
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: colors.subtleText,
                  marginBottom: 16,
                }}
              >
                An overview of your applications
              </div>

              {/* Stats Grid (2x2) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 10,
                  marginBottom: 22,
                }}
              >
                {/* Stat 1: Active */}
                <div
                  style={{
                    backgroundColor: colors.cardBg,
                    border: `1px solid ${colors.statCardBorder}`,
                    borderRadius: 10,
                    padding: 12,
                  }}
                >
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: colors.titleColor,
                      lineHeight: 1.2,
                    }}
                  >
                    2
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: colors.subtleText,
                      marginTop: 4,
                    }}
                  >
                    Active
                  </div>
                </div>

                {/* Stat 2: Needs attention */}
                <div
                  style={{
                    backgroundColor: colors.cardBg,
                    border: `1px solid ${colors.statCardBorder}`,
                    borderRadius: 10,
                    padding: 12,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 18,
                      fontWeight: 700,
                      color: colors.titleColor,
                      lineHeight: 1.2,
                    }}
                  >
                    1
                    <div
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        backgroundColor: colors.errorColor,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: colors.subtleText,
                      marginTop: 4,
                    }}
                  >
                    Needs attention
                  </div>
                </div>

                {/* Stat 3: Completed */}
                <div
                  style={{
                    backgroundColor: colors.cardBg,
                    border: `1px solid ${colors.statCardBorder}`,
                    borderRadius: 10,
                    padding: 12,
                  }}
                >
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: colors.titleColor,
                      lineHeight: 1.2,
                    }}
                  >
                    5
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: colors.subtleText,
                      marginTop: 4,
                    }}
                  >
                    Completed
                  </div>
                </div>

                {/* Stat 4: Total */}
                <div
                  style={{
                    backgroundColor: colors.cardBg,
                    border: `1px solid ${colors.statCardBorder}`,
                    borderRadius: 10,
                    padding: 12,
                  }}
                >
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: colors.titleColor,
                      lineHeight: 1.2,
                    }}
                  >
                    8
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: colors.subtleText,
                      marginTop: 4,
                    }}
                  >
                    Total
                  </div>
                </div>
              </div>

              {/* Your applications Section Heading */}
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: colors.titleColor,
                  marginBottom: 12,
                }}
              >
                Your applications
              </div>

              {/* Tab Filters (Chips with badge counts) */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 6,
                  marginBottom: 16,
                }}
              >
                {tabsData.map((tab, index) => {
                  const isSelected = selectedTab === index;
                  return (
                    <button
                      key={tab.label}
                      onClick={() => setSelectedTab(index)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 5,
                        padding: '5px 8px',
                        borderRadius: 4,
                        border: `1px solid ${
                          isSelected ? UX4GColors.primary600 : colors.border
                        }`,
                        backgroundColor: isSelected
                          ? UX4GColors.primary600
                          : colors.cardBg,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: isSelected ? 600 : 500,
                          color: isSelected ? '#FFFFFF' : colors.titleColor,
                        }}
                      >
                        {tab.label}
                      </span>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          padding: '1px 5px',
                          borderRadius: 10,
                          backgroundColor: isSelected
                            ? 'rgba(255, 255, 255, 0.25)'
                            : UX4GColors.primary600,
                          color: '#FFFFFF',
                          lineHeight: 1.2,
                        }}
                      >
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Application Card 1: Escalation available */}
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 12,
                  padding: 14,
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: colors.titleColor,
                    }}
                  >
                    Income Certificate
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <button
                      style={{
                        padding: '4px 10px',
                        borderRadius: 6,
                        border: `1px solid ${colors.buttonOutlineBorder}`,
                        backgroundColor: 'transparent',
                        color: colors.buttonOutlineText,
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Track
                    </button>
                    <button
                      onClick={() => setExpandedCard1(!expandedCard1)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 2,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        color: colors.subtleText,
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: 18,
                          transform: expandedCard1 ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      >
                        keyboard_arrow_down
                      </span>
                    </button>
                  </div>
                </div>

                {/* Status Pill Tag */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    border: `1px solid ${colors.border}`,
                    borderRadius: 14,
                    overflow: 'hidden',
                    fontSize: 11,
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      padding: '3px 8px',
                      color: colors.titleColor,
                      fontWeight: 500,
                      borderRight: `1px solid ${colors.border}`,
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: colors.card1StatusColor,
                      }}
                    />
                    2 days overdue
                  </div>
                  <div
                    style={{
                      padding: '3px 8px',
                      color: colors.card1BadgeColor,
                      fontWeight: 600,
                    }}
                  >
                    Escalation available
                  </div>
                </div>

                {expandedCard1 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {/* Row 1 */}
                    <div style={{ display: 'flex', gap: 12 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 11, color: colors.detailLabel }}>
                          Reference Number
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue }}>
                          PMS-2026-MH-02231
                        </div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 11, color: colors.detailLabel }}>
                          Last Updated Date
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue }}>
                          10 Apr 2026
                        </div>
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div style={{ display: 'flex', gap: 12 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 11, color: colors.detailLabel }}>
                          Submitted Date
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue }}>
                          1 Apr 2026
                        </div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 11, color: colors.detailLabel }}>
                          Assigned Officer
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue }}>
                          Rahul Sharma
                        </div>
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div style={{ display: 'flex', gap: 12 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 11, color: colors.detailLabel }}>
                          Department
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue, lineHeight: 1.3 }}>
                          Social Welfare Department
                        </div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 11, color: colors.detailLabel }}>
                          Documents
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue, lineHeight: 1.3 }}>
                          ID Proof, Address Proof
                        </div>
                      </div>
                    </div>

                    {/* Escalation Link */}
                    <div style={{ marginTop: 4 }}>
                      <div style={{ fontSize: 11, color: colors.errorColor, fontWeight: 500 }}>
                        Escalation
                      </div>
                      <button
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          fontSize: 13,
                          fontWeight: 600,
                          color: colors.primaryColor,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 4,
                          cursor: 'pointer',
                          marginTop: 2,
                        }}
                      >
                        Register grievance
                        <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Application Card 2: Action needed */}
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 12,
                  padding: 14,
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: colors.titleColor,
                    }}
                  >
                    Income Certificate
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <button
                      style={{
                        padding: '4px 10px',
                        borderRadius: 6,
                        border: `1px solid ${colors.buttonOutlineBorder}`,
                        backgroundColor: 'transparent',
                        color: colors.buttonOutlineText,
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Track
                    </button>
                    <button
                      onClick={() => setExpandedCard2(!expandedCard2)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 2,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        color: colors.subtleText,
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: 18,
                          transform: expandedCard2 ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      >
                        keyboard_arrow_down
                      </span>
                    </button>
                  </div>
                </div>

                {/* Status Pill Tag */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    border: `1px solid ${colors.border}`,
                    borderRadius: 14,
                    overflow: 'hidden',
                    fontSize: 11,
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      padding: '3px 8px',
                      color: colors.titleColor,
                      fontWeight: 500,
                      borderRight: `1px solid ${colors.border}`,
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: colors.card2StatusColor,
                      }}
                    />
                    4 days left
                  </div>
                  <div
                    style={{
                      padding: '3px 8px',
                      color: colors.card2BadgeColor,
                      fontWeight: 700,
                    }}
                  >
                    Action needed
                  </div>
                </div>

                {expandedCard2 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {/* Row 1 */}
                    <div style={{ display: 'flex', gap: 12 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 11, color: colors.detailLabel }}>
                          Reference Number
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue }}>
                          INC-2026-MH-04127
                        </div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 11, color: colors.detailLabel }}>
                          Last Updated Date
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue }}>
                          10 Apr 2026
                        </div>
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div style={{ display: 'flex', gap: 12 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 11, color: colors.detailLabel }}>
                          Submitted Date
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue }}>
                          1 Apr 2026
                        </div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 11, color: colors.detailLabel }}>
                          Assigned Officer
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue }}>
                          Rahul Sharma
                        </div>
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div style={{ display: 'flex', gap: 12 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 11, color: colors.detailLabel }}>
                          Department
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue, lineHeight: 1.3 }}>
                          Revenue Department
                        </div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 11, color: colors.detailLabel }}>
                          Documents
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue, lineHeight: 1.3 }}>
                          ID Proof, Address Proof
                        </div>
                      </div>
                    </div>

                    {/* Action Needed Link */}
                    <div style={{ marginTop: 4 }}>
                      <div style={{ fontSize: 11, color: colors.errorColor, fontWeight: 500 }}>
                        Action needed
                      </div>
                      <button
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          fontSize: 13,
                          fontWeight: 600,
                          color: colors.primaryColor,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 4,
                          cursor: 'pointer',
                          marginTop: 2,
                        }}
                      >
                        Upload document
                        <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
                          file_upload
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Application Card 3: Compact Under review */}
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 12,
                  padding: 14,
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: colors.titleColor,
                    }}
                  >
                    Income Certificate
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <button
                      style={{
                        padding: '4px 10px',
                        borderRadius: 6,
                        border: `1px solid ${colors.buttonOutlineBorder}`,
                        backgroundColor: 'transparent',
                        color: colors.buttonOutlineText,
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Track
                    </button>
                    <button
                      onClick={() => setExpandedCard3(!expandedCard3)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 2,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        color: colors.subtleText,
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: 18,
                          transform: expandedCard3 ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      >
                        keyboard_arrow_down
                      </span>
                    </button>
                  </div>
                </div>

                {/* Status Pill Tag */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    border: `1px solid ${colors.border}`,
                    borderRadius: 14,
                    overflow: 'hidden',
                    fontSize: 11,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      padding: '3px 8px',
                      color: colors.titleColor,
                      fontWeight: 500,
                      borderRight: `1px solid ${colors.border}`,
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: colors.card3StatusColor,
                      }}
                    />
                    8 days left
                  </div>
                  <div
                    style={{
                      padding: '3px 8px',
                      color: colors.card3BadgeColor,
                      fontWeight: 500,
                    }}
                  >
                    Under review
                  </div>
                </div>

                {expandedCard3 && (
                  <div style={{ marginTop: 12, display: 'flex', gap: 12 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 11, color: colors.detailLabel }}>
                        Reference Number
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue }}>
                        INC-2026-MH-04128
                      </div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 11, color: colors.detailLabel }}>
                        Last Updated Date
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue }}>
                        10 Apr 2026
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Application Card 4: Birth Certificate Download */}
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 12,
                  padding: 14,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: colors.titleColor,
                      }}
                    >
                      Birth Certificate
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: 14,
                        color: colors.greenColor,
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      check_circle
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <button
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        padding: '4px 10px',
                        borderRadius: 6,
                        border: `1px solid ${colors.buttonOutlineBorder}`,
                        backgroundColor: 'transparent',
                        color: colors.buttonOutlineText,
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 14 }}
                      >
                        download
                      </span>
                      Download
                    </button>
                    <button
                      onClick={() => setExpandedCard4(!expandedCard4)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 2,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        color: colors.subtleText,
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: 18,
                          transform: expandedCard4 ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      >
                        keyboard_arrow_down
                      </span>
                    </button>
                  </div>
                </div>

                {expandedCard4 && (
                  <div style={{ marginTop: 12, display: 'flex', gap: 12 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 11, color: colors.detailLabel }}>
                        Issued
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue }}>
                        05 Apr 2026
                      </div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 11, color: colors.detailLabel }}>
                        Valid till
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue }}>
                        05 Apr 2027
                      </div>
                    </div>
                  </div>
                )}
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

export default MyApplicationsDoc;
