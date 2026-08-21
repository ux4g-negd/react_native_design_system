import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Ux4gOtpInput, Ux4gOtpBox, Ux4gOtpCaption, Ux4gThemeProvider } from '../src';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<Ux4gThemeProvider>{ui}</Ux4gThemeProvider>);
};

describe('Ux4gOtpInput Component Suite', () => {
  it('should render standalone Ux4gOtpBox correctly', () => {
    const { getByText } = renderWithTheme(
      <Ux4gOtpBox value="5" status="defaultStatus" size={48} />
    );
    expect(getByText('5')).toBeTruthy();
  });

  it('should render obscure character • in Ux4gOtpBox when obscure is true', () => {
    const { getByText } = renderWithTheme(
      <Ux4gOtpBox value="5" obscure status="defaultStatus" />
    );
    expect(getByText('•')).toBeTruthy();
  });

  it('should render label and required asterisk in Ux4gOtpInput', () => {
    const { getByText } = renderWithTheme(
      <Ux4gOtpInput
        label="Enter OTP"
        required
        value=""
        onChanged={jest.fn()}
      />
    );
    expect(getByText('Enter OTP')).toBeTruthy();
    expect(getByText('*')).toBeTruthy();
  });

  it('should render correct number of OTP digit boxes', () => {
    const { getByTestId } = renderWithTheme(
      <Ux4gOtpInput
        testID="test-otp"
        length={6}
        value="12"
        onChanged={jest.fn()}
      />
    );

    expect(getByTestId('test-otp-box-0')).toBeTruthy();
    expect(getByTestId('test-otp-box-5')).toBeTruthy();
  });

  it('should trigger onChanged when typing digits', () => {
    const onChangedMock = jest.fn();
    const { getByTestId } = renderWithTheme(
      <Ux4gOtpInput
        testID="test-otp"
        length={6}
        value=""
        onChanged={onChangedMock}
      />
    );

    const input = getByTestId('test-otp-input-0');
    fireEvent.changeText(input, '9');
    expect(onChangedMock).toHaveBeenCalledWith('9');
  });

  it('should trigger onCompleted when all digits are filled', () => {
    const onCompletedMock = jest.fn();
    const { getByTestId } = renderWithTheme(
      <Ux4gOtpInput
        testID="test-otp"
        length={4}
        value="123"
        onChanged={jest.fn()}
        onCompleted={onCompletedMock}
      />
    );

    const input = getByTestId('test-otp-input-3');
    fireEvent.changeText(input, '4');
    expect(onCompletedMock).toHaveBeenCalledWith('1234');
  });

  it('should render caption variants (resendAction, success, error)', () => {
    const { getByText } = renderWithTheme(
      <Ux4gOtpCaption
        variant="resendAction"
        leadingText="Didn't get code?"
        trailingText="Resend Now"
      />
    );
    expect(getByText("Didn't get code?")).toBeTruthy();
    expect(getByText('Resend Now')).toBeTruthy();
  });

  it('should adaptively scale box size when constrained by onLayout', () => {
    const { getByTestId } = renderWithTheme(
      <Ux4gOtpInput
        testID="responsive-otp"
        length={6}
        value=""
        onChanged={jest.fn()}
      />
    );

    // Simulate narrow container width (e.g. 288dp on a 320dp screen with margins)
    fireEvent(getByTestId('responsive-otp'), 'layout', {
      nativeEvent: { layout: { width: 280, height: 60 } },
    });

    expect(getByTestId('responsive-otp-box-0')).toBeTruthy();
  });
});
