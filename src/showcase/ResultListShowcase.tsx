import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Ux4gResultList } from '../components/result-list/ResultList';
import { useUx4gTheme } from '../theme/Ux4gThemeContext';
import { UX4GColors } from '../foundation/colors';
import { Ux4gIcons } from '../foundation/icons';

export const ResultListShowcase: React.FC = () => {
  const theme = useUx4gTheme();
  const colors = theme.colors;

  const cardStyle = [
    styles.card,
    {
      backgroundColor: theme.isDark ? UX4GColors.neutral900 : UX4GColors.neutral0,
      borderColor: theme.isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
      shadowColor: UX4GColors.neutral1000black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: theme.isDark ? 0.2 : 0.02,
      shadowRadius: 6,
      elevation: 2,
    },
  ];

  const titleStyle = [
    styles.sectionTitle,
    { color: theme.isDark ? '#F4F4F5' : '#18181B' },
  ];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.isDark ? UX4GColors.neutral950 : UX4GColors.neutral50 }]}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.onBackground }]}>
          📋 Result List
        </Text>
        <Text style={[styles.subText, { color: theme.isDark ? '#A1A1AA' : '#71717A' }]}>
          Expandable list items for search results and application status.
        </Text>
      </View>

      <View style={[cardStyle, { padding: 0, overflow: 'hidden' }]}>
        <View style={styles.stackGroup}>
          <Ux4gResultList
            title="Application #2024-001"
            statusTag="Approved"
            tagColorScheme="success"
            actionButtonText="View Details"
            onActionPressed={() => {}}
            showBottomDivider={false}
            details={[
              { label: 'Applicant', value: 'Ravi Kumar' },
              { label: 'Date', value: '12 May 2025' },
              { label: 'Sanctioned Amount', value: '₹1,20,000', isBold: true },
            ]}
          />
        </View>
      </View>

      <View style={[cardStyle, { padding: 0, overflow: 'hidden' }]}>
        <View style={styles.stackGroup}>
          <Ux4gResultList
            title="Income Certificate Application"
            metadataSegments={[
              {
                text: '8 days left',
                leading: (
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: UX4GColors.orange600,
                    }}
                  />
                ),
              },
              { text: 'Under Review', textColor: UX4GColors.orange700 },
            ]}
            actionButtonText="Track Status"
            onActionPressed={() => {}}
            showBottomDivider={false}
            details={[
              { label: 'Reference Number', value: 'INC-2026-MH-04127' },
              { label: 'Last Updated Date', value: '10 Apr 2026' },
              { label: 'Assigned Officer', value: 'Rahul Sharma' },
              { label: 'Department', value: 'Revenue Department' },
            ]}
          />
        </View>
      </View>
      <View style={[cardStyle, { padding: 0, overflow: 'hidden' }]}>
        <View style={styles.stackGroup}>
          <Ux4gResultList
            title="Driving License Renewal"
            statusTag="Action Required"
            tagColorScheme="warning"
            actionButtonText="Upload Docs"
            actionButtonIcon={Ux4gIcons.arrowUp}
            onActionPressed={() => {}}
            showBottomDivider={false}
            details={[
              { label: 'Applicant', value: 'Sunita Sharma' },
              { label: 'Application ID', value: 'DL-99201-DL' },
              { label: 'Pending Stage', value: 'Biometrics Verification' },
            ]}
          />
        </View>
      </View>

      <View style={[cardStyle, { padding: 0, overflow: 'hidden' }]}>
        <View style={styles.stackGroup}>
          <Ux4gResultList
            title="Ration Card Transfer Request"
            statusTag="Rejected"
            tagColorScheme="error"
            actionButtonText="Re-apply"
            onActionPressed={() => {}}
            initialExpanded={false}
            showBottomDivider={false}
            details={[
              { label: 'Rejection Reason', value: 'Address Proof Mismatch', isBold: true },
              { label: 'Applied Date', value: '05 Feb 2026' },
            ]}
            expandedChild={
              <View style={{ paddingTop: 16 }}>
                <Text style={{ fontSize: 12, color: theme.isDark ? 'rgba(255,255,255,0.6)' : '#7F1D1D', fontWeight: '500' }}>
                  Need Help?
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                  <Text style={{ fontSize: 14, color: theme.isDark ? '#818CF8' : '#4338CA', fontWeight: '600' }}>
                    Register grievance
                  </Text>
                  <View style={{ marginLeft: 4 }}>
                    <Ux4gIcons.chevronRight size={16} color={theme.isDark ? '#818CF8' : '#4338CA'} />
                  </View>
                </View>
              </View>
            }
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
    // Removed gap so it acts strictly like the card wrapper for the list
  },
});
