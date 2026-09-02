import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gJourneyTimeline } from '../../../src/components/journey-timeline/JourneyTimeline';
import { CodeBlock } from '../components/CodeBlock';

interface GrievanceStatusTrackerDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type StatusType = 'In Progress' | 'In Progress (2nd Variant)' | 'Assigned' | 'Escalated' | 'Resolved' | 'Reopened';

export const GrievanceStatusTrackerDoc: React.FC<GrievanceStatusTrackerDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [status, setStatus] = useState<StatusType>('In Progress');

  const colors = useMemo(() => {
    return {
      screenBg: isDark ? UX4GColors.primary900 : UX4GColors.primary50,
      cardBg: isDark ? UX4GColors.neutral800 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral700 : '#EEEEF0',
      titleColor: isDark ? '#FFFFFF' : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      mutedText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral600,
      primary: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      headerBg: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
    };
  }, [isDark]);

  const getStatusTagColors = () => {
    switch (status) {
      case 'Resolved':
        return {
          icon: isDark ? UX4GColors.green500 : UX4GColors.green600,
          text: isDark ? UX4GColors.green300 : UX4GColors.green800,
          bg: isDark ? UX4GColors.green800 : UX4GColors.green100,
          iconName: 'check_circle',
        };
      case 'Assigned':
        return {
          icon: isDark ? UX4GColors.primary300 : UX4GColors.primary800,
          text: isDark ? UX4GColors.primary300 : UX4GColors.primary800,
          bg: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
          iconName: 'assignment_ind',
        };
      case 'Escalated':
        return {
          icon: isDark ? UX4GColors.orange500 : UX4GColors.orange600,
          text: isDark ? UX4GColors.orange300 : UX4GColors.orange800,
          bg: isDark ? UX4GColors.orange800 : UX4GColors.orange100,
          iconName: 'warning',
        };
      case 'Reopened':
        return {
          icon: isDark ? UX4GColors.orange500 : UX4GColors.orange600,
          text: isDark ? UX4GColors.orange300 : UX4GColors.orange800,
          bg: isDark ? UX4GColors.orange800 : UX4GColors.orange100,
          iconName: 'replay',
        };
      default: // In Progress
        return {
          icon: isDark ? UX4GColors.orange500 : UX4GColors.orange600,
          text: isDark ? UX4GColors.orange300 : UX4GColors.orange800,
          bg: isDark ? UX4GColors.orange800 : UX4GColors.orange100,
          iconName: 'assignment',
        };
    }
  };

  const tagColors = getStatusTagColors();

  const codeString = useMemo(() => {
    return `import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gJourneyTimeline,
  Ux4gLinearProgressBar,
  Ux4gUnifiedPillTag,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const GrievanceStatusTrackerPattern = ({
  isDark = ${isDark},
  status = '${status}',
}: {
  isDark?: boolean;
  status?: 'In Progress' | 'In Progress (2nd Variant)' | 'Assigned' | 'Escalated' | 'Resolved' | 'Reopened';
}) => {
  const displayStatus = status.startsWith('In Progress') ? 'In Progress' : status;

  return (
    <View style={[styles.screen, { backgroundColor: isDark ? UX4GColors.primary900 : UX4GColors.primary50 }]}>
      <Ux4gAppHeader
        title="Application Status"
        variant="filled"
        backgroundColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
        showBackButton={true}
        onBackPressed={() => {}}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral0 }]}>
          <View style={styles.cardHeaderRow}>
            <Text style={[styles.title, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
              Delay in certificate issuance
            </Text>
            <Ux4gUnifiedPillTag
              label={displayStatus}
              size="small"
            />
          </View>
          <Text style={[styles.subtleText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            Grievance ID · GRV-2026-MH-04127
          </Text>
          <Text style={[styles.slaLabel, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
            8 days left
          </Text>
          <Ux4gLinearProgressBar
            progress={0.55}
            height={8}
            showPercentage={false}
            trackColor={isDark ? UX4GColors.neutral700 : '#EEEEEE'}
            progressColor={isDark ? UX4GColors.secondary300 : UX4GColors.secondary600}
          />
        </View>

        <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral0, marginTop: 16 }]}>
          <Ux4gJourneyTimeline
            header={{
              title: 'Grievance Journey',
              description: 'Tracking stages of resolution',
            }}
            steps={[
              { state: 'completed', date: '02 Apr 2026', title: 'Grievance lodged' },
              { state: 'completed', date: '05 Apr 2026', title: 'Assigned to grievance officer' },
              { state: 'current', date: '08 Apr 2026', title: 'Under review by officer' },
              { state: 'upcoming', date: 'Est. 10 Apr 2026', title: 'Escalated to District Officer' },
              { state: 'upcoming', date: 'Est. 14 Apr 2026', title: 'Resolution issued' },
            ]}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  scrollContainer: { padding: 16 },
  card: {
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: '#EEEEF0',
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: { fontSize: 15, fontWeight: '700' },
  subtleText: { fontSize: 12, marginTop: 4 },
  slaLabel: { fontSize: 12, fontWeight: '700', marginTop: 10, marginBottom: 6 },
});
`;
  }, [isDark, status]);

  const renderStateCard = () => {
    if (status === 'In Progress') {
      return (
        <div
          style={{
            margin: '12px 16px 0 16px',
            padding: 14,
            backgroundColor: colors.cardBg,
            border: `1px solid ${colors.border}`,
            borderRadius: 10,
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 600, color: colors.titleColor }}>
            Grievance details
          </div>
          <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { label: 'Category', value: 'Certificate Issuance' },
              { label: 'Lodged on', value: '02 Apr 2026' },
              { label: 'Against', value: 'Revenue Dept, Pune' },
              { label: 'Current stage', value: 'District Officer' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 12, color: colors.subtleText, width: 110 }}>{row.label}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: colors.titleColor, textAlign: 'right' }}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (status === 'Assigned') {
      return (
        <div
          style={{
            margin: '12px 16px 0 16px',
            padding: 14,
            backgroundColor: colors.cardBg,
            border: `1px solid ${colors.border}`,
            borderRadius: 10,
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 600, color: colors.titleColor }}>
            Assigned officer
          </div>
          <div style={{ fontSize: 15, fontWeight: 600, color: colors.titleColor, marginTop: 8 }}>
            District Grievance Officer
          </div>
          <div style={{ fontSize: 12, color: colors.subtleText, marginTop: 2 }}>
            Revenue Department, Pune
          </div>
          <div style={{ marginTop: 10, display: 'flex', gap: 16 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: colors.subtleText }}>Office contact</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: colors.titleColor, marginTop: 2 }}>020-2612-XXXX</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: colors.subtleText }}>Handling since</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: colors.titleColor, marginTop: 2 }}>08 Apr 2026</div>
            </div>
          </div>
          <div style={{ fontSize: 11, color: colors.mutedText, fontStyle: 'italic', marginTop: 10 }}>
            Officers are identified by designation only — never by personal name.
          </div>
        </div>
      );
    }

    if (status === 'Escalated') {
      return (
        <div
          style={{
            margin: '12px 16px 0 16px',
            padding: 14,
            backgroundColor: colors.cardBg,
            border: `1px solid ${colors.border}`,
            borderRadius: 10,
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 600, color: colors.titleColor }}>
            Escalation path
          </div>
          <div style={{ fontSize: 11, color: colors.subtleText, marginTop: 4, lineHeight: '1.4' }}>
            Your grievance moves up a level if it is not resolved within the SLA.
          </div>
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { level: 'Level 1 - District Grievance Officer', sub: 'Revenue Dept, Pune · Active since 10 Apr 2026' },
              { level: 'Level 2 - State Appellate Authority', sub: 'Pending — escalates after SLA breach' },
              { level: 'Level 3 · CPGRAMS (National portal)', sub: 'Pending — final escalation level' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: 10,
                  borderRadius: 8,
                  backgroundColor: isDark ? UX4GColors.neutral900 : '#F9FAFB',
                  border: `1px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.neutral200}`,
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 600, color: colors.subtleText }}>{item.level}</div>
                <div style={{ fontSize: 11, color: colors.mutedText, marginTop: 3, lineHeight: '1.4' }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (status === 'Resolved') {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {/* Success Banner */}
          <div
            style={{
              margin: '12px 16px 0 16px',
              padding: '12px 14px',
              backgroundColor: isDark ? '#00381F' : '#F2FCEF',
              border: `1px solid ${isDark ? '#128937' : '#80DA88'}`,
              borderRadius: 10,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20, fontVariationSettings: "'FILL' 1", color: isDark ? '#1AA64A' : '#128937', flexShrink: 0 }}>
              check_circle
            </span>
            <span style={{ fontSize: 12, fontWeight: 500, color: isDark ? '#80DA88' : '#00522C', lineHeight: '1.4' }}>
              Grievance resolved on 14 Apr 2026 – certificate issued
            </span>
          </div>

          {/* Survey Card */}
          <div
            style={{
              margin: '12px 16px 0 16px',
              padding: 14,
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.border}`,
              borderRadius: 10,
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 600, color: colors.titleColor }}>
              Are you satisfied with the resolution?
            </div>
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <button
                type="button"
                onClick={() => alert('Satisfied')}
                style={{
                  width: '100%',
                  height: 48,
                  backgroundColor: 'transparent',
                  color: isDark ? colors.primary : UX4GColors.primary600,
                  border: `1.5px solid ${isDark ? colors.primary : UX4GColors.primary600}`,
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Yes, satisfied
              </button>
              <button
                type="button"
                onClick={() => alert('Reopen')}
                style={{
                  width: '100%',
                  height: 48,
                  backgroundColor: 'transparent',
                  color: isDark ? colors.primary : UX4GColors.primary600,
                  border: `1.5px solid ${isDark ? colors.primary : UX4GColors.primary600}`,
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                No, reopen
              </button>
            </div>
            <div style={{ fontSize: 11, color: colors.mutedText, marginTop: 10, lineHeight: '1.4' }}>
              You have 30 days from the resolution date to reopen this complaint.
            </div>
          </div>
        </div>
      );
    }

    if (status === 'Reopened') {
      return (
        <div
          style={{
            margin: '12px 16px 0 16px',
            padding: 14,
            backgroundColor: colors.cardBg,
            border: `1px solid ${colors.border}`,
            borderRadius: 10,
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ fontSize: 15, fontWeight: 600, color: colors.titleColor }}>
            Reopen your complaint
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: colors.titleColor, marginTop: 14 }}>
            Why are you not satisfied?
          </div>
          <div
            style={{
              marginTop: 6,
              padding: '10px 12px',
              borderRadius: 8,
              border: `1px solid ${colors.border}`,
              backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 13, color: colors.titleColor }}>Certificate still not issued</span>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: colors.subtleText }}>
              keyboard_arrow_down
            </span>
          </div>

          <div style={{ fontSize: 13, fontWeight: 600, color: colors.titleColor, marginTop: 14 }}>
            Additional details
          </div>
          <div
            style={{
              marginTop: 6,
              height: 80,
              padding: 12,
              borderRadius: 8,
              border: `1px solid ${colors.border}`,
              backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
            }}
          >
            <span style={{ fontSize: 12, color: colors.mutedText, lineHeight: '1.4' }}>
              Add any details that will help us re-examine your grievance.
            </span>
          </div>

          <button
            type="button"
            onClick={() => alert('Reopen complaint')}
            style={{
              marginTop: 16,
              width: '100%',
              height: 48,
              backgroundColor: isDark ? colors.primary : UX4GColors.primary600,
              color: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
              border: 'none',
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Reopen complaint
          </button>
          <div style={{ textAlign: 'center', marginTop: 8 }}>
            <button
              type="button"
              onClick={() => alert('Cancel')}
              style={{
                background: 'transparent',
                border: 'none',
                color: colors.primary,
                fontSize: 14,
                fontWeight: 500,
                cursor: 'pointer',
                padding: '6px 12px',
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      );
    }

    return null;
  };

  const renderLiveMockup = () => {
    const displayStatus = status.startsWith('In Progress') ? 'In Progress' : status;
    const assignedOrLater = ['Assigned', 'In Progress', 'In Progress (2nd Variant)', 'Escalated', 'Resolved', 'Reopened'].includes(status);
    const underReviewOrLater = ['In Progress', 'In Progress (2nd Variant)', 'Escalated', 'Resolved', 'Reopened'].includes(status);
    const escalatedOrLater = ['Escalated', 'Resolved', 'Reopened'].includes(status);
    const isResolved = ['Resolved', 'Reopened'].includes(status);

    const step1State = 'completed';
    const step2State = assignedOrLater ? 'completed' : 'current';
    const step3State = underReviewOrLater ? 'completed' : (assignedOrLater ? 'current' : 'upcoming');
    const step4State = isResolved ? 'completed' : (escalatedOrLater ? 'current' : 'upcoming');
    const step5State = isResolved ? 'completed' : 'upcoming';

    const getActiveCardColor = (s: string) => (s === 'current' ? (isDark ? UX4GColors.primary950 : UX4GColors.primary50) : undefined);
    const getActiveBorderColor = (s: string) => (s === 'current' ? (isDark ? UX4GColors.primary300 : UX4GColors.primary600) : undefined);

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
        {/* Filled Purple App Header */}
        <Ux4gAppHeader
          title="Application Status"
          variant="filled"
          elevation={0}
          useSafeArea={false}
          horizontalPadding={16}
          backgroundColor={colors.headerBg}
          showBackButton={true}
          onBackPressed={() => {}}
        />

        {/* Scrollable Container */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Top Info Card */}
            <div
              style={{
                margin: '12px 16px 0 16px',
                padding: 14,
                backgroundColor: colors.cardBg,
                border: `1px solid ${colors.border}`,
                borderRadius: 10,
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
                boxSizing: 'border-box',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: colors.titleColor, letterSpacing: '-0.01em', flex: 1 }}>
                  Delay in certificate issuance
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: '3px 8px',
                    borderRadius: 4,
                    backgroundColor: tagColors.bg,
                    color: tagColors.text,
                    lineHeight: '1.2',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 13, fontVariationSettings: "'FILL' 1", color: tagColors.icon }}>
                    {tagColors.iconName}
                  </span>
                  {displayStatus}
                </span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 400, color: colors.subtleText, marginTop: 4 }}>
                Grievance ID · GRV-2026-MH-04127
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: colors.titleColor, marginTop: 10, marginBottom: 6 }}>
                8 days left
              </div>
              <div
                style={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: isDark ? UX4GColors.neutral700 : '#EEEEEE',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: '55%',
                    borderRadius: 4,
                    background: isDark
                      ? `linear-gradient(90deg, ${UX4GColors.secondary700}, ${UX4GColors.secondary300})`
                      : `linear-gradient(90deg, ${UX4GColors.secondary200}, ${UX4GColors.secondary600})`,
                  }}
                />
              </div>
            </div>

            {/* State Card */}
            {renderStateCard()}

            {/* Journey Timeline Container (Hidden for Reopened & In Progress per Flutter spec) */}
            {!['Reopened', 'In Progress'].includes(status) && (
              <div
                style={{
                  margin: '16px 16px 16px 16px',
                  padding: 14,
                  backgroundColor: colors.cardBg,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 10,
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
                }}
              >
                <Ux4gJourneyTimeline
                  activeColor={colors.primary}
                  header={{
                    title: 'Grievance Journey',
                    description: 'Tracking stages of resolution',
                  }}
                  steps={[
                    {
                      state: step1State,
                      date: '02 Apr 2026',
                      title: 'Grievance lodged',
                      cardColor: getActiveCardColor(step1State),
                      cardBorderColor: getActiveBorderColor(step1State),
                    },
                    {
                      state: step2State,
                      date: '05 Apr 2026',
                      title: 'Assigned to grievance officer',
                      cardColor: getActiveCardColor(step2State),
                      cardBorderColor: getActiveBorderColor(step2State),
                    },
                    {
                      state: step3State,
                      date: assignedOrLater ? '08 Apr 2026' : 'Est. 08 Apr 2026',
                      title: 'Under review by officer',
                      cardColor: getActiveCardColor(step3State),
                      cardBorderColor: getActiveBorderColor(step3State),
                    },
                    {
                      state: step4State,
                      date: escalatedOrLater ? '10 Apr 2026' : 'Est. 10 Apr 2026',
                      title: 'Escalated to District Officer',
                      cardColor: getActiveCardColor(step4State),
                      cardBorderColor: getActiveBorderColor(step4State),
                    },
                    {
                      state: step5State,
                      date: isResolved ? '14 Apr 2026' : 'Est. 14 Apr 2026',
                      title: 'Resolution issued',
                      cardColor: getActiveCardColor(step5State),
                      cardBorderColor: getActiveBorderColor(step5State),
                    },
                  ]}
                />
              </div>
            )}
            <div style={{ height: 16 }} />
          </div>

          {/* Brand Footer */}
          <div style={{ padding: '12px 0 16px 0', textAlign: 'center', backgroundColor: colors.screenBg, flexShrink: 0 }}>
            <div style={{ fontSize: 11, fontWeight: 500, color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }}>
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
          <h1 className="wb-title">Grievance Status Tracker</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Tracks the end-to-end lifecycle of a citizen grievance through five states: In Progress, Assigned, Escalated, Resolved, and Reopened. Use the Status knob to preview each state.
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
                    {/* Status Knob */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }}>
                        Status:
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
                        {(['In Progress', 'In Progress (2nd Variant)', 'Assigned', 'Escalated', 'Resolved', 'Reopened'] as StatusType[]).map((st) => (
                          <button
                            key={st}
                            type="button"
                            onClick={() => setStatus(st)}
                            style={{
                              padding: '6px 12px',
                              borderRadius: 6,
                              border: 'none',
                              fontSize: 12,
                              fontWeight: 600,
                              cursor: 'pointer',
                              backgroundColor: status === st ? UX4GColors.primary : 'transparent',
                              color: status === st ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                              transition: 'all 0.2s ease',
                            }}
                          >
                            {st}
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
                    Active Status: <span style={{ color: UX4GColors.primary }}>{status}</span>
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

export default GrievanceStatusTrackerDoc;
