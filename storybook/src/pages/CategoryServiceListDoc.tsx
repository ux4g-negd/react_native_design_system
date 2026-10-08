import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gResultList } from '../../../src/components/result-list/ResultList';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface CategoryServiceListDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';

interface ServiceDetails {
  eligibility: string;
  coverage: string;
  department: string;
  applyAt: string;
  documents: string;
  cardType: string;
}

interface ServiceItem {
  id: string;
  title: string;
  fee: string;
  time: string;
  isPaid: boolean;
  details: ServiceDetails;
}

const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Ayushman Bharat Health Card',
    fee: 'Free',
    time: '7 days',
    isPaid: false,
    details: {
      eligibility: 'SECC 2011 families',
      coverage: '₹5,00,000 per year',
      department: 'Health & Family Welfare',
      applyAt: 'Empanelled hospitals',
      documents: 'Aadhaar, ration card',
      cardType: 'Digital, downloadable',
    },
  },
  {
    id: '2',
    title: 'Hospital Empanelment',
    fee: 'Free',
    time: '30 days',
    isPaid: false,
    details: {
      eligibility: 'Registered medical facilities',
      coverage: 'National network',
      department: 'Health & Family Welfare',
      applyAt: 'State health agency',
      documents: 'Registration & hospital NOC',
      cardType: 'Accreditation certificate',
    },
  },
  {
    id: '3',
    title: 'Birth Certificate',
    fee: 'Free',
    time: '20 mins',
    isPaid: false,
    details: {
      eligibility: 'All citizens born in area',
      coverage: 'Valid nationwide',
      department: 'Revenue & Municipal Dept',
      applyAt: 'Citizen service center',
      documents: 'Hospital discharge slip',
      cardType: 'Digital, downloadable PDF',
    },
  },
  {
    id: '4',
    title: 'Disability Certificate (UDID)',
    fee: 'Free',
    time: '15 days',
    isPaid: false,
    details: {
      eligibility: 'Persons with Disabilities',
      coverage: 'Universal disability scheme',
      department: 'Empowerment of PwD',
      applyAt: 'District Medical Board',
      documents: 'Medical evaluation report',
      cardType: 'Smart card / digital',
    },
  },
  {
    id: '5',
    title: 'Health Insurance Claim',
    fee: 'Free',
    time: '10 days',
    isPaid: false,
    details: {
      eligibility: 'Enrolled scheme policyholders',
      coverage: 'As per approved claim package',
      department: 'Insurance & Claims Division',
      applyAt: 'Designated TPA desk',
      documents: 'Discharge summary, final bills',
      cardType: 'Direct bank settlement',
    },
  },
  {
    id: '6',
    title: 'Vaccination Certificate',
    fee: 'Free',
    time: 'Instant',
    isPaid: false,
    details: {
      eligibility: 'All vaccinated beneficiaries',
      coverage: 'Nationwide & international',
      department: 'Ministry of Health & FW',
      applyAt: 'CoWIN / National health portal',
      documents: 'Beneficiary ID / Aadhaar',
      cardType: 'QR-coded verifiable PDF',
    },
  },
  {
    id: '7',
    title: 'Medical Reimbursement',
    fee: '₹ 50',
    time: '21 days',
    isPaid: true,
    details: {
      eligibility: 'State / Central employees',
      coverage: 'Approved medical expenses',
      department: 'CGHS / State Health Services',
      applyAt: 'Administrative office / portal',
      documents: 'Original prescription & bills',
      cardType: 'Bank credit sanction',
    },
  },
  {
    id: '8',
    title: 'Janani Suraksha Yojana',
    fee: 'Free',
    time: 'On delivery',
    isPaid: false,
    details: {
      eligibility: 'Pregnant women in BPL / SC / ST',
      coverage: 'Direct financial assistance',
      department: 'National Health Mission',
      applyAt: 'Govt health centre / ASHA',
      documents: 'MCP card, Bank passbook',
      cardType: 'Direct Benefit Transfer (DBT)',
    },
  },
];

const FILTER_CHIPS = ['All · 48', 'Hospitals · 12', 'Certificates · 18', 'Insurance'];

