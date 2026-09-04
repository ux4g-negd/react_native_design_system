import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface ContactSupportDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

interface SupportChannel {
  icon: string;
  title: string;
  subtitle: string;
  buttonText: string;
  isOutline?: boolean;
}

const SUPPORT_CHANNELS: SupportChannel[] = [
  {
    icon: 'call',
    title: 'Phone Support',
    subtitle: '1800-XXX-XXXX · Toll free · Mon-Sat 9AM-6PM',
    buttonText: 'Call Now',
  },
  {
    icon: 'chat',
    title: 'Live Chat',
    subtitle: 'Available now · Estimated wait 1-2 minutes',
    buttonText: 'Start Chat',
  },
  {
    icon: 'mail',
    title: 'Email Support',
    subtitle: 'Response within 2 working days',
    buttonText: 'Send Email',
  },
  {
    icon: 'location_on',
    title: 'Walk-in Centre',
    subtitle: 'Visit your nearest Common Service Centre',
    buttonText: 'Find CSC',
    isOutline: true,
  },
];

export const ContactSupportDoc: React.FC<ContactSupportDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');

  const isCard = variant === 'card';

  const colors = useMemo(() => {
    const titleColor = isDark ? '#FFFFFF' : '#111827';
    const subtleText = isDark ? '#9CA3AF' : '#4B5563';
    const cardItemTitle = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
    const cardItemSubtitle = isDark ? UX4GColors.neutral200 : UX4GColors.neutral700;
    const scaffoldBg = isDark ? UX4GColors.neutral950 : '#FFFFFF';
    const containerCardBg = isDark ? '#1A1A1A' : '#FFFFFF';
    const containerCardBorder = isDark ? UX4GColors.neutral700 : '#E5E7EB';
    const itemCardBg = isDark ? UX4GColors.neutral900 : UX4GColors.neutral0;
    const itemCardBorder = isDark ? UX4GColors.neutral700 : UX4GColors.neutral200;
    const iconCircleBg = isDark ? UX4GColors.primary800 : UX4GColors.primary100;
    const iconColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
    const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
    const filledBtnBg = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
    const filledBtnText = isDark ? '#000000' : '#FFFFFF';
    const outlineBtnColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
    const headerBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
    const headerDividerColor = '#D1D5DB';
    const footerText = isDark ? UX4GColors.neutral400 : '#6B7280';
    const screenBg = isCard
      ? isDark
        ? UX4GColors.primary800
        : UX4GColors.primary100
      : scaffoldBg;

    return {
      titleColor,
      subtleText,
      cardItemTitle,
      cardItemSubtitle,
      scaffoldBg,
      containerCardBg,
      containerCardBorder,
      itemCardBg,
      itemCardBorder,
      iconCircleBg,
      iconColor,
      primaryColor,
      filledBtnBg,
      filledBtnText,
      outlineBtnColor,
      headerBg,
      headerDividerColor,
      footerText,
      screenBg,
    };
  }, [isDark, isCard]);

  // Clean React Native TSX source code strings matching Flutter implementation
  const defaultCodeString = `import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gCard,
  Ux4gButton,
  Ux4gButtonVariant,
  Ux4gButtonSize,
  Ux4gDivider,
  Ux4gDividerOrientation,
  UX4GColors,
} from 'ux4g-react-native-design-system';

interface SupportChannel {
  icon: any;
  title: string;
  subtitle: string;
  buttonText: string;
  isOutline?: boolean;
  onPress: () => void;
}

export const ContactSupportScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const screenBg = isDark ? UX4GColors.neutral950 : '#FFFFFF';
  const titleColor = isDark ? '#FFFFFF' : '#111827';
  const subtleTextColor = isDark ? '#9CA3AF' : '#4B5563';

  const supportChannels: SupportChannel[] = [
    {
      icon: <PhoneIcon size={20} color={isDark ? UX4GColors.primary300 : UX4GColors.primary600} />,
      title: 'Phone Support',
      subtitle: '1800-XXX-XXXX · Toll free · Mon-Sat 9AM-6PM',
      buttonText: 'Call Now',
      onPress: () => console.log('Call Phone Support'),
    },
    {
      icon: <ChatIcon size={20} color={isDark ? UX4GColors.primary300 : UX4GColors.primary600} />,
      title: 'Live Chat',
      subtitle: 'Available now · Estimated wait 1-2 minutes',
      buttonText: 'Start Chat',
      onPress: () => console.log('Start Live Chat'),
    },
    {
      icon: <EmailIcon size={20} color={isDark ? UX4GColors.primary300 : UX4GColors.primary600} />,
      title: 'Email Support',
      subtitle: 'Response within 2 working days',
      buttonText: 'Send Email',
      onPress: () => console.log('Send Email'),
    },
    {
      icon: <LocationIcon size={20} color={isDark ? UX4GColors.primary300 : UX4GColors.primary600} />,
      title: 'Walk-in Centre',
      subtitle: 'Visit your nearest Common Service Centre',
      buttonText: 'Find CSC',
      isOutline: true,
      onPress: () => console.log('Find CSC'),
    },
  ];

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: screenBg }]}>
      {/* App Header */}
      <Ux4gAppHeader
        elevation={2}
        variant="light"
        title=""
        leadingSpacing={8}
        leadingWidgets={[
          <NationalEmblemLogo key="emblem" isDark={isDark} height={40} />,
          <View key="divider" style={styles.headerDividerWrapper}>
            <Ux4gDivider
              orientation={Ux4gDividerOrientation.vertical}
              color="#D1D5DB"
            />
          </View>,
          <UnionLogo
            key="union"
            size={32}
            color={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
          />,
        ]}
      />

      {/* Content */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={[styles.title, { color: titleColor }]}>Still need help?</Text>
        <Text style={[styles.subtitle, { color: subtleTextColor }]}>
          Contact our support team — we are here to help.
        </Text>

        {/* Support Channels List */}
        <View style={styles.channelsList}>
          {supportChannels.map((channel) => (
            <Ux4gCard
              key={channel.title}
              backgroundColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral0}
              cornerRadius={12}
              borderColor={isDark ? UX4GColors.neutral700 : UX4GColors.neutral200}
              borderWidth={1}
              style={styles.channelCard}
            >
              <View style={styles.cardContent}>
                {/* Channel Icon Container */}
                <View
                  style={[
                    styles.iconContainer,
                    {
                      backgroundColor: isDark
                        ? UX4GColors.primary800
                        : UX4GColors.primary100,
                    },
                  ]}
                >
                  {channel.icon}
                </View>

                {/* Channel Text Info */}
                <View style={styles.textContainer}>
                  <Text
                    style={[
                      styles.cardTitle,
                      {
                        color: isDark
                          ? UX4GColors.neutral50
                          : UX4GColors.neutral900,
                      },
                    ]}
                  >
                    {channel.title}
                  </Text>
                  <Text
                    style={[
                      styles.cardSubtitle,
                      {
                        color: isDark
                          ? UX4GColors.neutral200
                          : UX4GColors.neutral700,
                      },
                    ]}
                  >
                    {channel.subtitle}
                  </Text>
                </View>

                {/* Channel Action Button */}
                {channel.isOutline ? (
                  <Ux4gButton
                    onPress={channel.onPress}
                    text={channel.buttonText}
                    variant={Ux4gButtonVariant.outline}
                    size={Ux4gButtonSize.small}
                    borderColor={
                      isDark ? UX4GColors.primary300 : UX4GColors.primary600
                    }
                    contentColor={
                      isDark ? UX4GColors.primary300 : UX4GColors.primary600
                    }
                    borderRadius={8}
                  />
                ) : (
                  <Ux4gButton
                    onPress={channel.onPress}
                    text={channel.buttonText}
                    variant={Ux4gButtonVariant.primary}
                    size={Ux4gButtonSize.small}
                    backgroundColor={
                      isDark ? UX4GColors.primary300 : UX4GColors.primary600
                    }
                    contentColor={isDark ? '#000000' : '#FFFFFF'}
                    borderRadius={8}
                  />
                )}
              </View>
            </Ux4gCard>
          ))}
        </View>

        {/* File Complaint Link */}
        <View style={styles.complaintContainer}>
          <Ux4gButton
            onPress={() => console.log('File complaint')}
            text="File a complaint about this portal"
            variant={Ux4gButtonVariant.ghost}
            contentColor={
              isDark ? UX4GColors.primary300 : UX4GColors.primary600
            }
          />
        </View>
      </ScrollView>

      {/* Powered by Digital India */}
      <View style={styles.footerRow}>
        <Text
          style={[
            styles.footerText,
            { color: isDark ? UX4GColors.neutral400 : '#6B7280' },
          ]}
        >
          Powered by -
        </Text>
        <Image
          source={{ uri: '/digital_india_logo.png' }}
          style={styles.digitalIndiaLogo}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerDividerWrapper: {
    height: 32,
    justifyContent: 'center',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 24,
    lineHeight: 20,
  },
  channelsList: {
    width: '100%',
    gap: 12,
  },
  channelCard: {
    padding: 14,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 2,
  },
  cardSubtitle: {
    fontSize: 12,
    lineHeight: 16,
  },
  complaintContainer: {
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingBottom: 12,
  },
  footerText: {
    fontSize: 11,
  },
  digitalIndiaLogo: {
    height: 20,
    width: 60,
  },
});
`;

  const cardCodeString = `import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gCard,
  Ux4gButton,
  Ux4gButtonVariant,
  Ux4gButtonSize,
  Ux4gDivider,
  Ux4gDividerOrientation,
  UX4GColors,
} from 'ux4g-react-native-design-system';

interface SupportChannel {
  icon: any;
  title: string;
  subtitle: string;
  buttonText: string;
  isOutline?: boolean;
  onPress: () => void;
}

/// Card Style variant — contact support inside a white card on purple background.
export const ContactSupportCardScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const screenBg = isDark ? UX4GColors.primary800 : UX4GColors.primary100;
  const cardBg = isDark ? '#1A1A1A' : '#FFFFFF';
  const titleColor = isDark ? '#FFFFFF' : '#111827';
  const subtleTextColor = isDark ? '#9CA3AF' : '#4B5563';

  const supportChannels: SupportChannel[] = [
    {
      icon: <PhoneIcon size={20} color={isDark ? UX4GColors.primary300 : UX4GColors.primary600} />,
      title: 'Phone Support',
      subtitle: '1800-XXX-XXXX · Toll free · Mon-Sat 9AM-6PM',
      buttonText: 'Call Now',
      onPress: () => console.log('Call Phone Support'),
    },
    {
      icon: <ChatIcon size={20} color={isDark ? UX4GColors.primary300 : UX4GColors.primary600} />,
      title: 'Live Chat',
      subtitle: 'Available now · Estimated wait 1-2 minutes',
      buttonText: 'Start Chat',
      onPress: () => console.log('Start Live Chat'),
    },
    {
      icon: <EmailIcon size={20} color={isDark ? UX4GColors.primary300 : UX4GColors.primary600} />,
      title: 'Email Support',
      subtitle: 'Response within 2 working days',
      buttonText: 'Send Email',
      onPress: () => console.log('Send Email'),
    },
    {
      icon: <LocationIcon size={20} color={isDark ? UX4GColors.primary300 : UX4GColors.primary600} />,
      title: 'Walk-in Centre',
      subtitle: 'Visit your nearest Common Service Centre',
      buttonText: 'Find CSC',
      isOutline: true,
      onPress: () => console.log('Find CSC'),
    },
  ];

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: screenBg }]}>
      {/* App Header */}
      <Ux4gAppHeader
        elevation={2}
        variant="light"
        title=""
        leadingSpacing={8}
        leadingWidgets={[
          <NationalEmblemLogo key="emblem" isDark={isDark} height={40} />,
          <View key="divider" style={styles.headerDividerWrapper}>
            <Ux4gDivider
              orientation={Ux4gDividerOrientation.vertical}
              color="#D1D5DB"
            />
          </View>,
          <UnionLogo
            key="union"
            size={32}
            color={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
          />,
        ]}
      />

      {/* White Card Content */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        <Ux4gCard
          backgroundColor={cardBg}
          cornerRadius={16}
          style={styles.card}
        >
          <Text style={[styles.title, { color: titleColor }]}>Still need help?</Text>
          <Text style={[styles.subtitle, { color: subtleTextColor }]}>
            Contact our support team — we are here to help.
          </Text>

          {/* Support Channels List */}
          <View style={styles.channelsList}>
            {supportChannels.map((channel) => (
              <Ux4gCard
                key={channel.title}
                backgroundColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral0}
                cornerRadius={12}
                borderColor={isDark ? UX4GColors.neutral700 : UX4GColors.neutral200}
                borderWidth={1}
                style={styles.channelCard}
              >
                <View style={styles.cardContent}>
                  {/* Channel Icon Container */}
                  <View
                    style={[
                      styles.iconContainer,
                      {
                        backgroundColor: isDark
                          ? UX4GColors.primary800
                          : UX4GColors.primary100,
                      },
                    ]}
                  >
                    {channel.icon}
                  </View>

                  {/* Channel Text Info */}
                  <View style={styles.textContainer}>
                    <Text
                      style={[
                        styles.cardTitle,
                        {
                          color: isDark
                            ? UX4GColors.neutral50
                            : UX4GColors.neutral900,
                        },
                      ]}
                    >
                      {channel.title}
                    </Text>
                    <Text
                      style={[
                        styles.cardSubtitle,
                        {
                          color: isDark
                            ? UX4GColors.neutral200
                            : UX4GColors.neutral700,
                        },
                      ]}
                    >
                      {channel.subtitle}
                    </Text>
                  </View>

                  {/* Channel Action Button */}
                  {channel.isOutline ? (
                    <Ux4gButton
                      onPress={channel.onPress}
                      text={channel.buttonText}
                      variant={Ux4gButtonVariant.outline}
                      size={Ux4gButtonSize.small}
                      borderColor={
                        isDark ? UX4GColors.primary300 : UX4GColors.primary600
                      }
                      contentColor={
                        isDark ? UX4GColors.primary300 : UX4GColors.primary600
                      }
                      borderRadius={8}
                    />
                  ) : (
                    <Ux4gButton
                      onPress={channel.onPress}
                      text={channel.buttonText}
                      variant={Ux4gButtonVariant.primary}
                      size={Ux4gButtonSize.small}
                      backgroundColor={
                        isDark ? UX4GColors.primary300 : UX4GColors.primary600
                      }
                      contentColor={isDark ? '#000000' : '#FFFFFF'}
                      borderRadius={8}
                    />
                  )}
                </View>
              </Ux4gCard>
            ))}
          </View>

          {/* File Complaint Link */}
          <View style={styles.complaintContainer}>
            <Ux4gButton
              onPress={() => console.log('File complaint')}
              text="File a complaint about this portal"
              variant={Ux4gButtonVariant.ghost}
              contentColor={
                isDark ? UX4GColors.primary300 : UX4GColors.primary600
              }
            />
          </View>
        </Ux4gCard>
      </ScrollView>

      {/* Powered by Digital India */}
      <View style={styles.footerRow}>
        <Text
          style={[
            styles.footerText,
            { color: isDark ? UX4GColors.neutral400 : '#6B7280' },
          ]}
        >
          Powered by -
        </Text>
        <Image
          source={{ uri: '/digital_india_logo.png' }}
          style={styles.digitalIndiaLogo}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerDividerWrapper: {
    height: 32,
    justifyContent: 'center',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  card: {
    padding: 16,
    borderRadius: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 24,
    lineHeight: 20,
  },
  channelsList: {
    width: '100%',
    gap: 12,
  },
  channelCard: {
    padding: 14,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 2,
  },
  cardSubtitle: {
    fontSize: 12,
    lineHeight: 16,
  },
  complaintContainer: {
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingBottom: 12,
  },
  footerText: {
    fontSize: 11,
  },
  digitalIndiaLogo: {
    height: 20,
    width: 60,
  },
});
`;

  return (
    <div className="wb-page">
      {/* Top Header */}
      <div className="wb-header">
        <h1 className="wb-title">
          Contact Support ({isCard ? 'Card Style' : 'Default'})
        </h1>
        <p className="wb-description">
          {isCard
            ? 'Contact support page with multiple support channels inside a card container with light purple background.'
            : 'Contact support page with multiple support channels on white background.'}
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
              <div
                className={`wb-preview-area ${isDark ? 'dark' : ''}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '32px 16px',
                }}
              >
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
                      color:
                        variant === 'default'
                          ? UX4GColors.neutral0
                          : isDark
                          ? UX4GColors.neutral400
                          : UX4GColors.neutral600,
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
                      color:
                        variant === 'card'
                          ? UX4GColors.neutral0
                          : isDark
                          ? UX4GColors.neutral400
                          : UX4GColors.neutral600,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Card Style
                  </button>
                </div>

                {/* Mobile Phone Mockup Frame */}
                <div
                  style={{
                    width: '360px',
                    height: '740px',
                    backgroundColor: colors.screenBg,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: isDark
                      ? '0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px #333333'
                      : '0 20px 40px rgba(0,0,0,0.12), 0 0 0 1px #E5E7EB',
                    position: 'relative',
                    transition: 'background-color 0.2s ease',
                  }}
                >
                  {/* Ux4gAppHeader inside Mockup */}
                  <div
                    style={{
                      height: '56px',
                      backgroundColor: colors.headerBg,
                      borderBottom: `1px solid ${colors.headerDividerColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 16px',
                      gap: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      zIndex: 10,
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src="/national_emblem_logo.svg"
                      alt="National Emblem"
                      style={{
                        height: '40px',
                        filter: isDark ? 'brightness(0) invert(1)' : 'none',
                      }}
                    />
                    <div
                      style={{
                        width: '1px',
                        height: '32px',
                        backgroundColor: '#D1D5DB',
                        margin: '0 4px',
                      }}
                    />
                    <UnionLogo size={32} color={colors.primaryColor} isDark={isDark} />
                  </div>

                  {/* Scrollable Content Container */}
                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '16px',
                      overflowY: 'auto',
                    }}
                  >
                    {/* Main Content Area: directly on screen (Default) or inside Ux4gCard (Card Style) */}
                    <div
                      style={{
                        width: '100%',
                        backgroundColor: isCard ? colors.containerCardBg : 'transparent',
                        borderRadius: isCard ? '16px' : '0px',
                        border: isCard ? `1px solid ${colors.containerCardBorder}` : 'none',
                        padding: isCard ? '16px' : '0px',
                        boxShadow: isCard ? '0 4px 12px rgba(0, 0, 0, 0.05)' : 'none',
                        boxSizing: 'border-box',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {/* Title */}
                      <div
                        style={{
                          fontSize: '22px',
                          fontWeight: 800,
                          color: colors.titleColor,
                          marginBottom: '8px',
                        }}
                      >
                        Still need help?
                      </div>

                      {/* Subtitle */}
                      <div
                        style={{
                          fontSize: '14px',
                          color: colors.subtleText,
                          lineHeight: '20px',
                          marginBottom: '24px',
                        }}
                      >
                        Contact our support team — we are here to help.
                      </div>

                      {/* Support Cards List */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {SUPPORT_CHANNELS.map((channel) => (
                          <div
                            key={channel.title}
                            style={{
                              backgroundColor: colors.itemCardBg,
                              border: `1px solid ${colors.itemCardBorder}`,
                              borderRadius: '12px',
                              padding: '14px',
                              display: 'flex',
                              alignItems: 'center',
                              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                            }}
                          >
                            {/* Icon Circle */}
                            <div
                              style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '20px',
                                backgroundColor: colors.iconCircleBg,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                              }}
                            >
                              <span
                                className="material-symbols-outlined"
                                style={{
                                  fontSize: '20px',
                                  color: colors.iconColor,
                                }}
                              >
                                {channel.icon}
                              </span>
                            </div>

                            {/* Text Details */}
                            <div
                              style={{
                                flex: 1,
                                marginLeft: '12px',
                                marginRight: '8px',
                              }}
                            >
                              <div
                                style={{
                                  fontSize: '14px',
                                  fontWeight: 700,
                                  color: colors.cardItemTitle,
                                  marginBottom: '2px',
                                }}
                              >
                                {channel.title}
                              </div>
                              <div
                                style={{
                                  fontSize: '12px',
                                  color: colors.cardItemSubtitle,
                                  lineHeight: '16px',
                                }}
                              >
                                {channel.subtitle}
                              </div>
                            </div>

                            {/* Action Button */}
                            <button
                              type="button"
                              onClick={() => alert(`${channel.title}: ${channel.buttonText}`)}
                              style={{
                                height: '32px',
                                padding: '0 12px',
                                borderRadius: '8px',
                                fontSize: '12px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                flexShrink: 0,
                                border: channel.isOutline
                                  ? `1px solid ${colors.outlineBtnColor}`
                                  : 'none',
                                backgroundColor: channel.isOutline
                                  ? 'transparent'
                                  : colors.filledBtnBg,
                                color: channel.isOutline
                                  ? colors.outlineBtnColor
                                  : colors.filledBtnText,
                                transition: 'opacity 0.15s ease',
                              }}
                            >
                              {channel.buttonText}
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* File Complaint Link */}
                      <div
                        style={{
                          marginTop: '24px',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => alert('Navigate to file a complaint')}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: colors.primaryColor,
                            fontSize: '13px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            padding: '6px 12px',
                          }}
                        >
                          File a complaint about this portal
                        </button>
                      </div>
                    </div>

                    {/* Bottom Section: Powered by Digital India */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '4px',
                        paddingTop: '24px',
                        paddingBottom: '4px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '11px',
                          color: colors.footerText,
                        }}
                      >
                        Powered by -
                      </span>
                      <img
                        src="/digital_india_logo.png"
                        alt="Digital India"
                        style={{
                          height: '20px',
                          objectFit: 'contain',
                        }}
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Code Tab */}
            {activeMainTab === 'code' && (
              <div style={{ padding: '24px' }}>
                <div style={{ marginBottom: '24px' }}>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: isDark ? UX4GColors.neutral100 : UX4GColors.neutral900,
                      marginBottom: '8px',
                    }}
                  >
                    React Native Pattern Implementation ({isCard ? 'Card Style' : 'Default'})
                  </h3>
                  <p
                    style={{
                      fontSize: '13px',
                      color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                      marginBottom: '16px',
                    }}
                  >
                    Copy and paste the code below into your React Native application.
                  </p>
                  <CodeBlock
                    code={isCard ? cardCodeString : defaultCodeString}
                    language="tsx"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
