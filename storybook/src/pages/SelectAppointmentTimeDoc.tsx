import React, { useState, useMemo } from 'react';
import { UX4GColors } from '../../../src/foundation/colors';
import { CodeBlock } from '../components/CodeBlock';

interface SelectAppointmentTimeDocProps {
  isDark: boolean;
}

type MainTab = 'preview' | 'code';
type ViewMode = 'expanded' | 'compact';

interface TimeSlot {
  time: string;
  slotCount: number;
  status: 'available' | 'limited' | 'noSlots';
}

const DEFAULT_SLOTS: TimeSlot[] = [
  { time: '9:00 AM', slotCount: 4, status: 'available' },
  { time: '9:30 AM', slotCount: 6, status: 'available' },
  { time: '10:00 AM', slotCount: 3, status: 'available' },
  { time: '10:30 AM', slotCount: 0, status: 'noSlots' },
  { time: '11:00 AM', slotCount: 8, status: 'available' },
  { time: '11:30 AM', slotCount: 5, status: 'available' },
  { time: '12:00 PM', slotCount: 10, status: 'available' },
  { time: '2:00 PM', slotCount: 5, status: 'available' },
  { time: '2:30 PM', slotCount: 2, status: 'limited' },
  { time: '3:00 PM', slotCount: 2, status: 'limited' },
  { time: '3:30 PM', slotCount: 1, status: 'limited' },
  { time: '4:00 PM', slotCount: 7, status: 'available' },
];

const TOMORROW_SLOTS: TimeSlot[] = [
  { time: '9:00 AM', slotCount: 2, status: 'available' },
  { time: '10:00 AM', slotCount: 1, status: 'limited' },
  { time: '11:00 AM', slotCount: 0, status: 'noSlots' },
  { time: '2:00 PM', slotCount: 3, status: 'available' },
];

