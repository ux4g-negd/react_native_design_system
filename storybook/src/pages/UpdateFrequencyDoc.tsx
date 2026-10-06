import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gRadioButton } from '../../../src/components/radio-button/RadioButton';
import { Ux4gChoiceChip, Ux4gChipGroup } from '../../../src/components/chips/Chips';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface UpdateFrequencyDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

const TAB_CHIPS = [
  'Notification channels',
  'Update Frequency',
  'Per Service Preferences',
  'Mandatory Notification',
  'WhatsApp notification',
  'Manage all Subscriptions',
];

interface FrequencyOption {
  title: string;
  subtitle: string;
}

const FREQUENCY_OPTIONS: FrequencyOption[] = [
  {
    title: 'Immediately',
    subtitle: 'Get each notification the moment it happens.',
  },
  {
    title: 'Daily Summary',
    subtitle: 'One digest every day at 6:00 PM.',
  },
  {
    title: 'Weekly Digest',
    subtitle: 'A roundup every Monday morning.',
  },
];

export const UpdateFrequencyDoc: React.FC<UpdateFrequencyDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [activeTabIdx, setActiveTabIdx] = useState<number>(1);
  const [frequency, setFrequency] = useState<string>('Immediately');

  // Colors
  const colors = useMemo(() => {
    return {
      bgScreen: isDark ? UX4GColors.neutral950 : UX4GColors.neutral0,
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      cardBorder: isDark ? '#334155' : '#E2E8F0',
      cardBg: isDark ? '#1E293B' : UX4GColors.neutral0,
      title: isDark ? UX4GColors.neutral0 : '#0F172A',
      subtitle: isDark ? '#94A3B8' : '#475569',
      tabActiveBg: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      tabActiveText: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      tabInactiveBg: isDark ? '#1E1E1E' : UX4GColors.neutral0,
      tabInactiveText: isDark ? '#D1D5DB' : '#1F2937',
      tabBorder: isDark ? '#333333' : '#E2E8F0',
      selectedCardBg: isDark ? 'rgba(79, 70, 229, 0.15)' : '#EEF2FF',
      selectedCardBorder: isDark ? UX4GColors.primary400 : '#C7D2FE',
      unselectedCardBg: isDark ? '#1E293B' : '#F8FAFC',
      unselectedCardBorder: isDark ? '#334155' : '#E2E8F0',
      titleSelected: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      titleUnselected: isDark ? UX4GColors.neutral0 : '#0F172A',
      subtitleSelected: isDark ? '#A5B4FC' : '#4F46E5',
      subtitleUnselected: isDark ? '#94A3B8' : '#475569',
      mutedText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
    };
  }, [isDark]);

  // Clean TSX code string matching UpdateFrequencyPattern
  const codeString = useMemo(() => {
    return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gRadioButton,
  Ux4gChoiceChip,
  Ux4gChipGroup,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-components';

export const UpdateFrequencyPattern = () => {
  const [frequency, setFrequency] = useState('Immediately');

  const options = [
    { title: 'Immediately', subtitle: 'Get each notification the moment it happens.' },
    { title: 'Daily Summary', subtitle: 'One digest every day at 6:00 PM.' },
    { title: 'Weekly Digest', subtitle: 'A roundup every Monday morning.' },
  ];

  return (
    <View style={styles.screen}>
      {/* 1. Official Government Header */}
      <Ux4gAppHeader
        title=""
        variant="light"
        elevation={0}
        useSafeArea={false}
        horizontalPadding={16}
        leadingSpacing={12}
        backgroundColor={UX4GColors.neutral0}
        borderColor={UX4GColors.neutral200}
        leadingWidgets={[
          <Image
            key="emblem"
            source={{ uri: '/national_emblem_logo.svg' }}
            style={styles.emblemLogo}
            resizeMode="contain"
          />,
          <View key="divider" style={styles.headerDivider} />,
          <Image
            key="union"
            source={{ uri: '/Union.svg' }}
            style={styles.unionLogo}
            resizeMode="contain"
          />,
        ]}
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
      <Ux4gDivider color={UX4GColors.neutral200} />

      {/* 2. Main Title & Subtitle */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Notification Preferences</Text>
        <Text style={styles.subtitleText}>
          Control how and when the portal contacts you. Changes are saved automatically.
        </Text>
      </View>

      {/* 3. Horizontal Filter Chips */}
      <Ux4gChipGroup arrangement="horizontal" spacing={8} containerStyle={styles.tabsContainer}>
        <Ux4gChoiceChip text="Notification channels" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Update Frequency" selected={true} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Per Service Preferences" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Mandatory Notification" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="WhatsApp notification" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Manage all Subscriptions" selected={false} onClick={() => {}} size="s" borderRadius={6} />
      </Ux4gChipGroup>

      {/* 4. Update Frequency Card */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Update frequency</Text>
          <Text style={styles.cardSubtitle}>
            Decide how often the portal batches and sends your notifications.
          </Text>

          {options.map((item, idx) => {
            const isSelected = frequency === item.title;
            return (
              <TouchableOpacity
                key={item.title}
                activeOpacity={0.7}
                onPress={() => setFrequency(item.title)}
                style={[
                  styles.optionCard,
                  isSelected ? styles.selectedCard : styles.unselectedCard,
                  idx < options.length - 1 && { marginBottom: 12 },
                ]}
              >
                <Ux4gRadioButton
                  value={item.title}
                  groupValue={frequency}
                  onChanged={(v) => setFrequency(v)}
                  color={UX4GColors.primary}
                />
                <View style={styles.textContainer}>
                  <Text style={[styles.optionTitle, isSelected && styles.selectedTitleText]}>
                    {item.title}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={[styles.optionSubtitle, isSelected && styles.selectedSubtitleText]}
                  >
                    {item.subtitle}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.poweredByText}>Powered by -</Text>
        <Image
          source={{ uri: '/Digital_India_logo.svg' }}
          style={styles.digitalIndiaLogo}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: UX4GColors.neutral0 },
  emblemLogo: { width: 32, height: 32 },
  headerDivider: { width: 1, height: 28, backgroundColor: UX4GColors.neutral300, marginHorizontal: 4 },
  unionLogo: { width: 32, height: 32 },
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#C0B3FF',
    backgroundColor: UX4GColors.neutral0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 18,
    color: UX4GColors.primary,
  },
  titleContainer: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 12 },
  titleText: { fontSize: 20, fontWeight: '700', color: '#0F172A', letterSpacing: -0.2 },
  subtitleText: { fontSize: 13, color: '#475569', marginTop: 6, lineHeight: 18 },
  tabsContainer: { paddingHorizontal: 16 },
  card: {
    backgroundColor: UX4GColors.neutral0,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    padding: 16,
  },
  cardTitle: { fontSize: 18, fontWeight: '700', color: '#0F172A' },
  cardSubtitle: { fontSize: 13, color: '#475569', marginTop: 4, marginBottom: 16, lineHeight: 18 },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1.5,
  },
  selectedCard: {
    backgroundColor: '#EEF2FF',
    borderColor: '#C7D2FE',
  },
  unselectedCard: {
    backgroundColor: '#F8FAFC',
    borderColor: '#E2E8F0',
  },
  textContainer: { flex: 1, marginLeft: 12 },
  optionTitle: { fontSize: 14, fontWeight: '700', color: '#0F172A' },
  selectedTitleText: { color: UX4GColors.primary },
  optionSubtitle: { fontSize: 12.5, color: '#475569', marginTop: 2 },
  selectedSubtitleText: { color: '#4F46E5' },
  footer: { paddingVertical: 14, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 4 },
  poweredByText: { fontSize: 11, color: UX4GColors.neutral400 },
  digitalIndiaLogo: { height: 24, width: 80 },
});`;
  }, []);

  // Interactive Live Mockup for Web Preview
  const renderLiveMockup = () => {
    return (
      <div
        style={{
          width: 360,
          height: 760,
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: isDark
            ? '0 12px 32px rgba(0, 0, 0, 0.6), 0 0 0 1px #333333'
            : '0 12px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px #E5E7EB',
          backgroundColor: colors.bgScreen,
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* Official Header */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <Ux4gAppHeader
            title=""
            variant="light"
            elevation={0}
            useSafeArea={false}
            height={56}
            horizontalPadding={16}
            leadingSpacing={12}
            backgroundColor={colors.headerBg}
            borderColor={colors.border}
            leadingWidgets={[
              <img
                key="emblem"
                src="/national_emblem_logo.svg"
                alt="National Emblem"
                style={{
                  height: 32,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />,
              <div
                key="divider"
                style={{
                  width: 1,
                  height: 28,
                  backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
                  margin: '0 4px',
                }}
              />,
              <UnionLogo key="union" size={32} isDark={isDark} />,
            ]}
            actions={[
              {
                customWidget: (
                  <button
                    key="menu"
                    type="button"
                    onClick={() => {}}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      backgroundColor: isDark ? 'transparent' : '#FFFFFF',
                      border: `1.5px solid ${isDark ? UX4GColors.primary400 : '#C0B3FF'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M4 6h16M4 12h16M4 18h16" stroke={isDark ? UX4GColors.primary300 : UX4GColors.primary} strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </button>
                ),
              },
            ]}
          />
          <div
            style={{
              height: 1,
              backgroundColor: colors.border,
              width: '100%',
            }}
          />
        </div>

        {/* Content Body */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
            {/* Main Title & Subtitle */}
            <div style={{ padding: '16px 16px 10px 16px', flexShrink: 0 }}>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: colors.title,
                  margin: 0,
                  letterSpacing: '-0.2px',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Notification Preferences
              </h2>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  color: colors.subtitle,
                  margin: '6px 0 0 0',
                  lineHeight: '18px',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Control how and when the portal contacts you. Changes are saved automatically.
              </p>
            </div>

            {/* Horizontal Scrollable Filter Chips */}
            <div
              onMouseDown={(e) => {
                const el = e.currentTarget;
                let startX = e.pageX - el.offsetLeft;
                let scrollLeft = el.scrollLeft;
                let isDown = true;
                const onMouseMove = (me: MouseEvent) => {
                  if (!isDown) return;
                  me.preventDefault();
                  const x = me.pageX - el.offsetLeft;
                  const walk = (x - startX) * 1.5;
                  el.scrollLeft = scrollLeft - walk;
                };
                const onMouseUp = () => {
                  isDown = false;
                  window.removeEventListener('mousemove', onMouseMove);
                  window.removeEventListener('mouseup', onMouseUp);
                };
                window.addEventListener('mousemove', onMouseMove);
                window.addEventListener('mouseup', onMouseUp);
              }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                flexShrink: 0,
                minHeight: 44,
                gap: 8,
                overflowX: 'auto',
                padding: '4px 16px 12px 16px',
                cursor: 'grab',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
              }}
            >
              {TAB_CHIPS.map((chip, idx) => {
                const isSelected = activeTabIdx === idx;
                const activeBg = isDark ? UX4GColors.primary300 : UX4GColors.primary;
                const activeText = isDark ? UX4GColors.gray900 : UX4GColors.neutral0;
                const inactiveBg = isDark ? '#1E1E1E' : UX4GColors.neutral0;
                const inactiveBorder = isDark ? '#333333' : '#E2E8F0';
                const inactiveText = isDark ? '#D1D5DB' : '#1F2937';

                return (
                  <Ux4gChoiceChip
                    key={chip}
                    text={chip}
                    selected={isSelected}
                    onClick={() => setActiveTabIdx(idx)}
                    size="s"
                    borderRadius={6}
                    containerStyle={{
                      backgroundColor: isSelected ? activeBg : inactiveBg,
                      borderColor: isSelected ? activeBg : inactiveBorder,
                      borderWidth: 1,
                    }}
                    textStyle={{
                      color: isSelected ? activeText : inactiveText,
                      fontWeight: isSelected ? '600' : '500',
                    }}
                  />
                );
              })}
            </div>

            {/* Update Frequency Card */}
            <div style={{ padding: '0 16px 16px 16px', flex: 1 }}>
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  border: `1.5px solid ${colors.cardBorder}`,
                  padding: '16px 16px 16px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Inside Card Header */}
                <div style={{ marginBottom: 14 }}>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: colors.title,
                      margin: 0,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Update frequency
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 400,
                      color: colors.subtitle,
                      margin: '4px 0 0 0',
                      lineHeight: '18px',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Decide how often the portal batches and sends your notifications.
                  </p>
                </div>

                {/* Options list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {FREQUENCY_OPTIONS.map((item) => {
                    const isSelected = frequency === item.title;
                    return (
                      <div
                        key={item.title}
                        onClick={() => setFrequency(item.title)}
                        style={{
                          padding: '12px 14px',
                          borderRadius: 12,
                          backgroundColor: isSelected ? colors.selectedCardBg : colors.unselectedCardBg,
                          border: `1.5px solid ${isSelected ? colors.selectedCardBorder : colors.unselectedCardBorder}`,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 12,
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        <Ux4gRadioButton
                          value={item.title}
                          groupValue={frequency}
                          onChanged={(v) => setFrequency(v)}
                          color={colors.titleSelected}
                        />

                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                          <span
                            style={{
                              fontSize: 14,
                              fontWeight: 700,
                              color: isSelected ? colors.titleSelected : colors.titleUnselected,
                              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                            }}
                          >
                            {item.title}
                          </span>
                          <span
                            style={{
                              fontSize: 12.5,
                              fontWeight: 400,
                              color: isSelected ? colors.subtitleSelected : colors.subtitleUnselected,
                              marginTop: 2,
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                            }}
                          >
                            {item.subtitle}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Brand Footer */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '14px 20px',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 400,
                color: colors.mutedText,
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              }}
            >
              Powered by -
            </span>
            <img
              src="/Digital_India_logo.svg"
              alt="Digital India"
              style={{
                height: 24,
                filter: isDark ? 'brightness(0) invert(1)' : 'none',
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Update Frequency</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Notification delivery frequency options (Immediately, Daily Summary, Weekly Digest) inside a card. Fully compatible with light and dark mode.
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
              <Ux4gThemeProvider isDark={isDark}>
                <div className={`wb-preview-area ${isDark ? 'dark' : ''}`} style={{ flexDirection: 'column', alignItems: 'center' }}>
                  {renderLiveMockup()}
                </div>
              </Ux4gThemeProvider>
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
