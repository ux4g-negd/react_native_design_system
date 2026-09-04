import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';

interface ConfirmAppointmentV2DocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

export const ConfirmAppointmentV2Doc: React.FC<ConfirmAppointmentV2DocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  const colors = useMemo(() => {
    return {
      screenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
      headerBg: UX4GColors.primary600,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      labelColor: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      valueColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      cardBg: isDark ? UX4GColors.primary950 : UX4GColors.primary50,
      cardBorder: isDark ? UX4GColors.primary600 : UX4GColors.primary300,
      warningBg: isDark ? UX4GColors.orange950 : UX4GColors.orange50,
      warningBorder: isDark ? UX4GColors.orange700 : UX4GColors.orange300,
      warningIcon: isDark ? UX4GColors.orange300 : UX4GColors.orange600,
      warningText: isDark ? UX4GColors.orange100 : UX4GColors.orange700,
      primaryBtnBg: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      primaryBtnText: isDark ? UX4GColors.primary950 : '#FFFFFF',
      outlineBtnBorder: isDark ? UX4GColors.neutral600 : UX4GColors.primary300,
      outlineBtnText: isDark ? UX4GColors.neutral50 : UX4GColors.primary600,
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

export const ConfirmAppointmentV2Screen = ({
  isDark = false,
  onBack = () => {},
  onConfirm = () => {},
  onChangeSlot = () => {},
}: {
  isDark?: boolean;
  onBack?: () => void;
  onConfirm?: () => void;
  onChangeSlot?: () => void;
}) => {
  const colors = {
    screenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
    titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
    subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
    cardBg: isDark ? UX4GColors.primary950 : UX4GColors.primary50,
    cardBorder: isDark ? UX4GColors.primary600 : UX4GColors.primary300,
    warningBg: isDark ? UX4GColors.orange950 : UX4GColors.orange50,
    warningBorder: isDark ? UX4GColors.orange700 : UX4GColors.orange300,
    warningIcon: isDark ? UX4GColors.orange300 : UX4GColors.orange600,
    warningText: isDark ? UX4GColors.orange100 : UX4GColors.orange700,
    primaryBtnBg: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
    primaryBtnText: isDark ? UX4GColors.primary950 : '#FFFFFF',
    outlineBtnBorder: isDark ? UX4GColors.neutral600 : UX4GColors.primary300,
    outlineBtnText: isDark ? UX4GColors.neutral50 : UX4GColors.primary600,
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
        {/* Title & Subtitle */}
        <Text style={[styles.title, { color: colors.titleColor }]}>Confirm appointment</Text>
        <Text style={[styles.subtitle, { color: colors.subtleText }]}>
          Review before confirming. Slot not reserved until confirmed.
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
            label="Consultation type"
            value="In-person · 30 minutes"
            isDark={isDark}
          />
        </View>

        {/* Warning Banner */}
        <View
          style={[
            styles.warningBanner,
            { backgroundColor: colors.warningBg, borderColor: colors.warningBorder },
          ]}
        >
          <Ux4gIcon
            name="error"
            size={18}
            color={colors.warningIcon}
            style={styles.warningIcon}
          />
          <Text style={[styles.warningText, { color: colors.warningText }]}>
            Your slot is held for 5 minutes — please confirm soon to avoid losing it.
          </Text>
        </View>

        {/* Confirm Button */}
        <View style={styles.btnWrapper}>
          <Ux4gButton
            text="Confirm booking"
            onPress={onConfirm}
            variant={Ux4gButtonVariant.primary}
            size={Ux4gButtonSize.large}
            backgroundColor={colors.primaryBtnBg}
            contentColor={colors.primaryBtnText}
          />
        </View>

        {/* Choose Different Slot Button */}
        <View style={styles.btnWrapper}>
          <Ux4gButton
            text="Choose different slot"
            onPress={onChangeSlot}
            variant={Ux4gButtonVariant.outline}
            size={Ux4gButtonSize.large}
            contentColor={colors.outlineBtnText}
            borderColor={colors.outlineBtnBorder}
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
  title: { fontSize: 22, fontWeight: '800', marginTop: 8 },
  subtitle: { fontSize: 13, marginTop: 8, marginBottom: 24, lineHeight: 18 },
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
  detailValue: { fontSize: 14, fontWeight: '500', lineHeight: 20 },
  warningBanner: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  warningIcon: { marginRight: 8 },
  warningText: { flex: 1, fontSize: 13, lineHeight: 18 },
  btnWrapper: { width: '100%', marginBottom: 12 },
});
`;
  }, []);

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Confirm Appointment V2</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Appointment confirmation screen with left-bordered details card, warning with icon, and confirm/change slot actions.
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
                      height: '56px',
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
                    }}
                  >
                    {/* Title */}
                    <div
                      style={{
                        fontSize: '22px',
                        fontWeight: 800,
                        color: colors.titleColor,
                        marginTop: '8px',
                        marginBottom: '8px',
                      }}
                    >
                      Confirm appointment
                    </div>

                    {/* Subtitle */}
                    <div
                      style={{
                        fontSize: '13px',
                        color: colors.subtleText,
                        lineHeight: '1.4',
                        marginBottom: '24px',
                      }}
                    >
                      Review before confirming. Slot not reserved until confirmed.
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
                            fontWeight: 500,
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
                            fontWeight: 500,
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
                            fontWeight: 500,
                            color: colors.valueColor,
                            lineHeight: '1.35',
                          }}
                        >
                          Block C, Room 12, District Legal Services Authority, Pune
                        </div>
                      </div>

                      {/* Row 4: Consultation type */}
                      <div>
                        <div
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            color: colors.labelColor,
                            marginBottom: '2px',
                          }}
                        >
                          Consultation type
                        </div>
                        <div
                          style={{
                            fontSize: '14px',
                            fontWeight: 500,
                            color: colors.valueColor,
                          }}
                        >
                          In-person · 30 minutes
                        </div>
                      </div>
                    </div>

                    {/* Warning Banner */}
                    <div
                      style={{
                        width: '100%',
                        backgroundColor: colors.warningBg,
                        border: `1px solid ${colors.warningBorder}`,
                        borderRadius: '8px',
                        padding: '12px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxSizing: 'border-box',
                        marginBottom: '16px',
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: '18px',
                          color: colors.warningIcon,
                          fontVariationSettings: "'FILL' 1",
                          flexShrink: 0,
                        }}
                      >
                        error
                      </span>
                      <span
                        style={{
                          fontSize: '13px',
                          color: colors.warningText,
                          lineHeight: '1.4',
                        }}
                      >
                        Your slot is held for 5 minutes — please confirm soon to avoid losing it.
                      </span>
                    </div>

                    {/* Confirm Button */}
                    <button
                      onClick={() => setIsConfirmed(true)}
                      style={{
                        width: '100%',
                        height: '44px',
                        backgroundColor: colors.primaryBtnBg,
                        color: colors.primaryBtnText,
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        marginBottom: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'opacity 0.15s ease',
                      }}
                    >
                      {isConfirmed ? 'Booking Confirmed ✓' : 'Confirm booking'}
                    </button>

                    {/* Choose Different Slot Button */}
                    <button
                      onClick={() => setIsConfirmed(false)}
                      style={{
                        width: '100%',
                        height: '44px',
                        backgroundColor: 'transparent',
                        border: `1px solid ${colors.outlineBtnBorder}`,
                        color: colors.outlineBtnText,
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      Choose different slot
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

export default ConfirmAppointmentV2Doc;
