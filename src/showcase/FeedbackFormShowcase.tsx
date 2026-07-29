import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useUx4gTheme, useUx4gStyleSheet } from '../theme/Ux4gThemeContext';
import { Ux4gSpace } from '../foundation/dimensions';
import { UX4GColors } from '../foundation/colors';
import { Ux4gFeedbackFormStar, Ux4gFeedbackFormNps, Ux4gFeedbackFormCsat } from '../components/feedback-form';

export const FeedbackFormShowcase = () => {
  const theme = useUx4gTheme();
  const styles = useUx4gStyleSheet(dynamicStyles);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.section}>
        <Ux4gFeedbackFormStar
          title="Rate your experience"
          improvementTitle="What can we improve?"
          onSubmit={(rating, options, comment) => {
            console.log('Star Feedback:', { rating, options, comment });
          }}
        />
      </View>

      <View style={styles.section}>
        <Ux4gFeedbackFormNps
          onSubmit={(score, comment) => {
            console.log('NPS Feedback:', { score, comment });
          }}
        />
      </View>

      <View style={styles.section}>
        <Ux4gFeedbackFormCsat
          onSubmit={(rating, comment) => {
            console.log('CSAT Feedback:', { rating, comment });
          }}
        />
      </View>
    </ScrollView>
  );
};

const dynamicStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.isDark ? UX4GColors.neutral1000black : UX4GColors.neutral50,
    },
    content: {
      padding: Ux4gSpace.space16,
    },
    section: {
      marginBottom: Ux4gSpace.space32,
    },
  });
