import React, { useState, useMemo, useRef, useEffect } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface AllScheduledLanguagesDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

interface LangItem {
  name: string;
  sub: string;
}

const LANGUAGES: LangItem[] = [
  { name: 'English', sub: 'United States' },
  { name: 'हिंदी', sub: 'Hindi' },
  { name: 'मराठी', sub: 'Marathi' },
  { name: 'தமிழ்', sub: 'Tamil' },
  { name: 'తెలుగు', sub: 'Telegu' },
  { name: 'বাংলা', sub: 'Bengali' },
];

export const AllScheduledLanguagesDoc: React.FC<AllScheduledLanguagesDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [searchValue, setSearchValue] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const isCard = variant === 'card';

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        searchRef.current &&
        !searchRef.current.contains(e.target as Node)
      ) {
        if (isDropdownOpen) {
          setIsDropdownOpen(false);
          if (selectedIndex >= 0) {
            setSearchValue(LANGUAGES[selectedIndex].name);
          }
        }
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isDropdownOpen, selectedIndex]);

  // Filter languages
  const filteredLanguages = useMemo(() => {
    const query = searchValue.toLowerCase();
    const isExactSelection = LANGUAGES.some(
      (l) => l.name.toLowerCase() === query
    );
    if (isExactSelection || query === '') return LANGUAGES;
    return LANGUAGES.filter(
      (l) =>
        l.name.toLowerCase().includes(query) ||
        l.sub.toLowerCase().includes(query)
    );
  }, [searchValue]);

  const colors = useMemo(() => {
    const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
    const subtleText = isDark ? UX4GColors.neutral400 : '#4B5563';
    const mutedText = isDark ? UX4GColors.neutral500 : '#6B7280';
    const primaryColor = isDark ? UX4GColors.primary300 : '#432CBB';
    const scaffoldBg = isDark ? UX4GColors.neutral950 : '#FFFFFF';
    const containerCardBg = isDark ? '#1A1A1A' : '#FFFFFF';
    const containerCardBorder = isDark ? UX4GColors.neutral700 : '#E5E7EB';
    const headerBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
    const headerDividerColor = isDark ? UX4GColors.neutral700 : '#D1D5DB';
    const footerText = isDark ? UX4GColors.neutral400 : '#6B7280';
    const screenBg = isCard
      ? isDark
        ? UX4GColors.primary800
        : '#F2EFFF'
      : scaffoldBg;
    // Search field
    const searchBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
    const searchBorder = isDark ? UX4GColors.neutral700 : '#D1D5DB';
    const searchText = isDark ? UX4GColors.neutral50 : '#111827';
    const searchPlaceholder = isDark ? UX4GColors.neutral500 : '#9CA3AF';
    const searchIconColor = isDark ? UX4GColors.neutral400 : '#6B7280';
    // Dropdown
    const dropdownBg = isDark ? '#1A1A1A' : '#FFFFFF';
    const dropdownBorder = isDark ? UX4GColors.neutral700 : '#E5E7EB';
    const dropdownItemBorder = isDark ? UX4GColors.neutral700 : '#E5E7EB';
    const selectedItemBg = isDark ? UX4GColors.primary800 : '#F2EFFF';
    // Submit button
    const submitBtnBg = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
    const submitBtnIcon = isDark ? '#000000' : '#FFFFFF';

    return {
      titleColor,
      subtleText,
      mutedText,
      primaryColor,
      scaffoldBg,
      containerCardBg,
      containerCardBorder,
      headerBg,
      headerDividerColor,
      footerText,
      screenBg,
      searchBg,
      searchBorder,
      searchText,
      searchPlaceholder,
      searchIconColor,
      dropdownBg,
      dropdownBorder,
      dropdownItemBorder,
      selectedItemBg,
      submitBtnBg,
      submitBtnIcon,
    };
  }, [isDark, isCard]);

  // ── React Native TSX source code — Default ──
  const defaultCodeString = `import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gDividerOrientation,
  Ux4gSearchField,
  Ux4gSearchFieldVariant,
  Ux4gSearchFieldSize,
  UX4GColors,
} from 'ux4g-react-native-design-system';

const LANGUAGES = [
  { name: 'English', sub: 'United States' },
  { name: 'हिंदी', sub: 'Hindi' },
  { name: 'मराठी', sub: 'Marathi' },
  { name: 'தமிழ்', sub: 'Tamil' },
  { name: 'తెలుగు', sub: 'Telegu' },
  { name: 'বাংলা', sub: 'Bengali' },
];

export const AllScheduledLanguagesScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [searchValue, setSearchValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const screenBg = isDark ? UX4GColors.neutral950 : '#FFFFFF';
  const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
  const subtleText = isDark ? UX4GColors.neutral400 : '#4B5563';
  const mutedText = isDark ? UX4GColors.neutral500 : '#6B7280';
  const primaryColor = isDark ? UX4GColors.primary300 : '#432CBB';

  const query = searchValue.toLowerCase();
  const isExactSelection = LANGUAGES.some(l => l.name.toLowerCase() === query);
  const filteredLanguages = (isExactSelection || query === '')
    ? LANGUAGES
    : LANGUAGES.filter(l =>
        l.name.toLowerCase().includes(query) ||
        l.sub.toLowerCase().includes(query)
      );

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: screenBg }]}>
      {/* App Header */}
      <Ux4gAppHeader
        elevation={4}
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
        <Text style={[styles.title, { color: titleColor }]}>
          All scheduled languages
        </Text>
        <Text style={[styles.subtitle, { color: subtleText }]}>
          India's 22 scheduled languages plus English. Tap any tile to switch — "Coming soon" tiles mean translation is in progress.
        </Text>

        {/* Search Field */}
        <Ux4gSearchField
          value={searchValue}
          onValueChange={(v) => {
            setSearchValue(v);
            setIsDropdownOpen(true);
          }}
          variant={Ux4gSearchFieldVariant.searchWithSubmit}
          size={Ux4gSearchFieldSize.medium}
          placeholder="Search for Language"
          showVoiceIcon={true}
          showClearIcon={false}
          onClearClick={() => {
            setSearchValue('');
            setSelectedIndex(-1);
            setIsDropdownOpen(false);
          }}
          onSubmitClick={() => {}}
        />

        {/* Dropdown list */}
        {isDropdownOpen && (
          <View style={styles.dropdown}>
            {filteredLanguages.map((lang, i) => {
              const originalIndex = LANGUAGES.indexOf(lang);
              const isSelected = selectedIndex === originalIndex;
              return (
                <TouchableOpacity
                  key={lang.name}
                  onPress={() => {
                    setSelectedIndex(originalIndex);
                    setSearchValue(lang.name);
                    setIsDropdownOpen(false);
                  }}
                  style={[
                    styles.dropdownItem,
                    isSelected && styles.dropdownItemSelected,
                    i < filteredLanguages.length - 1 && styles.dropdownItemBorder,
                  ]}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={[
                      styles.langName,
                      { color: isSelected ? primaryColor : titleColor },
                    ]}>
                      {lang.name}
                    </Text>
                    <Text style={[
                      styles.langSub,
                      { color: isSelected ? primaryColor : mutedText },
                    ]}>
                      {lang.sub}
                    </Text>
                  </View>
                  {isSelected && (
                    <Icon name="check" color={primaryColor} size={20} />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </ScrollView>

      {/* Powered by Digital India */}
      <View style={styles.footerRow}>
        <Text style={[styles.footerText, { color: mutedText }]}>
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
  safeArea: { flex: 1 },
  headerDividerWrapper: { height: 32, justifyContent: 'center' },
  scroll: { flex: 1 },
  scrollContent: { padding: 16 },
  title: { fontSize: 22, fontWeight: '800', marginBottom: 8 },
  subtitle: { fontSize: 14, lineHeight: 20, marginBottom: 20 },
  dropdown: {
    marginTop: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  dropdownItemSelected: {
    backgroundColor: '#F2EFFF',
  },
  dropdownItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  langName: { fontSize: 15, fontWeight: '600' },
  langSub: { fontSize: 12, marginTop: 2 },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingBottom: 12,
  },
  footerText: { fontSize: 11 },
  digitalIndiaLogo: { height: 20, width: 60 },
});
`;

  // ── React Native TSX source code — Card Style ──
  const cardCodeString = `import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gDividerOrientation,
  Ux4gSearchField,
  Ux4gSearchFieldVariant,
  Ux4gSearchFieldSize,
  Ux4gCard,
  UX4GColors,
} from 'ux4g-react-native-design-system';

const LANGUAGES = [
  { name: 'English', sub: 'United States' },
  { name: 'हिंदी', sub: 'Hindi' },
  { name: 'मराठी', sub: 'Marathi' },
  { name: 'தமிழ்', sub: 'Tamil' },
  { name: 'తెలుగు', sub: 'Telegu' },
  { name: 'বাংলা', sub: 'Bengali' },
];

/// Card Style variant — all scheduled languages inside a white card on purple background.
export const AllScheduledLanguagesCardScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [searchValue, setSearchValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const screenBg = isDark ? UX4GColors.primary800 : '#F2EFFF';
  const cardBg = isDark ? '#1A1A1A' : '#FFFFFF';
  const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
  const subtleText = isDark ? UX4GColors.neutral400 : '#4B5563';
  const mutedText = isDark ? UX4GColors.neutral500 : '#6B7280';
  const primaryColor = isDark ? UX4GColors.primary300 : '#432CBB';

  const query = searchValue.toLowerCase();
  const isExactSelection = LANGUAGES.some(l => l.name.toLowerCase() === query);
  const filteredLanguages = (isExactSelection || query === '')
    ? LANGUAGES
    : LANGUAGES.filter(l =>
        l.name.toLowerCase().includes(query) ||
        l.sub.toLowerCase().includes(query)
      );

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: screenBg }]}>
      {/* App Header */}
      <Ux4gAppHeader
        elevation={4}
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
          <Text style={[styles.title, { color: titleColor }]}>
            All scheduled languages
          </Text>
          <Text style={[styles.subtitle, { color: subtleText }]}>
            India's 22 scheduled languages plus English. Tap any tile to switch — "Coming soon" tiles mean translation is in progress.
          </Text>

          {/* Search Field */}
          <Ux4gSearchField
            value={searchValue}
            onValueChange={(v) => {
              setSearchValue(v);
              setIsDropdownOpen(true);
            }}
            variant={Ux4gSearchFieldVariant.searchWithSubmit}
            size={Ux4gSearchFieldSize.medium}
            placeholder="Search for Language"
            showVoiceIcon={true}
            showClearIcon={false}
            onClearClick={() => {
              setSearchValue('');
              setSelectedIndex(-1);
              setIsDropdownOpen(false);
            }}
            onSubmitClick={() => {}}
          />

          {/* Dropdown list */}
          {isDropdownOpen && (
            <View style={styles.dropdown}>
              {filteredLanguages.map((lang, i) => {
                const originalIndex = LANGUAGES.indexOf(lang);
                const isSelected = selectedIndex === originalIndex;
                return (
                  <TouchableOpacity
                    key={lang.name}
                    onPress={() => {
                      setSelectedIndex(originalIndex);
                      setSearchValue(lang.name);
                      setIsDropdownOpen(false);
                    }}
                    style={[
                      styles.dropdownItem,
                      isSelected && styles.dropdownItemSelected,
                      i < filteredLanguages.length - 1 && styles.dropdownItemBorder,
                    ]}
                  >
                    <View style={{ flex: 1 }}>
                      <Text style={[
                        styles.langName,
                        { color: isSelected ? primaryColor : titleColor },
                      ]}>
                        {lang.name}
                      </Text>
                      <Text style={[
                        styles.langSub,
                        { color: isSelected ? primaryColor : mutedText },
                      ]}>
                        {lang.sub}
                      </Text>
                    </View>
                    {isSelected && (
                      <Icon name="check" color={primaryColor} size={20} />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </Ux4gCard>
      </ScrollView>

      {/* Powered by Digital India */}
      <View style={styles.footerRow}>
        <Text style={[styles.footerText, { color: mutedText }]}>
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
  safeArea: { flex: 1 },
  headerDividerWrapper: { height: 32, justifyContent: 'center' },
  scroll: { flex: 1 },
  scrollContent: { padding: 16 },
  card: { padding: 16, borderRadius: 16 },
  title: { fontSize: 22, fontWeight: '800', marginBottom: 8 },
  subtitle: { fontSize: 14, lineHeight: 20, marginBottom: 20 },
  dropdown: {
    marginTop: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  dropdownItemSelected: {
    backgroundColor: '#F2EFFF',
  },
  dropdownItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  langName: { fontSize: 15, fontWeight: '600' },
  langSub: { fontSize: 12, marginTop: 2 },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingBottom: 12,
  },
  footerText: { fontSize: 11 },
  digitalIndiaLogo: { height: 20, width: 60 },
});
`;

  const handleSelectLanguage = (originalIndex: number) => {
    setSelectedIndex(originalIndex);
    setSearchValue(LANGUAGES[originalIndex].name);
    setIsDropdownOpen(false);
  };

  return (
    <div className="wb-page">
      {/* Top Header */}
      <div className="wb-header">
        <h1 className="wb-title">
          All Scheduled Languages ({isCard ? 'Card Style' : 'Default'})
        </h1>
        <p className="wb-description">
          {isCard
            ? 'Full language list with search and selected state inside a card container with light purple background.'
            : 'Full language list with search and selected state on white background.'}
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
                    onClick={() => setVariant('default')}
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
                    onClick={() => setVariant('card')}
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
                    height: '640px',
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
                        backgroundColor: colors.headerDividerColor,
                        margin: '0 4px',
                      }}
                    />
                    <UnionLogo size={32} color={colors.primaryColor} isDark={isDark} />
                  </div>

                  {/* Scrollable Content Area */}
                  <div
                    style={{
                      flex: 1,
                      overflowY: 'auto',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Main Content (with or without card wrapper) */}
                    <div
                      style={{
                        width: '100%',
                        backgroundColor: isCard ? colors.containerCardBg : 'transparent',
                        borderRadius: isCard ? '16px' : '0px',
                        border: isCard ? `1px solid ${colors.containerCardBorder}` : 'none',
                        padding: isCard ? '16px' : '0px',
                        boxShadow: isCard ? '0 4px 12px rgba(0, 0, 0, 0.05)' : 'none',
                        boxSizing: 'border-box' as const,
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
                          lineHeight: '28px',
                        }}
                      >
                        All scheduled languages
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
                        India's 22 scheduled languages plus English. Tap any tile to switch — "Coming soon" tiles mean translation is in progress.
                      </div>

                      {/* Search Field */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          border: `1px solid ${colors.searchBorder}`,
                          borderRadius: '8px',
                          backgroundColor: colors.searchBg,
                          overflow: 'hidden',
                          height: '44px',
                        }}
                      >
                        {/* Search icon */}
                        <span
                          className="material-symbols-outlined"
                          style={{
                            color: colors.searchIconColor,
                            fontSize: '20px',
                            padding: '0 10px',
                            flexShrink: 0,
                          }}
                        >
                          search
                        </span>
                        {/* Text Input */}
                        <input
                          ref={searchRef}
                          type="text"
                          placeholder="Search for Language"
                          value={searchValue}
                          onChange={(e) => {
                            setSearchValue(e.target.value);
                            setIsDropdownOpen(true);
                          }}
                          onFocus={() => setIsDropdownOpen(true)}
                          style={{
                            flex: 1,
                            border: 'none',
                            outline: 'none',
                            backgroundColor: 'transparent',
                            color: colors.searchText,
                            fontSize: '14px',
                            padding: '0',
                            height: '100%',
                          }}
                        />
                        {/* Voice icon */}
                        <span
                          className="material-symbols-outlined"
                          style={{
                            color: colors.searchIconColor,
                            fontSize: '20px',
                            padding: '0 8px',
                            flexShrink: 0,
                            fontVariationSettings: "'FILL' 1",
                          }}
                        >
                          mic
                        </span>
                        {/* Submit button */}
                        <button
                          type="button"
                          style={{
                            width: '44px',
                            height: '44px',
                            backgroundColor: colors.submitBtnBg,
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            flexShrink: 0,
                            borderRadius: '0 7px 7px 0',
                          }}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{
                              color: colors.submitBtnIcon,
                              fontSize: '20px',
                            }}
                          >
                            search
                          </span>
                        </button>
                      </div>

                      {/* Dropdown list */}
                      {isDropdownOpen && (
                        <div
                          ref={dropdownRef}
                          style={{
                            marginTop: '4px',
                            borderRadius: '8px',
                            border: `1px solid ${colors.dropdownBorder}`,
                            backgroundColor: colors.dropdownBg,
                            boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
                            overflow: 'hidden',
                          }}
                        >
                          {filteredLanguages.map((lang, i) => {
                            const originalIndex = LANGUAGES.indexOf(lang);
                            const isSelected = selectedIndex === originalIndex;
                            return (
                              <div
                                key={lang.name}
                                onClick={() => handleSelectLanguage(originalIndex)}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  padding: '12px',
                                  cursor: 'pointer',
                                  backgroundColor: isSelected
                                    ? colors.selectedItemBg
                                    : 'transparent',
                                  borderBottom:
                                    i < filteredLanguages.length - 1
                                      ? `1px solid ${colors.dropdownItemBorder}`
                                      : 'none',
                                  transition: 'background-color 0.1s ease',
                                }}
                                onMouseEnter={(e) => {
                                  if (!isSelected) {
                                    (e.currentTarget as HTMLDivElement).style.backgroundColor = isDark
                                      ? 'rgba(255,255,255,0.04)'
                                      : 'rgba(0,0,0,0.02)';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  if (!isSelected) {
                                    (e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent';
                                  }
                                }}
                              >
                                <div style={{ flex: 1 }}>
                                  <div
                                    style={{
                                      fontSize: '15px',
                                      fontWeight: 600,
                                      color: isSelected
                                        ? colors.primaryColor
                                        : colors.titleColor,
                                    }}
                                  >
                                    {lang.name}
                                  </div>
                                  <div
                                    style={{
                                      fontSize: '12px',
                                      marginTop: '2px',
                                      color: isSelected
                                        ? colors.primaryColor
                                        : colors.mutedText,
                                    }}
                                  >
                                    {lang.sub}
                                  </div>
                                </div>
                                {isSelected && (
                                  <span
                                    className="material-symbols-outlined"
                                    style={{
                                      color: colors.primaryColor,
                                      fontSize: '20px',
                                    }}
                                  >
                                    check
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Powered by Digital India */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                      paddingBottom: '12px',
                      flexShrink: 0,
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
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 2. Code Tab */}
            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                <CodeBlock
                  code={variant === 'card' ? cardCodeString : defaultCodeString}
                  language="tsx"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
