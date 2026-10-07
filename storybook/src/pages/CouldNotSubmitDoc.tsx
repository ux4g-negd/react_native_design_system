import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gJourneyTimeline } from '../../../src/components/journey-timeline/JourneyTimeline';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface CouldNotSubmitDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

const JOURNEY_STEPS_PREVIEW = [
  {
    state: 'completed' as const,
    date: '02 Sep 2026',
    title: 'Draft Saved',
    status: {
      text: '',
      badgeText: 'Saved',
      badgeColor: '#DDF8D8',
      badgeTextColor: '#15803D',
      badgePosition: 'topRight' as const,
    },
  },
  {
    state: 'current' as const,
    date: '02 Sep 2026',
    title: 'Submission Failed',
    status: {
      text: '',
      badgeText: 'Failed',
      badgeColor: '#FEE2E2',
      badgeTextColor: '#DC2626',
      badgePosition: 'topRight' as const,
    },
  },
  {
    state: 'upcoming' as const,
    date: 'Pending',
    title: 'Document Verification',
    status: {
      text: '',
      badgeText: 'Blocked',
      badgeColor: '#F3F4F6',
      badgeTextColor: '#4B5563',
      badgePosition: 'topRight' as const,
    },
  },
  {
    state: 'upcoming' as const,
    date: 'Pending',
    title: 'Certificate Issued',
    status: {
      text: '',
      badgeText: 'Blocked',
      badgeColor: '#F3F4F6',
      badgeTextColor: '#4B5563',
      badgePosition: 'topRight' as const,
    },
  },
];

