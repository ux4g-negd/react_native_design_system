import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gCheckbox } from '../../../src/components/checkbox/Checkbox';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface OperatorAssistedAuthDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const OperatorAssistedAuthDoc: React.FC<OperatorAssistedAuthDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [consent, setConsent] = useState<boolean>(false);

  // Color Palette tokens matching Flutter Design System
  const colors = useMemo(() => {
    return {
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      defaultScreenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
      cardScreenBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
      cardBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      title: isDark ? UX4GColors.neutral50 : UX4GColors.gray900,
      subtitle: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      primary: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      menuBorder: isDark ? UX4GColors.primary600 : UX4GColors.primary300,
      menuIcon: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      // Operator Card Tokens
      operatorCardBg: isDark ? UX4GColors.primary900 : UX4GColors.primary50,
      operatorLabel: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      operatorName: isDark ? UX4GColors.neutral50 : UX4GColors.gray900,
      operatorDetails: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
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
  Ux4gDivider,
  Ux4gButton,
  Ux4gCheckbox,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const OperatorAssistedAuthCardPattern = ({ isDark = false }: { isDark?: boolean }) => {
  const [consent, setConsent] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: isDark ? UX4GColors.primary800 : UX4GColors.primary100 }]}>
      {/* App Header with Menu Action */}
      <Ux4gAppHeader
        variant={isDark ? 'dark' : 'light'}
        leadingWidgets={[
          <View style={styles.headerLeading} key="leading">
            <Image
              source={{ uri: 'https://ux4g.gov.in/assets/img/emblem-dark.png' }}
              style={[styles.emblemImage, isDark && { tintColor: '#FFFFFF' }]}
              resizeMode="contain"
            />
            <View style={[styles.headerDivider, { backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300 }]} />
            <Text style={[styles.unionText, { color: isDark ? UX4GColors.primary300 : UX4GColors.primary }]}>
              UNION
            </Text>
          </View>
        ]}
        actions={[
          {
            customWidget: (
              <TouchableOpacity
                key="menu"
                style={[
                  styles.menuBtn,
                  {
                    backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
                    borderColor: isDark ? UX4GColors.primary600 : UX4GColors.primary300,
                  },
                ]}
                onPress={() => {}}
              >
                <Text style={{ color: isDark ? UX4GColors.primary300 : UX4GColors.primary, fontSize: 18 }}>☰</Text>
              </TouchableOpacity>
            ),
          },
        ]}
      />
      <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />

      {/* Floating Card Container */}
      <View style={styles.cardWrapper}>
        <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.gray900 : '#FFFFFF' }]}>
          {/* Back Button */}
          <View style={styles.backWrapper}>
            <Ux4gButton
              text="Back"
              onPress={() => {}}
              variant="ghost"
              size="small"
              height={36}
            />
          </View>
          <View style={styles.gap12} />

          <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
            Operator-Assisted Authentication
          </Text>
          <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            A certified VLE operator will conduct this Aadhaar verification on your behalf with your consent.
          </Text>
          <View style={styles.gap20} />

          {/* VLE Operator Info Card */}
          <View style={[styles.operatorCard, { backgroundColor: isDark ? UX4GColors.primary900 : UX4GColors.primary50 }]}>
            <Text style={[styles.operatorLabel, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
              VLE Operator
            </Text>
            <View style={styles.gap4} />
            <Text style={[styles.operatorName, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
              Ramesh Kumar
            </Text>
            <View style={styles.gap8} />
            <Text style={[styles.operatorDetails, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
              ID: VLE-MH-2024-00387 · Certified by MeitY
            </Text>
          </View>
          <View style={styles.gap20} />

          {/* Consent Checkbox */}
          <Ux4gCheckbox
            value={consent}
            onValueChange={setConsent}
            isRequired={true}
            label="I consent to operator-assisted Aadhaar authentication. My identity documents have been verified by the VLE."
          />
        </View>
      </View>

      <View style={styles.flex1} />

      {/* Footer Section */}
      <View style={styles.cardFooterSection}>
        <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />
        <View style={styles.gap6} />
        <View style={styles.actionRow}>
          <Ux4gButton
            text="Cancel"
            onPress={() => {}}
            variant="ghost"
            size="medium"
            height={48}
          />
          <Ux4gButton
            text="Proceed with Consent"
            onPress={() => {}}
            size="medium"
            height={48}
            disabled={!consent}
          />
        </View>
        <View style={styles.gap8} />

        {/* Digital India Footer */}
        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            Powered by -
          </Text>
          <Image
            source={{ uri: 'https://ux4g.gov.in/assets/img/digital-india-logo.png' }}
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
  headerLeading: { flexDirection: 'row', alignItems: 'center' },
  emblemImage: { height: 32, width: 24 },
  headerDivider: { width: 1, height: 24, marginHorizontal: 8 },
  unionText: { fontSize: 16, fontWeight: '700' },
  menuBtn: { width: 40, height: 40, borderRadius: 10, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center' },
  cardWrapper: { paddingHorizontal: 16, paddingTop: 16 },
  card: { borderRadius: 16, paddingHorizontal: 20, paddingVertical: 20, elevation: 4 },
  backWrapper: { alignSelf: 'flex-start' },
  flex1: { flex: 1 },
  gap4: { height: 4 },
  gap6: { height: 6 },
  gap8: { height: 8 },
  gap12: { height: 12 },
  gap20: { height: 20 },
  title: { fontSize: 26, fontWeight: '800', lineHeight: 31.2, letterSpacing: -0.3, marginBottom: 8, fontFamily: 'Inter' },
  subtitle: { fontSize: 14, fontWeight: '400', lineHeight: 18.9, fontFamily: 'Inter' },
  operatorCard: { width: '100%', padding: 20, borderRadius: 12 },
  operatorLabel: { fontSize: 13, fontWeight: '400', fontFamily: 'Inter' },
  operatorName: { fontSize: 18, fontWeight: '800', fontFamily: 'Inter' },
  operatorDetails: { fontSize: 12, fontWeight: '400', fontFamily: 'Inter' },
  cardFooterSection: { paddingHorizontal: 20, paddingBottom: 20 },
  actionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  footer: { alignItems: 'center' },
  footerText: { fontSize: 11, fontWeight: '400', marginBottom: 4, fontFamily: 'Inter' },
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
  Ux4gDivider,
  Ux4gButton,
  Ux4gCheckbox,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const OperatorAssistedAuthDefaultPattern = ({ isDark = false }: { isDark?: boolean }) => {
  const [consent, setConsent] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50 }]}>
      {/* App Header with Menu Action */}
      <Ux4gAppHeader
        variant={isDark ? 'dark' : 'light'}
        leadingWidgets={[
          <View style={styles.headerLeading} key="leading">
            <Image
              source={{ uri: 'https://ux4g.gov.in/assets/img/emblem-dark.png' }}
              style={[styles.emblemImage, isDark && { tintColor: '#FFFFFF' }]}
              resizeMode="contain"
            />
            <View style={[styles.headerDivider, { backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300 }]} />
            <Text style={[styles.unionText, { color: isDark ? UX4GColors.primary300 : UX4GColors.primary }]}>
              UNION
            </Text>
          </View>
        ]}
        actions={[
          {
            customWidget: (
              <TouchableOpacity
                key="menu"
                style={[
                  styles.menuBtn,
                  {
                    backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
                    borderColor: isDark ? UX4GColors.primary600 : UX4GColors.primary300,
                  },
                ]}
                onPress={() => {}}
              >
                <Text style={{ color: isDark ? UX4GColors.primary300 : UX4GColors.primary, fontSize: 18 }}>☰</Text>
              </TouchableOpacity>
            ),
          },
        ]}
      />
      <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />

      {/* Main Content */}
      <View style={styles.content}>
        {/* Back Button */}
        <View style={styles.backWrapper}>
          <Ux4gButton
            text="Back"
            onPress={() => {}}
            variant="ghost"
            size="small"
            height={36}
          />
        </View>
        <View style={styles.gap16} />

        <Text style={[styles.title, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
          Operator-Assisted Authentication
        </Text>
        <Text style={[styles.subtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
          A certified VLE operator will conduct this Aadhaar verification on your behalf with your consent.
        </Text>
        <View style={styles.gap24} />

        {/* VLE Operator Info Card */}
        <View style={[styles.operatorCard, { backgroundColor: isDark ? UX4GColors.primary900 : UX4GColors.primary50 }]}>
          <Text style={[styles.operatorLabel, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            VLE Operator
          </Text>
          <View style={styles.gap4} />
          <Text style={[styles.operatorName, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
            Ramesh Kumar
          </Text>
          <View style={styles.gap8} />
          <Text style={[styles.operatorDetails, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            ID: VLE-MH-2024-00387 · Certified by MeitY
          </Text>
        </View>
        <View style={styles.gap24} />

        {/* Consent Checkbox */}
        <Ux4gCheckbox
          value={consent}
          onValueChange={setConsent}
          isRequired={true}
          label="I consent to operator-assisted Aadhaar authentication. My identity documents have been verified by the VLE."
        />
      </View>

      {/* Footer Section */}
      <View style={styles.footerSection}>
        <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />
        <View style={styles.gap6} />
        <View style={styles.actionRow}>
          <Ux4gButton
            text="Cancel"
            onPress={() => {}}
            variant="ghost"
            size="medium"
            height={48}
          />
          <Ux4gButton
            text="Proceed with Consent"
            onPress={() => {}}
            size="medium"
            height={48}
            disabled={!consent}
          />
        </View>
        <View style={styles.gap8} />

        {/* Digital India Footer */}
        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            Powered by -
          </Text>
          <Image
            source={{ uri: 'https://ux4g.gov.in/assets/img/digital-india-logo.png' }}
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
  headerLeading: { flexDirection: 'row', alignItems: 'center' },
  emblemImage: { height: 32, width: 24 },
  headerDivider: { width: 1, height: 24, marginHorizontal: 8 },
  unionText: { fontSize: 16, fontWeight: '700' },
  menuBtn: { width: 40, height: 40, borderRadius: 10, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center' },
  content: { paddingHorizontal: 20, paddingTop: 20, flex: 1 },
  backWrapper: { alignSelf: 'flex-start' },
  gap4: { height: 4 },
  gap6: { height: 6 },
  gap8: { height: 8 },
  gap16: { height: 16 },
  gap24: { height: 24 },
  title: { fontSize: 26, fontWeight: '800', lineHeight: 31.2, letterSpacing: -0.3, marginBottom: 8, fontFamily: 'Inter' },
  subtitle: { fontSize: 14, fontWeight: '400', lineHeight: 18.9, fontFamily: 'Inter' },
  operatorCard: { width: '100%', padding: 20, borderRadius: 12 },
  operatorLabel: { fontSize: 13, fontWeight: '400', fontFamily: 'Inter' },
  operatorName: { fontSize: 18, fontWeight: '800', fontFamily: 'Inter' },
  operatorDetails: { fontSize: 12, fontWeight: '400', fontFamily: 'Inter' },
  footerSection: { paddingHorizontal: 20, paddingBottom: 20 },
  actionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  footer: { alignItems: 'center' },
  footerText: { fontSize: 11, fontWeight: '400', marginBottom: 4, fontFamily: 'Inter' },
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
            actions={[
              {
                customWidget: (
                  <div
                    key="menuAction"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
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
          /* Card Style Variant */
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: colors.cardScreenBg,
              justifyContent: 'space-between',
            }}
          >
            <div style={{ padding: '0 16px' }}>
              <div style={{ height: 16 }} />

              {/* Floating Card Container */}
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: '20px',
                  boxShadow: isDark
                    ? '0 4px 16px rgba(0, 0, 0, 0.4)'
                    : '0 4px 16px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Back Button */}
                <div style={{ alignSelf: 'flex-start', marginBottom: 12 }}>
                  <Ux4gButton
                    text="Back"
                    onPress={() => alert('Back pressed')}
                    variant="ghost"
                    size="small"
                    height={36}
                    leadingIcon={
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 18, color: colors.primary }}
                      >
                        arrow_back
                      </span>
                    }
                  />
                </div>

                <h2
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    lineHeight: 1.2,
                    letterSpacing: '-0.3px',
                    color: colors.title,
                    margin: 0,
                    marginBottom: 8,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Operator-Assisted Authentication
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 1.35,
                    color: colors.subtitle,
                    margin: 0,
                    marginBottom: 20,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  A certified VLE operator will conduct this Aadhaar verification on your behalf with your consent.
                </p>

                {/* VLE Operator Info Card */}
                <div
                  style={{
                    width: '100%',
                    padding: 20,
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
                      fontSize: 13,
                      fontWeight: 400,
                      color: colors.operatorLabel,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    VLE Operator
                  </span>
                  <div style={{ height: 4 }} />
                  <span
                    style={{
                      fontSize: 18,
                      fontWeight: 800,
                      color: colors.operatorName,
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Ramesh Kumar
                  </span>
                  <div style={{ height: 8 }} />
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
                <Ux4gCheckbox
                  value={consent}
                  onChanged={(val) => setConsent(!!val)}
                  isRequired={true}
                  label="I consent to operator-assisted Aadhaar authentication. My identity documents have been verified by the VLE."
                />
              </div>
            </div>

            {/* Action Footer */}
            <div style={{ padding: '12px 20px 20px 20px' }}>
              <div
                style={{
                  height: 1,
                  backgroundColor: colors.border,
                  width: '100%',
                  marginBottom: 6,
                }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Ux4gButton
                  text="Cancel"
                  onPress={() => alert('Cancelled')}
                  variant="ghost"
                  size="medium"
                  height={48}
                />
                <Ux4gButton
                  text="Proceed with Consent"
                  onPress={() => alert('Proceeding with consent...')}
                  size="medium"
                  height={48}
                  enabled={consent}
                />
              </div>
              <div style={{ height: 8 }} />

              {/* Digital India Footer */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 4,
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
        ) : (
          /* Default Layout Variant */
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '20px 20px 20px 20px',
              backgroundColor: colors.defaultScreenBg,
            }}
          >
            <div>
              {/* Back Button */}
              <div style={{ alignSelf: 'flex-start', marginBottom: 16 }}>
                <Ux4gButton
                  text="Back"
                  onPress={() => alert('Back pressed')}
                  variant="ghost"
                  size="small"
                  height={36}
                  leadingIcon={
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, color: colors.primary }}
                    >
                      arrow_back
                    </span>
                  }
                />
              </div>

              <h2
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: '-0.3px',
                  color: colors.title,
                  margin: 0,
                  marginBottom: 8,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                Operator-Assisted Authentication
              </h2>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.35,
                  color: colors.subtitle,
                  margin: 0,
                  marginBottom: 24,
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
              >
                A certified VLE operator will conduct this Aadhaar verification on your behalf with your consent.
              </p>

              {/* VLE Operator Info Card */}
              <div
                style={{
                  width: '100%',
                  padding: 20,
                  borderRadius: 12,
                  backgroundColor: colors.operatorCardBg,
                  display: 'flex',
                  flexDirection: 'column',
                  boxSizing: 'border-box',
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 400,
                    color: colors.operatorLabel,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  VLE Operator
                </span>
                <div style={{ height: 4 }} />
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: colors.operatorName,
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  Ramesh Kumar
                </span>
                <div style={{ height: 8 }} />
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
              <Ux4gCheckbox
                value={consent}
                onChanged={(val) => setConsent(!!val)}
                isRequired={true}
                label="I consent to operator-assisted Aadhaar authentication. My identity documents have been verified by the VLE."
              />
            </div>

            {/* Bottom Section */}
            <div>
              <div
                style={{
                  height: 1,
                  backgroundColor: colors.border,
                  width: '100%',
                  marginBottom: 6,
                }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Ux4gButton
                  text="Cancel"
                  onPress={() => alert('Cancelled')}
                  variant="ghost"
                  size="medium"
                  height={48}
                />
                <Ux4gButton
                  text="Proceed with Consent"
                  onPress={() => alert('Proceeding with consent...')}
                  size="medium"
                  height={48}
                  enabled={consent}
                />
              </div>
              <div style={{ height: 8 }} />

              {/* Digital India Footer */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 4,
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
            Pattern for Aadhaar verification conducted by a certified VLE operator. Features a back button, operator details card, and a mandatory consent checkbox. Action footer allows proceeding with consent or cancelling.
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
