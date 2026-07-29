/**
 * Ux4gTimeslot / SlotGrid Component
 *
 * Direct React Native port of the Flutter `Ux4gTimeslot` / `SlotGrid` component (`slot_grid.dart`).
 * Renders a calendar date grid with status indicators (available, no slots, public holiday, weekly off),
 * month navigation, and an interactive modal bottom sheet (`SlotTimePickerSheet`) for picking time slots.
 */

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Platform,
} from 'react-native';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { UX4GColors } from '../../foundation/colors';
import { Ux4gIcons } from '../../foundation/icons';
import { Ux4gButton } from '../button/Button';

// ═══════════════════════════════════════════════════════════════════════════
// DATA MODELS & ENUMS
// ═══════════════════════════════════════════════════════════════════════════

export type SlotPickerViewMode = 'expanded' | 'compact';

export type SlotDateStatus = 'noSlots' | 'publicHoliday' | 'weeklyOff' | 'available';

export interface SlotDateEntry {
  date: Date;
  status: SlotDateStatus;
}

export interface Ux4gTimeslotData {
  year: number;
  month: number;
  selectedDate?: Date;
  today?: Date;
  /** ISO weekday numbers: 1=Mon ... 7=Sun. Default: [6, 7] (Sat & Sun) */
  weeklyOffWeekdays?: number[];
  /** Explicit per-date overrides */
  dates?: SlotDateEntry[];
  allowTapOnPublicHoliday?: boolean;
  allowTapOnWeeklyOff?: boolean;
  viewMode?: SlotPickerViewMode;
}

export type SlotTimeStatus = 'available' | 'limited' | 'noSlots';

export interface SlotTimeEntry {
  time: string;
  slotCount: number;
  status?: SlotTimeStatus;
}

// ═══════════════════════════════════════════════════════════════════════════
// PROPS INTERFACE
// ═══════════════════════════════════════════════════════════════════════════

export interface Ux4gTimeslotProps {
  data: Ux4gTimeslotData;
  onDateSelected?: (date: Date) => void;
  onMonthChanged?: (year: number, month: number) => void;
  timeSlotProvider?: (date: Date) => SlotTimeEntry[];
  onSlotConfirmed?: (date: Date, slot: SlotTimeEntry) => void;
}

// Alias props & component names
export type SlotGridProps = Ux4gTimeslotProps;
export type TimeSlotProps = Ux4gTimeslotProps;

// ═══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const SHORT_MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const SHORT_WEEKDAY_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/** ISO weekday: 1 = Monday, 7 = Sunday */
function getIsoWeekday(date: Date): number {
  const day = date.getDay();
  return day === 0 ? 7 : day;
}

// ═══════════════════════════════════════════════════════════════════════════
// TIME SLOT PICKER BOTTOM SHEET
// ═══════════════════════════════════════════════════════════════════════════

export interface SlotTimePickerSheetProps {
  visible: boolean;
  date: Date;
  slots: SlotTimeEntry[];
  today: Date;
  viewMode?: SlotPickerViewMode;
  onClose: () => void;
  onConfirm?: (slot: SlotTimeEntry) => void;
  onPreviousDay?: (newDate: Date) => Promise<SlotTimeEntry[]>;
  onNextDay?: (newDate: Date) => Promise<SlotTimeEntry[]>;
}

