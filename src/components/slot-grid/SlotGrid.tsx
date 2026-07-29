import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useUx4gTheme, useUx4gStyleSheet } from '../../theme/Ux4gThemeContext';
import { Ux4gIcons } from '../../foundation/icons';

export enum SlotPickerViewMode {
  expanded = 'expanded',
  compact = 'compact',
}

export enum SlotDateStatus {
  noSlots = 'noSlots',
  publicHoliday = 'publicHoliday',
  weeklyOff = 'weeklyOff',
  available = 'available',
}

export interface SlotDateEntry {
  date: string; // ISO date format "YYYY-MM-DD"
  status: SlotDateStatus;
}

export interface Ux4gTimeslotData {
  year: number;
  month: number; // 1-12
  selectedDate?: string;
  today?: string;
  weeklyOffWeekdays?: number[]; // 1=Mon...7=Sun
  dates?: SlotDateEntry[];
  allowTapOnPublicHoliday?: boolean;
  allowTapOnWeeklyOff?: boolean;
  viewMode?: SlotPickerViewMode;
}

export enum SlotTimeStatus {
  available = 'available',
  limited = 'limited',
  noSlots = 'noSlots',
}

export interface SlotTimeEntry {
  time: string;
  slotCount: number;
  status?: SlotTimeStatus;
}

export interface SlotGridProps {
  data: Ux4gTimeslotData;
  onDateSelected?: (date: Date) => void;
  onMonthChanged?: (year: number, month: number) => void;
  timeSlotProvider?: (date: Date) => Promise<SlotTimeEntry[]> | SlotTimeEntry[];
  onSlotConfirmed?: (date: Date, slot: SlotTimeEntry) => void;
  style?: any;
}

const ChevronLeft = ({ color, size = 18 }: { color: string; size?: number }) => {
  return Ux4gIcons.chevronLeft({ color, size });
};
const ChevronRight = ({ color, size = 18 }: { color: string; size?: number }) => {
  return Ux4gIcons.chevronRight({ color, size });
};
const CheckIcon = ({ color, size = 18 }: { color: string; size?: number }) => {
  return Ux4gIcons.checkCircle({ color, size });
};

