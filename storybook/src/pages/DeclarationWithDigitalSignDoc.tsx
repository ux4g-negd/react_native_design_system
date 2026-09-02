import React, { useState, useMemo, useEffect } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gCheckbox } from '../../../src/components/checkbox/Checkbox';
import { CodeBlock } from '../components/CodeBlock';

interface DeclarationWithDigitalSignDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';
type StateType = 'Unsigned' | 'Signed';

export const DeclarationWithDigitalSignDoc: React.FC<DeclarationWithDigitalSignDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');
  const [stateKnob, setStateKnob] = useState<StateType>('Unsigned');
  const [name, setName] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isSigned, setIsSigned] = useState(false);

  // Sync state when knob changes
  useEffect(() => {
    if (stateKnob === 'Signed') {
      setName('Ramesh Kumar');
      setAgreed(true);
      setIsSigned(true);
    } else {
      setName('');
      setAgreed(false);
      setIsSigned(false);
    }
  }, [stateKnob]);

  const handleNameChange = (val: string) => {
    setName(val);
    const valid = val.trim().split(/\s+/).length >= 2 && val.trim().length > 3;
    setIsSigned(valid);
  };

  const colors = useMemo(() => {
    return {
      screenBg: variant === 'Card style'
        ? (isDark ? UX4GColors.primary900 : UX4GColors.primary100)
        : (isDark ? UX4GColors.gray900 : UX4GColors.gray100),
      cardBg: isDark ? UX4GColors.gray800 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.gray900,
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
      declarationBoxBg: isDark ? UX4GColors.gray900 : UX4GColors.gray100,
      declarationBoxBorder: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      declarationText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral700,
      inputBg: isDark ? UX4GColors.gray800 : '#FFFFFF',
      inputBorder: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300,
      inputText: isDark ? UX4GColors.neutral50 : UX4GColors.gray900,
      inputPlaceholder: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
      inputLabel: isDark ? UX4GColors.neutral400 : UX4GColors.neutral700,
      inputHelperText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      inputHelperIcon: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      checkCircleIcon: isDark ? UX4GColors.green300 : UX4GColors.green700,
      warningBg: isDark ? UX4GColors.orange900 : UX4GColors.orange50,
      warningBorder: isDark ? UX4GColors.orange800 : UX4GColors.orange100,
      warningIcon: isDark ? UX4GColors.orange400 : UX4GColors.orange600,
      warningText: isDark ? UX4GColors.orange300 : UX4GColors.orange800,
      requiredStar: isDark ? UX4GColors.red400 : UX4GColors.red700,
      footerText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
    };
  }, [isDark, variant]);

  const codeString = useMemo(() => {
    const isCard = variant === 'Card style';
    if (isCard) {
      return `// Declaration with Digital Sign – Card Style Layout
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gCheckbox,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const DeclarationWithDigitalSignCardPattern = ({
  isDark = ${isDark},
  initialSigned = ${isSigned},
}: {
  isDark?: boolean;
  initialSigned?: boolean;
}) => {
  const [agreed, setAgreed] = useState(initialSigned);
  const [name, setName] = useState(initialSigned ? 'Ramesh Kumar' : '');
  const [isSigned, setIsSigned] = useState(initialSigned);

  const handleNameChange = (val: string) => {
    setName(val);
    setIsSigned(val.trim().split(/\\s+/).length >= 2 && val.trim().length > 3);
  };

  return (
    <View style={[styles.screen, { backgroundColor: isDark ? UX4GColors.primary900 : UX4GColors.primary100 }]}>
      {/* Header */}
      <Ux4gAppHeader
        variant="light"
        showBackButton={false}
      />

      <ScrollView contentContainerStyle={styles.cardScrollContainer}>
        <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.gray800 : '#FFFFFF' }]}>
          <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
            Declaration
          </Text>
          <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 }]}>
            {isSigned
              ? 'Declaration agreed and signed. Your application is ready to submit.'
              : 'You have agreed. Now sign by typing your full name as per Aadhaar.'}
          </Text>

          {/* Declaration Text Box */}
          <View style={[styles.declarationBox, { backgroundColor: isDark ? UX4GColors.gray900 : UX4GColors.gray100, borderColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200 }]}>
            <ScrollView>
              <Text style={[styles.declarationText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral700 }]}>
                4. I authorise the Revenue Department to verify these particulars from any source.{\\n\\n}
                5. I am aware that furnishing false information is a punishable offence.{\\n\\n}
                6. If any information is later found false, the certificate is liable to be cancelled and legal action may be taken.{\\n\\n}
                I make this declaration believing the contents to be true.
              </Text>
            </ScrollView>
          </View>

          {/* Agreement Checkbox */}
          <View style={styles.checkboxRow}>
            <Ux4gCheckbox
              value={agreed}
              onChanged={(val) => setAgreed(val ?? false)}
            />
            <Text style={[styles.checkboxLabel, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
              I have read and agree to the above declaration.
              <Text style={{ color: isDark ? UX4GColors.red400 : UX4GColors.red700 }}> *</Text>
            </Text>
          </View>

          {/* Digital Signature Input */}
          <Text style={[styles.inputLabel, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral700 }]}>
            Enter your full name to attest this declaration
          </Text>
          <View style={[styles.inputContainer, { backgroundColor: isDark ? UX4GColors.gray800 : '#FFFFFF', borderColor: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300 }]}>
            <TextInput
              value={name}
              onChangeText={handleNameChange}
              placeholder="Enter your full name"
              placeholderTextColor={isDark ? UX4GColors.neutral500 : UX4GColors.neutral400}
              style={[styles.textInput, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}
            />
            {isSigned && (
              <Text style={[styles.checkIcon, { color: isDark ? UX4GColors.green300 : UX4GColors.green700 }]}>
                ✓
              </Text>
            )}
          </View>

          {/* Helper note */}
          <View style={styles.helperRow}>
            <Text style={{ color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500, fontSize: 16 }}>ℹ</Text>
            <Text style={[styles.helperText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
              Your name will be matched against your aadhaar records.
            </Text>
          </View>

          {/* Warning Notice */}
          <View style={[styles.warningBox, { backgroundColor: isDark ? UX4GColors.orange900 : UX4GColors.orange50, borderColor: isDark ? UX4GColors.orange800 : UX4GColors.orange100 }]}>
            <Text style={[styles.warningIcon, { color: isDark ? UX4GColors.orange400 : UX4GColors.orange600 }]}>⚠️</Text>
            <Text style={[styles.warningText, { color: isDark ? UX4GColors.orange300 : UX4GColors.orange800 }]}>
              Furnishing false information is a punishable offence under Section 193 IPC — up to 7 years imprisonment.
            </Text>
          </View>

          {/* Submit Button */}
          <Ux4gButton
            text="Submit application"
            enabled={agreed && isSigned}
            onPress={() => {}}
            height={48}
            size="large"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  cardScrollContainer: { padding: 16 },
  card: { padding: 20, borderRadius: 16, elevation: 2 },
  title: { fontSize: 24, fontWeight: '800', letterSpacing: -0.5, marginBottom: 12 },
  subtitle: { fontSize: 14, lineHeight: 21, marginBottom: 24 },
  declarationBox: { height: 150, padding: 16, borderRadius: 12, borderWidth: 1, marginBottom: 24 },
  declarationText: { fontSize: 14, lineHeight: 22, fontWeight: '500' },
  checkboxRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 24, gap: 12 },
  checkboxLabel: { flex: 1, fontSize: 16, fontWeight: '600', lineHeight: 22 },
  inputLabel: { fontSize: 14, fontWeight: '600', marginBottom: 8 },
  inputContainer: { height: 48, borderRadius: 8, borderWidth: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 },
  textInput: { flex: 1, fontSize: 15 },
  checkIcon: { fontSize: 20, fontWeight: 'bold' },
  helperRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 8, marginBottom: 24 },
  helperText: { fontSize: 13, flex: 1 },
  warningBox: { padding: 16, borderRadius: 8, borderWidth: 1, flexDirection: 'row', gap: 12, marginBottom: 32 },
  warningIcon: { fontSize: 18 },
  warningText: { flex: 1, fontSize: 14, lineHeight: 21, fontWeight: '500' },
});`;
    }

    return `// Declaration with Digital Sign Pattern
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gCheckbox,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const DeclarationWithDigitalSignPattern = ({
  isDark = ${isDark},
  initialSigned = ${isSigned},
}: {
  isDark?: boolean;
  initialSigned?: boolean;
}) => {
  const [agreed, setAgreed] = useState(initialSigned);
  const [name, setName] = useState(initialSigned ? 'Ramesh Kumar' : '');
  const [isSigned, setIsSigned] = useState(initialSigned);

  const handleNameChange = (val: string) => {
    setName(val);
    setIsSigned(val.trim().split(/\\s+/).length >= 2 && val.trim().length > 3);
  };

  return (
    <View style={[styles.screen, { backgroundColor: isDark ? UX4GColors.gray900 : UX4GColors.gray100 }]}>
      {/* Header */}
      <Ux4gAppHeader
        variant="light"
        showBackButton={false}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
          Declaration
        </Text>
        <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 }]}>
          {isSigned
            ? 'Declaration agreed and signed. Your application is ready to submit.'
            : 'You have agreed. Now sign by typing your full name as per Aadhaar.'}
        </Text>

        {/* Declaration Text Box */}
        <View style={[styles.declarationBox, { backgroundColor: isDark ? UX4GColors.gray900 : UX4GColors.gray100, borderColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200 }]}>
          <ScrollView>
            <Text style={[styles.declarationText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral700 }]}>
              4. I authorise the Revenue Department to verify these particulars from any source.{\\n\\n}
              5. I am aware that furnishing false information is a punishable offence.{\\n\\n}
              6. If any information is later found false, the certificate is liable to be cancelled and legal action may be taken.{\\n\\n}
              I make this declaration believing the contents to be true.
            </Text>
          </ScrollView>
        </View>

        {/* Agreement Checkbox */}
        <View style={styles.checkboxRow}>
          <Ux4gCheckbox
            value={agreed}
            onChanged={(val) => setAgreed(val ?? false)}
          />
          <Text style={[styles.checkboxLabel, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
            I have read and agree to the above declaration.
            <Text style={{ color: isDark ? UX4GColors.red400 : UX4GColors.red700 }}> *</Text>
          </Text>
        </View>

        {/* Digital Signature Input */}
        <Text style={[styles.inputLabel, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral700 }]}>
          Enter your full name to attest this declaration
        </Text>
        <View style={[styles.inputContainer, { backgroundColor: isDark ? UX4GColors.gray800 : '#FFFFFF', borderColor: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300 }]}>
          <TextInput
            value={name}
            onChangeText={handleNameChange}
            placeholder="Enter your full name"
            placeholderTextColor={isDark ? UX4GColors.neutral500 : UX4GColors.neutral400}
            style={[styles.textInput, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}
          />
          {isSigned && (
            <Text style={[styles.checkIcon, { color: isDark ? UX4GColors.green300 : UX4GColors.green700 }]}>
              ✓
            </Text>
          )}
        </View>

        {/* Helper note */}
        <View style={styles.helperRow}>
          <Text style={{ color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500, fontSize: 16 }}>ℹ</Text>
          <Text style={[styles.helperText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            Your name will be matched against your aadhaar records.
          </Text>
        </View>

        {/* Warning Notice */}
        <View style={[styles.warningBox, { backgroundColor: isDark ? UX4GColors.orange900 : UX4GColors.orange50, borderColor: isDark ? UX4GColors.orange800 : UX4GColors.orange100 }]}>
          <Text style={[styles.warningIcon, { color: isDark ? UX4GColors.orange400 : UX4GColors.orange600 }]}>⚠️</Text>
          <Text style={[styles.warningText, { color: isDark ? UX4GColors.orange300 : UX4GColors.orange800 }]}>
            Furnishing false information is a punishable offence under Section 193 IPC — up to 7 years imprisonment.
          </Text>
        </View>

        {/* Submit Button */}
        <Ux4gButton
          text="Submit application"
          enabled={agreed && isSigned}
          onPress={() => {}}
          height={48}
          size="large"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  scrollContainer: { padding: 20 },
  title: { fontSize: 24, fontWeight: '800', letterSpacing: -0.5, marginBottom: 12 },
  subtitle: { fontSize: 14, lineHeight: 21, marginBottom: 24 },
  declarationBox: { height: 150, padding: 16, borderRadius: 12, borderWidth: 1, marginBottom: 24 },
  declarationText: { fontSize: 14, lineHeight: 22, fontWeight: '500' },
  checkboxRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 24, gap: 12 },
  checkboxLabel: { flex: 1, fontSize: 16, fontWeight: '600', lineHeight: 22 },
  inputLabel: { fontSize: 14, fontWeight: '600', marginBottom: 8 },
  inputContainer: { height: 48, borderRadius: 8, borderWidth: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 },
  textInput: { flex: 1, fontSize: 15 },
  checkIcon: { fontSize: 20, fontWeight: 'bold' },
  helperRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 8, marginBottom: 24 },
  helperText: { fontSize: 13, flex: 1 },
  warningBox: { padding: 16, borderRadius: 8, borderWidth: 1, flexDirection: 'row', gap: 12, marginBottom: 32 },
  warningIcon: { fontSize: 18 },
  warningText: { flex: 1, fontSize: 14, lineHeight: 21, fontWeight: '500' },
});`;
  }, [isDark, variant, isSigned]);

  const renderInnerContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Title */}
      <h2
        style={{
          fontSize: 24,
          fontWeight: 800,
          color: colors.titleColor,
          margin: 0,
          letterSpacing: '-0.5px',
          lineHeight: 1.2,
        }}
      >
        Declaration
      </h2>

      {/* Subtitle */}
      <p
        style={{
          fontSize: 14,
          color: colors.subtleText,
          margin: '12px 0 24px 0',
          lineHeight: 1.5,
          fontWeight: 400,
        }}
      >
        {isSigned
          ? 'Declaration agreed and signed. Your application is ready to submit.'
          : 'You have agreed. Now sign by typing your full name as per Aadhaar.'}
      </p>

      {/* Declaration Text Box */}
      <div
        style={{
          height: 150,
          backgroundColor: colors.declarationBoxBg,
          borderRadius: 12,
          border: `1px solid ${colors.declarationBoxBorder}`,
          padding: 16,
          overflowY: 'auto',
          marginBottom: 24,
        }}
      >
        <div
          style={{
            fontSize: 14,
            color: colors.declarationText,
            lineHeight: 1.6,
            fontWeight: 500,
            whiteSpace: 'pre-line',
          }}
        >
          {'4. I authorise the Revenue Department to verify these particulars from any source.\n\n' +
            '5. I am aware that furnishing false information is a punishable offence.\n\n' +
            '6. If any information is later found false, the certificate is liable to be cancelled and legal action may be taken.\n\n' +
            'I make this declaration believing the contents to be true.'}
        </div>
      </div>

      {/* Agreement Checkbox Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 12,
          marginBottom: 24,
          cursor: 'pointer',
        }}
        onClick={() => setAgreed(!agreed)}
      >
        <div style={{ marginTop: 2 }}>
          <Ux4gCheckbox
            value={agreed}
            onChanged={(val) => setAgreed(val ?? false)}
          />
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: colors.titleColor,
            lineHeight: 1.4,
            userSelect: 'none',
          }}
        >
          I have read and agree to the above declaration.
          <span style={{ color: colors.requiredStar, fontWeight: 'bold' }}> *</span>
        </div>
      </div>

      {/* Digital Signature Input Label */}
      <label
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: colors.inputLabel,
          marginBottom: 8,
          display: 'block',
        }}
      >
        Enter your full name to attest this declaration
      </label>

      {/* Signature Input Container */}
      <div
        style={{
          height: 48,
          borderRadius: 8,
          backgroundColor: colors.inputBg,
          border: `1px solid ${colors.inputBorder}`,
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          boxSizing: 'border-box',
          position: 'relative',
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => handleNameChange(e.target.value)}
          placeholder="Enter your full name"
          style={{
            flex: 1,
            height: '100%',
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            fontSize: 15,
            color: colors.inputText,
            fontFamily: 'inherit',
          }}
        />
        {isSigned && (
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: 20,
              fontVariationSettings: "'FILL' 1",
              color: colors.checkCircleIcon,
              userSelect: 'none',
            }}
          >
            check_circle
          </span>
        )}
      </div>

      {/* Helper Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginTop: 8,
          marginBottom: 24,
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: 16,
            color: colors.inputHelperIcon,
            flexShrink: 0,
          }}
        >
          info
        </span>
        <span
          style={{
            fontSize: 13,
            color: colors.inputHelperText,
            lineHeight: 1.3,
          }}
        >
          Your name will be matched against your aadhaar records.
        </span>
      </div>

      {/* Warning Notice Banner */}
      <div
        style={{
          padding: 16,
          backgroundColor: colors.warningBg,
          borderRadius: 8,
          border: `1px solid ${colors.warningBorder}`,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 12,
          marginBottom: 32,
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: 18,
            fontVariationSettings: "'FILL' 1",
            color: colors.warningIcon,
            marginTop: 2,
            flexShrink: 0,
          }}
        >
          error
        </span>
        <span
          style={{
            fontSize: 14,
            color: colors.warningText,
            lineHeight: 1.5,
            fontWeight: 500,
          }}
        >
          Furnishing false information is a punishable offence under Section 193 IPC — up to 7 years imprisonment.
        </span>
      </div>

      {/* Submit Button */}
      <Ux4gButton
        text="Submit application"
        enabled={agreed && isSigned}
        onPress={() => {}}
        height={48}
        size="large"
        width="100%"
      />
    </div>
  );

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
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        {/* Consent Header */}
        <div style={{ backgroundColor: isDark ? UX4GColors.gray900 : '#FFFFFF' }}>
          <div
            style={{
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <img
                src="/national_emblem_logo.svg"
                alt="National Emblem"
                style={{
                  height: 32,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />
              <div
                style={{
                  width: 1,
                  height: 28,
                  backgroundColor: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300,
                }}
              />
              <img
                src="/Union.svg"
                alt="Union Logo"
                style={{
                  height: 32,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />
            </div>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                border: `1px solid ${isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 20,
                  color: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
                }}
              >
                menu
              </span>
            </div>
          </div>
          <div style={{ height: 1, backgroundColor: colors.border }} />
        </div>

        {/* Scrollable Container */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, padding: variant === 'Card style' ? 16 : 20 }}>
            {variant === 'Card style' ? (
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: 20,
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                }}
              >
                {renderInnerContent()}
              </div>
            ) : (
              renderInnerContent()
            )}
          </div>

          {/* Brand Footer */}
          <div style={{ padding: '8px 0 20px 0', textAlign: 'center', backgroundColor: colors.screenBg, flexShrink: 0 }}>
            <div style={{ fontSize: 11, fontWeight: 500, color: colors.footerText }}>
              Powered by -
            </div>
            <img
              src="/Digital_India_logo.svg"
              alt="Digital India"
              style={{
                height: 22,
                marginTop: 6,
                filter: isDark ? 'brightness(0) invert(1)' : 'none',
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Declaration with Digital Sign</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A formal declaration pattern where the user must agree and then sign by typing their name. The signature is validated before the application can be submitted. Use the [Variant] knob to toggle between Default and Card style layouts.
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
                  {/* Knob Controls Toolbar */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 16,
                      marginBottom: 24,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Variant Knob */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }}>
                        Variant:
                      </span>
                      <div
                        style={{
                          display: 'flex',
                          gap: 4,
                          backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
                          padding: 4,
                          borderRadius: 10,
                          border: `1px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.neutral200}`,
                        }}
                      >
                        {(['Default', 'Card style'] as VariantType[]).map((v) => (
                          <button
                            key={v}
                            type="button"
                            onClick={() => setVariant(v)}
                            style={{
                              padding: '6px 14px',
                              borderRadius: 6,
                              border: 'none',
                              fontSize: 12,
                              fontWeight: 600,
                              cursor: 'pointer',
                              backgroundColor: variant === v ? UX4GColors.primary : 'transparent',
                              color: variant === v ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                              transition: 'all 0.2s ease',
                            }}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* State Knob */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }}>
                        State:
                      </span>
                      <div
                        style={{
                          display: 'flex',
                          gap: 4,
                          backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
                          padding: 4,
                          borderRadius: 10,
                          border: `1px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.neutral200}`,
                        }}
                      >
                        {(['Unsigned', 'Signed'] as StateType[]).map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setStateKnob(s)}
                            style={{
                              padding: '6px 14px',
                              borderRadius: 6,
                              border: 'none',
                              fontSize: 12,
                              fontWeight: 600,
                              cursor: 'pointer',
                              backgroundColor: stateKnob === s ? UX4GColors.primary : 'transparent',
                              color: stateKnob === s ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                              transition: 'all 0.2s ease',
                            }}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Render Mobile Phone Mockup */}
                  {renderLiveMockup()}
                </div>
              </Ux4gThemeProvider>
            )}

            {/* 2. Code Tab */}
            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 16,
                    marginBottom: 16,
                    padding: '12px 16px',
                    backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
                    borderRadius: 8,
                    alignItems: 'center',
                    border: `1px solid ${isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}`,
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 600, color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }}>
                    Active Variant: <span style={{ color: UX4GColors.primary }}>{variant}</span>
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }}>
                    Active State: <span style={{ color: UX4GColors.primary }}>{stateKnob}</span>
                  </span>
                </div>
                <CodeBlock code={codeString} language="tsx" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeclarationWithDigitalSignDoc;
