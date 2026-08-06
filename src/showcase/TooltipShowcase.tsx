import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Pressable } from 'react-native';
import {
  Ux4gTooltip,
  Ux4gRichTooltip,
  Ux4gTooltipPlacement,
  Ux4gButton,
  Ux4gTextButton,
  useUx4gTheme,
  UX4GColors,
} from '../index';
import { InfoIcon, SettingsIcon, AddUserIcon } from '../foundation/icons'; // Assuming these exist, if not we'll use a fallback

export const TooltipShowcase: React.FC = () => {
  const theme = useUx4gTheme();
  const [persistentVisible, setPersistentVisible] = useState(false);

  const fallbackIcon = (
    <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: 'currentColor', borderWidth: 2, borderColor: '#fff' }} />
  );

  const placements: Ux4gTooltipPlacement[] = [
    'topStart', 'top', 'topEnd',
    'bottomStart', 'bottom', 'bottomEnd',
    'leftStart', 'left', 'leftEnd',
    'rightStart', 'right', 'rightEnd'
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.title, { color: theme.colors.onBackground }]}>
        Standard Tooltips
      </Text>

      <Text style={[styles.desc, { color: theme.colors.onBackground, opacity: 0.7 }]}>
        Tap the badges to see standard tooltips in different placements.
      </Text>

      <View style={styles.grid}>
        {placements.map((p) => (
          <View key={p} style={styles.gridItem}>
            <Ux4gTooltip
              text={`Tooltip on ${p}`}
              placement={p}
              trigger="press"
            >
              <View style={[styles.targetBox, { backgroundColor: theme.colors.surface, borderColor: theme.colors.primary }]}>
                <Text style={{ color: theme.colors.onSurface }}>{p}</Text>
              </View>
            </Ux4gTooltip>
          </View>
        ))}
      </View>

      <Text style={[styles.title, { color: theme.colors.onBackground, marginTop: 40 }]}>
        Rich Tooltips
      </Text>

      <Text style={[styles.desc, { color: theme.colors.onBackground, opacity: 0.7 }]}>
        Rich tooltips can contain icons, titles, and actions.
      </Text>

      <View style={styles.row}>
        <Ux4gRichTooltip
          title="Information"
          text="This is a rich tooltip containing a title, text, and an icon. It opened automatically!"
          icon={fallbackIcon}
          placement="top"
          trigger="press"
          autoShow={true}
        >
          <View style={[styles.targetBox, { backgroundColor: theme.colors.primary }]}>
            <Text style={{ color: theme.colors.onPrimary }}>Rich (Tap)</Text>
          </View>
        </Ux4gRichTooltip>

        <View style={{ width: 24 }} />

        <Ux4gRichTooltip
          title="Interactive"
          text="This tooltip has an action button."
          placement="bottom"
          trigger="press"
          action={
            <Ux4gTextButton label="Got it" size="small" />
          }
        >
          <View style={[styles.targetBox, { backgroundColor: theme.colors.secondary }]}>
            <Text style={{ color: theme.colors.onSecondary }}>With Action (Tap)</Text>
          </View>
        </Ux4gRichTooltip>
      </View>

      <Text style={[styles.title, { color: theme.colors.onBackground, marginTop: 40 }]}>
        Auto-Show Tooltips
      </Text>

      <Text style={[styles.desc, { color: theme.colors.onBackground, opacity: 0.7 }]}>
        Tooltips can automatically trigger on mount without any user interaction using the autoShow prop.
      </Text>

      <View style={styles.row}>
        <Ux4gTooltip
          text="This tooltip appeared automatically!"
          placement="top"
          autoShow={true}
        >
          <View style={[styles.targetBox, { backgroundColor: theme.colors.surface, borderColor: theme.colors.primary }]}>
            <Text style={{ color: theme.colors.onSurface }}>Auto Show Target</Text>
          </View>
        </Ux4gTooltip>
      </View>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  desc: {
    fontSize: 14,
    marginBottom: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 40, // padding to allow tooltips to show
  },
  gridItem: {
    width: '45%',
    alignItems: 'center',
    marginBottom: 48,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 32,
  },
  targetBox: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
