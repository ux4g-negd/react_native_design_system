import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  ColorValue,
} from 'react-native';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { Ux4gButton, Ux4gButtonSize, Ux4gIconProp } from '../button/Button';
import { Ux4gIcons } from '../../foundation/icons';
import {
  ErrorOutlineSvgIcon,
  InboxCopySvgIcon,
  RocketLaunchSvgIcon,
  SearchSvgIcon,
} from '../../assets/icons/EmptyStateVariantIcons';

export type Ux4gEmptyStateVariant =
  | 'noResults'
  | 'noData'
  | 'comingSoon'
  | 'error'
  | 'custom';

export interface Ux4gEmptyStateProps {
  /** Semantic preset controlling the default icon. */
  variant?: Ux4gEmptyStateVariant;
  /** Override icon shown at top. Falls back to variant icon when omitted. */
  icon?: React.ReactNode;
  /** Icon size in px. Defaults to `48`. */
  iconSize?: number;
  /** Icon color. Defaults to `theme.colors.primary`. */
  iconColor?: string;
  /** Main heading text. */
  title: string;
  /** Optional second line text. */
  subtitle?: string;
  /** Optional third line text, concatenated with subtitle. */
  description?: string;
  /** Optional title text style override. */
  titleStyle?: StyleProp<TextStyle>;
  /** Optional body text style override. */
  bodyStyle?: StyleProp<TextStyle>;
  /** Optional action button label. */
  buttonText?: string;
  /** Optional action button press callback. */
  onButtonPressed?: () => void;
  /** Optional button size. Defaults to `'small'`. */
  buttonSize?: Ux4gButtonSize;
  /** Optional leading icon for action button. */
  buttonLeadingIcon?: Ux4gIconProp;
  /** Outer padding. Defaults to 24 on all sides. */
  padding?: number;
  /** Horizontal padding for text block width. Defaults to `24`. */
  bodyHorizontalPadding?: number;
  /** Optional container style override. */
  containerStyle?: StyleProp<ViewStyle>;
  /** Optional test id for e2e/unit tests. */
  testID?: string;
}

const withAlpha = (color: string, alpha: number): ColorValue => {
  if (!color) return `rgba(0, 0, 0, ${alpha})`;

  if (color.startsWith('#')) {
    let hex = color.slice(1);
    if (hex.length === 3) {
      hex = hex
        .split('')
        .map((c) => c + c)
        .join('');
    }
    if (hex.length === 6 || hex.length === 8) {
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
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

const renderDefaultVariantIcon = (
  variant: Ux4gEmptyStateVariant,
  size: number,
  color: string
): React.ReactNode => {
  switch (variant) {
    case 'noResults':
      return <SearchSvgIcon size={size} color={color} />;
    case 'noData':
      return <InboxCopySvgIcon size={size} color={color} />;
    case 'comingSoon':
      return <RocketLaunchSvgIcon size={size} color={color} />;
    case 'error':
      return <ErrorOutlineSvgIcon size={size} color={color} />;
    case 'custom':
    default:
      // Keep fallback aligned with material-style icon behavior for custom usage.
      return Ux4gIcons.info({ size, color });
  }
};

export const Ux4gEmptyState: React.FC<Ux4gEmptyStateProps> = ({
  variant = 'custom',
  icon,
  iconSize = 48,
  iconColor,
  title,
  subtitle,
  description,
  titleStyle,
  bodyStyle,
  buttonText,
  onButtonPressed,
  buttonSize = 'small',
  buttonLeadingIcon,
  padding = 24,
  bodyHorizontalPadding = 24,
  containerStyle,
  testID,
}) => {
  const theme = useUx4gTheme();

  const resolvedIconColor = iconColor ?? theme.colors.primary;
  const titleTypo = theme.typography.hXXS_strong;
  const bodyTypo = theme.typography.bS_default;

  const bodyText = [subtitle, description].filter(Boolean).join(' ');

  const effectiveIcon = icon ?? renderDefaultVariantIcon(variant, iconSize, resolvedIconColor);

  return (
    <View
      testID={testID}
      style={[
        styles.container,
        {
          padding,
        },
        containerStyle,
      ]}
    >
      <View testID={testID ? `${testID}-icon` : undefined}>{effectiveIcon}</View>

      <View style={{ height: theme.space.space16 }} />

      <View style={{ paddingHorizontal: bodyHorizontalPadding }}>
        <Text
          style={[
            styles.centerText,
            {
              color: theme.colors.onBackground,
              fontSize: titleTypo.fontSize,
              fontWeight: titleTypo.fontWeight,
              lineHeight: titleTypo.lineHeight,
            },
            titleStyle,
          ]}
        >
          {title}
        </Text>
      </View>

      {bodyText.length > 0 && (
        <>
          <View style={{ height: theme.space.space8 }} />
          <View style={{ paddingHorizontal: bodyHorizontalPadding }}>
            <Text
              style={[
                styles.centerText,
                {
                  color: withAlpha(theme.colors.onSurface, 0.6),
                  fontSize: bodyTypo.fontSize,
                  fontWeight: bodyTypo.fontWeight,
                  lineHeight: bodyTypo.lineHeight,
                },
                bodyStyle,
              ]}
            >
              {bodyText}
            </Text>
          </View>
        </>
      )}

      {buttonText ? (
        <>
          <View style={{ height: theme.space.space16 }} />
          <Ux4gButton
            text={buttonText}
            onPress={onButtonPressed}
            variant="primary"
            backgroundColor={withAlpha(theme.colors.primary, 0.12).toString()}
            contentColor={theme.colors.primary}
            size={buttonSize}
            leadingIcon={buttonLeadingIcon}
            testID={testID ? `${testID}-button` : undefined}
          />
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
});
