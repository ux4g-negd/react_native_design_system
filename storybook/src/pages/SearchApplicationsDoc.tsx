import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gCard } from '../../../src/components/card/Card';
import { Ux4gUnifiedPillTag } from '../../../src/components/tag/Tag';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { Ux4gStatusAvatar } from '../../../src/components/avatar/Avatar';
import { Ux4gSearchField } from '../../../src/components/search-field/SearchField';
import { Ux4gChoiceChip, Ux4gChipGroup } from '../../../src/components/chips/Chips';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface SearchApplicationsDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

export const SearchApplicationsDoc: React.FC<SearchApplicationsDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [selectedTab, setSelectedTab] = useState<number>(2); // 'Under Review' default
  const [searchValue, setSearchValue] = useState<string>('income');
  const [expandedCard1, setExpandedCard1] = useState<boolean>(true);
  const [expandedCard2, setExpandedCard2] = useState<boolean>(false);

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
      secondaryColor: isDark ? UX4GColors.secondary300 : UX4GColors.secondary600,
      errorColor: isDark ? UX4GColors.red300 : UX4GColors.red600,
      statCardBorder: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      buttonOutlineBorder: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300,
      buttonOutlineText: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      tagBorder: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      tagText: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
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
  Ux4gSearchField,
  Ux4gChoiceChip,
  Ux4gChipGroup,
  UX4GColors,
} from 'ux4g-react-native-components';

