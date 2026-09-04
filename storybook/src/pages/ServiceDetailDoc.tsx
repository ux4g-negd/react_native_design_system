import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';

interface ServiceDetailDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

interface RelatedServiceItem {
  id: string;
  title: string;
  dept: string;
  fee: string;
  time: string;
}

const RELATED_SERVICES: RelatedServiceItem[] = [
  { id: '1', title: 'Death Certificate', dept: 'Municipal Corporation', fee: 'Free', time: '20 mins' },
  { id: '2', title: 'Marriage Certificate', dept: 'Registrar of Marriages', fee: '₹100', time: '15 days' },
  { id: '3', title: 'Aadhaar Enrolment', dept: 'UIDAI', fee: 'Free', time: '90 days' },
];

const TABS = ['Overview', 'Eligibility', 'Documents', 'Process'];

export const ServiceDetailDoc: React.FC<ServiceDetailDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const colors = useMemo(() => {
    return {
      screenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
      headerBg: UX4GColors.primary600,
      breadcrumbBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      heroCardBg: isDark ? UX4GColors.primary950 : UX4GColors.primary50,
      heroCardBorder: isDark ? UX4GColors.primary600 : UX4GColors.primary500,
      greenText: isDark ? UX4GColors.green300 : UX4GColors.green700,
      greenAccent: isDark ? UX4GColors.green300 : UX4GColors.green600,
      infoCardBg: isDark ? UX4GColors.primary950 : UX4GColors.primary50,
      infoCardBorder: isDark ? UX4GColors.primary600 : UX4GColors.primary300,
      relatedCardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral100,
      relatedCardBorder: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      applyBtnBorder: isDark ? UX4GColors.neutral600 : UX4GColors.primary300,
      applyBtnText: isDark ? UX4GColors.neutral50 : UX4GColors.primary600,
      phoneBorder: isDark ? UX4GColors.neutral800 : '#E5E7EB',
    };
  }, [isDark]);

  const codeString = useMemo(() => {
    return `import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-design-system';

interface RelatedServiceItem {
  id: string;
  title: string;
  dept: string;
  fee: string;
  time: string;
}

const RELATED_SERVICES: RelatedServiceItem[] = [
  { id: '1', title: 'Death Certificate', dept: 'Municipal Corporation', fee: 'Free', time: '20 mins' },
  { id: '2', title: 'Marriage Certificate', dept: 'Registrar of Marriages', fee: '₹100', time: '15 days' },
  { id: '3', title: 'Aadhaar Enrolment', dept: 'UIDAI', fee: 'Free', time: '90 days' },
];

const TABS = ['Overview', 'Eligibility', 'Documents', 'Process'];

export const ServiceDetailScreen = ({
  isDark = false,
  onBack = () => {},
  onApply = () => {},
  onRelatedApply = (_service: RelatedServiceItem) => {},
}: {
  isDark?: boolean;
  onBack?: () => void;
  onApply?: () => void;
  onRelatedApply?: (service: RelatedServiceItem) => void;
}) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const colors = {
    screenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
    headerBg: UX4GColors.primary600,
    breadcrumbBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
    titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
    subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
    border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
    primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
    heroCardBg: isDark ? UX4GColors.primary950 : UX4GColors.primary50,
    heroCardBorder: isDark ? UX4GColors.primary600 : UX4GColors.primary500,
    greenText: isDark ? UX4GColors.green300 : UX4GColors.green700,
    greenAccent: isDark ? UX4GColors.green300 : UX4GColors.green600,
    infoCardBg: isDark ? UX4GColors.primary950 : UX4GColors.primary50,
    infoCardBorder: isDark ? UX4GColors.primary600 : UX4GColors.primary300,
    relatedCardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral100,
    relatedCardBorder: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
    applyBtnBorder: isDark ? UX4GColors.neutral600 : UX4GColors.primary300,
    applyBtnText: isDark ? UX4GColors.neutral50 : UX4GColors.primary600,
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.screenBg }]}>
      {/* Header */}
      <Ux4gAppHeader
        variant="filled"
        title="National Services Portal"
        showBackButton
        onBackPress={onBack}
      />

      <ScrollView style={styles.flexOne} contentContainerStyle={styles.scrollContainer}>
        {/* Breadcrumb */}
        <View style={[styles.breadcrumbBar, { backgroundColor: colors.breadcrumbBg, borderBottomColor: colors.border }]}>
          <Text style={[styles.breadcrumbText, { color: colors.subtleText }]}>Home</Text>
          <Text style={[styles.breadcrumbSep, { color: colors.subtleText }]}>  ›  </Text>
          <Text style={[styles.breadcrumbText, { color: colors.subtleText }]}>Certificates</Text>
          <Text style={[styles.breadcrumbSep, { color: colors.subtleText }]}>  ›  </Text>
          <Text style={[styles.breadcrumbActive, { color: colors.primaryColor }]} numberOfLines={1}>
            Birth Certificate
          </Text>
        </View>

        {/* Hero Service Card */}
        <View style={styles.heroCardWrapper}>
          <View style={[styles.heroCard, { backgroundColor: colors.heroCardBg, borderColor: colors.heroCardBorder }]}>
            <Text style={[styles.heroTitle, { color: colors.titleColor }]}>Birth Certificate</Text>
            <Text style={[styles.heroSubtitle, { color: colors.subtleText }]}>
              Municipal Corporation · Registration of Births & Deaths
            </Text>
            <View style={styles.heroMetaRow}>
              <Text style={[styles.freeText, { color: colors.greenText }]}>Free</Text>
              <Text style={[styles.timeText, { color: colors.subtleText }]}>  ·  20 mins online</Text>
              <View style={styles.flexSpacer} />
              <Text style={[styles.govVerifiedText, { color: colors.greenText }]}>
                {'Government\\nverified'}
              </Text>
            </View>
            <Ux4gButton
              text="Apply now"
              onPress={onApply}
              variant="primary"
              size="medium"
              style={styles.applyNowBtn}
            />
          </View>
        </View>

        {/* Navigation Tabs */}
        <View style={[styles.tabBar, { borderBottomColor: colors.border }]}>
          {TABS.map((tab, idx) => {
            const isSelected = selectedTab === idx;
            return (
              <TouchableOpacity
                key={tab}
                onPress={() => setSelectedTab(idx)}
                style={[
                  styles.tabItem,
                  { borderBottomColor: isSelected ? colors.primaryColor : 'transparent' },
                ]}
              >
                <Text
                  style={[
                    styles.tabText,
                    {
                      color: isSelected ? colors.primaryColor : colors.subtleText,
                      fontWeight: isSelected ? '600' : '400',
                    },
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Tab Content Body */}
        <View style={styles.tabContentArea}>
          <Text style={[styles.sectionTitle, { color: colors.titleColor }]}>About this service</Text>
          <Text style={[styles.aboutDesc, { color: colors.subtleText }]}>
            A Birth Certificate is the official record of a child's birth, issued by the local municipal body. It is required for school admission, passport, Aadhaar enrolment and accessing welfare schemes. Apply online with hospital records, or visit your nearest municipal office.
          </Text>

          {/* Info Sections with border */}
          <View style={[styles.infoSection, { backgroundColor: colors.infoCardBg, borderColor: colors.infoCardBorder }]}>
            <Text style={[styles.infoTitle, { color: colors.primaryColor }]}>Eligibility</Text>
            <Text style={[styles.infoDesc, { color: colors.titleColor }]}>
              Child born within municipal limits. Apply within 21 days of birth; late registration allowed with an affidavit.
            </Text>
          </View>

          <View style={[styles.infoSection, { backgroundColor: colors.infoCardBg, borderColor: colors.infoCardBorder }]}>
            <Text style={[styles.infoTitle, { color: colors.primaryColor }]}>Required documents</Text>
            <Text style={[styles.infoDesc, { color: colors.titleColor }]}>
              Hospital discharge summary, both parents' Aadhaar, and proof of address.
            </Text>
          </View>

          <View style={[styles.infoSection, { backgroundColor: colors.infoCardBg, borderColor: colors.infoCardBorder }]}>
            <Text style={[styles.infoTitle, { color: colors.primaryColor }]}>Fee</Text>
            <Text style={[styles.infoDesc, { color: colors.titleColor }]}>
              Free within 21 days of birth. ₹20 late fee applies thereafter.
            </Text>
          </View>

          <View style={[styles.infoSection, { backgroundColor: colors.infoCardBg, borderColor: colors.infoCardBorder }]}>
            <Text style={[styles.infoTitle, { color: colors.primaryColor }]}>Processing time</Text>
            <Text style={[styles.infoDesc, { color: colors.titleColor }]}>
              20 minutes online · up to 7 working days if applied offline.
            </Text>
          </View>

          {/* Related Services */}
          <Text style={[styles.sectionTitle, { color: colors.titleColor, marginTop: 24, marginBottom: 12 }]}>
            Related services
          </Text>

          {RELATED_SERVICES.map((item) => (
            <View
              key={item.id}
              style={[
                styles.relatedCard,
                { backgroundColor: colors.relatedCardBg, borderColor: colors.relatedCardBorder },
              ]}
            >
              <Text style={[styles.relatedTitle, { color: colors.titleColor }]}>{item.title}</Text>
              <Text style={[styles.relatedDept, { color: colors.subtleText }]}>{item.dept}</Text>
              <View style={styles.relatedMetaRow}>
                <Text style={[styles.relatedFee, { color: colors.greenAccent }]}>{item.fee}</Text>
                <Text style={[styles.relatedTime, { color: colors.subtleText }]}>  ·  {item.time}</Text>
              </View>
              <Ux4gButton
                text="Apply"
                onPress={() => onRelatedApply(item)}
                variant="outline"
                size="small"
                borderColor={colors.applyBtnBorder}
                contentColor={colors.applyBtnText}
                style={styles.relatedApplyBtn}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  flexOne: { flex: 1 },
  scrollContainer: { paddingBottom: 32 },
  breadcrumbBar: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  breadcrumbText: { fontSize: 12 },
  breadcrumbSep: { fontSize: 12 },
  breadcrumbActive: { fontSize: 12, fontWeight: '600', flexShrink: 1 },
  heroCardWrapper: { padding: 16 },
  heroCard: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  heroTitle: { fontSize: 18, fontWeight: '800' },
  heroSubtitle: { fontSize: 12, marginTop: 4 },
  heroMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  freeText: { fontSize: 12, fontWeight: '600' },
  timeText: { fontSize: 12 },
  flexSpacer: { flex: 1 },
  govVerifiedText: { fontSize: 10, fontWeight: '500', textAlign: 'center' },
  applyNowBtn: { marginTop: 16, width: '100%' },
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2,
  },
  tabText: { fontSize: 13 },
  tabContentArea: { padding: 16 },
  sectionTitle: { fontSize: 16, fontWeight: '700' },
  aboutDesc: { fontSize: 13, lineHeight: 20, marginTop: 8, marginBottom: 20 },
  infoSection: {
    width: '100%',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  infoTitle: { fontSize: 13, fontWeight: '600' },
  infoDesc: { fontSize: 13, lineHeight: 18, marginTop: 4 },
  relatedCard: {
    width: '100%',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
  },
  relatedTitle: { fontSize: 14, fontWeight: '600' },
  relatedDept: { fontSize: 12, marginTop: 2 },
  relatedMetaRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  relatedFee: { fontSize: 12, fontWeight: '600' },
  relatedTime: { fontSize: 12 },
  relatedApplyBtn: { marginTop: 10, alignSelf: 'flex-start' },
});
`;
  }, []);

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Service Details</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Service detail page with breadcrumb, service card, tabs (Overview, Eligibility, Documents, Process), info sections with left border, and related services.
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
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Breadcrumb */}
                    <div
                      style={{
                        width: '100%',
                        padding: '10px 16px',
                        backgroundColor: colors.breadcrumbBg,
                        borderBottom: `1px solid ${colors.border}`,
                        display: 'flex',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                        flexShrink: 0,
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: '15px', color: colors.subtleText, marginRight: '4px' }}
                      >
                        home
                      </span>
                      <span style={{ fontSize: '12px', color: colors.subtleText }}>Home</span>
                      <span style={{ fontSize: '12px', color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600, margin: '0 6px' }}>
                        ›
                      </span>
                      <span style={{ fontSize: '12px', color: colors.subtleText }}>Certificates</span>
                      <span style={{ fontSize: '12px', color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600, margin: '0 6px' }}>
                        ›
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: 600,
                          color: colors.primaryColor,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        Birth Certificate
                      </span>
                    </div>

                    {/* Hero Service Card */}
                    <div style={{ padding: '16px', flexShrink: 0, boxSizing: 'border-box' }}>
                      <div
                        style={{
                          width: '100%',
                          padding: '16px',
                          backgroundColor: colors.heroCardBg,
                          border: `1px solid ${colors.heroCardBorder}`,
                          borderRadius: '12px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '18px',
                            fontWeight: 800,
                            color: colors.titleColor,
                            marginBottom: '4px',
                          }}
                        >
                          Birth Certificate
                        </div>
                        <div
                          style={{
                            fontSize: '12px',
                            color: colors.subtleText,
                            lineHeight: '1.4',
                          }}
                        >
                          Municipal Corporation · Registration of Births & Deaths
                        </div>

                        {/* Meta Row */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: '12px',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '12px',
                              fontWeight: 600,
                              color: colors.greenText,
                            }}
                          >
                            Free
                          </span>
                          <span
                            style={{
                              fontSize: '12px',
                              color: colors.subtleText,
                              marginLeft: '6px',
                            }}
                          >
                            · 20 mins online
                          </span>
                          <div style={{ flex: 1 }} />
                          <span
                            style={{
                              fontSize: '10px',
                              fontWeight: 500,
                              color: colors.greenText,
                              textAlign: 'center',
                              lineHeight: '1.2',
                            }}
                          >
                            Government<br />verified
                          </span>
                        </div>

                        {/* Apply Now Button */}
                        <button
                          style={{
                            marginTop: '16px',
                            width: '100%',
                            height: '40px',
                            backgroundColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
                            color: isDark ? UX4GColors.primary950 : '#FFFFFF',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '14px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          Apply now
                        </button>
                      </div>
                    </div>

                    {/* Navigation Underline Tabs */}
                    <div
                      style={{
                        display: 'flex',
                        borderBottom: `1px solid ${colors.border}`,
                        flexShrink: 0,
                      }}
                    >
                      {TABS.map((tab, idx) => {
                        const isSelected = selectedTab === idx;
                        return (
                          <button
                            key={tab}
                            onClick={() => setSelectedTab(idx)}
                            style={{
                              flex: 1,
                              padding: '10px 0',
                              background: 'none',
                              border: 'none',
                              borderBottom: isSelected
                                ? `2px solid ${colors.primaryColor}`
                                : '2px solid transparent',
                              color: isSelected ? colors.primaryColor : colors.subtleText,
                              fontSize: '13px',
                              fontWeight: isSelected ? 600 : 400,
                              cursor: 'pointer',
                              textAlign: 'center',
                            }}
                          >
                            {tab}
                          </button>
                        );
                      })}
                    </div>

                    {/* Tab Content Section */}
                    <div style={{ padding: '16px', flexShrink: 0 }}>
                      <div
                        style={{
                          fontSize: '16px',
                          fontWeight: 700,
                          color: colors.titleColor,
                          marginBottom: '8px',
                        }}
                      >
                        About this service
                      </div>
                      <div
                        style={{
                          fontSize: '13px',
                          color: colors.subtleText,
                          lineHeight: '1.5',
                          marginBottom: '20px',
                        }}
                      >
                        A Birth Certificate is the official record of a child's birth, issued by the local municipal body. It is required for school admission, passport, Aadhaar enrolment and accessing welfare schemes. Apply online with hospital records, or visit your nearest municipal office.
                      </div>

                      {/* Info Section Cards */}
                      <div
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          backgroundColor: colors.infoCardBg,
                          border: `1px solid ${colors.infoCardBorder}`,
                          borderRadius: '8px',
                          marginBottom: '16px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '13px',
                            fontWeight: 600,
                            color: colors.primaryColor,
                            marginBottom: '4px',
                          }}
                        >
                          Eligibility
                        </div>
                        <div
                          style={{
                            fontSize: '13px',
                            color: colors.titleColor,
                            lineHeight: '1.4',
                          }}
                        >
                          Child born within municipal limits. Apply within 21 days of birth; late registration allowed with an affidavit.
                        </div>
                      </div>

                      <div
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          backgroundColor: colors.infoCardBg,
                          border: `1px solid ${colors.infoCardBorder}`,
                          borderRadius: '8px',
                          marginBottom: '16px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '13px',
                            fontWeight: 600,
                            color: colors.primaryColor,
                            marginBottom: '4px',
                          }}
                        >
                          Required documents
                        </div>
                        <div
                          style={{
                            fontSize: '13px',
                            color: colors.titleColor,
                            lineHeight: '1.4',
                          }}
                        >
                          Hospital discharge summary, both parents' Aadhaar, and proof of address.
                        </div>
                      </div>

                      <div
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          backgroundColor: colors.infoCardBg,
                          border: `1px solid ${colors.infoCardBorder}`,
                          borderRadius: '8px',
                          marginBottom: '16px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '13px',
                            fontWeight: 600,
                            color: colors.primaryColor,
                            marginBottom: '4px',
                          }}
                        >
                          Fee
                        </div>
                        <div
                          style={{
                            fontSize: '13px',
                            color: colors.titleColor,
                            lineHeight: '1.4',
                          }}
                        >
                          Free within 21 days of birth. ₹20 late fee applies thereafter.
                        </div>
                      </div>

                      <div
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          backgroundColor: colors.infoCardBg,
                          border: `1px solid ${colors.infoCardBorder}`,
                          borderRadius: '8px',
                          marginBottom: '16px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '13px',
                            fontWeight: 600,
                            color: colors.primaryColor,
                            marginBottom: '4px',
                          }}
                        >
                          Processing time
                        </div>
                        <div
                          style={{
                            fontSize: '13px',
                            color: colors.titleColor,
                            lineHeight: '1.4',
                          }}
                        >
                          20 minutes online · up to 7 working days if applied offline.
                        </div>
                      </div>

                      {/* Related Services */}
                      <div
                        style={{
                          fontSize: '16px',
                          fontWeight: 700,
                          color: colors.titleColor,
                          marginTop: '24px',
                          marginBottom: '12px',
                        }}
                      >
                        Related services
                      </div>

                      {RELATED_SERVICES.map((item) => (
                        <div
                          key={item.id}
                          style={{
                            width: '100%',
                            padding: '14px',
                            backgroundColor: colors.relatedCardBg,
                            border: `1px solid ${colors.relatedCardBorder}`,
                            borderRadius: '12px',
                            marginBottom: '12px',
                            boxSizing: 'border-box',
                          }}
                        >
                          <div
                            style={{
                              fontSize: '14px',
                              fontWeight: 600,
                              color: colors.titleColor,
                            }}
                          >
                            {item.title}
                          </div>
                          <div
                            style={{
                              fontSize: '12px',
                              color: colors.subtleText,
                              marginTop: '2px',
                            }}
                          >
                            {item.dept}
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              marginTop: '8px',
                            }}
                          >
                            <span
                              style={{
                                fontSize: '12px',
                                fontWeight: 600,
                                color: colors.greenAccent,
                              }}
                            >
                              {item.fee}
                            </span>
                            <span
                              style={{
                                fontSize: '12px',
                                color: colors.subtleText,
                                marginLeft: '6px',
                              }}
                            >
                              · {item.time}
                            </span>
                          </div>
                          <button
                            style={{
                              marginTop: '10px',
                              padding: '4px 14px',
                              backgroundColor: 'transparent',
                              border: `1px solid ${colors.applyBtnBorder}`,
                              borderRadius: '6px',
                              color: colors.applyBtnText,
                              fontSize: '13px',
                              fontWeight: 600,
                              cursor: 'pointer',
                            }}
                          >
                            Apply
                          </button>
                        </div>
                      ))}
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

export default ServiceDetailDoc;
