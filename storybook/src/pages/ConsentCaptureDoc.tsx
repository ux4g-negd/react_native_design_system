import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gCheckbox } from '../../../src/components/checkbox/Checkbox';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface ConsentCaptureDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

export const ConsentCaptureDoc: React.FC<ConsentCaptureDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');
  const [documentsExpanded, setDocumentsExpanded] = useState(true);
  const [selectedDocs, setSelectedDocs] = useState({
    aadhaar: true,
    pan: false,
    dl: false,
  });
  const [isProfileInfoGiven, setIsProfileInfoGiven] = useState(true);
  const [isEmailGiven, setIsEmailGiven] = useState(true);
  const [isProfilePicGiven, setIsProfilePicGiven] = useState(false);
  const [isLocationGiven, setIsLocationGiven] = useState(false);

  // Compute indeterminate/checked/unchecked state for Documents parent checkbox
  const documentsSelectAllValue = useMemo<boolean | null>(() => {
    const values = [selectedDocs.aadhaar, selectedDocs.pan, selectedDocs.dl];
    const checkedCount = values.filter(Boolean).length;
    if (checkedCount === values.length) return true;
    if (checkedCount === 0) return false;
    return null; // Indeterminate
  }, [selectedDocs]);

  const handleSelectAllDocuments = (newVal: boolean | null) => {
    const target = newVal === true;
    setSelectedDocs({
      aadhaar: target,
      pan: target,
      dl: target,
    });
  };

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
      footerText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
    };
  }, [isDark, variant]);

  const codeString = useMemo(() => {
    const isCard = variant === 'Card style';
    return `import React, { useState, useMemo } from 'react';
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
  Ux4gCheckbox,
  UX4GColors,
} from 'ux4g-react-native-components';

export const ConsentCapturePattern = ({
  isDark = ${isDark},
  variant = '${variant}',
}: {
  isDark?: boolean;
  variant?: 'Default' | 'Card style';
}) => {
  const [documentsExpanded, setDocumentsExpanded] = useState(true);
  const [selectedDocs, setSelectedDocs] = useState({
    aadhaar: true,
    pan: false,
    dl: false,
  });
  const [isProfileInfoGiven, setIsProfileInfoGiven] = useState(true);
  const [isEmailGiven, setIsEmailGiven] = useState(true);
  const [isProfilePicGiven, setIsProfilePicGiven] = useState(false);
  const [isLocationGiven, setIsLocationGiven] = useState(false);

  const isCard = variant === 'Card style';

  // Tri-state Select All calculation
  const documentsSelectAllValue = useMemo(() => {
    const values = [selectedDocs.aadhaar, selectedDocs.pan, selectedDocs.dl];
    const checkedCount = values.filter(Boolean).length;
    if (checkedCount === values.length) return true;
    if (checkedCount === 0) return false;
    return null; // Indeterminate
  }, [selectedDocs]);

  const handleSelectAllDocuments = (newVal: boolean | null) => {
    const target = newVal === true;
    setSelectedDocs({
      aadhaar: target,
      pan: target,
      dl: target,
    });
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
            Please provide your consent to share the following information
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
              <View style={styles.rowRight}>
                <Text style={[styles.subtleLabel, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500, marginRight: 8 }]}>
                  Select all
                </Text>
                <Ux4gCheckbox
                  value={documentsSelectAllValue}
                  onChanged={handleSelectAllDocuments}
                  size="medium"
                />
              </View>
            </View>

            {documentsExpanded && (
              <View style={styles.subItemsList}>
                <View style={styles.subItemRow}>
                  <Text style={[styles.subItemText, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
                    Aadhaar Card
                  </Text>
                  <Ux4gCheckbox
                    value={selectedDocs.aadhaar}
                    onChanged={(val) => setSelectedDocs(prev => ({ ...prev, aadhaar: !!val }))}
                    size="medium"
                  />
                </View>
                <View style={styles.subItemRow}>
                  <Text style={[styles.subItemText, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
                    PAN
                  </Text>
                  <Ux4gCheckbox
                    value={selectedDocs.pan}
                    onChanged={(val) => setSelectedDocs(prev => ({ ...prev, pan: !!val }))}
                    size="medium"
                  />
                </View>
                <View style={styles.subItemRow}>
                  <Text style={[styles.subItemText, { color: isDark ? UX4GColors.neutral0 : UX4GColors.neutral900 }]}>
                    Driving License
                  </Text>
                  <Ux4gCheckbox
                    value={selectedDocs.dl}
                    onChanged={(val) => setSelectedDocs(prev => ({ ...prev, dl: !!val }))}
                    size="medium"
                  />
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
            <Ux4gCheckbox
              value={isProfileInfoGiven}
              onChanged={(val) => setIsProfileInfoGiven(!!val)}
              size="medium"
            />
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
            <Ux4gCheckbox
              value={isEmailGiven}
              onChanged={(val) => setIsEmailGiven(!!val)}
              size="medium"
            />
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
            <Ux4gCheckbox
              value={isProfilePicGiven}
              onChanged={(val) => setIsProfilePicGiven(!!val)}
              size="medium"
            />
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
            <Ux4gCheckbox
              value={isLocationGiven}
              onChanged={(val) => setIsLocationGiven(!!val)}
              size="medium"
            />
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

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <Ux4gButton
              text="Allow"
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
              text="Deny"
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
  rowRight: { flexDirection: 'row', alignItems: 'center' },
  subtleLabel: { fontSize: 12 },
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
  noticeContainer: { marginTop: 20, marginBottom: 16 },
  noticeText: { fontSize: 11, lineHeight: 16 },
  actionButtons: { gap: 10, marginTop: 8 },
  footer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, marginVertical: 24 },
  poweredByText: { fontSize: 11, fontWeight: '500' },
  digitalIndiaLogo: { height: 22, width: 80 },
});
`;
  }, [isDark, variant]);

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
        Please provide your consent to share the following information
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span
              onClick={() => handleSelectAllDocuments(documentsSelectAllValue === true ? false : true)}
              style={{ fontSize: 12, color: colors.subtleText, cursor: 'pointer', userSelect: 'none' }}
            >
              Select all
            </span>
            <Ux4gCheckbox
              value={documentsSelectAllValue}
              onChanged={handleSelectAllDocuments}
              size="medium"
            />
          </div>
        </div>

        {documentsExpanded && (
          <div style={{ paddingLeft: 26, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                onClick={() => setSelectedDocs(prev => ({ ...prev, aadhaar: !prev.aadhaar }))}
                style={{ fontSize: 13, color: colors.titleColor, cursor: 'pointer', userSelect: 'none' }}
              >
                Aadhaar Card
              </span>
              <Ux4gCheckbox
                value={selectedDocs.aadhaar}
                onChanged={(val) => setSelectedDocs(prev => ({ ...prev, aadhaar: !!val }))}
                size="medium"
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                onClick={() => setSelectedDocs(prev => ({ ...prev, pan: !prev.pan }))}
                style={{ fontSize: 13, color: colors.titleColor, cursor: 'pointer', userSelect: 'none' }}
              >
                PAN
              </span>
              <Ux4gCheckbox
                value={selectedDocs.pan}
                onChanged={(val) => setSelectedDocs(prev => ({ ...prev, pan: !!val }))}
                size="medium"
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                onClick={() => setSelectedDocs(prev => ({ ...prev, dl: !prev.dl }))}
                style={{ fontSize: 13, color: colors.titleColor, cursor: 'pointer', userSelect: 'none' }}
              >
                Driving License
              </span>
              <Ux4gCheckbox
                value={selectedDocs.dl}
                onChanged={(val) => setSelectedDocs(prev => ({ ...prev, dl: !!val }))}
                size="medium"
              />
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
        <div
          onClick={() => setIsProfileInfoGiven(!isProfileInfoGiven)}
          style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', flex: 1, userSelect: 'none' }}
        >
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
        <Ux4gCheckbox
          value={isProfileInfoGiven}
          onChanged={(val) => setIsProfileInfoGiven(!!val)}
          size="medium"
        />
      </div>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: colors.border, margin: '14px 0' }} />

      {/* 3. Get your email */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div
          onClick={() => setIsEmailGiven(!isEmailGiven)}
          style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', flex: 1, userSelect: 'none' }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 22, color: colors.titleColor }}>
            mail
          </span>
          <span style={{ fontSize: 14, fontWeight: 700, color: colors.titleColor }}>
            Get your email
          </span>
        </div>
        <Ux4gCheckbox
          value={isEmailGiven}
          onChanged={(val) => setIsEmailGiven(!!val)}
          size="medium"
        />
      </div>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: colors.border, margin: '14px 0' }} />

      {/* 4. Get your profile picture */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div
          onClick={() => setIsProfilePicGiven(!isProfilePicGiven)}
          style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', flex: 1, userSelect: 'none' }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 22, color: colors.titleColor }}>
            account_circle
          </span>
          <span style={{ fontSize: 14, fontWeight: 700, color: colors.titleColor }}>
            Get your profile picture
          </span>
        </div>
        <Ux4gCheckbox
          value={isProfilePicGiven}
          onChanged={(val) => setIsProfilePicGiven(!!val)}
          size="medium"
        />
      </div>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: colors.border, margin: '14px 0' }} />

      {/* 5. Location */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div
          onClick={() => setIsLocationGiven(!isLocationGiven)}
          style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', flex: 1, userSelect: 'none' }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 22, color: colors.titleColor }}>
            location_on
          </span>
          <span style={{ fontSize: 14, fontWeight: 700, color: colors.titleColor }}>
            Location
          </span>
        </div>
        <Ux4gCheckbox
          value={isLocationGiven}
          onChanged={(val) => setIsLocationGiven(!!val)}
          size="medium"
        />
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
      <div style={{ margin: '20px 0 16px 0' }}>
        <p style={{ fontSize: 11, color: colors.subtleText, margin: 0, lineHeight: 1.45 }}>
          Consent validity is subject to applicable laws.
        </p>
        <p style={{ fontSize: 11, color: colors.subtleText, margin: '2px 0 0 0', lineHeight: 1.45 }}>
          By selecting Allow, you are giving consent to share the items above.
        </p>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
        <button
          type="button"
          onClick={() => alert('Consent Allowed')}
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
          Allow
        </button>
        <button
          type="button"
          onClick={() => alert('Consent Denied')}
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
          Deny
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
          <h1 className="wb-title">Consent Capture</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Pattern for capturing user consent to share data and items with granular control, validity period, and actions. Use the Variant knob to switch between the standard flat layout and the card-style layout.
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

export default ConsentCaptureDoc;
