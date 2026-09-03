import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gButton } from '../../../src/components/button/Button';
import { CodeBlock } from '../components/CodeBlock';

interface DiscardDraftDialogDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

export const DiscardDraftDialogDoc: React.FC<DiscardDraftDialogDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [dialogVisible, setDialogVisible] = useState(true);

  const colors = useMemo(() => {
    return {
      screenBg: isDark ? UX4GColors.neutral950 : '#F9FAFB',
      dialogBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      titleColor: isDark ? UX4GColors.neutral50 : '#111827',
      subtleText: isDark ? UX4GColors.neutral400 : '#4B5563',
      border: isDark ? UX4GColors.neutral800 : '#E5E7EB',
      destructiveBg: isDark ? UX4GColors.red300 : UX4GColors.red600,
      destructiveText: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      outlineBorder: isDark ? UX4GColors.primary600 : UX4GColors.primary300,
    };
  }, [isDark]);

  // Clean React Native TSX code snippet using UX4G components
  const codeString = useMemo(() => {
    return `// Discard Draft Dialog Pattern

import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
} from 'react-native';
import {
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const DiscardDraftDialog = ({
  visible,
  isDark = ${isDark},
  onDiscard = () => {},
  onKeepDraft = () => {},
  onClose = () => {},
}: {
  visible: boolean;
  isDark?: boolean;
  onDiscard?: () => void;
  onKeepDraft?: () => void;
  onClose?: () => void;
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View
          style={[
            styles.dialogContainer,
            {
              backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
              borderColor: isDark ? UX4GColors.neutral800 : 'transparent',
              borderWidth: isDark ? 1 : 0,
            },
          ]}
        >
          {/* Dialog Title */}
          <Text
            style={[
              styles.title,
              { color: isDark ? UX4GColors.neutral50 : '#111827' },
            ]}
          >
            Discard draft?
          </Text>

          {/* Dialog Description */}
          <Text
            style={[
              styles.description,
              { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
            ]}
          >
            {'Your saved progress will be deleted.\\nThis cannot be undone.'}
          </Text>

          {/* Primary Destructive Action: Discard and start again */}
          <Ux4gButton
            text="Discard and start again"
            onPress={onDiscard}
            size="large"
            height={48}
            width="100%"
            backgroundColor={isDark ? UX4GColors.red300 : UX4GColors.red600}
            borderColor={isDark ? UX4GColors.red300 : UX4GColors.red600}
            contentColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral50}
          />

          <View style={{ height: 12 }} />

          {/* Secondary Action: Keep my draft */}
          <Ux4gButton
            text="Keep my draft"
            onPress={onKeepDraft}
            variant="outline"
            size="large"
            height={48}
            width="100%"
            contentColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
            borderColor={isDark ? UX4GColors.primary600 : UX4GColors.primary300}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  dialogContainer: {
    width: '100%',
    maxWidth: 320,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
  },
  title: {
    fontSize: 20,
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
});`;
  }, [isDark]);

  const renderLiveMockup = () => {
    return (
      <div
        style={{
          width: 360,
          height: 640,
          borderRadius: 20,
          boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)',
          overflow: 'hidden',
          backgroundColor: colors.screenBg,
          border: `1px solid ${colors.border}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          position: 'relative',
          padding: 24,
          boxSizing: 'border-box',
        }}
      >
        {dialogVisible ? (
          /* Dialog Card */
          <div
            style={{
              width: 300,
              padding: 24,
              borderRadius: 16,
              backgroundColor: colors.dialogBg,
              border: isDark ? `1px solid ${colors.border}` : 'none',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxSizing: 'border-box',
              zIndex: 10,
            }}
          >
            {/* Title */}
            <div
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: colors.titleColor,
                marginBottom: 12,
              }}
            >
              Discard draft?
            </div>

            {/* Subtitle / Warning */}
            <div
              style={{
                fontSize: 14,
                lineHeight: 1.4,
                color: colors.subtleText,
                whiteSpace: 'pre-line',
                marginBottom: 24,
              }}
            >
              {'Your saved progress will be deleted.\nThis cannot be undone.'}
            </div>

            {/* Destructive Primary Action Button */}
            <div style={{ width: '100%', marginBottom: 12 }}>
              <Ux4gButton
                text="Discard and start again"
                onPress={() => setDialogVisible(false)}
                size="large"
                height={48}
                width="100%"
                backgroundColor={colors.destructiveBg}
                borderColor={colors.destructiveBg}
                contentColor={colors.destructiveText}
              />
            </div>

            {/* Secondary Keep Draft Outline Button */}
            <div style={{ width: '100%' }}>
              <Ux4gButton
                text="Keep my draft"
                variant="outline"
                onPress={() => setDialogVisible(false)}
                size="large"
                height={48}
                width="100%"
                contentColor={colors.primaryColor}
                borderColor={colors.outlineBorder}
              />
            </div>
          </div>
        ) : (
          /* Reopen button for interactive testing */
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <div style={{ fontSize: 13, color: colors.subtleText }}>
              Dialog dismissed
            </div>
            <Ux4gButton
              text="Reopen Dialog"
              onPress={() => setDialogVisible(true)}
              variant="outline"
              size="medium"
            />
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
          <h1 className="wb-title">Discard Draft Dialog</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A destructive confirmation dialog shown when the user wants to discard their saved draft and start the application from scratch. This action cannot be undone.
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
                <div
                  className={`wb-preview-area ${isDark ? 'dark' : ''}`}
                  style={{ flexDirection: 'column', alignItems: 'center' }}
                >
                  {/* Render Live Mobile Mockup */}
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

export default DiscardDraftDialogDoc;
