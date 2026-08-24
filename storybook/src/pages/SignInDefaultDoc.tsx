import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { defaultUx4gTypography } from '../../../src/foundation/typography';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface SignInDefaultDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const SignInDefaultDoc: React.FC<SignInDefaultDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Exact color tokens from UX4G Flutter Design System (Ux4gColors & Ux4gPalette)
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
      primaryBorder: isDark ? UX4GColors.primary300 : UX4GColors.primary200, // #A391FF / #C0B3FF
      buttonBg: isDark ? UX4GColors.primary300 : UX4GColors.primary, // #A391FF / #4A2BC2
      buttonText: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0, // #171717 / #FFFFFF
      inputBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0, // #171717 / #FFFFFF
      inputBorder: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200, // #404040 / #E5E5E5
      // Status Banner
      bannerBg: isDark ? UX4GColors.red900 : UX4GColors.red50, // #60150F / #FFF8F8
      bannerBorder: isDark ? UX4GColors.red600 : UX4GColors.red300, // #DB372D / #FFB3AE
      bannerTitle: isDark ? UX4GColors.red300 : UX4GColors.red800, // #FFB3AE / #8A1A16
      bannerAction: isDark ? UX4GColors.red300 : UX4GColors.red800, // #FFB3AE / #8A1A16
      attemptBadgeBg: isDark ? UX4GColors.red800 : UX4GColors.red100, // #8A1A16 / #FFECEE
      attemptBadgeText: isDark ? UX4GColors.red300 : UX4GColors.red800, // #FFB3AE / #8A1A16
      errorIconColor: isDark ? UX4GColors.red500 : UX4GColors.red600, // #F55E57 / #DB372D
    };
  }, [isDark]);

  // Clean React Native TSX code snippet matching Flutter signInDefaultComponent
  const codeString = useMemo(() => {
    if (variant === 'card') {
      return `import React, { useState } from 'react';
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
  Ux4gInputField,
  Ux4gButton,
  Ux4gOutlineButton,
  Ux4gDivider,
  Ux4gThemeProvider,
  UX4GColors,
  defaultUx4gTypography,
} from 'ux4g-react-native-design-system';
import Svg, { Path, Circle } from 'react-native-svg';

const ErrorIcon = ({ size = 18, color = UX4GColors.red600 }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" fill={color} />
    <Path d="M12 7v6M12 16v1" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
  </Svg>
);

export const SignInAccountCardPattern = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <View style={styles.screen}>
      {/* 1. Official Government Header with Bottom Elevation & Separation Line */}
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

      {/* 2. Soft Purple Background (UX4GColors.primary100 / #DCD4FF) & Floating Card */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          {/* Title */}
          <Text style={styles.title}>Sign in to your account</Text>
          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Access your government services securely
          </Text>

          <View style={{ height: 20 }} />

          {/* Username Input */}
          <Ux4gInputField
            label="Username"
            placeholder="Enter your username"
            value={username}
            onValueChange={setUsername}
          />

          <View style={{ height: 16 }} />

          {/* Password Input with eye reveal toggle */}
          <Ux4gInputField
            label="Password"
            placeholder="............"
            value={password}
            onValueChange={setPassword}
            type="password"
          />

          <View style={{ height: 16 }} />

          {/* Status Message Alert Banner */}
          <View style={styles.statusBanner}>
            <View style={styles.statusHeaderRow}>
              <ErrorIcon size={18} color={UX4GColors.red600} />
              <Text style={styles.statusTitle}>Username not found.</Text>
            </View>
            <View style={styles.statusActionRow}>
              <TouchableOpacity onPress={() => console.log('Take action')}>
                <Text style={styles.actionText}>Take action</Text>
              </TouchableOpacity>
              <View style={styles.attemptBadge}>
                <Text style={styles.attemptText}>Attempt 1 of 5</Text>
              </View>
            </View>
          </View>

          <View style={{ height: 20 }} />

          {/* Primary CTA: Sign In */}
          <Ux4gButton
            text="Sign In"
            variant="primary"
            size="large"
            isLoading={isLoading}
            onPress={handleSignIn}
            style={styles.signInButton}
          />

          <View style={{ height: 16 }} />

          {/* OR Divider */}
          <Ux4gDivider
            label="OR"
            color={UX4GColors.neutral200}
            labelStyle={styles.dividerLabel}
          />

          <View style={{ height: 16 }} />

          {/* Secondary CTA: Sign in with Aadhaar */}
          <Ux4gOutlineButton
            text="Sign in with Aadhaar"
            onPress={() => console.log('Sign in with Aadhaar')}
            style={styles.aadhaarButton}
          />

          <View style={{ height: 24 }} />

          {/* Register Link */}
          <TouchableOpacity
            style={styles.registerLinkContainer}
            onPress={() => console.log('Register')}
          >
            <Text style={styles.registerText}>New user? Register here</Text>
          </TouchableOpacity>
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
    backgroundColor: UX4GColors.neutral300, // #D9D9D9
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
    backgroundColor: UX4GColors.neutral0, // #FFFFFF
    borderRadius: 16,
    padding: 22,
    shadowColor: UX4GColors.neutral1000black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: UX4GColors.gray900, // #121212
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 13,
    color: UX4GColors.neutral500, // #737373
    marginTop: 6,
  },
  statusBanner: {
    backgroundColor: UX4GColors.red50, // #FFF8F8
    borderColor: UX4GColors.red300, // #FFB3AE
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
  statusHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusTitle: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    color: UX4GColors.red800, // #8A1A16
  },
  statusActionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
    color: UX4GColors.red800, // #8A1A16
  },
  attemptBadge: {
    backgroundColor: UX4GColors.red100, // #FFECEE
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  attemptText: {
    fontSize: 12,
    fontWeight: '500',
    color: UX4GColors.red800, // #8A1A16
  },
  signInButton: {
    backgroundColor: UX4GColors.primary, // #4A2BC2
    height: 48,
    borderRadius: 8,
  },
  dividerLabel: {
    fontSize: defaultUx4gTypography.lM_default.fontSize, // 12px
    fontWeight: defaultUx4gTypography.lM_default.fontWeight, // '500'
    color: UX4GColors.neutral400, // #A1A1A1
    letterSpacing: 0.5,
  },
  aadhaarButton: {
    borderColor: UX4GColors.primary200, // #C0B3FF
    height: 48,
    borderRadius: 8,
  },
  registerLinkContainer: {
    alignItems: 'center',
  },
  registerText: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    color: UX4GColors.primary, // #4A2BC2
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
    gap: 6,
  },
  poweredByText: {
    fontSize: defaultUx4gTypography.lS_default.fontSize, // 11px
    fontWeight: defaultUx4gTypography.lS_default.fontWeight, // '500'
    lineHeight: defaultUx4gTypography.lS_default.lineHeight, // 14px
    color: UX4GColors.neutral500, // #737373
  },
  digitalIndiaLogo: {
    width: 70,
    height: 26,
  },
});`;
    }

    return `import React, { useState } from 'react';
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
  Ux4gInputField,
  Ux4gButton,
  Ux4gOutlineButton,
  Ux4gDivider,
  Ux4gThemeProvider,
  UX4GColors,
  defaultUx4gTypography,
} from 'ux4g-react-native-design-system';
import Svg, { Path, Circle } from 'react-native-svg';

const ErrorIcon = ({ size = 18, color = UX4GColors.red600 }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" fill={color} />
    <Path d="M12 7v6M12 16v1" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
  </Svg>
);

export const SignInAccountDefaultPattern = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <View style={styles.screen}>
      {/* 1. Official Government Header with Bottom Elevation & Separation Line */}
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

      {/* 2. Main Full-Screen Layout */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          {/* Title */}
          <Text style={styles.title}>Sign in to your account</Text>
          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Access your government services securely
          </Text>

          <View style={{ height: 24 }} />

          {/* Username Input */}
          <Ux4gInputField
            label="Username"
            placeholder="Enter your username"
            value={username}
            onValueChange={setUsername}
          />

          <View style={{ height: 16 }} />

          {/* Password Input with eye reveal toggle */}
          <Ux4gInputField
            label="Password"
            placeholder="............"
            value={password}
            onValueChange={setPassword}
            type="password"
          />

          <View style={{ height: 16 }} />

          {/* Status Message Alert Banner */}
          <View style={styles.statusBanner}>
            <View style={styles.statusHeaderRow}>
              <ErrorIcon size={18} color={UX4GColors.red600} />
              <Text style={styles.statusTitle}>Username not found.</Text>
            </View>
            <View style={styles.statusActionRow}>
              <TouchableOpacity onPress={() => console.log('Take action')}>
                <Text style={styles.actionText}>Take action</Text>
              </TouchableOpacity>
              <View style={styles.attemptBadge}>
                <Text style={styles.attemptText}>Attempt 1 of 5</Text>
              </View>
            </View>
          </View>

          <View style={{ height: 20 }} />

          {/* Primary CTA: Sign In */}
          <Ux4gButton
            text="Sign In"
            variant="primary"
            size="large"
            isLoading={isLoading}
            onPress={handleSignIn}
            style={styles.signInButton}
          />

          <View style={{ height: 16 }} />

          {/* OR Divider */}
          <Ux4gDivider
            label="OR"
            color={UX4GColors.neutral200}
            labelStyle={styles.dividerLabel}
          />

          <View style={{ height: 16 }} />

          {/* Secondary CTA: Sign in with Aadhaar */}
          <Ux4gOutlineButton
            text="Sign in with Aadhaar"
            onPress={() => console.log('Sign in with Aadhaar')}
            style={styles.aadhaarButton}
          />

          <View style={{ height: 28 }} />

          {/* Register Link */}
          <TouchableOpacity
            style={styles.registerLinkContainer}
            onPress={() => console.log('Register')}
          >
            <Text style={styles.registerText}>New user? Register here</Text>
          </TouchableOpacity>
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
    backgroundColor: UX4GColors.neutral0, // #FFFFFF
  },
  emblemLogo: {
    width: 32,
    height: 32,
  },
  headerDivider: {
    width: 1,
    height: 24,
    backgroundColor: UX4GColors.neutral300, // #D9D9D9
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
    paddingTop: 24,
  },
  content: {
    width: '100%',
    maxWidth: 360,
    alignSelf: 'center',
  },
  title: {
    fontSize: defaultUx4gTypography.hM_strong.fontSize, // 24px
    fontWeight: defaultUx4gTypography.hM_strong.fontWeight, // '700'
    lineHeight: defaultUx4gTypography.hM_strong.lineHeight, // 28px
    color: UX4GColors.gray900, // #121212
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: defaultUx4gTypography.bM_default.fontSize, // 14px
    fontWeight: defaultUx4gTypography.bM_default.fontWeight, // '500'
    lineHeight: defaultUx4gTypography.bM_default.lineHeight, // 18px
    color: UX4GColors.neutral500, // #737373
    marginTop: 6,
  },
  statusBanner: {
    backgroundColor: UX4GColors.red50, // #FFF8F8
    borderColor: UX4GColors.red300, // #FFB3AE
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
  statusHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusTitle: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    color: UX4GColors.red800, // #8A1A16
  },
  statusActionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
    color: UX4GColors.red800, // #8A1A16
  },
  attemptBadge: {
    backgroundColor: UX4GColors.red100, // #FFECEE
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  attemptText: {
    fontSize: 12,
    fontWeight: '500',
    color: UX4GColors.red800, // #8A1A16
  },
  signInButton: {
    backgroundColor: UX4GColors.primary, // #4A2BC2
    height: 48,
    borderRadius: 8,
  },
  dividerLabel: {
    fontSize: defaultUx4gTypography.lM_default.fontSize, // 12px
    fontWeight: defaultUx4gTypography.lM_default.fontWeight, // '500'
    color: UX4GColors.neutral400, // #A1A1A1
    letterSpacing: 0.5,
  },
  aadhaarButton: {
    borderColor: UX4GColors.primary200, // #C0B3FF
    height: 48,
    borderRadius: 8,
  },
  registerLinkContainer: {
    alignItems: 'center',
  },
  registerText: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    color: UX4GColors.primary, // #4A2BC2
  },
  footer: {
    marginTop: 32,
    alignItems: 'center',
    gap: 6,
    paddingBottom: 8,
  },
  poweredByText: {
    fontSize: defaultUx4gTypography.lS_default.fontSize, // 11px
    fontWeight: defaultUx4gTypography.lS_default.fontWeight, // '500'
    lineHeight: defaultUx4gTypography.lS_default.lineHeight, // 14px
    color: UX4GColors.neutral500, // #737373
  },
  digitalIndiaLogo: {
    width: 70,
    height: 26,
  },
});`;
  }, [variant]);

  // Live interactive mockup matching Flutter signInDefaultComponent exactly
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
            padding: isCard ? '16px' : '24px 20px',
          }}
        >
          {/* Card or Flat Container */}
          <div
            style={{
              backgroundColor: isCard ? colors.cardBg : 'transparent',
              borderRadius: isCard ? 16 : 0,
              padding: isCard ? '22px 20px' : '0',
              boxShadow: isCard
                ? isDark
                  ? '0 6px 20px rgba(0,0,0,0.4)'
                  : '0 6px 20px rgba(74, 43, 194, 0.08)'
                : 'none',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Title with hM_strong */}
            <h2
              style={{
                fontSize: isCard ? 22 : defaultUx4gTypography.hM_strong.fontSize,
                fontWeight: defaultUx4gTypography.hM_strong.fontWeight,
                lineHeight: `${defaultUx4gTypography.hM_strong.lineHeight}px`,
                color: colors.title,
                margin: 0,
                letterSpacing: '-0.3px',
              }}
            >
              Sign in to your account
            </h2>

            {/* Subtitle with bM_default */}
            <p
              style={{
                fontSize: isCard ? 13 : defaultUx4gTypography.bM_default.fontSize,
                fontWeight: defaultUx4gTypography.bM_default.fontWeight,
                lineHeight: `${defaultUx4gTypography.bM_default.lineHeight}px`,
                color: colors.subtleText,
                margin: '6px 0 0 0',
              }}
            >
              Access your government services securely
            </p>

            {/* Username Input Field */}
            <div style={{ marginTop: 22 }}>
              <label
                style={{
                  display: 'block',
                  fontSize: 13,
                  fontWeight: 500,
                  color: isDark ? UX4GColors.neutral100 : UX4GColors.neutral800,
                  marginBottom: 6,
                }}
              >
                Username
              </label>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: colors.inputBg,
                  border: `1px solid ${colors.inputBorder}`,
                  borderRadius: 8,
                  padding: '0 12px',
                  height: 44,
                }}
              >
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{
                    border: 'none',
                    outline: 'none',
                    backgroundColor: 'transparent',
                    fontSize: 14,
                    color: colors.title,
                    width: '100%',
                  }}
                />
              </div>
            </div>

            {/* Password Input Field with eye toggle */}
            <div style={{ marginTop: 16 }}>
              <label
                style={{
                  display: 'block',
                  fontSize: 13,
                  fontWeight: 500,
                  color: isDark ? UX4GColors.neutral100 : UX4GColors.neutral800,
                  marginBottom: 6,
                }}
              >
                Password
              </label>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: colors.inputBg,
                  border: `1px solid ${colors.inputBorder}`,
                  borderRadius: 8,
                  padding: '0 12px',
                  height: 44,
                }}
              >
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="............"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    border: 'none',
                    outline: 'none',
                    backgroundColor: 'transparent',
                    fontSize: 14,
                    color: colors.title,
                    width: '100%',
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    color: colors.mutedText,
                    display: 'flex',
                    alignItems: 'center',
                    padding: 0,
                  }}
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Status Message Alert Banner: "Username not found." */}
            <div
              style={{
                marginTop: 16,
                backgroundColor: colors.bannerBg,
                border: `1px solid ${colors.bannerBorder}`,
                borderRadius: 8,
                padding: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill={colors.errorIconColor} />
                  <path d="M12 7v6M12 16v1" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: '18px',
                    color: colors.bannerTitle,
                  }}
                >
                  Username not found.
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 10,
                }}
              >
                <button
                  type="button"
                  onClick={() => alert('Take action clicked')}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    color: colors.bannerAction,
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  Take action
                </button>
                <span
                  style={{
                    backgroundColor: colors.attemptBadgeBg,
                    color: colors.attemptBadgeText,
                    fontSize: 12,
                    fontWeight: 500,
                    padding: '4px 10px',
                    borderRadius: 6,
                  }}
                >
                  Attempt 1 of 5
                </span>
              </div>
            </div>

            {/* Sign In Primary Button */}
            <button
              type="button"
              onClick={() => {
                alert('Sign in clicked');
              }}
              style={{
                marginTop: 20,
                height: 48,
                backgroundColor: colors.buttonBg, // #A391FF in dark / #4A2BC2 in light
                color: colors.buttonText, // #171717 in dark / #FFFFFF in light
                border: 'none',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 14,
                cursor: 'pointer',
                transition: 'opacity 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Sign In
            </button>

            {/* OR Divider with lM_default */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '16px 0',
                gap: 12,
              }}
            >
              <div
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: colors.border,
                }}
              />
              <span
                style={{
                  fontSize: defaultUx4gTypography.lM_default.fontSize,
                  fontWeight: defaultUx4gTypography.lM_default.fontWeight,
                  color: colors.mutedText,
                  letterSpacing: '0.5px',
                }}
              >
                OR
              </span>
              <div
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: colors.border,
                }}
              />
            </div>

            {/* Sign in with Aadhaar Outline Button */}
            <button
              type="button"
              onClick={() => alert('Sign in with Aadhaar')}
              style={{
                height: 48,
                backgroundColor: 'transparent',
                border: `1.5px solid ${colors.primaryBorder}`,
                color: isDark ? colors.primaryLight : colors.primary,
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 14,
                cursor: 'pointer',
              }}
            >
              Sign in with Aadhaar
            </button>

            {/* New user? Register here Link */}
            <div style={{ textAlign: 'center', marginTop: 24 }}>
              <button
                type="button"
                onClick={() => alert('Navigate to Registration')}
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: isDark ? colors.primaryLight : colors.primary,
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: 'pointer',
                }}
              >
                New user? Register here
              </button>
            </div>
          </div>

          {/* Powered by Digital India Footer with lS_default */}
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
          <h1 className="wb-title">Sign in to your account</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A government-grade sign-in pattern. Toggle between the default Username/Password layout and the card-style layout. Mobile-sized layout (360px).
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
                  filename={variant === 'card' ? 'SignInAccountCardPattern.tsx' : 'SignInAccountDefaultPattern.tsx'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInDefaultDoc;
