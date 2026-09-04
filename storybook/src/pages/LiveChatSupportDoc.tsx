import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface LiveChatSupportDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const LiveChatSupportDoc: React.FC<LiveChatSupportDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');

  const isCard = variant === 'card';

  const colors = useMemo(() => {
    const titleColor = isDark ? '#FFFFFF' : '#111827';
    const subtleText = isDark ? '#9CA3AF' : '#4B5563';
    const scaffoldBg = isDark ? UX4GColors.neutral950 : '#FFFFFF';
    const cardBg = isDark ? '#1A1A1A' : '#FFFFFF';
    const cardBorder = isDark ? UX4GColors.neutral700 : '#E5E7EB';
    const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
    const headerBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
    const headerDividerColor = '#D1D5DB';
    const footerText = isDark ? UX4GColors.neutral400 : '#6B7280';
    const screenBg = isCard
      ? isDark
        ? UX4GColors.primary800
        : UX4GColors.primary100
      : scaffoldBg;

    // Status Card Colors
    const statusCardBg = isDark ? UX4GColors.green900 : UX4GColors.green50;
    const statusCardBorder = isDark ? UX4GColors.green600 : UX4GColors.green300;
    const statusIconColor = isDark ? UX4GColors.green500 : UX4GColors.green600;
    const statusTextColor = isDark ? UX4GColors.green300 : UX4GColors.green800;

    // Button Colors
    const primaryBtnBg = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
    const primaryBtnText = isDark ? '#000000' : '#FFFFFF';
    const outlineBtnColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;

    return {
      titleColor,
      subtleText,
      scaffoldBg,
      cardBg,
      cardBorder,
      primaryColor,
      headerBg,
      headerDividerColor,
      footerText,
      screenBg,
      statusCardBg,
      statusCardBorder,
      statusIconColor,
      statusTextColor,
      primaryBtnBg,
      primaryBtnText,
      outlineBtnColor,
    };
  }, [isDark, isCard]);

  // Clean React Native TSX source code strings matching Flutter implementation
  const defaultCodeString = `import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gButtonVariant,
  Ux4gButtonSize,
  Ux4gDivider,
  Ux4gDividerOrientation,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const LiveChatSupportScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const screenBg = isDark ? UX4GColors.neutral950 : '#FFFFFF';
  const titleColor = isDark ? '#FFFFFF' : '#111827';
  const subtleTextColor = isDark ? '#9CA3AF' : '#4B5563';

  // Status Card styling
  const statusBg = isDark ? UX4GColors.green900 : UX4GColors.green50;
  const statusBorder = isDark ? UX4GColors.green600 : UX4GColors.green300;
  const statusIconColor = isDark ? UX4GColors.green500 : UX4GColors.green600;
  const statusTextColor = isDark ? UX4GColors.green300 : UX4GColors.green800;

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
        <Text style={[styles.title, { color: titleColor }]}>
          Live Chat Support
        </Text>
        <Text style={[styles.subtitle, { color: subtleTextColor }]}>
          Chat with a support agent for real-time help with your application.
        </Text>

        {/* Status Card */}
        <View
          style={[
            styles.statusCard,
            {
              backgroundColor: statusBg,
              borderColor: statusBorder,
            },
          ]}
        >
          <CheckCircleIcon size={22} color={statusIconColor} />
          <View style={styles.statusTextContainer}>
            <Text style={[styles.statusTitle, { color: statusTextColor }]}>
              Queue agent available
            </Text>
            <Text style={[styles.statusSubtitle, { color: statusTextColor }]}>
              Estimated wait time: 1-2 mins
            </Text>
          </View>
        </View>

        {/* Informational Text */}
        <Text style={[styles.bodyText, { color: subtleTextColor }]}>
          Connect now to discuss your application with our support team. Average
          response time under 2 minutes.
        </Text>
      </ScrollView>

      {/* Action Buttons at bottom */}
      <View style={styles.bottomButtonsContainer}>
        <Ux4gButton
          onPress={() => console.log('Start Chat Session')}
          text="Start Chat Session"
          variant={Ux4gButtonVariant.primary}
          size={Ux4gButtonSize.large}
          height={48}
          backgroundColor={
            isDark ? UX4GColors.primary300 : UX4GColors.primary600
          }
          contentColor={isDark ? '#000000' : '#FFFFFF'}
        />
        <View style={{ height: 12 }} />
        <Ux4gButton
          onPress={() => console.log('Email support')}
          text="Email support instead"
          variant={Ux4gButtonVariant.outline}
          size={Ux4gButtonSize.large}
          height={48}
          borderColor={
            isDark ? UX4GColors.primary300 : UX4GColors.primary600
          }
          contentColor={
            isDark ? UX4GColors.primary300 : UX4GColors.primary600
          }
        />
      </View>

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
  statusCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 24,
  },
  statusTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  statusTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 2,
  },
  statusSubtitle: {
    fontSize: 12,
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 21,
  },
  bottomButtonsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
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

/// Card Style variant — live chat support inside a white card on purple background.
export const LiveChatSupportCardScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const screenBg = isDark ? UX4GColors.primary800 : UX4GColors.primary100;
  const cardBg = isDark ? '#1A1A1A' : '#FFFFFF';
  const titleColor = isDark ? '#FFFFFF' : '#111827';
  const subtleTextColor = isDark ? '#9CA3AF' : '#4B5563';

  // Status Card styling
  const statusBg = isDark ? UX4GColors.green900 : UX4GColors.green50;
  const statusBorder = isDark ? UX4GColors.green600 : UX4GColors.green300;
  const statusIconColor = isDark ? UX4GColors.green500 : UX4GColors.green600;
  const statusTextColor = isDark ? UX4GColors.green300 : UX4GColors.green800;

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
          <Text style={[styles.title, { color: titleColor }]}>
            Live Chat Support
          </Text>
          <Text style={[styles.subtitle, { color: subtleTextColor }]}>
            Chat with a support agent for real-time help with your application.
          </Text>

          {/* Status Card */}
          <View
            style={[
              styles.statusCard,
              {
                backgroundColor: statusBg,
                borderColor: statusBorder,
              },
            ]}
          >
            <CheckCircleIcon size={22} color={statusIconColor} />
            <View style={styles.statusTextContainer}>
              <Text style={[styles.statusTitle, { color: statusTextColor }]}>
                Queue agent available
              </Text>
              <Text style={[styles.statusSubtitle, { color: statusTextColor }]}>
                Estimated wait time: 1-2 mins
              </Text>
            </View>
          </View>

          {/* Informational Text */}
          <Text style={[styles.bodyText, { color: subtleTextColor }]}>
            Connect now to discuss your application with our support team. Average
            response time under 2 minutes.
          </Text>
        </Ux4gCard>
      </ScrollView>

      {/* Action Buttons at bottom */}
      <View style={styles.bottomButtonsContainer}>
        <Ux4gButton
          onPress={() => console.log('Start Chat Session')}
          text="Start Chat Session"
          variant={Ux4gButtonVariant.primary}
          size={Ux4gButtonSize.large}
          height={48}
          backgroundColor={
            isDark ? UX4GColors.primary300 : UX4GColors.primary600
          }
          contentColor={isDark ? '#000000' : '#FFFFFF'}
        />
        <View style={{ height: 12 }} />
        <Ux4gButton
          onPress={() => console.log('Email support')}
          text="Email support instead"
          variant={Ux4gButtonVariant.outline}
          size={Ux4gButtonSize.large}
          height={48}
          borderColor={
            isDark ? UX4GColors.primary300 : UX4GColors.primary600
          }
          contentColor={
            isDark ? UX4GColors.primary300 : UX4GColors.primary600
          }
        />
      </View>

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
  statusCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 24,
  },
  statusTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  statusTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 2,
  },
  statusSubtitle: {
    fontSize: 12,
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 21,
  },
  bottomButtonsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
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
          Live Chat Support ({isCard ? 'Card Style' : 'Default'})
        </h1>
        <p className="wb-description">
          {isCard
            ? 'Live chat support page with agent availability status inside a card container with light purple background.'
            : 'Live chat support page with agent availability status on white background.'}
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
                      padding: '16px',
                      overflowY: 'auto',
                    }}
                  >
                    {/* Main Content Area: directly on screen (Default) or inside Ux4gCard (Card Style) */}
                    <div
                      style={{
                        width: '100%',
                        backgroundColor: isCard ? colors.cardBg : 'transparent',
                        borderRadius: isCard ? '16px' : '0px',
                        border: isCard ? `1px solid ${colors.cardBorder}` : 'none',
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
                        Live Chat Support
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
                        Chat with a support agent for real-time help with your application.
                      </div>

                      {/* Status Card */}
                      <div
                        style={{
                          width: '100%',
                          padding: '14px',
                          backgroundColor: colors.statusCardBg,
                          borderRadius: '12px',
                          border: `1px solid ${colors.statusCardBorder}`,
                          display: 'flex',
                          alignItems: 'flex-start',
                          boxSizing: 'border-box',
                          marginBottom: '24px',
                        }}
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{
                            fontSize: '22px',
                            color: colors.statusIconColor,
                            marginRight: '10px',
                            fontVariationSettings: "'FILL' 1",
                          }}
                        >
                          check_circle
                        </span>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <div
                            style={{
                              fontSize: '14px',
                              fontWeight: 700,
                              color: colors.statusTextColor,
                              marginBottom: '2px',
                            }}
                          >
                            Queue agent available
                          </div>
                          <div
                            style={{
                              fontSize: '12px',
                              color: colors.statusTextColor,
                            }}
                          >
                            Estimated wait time: 1-2 mins
                          </div>
                        </div>
                      </div>

                      {/* Informational Text */}
                      <div
                        style={{
                          fontSize: '14px',
                          color: colors.subtleText,
                          lineHeight: '21px',
                        }}
                      >
                        Connect now to discuss your application with our support team. Average
                        response time under 2 minutes.
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons at bottom */}
                  <div
                    style={{
                      padding: '0 16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => alert('Starting live chat session...')}
                      style={{
                        width: '100%',
                        height: '48px',
                        borderRadius: '8px',
                        border: 'none',
                        backgroundColor: colors.primaryBtnBg,
                        color: colors.primaryBtnText,
                        fontSize: '15px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'opacity 0.15s ease',
                      }}
                    >
                      Start Chat Session
                    </button>

                    <button
                      type="button"
                      onClick={() => alert('Redirecting to email support...')}
                      style={{
                        width: '100%',
                        height: '48px',
                        borderRadius: '8px',
                        border: `1px solid ${colors.outlineBtnColor}`,
                        backgroundColor: 'transparent',
                        color: colors.outlineBtnColor,
                        fontSize: '15px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'opacity 0.15s ease',
                      }}
                    >
                      Email support instead
                    </button>
                  </div>

                  {/* Bottom Section: Powered by Digital India */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                      paddingTop: '12px',
                      paddingBottom: '12px',
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
