import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface HelpCenterDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

const CATEGORIES = [
  'Application Issues',
  'Documents and Uploads',
  'Payments and Fees',
  'Account and Profile',
  'Technical Issues',
];

export const HelpCenterDoc: React.FC<HelpCenterDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const isCard = variant === 'card';

  const colors = useMemo(() => {
    const titleColor = isDark ? '#FFFFFF' : '#111827';
    const subtleText = isDark ? '#9CA3AF' : '#4B5563';
    const borderColor = isDark ? UX4GColors.neutral700 : '#E5E7EB';
    const scaffoldBg = isDark ? UX4GColors.neutral950 : '#FFFFFF';
    const cardBg = isDark ? '#1A1A1A' : '#FFFFFF';
    const cardBorder = isDark ? UX4GColors.neutral700 : '#E5E7EB';
    const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
    const headerBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
    const headerDividerColor = '#D1D5DB';
    const chevronColor = '#9CA3AF';
    const footerText = isDark ? UX4GColors.neutral400 : '#6B7280';
    const screenBg = isCard
      ? isDark
        ? UX4GColors.primary800
        : UX4GColors.primary100
      : scaffoldBg;

    // Search field styles
    const searchInputBg = isDark ? UX4GColors.neutral800 : '#FFFFFF';
    const searchBorder = isDark ? UX4GColors.neutral700 : '#D1D5DB';
    const searchTextColor = isDark ? '#FFFFFF' : '#111827';
    const searchPlaceholderColor = isDark ? UX4GColors.neutral500 : '#9CA3AF';
    const submitBtnBg = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
    const submitBtnText = isDark ? '#000000' : '#FFFFFF';

    return {
      titleColor,
      subtleText,
      borderColor,
      scaffoldBg,
      cardBg,
      cardBorder,
      primaryColor,
      headerBg,
      headerDividerColor,
      chevronColor,
      footerText,
      screenBg,
      searchInputBg,
      searchBorder,
      searchTextColor,
      searchPlaceholderColor,
      submitBtnBg,
      submitBtnText,
    };
  }, [isDark, isCard]);

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return CATEGORIES;
    return CATEGORIES.filter((cat) =>
      cat.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
  }, [searchQuery]);

  // Clean React Native TSX source code strings matching Flutter implementation
  const defaultCodeString = `import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gDividerOrientation,
  Ux4gSearchField,
  UX4GColors,
} from 'ux4g-react-native-design-system';

const CATEGORIES = [
  'Application Issues',
  'Documents and Uploads',
  'Payments and Fees',
  'Account and Profile',
  'Technical Issues',
];

export const HelpCentreScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const [search, setSearch] = useState('');
  const screenBg = isDark ? UX4GColors.neutral950 : '#FFFFFF';
  const titleColor = isDark ? '#FFFFFF' : '#111827';
  const subtleTextColor = isDark ? '#9CA3AF' : '#4B5563';
  const borderColor = isDark ? UX4GColors.neutral700 : '#E5E7EB';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: screenBg }]}>
      {/* App Header */}
      <Ux4gAppHeader
        elevation={2}
        variant="light"
        title=""
        leadingSpacing={8}
        leadingWidgets={[
          <NationalEmblemLogo key="emblem" isDark={isDark} height={40} />,
          <View key="divider" style={styles.headerDividerWrapper}>
            <Ux4gDivider
              orientation={Ux4gDividerOrientation.vertical}
              color="#D1D5DB"
            />
          </View>,
          <UnionLogo
            key="union"
            size={32}
            color={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
          />,
        ]}
      />

      {/* Content */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={[styles.title, { color: titleColor }]}>Help Centre</Text>
        <Text style={[styles.subtitle, { color: subtleTextColor }]}>
          Find answers to common questions or contact our support team.
        </Text>

        {/* Search Field */}
        <View style={styles.searchWrapper}>
          <Ux4gSearchField
            value={search}
            onValueChange={setSearch}
            placeholder="Search for..."
            variant="searchWithSubmit"
            showVoiceIcon
            buttonStyle="filled"
            onSubmitClick={(val) => console.log('Searching for:', val)}
          />
        </View>

        {/* Categories Section */}
        <Text style={[styles.sectionTitle, { color: titleColor }]}>
          Browse by category
        </Text>

        <View style={styles.categoryList}>
          {CATEGORIES.map((category) => (
            <View key={category}>
              <TouchableOpacity
                style={styles.categoryItem}
                onPress={() => console.log('Selected:', category)}
                activeOpacity={0.7}
              >
                <Text style={[styles.categoryText, { color: titleColor }]}>
                  {category}
                </Text>
                <ChevronRightIcon color="#9CA3AF" size={20} />
              </TouchableOpacity>
              <Ux4gDivider color={borderColor} />
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Powered by Digital India */}
      <View style={styles.footerRow}>
        <Text
          style={[
            styles.footerText,
            { color: isDark ? UX4GColors.neutral400 : '#6B7280' },
          ]}
        >
          Powered by -
        </Text>
        <Image
          source={{ uri: '/digital_india_logo.png' }}
          style={styles.digitalIndiaLogo}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerDividerWrapper: {
    height: 32,
    justifyContent: 'center',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    lineHeight: 20,
  },
  searchWrapper: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },
  categoryList: {
    width: '100%',
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  categoryText: {
    fontSize: 15,
    fontWeight: '500',
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingBottom: 12,
  },
  footerText: {
    fontSize: 11,
  },
  digitalIndiaLogo: {
    height: 20,
    width: 60,
  },
});
`;

  const cardCodeString = `import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gCard,
  Ux4gDivider,
  Ux4gDividerOrientation,
  Ux4gSearchField,
  UX4GColors,
} from 'ux4g-react-native-design-system';

const CATEGORIES = [
  'Application Issues',
  'Documents and Uploads',
  'Payments and Fees',
  'Account and Profile',
  'Technical Issues',
];

/// Card Style variant — help centre inside a white card on purple background.
export const HelpCentreCardScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const [search, setSearch] = useState('');
  const screenBg = isDark ? UX4GColors.primary800 : UX4GColors.primary100;
  const cardBg = isDark ? '#1A1A1A' : '#FFFFFF';
  const titleColor = isDark ? '#FFFFFF' : '#111827';
  const subtleTextColor = isDark ? '#9CA3AF' : '#4B5563';
  const borderColor = isDark ? UX4GColors.neutral700 : '#E5E7EB';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: screenBg }]}>
      {/* App Header */}
      <Ux4gAppHeader
        elevation={2}
        variant="light"
        title=""
        leadingSpacing={8}
        leadingWidgets={[
          <NationalEmblemLogo key="emblem" isDark={isDark} height={40} />,
          <View key="divider" style={styles.headerDividerWrapper}>
            <Ux4gDivider
              orientation={Ux4gDividerOrientation.vertical}
              color="#D1D5DB"
            />
          </View>,
          <UnionLogo
            key="union"
            size={32}
            color={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
          />,
        ]}
      />

      {/* White Card Content */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        <Ux4gCard
          backgroundColor={cardBg}
          cornerRadius={16}
          style={styles.card}
        >
          <Text style={[styles.title, { color: titleColor }]}>Help Centre</Text>
          <Text style={[styles.subtitle, { color: subtleTextColor }]}>
            Find answers to common questions or contact our support team.
          </Text>

          {/* Search Field */}
          <View style={styles.searchWrapper}>
            <Ux4gSearchField
              value={search}
              onValueChange={setSearch}
              placeholder="Search for..."
              variant="searchWithSubmit"
              showVoiceIcon
              buttonStyle="filled"
              onSubmitClick={(val) => console.log('Searching for:', val)}
            />
          </View>

          {/* Categories Section */}
          <Text style={[styles.sectionTitle, { color: titleColor }]}>
            Browse by category
          </Text>

          <View style={styles.categoryList}>
            {CATEGORIES.map((category) => (
              <View key={category}>
                <TouchableOpacity
                  style={styles.categoryItem}
                  onPress={() => console.log('Selected:', category)}
                  activeOpacity={0.7}
                >
                  <Text style={[styles.categoryText, { color: titleColor }]}>
                    {category}
                  </Text>
                  <ChevronRightIcon color="#9CA3AF" size={20} />
                </TouchableOpacity>
                <Ux4gDivider color={borderColor} />
              </View>
            ))}
          </View>
        </Ux4gCard>
      </ScrollView>

      {/* Powered by Digital India */}
      <View style={styles.footerRow}>
        <Text
          style={[
            styles.footerText,
            { color: isDark ? UX4GColors.neutral400 : '#6B7280' },
          ]}
        >
          Powered by -
        </Text>
        <Image
          source={{ uri: '/digital_india_logo.png' }}
          style={styles.digitalIndiaLogo}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerDividerWrapper: {
    height: 32,
    justifyContent: 'center',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  card: {
    padding: 16,
    borderRadius: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    lineHeight: 20,
  },
  searchWrapper: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },
  categoryList: {
    width: '100%',
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  categoryText: {
    fontSize: 15,
    fontWeight: '500',
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingBottom: 12,
  },
  footerText: {
    fontSize: 11,
  },
  digitalIndiaLogo: {
    height: 20,
    width: 60,
  },
});
`;

  return (
    <div className="wb-page">
      {/* Top Header */}
      <div className="wb-header">
        <h1 className="wb-title">
          Help Centre ({isCard ? 'Card Style' : 'Default'})
        </h1>
        <p className="wb-description">
          {isCard
            ? 'Help centre with search and category browsing inside a card container with light purple background.'
            : 'Help centre with search and category browsing on a white background.'}
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
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '32px 16px',
                }}
              >
                {/* Variant Selector Pill Control */}
                <div
                  style={{
                    display: 'flex',
                    gap: 8,
                    marginBottom: 24,
                    backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
                    padding: 4,
                    borderRadius: 10,
                    border: `1px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.neutral200}`,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setVariant('default');
                      setSelectedCategory(null);
                    }}
                    style={{
                      padding: '8px 18px',
                      borderRadius: 8,
                      border: 'none',
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: 'pointer',
                      backgroundColor: variant === 'default' ? UX4GColors.primary : 'transparent',
                      color:
                        variant === 'default'
                          ? UX4GColors.neutral0
                          : isDark
                          ? UX4GColors.neutral400
                          : UX4GColors.neutral600,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Default
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setVariant('card');
                      setSelectedCategory(null);
                    }}
                    style={{
                      padding: '8px 18px',
                      borderRadius: 8,
                      border: 'none',
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: 'pointer',
                      backgroundColor: variant === 'card' ? UX4GColors.primary : 'transparent',
                      color:
                        variant === 'card'
                          ? UX4GColors.neutral0
                          : isDark
                          ? UX4GColors.neutral400
                          : UX4GColors.neutral600,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Card Style
                  </button>
                </div>

                {/* Mobile Phone Mockup Frame */}
                <div
                  style={{
                    width: '360px',
                    height: '740px',
                    backgroundColor: colors.screenBg,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: isDark
                      ? '0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px #333333'
                      : '0 20px 40px rgba(0,0,0,0.12), 0 0 0 1px #E5E7EB',
                    position: 'relative',
                    transition: 'background-color 0.2s ease',
                  }}
                >
                  {/* Ux4gAppHeader inside Mockup */}
                  <div
                    style={{
                      height: '56px',
                      backgroundColor: colors.headerBg,
                      borderBottom: `1px solid ${colors.headerDividerColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 16px',
                      gap: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      zIndex: 10,
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src="/national_emblem_logo.svg"
                      alt="National Emblem"
                      style={{
                        height: '40px',
                        filter: isDark ? 'brightness(0) invert(1)' : 'none',
                      }}
                    />
                    <div
                      style={{
                        width: '1px',
                        height: '32px',
                        backgroundColor: '#D1D5DB',
                        margin: '0 4px',
                      }}
                    />
                    <UnionLogo size={32} color={colors.primaryColor} isDark={isDark} />
                  </div>

                  {/* Scrollable Content Container */}
                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '16px',
                      overflowY: 'auto',
                    }}
                  >
                    {/* Main Content Area: directly on screen (Default) or inside Ux4gCard (Card Style) */}
                    <div
                      style={{
                        width: '100%',
                        backgroundColor: isCard ? colors.cardBg : 'transparent',
                        borderRadius: isCard ? '16px' : '0px',
                        border: isCard ? `1px solid ${colors.cardBorder}` : 'none',
                        padding: isCard ? '16px' : '0px',
                        boxShadow: isCard ? '0 4px 12px rgba(0, 0, 0, 0.05)' : 'none',
                        boxSizing: 'border-box',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {/* Title */}
                      <div
                        style={{
                          fontSize: '22px',
                          fontWeight: 800,
                          color: colors.titleColor,
                          marginBottom: '8px',
                        }}
                      >
                        Help Centre
                      </div>

                      {/* Subtitle */}
                      <div
                        style={{
                          fontSize: '14px',
                          color: colors.subtleText,
                          lineHeight: '20px',
                          marginBottom: '20px',
                        }}
                      >
                        Find answers to common questions or contact our support team.
                      </div>

                      {/* Ux4gSearchField Component (Search with Submit + Voice) */}
                      <div
                        style={{
                          marginBottom: '20px',
                          position: 'relative',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: colors.searchInputBg,
                            border: `1px solid ${colors.searchBorder}`,
                            borderRadius: '8px',
                            overflow: 'hidden',
                            boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                          }}
                        >
                          {/* Search Icon */}
                          <div
                            style={{
                              paddingLeft: '12px',
                              paddingRight: '6px',
                              display: 'flex',
                              alignItems: 'center',
                              color: colors.searchPlaceholderColor,
                            }}
                          >
                            <span
                              className="material-symbols-outlined"
                              style={{ fontSize: '20px' }}
                            >
                              search
                            </span>
                          </div>

                          {/* Text Input */}
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search for..."
                            style={{
                              flex: 1,
                              border: 'none',
                              outline: 'none',
                              backgroundColor: 'transparent',
                              color: colors.searchTextColor,
                              fontSize: '14px',
                              padding: '10px 4px',
                            }}
                          />

                          {/* Voice Icon */}
                          <button
                            type="button"
                            title="Voice Search"
                            onClick={() => alert('Voice search activated')}
                            style={{
                              border: 'none',
                              background: 'transparent',
                              color: colors.searchPlaceholderColor,
                              cursor: 'pointer',
                              padding: '8px 8px',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <span
                              className="material-symbols-outlined"
                              style={{ fontSize: '20px' }}
                            >
                              mic
                            </span>
                          </button>

                          {/* Submit / Search Button */}
                          <button
                            type="button"
                            onClick={() => {
                              if (searchQuery.trim()) {
                                alert(`Searching for: ${searchQuery}`);
                              }
                            }}
                            style={{
                              border: 'none',
                              backgroundColor: colors.submitBtnBg,
                              color: colors.submitBtnText,
                              padding: '10px 14px',
                              fontWeight: 600,
                              fontSize: '13px',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'opacity 0.15s ease',
                            }}
                          >
                            <span
                              className="material-symbols-outlined"
                              style={{ fontSize: '18px' }}
                            >
                              search
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Browse by Category Heading */}
                      <div
                        style={{
                          fontSize: '14px',
                          fontWeight: 600,
                          color: colors.titleColor,
                          marginBottom: '12px',
                        }}
                      >
                        Browse by category
                      </div>

                      {/* Category List */}
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {filteredCategories.length > 0 ? (
                          filteredCategories.map((category) => {
                            const isSelected = selectedCategory === category;
                            return (
                              <div key={category}>
                                <div
                                  onClick={() => setSelectedCategory(category)}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '12px 4px',
                                    cursor: 'pointer',
                                    borderRadius: '6px',
                                    backgroundColor: isSelected
                                      ? isDark
                                        ? 'rgba(163,145,255,0.1)'
                                        : 'rgba(74,43,194,0.06)'
                                      : 'transparent',
                                    transition: 'background-color 0.15s ease',
                                  }}
                                  onMouseEnter={(e) => {
                                    if (!isSelected) {
                                      e.currentTarget.style.backgroundColor = isDark
                                        ? 'rgba(255,255,255,0.05)'
                                        : 'rgba(0,0,0,0.03)';
                                    }
                                  }}
                                  onMouseLeave={(e) => {
                                    if (!isSelected) {
                                      e.currentTarget.style.backgroundColor = 'transparent';
                                    }
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: '15px',
                                      fontWeight: 500,
                                      color: isSelected
                                        ? colors.primaryColor
                                        : colors.titleColor,
                                    }}
                                  >
                                    {category}
                                  </span>
                                  <span
                                    className="material-symbols-outlined"
                                    style={{
                                      fontSize: '20px',
                                      color: isSelected
                                        ? colors.primaryColor
                                        : colors.chevronColor,
                                    }}
                                  >
                                    chevron_right
                                  </span>
                                </div>
                                <div
                                  style={{
                                    height: '1px',
                                    backgroundColor: colors.borderColor,
                                    width: '100%',
                                  }}
                                />
                              </div>
                            );
                          })
                        ) : (
                          <div
                            style={{
                              padding: '24px 0',
                              textAlign: 'center',
                              color: colors.subtleText,
                              fontSize: '14px',
                            }}
                          >
                            No categories match &quot;{searchQuery}&quot;
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom Section: Powered by Digital India */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '4px',
                        paddingTop: '20px',
                        paddingBottom: '4px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '11px',
                          color: colors.footerText,
                        }}
                      >
                        Powered by -
                      </span>
                      <img
                        src="/digital_india_logo.png"
                        alt="Digital India"
                        style={{
                          height: '20px',
                          objectFit: 'contain',
                        }}
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Code Tab */}
            {activeMainTab === 'code' && (
              <div style={{ padding: '24px' }}>
                <div style={{ marginBottom: '24px' }}>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: isDark ? UX4GColors.neutral100 : UX4GColors.neutral900,
                      marginBottom: '8px',
                    }}
                  >
                    React Native Pattern Implementation ({isCard ? 'Card Style' : 'Default'})
                  </h3>
                  <p
                    style={{
                      fontSize: '13px',
                      color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                      marginBottom: '16px',
                    }}
                  >
                    Copy and paste the code below into your React Native application.
                  </p>
                  <CodeBlock
                    code={isCard ? cardCodeString : defaultCodeString}
                    language="tsx"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
