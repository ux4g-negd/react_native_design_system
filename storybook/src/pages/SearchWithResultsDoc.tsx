import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';

interface SearchWithResultsDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

interface ServiceSuggestion {
  name: string;
  dept: string;
}

const ALL_SERVICES: ServiceSuggestion[] = [
  { name: 'Income Certificate', dept: 'Revenue Dept' },
  { name: 'Income Tax Return Filing', dept: 'Income Tax Dept' },
  { name: 'Low Income Group Certificate', dept: 'Social Welfare' },
  { name: 'Income & Asset Certificate', dept: 'Revenue Dept' },
];

export const SearchWithResultsDoc: React.FC<SearchWithResultsDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [searchValue, setSearchValue] = useState<string>('income');

  const colors = useMemo(() => {
    return {
      screenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
      headerBg: UX4GColors.primary600,
      heroBg: isDark ? UX4GColors.primary950 : UX4GColors.primary50,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      serviceCardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral100,
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      inputBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      iconCircleBg: isDark ? UX4GColors.primary950 : UX4GColors.primary50,
      iconColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      primaryBtnBg: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      primaryBtnText: isDark ? UX4GColors.primary950 : '#FFFFFF',
      feeColor: isDark ? UX4GColors.green300 : UX4GColors.green600,
      applyBorder: isDark ? UX4GColors.neutral600 : UX4GColors.primary300,
      applyText: isDark ? UX4GColors.neutral50 : UX4GColors.primary600,
      phoneBorder: isDark ? UX4GColors.neutral800 : '#E5E7EB',
      suggestionShadow: isDark ? '0 4px 16px rgba(0, 0, 0, 0.4)' : '0 4px 16px rgba(0, 0, 0, 0.08)',
      deptColor: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
      hoverBg: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
    };
  }, [isDark]);

  const categories = useMemo(() => [
    { icon: 'health_and_safety', label: 'Health', count: '24 services' },
    { icon: 'agriculture', label: 'Agriculture', count: '18 services' },
    { icon: 'school', label: 'Education', count: '31 services' },
    { icon: 'landscape', label: 'Land Records', count: '12 services' },
    { icon: 'directions_bus', label: 'Transport', count: '15 services' },
    { icon: 'groups', label: 'Social Welfare', count: '27 services' },
    { icon: 'bolt', label: 'Utilities', count: '9 services' },
    { icon: 'account_balance', label: 'Finance', count: '21 services' },
  ], []);

  const popularServices = useMemo(() => [
    {
      title: 'Income Certificate',
      dept: 'Revenue Department',
      fee: 'Free',
      time: '20 mins',
    },
    {
      title: 'Caste Certificate',
      dept: 'Social Welfare Dept',
      fee: 'Free',
      time: '15 mins',
    },
    {
      title: 'Driving Licence',
      dept: 'Transport Department',
      fee: '₹200',
      time: '30 days',
    },
  ], []);

  const filteredSuggestions = useMemo(() => {
    if (!searchValue.trim()) return [];
    return ALL_SERVICES.filter((item) =>
      item.name.toLowerCase().includes(searchValue.trim().toLowerCase())
    );
  }, [searchValue]);

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
  Ux4gButton,
  Ux4gIcons,
  UX4GColors,
} from 'ux4g-react-native-design-system';

const ALL_SERVICES = [
  { name: 'Income Certificate', dept: 'Revenue Dept' },
  { name: 'Income Tax Return Filing', dept: 'Income Tax Dept' },
  { name: 'Low Income Group Certificate', dept: 'Social Welfare' },
  { name: 'Income & Asset Certificate', dept: 'Revenue Dept' },
];

