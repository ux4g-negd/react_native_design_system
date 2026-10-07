import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gJourneyTimeline } from '../../../src/components/journey-timeline/JourneyTimeline';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface ApplicationQueuedDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

const JOURNEY_STEPS_PREVIEW = [
  {
    state: 'completed' as const,
    date: '02 Sep 2026',
    title: 'Application Saved Locally',
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
    date: '03 Sep 2026',
    title: 'Document Verification',
    status: {
      text: '',
      badgeText: 'Upcoming',
      badgeColor: '#F3F4F6',
      badgeTextColor: '#4B5563',
      badgePosition: 'topRight' as const,
    },
  },
  {
    state: 'upcoming' as const,
    date: '06 Sep 2026',
    title: 'Field Enquiry',
    status: {
      text: '',
      badgeText: 'Upcoming',
      badgeColor: '#F3F4F6',
      badgeTextColor: '#4B5563',
      badgePosition: 'topRight' as const,
    },
  },
  {
    state: 'upcoming' as const,
    date: '10 Sep 2026',
    title: 'Certificate Issued',
    status: {
      text: '',
      badgeText: 'Upcoming',
      badgeColor: '#F3F4F6',
      badgeTextColor: '#4B5563',
      badgePosition: 'topRight' as const,
    },
  },
];

