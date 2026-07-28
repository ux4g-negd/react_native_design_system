import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Ux4gTimePicker, Ux4gThemeProvider } from '../src';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<Ux4gThemeProvider>{ui}</Ux4gThemeProvider>);
};

describe('Ux4gTimePicker Component', () => {
  it('should render default placeholder text, label, and required asterisk', () => {
    const { getByText } = renderWithTheme(
      <Ux4gTimePicker
        label="Select Time"
        placeholder="Select time"
        isRequired
        description="Choose a 12-hour slot"
      />
    );

    expect(getByText('Select Time')).toBeTruthy();
    expect(getByText('*')).toBeTruthy();
    expect(getByText('Select time')).toBeTruthy();
    expect(getByText('Choose a 12-hour slot')).toBeTruthy();
  });

  it('should format initialTime correctly in 12-hour AM/PM format', () => {
    const { getByText: getByText1 } = renderWithTheme(
      <Ux4gTimePicker initialTime={{ hour: 9, minute: 30 }} />
    );
    expect(getByText1('09:30 AM')).toBeTruthy();

    const { getByText: getByText2 } = renderWithTheme(
      <Ux4gTimePicker initialTime={{ hour: 14, minute: 15 }} />
    );
    expect(getByText2('02:15 PM')).toBeTruthy();

    const { getByText: getByText3 } = renderWithTheme(
      <Ux4gTimePicker initialTime={{ hour: 0, minute: 5 }} />
    );
    expect(getByText3('12:05 AM')).toBeTruthy();
  });

  it('should NOT open modal when enabled=false (disabled state)', () => {
    const { getByText, queryByText } = renderWithTheme(
      <Ux4gTimePicker
        placeholder="Pick Time"
        enabled={false}
      />
    );

    const trigger = getByText('Pick Time');
    fireEvent.press(trigger);

    // Modal Done/Cancel buttons should not be present
    expect(queryByText('Done')).toBeNull();
    expect(queryByText('Cancel')).toBeNull();
  });

  it('should open modal when enabled=true, allow selection, and trigger onTimeSelected on Done', () => {
    const onTimeSelectedMock = jest.fn();

    const { getByText } = renderWithTheme(
      <Ux4gTimePicker
        initialTime={{ hour: 9, minute: 0 }}
        onTimeSelected={onTimeSelectedMock}
      />
    );

    // Press field trigger box to open modal dialog
    fireEvent.press(getByText('09:00 AM'));

    // Modal dialog headers and buttons should be rendered
    expect(getByText('HH')).toBeTruthy();
    expect(getByText('MM')).toBeTruthy();
    expect(getByText('Done')).toBeTruthy();
    expect(getByText('Cancel')).toBeTruthy();

    // Toggle to PM
    fireEvent.press(getByText('PM'));

    // Press Done button
    fireEvent.press(getByText('Done'));

    expect(onTimeSelectedMock).toHaveBeenCalledTimes(1);
    const selectedTime = onTimeSelectedMock.mock.calls[0][0];
    expect(selectedTime.hour).toBe(21); // 9 PM -> 21
    expect(selectedTime.minute).toBe(0);
  });

  it('should support custom minuteInterval prop', () => {
    const { getByText } = renderWithTheme(
      <Ux4gTimePicker
        initialTime={{ hour: 10, minute: 15 }}
        minuteInterval={15}
      />
    );

    expect(getByText('10:15 AM')).toBeTruthy();
  });

  it('should render validation status captions correctly', () => {
    const { getByText, rerender } = renderWithTheme(
      <Ux4gTimePicker
        status="error"
        description="Invalid time slot"
      />
    );

    expect(getByText('Invalid time slot')).toBeTruthy();

    rerender(
      <Ux4gThemeProvider>
        <Ux4gTimePicker
          status="warning"
          description="Peak traffic period warning"
        />
      </Ux4gThemeProvider>
    );

    expect(getByText('Peak traffic period warning')).toBeTruthy();
  });
});
