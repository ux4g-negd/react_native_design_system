import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface InlineFeedbackGuidanceDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const InlineFeedbackGuidanceDoc: React.FC<InlineFeedbackGuidanceDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');
  const [category, setCategory] = useState<string>('SC/ST');
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const isCard = variant === 'card';

  const colors = useMemo(() => {
    return {
      primaryColor: isDark ? UX4GColors.primary300 : '#432CBB',
      titleColor: isDark ? UX4GColors.neutral50 : '#111827',
      subtleColor: isDark ? UX4GColors.neutral200 : '#4B5563',
      screenBg: isCard
        ? isDark
          ? UX4GColors.primary800
          : '#F2EFFF'
        : isDark
        ? UX4GColors.neutral900
        : '#FFFFFF',
      cardBg: isDark ? UX4GColors.neutral800 : '#FFFFFF',
      buttonBg: isDark ? UX4GColors.primary300 : '#4A2BC2',
      buttonTextColor: isDark ? '#000000' : '#FFFFFF',
      headerBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      dividerColor: isDark ? UX4GColors.neutral700 : '#D1D5DB',
      unionColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      inputBg: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      inputBorder: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
      uploadBg: isDark ? 'rgba(255,255,255,0.03)' : '#FAFAFA',
      uploadBorder: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
      // Status Banner Colors (Warning / Orange)
      warningBg: isDark ? 'rgba(164, 104, 0, 0.2)' : '#FFF8F2',
      warningBorder: isDark ? '#A46800' : '#FFD9AF',
      warningTextColor: isDark ? '#FFBE6F' : '#764A00',
      warningIconColor: isDark ? '#FFBE6F' : '#A46800',
    };
  }, [isDark, isCard]);

  // Clean React Native TSX source code strings matching Flutter implementation
  const defaultCodeString = `import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gButtonVariant,
  Ux4gButtonSize,
  Ux4gInputField,
  Ux4gFileUpload,
  Ux4gDivider,
  Ux4gDividerOrientation,
  Ux4gIcon,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const InlineFeedbackGuidanceScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const [category, setCategory] = useState('SC/ST');

  const primaryColor = isDark ? UX4GColors.primary300 : '#432CBB';
  const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
  const subtleColor = isDark ? UX4GColors.neutral200 : '#4B5563';
  const screenBg = isDark ? UX4GColors.neutral900 : '#FFFFFF';

  const warningBg = isDark ? 'rgba(164, 104, 0, 0.2)' : '#FFF8F2';
  const warningBorder = isDark ? '#A46800' : '#FFD9AF';
  const warningTextColor = isDark ? '#FFBE6F' : '#764A00';
  const warningIconColor = isDark ? '#FFBE6F' : '#A46800';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: screenBg }]}>
      {/* App Header with logos and elevation */}
      <Ux4gAppHeader
        elevation={2}
        variant="light"
        title=""
        leadingSpacing={8}
        leadingWidgets={[
          <NationalEmblemLogo key="emblem" isDark={isDark} height={40} />,
          <View key="divider" style={styles.headerDividerWrapper}>
            <Ux4gDivider
              orientation={Ux4gDividerOrientation.vertical}
              color="#D1D5DB"
            />
          </View>,
          <UnionLogo
            key="union"
            height={32}
            color={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
          />,
        ]}
      />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {/* Back button */}
        <View style={styles.backWrapper}>
          <Ux4gButton
            text="Back"
            onPress={() => {}}
            variant={Ux4gButtonVariant.ghost}
            leadingIcon="arrow_back"
            contentColor={primaryColor}
            size={Ux4gButtonSize.small}
          />
        </View>

        {/* Title */}
        <Text style={[styles.title, { color: titleColor }]}>
          Conditional Guidance
        </Text>

        {/* Description */}
        <Text style={[styles.description, { color: subtleColor }]}>
          Context-sensitive info appears based on the selected field value.
        </Text>

        {/* Input field */}
        <Ux4gInputField
          value={category}
          onValueChange={setCategory}
          label="Reservation Category"
          caption="Select your reservation category"
        />

        <View style={styles.spacing} />

        {/* File upload area */}
        <Ux4gFileUpload
          maxFiles={1}
          maxFileSize={5 * 1024 * 1024}
          allowedExtensions={['pdf', 'jpg', 'png']}
          borderStyle="dashed"
          onFilesChanged={() => {}}
        />

        <View style={styles.spacing} />

        {/* Conditional Warning Banner */}
        <View
          style={[
            styles.warningBanner,
            { backgroundColor: warningBg, borderColor: warningBorder },
          ]}
        >
          <Ux4gIcon name="error" size={18} color={warningIconColor} />
          <View style={styles.warningTextContainer}>
            <Text style={[styles.warningTitle, { color: warningTextColor }]}>
              Additional Document Required
            </Text>
            <Text style={[styles.warningBody, { color: warningTextColor }]}>
              Since you selected SC category, please upload your caste certificate in the Documents step.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Continue button at bottom */}
      <View style={styles.bottomBar}>
        <Ux4gButton
          text="Continue"
          onPress={() => {}}
          variant={Ux4gButtonVariant.primary}
          size={Ux4gButtonSize.large}
          height={48}
          backgroundColor={isDark ? UX4GColors.primary300 : '#4A2BC2'}
          contentColor={isDark ? '#000000' : '#FFFFFF'}
          borderRadius={8}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerDividerWrapper: {
    height: 32,
    justifyContent: 'center',
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  backWrapper: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 20,
  },
  spacing: {
    height: 20,
  },
  warningBanner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    gap: 8,
  },
  warningTextContainer: {
    flex: 1,
  },
  warningTitle: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 4,
  },
  warningBody: {
    fontSize: 13,
    lineHeight: 18,
  },
  bottomBar: {
    padding: 16,
    paddingTop: 0,
  },
});
`;

  const cardCodeString = `import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gButtonVariant,
  Ux4gButtonSize,
  Ux4gInputField,
  Ux4gFileUpload,
  Ux4gDivider,
  Ux4gDividerOrientation,
  Ux4gIcon,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const InlineFeedbackGuidanceCardScreen = ({ isDark = false }: { isDark?: boolean }) => {
  const [category, setCategory] = useState('SC/ST');

  const primaryColor = isDark ? UX4GColors.primary300 : '#432CBB';
  const titleColor = isDark ? UX4GColors.neutral50 : '#111827';
  const subtleColor = isDark ? UX4GColors.neutral200 : '#4B5563';
  const screenBg = isDark ? UX4GColors.primary800 : '#F2EFFF';
  const cardBg = isDark ? UX4GColors.neutral800 : '#FFFFFF';

  const warningBg = isDark ? 'rgba(164, 104, 0, 0.2)' : '#FFF8F2';
  const warningBorder = isDark ? '#A46800' : '#FFD9AF';
  const warningTextColor = isDark ? '#FFBE6F' : '#764A00';
  const warningIconColor = isDark ? '#FFBE6F' : '#A46800';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: screenBg }]}>
      {/* App Header with logos and elevation */}
      <Ux4gAppHeader
        elevation={2}
        variant="light"
        title=""
        leadingSpacing={8}
        leadingWidgets={[
          <NationalEmblemLogo key="emblem" isDark={isDark} height={40} />,
          <View key="divider" style={styles.headerDividerWrapper}>
            <Ux4gDivider
              orientation={Ux4gDividerOrientation.vertical}
              color="#D1D5DB"
            />
          </View>,
          <UnionLogo
            key="union"
            height={32}
            color={isDark ? UX4GColors.primary300 : UX4GColors.primary600}
          />,
        ]}
      />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {/* Card container */}
        <View style={[styles.card, { backgroundColor: cardBg }]}>
          {/* Back button */}
          <View style={styles.backWrapper}>
            <Ux4gButton
              text="Back"
              onPress={() => {}}
              variant={Ux4gButtonVariant.ghost}
              leadingIcon="arrow_back"
              contentColor={primaryColor}
              size={Ux4gButtonSize.small}
            />
          </View>

          {/* Title */}
          <Text style={[styles.title, { color: titleColor }]}>
            Conditional Guidance
          </Text>

          {/* Description */}
          <Text style={[styles.description, { color: subtleColor }]}>
            Context-sensitive info appears based on the selected field value.
          </Text>

          {/* Input field */}
          <Ux4gInputField
            value={category}
            onValueChange={setCategory}
            label="Reservation Category"
            caption="Select your reservation category"
          />

          <View style={styles.spacing} />

          {/* File upload area */}
          <Ux4gFileUpload
            maxFiles={1}
            maxFileSize={5 * 1024 * 1024}
            allowedExtensions={['pdf', 'jpg', 'png']}
            borderStyle="dashed"
            onFilesChanged={() => {}}
          />

          <View style={styles.spacing} />

          {/* Conditional Warning Banner */}
          <View
            style={[
              styles.warningBanner,
              { backgroundColor: warningBg, borderColor: warningBorder },
            ]}
          >
            <Ux4gIcon name="error" size={18} color={warningIconColor} />
            <View style={styles.warningTextContainer}>
              <Text style={[styles.warningTitle, { color: warningTextColor }]}>
                Additional Document Required
              </Text>
              <Text style={[styles.warningBody, { color: warningTextColor }]}>
                Since you selected SC category, please upload your caste certificate in the Documents step.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Continue button at bottom */}
      <View style={styles.bottomBar}>
        <Ux4gButton
          text="Continue"
          onPress={() => {}}
          variant={Ux4gButtonVariant.primary}
          size={Ux4gButtonSize.large}
          height={48}
          backgroundColor={isDark ? UX4GColors.primary300 : '#4A2BC2'}
          contentColor={isDark ? '#000000' : '#FFFFFF'}
          borderRadius={8}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerDividerWrapper: {
    height: 32,
    justifyContent: 'center',
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  card: {
    width: '100%',
    padding: 16,
    borderRadius: 16,
  },
  backWrapper: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 20,
  },
  spacing: {
    height: 20,
  },
  warningBanner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    gap: 8,
  },
  warningTextContainer: {
    flex: 1,
  },
  warningTitle: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 4,
  },
  warningBody: {
    fontSize: 13,
    lineHeight: 18,
  },
  bottomBar: {
    padding: 16,
    paddingTop: 0,
  },
});
`;

  const codeString = isCard ? cardCodeString : defaultCodeString;

  const renderFormFields = () => (
    <div>
      {/* Back button */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
        onClick={() => alert('Back pressed')}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: '16px', color: colors.primaryColor }}
        >
          arrow_back
        </span>
        <span
          style={{
            fontSize: '14px',
            color: colors.primaryColor,
            fontWeight: 500,
          }}
        >
          Back
        </span>
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: '18px',
          fontWeight: 800,
          color: colors.titleColor,
          marginBottom: '8px',
          lineHeight: '1.3',
        }}
      >
        Conditional Guidance
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: '13px',
          color: colors.subtleColor,
          marginBottom: '20px',
          lineHeight: '1.4',
        }}
      >
        Context-sensitive info appears based on the selected field value.
      </div>

      {/* Field Label */}
      <div
        style={{
          fontSize: '14px',
          fontWeight: 600,
          color: colors.titleColor,
          marginBottom: '8px',
        }}
      >
        Reservation Category
      </div>

      {/* Input box */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          border: `1px solid ${colors.inputBorder}`,
          borderRadius: '8px',
          backgroundColor: colors.inputBg,
          padding: '13px 16px',
          marginBottom: '6px',
        }}
      >
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Select category"
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            fontSize: '15px',
            color: colors.titleColor,
            fontWeight: 500,
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '12.5px',
          color: colors.subtleColor,
          marginBottom: '20px',
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: '15px', color: colors.subtleColor }}
        >
          info
        </span>
        Select your reservation category
      </div>

      {/* Upload Documents Box */}
      <div
        style={{
          border: `2px dashed ${isDark ? UX4GColors.primary300 : '#432CBB'}`,
          borderRadius: '16px',
          backgroundColor: isDark ? 'rgba(74, 43, 194, 0.08)' : '#FFFFFF',
          padding: '24px 16px 20px 16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: '40px',
            color: colors.primaryColor,
            marginBottom: '6px',
          }}
        >
          cloud_upload
        </span>
        <div
          style={{
            fontSize: '20px',
            fontWeight: 700,
            color: colors.titleColor,
            marginBottom: '6px',
          }}
        >
          Upload Documents
        </div>
        <div
          style={{
            fontSize: '13px',
            color: colors.subtleColor,
            marginBottom: '18px',
          }}
        >
          File type: PDF JPG PNG Max size: 5 MB
        </div>

        {/* Action Buttons: Upload & Scan */}
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
          <button
            type="button"
            onClick={() => alert('Upload clicked')}
            style={{
              flex: 1,
              height: '40px',
              border: `1.5px solid ${isDark ? UX4GColors.primary300 : '#432CBB'}`,
              borderRadius: '8px',
              backgroundColor: 'transparent',
              color: isDark ? UX4GColors.primary300 : '#432CBB',
              fontSize: '14px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              cloud_upload
            </span>
            Upload
          </button>
          <button
            type="button"
            onClick={() => alert('Scan clicked')}
            style={{
              flex: 1,
              height: '40px',
              border: 'none',
              borderRadius: '8px',
              backgroundColor: isDark ? UX4GColors.primary300 : '#432CBB',
              color: isDark ? '#000000' : '#FFFFFF',
              fontSize: '14px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              photo_camera
            </span>
            Scan
          </button>
        </div>
      </div>

      {/* Warning Guidance Banner matching Flutter status banner */}
      <div
        style={{
          backgroundColor: isDark ? 'rgba(164, 104, 0, 0.2)' : '#FFF5EA',
          border: `1px solid ${isDark ? '#A46800' : '#FFD9AF'}`,
          borderRadius: '12px',
          padding: '14px 16px',
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-start',
        }}
      >
        <div
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: isDark ? '#E89C30' : '#FFBE6F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontWeight: 800,
            fontSize: '13px',
            flexShrink: 0,
            marginTop: '1px',
          }}
        >
          !
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: '14px',
              fontWeight: 700,
              color: isDark ? '#FFBE6F' : '#764A00',
              marginBottom: '4px',
            }}
          >
            Additional Document Required
          </div>
          <div
            style={{
              fontSize: '13px',
              lineHeight: '1.45',
              color: isDark ? '#FFD9AF' : '#764A00',
            }}
          >
            Since you selected SC category, please upload your caste certificate in the Documents step.
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="wb-page">
      {/* Top Header */}
      <div className="wb-header">
        <h1 className="wb-title">
          Inline Feedback Guidance ({isCard ? 'Card Style' : 'Default'})
        </h1>
        <p className="wb-description">
          {isCard
            ? 'Conditional guidance with file upload area inside a card container. Shows context-sensitive info based on selected field value.'
            : 'Conditional guidance with file upload area. Shows context-sensitive info based on selected field value.'}
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
                      padding: '0 16px',
                      gap: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      zIndex: 10,
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src="/national_emblem_logo.svg"
                      alt="National Emblem"
                      style={{
                        height: '40px',
                        filter: isDark ? 'brightness(0) invert(1)' : 'none',
                      }}
                    />
                    <div
                      style={{
                        width: '1px',
                        height: '32px',
                        backgroundColor: '#D1D5DB',
                        margin: '0 4px',
                      }}
                    />
                    <UnionLogo size={32} color={colors.unionColor} isDark={isDark} />
                  </div>

                  {/* Scrollable Content Body */}
                  <div
                    style={{
                      flex: 1,
                      overflowY: 'auto',
                      padding: '16px',
                      boxSizing: 'border-box',
                    }}
                  >
                    {isCard ? (
                      /* Card Style Variant */
                      <div
                        style={{
                          width: '100%',
                          backgroundColor: colors.cardBg,
                          borderRadius: '16px',
                          padding: '16px',
                          boxSizing: 'border-box',
                        }}
                      >
                        {renderFormFields()}
                      </div>
                    ) : (
                      /* Default Variant */
                      renderFormFields()
                    )}
                  </div>

                  {/* Pinned Bottom Continue Button as in Flutter */}
                  <div
                    style={{
                      padding: '0 16px 16px 16px',
                      flexShrink: 0,
                      width: '100%',
                      boxSizing: 'border-box',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => alert('Continue pressed')}
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
                        transition: 'opacity 0.2s',
                      }}
                    >
                      Continue
                    </button>
                  </div>
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
                      ? 'InlineFeedbackGuidanceCardPattern.tsx'
                      : 'InlineFeedbackGuidanceDefaultPattern.tsx'
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

export default InlineFeedbackGuidanceDoc;
