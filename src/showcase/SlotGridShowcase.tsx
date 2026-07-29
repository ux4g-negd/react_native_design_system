/**
 * SlotGridShowcase
 *
 * Interactive showcase for Ux4gTimeslot / SlotGrid component demonstrating:
 *  - Interactive Calendar Grid with status indicators (noSlots, publicHoliday, weeklyOff)
 *  - Expanded view mode time slot picker sheet
 *  - Compact (grid) view mode time slot picker sheet
 *  - Date selection & slot confirmation callbacks
 */

import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import {
  Ux4gTimeslot,
  Ux4gTimeslotData,
  SlotTimeEntry,
} from '../components/slot-grid';
import { useUx4gTheme } from '../theme/Ux4gThemeContext';
import { UX4GColors } from '../foundation/colors';

export const SlotGridShowcase: React.FC = () => {
  const theme = useUx4gTheme();

  const sectionTitleColor = theme.colors.onBackground;
  const subtitleColor = theme.isDark ? UX4GColors.neutral400 : UX4GColors.neutral600;

  const [selectedDateInfo, setSelectedDateInfo] = useState<string>('None');
  const [confirmedSlotInfo, setConfirmedSlotInfo] = useState<string>('None');

  const today = new Date(2026, 3, 15); // April 15, 2026

  // Sample data for Expanded View Mode
  const expandedData: Ux4gTimeslotData = {
    year: 2026,
    month: 4,
    today,
    selectedDate: new Date(2026, 3, 23),
    weeklyOffWeekdays: [6, 7], // Sat & Sun
    viewMode: 'expanded',
    dates: [
      { date: new Date(2026, 3, 9), status: 'publicHoliday' },
      { date: new Date(2026, 3, 21), status: 'noSlots' },
      { date: new Date(2026, 3, 28), status: 'publicHoliday' },
    ],
  };

  // Sample data for Compact View Mode
  const compactData: Ux4gTimeslotData = {
    year: 2026,
    month: 4,
    today,
    selectedDate: new Date(2026, 3, 18),
    weeklyOffWeekdays: [6, 7],
    viewMode: 'compact',
    dates: [
      { date: new Date(2026, 3, 14), status: 'publicHoliday' },
      { date: new Date(2026, 3, 22), status: 'noSlots' },
    ],
  };

  // Time slot provider (matches Flutter Widgetbook example)
  const timeSlotProvider = (_date: Date): SlotTimeEntry[] => {
    return [
      { time: '9:00 AM', slotCount: 2, status: 'available' },
      { time: '10:00 AM', slotCount: 1, status: 'limited' },
      { time: '12:00 PM', slotCount: 0, status: 'noSlots' },
      { time: '2:00 PM', slotCount: 3, status: 'available' },
      { time: '4:00 PM', slotCount: 5, status: 'available' },
    ];
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* Main Title */}
      <Text style={[styles.mainTitle, { color: sectionTitleColor }]}>
        📅 Ux4gTimeslot / SlotGrid
      </Text>
      <Text style={[styles.mainSubtitle, { color: subtitleColor }]}>
        Calendar slot grid & interactive time slot picker sheet
      </Text>

      {/* Selected Info Banner */}
      <View style={[styles.infoCard, { backgroundColor: `${theme.colors.primary}14`, borderColor: theme.colors.primary }]}>
        <Text style={[styles.infoText, { color: sectionTitleColor }]}>
          <Text style={{ fontWeight: '700' }}>Selected Date:</Text> {selectedDateInfo}
        </Text>
        <Text style={[styles.infoText, { color: sectionTitleColor, marginTop: 4 }]}>
          <Text style={{ fontWeight: '700' }}>Confirmed Slot:</Text> {confirmedSlotInfo}
        </Text>
      </View>

      {/* ── Section 1: Expanded View Mode ── */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>
          Expanded View Mode (Vertical Sheet List)
        </Text>
        <Text style={[styles.sectionDesc, { color: subtitleColor }]}>
          Tap any available date to open vertical list time slot picker
        </Text>
        <Ux4gTimeslot
          data={expandedData}
          timeSlotProvider={timeSlotProvider}
          onDateSelected={(d) => setSelectedDateInfo(d.toDateString())}
          onSlotConfirmed={(d, slot) => {
            setSelectedDateInfo(d.toDateString());
            setConfirmedSlotInfo(`${slot.time} (${slot.slotCount} slots)`);
          }}
        />
      </View>

      {/* ── Section 2: Compact View Mode ── */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>
          Compact View Mode (Grid Sheet)
        </Text>
        <Text style={[styles.sectionDesc, { color: subtitleColor }]}>
          Tap any available date to open 2-column grid time slot picker
        </Text>
        <Ux4gTimeslot
          data={compactData}
          timeSlotProvider={timeSlotProvider}
          onDateSelected={(d) => setSelectedDateInfo(d.toDateString())}
          onSlotConfirmed={(d, slot) => {
            setSelectedDateInfo(d.toDateString());
            setConfirmedSlotInfo(`${slot.time} (${slot.slotCount} slots)`);
          }}
        />
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
    marginBottom: 16,
  },
  infoCard: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 13,
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
});
