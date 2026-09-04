import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';

interface GlobalServiceDiscoveryDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

interface CategoryItem {
  icon: string;
  label: string;
  count: string;
}

interface ServiceCardItem {
  id: string;
  title: string;
  dept: string;
  fee: string;
  meta: string;
}

const CATEGORIES: CategoryItem[] = [
  { icon: 'health_and_safety', label: 'Health', count: '24 services' },
  { icon: 'school', label: 'Education', count: '31 services' },
  { icon: 'agriculture', label: 'Agriculture', count: '18 services' },
  { icon: 'landscape', label: 'Land Records', count: '12 services' },
  { icon: 'directions_bus', label: 'Transport', count: '15 services' },
  { icon: 'groups', label: 'Social Welfare', count: '27 services' },
  { icon: 'bolt', label: 'Utilities', count: '9 services' },
  { icon: 'account_balance', label: 'Finance', count: '21 services' },
];

const POPULAR_SERVICES: ServiceCardItem[] = [
  {
    id: '1',
    title: 'Income Certificate',
    dept: 'Revenue Department',
    fee: 'Free',
    meta: '20 mins',
  },
  {
    id: '2',
    title: 'Caste Certificate',
    dept: 'Social Welfare Dept',
    fee: 'Free',
    meta: '15 mins',
  },
  {
    id: '3',
    title: 'Driving Licence',
    dept: 'Transport Department',
    fee: '₹200',
    meta: '30 days',
  },
];

const RECOMMENDED_SERVICES: ServiceCardItem[] = [
  {
    id: '1',
    title: 'PM Kisan Samman Nidhi',
    dept: 'Agriculture Department',
    fee: 'Free',
    meta: '₹6,000/yr',
  },
  {
    id: '2',
    title: 'Ayushman Bharat (PM-JAY)',
    dept: 'Health & Family Welfare',
    fee: 'Free',
    meta: '₹5L cover',
  },
  {
    id: '3',
    title: 'National Pension Scheme',
    dept: 'Finance Ministry',
    fee: 'Free',
    meta: 'Tax benefit',
  },
];

export const GlobalServiceDiscoveryDoc: React.FC<GlobalServiceDiscoveryDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [searchValue, setSearchValue] = useState<string>('');

  const colors = useMemo(() => {
    return {
      screenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
      headerBg: UX4GColors.primary600,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral100,
      categoryCardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      inputBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      searchBarBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral0,
      featuredCardBg: isDark ? UX4GColors.primary950 : UX4GColors.primary50,
      featuredCardBorder: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
      featuredTagColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      primaryBtnBg: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      primaryBtnText: isDark ? UX4GColors.primary950 : '#FFFFFF',
      iconCircleBg: isDark ? UX4GColors.primary950 : UX4GColors.primary50,
      iconColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      feeColor: isDark ? UX4GColors.green300 : UX4GColors.green600,
      applyBorder: isDark ? UX4GColors.neutral600 : UX4GColors.primary300,
      applyText: isDark ? UX4GColors.neutral50 : UX4GColors.primary600,
      quizCardBg: isDark ? UX4GColors.primary950 : UX4GColors.primary50,
      quizCardBorder: isDark ? UX4GColors.primary600 : UX4GColors.primary300,
      quizBtnBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
      quizBtnText: isDark ? UX4GColors.primary200 : UX4GColors.primary700,
      phoneBorder: isDark ? UX4GColors.neutral800 : '#E5E7EB',
      hoverBg: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
    };
  }, [isDark]);

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

const CATEGORIES = [
  { icon: 'health_and_safety', label: 'Health', count: '24 services' },
  { icon: 'school', label: 'Education', count: '31 services' },
  { icon: 'agriculture', label: 'Agriculture', count: '18 services' },
  { icon: 'landscape', label: 'Land Records', count: '12 services' },
  { icon: 'directions_bus', label: 'Transport', count: '15 services' },
  { icon: 'groups', label: 'Social Welfare', count: '27 services' },
  { icon: 'bolt', label: 'Utilities', count: '9 services' },
  { icon: 'account_balance', label: 'Finance', count: '21 services' },
];

