import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface NoApplicationsDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

export const NoApplicationsDoc: React.FC<NoApplicationsDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [copied, setCopied] = useState(false);

  const colors = useMemo(() => {
    return {
      screenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
      headerBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      dividerColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      verticalDividerColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      ctaBg: isDark ? '#2E1C89' : '#EDE9FE',
      ctaText: isDark ? '#E0E7FF' : '#432CBB',
    };
  }, [isDark]);

  const popularServices = [
    {
      title: 'Caste Certificate',
      subtitle: 'SC / ST / OBC category proof',
    },
    {
      title: 'Domicile Certificate',
      subtitle: 'Proof of residence in the state',
    },
    {
      title: 'Income Certificate',
      subtitle: 'Proof of annual family income',
    },
  ];

  const codeString = useMemo(() => {
    return `import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gButton,
  Ux4gStatusAvatar,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const NoApplicationsScreen = ({
  isDark = false,
  onStartApplication = () => {},
  onServiceSelect = (_service: string) => {},
}: {
  isDark?: boolean;
  onStartApplication?: () => void;
  onServiceSelect?: (service: string) => void;
}) => {
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleText = isDark ? UX4GColors.neutral200 : UX4GColors.neutral700;
  const cardBg = isDark ? UX4GColors.neutral900 : UX4GColors.neutral0;
  const borderColor = isDark ? UX4GColors.neutral700 : UX4GColors.neutral200;
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;

  const popularServices = [
    {
      title: 'Caste Certificate',
      subtitle: 'SC / ST / OBC category proof',
    },
    {
      title: 'Domicile Certificate',
      subtitle: 'Proof of residence in the state',
    },
    {
      title: 'Income Certificate',
      subtitle: 'Proof of annual family income',
    },
  ];

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50 },
      ]}
    >
      {/* Header */}
      <View style={{ backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0 }}>
        <Ux4gAppHeader
          variant="light"
          title=""
          leadingWidgets={
            <View style={styles.headerLeading}>
              <Image
                source={require('./assets/national_emblem.png')}
                style={[styles.emblem, isDark && { tintColor: '#FFFFFF' }]}
                resizeMode="contain"
              />
              <Ux4gDivider
                orientation="vertical"
                color={borderColor}
                style={{ height: 24 }}
              />
              <Image
                source={require('./assets/union_logo.png')}
                style={[styles.unionLogo, { tintColor: primaryColor }]}
                resizeMode="contain"
              />
              <Text style={[styles.govTitle, { color: titleColor }]}>
                Government of India
              </Text>
            </View>
          }
          actions={[
            {
              icon: 'notifications_outlined',
              onPress: () => {},
            },
          ]}
          showAvatar
          avatar={
            <Ux4gStatusAvatar
              size="s"
              imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
              initials="R"
              variant="online"
            />
          }
        />
        <Ux4gDivider color={borderColor} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Greeting */}
        <Text style={[styles.greetingTitle, { color: titleColor }]}>
          Good morning, Ramesh
        </Text>
        <Text style={[styles.greetingSubtitle, { color: subtleText }]}>
          You haven't started any applications yet
        </Text>

        {/* Empty State */}
        <View style={styles.emptyStateContainer}>
          <Image
            source={require('./assets/inbox.png')}
            style={[styles.emptyStateIcon, { tintColor: primaryColor }]}
            resizeMode="contain"
          />
          <Text style={[styles.emptyStateTitle, { color: titleColor }]}>
            No active applications
          </Text>
          <Text style={[styles.emptyStateDescription, { color: subtleText }]}>
            {'Start your application easily by clicking on the\\nbutton below'}
          </Text>
          <View style={styles.ctaButtonWrapper}>
            <Ux4gButton
              text="Start application"
              onPress={onStartApplication}
              variant="primary"
              backgroundColor={isDark ? '#2E1C89' : '#EDE9FE'}
              contentColor={isDark ? '#E0E7FF' : '#432CBB'}
            />
          </View>
        </View>

        {/* Popular Services Section */}
        <Text style={[styles.sectionTitle, { color: titleColor }]}>
          Popular services to get started
        </Text>

        {popularServices.map((service) => (
          <TouchableOpacity
            key={service.title}
            activeOpacity={0.7}
            onPress={() => onServiceSelect(service.title)}
            style={[
              styles.serviceCard,
              {
                backgroundColor: cardBg,
                borderColor: borderColor,
              },
            ]}
          >
            <Text style={[styles.serviceTitle, { color: titleColor }]}>
              {service.title}
            </Text>
            <Text style={[styles.serviceSubtitle, { color: subtleText }]}>
              {service.subtitle}
            </Text>
            <View style={styles.serviceLinkRow}>
              <Text style={[styles.serviceLinkText, { color: primaryColor }]}>
                Start now
              </Text>
              <Text style={[styles.serviceLinkArrow, { color: primaryColor }]}>
                →
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  headerLeading: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  emblem: { height: 36, width: 26 },
  unionLogo: { height: 26, width: 34 },
  govTitle: { fontSize: 13, fontWeight: '600' },
  scrollContent: { padding: 20 },
  greetingTitle: { fontSize: 20, fontWeight: '800', marginBottom: 4 },
  greetingSubtitle: { fontSize: 13, marginBottom: 40 },
  emptyStateContainer: { alignItems: 'center', marginBottom: 40 },
  emptyStateIcon: { width: 64, height: 64, marginBottom: 20 },
  emptyStateTitle: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  emptyStateDescription: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 24,
  },
  ctaButtonWrapper: { alignSelf: 'center' },
  sectionTitle: { fontSize: 14, fontWeight: '600', marginBottom: 16 },
  serviceCard: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
  },
  serviceTitle: { fontSize: 14, fontWeight: '600', marginBottom: 4 },
  serviceSubtitle: { fontSize: 12, marginBottom: 8 },
  serviceLinkRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  serviceLinkText: { fontSize: 13, fontWeight: '500' },
  serviceLinkArrow: { fontSize: 14, fontWeight: '500' },
});
`;
  }, []);

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">No Applications</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          An empty state pattern shown when the user has no active applications. Includes a greeting, empty state illustration, CTA button, and popular services list.
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
                style={{ flexDirection: 'column', alignItems: 'center' }}
              >
          {/* Phone Frame Mockup */}
          <div
            style={{
              width: 360,
              height: 760,
              borderRadius: 20,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: colors.screenBg,
              border: isDark ? 'none' : '1px solid #E5E7EB',
              boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)',
              position: 'relative',
              boxSizing: 'border-box',
            }}
          >
            {/* Header (Top) */}
            <div
              style={{
                backgroundColor: colors.headerBg,
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0,
                borderBottom: `1px solid ${colors.dividerColor}`,
              }}
            >
              {/* Left group */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img
                  src="/national_emblem_logo.svg"
                  alt="National Emblem"
                  style={{
                    height: 36,
                    width: 'auto',
                    filter: isDark ? 'brightness(0) invert(1)' : 'none',
                  }}
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div
                  style={{
                    width: 1,
                    height: 24,
                    backgroundColor: colors.verticalDividerColor,
                  }}
                />
                <UnionLogo color={colors.primaryColor} size={26} />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: colors.titleColor,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Government of India
                </span>
              </div>

              {/* Right actions: Bell + Avatar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: colors.titleColor,
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                    notifications
                  </span>
                </button>
                {/* Avatar with online dot */}
                <div style={{ position: 'relative' }}>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
                    alt="Avatar"
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      backgroundColor: '#22C55E',
                      border: `1.5px solid ${colors.headerBg}`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Scrollable Dashboard Body */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '20px 16px 28px',
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box',
              }}
            >
              {/* Greeting */}
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: colors.titleColor,
                  marginBottom: 4,
                }}
              >
                Good morning, Ramesh
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: colors.subtleText,
                  marginBottom: 36,
                }}
              >
                You haven't started any applications yet
              </div>

              {/* Empty State Center Card */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  marginBottom: 36,
                }}
              >
                {/* Inbox Illustration Icon */}
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: 64,
                    color: colors.primaryColor,
                    marginBottom: 16,
                  }}
                >
                  inbox
                </span>

                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: colors.titleColor,
                    marginBottom: 8,
                  }}
                >
                  No active applications
                </div>

                <div
                  style={{
                    fontSize: 13,
                    color: colors.subtleText,
                    lineHeight: 1.4,
                    marginBottom: 20,
                  }}
                >
                  Start your application easily by clicking on the<br />button below
                </div>

                <button
                  style={{
                    padding: '9px 18px',
                    borderRadius: 6,
                    border: 'none',
                    backgroundColor: colors.ctaBg,
                    color: colors.ctaText,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'opacity 0.2s ease',
                  }}
                >
                  Start application
                </button>
              </div>

              {/* Popular Services Section */}
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: colors.titleColor,
                  marginBottom: 14,
                }}
              >
                Popular services to get started
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {popularServices.map((service) => (
                  <div
                    key={service.title}
                    style={{
                      backgroundColor: colors.cardBg,
                      border: `1px solid ${colors.border}`,
                      borderRadius: 12,
                      padding: 16,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: colors.titleColor,
                        marginBottom: 4,
                      }}
                    >
                      {service.title}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: colors.subtleText,
                        marginBottom: 8,
                      }}
                    >
                      {service.subtitle}
                    </div>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                        fontSize: 13,
                        fontWeight: 500,
                        color: colors.primaryColor,
                        cursor: 'pointer',
                      }}
                    >
                      Start now
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 14, transform: 'translateY(1px)' }}
                      >
                        arrow_forward
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
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

export default NoApplicationsDoc;
