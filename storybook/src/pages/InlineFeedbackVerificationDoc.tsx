import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface InlineFeedbackVerificationDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const InlineFeedbackVerificationDoc: React.FC<InlineFeedbackVerificationDocProps> = ({ isDark }) => {
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
      innerCardBg: isDark ? (isCard ? UX4GColors.neutral900 : UX4GColors.neutral800) : '#FFFFFF',
      innerCardBorder: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      buttonBg: isDark ? UX4GColors.primary300 : '#4A2BC2',
      buttonTextColor: isDark ? '#000000' : '#FFFFFF',
      headerBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      dividerColor: isDark ? UX4GColors.neutral700 : '#D1D5DB',
      unionColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      progressTrack: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      progressGradient: isDark
        ? `linear-gradient(90deg, ${UX4GColors.secondary600}, ${UX4GColors.secondary300})`
        : `linear-gradient(90deg, ${UX4GColors.secondary200}, ${UX4GColors.secondary600})`,
      // Tag & Badge Colors
      orangeBadgeBg: isDark ? UX4GColors.orange800 : UX4GColors.orange100,
      orangeBadgeText: isDark ? UX4GColors.orange300 : UX4GColors.orange800,
      greenBadgeBg: isDark ? UX4GColors.green800 : UX4GColors.green100,
      greenBadgeText: isDark ? UX4GColors.green300 : UX4GColors.green800,
      timelineCardBg: isDark ? (isCard ? '#1E1B2E' : UX4GColors.neutral800) : '#F9FAFB',
      timelineCardBorder: isDark ? UX4GColors.neutral700 : '#E5E7EB',
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
  Ux4gTag,
  Ux4gTagSize,
  Ux4gTagStyle,
  Ux4gTagColor,
  Ux4gLinearProgressBar,
  Ux4gJourneyTimeline,
  Ux4gDivider,
  Ux4gDividerOrientation,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const InlineFeedbackVerificationScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const primaryColor = isDark ? UX4GColors.primary300 : '#432CBB';
  const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
  const subtleColor = isDark ? UX4GColors.neutral200 : '#4B5563';
  const screenBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';

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
          Verifying your Income Certificate Document
        </Text>

        {/* Description */}
        <Text style={[styles.description, { color: subtleColor }]}>
          We are checking your uploaded PDF in real time. Each step below updates as the system completes it — keep this page open until all checks finish.
        </Text>

        {/* Document card with progress */}
        <View
          style={[
            styles.docCard,
            {
              backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
              borderColor: isDark ? UX4GColors.neutral700 : '#E5E7EB',
            },
          ]}
        >
          <View style={styles.cardHeaderRow}>
            <Text style={[styles.cardTitle, { color: titleColor }]}>
              Income Certificate
            </Text>
            <Ux4gTag
              text="Verifying"
              size={Ux4gTagSize.m}
              style={Ux4gTagStyle.tonal}
              colorScheme={Ux4gTagColor.warning}
              customBackgroundColor={isDark ? UX4GColors.orange800 : UX4GColors.orange100}
              customContentColor={isDark ? UX4GColors.orange300 : UX4GColors.orange800}
              customBorderRadius={4}
            />
          </View>
          <Text style={[styles.fileInfo, { color: subtleColor }]}>
            PDF document · 1.2 MB
          </Text>
          <Text style={[styles.checkStatus, { color: subtleColor }]}>
            2 of 3 checks passed — final check in progress
          </Text>
          <Ux4gLinearProgressBar
            value={0.66}
            height={6}
            shape="rounded"
            gradientColors={
              isDark
                ? [UX4GColors.secondary600, UX4GColors.secondary300]
                : [UX4GColors.secondary200, UX4GColors.secondary600]
            }
            trackColor={isDark ? UX4GColors.neutral700 : '#E5E7EB'}
          />
        </View>

        {/* Journey Timeline */}
        <Ux4gJourneyTimeline
          activeColor={primaryColor}
          steps={[
            {
              state: 'completed',
              date: '22 June 2026',
              title: 'File format and size within limits',
              status: {
                text: 'Passed',
                badgeText: 'Passed',
                badgeColor: isDark ? UX4GColors.green800 : UX4GColors.green100,
                badgeTextColor: isDark ? UX4GColors.green300 : UX4GColors.green800,
                badgePosition: 'topRight',
              },
            },
            {
              state: 'completed',
              date: '25 June 2026',
              title: 'Document is readable and not blurred',
              status: {
                text: 'Passed',
                badgeText: 'Passed',
                badgeColor: isDark ? UX4GColors.green800 : UX4GColors.green100,
                badgeTextColor: isDark ? UX4GColors.green300 : UX4GColors.green800,
                badgePosition: 'topRight',
              },
            },
            {
              state: 'current',
              date: '31 June 2026',
              title: 'Figures match the declared income',
              status: {
                text: 'Verifying',
                badgeText: 'Verifying',
                badgeColor: isDark ? UX4GColors.orange800 : UX4GColors.orange100,
                badgeTextColor: isDark ? UX4GColors.orange300 : UX4GColors.orange800,
                badgePosition: 'topRight',
              },
            },
          ]}
        />
      </ScrollView>

      {/* Pinned Bottom Button */}
      <View style={styles.bottomBar}>
        <Ux4gButton
          text="Track Status"
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
  docCard: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  fileInfo: {
    fontSize: 12,
    marginBottom: 8,
  },
  checkStatus: {
    fontSize: 12,
    marginBottom: 8,
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
  Ux4gTag,
  Ux4gTagSize,
  Ux4gTagStyle,
  Ux4gTagColor,
  Ux4gLinearProgressBar,
  Ux4gJourneyTimeline,
  Ux4gDivider,
  Ux4gDividerOrientation,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const InlineFeedbackVerificationCardScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const primaryColor = isDark ? UX4GColors.primary300 : '#432CBB';
  const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
  const subtleColor = isDark ? UX4GColors.neutral200 : '#4B5563';
  const screenBg = isDark ? UX4GColors.primary800 : '#F2EFFF';
  const cardBg = isDark ? UX4GColors.neutral800 : '#FFFFFF';

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
            Verifying your Income Certificate Document
          </Text>

          {/* Description */}
          <Text style={[styles.description, { color: subtleColor }]}>
            We are checking your uploaded PDF in real time. Each step below updates as the system completes it — keep this page open until all checks finish.
          </Text>

          {/* Document card with progress */}
          <View
            style={[
              styles.docCard,
              {
                backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
                borderColor: isDark ? UX4GColors.neutral700 : '#E5E7EB',
              },
            ]}
          >
            <View style={styles.cardHeaderRow}>
              <Text style={[styles.cardTitle, { color: titleColor }]}>
                Income Certificate
              </Text>
              <Ux4gTag
                text="Verifying"
                size={Ux4gTagSize.m}
                style={Ux4gTagStyle.tonal}
                colorScheme={Ux4gTagColor.warning}
                customBackgroundColor={isDark ? UX4GColors.orange800 : UX4GColors.orange100}
                customContentColor={isDark ? UX4GColors.orange300 : UX4GColors.orange800}
                customBorderRadius={4}
              />
            </View>
            <Text style={[styles.fileInfo, { color: subtleColor }]}>
              PDF document · 1.2 MB
            </Text>
            <Text style={[styles.checkStatus, { color: subtleColor }]}>
              2 of 3 checks passed — final check in progress
            </Text>
            <Ux4gLinearProgressBar
              value={0.66}
              height={6}
              shape="rounded"
              gradientColors={
                isDark
                  ? [UX4GColors.secondary600, UX4GColors.secondary300]
                  : [UX4GColors.secondary200, UX4GColors.secondary600]
              }
              trackColor={isDark ? UX4GColors.neutral700 : '#E5E7EB'}
            />
          </View>

          {/* Journey Timeline */}
          <Ux4gJourneyTimeline
            activeColor={primaryColor}
            steps={[
              {
                state: 'completed',
                date: '22 June 2026',
                title: 'File format and size within limits',
                status: {
                  text: 'Passed',
                  badgeText: 'Passed',
                  badgeColor: isDark ? UX4GColors.green800 : UX4GColors.green100,
                  badgeTextColor: isDark ? UX4GColors.green300 : UX4GColors.green800,
                  badgePosition: 'topRight',
                },
              },
              {
                state: 'completed',
                date: '25 June 2026',
                title: 'Document is readable and not blurred',
                status: {
                  text: 'Passed',
                  badgeText: 'Passed',
                  badgeColor: isDark ? UX4GColors.green800 : UX4GColors.green100,
                  badgeTextColor: isDark ? UX4GColors.green300 : UX4GColors.green800,
                  badgePosition: 'topRight',
                },
              },
              {
                state: 'current',
                date: '31 June 2026',
                title: 'Figures match the declared income',
                status: {
                  text: 'Verifying',
                  badgeText: 'Verifying',
                  badgeColor: isDark ? UX4GColors.orange800 : UX4GColors.orange100,
                  badgeTextColor: isDark ? UX4GColors.orange300 : UX4GColors.orange800,
                  badgePosition: 'topRight',
                },
              },
            ]}
          />
        </View>
      </ScrollView>

      {/* Pinned Bottom Button */}
      <View style={styles.bottomBar}>
        <Ux4gButton
          text="Track Status"
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
  docCard: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  fileInfo: {
    fontSize: 12,
    marginBottom: 8,
  },
  checkStatus: {
    fontSize: 12,
    marginBottom: 8,
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
        Verifying your Income Certificate Document
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
        We are checking your uploaded PDF in real time. Each step below updates as the system completes it — keep this page open until all checks finish.
      </div>

      {/* Document Card with Progress */}
      <div
        style={{
          backgroundColor: colors.innerCardBg,
          borderRadius: '12px',
          border: `1px solid ${colors.innerCardBorder}`,
          padding: '14px',
          marginBottom: '20px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        }}
      >
        {/* Title + Tag row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '4px',
          }}
        >
          <div
            style={{
              fontSize: '14px',
              fontWeight: 700,
              color: colors.titleColor,
            }}
          >
            Income Certificate
          </div>
          <div
            style={{
              padding: '3px 8px',
              borderRadius: '4px',
              backgroundColor: colors.orangeBadgeBg,
              color: colors.orangeBadgeText,
              fontSize: '12px',
              fontWeight: 600,
            }}
          >
            Verifying
          </div>
        </div>

        {/* File info */}
        <div
          style={{
            fontSize: '12px',
            color: colors.subtleColor,
            marginBottom: '8px',
          }}
        >
          PDF document · 1.2 MB
        </div>

        {/* Checks status */}
        <div
          style={{
            fontSize: '12px',
            color: colors.subtleColor,
            marginBottom: '8px',
          }}
        >
          2 of 3 checks passed — final check in progress
        </div>

        {/* Linear Progress Bar */}
        <div
          style={{
            width: '100%',
            height: '6px',
            borderRadius: '3px',
            backgroundColor: colors.progressTrack,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '66%',
              height: '100%',
              borderRadius: '3px',
              background: colors.progressGradient,
            }}
          />
        </div>
      </div>

      {/* Journey Timeline */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Step 1: Completed */}
        <div style={{ display: 'flex', alignItems: 'stretch' }}>
          {/* Indicator Column */}
          <div
            style={{
              width: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginRight: '12px',
              flexShrink: 0,
            }}
          >
            {/* Top invisible spacer line (to align circle with header) */}
            <div style={{ width: '2px', height: '12px', backgroundColor: 'transparent', flexShrink: 0 }} />

            {/* Circle 1 */}
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: colors.primaryColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                zIndex: 2,
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: 'bold' }}
              >
                check
              </span>
            </div>

            {/* Bottom connecting line */}
            <div
              style={{
                width: '2px',
                flex: 1,
                backgroundColor: colors.primaryColor,
              }}
            />
          </div>

          {/* Step Card Container */}
          <div style={{ flex: 1, paddingBottom: '12px' }}>
            <div
              style={{
                backgroundColor: colors.timelineCardBg,
                border: `1px solid ${colors.timelineCardBorder}`,
                borderRadius: '10px',
                padding: '12px 14px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '4px',
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: colors.titleColor,
                  }}
                >
                  22 June 2026
                </span>
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: '4px',
                    backgroundColor: colors.greenBadgeBg,
                    color: colors.greenBadgeText,
                    fontSize: '11px',
                    fontWeight: 600,
                  }}
                >
                  Passed
                </span>
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: colors.subtleColor,
                  lineHeight: '1.4',
                }}
              >
                File format and size within limits
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Completed */}
        <div style={{ display: 'flex', alignItems: 'stretch' }}>
          {/* Indicator Column */}
          <div
            style={{
              width: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginRight: '12px',
              flexShrink: 0,
            }}
          >
            {/* Top connecting line */}
            <div style={{ width: '2px', height: '12px', backgroundColor: colors.primaryColor, flexShrink: 0 }} />

            {/* Circle 2 */}
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: colors.primaryColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                zIndex: 2,
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: 'bold' }}
              >
                check
              </span>
            </div>

            {/* Bottom connecting line */}
            <div
              style={{
                width: '2px',
                flex: 1,
                backgroundColor: colors.primaryColor,
              }}
            />
          </div>

          {/* Step Card Container */}
          <div style={{ flex: 1, paddingBottom: '12px' }}>
            <div
              style={{
                backgroundColor: colors.timelineCardBg,
                border: `1px solid ${colors.timelineCardBorder}`,
                borderRadius: '10px',
                padding: '12px 14px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '4px',
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: colors.titleColor,
                  }}
                >
                  25 June 2026
                </span>
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: '4px',
                    backgroundColor: colors.greenBadgeBg,
                    color: colors.greenBadgeText,
                    fontSize: '11px',
                    fontWeight: 600,
                  }}
                >
                  Passed
                </span>
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: colors.subtleColor,
                  lineHeight: '1.4',
                }}
              >
                Document is readable and not blurred
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Current / Verifying */}
        <div style={{ display: 'flex', alignItems: 'stretch' }}>
          {/* Indicator Column */}
          <div
            style={{
              width: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginRight: '12px',
              flexShrink: 0,
            }}
          >
            {/* Top connecting line */}
            <div style={{ width: '2px', height: '12px', backgroundColor: colors.primaryColor, flexShrink: 0 }} />

            {/* Circle 3 */}
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: colors.primaryColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                }}
              />
            </div>

            {/* Bottom invisible line (last step) */}
            <div style={{ width: '2px', flex: 1, backgroundColor: 'transparent' }} />
          </div>

          {/* Step Card Container */}
          <div style={{ flex: 1, paddingBottom: '0px' }}>
            <div
              style={{
                backgroundColor: colors.timelineCardBg,
                border: `1px solid ${colors.timelineCardBorder}`,
                borderRadius: '10px',
                padding: '12px 14px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '4px',
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: colors.titleColor,
                  }}
                >
                  31 June 2026
                </span>
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: '4px',
                    backgroundColor: colors.orangeBadgeBg,
                    color: colors.orangeBadgeText,
                    fontSize: '11px',
                    fontWeight: 600,
                  }}
                >
                  Verifying
                </span>
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: colors.subtleColor,
                  lineHeight: '1.4',
                }}
              >
                Figures match the declared income
              </div>
            </div>
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
          Inline Feedback Verification ({isCard ? 'Card Style' : 'Default'})
        </h1>
        <p className="wb-description">
          {isCard
            ? 'Document verification progress with timeline inside a card container.'
            : 'Document verification progress with timeline showing real-time status updates.'}
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

                  {/* Pinned Bottom Track Status Button */}
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
                      onClick={() => alert('Track Status pressed')}
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
                      Track Status
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
                      ? 'InlineFeedbackVerificationCardPattern.tsx'
                      : 'InlineFeedbackVerificationDefaultPattern.tsx'
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

export default InlineFeedbackVerificationDoc;
