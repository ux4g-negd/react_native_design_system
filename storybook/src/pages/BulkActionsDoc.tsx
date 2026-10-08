import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gUnifiedPillTag } from '../../../src/components/tag/Tag';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { Ux4gStatusAvatar } from '../../../src/components/avatar/Avatar';
import { Ux4gCheckbox } from '../../../src/components/checkbox/Checkbox';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface BulkActionsDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

export const BulkActionsDoc: React.FC<BulkActionsDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [selectedCards, setSelectedCards] = useState<Set<number>>(new Set([0, 1, 2]));

  const toggleSelect = (index: number) => {
    setSelectedCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const clearSelections = () => {
    setSelectedCards(new Set());
  };

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
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      secondaryColor: isDark ? UX4GColors.secondary300 : UX4GColors.secondary600,
      errorColor: isDark ? UX4GColors.red300 : UX4GColors.red600,
      red800: isDark ? UX4GColors.red300 : UX4GColors.red800,
      greenColor: UX4GColors.green600,
      statCardBorder: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      buttonOutlineBorder: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300,
      buttonOutlineText: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      actionBarBg: isDark ? '#1E1A38' : '#F5F3FF',
      actionBarBorder: isDark ? '#3B2D71' : '#E0E7FF',
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
  SafeAreaView,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gButton,
  Ux4gResultList,
  Ux4gUnifiedPillTag,
  Ux4gStatusAvatar,
  Ux4gCheckbox,
  UX4GColors,
} from 'ux4g-react-native-components';

