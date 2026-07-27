import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { 
  Ux4gCircularProgress, 
  Ux4gLinearProgressBar, 
  Ux4gBadge,
  useUx4gTheme,
  UX4GColors
} from '../index';

export const SlaProgressShowcase: React.FC = () => {
  const theme = useUx4gTheme();
  
  const circularItems = [
    { 
      progressColor: UX4GColors.primary500, 
      gradient: [UX4GColors.primary100, UX4GColors.primary500], 
      labelColor: UX4GColors.primary500, 
      badgeBg: UX4GColors.primary50 
    },
    { 
      progressColor: UX4GColors.orange500, 
      gradient: [UX4GColors.orange50, UX4GColors.orange500], 
      labelColor: UX4GColors.orange500, 
      badgeBg: UX4GColors.orange50 
    },
    { 
      progressColor: UX4GColors.red500, 
      gradient: [UX4GColors.red100, UX4GColors.red500], 
      labelColor: UX4GColors.red500, 
      descColor: UX4GColors.red700,
      badgeBg: UX4GColors.red50 
    },
    { 
      progressColor: UX4GColors.green500, 
      gradient: [UX4GColors.green100, UX4GColors.green500], 
      labelColor: UX4GColors.green500, 
      badgeBg: UX4GColors.green50 
    },
  ];

  const linearItems = [
    {
      iconColor: UX4GColors.primary500,
      iconBg: UX4GColors.primary500 + '1F',
      gradient: [UX4GColors.primary500, UX4GColors.tertiary500],
    },
    {
      iconColor: UX4GColors.orange600,
      iconBg: UX4GColors.orange600 + '1F',
      gradient: [UX4GColors.gold500, UX4GColors.orange700],
    },
    {
      iconColor: UX4GColors.red600,
      iconBg: UX4GColors.red600 + '1F',
      gradient: [UX4GColors.red300, UX4GColors.red600],
    },
    {
      iconColor: UX4GColors.green600,
      iconBg: UX4GColors.green600 + '1F',
      gradient: [UX4GColors.green300, UX4GColors.green600],
    },
  ];

  // A simple hexagon icon for the linear bars
  const HexagonIcon = ({ color }: { color: string }) => (
    <View style={{
      width: 16, 
      height: 16, 
      borderWidth: 2, 
      borderColor: color, 
      borderRadius: 4,
      transform: [{ rotate: '30deg' }]
    }} />
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.title, { color: theme.colors.onBackground }]}>
        SLA Circular Progress
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
        {circularItems.map((item, idx) => (
          <View key={idx} style={{ marginHorizontal: 12, alignItems: 'center' }}>
            <Ux4gCircularProgress
              value={0.8}
              size="xl"
              strokeWidth={6}
              progressColor={item.progressColor}
              gradientColors={item.gradient}
              centerValueText="8"
              centerDescription="days left"
              label="Label"
              description="Description"
              descriptionStyle={item.descColor ? { color: item.descColor } : undefined}
              gap={8}
              footer={
                <View style={{ 
                  backgroundColor: item.badgeBg, 
                  paddingHorizontal: 12, 
                  paddingVertical: 4, 
                  borderRadius: 4,
                  marginTop: 4
                }}>
                  <Text style={{ color: item.labelColor, fontSize: 12, fontWeight: '600' }}>Label</Text>
                </View>
              }
            />
          </View>
        ))}
      </ScrollView>

      <Text style={[styles.title, { color: theme.colors.onBackground, marginTop: 40 }]}>
        Linear Progress
      </Text>

      <View style={styles.linearGrid}>
        {/* Sharp Column */}
        <View style={styles.linearColumn}>
          <Text style={[styles.columnHeader, { color: theme.colors.onBackground, opacity: 0.5 }]}>Sharp</Text>
          
          {linearItems.map((item, idx) => (
            <View key={`sharp-${idx}`} style={styles.linearItem}>
              <Ux4gLinearProgressBar
                value={0.5}
                shape="sharp"
                height={8}
                gradientColors={item.gradient}
                icon={<HexagonIcon color={item.iconColor} />}
                iconBackgroundColor={item.iconBg}
                label="Label"
                hint="Hint"
                showPercentage={true}
                labelPosition="outside"
              />
            </View>
          ))}
        </View>

        {/* Rounded Column */}
        <View style={styles.linearColumn}>
          <Text style={[styles.columnHeader, { color: theme.colors.onBackground, opacity: 0.5 }]}>Rounded</Text>
          
          {linearItems.map((item, idx) => (
            <View key={`rounded-${idx}`} style={styles.linearItem}>
              <Ux4gLinearProgressBar
                value={0.5}
                shape="rounded"
                height={8}
                gradientColors={item.gradient}
                icon={<HexagonIcon color={item.iconColor} />}
                iconBackgroundColor={item.iconBg}
                label="Label"
                hint="Hint"
                showPercentage={true}
                labelPosition="outside"
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 24,
  },
  row: {
    paddingHorizontal: 8,
    flexDirection: 'row',
  },
  linearGrid: {
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  linearColumn: {
    flex: 1,
    paddingHorizontal: 8,
  },
  columnHeader: {
    fontSize: 14,
    marginBottom: 16,
  },
  linearItem: {
    marginBottom: 24,
  }
});
