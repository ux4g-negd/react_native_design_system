import React, { useState, useEffect, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface SessionTimeoutDialogDocProps {
  isDark: boolean;
  initialSubTab?: 'expiring' | 'expiring-soon' | 'session-ended';
}

type MainTab = 'preview' | 'code';
type SubTab = 'expiring' | 'expiring-soon' | 'session-ended';

export const SessionTimeoutDialogDoc: React.FC<SessionTimeoutDialogDocProps> = ({
  isDark,
  initialSubTab = 'expiring',
}) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [subTab, setSubTab] = useState<SubTab>(initialSubTab);

  // Sync subTab if initialSubTab prop changes
  useEffect(() => {
    if (initialSubTab) {
      setSubTab(initialSubTab);
    }
  }, [initialSubTab]);

  // Live Timer Countdown State
  const [secondsLeft, setSecondsLeft] = useState<number>(() => {
    if (subTab === 'expiring-soon') return 45;
    if (subTab === 'session-ended') return 0;
    return 287; // 04:47
  });
  const [timerRunning, setTimerRunning] = useState<boolean>(true);

  // Reset timer when switching subTab
  useEffect(() => {
    if (subTab === 'expiring-soon') {
      setSecondsLeft(45);
    } else if (subTab === 'session-ended') {
      setSecondsLeft(0);
    } else {
      setSecondsLeft(287);
    }
    setTimerRunning(true);
  }, [subTab]);

  // Decrement timer every 1s
  useEffect(() => {
    if (!timerRunning || subTab === 'session-ended') return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          return subTab === 'expiring-soon' ? 45 : 287; // Loop demo
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerRunning, subTab]);

  const totalSeconds = subTab === 'expiring-soon' ? 60 : 300;
  const progressRatio = Math.max(0, Math.min(1, secondsLeft / totalSeconds));

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // Color tokens from Flutter Design System
  const colors = useMemo(() => {
    const isEnded = subTab === 'session-ended';
    const isExpiringSoon = subTab === 'expiring-soon';

    let iconBgColor: string = isDark ? UX4GColors.primary800 : UX4GColors.primary100;
    let iconColor: string = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
    let countColor: string = iconColor;
    let progressColor: string = iconColor;
    let buttonBgColor: string = iconColor;
    let buttonTextColor: string = isDark ? UX4GColors.primary900 : UX4GColors.primary50;

    if (isExpiringSoon) {
      iconBgColor = isDark ? UX4GColors.orange800 : UX4GColors.orange100;
      iconColor = isDark ? UX4GColors.orange500 : UX4GColors.orange600;
      countColor = isDark ? UX4GColors.orange300 : UX4GColors.orange800;
      progressColor = isDark ? UX4GColors.orange300 : UX4GColors.orange600;
      buttonBgColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
      buttonTextColor = isDark ? UX4GColors.primary900 : UX4GColors.primary50;
    } else if (isEnded) {
      iconBgColor = isDark ? UX4GColors.neutral800 : UX4GColors.neutral100;
      iconColor = isDark ? UX4GColors.neutral200 : UX4GColors.neutral700;
      countColor = iconColor;
      progressColor = iconColor;
      buttonBgColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
      buttonTextColor = isDark ? UX4GColors.neutral900 : UX4GColors.neutral50;
    }

    return {
      modalBg: isDark ? '#171717' : UX4GColors.neutral50,
      textColor: isDark ? '#FAFAFA' : '#171717',
      descColor: isDark ? '#E5E5E5' : '#404040',
      outlineBorder: isDark ? '#525252' : '#D9D9D9',
      progressBg: isDark ? '#525252' : '#E5E5E5',
      iconBgColor,
      iconColor,
      countColor,
      progressColor,
      buttonBgColor,
      buttonTextColor,
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
    };
  }, [isDark, subTab]);

  // Clean React Native TSX code snippet matching Flutter sessionExpiringDialogComponent (using Ux4gModal)
  const codeString = useMemo(() => {
    if (subTab === 'expiring-soon') {
      return `import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ux4gModal, UX4GColors } from 'ux4g-react-native-design-system';
import Svg, { Path } from 'react-native-svg';

const WarningIcon = ({ size = 28, color = UX4GColors.orange600 }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
      fill={color}
    />
  </Svg>
);

export const SessionExpiringSoonModal = ({
  visible,
  onDismiss,
  isDark = false,
}: {
  visible: boolean;
  onDismiss: () => void;
  isDark?: boolean;
}) => {
  const [secondsLeft, setSecondsLeft] = useState(45);

  useEffect(() => {
    if (!visible) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 45));
    }, 1000);
    return () => clearInterval(timer);
  }, [visible]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return \`\${m}:\${s}\`;
  };

  const progress = Math.max(0, Math.min(1, secondsLeft / 60));

  const iconBgColor = isDark ? UX4GColors.orange800 : UX4GColors.orange100;
  const iconColor = isDark ? UX4GColors.orange500 : UX4GColors.orange600;
  const countColor = isDark ? UX4GColors.orange300 : UX4GColors.orange800;
  const progressColor = isDark ? UX4GColors.orange300 : UX4GColors.orange600;
  const progressBg = isDark ? '#525252' : '#E5E5E5';

  return (
    <Ux4gModal
      visible={visible}
      onDismiss={onDismiss}
      alignment="centered"
      showHeader={true}
      headerTitle="Your session is expiring soon"
      showCloseButton={false}
      showDividers={false}
      leadingItem="icon"
      leadingIcon={
        <View style={[styles.iconCircle, { backgroundColor: iconBgColor }]}>
          <WarningIcon size={28} color={iconColor} />
        </View>
      }
      bodyContent={
        <View style={styles.bodyContainer}>
          <Text style={[styles.timerText, { color: countColor }]}>
            {formatTime(secondsLeft)}
          </Text>
          <Text style={[styles.descText, { color: isDark ? '#E5E5E5' : '#404040' }]}>
            You'll be signed out in less than a minute
          </Text>
          <View style={[styles.progressTrack, { backgroundColor: progressBg }]}>
            <View style={[styles.progressFill, { width: \`\${progress * 100}%\`, backgroundColor: progressColor }]} />
          </View>
        </View>
      }
      showFooter={true}
      footerButtons="twoButtons"
      primaryButtonText="Stay signed in"
      secondaryButtonText="Sign out now"
      onPrimaryClick={() => alert('Session renewed!')}
      onSecondaryClick={onDismiss}
      backgroundColor={isDark ? '#171717' : UX4GColors.neutral50}
      cornerRadius={16}
    />
  );
};

const styles = StyleSheet.create({
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  bodyContainer: {
    alignItems: 'center',
    width: '100%',
  },
  timerText: {
    fontSize: 40,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginBottom: 16,
    textAlign: 'center',
  },
  descText: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  progressTrack: {
    width: '100%',
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
});`;
    }

    if (subTab === 'session-ended') {
      return `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ux4gModal, UX4GColors } from 'ux4g-react-native-design-system';
import Svg, { Path } from 'react-native-svg';

const ClockIcon = ({ size = 28, color = UX4GColors.neutral700 }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
      fill={color}
    />
  </Svg>
);

export const SessionEndedModal = ({
  visible,
  onDismiss,
  isDark = false,
}: {
  visible: boolean;
  onDismiss: () => void;
  isDark?: boolean;
}) => {
  const iconBgColor = isDark ? UX4GColors.neutral800 : UX4GColors.neutral100;
  const iconColor = isDark ? UX4GColors.neutral200 : UX4GColors.neutral700;

  return (
    <Ux4gModal
      visible={visible}
      onDismiss={onDismiss}
      alignment="centered"
      showHeader={true}
      headerTitle="Session ended"
      showCloseButton={false}
      showDividers={false}
      leadingItem="icon"
      leadingIcon={
        <View style={[styles.iconCircle, { backgroundColor: iconBgColor }]}>
          <ClockIcon size={28} color={iconColor} />
        </View>
      }
      bodyContent={
        <View style={styles.bodyContainer}>
          <Text style={[styles.descText, { color: isDark ? '#E5E5E5' : '#404040' }]}>
            Your form progress has been saved. Sign in again to continue where you left off.
          </Text>
        </View>
      }
      showFooter={true}
      footerButtons="oneButton"
      primaryButtonText="Sign in to continue"
      onPrimaryClick={() => alert('Redirecting to Sign In...')}
      backgroundColor={isDark ? '#171717' : UX4GColors.neutral50}
      cornerRadius={16}
    />
  );
};

const styles = StyleSheet.create({
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  bodyContainer: {
    alignItems: 'center',
    width: '100%',
  },
  descText: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 12,
  },
});`;
    }

    return `import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ux4gModal, UX4GColors } from 'ux4g-react-native-design-system';
import Svg, { Path } from 'react-native-svg';

const LockIcon = ({ size = 28, color = UX4GColors.primary600 }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
      fill={color}
    />
  </Svg>
);

export const SessionExpiringModal = ({
  visible,
  onDismiss,
  isDark = false,
}: {
  visible: boolean;
  onDismiss: () => void;
  isDark?: boolean;
}) => {
  const [secondsLeft, setSecondsLeft] = useState(287);

  useEffect(() => {
    if (!visible) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 287));
    }, 1000);
    return () => clearInterval(timer);
  }, [visible]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return \`\${m}:\${s}\`;
  };

  const progress = Math.max(0, Math.min(1, secondsLeft / 300));

  const iconBgColor = isDark ? UX4GColors.primary800 : UX4GColors.primary100;
  const iconColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const progressBg = isDark ? '#525252' : '#E5E5E5';

  return (
    <Ux4gModal
      visible={visible}
      onDismiss={onDismiss}
      alignment="centered"
      showHeader={true}
      headerTitle="Your session is expiring"
      showCloseButton={false}
      showDividers={false}
      leadingItem="icon"
      leadingIcon={
        <View style={[styles.iconCircle, { backgroundColor: iconBgColor }]}>
          <LockIcon size={28} color={iconColor} />
        </View>
      }
      bodyContent={
        <View style={styles.bodyContainer}>
          <Text style={[styles.timerText, { color: iconColor }]}>
            {formatTime(secondsLeft)}
          </Text>
          <Text style={[styles.descText, { color: isDark ? '#E5E5E5' : '#404040' }]}>
            You've been inactive for a while. For your security, we'll sign you out automatically.
          </Text>
          <View style={[styles.progressTrack, { backgroundColor: progressBg }]}>
            <View style={[styles.progressFill, { width: \`\${progress * 100}%\`, backgroundColor: iconColor }]} />
          </View>
        </View>
      }
      showFooter={true}
      footerButtons="twoButtons"
      primaryButtonText="Stay signed in"
      secondaryButtonText="Sign out now"
      onPrimaryClick={() => alert('Session renewed!')}
      onSecondaryClick={onDismiss}
      backgroundColor={isDark ? '#171717' : UX4GColors.neutral50}
      cornerRadius={16}
    />
  );
};

const styles = StyleSheet.create({
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  bodyContainer: {
    alignItems: 'center',
    width: '100%',
  },
  timerText: {
    fontSize: 40,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginBottom: 16,
    textAlign: 'center',
  },
  descText: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  progressTrack: {
    width: '100%',
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
});`;
  }, [subTab]);

  // Page Header Details
  const headerInfo = useMemo(() => {
    switch (subTab) {
      case 'expiring-soon':
        return {
          title: 'Your session is expiring soon',
          subtitle:
            'Final-minute warning state with prominent orange indicator when session countdown falls below 60 seconds.',
          breadcrumbItem: 'Your session is expiring soon',
        };
      case 'session-ended':
        return {
          title: 'Session ended',
          subtitle:
            'Terminal state modal shown when user session has elapsed, guiding user to re-authenticate and restore progress.',
          breadcrumbItem: 'Session ended',
        };
      case 'expiring':
      default:
        return {
          title: 'Your session is expiring',
          subtitle:
            'Modal dialog shown after a period of inactivity to warn users before automatic session termination.',
          breadcrumbItem: 'Your session is expiring',
        };
    }
  }, [subTab]);

  // Render Live Web Interactive Preview
  const renderLiveMockup = () => {
    const isEnded = subTab === 'session-ended';

    return (
      <div
        style={{
          width: 360,
          minHeight: 760,
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: isDark
            ? '0 12px 32px rgba(0, 0, 0, 0.6), 0 0 0 1px #333333'
            : '0 12px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px #E5E7EB',
          backgroundColor: isDark ? '#0A0A0A' : '#FAFAFA',
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* Brand Header */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            boxShadow: isDark
              ? '0 2px 8px rgba(0, 0, 0, 0.4)'
              : '0 2px 8px rgba(0, 0, 0, 0.04)',
          }}
        >
          <Ux4gAppHeader
            title=""
            variant="light"
            elevation={2}
            useSafeArea={false}
            height={56}
            horizontalPadding={16}
            leadingSpacing={8}
            backgroundColor={colors.headerBg}
            borderColor={colors.border}
            leadingWidgets={[
              <img
                key="emblem"
                src="/national_emblem_logo.svg"
                alt="National Emblem"
                style={{
                  height: 32,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />,
              <div
                key="divider"
                style={{
                  width: 1,
                  height: 24,
                  backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
                  margin: '0 4px',
                }}
              />,
              <UnionLogo key="union" size={32} isDark={isDark} />,
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

        {/* Background App Mockup Preview */}
        <div
          style={{
            flex: 1,
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            opacity: 0.3,
            filter: 'blur(2px)',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <div style={{ height: 36, width: '60%', backgroundColor: isDark ? '#333' : '#E0E0E0', borderRadius: 8 }} />
          <div style={{ height: 120, width: '100%', backgroundColor: isDark ? '#222' : '#F0F0F0', borderRadius: 12 }} />
          <div style={{ height: 200, width: '100%', backgroundColor: isDark ? '#222' : '#F0F0F0', borderRadius: 12 }} />
        </div>

        {/* Semi-transparent Modal Backdrop Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: isDark ? 'rgba(0,0,0,0.75)' : 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
            zIndex: 20,
          }}
        >
          {/* Floating Dialog Container */}
          <div
            style={{
              width: '100%',
              maxWidth: 320,
              padding: 24,
              borderRadius: 16,
              backgroundColor: colors.modalBg,
              boxShadow: isDark
                ? '0 12px 32px rgba(0, 0, 0, 0.8)'
                : '0 12px 32px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxSizing: 'border-box',
            }}
          >
            {/* Badge Icon */}
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                backgroundColor: colors.iconBgColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 28,
                  color: colors.iconColor,
                  fontVariationSettings: subTab === 'session-ended' ? "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 28" : "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 28",
                  lineHeight: 1,
                  display: 'inline-block',
                }}
              >
                {subTab === 'expiring-soon'
                  ? 'warning'
                  : subTab === 'session-ended'
                  ? 'schedule'
                  : 'lock'}
              </span>
            </div>

            {/* Heading */}
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: colors.textColor,
                marginBottom: 8,
                textAlign: 'center',
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              }}
            >
              {subTab === 'expiring-soon'
                ? 'Your session is expiring soon'
                : subTab === 'session-ended'
                ? 'Session ended'
                : 'Your session is expiring'}
            </div>

            {/* Countdown Timer */}
            {!isEnded && (
              <div
                style={{
                  fontSize: 40,
                  fontWeight: 800,
                  color: colors.countColor,
                  letterSpacing: '-0.5px',
                  marginBottom: 16,
                  lineHeight: 1,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                {formatTime(secondsLeft)}
              </div>
            )}

            {/* Description */}
            <div
              style={{
                fontSize: 14,
                fontWeight: 400,
                lineHeight: '20px',
                color: colors.descColor,
                textAlign: 'center',
                marginBottom: isEnded ? 24 : 20,
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              }}
            >
              {subTab === 'expiring-soon'
                ? "You'll be signed out in less than a minute"
                : subTab === 'session-ended'
                ? 'Your form progress has been saved. Sign in again to continue where you left off.'
                : "You've been inactive for a while. For your security, we'll sign you out automatically."}
            </div>

            {/* Progress Bar */}
            {!isEnded && (
              <div
                style={{
                  width: '100%',
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: colors.progressBg,
                  overflow: 'hidden',
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${progressRatio * 100}%`,
                    backgroundColor: colors.progressColor,
                    transition: 'width 0.3s ease',
                    borderRadius: 3,
                  }}
                />
              </div>
            )}

            {/* Action Buttons */}
            <div style={{ width: '100%', display: 'flex', gap: 12 }}>
              {!isEnded ? (
                <>
                  <button
                    type="button"
                    onClick={() => alert('Session extended!')}
                    style={{
                      flex: 1,
                      height: 48,
                      borderRadius: 8,
                      border: 'none',
                      backgroundColor: colors.buttonBgColor,
                      color: colors.buttonTextColor,
                      fontSize: 14,
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      transition: 'opacity 0.2s ease',
                    }}
                  >
                    Stay signed in
                  </button>
                  <button
                    type="button"
                    onClick={() => alert('Signed out!')}
                    style={{
                      flex: 1,
                      height: 48,
                      borderRadius: 8,
                      border: `1px solid ${colors.outlineBorder}`,
                      backgroundColor: 'transparent',
                      color: colors.textColor,
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      transition: 'background 0.2s ease',
                    }}
                  >
                    Sign out now
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => alert('Redirecting to Sign In...')}
                  style={{
                    width: '100%',
                    height: 48,
                    borderRadius: 8,
                    border: 'none',
                    backgroundColor: colors.buttonBgColor,
                    color: colors.buttonTextColor,
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Sign in to continue
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`wb-page ${isDark ? 'dark' : ''}`}>
      <div className="wb-header">
        <div>
          <div className="wb-breadcrumb">
            <span>Patterns</span> / <span>Identity and Access</span> / <span>Session Time-out Dialog</span> / <span className="active">{headerInfo.breadcrumbItem}</span>
          </div>
          <h1 className="wb-title">{headerInfo.title}</h1>
          <p className="wb-subtitle">{headerInfo.subtitle}</p>
        </div>
      </div>

      <div className="wb-body">
        <div className="wb-main">
          {/* Header Tab Bar: Preview / Code */}
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
                  {/* 3 Sub-Section State Pills */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
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
                      onClick={() => setSubTab('expiring')}
                      style={{
                        padding: '8px 16px',
                        borderRadius: 8,
                        border: 'none',
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: 'pointer',
                        backgroundColor: subTab === 'expiring' ? UX4GColors.primary : 'transparent',
                        color: subTab === 'expiring' ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      Your session is expiring
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubTab('expiring-soon')}
                      style={{
                        padding: '8px 16px',
                        borderRadius: 8,
                        border: 'none',
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: 'pointer',
                        backgroundColor: subTab === 'expiring-soon' ? UX4GColors.primary : 'transparent',
                        color: subTab === 'expiring-soon' ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      Expiring soon
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubTab('session-ended')}
                      style={{
                        padding: '8px 16px',
                        borderRadius: 8,
                        border: 'none',
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: 'pointer',
                        backgroundColor: subTab === 'session-ended' ? UX4GColors.primary : 'transparent',
                        color: subTab === 'session-ended' ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      Session ended
                    </button>
                  </div>

                  {/* Timer Demo Controls (for Expiring & Expiring soon) */}
                  {subTab !== 'session-ended' && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        marginBottom: 16,
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setTimerRunning((prev) => !prev)}
                        className="wb-tab"
                        style={{
                          padding: '4px 12px',
                          fontSize: 12,
                          backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
                          borderRadius: 6,
                          color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral800,
                        }}
                      >
                        {timerRunning ? 'Pause Demo Timer' : 'Resume Demo Timer'}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSecondsLeft(subTab === 'expiring-soon' ? 45 : 287);
                          setTimerRunning(true);
                        }}
                        className="wb-tab"
                        style={{
                          padding: '4px 12px',
                          fontSize: 12,
                          backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
                          borderRadius: 6,
                          color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral800,
                        }}
                      >
                        Reset Countdown
                      </button>
                    </div>
                  )}

                  {/* Render Mobile Phone Mockup with Dialog */}
                  {renderLiveMockup()}
                </div>
              </Ux4gThemeProvider>
            )}

            {/* 2. Code Tab */}
            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                {/* State Switcher in Code Tab */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 8,
                    marginBottom: 16,
                    padding: '8px 16px',
                    backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
                    borderRadius: 8,
                    alignItems: 'center',
                    border: `1px solid ${isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}`,
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 600, color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }}>
                    Active Sub-Section:
                  </span>
                  <button
                    type="button"
                    onClick={() => setSubTab('expiring')}
                    className={`wb-tab ${subTab === 'expiring' ? 'active' : ''}`}
                    style={{ padding: '4px 12px', fontSize: 12 }}
                  >
                    Your session is expiring
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubTab('expiring-soon')}
                    className={`wb-tab ${subTab === 'expiring-soon' ? 'active' : ''}`}
                    style={{ padding: '4px 12px', fontSize: 12 }}
                  >
                    Expiring soon
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubTab('session-ended')}
                    className={`wb-tab ${subTab === 'session-ended' ? 'active' : ''}`}
                    style={{ padding: '4px 12px', fontSize: 12 }}
                  >
                    Session ended
                  </button>
                </div>

                <CodeBlock
                  code={codeString}
                  language="TSX"
                  filename={
                    subTab === 'expiring-soon'
                      ? 'SessionExpiringSoonDialog.tsx'
                      : subTab === 'session-ended'
                      ? 'SessionEndedDialog.tsx'
                      : 'SessionExpiringDialog.tsx'
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

export default SessionTimeoutDialogDoc;
