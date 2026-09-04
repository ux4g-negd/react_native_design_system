import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface NoPendingTasksDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

export const NoPendingTasksDoc: React.FC<NoPendingTasksDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const colors = useMemo(() => {
    return {
      screenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral0,
      headerBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      dividerColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      verticalDividerColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      greenIcon: isDark ? UX4GColors.green400 : UX4GColors.green600,
    };
  }, [isDark]);

  const codeString = useMemo(() => {
    return `import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const NoPendingTasksScreen = ({
  isDark = false,
  onBackToHome = () => {},
}: {
  isDark?: boolean;
  onBackToHome?: () => void;
}) => {
  const screenBg = isDark ? UX4GColors.neutral950 : UX4GColors.neutral0;
  const borderColor = isDark ? UX4GColors.neutral700 : UX4GColors.neutral200;
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleText = isDark ? UX4GColors.neutral200 : UX4GColors.neutral700;
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const greenColor = isDark ? UX4GColors.green400 : UX4GColors.green600;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: screenBg }]}>
      {/* Header */}
      <Ux4gAppHeader
        variant={isDark ? 'dark' : 'light'}
        title=""
        leadingWidgets={[
          <View key="logos" style={styles.headerLeading}>
            <Image
              source={require('./assets/national_emblem.png')}
              style={[
                styles.emblem,
                { tintColor: isDark ? '#FFFFFF' : undefined },
              ]}
              resizeMode="contain"
            />
            <Ux4gDivider orientation="vertical" color={borderColor} style={{ height: 24 }} />
            <Image
              source={require('./assets/union.png')}
              style={styles.unionLogo}
              resizeMode="contain"
            />
            <Text style={[styles.govTitle, { color: titleColor }]}>
              Government of India
            </Text>
          </View>,
        ]}
        actions={[
          {
            icon: 'notifications-outline',
            onPress: () => {},
          },
        ]}
        showAvatar
        avatarInitials="R"
      />
      <Ux4gDivider color={borderColor} />

      {/* Content */}
      <View style={styles.content}>
        {/* Title */}
        <Text style={[styles.greetingTitle, { color: titleColor }]}>
          Pending Tasks
        </Text>
        <Text style={[styles.greetingSubtitle, { color: subtleText }]}>
          You're all caught up
        </Text>

        {/* Back to Home Link */}
        <TouchableOpacity onPress={onBackToHome} style={styles.backLinkRow}>
          <Text style={[styles.backArrow, { color: primaryColor }]}>←</Text>
          <Text style={[styles.backLinkText, { color: primaryColor }]}>
            Back to home
          </Text>
        </TouchableOpacity>

        {/* Centered Empty State */}
        <View style={styles.emptyStateContainer}>
          <Text style={[styles.checkIcon, { color: greenColor }]}>✓</Text>
          <Text style={[styles.emptyStateTitle, { color: titleColor }]}>
            No pending tasks
          </Text>
          <Text style={[styles.emptyStateDescription, { color: subtleText }]}>
            {'You have no pending tasks right now. All\\nyour applications are progressing\\nsmoothly.'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  headerLeading: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  emblem: { height: 36, width: 26 },
  unionLogo: { height: 26, width: 34 },
  govTitle: { fontSize: 13, fontWeight: '600' },
  content: { flex: 1, padding: 20 },
  greetingTitle: { fontSize: 20, fontWeight: '800', marginBottom: 4 },
  greetingSubtitle: { fontSize: 13, marginBottom: 12 },
  backLinkRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  backArrow: { fontSize: 14, fontWeight: '600' },
  backLinkText: { fontSize: 13, fontWeight: '500' },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 60,
  },
  checkIcon: {
    fontSize: 56,
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  emptyStateDescription: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
  },
});
`;
  }, []);

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">No Pending Tasks</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          An empty state pattern shown when the user has no pending tasks. Displays a success check icon and a message that all applications are progressing smoothly.
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
                          height: 28,
                          width: 'auto',
                          filter: isDark ? 'brightness(0) invert(1)' : 'none',
                        }}
                      />
                      <div
                        style={{
                          width: 1,
                          height: 24,
                          backgroundColor: colors.verticalDividerColor,
                        }}
                      />
                      <UnionLogo color={colors.primaryColor} size={24} />
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: colors.titleColor,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Government of India
                      </span>
                    </div>

                    {/* Right group */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <button
                        type="button"
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 4,
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
                        <div
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: '50%',
                            backgroundColor: UX4GColors.primary600,
                            color: '#FFFFFF',
                            fontSize: 12,
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          R
                        </div>
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

                  {/* Body */}
                  <div
                    style={{
                      flex: 1,
                      padding: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      boxSizing: 'border-box',
                    }}
                  >
                    {/* Title */}
                    <div
                      style={{
                        fontSize: 20,
                        fontWeight: 800,
                        color: colors.titleColor,
                        marginBottom: 4,
                        letterSpacing: '-0.3px',
                      }}
                    >
                      Pending Tasks
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: colors.subtleText,
                        marginBottom: 12,
                      }}
                    >
                      You're all caught up
                    </div>

                    {/* Back to home link */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                        color: colors.primaryColor,
                        fontSize: 13,
                        fontWeight: 500,
                        cursor: 'pointer',
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                        arrow_back
                      </span>
                      Back to home
                    </div>

                    {/* Centered Empty State */}
                    <div
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingBottom: 60,
                        textAlign: 'center',
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: 56,
                          color: colors.greenIcon,
                          fontVariationSettings: "'FILL' 1",
                          marginBottom: 16,
                        }}
                      >
                        check_circle
                      </span>
                      <div
                        style={{
                          fontSize: 18,
                          fontWeight: 700,
                          color: colors.titleColor,
                          marginBottom: 8,
                        }}
                      >
                        No pending tasks
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          color: colors.subtleText,
                          lineHeight: 1.45,
                          maxWidth: 240,
                        }}
                      >
                        You have no pending tasks right now. All your applications are progressing smoothly.
                      </div>
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

export default NoPendingTasksDoc;
