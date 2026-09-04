import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';

interface AppointmentConfirmedDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

export const AppointmentConfirmedDoc: React.FC<AppointmentConfirmedDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const colors = useMemo(() => {
    return {
      screenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
      headerBg: UX4GColors.primary600,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      labelColor: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      valueColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
      cardBorder: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      successCircleBg: isDark ? UX4GColors.green800 : UX4GColors.green100,
      successIcon: isDark ? UX4GColors.green300 : UX4GColors.green600,
      buttonText: isDark ? UX4GColors.neutral50 : UX4GColors.primary600,
      buttonBorder: isDark ? UX4GColors.neutral600 : UX4GColors.primary300,
      phoneBorder: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
    };
  }, [isDark]);

  const codeString = useMemo(() => {
    return `import React from 'react';
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
  Ux4gIcon,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const AppointmentConfirmedScreen = ({
  isDark = false,
  onBack = () => {},
  onAddToCalendar = () => {},
  onGetDirections = () => {},
}: {
  isDark?: boolean;
  onBack?: () => void;
  onAddToCalendar?: () => void;
  onGetDirections?: () => void;
}) => {
  const colors = {
    screenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
    titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
    subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
    cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
    cardBorder: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
    successCircleBg: isDark ? UX4GColors.green800 : UX4GColors.green100,
    successIcon: isDark ? UX4GColors.green300 : UX4GColors.green600,
    buttonText: isDark ? UX4GColors.neutral50 : UX4GColors.primary600,
    buttonBorder: isDark ? UX4GColors.neutral600 : UX4GColors.primary300,
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.screenBg }]}>
      {/* App Header */}
      <Ux4gAppHeader
        variant="filled"
        title="National Services Portal"
        showBackButton
        onBackPress={onBack}
      />

      <ScrollView style={styles.flexOne} contentContainerStyle={styles.scrollContainer}>
        {/* Success Icon */}
        <View style={styles.iconContainer}>
          <View style={[styles.successCircle, { backgroundColor: colors.successCircleBg }]}>
            <Ux4gIcon name="check_circle" size={36} color={colors.successIcon} />
          </View>
        </View>

        {/* Title */}
        <Text style={[styles.title, { color: colors.titleColor }]}>
          Appointment confirmed
        </Text>

        {/* Reference */}
        <View style={styles.referenceRow}>
          <Text style={[styles.referenceLabel, { color: colors.subtleText }]}>
            Reference{'  '}
          </Text>
          <Text style={[styles.referenceValue, { color: colors.titleColor }]}>
            APPT-2026-04127
          </Text>
        </View>

        {/* Subtitle */}
        <Text style={[styles.subtitle, { color: colors.subtleText }]}>
          We've sent details to your email and SMS.
        </Text>

        {/* Details Card */}
        <View
          style={[
            styles.detailsCard,
            { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
          ]}
        >
          <DetailItem
            label="Date & time"
            value="Thu, 18 Apr 2026 · 11:00 – 11:30 AM"
            isDark={isDark}
          />
          <View style={styles.itemSpacing} />
          <DetailItem
            label="Advocate"
            value="Adv. M. Sharma · Family Law"
            isDark={isDark}
          />
          <View style={styles.itemSpacing} />
          <DetailItem
            label="Office"
            value="Block C, Room 12, District Legal Services Authority, Pune"
            isDark={isDark}
          />
          <View style={styles.itemSpacing} />
          <DetailItem
            label="Documents to carry"
            value="Aadhaar, case papers, ID proof"
            isDark={isDark}
          />
        </View>

        {/* Add to calendar button */}
        <View style={styles.btnWrapper}>
          <Ux4gButton
            text="Add to calendar"
            onPress={onAddToCalendar}
            variant={Ux4gButtonVariant.outline}
            size={Ux4gButtonSize.large}
            contentColor={colors.buttonText}
            borderColor={colors.buttonBorder}
            leadingIcon="calendar_today"
          />
        </View>

        {/* Get directions button */}
        <View style={styles.btnWrapper}>
          <Ux4gButton
            text="Get directions"
            onPress={onGetDirections}
            variant={Ux4gButtonVariant.outline}
            size={Ux4gButtonSize.large}
            contentColor={colors.buttonText}
            borderColor={colors.buttonBorder}
            leadingIcon="explore"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const DetailItem = ({
  label,
  value,
  isDark,
}: {
  label: string;
  value: string;
  isDark: boolean;
}) => (
  <View style={styles.detailItem}>
    <Text
      style={[
        styles.detailLabel,
        { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700 },
      ]}
    >
      {label}
    </Text>
    <Text
      style={[
        styles.detailValue,
        { color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900 },
      ]}
    >
      {value}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  flexOne: { flex: 1 },
  scrollContainer: { padding: 16, paddingBottom: 32 },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 16,
  },
  successCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 8,
  },
  referenceRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  referenceLabel: { fontSize: 13 },
  referenceValue: { fontSize: 13, fontWeight: '700' },
  subtitle: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 18,
  },
  detailsCard: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 24,
  },
  itemSpacing: { height: 16 },
  detailItem: { width: '100%' },
  detailLabel: { fontSize: 12, fontWeight: '600', marginBottom: 2 },
  detailValue: { fontSize: 14, fontWeight: '400', lineHeight: 20 },
  btnWrapper: { width: '100%', marginBottom: 12 },
});
`;
  }, []);

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Appointment Confirmed</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Success screen after booking confirmation with reference number, appointment details, and action buttons.
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

          {/* Content Area */}
          <div className="wb-content">
            {/* 1. Preview Tab */}
            {activeMainTab === 'preview' && (
              <div
                className={`wb-preview-area ${isDark ? 'dark' : ''}`}
                style={{ flexDirection: 'column', alignItems: 'center' }}
              >
                {/* Mobile Phone Mockup */}
                <div
                  style={{
                    width: 360,
                    height: 720,
                    backgroundColor: colors.screenBg,
                    borderRadius: 24,
                    border: `1px solid ${colors.phoneBorder}`,
                    boxShadow: isDark
                      ? '0 12px 36px rgba(0, 0, 0, 0.6)'
                      : '0 12px 36px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                  }}
                >
                  {/* App Header (Filled Ux4gAppHeader) */}
                  <div
                    style={{
                      width: '100%',
                      height: '60px',
                      padding: '0 16px',
                      backgroundColor: colors.headerBg,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      boxSizing: 'border-box',
                      flexShrink: 0,
                    }}
                  >
                    <button
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#FFFFFF',
                        cursor: 'pointer',
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                        arrow_back
                      </span>
                    </button>
                    <span
                      style={{
                        color: '#FFFFFF',
                        fontSize: '16px',
                        fontWeight: 600,
                        letterSpacing: '-0.2px',
                      }}
                    >
                      National Services Portal
                    </span>
                  </div>

                  {/* Scrollable Body */}
                  <div
                    style={{
                      flex: 1,
                      overflowY: 'auto',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    {/* Success Icon */}
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '28px',
                        backgroundColor: colors.successCircleBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '12px',
                        marginBottom: '16px',
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: '36px',
                          color: colors.successIcon,
                          fontVariationSettings: "'FILL' 1",
                        }}
                      >
                        check_circle
                      </span>
                    </div>

                    {/* Title */}
                    <div
                      style={{
                        fontSize: '20px',
                        fontWeight: 800,
                        color: colors.titleColor,
                        marginBottom: '8px',
                        textAlign: 'center',
                      }}
                    >
                      Appointment confirmed
                    </div>

                    {/* Reference Row */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '8px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '13px',
                          color: colors.subtleText,
                          marginRight: '6px',
                        }}
                      >
                        Reference
                      </span>
                      <span
                        style={{
                          fontSize: '13px',
                          fontWeight: 700,
                          color: colors.titleColor,
                        }}
                      >
                        APPT-2026-04127
                      </span>
                    </div>

                    {/* Subtitle */}
                    <div
                      style={{
                        fontSize: '13px',
                        color: colors.subtleText,
                        lineHeight: '1.4',
                        marginBottom: '24px',
                        textAlign: 'center',
                      }}
                    >
                      We've sent details to your email and SMS.
                    </div>

                    {/* Details Card */}
                    <div
                      style={{
                        width: '100%',
                        backgroundColor: colors.cardBg,
                        border: `1px solid ${colors.cardBorder}`,
                        borderRadius: '12px',
                        padding: '16px',
                        boxSizing: 'border-box',
                        marginBottom: '24px',
                      }}
                    >
                      {/* Row 1: Date & Time */}
                      <div style={{ marginBottom: '16px' }}>
                        <div
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            color: colors.labelColor,
                            marginBottom: '2px',
                          }}
                        >
                          Date & time
                        </div>
                        <div
                          style={{
                            fontSize: '14px',
                            fontWeight: 400,
                            color: colors.valueColor,
                          }}
                        >
                          Thu, 18 Apr 2026 · 11:00 – 11:30 AM
                        </div>
                      </div>

                      {/* Row 2: Advocate */}
                      <div style={{ marginBottom: '16px' }}>
                        <div
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            color: colors.labelColor,
                            marginBottom: '2px',
                          }}
                        >
                          Advocate
                        </div>
                        <div
                          style={{
                            fontSize: '14px',
                            fontWeight: 400,
                            color: colors.valueColor,
                          }}
                        >
                          Adv. M. Sharma · Family Law
                        </div>
                      </div>

                      {/* Row 3: Office */}
                      <div style={{ marginBottom: '16px' }}>
                        <div
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            color: colors.labelColor,
                            marginBottom: '2px',
                          }}
                        >
                          Office
                        </div>
                        <div
                          style={{
                            fontSize: '14px',
                            fontWeight: 400,
                            color: colors.valueColor,
                            lineHeight: '1.35',
                          }}
                        >
                          Block C, Room 12, District Legal Services Authority, Pune
                        </div>
                      </div>

                      {/* Row 4: Documents to carry */}
                      <div>
                        <div
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            color: colors.labelColor,
                            marginBottom: '2px',
                          }}
                        >
                          Documents to carry
                        </div>
                        <div
                          style={{
                            fontSize: '14px',
                            fontWeight: 400,
                            color: colors.valueColor,
                          }}
                        >
                          Aadhaar, case papers, ID proof
                        </div>
                      </div>
                    </div>

                    {/* Add to Calendar Button */}
                    <button
                      style={{
                        width: '100%',
                        height: '44px',
                        backgroundColor: 'transparent',
                        border: `1px solid ${colors.buttonBorder}`,
                        color: colors.buttonText,
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        marginBottom: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                        calendar_today
                      </span>
                      Add to calendar
                    </button>

                    {/* Get Directions Button */}
                    <button
                      style={{
                        width: '100%',
                        height: '44px',
                        backgroundColor: 'transparent',
                        border: `1px solid ${colors.buttonBorder}`,
                        color: colors.buttonText,
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                        explore
                      </span>
                      Get directions
                    </button>
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

export default AppointmentConfirmedDoc;
