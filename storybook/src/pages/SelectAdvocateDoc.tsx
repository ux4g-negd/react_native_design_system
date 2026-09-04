import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';

interface SelectAdvocateDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

interface AdvocateItem {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  languages: string;
  slots: number;
}

const ADVOCATES: AdvocateItem[] = [
  {
    id: '1',
    name: 'Adv. M. Sharma',
    specialization: 'Family Law',
    experience: '12 yrs',
    languages: 'Hindi, Marathi, English',
    slots: 8,
  },
  {
    id: '2',
    name: 'Adv. M. Sharma',
    specialization: 'Family Law',
    experience: '12 yrs',
    languages: 'Hindi, Marathi, English',
    slots: 5,
  },
  {
    id: '3',
    name: 'Adv. M. Sharma',
    specialization: 'Family Law',
    experience: '12 yrs',
    languages: 'Hindi, Marathi, English',
    slots: 3,
  },
];

export const SelectAdvocateDoc: React.FC<SelectAdvocateDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [selectedAdvocateId, setSelectedAdvocateId] = useState<string | null>(null);

  const colors = useMemo(() => {
    return {
      screenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
      headerBg: UX4GColors.primary600,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral100,
      cardBorder: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      avatarBg: isDark ? UX4GColors.primary950 : UX4GColors.primary50,
      avatarIconColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      slotBadgeBg: isDark ? UX4GColors.green800 : UX4GColors.green100,
      slotBadgeText: isDark ? UX4GColors.green300 : UX4GColors.green700,
      buttonBg: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      buttonText: isDark ? UX4GColors.primary950 : '#FFFFFF',
      phoneBorder: isDark ? UX4GColors.neutral800 : '#E5E7EB',
    };
  }, [isDark]);

  const codeString = useMemo(() => {
    return `import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-design-system';

interface AdvocateItem {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  languages: string;
  slots: number;
}

const ADVOCATES: AdvocateItem[] = [
  {
    id: '1',
    name: 'Adv. M. Sharma',
    specialization: 'Family Law',
    experience: '12 yrs',
    languages: 'Hindi, Marathi, English',
    slots: 8,
  },
  {
    id: '2',
    name: 'Adv. M. Sharma',
    specialization: 'Family Law',
    experience: '12 yrs',
    languages: 'Hindi, Marathi, English',
    slots: 5,
  },
  {
    id: '3',
    name: 'Adv. M. Sharma',
    specialization: 'Family Law',
    experience: '12 yrs',
    languages: 'Hindi, Marathi, English',
    slots: 3,
  },
];

export const SelectAdvocateScreen = ({
  isDark = false,
  onBack = () => {},
  onSelectAdvocate = (_advocate: AdvocateItem) => {},
}: {
  isDark?: boolean;
  onBack?: () => void;
  onSelectAdvocate?: (advocate: AdvocateItem) => void;
}) => {
  const colors = {
    screenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
    titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
    subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
    cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral100,
    cardBorder: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
    avatarBg: isDark ? UX4GColors.primary950 : UX4GColors.primary50,
    avatarIconColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
    slotBadgeBg: isDark ? UX4GColors.green800 : UX4GColors.green100,
    slotBadgeText: isDark ? UX4GColors.green300 : UX4GColors.green700,
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.screenBg }]}>
      {/* App Header */}
      <Ux4gAppHeader
        variant="filled"
        title="National Services Portal"
        showBackButton
        onBackPress={onBack}
      />

      <ScrollView style={styles.flexOne} contentContainerStyle={styles.scrollContainer}>
        {/* Title Section */}
        <Text style={[styles.title, { color: colors.titleColor }]}>Select an advocate</Text>
        <Text style={[styles.subtitle, { color: colors.subtleText }]}>
          District Legal Services Authority, Pune · 12 available
        </Text>

        {/* Advocate Cards List */}
        {ADVOCATES.map((advocate) => (
          <View
            key={advocate.id}
            style={[
              styles.advocateCard,
              { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
            ]}
          >
            <View style={styles.cardHeader}>
              {/* Balance/Scale Icon Avatar */}
              <View style={[styles.avatarBox, { backgroundColor: colors.avatarBg }]}>
                <Text style={{ fontSize: 20, color: colors.avatarIconColor }}>⚖️</Text>
              </View>

              <View style={styles.headerInfo}>
                <Text style={[styles.advocateName, { color: colors.titleColor }]}>
                  {advocate.name}
                </Text>
                <Text style={[styles.advocateMeta, { color: colors.subtleText }]}>
                  {advocate.specialization} · {advocate.experience}
                </Text>
              </View>

              {/* Slots Badge */}
              <View style={[styles.slotBadge, { backgroundColor: colors.slotBadgeBg }]}>
                <Text style={[styles.slotBadgeText, { color: colors.slotBadgeText }]}>
                  {\`\${advocate.slots} slots\`}
                </Text>
              </View>
            </View>

            <Text style={[styles.languagesText, { color: colors.subtleText }]}>
              Languages: {advocate.languages}
            </Text>

            <Ux4gButton
              text="Select"
              onPress={() => onSelectAdvocate(advocate)}
              variant="primary"
              size="medium"
              style={styles.selectBtn}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  flexOne: { flex: 1 },
  scrollContainer: { padding: 16, paddingBottom: 32 },
  title: { fontSize: 22, fontWeight: '800' },
  subtitle: { fontSize: 13, marginTop: 4, marginBottom: 16 },
  advocateCard: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerInfo: {
    flex: 1,
    marginLeft: 12,
  },
  advocateName: { fontSize: 14, fontWeight: '700' },
  advocateMeta: { fontSize: 12, marginTop: 2 },
  slotBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  slotBadgeText: { fontSize: 12, fontWeight: '700' },
  languagesText: { fontSize: 12, marginTop: 8, marginBottom: 12 },
  selectBtn: { width: '100%' },
});
`;
  }, []);

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Select Advocate</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Advocate selection pattern for consultation slot booking. Shows available advocates with specialization, experience, languages, and slot count.
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

          {/* Content Area */}
          <div className="wb-content">
            {/* 1. Preview Tab */}
            {activeMainTab === 'preview' && (
              <div
                className={`wb-preview-area ${isDark ? 'dark' : ''}`}
                style={{ flexDirection: 'column', alignItems: 'center' }}
              >
                {/* Mobile Phone Mockup */}
                <div
                  style={{
                    width: 360,
                    height: 760,
                    backgroundColor: colors.screenBg,
                    borderRadius: 24,
                    border: `1px solid ${colors.phoneBorder}`,
                    boxShadow: isDark
                      ? '0 12px 36px rgba(0, 0, 0, 0.6)'
                      : '0 12px 36px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                  }}
                >
                  {/* App Header */}
                  <div
                    style={{
                      width: '100%',
                      height: '60px',
                      padding: '0 16px',
                      backgroundColor: colors.headerBg,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      boxSizing: 'border-box',
                      flexShrink: 0,
                    }}
                  >
                    <button
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#FFFFFF',
                        cursor: 'pointer',
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                        arrow_back
                      </span>
                    </button>
                    <span
                      style={{
                        color: '#FFFFFF',
                        fontSize: '16px',
                        fontWeight: 600,
                        letterSpacing: '-0.2px',
                      }}
                    >
                      National Services Portal
                    </span>
                  </div>

                  {/* Scrollable Content Body */}
                  <div
                    style={{
                      flex: 1,
                      overflowY: 'auto',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Title Section */}
                    <div
                      style={{
                        fontSize: '22px',
                        fontWeight: 800,
                        color: colors.titleColor,
                        marginBottom: '4px',
                      }}
                    >
                      Select an advocate
                    </div>
                    <div
                      style={{
                        fontSize: '13px',
                        color: colors.subtleText,
                        lineHeight: '1.4',
                        marginBottom: '16px',
                      }}
                    >
                      District Legal Services Authority, Pune · 12 available
                    </div>

                    {/* Advocate Cards */}
                    {ADVOCATES.map((advocate) => {
                      const isSelected = selectedAdvocateId === advocate.id;
                      return (
                        <div
                          key={advocate.id}
                          style={{
                            width: '100%',
                            padding: '16px',
                            backgroundColor: colors.cardBg,
                            border: `1px solid ${colors.cardBorder}`,
                            borderRadius: '12px',
                            marginBottom: '12px',
                            boxSizing: 'border-box',
                            flexShrink: 0,
                          }}
                        >
                          {/* Top Row: Avatar + Info + Slots Badge */}
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            {/* Avatar */}
                            <div
                              style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '20px',
                                backgroundColor: colors.avatarBg,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                              }}
                            >
                              <span
                                className="material-symbols-outlined"
                                style={{ fontSize: '20px', color: colors.avatarIconColor }}
                              >
                                balance
                              </span>
                            </div>

                            {/* Info */}
                            <div style={{ flex: 1, marginLeft: '12px', minWidth: 0 }}>
                              <div
                                style={{
                                  fontSize: '14px',
                                  fontWeight: 700,
                                  color: colors.titleColor,
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                }}
                              >
                                {advocate.name}
                              </div>
                              <div
                                style={{
                                  fontSize: '12px',
                                  color: colors.subtleText,
                                  marginTop: '2px',
                                }}
                              >
                                {advocate.specialization} · {advocate.experience}
                              </div>
                            </div>

                            {/* Slots Badge */}
                            <div
                              style={{
                                padding: '3px 8px',
                                borderRadius: '4px',
                                backgroundColor: colors.slotBadgeBg,
                                color: colors.slotBadgeText,
                                fontSize: '12px',
                                fontWeight: 700,
                                flexShrink: 0,
                              }}
                            >
                              {advocate.slots} slots
                            </div>
                          </div>

                          {/* Languages */}
                          <div
                            style={{
                              fontSize: '12px',
                              color: colors.subtleText,
                              marginTop: '8px',
                              marginBottom: '12px',
                            }}
                          >
                            Languages: {advocate.languages}
                          </div>

                          {/* Select Button */}
                          <button
                            onClick={() => setSelectedAdvocateId(advocate.id)}
                            style={{
                              width: '100%',
                              height: '40px',
                              backgroundColor: colors.buttonBg,
                              color: colors.buttonText,
                              border: 'none',
                              borderRadius: '6px',
                              fontSize: '14px',
                              fontWeight: 600,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'opacity 0.15s ease',
                              opacity: isSelected ? 0.9 : 1,
                            }}
                          >
                            {isSelected ? 'Selected' : 'Select'}
                          </button>
                        </div>
                      );
                    })}
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

export default SelectAdvocateDoc;
