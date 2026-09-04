import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface FaqDetailDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

const FAQ_ITEMS = [
  {
    title: 'My application was rejected — what next?',
    answer:
      'If your application was rejected, you can review the rejection reason in your application details. You may reapply after addressing the issues mentioned, or file a grievance if you believe the decision was incorrect.',
  },
  {
    title: 'How do I upload missing documents?',
    answer:
      'Go to My Applications, select the application, and tap "Upload Documents". You can upload scanned copies or photos of the required documents. Supported formats: PDF, JPG, PNG (max 5MB each).',
  },
  {
    title: 'When will I receive my certificate?',
    answer:
      'Certificate issuance typically takes 7-15 working days after approval. You will receive an SMS and email notification once your certificate is ready for download.',
  },
  {
    title: 'How do I contact a Revenue officer?',
    answer:
      'You can contact the Revenue officer through the Help section in the app, or visit your nearest Tehsil office during working hours (10 AM - 5 PM, Mon-Fri).',
  },
];

export const FaqDetailDoc: React.FC<FaqDetailDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const isCard = variant === 'card';

  const colors = useMemo(() => {
    const titleColor = isDark ? '#FFFFFF' : '#111827';
    const subtleText = isDark ? '#9CA3AF' : '#4B5563';
    const borderColor = isDark ? UX4GColors.neutral700 : '#E5E7EB';
    const scaffoldBg = isDark ? UX4GColors.neutral950 : '#FFFFFF';
    const cardBg = isDark ? '#1A1A1A' : '#FFFFFF';
    const cardBorder = isDark ? UX4GColors.neutral700 : '#E5E7EB';
    const breadcrumbColor = isDark ? '#9CA3AF' : '#6B7280';
    const breadcrumbActive = isDark ? UX4GColors.primary300 : '#432CBB';
    const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
    const headerBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
    const headerDividerColor = '#D1D5DB';
    const chevronColor = isDark ? '#9CA3AF' : '#6B7280';
    const footerText = isDark ? UX4GColors.neutral400 : '#6B7280';
    const screenBg = isCard
      ? isDark
        ? UX4GColors.primary800
        : UX4GColors.primary100
      : scaffoldBg;

    return {
      titleColor,
      subtleText,
      borderColor,
      scaffoldBg,
      cardBg,
      cardBorder,
      breadcrumbColor,
      breadcrumbActive,
      primaryColor,
      headerBg,
      headerDividerColor,
      chevronColor,
      footerText,
      screenBg,
    };
  }, [isDark, isCard]);

  const toggleAccordion = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

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
  Ux4gAccordion,
  Ux4gDivider,
  Ux4gDividerOrientation,
  UX4GColors,
} from 'ux4g-react-native-design-system';

const FAQ_ITEMS = [
  {
    title: 'My application was rejected — what next?',
    answer:
      'If your application was rejected, you can review the rejection reason in your application details. You may reapply after addressing the issues mentioned, or file a grievance if you believe the decision was incorrect.',
  },
  {
    title: 'How do I upload missing documents?',
    answer:
      'Go to My Applications, select the application, and tap "Upload Documents". Supported formats: PDF, JPG, PNG (max 5MB each).',
  },
  {
    title: 'When will I receive my certificate?',
    answer:
      'Certificate issuance typically takes 7-15 working days after approval. You will receive an SMS and email notification once ready.',
  },
  {
    title: 'How do I contact a Revenue officer?',
    answer:
      'You can contact the Revenue officer through the Help section, or visit your nearest Tehsil office (10 AM - 5 PM, Mon-Fri).',
  },
];

