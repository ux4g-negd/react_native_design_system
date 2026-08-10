import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ux4gEmptyState } from '../components/empty-state/EmptyState';
import { useUx4gTheme } from '../theme/Ux4gThemeContext';
import { UX4GColors } from '../foundation/colors';
import { Ux4gIcons } from '../foundation/icons';

export const EmptyStateShowcase: React.FC = () => {
  const theme = useUx4gTheme();
  const [retryCount, setRetryCount] = useState(0);

  const sectionTitleColor = theme.colors.onBackground;
  const subtitleColor = theme.isDark ? UX4GColors.neutral400 : UX4GColors.neutral600;

  const cardStyle = [
    styles.sectionCard,
    {
      backgroundColor: theme.isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
      borderColor: theme.isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
    },
  ];

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={[styles.mainTitle, { color: sectionTitleColor }]}>📭 Ux4gEmptyState</Text>
      <Text style={[styles.mainSubtitle, { color: subtitleColor }]}>Icon + title + supporting text + optional action button.</Text>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>Variants</Text>
        <Text style={[styles.sectionDesc, { color: subtitleColor }]}>Semantic presets matching noResults, noData, comingSoon, error, and custom.</Text>
        <View style={cardStyle}>
          <Ux4gEmptyState
            variant="noResults"
            title="No results found"
            subtitle="Try changing your search terms"
            description="or clear active filters."
          />
        </View>
        <View style={cardStyle}>
          <Ux4gEmptyState
            variant="noData"
            title="No applications yet"
            subtitle="You have not started any application"
            description="in this section."
          />
        </View>
        <View style={cardStyle}>
          <Ux4gEmptyState
            variant="comingSoon"
            title="Feature coming soon"
            subtitle="This service is under rollout"
            description="and will be available shortly."
          />
        </View>
        <View style={cardStyle}>
          <Ux4gEmptyState
            variant="error"
            title="Unable to load data"
            subtitle="Please check your connection"
            description="and try again."
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>Action Button</Text>
        <Text style={[styles.sectionDesc, { color: subtitleColor }]}>Optional tonal button for recovery or navigation actions.</Text>
        <View style={cardStyle}>
          <Ux4gEmptyState
            variant="error"
            title="Could not refresh records"
            subtitle="Server did not respond in time."
            buttonText={`Retry (${retryCount})`}
            onButtonPressed={() => setRetryCount((prev) => prev + 1)}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>Fully Custom</Text>
        <Text style={[styles.sectionDesc, { color: subtitleColor }]}>Override icon, icon color, and text style for specialized screens.</Text>
        <View style={cardStyle}>
          <Ux4gEmptyState
            variant="custom"
            icon={Ux4gIcons.verification({ size: 56, color: theme.colors.success })}
            title="All caught up"
            subtitle="Every pending verification is complete"
            description="for this account."
            titleStyle={{ color: theme.colors.success }}
            bodyStyle={{ color: theme.colors.onSurface }}
            bodyHorizontalPadding={36}
          />
        </View>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  mainSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 24,
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  sectionDesc: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 12,
  },
  sectionCard: {
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 12,
  },
});
