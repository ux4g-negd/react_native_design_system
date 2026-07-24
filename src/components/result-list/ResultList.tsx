import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  Animated,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Platform,
  UIManager,
  LayoutAnimation,
  useWindowDimensions,
} from 'react-native';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { Ux4gButton } from '../button/Button';
import { Ux4gTag, Ux4gTagColor, Ux4gUnifiedPillTag, Ux4gPillSegment } from '../tag/Tag';
import { UX4GColors } from '../../foundation/colors';
import { Ux4gIcons } from '../../foundation/icons';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export interface Ux4gResultDetail {
  label: string;
  value: string;
  icon?: string;
  valueColor?: string;
  isBold?: boolean;
  customValueWidget?: React.ReactNode;
}

export interface Ux4gResultListProps {
  title: string;
  titleTrailing?: React.ReactNode;
  statusTag?: string;
  tagColorScheme?: Ux4gTagColor;
  metadataSegments?: Ux4gPillSegment[];
  customMetadata?: React.ReactNode;
  actionButtonText?: string;
  actionLeading?: React.ReactNode;
  onActionPressed?: () => void;
  actionButtonIcon?: React.ReactNode | ((props: { color: string; size: number }) => React.ReactNode);
  actionButtonColor?: string;
  details?: Ux4gResultDetail[];
  expandedChild?: React.ReactNode;
  detailsColumns?: number;
  initialExpanded?: boolean;
  onToggle?: (expanded: boolean) => void;
  showBottomDivider?: boolean;
  contentPadding?: number;
  testID?: string;
}

export const Ux4gResultList: React.FC<Ux4gResultListProps> = ({
  title,
  titleTrailing,
  statusTag,
  tagColorScheme = 'neutral',
  metadataSegments,
  customMetadata,
  actionButtonText,
  actionLeading,
  onActionPressed,
  actionButtonIcon,
  actionButtonColor,
  details = [],
  expandedChild,
  detailsColumns = 2,
  initialExpanded = false,
  onToggle,
  showBottomDivider = true,
  contentPadding = 16,
  testID,
}) => {
  const theme = useUx4gTheme();
  const { colors, typography, isDark } = theme;
  const [isExpanded, setIsExpanded] = useState(initialExpanded);
  const { width: screenWidth } = useWindowDimensions();

  // Animation for the chevron rotation
  const rotationAnimation = useRef(new Animated.Value(initialExpanded ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(rotationAnimation, {
      toValue: isExpanded ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isExpanded, rotationAnimation]);

  const chevronRotation = rotationAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const handleToggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const nextState = !isExpanded;
    setIsExpanded(nextState);
    if (onToggle) {
      onToggle(nextState);
    }
  };

  const ChevronDown = Ux4gIcons.chevronDown as any;
  const borderColor = isDark ? '#27272A' : '#D4D4D8'; // neutral800 vs neutral300 approximation

  const renderDetails = () => {
    if (!isExpanded) return null;

    const columnCount = screenWidth > 400 ? detailsColumns : 1;
    const itemWidth = columnCount > 1 ? `${100 / columnCount}%` : '100%';

    return (
      <View style={[styles.expandedContainer, { paddingHorizontal: contentPadding, paddingBottom: 24 }]}>
        {details.length > 0 && (
          <View style={styles.detailsGrid}>
            {details.map((detail, index) => {
              const DetailIcon = detail.icon ? Ux4gIcons[detail.icon.replace(/-([a-z])/g, (g) => g[1].toUpperCase()) as keyof typeof Ux4gIcons] as any : null;
              
              return (
                <View key={`detail-${index}`} style={{ width: itemWidth as any, paddingRight: 8, paddingBottom: 20 }}>
                  <Text style={[typography.bS_default, { color: colors.onSurface + '80', marginBottom: 4 }]}>
                    {detail.label}
                  </Text>
                  {detail.customValueWidget ? (
                    detail.customValueWidget
                  ) : (
                    <View style={styles.detailValueRow}>
                      {DetailIcon && (
                        <View style={{ marginRight: 4 }}>
                          <DetailIcon size={16} color={detail.valueColor ?? colors.onBackground} />
                        </View>
                      )}
                      <Text
                        style={[
                          detail.isBold ? typography.bM_strong : typography.bM_default,
                          { color: detail.valueColor ?? colors.onBackground, flexShrink: 1 },
                        ]}
                      >
                        {detail.value}
                      </Text>
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        )}
        {expandedChild}
      </View>
    );
  };

  return (
    <View testID={testID} style={styles.container}>
      <Pressable onPress={handleToggle} accessibilityRole="button" accessibilityState={{ expanded: isExpanded }}>
        <View style={[styles.headerRow, { padding: contentPadding }]}>
          {/* Left Content */}
          <View style={styles.leftContent}>
            <View style={styles.titleRow}>
              <Text style={[typography.bL_strong, { color: colors.onBackground, flexShrink: 1 }]} numberOfLines={1} ellipsizeMode="tail">
                {title}
              </Text>
              {titleTrailing && (
                <View style={{ marginLeft: 4 }}>
                  {titleTrailing}
                </View>
              )}
            </View>

            {(statusTag || (metadataSegments && metadataSegments.length > 0) || customMetadata) && (
              <View style={styles.metadataWrap}>
                {statusTag && (
                  <View style={{ marginRight: 8, marginBottom: 4 }}>
                    <Ux4gTag
                      text={statusTag}
                      colorScheme={tagColorScheme}
                      shape="rectangular"
                      style="tonal"
                    />
                  </View>
                )}
                {customMetadata && (
                  <View style={{ marginRight: 8, marginBottom: 4 }}>
                    {customMetadata}
                  </View>
                )}
                {!customMetadata && metadataSegments && metadataSegments.length > 0 && (
                  <View style={{ marginBottom: 4 }}>
                    <Ux4gUnifiedPillTag
                      segments={metadataSegments}
                      borderColor={borderColor}
                    />
                  </View>
                )}
              </View>
            )}
          </View>

          {/* Right Content */}
          <View style={styles.rightContent}>
            {actionLeading && (
              <View style={{ marginRight: 8 }}>
                {actionLeading}
              </View>
            )}
            {actionButtonText && (
              <View style={{ marginRight: 8 }}>
                <Ux4gButton
                  text={actionButtonText}
                  variant="outline"
                  size="small"
                  contentColor={actionButtonColor ?? (isDark ? UX4GColors.neutral50 : UX4GColors.neutral900)}
                  borderColor={actionButtonColor ?? (isDark ? UX4GColors.neutral600 : UX4GColors.neutral300)}
                  leadingIcon={actionButtonIcon}
                  onPress={onActionPressed ?? (() => {})}
                />
              </View>
            )}
            <Animated.View style={{ transform: [{ rotate: chevronRotation }] }}>
              {ChevronDown ? (
                <ChevronDown size={24} color={colors.onSurface + 'CC'} />
              ) : (
                <View style={{ width: 24, height: 24, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: colors.onSurface + 'CC', fontSize: 14 }}>▼</Text>
                </View>
              )}
            </Animated.View>
          </View>
        </View>
      </Pressable>

      {/* Expanded Content */}
      <View style={{ overflow: 'hidden' }}>
        {renderDetails()}
      </View>

      {/* Bottom Divider */}
      {showBottomDivider && (
        <View style={[styles.divider, { backgroundColor: colors.onSurface + '1A' }]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
  leftContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metadataWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 8,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  expandedContainer: {
    width: '100%',
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  detailValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    width: '100%',
  },
});
