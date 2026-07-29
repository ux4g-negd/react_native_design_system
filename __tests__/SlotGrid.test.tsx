/**
 * Unit tests for Ux4gTimeslot / SlotGrid component.
 */

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Ux4gThemeProvider } from '../src/theme/Ux4gThemeContext';
import {
  Ux4gTimeslot,
  Ux4gTimeslotData,
  SlotTimeEntry,
} from '../src/components/slot-grid';

const wrap = (ui: React.ReactElement) =>
  render(<Ux4gThemeProvider>{ui}</Ux4gThemeProvider>);

describe('Ux4gTimeslot / SlotGrid Component', () => {
  const sampleData: Ux4gTimeslotData = {
    year: 2026,
    month: 4,
    today: new Date(2026, 3, 15),
    selectedDate: new Date(2026, 3, 23),
    weeklyOffWeekdays: [6, 7],
    dates: [
      { date: new Date(2026, 3, 9), status: 'publicHoliday' },
      { date: new Date(2026, 3, 21), status: 'noSlots' },
    ],
  };

  // ── Month Header ──
  it('should render month title and navigation buttons', () => {
    const { getByText, getByTestId } = wrap(<Ux4gTimeslot data={sampleData} />);

    expect(getByText('April 2026')).toBeTruthy();
    expect(getByTestId('prev-month-btn')).toBeTruthy();
    expect(getByTestId('next-month-btn')).toBeTruthy();
  });

  // ── Month Navigation ──
  it('should navigate to next month when next arrow is pressed', () => {
    const onMonthChanged = jest.fn();
    const { getByTestId, getByText } = wrap(
      <Ux4gTimeslot data={sampleData} onMonthChanged={onMonthChanged} />,
    );

    fireEvent.press(getByTestId('next-month-btn'));

    expect(getByText('May 2026')).toBeTruthy();
    expect(onMonthChanged).toHaveBeenCalledWith(2026, 5);
  });

  // ── Weekday Headers & Legend ──
  it('should render weekday header row and legend items', () => {
    const { getByText } = wrap(<Ux4gTimeslot data={sampleData} />);

    expect(getByText('Mo')).toBeTruthy();
    expect(getByText('Tu')).toBeTruthy();
    expect(getByText('We')).toBeTruthy();
    expect(getByText('Th')).toBeTruthy();
    expect(getByText('Fr')).toBeTruthy();
    expect(getByText('Sa')).toBeTruthy();
    expect(getByText('Su')).toBeTruthy();

    expect(getByText('No slots')).toBeTruthy();
    expect(getByText('Public holiday')).toBeTruthy();
    expect(getByText('Weekly off')).toBeTruthy();
  });

  // ── Date Selection ──
  it('should call onDateSelected when an available date cell is pressed', () => {
    const onDateSelected = jest.fn();
    const { getByTestId } = wrap(
      <Ux4gTimeslot data={sampleData} onDateSelected={onDateSelected} />,
    );

    const cell = getByTestId('date-cell-2026-4-20');
    fireEvent.press(cell);

    expect(onDateSelected).toHaveBeenCalled();
  });

  // ── Time Slot Picker Sheet ──
  it('should open time slot picker sheet when date cell is pressed and timeSlotProvider is given', async () => {
    const timeSlotProvider = jest.fn((_date: Date): SlotTimeEntry[] => [
      { time: '10:00 AM - 11:00 AM', slotCount: 5, status: 'available' },
      { time: '02:00 PM - 03:00 PM', slotCount: 0, status: 'noSlots' },
    ]);
    const onSlotConfirmed = jest.fn();

    const { getByTestId, getByText } = wrap(
      <Ux4gTimeslot
        data={sampleData}
        timeSlotProvider={timeSlotProvider}
        onSlotConfirmed={onSlotConfirmed}
      />,
    );

    const cell = getByTestId('date-cell-2026-4-20');
    fireEvent.press(cell);

    expect(timeSlotProvider).toHaveBeenCalled();

    // Sheet should be visible showing slots
    await waitFor(() => {
      expect(getByText('10:00 AM - 11:00 AM')).toBeTruthy();
      expect(getByText('Confirm')).toBeTruthy();
    });

    // Select slot & confirm
    fireEvent.press(getByTestId('slot-tile-0'));
    fireEvent.press(getByTestId('sheet-confirm-btn'));

    expect(onSlotConfirmed).toHaveBeenCalled();
  });
});
