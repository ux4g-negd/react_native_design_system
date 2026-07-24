import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Ux4gOtpInput } from '../components/otp-input/OtpInput';
import { Ux4gButton } from '../components/button/Button';
import { useUx4gTheme } from '../theme/Ux4gThemeContext';

export const OtpInputShowcase: React.FC = () => {
  const theme = useUx4gTheme();
  const colors = theme.colors;

  const [otpValue1, setOtpValue1] = useState<string>('123');
  const [otpValue2, setOtpValue2] = useState<string>('');
  const [otpValue3, setOtpValue3] = useState<string>('543210');
  const [otpValue4, setOtpValue4] = useState<string>('');
  const [otpValue5, setOtpValue5] = useState<string>('9876');
  const [timerResetKey, setTimerResetKey] = useState<number>(0);
  const [completedMsg, setCompletedMsg] = useState<string>('');

  const cardStyle = [
    styles.card,
    {
      backgroundColor: theme.isDark ? '#1F1F1F' : '#FFFFFF',
      borderColor: theme.isDark ? '#333333' : '#E4E4E7',
    },
  ];

  const titleStyle = [
    styles.sectionTitle,
    { color: theme.isDark ? '#F4F4F5' : '#18181B' },
  ];

  const subtitleStyle = [
    styles.subText,
    { color: theme.isDark ? '#A1A1AA' : '#71717A' },
  ];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.onBackground }]}>
          🔢 OTP Input Component (`Ux4gOtpInput`)
        </Text>
        <Text style={subtitleStyle}>
          Direct React Native port of Flutter `otp_input.dart`. Supports single-digit boxes, blinking focus cursor, auto-countdown resend timer, attempt counter, obscure password mode, statuses (`error`, `warning`, `success`, `locked`), and full paste handling.
        </Text>
      </View>

      {/* 1. Basic 6-Digit & 4-Digit OTP Inputs */}
      <View style={cardStyle}>
        <Text style={titleStyle}>1. Basic 6-Digit & 4-Digit OTP Inputs</Text>
        <Text style={subtitleStyle}>
          Standard OTP verification fields with interactive typing, backspace traversal, and completion callbacks.
        </Text>
        <View style={styles.stackGroup}>
          <Ux4gOtpInput
            label="Enter 6-Digit OTP"
            required
            length={6}
            value={otpValue1}
            onChanged={setOtpValue1}
            onCompleted={(code) => setCompletedMsg(`6-Digit OTP Completed: ${code}`)}
          />

          <Ux4gOtpInput
            label="Enter 4-Digit PIN"
            length={4}
            value={otpValue5}
            onChanged={setOtpValue5}
            onCompleted={(code) => setCompletedMsg(`4-Digit PIN Completed: ${code}`)}
          />

          {completedMsg ? (
            <View style={styles.msgBox}>
              <Text style={{ color: '#128937', fontWeight: '700', fontSize: 13 }}>
                ✅ {completedMsg}
              </Text>
            </View>
          ) : null}
        </View>
      </View>

      {/* 2. Auto-Countdown Resend Timer */}
      <View style={cardStyle}>
        <Text style={titleStyle}>2. Auto-Countdown Resend Timer (`autoCountdownSeconds`)</Text>
        <Text style={subtitleStyle}>
          Counts down `mm:ss` automatically. When expired, switches caption to pressable "Resend OTP".
        </Text>
        <View style={styles.stackGroup}>
          <Ux4gOtpInput
            key={timerResetKey}
            label="Verification Code"
            length={6}
            value={otpValue2}
            onChanged={setOtpValue2}
            autoCountdownSeconds={30}
            captionVariant="resendTimer"
            captionLeadingText="Didn't receive OTP?"
            onCaptionTrailingTap={() => {
              setOtpValue2('');
              setTimerResetKey((prev) => prev + 1);
            }}
          />

          <View style={{ marginTop: 4 }}>
            <Ux4gButton
              text="Reset Resend Timer (30s)"
              size="small"
              variant="outline"
              onPress={() => {
                setOtpValue2('');
                setTimerResetKey((prev) => prev + 1);
              }}
            />
          </View>
        </View>
      </View>

      {/* 3. Input Status States */}
      <View style={cardStyle}>
        <Text style={titleStyle}>3. Status States (`status`)</Text>
        <Text style={subtitleStyle}>
          Displays contextual validation feedback (`error`, `warning`, `success`, `locked`, `disabled`).
        </Text>
        <View style={styles.stackGroup}>
          {/* Error Status */}
          <Ux4gOtpInput
            label="Error Status"
            length={6}
            value="12345"
            onChanged={() => {}}
            status="error"
            captionVariant="plain"
            captionText="⚠️ Invalid OTP code. Please try again."
          />

          {/* Success Status */}
          <Ux4gOtpInput
            label="Success Status"
            length={6}
            value={otpValue3}
            onChanged={setOtpValue3}
            status="success"
            captionVariant="success"
            captionText="OTP verified successfully"
          />

          {/* Locked Status */}
          <Ux4gOtpInput
            label="Locked Status"
            length={6}
            value="987654"
            onChanged={() => {}}
            status="locked"
            captionVariant="locked"
            captionLeadingText="Locked for 28:43"
            captionTrailingText="Resend OTP"
            onCaptionTrailingTap={() => {}}
          />

          {/* Disabled Status */}
          <Ux4gOtpInput
            label="Disabled Input"
            length={6}
            value="000000"
            onChanged={() => {}}
            enabled={false}
          />
        </View>
      </View>

      {/* 4. Obscure Password Mode & Attempt Counter */}
      <View style={cardStyle}>
        <Text style={titleStyle}>4. Obscure Mode & Attempt Counter</Text>
        <Text style={subtitleStyle}>
          Secure PIN entry obscuring characters with '•' and attempt counter timers.
        </Text>
        <View style={styles.stackGroup}>
          {/* Obscure Mode */}
          <Ux4gOtpInput
            label="Enter Confidential MPIN (Obscured)"
            length={4}
            value={otpValue4}
            onChanged={setOtpValue4}
            obscure
          />

          {/* Attempt Counter with Timer */}
          <Ux4gOtpInput
            label="Login Security Code"
            length={6}
            value=""
            onChanged={() => {}}
            status="error"
            captionVariant="attemptWithTimer"
            captionLeadingText="Attempt 2 of 3"
            captionTrailingText="Resend in 00:17"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 6,
  },
  subText: {
    fontSize: 14,
    lineHeight: 20,
  },
  card: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  stackGroup: {
    marginTop: 14,
    gap: 14,
  },
  msgBox: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#F6FFED',
    borderColor: '#B7EB8F',
    borderWidth: 1,
  },
});