export const SearchApplicationsScreen = ({
  isDark = false,
  onTrack = (_ref: string) => {},
  onUploadDocument = () => {},
}: {
  isDark?: boolean;
  onTrack?: (ref: string) => void;
  onUploadDocument?: () => void;
}) => {
  const [selectedTab, setSelectedTab] = useState(2); // 'Under Review' default
  const [searchValue, setSearchValue] = useState('income');
  const [expandedCard1, setExpandedCard1] = useState(true);
  const [expandedCard2, setExpandedCard2] = useState(false);

  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleText = isDark ? UX4GColors.neutral400 : UX4GColors.neutral600;
  const cardBg = isDark ? UX4GColors.neutral900 : UX4GColors.neutral0;
  const borderColor = isDark ? UX4GColors.neutral700 : UX4GColors.neutral200;
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const secondaryColor = isDark ? UX4GColors.secondary300 : UX4GColors.secondary600;

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
          backgroundColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral0}
          leadingWidgets={[
            <View key="header-leading" style={styles.headerLeading}>
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
            </View>,
          ]}
          actions={[
            {
              customWidget: (
                <Ux4gStatusAvatar
                  key="user-avatar"
                  size="s"
                  variant="online"
                  imageUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop&q=80"
                />
              ),
            },
          ]}
        />
        <Ux4gDivider color={borderColor} thickness={1} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Greeting */}
        <Text style={[styles.greetingTitle, { color: titleColor }]}>
          Good morning, Ramesh
        </Text>
        <Text style={[styles.greetingSubtitle, { color: subtleText }]}>
          Find an application by reference or service name
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
                <View style={[styles.dot, { backgroundColor: UX4GColors.red600 }]} />
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
        <Ux4gChipGroup
          arrangement="horizontal"
          spacing={8}
          containerStyle={styles.tabsContainer}
        >
          {tabs.map((tab, idx) => {
            const isSelected = selectedTab === idx;
            return (
              <Ux4gChoiceChip
                key={tab.label}
                text={tab.label}
                selected={isSelected}
                onClick={() => setSelectedTab(idx)}
                size="s"
                borderRadius={4}
                trailingContent={
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
                }
              />
            );
          })}
        </Ux4gChipGroup>

        {/* Search Field */}
        <View style={styles.searchContainer}>
          <Ux4gSearchField
            variant="searchWithSubmit"
            placeholder="Search for..."
            value={searchValue}
            onValueChange={setSearchValue}
            showVoiceIcon={true}
            showClearIcon={true}
            size="medium"
          />
        </View>

        {/* Result Count */}
        <Text style={[styles.resultCount, { color: subtleText }]}>
          2 results for "{searchValue}"
        </Text>

        {/* Result Card 1 (Expanded) */}
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
              <TouchableOpacity onPress={() => setExpandedCard1(!expandedCard1)}>
                <Image
                  source={require('./assets/chevron_down.png')}
                  style={[
                    styles.chevronIcon,
                    expandedCard1 && { transform: [{ rotate: '180deg' }] },
                  ]}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Unified Status Pill Tag */}
          <View style={styles.tagWrapper}>
            <Ux4gUnifiedPillTag
              containerStyle={styles.pillTag}
              segments={[
                {
                  text: '8 days left',
                  textColor: titleColor,
                  leading: (
                    <View
                      style={[
                        styles.tagDot,
                        {
                          backgroundColor: secondaryColor,
                        },
                      ]}
                    />
                  ),
                },
                {
                  text: 'Under review',
                  textColor: secondaryColor,
                  bold: true,
                },
              ]}
            />
          </View>

          {expandedCard1 && (
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
                <Text style={[styles.actionLabel, { color: secondaryColor }]}>
                  Action needed
                </Text>
                <TouchableOpacity
                  style={styles.linkButton}
                  onPress={onUploadDocument}
                >
                  <Text style={[styles.linkButtonText, { color: primaryColor }]}>
                    Upload document ⭱
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Ux4gCard>

        {/* Result Card 2 (Collapsed) */}
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
              <TouchableOpacity onPress={() => setExpandedCard2(!expandedCard2)}>
                <Image
                  source={require('./assets/chevron_down.png')}
                  style={[
                    styles.chevronIcon,
                    expandedCard2 && { transform: [{ rotate: '180deg' }] },
                  ]}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Unified Status Pill Tag */}
          <View style={styles.tagWrapper}>
            <Ux4gUnifiedPillTag
              containerStyle={styles.pillTag}
              segments={[
                {
                  text: '8 days left',
                  textColor: titleColor,
                  leading: (
                    <View
                      style={[
                        styles.tagDot,
                        {
                          backgroundColor: secondaryColor,
                        },
                      ]}
                    />
                  ),
                },
                {
                  text: 'Under review',
                  textColor: secondaryColor,
                  bold: true,
                },
              ]}
            />
          </View>
        </Ux4gCard>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  headerLeading: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  emblem: { height: 28, width: 20 },
  unionLogo: { height: 20, width: 28 },
  govTitle: { fontSize: 13, fontWeight: '600' },
  scrollContent: { padding: 16, paddingBottom: 32 },
  greetingTitle: { fontSize: 20, fontWeight: '700', marginBottom: 4 },
  greetingSubtitle: { fontSize: 13, marginBottom: 20 },
  statsGrid: { gap: 10, marginBottom: 20 },
  statsRow: { flexDirection: 'row', gap: 10 },
  statCard: { flex: 1, padding: 12, borderRadius: 10, borderWidth: 1 },
  statValueRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  statValue: { fontSize: 18, fontWeight: '700' },
  dot: { width: 8, height: 8, borderRadius: 4 },
  statLabel: { fontSize: 12, marginTop: 4 },
  sectionTitle: { fontSize: 16, fontWeight: '700', marginBottom: 12 },
  tabsContainer: { gap: 6, marginBottom: 16 },
  tabCountBadge: {
    minWidth: 16,
    height: 16,
    paddingHorizontal: 4,
    borderRadius: 8,
    marginLeft: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabCountText: { fontSize: 10, fontWeight: '700', color: '#FFFFFF' },
  searchContainer: { marginBottom: 16 },
  resultCount: { fontSize: 13, marginBottom: 16 },
  cardWrapper: { padding: 14, marginBottom: 12 },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: { fontSize: 14, fontWeight: '700' },
  actionRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  chevronIcon: { width: 16, height: 16 },
  tagWrapper: { flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 10 },
  pillTag: { alignSelf: 'flex-start', borderRadius: 4 },
  tagDot: { width: 8, height: 8, borderRadius: 4, marginRight: 6 },
  detailsContainer: { marginTop: 12, gap: 10 },
  detailRow: { flexDirection: 'row', gap: 12 },
  detailCol: { flex: 1 },
  detailLabel: { fontSize: 11, color: '#6B7280', marginBottom: 2 },
  detailValue: { fontSize: 13, fontWeight: '500' },
  actionSection: { marginTop: 4 },
  actionLabel: { fontSize: 11, marginBottom: 2, fontWeight: '500' },
  linkButton: { paddingVertical: 2 },
  linkButtonText: { fontSize: 13, fontWeight: '600' },
});
`;
  }, []);

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Search Applications</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A search pattern for finding applications by reference number or service name. Shows stats overview, filter chips, search input, result count, and application cards with expanded details.
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
                {/* Mobile Phone Mockup */}
                <Ux4gThemeProvider isDark={isDark}>
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
                      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                      position: 'relative',
                      boxSizing: 'border-box',
                      fontFamily:
                        "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                    }}
                  >
                    {/* Header (Top) */}
                    <div style={{ backgroundColor: colors.headerBg, flexShrink: 0 }}>
                      <Ux4gAppHeader
                        variant="light"
                        title=""
                        backgroundColor={colors.headerBg}
                        leadingWidgets={[
                          <div
                            key="emblem-group"
                            style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                          >
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
                                height: 24,
                                backgroundColor: colors.verticalDividerColor,
                              }}
                            />
                            <UnionLogo color={colors.primaryColor} size={24} />
                            <span
                              style={{
                                fontSize: 13,
                                fontWeight: 600,
                                color: colors.titleColor,
                                whiteSpace: 'nowrap',
                              }}
                            >
                              Government of India
                            </span>
                          </div>,
                        ]}
                        actions={[
                          {
                            customWidget: (
                              <Ux4gStatusAvatar
                                key="user-avatar"
                                size="s"
                                variant="online"
                                imageUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop&q=80"
                              />
                            ),
                          },
                        ]}
                      />
                      <Ux4gDivider color={colors.dividerColor} thickness={1} />
                    </div>

                    {/* Scrollable Body */}
                    <div
                      style={{
                        flex: 1,
                        overflowY: 'auto',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        boxSizing: 'border-box',
                      }}
                    >
                      {/* Greeting */}
                      <div
                        style={{
                          fontSize: 20,
                          fontWeight: 700,
                          color: colors.titleColor,
                          marginBottom: 4,
                          letterSpacing: '-0.3px',
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
                        Find an application by reference or service name
                      </div>

                      {/* Stats Grid */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: 10,
                          marginBottom: 18,
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
                          fontSize: 16,
                          fontWeight: 700,
                          color: colors.titleColor,
                          marginBottom: 12,
                        }}
                      >
                        Your applications
                      </div>

                      {/* Tab Filters */}
                      <div
                        onWheel={(e) => {
                          if (e.deltaY) {
                            e.currentTarget.scrollLeft += e.deltaY;
                          }
                        }}
                        onMouseDown={(e) => {
                          const slider = e.currentTarget;
                          let isDown = true;
                          let startX = e.pageX - slider.offsetLeft;
                          let scrollLeft = slider.scrollLeft;

                          const onMouseMove = (moveEvent: MouseEvent) => {
                            if (!isDown) return;
                            moveEvent.preventDefault();
                            const x = moveEvent.pageX - slider.offsetLeft;
                            const walk = (x - startX) * 1.5;
                            slider.scrollLeft = scrollLeft - walk;
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
                          minHeight: 38,
                          gap: 8,
                          overflowX: 'auto',
                          padding: '2px 0 8px 0',
                          marginBottom: 10,
                          cursor: 'grab',
                          userSelect: 'none',
                          WebkitUserSelect: 'none',
                          msOverflowStyle: 'none',
                          scrollbarWidth: 'none',
                          boxSizing: 'border-box',
                          width: '100%',
                        }}
                      >
                        {tabsData.map((tab, index) => (
                          <div
                            key={tab.label}
                            style={{
                              flexShrink: 0,
                              display: 'inline-flex',
                              alignItems: 'center',
                            }}
                          >
                            <Ux4gChoiceChip
                              text={tab.label}
                              selected={selectedTab === index}
                              onClick={() => setSelectedTab(index)}
                              size="s"
                              borderRadius={4}
                              trailingContent={
                                <span
                                  style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minWidth: 16,
                                    height: 16,
                                    fontSize: 10,
                                    fontWeight: 700,
                                    padding: '0 4px',
                                    borderRadius: 8,
                                    backgroundColor:
                                      selectedTab === index
                                        ? 'rgba(255, 255, 255, 0.25)'
                                        : UX4GColors.primary600,
                                    color: '#FFFFFF',
                                    marginLeft: 4,
                                    lineHeight: 1,
                                    boxSizing: 'border-box',
                                  }}
                                >
                                  {tab.count}
                                </span>
                              }
                            />
                          </div>
                        ))}
                      </div>

                      {/* Search Field */}
                      <div style={{ marginBottom: 14 }}>
                        <Ux4gSearchField
                          variant="searchWithSubmit"
                          placeholder="Search for..."
                          value={searchValue}
                          onValueChange={setSearchValue}
                          showVoiceIcon={true}
                          showClearIcon={true}
                          size="medium"
                        />
                      </div>

                      {/* Result Count */}
                      <div
                        style={{
                          fontSize: 13,
                          color: colors.subtleText,
                          marginBottom: 14,
                        }}
                      >
                        2 results for "{searchValue}"
                      </div>

                      {/* Result Card 1 - Expanded */}
                      <div
                        style={{
                          backgroundColor: colors.cardBg,
                          border: `1px solid ${colors.border}`,
                          borderRadius: 12,
                          padding: 14,
                          marginBottom: 12,
                        }}
                      >
                        {/* Card Title Row */}
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
                            <Ux4gButton
                              text="Track"
                              variant="outline"
                              size="small"
                              contentColor={colors.buttonOutlineText}
                              borderColor={colors.buttonOutlineBorder}
                              onPress={() => {}}
                            />
                            <button
                              type="button"
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

                        {/* Status Pill Tag with secondary color & borderRadius 4 */}
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            marginBottom: 10,
                          }}
                        >
                          <Ux4gUnifiedPillTag
                            containerStyle={{
                              alignSelf: 'flex-start',
                              borderRadius: 4,
                            }}
                            segments={[
                              {
                                text: '8 days left',
                                textColor: colors.titleColor,
                                leading: (
                                  <div
                                    style={{
                                      width: 7,
                                      height: 7,
                                      borderRadius: '50%',
                                      backgroundColor: colors.secondaryColor,
                                      marginRight: 6,
                                    }}
                                  />
                                ),
                              },
                              {
                                text: 'Under review',
                                textColor: colors.secondaryColor,
                                bold: true,
                              },
                            ]}
                            backgroundColor={colors.cardBg}
                            borderColor={colors.border}
                            dividerColor={colors.border}
                          />
                        </div>

                        {/* Expanded Details */}
                        {expandedCard1 && (
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 10,
                              marginTop: 10,
                            }}
                          >
                            {/* Row 1 */}
                            <div style={{ display: 'flex', gap: 12 }}>
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 11, color: colors.detailLabel, marginBottom: 2 }}>
                                  Reference Number
                                </div>
                                <div
                                  style={{
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: colors.detailValue,
                                  }}
                                >
                                  INC-2026-MH-04127
                                </div>
                              </div>
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 11, color: colors.detailLabel, marginBottom: 2 }}>
                                  Last Updated Date
                                </div>
                                <div
                                  style={{
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: colors.detailValue,
                                  }}
                                >
                                  10 Apr 2026
                                </div>
                              </div>
                            </div>

                            {/* Row 2 */}
                            <div style={{ display: 'flex', gap: 12 }}>
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 11, color: colors.detailLabel, marginBottom: 2 }}>
                                  Submitted Date
                                </div>
                                <div
                                  style={{
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: colors.detailValue,
                                  }}
                                >
                                  1 Apr 2026
                                </div>
                              </div>
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 11, color: colors.detailLabel, marginBottom: 2 }}>
                                  Assigned Officer
                                </div>
                                <div
                                  style={{
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: colors.detailValue,
                                  }}
                                >
                                  Rahul Sharma
                                </div>
                              </div>
                            </div>

                            {/* Row 3 */}
                            <div style={{ display: 'flex', gap: 12 }}>
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 11, color: colors.detailLabel, marginBottom: 2 }}>
                                  Department
                                </div>
                                <div
                                  style={{
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: colors.detailValue,
                                    lineHeight: 1.3,
                                  }}
                                >
                                  Revenue Department
                                </div>
                              </div>
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 11, color: colors.detailLabel, marginBottom: 2 }}>
                                  Documents
                                </div>
                                <div
                                  style={{
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: colors.detailValue,
                                    lineHeight: 1.3,
                                  }}
                                >
                                  ID Proof, Address Proof
                                </div>
                              </div>
                            </div>

                            {/* Action Needed with Secondary Color */}
                            <div style={{ marginTop: 4 }}>
                              <div
                                style={{
                                  fontSize: 11,
                                  color: colors.secondaryColor,
                                  fontWeight: 500,
                                  marginBottom: 2,
                                }}
                              >
                                Action needed
                              </div>
                              <button
                                type="button"
                                style={{
                                  background: 'none',
                                  border: 'none',
                                  padding: 0,
                                  fontSize: 13,
                                  fontWeight: 600,
                                  color: colors.primaryColor,
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: 5,
                                  cursor: 'pointer',
                                  marginTop: 2,
                                }}
                              >
                                Upload document
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke={colors.primaryColor}
                                  strokeWidth="2.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                                  <polyline points="7 9 12 4 17 9" />
                                  <line x1="12" y1="4" x2="12" y2="16" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Result Card 2 - Collapsed */}
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
                            <Ux4gButton
                              text="Track"
                              variant="outline"
                              size="small"
                              contentColor={colors.buttonOutlineText}
                              borderColor={colors.buttonOutlineBorder}
                              onPress={() => {}}
                            />
                            <button
                              type="button"
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

                        {/* Status Pill Tag with secondary color & borderRadius 4 */}
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                          }}
                        >
                          <Ux4gUnifiedPillTag
                            containerStyle={{
                              alignSelf: 'flex-start',
                              borderRadius: 4,
                            }}
                            segments={[
                              {
                                text: '8 days left',
                                textColor: colors.titleColor,
                                leading: (
                                  <div
                                    style={{
                                      width: 7,
                                      height: 7,
                                      borderRadius: '50%',
                                      backgroundColor: colors.secondaryColor,
                                      marginRight: 6,
                                    }}
                                  />
                                ),
                              },
                              {
                                text: 'Under review',
                                textColor: colors.secondaryColor,
                                bold: true,
                              },
                            ]}
                            backgroundColor={colors.cardBg}
                            borderColor={colors.border}
                            dividerColor={colors.border}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Ux4gThemeProvider>
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

export default SearchApplicationsDoc;
