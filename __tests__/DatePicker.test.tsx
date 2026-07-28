import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Ux4gDatePicker, Ux4gThemeProvider } from '../src';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<Ux4gThemeProvider>{ui}</Ux4gThemeProvider>);
};

describe('Ux4gDatePicker Component', () => {
  it('should render default placeholder text and label correctly', () => {
    const { getByText } = renderWithTheme(
      <Ux4gDatePicker
        label="Select Date"
        placeholder="DD/MM/YYYY"
        isRequired
        description="Pick a date hint"
      />
    );

    expect(getByText('Select Date')).toBeTruthy();
    expect(getByText('*')).toBeTruthy();
    expect(getByText('DD/MM/YYYY')).toBeTruthy();
    expect(getByText('Pick a date hint')).toBeTruthy();
  });

  it('should format initialDate correctly in single mode (DD/MM/YYYY)', () => {
    const testDate = new Date(2026, 7, 15); // 15 August 2026
    const { getByText } = renderWithTheme(
      <Ux4gDatePicker mode="single" initialDate={testDate} />
    );

    expect(getByText('15/08/2026')).toBeTruthy();
  });

  it('should format initialDateRange correctly in range mode', () => {
    const startDate = new Date(2026, 7, 10);
    const endDate = new Date(2026, 7, 20);

    const { getByText } = renderWithTheme(
      <Ux4gDatePicker
        mode="range"
        initialDateRange={{ start: startDate, end: endDate }}
      />
    );

    expect(getByText('10/08/2026')).toBeTruthy();
    expect(getByText('20/08/2026')).toBeTruthy();
    expect(getByText('–')).toBeTruthy();
  });

  it('should NOT open modal when enabled=false (disabled state)', () => {
    const { getByText, queryByText } = renderWithTheme(
      <Ux4gDatePicker
        mode="single"
        placeholder="Pick Date"
        enabled={false}
      />
    );

    const trigger = getByText('Pick Date');
    fireEvent.press(trigger);

    // Modal action buttons should not be rendered when modal remains closed
    expect(queryByText('Confirm')).toBeNull();
    expect(queryByText('Cancel')).toBeNull();
  });

  it('should open modal when enabled=true and select single date on confirm', () => {
    const onDateSelectedMock = jest.fn();
    const testInitialDate = new Date(2026, 6, 1); // 01 July 2026

    const { getByText } = renderWithTheme(
      <Ux4gDatePicker
        mode="single"
        initialDate={testInitialDate}
        onDateSelected={onDateSelectedMock}
      />
    );

    // Press field trigger box to open modal dialog
    fireEvent.press(getByText('01/07/2026'));

    // Modal dialog header title and buttons should be visible
    expect(getByText('July 2026')).toBeTruthy();
    expect(getByText('Confirm')).toBeTruthy();

    // Select day 15 in the calendar grid
    fireEvent.press(getByText('15'));

    // Press Confirm button
    fireEvent.press(getByText('Confirm'));

    expect(onDateSelectedMock).toHaveBeenCalledTimes(1);
    const selectedDate = onDateSelectedMock.mock.calls[0][0];
    expect(selectedDate.getDate()).toBe(15);
    expect(selectedDate.getMonth()).toBe(6);
    expect(selectedDate.getFullYear()).toBe(2026);
  });

  it('should handle date range selection in range mode dialog', () => {
    const onDateRangeSelectedMock = jest.fn();
    const initialStart = new Date(2026, 6, 5);
    const initialEnd = new Date(2026, 6, 10);

    const { getByText } = renderWithTheme(
      <Ux4gDatePicker
        mode="range"
        initialDateRange={{ start: initialStart, end: initialEnd }}
        onDateRangeSelected={onDateRangeSelectedMock}
      />
    );

    // Press trigger box to open dialog
    fireEvent.press(getByText('05/07/2026'));

    // Select start day 12 and end day 18 in calendar
    fireEvent.press(getByText('12'));
    fireEvent.press(getByText('18'));

    // Press Confirm
    fireEvent.press(getByText('Confirm'));

    expect(onDateRangeSelectedMock).toHaveBeenCalledTimes(1);
    const range = onDateRangeSelectedMock.mock.calls[0][0];
    expect(range.start.getDate()).toBe(12);
    expect(range.end.getDate()).toBe(18);
  });

  it('should render validation status captions correctly', () => {
    const { getByText, rerender } = renderWithTheme(
      <Ux4gDatePicker
        status="error"
        description="Error status hint"
      />
    );

    expect(getByText('Error status hint')).toBeTruthy();

    rerender(
      <Ux4gThemeProvider>
        <Ux4gDatePicker
          status="success"
          description="Success status hint"
        />
      </Ux4gThemeProvider>
    );

    expect(getByText('Success status hint')).toBeTruthy();
  });
});
