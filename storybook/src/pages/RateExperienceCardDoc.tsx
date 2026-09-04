import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface RateExperienceCardDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const RateExperienceCardDoc: React.FC<RateExperienceCardDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [rating, setRating] = useState<number>(0);

  const isCard = variant === 'card';

  const colors = useMemo(() => {
    const onSurface = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
    let activeStarColor: string;
    if (rating === 0) {
      activeStarColor = isDark ? UX4GColors.neutral700 : UX4GColors.neutral300;
    } else if (rating <= 2) {
      activeStarColor = isDark ? UX4GColors.red300 : UX4GColors.red600;
    } else {
      activeStarColor = isDark ? UX4GColors.yellow500 : UX4GColors.yellow600;
    }

    const inactiveStarColor = isDark ? UX4GColors.neutral700 : UX4GColors.neutral300;
    const cardBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
    const cardBorder = isDark ? UX4GColors.neutral700 : UX4GColors.neutral200;

    return {
      onSurface,
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
      unionColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      buttonEnabledBg: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      buttonEnabledText: isDark ? '#000000' : '#FFFFFF',
      buttonDisabledBg: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      buttonDisabledText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
      skipColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      footerText: isDark ? UX4GColors.neutral400 : '#6B7280',
    };
  }, [isDark, isCard, rating]);

  // Clean React Native TSX source code strings matching Flutter implementation
  const defaultCodeString = `import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gButtonVariant,
  Ux4gButtonSize,
  Ux4gDivider,
  Ux4gDividerOrientation,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const RateExperienceScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const [rating, setRating] = useState<number>(0);

  const onSurface = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const screenBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
  const cardBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
  const cardBorder = isDark ? UX4GColors.neutral700 : UX4GColors.neutral200;

  // Star Colors matching UX4G Feedback Form
  let activeStarColor = isDark ? UX4GColors.neutral700 : UX4GColors.neutral300;
  if (rating > 0 && rating <= 2) {
    activeStarColor = isDark ? UX4GColors.red300 : UX4GColors.red600;
  } else if (rating > 2) {
    activeStarColor = isDark ? UX4GColors.yellow500 : UX4GColors.yellow600;
  }
  const inactiveStarColor = isDark ? UX4GColors.neutral700 : UX4GColors.neutral300;

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

      <View style={styles.content}>
        <View style={styles.topContainer}>
          <View
            style={[
              styles.card,
              {
                backgroundColor: cardBg,
                borderColor: cardBorder,
              },
            ]}
          >
            {/* Title */}
            <Text style={[styles.title, { color: onSurface }]}>
              Rate your experience
            </Text>

            {/* Stars Row */}
            <View style={styles.starsRow}>
              {[1, 2, 3, 4, 5].map((starIndex) => {
                const isSelected = starIndex <= rating;
                return (
                  <TouchableOpacity
                    key={starIndex}
                    onPress={() => setRating(starIndex)}
                    activeOpacity={0.7}
                    style={styles.starTouch}
                  >
                    <StarIcon
                      size={24}
                      color={isSelected ? activeStarColor : inactiveStarColor}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* Submit Button */}
            <View style={styles.buttonWrapper}>
              <Ux4gButton
                onPress={rating > 0 ? () => {} : undefined}
                text="Submit"
                variant={Ux4gButtonVariant.primary}
                size={Ux4gButtonSize.large}
                height={40}
                borderRadius={8}
                disabled={rating === 0}
                backgroundColor={
                  rating > 0
                    ? isDark
                      ? UX4GColors.primary300
                      : UX4GColors.primary600
                    : isDark
                    ? UX4GColors.neutral800
                    : UX4GColors.neutral200
                }
                contentColor={
                  rating > 0
                    ? isDark
                      ? '#000000'
                      : '#FFFFFF'
                    : isDark
                    ? UX4GColors.neutral500
                    : UX4GColors.neutral400
                }
              />
            </View>

            {/* Skip Button */}
            <TouchableOpacity
              onPress={() => {}}
              style={styles.skipButton}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.skipText,
                  {
                    color: isDark
                      ? UX4GColors.primary300
                      : UX4GColors.primary600,
                  },
                ]}
              >
                Skip
              </Text>
            </TouchableOpacity>
          </View>
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
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    justifyContent: 'space-between',
  },
  topContainer: {
    alignItems: 'center',
    width: '100%',
  },
  card: {
    width: '100%',
    maxWidth: 360,
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'left',
    marginBottom: 24,
  },
  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 24,
  },
  starTouch: {
    paddingHorizontal: 4,
  },
  buttonWrapper: {
    width: '100%',
    marginBottom: 12,
  },
  skipButton: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  skipText: {
    fontSize: 16,
    fontWeight: '600',
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
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gButtonVariant,
  Ux4gButtonSize,
  Ux4gDivider,
  Ux4gDividerOrientation,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const RateExperienceCardScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const [rating, setRating] = useState<number>(0);

  const onSurface = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const screenBg = isDark ? UX4GColors.primary800 : UX4GColors.primary100;
  const cardBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
  const cardBorder = isDark ? UX4GColors.neutral700 : UX4GColors.neutral200;

  // Star Colors matching UX4G Feedback Form
  let activeStarColor = isDark ? UX4GColors.neutral700 : UX4GColors.neutral300;
  if (rating > 0 && rating <= 2) {
    activeStarColor = isDark ? UX4GColors.red300 : UX4GColors.red600;
  } else if (rating > 2) {
    activeStarColor = isDark ? UX4GColors.yellow500 : UX4GColors.yellow600;
  }
  const inactiveStarColor = isDark ? UX4GColors.neutral700 : UX4GColors.neutral300;

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

      <View style={styles.content}>
        <View style={styles.topContainer}>
          <View
            style={[
              styles.card,
              {
                backgroundColor: cardBg,
                borderColor: cardBorder,
              },
            ]}
          >
            {/* Title */}
            <Text style={[styles.title, { color: onSurface }]}>
              Rate your experience
            </Text>

            {/* Stars Row */}
            <View style={styles.starsRow}>
              {[1, 2, 3, 4, 5].map((starIndex) => {
                const isSelected = starIndex <= rating;
                return (
                  <TouchableOpacity
                    key={starIndex}
                    onPress={() => setRating(starIndex)}
                    activeOpacity={0.7}
                    style={styles.starTouch}
                  >
                    <StarIcon
                      size={24}
                      color={isSelected ? activeStarColor : inactiveStarColor}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* Submit Button */}
            <View style={styles.buttonWrapper}>
              <Ux4gButton
                onPress={rating > 0 ? () => {} : undefined}
                text="Submit"
                variant={Ux4gButtonVariant.primary}
                size={Ux4gButtonSize.large}
                height={40}
                borderRadius={8}
                disabled={rating === 0}
                backgroundColor={
                  rating > 0
                    ? isDark
                      ? UX4GColors.primary300
                      : UX4GColors.primary600
                    : isDark
                    ? UX4GColors.neutral800
                    : UX4GColors.neutral200
                }
                contentColor={
                  rating > 0
                    ? isDark
                      ? '#000000'
                      : '#FFFFFF'
                    : isDark
                    ? UX4GColors.neutral500
                    : UX4GColors.neutral400
                }
              />
            </View>

            {/* Skip Button */}
            <TouchableOpacity
              onPress={() => {}}
              style={styles.skipButton}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.skipText,
                  {
                    color: isDark
                      ? UX4GColors.primary300
                      : UX4GColors.primary600,
                  },
                ]}
              >
                Skip
              </Text>
            </TouchableOpacity>
          </View>
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
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    justifyContent: 'space-between',
  },
  topContainer: {
    alignItems: 'center',
    width: '100%',
  },
  card: {
    width: '100%',
    maxWidth: 360,
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'left',
    marginBottom: 24,
  },
  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 24,
  },
  starTouch: {
    paddingHorizontal: 4,
  },
  buttonWrapper: {
    width: '100%',
    marginBottom: 12,
  },
  skipButton: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  skipText: {
    fontSize: 16,
    fontWeight: '600',
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
          Rate Experience ({isCard ? 'Card Style' : 'Default'})
        </h1>
        <p className="wb-description">
          {isCard
            ? 'Rate experience card container with light purple background.'
            : 'Rate experience card container on a white background.'}
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
                      setRating(0);
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
                      setRating(0);
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
                    <UnionLogo size={32} color={colors.unionColor} isDark={isDark} />
                  </div>

                  {/* Screen Content Body */}
                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '24px 24px 12px 24px',
                    }}
                  >
                    {/* Top Content: Rate Experience Card */}
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                      <div
                        style={{
                          width: '100%',
                          maxWidth: 360,
                          backgroundColor: colors.cardBg,
                          borderRadius: '16px',
                          border: `1px solid ${colors.cardBorder}`,
                          padding: '24px',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
                          boxSizing: 'border-box',
                        }}
                      >
                        {/* Title */}
                        <div
                          style={{
                            fontSize: '16px',
                            fontWeight: 700,
                            color: colors.onSurface,
                            textAlign: 'left',
                            marginBottom: '24px',
                          }}
                        >
                          Rate your experience
                        </div>

                        {/* Stars Row */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            marginBottom: '24px',
                            gap: '8px',
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
                                  fontSize: '24px',
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

                        {/* Submit Button */}
                        <div style={{ width: '100%', marginBottom: '12px' }}>
                          <button
                            type="button"
                            disabled={rating === 0}
                            onClick={() => {
                              if (rating > 0) {
                                alert(`Thank you for rating ${rating} star${rating > 1 ? 's' : ''}!`);
                              }
                            }}
                            style={{
                              width: '100%',
                              height: '40px',
                              borderRadius: '8px',
                              border: 'none',
                              fontSize: '14px',
                              fontWeight: 600,
                              cursor: rating > 0 ? 'pointer' : 'not-allowed',
                              backgroundColor:
                                rating > 0
                                  ? colors.buttonEnabledBg
                                  : colors.buttonDisabledBg,
                              color:
                                rating > 0
                                  ? colors.buttonEnabledText
                                  : colors.buttonDisabledText,
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
                            onClick={() => alert('Skipped')}
                            style={{
                              background: 'none',
                              border: 'none',
                              padding: '8px 16px',
                              fontSize: '16px',
                              fontWeight: 600,
                              color: colors.skipColor,
                              cursor: 'pointer',
                            }}
                          >
                            Skip
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Section: Powered by Digital India */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '4px',
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
