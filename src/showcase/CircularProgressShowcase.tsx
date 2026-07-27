import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ux4gAnimatedCircularProgress, Ux4gCircularProgress, useUx4gTheme } from '../index';

export const CircularProgressShowcase: React.FC = () => {
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
        Circular Progress Indicator
      </Text>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>Sizes (Butt Cap)</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.rowWrap}>
          <Ux4gCircularProgress value={0.5} size="xs" centerValueText="50%" description="Description" strokeCap="butt" />
          <Ux4gCircularProgress value={0.5} size="s" centerValueText="50%" description="Description" strokeCap="butt" />
          <Ux4gCircularProgress value={0.5} size="m" centerValueText="50%" description="Description" strokeCap="butt" />
          <Ux4gCircularProgress value={0.5} size="l" centerValueText="50%" description="Description" strokeCap="butt" />
          <Ux4gCircularProgress value={0.5} size="xl" centerValueText="50%" description="Description" strokeCap="butt" />
          <Ux4gCircularProgress value={0.5} size="xxl" centerValueText="50%" description="Description" strokeCap="butt" />
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>Sizes (Round Cap)</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.rowWrap}>
          <Ux4gCircularProgress value={0.5} size="xs" centerValueText="50%" description="Description" strokeCap="round" />
          <Ux4gCircularProgress value={0.5} size="s" centerValueText="50%" description="Description" strokeCap="round" />
          <Ux4gCircularProgress value={0.5} size="m" centerValueText="50%" description="Description" strokeCap="round" />
          <Ux4gCircularProgress value={0.5} size="l" centerValueText="50%" description="Description" strokeCap="round" />
          <Ux4gCircularProgress value={0.5} size="xl" centerValueText="50%" description="Description" strokeCap="round" />
          <Ux4gCircularProgress value={0.5} size="xxl" centerValueText="50%" description="Description" strokeCap="round" />
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>Animated Progress</Text>
        <View style={styles.row}>
          <Ux4gAnimatedCircularProgress 
            value={progress} 
            size="xxl" 
            centerValueText={`${Math.round(progress * 100)}%`} 
            centerDescription="Uploading"
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>Stroke Caps</Text>
        <View style={styles.row}>
          <View style={styles.column}>
            <Ux4gCircularProgress value={0.7} size="xl" strokeCap="butt" centerValueText="70%" />
            <Text style={{ marginTop: 8, color: theme.colors.onBackground }}>Butt Cap</Text>
          </View>
          <View style={styles.column}>
            <Ux4gCircularProgress value={0.7} size="xl" strokeCap="round" centerValueText="70%" />
            <Text style={{ marginTop: 8, color: theme.colors.onBackground }}>Round Cap</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>With Meta Info</Text>
        <View style={styles.row}>
          <Ux4gAnimatedCircularProgress 
            value={progress} 
            size="xxl" 
            centerValueText={`${Math.round(progress * 100)}%`} 
            label="Storage Used"
            description="45GB of 64GB available"
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>External Labels</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.rowWrap}>
          {(['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'] as const).map(s => (
            <Ux4gCircularProgress key={s} value={0.5} size={s} label="50%" description="Description" />
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>Internal Labels</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.rowWrap}>
          {(['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'] as const).map(s => {
            const isSmall = ['xs', 's', 'm', 'l'].includes(s);
            const centerWidget = isSmall ? (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: s === 'xs' ? 7 : s === 's' ? 9 : 11, fontWeight: 'bold', color: theme.colors.onBackground }}>50%</Text>
              </View>
            ) : undefined;

            return (
              <Ux4gCircularProgress 
                key={s} 
                value={0.5} 
                size={s} 
                centerValueText={isSmall ? undefined : "50%"} 
                centerDescription={isSmall ? undefined : "Description"} 
                center={centerWidget} 
              />
            );
          })}
        </ScrollView>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(150, 150, 150, 0.2)',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  column: {
    alignItems: 'center',
  }
});
