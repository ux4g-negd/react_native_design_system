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
      primaryLight: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      headerBg: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
    };
  }, [isDark]);

  const getStatusTagColors = () => {
    switch (status) {
      case 'Resolved':
        return {
          icon: isDark ? '#52C41A' : '#128937',
          text: isDark ? '#80DA88' : '#00522C',
          bg: isDark ? '#00381F' : '#DDF8D8',
          iconName: 'check_circle',
        };
      case 'Assigned':
        return {
          icon: isDark ? '#FFAB27' : '#FA8C16',
          text: isDark ? '#FFC973' : '#AD4E00',
          bg: isDark ? '#592D00' : '#FFE7BF',
          iconName: 'assignment_ind',
        };
      case 'Escalated':
        return {
          icon: isDark ? '#FFAB27' : '#FA8C16',
          text: isDark ? '#FFC973' : '#AD4E00',
          bg: isDark ? '#592D00' : '#FFE7BF',
          iconName: 'warning',
        };
      case 'Reopened':
        return {
          icon: isDark ? '#FFAB27' : '#FA8C16',
          text: isDark ? '#FFC973' : '#AD4E00',
          bg: isDark ? '#592D00' : '#FFE7BF',
          iconName: 'replay',
        };
      default: // In Progress
        return {
          icon: isDark ? '#FFAB27' : '#FA8C16',
          text: isDark ? '#FFC973' : '#AD4E00',
          bg: isDark ? '#592D00' : '#FFE7BF',
          iconName: 'description',
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
  Image,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gJourneyTimeline,
  Ux4gLinearProgressBar,
  Ux4gUnifiedPillTag,
  UX4GColors,
} from 'ux4g-react-native-components';

export const GrievanceStatusTrackerPattern = ({
  isDark = ${isDark},
  status = '${status}',
}: {
  isDark?: boolean;
  status?: 'In Progress' | 'In Progress (2nd Variant)' | 'Assigned' | 'Escalated' | 'Resolved' | 'Reopened';
}) => {
  const displayStatus = status.startsWith('In Progress') ? 'In Progress' : status;
  const isAmberCard = status === 'In Progress' || status === 'In Progress (2nd Variant)' || status === 'Assigned' || status === 'Escalated' || status === 'Reopened';
  const isResolved = status === 'Resolved';

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
        {/* Success Banner */}
        {isResolved && (
          <View style={[styles.banner, { backgroundColor: isDark ? '#00381F' : '#F2FCEF', borderColor: isDark ? '#128937' : '#80DA88' }]}>
            <Text style={{ fontSize: 16, color: isDark ? '#1AA64A' : '#128937', marginRight: 8 }}>✔</Text>
            <Text style={{ fontSize: 12, fontWeight: '500', color: isDark ? '#80DA88' : '#00522C', flex: 1, lineHeight: 17 }}>
              Grievance resolved on 14 Apr 2026 - certificate issued
            </Text>
          </View>
        )}

        {/* Top Info Card */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: isAmberCard
                ? (isDark ? '#3D2000' : '#FFF7E6')
                : isResolved
                ? (isDark ? '#00381F' : '#F6FFED')
                : (isDark ? UX4GColors.neutral800 : UX4GColors.neutral0),
              borderColor: isAmberCard
                ? (isDark ? '#FA8C16' : '#FFC973')
                : isResolved
                ? (isDark ? '#128937' : '#B7EB8F')
                : (isDark ? UX4GColors.neutral700 : '#EEEEF0'),
              marginTop: isResolved ? 12 : 0,
            },
          ]}
        >
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
          {!isResolved && (
            <>
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
            </>
          )}
        </View>

        {/* Grievance Details Card */}
        {status === 'In Progress' && (
          <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral0, marginTop: 16 }]}>
            <Text style={[styles.detailsTitle, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
              Grievance details
            </Text>
            <View style={styles.detailsList}>
              {[
                { label: 'Category', value: 'Certificate issuance' },
                { label: 'Lodged on', value: '02 Apr 2026' },
                { label: 'Against', value: 'Revenue Dept, Pune' },
                { label: 'Current stage', value: 'District Officer' },
              ].map((row, i) => (
                <View key={i} style={styles.detailsRow}>
                  <Text style={[styles.detailsLabel, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
                    {row.label}
                  </Text>
                  <Text style={[styles.detailsValue, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
                    {row.value}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Assigned Officer Card */}
        {status === 'Assigned' && (
          <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral0, marginTop: 16 }]}>
            <Text style={[styles.detailsTitle, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
              Assigned officer
            </Text>
            <Text style={[styles.officerRole, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
              District Grievance Officer
            </Text>
            <Text style={[styles.officerDept, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
              Revenue Department, Pune
            </Text>
            <View style={[styles.detailsList, { marginTop: 12 }]}>
              <View style={styles.detailsRow}>
                <Text style={[styles.detailsLabel, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
                  Office contact
                </Text>
                <Text style={[styles.detailsValue, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
                  020-2612-XXXX
                </Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={[styles.detailsLabel, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
                  Handling since
                </Text>
                <Text style={[styles.detailsValue, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
                  08 Apr 2026
                </Text>
              </View>
            </View>
            <Text style={[styles.officerNote, { color: isDark ? UX4GColors.neutral500 : UX4GColors.neutral600 }]}>
              Officers are identified by designation only — never by personal name.
            </Text>
          </View>
        )}

        {/* Escalation Path Card */}
        {status === 'Escalated' && (
          <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral0, marginTop: 16 }]}>
            <Text style={[styles.detailsTitle, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
              Escalation path
            </Text>
            <Text style={[styles.escalationSubtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
              Your grievance moves up a level if it is not resolved within the SLA.
            </Text>
            <View style={[styles.detailsList, { marginTop: 12 }]}>
              {[
                { level: 'Level 1 · District Grievance Officer', sub: 'Revenue Dept, Pune · Active since 10 Apr 2026' },
                { level: 'Level 2 · State Appellate Authority', sub: 'Pending — escalates after SLA breach' },
                { level: 'Level 3 · CPGRAMS (National portal)', sub: 'Pending — final escalation level' },
              ].map((item, i) => (
                <View
                  key={i}
                  style={[
                    styles.escalationItem,
                    {
                      backgroundColor: isDark ? UX4GColors.neutral900 : '#F9FAFB',
                      borderColor: isDark ? UX4GColors.neutral700 : '#EEEEEE',
                    },
                  ]}
                >
                  <Text style={[styles.escalationLevelTitle, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
                    {item.level}
                  </Text>
                  <Text style={[styles.escalationLevelSub, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
                    {item.sub}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Survey Card */}
        {isResolved && (
          <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral0, marginTop: 16 }]}>
            <Text style={[styles.detailsTitle, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
              Are you satisfied with the resolution?
            </Text>
            <View style={{ gap: 10, marginTop: 12 }}>
              <Ux4gButton
                text="Yes, satisfied"
                variant="outline"
                size="large"
                style={{
                  width: '100%',
                  height: 48,
                  borderColor: isDark ? UX4GColors.primary300 : '#A391FF',
                  backgroundColor: 'transparent',
                }}
                contentColor={isDark ? UX4GColors.primary300 : UX4GColors.primary}
              />
              <Ux4gButton
                text="No, reopen"
                variant="outline"
                size="large"
                style={{
                  width: '100%',
                  height: 48,
                  borderColor: isDark ? UX4GColors.primary300 : '#A391FF',
                  backgroundColor: 'transparent',
                }}
                contentColor={isDark ? UX4GColors.primary300 : UX4GColors.primary}
              />
            </View>
            <Text style={[styles.surveyNote, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
              You have 30 days from the resolution date to reopen this complaint.
            </Text>
          </View>
        )}

        {/* Reopen Complaint Form Card */}
        {status === 'Reopened' && (
          <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral0, marginTop: 16 }]}>
            <Text style={[styles.detailsTitle, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
              Reopen your complaint
            </Text>
            <Text style={[styles.formLabel, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 }]}>
              Why are you not satisfied?
            </Text>
            <View
              style={[
                styles.selectInput,
                {
                  backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
                  borderColor: isDark ? UX4GColors.neutral700 : '#E5E7EB',
                },
              ]}
            >
              <Text style={{ fontSize: 13, color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }}>
                Certificate still not issued
              </Text>
              <Text style={{ fontSize: 16, color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }}>▼</Text>
            </View>
            <Text style={[styles.formLabel, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600, marginTop: 14 }]}>
              Additional details
            </Text>
            <View
              style={[
                styles.textArea,
                {
                  backgroundColor: isDark ? UX4GColors.neutral900 : '#F9FAFB',
                  borderColor: isDark ? UX4GColors.neutral700 : '#E5E7EB',
                },
              ]}
            >
              <Text style={{ fontSize: 12, color: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400, lineHeight: 17 }}>
                Add any details that will help us re-examine your grievance.
              </Text>
            </View>
            <Ux4gButton
              text="Reopen complaint"
              variant="filled"
              size="large"
              style={{
                width: '100%',
                height: 48,
                marginTop: 16,
                backgroundColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
              }}
              contentColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral0}
            />
            <Ux4gButton
              text="Cancel"
              variant="link"
              size="medium"
              style={{ alignSelf: 'center', marginTop: 8 }}
              contentColor={isDark ? UX4GColors.primary300 : UX4GColors.primary}
            />
          </View>
        )}

        {/* Journey Timeline Container (for In Progress (2nd Variant), Assigned, Escalated, Resolved) */}
        {!['Reopened', 'In Progress'].includes(status) && (
          <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral0, marginTop: 16 }]}>
            <Ux4gJourneyTimeline
              header={{
                title: 'Grievance journey',
                description: 'Every update from lodging to resolution',
              }}
              steps={[
                {
                  state: 'completed',
                  date: '02 Apr 2026',
                  title: 'Grievance lodged',
                },
                {
                  state: 'completed',
                  date: '05 Apr 2026',
                  title: 'Assigned to grievance officer',
                },
                {
                  state: 'completed',
                  date: '08 Apr 2026',
                  title: 'Under review by officer',
                },
                {
                  state: status === 'Escalated' ? 'current' : status === 'Resolved' ? 'completed' : 'upcoming',
                  date: status === 'Escalated' || status === 'Resolved' ? '10 Apr 2026' : 'Est. 10 Apr 2026',
                  title: 'Escalated to District Officer',
                  cardColor: status === 'Escalated' ? (isDark ? UX4GColors.primary900 : UX4GColors.primary50) : undefined,
                  cardBorderColor: status === 'Escalated' ? (isDark ? UX4GColors.primary400 : UX4GColors.primary300) : undefined,
                },
                {
                  state: status === 'Resolved' ? 'completed' : 'upcoming',
                  date: status === 'Resolved' ? '14 Apr 2026' : 'Est. 14 Apr 2026',
                  title: 'Resolution issued',
                  cardColor: status === 'Resolved' ? (isDark ? UX4GColors.primary900 : UX4GColors.primary50) : undefined,
                  cardBorderColor: status === 'Resolved' ? (isDark ? UX4GColors.primary400 : UX4GColors.primary300) : undefined,
                },
              ]}
            />
          </View>
        )}

        {/* Footer */}
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
  scrollContainer: { padding: 16 },
  banner: { flexDirection: 'row', alignItems: 'center', padding: 12, borderRadius: 10, borderWidth: 1, marginBottom: 12 },
  card: {
    borderRadius: 14,
    padding: 16,
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
  detailsTitle: { fontSize: 14, fontWeight: '700', marginBottom: 12 },
  detailsList: { gap: 10 },
  detailsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  detailsLabel: { fontSize: 13 },
  detailsValue: { fontSize: 13, fontWeight: '600' },
  officerRole: { fontSize: 15, fontWeight: '700', marginTop: 4 },
  officerDept: { fontSize: 12, marginTop: 2 },
  officerNote: { fontSize: 11, fontStyle: 'italic', marginTop: 12, lineHeight: 15 },
  escalationSubtitle: { fontSize: 11, marginTop: 2, lineHeight: 15 },
  escalationItem: { padding: 10, borderRadius: 8, borderWidth: 1 },
  escalationLevelTitle: { fontSize: 12, fontWeight: '700' },
  escalationLevelSub: { fontSize: 11, marginTop: 2 },
  surveyNote: { fontSize: 11, marginTop: 10, lineHeight: 15 },
  formLabel: { fontSize: 12, fontWeight: '500', marginBottom: 6 },
  selectInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  textArea: {
    padding: 12,
    height: 80,
    borderRadius: 8,
    borderWidth: 1,
  },
  footer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, marginVertical: 24 },
  poweredByText: { fontSize: 11, fontWeight: '500' },
  digitalIndiaLogo: { height: 22, width: 80 },
});
`;
  }, [isDark, status]);

  const renderStateCard = () => {
    if (status === 'In Progress') {
      return (
        <div
          style={{
            margin: '12px 16px 0 16px',
            padding: 16,
            backgroundColor: colors.cardBg,
            border: `1px solid ${colors.border}`,
            borderRadius: 14,
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 700, color: colors.titleColor }}>
            Grievance details
          </div>
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Category', value: 'Certificate issuance' },
              { label: 'Lodged on', value: '02 Apr 2026' },
              { label: 'Against', value: 'Revenue Dept, Pune' },
              { label: 'Current stage', value: 'District Officer' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 13, color: colors.subtleText, width: 110 }}>{row.label}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: colors.titleColor, textAlign: 'right' }}>{row.value}</span>
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
            padding: 16,
            backgroundColor: colors.cardBg,
            border: `1px solid ${colors.border}`,
            borderRadius: 14,
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 700, color: colors.titleColor }}>
            Assigned officer
          </div>
          <div style={{ fontSize: 15, fontWeight: 700, color: colors.titleColor, marginTop: 8 }}>
            District Grievance Officer
          </div>
          <div style={{ fontSize: 12, color: colors.subtleText, marginTop: 2 }}>
            Revenue Department, Pune
          </div>
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 13, color: colors.subtleText }}>Office contact</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: colors.titleColor }}>020-2612-XXXX</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 13, color: colors.subtleText }}>Handling since</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: colors.titleColor }}>08 Apr 2026</span>
            </div>
          </div>
          <div style={{ fontSize: 11, color: colors.mutedText, fontStyle: 'italic', marginTop: 12, lineHeight: '1.4' }}>
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
            padding: 16,
            backgroundColor: colors.cardBg,
            border: `1px solid ${colors.border}`,
            borderRadius: 14,
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 700, color: colors.titleColor }}>
            Escalation path
          </div>
          <div style={{ fontSize: 11, color: colors.subtleText, marginTop: 4, lineHeight: '1.4' }}>
            Your grievance moves up a level if it is not resolved within the SLA.
          </div>
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { level: 'Level 1 · District Grievance Officer', sub: 'Revenue Dept, Pune · Active since 10 Apr 2026' },
              { level: 'Level 2 · State Appellate Authority', sub: 'Pending — escalates after SLA breach' },
              { level: 'Level 3 · CPGRAMS (National portal)', sub: 'Pending — final escalation level' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '10px 12px',
                  borderRadius: 8,
                  backgroundColor: isDark ? UX4GColors.neutral900 : '#F9FAFB',
                  border: `1px solid ${isDark ? UX4GColors.neutral700 : '#EEEEEE'}`,
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, color: colors.titleColor }}>{item.level}</div>
                <div style={{ fontSize: 11, color: colors.subtleText, marginTop: 2, lineHeight: '1.4' }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (status === 'Resolved') {
      return (
        <div
          style={{
            margin: '12px 16px 0 16px',
            padding: 16,
            backgroundColor: colors.cardBg,
            border: `1px solid ${colors.border}`,
            borderRadius: 14,
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 700, color: colors.titleColor }}>
            Are you satisfied with the resolution?
          </div>
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <button
              type="button"
              onClick={() => alert('Satisfied')}
              style={{
                width: '100%',
                height: 44,
                backgroundColor: 'transparent',
                color: isDark ? colors.primaryLight : UX4GColors.primary,
                border: `1.5px solid ${isDark ? colors.primaryLight : '#A391FF'}`,
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
                height: 44,
                backgroundColor: 'transparent',
                color: isDark ? colors.primaryLight : UX4GColors.primary,
                border: `1.5px solid ${isDark ? colors.primaryLight : '#A391FF'}`,
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              No, reopen
            </button>
          </div>
          <div style={{ fontSize: 11, color: colors.subtleText, marginTop: 10, lineHeight: '1.4' }}>
            You have 30 days from the resolution date to reopen this complaint.
          </div>
        </div>
      );
    }

    if (status === 'Reopened') {
      return (
        <div
          style={{
            margin: '12px 16px 0 16px',
            padding: 16,
            backgroundColor: colors.cardBg,
            border: `1px solid ${colors.border}`,
            borderRadius: 14,
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ fontSize: 15, fontWeight: 700, color: colors.titleColor }}>
            Reopen your complaint
          </div>
          <div style={{ fontSize: 12, fontWeight: 500, color: colors.subtleText, marginTop: 14, marginBottom: 6 }}>
            Why are you not satisfied?
          </div>
          <div
            style={{
              padding: '10px 12px',
              borderRadius: 8,
              border: `1px solid ${isDark ? UX4GColors.neutral700 : '#E5E7EB'}`,
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

          <div style={{ fontSize: 12, fontWeight: 500, color: colors.subtleText, marginTop: 14, marginBottom: 6 }}>
            Additional details
          </div>
          <div
            style={{
              height: 80,
              padding: 12,
              borderRadius: 8,
              border: `1px solid ${isDark ? UX4GColors.neutral700 : '#E5E7EB'}`,
              backgroundColor: isDark ? UX4GColors.neutral900 : '#F9FAFB',
              boxSizing: 'border-box',
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
              backgroundColor: isDark ? colors.primaryLight : UX4GColors.primary,
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 8,
              fontSize: 14,
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
                color: isDark ? colors.primaryLight : UX4GColors.primary,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                padding: '8px 16px',
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
    const getTimelineData = () => {
      switch (status) {
        case 'In Progress (2nd Variant)':
          return {
            steps: [
              { state: 'completed' as const, date: '02 Apr 2026', title: 'Grievance lodged' },
              {
                state: 'current' as const,
                date: '05 Apr 2026',
                title: 'Assigned to grievance officer',
                cardColor: isDark ? UX4GColors.primary900 : UX4GColors.primary50,
                cardBorderColor: isDark ? UX4GColors.primary400 : UX4GColors.primary300,
              },
              { state: 'upcoming' as const, date: 'Est. 08 Apr 2026', title: 'Under review by officer' },
              { state: 'upcoming' as const, date: 'Est. 10 Apr 2026', title: 'Escalated to District Officer' },
              { state: 'upcoming' as const, date: 'Est. 14 Apr 2026', title: 'Resolution issued' },
            ],
          };
        case 'Assigned':
          return {
            steps: [
              { state: 'completed' as const, date: '02 Apr 2026', title: 'Grievance lodged' },
              { state: 'completed' as const, date: '05 Apr 2026', title: 'Assigned to grievance officer' },
              {
                state: 'current' as const,
                date: '08 Apr 2026',
                title: 'Under review by officer',
                cardColor: isDark ? UX4GColors.primary900 : UX4GColors.primary50,
                cardBorderColor: isDark ? UX4GColors.primary400 : UX4GColors.primary300,
              },
              { state: 'upcoming' as const, date: 'Est. 10 Apr 2026', title: 'Escalated to District Officer' },
              { state: 'upcoming' as const, date: 'Est. 14 Apr 2026', title: 'Resolution issued' },
            ],
          };
        case 'Escalated':
          return {
            steps: [
              { state: 'completed' as const, date: '02 Apr 2026', title: 'Grievance lodged' },
              { state: 'completed' as const, date: '05 Apr 2026', title: 'Assigned to grievance officer' },
              { state: 'completed' as const, date: '08 Apr 2026', title: 'Under review by officer' },
              {
                state: 'current' as const,
                date: '10 Apr 2026',
                title: 'Escalated to District Officer',
                cardColor: isDark ? UX4GColors.primary900 : UX4GColors.primary50,
                cardBorderColor: isDark ? UX4GColors.primary400 : UX4GColors.primary300,
              },
              { state: 'upcoming' as const, date: 'Est. 14 Apr 2026', title: 'Resolution issued' },
            ],
          };
        case 'Resolved':
        case 'Reopened':
          return {
            steps: [
              { state: 'completed' as const, date: '02 Apr 2026', title: 'Grievance lodged' },
              { state: 'completed' as const, date: '05 Apr 2026', title: 'Assigned to grievance officer' },
              { state: 'completed' as const, date: '08 Apr 2026', title: 'Under review by officer' },
              { state: 'completed' as const, date: '10 Apr 2026', title: 'Escalated to District Officer' },
              {
                state: 'completed' as const,
                date: '14 Apr 2026',
                title: 'Resolution issued',
                cardColor: isDark ? UX4GColors.primary900 : UX4GColors.primary50,
                cardBorderColor: isDark ? UX4GColors.primary400 : UX4GColors.primary300,
              },
            ],
          };
        default:
          return {
            steps: [
              { state: 'completed' as const, date: '02 Apr 2026', title: 'Grievance lodged' },
              {
                state: 'current' as const,
                date: '05 Apr 2026',
                title: 'Assigned to grievance officer',
                cardColor: isDark ? UX4GColors.primary900 : UX4GColors.primary50,
                cardBorderColor: isDark ? UX4GColors.primary400 : UX4GColors.primary300,
              },
              { state: 'upcoming' as const, date: 'Est. 08 Apr 2026', title: 'Under review by officer' },
              { state: 'upcoming' as const, date: 'Est. 10 Apr 2026', title: 'Escalated to District Officer' },
              { state: 'upcoming' as const, date: 'Est. 14 Apr 2026', title: 'Resolution issued' },
            ],
          };
      }
    };

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
            {/* Success Banner for Resolved */}
            {status === 'Resolved' && (
              <div
                style={{
                  margin: '12px 16px 0 16px',
                  padding: '10px 14px',
                  backgroundColor: isDark ? '#00381F' : '#F2FCEF',
                  border: `1px solid ${isDark ? '#128937' : '#80DA88'}`,
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18, fontVariationSettings: "'FILL' 1", color: isDark ? '#1AA64A' : '#128937', flexShrink: 0 }}>
                  check_circle
                </span>
                <span style={{ fontSize: 12, fontWeight: 500, color: isDark ? '#80DA88' : '#00522C', lineHeight: '1.4' }}>
                  Grievance resolved on 14 Apr 2026 - certificate issued
                </span>
              </div>
            )}

            {/* Top Info Card */}
            <div
              style={{
                margin: '12px 16px 0 16px',
                padding: 16,
                backgroundColor: (status === 'In Progress' || status === 'In Progress (2nd Variant)' || status === 'Assigned' || status === 'Escalated' || status === 'Reopened')
                  ? (isDark ? '#3D2000' : '#FFF7E6')
                  : status === 'Resolved'
                  ? (isDark ? '#00381F' : '#F6FFED')
                  : colors.cardBg,
                border: (status === 'In Progress' || status === 'In Progress (2nd Variant)' || status === 'Assigned' || status === 'Escalated' || status === 'Reopened')
                  ? `1.5px solid ${isDark ? '#FA8C16' : '#FFC973'}`
                  : status === 'Resolved'
                  ? `1.5px solid ${isDark ? '#128937' : '#B7EB8F'}`
                  : `1px solid ${colors.border}`,
                borderRadius: 14,
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                boxSizing: 'border-box',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: colors.titleColor, letterSpacing: '-0.01em', flex: 1, lineHeight: '1.25' }}>
                  Delay in certificate issuance
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    padding: '4px 8px',
                    borderRadius: 6,
                    backgroundColor: tagColors.bg,
                    color: tagColors.text,
                    lineHeight: '1.2',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 14, fontVariationSettings: "'FILL' 1", color: tagColors.icon }}>
                    {tagColors.iconName}
                  </span>
                  {displayStatus}
                </span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 400, color: colors.subtleText, marginTop: 6 }}>
                Grievance ID · GRV-2026-MH-04127
              </div>
              {status !== 'Resolved' && (
                <>
                  <div style={{ fontSize: 13, fontWeight: 700, color: colors.titleColor, marginTop: 12, marginBottom: 6 }}>
                    8 days left
                  </div>
                  <div
                    style={{
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: isDark ? UX4GColors.neutral700 : '#E5E7EB',
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: '55%',
                        borderRadius: 3,
                        background: isDark
                          ? `linear-gradient(90deg, ${UX4GColors.secondary700}, ${UX4GColors.secondary300})`
                          : 'linear-gradient(90deg, #E0B468, #B27B10)',
                      }}
                    />
                  </div>
                </>
              )}
            </div>

            {/* State Card */}
            {renderStateCard()}

            {/* Journey Timeline Container (Hidden for Reopened & In Progress per Flutter spec) */}
            {!['Reopened', 'In Progress'].includes(status) && (
              <div
                style={{
                  margin: '12px 16px 0 16px',
                  padding: 16,
                  backgroundColor: colors.cardBg,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 14,
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
                }}
              >
                <Ux4gJourneyTimeline
                  activeColor={colors.primary}
                  header={{
                    title: 'Grievance journey',
                    description: 'Every update from lodging to resolution',
                  }}
                  steps={getTimelineData().steps}
                />
              </div>
            )}
            <div style={{ height: 16 }} />
          </div>

          {/* Brand Footer */}
          <div
          style={{
            padding: '12px 0 16px 0',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            backgroundColor: colors.screenBg,
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 500,
              color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
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
