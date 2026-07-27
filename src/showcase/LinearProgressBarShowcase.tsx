import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Ux4gLinearProgressBar, useUx4gTheme } from '../index';

const { width } = Dimensions.get('window');

export const LinearProgressBarShowcase: React.FC = () => {
  const theme = useUx4gTheme();
  
  // Create an array from 0 to 100 in steps of 10
  const percentages = Array.from({ length: 11 }, (_, i) => i * 0.1);

  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.title, { color: theme.colors.onBackground }]}>
        Linear Progress Bar Combinations
      </Text>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.matrixContainer}>
          
          {/* Column 1: Sharp, Outside */}
          <View style={styles.column}>
            <Text style={[styles.columnTitle, { color: theme.colors.onBackground }]}>Sharp / Outside</Text>
            {percentages.map((val) => (
              <View key={`c1-${val}`} style={styles.rowItem}>
                <Ux4gLinearProgressBar
                  value={val}
                  shape="sharp"
                  showPercentage
                  labelPosition="outside"
                />
              </View>
            ))}
          </View>

          {/* Column 2: Rounded, Outside */}
          <View style={styles.column}>
            <Text style={[styles.columnTitle, { color: theme.colors.onBackground }]}>Rounded / Outside</Text>
            {percentages.map((val) => (
              <View key={`c2-${val}`} style={styles.rowItem}>
                <Ux4gLinearProgressBar
                  value={val}
                  shape="rounded"
                  showPercentage
                  labelPosition="outside"
                />
              </View>
            ))}
          </View>

          {/* Column 3: Sharp, Inside */}
          <View style={styles.column}>
            <Text style={[styles.columnTitle, { color: theme.colors.onBackground }]}>Sharp / Inside</Text>
            {percentages.map((val) => (
              <View key={`c3-${val}`} style={styles.rowItem}>
                <Ux4gLinearProgressBar
                  value={val}
                  shape="sharp"
                  height={18}
                  showPercentage
                  labelPosition="inside"
                />
              </View>
            ))}
          </View>

          {/* Column 4: Rounded, Inside */}
          <View style={styles.column}>
            <Text style={[styles.columnTitle, { color: theme.colors.onBackground }]}>Rounded / Inside</Text>
            {percentages.map((val) => (
              <View key={`c4-${val}`} style={styles.rowItem}>
                <Ux4gLinearProgressBar
                  value={val}
                  shape="rounded"
                  height={18}
                  showPercentage
                  labelPosition="inside"
                />
              </View>
            ))}
          </View>

        </View>
      </ScrollView>
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
  matrixContainer: {
    flexDirection: 'row',
    padding: 16,
    paddingRight: 32, // extra padding for horizontal scroll
  },
  column: {
    width: width * 0.6, // Each column takes up 60% of screen width to allow scrolling
    marginRight: 24,
  },
  columnTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
  },
  rowItem: {
    height: 48, // Fixed height per row to align across columns
    justifyContent: 'center',
    marginBottom: 16,
  }
});
