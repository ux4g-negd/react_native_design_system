import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface ServiceCompletionDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const ServiceCompletionDoc: React.FC<ServiceCompletionDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');

  const isCard = variant === 'card';

  const colors = useMemo(() => {
    return {
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      subtleColor: isDark ? UX4GColors.neutral200 : UX4GColors.neutral600,
      screenBg: isCard
        ? isDark
          ? UX4GColors.primary800
          : UX4GColors.primary100
        : isDark
        ? UX4GColors.neutral900
        : '#FFFFFF',
      cardBg: isDark ? UX4GColors.neutral800 : '#FFFFFF',
      headerBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      dividerColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral200,
      menuBtnBorder: isDark ? UX4GColors.primary400 : UX4GColors.primary200,
      // Success Banner Colors
      successBg: isDark ? UX4GColors.green900 : UX4GColors.green50,
      successBorder: isDark ? UX4GColors.green600 : UX4GColors.green300,
      successTextColor: isDark ? UX4GColors.green300 : UX4GColors.green800,
      successIconColor: isDark ? UX4GColors.green400 : UX4GColors.green600,
      // File Card Colors
      fileCardBg: isDark ? UX4GColors.neutral700 : UX4GColors.neutral50,
      fileCardTitleColor: isDark ? UX4GColors.neutral50 : UX4GColors.neutral900,
      fileCardSubColor: isDark ? UX4GColors.neutral300 : UX4GColors.neutral600,
      // Buttons
      buttonBg: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      buttonTextColor: isDark ? '#000000' : '#FFFFFF',
      outlineBorderColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      outlineTextColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
    };
  }, [isDark, isCard]);

  // React Native Default Pattern Code
  const defaultCodeString = `import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gButtonVariant,
  Ux4gButtonSize,
  Ux4gCard,
  Ux4gDivider,
  Ux4gDividerOrientation,
  Ux4gIcon,
  UX4GColors,
} from 'ux4g-react-native-components';

export const ServiceCompletionDefaultPattern = ({ isDark = false }: { isDark?: boolean }) => {
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleColor = isDark ? UX4GColors.neutral200 : UX4GColors.neutral600;
  const screenBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';

  const successBg = isDark ? UX4GColors.green900 : UX4GColors.green50;
  const successBorder = isDark ? UX4GColors.green600 : UX4GColors.green300;
  const successTextColor = isDark ? UX4GColors.green300 : UX4GColors.green800;
  const successIconColor = isDark ? UX4GColors.green400 : UX4GColors.green600;

  const fileCardBg = isDark ? UX4GColors.neutral800 : UX4GColors.neutral50;
  const fileCardTitleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const fileCardSubColor = isDark ? UX4GColors.neutral300 : UX4GColors.neutral600;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: screenBg }]}>
      {/* 1. Official Header with Menu */}
      <Ux4gAppHeader
        elevation={2}
        variant={isDark ? 'dark' : 'light'}
        title=""
        leadingSpacing={8}
        leadingWidgets={[
          <Image
            key="emblem"
            source={{ uri: '/national_emblem_logo.svg' }}
            style={styles.emblemLogo}
            resizeMode="contain"
          />,
          <View key="divider" style={styles.headerDividerWrapper}>
            <Ux4gDivider
              orientation={Ux4gDividerOrientation.vertical}
              color={isDark ? UX4GColors.neutral700 : UX4GColors.neutral300}
            />
          </View>,
          <UnionLogo
            key="union"
            height={32}
            color={primaryColor}
          />,
        ]}
        actions={[
          {
            customWidget: (
              <TouchableOpacity
                key="menu"
                style={styles.menuBtn}
                onPress={() => {}}
              >
                <Text style={styles.menuIcon}>☰</Text>
              </TouchableOpacity>
            ),
          },
        ]}
      />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {/* Back button */}
        <TouchableOpacity style={styles.backWrapper} onPress={() => {}}>
          <Ux4gIcon name="arrow_back" size={18} color={primaryColor} />
          <Text style={[styles.backText, { color: primaryColor }]}>Back</Text>
        </TouchableOpacity>

        {/* Title */}
        <Text style={[styles.title, { color: titleColor }]}>
          Service Completed
        </Text>

        {/* Description */}
        <Text style={[styles.description, { color: subtleColor }]}>
          Your income certificate has been downloaded.
        </Text>

        {/* Success Banner Card */}
        <Ux4gCard
          backgroundColor={successBg}
          borderColor={successBorder}
          borderWidth={1}
          cornerRadius={10}
          style={styles.bannerCard}
        >
          <View style={styles.bannerHeaderRow}>
            <Ux4gIcon name="check_circle" size={20} color={successIconColor} />
            <Text style={[styles.bannerTitle, { color: successTextColor }]}>
              Income Certificate Downloaded.
            </Text>
          </View>
          <View style={styles.bannerBodyContainer}>
            <Text style={[styles.bannerBodyText, { color: successTextColor }]}>
              Your certificate has been saved to your device.
            </Text>
            <TouchableOpacity onPress={() => {}} style={styles.viewLinkWrapper}>
              <Text style={[styles.viewLinkText, { color: successTextColor }]}>
                View
              </Text>
            </TouchableOpacity>
          </View>
        </Ux4gCard>

        {/* File Info Card */}
        <Ux4gCard
          backgroundColor={fileCardBg}
          cornerRadius={8}
          style={styles.fileCard}
        >
          <View style={styles.fileRow}>
            <Text style={[styles.fileName, { color: fileCardTitleColor }]}>
              income_certificate_2026.pdf
            </Text>
            <Text style={[styles.fileMeta, { color: fileCardSubColor }]}>
              28 KB · PDF
            </Text>
          </View>
        </Ux4gCard>

        <View style={styles.spacer} />

        {/* Action Buttons */}
        <View style={styles.bottomSection}>
          <Ux4gButton
            text="Download Again"
            onPress={() => {}}
            variant={Ux4gButtonVariant.primary}
            size={Ux4gButtonSize.large}
            height={48}
            borderRadius={8}
            backgroundColor={primaryColor}
            contentColor={isDark ? '#000000' : '#FFFFFF'}
          />

          <View style={{ height: 10 }} />

          <Ux4gButton
            text="Save to DigiLocker"
            onPress={() => {}}
            variant={Ux4gButtonVariant.outline}
            size={Ux4gButtonSize.large}
            height={48}
            borderRadius={8}
            borderColor={primaryColor}
            contentColor={primaryColor}
          />
        </View>

        {/* Powered by Digital India Footer */}
        <View style={styles.footerRow}>
          <Text style={styles.footerText}>Powered by -</Text>
          <Image
            source={{ uri: '/Digital_India_logo.svg' }}
            style={styles.digitalIndiaLogo}
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
  emblemLogo: {
    width: 36,
    height: 36,
  },
  headerDividerWrapper: {
    height: 28,
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: UX4GColors.primary200,
    backgroundColor: UX4GColors.neutral0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 18,
    color: UX4GColors.primary,
  },
  scroll: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  backWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 16,
    alignSelf: 'flex-start',
  },
  backText: {
    fontSize: 14,
    fontWeight: '600',
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 6,
  },
  description: {
    fontSize: 13,
    marginBottom: 20,
  },
  bannerCard: {
    padding: 14,
    marginBottom: 16,
  },
  bannerHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  bannerTitle: {
    fontSize: 14,
    fontWeight: '700',
    flex: 1,
  },
  bannerBodyContainer: {
    paddingLeft: 28,
    marginTop: 4,
  },
  bannerBodyText: {
    fontSize: 13,
    lineHeight: 18,
  },
  viewLinkWrapper: {
    marginTop: 6,
    alignSelf: 'flex-start',
  },
  viewLinkText: {
    fontSize: 13,
    fontWeight: '700',
  },
  fileCard: {
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  fileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  fileName: {
    fontSize: 13,
    fontWeight: '600',
  },
  fileMeta: {
    fontSize: 12,
  },
  spacer: {
    flex: 1,
    minHeight: 120,
  },
  bottomSection: {
    width: '100%',
    marginBottom: 16,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 6,
  },
  footerText: {
    fontSize: 11,
    color: '#6B7280',
  },
  digitalIndiaLogo: {
    height: 20,
    width: 60,
  },
});
`;

  // React Native Card Pattern Code
  const cardCodeString = `import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gButtonVariant,
  Ux4gButtonSize,
  Ux4gCard,
  Ux4gDivider,
  Ux4gDividerOrientation,
  Ux4gIcon,
  UX4GColors,
} from 'ux4g-react-native-components';

export const ServiceCompletionCardPattern = ({ isDark = false }: { isDark?: boolean }) => {
  const primaryColor = isDark ? UX4GColors.primary300 : UX4GColors.primary600;
  const titleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const subtleColor = isDark ? UX4GColors.neutral200 : UX4GColors.neutral600;
  const screenBg = isDark ? UX4GColors.primary800 : UX4GColors.primary100;
  const cardBg = isDark ? UX4GColors.neutral800 : '#FFFFFF';

  const successBg = isDark ? UX4GColors.green900 : UX4GColors.green50;
  const successBorder = isDark ? UX4GColors.green600 : UX4GColors.green300;
  const successTextColor = isDark ? UX4GColors.green300 : UX4GColors.green800;
  const successIconColor = isDark ? UX4GColors.green400 : UX4GColors.green600;

  const fileCardBg = isDark ? UX4GColors.neutral700 : UX4GColors.neutral50;
  const fileCardTitleColor = isDark ? UX4GColors.neutral50 : UX4GColors.neutral900;
  const fileCardSubColor = isDark ? UX4GColors.neutral300 : UX4GColors.neutral600;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: screenBg }]}>
      {/* 1. Official Header with Menu */}
      <Ux4gAppHeader
        elevation={2}
        variant={isDark ? 'dark' : 'light'}
        title=""
        leadingSpacing={8}
        leadingWidgets={[
          <Image
            key="emblem"
            source={{ uri: '/national_emblem_logo.svg' }}
            style={styles.emblemLogo}
            resizeMode="contain"
          />,
          <View key="divider" style={styles.headerDividerWrapper}>
            <Ux4gDivider
              orientation={Ux4gDividerOrientation.vertical}
              color={isDark ? UX4GColors.neutral700 : UX4GColors.neutral300}
            />
          </View>,
          <UnionLogo
            key="union"
            height={32}
            color={primaryColor}
          />,
        ]}
        actions={[
          {
            customWidget: (
              <TouchableOpacity
                key="menu"
                style={styles.menuBtn}
                onPress={() => {}}
              >
                <Text style={styles.menuIcon}>☰</Text>
              </TouchableOpacity>
            ),
          },
        ]}
      />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.cardScrollContent}>
        {/* Floating White Card */}
        <View style={[styles.card, { backgroundColor: cardBg }]}>
          {/* Back button */}
          <TouchableOpacity style={styles.backWrapper} onPress={() => {}}>
            <Ux4gIcon name="arrow_back" size={18} color={primaryColor} />
            <Text style={[styles.backText, { color: primaryColor }]}>Back</Text>
          </TouchableOpacity>

          {/* Title */}
          <Text style={[styles.title, { color: titleColor }]}>
            Service Completed
          </Text>

          {/* Description */}
          <Text style={[styles.description, { color: subtleColor }]}>
            Your income certificate has been downloaded.
          </Text>

          {/* Success Banner Card */}
          <Ux4gCard
            backgroundColor={successBg}
            borderColor={successBorder}
            borderWidth={1}
            cornerRadius={10}
            style={styles.bannerCard}
          >
            <View style={styles.bannerHeaderRow}>
              <Ux4gIcon name="check_circle" size={20} color={successIconColor} />
              <Text style={[styles.bannerTitle, { color: successTextColor }]}>
                Income Certificate Downloaded.
              </Text>
            </View>
            <View style={styles.bannerBodyContainer}>
              <Text style={[styles.bannerBodyText, { color: successTextColor }]}>
                Your certificate has been saved to your device.
              </Text>
              <TouchableOpacity onPress={() => {}} style={styles.viewLinkWrapper}>
                <Text style={[styles.viewLinkText, { color: successTextColor }]}>
                  View
                </Text>
              </TouchableOpacity>
            </View>
          </Ux4gCard>

          {/* File Info Card */}
          <Ux4gCard
            backgroundColor={fileCardBg}
            cornerRadius={8}
            style={styles.fileCard}
          >
            <View style={styles.fileRow}>
              <Text style={[styles.fileName, { color: fileCardTitleColor }]}>
                income_certificate_2026.pdf
              </Text>
              <Text style={[styles.fileMeta, { color: fileCardSubColor }]}>
                28 KB · PDF
              </Text>
            </View>
          </Ux4gCard>

          <View style={styles.cardSpacer} />

          {/* Action Buttons Inside Card */}
          <Ux4gButton
            text="Download Again"
            onPress={() => {}}
            variant={Ux4gButtonVariant.primary}
            size={Ux4gButtonSize.large}
            height={48}
            borderRadius={8}
            backgroundColor={primaryColor}
            contentColor={isDark ? '#000000' : '#FFFFFF'}
          />

          <View style={{ height: 10 }} />

          <Ux4gButton
            text="Save to DigiLocker"
            onPress={() => {}}
            variant={Ux4gButtonVariant.outline}
            size={Ux4gButtonSize.large}
            height={48}
            borderRadius={8}
            borderColor={primaryColor}
            contentColor={primaryColor}
          />
        </View>

        {/* Powered by Digital India Footer Outside Card */}
        <View style={styles.footerRow}>
          <Text style={styles.footerText}>Powered by -</Text>
          <Image
            source={{ uri: '/Digital_India_logo.svg' }}
            style={styles.digitalIndiaLogo}
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
  emblemLogo: {
    width: 36,
    height: 36,
  },
  headerDividerWrapper: {
    height: 28,
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: UX4GColors.primary200,
    backgroundColor: UX4GColors.neutral0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 18,
    color: UX4GColors.primary,
  },
  scroll: {
    flex: 1,
  },
  cardScrollContent: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 12,
    justifyContent: 'space-between',
  },
  card: {
    borderRadius: 16,
    padding: 16,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
  },
  backWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 16,
    alignSelf: 'flex-start',
  },
  backText: {
    fontSize: 14,
    fontWeight: '600',
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 6,
  },
  description: {
    fontSize: 13,
    marginBottom: 20,
  },
  bannerCard: {
    padding: 14,
    marginBottom: 16,
  },
  bannerHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  bannerTitle: {
    fontSize: 14,
    fontWeight: '700',
    flex: 1,
  },
  bannerBodyContainer: {
    paddingLeft: 28,
    marginTop: 4,
  },
  bannerBodyText: {
    fontSize: 13,
    lineHeight: 18,
  },
  viewLinkWrapper: {
    marginTop: 6,
    alignSelf: 'flex-start',
  },
  viewLinkText: {
    fontSize: 13,
    fontWeight: '700',
  },
  fileCard: {
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  fileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  fileName: {
    fontSize: 13,
    fontWeight: '600',
  },
  fileMeta: {
    fontSize: 12,
  },
  cardSpacer: {
    height: 120,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 6,
  },
  footerText: {
    fontSize: 11,
    color: '#6B7280',
  },
  digitalIndiaLogo: {
    height: 20,
    width: 60,
  },
});
`;

  const codeString = isCard ? cardCodeString : defaultCodeString;

  const renderTopContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Ghost Back Button */}
      <button
        type="button"
        onClick={() => {}}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'none',
          border: 'none',
          padding: 0,
          color: colors.primaryColor,
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          marginBottom: '16px',
          alignSelf: 'flex-start',
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: '18px', color: colors.primaryColor }}
        >
          arrow_back
        </span>
        Back
      </button>

      {/* Main Title */}
      <div
        style={{
          fontSize: '18px',
          fontWeight: 800,
          color: colors.titleColor,
          marginBottom: '6px',
          lineHeight: '1.3',
        }}
      >
        Service Completed
      </div>

      {/* Subtitle / Description */}
      <div
        style={{
          fontSize: '13px',
          color: colors.subtleColor,
          marginBottom: '20px',
          lineHeight: '1.4',
        }}
      >
        Your income certificate has been downloaded.
      </div>

      {/* Success Banner Card */}
      <div
        style={{
          width: '100%',
          backgroundColor: colors.successBg,
          border: `1px solid ${colors.successBorder}`,
          borderRadius: '10px',
          padding: '14px',
          marginBottom: '16px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: '20px',
              color: colors.successIconColor,
              flexShrink: 0,
              fontVariationSettings: "'FILL' 1",
            }}
          >
            check_circle
          </span>
          <div
            style={{
              fontSize: '14px',
              fontWeight: 700,
              color: colors.successTextColor,
            }}
          >
            Income Certificate Downloaded.
          </div>
        </div>
        <div style={{ paddingLeft: '28px', marginTop: '4px' }}>
          <div
            style={{
              fontSize: '13px',
              color: colors.successTextColor,
              lineHeight: '1.4',
            }}
          >
            Your certificate has been saved to your device.
          </div>
          <div
            onClick={() => alert('View certificate clicked')}
            style={{
              fontSize: '13px',
              fontWeight: 700,
              color: colors.successTextColor,
              marginTop: '6px',
              cursor: 'pointer',
              display: 'inline-block',
            }}
          >
            View
          </div>
        </div>
      </div>

      {/* File Info Card */}
      <div
        style={{
          width: '100%',
          backgroundColor: colors.fileCardBg,
          borderRadius: '8px',
          padding: '12px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxSizing: 'border-box',
        }}
      >
        <span
          style={{
            fontSize: '13px',
            fontWeight: 600,
            color: colors.fileCardTitleColor,
          }}
        >
          income_certificate_2026.pdf
        </span>
        <span
          style={{
            fontSize: '12px',
            color: colors.fileCardSubColor,
          }}
        >
          28 KB · PDF
        </span>
      </div>
    </div>
  );

  const renderActionButtons = () => (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Download Again (Primary Purple) */}
      <button
        type="button"
        onClick={() => alert('Download Again pressed')}
        style={{
          width: '100%',
          height: '48px',
          minHeight: '48px',
          maxHeight: '48px',
          backgroundColor: colors.buttonBg,
          color: colors.buttonTextColor,
          borderRadius: '8px',
          border: 'none',
          fontSize: '15px',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '10px',
          transition: 'opacity 0.2s',
        }}
      >
        Download Again
      </button>

      {/* 2. Save to DigiLocker (Outline Purple) */}
      <button
        type="button"
        onClick={() => alert('Save to DigiLocker pressed')}
        style={{
          width: '100%',
          height: '48px',
          minHeight: '48px',
          maxHeight: '48px',
          backgroundColor: 'transparent',
          color: colors.outlineTextColor,
          border: `1.5px solid ${colors.outlineBorderColor}`,
          borderRadius: '8px',
          fontSize: '15px',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.2s',
        }}
      >
        Save to DigiLocker
      </button>
    </div>
  );

  const renderFooter = () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        padding: '12px 0 4px',
      }}
    >
      <span
        style={{
          fontSize: '11px',
          color: '#6B7280',
        }}
      >
        Powered by -
      </span>
      <img
        src="/Digital_India_logo.svg"
        alt="Digital India"
        style={{
          height: '20px',
          objectFit: 'contain',
        }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = '/digital_india_logo.png';
        }}
      />
    </div>
  );

  return (
    <div className="wb-page">
      {/* Top Header */}
      <div className="wb-header">
        <h1 className="wb-title">
          Service Completed ({isCard ? 'Card Style' : 'Default'})
        </h1>
        <p className="wb-description">
          {isCard
            ? 'Service completion confirmation with downloaded certificate info inside a card container with light purple background.'
            : 'Service completion confirmation with downloaded certificate info on a white background.'}
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
              <div
                className={`wb-preview-area ${isDark ? 'dark' : ''}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '32px 16px',
                }}
              >
                {/* Variant Selector Pill Control */}
                <div
                  style={{
                    display: 'flex',
                    gap: 8,
                    marginBottom: 24,
                    backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral100,
                    padding: 4,
                    borderRadius: 10,
                    border: `1px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.neutral200}`,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setVariant('default')}
                    style={{
                      padding: '8px 18px',
                      borderRadius: 8,
                      border: 'none',
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: 'pointer',
                      backgroundColor: variant === 'default' ? UX4GColors.primary : 'transparent',
                      color:
                        variant === 'default'
                          ? UX4GColors.neutral0
                          : isDark
                          ? UX4GColors.neutral400
                          : UX4GColors.neutral600,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Default
                  </button>
                  <button
                    type="button"
                    onClick={() => setVariant('card')}
                    style={{
                      padding: '8px 18px',
                      borderRadius: 8,
                      border: 'none',
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: 'pointer',
                      backgroundColor: variant === 'card' ? UX4GColors.primary : 'transparent',
                      color:
                        variant === 'card'
                          ? UX4GColors.neutral0
                          : isDark
                          ? UX4GColors.neutral400
                          : UX4GColors.neutral600,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Card Style
                  </button>
                </div>

                {/* Mobile Phone Mockup */}
                <div
                  style={{
                    width: '360px',
                    height: '740px',
                    backgroundColor: colors.screenBg,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: isDark
                      ? '0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px #333333'
                      : '0 20px 40px rgba(0,0,0,0.12), 0 0 0 1px #E5E7EB',
                    position: 'relative',
                  }}
                >
                  {/* Ux4gAppHeader inside Mockup */}
                  <div
                    style={{
                      height: '56px',
                      backgroundColor: colors.headerBg,
                      borderBottom: `1px solid ${colors.dividerColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0 16px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      zIndex: 10,
                      flexShrink: 0,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <img
                        src="/national_emblem_logo.svg"
                        alt="National Emblem"
                        style={{
                          height: '36px',
                          filter: isDark ? 'brightness(0) invert(1)' : 'none',
                        }}
                      />
                      <div
                        style={{
                          width: '1px',
                          height: '28px',
                          backgroundColor: isDark ? UX4GColors.neutral700 : '#D1D5DB',
                          margin: '0 2px',
                        }}
                      />
                      <UnionLogo size={32} color={colors.primaryColor} isDark={isDark} />
                    </div>

                    {/* Hamburger Menu Button */}
                    <button
                      type="button"
                      onClick={() => {}}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: isDark ? 'transparent' : '#FFFFFF',
                        border: `1.5px solid ${colors.menuBtnBorder}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M4 6h16M4 12h16M4 18h16"
                          stroke={colors.primaryColor}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Scrollable Content Body */}
                  {isCard ? (
                    /* Card Style Variant */
                    <div
                      style={{
                        flex: 1,
                        overflowY: 'auto',
                        padding: '16px 16px 12px 16px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxSizing: 'border-box',
                      }}
                    >
                      {/* Floating Card */}
                      <div
                        style={{
                          width: '100%',
                          backgroundColor: colors.cardBg,
                          borderRadius: '16px',
                          padding: '16px 16px 18px 16px',
                          boxShadow: isDark
                            ? '0 4px 16px rgba(0,0,0,0.4)'
                            : '0 4px 16px rgba(0,0,0,0.06)',
                          display: 'flex',
                          flexDirection: 'column',
                          boxSizing: 'border-box',
                        }}
                      >
                        {renderTopContent()}

                        <div style={{ height: '110px' }} />

                        {renderActionButtons()}
                      </div>

                      {/* Footer outside card */}
                      {renderFooter()}
                    </div>
                  ) : (
                    /* Default Variant */
                    <div
                      style={{
                        flex: 1,
                        overflowY: 'auto',
                        padding: '16px 16px 12px 16px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div>
                        {renderTopContent()}
                      </div>

                      <div style={{ marginTop: 'auto', paddingTop: '24px' }}>
                        {renderActionButtons()}
                        {renderFooter()}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 2. Code Tab */}
            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                {/* Variant Switch in Code Tab */}
                <div
                  style={{
                    display: 'flex',
                    gap: 8,
                    marginBottom: 16,
                    padding: '8px 16px',
                    backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
                    borderRadius: 8,
                    alignItems: 'center',
                    border: `1px solid ${isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}`,
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700,
                    }}
                  >
                    Active Variant:
                  </span>
                  <button
                    type="button"
                    onClick={() => setVariant('default')}
                    className={`wb-tab ${variant === 'default' ? 'active' : ''}`}
                    style={{ padding: '4px 12px', fontSize: 12 }}
                  >
                    Default
                  </button>
                  <button
                    type="button"
                    onClick={() => setVariant('card')}
                    className={`wb-tab ${variant === 'card' ? 'active' : ''}`}
                    style={{ padding: '4px 12px', fontSize: 12 }}
                  >
                    Card Style
                  </button>
                </div>

                <CodeBlock
                  code={codeString}
                  language="tsx"
                  filename={
                    variant === 'card'
                      ? 'ServiceCompletionCardPattern.tsx'
                      : 'ServiceCompletionDefaultPattern.tsx'
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

export default ServiceCompletionDoc;
