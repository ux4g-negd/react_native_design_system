import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface DocumentScanUploadDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

interface DocumentItemProps {
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  badgeTextColor: string;
  showDigiLocker?: boolean;
  isDark: boolean;
}

const DocumentItem: React.FC<DocumentItemProps> = ({
  title,
  subtitle,
  badge,
  badgeColor,
  badgeTextColor,
  showDigiLocker = true,
  isDark,
}) => {
  return (
    <div
      style={{
        padding: 16,
        borderRadius: 12,
        backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
        border: `1px solid ${isDark ? UX4GColors.neutral700 : '#E5E7EB'}`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            border: `1px solid ${isDark ? UX4GColors.neutral700 : '#D1D5DB'}`,
            flexShrink: 0,
            marginTop: 2,
          }}
        />
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
              }}
            >
              {title}
            </span>
            <span
              style={{
                padding: '2px 8px',
                borderRadius: 4,
                backgroundColor: badgeColor,
                color: badgeTextColor,
                fontSize: 11,
                fontWeight: 700,
                lineHeight: 1.4,
              }}
            >
              {badge}
            </span>
          </div>
          <div
            style={{
              fontSize: 13,
              color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
              marginTop: 4,
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ width: 100 }}>
          <Ux4gButton
            text="Upload"
            onPress={() => {}}
            size="small"
            width={100}
            height={38}
            backgroundColor={isDark ? UX4GColors.primary300 : '#432CBB'}
            contentColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
          />
        </div>
        {showDigiLocker && (
          <div style={{ width: 220 }}>
            <Ux4gButton
              text="Fetch from DigiLocker"
              onPress={() => {}}
              variant="outline"
              size="small"
              width={220}
              height={38}
              contentColor={isDark ? UX4GColors.primary300 : '#432CBB'}
              borderColor={isDark ? UX4GColors.primary300 : '#C7D2FE'}
            />
          </div>
        )}
      </div>
    </div>
  );
};