const CATEGORIES = [
  { icon: 'health_and_safety', label: 'Health', count: '24 services' },
  { icon: 'agriculture', label: 'Agriculture', count: '18 services' },
  { icon: 'school', label: 'Education', count: '31 services' },
  { icon: 'landscape', label: 'Land Records', count: '12 services' },
  { icon: 'directions_bus', label: 'Transport', count: '15 services' },
  { icon: 'groups', label: 'Social Welfare', count: '27 services' },
  { icon: 'bolt', label: 'Utilities', count: '9 services' },
  { icon: 'account_balance', label: 'Finance', count: '21 services' },
];

const POPULAR_SERVICES = [
  {
    title: 'Income Certificate',
    dept: 'Revenue Department',
    fee: 'Free',
    time: '20 mins',
  },
  {
    title: 'Caste Certificate',
    dept: 'Social Welfare Dept',
    fee: 'Free',
    time: '15 mins',
  },
  {
    title: 'Driving Licence',
    dept: 'Transport Department',
    fee: '₹200',
    time: '30 days',
  },
];

export const SearchWithResultsScreen = ({
  isDark = false,
  onBackPressed = () => {},
  onSelectService = (service: string) => {},
  onSelectCategory = (category: string) => {},
  onApply = (serviceName: string) => {},
}: {
  isDark?: boolean;
  onBackPressed?: () => void;
  onSelectService?: (serviceName: string) => void;
  onSelectCategory?: (category: string) => void;
  onApply?: (serviceName: string) => void;
}) => {
  const [searchValue, setSearchValue] = useState('income');

  const colors = {
    screenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
    heroBg: isDark ? UX4GColors.primary950 : UX4GColors.primary50,
    titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
    subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
    cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
    serviceCardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral100,
    border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
    iconCircleBg: isDark ? UX4GColors.primary950 : UX4GColors.primary50,
    iconColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
    feeColor: isDark ? UX4GColors.green300 : UX4GColors.green600,
    applyBorder: isDark ? UX4GColors.neutral600 : UX4GColors.primary300,
    applyText: isDark ? UX4GColors.neutral50 : UX4GColors.primary600,
    deptColor: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
  };

  const matches = ALL_SERVICES.filter((item) =>
    item.name.toLowerCase().includes(searchValue.trim().toLowerCase())
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.screenBg }]}>
      {/* App Header */}
      <Ux4gAppHeader
        variant="filled"
        title="National Services Portal"
        showBackButton
        onBackPressed={onBackPressed}
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Search Hero Area */}
        <View style={[styles.heroSection, { backgroundColor: colors.heroBg }]}>
          <Text style={[styles.heroTitle, { color: colors.titleColor }]}>
            Find any government service
          </Text>
          <Text style={[styles.heroSubtitle, { color: colors.subtleText }]}>
            Search 3,000+ services & schemes
          </Text>

          {/* Autocomplete Search Field */}
          <Ux4gSearchField
            variant="searchWithSubmit"
            buttonStyle="filled"
            placeholder="Search services..."
            value={searchValue}
            onValueChange={setSearchValue}
            showVoiceIcon={true}
            showClearIcon={true}
            options={ALL_SERVICES.map((s) => s.name)}
            onOptionSelected={(opt) => setSearchValue(opt)}
          />

          {/* Autocomplete Suggestion Dropdown Panel */}
          {searchValue.trim().length > 0 && matches.length > 0 && (
            <View style={[styles.suggestionPanel, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
              <Text style={[styles.searchingForText, { color: colors.subtleText }]}>
                Searching for <Text style={{ fontWeight: '600', color: colors.titleColor }}>'{searchValue}'</Text>
              </Text>
              {matches.map((item) => (
                <TouchableOpacity
                  key={item.name}
                  onPress={() => {
                    setSearchValue(item.name);
                    onSelectService(item.name);
                  }}
                  style={styles.suggestionRow}
                >
                  <Ux4gIcons.search size={16} color={colors.subtleText} />
                  <Text style={[styles.suggestionName, { color: colors.titleColor }]} numberOfLines={1}>
                    {item.name}
                  </Text>
                  <Text style={[styles.suggestionDept, { color: colors.deptColor }]}>
                    {item.dept}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Content Section */}
        <View style={styles.bodySection}>
          {/* Browse by category */}
          <Text style={[styles.sectionHeading, { color: colors.titleColor }]}>
            Browse by category
          </Text>

          {/* Category Grid */}
          <View style={styles.gridContainer}>
            {CATEGORIES.map((cat) => (
              <TouchableOpacity
                key={cat.label}
                onPress={() => onSelectCategory(cat.label)}
                style={[
                  styles.categoryCard,
                  {
                    backgroundColor: colors.cardBg,
                    borderColor: colors.border,
                  },
                ]}
              >
                <View style={[styles.iconCircle, { backgroundColor: colors.iconCircleBg }]}>
                  <Ux4gIcons.grid size={20} color={colors.iconColor} />
                </View>
                <Text style={[styles.categoryLabel, { color: colors.titleColor }]} numberOfLines={2}>
                  {cat.label}
                </Text>
                <Text style={[styles.categoryCount, { color: colors.subtleText }]} numberOfLines={1}>
                  {cat.count}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Popular Services Section */}
          <Text style={[styles.sectionHeading, { color: colors.titleColor, marginTop: 24 }]}>
            Popular services
          </Text>
          <View style={styles.servicesList}>
            {POPULAR_SERVICES.map((serv) => (
              <View
                key={serv.title}
                style={[
                  styles.serviceCard,
                  {
                    backgroundColor: colors.serviceCardBg,
                    borderColor: colors.border,
                  },
                ]}
              >
                <Text style={[styles.serviceTitle, { color: colors.titleColor }]}>
                  {serv.title}
                </Text>
                <Text style={[styles.serviceDept, { color: colors.subtleText }]}>
                  {serv.dept}
                </Text>
                <View style={styles.feeTimeRow}>
                  <Text style={[styles.serviceFee, { color: colors.feeColor }]}>
                    {serv.fee}
                  </Text>
                  <Text style={[styles.serviceTime, { color: colors.subtleText }]}>
                    {'  ·  ' + serv.time}
                  </Text>
                </View>
                <Ux4gButton
                  text="Apply"
                  variant="outline"
                  onPress={() => onApply(serv.title)}
                  size="small"
                  style={[styles.applyBtn, { borderColor: colors.applyBorder }]}
                  textStyle={{ color: colors.applyText, fontSize: 13 }}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  heroSection: {
    padding: 16,
    width: '100%',
  },
  heroTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 4,
  },
  heroSubtitle: {
    fontSize: 13,
    marginBottom: 16,
  },
  suggestionPanel: {
    marginTop: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  searchingForText: {
    fontSize: 12,
    marginBottom: 8,
  },
  suggestionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 8,
  },
  suggestionName: {
    flex: 1,
    fontSize: 13,
    fontWeight: '500',
  },
  suggestionDept: {
    fontSize: 12,
  },
  bodySection: {
    padding: 16,
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryCard: {
    width: '48%',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  categoryLabel: {
    fontSize: 13,
    fontWeight: '600',
  },
  categoryCount: {
    fontSize: 11,
    marginTop: 2,
  },
  servicesList: {
    gap: 12,
  },
  serviceCard: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
  },
  serviceTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  serviceDept: {
    fontSize: 12,
    marginTop: 2,
  },
  feeTimeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 10,
  },
  serviceFee: {
    fontSize: 12,
    fontWeight: '600',
  },
  serviceTime: {
    fontSize: 12,
  },
  applyBtn: {
    alignSelf: 'flex-start',
    height: 32,
    borderRadius: 6,
    paddingHorizontal: 16,
  },
});
`;
  }, []);

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Search with Results</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Search pattern with autocomplete suggestions showing matching services as the user types. Uses Ux4gSearchField with autocomplete variant.
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

          {/* Content Area */}
          <div className="wb-content">
            {/* 1. Preview Tab */}
            {activeMainTab === 'preview' && (
              <div
                className={`wb-preview-area ${isDark ? 'dark' : ''}`}
                style={{ flexDirection: 'column', alignItems: 'center' }}
              >
                {/* Phone Frame */}
                <div
                  style={{
                    width: 360,
                    height: 760,
                    borderRadius: 24,
                    border: `1px solid ${colors.phoneBorder}`,
                    backgroundColor: colors.screenBg,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: isDark
                      ? '0 12px 36px rgba(0, 0, 0, 0.6)'
                      : '0 12px 36px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                  }}
                >
                  {/* App Header - Filled Purple */}
                  <div
                    style={{
                      height: 56,
                      backgroundColor: colors.headerBg,
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 16px',
                      flexShrink: 0,
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
                        marginRight: 12,
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                        arrow_back
                      </span>
                    </button>
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: '#FFFFFF',
                      }}
                    >
                      National Services Portal
                    </span>
                  </div>

                  {/* Scrollable Body */}
                  <div
                    style={{
                      flex: 1,
                      overflowY: 'auto',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Purple Hero Search Area */}
                    <div
                      style={{
                        width: '100%',
                        padding: 16,
                        backgroundColor: colors.heroBg,
                        boxSizing: 'border-box',
                      }}
                    >
                      <div
                        style={{
                          fontSize: 18,
                          fontWeight: 800,
                          color: colors.titleColor,
                          marginBottom: 4,
                        }}
                      >
                        Find any government service
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          color: colors.subtleText,
                          marginBottom: 16,
                        }}
                      >
                        Search 3,000+ services & schemes
                      </div>

                      {/* Search Bar Input Row */}
                      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                        <div
                          style={{
                            flex: 1,
                            height: 44,
                            backgroundColor: colors.inputBg,
                            border: `1px solid ${colors.border}`,
                            borderRight: 'none',
                            borderTopLeftRadius: 8,
                            borderBottomLeftRadius: 8,
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0 12px',
                            gap: 8,
                            boxSizing: 'border-box',
                          }}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 20, color: colors.subtleText }}
                          >
                            search
                          </span>
                          <input
                            type="text"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="Search services..."
                            style={{
                              flex: 1,
                              border: 'none',
                              outline: 'none',
                              background: 'transparent',
                              fontSize: 14,
                              color: colors.titleColor,
                              minWidth: 0,
                            }}
                          />
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 20, color: colors.subtleText, cursor: 'pointer' }}
                          >
                            mic
                          </span>
                          {searchValue && (
                            <span
                              className="material-symbols-outlined"
                              onClick={() => setSearchValue('')}
                              style={{ fontSize: 18, color: colors.subtleText, cursor: 'pointer' }}
                            >
                              close
                            </span>
                          )}
                        </div>
                        <button
                          style={{
                            width: 44,
                            height: 44,
                            backgroundColor: colors.primaryBtnBg,
                            color: colors.primaryBtnText,
                            border: 'none',
                            borderTopRightRadius: 8,
                            borderBottomRightRadius: 8,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                          }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                            search
                          </span>
                        </button>
                      </div>

                      {/* Autocomplete Suggestion Dropdown Panel */}
                      {searchValue.trim().length > 0 && filteredSuggestions.length > 0 && (
                        <div
                          style={{
                            marginTop: 6,
                            backgroundColor: colors.cardBg,
                            borderRadius: 8,
                            border: `1px solid ${colors.border}`,
                            boxShadow: colors.suggestionShadow,
                            padding: '12px 14px 8px 14px',
                            display: 'flex',
                            flexDirection: 'column',
                            boxSizing: 'border-box',
                          }}
                        >
                          <div
                            style={{
                              fontSize: 12,
                              color: colors.subtleText,
                              marginBottom: 6,
                            }}
                          >
                            Searching for <strong style={{ color: colors.titleColor }}>&apos;{searchValue}&apos;</strong>
                          </div>

                          {filteredSuggestions.map((item) => (
                            <div
                              key={item.name}
                              onClick={() => setSearchValue(item.name)}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '12px 0',
                                borderBottom: `1px solid ${colors.border}`,
                                cursor: 'pointer',
                                gap: 8,
                              }}
                            >
                              <span
                                className="material-symbols-outlined"
                                style={{ fontSize: 16, color: colors.subtleText }}
                              >
                                search
                              </span>
                              <span
                                style={{
                                  flex: 1,
                                  fontSize: 13,
                                  fontWeight: 500,
                                  color: colors.titleColor,
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'nowrap',
                                }}
                              >
                                {item.name}
                              </span>
                              <span
                                style={{
                                  fontSize: 12,
                                  color: colors.deptColor,
                                  whiteSpace: 'nowrap',
                                }}
                              >
                                {item.dept}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Main Content Area */}
                    <div style={{ padding: 16 }}>
                      {/* Browse by Category */}
                      <div
                        style={{
                          fontSize: 16,
                          fontWeight: 700,
                          color: colors.titleColor,
                          marginBottom: 12,
                        }}
                      >
                        Browse by category
                      </div>

                      {/* 2-Column Grid */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(2, 1fr)',
                          gap: 12,
                        }}
                      >
                        {categories.map((cat) => (
                          <div
                            key={cat.label}
                            style={{
                              backgroundColor: colors.cardBg,
                              borderRadius: 8,
                              border: `1px solid ${colors.border}`,
                              padding: 12,
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              boxSizing: 'border-box',
                            }}
                          >
                            <div
                              style={{
                                width: 36,
                                height: 36,
                                borderRadius: '50%',
                                backgroundColor: colors.iconCircleBg,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: 10,
                              }}
                            >
                              <span
                                className="material-symbols-outlined"
                                style={{ fontSize: 20, color: colors.iconColor }}
                              >
                                {cat.icon}
                              </span>
                            </div>
                            <div
                              style={{
                                fontSize: 13,
                                fontWeight: 600,
                                color: colors.titleColor,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {cat.label}
                            </div>
                            <div
                              style={{
                                fontSize: 11,
                                color: colors.subtleText,
                                marginTop: 2,
                              }}
                            >
                              {cat.count}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Popular Services Section */}
                      <div
                        style={{
                          fontSize: 16,
                          fontWeight: 700,
                          color: colors.titleColor,
                          marginTop: 24,
                          marginBottom: 12,
                        }}
                      >
                        Popular services
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {popularServices.map((serv) => (
                          <div
                            key={serv.title}
                            style={{
                              backgroundColor: colors.serviceCardBg,
                              border: `1px solid ${colors.border}`,
                              borderRadius: 12,
                              padding: '14px 16px',
                              display: 'flex',
                              flexDirection: 'column',
                              boxSizing: 'border-box',
                            }}
                          >
                            <div
                              style={{
                                fontSize: 14,
                                fontWeight: 600,
                                color: colors.titleColor,
                              }}
                            >
                              {serv.title}
                            </div>
                            <div
                              style={{
                                fontSize: 12,
                                color: colors.subtleText,
                                marginTop: 2,
                              }}
                            >
                              {serv.dept}
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: 8,
                                marginBottom: 10,
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 12,
                                  fontWeight: 600,
                                  color: colors.feeColor,
                                }}
                              >
                                {serv.fee}
                              </span>
                              <span
                                style={{
                                  fontSize: 12,
                                  color: colors.subtleText,
                                }}
                              >
                                {'  ·  ' + serv.time}
                              </span>
                            </div>
                            <button
                              style={{
                                alignSelf: 'flex-start',
                                height: 32,
                                padding: '0 16px',
                                borderRadius: 6,
                                backgroundColor: 'transparent',
                                border: `1px solid ${colors.applyBorder}`,
                                color: colors.applyText,
                                fontSize: 13,
                                fontWeight: 600,
                                cursor: 'pointer',
                              }}
                            >
                              Apply
                            </button>
                          </div>
                        ))}
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

export default SearchWithResultsDoc;
