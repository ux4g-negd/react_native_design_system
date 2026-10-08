import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gEmptyState } from '../../../src/components/empty-state/EmptyState';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
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
      greenIconBg: isDark ? '#15803D' : '#16A34A',
    };
  }, [isDark]);

  const codeString = useMemo(() => {
    return `import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gEmptyState,
  Ux4gStatusAvatar,
  UX4GColors,
} from 'ux4g-react-native-components';

export const NoPendingTasksScreen = ({
  isDark = false,
  onBack = () => {},
}: {
  isDark?: boolean;
  onBack?: () => void;
}) => {
  const screenBg = isDark ? UX4GColors.neutral950 : UX4GColors.neutral0;
  const headerBg = isDark ? UX4GColors.neutral900 : UX4GColors.neutral0;
  const borderColor = isDark ? UX4GColors.neutral700 : UX4GColors.neutral200;
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleText = isDark ? UX4GColors.neutral200 : UX4GColors.neutral700;
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const greenIconBg = isDark ? '#15803D' : '#16A34A';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: screenBg }]}>
      {/* Header */}
      <View style={{ backgroundColor: headerBg }}>
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
              <Image
                source={require('./assets/union.png')}
                style={[styles.unionLogo, { tintColor: primaryColor }]}
                resizeMode="contain"
              />
              <Text style={[styles.govTitle, { color: titleColor }]}>
                Government of India
              </Text>
            </View>,
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

      {/* Content */}
      <View style={styles.content}>
        {/* Title */}
        <Text style={[styles.greetingTitle, { color: titleColor }]}>
          Pending Tasks
        </Text>
        <Text style={[styles.greetingSubtitle, { color: subtleText }]}>
          You're all caught up
        </Text>

        {/* Centered Empty State */}
        <View style={styles.emptyStateContainer}>
          <Ux4gEmptyState
            variant="custom"
            icon={
              <View style={[styles.checkCircle, { backgroundColor: greenIconBg }]}>
                <Text style={styles.checkIcon}>✓</Text>
              </View>
            }
            title="No pending tasks"
            subtitle="You have no pending tasks right now. All your applications are progressing smoothly."
            buttonText="Back"
            onButtonPressed={onBack}
            buttonSize="small"
            padding={0}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  headerLeading: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  emblem: { height: 36, width: 26 },
  unionLogo: { height: 26, width: 34 },
  govTitle: { fontSize: 13, fontWeight: '600' },
  content: { flex: 1, padding: 20 },
  greetingTitle: { fontSize: 22, fontWeight: '800', marginBottom: 4 },
  greetingSubtitle: { fontSize: 13, marginBottom: 12 },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 60,
  },
  checkCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
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
          An empty state pattern shown when the user has no pending tasks. Built using Ux4gEmptyState with a success check badge, status description, and a Back action button.
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
                {/* Phone Frame Mockup with Ux4gThemeProvider */}
                <Ux4gThemeProvider isDark={isDark}>
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
                        padding: '12px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexShrink: 0,
                        borderBottom: `1px solid ${colors.dividerColor}`,
                      }}
                    >
                      {/* Left group */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <img
                          src="/national_emblem_logo.svg"
                          alt="National Emblem"
                          style={{
                            height: 32,
                            width: 'auto',
                            filter: isDark ? 'brightness(0) invert(1)' : 'none',
                          }}
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
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

                      {/* Right group: Avatar with online dot */}
                      <div style={{ position: 'relative' }}>
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
                          alt="Avatar"
                          style={{
                            width: 30,
                            height: 30,
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

                    {/* Body */}
                    <div
                      style={{
                        flex: 1,
                        padding: '24px 20px',
                        display: 'flex',
                        flexDirection: 'column',
                        boxSizing: 'border-box',
                      }}
                    >
                      {/* Title */}
                      <div
                        style={{
                          fontSize: 22,
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
                        }}
                      >
                        You're all caught up
                      </div>

                      {/* Centered Empty State using Ux4gEmptyState */}
                      <div
                        style={{
                          flex: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingBottom: 50,
                        }}
                      >
                        <Ux4gEmptyState
                          variant="custom"
                          icon={
                            <div
                              style={{
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                backgroundColor: colors.greenIconBg,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#FFFFFF"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                          }
                          title="No pending tasks"
                          subtitle="You have no pending tasks right now. All your applications are progressing smoothly."
                          buttonText="Back"
                          onButtonPressed={() => {}}
                          buttonSize="small"
                          padding={0}
                        />
                      </div>
                    </div>
                  </div>
                </Ux4gThemeProvider>
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