export const ApplicationQueuedDoc: React.FC<ApplicationQueuedDocProps> = ({ isDark }) => {
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
      iconBg: isDark ? 'rgba(67, 44, 187, 0.2)' : '#EDE9FE',
      iconColor: isDark ? UX4GColors.primary300 : '#432CBB',
      timelineCardBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      timelineCardBorder: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      stepBoxBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      stepBoxBorder: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      savedTagBg: isDark ? 'rgba(22, 163, 74, 0.2)' : '#DDF8D8',
      savedTagText: isDark ? UX4GColors.green400 : '#15803D',
      upcomingTagBg: isDark ? UX4GColors.neutral800 : '#F3F4F6',
      upcomingTagText: isDark ? UX4GColors.neutral400 : '#4B5563',
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
      return `// Application Queued Screen Pattern (Card Style Layout)

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
    title: 'Application Saved Locally',
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
    date: '03 Sep 2026',
    title: 'Document Verification',
    status: {
      text: '',
      badgeText: 'Upcoming',
      badgeColor: '#F3F4F6',
      badgeTextColor: '#4B5563',
      badgePosition: 'topRight' as const,
    },
  },
  {
    state: 'upcoming' as const,
    date: '06 Sep 2026',
    title: 'Field Enquiry',
    status: {
      text: '',
      badgeText: 'Upcoming',
      badgeColor: '#F3F4F6',
      badgeTextColor: '#4B5563',
      badgePosition: 'topRight' as const,
    },
  },
  {
    state: 'upcoming' as const,
    date: '10 Sep 2026',
    title: 'Certificate Issued',
    status: {
      text: '',
      badgeText: 'Upcoming',
      badgeColor: '#F3F4F6',
      badgeTextColor: '#4B5563',
      badgePosition: 'topRight' as const,
    },
  },
];

export const ApplicationQueuedCardScreen = ({
  isDark = ${isDark},
  onReturn = () => {},
  onSubmitNow = () => {},
  onSaveDraft = () => {},
}: {
  isDark?: boolean;
  onReturn?: () => void;
  onSubmitNow?: () => void;
  onSaveDraft?: () => void;
}) => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = () => {
    setShowToast(true);
    onSubmitNow();
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
                  onPress={() => {}}
                >
                  <Text style={[styles.menuIconText, { color: isDark ? UX4GColors.primary300 : '#432CBB' }]}>
                    ☰
                  </Text>
                </TouchableOpacity>
              ),
            },
          ]}
        />
        <Ux4gDivider color="#E5E7EB" thickness={1} />
      </View>

      {/* Main Content inside Ux4gCard */}
      <ScrollView
        contentContainerStyle={styles.cardScrollPadding}
        showsVerticalScrollIndicator={false}
      >
        <Ux4gCard
          cornerRadius={16}
          backgroundColor={isDark ? UX4GColors.neutral800 : '#FFFFFF'}
          borderColor={isDark ? UX4GColors.neutral700 : 'rgba(0,0,0,0.04)'}
          borderWidth={1}
          elevation={2}
        >
          <View style={styles.cardInner}>
            {/* Back link */}
            <TouchableOpacity
              onPress={onReturn}
              style={styles.backLinkRow}
              activeOpacity={0.7}
            >
              <Text style={[styles.backArrowText, { color: isDark ? UX4GColors.primary300 : '#432CBB' }]}>
                ←
              </Text>
              <Text style={[styles.backLinkText, { color: isDark ? UX4GColors.primary300 : '#432CBB' }]}>
                Return to services
              </Text>
            </TouchableOpacity>

            {/* Queued Hourglass icon */}
            <View style={styles.centerContainer}>
              <View
                style={[
                  styles.hourglassCircle,
                  { backgroundColor: isDark ? 'rgba(67, 44, 187, 0.2)' : '#EDE9FE' },
                ]}
              >
                <Text style={[styles.hourglassIconText, { color: isDark ? UX4GColors.primary300 : '#432CBB' }]}>
                  ⏳
                </Text>
              </View>
            </View>

            {/* Heading Title */}
            <Text
              style={[
                styles.headingTitle,
                { color: isDark ? UX4GColors.neutral0 : '#111827' },
              ]}
            >
              Application Queued
            </Text>

            {/* Subtitle */}
            <Text
              style={[
                styles.subtitleText,
                { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
              ]}
            >
              {"We'll submit your application automatically\\nwhen your connection is restored. Your data is\\nsaved."}
            </Text>

            {/* What happens next */}
            <Text style={[styles.sectionHeading, { color: isDark ? UX4GColors.neutral0 : '#111827' }]}>
              What happens next
            </Text>

            {/* Timeline Progress Card */}
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
                  description: "Your application is queued and will be submitted once you're back online",
                }}
                cardColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
                cardBorderColor={isDark ? UX4GColors.neutral700 : '#E5E7EB'}
                cardBorderRadius={10}
                steps={JOURNEY_STEPS}
              />
            </View>

            {/* Action Buttons inside Card */}
            <View style={styles.buttonGroup}>
              <Ux4gButton
                text="Try submitting now"
                onPress={handleSubmit}
                size="large"
                height={46}
                width="100%"
                backgroundColor={isDark ? UX4GColors.primary300 : '#432CBB'}
                contentColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
              />
              <View style={{ height: 10 }} />
              <Ux4gButton
                text="Save draft and exit"
                onPress={onSaveDraft}
                variant="outline"
                size="large"
                height={46}
                width="100%"
                contentColor={isDark ? UX4GColors.primary300 : '#432CBB'}
                borderColor={isDark ? UX4GColors.primary300 : '#C7D2FE'}
              />
            </View>
          </View>
        </Ux4gCard>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text style={[styles.poweredByText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            Powered by -
          </Text>
          <Image
            source={require('./assets/digital_india_logo.png')}
            style={[styles.digitalIndiaLogo, isDark && { tintColor: '#FFFFFF' }]}
            resizeMode="contain"
          />
        </View>
      </ScrollView>

      {/* Toast Notification */}
      {showToast && (
        <View
          style={[
            styles.toastWrapper,
            {
              backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
              borderColor: isDark ? UX4GColors.neutral700 : '#E5E7EB',
            },
          ]}
        >
          <Text style={styles.warningIcon}>⚠️</Text>
          <View style={styles.toastContent}>
            <Text style={[styles.toastTitle, { color: isDark ? UX4GColors.neutral0 : '#111827' }]}>
              Application queued
            </Text>
            <Text style={[styles.toastMessage, { color: isDark ? UX4GColors.neutral400 : '#4B5563' }]}>
              Will submit when connection is restored.
            </Text>
            <TouchableOpacity onPress={() => setShowToast(false)} style={{ marginTop: 6 }}>
              <Text style={[styles.understoodText, { color: isDark ? UX4GColors.primary300 : '#432CBB' }]}>
                Understood
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => setShowToast(false)}>
            <Text style={[styles.closeIconText, { color: isDark ? UX4GColors.neutral400 : '#6B7280' }]}>✕</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  emblemIcon: { height: 36, width: 28 },
  verticalDivider: { height: 28, width: 1, marginHorizontal: 8 },
  unionIcon: { height: 30, width: 40 },
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIconText: { fontSize: 18, fontWeight: '700' },
  cardScrollPadding: { paddingHorizontal: 16, paddingVertical: 20 },
  cardInner: { padding: 18 },
  backLinkRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, gap: 6 },
  backArrowText: { fontSize: 16, fontWeight: '700' },
  backLinkText: { fontSize: 14, fontWeight: '500' },
  centerContainer: { alignItems: 'center', marginBottom: 16 },
  hourglassCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hourglassIconText: { fontSize: 26 },
  headingTitle: {
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 19,
    marginBottom: 20,
  },
  sectionHeading: { fontSize: 14, fontWeight: '700', marginBottom: 10 },
  timelineCard: {
    padding: 14,
    borderWidth: 1,
    borderRadius: 14,
    marginBottom: 20,
  },
  buttonGroup: { width: '100%' },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 20,
    paddingBottom: 16,
  },
  poweredByText: { fontSize: 11, fontWeight: '500' },
  digitalIndiaLogo: { height: 22, width: 80 },
  toastWrapper: {
    position: 'absolute',
    top: 20,
    left: 16,
    right: 16,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    elevation: 6,
  },
  warningIcon: { fontSize: 20 },
  toastContent: { flex: 1 },
  toastTitle: { fontSize: 14, fontWeight: '700' },
  toastMessage: { fontSize: 12, marginTop: 2 },
  understoodText: { fontSize: 13, fontWeight: '600' },
  closeIconText: { fontSize: 14, fontWeight: '700' },
});`;
    }

    return `// Application Queued Screen Pattern (Default Layout)

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
    title: 'Application Saved Locally',
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
    date: '03 Sep 2026',
    title: 'Document Verification',
    status: {
      text: '',
      badgeText: 'Upcoming',
      badgeColor: '#F3F4F6',
      badgeTextColor: '#4B5563',
      badgePosition: 'topRight' as const,
    },
  },
  {
    state: 'upcoming' as const,
    date: '06 Sep 2026',
    title: 'Field Enquiry',
    status: {
      text: '',
      badgeText: 'Upcoming',
      badgeColor: '#F3F4F6',
      badgeTextColor: '#4B5563',
      badgePosition: 'topRight' as const,
    },
  },
  {
    state: 'upcoming' as const,
    date: '10 Sep 2026',
    title: 'Certificate Issued',
    status: {
      text: '',
      badgeText: 'Upcoming',
      badgeColor: '#F3F4F6',
      badgeTextColor: '#4B5563',
      badgePosition: 'topRight' as const,
    },
  },
];

export const ApplicationQueuedScreen = ({
  isDark = ${isDark},
  onReturn = () => {},
  onSubmitNow = () => {},
  onSaveDraft = () => {},
}: {
  isDark?: boolean;
  onReturn?: () => void;
  onSubmitNow?: () => void;
  onSaveDraft?: () => void;
}) => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = () => {
    setShowToast(true);
    onSubmitNow();
  };

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' },
      ]}
    >
      {/* Header */}
      <Ux4gAppHeader
        variant="light"
        showBackButton={false}
        backgroundColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
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
                onPress={() => {}}
              >
                <Text style={[styles.menuIconText, { color: isDark ? UX4GColors.primary300 : '#432CBB' }]}>
                  ☰
                </Text>
              </TouchableOpacity>
            ),
          },
        ]}
      />
      <Ux4gDivider color="#E5E7EB" thickness={1} />

      {/* Main Content Area */}
      <ScrollView
        contentContainerStyle={styles.scrollPadding}
        showsVerticalScrollIndicator={false}
      >
        {/* Back Link */}
        <TouchableOpacity
          onPress={onReturn}
          style={styles.backLinkRow}
          activeOpacity={0.7}
        >
          <Text style={[styles.backArrowText, { color: isDark ? UX4GColors.primary300 : '#432CBB' }]}>
            ←
          </Text>
          <Text style={[styles.backLinkText, { color: isDark ? UX4GColors.primary300 : '#432CBB' }]}>
            Return to services
          </Text>
        </TouchableOpacity>

        {/* Queued Hourglass icon */}
        <View style={styles.centerContainer}>
          <View
            style={[
              styles.hourglassCircle,
              { backgroundColor: isDark ? 'rgba(67, 44, 187, 0.2)' : '#EDE9FE' },
            ]}
          >
            <Text style={[styles.hourglassIconText, { color: isDark ? UX4GColors.primary300 : '#432CBB' }]}>
              ⏳
            </Text>
          </View>
        </View>

        {/* Heading Title */}
        <Text
          style={[
            styles.headingTitle,
            { color: isDark ? UX4GColors.neutral0 : '#111827' },
          ]}
        >
          Application Queued
        </Text>

        {/* Subtitle */}
        <Text
          style={[
            styles.subtitleText,
            { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
          ]}
        >
          {"We'll submit your application automatically\\nwhen your connection is restored. Your data is\\nsaved."}
        </Text>

        {/* What happens next */}
        <Text style={[styles.sectionHeading, { color: isDark ? UX4GColors.neutral0 : '#111827' }]}>
          What happens next
        </Text>

        {/* Timeline Progress Card */}
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
              description: "Your application is queued and will be submitted once you're back online",
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
            text="Try submitting now"
            onPress={handleSubmit}
            size="large"
            height={46}
            width="100%"
            backgroundColor={isDark ? UX4GColors.primary300 : '#432CBB'}
            contentColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
          />
          <View style={{ height: 10 }} />
          <Ux4gButton
            text="Save draft and exit"
            onPress={onSaveDraft}
            variant="outline"
            size="large"
            height={46}
            width="100%"
            contentColor={isDark ? UX4GColors.primary300 : '#432CBB'}
            borderColor={isDark ? UX4GColors.primary300 : '#C7D2FE'}
          />
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text style={[styles.poweredByText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            Powered by -
          </Text>
          <Image
            source={require('./assets/digital_india_logo.png')}
            style={[styles.digitalIndiaLogo, isDark && { tintColor: '#FFFFFF' }]}
            resizeMode="contain"
          />
        </View>
      </ScrollView>

      {/* Toast Notification */}
      {showToast && (
        <View
          style={[
            styles.toastWrapper,
            {
              backgroundColor: isDark ? UX4GColors.neutral800 : '#FFFFFF',
              borderColor: isDark ? UX4GColors.neutral700 : '#E5E7EB',
            },
          ]}
        >
          <Text style={styles.warningIcon}>⚠️</Text>
          <View style={styles.toastContent}>
            <Text style={[styles.toastTitle, { color: isDark ? UX4GColors.neutral0 : '#111827' }]}>
              Application queued
            </Text>
            <Text style={[styles.toastMessage, { color: isDark ? UX4GColors.neutral400 : '#4B5563' }]}>
              Will submit when connection is restored.
            </Text>
            <TouchableOpacity onPress={() => setShowToast(false)} style={{ marginTop: 6 }}>
              <Text style={[styles.understoodText, { color: isDark ? UX4GColors.primary300 : '#432CBB' }]}>
                Understood
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => setShowToast(false)}>
            <Text style={[styles.closeIconText, { color: isDark ? UX4GColors.neutral400 : '#6B7280' }]}>✕</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  emblemIcon: { height: 36, width: 28 },
  verticalDivider: { height: 28, width: 1, marginHorizontal: 8 },
  unionIcon: { height: 30, width: 40 },
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIconText: { fontSize: 18, fontWeight: '700' },
  scrollPadding: { paddingHorizontal: 18, paddingVertical: 20 },
  backLinkRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, gap: 6 },
  backArrowText: { fontSize: 16, fontWeight: '700' },
  backLinkText: { fontSize: 14, fontWeight: '500' },
  centerContainer: { alignItems: 'center', marginBottom: 16 },
  hourglassCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hourglassIconText: { fontSize: 26 },
  headingTitle: {
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 19,
    marginBottom: 20,
  },
  sectionHeading: { fontSize: 14, fontWeight: '700', marginBottom: 10 },
  timelineCard: {
    padding: 14,
    borderWidth: 1,
    borderRadius: 14,
    marginBottom: 20,
  },
  buttonGroup: { width: '100%' },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 24,
    paddingBottom: 16,
  },
  poweredByText: { fontSize: 11, fontWeight: '500' },
  digitalIndiaLogo: { height: 22, width: 80 },
  toastWrapper: {
    position: 'absolute',
    top: 20,
    left: 16,
    right: 16,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    elevation: 6,
  },
  warningIcon: { fontSize: 20 },
  toastContent: { flex: 1 },
  toastTitle: { fontSize: 14, fontWeight: '700' },
  toastMessage: { fontSize: 12, marginTop: 2 },
  understoodText: { fontSize: 13, fontWeight: '600' },
  closeIconText: { fontSize: 14, fontWeight: '700' },
});`;
  }, [isDark, variant]);

  // Content body used in both Default and Card styles
  const renderContentBody = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Back Link */}
        <div
          onClick={() => {}}
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            marginBottom: 20,
            gap: 6,
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: 18,
              color: colors.linkPrimary,
              fontWeight: 600,
            }}
          >
            arrow_back
          </span>
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: colors.linkPrimary,
            }}
          >
            Return to services
          </span>
        </div>

        {/* Queued Hourglass Icon */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              backgroundColor: colors.iconBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: 28,
                color: colors.iconColor,
                fontVariationSettings: "'FILL' 1",
              }}
            >
              hourglass_bottom
            </span>
          </div>
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: colors.titleColor,
            textAlign: 'center',
            lineHeight: 1.25,
            margin: '0 0 8px 0',
            letterSpacing: '-0.01em',
          }}
        >
          Application Queued
        </h2>

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
          We'll submit your application automatically when your connection is restored. Your data is saved.
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
              description: "Your application is queued and will be submitted once you're back online",
            }}
            cardColor={colors.stepBoxBg}
            cardBorderColor={colors.stepBoxBorder}
            cardBorderRadius={10}
            steps={JOURNEY_STEPS_PREVIEW}
          />
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {/* Button 1: Try submitting now */}
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
            Try submitting now
          </button>

          {/* Button 2: Save draft and exit */}
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
            Save draft and exit
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

        {/* Toast Notification overlay */}
        {showToast && (
          <div
            style={{
              position: 'absolute',
              top: 20,
              left: 16,
              right: 16,
              padding: 14,
              backgroundColor: colors.toastBg,
              borderRadius: 12,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              border: `1px solid ${isDark ? UX4GColors.neutral700 : '#E5E7EB'}`,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              zIndex: 20,
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: 20,
                color: '#F59E0B',
                fontVariationSettings: "'FILL' 1",
                flexShrink: 0,
                marginTop: 1,
              }}
            >
              warning
            </span>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: colors.titleColor,
                  lineHeight: 1.3,
                }}
              >
                Application queued
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: colors.subtleText,
                  marginTop: 2,
                  lineHeight: 1.3,
                }}
              >
                Will submit when connection is restored.
              </div>
              <button
                type="button"
                onClick={() => setShowToast(false)}
                style={{
                  marginTop: 6,
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  color: colors.linkPrimary,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Understood
              </button>
            </div>

            <button
              type="button"
              onClick={() => setShowToast(false)}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                color: colors.subtleText,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
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
          <h1 className="wb-title">Application Queued</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          An offline / connectivity-loss state pattern informing users their submitted application is saved locally and will auto-submit when connectivity is restored.
        </p>
      </div>

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
                <CodeBlock
                  code={codeString}
                  language="tsx"
                  filename={
                    variant === 'Card style'
                      ? 'ApplicationQueuedCardScreen.tsx'
                      : 'ApplicationQueuedScreen.tsx'
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

export default ApplicationQueuedDoc;