const isSameDay = (d1: Date, d2: Date) => {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

export const Ux4gTimeslot: React.FC<SlotGridProps> = ({
  data,
  onDateSelected,
  onMonthChanged,
  timeSlotProvider,
  onSlotConfirmed,
  style,
}) => {
  const theme = useUx4gTheme();
  const styles = useUx4gStyleSheet(createStyles);
  
  const [year, setYear] = useState(data.year);
  const [month, setMonth] = useState(data.month);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    data.selectedDate ? new Date(data.selectedDate) : undefined
  );
  const [sheetVisible, setSheetVisible] = useState(false);
  const [sheetDate, setSheetDate] = useState<Date | undefined>();
  const [sheetSlots, setSheetSlots] = useState<SlotTimeEntry[]>([]);
  
  useEffect(() => {
    setYear(data.year);
    setMonth(data.month);
    setSelectedDate(data.selectedDate ? new Date(data.selectedDate) : undefined);
  }, [data]);

  const todayDate = useMemo(() => {
    return data.today ? new Date(data.today) : new Date();
  }, [data.today]);

  const isCurrentMonth = year === todayDate.getFullYear() && month === (todayDate.getMonth() + 1);

  const goToPreviousMonth = () => {
    if (isCurrentMonth) return;
    setMonth((prev) => {
      let newMonth = prev - 1;
      let newYear = year;
      if (newMonth < 1) {
        newMonth = 12;
        newYear -= 1;
        setYear(newYear);
      }
      onMonthChanged?.(newYear, newMonth);
      return newMonth;
    });
  };

  const goToNextMonth = () => {
    setMonth((prev) => {
      let newMonth = prev + 1;
      let newYear = year;
      if (newMonth > 12) {
        newMonth = 1;
        newYear += 1;
        setYear(newYear);
      }
      onMonthChanged?.(newYear, newMonth);
      return newMonth;
    });
  };

  const getStatusFor = useCallback((date: Date) => {
    const dates = data.dates || [];
    for (const entry of dates) {
      // Create new date without timezone offset issues if possible, but simplest is Date object comparison
      // The entry date is 'YYYY-MM-DD', which defaults to midnight UTC. We must ensure local comparison.
      const entryDate = new Date(entry.date);
      // Adjust entryDate to local timezone if needed, assuming the string is parsed as UTC midnight
      const localEntryDate = new Date(entryDate.getUTCFullYear(), entryDate.getUTCMonth(), entryDate.getUTCDate());
      
      if (isSameDay(localEntryDate, date)) {
        return entry.status;
      }
    }
    const weeklyOffs = data.weeklyOffWeekdays || [6, 7];
    // getDay() 0=Sun, 1=Mon...6=Sat -> Map to 1=Mon...7=Sun
    const isoDay = date.getDay() === 0 ? 7 : date.getDay();
    if (weeklyOffs.includes(isoDay)) {
      return SlotDateStatus.weeklyOff;
    }
    return SlotDateStatus.available;
  }, [data.dates, data.weeklyOffWeekdays]);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleDateTap = async (date: Date, canTap: boolean) => {
    if (!canTap) return;
    
    if (timeSlotProvider) {
      setSheetDate(date);
      
      let fetchedSlots: SlotTimeEntry[] = [];
      try {
        fetchedSlots = await timeSlotProvider(date);
      } catch (error) {
        fetchedSlots = [];
      }
      
      setSheetSlots(fetchedSlots);
      setSheetVisible(true);
    } else {
      setSelectedDate(date);
      onDateSelected?.(date);
    }
  };

  const handleSheetConfirm = (slot: SlotTimeEntry) => {
    if (sheetDate) {
      setSelectedDate(sheetDate);
      onDateSelected?.(sheetDate);
      onSlotConfirmed?.(sheetDate, slot);
    }
    setSheetVisible(false);
  };

  const handleSheetPreviousDay = async (newDate: Date) => {
    if (!timeSlotProvider) return [];
    const slots = await timeSlotProvider(newDate);
    setSheetSlots(slots);
    return slots;
  };

  const handleSheetNextDay = async (newDate: Date) => {
    if (!timeSlotProvider) return [];
    const slots = await timeSlotProvider(newDate);
    setSheetSlots(slots);
    return slots;
  };

  // Build grid
  const firstDay = new Date(year, month - 1, 1);
  const startOffset = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // 0 for Mon, 6 for Sun
  const daysInMonth = new Date(year, month, 0).getDate();
  const totalCells = startOffset + daysInMonth;
  const rowCount = Math.ceil(totalCells / 7);
  
  const renderCell = (row: number, col: number) => {
    const cellIndex = row * 7 + col;
    const dayOffset = cellIndex - startOffset + 1;
    
    if (dayOffset < 1 || dayOffset > daysInMonth) {
      // Out of month
      let dayText = '';
      if (dayOffset < 1) {
        const prevMonthDays = new Date(year, month - 1, 0).getDate();
        dayText = (prevMonthDays + dayOffset).toString();
      } else {
        dayText = (dayOffset - daysInMonth).toString();
      }
      return (
        <View style={styles.dateCellContainer} key={col}>
          <Text style={styles.outOfMonthText}>{dayText}</Text>
        </View>
      );
    }

    const cellDate = new Date(year, month - 1, dayOffset);
    const status = getStatusFor(cellDate);
    const isSelected = selectedDate ? isSameDay(selectedDate, cellDate) : false;
    const isToday = isSameDay(cellDate, todayDate);
    const isPast = cellDate.getTime() < new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate()).getTime();

    const canTap = !isPast && (
      status === SlotDateStatus.available ||
      (status === SlotDateStatus.publicHoliday && !!data.allowTapOnPublicHoliday) ||
      (status === SlotDateStatus.weeklyOff && !!data.allowTapOnWeeklyOff)
    );

    return (
      <TouchableOpacity 
        style={styles.dateCellContainer} 
        key={col}
        activeOpacity={canTap ? 0.7 : 1}
        onPress={() => handleDateTap(cellDate, canTap)}
      >
        <View style={styles.dateCellInner}>
          {renderDateLabel(cellDate.getDate().toString(), status, isSelected, isPast)}
          {isToday && !isSelected && <View style={styles.todayDot} />}
        </View>
      </TouchableOpacity>
    );
  };

  const renderDateLabel = (dayStr: string, status: SlotDateStatus, isSelected: boolean, isPast: boolean) => {
    if (isPast) {
      return (
        <View style={styles.dateLabelBase}>
          <Text style={styles.outOfMonthText}>{dayStr}</Text>
        </View>
      );
    }
    if (isSelected) {
      return (
        <View style={[styles.dateLabelBase, styles.dateLabelSelected]}>
          <Text style={styles.dateLabelSelectedText}>{dayStr}</Text>
        </View>
      );
    }
    
    switch (status) {
      case SlotDateStatus.publicHoliday:
        return (
          <View style={[styles.dateLabelBase, styles.dateLabelHoliday]}>
            <Text style={styles.dateLabelHolidayText}>{dayStr}</Text>
          </View>
        );
      case SlotDateStatus.noSlots:
        return (
          <View style={[styles.dateLabelBase, styles.dateLabelDisabled]}>
            <Text style={styles.dateLabelDisabledText}>{dayStr}</Text>
          </View>
        );
      case SlotDateStatus.weeklyOff:
        return (
          <View style={[styles.dateLabelBase, styles.dateLabelDisabled]}>
            <Text style={styles.dateLabelDisabledText}>{dayStr}</Text>
          </View>
        );
      default:
        return (
          <View style={styles.dateLabelBase}>
            <Text style={styles.dateLabelAvailableText}>{dayStr}</Text>
          </View>
        );
    }
  };

  return (
    <View style={[styles.container, style]}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity 
          onPress={goToPreviousMonth} 
          disabled={isCurrentMonth}
          style={[styles.navArrow, isCurrentMonth && styles.navArrowDisabled]}
        >
          <ChevronLeft color={isCurrentMonth ? theme.colors.onSurface + '1F' : theme.colors.onSurface + '99'} />
        </TouchableOpacity>
        <Text style={styles.monthTitle}>{`${monthNames[month - 1]} ${year}`}</Text>
        <TouchableOpacity onPress={goToNextMonth} style={styles.navArrow}>
          <ChevronRight color={theme.colors.onSurface + '99'} />
        </TouchableOpacity>
      </View>

      {/* Weekdays */}
      <View style={styles.weekdayRow}>
        {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day, idx) => {
          const isWeeklyOff = (data.weeklyOffWeekdays || [6, 7]).includes(idx + 1);
          return (
            <View style={styles.weekdayCell} key={day}>
              <Text style={[styles.weekdayText, isWeeklyOff && styles.weekdayTextOff]}>{day}</Text>
            </View>
          );
        })}
      </View>

      {/* Grid */}
      <View style={styles.gridContainer}>
        {Array.from({ length: rowCount }).map((_, row) => (
          <View style={styles.gridRow} key={row}>
            {Array.from({ length: 7 }).map((_, col) => renderCell(row, col))}
          </View>
        ))}
      </View>

      {/* Legend */}
      <View style={styles.legendRow}>
        <View style={styles.legendItem}>
          <View style={[styles.legendBox, { backgroundColor: theme.colors.onSurface + '0D', borderColor: theme.colors.onSurface + '1F' }]} />
          <Text style={styles.legendText}>No slots</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendBox, { backgroundColor: theme.colors.warning + '1A', borderColor: theme.colors.warning }]} />
          <Text style={styles.legendText}>Public holiday</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendBox, { backgroundColor: theme.colors.onSurface + '0D', borderColor: theme.colors.onSurface + '1F' }]} />
          <Text style={styles.legendText}>Weekly off</Text>
        </View>
      </View>

      {/* Sheet */}
      {sheetVisible && sheetDate && (
        <SlotTimePickerSheet
          date={sheetDate}
          slots={sheetSlots}
          today={todayDate}
          viewMode={data.viewMode || SlotPickerViewMode.expanded}
          onClose={() => setSheetVisible(false)}
          onConfirm={handleSheetConfirm}
          onPreviousDay={timeSlotProvider ? handleSheetPreviousDay : undefined}
          onNextDay={timeSlotProvider ? handleSheetNextDay : undefined}
        />
      )}
    </View>
  );
};

