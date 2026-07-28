import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableWithoutFeedback,
} from 'react-native';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { Ux4gIcons } from '../../foundation/icons';
import { Ux4gButton } from '../button';
import { Ux4gInputFieldStatus } from '../input-field';

export type Ux4gDatePickerMode = 'single' | 'range';

export interface DateRange {
  start: Date;
  end: Date;
}

export interface Ux4gDatePickerProps {
  /** Mode for date selection: single date or date range. Defaults to `'single'`. */
  mode?: Ux4gDatePickerMode;
  /** Initial selected date (single mode). */
  initialDate?: Date;
  /** Initial selected range (range mode). */
  initialDateRange?: DateRange;
  /** Minimum selectable date. */
  minDate?: Date;
  /** Maximum selectable date. */
  maxDate?: Date;
  /** Callback fired when a date is selected in single mode. */
  onDateSelected?: (date: Date) => void;
  /** Callback fired when a date range is selected in range mode. */
  onDateRangeSelected?: (range: DateRange) => void;
  /** Placeholder hint when no date is selected. Defaults to `'Select date'`. */
  placeholder?: string;
  /** Whether interaction is enabled. Defaults to `true`. */
  enabled?: boolean;
  /** Label text rendered above the field box. */
  label?: string;
  /** Description / caption text rendered below the field box. */
  description?: string;
  /** Whether field is required (renders red `*` next to label). Defaults to `false`. */
  isRequired?: boolean;
  /** Alias for `isRequired`. Defaults to `false`. */
  required?: boolean;
  /** Status variant controlling border & caption color. Defaults to `'defaultStatus'`. */
  status?: Ux4gInputFieldStatus;
  /** Custom container style override. */
  style?: StyleProp<ViewStyle>;
}

const formatDate = (date: Date): string => {
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const y = String(date.getFullYear()).padStart(4, '0');
  return `${d}/${m}/${y}`;
};

