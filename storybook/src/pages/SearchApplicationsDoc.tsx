import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface SearchApplicationsDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

export const SearchApplicationsDoc: React.FC<SearchApplicationsDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
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
      searchFieldBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      searchFieldBorder: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
      searchBtnBg: UX4GColors.primary600,
      searchBtnText: '#FFFFFF',
      trackBtnBorder: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300,
      trackBtnText: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      dotColor: isDark ? UX4GColors.secondary300 : UX4GColors.secondary600,
      underReviewColor: isDark ? UX4GColors.orange300 : UX4GColors.orange600,
      actionNeededColor: isDark ? UX4GColors.secondary600 : UX4GColors.secondary300,
      uploadDocColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      tagBorder: isDark ? UX4GColors.neutral700 : '#D1D5DB',
      tagText: isDark ? UX4GColors.neutral100 : '#1F2937',
    };
  }, [isDark]);

  const codeString = useMemo(() => {
    return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const SearchApplicationsScreen = ({
  isDark = false,
  onTrack = () => {},
  onUploadDocument = () => {},
}: {
  isDark?: boolean;
  onTrack?: () => void;
  onUploadDocument?: () => void;
}) => {
  const [searchValue, setSearchValue] = useState('income');
  const [expandedCard1, setExpandedCard1] = useState(true);
  const [expandedCard2, setExpandedCard2] = useState(false);

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

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Greeting */}
        <Text style={[styles.greetingTitle, { color: titleColor }]}>
          Good morning, Ramesh
        </Text>
        <Text style={[styles.greetingSubtitle, { color: subtleText }]}>
          Find an application by reference or service name
        </Text>

        {/* Search Bar */}
        <View
          style={[
            styles.searchContainer,
            {
              backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
              borderColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
            },
          ]}
        >
          <TextInput
            value={searchValue}
            onChangeText={setSearchValue}
            placeholder="Search..."
            placeholderTextColor={isDark ? UX4GColors.neutral500 : UX4GColors.neutral400}
            style={[styles.searchInput, { color: titleColor }]}
          />
          {searchValue.length > 0 && (
            <TouchableOpacity
              onPress={() => setSearchValue('')}
              style={styles.clearBtn}
            >
              <Text style={{ fontSize: 16, color: subtleText }}>✕</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={[styles.searchSubmitBtn, { backgroundColor: UX4GColors.primary600 }]}
          >
            <Text style={{ color: '#FFFFFF', fontSize: 16 }}>🔍</Text>
          </TouchableOpacity>
        </View>

        {/* Result Count */}
        <Text style={[styles.resultCount, { color: subtleText }]}>
          2 results for "{searchValue}"
        </Text>

        {/* Result Card 1 (Expanded) */}
        <View
          style={[
            styles.resultCard,
            {
              backgroundColor: cardBg,
              borderColor: borderColor,
            },
          ]}
        >
          <View style={styles.cardHeader}>
            <Text style={[styles.cardTitle, { color: titleColor }]}>
              Income Certificate
            </Text>
            <View style={styles.cardActions}>
              <TouchableOpacity
                onPress={onTrack}
                style={[
                  styles.trackBtn,
                  {
                    borderColor: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.trackBtnText,
                    { color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900 },
                  ]}
                >
                  Track
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setExpandedCard1(!expandedCard1)}
                style={styles.expandToggle}
              >
                <Text style={{ fontSize: 16, color: subtleText }}>
                  {expandedCard1 ? '▲' : '▼'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Unified Status Pill Tag */}
          <View style={[styles.pillTag, { borderColor: isDark ? UX4GColors.neutral700 : '#D1D5DB' }]}>
            <View style={styles.pillSegment}>
              <View
                style={[
                  styles.dot,
                  {
                    backgroundColor: isDark
                      ? UX4GColors.secondary300
                      : UX4GColors.secondary600,
                  },
                ]}
              />
              <Text
                style={[
                  styles.pillText,
                  { color: isDark ? UX4GColors.neutral100 : '#1F2937' },
                ]}
              >
                8 days left
              </Text>
            </View>
            <View style={styles.pillDivider} />
            <View style={styles.pillSegment}>
              <Text
                style={[
                  styles.pillText,
                  {
                    color: isDark ? UX4GColors.orange300 : UX4GColors.orange600,
                    fontWeight: '600',
                  },
                ]}
              >
                Under review
              </Text>
            </View>
          </View>

          {expandedCard1 && (
            <View style={styles.detailsContainer}>
              <View style={styles.detailRow}>
                <View style={styles.detailCol}>
                  <Text style={[styles.detailLabel, { color: subtleText }]}>
                    Reference Number
                  </Text>
                  <Text style={[styles.detailValue, { color: titleColor }]}>
                    INC-2026-MH-04127
                  </Text>
                </View>
                <View style={styles.detailCol}>
                  <Text style={[styles.detailLabel, { color: subtleText }]}>
                    Last Updated Date
                  </Text>
                  <Text style={[styles.detailValue, { color: titleColor }]}>
                    10 Apr 2026
                  </Text>
                </View>
              </View>

              <View style={styles.detailRow}>
                <View style={styles.detailCol}>
                  <Text style={[styles.detailLabel, { color: subtleText }]}>
                    Submitted Date
                  </Text>
                  <Text style={[styles.detailValue, { color: titleColor }]}>
                    1 Apr 2026
                  </Text>
                </View>
                <View style={styles.detailCol}>
                  <Text style={[styles.detailLabel, { color: subtleText }]}>
                    Assigned Officer
                  </Text>
                  <Text style={[styles.detailValue, { color: titleColor }]}>
                    Rahul Sharma
                  </Text>
                </View>
              </View>

              <View style={styles.detailRow}>
                <View style={styles.detailCol}>
                  <Text style={[styles.detailLabel, { color: subtleText }]}>
                    Department
                  </Text>
                  <Text style={[styles.detailValue, { color: titleColor }]}>
                    Revenue Department
                  </Text>
                </View>
                <View style={styles.detailCol}>
                  <Text style={[styles.detailLabel, { color: subtleText }]}>
                    Documents
                  </Text>
                  <Text style={[styles.detailValue, { color: titleColor }]}>
                    ID Proof, Address\nProof
                  </Text>
                </View>
              </View>

              <View style={styles.actionSection}>
                <Text
                  style={[
                    styles.actionLabel,
                    {
                      color: isDark
                        ? UX4GColors.secondary600
                        : UX4GColors.secondary300,
                    },
                  ]}
                >
                  Action needed
                </Text>
                <TouchableOpacity
                  onPress={onUploadDocument}
                  style={styles.uploadBtn}
                >
                  <Text
                    style={[
                      styles.uploadBtnText,
                      { color: primaryColor },
                    ]}
                  >
                    Upload document 📤
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>

        {/* Result Card 2 (Collapsed) */}
        <View
          style={[
            styles.resultCard,
            {
              backgroundColor: cardBg,
              borderColor: borderColor,
            },
          ]}
        >
          <View style={styles.cardHeader}>
            <Text style={[styles.cardTitle, { color: titleColor }]}>
              Income Certificate
            </Text>
            <View style={styles.cardActions}>
              <TouchableOpacity
                onPress={onTrack}
                style={[
                  styles.trackBtn,
                  {
                    borderColor: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.trackBtnText,
                    { color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900 },
                  ]}
                >
                  Track
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setExpandedCard2(!expandedCard2)}
                style={styles.expandToggle}
              >
                <Text style={{ fontSize: 16, color: subtleText }}>
                  {expandedCard2 ? '▲' : '▼'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Unified Status Pill Tag */}
          <View style={[styles.pillTag, { borderColor: isDark ? UX4GColors.neutral700 : '#D1D5DB' }]}>
            <View style={styles.pillSegment}>
              <View
                style={[
                  styles.dot,
                  {
                    backgroundColor: isDark
                      ? UX4GColors.secondary300
                      : UX4GColors.secondary600,
                  },
                ]}
              />
              <Text
                style={[
                  styles.pillText,
                  { color: isDark ? UX4GColors.neutral100 : '#1F2937' },
                ]}
              >
                8 days left
              </Text>
            </View>
            <View style={styles.pillDivider} />
            <View style={styles.pillSegment}>
              <Text
                style={[
                  styles.pillText,
                  {
                    color: isDark ? UX4GColors.orange300 : UX4GColors.orange600,
                    fontWeight: '600',
                  },
                ]}
              >
                Under review
              </Text>
            </View>
          </View>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    height: 44,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 14,
  },
  clearBtn: { padding: 8 },
  searchSubmitBtn: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultCount: { fontSize: 13, marginVertical: 16 },
  resultCard: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: { fontSize: 15, fontWeight: '700' },
  cardActions: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  trackBtn: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
  },
  trackBtnText: { fontSize: 12, fontWeight: '600' },
  expandToggle: { padding: 4 },
  pillTag: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 6,
  },
  pillSegment: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  pillDivider: { width: 1, height: 12, backgroundColor: '#D1D5DB' },
  dot: { width: 8, height: 8, borderRadius: 4 },
  pillText: { fontSize: 12, fontWeight: '500' },
  detailsContainer: { marginTop: 16, gap: 12 },
  detailRow: { flexDirection: 'row', gap: 12 },
  detailCol: { flex: 1 },
  detailLabel: { fontSize: 11, marginBottom: 2 },
  detailValue: { fontSize: 13, fontWeight: '500' },
  actionSection: { marginTop: 4 },
  actionLabel: { fontSize: 11, marginBottom: 2 },
  uploadBtn: { paddingVertical: 2 },
  uploadBtnText: { fontSize: 13, fontWeight: '600' },
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
          A search pattern for finding applications by reference number or service name. Shows search input, result count, and application cards with expanded details.
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
                    {/* Greeting */}
                    <div
                      style={{
                        fontSize: 20,
                        fontWeight: 800,
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

                    {/* Search Field */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: colors.searchFieldBg,
                        border: `1px solid ${colors.searchFieldBorder}`,
                        borderRadius: 8,
                        overflow: 'hidden',
                        height: 44,
                        boxSizing: 'border-box',
                      }}
                    >
                      <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Search..."
                        style={{
                          flex: 1,
                          border: 'none',
                          background: 'transparent',
                          padding: '0 12px',
                          fontSize: 14,
                          color: colors.titleColor,
                          outline: 'none',
                        }}
                      />
                      {searchValue.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setSearchValue('')}
                          style={{
                            background: 'none',
                            border: 'none',
                            padding: '0 8px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: colors.subtleText,
                          }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                            close
                          </span>
                        </button>
                      )}
                      <button
                        type="button"
                        style={{
                          width: 44,
                          height: 44,
                          backgroundColor: colors.searchBtnBg,
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: colors.searchBtnText,
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                          search
                        </span>
                      </button>
                    </div>

                    {/* Result Count */}
                    <div
                      style={{
                        fontSize: 13,
                        color: colors.subtleText,
                        margin: '16px 0',
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
                        padding: 16,
                        marginBottom: 16,
                      }}
                    >
                      {/* Card Title Row */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: 10,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 15,
                            fontWeight: 700,
                            color: colors.titleColor,
                          }}
                        >
                          Income Certificate
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <button
                            type="button"
                            style={{
                              padding: '4px 10px',
                              borderRadius: 6,
                              border: `1px solid ${colors.trackBtnBorder}`,
                              backgroundColor: 'transparent',
                              color: colors.trackBtnText,
                              fontSize: 12,
                              fontWeight: 600,
                              cursor: 'pointer',
                            }}
                          >
                            Track
                          </button>
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
                                fontSize: 20,
                                transform: expandedCard1 ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.2s ease',
                              }}
                            >
                              keyboard_arrow_down
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Unified Status Pill Tag */}
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          border: `1px solid ${colors.tagBorder}`,
                          borderRadius: 16,
                          padding: '3px 8px',
                          gap: 6,
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <div
                            style={{
                              width: 8,
                              height: 8,
                              borderRadius: 4,
                              backgroundColor: colors.dotColor,
                            }}
                          />
                          <span
                            style={{
                              fontSize: 12,
                              fontWeight: 500,
                              color: colors.tagText,
                            }}
                          >
                            8 days left
                          </span>
                        </div>
                        <div
                          style={{
                            width: 1,
                            height: 12,
                            backgroundColor: colors.tagBorder,
                          }}
                        />
                        <span
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: colors.underReviewColor,
                          }}
                        >
                          Under review
                        </span>
                      </div>

                      {/* Expanded Details */}
                      {expandedCard1 && (
                        <div
                          style={{
                            marginTop: 16,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 12,
                          }}
                        >
                          <div style={{ display: 'flex', gap: 12 }}>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: 11, color: colors.detailLabel, marginBottom: 2 }}>
                                Reference Number
                              </div>
                              <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue }}>
                                INC-2026-MH-04127
                              </div>
                            </div>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: 11, color: colors.detailLabel, marginBottom: 2 }}>
                                Last Updated Date
                              </div>
                              <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue }}>
                                10 Apr 2026
                              </div>
                            </div>
                          </div>

                          <div style={{ display: 'flex', gap: 12 }}>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: 11, color: colors.detailLabel, marginBottom: 2 }}>
                                Submitted Date
                              </div>
                              <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue }}>
                                1 Apr 2026
                              </div>
                            </div>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: 11, color: colors.detailLabel, marginBottom: 2 }}>
                                Assigned Officer
                              </div>
                              <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue }}>
                                Rahul Sharma
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
                                Documents
                              </div>
                              <div
                                style={{
                                  fontSize: 13,
                                  fontWeight: 500,
                                  color: colors.detailValue,
                                  whiteSpace: 'pre-line',
                                }}
                              >
                                ID Proof, Address{'\n'}Proof
                              </div>
                            </div>
                          </div>

                          <div style={{ marginTop: 4 }}>
                            <div
                              style={{
                                fontSize: 11,
                                color: colors.actionNeededColor,
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
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 4,
                                color: colors.uploadDocColor,
                                fontSize: 13,
                                fontWeight: 600,
                                cursor: 'pointer',
                              }}
                            >
                              Upload document
                              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                                upload
                              </span>
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
                        padding: 16,
                        marginBottom: 16,
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: 10,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 15,
                            fontWeight: 700,
                            color: colors.titleColor,
                          }}
                        >
                          Income Certificate
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <button
                            type="button"
                            style={{
                              padding: '4px 10px',
                              borderRadius: 6,
                              border: `1px solid ${colors.trackBtnBorder}`,
                              backgroundColor: 'transparent',
                              color: colors.trackBtnText,
                              fontSize: 12,
                              fontWeight: 600,
                              cursor: 'pointer',
                            }}
                          >
                            Track
                          </button>
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
                                fontSize: 20,
                                transform: expandedCard2 ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.2s ease',
                              }}
                            >
                              keyboard_arrow_down
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Unified Status Pill Tag */}
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          border: `1px solid ${colors.tagBorder}`,
                          borderRadius: 16,
                          padding: '3px 8px',
                          gap: 6,
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <div
                            style={{
                              width: 8,
                              height: 8,
                              borderRadius: 4,
                              backgroundColor: colors.dotColor,
                            }}
                          />
                          <span
                            style={{
                              fontSize: 12,
                              fontWeight: 500,
                              color: colors.tagText,
                            }}
                          >
                            8 days left
                          </span>
                        </div>
                        <div
                          style={{
                            width: 1,
                            height: 12,
                            backgroundColor: colors.tagBorder,
                          }}
                        />
                        <span
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: colors.underReviewColor,
                          }}
                        >
                          Under review
                        </span>
                      </div>

                      {expandedCard2 && (
                        <div
                          style={{
                            marginTop: 16,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 12,
                          }}
                        >
                          <div style={{ display: 'flex', gap: 12 }}>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: 11, color: colors.detailLabel, marginBottom: 2 }}>
                                Reference Number
                              </div>
                              <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue }}>
                                INC-2026-MH-04128
                              </div>
                            </div>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: 11, color: colors.detailLabel, marginBottom: 2 }}>
                                Last Updated Date
                              </div>
                              <div style={{ fontSize: 13, fontWeight: 500, color: colors.detailValue }}>
                                08 Apr 2026
                              </div>
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

export default SearchApplicationsDoc;
