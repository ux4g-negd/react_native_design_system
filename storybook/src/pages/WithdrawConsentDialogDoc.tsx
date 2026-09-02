import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gButton } from '../../../src/components/button/Button';
import { CodeBlock } from '../components/CodeBlock';

interface WithdrawConsentDialogDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

export const WithdrawConsentDialogDoc: React.FC<WithdrawConsentDialogDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [isModalOpen, setIsModalOpen] = useState(true);

  const colors = useMemo(() => {
    return {
      screenBg: isDark ? UX4GColors.gray900 : UX4GColors.gray100,
      cardBg: isDark ? UX4GColors.gray900 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.gray900,
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      bodyText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
      primary: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      buttonBg: isDark ? UX4GColors.primary300 : '#4B2BD9',
      buttonText: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      iconCircleBg: isDark ? UX4GColors.orange800 : UX4GColors.orange100,
      iconColor: isDark ? UX4GColors.orange400 : UX4GColors.orange600,
      footerText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
    };
  }, [isDark]);

  const codeString = useMemo(() => {
    return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
} from 'react-native';
import {
  Ux4gModalContent,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const WithdrawConsentDialogPattern = ({
  isDark = ${isDark},
}: {
  isDark?: boolean;
}) => {
  const [visible, setVisible] = useState(true);

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <View style={styles.backdrop}>
        <Ux4gModalContent
          onDismiss={() => setVisible(false)}
          backgroundColor={isDark ? UX4GColors.gray900 : '#FFFFFF'}
          cornerRadius={16}
          alignment="centered"
          showHeader={false}
          showCloseButton={false}
          showDividers={false}
          showSubtitle={false}
          showFooter={false}
          showBody={true}
          bodyContent={
            <View style={styles.dialogBody}>
              {/* Warning Icon Badge */}
              <View style={[styles.iconCircle, { backgroundColor: isDark ? UX4GColors.orange800 : UX4GColors.orange100 }]}>
                <Text style={{ fontSize: 38 }}>⚠️</Text>
              </View>

              {/* Title */}
              <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
                Withdraw Consent?
              </Text>

              {/* Description */}
              <Text style={[styles.description, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 }]}>
                Withdrawing consent for SMS Gateway will stop sending status alerts to your mobile number. This will not affect your PM Kisan bank transfers.
              </Text>

              {/* Action Buttons */}
              <View style={{ width: '100%', gap: 8, marginTop: 24 }}>
                <Ux4gButton
                  text="Withdraw Consent"
                  onPress={() => setVisible(false)}
                  backgroundColor={isDark ? UX4GColors.primary300 : '#4B2BD9'}
                  contentColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
                  height={48}
                  size="large"
                />
                <Ux4gButton
                  text="Cancel"
                  variant="ghost"
                  contentColor={isDark ? UX4GColors.neutral50 : UX4GColors.neutral900}
                  onPress={() => setVisible(false)}
                  height={48}
                  size="large"
                />
              </View>

              {/* Disclaimer */}
              <Text style={[styles.disclaimer, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 }]}>
                You can re-enable this consent at any time.
              </Text>
            </View>
          }
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  dialogBody: {
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  iconCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 14.5,
    textAlign: 'center',
    lineHeight: 21,
  },
  disclaimer: {
    fontSize: 12.5,
    textAlign: 'center',
    marginTop: 16,
  },
});
`;
  }, [isDark]);

  const renderLiveMockup = () => {
    return (
      <div
        style={{
          width: 360,
          height: 760,
          borderRadius: 20,
          boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)',
          overflow: 'hidden',
          backgroundColor: colors.screenBg,
          border: `1px solid ${isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}`,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        {/* Simulated Background Content */}
        <div style={{ flex: 1, padding: '20px 20px 0 20px', filter: isModalOpen ? 'blur(1px)' : 'none' }}>
          <div style={{ fontSize: 20, fontWeight: 600, color: colors.titleColor, marginBottom: 8 }}>
            Manage Your Data Sharing Consents
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: colors.primary, marginBottom: 16 }}>
            Scheme: PM Kisan
          </div>
          <div
            style={{
              width: '100%',
              height: 80,
              borderRadius: 12,
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.border}`,
              marginBottom: 12,
            }}
          />
          <div
            style={{
              width: '100%',
              height: 80,
              borderRadius: 12,
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.border}`,
              marginBottom: 12,
            }}
          />
        </div>

        {/* Trigger Button when modal is closed */}
        {!isModalOpen && (
          <div style={{ padding: 20, textAlign: 'center' }}>
            <Ux4gButton
              text="Re-open Dialog"
              onPress={() => setIsModalOpen(true)}
              height={48}
              size="large"
              width="100%"
            />
          </div>
        )}

        {/* Dimmed Overlay & Modal Dialog */}
        {isModalOpen && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.45)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 20,
              zIndex: 100,
            }}
          >
            <div
              style={{
                width: '100%',
                backgroundColor: colors.cardBg,
                borderRadius: 16,
                padding: '24px 20px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxSizing: 'border-box',
              }}
            >
              {/* Warning Icon Badge */}
              <div
                style={{
                  width: 76,
                  height: 76,
                  borderRadius: '50%',
                  backgroundColor: colors.iconCircleBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: 38,
                    color: colors.iconColor,
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  warning
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: colors.titleColor,
                  textAlign: 'center',
                  margin: '0 0 12px 0',
                  letterSpacing: '-0.01em',
                }}
              >
                Withdraw Consent?
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 14.5,
                  fontWeight: 400,
                  color: colors.bodyText,
                  textAlign: 'center',
                  margin: '0 0 24px 0',
                  lineHeight: '1.45',
                }}
              >
                Withdrawing consent for SMS Gateway will stop sending status alerts to your mobile number. This will not affect your PM Kisan bank transfers.
              </p>

              {/* Action Buttons */}
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Ux4gButton
                  text="Withdraw Consent"
                  backgroundColor={colors.buttonBg}
                  contentColor={colors.buttonText}
                  onPress={() => setIsModalOpen(false)}
                  height={48}
                  size="large"
                  width="100%"
                />
                <Ux4gButton
                  text="Cancel"
                  variant="ghost"
                  contentColor={isDark ? UX4GColors.neutral50 : UX4GColors.neutral900}
                  onPress={() => setIsModalOpen(false)}
                  height={48}
                  size="large"
                  width="100%"
                />
              </div>

              {/* Disclaimer */}
              <div
                style={{
                  fontSize: 12.5,
                  fontWeight: 400,
                  color: colors.bodyText,
                  textAlign: 'center',
                  marginTop: 16,
                }}
              >
                You can re-enable this consent at any time.
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Withdraw Consent Dialog</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A modal dialog pattern used to confirm the withdrawal of data sharing consents under the DPDP Act 2023.
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
                  {/* Render Mobile Phone Mockup */}
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

export default WithdrawConsentDialogDoc;
