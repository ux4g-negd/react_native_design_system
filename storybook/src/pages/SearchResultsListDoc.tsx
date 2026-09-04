import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';

interface SearchResultsListDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

interface ResultItem {
  id: string;
  title: string;
  fee: string;
  time: string;
  isPaid: boolean;
  category: number; // 0=All, 1=Certificates, 2=Schemes, 3=Services, 4=Documents, 5=Applications
}

const ALL_RESULTS: ResultItem[] = [
  { id: '1', title: 'Income Certificate', fee: 'Free', time: '20 mins', isPaid: false, category: 1 },
  { id: '2', title: 'Income Tax Return (ITR) Filing', fee: 'Free', time: '30 mins', isPaid: false, category: 1 },
  { id: '3', title: 'Low Income Group (LIG)\nCertificate', fee: 'Free', time: '7 days', isPaid: false, category: 1 },
  { id: '4', title: 'Income & Asset Certificate', fee: '₹ 50+', time: '15 days', isPaid: true, category: 1 },
  { id: '5', title: 'EWS Certificate', fee: 'Free', time: '10 days', isPaid: false, category: 1 },
];

const SEARCH_OPTIONS = [
  'Income Certificate',
  'Income Tax Return Filing',
  'Low Income Group Certificate',
  'Income & Asset Certificate',
  'EWS Certificate',
];

const FILTER_CHIPS = [
  { id: 0, label: 'All · 48' },
  { id: 1, label: 'Certificates · 22' },
  { id: 2, label: 'Schemes · 14' },
  { id: 3, label: 'Services · 12' },
  { id: 4, label: 'Documents · 8' },
  { id: 5, label: 'Applications · 5' },
];

