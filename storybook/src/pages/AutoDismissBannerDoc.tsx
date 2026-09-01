import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface AutoDismissBannerDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

export const AutoDismissBannerDoc: React.FC<AutoDismissBannerDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [isBannerVisible, setIsBannerVisible] = useState<boolean>(true);

  // Colors matching Flutter proactive_status_update_stories.dart
  const colors = useMemo(() => {
    const primary = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
    return {
      primary,
      bgScreen: isDark ? '#121212' : '#F9FAFB',
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      cardBg: isDark ? '#1E1E1E' : UX4GColors.neutral0,
      onSurface: isDark ? '#FFFFFF' : '#111827',
      subtle: isDark ? '#9CA3AF' : '#6B7280',
      badgeBg: isDark ? '#262626' : '#E5E7EB',
      badgeText: isDark ? '#D1D5DB' : '#374151',
      currentCardBg: isDark ? '#2E1A47' : '#F3F0FF',
      toastBg: isDark ? '#1E1E1E' : UX4GColors.neutral0,
      toastIcon: '#06B6D4',
      pendingBadgeBg: isDark ? '#3B0A0A' : '#FEF2F2',
      pendingBadgeText: isDark ? '#F87171' : '#DC2626',
      pendingDot: isDark ? '#FDE68A' : '#D97706',
    };
  }, [isDark]);

  // Clean TSX Code string matching Flutter _getProactiveStatusCode('banner')
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
  Ux4gDivider,
  Ux4gLinearProgress,
  Ux4gToast,
  Ux4gToastCategory,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const AutoDismissBannerPattern = () => {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <View style={styles.screen}>
      {/* 1. Government App Header */}
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
          <Image key="emblem" source={{ uri: '/national_emblem_logo.svg' }} style={styles.emblemLogo} resizeMode="contain" />,
          <View key="divider" style={styles.headerDivider} />,
          <Image key="union" source={{ uri: '/Union.svg' }} style={styles.unionLogo} resizeMode="contain" />,
        ]}
        actions={[
          {
            customWidget: (
              <View style={styles.menuBtn}>
                <Text style={styles.menuIcon}>☰</Text>
              </View>
            ),
          },
        ]}
      />
      <Ux4gDivider color={UX4GColors.neutral200} />

      {/* 2. Scrollable Body */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, paddingBottom: bannerVisible ? 100 : 20 }}>
        {/* Back Link */}
        <TouchableOpacity style={styles.backRow} onPress={() => {}}>
          <Text style={styles.backArrow}>←</Text>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <View style={{ height: 16 }} />

        {/* Card 1: Application Status */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <Text style={styles.cardTitle}>Income Certificate</Text>
            <View style={styles.tagBadge}>
              <Text style={styles.tagBadgeText}>Under Review</Text>
            </View>
          </View>

          <Text style={styles.cardSubtitle}>Application ID · INC-2026-MH-04127</Text>

          <View style={{ height: 14 }} />

          <Ux4gLinearProgress
            value={0.38}
            label="8 days left"
            height={6}
            borderRadius={3}
            progressColor="#F59E0B"
            backgroundColor={UX4GColors.neutral200}
          />
        </View>

        <View style={{ height: 16 }} />

        {/* Card 2: Application Journey Timeline */}
        <View style={styles.card}>
          <Text style={styles.timelineHeader}>Application journey</Text>
          <Text style={styles.timelineDesc}>Every step from submission to issuance</Text>

          <View style={{ height: 16 }} />

          {/* Step 1 - Completed */}
          <View style={styles.stepRow}>
            <View style={styles.stepIndicatorCol}>
              <View style={[styles.stepDot, styles.dotCompleted]}>
                <Text style={styles.checkMark}>✓</Text>
              </View>
              <View style={styles.stepLine} />
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Application Submitted</Text>
              <Text style={styles.stepDate}>07 Apr 2026, 10:24 AM</Text>
            </View>
          </View>

          {/* Step 2 - Completed */}
          <View style={styles.stepRow}>
            <View style={styles.stepIndicatorCol}>
              <View style={[styles.stepDot, styles.dotCompleted]}>
                <Text style={styles.checkMark}>✓</Text>
              </View>
              <View style={styles.stepLine} />
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Documents Verified</Text>
              <Text style={styles.stepDate}>10 Apr 2026, 02:15 PM</Text>
            </View>
          </View>

          {/* Step 3 - Current */}
          <View style={styles.stepRow}>
            <View style={styles.stepIndicatorCol}>
              <View style={[styles.stepDot, styles.dotCurrent]}>
                <View style={styles.innerDotCurrent} />
              </View>
              <View style={styles.stepLine} />
            </View>
            <View style={[styles.stepContent, styles.currentHighlightCard]}>
              <Text style={styles.currentStepTitle}>Under Review</Text>
              <Text style={styles.currentStepDate}>11 Apr 2026 (Est)</Text>
            </View>
          </View>

          {/* Step 4 - Upcoming */}
          <View style={styles.stepRow}>
            <View style={styles.stepIndicatorCol}>
              <View style={[styles.stepDot, styles.dotUpcoming]} />
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitleUpcoming}>Decision</Text>
              <Text style={styles.stepDate}>22 Apr 2026 (Est)</Text>
              <View style={styles.pendingRow}>
                <View style={styles.amberDot} />
                <Text style={styles.pendingDaysText}>2 days remaining</Text>
                <View style={styles.pendingBadge}>
                  <Text style={styles.pendingBadgeText}>Pending</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{ height: 32 }} />

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.poweredByText}>Powered by -</Text>
          <Image source={{ uri: '/Digital_India_logo.svg' }} style={styles.digitalIndiaLogo} resizeMode="contain" />
        </View>
      </ScrollView>

      {/* 3. Floating Bottom Toast Banner */}
      {bannerVisible && (
        <View style={styles.floatingToastContainer}>
          <Ux4gToast
            category={Ux4gToastCategory.info}
            title="Application Under Review"
            subtitle="Your application moved to Under Review. This banner auto-dismisses in 5 seconds."
            showCloseButton={false}
            layout="stacked"
          />
          <Text style={styles.toastTimestamp}>12:30PM</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F9FAFB' },
  emblemLogo: { width: 32, height: 32 },
  headerDivider: { width: 1, height: 28, backgroundColor: UX4GColors.neutral300, marginHorizontal: 4 },
  unionLogo: { width: 32, height: 32 },
  menuBtn: { width: 32, height: 32, borderRadius: 6, borderWidth: 1, borderColor: UX4GColors.primary, justifyContent: 'center', alignItems: 'center' },
  menuIcon: { fontSize: 16, color: UX4GColors.primary },
  backRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  backArrow: { fontSize: 16, color: UX4GColors.primary, fontWeight: '700' },
  backText: { fontSize: 14, fontWeight: '600', color: UX4GColors.primary },
  card: { backgroundColor: UX4GColors.neutral0, borderRadius: 12, borderWidth: 1, borderColor: UX4GColors.neutral200, padding: 16 },
  cardHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardTitle: { fontSize: 16, fontWeight: '700', color: '#111827' },
  tagBadge: { backgroundColor: '#E5E7EB', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 },
  tagBadgeText: { fontSize: 11, fontWeight: '700', color: '#374151' },
  cardSubtitle: { fontSize: 12, color: '#6B7280', marginTop: 4 },
  timelineHeader: { fontSize: 16, fontWeight: '700', color: '#111827' },
  timelineDesc: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  stepRow: { flexDirection: 'row', gap: 12 },
  stepIndicatorCol: { alignItems: 'center' },
  stepDot: { width: 18, height: 18, borderRadius: 9, justifyContent: 'center', alignItems: 'center' },
  dotCompleted: { backgroundColor: UX4GColors.primary },
  dotCurrent: { borderWidth: 2, borderColor: UX4GColors.primary, backgroundColor: '#FFFFFF' },
  innerDotCurrent: { width: 8, height: 8, borderRadius: 4, backgroundColor: UX4GColors.primary },
  dotUpcoming: { width: 10, height: 10, borderRadius: 5, backgroundColor: UX4GColors.neutral300, marginTop: 4 },
  checkMark: { color: '#FFFFFF', fontSize: 10, fontWeight: '700' },
  stepLine: { width: 2, flex: 1, backgroundColor: UX4GColors.neutral200, marginVertical: 4 },
  stepContent: { flex: 1, paddingBottom: 16 },
  stepTitle: { fontSize: 14, fontWeight: '600', color: '#111827' },
  stepTitleUpcoming: { fontSize: 14, fontWeight: '600', color: '#6B7280' },
  stepDate: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  currentHighlightCard: { backgroundColor: '#F3F0FF', borderRadius: 8, borderWidth: 1, borderColor: UX4GColors.primary, padding: 12 },
  currentStepTitle: { fontSize: 14, fontWeight: '700', color: UX4GColors.primary },
  currentStepDate: { fontSize: 12, color: UX4GColors.primary, marginTop: 2 },
  pendingRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 6 },
  amberDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#D97706' },
  pendingDaysText: { fontSize: 11, color: '#6B7280' },
  pendingBadge: { backgroundColor: '#FEF2F2', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  pendingBadgeText: { fontSize: 11, fontWeight: '600', color: '#DC2626' },
  footer: { alignItems: 'center' },
  poweredByText: { fontSize: 10, color: UX4GColors.neutral400 },
  digitalIndiaLogo: { height: 18, width: 60, marginTop: 4 },
  floatingToastContainer: { position: 'absolute', bottom: 16, left: 16, right: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.12, shadowRadius: 16, elevation: 8 },
  toastTimestamp: { position: 'absolute', top: 14, right: 14, fontSize: 11, color: '#6B7280' },
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
        {/* Header */}
        <div style={{ position: 'relative', zIndex: 10, flexShrink: 0 }}>
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
                  height: 28,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />,
              <div
                key="divider"
                style={{
                  width: 1,
                  height: 18,
                  backgroundColor: colors.border,
                  margin: '0 4px',
                }}
              />,
              <UnionLogo key="union" size={28} isDark={isDark} />,
            ]}
            actions={[
              {
                customWidget: (
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 6,
                      border: `1px solid ${colors.primary}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, color: colors.primary }}
                    >
                      menu
                    </span>
                  </div>
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

        {/* Scrollable Tracker Body */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px 16px 100px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {/* Back Button */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              cursor: 'pointer',
              alignSelf: 'flex-start',
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 16, color: colors.primary, fontWeight: '700' }}
            >
              arrow_back
            </span>
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: colors.primary,
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              }}
            >
              Back
            </span>
          </div>

          {/* Card 1: Application Status */}
          <div
            style={{
              backgroundColor: colors.cardBg,
              borderRadius: 12,
              border: `1px solid ${colors.border}`,
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: colors.onSurface,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Income Certificate
              </span>
              <span
                style={{
                  padding: '4px 10px',
                  borderRadius: 6,
                  backgroundColor: colors.badgeBg,
                  color: colors.badgeText,
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Under Review
              </span>
            </div>

            <span
              style={{
                fontSize: 12,
                color: colors.subtle,
                marginTop: 6,
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              }}
            >
              Application ID · INC-2026-MH-04127
            </span>

            <div style={{ marginTop: 14 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 6,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: colors.subtle,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  8 days left
                </span>
              </div>
              <div
                style={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: isDark ? '#333333' : '#E5E7EB',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    width: '38%',
                    height: '100%',
                    borderRadius: 3,
                    background: 'linear-gradient(90deg, #F59E0B 0%, #D97706 100%)',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Card 2: Application Journey Timeline */}
          <div
            style={{
              backgroundColor: colors.cardBg,
              borderRadius: 12,
              border: `1px solid ${colors.border}`,
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: colors.onSurface,
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              }}
            >
              Application journey
            </span>
            <span
              style={{
                fontSize: 12,
                color: colors.subtle,
                marginTop: 2,
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              }}
            >
              Every step from submission to issuance
            </span>

            <div style={{ height: 16 }} />

            {/* Timeline Step 1 */}
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 9,
                    backgroundColor: colors.primary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    fontSize: 10,
                    fontWeight: 700,
                    marginTop: 12,
                  }}
                >
                  ✓
                </div>
                <div
                  style={{
                    width: 2,
                    flex: 1,
                    minHeight: 20,
                    backgroundColor: colors.primary,
                    margin: '4px 0',
                  }}
                />
              </div>
              <div style={{ paddingBottom: 12, flex: 1 }}>
                <div
                  style={{
                    backgroundColor: isDark ? '#171717' : '#FFFFFF',
                    borderRadius: 8,
                    border: `1px solid ${colors.border}`,
                    padding: '12px 16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      color: colors.subtle,
                      display: 'block',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    07 Apr 2026, 10:24 AM
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: colors.onSurface,
                      display: 'block',
                      marginTop: 4,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Application Submitted
                  </span>
                </div>
              </div>
            </div>

            {/* Timeline Step 2 */}
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 9,
                    backgroundColor: colors.primary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    fontSize: 10,
                    fontWeight: 700,
                    marginTop: 12,
                  }}
                >
                  ✓
                </div>
                <div
                  style={{
                    width: 2,
                    flex: 1,
                    minHeight: 20,
                    backgroundColor: colors.primary,
                    margin: '4px 0',
                  }}
                />
              </div>
              <div style={{ paddingBottom: 12, flex: 1 }}>
                <div
                  style={{
                    backgroundColor: isDark ? '#171717' : '#FFFFFF',
                    borderRadius: 8,
                    border: `1px solid ${colors.border}`,
                    padding: '12px 16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      color: colors.subtle,
                      display: 'block',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    10 Apr 2026, 02:15 PM
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: colors.onSurface,
                      display: 'block',
                      marginTop: 4,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Documents Verified
                  </span>
                </div>
              </div>
            </div>

            {/* Timeline Step 3 (Current) */}
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 9,
                    border: `2px solid ${colors.primary}`,
                    backgroundColor: colors.cardBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 12,
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: colors.primary,
                    }}
                  />
                </div>
                <div
                  style={{
                    width: 2,
                    flex: 1,
                    minHeight: 20,
                    backgroundColor: isDark ? '#333333' : '#E5E7EB',
                    margin: '4px 0',
                  }}
                />
              </div>
              <div style={{ paddingBottom: 12, flex: 1 }}>
                <div
                  style={{
                    backgroundColor: colors.currentCardBg,
                    border: `1px solid ${colors.primary}`,
                    borderRadius: 8,
                    padding: '12px 16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      color: colors.primary,
                      display: 'block',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    11 Apr 2026 (Est)
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: colors.primary,
                      display: 'block',
                      marginTop: 4,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Under Review
                  </span>
                </div>
              </div>
            </div>

            {/* Timeline Step 4 (Upcoming) */}
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 9,
                    border: `2px solid ${isDark ? '#404040' : '#D1D5DB'}`,
                    backgroundColor: colors.cardBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 12,
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: isDark ? '#404040' : '#D1D5DB',
                    }}
                  />
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    backgroundColor: isDark ? '#171717' : '#FFFFFF',
                    borderRadius: 8,
                    border: `1px solid ${colors.border}`,
                    padding: '12px 16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      color: colors.subtle,
                      display: 'block',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    22 Apr 2026 (Est)
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: colors.subtle,
                      display: 'block',
                      marginTop: 4,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Decision
                  </span>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      marginTop: 8,
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: colors.pendingDot,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 11,
                        color: colors.subtle,
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      }}
                    >
                      2 days remaining
                    </span>
                    <span
                      style={{
                        padding: '2px 6px',
                        borderRadius: 4,
                        backgroundColor: colors.pendingBadgeBg,
                        color: colors.pendingBadgeText,
                        fontSize: 11,
                        fontWeight: 600,
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      }}
                    >
                      Pending
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              paddingTop: 16,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
            }}
          >
            <span
              style={{
                fontSize: 10,
                color: colors.subtle,
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              }}
            >
              Powered by -
            </span>
            <img
              src="/Digital_India_logo.svg"
              alt="Digital India"
              style={{
                height: 18,
                filter: isDark ? 'brightness(0) invert(1)' : 'none',
              }}
            />
          </div>
        </div>

        {/* Floating Bottom Toast Banner */}
        {isBannerVisible && (
          <div
            style={{
              position: 'absolute',
              bottom: 16,
              left: 16,
              right: 16,
              borderRadius: 8,
              boxShadow: isDark
                ? '0 8px 24px rgba(0, 0, 0, 0.6)'
                : '0 8px 24px rgba(0, 0, 0, 0.12)',
              backgroundColor: colors.toastBg,
              border: `1px solid ${colors.border}`,
              padding: '14px 16px',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 20,
                  color: colors.toastIcon,
                  marginTop: 1,
                }}
              >
                info
              </span>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: colors.onSurface,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Application Under Review
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: colors.subtle,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    12:30PM
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 12,
                    color: colors.subtle,
                    marginTop: 4,
                    lineHeight: 1.4,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Your application moved to Under Review. This banner auto-dismisses in 5 seconds.
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Auto-dismiss Banner</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Demonstrates an auto-dismissing toast banner alerting the citizen when their application transitions to Under Review.
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