export const CouldNotSubmitDoc: React.FC<CouldNotSubmitDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');
  const [showToast, setShowToast] = useState(false);

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
      linkPrimary: isDark ? UX4GColors.primary300 : '#432CBB',
      errorIconBg: isDark ? 'rgba(220, 38, 38, 0.2)' : '#FEE2E2',
      errorIconColor: isDark ? '#EF4444' : '#DC2626',
      timelineCardBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      timelineCardBorder: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      stepBoxBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      stepBoxBorder: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      btn1Bg: isDark ? UX4GColors.primary300 : '#432CBB',
      btn1Text: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      btn2Border: isDark ? UX4GColors.primary300 : '#C7D2FE',
      btn2Text: isDark ? UX4GColors.primary300 : '#432CBB',
      footerText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      toastBg: isDark ? UX4GColors.neutral800 : '#FFFFFF',
    };
  }, [isDark, variant]);

  // Clean React Native TSX code snippet
  const codeString = useMemo(() => {
    const isCard = variant === 'Card style';
    if (isCard) {
      return `// Could Not Submit Screen Pattern (Card Style Layout)

import React, { useState } from 'react';
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
  Ux4gJourneyTimeline,
  UX4GColors,
} from 'ux4g-react-native-components';

const JOURNEY_STEPS = [
  {
    state: 'completed' as const,
    date: '02 Sep 2026',
    title: 'Draft Saved',
    status: {
      text: '',
      badgeText: 'Saved',
      badgeColor: '#DDF8D8',
      badgeTextColor: '#15803D',
      badgePosition: 'topRight' as const,
    },
  },
  {
    state: 'current' as const,
    date: '02 Sep 2026',
    title: 'Submission Failed',
    status: {
      text: '',
      badgeText: 'Failed',
      badgeColor: '#FEE2E2',
      badgeTextColor: '#DC2626',
      badgePosition: 'topRight' as const,
    },
  },
  {
    state: 'upcoming' as const,
    date: 'Pending',
    title: 'Document Verification',
    status: {
      text: '',
      badgeText: 'Blocked',
      badgeColor: '#F3F4F6',
      badgeTextColor: '#4B5563',
      badgePosition: 'topRight' as const,
    },
  },
  {
    state: 'upcoming' as const,
    date: 'Pending',
    title: 'Certificate Issued',
    status: {
      text: '',
      badgeText: 'Blocked',
      badgeColor: '#F3F4F6',
      badgeTextColor: '#4B5563',
      badgePosition: 'topRight' as const,
    },
  },
];

export const CouldNotSubmitCardScreen = ({
  isDark = ${isDark},
  onRetry = () => {},
  onSaveDraft = () => {},
  onContactSupport = () => {},
}: {
  isDark?: boolean;
  onRetry?: () => void;
  onSaveDraft?: () => void;
  onContactSupport?: () => void;
}) => {
  const [showToast, setShowToast] = useState(false);

  const handleRetry = () => {
    setShowToast(true);
    onRetry();
  };

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.primary900 : '#ECE8FF' },
      ]}
    >
      {/* Header Container */}
      <View style={{ backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' }}>
        <Ux4gAppHeader
          variant="light"
          showBackButton={false}
          leadingWidgets={[
            <Image
              key="emblem"
              source={require('./assets/national_emblem.png')}
              style={[
                styles.emblemIcon,
                isDark && { tintColor: '#FFFFFF' },
              ]}
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
              style={[
                styles.unionIcon,
                { tintColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600 },
              ]}
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

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Card Style Content Box */}
        <Ux4gCard
          backgroundColor={isDark ? UX4GColors.neutral800 : '#FFFFFF'}
          cornerRadius={16}
          borderWidth={1}
          borderColor={isDark ? UX4GColors.neutral700 : 'rgba(0,0,0,0.04)'}
          style={styles.cardWrapper}
        >
          {/* Centered Error Icon */}
          <View style={styles.iconContainer}>
            <View
              style={[
                styles.errorCircle,
                {
                  backgroundColor: isDark
                    ? 'rgba(220, 38, 38, 0.2)'
                    : '#FEE2E2',
                },
              ]}
            >
              <Text
                style={[
                  styles.exclamationIcon,
                  { color: isDark ? '#EF4444' : '#DC2626' },
                ]}
              >
                !
              </Text>
            </View>
          </View>

          {/* Title */}
          <Text
            style={[
              styles.screenTitle,
              { color: isDark ? UX4GColors.neutral0 : '#111827' },
            ]}
          >
            Could Not Submit{'\n'}Application
          </Text>

          {/* Subtitle */}
          <Text
            style={[
              styles.screenSubtitle,
              { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
            ]}
          >
            We could not submit your application due to a network or server error. Your data is saved — try again.
          </Text>

          {/* Section Heading */}
          <Text
            style={[
              styles.sectionHeading,
              { color: isDark ? UX4GColors.neutral0 : '#111827' },
            ]}
          >
            What happens next
          </Text>

          {/* Journey Timeline Card */}
          <View
            style={[
              styles.timelineCard,
              {
                backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
                borderColor: isDark ? UX4GColors.neutral700 : '#E5E7EB',
              },
            ]}
          >
            <Ux4gJourneyTimeline
              currentStep={1}
              activeColor={isDark ? UX4GColors.primary300 : '#432CBB'}
              header={{
                title: 'Application Progress',
                description:
                  'Submission failed due to a network error. Your data is saved — retry when ready',
              }}
              cardColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
              cardBorderColor={isDark ? UX4GColors.neutral700 : '#E5E7EB'}
              cardBorderRadius={10}
              steps={JOURNEY_STEPS}
            />
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonGroup}>
            <Ux4gButton
              text="Retry submission"
              onPress={handleRetry}
              size="large"
              width="100%"
              height={46}
              backgroundColor={isDark ? UX4GColors.primary300 : '#432CBB'}
              contentColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
            />

            <Ux4gButton
              text="Save draft"
              onPress={onSaveDraft}
              variant="outline"
              size="large"
              width="100%"
              height={46}
              borderColor={isDark ? UX4GColors.primary300 : '#C7D2FE'}
              contentColor={isDark ? UX4GColors.primary300 : '#432CBB'}
            />

            <TouchableOpacity
              onPress={onContactSupport}
              style={styles.contactSupportBtn}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.contactSupportText,
                  { color: isDark ? UX4GColors.neutral0 : '#111827' },
                ]}
              >
                Contact support
              </Text>
            </TouchableOpacity>
          </View>
        </Ux4gCard>

        {/* Footer */}
        <View style={styles.footer}>
          <Text
            style={[
              styles.poweredByText,
              { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 },
            ]}
          >
            Powered by -
          </Text>
          <Image
            source={require('./assets/digital_india_logo.png')}
            style={[
              styles.digitalIndiaLogo,
              isDark && { tintColor: '#FFFFFF' },
            ]}
            resizeMode="contain"
          />
        </View>
      </ScrollView>

      {/* Floating Error Dialog Toast */}
      {showToast && (
        <View
          style={[
            styles.toastCard,
            {
              backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
              borderColor: isDark ? UX4GColors.neutral700 : '#E5E7EB',
            },
          ]}
        >
          <View style={styles.toastLeft}>
            <View style={styles.toastErrorIconWrapper}>
              <Text style={styles.toastErrorIcon}>!</Text>
            </View>
            <View style={styles.toastTextContainer}>
              <Text
                style={[
                  styles.toastTitle,
                  { color: isDark ? UX4GColors.neutral0 : '#111827' },
                ]}
              >
                Could not submit
              </Text>
              <Text
                style={[
                  styles.toastSubtitle,
                  { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
                ]}
              >
                Network or server issue
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => setShowToast(false)}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Text
              style={[
                styles.closeIcon,
                { color: isDark ? UX4GColors.neutral400 : '#6B7280' },
              ]}
            >
              ✕
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  emblemIcon: {
    height: 36,
    width: 36,
  },
  verticalDivider: {
    width: 1,
    height: 32,
    marginHorizontal: 8,
  },
  unionIcon: {
    height: 32,
    width: 32,
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
    fontWeight: 'bold',
  },
  toastCard: {
    position: 'absolute',
    top: 70,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    zIndex: 100,
  },
  toastLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  toastErrorIconWrapper: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#DC2626',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toastErrorIcon: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 16,
  },
  toastTextContainer: {
    flex: 1,
  },
  toastTitle: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
  },
  toastSubtitle: {
    fontSize: 12,
    marginTop: 2,
    lineHeight: 16,
  },
  closeIcon: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 4,
  },
  cardWrapper: {
    padding: 20,
    marginBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  errorCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exclamationIcon: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 10,
  },
  screenSubtitle: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 22,
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  timelineCard: {
    padding: 14,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 20,
  },
  buttonGroup: {
    gap: 10,
  },
  contactSupportBtn: {
    alignItems: 'center',
    paddingVertical: 6,
    marginTop: 4,
  },
  contactSupportText: {
    fontSize: 14,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 12,
  },
  poweredByText: {
    fontSize: 11,
    fontWeight: '500',
  },
  digitalIndiaLogo: {
    height: 22,
    width: 80,
  },
});`;
    }

    // Default Layout Snippet
    return `// Could Not Submit Screen Pattern (Default Layout)

import React, { useState } from 'react';
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
  Ux4gJourneyTimeline,
  UX4GColors,
} from 'ux4g-react-native-components';

const JOURNEY_STEPS = [
  {
    state: 'completed' as const,
    date: '02 Sep 2026',
    title: 'Draft Saved',
    status: {
      text: '',
      badgeText: 'Saved',
      badgeColor: '#DDF8D8',
      badgeTextColor: '#15803D',
      badgePosition: 'topRight' as const,
    },
  },
  {
    state: 'current' as const,
    date: '02 Sep 2026',
    title: 'Submission Failed',
    status: {
      text: '',
      badgeText: 'Failed',
      badgeColor: '#FEE2E2',
      badgeTextColor: '#DC2626',
      badgePosition: 'topRight' as const,
    },
  },
  {
    state: 'upcoming' as const,
    date: 'Pending',
    title: 'Document Verification',
    status: {
      text: '',
      badgeText: 'Blocked',
      badgeColor: '#F3F4F6',
      badgeTextColor: '#4B5563',
      badgePosition: 'topRight' as const,
    },
  },
  {
    state: 'upcoming' as const,
    date: 'Pending',
    title: 'Certificate Issued',
    status: {
      text: '',
      badgeText: 'Blocked',
      badgeColor: '#F3F4F6',
      badgeTextColor: '#4B5563',
      badgePosition: 'topRight' as const,
    },
  },
];

export const CouldNotSubmitDefaultScreen = ({
  isDark = ${isDark},
  onReturn = () => {},
  onRetry = () => {},
  onSaveDraft = () => {},
  onContactSupport = () => {},
}: {
  isDark?: boolean;
  onReturn?: () => void;
  onRetry?: () => void;
  onSaveDraft?: () => void;
  onContactSupport?: () => void;
}) => {
  const [showToast, setShowToast] = useState(false);

  const handleRetry = () => {
    setShowToast(true);
    onRetry();
  };

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' },
      ]}
    >
      {/* Top App Header */}
      <View style={{ backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' }}>
        <Ux4gAppHeader
          variant="light"
          showBackButton={false}
          leadingWidgets={[
            <Image
              key="emblem"
              source={require('./assets/national_emblem.png')}
              style={[
                styles.emblemIcon,
                isDark && { tintColor: '#FFFFFF' },
              ]}
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
              style={[
                styles.unionIcon,
                { tintColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600 },
              ]}
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

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Return to services back link */}
        <TouchableOpacity
          onPress={onReturn}
          style={styles.returnLink}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.returnArrow,
              { color: isDark ? UX4GColors.primary300 : '#432CBB' },
            ]}
          >
            ←
          </Text>
          <Text
            style={[
              styles.returnText,
              { color: isDark ? UX4GColors.primary300 : '#432CBB' },
            ]}
          >
            Return to services
          </Text>
        </TouchableOpacity>

        {/* Centered Error Icon */}
        <View style={styles.iconContainer}>
          <View
            style={[
              styles.errorCircle,
              {
                backgroundColor: isDark
                  ? 'rgba(220, 38, 38, 0.2)'
                  : '#FEE2E2',
              },
            ]}
          >
            <Text
              style={[
                styles.exclamationIcon,
                { color: isDark ? '#EF4444' : '#DC2626' },
              ]}
            >
              !
            </Text>
          </View>
        </View>

        {/* Title */}
        <Text
          style={[
            styles.screenTitle,
            { color: isDark ? UX4GColors.neutral0 : '#111827' },
          ]}
        >
          Could Not Submit{'\n'}Application
        </Text>

        {/* Subtitle */}
        <Text
          style={[
            styles.screenSubtitle,
            { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
          ]}
        >
          We could not submit your application due to a network or server error. Your data is saved — try again.
        </Text>

        {/* Section Heading */}
        <Text
          style={[
            styles.sectionHeading,
            { color: isDark ? UX4GColors.neutral0 : '#111827' },
          ]}
        >
          What happens next
        </Text>

        {/* Journey Timeline Card */}
        <View
          style={[
            styles.timelineCard,
            {
              backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
              borderColor: isDark ? UX4GColors.neutral700 : '#E5E7EB',
            },
          ]}
        >
          <Ux4gJourneyTimeline
            currentStep={1}
            activeColor={isDark ? UX4GColors.primary300 : '#432CBB'}
            header={{
              title: 'Application Progress',
              description:
                'Submission failed due to a network error. Your data is saved — retry when ready',
            }}
            cardColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
            cardBorderColor={isDark ? UX4GColors.neutral700 : '#E5E7EB'}
            cardBorderRadius={10}
            steps={JOURNEY_STEPS}
          />
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonGroup}>
          <Ux4gButton
            text="Retry submission"
            onPress={handleRetry}
            size="large"
            width="100%"
            height={46}
            backgroundColor={isDark ? UX4GColors.primary300 : '#432CBB'}
            contentColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
          />

          <Ux4gButton
            text="Save draft"
            onPress={onSaveDraft}
            variant="outline"
            size="large"
            width="100%"
            height={46}
            borderColor={isDark ? UX4GColors.primary300 : '#C7D2FE'}
            contentColor={isDark ? UX4GColors.primary300 : '#432CBB'}
          />

          <TouchableOpacity
            onPress={onContactSupport}
            style={styles.contactSupportBtn}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.contactSupportText,
                { color: isDark ? UX4GColors.neutral0 : '#111827' },
              ]}
            >
              Contact support
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text
            style={[
              styles.poweredByText,
              { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 },
            ]}
          >
            Powered by -
          </Text>
          <Image
            source={require('./assets/digital_india_logo.png')}
            style={[
              styles.digitalIndiaLogo,
              isDark && { tintColor: '#FFFFFF' },
            ]}
            resizeMode="contain"
          />
        </View>
      </ScrollView>

      {/* Floating Error Dialog Toast */}
      {showToast && (
        <View
          style={[
            styles.toastCard,
            {
              backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
              borderColor: isDark ? UX4GColors.neutral700 : '#E5E7EB',
            },
          ]}
        >
          <View style={styles.toastLeft}>
            <View style={styles.toastErrorIconWrapper}>
              <Text style={styles.toastErrorIcon}>!</Text>
            </View>
            <View style={styles.toastTextContainer}>
              <Text
                style={[
                  styles.toastTitle,
                  { color: isDark ? UX4GColors.neutral0 : '#111827' },
                ]}
              >
                Could not submit
              </Text>
              <Text
                style={[
                  styles.toastSubtitle,
                  { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
                ]}
              >
                Network or server issue
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => setShowToast(false)}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Text
              style={[
                styles.closeIcon,
                { color: isDark ? UX4GColors.neutral400 : '#6B7280' },
              ]}
            >
              ✕
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  emblemIcon: {
    height: 36,
    width: 36,
  },
  verticalDivider: {
    width: 1,
    height: 32,
    marginHorizontal: 8,
  },
  unionIcon: {
    height: 32,
    width: 32,
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
    fontWeight: 'bold',
  },
  returnLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 20,
  },
  returnArrow: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  returnText: {
    fontSize: 14,
    fontWeight: '600',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  errorCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exclamationIcon: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 10,
  },
  screenSubtitle: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 22,
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  timelineCard: {
    padding: 14,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 20,
  },
  buttonGroup: {
    gap: 10,
  },
  contactSupportBtn: {
    alignItems: 'center',
    paddingVertical: 6,
    marginTop: 4,
  },
  contactSupportText: {
    fontSize: 14,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 14,
  },
  poweredByText: {
    fontSize: 11,
    fontWeight: '500',
  },
  digitalIndiaLogo: {
    height: 22,
    width: 80,
  },
  toastCard: {
    position: 'absolute',
    top: 70,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    zIndex: 100,
  },
  toastLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  toastErrorIconWrapper: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#DC2626',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toastErrorIcon: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 16,
  },
  toastTextContainer: {
    flex: 1,
  },
  toastTitle: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
  },
  toastSubtitle: {
    fontSize: 12,
    marginTop: 2,
    lineHeight: 16,
  },
  closeIcon: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 4,
  },
});`;
  }, [isDark, variant]);

  // Content body used in both Default and Card styles
  const renderContentBody = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Back link for Default variant */}
        {variant === 'Default' && (
          <div
            onClick={() => {}}
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              marginBottom: 20,
              gap: 6,
              color: colors.linkPrimary,
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              arrow_back
            </span>
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Return to services
            </span>
          </div>
        )}

        {/* Error Icon Circle */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              backgroundColor: colors.errorIconBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: 30,
                color: colors.errorIconColor,
                fontVariationSettings: "'FILL' 1",
              }}
            >
              error
            </span>
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: colors.titleColor,
            textAlign: 'center',
            lineHeight: 1.25,
            marginBottom: 10,
            whiteSpace: 'pre-line',
          }}
        >
          {'Could Not Submit\nApplication'}
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 13,
            color: colors.subtleText,
            textAlign: 'center',
            lineHeight: 1.45,
            margin: '0 0 20px 0',
          }}
        >
          We could not submit your application due to a network or server error. Your data is saved — try again.
        </p>

        {/* What happens next */}
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: colors.titleColor,
            marginBottom: 10,
          }}
        >
          What happens next
        </div>

        {/* Application Progress Timeline Card */}
        <div
          style={{
            padding: '16px 14px',
            backgroundColor: colors.timelineCardBg,
            border: `1px solid ${colors.timelineCardBorder}`,
            borderRadius: 14,
            marginBottom: 18,
          }}
        >
          <Ux4gJourneyTimeline
            currentStep={1}
            activeColor={isDark ? UX4GColors.primary300 : '#432CBB'}
            header={{
              title: 'Application Progress',
              description: 'Submission failed due to a network error. Your data is saved — retry when ready',
            }}
            cardColor={colors.stepBoxBg}
            cardBorderColor={colors.stepBoxBorder}
            cardBorderRadius={10}
            steps={JOURNEY_STEPS_PREVIEW}
          />
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {/* Button 1: Retry submission */}
          <button
            type="button"
            onClick={() => setShowToast(true)}
            style={{
              width: '100%',
              height: 44,
              backgroundColor: colors.btn1Bg,
              color: colors.btn1Text,
              border: 'none',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.2s ease',
            }}
          >
            Retry submission
          </button>

          {/* Button 2: Save draft */}
          <button
            type="button"
            onClick={() => alert('Draft saved')}
            style={{
              width: '100%',
              height: 44,
              backgroundColor: 'transparent',
              color: colors.btn2Text,
              border: `1.5px solid ${colors.btn2Border}`,
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.2s ease',
            }}
          >
            Save draft
          </button>

          {/* Contact support text button */}
          <div
            onClick={() => alert('Support contacted')}
            style={{
              textAlign: 'center',
              fontSize: 14,
              fontWeight: 600,
              color: colors.titleColor,
              cursor: 'pointer',
              padding: '6px 0',
            }}
          >
            Contact support
          </div>
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
          maxHeight: 820,
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
        {/* Top UX4G AppHeader - Shown on both Default and Card style variants */}
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

        {/* Floating Error Dialog Toast Notification overlay */}
        {showToast && (
          <div
            style={{
              position: 'absolute',
              top: 72,
              left: 16,
              right: 16,
              padding: '12px 14px',
              backgroundColor: colors.toastBg,
              borderRadius: 12,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              border: `1px solid ${isDark ? UX4GColors.neutral700 : '#E5E7EB'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              zIndex: 50,
              animation: 'fadeIn 0.2s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  backgroundColor: colors.errorIconColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    color: '#FFFFFF',
                    fontSize: 13,
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  !
                </span>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: colors.titleColor,
                    lineHeight: 1.2,
                  }}
                >
                  Could not submit
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: colors.subtleText,
                    marginTop: 2,
                    lineHeight: 1.2,
                  }}
                >
                  Network or server issue
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowToast(false)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 4,
                color: colors.subtleText,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                close
              </span>
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Could Not Submit</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          An error screen shown when the application could not be submitted due to a network or server error, with options to retry, save draft, or contact support.
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

export default CouldNotSubmitDoc;