export const FaqDetailScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const screenBg = isDark ? UX4GColors.neutral950 : '#FFFFFF';
  const titleColor = isDark ? '#FFFFFF' : '#111827';
  const subtleTextColor = isDark ? '#9CA3AF' : '#4B5563';
  const borderColor = isDark ? UX4GColors.neutral700 : '#E5E7EB';
  const breadcrumbColor = isDark ? '#9CA3AF' : '#6B7280';
  const activeBreadcrumbColor = isDark ? UX4GColors.primary300 : '#432CBB';

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
        {/* Breadcrumb */}
        <View style={styles.breadcrumbRow}>
          <HomeIcon size={14} color={breadcrumbColor} />
          <Text style={[styles.breadcrumbText, { color: breadcrumbColor }]}>
            {' '}Home
          </Text>
          <Text style={[styles.breadcrumbText, { color: breadcrumbColor }]}>
            {'  >  '}
          </Text>
          <Text style={[styles.breadcrumbText, { color: breadcrumbColor }]}>
            Help
          </Text>
          <Text style={[styles.breadcrumbText, { color: breadcrumbColor }]}>
            {'  >  '}
          </Text>
          <Text
            style={[
              styles.breadcrumbText,
              { color: activeBreadcrumbColor, fontWeight: '500' },
            ]}
          >
            Application Issues
          </Text>
        </View>

        {/* Title */}
        <Text style={[styles.title, { color: titleColor }]}>
          How do I track my application?
        </Text>

        {/* Answer */}
        <Text style={[styles.answer, { color: subtleTextColor }]}>
          Sign in to the portal, open My Applications, and tap your active
          application. The Status Tracker shows every milestone — Submitted,
          Documents Verified, Under Review, Decision. SLA timer shows expected
          completion date.
        </Text>

        {/* Related Questions Accordion List */}
        <View style={styles.accordionList}>
          {FAQ_ITEMS.map((item, index) => (
            <View key={item.title}>
              <Ux4gDivider color={borderColor} />
              <Ux4gAccordion
                title={item.title}
                expanded={expandedIndex === index}
                onExpandedChange={(isExp) =>
                  setExpandedIndex(isExp ? index : null)
                }
                collapsedBorderColor="transparent"
                expandedBorderColor="transparent"
                backgroundColor="transparent"
                contentBackgroundColor="transparent"
              >
                <Text
                  style={[
                    styles.accordionAnswer,
                    { color: subtleTextColor },
                  ]}
                >
                  {item.answer}
                </Text>
              </Ux4gAccordion>
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
  breadcrumbRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  breadcrumbText: {
    fontSize: 13,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 12,
  },
  answer: {
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 24,
  },
  accordionList: {
    width: '100%',
  },
  accordionAnswer: {
    fontSize: 13,
    lineHeight: 20,
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
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gCard,
  Ux4gAccordion,
  Ux4gDivider,
  Ux4gDividerOrientation,
  UX4GColors,
} from 'ux4g-react-native-design-system';

const FAQ_ITEMS = [
  {
    title: 'My application was rejected — what next?',
    answer:
      'If your application was rejected, you can review the rejection reason in your application details. You may reapply after addressing the issues mentioned, or file a grievance.',
  },
  {
    title: 'How do I upload missing documents?',
    answer:
      'Go to My Applications, select the application, and tap "Upload Documents". Supported formats: PDF, JPG, PNG (max 5MB each).',
  },
  {
    title: 'When will I receive my certificate?',
    answer:
      'Certificate issuance typically takes 7-15 working days after approval. You will receive an SMS and email notification once ready.',
  },
  {
    title: 'How do I contact a Revenue officer?',
    answer:
      'You can contact the Revenue officer through the Help section, or visit your nearest Tehsil office (10 AM - 5 PM, Mon-Fri).',
  },
];

/// Card Style variant — FAQ detail inside a white card on purple background.
export const FaqDetailCardScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const screenBg = isDark ? UX4GColors.primary800 : UX4GColors.primary100;
  const cardBg = isDark ? '#1A1A1A' : '#FFFFFF';
  const titleColor = isDark ? '#FFFFFF' : '#111827';
  const subtleTextColor = isDark ? '#9CA3AF' : '#4B5563';
  const borderColor = isDark ? UX4GColors.neutral700 : '#E5E7EB';
  const breadcrumbColor = isDark ? '#9CA3AF' : '#6B7280';
  const activeBreadcrumbColor = isDark ? UX4GColors.primary300 : '#432CBB';

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
          {/* Breadcrumb */}
          <View style={styles.breadcrumbRow}>
            <HomeIcon size={14} color={breadcrumbColor} />
            <Text style={[styles.breadcrumbText, { color: breadcrumbColor }]}>
              {' '}Home
            </Text>
            <Text style={[styles.breadcrumbText, { color: breadcrumbColor }]}>
              {'  >  '}
            </Text>
            <Text style={[styles.breadcrumbText, { color: breadcrumbColor }]}>
              Help
            </Text>
            <Text style={[styles.breadcrumbText, { color: breadcrumbColor }]}>
              {'  >  '}
            </Text>
            <Text
              style={[
                styles.breadcrumbText,
                { color: activeBreadcrumbColor, fontWeight: '500' },
              ]}
            >
              Application Issues
            </Text>
          </View>

          {/* Title */}
          <Text style={[styles.title, { color: titleColor }]}>
            How do I track my application?
          </Text>

          {/* Answer */}
          <Text style={[styles.answer, { color: subtleTextColor }]}>
            Sign in to the portal, open My Applications, and tap your active
            application. The Status Tracker shows every milestone — Submitted,
            Documents Verified, Under Review, Decision. SLA timer shows expected
            completion date.
          </Text>

          {/* Related Questions Accordion List */}
          <View style={styles.accordionList}>
            {FAQ_ITEMS.map((item, index) => (
              <View key={item.title}>
                <Ux4gDivider color={borderColor} />
                <Ux4gAccordion
                  title={item.title}
                  expanded={expandedIndex === index}
                  onExpandedChange={(isExp) =>
                    setExpandedIndex(isExp ? index : null)
                  }
                  collapsedBorderColor="transparent"
                  expandedBorderColor="transparent"
                  backgroundColor="transparent"
                  contentBackgroundColor="transparent"
                >
                  <Text
                    style={[
                      styles.accordionAnswer,
                      { color: subtleTextColor },
                    ]}
                  >
                    {item.answer}
                  </Text>
                </Ux4gAccordion>
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
  breadcrumbRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  breadcrumbText: {
    fontSize: 13,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 12,
  },
  answer: {
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 24,
  },
  accordionList: {
    width: '100%',
  },
  accordionAnswer: {
    fontSize: 13,
    lineHeight: 20,
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
          FAQ Detail ({isCard ? 'Card Style' : 'Default'})
        </h1>
        <p className="wb-description">
          {isCard
            ? 'FAQ detail page with breadcrumb, answer content, and related questions accordion inside a card with purple background.'
            : 'FAQ detail page with breadcrumb, answer content, and related questions accordion on white background.'}
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
                      setExpandedIndex(null);
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
                      setExpandedIndex(null);
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
                      {/* Breadcrumb Row */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          gap: '4px',
                          marginBottom: '20px',
                        }}
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{
                            fontSize: '15px',
                            color: colors.breadcrumbColor,
                          }}
                        >
                          home
                        </span>
                        <span
                          style={{
                            fontSize: '13px',
                            color: colors.breadcrumbColor,
                          }}
                        >
                          Home
                        </span>
                        <span
                          style={{
                            fontSize: '13px',
                            color: colors.breadcrumbColor,
                            margin: '0 2px',
                          }}
                        >
                          &gt;
                        </span>
                        <span
                          style={{
                            fontSize: '13px',
                            color: colors.breadcrumbColor,
                          }}
                        >
                          Help
                        </span>
                        <span
                          style={{
                            fontSize: '13px',
                            color: colors.breadcrumbColor,
                            margin: '0 2px',
                          }}
                        >
                          &gt;
                        </span>
                        <span
                          style={{
                            fontSize: '13px',
                            color: colors.breadcrumbActive,
                            fontWeight: 500,
                          }}
                        >
                          Application Issues
                        </span>
                      </div>

                      {/* Title */}
                      <div
                        style={{
                          fontSize: '22px',
                          fontWeight: 800,
                          color: colors.titleColor,
                          marginBottom: '12px',
                          lineHeight: '1.3',
                        }}
                      >
                        How do I track my application?
                      </div>

                      {/* Primary Answer */}
                      <div
                        style={{
                          fontSize: '14px',
                          color: colors.subtleText,
                          lineHeight: 1.5,
                          marginBottom: '24px',
                        }}
                      >
                        Sign in to the portal, open My Applications, and tap your
                        active application. The Status Tracker shows every
                        milestone — Submitted, Documents Verified, Under
                        Review, Decision. SLA timer shows expected completion
                        date.
                      </div>

                      {/* Related Questions Accordion List */}
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {FAQ_ITEMS.map((item, index) => {
                          const isExpanded = expandedIndex === index;
                          return (
                            <div key={item.title}>
                              {/* Top Divider */}
                              <div
                                style={{
                                  height: '1px',
                                  backgroundColor: colors.borderColor,
                                  width: '100%',
                                }}
                              />

                              {/* Accordion Header */}
                              <div
                                onClick={() => toggleAccordion(index)}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  padding: '14px 4px',
                                  cursor: 'pointer',
                                  gap: '8px',
                                  userSelect: 'none',
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    color: colors.titleColor,
                                    lineHeight: '1.4',
                                  }}
                                >
                                  {item.title}
                                </span>
                                <span
                                  className="material-symbols-outlined"
                                  style={{
                                    fontSize: '20px',
                                    color: colors.chevronColor,
                                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s ease',
                                    flexShrink: 0,
                                  }}
                                >
                                  keyboard_arrow_down
                                </span>
                              </div>

                              {/* Accordion Content */}
                              {isExpanded && (
                                <div
                                  style={{
                                    padding: '0 4px 14px 4px',
                                    fontSize: '13px',
                                    color: colors.subtleText,
                                    lineHeight: 1.5,
                                    animation: 'fadeIn 0.2s ease-in-out',
                                  }}
                                >
                                  {item.answer}
                                </div>
                              )}
                            </div>
                          );
                        })}
                        {/* Bottom Divider */}
                        <div
                          style={{
                            height: '1px',
                            backgroundColor: colors.borderColor,
                            width: '100%',
                          }}
                        />
                      </div>
                    </div>

                    {/* Bottom Section: Powered by Digital India */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '4px',
                        paddingTop: '24px',
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
