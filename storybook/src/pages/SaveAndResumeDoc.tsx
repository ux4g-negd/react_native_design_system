import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface SaveAndResumeDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

export const SaveAndResumeDoc: React.FC<SaveAndResumeDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const colors = useMemo(() => {
    const isCard = variant === 'Card style';
    return {
      screenBg: isCard
        ? (isDark ? UX4GColors.primary900 : '#ECE8FF')
        : (isDark ? UX4GColors.neutral900 : '#FFFFFF'),
      headerBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral800 : '#F0F0F2',
      bannerBg: isDark ? UX4GColors.orange900 : UX4GColors.orange50,
      bannerBorder: isDark ? UX4GColors.orange600 : UX4GColors.orange300,
      titleColor: isDark ? UX4GColors.neutral0 : '#1F2937',
      chevronColor: isDark ? UX4GColors.neutral300 : '#374151',
      stepBadgeBg: isDark ? '#592D00' : '#FFE7BA',
      stepBadgeText: isDark ? '#FFC973' : '#AD4E00',
      savedTextColor: isDark ? UX4GColors.neutral400 : '#6B7280',
      discardText: isDark ? '#FF7875' : '#A8382B',
      resumeBtnBg: isDark ? UX4GColors.primary300 : '#432CBB',
      resumeBtnText: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      shimmerBase: isCard
        ? (isDark ? '#2F1F56' : '#EAE5FC')
        : (isDark ? UX4GColors.neutral800 : '#E5E7EB'),
      shimmerHighlight: isCard
        ? (isDark ? '#3F2C70' : '#F6F3FF')
        : (isDark ? UX4GColors.neutral700 : '#F3F4F6'),
      footerText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
    };
  }, [isDark, variant]);

  const codeString = useMemo(() => {
    const isCard = variant === 'Card style';
    return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-components';

export const SaveAndResumePattern = ({
  isDark = ${isDark},
  variant = '${variant}',
  onDiscard = () => {},
  onResume = () => {},
}: {
  isDark?: boolean;
  variant?: 'Default' | 'Card style';
  onDiscard?: () => void;
  onResume?: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const isCard = variant === 'Card style';

  return (
    <View style={[styles.screen, { backgroundColor: isDark ? UX4GColors.neutral900 : (isCard ? '#ECE8FF' : '#FFFFFF') }]}>
      {/* App Header */}
      <View style={[styles.header, { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF', borderBottomColor: isDark ? UX4GColors.neutral800 : '#F0F0F2' }]}>
        <View style={styles.headerLeft}>
          <Image source={{ uri: '/national_emblem_logo.svg' }} style={styles.emblemLogo} resizeMode="contain" />
          <View style={[styles.headerDivider, { backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300 }]} />
          <Image source={{ uri: '/Union.svg' }} style={[styles.unionLogo, { tintColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600 }]} resizeMode="contain" />
        </View>
        <TouchableOpacity style={[styles.menuBtn, { borderColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200 }]}>
          <Text style={[styles.menuIcon, { color: isDark ? UX4GColors.primary300 : UX4GColors.primary }]}>☰</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Draft Application Banner Card */}
        <View
          style={[
            styles.bannerCard,
            {
              backgroundColor: isDark ? UX4GColors.orange900 : UX4GColors.orange50,
              borderColor: isDark ? UX4GColors.orange600 : UX4GColors.orange300,
            },
          ]}
        >
          {/* Header Row with Title and Toggle Chevron */}
          <TouchableOpacity
            style={styles.bannerHeaderRow}
            onPress={() => setIsExpanded(!isExpanded)}
            activeOpacity={0.7}
          >
            <Text style={[styles.bannerTitle, { color: isDark ? UX4GColors.neutral0 : '#1F2937' }]}>
              Income Certificate Application
            </Text>
            <Text style={[styles.chevronIcon, { color: isDark ? UX4GColors.neutral300 : '#374151' }]}>
              {isExpanded ? '▲' : '▼'}
            </Text>
          </TouchableOpacity>

          {/* Step Tag */}
          <View style={[styles.stepBadge, { backgroundColor: isDark ? '#592D00' : '#FFE7BA' }]}>
            <Text style={[styles.stepBadgeText, { color: isDark ? '#FFC973' : '#AD4E00' }]}>
              Step 3 of 5 Document Upload
            </Text>
          </View>

          {/* Last Saved Info */}
          <Text style={[styles.savedText, { color: isDark ? UX4GColors.neutral400 : '#6B7280' }]}>
            Last saved: 10 Apr 2026
          </Text>

          {/* Action Buttons Row */}
          {isExpanded && (
            <View style={styles.actionButtonsRow}>
              <TouchableOpacity
                style={styles.discardBtn}
                onPress={onDiscard}
                activeOpacity={0.7}
              >
                <Text style={[styles.discardBtnText, { color: isDark ? '#FF7875' : '#A8382B' }]}>
                  Discard
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.resumeBtn,
                  { backgroundColor: isDark ? UX4GColors.primary300 : '#432CBB' },
                ]}
                onPress={onResume}
                activeOpacity={0.85}
              >
                <Text style={[styles.resumeBtnText, { color: isDark ? UX4GColors.neutral900 : '#FFFFFF' }]}>
                  Resume
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Skeleton Form Placeholders */}
        <View style={styles.skeletonContainer}>
          {/* Avatar + Bar Row */}
          <View style={styles.skeletonRow}>
            <View
              style={[
                styles.skeletonCircle,
                { backgroundColor: isCard ? (isDark ? '#2F1F56' : '#EAE5FC') : (isDark ? UX4GColors.neutral800 : '#E5E7EB') },
              ]}
            />
            <View
              style={[
                styles.skeletonBar,
                { backgroundColor: isCard ? (isDark ? '#2F1F56' : '#EAE5FC') : (isDark ? UX4GColors.neutral800 : '#E5E7EB') },
              ]}
            />
          </View>

          {/* Card 1 */}
          <View
            style={[
              styles.skeletonCard,
              { backgroundColor: isCard ? (isDark ? '#2F1F56' : '#EAE5FC') : (isDark ? UX4GColors.neutral800 : '#E5E7EB') },
            ]}
          />

          {/* Card 2 */}
          <View
            style={[
              styles.skeletonCard,
              { backgroundColor: isCard ? (isDark ? '#2F1F56' : '#EAE5FC') : (isDark ? UX4GColors.neutral800 : '#E5E7EB') },
            ]}
          />
        </View>

        {/* Brand Footer */}
        <View style={styles.footer}>
          <Text style={[styles.poweredByText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            Powered by -
          </Text>
          <Image source={{ uri: '/Digital_India_logo.svg' }} style={styles.digitalIndiaLogo} resizeMode="contain" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  emblemLogo: { height: 32, width: 24 },
  headerDivider: { width: 1, height: 26 },
  unionLogo: { height: 32, width: 44 },
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: { fontSize: 18 },
  scrollContainer: { padding: 16 },
  bannerCard: {
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 20,
  },
  bannerHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  bannerTitle: {
    fontSize: 15,
    fontWeight: '700',
    flex: 1,
    lineHeight: 20,
  },
  chevronIcon: {
    fontSize: 14,
    marginLeft: 8,
  },
  stepBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    marginBottom: 8,
  },
  stepBadgeText: {
    fontSize: 11.5,
    fontWeight: '600',
  },
  savedText: {
    fontSize: 13,
    marginBottom: 16,
  },
  actionButtonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 4,
  },
  discardBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  discardBtnText: {
    fontSize: 14,
    fontWeight: '600',
  },
  resumeBtn: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resumeBtnText: {
    fontSize: 14,
    fontWeight: '600',
  },
  skeletonContainer: {
    gap: 16,
    marginBottom: 24,
  },
  skeletonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  skeletonCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  skeletonBar: {
    flex: 1,
    height: 40,
    borderRadius: 8,
  },
  skeletonCard: {
    height: 110,
    borderRadius: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginVertical: 16,
  },
  poweredByText: { fontSize: 11, fontWeight: '500' },
  digitalIndiaLogo: { height: 22, width: 80 },
});
`;
  }, [isDark, variant]);

  const renderBannerContent = () => (
    <div
      style={{
        backgroundColor: colors.bannerBg,
        border: `1px solid ${colors.bannerBorder}`,
        borderRadius: 14,
        padding: '16px',
        marginBottom: 20,
        boxSizing: 'border-box',
      }}
    >
      {/* Title & Chevron Row */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          userSelect: 'none',
          marginBottom: 8,
        }}
      >
        <span
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: colors.titleColor,
            lineHeight: 1.3,
          }}
        >
          Income Certificate Application
        </span>
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: 22,
            color: colors.chevronColor,
            transition: 'transform 0.2s ease',
          }}
        >
          {isExpanded ? 'expand_less' : 'expand_more'}
        </span>
      </div>

      {/* Step Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          backgroundColor: colors.stepBadgeBg,
          borderRadius: 4,
          padding: '3px 8px',
          marginBottom: 8,
        }}
      >
        <span
          style={{
            fontSize: 11.5,
            fontWeight: 600,
            color: colors.stepBadgeText,
            lineHeight: 1.2,
          }}
        >
          Step 3 of 5 Document Upload
        </span>
      </div>

      {/* Last Saved Text */}
      <div
        style={{
          fontSize: 13,
          color: colors.savedTextColor,
          marginBottom: isExpanded ? 16 : 0,
        }}
      >
        Last saved: 10 Apr 2026
      </div>

      {/* Action Buttons Row */}
      {isExpanded && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            paddingTop: 4,
          }}
        >
          <button
            type="button"
            onClick={() => alert('Application draft discarded')}
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              color: colors.discardText,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              padding: '10px 0',
              textAlign: 'center',
              fontFamily: 'inherit',
            }}
          >
            Discard
          </button>

          <button
            type="button"
            onClick={() => alert('Resuming Income Certificate Application...')}
            style={{
              flex: 1,
              height: 40,
              backgroundColor: colors.resumeBtnBg,
              border: 'none',
              borderRadius: 8,
              color: colors.resumeBtnText,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'inherit',
              boxShadow: '0 2px 6px rgba(67, 44, 187, 0.2)',
              transition: 'transform 0.1s ease',
            }}
          >
            Resume
          </button>
        </div>
      )}
    </div>
  );

  const renderSkeletonSection = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
      {/* Circle + Bar Row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            backgroundColor: colors.shimmerBase,
            flexShrink: 0,
          }}
        />
        <div
          style={{
            flex: 1,
            height: 40,
            borderRadius: 8,
            backgroundColor: colors.shimmerBase,
          }}
        />
      </div>

      {/* Card 1 */}
      <div
        style={{
          height: 110,
          borderRadius: 12,
          backgroundColor: colors.shimmerBase,
        }}
      />

      {/* Card 2 */}
      <div
        style={{
          height: 110,
          borderRadius: 12,
          backgroundColor: colors.shimmerBase,
        }}
      />
    </div>
  );

  const renderLiveMockup = () => {
    return (
      <div
        style={{
          width: 360,
          height: 760,
          borderRadius: 24,
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
          backgroundColor: colors.screenBg,
          border: `1px solid ${isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}`,
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        {/* App Header */}
        <div style={{ backgroundColor: colors.headerBg }}>
          <div
            style={{
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <img
                src="/national_emblem_logo.svg"
                alt="National Emblem"
                style={{
                  height: 32,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />
              <div
                style={{
                  width: 1,
                  height: 28,
                  backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
                }}
              />
              <UnionLogo size={32} isDark={isDark} />
            </div>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                border: `1px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.neutral200}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 20,
                  color: isDark ? UX4GColors.primary300 : UX4GColors.primary,
                }}
              >
                menu
              </span>
            </div>
          </div>
          <div style={{ height: 1, backgroundColor: colors.border }} />
        </div>

        {/* Scrollable Container */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, padding: '16px' }}>
            {renderBannerContent()}
            {renderSkeletonSection()}
          </div>

          {/* Brand Footer */}
          <div
            style={{
              padding: '12px 0 20px 0',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: colors.footerText,
              }}
            >
              Powered by -
            </span>
            <img
              src="/Digital_India_logo.svg"
              alt="Digital India"
              style={{
                height: 22,
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
          <h1 className="wb-title">Save and Resume</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Pattern allowing users to seamlessly resume a previously saved application draft or discard it to start fresh.
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
                <div
                  className={`wb-preview-area ${isDark ? 'dark' : ''}`}
                  style={{ flexDirection: 'column', alignItems: 'center' }}
                >
                  {/* Knob Controls Toolbar */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 16,
                      marginBottom: 24,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Variant Knob */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700,
                        }}
                      >
                        Layout Variant:
                      </span>
                      <div
                        style={{
                          display: 'flex',
                          gap: 4,
                          backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
                          padding: 4,
                          borderRadius: 10,
                          border: `1px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.neutral200}`,
                        }}
                      >
                        {(['Default', 'Card style'] as VariantType[]).map((v) => (
                          <button
                            key={v}
                            type="button"
                            onClick={() => setVariant(v)}
                            style={{
                              padding: '6px 14px',
                              borderRadius: 6,
                              border: 'none',
                              fontSize: 12,
                              fontWeight: 600,
                              cursor: 'pointer',
                              backgroundColor: variant === v ? UX4GColors.primary : 'transparent',
                              color:
                                variant === v
                                  ? UX4GColors.neutral0
                                  : isDark
                                    ? UX4GColors.neutral400
                                    : UX4GColors.neutral600,
                              transition: 'all 0.2s ease',
                            }}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Render Live Mobile Mockup */}
                  {renderLiveMockup()}
                </div>
              </Ux4gThemeProvider>
            )}

            {/* 2. Code Tab */}
            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 16,
                    marginBottom: 16,
                    padding: '12px 16px',
                    backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
                    borderRadius: 8,
                    alignItems: 'center',
                    border: `1px solid ${isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}`,
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 600, color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }}>
                    Active Variant: <span style={{ color: UX4GColors.primary }}>{variant}</span>
                  </span>
                </div>
                <CodeBlock code={codeString} language="tsx" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveAndResumeDoc;
