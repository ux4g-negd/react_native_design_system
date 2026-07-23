import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Ux4gPaginationDotted } from '../components/pagination/Pagination';
import { Ux4gButton } from '../components/button/Button';
import { useUx4gTheme } from '../theme/Ux4gThemeContext';

export const PaginationShowcase: React.FC = () => {
  const theme = useUx4gTheme();
  const colors = theme.colors;

  const [page1, setPage1] = useState(0);
  const [page2, setPage2] = useState(1);
  const [page3, setPage3] = useState(2);
  const [page4, setPage4] = useState(0);
  const [page5, setPage5] = useState(1);
  const [page6, setPage6] = useState(2);

  const cardStyle = [
    styles.card,
    {
      backgroundColor: theme.isDark ? '#1F1F1F' : '#FFFFFF',
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

  const activePageLabelStyle = [
    styles.activePageLabel,
    { color: theme.isDark ? '#E4E4E7' : '#3F3F46' },
  ];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.onBackground }]}>
          📄 Pagination Component (`Ux4gPaginationDotted`)
        </Text>
        <Text style={subtitleStyle}>
          Ported from Flutter `pagination.dart`. Supports sizes (`small`, `medium`), variants (`default`, `capsule`), `arrowsOnRight` layout, smooth animated dot transitions, interactive navigation, and custom color overrides.
        </Text>
      </View>

      {/* 1. Default Variant & Interactive Page State */}
      <View style={cardStyle}>
        <Text style={titleStyle}>1. Default Variant (`default`) & Page Navigation</Text>
        <Text style={subtitleStyle}>
          Standard pagination with arrows on left/right. Tap any dot or arrow button to switch active page!
        </Text>
        <View style={styles.demoRow}>
          <Ux4gPaginationDotted
            totalPageCount={5}
            currentPageIndex={page1}
            onPageChange={(index) => setPage1(index)}
          />
          <Text style={activePageLabelStyle}>Page {page1 + 1} of 5</Text>
        </View>
        <View style={styles.buttonRow}>
          <Ux4gButton
            text="Prev Page"
            size="small"
            variant="outline"
            enabled={page1 > 0}
            onPress={() => setPage1((p) => Math.max(0, p - 1))}
          />
          <Ux4gButton
            text="Next Page"
            size="small"
            variant="primary"
            enabled={page1 < 4}
            onPress={() => setPage1((p) => Math.min(4, p + 1))}
          />
        </View>
      </View>

      {/* 2. Capsule Variant */}
      <View style={cardStyle}>
        <Text style={titleStyle}>2. Capsule Variant (`capsule`)</Text>
        <Text style={subtitleStyle}>
          Enclosed within a rounded pill container matching Flutter capsule styling.
        </Text>
        <View style={styles.demoRow}>
          <Ux4gPaginationDotted
            variant="capsule"
            size="small"
            totalPageCount={5}
            currentPageIndex={page2}
            onPageChange={(index) => setPage2(index)}
          />
          <Text style={activePageLabelStyle}>Page {page2 + 1} of 5</Text>
        </View>
      </View>

      {/* 2b. Capsule Variant without Arrows */}
      <View style={cardStyle}>
        <Text style={titleStyle}>Capsule Variant without Arrows</Text>
        <Text style={subtitleStyle}>
          Rounded pill container encapsulating indicator dots without navigation arrows.
        </Text>
        <View style={[styles.demoRow, { justifyContent: 'flex-start', marginTop: 14 }]}>
          <Ux4gPaginationDotted
            variant="capsule"
            showArrows={false}
            totalPageCount={7}
            currentPageIndex={page6}
            onPageChange={(index) => setPage6(index)}
          />
        </View>
      </View>

      {/* 3. Sizes Comparison */}
      <View style={cardStyle}>
        <Text style={titleStyle}>3. Size Variants (`small` vs `medium`)</Text>
        <Text style={subtitleStyle}>
          `small` (dotSize: 10, arrowSize: 24) vs `medium` (dotSize: 12, arrowSize: 32).
        </Text>
        <View style={styles.columnGroup}>
          <Text style={subtitleStyle}>Small Size (`small`):</Text>
          <Ux4gPaginationDotted
            size="small"
            totalPageCount={4}
            currentPageIndex={page3}
            onPageChange={(index) => setPage3(index)}
          />
          <Text style={[subtitleStyle, { marginTop: 12 }]}>Medium Size (`medium`):</Text>
          <Ux4gPaginationDotted
            size="medium"
            totalPageCount={4}
            currentPageIndex={page3}
            onPageChange={(index) => setPage3(index)}
          />
        </View>
      </View>

      {/* 4. Arrows on Right Alignment */}
      <View style={cardStyle}>
        <Text style={titleStyle}>4. Arrows on Right (`arrowsOnRight = true`)</Text>
        <Text style={subtitleStyle}>
          Renders dots on the left and both arrow controls grouped on the right.
        </Text>
        <View style={styles.columnGroup}>
          <Text style={subtitleStyle}>Default Layout with `arrowsOnRight`:</Text>
          <View style={styles.fullWidthDemo}>
            <Ux4gPaginationDotted
              arrowsOnRight={true}
              totalPageCount={5}
              currentPageIndex={page4}
              onPageChange={(index) => setPage4(index)}
            />
          </View>
          <Text style={[subtitleStyle, { marginTop: 14 }]}>Capsule Layout with `arrowsOnRight`:</Text>
          <View style={styles.fullWidthDemo}>
            <Ux4gPaginationDotted
              variant="capsule"
              arrowsOnRight={true}
              totalPageCount={5}
              currentPageIndex={page4}
              onPageChange={(index) => setPage4(index)}
            />
          </View>
        </View>
      </View>

      {/* 5. Custom Color Overrides & Without Arrows */}
      <View style={cardStyle}>
        <Text style={titleStyle}>5. Custom Colors & Dots Only (`showArrows = false`)</Text>
        <Text style={subtitleStyle}>
          Custom `activeColor`, `inactiveColor`, and `inactiveBorderColor` overrides.
        </Text>
        <View style={styles.columnGroup}>
          <Text style={subtitleStyle}>Custom Emerald Green Scheme:</Text>
          <Ux4gPaginationDotted
            totalPageCount={6}
            currentPageIndex={page5}
            onPageChange={(index) => setPage5(index)}
            activeColor="#10B981"
            inactiveColor={theme.isDark ? '#064E3B' : '#D1FAE5'}
            inactiveBorderColor="#059669"
          />
          <Text style={[subtitleStyle, { marginTop: 12 }]}>Dots Only without Arrow Buttons:</Text>
          <Ux4gPaginationDotted
            showArrows={false}
            totalPageCount={5}
            currentPageIndex={page5}
            onPageChange={(index) => setPage5(index)}
            activeColor="#EC4899"
          />
        </View>
      </View>

      {/* 6. Disabled State */}
      <View style={cardStyle}>
        <Text style={titleStyle}>6. Disabled State (`enabled = false`)</Text>
        <Text style={subtitleStyle}>
          Non-interactive state with dimmed active indicator dot and disabled arrow buttons.
        </Text>
        <View style={styles.demoRow}>
          <Ux4gPaginationDotted
            enabled={false}
            totalPageCount={4}
            currentPageIndex={1}
            onPageChange={() => {}}
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
  demoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 14,
    flexWrap: 'wrap',
    gap: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },
  activePageLabel: {
    fontSize: 13,
    fontWeight: '600',
  },
  columnGroup: {
    marginTop: 12,
  },
  fullWidthDemo: {
    width: '100%',
    marginTop: 6,
  },
});
