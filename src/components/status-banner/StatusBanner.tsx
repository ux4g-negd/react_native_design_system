import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  DimensionValue,
} from 'react-native';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { UX4GColors } from '../../foundation/colors';
import { Ux4gIcons } from '../../foundation/icons';

export type Ux4gBannerVariant =
  | 'warningLight'
  | 'warningSolid'
  | 'errorLight'
  | 'successLight'
  | 'savingLight'
  | 'infoLight'
  | 'neutralLight'
  | 'primaryLight';

export type Ux4gActionsAlignment =
  | 'start'
  | 'center'
  | 'end'
  | 'space-between'
  | 'space-around';

export interface Ux4gStatusBannerProps {
  /**
   * Banner visual color variant.
   */
  variant: Ux4gBannerVariant;
  /**
   * Main title text header.
   */
  title: string;
  /**
   * Secondary subtitle text description.
   */
  subtitle?: string;
  /**
   * Custom subtitle React Node widget overriding string `subtitle`.
   */
  subtitleWidget?: React.ReactNode;
  /**
   * Maximum number of lines for the title before truncating.
   */
  titleNumberOfLines?: number;
  /**
   * Maximum number of lines for the subtitle before truncating.
   */
  subtitleNumberOfLines?: number;
  /**
   * Truncation mode for title and subtitle text. Defaults to `'tail'`.
   */
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  /**
   * Custom style override for the title text.
   */
  titleStyle?: StyleProp<TextStyle>;
  /**
   * Custom style override for the subtitle text.
   */
  subtitleStyle?: StyleProp<TextStyle>;
  /**
   * Optional badge component displayed next to title text.
   */
  badge?: React.ReactNode;
  /**
   * Optional icon component displayed before title text.
   */
  leadingIcon?: React.ReactNode;
  /**
   * Optional icon component displayed at the top-right trailing end.
   */
  trailingIcon?: React.ReactNode;
  /**
   * Optional list of action buttons or widgets displayed at the bottom of the banner.
   */
  actions?: React.ReactNode[];
  /**
   * Dismiss callback fired when trailing close icon is pressed.
   */
  onDismiss?: () => void;
  /**
   * Custom background color override.
   */
  backgroundColor?: string;
  /**
   * Custom border color override.
   */
  borderColor?: string;
  /**
   * Alignment for bottom actions row. Defaults to `'start'`.
   */
  actionsAlignment?: Ux4gActionsAlignment;
  /**
   * Explicit banner width.
   */
  width?: DimensionValue;
  /**
   * Explicit banner height.
   */
  height?: number;
  /**
   * Outer margin style override. Defaults to `{ marginHorizontal: 16, marginVertical: 8 }`.
   */
  marginStyle?: StyleProp<ViewStyle>;
  /**
   * Inner padding style override. Defaults to `{ paddingHorizontal: 16, paddingVertical: 12 }`.
   */
  paddingStyle?: StyleProp<ViewStyle>;
  /**
   * Additional style override for outer container.
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Optional test ID for automated testing.
   */
  testID?: string;
}

