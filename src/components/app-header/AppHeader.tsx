import React from 'react';
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  StyleProp,
  TextStyle,
  ViewStyle,
  Platform,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { Ux4gIcons, Ux4gIconName } from '../../foundation/icons';
import { Ux4gAvatar, Ux4gAvatarSize } from '../avatar/Avatar';

export type Ux4gAppHeaderVariant = 'light' | 'filled' | 'outlined';

export interface Ux4gAppHeaderAction {
  icon?: Ux4gIconName;
  onPressed?: () => void;
  tooltip?: string;
  customWidget?: React.ReactNode;
}

export interface Ux4gAppHeaderProps {
  title?: string;
  variant?: Ux4gAppHeaderVariant;
  showBackButton?: boolean;
  onBackPressed?: () => void;
  leadingWidgets?: React.ReactNode[];
  actions?: Ux4gAppHeaderAction[];
  avatar?: React.ReactNode;
  avatarSize?: Ux4gAvatarSize;
  showAvatar?: boolean;
  avatarImageUrl?: string;
  avatarInitials?: string;
  onAvatarPressed?: () => void;
  titleWidget?: React.ReactNode;
  titleStyle?: StyleProp<TextStyle>;
  backgroundColor?: string;
  foregroundColor?: string;
  borderColor?: string;
  height?: number;
  horizontalPadding?: number;
  leadingSpacing?: number;
  actionSpacing?: number;
  elevation?: number;
  useSafeArea?: boolean;
  testID?: string;
}

export const Ux4gAppHeader: React.FC<Ux4gAppHeaderProps> = ({
  title = 'Title',
  variant = 'outlined',
  showBackButton = false,
  onBackPressed,
  leadingWidgets,
  actions,
  avatar,
  avatarSize = 's',
  showAvatar = false,
  avatarImageUrl,
  avatarInitials,
  onAvatarPressed,
  titleWidget,
  titleStyle,
  backgroundColor,
  foregroundColor,
  borderColor,
  height,
  horizontalPadding = 12, // Ux4gSpace.space12 equivalent
  leadingSpacing = 8,    // Ux4gSpace.space8 equivalent
  actionSpacing = 4,     // Ux4gSpace.space4 equivalent
  elevation = 0,
  useSafeArea = true,
  testID,
}) => {
  const theme = useUx4gTheme();
  const { colors } = theme;

  const screenWidth = Dimensions.get('window').width;
  const isSmallScreen = screenWidth < 600;
  const resolvedHeight = height ?? (isSmallScreen ? 48 : 56);

  const resolveBackgroundColor = () => {
    if (backgroundColor) return backgroundColor;
    switch (variant) {
      case 'light':
      case 'outlined':
        return colors.surface;
      case 'filled':
        return colors.primary;
    }
  };

  const resolveForegroundColor = () => {
    if (foregroundColor) return foregroundColor;
    switch (variant) {
      case 'light':
      case 'outlined':
        return colors.onSurface;
      case 'filled':
        return colors.onPrimary;
    }
  };

  const bg = resolveBackgroundColor();
  const fg = resolveForegroundColor();

  const resolvedTitleStyle = [
    {
      color: fg,
      fontSize: 16,
      fontWeight: '600' as const,
    },
    titleStyle,
  ];

  // Build leading section
  let leadingSection = null;
  if (showBackButton) {
    leadingSection = (
      <HeaderIconButton
        icon="arrow-back"
        color={fg}
        onPressed={onBackPressed}
        tooltip="Go back"
      />
    );
  } else if (leadingWidgets && leadingWidgets.length > 0) {
    leadingSection = (
      <View style={styles.rowCenter}>
        {leadingWidgets.map((widget, index) => (
          <View key={`leading-${index}`} style={styles.rowCenter}>
            {index > 0 && <View style={{ width: leadingSpacing }} />}
            {widget}
          </View>
        ))}
      </View>
    );
  }

  // Build avatar widget
  let avatarWidget = null;
  if (avatar) {
    avatarWidget = (
      <Pressable onPress={onAvatarPressed} accessibilityRole="button" accessibilityLabel="Profile avatar">
        {avatar}
      </Pressable>
    );
  } else if (showAvatar) {
    avatarWidget = (
      <Pressable onPress={onAvatarPressed} accessibilityRole="button" accessibilityLabel="Profile avatar">
        <Ux4gAvatar
          size={avatarSize}
          imageUrl={avatarImageUrl}
          initials={avatarInitials}
        />
      </Pressable>
    );
  }

  // Build trailing section
  let trailingSection = null;
  const hasActions = actions && actions.length > 0;
  const hasAvatar = !!avatarWidget;

  if (hasActions || hasAvatar) {
    trailingSection = (
      <View style={styles.rowCenter}>
        {hasActions &&
          actions!.map((action, index) => (
            <View key={`action-${index}`} style={styles.rowCenter}>
              {index > 0 && <View style={{ width: actionSpacing }} />}
              {action.customWidget ?? (
                <HeaderIconButton
                  icon={action.icon ?? 'search'} // default fallback icon
                  color={fg}
                  onPressed={action.onPressed}
                  tooltip={action.tooltip}
                />
              )}
            </View>
          ))}
        {hasActions && hasAvatar && <View style={{ width: actionSpacing }} />}
        {hasAvatar && avatarWidget}
      </View>
    );
  }

  const borderBottomWidth = variant === 'outlined' ? 1 : 0;
  // Fallback to slightly transparent text color if borderColor is null
  const resolvedBorderColor = borderColor ?? `${colors.onSurface}1F`;

  const containerStyle: StyleProp<ViewStyle> = {
    backgroundColor: bg,
    borderBottomWidth,
    borderBottomColor: resolvedBorderColor,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: elevation / 2 },
        shadowOpacity: elevation > 0 ? 0.1 : 0,
        shadowRadius: elevation,
      },
      android: {
        elevation,
      },
    }),
  };

  const content = (
    <View
      style={[
        styles.content,
        {
          height: resolvedHeight,
          paddingHorizontal: horizontalPadding,
        }
      ]}
    >
      {leadingSection && (
        <>
          {leadingSection}
          <View style={{ width: leadingSpacing }} />
        </>
      )}

      <View style={{ flex: 1 }}>
        {titleWidget ?? (
          <Text
            style={resolvedTitleStyle}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
        )}
      </View>

      {trailingSection && (
        <>
          <View style={{ width: actionSpacing }} />
          {trailingSection}
        </>
      )}
    </View>
  );

  if (useSafeArea) {
    return (
      <View style={containerStyle} testID={testID}>
        <SafeAreaView>
          {content}
        </SafeAreaView>
      </View>
    );
  }

  return (
    <View style={containerStyle} testID={testID}>
      {content}
    </View>
  );
};

