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

  // Toggle States for Channels
  const [sms, setSms] = useState<boolean>(true);
  const [email, setEmail] = useState<boolean>(true);
  const [app, setApp] = useState<boolean>(true);
  const [whatsapp, setWhatsapp] = useState<boolean>(false);

  // Exact color tokens matching Flutter notif_prefs_stories.dart
  const colors = useMemo(() => {
    return {
      bgScreen: isDark ? UX4GColors.neutral950 : UX4GColors.neutral0,
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      cardBorder: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300,
      cardBg: isDark ? '#1A1A1A' : UX4GColors.neutral0,
      title: isDark ? UX4GColors.neutral0 : '#111827',
      subtitle: isDark ? '#9CA3AF' : '#4B5563',
      tabActiveBg: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      tabActiveText: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      tabInactiveBg: isDark ? '#1E1E1E' : UX4GColors.neutral0,
      tabInactiveText: isDark ? '#D1D5DB' : '#1F2937',
      tabBorder: isDark ? '#333333' : '#E5E7EB',
      mutedText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
    };
  }, [isDark]);

  // Clean TSX code string matching Flutter notificationChannelsComponent
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
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const NotificationChannelsPattern = () => {
  const [sms, setSms] = useState(true);
  const [email, setEmail] = useState(true);
  const [app, setApp] = useState(true);
  const [whatsapp, setWhatsapp] = useState(false);

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
      />
      <Ux4gDivider color={UX4GColors.neutral200} />

      {/* 2. Main Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Notification Preferences</Text>
      </View>

      {/* 3. Horizontal Filter Chips */}
      <Ux4gChipGroup
        arrangement="horizontal"
        spacing={8}
        containerStyle={styles.tabsContainer}
      >
        <Ux4gChoiceChip text="Notification channels" selected={true} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Update Frequency" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Per Service Preferences" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Mandatory Notification" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="WhatsApp notification" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Manage all Subscriptions" selected={false} onClick={() => {}} size="s" borderRadius={6} />
      </Ux4gChipGroup>

      {/* 4. Notification Channels Card */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
        <View style={styles.card}>
          {/* SMS Row */}
          <View style={styles.channelRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.channelTitle}>SMS</Text>
              <Text style={styles.channelSubtitle}>+91 98765 43210</Text>
            </View>
            <Ux4gToggle checked={sms} onCheckedChange={setSms} />
          </View>
          <Ux4gDivider color={UX4GColors.neutral300} />

          {/* Email Row */}
          <View style={styles.channelRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.channelTitle}>Email</Text>
              <Text style={styles.channelSubtitle}>r•••••h@gmail.com</Text>
            </View>
            <Ux4gToggle checked={email} onCheckedChange={setEmail} />
          </View>
          <Ux4gDivider color={UX4GColors.neutral300} />

          {/* App Notifications Row */}
          <View style={styles.channelRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.channelTitle}>App notifications</Text>
              <Text style={styles.channelSubtitle}>Push alerts on this device</Text>
            </View>
            <Ux4gToggle checked={app} onCheckedChange={setApp} />
          </View>
          <Ux4gDivider color={UX4GColors.neutral300} />

          {/* WhatsApp Row */}
          <View style={styles.channelRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.channelTitle}>WhatsApp</Text>
              <Text style={styles.channelSubtitle}>Opt-in required</Text>
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
  titleContainer: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 12 },
  titleText: { fontSize: 18, fontWeight: '700', color: '#111827', letterSpacing: -0.2 },
  tabsContainer: { paddingHorizontal: 16, gap: 8 },
  tabButton: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 6, borderWidth: 1, borderColor: '#E5E7EB', backgroundColor: UX4GColors.neutral0 },
  tabActive: { backgroundColor: UX4GColors.primary, borderWidth: 0 },
  tabActiveText: { fontSize: 12, fontWeight: '600', color: UX4GColors.neutral0 },
  tabInactiveText: { fontSize: 12, fontWeight: '500', color: '#1F2937' },
  card: { backgroundColor: UX4GColors.neutral0, borderRadius: 12, borderWidth: 1, borderColor: UX4GColors.neutral300 },
  channelRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 14 },
  channelTitle: { fontSize: 14, fontWeight: '700', color: '#111827' },
  channelSubtitle: { fontSize: 12, color: '#4B5563', marginTop: 2 },
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
            {/* Title */}
            <div style={{ padding: '16px 16px 12px 16px' }}>
              <h2
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: colors.title,
                  margin: 0,
                  letterSpacing: '-0.2px',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Notification Preferences
              </h2>
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
                gap: 8,
                overflowX: 'auto',
                padding: '0 16px 16px 16px',
                cursor: 'grab',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
              }}
            >
              {TAB_CHIPS.map((chip, idx) => (
                <Ux4gChoiceChip
                  key={chip}
                  text={chip}
                  selected={activeTabIdx === idx}
                  onClick={() => setActiveTabIdx(idx)}
                  size="s"
                  borderRadius={6}
                />
              ))}
            </div>

            {/* Channel Preferences Rounded Card */}
            <div style={{ padding: '0 16px 16px 16px', flex: 1 }}>
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 12,
                  border: `1px solid ${colors.cardBorder}`,
                  overflow: 'hidden',
                }}
              >
                {/* 1. SMS */}
                <div
                  style={{
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                        fontSize: 12,
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
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                        fontSize: 12,
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
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                        fontSize: 12,
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
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                        fontSize: 12,
                        fontWeight: 400,
                        color: colors.subtitle,
                        marginTop: 2,
                        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      }}
                    >
                      Opt-in required
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
              padding: '14px 20px',
              display: 'flex',
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
