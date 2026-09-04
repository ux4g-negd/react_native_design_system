import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface FindServiceCenterDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

interface ServiceCenter {
  id: string;
  name: string;
  address: string;
  distance: string;
  timings: string;
}

const SAMPLE_CENTERS: ServiceCenter[] = [
  {
    id: '1',
    name: 'CSC Sector 12 — Pune City',
    address: '45 Patel Nagar, Sector 12, Pune 411001',
    distance: '1.2 km away',
    timings: 'Open Mon-Sat 9 AM – 6 PM',
  },
  {
    id: '2',
    name: 'CSC Shivaji Nagar — Pune',
    address: '102 Ferguson College Rd, Shivajinagar, Pune 411005',
    distance: '3.4 km away',
    timings: 'Open Mon-Sat 9:30 AM – 5:30 PM',
  },
  {
    id: '3',
    name: 'CSC Kothrud Hub',
    address: 'Plot 18, Paud Road, Kothrud, Pune 411038',
    distance: '5.1 km away',
    timings: 'Open Mon-Sat 9 AM – 6 PM',
  },
];

export const FindServiceCenterDoc: React.FC<FindServiceCenterDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');

  // Preview form & state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCenter, setSelectedCenter] = useState<ServiceCenter>(SAMPLE_CENTERS[0]);

  const isCard = variant === 'card';

  const colors = useMemo(() => {
    const titleColor = isDark ? '#FFFFFF' : '#111827';
    const subtleText = isDark ? '#9CA3AF' : '#4B5563';
    const scaffoldBg = isDark ? UX4GColors.neutral950 : '#FFFFFF';
    const containerCardBg = isDark ? '#1A1A1A' : '#FFFFFF';
    const containerCardBorder = isDark ? UX4GColors.neutral700 : '#E5E7EB';
    const resultCardBg = isDark ? UX4GColors.neutral900 : UX4GColors.neutral0;
    const resultCardBorder = isDark ? UX4GColors.neutral700 : UX4GColors.neutral200;
    const resultTitle = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
    const resultAddress = isDark ? UX4GColors.neutral200 : UX4GColors.neutral700;
    const resultMeta = isDark ? UX4GColors.neutral300 : UX4GColors.neutral500;
    const inputBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
    const inputBorder = isDark ? UX4GColors.neutral700 : '#D1D5DB';
    const inputText = isDark ? '#FFFFFF' : '#111827';
    const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
    const headerBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
    const headerDividerColor = '#D1D5DB';
    const footerText = isDark ? UX4GColors.neutral400 : '#6B7280';
    const screenBg = isCard
      ? isDark
        ? UX4GColors.primary800
        : UX4GColors.primary100
      : scaffoldBg;

    const primaryBtnBg = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
    const primaryBtnText = isDark ? '#000000' : '#FFFFFF';
    const outlineBtnColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;

    return {
      titleColor,
      subtleText,
      scaffoldBg,
      containerCardBg,
      containerCardBorder,
      resultCardBg,
      resultCardBorder,
      resultTitle,
      resultAddress,
      resultMeta,
      inputBg,
      inputBorder,
      inputText,
      primaryColor,
      headerBg,
      headerDividerColor,
      footerText,
      screenBg,
      primaryBtnBg,
      primaryBtnText,
      outlineBtnColor,
    };
  }, [isDark, isCard]);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) {
      setSelectedCenter(SAMPLE_CENTERS[0]);
      return;
    }
    const match = SAMPLE_CENTERS.find(
      (c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.address.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (match) {
      setSelectedCenter(match);
    }
  };

  // Clean React Native TSX source code strings matching Flutter implementation
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
  Ux4gCard,
  Ux4gButton,
  Ux4gButtonVariant,
  Ux4gButtonSize,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const FindServiceCentreScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const [search, setSearch] = useState('');

  const screenBg = isDark ? UX4GColors.neutral950 : '#FFFFFF';
  const titleColor = isDark ? '#FFFFFF' : '#111827';
  const subtleTextColor = isDark ? '#9CA3AF' : '#4B5563';

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
        <Text style={[styles.title, { color: titleColor }]}>
          Find your nearest Service Centre
        </Text>
        <Text style={[styles.subtitle, { color: subtleTextColor }]}>
          Locate a Common Service Centre (CSC) near you for in-person help.
        </Text>

        {/* Search Field */}
        <View style={styles.searchWrapper}>
          <Ux4gSearchField
            value={search}
            onValueChange={setSearch}
            placeholder="Enter PIN code or city"
            variant="searchWithSubmit"
            showVoiceIcon
            buttonStyle="filled"
            onSubmitClick={(val) => console.log('Searching for:', val)}
          />
        </View>

        {/* Result Card */}
        <Ux4gCard
          backgroundColor={isDark ? UX4GColors.neutral800 : UX4GColors.neutral0}
          cornerRadius={12}
          borderColor={isDark ? UX4GColors.neutral700 : UX4GColors.neutral200}
          borderWidth={1}
          style={styles.resultCard}
        >
          <Text
            style={[
              styles.cardTitle,
              {
                color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
              },
            ]}
          >
            CSC Sector 12 — Pune City
          </Text>
          <Text
            style={[
              styles.cardAddress,
              {
                color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
              },
            ]}
          >
            45 Patel Nagar, Sector 12, Pune 411001
          </Text>
          <Text
            style={[
              styles.cardMeta,
              {
                color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral500,
              },
            ]}
          >
            1.2 km away · Open Mon-Sat 9 AM – 6 PM
          </Text>
        </Ux4gCard>
      </ScrollView>

      {/* Buttons at bottom */}
      <View style={styles.bottomButtonsContainer}>
        <Ux4gButton
          onPress={() => console.log('Get directions')}
          text="Get directions"
          variant={Ux4gButtonVariant.primary}
          size={Ux4gButtonSize.large}
          height={48}
          backgroundColor={
            isDark ? UX4GColors.primary300 : UX4GColors.primary600
          }
          contentColor={isDark ? '#000000' : '#FFFFFF'}
        />
        <View style={{ height: 12 }} />
        <Ux4gButton
          onPress={() => console.log('View all centres')}
          text="View all centres"
          variant={Ux4gButtonVariant.outline}
          size={Ux4gButtonSize.large}
          height={48}
          borderColor={
            isDark ? UX4GColors.primary300 : UX4GColors.primary600
          }
          contentColor={
            isDark ? UX4GColors.primary300 : UX4GColors.primary600
          }
        />
      </View>

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
    marginBottom: 24,
    lineHeight: 20,
  },
  searchWrapper: {
    marginBottom: 20,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  searchInput: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 14,
    paddingRight: 80,
    fontSize: 14,
  },
  micButton: {
    position: 'absolute',
    right: 44,
    padding: 6,
  },
  submitButton: {
    position: 'absolute',
    right: 8,
    width: 30,
    height: 30,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultCard: {
    padding: 14,
    borderRadius: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardAddress: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 4,
  },
  cardMeta: {
    fontSize: 12,
  },
  bottomButtonsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
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
  Ux4gCard,
  Ux4gButton,
  Ux4gButtonVariant,
  Ux4gButtonSize,
  UX4GColors,
} from 'ux4g-react-native-design-system';