// ─── Custom Stepper matching UX4G Pattern ─────────────────────────────────────
const PatternStepper: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const primaryColor = isDark ? UX4GColors.primary300 : '#432CBB';
  const inactiveBorder = isDark ? UX4GColors.neutral700 : '#D1D5DB';
  const inactiveText = isDark ? UX4GColors.neutral500 : '#9CA3AF';
  const labelColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;

  const steps = [
    { title: 'Eligibility', state: 'completed' },
    { title: 'Personal', state: 'completed' },
    { title: 'Documents', state: 'active' },
    { title: 'Submit', state: 'pending', number: 4 },
  ];

  return (
    <div style={{ width: '100%', padding: '4px 0' }}>
      {/* 1. Step circles & connecting lines */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        {/* Background Connecting Line */}
        <div
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            right: 10,
            height: 2,
            backgroundColor: inactiveBorder,
            zIndex: 0,
          }}
        />
        {/* Active Colored Line (Step 1 to Step 3) */}
        <div
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            width: '66.6%',
            height: 2,
            backgroundColor: primaryColor,
            zIndex: 1,
          }}
        />

        {/* Step Circles */}
        {steps.map((step, idx) => {
          return (
            <div
              key={idx}
              style={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
                backgroundColor:
                  step.state === 'completed'
                    ? primaryColor
                    : isDark
                    ? UX4GColors.neutral900
                    : '#FFFFFF',
                border:
                  step.state === 'completed'
                    ? `2px solid ${primaryColor}`
                    : step.state === 'active'
                    ? `2px solid ${primaryColor}`
                    : `2px solid ${inactiveBorder}`,
              }}
            >
              {step.state === 'completed' && (
                <span
                  style={{
                    color: '#FFFFFF',
                    fontSize: 12,
                    fontWeight: 'bold',
                    lineHeight: 1,
                  }}
                >
                  ✓
                </span>
              )}
              {step.state === 'active' && (
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: primaryColor,
                  }}
                />
              )}
              {step.state === 'pending' && (
                <span
                  style={{
                    color: inactiveText,
                    fontSize: 10,
                    fontWeight: 600,
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* 2. Step Labels */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 8,
        }}
      >
        {steps.map((step, idx) => (
          <div
            key={idx}
            style={{
              width: 64,
              textAlign: idx === 0 ? 'left' : idx === steps.length - 1 ? 'right' : 'center',
              fontSize: 11,
              fontWeight: 600,
              color: step.state === 'pending' ? inactiveText : labelColor,
              marginLeft: idx === 0 ? -4 : 0,
              marginRight: idx === steps.length - 1 ? -4 : 0,
            }}
          >
            {step.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export const DocumentScanUploadDoc: React.FC<DocumentScanUploadDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');

  const colors = useMemo(() => {
    const isCard = variant === 'Card style';
    return {
      screenBg: isCard
        ? isDark
          ? UX4GColors.primary900
          : '#ECE8FF'
        : isDark
        ? UX4GColors.neutral900
        : '#FFFFFF',
      headerBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      cardBg: isDark ? UX4GColors.neutral800 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      titleColor: isDark ? UX4GColors.neutral0 : '#111827',
      subtleText: isDark ? UX4GColors.neutral400 : '#4B5563',
      primaryColor: isDark ? UX4GColors.primary300 : '#432CBB',
      uploadedBg: isDark ? 'rgba(22, 163, 74, 0.15)' : '#F0FDF4',
      uploadedBorder: isDark ? 'rgba(22, 163, 74, 0.3)' : '#BBF7D0',
      uploadedIcon: isDark ? UX4GColors.green400 : '#16A34A',
      uploadedText: isDark ? UX4GColors.neutral300 : '#4B5563',
      footerText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
    };
  }, [isDark, variant]);

  // Clean React Native TSX source snippet
  const codeString = useMemo(() => {
    const isCard = variant === 'Card style';
    if (isCard) {
      return `// Document Scan & Upload Screen Pattern (Card Style Layout)

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gButton,
  Ux4gCard,
  Ux4gLinearProgressBar,
  UX4GTypography,
  UX4GColors,
} from 'ux4g-react-native-components';

export const DocumentUploadCardScreen = ({
  isDark = ${isDark},
  onContinue = () => {},
  onBack = () => {},
}: {
  isDark?: boolean;
  onContinue?: () => void;
  onBack?: () => void;
}) => {
  const primaryColor = isDark ? UX4GColors.primary300 : '#432CBB';
  const titleColor = isDark ? UX4GColors.neutral0 : '#111827';
  const subtleText = isDark ? UX4GColors.neutral400 : '#4B5563';

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.primary900 : '#ECE8FF' },
      ]}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={{ backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' }}>
          <Ux4gAppHeader
            variant="light"
            showBackButton={false}
            leadingWidgets={[
              <Image
                key="emblem"
                source={require('./assets/national_emblem.png')}
                style={[styles.emblemIcon, isDark && { tintColor: '#FFFFFF' }]}
                resizeMode="contain"
              />,
              <View
                key="divider"
                style={[
                  styles.verticalDivider,
                  { backgroundColor: isDark ? UX4GColors.neutral700 : '#D1D5DB' },
                ]}
              />,
              <Image
                key="union"
                source={require('./assets/union_logo.png')}
                style={[styles.unionIcon, { tintColor: primaryColor }]}
                resizeMode="contain"
              />,
            ]}
            actions={[
              {
                customWidget: (
                  <TouchableOpacity
                    key="menu"
                    style={[
                      styles.menuBtn,
                      {
                        borderColor: isDark ? UX4GColors.primary300 : '#C7D2FE',
                        backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
                      },
                    ]}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        styles.menuIcon,
                        { color: isDark ? UX4GColors.primary300 : '#432CBB' },
                      ]}
                    >
                      ☰
                    </Text>
                  </TouchableOpacity>
                ),
              },
            ]}
          />
          <Ux4gDivider color={isDark ? UX4GColors.neutral800 : '#F0F0F2'} thickness={1} />
        </View>

        {/* Card Content */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Ux4gCard
            backgroundColor={isDark ? UX4GColors.neutral800 : '#FFFFFF'}
            cornerRadius={16}
            borderWidth={1}
            borderColor={isDark ? UX4GColors.neutral700 : 'rgba(0,0,0,0.04)'}
            style={styles.cardWrapper}
          >
            {/* Custom Stepper */}
            <DocumentStepper isDark={isDark} currentStep={3} />
            <View style={{ height: 28 }} />

            <Text style={[styles.headingTitle, { color: titleColor }]}>
              Upload documents
            </Text>
            <Text style={[styles.subtitleText, { color: subtleText }]}>
              PDF or JPG, max 5 MB each. Self-attested.
            </Text>
            <View style={{ height: 20 }} />

            <Text style={[styles.sectionHeading, { color: titleColor }]}>
              Required documents — 1 of 4 uploaded
            </Text>
            <Ux4gLinearProgressBar
              value={0.25}
              height={6}
              shape="rounded"
              containerStyle={styles.progressBar}
            />

            {/* Aadhaar Card (Uploaded) */}
            <View
              style={[
                styles.uploadedCard,
                {
                  backgroundColor: isDark ? 'rgba(22, 163, 74, 0.15)' : '#F0FDF4',
                  borderColor: isDark ? 'rgba(22, 163, 74, 0.3)' : '#BBF7D0',
                },
              ]}
            >
              <View style={styles.uploadedRow}>
                <Image
                  source={require('./assets/check_circle.png')}
                  style={[
                    styles.checkCircleIcon,
                    { tintColor: isDark ? UX4GColors.green400 : '#16A34A' },
                  ]}
                />
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={[styles.docTitle, { color: isDark ? UX4GColors.neutral0 : '#111827' }]}>
                    Aadhaar Card
                  </Text>
                  <Text style={[styles.uploadedSubtitle, { color: isDark ? UX4GColors.neutral300 : '#4B5563' }]}>
                    aadhaar_card.pdf · 1.2 MB · Uploaded just now
                  </Text>
                </View>
              </View>

              <View style={styles.uploadedButtonsRow}>
                <Ux4gButton
                  text="View"
                  onPress={() => {}}
                  variant="outline"
                  size="small"
                  width={100}
                  height={38}
                  contentColor={primaryColor}
                  borderColor={isDark ? UX4GColors.primary300 : '#C7D2FE'}
                />
                <View style={{ width: 12 }} />
                <Ux4gButton
                  text="Re-upload"
                  onPress={() => {}}
                  variant="outline"
                  size="small"
                  width={120}
                  height={38}
                  contentColor={primaryColor}
                  borderColor={isDark ? UX4GColors.primary300 : '#C7D2FE'}
                />
              </View>
            </View>
            <View style={{ height: 20 }} />

            {/* Proof of Income */}
            <DocumentItem
              title="Proof of Income"
              subtitle="Salary slip or income tax return"
              badge="Required"
              badgeColor="#FEE2E2"
              badgeTextColor="#991B1B"
              isDark={isDark}
            />
            <View style={{ height: 20 }} />

            {/* Residence Proof */}
            <DocumentItem
              title="Residence proof"
              subtitle="Electricity bill, gas bill or ration card"
              badge="Required"
              badgeColor="#FEE2E2"
              badgeTextColor="#991B1B"
              isDark={isDark}
            />
            <View style={{ height: 20 }} />

            {/* Caste Certificate */}
            <DocumentItem
              title="Caste certificate"
              subtitle="SC/ST/OBC applicants only"
              badge="Optional"
              badgeColor="#F3F4F6"
              badgeTextColor="#374151"
              showDigiLocker={false}
              isDark={isDark}
            />
            <View style={{ height: 24 }} />

            <View style={styles.disclaimerRow}>
              <Image
                source={require('./assets/calendar_icon.png')}
                style={[
                  styles.calendarIcon,
                  { tintColor: isDark ? UX4GColors.neutral400 : '#6B7280' },
                ]}
              />
              <Text style={[styles.disclaimerText, { color: isDark ? UX4GColors.neutral400 : '#6B7280' }]}>
                All documents must be self-attested. AI flags quality issues; officers make the final call.
              </Text>
            </View>
            <View style={{ height: 24 }} />

            {/* Action Buttons */}
            <Ux4gButton
              text="Continue"
              onPress={onContinue}
              size="large"
              width="100%"
              height={44}
              backgroundColor={isDark ? UX4GColors.primary300 : '#432CBB'}
              contentColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
            />
            <View style={{ height: 10 }} />
            <Ux4gButton
              text="Back"
              onPress={onBack}
              variant="outline"
              size="large"
              width="100%"
              height={44}
              contentColor={primaryColor}
              borderColor={isDark ? UX4GColors.primary300 : '#C7D2FE'}
            />
          </Ux4gCard>

          {/* Footer */}
          <View style={styles.footerContainer}>
            <Text style={[styles.poweredByText, { color: isDark ? UX4GColors.neutral400 : '#9CA3AF' }]}>
              Powered by -
            </Text>
            <Image
              source={require('./assets/digital_india_logo.png')}
              style={[styles.digitalIndiaLogo, isDark && { tintColor: '#FFFFFF' }]}
              resizeMode="contain"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const DocumentStepper = ({
  currentStep = 3,
  isDark = false,
}: {
  currentStep?: number;
  isDark?: boolean;
}) => {
  const primary = isDark ? UX4GColors.primary300 : '#432CBB';
  const inactiveBorder = isDark ? UX4GColors.neutral700 : '#D1D5DB';
  const inactiveText = isDark ? UX4GColors.neutral500 : '#9CA3AF';
  const labelColor = isDark ? UX4GColors.neutral0 : '#111827';

  const steps = [
    { title: 'Eligibility', state: 'completed' },
    { title: 'Personal', state: 'completed' },
    { title: 'Documents', state: 'active' },
    { title: 'Submit', state: 'pending', number: 4 },
  ];

  return (
    <View style={stepperStyles.container}>
      <View style={stepperStyles.stepsRow}>
        <View style={[stepperStyles.lineBackground, { backgroundColor: inactiveBorder }]} />
        <View style={[stepperStyles.lineActive, { backgroundColor: primary }]} />

        {steps.map((step, idx) => (
          <View
            key={idx}
            style={[
              stepperStyles.circle,
              step.state === 'completed' && { backgroundColor: primary, borderColor: primary },
              step.state === 'active' && { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF', borderColor: primary },
              step.state === 'pending' && { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF', borderColor: inactiveBorder },
            ]}
          >
            {step.state === 'completed' && <Text style={stepperStyles.checkText}>✓</Text>}
            {step.state === 'active' && <View style={[stepperStyles.activeDot, { backgroundColor: primary }]} />}
            {step.state === 'pending' && <Text style={[stepperStyles.numText, { color: inactiveText }]}>{step.number}</Text>}
          </View>
        ))}
      </View>

      <View style={stepperStyles.labelsRow}>
        {steps.map((step, idx) => (
          <Text
            key={idx}
            style={[
              stepperStyles.label,
              { color: step.state === 'pending' ? inactiveText : labelColor },
              idx === 0 && { textAlign: 'left' },
              idx === steps.length - 1 && { textAlign: 'right' },
            ]}
          >
            {step.title}
          </Text>
        ))}
      </View>
    </View>
  );
};

const stepperStyles = StyleSheet.create({
  container: { width: '100%' },
  stepsRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', position: 'relative' },
  lineBackground: { position: 'absolute', top: 10, left: 10, right: 10, height: 2, zIndex: 0 },
  lineActive: { position: 'absolute', top: 10, left: 10, width: '66.6%', height: 2, zIndex: 1 },
  circle: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, alignItems: 'center', justifyContent: 'center', zIndex: 2 },
  checkText: { color: '#FFFFFF', fontSize: 12, fontWeight: 'bold' },
  activeDot: { width: 8, height: 8, borderRadius: 4 },
  numText: { fontSize: 10, fontWeight: '600' },
  labelsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  label: { width: 64, fontSize: 11, fontWeight: '600', textAlign: 'center' },
});

const DocumentItem = ({
  title,
  subtitle,
  badge,
  badgeColor,
  badgeTextColor,
  showDigiLocker = true,
  isDark = false,
}: {
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  badgeTextColor: string;
  showDigiLocker?: boolean;
  isDark?: boolean;
}) => {
  const primaryColor = isDark ? UX4GColors.primary300 : '#432CBB';

  return (
    <View
      style={[
        styles.documentItem,
        {
          backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
          borderColor: isDark ? UX4GColors.neutral700 : '#E5E7EB',
        },
      ]}
    >
      <View style={styles.docRow}>
        <View
          style={[
            styles.docCircle,
            { borderColor: isDark ? UX4GColors.neutral700 : '#D1D5DB' },
          ]}
        />
        <View style={{ flex: 1 }}>
          <View style={styles.titleBadgeRow}>
            <Text style={[styles.docTitle, { color: isDark ? UX4GColors.neutral0 : '#111827' }]}>
              {title}
            </Text>
            <View style={[styles.badgeContainer, { backgroundColor: badgeColor }]}>
              <Text style={[styles.badgeText, { color: badgeTextColor }]}>
                {badge}
              </Text>
            </View>
          </View>
          <Text style={[styles.docSubtitle, { color: isDark ? UX4GColors.neutral400 : '#4B5563' }]}>
            {subtitle}
          </Text>
        </View>
      </View>

      <View style={styles.buttonStack}>
        <Ux4gButton
          text="Upload"
          onPress={() => {}}
          size="small"
          width={100}
          height={38}
          backgroundColor={isDark ? UX4GColors.primary300 : '#432CBB'}
          contentColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
        />
        {showDigiLocker && (
          <Ux4gButton
            text="Fetch from DigiLocker"
            onPress={() => {}}
            variant="outline"
            size="small"
            width={220}
            height={38}
            contentColor={primaryColor}
            borderColor={isDark ? UX4GColors.primary300 : '#C7D2FE'}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1, position: 'relative' },
  emblemIcon: { height: 36, width: 36 },
  verticalDivider: { height: 32, width: 1, marginHorizontal: 8 },
  unionIcon: { height: 32, width: 32 },
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContent: { paddingHorizontal: 16, paddingVertical: 16 },
  cardWrapper: { padding: 20, marginBottom: 16 },
  headingTitle: { fontSize: 24, fontWeight: '800', lineHeight: 30, marginBottom: 4 },
  subtitleText: { fontSize: 14, lineHeight: 20 },
  sectionHeading: {
    ...UX4GTypography.lL_strong,
    marginBottom: 8,
  },
  progressBar: {
    marginBottom: 20,
  },
  uploadedCard: { padding: 16, borderRadius: 12, borderWidth: 1 },
  uploadedRow: { flexDirection: 'row', alignItems: 'flex-start' },
  checkCircleIcon: { width: 20, height: 20, marginTop: 2 },
  docTitle: { fontSize: 16, fontWeight: '700' },
  uploadedSubtitle: { fontSize: 13, marginTop: 4 },
  uploadedButtonsRow: { flexDirection: 'row', alignItems: 'center', marginTop: 14 },
  documentItem: { padding: 16, borderRadius: 12, borderWidth: 1 },
  docRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  docCircle: { width: 20, height: 20, borderRadius: 10, borderWidth: 1, marginTop: 2 },
  titleBadgeRow: { flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap' },
  badgeContainer: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4 },
  badgeText: { fontSize: 11, fontWeight: '700' },
  docSubtitle: { fontSize: 13, marginTop: 4 },
  buttonStack: { marginTop: 14, gap: 10 },
  disclaimerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  calendarIcon: {
    width: 16,
    height: 16,
    marginTop: 2,
  },
  disclaimerText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 14,
  },
  poweredByText: { fontSize: 11, fontWeight: '500' },
  digitalIndiaLogo: { height: 22, width: 80 },
});`;
    }

    // Default Layout Snippet
    return `// Document Scan & Upload Screen Pattern (Default Layout)

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gButton,
  Ux4gLinearProgressBar,
  UX4GTypography,
  UX4GColors,
} from 'ux4g-react-native-components';

export const DocumentUploadScreen = ({
  isDark = ${isDark},
  onContinue = () => {},
  onBack = () => {},
}: {
  isDark?: boolean;
  onContinue?: () => void;
  onBack?: () => void;
}) => {
  const primaryColor = isDark ? UX4GColors.primary300 : '#432CBB';
  const titleColor = isDark ? UX4GColors.neutral0 : '#111827';
  const subtleText = isDark ? UX4GColors.neutral400 : '#4B5563';

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' },
      ]}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={{ backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' }}>
          <Ux4gAppHeader
            variant="light"
            showBackButton={false}
            leadingWidgets={[
              <Image
                key="emblem"
                source={require('./assets/national_emblem.png')}
                style={[styles.emblemIcon, isDark && { tintColor: '#FFFFFF' }]}
                resizeMode="contain"
              />,
              <View
                key="divider"
                style={[
                  styles.verticalDivider,
                  { backgroundColor: isDark ? UX4GColors.neutral700 : '#D1D5DB' },
                ]}
              />,
              <Image
                key="union"
                source={require('./assets/union_logo.png')}
                style={[styles.unionIcon, { tintColor: primaryColor }]}
                resizeMode="contain"
              />,
            ]}
            actions={[
              {
                customWidget: (
                  <TouchableOpacity
                    key="menu"
                    style={[
                      styles.menuBtn,
                      {
                        borderColor: isDark ? UX4GColors.primary300 : '#C7D2FE',
                        backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
                      },
                    ]}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        styles.menuIcon,
                        { color: isDark ? UX4GColors.primary300 : '#432CBB' },
                      ]}
                    >
                      ☰
                    </Text>
                  </TouchableOpacity>
                ),
              },
            ]}
          />
          <Ux4gDivider color={isDark ? UX4GColors.neutral800 : '#F0F0F2'} thickness={1} />
        </View>

        {/* Content */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Stepper */}
          <DocumentStepper isDark={isDark} currentStep={3} />
          <View style={{ height: 28 }} />

          <Text style={[styles.headingTitle, { color: titleColor }]}>
            Upload documents
          </Text>
          <Text style={[styles.subtitleText, { color: subtleText }]}>
            PDF or JPG, max 5 MB each. Self-attested.
          </Text>
          <View style={{ height: 20 }} />

          <Text style={[styles.sectionHeading, { color: titleColor }]}>
            Required documents — 1 of 4 uploaded
          </Text>
          <Ux4gLinearProgressBar
            value={0.25}
            height={6}
            shape="rounded"
            containerStyle={styles.progressBar}
          />

          {/* Aadhaar Card (Uploaded) */}
          <View
            style={[
              styles.uploadedCard,
              {
                backgroundColor: isDark ? 'rgba(22, 163, 74, 0.15)' : '#F0FDF4',
                borderColor: isDark ? 'rgba(22, 163, 74, 0.3)' : '#BBF7D0',
              },
            ]}
          >
            <View style={styles.uploadedRow}>
              <Image
                source={require('./assets/check_circle.png')}
                style={[
                  styles.checkCircleIcon,
                  { tintColor: isDark ? UX4GColors.green400 : '#16A34A' },
                ]}
              />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={[styles.docTitle, { color: isDark ? UX4GColors.neutral0 : '#111827' }]}>
                  Aadhaar Card
                </Text>
                <Text style={[styles.uploadedSubtitle, { color: isDark ? UX4GColors.neutral300 : '#4B5563' }]}>
                  aadhaar_card.pdf · 1.2 MB · Uploaded just now
                </Text>
              </View>
            </View>

            <View style={styles.uploadedButtonsRow}>
              <Ux4gButton
                text="View"
                onPress={() => {}}
                variant="outline"
                size="small"
                width={100}
                height={38}
                contentColor={primaryColor}
                borderColor={isDark ? UX4GColors.primary300 : '#C7D2FE'}
              />
              <View style={{ width: 12 }} />
              <Ux4gButton
                text="Re-upload"
                onPress={() => {}}
                variant="outline"
                size="small"
                width={120}
                height={38}
                contentColor={primaryColor}
                borderColor={isDark ? UX4GColors.primary300 : '#C7D2FE'}
              />
            </View>
          </View>
          <View style={{ height: 20 }} />

          {/* Proof of Income */}
          <DocumentItem
            title="Proof of Income"
            subtitle="Salary slip or income tax return"
            badge="Required"
            badgeColor="#FEE2E2"
            badgeTextColor="#991B1B"
            isDark={isDark}
          />
          <View style={{ height: 20 }} />

          {/* Residence Proof */}
          <DocumentItem
            title="Residence proof"
            subtitle="Electricity bill, gas bill or ration card"
            badge="Required"
            badgeColor="#FEE2E2"
            badgeTextColor="#991B1B"
            isDark={isDark}
          />
          <View style={{ height: 20 }} />

          {/* Caste Certificate */}
          <DocumentItem
            title="Caste certificate"
            subtitle="SC/ST/OBC applicants only"
            badge="Optional"
            badgeColor="#F3F4F6"
            badgeTextColor="#374151"
            showDigiLocker={false}
            isDark={isDark}
          />
          <View style={{ height: 24 }} />

          <View style={styles.disclaimerRow}>
            <Image
              source={require('./assets/calendar_icon.png')}
              style={[
                styles.calendarIcon,
                { tintColor: isDark ? UX4GColors.neutral400 : '#6B7280' },
              ]}
            />
            <Text style={[styles.disclaimerText, { color: isDark ? UX4GColors.neutral400 : '#6B7280' }]}>
              All documents must be self-attested. AI flags quality issues; officers make the final call.
            </Text>
          </View>
          <View style={{ height: 24 }} />

          {/* Actions */}
          <Ux4gButton
            text="Continue"
            onPress={onContinue}
            size="large"
            width="100%"
            height={44}
            backgroundColor={isDark ? UX4GColors.primary300 : '#432CBB'}
            contentColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
          />
          <View style={{ height: 10 }} />
          <Ux4gButton
            text="Back"
            onPress={onBack}
            variant="outline"
            size="large"
            width="100%"
            height={44}
            contentColor={primaryColor}
            borderColor={isDark ? UX4GColors.primary300 : '#C7D2FE'}
          />

          {/* Footer */}
          <View style={styles.footerContainer}>
            <Text style={[styles.poweredByText, { color: isDark ? UX4GColors.neutral400 : '#9CA3AF' }]}>
              Powered by -
            </Text>
            <Image
              source={require('./assets/digital_india_logo.png')}
              style={[styles.digitalIndiaLogo, isDark && { tintColor: '#FFFFFF' }]}
              resizeMode="contain"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const DocumentStepper = ({
  currentStep = 3,
  isDark = false,
}: {
  currentStep?: number;
  isDark?: boolean;
}) => {
  const primary = isDark ? UX4GColors.primary300 : '#432CBB';
  const inactiveBorder = isDark ? UX4GColors.neutral700 : '#D1D5DB';
  const inactiveText = isDark ? UX4GColors.neutral500 : '#9CA3AF';
  const labelColor = isDark ? UX4GColors.neutral0 : '#111827';

  const steps = [
    { title: 'Eligibility', state: 'completed' },
    { title: 'Personal', state: 'completed' },
    { title: 'Documents', state: 'active' },
    { title: 'Submit', state: 'pending', number: 4 },
  ];

  return (
    <View style={stepperStyles.container}>
      <View style={stepperStyles.stepsRow}>
        <View style={[stepperStyles.lineBackground, { backgroundColor: inactiveBorder }]} />
        <View style={[stepperStyles.lineActive, { backgroundColor: primary }]} />

        {steps.map((step, idx) => (
          <View
            key={idx}
            style={[
              stepperStyles.circle,
              step.state === 'completed' && { backgroundColor: primary, borderColor: primary },
              step.state === 'active' && { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF', borderColor: primary },
              step.state === 'pending' && { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF', borderColor: inactiveBorder },
            ]}
          >
            {step.state === 'completed' && <Text style={stepperStyles.checkText}>✓</Text>}
            {step.state === 'active' && <View style={[stepperStyles.activeDot, { backgroundColor: primary }]} />}
            {step.state === 'pending' && <Text style={[stepperStyles.numText, { color: inactiveText }]}>{step.number}</Text>}
          </View>
        ))}
      </View>

      <View style={stepperStyles.labelsRow}>
        {steps.map((step, idx) => (
          <Text
            key={idx}
            style={[
              stepperStyles.label,
              { color: step.state === 'pending' ? inactiveText : labelColor },
              idx === 0 && { textAlign: 'left' },
              idx === steps.length - 1 && { textAlign: 'right' },
            ]}
          >
            {step.title}
          </Text>
        ))}
      </View>
    </View>
  );
};

const stepperStyles = StyleSheet.create({
  container: { width: '100%' },
  stepsRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', position: 'relative' },
  lineBackground: { position: 'absolute', top: 10, left: 10, right: 10, height: 2, zIndex: 0 },
  lineActive: { position: 'absolute', top: 10, left: 10, width: '66.6%', height: 2, zIndex: 1 },
  circle: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, alignItems: 'center', justifyContent: 'center', zIndex: 2 },
  checkText: { color: '#FFFFFF', fontSize: 12, fontWeight: 'bold' },
  activeDot: { width: 8, height: 8, borderRadius: 4 },
  numText: { fontSize: 10, fontWeight: '600' },
  labelsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  label: { width: 64, fontSize: 11, fontWeight: '600', textAlign: 'center' },
});

const DocumentItem = ({
  title,
  subtitle,
  badge,
  badgeColor,
  badgeTextColor,
  showDigiLocker = true,
  isDark = false,
}: {
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  badgeTextColor: string;
  showDigiLocker?: boolean;
  isDark?: boolean;
}) => {
  const primaryColor = isDark ? UX4GColors.primary300 : '#432CBB';

  return (
    <View
      style={[
        styles.documentItem,
        {
          backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
          borderColor: isDark ? UX4GColors.neutral700 : '#E5E7EB',
        },
      ]}
    >
      <View style={styles.docRow}>
        <View
          style={[
            styles.docCircle,
            { borderColor: isDark ? UX4GColors.neutral700 : '#D1D5DB' },
          ]}
        />
        <View style={{ flex: 1 }}>
          <View style={styles.titleBadgeRow}>
            <Text style={[styles.docTitle, { color: isDark ? UX4GColors.neutral0 : '#111827' }]}>
              {title}
            </Text>
            <View style={[styles.badgeContainer, { backgroundColor: badgeColor }]}>
              <Text style={[styles.badgeText, { color: badgeTextColor }]}>
                {badge}
              </Text>
            </View>
          </View>
          <Text style={[styles.docSubtitle, { color: isDark ? UX4GColors.neutral400 : '#4B5563' }]}>
            {subtitle}
          </Text>
        </View>
      </View>

      <View style={styles.buttonStack}>
        <Ux4gButton
          text="Upload"
          onPress={() => {}}
          size="small"
          width={100}
          height={38}
          backgroundColor={isDark ? UX4GColors.primary300 : '#432CBB'}
          contentColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
        />
        {showDigiLocker && (
          <Ux4gButton
            text="Fetch from DigiLocker"
            onPress={() => {}}
            variant="outline"
            size="small"
            width={220}
            height={38}
            contentColor={primaryColor}
            borderColor={isDark ? UX4GColors.primary300 : '#C7D2FE'}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1, position: 'relative' },
  emblemIcon: { height: 36, width: 36 },
  verticalDivider: { height: 32, width: 1, marginHorizontal: 8 },
  unionIcon: { height: 32, width: 32 },
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContent: { paddingHorizontal: 20, paddingVertical: 18 },
  headingTitle: { fontSize: 24, fontWeight: '800', lineHeight: 30, marginBottom: 4 },
  subtitleText: { fontSize: 14, lineHeight: 20 },
  sectionHeading: {
    ...UX4GTypography.lL_strong,
    marginBottom: 8,
  },
  progressBar: {
    marginBottom: 20,
  },
  uploadedCard: { padding: 16, borderRadius: 12, borderWidth: 1 },
  uploadedRow: { flexDirection: 'row', alignItems: 'flex-start' },
  checkCircleIcon: { width: 20, height: 20, marginTop: 2 },
  docTitle: { fontSize: 16, fontWeight: '700' },
  uploadedSubtitle: { fontSize: 13, marginTop: 4 },
  uploadedButtonsRow: { flexDirection: 'row', alignItems: 'center', marginTop: 14 },
  documentItem: { padding: 16, borderRadius: 12, borderWidth: 1 },
  docRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  docCircle: { width: 20, height: 20, borderRadius: 10, borderWidth: 1, marginTop: 2 },
  titleBadgeRow: { flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap' },
  badgeContainer: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4 },
  badgeText: { fontSize: 11, fontWeight: '700' },
  docSubtitle: { fontSize: 13, marginTop: 4 },
  buttonStack: { marginTop: 14, gap: 10 },
  disclaimerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  calendarIcon: {
    width: 16,
    height: 16,
    marginTop: 2,
  },
  disclaimerText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 16,
  },
  poweredByText: { fontSize: 11, fontWeight: '500' },
  digitalIndiaLogo: { height: 22, width: 80 },
});`;
  }, [isDark, variant]);

  // Content body used in both Default and Card styles
  const renderContentBody = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Stepper */}
        <PatternStepper isDark={isDark} />

        <div style={{ height: 28 }} />

        <div
          style={{
            fontSize: 24,
            fontWeight: 800,
            color: colors.titleColor,
            lineHeight: 1.25,
            marginBottom: 4,
          }}
        >
          Upload documents
        </div>
        <div
          style={{
            fontSize: 14,
            color: colors.subtleText,
            lineHeight: 1.4,
            marginBottom: 20,
          }}
        >
          PDF or JPG, max 5 MB each. Self-attested.
        </div>

        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '18px',
            color: colors.titleColor,
            marginBottom: 8,
          }}
        >
          Required documents — 1 of 4 uploaded
        </div>

        {/* Linear Progress Bar with Gradient */}
        <div
          style={{
            width: '100%',
            height: 6,
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.12)' : '#E5E7EB',
            borderRadius: 3,
            overflow: 'hidden',
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: '25%',
              height: '100%',
              background: isDark
                ? 'linear-gradient(90deg, #6366F1 0%, #A5B4FC 100%)'
                : 'linear-gradient(90deg, #9C8AF9 0%, #432CBB 100%)',
              borderRadius: 3,
              transition: 'width 0.3s ease',
            }}
          />
        </div>

        {/* Aadhaar Card (Uploaded) */}
        <div
          style={{
            padding: 16,
            borderRadius: 12,
            backgroundColor: colors.uploadedBg,
            border: `1px solid ${colors.uploadedBorder}`,
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 20,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: 20,
                color: colors.uploadedIcon,
                fontVariationSettings: "'FILL' 1",
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              check_circle
            </span>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: colors.titleColor,
                }}
              >
                Aadhaar Card
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: colors.uploadedText,
                  marginTop: 4,
                }}
              >
                aadhaar_card.pdf · 1.2 MB · Uploaded just now
              </div>
            </div>
          </div>

          <div style={{ marginTop: 14, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <div style={{ width: 100 }}>
              <Ux4gButton
                text="View"
                onPress={() => {}}
                variant="outline"
                size="small"
                width={100}
                height={38}
                contentColor={colors.primaryColor}
                borderColor={isDark ? UX4GColors.primary300 : '#C7D2FE'}
              />
            </div>
            <div style={{ width: 120 }}>
              <Ux4gButton
                text="Re-upload"
                onPress={() => {}}
                variant="outline"
                size="small"
                width={120}
                height={38}
                contentColor={colors.primaryColor}
                borderColor={isDark ? UX4GColors.primary300 : '#C7D2FE'}
              />
            </div>
          </div>
        </div>

        {/* Proof of Income */}
        <DocumentItem
          title="Proof of Income"
          subtitle="Salary slip or income tax return"
          badge="Required"
          badgeColor="#FEE2E2"
          badgeTextColor="#991B1B"
          isDark={isDark}
        />
        <div style={{ height: 20 }} />

        {/* Residence proof */}
        <DocumentItem
          title="Residence proof"
          subtitle="Electricity bill, gas bill or ration card"
          badge="Required"
          badgeColor="#FEE2E2"
          badgeTextColor="#991B1B"
          isDark={isDark}
        />
        <div style={{ height: 20 }} />

        {/* Caste certificate */}
        <DocumentItem
          title="Caste certificate"
          subtitle="SC/ST/OBC applicants only"
          badge="Optional"
          badgeColor="#F3F4F6"
          badgeTextColor="#374151"
          showDigiLocker={false}
          isDark={isDark}
        />
        <div style={{ height: 24 }} />

        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 8,
            fontSize: 13,
            color: isDark ? UX4GColors.neutral400 : '#6B7280',
            lineHeight: 1.4,
            marginBottom: 24,
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: 18,
              color: isDark ? UX4GColors.neutral400 : '#6B7280',
              flexShrink: 0,
              marginTop: 1,
            }}
          >
            calendar_today
          </span>
          <span>
            All documents must be self-attested. AI flags quality issues; officers make the final call.
          </span>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button
            type="button"
            onClick={() => alert('Continuing...')}
            style={{
              width: '100%',
              height: 44,
              backgroundColor: colors.primaryColor,
              color: isDark ? UX4GColors.neutral900 : '#FFFFFF',
              border: 'none',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.2s ease',
            }}
          >
            Continue
          </button>

          <button
            type="button"
            onClick={() => alert('Going back...')}
            style={{
              width: '100%',
              height: 44,
              backgroundColor: 'transparent',
              color: colors.primaryColor,
              border: `1.5px solid ${isDark ? UX4GColors.primary300 : '#C7D2FE'}`,
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.2s ease',
            }}
          >
            Back
          </button>
        </div>
      </div>
    );
  };

  const renderLiveMockup = () => {
    const isCard = variant === 'Card style';

    return (
      <div
        style={{
          width: 360,
          minHeight: 700,
          maxHeight: 840,
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
          position: 'relative',
        }}
      >
        {/* Top UX4G AppHeader */}
        <div style={{ backgroundColor: colors.headerBg, flexShrink: 0 }}>
          <div
            style={{
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img
                src="/national_emblem_logo.svg"
                alt="National Emblem"
                style={{
                  height: 36,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />
              <div
                style={{
                  width: 1,
                  height: 32,
                  backgroundColor: isDark ? UX4GColors.neutral700 : '#D1D5DB',
                }}
              />
              <UnionLogo size={32} isDark={isDark} />
            </div>
            {/* Menu button on right side */}
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                border: `1.5px solid ${isDark ? UX4GColors.primary300 : '#C7D2FE'}`,
                backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
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
                  color: isDark ? UX4GColors.primary300 : '#432CBB',
                }}
              >
                menu
              </span>
            </div>
          </div>
          <div style={{ height: 1, backgroundColor: isDark ? UX4GColors.neutral800 : '#F0F0F2' }} />
        </div>

        {/* Scrollable Center Content */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              flex: 1,
              padding: isCard ? '16px 14px' : '20px 18px',
            }}
          >
            {isCard ? (
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: '20px 18px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                  border: `1px solid ${isDark ? UX4GColors.neutral700 : 'rgba(0,0,0,0.03)'}`,
                }}
              >
                {renderContentBody()}
              </div>
            ) : (
              renderContentBody()
            )}
          </div>

          {/* Powered by Footer */}
          <div
            style={{
              padding: '10px 0 20px 0',
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
          <h1 className="wb-title">Document scan and upload</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A pattern for scanning and uploading multiple documents with status indicators and DigiLocker integration.
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
                <div
                  className={`wb-preview-area ${isDark ? 'dark' : ''}`}
                  style={{ flexDirection: 'column', alignItems: 'center' }}
                >
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
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700,
                        }}
                      >
                        Layout Variant:
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
                              color:
                                variant === v
                                  ? UX4GColors.neutral0
                                  : isDark
                                  ? UX4GColors.neutral400
                                  : UX4GColors.neutral600,
                              transition: 'all 0.2s ease',
                            }}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Render Live Mobile Mockup */}
                  {renderLiveMockup()}
                </div>
              </Ux4gThemeProvider>
            )}

            {/* 2. Code Tab */}
            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                  <button
                    type="button"
                    onClick={() => setVariant('Default')}
                    className={`wb-tab ${variant === 'Default' ? 'active' : ''}`}
                    style={{ padding: '4px 12px', fontSize: 12 }}
                  >
                    Default
                  </button>
                  <button
                    type="button"
                    onClick={() => setVariant('Card style')}
                    className={`wb-tab ${variant === 'Card style' ? 'active' : ''}`}
                    style={{ padding: '4px 12px', fontSize: 12 }}
                  >
                    Card style
                  </button>
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

export default DocumentScanUploadDoc;
