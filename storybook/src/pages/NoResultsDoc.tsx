import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gEmptyState } from '../../../src/components/empty-state/EmptyState';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface NoResultsDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

interface PopularCardItem {
  id: string;
  title: string;
  dept: string;
  fee: string;
  time: string;
}

const POPULAR_SERVICES: PopularCardItem[] = [
  {
    id: '1',
    title: 'Income Certificate',
    dept: 'Revenue Department',
    fee: 'Free',
    time: '20 mins',
  },
  {
    id: '2',
    title: 'Ration Card',
    dept: 'Food & Civil Supplies',
    fee: 'Free',
    time: '10 days',
  },
];

const SUGGESTIONS = [
  'Income Certificate',
  'Income & Asset Certificate',
];

export const NoResultsDoc: React.FC<NoResultsDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [searchValue, setSearchValue] = useState<string>('xyz123');

  const colors = useMemo(() => {
    return {
      screenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
      headerBg: UX4GColors.primary600,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral100,
      cardBorder: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      inputBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      searchBarBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral0,
      iconColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      suggestionColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      browseBtnBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
      browseBtnText: isDark ? UX4GColors.primary200 : UX4GColors.primary700,
      applyBorder: isDark ? UX4GColors.neutral600 : UX4GColors.primary300,
      applyText: isDark ? UX4GColors.neutral50 : UX4GColors.primary600,
      feeColor: isDark ? UX4GColors.green300 : UX4GColors.green600,
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
  Ux4gEmptyState,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';

interface PopularCardItem {
  id: string;
  title: string;
  dept: string;
  fee: string;
  time: string;
}

const POPULAR_SERVICES: PopularCardItem[] = [
  {
    id: '1',
    title: 'Income Certificate',
    dept: 'Revenue Department',
    fee: 'Free',
    time: '20 mins',
  },
  {
    id: '2',
    title: 'Ration Card',
    dept: 'Food & Civil Supplies',
    fee: 'Free',
    time: '10 days',
  },
];

const SUGGESTIONS = [
  'Income Certificate',
  'Income & Asset Certificate',
];

export const NoResultsScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const [searchValue, setSearchValue] = useState('xyz123');

  const colors = {
    screenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
    searchBarBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral0,
    titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
    subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
    cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral100,
    cardBorder: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
    iconColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
    suggestionColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
    browseBtnBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
    browseBtnText: isDark ? UX4GColors.primary200 : UX4GColors.primary700,
    applyBorder: isDark ? UX4GColors.neutral600 : UX4GColors.primary300,
    applyText: isDark ? UX4GColors.neutral50 : UX4GColors.primary600,
    feeColor: isDark ? UX4GColors.green300 : UX4GColors.green600,
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.screenBg }]}>
      {/* App Header */}
      <Ux4gAppHeader
        variant="filled"
        title="National Services Portal"
        showBackButton={true}
        onBackPressed={() => {}}
      actions={[
        {
          customWidget: (
            <TouchableOpacity
              key="menu"
              style={styles.menuBtn}
              onPress={() => {}}
            >
              <Text style={styles.menuIcon}>☰</Text>
            </TouchableOpacity>
          ),
        },
      ]}
      />

      {/* Search Bar */}
      <View style={[styles.searchContainer, { backgroundColor: colors.searchBarBg }]}>
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

      {/* No Results Content */}
      <ScrollView
        style={styles.contentScrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <Ux4gEmptyState
          variant="noResults"
          title={'No services found for "' + searchValue + '"'}
          subtitle="Did you mean: Income Certificate, Income & Asset Certificate"
          buttonText="Browse all services"
          onButtonPressed={() => setSearchValue('')}
          padding={16}
        />

        {/* Popular Services Section */}
        <View style={styles.popularSection}>
          <Text style={[styles.popularHeading, { color: colors.titleColor }]}>
            Popular services
          </Text>

          {POPULAR_SERVICES.map((item) => (
            <View
              key={item.id}
              style={[
                styles.popularCard,
                {
                  backgroundColor: colors.cardBg,
                  borderColor: colors.cardBorder,
                },
              ]}
            >
              <Text style={[styles.cardTitle, { color: colors.titleColor }]}>
                {item.title}
              </Text>
              <Text style={[styles.cardDept, { color: colors.subtleText }]}>
                {item.dept}
              </Text>

              <View style={styles.cardMetaRow}>
                <Text style={[styles.cardFee, { color: colors.feeColor }]}>
                  {item.fee}
                </Text>
                <Text style={[styles.cardTime, { color: colors.subtleText }]}>
                  {\`  ·  \${item.time}\`}
                </Text>
              </View>

              <Ux4gButton
                text="Apply"
                variant="outline"
                size="small"
                style={styles.applyButton}
                borderColor={colors.applyBorder}
                contentColor={colors.applyText}
                onPressed={() => {}}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: UX4GColors.primary200,
    backgroundColor: UX4GColors.neutral0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 18,
    color: UX4GColors.primary,
  },
  container: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 20,
  },
  contentScrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  emptyStateSection: {
    alignItems: 'center',
    paddingTop: 24,
  },
  searchIcon: {
    marginBottom: 16,
  },
  noResultsTitle: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
  },
  didYouMeanText: {
    fontSize: 14,
    marginBottom: 4,
  },
  suggestionsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  suggestionText: {
    fontSize: 14,
    fontWeight: '500',
  },
  browseButton: {
    width: 180,
    height: 44,
    borderRadius: 8,
  },
  popularSection: {
    marginTop: 48,
  },
  popularHeading: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  popularCard: {
    width: '100%',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 2,
  },
  cardDept: {
    fontSize: 13,
    marginBottom: 12,
  },
  cardMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardFee: {
    fontSize: 13,
    fontWeight: '600',
  },
  cardTime: {
    fontSize: 13,
  },
  applyButton: {
    width: 80,
    height: 38,
  },
});
`;
  }, []);

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">No Results</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Empty state pattern when search returns no results. Shows suggestions, a browse all link, and popular services to help users continue.
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
                <Ux4gThemeProvider isDark={isDark}>
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
                  padding: '10px 16px',
                  backgroundColor: colors.searchBarBg,
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: colors.inputBg,
                    border: `1px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.neutral300}`,
                    borderRadius: '8px',
                    overflow: 'hidden',
                    height: '38px',
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: '18px',
                      color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
                      marginLeft: '10px',
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
                      fontSize: '13px',
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
                        padding: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                        close
                      </span>
                    </button>
                  )}
                  <button
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '2px 6px',
                      display: 'flex',
                      alignItems: 'center',
                      color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                      mic
                    </span>
                  </button>
                  <button
                    style={{
                      backgroundColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
                      border: 'none',
                      height: '100%',
                      padding: '0 12px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isDark ? UX4GColors.primary950 : '#FFFFFF',
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '17px' }}>
                      search
                    </span>
                  </button>
                </div>
              </div>

              {/* No Results Empty State Content */}
              <div
                style={{
                  flex: 1,
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Ux4gEmptyState Component */}
                <Ux4gEmptyState
                  variant="noResults"
                  icon={
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: '52px',
                        color: colors.iconColor,
                        display: 'inline-block',
                      }}
                    >
                      search
                    </span>
                  }
                  title={`No services found for "${searchValue}"`}
                  subtitle="Did you mean: Income Certificate, Income & Asset Certificate"
                  buttonText="Browse all services"
                  onButtonPressed={() => setSearchValue('')}
                  padding={16}
                />

                {/* Popular Services Section */}
                <div style={{ marginTop: '44px', paddingBottom: '24px' }}>
                  <div
                    style={{
                      fontSize: '17px',
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
                        width: '100%',
                        padding: '14px',
                        backgroundColor: colors.cardBg,
                        border: `1px solid ${colors.cardBorder}`,
                        borderRadius: '12px',
                        marginBottom: '12px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '15px',
                          fontWeight: 700,
                          color: colors.titleColor,
                          marginBottom: '2px',
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontSize: '13px',
                          color: colors.subtleText,
                          marginBottom: '10px',
                        }}
                      >
                        {item.dept}
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          marginBottom: '12px',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '13px',
                            fontWeight: 600,
                            color: colors.feeColor,
                          }}
                        >
                          {item.fee}
                        </span>
                        <span
                          style={{
                            fontSize: '13px',
                            color: colors.subtleText,
                          }}
                        >
                          · {item.time}
                        </span>
                      </div>

                      <button
                        style={{
                          width: '80px',
                          height: '36px',
                          backgroundColor: 'transparent',
                          border: `1px solid ${colors.applyBorder}`,
                          borderRadius: '6px',
                          color: colors.applyText,
                          fontSize: '13px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
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
                    </div>
                  ))}
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
