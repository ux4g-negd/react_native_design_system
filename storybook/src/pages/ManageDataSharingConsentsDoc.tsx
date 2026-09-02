import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { Ux4gButton } from '../../../src/components/button/Button';
import { CodeBlock } from '../components/CodeBlock';

interface ManageDataSharingConsentsDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'Default' | 'Card style';

export const ManageDataSharingConsentsDoc: React.FC<ManageDataSharingConsentsDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('Default');

  const [isSmsGatewayWithdrawn, setIsSmsGatewayWithdrawn] = useState(false);

  const colors = useMemo(() => {
    return {
      screenBg: variant === 'Card style'
        ? (isDark ? UX4GColors.primary900 : UX4GColors.primary100)
        : (isDark ? UX4GColors.gray900 : UX4GColors.gray100),
      cardBg: isDark ? UX4GColors.gray900 : '#FFFFFF',
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.gray900,
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      iconBg: isDark ? UX4GColors.gray800 : '#EEF2F6',
      primary: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      activeTagBg: isDark ? UX4GColors.green900 : '#DCFCE7',
      activeTagText: isDark ? UX4GColors.green300 : '#166534',
      withdrawnTagBg: isDark ? UX4GColors.gray800 : '#F3F4F6',
      withdrawnTagText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
      warningBg: isDark ? 'rgba(250, 140, 22, 0.15)' : '#FFF7ED',
      warningBorder: isDark ? 'rgba(250, 140, 22, 0.3)' : '#FFEDD5',
      warningText: isDark ? UX4GColors.orange300 : '#B45309',
      warningIcon: isDark ? UX4GColors.orange300 : '#D97706',
      footerText: isDark ? UX4GColors.neutral500 : UX4GColors.neutral400,
    };
  }, [isDark, variant]);

  const codeString = useMemo(() => {
    const isCard = variant === 'Card style';
    return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gButton,
  Ux4gTag,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const ManageDataSharingConsentsPattern = ({
  isDark = ${isDark},
  variant = '${variant}',
}: {
  isDark?: boolean;
  variant?: 'Default' | 'Card style';
}) => {
  const [isSmsGatewayWithdrawn, setIsSmsGatewayWithdrawn] = useState(false);
  const isCard = variant === 'Card style';

  return (
    <View style={[styles.screen, { backgroundColor: isDark ? UX4GColors.gray900 : (isCard ? UX4GColors.primary100 : UX4GColors.gray100) }]}>
      {/* Header */}
      <Ux4gAppHeader variant="light" showBackButton={false} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={isCard ? [styles.cardContainer, { backgroundColor: isDark ? UX4GColors.gray900 : '#FFFFFF' }] : styles.flatContainer}>
          <Text style={[styles.headline, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
            Manage Your Data Sharing Consents
          </Text>
          <Text style={[styles.schemeText, { color: isDark ? UX4GColors.primary300 : UX4GColors.primary600 }]}>
            Scheme: PM Kisan
          </Text>
          <Text style={[styles.description, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            You can review and withdraw optional consents below.
          </Text>

          {/* Bank of India Card */}
          <View style={[styles.dataCard, { backgroundColor: isDark ? UX4GColors.gray900 : '#FFFFFF', borderColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200 }]}>
            <View style={styles.dataCardRow}>
              <Text style={[styles.dataTitle, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>Bank of India</Text>
              <Ux4gTag text="Active" customBackgroundColor={isDark ? UX4GColors.green900 : '#DCFCE7'} customContentColor={isDark ? UX4GColors.green300 : '#166534'} shape="circular" size="m" />
            </View>
            <Text style={[styles.dataDetail, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
              Data shared · Aadhaar, Name
            </Text>
            <Text style={[styles.dataDetail, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
              Status · Required
            </Text>
          </View>

          {/* Payment Corp Card */}
          <View style={[styles.dataCard, { backgroundColor: isDark ? UX4GColors.gray900 : '#FFFFFF', borderColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200 }]}>
            <View style={styles.dataCardRow}>
              <Text style={[styles.dataTitle, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>Payment Corp</Text>
              <Ux4gTag text="Active" customBackgroundColor={isDark ? UX4GColors.green900 : '#DCFCE7'} customContentColor={isDark ? UX4GColors.green300 : '#166534'} shape="circular" size="m" />
            </View>
            <Text style={[styles.dataDetail, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
              Data shared · Transaction ID
            </Text>
            <Text style={[styles.dataDetail, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
              Status · Required
            </Text>
          </View>

          {/* SMS Gateway Card (Optional) */}
          <View style={[styles.dataCard, { backgroundColor: isDark ? UX4GColors.gray900 : '#FFFFFF', borderColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200 }]}>
            <View style={styles.dataCardRow}>
              <Text style={[styles.dataTitle, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>SMS Gateway</Text>
              <Ux4gTag
                text={isSmsGatewayWithdrawn ? 'Withdrawn' : 'Active'}
                customBackgroundColor={isSmsGatewayWithdrawn ? (isDark ? UX4GColors.gray800 : '#F3F4F6') : (isDark ? UX4GColors.green900 : '#DCFCE7')}
                customContentColor={isSmsGatewayWithdrawn ? (isDark ? UX4GColors.neutral400 : UX4GColors.neutral600) : (isDark ? UX4GColors.green300 : '#166534')}
                shape="circular"
                size="m"
              />
            </View>
            <Text style={[styles.dataDetail, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
              Data shared · Mobile Number
            </Text>
            <TouchableOpacity onPress={() => setIsSmsGatewayWithdrawn(!isSmsGatewayWithdrawn)} style={{ marginTop: 8 }}>
              <Text style={{ fontSize: 14, fontWeight: '600', color: isDark ? UX4GColors.primary300 : UX4GColors.primary600 }}>
                {isSmsGatewayWithdrawn ? 'Undo' : 'Withdraw'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Warning Banner */}
          <View style={[styles.warningBanner, { backgroundColor: isDark ? 'rgba(250, 140, 22, 0.15)' : '#FFF7ED', borderColor: isDark ? 'rgba(250, 140, 22, 0.3)' : '#FFEDD5' }]}>
            <Text style={[styles.warningText, { color: isDark ? UX4GColors.orange300 : '#B45309' }]}>
              ⚠️ Required consents cannot be withdrawn as they are necessary for the scheme to function.
            </Text>
          </View>

          {/* Divider */}
          <View style={[styles.divider, { backgroundColor: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200 }]} />

          {/* Actions */}
          <View style={{ gap: 4 }}>
            <Ux4gButton text="Confirm changes" enabled={isSmsGatewayWithdrawn} height={48} size="large" />
            <Ux4gButton text="Cancel" variant="ghost" contentColor={isDark ? UX4GColors.neutral50 : UX4GColors.neutral900} height={48} size="large" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  scrollContainer: { padding: 16 },
  flatContainer: { padding: 4 },
  cardContainer: { padding: 20, borderRadius: 16, elevation: 2 },
  headline: { fontSize: 20, fontWeight: '600', marginBottom: 8 },
  schemeText: { fontSize: 13, fontWeight: '600', marginBottom: 8 },
  description: { fontSize: 14, lineHeight: 20, marginBottom: 20 },
  dataCard: { padding: 16, borderRadius: 12, borderWidth: 1, marginBottom: 12 },
  dataCardRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  dataTitle: { fontSize: 16, fontWeight: '600' },
  dataDetail: { fontSize: 13, lineHeight: 18, marginTop: 2 },
  warningBanner: { padding: 12, borderRadius: 8, borderWidth: 1, marginVertical: 16 },
  warningText: { fontSize: 13, fontWeight: '500' },
  divider: { height: 1, marginVertical: 20 },
});
`;
  }, [isDark, variant]);

  const renderDataSharingManagementCard = (
    title: string,
    shared: string,
    status?: string,
    isOptional?: boolean,
    isWithdrawn?: boolean,
    onWithdrawToggle?: () => void
  ) => (
    <div
      style={{
        width: '100%',
        padding: 16,
        backgroundColor: colors.cardBg,
        borderRadius: 12,
        border: `1px solid ${colors.border}`,
        boxSizing: 'border-box',
        marginBottom: 12,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 16, fontWeight: 600, color: colors.titleColor, letterSpacing: '-0.01em' }}>
          {title}
        </span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            padding: '2px 10px',
            borderRadius: 12,
            backgroundColor: isWithdrawn ? colors.withdrawnTagBg : colors.activeTagBg,
            color: isWithdrawn ? colors.withdrawnTagText : colors.activeTagText,
            lineHeight: '1.2',
          }}
        >
          {isWithdrawn ? 'Withdrawn' : 'Active'}
        </span>
      </div>
      <div style={{ fontSize: 13, fontWeight: 400, color: colors.subtleText, marginTop: 6, lineHeight: '1.25' }}>
        Data shared · {shared}
      </div>
      {status && (
        <div style={{ fontSize: 13, fontWeight: 400, color: colors.subtleText, marginTop: 2, lineHeight: '1.25' }}>
          Status · {status}
        </div>
      )}
      {isOptional && (
        <div
          onClick={onWithdrawToggle}
          style={{
            display: 'inline-block',
            marginTop: 8,
            cursor: 'pointer',
            fontSize: 14,
            fontWeight: 600,
            color: colors.primary,
            userSelect: 'none',
          }}
        >
          {isWithdrawn ? 'Undo' : 'Withdraw'}
        </div>
      )}
    </div>
  );

  const renderMockupContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      {/* Headline */}
      <h2
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: colors.titleColor,
          textAlign: 'left',
          margin: '0 0 8px 0',
          letterSpacing: '-0.01em',
          lineHeight: '1.3',
        }}
      >
        Manage Your Data Sharing Consents
      </h2>

      {/* Scheme Info */}
      <div style={{ fontSize: 13, fontWeight: 600, color: colors.primary, marginBottom: 8 }}>
        Scheme: PM Kisan
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: 14,
          fontWeight: 400,
          color: colors.subtleText,
          textAlign: 'left',
          margin: '0 0 20px 0',
          lineHeight: '1.45',
        }}
      >
        You can review and withdraw optional consents below.
      </p>

      {/* Sharing Management Cards */}
      {renderDataSharingManagementCard('Bank of India', 'Aadhaar, Name', 'Required')}
      {renderDataSharingManagementCard('Payment Corp', 'Transaction ID', 'Required')}
      {renderDataSharingManagementCard(
        'SMS Gateway',
        'Mobile Number',
        undefined,
        true,
        isSmsGatewayWithdrawn,
        () => setIsSmsGatewayWithdrawn(!isSmsGatewayWithdrawn)
      )}

      {/* Warning Status Banner */}
      <div
        style={{
          width: '100%',
          padding: '14px 16px',
          backgroundColor: colors.warningBg,
          border: `1px solid ${colors.warningBorder}`,
          borderRadius: 12,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 12,
          marginTop: 8,
          marginBottom: 20,
          boxSizing: 'border-box',
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: 22,
            color: colors.warningIcon,
            fontVariationSettings: "'FILL' 1",
            flexShrink: 0,
            marginTop: 1,
          }}
        >
          error
        </span>
        <span
          style={{
            fontSize: 13,
            fontWeight: 500,
            color: colors.warningText,
            lineHeight: '1.45',
          }}
        >
          Required consents cannot be withdrawn as they are necessary for the scheme to function.
        </span>
      </div>

      {/* Divider */}
      <div
        style={{
          width: '100%',
          height: 1,
          backgroundColor: colors.border,
          margin: '0 0 16px 0',
        }}
      />

      {/* Actions */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Ux4gButton
          text="Confirm changes"
          enabled={isSmsGatewayWithdrawn}
          onPress={() => {}}
          height={48}
          size="large"
          width="100%"
        />
        <Ux4gButton
          text="Cancel"
          variant="ghost"
          contentColor={isDark ? UX4GColors.neutral50 : UX4GColors.neutral900}
          onPress={() => {}}
          height={48}
          size="large"
          width="100%"
        />
      </div>
    </div>
  );

  const renderLiveMockup = () => {
    return (
      <div
        style={{
          width: 360,
          height: 760,
          borderRadius: 20,
          boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)',
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
        {/* Consent Header */}
        <div style={{ backgroundColor: isDark ? UX4GColors.gray900 : '#FFFFFF' }}>
          <div
            style={{
              padding: '12px 16px',
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
                  height: 32,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />
              <div
                style={{
                  width: 1,
                  height: 28,
                  backgroundColor: isDark ? UX4GColors.neutral600 : UX4GColors.neutral300,
                }}
              />
              <img
                src="/Union.svg"
                alt="Union Logo"
                style={{
                  height: 32,
                  filter: isDark ? 'brightness(0) invert(1)' : 'none',
                }}
              />
            </div>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                border: `1px solid ${isDark ? UX4GColors.neutral700 : UX4GColors.neutral200}`,
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
          <div style={{ height: 1, backgroundColor: colors.border }} />
        </div>

        {/* Scrollable Container */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, padding: variant === 'Card style' ? 16 : '20px 20px 0 20px' }}>
            {variant === 'Card style' ? (
              <div
                style={{
                  backgroundColor: colors.cardBg,
                  borderRadius: 16,
                  padding: 20,
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                }}
              >
                {renderMockupContent()}
              </div>
            ) : (
              renderMockupContent()
            )}
            <div style={{ height: 16 }} />
          </div>

          {/* Brand Footer */}
          <div style={{ padding: '12px 0 16px 0', textAlign: 'center', backgroundColor: colors.screenBg, flexShrink: 0 }}>
            <div style={{ fontSize: 11, fontWeight: 500, color: colors.footerText }}>
              Powered by -
            </div>
            <img
              src="/Digital_India_logo.svg"
              alt="Digital India"
              style={{
                height: 22,
                marginTop: 6,
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
          <h1 className="wb-title">Manage Data Sharing Consents</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Pattern for managing and withdrawing data sharing consents under the DPDP Act 2023.
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
                <div className={`wb-preview-area ${isDark ? 'dark' : ''}`} style={{ flexDirection: 'column', alignItems: 'center' }}>
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
                      <span style={{ fontSize: 13, fontWeight: 600, color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }}>
                        Variant:
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
                              color: variant === v ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                              transition: 'all 0.2s ease',
                            }}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Render Mobile Phone Mockup */}
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

export default ManageDataSharingConsentsDoc;