export const SlotGrid = Ux4gTimeslot;

// --- Sheet Component ---

interface SlotTimePickerSheetProps {
  date: Date;
  slots: SlotTimeEntry[];
  today: Date;
  viewMode: SlotPickerViewMode;
  onClose: () => void;
  onConfirm: (slot: SlotTimeEntry) => void;
  onPreviousDay?: (date: Date) => Promise<SlotTimeEntry[]>;
  onNextDay?: (date: Date) => Promise<SlotTimeEntry[]>;
}

const SlotTimePickerSheet: React.FC<SlotTimePickerSheetProps> = ({
  date,
  slots,
  today,
  viewMode,
  onClose,
  onConfirm,
  onPreviousDay,
  onNextDay,
}) => {
  const theme = useUx4gTheme();
  const styles = useUx4gStyleSheet(createStyles);
  
  const [currentDate, setCurrentDate] = useState(date);
  const [currentSlots, setCurrentSlots] = useState(slots);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>();

  useEffect(() => {
    setCurrentSlots(slots);
  }, [slots]);

  const weekDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const dateLabel = `${weekDayNames[currentDate.getDay()]} ${currentDate.getDate()} ${monthNames[currentDate.getMonth()]}`;
  const isToday = isSameDay(currentDate, today);
  const canGoPrevious = currentDate.getTime() > new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();

  const handlePreviousDay = async () => {
    if (!canGoPrevious || !onPreviousDay) return;
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    try {
      const newSlots = await onPreviousDay(newDate);
      setCurrentDate(newDate);
      setCurrentSlots(newSlots);
      setSelectedIndex(undefined);
    } catch {}
  };

  const handleNextDay = async () => {
    if (!onNextDay) return;
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    try {
      const newSlots = await onNextDay(newDate);
      setCurrentDate(newDate);
      setCurrentSlots(newSlots);
      setSelectedIndex(undefined);
    } catch {}
  };

  const renderExpandedTile = (slot: SlotTimeEntry, index: number) => {
    const isSelected = selectedIndex === index;
    const isNoSlots = slot.status === SlotTimeStatus.noSlots;
    
    if (isNoSlots) {
      return (
        <View key={index} style={styles.sheetTileDisabled}>
          <Text style={styles.sheetTileDisabledText}>No slots available</Text>
        </View>
      );
    }

    return (
      <TouchableOpacity 
        key={index}
        activeOpacity={0.7}
        onPress={() => setSelectedIndex(index)}
        style={[styles.sheetTile, isSelected && styles.sheetTileSelected]}
      >
        {isSelected ? (
          <View style={styles.sheetTileRow}>
            <CheckIcon color={theme.colors.primary} size={18} />
            <Text style={[styles.sheetTileSelectedText, { marginLeft: 6 }]}>Selected</Text>
          </View>
        ) : (
          <View style={styles.sheetTileCol}>
            <Text style={styles.sheetTileTime}>{slot.time}</Text>
            <Text style={[styles.sheetTileCount, slot.status === SlotTimeStatus.limited && { color: theme.colors.warning }]}>
              {slot.slotCount} slots
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const renderCompactTile = (slot: SlotTimeEntry, index: number, isRight: boolean) => {
    const isSelected = selectedIndex === index;
    const isNoSlots = slot.status === SlotTimeStatus.noSlots;

    return (
      <View key={index} style={[styles.compactTileWrapper, isRight && styles.compactTileBorderLeft]}>
        <TouchableOpacity
          activeOpacity={isNoSlots ? 1 : 0.7}
          onPress={() => !isNoSlots && setSelectedIndex(index)}
          style={[styles.compactTile, isSelected && styles.compactTileSelected]}
        >
          <Text style={[styles.compactTileTime, isNoSlots && styles.compactTileTimeDisabled, isSelected && styles.compactTileTimeSelected]}>
            {slot.time}
          </Text>
          <View style={[
            styles.compactBadge, 
            isNoSlots ? styles.compactBadgeDisabled : 
            isSelected ? styles.compactBadgeSelected : 
            slot.status === SlotTimeStatus.limited ? styles.compactBadgeLimited : styles.compactBadgeAvailable
          ]}>
            {isSelected ? (
              <CheckIcon color={theme.colors.onPrimary} size={13} />
            ) : (
              <Text style={[styles.compactBadgeText, (isNoSlots || isSelected) ? { color: theme.colors.onSurface + '61' } : { color: '#FFF' }, isSelected && { color: theme.colors.onPrimary }]}>
                {isNoSlots ? '0' : slot.slotCount}
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderExpandedView = () => (
    <ScrollView style={styles.sheetScroll}>
      {currentSlots.map((slot, i) => (
        <View key={i}>
          {renderExpandedTile(slot, i)}
          {i < currentSlots.length - 1 && <View style={styles.sheetDivider} />}
        </View>
      ))}
    </ScrollView>
  );

  const renderCompactView = () => {
    const rows: {
      left: { slot: SlotTimeEntry; index: number };
      right: { slot: SlotTimeEntry; index: number } | null;
    }[] = [];
    for (let i = 0; i < currentSlots.length; i += 2) {
      rows.push({
        left: { slot: currentSlots[i], index: i },
        right: i + 1 < currentSlots.length ? { slot: currentSlots[i + 1], index: i + 1 } : null,
      });
    }
    
    return (
      <ScrollView style={styles.sheetScroll}>
        {rows.map((row, i) => (
          <View key={i}>
            <View style={styles.compactRow}>
              {renderCompactTile(row.left.slot, row.left.index, false)}
              {row.right ? (
                renderCompactTile(row.right.slot, row.right.index, true)
              ) : (
                <View style={[styles.compactTileWrapper, styles.compactTileBorderLeft]} />
              )}
            </View>
            {i < rows.length - 1 && <View style={styles.sheetDivider} />}
          </View>
        ))}
      </ScrollView>
    );
  };

  const renderSheetLegend = () => (
    <View style={styles.sheetLegendContainer}>
      <View style={styles.sheetLegendRow}>
        <View style={styles.sheetLegendItem}>
          <View style={[styles.sheetLegendBox, { backgroundColor: theme.colors.surface, borderColor: theme.colors.onSurface + '61' }]} />
          <Text style={styles.sheetLegendText}>Available</Text>
        </View>
        <View style={styles.sheetLegendItem}>
          <View style={[styles.sheetLegendBox, { backgroundColor: theme.colors.primary + '14', borderColor: theme.colors.primary }]}>
            <CheckIcon color={theme.colors.primary} size={10} />
          </View>
          <Text style={styles.sheetLegendText}>Selected</Text>
        </View>
        <View style={styles.sheetLegendItem}>
          <View style={[styles.sheetLegendBox, { backgroundColor: theme.colors.onSurface + '0A', borderColor: theme.colors.onSurface + '1F' }]} />
          <Text style={styles.sheetLegendText}>No slots</Text>
        </View>
      </View>
      <View style={[styles.sheetLegendRow, { marginTop: 6 }]}>
        <View style={styles.sheetLegendItem}>
          <View style={[styles.sheetLegendBox, { backgroundColor: theme.colors.warning + '14', borderColor: theme.colors.warning }]} />
          <Text style={styles.sheetLegendText}>Limited slots</Text>
        </View>
        <View style={styles.sheetLegendItem}>
          <View style={[styles.sheetLegendBox, { backgroundColor: theme.colors.warning + '14', borderColor: theme.colors.warning }]} />
          <Text style={styles.sheetLegendText}>Public holiday</Text>
        </View>
        <View style={styles.sheetLegendItem}>
          <View style={[styles.sheetLegendBox, { backgroundColor: theme.colors.onSurface + '14', borderColor: theme.colors.onSurface + '1F' }]} />
          <Text style={styles.sheetLegendText}>Weekly off</Text>
        </View>
      </View>
    </View>
  );

  return (
    <Modal visible transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.sheetOverlay}>
        <View style={styles.sheetContent}>
          {/* Drag Handle */}
          <View style={styles.sheetHandleWrapper}>
            <View style={styles.sheetHandle} />
          </View>
          
          {/* Header */}
          <View style={styles.sheetHeader}>
            <View style={styles.sheetHeaderTop}>
              <TouchableOpacity
                onPress={handlePreviousDay}
                disabled={!canGoPrevious}
                style={[styles.sheetNavArrow, !canGoPrevious && styles.sheetNavArrowDisabled]}
              >
                <ChevronLeft color={!canGoPrevious ? theme.colors.onSurface + '1F' : theme.colors.onSurface + '99'} />
              </TouchableOpacity>
              <Text style={styles.sheetTitle}>{dateLabel}</Text>
              <TouchableOpacity
                onPress={handleNextDay}
                style={styles.sheetNavArrow}
              >
                <ChevronRight color={theme.colors.onSurface + '99'} />
              </TouchableOpacity>
            </View>
            {isToday && <Text style={styles.sheetTodayText}>Today</Text>}
          </View>
          
          <View style={styles.sheetDivider} />
          
          <View style={styles.sheetScrollContainer}>
            {viewMode === SlotPickerViewMode.compact ? renderCompactView() : renderExpandedView()}
          </View>

          <View style={styles.sheetDivider} />
          
          {renderSheetLegend()}

          <View style={styles.sheetDivider} />

          {/* Footer */}
          <SafeAreaView>
            <View style={styles.sheetFooter}>
              <TouchableOpacity style={styles.btnCancel} onPress={onClose}>
                <Text style={styles.btnCancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.btnConfirm, selectedIndex === undefined && styles.btnConfirmDisabled]} 
                onPress={() => selectedIndex !== undefined && onConfirm(currentSlots[selectedIndex])}
                disabled={selectedIndex === undefined}
              >
                <Text style={[styles.btnConfirmText, selectedIndex === undefined ? styles.btnConfirmTextDisabled : styles.btnConfirmTextEnabled]}>
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
      </View>
    </Modal>
  );
};

const createStyles = (theme: ReturnType<typeof useUx4gTheme>) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.surface,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.colors.onSurface + '1F', // 0.12 roughly
      padding: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.06,
      shadowRadius: 12,
      elevation: 4,
    },
    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    monthTitle: {
      fontSize: theme.typography.tM_strong.fontSize,
      fontWeight: theme.typography.tM_strong.fontWeight as any,
      color: theme.colors.primary,
    },
    navArrow: {
      width: 32,
      height: 32,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: theme.colors.onSurface + '1F',
      backgroundColor: theme.colors.surface,
      alignItems: 'center',
      justifyContent: 'center',
    },
    navArrowDisabled: {
      backgroundColor: theme.colors.onSurface + '0D', // 0.05
    },
    weekdayRow: {
      flexDirection: 'row',
      marginBottom: 4,
    },
    weekdayCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    weekdayText: {
      fontSize: theme.typography.lM_strong.fontSize,
      fontWeight: theme.typography.lM_strong.fontWeight as any,
      color: theme.colors.onSurface + '99', // 0.6
    },
    weekdayTextOff: {
      color: theme.colors.onSurface + '61', // 0.38
    },
    gridContainer: {
      flexDirection: 'column',
    },
    gridRow: {
      flexDirection: 'row',
    },
    dateCellContainer: {
      flex: 1,
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
    },
    dateCellInner: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    dateLabelBase: {
      width: 32,
      height: 32,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
    },
    outOfMonthText: {
      fontSize: theme.typography.bS_default.fontSize,
      color: theme.colors.onSurface + '61',
    },
    dateLabelSelected: {
      backgroundColor: theme.colors.primary,
    },
    dateLabelSelectedText: {
      fontSize: theme.typography.bS_strong.fontSize,
      fontWeight: theme.typography.bS_strong.fontWeight as any,
      color: theme.colors.onPrimary,
    },
    dateLabelHoliday: {
      backgroundColor: theme.colors.warning + '1A', // 0.1
    },
    dateLabelHolidayText: {
      fontSize: theme.typography.bS_strong.fontSize,
      fontWeight: theme.typography.bS_strong.fontWeight as any,
      color: theme.colors.warning,
    },
    dateLabelDisabled: {
      backgroundColor: theme.colors.onSurface + '0D',
    },
    dateLabelDisabledText: {
      fontSize: theme.typography.bS_strong.fontSize,
      fontWeight: theme.typography.bS_strong.fontWeight as any,
      color: theme.colors.onSurface + '61',
    },
    dateLabelAvailableText: {
      fontSize: theme.typography.bS_default.fontSize,
      color: theme.colors.onSurface,
    },
    todayDot: {
      width: 4,
      height: 4,
      borderRadius: 2,
      backgroundColor: theme.colors.primary,
      marginTop: 2,
    },
    legendRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 12,
    },
    legendItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 8,
    },
    legendBox: {
      width: 14,
      height: 14,
      borderRadius: 3,
      borderWidth: 1,
    },
    legendText: {
      marginLeft: 4,
      fontSize: theme.typography.lS_default.fontSize,
      color: theme.colors.onSurface + '99',
    },

    // Sheet Styles
    sheetOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'flex-end',
    },
    sheetContent: {
      backgroundColor: theme.colors.surface,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      maxHeight: Dimensions.get('window').height * 0.8,
    },
    sheetHandleWrapper: {
      alignItems: 'center',
      marginTop: 12,
      marginBottom: 12,
    },
    sheetHandle: {
      width: 40,
      height: 4,
      borderRadius: 2,
      backgroundColor: theme.colors.onSurface + '1F',
    },
    sheetHeader: {
      paddingHorizontal: 16,
      paddingBottom: 12,
      alignItems: 'center',
    },
    sheetHeaderTop: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    sheetNavArrow: {
      width: 32,
      height: 32,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: theme.colors.onSurface + '1F',
      backgroundColor: theme.colors.surface,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sheetNavArrowDisabled: {
      backgroundColor: theme.colors.onSurface + '0A',
    },
    sheetTitle: {
      fontSize: theme.typography.tM_strong.fontSize,
      fontWeight: theme.typography.tM_strong.fontWeight as any,
      color: theme.colors.onSurface,
    },
    sheetTodayText: {
      fontSize: theme.typography.lS_strong.fontSize,
      fontWeight: theme.typography.lS_strong.fontWeight as any,
      color: theme.colors.primary,
      marginTop: 2,
    },
    sheetDivider: {
      height: 1,
      backgroundColor: theme.colors.onSurface + '14', // 0.08
    },
    loaderWrapper: {
      padding: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sheetScrollContainer: {
      flexShrink: 1,
    },
    sheetScroll: {
      paddingVertical: 8,
    },
    sheetTileDisabled: {
      height: 56,
      backgroundColor: theme.colors.onSurface + '0A', // 0.04
      alignItems: 'center',
      justifyContent: 'center',
    },
    sheetTileDisabledText: {
      fontSize: theme.typography.bS_default.fontSize,
      color: theme.colors.onSurface + '61',
    },
    sheetTile: {
      height: 56,
      marginHorizontal: 16,
      marginVertical: 4,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.colors.onSurface + '1F',
      backgroundColor: theme.colors.surface,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sheetTileSelected: {
      backgroundColor: theme.colors.primary + '14', // 0.08
      borderColor: theme.colors.primary,
      borderWidth: 1.5,
    },
    sheetTileRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    sheetTileSelectedText: {
      fontSize: theme.typography.bS_strong.fontSize,
      fontWeight: theme.typography.bS_strong.fontWeight as any,
      color: theme.colors.primary,
    },
    sheetTileCol: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    sheetTileTime: {
      fontSize: theme.typography.bS_strong.fontSize,
      fontWeight: theme.typography.bS_strong.fontWeight as any,
      color: theme.colors.onSurface,
    },
    sheetTileCount: {
      fontSize: theme.typography.lS_default.fontSize,
      color: theme.colors.onSurface + '61',
      marginTop: 2,
    },
    
    // Compact layout specific
    compactRow: {
      flexDirection: 'row',
      minHeight: 56,
    },
    compactTileWrapper: {
      flex: 1,
    },
    compactTileBorderLeft: {
      borderLeftWidth: 1,
      borderLeftColor: theme.colors.onSurface + '14',
    },
    compactTile: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 14,
      paddingHorizontal: 12,
    },
    compactTileSelected: {
      backgroundColor: theme.colors.primary + '14',
    },
    compactTileTime: {
      fontSize: theme.typography.bS_default.fontSize,
      color: theme.colors.onSurface,
      marginRight: 6,
    },
    compactTileTimeDisabled: {
      color: theme.colors.onSurface + '61',
    },
    compactTileTimeSelected: {
      fontWeight: '600' as any,
      color: theme.colors.primary,
    },
    compactBadge: {
      width: 22,
      height: 22,
      borderRadius: 11,
      alignItems: 'center',
      justifyContent: 'center',
    },
    compactBadgeDisabled: {
      backgroundColor: theme.colors.onSurface + '1F',
    },
    compactBadgeSelected: {
      backgroundColor: theme.colors.primary,
    },
    compactBadgeLimited: {
      backgroundColor: theme.colors.warning,
    },
    compactBadgeAvailable: {
      backgroundColor: theme.colors.success,
    },
    compactBadgeText: {
      fontSize: theme.typography.lS_strong.fontSize,
      fontWeight: theme.typography.lS_strong.fontWeight as any,
    },
    
    // Sheet Legend
    sheetLegendContainer: {
      paddingHorizontal: 16,
      paddingVertical: 10,
    },
    sheetLegendRow: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    sheetLegendItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    sheetLegendBox: {
      width: 14,
      height: 14,
      borderRadius: 3,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sheetLegendText: {
      marginLeft: 4,
      fontSize: theme.typography.lS_default.fontSize,
      color: theme.colors.onSurface + '99',
    },

    sheetFooter: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    btnCancel: {
      flex: 1,
      marginRight: 12,
      borderWidth: 1,
      borderColor: theme.colors.onSurface + '1F',
      borderRadius: 8,
      paddingVertical: 14,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnCancelText: {
      fontSize: theme.typography.bS_strong.fontSize,
      fontWeight: theme.typography.bS_strong.fontWeight as any,
      color: theme.colors.onSurface,
    },
    btnConfirm: {
      flex: 1,
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      paddingVertical: 14,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnConfirmDisabled: {
      backgroundColor: theme.colors.onSurface + '1F',
    },
    btnConfirmText: {
      fontSize: theme.typography.bS_strong.fontSize,
      fontWeight: theme.typography.bS_strong.fontWeight as any,
    },
    btnConfirmTextDisabled: {
      color: theme.colors.onSurface + '61',
    },
    btnConfirmTextEnabled: {
      color: theme.colors.onPrimary,
    },
  });
};