const POPULAR_SERVICES = [
  { id: '1', title: 'Income Certificate', dept: 'Revenue Department', fee: 'Free', meta: '20 mins' },
  { id: '2', title: 'Caste Certificate', dept: 'Social Welfare Dept', fee: 'Free', meta: '15 mins' },
  { id: '3', title: 'Driving Licence', dept: 'Transport Department', fee: '₹200', meta: '30 days' },
];

const RECOMMENDED_SERVICES = [
  { id: '1', title: 'PM Kisan Samman Nidhi', dept: 'Agriculture Department', fee: 'Free', meta: '₹6,000/yr' },
  { id: '2', title: 'Ayushman Bharat (PM-JAY)', dept: 'Health & Family Welfare', fee: 'Free', meta: '₹5L cover' },
  { id: '3', title: 'National Pension Scheme', dept: 'Finance Ministry', fee: 'Free', meta: 'Tax benefit' },
];

export const GlobalServiceDiscoveryScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const [searchValue, setSearchValue] = useState('');

  const colors = {
    screenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
    searchBarBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral0,
    titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
    subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
    cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral100,
    categoryCardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
    border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
    featuredCardBg: isDark ? UX4GColors.primary950 : UX4GColors.primary50,
    featuredCardBorder: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
    featuredTagColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
    primaryBtnBg: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
    primaryBtnText: isDark ? UX4GColors.primary950 : '#FFFFFF',
    iconCircleBg: isDark ? UX4GColors.primary950 : UX4GColors.primary50,
    iconColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
    feeColor: isDark ? UX4GColors.green300 : UX4GColors.green600,
    applyBorder: isDark ? UX4GColors.neutral600 : UX4GColors.primary300,
    applyText: isDark ? UX4GColors.neutral50 : UX4GColors.primary600,
    quizCardBg: isDark ? UX4GColors.primary950 : UX4GColors.primary50,
    quizCardBorder: isDark ? UX4GColors.primary600 : UX4GColors.primary300,
    quizBtnBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
    quizBtnText: isDark ? UX4GColors.primary200 : UX4GColors.primary700,
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.screenBg }]}>
      {/* App Header */}
      <Ux4gAppHeader
        variant="filled"
        title="National Services Portal"
        showBackButton={true}
        onBackPressed={() => {}}
      />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Search Hero Area */}
        <View style={[styles.searchArea, { backgroundColor: colors.searchBarBg }]}>
          <Text style={[styles.heroTitle, { color: colors.titleColor }]}>
            Find any government service
          </Text>
          <Text style={[styles.heroSubtitle, { color: colors.subtleText }]}>
            Search 3,000+ services & schemes
          </Text>
          <View style={styles.searchFieldWrapper}>
            <Ux4gSearchField
              value={searchValue}
              onValueChange={setSearchValue}
              variant="searchWithSubmit"
              size="medium"
              placeholder="Search services..."
              showVoiceIcon={true}
              showClearIcon={true}
              buttonStyle="filled"
              onSubmitClick={() => {}}
            />
          </View>
        </View>

        {/* Browse by category */}
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionHeading, { color: colors.titleColor }]}>
            Browse by category
          </Text>
          <View style={styles.categoryGrid}>
            {CATEGORIES.map((cat, idx) => (
              <TouchableOpacity
                key={idx}
                style={[
                  styles.categoryCard,
                  {
                    backgroundColor: colors.categoryCardBg,
                    borderColor: colors.border,
                  },
                ]}
                activeOpacity={0.7}
              >
                <View style={[styles.iconCircle, { backgroundColor: colors.iconCircleBg }]}>
                  <Ux4gIcons name={cat.icon} size={20} color={colors.iconColor} />
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
        </View>

        {/* Featured Scheme */}
        <View style={styles.featuredWrapper}>
          <View
            style={[
              styles.featuredCard,
              {
                backgroundColor: colors.featuredCardBg,
                borderColor: colors.featuredCardBorder,
              },
            ]}
          >
            <Text style={[styles.featuredTag, { color: colors.featuredTagColor }]}>
              FEATURED SCHEME
            </Text>
            <Text style={[styles.featuredTitle, { color: colors.titleColor }]}>
              PM Awas Yojana (Urban)
            </Text>
            <Text style={[styles.featuredDesc, { color: colors.subtleText }]}>
              Subsidised housing loans — Interest subsidy up to ₹2.67 lakh.
            </Text>
            <Ux4gButton
              text="Check eligibility"
              variant="primary"
              size="medium"
              style={[styles.fullWidthBtn, { backgroundColor: colors.primaryBtnBg }]}
              contentColor={colors.primaryBtnText}
              onPressed={() => {}}
            />
          </View>
        </View>

        {/* Popular Services */}
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionHeading, { color: colors.titleColor }]}>
            Popular services
          </Text>
          {POPULAR_SERVICES.map((item) => (
            <View
              key={item.id}
              style={[
                styles.serviceCard,
                {
                  backgroundColor: colors.cardBg,
                  borderColor: colors.border,
                },
              ]}
            >
              <Text style={[styles.serviceTitle, { color: colors.titleColor }]}>
                {item.title}
              </Text>
              <Text style={[styles.serviceDept, { color: colors.subtleText }]}>
                {item.dept}
              </Text>
              <View style={styles.serviceMetaRow}>
                <Text style={[styles.serviceFee, { color: colors.feeColor }]}>
                  {item.fee}
                </Text>
                <Text style={[styles.serviceMetaText, { color: colors.subtleText }]}>
                  {\`  ·  \${item.meta}\`}
                </Text>
              </View>
              <Ux4gButton
                text="Apply"
                variant="outline"
                size="small"
                style={styles.applyBtn}
                borderColor={colors.applyBorder}
                contentColor={colors.applyText}
                onPressed={() => {}}
              />
            </View>
          ))}
        </View>

        {/* Recommended for User */}
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionHeading, { color: colors.titleColor }]}>
            Recommended for Ramesh Kumar
          </Text>
          {RECOMMENDED_SERVICES.map((item) => (
            <View
              key={item.id}
              style={[
                styles.serviceCard,
                {
                  backgroundColor: colors.cardBg,
                  borderColor: colors.border,
                },
              ]}
            >
              <Text style={[styles.serviceTitle, { color: colors.titleColor }]}>
                {item.title}
              </Text>
              <Text style={[styles.serviceDept, { color: colors.subtleText }]}>
                {item.dept}
              </Text>
              <View style={styles.serviceMetaRow}>
                <Text style={[styles.serviceFee, { color: colors.feeColor }]}>
                  {item.fee}
                </Text>
                <Text style={[styles.serviceMetaText, { color: colors.subtleText }]}>
                  {\`  ·  \${item.meta}\`}
                </Text>
              </View>
              <Ux4gButton
                text="Apply"
                variant="outline"
                size="small"
                style={styles.applyBtn}
                borderColor={colors.applyBorder}
                contentColor={colors.applyText}
                onPressed={() => {}}
              />
            </View>
          ))}
        </View>

        {/* Eligibility Quiz CTA */}
        <View style={styles.quizWrapper}>
          <View
            style={[
              styles.quizCard,
              {
                backgroundColor: colors.quizCardBg,
                borderColor: colors.quizCardBorder,
              },
            ]}
          >
            <Text style={[styles.quizTitle, { color: colors.titleColor }]}>
              Not sure what you're eligible for?
            </Text>
            <Text style={[styles.quizDesc, { color: colors.subtleText }]}>
              Take a 2-minute quiz to find schemes you qualify for.
            </Text>
            <Ux4gButton
              text="Find my schemes"
              variant="secondary"
              size="medium"
              style={[styles.quizBtn, { backgroundColor: colors.quizBtnBg }]}
              contentColor={colors.quizBtnText}
              onPressed={() => {}}
            />
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
  scrollView: {
    flex: 1,
  },
  searchArea: {
    padding: 16,
  },
  heroTitle: {
    fontSize: 18,
    fontWeight: '800',
  },
  heroSubtitle: {
    fontSize: 13,
    marginTop: 4,
  },
  searchFieldWrapper: {
    marginTop: 16,
  },
  sectionContainer: {
    padding: 16,
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryCard: {
    width: '48%',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
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
  featuredWrapper: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  featuredCard: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  featuredTag: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 8,
  },
  featuredTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  featuredDesc: {
    fontSize: 12,
    marginTop: 4,
    marginBottom: 12,
  },
  fullWidthBtn: {
    width: '100%',
  },
  serviceCard: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
  },
  serviceTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  serviceDept: {
    fontSize: 12,
    marginTop: 2,
    marginBottom: 8,
  },
  serviceMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  serviceFee: {
    fontSize: 12,
    fontWeight: '600',
  },
  serviceMetaText: {
    fontSize: 12,
  },
  applyBtn: {
    width: 80,
    height: 36,
  },
  quizWrapper: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  quizCard: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
  },
  quizTitle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  quizDesc: {
    fontSize: 12,
    marginTop: 4,
    marginBottom: 12,
    textAlign: 'center',
  },
  quizBtn: {
    width: 160,
  },
});
`;
  }, []);

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Global Service Discovery</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Full service discovery pattern with search, category grid, featured scheme, popular services, personalized recommendations, and eligibility quiz CTA.
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
                {/* Mobile Phone Mockup */}
                <div
                  style={{
              width: 360,
              height: 760,
              backgroundColor: colors.screenBg,
              borderRadius: 24,
              border: `1px solid ${colors.phoneBorder}`,
              boxShadow: isDark
                ? '0 12px 36px rgba(0, 0, 0, 0.6)'
                : '0 12px 36px rgba(0, 0, 0, 0.1)',
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

            {/* Scrollable Content */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Search Hero Area */}
              <div
                style={{
                  width: '100%',
                  padding: '16px',
                  backgroundColor: colors.searchBarBg,
                  boxSizing: 'border-box',
                }}
              >
                <div
                  style={{
                    fontSize: '18px',
                    fontWeight: 800,
                    color: colors.titleColor,
                  }}
                >
                  Find any government service
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: colors.subtleText,
                    marginTop: '4px',
                  }}
                >
                  Search 3,000+ services & schemes
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: colors.inputBg,
                    border: `1.5px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.neutral300}`,
                    borderRadius: '8px',
                    overflow: 'hidden',
                    height: '46px',
                    marginTop: '16px',
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
                    onChange={(e) => setSearchValue(e.target.value)}
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
              </div>

              {/* Browse by Category */}
              <div style={{ padding: '16px' }}>
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: colors.titleColor,
                    marginBottom: '12px',
                  }}
                >
                  Browse by category
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px',
                  }}
                >
                  {CATEGORIES.map((cat, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '12px',
                        backgroundColor: colors.categoryCardBg,
                        border: `1px solid ${colors.border}`,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'transform 0.15s ease, background-color 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = colors.hoverBg;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = colors.categoryCardBg;
                      }}
                    >
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          backgroundColor: colors.iconCircleBg,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '10px',
                        }}
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: '20px', color: colors.iconColor }}
                        >
                          {cat.icon}
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: colors.titleColor,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {cat.label}
                      </div>
                      <div
                        style={{
                          fontSize: '11px',
                          color: colors.subtleText,
                          marginTop: '2px',
                        }}
                      >
                        {cat.count}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Scheme */}
              <div style={{ padding: '0 16px 8px' }}>
                <div
                  style={{
                    padding: '16px',
                    backgroundColor: colors.featuredCardBg,
                    border: `1px solid ${colors.featuredCardBorder}`,
                    borderRadius: '12px',
                    boxSizing: 'border-box',
                  }}
                >
                  <div
                    style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      color: colors.featuredTagColor,
                      marginBottom: '8px',
                    }}
                  >
                    FEATURED SCHEME
                  </div>
                  <div
                    style={{
                      fontSize: '15px',
                      fontWeight: 700,
                      color: colors.titleColor,
                      marginBottom: '4px',
                    }}
                  >
                    PM Awas Yojana (Urban)
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: colors.subtleText,
                      marginBottom: '12px',
                      lineHeight: '1.4',
                    }}
                  >
                    Subsidised housing loans — Interest subsidy up to ₹2.67 lakh.
                  </div>
                  <button
                    style={{
                      width: '100%',
                      padding: '10px 0',
                      backgroundColor: colors.primaryBtnBg,
                      color: colors.primaryBtnText,
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Check eligibility
                  </button>
                </div>
              </div>

              {/* Popular Services */}
              <div style={{ padding: '16px' }}>
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: colors.titleColor,
                    marginBottom: '12px',
                  }}
                >
                  Popular services
                </div>

                {POPULAR_SERVICES.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      padding: '14px',
                      backgroundColor: colors.cardBg,
                      border: `1px solid ${colors.border}`,
                      borderRadius: '12px',
                      marginBottom: '12px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: colors.titleColor,
                        marginBottom: '2px',
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: '12px',
                        color: colors.subtleText,
                        marginBottom: '8px',
                      }}
                    >
                      {item.dept}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginBottom: '10px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: 600,
                          color: colors.feeColor,
                        }}
                      >
                        {item.fee}
                      </span>
                      <span style={{ fontSize: '12px', color: colors.subtleText }}>
                        · {item.meta}
                      </span>
                    </div>
                    <button
                      style={{
                        padding: '6px 16px',
                        backgroundColor: 'transparent',
                        border: `1px solid ${colors.applyBorder}`,
                        borderRadius: '6px',
                        color: colors.applyText,
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Apply
                    </button>
                  </div>
                ))}
              </div>

              {/* Recommended for User */}
              <div style={{ padding: '0 16px 16px' }}>
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: colors.titleColor,
                    marginBottom: '12px',
                  }}
                >
                  Recommended for Ramesh Kumar
                </div>

                {RECOMMENDED_SERVICES.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      padding: '14px',
                      backgroundColor: colors.cardBg,
                      border: `1px solid ${colors.border}`,
                      borderRadius: '12px',
                      marginBottom: '12px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: colors.titleColor,
                        marginBottom: '2px',
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: '12px',
                        color: colors.subtleText,
                        marginBottom: '8px',
                      }}
                    >
                      {item.dept}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginBottom: '10px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: 600,
                          color: colors.feeColor,
                        }}
                      >
                        {item.fee}
                      </span>
                      <span style={{ fontSize: '12px', color: colors.subtleText }}>
                        · {item.meta}
                      </span>
                    </div>
                    <button
                      style={{
                        padding: '6px 16px',
                        backgroundColor: 'transparent',
                        border: `1px solid ${colors.applyBorder}`,
                        borderRadius: '6px',
                        color: colors.applyText,
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Apply
                    </button>
                  </div>
                ))}
              </div>

              {/* Eligibility Quiz CTA */}
              <div style={{ padding: '0 16px 24px' }}>
                <div
                  style={{
                    padding: '16px',
                    backgroundColor: colors.quizCardBg,
                    border: `1px solid ${colors.quizCardBorder}`,
                    borderRadius: '12px',
                    textAlign: 'center',
                    boxSizing: 'border-box',
                  }}
                >
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: colors.titleColor,
                      marginBottom: '4px',
                    }}
                  >
                    Not sure what you're eligible for?
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: colors.subtleText,
                      marginBottom: '12px',
                    }}
                  >
                    Take a 2-minute quiz to find schemes you qualify for.
                  </div>
                  <button
                    style={{
                      padding: '8px 20px',
                      backgroundColor: colors.quizBtnBg,
                      color: colors.quizBtnText,
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Find my schemes
                  </button>
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
