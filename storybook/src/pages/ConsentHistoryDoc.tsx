import React, { useState, useMemo, useRef } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';

interface ConsentHistoryDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

interface ConsentItem {
  id: string;
  title: string;
  scheme: string;
  filterKey: string;
  dataShared: string;
  givenDate: string;
  status: 'Active' | 'Withdrawn' | 'Expired';
}

export const ConsentHistoryDoc: React.FC<ConsentHistoryDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['PM-Kisan', 'PMAY']);

  const colors = useMemo(() => {
    return {
      screenBg: variant === 'Card style'
        ? (isDark ? UX4GColors.primary900 : UX4GColors.primary100)
        : (isDark ? UX4GColors.gray900 : UX4GColors.gray100),
      cardBg: isDark ? UX4GColors.gray900 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.gray900,
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      primary: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      chipSelectedBg: isDark ? UX4GColors.primary900 : UX4GColors.primary100,
      chipSelectedBorder: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      chipSelectedText: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      chipUnselectedBg: isDark ? UX4GColors.gray900 : '#FFFFFF',
      chipUnselectedBorder: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      chipUnselectedText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
      activeTagBg: isDark ? UX4GColors.green900 : UX4GColors.green50,
      activeTagText: isDark ? UX4GColors.green300 : UX4GColors.green700,
      withdrawnTagBg: isDark ? UX4GColors.red900 : '#FCE8E6',
      withdrawnTagText: isDark ? UX4GColors.red300 : '#C5221F',
      expiredTagBg: isDark ? UX4GColors.gray800 : '#F1F3F4',
      expiredTagText: isDark ? UX4GColors.neutral50 : UX4GColors.gray800,
      footerText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
    };
  }, [isDark, variant]);

  const allConsents: ConsentItem[] = [
    {
      id: '1',
      title: 'Bank of India',
      scheme: 'PM Kisan',
      filterKey: 'PM-Kisan',
      dataShared: 'Aadhaar, Name',
      givenDate: '12 Jan 2024',
      status: 'Active',
    },
    {
      id: '2',
      title: 'Payment Corp',
      scheme: 'PM Kisan',
      filterKey: 'PM-Kisan',
      dataShared: 'Transaction ID',
      givenDate: '12 Jan 2024',
      status: 'Active',
    },
    {
      id: '3',
      title: 'SMS Gateway',
      scheme: 'PM Kisan',
      filterKey: 'PM-Kisan',
      dataShared: 'Mobile Number',
      givenDate: '15 Jan 2024',
      status: 'Withdrawn',
    },
    {
      id: '4',
      title: 'Housing Board',
      scheme: 'PMAY',
      filterKey: 'PMAY',
      dataShared: 'Address, Income',
      givenDate: '03 Mar 2023',
      status: 'Expired',
    },
  ];

  const toggleFilter = (filter: string) => {
    if (filter === 'All') {
      setSelectedFilters(['All']);
    } else {
      let newFilters = selectedFilters.filter((f) => f !== 'All');
      if (newFilters.includes(filter)) {
        newFilters = newFilters.filter((f) => f !== filter);
      } else {
        newFilters.push(filter);
      }
      if (newFilters.length === 0) {
        newFilters = ['All'];
      }
      setSelectedFilters(newFilters);
    }
  };

  const isChipSelected = (filter: string) => {
    if (filter === 'All') {
      return selectedFilters.includes('All') || selectedFilters.length === 0;
    }
    return selectedFilters.includes(filter);
  };

  const displayedConsents = allConsents.filter((item) => {
    if (selectedFilters.includes('All')) return true;
    return selectedFilters.includes(item.filterKey);
  });

  const codeString = useMemo(() => {
    const isCard = variant === 'Card style';
    return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gTag,
  Ux4gChoiceChip,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const ConsentHistoryPattern = ({
  isDark = ${isDark},
  variant = '${variant}',
}: {
  isDark?: boolean;
  variant?: 'Default' | 'Card style';
}) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['PM-Kisan', 'PMAY']);
  const isCard = variant === 'Card style';

  const filterOptions = ['All', 'PM-Kisan', 'PM-MKSSY', 'PMAY', 'PM-Ajay'];

  const allConsents = [
    { title: 'Bank of India', scheme: 'PM Kisan', filterKey: 'PM-Kisan', dataShared: 'Aadhaar, Name', givenDate: '12 Jan 2024', status: 'Active' },
    { title: 'Payment Corp', scheme: 'PM Kisan', filterKey: 'PM-Kisan', dataShared: 'Transaction ID', givenDate: '12 Jan 2024', status: 'Active' },
    { title: 'SMS Gateway', scheme: 'PM Kisan', filterKey: 'PM-Kisan', dataShared: 'Mobile Number', givenDate: '15 Jan 2024', status: 'Withdrawn' },
    { title: 'Housing Board', scheme: 'PMAY', filterKey: 'PMAY', dataShared: 'Address, Income', givenDate: '03 Mar 2023', status: 'Expired' },
  ];

  const displayedConsents = allConsents.filter((item) => {
    if (selectedFilters.includes('All')) return true;
    return selectedFilters.includes(item.filterKey);
  });

  return (
    <View style={[styles.screen, { backgroundColor: isDark ? UX4GColors.gray900 : (isCard ? UX4GColors.primary100 : UX4GColors.gray100) }]}>
      <Ux4gAppHeader variant="light" showBackButton={false} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={isCard ? [styles.cardContainer, { backgroundColor: isDark ? UX4GColors.gray900 : '#FFFFFF' }] : styles.flatContainer}>
          <Text style={[styles.headline, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
            Consent History
          </Text>
          <Text style={[styles.description, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            A complete audit trail of all your data sharing consents for government schemes.
          </Text>

          {/* Horizontal Chips */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipRow}>
            {filterOptions.map((label) => (
              <Ux4gChoiceChip
                key={label}
                text={label}
                selected={selectedFilters.includes(label)}
                onClick={() => {}}
              />
            ))}
          </ScrollView>

          {/* Consents List */}
          {displayedConsents.map((item, index) => (
            <View key={index} style={[styles.dataCard, { backgroundColor: isDark ? UX4GColors.gray900 : '#FFFFFF', borderColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200 }]}>
              <View style={styles.dataCardRow}>
                <Text style={[styles.dataTitle, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>{item.title}</Text>
                <Ux4gTag text={item.status} shape="circular" size="m" />
              </View>
              <Text style={styles.dataDetail}>Scheme · {item.scheme}</Text>
              <Text style={styles.dataDetail}>Data · {item.dataShared}</Text>
              <Text style={styles.dataDetail}>Given · {item.givenDate}</Text>
              <TouchableOpacity style={{ marginTop: 12 }}>
                <Text style={styles.viewLink}>View</Text>
              </TouchableOpacity>
            </View>
          ))}

          {/* Footer Info */}
          <View style={styles.footerInfo}>
            <Text style={styles.counterText}>
              Showing {displayedConsents.length} of {allConsents.length} consents
            </Text>
            <TouchableOpacity style={{ marginTop: 8 }}>
              <Text style={styles.downloadLink}>Download Consent History (PDF)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 24 }}>
              <Text style={styles.backLink}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  scrollContainer: { padding: 16 },
  flatContainer: { padding: 4 },
  cardContainer: { padding: 20, borderRadius: 16, elevation: 2 },
  headline: { fontSize: 20, fontWeight: '600', marginBottom: 8 },
  description: { fontSize: 14, lineHeight: 20, marginBottom: 20 },
  chipRow: { marginBottom: 20 },
  dataCard: { padding: 16, borderRadius: 12, borderWidth: 1, marginBottom: 12 },
  dataCardRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  dataTitle: { fontSize: 16, fontWeight: '600' },
  dataDetail: { fontSize: 13, lineHeight: 18, marginTop: 2 },
  viewLink: { fontSize: 14, fontWeight: '600', textDecorationLine: 'underline' },
  footerInfo: { alignItems: 'center', marginTop: 16 },
  counterText: { fontSize: 13 },
  downloadLink: { fontSize: 14, fontWeight: '500' },
  backLink: { fontSize: 16, fontWeight: '600' },
});
`;
  }, [isDark, variant]);

  const renderTagStyle = (status: 'Active' | 'Withdrawn' | 'Expired') => {
    switch (status) {
      case 'Active':
        return { bg: colors.activeTagBg, text: colors.activeTagText };
      case 'Withdrawn':
        return { bg: colors.withdrawnTagBg, text: colors.withdrawnTagText };
      case 'Expired':
        return { bg: colors.expiredTagBg, text: colors.expiredTagText };
    }
  };

  const renderHeadline = () => (
    <>
      {/* Headline */}
      <h2
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: colors.titleColor,
          textAlign: 'left',
          margin: '0 0 8px 0',
          letterSpacing: '-0.01em',
          lineHeight: '1.3',
        }}
      >
        Consent History
      </h2>

      {/* Description */}
      <p
        style={{
          fontSize: 14,
          fontWeight: 400,
          color: colors.subtleText,
          textAlign: 'left',
          margin: '0',
          lineHeight: '1.4',
        }}
      >
        A complete audit trail of all your data sharing consents for government schemes.
      </p>
    </>
  );

  const chipsScrollRef = useRef<HTMLDivElement>(null);
  const isDraggingChips = useRef(false);
  const startXChips = useRef(0);
  const scrollLeftChips = useRef(0);
  const dragDistanceChips = useRef(0);

  const handleChipsMouseDown = (e: React.MouseEvent) => {
    isDraggingChips.current = true;
    dragDistanceChips.current = 0;
    if (chipsScrollRef.current) {
      startXChips.current = e.pageX - chipsScrollRef.current.offsetLeft;
      scrollLeftChips.current = chipsScrollRef.current.scrollLeft;
    }
  };

  const handleChipsMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingChips.current || !chipsScrollRef.current) return;
    const x = e.pageX - chipsScrollRef.current.offsetLeft;
    const walk = x - startXChips.current;
    dragDistanceChips.current = Math.abs(walk);
    chipsScrollRef.current.scrollLeft = scrollLeftChips.current - walk;
  };

  const handleChipsMouseUpOrLeave = () => {
    isDraggingChips.current = false;
  };

  const handleChipsWheel = (e: React.WheelEvent) => {
    if (chipsScrollRef.current && e.deltaY !== 0) {
      chipsScrollRef.current.scrollLeft += e.deltaY;
    }
  };

  const renderChips = () => (
    <div
      ref={chipsScrollRef}
      onMouseDown={handleChipsMouseDown}
      onMouseMove={handleChipsMouseMove}
      onMouseUp={handleChipsMouseUpOrLeave}
      onMouseLeave={handleChipsMouseUpOrLeave}
      onWheel={handleChipsWheel}
      style={{
        width: '100%',
        display: 'flex',
        gap: 8,
        overflowX: 'auto',
        padding: '0 20px',
        boxSizing: 'border-box',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        cursor: 'grab',
        userSelect: 'none',
      } as React.CSSProperties}
      className="hide-scrollbar"
    >
      {['All', 'PM-Kisan', 'PM-MKSSY', 'PMAY', 'PM-Ajay'].map((chipLabel) => {
        const selected = isChipSelected(chipLabel);
        return (
          <button
            key={chipLabel}
            type="button"
            onClick={() => {
              if (dragDistanceChips.current < 5) {
                toggleFilter(chipLabel);
              }
            }}
            style={{
              padding: '6px 14px',
              borderRadius: 8,
              border: `1px solid ${selected ? colors.chipSelectedBorder : colors.chipUnselectedBorder}`,
              backgroundColor: selected ? colors.chipSelectedBg : colors.chipUnselectedBg,
              color: selected ? colors.chipSelectedText : colors.chipUnselectedText,
              fontSize: 13,
              fontWeight: 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              transition: 'all 0.15s ease',
            }}
          >
            {chipLabel}
          </button>
        );
      })}
    </div>
  );

  const renderCards = () => (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
      {displayedConsents.length === 0 ? (
        <div style={{ padding: '40px 0', textAlign: 'center', color: colors.subtleText, fontSize: 14 }}>
          No consents found for the selected filters.
        </div>
      ) : (
        displayedConsents.map((item) => {
          const tagStyle = renderTagStyle(item.status);
          return (
            <div
              key={item.id}
              style={{
                width: '100%',
                padding: 16,
                backgroundColor: colors.cardBg,
                borderRadius: 8,
                border: `1px solid ${colors.border}`,
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02)',
                boxSizing: 'border-box',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: isDark ? '#FFFFFF' : UX4GColors.gray900, letterSpacing: '-0.01em' }}>
                  {item.title}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: '2px 10px',
                    borderRadius: 12,
                    backgroundColor: tagStyle.bg,
                    color: tagStyle.text,
                    lineHeight: '1.2',
                  }}
                >
                  {item.status}
                </span>
              </div>
              {/* Card Detail Rows (2-column table layout) */}
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {[{ label: 'Scheme', value: item.scheme }, { label: 'Data', value: item.dataShared }, { label: 'Given', value: item.givenDate }].map((row) => (
                  <div key={row.label} style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ width: 60, flexShrink: 0, fontSize: 13.5, fontWeight: 500, color: colors.subtleText }}>
                      {row.label}
                    </span>
                    <span style={{ fontSize: 13.5, fontWeight: 700, color: colors.subtleText, marginRight: 4 }}>·</span>
                    <span style={{ fontSize: 13.5, fontWeight: 500, color: colors.titleColor, flex: 1 }}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <div
                onClick={() => {}}
                style={{
                  marginTop: 12,
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: 600,
                  color: colors.primary,
                  textDecoration: 'underline',
                  userSelect: 'none',
                }}
              >
                View
              </div>
            </div>
          );
        })
      )}

      {/* Footer Info & Navigation */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 8 }}>
        <div style={{ fontSize: 13, fontWeight: 400, color: colors.subtleText }}>
          Showing {displayedConsents.length} of {allConsents.length} consents
        </div>
        <div
          onClick={() => {}}
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: colors.primary,
            marginTop: 8,
            cursor: 'pointer',
          }}
        >
          Download Consent History (PDF)
        </div>
        <div
          onClick={() => {}}
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: colors.primary,
            marginTop: 24,
            cursor: 'pointer',
          }}
        >
          Back
        </div>
      </div>
    </div>
  );

  const renderLiveMockup = () => {
    return (
      <div
        style={{
          width: 360,
          height: 760,
          borderRadius: 20,
          boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)',
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
        {/* Consent Header */}
        <div style={{ backgroundColor: isDark ? UX4GColors.gray900 : '#FFFFFF' }}>
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
                  backgroundColor: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300,
                }}
              />
              <img
                src="/Union.svg"
                alt="Union Logo"
                style={{
                  height: 32,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />
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
                  color: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
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
          {variant === 'Card style' ? (
            <div style={{ flex: 1, padding: 16 }}>
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: '20px 0',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                }}
              >
                {/* Headline in padded area */}
                <div style={{ padding: '0 20px 20px 20px' }}>
                  {renderHeadline()}
                </div>
                {/* Chips: full-width with own padding */}
                {renderChips()}
                {/* Cards in padded area */}
                <div style={{ padding: '20px 20px 0 20px' }}>
                  {renderCards()}
                </div>
              </div>
            </div>
          ) : (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              {/* Headline in padded area */}
              <div style={{ padding: '20px 20px 0 20px' }}>
                {renderHeadline()}
              </div>
              {/* Chips: full-width with own padding, 20px gap */}
              <div style={{ padding: '20px 0' }}>
                {renderChips()}
              </div>
              {/* Cards in padded area */}
              <div style={{ padding: '0 20px 16px 20px' }}>
                {renderCards()}
              </div>
            </div>
          )}

          {/* Brand Footer */}
          <div style={{ padding: '12px 0 16px 0', textAlign: 'center', backgroundColor: colors.screenBg, flexShrink: 0 }}>
            <div style={{ fontSize: 11, fontWeight: 500, color: colors.footerText }}>
              Powered by -
            </div>
            <img
              src="/Digital_India_logo.svg"
              alt="Digital India"
              style={{
                height: 22,
                marginTop: 6,
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
          <h1 className="wb-title">Consent History</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Pattern for displaying a complete audit trail of all data sharing consents with horizontal scheme filters, status tags, and PDF download.
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
                      <span style={{ fontSize: 13, fontWeight: 600, color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }}>
                        Variant:
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
                              color: variant === v ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                              transition: 'all 0.2s ease',
                            }}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Render Mobile Phone Mockup */}
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

export default ConsentHistoryDoc;
