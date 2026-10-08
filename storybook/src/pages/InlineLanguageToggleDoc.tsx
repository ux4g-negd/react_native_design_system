import React, { useState, useMemo, useRef, useEffect } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface InlineLanguageToggleDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

const LANGUAGES = [
  { id: 'en', label: 'English' },
  { id: 'hi', label: 'हिन्दी' },
  { id: 'ta', label: 'தமிழ்' },
  { id: 'te', label: 'తెలుగు' },
  { id: 'mr', label: 'मराठी' },
  { id: 'more', label: '+3 m...' },
];

const TRANSLATIONS: Record<string, {
  title: string;
  subtitle: string;
  applicantName: string;
  fatherName: string;
  income: string;
}> = {
  en: {
    title: 'Apply for Income Certificate',
    subtitle: 'Use the language switcher to change the form language. Your entered details will stay saved.',
    applicantName: 'Applicant name',
    fatherName: "Father's / husband's name",
    income: 'Annual family income (₹)',
  },
  hi: {
    title: 'आय प्रमाण पत्र के लिए आवेदन करें',
    subtitle: 'फॉर्म की भाषा बदलने के लिए भाषा स्विचर का उपयोग करें। आपके द्वारा दर्ज विवरण सुरक्षित रहेंगे।',
    applicantName: 'आवेदक का नाम',
    fatherName: 'पिता / पति का नाम',
    income: 'वार्षिक पारिवारिक आय (₹)',
  },
  ta: {
    title: 'வருமானச் சான்றிதழுக்கு விண்ணப்பிக்கவும்',
    subtitle: 'படிவ மொழியை மாற்ற மொழி மாற்றியைப் பயன்படுத்தவும். உள்ளிட்ட விவரங்கள் சேமிக்கப்படும்.',
    applicantName: 'விண்ணப்பதாரர் பெயர்',
    fatherName: 'தந்தை / கணவரின் பெயர்',
    income: 'ஆண்டு குடும்ப வருமானம் (₹)',
  },
  te: {
    title: 'ఆదాయ ధృవీకరణ పత్రం కోసం దరఖాస్తు చేయండి',
    subtitle: 'ఫారమ్ భాషను మార్చడానికి లాంగ్వేజ్ స్విచ్చర్‌ని ఉపయోగించండి. మీ వివరాలు సేవ్ చేయబడతాయి.',
    applicantName: 'దరఖాస్తుదారు పేరు',
    fatherName: 'తండ్రి / భర్త పేరు',
    income: 'వార్షిక కుటుంబ ఆదాయం (₹)',
  },
  mr: {
    title: 'उत्पन्न प्रमाणपत्रासाठी अर्ज करा',
    subtitle: 'फॉर्मची भाषा बदलण्यासाठी भाषा स्विचर वापरा. तुमचे तपशील सुरक्षित राहतील.',
    applicantName: 'अर्जदाराचे नाव',
    fatherName: 'वडिलांचे / पतीचे नाव',
    income: 'वार्षिक कौटुंबिक उत्पन्न (₹)',
  },
  more: {
    title: 'Apply for Income Certificate',
    subtitle: 'Use the language switcher to change the form language. Your entered details will stay saved.',
    applicantName: 'Applicant name',
    fatherName: "Father's / husband's name",
    income: 'Annual family income (₹)',
  },
};

