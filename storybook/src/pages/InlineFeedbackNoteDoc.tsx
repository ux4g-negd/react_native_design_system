import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface InlineFeedbackNoteDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const InlineFeedbackNoteDoc: React.FC<InlineFeedbackNoteDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');

  const isCard = variant === 'card';

  const colors = useMemo(() => {
    return {
      primaryColor: isDark ? UX4GColors.primary300 : '#432CBB',
      titleColor: isDark ? UX4GColors.neutral50 : '#111827',
      subtleColor: isDark ? UX4GColors.neutral200 : '#4B5563',
      screenBg: isCard
        ? isDark
          ? UX4GColors.primary800
          : '#F2EFFF'
        : isDark
        ? UX4GColors.neutral900
        : '#FFFFFF',
      cardBg: isDark ? UX4GColors.neutral800 : '#FFFFFF',
      buttonBg: isDark ? UX4GColors.primary300 : '#4A2BC2',
      buttonTextColor: isDark ? '#000000' : '#FFFFFF',
      headerBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      dividerColor: isDark ? UX4GColors.neutral700 : '#D1D5DB',
      unionColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      // Note card status banner colors matching Flutter
      bannerBg: isDark ? UX4GColors.orange900 : UX4GColors.orange50,
      bannerBorder: isDark ? UX4GColors.orange600 : UX4GColors.orange300,
      bannerText: isDark ? UX4GColors.orange300 : UX4GColors.orange800,
      bannerIcon: isDark ? UX4GColors.orange500 : UX4GColors.orange600,
    };
  }, [isDark, isCard]);

  // Clean React Native TSX source code strings matching Flutter implementation
  const defaultCodeString = `import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gButtonVariant,
  Ux4gButtonSize,
  Ux4gDivider,
  Ux4gDividerOrientation,
  Ux4gIcon,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const NoteToCitizenScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const primaryColor = isDark ? UX4GColors.primary300 : '#432CBB';
  const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
  const subtleColor = isDark ? UX4GColors.neutral200 : '#4B5563';
  const screenBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';

  const bannerBg = isDark ? UX4GColors.orange900 : UX4GColors.orange50;
  const bannerBorder = isDark ? UX4GColors.orange600 : UX4GColors.orange300;
  const bannerText = isDark ? UX4GColors.orange300 : UX4GColors.orange800;
  const bannerIcon = isDark ? UX4GColors.orange500 : UX4GColors.orange600;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: screenBg }]}>
      {/* App Header with logos and elevation */}
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
            height={32}
            color={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
          />,
        ]}
      />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {/* Back button */}
        <View style={styles.backWrapper}>
          <Ux4gButton
            text="Back"
            onPress={() => {}}
            variant={Ux4gButtonVariant.ghost}
            leadingIcon="arrow_back"
            contentColor={primaryColor}
            size={Ux4gButtonSize.small}
          />
        </View>

        {/* Title */}
        <Text style={[styles.title, { color: titleColor }]}>
          Note to Citizen
        </Text>

        {/* Description */}
        <Text style={[styles.description, { color: subtleColor }]}>
          A note written by a reviewing officer.
        </Text>

        {/* Note card status banner */}
        <View
          style={[
            styles.bannerContainer,
            {
              backgroundColor: bannerBg,
              borderColor: bannerBorder,
            },
          ]}
        >
          <View style={styles.bannerRow}>
            <Ux4gIcon name="error" size={20} color={bannerIcon} />
            <View style={styles.bannerTextContainer}>
              <Text style={[styles.bannerTitle, { color: bannerText }]}>
                Note from Revenue Inspector - 12 April 2026, 11:34 AM
              </Text>
              <Text style={[styles.bannerBody, { color: bannerText }]}>
                Please resubmit the income proof with a clearer scan. The current file shows glare on the income figure row. Resubmit within 5 working days to avoid delay.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Pinned Bottom Resubmit Documents Button */}
      <View style={styles.bottomBar}>
        <Ux4gButton
          text="Resubmit Documents"
          onPress={() => {}}
          variant={Ux4gButtonVariant.primary}
          size={Ux4gButtonSize.large}
          height={48}
          borderRadius={8}
          backgroundColor={isDark ? UX4GColors.primary300 : '#4A2BC2'}
          contentColor={isDark ? '#000000' : '#FFFFFF'}
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
  content: {
    padding: 16,
  },
  backWrapper: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 24,
  },
  bannerContainer: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  bannerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bannerTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  bannerTitle: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 6,
  },
  bannerBody: {
    fontSize: 13,
    lineHeight: 18,
  },
  bottomBar: {
    padding: 16,
    paddingTop: 0,
  },
});
`;

  const cardCodeString = `import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gButtonVariant,
  Ux4gButtonSize,
  Ux4gDivider,
  Ux4gDividerOrientation,
  Ux4gIcon,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const NoteToCitizenCardScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const primaryColor = isDark ? UX4GColors.primary300 : '#432CBB';
  const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
  const subtleColor = isDark ? UX4GColors.neutral200 : '#4B5563';
  const screenBg = isDark ? UX4GColors.primary800 : '#F2EFFF';
  const cardBg = isDark ? UX4GColors.neutral800 : '#FFFFFF';

  const bannerBg = isDark ? UX4GColors.orange900 : UX4GColors.orange50;
  const bannerBorder = isDark ? UX4GColors.orange600 : UX4GColors.orange300;
  const bannerText = isDark ? UX4GColors.orange300 : UX4GColors.orange800;
  const bannerIcon = isDark ? UX4GColors.orange500 : UX4GColors.orange600;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: screenBg }]}>
      {/* App Header with logos and elevation */}
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
            height={32}
            color={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
          />,
        ]}
      />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {/* Card container */}
        <View style={[styles.card, { backgroundColor: cardBg }]}>
          {/* Back button */}
          <View style={styles.backWrapper}>
            <Ux4gButton
              text="Back"
              onPress={() => {}}
              variant={Ux4gButtonVariant.ghost}
              leadingIcon="arrow_back"
              contentColor={primaryColor}
              size={Ux4gButtonSize.small}
            />
          </View>

          {/* Title */}
          <Text style={[styles.title, { color: titleColor }]}>
            Note to Citizen
          </Text>

          {/* Description */}
          <Text style={[styles.description, { color: subtleColor }]}>
            A note written by a reviewing officer.
          </Text>

          {/* Note card status banner */}
          <View
            style={[
              styles.bannerContainer,
              {
                backgroundColor: bannerBg,
                borderColor: bannerBorder,
              },
            ]}
          >
            <View style={styles.bannerRow}>
              <Ux4gIcon name="error" size={20} color={bannerIcon} />
              <View style={styles.bannerTextContainer}>
                <Text style={[styles.bannerTitle, { color: bannerText }]}>
                  Note from Revenue Inspector - 12 April 2026, 11:34 AM
                </Text>
                <Text style={[styles.bannerBody, { color: bannerText }]}>
                  Please resubmit the income proof with a clearer scan. The current file shows glare on the income figure row. Resubmit within 5 working days to avoid delay.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Pinned Bottom Resubmit Documents Button */}
      <View style={styles.bottomBar}>
        <Ux4gButton
          text="Resubmit Documents"
          onPress={() => {}}
          variant={Ux4gButtonVariant.primary}
          size={Ux4gButtonSize.large}
          height={48}
          borderRadius={8}
          backgroundColor={isDark ? UX4GColors.primary300 : '#4A2BC2'}
          contentColor={isDark ? '#000000' : '#FFFFFF'}
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
  content: {
    padding: 16,
  },
  card: {
    borderRadius: 16,
    padding: 16,
  },
  backWrapper: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 24,
  },
  bannerContainer: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  bannerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bannerTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  bannerTitle: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 6,
  },
  bannerBody: {
    fontSize: 13,
    lineHeight: 18,
  },
  bottomBar: {
    padding: 16,
    paddingTop: 0,
  },
});
`;

  const codeString = isCard ? cardCodeString : defaultCodeString;

  const renderFormFields = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Ghost Back Button */}
      <button
        type="button"
        onClick={() => {}}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'none',
          border: 'none',
          padding: 0,
          color: colors.primaryColor,
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          marginBottom: '20px',
          alignSelf: 'flex-start',
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
          arrow_back
        </span>
        Back
      </button>

      {/* Main Title */}
      <div
        style={{
          fontSize: '18px',
          fontWeight: 800,
          color: colors.titleColor,
          marginBottom: '10px',
          lineHeight: '1.3',
        }}
      >
        Note to Citizen
      </div>

      {/* Subtitle / Description */}
      <div
        style={{
          fontSize: '13px',
          color: colors.subtleColor,
          marginBottom: '24px',
          lineHeight: '1.4',
        }}
      >
        A note written by a reviewing officer.
      </div>

      {/* Note Card Status Banner */}
      <div
        style={{
          width: '100%',
          backgroundColor: colors.bannerBg,
          border: `1px solid ${colors.bannerBorder}`,
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-start',
          boxSizing: 'border-box',
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: '20px',
            color: colors.bannerIcon,
            flexShrink: 0,
            marginTop: '1px',
            fontVariationSettings: "'FILL' 1",
          }}
        >
          error
        </span>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 700,
              color: colors.bannerText,
              marginBottom: '6px',
              lineHeight: '1.3',
            }}
          >
            Note from Revenue Inspector - 12 April 2026, 11:34 AM
          </div>
          <div
            style={{
              fontSize: '13px',
              color: colors.bannerText,
              lineHeight: '1.4',
            }}
          >
            Please resubmit the income proof with a clearer scan. The current file shows glare on the income figure row. Resubmit within 5 working days to avoid delay.
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="wb-page">
      {/* Top Header */}
      <div className="wb-header">
        <h1 className="wb-title">
          Inline Feedback Note ({isCard ? 'Card Style' : 'Default'})
        </h1>
        <p className="wb-description">
          {isCard
            ? 'A note from a reviewing officer inside a card container. Shows an important message with action required.'
            : 'A note from a reviewing officer displayed inline. Shows an important message with action required.'}
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

                {/* Mobile Phone Mockup */}
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
                  }}
                >
                  {/* Ux4gAppHeader inside Mockup */}
                  <div
                    style={{
                      height: '56px',
                      backgroundColor: colors.headerBg,
                      borderBottom: `1px solid ${colors.dividerColor}`,
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
                    <UnionLogo size={32} color={colors.unionColor} isDark={isDark} />
                  </div>

                  {/* Scrollable Content Body */}
                  <div
                    style={{
                      flex: 1,
                      overflowY: 'auto',
                      padding: '16px',
                      boxSizing: 'border-box',
                    }}
                  >
                    {isCard ? (
                      /* Card Style Variant */
                      <div
                        style={{
                          width: '100%',
                          backgroundColor: colors.cardBg,
                          borderRadius: '16px',
                          padding: '16px',
                          boxSizing: 'border-box',
                        }}
                      >
                        {renderFormFields()}
                      </div>
                    ) : (
                      /* Default Variant */
                      renderFormFields()
                    )}
                  </div>

                  {/* Pinned Bottom Resubmit Documents Button */}
                  <div
                    style={{
                      padding: '0 16px 16px 16px',
                      flexShrink: 0,
                      width: '100%',
                      boxSizing: 'border-box',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => alert('Resubmit Documents pressed')}
                      style={{
                        width: '100%',
                        height: '48px',
                        minHeight: '48px',
                        maxHeight: '48px',
                        backgroundColor: colors.buttonBg,
                        color: colors.buttonTextColor,
                        borderRadius: '8px',
                        border: 'none',
                        fontSize: '15px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'opacity 0.2s',
                      }}
                    >
                      Resubmit Documents
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Code Tab */}
            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                {/* Variant Switch in Code Tab */}
                <div
                  style={{
                    display: 'flex',
                    gap: 8,
                    marginBottom: 16,
                    padding: '8px 16px',
                    backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
                    borderRadius: 8,
                    alignItems: 'center',
                    border: `1px solid ${isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}`,
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700,
                    }}
                  >
                    Active Variant:
                  </span>
                  <button
                    type="button"
                    onClick={() => setVariant('default')}
                    className={`wb-tab ${variant === 'default' ? 'active' : ''}`}
                    style={{ padding: '4px 12px', fontSize: 12 }}
                  >
                    Default
                  </button>
                  <button
                    type="button"
                    onClick={() => setVariant('card')}
                    className={`wb-tab ${variant === 'card' ? 'active' : ''}`}
                    style={{ padding: '4px 12px', fontSize: 12 }}
                  >
                    Card Style
                  </button>
                </div>

                <CodeBlock
                  code={codeString}
                  language="tsx"
                  filename={
                    variant === 'card'
                      ? 'InlineFeedbackNoteCardPattern.tsx'
                      : 'InlineFeedbackNoteDefaultPattern.tsx'
                  }
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InlineFeedbackNoteDoc;
