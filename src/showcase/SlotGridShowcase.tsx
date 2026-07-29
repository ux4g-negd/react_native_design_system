import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ux4gTimeslot, SlotDateStatus, SlotPickerViewMode, SlotTimeStatus, SlotTimeEntry } from '../components/slot-grid/SlotGrid';
import { useUx4gTheme } from '../theme/Ux4gThemeContext';

export const SlotGridShowcase: React.FC = () => {
  const theme = useUx4gTheme();
  const colors = theme.colors;
  
  const [selectedDate1, setSelectedDate1] = useState<Date | undefined>();
  const [confirmedSlot1, setConfirmedSlot1] = useState<SlotTimeEntry | undefined>();
  
  const [selectedDate2, setSelectedDate2] = useState<Date | undefined>();
  const [confirmedSlot2, setConfirmedSlot2] = useState<SlotTimeEntry | undefined>();
  
  const handleDateSelected1 = (date: Date) => {
    setSelectedDate1(date);
    setConfirmedSlot1(undefined);
  };

  const handleSlotConfirmed1 = (date: Date, slot: SlotTimeEntry) => {
    setSelectedDate1(date);
    setConfirmedSlot1(slot);
  };
  
  const handleDateSelected2 = (date: Date) => {
    setSelectedDate2(date);
    setConfirmedSlot2(undefined);
  };

  const handleSlotConfirmed2 = (date: Date, slot: SlotTimeEntry) => {
    setSelectedDate2(date);
    setConfirmedSlot2(slot);
  };

  const getDummyTimeSlots = async (date: Date): Promise<SlotTimeEntry[]> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    const day = date.getDate();
    
    if (day % 3 === 0) {
      return [
        { time: '09:00 AM', slotCount: 2, status: SlotTimeStatus.limited },
        { time: '10:00 AM', slotCount: 5, status: SlotTimeStatus.available },
        { time: '11:00 AM', slotCount: 0, status: SlotTimeStatus.noSlots },
        { time: '12:00 PM', slotCount: 1, status: SlotTimeStatus.limited },
        { time: '01:00 PM', slotCount: 3, status: SlotTimeStatus.available },
      ];
    } else if (day % 2 === 0) {
      return [
        { time: '09:30 AM', slotCount: 12, status: SlotTimeStatus.available },
        { time: '11:30 AM', slotCount: 8, status: SlotTimeStatus.available },
        { time: '02:30 PM', slotCount: 0, status: SlotTimeStatus.noSlots },
        { time: '04:30 PM', slotCount: 4, status: SlotTimeStatus.available },
      ];
    }
    
    return [
      { time: '09:00 AM', slotCount: 5, status: SlotTimeStatus.available },
      { time: '10:00 AM', slotCount: 0, status: SlotTimeStatus.noSlots },
      { time: '11:00 AM', slotCount: 2, status: SlotTimeStatus.limited },
      { time: '12:00 PM', slotCount: 8, status: SlotTimeStatus.available },
      { time: '01:00 PM', slotCount: 1, status: SlotTimeStatus.limited },
      { time: '02:00 PM', slotCount: 0, status: SlotTimeStatus.noSlots },
      { time: '03:00 PM', slotCount: 4, status: SlotTimeStatus.available },
    ];
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.onBackground }]}>📅 Slot Grid</Text>
        <Text style={[styles.subText, { color: theme.isDark ? '#A1A1AA' : '#71717A' }]}>
          Calendar-style slot grid with an integrated time slot picker sheet.
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: theme.isDark ? '#1F1F1F' : '#FFFFFF', borderColor: theme.isDark ? '#333333' : '#E4E4E7' }]}>
        <Text style={[styles.sectionTitle, { color: theme.isDark ? '#F4F4F5' : '#18181B' }]}>1. Expanded View Mode</Text>
        <Text style={[styles.subText, { color: theme.isDark ? '#A1A1AA' : '#71717A', marginBottom: 16 }]}>
          Vertical list for time slot selection.
        </Text>
        
        <Ux4gTimeslot
          data={{
            year: 2026,
            month: 7,
            today: '2026-07-29',
            selectedDate: selectedDate1 ? selectedDate1.toISOString() : undefined,
            weeklyOffWeekdays: [6, 7], // Saturday, Sunday
            dates: [
              { date: '2026-07-15', status: SlotDateStatus.noSlots },
              { date: '2026-07-20', status: SlotDateStatus.publicHoliday },
            ],
            allowTapOnPublicHoliday: true,
            viewMode: SlotPickerViewMode.expanded
          }}
          onDateSelected={handleDateSelected1}
          onSlotConfirmed={handleSlotConfirmed1}
          timeSlotProvider={getDummyTimeSlots}
        />

        {(selectedDate1 || confirmedSlot1) && (
          <View style={[styles.resultBox, { backgroundColor: theme.colors.primary + '14', borderColor: theme.colors.primary }]}>
            <Text style={[styles.resultTitle, { color: theme.colors.onSurface }]}>Selection Result:</Text>
            {selectedDate1 && <Text style={[styles.resultText, { color: theme.colors.onSurface }]}>• Date: {selectedDate1.toDateString()}</Text>}
            {confirmedSlot1 && <Text style={[styles.resultText, { color: theme.colors.onSurface }]}>• Time: {confirmedSlot1.time}</Text>}
            {!confirmedSlot1 && <Text style={[styles.resultText, { color: theme.colors.onSurface + '99' }]}>• Time: None selected yet</Text>}
          </View>
        )}
      </View>
      
      <View style={[styles.card, { backgroundColor: theme.isDark ? '#1F1F1F' : '#FFFFFF', borderColor: theme.isDark ? '#333333' : '#E4E4E7' }]}>
        <Text style={[styles.sectionTitle, { color: theme.isDark ? '#F4F4F5' : '#18181B' }]}>2. Compact View Mode</Text>
        <Text style={[styles.subText, { color: theme.isDark ? '#A1A1AA' : '#71717A', marginBottom: 16 }]}>
          Grid layout for time slot selection.
        </Text>
        
        <Ux4gTimeslot
          data={{
            year: 2026,
            month: 7,
            today: '2026-07-29',
            selectedDate: selectedDate2 ? selectedDate2.toISOString() : undefined,
            weeklyOffWeekdays: [7], // Only Sunday off
            dates: [],
            viewMode: SlotPickerViewMode.compact
          }}
          onDateSelected={handleDateSelected2}
          onSlotConfirmed={handleSlotConfirmed2}
          timeSlotProvider={getDummyTimeSlots}
        />

        {(selectedDate2 || confirmedSlot2) && (
          <View style={[styles.resultBox, { backgroundColor: theme.colors.primary + '14', borderColor: theme.colors.primary }]}>
            <Text style={[styles.resultTitle, { color: theme.colors.onSurface }]}>Selection Result:</Text>
            {selectedDate2 && <Text style={[styles.resultText, { color: theme.colors.onSurface }]}>• Date: {selectedDate2.toDateString()}</Text>}
            {confirmedSlot2 && <Text style={[styles.resultText, { color: theme.colors.onSurface }]}>• Time: {confirmedSlot2.time}</Text>}
            {!confirmedSlot2 && <Text style={[styles.resultText, { color: theme.colors.onSurface + '99' }]}>• Time: None selected yet</Text>}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: { padding: 16, paddingBottom: 40 },
  header: { marginBottom: 16 },
  title: { fontSize: 22, fontWeight: '800', marginBottom: 6 },
  subText: { fontSize: 14, lineHeight: 20 },
  card: { borderWidth: 1, borderRadius: 16, padding: 16, marginBottom: 16 },
  sectionTitle: { fontSize: 16, fontWeight: '700', marginBottom: 4 },
  resultBox: {
    marginTop: 16,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  resultTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  resultText: {
    fontSize: 14,
    marginTop: 2,
  },
});
