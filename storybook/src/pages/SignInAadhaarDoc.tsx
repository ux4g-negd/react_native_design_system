import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { defaultUx4gTypography } from '../../../src/foundation/typography';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import {
  Ux4gAadhaarInputField,
  validateAadhaar,
} from '../../../src/components/aadhaar-input-field/AadhaarInputField';
import { Ux4gRadioButton } from '../../../src/components/radio-button/RadioButton';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface SignInAadhaarDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';
type AuthMethod = 'otp' | 'face';

export const SignInAadhaarDoc: React.FC<SignInAadhaarDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [aadhaar, setAadhaar] = useState<string>('');
  const [method, setMethod] = useState<AuthMethod>('otp');

  // Exact color tokens from UX4G Flutter Design System
  const colors = useMemo(() => {
    return {
      title: isDark ? UX4GColors.neutral50 : UX4GColors.gray900, // #FAFAFA / #121212
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500, // #A1A1A1 / #737373
      mutedText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400, // #737373 / #A1A1A1
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200, // #262626 / #E5E5E5
      cardBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0, // #121212 / #FFFFFF
      cardScreenBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100, // #301C7D / #DCD4FF
      defaultScreenBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral50, // #121212 / #FAFAFA
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0, // #121212 / #FFFFFF
      primary: UX4GColors.primary, // #4A2BC2
      primaryLight: UX4GColors.primary300, // #A391FF
      buttonBg: isDark ? UX4GColors.primary300 : UX4GColors.primary, // #A391FF / #4A2BC2
      buttonText: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0, // #171717 / #FFFFFF
      backIcon: isDark ? UX4GColors.primary300 : UX4GColors.primary, // #A391FF / #4A2BC2
    };
  }, [isDark]);

  // Real-time Verhoeff validation
  const validation = useMemo(() => {
    const raw = aadhaar.replace(/\s+/g, '');
    if (raw.length < 12) {
      return { status: 'defaultStatus' as const, caption: undefined };
    }
    const isValid = validateAadhaar(aadhaar);
    return isValid
      ? {
          status: 'success' as const,
          caption: 'Aadhaar number looks valid',
        }
      : {
          status: 'error' as const,
          caption: 'Invalid Aadhaar number. Please check and re-enter.',
        };
  }, [aadhaar]);

  const handleContinue = () => {
    const raw = aadhaar.replace(/\s+/g, '');
    if (raw.length < 12) {
      alert('Please enter a 12-digit Aadhaar number.');
      return;
    }
    if (validation.status === 'error') {
      alert('Invalid Aadhaar number according to Verhoeff algorithm.');
      return;
    }
    alert(`Proceeding with ${method === 'otp' ? 'Aadhaar OTP' : 'Face Authentication'}`);
  };

  // Clean React Native TSX code snippet matching Flutter signInAadhaarComponent
  const codeString = useMemo(() => {
    if (variant === 'card') {
      return `import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gAadhaarInputField,
  Ux4gRadioButton,
  Ux4gButton,
  Ux4gDivider,
  validateAadhaar,
  UX4GColors,
  defaultUx4gTypography,
} from 'ux4g-react-native-design-system';

export const SignInAadhaarCardPattern = () => {
  const [aadhaar, setAadhaar] = useState('');
  const [method, setMethod] = useState<'otp' | 'face'>('otp');

  // Real-time Verhoeff validation
  const validation = useMemo(() => {
    const digits = aadhaar.replace(/\\s+/g, '');
    if (digits.length < 12) {
      return { status: 'defaultStatus' as const, caption: undefined };
    }
    const isValid = validateAadhaar(aadhaar);
    return isValid
      ? {
          status: 'success' as const,
          caption: 'Aadhaar number looks valid',
        }
      : {
          status: 'error' as const,
          caption: 'Invalid Aadhaar number. Please check and re-enter.',
        };
  }, [aadhaar]);

  const handleContinue = () => {
    console.log('Continue with method:', method, 'Aadhaar:', aadhaar);
  };

  return (
    <View style={styles.screen}>
      {/* 1. Brand Header with Bottom Elevation */}
      <Ux4gAppHeader
        title=""
        variant="light"
        elevation={2}
        useSafeArea={false}
        horizontalPadding={16}
        leadingSpacing={8}
        backgroundColor={UX4GColors.neutral0}
        borderColor={UX4GColors.neutral200}
        leadingWidgets={[
          <Image
            key="emblem"
            source={{ uri: '/national_emblem_logo.svg' }}
            style={styles.emblemLogo}
            resizeMode="contain"
          />,
          <View key="divider" style={styles.headerDivider} />,
          <Image
            key="union"
            source={{ uri: '/Union.svg' }}
            style={styles.unionLogo}
            resizeMode="contain"
          />,
        ]}
      />
      <Ux4gDivider color={UX4GColors.neutral200} />

      {/* 2. Soft-Purple Background & Floating Card */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          {/* Back Button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => console.log('Go back')}
          >
            <Text style={styles.backIcon}>←</Text>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          <View style={{ height: 16 }} />

          {/* Subtitle & Title */}
          <Text style={styles.subtitle}>
            Enter your 12-digit Aadhaar number
          </Text>
          <Text style={styles.title}>Sign in with Aadhaar</Text>

          <View style={{ height: 20 }} />

          {/* 12-Digit Aadhaar Input Field */}
          <Ux4gAadhaarInputField
            value={aadhaar}
            onValueChange={setAadhaar}
            label="Aadhaar Number"
            placeholder="XXXX XXXX XXXX"
            status={validation.status}
            caption={validation.caption}
          />

          <View style={{ height: 16 }} />

          {/* Choose Authentication Method */}
          <Text style={styles.sectionLabel}>
            Choose Authentication Method
          </Text>

          <View style={{ height: 10 }} />

          {/* Radio Buttons for Auth Method */}
          <View style={styles.radioRow}>
            <View style={styles.radioCol}>
              <Ux4gRadioButton
                value="otp"
                groupValue={method}
                onChanged={() => setMethod('otp')}
                label="Send OTP"
                trailingIcon={<Text style={styles.methodIcon}>📞</Text>}
              />
            </View>
            <View style={styles.radioCol}>
              <Ux4gRadioButton
                value="face"
                groupValue={method}
                onChanged={() => setMethod('face')}
                label="Face Auth"
                trailingIcon={<Text style={styles.methodIcon}>🔍</Text>}
              />
            </View>
          </View>

          <View style={{ height: 20 }} />

          {/* Primary Action Button */}
          <Ux4gButton
            text="Continue"
            variant="primary"
            size="large"
            width="100%"
            onPress={handleContinue}
            style={styles.continueButton}
          />
        </View>

        {/* Security Note Outside Card */}
        <View style={styles.secureRow}>
          <Text style={styles.lockIcon}>🔒</Text>
          <Text style={styles.secureText}>
            Your Aadhaar details are encrypted and secure
          </Text>
        </View>

        {/* 3. Powered by Digital India Footer */}
        <View style={styles.footer}>
          <Text style={styles.poweredByText}>Powered by -</Text>
          <Image
            source={{ uri: '/Digital_India_logo.svg' }}
            style={styles.digitalIndiaLogo}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: UX4GColors.primary100, // #DCD4FF
  },
  emblemLogo: {
    width: 32,
    height: 32,
  },
  headerDivider: {
    width: 1,
    height: 24,
    backgroundColor: UX4GColors.neutral300,
    marginHorizontal: 4,
  },
  unionLogo: {
    width: 32,
    height: 32,
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 24,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: UX4GColors.neutral0,
    borderRadius: 16,
    padding: 20,
    paddingBottom: 24,
    shadowColor: UX4GColors.neutral1000black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 3,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  backIcon: {
    fontSize: 16,
    color: UX4GColors.primary,
  },
  backText: {
    fontSize: defaultUx4gTypography.lL_default.fontSize,
    fontWeight: '600',
    lineHeight: defaultUx4gTypography.lL_default.lineHeight,
    color: UX4GColors.primary,
  },
  subtitle: {
    fontSize: defaultUx4gTypography.bM_default.fontSize,
    fontWeight: defaultUx4gTypography.bM_default.fontWeight,
    lineHeight: defaultUx4gTypography.bM_default.lineHeight,
    color: UX4GColors.neutral500,
  },
  title: {
    fontSize: defaultUx4gTypography.hM_strong.fontSize,
    fontWeight: defaultUx4gTypography.hM_strong.fontWeight,
    lineHeight: defaultUx4gTypography.hM_strong.lineHeight,
    letterSpacing: -0.3,
    color: UX4GColors.gray900,
    marginTop: 4,
  },
  sectionLabel: {
    fontSize: defaultUx4gTypography.bM_default.fontSize,
    fontWeight: defaultUx4gTypography.bM_default.fontWeight,
    lineHeight: defaultUx4gTypography.bM_default.lineHeight,
    color: UX4GColors.neutral500,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  radioCol: {
    flex: 1,
  },
  methodIcon: {
    fontSize: 16,
    marginLeft: 4,
  },
  continueButton: {
    width: '100%',
    backgroundColor: UX4GColors.primary,
    height: 48,
    borderRadius: 8,
  },
  secureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 14,
  },
  lockIcon: {
    fontSize: 14,
  },
  secureText: {
    fontSize: defaultUx4gTypography.lM_default.fontSize,
    fontWeight: defaultUx4gTypography.lM_default.fontWeight,
    lineHeight: defaultUx4gTypography.lM_default.lineHeight,
    color: UX4GColors.neutral500,
  },
  footer: {
    marginTop: 24,
    alignItems: 'center',
    gap: 6,
  },
  poweredByText: {
    fontSize: defaultUx4gTypography.lS_default.fontSize,
    color: UX4GColors.neutral500,
  },
  digitalIndiaLogo: {
    width: 70,
    height: 26,
  },
});`;
    }

    return `import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gAadhaarInputField,
  Ux4gRadioButton,
  Ux4gButton,
  Ux4gDivider,
  validateAadhaar,
  UX4GColors,
  defaultUx4gTypography,
} from 'ux4g-react-native-design-system';

export const SignInAadhaarDefaultPattern = () => {
  const [aadhaar, setAadhaar] = useState('');
  const [method, setMethod] = useState<'otp' | 'face'>('otp');

  // Real-time Verhoeff validation
  const validation = useMemo(() => {
    const digits = aadhaar.replace(/\\s+/g, '');
    if (digits.length < 12) {
      return { status: 'defaultStatus' as const, caption: undefined };
    }
    const isValid = validateAadhaar(aadhaar);
    return isValid
      ? {
          status: 'success' as const,
          caption: 'Aadhaar number looks valid',
        }
      : {
          status: 'error' as const,
          caption: 'Invalid Aadhaar number. Please check and re-enter.',
        };
  }, [aadhaar]);

  const handleContinue = () => {
    console.log('Continue with method:', method, 'Aadhaar:', aadhaar);
  };

  return (
    <View style={styles.screen}>
      {/* 1. Brand Header with Bottom Elevation */}
      <Ux4gAppHeader
        title=""
        variant="light"
        elevation={2}
        useSafeArea={false}
        horizontalPadding={16}
        leadingSpacing={8}
        backgroundColor={UX4GColors.neutral0}
        borderColor={UX4GColors.neutral200}
        leadingWidgets={[
          <Image
            key="emblem"
            source={{ uri: '/national_emblem_logo.svg' }}
            style={styles.emblemLogo}
            resizeMode="contain"
          />,
          <View key="divider" style={styles.headerDivider} />,
          <Image
            key="union"
            source={{ uri: '/Union.svg' }}
            style={styles.unionLogo}
            resizeMode="contain"
          />,
        ]}
      />
      <Ux4gDivider color={UX4GColors.neutral200} />

      {/* 2. Main Flat Layout */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          {/* Back Button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => console.log('Go back')}
          >
            <Text style={styles.backIcon}>←</Text>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          <View style={{ height: 32 }} />

          {/* Title & Subtitle */}
          <Text style={styles.title}>Sign in with Aadhaar</Text>
          <Text style={styles.subtitle}>
            Enter your 12-digit Aadhaar number
          </Text>

          <View style={{ height: 24 }} />

          {/* 12-Digit Aadhaar Input Field */}
          <Ux4gAadhaarInputField
            value={aadhaar}
            onValueChange={setAadhaar}
            label="Aadhaar Number"
            placeholder="XXXX XXXX 1234"
            status={validation.status}
            caption={validation.caption}
          />

          <View style={{ height: 20 }} />

          {/* Choose Authentication Method */}
          <Text style={styles.sectionLabel}>
            Choose Authentication Method
          </Text>

          <View style={{ height: 10 }} />

          {/* Radio Buttons for Auth Method */}
          <View style={styles.radioRow}>
            <View style={styles.radioCol}>
              <Ux4gRadioButton
                value="otp"
                groupValue={method}
                onChanged={() => setMethod('otp')}
                label="Send OTP"
                trailingIcon={<Text style={styles.methodIcon}>📞</Text>}
              />
            </View>
            <View style={styles.radioCol}>
              <Ux4gRadioButton
                value="face"
                groupValue={method}
                onChanged={() => setMethod('face')}
                label="Face Auth"
                trailingIcon={<Text style={styles.methodIcon}>🔍</Text>}
              />
            </View>
          </View>

          <View style={{ height: 24 }} />

          {/* Primary Action Button */}
          <Ux4gButton
            text="Continue"
            variant="primary"
            size="large"
            width="100%"
            onPress={handleContinue}
            style={styles.continueButton}
          />

          <View style={{ height: 12 }} />

          {/* Security Note */}
          <View style={styles.secureRow}>
            <Text style={styles.lockIcon}>🔒</Text>
            <Text style={styles.secureText}>
              Your Aadhaar details are encrypted and secure
            </Text>
          </View>
        </View>

        {/* 3. Powered by Digital India Footer */}
        <View style={styles.footer}>
          <Text style={styles.poweredByText}>Powered by -</Text>
          <Image
            source={{ uri: '/Digital_India_logo.svg' }}
            style={styles.digitalIndiaLogo}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: UX4GColors.neutral50, // #FAFAFA
  },
  emblemLogo: {
    width: 32,
    height: 32,
  },
  headerDivider: {
    width: 1,
    height: 24,
    backgroundColor: UX4GColors.neutral300,
    marginHorizontal: 4,
  },
  unionLogo: {
    width: 32,
    height: 32,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 12,
  },
  content: {
    width: '100%',
    maxWidth: 360,
    alignSelf: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  backIcon: {
    fontSize: 16,
    color: UX4GColors.primary,
  },
  backText: {
    fontSize: defaultUx4gTypography.lL_default.fontSize,
    fontWeight: '600',
    lineHeight: defaultUx4gTypography.lL_default.lineHeight,
    color: UX4GColors.primary,
  },
  title: {
    fontSize: defaultUx4gTypography.hM_strong.fontSize,
    fontWeight: defaultUx4gTypography.hM_strong.fontWeight,
    lineHeight: defaultUx4gTypography.hM_strong.lineHeight,
    letterSpacing: -0.3,
    color: UX4GColors.gray900,
  },
  subtitle: {
    fontSize: defaultUx4gTypography.bM_default.fontSize,
    fontWeight: defaultUx4gTypography.bM_default.fontWeight,
    lineHeight: defaultUx4gTypography.bM_default.lineHeight,
    color: UX4GColors.neutral500,
    marginTop: 6,
  },
  sectionLabel: {
    fontSize: defaultUx4gTypography.bM_default.fontSize,
    fontWeight: defaultUx4gTypography.bM_default.fontWeight,
    lineHeight: defaultUx4gTypography.bM_default.lineHeight,
    color: UX4GColors.neutral500,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  radioCol: {
    flex: 1,
  },
  methodIcon: {
    fontSize: 16,
    marginLeft: 4,
  },
  continueButton: {
    width: '100%',
    backgroundColor: UX4GColors.primary,
    height: 48,
    borderRadius: 8,
  },
  secureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  lockIcon: {
    fontSize: 14,
  },
  secureText: {
    fontSize: defaultUx4gTypography.lM_default.fontSize,
    fontWeight: defaultUx4gTypography.lM_default.fontWeight,
    lineHeight: defaultUx4gTypography.lM_default.lineHeight,
    color: UX4GColors.neutral500,
  },
  footer: {
    marginTop: 32,
    alignItems: 'center',
    gap: 6,
    paddingBottom: 8,
  },
  poweredByText: {
    fontSize: defaultUx4gTypography.lS_default.fontSize,
    color: UX4GColors.neutral500,
  },
  digitalIndiaLogo: {
    width: 70,
    height: 26,
  },
});`;
  }, [variant]);

  // Live interactive mockup using our actual components
  const renderLiveMockup = () => {
    const isCard = variant === 'card';
    const bgScreenColor = isCard ? colors.cardScreenBg : colors.defaultScreenBg;

    return (
      <div
        style={{
          width: '100%',
          maxWidth: 380,
          borderRadius: 24,
          overflow: 'hidden',
          boxShadow: isDark
            ? '0 12px 32px rgba(0, 0, 0, 0.6), 0 0 0 1px #333333'
            : '0 12px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px #E5E7EB',
          backgroundColor: bgScreenColor,
          display: 'flex',
          flexDirection: 'column',
          minHeight: 680,
          margin: '0 auto',
        }}
      >
        {/* Top Header Bar with Bottom Elevation Shadow & Divider */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            boxShadow: isDark
              ? '0 3px 10px rgba(0, 0, 0, 0.5)'
              : '0 3px 12px rgba(0, 0, 0, 0.08)',
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

        {/* Body Container */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: isCard ? '16px' : '20px 20px 24px 20px',
          }}
        >
          {/* Card or Flat Content Container */}
          <div
            style={{
              backgroundColor: isCard ? colors.cardBg : 'transparent',
              borderRadius: isCard ? 16 : 0,
              padding: isCard ? '20px 20px 24px 20px' : '0',
              boxShadow: isCard
                ? isDark
                  ? '0 6px 20px rgba(0,0,0,0.4)'
                  : '0 6px 20px rgba(74, 43, 194, 0.08)'
                : 'none',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Back Button */}
            <button
              type="button"
              onClick={() => alert('Navigate back')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: 'transparent',
                border: 'none',
                color: colors.backIcon,
                fontSize: defaultUx4gTypography.lL_default.fontSize,
                fontWeight: '600',
                cursor: 'pointer',
                padding: 0,
                alignSelf: 'flex-start',
                marginBottom: isCard ? 16 : 28,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                arrow_back
              </span>
              Back
            </button>

            {/* In Card style: Subtitle then Title as per design, in Default: Title then Subtitle */}
            {isCard ? (
              <>
                <p
                  style={{
                    fontSize: defaultUx4gTypography.bM_default.fontSize,
                    fontWeight: defaultUx4gTypography.bM_default.fontWeight,
                    lineHeight: `${defaultUx4gTypography.bM_default.lineHeight}px`,
                    color: colors.subtleText,
                    margin: 0,
                  }}
                >
                  Enter your 12-digit Aadhaar number
                </p>
                <h2
                  style={{
                    fontSize: defaultUx4gTypography.hM_strong.fontSize,
                    fontWeight: defaultUx4gTypography.hM_strong.fontWeight,
                    lineHeight: `${defaultUx4gTypography.hM_strong.lineHeight}px`,
                    letterSpacing: '-0.3px',
                    color: colors.title,
                    margin: '4px 0 0 0',
                  }}
                >
                  Sign in with Aadhaar
                </h2>
              </>
            ) : (
              <>
                <h2
                  style={{
                    fontSize: defaultUx4gTypography.hM_strong.fontSize,
                    fontWeight: defaultUx4gTypography.hM_strong.fontWeight,
                    lineHeight: `${defaultUx4gTypography.hM_strong.lineHeight}px`,
                    letterSpacing: '-0.3px',
                    color: colors.title,
                    margin: 0,
                  }}
                >
                  Sign in with Aadhaar
                </h2>
                <p
                  style={{
                    fontSize: defaultUx4gTypography.bM_default.fontSize,
                    fontWeight: defaultUx4gTypography.bM_default.fontWeight,
                    lineHeight: `${defaultUx4gTypography.bM_default.lineHeight}px`,
                    color: colors.subtleText,
                    margin: '6px 0 0 0',
                  }}
                >
                  Enter your 12-digit Aadhaar number
                </p>
              </>
            )}

            {/* 12-Digit Aadhaar Input Field */}
            <div style={{ marginTop: 22 }}>
              <Ux4gAadhaarInputField
                value={aadhaar}
                onValueChange={(val) => setAadhaar(val)}
                label="Aadhaar Number"
                placeholder={isCard ? 'XXXX XXXX XXXX' : 'XXXX XXXX 1234'}
                status={validation.status}
                caption={validation.caption}
              />
            </div>

            {/* Choose Authentication Method */}
            <p
              style={{
                fontSize: defaultUx4gTypography.bM_default.fontSize,
                fontWeight: defaultUx4gTypography.bM_default.fontWeight,
                lineHeight: `${defaultUx4gTypography.bM_default.lineHeight}px`,
                color: colors.subtleText,
                margin: '18px 0 8px 0',
              }}
            >
              Choose Authentication Method
            </p>

            {/* Radio Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
              }}
            >
              <div style={{ flex: 1 }}>
                <Ux4gRadioButton
                  value="otp"
                  groupValue={method}
                  onChanged={() => setMethod('otp')}
                  label="Send OTP"
                  trailingIcon={
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: 18,
                        color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
                        display: 'inline-flex',
                        alignItems: 'center',
                      }}
                    >
                      call
                    </span>
                  }
                />
              </div>
              <div style={{ flex: 1 }}>
                <Ux4gRadioButton
                  value="face"
                  groupValue={method}
                  onChanged={() => setMethod('face')}
                  label="Face Auth"
                  trailingIcon={
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: 18,
                        color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
                        display: 'inline-flex',
                        alignItems: 'center',
                      }}
                    >
                      fingerprint
                    </span>
                  }
                />
              </div>
            </div>

            {/* Continue Primary Button */}
            <div style={{ marginTop: 24, width: '100%', display: 'flex' }}>
              <Ux4gButton
                text="Continue"
                variant="primary"
                size="large"
                width="100%"
                onPress={handleContinue}
                style={{
                  width: '100%',
                  height: 48,
                  backgroundColor: colors.buttonBg,
                  borderRadius: 8,
                }}
                textStyle={{
                  color: colors.buttonText,
                  fontWeight: '600',
                  fontSize: defaultUx4gTypography.lL_default.fontSize,
                }}
              />
            </div>

            {/* Security Note inside for Default, outside for Card */}
            {!isCard && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  marginTop: 12,
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 14, color: colors.mutedText }}
                >
                  lock
                </span>
                <span
                  style={{
                    fontSize: defaultUx4gTypography.lM_default.fontSize,
                    fontWeight: defaultUx4gTypography.lM_default.fontWeight,
                    lineHeight: `${defaultUx4gTypography.lM_default.lineHeight}px`,
                    color: colors.subtleText,
                  }}
                >
                  Your Aadhaar details are encrypted and secure
                </span>
              </div>
            )}
          </div>

          {/* Security Note Outside Card for Card Variant */}
          {isCard && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                marginTop: 14,
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 14, color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 }}
              >
                lock
              </span>
              <span
                style={{
                  fontSize: defaultUx4gTypography.lM_default.fontSize,
                  fontWeight: defaultUx4gTypography.lM_default.fontWeight,
                  lineHeight: `${defaultUx4gTypography.lM_default.lineHeight}px`,
                  color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700,
                }}
              >
                Your Aadhaar details are encrypted and secure
              </span>
            </div>
          )}

          {/* Powered by Digital India Footer */}
          <div
            style={{
              textAlign: 'center',
              marginTop: 24,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <span
              style={{
                fontSize: defaultUx4gTypography.lS_default.fontSize,
                fontWeight: defaultUx4gTypography.lS_default.fontWeight,
                lineHeight: `${defaultUx4gTypography.lS_default.lineHeight}px`,
                color: colors.subtleText,
              }}
            >
              Powered by -
            </span>
            <img
              src="/Digital_India_logo.svg"
              alt="Digital India"
              style={{
                height: 24,
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
          <h1 className="wb-title">Sign in with Aadhaar</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Aadhaar-based authentication screen with a 12-digit Aadhaar input and a choice between OTP and Face Auth methods. Toggle between the flat layout and the card-style layout. Mobile-sized layout (360px).
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
                  {/* Variant Selector Pill Control */}
                  <div
                    style={{
                      display: 'flex',
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
                      onClick={() => setVariant('default')}
                      style={{
                        padding: '8px 18px',
                        borderRadius: 8,
                        border: 'none',
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: 'pointer',
                        backgroundColor: variant === 'default' ? UX4GColors.primary : 'transparent',
                        color: variant === 'default' ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      Default
                    </button>
                    <button
                      type="button"
                      onClick={() => setVariant('card')}
                      style={{
                        padding: '8px 18px',
                        borderRadius: 8,
                        border: 'none',
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: 'pointer',
                        backgroundColor: variant === 'card' ? UX4GColors.primary : 'transparent',
                        color: variant === 'card' ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      Card style
                    </button>
                  </div>

                  {/* Render Mobile Phone Mockup */}
                  {renderLiveMockup()}
                </div>
              </Ux4gThemeProvider>
            )}

            {/* 2. Code Tab */}
            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                {/* Variant Switch in Code Tab as well */}
                <div
                  style={{
                    display: 'flex',
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
                    Active Variant:
                  </span>
                  <button
                    type="button"
                    onClick={() => setVariant('default')}
                    className={`wb-tab ${variant === 'default' ? 'active' : ''}`}
                    style={{ padding: '4px 12px', fontSize: 12 }}
                  >
                    Default
                  </button>
                  <button
                    type="button"
                    onClick={() => setVariant('card')}
                    className={`wb-tab ${variant === 'card' ? 'active' : ''}`}
                    style={{ padding: '4px 12px', fontSize: 12 }}
                  >
                    Card style
                  </button>
                </div>

                <CodeBlock
                  code={codeString}
                  language="TSX"
                  filename={variant === 'card' ? 'SignInAadhaarCardPattern.tsx' : 'SignInAadhaarDefaultPattern.tsx'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInAadhaarDoc;
