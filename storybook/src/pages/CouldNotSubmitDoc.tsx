import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { Ux4gJourneyTimeline } from '../../../src/components/journey-timeline/JourneyTimeline';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface CouldNotSubmitDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

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
          : UX4GColors.primary50
        : isDark
        ? UX4GColors.neutral900
        : '#FFFFFF',
      headerBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      cardBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral800 : '#E5E7EB',
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtleText: isDark ? UX4GColors.neutral200 : UX4GColors.neutral700,
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      errorIconBg: isDark ? UX4GColors.red900 : UX4GColors.red50,
      errorIconColor: isDark ? UX4GColors.red500 : UX4GColors.red600,
      btn1Bg: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      btn1Text: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
      btn2Border: isDark ? UX4GColors.primary600 : UX4GColors.primary300,
      btn2Text: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      footerText: isDark ? UX4GColors.neutral500 : '#9CA3AF',
      toastBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
    };
  }, [isDark, variant]);

  // Clean React Native TSX code snippet
  const codeString = useMemo(() => {
    const isCard = variant === 'Card style';
    if (isCard) {
      return `import React, { useState } from 'react';
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
} from 'ux4g-react-native-design-system';

export const CouldNotSubmitCardScreen = ({
  isDark = ${isDark},
  onReturn = () => {},
  onSaveDraft = () => {},
  onContactSupport = () => {},
}: {
  isDark?: boolean;
  onReturn?: () => void;
  onSaveDraft?: () => void;
  onContactSupport?: () => void;
}) => {
  const [showToast, setShowToast] = useState(false);

  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleText = isDark ? UX4GColors.neutral200 : UX4GColors.neutral700;
  const errorColor = isDark ? UX4GColors.red500 : UX4GColors.red600;

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
        {/* Header with white background */}
        <View
          style={{
            backgroundColor: isDark
              ? UX4GColors.neutral900
              : '#FFFFFF',
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
                      : '#D1D5DB',
                  },
                ]}
              />,
              <Image
                key="union"
                source={require('./assets/union_logo.png')}
                style={[
                  styles.unionIcon,
                  {
                    tintColor: primaryColor,
                  },
                ]}
                resizeMode="contain"
              />,
            ]}
          />
          <Ux4gDivider color="#E5E7EB" thickness={1} />
        </View>

        {/* White card with content */}
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
                  : '#FFFFFF',
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
                  { tintColor: primaryColor },
                ]}
              />
              <Text style={[styles.backLinkText, { color: primaryColor }]}>
                Return to services
              </Text>
            </TouchableOpacity>

            {/* Error icon */}
            <View style={styles.centerContainer}>
              <View
                style={[
                  styles.errorIconCircle,
                  {
                    backgroundColor: isDark
                      ? UX4GColors.red900
                      : UX4GColors.red50,
                  },
                ]}
              >
                <Image
                  source={require('./assets/error.png')}
                  style={[
                    styles.errorIcon,
                    { tintColor: errorColor },
                  ]}
                />
              </View>
            </View>

            {/* Title */}
            <Text
              style={[
                styles.headingTitle,
                { color: titleColor },
              ]}
            >
              {'Could Not Submit\\nApplication'}
            </Text>

            {/* Subtitle */}
            <Text
              style={[
                styles.subtitleText,
                { color: subtleText },
              ]}
            >
              {"We could not submit your application due to\\na network or server error. Your data is saved —\\ntry again."}
            </Text>

            {/* Journey Timeline */}
            <Ux4gJourneyTimeline
              header={{ title: 'What happens next' }}
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
          </View>
        </ScrollView>

        {/* Actions */}
        <View style={styles.actionsContainer}>
          <Ux4gButton
            text="Retry submission"
            onPress={() => setShowToast(true)}
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
            text="Save draft"
            onPress={onSaveDraft}
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
          <TouchableOpacity
            onPress={onContactSupport}
            style={styles.contactSupportWrapper}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.contactSupportText,
                { color: titleColor },
              ]}
            >
              Contact support
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text
            style={[
              styles.poweredByText,
              { color: '#9CA3AF' },
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

        {/* Error Toast Notification */}
        {showToast && (
          <View
            style={[
              styles.toastWrapper,
              {
                backgroundColor: isDark
                  ? UX4GColors.neutral900
                  : '#FFFFFF',
              },
            ]}
          >
            <Image
              source={require('./assets/error.png')}
              style={[styles.toastErrorIcon, { tintColor: errorColor }]}
            />
            <View style={styles.toastContent}>
              <Text
                style={[
                  styles.toastTitle,
                  { color: titleColor },
                ]}
              >
                Could not submit
              </Text>
              <Text
                style={[
                  styles.toastMessage,
                  { color: subtleText },
                ]}
              >
                Network or server issue
              </Text>
            </View>
            <TouchableOpacity onPress={() => setShowToast(false)}>
              <Image
                source={require('./assets/close.png')}
                style={[styles.closeIcon, { tintColor: subtleText }]}
              />
            </TouchableOpacity>
          </View>
        )}
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
    position: 'relative',
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
  errorIconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorIcon: {
    width: 30,
    height: 30,
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
    marginBottom: 32,
  },
  actionsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  contactSupportWrapper: {
    alignItems: 'center',
    paddingVertical: 4,
  },
  contactSupportText: {
    fontSize: 14,
    fontWeight: '600',
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
  toastWrapper: {
    position: 'absolute',
    top: 24,
    left: 16,
    right: 16,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 5,
  },
  toastErrorIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  toastContent: {
    flex: 1,
  },
  toastTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  toastMessage: {
    fontSize: 13,
    marginTop: 4,
  },
  closeIcon: {
    width: 18,
    height: 18,
  },
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
  TouchableOpacity,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gButton,
  Ux4gJourneyTimeline,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const CouldNotSubmitScreen = ({
  isDark = ${isDark},
  onReturn = () => {},
  onSaveDraft = () => {},
  onContactSupport = () => {},
}: {
  isDark?: boolean;
  onReturn?: () => void;
  onSaveDraft?: () => void;
  onContactSupport?: () => void;
}) => {
  const [showToast, setShowToast] = useState(false);

  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleText = isDark ? UX4GColors.neutral200 : UX4GColors.neutral700;
  const errorColor = isDark ? UX4GColors.red500 : UX4GColors.red600;

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
        <Ux4gAppHeader
          variant="light"
          showBackButton={false}
          backgroundColor={
            isDark ? UX4GColors.neutral900 : '#FFFFFF'
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
                    : '#D1D5DB',
                },
              ]}
            />,
            <Image
              key="union"
              source={require('./assets/union_logo.png')}
              style={[
                styles.unionIcon,
                {
                  tintColor: primaryColor,
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
                { tintColor: primaryColor },
              ]}
            />
            <Text style={[styles.backLinkText, { color: primaryColor }]}>
              Return to services
            </Text>
          </TouchableOpacity>

          {/* Error icon */}
          <View style={styles.centerContainer}>
            <View
              style={[
                styles.errorIconCircle,
                {
                  backgroundColor: isDark
                    ? UX4GColors.red900
                    : UX4GColors.red50,
                },
              ]}
            >
              <Image
                source={require('./assets/error.png')}
                style={[
                  styles.errorIcon,
                  { tintColor: errorColor },
                ]}
              />
            </View>
          </View>

          {/* Title */}
          <Text
            style={[
              styles.headingTitle,
              { color: titleColor },
            ]}
          >
            {'Could Not Submit\\nApplication'}
          </Text>

          {/* Subtitle */}
          <Text
            style={[
              styles.subtitleText,
              { color: subtleText },
            ]}
          >
            {"We could not submit your application due to\\na network or server error. Your data is saved —\\ntry again."}
          </Text>

          {/* What happens next - Journey Timeline */}
          <Ux4gJourneyTimeline
            header={{ title: 'What happens next' }}
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
        </ScrollView>

        {/* Actions */}
        <View style={styles.actionsContainer}>
          <Ux4gButton
            text="Retry submission"
            onPress={() => setShowToast(true)}
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
            text="Save draft"
            onPress={onSaveDraft}
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
          <TouchableOpacity
            onPress={onContactSupport}
            style={styles.contactSupportWrapper}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.contactSupportText,
                { color: titleColor },
              ]}
            >
              Contact support
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text
            style={[
              styles.poweredByText,
              { color: '#9CA3AF' },
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

        {/* Error Toast Notification */}
        {showToast && (
          <View
            style={[
              styles.toastWrapper,
              {
                backgroundColor: isDark
                  ? UX4GColors.neutral900
                  : '#FFFFFF',
              },
            ]}
          >
            <Image
              source={require('./assets/error.png')}
              style={[styles.toastErrorIcon, { tintColor: errorColor }]}
            />
            <View style={styles.toastContent}>
              <Text
                style={[
                  styles.toastTitle,
                  { color: titleColor },
                ]}
              >
                Could not submit
              </Text>
              <Text
                style={[
                  styles.toastMessage,
                  { color: subtleText },
                ]}
              >
                Network or server issue
              </Text>
            </View>
            <TouchableOpacity onPress={() => setShowToast(false)}>
              <Image
                source={require('./assets/close.png')}
                style={[styles.closeIcon, { tintColor: subtleText }]}
              />
            </TouchableOpacity>
          </View>
        )}
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
    position: 'relative',
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
  errorIconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorIcon: {
    width: 30,
    height: 30,
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
    marginBottom: 32,
  },
  actionsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  contactSupportWrapper: {
    alignItems: 'center',
    paddingVertical: 4,
  },
  contactSupportText: {
    fontSize: 14,
    fontWeight: '600',
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
  toastWrapper: {
    position: 'absolute',
    top: 24,
    left: 16,
    right: 16,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 5,
  },
  toastErrorIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  toastContent: {
    flex: 1,
  },
  toastTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  toastMessage: {
    fontSize: 13,
    marginTop: 4,
  },
  closeIcon: {
    width: 18,
    height: 18,
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
              color: colors.primaryColor,
              fontWeight: 600,
            }}
          >
            arrow_back
          </span>
          <span
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: colors.primaryColor,
            }}
          >
            Return to services
          </span>
        </div>

        {/* Error Icon */}
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
            fontSize: 24,
            fontWeight: 800,
            color: colors.titleColor,
            textAlign: 'center',
            lineHeight: 1.2,
            marginBottom: 12,
            whiteSpace: 'pre-line',
          }}
        >
          {'Could Not Submit\nApplication'}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 14,
            color: colors.subtleText,
            textAlign: 'center',
            lineHeight: 1.4,
            marginBottom: 32,
            whiteSpace: 'pre-line',
          }}
        >
          {"We could not submit your application due to\na network or server error. Your data is saved —\ntry again."}
        </div>

        {/* What happens next - Journey Timeline */}
        <Ux4gJourneyTimeline
          header={{ title: 'What happens next' }}
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
        {/* Header */}
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
            text="Retry submission"
            onPress={() => setShowToast(true)}
            size="large"
            width="100%"
            height={48}
            backgroundColor={colors.btn1Bg}
            contentColor={colors.btn1Text}
          />

          <Ux4gButton
            text="Save draft"
            onPress={() => {}}
            variant="outline"
            size="large"
            width="100%"
            height={48}
            borderColor={colors.btn2Border}
            contentColor={colors.btn2Text}
          />

          <div
            onClick={() => {}}
            style={{
              textAlign: 'center',
              fontSize: 14,
              fontWeight: 600,
              color: colors.titleColor,
              cursor: 'pointer',
              paddingTop: 4,
            }}
          >
            Contact support
          </div>
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

        {/* Error Toast Notification overlay */}
        {showToast && (
          <div
            style={{
              position: 'absolute',
              top: 24,
              left: 16,
              right: 16,
              padding: 16,
              backgroundColor: colors.toastBg,
              borderRadius: 12,
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
              border: `1px solid ${isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}`,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              zIndex: 10,
              animation: 'fadeIn 0.2s ease',
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: 20,
                color: colors.errorIconColor,
                fontVariationSettings: "'FILL' 1",
                flexShrink: 0,
                marginTop: 1,
              }}
            >
              error
            </span>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: colors.titleColor,
                  lineHeight: 1.3,
                }}
              >
                Could not submit
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: colors.subtleText,
                  marginTop: 4,
                  lineHeight: 1.3,
                }}
              >
                Network or server issue
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowToast(false)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 2,
                color: colors.subtleText,
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
