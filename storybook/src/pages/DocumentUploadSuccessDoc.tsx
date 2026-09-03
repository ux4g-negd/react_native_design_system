import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { Ux4gCheckbox } from '../../../src/components/checkbox/Checkbox';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface DocumentUploadSuccessDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

// ─── Custom Stepper matching Flutter pattern ─────────────────────────────────
const PatternStepper: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const inactiveBorder = isDark ? UX4GColors.neutral700 : '#D1D5DB';
  const inactiveText = isDark ? UX4GColors.neutral500 : '#9CA3AF';
  const labelColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;

  const steps = [
    { title: 'Eligibility', state: 'completed' },
    { title: 'Personal', state: 'completed' },
    { title: 'Documents', state: 'active' },
    { title: '', state: 'pending', number: 4 },
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
              color: labelColor,
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
  const [isSelfAttested, setIsSelfAttested] = useState(true);

  const colors = useMemo(() => {
    const isCard = variant === 'Card style';
    return {
      screenBg: isCard
        ? isDark
          ? UX4GColors.primary900
          : UX4GColors.primary50
        : isDark
        ? UX4GColors.neutral900
        : UX4GColors.neutral50,
      headerBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      cardBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      uploadedBg: isDark ? UX4GColors.green900 : UX4GColors.green50,
      uploadedBorder: isDark ? UX4GColors.green600 : UX4GColors.green300,
      uploadedIcon: isDark ? UX4GColors.green500 : UX4GColors.green600,
      uploadedText: isDark ? UX4GColors.green300 : UX4GColors.green800,
      successTagBg: isDark ? UX4GColors.green800 : UX4GColors.green100,
      uploadedDesc: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      footerText: isDark ? UX4GColors.neutral500 : '#9CA3AF',
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
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gButton,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const DocumentUploadSuccessCardScreen = ({
  isDark = false,
  onProceed = () => {},
  onBack = () => {},
}: {
  isDark?: boolean;
  onProceed?: () => void;
  onBack?: () => void;
}) => {
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleText = isDark ? UX4GColors.neutral200 : UX4GColors.neutral700;

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        {
          backgroundColor: isDark
            ? UX4GColors.primary900
            : UX4GColors.primary50,
        },
      ]}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={{ backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50 }}>
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
          />
          <Ux4gDivider color={isDark ? UX4GColors.neutral700 : UX4GColors.neutral200} thickness={1} />
        </View>

        {/* Card Content */}
        <ScrollView
          contentContainerStyle={styles.cardScrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={[
              styles.cardContainer,
              { backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50 },
            ]}
          >
            {/* Stepper */}
            <DocumentStepper isDark={isDark} currentStep={3} />
            <View style={{ height: 32 }} />

            <Text style={[styles.headingTitle, { color: titleColor }]}>
              Upload documents
            </Text>
            <Text style={[styles.subtitleText, { color: subtleText }]}>
              All required documents uploaded.
            </Text>
            <View style={{ height: 32 }} />

            {/* Aadhaar Card */}
            <UploadedCard
              title="Aadhaar Card"
              fileName="aadhaar_card.pdf"
              size="1.2 MB"
              isDark={isDark}
            />
            <View style={{ height: 16 }} />

            {/* Residence proof */}
            <UploadedCard
              title="Residence proof"
              fileName="electricity_bill.jpg"
              size="920 KB"
              isDark={isDark}
            />
          </View>
        </ScrollView>

        {/* Actions & Footer */}
        <View style={styles.actionsContainer}>
          <Ux4gButton
            text="Proceed to review"
            onPress={onProceed}
            size="medium"
            width="100%"
            height={48}
            backgroundColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
            contentColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral50}
          />
          <View style={{ height: 12 }} />
          <Ux4gButton
            text="Back"
            onPress={onBack}
            variant="outline"
            size="medium"
            width="100%"
            height={48}
            contentColor={primaryColor}
            borderColor={isDark ? UX4GColors.primary600 : UX4GColors.primary300}
          />
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.poweredByText}>
            Powered by -
          </Text>
          <Image
            source={require('./assets/digital_india_logo.png')}
            style={[styles.digitalIndiaLogo, isDark && { tintColor: '#FFFFFF' }]}
            resizeMode="contain"
          />
        </View>
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
  const primary = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const inactiveBorder = isDark ? UX4GColors.neutral700 : '#D1D5DB';
  const inactiveText = isDark ? UX4GColors.neutral500 : '#9CA3AF';
  const labelColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;

  const steps = [
    { title: 'Eligibility', state: 'completed' },
    { title: 'Personal', state: 'completed' },
    { title: 'Documents', state: 'active' },
    { title: '', state: 'pending', number: 4 },
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
              { color: labelColor },
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

const UploadedCard = ({
  title,
  fileName,
  size,
  isDark = false,
}: {
  title: string;
  fileName: string;
  size: string;
  isDark?: boolean;
}) => {
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;

  return (
    <View
      style={[
        styles.uploadedCard,
        {
          backgroundColor: isDark ? UX4GColors.green900 : UX4GColors.green50,
        },
      ]}
    >
      <View style={styles.uploadedRow}>
        <Image
          source={require('./assets/check_circle.png')}
          style={[
            styles.checkCircleIcon,
            { tintColor: isDark ? UX4GColors.green500 : UX4GColors.green600 },
          ]}
        />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={[styles.docTitle, { color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900 }]}>
            {title}
          </Text>
          <Text style={[styles.uploadedSubtitle, { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700 }]}>
            {\`\${fileName} · \${size} · Uploaded just now\`}
          </Text>
        </View>
      </View>

      <View style={styles.uploadedButtonsRow}>
        <Ux4gButton
          text="View"
          onPress={() => {}}
          variant="outline"
          size="small"
          width={80}
          height={48}
          contentColor={primaryColor}
          borderColor={isDark ? UX4GColors.primary600 : UX4GColors.primary300}
        />
        <View style={{ width: 12 }} />
        <Ux4gButton
          text="Re-upload"
          onPress={() => {}}
          variant="outline"
          size="small"
          width={110}
          height={48}
          contentColor={primaryColor}
          borderColor={isDark ? UX4GColors.primary600 : UX4GColors.primary300}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1, position: 'relative' },
  emblemIcon: { height: 40, width: 28 },
  verticalDivider: { height: 32, width: 1 },
  unionIcon: { height: 32, width: 44 },
  cardScrollContainer: { paddingHorizontal: 24, paddingVertical: 32 },
  cardContainer: {
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  headingTitle: { fontSize: 24, fontWeight: '800', lineHeight: 30, marginBottom: 4 },
  subtitleText: { fontSize: 14, lineHeight: 20 },
  uploadedCard: { padding: 16, borderRadius: 12 },
  uploadedRow: { flexDirection: 'row', alignItems: 'flex-start' },
  checkCircleIcon: { width: 20, height: 20, marginTop: 2 },
  docTitle: { fontSize: 16, fontWeight: '700' },
  uploadedSubtitle: { fontSize: 13, marginTop: 4 },
  uploadedButtonsRow: { flexDirection: 'row', alignItems: 'center', marginTop: 16 },
  actionsContainer: { paddingHorizontal: 24, paddingVertical: 16 },
  footerContainer: { alignItems: 'center', paddingBottom: 24 },
  poweredByText: { fontSize: 11, color: '#9CA3AF', marginBottom: 6 },
  digitalIndiaLogo: { height: 24, width: 90 },
});`;
    }

    return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gButton,
  Ux4gCheckbox,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const DocumentUploadSuccessScreen = ({
  isDark = false,
  onProceed = () => {},
  onBack = () => {},
}: {
  isDark?: boolean;
  onProceed?: () => void;
  onBack?: () => void;
}) => {
  const [isChecked, setIsChecked] = useState(true);
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleText = isDark ? UX4GColors.neutral200 : UX4GColors.neutral700;

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50 },
      ]}
    >
      <View style={styles.container}>
        {/* Header */}
        <Ux4gAppHeader
          variant="light"
          showBackButton={false}
          backgroundColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
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
        />
        <Ux4gDivider color={isDark ? UX4GColors.neutral700 : UX4GColors.neutral200} thickness={1} />

        {/* Content */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Stepper */}
          <DocumentStepper isDark={isDark} currentStep={3} />
          <View style={{ height: 32 }} />

          <Text style={[styles.headingTitle, { color: titleColor }]}>
            Upload documents
          </Text>
          <Text style={[styles.subtitleText, { color: subtleText }]}>
            PDF or JPG, max 5 MB each. Self-attested.
          </Text>
          <View style={{ height: 20 }} />

          <Text style={[styles.sectionHeading, { color: titleColor }]}>
            All 4 documents uploaded
          </Text>
          <View style={{ height: 20 }} />

          {/* Success Banner */}
          <View
            style={[
              styles.successBanner,
              {
                backgroundColor: isDark ? UX4GColors.green900 : UX4GColors.green50,
                borderColor: isDark ? UX4GColors.green600 : UX4GColors.green300,
              },
            ]}
          >
            <Image
              source={require('./assets/check_circle.png')}
              style={[
                styles.checkCircleIcon,
                { tintColor: isDark ? UX4GColors.green500 : UX4GColors.green600 },
              ]}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text
                style={[
                  styles.successBannerText,
                  { color: isDark ? UX4GColors.green300 : UX4GColors.green800 },
                ]}
              >
                All required documents uploaded.
              </Text>
              <View
                style={[
                  styles.successTag,
                  { backgroundColor: isDark ? UX4GColors.green800 : UX4GColors.green100 },
                ]}
              >
                <Text
                  style={[
                    styles.successTagText,
                    { color: isDark ? UX4GColors.green300 : UX4GColors.green800 },
                  ]}
                >
                  Success
                </Text>
              </View>
            </View>
          </View>
          <View style={{ height: 24 }} />

          {/* 4 Uploaded Document Cards */}
          <UploadedCard
            title="Aadhaar Card"
            fileName="aadhaar_card.pdf"
            size="1.2 MB"
            isDark={isDark}
          />
          <View style={{ height: 16 }} />

          <UploadedCard
            title="Proof of Income"
            fileName="income_proof.pdf"
            size="1.8 MB"
            isDark={isDark}
          />
          <View style={{ height: 16 }} />

          <UploadedCard
            title="Residence proof"
            fileName="electricity_bill.jpg"
            size="920 KB"
            isDark={isDark}
          />
          <View style={{ height: 16 }} />

          <UploadedCard
            title="Caste certificate"
            fileName="caste_cert.pdf"
            size="1.1 MB"
            isDark={isDark}
          />
          <View style={{ height: 32 }} />

          {/* Interactive Checkbox Disclaimer */}
          <View style={styles.checkboxRow}>
            <Ux4gCheckbox
              value={isChecked}
              onChanged={(val) => setIsChecked(val === true)}
            />
            <Text
              style={[
                styles.disclaimerText,
                { color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral600 },
              ]}
            >
              All documents must be self-attested. AI flags quality issues; officers make the final call.
            </Text>
          </View>
        </ScrollView>

        {/* Actions */}
        <View style={styles.actionsContainer}>
          <Ux4gButton
            text="Proceed to review"
            onPress={onProceed}
            size="medium"
            width="100%"
            height={48}
            backgroundColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
            contentColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral50}
          />
          <View style={{ height: 12 }} />
          <Ux4gButton
            text="Back"
            onPress={onBack}
            variant="outline"
            size="medium"
            width="100%"
            height={48}
            contentColor={primaryColor}
            borderColor={isDark ? UX4GColors.primary600 : UX4GColors.primary300}
          />
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text style={styles.poweredByText}>
            Powered by -
          </Text>
          <Image
            source={require('./assets/digital_india_logo.png')}
            style={[styles.digitalIndiaLogo, isDark && { tintColor: '#FFFFFF' }]}
            resizeMode="contain"
          />
        </View>
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
  const primary = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const inactiveBorder = isDark ? UX4GColors.neutral700 : '#D1D5DB';
  const inactiveText = isDark ? UX4GColors.neutral500 : '#9CA3AF';
  const labelColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;

  const steps = [
    { title: 'Eligibility', state: 'completed' },
    { title: 'Personal', state: 'completed' },
    { title: 'Documents', state: 'active' },
    { title: '', state: 'pending', number: 4 },
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
              { color: labelColor },
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

const UploadedCard = ({
  title,
  fileName,
  size,
  isDark = false,
}: {
  title: string;
  fileName: string;
  size: string;
  isDark?: boolean;
}) => {
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;

  return (
    <View
      style={[
        styles.uploadedCard,
        {
          backgroundColor: isDark ? UX4GColors.green900 : UX4GColors.green50,
        },
      ]}
    >
      <View style={styles.uploadedRow}>
        <Image
          source={require('./assets/check_circle.png')}
          style={[
            styles.checkCircleIcon,
            { tintColor: isDark ? UX4GColors.green500 : UX4GColors.green600 },
          ]}
        />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={[styles.docTitle, { color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900 }]}>
            {title}
          </Text>
          <Text style={[styles.uploadedSubtitle, { color: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700 }]}>
            {\`\${fileName} · \${size} · Uploaded just now\`}
          </Text>
        </View>
      </View>

      <View style={styles.uploadedButtonsRow}>
        <Ux4gButton
          text="View"
          onPress={() => {}}
          variant="outline"
          size="small"
          width={80}
          height={48}
          contentColor={primaryColor}
          borderColor={isDark ? UX4GColors.primary600 : UX4GColors.primary300}
        />
        <View style={{ width: 12 }} />
        <Ux4gButton
          text="Re-upload"
          onPress={() => {}}
          variant="outline"
          size="small"
          width={110}
          height={48}
          contentColor={primaryColor}
          borderColor={isDark ? UX4GColors.primary600 : UX4GColors.primary300}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1, position: 'relative' },
  emblemIcon: { height: 40, width: 28 },
  verticalDivider: { height: 32, width: 1 },
  unionIcon: { height: 32, width: 44 },
  scrollContent: { paddingHorizontal: 24, paddingVertical: 24 },
  headingTitle: { fontSize: 24, fontWeight: '800', lineHeight: 30, marginBottom: 4 },
  subtitleText: { fontSize: 14, lineHeight: 20 },
  sectionHeading: { fontSize: 14, fontWeight: '700', lineHeight: 20 },
  successBanner: { padding: 16, borderRadius: 12, borderWidth: 1, flexDirection: 'row', alignItems: 'flex-start' },
  checkCircleIcon: { width: 20, height: 20, marginTop: 2 },
  successBannerText: { fontSize: 14, lineHeight: 20 },
  successTag: { alignSelf: 'flex-start', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4, marginTop: 4 },
  successTagText: { fontSize: 11, fontWeight: '700' },
  uploadedCard: { padding: 16, borderRadius: 12 },
  uploadedRow: { flexDirection: 'row', alignItems: 'flex-start' },
  docTitle: { fontSize: 16, fontWeight: '700' },
  uploadedSubtitle: { fontSize: 13, marginTop: 4 },
  uploadedButtonsRow: { flexDirection: 'row', alignItems: 'center', marginTop: 16 },
  checkboxRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 8 },
  disclaimerText: { flex: 1, fontSize: 13, lineHeight: 18 },
  actionsContainer: { paddingHorizontal: 24, paddingVertical: 16 },
  footerContainer: { alignItems: 'center', paddingBottom: 24 },
  poweredByText: { fontSize: 11, color: '#9CA3AF', marginBottom: 6 },
  digitalIndiaLogo: { height: 24, width: 90 },
});`;
  }, [isDark, variant]);

  const renderLiveMockup = () => {
    const isCard = variant === 'Card style';

    return (
      <div
        style={{
          width: 360,
          height: 760,
          borderRadius: 20,
          boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)',
          overflow: 'hidden',
          backgroundColor: colors.screenBg,
          border: `1px solid ${colors.border}`,
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
                  height: 40,
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
          </div>
          <Ux4gDivider color={isDark ? UX4GColors.neutral700 : UX4GColors.neutral200} thickness={1} />
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
              padding: isCard ? '32px 24px' : '24px 24px',
            }}
          >
            {isCard ? (
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: 24,
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Stepper */}
                <PatternStepper isDark={isDark} />

                <div style={{ height: 32 }} />

                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 800,
                    color: colors.titleColor,
                    lineHeight: 1.2,
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
                    marginBottom: 32,
                  }}
                >
                  All required documents uploaded.
                </div>

                {/* Aadhaar Card */}
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
                          color: colors.uploadedDesc,
                          marginTop: 4,
                        }}
                      >
                        aadhaar_card.pdf · 1.2 MB · Uploaded just now
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
                    <div style={{ width: 80 }}>
                      <Ux4gButton
                        text="View"
                        onPress={() => {}}
                        variant="outline"
                        size="small"
                        width={80}
                        height={48}
                        contentColor={colors.primaryColor}
                        borderColor={isDark ? UX4GColors.primary600 : UX4GColors.primary300}
                      />
                    </div>
                    <div style={{ width: 110 }}>
                      <Ux4gButton
                        text="Re-upload"
                        onPress={() => {}}
                        variant="outline"
                        size="small"
                        width={110}
                        height={48}
                        contentColor={colors.primaryColor}
                        borderColor={isDark ? UX4GColors.primary600 : UX4GColors.primary300}
                      />
                    </div>
                  </div>
                </div>

                {/* Residence proof */}
                <div
                  style={{
                    padding: 16,
                    borderRadius: 12,
                    backgroundColor: colors.uploadedBg,
                    display: 'flex',
                    flexDirection: 'column',
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
                        Residence proof
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          color: colors.uploadedDesc,
                          marginTop: 4,
                        }}
                      >
                        electricity_bill.jpg · 920 KB · Uploaded just now
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
                    <div style={{ width: 80 }}>
                      <Ux4gButton
                        text="View"
                        onPress={() => {}}
                        variant="outline"
                        size="small"
                        width={80}
                        height={48}
                        contentColor={colors.primaryColor}
                        borderColor={isDark ? UX4GColors.primary600 : UX4GColors.primary300}
                      />
                    </div>
                    <div style={{ width: 110 }}>
                      <Ux4gButton
                        text="Re-upload"
                        onPress={() => {}}
                        variant="outline"
                        size="small"
                        width={110}
                        height={48}
                        contentColor={colors.primaryColor}
                        borderColor={isDark ? UX4GColors.primary600 : UX4GColors.primary300}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Stepper */}
                <PatternStepper isDark={isDark} />

                <div style={{ height: 32 }} />

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
                    color: colors.titleColor,
                    marginBottom: 20,
                  }}
                >
                  All 4 documents uploaded
                </div>

                {/* Success Banner */}
                <div
                  style={{
                    padding: 16,
                    borderRadius: 12,
                    backgroundColor: colors.uploadedBg,
                    border: `1px solid ${colors.uploadedBorder}`,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    marginBottom: 24,
                  }}
                >
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
                        fontSize: 14,
                        color: colors.uploadedText,
                        lineHeight: 1.4,
                      }}
                    >
                      All required documents uploaded.
                    </div>
                    <div
                      style={{
                        display: 'inline-block',
                        marginTop: 4,
                        padding: '2px 8px',
                        borderRadius: 4,
                        backgroundColor: colors.successTagBg,
                        color: colors.uploadedText,
                        fontSize: 11,
                        fontWeight: 700,
                      }}
                    >
                      Success
                    </div>
                  </div>
                </div>

                {/* 1. Aadhaar Card */}
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
                          color: colors.uploadedDesc,
                          marginTop: 4,
                        }}
                      >
                        aadhaar_card.pdf · 1.2 MB · Uploaded just now
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
                    <div style={{ width: 80 }}>
                      <Ux4gButton
                        text="View"
                        onPress={() => {}}
                        variant="outline"
                        size="small"
                        width={80}
                        height={48}
                        contentColor={colors.primaryColor}
                        borderColor={isDark ? UX4GColors.primary600 : UX4GColors.primary300}
                      />
                    </div>
                    <div style={{ width: 110 }}>
                      <Ux4gButton
                        text="Re-upload"
                        onPress={() => {}}
                        variant="outline"
                        size="small"
                        width={110}
                        height={48}
                        contentColor={colors.primaryColor}
                        borderColor={isDark ? UX4GColors.primary600 : UX4GColors.primary300}
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Proof of Income */}
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
                        Proof of Income
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          color: colors.uploadedDesc,
                          marginTop: 4,
                        }}
                      >
                        income_proof.pdf · 1.8 MB · Uploaded just now
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
                    <div style={{ width: 80 }}>
                      <Ux4gButton
                        text="View"
                        onPress={() => {}}
                        variant="outline"
                        size="small"
                        width={80}
                        height={48}
                        contentColor={colors.primaryColor}
                        borderColor={isDark ? UX4GColors.primary600 : UX4GColors.primary300}
                      />
                    </div>
                    <div style={{ width: 110 }}>
                      <Ux4gButton
                        text="Re-upload"
                        onPress={() => {}}
                        variant="outline"
                        size="small"
                        width={110}
                        height={48}
                        contentColor={colors.primaryColor}
                        borderColor={isDark ? UX4GColors.primary600 : UX4GColors.primary300}
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Residence proof */}
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
                        Residence proof
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          color: colors.uploadedDesc,
                          marginTop: 4,
                        }}
                      >
                        electricity_bill.jpg · 920 KB · Uploaded just now
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
                    <div style={{ width: 80 }}>
                      <Ux4gButton
                        text="View"
                        onPress={() => {}}
                        variant="outline"
                        size="small"
                        width={80}
                        height={48}
                        contentColor={colors.primaryColor}
                        borderColor={isDark ? UX4GColors.primary600 : UX4GColors.primary300}
                      />
                    </div>
                    <div style={{ width: 110 }}>
                      <Ux4gButton
                        text="Re-upload"
                        onPress={() => {}}
                        variant="outline"
                        size="small"
                        width={110}
                        height={48}
                        contentColor={colors.primaryColor}
                        borderColor={isDark ? UX4GColors.primary600 : UX4GColors.primary300}
                      />
                    </div>
                  </div>
                </div>

                {/* 4. Caste certificate */}
                <div
                  style={{
                    padding: 16,
                    borderRadius: 12,
                    backgroundColor: colors.uploadedBg,
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: 32,
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
                        Caste certificate
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          color: colors.uploadedDesc,
                          marginTop: 4,
                        }}
                      >
                        caste_cert.pdf · 1.1 MB · Uploaded just now
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
                    <div style={{ width: 80 }}>
                      <Ux4gButton
                        text="View"
                        onPress={() => {}}
                        variant="outline"
                        size="small"
                        width={80}
                        height={48}
                        contentColor={colors.primaryColor}
                        borderColor={isDark ? UX4GColors.primary600 : UX4GColors.primary300}
                      />
                    </div>
                    <div style={{ width: 110 }}>
                      <Ux4gButton
                        text="Re-upload"
                        onPress={() => {}}
                        variant="outline"
                        size="small"
                        width={110}
                        height={48}
                        contentColor={colors.primaryColor}
                        borderColor={isDark ? UX4GColors.primary600 : UX4GColors.primary300}
                      />
                    </div>
                  </div>
                </div>

                {/* Interactive Checkbox Disclaimer */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                  <Ux4gCheckbox
                    value={isSelfAttested}
                    onChanged={(val) => setIsSelfAttested(val === true)}
                  />
                  <div
                    style={{
                      fontSize: 13,
                      color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral600,
                      lineHeight: 1.4,
                      cursor: 'pointer',
                    }}
                    onClick={() => setIsSelfAttested(!isSelfAttested)}
                  >
                    All documents must be self-attested. AI flags quality issues; officers make the final call.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Fixed Bottom Action Buttons */}
        <div
          style={{
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            backgroundColor: colors.screenBg,
            flexShrink: 0,
          }}
        >
          <Ux4gButton
            text="Proceed to review"
            onPress={() => {}}
            size="medium"
            width="100%"
            height={48}
            backgroundColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
            contentColor={isDark ? UX4GColors.neutral900 : UX4GColors.neutral50}
          />

          <Ux4gButton
            text="Back"
            onPress={() => {}}
            variant="outline"
            size="medium"
            width="100%"
            height={48}
            borderColor={isDark ? UX4GColors.primary600 : UX4GColors.primary300}
            contentColor={colors.primaryColor}
          />
        </div>

        {/* Powered by Footer */}
        <div
          style={{
            padding: '0 0 24px 0',
            textAlign: 'center',
            backgroundColor: colors.screenBg,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 500,
              color: colors.footerText,
            }}
          >
            Powered by -
          </div>
          <img
            src="/Digital_India_logo.svg"
            alt="Digital India"
            style={{
              height: 24,
              marginTop: 6,
              filter: isDark ? 'brightness(0) invert(1)' : 'none',
            }}
          />
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

export default DocumentUploadSuccessDoc;
