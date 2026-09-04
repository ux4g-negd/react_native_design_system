import React, { useState, useMemo, useRef, useEffect } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface LanguageSwitcherDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

interface LanguageOption {
  id: string;
  native: string;
  english: string;
}

const LANGUAGES: LanguageOption[] = [
  { id: 'en', native: 'English', english: 'United States' },
  { id: 'hi', native: 'हिंदी', english: 'Hindi' },
  { id: 'mr', native: 'मराठी', english: 'Marathi' },
  { id: 'ta', native: 'தமிழ்', english: 'Tamil' },
  { id: 'te', native: 'తెలుగు', english: 'Telegu' },
  { id: 'bn', native: 'বাংলা', english: 'Bengali' },
];

export const LanguageSwitcherDoc: React.FC<LanguageSwitcherDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [selectedId, setSelectedId] = useState<string>('en');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isCard = variant === 'card';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const colors = useMemo(() => {
    const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
    const subtleText = isDark ? UX4GColors.neutral400 : '#4B5563';
    const mutedText = isDark ? UX4GColors.neutral500 : '#6B7280';
    const scaffoldBg = isDark ? UX4GColors.neutral950 : '#FFFFFF';
    const containerCardBg = isDark ? '#1A1A1A' : '#FFFFFF';
    const containerCardBorder = isDark ? UX4GColors.neutral700 : '#E5E7EB';
    const inputBg = isDark ? UX4GColors.neutral950 : '#FFFFFF';
    const inputBorder = isDark ? UX4GColors.neutral700 : '#D1D5DB';
    const dropdownBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
    const dropdownBorder = isDark ? UX4GColors.neutral700 : '#E5E7EB';
    const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
    const selectedItemBg = isDark ? '#2D1B69' : '#F3E8FF';
    const headerBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
    const headerDividerColor = '#D1D5DB';
    const footerText = isDark ? UX4GColors.neutral400 : '#6B7280';
    const screenBg = isCard
      ? isDark
        ? UX4GColors.primary800
        : UX4GColors.primary100
      : scaffoldBg;

    return {
      titleColor,
      subtleText,
      mutedText,
      scaffoldBg,
      containerCardBg,
      containerCardBorder,
      inputBg,
      inputBorder,
      dropdownBg,
      dropdownBorder,
      primaryColor,
      selectedItemBg,
      headerBg,
      headerDividerColor,
      footerText,
      screenBg,
    };
  }, [isDark, isCard]);

  const selectedLang = useMemo(() => {
    return LANGUAGES.find((l) => l.id === selectedId) || LANGUAGES[0];
  }, [selectedId]);

  // Clean React Native TSX source code strings matching Flutter implementation
  const defaultCodeString = `import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gDividerOrientation,
  UX4GColors,
} from 'ux4g-react-native-design-system';

const LANGUAGES = [
  { id: 'en', native: 'English', english: 'United States' },
  { id: 'hi', native: 'हिंदी', english: 'Hindi' },
  { id: 'mr', native: 'मराठी', english: 'Marathi' },
  { id: 'ta', native: 'தமிழ்', english: 'Tamil' },
  { id: 'te', native: 'తెలుగు', english: 'Telegu' },
  { id: 'bn', native: 'বাংলা', english: 'Bengali' },
];

export const LanguageSwitcherScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const [selectedId, setSelectedId] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  const screenBg = isDark ? UX4GColors.neutral950 : '#FFFFFF';
  const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
  const subtleText = isDark ? UX4GColors.neutral400 : '#4B5563';
  const mutedText = isDark ? UX4GColors.neutral500 : '#6B7280';
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const inputBg = isDark ? UX4GColors.neutral950 : '#FFFFFF';
  const inputBorder = isDark ? UX4GColors.neutral700 : '#D1D5DB';
  const modalBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
  const modalBorder = isDark ? UX4GColors.neutral700 : '#E5E7EB';

  const selectedLang = LANGUAGES.find((l) => l.id === selectedId) || LANGUAGES[0];

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
          Choose your interface language
        </Text>
        <Text style={[styles.subtitle, { color: subtleText }]}>
          Switch the portal to a language you read most comfortably. You can
          change this anytime from the header.
        </Text>

        {/* Field Label */}
        <Text style={[styles.fieldLabel, { color: titleColor }]}>
          Interface Language
        </Text>

        {/* Dropdown Trigger */}
        <TouchableOpacity
          style={[
            styles.dropdownTrigger,
            {
              backgroundColor: inputBg,
              borderColor: isOpen ? primaryColor : inputBorder,
              borderWidth: isOpen ? 1.5 : 1,
            },
          ]}
          onPress={() => setIsOpen(true)}
          activeOpacity={0.7}
        >
          <Text style={{ fontSize: 18, marginRight: 8 }}>🌐</Text>
          <Text style={[styles.dropdownValueText, { color: titleColor }]}>
            {selectedLang.native} ({selectedLang.english})
          </Text>
          <Text style={{ fontSize: 14, color: mutedText }}>▼</Text>
        </TouchableOpacity>

        {/* Helper Note */}
        <Text style={[styles.helperText, { color: mutedText }]}>
          Auto-detected from your browser preferences. Changing this updates the
          portal immediately — no page reload needed.
        </Text>
      </ScrollView>

      {/* Dropdown Modal / Picker */}
      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsOpen(false)}
        >
          <View
            style={[
              styles.modalCard,
              { backgroundColor: modalBg, borderColor: modalBorder },
            ]}
          >
            {LANGUAGES.map((lang) => {
              const isSelected = selectedId === lang.id;
              return (
                <TouchableOpacity
                  key={lang.id}
                  style={[
                    styles.langItem,
                    isSelected && {
                      backgroundColor: isDark ? '#2D1B69' : '#F3E8FF',
                    },
                  ]}
                  onPress={() => {
                    setSelectedId(lang.id);
                    setIsOpen(false);
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text
                      style={[
                        styles.langNativeText,
                        {
                          color: isSelected ? primaryColor : titleColor,
                          fontWeight: isSelected ? '600' : '500',
                        },
                      ]}
                    >
                      {lang.native}
                    </Text>
                    <Text
                      style={[
                        styles.langEnglishText,
                        {
                          color: isSelected ? primaryColor : mutedText,
                        },
                      ]}
                    >
                      {lang.english}
                    </Text>
                  </View>
                  {isSelected && (
                    <Text style={{ color: primaryColor, fontWeight: '700' }}>
                      ✓
                    </Text>
                  )}
                </TouchableOpacity>
              );
            })}

            <View
              style={[
                styles.modalDivider,
                {
                  backgroundColor: isDark
                    ? UX4GColors.neutral700
                    : '#E5E7EB',
                },
              ]}
            />

            <TouchableOpacity
              style={styles.seeAllButton}
              onPress={() => setIsOpen(false)}
            >
              <Text style={[styles.seeAllText, { color: primaryColor }]}>
                See all 22 scheduled languages
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

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
    lineHeight: 20,
    marginBottom: 24,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
  },
  dropdownTrigger: {
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownValueText: {
    flex: 1,
    fontSize: 14,
  },
  helperText: {
    fontSize: 13,
    lineHeight: 18,
    marginTop: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    padding: 24,
  },
  modalCard: {
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 8,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 16,
  },
  langItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  langNativeText: {
    fontSize: 15,
  },
  langEnglishText: {
    fontSize: 13,
    marginTop: 2,
  },
  modalDivider: {
    height: 1,
    marginVertical: 4,
  },
  seeAllButton: {
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seeAllText: {
    fontSize: 14,
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
  Modal,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gDividerOrientation,
  Ux4gCard,
  UX4GColors,
} from 'ux4g-react-native-design-system';

const LANGUAGES = [
  { id: 'en', native: 'English', english: 'United States' },
  { id: 'hi', native: 'हिंदी', english: 'Hindi' },
  { id: 'mr', native: 'मराठी', english: 'Marathi' },
  { id: 'ta', native: 'தமிழ்', english: 'Tamil' },
  { id: 'te', native: 'తెలుగు', english: 'Telegu' },
  { id: 'bn', native: 'বাংলা', english: 'Bengali' },
];

/// Card Style variant — language switcher inside a white card on purple background.
export const LanguageSwitcherCardScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const [selectedId, setSelectedId] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  const screenBg = isDark ? UX4GColors.primary800 : UX4GColors.primary100;
  const cardBg = isDark ? '#1A1A1A' : '#FFFFFF';
  const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
  const subtleText = isDark ? UX4GColors.neutral400 : '#4B5563';
  const mutedText = isDark ? UX4GColors.neutral500 : '#6B7280';
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const inputBg = isDark ? UX4GColors.neutral950 : '#FFFFFF';
  const inputBorder = isDark ? UX4GColors.neutral700 : '#D1D5DB';
  const modalBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
  const modalBorder = isDark ? UX4GColors.neutral700 : '#E5E7EB';

  const selectedLang = LANGUAGES.find((l) => l.id === selectedId) || LANGUAGES[0];

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
            Choose your interface language
          </Text>
          <Text style={[styles.subtitle, { color: subtleText }]}>
            Switch the portal to a language you read most comfortably. You can
            change this anytime from the header.
          </Text>

          {/* Field Label */}
          <Text style={[styles.fieldLabel, { color: titleColor }]}>
            Interface Language
          </Text>

          {/* Dropdown Trigger */}
          <TouchableOpacity
            style={[
              styles.dropdownTrigger,
              {
                backgroundColor: inputBg,
                borderColor: isOpen ? primaryColor : inputBorder,
                borderWidth: isOpen ? 1.5 : 1,
              },
            ]}
            onPress={() => setIsOpen(true)}
            activeOpacity={0.7}
          >
            <Text style={{ fontSize: 18, marginRight: 8 }}>🌐</Text>
            <Text style={[styles.dropdownValueText, { color: titleColor }]}>
              {selectedLang.native} ({selectedLang.english})
            </Text>
            <Text style={{ fontSize: 14, color: mutedText }}>▼</Text>
          </TouchableOpacity>

          {/* Helper Note */}
          <Text style={[styles.helperText, { color: mutedText }]}>
            Auto-detected from your browser preferences. Changing this updates the
            portal immediately — no page reload needed.
          </Text>
        </Ux4gCard>
      </ScrollView>

      {/* Dropdown Modal */}
      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsOpen(false)}
        >
          <View
            style={[
              styles.modalCard,
              { backgroundColor: modalBg, borderColor: modalBorder },
            ]}
          >
            {LANGUAGES.map((lang) => {
              const isSelected = selectedId === lang.id;
              return (
                <TouchableOpacity
                  key={lang.id}
                  style={[
                    styles.langItem,
                    isSelected && {
                      backgroundColor: isDark ? '#2D1B69' : '#F3E8FF',
                    },
                  ]}
                  onPress={() => {
                    setSelectedId(lang.id);
                    setIsOpen(false);
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text
                      style={[
                        styles.langNativeText,
                        {
                          color: isSelected ? primaryColor : titleColor,
                          fontWeight: isSelected ? '600' : '500',
                        },
                      ]}
                    >
                      {lang.native}
                    </Text>
                    <Text
                      style={[
                        styles.langEnglishText,
                        {
                          color: isSelected ? primaryColor : mutedText,
                        },
                      ]}
                    >
                      {lang.english}
                    </Text>
                  </View>
                  {isSelected && (
                    <Text style={{ color: primaryColor, fontWeight: '700' }}>
                      ✓
                    </Text>
                  )}
                </TouchableOpacity>
              );
            })}

            <View
              style={[
                styles.modalDivider,
                {
                  backgroundColor: isDark
                    ? UX4GColors.neutral700
                    : '#E5E7EB',
                },
              ]}
            />

            <TouchableOpacity
              style={styles.seeAllButton}
              onPress={() => setIsOpen(false)}
            >
              <Text style={[styles.seeAllText, { color: primaryColor }]}>
                See all 22 scheduled languages
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

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
    lineHeight: 20,
    marginBottom: 24,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
  },
  dropdownTrigger: {
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownValueText: {
    flex: 1,
    fontSize: 14,
  },
  helperText: {
    fontSize: 13,
    lineHeight: 18,
    marginTop: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    padding: 24,
  },
  modalCard: {
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 8,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 16,
  },
  langItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  langNativeText: {
    fontSize: 15,
  },
  langEnglishText: {
    fontSize: 13,
    marginTop: 2,
  },
  modalDivider: {
    height: 1,
    marginVertical: 4,
  },
  seeAllButton: {
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seeAllText: {
    fontSize: 14,
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
          Language Switcher ({isCard ? 'Card Style' : 'Default'})
        </h1>
        <p className="wb-description">
          {isCard
            ? 'Interface language selection with dropdown inside a card container with light purple background.'
            : 'Interface language selection with dropdown on white background.'}
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
                      setIsDropdownOpen(false);
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
                      setIsDropdownOpen(false);
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
                    {/* Main Content Area */}
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
                          lineHeight: '28px',
                        }}
                      >
                        Choose your interface language
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
                        Switch the portal to a language you read most comfortably. You can change this anytime from the header.
                      </div>

                      {/* Field Label */}
                      <div
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: colors.titleColor,
                          marginBottom: '8px',
                        }}
                      >
                        Interface Language
                      </div>

                      {/* Dropdown Container */}
                      <div
                        ref={dropdownRef}
                        style={{ position: 'relative', width: '100%' }}
                      >
                        <div
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          style={{
                            height: '48px',
                            backgroundColor: colors.inputBg,
                            border: `1.5px solid ${
                              isDropdownOpen ? colors.primaryColor : colors.inputBorder
                            }`,
                            borderRadius: '8px',
                            padding: '0 12px',
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                            userSelect: 'none',
                            boxSizing: 'border-box',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{
                              fontSize: '20px',
                              color: colors.subtleText,
                              marginRight: '8px',
                            }}
                          >
                            language
                          </span>

                          <span
                            style={{
                              flex: 1,
                              fontSize: '14px',
                              fontWeight: 500,
                              color: colors.titleColor,
                            }}
                          >
                            {selectedLang.native} ({selectedLang.english})
                          </span>

                          <span
                            className="material-symbols-outlined"
                            style={{
                              fontSize: '20px',
                              color: colors.subtleText,
                            }}
                          >
                            {isDropdownOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                          </span>
                        </div>

                        {/* Dropdown Menu Popup */}
                        {isDropdownOpen && (
                          <div
                            style={{
                              position: 'absolute',
                              top: 'calc(100% + 4px)',
                              left: 0,
                              right: 0,
                              backgroundColor: colors.dropdownBg,
                              border: `1px solid ${colors.dropdownBorder}`,
                              borderRadius: '8px',
                              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                              zIndex: 100,
                              overflow: 'hidden',
                              maxHeight: '300px',
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            <div style={{ overflowY: 'auto', flex: 1 }}>
                              {LANGUAGES.map((lang) => {
                                const isSelected = selectedId === lang.id;
                                return (
                                  <div
                                    key={lang.id}
                                    onClick={() => {
                                      setSelectedId(lang.id);
                                      setIsDropdownOpen(false);
                                    }}
                                    style={{
                                      padding: '10px 16px',
                                      backgroundColor: isSelected
                                        ? colors.selectedItemBg
                                        : 'transparent',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      cursor: 'pointer',
                                      borderBottom: `1px solid ${
                                        isDark ? 'rgba(255,255,255,0.04)' : '#F3F4F6'
                                      }`,
                                      transition: 'background-color 0.15s ease',
                                    }}
                                  >
                                    <div>
                                      <div
                                        style={{
                                          fontSize: '14px',
                                          fontWeight: isSelected ? 600 : 500,
                                          color: isSelected
                                            ? colors.primaryColor
                                            : colors.titleColor,
                                        }}
                                      >
                                        {lang.native}
                                      </div>
                                      <div
                                        style={{
                                          fontSize: '12px',
                                          color: isSelected
                                            ? colors.primaryColor
                                            : colors.mutedText,
                                          marginTop: '1px',
                                        }}
                                      >
                                        {lang.english}
                                      </div>
                                    </div>

                                    {isSelected && (
                                      <span
                                        className="material-symbols-outlined"
                                        style={{
                                          fontSize: '18px',
                                          color: colors.primaryColor,
                                          fontWeight: 'bold',
                                        }}
                                      >
                                        check
                                      </span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>

                            {/* Scheduled Languages Footer */}
                            <div
                              onClick={() => setIsDropdownOpen(false)}
                              style={{
                                padding: '12px',
                                textAlign: 'center',
                                fontSize: '13px',
                                fontWeight: 500,
                                color: colors.primaryColor,
                                cursor: 'pointer',
                                borderTop: `1px solid ${colors.dropdownBorder}`,
                                backgroundColor: isDark
                                  ? UX4GColors.neutral950
                                  : UX4GColors.neutral50,
                              }}
                            >
                              See all 22 scheduled languages
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Helper text */}
                      <div
                        style={{
                          fontSize: '13px',
                          lineHeight: '18px',
                          color: colors.mutedText,
                          marginTop: '12px',
                        }}
                      >
                        Auto-detected from your browser preferences. Changing this updates the portal immediately — no page reload needed.
                      </div>
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
