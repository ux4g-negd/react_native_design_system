import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
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
      screenBg: isDark ? UX4GColors.neutral950 : '#FFFFFF',
      headerBg: isDark ? '#161925' : '#FFFFFF',
      cardBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      dividerColor: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      verticalDividerColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      titleColor: isDark ? '#FFFFFF' : '#111827',
      subtleText: isDark ? '#9CA3AF' : '#4B5563',
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      actionBarBg: isDark ? '#1E2130' : UX4GColors.primary50,
      checkboxBgUnselected: isDark ? UX4GColors.neutral800 : '#FFFFFF',
      checkboxBorder: isDark ? UX4GColors.neutral600 : '#E5E7EB',
      buttonOutlineBorder: isDark ? UX4GColors.neutral700 : '#D1D5DB',
      redDot: isDark ? UX4GColors.red300 : UX4GColors.red600,
      redBadge: isDark ? UX4GColors.red300 : UX4GColors.red800,
      secondaryDot: isDark ? UX4GColors.secondary300 : UX4GColors.secondary600,
      orangeBadge: isDark ? UX4GColors.orange300 : UX4GColors.orange800,
      greenCheck: '#16A34A',
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
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const BulkActionsScreen = ({
  isDark = false,
  onDownloadAll = () => {},
  onTrackTogether = () => {},
}: {
  isDark?: boolean;
  onDownloadAll?: () => void;
  onTrackTogether?: () => void;
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

  const screenBg = isDark ? UX4GColors.neutral950 : '#FFFFFF';
  const titleColor = isDark ? '#FFFFFF' : '#111827';
  const subtleText = isDark ? '#9CA3AF' : '#4B5563';
  const borderColor = isDark ? UX4GColors.neutral700 : '#E5E7EB';
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
        {/* Greeting */}
        <Text style={[styles.greetingTitle, { color: titleColor }]}>
          Good morning, Ramesh
        </Text>
        <Text style={[styles.greetingSubtitle, { color: subtleText }]}>
          Select applications to download or track together
        </Text>

        {/* Bulk Action Bar */}
        <View
          style={[
            styles.actionBar,
            { backgroundColor: isDark ? '#1E2130' : UX4GColors.primary50 },
          ]}
        >
          <View style={styles.actionBarTop}>
            <Text style={[styles.selectedCountText, { color: titleColor }]}>
              {selected.size} selected
            </Text>
            <TouchableOpacity onPress={() => setSelected(new Set())}>
              <Text style={[styles.clearFilterText, { color: primaryColor }]}>
                Clear filters
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.actionBtnRow}>
            <View style={{ flex: 1 }}>
              <Ux4gButton
                text="Download all"
                onPress={onDownloadAll}
                variant="outline"
                borderColor={UX4GColors.primary400}
                contentColor={primaryColor}
              />
            </View>
            <View style={{ width: 12 }} />
            <View style={{ flex: 1 }}>
              <Ux4gButton
                text="Track together"
                onPress={onTrackTogether}
                variant="primary"
                backgroundColor={UX4GColors.primary600}
              />
            </View>
          </View>
        </View>

        {/* Card List */}
        {/* Card 0 */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => toggleSelect(0)}
          style={[styles.cardRow, { borderBottomColor: borderColor }]}
        >
          <View
            style={[
              styles.checkbox,
              selected.has(0)
                ? { backgroundColor: UX4GColors.primary600, borderColor: UX4GColors.primary600 }
                : { backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF', borderColor: borderColor },
            ]}
          >
            {selected.has(0) && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <View style={styles.cardContent}>
            <View style={styles.cardHeader}>
              <Text style={[styles.cardTitle, { color: titleColor }]}>
                Income Certificate
              </Text>
              <View style={styles.cardActions}>
                <TouchableOpacity
                  style={[styles.actionBtn, { borderColor: borderColor }]}
                >
                  <Text style={[styles.actionBtnText, { color: titleColor }]}>
                    Track
                  </Text>
                </TouchableOpacity>
                <Text style={{ color: subtleText, fontSize: 16 }}>▼</Text>
              </View>
            </View>
            <View style={[styles.statusPill, { borderColor: borderColor }]}>
              <View style={[styles.dot, { backgroundColor: isDark ? UX4GColors.red300 : UX4GColors.red600 }]} />
              <Text style={[styles.statusText, { color: titleColor }]}>2 days overdue</Text>
              <View style={[styles.pillDivider, { backgroundColor: borderColor }]} />
              <Text style={[styles.badgeText, { color: isDark ? UX4GColors.red300 : UX4GColors.red800 }]}>
                Escalation available
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Card 1 */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => toggleSelect(1)}
          style={[styles.cardRow, { borderBottomColor: borderColor }]}
        >
          <View
            style={[
              styles.checkbox,
              selected.has(1)
                ? { backgroundColor: UX4GColors.primary600, borderColor: UX4GColors.primary600 }
                : { backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF', borderColor: borderColor },
            ]}
          >
            {selected.has(1) && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <View style={styles.cardContent}>
            <View style={styles.cardHeader}>
              <Text style={[styles.cardTitle, { color: titleColor }]}>
                Income Certificate
              </Text>
              <View style={styles.cardActions}>
                <TouchableOpacity
                  style={[styles.actionBtn, { borderColor: borderColor }]}
                >
                  <Text style={[styles.actionBtnText, { color: titleColor }]}>
                    Track
                  </Text>
                </TouchableOpacity>
                <Text style={{ color: subtleText, fontSize: 16 }}>▼</Text>
              </View>
            </View>
            <View style={[styles.statusPill, { borderColor: borderColor }]}>
              <View style={[styles.dot, { backgroundColor: isDark ? UX4GColors.red300 : UX4GColors.red600 }]} />
              <Text style={[styles.statusText, { color: titleColor }]}>4 days left</Text>
              <View style={[styles.pillDivider, { backgroundColor: borderColor }]} />
              <Text style={[styles.badgeText, { color: isDark ? UX4GColors.red300 : UX4GColors.red800 }]}>
                Action needed
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Card 2 */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => toggleSelect(2)}
          style={[styles.cardRow, { borderBottomColor: borderColor }]}
        >
          <View
            style={[
              styles.checkbox,
              selected.has(2)
                ? { backgroundColor: UX4GColors.primary600, borderColor: UX4GColors.primary600 }
                : { backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF', borderColor: borderColor },
            ]}
          >
            {selected.has(2) && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <View style={styles.cardContent}>
            <View style={styles.cardHeader}>
              <Text style={[styles.cardTitle, { color: titleColor }]}>
                Income Certificate
              </Text>
              <View style={styles.cardActions}>
                <TouchableOpacity
                  style={[styles.actionBtn, { borderColor: borderColor }]}
                >
                  <Text style={[styles.actionBtnText, { color: titleColor }]}>
                    Track
                  </Text>
                </TouchableOpacity>
                <Text style={{ color: subtleText, fontSize: 16 }}>▼</Text>
              </View>
            </View>
            <View style={[styles.statusPill, { borderColor: borderColor }]}>
              <View style={[styles.dot, { backgroundColor: isDark ? UX4GColors.secondary300 : UX4GColors.secondary600 }]} />
              <Text style={[styles.statusText, { color: titleColor }]}>8 days left</Text>
              <View style={[styles.pillDivider, { backgroundColor: borderColor }]} />
              <Text style={[styles.badgeText, { color: isDark ? UX4GColors.orange300 : UX4GColors.orange800 }]}>
                Under review
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Card 3 (Completed) */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => toggleSelect(3)}
          style={[styles.cardRow, { borderBottomColor: borderColor }]}
        >
          <View
            style={[
              styles.checkbox,
              selected.has(3)
                ? { backgroundColor: UX4GColors.primary600, borderColor: UX4GColors.primary600 }
                : { backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF', borderColor: borderColor },
            ]}
          >
            {selected.has(3) && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <View style={styles.cardContent}>
            <View style={styles.cardHeader}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <Text style={[styles.cardTitle, { color: titleColor }]}>
                  Birth Certificate
                </Text>
                <Text style={{ color: '#16A34A', fontSize: 14 }}>✓</Text>
              </View>
              <View style={styles.cardActions}>
                <TouchableOpacity
                  style={[styles.actionBtn, { borderColor: borderColor }]}
                >
                  <Text style={[styles.actionBtnText, { color: titleColor }]}>
                    Download
                  </Text>
                </TouchableOpacity>
                <Text style={{ color: subtleText, fontSize: 16 }}>▼</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
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
  greetingTitle: { fontSize: 22, fontWeight: '700', marginBottom: 4 },
  greetingSubtitle: { fontSize: 13, marginBottom: 20 },
  actionBar: {
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  actionBarTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  selectedCountText: { fontSize: 16, fontWeight: '600' },
  clearFilterText: { fontSize: 15, fontWeight: '500' },
  actionBtnRow: { flexDirection: 'row' },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkmark: { color: '#FFFFFF', fontSize: 12, fontWeight: 'bold' },
  cardContent: { flex: 1 },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: { fontSize: 15, fontWeight: '600' },
  cardActions: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  actionBtn: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
  },
  actionBtnText: { fontSize: 13, fontWeight: '500' },
  statusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginTop: 8,
    gap: 6,
  },
  dot: { width: 6, height: 6, borderRadius: 3 },
  statusText: { fontSize: 11 },
  pillDivider: { width: 1, height: 10 },
  badgeText: { fontSize: 11, fontWeight: '500' },
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
          A multi-select pattern allowing users to select multiple applications for bulk actions like downloading or tracking together.
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
                      padding: '20px 16px 24px',
                      display: 'flex',
                      flexDirection: 'column',
                      boxSizing: 'border-box',
                    }}
                  >
                    {/* Greeting */}
                    <div
                      style={{
                        fontSize: 22,
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
                        marginBottom: 20,
                      }}
                    >
                      Select applications to download or track together
                    </div>

                    {/* Bulk Action Bar */}
                    <div
                      style={{
                        padding: 16,
                        backgroundColor: colors.actionBarBg,
                        borderRadius: 10,
                        marginBottom: 20,
                        boxSizing: 'border-box',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: 12,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: 600,
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
                            fontSize: 15,
                            fontWeight: 500,
                            color: colors.primaryColor,
                            cursor: 'pointer',
                          }}
                        >
                          Clear filters
                        </button>
                      </div>

                      <div style={{ display: 'flex', gap: 10 }}>
                        <button
                          type="button"
                          style={{
                            flex: 1,
                            height: 44,
                            borderRadius: 8,
                            border: `1.5px solid ${UX4GColors.primary400}`,
                            backgroundColor: 'transparent',
                            color: colors.primaryColor,
                            fontSize: 15,
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          Download all
                        </button>
                        <button
                          type="button"
                          style={{
                            flex: 1,
                            height: 44,
                            borderRadius: 8,
                            border: 'none',
                            backgroundColor: UX4GColors.primary600,
                            color: '#FFFFFF',
                            fontSize: 15,
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          Track together
                        </button>
                      </div>
                    </div>

                    {/* Card List with Checkboxes */}
                    {/* Card 0 */}
                    <div
                      onClick={() => toggleSelect(0)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '12px 0',
                        borderBottom: `1px solid ${colors.border}`,
                        cursor: 'pointer',
                        userSelect: 'none',
                      }}
                    >
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 4,
                          border: `1.5px solid ${
                            selectedCards.has(0) ? UX4GColors.primary600 : colors.checkboxBorder
                          }`,
                          backgroundColor: selectedCards.has(0)
                            ? UX4GColors.primary600
                            : colors.checkboxBgUnselected,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: 12,
                          flexShrink: 0,
                        }}
                      >
                        {selectedCards.has(0) && (
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 16, color: '#FFFFFF', fontWeight: 'bold' }}
                          >
                            check
                          </span>
                        )}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <span
                            style={{
                              fontSize: 15,
                              fontWeight: 600,
                              color: colors.titleColor,
                            }}
                          >
                            Income Certificate
                          </span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                              style={{
                                padding: '4px 10px',
                                borderRadius: 6,
                                border: `1px solid ${colors.buttonOutlineBorder}`,
                                backgroundColor: 'transparent',
                                color: colors.titleColor,
                                fontSize: 13,
                                fontWeight: 500,
                                cursor: 'pointer',
                              }}
                            >
                              Track
                            </button>
                            <span
                              className="material-symbols-outlined"
                              style={{ fontSize: 18, color: colors.subtleText }}
                            >
                              keyboard_arrow_down
                            </span>
                          </div>
                        </div>

                        {/* Status Pill Tag */}
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            border: `1px solid ${colors.border}`,
                            borderRadius: 4,
                            padding: '3px 8px',
                            marginTop: 8,
                            gap: 6,
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                            <div
                              style={{
                                width: 6,
                                height: 6,
                                borderRadius: 3,
                                backgroundColor: colors.redDot,
                              }}
                            />
                            <span style={{ fontSize: 12, color: colors.titleColor }}>
                              2 days overdue
                            </span>
                          </div>
                          <div
                            style={{
                              width: 1,
                              height: 10,
                              backgroundColor: colors.border,
                            }}
                          />
                          <span
                            style={{
                              fontSize: 11,
                              fontWeight: 500,
                              color: colors.redBadge,
                            }}
                          >
                            Escalation available
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card 1 */}
                    <div
                      onClick={() => toggleSelect(1)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '12px 0',
                        borderBottom: `1px solid ${colors.border}`,
                        cursor: 'pointer',
                        userSelect: 'none',
                      }}
                    >
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 4,
                          border: `1.5px solid ${
                            selectedCards.has(1) ? UX4GColors.primary600 : colors.checkboxBorder
                          }`,
                          backgroundColor: selectedCards.has(1)
                            ? UX4GColors.primary600
                            : colors.checkboxBgUnselected,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: 12,
                          flexShrink: 0,
                        }}
                      >
                        {selectedCards.has(1) && (
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 16, color: '#FFFFFF', fontWeight: 'bold' }}
                          >
                            check
                          </span>
                        )}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <span
                            style={{
                              fontSize: 15,
                              fontWeight: 600,
                              color: colors.titleColor,
                            }}
                          >
                            Income Certificate
                          </span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                              style={{
                                padding: '4px 10px',
                                borderRadius: 6,
                                border: `1px solid ${colors.buttonOutlineBorder}`,
                                backgroundColor: 'transparent',
                                color: colors.titleColor,
                                fontSize: 13,
                                fontWeight: 500,
                                cursor: 'pointer',
                              }}
                            >
                              Track
                            </button>
                            <span
                              className="material-symbols-outlined"
                              style={{ fontSize: 18, color: colors.subtleText }}
                            >
                              keyboard_arrow_down
                            </span>
                          </div>
                        </div>

                        {/* Status Pill Tag */}
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            border: `1px solid ${colors.border}`,
                            borderRadius: 4,
                            padding: '3px 8px',
                            marginTop: 8,
                            gap: 6,
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                            <div
                              style={{
                                width: 6,
                                height: 6,
                                borderRadius: 3,
                                backgroundColor: colors.redDot,
                              }}
                            />
                            <span style={{ fontSize: 12, color: colors.titleColor }}>
                              4 days left
                            </span>
                          </div>
                          <div
                            style={{
                              width: 1,
                              height: 10,
                              backgroundColor: colors.border,
                            }}
                          />
                          <span
                            style={{
                              fontSize: 11,
                              fontWeight: 500,
                              color: colors.redBadge,
                            }}
                          >
                            Action needed
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div
                      onClick={() => toggleSelect(2)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '12px 0',
                        borderBottom: `1px solid ${colors.border}`,
                        cursor: 'pointer',
                        userSelect: 'none',
                      }}
                    >
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 4,
                          border: `1.5px solid ${
                            selectedCards.has(2) ? UX4GColors.primary600 : colors.checkboxBorder
                          }`,
                          backgroundColor: selectedCards.has(2)
                            ? UX4GColors.primary600
                            : colors.checkboxBgUnselected,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: 12,
                          flexShrink: 0,
                        }}
                      >
                        {selectedCards.has(2) && (
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 16, color: '#FFFFFF', fontWeight: 'bold' }}
                          >
                            check
                          </span>
                        )}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <span
                            style={{
                              fontSize: 15,
                              fontWeight: 600,
                              color: colors.titleColor,
                            }}
                          >
                            Income Certificate
                          </span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                              style={{
                                padding: '4px 10px',
                                borderRadius: 6,
                                border: `1px solid ${colors.buttonOutlineBorder}`,
                                backgroundColor: 'transparent',
                                color: colors.titleColor,
                                fontSize: 13,
                                fontWeight: 500,
                                cursor: 'pointer',
                              }}
                            >
                              Track
                            </button>
                            <span
                              className="material-symbols-outlined"
                              style={{ fontSize: 18, color: colors.subtleText }}
                            >
                              keyboard_arrow_down
                            </span>
                          </div>
                        </div>

                        {/* Status Pill Tag */}
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            border: `1px solid ${colors.border}`,
                            borderRadius: 4,
                            padding: '3px 8px',
                            marginTop: 8,
                            gap: 6,
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                            <div
                              style={{
                                width: 6,
                                height: 6,
                                borderRadius: 3,
                                backgroundColor: colors.secondaryDot,
                              }}
                            />
                            <span style={{ fontSize: 12, color: colors.titleColor }}>
                              8 days left
                            </span>
                          </div>
                          <div
                            style={{
                              width: 1,
                              height: 10,
                              backgroundColor: colors.border,
                            }}
                          />
                          <span
                            style={{
                              fontSize: 11,
                              fontWeight: 500,
                              color: colors.orangeBadge,
                            }}
                          >
                            Under review
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 (Completed) */}
                    <div
                      onClick={() => toggleSelect(3)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '12px 0',
                        borderBottom: `1px solid ${colors.border}`,
                        cursor: 'pointer',
                        userSelect: 'none',
                      }}
                    >
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 4,
                          border: `1.5px solid ${
                            selectedCards.has(3) ? UX4GColors.primary600 : colors.checkboxBorder
                          }`,
                          backgroundColor: selectedCards.has(3)
                            ? UX4GColors.primary600
                            : colors.checkboxBgUnselected,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: 12,
                          flexShrink: 0,
                        }}
                      >
                        {selectedCards.has(3) && (
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 16, color: '#FFFFFF', fontWeight: 'bold' }}
                          >
                            check
                          </span>
                        )}
                      </div>
                      <div style={{ flex: 1 }}>
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
                                fontSize: 15,
                                fontWeight: 600,
                                color: colors.titleColor,
                              }}
                            >
                              Birth Certificate
                            </span>
                            <span
                              className="material-symbols-outlined"
                              style={{
                                fontSize: 16,
                                color: colors.greenCheck,
                                fontVariationSettings: "'FILL' 1",
                              }}
                            >
                              check_circle
                            </span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 4,
                                padding: '4px 10px',
                                borderRadius: 6,
                                border: `1px solid ${colors.buttonOutlineBorder}`,
                                backgroundColor: 'transparent',
                                color: colors.titleColor,
                                fontSize: 13,
                                fontWeight: 500,
                                cursor: 'pointer',
                              }}
                            >
                              <span
                                className="material-symbols-outlined"
                                style={{ fontSize: 15 }}
                              >
                                download
                              </span>
                              Download
                            </button>
                            <span
                              className="material-symbols-outlined"
                              style={{ fontSize: 18, color: colors.subtleText }}
                            >
                              keyboard_arrow_down
                            </span>
                          </div>
                        </div>
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

export default BulkActionsDoc;