export const Ux4gDatePicker: React.FC<Ux4gDatePickerProps> = ({
  mode = 'single',
  initialDate,
  initialDateRange,
  minDate,
  maxDate,
  onDateSelected,
  onDateRangeSelected,
  placeholder = 'Select date',
  enabled = true,
  label,
  description,
  isRequired = false,
  required = false,
  status = 'defaultStatus',
  style,
}) => {
  const { colors, typography } = useUx4gTheme();
  const showRequired = isRequired || required;

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(initialDate);
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>(initialDateRange);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    setSelectedDate(initialDate);
  }, [initialDate]);

  useEffect(() => {
    setSelectedRange(initialDateRange);
  }, [initialDateRange]);

  const isSelected =
    (mode === 'single' && selectedDate !== undefined) ||
    (mode === 'range' && selectedRange !== undefined);

  // Colors logic
  const disabledBgColor = `${colors.onSurface}14`; // Muted filled background for disabled state (#EAEAEA / dark surface overlay)
  const disabledTextColor = `${colors.onSurface}60`; // 0.38 alpha muted gray

  const fieldBgColor = enabled ? colors.surface : disabledBgColor;

  let borderColor = 'transparent';
  if (enabled) {
    switch (status) {
      case 'error':
        borderColor = colors.error;
        break;
      case 'warning':
        borderColor = colors.warning;
        break;
      case 'success':
        borderColor = colors.success;
        break;
      case 'defaultStatus':
      default:
        borderColor = isSelected ? colors.primary : `${colors.onSurface}33`; // 0.20 alpha
        break;
    }
  }

  const textColor = enabled
    ? isSelected
      ? colors.onSurface
      : disabledTextColor
    : disabledTextColor;

  const iconColor = enabled
    ? isSelected
      ? colors.primary
      : disabledTextColor
    : disabledTextColor;

  const handleOpenPicker = () => {
    if (enabled) {
      setModalVisible(true);
    }
  };

  const handleDialogConfirmSingle = (date: Date) => {
    setSelectedDate(date);
    setModalVisible(false);
    onDateSelected?.(date);
  };

  const handleDialogConfirmRange = (range: DateRange) => {
    setSelectedRange(range);
    setModalVisible(false);
    onDateRangeSelected?.(range);
  };

  const renderBox = (text: string) => {
    return (
      <View
        style={[
          styles.fieldBox,
          {
            backgroundColor: fieldBgColor,
            borderColor,
          },
        ]}
      >
        <Text
          numberOfLines={1}
          style={[
            styles.fieldText,
            {
              fontSize: typography.bM_default.fontSize,
              fontWeight: typography.bM_default.fontWeight,
              color: textColor,
            },
          ]}
        >
          {text}
        </Text>
        {Ux4gIcons.calendar({ size: 20, color: iconColor })}
      </View>
    );
  };

  const renderTriggerField = () => {
    if (mode === 'single') {
      const text = selectedDate ? formatDate(selectedDate) : placeholder;
      return (
        <TouchableOpacity
          activeOpacity={enabled ? 0.7 : 1}
          onPress={handleOpenPicker}
          disabled={!enabled}
        >
          {renderBox(text)}
        </TouchableOpacity>
      );
    }

    // Range mode
    const startText = selectedRange ? formatDate(selectedRange.start) : placeholder;
    const endText = selectedRange ? formatDate(selectedRange.end) : placeholder;

    return (
      <TouchableOpacity
        activeOpacity={enabled ? 0.7 : 1}
        onPress={handleOpenPicker}
        disabled={!enabled}
        style={styles.rangeRow}
      >
        <View style={styles.flex1}>{renderBox(startText)}</View>
        <Text
          style={[
            styles.dashText,
            {
              fontSize: typography.bM_default.fontSize,
              fontWeight: typography.bM_default.fontWeight,
              color: textColor,
            },
          ]}
        >
          –
        </Text>
        <View style={styles.flex1}>{renderBox(endText)}</View>
      </TouchableOpacity>
    );
  };

  // Label & Caption colors
  const labelColor = enabled ? colors.onBackground : `${colors.onSurface}66`;
  let descriptionColor = `${colors.onSurface}99`; // 0.6 opacity
  if (!enabled) {
    descriptionColor = `${colors.onSurface}66`; // 0.4 opacity
  } else {
    switch (status) {
      case 'error':
        descriptionColor = colors.error;
        break;
      case 'warning':
        descriptionColor = colors.warning;
        break;
      case 'success':
        descriptionColor = colors.success;
        break;
    }
  }

  const renderStatusIcon = () => {
    switch (status) {
      case 'error':
        return Ux4gIcons.error({ size: 14, color: descriptionColor });
      case 'warning':
        return Ux4gIcons.warning({ size: 14, color: descriptionColor });
      case 'success':
        return Ux4gIcons.success({ size: 14, color: descriptionColor });
      case 'defaultStatus':
      default:
        return Ux4gIcons.info({ size: 14, color: descriptionColor });
    }
  };

  return (
    <View style={[styles.container, style]}>
      {/* Label */}
      {label && (
        <View style={styles.labelRow}>
          <Text
            style={[
              styles.labelText,
              {
                fontSize: typography.bS_strong.fontSize,
                fontWeight: typography.bS_strong.fontWeight,
                color: labelColor,
              },
            ]}
          >
            {label}
          </Text>
          {showRequired && (
            <Text
              style={[
                styles.requiredAsterisk,
                {
                  fontSize: typography.bS_strong.fontSize,
                  fontWeight: typography.bS_strong.fontWeight,
                  color: colors.error,
                },
              ]}
            >
              *
            </Text>
          )}
        </View>
      )}

      {/* Field Trigger */}
      {renderTriggerField()}

      {/* Description / Caption */}
      {description && (
        <View style={styles.captionRow}>
          {renderStatusIcon()}
          <Text
            style={[
              styles.captionText,
              {
                fontSize: typography.bXS_default.fontSize,
                fontWeight: typography.bXS_default.fontWeight,
                color: descriptionColor,
              },
            ]}
          >
            {description}
          </Text>
        </View>
      )}

      {/* Date Picker Dialog Modal */}
      {modalVisible && (
        <Ux4gDatePickerDialogModal
          visible={modalVisible}
          mode={mode}
          initialDate={selectedDate}
          initialDateRange={selectedRange}
          minDate={minDate}
          maxDate={maxDate}
          onClose={() => setModalVisible(false)}
          onConfirmSingle={handleDialogConfirmSingle}
          onConfirmRange={handleDialogConfirmRange}
        />
      )}
    </View>
  );
};

// --- Dialog Modal Component ---

interface Ux4gDatePickerDialogModalProps {
  visible: boolean;
  mode: Ux4gDatePickerMode;
  initialDate?: Date;
  initialDateRange?: DateRange;
  minDate?: Date;
  maxDate?: Date;
  onClose: () => void;
  onConfirmSingle: (date: Date) => void;
  onConfirmRange: (range: DateRange) => void;
}

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

