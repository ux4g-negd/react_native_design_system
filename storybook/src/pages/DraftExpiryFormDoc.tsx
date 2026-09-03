import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gButton } from '../../../src/components/button/Button';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { UnionLogo } from '../components/UnionLogo';
import { CodeBlock } from '../components/CodeBlock';

interface DraftExpiryFormDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

export const DraftExpiryFormDoc: React.FC<DraftExpiryFormDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');
  const [fullName] = useState('Ramesh Kumar');
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
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      bodyText: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700,
      subtleText: isDark ? UX4GColors.neutral400 : '#4B5563',
      bannerBg: isDark ? '#2D1500' : '#FFF7ED',
      bannerIconCircle: isDark ? '#7C2D12' : '#FFEDD5',
      bannerIcon: isDark ? '#FDBA74' : '#C2410C',
      bannerTagBg: isDark ? '#7C2D12' : '#FFEDD5',
      bannerTagText: isDark ? '#FDBA74' : '#9A3412',
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      pipelineLineCompleted: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      pipelineLineUpcoming: isDark ? UX4GColors.neutral800 : '#E5E7EB',
      pipelineNodeUpcoming: isDark ? UX4GColors.neutral700 : '#D1D5DB',
      pipelineNodeUpcomingText: isDark ? UX4GColors.neutral500 : '#9CA3AF',
      stepLabelColor: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700,
      footerText: isDark ? UX4GColors.neutral500 : '#9CA3AF',
    };
  }, [isDark, variant]);

  // Clean React Native TSX code snippet using UX4G components
  const codeString = useMemo(() => {
    const isCard = variant === 'Card style';
    if (isCard) {
      return `// Draft Expiry Form Screen Pattern (Card Style Layout)

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

export const DraftExpiryFormCardScreen = ({
  isDark = ${isDark},
  onContinue = () => {},
  onSaveDraft = () => {},
}: {
  isDark?: boolean;
  onContinue?: () => void;
  onSaveDraft?: () => void;
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
          cornerRadius={8}
          backgroundColor={isDark ? UX4GColors.neutral900 : '#FFFFFF'}
          borderColor={isDark ? UX4GColors.neutral800 : 'transparent'}
          borderWidth={isDark ? 1 : 0}
          elevation={2}
        >
          <View style={styles.cardInner}>
            {/* Draft Expiry Banner using Ux4gStatusBanner */}
            <Ux4gStatusBanner
              variant="warningLight"
              title="Your draft expires in 5 days"
              leadingIcon={
                <View
                  style={[
                    styles.bannerIconContainer,
                    {
                      backgroundColor: isDark ? '#7C2D12' : '#FFEDD5',
                    },
                  ]}
                >
                  <Ux4gIcons.inventory
                    size={16}
                    color={isDark ? '#FDBA74' : '#C2410C'}
                  />
                </View>
              }
              trailingIcon={
                <View
                  style={[
                    styles.dateTag,
                    {
                      backgroundColor: isDark ? '#7C2D12' : '#FFEDD5',
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.dateTagText,
                      { color: isDark ? '#FDBA74' : '#9A3412' },
                    ]}
                  >
                    16 Apr
                  </Text>
                </View>
              }
              marginStyle={{ marginHorizontal: 0, marginVertical: 0, marginBottom: 15 }}
              paddingStyle={{ paddingHorizontal: 15, paddingVertical: 12 }}
              backgroundColor={isDark ? '#2D1500' : '#FFF7ED'}
              borderColor="transparent"
              titleStyle={{
                fontSize: 12,
                fontWeight: '600',
                color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
              }}
            />

            {/* Status Pipeline / Stepper */}
            <View style={styles.pipelineContainer}>
              <Ux4gStatusPipeline
                orientation="horizontal"
                size="s"
                currentStep={1}
                completedColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
                currentColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
                completedLineColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
                steps={[
                  { label: 'Eligibility' },
                  { label: 'Personal' },
                  { label: '' },
                  { label: '' },
                ]}
              />
            </View>

            {/* Title & Subtitle */}
            <Text
              style={[
                styles.headingText,
                { color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900 },
              ]}
            >
              {'Section 2: Personal\\ninformation'}
            </Text>
            <Text
              style={[
                styles.subheadingText,
                { color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 },
              ]}
            >
              {'Provide the personal details below. We will use\\nthis to verify your application.'}
            </Text>

            {/* Form Fields */}
            <View style={styles.fieldGroup}>
              <Text
                style={[
                  styles.fieldLabel,
                  { color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 },
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
                  { color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 },
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
                  { color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 },
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
          height={40}
          borderRadius={6}
          width="100%"
        />
        <View style={{ height: 7 }} />
        <Ux4gButton
          text="Save draft"
          onPress={onSaveDraft}
          variant="outline"
          size="large"
          height={40}
          borderRadius={6}
          width="100%"
          contentColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
          borderColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
        />
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <Text style={[styles.poweredByText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral700 }]}>
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
    height: 34,
    width: 24,
  },
  verticalDivider: {
    height: 36,
    width: 1,
  },
  unionIcon: {
    height: 32,
    width: 44,
  },
  cardScrollPadding: {
    paddingHorizontal: 14,
    paddingTop: 18,
    paddingBottom: 12,
  },
  cardInner: {
    paddingHorizontal: 14,
    paddingVertical: 16,
  },
  bannerIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  dateTagText: {
    fontSize: 10,
    fontWeight: '500',
  },
  pipelineContainer: {
    marginBottom: 15,
  },
  headingText: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 23,
    marginBottom: 6,
  },
  subheadingText: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 15,
  },
  fieldGroup: {
    marginBottom: 12,
  },
  fieldLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  actionsContainer: {
    paddingHorizontal: 14,
    paddingTop: 8,
    paddingBottom: 0,
  },
  footerContainer: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 7,
  },
  poweredByText: {
    fontSize: 10,
    marginBottom: 4,
  },
  digitalIndiaLogo: {
    height: 22,
    width: 80,
  },
});`;
    }

    return `// Draft Expiry Form Screen Pattern (Default Layout)

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

export const DraftExpiryFormScreen = ({
  isDark = ${isDark},
  onContinue = () => {},
  onSaveDraft = () => {},
}: {
  isDark?: boolean;
  onContinue?: () => void;
  onSaveDraft?: () => void;
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
        {/* Draft Expiry Banner using Ux4gStatusBanner */}
        <Ux4gStatusBanner
          variant="warningLight"
          title="Your draft expires in 5 days"
          leadingIcon={
            <View
              style={[
                styles.bannerIconContainer,
                {
                  backgroundColor: isDark ? '#7C2D12' : '#FFEDD5',
                },
              ]}
            >
              <Ux4gIcons.inventory
                size={16}
                color={isDark ? '#FDBA74' : '#C2410C'}
              />
            </View>
          }
          trailingIcon={
            <View
              style={[
                styles.dateTag,
                {
                  backgroundColor: isDark ? '#7C2D12' : '#FFEDD5',
                },
              ]}
            >
              <Text
                style={[
                  styles.dateTagText,
                  { color: isDark ? '#FDBA74' : '#9A3412' },
                ]}
              >
                16 Apr
              </Text>
            </View>
          }
          marginStyle={{ marginHorizontal: 0, marginVertical: 0, marginBottom: 15 }}
          paddingStyle={{ paddingHorizontal: 15, paddingVertical: 12 }}
          backgroundColor={isDark ? '#2D1500' : '#FFF7ED'}
          borderColor="transparent"
          titleStyle={{
            fontSize: 12,
            fontWeight: '600',
            color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
          }}
        />

        {/* Status Pipeline / Stepper */}
        <View style={styles.pipelineContainer}>
          <Ux4gStatusPipeline
            orientation="horizontal"
            size="s"
            currentStep={1}
            completedColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
            currentColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
            completedLineColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
            steps={[
              { label: 'Eligibility' },
              { label: 'Personal' },
              { label: '' },
              { label: '' },
            ]}
          />
        </View>

        {/* Title & Subtitle */}
        <Text
          style={[
            styles.headingText,
            { color: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900 },
          ]}
        >
          {'Section 2: Personal\\ninformation'}
        </Text>
        <Text
          style={[
            styles.subheadingText,
            { color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 },
          ]}
        >
          {'Provide the personal details below. We will use\\nthis to verify your application.'}
        </Text>

        {/* Form Fields */}
        <View style={styles.fieldGroup}>
          <Text
            style={[
              styles.fieldLabel,
              { color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 },
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
              { color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 },
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
              { color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 },
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
          height={40}
          borderRadius={6}
          width="100%"
        />
        <View style={{ height: 7 }} />
        <Ux4gButton
          text="Save draft"
          onPress={onSaveDraft}
          variant="outline"
          size="large"
          height={40}
          borderRadius={6}
          width="100%"
          contentColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
          borderColor={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
        />
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <Text style={[styles.poweredByText, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral700 }]}>
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
    height: 34,
    width: 24,
  },
  verticalDivider: {
    height: 36,
    width: 1,
  },
  unionIcon: {
    height: 32,
    width: 44,
  },
  scrollPadding: {
    paddingHorizontal: 14,
    paddingTop: 18,
    paddingBottom: 12,
  },
  bannerIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  dateTagText: {
    fontSize: 10,
    fontWeight: '500',
  },
  pipelineContainer: {
    marginBottom: 15,
  },
  headingText: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 23,
    marginBottom: 6,
  },
  subheadingText: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 15,
  },
  fieldGroup: {
    marginBottom: 12,
  },
  fieldLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  actionsContainer: {
    paddingHorizontal: 14,
    paddingTop: 8,
    paddingBottom: 0,
  },
  footerContainer: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 7,
  },
  poweredByText: {
    fontSize: 10,
    marginBottom: 4,
  },
  digitalIndiaLogo: {
    height: 22,
    width: 80,
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
              width: 18,
              height: 18,
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
              width="10"
              height="10"
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
              height: 2.5,
              backgroundColor: colors.primaryColor,
            }}
          />

          {/* Step 2: Current (Hollow Purple Donut / Ring) */}
          <div
            style={{
              width: 18,
              height: 18,
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
                width: 10,
                height: 10,
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
              width: 18,
              height: 18,
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
                fontSize: 9,
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
              width: 18,
              height: 18,
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
                fontSize: 9,
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
            marginTop: 6,
          }}
        >
          {/* Label 1: Eligibility */}
          <div
            style={{
              width: 18,
              display: 'flex',
              justifyContent: 'flex-start',
              overflow: 'visible',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                whiteSpace: 'nowrap',
                fontSize: 11,
                fontWeight: 500,
                color: colors.stepLabelColor,
                lineHeight: 1.2,
              }}
            >
              Eligibility
            </span>
          </div>

          {/* Spacer 1 */}
          <div style={{ flex: 1 }} />

          {/* Label 2: Personal */}
          <div
            style={{
              width: 18,
              display: 'flex',
              justifyContent: 'center',
              overflow: 'visible',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                whiteSpace: 'nowrap',
                fontSize: 11,
                fontWeight: 500,
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
          <div style={{ width: 18, flexShrink: 0 }} />

          {/* Spacer 3 */}
          <div style={{ flex: 1 }} />

          {/* Spacer for Step 4 */}
          <div style={{ width: 18, flexShrink: 0 }} />
        </div>
      </div>
    );
  };

  const renderFormContent = () => {
    return (
      <div>
        {/* Draft Expiry Banner */}
        <div
          style={{
            width: '100%',
            padding: '12px 15px',
            borderRadius: 8,
            backgroundColor: colors.bannerBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 15,
            boxSizing: 'border-box',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                backgroundColor: colors.bannerIconCircle,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={colors.bannerIcon}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 8v13H3V8" />
                <path d="M1 3h22v5H1z" />
                <path d="M10 12h4" />
              </svg>
            </div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: colors.titleColor,
              }}
            >
              Your draft expires in 5 days
            </span>
          </div>

          <div
            style={{
              padding: '4px 8px',
              borderRadius: 4,
              backgroundColor: colors.bannerTagBg,
              fontSize: 10,
              fontWeight: 500,
              color: colors.bannerTagText,
              flexShrink: 0,
            }}
          >
            16 Apr
          </div>
        </div>

        {/* Progress Pipeline */}
        <div style={{ marginBottom: 15 }}>
          {renderStatusPipeline()}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: colors.titleColor,
            lineHeight: 1.15,
            whiteSpace: 'pre-line',
            marginBottom: 6,
          }}
        >
          {'Section 2: Personal\ninformation'}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 13,
            color: colors.bodyText,
            lineHeight: 1.4,
            whiteSpace: 'pre-line',
            marginBottom: 15,
          }}
        >
          {'Provide the personal details below. We will use\nthis to verify your application.'}
        </div>

        {/* Form Fields */}
        <div style={{ marginBottom: 12 }}>
          <div
            style={{
              fontSize: 12,
              color: colors.bodyText,
              marginBottom: 4,
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
              backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF',
              color: colors.titleColor,
              fontSize: 13,
              boxSizing: 'border-box',
              cursor: 'not-allowed',
            }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <div
            style={{
              fontSize: 12,
              color: colors.bodyText,
              marginBottom: 4,
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
              fontSize: 13,
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <div
            style={{
              fontSize: 12,
              color: colors.bodyText,
              marginBottom: 4,
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
              fontSize: 13,
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
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <img
                src="/national_emblem_logo.svg"
                alt="National Emblem"
                style={{
                  height: 34,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />
              <div
                style={{
                  width: 1,
                  height: 36,
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
              padding: '18px 14px 12px 14px',
            }}
          >
            {isCard ? (
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 8,
                  padding: '16px 14px',
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
            padding: '8px 14px 0 14px',
            display: 'flex',
            flexDirection: 'column',
            gap: 7,
            backgroundColor: isCard ? (isDark ? UX4GColors.primary900 : UX4GColors.primary100) : colors.screenBg,
            flexShrink: 0,
          }}
        >
          {/* Continue Button */}
          <Ux4gButton
            text="Continue"
            onPress={() => {}}
            height={40}
            size="large"
            width="100%"
          />

          {/* Save draft Button */}
          <Ux4gButton
            text="Save draft"
            variant="outline"
            onPress={() => {}}
            height={40}
            size="large"
            width="100%"
            contentColor={colors.primaryColor}
            borderColor={colors.primaryColor}
          />
        </div>

        {/* Powered by Footer */}
        <div
          style={{
            padding: '16px 0 7px 0',
            textAlign: 'center',
            backgroundColor: isCard ? (isDark ? UX4GColors.primary900 : UX4GColors.primary100) : colors.screenBg,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontSize: 10,
              color: colors.bodyText,
            }}
          >
            Powered by -
          </div>
          <img
            src="/Digital_India_logo.svg"
            alt="Digital India"
            style={{
              height: 22,
              marginTop: 4,
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
          <h1 className="wb-title">Draft Expiry Form</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A save-and-resume form showing draft expiry, journey progress, personal details, and save actions.
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

export default DraftExpiryFormDoc;