export const CategoryServiceListDoc: React.FC<CategoryServiceListDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [selectedChip, setSelectedChip] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 8;

  const chipsScrollRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!chipsScrollRef.current) return;
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.pageX - chipsScrollRef.current.offsetLeft);
    setScrollLeftPos(chipsScrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !chipsScrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - chipsScrollRef.current.offsetLeft;
    const walk = x - startX;
    if (Math.abs(walk) > 3) {
      setHasMoved(true);
    }
    chipsScrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (chipsScrollRef.current && e.deltaY) {
      chipsScrollRef.current.scrollLeft += e.deltaY;
    }
  };

  const colors = useMemo(() => {
    return {
      screenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
      headerBg: UX4GColors.primary600,
      breadcrumbBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      rowBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      badgeBg: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      badgeText: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      buttonBorder: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300,
      buttonText: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      phoneBorder: isDark ? UX4GColors.neutral800 : '#E5E7EB',
      chipSelectedBg: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      chipSelectedText: isDark ? UX4GColors.primary950 : '#FFFFFF',
      chipUnselectedBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      chipUnselectedBorder: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
      chipUnselectedText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral900,
      navCircleBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
      navIconColor: isDark ? UX4GColors.primary200 : UX4GColors.primary600,
      dotActiveBg: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      dotInactiveBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
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
  Ux4gChoiceChip,
  Ux4gChipGroup,
  Ux4gResultList,
  UX4GColors,
} from 'ux4g-react-native-components';

interface ServiceDetails {
  eligibility: string;
  coverage: string;
  department: string;
  applyAt: string;
  documents: string;
  cardType: string;
}

interface ServiceItem {
  id: string;
  title: string;
  fee: string;
  time: string;
  isPaid: boolean;
  details: ServiceDetails;
}

const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Ayushman Bharat Health Card',
    fee: 'Free',
    time: '7 days',
    isPaid: false,
    details: {
      eligibility: 'SECC 2011 families',
      coverage: '₹5,00,000 per year',
      department: 'Health & Family Welfare',
      applyAt: 'Empanelled hospitals',
      documents: 'Aadhaar, ration card',
      cardType: 'Digital, downloadable',
    },
  },
  {
    id: '2',
    title: 'Hospital Empanelment',
    fee: 'Free',
    time: '30 days',
    isPaid: false,
    details: {
      eligibility: 'Registered medical facilities',
      coverage: 'National network',
      department: 'Health & Family Welfare',
      applyAt: 'State health agency',
      documents: 'Registration & hospital NOC',
      cardType: 'Accreditation certificate',
    },
  },
  {
    id: '3',
    title: 'Birth Certificate',
    fee: 'Free',
    time: '20 mins',
    isPaid: false,
    details: {
      eligibility: 'All citizens born in area',
      coverage: 'Valid nationwide',
      department: 'Revenue & Municipal Dept',
      applyAt: 'Citizen service center',
      documents: 'Hospital discharge slip',
      cardType: 'Digital, downloadable PDF',
    },
  },
  {
    id: '4',
    title: 'Disability Certificate (UDID)',
    fee: 'Free',
    time: '15 days',
    isPaid: false,
    details: {
      eligibility: 'Persons with Disabilities',
      coverage: 'Universal disability scheme',
      department: 'Empowerment of PwD',
      applyAt: 'District Medical Board',
      documents: 'Medical evaluation report',
      cardType: 'Smart card / digital',
    },
  },
  {
    id: '5',
    title: 'Health Insurance Claim',
    fee: 'Free',
    time: '10 days',
    isPaid: false,
    details: {
      eligibility: 'Enrolled scheme policyholders',
      coverage: 'As per approved claim package',
      department: 'Insurance & Claims Division',
      applyAt: 'Designated TPA desk',
      documents: 'Discharge summary, final bills',
      cardType: 'Direct bank settlement',
    },
  },
  {
    id: '6',
    title: 'Vaccination Certificate',
    fee: 'Free',
    time: 'Instant',
    isPaid: false,
    details: {
      eligibility: 'All vaccinated beneficiaries',
      coverage: 'Nationwide & international',
      department: 'Ministry of Health & FW',
      applyAt: 'CoWIN / National health portal',
      documents: 'Beneficiary ID / Aadhaar',
      cardType: 'QR-coded verifiable PDF',
    },
  },
  {
    id: '7',
    title: 'Medical Reimbursement',
    fee: '₹ 50',
    time: '21 days',
    isPaid: true,
    details: {
      eligibility: 'State / Central employees',
      coverage: 'Approved medical expenses',
      department: 'CGHS / State Health Services',
      applyAt: 'Administrative office / portal',
      documents: 'Original prescription & bills',
      cardType: 'Bank credit sanction',
    },
  },
  {
    id: '8',
    title: 'Janani Suraksha Yojana',
    fee: 'Free',
    time: 'On delivery',
    isPaid: false,
    details: {
      eligibility: 'Pregnant women in BPL / SC / ST',
      coverage: 'Direct financial assistance',
      department: 'National Health Mission',
      applyAt: 'Govt health centre / ASHA',
      documents: 'MCP card, Bank passbook',
      cardType: 'Direct Benefit Transfer (DBT)',
    },
  },
];

