import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';

interface DeleteAccountDialogDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

export const DeleteAccountDialogDoc: React.FC<DeleteAccountDialogDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [dialogVisible, setDialogVisible] = useState<boolean>(true);

  const colors = useMemo(() => {
    return {
      scaffoldBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral300,
      cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      border: isDark ? UX4GColors.red800 : UX4GColors.red300,
      dangerColor: UX4GColors.red600,
      cancelBorder: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300,
      cancelText: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      screenBorder: isDark ? UX4GColors.neutral800 : UX4GColors.neutral300,
    };
  }, [isDark]);

  const codeString = useMemo(() => {
    return `import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const DeleteAccountDialog = ({
  visible,
  isDark = false,
  onDeleteAccount = () => {},
  onCancel = () => {},
}: {
  visible: boolean;
  isDark?: boolean;
  onDeleteAccount?: () => void;
  onCancel?: () => void;
}) => {
  const cardBg = isDark ? UX4GColors.neutral900 : UX4GColors.neutral0;
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleText = isDark ? UX4GColors.neutral200 : UX4GColors.neutral700;
  const borderColor = isDark ? UX4GColors.red800 : UX4GColors.red300;
  const cancelBorder = isDark ? UX4GColors.neutral600 : UX4GColors.neutral300;
  const cancelText = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View
          style={[
            styles.dialogCard,
            {
              backgroundColor: cardBg,
              borderColor: borderColor,
            },
          ]}
        >
          {/* Title */}
          <Text style={[styles.title, { color: titleColor }]}>
            Delete your account?
          </Text>

          {/* Description */}
          <Text style={[styles.description, { color: subtleText }]}>
            This permanently deletes your account and all associated data. You will have a 30-day grace period to restore it — after that, deletion is final and cannot be undone.
          </Text>

          {/* Actions */}
          <View style={styles.actionsContainer}>
            <Ux4gButton
              text="Delete account"
              variant="primary"
              onPress={onDeleteAccount}
              style={[styles.actionBtn, { backgroundColor: UX4GColors.red600 }]}
              textStyle={styles.btnText}
            />
            <Ux4gButton
              text="Cancel"
              variant="outline"
              onPress={onCancel}
              style={[styles.actionBtn, { borderColor: cancelBorder }]}
              textStyle={{ color: cancelText }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  dialogCard: {
    width: '100%',
    maxWidth: 340,
    borderRadius: 12,
    borderWidth: 1,
    paddingTop: 24,
    paddingBottom: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 24,
  },
  actionsContainer: {
    width: '100%',
    gap: 8,
  },
  actionBtn: {
    width: '100%',
    height: 40,
    borderRadius: 8,
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
`;
  }, []);

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Delete Account Dialog</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A destructive confirmation dialog shown when the user taps &quot;Delete my account&quot;. Uses Ux4gModal with isDestructive style.
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
                {/* Phone Frame / Background Container */}
                <div
                  style={{
                    width: 360,
                    minHeight: 460,
                    borderRadius: 20,
                    backgroundColor: colors.scaffoldBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '24px 16px',
                    boxSizing: 'border-box',
                    border: isDark ? `1px solid ${colors.screenBorder}` : '1px solid #E5E7EB',
                    boxShadow: isDark
                      ? '0 12px 36px rgba(0, 0, 0, 0.6)'
                      : '0 12px 36px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                  }}
                >
                  {/* Dialog Card */}
                  {dialogVisible ? (
                    <div
                      style={{
                        width: '100%',
                        maxWidth: 336,
                        backgroundColor: colors.cardBg,
                        borderRadius: 12,
                        border: `1px solid ${colors.border}`,
                        padding: '24px 16px 16px 16px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                      }}
                    >
                      {/* Title */}
                      <div
                        style={{
                          fontSize: 18,
                          fontWeight: 700,
                          color: colors.titleColor,
                          textAlign: 'center',
                          marginBottom: 12,
                        }}
                      >
                        Delete your account?
                      </div>

                      {/* Description */}
                      <div
                        style={{
                          fontSize: 14,
                          lineHeight: '20px',
                          color: colors.subtleText,
                          textAlign: 'center',
                          marginBottom: 24,
                        }}
                      >
                        This permanently deletes your account and all associated data. You will have a 30-day grace period to restore it — after that, deletion is final and cannot be undone.
                      </div>

                      {/* Actions */}
                      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <button
                          onClick={() => setDialogVisible(false)}
                          style={{
                            width: '100%',
                            height: 40,
                            backgroundColor: colors.dangerColor,
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: 8,
                            fontSize: 14,
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'opacity 0.2s',
                          }}
                        >
                          Delete account
                        </button>
                        <button
                          onClick={() => setDialogVisible(false)}
                          style={{
                            width: '100%',
                            height: 40,
                            backgroundColor: 'transparent',
                            color: colors.cancelText,
                            border: `1px solid ${colors.cancelBorder}`,
                            borderRadius: 8,
                            fontSize: 14,
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'background-color 0.2s',
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                      <span style={{ fontSize: 14, color: colors.titleColor }}>Dialog closed</span>
                      <button
                        onClick={() => setDialogVisible(true)}
                        style={{
                          padding: '8px 16px',
                          borderRadius: 8,
                          border: 'none',
                          backgroundColor: UX4GColors.primary600,
                          color: '#FFFFFF',
                          fontSize: 13,
                          fontWeight: 600,
                          cursor: 'pointer',
                        }}
                      >
                        Reopen Dialog
                      </button>
                    </div>
                  )}
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

export default DeleteAccountDialogDoc;
