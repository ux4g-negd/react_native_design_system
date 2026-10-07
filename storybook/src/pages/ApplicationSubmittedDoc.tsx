import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gJourneyTimeline } from '../../../src/components/journey-timeline/JourneyTimeline';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface ApplicationSubmittedDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

interface TimelineStep {
  date: string;
  tag: 'Completed' | 'Upcoming';
  title: string;
  isCompleted?: boolean;
}

const TIMELINE_STEPS: TimelineStep[] = [
  {
    date: '02 Sep 2026',
    tag: 'Completed',
    title: 'Application Submitted',
    isCompleted: true,
  },
  {
    date: '03 Sep 2026',
    tag: 'Upcoming',
    title: 'Document Verification',
    isCompleted: false,
  },
  {
    date: '06 Sep 2026',
    tag: 'Upcoming',
    title: 'Field Enquiry',
    isCompleted: false,
  },
  {
    date: '10 Sep 2026',
    tag: 'Upcoming',
    title: 'Certificate Issued',
    isCompleted: false,
  },
];

export const ApplicationSubmittedDoc: React.FC<ApplicationSubmittedDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');
  const [copied, setCopied] = useState(false);

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
      successIconBg: isDark ? 'rgba(22, 163, 74, 0.2)' : '#DCFCE7',
      successIconColor: isDark ? UX4GColors.green400 : '#16A34A',
      refCardBg: isDark ? 'rgba(67, 44, 187, 0.15)' : '#F5F3FF',
      refCardBorder: isDark ? UX4GColors.primary600 : '#C7D2FE',
      refLabel: isDark ? UX4GColors.neutral400 : '#6B7280',
      refValue: isDark ? UX4GColors.neutral0 : '#111827',
      copyIconColor: isDark ? UX4GColors.primary300 : '#432CBB',
      timelineCardBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      timelineCardBorder: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      stepBoxBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      stepBoxBorder: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      completedTagBg: isDark ? 'rgba(22, 163, 74, 0.2)' : '#DDF8D8',
      completedTagText: isDark ? UX4GColors.green400 : '#15803D',
      upcomingTagBg: isDark ? UX4GColors.neutral800 : '#F3F4F6',
      upcomingTagText: isDark ? UX4GColors.neutral400 : '#4B5563',
      notificationIconColor: isDark ? UX4GColors.primary300 : '#432CBB',
      notificationTextColor: isDark ? UX4GColors.neutral300 : '#4B5563',
      btn1Bg: isDark ? UX4GColors.primary300 : '#432CBB',
      btn1Text: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      btn2Border: isDark ? UX4GColors.primary300 : '#C7D2FE',
      btn2Text: isDark ? UX4GColors.primary300 : '#432CBB',
      btn3Bg: isDark ? 'rgba(67, 44, 187, 0.2)' : '#EDE9FE',
      btn3Text: isDark ? UX4GColors.primary300 : '#432CBB',
      footerText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
    };
  }, [isDark, variant]);

  const handleCopy = () => {
    navigator.clipboard.writeText('INC-2026-MH-04127');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Clean React Native TSX code snippet
  const codeString = useMemo(() => {
    const isCard = variant === 'Card style';
    if (isCard) {
      return `// Application Submitted Screen Pattern (Card Style Layout)

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Clipboard,
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
    title: 'Application Submitted',
    status: {
      text: '',
      badgeText: 'Completed',
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

export const ApplicationSubmittedCardScreen = ({
  isDark = ${isDark},
  onReturn = () => {},
  onTrack = () => {},
  onDownload = () => {},
  onAddToCalendar = () => {},
}: {
  isDark?: boolean;
  onReturn?: () => void;
  onTrack?: () => void;
  onDownload?: () => void;
  onAddToCalendar?: () => void;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    Clipboard.setString('INC-2026-MH-04127');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
              icon: 'menu',
              onPressed: () => {},
              tooltip: 'Menu',
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

            {/* Success icon */}
            <View style={styles.centerContainer}>
              <View
                style={[
                  styles.successCircle,
                  { backgroundColor: isDark ? 'rgba(22, 163, 74, 0.2)' : '#DCFCE7' },
                ]}
              >
                <Text style={[styles.checkCircleIcon, { color: isDark ? UX4GColors.green400 : '#16A34A' }]}>
                  ✓
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
              {'Application Submitted\\nSuccessfully'}
            </Text>

            {/* Subtitle */}
            <Text
              style={[
                styles.subtitleText,
                { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
              ]}
            >
              {'Your Income Certificate application is now\\nunder review by the Revenue Department.'}
            </Text>

            {/* Reference card */}
            <View
              style={[
                styles.referenceCard,
                {
                  backgroundColor: isDark ? 'rgba(67, 44, 187, 0.15)' : '#F5F3FF',
                  borderColor: isDark ? UX4GColors.primary600 : '#C7D2FE',
                },
              ]}
            >
              <Text style={[styles.referenceLabel, { color: isDark ? UX4GColors.neutral400 : '#6B7280' }]}>
                Application Reference
              </Text>
              <View style={styles.referenceRow}>
                <Text
                  style={[
                    styles.referenceCode,
                    { color: isDark ? UX4GColors.neutral0 : '#111827' },
                  ]}
                >
                  INC-2026-MH-04127
                </Text>
                <TouchableOpacity onPress={handleCopy} activeOpacity={0.7}>
                  <Text style={[styles.copyIconText, { color: isDark ? UX4GColors.primary300 : '#432CBB' }]}>
                    {copied ? '✓' : '⧉'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

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
                  description: 'Track the status of your Income Certificate application',
                }}
                cardColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
                cardBorderColor={isDark ? UX4GColors.neutral700 : '#E5E7EB'}
                cardBorderRadius={10}
                steps={JOURNEY_STEPS}
              />
            </View>

            {/* Notification Rows */}
            <View style={styles.notificationGroup}>
              <View style={styles.notificationItem}>
                <Text style={[styles.notificationIcon, { color: isDark ? UX4GColors.primary300 : '#432CBB' }]}>
                  📱
                </Text>
                <Text style={[styles.notificationText, { color: isDark ? UX4GColors.neutral300 : '#4B5563' }]}>
                  SMS sent to +91 98765 •••••
                </Text>
              </View>

              <View style={styles.notificationItem}>
                <Text style={[styles.notificationIcon, { color: isDark ? UX4GColors.primary300 : '#432CBB' }]}>
                  ✉
                </Text>
                <Text style={[styles.notificationText, { color: isDark ? UX4GColors.neutral300 : '#4B5563' }]}>
                  Email sent to r••••@gmail.com
                </Text>
              </View>
            </View>

            {/* Action Buttons inside Card */}
            <View style={styles.buttonGroup}>
              <Ux4gButton
                text="Track my application"
                onPress={onTrack}
                size="large"
                height={46}
                width="100%"
              />
              <View style={{ height: 10 }} />
              <Ux4gButton
                text="Download acknowledgement (PDF)"
                onPress={onDownload}
                variant="outline"
                size="large"
                height={46}
                width="100%"
                contentColor={isDark ? UX4GColors.primary300 : '#432CBB'}
                borderColor={isDark ? UX4GColors.primary300 : '#C7D2FE'}
              />
              <View style={{ height: 10 }} />
              <Ux4gButton
                text="Add to calendar"
                onPress={onAddToCalendar}
                size="large"
                height={46}
                width="100%"
                backgroundColor={isDark ? 'rgba(67, 44, 187, 0.2)' : '#EDE9FE'}
                contentColor={isDark ? UX4GColors.primary300 : '#432CBB'}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  emblemIcon: { height: 36, width: 28 },
  verticalDivider: { height: 28, width: 1, marginHorizontal: 8 },
  unionIcon: { height: 30, width: 40 },
  cardScrollPadding: { paddingHorizontal: 16, paddingVertical: 20 },
  cardInner: { padding: 18 },
  backLinkRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, gap: 6 },
  backArrowText: { fontSize: 16, fontWeight: '700' },
  backLinkText: { fontSize: 14, fontWeight: '500' },
  centerContainer: { alignItems: 'center', marginBottom: 16 },
  successCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkCircleIcon: { fontSize: 28, fontWeight: '800' },
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
  referenceCard: {
    padding: 14,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 20,
  },
  referenceLabel: { fontSize: 11, marginBottom: 4 },
  referenceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  referenceCode: { fontSize: 17, fontWeight: '700' },
  copyIconText: { fontSize: 18, fontWeight: '700' },
  sectionHeading: { fontSize: 14, fontWeight: '700', marginBottom: 10 },
  timelineCard: {
    padding: 14,
    borderWidth: 1,
    borderRadius: 14,
    marginBottom: 16,
  },
  notificationGroup: { marginTop: 8, marginBottom: 20, gap: 8 },
  notificationItem: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  notificationIcon: { fontSize: 15 },
  notificationText: { fontSize: 12 },
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
});`;
    }

    return `// Application Submitted Screen Pattern (Default Layout)

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Clipboard,
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
    title: 'Application Submitted',
    status: {
      text: '',
      badgeText: 'Completed',
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

export const ApplicationSubmittedScreen = ({
  isDark = ${isDark},
  onReturn = () => {},
  onTrack = () => {},
  onDownload = () => {},
  onAddToCalendar = () => {},
}: {
  isDark?: boolean;
  onReturn?: () => void;
  onTrack?: () => void;
  onDownload?: () => void;
  onAddToCalendar?: () => void;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    Clipboard.setString('INC-2026-MH-04127');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
            icon: 'menu',
            onPressed: () => {},
            tooltip: 'Menu',
          },
        ]}
      />
      <Ux4gDivider color="#E5E7EB" thickness={1} />

      {/* Main Content Area */}
      <ScrollView
        contentContainerStyle={styles.scrollPadding}
        showsVerticalScrollIndicator={false}
      >
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

        {/* Success icon */}
        <View style={styles.centerContainer}>
          <View
            style={[
              styles.successCircle,
              { backgroundColor: isDark ? 'rgba(22, 163, 74, 0.2)' : '#DCFCE7' },
            ]}
          >
            <Text style={[styles.checkCircleIcon, { color: isDark ? UX4GColors.green400 : '#16A34A' }]}>
              ✓
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
          {'Application Submitted\\nSuccessfully'}
        </Text>

        {/* Subtitle */}
        <Text
          style={[
            styles.subtitleText,
            { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
          ]}
        >
          {'Your Income Certificate application is now\\nunder review by the Revenue Department.'}
        </Text>

        {/* Reference card */}
        <View
          style={[
            styles.referenceCard,
            {
              backgroundColor: isDark ? 'rgba(67, 44, 187, 0.15)' : '#F5F3FF',
              borderColor: isDark ? UX4GColors.primary600 : '#C7D2FE',
            },
          ]}
        >
          <Text style={[styles.referenceLabel, { color: isDark ? UX4GColors.neutral400 : '#6B7280' }]}>
            Application Reference
          </Text>
          <View style={styles.referenceRow}>
            <Text
              style={[
                styles.referenceCode,
                { color: isDark ? UX4GColors.neutral0 : '#111827' },
              ]}
            >
              INC-2026-MH-04127
            </Text>
            <TouchableOpacity onPress={handleCopy} activeOpacity={0.7}>
              <Text style={[styles.copyIconText, { color: isDark ? UX4GColors.primary300 : '#432CBB' }]}>
                {copied ? '✓' : '⧉'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

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
              description: 'Track the status of your Income Certificate application',
            }}
            cardColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
            cardBorderColor={isDark ? UX4GColors.neutral700 : '#E5E7EB'}
            cardBorderRadius={10}
            steps={JOURNEY_STEPS}
          />
        </View>

        {/* Notification Rows */}
        <View style={styles.notificationGroup}>
          <View style={styles.notificationItem}>
            <Text style={[styles.notificationIcon, { color: isDark ? UX4GColors.primary300 : '#432CBB' }]}>
              📱
            </Text>
            <Text style={[styles.notificationText, { color: isDark ? UX4GColors.neutral300 : '#4B5563' }]}>
              SMS sent to +91 98765 •••••
            </Text>
          </View>

          <View style={styles.notificationItem}>
            <Text style={[styles.notificationIcon, { color: isDark ? UX4GColors.primary300 : '#432CBB' }]}>
              ✉
            </Text>
            <Text style={[styles.notificationText, { color: isDark ? UX4GColors.neutral300 : '#4B5563' }]}>
              Email sent to r••••@gmail.com
            </Text>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.buttonGroup}>
          <Ux4gButton
            text="Track my application"
            onPress={onTrack}
            size="large"
            height={46}
            width="100%"
          />
          <View style={{ height: 10 }} />
          <Ux4gButton
            text="Download acknowledgement (PDF)"
            onPress={onDownload}
            variant="outline"
            size="large"
            height={46}
            width="100%"
            contentColor={isDark ? UX4GColors.primary300 : '#432CBB'}
            borderColor={isDark ? UX4GColors.primary300 : '#C7D2FE'}
          />
          <View style={{ height: 10 }} />
          <Ux4gButton
            text="Add to calendar"
            onPress={onAddToCalendar}
            size="large"
            height={46}
            width="100%"
            backgroundColor={isDark ? 'rgba(67, 44, 187, 0.2)' : '#EDE9FE'}
            contentColor={isDark ? UX4GColors.primary300 : '#432CBB'}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  emblemIcon: { height: 36, width: 28 },
  verticalDivider: { height: 28, width: 1, marginHorizontal: 8 },
  unionIcon: { height: 30, width: 40 },
  scrollPadding: { paddingHorizontal: 18, paddingVertical: 20 },
  backLinkRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, gap: 6 },
  backArrowText: { fontSize: 16, fontWeight: '700' },
  backLinkText: { fontSize: 14, fontWeight: '500' },
  centerContainer: { alignItems: 'center', marginBottom: 16 },
  successCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkCircleIcon: { fontSize: 28, fontWeight: '800' },
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
  referenceCard: {
    padding: 14,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 20,
  },
  referenceLabel: { fontSize: 11, marginBottom: 4 },
  referenceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  referenceCode: { fontSize: 17, fontWeight: '700' },
  copyIconText: { fontSize: 18, fontWeight: '700' },
  sectionHeading: { fontSize: 14, fontWeight: '700', marginBottom: 10 },
  timelineCard: {
    padding: 14,
    borderWidth: 1,
    borderRadius: 14,
    marginBottom: 16,
  },
  notificationGroup: { marginTop: 8, marginBottom: 20, gap: 8 },
  notificationItem: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  notificationIcon: { fontSize: 15 },
  notificationText: { fontSize: 12 },
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
});`;
  }, [isDark, variant]);

  // Content body used in both Default and Card styles
  const renderContentBody = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Back link */}
        <div
          onClick={() => {}}
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            marginBottom: 24,
            gap: 6,
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: 18,
              color: colors.linkPrimary,
              fontWeight: 700,
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

        {/* Success Icon */}
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
              backgroundColor: colors.successIconBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: 32,
                color: colors.successIconColor,
                fontVariationSettings: "'FILL' 1",
              }}
            >
              check_circle
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
          Application Submitted Successfully
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
          Your Income Certificate application is now under review by the Revenue Department.
        </p>

        {/* Reference Card */}
        <div
          style={{
            padding: '12px 14px',
            backgroundColor: colors.refCardBg,
            border: `1px solid ${colors.refCardBorder}`,
            borderRadius: 12,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: colors.refLabel,
              marginBottom: 4,
            }}
          >
            Application Reference
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span
              style={{
                fontSize: 17,
                fontWeight: 700,
                color: colors.refValue,
                letterSpacing: '-0.01em',
              }}
            >
              INC-2026-MH-04127
            </span>
            <button
              type="button"
              onClick={handleCopy}
              title="Copy Reference"
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 4,
                position: 'relative',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 22,
                  color: colors.copyIconColor,
                }}
              >
                {copied ? 'check' : 'content_copy'}
              </span>
              {copied && (
                <span
                  style={{
                    position: 'absolute',
                    top: -24,
                    right: 0,
                    backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral900,
                    color: '#FFFFFF',
                    fontSize: 10,
                    padding: '2px 6px',
                    borderRadius: 4,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>

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
              description: 'Track the status of your Income Certificate application',
            }}
            cardColor={colors.stepBoxBg}
            cardBorderColor={colors.stepBoxBorder}
            cardBorderRadius={10}
            steps={[
              {
                state: 'completed',
                date: '02 Sep 2026',
                title: 'Application Submitted',
                status: {
                  text: '',
                  badgeText: 'Completed',
                  badgeColor: colors.completedTagBg,
                  badgeTextColor: colors.completedTagText,
                  badgePosition: 'topRight',
                },
              },
              {
                state: 'current',
                date: '03 Sep 2026',
                title: 'Document Verification',
                status: {
                  text: '',
                  badgeText: 'Upcoming',
                  badgeColor: colors.upcomingTagBg,
                  badgeTextColor: colors.upcomingTagText,
                  badgePosition: 'topRight',
                },
              },
              {
                state: 'upcoming',
                date: '06 Sep 2026',
                title: 'Field Enquiry',
                status: {
                  text: '',
                  badgeText: 'Upcoming',
                  badgeColor: colors.upcomingTagBg,
                  badgeTextColor: colors.upcomingTagText,
                  badgePosition: 'topRight',
                },
              },
              {
                state: 'upcoming',
                date: '10 Sep 2026',
                title: 'Certificate Issued',
                status: {
                  text: '',
                  badgeText: 'Upcoming',
                  badgeColor: colors.upcomingTagBg,
                  badgeTextColor: colors.upcomingTagText,
                  badgePosition: 'topRight',
                },
              },
            ]}
          />
        </div>

        {/* Notification Group */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
          {/* SMS Notification */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: 18,
                color: colors.notificationIconColor,
              }}
            >
              smartphone
            </span>
            <span style={{ fontSize: 12, color: colors.notificationTextColor }}>
              SMS sent to +91 98765 •••••
            </span>
          </div>

          {/* Email Notification */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: 18,
                color: colors.notificationIconColor,
              }}
            >
              mail
            </span>
            <span style={{ fontSize: 12, color: colors.notificationTextColor }}>
              Email sent to r••••@gmail.com
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {/* Button 1: Track my application */}
          <button
            type="button"
            onClick={() => alert('Tracking application...')}
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
            Track my application
          </button>

          {/* Button 2: Download acknowledgement (PDF) */}
          <button
            type="button"
            onClick={() => alert('Downloading acknowledgement...')}
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
            Download acknowledgement (PDF)
          </button>

          {/* Button 3: Add to calendar */}
          <button
            type="button"
            onClick={() => alert('Added to calendar')}
            style={{
              width: '100%',
              height: 44,
              backgroundColor: colors.btn3Bg,
              color: colors.btn3Text,
              border: 'none',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.2s ease',
            }}
          >
            Add to calendar
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
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                border: `1.5px solid ${isDark ? UX4GColors.primary300 : '#C7D2FE'}`,
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
          <h1 className="wb-title">Application Submitted</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A success confirmation screen shown after an application is submitted, displaying a reference number, next steps timeline, and action buttons.
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
                <CodeBlock code={codeString} language="tsx" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSubmittedDoc;
