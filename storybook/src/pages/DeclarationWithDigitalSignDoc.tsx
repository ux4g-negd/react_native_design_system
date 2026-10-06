import React, { useState, useMemo, useEffect } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
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
  const [agreed, setAgreed] = useState(true);
  const [isSigned, setIsSigned] = useState(false);

  // Sync state when knob changes
  useEffect(() => {
    if (stateKnob === 'Signed') {
      setName('Ramesh Kumar');
      setAgreed(true);
      setIsSigned(true);
    } else {
      setName('');
      setAgreed(true);
      setIsSigned(false);
    }
  }, [stateKnob]);

  const handleNameChange = (val: string) => {
    setName(val);
    const valid = val.trim().length >= 3;
    setIsSigned(valid);
  };

  const colors = useMemo(() => {
    return {
      screenBg: variant === 'Card style'
        ? (isDark ? UX4GColors.primary900 : '#ECE8FF')
        : (isDark ? UX4GColors.neutral900 : '#FFFFFF'),
      cardBg: isDark ? UX4GColors.neutral800 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral700 : '#F0F0F2',
      titleColor: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      declarationBoxBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      declarationBoxBorder: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      declarationText: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700,
      inputBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      inputBorder: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      inputSuccessBorder: isDark ? '#52C41A' : '#128937',
      inputText: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900,
      inputPlaceholder: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
      inputLabel: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900,
      inputHelperText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      inputSuccessText: isDark ? '#80DA88' : '#128937',
      successIcon: isDark ? '#52C41A' : '#128937',
      primary: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      primaryLight: isDark ? UX4GColors.primary400 : UX4GColors.primary300,
      warningBg: isDark ? '#3D2000' : '#FFF7E6',
      warningBorder: isDark ? '#FA8C16' : '#FFC973',
      warningText: isDark ? '#FFC973' : '#AD4E00',
      warningIcon: isDark ? '#FFAB27' : '#FA8C16',
      disabledBtnBg: isDark ? UX4GColors.primary800 : '#B4A5EA',
      footerText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
    };
  }, [isDark, variant]);

  const codeString = useMemo(() => {
    const isCard = variant === 'Card style';
    return `import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Ux4gButton,
  Ux4gCheckbox,
  UX4GColors,
} from 'ux4g-react-native-components';

export const DeclarationWithDigitalSignPattern = ({
  isDark = ${isDark},
  variant = '${variant}',
  initialSigned = ${isSigned},
}: {
  isDark?: boolean;
  variant?: 'Default' | 'Card style';
  initialSigned?: boolean;
}) => {
  const [agreed, setAgreed] = useState(true);
  const [name, setName] = useState(initialSigned ? 'Ramesh Kumar' : '');
  const [isSigned, setIsSigned] = useState(initialSigned);

  const isCard = variant === 'Card style';

  const handleNameChange = (val: string) => {
    setName(val);
    setIsSigned(val.trim().length >= 3);
  };

  return (
    <View style={[styles.screen, { backgroundColor: isDark ? UX4GColors.neutral900 : (isCard ? '#ECE8FF' : '#FFFFFF') }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF', borderBottomColor: isDark ? UX4GColors.neutral800 : '#F0F0F2' }]}>
        <View style={styles.headerLeft}>
          <Image source={{ uri: '/national_emblem_logo.svg' }} style={styles.emblemLogo} resizeMode="contain" />
          <View style={[styles.headerDivider, { backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300 }]} />
          <Image source={{ uri: '/Union.svg' }} style={styles.unionLogo} resizeMode="contain" />
        </View>
        <TouchableOpacity style={[styles.menuBtn, { borderColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200 }]}>
          <Text style={[styles.menuIcon, { color: isDark ? UX4GColors.primary300 : UX4GColors.primary }]}>☰</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={isCard ? [styles.cardContainer, { backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF' }] : styles.flatContainer}>
          {/* Title */}
          <Text style={[styles.mainTitle, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
            Declaration
          </Text>
          <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            {isSigned
              ? 'Declaration agreed and signed. Your application is ready to submit.'
              : 'You have agreed. Now sign by typing your full name as per Aadhaar.'}
          </Text>

          {/* Declaration Box */}
          <View
            style={[
              styles.declarationBox,
              {
                backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
                borderColor: isDark ? UX4GColors.neutral700 : '#E5E7EB',
              },
            ]}
          >
            <ScrollView>
              <Text style={[styles.declarationText, { color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }]}>
                4. I authorise the Revenue Department to verify these particulars from any source.{\n\n}
                5. I am aware that furnishing false information is a punishable offence.{\n\n}
                6. If any information is later found false, the certificate is liable to be cancelled and legal action may be taken.{\\n\\n}
                I make this declaration believing the contents to be true.
              </Text>
            </ScrollView>
          </View>

          {/* Agreement Checkbox Row */}
          <View style={styles.checkboxRow}>
            <Ux4gCheckbox
              value={agreed}
              onChanged={(val) => setAgreed(val ?? false)}
              size="medium"
            />
            <Text style={[styles.checkboxLabel, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
              I have read and agree to the above declaration.
              <Text style={{ color: '#D32F2F', fontWeight: 'bold' }}> *</Text>
            </Text>
          </View>

          {/* Digital Signature Input */}
          <Text style={[styles.inputLabel, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
            Enter your full name to attest this declaration
          </Text>
          <View
            style={[
              styles.inputContainer,
              {
                backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
                borderColor: isSigned
                  ? (isDark ? '#52C41A' : '#128937')
                  : (isDark ? UX4GColors.neutral700 : '#E5E7EB'),
              },
            ]}
          >
            <TextInput
              value={name}
              onChangeText={handleNameChange}
              placeholder="Enter your full name"
              placeholderTextColor={isDark ? UX4GColors.neutral500 : UX4GColors.neutral400}
              style={[styles.textInput, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}
            />
            {isSigned && (
              <Text style={[styles.checkCircle, { color: isDark ? '#52C41A' : '#128937' }]}>
                ✓
              </Text>
            )}
          </View>

          {/* Helper note */}
          <View style={styles.helperRow}>
            <Text style={{ color: isSigned ? (isDark ? '#52C41A' : '#128937') : (isDark ? UX4GColors.neutral400 : UX4GColors.neutral500), fontSize: 14 }}>
              {isSigned ? '✓' : 'ℹ'}
            </Text>
            <Text
              style={[
                styles.helperText,
                {
                  color: isSigned
                    ? (isDark ? '#80DA88' : '#128937')
                    : (isDark ? UX4GColors.neutral400 : UX4GColors.neutral500),
                },
              ]}
            >
              Your name will be matched against your aadhaar records.
            </Text>
          </View>

          {/* Warning Banner */}
          <View
            style={[
              styles.warningBanner,
              {
                backgroundColor: isDark ? '#3D2000' : '#FFF7E6',
                borderColor: isDark ? '#FA8C16' : '#FFC973',
              },
            ]}
          >
            <Text style={{ color: isDark ? '#FFAB27' : '#FA8C16', fontSize: 16, marginRight: 8, marginTop: 1 }}>⚠️</Text>
            <Text style={[styles.warningText, { color: isDark ? '#FFC973' : '#AD4E00' }]}>
              Furnishing false information is a punishable offence under Section 193 IPC — up to 7 years imprisonment.
            </Text>
          </View>

          {/* Submit Button */}
          <Ux4gButton
            text="Submit application"
            variant="filled"
            enabled={agreed && isSigned}
            size="large"
            style={{
              width: '100%',
              height: 48,
              backgroundColor: agreed && isSigned
                ? (isDark ? UX4GColors.primary300 : UX4GColors.primary)
                : (isDark ? UX4GColors.primary800 : '#B4A5EA'),
            }}
            contentColor={agreed && isSigned && isDark ? UX4GColors.neutral900 : '#FFFFFF'}
          />
        </View>

        {/* Brand Footer */}
        <View style={styles.footer}>
          <Text style={[styles.poweredByText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            Powered by -
          </Text>
          <Image source={{ uri: '/Digital_India_logo.svg' }} style={styles.digitalIndiaLogo} resizeMode="contain" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  emblemLogo: { height: 32, width: 24 },
  headerDivider: { width: 1, height: 26 },
  unionLogo: { height: 32, width: 44 },
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: { fontSize: 18 },
  scrollContainer: { paddingVertical: 16 },
  flatContainer: { paddingHorizontal: 16 },
  cardContainer: {
    marginHorizontal: 16,
    padding: 18,
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 4 },
  },
  mainTitle: { fontSize: 18, fontWeight: '700', lineHeight: 24, marginBottom: 8 },
  subtitle: { fontSize: 13, lineHeight: 18, marginBottom: 16 },
  declarationBox: {
    height: 145,
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  declarationText: { fontSize: 12.5, lineHeight: 18 },
  checkboxRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 16 },
  checkboxLabel: { flex: 1, fontSize: 13.5, fontWeight: '600', lineHeight: 18, marginTop: 1 },
  inputLabel: { fontSize: 13, fontWeight: '600', marginBottom: 6 },
  inputContainer: {
    height: 46,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  textInput: { flex: 1, fontSize: 14 },
  checkCircle: { fontSize: 16, fontWeight: 'bold' },
  helperRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 6, marginBottom: 16 },
  helperText: { fontSize: 12, flex: 1, lineHeight: 16 },
  warningBanner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 20,
  },
  warningText: { fontSize: 12, lineHeight: 16, flex: 1, fontWeight: '500' },
  footer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, marginVertical: 24 },
  poweredByText: { fontSize: 11, fontWeight: '500' },
  digitalIndiaLogo: { height: 22, width: 80 },
});
`;
  }, [isDark, variant, isSigned]);

  const renderInnerContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Title */}
      <h2
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: colors.titleColor,
          margin: '0 0 8px 0',
          letterSpacing: '-0.01em',
          lineHeight: 1.3,
        }}
      >
        Declaration
      </h2>

      {/* Subtitle */}
      <p
        style={{
          fontSize: 13,
          color: colors.subtleText,
          margin: '0 0 16px 0',
          lineHeight: 1.45,
          fontWeight: 400,
        }}
      >
        {isSigned
          ? 'Declaration agreed and signed. Your application is ready to submit.'
          : 'You have agreed. Now sign by typing your full name as per Aadhaar.'}
      </p>

      {/* Declaration Scroll Box */}
      <div
        style={{
          height: 145,
          backgroundColor: colors.declarationBoxBg,
          borderRadius: 8,
          border: `1px solid ${colors.declarationBoxBorder}`,
          padding: '12px 14px',
          overflowY: 'auto',
          marginBottom: 16,
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            fontSize: 12.5,
            color: colors.declarationText,
            lineHeight: 1.55,
            fontWeight: 400,
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
          gap: 10,
          marginBottom: 16,
          cursor: 'pointer',
          userSelect: 'none',
        }}
        onClick={() => setAgreed(!agreed)}
      >
        <Ux4gCheckbox
          value={agreed}
          onChanged={(val) => setAgreed(val ?? false)}
          size="medium"
        />
        <div
          style={{
            fontSize: 13.5,
            fontWeight: 600,
            color: colors.titleColor,
            lineHeight: 1.35,
            marginTop: 1,
          }}
        >
          I have read and agree to the above declaration.
          <span style={{ color: '#D32F2F', fontWeight: 'bold' }}> *</span>
        </div>
      </div>

      {/* Digital Signature Input Label */}
      <label
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: colors.inputLabel,
          marginBottom: 6,
          display: 'block',
        }}
      >
        Enter your full name to attest this declaration
      </label>

      {/* Signature Input Container */}
      <div
        style={{
          height: 46,
          borderRadius: 8,
          backgroundColor: colors.inputBg,
          border: isSigned
            ? `1.5px solid ${colors.inputSuccessBorder}`
            : `1px solid ${colors.inputBorder}`,
          display: 'flex',
          alignItems: 'center',
          padding: '0 14px',
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
            fontSize: 14,
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
              color: colors.successIcon,
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
          gap: 6,
          marginTop: 6,
          marginBottom: 16,
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: 16,
            fontVariationSettings: isSigned ? "'FILL' 1" : "'FILL' 0",
            color: isSigned ? colors.successIcon : colors.inputHelperText,
            flexShrink: 0,
          }}
        >
          {isSigned ? 'check_circle' : 'info'}
        </span>
        <span
          style={{
            fontSize: 12,
            color: isSigned ? colors.inputSuccessText : colors.inputHelperText,
            lineHeight: 1.35,
          }}
        >
          Your name will be matched against your aadhaar records.
        </span>
      </div>

      {/* Warning Notice Banner */}
      <div
        style={{
          backgroundColor: colors.warningBg,
          border: `1px solid ${colors.warningBorder}`,
          borderRadius: 8,
          padding: '10px 12px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: 8,
          marginBottom: 20,
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: 18,
            fontVariationSettings: "'FILL' 1",
            color: colors.warningIcon,
            flexShrink: 0,
            marginTop: 1,
          }}
        >
          error
        </span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: colors.warningText,
            lineHeight: 1.45,
          }}
        >
          Furnishing false information is a punishable offence under Section 193 IPC — up to 7 years imprisonment.
        </span>
      </div>

      {/* Submit Button */}
      <button
        type="button"
        disabled={!agreed || !isSigned}
        onClick={() => alert('Application submitted successfully')}
        style={{
          width: '100%',
          height: 48,
          backgroundColor: agreed && isSigned
            ? (isDark ? colors.primaryLight : UX4GColors.primary)
            : colors.disabledBtnBg,
          color: agreed && isSigned && isDark ? UX4GColors.neutral900 : '#FFFFFF',
          border: 'none',
          borderRadius: 8,
          fontSize: 14,
          fontWeight: 600,
          cursor: agreed && isSigned ? 'pointer' : 'not-allowed',
          transition: 'all 0.2s ease',
        }}
      >
        Submit application
      </button>
    </div>
  );

  const renderLiveMockup = () => {
    return (
      <div
        style={{
          width: 360,
          height: 760,
          borderRadius: 24,
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.05)',
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
        {/* Header */}
        <div style={{ backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' }}>
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
                  backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
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
                border: `1px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.neutral200}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 20,
                  color: isDark ? UX4GColors.primary300 : UX4GColors.primary,
                }}
              >
                menu
              </span>
            </div>
          </div>
          <div style={{ height: 1, backgroundColor: isDark ? UX4GColors.neutral800 : '#F0F0F2' }} />
        </div>

        {/* Scrollable Container */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, padding: variant === 'Card style' ? '12px 14px' : '20px 16px 0 16px' }}>
            {variant === 'Card style' ? (
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: '18px 16px 20px 16px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                  border: `1px solid ${isDark ? UX4GColors.neutral700 : 'rgba(0,0,0,0.03)'}`,
                }}
              >
                {renderInnerContent()}
              </div>
            ) : (
              renderInnerContent()
            )}
            <div style={{ height: 16 }} />
          </div>

          {/* Brand Footer */}
          <div
            style={{
              padding: '12px 0 20px 0',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: colors.footerText,
              }}
            >
              Powered by -
            </span>
            <img
              src="/Digital_India_logo.svg"
              alt="Digital India"
              style={{
                height: 22,
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
          Pattern for capturing a formal declaration along with a typed full-name digital attestation matching Aadhaar records. Toggle State between Unsigned and Signed.
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
                  <span style={{ fontSize: 13, fontWeight: 600, color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700, marginLeft: 16 }}>
                    State: <span style={{ color: UX4GColors.primary }}>{stateKnob}</span>
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
