import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gJourneyTimeline } from '../../../src/components/journey-timeline/JourneyTimeline';
import { Ux4gLinearProgressBar } from '../../../src/components/linear-progress-bar/LinearProgressBar';
import { Ux4gUnifiedPillTag } from '../../../src/components/tag/Tag';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface ApplicationStatusTrackerDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';
type StatusType = 'Under Review' | 'Action Required' | 'Rejected' | 'Delayed' | 'Approved';

export const ApplicationStatusTrackerDoc: React.FC<ApplicationStatusTrackerDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [status, setStatus] = useState<StatusType>('Under Review');

  // Exact color tokens matching Flutter UX4G Design System
  const colors = useMemo(() => {
    const isCard = variant === 'card';
    return {
      screenBg: isCard
        ? isDark
          ? UX4GColors.primary900 // #1E1B4B
          : UX4GColors.primary50 // #F5F3FF
        : isDark
        ? UX4GColors.neutral900 // #171717
        : UX4GColors.neutral50, // #FAFAFA
      headerBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      titleColor: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      primary: UX4GColors.primary,
      primaryLight: UX4GColors.primary300,
      menuBorder: isCard
        ? isDark
          ? UX4GColors.primary700
          : UX4GColors.primary100
        : isDark
        ? UX4GColors.primary600
        : UX4GColors.primary300,
      menuIcon: isCard
        ? UX4GColors.primary
        : isDark
        ? UX4GColors.primary300
        : UX4GColors.primary600,
    };
  }, [isDark, variant]);

  // Clean React Native TSX code snippet matching Flutter Application Status Tracker component
  const codeString = useMemo(() => {
    const isCard = variant === 'card';
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
  Ux4gButton,
  Ux4gDivider,
  Ux4gJourneyTimeline,
  Ux4gLinearProgressBar,
  Ux4gUnifiedPillTag,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const ApplicationStatusTrackerPattern = ({
  isDark = false,
  status = '${status}',
}: {
  isDark?: boolean;
  status?: 'Under Review' | 'Action Required' | 'Rejected' | 'Delayed' | 'Approved';
}) => {
  const isApproved = status === 'Approved';
  const isCardStyle = ${isCard};

  // Status color scheme helper
  const getTagStyle = () => {
    switch (status) {
      case 'Action Required':
        return {
          bg: isDark ? '#AD4E00' : '#FFE7BF',
          text: isDark ? '#FFC973' : '#AD4E00',
        };
      case 'Rejected':
        return {
          bg: isDark ? '#8A1A16' : '#FFECEE',
          text: isDark ? '#FFB3AE' : '#8A1A16',
        };
      case 'Delayed':
        return {
          bg: isDark ? '#006D75' : '#C9F7F2',
          text: isDark ? '#91E8E0' : '#006D75',
        };
      case 'Approved':
        return {
          bg: isDark ? '#00522C' : '#DDF8D8',
          text: isDark ? '#80DA88' : '#00522C',
        };
      default:
        return {
          bg: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
          text: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700,
        };
    }
  };

  const tagColors = getTagStyle();

  return (
    <View
      style={[
        styles.screen,
        {
          backgroundColor: isCardStyle
            ? isDark
              ? UX4GColors.primary900
              : UX4GColors.primary50
            : isDark
            ? UX4GColors.neutral900
            : UX4GColors.neutral50,
        },
      ]}
    >
      {/* Brand Header with Menu */}
      <Ux4gAppHeader
        title=""
        variant={isDark ? 'filled' : 'light'}
        elevation={0}
        useSafeArea={false}
        horizontalPadding={16}
        leadingSpacing={8}
        backgroundColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral0}
        leadingWidgets={[
          <Image key="emblem" source={{ uri: '/national_emblem_logo.svg' }} style={styles.emblemLogo} resizeMode="contain" />,
          <View key="divider" style={styles.headerDivider} />,
          <Image key="union" source={{ uri: '/Union.svg' }} style={styles.unionLogo} resizeMode="contain" />,
        ]}
        actions={[
          {
            customWidget: (
              <TouchableOpacity
                key="menu"
                style={[
                  styles.menuBtn,
                  {
                    backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral0,
                    borderColor: isCardStyle
                      ? isDark
                        ? UX4GColors.primary700
                        : UX4GColors.primary100
                      : isDark
                      ? UX4GColors.primary600
                      : UX4GColors.primary300,
                  },
                ]}
              >
                <Text style={[styles.menuIcon, { color: isDark ? UX4GColors.primary300 : UX4GColors.primary }]}>☰</Text>
              </TouchableOpacity>
            ),
          },
        ]}
      />
      <Ux4gDivider color={isDark ? UX4GColors.neutral700 : UX4GColors.neutral200} />

      <ScrollView contentContainerStyle={[styles.scrollContainer, isCardStyle && { padding: 16 }]}>
        {/* Back Button */}
        <View style={isCardStyle ? { paddingLeft: 4, marginBottom: 12 } : { paddingHorizontal: 16, paddingTop: 10 }}>
          <Ux4gButton
            text="Back"
            variant="ghost"
            size="small"
            style={{ alignSelf: 'flex-start' }}
          />
        </View>

        {/* Banner Alert for Action Required, Rejected, Delayed */}
        {status === 'Action Required' && (
          <View style={[styles.banner, { backgroundColor: isDark ? '#873800' : '#FFF7E6', borderColor: isDark ? '#FA8C16' : '#FFC973' }, !isCardStyle && { marginHorizontal: 16, marginTop: 12 }]}>
            <Text style={{ fontSize: 18, color: isDark ? '#FFAB27' : '#FA8C16', marginRight: 8 }}>⚠️</Text>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12, fontWeight: '500', color: isDark ? '#FFAB27' : '#FA8C16', lineHeight: 17 }}>
                Action required upload your income proof document
              </Text>
              <TouchableOpacity style={{ marginTop: 6 }}>
                <Text style={{ fontSize: 12, fontWeight: '700', color: isDark ? '#FFC973' : '#AD4E00', textDecorationLine: 'underline' }}>
                  Upload Document
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {status === 'Rejected' && (
          <View style={[styles.banner, { backgroundColor: isDark ? '#60150F' : '#FFF8F8', borderColor: isDark ? '#DB372D' : '#FFB3AE' }, !isCardStyle && { marginHorizontal: 16, marginTop: 12 }]}>
            <Text style={{ fontSize: 18, color: isDark ? '#F55E57' : '#DB372D', marginRight: 8 }}>⚠️</Text>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 13, fontWeight: '600', color: isDark ? '#FFB3AE' : '#8A1A16' }}>
                Why was this rejected?
              </Text>
              <Text style={{ fontSize: 11, color: isDark ? '#FFB3AE' : '#8A1A16', marginTop: 4, lineHeight: 16 }}>
                The income proof document submitted was not legible the scan was too blurry to read.
              </Text>
              <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 11, color: isDark ? '#FFB3AE' : '#8A1A16' }}>1. Re-scan the document in good lighting</Text>
                <Text style={{ fontSize: 11, color: isDark ? '#FFB3AE' : '#8A1A16', marginTop: 2 }}>2. Upload a clear JPG or PDF under 2 MB</Text>
                <Text style={{ fontSize: 11, color: isDark ? '#FFB3AE' : '#8A1A16', marginTop: 2 }}>3. Reapply with the corrected document</Text>
              </View>
            </View>
          </View>
        )}

        {status === 'Delayed' && (
          <View style={[styles.banner, { backgroundColor: isDark ? '#00474F' : '#E6FFFB', borderColor: isDark ? '#13C2C2' : '#91E8E0' }, !isCardStyle && { marginHorizontal: 16, marginTop: 12 }]}>
            <Text style={{ fontSize: 18, color: isDark ? '#59D8CE' : '#13C2C2', marginRight: 8 }}>ℹ️</Text>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 13, fontWeight: '600', color: isDark ? '#91E8E0' : '#006D75' }}>
                Why is this delayed?
              </Text>
              <Text style={{ fontSize: 11, color: isDark ? '#91E8E0' : '#006D75', marginTop: 4, lineHeight: 16 }}>
                Additional field verification is required due to an address discrepancy in your application.
              </Text>
              <Text style={{ fontSize: 11, fontWeight: '600', color: isDark ? '#91E8E0' : '#006D75', marginTop: 8 }}>
                Revised expected date
              </Text>
              <Text style={{ fontSize: 13, fontWeight: '600', color: isDark ? '#91E8E0' : '#006D75', marginTop: 2 }}>
                25 Apr 2026
              </Text>
            </View>
          </View>
        )}
                25 Apr 2026
              </Text>
            </View>
          </View>
        )}

        {/* Application Info Card */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
              borderColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
              padding: isCardStyle ? 16 : 14,
            },
            isCardStyle ? styles.cardStyleContainer : { marginHorizontal: 16, marginTop: 12 },
          ]}
        >
          <View style={styles.cardHeaderRow}>
            <Text style={[styles.appTitle, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
              Income Certificate
            </Text>
            <Ux4gUnifiedPillTag
              label={status}
              backgroundColor={tagColors.bg}
              textColor={tagColors.text}
              size="small"
            />
          </View>
          <Text style={[styles.appId, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            {status === 'Under Review' ? 'Application ID - INC-2026-MH-04127' : 'Application ID · INC-2026-MH-04127'}
          </Text>

          {!isApproved && (
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 11, fontWeight: '500', color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500, marginBottom: 6, alignSelf: 'flex-end' }}>
                8 days left
              </Text>
              <Ux4gLinearProgressBar
                progress={0.6}
                height={6}
                showPercentage={false}
                trackColor={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}
                progressColor={isDark ? UX4GColors.primaryLight : UX4GColors.primary}
              />
            </View>
          )}
        </View>

        {/* Journey Timeline Container */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
              borderColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
              padding: isCardStyle ? 16 : 14,
              marginTop: 16,
            },
            isCardStyle ? styles.cardStyleContainer : { marginHorizontal: 16 },
          ]}
        >
          <Ux4gJourneyTimeline
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
                state: isApproved ? 'completed' : 'current',
                date: '11 Apr 2026, 09:03 AM',
                title: 'Officer Review',
                cardColor: !isApproved ? (isDark ? UX4GColors.primary900 : UX4GColors.primary50) : undefined,
                cardBorderColor: !isApproved ? (isDark ? UX4GColors.primary600 : UX4GColors.primary300) : undefined,
              },
              {
                state: isApproved ? 'current' : 'upcoming',
                date: 'Est. 22 Apr 2026',
                title: isApproved ? 'Certificate Issued' : 'Certificate Will Be Issued',
                cardColor: isApproved ? (isDark ? UX4GColors.primary900 : UX4GColors.primary50) : undefined,
                cardBorderColor: isApproved ? (isDark ? UX4GColors.primary600 : UX4GColors.primary300) : undefined,
                status: isApproved
                  ? undefined
                  : {
                      text: status === 'Under Review' ? '2 days remaining' : '11 days remaining',
                      dotColor: isDark ? UX4GColors.secondary300 : UX4GColors.secondary600,
                      badgeText: 'Pending',
                      badgeColor: isDark ? UX4GColors.secondary900 : UX4GColors.secondary50,
                      badgeTextColor: isDark ? UX4GColors.secondary300 : UX4GColors.secondary600,
                    },
              },
            ]}
          />
        </View>

        {/* Bottom Actions */}
        {status === 'Rejected' && (
          <View style={[isCardStyle && styles.cardStyleActions, { marginTop: 16, width: '100%', alignItems: 'center' }]}>
            <Ux4gButton text="Reapply" size="large" style={{ width: '100%', height: 48 }} />
            <TouchableOpacity style={{ marginTop: 12 }}>
              <Text style={{ fontSize: 14, fontWeight: '500', color: isDark ? UX4GColors.primaryLight : UX4GColors.primary }}>
                Contact district office
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {status === 'Delayed' && (
          <View style={{ marginTop: 16, width: '100%', alignItems: 'center' }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#DC2626' }}>
                Escalate this application
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {status === 'Approved' && (
          <View style={[isCardStyle && styles.cardStyleActions, { marginTop: 16, width: '100%', alignItems: 'center' }]}>
            <Ux4gButton text="Download Certificate (PDF)" size="large" style={{ width: '100%', height: 48 }} />
            <Ux4gButton text="Save to DigiLocker" variant="outline" size="large" style={{ width: '100%', height: 48, marginTop: 10 }} />
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
  emblemLogo: { height: 32, width: 32 },
  headerDivider: { width: 1, height: 24, backgroundColor: '#E5E7EB', marginHorizontal: 4 },
  unionLogo: { height: 32, width: 32 },
  menuBtn: { width: 40, height: 40, borderRadius: 10, borderWidth: 1.5, alignItems: 'center', justifyContent: 'center' },
  menuIcon: { fontSize: 18, fontWeight: 'bold' },
  scrollContainer: { paddingBottom: 16 },
  banner: { flexDirection: 'row', padding: 12, borderRadius: 8, borderWidth: 1, marginBottom: 12 },
  card: { borderRadius: 10, borderWidth: 1 },
  cardStyleContainer: { borderRadius: 16, borderWidth: 0, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.04, shadowRadius: 16, elevation: 2, marginBottom: 16 },
  cardStyleActions: { padding: 16, borderRadius: 16, backgroundColor: '#FFFFFF', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.04, shadowRadius: 16, elevation: 2 },
  cardHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  appTitle: { fontSize: 16, fontWeight: '700' },
  appId: { fontSize: 12, marginTop: 4 },
  footer: { alignItems: 'center', marginVertical: 20 },
  poweredByText: { fontSize: 11, fontWeight: '500' },
  digitalIndiaLogo: { height: 22, width: 80, marginTop: 6 },
});`;
  }, [variant, status]);

  // Live interactive mockup matching Flutter _AppStatusTrackerMockup & _AppStatusTrackerCardMockup
  const renderLiveMockup = () => {
    const isCard = variant === 'card';
    const isApproved = status === 'Approved';

    // Status Pill / Tag Color mappings matching Flutter Ux4gTagColor & custom colors
    const getStatusTagColors = () => {
      switch (status) {
        case 'Action Required':
          return {
            bg: isDark ? '#AD4E00' : '#FFE7BF',
            text: isDark ? '#FFC973' : '#AD4E00',
          };
        case 'Rejected':
          return {
            bg: isDark ? '#8A1A16' : '#FFECEE',
            text: isDark ? '#FFB3AE' : '#8A1A16',
          };
        case 'Delayed':
          return {
            bg: isDark ? '#006D75' : '#C9F7F2',
            text: isDark ? '#91E8E0' : '#006D75',
          };
        case 'Approved':
          return {
            bg: isDark ? '#00522C' : '#DDF8D8',
            text: isDark ? '#80DA88' : '#00522C',
          };
        default: // Under Review
          return {
            bg: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
            text: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700,
          };
      }
    };

    const tagColors = getStatusTagColors();

    const renderBanner = () => {
      if (status === 'Action Required') {
        return (
          <div
            style={{
              margin: isCard ? '0 0 16px 0' : '12px 16px 0 16px',
              padding: '12px',
              backgroundColor: isDark ? '#873800' : '#FFF7E6',
              border: `1px solid ${isDark ? '#FA8C16' : '#FFC973'}`,
              borderRadius: 8,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 8,
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18, fontVariationSettings: "'FILL' 1", color: isDark ? '#FFAB27' : '#FA8C16', flexShrink: 0, marginTop: 1 }}>
              error
            </span>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: isDark ? '#FFAB27' : '#FA8C16',
                  lineHeight: '1.4',
                }}
              >
                Action required upload your income proof document
              </div>
              <div style={{ marginTop: 6 }}>
                <span
                  onClick={() => alert('Upload Document')}
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: isDark ? '#FFC973' : '#AD4E00',
                    borderBottom: `1.2px solid ${isDark ? '#FFC973' : '#AD4E00'}`,
                    cursor: 'pointer',
                    display: 'inline-block',
                    paddingBottom: 1,
                  }}
                >
                  Upload Document
                </span>
              </div>
            </div>
          </div>
        );
      }

      if (status === 'Rejected') {
        return (
          <div
            style={{
              margin: isCard ? '0 0 16px 0' : '12px 16px 0 16px',
              padding: '12px',
              backgroundColor: isDark ? '#60150F' : '#FFF8F8',
              border: `1px solid ${isDark ? '#DB372D' : '#FFB3AE'}`,
              borderRadius: 8,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 8,
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18, fontVariationSettings: "'FILL' 1", color: isDark ? '#F55E57' : '#DB372D', flexShrink: 0, marginTop: 1 }}>
              error
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: isDark ? '#FFB3AE' : '#8A1A16' }}>
                Why was this rejected?
              </div>
              <div style={{ fontSize: 11, color: isDark ? '#FFB3AE' : '#8A1A16', marginTop: 4, lineHeight: '1.4' }}>
                The income proof document submitted was not legible the scan was too blurry to read.
              </div>
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  '1. Re-scan the document in good lighting',
                  '2. Upload a clear JPG or PDF under 2 MB',
                  '3. Reapply with the corrected document',
                ].map((item, i) => (
                  <div key={i} style={{ fontSize: 11, color: isDark ? '#FFB3AE' : '#8A1A16', lineHeight: '1.4' }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }

      if (status === 'Delayed') {
        return (
          <div
            style={{
              margin: isCard ? '0 0 16px 0' : '12px 16px 0 16px',
              padding: '12px',
              backgroundColor: isDark ? '#00474F' : '#E6FFFB',
              border: `1px solid ${isDark ? '#13C2C2' : '#91E8E0'}`,
              borderRadius: 8,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 8,
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18, fontVariationSettings: "'FILL' 1", color: isDark ? '#59D8CE' : '#13C2C2', flexShrink: 0, marginTop: 1 }}>
              info
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: isDark ? '#91E8E0' : '#006D75' }}>
                Why is this delayed?
              </div>
              <div style={{ fontSize: 11, color: isDark ? '#91E8E0' : '#006D75', marginTop: 4, lineHeight: '1.4' }}>
                Additional field verification is required due to an address discrepancy in your application.
              </div>
              <div style={{ fontSize: 11, fontWeight: 600, color: isDark ? '#91E8E0' : '#006D75', marginTop: 8 }}>
                Revised expected date
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: isDark ? '#91E8E0' : '#006D75', marginTop: 2 }}>
                25 Apr 2026
              </div>
            </div>
          </div>
        );
      }

      return null;
    };

    const renderActions = () => {
      if (status === 'Rejected') {
        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, width: '100%' }}>
            <button
              type="button"
              onClick={() => alert('Reapply')}
              style={{
                width: '100%',
                height: 48,
                backgroundColor: isDark ? colors.primaryLight : colors.primary,
                color: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
                border: 'none',
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Reapply
            </button>
            <button
              type="button"
              onClick={() => alert('Contact district office')}
              style={{
                background: 'transparent',
                border: 'none',
                color: isDark ? colors.primaryLight : colors.primary,
                fontSize: 14,
                fontWeight: 500,
                cursor: 'pointer',
                padding: '6px 12px',
              }}
            >
              Contact district office
            </button>
          </div>
        );
      }

      if (status === 'Delayed') {
        return (
          <div style={{ textAlign: 'center', width: '100%', padding: '4px 0' }}>
            <button
              type="button"
              onClick={() => alert('Escalate this application')}
              style={{
                background: 'transparent',
                border: 'none',
                color: UX4GColors.red600,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                padding: '6px 12px',
              }}
            >
              Escalate this application
            </button>
          </div>
        );
      }

      if (status === 'Approved') {
        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, width: '100%' }}>
            <button
              type="button"
              onClick={() => alert('Download Certificate')}
              style={{
                width: '100%',
                height: 48,
                backgroundColor: isDark ? colors.primaryLight : colors.primary,
                color: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
                border: 'none',
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Download Certificate (PDF)
            </button>
            <button
              type="button"
              onClick={() => alert('Save to DigiLocker')}
              style={{
                width: '100%',
                height: 48,
                backgroundColor: 'transparent',
                color: isDark ? colors.primaryLight : colors.primary,
                border: `1.5px solid ${isDark ? colors.primaryLight : colors.primary}`,
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Save to DigiLocker
            </button>
          </div>
        );
      }

      return null;
    };

    return (
      <div
        style={{
          width: 360,
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
        {/* Phone Top Header Bar */}
        <Ux4gAppHeader
          title=""
          variant={isDark ? 'filled' : 'light'}
          elevation={0}
          useSafeArea={false}
          horizontalPadding={16}
          leadingSpacing={8}
          backgroundColor={colors.headerBg}
          borderColor={colors.border}
          leadingWidgets={[
            <img key="emblem" src="/national_emblem_logo.svg" alt="Emblem" style={{ height: 32, width: 32 }} />,
            <div key="div" style={{ width: 1, height: 24, backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300, margin: '0 4px' }} />,
            <UnionLogo key="union" isDark={isDark} color={isDark ? '#FFFFFF' : UX4GColors.primary} />,
          ]}
          actions={[
            {
              customWidget: (
                <button
                  key="menu"
                  type="button"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
                    border: `1.5px solid ${colors.menuBorder}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: colors.menuIcon,
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 20, fontVariationSettings: "'FILL' 1" }}>menu</span>
                </button>
              ),
            },
          ]}
        />
        <Ux4gDivider color={colors.border} />

        {/* Scrollable Container */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: isCard ? 16 : 0, flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Back Button */}
            <div style={{ padding: isCard ? '0 0 12px 4px' : '10px 16px 0 16px' }}>
              <button
                type="button"
                style={{
                  background: 'transparent',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  color: isDark ? colors.primaryLight : colors.primary,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18, fontVariationSettings: "'FILL' 1" }}>arrow_back</span>
                Back
              </button>
            </div>

            {/* Status Banner */}
            {renderBanner()}

            {/* Application Info Card */}
            <div
              style={{
                margin: isCard ? '0 0 16px 0' : '12px 16px 0 16px',
                padding: isCard ? 16 : 14,
                backgroundColor: colors.cardBg,
                border: isCard ? 'none' : `1px solid ${colors.border}`,
                borderRadius: isCard ? 16 : 10,
                boxShadow: isCard ? '0 4px 16px rgba(0, 0, 0, 0.04)' : 'none',
                boxSizing: 'border-box',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 16, fontWeight: 600, color: colors.titleColor, letterSpacing: '-0.01em' }}>
                  Income Certificate
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
                  }}
                >
                  {status}
                </span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 400, color: colors.subtleText, marginTop: 4, marginBottom: !isApproved ? 14 : 0 }}>
                {status === 'Under Review' ? 'Application ID - INC-2026-MH-04127' : 'Application ID · INC-2026-MH-04127'}
              </div>

              {!isApproved && (
                <div style={{ marginTop: 0 }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      marginBottom: 6,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        color: colors.subtleText,
                      }}
                    >
                      8 days left
                    </span>
                  </div>
                  <div
                    style={{
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: '60%',
                        borderRadius: 3,
                        background: isDark
                          ? `linear-gradient(90deg, ${UX4GColors.primary700}, ${UX4GColors.primary300})`
                          : `linear-gradient(90deg, ${UX4GColors.primary200}, ${UX4GColors.primary600})`,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Journey Timeline Container */}
            <div
              style={{
                margin: isCard ? '0 0 16px 0' : '16px 16px 16px 16px',
                padding: isCard ? 16 : 14,
                backgroundColor: colors.cardBg,
                border: isCard ? 'none' : `1px solid ${colors.border}`,
                borderRadius: isCard ? 16 : 10,
                boxShadow: isCard ? '0 4px 16px rgba(0, 0, 0, 0.04)' : 'none',
              }}
            >
              <Ux4gJourneyTimeline
                activeColor={colors.primary}
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
                    state: isApproved ? 'completed' : 'current',
                    date: '11 Apr 2026, 09:03 AM',
                    title: 'Officer Review',
                    cardColor: !isApproved ? (isDark ? UX4GColors.primary900 : UX4GColors.primary50) : undefined,
                    cardBorderColor: !isApproved ? (isDark ? UX4GColors.primary600 : UX4GColors.primary300) : undefined,
                  },
                  {
                    state: isApproved ? 'current' : 'upcoming',
                    date: 'Est. 22 Apr 2026',
                    title: isApproved ? 'Certificate Issued' : 'Certificate Will Be Issued',
                    cardColor: isApproved ? (isDark ? UX4GColors.primary900 : UX4GColors.primary50) : undefined,
                    cardBorderColor: isApproved ? (isDark ? UX4GColors.primary600 : UX4GColors.primary300) : undefined,
                    dateColor: !isApproved ? (isDark ? UX4GColors.neutral300 : UX4GColors.neutral600) : undefined,
                    titleColor: !isApproved ? (isDark ? UX4GColors.neutral50 : UX4GColors.neutral900) : undefined,
                    status: isApproved
                      ? undefined
                      : {
                          text: status === 'Under Review' ? '2 days remaining' : '11 days remaining',
                          dotColor: isDark ? UX4GColors.secondary300 : UX4GColors.secondary600,
                          badgeText: 'Pending',
                          badgeColor: isDark ? UX4GColors.secondary900 : UX4GColors.secondary50,
                          badgeTextColor: isDark ? UX4GColors.secondary300 : UX4GColors.secondary600,
                        },
                  },
                ]}
              />
            </div>

            {/* Bottom Actions Area */}
            {renderActions() && (
              <div
                style={{
                  margin: isCard && status !== 'Delayed' ? '0 0 16px 0' : isCard ? '0' : '0 16px 16px 16px',
                  padding: isCard && status !== 'Delayed' ? 16 : 0,
                  backgroundColor: isCard && status !== 'Delayed' ? colors.cardBg : 'transparent',
                  borderRadius: isCard ? 16 : 0,
                  boxShadow: isCard && status !== 'Delayed' ? '0 4px 16px rgba(0, 0, 0, 0.04)' : 'none',
                }}
              >
                {renderActions()}
              </div>
            )}
          </div>

          {/* Powered by Digital India Footer */}
          <div
            style={{
              paddingTop: 8,
              paddingBottom: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 500, color: colors.subtleText }}>
              Powered by -
            </span>
            <div style={{ height: 6 }} />
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
          <h1 className="wb-title">Application Status Tracker</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Tracks the end-to-end lifecycle of a government service application through five states: Under Review, Action Required, Rejected, Delayed, and Approved. Use the Status knob to preview each state and Variant for card layout.
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
                        {(['Under Review', 'Action Required', 'Rejected', 'Delayed', 'Approved'] as StatusType[]).map((st) => (
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
                        <button
                          type="button"
                          onClick={() => setVariant('default')}
                          style={{
                            padding: '6px 14px',
                            borderRadius: 6,
                            border: 'none',
                            fontSize: 12,
                            fontWeight: 600,
                            cursor: 'pointer',
                            backgroundColor: variant === 'default' ? UX4GColors.primary : 'transparent',
                            color: variant === 'default' ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                            transition: 'all 0.2s ease',
                          }}
                        >
                          Default
                        </button>
                        <button
                          type="button"
                          onClick={() => setVariant('card')}
                          style={{
                            padding: '6px 14px',
                            borderRadius: 6,
                            border: 'none',
                            fontSize: 12,
                            fontWeight: 600,
                            cursor: 'pointer',
                            backgroundColor: variant === 'card' ? UX4GColors.primary : 'transparent',
                            color: variant === 'card' ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                            transition: 'all 0.2s ease',
                          }}
                        >
                          Card style
                        </button>
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
                  <span style={{ fontSize: 13, fontWeight: 600, color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700, marginLeft: 8 }}>
                    Active Variant: <span style={{ color: UX4GColors.primary }}>{variant === 'card' ? 'Card style' : 'Default'}</span>
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

export default ApplicationStatusTrackerDoc;
