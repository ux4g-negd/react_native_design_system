import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gSwitch as Ux4gToggle } from '../../../src/components/switch/Switch';
import { Ux4gChoiceChip, Ux4gChipGroup } from '../../../src/components/chips/Chips';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface NotificationChannelsDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

const TAB_CHIPS = [
  'Notification channels',
  'Update Frequency',
  'Per Service Preferences',
  'Mandatory Notification',
  'WhatsApp notification',
  'Manage all Subscriptions',
];

export const NotificationChannelsDoc: React.FC<NotificationChannelsDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);

  // Toggle States for Channels (all checked by default as shown in Image 2)
  const [sms, setSms] = useState<boolean>(true);
  const [email, setEmail] = useState<boolean>(true);
  const [app, setApp] = useState<boolean>(true);
  const [whatsapp, setWhatsapp] = useState<boolean>(true);

  // Color tokens
  const colors = useMemo(() => {
    return {
      bgScreen: isDark ? UX4GColors.neutral950 : UX4GColors.neutral0,
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      cardBorder: isDark ? '#334155' : '#E2E8F0',
      cardBg: isDark ? '#1E293B' : UX4GColors.neutral0,
      title: isDark ? UX4GColors.neutral0 : '#0F172A',
      subtitle: isDark ? '#94A3B8' : '#475569',
      tabActiveBg: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      tabActiveText: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      tabInactiveBg: isDark ? '#1E1E1E' : UX4GColors.neutral0,
      tabInactiveText: isDark ? '#D1D5DB' : '#1F2937',
      tabBorder: isDark ? '#333333' : '#E2E8F0',
      mutedText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
    };
  }, [isDark]);

  // Clean TSX code string matching NotificationChannelsPattern
  const codeString = useMemo(() => {
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
  Ux4gToggle,
  Ux4gChoiceChip,
  Ux4gChipGroup,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-components';

export const NotificationChannelsPattern = () => {
  const [sms, setSms] = useState(true);
  const [email, setEmail] = useState(true);
  const [app, setApp] = useState(true);
  const [whatsapp, setWhatsapp] = useState(true);

  return (
    <View style={styles.screen}>
      {/* 1. Official Government Header */}
      <Ux4gAppHeader
        title=""
        variant="light"
        elevation={0}
        useSafeArea={false}
        horizontalPadding={16}
        leadingSpacing={12}
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
        actions={[
          {
            customWidget: (
              <TouchableOpacity
                key="menu"
                style={styles.menuBtn}
                onPress={() => {}}
              >
                <Text style={styles.menuIcon}>☰</Text>
              </TouchableOpacity>
            ),
          },
        ]}
      />
      <Ux4gDivider color={UX4GColors.neutral200} />

      {/* 2. Main Title & Subtitle */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Notification Preferences</Text>
        <Text style={styles.subtitleText}>
          Control how and when the portal contacts you. Changes are saved automatically.
        </Text>
      </View>

      {/* 3. Horizontal Filter Chips */}
      <Ux4gChipGroup
        arrangement="horizontal"
        spacing={8}
        containerStyle={styles.tabsContainer}
      >
        <Ux4gChoiceChip text="Notification Channels" selected={true} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Update Frequency" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Per Service Preferences" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Mandatory Notification" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="WhatsApp notification" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Manage all Subscriptions" selected={false} onClick={() => {}} size="s" borderRadius={6} />
      </Ux4gChipGroup>

      {/* 4. Notification Channels Card */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Notification channels</Text>
          <Text style={styles.cardSubtitle}>
            Choose which channels the portal can use to reach you.
          </Text>

          {/* SMS Row */}
          <View style={styles.channelRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.channelTitle}>SMS</Text>
              <Text style={styles.channelSubtitle}>+91 98765 43210</Text>
            </View>
            <Ux4gToggle checked={sms} onCheckedChange={setSms} />
          </View>
          <Ux4gDivider color="#E2E8F0" />

          {/* Email Row */}
          <View style={styles.channelRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.channelTitle}>Email</Text>
              <Text style={styles.channelSubtitle}>r•••••h@gmail.com</Text>
            </View>
            <Ux4gToggle checked={email} onCheckedChange={setEmail} />
          </View>
          <Ux4gDivider color="#E2E8F0" />

          {/* App Notifications Row */}
          <View style={styles.channelRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.channelTitle}>App notifications</Text>
              <Text style={styles.channelSubtitle}>Push alerts on this device</Text>
            </View>
            <Ux4gToggle checked={app} onCheckedChange={setApp} />
          </View>
          <Ux4gDivider color="#E2E8F0" />

          {/* WhatsApp Row */}
          <View style={styles.channelRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.channelTitle}>WhatsApp</Text>
              <Text style={styles.channelSubtitle}>
                Opt-in required — needs your explicit consent
              </Text>
            </View>
            <Ux4gToggle checked={whatsapp} onCheckedChange={setWhatsapp} />
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.poweredByText}>Powered by -</Text>
        <Image
          source={{ uri: '/Digital_India_logo.svg' }}
          style={styles.digitalIndiaLogo}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: UX4GColors.neutral0 },
  emblemLogo: { width: 32, height: 32 },
  headerDivider: { width: 1, height: 28, backgroundColor: UX4GColors.neutral300, marginHorizontal: 4 },
  unionLogo: { width: 32, height: 32 },
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#C0B3FF',
    backgroundColor: UX4GColors.neutral0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 18,
    color: UX4GColors.primary,
  },
  titleContainer: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 12 },
  titleText: { fontSize: 20, fontWeight: '700', color: '#0F172A', letterSpacing: -0.2 },
  subtitleText: { fontSize: 13, color: '#475569', marginTop: 6, lineHeight: 18 },
  tabsContainer: { paddingHorizontal: 16, gap: 8 },
  card: {
    backgroundColor: UX4GColors.neutral0,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    padding: 16,
  },
  cardTitle: { fontSize: 18, fontWeight: '700', color: '#0F172A' },
  cardSubtitle: { fontSize: 13, color: '#475569', marginTop: 4, marginBottom: 12, lineHeight: 18 },
  channelRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14 },
  channelTitle: { fontSize: 14, fontWeight: '700', color: '#0F172A' },
  channelSubtitle: { fontSize: 12.5, color: '#475569', marginTop: 2 },
  footer: { paddingVertical: 14, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 4 },
  poweredByText: { fontSize: 11, color: UX4GColors.neutral400 },
  digitalIndiaLogo: { height: 24, width: 80 },
});`;
  }, []);

  // Interactive Live Mockup for Web Preview
  const renderLiveMockup = () => {
    return (
      <div
        style={{
          width: 360,
          height: 760,
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: isDark
            ? '0 12px 32px rgba(0, 0, 0, 0.6), 0 0 0 1px #333333'
            : '0 12px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px #E5E7EB',
          backgroundColor: colors.bgScreen,
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* Official Header */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <Ux4gAppHeader
            title=""
            variant="light"
            elevation={0}
            useSafeArea={false}
            height={56}
            horizontalPadding={16}
            leadingSpacing={12}
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
                  height: 28,
                  backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
                  margin: '0 4px',
                }}
              />,
              <UnionLogo key="union" size={32} isDark={isDark} />,
            ]}
            actions={[
              {
                customWidget: (
                  <button
                    key="menu"
                    type="button"
                    onClick={() => {}}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      backgroundColor: isDark ? 'transparent' : '#FFFFFF',
                      border: `1.5px solid ${isDark ? UX4GColors.primary400 : '#C0B3FF'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M4 6h16M4 12h16M4 18h16" stroke={isDark ? UX4GColors.primary300 : UX4GColors.primary} strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </button>
                ),
              },
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

        {/* Content Body */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
            {/* Main Title & Subtitle */}
            <div style={{ padding: '16px 16px 10px 16px', flexShrink: 0 }}>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: colors.title,
                  margin: 0,
                  letterSpacing: '-0.2px',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Notification Preferences
              </h2>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  color: colors.subtitle,
                  margin: '6px 0 0 0',
                  lineHeight: '18px',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Control how and when the portal contacts you. Changes are saved automatically.
              </p>
            </div>

            {/* Horizontal Scrollable Filter Chips */}
            <div
              onMouseDown={(e) => {
                const el = e.currentTarget;
                let startX = e.pageX - el.offsetLeft;
                let scrollLeft = el.scrollLeft;
                let isDown = true;
                const onMouseMove = (me: MouseEvent) => {
                  if (!isDown) return;
                  me.preventDefault();
                  const x = me.pageX - el.offsetLeft;
                  const walk = (x - startX) * 1.5;
                  el.scrollLeft = scrollLeft - walk;
                };
                const onMouseUp = () => {
                  isDown = false;
                  window.removeEventListener('mousemove', onMouseMove);
                  window.removeEventListener('mouseup', onMouseUp);
                };
                window.addEventListener('mousemove', onMouseMove);
                window.addEventListener('mouseup', onMouseUp);
              }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                flexShrink: 0,
                minHeight: 44,
                gap: 8,
                overflowX: 'auto',
                padding: '4px 16px 12px 16px',
                cursor: 'grab',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
              }}
            >
              {TAB_CHIPS.map((chip, idx) => {
                const isSelected = activeTabIdx === idx;
                const activeBg = isDark ? UX4GColors.primary300 : UX4GColors.primary;
                const activeText = isDark ? UX4GColors.gray900 : UX4GColors.neutral0;
                const inactiveBg = isDark ? '#1E1E1E' : UX4GColors.neutral0;
                const inactiveBorder = isDark ? '#333333' : '#E2E8F0';
                const inactiveText = isDark ? '#D1D5DB' : '#1F2937';

                return (
                  <Ux4gChoiceChip
                    key={chip}
                    text={chip}
                    selected={isSelected}
                    onClick={() => setActiveTabIdx(idx)}
                    size="s"
                    borderRadius={6}
                    containerStyle={{
                      backgroundColor: isSelected ? activeBg : inactiveBg,
                      borderColor: isSelected ? activeBg : inactiveBorder,
                      borderWidth: 1,
                    }}
                    textStyle={{
                      color: isSelected ? activeText : inactiveText,
                      fontWeight: isSelected ? '600' : '500',
                    }}
                  />
                );
              })}
            </div>

            {/* Channel Preferences Rounded Card */}
            <div style={{ padding: '0 16px 16px 16px', flex: 1 }}>
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  border: `1.5px solid ${colors.cardBorder}`,
                  padding: '16px 16px 6px 16px',
                }}
              >
                {/* Inside Card Header */}
                <div style={{ marginBottom: 12 }}>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: colors.title,
                      margin: 0,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Notification channels
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 400,
                      color: colors.subtitle,
                      margin: '4px 0 0 0',
                      lineHeight: '18px',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Choose which channels the portal can use to reach you.
                  </p>
                </div>

                {/* 1. SMS */}
                <div
                  style={{
                    padding: '12px 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingRight: 12 }}>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: colors.title,
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      }}
                    >
                      SMS
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 400,
                        color: colors.subtitle,
                        marginTop: 2,
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      }}
                    >
                      +91 98765 43210
                    </span>
                  </div>
                  <Ux4gToggle checked={sms} onCheckedChange={setSms} />
                </div>
                <div style={{ height: 1, backgroundColor: colors.cardBorder }} />

                {/* 2. Email */}
                <div
                  style={{
                    padding: '12px 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingRight: 12 }}>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: colors.title,
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      }}
                    >
                      Email
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 400,
                        color: colors.subtitle,
                        marginTop: 2,
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      }}
                    >
                      r•••••h@gmail.com
                    </span>
                  </div>
                  <Ux4gToggle checked={email} onCheckedChange={setEmail} />
                </div>
                <div style={{ height: 1, backgroundColor: colors.cardBorder }} />

                {/* 3. App notifications */}
                <div
                  style={{
                    padding: '12px 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingRight: 12 }}>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: colors.title,
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      }}
                    >
                      App notifications
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 400,
                        color: colors.subtitle,
                        marginTop: 2,
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      }}
                    >
                      Push alerts on this device
                    </span>
                  </div>
                  <Ux4gToggle checked={app} onCheckedChange={setApp} />
                </div>
                <div style={{ height: 1, backgroundColor: colors.cardBorder }} />

                {/* 4. WhatsApp */}
                <div
                  style={{
                    padding: '12px 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingRight: 12 }}>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: colors.title,
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      }}
                    >
                      WhatsApp
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 400,
                        color: colors.subtitle,
                        marginTop: 2,
                        lineHeight: '17px',
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      }}
                    >
                      Opt-in required — needs your explicit consent
                    </span>
                  </div>
                  <Ux4gToggle checked={whatsapp} onCheckedChange={setWhatsapp} />
                </div>
              </div>
            </div>
          </div>

          {/* Brand Footer */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '14px 20px',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 400,
                color: colors.mutedText,
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
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
          <h1 className="wb-title">Notification Channels</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Channel preference toggles (SMS, Email, App notifications, WhatsApp) inside a rounded card. Fully compatible with light and dark mode.
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