/// Card Style variant — find service centre inside a white card on purple background.
export const FindServiceCentreCardScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const [search, setSearch] = useState('');

  const screenBg = isDark ? UX4GColors.primary800 : UX4GColors.primary100;
  const cardBg = isDark ? '#1A1A1A' : '#FFFFFF';
  const titleColor = isDark ? '#FFFFFF' : '#111827';
  const subtleTextColor = isDark ? '#9CA3AF' : '#4B5563';

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

      {/* Main Container Card */}
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
            Find your nearest Service Centre
          </Text>
          <Text style={[styles.subtitle, { color: subtleTextColor }]}>
            Locate a Common Service Centre (CSC) near you for in-person help.
          </Text>

          {/* Search Field */}
          <View style={styles.searchWrapper}>
            <Ux4gSearchField
              value={search}
              onValueChange={setSearch}
              placeholder="Enter PIN code or city"
              variant="searchWithSubmit"
              showVoiceIcon
              buttonStyle="filled"
              onSubmitClick={(val) => console.log('Searching for:', val)}
            />
          </View>

          {/* Result Card */}
          <Ux4gCard
            backgroundColor={isDark ? UX4GColors.neutral800 : UX4GColors.neutral0}
            cornerRadius={12}
            borderColor={isDark ? UX4GColors.neutral700 : UX4GColors.neutral200}
            borderWidth={1}
            style={styles.resultCard}
          >
            <Text
              style={[
                styles.cardTitle,
                {
                  color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
                },
              ]}
            >
              CSC Sector 12 — Pune City
            </Text>
            <Text
              style={[
                styles.cardAddress,
                {
                  color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
                },
              ]}
            >
              45 Patel Nagar, Sector 12, Pune 411001
            </Text>
            <Text
              style={[
                styles.cardMeta,
                {
                  color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral500,
                },
              ]}
            >
              1.2 km away · Open Mon-Sat 9 AM – 6 PM
            </Text>
          </Ux4gCard>
        </Ux4gCard>
      </ScrollView>

      {/* Buttons at bottom */}
      <View style={styles.bottomButtonsContainer}>
        <Ux4gButton
          onPress={() => console.log('Get directions')}
          text="Get directions"
          variant={Ux4gButtonVariant.primary}
          size={Ux4gButtonSize.large}
          height={48}
          backgroundColor={
            isDark ? UX4GColors.primary300 : UX4GColors.primary600
          }
          contentColor={isDark ? '#000000' : '#FFFFFF'}
        />
        <View style={{ height: 12 }} />
        <Ux4gButton
          onPress={() => console.log('View all centres')}
          text="View all centres"
          variant={Ux4gButtonVariant.outline}
          size={Ux4gButtonSize.large}
          height={48}
          borderColor={
            isDark ? UX4GColors.primary300 : UX4GColors.primary600
          }
          contentColor={
            isDark ? UX4GColors.primary300 : UX4GColors.primary600
          }
        />
      </View>

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
    marginBottom: 24,
    lineHeight: 20,
  },
  searchWrapper: {
    marginBottom: 20,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  searchInput: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 14,
    paddingRight: 80,
    fontSize: 14,
  },
  micButton: {
    position: 'absolute',
    right: 44,
    padding: 6,
  },
  submitButton: {
    position: 'absolute',
    right: 8,
    width: 30,
    height: 30,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultCard: {
    padding: 14,
    borderRadius: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardAddress: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 4,
  },
  cardMeta: {
    fontSize: 12,
  },
  bottomButtonsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
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
          Find Service Centre ({isCard ? 'Card Style' : 'Default'})
        </h1>
        <p className="wb-description">
          {isCard
            ? 'Find nearest service centre with search and result card inside a card container with light purple background.'
            : 'Find nearest service centre with search and result card on white background.'}
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
                      padding: '16px',
                      overflowY: 'auto',
                    }}
                  >
                    {/* Main Content Area: directly on screen (Default) or inside Ux4gCard (Card Style) */}
                    <div
                      style={{
                        width: '100%',
                        backgroundColor: isCard ? colors.containerCardBg : 'transparent',
                        borderRadius: isCard ? '16px' : '0px',
                        border: isCard ? `1px solid ${colors.containerCardBorder}` : 'none',
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
                        Find your nearest Service Centre
                      </div>

                      {/* Subtitle */}
                      <div
                        style={{
                          fontSize: '14px',
                          color: colors.subtleText,
                          lineHeight: '20px',
                          marginBottom: '24px',
                        }}
                      >
                        Locate a Common Service Centre (CSC) near you for in-person help.
                      </div>

                      {/* Search Field matching Ux4gSearchField */}
                      <form
                        onSubmit={handleSearchSubmit}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          height: '44px',
                          width: '100%',
                          backgroundColor: colors.inputBg,
                          border: `1px solid ${colors.inputBorder}`,
                          borderRadius: '8px',
                          overflow: 'hidden',
                          marginBottom: '20px',
                          boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                          boxSizing: 'border-box',
                        }}
                      >
                        {/* Left Search Icon */}
                        <div
                          style={{
                            paddingLeft: '10px',
                            paddingRight: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: colors.subtleText,
                            flexShrink: 0,
                          }}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: '18px' }}
                          >
                            search
                          </span>
                        </div>

                        {/* Input Field */}
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Enter PIN code or city"
                          style={{
                            flex: 1,
                            minWidth: 0,
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            outline: 'none',
                            backgroundColor: 'transparent',
                            color: colors.inputText,
                            fontSize: '13px',
                            padding: '0 4px',
                            boxSizing: 'border-box',
                          }}
                        />

                        {/* Mic / Voice Icon */}
                        <button
                          type="button"
                          onClick={() => alert('Voice search activated')}
                          style={{
                            border: 'none',
                            background: 'transparent',
                            color: colors.subtleText,
                            cursor: 'pointer',
                            padding: '0 6px',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                          title="Voice Search"
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: '18px' }}
                          >
                            mic
                          </span>
                        </button>

                        {/* Right Attached Purple Search Button */}
                        <button
                          type="submit"
                          style={{
                            border: 'none',
                            backgroundColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
                            color: isDark ? '#000000' : '#FFFFFF',
                            width: '42px',
                            height: '100%',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            padding: 0,
                            transition: 'opacity 0.15s ease',
                          }}
                          title="Search"
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{
                              fontSize: '18px',
                              color: isDark ? '#000000' : '#FFFFFF',
                            }}
                          >
                            search
                          </span>
                        </button>
                      </form>

                      {/* Nearest Result Card */}
                      <div
                        style={{
                          backgroundColor: colors.resultCardBg,
                          border: `1px solid ${colors.resultCardBorder}`,
                          borderRadius: '12px',
                          padding: '14px',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '15px',
                            fontWeight: 700,
                            color: colors.resultTitle,
                            marginBottom: '4px',
                          }}
                        >
                          {selectedCenter.name}
                        </div>
                        <div
                          style={{
                            fontSize: '13px',
                            color: colors.resultAddress,
                            marginBottom: '4px',
                            lineHeight: '18px',
                          }}
                        >
                          {selectedCenter.address}
                        </div>
                        <div
                          style={{
                            fontSize: '12px',
                            color: colors.resultMeta,
                          }}
                        >
                          {selectedCenter.distance} · {selectedCenter.timings}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Buttons at Bottom */}
                  <div
                    style={{
                      padding: '0 16px 12px 16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      flexShrink: 0,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => alert(`Opening navigation to ${selectedCenter.name}`)}
                      style={{
                        width: '100%',
                        height: '48px',
                        borderRadius: '8px',
                        border: 'none',
                        backgroundColor: colors.primaryBtnBg,
                        color: colors.primaryBtnText,
                        fontSize: '15px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
                      }}
                    >
                      Get directions
                    </button>
                    <button
                      type="button"
                      onClick={() => alert('View all centres modal / list')}
                      style={{
                        width: '100%',
                        height: '48px',
                        borderRadius: '8px',
                        border: `1.5px solid ${colors.outlineBtnColor}`,
                        backgroundColor: 'transparent',
                        color: colors.outlineBtnColor,
                        fontSize: '15px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      View all centres
                    </button>
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
