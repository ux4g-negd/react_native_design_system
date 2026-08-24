import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface PatternsAuthDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code' | 'guidelines';

export const PatternsAuthDoc: React.FC<PatternsAuthDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const codeString = useMemo(() => {
    return `import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Ux4gOtpInput,
  Ux4gInputField,
  Ux4gAadhaarInputField,
  Ux4gButton,
  Ux4gLink,
  Ux4gStatusBanner,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';

export const AadhaarOtpVerificationPattern = () => {
  const [step, setStep] = useState<'enter-aadhaar' | 'verify-otp'>('enter-aadhaar');
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [otpValue, setOtpValue] = useState('');
  const [timer, setTimer] = useState(30);
  const [isVerifying, setIsVerifying] = useState(false);
  const [otpError, setOtpError] = useState('');

  useEffect(() => {
    let interval: any;
    if (step === 'verify-otp' && timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const handleSendOtp = () => {
    if (aadhaarNumber.length >= 12) {
      setStep('verify-otp');
      setTimer(30);
      setOtpError('');
    }
  };

  const handleVerifyOtp = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      if (otpValue === '123456') {
        alert('Authentication successful!');
      } else {
        setOtpError('Invalid OTP. Please enter the 6-digit code received on your mobile.');
      }
    }, 1200);
  };

  const handleResend = () => {
    setTimer(30);
    setOtpValue('');
    setOtpError('');
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {step === 'enter-aadhaar' ? 'Aadhaar e-KYC Verification' : 'Enter 6-Digit OTP'}
      </Text>
      <Text style={styles.subtitle}>
        {step === 'enter-aadhaar'
          ? 'Enter your 12-digit Aadhaar number to receive a one-time password on your linked mobile.'
          : 'OTP sent to mobile linked with Aadhaar ending in XXXX-9821.'}
      </Text>

      {step === 'enter-aadhaar' ? (
        <View style={{ marginTop: 20 }}>
          <Ux4gAadhaarInputField
            label="Aadhaar Number"
            required
            value={aadhaarNumber}
            onValueChange={setAadhaarNumber}
          />

          <View style={{ marginTop: 24 }}>
            <Ux4gButton
              text="Get OTP"
              enabled={aadhaarNumber.replace(/\\s/g, '').length === 12}
              onPress={handleSendOtp}
            />
          </View>
        </View>
      ) : (
        <View style={{ marginTop: 20 }}>
          <Ux4gOtpInput
            length={6}
            value={otpValue}
            onChangeOtp={setOtpValue}
            status={otpError ? 'error' : 'default'}
            caption={otpError || 'Do not share your OTP with anyone.'}
          />

          <View style={styles.timerRow}>
            {timer > 0 ? (
              <Text style={styles.timerText}>Resend code in 00:{timer < 10 ? '0' : ''}{timer}s</Text>
            ) : (
              <Ux4gLink text="Resend OTP" onPress={handleResend} />
            )}
          </View>

          <View style={{ marginTop: 24 }}>
            <Ux4gButton
              text="Verify & Proceed"
              enabled={otpValue.length === 6}
              isLoading={isVerifying}
              onPress={handleVerifyOtp}
            />
          </View>

          <View style={{ marginTop: 12, alignItems: 'center' }}>
            <Ux4gLink
              text="Change Aadhaar Number"
              onPress={() => setStep('enter-aadhaar')}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 6,
    lineHeight: 20,
  },
  timerRow: {
    marginTop: 16,
    alignItems: 'center',
  },
  timerText: {
    fontSize: 13,
    color: '#6B7280',
  },
});`;
  }, []);

  const renderStoryPreview = () => {
    const snackCodeString = `import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Ux4gOtpInput,
  Ux4gAadhaarInputField,
  Ux4gButton,
  Ux4gLink,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';

export default function App() {
  const [step, setStep] = useState('verify-otp');
  const [aadhaar, setAadhaar] = useState('9876 5432 1098');
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(25);
  const [isVerifying, setIsVerifying] = useState(false);

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <View style={[styles.screen, { backgroundColor: ${isDark ? "'#121212'" : "'#F3F4F6'"} }]}>
        <View style={[styles.card, { backgroundColor: ${isDark ? "'#1E1E1E'" : "'#FFFFFF'"} }]}>
          <Text style={[styles.title, { color: ${isDark ? "'#F9FAFB'" : "'#111827'"} }]}>
            Aadhaar OTP Verification
          </Text>
          <Text style={[styles.subtitle, { color: ${isDark ? "'#9CA3AF'" : "'#6B7280'"} }]}>
            Enter 6-digit OTP sent to mobile linked with Aadhaar ending in XXXX-1098.
          </Text>

          <View style={{ marginTop: 24 }}>
            <Ux4gOtpInput
              length={6}
              value={otp}
              onChangeOtp={setOtp}
              caption="Verification code expires in 10 minutes."
            />

            <View style={{ marginTop: 16, alignItems: 'center' }}>
              <Text style={{ fontSize: 13, color: ${isDark ? "'#9CA3AF'" : "'#6B7280'"} }}>
                Resend code in 00:25s
              </Text>
            </View>

            <View style={{ marginTop: 24 }}>
              <Ux4gButton
                text="Verify & Continue"
                enabled={otp.length === 6}
                isLoading={isVerifying}
                onPress={() => {
                  setIsVerifying(true);
                  setTimeout(() => setIsVerifying(false), 1200);
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    padding: 24,
    borderRadius: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 6,
    lineHeight: 20,
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${
      isDark ? 'dark' : 'light'
    }&name=UX4G%20Auth%20Pattern&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(
      snackCodeString
    )}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '580px', border: 'none', borderRadius: '8px' }}
        title="Expo Snack Auth Pattern Preview"
      />
    );
  };

  return (
    <div className="wb-page">
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Authentication & OTP Patterns</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Secure, accessible two-step citizen verification flows combining Aadhaar / mobile identity inputs, 6-digit OTP fields, resend cooldown timers, and error states.
        </p>
      </div>

      <div className="wb-body">
        <div className="wb-main">
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
            <button
              className={`wb-tab ${activeMainTab === 'guidelines' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('guidelines')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">menu_book</span> Guidelines
            </button>
          </div>

          <div className="wb-content">
            {activeMainTab === 'preview' && (
              <Ux4gThemeProvider isDark={isDark}>
                <div className={`wb-preview-area ${isDark ? 'dark' : ''}`}>
                  {renderStoryPreview()}
                </div>
              </Ux4gThemeProvider>
            )}

            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                <CodeBlock
                  code={codeString}
                  language="TSX"
                  filename="AadhaarOtpVerificationPattern.tsx"
                />
              </div>
            )}

            {activeMainTab === 'guidelines' && (
              <div className="wb-props-area" style={{ padding: '24px 0' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Citizen Authentication Best Practices</h3>
                <div className="cards-grid cards-grid-2x2" style={{ marginTop: 16 }}>
                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <span className="material-symbols-outlined">pin</span>
                    </div>
                    <h4 className="feature-card-title">Configurable Pin Length</h4>
                    <p className="feature-card-desc">
                      Use <code>length=6</code> for Aadhaar / UIDAI OTPs and <code>length=4</code> for standard SMS mobile login OTPs.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <span className="material-symbols-outlined">timer</span>
                    </div>
                    <h4 className="feature-card-title">Resend Cooldown</h4>
                    <p className="feature-card-desc">
                      Implement a 30 to 60-second cooldown timer before showing the "Resend OTP" link to prevent rate-limiting and duplicate SMS dispatches.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <span className="material-symbols-outlined">visibility_off</span>
                    </div>
                    <h4 className="feature-card-title">Identity Masking</h4>
                    <p className="feature-card-desc">
                      Mask sensitive identifiers in subtitles (e.g. <code>XXXX-XXXX-1098</code>) to preserve citizen privacy on shared devices.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <span className="material-symbols-outlined">sms</span>
                    </div>
                    <h4 className="feature-card-title">Auto-Focus & Paste</h4>
                    <p className="feature-card-desc">
                      <code>Ux4gOtpInput</code> automatically distributes 6-digit pasted verification codes across all boxes without requiring manual typing.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternsAuthDoc;
