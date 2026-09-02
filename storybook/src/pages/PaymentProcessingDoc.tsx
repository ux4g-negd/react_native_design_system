import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { UX4GColors } from '../../../src/foundation/colors';
import { defaultUx4gTypography } from '../../../src/foundation/typography';
import { Ux4gAppHeader } from '../../../src/components/app-header/AppHeader';
import { Ux4gDivider } from '../../../src/components/divider/Divider';
import { Ux4gSpinner } from '../../../src/components/spinner/Spinner';
import { CodeBlock } from '../components/CodeBlock';
import { UnionLogo } from '../components/UnionLogo';

interface PaymentProcessingDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type VariantType = 'default' | 'card';

export const PaymentProcessingDoc: React.FC<PaymentProcessingDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [variant, setVariant] = useState<VariantType>('default');

  // Exact color tokens from UX4G Flutter Design System
  const colors = useMemo(() => {
    const isCard = variant === 'card';
    return {
      screenBg: isCard
        ? isDark
          ? UX4GColors.primary800 // #301C7D
          : UX4GColors.primary100 // #DCD4FF
        : isDark
        ? UX4GColors.neutral950 // #0A0A0A
        : UX4GColors.neutral50, // #FAFAFA
      headerBg: isDark ? UX4GColors.gray900 : UX4GColors.neutral0,
      cardBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      modalBg: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      border: isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      titleColor: isDark ? UX4GColors.neutral50 : UX4GColors.gray900,
      subtleText: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
      primary: UX4GColors.primary,
      primaryLight: UX4GColors.primary300,
    };
  }, [isDark, variant]);

  // Clean React Native TSX code snippet matching Flutter paymentProcessingComponent
  const codeString = useMemo(() => {
    if (variant === 'card') {
      return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gModal,
  Ux4gSpinner,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const PaymentProcessingCardPattern = ({ isDark }: { isDark: boolean }) => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={[styles.screen, { backgroundColor: isDark ? UX4GColors.primary800 : UX4GColors.primary100 }]}>
      {/* Background Screen Layout */}
      <Ux4gAppHeader
        title=""
        variant={isDark ? 'dark' : 'light'}
        elevation={2}
        useSafeArea={false}
        horizontalPadding={16}
        leadingSpacing={8}
        backgroundColor={isDark ? UX4GColors.gray900 : UX4GColors.neutral0}
        borderColor={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}
        leadingWidgets={[
          <Image key="emblem" source={{ uri: '/national_emblem_logo.svg' }} style={styles.emblemLogo} resizeMode="contain" />,
          <View key="divider" style={styles.headerDivider} />,
          <Image key="union" source={{ uri: '/Union.svg' }} style={styles.unionLogo} resizeMode="contain" />,
        ]}
      />
      <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />

      {/* Stepper Bar */}
      <View style={styles.stepBarContainer}>
        {/* Horizontal 4-Step Stepper */}
      </View>
      <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />

      <View style={[styles.body, { backgroundColor: isDark ? UX4GColors.primary800 : UX4GColors.primary100 }]}>
        <View style={[styles.card, { backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral0 }]}>
          <Text style={[styles.bgTitle, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
            Choose payment method
          </Text>
          <Text style={[styles.bgSubtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
            Select how you would like to pay Rs 41.30.
          </Text>
        </View>
      </View>

      {/* Centered Modal Card using Ux4gModal */}
      <Ux4gModal
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        alignment="centered"
        showHeader={true}
        headerTitle="Redirecting.."
        showSubtitle={true}
        subtitleText={'Please do not close or refresh this page.\\nWe are securely processing your\\npayment.'}
        showFooter={false}
        showCloseButton={false}
        showDividers={false}
        bodyContent={
          <View style={styles.spinnerWrapper}>
            <Ux4gSpinner size={40} strokeWidth={4} color={isDark ? UX4GColors.primary300 : UX4GColors.primary} />
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  emblemLogo: { height: 32, width: 32 },
  headerDivider: { width: 1, height: 24, backgroundColor: '#E5E7EB', marginHorizontal: 4 },
  unionLogo: { height: 32, width: 32 },
  stepBarContainer: { paddingVertical: 16, paddingHorizontal: 16 },
  body: { flex: 1, padding: 16 },
  card: { borderRadius: 16, padding: 24 },
  bgTitle: { fontSize: 22, fontWeight: '800', lineHeight: 26 },
  bgSubtitle: { fontSize: 13, marginTop: 4 },
  spinnerWrapper: { alignItems: 'center', justifyContent: 'center', paddingVertical: 16 },
});`;
    }

    return `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gDivider,
  Ux4gModal,
  Ux4gSpinner,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const PaymentProcessingDefaultPattern = ({ isDark }: { isDark: boolean }) => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={[styles.screen, { backgroundColor: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50 }]}>
      {/* Background Screen Layout */}
      <Ux4gAppHeader
        title=""
        variant={isDark ? 'dark' : 'light'}
        elevation={2}
        useSafeArea={false}
        horizontalPadding={16}
        leadingSpacing={8}
        backgroundColor={isDark ? UX4GColors.gray900 : UX4GColors.neutral0}
        borderColor={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200}
        leadingWidgets={[
          <Image key="emblem" source={{ uri: '/national_emblem_logo.svg' }} style={styles.emblemLogo} resizeMode="contain" />,
          <View key="divider" style={styles.headerDivider} />,
          <Image key="union" source={{ uri: '/Union.svg' }} style={styles.unionLogo} resizeMode="contain" />,
        ]}
      />
      <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />

      {/* Stepper Bar */}
      <View style={styles.stepBarContainer}>
        {/* Horizontal 4-Step Stepper */}
      </View>
      <Ux4gDivider color={isDark ? UX4GColors.neutral800 : UX4GColors.neutral200} />

      <View style={[styles.body, { backgroundColor: isDark ? UX4GColors.neutral950 : UX4GColors.neutral50 }]}>
        <Text style={[styles.bgTitle, { color: isDark ? UX4GColors.neutral50 : UX4GColors.gray900 }]}>
          Choose payment method
        </Text>
        <Text style={[styles.bgSubtitle, { color: isDark ? UX4GColors.neutral400 : UX4GColors.neutral500 }]}>
          Select how you would like to pay Rs 41.30.
        </Text>
      </View>

      {/* Centered Modal Card using Ux4gModal */}
      <Ux4gModal
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        alignment="centered"
        showHeader={true}
        headerTitle="Redirecting.."
        showSubtitle={true}
        subtitleText={'Please do not close or refresh this page.\\nWe are securely processing your\\npayment.'}
        showFooter={false}
        showCloseButton={false}
        showDividers={false}
        bodyContent={
          <View style={styles.spinnerWrapper}>
            <Ux4gSpinner size={40} strokeWidth={4} color={isDark ? UX4GColors.primary300 : UX4GColors.primary} />
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  emblemLogo: { height: 32, width: 32 },
  headerDivider: { width: 1, height: 24, backgroundColor: '#E5E7EB', marginHorizontal: 4 },
  unionLogo: { height: 32, width: 32 },
  stepBarContainer: { paddingVertical: 16, paddingHorizontal: 16 },
  body: { flex: 1, padding: 16 },
  bgTitle: { fontSize: 22, fontWeight: '800', lineHeight: 26 },
  bgSubtitle: { fontSize: 13, marginTop: 4 },
  spinnerWrapper: { alignItems: 'center', justifyContent: 'center', paddingVertical: 16 },
});`;
  }, [variant]);

  // Live interactive mockup matching Flutter paymentProcessingComponent (_PaymentProcessingMockup / _PaymentProcessingCardMockup) EXACTLY
  const renderLiveMockup = () => {
    const isCard = variant === 'card';
    const bgScreenColor = colors.screenBg;

    return (
      <div
        style={{
          width: '100%',
          maxWidth: 360,
          borderRadius: 24,
          overflow: 'hidden',
          boxShadow: isDark
            ? '0 12px 32px rgba(0, 0, 0, 0.6), 0 0 0 1px #333333'
            : '0 12px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px #E5E7EB',
          backgroundColor: bgScreenColor,
          display: 'flex',
          flexDirection: 'column',
          minHeight: 680,
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* Background Content (Behind the Scrim Overlay) */}
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', filter: 'none' }}>
          {/* Top Header Bar (_BrandHeader in Flutter) */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Ux4gAppHeader
              title=""
              variant="light"
              elevation={2}
              useSafeArea={false}
              height={56}
              horizontalPadding={16}
              leadingSpacing={8}
              backgroundColor={colors.headerBg}
              borderColor={colors.border}
              leadingWidgets={[
                <img
                  key="emblem"
                  src="/national_emblem_logo.svg"
                  alt="National Emblem"
                  style={{
                    height: 32,
                    filter: isDark ? 'brightness(0) invert(1)' : 'none',
                  }}
                />,
                <div
                  key="divider"
                  style={{
                    width: 1,
                    height: 24,
                    backgroundColor: isDark ? UX4GColors.neutral700 : UX4GColors.neutral300,
                    margin: '0 4px',
                  }}
                />,
                <UnionLogo key="union" size={32} isDark={isDark} />,
              ]}
            />
            <div
              style={{
                height: 1,
                backgroundColor: colors.border,
                width: '100%',
              }}
            />
          </div>

          {/* Stepper Bar (_PmtStepBar in Flutter) */}
          <div
            style={{
              backgroundColor: colors.headerBg,
              padding: '24px 28px 6px 16px',
              borderBottom: `1px solid ${colors.border}`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', position: 'relative' }}>
              {[1, 2, 3, 4].map((stepIndex, idx) => {
                const isCompleted = stepIndex < 4;
                const isActive = stepIndex === 4;
                const primaryColor = isDark ? colors.primaryLight : colors.primary;

                return (
                  <React.Fragment key={stepIndex}>
                    {idx > 0 && (
                      <div
                        style={{
                          flex: 1,
                          height: 2.5,
                          borderRadius: 1.25,
                          backgroundColor: idx < 4 ? primaryColor : (isDark ? UX4GColors.neutral800 : UX4GColors.neutral300),
                          margin: '11px 4px 0 4px',
                        }}
                      />
                    )}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: '50%',
                          backgroundColor: isCompleted ? primaryColor : 'transparent',
                          border: `2px solid ${
                            isCompleted || isActive
                              ? primaryColor
                              : (isDark ? UX4GColors.neutral800 : UX4GColors.neutral300)
                          }`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxSizing: 'border-box',
                        }}
                      >
                        {isCompleted ? (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isDark ? UX4GColors.neutral900 : '#FFFFFF'} strokeWidth="3.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        ) : isActive ? (
                          <div
                            style={{
                              width: 10,
                              height: 10,
                              borderRadius: '50%',
                              backgroundColor: primaryColor,
                            }}
                          />
                        ) : (
                          <span style={{ fontSize: 11, fontWeight: 700, color: isDark ? UX4GColors.neutral600 : UX4GColors.neutral400 }}>
                            {stepIndex}
                          </span>
                        )}
                      </div>
                      {isActive && (
                        <span
                          style={{
                            position: 'absolute',
                            top: 27,
                            fontSize: 11,
                            fontWeight: 600,
                            color: colors.titleColor,
                            whiteSpace: 'nowrap',
                          }}
                        >
                          Payment
                        </span>
                      )}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
            <div style={{ height: 18 }} />
          </div>

          {/* Main Background Area */}
          <div
            style={{
              flex: 1,
              padding: isCard ? '20px 16px 16px 16px' : '20px 16px 16px 16px',
              backgroundColor: bgScreenColor,
            }}
          >
            <div
              style={{
                backgroundColor: isCard ? colors.cardBg : 'transparent',
                borderRadius: isCard ? 16 : 0,
                padding: isCard ? '24px 16px 20px 16px' : '0',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h2
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  lineHeight: 1.2,
                  color: colors.titleColor,
                  margin: 0,
                }}
              >
                Choose payment method
              </h2>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: '1.4',
                  color: colors.subtleText,
                  margin: '4px 0 0 0',
                }}
              >
                Select how you would like to pay Rs 41.30.
              </p>
            </div>
          </div>
        </div>

        {/* Semi-transparent Dark Scrim Overlay (45% black opacity) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.45)',
            zIndex: 20,
          }}
        />

        {/* Centered Modal Card */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 30,
            padding: '0 32px',
          }}
        >
          <div
            style={{
              backgroundColor: colors.modalBg,
              borderRadius: 16,
              padding: '28px 24px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
              textAlign: 'center',
            }}
          >
            {/* 1:1 Pixel-Perfect Flutter SweepGradient Spinner (Native SVG animateTransform for guaranteed 60 FPS rotation) */}
            {(() => {
              const size = 44;
              const strokeWidth = 4;
              const half = size / 2;
              const r = (size - strokeWidth) / 2;
              const numSegments = 40;
              const sweepAngle = (300 * Math.PI) / 180;
              const primaryColor = isDark ? '#A391FF' : '#4A2BC2';

              const segments = [];
              for (let i = 0; i < numSegments; i++) {
                const startFrac = i / numSegments;
                const endFrac = (i + 1.05) / numSegments;
                const startA = startFrac * sweepAngle;
                const endA = endFrac * sweepAngle;

                const x1 = half + r * Math.cos(startA);
                const y1 = half + r * Math.sin(startA);
                const x2 = half + r * Math.cos(endA);
                const y2 = half + r * Math.sin(endA);

                const largeArc = endA - startA > Math.PI ? 1 : 0;
                const d = `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
                const opacity = Math.pow(startFrac, 1.2).toFixed(3);

                segments.push(
                  <path
                    key={i}
                    d={d}
                    stroke={primaryColor}
                    strokeWidth={strokeWidth}
                    strokeOpacity={opacity}
                    fill="none"
                    strokeLinecap="butt"
                  />
                );
              }

              const capX = half + r * Math.cos(sweepAngle);
              const capY = half + r * Math.sin(sweepAngle);

              return (
                <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from={`0 ${half} ${half}`}
                      to={`360 ${half} ${half}`}
                      dur="1s"
                      repeatCount="indefinite"
                    />
                    {/* Subtle background ring track */}
                    <circle
                      cx={half}
                      cy={half}
                      r={r}
                      stroke={isDark ? 'rgba(163, 145, 255, 0.15)' : 'rgba(74, 43, 194, 0.15)'}
                      strokeWidth={strokeWidth}
                      fill="none"
                    />
                    {/* Sweep gradient arc segments */}
                    {segments}
                    {/* Rounded leading head cap dot */}
                    <circle cx={capX} cy={capY} r={strokeWidth / 2} fill={primaryColor} />
                  </g>
                </svg>
              );
            })()}

            <div style={{ height: 20 }} />

            {/* Title */}
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                lineHeight: 1.2,
                color: colors.titleColor,
                margin: 0,
              }}
            >
              Redirecting..
            </h3>

            <div style={{ height: 12 }} />

            {/* Subtitle Message */}
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.4,
                color: colors.subtleText,
                margin: 0,
                whiteSpace: 'pre-line',
              }}
            >
              Please do not close or refresh this page.
              {'\n'}We are securely processing your
              {'\n'}payment.
            </p>
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
          <h1 className="wb-title">Payment Processing</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Dimmed overlay with a centered modal card and a spinning indicator shown while the app redirects to PayGov. Toggle between flat phone layout and card-style layout. Mobile-sized layout (360px).
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
                        color: variant === 'default' ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
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
                        color: variant === 'card' ? UX4GColors.neutral0 : isDark ? UX4GColors.neutral400 : UX4GColors.neutral600,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      Card style
                    </button>
                  </div>

                  {/* Render Mobile Phone Mockup */}
                  {renderLiveMockup()}
                </div>
              </Ux4gThemeProvider>
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
                  <span style={{ fontSize: 13, fontWeight: 600, color: isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }}>
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
