import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import { Ux4gCard, Ux4gThemeProvider, UX4GColors } from '../src';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<Ux4gThemeProvider>{ui}</Ux4gThemeProvider>);
};

describe('Ux4gCard Component', () => {
  it('should render card with title, subtitle, and body', () => {
    const { getByText } = renderWithTheme(
      <Ux4gCard
        title="Test Card"
        subtitle="Test Subtitle"
        body="This is test body text."
        testID="test-card"
      />
    );

    expect(getByText('Test Card')).toBeTruthy();
    expect(getByText('Test Subtitle')).toBeTruthy();
    expect(getByText('This is test body text.')).toBeTruthy();
  });

  it('should apply default border and elevation style', () => {
    const { getByTestId } = renderWithTheme(
      <Ux4gCard title="Bordered Card" testID="bordered-card" />
    );

    const card = getByTestId('bordered-card');
    expect(card.props.style).toContainEqual(
      expect.objectContaining({
        borderWidth: 1,
        borderColor: UX4GColors.neutral200,
        backgroundColor: '#FFFFFF',
      })
    );
  });

  it('should allow overriding border, background, and elevation', () => {
    const { getByTestId } = renderWithTheme(
      <Ux4gCard
        title="Custom Card"
        borderWidth={2}
        borderColor="#FF0000"
        backgroundColor="#00FF00"
        elevation={4}
        testID="custom-card"
      />
    );

    const card = getByTestId('custom-card');
    expect(card.props.style).toContainEqual(
      expect.objectContaining({
        borderWidth: 2,
        borderColor: '#FF0000',
        backgroundColor: '#00FF00',
      })
    );
  });

  it('should fire onPrimaryClick and onSecondaryClick when buttons are pressed', () => {
    const onPrimaryMock = jest.fn();
    const onSecondaryMock = jest.fn();

    const { getByText } = renderWithTheme(
      <Ux4gCard
        title="Action Card"
        footerType="primaryAndSecondary"
        primaryButtonText="Confirm Action"
        secondaryButtonText="Cancel Action"
        onPrimaryClick={onPrimaryMock}
        onSecondaryClick={onSecondaryMock}
      />
    );

    fireEvent.press(getByText('Confirm Action'));
    expect(onPrimaryMock).toHaveBeenCalledTimes(1);

    fireEvent.press(getByText('Cancel Action'));
    expect(onSecondaryMock).toHaveBeenCalledTimes(1);
  });

  it('should render custom children when provided', () => {
    const { getByText, queryByText } = renderWithTheme(
      <Ux4gCard title="Ignored Title">
        <Text>Custom Child Content</Text>
      </Ux4gCard>
    );

    expect(getByText('Custom Child Content')).toBeTruthy();
    expect(queryByText('Ignored Title')).toBeNull();
  });
});