export const SlotTimePickerSheet: React.FC<SlotTimePickerSheetProps> = ({
  visible,
  date: initialDate,
  slots: initialSlots,
  today,
  viewMode = 'expanded',
  onClose,
  onConfirm,
  onPreviousDay,
  onNextDay,
}) => {
  const theme = useUx4gTheme();

  const [currentDate, setCurrentDate] = useState<Date>(initialDate);
  const [slots, setSlots] = useState<SlotTimeEntry[]>(initialSlots);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setCurrentDate(initialDate);
    setSlots(initialSlots);
    setSelectedIndex(null);
  }, [initialDate, initialSlots, visible]);

  const dateLabel = useMemo(() => {
    const isoWd = getIsoWeekday(currentDate);
    const wd = SHORT_WEEKDAY_NAMES[isoWd - 1];
    const mo = SHORT_MONTH_NAMES[currentDate.getMonth()];
    return `${wd} ${currentDate.getDate()} ${mo}`;
  }, [currentDate]);

  const isToday = useMemo(() => {
    return isSameDay(currentDate, today);
  }, [currentDate, today]);

  const canGoPrevious = useMemo(() => {
    const todayZero = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const currentZero = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
    );
    return currentZero > todayZero;
  }, [currentDate, today]);

  const handlePreviousDay = async () => {
    if (!canGoPrevious) return;
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    setIsLoading(true);
    try {
      if (onPreviousDay) {
        const newSlots = await onPreviousDay(newDate);
        setSlots(newSlots);
      }
      setCurrentDate(newDate);
      setSelectedIndex(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextDay = async () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    setIsLoading(true);
    try {
      if (onNextDay) {
        const newSlots = await onNextDay(newDate);
        setSlots(newSlots);
      }
      setCurrentDate(newDate);
      setSelectedIndex(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirm = () => {
    if (selectedIndex !== null && slots[selectedIndex]) {
      const selected = slots[selectedIndex];
      onConfirm?.(selected);
      onClose();
    }
  };

  const primary = theme.colors.primary;
  const onPrimary = theme.colors.onPrimary;
  const surface = theme.colors.surface;
  const onSurface = theme.colors.onSurface;
  const warning = UX4GColors.orange600;
  const success = UX4GColors.green600;

  // ── Render Sheet Header ──
  const renderHeader = () => (
    <View style={sheetStyles.headerContainer}>
      <View style={sheetStyles.headerRow}>
        <TouchableOpacity
          testID="sheet-prev-day"
          disabled={!canGoPrevious || isLoading}
          onPress={handlePreviousDay}
          style={[
            sheetStyles.navArrow,
            {
              backgroundColor: !canGoPrevious || isLoading ? `${onSurface}0A` : surface,
              borderColor: `${onSurface}1F`,
            },
          ]}
        >
          {Ux4gIcons.chevronLeft({
            size: 18,
            color: !canGoPrevious || isLoading ? `${onSurface}1F` : `${onSurface}99`,
          })}
        </TouchableOpacity>

        <Text style={[sheetStyles.headerTitle, { color: onSurface }]}>{dateLabel}</Text>

        <TouchableOpacity
          testID="sheet-next-day"
          disabled={isLoading}
          onPress={handleNextDay}
          style={[
            sheetStyles.navArrow,
            {
              backgroundColor: isLoading ? `${onSurface}0A` : surface,
              borderColor: `${onSurface}1F`,
            },
          ]}
        >
          {Ux4gIcons.chevronRight({
            size: 18,
            color: isLoading ? `${onSurface}1F` : `${onSurface}99`,
          })}
        </TouchableOpacity>
      </View>

      {isToday && (
        <Text style={[sheetStyles.todayLabel, { color: primary }]}>Today</Text>
      )}
    </View>
  );

  // ── Render Sheet Legend ──
  const renderSheetLegend = () => (
    <View style={sheetStyles.legendContainer}>
      <View style={sheetStyles.legendRow}>
        <View style={sheetStyles.legendItem}>
          <View style={[sheetStyles.legendBox, { backgroundColor: surface, borderColor: `${onSurface}60` }]} />
          <Text style={[sheetStyles.legendText, { color: `${onSurface}99` }]}>Available</Text>
        </View>
        <View style={sheetStyles.legendItem}>
          <View style={[sheetStyles.legendBox, { backgroundColor: `${primary}14`, borderColor: primary }]}>
            {Ux4gIcons.check({ size: 10, color: primary })}
          </View>
          <Text style={[sheetStyles.legendText, { color: `${onSurface}99` }]}>Selected</Text>
        </View>
        <View style={sheetStyles.legendItem}>
          <View style={[sheetStyles.legendBox, { backgroundColor: `${onSurface}0A`, borderColor: `${onSurface}1F` }]} />
          <Text style={[sheetStyles.legendText, { color: `${onSurface}99` }]}>No slots</Text>
        </View>
      </View>
      <View style={[sheetStyles.legendRow, { marginTop: 6 }]}>
        <View style={sheetStyles.legendItem}>
          <View style={[sheetStyles.legendBox, { backgroundColor: `${warning}14`, borderColor: warning }]} />
          <Text style={[sheetStyles.legendText, { color: `${onSurface}99` }]}>Limited slots</Text>
        </View>
        <View style={sheetStyles.legendItem}>
          <View style={[sheetStyles.legendBox, { backgroundColor: `${warning}14`, borderColor: warning }]} />
          <Text style={[sheetStyles.legendText, { color: `${onSurface}99` }]}>Public holiday</Text>
        </View>
        <View style={sheetStyles.legendItem}>
          <View style={[sheetStyles.legendBox, { backgroundColor: `${onSurface}14`, borderColor: `${onSurface}1F` }]} />
          <Text style={[sheetStyles.legendText, { color: `${onSurface}99` }]}>Weekly off</Text>
        </View>
      </View>
    </View>
  );

  // ── Render Sheet Footer ──
  const renderFooter = () => (
    <View style={sheetStyles.footerContainer}>
      <View style={{ flex: 1 }}>
        <Ux4gButton
          testID="sheet-cancel-btn"
          variant="outline"
          text="Cancel"
          size="medium"
          onPress={onClose}
          contentColor={onSurface}
          borderColor={`${onSurface}1F`}
        />
      </View>
      <View style={{ width: 12 }} />
      <View style={{ flex: 1 }}>
        <Ux4gButton
          testID="sheet-confirm-btn"
          variant="primary"
          text="Confirm"
          size="medium"
          enabled={selectedIndex !== null && !isLoading}
          onPress={handleConfirm}
          backgroundColor={primary}
          contentColor={onPrimary}
        />
      </View>
    </View>
  );

  // ── Expanded View (Vertical List) ──
  const renderExpandedList = () => (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingVertical: 8 }}>
      {slots.map((slot, index) => {
        const isSelected = selectedIndex === index;
        const isNoSlots = slot.status === 'noSlots';

        if (isNoSlots) {
          return (
            <View key={`slot-${index}`} style={sheetStyles.noSlotsTile}>
              <Text style={[sheetStyles.noSlotsText, { color: `${onSurface}60` }]}>
                No slots available
              </Text>
            </View>
          );
        }

        return (
          <TouchableOpacity
            key={`slot-${index}`}
            testID={`slot-tile-${index}`}
            activeOpacity={0.7}
            onPress={() => setSelectedIndex(index)}
            style={[
              sheetStyles.slotTile,
              {
                backgroundColor: isSelected ? `${primary}14` : surface,
                borderColor: isSelected ? primary : `${onSurface}1F`,
                borderWidth: isSelected ? 1.5 : 1,
              },
            ]}
          >
            <View style={sheetStyles.slotTileContent}>
              <Text
                style={[
                  sheetStyles.slotTileTime,
                  {
                    color: isSelected ? primary : onSurface,
                    fontWeight: isSelected ? '700' : '600',
                  },
                ]}
              >
                {slot.time}
              </Text>
              <Text
                style={[
                  sheetStyles.slotTileCount,
                  {
                    color:
                      slot.status === 'limited'
                        ? warning
                        : isSelected
                          ? primary
                          : `${onSurface}60`,
                  },
                ]}
              >
                {slot.slotCount} slots
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );

  // ── Compact View (Grid Layout) ──
  const renderCompactGrid = () => {
    const rows: { index: number; slot: SlotTimeEntry }[][] = [];
    for (let i = 0; i < slots.length; i += 2) {
      const row = [{ index: i, slot: slots[i] }];
      if (i + 1 < slots.length) {
        row.push({ index: i + 1, slot: slots[i + 1] });
      }
      rows.push(row);
    }

    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingVertical: 8 }}>
        {rows.map((row, rowIndex) => (
          <View key={`row-${rowIndex}`} style={sheetStyles.compactRow}>
            {row.map(({ index, slot }, colIndex) => {
              const isSelected = selectedIndex === index;
              const isNoSlots = slot.status === 'noSlots';

              let badgeColor = isSelected
                ? primary
                : slot.status === 'limited'
                  ? warning
                  : success;

              return (
                <TouchableOpacity
                  key={`compact-slot-${index}`}
                  testID={`compact-slot-${index}`}
                  disabled={isNoSlots}
                  activeOpacity={0.7}
                  onPress={() => setSelectedIndex(index)}
                  style={[
                    sheetStyles.compactTile,
                    {
                      backgroundColor: isSelected ? `${primary}14` : 'transparent',
                      borderRightWidth: colIndex === 0 && row.length > 1 ? 1 : 0,
                      borderColor: `${onSurface}14`,
                    },
                  ]}
                >
                  <Text
                    style={[
                      sheetStyles.compactTimeText,
                      {
                        color: isNoSlots
                          ? `${onSurface}60`
                          : isSelected
                            ? primary
                            : onSurface,
                        fontWeight: isSelected ? '600' : '400',
                      },
                    ]}
                  >
                    {slot.time}
                  </Text>
                  <View
                    style={[
                      sheetStyles.compactBadge,
                      {
                        backgroundColor: isNoSlots ? `${onSurface}1F` : badgeColor,
                      },
                    ]}
                  >
                    {isSelected ? (
                      Ux4gIcons.check({ size: 12, color: onPrimary })
                    ) : (
                      <Text
                        style={[
                          sheetStyles.compactBadgeText,
                          {
                            color: isNoSlots ? `${onSurface}60` : '#FFFFFF',
                          },
                        ]}
                      >
                        {slot.slotCount}
                      </Text>
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </ScrollView>
    );
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={sheetStyles.backdrop}>
        <SafeAreaView style={[sheetStyles.sheetContainer, { backgroundColor: surface }]}>
          {/* Drag handle */}
          <View style={sheetStyles.dragHandleContainer}>
            <View style={[sheetStyles.dragHandle, { backgroundColor: `${onSurface}1F` }]} />
          </View>

          {renderHeader()}
          <View style={[sheetStyles.divider, { backgroundColor: `${onSurface}14` }]} />

          {viewMode === 'compact' ? renderCompactGrid() : renderExpandedList()}

          <View style={[sheetStyles.divider, { backgroundColor: `${onSurface}14` }]} />
          {renderSheetLegend()}
          <View style={[sheetStyles.divider, { backgroundColor: `${onSurface}14` }]} />

          {renderFooter()}
        </SafeAreaView>
      </View>
    </Modal>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT (Ux4gTimeslot / SlotGrid)
// ═══════════════════════════════════════════════════════════════════════════

export const Ux4gTimeslot: React.FC<Ux4gTimeslotProps> = ({
  data,
  onDateSelected,
  onMonthChanged,
  timeSlotProvider,
  onSlotConfirmed,
}) => {
  const theme = useUx4gTheme();

  const [year, setYear] = useState<number>(data.year);
  const [month, setMonth] = useState<number>(data.month);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    data.selectedDate,
  );

  // Bottom sheet state
  const [sheetVisible, setSheetVisible] = useState(false);
  const [activeDate, setActiveDate] = useState<Date>(data.selectedDate ?? new Date());
  const [activeSlots, setActiveSlots] = useState<SlotTimeEntry[]>([]);

  useEffect(() => {
    setYear(data.year);
    setMonth(data.month);
    setSelectedDate(data.selectedDate);
  }, [data]);

  const today = useMemo(() => data.today ?? new Date(), [data.today]);
  const weeklyOffWeekdays = useMemo(() => data.weeklyOffWeekdays ?? [6, 7], [
    data.weeklyOffWeekdays,
  ]);
  const datesEntries = useMemo(() => data.dates ?? [], [data.dates]);

  const isCurrentMonth = useMemo(() => {
    return year === today.getFullYear() && month === today.getMonth() + 1;
  }, [year, month, today]);

  const handlePreviousMonth = () => {
    if (isCurrentMonth) return;
    let newYear = year;
    let newMonth = month - 1;
    if (newMonth < 1) {
      newMonth = 12;
      newYear -= 1;
    }
    setYear(newYear);
    setMonth(newMonth);
    onMonthChanged?.(newYear, newMonth);
  };

  const handleNextMonth = () => {
    let newYear = year;
    let newMonth = month + 1;
    if (newMonth > 12) {
      newMonth = 1;
      newYear += 1;
    }
    setYear(newYear);
    setMonth(newMonth);
    onMonthChanged?.(newYear, newMonth);
  };

  // Determine status of a date
  const getStatusFor = useCallback(
    (date: Date): SlotDateStatus => {
      for (const entry of datesEntries) {
        if (isSameDay(entry.date, date)) return entry.status;
      }
      const isoWd = getIsoWeekday(date);
      if (weeklyOffWeekdays.includes(isoWd)) {
        return 'weeklyOff';
      }
      return 'available';
    },
    [datesEntries, weeklyOffWeekdays],
  );

  const handleDateCellPress = (date: Date, canTap: boolean) => {
    if (!canTap) return;

    if (timeSlotProvider) {
      const slots = timeSlotProvider(date);
      setActiveDate(date);
      setActiveSlots(slots);
      setSheetVisible(true);
    } else {
      setSelectedDate(date);
      onDateSelected?.(date);
    }
  };

  const handleSlotConfirm = (slot: SlotTimeEntry) => {
    setSelectedDate(activeDate);
    onDateSelected?.(activeDate);
    onSlotConfirmed?.(activeDate, slot);
  };

  const primary = theme.colors.primary;
  const onPrimary = theme.colors.onPrimary;
  const surface = theme.colors.surface;
  const onSurface = theme.colors.onSurface;
  const warning = UX4GColors.orange600;

  // ── Render Month Header ──
  const renderMonthHeader = () => {
    const monthName = MONTH_NAMES[month - 1];
    return (
      <View style={gridStyles.headerRow}>
        <TouchableOpacity
          testID="prev-month-btn"
          disabled={isCurrentMonth}
          onPress={handlePreviousMonth}
          style={[
            gridStyles.navArrow,
            {
              backgroundColor: isCurrentMonth ? `${onSurface}0A` : surface,
              borderColor: `${onSurface}1F`,
            },
          ]}
        >
          {Ux4gIcons.chevronLeft({
            size: 18,
            color: isCurrentMonth ? `${onSurface}1F` : `${onSurface}99`,
          })}
        </TouchableOpacity>

        <Text style={[gridStyles.monthTitle, { color: primary }]}>
          {monthName} {year}
        </Text>

        <TouchableOpacity
          testID="next-month-btn"
          onPress={handleNextMonth}
          style={[
            gridStyles.navArrow,
            { backgroundColor: surface, borderColor: `${onSurface}1F` },
          ]}
        >
          {Ux4gIcons.chevronRight({ size: 18, color: `${onSurface}99` })}
        </TouchableOpacity>
      </View>
    );
  };

  // ── Render Weekday Header Row ──
  const renderWeekdayRow = () => {
    const labels = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    return (
      <View style={gridStyles.weekdayRow}>
        {labels.map((lbl, idx) => {
          const weekday = idx + 1;
          const isOff = weeklyOffWeekdays.includes(weekday);
          return (
            <View key={lbl} style={gridStyles.weekdayCell}>
              <Text
                style={[
                  gridStyles.weekdayText,
                  { color: isOff ? `${onSurface}60` : `${onSurface}99` },
                ]}
              >
                {lbl}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };

  // ── Render Date Grid ──
  const renderDatesGrid = () => {
    const firstDay = new Date(year, month - 1, 1);
    const startOffset = getIsoWeekday(firstDay) - 1; // 0 for Mon
    const daysInMonth = new Date(year, month, 0).getDate();

    const totalCells = startOffset + daysInMonth;
    const rowCount = Math.ceil(totalCells / 7);

    return (
      <View style={gridStyles.datesGridContainer}>
        {Array.from({ length: rowCount }).map((_, row) => (
          <View key={`row-${row}`} style={gridStyles.dateRow}>
            {Array.from({ length: 7 }).map((_, col) => {
              const cellIndex = row * 7 + col;
              const dayOffset = cellIndex - startOffset + 1;

              // Out of month
              if (dayOffset < 1 || dayOffset > daysInMonth) {
                let dayNumber: number;
                if (dayOffset < 1) {
                  const prevMonth = month === 1 ? 12 : month - 1;
                  const prevYear = month === 1 ? year - 1 : year;
                  const daysInPrev = new Date(prevYear, prevMonth, 0).getDate();
                  dayNumber = daysInPrev + dayOffset;
                } else {
                  dayNumber = dayOffset - daysInMonth;
                }

                return (
                  <View key={`cell-${cellIndex}`} style={gridStyles.dateCell}>
                    <Text style={[gridStyles.outOfMonthText, { color: `${onSurface}60` }]}>
                      {dayNumber}
                    </Text>
                  </View>
                );
              }

              // In month
              const date = new Date(year, month - 1, dayOffset);
              const status = getStatusFor(date);
              const isSelected = selectedDate ? isSameDay(selectedDate, date) : false;
              const isTodayDate = isSameDay(date, today);

              const todayZero = new Date(today.getFullYear(), today.getMonth(), today.getDate());
              const dateZero = new Date(date.getFullYear(), date.getMonth(), date.getDate());
              const isPast = dateZero < todayZero;

              const canTap =
                !isPast &&
                (status === 'available' ||
                  (status === 'publicHoliday' && data.allowTapOnPublicHoliday) ||
                  (status === 'weeklyOff' && data.allowTapOnWeeklyOff));

              return (
                <TouchableOpacity
                  key={`cell-${cellIndex}`}
                  testID={`date-cell-${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}
                  activeOpacity={canTap ? 0.7 : 1}
                  onPress={() => handleDateCellPress(date, canTap)}
                  style={gridStyles.dateCell}
                >
                  {/* Date label container */}
                  {isPast ? (
                    <View style={gridStyles.datePill}>
                      <Text style={[gridStyles.dateText, { color: `${onSurface}60` }]}>
                        {date.getDate()}
                      </Text>
                    </View>
                  ) : isSelected ? (
                    <View style={[gridStyles.datePill, { backgroundColor: primary }]}>
                      <Text style={[gridStyles.dateTextBold, { color: onPrimary }]}>
                        {date.getDate()}
                      </Text>
                    </View>
                  ) : status === 'publicHoliday' ? (
                    <View style={[gridStyles.datePill, { backgroundColor: `${warning}1F` }]}>
                      <Text style={[gridStyles.dateTextMedium, { color: warning }]}>
                        {date.getDate()}
                      </Text>
                    </View>
                  ) : status === 'noSlots' || status === 'weeklyOff' ? (
                    <View style={[gridStyles.datePill, { backgroundColor: `${onSurface}0D` }]}>
                      <Text style={[gridStyles.dateText, { color: `${onSurface}60` }]}>
                        {date.getDate()}
                      </Text>
                    </View>
                  ) : (
                    <View style={gridStyles.datePill}>
                      <Text style={[gridStyles.dateText, { color: onSurface }]}>
                        {date.getDate()}
                      </Text>
                    </View>
                  )}

                  {/* Today dot */}
                  {isTodayDate && !isSelected && (
                    <View style={[gridStyles.todayDot, { backgroundColor: primary }]} />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    );
  };

  // ── Render Grid Legend ──
  const renderGridLegend = () => (
    <View style={gridStyles.legendRow}>
      <View style={gridStyles.legendItem}>
        <View style={[gridStyles.legendBox, { backgroundColor: `${onSurface}0D`, borderColor: `${onSurface}1F` }]} />
        <Text style={[gridStyles.legendText, { color: `${onSurface}99` }]}>No slots</Text>
      </View>
      <View style={{ width: 16 }} />
      <View style={gridStyles.legendItem}>
        <View style={[gridStyles.legendBox, { backgroundColor: `${warning}1F`, borderColor: warning }]} />
        <Text style={[gridStyles.legendText, { color: `${onSurface}99` }]}>Public holiday</Text>
      </View>
      <View style={{ width: 16 }} />
      <View style={gridStyles.legendItem}>
        <View style={[gridStyles.legendBox, { backgroundColor: `${onSurface}0D`, borderColor: `${onSurface}1F` }]} />
        <Text style={[gridStyles.legendText, { color: `${onSurface}99` }]}>Weekly off</Text>
      </View>
    </View>
  );

  return (
    <View style={[gridStyles.card, { backgroundColor: surface, borderColor: `${onSurface}1F` }]}>
      {renderMonthHeader()}
      <View style={{ height: 12 }} />
      {renderWeekdayRow()}
      <View style={{ height: 4 }} />
      {renderDatesGrid()}
      <View style={{ height: 12 }} />
      {renderGridLegend()}

      {/* Time Slot Picker Sheet */}
      <SlotTimePickerSheet
        visible={sheetVisible}
        date={activeDate}
        slots={activeSlots}
        today={today}
        viewMode={data.viewMode ?? 'expanded'}
        onClose={() => setSheetVisible(false)}
        onConfirm={handleSlotConfirm}
        onPreviousDay={async (newDate) => {
          if (timeSlotProvider) return timeSlotProvider(newDate);
          return [];
        }}
        onNextDay={async (newDate) => {
          if (timeSlotProvider) return timeSlotProvider(newDate);
          return [];
        }}
      />
    </View>
  );
};

// Aliases
export const SlotGrid = Ux4gTimeslot;
export const TimeSlot = Ux4gTimeslot;
export const Ux4gTimeSlot = Ux4gTimeslot;

// ═══════════════════════════════════════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════════════════════════════════════

const gridStyles = StyleSheet.create({
  card: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 12,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navArrow: {
    width: 32,
    height: 32,
    borderRadius: 6,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  weekdayRow: {
    flexDirection: 'row',
  },
  weekdayCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weekdayText: {
    fontSize: 12,
    fontWeight: '700',
  },
  datesGridContainer: {
    width: '100%',
  },
  dateRow: {
    flexDirection: 'row',
  },
  dateCell: {
    flex: 1,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  datePill: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 13,
    fontWeight: '400',
  },
  dateTextMedium: {
    fontSize: 13,
    fontWeight: '500',
  },
  dateTextBold: {
    fontSize: 13,
    fontWeight: '700',
  },
  outOfMonthText: {
    fontSize: 13,
    fontWeight: '400',
  },
  todayDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginTop: 2,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendBox: {
    width: 14,
    height: 14,
    borderRadius: 3,
    borderWidth: 1,
  },
  legendText: {
    fontSize: 11,
    fontWeight: '400',
    marginLeft: 4,
  },
});

const sheetStyles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  sheetContainer: {
    maxHeight: Dimensions.get('window').height * 0.85,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

  },
  dragHandleContainer: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  dragHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navArrow: {
    width: 32,
    height: 32,
    borderRadius: 6,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  todayLabel: {
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 2,
  },
  divider: {
    height: 1,
    width: '100%',
  },
  // Expanded slot tile
  slotTile: {
    height: 56,
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  slotTileContent: {
    alignItems: 'center',
  },
  slotTileTime: {
    fontSize: 14,
    fontWeight: '700',
  },
  slotTileCount: {
    fontSize: 11,
    fontWeight: '400',
    marginTop: 2,
  },
  slotTileSelectedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slotTileSelectedText: {
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 6,
  },
  noSlotsTile: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.04)',
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 8,
  },
  noSlotsText: {
    fontSize: 13,
    fontWeight: '400',
  },
  // Compact grid
  compactRow: {
    flexDirection: 'row',
    height: 52,
  },
  compactTile: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  compactTimeText: {
    fontSize: 13,
  },
  compactBadge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
  },
  compactBadgeText: {
    fontSize: 11,
    fontWeight: '700',
  },
  // Sheet Legend
  legendContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendBox: {
    width: 14,
    height: 14,
    borderRadius: 3,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  legendText: {
    fontSize: 11,
    fontWeight: '400',
    marginLeft: 4,
  },
  // Footer
  footerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