export const SearchResultsListDoc: React.FC<SearchResultsListDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [searchValue, setSearchValue] = useState<string>('income');
  const [selectedChip, setSelectedChip] = useState<number>(1); // Default to 'Certificates · 22'
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const colors = useMemo(() => {
    return {
      screenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
      headerBg: UX4GColors.primary600,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      cardBorder: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      inputBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      searchBarBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral0,
      badgeBg: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      badgeText: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      btnBorder: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300,
      btnText: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      chipSelectedBg: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      chipSelectedText: isDark ? UX4GColors.primary950 : '#FFFFFF',
      chipUnselectedBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      chipUnselectedBorder: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
      chipUnselectedText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      paginationActiveBg: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      paginationDotBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
      paginationArrowBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
      paginationArrowColor: isDark ? UX4GColors.primary200 : UX4GColors.primary600,
      phoneBorder: isDark ? UX4GColors.neutral800 : '#E5E7EB',
      suggestionShadow: isDark ? '0 4px 16px rgba(0, 0, 0, 0.4)' : '0 4px 16px rgba(0, 0, 0, 0.08)',
      hoverBg: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
    };
  }, [isDark]);

  const filteredOptions = useMemo(() => {
    if (!searchValue.trim()) return SEARCH_OPTIONS;
    return SEARCH_OPTIONS.filter((opt) =>
      opt.toLowerCase().includes(searchValue.trim().toLowerCase())
    );
  }, [searchValue]);

  const filteredResults = useMemo(() => {
    return ALL_RESULTS.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(searchValue.toLowerCase());
      const matchesChip = selectedChip === 0 || item.category === selectedChip;
      return matchesSearch && matchesChip;
    });
  }, [searchValue, selectedChip]);

  const codeString = useMemo(() => {
    return `import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gSearchField,
  Ux4gChoiceChip,
  Ux4gButton,
  Ux4gIcons,
  UX4GColors,
} from 'ux4g-react-native-design-system';

interface ResultItem {
  id: string;
  title: string;
  fee: string;
  time: string;
  isPaid: boolean;
}

const RESULTS_DATA: ResultItem[] = [
  { id: '1', title: 'Income Certificate', fee: 'Free', time: '20 mins', isPaid: false },
  { id: '2', title: 'Income Tax Return (ITR) Filing', fee: 'Free', time: '30 mins', isPaid: false },
  { id: '3', title: 'Low Income Group (LIG)\\nCertificate', fee: 'Free', time: '7 days', isPaid: false },
  { id: '4', title: 'Income & Asset Certificate', fee: '₹ 50+', time: '15 days', isPaid: true },
  { id: '5', title: 'EWS Certificate', fee: 'Free', time: '10 days', isPaid: false },
];

const SEARCH_OPTIONS = [
  'Income Certificate',
  'Income Tax Return Filing',
  'Low Income Group Certificate',
  'Income & Asset Certificate',
  'EWS Certificate',
];

const FILTER_CHIPS = [
  { id: 0, label: 'All · 48' },
  { id: 1, label: 'Certificates · 22' },
  { id: 2, label: 'Schemes · 14' },
  { id: 3, label: 'Services · 12' },
  { id: 4, label: 'Documents · 8' },
  { id: 5, label: 'Applications · 5' },
];

export const SearchResultsListScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const [searchValue, setSearchValue] = useState('income');
  const [selectedChip, setSelectedChip] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  const colors = {
    screenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
    searchBarBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral0,
    titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
    subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
    cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
    cardBorder: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
    badgeBg: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
    badgeText: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
    btnBorder: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300,
    btnText: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
    paginationDotBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
    paginationActiveBg: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
    paginationArrowBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
    paginationArrowColor: isDark ? UX4GColors.primary200 : UX4GColors.primary600,
  };

  const filtered = SEARCH_OPTIONS.filter((opt) =>
    opt.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.screenBg }]}>
      {/* App Header */}
      <Ux4gAppHeader
        variant="filled"
        title="National Services Portal"
        showBackButton={true}
        onBackPressed={() => {}}
      />

      {/* Search Bar */}
      <View style={[styles.searchContainer, { backgroundColor: colors.searchBarBg }]}>
        <Ux4gSearchField
          value={searchValue}
          onValueChange={setSearchValue}
          variant="autocomplete"
          size="large"
          placeholder="Search services..."
          showVoiceIcon={true}
          showClearIcon={true}
          options={filtered}
          onOptionSelected={setSearchValue}
          onSubmitClick={() => {}}
          buttonStyle="filled"
        />
      </View>

      {/* Results Count + Filters Button */}
      <View style={styles.resultsHeader}>
        <Text style={[styles.resultsCountText, { color: colors.titleColor }]}>
          48 results
        </Text>
        <Ux4gButton
          text="Filters"
          variant="outline"
          size="small"
          leadingIcon="tune"
          borderColor={colors.btnBorder}
          contentColor={colors.btnText}
          onPressed={() => {}}
          style={styles.filterBtn}
        />
      </View>

      {/* Horizontal Filter Chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipsScrollContent}
        style={styles.chipsScrollView}
      >
        {FILTER_CHIPS.map((chip) => (
          <Ux4gChoiceChip
            key={chip.id}
            text={chip.label}
            selected={selectedChip === chip.id}
            onClick={() => setSelectedChip(chip.id)}
            style={styles.chipItem}
          />
        ))}
      </ScrollView>

      {/* Results List */}
      <ScrollView style={styles.resultsList} contentContainerStyle={styles.resultsListContent}>
        {RESULTS_DATA.map((item) => (
          <View
            key={item.id}
            style={[
              styles.resultCard,
              {
                backgroundColor: colors.cardBg,
                borderBottomColor: colors.cardBorder,
              },
            ]}
          >
            <View style={styles.cardInfo}>
              <Text style={[styles.cardTitle, { color: colors.titleColor }]}>
                {item.title}
              </Text>
              <View style={styles.badgeRow}>
                <View style={[styles.badge, { backgroundColor: colors.badgeBg }]}>
                  <Text style={[styles.badgeText, { color: colors.badgeText }]}>
                    {item.isPaid ? 'Paid' : 'Free'}
                  </Text>
                </View>
                {item.isPaid && (
                  <Text style={[styles.feeText, { color: colors.subtleText }]}>
                    {item.fee}
                  </Text>
                )}
                <Ux4gIcons
                  name="schedule"
                  size={12}
                  color={colors.subtleText}
                  style={styles.clockIcon}
                />
                <Text style={[styles.timeText, { color: colors.subtleText }]}>
                  {item.time}
                </Text>
              </View>
            </View>

            <Ux4gButton
              text="Apply"
              variant="outline"
              size="small"
              borderColor={colors.btnBorder}
              contentColor={colors.btnText}
              onPressed={() => {}}
            />
            <Ux4gIcons
              name="keyboard_arrow_down"
              size={20}
              color={colors.subtleText}
              style={styles.arrowDownIcon}
            />
          </View>
        ))}
      </ScrollView>

      {/* Pagination Bar */}
      <View style={styles.paginationContainer}>
        <TouchableOpacity
          onPress={() => setCurrentPage((p) => Math.max(0, p - 1))}
          style={[styles.paginationNavBtn, { backgroundColor: colors.paginationArrowBg }]}
        >
          <Ux4gIcons name="chevron_left" size={19} color={colors.paginationArrowColor} />
        </TouchableOpacity>

        <View style={[styles.paginationActivePill, { backgroundColor: colors.paginationActiveBg }]} />

        {[...Array(7)].map((_, i) => (
          <View
            key={i}
            style={[styles.paginationDot, { backgroundColor: colors.paginationDotBg }]}
          />
        ))}

        <TouchableOpacity
          onPress={() => setCurrentPage((p) => Math.min(7, p + 1))}
          style={[styles.paginationNavBtn, { backgroundColor: colors.paginationArrowBg }]}
        >
          <Ux4gIcons name="chevron_right" size={19} color={colors.paginationArrowColor} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 20,
  },
  resultsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  resultsCountText: {
    fontSize: 16,
    fontWeight: '600',
  },
  filterBtn: {
    width: 100,
    height: 38,
  },
  chipsScrollView: {
    marginTop: 10,
    maxHeight: 44,
  },
  chipsScrollContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  chipItem: {
    marginRight: 8,
  },
  resultsList: {
    flex: 1,
    marginTop: 15,
  },
  resultsListContent: {
    paddingHorizontal: 16,
  },
  resultCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 11,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 20,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  badge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
  },
  feeText: {
    fontSize: 11,
    marginLeft: 4,
  },
  clockIcon: {
    marginLeft: 6,
  },
  timeText: {
    fontSize: 11,
    marginLeft: 3,
  },
  arrowDownIcon: {
    marginLeft: 4,
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 7,
  },
  paginationNavBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationActivePill: {
    width: 31,
    height: 10,
    borderRadius: 99,
  },
  paginationDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    marginHorizontal: 3,
  },
});
`;
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 20px 48px' }}>
      {/* Title & Description */}
      <div style={{ marginBottom: '24px' }}>
        <h1
          style={{
            fontSize: '28px',
            fontWeight: 700,
            color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
            margin: '0 0 8px',
          }}
        >
          Search Results List
        </h1>
        <p
          style={{
            fontSize: '15px',
            color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral600,
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          Search results pattern with filter chips, result count, and paginated service cards with Apply actions.
        </p>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          borderBottom: `1px solid ${colors.border}`,
          marginBottom: '24px',
        }}
      >
        <button
          onClick={() => setActiveMainTab('preview')}
          style={{
            padding: '10px 18px',
            border: 'none',
            borderBottom:
              activeMainTab === 'preview'
                ? `2px solid ${isDark ? UX4GColors.primary300 : UX4GColors.primary600}`
                : '2px solid transparent',
            background: 'none',
            fontSize: '14px',
            fontWeight: activeMainTab === 'preview' ? 600 : 500,
            color:
              activeMainTab === 'preview'
                ? isDark
                  ? UX4GColors.primary300
                  : UX4GColors.primary600
                : isDark
                ? UX4GColors.neutral400
                : UX4GColors.neutral600,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          Preview
        </button>
        <button
          onClick={() => setActiveMainTab('code')}
          style={{
            padding: '10px 18px',
            border: 'none',
            borderBottom:
              activeMainTab === 'code'
                ? `2px solid ${isDark ? UX4GColors.primary300 : UX4GColors.primary600}`
                : '2px solid transparent',
            background: 'none',
            fontSize: '14px',
            fontWeight: activeMainTab === 'code' ? 600 : 500,
            color:
              activeMainTab === 'code'
                ? isDark
                  ? UX4GColors.primary300
                  : UX4GColors.primary600
                : isDark
                ? UX4GColors.neutral400
                : UX4GColors.neutral600,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          React Native Code
        </button>
      </div>

      {/* Tab Content */}
      {activeMainTab === 'preview' ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {/* Mobile Phone Mockup */}
          <div
            style={{
              width: '390px',
              minHeight: '740px',
              backgroundColor: colors.screenBg,
              borderRadius: '28px',
              border: `1px solid ${colors.phoneBorder}`,
              boxShadow: isDark
                ? '0 12px 40px rgba(0,0,0,0.5)'
                : '0 12px 40px rgba(0,0,0,0.08)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            {/* Phone Status Bar */}
            <div
              style={{
                height: '24px',
                backgroundColor: colors.headerBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 16px',
                color: '#FFFFFF',
                fontSize: '11px',
                fontWeight: 600,
              }}
            >
              <span>9:41</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>
                  signal_cellular_4_bar
                </span>
                <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>
                  wifi
                </span>
                <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>
                  battery_full
                </span>
              </div>
            </div>

            {/* App Header */}
            <div
              style={{
                width: '100%',
                height: '60px',
                padding: '0 16px 0 20px',
                backgroundColor: colors.headerBg,
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                boxSizing: 'border-box',
              }}
            >
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  arrow_back
                </span>
              </button>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                  src="/national_emblem.png"
                  alt="National Emblem"
                  style={{
                    height: '24px',
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)',
                  }}
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span
                  style={{
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: 600,
                    letterSpacing: '-0.2px',
                  }}
                >
                  National Services Portal
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto',
              }}
            >
              {/* Search Bar Container */}
              <div
                style={{
                  padding: '12px 16px',
                  backgroundColor: colors.searchBarBg,
                  marginTop: '16px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: colors.inputBg,
                    border: `1.5px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.neutral300}`,
                    borderRadius: '8px',
                    overflow: 'hidden',
                    height: '46px',
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: '20px',
                      color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
                      marginLeft: '12px',
                    }}
                  >
                    search
                  </span>
                  <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                      setShowDropdown(true);
                    }}
                    onFocus={() => setShowDropdown(true)}
                    placeholder="Search services..."
                    style={{
                      flex: 1,
                      border: 'none',
                      outline: 'none',
                      padding: '0 8px',
                      fontSize: '14px',
                      color: colors.titleColor,
                      backgroundColor: 'transparent',
                    }}
                  />
                  {searchValue && (
                    <button
                      onClick={() => setSearchValue('')}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                        close
                      </span>
                    </button>
                  )}
                  <button
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '4px 6px',
                      display: 'flex',
                      alignItems: 'center',
                      color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '19px' }}>
                      mic
                    </span>
                  </button>
                  <button
                    onClick={() => setShowDropdown(false)}
                    style={{
                      backgroundColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
                      border: 'none',
                      height: '100%',
                      padding: '0 14px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isDark ? UX4GColors.primary950 : '#FFFFFF',
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                      search
                    </span>
                  </button>
                </div>

                {/* Autocomplete Dropdown */}
                {showDropdown && filteredOptions.length > 0 && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '64px',
                      left: '16px',
                      right: '16px',
                      backgroundColor: colors.cardBg,
                      border: `1px solid ${colors.border}`,
                      borderRadius: '8px',
                      boxShadow: colors.suggestionShadow,
                      zIndex: 20,
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        padding: '8px 12px',
                        fontSize: '11px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
                        backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
                        borderBottom: `1px solid ${colors.border}`,
                      }}
                    >
                      Suggestions
                    </div>
                    {filteredOptions.map((option, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setSearchValue(option);
                          setShowDropdown(false);
                        }}
                        style={{
                          padding: '10px 12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer',
                          fontSize: '13px',
                          color: colors.titleColor,
                          borderBottom:
                            index < filteredOptions.length - 1
                              ? `1px solid ${colors.border}`
                              : 'none',
                          transition: 'background-color 0.15s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = colors.hoverBg;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{
                            fontSize: '16px',
                            color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
                          }}
                        >
                          search
                        </span>
                        <span>{option}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Results Count + Filters */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '4px 16px',
                  boxSizing: 'border-box',
                }}
              >
                <span
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: colors.titleColor,
                  }}
                >
                  48 results
                </span>
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    padding: '0 14px',
                    height: '36px',
                    width: '100px',
                    backgroundColor: 'transparent',
                    border: `1px solid ${colors.btnBorder}`,
                    borderRadius: '6px',
                    color: colors.btnText,
                    fontSize: '13px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.hoverBg;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                    tune
                  </span>
                  Filters
                </button>
              </div>

              {/* Filter Choice Chips (Horizontal Scrollable) */}
              <div
                style={{
                  marginTop: '10px',
                  padding: '0 16px',
                  display: 'flex',
                  gap: '8px',
                  overflowX: 'auto',
                  scrollbarWidth: 'none',
                  boxSizing: 'border-box',
                }}
              >
                {FILTER_CHIPS.map((chip) => {
                  const isSelected = selectedChip === chip.id;
                  return (
                    <button
                      key={chip.id}
                      onClick={() => setSelectedChip(chip.id)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '20px',
                        border: isSelected
                          ? 'none'
                          : `1px solid ${colors.chipUnselectedBorder}`,
                        backgroundColor: isSelected
                          ? colors.chipSelectedBg
                          : colors.chipUnselectedBg,
                        color: isSelected
                          ? colors.chipSelectedText
                          : colors.chipUnselectedText,
                        fontSize: '13px',
                        fontWeight: isSelected ? 600 : 500,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.15s ease',
                        flexShrink: 0,
                      }}
                    >
                      {chip.label}
                    </button>
                  );
                })}
              </div>

              {/* Results List */}
              <div
                style={{
                  marginTop: '14px',
                  padding: '0 16px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0',
                }}
              >
                {filteredResults.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '12px 12px',
                      backgroundColor: colors.cardBg,
                      borderBottom: `1px solid ${colors.cardBorder}`,
                      marginBottom: '10px',
                      borderRadius: '4px',
                    }}
                  >
                    {/* Info */}
                    <div style={{ flex: 1, minWidth: 0, paddingRight: '8px' }}>
                      <div
                        style={{
                          fontSize: '14px',
                          fontWeight: 600,
                          color: colors.titleColor,
                          lineHeight: '1.35',
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          marginTop: '6px',
                        }}
                      >
                        {/* Free / Paid tag */}
                        <span
                          style={{
                            display: 'inline-block',
                            padding: '2px 6px',
                            backgroundColor: colors.badgeBg,
                            borderRadius: '4px',
                            fontSize: '11px',
                            fontWeight: 600,
                            color: colors.badgeText,
                          }}
                        >
                          {item.isPaid ? 'Paid' : 'Free'}
                        </span>
                        {item.isPaid && (
                          <span
                            style={{
                              fontSize: '11px',
                              color: colors.subtleText,
                            }}
                          >
                            {item.fee}
                          </span>
                        )}
                        <span
                          className="material-symbols-outlined"
                          style={{
                            fontSize: '13px',
                            color: colors.subtleText,
                            marginLeft: '2px',
                          }}
                        >
                          schedule
                        </span>
                        <span
                          style={{
                            fontSize: '11px',
                            color: colors.subtleText,
                          }}
                        >
                          {item.time}
                        </span>
                      </div>
                    </div>

                    {/* Action */}
                    <button
                      style={{
                        padding: '5px 14px',
                        backgroundColor: 'transparent',
                        border: `1px solid ${colors.btnBorder}`,
                        borderRadius: '6px',
                        color: colors.btnText,
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = colors.hoverBg;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      Apply
                    </button>
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: '20px',
                        color: colors.subtleText,
                        marginLeft: '4px',
                        cursor: 'pointer',
                      }}
                    >
                      keyboard_arrow_down
                    </span>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 0 24px',
                  gap: '7px',
                }}
              >
                {/* Chevron Left */}
                <button
                  onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: colors.paginationArrowBg,
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: colors.paginationArrowColor,
                    transition: 'opacity 0.15s ease',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '19px' }}>
                    chevron_left
                  </span>
                </button>

                {/* Active Pill Indicator */}
                <div
                  style={{
                    width: '31px',
                    height: '10px',
                    backgroundColor: colors.paginationActiveBg,
                    borderRadius: '99px',
                    margin: '0 4px',
                  }}
                />

                {/* Dots */}
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: '9px',
                      height: '9px',
                      borderRadius: '50%',
                      backgroundColor: colors.paginationDotBg,
                      margin: '0 3px',
                    }}
                  />
                ))}

                {/* Chevron Right */}
                <button
                  onClick={() => setCurrentPage((p) => Math.min(7, p + 1))}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: colors.paginationArrowBg,
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: colors.paginationArrowColor,
                    transition: 'opacity 0.15s ease',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '19px' }}>
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ width: '100%' }}>
          <CodeBlock code={codeString} language="typescript" />
        </div>
      )}
    </div>
  );
};
