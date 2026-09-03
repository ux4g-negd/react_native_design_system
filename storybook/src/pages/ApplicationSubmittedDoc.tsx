import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { Ux4gJourneyTimeline } from '../../../src/components/journey-timeline/JourneyTimeline';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface ApplicationSubmittedDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

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
          : UX4GColors.primary50
        : isDark
        ? UX4GColors.neutral900
        : UX4GColors.neutral50,
      headerBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
      border: isDark ? UX4GColors.neutral800 : '#E5E7EB',
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      linkPrimary: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      successIconBg: isDark ? UX4GColors.green800 : UX4GColors.green100,
      successIconColor: isDark ? UX4GColors.green500 : UX4GColors.green600,
      refCardBg: isCard
        ? 'transparent'
        : isDark
        ? UX4GColors.primary900
        : UX4GColors.primary50,
      refCardBorder: isCard
        ? isDark
          ? UX4GColors.neutral800
          : UX4GColors.neutral200
        : isDark
        ? UX4GColors.primary600
        : UX4GColors.primary300,
      refLabel: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      refValue: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      copyIconColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      notificationIconColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      notificationTextColor: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      btn1Bg: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      btn1Text: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
      btn2Border: isDark ? UX4GColors.primary600 : UX4GColors.primary300,
      btn2Text: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      btn3Bg: isDark ? UX4GColors.primary800 : UX4GColors.primary100,
      btn3Text: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      footerText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
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
      return `import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gButton,
  Ux4gJourneyTimeline,
  UX4GColors,
} from 'ux4g-react-native-design-system';

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
      {/* Header with white background */}
      <View
        style={{
          backgroundColor: isDark
            ? UX4GColors.neutral900
            : UX4GColors.neutral0,
        }}
      >
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
                {
                  backgroundColor: isDark
                    ? UX4GColors.neutral700
                    : UX4GColors.neutral200,
                },
              ]}
            />,
            <Image
              key="union"
              source={require('./assets/union_logo.png')}
              style={[
                styles.unionIcon,
                {
                  tintColor: isDark
                    ? UX4GColors.primary300
                    : UX4GColors.primary600,
                },
              ]}
              resizeMode="contain"
            />,
          ]}
        />
        <Ux4gDivider color="#E5E7EB" thickness={1} />
      </View>

      {/* White card with all content inside */}
      <ScrollView
        contentContainerStyle={styles.cardScrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.cardContainer,
            {
              backgroundColor: isDark
                ? UX4GColors.neutral900
                : UX4GColors.neutral50,
            },
          ]}
        >
          {/* Back link */}
          <TouchableOpacity
            onPress={onReturn}
            style={styles.backLinkRow}
            activeOpacity={0.7}
          >
            <Image
              source={require('./assets/arrow_back.png')}
              style={[
                styles.backArrowIcon,
                {
                  tintColor: isDark
                    ? UX4GColors.primary300
                    : UX4GColors.primary600,
                },
              ]}
            />
            <Text
              style={[
                styles.backLinkText,
                {
                  color: isDark
                    ? UX4GColors.primary300
                    : UX4GColors.primary600,
                },
              ]}
            >
              Return to services
            </Text>
          </TouchableOpacity>

          {/* Success icon */}
          <View style={styles.centerContainer}>
            <View
              style={[
                styles.successCircle,
                {
                  backgroundColor: isDark
                    ? UX4GColors.green800
                    : UX4GColors.green100,
                },
              ]}
            >
              <Image
                source={require('./assets/check_circle.png')}
                style={[
                  styles.checkCircleIcon,
                  {
                    tintColor: isDark
                      ? UX4GColors.green500
                      : UX4GColors.green600,
                  },
                ]}
              />
            </View>
          </View>

          {/* Title */}
          <Text
            style={[
              styles.headingTitle,
              {
                color: isDark
                  ? UX4GColors.neutral50
                  : UX4GColors.neutral900,
              },
            ]}
          >
            {'Application Submitted\\nSuccessfully'}
          </Text>

          {/* Subtitle */}
          <Text
            style={[
              styles.subtitleText,
              {
                color: isDark
                  ? UX4GColors.neutral200
                  : UX4GColors.neutral700,
              },
            ]}
          >
            {'Your Income Certificate application is now\\nunder review by the Revenue Department.'}
          </Text>

          {/* Reference card */}
          <View
            style={[
              styles.referenceCard,
              {
                borderColor: isDark
                  ? UX4GColors.neutral800
                  : UX4GColors.neutral200,
              },
            ]}
          >
            <Text
              style={[
                styles.referenceLabel,
                {
                  color: isDark
                    ? UX4GColors.neutral200
                    : UX4GColors.neutral700,
                },
              ]}
            >
              Application Reference
            </Text>
            <View style={styles.referenceRow}>
              <Text
                style={[
                  styles.referenceCode,
                  {
                    color: isDark
                      ? UX4GColors.neutral50
                      : UX4GColors.neutral900,
                  },
                ]}
              >
                INC-2026-MH-04127
              </Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Image
                  source={require('./assets/copy_icon.png')}
                  style={[
                    styles.copyIcon,
                    {
                      tintColor: isDark
                        ? UX4GColors.primary300
                        : UX4GColors.primary600,
                    },
                  ]}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* What happens next - Journey Timeline */}
          <Ux4gJourneyTimeline
            header={{ title: 'What happens next' }}
            indicatorCardSpacing={16}
            indicatorSize={24}
            steps={[
              {
                state: 'completed',
                stepNumber: '1',
                date: 'Date',
                title: 'Title',
                helpingText: 'Helping Text',
              },
              {
                state: 'completed',
                stepNumber: '2',
                date: 'Date',
                title: 'Title',
                helpingText: 'Helping Text',
              },
              {
                state: 'completed',
                stepNumber: '3',
                date: 'Date',
                title: 'Title',
                helpingText: 'Helping Text',
              },
            ]}
          />

          {/* Notification row */}
          <View style={styles.notificationRow}>
            <Image
              source={require('./assets/phone_icon.png')}
              style={[
                styles.notificationIcon,
                {
                  tintColor: isDark
                    ? UX4GColors.primary300
                    : UX4GColors.primary600,
                },
              ]}
            />
            <Text
              style={[
                styles.notificationText,
                {
                  color: isDark
                    ? UX4GColors.neutral200
                    : UX4GColors.neutral700,
                },
              ]}
            >
              {'SMS sent to +91\\n98765 •••••'}
            </Text>

            <Image
              source={require('./assets/email_icon.png')}
              style={[
                styles.notificationIcon,
                {
                  marginLeft: 16,
                  tintColor: isDark
                    ? UX4GColors.primary300
                    : UX4GColors.primary600,
                },
              ]}
            />
            <Text
              style={[
                styles.notificationText,
                {
                  color: isDark
                    ? UX4GColors.neutral200
                    : UX4GColors.neutral700,
                },
              ]}
            >
              {'Email sent to\\nr••••@gmail.com'}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Actions */}
      <View style={styles.actionsContainer}>
        <Ux4gButton
          text="Track my application"
          onPress={onTrack}
          size="large"
          width="100%"
          height={48}
          backgroundColor={
            isDark ? UX4GColors.primary300 : UX4GColors.primary600
          }
          contentColor={
            isDark ? UX4GColors.neutral900 : UX4GColors.neutral50
          }
        />
        <View style={{ height: 12 }} />
        <Ux4gButton
          text="Download acknowledgement (PDF)"
          onPress={onDownload}
          variant="outline"
          size="large"
          width="100%"
          height={48}
          contentColor={
            isDark ? UX4GColors.primary300 : UX4GColors.primary600
          }
          borderColor={
            isDark ? UX4GColors.primary600 : UX4GColors.primary300
          }
        />
        <View style={{ height: 12 }} />
        <Ux4gButton
          text="Add to calendar"
          onPress={onAddToCalendar}
          size="large"
          width="100%"
          height={48}
          backgroundColor={
            isDark ? UX4GColors.primary800 : UX4GColors.primary100
          }
          contentColor={
            isDark ? UX4GColors.primary300 : UX4GColors.primary600
          }
        />
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <Text
          style={[
            styles.poweredByText,
            {
              color: isDark
                ? UX4GColors.neutral500
                : UX4GColors.neutral400,
            },
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  emblemIcon: {
    height: 40,
    width: 28,
  },
  verticalDivider: {
    height: 32,
    width: 1,
  },
  unionIcon: {
    height: 32,
    width: 44,
  },
  cardScrollContainer: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  cardContainer: {
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 20,
    elevation: 3,
  },
  backLinkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  backArrowIcon: {
    width: 18,
    height: 18,
    marginRight: 6,
  },
  backLinkText: {
    fontSize: 14,
    fontWeight: '500',
  },
  centerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  successCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkCircleIcon: {
    width: 36,
    height: 36,
  },
  headingTitle: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 12,
  },
  subtitleText: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  referenceCard: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 20,
  },
  referenceLabel: {
    fontSize: 12,
    marginBottom: 8,
  },
  referenceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  referenceCode: {
    fontSize: 18,
    fontWeight: '700',
  },
  copyIcon: {
    width: 22,
    height: 22,
  },
  notificationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 24,
  },
  notificationIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    marginTop: 2,
  },
  notificationText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 17,
  },
  actionsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  footerContainer: {
    alignItems: 'center',
    paddingBottom: 24,
  },
  poweredByText: {
    fontSize: 11,
    marginBottom: 6,
  },
  digitalIndiaLogo: {
    height: 24,
    width: 90,
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
  useColorScheme,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gButton,
  Ux4gJourneyTimeline,
  UX4GColors,
} from 'ux4g-react-native-design-system';

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
  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        {
          backgroundColor: isDark
            ? UX4GColors.neutral900
            : UX4GColors.neutral50,
        },
      ]}
    >
      {/* Header */}
      <Ux4gAppHeader
        variant="light"
        showBackButton={false}
        backgroundColor={
          isDark ? UX4GColors.neutral900 : UX4GColors.neutral0
        }
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
              {
                backgroundColor: isDark
                  ? UX4GColors.neutral700
                  : UX4GColors.neutral200,
              },
            ]}
          />,
          <Image
            key="union"
            source={require('./assets/union_logo.png')}
            style={[
              styles.unionIcon,
              {
                tintColor: isDark
                  ? UX4GColors.primary300
                  : UX4GColors.primary600,
              },
            ]}
            resizeMode="contain"
          />,
        ]}
      />
      <Ux4gDivider color="#E5E7EB" thickness={1} />

      {/* Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Back link */}
        <TouchableOpacity
          onPress={onReturn}
          style={styles.backLinkRow}
          activeOpacity={0.7}
        >
          <Image
            source={require('./assets/arrow_back.png')}
            style={[
              styles.backArrowIcon,
              {
                tintColor: isDark
                  ? UX4GColors.primary300
                  : UX4GColors.primary600,
              },
            ]}
          />
          <Text
            style={[
              styles.backLinkText,
              {
                color: isDark
                  ? UX4GColors.primary300
                  : UX4GColors.primary600,
              },
            ]}
          >
            Return to services
          </Text>
        </TouchableOpacity>

        {/* Success icon */}
        <View style={styles.centerContainer}>
          <View
            style={[
              styles.successCircle,
              {
                backgroundColor: isDark
                  ? UX4GColors.green800
                  : UX4GColors.green100,
              },
            ]}
          >
            <Image
              source={require('./assets/check_circle.png')}
              style={[
                styles.checkCircleIcon,
                {
                  tintColor: isDark
                    ? UX4GColors.green500
                    : UX4GColors.green600,
                },
              ]}
            />
          </View>
        </View>

        {/* Title */}
        <Text
          style={[
            styles.headingTitle,
            {
              color: isDark
                ? UX4GColors.neutral50
                : UX4GColors.neutral900,
            },
          ]}
        >
          {'Application Submitted\\nSuccessfully'}
        </Text>

        {/* Subtitle */}
        <Text
          style={[
            styles.subtitleText,
            {
              color: isDark
                ? UX4GColors.neutral200
                : UX4GColors.neutral700,
            },
          ]}
        >
          {'Your Income Certificate application is now\\nunder review by the Revenue Department.'}
        </Text>

        {/* Reference card */}
        <View
          style={[
            styles.referenceCard,
            {
              backgroundColor: isDark
                ? UX4GColors.primary900
                : UX4GColors.primary50,
              borderColor: isDark
                ? UX4GColors.primary600
                : UX4GColors.primary300,
            },
          ]}
        >
          <Text
            style={[
              styles.referenceLabel,
              {
                color: isDark
                  ? UX4GColors.neutral200
                  : UX4GColors.neutral700,
              },
            ]}
          >
            Application Reference
          </Text>
          <View style={styles.referenceRow}>
            <Text
              style={[
                styles.referenceCode,
                {
                  color: isDark
                    ? UX4GColors.neutral50
                    : UX4GColors.neutral900,
                },
              ]}
            >
              INC-2026-MH-04127
            </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                source={require('./assets/copy_icon.png')}
                style={[
                  styles.copyIcon,
                  {
                    tintColor: isDark
                      ? UX4GColors.primary300
                      : UX4GColors.primary600,
                  },
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* What happens next - Journey Timeline */}
        <Ux4gJourneyTimeline
          header={{ title: 'What happens next' }}
          indicatorCardSpacing={16}
          indicatorSize={24}
          steps={[
            {
              state: 'completed',
              stepNumber: '1',
              date: 'Date',
              title: 'Title',
              helpingText: 'Helping Text',
            },
            {
              state: 'completed',
              stepNumber: '2',
              date: 'Date',
              title: 'Title',
              helpingText: 'Helping Text',
            },
            {
              state: 'completed',
              stepNumber: '3',
              date: 'Date',
              title: 'Title',
              helpingText: 'Helping Text',
            },
          ]}
        />

        {/* Notification row */}
        <View style={styles.notificationRow}>
          <Image
            source={require('./assets/phone_icon.png')}
            style={[
              styles.notificationIcon,
              {
                tintColor: isDark
                  ? UX4GColors.primary300
                  : UX4GColors.primary600,
              },
            ]}
          />
          <Text
            style={[
              styles.notificationText,
              {
                color: isDark
                  ? UX4GColors.neutral200
                  : UX4GColors.neutral700,
              },
            ]}
          >
            {'SMS sent to +91\\n98765 •••••'}
          </Text>

          <Image
            source={require('./assets/email_icon.png')}
            style={[
              styles.notificationIcon,
              {
                marginLeft: 16,
                tintColor: isDark
                  ? UX4GColors.primary300
                  : UX4GColors.primary600,
              },
            ]}
          />
          <Text
            style={[
              styles.notificationText,
              {
                color: isDark
                  ? UX4GColors.neutral200
                  : UX4GColors.neutral700,
              },
            ]}
          >
            {'Email sent to\\nr••••@gmail.com'}
          </Text>
        </View>
      </ScrollView>

      {/* Actions */}
      <View style={styles.actionsContainer}>
        <Ux4gButton
          text="Track my application"
          onPress={onTrack}
          size="large"
          width="100%"
          height={48}
          backgroundColor={
            isDark ? UX4GColors.primary300 : UX4GColors.primary600
          }
          contentColor={
            isDark ? UX4GColors.neutral900 : UX4GColors.neutral50
          }
        />
        <View style={{ height: 12 }} />
        <Ux4gButton
          text="Download acknowledgement (PDF)"
          onPress={onDownload}
          variant="outline"
          size="large"
          width="100%"
          height={48}
          contentColor={
            isDark ? UX4GColors.primary300 : UX4GColors.primary600
          }
          borderColor={
            isDark ? UX4GColors.primary600 : UX4GColors.primary300
          }
        />
        <View style={{ height: 12 }} />
        <Ux4gButton
          text="Add to calendar"
          onPress={onAddToCalendar}
          size="large"
          width="100%"
          height={48}
          backgroundColor={
            isDark ? UX4GColors.primary800 : UX4GColors.primary100
          }
          contentColor={
            isDark ? UX4GColors.primary300 : UX4GColors.primary600
          }
        />
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <Text
          style={[
            styles.poweredByText,
            {
              color: isDark
                ? UX4GColors.neutral500
                : UX4GColors.neutral400,
            },
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  emblemIcon: {
    height: 40,
    width: 28,
  },
  verticalDivider: {
    height: 32,
    width: 1,
  },
  unionIcon: {
    height: 32,
    width: 44,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  backLinkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  backArrowIcon: {
    width: 18,
    height: 18,
    marginRight: 6,
  },
  backLinkText: {
    fontSize: 14,
    fontWeight: '500',
  },
  centerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  successCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkCircleIcon: {
    width: 36,
    height: 36,
  },
  headingTitle: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 12,
  },
  subtitleText: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  referenceCard: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 20,
  },
  referenceLabel: {
    fontSize: 12,
    marginBottom: 8,
  },
  referenceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  referenceCode: {
    fontSize: 18,
    fontWeight: '700',
  },
  copyIcon: {
    width: 22,
    height: 22,
  },
  notificationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 24,
  },
  notificationIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    marginTop: 2,
  },
  notificationText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 17,
  },
  actionsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  footerContainer: {
    alignItems: 'center',
    paddingBottom: 24,
  },
  poweredByText: {
    fontSize: 11,
    marginBottom: 6,
  },
  digitalIndiaLogo: {
    height: 24,
    width: 90,
  },
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
            marginBottom: 32,
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
              fontWeight: 500,
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
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
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
                fontSize: 36,
                color: colors.successIconColor,
                fontVariationSettings: "'FILL' 1",
              }}
            >
              check_circle
            </span>
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 800,
            color: colors.titleColor,
            textAlign: 'center',
            lineHeight: 1.25,
            marginBottom: 12,
            whiteSpace: 'pre-line',
          }}
        >
          {'Application Submitted\nSuccessfully'}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 14,
            color: colors.subtleText,
            textAlign: 'center',
            lineHeight: 1.45,
            marginBottom: 20,
            whiteSpace: 'pre-line',
          }}
        >
          {'Your Income Certificate application is now\nunder review by the Revenue Department.'}
        </div>

        {/* Reference Card */}
        <div
          style={{
            padding: 16,
            backgroundColor: colors.refCardBg,
            border: `1px solid ${colors.refCardBorder}`,
            borderRadius: 12,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              fontSize: 12,
              color: colors.refLabel,
              marginBottom: 8,
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
                fontSize: 18,
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

        {/* What happens next - Journey Timeline */}
        <Ux4gJourneyTimeline
          header={{ title: 'What happens next' }}
          indicatorCardSpacing={16}
          indicatorSize={24}
          steps={[
            {
              state: 'completed',
              stepNumber: '1',
              date: 'Date',
              title: 'Title',
              helpingText: 'Helping Text',
            },
            {
              state: 'completed',
              stepNumber: '2',
              date: 'Date',
              title: 'Title',
              helpingText: 'Helping Text',
            },
            {
              state: 'completed',
              stepNumber: '3',
              date: 'Date',
              title: 'Title',
              helpingText: 'Helping Text',
            },
          ]}
        />

        {/* Notification row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            marginTop: 24,
          }}
        >
          {/* SMS info */}
          <div style={{ display: 'flex', alignItems: 'flex-start', flex: 1 }}>
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: 20,
                color: colors.notificationIconColor,
                marginRight: 8,
                marginTop: 1,
              }}
            >
              smartphone
            </span>
            <div
              style={{
                fontSize: 12,
                color: colors.notificationTextColor,
                lineHeight: 1.4,
                whiteSpace: 'pre-line',
              }}
            >
              {'SMS sent to +91\n98765 •••••'}
            </div>
          </div>

          <div style={{ width: 16 }} />

          {/* Email info */}
          <div style={{ display: 'flex', alignItems: 'flex-start', flex: 1 }}>
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: 20,
                color: colors.notificationIconColor,
                marginRight: 8,
                marginTop: 1,
              }}
            >
              mail
            </span>
            <div
              style={{
                fontSize: 12,
                color: colors.notificationTextColor,
                lineHeight: 1.4,
                whiteSpace: 'pre-line',
              }}
            >
              {'Email sent to\nr••••@gmail.com'}
            </div>
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
        {/* Header with white/dark background */}
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
                  backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
                }}
              />
              <UnionLogo size={32} isDark={isDark} />
            </div>
          </div>
          <Ux4gDivider color="#E5E7EB" thickness={1} />
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
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                }}
              >
                {renderContentBody()}
              </div>
            ) : (
              renderContentBody()
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
            text="Track my application"
            onPress={() => {}}
            size="large"
            width="100%"
            height={48}
            backgroundColor={colors.btn1Bg}
            contentColor={colors.btn1Text}
          />

          <Ux4gButton
            text="Download acknowledgement (PDF)"
            onPress={() => {}}
            variant="outline"
            size="large"
            width="100%"
            height={48}
            borderColor={colors.btn2Border}
            contentColor={colors.btn2Text}
          />

          <Ux4gButton
            text="Add to calendar"
            onPress={() => {}}
            size="large"
            width="100%"
            height={48}
            backgroundColor={colors.btn3Bg}
            contentColor={colors.btn3Text}
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

export default ApplicationSubmittedDoc;
