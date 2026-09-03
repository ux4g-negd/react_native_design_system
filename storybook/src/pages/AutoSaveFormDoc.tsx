import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { Ux4gInputField } from '../../../src/components/input-field/InputField';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface AutoSaveFormDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

export const AutoSaveFormDoc: React.FC<AutoSaveFormDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');
  const [fullName, setFullName] = useState('Ramesh Kumar');
  const [dob, setDob] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const colors = useMemo(() => {
    return {
      screenBg: variant === 'Card style'
        ? (isDark ? UX4GColors.primary900 : UX4GColors.primary100)
        : (isDark ? UX4GColors.neutral950 : '#FAFAFA'),
      cardBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral800 : '#E5E7EB',
      headerBg: isDark ? UX4GColors.neutral950 : '#FFFFFF',
      titleColor: isDark ? UX4GColors.neutral50 : '#111827',
      subtleText: isDark ? UX4GColors.neutral400 : '#4B5563',
      bannerBg: isDark ? 'rgba(20, 83, 45, 0.2)' : '#F0FDF4',
      bannerText: isDark ? UX4GColors.green400 : UX4GColors.green700,
      bannerIcon: isDark ? UX4GColors.green400 : UX4GColors.green600,
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      pipelineLineCompleted: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      pipelineLineUpcoming: isDark ? UX4GColors.neutral800 : '#E5E7EB',
      pipelineNodeUpcoming: isDark ? UX4GColors.neutral700 : '#D1D5DB',
      pipelineNodeUpcomingText: isDark ? UX4GColors.neutral500 : '#9CA3AF',
      stepLabelColor: isDark ? UX4GColors.neutral50 : '#111827',
      footerText: isDark ? UX4GColors.neutral500 : '#9CA3AF',
    };
  }, [isDark, variant]);

  // Clean React Native TSX code snippet using UX4G components
  const codeString = useMemo(() => {
    const isCard = variant === 'Card style';
    if (isCard) {
      return `// Auto-save Form Screen Pattern (Card Style Layout)

import React, { useState } from 'react';
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
  Ux4gCard,
  Ux4gInputField,
  Ux4gStatusPipeline,
  Ux4gStatusBanner,
  Ux4gIcons,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const AutoSaveFormCardScreen = ({
  isDark = ${isDark},
  onContinue = () => {},
  onBack = () => {},
}: {
  isDark?: boolean;
  onContinue?: () => void;
  onBack?: () => void;
}) => {
  const [fullName] = useState('Ramesh Kumar');
  const [dob, setDob] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.primary900 : UX4GColors.primary100 },
      ]}
    >
      {/* Header Container */}
      <View style={{ backgroundColor: isDark ? UX4GColors.neutral950 : '#FFFFFF' }}>
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
        <Ux4gDivider
          color={isDark ? UX4GColors.neutral800 : '#E5E7EB'}
          thickness={1}
        />
      </View>

      {/* Main Content inside Ux4gCard */}
      <ScrollView
        contentContainerStyle={styles.cardScrollPadding}
        showsVerticalScrollIndicator={false}
      >
        <Ux4gCard
          cornerRadius={16}
          backgroundColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
          borderColor={isDark ? UX4GColors.neutral800 : 'transparent'}
          borderWidth={isDark ? 1 : 0}
          elevation={2}
        >
          <View style={styles.cardInner}>
            {/* Auto-save Banner using Ux4gStatusBanner */}
            <Ux4gStatusBanner
              variant="successLight"
              title="Saved 3:14 PM"
              leadingIcon={
                <Ux4gIcons.checkCircle
                  size={16}
                  color={isDark ? UX4GColors.green400 : UX4GColors.green600}
                />
              }
              marginStyle={{ marginHorizontal: 0, marginVertical: 0, marginBottom: 24 }}
              paddingStyle={{ paddingHorizontal: 16, paddingVertical: 12 }}
              containerStyle={{ justifyContent: 'flex-end' }}
              titleStyle={{
                fontSize: 12,
                fontWeight: '500',
                color: isDark ? UX4GColors.green400 : UX4GColors.green700,
              }}
            />

            {/* Status Pipeline */}
            <View style={styles.pipelineContainer}>
              <Ux4gStatusPipeline
                orientation="horizontal"
                size="s"
                currentStep={1}
                completedColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
                steps={[
                  { label: 'Eligibility' },
                  { label: 'Personal' },
                  { label: '' },
                  { label: '' },
                ]}
              />
            </View>

            {/* Form Title & Subtitle */}
            <Text
              style={[
                styles.headingText,
                { color: isDark ? UX4GColors.neutral50 : '#111827' },
              ]}
            >
              {'Section 2: Personal\\ninformation'}
            </Text>
            <Text
              style={[
                styles.subheadingText,
                { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
              ]}
            >
              {'Provide the personal details below.\\nWe will use this to verify your application.'}
            </Text>

            {/* Form Fields */}
            <View style={styles.fieldGroup}>
              <Text
                style={[
                  styles.fieldLabel,
                  { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
                ]}
              >
                Full name
              </Text>
              <Ux4gInputField
                value={fullName}
                onValueChange={() => {}}
                disabled={true}
              />
            </View>

            <View style={styles.fieldGroup}>
              <Text
                style={[
                  styles.fieldLabel,
                  { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
                ]}
              >
                Date of birth
              </Text>
              <Ux4gInputField
                value={dob}
                onValueChange={setDob}
                placeholder="DD/MM/YYYY"
              />
            </View>

            <View style={styles.fieldGroup}>
              <Text
                style={[
                  styles.fieldLabel,
                  { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
                ]}
              >
                Mobile number
              </Text>
              <Ux4gInputField
                value={mobileNumber}
                onValueChange={setMobileNumber}
                placeholder="Enter mobile number"
              />
            </View>
          </View>
        </Ux4gCard>
      </ScrollView>

      {/* Actions */}
      <View style={styles.actionsContainer}>
        <Ux4gButton
          text="Continue"
          onPress={onContinue}
          size="large"
          height={48}
          width="100%"
        />
        <View style={{ height: 12 }} />
        <Ux4gButton
          text="Back"
          onPress={onBack}
          variant="outline"
          size="large"
          height={48}
          width="100%"
          contentColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
          borderColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
        />
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <Text style={[styles.poweredByText, { color: isDark ? UX4GColors.neutral500 : '#9CA3AF' }]}>
          Powered by -
        </Text>
        <Image
          source={require('./assets/digital_india_logo.png')}
          style={[styles.digitalIndiaLogo, isDark && { tintColor: '#FFFFFF' }]}
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
  cardScrollPadding: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  cardInner: {
    padding: 24,
  },
  pipelineContainer: {
    marginBottom: 24,
  },
  headingText: {
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 28,
  },
  subheadingText: {
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
    marginBottom: 24,
  },
  fieldGroup: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 6,
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

    return `// Auto-save Form Screen Pattern (Default Layout)

import React, { useState } from 'react';
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
  Ux4gInputField,
  Ux4gStatusPipeline,
  Ux4gStatusBanner,
  Ux4gIcons,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const AutoSaveFormScreen = ({
  isDark = ${isDark},
  onContinue = () => {},
  onBack = () => {},
}: {
  isDark?: boolean;
  onContinue?: () => void;
  onBack?: () => void;
}) => {
  const [fullName] = useState('Ramesh Kumar');
  const [dob, setDob] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? UX4GColors.neutral950 : '#FAFAFA' },
      ]}
    >
      {/* Header with UX4G AppHeader & Ux4gDivider */}
      <Ux4gAppHeader
        variant="light"
        showBackButton={false}
        backgroundColor={isDark ? UX4GColors.neutral950 : '#FFFFFF'}
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
      <Ux4gDivider
        color={isDark ? UX4GColors.neutral800 : '#E5E7EB'}
        thickness={1}
      />

      {/* Main Content Area */}
      <ScrollView
        contentContainerStyle={styles.scrollPadding}
        showsVerticalScrollIndicator={false}
      >
        {/* Auto-save Banner using Ux4gStatusBanner */}
        <Ux4gStatusBanner
          variant="successLight"
          title="Saved 3:14 PM"
          leadingIcon={
            <Ux4gIcons.checkCircle
              size={16}
              color={isDark ? UX4GColors.green400 : UX4GColors.green600}
            />
          }
          marginStyle={{ marginHorizontal: 0, marginVertical: 0, marginBottom: 24 }}
          paddingStyle={{ paddingHorizontal: 16, paddingVertical: 12 }}
          containerStyle={{ justifyContent: 'flex-end' }}
          titleStyle={{
            fontSize: 12,
            fontWeight: '500',
            color: isDark ? UX4GColors.green400 : UX4GColors.green700,
          }}
        />

        {/* Status Pipeline */}
        <View style={styles.pipelineContainer}>
          <Ux4gStatusPipeline
            orientation="horizontal"
            size="s"
            currentStep={1}
            completedColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
            steps={[
              { label: 'Eligibility' },
              { label: 'Personal' },
              { label: '' },
              { label: '' },
            ]}
          />
        </View>

        {/* Form Title & Subtitle */}
        <Text
          style={[
            styles.headingText,
            { color: isDark ? UX4GColors.neutral50 : '#111827' },
          ]}
        >
          {'Section 2: Personal\\ninformation'}
        </Text>
        <Text
          style={[
            styles.subheadingText,
            { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
          ]}
        >
          {'Provide the personal details below.\\nWe will use this to verify your application.'}
        </Text>

        {/* Form Fields */}
        <View style={styles.fieldGroup}>
          <Text
            style={[
              styles.fieldLabel,
              { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
            ]}
          >
            Full name
          </Text>
          <Ux4gInputField
            value={fullName}
            onValueChange={() => {}}
            disabled={true}
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text
            style={[
              styles.fieldLabel,
              { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
            ]}
          >
            Date of birth
          </Text>
          <Ux4gInputField
            value={dob}
            onValueChange={setDob}
            placeholder="DD/MM/YYYY"
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text
            style={[
              styles.fieldLabel,
              { color: isDark ? UX4GColors.neutral400 : '#4B5563' },
            ]}
          >
            Mobile number
          </Text>
          <Ux4gInputField
            value={mobileNumber}
            onValueChange={setMobileNumber}
            placeholder="Enter mobile number"
          />
        </View>
      </ScrollView>

      {/* Actions */}
      <View style={styles.actionsContainer}>
        <Ux4gButton
          text="Continue"
          onPress={onContinue}
          size="large"
          height={48}
          width="100%"
        />
        <View style={{ height: 12 }} />
        <Ux4gButton
          text="Back"
          onPress={onBack}
          variant="outline"
          size="large"
          height={48}
          width="100%"
          contentColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
          borderColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
        />
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <Text style={[styles.poweredByText, { color: isDark ? UX4GColors.neutral500 : '#9CA3AF' }]}>
          Powered by -
        </Text>
        <Image
          source={require('./assets/digital_india_logo.png')}
          style={[styles.digitalIndiaLogo, isDark && { tintColor: '#FFFFFF' }]}
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
  scrollPadding: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  pipelineContainer: {
    marginBottom: 24,
  },
  headingText: {
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 28,
  },
  subheadingText: {
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
    marginBottom: 24,
  },
  fieldGroup: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 6,
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

  const renderStatusPipeline = () => {
    const isCard = variant === 'Card style';
    const innerSurface = isCard ? colors.cardBg : colors.screenBg;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {/* Circles & Connecting lines row */}
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          {/* Step 1: Completed Circle */}
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: colors.primaryColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              zIndex: 2,
            }}
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          {/* Line 1 (Active Purple Line) */}
          <div
            style={{
              flex: 1,
              height: 2,
              backgroundColor: colors.primaryColor,
            }}
          />

          {/* Step 2: Current (Hollow Purple Donut / Ring) */}
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: colors.primaryColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: 11,
                height: 11,
                borderRadius: '50%',
                backgroundColor: innerSurface,
              }}
            />
          </div>

          {/* Line 2 (Upcoming Light Gray Line) */}
          <div
            style={{
              flex: 1,
              height: 1.5,
              backgroundColor: colors.pipelineLineUpcoming,
            }}
          />

          {/* Step 3: Upcoming Outline Circle with '3' */}
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: 'transparent',
              border: `1.5px solid ${colors.pipelineNodeUpcoming}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxSizing: 'border-box',
              zIndex: 2,
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: colors.pipelineNodeUpcomingText,
                lineHeight: 1,
              }}
            >
              3
            </span>
          </div>

          {/* Line 3 (Upcoming Light Gray Line) */}
          <div
            style={{
              flex: 1,
              height: 1.5,
              backgroundColor: colors.pipelineLineUpcoming,
            }}
          />

          {/* Step 4: Upcoming Outline Circle with '4' */}
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: 'transparent',
              border: `1.5px solid ${colors.pipelineNodeUpcoming}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxSizing: 'border-box',
              zIndex: 2,
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: colors.pipelineNodeUpcomingText,
                lineHeight: 1,
              }}
            >
              4
            </span>
          </div>
        </div>

        {/* Row of labels aligned with circles */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            width: '100%',
            marginTop: 8,
          }}
        >
          {/* Label 1: Eligibility (aligned with Circle 1) */}
          <div
            style={{
              width: 20,
              display: 'flex',
              justifyContent: 'flex-start',
              overflow: 'visible',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                whiteSpace: 'nowrap',
                fontSize: 12,
                fontWeight: 600,
                color: colors.stepLabelColor,
                lineHeight: 1.2,
              }}
            >
              Eligibility
            </span>
          </div>

          {/* Spacer 1 */}
          <div style={{ flex: 1 }} />

          {/* Label 2: Personal (centered with Circle 2) */}
          <div
            style={{
              width: 20,
              display: 'flex',
              justifyContent: 'center',
              overflow: 'visible',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                whiteSpace: 'nowrap',
                fontSize: 12,
                fontWeight: 600,
                color: colors.stepLabelColor,
                lineHeight: 1.2,
              }}
            >
              Personal
            </span>
          </div>

          {/* Spacer 2 */}
          <div style={{ flex: 1 }} />

          {/* Spacer for Step 3 */}
          <div style={{ width: 20, flexShrink: 0 }} />

          {/* Spacer 3 */}
          <div style={{ flex: 1 }} />

          {/* Spacer for Step 4 */}
          <div style={{ width: 20, flexShrink: 0 }} />
        </div>
      </div>
    );
  };

  const renderFormContent = () => {
    return (
      <div>
        {/* Auto-save Banner */}
        <div
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: 8,
            backgroundColor: colors.bannerBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginBottom: 24,
            boxSizing: 'border-box',
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={colors.bannerIcon}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: 6 }}
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <span
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: colors.bannerText,
            }}
          >
            Saved 3:14 PM
          </span>
        </div>

        {/* Progress Pipeline */}
        <div style={{ marginBottom: 24 }}>
          {renderStatusPipeline()}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: colors.titleColor,
            lineHeight: 1.2,
            whiteSpace: 'pre-line',
            marginBottom: 8,
          }}
        >
          {'Section 2: Personal\ninformation'}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 14,
            color: colors.subtleText,
            lineHeight: 1.5,
            whiteSpace: 'pre-line',
            marginBottom: 24,
          }}
        >
          {'Provide the personal details below.\nWe will use this to verify your application.'}
        </div>

        {/* Form Fields */}
        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: colors.subtleText,
              marginBottom: 6,
            }}
          >
            Full name
          </div>
          <input
            type="text"
            value={fullName}
            readOnly
            disabled
            style={{
              width: '100%',
              height: 40,
              padding: '0 12px',
              borderRadius: 6,
              border: `1px solid ${colors.border}`,
              backgroundColor: isDark ? UX4GColors.neutral800 : '#F3F4F6',
              color: isDark ? UX4GColors.neutral400 : '#6B7280',
              fontSize: 14,
              boxSizing: 'border-box',
              cursor: 'not-allowed',
            }}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: colors.subtleText,
              marginBottom: 6,
            }}
          >
            Date of birth
          </div>
          <input
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            placeholder="DD/MM/YYYY"
            style={{
              width: '100%',
              height: 40,
              padding: '0 12px',
              borderRadius: 6,
              border: `1px solid ${colors.border}`,
              backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
              color: colors.titleColor,
              fontSize: 14,
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: colors.subtleText,
              marginBottom: 6,
            }}
          >
            Mobile number
          </div>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter mobile number"
            style={{
              width: '100%',
              height: 40,
              padding: '0 12px',
              borderRadius: 6,
              border: `1px solid ${colors.border}`,
              backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
              color: colors.titleColor,
              fontSize: 14,
              boxSizing: 'border-box',
            }}
          />
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
                  height: 38,
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
                border: `1px solid ${isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 20,
                  color: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
                }}
              >
                menu
              </span>
            </div>
          </div>
          <Ux4gDivider color={colors.border} thickness={1} />
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
              padding: '24px',
            }}
          >
            {isCard ? (
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: 24,
                  border: isDark ? `1px solid ${UX4GColors.neutral800}` : 'none',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
                }}
              >
                {renderFormContent()}
              </div>
            ) : (
              renderFormContent()
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
            backgroundColor: isCard ? (isDark ? UX4GColors.primary900 : UX4GColors.primary100) : colors.screenBg,
            flexShrink: 0,
          }}
        >
          {/* Continue Button */}
          <Ux4gButton
            text="Continue"
            onPress={() => {}}
            height={48}
            size="large"
            width="100%"
          />

          {/* Back Button */}
          <Ux4gButton
            text="Back"
            variant="outline"
            onPress={() => {}}
            height={48}
            size="large"
            width="100%"
            contentColor={colors.primaryColor}
            borderColor={colors.primaryColor}
          />
        </div>

        {/* Powered by Footer */}
        <div
          style={{
            padding: '0 0 24px 0',
            textAlign: 'center',
            backgroundColor: isCard ? (isDark ? UX4GColors.primary900 : UX4GColors.primary100) : colors.screenBg,
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
          <h1 className="wb-title">Auto-save Form</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A pattern showing a multi-step form with an auto-save banner at the top.
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

export default AutoSaveFormDoc;
