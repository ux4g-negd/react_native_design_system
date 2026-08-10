import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import { Ux4gEmptyState, Ux4gThemeProvider } from '../src';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<Ux4gThemeProvider>{ui}</Ux4gThemeProvider>);
};

describe('Ux4gEmptyState', () => {
  it('renders title and merged body text', () => {
    const { getByText } = renderWithTheme(
      <Ux4gEmptyState
        title="No results found"
        subtitle="Did you mean"
        description="Driving License?"
        testID="empty-state"
      />
    );

    expect(getByText('No results found')).toBeTruthy();
    expect(getByText('Did you mean Driving License?')).toBeTruthy();
  });

  it('renders all semantic variants without throwing', () => {
    const variants = ['noResults', 'noData', 'comingSoon', 'error', 'custom'] as const;

    variants.forEach((variant) => {
      const { getByText } = renderWithTheme(
        <Ux4gEmptyState variant={variant} title={`Title ${variant}`} />
      );

      expect(getByText(`Title ${variant}`)).toBeTruthy();
    });
  });

  it('renders custom icon when provided', () => {
    const { getByTestId } = renderWithTheme(
      <Ux4gEmptyState
        title="Custom icon"
        icon={<Text testID="custom-icon">*</Text>}
      />
    );

    expect(getByTestId('custom-icon')).toBeTruthy();
  });

  it('shows button and triggers callback on press', () => {
    const onButtonPressed = jest.fn();
    const { getByTestId } = renderWithTheme(
      <Ux4gEmptyState
        title="No data"
        buttonText="Try again"
        onButtonPressed={onButtonPressed}
        testID="empty-state"
      />
    );

    fireEvent.press(getByTestId('empty-state-button'));
    expect(onButtonPressed).toHaveBeenCalledTimes(1);
  });
});
