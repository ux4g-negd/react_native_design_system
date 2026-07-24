import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Image
} from 'react-native';
import { Ux4gAppHeader } from '../components/app-header/AppHeader';
import { useUx4gTheme } from '../theme/Ux4gThemeContext';
import { Ux4gAvatar, Ux4gStatusAvatar } from '../components/avatar/Avatar';
import { Ux4gAssets } from '../assets/index';
import NationalEmblemLogoSvg from '../assets/icons/NationalEmblemLogoSvg';
import UnionSvg from '../assets/icons/UnionSvg';
import { Ux4gIcons } from '../foundation/icons';

export const AppHeaderShowcase: React.FC = () => {
  const theme = useUx4gTheme();
  const colors = theme.colors;

  const cardStyle = [
    styles.card,
    {
      backgroundColor: theme.isDark ? '#1F1F1F' : '#F4F4F5',
      borderColor: theme.isDark ? '#333333' : '#E4E4E7',
    },
  ];

  const titleStyle = [
    styles.sectionTitle,
    { color: theme.isDark ? '#F4F4F5' : '#18181B' },
  ];

  const subtitleStyle = [
    styles.subText,
    { color: theme.isDark ? '#A1A1AA' : '#71717A' },
  ];

  const EmblemPlaceholder = (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <NationalEmblemLogoSvg width={30} height={40} />
    </View>
  );

  const LogoPlaceholder = (
    <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 4 }}>
      <UnionSvg width={32} height={32} />
    </View>
  );

  const DividerPlaceholder = (
    <View style={{ width: 1, height: 24, backgroundColor: colors.onSurface + '33', marginHorizontal: 4 }} />
  );

  // Bordered Menu for the second variant in image 3
  const BorderedMenu = (
    <View style={{ width: 40, height: 40, borderWidth: 1, borderColor: colors.onSurface + '33', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
      <Ux4gIcons.menu size={24} color={colors.onSurface} />
    </View>
  );

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.onBackground }]}>
          🔝 App Header Variants
        </Text>
        <Text style={subtitleStyle}>
          Exact layout variants matching the UX4G Design specifications.
        </Text>
      </View>

      {/* Group 1: Logo + Title + Trailing (Avatar / Menu) */}
      <View style={cardStyle}>
        <Text style={titleStyle}>1. Logo & Title (Avatar vs Menu)</Text>
        <View style={styles.stackGroup}>
          <Ux4gAppHeader
            title="Title"
            leadingWidgets={[EmblemPlaceholder, DividerPlaceholder, LogoPlaceholder]}
            actions={[{ icon: 'settings' }]}
            showAvatar
            avatarInitials="JD"
            avatarSize="s"
            useSafeArea={false}
          />
          <Ux4gAppHeader
            title="Title"
            leadingWidgets={[EmblemPlaceholder, DividerPlaceholder, LogoPlaceholder]}
            actions={[{ icon: 'settings' }, { icon: 'menu' }]}
            useSafeArea={false}
          />
          <Ux4gAppHeader
            title="Title"
            leadingWidgets={[EmblemPlaceholder, DividerPlaceholder, LogoPlaceholder]}
            actions={[{ icon: 'settings' }]}
            avatar={
              <Ux4gStatusAvatar
                size="s"
                initials="JD"
                variant="online"
              />
            }
            useSafeArea={false}
          />
        </View>
      </View>

      {/* Group 2: Dashboard/App Header navigation */}
      <View style={cardStyle}>
        <Text style={titleStyle}>2. Main Navigation (App Header & Dashboard)</Text>
        <View style={styles.stackGroup}>
          <Ux4gAppHeader
            title="App Header"
            leadingWidgets={[<Text style={{ fontSize: 24, color: colors.onSurface }}>☰</Text>]}
            actions={[{ icon: 'notifications' }, { icon: 'settings' }]}
            showAvatar
            avatarIcon={<Text style={{ fontSize: 16, color: colors.onPrimary }}>👤</Text>}
            avatarSize="s"
            useSafeArea={false}
          />
          <Ux4gAppHeader
            title="Dashboard"
            leadingWidgets={[<Text style={{ fontSize: 24, color: colors.onSurface }}>☰</Text>]}
            actions={[
              { icon: 'search' },
              { icon: 'notifications' },
              { icon: 'settings' }
            ]}
            showAvatar
            avatarInitials="JD"
            avatarSize="s"
            useSafeArea={false}
          />
        </View>
      </View>

      {/* Group 3: Logo + Title + Scan Icon (Avatar vs Bordered Menu) */}
      <View style={cardStyle}>
        <Text style={titleStyle}>3. App Layouts with Scan Action</Text>
        <View style={styles.stackGroup}>
          <Ux4gAppHeader
            title="Title"
            leadingWidgets={[EmblemPlaceholder, DividerPlaceholder, LogoPlaceholder]}
            actions={[{ icon: 'scan' }]}
            showAvatar
            avatarInitials="JD"
            avatarSize="s"
            useSafeArea={false}
          />
          <Ux4gAppHeader
            title="Title"
            leadingWidgets={[EmblemPlaceholder, DividerPlaceholder, LogoPlaceholder]}
            actions={[
              { icon: 'scan' },
              { customWidget: BorderedMenu }
            ]}
            useSafeArea={false}
          />
        </View>
      </View>

      {/* Group 4: Sub-page layout (Filled variant) */}
      <View style={cardStyle}>
        <Text style={titleStyle}>4. Sub-page Navigation (Filled)</Text>
        <View style={styles.stackGroup}>
          <Ux4gAppHeader
            title="Page Title"
            variant="filled"
            showBackButton
            actions={[{ icon: 'search' }]}
            useSafeArea={false}
          />
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 6,
  },
  subText: {
    fontSize: 14,
    lineHeight: 20,
  },
  card: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  stackGroup: {
    marginTop: 14,
    gap: 14,
  },
});
