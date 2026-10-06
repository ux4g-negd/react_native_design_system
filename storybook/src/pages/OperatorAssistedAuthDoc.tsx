import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { CodeBlock } from '../components/CodeBlock';

interface OperatorAssistedAuthDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const OperatorAssistedAuthDoc: React.FC<OperatorAssistedAuthDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [consent, setConsent] = useState<boolean>(false);

  // Color Palette tokens matching UX4G Design System
  const colors = useMemo(() => {
    return {
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      defaultScreenBg: isDark ? UX4GColors.neutral950 : '#FFFFFF',
      cardScreenBg: isDark ? '#1C1335' : '#F3F0FF',
      cardBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      divider: isDark ? UX4GColors.neutral800 : '#F1F5F9',
      title: isDark ? UX4GColors.neutral50 : '#0F172A',
      subtitle: isDark ? UX4GColors.neutral400 : '#475569',
      primary: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      menuBorder: isDark ? UX4GColors.primary400 : '#C0B3FF',
      menuIcon: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      // Operator Card Tokens
      operatorCardBg: isDark ? 'rgba(91, 58, 230, 0.15)' : '#F4F0FF',
      operatorLabel: isDark ? UX4GColors.neutral400 : '#64748B',
      operatorName: isDark ? UX4GColors.neutral50 : '#0F172A',
      operatorDetails: isDark ? UX4GColors.neutral400 : '#64748B',
      // Checkbox & Buttons
      checkboxBorder: isDark ? UX4GColors.neutral600 : '#CBD5E1',
      checkboxBg: isDark ? UX4GColors.neutral800 : '#FFFFFF',
      btnPrimaryBg: isDark ? UX4GColors.primary : '#4F46E5',
    };
  }, [isDark]);

  // TSX Code Strings for Default and Card style variants
  const codeString = useMemo(() => {
    if (variant === 'card') {
      return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Ux4gAppHeader,
  UX4GColors,
} from 'ux4g-react-native-components';

export const OperatorAssistedAuthCardPattern = ({ isDark = false }: { isDark?: boolean }) => {
  const [consent, setConsent] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#1C1335' : '#F3F0FF' }]}>
      {/* App Header with Menu Action */}
      <Ux4gAppHeader
        variant={isDark ? 'dark' : 'light'}
        leadingWidgets={[
          <View style={styles.headerLeading} key="leading">
            <Image
              source={{ uri: '/national_emblem_logo.svg' }}
              style={[styles.emblemImage, isDark && { tintColor: '#FFFFFF' }]}
              resizeMode="contain"
            />
            <Image
              source={{ uri: '/Union.svg' }}
              style={styles.unionImage}
              resizeMode="contain"
            />
          </View>
        ]}
        actions={[
          <TouchableOpacity
            key="menu"
            style={[
              styles.menuBtn,
              {
                backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
                borderColor: isDark ? UX4GColors.primary400 : '#C0B3FF',
              },
            ]}
            onPress={() => {}}
          >
            <Text style={{ color: isDark ? UX4GColors.primary300 : UX4GColors.primary, fontSize: 18 }}>☰</Text>
          </TouchableOpacity>
        ]}
      />

      {/* Floating Card Container */}
      <View style={styles.cardWrapper}>
        <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' }]}>
          {/* Back Navigation */}
          <TouchableOpacity style={styles.backBtn} onPress={() => {}}>
            <Text style={[styles.backText, { color: isDark ? UX4GColors.primary300 : '#4F46E5' }]}>
              ← Back
            </Text>
          </TouchableOpacity>

          {/* Title & Subtitle */}
          <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : '#0F172A' }]}>
            Operator-Assisted Authentication
          </Text>
          <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : '#475569' }]}>
            A certified VLE operator will conduct this Aadhaar verification on your behalf with your consent.
          </Text>

          {/* VLE Operator Card */}
          <View style={[styles.operatorCard, { backgroundColor: isDark ? 'rgba(91, 58, 230, 0.15)' : '#F4F0FF' }]}>
            <Text style={[styles.operatorLabel, { color: isDark ? UX4GColors.neutral400 : '#64748B' }]}>
              VLE Operator
            </Text>
            <Text style={[styles.operatorName, { color: isDark ? UX4GColors.neutral50 : '#0F172A' }]}>
              Ramesh Kumar
            </Text>
            <Text style={[styles.operatorDetails, { color: isDark ? UX4GColors.neutral400 : '#64748B' }]}>
              ID: VLE-MH-2024-00387 · Certified by MeitY
            </Text>
          </View>

          {/* Consent Checkbox */}
          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => setConsent(!consent)}
            activeOpacity={0.8}
          >
            <View
              style={[
                styles.checkboxBox,
                {
                  backgroundColor: consent ? (isDark ? UX4GColors.primary : '#4F46E5') : '#FFFFFF',
                  borderColor: consent ? (isDark ? UX4GColors.primary : '#4F46E5') : (isDark ? UX4GColors.neutral600 : '#CBD5E1'),
                },
              ]}
            >
              {consent && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={[styles.checkboxLabel, { color: isDark ? UX4GColors.neutral200 : '#0F172A' }]}>
              I consent to operator-assisted Aadhaar authentication. My identity documents have been verified by the VLE.
              <Text style={{ color: '#DC2626' }}> *</Text>
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={[styles.divider, { backgroundColor: isDark ? UX4GColors.neutral800 : '#F1F5F9' }]} />

          {/* Action Buttons */}
          <View style={styles.actionRow}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={[styles.cancelText, { color: isDark ? UX4GColors.primary300 : '#4F46E5' }]}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.proceedBtn,
                {
                  backgroundColor: isDark ? UX4GColors.primary : '#4F46E5',
                  opacity: consent ? 1 : 0.6,
                },
              ]}
              onPress={() => {}}
              disabled={!consent}
            >
              <Text style={styles.proceedBtnText}>Proceed with Consent</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Digital India Footer outside card */}
      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
          Powered by -
        </Text>
        <Image
          source={{ uri: '/Digital_India_logo.svg' }}
          style={[styles.digitalIndiaLogo, isDark && { tintColor: '#FFFFFF' }]}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between' },
  headerLeading: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  emblemImage: { height: 32, width: 24 },
  unionImage: { height: 24, width: 28 },
  menuBtn: { width: 38, height: 38, borderRadius: 8, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center' },
  cardWrapper: { paddingHorizontal: 16, paddingTop: 16, flex: 1 },
  card: { borderRadius: 16, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 3 },
  backBtn: { alignSelf: 'flex-start', marginBottom: 16 },
  backText: { fontSize: 14, fontWeight: '600', fontFamily: 'Inter' },
  title: { fontSize: 22, fontWeight: '800', lineHeight: 28, marginBottom: 8, textAlign: 'left', fontFamily: 'Inter' },
  subtitle: { fontSize: 13.5, fontWeight: '400', lineHeight: 19, color: '#475569', marginBottom: 20, textAlign: 'left', fontFamily: 'Inter' },
  operatorCard: { width: '100%', padding: 16, borderRadius: 12, marginBottom: 20 },
  operatorLabel: { fontSize: 12.5, fontWeight: '400', fontFamily: 'Inter' },
  operatorName: { fontSize: 17, fontWeight: '800', marginVertical: 4, fontFamily: 'Inter' },
  operatorDetails: { fontSize: 12, fontWeight: '400', fontFamily: 'Inter' },
  checkboxRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, marginBottom: 20 },
  checkboxBox: { width: 20, height: 20, borderRadius: 4, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center', marginTop: 2 },
  checkmark: { color: '#FFFFFF', fontSize: 12, fontWeight: '700' },
  checkboxLabel: { fontSize: 13.5, lineHeight: 19, flex: 1, fontFamily: 'Inter' },
  divider: { height: 1, width: '100%', marginBottom: 16 },
  actionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cancelText: { fontSize: 14, fontWeight: '600', paddingHorizontal: 8, paddingVertical: 10, fontFamily: 'Inter' },
  proceedBtn: { paddingHorizontal: 20, height: 44, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  proceedBtnText: { color: '#FFFFFF', fontSize: 14, fontWeight: '600', fontFamily: 'Inter' },
  footer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, paddingBottom: 20 },
  footerText: { fontSize: 11, fontWeight: '400', fontFamily: 'Inter' },
  digitalIndiaLogo: { height: 22, width: 100 },
});`;
    }

    return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Ux4gAppHeader,
  UX4GColors,
} from 'ux4g-react-native-components';

export const OperatorAssistedAuthDefaultPattern = ({ isDark = false }: { isDark?: boolean }) => {
  const [consent, setConsent] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: isDark ? UX4GColors.neutral950 : '#FFFFFF' }]}>
      {/* App Header with Menu Action */}
      <Ux4gAppHeader
        variant={isDark ? 'dark' : 'light'}
        leadingWidgets={[
          <View style={styles.headerLeading} key="leading">
            <Image
              source={{ uri: '/national_emblem_logo.svg' }}
              style={[styles.emblemImage, isDark && { tintColor: '#FFFFFF' }]}
              resizeMode="contain"
            />
            <Image
              source={{ uri: '/Union.svg' }}
              style={styles.unionImage}
              resizeMode="contain"
            />
          </View>
        ]}
        actions={[
          <TouchableOpacity
            key="menu"
            style={[
              styles.menuBtn,
              {
                backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
                borderColor: isDark ? UX4GColors.primary400 : '#C0B3FF',
              },
            ]}
            onPress={() => {}}
          >
            <Text style={{ color: isDark ? UX4GColors.primary300 : UX4GColors.primary, fontSize: 18 }}>☰</Text>
          </TouchableOpacity>
        ]}
      />

      {/* Main Content Area */}
      <View style={styles.content}>
        {/* Back Navigation */}
        <TouchableOpacity style={styles.backBtn} onPress={() => {}}>
          <Text style={[styles.backText, { color: isDark ? UX4GColors.primary300 : '#4F46E5' }]}>
            ← Back
          </Text>
        </TouchableOpacity>

        {/* Title & Subtitle */}
        <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : '#0F172A' }]}>
          Operator-Assisted Authentication
        </Text>
        <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : '#475569' }]}>
          A certified VLE operator will conduct this Aadhaar verification on your behalf with your consent.
        </Text>

        {/* VLE Operator Card */}
        <View style={[styles.operatorCard, { backgroundColor: isDark ? 'rgba(91, 58, 230, 0.15)' : '#F4F0FF' }]}>
          <Text style={[styles.operatorLabel, { color: isDark ? UX4GColors.neutral400 : '#64748B' }]}>
            VLE Operator
          </Text>
          <Text style={[styles.operatorName, { color: isDark ? UX4GColors.neutral50 : '#0F172A' }]}>
            Ramesh Kumar
          </Text>
          <Text style={[styles.operatorDetails, { color: isDark ? UX4GColors.neutral400 : '#64748B' }]}>
            ID: VLE-MH-2024-00387 · Certified by MeitY
          </Text>
        </View>

        {/* Consent Checkbox */}
        <TouchableOpacity
          style={styles.checkboxRow}
          onPress={() => setConsent(!consent)}
          activeOpacity={0.8}
        >
          <View
            style={[
              styles.checkboxBox,
              {
                backgroundColor: consent ? (isDark ? UX4GColors.primary : '#4F46E5') : '#FFFFFF',
                borderColor: consent ? (isDark ? UX4GColors.primary : '#4F46E5') : (isDark ? UX4GColors.neutral600 : '#CBD5E1'),
              },
            ]}
          >
            {consent && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={[styles.checkboxLabel, { color: isDark ? UX4GColors.neutral200 : '#0F172A' }]}>
            I consent to operator-assisted Aadhaar authentication. My identity documents have been verified by the VLE.
            <Text style={{ color: '#DC2626' }}> *</Text>
          </Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Fixed Action Buttons & Footer Area */}
      <View style={styles.bottomSection}>
        {/* Divider */}
        <View style={[styles.divider, { backgroundColor: isDark ? UX4GColors.neutral800 : '#F1F5F9' }]} />

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={[styles.cancelText, { color: isDark ? UX4GColors.primary300 : '#4F46E5' }]}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.proceedBtn,
              {
                backgroundColor: isDark ? UX4GColors.primary : '#4F46E5',
                opacity: consent ? 1 : 0.6,
              },
            ]}
            onPress={() => {}}
            disabled={!consent}
          >
            <Text style={styles.proceedBtnText}>Proceed with Consent</Text>
          </TouchableOpacity>
        </View>

        {/* Digital India Footer with Gap */}
        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            Powered by -
          </Text>
          <Image
            source={{ uri: '/Digital_India_logo.svg' }}
            style={[styles.digitalIndiaLogo, isDark && { tintColor: '#FFFFFF' }]}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between' },
  headerLeading: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  emblemImage: { height: 32, width: 24 },
  unionImage: { height: 24, width: 28 },
  menuBtn: { width: 38, height: 38, borderRadius: 8, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center' },
  content: { padding: 20 },
  bottomSection: { paddingHorizontal: 20, paddingBottom: 20 },
  backBtn: { alignSelf: 'flex-start', marginBottom: 16 },
  backText: { fontSize: 14, fontWeight: '600', fontFamily: 'Inter' },
  title: { fontSize: 22, fontWeight: '800', lineHeight: 28, marginBottom: 8, textAlign: 'left', fontFamily: 'Inter' },
  subtitle: { fontSize: 13.5, fontWeight: '400', lineHeight: 19, color: '#475569', marginBottom: 20, textAlign: 'left', fontFamily: 'Inter' },
  operatorCard: { width: '100%', padding: 16, borderRadius: 12, marginBottom: 20 },
  operatorLabel: { fontSize: 12.5, fontWeight: '400', fontFamily: 'Inter' },
  operatorName: { fontSize: 17, fontWeight: '800', marginVertical: 4, fontFamily: 'Inter' },
  operatorDetails: { fontSize: 12, fontWeight: '400', fontFamily: 'Inter' },
  checkboxRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  checkboxBox: { width: 20, height: 20, borderRadius: 4, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center', marginTop: 2 },
  checkmark: { color: '#FFFFFF', fontSize: 12, fontWeight: '700' },
  checkboxLabel: { fontSize: 13.5, lineHeight: 19, flex: 1, fontFamily: 'Inter' },
  divider: { height: 1, width: '100%', marginBottom: 16 },
  actionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  cancelText: { fontSize: 14, fontWeight: '600', paddingHorizontal: 8, paddingVertical: 10, fontFamily: 'Inter' },
  proceedBtn: { paddingHorizontal: 20, height: 44, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  proceedBtnText: { color: '#FFFFFF', fontSize: 14, fontWeight: '600', fontFamily: 'Inter' },
  footer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 },
  footerText: { fontSize: 11, fontWeight: '400', fontFamily: 'Inter' },
  digitalIndiaLogo: { height: 22, width: 100 },
});`;
  }, [variant]);

  // Interactive Live Mockup for Web Preview
  const renderLiveMockup = () => {
    const isCard = variant === 'card';
    const bgScreenColor = isCard ? colors.cardScreenBg : colors.defaultScreenBg;

    return (
      <div
        style={{
          width: 360,
          minHeight: 760,
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: isDark
            ? '0 12px 32px rgba(0, 0, 0, 0.6), 0 0 0 1px #333333'
            : '0 12px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px #E5E7EB',
          backgroundColor: bgScreenColor,
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* Brand Header with Menu Action Button */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            boxShadow: isDark
              ? '0 2px 8px rgba(0, 0, 0, 0.4)'
              : '0 2px 8px rgba(0, 0, 0, 0.04)',
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
              <img
                key="union"
                src="/Union.svg"
                alt="Union"
                style={{
                  height: 24,
                  marginLeft: 4,
                }}
              />,
            ]}
            actions={[
              {
                customWidget: (
                  <div
                    key="menuAction"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 8,
                      border: `1.5px solid ${colors.menuBorder}`,
                      backgroundColor: colors.headerBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: 20,
                        color: colors.menuIcon,
                      }}
                    >
                      menu
                    </span>
                  </div>
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

        {/* Main Body */}
        {isCard ? (
          /* Card Style Variant (Image 3) */
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ padding: '16px' }}>
              {/* Floating Card Container */}
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: '24px 20px',
                  boxShadow: isDark
                    ? '0 4px 16px rgba(0, 0, 0, 0.4)'
                    : '0 4px 16px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Back Link */}
                <div
                  onClick={() => alert('Back pressed')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    color: colors.primary,
                    fontSize: 14,
                    fontWeight: 600,
                    marginBottom: 16,
                    cursor: 'pointer',
                    width: 'max-content',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                    arrow_back
                  </span>
                  <span>Back</span>
                </div>

                {/* Title & Subtitle */}
                <h2
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    lineHeight: 1.25,
                    color: colors.title,
                    margin: 0,
                    marginBottom: 8,
                    textAlign: 'left',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Operator-Assisted Authentication
                </h2>
                <p
                  style={{
                    fontSize: 13.5,
                    fontWeight: 400,
                    lineHeight: 1.4,
                    color: colors.subtitle,
                    margin: 0,
                    marginBottom: 20,
                    textAlign: 'left',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  A certified VLE operator will conduct this Aadhaar verification on your behalf with your consent.
                </p>

                {/* VLE Operator Card */}
                <div
                  style={{
                    width: '100%',
                    padding: '16px 18px',
                    borderRadius: 12,
                    backgroundColor: colors.operatorCardBg,
                    display: 'flex',
                    flexDirection: 'column',
                    boxSizing: 'border-box',
                    marginBottom: 20,
                  }}
                >
                  <span
                    style={{
                      fontSize: 12.5,
                      fontWeight: 500,
                      color: colors.operatorLabel,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    VLE Operator
                  </span>
                  <span
                    style={{
                      fontSize: 17,
                      fontWeight: 800,
                      color: colors.operatorName,
                      margin: '4px 0 8px 0',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Ramesh Kumar
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: colors.operatorDetails,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    ID: VLE-MH-2024-00387 · Certified by MeitY
                  </span>
                </div>

                {/* Consent Checkbox */}
                <div
                  onClick={() => setConsent(!consent)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    marginBottom: 20,
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      minWidth: 20,
                      borderRadius: 4,
                      border: `1.5px solid ${consent ? colors.btnPrimaryBg : colors.checkboxBorder}`,
                      backgroundColor: consent ? colors.btnPrimaryBg : colors.checkboxBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 2,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {consent && (
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 16, color: '#FFFFFF', fontWeight: 700 }}
                      >
                        check
                      </span>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.4,
                      color: isDark ? UX4GColors.neutral200 : '#0F172A',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    I consent to operator-assisted Aadhaar authentication. My identity documents have been verified by the VLE.
                    <span style={{ color: '#DC2626', marginLeft: 4 }}>*</span>
                  </span>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: 1,
                    backgroundColor: colors.divider,
                    width: '100%',
                    marginBottom: 16,
                  }}
                />

                {/* Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => alert('Cancelled')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: colors.primary,
                      fontSize: 14,
                      fontWeight: 600,
                      padding: '8px 12px',
                      cursor: 'pointer',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => alert('Proceeding with consent...')}
                    disabled={!consent}
                    style={{
                      backgroundColor: colors.btnPrimaryBg,
                      color: '#FFFFFF',
                      border: 'none',
                      padding: '12px 20px',
                      borderRadius: 10,
                      fontSize: 14,
                      fontWeight: 600,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      cursor: consent ? 'pointer' : 'not-allowed',
                      opacity: consent ? 1 : 0.6,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Proceed with Consent
                  </button>
                </div>
              </div>
            </div>

            {/* Digital India Footer outside card */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                paddingBottom: 20,
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 400, color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500, fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
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
        ) : (
          /* Default Layout Variant (Image 2) */
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '24px 20px 20px 20px',
              backgroundColor: colors.defaultScreenBg,
            }}
          >
            <div>
              {/* Back Link */}
              <div
                onClick={() => alert('Back pressed')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  color: colors.primary,
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 16,
                  cursor: 'pointer',
                  width: 'max-content',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                  arrow_back
                </span>
                <span>Back</span>
              </div>

              {/* Title & Subtitle */}
              <h2
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  lineHeight: 1.25,
                  color: colors.title,
                  margin: 0,
                  marginBottom: 8,
                  textAlign: 'left',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Operator-Assisted Authentication
              </h2>
              <p
                style={{
                  fontSize: 13.5,
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: colors.subtitle,
                  margin: 0,
                  marginBottom: 20,
                  textAlign: 'left',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                A certified VLE operator will conduct this Aadhaar verification on your behalf with your consent.
              </p>

              {/* VLE Operator Card */}
              <div
                style={{
                  width: '100%',
                  padding: '16px 18px',
                  borderRadius: 12,
                  backgroundColor: colors.operatorCardBg,
                  display: 'flex',
                  flexDirection: 'column',
                  boxSizing: 'border-box',
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    fontSize: 12.5,
                    fontWeight: 500,
                    color: colors.operatorLabel,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  VLE Operator
                </span>
                <span
                  style={{
                    fontSize: 17,
                    fontWeight: 800,
                    color: colors.operatorName,
                    margin: '4px 0 8px 0',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Ramesh Kumar
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 400,
                    color: colors.operatorDetails,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  ID: VLE-MH-2024-00387 · Certified by MeitY
                </span>
              </div>

              {/* Consent Checkbox */}
              <div
                onClick={() => setConsent(!consent)}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  marginBottom: 20,
                  cursor: 'pointer',
                  userSelect: 'none',
                }}
              >
                <div
                  style={{
                    width: 20,
                    height: 20,
                    minWidth: 20,
                    borderRadius: 4,
                    border: `1.5px solid ${consent ? colors.btnPrimaryBg : colors.checkboxBorder}`,
                    backgroundColor: consent ? colors.btnPrimaryBg : colors.checkboxBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 2,
                    transition: 'all 0.2s ease',
                  }}
                >
                  {consent && (
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 16, color: '#FFFFFF', fontWeight: 700 }}
                    >
                      check
                    </span>
                  )}
                </div>
                <span
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.4,
                    color: isDark ? UX4GColors.neutral200 : '#0F172A',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  I consent to operator-assisted Aadhaar authentication. My identity documents have been verified by the VLE.
                  <span style={{ color: '#DC2626', marginLeft: 4 }}>*</span>
                </span>
              </div>
            </div>

            {/* Bottom Actions & Footer Section with Gap */}
            <div>
              {/* Divider */}
              <div
                style={{
                  height: 1,
                  backgroundColor: colors.divider,
                  width: '100%',
                  marginBottom: 16,
                }}
              />

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 24,
                }}
              >
                <button
                  type="button"
                  onClick={() => alert('Cancelled')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: colors.primary,
                    fontSize: 14,
                    fontWeight: 600,
                    padding: '8px 12px',
                    cursor: 'pointer',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => alert('Proceeding with consent...')}
                  disabled={!consent}
                  style={{
                    backgroundColor: colors.btnPrimaryBg,
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '12px 20px',
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 600,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    cursor: consent ? 'pointer' : 'not-allowed',
                    opacity: consent ? 1 : 0.6,
                    transition: 'all 0.2s ease',
                  }}
                >
                  Proceed with Consent
                </button>
              </div>

              {/* Digital India Footer */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 400, color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500, fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
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
        )}
      </div>
    );
  };

  return (
    <div className={`wb-page ${isDark ? 'dark' : ''}`}>
      {/* Header Bar */}
      <div className="wb-header">
        <div>
          <div className="wb-breadcrumb">
            <span>Patterns</span> / <span>Identity and Access</span> / <span>Aadhaar Authentication Gate</span> / <span className="active">Operator-assisted authentication</span>
          </div>
          <h1 className="wb-title">Operator-assisted authentication</h1>
          <p className="wb-subtitle">
            Assisted mode allowing a verified Village Level Entrepreneur (VLE) or CSC operator to authenticate on behalf of a citizen with explicit digital consent capture.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
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
                {/* Variant Switch in Code Tab */}
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
                  filename={variant === 'card' ? 'OperatorAssistedAuthCardPattern.tsx' : 'OperatorAssistedAuthDefaultPattern.tsx'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatorAssistedAuthDoc;
