import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useUx4gTheme } from '../theme/Ux4gThemeContext';
import { Ux4gDatePicker, DateRange } from '../components/date-picker';
import { Ux4gInputFieldStatus } from '../components/input-field';

export const DatePickerShowcase: React.FC = () => {
  const { colors, typography, isDark, toggleTheme } = useUx4gTheme();

  const [singleDate, setSingleDate] = useState<Date | undefined>(undefined);
  const [rangeDate, setRangeDate] = useState<DateRange | undefined>(undefined);

  const [statusDate, setStatusDate] = useState<Date | undefined>(undefined);
  const [status, setStatus] = useState<Ux4gInputFieldStatus>('error');

  const formatDateStr = (d?: Date) => {
    if (!d) return 'None';
    return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.onBackground }]}>
          Ux4gDatePicker Showcase
        </Text>
        <Text style={[styles.subtitle, { color: `${colors.onBackground}99` }]}>
          Single & Range date selection modes with exact design variants and validation statuses.
        </Text>
        <TouchableOpacity
          onPress={toggleTheme}
          style={[styles.themeButton, { backgroundColor: colors.primary }]}
        >
          <Text style={[styles.themeButtonText, { color: colors.onPrimary }]}>
            Toggle Theme ({isDark ? 'Dark' : 'Light'})
          </Text>
        </TouchableOpacity>
      </View>

      {/* Card 1: Single Date Picker */}
      <View style={[styles.card, { backgroundColor: colors.surface, borderColor: `${colors.onSurface}1F` }]}>
        <Text style={[styles.cardHeaderTitle, { color: colors.onSurface }]}>
          Single Date Picker
        </Text>
        <Ux4gDatePicker
          mode="single"
          label="Select Date"
          isRequired
          placeholder="DD/MM/YYYY"
          description="Select a single date from the calendar."
          initialDate={singleDate}
          onDateSelected={(d) => setSingleDate(d)}
        />
        {singleDate && (
          <View style={styles.stateContainer}>
            <Text style={[styles.stateText, { color: colors.primary }]}>
              Selected Date: {formatDateStr(singleDate)}
            </Text>
          </View>
        )}
      </View>

      {/* Card 2: Date Range Picker */}
      <View style={[styles.card, { backgroundColor: colors.surface, borderColor: `${colors.onSurface}1F` }]}>
        <Text style={[styles.cardHeaderTitle, { color: colors.onSurface }]}>
          Date Range Picker
        </Text>
        <Ux4gDatePicker
          mode="range"
          label="Select Date Range"
          isRequired
          placeholder="DD/MM/YYYY – DD/MM/YYYY"
          description="Select start and end dates for your trip or reservation."
          initialDateRange={rangeDate}
          onDateRangeSelected={(r) => setRangeDate(r)}
        />
        {rangeDate && (
          <View style={styles.stateContainer}>
            <Text style={[styles.stateText, { color: colors.primary }]}>
              Selected Range: {formatDateStr(rangeDate?.start)} – {formatDateStr(rangeDate?.end)}
            </Text>
          </View>
        )}
      </View>

      {/* Card 3: Validation Statuses */}
      <View style={[styles.card, { backgroundColor: colors.surface, borderColor: `${colors.onSurface}1F` }]}>
        <Text style={[styles.cardHeaderTitle, { color: colors.onSurface }]}>
          Validation Statuses
        </Text>
        
        <View style={styles.statusButtonsRow}>
          {(['defaultStatus', 'error', 'warning', 'success'] as Ux4gInputFieldStatus[]).map((st) => (
            <TouchableOpacity
              key={st}
              onPress={() => setStatus(st)}
              style={[
                styles.statusChip,
                {
                  backgroundColor: status === st ? colors.primary : `${colors.onSurface}1A`,
                },
              ]}
            >
              <Text
                style={[
                  styles.statusChipText,
                  { color: status === st ? colors.onPrimary : colors.onSurface },
                ]}
              >
                {st}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Ux4gDatePicker
          mode="single"
          label="Validation Field"
          description={
            status === 'error'
              ? 'Invalid date selected'
              : status === 'warning'
              ? 'Selected date is close to holiday'
              : status === 'success'
              ? 'Date verified successfully'
              : 'Standard status hint'
          }
          status={status}
          initialDate={statusDate}
          onDateSelected={(d) => setStatusDate(d)}
        />
      </View>

      {/* Card 4: Date Bounds & Disabled State */}
      <View style={[styles.card, { backgroundColor: colors.surface, borderColor: `${colors.onSurface}1F` }]}>
        <Text style={[styles.cardHeaderTitle, { color: colors.onSurface }]}>
          Date Bounds & Disabled State
        </Text>

        <View style={styles.subFieldMargin}>
          <Ux4gDatePicker
            mode="single"
            label="Restricted Min/Max (Current Month)"
            description="Only dates within the current month are selectable"
            minDate={new Date(new Date().getFullYear(), new Date().getMonth(), 1)}
            maxDate={new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)}
          />
        </View>

        <View style={styles.subFieldMargin}>
          <Ux4gDatePicker
            mode="single"
            label="Disabled Field"
            description="Interaction disabled"
            enabled={false}
            initialDate={new Date()}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 12,
  },
  themeButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  themeButtonText: {
    fontSize: 13,
    fontWeight: '600',
  },
  card: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 16,
  },
  cardHeaderTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 14,
  },
  stateContainer: {
    marginTop: 12,
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'rgba(74, 43, 194, 0.08)',
  },
  stateText: {
    fontSize: 13,
    fontWeight: '600',
  },
  statusButtonsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  statusChip: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 6,
  },
  statusChipText: {
    fontSize: 12,
    fontWeight: '600',
  },
  subFieldMargin: {
    marginBottom: 14,
  },
});
