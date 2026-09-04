import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface RateExperienceDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

const IMPROVEMENT_OPTIONS = [
  'Content accuracy',
  'Visual design',
  'Ease of navigation',
];

export const RateExperienceDoc: React.FC<RateExperienceDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');

  // Interactive form state
  const [rating, setRating] = useState<number>(0);
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [comment, setComment] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const isCard = variant === 'card';

  const isFormValid = rating > 0 && selectedChips.length > 0 && comment.trim().length > 0;

  const toggleChip = (option: string) => {
    setSelectedChips((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  const handleReset = () => {
    setRating(0);
    setSelectedChips([]);
    setComment('');
    setIsSubmitted(false);
  };

  const colors = useMemo(() => {
    const onSurface = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
    const onBackground = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
    const subtleText = isDark ? UX4GColors.neutral300 : UX4GColors.neutral600;

    let activeStarColor: string;
    if (rating === 0) {
      activeStarColor = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)';
    } else if (rating <= 2) {
      activeStarColor = isDark ? UX4GColors.red300 : UX4GColors.red600;
    } else {
      activeStarColor = isDark ? UX4GColors.yellow500 : UX4GColors.yellow600;
    }

    const inactiveStarColor = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)';
    const cardBg = isDark ? UX4GColors.neutral800 : '#FFFFFF';
    const cardBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';

    return {
      onSurface,
      onBackground,
      subtleText,
      activeStarColor,
      inactiveStarColor,
      cardBg,
      cardBorder,
      screenBg: isCard
        ? isDark
          ? UX4GColors.primary800
          : UX4GColors.primary100
        : isDark
        ? UX4GColors.neutral900
        : '#FFFFFF',
      headerBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      dividerColor: '#D1D5DB',
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      chipSelectedBg: isDark ? 'rgba(163,145,255,0.15)' : 'rgba(74,43,194,0.1)',
      chipSelectedBorder: isDark ? 'rgba(163,145,255,0.4)' : 'rgba(74,43,194,0.3)',
      chipSelectedText: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      chipUnselectedBg: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
      chipUnselectedBorder: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
      chipUnselectedText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral800,
      textareaBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      textareaBorder: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
      textareaText: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      footerText: isDark ? UX4GColors.neutral400 : '#6B7280',
      successBoxBg: isDark ? 'rgba(34,197,94,0.12)' : 'rgba(74,222,128,0.12)',
      successIconColor: isDark ? UX4GColors.green300 : UX4GColors.green600,
    };
  }, [isDark, isCard, rating]);

  // Clean React Native TSX source code strings matching Flutter implementation
  const defaultCodeString = `import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gDividerOrientation,
  Ux4gFeedbackFormStar,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const FeedbackRatingScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const screenBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';

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

      {/* Feedback form using Ux4gFeedbackForm */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.formWrapper}>
          <Ux4gFeedbackFormStar
            title="Rate your experience"
            improvementTitle="What can we improve?"
            improvementOptions={[
              'Content accuracy',
              'Visual design',
              'Ease of navigation',
            ]}
            commentPlaceholder="Please provide your valuable feedback on how we can improve our portal for you."
            submitButtonText="Submit"
            skipButtonText="Skip"
            onSubmit={(rating, selectedOptions, comment) => {
              console.log({ rating, selectedOptions, comment });
            }}
            onSkip={() => {
              console.log('Skipped');
            }}
          />
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
    alignItems: 'center',
  },
  formWrapper: {
    width: '100%',
    maxWidth: 400,
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

  const cardCodeString = `import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gCard,
  Ux4gDivider,
  Ux4gDividerOrientation,
  Ux4gFeedbackFormStar,
  UX4GColors,
} from 'ux4g-react-native-design-system';

