import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useUx4gTheme } from '../theme/Ux4gThemeContext';
import { Ux4gTimePicker, Ux4gTimeOfDay } from '../components/time-picker';
import { Ux4gInputFieldStatus } from '../components/input-field';

export const TimePickerShowcase: React.FC = () => {
  const { colors, typography, isDark, toggleTheme } = useUx4gTheme();

  const [standardTime, setStandardTime] = useState<Ux4gTimeOfDay | undefined>({
    hour: 9,
    minute: 30,
  });
  const [intervalTime, setIntervalTime] = useState<Ux4gTimeOfDay | undefined>(undefined);
  const [statusTime, setStatusTime] = useState<Ux4gTimeOfDay | undefined>(undefined);
  const [status, setStatus] = useState<Ux4gInputFieldStatus>('defaultStatus');

  const formatTimeStr = (t?: Ux4gTimeOfDay) => {
    if (!t) return 'None';
    const isAm = t.hour < 12;
    const rawHour = t.hour % 12;
    const displayHour = rawHour === 0 ? 12 : rawHour;
    const hStr = String(displayHour).padStart(2, '0');
    const mStr = String(t.minute).padStart(2, '0');
    return `${hStr}:${mStr} ${isAm ? 'AM' : 'PM'}`;
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.onBackground }]}>
          Ux4gTimePicker Showcase
        </Text>
        <Text style={[styles.subtitle, { color: `${colors.onBackground}99` }]}>
          12-hour AM/PM Time Picker component with minute intervals and status variants.
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

      {/* Card 1: Standard Time Picker */}
      <View style={[styles.card, { backgroundColor: colors.surface, borderColor: `${colors.onSurface}1F` }]}>
        <Text style={[styles.cardHeaderTitle, { color: colors.onSurface }]}>
          Standard Time Picker
        </Text>
        <Ux4gTimePicker
          label="Select Meeting Time"
          isRequired
          placeholder="Select time"
          description="Choose a 12-hour time slot for your call."
          initialTime={standardTime}
          onTimeSelected={(t) => setStandardTime(t)}
        />
        {standardTime && (
          <View style={styles.stateContainer}>
            <Text style={[styles.stateText, { color: colors.primary }]}>
              Selected Time: {formatTimeStr(standardTime)}
            </Text>
          </View>
        )}
      </View>

      {/* Card 2: Custom Minute Interval (15 mins) */}
      <View style={[styles.card, { backgroundColor: colors.surface, borderColor: `${colors.onSurface}1F` }]}>
        <Text style={[styles.cardHeaderTitle, { color: colors.onSurface }]}>
          Minute Interval (15 Minutes)
        </Text>
        <Ux4gTimePicker
          label="Slot Time (15-min Intervals)"
          minuteInterval={15}
          placeholder="Pick 15-min slot"
          description="Scroll wheel minute steps: 00, 15, 30, 45."
          initialTime={intervalTime}
          onTimeSelected={(t) => setIntervalTime(t)}
        />
        {intervalTime && (
          <View style={styles.stateContainer}>
            <Text style={[styles.stateText, { color: colors.primary }]}>
              Selected Interval Time: {formatTimeStr(intervalTime)}
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

        <Ux4gTimePicker
          label="Status Validation Field"
          description={
            status === 'error'
              ? 'Selected time is out of working hours'
              : status === 'warning'
              ? 'Selected time falls in peak traffic period'
              : status === 'success'
              ? 'Time slot reserved successfully'
              : 'Standard time picker caption hint'
          }
          status={status}
          initialTime={statusTime}
          onTimeSelected={(t) => setStatusTime(t)}
        />
      </View>

      {/* Card 4: Disabled State */}
      <View style={[styles.card, { backgroundColor: colors.surface, borderColor: `${colors.onSurface}1F` }]}>
        <Text style={[styles.cardHeaderTitle, { color: colors.onSurface }]}>
          Disabled Field
        </Text>
        <Ux4gTimePicker
          label="Disabled Time Field"
          description="Interaction is currently disabled"
          enabled={false}
          initialTime={{ hour: 14, minute: 0 }}
        />
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
});
