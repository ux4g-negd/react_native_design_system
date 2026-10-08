import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface CitizenProfileDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

export const CitizenProfileDoc: React.FC<CitizenProfileDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  
  // Interactive state
  const [smsEnabled, setSmsEnabled] = useState<boolean>(true);
  const [emailEnabled, setEmailEnabled] = useState<boolean>(true);
  const [appPushEnabled, setAppPushEnabled] = useState<boolean>(true);
  const [whatsAppEnabled, setWhatsAppEnabled] = useState<boolean>(false);

  const colors = useMemo(() => {
    return {
      screenBg: isDark ? UX4GColors.neutral950 : '#F8F9FA',
      headerBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      dividerColor: isDark ? UX4GColors.neutral800 : '#F3F4F6',
      titleColor: isDark ? UX4GColors.neutral50 : '#111827',
      subtleText: isDark ? UX4GColors.neutral400 : '#6B7280',
      primaryColor: isDark ? UX4GColors.primary300 : '#5236DE',
      readOnlyBg: isDark ? UX4GColors.neutral800 : '#F3F4F6',
      readOnlyBorder: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      readOnlyText: isDark ? UX4GColors.neutral100 : '#1F2937',
      readOnlyLabel: isDark ? UX4GColors.neutral300 : '#4B5563',
      outlineBtnBorder: isDark ? UX4GColors.primary400 : '#DDD6FE',
      outlineBtnText: isDark ? UX4GColors.primary300 : '#5236DE',
      greenTagBg: isDark ? 'rgba(22, 163, 74, 0.15)' : '#DCFCE7',
      greenTagText: isDark ? UX4GColors.green300 : '#15803D',
      orangeTagBg: isDark ? 'rgba(255, 152, 0, 0.15)' : '#FEF3C7',
      orangeTagText: isDark ? '#FFA726' : '#D97706',
      deleteCardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      deleteCardBorder: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      deleteBtnBorder: isDark ? UX4GColors.red700 : '#FCA5A5',
      deleteBtnText: isDark ? UX4GColors.red300 : '#DC2626',
      toggleTrackActive: isDark ? UX4GColors.primary500 : '#5236DE',
      toggleTrackInactive: isDark ? UX4GColors.neutral700 : '#E5E7EB',
    };
  }, [isDark]);

  const codeString = useMemo(() => {
    return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Switch,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gButton,
  Ux4gInputField,
  Ux4gStatusAvatar,
  UX4GColors,
} from 'ux4g-react-native-components';

export const CitizenProfileScreen = ({
  isDark = false,
  onEditProfile = () => {},
  onUpdateViaUidai = () => {},
  onViewDigiLocker = () => {},
  onConnectUmang = () => {},
  onChangeBank = () => {},
  onDeleteAccount = () => {},
}: {
  isDark?: boolean;
  onEditProfile?: () => void;
  onUpdateViaUidai?: () => void;
  onViewDigiLocker?: () => void;
  onConnectUmang?: () => void;
  onChangeBank?: () => void;
  onDeleteAccount?: () => void;
}) => {
  const [smsEnabled, setSmsEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [appPushEnabled, setAppPushEnabled] = useState(true);
  const [whatsAppEnabled, setWhatsAppEnabled] = useState(false);

  const screenBg = isDark ? UX4GColors.neutral950 : '#F8F9FA';
  const headerBg = isDark ? UX4GColors.neutral900 : UX4GColors.neutral0;
  const cardBg = isDark ? UX4GColors.neutral900 : UX4GColors.neutral0;
  const borderColor = isDark ? UX4GColors.neutral700 : '#E5E7EB';
  const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
  const subtleText = isDark ? UX4GColors.neutral400 : '#6B7280';
  const primaryColor = isDark ? UX4GColors.primary300 : '#5236DE';
  const readOnlyBg = isDark ? UX4GColors.neutral800 : '#F3F4F6';
  const deleteBtnBorder = isDark ? UX4GColors.red700 : '#FCA5A5';
  const deleteBtnText = isDark ? UX4GColors.red300 : '#DC2626';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: screenBg }]}>
      {/* Header */}
      <View style={{ backgroundColor: headerBg }}>
        <Ux4gAppHeader
          variant={isDark ? 'dark' : 'light'}
          title=""
          leadingWidgets={[
            <View key="logos" style={styles.headerLeading}>
              <Image
                source={require('./assets/national_emblem.png')}
                style={[styles.emblem, { tintColor: isDark ? '#FFFFFF' : undefined }]}
                resizeMode="contain"
              />
              <Image
                source={require('./assets/union_logo.png')}
                style={[styles.unionLogo, { tintColor: primaryColor }]}
                resizeMode="contain"
              />
              <Text style={[styles.headerTitle, { color: titleColor }]}>
                Government of India
              </Text>
            </View>,
          ]}
          showAvatar
          avatar={
            <Ux4gStatusAvatar
              size="s"
              imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
              initials="R"
              variant="online"
            />
          }
        />
        <Ux4gDivider color={borderColor} />
      </View>

      {/* Main Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.pageTitle, { color: titleColor }]}>
          Profile & Preferences
        </Text>

        {/* 1. Profile Card */}
        <View style={[styles.card, { backgroundColor: cardBg, borderColor }]}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200' }}
              style={styles.avatarImage}
            />
            <View style={styles.verifiedBadge}>
              <Text style={styles.verifiedIcon}>✓</Text>
            </View>
          </View>
          <Text style={[styles.profileName, { color: titleColor }]}>
            Ramesh Kumar
          </Text>
          <View style={styles.tagsRow}>
            <View style={styles.greenTag}>
              <Text style={styles.greenCheckIcon}>✓</Text>
              <Text style={styles.greenTagText}>Mobile verified</Text>
            </View>
            <View style={styles.greenTag}>
              <Text style={styles.greenCheckIcon}>✓</Text>
              <Text style={styles.greenTagText}>Aadhaar linked</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={onEditProfile}
            style={[styles.outlineBtn, { borderColor: isDark ? UX4GColors.primary400 : '#DDD6FE' }]}
          >
            <Text style={[styles.outlineBtnText, { color: primaryColor }]}>
              Edit profile
            </Text>
          </TouchableOpacity>
        </View>

        {/* 2. Aadhaar-linked Information Card */}
        <View style={[styles.card, { backgroundColor: cardBg, borderColor }]}>
          <Text style={[styles.sectionTitle, { color: titleColor }]}>
            Aadhaar-linked Information
          </Text>
          <Text style={[styles.sectionSubtitle, { color: subtleText }]}>
            Fetched from UIDAI — update via the UIDAI portal.
          </Text>
          <View style={styles.formGap}>
            <Ux4gInputField
              label="Full name"
              value="Ramesh Kumar"
              editable={false}
              backgroundColor={readOnlyBg}
            />
            <Ux4gInputField
              label="Date of birth"
              value="15 Aug 1990"
              editable={false}
              backgroundColor={readOnlyBg}
            />
            <Ux4gInputField
              label="Gender"
              value="Male"
              editable={false}
              backgroundColor={readOnlyBg}
            />
            <Ux4gInputField
              label="Aadhaar number (UID)"
              value="XXXX XXXX 4127"
              editable={false}
              backgroundColor={readOnlyBg}
            />
          </View>
          <TouchableOpacity onPress={onUpdateViaUidai} style={styles.linkTouch}>
            <Text style={[styles.linkText, { color: primaryColor }]}>
              Update via UIDAI
            </Text>
          </TouchableOpacity>
        </View>

        {/* 3. Personal Information Card */}
        <View style={[styles.card, { backgroundColor: cardBg, borderColor }]}>
          <Text style={[styles.sectionTitle, { color: titleColor }]}>
            Personal information
          </Text>
          <View style={styles.formGap}>
            <Ux4gInputField
              label="Email address"
              value="ramesh.kumar@gmail.com"
              editable={false}
              backgroundColor={readOnlyBg}
            />
            <Ux4gInputField
              label="Mobile number"
              value="+91 98765 43210"
              editable={false}
              backgroundColor={readOnlyBg}
            />
            <Ux4gInputField
              label="Language preference"
              value="English"
              editable={false}
              backgroundColor={readOnlyBg}
            />
          </View>
        </View>

        {/* 4. Linked Accounts Card */}
        <View style={[styles.card, { backgroundColor: cardBg, borderColor }]}>
          <Text style={[styles.sectionTitle, { color: titleColor }]}>
            Linked accounts
          </Text>

          {/* DigiLocker */}
          <View style={styles.linkedItem}>
            <View style={styles.linkedHeaderRow}>
              <Text style={[styles.linkedItemTitle, { color: titleColor }]}>
                DigiLocker
              </Text>
              <View style={styles.greenTagSmall}>
                <Text style={styles.greenCheckIconSmall}>✓</Text>
                <Text style={styles.greenTagTextSmall}>Linked</Text>
              </View>
            </View>
            <Text style={[styles.linkedItemDesc, { color: subtleText }]}>
              Access and share your digital documents
            </Text>
            <TouchableOpacity onPress={onViewDigiLocker} style={styles.linkTouch}>
              <Text style={[styles.linkText, { color: primaryColor }]}>
                View in DigiLocker
              </Text>
            </TouchableOpacity>
          </View>

          <Ux4gDivider color={borderColor} style={styles.sectionDivider} />

          {/* UMANG App */}
          <View style={styles.linkedItem}>
            <View style={styles.linkedHeaderRow}>
              <Text style={[styles.linkedItemTitle, { color: titleColor }]}>
                UMANG App
              </Text>
              <View style={styles.orangeTagSmall}>
                <Text style={styles.orangeWarnIconSmall}>⚠️</Text>
                <Text style={styles.orangeTagTextSmall}>Not linked</Text>
              </View>
            </View>
            <Text style={[styles.linkedItemDesc, { color: subtleText }]}>
              Unified access to government services
            </Text>
            <TouchableOpacity
              onPress={onConnectUmang}
              style={[styles.smallOutlineBtn, { borderColor: isDark ? UX4GColors.primary400 : '#DDD6FE' }]}
            >
              <Text style={[styles.smallOutlineBtnText, { color: primaryColor }]}>
                Connect
              </Text>
            </TouchableOpacity>
          </View>

          <Ux4gDivider color={borderColor} style={styles.sectionDivider} />

          {/* Bank Account */}
          <View style={styles.linkedItem}>
            <Text style={[styles.linkedItemTitle, { color: titleColor }]}>
              Bank account for DBT
            </Text>
            <Text style={[styles.linkedItemDesc, { color: subtleText }]}>
              XXXXXX7842 · State Bank of India
            </Text>
            <TouchableOpacity onPress={onChangeBank} style={styles.linkTouch}>
              <Text style={[styles.linkText, { color: primaryColor }]}>
                Change
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 5. Notification Preferences Card */}
        <View style={[styles.card, { backgroundColor: cardBg, borderColor }]}>
          <Text style={[styles.sectionTitle, { color: titleColor }]}>
            Notification preferences
          </Text>

          {/* SMS */}
          <View style={styles.toggleRow}>
            <View>
              <Text style={[styles.toggleLabel, { color: titleColor }]}>SMS</Text>
              <Text style={[styles.toggleDesc, { color: subtleText }]}>
                Text message updates
              </Text>
            </View>
            <Switch
              value={smsEnabled}
              onValueChange={setSmsEnabled}
              trackColor={{ false: '#E5E7EB', true: '#5236DE' }}
            />
          </View>

          <Ux4gDivider color={borderColor} style={styles.toggleDivider} />

          {/* Email */}
          <View style={styles.toggleRow}>
            <View>
              <Text style={[styles.toggleLabel, { color: titleColor }]}>Email</Text>
              <Text style={[styles.toggleDesc, { color: subtleText }]}>
                Email updates
              </Text>
            </View>
            <Switch
              value={emailEnabled}
              onValueChange={setEmailEnabled}
              trackColor={{ false: '#E5E7EB', true: '#5236DE' }}
            />
          </View>

          <Ux4gDivider color={borderColor} style={styles.toggleDivider} />

          {/* App push */}
          <View style={styles.toggleRow}>
            <View>
              <Text style={[styles.toggleLabel, { color: titleColor }]}>App push</Text>
              <Text style={[styles.toggleDesc, { color: subtleText }]}>
                In-app alerts
              </Text>
            </View>
            <Switch
              value={appPushEnabled}
              onValueChange={setAppPushEnabled}
              trackColor={{ false: '#E5E7EB', true: '#5236DE' }}
            />
          </View>

          <Ux4gDivider color={borderColor} style={styles.toggleDivider} />

          {/* WhatsApp */}
          <View style={styles.toggleRow}>
            <View>
              <Text style={[styles.toggleLabel, { color: titleColor }]}>WhatsApp</Text>
              <Text style={[styles.toggleDesc, { color: subtleText }]}>
                WhatsApp updates
              </Text>
            </View>
            <Switch
              value={whatsAppEnabled}
              onValueChange={setWhatsAppEnabled}
              trackColor={{ false: '#E5E7EB', true: '#5236DE' }}
            />
          </View>
        </View>

        {/* 6. Delete Account Card */}
        <View style={[styles.card, { backgroundColor: cardBg, borderColor }]}>
          <Text style={[styles.sectionTitle, { color: titleColor }]}>
            Delete account
          </Text>
          <Text style={[styles.deleteDesc, { color: subtleText }]}>
            {'Permanently delete your account and all data.\\n30-day grace period to restore before it is final.'}
          </Text>
          <TouchableOpacity
            onPress={onDeleteAccount}
            style={[styles.deleteBtn, { borderColor: deleteBtnBorder }]}
          >
            <Text style={[styles.deleteBtnText, { color: deleteBtnText }]}>
              Delete my account
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  headerLeading: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  emblem: { height: 32, width: 24 },
  unionLogo: { height: 26, width: 34 },
  headerTitle: { fontSize: 13, fontWeight: '600' },
  scrollContent: { padding: 16, gap: 16 },
  pageTitle: { fontSize: 20, fontWeight: '800', marginBottom: 4 },
  card: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  avatarWrapper: {
    alignSelf: 'center',
    position: 'relative',
    marginBottom: 12,
  },
  avatarImage: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  verifiedIcon: { color: '#FFFFFF', fontSize: 11, fontWeight: 'bold' },
  profileName: { fontSize: 18, fontWeight: '700', textAlign: 'center', marginBottom: 10 },
  tagsRow: { flexDirection: 'row', justifyContent: 'center', gap: 8, marginBottom: 16 },
  greenTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  greenCheckIcon: { color: '#15803D', fontSize: 12, fontWeight: 'bold' },
  greenTagText: { color: '#15803D', fontSize: 11, fontWeight: '600' },
  outlineBtn: {
    width: '100%',
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineBtnText: { fontSize: 14, fontWeight: '600' },
  sectionTitle: { fontSize: 15, fontWeight: '700', marginBottom: 4 },
  sectionSubtitle: { fontSize: 13, lineHeight: 18, marginBottom: 16 },
  formGap: { gap: 12 },
  linkTouch: { marginTop: 10 },
  linkText: { fontSize: 13, fontWeight: '500' },
  linkedItem: { gap: 4 },
  linkedHeaderRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  linkedItemTitle: { fontSize: 14, fontWeight: '600' },
  greenTagSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  greenCheckIconSmall: { color: '#15803D', fontSize: 10, fontWeight: 'bold' },
  greenTagTextSmall: { color: '#15803D', fontSize: 10, fontWeight: '600' },
  orangeTagSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  orangeWarnIconSmall: { color: '#D97706', fontSize: 10 },
  orangeTagTextSmall: { color: '#D97706', fontSize: 10, fontWeight: '600' },
  linkedItemDesc: { fontSize: 12 },
  smallOutlineBtn: {
    alignSelf: 'flex-start',
    marginTop: 6,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
  },
  smallOutlineBtnText: { fontSize: 12, fontWeight: '600' },
  sectionDivider: { marginVertical: 12 },
  toggleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 2 },
  toggleLabel: { fontSize: 14, fontWeight: '600' },
  toggleDesc: { fontSize: 12, marginTop: 2 },
  toggleDivider: { marginVertical: 10 },
  deleteDesc: { fontSize: 13, lineHeight: 18, marginVertical: 12 },
  deleteBtn: {
    width: '100%',
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteBtnText: { fontSize: 14, fontWeight: '600' },
});
`;
  }, []);

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Citizen Profile</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A comprehensive profile pattern showing user identity, Aadhaar-linked info, personal details, linked accounts, notification preferences, and account deletion.
        </p>
      </div>

      {/* Main Body */}
      <div className="wb-body">
        <div className="wb-main">
          {/* Tabs */}
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

          {/* Content Area */}
          <div className="wb-content">
            {/* 1. Preview Tab */}
            {activeMainTab === 'preview' && (
              <div
                className={`wb-preview-area ${isDark ? 'dark' : ''}`}
                style={{ flexDirection: 'column', alignItems: 'center' }}
              >
                {/* Phone Frame */}
                <div
                  style={{
                    width: 360,
                    height: 760,
                    borderRadius: 20,
                    border: `1px solid ${colors.border}`,
                    backgroundColor: colors.screenBg,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: isDark
                      ? '0 12px 36px rgba(0, 0, 0, 0.6)'
                      : '0 8px 30px rgba(0, 0, 0, 0.08)',
                    position: 'relative',
                  }}
                >
                  {/* App Header */}
                  <div
                    style={{
                      backgroundColor: colors.headerBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 14px',
                      borderBottom: `1px solid ${colors.dividerColor}`,
                      flexShrink: 0,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <img
                        src="/national_emblem_logo.svg"
                        alt="National Emblem"
                        style={{
                          height: 30,
                          width: 'auto',
                          filter: isDark ? 'brightness(0) invert(1)' : undefined,
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (!target.src.includes('national_amblam_logo.svg')) {
                            target.src = '/national_amblam_logo.svg';
                          }
                        }}
                      />
                      <UnionLogo color={colors.primaryColor} size={26} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: colors.titleColor,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Government of India
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      {/* Hexagon icon */}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={colors.titleColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ cursor: 'pointer' }}
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      </svg>
                      {/* Avatar with online dot */}
                      <div style={{ position: 'relative' }}>
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
                          alt="Avatar"
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: '50%',
                            objectFit: 'cover',
                            display: 'block',
                          }}
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: 7,
                            height: 7,
                            borderRadius: '50%',
                            backgroundColor: '#22C55E',
                            border: `1.5px solid ${colors.headerBg}`,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Scrollable Body */}
                  <div
                    style={{
                      flex: 1,
                      overflowY: 'auto',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 14,
                      boxSizing: 'border-box',
                    }}
                  >
                    {/* Title */}
                    <div
                      style={{
                        fontSize: 20,
                        fontWeight: 800,
                        color: colors.titleColor,
                      }}
                    >
                      Profile & Preferences
                    </div>

                    {/* 1. Profile Card */}
                    <div
                      style={{
                        backgroundColor: colors.cardBg,
                        border: `1px solid ${colors.border}`,
                        borderRadius: 12,
                        padding: '20px 16px 16px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div style={{ position: 'relative', marginBottom: 12 }}>
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
                          alt="Avatar"
                          style={{
                            width: 68,
                            height: 68,
                            borderRadius: '50%',
                            objectFit: 'cover',
                            display: 'block',
                          }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: 20,
                            height: 20,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <svg width={20} height={20} viewBox="-0.5 -0.5 17 17" fill="none">
                            <path
                              d="M16.25 8L14.42 5.9075L14.675 3.14L11.9675 2.525L10.55 0.125L8 1.22L5.45 0.125L4.0325 2.5175L1.325 3.125L1.58 5.9L-0.25 8L1.58 10.0925L1.325 12.8675L4.0325 13.4825L5.45 15.875L8 14.7725L10.55 15.8675L11.9675 13.475L14.675 12.86L14.42 10.0925L16.25 8Z"
                              fill="#3B82F6"
                            />
                            <path
                              d="M6.03501 11.0075L4.25001 9.20752C3.95751 8.91502 3.95751 8.44252 4.25001 8.15002L4.30251 8.09752C4.59501 7.80502 5.07501 7.80502 5.36751 8.09752L6.57502 9.31252L10.4375 5.44252C10.73 5.15002 11.21 5.15002 11.5025 5.44252L11.555 5.49502C11.8475 5.78752 11.8475 6.26002 11.555 6.55252L7.11501 11.0075C6.80751 11.3 6.33501 11.3 6.03501 11.0075Z"
                              fill="#FFFFFF"
                            />
                          </svg>
                        </div>
                      </div>

                      <div
                        style={{
                          fontSize: 17,
                          fontWeight: 700,
                          color: colors.titleColor,
                          marginBottom: 10,
                        }}
                      >
                        Ramesh Kumar
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          justifyContent: 'center',
                          gap: 8,
                          marginBottom: 16,
                        }}
                      >
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 4,
                            backgroundColor: colors.greenTagBg,
                            padding: '3px 8px',
                            borderRadius: 6,
                          }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: 13, color: colors.greenTagText, fontVariationSettings: "'FILL' 1" }}>
                            check_circle
                          </span>
                          <span
                            style={{
                              fontSize: 11,
                              fontWeight: 600,
                              color: colors.greenTagText,
                            }}
                          >
                            Mobile verified
                          </span>
                        </div>

                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 4,
                            backgroundColor: colors.greenTagBg,
                            padding: '3px 8px',
                            borderRadius: 6,
                          }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: 13, color: colors.greenTagText, fontVariationSettings: "'FILL' 1" }}>
                            check_circle
                          </span>
                          <span
                            style={{
                              fontSize: 11,
                              fontWeight: 600,
                              color: colors.greenTagText,
                            }}
                          >
                            Aadhaar linked
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        style={{
                          width: '100%',
                          padding: '10px 16px',
                          borderRadius: 8,
                          border: `1px solid ${colors.outlineBtnBorder}`,
                          backgroundColor: 'transparent',
                          color: colors.outlineBtnText,
                          fontSize: 13,
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'background-color 0.2s',
                        }}
                      >
                        Edit profile
                      </button>
                    </div>

                    {/* 2. Aadhaar-linked Information */}
                    <div
                      style={{
                        backgroundColor: colors.cardBg,
                        border: `1px solid ${colors.border}`,
                        borderRadius: 12,
                        padding: 16,
                        display: 'flex',
                        flexDirection: 'column',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div
                        style={{
                          fontSize: 15,
                          fontWeight: 700,
                          color: colors.titleColor,
                          marginBottom: 4,
                        }}
                      >
                        Aadhaar-linked Information
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: colors.subtleText,
                          marginBottom: 14,
                          lineHeight: 1.4,
                        }}
                      >
                        Fetched from UIDAI — update via the UIDAI portal.
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {[
                          { label: 'Full name', value: 'Ramesh Kumar' },
                          { label: 'Date of birth', value: '15 Aug 1990' },
                          { label: 'Gender', value: 'Male' },
                          { label: 'Aadhaar number (UID)', value: 'XXXX XXXX 4127' },
                        ].map((field, idx) => (
                          <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <label
                              style={{
                                fontSize: 12,
                                fontWeight: 500,
                                color: colors.readOnlyLabel,
                              }}
                            >
                              {field.label}
                            </label>
                            <div
                              style={{
                                padding: '10px 12px',
                                borderRadius: 8,
                                backgroundColor: colors.readOnlyBg,
                                fontSize: 13,
                                color: colors.readOnlyText,
                                fontWeight: 500,
                              }}
                            >
                              {field.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div
                        style={{
                          marginTop: 12,
                          fontSize: 13,
                          fontWeight: 500,
                          color: colors.primaryColor,
                          cursor: 'pointer',
                        }}
                      >
                        Update via UIDAI
                      </div>
                    </div>

                    {/* 3. Personal Information */}
                    <div
                      style={{
                        backgroundColor: colors.cardBg,
                        border: `1px solid ${colors.border}`,
                        borderRadius: 12,
                        padding: 16,
                        display: 'flex',
                        flexDirection: 'column',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div
                        style={{
                          fontSize: 15,
                          fontWeight: 700,
                          color: colors.titleColor,
                          marginBottom: 14,
                        }}
                      >
                        Personal information
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {[
                          { label: 'Email address', value: 'ramesh.kumar@gmail.com' },
                          { label: 'Mobile number', value: '+91 98765 43210' },
                        ].map((field, idx) => (
                          <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <label
                              style={{
                                fontSize: 12,
                                fontWeight: 500,
                                color: colors.readOnlyLabel,
                              }}
                            >
                              {field.label}
                            </label>
                            <div
                              style={{
                                padding: '10px 12px',
                                borderRadius: 8,
                                backgroundColor: colors.readOnlyBg,
                                fontSize: 13,
                                color: colors.readOnlyText,
                                fontWeight: 500,
                              }}
                            >
                              {field.value}
                            </div>
                          </div>
                        ))}

                        {/* Language preference */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                          <label
                            style={{
                              fontSize: 12,
                              fontWeight: 500,
                              color: colors.readOnlyLabel,
                            }}
                          >
                            Language preference
                          </label>
                          <div
                            style={{
                              padding: '10px 12px',
                              borderRadius: 8,
                              backgroundColor: colors.cardBg,
                              border: `1px solid ${colors.border}`,
                              fontSize: 13,
                              color: colors.titleColor,
                              fontWeight: 500,
                            }}
                          >
                            English
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4. Linked Accounts */}
                    <div
                      style={{
                        backgroundColor: colors.cardBg,
                        border: `1px solid ${colors.border}`,
                        borderRadius: 12,
                        padding: 16,
                        display: 'flex',
                        flexDirection: 'column',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: colors.titleColor,
                          marginBottom: 14,
                        }}
                      >
                        Linked accounts
                      </div>

                      {/* DigiLocker */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span
                            style={{
                              fontSize: 13,
                              fontWeight: 600,
                              color: colors.titleColor,
                            }}
                          >
                            DigiLocker
                          </span>
                          <div
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 3,
                              backgroundColor: colors.greenTagBg,
                              padding: '2px 6px',
                              borderRadius: 4,
                            }}
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: 10, color: colors.greenTagText, fontVariationSettings: "'FILL' 1" }}>
                              check_circle
                            </span>
                            <span
                              style={{
                                fontSize: 10,
                                fontWeight: 600,
                                color: colors.greenTagText,
                              }}
                            >
                              Linked
                            </span>
                          </div>
                        </div>
                        <div style={{ fontSize: 11, color: colors.subtleText }}>
                          Access and share your digital documents
                        </div>
                        <div
                          style={{
                            fontSize: 12,
                            fontWeight: 500,
                            color: colors.primaryColor,
                            cursor: 'pointer',
                            marginTop: 4,
                          }}
                        >
                          View in DigiLocker
                        </div>
                      </div>

                      <div
                        style={{
                          height: 1,
                          backgroundColor: colors.dividerColor,
                          margin: '12px 0',
                        }}
                      />

                      {/* UMANG App */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span
                            style={{
                              fontSize: 13,
                              fontWeight: 600,
                              color: colors.titleColor,
                            }}
                          >
                            UMANG App
                          </span>
                          <div
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 3,
                              backgroundColor: colors.orangeTagBg,
                              padding: '2px 6px',
                              borderRadius: 4,
                            }}
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: 10, color: colors.orangeTagText, fontVariationSettings: "'FILL' 1" }}>
                              warning
                            </span>
                            <span
                              style={{
                                fontSize: 10,
                                fontWeight: 600,
                                color: colors.orangeTagText,
                              }}
                            >
                              Not linked
                            </span>
                          </div>
                        </div>
                        <div style={{ fontSize: 11, color: colors.subtleText }}>
                          Unified access to government services
                        </div>
                        <div style={{ marginTop: 6 }}>
                          <button
                            type="button"
                            style={{
                              padding: '6px 16px',
                              borderRadius: 6,
                              border: `1px solid ${colors.outlineBtnBorder}`,
                              backgroundColor: 'transparent',
                              color: colors.outlineBtnText,
                              fontSize: 12,
                              fontWeight: 600,
                              cursor: 'pointer',
                            }}
                          >
                            Connect
                          </button>
                        </div>
                      </div>

                      <div
                        style={{
                          height: 1,
                          backgroundColor: colors.dividerColor,
                          margin: '12px 0',
                        }}
                      />

                      {/* Bank Account */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <div
                          style={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: colors.titleColor,
                          }}
                        >
                          Bank account for DBT
                        </div>
                        <div style={{ fontSize: 11, color: colors.subtleText }}>
                          XXXXXX7842 · State Bank of India
                        </div>
                        <div
                          style={{
                            fontSize: 12,
                            fontWeight: 500,
                            color: colors.primaryColor,
                            cursor: 'pointer',
                            marginTop: 4,
                          }}
                        >
                          Change
                        </div>
                      </div>
                    </div>

                    {/* 5. Notification Preferences */}
                    <div
                      style={{
                        backgroundColor: colors.cardBg,
                        border: `1px solid ${colors.border}`,
                        borderRadius: 12,
                        padding: 16,
                        display: 'flex',
                        flexDirection: 'column',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: colors.titleColor,
                          marginBottom: 14,
                        }}
                      >
                        Notification preferences
                      </div>

                      {/* SMS */}
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          <span style={{ fontSize: 13, fontWeight: 600, color: colors.titleColor }}>
                            SMS
                          </span>
                          <span style={{ fontSize: 11, color: colors.subtleText }}>
                            Text message updates
                          </span>
                        </div>
                        <div
                          onClick={() => setSmsEnabled(!smsEnabled)}
                          style={{
                            width: 38,
                            height: 22,
                            borderRadius: 11,
                            backgroundColor: smsEnabled
                              ? colors.toggleTrackActive
                              : colors.toggleTrackInactive,
                            cursor: 'pointer',
                            position: 'relative',
                            transition: 'background-color 0.2s',
                          }}
                        >
                          <div
                            style={{
                              width: 18,
                              height: 18,
                              borderRadius: 9,
                              backgroundColor: '#FFFFFF',
                              position: 'absolute',
                              top: 2,
                              left: smsEnabled ? 18 : 2,
                              transition: 'left 0.2s',
                              boxShadow: '0 1px 3px rgba(0,0,0,0.25)',
                            }}
                          />
                        </div>
                      </div>

                      <div style={{ height: 1, backgroundColor: colors.dividerColor, margin: '10px 0' }} />

                      {/* Email */}
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          <span style={{ fontSize: 13, fontWeight: 600, color: colors.titleColor }}>
                            Email
                          </span>
                          <span style={{ fontSize: 11, color: colors.subtleText }}>
                            Email updates
                          </span>
                        </div>
                        <div
                          onClick={() => setEmailEnabled(!emailEnabled)}
                          style={{
                            width: 38,
                            height: 22,
                            borderRadius: 11,
                            backgroundColor: emailEnabled
                              ? colors.toggleTrackActive
                              : colors.toggleTrackInactive,
                            cursor: 'pointer',
                            position: 'relative',
                            transition: 'background-color 0.2s',
                          }}
                        >
                          <div
                            style={{
                              width: 18,
                              height: 18,
                              borderRadius: 9,
                              backgroundColor: '#FFFFFF',
                              position: 'absolute',
                              top: 2,
                              left: emailEnabled ? 18 : 2,
                              transition: 'left 0.2s',
                              boxShadow: '0 1px 3px rgba(0,0,0,0.25)',
                            }}
                          />
                        </div>
                      </div>

                      <div style={{ height: 1, backgroundColor: colors.dividerColor, margin: '10px 0' }} />

                      {/* App push */}
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          <span style={{ fontSize: 13, fontWeight: 600, color: colors.titleColor }}>
                            App push
                          </span>
                          <span style={{ fontSize: 11, color: colors.subtleText }}>
                            In-app alerts
                          </span>
                        </div>
                        <div
                          onClick={() => setAppPushEnabled(!appPushEnabled)}
                          style={{
                            width: 38,
                            height: 22,
                            borderRadius: 11,
                            backgroundColor: appPushEnabled
                              ? colors.toggleTrackActive
                              : colors.toggleTrackInactive,
                            cursor: 'pointer',
                            position: 'relative',
                            transition: 'background-color 0.2s',
                          }}
                        >
                          <div
                            style={{
                              width: 18,
                              height: 18,
                              borderRadius: 9,
                              backgroundColor: '#FFFFFF',
                              position: 'absolute',
                              top: 2,
                              left: appPushEnabled ? 18 : 2,
                              transition: 'left 0.2s',
                              boxShadow: '0 1px 3px rgba(0,0,0,0.25)',
                            }}
                          />
                        </div>
                      </div>

                      <div style={{ height: 1, backgroundColor: colors.dividerColor, margin: '10px 0' }} />

                      {/* WhatsApp */}
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          <span style={{ fontSize: 13, fontWeight: 600, color: colors.titleColor }}>
                            WhatsApp
                          </span>
                          <span style={{ fontSize: 11, color: colors.subtleText }}>
                            WhatsApp updates
                          </span>
                        </div>
                        <div
                          onClick={() => setWhatsAppEnabled(!whatsAppEnabled)}
                          style={{
                            width: 38,
                            height: 22,
                            borderRadius: 11,
                            backgroundColor: whatsAppEnabled
                              ? colors.toggleTrackActive
                              : colors.toggleTrackInactive,
                            cursor: 'pointer',
                            position: 'relative',
                            transition: 'background-color 0.2s',
                          }}
                        >
                          <div
                            style={{
                              width: 18,
                              height: 18,
                              borderRadius: 9,
                              backgroundColor: '#FFFFFF',
                              position: 'absolute',
                              top: 2,
                              left: whatsAppEnabled ? 18 : 2,
                              transition: 'left 0.2s',
                              boxShadow: '0 1px 3px rgba(0,0,0,0.25)',
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* 6. Delete Account */}
                    <div
                      style={{
                        backgroundColor: colors.deleteCardBg,
                        border: `1px solid ${colors.deleteCardBorder}`,
                        borderRadius: 12,
                        padding: 16,
                        display: 'flex',
                        flexDirection: 'column',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: colors.titleColor,
                          marginBottom: 4,
                        }}
                      >
                        Delete account
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: colors.subtleText,
                          lineHeight: 1.45,
                          marginBottom: 14,
                          whiteSpace: 'pre-line',
                        }}
                      >
                        Permanently delete your account and all data.{'\n'}30-day grace period to restore before it is final.
                      </div>

                      <button
                        type="button"
                        style={{
                          width: '100%',
                          padding: '10px 16px',
                          borderRadius: 8,
                          border: `1px solid ${colors.deleteBtnBorder}`,
                          backgroundColor: 'transparent',
                          color: colors.deleteBtnText,
                          fontSize: 13,
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'background-color 0.2s',
                        }}
                      >
                        Delete my account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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

export default CitizenProfileDoc;