export const BulkActionsScreen = ({
  isDark = false,
  onDownloadAll = () => {},
  onTrackTogether = () => {},
  onTrack = (_ref: string) => {},
  onDownload = () => {},
}: {
  isDark?: boolean;
  onDownloadAll?: () => void;
  onTrackTogether?: () => void;
  onTrack?: (ref: string) => void;
  onDownload?: () => void;
}) => {
  const [selected, setSelected] = useState<Set<number>>(new Set([0, 1, 2]));

  const toggleSelect = (index: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const clearSelections = () => {
    setSelected(new Set());
  };

  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleText = isDark ? UX4GColors.neutral400 : UX4GColors.neutral600;
  const cardBg = isDark ? UX4GColors.neutral900 : UX4GColors.neutral0;
  const borderColor = isDark ? UX4GColors.neutral700 : UX4GColors.neutral200;
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const secondaryColor = isDark ? UX4GColors.secondary300 : UX4GColors.secondary600;
  const errorColor = isDark ? UX4GColors.red300 : UX4GColors.red600;
  const errorDarkColor = isDark ? UX4GColors.red300 : UX4GColors.red800;

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
          Select applications to download or track together
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

        {/* Bulk Action Banner */}
        <View
          style={[
            styles.bulkBanner,
            {
              backgroundColor: isDark ? '#1E1A38' : '#F5F3FF',
            },
          ]}
        >
          <View style={styles.bannerHeader}>
            <Text style={[styles.bannerTitle, { color: titleColor }]}>
              {selected.size} selected
            </Text>
            <TouchableOpacity onPress={clearSelections}>
              <Text style={[styles.clearLink, { color: primaryColor }]}>
                Clear filters
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bannerButtonsRow}>
            <View style={{ flex: 1 }}>
              <Ux4gButton
                text="Download all"
                onPress={onDownloadAll}
                variant="outline"
                size="medium"
                borderRadius={8}
                borderColor={isDark ? '#4B3A8A' : '#C7D2FE'}
                contentColor={isDark ? '#C7D2FE' : primaryColor}
                backgroundColor={isDark ? '#1E1A38' : '#F5F3FF'}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Ux4gButton
                text="Track together"
                onPress={onTrackTogether}
                variant="primary"
                size="medium"
                borderRadius={8}
                backgroundColor={primaryColor}
                contentColor="#FFFFFF"
              />
            </View>
          </View>
        </View>

        {/* Applications List */}
        <View style={styles.listContainer}>
          {/* Item 1: Escalation available (Checked) */}
          <View style={styles.selectableRow}>
            <Ux4gCheckbox
              value={selected.has(0)}
              onChanged={() => toggleSelect(0)}
              size="medium"
            />
            <View style={{ flex: 1 }}>
              <Ux4gResultList
                title="Income Certificate"
                actionButtonText="Track"
                onActionPressed={() => onTrack('INC-2026-MH-04127')}
                metadataSegments={[
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
                    textColor: errorDarkColor,
                    bold: true,
                  },
                ]}
                showBottomDivider={true}
                contentPadding={8}
              />
            </View>
          </View>

          {/* Item 2: Action needed (Checked) */}
          <View style={styles.selectableRow}>
            <Ux4gCheckbox
              value={selected.has(1)}
              onChanged={() => toggleSelect(1)}
              size="medium"
            />
            <View style={{ flex: 1 }}>
              <Ux4gResultList
                title="Income Certificate"
                actionButtonText="Track"
                onActionPressed={() => onTrack('INC-2026-MH-04128')}
                metadataSegments={[
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
                    textColor: secondaryColor,
                    bold: true,
                  },
                ]}
                showBottomDivider={true}
                contentPadding={8}
              />
            </View>
          </View>

          {/* Item 3: Under review (Checked) */}
          <View style={styles.selectableRow}>
            <Ux4gCheckbox
              value={selected.has(2)}
              onChanged={() => toggleSelect(2)}
              size="medium"
            />
            <View style={{ flex: 1 }}>
              <Ux4gResultList
                title="Income Certificate"
                actionButtonText="Track"
                onActionPressed={() => onTrack('INC-2026-MH-04129')}
                metadataSegments={[
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
                showBottomDivider={true}
                contentPadding={8}
              />
            </View>
          </View>

          {/* Item 4: Birth Certificate Download (Unchecked) */}
          <View style={styles.selectableRow}>
            <Ux4gCheckbox
              value={selected.has(3)}
              onChanged={() => toggleSelect(3)}
              size="medium"
            />
            <View style={{ flex: 1 }}>
              <Ux4gResultList
                title="Birth Certificate"
                titleTrailing={
                  <View style={styles.greenCheckBadge}>
                    <Text style={styles.greenCheckText}>✓</Text>
                  </View>
                }
                actionButtonText="Download"
                onActionPressed={onDownload}
                showBottomDivider={true}
                contentPadding={8}
              />
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
  bulkBanner: {
    borderRadius: 8,
    padding: 14,
    marginBottom: 16,
  },
  bannerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  bannerTitle: { fontSize: 14, fontWeight: '700' },
  clearLink: { fontSize: 13, fontWeight: '600' },
  bannerButtonsRow: { flexDirection: 'row', gap: 10 },
  listContainer: { flexDirection: 'column' },
  selectableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  tagDot: { width: 7, height: 7, borderRadius: 4, marginRight: 6 },
  greenCheckBadge: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#16A34A',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
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
          <h1 className="wb-title">Bulk Actions</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A dashboard pattern for selecting multiple application items to perform bulk operations such as downloading documents or tracking status together.
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
                        Select applications to download or track together
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

                      {/* Bulk Action Banner */}
                      <div
                        style={{
                          backgroundColor: colors.actionBarBg,
                          borderRadius: 8,
                          padding: 14,
                          marginBottom: 14,
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 12,
                          }}
                        >
                          <span
                            style={{
                              fontSize: 14,
                              fontWeight: 700,
                              color: colors.titleColor,
                            }}
                          >
                            {selectedCards.size} selected
                          </span>
                          <button
                            type="button"
                            onClick={clearSelections}
                            style={{
                              background: 'none',
                              border: 'none',
                              padding: 0,
                              fontSize: 13,
                              fontWeight: 600,
                              color: colors.primaryColor,
                              cursor: 'pointer',
                            }}
                          >
                            Clear filters
                          </button>
                        </div>

                        <div style={{ display: 'flex', gap: 10 }}>
                          <div style={{ flex: 1 }}>
                            <Ux4gButton
                              text="Download all"
                              variant="outline"
                              size="medium"
                              borderRadius={8}
                              borderColor={isDark ? '#4B3A8A' : '#C7D2FE'}
                              contentColor={isDark ? '#C7D2FE' : colors.primaryColor}
                              backgroundColor={colors.actionBarBg}
                              onPress={() => {}}
                            />
                          </div>
                          <div style={{ flex: 1 }}>
                            <Ux4gButton
                              text="Track together"
                              variant="primary"
                              size="medium"
                              borderRadius={8}
                              backgroundColor={colors.primaryColor}
                              contentColor="#FFFFFF"
                              onPress={() => {}}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Selectable Results List */}
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {/* Item 1: Escalation available */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <Ux4gCheckbox
                            value={selectedCards.has(0)}
                            onChanged={() => toggleSelect(0)}
                            size="medium"
                          />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: 6,
                                paddingTop: 8,
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
                                <span
                                  className="material-symbols-outlined"
                                  style={{ fontSize: 18, color: colors.subtleText }}
                                >
                                  keyboard_arrow_down
                                </span>
                              </div>
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                marginBottom: 8,
                              }}
                            >
                              <Ux4gUnifiedPillTag
                                containerStyle={{
                                  alignSelf: 'flex-start',
                                  borderRadius: 4,
                                }}
                                segments={[
                                  {
                                    text: '2 days overdue',
                                    textColor: colors.titleColor,
                                    leading: (
                                      <div
                                        style={{
                                          width: 7,
                                          height: 7,
                                          borderRadius: '50%',
                                          backgroundColor: colors.errorColor,
                                          marginRight: 6,
                                        }}
                                      />
                                    ),
                                  },
                                  {
                                    text: 'Escalation available',
                                    textColor: colors.red800,
                                    bold: true,
                                  },
                                ]}
                                backgroundColor={colors.cardBg}
                                borderColor={colors.border}
                                dividerColor={colors.border}
                              />
                            </div>
                            <div style={{ height: 1, backgroundColor: colors.dividerColor, width: '100%' }} />
                          </div>
                        </div>

                        {/* Item 2: Action needed */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <Ux4gCheckbox
                            value={selectedCards.has(1)}
                            onChanged={() => toggleSelect(1)}
                            size="medium"
                          />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: 6,
                                paddingTop: 8,
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
                                <span
                                  className="material-symbols-outlined"
                                  style={{ fontSize: 18, color: colors.subtleText }}
                                >
                                  keyboard_arrow_down
                                </span>
                              </div>
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                marginBottom: 8,
                              }}
                            >
                              <Ux4gUnifiedPillTag
                                containerStyle={{
                                  alignSelf: 'flex-start',
                                  borderRadius: 4,
                                }}
                                segments={[
                                  {
                                    text: '4 days left',
                                    textColor: colors.titleColor,
                                    leading: (
                                      <div
                                        style={{
                                          width: 7,
                                          height: 7,
                                          borderRadius: '50%',
                                          backgroundColor: colors.errorColor,
                                          marginRight: 6,
                                        }}
                                      />
                                    ),
                                  },
                                  {
                                    text: 'Action needed',
                                    textColor: colors.secondaryColor,
                                    bold: true,
                                  },
                                ]}
                                backgroundColor={colors.cardBg}
                                borderColor={colors.border}
                                dividerColor={colors.border}
                              />
                            </div>
                            <div style={{ height: 1, backgroundColor: colors.dividerColor, width: '100%' }} />
                          </div>
                        </div>

                        {/* Item 3: Under review */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <Ux4gCheckbox
                            value={selectedCards.has(2)}
                            onChanged={() => toggleSelect(2)}
                            size="medium"
                          />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: 6,
                                paddingTop: 8,
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
                                <span
                                  className="material-symbols-outlined"
                                  style={{ fontSize: 18, color: colors.subtleText }}
                                >
                                  keyboard_arrow_down
                                </span>
                              </div>
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                marginBottom: 8,
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
                            <div style={{ height: 1, backgroundColor: colors.dividerColor, width: '100%' }} />
                          </div>
                        </div>

                        {/* Item 4: Birth Certificate Download (Unchecked) */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <Ux4gCheckbox
                            value={selectedCards.has(3)}
                            onChanged={() => toggleSelect(3)}
                            size="medium"
                          />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingTop: 8,
                                paddingBottom: 8,
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
                                    fontSize: 16,
                                    color: colors.greenColor,
                                    fontVariationSettings: "'FILL' 1",
                                  }}
                                >
                                  check_circle
                                </span>
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                <Ux4gButton
                                  text="Download"
                                  variant="outline"
                                  size="small"
                                  leadingIcon={
                                    <span
                                      className="material-symbols-outlined"
                                      style={{ fontSize: 15 }}
                                    >
                                      download
                                    </span>
                                  }
                                  contentColor={colors.buttonOutlineText}
                                  borderColor={colors.buttonOutlineBorder}
                                  onPress={() => {}}
                                />
                                <span
                                  className="material-symbols-outlined"
                                  style={{ fontSize: 18, color: colors.subtleText }}
                                >
                                  keyboard_arrow_down
                                </span>
                              </div>
                            </div>
                            <div style={{ height: 1, backgroundColor: colors.dividerColor, width: '100%' }} />
                          </div>
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

export default BulkActionsDoc;