const DAY_AFTER_SLOTS: TimeSlot[] = [
  { time: '9:30 AM', slotCount: 5, status: 'available' },
  { time: '10:30 AM', slotCount: 2, status: 'available' },
  { time: '1:00 PM', slotCount: 4, status: 'available' },
  { time: '3:00 PM', slotCount: 1, status: 'limited' },
];

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WEEKDAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const SelectAppointmentTimeDoc: React.FC<SelectAppointmentTimeDocProps> = ({ isDark }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [viewMode, setViewMode] = useState<ViewMode>('expanded');

  // Calendar State (September 2026)
  const [currentYear, setCurrentYear] = useState<number>(2026);
  const [currentMonth, setCurrentMonth] = useState<number>(8); // 0-indexed, 8 = September
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2026, 8, 7)); // Mon Sep 7, 2026 (Today)
  const [confirmedSlot, setConfirmedSlot] = useState<{ date: string; time: string } | null>({
    date: 'Mon, 7 Sep 2026',
    time: '9:00 AM',
  });

  // Bottom Sheet State
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const [sheetCurrentDate, setSheetCurrentDate] = useState<Date>(new Date(2026, 8, 7));
  const [selectedSlotIndex, setSelectedSlotIndex] = useState<number | null>(0);

  const colors = useMemo(() => {
    return {
      screenBg: isDark ? UX4GColors.neutral950 : '#FAFAFA',
      headerBg: UX4GColors.primary600,
      titleColor: isDark ? UX4GColors.neutral50 : '#111827',
      subtleText: isDark ? UX4GColors.neutral300 : '#4B5563',
      border: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)',
      dropdownBorder: isDark ? UX4GColors.neutral800 : '#E5E7EB',
      primaryColor: isDark ? UX4GColors.primary300 : UX4GColors.primary600,
      onPrimary: isDark ? UX4GColors.primary950 : '#FFFFFF',
      surface: isDark ? UX4GColors.neutral900 : '#FFFFFF',
      onSurface: isDark ? '#FFFFFF' : '#111827',
      onSurfaceMuted: isDark ? 'rgba(255,255,255,0.38)' : 'rgba(0,0,0,0.38)',
      onSurfaceMedium: isDark ? 'rgba(255,255,255,0.60)' : 'rgba(0,0,0,0.60)',
      onSurfaceLight: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
      onSurfaceBorder: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)',
      divider: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
      primaryLightBg: isDark ? 'rgba(129, 140, 248, 0.15)' : 'rgba(67, 44, 187, 0.08)',
      warning: '#F59E0B',
      warningBg: isDark ? 'rgba(245, 158, 11, 0.15)' : 'rgba(245, 158, 11, 0.10)',
      success: '#10B981',
      phoneBorder: isDark ? UX4GColors.neutral800 : '#E5E7EB',
    };
  }, [isDark]);

  // Calendar calculations
  const daysInMonth = useMemo(() => {
    return new Date(currentYear, currentMonth + 1, 0).getDate();
  }, [currentYear, currentMonth]);

  const daysInPrevMonth = useMemo(() => {
    return new Date(currentYear, currentMonth, 0).getDate();
  }, [currentYear, currentMonth]);

  const startOffset = useMemo(() => {
    // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const day = new Date(currentYear, currentMonth, 1).getDay();
    return day === 0 ? 6 : day - 1; // Map to Mon=0, Tue=1, ..., Sun=6
  }, [currentYear, currentMonth]);

  const totalCells = startOffset + daysInMonth;
  const rowCount = Math.ceil(totalCells / 7);

  const prevMonth = () => {
    // Prevent going before September 2026 (current month)
    if (currentYear === 2026 && currentMonth <= 8) return;
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const isCurrentMonth = currentYear === 2026 && currentMonth === 8;

  // Slots for the sheet based on sheet date
  const sheetSlots = useMemo(() => {
    const day = sheetCurrentDate.getDate();
    if (day === 8) return TOMORROW_SLOTS;
    if (day === 9) return DAY_AFTER_SLOTS;
    return DEFAULT_SLOTS;
  }, [sheetCurrentDate]);

  const handleDateClick = (day: number) => {
    const dateObj = new Date(currentYear, currentMonth, day);
    const dayOfWeek = dateObj.getDay(); // 0 = Sun, 6 = Sat
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    if (isWeekend) return; // weekly off

    // Public Holiday (Sep 16)
    if (day === 16) return;

    // No slots (Sep 22)
    if (day === 22) return;

    setSelectedDate(dateObj);
    setSheetCurrentDate(dateObj);
    setSelectedSlotIndex(0);
    setIsSheetOpen(true);
  };

  const handleSheetPrevDay = () => {
    // Cannot go before today (Sep 7, 2026)
    const todayTimestamp = new Date(2026, 8, 7).getTime();
    if (sheetCurrentDate.getTime() <= todayTimestamp) return;

    const newDate = new Date(sheetCurrentDate);
    newDate.setDate(newDate.getDate() - 1);
    setSheetCurrentDate(newDate);
    setSelectedSlotIndex(null);
  };

  const handleSheetNextDay = () => {
    const newDate = new Date(sheetCurrentDate);
    newDate.setDate(newDate.getDate() + 1);
    setSheetCurrentDate(newDate);
    setSelectedSlotIndex(null);
  };

  const handleConfirmSlot = () => {
    if (selectedSlotIndex !== null && sheetSlots[selectedSlotIndex]) {
      const slot = sheetSlots[selectedSlotIndex];
      const monthStr = MONTHS_SHORT[sheetCurrentDate.getMonth()];
      const dayName = WEEKDAYS_SHORT[sheetCurrentDate.getDay()];
      setConfirmedSlot({
        date: `${dayName}, ${sheetCurrentDate.getDate()} ${monthStr} ${sheetCurrentDate.getFullYear()}`,
        time: slot.time,
      });
      setSelectedDate(sheetCurrentDate);
    }
    setIsSheetOpen(false);
  };

  const isSheetDateToday =
    sheetCurrentDate.getFullYear() === 2026 &&
    sheetCurrentDate.getMonth() === 8 &&
    sheetCurrentDate.getDate() === 7;

  const canGoPreviousDayInSheet =
    sheetCurrentDate.getTime() > new Date(2026, 8, 7).getTime();

  const codeExpandedString = useMemo(() => {
    return `import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gTimeslot,
  SlotPickerViewMode,
  SlotDateStatus,
  SlotTimeStatus,
  SlotTimeEntry,
  UX4GColors,
} from 'ux4g-react-native-design-system';

export const SelectAppointmentTimeScreen = ({
  isDark = false,
  onBack = () => {},
}: {
  isDark?: boolean;
  onBack?: () => void;
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<SlotTimeEntry | null>({
    time: '9:00 AM',
    slotCount: 4,
    status: SlotTimeStatus.available,
  });

  const colors = {
    screenBg: isDark ? UX4GColors.neutral950 : '#FAFAFA',
    titleColor: isDark ? UX4GColors.neutral50 : '#111827',
    subtleText: isDark ? UX4GColors.neutral300 : '#4B5563',
    border: isDark ? UX4GColors.neutral800 : '#E5E7EB',
  };

  const formatDate = (date: Date) => {
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = date.getDay() === 0 ? 6 : date.getDay() - 1;
    return \`\${weekdays[day]}, \${date.getDate()} \${months[date.getMonth()]} \${date.getFullYear()}\`;
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.screenBg }]}>
      {/* App Header */}
      <Ux4gAppHeader
        variant="filled"
        title="National Services Portal"
        showBackButton
        onBackPress={onBack}
      />

      <ScrollView style={styles.flexOne} contentContainerStyle={styles.scrollContainer}>
        {/* Title */}
        <Text style={[styles.title, { color: colors.titleColor }]}>Select appointment time</Text>
        <Text style={[styles.subtitle, { color: colors.subtleText }]}>
          Adv. M. Sharma · 30-minute slot
        </Text>

        {/* Appointment date & time dropdown trigger */}
        <Text style={[styles.label, { color: colors.titleColor }]}>Appointment date & time</Text>
        <TouchableOpacity style={[styles.dropdownTrigger, { borderColor: colors.border }]}>
          <Text style={[styles.triggerText, { color: selectedDate ? colors.titleColor : '#9CA3AF' }]}>
            {selectedDate && selectedSlot
              ? \`\${formatDate(selectedDate)} · \${selectedSlot.time}\`
              : 'Tap to pick date & time'}
          </Text>
        </TouchableOpacity>

        {/* Ux4gTimeslot Calendar Component (Expanded View) */}
        <Ux4gTimeslot
          data={{
            year: 2026,
            month: 9,
            today: '2026-09-07',
            weeklyOffWeekdays: [6, 7],
            viewMode: SlotPickerViewMode.expanded,
            dates: [
              { date: '2026-09-16', status: SlotDateStatus.publicHoliday },
              { date: '2026-09-22', status: SlotDateStatus.noSlots },
            ],
          }}
          timeSlotProvider={async (date) => [
            { time: '9:00 AM', slotCount: 4, status: SlotTimeStatus.available },
            { time: '9:30 AM', slotCount: 6, status: SlotTimeStatus.available },
            { time: '10:00 AM', slotCount: 3, status: SlotTimeStatus.available },
            { time: '10:30 AM', slotCount: 0, status: SlotTimeStatus.noSlots },
            { time: '11:00 AM', slotCount: 8, status: SlotTimeStatus.available },
            { time: '11:30 AM', slotCount: 5, status: SlotTimeStatus.available },
            { time: '12:00 PM', slotCount: 10, status: SlotTimeStatus.available },
            { time: '2:00 PM', slotCount: 5, status: SlotTimeStatus.available },
            { time: '2:30 PM', slotCount: 2, status: SlotTimeStatus.limited },
            { time: '3:00 PM', slotCount: 2, status: SlotTimeStatus.limited },
            { time: '3:30 PM', slotCount: 1, status: SlotTimeStatus.limited },
            { time: '4:00 PM', slotCount: 7, status: SlotTimeStatus.available },
          ]}
          onSlotConfirmed={(date, slot) => {
            setSelectedDate(date);
            setSelectedSlot(slot);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  flexOne: { flex: 1 },
  scrollContainer: { padding: 16, paddingBottom: 32 },
  title: { fontSize: 22, fontWeight: '800' },
  subtitle: { fontSize: 13, marginTop: 4, marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 8 },
  dropdownTrigger: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  triggerText: { fontSize: 14 },
});
`;
  }, []);

  const codeCompactString = useMemo(() => {
    return `import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Ux4gAppHeader,
  Ux4gTimeslot,
  SlotPickerViewMode,
  SlotDateStatus,
  SlotTimeStatus,
  SlotTimeEntry,
  UX4GColors,
} from 'ux4g-react-native-design-system';

/// Same as expanded view but with viewMode set to "compact".
/// The bottom sheet shows time slots in a 2-column grid layout.
export const SelectAppointmentTimeCompactScreen = ({
  isDark = false,
  onBack = () => {},
}: {
  isDark?: boolean;
  onBack?: () => void;
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<SlotTimeEntry | null>({
    time: '9:00 AM',
    slotCount: 4,
    status: SlotTimeStatus.available,
  });

  const colors = {
    screenBg: isDark ? UX4GColors.neutral950 : '#FAFAFA',
    titleColor: isDark ? UX4GColors.neutral50 : '#111827',
    subtleText: isDark ? UX4GColors.neutral300 : '#4B5563',
    border: isDark ? UX4GColors.neutral800 : '#E5E7EB',
  };

  const formatDate = (date: Date) => {
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = date.getDay() === 0 ? 6 : date.getDay() - 1;
    return \`\${weekdays[day]}, \${date.getDate()} \${months[date.getMonth()]} \${date.getFullYear()}\`;
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.screenBg }]}>
      <Ux4gAppHeader
        variant="filled"
        title="National Services Portal"
        showBackButton
        onBackPress={onBack}
      />

      <ScrollView style={styles.flexOne} contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.title, { color: colors.titleColor }]}>Select appointment time</Text>
        <Text style={[styles.subtitle, { color: colors.subtleText }]}>
          Adv. M. Sharma · 30-minute slot
        </Text>

        <Text style={[styles.label, { color: colors.titleColor }]}>Appointment date & time</Text>
        <TouchableOpacity style={[styles.dropdownTrigger, { borderColor: colors.border }]}>
          <Text style={[styles.triggerText, { color: selectedDate ? colors.titleColor : '#9CA3AF' }]}>
            {selectedDate && selectedSlot
              ? \`\${formatDate(selectedDate)} · \${selectedSlot.time}\`
              : 'Tap to pick date & time'}
          </Text>
        </TouchableOpacity>

        {/* Ux4gTimeslot with Compact View Mode */}
        <Ux4gTimeslot
          data={{
            year: 2026,
            month: 9,
            today: '2026-09-07',
            weeklyOffWeekdays: [6, 7],
            viewMode: SlotPickerViewMode.compact,
            dates: [
              { date: '2026-09-16', status: SlotDateStatus.publicHoliday },
              { date: '2026-09-22', status: SlotDateStatus.noSlots },
            ],
          }}
          timeSlotProvider={async (date) => [
            { time: '9:00 AM', slotCount: 4, status: SlotTimeStatus.available },
            { time: '9:30 AM', slotCount: 6, status: SlotTimeStatus.available },
            { time: '10:00 AM', slotCount: 3, status: SlotTimeStatus.available },
            { time: '10:30 AM', slotCount: 0, status: SlotTimeStatus.noSlots },
            { time: '11:00 AM', slotCount: 8, status: SlotTimeStatus.available },
            { time: '11:30 AM', slotCount: 5, status: SlotTimeStatus.available },
            { time: '12:00 PM', slotCount: 10, status: SlotTimeStatus.available },
            { time: '2:00 PM', slotCount: 5, status: SlotTimeStatus.available },
            { time: '2:30 PM', slotCount: 2, status: SlotTimeStatus.limited },
            { time: '3:00 PM', slotCount: 2, status: SlotTimeStatus.limited },
            { time: '3:30 PM', slotCount: 1, status: SlotTimeStatus.limited },
            { time: '4:00 PM', slotCount: 7, status: SlotTimeStatus.available },
          ]}
          onSlotConfirmed={(date, slot) => {
            setSelectedDate(date);
            setSelectedSlot(slot);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  flexOne: { flex: 1 },
  scrollContainer: { padding: 16, paddingBottom: 32 },
  title: { fontSize: 22, fontWeight: '800' },
  subtitle: { fontSize: 13, marginTop: 4, marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 8 },
  dropdownTrigger: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  triggerText: { fontSize: 14 },
});
`;
  }, []);

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">Select Appointment Time</h1>
          <span className="wb-badge">Pattern</span>
        </div>
        <p className="wb-subtitle">
          Appointment time selection pattern using interactive SlotGrid calendar with bottom sheet slot picker (Expanded & Compact views).
        </p>
      </div>

      {/* Main Body */}
      <div className="wb-body">
        <div className="wb-main">
          {/* Main Tabs */}
          <div className="wb-tab-bar">
            <button
              className={`wb-tab ${activeMainTab === 'preview' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('preview')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">visibility</span> Preview
            </button>
            <button
              className={`wb-tab ${activeMainTab === 'code' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('code')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">code</span> Code
            </button>
          </div>

          {/* Content Area */}
          <div className="wb-content">
            {/* 1. Preview Tab */}
            {activeMainTab === 'preview' && (
              <div
                className={`wb-preview-area ${isDark ? 'dark' : ''}`}
                style={{ flexDirection: 'column', alignItems: 'center' }}
              >
                {/* View Mode Switcher Knobs */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '16px',
                    backgroundColor: isDark ? UX4GColors.neutral900 : UX4GColors.neutral100,
                    padding: '4px',
                    borderRadius: '8px',
                  }}
                >
                  <button
                    onClick={() => setViewMode('expanded')}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '6px',
                      border: 'none',
                      backgroundColor: viewMode === 'expanded' ? colors.primaryColor : 'transparent',
                      color: viewMode === 'expanded' ? colors.onPrimary : colors.subtleText,
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    Expanded View
                  </button>
                  <button
                    onClick={() => setViewMode('compact')}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '6px',
                      border: 'none',
                      backgroundColor: viewMode === 'compact' ? colors.primaryColor : 'transparent',
                      color: viewMode === 'compact' ? colors.onPrimary : colors.subtleText,
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    Compact View
                  </button>
                </div>

                {/* Mobile Phone Mockup */}
                <div
                  style={{
                    width: 360,
                    height: 760,
                    backgroundColor: colors.screenBg,
                    borderRadius: 24,
                    border: `1px solid ${colors.phoneBorder}`,
                    boxShadow: isDark
                      ? '0 12px 36px rgba(0, 0, 0, 0.6)'
                      : '0 12px 36px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                  }}
                >
                  {/* App Header (Filled Ux4gAppHeader) */}
                  <div
                    style={{
                      width: '100%',
                      height: '56px',
                      padding: '0 16px',
                      backgroundColor: colors.headerBg,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      boxSizing: 'border-box',
                      flexShrink: 0,
                    }}
                  >
                    <button
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#FFFFFF',
                        cursor: 'pointer',
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
                        arrow_back
                      </span>
                    </button>
                    <span
                      style={{
                        color: '#FFFFFF',
                        fontSize: '16px',
                        fontWeight: 600,
                        letterSpacing: '-0.2px',
                      }}
                    >
                      National Services Portal
                    </span>
                  </div>

                  {/* Scrollable Content Body */}
                  <div
                    style={{
                      flex: 1,
                      overflowY: 'auto',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Title Section */}
                    <div
                      style={{
                        fontSize: '22px',
                        fontWeight: 800,
                        color: colors.titleColor,
                        marginBottom: '4px',
                        marginTop: '8px',
                      }}
                    >
                      Select appointment time
                    </div>
                    <div
                      style={{
                        fontSize: '13px',
                        color: colors.subtleText,
                        lineHeight: '1.4',
                        marginBottom: '20px',
                      }}
                    >
                      Adv. M. Sharma · 30-minute slot
                    </div>

                    {/* Appointment Date & Time Label */}
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: colors.titleColor,
                        marginBottom: '8px',
                      }}
                    >
                      Appointment date & time
                    </div>

                    {/* Tap to Pick Dropdown Trigger */}
                    <div
                      onClick={() => {
                        setSheetCurrentDate(selectedDate);
                        setIsSheetOpen(true);
                      }}
                      style={{
                        width: '100%',
                        padding: '10px 16px',
                        backgroundColor: colors.surface,
                        border: `1px solid ${colors.dropdownBorder}`,
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        boxSizing: 'border-box',
                        marginBottom: '16px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '14px',
                          color: confirmedSlot ? colors.titleColor : '#9CA3AF',
                        }}
                      >
                        {confirmedSlot
                          ? `${confirmedSlot.date} · ${confirmedSlot.time}`
                          : 'Tap to pick date & time'}
                      </span>
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: '20px', color: '#6B7280' }}
                      >
                        keyboard_arrow_down
                      </span>
                    </div>

                    {/* SlotGrid Calendar Card */}
                    <div
                      style={{
                        width: '100%',
                        backgroundColor: colors.surface,
                        border: `1px solid ${colors.border}`,
                        borderRadius: '12px',
                        padding: '16px',
                        boxSizing: 'border-box',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
                      }}
                    >
                      {/* Month & Nav Controls */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '12px',
                        }}
                      >
                        <button
                          onClick={prevMonth}
                          disabled={isCurrentMonth}
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '6px',
                            border: `1px solid ${colors.onSurfaceBorder}`,
                            backgroundColor: isCurrentMonth ? colors.onSurfaceLight : colors.surface,
                            cursor: isCurrentMonth ? 'default' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 0,
                          }}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{
                              fontSize: '18px',
                              color: isCurrentMonth ? colors.onSurfaceMuted : colors.onSurfaceMedium,
                            }}
                          >
                            chevron_left
                          </span>
                        </button>

                        <span
                          style={{
                            fontSize: '16px',
                            fontWeight: 700,
                            color: colors.primaryColor,
                          }}
                        >
                          {MONTHS[currentMonth]} {currentYear}
                        </span>

                        <button
                          onClick={nextMonth}
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '6px',
                            border: `1px solid ${colors.onSurfaceBorder}`,
                            backgroundColor: colors.surface,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 0,
                          }}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: '18px', color: colors.onSurfaceMedium }}
                          >
                            chevron_right
                          </span>
                        </button>
                      </div>

                      {/* Day of Week Header (Mo Tu We Th Fr Sa Su) */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(7, 1fr)',
                          textAlign: 'center',
                          fontSize: '12px',
                          fontWeight: 600,
                          marginBottom: '4px',
                        }}
                      >
                        {WEEKDAYS.map((w, idx) => {
                          const isWeeklyOff = idx === 5 || idx === 6;
                          return (
                            <div
                              key={idx}
                              style={{
                                padding: '4px 0',
                                color: isWeeklyOff ? colors.onSurfaceMuted : colors.onSurfaceMedium,
                              }}
                            >
                              {w}
                            </div>
                          );
                        })}
                      </div>

                      {/* Calendar Dates Grid (Monday-start, with out-of-month padding days) */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(7, 1fr)',
                        }}
                      >
                        {Array.from({ length: rowCount }).map((_, row) => (
                          <React.Fragment key={row}>
                            {Array.from({ length: 7 }).map((_, col) => {
                              const cellIndex = row * 7 + col;
                              const dayOffset = cellIndex - startOffset + 1;

                              // Out of month
                              if (dayOffset < 1 || dayOffset > daysInMonth) {
                                const outDay =
                                  dayOffset < 1
                                    ? daysInPrevMonth + dayOffset
                                    : dayOffset - daysInMonth;

                                return (
                                  <div
                                    key={col}
                                    style={{
                                      height: '48px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      fontSize: '13px',
                                      color: colors.onSurfaceMuted,
                                    }}
                                  >
                                    {outDay}
                                  </div>
                                );
                              }

                              // In month
                              const day = dayOffset;
                              const dateObj = new Date(currentYear, currentMonth, day);
                              const dayOfWeek = dateObj.getDay();
                              const isWeeklyOff = dayOfWeek === 0 || dayOfWeek === 6;
                              const isHoliday = day === 16;
                              const isNoSlots = day === 22;
                              const isSelected =
                                selectedDate.getFullYear() === currentYear &&
                                selectedDate.getMonth() === currentMonth &&
                                selectedDate.getDate() === day;
                              const isToday =
                                currentYear === 2026 && currentMonth === 8 && day === 7;
                              const canTap = !isWeeklyOff && !isHoliday && !isNoSlots;

                              return (
                                <div
                                  key={col}
                                  onClick={() => handleDateClick(day)}
                                  style={{
                                    height: '48px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: canTap ? 'pointer' : 'default',
                                  }}
                                >
                                  {/* Inner 32x32 Container */}
                                  <div
                                    style={{
                                      width: '32px',
                                      height: '32px',
                                      borderRadius: '8px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      fontSize: '13px',
                                      fontWeight: isSelected ? 700 : (isHoliday || isNoSlots || isWeeklyOff) ? 500 : 400,
                                      backgroundColor: isSelected
                                        ? colors.primaryColor
                                        : isHoliday
                                        ? colors.warningBg
                                        : (isNoSlots || isWeeklyOff)
                                        ? colors.onSurfaceLight
                                        : 'transparent',
                                      color: isSelected
                                        ? colors.onPrimary
                                        : isHoliday
                                        ? colors.warning
                                        : (isNoSlots || isWeeklyOff)
                                        ? colors.onSurfaceMuted
                                        : colors.onSurface,
                                    }}
                                  >
                                    {day}
                                  </div>

                                  {/* Today Dot Indicator (4px primary dot directly below date) */}
                                  {isToday && !isSelected && (
                                    <div
                                      style={{
                                        width: '4px',
                                        height: '4px',
                                        borderRadius: '50%',
                                        backgroundColor: colors.primaryColor,
                                        marginTop: '2px',
                                      }}
                                    />
                                  )}
                                </div>
                              );
                            })}
                          </React.Fragment>
                        ))}
                      </div>

                      {/* Calendar Legend (No slots, Public holiday, Weekly off) */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '16px',
                          marginTop: '12px',
                          fontSize: '11px',
                          color: colors.onSurfaceMedium,
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <div
                            style={{
                              width: '14px',
                              height: '14px',
                              borderRadius: '3px',
                              backgroundColor: colors.onSurfaceLight,
                              border: `1px solid ${colors.onSurfaceBorder}`,
                            }}
                          />
                          <span>No slots</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <div
                            style={{
                              width: '14px',
                              height: '14px',
                              borderRadius: '3px',
                              backgroundColor: colors.warningBg,
                              border: `1px solid ${colors.warning}`,
                            }}
                          />
                          <span>Public holiday</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <div
                            style={{
                              width: '14px',
                              height: '14px',
                              borderRadius: '3px',
                              backgroundColor: colors.onSurfaceLight,
                              border: `1px solid ${colors.onSurfaceBorder}`,
                            }}
                          />
                          <span>Weekly off</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Time Slot Bottom Sheet Modal (SlotTimePickerSheet) */}
                  {isSheetOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 50,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: colors.surface,
                          borderTopLeftRadius: '20px',
                          borderTopRightRadius: '20px',
                          maxHeight: '92%',
                          display: 'flex',
                          flexDirection: 'column',
                          boxShadow: '0 -4px 24px rgba(0, 0, 0, 0.25)',
                        }}
                      >
                        {/* Drag Handle */}
                        <div
                          style={{
                            width: '40px',
                            height: '4px',
                            borderRadius: '2px',
                            backgroundColor: colors.onSurfaceBorder,
                            alignSelf: 'center',
                            marginTop: '12px',
                            marginBottom: '12px',
                          }}
                        />

                        {/* Sheet Header (← Mon 7 Sep →) */}
                        <div
                          style={{
                            padding: '0 16px 12px 16px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              width: '100%',
                            }}
                          >
                            <button
                              onClick={handleSheetPrevDay}
                              disabled={!canGoPreviousDayInSheet}
                              style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '6px',
                                border: `1px solid ${colors.onSurfaceBorder}`,
                                backgroundColor: !canGoPreviousDayInSheet
                                  ? colors.onSurfaceLight
                                  : colors.surface,
                                cursor: !canGoPreviousDayInSheet ? 'default' : 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 0,
                              }}
                            >
                              <span
                                className="material-symbols-outlined"
                                style={{
                                  fontSize: '18px',
                                  color: !canGoPreviousDayInSheet
                                    ? colors.onSurfaceMuted
                                    : colors.onSurfaceMedium,
                                }}
                              >
                                chevron_left
                              </span>
                            </button>

                            <span
                              style={{
                                fontSize: '16px',
                                fontWeight: 700,
                                color: colors.onSurface,
                              }}
                            >
                              {WEEKDAYS_SHORT[sheetCurrentDate.getDay()]}{' '}
                              {sheetCurrentDate.getDate()}{' '}
                              {MONTHS_SHORT[sheetCurrentDate.getMonth()]}
                            </span>

                            <button
                              onClick={handleSheetNextDay}
                              style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '6px',
                                border: `1px solid ${colors.onSurfaceBorder}`,
                                backgroundColor: colors.surface,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 0,
                              }}
                            >
                              <span
                                className="material-symbols-outlined"
                                style={{ fontSize: '18px', color: colors.onSurfaceMedium }}
                              >
                                chevron_right
                              </span>
                            </button>
                          </div>

                          {isSheetDateToday && (
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: 700,
                                color: colors.primaryColor,
                                marginTop: '2px',
                              }}
                            >
                              Today
                            </span>
                          )}
                        </div>

                        {/* Divider */}
                        <div style={{ height: '1px', backgroundColor: colors.divider }} />

                        {/* Slots Area (Expanded Vertical List vs Compact 2-Column Grid) */}
                        <div
                          className="hide-scrollbar"
                          style={{
                            flex: 1,
                            overflowY: 'auto',
                            maxHeight: '280px',
                            padding: viewMode === 'expanded' ? '8px 0' : '0',
                          }}
                        >
                          {viewMode === 'expanded' ? (
                            /* ---------------- EXPANDED VIEW ---------------- */
                            <div>
                              {sheetSlots.map((slot, idx) => {
                                const isSelected = selectedSlotIndex === idx;
                                const isNoSlots = slot.status === 'noSlots';

                                if (isNoSlots) {
                                  return (
                                    <React.Fragment key={idx}>
                                      <div
                                        style={{
                                          height: '56px',
                                          backgroundColor: colors.onSurfaceLight,
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          fontSize: '13px',
                                          color: colors.onSurfaceMuted,
                                        }}
                                      >
                                        No slots available
                                      </div>
                                      {idx < sheetSlots.length - 1 && (
                                        <div style={{ height: '1px', backgroundColor: colors.divider }} />
                                      )}
                                    </React.Fragment>
                                  );
                                }

                                return (
                                  <React.Fragment key={idx}>
                                    <div
                                      onClick={() => setSelectedSlotIndex(idx)}
                                      style={{
                                        height: '56px',
                                        margin: '4px 16px',
                                        borderRadius: '8px',
                                        border: isSelected
                                          ? `1.5px solid ${colors.primaryColor}`
                                          : `1px solid ${colors.onSurfaceBorder}`,
                                        backgroundColor: isSelected
                                          ? colors.primaryLightBg
                                          : colors.surface,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        transition: 'all 0.15s ease',
                                      }}
                                    >
                                      {isSelected ? (
                                        <div
                                          style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            color: colors.primaryColor,
                                            fontWeight: 700,
                                            fontSize: '13px',
                                          }}
                                        >
                                          <span
                                            className="material-symbols-outlined"
                                            style={{ fontSize: '18px' }}
                                          >
                                            check_circle
                                          </span>
                                          <span>Selected</span>
                                        </div>
                                      ) : (
                                        <div
                                          style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: '13px',
                                              fontWeight: 700,
                                              color: colors.onSurface,
                                            }}
                                          >
                                            {slot.time}
                                          </span>
                                          <span
                                            style={{
                                              fontSize: '11px',
                                              marginTop: '2px',
                                              color:
                                                slot.status === 'limited'
                                                  ? colors.warning
                                                  : colors.onSurfaceMuted,
                                              fontWeight: slot.status === 'limited' ? 600 : 400,
                                            }}
                                          >
                                            {slot.slotCount} slots
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                    {idx < sheetSlots.length - 1 && (
                                      <div style={{ height: '1px', backgroundColor: colors.divider }} />
                                    )}
                                  </React.Fragment>
                                );
                              })}
                            </div>
                          ) : (
                            /* ---------------- COMPACT VIEW (2-COL GRID) ---------------- */
                            <div>
                              {Array.from({ length: Math.ceil(sheetSlots.length / 2) }).map((_, rIdx) => {
                                const leftIdx = rIdx * 2;
                                const rightIdx = rIdx * 2 + 1;
                                const leftSlot = sheetSlots[leftIdx];
                                const rightSlot = rightIdx < sheetSlots.length ? sheetSlots[rightIdx] : null;

                                const renderCompactCell = (slot: TimeSlot, index: number) => {
                                  const isSelected = selectedSlotIndex === index;
                                  const isNoSlots = slot.status === 'noSlots';

                                  const badgeBg = isSelected
                                    ? colors.primaryColor
                                    : isNoSlots
                                    ? colors.onSurfaceBorder
                                    : slot.status === 'limited'
                                    ? colors.warning
                                    : colors.success;

                                  return (
                                    <div
                                      onClick={() => !isNoSlots && setSelectedSlotIndex(index)}
                                      style={{
                                        flex: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '6px',
                                        padding: '14px 12px',
                                        backgroundColor: isSelected
                                          ? colors.primaryLightBg
                                          : 'transparent',
                                        cursor: isNoSlots ? 'default' : 'pointer',
                                      }}
                                    >
                                      <span
                                        style={{
                                          fontSize: '13px',
                                          fontWeight: isSelected ? 600 : 400,
                                          color: isSelected
                                            ? colors.primaryColor
                                            : isNoSlots
                                            ? colors.onSurfaceMuted
                                            : colors.onSurface,
                                        }}
                                      >
                                        {slot.time}
                                      </span>

                                      {/* Badge */}
                                      <div
                                        style={{
                                          width: '22px',
                                          height: '22px',
                                          borderRadius: '50%',
                                          backgroundColor: badgeBg,
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          color: '#FFFFFF',
                                          fontSize: '11px',
                                          fontWeight: 700,
                                        }}
                                      >
                                        {isSelected ? (
                                          <span
                                            className="material-symbols-outlined"
                                            style={{ fontSize: '13px', color: colors.onPrimary }}
                                          >
                                            check
                                          </span>
                                        ) : isNoSlots ? (
                                          <span style={{ color: colors.onSurfaceMuted }}>0</span>
                                        ) : (
                                          slot.slotCount
                                        )}
                                      </div>
                                    </div>
                                  );
                                };

                                return (
                                  <React.Fragment key={rIdx}>
                                    <div style={{ display: 'flex', minHeight: '52px' }}>
                                      {renderCompactCell(leftSlot, leftIdx)}
                                      <div style={{ width: '1px', backgroundColor: colors.divider }} />
                                      {rightSlot ? (
                                        renderCompactCell(rightSlot, rightIdx)
                                      ) : (
                                        <div style={{ flex: 1 }} />
                                      )}
                                    </div>
                                    {rIdx < Math.ceil(sheetSlots.length / 2) - 1 && (
                                      <div style={{ height: '1px', backgroundColor: colors.divider }} />
                                    )}
                                  </React.Fragment>
                                );
                              })}
                            </div>
                          )}
                        </div>

                        {/* Divider */}
                        <div style={{ height: '1px', backgroundColor: colors.divider }} />

                        {/* Sheet Legend (6 items in 2 rows) */}
                        <div
                          style={{
                            padding: '10px 16px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px',
                            fontSize: '11px',
                            color: colors.onSurfaceMedium,
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <div
                                style={{
                                  width: '14px',
                                  height: '14px',
                                  borderRadius: '3px',
                                  backgroundColor: colors.surface,
                                  border: `1px solid ${colors.onSurfaceMuted}`,
                                }}
                              />
                              <span>Available</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <div
                                style={{
                                  width: '14px',
                                  height: '14px',
                                  borderRadius: '3px',
                                  backgroundColor: colors.primaryLightBg,
                                  border: `1px solid ${colors.primaryColor}`,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <span
                                  className="material-symbols-outlined"
                                  style={{ fontSize: '10px', color: colors.primaryColor }}
                                >
                                  check
                                </span>
                              </div>
                              <span>Selected</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <div
                                style={{
                                  width: '14px',
                                  height: '14px',
                                  borderRadius: '3px',
                                  backgroundColor: colors.onSurfaceLight,
                                  border: `1px solid ${colors.onSurfaceBorder}`,
                                }}
                              />
                              <span>No slots</span>
                            </div>
                          </div>

                          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <div
                                style={{
                                  width: '14px',
                                  height: '14px',
                                  borderRadius: '3px',
                                  backgroundColor: colors.warningBg,
                                  border: `1px solid ${colors.warning}`,
                                }}
                              />
                              <span>Limited slots</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <div
                                style={{
                                  width: '14px',
                                  height: '14px',
                                  borderRadius: '3px',
                                  backgroundColor: colors.warningBg,
                                  border: `1px solid ${colors.warning}`,
                                }}
                              />
                              <span>Public holiday</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <div
                                style={{
                                  width: '14px',
                                  height: '14px',
                                  borderRadius: '3px',
                                  backgroundColor: colors.onSurfaceLight,
                                  border: `1px solid ${colors.onSurfaceBorder}`,
                                }}
                              />
                              <span>Weekly off</span>
                            </div>
                          </div>
                        </div>

                        {/* Divider */}
                        <div style={{ height: '1px', backgroundColor: colors.divider }} />

                        {/* Footer (Cancel & Confirm buttons) */}
                        <div
                          style={{
                            padding: '12px 16px',
                            display: 'flex',
                            gap: '12px',
                          }}
                        >
                          <button
                            onClick={() => setIsSheetOpen(false)}
                            style={{
                              flex: 1,
                              padding: '14px 0',
                              borderRadius: '8px',
                              border: `1px solid ${colors.onSurfaceBorder}`,
                              backgroundColor: 'transparent',
                              color: colors.onSurface,
                              fontSize: '13px',
                              fontWeight: 700,
                              cursor: 'pointer',
                            }}
                          >
                            Cancel
                          </button>

                          <button
                            onClick={handleConfirmSlot}
                            disabled={selectedSlotIndex === null}
                            style={{
                              flex: 1,
                              padding: '14px 0',
                              borderRadius: '8px',
                              border: 'none',
                              backgroundColor:
                                selectedSlotIndex !== null
                                  ? colors.primaryColor
                                  : colors.onSurfaceLight,
                              color:
                                selectedSlotIndex !== null
                                  ? colors.onPrimary
                                  : colors.onSurfaceMuted,
                              fontSize: '13px',
                              fontWeight: 700,
                              cursor: selectedSlotIndex !== null ? 'pointer' : 'default',
                            }}
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 2. Code Tab */}
            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                <CodeBlock
                  code={viewMode === 'expanded' ? codeExpandedString : codeCompactString}
                  language="tsx"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAppointmentTimeDoc;