const MONTH_SHORT_NAMES = [
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

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const Ux4gDatePickerDialogModal: React.FC<Ux4gDatePickerDialogModalProps> = ({
  visible,
  mode,
  initialDate,
  initialDateRange,
  minDate,
  maxDate,
  onClose,
  onConfirmSingle,
  onConfirmRange,
}) => {
  const { colors, typography } = useUx4gTheme();

  const now = new Date();
  const initDisplayedMonth =
    mode === 'single'
      ? initialDate ?? now
      : initialDateRange?.start ?? now;

  const [currentDisplayedMonth, setCurrentDisplayedMonth] = useState<Date>(
    new Date(initDisplayedMonth.getFullYear(), initDisplayedMonth.getMonth(), 1)
  );

  const [tempSelectedDate, setTempSelectedDate] = useState<Date | undefined>(initialDate);
  const [tempRangeStart, setTempRangeStart] = useState<Date | undefined>(initialDateRange?.start);
  const [tempRangeEnd, setTempRangeEnd] = useState<Date | undefined>(initialDateRange?.end);

  const [showMonthYearPicker, setShowMonthYearPicker] = useState<boolean>(false);
  const [yearGridStart, setYearGridStart] = useState<number>(
    initDisplayedMonth.getFullYear() - (initDisplayedMonth.getFullYear() % 8)
  );

  const isSelectable = (date: Date): boolean => {
    if (minDate) {
      const minClean = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
      if (date < minClean) return false;
    }
    if (maxDate) {
      const maxClean = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate(), 23, 59, 59);
      if (date > maxClean) return false;
    }
    return true;
  };

  const handleDaySelect = (date: Date) => {
    if (!isSelectable(date)) return;

    if (mode === 'single') {
      setTempSelectedDate(date);
    } else {
      if (!tempRangeStart || (tempRangeStart && tempRangeEnd)) {
        setTempRangeStart(date);
        setTempRangeEnd(undefined);
      } else {
        if (date < tempRangeStart) {
          setTempRangeEnd(tempRangeStart);
          setTempRangeStart(date);
        } else {
          setTempRangeEnd(date);
        }
      }
    }
  };

  const changeMonth = (offset: number) => {
    setCurrentDisplayedMonth(
      new Date(currentDisplayedMonth.getFullYear(), currentDisplayedMonth.getMonth() + offset, 1)
    );
  };

  const changeYearGrid = (offset: number) => {
    setYearGridStart((prev) => prev + 8 * offset);
  };

  const handleConfirm = () => {
    if (mode === 'single') {
      if (tempSelectedDate) {
        onConfirmSingle(tempSelectedDate);
      }
    } else {
      if (tempRangeStart && tempRangeEnd) {
        onConfirmRange({ start: tempRangeStart, end: tempRangeEnd });
      }
    }
  };

  const renderHeader = () => {
    const titleText = showMonthYearPicker
      ? `${yearGridStart}-${yearGridStart + 7}`
      : `${MONTH_NAMES[currentDisplayedMonth.getMonth()]} ${currentDisplayedMonth.getFullYear()}`;

    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.navIconButton}
          onPress={() => {
            if (showMonthYearPicker) {
              changeYearGrid(-1);
            } else {
              changeMonth(-1);
            }
          }}
        >
          {Ux4gIcons.arrowBack({ size: 20, color: colors.primary })}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.headerTitleButton}
          onPress={() => setShowMonthYearPicker(!showMonthYearPicker)}
        >
          <Text
            style={[
              styles.headerTitleText,
              {
                fontSize: typography.bM_strong.fontSize,
                fontWeight: typography.bM_strong.fontWeight,
                color: colors.primary,
              },
            ]}
          >
            {titleText}
          </Text>
          <View style={styles.chevronMargin}>
            {showMonthYearPicker
              ? Ux4gIcons.chevronUp({ size: 20, color: colors.primary })
              : Ux4gIcons.chevronDown({ size: 20, color: colors.primary })}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navIconButton}
          onPress={() => {
            if (showMonthYearPicker) {
              changeYearGrid(1);
            } else {
              changeMonth(1);
            }
          }}
        >
          {Ux4gIcons.arrowForward({ size: 20, color: colors.primary })}
        </TouchableOpacity>
      </View>
    );
  };

  const renderMonthYearPicker = () => {
    const years = Array.from({ length: 8 }, (_, i) => yearGridStart + i);

    return (
      <View style={styles.monthYearPickerContainer}>
        {/* Year Grid */}
        <View style={styles.grid4Col}>
          {years.map((y) => {
            const isSelectedYear = y === currentDisplayedMonth.getFullYear();
            const yearSelectable =
              (!maxDate || y <= maxDate.getFullYear()) &&
              (!minDate || y >= minDate.getFullYear());

            return (
              <TouchableOpacity
                key={y}
                disabled={!yearSelectable}
                onPress={() => {
                  setCurrentDisplayedMonth(new Date(y, currentDisplayedMonth.getMonth(), 1));
                }}
                style={[
                  styles.gridItem,
                  {
                    backgroundColor: isSelectedYear ? `${colors.primary}33` : 'transparent',
                  },
                ]}
              >
                <Text
                  style={{
                    fontSize: typography.bM_default.fontSize,
                    fontWeight: typography.bM_default.fontWeight,
                    color: isSelectedYear
                      ? colors.primary
                      : yearSelectable
                      ? colors.onSurface
                      : `${colors.onSurface}60`,
                  }}
                >
                  {y}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={[styles.divider, { backgroundColor: `${colors.onSurface}1F` }]} />

        {/* Month Grid */}
        <View style={styles.grid4Col}>
          {MONTH_SHORT_NAMES.map((mName, idx) => {
            const mIndex = idx;
            const isSelectedMonth = mIndex === currentDisplayedMonth.getMonth();
            const cYear = currentDisplayedMonth.getFullYear();
            let monthSelectable = true;
            if (maxDate && (cYear > maxDate.getFullYear() || (cYear === maxDate.getFullYear() && mIndex > maxDate.getMonth()))) {
              monthSelectable = false;
            }
            if (minDate && (cYear < minDate.getFullYear() || (cYear === minDate.getFullYear() && mIndex < minDate.getMonth()))) {
              monthSelectable = false;
            }

            return (
              <TouchableOpacity
                key={mName}
                disabled={!monthSelectable}
                onPress={() => {
                  setCurrentDisplayedMonth(new Date(cYear, mIndex, 1));
                }}
                style={[
                  styles.gridItem,
                  {
                    backgroundColor: isSelectedMonth ? `${colors.primary}33` : 'transparent',
                  },
                ]}
              >
                <Text
                  style={{
                    fontSize: typography.bM_default.fontSize,
                    fontWeight: typography.bM_default.fontWeight,
                    color: isSelectedMonth
                      ? colors.primary
                      : monthSelectable
                      ? colors.onSurface
                      : `${colors.onSurface}60`,
                  }}
                >
                  {mName}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderCalendarView = () => {
    const year = currentDisplayedMonth.getFullYear();
    const month = currentDisplayedMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    // JS getDay(): 0=Sun, 1=Mon, ..., 6=Sat
    // We want Monday start: Monday=0, Tuesday=1, ..., Sunday=6
    const rawFirstDay = firstDay.getDay();
    const leadingDays = rawFirstDay === 0 ? 6 : rawFirstDay - 1;

    const daysInMonth = lastDay.getDate();
    const totalCells = Math.ceil((leadingDays + daysInMonth) / 7) * 7;

    const todayDate = new Date();

    const isSameDay = (d1?: Date, d2?: Date) => {
      if (!d1 || !d2) return false;
      return (
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate()
      );
    };

    const cells = Array.from({ length: totalCells }, (_, i) => {
      if (i < leadingDays || i >= leadingDays + daysInMonth) {
        return null;
      }
      const dayNum = i - leadingDays + 1;
      return new Date(year, month, dayNum);
    });

    return (
      <View style={styles.calendarContainer}>
        {/* Weekdays Header */}
        <View style={styles.weekdaysRow}>
          {WEEKDAYS.map((w) => (
            <View key={w} style={styles.weekdayCell}>
              <Text
                style={[
                  styles.weekdayText,
                  {
                    fontSize: typography.bS_strong.fontSize,
                    fontWeight: typography.bS_strong.fontWeight,
                    color: colors.onSurface,
                  },
                ]}
              >
                {w}
              </Text>
            </View>
          ))}
        </View>

        {/* Days Grid */}
        <View style={styles.daysGrid}>
          {cells.map((cellDate, idx) => {
            if (!cellDate) {
              return <View key={`empty-${idx}`} style={styles.dayCellContainer} />;
            }

            const dayNum = cellDate.getDate();
            const isToday = isSameDay(cellDate, todayDate);
            const cellSelectable = isSelectable(cellDate);

            let isSelectedSingle = false;
            let isRangeStart = false;
            let isRangeEnd = false;
            let isInRange = false;

            if (mode === 'single') {
              isSelectedSingle = isSameDay(cellDate, tempSelectedDate);
            } else {
              isRangeStart = isSameDay(cellDate, tempRangeStart);
              isRangeEnd = isSameDay(cellDate, tempRangeEnd);
              if (
                tempRangeStart &&
                tempRangeEnd &&
                cellDate > tempRangeStart &&
                cellDate < tempRangeEnd
              ) {
                isInRange = true;
              }
            }

            const isSolidPurple = isSelectedSingle || isRangeStart || isRangeEnd;
            const isLightPurple = isInRange;

            let bgColor = 'transparent';
            if (isSolidPurple) {
              bgColor = colors.primary;
            } else if (isLightPurple) {
              bgColor = `${colors.primary}1A`; // 0.1 opacity
            }

            let borderRadiusStyle: ViewStyle = {};
            if (isSolidPurple) {
              borderRadiusStyle = { borderRadius: 4 };
            } else if (isRangeStart) {
              borderRadiusStyle = { borderTopLeftRadius: 4, borderBottomLeftRadius: 4 };
            } else if (isRangeEnd) {
              borderRadiusStyle = { borderTopRightRadius: 4, borderBottomRightRadius: 4 };
            }

            let dayTextColor = colors.onSurface;
            if (isSolidPurple) {
              dayTextColor = colors.onPrimary;
            } else if (!cellSelectable) {
              dayTextColor = `${colors.onSurface}60`;
            }

            return (
              <TouchableOpacity
                key={cellDate.toISOString()}
                disabled={!cellSelectable}
                onPress={() => handleDaySelect(cellDate)}
                style={[styles.dayCellContainer, { backgroundColor: bgColor }, borderRadiusStyle]}
              >
                <Text
                  style={{
                    fontSize: typography.bM_default.fontSize,
                    fontWeight: typography.bM_default.fontWeight,
                    color: dayTextColor,
                  }}
                >
                  {dayNum}
                </Text>
                {isToday && !isSolidPurple && (
                  <View style={[styles.todayDot, { backgroundColor: colors.primary }]} />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View
              style={[
                styles.dialogBox,
                {
                  backgroundColor: colors.surface,
                },
              ]}
            >
              {/* Header */}
              {renderHeader()}

              <View style={[styles.divider, { backgroundColor: `${colors.onSurface}1F` }]} />

              {/* Body View */}
              <View style={styles.bodyContainer}>
                {showMonthYearPicker ? renderMonthYearPicker() : renderCalendarView()}
              </View>

              <View style={[styles.divider, { backgroundColor: `${colors.onSurface}1F` }]} />

              {/* Footer */}
              <View style={styles.footerContainer}>
                <View style={styles.flex1}>
                  <Ux4gButton
                    text="Cancel"
                    variant="outline"
                    onPress={onClose}
                  />
                </View>
                <View style={styles.footerSpacing} />
                <View style={styles.flex1}>
                  <Ux4gButton
                    text={showMonthYearPicker ? 'Select date' : 'Confirm'}
                    variant="primary"
                    onPress={
                      showMonthYearPicker
                        ? () => setShowMonthYearPicker(false)
                        : handleConfirm
                    }
                  />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  labelText: {
    includeFontPadding: false,
  },
  requiredAsterisk: {
    marginLeft: 4,
    includeFontPadding: false,
  },
  fieldBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    minHeight: 44,
  },
  fieldText: {
    flex: 1,
    marginRight: 8,
    includeFontPadding: false,
  },
  rangeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dashText: {
    marginHorizontal: 8,
    includeFontPadding: false,
  },
  flex1: {
    flex: 1,
  },
  captionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  captionText: {
    marginLeft: 6,
    flexShrink: 1,
    includeFontPadding: false,
  },
  // Modal / Dialog Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  dialogBox: {
    width: 320,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    overflow: 'hidden',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  navIconButton: {
    padding: 4,
  },
  headerTitleButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitleText: {
    includeFontPadding: false,
  },
  chevronMargin: {
    marginLeft: 4,
  },
  divider: {
    height: 1,
    width: '100%',
  },
  bodyContainer: {
    padding: 16,
    height: 280,
    justifyContent: 'center',
  },
  monthYearPickerContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  grid4Col: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '23%',
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginVertical: 4,
  },
  calendarContainer: {
    flex: 1,
  },
  weekdaysRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  weekdayCell: {
    flex: 1,
    alignItems: 'center',
  },
  weekdayText: {
    includeFontPadding: false,
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCellContainer: {
    width: `${100 / 7}%`,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
  },
  todayDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginTop: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  footerSpacing: {
    width: 16,
  },
});