const FILTER_CHIPS = ['All · 48', 'Hospitals · 12', 'Certificates · 18', 'Insurance'];

export const CategoryServiceListScreen = ({
  isDark = false,
  onBack = () => {},
  onFilterPress = () => {},
  onApply = (_service: ServiceItem) => {},
}: {
  isDark?: boolean;
  onBack?: () => void;
  onFilterPress?: () => void;
  onApply?: (service: ServiceItem) => void;
}) => {
  const [selectedChip, setSelectedChip] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 8;

  const colors = {
    screenBg: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50,
    headerBg: UX4GColors.primary600,
    breadcrumbBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
    titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
    subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
    rowBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
    border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
    primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
    badgeBg: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
    badgeText: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
    buttonBorder: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300,
    buttonText: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
    navCircleBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
    navIconColor: isDark ? UX4GColors.primary200 : UX4GColors.primary600,
    dotActiveBg: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
    dotInactiveBg: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.screenBg }]}>
      {/* App Header */}
      <Ux4gAppHeader
        variant="filled"
        title="National Services Portal"
        showBackButton
        onBackPress={onBack}
        actions={[
          {
            customWidget: (
              <TouchableOpacity key="menu" style={styles.menuBtn} onPress={() => {}}>
                <Text style={styles.menuIcon}>☰</Text>
              </TouchableOpacity>
            ),
          },
        ]}
      />

      {/* Breadcrumb Bar */}
      <View style={[styles.breadcrumbBar, { backgroundColor: colors.breadcrumbBg }]}>
        <Text style={[styles.breadcrumbText, { color: colors.subtleText }]}>Home</Text>
        <Text style={[styles.breadcrumbSep, { color: colors.subtleText }]}>  ›  </Text>
        <Text style={[styles.breadcrumbText, { color: colors.subtleText }]}>Services</Text>
        <Text style={[styles.breadcrumbSep, { color: colors.subtleText }]}>  ›  </Text>
        <Text style={[styles.breadcrumbActive, { color: colors.primaryColor }]}>Health</Text>
      </View>

      <ScrollView style={styles.flexOne} contentContainerStyle={styles.scrollContainer}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={[styles.title, { color: colors.titleColor }]}>Health services</Text>
          <Text style={[styles.subtitle, { color: colors.subtleText }]}>
            Hospitals, certificates, insurance and disability
          </Text>
        </View>

        {/* Results count + Filters button */}
        <View style={styles.countRow}>
          <Text style={[styles.countText, { color: colors.titleColor }]}>48 services</Text>
          <Ux4gButton
            text="Filters"
            onPress={onFilterPress}
            variant="outline"
            size="small"
            leadingIcon="tune"
            borderColor={colors.buttonBorder}
            contentColor={colors.buttonText}
          />
        </View>

        {/* Filter Choice Chips */}
        <Ux4gChipGroup
          arrangement="horizontal"
          containerStyle={styles.chipsRow}
          chips={FILTER_CHIPS.map((label, idx) => (
            <Ux4gChoiceChip
              key={label}
              text={label}
              selected={selectedChip === idx}
              onClick={() => setSelectedChip(idx)}
            />
          ))}
        />

        {/* Service Cards using Ux4gResultList */}
        <View style={styles.serviceList}>
          {SERVICES.map((item, idx) => (
            <View
              key={item.id}
              style={[
                styles.serviceCardWrapper,
                { backgroundColor: colors.rowBg, borderColor: colors.border },
              ]}
            >
              <Ux4gResultList
                title={item.title}
                statusTag={item.isPaid ? 'Paid' : 'Free'}
                tagColorScheme="neutral"
                customMetadata={
                  <View style={styles.metaRow}>
                    {item.isPaid && (
                      <Text style={[styles.feeText, { color: colors.subtleText }]}>{item.fee}</Text>
                    )}
                    <Text style={[styles.metaTime, { color: colors.subtleText }]}>⏱ {item.time}</Text>
                  </View>
                }
                actionButtonText="Apply"
                onActionPressed={() => onApply(item)}
                initialExpanded={idx === 0}
                showBottomDivider={false}
                contentPadding={12}
                details={[
                  { label: 'Eligibility', value: item.details.eligibility },
                  { label: 'Coverage', value: item.details.coverage },
                  { label: 'Department', value: item.details.department },
                  { label: 'Apply at', value: item.details.applyAt },
                  { label: 'Documents', value: item.details.documents },
                  { label: 'Card type', value: item.details.cardType },
                ]}
              />
            </View>
          ))}
        </View>

        {/* Working Pagination Bar */}
        <View style={styles.paginationRow}>
          <TouchableOpacity
            style={[styles.pageNavBtn, { backgroundColor: colors.navCircleBg }]}
            onPress={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <Text style={{ color: colors.navIconColor }}>‹</Text>
          </TouchableOpacity>

          {Array.from({ length: totalPages }).map((_, idx) => {
            const pageNum = idx + 1;
            const isActive = pageNum === currentPage;
            return (
              <TouchableOpacity
                key={pageNum}
                onPress={() => setCurrentPage(pageNum)}
                style={
                  isActive
                    ? [styles.pagePillActive, { backgroundColor: colors.dotActiveBg }]
                    : [styles.pageDot, { backgroundColor: colors.dotInactiveBg }]
                }
              />
            );
          })}

          <TouchableOpacity
            style={[styles.pageNavBtn, { backgroundColor: colors.navCircleBg }]}
            onPress={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            <Text style={{ color: colors.navIconColor }}>›</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: UX4GColors.primary200,
    backgroundColor: UX4GColors.neutral0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 18,
    color: UX4GColors.primary,
  },
  safeArea: { flex: 1 },
  flexOne: { flex: 1 },
  scrollContainer: { paddingBottom: 24 },
  breadcrumbBar: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  breadcrumbText: { fontSize: 12 },
  breadcrumbSep: { fontSize: 12 },
  breadcrumbActive: { fontSize: 12, fontWeight: '600' },
  titleSection: { padding: 16 },
  title: { fontSize: 18, fontWeight: '800', marginBottom: 4 },
  subtitle: { fontSize: 13 },
  countRow: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  countText: { fontSize: 13, fontWeight: '600' },
  chipsRow: { paddingHorizontal: 16, paddingVertical: 8, gap: 8 },
  serviceList: { paddingHorizontal: 16, marginTop: 4, gap: 10 },
  serviceCardWrapper: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  feeText: { fontSize: 11 },
  metaTime: { fontSize: 11 },
  paginationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    gap: 6,
  },
  pageNavBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagePillActive: {
    width: 31,
    height: 10,
    borderRadius: 99,
  },
  pageDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
  },
});
`;
  }, []);

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Category Service List</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Category-specific service listing with breadcrumb, filter chips, expandable ResultList cards with detailed info, and interactive pagination.
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
                    <span style={{ fontSize: '12px', color: colors.subtleText, margin: '0 6px' }}>›</span>
                    <span style={{ fontSize: '12px', color: colors.subtleText }}>Services</span>
                    <span style={{ fontSize: '12px', color: colors.subtleText, margin: '0 6px' }}>›</span>
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: colors.primaryColor,
                      }}
                    >
                      Health
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
                    {/* Title Section */}
                    <div style={{ padding: '16px 16px 8px', flexShrink: 0 }}>
                      <div
                        style={{
                          fontSize: '18px',
                          fontWeight: 800,
                          color: colors.titleColor,
                          marginBottom: '4px',
                        }}
                      >
                        Health services
                      </div>
                      <div
                        style={{
                          fontSize: '13px',
                          color: colors.subtleText,
                          lineHeight: '1.4',
                        }}
                      >
                        Hospitals, certificates, insurance and disability
                      </div>
                    </div>

                    {/* Results count + Filters button */}
                    <div
                      style={{
                        padding: '8px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          fontSize: '14px',
                          fontWeight: 700,
                          color: colors.titleColor,
                        }}
                      >
                        48 services
                      </span>
                      <button
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '5px 12px',
                          backgroundColor: 'transparent',
                          border: `1px solid ${colors.buttonBorder}`,
                          borderRadius: '6px',
                          color: colors.buttonText,
                          fontSize: '13px',
                          fontWeight: 600,
                          cursor: 'pointer',
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                          tune
                        </span>
                        Filters
                      </button>
                    </div>

                    {/* Filter Choice Chips */}
                    <div
                      ref={chipsScrollRef}
                      className="hide-scrollbar"
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseUp}
                      onWheel={handleWheel}
                      style={{
                        padding: '8px 16px 12px',
                        display: 'flex',
                        gap: '8px',
                        overflowX: 'auto',
                        whiteSpace: 'nowrap',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        flexShrink: 0,
                        boxSizing: 'border-box',
                        width: '100%',
                        cursor: isDragging ? 'grabbing' : 'grab',
                        userSelect: 'none',
                      }}
                    >
                      {FILTER_CHIPS.map((label, idx) => {
                        const isSelected = selectedChip === idx;
                        return (
                          <button
                            key={label}
                            onClick={() => {
                              if (!hasMoved) {
                                setSelectedChip(idx);
                              }
                            }}
                            style={{
                              padding: '6px 14px',
                              borderRadius: '6px',
                              border: isSelected
                                ? 'none'
                                : `1px solid ${colors.chipUnselectedBorder}`,
                              backgroundColor: isSelected
                                ? colors.chipSelectedBg
                                : colors.chipUnselectedBg,
                              color: isSelected
                                ? colors.chipSelectedText
                                : colors.chipUnselectedText,
                              fontSize: '13px',
                              fontWeight: isSelected ? 600 : 500,
                              cursor: 'pointer',
                              flexShrink: 0,
                              boxSizing: 'border-box',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              height: '32px',
                            }}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>

                    {/* Expandable Service Cards List using Ux4gResultList */}
                    <div
                      style={{
                        padding: '0 16px',
                        flexShrink: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                      }}
                    >
                      <Ux4gThemeProvider isDark={isDark}>
                        {SERVICES.map((item, idx) => (
                          <div
                            key={item.id}
                            style={{
                              borderRadius: '12px',
                              border: `1px solid ${colors.border}`,
                              backgroundColor: colors.rowBg,
                              overflow: 'hidden',
                              boxSizing: 'border-box',
                            }}
                          >
                            <Ux4gResultList
                              title={item.title}
                              statusTag={item.isPaid ? 'Paid' : 'Free'}
                              tagColorScheme="neutral"
                              customMetadata={
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                  {item.isPaid && (
                                    <span style={{ fontSize: '11px', color: colors.subtleText }}>
                                      {item.fee}
                                    </span>
                                  )}
                                  <span
                                    className="material-symbols-outlined"
                                    style={{ fontSize: '13px', color: colors.subtleText }}
                                  >
                                    schedule
                                  </span>
                                  <span style={{ fontSize: '11px', color: colors.subtleText }}>
                                    {item.time}
                                  </span>
                                </div>
                              }
                              actionButtonText="Apply"
                              onActionPressed={() => {}}
                              initialExpanded={idx === 0}
                              showBottomDivider={false}
                              contentPadding={12}
                              details={[
                                { label: 'Eligibility', value: item.details.eligibility },
                                { label: 'Coverage', value: item.details.coverage },
                                { label: 'Department', value: item.details.department },
                                { label: 'Apply at', value: item.details.applyAt },
                                { label: 'Documents', value: item.details.documents },
                                { label: 'Card type', value: item.details.cardType },
                              ]}
                            />
                          </div>
                        ))}
                      </Ux4gThemeProvider>
                    </div>

                    {/* Working Pagination Bar */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '16px 0 24px',
                        gap: '6px',
                      }}
                    >
                      {/* Prev Button */}
                      <button
                        onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          backgroundColor: colors.navCircleBg,
                          color: colors.navIconColor,
                          border: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: currentPage === 1 ? 'default' : 'pointer',
                          opacity: currentPage === 1 ? 0.4 : 1,
                          padding: 0,
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                          chevron_left
                        </span>
                      </button>

                      {/* Dot & Pill Indicators */}
                      {Array.from({ length: totalPages }).map((_, idx) => {
                        const pageNum = idx + 1;
                        const isActive = pageNum === currentPage;
                        return (
                          <div
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            style={{
                              width: isActive ? '31px' : '9px',
                              height: isActive ? '10px' : '9px',
                              borderRadius: isActive ? '99px' : '50%',
                              backgroundColor: isActive ? colors.dotActiveBg : colors.dotInactiveBg,
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                            }}
                          />
                        );
                      })}

                      {/* Next Button */}
                      <button
                        onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          backgroundColor: colors.navCircleBg,
                          color: colors.navIconColor,
                          border: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: currentPage === totalPages ? 'default' : 'pointer',
                          opacity: currentPage === totalPages ? 0.4 : 1,
                          padding: 0,
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                          chevron_right
                        </span>
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

export default CategoryServiceListDoc;
