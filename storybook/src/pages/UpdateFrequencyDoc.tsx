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
    subtitle: 'Get each notification the moment it arrives.',
  },
  {
    title: 'Daily Summary',
    subtitle: 'One digest every day at 6:00 PM.',
  },
  {
    title: 'Weekly Digest',
    subtitle: 'A round-up every Monday morning.',
  },
];

export const UpdateFrequencyDoc: React.FC<UpdateFrequencyDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [activeTabIdx, setActiveTabIdx] = useState<number>(1);
  const [frequency, setFrequency] = useState<string>('Immediately');

  // Colors matching Flutter notif_prefs_stories.dart
  const colors = useMemo(() => {
    const primary = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
    return {
      bgScreen: isDark ? UX4GColors.neutral950 : UX4GColors.neutral0,
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      cardBorder: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300,
      cardBg: isDark ? '#1A1A1A' : UX4GColors.neutral0,
      title: isDark ? UX4GColors.neutral0 : '#111827',
      primary,
      selectedBg: isDark ? 'rgba(163, 145, 255, 0.15)' : 'rgba(74, 43, 194, 0.08)',
      unselectedBg: isDark ? '#262626' : '#F3F4F6',
      titleSelected: primary,
      titleUnselected: isDark ? UX4GColors.neutral0 : '#111827',
      subtitleSelected: isDark ? 'rgba(163, 145, 255, 0.8)' : 'rgba(74, 43, 194, 0.8)',
      subtitleUnselected: isDark ? '#9CA3AF' : '#6B7280',
      mutedText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
    };
  }, [isDark]);

  // Clean TSX code string matching Flutter updateFrequencyComponent
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
} from 'ux4g-react-native-design-system';

export const UpdateFrequencyPattern = () => {
  const [frequency, setFrequency] = useState('Immediately');

  const options = [
    { title: 'Immediately', subtitle: 'Get each notification the moment it arrives.' },
    { title: 'Daily Summary', subtitle: 'One digest every day at 6:00 PM.' },
    { title: 'Weekly Digest', subtitle: 'A round-up every Monday morning.' },
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
      />
      <Ux4gDivider color={UX4GColors.neutral200} />

      {/* 2. Main Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Notification Preferences</Text>
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
          {options.map((item, idx) => {
            const isSelected = frequency === item.title;
            return (
              <TouchableOpacity
                key={item.title}
                activeOpacity={0.7}
                onPress={() => setFrequency(item.title)}
                style={[
                  styles.optionRow,
                  isSelected ? styles.selectedRow : styles.unselectedRow,
                  idx < options.length - 1 && { marginBottom: 10 },
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
                  <Text style={[styles.optionSubtitle, isSelected && styles.selectedSubtitleText]}>
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
  titleContainer: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 12 },
  titleText: { fontSize: 18, fontWeight: '700', color: '#111827', letterSpacing: -0.2 },
  tabsContainer: { paddingHorizontal: 16 },
  card: { backgroundColor: UX4GColors.neutral0, borderRadius: 12, borderWidth: 1, borderColor: UX4GColors.neutral300, padding: 14 },
  optionRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 12, borderRadius: 10 },
  selectedRow: { backgroundColor: 'rgba(74, 43, 194, 0.08)' },
  unselectedRow: { backgroundColor: '#F3F4F6' },
  textContainer: { flex: 1, marginLeft: 12 },
  optionTitle: { fontSize: 13, fontWeight: '600', color: '#111827' },
  selectedTitleText: { color: UX4GColors.primary },
  optionSubtitle: { fontSize: 11, color: '#6B7280', marginTop: 2 },
  selectedSubtitleText: { color: 'rgba(74, 43, 194, 0.8)' },
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
            {/* Title */}
            <div style={{ padding: '16px 16px 12px 16px' }}>
              <h2
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: colors.title,
                  margin: 0,
                  letterSpacing: '-0.2px',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Notification Preferences
              </h2>
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
                gap: 8,
                overflowX: 'auto',
                padding: '0 16px 16px 16px',
                cursor: 'grab',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
              }}
            >
              {TAB_CHIPS.map((chip, idx) => (
                <Ux4gChoiceChip
                  key={chip}
                  text={chip}
                  selected={activeTabIdx === idx}
                  onClick={() => setActiveTabIdx(idx)}
                  size="s"
                  borderRadius={6}
                />
              ))}
            </div>

            {/* Update Frequency Card */}
            <div style={{ padding: '0 16px 16px 16px', flex: 1 }}>
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 12,
                  border: `1px solid ${colors.cardBorder}`,
                  padding: 14,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                {FREQUENCY_OPTIONS.map((item) => {
                  const isSelected = frequency === item.title;
                  return (
                    <div
                      key={item.title}
                      onClick={() => setFrequency(item.title)}
                      style={{
                        padding: '12px 14px',
                        borderRadius: 10,
                        backgroundColor: isSelected ? colors.selectedBg : colors.unselectedBg,
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
                        color={colors.primary}
                      />

                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <span
                          style={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: isSelected ? colors.titleSelected : colors.titleUnselected,
                            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                          }}
                        >
                          {item.title}
                        </span>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 400,
                            color: isSelected ? colors.subtitleSelected : colors.subtitleUnselected,
                            marginTop: 2,
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

          {/* Brand Footer */}
          <div
            style={{
              padding: '14px 20px',
              display: 'flex',
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
