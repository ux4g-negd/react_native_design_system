import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { Ux4gLinearProgressBar } from '../../../src/components/linear-progress-bar/LinearProgressBar';
import { Ux4gToast } from '../../../src/components/toast/Toast';
import { Ux4gJourneyTimeline } from '../../../src/components/journey-timeline/JourneyTimeline';
import { Ux4gTag } from '../../../src/components/tag/Tag';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface LiveStatusDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

export const LiveStatusDoc: React.FC<LiveStatusDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  // Colors matching Flutter proactive_status_update_stories.dart for stateVariant = 'live'
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
      badgeBg: isDark ? '#064E3B' : '#DCFCE7',
      badgeText: isDark ? '#6EE7B7' : '#15803D',
      currentCardBg: isDark ? '#2E1A47' : '#F3F0FF',
      pendingBadgeBg: isDark ? '#3B0A0A' : '#FEF2F2',
      pendingBadgeText: isDark ? '#F87171' : '#DC2626',
      pendingDot: isDark ? '#FDE68A' : '#D97706',
    };
  }, [isDark]);

  // Clean TSX Code string matching Flutter _getProactiveStatusCode('live')
  const codeString = useMemo(() => {
    return `import React from 'react';
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
  Ux4gTag,
  Ux4gLinearProgressBar,
  Ux4gJourneyTimeline,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const LiveStatusPattern = () => {
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
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, paddingBottom: 20 }}>
        {/* Back Link */}
        <TouchableOpacity style={styles.backRow} onPress={() => {}}>
          <Text style={styles.backArrow}>←</Text>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <View style={{ height: 16 }} />

        {/* Card 1: Application Status with Live Green Badge */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <Text style={styles.cardTitle}>Income Certificate</Text>
            <Ux4gTag
              text="Live"
              style="tonal"
              size="m"
              backgroundColor="#DCFCE7"
              textColor="#15803D"
            />
          </View>

          <Text style={styles.cardSubtitle}>Application ID · INC-2026-MH-04127</Text>

          <View style={{ height: 14 }} />

          <Ux4gLinearProgressBar
            value={0.38}
            label="8 days left"
            height={6}
            shape="rounded"
            gradientColors={['#F59E0B', '#D97706']}
          />
        </View>

        <View style={{ height: 16 }} />

        {/* Card 2: Application Journey Timeline */}
        <View style={styles.card}>
          <Ux4gJourneyTimeline
            activeColor={UX4GColors.primary}
            indicatorSize={18}
            lineWidth={2}
            header={{
              title: 'Application journey',
              description: 'Every step from submission to issuance',
            }}
            steps={[
              {
                state: 'completed',
                date: '07 Apr 2026, 10:24 AM',
                title: 'Application Submitted',
              },
              {
                state: 'completed',
                date: '10 Apr 2026, 02:15 PM',
                title: 'Documents Verified',
              },
              {
                state: 'current',
                date: '11 Apr 2026 (Est)',
                title: 'Under Review',
                dateColor: UX4GColors.primary,
                cardColor: '#F3F0FF',
                cardBorderColor: UX4GColors.primary,
              },
              {
                state: 'upcoming',
                date: '22 Apr 2026 (Est)',
                title: 'Decision',
                status: {
                  text: '2 days remaining',
                  dotColor: '#D97706',
                  badgeText: 'Pending',
                  badgeColor: '#FEF2F2',
                  badgeTextColor: '#DC2626',
                },
              },
            ]}
          />
        </View>

        <View style={{ height: 32 }} />

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.poweredByText}>Powered by -</Text>
          <Image source={{ uri: '/Digital_India_logo.svg' }} style={styles.digitalIndiaLogo} resizeMode="contain" />
        </View>
      </ScrollView>
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
  cardSubtitle: { fontSize: 12, color: '#6B7280', marginTop: 4 },
  footer: { alignItems: 'center' },
  poweredByText: { fontSize: 10, color: UX4GColors.neutral400 },
  digitalIndiaLogo: { height: 18, width: 60, marginTop: 4 },
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
            padding: '16px 16px 24px 16px',
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

          {/* Card 1: Application Status with Live Badge */}
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
                Live
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
              <Ux4gLinearProgressBar
                value={0.38}
                label="8 days left"
                height={6}
                shape="rounded"
                gradientColors={['#F59E0B', '#D97706']}
              />
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
            <Ux4gJourneyTimeline
              activeColor={colors.primary}
              indicatorSize={18}
              lineWidth={2}
              header={{
                title: 'Application journey',
                description: 'Every step from submission to issuance',
              }}
              steps={[
                {
                  state: 'completed',
                  date: '07 Apr 2026, 10:24 AM',
                  title: 'Application Submitted',
                },
                {
                  state: 'completed',
                  date: '10 Apr 2026, 02:15 PM',
                  title: 'Documents Verified',
                },
                {
                  state: 'current',
                  date: '11 Apr 2026 (Est)',
                  title: 'Under Review',
                  dateColor: colors.primary,
                  cardColor: colors.currentCardBg,
                  cardBorderColor: colors.primary,
                },
                {
                  state: 'upcoming',
                  date: '22 Apr 2026 (Est)',
                  title: 'Decision',
                  status: {
                    text: '2 days remaining',
                    dotColor: colors.pendingDot,
                    badgeText: 'Pending',
                    badgeColor: colors.pendingBadgeBg,
                    badgeTextColor: colors.pendingBadgeText,
                  },
                },
              ]}
            />
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
      </div>
    );
  };

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Live Status</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Demonstrates the application card view connected to a real-time live status feed (Live green badge).
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
