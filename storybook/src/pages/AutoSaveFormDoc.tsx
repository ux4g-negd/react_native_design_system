import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
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
    const isCard = variant === 'Card style';
    return {
      screenBg: isCard
        ? (isDark ? UX4GColors.primary900 : '#ECE8FF')
        : (isDark ? UX4GColors.neutral900 : '#FFFFFF'),
      cardBg: isDark ? UX4GColors.neutral800 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      headerBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      titleColor: isDark ? UX4GColors.neutral0 : '#111827',
      subtleText: isDark ? UX4GColors.neutral400 : '#4B5563',
      bannerBg: isDark ? 'rgba(20, 83, 45, 0.25)' : '#F2FCEF',
      bannerText: isDark ? UX4GColors.green400 : '#00522C',
      bannerIcon: isDark ? UX4GColors.green400 : '#128937',
      primaryColor: isDark ? UX4GColors.primary300 : '#432CBB',
      primaryBtnBg: isDark ? UX4GColors.primary300 : '#432CBB',
      primaryBtnText: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      outlineBtnBorder: isDark ? UX4GColors.primary300 : '#C7D2FE',
      outlineBtnText: isDark ? UX4GColors.primary300 : '#432CBB',
      inputBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      inputBorder: isDark ? UX4GColors.neutral700 : '#E5E7EB',
      inputTextColor: isDark ? UX4GColors.neutral0 : '#111827',
      inputPlaceholder: isDark ? UX4GColors.neutral500 : '#6B7280',
      pipelineLineActive: isDark ? UX4GColors.primary300 : '#432CBB',
      pipelineLineUpcoming: isDark ? UX4GColors.neutral700 : '#D1D5DB',
      pipelineNodeUpcoming: isDark ? UX4GColors.neutral600 : '#D1D5DB',
      pipelineNodeUpcomingText: isDark ? UX4GColors.neutral400 : '#6B7280',
      stepLabelActive: isDark ? UX4GColors.neutral0 : '#111827',
      stepLabelUpcoming: isDark ? UX4GColors.neutral400 : '#6B7280',
      footerText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
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
  Ux4gStatusBanner,
  Ux4gIcons,
  UX4GColors,
} from 'ux4g-react-native-components';

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
        <Ux4gDivider
          color={isDark ? UX4GColors.neutral800 : '#F0F0F2'}
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
          backgroundColor={isDark ? UX4GColors.neutral800 : '#FFFFFF'}
          borderColor={isDark ? UX4GColors.neutral700 : 'rgba(0,0,0,0.04)'}
          borderWidth={1}
          elevation={2}
        >
          <View style={styles.cardInner}>
            {/* Auto-save Status Banner */}
            <Ux4gStatusBanner
              variant="successLight"
              title="Saved 3:14 PM"
              leadingIcon={
                <Ux4gIcons.checkCircle
                  size={16}
                  color={isDark ? UX4GColors.green400 : '#128937'}
                />
              }
              marginStyle={{ marginHorizontal: 0, marginVertical: 0, marginBottom: 20 }}
              paddingStyle={{ paddingHorizontal: 16, paddingVertical: 10 }}
              containerStyle={{ justifyContent: 'flex-end', borderRadius: 8 }}
              titleStyle={{
                fontSize: 12,
                fontWeight: '500',
                color: isDark ? UX4GColors.green400 : '#00522C',
              }}
            />

            {/* Stepper / Progress Pipeline */}
            <View style={styles.pipelineWrapper}>
              <View style={styles.pipelineRow}>
                {/* Step 1 - Completed */}
                <View style={[styles.stepCircle, styles.stepCompleted]}>
                  <Text style={styles.stepCheckmark}>✓</Text>
                </View>
                <View style={[styles.pipelineLine, styles.pipelineLineActive]} />

                {/* Step 2 - Current */}
                <View style={[styles.stepCircle, styles.stepActive]}>
                  <View style={styles.stepActiveInner} />
                </View>
                <View style={[styles.pipelineLine, styles.pipelineLineInactive]} />

                {/* Step 3 - Upcoming */}
                <View style={[styles.stepCircle, styles.stepUpcoming]}>
                  <Text style={styles.stepNumberText}>3</Text>
                </View>
                <View style={[styles.pipelineLine, styles.pipelineLineInactive]} />

                {/* Step 4 - Upcoming */}
                <View style={[styles.stepCircle, styles.stepUpcoming]}>
                  <Text style={styles.stepNumberText}>4</Text>
                </View>
              </View>

              {/* Step Labels */}
              <View style={styles.labelsRow}>
                <View style={styles.stepLabelItem}>
                  <Text style={[styles.stepLabel, { color: isDark ? UX4GColors.neutral0 : '#111827' }]}>
                    Eligibility
                  </Text>
                </View>
                <View style={styles.stepLabelItem}>
                  <Text style={[styles.stepLabel, { color: isDark ? UX4GColors.neutral0 : '#111827' }]}>
                    Personal
                  </Text>
                </View>
                <View style={styles.stepLabelItem}>
                  <Text style={[styles.stepLabel, { color: isDark ? UX4GColors.neutral400 : '#6B7280' }]}>
                    Documents
                  </Text>
                </View>
                <View style={styles.stepLabelItem}>
                  <Text style={[styles.stepLabel, { color: isDark ? UX4GColors.neutral400 : '#6B7280' }]}>
                    Submit
                  </Text>
                </View>
              </View>
            </View>

            {/* Title & Subtitle */}
            <Text
              style={[
                styles.headingText,
                { color: isDark ? UX4GColors.neutral0 : '#111827' },
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
              Provide the personal details below. We will use this to verify your application.
            </Text>

            {/* Form Fields */}
            <View style={styles.fieldGroup}>
              <Text
                style={[
                  styles.fieldLabel,
                  { color: isDark ? UX4GColors.neutral0 : '#111827' },
                ]}
              >
                Full name
              </Text>
              <Ux4gInputField
                value={fullName}
                onValueChange={() => {}}
                placeholder="Ramesh Kumar"
              />
            </View>

            <View style={styles.fieldGroup}>
              <Text
                style={[
                  styles.fieldLabel,
                  { color: isDark ? UX4GColors.neutral0 : '#111827' },
                ]}
              >
                Date of birth
              </Text>
              <Ux4gInputField
                value={dob}
                onValueChange={setDob}
                placeholder="Placeholder"
              />
            </View>

            <View style={styles.fieldGroup}>
              <Text
                style={[
                  styles.fieldLabel,
                  { color: isDark ? UX4GColors.neutral0 : '#111827' },
                ]}
              >
                Mobile number
              </Text>
              <Ux4gInputField
                value={mobileNumber}
                onValueChange={setMobileNumber}
                placeholder="Placeholder"
              />
            </View>

            {/* Action Buttons inside Card */}
            <View style={styles.buttonGroup}>
              <Ux4gButton
                text="Continue"
                onPress={onContinue}
                size="large"
                height={46}
                width="100%"
              />
              <View style={{ height: 12 }} />
              <Ux4gButton
                text="Back"
                onPress={onBack}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  emblemIcon: {
    height: 36,
    width: 28,
  },
  verticalDivider: {
    height: 28,
    width: 1,
    marginHorizontal: 8,
  },
  unionIcon: {
    height: 30,
    width: 40,
  },
  cardScrollPadding: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  cardInner: {
    padding: 18,
  },
  pipelineWrapper: {
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  pipelineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  stepCompleted: {
    backgroundColor: '#432CBB',
  },
  stepActive: {
    backgroundColor: '#432CBB',
  },
  stepActiveInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  stepUpcoming: {
    borderWidth: 1.5,
    borderColor: '#D1D5DB',
    backgroundColor: 'transparent',
  },
  stepCheckmark: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  stepNumberText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#6B7280',
  },
  pipelineLine: {
    flex: 1,
    height: 2.5,
    marginHorizontal: 4,
  },
  pipelineLineActive: {
    backgroundColor: '#432CBB',
  },
  pipelineLineInactive: {
    backgroundColor: '#D1D5DB',
  },
  labelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  stepLabelItem: {
    width: 20,
    alignItems: 'center',
  },
  stepLabel: {
    fontSize: 12,
    fontWeight: '600',
    width: 64,
    textAlign: 'center',
  },
  headingText: {
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 28,
  },
  subheadingText: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 6,
    marginBottom: 20,
  },
  fieldGroup: {
    marginBottom: 14,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 6,
  },
  buttonGroup: {
    width: '100%',
    marginTop: 18,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 20,
    paddingBottom: 16,
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
  Ux4gStatusBanner,
  Ux4gIcons,
  UX4GColors,
} from 'ux4g-react-native-components';

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
        { backgroundColor: isDark ? UX4GColors.neutral900 : '#FFFFFF' },
      ]}
    >
      {/* Header with UX4G AppHeader & Ux4gDivider */}
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
      <Ux4gDivider
        color={isDark ? UX4GColors.neutral800 : '#F0F0F2'}
        thickness={1}
      />

      {/* Main Content Area */}
      <ScrollView
        contentContainerStyle={styles.scrollPadding}
        showsVerticalScrollIndicator={false}
      >
        {/* Auto-save Status Banner */}
        <Ux4gStatusBanner
          variant="successLight"
          title="Saved 3:14 PM"
          leadingIcon={
            <Ux4gIcons.checkCircle
              size={16}
              color={isDark ? UX4GColors.green400 : '#128937'}
            />
          }
          marginStyle={{ marginHorizontal: 0, marginVertical: 0, marginBottom: 20 }}
          paddingStyle={{ paddingHorizontal: 16, paddingVertical: 10 }}
          containerStyle={{ justifyContent: 'flex-end', borderRadius: 8 }}
          titleStyle={{
            fontSize: 12,
            fontWeight: '500',
            color: isDark ? UX4GColors.green400 : '#00522C',
          }}
        />

        {/* Stepper / Progress Pipeline */}
        <View style={styles.pipelineWrapper}>
          <View style={styles.pipelineRow}>
            {/* Step 1 - Completed */}
            <View style={[styles.stepCircle, styles.stepCompleted]}>
              <Text style={styles.stepCheckmark}>✓</Text>
            </View>
            <View style={[styles.pipelineLine, styles.pipelineLineActive]} />

            {/* Step 2 - Current */}
            <View style={[styles.stepCircle, styles.stepActive]}>
              <View style={styles.stepActiveInner} />
            </View>
            <View style={[styles.pipelineLine, styles.pipelineLineInactive]} />

            {/* Step 3 - Upcoming */}
            <View style={[styles.stepCircle, styles.stepUpcoming]}>
              <Text style={styles.stepNumberText}>3</Text>
            </View>
            <View style={[styles.pipelineLine, styles.pipelineLineInactive]} />

            {/* Step 4 - Upcoming */}
            <View style={[styles.stepCircle, styles.stepUpcoming]}>
              <Text style={styles.stepNumberText}>4</Text>
            </View>
          </View>

          {/* Step Labels */}
          <View style={styles.labelsRow}>
            <View style={styles.stepLabelItem}>
              <Text style={[styles.stepLabel, { color: isDark ? UX4GColors.neutral0 : '#111827' }]}>
                Eligibility
              </Text>
            </View>
            <View style={styles.stepLabelItem}>
              <Text style={[styles.stepLabel, { color: isDark ? UX4GColors.neutral0 : '#111827' }]}>
                Personal
              </Text>
            </View>
            <View style={styles.stepLabelItem}>
              <Text style={[styles.stepLabel, { color: isDark ? UX4GColors.neutral400 : '#6B7280' }]}>
                Documents
              </Text>
            </View>
            <View style={styles.stepLabelItem}>
              <Text style={[styles.stepLabel, { color: isDark ? UX4GColors.neutral400 : '#6B7280' }]}>
                Submit
              </Text>
            </View>
          </View>
        </View>

        {/* Title & Subtitle */}
        <Text
          style={[
            styles.headingText,
            { color: isDark ? UX4GColors.neutral0 : '#111827' },
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
          Provide the personal details below. We will use this to verify your application.
        </Text>

        {/* Form Fields */}
        <View style={styles.fieldGroup}>
          <Text
            style={[
              styles.fieldLabel,
              { color: isDark ? UX4GColors.neutral0 : '#111827' },
            ]}
          >
            Full name
          </Text>
          <Ux4gInputField
            value={fullName}
            onValueChange={() => {}}
            placeholder="Ramesh Kumar"
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text
            style={[
              styles.fieldLabel,
              { color: isDark ? UX4GColors.neutral0 : '#111827' },
            ]}
          >
            Date of birth
          </Text>
          <Ux4gInputField
            value={dob}
            onValueChange={setDob}
            placeholder="Placeholder"
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text
            style={[
              styles.fieldLabel,
              { color: isDark ? UX4GColors.neutral0 : '#111827' },
            ]}
          >
            Mobile number
          </Text>
          <Ux4gInputField
            value={mobileNumber}
            onValueChange={setMobileNumber}
            placeholder="Placeholder"
          />
        </View>

        {/* Actions */}
        <View style={styles.buttonGroup}>
          <Ux4gButton
            text="Continue"
            onPress={onContinue}
            size="large"
            height={46}
            width="100%"
          />
          <View style={{ height: 12 }} />
          <Ux4gButton
            text="Back"
            onPress={onBack}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  emblemIcon: {
    height: 36,
    width: 28,
  },
  verticalDivider: {
    height: 28,
    width: 1,
    marginHorizontal: 8,
  },
  unionIcon: {
    height: 30,
    width: 40,
  },
  scrollPadding: {
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
  pipelineWrapper: {
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  pipelineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  stepCompleted: {
    backgroundColor: '#432CBB',
  },
  stepActive: {
    backgroundColor: '#432CBB',
  },
  stepActiveInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  stepUpcoming: {
    borderWidth: 1.5,
    borderColor: '#D1D5DB',
    backgroundColor: 'transparent',
  },
  stepCheckmark: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  stepNumberText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#6B7280',
  },
  pipelineLine: {
    flex: 1,
    height: 2.5,
    marginHorizontal: 4,
  },
  pipelineLineActive: {
    backgroundColor: '#432CBB',
  },
  pipelineLineInactive: {
    backgroundColor: '#D1D5DB',
  },
  labelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  stepLabelItem: {
    width: 20,
    alignItems: 'center',
  },
  stepLabel: {
    fontSize: 12,
    fontWeight: '600',
    width: 64,
    textAlign: 'center',
  },
  headingText: {
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 28,
  },
  subheadingText: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 6,
    marginBottom: 20,
  },
  fieldGroup: {
    marginBottom: 14,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 6,
  },
  buttonGroup: {
    width: '100%',
    marginTop: 18,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 24,
    paddingBottom: 16,
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
  }, [isDark, variant]);

  const renderStatusPipeline = () => {
    const isCard = variant === 'Card style';
    const innerSurface = isCard ? colors.cardBg : colors.screenBg;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: '0 12px',
          boxSizing: 'border-box',
        }}
      >
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
            <span
              style={{
                color: '#FFFFFF',
                fontSize: 11,
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              ✓
            </span>
          </div>

          {/* Line 1 (Active Purple Line) */}
          <div
            style={{
              flex: 1,
              height: 2.5,
              backgroundColor: colors.pipelineLineActive,
              margin: '0 4px',
            }}
          />

          {/* Step 2: Current (Concentric Target Dot) */}
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
              height: 2.5,
              backgroundColor: colors.pipelineLineUpcoming,
              margin: '0 4px',
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
              height: 2.5,
              backgroundColor: colors.pipelineLineUpcoming,
              margin: '0 4px',
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
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 6,
          }}
        >
          {/* Label 1: Eligibility */}
          <div style={{ width: 20, display: 'flex', justifyContent: 'center', overflow: 'visible' }}>
            <span
              style={{
                whiteSpace: 'nowrap',
                fontSize: 12,
                fontWeight: 600,
                color: colors.stepLabelActive,
                lineHeight: 1.2,
              }}
            >
              Eligibility
            </span>
          </div>

          {/* Label 2: Personal */}
          <div style={{ width: 20, display: 'flex', justifyContent: 'center', overflow: 'visible' }}>
            <span
              style={{
                whiteSpace: 'nowrap',
                fontSize: 12,
                fontWeight: 600,
                color: colors.stepLabelActive,
                lineHeight: 1.2,
              }}
            >
              Personal
            </span>
          </div>

          {/* Label 3: Documents */}
          <div style={{ width: 20, display: 'flex', justifyContent: 'center', overflow: 'visible' }}>
            <span
              style={{
                whiteSpace: 'nowrap',
                fontSize: 12,
                fontWeight: 600,
                color: colors.stepLabelUpcoming,
                lineHeight: 1.2,
              }}
            >
              Documents
            </span>
          </div>

          {/* Label 4: Submit */}
          <div style={{ width: 20, display: 'flex', justifyContent: 'center', overflow: 'visible' }}>
            <span
              style={{
                whiteSpace: 'nowrap',
                fontSize: 12,
                fontWeight: 600,
                color: colors.stepLabelUpcoming,
                lineHeight: 1.2,
              }}
            >
              Submit
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderFormContent = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Auto-save Banner */}
        <div
          style={{
            width: '100%',
            padding: '10px 16px',
            borderRadius: 8,
            backgroundColor: colors.bannerBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginBottom: 20,
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
        <div style={{ marginBottom: 20 }}>
          {renderStatusPipeline()}
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: colors.titleColor,
            margin: '0 0 6px 0',
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
          }}
        >
          Section 2: Personal information
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 14,
            color: colors.subtleText,
            margin: '0 0 20px 0',
            lineHeight: 1.4,
            fontWeight: 400,
          }}
        >
          Provide the personal details below. We will use this to verify your application.
        </p>

        {/* Form Fields */}
        <div style={{ marginBottom: 14 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: colors.titleColor,
              marginBottom: 6,
            }}
          >
            Full name
          </div>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={{
              width: '100%',
              height: 44,
              padding: '0 14px',
              borderRadius: 8,
              border: `1px solid ${colors.inputBorder}`,
              backgroundColor: colors.inputBg,
              color: colors.inputTextColor,
              fontSize: 14,
              boxSizing: 'border-box',
              outline: 'none',
              fontFamily: 'inherit',
            }}
          />
        </div>

        <div style={{ marginBottom: 14 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: colors.titleColor,
              marginBottom: 6,
            }}
          >
            Date of birth
          </div>
          <input
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            placeholder="Placeholder"
            style={{
              width: '100%',
              height: 44,
              padding: '0 14px',
              borderRadius: 8,
              border: `1px solid ${colors.inputBorder}`,
              backgroundColor: colors.inputBg,
              color: colors.inputTextColor,
              fontSize: 14,
              boxSizing: 'border-box',
              outline: 'none',
              fontFamily: 'inherit',
            }}
          />
        </div>

        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: colors.titleColor,
              marginBottom: 6,
            }}
          >
            Mobile number
          </div>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Placeholder"
            style={{
              width: '100%',
              height: 44,
              padding: '0 14px',
              borderRadius: 8,
              border: `1px solid ${colors.inputBorder}`,
              backgroundColor: colors.inputBg,
              color: colors.inputTextColor,
              fontSize: 14,
              boxSizing: 'border-box',
              outline: 'none',
              fontFamily: 'inherit',
            }}
          />
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {/* Continue Button */}
          <button
            type="button"
            onClick={() => alert('Continuing to next section...')}
            style={{
              width: '100%',
              height: 44,
              backgroundColor: colors.primaryBtnBg,
              color: colors.primaryBtnText,
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

          {/* Back Button */}
          <button
            type="button"
            onClick={() => alert('Going back...')}
            style={{
              width: '100%',
              height: 44,
              backgroundColor: 'transparent',
              color: colors.outlineBtnText,
              border: `1.5px solid ${colors.outlineBtnBorder}`,
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
          maxHeight: 780,
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
                {renderFormContent()}
              </div>
            ) : (
              renderFormContent()
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
          <h1 className="wb-title">Auto-save Form</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          A pattern showing a multi-step form with an auto-save banner at the top, clear pipeline progression, and jump navigation.
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

export default AutoSaveFormDoc;
