import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Ux4gAnimatedHalfCircleProgress, useUx4gTheme } from '../index';

export const HalfCircleProgressShowcase: React.FC = () => {
  const theme = useUx4gTheme();
  const [progress, setProgress] = useState(0.0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.round((prev + 0.1) * 10) / 10;
        return next > 1.0 ? 0.0 : next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.title, { color: theme.colors.onBackground }]}>
        Half Circle Progress Indicator
      </Text>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>Sizes (Default, No Scale)</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
          <Ux4gAnimatedHalfCircleProgress value={progress} size="s" description="Description" gap={8} />
          <Ux4gAnimatedHalfCircleProgress value={progress} size="m" description="Description" gap={8} />
          <Ux4gAnimatedHalfCircleProgress value={progress} size="l" description="Description" gap={8} />
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>Sizes (With Scale)</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
          <Ux4gAnimatedHalfCircleProgress value={progress} size="s" description="Description" showScale gap={8} />
          <Ux4gAnimatedHalfCircleProgress value={progress} size="m" description="Description" showScale gap={8} />
          <Ux4gAnimatedHalfCircleProgress value={progress} size="l" description="Description" showScale gap={8} />
        </ScrollView>
      </View>
      
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>XL Size</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
          <Ux4gAnimatedHalfCircleProgress value={progress} size="xl" description="Performance Score" showScale gap={12} />
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>Stroke Caps</Text>
        <View style={styles.row}>
          <Ux4gAnimatedHalfCircleProgress value={progress} size="m" strokeCap="round" />
          <Ux4gAnimatedHalfCircleProgress value={progress} size="m" strokeCap="butt" />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>Custom Colors</Text>
        <View style={styles.row}>
          <Ux4gAnimatedHalfCircleProgress 
            value={progress} 
            size="l"
            progressColor={theme.colors.error}
            trackColor={theme.colors.error + '40'}
            gradientColors={[]} 
            valueText={`${Math.round(progress * 100)}`}
            description="Errors"
            showScale
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    gap: 32,
  },
});