/// Card Style variant — feedback form inside a white card on purple background.
export const FeedbackRatingCardScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const screenBg = isDark ? UX4GColors.primary800 : UX4GColors.primary100;

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

      {/* Card with Ux4gFeedbackForm */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        <Ux4gCard
          backgroundColor={isDark ? UX4GColors.neutral800 : '#FFFFFF'}
          cornerRadius={16}
          style={styles.card}
        >
          <Ux4gFeedbackFormStar
            title="Rate your experience"
            improvementTitle="What can we improve?"
            improvementOptions={[
              'Content accuracy',
              'Visual design',
              'Ease of navigation',
            ]}
            commentPlaceholder="Please provide your valuable feedback on how we can improve our portal for you."
            submitButtonText="Submit"
            skipButtonText="Skip"
            onSubmit={(rating, selectedOptions, comment) => {
              console.log({ rating, selectedOptions, comment });
            }}
            onSkip={() => {
              console.log('Skipped');
            }}
          />
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
    alignItems: 'center',
  },
  card: {
    width: '100%',
    maxWidth: 400,
    padding: 16,
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
          Rate Your Experience ({isCard ? 'Card Style' : 'Default'})
        </h1>
        <p className="wb-description">
          {isCard
            ? 'Feedback rating form using Ux4gFeedbackForm inside a card container with light purple background.'
            : 'Feedback rating form using Ux4gFeedbackForm on a white background.'}
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
                      handleReset();
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
                      handleReset();
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
                    <UnionLogo size={32} color={colors.primaryColor} isDark={isDark} />
                  </div>

                  {/* Screen Content Body */}
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
                    {/* Form Container (Card Style or Default) */}
                    <div
                      style={{
                        width: '100%',
                        backgroundColor: colors.cardBg,
                        borderRadius: '12px',
                        border: `1px solid ${colors.cardBorder}`,
                        padding: '20px',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
                        boxSizing: 'border-box',
                      }}
                    >
                      {isSubmitted ? (
                        /* Success View */
                        <div style={{ width: '100%' }}>
                          <div
                            style={{
                              padding: '28px 20px',
                              backgroundColor: colors.successBoxBg,
                              borderRadius: '8px',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              textAlign: 'center',
                            }}
                          >
                            <span
                              className="material-symbols-outlined"
                              style={{
                                fontSize: '36px',
                                color: colors.successIconColor,
                                fontVariationSettings: "'FILL' 1",
                              }}
                            >
                              thumb_up
                            </span>
                            <div
                              style={{
                                fontSize: '18px',
                                fontWeight: 700,
                                color: colors.onBackground,
                                marginTop: '14px',
                              }}
                            >
                              Feedback submitted
                            </div>
                            <div
                              style={{
                                fontSize: '13px',
                                color: colors.subtleText,
                                marginTop: '8px',
                                lineHeight: '1.4',
                              }}
                            >
                              Thank you for your feedback. This helps improve government services.
                            </div>
                          </div>
                          <div style={{ marginTop: '20px' }}>
                            <button
                              type="button"
                              onClick={handleReset}
                              style={{
                                width: '100%',
                                height: '44px',
                                borderRadius: '8px',
                                border: `1px solid ${colors.primaryColor}`,
                                backgroundColor: 'transparent',
                                color: colors.primaryColor,
                                fontSize: '14px',
                                fontWeight: 600,
                                cursor: 'pointer',
                              }}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* Main Feedback Form */
                        <div style={{ width: '100%' }}>
                          {/* Title */}
                          <div
                            style={{
                              fontSize: '20px',
                              fontWeight: 700,
                              color: colors.onBackground,
                              marginBottom: '16px',
                            }}
                          >
                            Rate your experience
                          </div>

                          {/* Star Rating */}
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              marginBottom: '20px',
                            }}
                          >
                            {[1, 2, 3, 4, 5].map((starIndex) => {
                              const isSelected = starIndex <= rating;
                              return (
                                <span
                                  key={starIndex}
                                  className="material-symbols-outlined"
                                  onClick={() => setRating(starIndex)}
                                  style={{
                                    fontSize: '32px',
                                    cursor: 'pointer',
                                    color: isSelected
                                      ? colors.activeStarColor
                                      : colors.inactiveStarColor,
                                    fontVariationSettings: "'FILL' 1",
                                    userSelect: 'none',
                                    transition: 'color 0.15s ease',
                                  }}
                                >
                                  star
                                </span>
                              );
                            })}
                          </div>

                          {/* Improvement Title */}
                          <div
                            style={{
                              fontSize: '15px',
                              fontWeight: 700,
                              color: colors.onBackground,
                              marginBottom: '10px',
                            }}
                          >
                            What can we improve?
                          </div>

                          {/* Choice Chips */}
                          <div
                            style={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: '8px',
                              marginBottom: '20px',
                            }}
                          >
                            {IMPROVEMENT_OPTIONS.map((option) => {
                              const isSelected = selectedChips.includes(option);
                              return (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => toggleChip(option)}
                                  style={{
                                    padding: '7px 14px',
                                    borderRadius: '6px',
                                    fontSize: '13px',
                                    fontWeight: 500,
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    backgroundColor: isSelected
                                      ? colors.chipSelectedBg
                                      : colors.chipUnselectedBg,
                                    border: `1px solid ${
                                      isSelected
                                        ? colors.chipSelectedBorder
                                        : colors.chipUnselectedBorder
                                    }`,
                                    color: isSelected
                                      ? colors.chipSelectedText
                                      : colors.chipUnselectedText,
                                    transition: 'all 0.15s ease',
                                  }}
                                >
                                  {isSelected && (
                                    <span
                                      className="material-symbols-outlined"
                                      style={{ fontSize: '15px' }}
                                    >
                                      check
                                    </span>
                                  )}
                                  {option}
                                </button>
                              );
                            })}
                          </div>

                          {/* Text Area */}
                          <div style={{ marginBottom: '20px' }}>
                            <textarea
                              rows={4}
                              value={comment}
                              maxLength={200}
                              onChange={(e) => setComment(e.target.value)}
                              placeholder="Please provide your valuable feedback on how we can improve our portal for you."
                              style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '8px',
                                border: `1px solid ${colors.textareaBorder}`,
                                backgroundColor: colors.textareaBg,
                                color: colors.textareaText,
                                fontSize: '13px',
                                lineHeight: '1.4',
                                boxSizing: 'border-box',
                                resize: 'none',
                                outline: 'none',
                                fontFamily: 'inherit',
                              }}
                            />
                            <div
                              style={{
                                textAlign: 'right',
                                fontSize: '11px',
                                color: colors.subtleText,
                                marginTop: '4px',
                              }}
                            >
                              {comment.length}/200
                            </div>
                          </div>

                          {/* Submit Button */}
                          <div style={{ width: '100%', marginBottom: '10px' }}>
                            <button
                              type="button"
                              disabled={!isFormValid}
                              onClick={() => {
                                if (isFormValid) {
                                  setIsSubmitted(true);
                                }
                              }}
                              style={{
                                width: '100%',
                                height: '44px',
                                borderRadius: '8px',
                                border: 'none',
                                fontSize: '14px',
                                fontWeight: 600,
                                cursor: isFormValid ? 'pointer' : 'not-allowed',
                                backgroundColor: isFormValid
                                  ? colors.primaryColor
                                  : isDark
                                  ? UX4GColors.neutral800
                                  : UX4GColors.neutral200,
                                color: isFormValid
                                  ? isDark
                                    ? '#000000'
                                    : '#FFFFFF'
                                  : isDark
                                  ? UX4GColors.neutral500
                                  : UX4GColors.neutral400,
                                transition: 'all 0.2s ease',
                              }}
                            >
                              Submit
                            </button>
                          </div>

                          {/* Skip Button */}
                          <div style={{ textAlign: 'center' }}>
                            <button
                              type="button"
                              onClick={() => alert('Skipped feedback')}
                              style={{
                                background: 'none',
                                border: 'none',
                                padding: '8px 16px',
                                fontSize: '14px',
                                fontWeight: 600,
                                color: colors.onBackground,
                                cursor: 'pointer',
                              }}
                            >
                              Skip
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Section: Powered by Digital India */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '4px',
                        paddingTop: '16px',
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
