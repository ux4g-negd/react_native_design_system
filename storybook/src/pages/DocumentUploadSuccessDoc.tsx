import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface DocumentUploadSuccessDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

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

export const DocumentUploadSuccessDoc: React.FC<DocumentUploadSuccessDocProps> = ({ isDark }) => {
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
      cardBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      primaryColor: isDark ? UX4GColors.primary300 : '#432CBB',
      bannerBg: isDark ? '#064E3B30' : '#F0FDF4',
      bannerBorder: isDark ? '#065F46' : '#BBF7D0',
      uploadedBg: isDark ? '#064E3B30' : '#F0FDF4',
      uploadedIcon: isDark ? UX4GColors.green400 : '#128937',
      uploadedText: isDark ? UX4GColors.neutral300 : '#4B5563',
      successTagBg: isDark ? '#065F46' : '#DCFCE7',
      successTagText: isDark ? '#BBF7D0' : '#166534',
      footerText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
    };
  }, [isDark, variant]);

  // Clean React Native TSX source snippet
  const codeString = useMemo(() => {
    const isCard = variant === 'Card style';
    if (isCard) {
      return `import React from 'react';
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
  UX4GColors,
  UX4GTypography,
} from 'ux4g-react-native-components';

export const DocumentUploadSuccessCardScreen = ({
  isDark = false,
  onProceed = () => {},
  onBack = () => {},
}: {
  isDark?: boolean;
  onProceed?: () => void;
  onBack?: () => void;
}) => {
  const primaryColor = isDark ? UX4GColors.primary300 : '#432CBB';
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleText = isDark ? UX4GColors.neutral400 : UX4GColors.neutral500;

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        {
          backgroundColor: isDark
            ? UX4GColors.primary900
            : '#ECE8FF',
        },
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
                    onPress={() => {}}
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
          contentContainerStyle={styles.cardScrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={[
              styles.cardContainer,
              {
                backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
                borderColor: isDark ? UX4GColors.neutral700 : 'rgba(0,0,0,0.03)',
              },
            ]}
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

            {/* Section Heading & Linear Progress Bar */}
            <Text
              style={[
                UX4GTypography.lL_strong,
                { color: titleColor, marginBottom: 8 },
              ]}
            >
              All required documents uploaded — 4 of 4
            </Text>
            <Ux4gLinearProgressBar
              value={1.0}
              height={6}
              borderRadius={3}
              trackColor={isDark ? UX4GColors.neutral800 : '#E5E7EB'}
              indicatorColor={primaryColor}
            />
            <View style={{ height: 20 }} />

            {/* Success Banner */}
            <View
              style={[
                styles.bannerCard,
                {
                  backgroundColor: isDark ? '#064E3B30' : '#F0FDF4',
                  borderColor: isDark ? '#065F46' : '#BBF7D0',
                },
              ]}
            >
              <View style={styles.docRow}>
                <View style={styles.iconCircleGreen}>
                  <Text style={styles.checkMark}>✓</Text>
                </View>
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={[styles.bannerTitle, { color: titleColor }]}>
                    All required documents uploaded.
                  </Text>
                  <View style={styles.badgeSuccess}>
                    <Text style={styles.badgeSuccessText}>Success</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={{ height: 16 }} />

            {/* 1. Aadhaar Card (Uploaded) */}
            <View
              style={[
                styles.docCardGreen,
                {
                  backgroundColor: isDark ? '#064E3B30' : '#F0FDF4',
                },
              ]}
            >
              <View style={styles.docRow}>
                <View style={styles.iconCircleGreen}>
                  <Text style={styles.checkMark}>✓</Text>
                </View>
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={[styles.docTitle, { color: titleColor }]}>
                    Aadhaar Card
                  </Text>
                  <Text
                    style={[
                      styles.docMeta,
                      { color: isDark ? UX4GColors.neutral300 : '#4B5563' },
                    ]}
                  >
                    aadhaar_card.pdf · 1.2 MB · Uploaded just now
                  </Text>
                </View>
              </View>

              <View style={styles.buttonRow}>
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

            <View style={{ height: 16 }} />

            {/* 2. Proof of Income (Uploaded) */}
            <View
              style={[
                styles.docCardGreen,
                {
                  backgroundColor: isDark ? '#064E3B30' : '#F0FDF4',
                },
              ]}
            >
              <View style={styles.docRow}>
                <View style={styles.iconCircleGreen}>
                  <Text style={styles.checkMark}>✓</Text>
                </View>
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={[styles.docTitle, { color: titleColor }]}>
                    Proof of Income
                  </Text>
                  <Text
                    style={[
                      styles.docMeta,
                      { color: isDark ? UX4GColors.neutral300 : '#4B5563' },
                    ]}
                  >
                    income_proof.pdf · 1.8 MB · Uploaded just now
                  </Text>
                </View>
              </View>

              <View style={styles.buttonRow}>
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

            <View style={{ height: 16 }} />

            {/* 3. Residence proof (Uploaded) */}
            <View
              style={[
                styles.docCardGreen,
                {
                  backgroundColor: isDark ? '#064E3B30' : '#F0FDF4',
                },
              ]}
            >
              <View style={styles.docRow}>
                <View style={styles.iconCircleGreen}>
                  <Text style={styles.checkMark}>✓</Text>
                </View>
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={[styles.docTitle, { color: titleColor }]}>
                    Residence proof
                  </Text>
                  <Text
                    style={[
                      styles.docMeta,
                      { color: isDark ? UX4GColors.neutral300 : '#4B5563' },
                    ]}
                  >
                    electricity_bill.jpg · 920 KB · Uploaded just now
                  </Text>
                </View>
              </View>

              <View style={styles.buttonRow}>
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

            <View style={{ height: 16 }} />

            {/* 4. Caste certificate (Uploaded) */}
            <View
              style={[
                styles.docCardGreen,
                {
                  backgroundColor: isDark ? '#064E3B30' : '#F0FDF4',
                },
              ]}
            >
              <View style={styles.docRow}>
                <View style={styles.iconCircleGreen}>
                  <Text style={styles.checkMark}>✓</Text>
                </View>
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={[styles.docTitle, { color: titleColor }]}>
                    Caste certificate
                  </Text>
                  <Text
                    style={[
                      styles.docMeta,
                      { color: isDark ? UX4GColors.neutral300 : '#4B5563' },
                    ]}
                  >
                    caste_cert.pdf · 1.1 MB · Uploaded just now
                  </Text>
                </View>
              </View>

              <View style={styles.buttonRow}>
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

            <View style={{ height: 24 }} />

            {/* Disclaimer */}
            <View style={styles.disclaimerRow}>
              <Text style={styles.calendarIcon}>🗓️</Text>
              <Text
                style={[
                  styles.disclaimerText,
                  { color: isDark ? UX4GColors.neutral400 : '#6B7280' },
                ]}
              >
                All documents must be self-attested. AI flags quality issues; officers make the final call.
              </Text>
            </View>

            <View style={{ height: 24 }} />

            {/* Actions */}
            <Ux4gButton
              text="Proceed to review"
              onPress={onProceed}
              size="large"
              width="100%"
              height={44}
              backgroundColor={primaryColor}
              contentColor="#FFFFFF"
            />
            <View style={{ height: 12 }} />
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
          </View>

          {/* Footer */}
          <View style={styles.footerContainer}>
            <Text
              style={[
                styles.footerText,
                { color: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400 },
              ]}
            >
              Powered by -
            </Text>
            <Image
              source={require('./assets/digital_india_logo.png')}
              style={styles.digitalIndiaLogo}
              resizeMode="contain"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  emblemIcon: {
    width: 32,
    height: 32,
  },
  verticalDivider: {
    width: 1,
    height: 28,
    marginHorizontal: 10,
  },
  unionIcon: {
    width: 32,
    height: 32,
  },
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
    fontWeight: '700',
  },
  cardScrollContainer: {
    padding: 16,
    paddingBottom: 24,
  },
  cardContainer: {
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  headingTitle: {
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  subtitleText: {
    fontSize: 14,
    marginTop: 6,
  },
  bannerCard: {
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
  },
  bannerTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  badgeSuccess: {
    alignSelf: 'flex-start',
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 4,
  },
  badgeSuccessText: {
    color: '#166534',
    fontSize: 11,
    fontWeight: '700',
  },
  docCardGreen: {
    borderRadius: 12,
    padding: 16,
  },
  docRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconCircleGreen: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#16A34A',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  checkMark: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  docTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  docMeta: {
    fontSize: 13,
    marginTop: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 14,
  },
  disclaimerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  calendarIcon: {
    fontSize: 16,
    marginTop: 1,
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
    paddingVertical: 18,
    gap: 6,
  },
  footerText: {
    fontSize: 12,
    fontWeight: '500',
  },
  digitalIndiaLogo: {
    height: 20,
    width: 60,
  },
});`;
    }

    return `import React from 'react';
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
  UX4GColors,
  UX4GTypography,
} from 'ux4g-react-native-components';

export const DocumentUploadSuccessDefaultScreen = ({
  isDark = false,
  onProceed = () => {},
  onBack = () => {},
}: {
  isDark?: boolean;
  onProceed?: () => void;
  onBack?: () => void;
}) => {
  const primaryColor = isDark ? UX4GColors.primary300 : '#432CBB';
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleText = isDark ? UX4GColors.neutral400 : UX4GColors.neutral500;

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        {
          backgroundColor: isDark
            ? UX4GColors.neutral900
            : '#FFFFFF',
        },
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
                    onPress={() => {}}
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
          contentContainerStyle={styles.scrollContainer}
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

          {/* Section Heading & Linear Progress Bar */}
          <Text
            style={[
              UX4GTypography.lL_strong,
              { color: titleColor, marginBottom: 8 },
            ]}
          >
            All required documents uploaded — 4 of 4
          </Text>
          <Ux4gLinearProgressBar
            value={1.0}
            height={6}
            borderRadius={3}
            trackColor={isDark ? UX4GColors.neutral800 : '#E5E7EB'}
            indicatorColor={primaryColor}
          />
          <View style={{ height: 20 }} />

          {/* Success Banner */}
          <View
            style={[
              styles.bannerCard,
              {
                backgroundColor: isDark ? '#064E3B30' : '#F0FDF4',
                borderColor: isDark ? '#065F46' : '#BBF7D0',
              },
            ]}
          >
            <View style={styles.docRow}>
              <View style={styles.iconCircleGreen}>
                <Text style={styles.checkMark}>✓</Text>
              </View>
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={[styles.bannerTitle, { color: titleColor }]}>
                  All required documents uploaded.
                </Text>
                <View style={styles.badgeSuccess}>
                  <Text style={styles.badgeSuccessText}>Success</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ height: 16 }} />

          {/* 1. Aadhaar Card (Uploaded) */}
          <View
            style={[
              styles.docCardGreen,
              {
                backgroundColor: isDark ? '#064E3B30' : '#F0FDF4',
              },
            ]}
          >
            <View style={styles.docRow}>
              <View style={styles.iconCircleGreen}>
                <Text style={styles.checkMark}>✓</Text>
              </View>
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={[styles.docTitle, { color: titleColor }]}>
                  Aadhaar Card
                </Text>
                <Text
                  style={[
                    styles.docMeta,
                    { color: isDark ? UX4GColors.neutral300 : '#4B5563' },
                  ]}
                >
                  aadhaar_card.pdf · 1.2 MB · Uploaded just now
                </Text>
              </View>
            </View>

            <View style={styles.buttonRow}>
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

          <View style={{ height: 16 }} />

          {/* 2. Proof of Income (Uploaded) */}
          <View
            style={[
              styles.docCardGreen,
              {
                backgroundColor: isDark ? '#064E3B30' : '#F0FDF4',
              },
            ]}
          >
            <View style={styles.docRow}>
              <View style={styles.iconCircleGreen}>
                <Text style={styles.checkMark}>✓</Text>
              </View>
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={[styles.docTitle, { color: titleColor }]}>
                  Proof of Income
                </Text>
                <Text
                  style={[
                    styles.docMeta,
                    { color: isDark ? UX4GColors.neutral300 : '#4B5563' },
                  ]}
                >
                  income_proof.pdf · 1.8 MB · Uploaded just now
                </Text>
              </View>
            </View>

            <View style={styles.buttonRow}>
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

          <View style={{ height: 16 }} />

          {/* 3. Residence proof (Uploaded) */}
          <View
            style={[
              styles.docCardGreen,
              {
                backgroundColor: isDark ? '#064E3B30' : '#F0FDF4',
              },
            ]}
          >
            <View style={styles.docRow}>
              <View style={styles.iconCircleGreen}>
                <Text style={styles.checkMark}>✓</Text>
              </View>
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={[styles.docTitle, { color: titleColor }]}>
                  Residence proof
                </Text>
                <Text
                  style={[
                    styles.docMeta,
                    { color: isDark ? UX4GColors.neutral300 : '#4B5563' },
                  ]}
                >
                  electricity_bill.jpg · 920 KB · Uploaded just now
                </Text>
              </View>
            </View>

            <View style={styles.buttonRow}>
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

          <View style={{ height: 16 }} />

          {/* 4. Caste certificate (Uploaded) */}
          <View
            style={[
              styles.docCardGreen,
              {
                backgroundColor: isDark ? '#064E3B30' : '#F0FDF4',
              },
            ]}
          >
            <View style={styles.docRow}>
              <View style={styles.iconCircleGreen}>
                <Text style={styles.checkMark}>✓</Text>
              </View>
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={[styles.docTitle, { color: titleColor }]}>
                  Caste certificate
                </Text>
                <Text
                  style={[
                    styles.docMeta,
                    { color: isDark ? UX4GColors.neutral300 : '#4B5563' },
                  ]}
                >
                  caste_cert.pdf · 1.1 MB · Uploaded just now
                </Text>
              </View>
            </View>

            <View style={styles.buttonRow}>
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

          <View style={{ height: 24 }} />

          {/* Disclaimer */}
          <View style={styles.disclaimerRow}>
            <Text style={styles.calendarIcon}>🗓️</Text>
            <Text
              style={[
                styles.disclaimerText,
                { color: isDark ? UX4GColors.neutral400 : '#6B7280' },
              ]}
            >
              All documents must be self-attested. AI flags quality issues; officers make the final call.
            </Text>
          </View>

          <View style={{ height: 24 }} />

          {/* Actions */}
          <Ux4gButton
            text="Proceed to review"
            onPress={onProceed}
            size="large"
            width="100%"
            height={44}
            backgroundColor={primaryColor}
            contentColor="#FFFFFF"
          />
          <View style={{ height: 12 }} />
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
            <Text
              style={[
                styles.footerText,
                { color: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400 },
              ]}
            >
              Powered by -
            </Text>
            <Image
              source={require('./assets/digital_india_logo.png')}
              style={styles.digitalIndiaLogo}
              resizeMode="contain"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  emblemIcon: {
    width: 32,
    height: 32,
  },
  verticalDivider: {
    width: 1,
    height: 28,
    marginHorizontal: 10,
  },
  unionIcon: {
    width: 32,
    height: 32,
  },
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
    fontWeight: '700',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 24,
  },
  headingTitle: {
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  subtitleText: {
    fontSize: 14,
    marginTop: 6,
  },
  bannerCard: {
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
  },
  bannerTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  badgeSuccess: {
    alignSelf: 'flex-start',
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 4,
  },
  badgeSuccessText: {
    color: '#166534',
    fontSize: 11,
    fontWeight: '700',
  },
  docCardGreen: {
    borderRadius: 12,
    padding: 16,
  },
  docRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconCircleGreen: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#16A34A',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  checkMark: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  docTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  docMeta: {
    fontSize: 13,
    marginTop: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 14,
  },
  disclaimerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  calendarIcon: {
    fontSize: 16,
    marginTop: 1,
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
    paddingVertical: 20,
    gap: 6,
  },
  footerText: {
    fontSize: 12,
    fontWeight: '500',
  },
  digitalIndiaLogo: {
    height: 20,
    width: 60,
  },
});`;
  }, [variant]);

  const renderContentBody = () => {
    return (
      <div>
        {/* Stepper */}
        <PatternStepper isDark={isDark} />

        <div style={{ height: 24 }} />

        {/* Title & Subtitle */}
        <div>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: colors.titleColor,
              margin: '0 0 6px 0',
              lineHeight: 1.25,
              letterSpacing: '-0.3px',
            }}
          >
            Upload documents
          </h2>
          <p
            style={{
              fontSize: 13,
              color: colors.subtleText,
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            PDF or JPG, max 5 MB each. Self-attested.
          </p>
        </div>

        <div style={{ height: 18 }} />

        {/* Section Title */}
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '18px',
            color: colors.titleColor,
            marginBottom: 8,
          }}
        >
          All required documents uploaded — 4 of 4
        </div>

        {/* Gradient Progress Bar (100% filled) */}
        <div
          style={{
            width: '100%',
            height: 6,
            borderRadius: 3,
            backgroundColor: isDark ? UX4GColors.neutral800 : '#E5E7EB',
            overflow: 'hidden',
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 3,
              background: isDark
                ? 'linear-gradient(90deg, #6366F1 0%, #A5B4FC 100%)'
                : 'linear-gradient(90deg, #9C8AF9 0%, #432CBB 100%)',
            }}
          />
        </div>

        {/* Success Banner */}
        <div
          style={{
            padding: 14,
            borderRadius: 12,
            backgroundColor: colors.bannerBg,
            border: `1px solid ${colors.bannerBorder}`,
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                backgroundColor: colors.uploadedIcon,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 14,
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                }}
              >
                check
              </span>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: colors.titleColor,
                }}
              >
                All required documents uploaded.
              </div>
              <div style={{ marginTop: 4 }}>
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: 4,
                    backgroundColor: colors.successTagBg,
                    color: colors.successTagText,
                    fontSize: 11,
                    fontWeight: 700,
                    lineHeight: 1.4,
                    display: 'inline-block',
                  }}
                >
                  Success
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 1. Aadhaar Card (Uploaded) */}
        <div
          style={{
            padding: 16,
            borderRadius: 12,
            backgroundColor: colors.uploadedBg,
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                backgroundColor: colors.uploadedIcon,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 14,
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                }}
              >
                check
              </span>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 15,
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

        {/* 2. Proof of Income (Uploaded) */}
        <div
          style={{
            padding: 16,
            borderRadius: 12,
            backgroundColor: colors.uploadedBg,
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                backgroundColor: colors.uploadedIcon,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 14,
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                }}
              >
                check
              </span>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: colors.titleColor,
                }}
              >
                Proof of Income
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: colors.uploadedText,
                  marginTop: 4,
                }}
              >
                income_proof.pdf · 1.8 MB · Uploaded just now
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

        {/* 3. Residence proof (Uploaded) */}
        <div
          style={{
            padding: 16,
            borderRadius: 12,
            backgroundColor: colors.uploadedBg,
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                backgroundColor: colors.uploadedIcon,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 14,
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                }}
              >
                check
              </span>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: colors.titleColor,
                }}
              >
                Residence proof
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: colors.uploadedText,
                  marginTop: 4,
                }}
              >
                electricity_bill.jpg · 920 KB · Uploaded just now
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

        {/* 4. Caste certificate (Uploaded) */}
        <div
          style={{
            padding: 16,
            borderRadius: 12,
            backgroundColor: colors.uploadedBg,
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 24,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                backgroundColor: colors.uploadedIcon,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 14,
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                }}
              >
                check
              </span>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: colors.titleColor,
                }}
              >
                Caste certificate
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: colors.uploadedText,
                  marginTop: 4,
                }}
              >
                caste_cert.pdf · 1.1 MB · Uploaded just now
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

        {/* Disclaimer */}
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
            onClick={() => alert('Proceeding to review...')}
            style={{
              width: '100%',
              height: 44,
              backgroundColor: colors.primaryColor,
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.2s ease',
            }}
          >
            Proceed to review
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
          maxHeight: 880,
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
              src="/digital_india_logo.svg"
              alt="Digital India"
              style={{
                height: 18,
                objectFit: 'contain',
              }}
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith('.png')) {
                  target.src = '/digital_india_logo.png';
                }
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
          <h1 className="wb-title">Document upload success</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A pattern showing the completed state where all required documents are successfully uploaded.
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
                              backgroundColor:
                                variant === v
                                  ? isDark
                                    ? UX4GColors.primary400
                                    : '#432CBB'
                                  : 'transparent',
                              color:
                                variant === v
                                  ? isDark
                                    ? UX4GColors.neutral900
                                    : '#FFFFFF'
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

export default DocumentUploadSuccessDoc;