// ─── HeaderIconButton ────────────────────────────────────────────────────────

interface HeaderIconButtonProps {
  icon: Ux4gIconName;
  color: string;
  onPressed?: () => void;
  size?: number;
  tooltip?: string;
}

const HeaderIconButton: React.FC<HeaderIconButtonProps> = ({
  icon,
  color,
  onPressed,
  size = 24,
  tooltip,
}) => {
  // Convert kebab-case to camelCase for icon names
  const camelIconName = icon.replace(/-([a-z])/g, (g) => g[1].toUpperCase()) as keyof typeof Ux4gIcons;
  let IconComponent = Ux4gIcons[camelIconName] as any;

  if (!IconComponent && icon === 'arrow-back') {
    IconComponent = Ux4gIcons.chevronLeft as any; // Or any suitable arrow back
  }

  let fallbackEmoji = '•';
  if (icon === 'settings') fallbackEmoji = '⚙️';
  if (icon === 'menu') fallbackEmoji = '☰';
  if (icon === 'notifications') fallbackEmoji = '🔔';
  if (icon === 'scan') fallbackEmoji = '⛶';

  return (
    <Pressable
      onPress={onPressed}
      hitSlop={8}
      accessibilityRole="button"
      accessibilityLabel={tooltip ?? icon}
      style={styles.iconButton}
    >
      {IconComponent
        ? <IconComponent size={size} color={color} />
        : <Text style={{ color, fontSize: size, fontWeight: '400' }}>{fallbackEmoji}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