export const InlineLanguageToggleDoc: React.FC<InlineLanguageToggleDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [selectedLang, setSelectedLang] = useState<string>('en');

  // Form field states preserving entered data across language switches
  const [applicantName, setApplicantName] = useState<string>('Ramesh Kumar');
  const [fatherName, setFatherName] = useState<string>('Suresh Kumar');
  const [annualIncome, setAnnualIncome] = useState<string>('2,40,000');

  const chipsScrollRef = useRef<HTMLDivElement | null>(null);

  // Native non-passive wheel listener for immediate horizontal scroll without page jitter
  useEffect(() => {
    const el = chipsScrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0 || e.deltaX !== 0) {
        e.preventDefault();
        e.stopPropagation();
        el.scrollLeft += e.deltaY !== 0 ? e.deltaY : e.deltaX;
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', handleWheel);
    };
  }, [variant, activeMainTab]);

  const handleChipsMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const slider = chipsScrollRef.current || e.currentTarget;
    let isDown = true;
    let startX = e.pageX - slider.offsetLeft;
    let scrollLeft = slider.scrollLeft;

    slider.style.cursor = 'grabbing';

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!isDown) return;
      moveEvent.preventDefault();
      const x = moveEvent.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      isDown = false;
      if (slider) slider.style.cursor = 'grab';
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  const isCard = variant === 'card';
  const currentText = TRANSLATIONS[selectedLang] || TRANSLATIONS.en;

  const colors = useMemo(() => {
    const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
    const subtleText = isDark ? UX4GColors.neutral300 : '#4B5563';
    const labelColor = isDark ? UX4GColors.neutral300 : '#374151';
    const scaffoldBg = isDark ? UX4GColors.neutral950 : '#FFFFFF';
    const containerCardBg = isDark ? UX4GColors.neutral800 : '#FFFFFF';
    const inputBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
    const inputBorder = isDark ? UX4GColors.neutral700 : '#E5E7EB';
    const chipBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
    const chipBorder = isDark ? UX4GColors.neutral700 : '#D1D5DB';
    const chipText = isDark ? UX4GColors.neutral200 : '#374151';
    const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
    const selectedChipBg = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
    const selectedChipText = isDark ? '#000000' : '#FFFFFF';
    const headerBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
    const headerDividerColor = isDark ? UX4GColors.neutral700 : '#D1D5DB';
    const menuBtnBorder = isDark ? UX4GColors.primary400 : UX4GColors.primary200;
    const footerText = isDark ? UX4GColors.neutral400 : '#6B7280';
    const editIconColor = isDark ? UX4GColors.neutral400 : '#4B5563';
    const screenBg = isCard
      ? isDark
        ? UX4GColors.primary800
        : UX4GColors.primary100
      : scaffoldBg;

    return {
      titleColor,
      subtleText,
      labelColor,
      scaffoldBg,
      containerCardBg,
      inputBg,
      inputBorder,
      chipBg,
      chipBorder,
      chipText,
      primaryColor,
      selectedChipBg,
      selectedChipText,
      headerBg,
      headerDividerColor,
      menuBtnBorder,
      footerText,
      editIconColor,
      screenBg,
    };
  }, [isDark, isCard]);

  // Clean React Native TSX source code strings matching Flutter implementation
  const defaultCodeString = `import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gDividerOrientation,
  Ux4gIcon,
  Ux4gChipGroup,
  Ux4gChoiceChip,
  UX4GColors,
} from 'ux4g-react-native-components';

const LANGUAGES = [
  { id: 'en', label: 'English' },
  { id: 'hi', label: 'हिन्दी' },
  { id: 'ta', label: 'தமிழ்' },
  { id: 'te', label: 'తెలుగు' },
  { id: 'mr', label: 'मराठी' },
  { id: 'more', label: '+3 m...' },
];

export const InlineLanguageToggleDefaultScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const [selectedLang, setSelectedLang] = useState('en');
  const [applicantName, setApplicantName] = useState('Ramesh Kumar');
  const [fatherName, setFatherName] = useState('Suresh Kumar');
  const [annualIncome, setAnnualIncome] = useState('2,40,000');

  const screenBg = isDark ? UX4GColors.neutral950 : '#FFFFFF';
  const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
  const subtleText = isDark ? UX4GColors.neutral400 : '#4B5563';
  const labelColor = isDark ? UX4GColors.neutral300 : '#374151';
  const inputBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
  const inputBorder = isDark ? UX4GColors.neutral700 : '#E5E7EB';
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: screenBg }]}>
      {/* 1. Official Header with Menu */}
      <Ux4gAppHeader
        elevation={2}
        variant={isDark ? 'dark' : 'light'}
        title=""
        leadingSpacing={8}
        leadingWidgets={[
          <Image
            key="emblem"
            source={{ uri: '/national_emblem_logo.svg' }}
            style={styles.emblemLogo}
            resizeMode="contain"
          />,
          <View key="divider" style={styles.headerDividerWrapper}>
            <Ux4gDivider
              orientation={Ux4gDividerOrientation.vertical}
              color={isDark ? UX4GColors.neutral700 : '#D1D5DB'}
            />
          </View>,
          <UnionLogo
            key="union"
            size={32}
            color={primaryColor}
          />,
        ]}
        actions={[
          {
            customWidget: (
              <TouchableOpacity
                key="menu"
                style={styles.menuBtn}
                onPress={() => {}}
              >
                <Text style={styles.menuIcon}>☰</Text>
              </TouchableOpacity>
            ),
          },
        ]}
      />

      {/* 2. Content Body */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={[styles.title, { color: titleColor }]}>
          Apply for Income Certificate
        </Text>
        <Text style={[styles.subtitle, { color: subtleText }]}>
          Use the language switcher to change the form language. Your entered details will stay saved.
        </Text>

        {/* Language Choice Chips (Ux4gChipGroup Horizontal Scroll) */}
        <Ux4gChipGroup
          arrangement="horizontal"
          spacing={8}
          containerStyle={styles.chipsScroll}
        >
          {LANGUAGES.map((lang) => (
            <Ux4gChoiceChip
              key={lang.id}
              text={lang.label}
              selected={selectedLang === lang.id}
              onClick={() => setSelectedLang(lang.id)}
            />
          ))}
        </Ux4gChipGroup>

        {/* Form Fields with Editable Value & Pencil Icon */}
        {/* Field 1: Applicant Name */}
        <View style={styles.fieldGroup}>
          <Text style={[styles.fieldLabel, { color: labelColor }]}>
            Applicant name
          </Text>
          <View style={[styles.inputBox, { backgroundColor: inputBg, borderColor: inputBorder }]}>
            <TextInput
              style={[styles.inputField, { color: titleColor }]}
              value={applicantName}
              onChangeText={setApplicantName}
            />
            <Ux4gIcon name="edit" size={18} color="#4B5563" />
          </View>
        </View>

        {/* Field 2: Father's / husband's name */}
        <View style={styles.fieldGroup}>
          <Text style={[styles.fieldLabel, { color: labelColor }]}>
            Father's / husband's name
          </Text>
          <View style={[styles.inputBox, { backgroundColor: inputBg, borderColor: inputBorder }]}>
            <TextInput
              style={[styles.inputField, { color: titleColor }]}
              value={fatherName}
              onChangeText={setFatherName}
            />
            <Ux4gIcon name="edit" size={18} color="#4B5563" />
          </View>
        </View>

        {/* Field 3: Annual family income */}
        <View style={styles.fieldGroup}>
          <Text style={[styles.fieldLabel, { color: labelColor }]}>
            Annual family income (₹)
          </Text>
          <View style={[styles.inputBox, { backgroundColor: inputBg, borderColor: inputBorder }]}>
            <TextInput
              style={[styles.inputField, { color: titleColor }]}
              value={annualIncome}
              onChangeText={setAnnualIncome}
              keyboardType="numeric"
            />
            <Ux4gIcon name="edit" size={18} color="#4B5563" />
          </View>
        </View>
      </ScrollView>

      {/* 3. Powered by Digital India Footer */}
      <View style={styles.footerRow}>
        <Text
          style={[
            styles.footerText,
            { color: isDark ? UX4GColors.neutral400 : '#6B7280' },
          ]}
        >
          Powered by -
        </Text>
        <Image
          source={{ uri: '/Digital_India_logo.svg' }}
          style={styles.digitalIndiaLogo}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  emblemLogo: {
    width: 36,
    height: 36,
  },
  headerDividerWrapper: {
    height: 28,
    justifyContent: 'center',
    marginHorizontal: 4,
  },
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
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 16,
  },
  chipsScroll: {
    marginBottom: 20,
  },
  fieldGroup: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 6,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  inputField: {
    flex: 1,
    fontSize: 14,
    padding: 0,
    fontWeight: '500',
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingBottom: 12,
  },
  footerText: {
    fontSize: 11,
  },
  digitalIndiaLogo: {
    height: 20,
    width: 60,
  },
});
`;

  const cardCodeString = `import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gDividerOrientation,
  Ux4gIcon,
  Ux4gChipGroup,
  Ux4gChoiceChip,
  UX4GColors,
} from 'ux4g-react-native-components';

const LANGUAGES = [
  { id: 'en', label: 'English' },
  { id: 'hi', label: 'हिन्दी' },
  { id: 'ta', label: 'தமிழ்' },
  { id: 'te', label: 'తెలుగు' },
  { id: 'mr', label: 'मराठी' },
  { id: 'more', label: '+3 m...' },
];

export const InlineLanguageToggleCardScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const [selectedLang, setSelectedLang] = useState('en');
  const [applicantName, setApplicantName] = useState('Ramesh Kumar');
  const [fatherName, setFatherName] = useState('Suresh Kumar');
  const [annualIncome, setAnnualIncome] = useState('2,40,000');

  const screenBg = isDark ? UX4GColors.primary800 : UX4GColors.primary100;
  const cardBg = isDark ? UX4GColors.neutral800 : '#FFFFFF';
  const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
  const subtleText = isDark ? UX4GColors.neutral400 : '#4B5563';
  const labelColor = isDark ? UX4GColors.neutral300 : '#374151';
  const inputBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';
  const inputBorder = isDark ? UX4GColors.neutral700 : '#E5E7EB';
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: screenBg }]}>
      {/* 1. Official Header with Menu */}
      <Ux4gAppHeader
        elevation={2}
        variant={isDark ? 'dark' : 'light'}
        title=""
        leadingSpacing={8}
        leadingWidgets={[
          <Image
            key="emblem"
            source={{ uri: '/national_emblem_logo.svg' }}
            style={styles.emblemLogo}
            resizeMode="contain"
          />,
          <View key="divider" style={styles.headerDividerWrapper}>
            <Ux4gDivider
              orientation={Ux4gDividerOrientation.vertical}
              color={isDark ? UX4GColors.neutral700 : '#D1D5DB'}
            />
          </View>,
          <UnionLogo
            key="union"
            size={32}
            color={primaryColor}
          />,
        ]}
        actions={[
          {
            customWidget: (
              <TouchableOpacity
                key="menu"
                style={styles.menuBtn}
                onPress={() => {}}
              >
                <Text style={styles.menuIcon}>☰</Text>
              </TouchableOpacity>
            ),
          },
        ]}
      />

      {/* 2. Floating Card Scroll Content */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.cardScrollContent}
      >
        <View style={[styles.card, { backgroundColor: cardBg }]}>
          <Text style={[styles.title, { color: titleColor }]}>
            Apply for Income Certificate
          </Text>
          <Text style={[styles.subtitle, { color: subtleText }]}>
            Use the language switcher to change the form language. Your entered details will stay saved.
          </Text>

          {/* Language Choice Chips (Ux4gChipGroup Horizontal Scroll) */}
          <Ux4gChipGroup
            arrangement="horizontal"
            spacing={8}
            containerStyle={styles.chipsScroll}
          >
            {LANGUAGES.map((lang) => (
              <Ux4gChoiceChip
                key={lang.id}
                text={lang.label}
                selected={selectedLang === lang.id}
                onClick={() => setSelectedLang(lang.id)}
              />
            ))}
          </Ux4gChipGroup>

          {/* Form Fields with Editable Value & Pencil Icon */}
          {/* Field 1: Applicant Name with Info Icon */}
          <View style={styles.fieldGroup}>
            <View style={styles.labelWithInfoRow}>
              <Text style={[styles.fieldLabel, { color: labelColor }]}>
                Applicant name
              </Text>
              <Ux4gIcon name="info" size={14} color="#6B7280" />
            </View>
            <View style={[styles.inputBox, { backgroundColor: inputBg, borderColor: inputBorder }]}>
              <TextInput
                style={[styles.inputField, { color: titleColor }]}
                value={applicantName}
                onChangeText={setApplicantName}
              />
              <Ux4gIcon name="edit" size={18} color="#4B5563" />
            </View>
          </View>

          {/* Field 2: Father's / husband's name */}
          <View style={styles.fieldGroup}>
            <Text style={[styles.fieldLabel, { color: labelColor }]}>
              Father's / husband's name
            </Text>
            <View style={[styles.inputBox, { backgroundColor: inputBg, borderColor: inputBorder }]}>
              <TextInput
                style={[styles.inputField, { color: titleColor }]}
                value={fatherName}
                onChangeText={setFatherName}
              />
              <Ux4gIcon name="edit" size={18} color="#4B5563" />
            </View>
          </View>

          {/* Field 3: Annual family income */}
          <View style={styles.fieldGroup}>
            <Text style={[styles.fieldLabel, { color: labelColor }]}>
              Annual family income (₹)
            </Text>
            <View style={[styles.inputBox, { backgroundColor: inputBg, borderColor: inputBorder }]}>
              <TextInput
                style={[styles.inputField, { color: titleColor }]}
                value={annualIncome}
                onChangeText={setAnnualIncome}
                keyboardType="numeric"
              />
              <Ux4gIcon name="edit" size={18} color="#4B5563" />
            </View>
          </View>
        </View>

        {/* 3. Powered by Digital India Footer Outside Card */}
        <View style={styles.footerRow}>
          <Text
            style={[
              styles.footerText,
              { color: isDark ? UX4GColors.neutral400 : '#6B7280' },
            ]}
          >
            Powered by -
          </Text>
          <Image
            source={{ uri: '/Digital_India_logo.svg' }}
            style={styles.digitalIndiaLogo}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  emblemLogo: {
    width: 36,
    height: 36,
  },
  headerDividerWrapper: {
    height: 28,
    justifyContent: 'center',
    marginHorizontal: 4,
  },
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
  scroll: {
    flex: 1,
  },
  cardScrollContent: {
    padding: 16,
    paddingBottom: 12,
  },
  card: {
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 16,
  },
  chipsScroll: {
    marginBottom: 20,
  },
  fieldGroup: {
    marginBottom: 16,
  },
  labelWithInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 6,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  inputField: {
    flex: 1,
    fontSize: 14,
    padding: 0,
    fontWeight: '500',
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingBottom: 12,
  },
  footerText: {
    fontSize: 11,
  },
  digitalIndiaLogo: {
    height: 20,
    width: 60,
  },
});
`;

  const renderFormContent = (hasInfoIcon: boolean = false) => (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {/* Title */}
      <div
        style={{
          fontSize: '18px',
          fontWeight: 800,
          color: colors.titleColor,
          marginBottom: '6px',
          lineHeight: '1.3',
        }}
      >
        {currentText.title}
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: '13px',
          color: colors.subtleText,
          lineHeight: '1.4',
          marginBottom: '16px',
        }}
      >
        {currentText.subtitle}
      </div>

      {/* Language Toggle Chips - Single Row Horizontal Scroll with Drag & MouseWheel */}
      <div
        ref={chipsScrollRef}
        className="hide-scrollbar"
        onMouseDown={handleChipsMouseDown}
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          overflowX: 'auto',
          overflowY: 'hidden',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          gap: '8px',
          marginBottom: '20px',
          padding: '2px 0 4px 0',
          cursor: 'grab',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {LANGUAGES.map((lang) => {
          const isSelected = selectedLang === lang.id;
          return (
            <button
              key={lang.id}
              type="button"
              onClick={() => setSelectedLang(lang.id)}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                border: isSelected
                  ? `1px solid ${colors.selectedChipBg}`
                  : `1px solid ${colors.chipBorder}`,
                backgroundColor: isSelected
                  ? colors.selectedChipBg
                  : colors.chipBg,
                color: isSelected
                  ? colors.selectedChipText
                  : colors.chipText,
                fontSize: '13px',
                fontWeight: isSelected ? 600 : 500,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'all 0.15s ease',
              }}
            >
              {lang.label}
            </button>
          );
        })}
      </div>

      {/* Form Fields */}
      {/* Field 1: Applicant Name */}
      <div style={{ marginBottom: '14px', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '12px',
            color: colors.labelColor,
            marginBottom: '6px',
            fontWeight: 500,
          }}
        >
          <span>{currentText.applicantName}</span>
          {hasInfoIcon && (
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '15px', color: '#6B7280', cursor: 'help' }}
            >
              info
            </span>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: colors.inputBg,
            border: `1px solid ${colors.inputBorder}`,
            borderRadius: '8px',
            padding: '10px 14px',
            boxSizing: 'border-box',
          }}
        >
          <input
            type="text"
            value={applicantName}
            onChange={(e) => setApplicantName(e.target.value)}
            style={{
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontSize: '14px',
              fontWeight: 500,
              color: colors.titleColor,
              width: '100%',
            }}
          />
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: '18px',
              color: colors.editIconColor,
              marginLeft: '8px',
              flexShrink: 0,
            }}
          >
            edit
          </span>
        </div>
      </div>

      {/* Field 2: Father's / husband's name */}
      <div style={{ marginBottom: '14px', width: '100%' }}>
        <div
          style={{
            fontSize: '12px',
            color: colors.labelColor,
            marginBottom: '6px',
            fontWeight: 500,
          }}
        >
          {currentText.fatherName}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: colors.inputBg,
            border: `1px solid ${colors.inputBorder}`,
            borderRadius: '8px',
            padding: '10px 14px',
            boxSizing: 'border-box',
          }}
        >
          <input
            type="text"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
            style={{
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontSize: '14px',
              fontWeight: 500,
              color: colors.titleColor,
              width: '100%',
            }}
          />
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: '18px',
              color: colors.editIconColor,
              marginLeft: '8px',
              flexShrink: 0,
            }}
          >
            edit
          </span>
        </div>
      </div>

      {/* Field 3: Annual family income */}
      <div style={{ marginBottom: '8px', width: '100%' }}>
        <div
          style={{
            fontSize: '12px',
            color: colors.labelColor,
            marginBottom: '6px',
            fontWeight: 500,
          }}
        >
          {currentText.income}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: colors.inputBg,
            border: `1px solid ${colors.inputBorder}`,
            borderRadius: '8px',
            padding: '10px 14px',
            boxSizing: 'border-box',
          }}
        >
          <input
            type="text"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(e.target.value)}
            style={{
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontSize: '14px',
              fontWeight: 500,
              color: colors.titleColor,
              width: '100%',
            }}
          />
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: '18px',
              color: colors.editIconColor,
              marginLeft: '8px',
              flexShrink: 0,
            }}
          >
            edit
          </span>
        </div>
      </div>
    </div>
  );

  const renderFooter = () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        padding: '16px 0 8px',
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontSize: '11px',
          color: colors.footerText,
        }}
      >
        Powered by -
      </span>
      <img
        src="/Digital_India_logo.svg"
        alt="Digital India"
        style={{
          height: '20px',
          objectFit: 'contain',
        }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = '/digital_india_logo.png';
        }}
      />
    </div>
  );

  return (
    <div className="wb-page">
      {/* Top Header */}
      <div className="wb-header">
        <h1 className="wb-title">
          Inline Language Toggle ({isCard ? 'Card Style' : 'Default'})
        </h1>
        <p className="wb-description">
          {isCard
            ? 'Inline language switcher chips that switch form labels with preserved data, styled inside a white card container on lavender background.'
            : 'Inline language switcher chips that switch form labels with preserved data directly on a white background.'}
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
              <div
                className={`wb-preview-area ${isDark ? 'dark' : ''}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '32px 16px',
                }}
              >
                {/* Variant Selector */}
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
                      color:
                        variant === 'default'
                          ? UX4GColors.neutral0
                          : isDark
                          ? UX4GColors.neutral400
                          : UX4GColors.neutral600,
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
                      color:
                        variant === 'card'
                          ? UX4GColors.neutral0
                          : isDark
                          ? UX4GColors.neutral400
                          : UX4GColors.neutral600,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Card Style
                  </button>
                </div>

                {/* Mobile Phone Mockup Frame */}
                <div
                  style={{
                    width: '360px',
                    height: '680px',
                    backgroundColor: colors.screenBg,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: isDark
                      ? '0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px #333333'
                      : '0 20px 40px rgba(0,0,0,0.12), 0 0 0 1px #E5E7EB',
                    position: 'relative',
                    transition: 'background-color 0.2s ease',
                  }}
                >
                  {/* Ux4gAppHeader inside Mockup */}
                  <div
                    style={{
                      height: '56px',
                      backgroundColor: colors.headerBg,
                      borderBottom: `1px solid ${colors.headerDividerColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0 16px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      zIndex: 10,
                      flexShrink: 0,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <img
                        src="/national_emblem_logo.svg"
                        alt="National Emblem"
                        style={{
                          height: '36px',
                          filter: isDark ? 'brightness(0) invert(1)' : 'none',
                        }}
                      />
                      <div
                        style={{
                          width: '1px',
                          height: '28px',
                          backgroundColor: isDark ? UX4GColors.neutral700 : '#D1D5DB',
                          margin: '0 2px',
                        }}
                      />
                      <UnionLogo size={32} color={colors.primaryColor} isDark={isDark} />
                    </div>

                    {/* Hamburger Menu Button */}
                    <button
                      type="button"
                      onClick={() => {}}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: isDark ? 'transparent' : '#FFFFFF',
                        border: `1.5px solid ${colors.menuBtnBorder}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M4 6h16M4 12h16M4 18h16"
                          stroke={colors.primaryColor}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Scrollable Content Container */}
                  {isCard ? (
                    /* Card Style Variant */
                    <div
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '16px 16px 12px 16px',
                        overflowY: 'auto',
                        boxSizing: 'border-box',
                      }}
                    >
                      {/* Floating Card */}
                      <div
                        style={{
                          width: '100%',
                          backgroundColor: colors.containerCardBg,
                          borderRadius: '16px',
                          padding: '18px 16px',
                          boxShadow: isDark
                            ? '0 4px 16px rgba(0,0,0,0.4)'
                            : '0 4px 16px rgba(0,0,0,0.06)',
                          boxSizing: 'border-box',
                        }}
                      >
                        {renderFormContent(true)}
                      </div>

                      {/* Footer outside card */}
                      {renderFooter()}
                    </div>
                  ) : (
                    /* Default Variant */
                    <div
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '16px 16px 12px 16px',
                        overflowY: 'auto',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div>
                        {renderFormContent(false)}
                      </div>

                      {/* Footer */}
                      {renderFooter()}
                    </div>
                  )}
                </div>
              </div>
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
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700,
                    }}
                  >
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
                    Card Style
                  </button>
                </div>

                <CodeBlock
                  code={variant === 'card' ? cardCodeString : defaultCodeString}
                  language="tsx"
                  filename={
                    variant === 'card'
                      ? 'InlineLanguageToggleCardPattern.tsx'
                      : 'InlineLanguageToggleDefaultPattern.tsx'
                  }
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InlineLanguageToggleDoc;
