import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gCheckbox } from '../../../src/components/checkbox/Checkbox';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gChoiceChip, Ux4gChipGroup } from '../../../src/components/chips/Chips';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface WhatsAppConsentDocProps {
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

const BENEFITS = [
  'Application status changes',
  'Appointment reminders (D-1 and H-1)',
  'Action-required alerts with quick links',
];

export const WhatsAppConsentDoc: React.FC<WhatsAppConsentDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [activeTabIdx, setActiveTabIdx] = useState<number>(4);
  const [consented, setConsented] = useState<boolean>(false);
  const [enabledSuccess, setEnabledSuccess] = useState<boolean>(false);

  // Colors matching Flutter notif_prefs_stories.dart
  const colors = useMemo(() => {
    const primary = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
    return {
      bgScreen: isDark ? UX4GColors.neutral950 : UX4GColors.neutral0,
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      cardBorder: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300,
      cardBg: isDark ? '#1A1A1A' : UX4GColors.neutral0,
      title: isDark ? UX4GColors.neutral0 : '#111827',
      primary,
      bannerBg: isDark ? UX4GColors.green800 : UX4GColors.green100,
      bannerBorder: isDark ? UX4GColors.green600 : UX4GColors.green300,
      bannerText: isDark ? '#ECFDF5' : '#111827',
      mutedText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
    };
  }, [isDark]);

  // Clean TSX code string matching Flutter whatsAppConsentComponent
  const codeString = useMemo(() => {
    return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gCheckbox,
  Ux4gButton,
  Ux4gChoiceChip,
  Ux4gChipGroup,
  Ux4gDivider,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const WhatsAppConsentPattern = () => {
  const [consented, setConsented] = useState(false);

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
      <Ux4gChipGroup arrangement="horizontal" spacing={8} containerStyle={styles.tabsContainer}>
        <Ux4gChoiceChip text="Notification channels" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Update Frequency" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Per Service Preferences" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Mandatory Notification" selected={false} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="WhatsApp notification" selected={true} onClick={() => {}} size="s" borderRadius={6} />
        <Ux4gChoiceChip text="Manage all Subscriptions" selected={false} onClick={() => {}} size="s" borderRadius={6} />
      </Ux4gChipGroup>

      {/* 4. WhatsApp Consent Card */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
        <View style={styles.card}>
          {/* Green Benefit Banner */}
          <View style={styles.banner}>
            <Text style={styles.bannerTitle}>What you will receive on WhatsApp:</Text>
            <View style={styles.benefitList}>
              <View style={styles.benefitRow}>
                <Text style={styles.checkIcon}>✓</Text>
                <Text style={styles.benefitText}>Application status changes</Text>
              </View>
              <View style={styles.benefitRow}>
                <Text style={styles.checkIcon}>✓</Text>
                <Text style={styles.benefitText}>Appointment reminders (D-1 and H-1)</Text>
              </View>
              <View style={styles.benefitRow}>
                <Text style={styles.checkIcon}>✓</Text>
                <Text style={styles.benefitText}>Action-required alerts with quick links</Text>
              </View>
            </View>
          </View>

          <View style={{ height: 20 }} />

          {/* Consent Checkbox */}
          <Ux4gCheckbox
            value={consented}
            onChanged={(val) => setConsented(val ?? false)}
            label="I consent to receiving notifications on WhatsApp at +91 98765 43210."
            isRequired={true}
            description="You can withdraw this consent at any time. This checkbox is never pre-ticked (DPDP Act 2023)."
          />

          <View style={{ height: 20 }} />

          {/* Action Button */}
          <Ux4gButton
            text="Enable WhatsApp notifications"
            onPress={() => {}}
            enabled={consented}
            width="100%"
            height={48}
            backgroundColor={UX4GColors.primary}
            borderRadius={8}
          />
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
  tabsContainer: { paddingHorizontal: 16 },
  card: { backgroundColor: UX4GColors.neutral0, borderRadius: 12, borderWidth: 1, borderColor: UX4GColors.neutral300, padding: 16 },
  banner: { backgroundColor: UX4GColors.green100, borderRadius: 8, borderWidth: 1, borderColor: UX4GColors.green300, padding: 16 },
  bannerTitle: { fontSize: 13, fontWeight: '700', color: '#111827' },
  benefitList: { marginTop: 12, gap: 10 },
  benefitRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 8 },
  checkIcon: { fontSize: 14, color: '#111827', fontWeight: '700' },
  benefitText: { fontSize: 12, color: '#111827', flex: 1 },
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
              {TAB_CHIPS.map((chip, idx) => {
                const isSelected = activeTabIdx === idx;
                const activeBg = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
                const activeText = isDark ? UX4GColors.gray900 : UX4GColors.neutral0;
                const inactiveBg = isDark ? '#1E1E1E' : UX4GColors.neutral0;
                const inactiveBorder = isDark ? '#333333' : '#E5E7EB';
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

            {/* WhatsApp Consent Card */}
            <div style={{ padding: '0 16px 16px 16px', flex: 1 }}>
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 12,
                  border: `1px solid ${colors.cardBorder}`,
                  padding: 16,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Green Benefit Banner */}
                <div
                  style={{
                    backgroundColor: colors.bannerBg,
                    border: `1px solid ${colors.bannerBorder}`,
                    borderRadius: 8,
                    padding: 16,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: colors.bannerText,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    What you will receive on WhatsApp:
                  </span>

                  <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {BENEFITS.map((benefit) => (
                      <div
                        key={benefit}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 8,
                        }}
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{
                            fontSize: 16,
                            color: colors.bannerText,
                            lineHeight: '18px',
                          }}
                        >
                          check
                        </span>
                        <span
                          style={{
                            fontSize: 12,
                            fontWeight: 400,
                            color: colors.bannerText,
                            lineHeight: '18px',
                            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                          }}
                        >
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ height: 20 }} />

                {/* Consent Checkbox */}
                <Ux4gCheckbox
                  value={consented}
                  onChanged={(val) => setConsented(val ?? false)}
                  label="I consent to receiving notifications on WhatsApp at +91 98765 43210."
                  isRequired={true}
                  description="You can withdraw this consent at any time. This checkbox is never pre-ticked (DPDP Act 2023)."
                />

                <div style={{ height: 20 }} />

                {/* Enable Button */}
                <Ux4gButton
                  text={enabledSuccess ? 'WhatsApp notifications enabled!' : 'Enable WhatsApp notifications'}
                  onPress={() => {
                    if (consented) {
                      setEnabledSuccess(true);
                    }
                  }}
                  enabled={consented}
                  width="100%"
                  height={48}
                  backgroundColor={colors.primary}
                  borderRadius={8}
                />
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
          <h1 className="wb-title">WhatsApp Consent</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Opt-in flow for WhatsApp notification delivery with DPDP Act 2023 explicit consent rules. Fully compatible with light and dark mode.
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