const withAlpha = (color: string, alpha: number): string => {
  if (!color) return `rgba(0, 0, 0, ${alpha})`;
  if (color.startsWith('#')) {
    let hex = color.slice(1);
    if (hex.length === 3) {
      hex = hex.split('').map((c) => c + c).join('');
    }
    if (hex.length === 6) {
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    if (hex.length === 8) {
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
  }
  if (color.startsWith('rgb')) {
    return color.replace(/rgba?\(([^)]+)\)/, (_, p1) => {
      const parts = p1.split(',').map((s: string) => s.trim());
      return `rgba(${parts[0]}, ${parts[1]}, ${parts[2]}, ${alpha})`;
    });
  }
  return color;
};

const mapAlignment = (alignment: Ux4gActionsAlignment): ViewStyle['justifyContent'] => {
  switch (alignment) {
    case 'start':
      return 'flex-start';
    case 'center':
      return 'center';
    case 'end':
      return 'flex-end';
    case 'space-between':
      return 'space-between';
    case 'space-around':
      return 'space-around';
    default:
      return 'flex-start';
  }
};

/**
 * **Ux4gStatusBanner** (`StatusBanner`)
 *
 * Full React Native port of Flutter `status_banner.dart` (`Ux4gStatusBanner`).
 * Displays contextual status banners with variants (`warningLight`, `warningSolid`, `errorLight`, `successLight`,
 * `savingLight`, `infoLight`, `neutralLight`, `primaryLight`), leading/trailing icons, badges, and inline actions.
 */
export const Ux4gStatusBanner: React.FC<Ux4gStatusBannerProps> = ({
  variant,
  title,
  subtitle,
  subtitleWidget,
  titleStyle,
  subtitleStyle,
  titleNumberOfLines,
  subtitleNumberOfLines,
  ellipsizeMode = 'tail',
  badge,
  leadingIcon,
  trailingIcon,
  actions,
  onDismiss,
  backgroundColor,
  borderColor,
  actionsAlignment = 'start',
  width,
  height,
  marginStyle,
  paddingStyle,
  containerStyle,
  testID,
}) => {
  const theme = useUx4gTheme();
  const colors = theme.colors;
  const typography = theme.typography;
  const isDark = theme.isDark;

  const warning = colors.warning ?? UX4GColors.orange600;
  const onWarning = colors.onWarning ?? (isDark ? UX4GColors.neutral900 : UX4GColors.white);
  const error = colors.error ?? UX4GColors.red600;
  const success = colors.success ?? UX4GColors.green600;
  const primary = colors.primary ?? UX4GColors.primary600;
  const info = colors.info ?? UX4GColors.cyan600;
  const onSurface = colors.onSurface ?? (isDark ? UX4GColors.neutral50 : UX4GColors.neutral900);

  let defaultBg: string;
  let defaultBorder: string;
  let textColor: string = onSurface;
  let subtitleColor: string = withAlpha(onSurface, 0.6);

  switch (variant) {
    case 'warningLight':
      defaultBg = isDark ? withAlpha(warning, 0.15) : UX4GColors.orange50;
      defaultBorder = withAlpha(warning, 0.3);
      break;
    case 'warningSolid':
      defaultBg = warning;
      defaultBorder = warning;
      textColor = onWarning;
      subtitleColor = withAlpha(onWarning, 0.75);
      break;
    case 'errorLight':
      defaultBg = isDark ? withAlpha(error, 0.15) : UX4GColors.red50;
      defaultBorder = withAlpha(error, 0.3);
      break;
    case 'successLight':
      defaultBg = isDark ? withAlpha(success, 0.15) : UX4GColors.green50;
      defaultBorder = withAlpha(success, 0.3);
      break;
    case 'savingLight':
    case 'primaryLight':
      defaultBg = isDark ? withAlpha(primary, 0.15) : UX4GColors.primary50;
      defaultBorder = withAlpha(primary, 0.3);
      break;
    case 'infoLight':
      defaultBg = isDark ? withAlpha(info, 0.15) : UX4GColors.cyan50;
      defaultBorder = withAlpha(info, 0.3);
      break;
    case 'neutralLight':
      defaultBg = withAlpha(onSurface, 0.05);
      defaultBorder = withAlpha(onSurface, 0.15);
      break;
  }

  const resolvedBg = backgroundColor ?? defaultBg;
  const resolvedBorder = borderColor ?? defaultBorder;

  let defaultIcon: React.ReactNode = null;
  if (!leadingIcon) {
    switch (variant) {
      case 'warningLight':
        defaultIcon = Ux4gIcons.warning({ size: 20, color: warning });
        break;
      case 'warningSolid':
        defaultIcon = Ux4gIcons.warning({ size: 20, color: onWarning });
        break;
      case 'errorLight':
        defaultIcon = Ux4gIcons.fillRevInfo({ size: 20, color: error });
        break;
      case 'successLight':
        defaultIcon = Ux4gIcons.success({ size: 20, color: success });
        break;
      case 'savingLight':
      case 'primaryLight':
        defaultIcon = Ux4gIcons.info({ size: 20, color: primary });
        break;
      case 'infoLight':
        defaultIcon = Ux4gIcons.info({ size: 20, color: info });
        break;
      case 'neutralLight':
        defaultIcon = Ux4gIcons.info({ size: 20, color: onSurface });
        break;
    }
  }

  const effectiveLeadingIcon = leadingIcon ?? defaultIcon;

  const titleTypo = typography.bM_strong;
  const subtitleTypo = typography.bM_default;

  const hasSubtitle = subtitle !== undefined || subtitleWidget !== undefined;

  return (
    <View
      testID={testID}
      style={[
        styles.container,
        {
          backgroundColor: resolvedBg,
          borderColor: resolvedBorder,
          width: width ?? '100%',
          height,
          minHeight: height ?? 48,
        },
        marginStyle ?? styles.defaultMargin,
        paddingStyle ?? styles.defaultPadding,
        containerStyle,
      ]}
    >
      {/* Header Row */}
      <View
        style={[
          styles.headerRow,
          { alignItems: hasSubtitle ? 'flex-start' : 'center' },
        ]}
      >
        {effectiveLeadingIcon && (
          <View style={styles.leadingContainer}>{effectiveLeadingIcon}</View>
        )}

        <View style={styles.contentColumn}>
          <View style={styles.titleWrap}>
            <Text
              numberOfLines={titleNumberOfLines}
              ellipsizeMode={ellipsizeMode}
              style={[
                styles.titleText,
                {
                  fontSize: titleTypo.fontSize,
                  fontWeight: titleTypo.fontWeight,
                  lineHeight: titleTypo.lineHeight,
                  color: textColor,
                },
                titleStyle,
              ]}
            >
              {title}
            </Text>
            {badge && <View style={styles.badgeContainer}>{badge}</View>}
          </View>

          {subtitleWidget ? (
            <View style={styles.subtitleMargin}>{subtitleWidget}</View>
          ) : subtitle ? (
            <Text
              numberOfLines={subtitleNumberOfLines}
              ellipsizeMode={ellipsizeMode}
              style={[
                styles.subtitleText,
                {
                  fontSize: subtitleTypo.fontSize,
                  fontWeight: subtitleTypo.fontWeight,
                  lineHeight: subtitleTypo.lineHeight,
                  color: subtitleColor,
                },
                subtitleStyle,
              ]}
            >
              {subtitle}
            </Text>
          ) : null}
        </View>

        {trailingIcon ? (
          <View style={styles.trailingContainer}>{trailingIcon}</View>
        ) : onDismiss ? (
          <Pressable
            testID={testID ? `${testID}-dismiss` : undefined}
            onPress={onDismiss}
            style={({ pressed }) => [styles.dismissBtn, { opacity: pressed ? 0.5 : 1 }]}
            hitSlop={8}
          >
            {Ux4gIcons.close({ size: 16, color: textColor })}
          </Pressable>
        ) : null}
      </View>

      {/* Bottom Actions Row */}
      {actions && actions.length > 0 && (
        <View
          style={[
            styles.actionsRow,
            { justifyContent: mapAlignment(actionsAlignment) },
          ]}
        >
          {actions.map((act, idx) => (
            <React.Fragment key={idx}>{act}</React.Fragment>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    shadowColor: UX4GColors.neutral1000black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  defaultMargin: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  defaultPadding: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerRow: {
    flexDirection: 'row',
  },
  leadingContainer: {
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentColumn: {
    flex: 1,
    justifyContent: 'center',
  },
  titleWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 8,
  },
  titleText: {
    includeFontPadding: false,
    flexShrink: 1,
  },
  badgeContainer: {
    justifyContent: 'center',
  },
  subtitleText: {
    marginTop: 4,
    includeFontPadding: false,
  },
  subtitleMargin: {
    marginTop: 4,
    alignSelf: 'flex-start',
  },
  trailingContainer: {
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dismissBtn: {
    marginLeft: 16,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsRow: {
    marginTop: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 12,
  },
});
