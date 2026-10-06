import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface ConsentManagementDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

export const ConsentManagementDoc: React.FC<ConsentManagementDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');
  const [documentsExpanded, setDocumentsExpanded] = useState(true);

  const colors = useMemo(() => {
    return {
      screenBg: variant === 'Card style'
        ? (isDark ? UX4GColors.primary900 : '#ECE8FF')
        : (isDark ? UX4GColors.neutral900 : '#FFFFFF'),
      cardBg: isDark ? UX4GColors.neutral800 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral700 : '#F0F0F2',
      titleColor: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      primary: isDark ? UX4GColors.primary300 : UX4GColors.primary,
      primaryLight: isDark ? UX4GColors.primary400 : UX4GColors.primary300,
      sharedTagBg: isDark ? '#135200' : '#E6F7E6',
      sharedTagText: isDark ? '#95DE64' : '#237804',
      notSharedTagBg: isDark ? '#262626' : '#F0F0F0',
      notSharedTagText: isDark ? '#8C8C8C' : '#595959',
      partlySharedTagBg: isDark ? '#592D00' : '#FFE7BA',
      partlySharedTagText: isDark ? '#FFC973' : '#AD4E00',
      footerText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
    };
  }, [isDark, variant]);

  const codeString = useMemo(() => {
    const isCard = variant === 'Card style';
    return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Ux4gButton,
  Ux4gTag,
  UX4GColors,
} from 'ux4g-react-native-components';

export const ConsentManagementPattern = ({
  isDark = ${isDark},
  variant = '${variant}',
}: {
  isDark?: boolean;
  variant?: 'Default' | 'Card style';
}) => {
  const [documentsExpanded, setDocumentsExpanded] = useState(true);

  const isCard = variant === 'Card style';

  const renderTag = (status: 'Shared' | 'Not shared' | 'Partly shared') => {
    let bg = isDark ? '#135200' : '#E6F7E6';
    let text = isDark ? '#95DE64' : '#237804';

    if (status === 'Not shared') {
      bg = isDark ? '#262626' : '#F0F0F0';
      text = isDark ? '#8C8C8C' : '#595959';
    } else if (status === 'Partly shared') {
      bg = isDark ? '#592D00' : '#FFE7BA';
      text = isDark ? '#FFC973' : '#AD4E00';
    }

    return (
      <View style={[styles.tag, { backgroundColor: bg }]}>
        <Text style={[styles.tagText, { color: text }]}>{status}</Text>
      </View>
    );
  };

  return (
    <View style={[styles.screen, { backgroundColor: isDark ? UX4GColors.neutral900 : (isCard ? '#ECE8FF' : '#FFFFFF') }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF', borderBottomColor: isDark ? UX4GColors.neutral800 : '#F0F0F2' }]}>
        <View style={styles.headerLeft}>
          <Image source={{ uri: '/national_emblem_logo.svg' }} style={styles.emblemLogo} resizeMode="contain" />
          <View style={[styles.headerDivider, { backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300 }]} />
          <Image source={{ uri: '/Union.svg' }} style={[styles.unionLogo, { tintColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600 }]} resizeMode="contain" />
        </View>
        <TouchableOpacity style={[styles.menuBtn, { borderColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200 }]}>
          <Text style={[styles.menuIcon, { color: isDark ? UX4GColors.primary300 : UX4GColors.primary }]}>☰</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={isCard ? [styles.cardContainer, { backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF' }] : styles.flatContainer}>
          {/* Main Title */}
          <Text style={[styles.mainTitle, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
            You gave consent to share the following information
          </Text>

          {/* 1. Documents Section (Collapsible) */}
          <View style={styles.itemContainer}>
            <View style={styles.rowBetween}>
              <TouchableOpacity
                onPress={() => setDocumentsExpanded(!documentsExpanded)}
                style={styles.accordionHeader}
              >
                <Text style={[styles.chevronIcon, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
                  {documentsExpanded ? '▼' : '▶'}
                </Text>
                <Text style={[styles.itemTitle, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900, marginLeft: 8 }]}>
                  Documents
                </Text>
              </TouchableOpacity>
              {renderTag('Partly shared')}
            </View>

            {documentsExpanded && (
              <View style={styles.subItemsList}>
                <View style={styles.subItemRow}>
                  <Text style={[styles.subItemText, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
                    Aadhaar Card
                  </Text>
                  {renderTag('Shared')}
                </View>
                <View style={styles.subItemRow}>
                  <Text style={[styles.subItemText, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
                    PAN
                  </Text>
                  {renderTag('Not shared')}
                </View>
                <View style={styles.subItemRow}>
                  <Text style={[styles.subItemText, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
                    Driving License
                  </Text>
                  {renderTag('Not shared')}
                </View>
                <TouchableOpacity style={{ marginTop: 8 }}>
                  <Text style={[styles.linkText, { color: isDark ? UX4GColors.primary300 : UX4GColors.primary }]}>
                    View all
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={[styles.separator, { backgroundColor: isDark ? UX4GColors.neutral700 : '#F0F0F2' }]} />

          {/* 2. Profile Information */}
          <View style={styles.itemRowWithIcon}>
            <View style={styles.iconWithText}>
              <Text style={[styles.itemIcon, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>👤</Text>
              <View style={{ marginLeft: 12 }}>
                <Text style={[styles.itemTitle, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
                  Profile information
                </Text>
                <Text style={[styles.subtleText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
                  Name, Date of Birth, Gender
                </Text>
              </View>
            </View>
            {renderTag('Shared')}
          </View>
          <View style={[styles.separator, { backgroundColor: isDark ? UX4GColors.neutral700 : '#F0F0F2' }]} />

          {/* 3. Get your email */}
          <View style={styles.itemRowWithIcon}>
            <View style={styles.iconWithText}>
              <Text style={[styles.itemIcon, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>✉️</Text>
              <View style={{ marginLeft: 12 }}>
                <Text style={[styles.itemTitle, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
                  Get your email
                </Text>
              </View>
            </View>
            {renderTag('Shared')}
          </View>
          <View style={[styles.separator, { backgroundColor: isDark ? UX4GColors.neutral700 : '#F0F0F2' }]} />

          {/* 4. Get your profile picture */}
          <View style={styles.itemRowWithIcon}>
            <View style={styles.iconWithText}>
              <Text style={[styles.itemIcon, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>👤</Text>
              <View style={{ marginLeft: 12 }}>
                <Text style={[styles.itemTitle, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
                  Get your profile picture
                </Text>
              </View>
            </View>
            {renderTag('Not shared')}
          </View>
          <View style={[styles.separator, { backgroundColor: isDark ? UX4GColors.neutral700 : '#F0F0F2' }]} />

          {/* 5. Location */}
          <View style={styles.itemRowWithIcon}>
            <View style={styles.iconWithText}>
              <Text style={[styles.itemIcon, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>📍</Text>
              <View style={{ marginLeft: 12 }}>
                <Text style={[styles.itemTitle, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
                  Location
                </Text>
              </View>
            </View>
            {renderTag('Not shared')}
          </View>
          <View style={[styles.separator, { backgroundColor: isDark ? UX4GColors.neutral700 : '#F0F0F2' }]} />

          {/* 6. Consent Validity Date */}
          <View style={styles.itemRowWithIcon}>
            <View style={styles.iconWithText}>
              <Text style={[styles.itemIcon, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>📅</Text>
              <View style={{ marginLeft: 12 }}>
                <Text style={[styles.itemTitle, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
                  Consent validity date
                </Text>
                <Text style={[styles.subtleText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
                  (Today + 30 days)
                </Text>
                <Text style={[styles.dateText, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
                  08-Oct-2026
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text style={[styles.linkText, { color: isDark ? UX4GColors.primary300 : UX4GColors.primary }]}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>

          {/* Notice Text */}
          <View style={styles.noticeContainer}>
            <Text style={[styles.noticeText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
              Consent validity is subject to applicable laws.
            </Text>
            <Text style={[styles.noticeText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
              By selecting Allow, you are giving consent to share the items above.
            </Text>
          </View>

          {/* View Full Consent History Link */}
          <TouchableOpacity style={styles.historyLinkContainer}>
            <Text style={[styles.historyLinkText, { color: isDark ? UX4GColors.primary300 : UX4GColors.primary }]}>
              View full consent history ↗
            </Text>
          </TouchableOpacity>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <Ux4gButton
              text="Close"
              variant="filled"
              size="large"
              style={{
                width: '100%',
                height: 48,
                backgroundColor: isDark ? UX4GColors.primary300 : UX4GColors.primary,
              }}
              contentColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral0}
            />
            <Ux4gButton
              text="Revoke consent"
              variant="outline"
              size="large"
              style={{
                width: '100%',
                height: 48,
                borderColor: isDark ? UX4GColors.primary300 : '#A391FF',
                backgroundColor: 'transparent',
              }}
              contentColor={isDark ? UX4GColors.primary300 : UX4GColors.primary}
            />
          </View>
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
  mainTitle: { fontSize: 17, fontWeight: '700', lineHeight: 23, marginBottom: 18 },
  itemContainer: { paddingVertical: 4 },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  accordionHeader: { flexDirection: 'row', alignItems: 'center' },
  chevronIcon: { fontSize: 12 },
  itemTitle: { fontSize: 14, fontWeight: '700' },
  subItemsList: { paddingLeft: 24, marginTop: 12, gap: 12 },
  subItemRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  subItemText: { fontSize: 13 },
  linkText: { fontSize: 13, fontWeight: '600' },
  separator: { height: 1, marginVertical: 14 },
  itemRowWithIcon: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 4 },
  iconWithText: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  itemIcon: { fontSize: 20 },
  subtleText: { fontSize: 12, marginTop: 2 },
  dateText: { fontSize: 12, marginTop: 2, fontWeight: '500' },
  noticeContainer: { marginTop: 20, marginBottom: 12 },
  noticeText: { fontSize: 11, lineHeight: 16 },
  historyLinkContainer: { marginBottom: 16 },
  historyLinkText: { fontSize: 13, fontWeight: '600' },
  tag: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4 },
  tagText: { fontSize: 11.5, fontWeight: '600' },
  actionButtons: { gap: 10, marginTop: 8 },
  footer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, marginVertical: 24 },
  poweredByText: { fontSize: 11, fontWeight: '500' },
  digitalIndiaLogo: { height: 22, width: 80 },
});
`;
  }, [isDark, variant]);

  const renderTag = (status: 'Shared' | 'Not shared' | 'Partly shared') => {
    let bg = colors.sharedTagBg;
    let text = colors.sharedTagText;

    if (status === 'Not shared') {
      bg = colors.notSharedTagBg;
      text = colors.notSharedTagText;
    } else if (status === 'Partly shared') {
      bg = colors.partlySharedTagBg;
      text = colors.partlySharedTagText;
    }

    return (
      <span
        style={{
          fontSize: 11.5,
          fontWeight: 600,
          padding: '2px 8px',
          borderRadius: 4,
          backgroundColor: bg,
          color: text,
          lineHeight: '1.2',
          display: 'inline-block',
          whiteSpace: 'nowrap',
        }}
      >
        {status}
      </span>
    );
  };

  const renderMockupContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Headline */}
      <h2
        style={{
          fontSize: 17,
          fontWeight: 700,
          color: colors.titleColor,
          textAlign: 'left',
          margin: '0 0 16px 0',
          letterSpacing: '-0.01em',
          lineHeight: 1.35,
        }}
      >
        You gave consent to share the following information
      </h2>

      {/* 1. Documents Accordion */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div
            onClick={() => setDocumentsExpanded(!documentsExpanded)}
            style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', userSelect: 'none' }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: 20,
                color: colors.titleColor,
                transform: documentsExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
                transition: 'transform 0.2s ease',
              }}
            >
              keyboard_arrow_down
            </span>
            <span style={{ fontSize: 14, fontWeight: 700, color: colors.titleColor }}>
              Documents
            </span>
          </div>
          {renderTag('Partly shared')}
        </div>

        {documentsExpanded && (
          <div style={{ paddingLeft: 26, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 13, color: colors.titleColor }}>Aadhaar Card</span>
              {renderTag('Shared')}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 13, color: colors.titleColor }}>PAN</span>
              {renderTag('Not shared')}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 13, color: colors.titleColor }}>Driving License</span>
              {renderTag('Not shared')}
            </div>
            <div style={{ marginTop: 2 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: colors.primary, cursor: 'pointer' }}>
                View all
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: colors.border, margin: '14px 0' }} />

      {/* 2. Profile Information */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 22, color: colors.titleColor }}>
            account_circle
          </span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: colors.titleColor }}>
              Profile information
            </span>
            <span style={{ fontSize: 12, color: colors.subtleText, marginTop: 1 }}>
              Name, Date of Birth, Gender
            </span>
          </div>
        </div>
        {renderTag('Shared')}
      </div>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: colors.border, margin: '14px 0' }} />

      {/* 3. Get your email */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 22, color: colors.titleColor }}>
            mail
          </span>
          <span style={{ fontSize: 14, fontWeight: 700, color: colors.titleColor }}>
            Get your email
          </span>
        </div>
        {renderTag('Shared')}
      </div>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: colors.border, margin: '14px 0' }} />

      {/* 4. Get your profile picture */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 22, color: colors.titleColor }}>
            account_circle
          </span>
          <span style={{ fontSize: 14, fontWeight: 700, color: colors.titleColor }}>
            Get your profile picture
          </span>
        </div>
        {renderTag('Not shared')}
      </div>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: colors.border, margin: '14px 0' }} />

      {/* 5. Location */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 22, color: colors.titleColor }}>
            location_on
          </span>
          <span style={{ fontSize: 14, fontWeight: 700, color: colors.titleColor }}>
            Location
          </span>
        </div>
        {renderTag('Not shared')}
      </div>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: colors.border, margin: '14px 0' }} />

      {/* 6. Consent validity date */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 22, color: colors.titleColor, marginTop: 2 }}>
            calendar_today
          </span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: colors.titleColor }}>
              Consent validity date
            </span>
            <span style={{ fontSize: 12, color: colors.subtleText, marginTop: 1 }}>
              (Today + 30 days)
            </span>
            <span style={{ fontSize: 12, color: colors.titleColor, marginTop: 2, fontWeight: 500 }}>
              08-Oct-2026
            </span>
          </div>
        </div>
        <span style={{ fontSize: 13, fontWeight: 600, color: colors.primary, cursor: 'pointer' }}>
          Edit
        </span>
      </div>

      {/* Notice Text */}
      <div style={{ margin: '20px 0 12px 0' }}>
        <p style={{ fontSize: 11, color: colors.subtleText, margin: 0, lineHeight: 1.45 }}>
          Consent validity is subject to applicable laws.
        </p>
        <p style={{ fontSize: 11, color: colors.subtleText, margin: '2px 0 0 0', lineHeight: 1.45 }}>
          By selecting Allow, you are giving consent to share the items above.
        </p>
      </div>

      {/* View Full Consent History Link */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16 }}>
        <a
          href="#history"
          onClick={(e) => { e.preventDefault(); alert('View full consent history'); }}
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: colors.primary,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          View full consent history
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
            open_in_new
          </span>
        </a>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button
          type="button"
          onClick={() => alert('Closed')}
          style={{
            width: '100%',
            height: 48,
            backgroundColor: isDark ? colors.primaryLight : UX4GColors.primary,
            color: '#FFFFFF',
            border: 'none',
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Close
        </button>
        <button
          type="button"
          onClick={() => alert('Consent Revoked')}
          style={{
            width: '100%',
            height: 48,
            backgroundColor: 'transparent',
            color: isDark ? colors.primaryLight : UX4GColors.primary,
            border: `1.5px solid ${isDark ? colors.primaryLight : '#A391FF'}`,
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Revoke consent
        </button>
      </div>
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
        {/* Consent Header */}
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
              <UnionLogo size={32} isDark={isDark} />
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
                {renderMockupContent()}
              </div>
            ) : (
              renderMockupContent()
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
          <h1 className="wb-title">Consent Management</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Pattern for reviewing existing consents, showing status tags (Shared, Not shared, Partly shared) with revocation and full history options.
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

export default ConsentManagementDoc;
