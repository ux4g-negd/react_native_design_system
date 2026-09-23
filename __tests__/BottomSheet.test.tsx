import React from 'react';
import { Text } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import { Ux4gBottomSheet } from '../src/components/bottom-sheet/BottomSheet';
import { Ux4gThemeProvider } from '../src/theme/Ux4gThemeContext';

describe('Ux4gBottomSheet', () => {
  const renderWithTheme = (ui: React.ReactElement) =>
    render(<Ux4gThemeProvider>{ui}</Ux4gThemeProvider>);

  it('renders nothing when visible is false', () => {
    const { queryByText } = renderWithTheme(
      <Ux4gBottomSheet visible={false} onDismiss={jest.fn()} title="Header">
        <Text>Body</Text>
      </Ux4gBottomSheet>
    );
    expect(queryByText('Body')).toBeNull();
  });

  it('renders title, description and children when visible', () => {
    const { getByText } = renderWithTheme(
      <Ux4gBottomSheet
        visible
        onDismiss={jest.fn()}
        title="Header"
        description="Write description here"
      >
        <Text>Body</Text>
      </Ux4gBottomSheet>
    );
    expect(getByText('Header')).toBeTruthy();
    expect(getByText('Write description here')).toBeTruthy();
    expect(getByText('Body')).toBeTruthy();
  });

  it('calls onDismiss from the close button', () => {
    const onDismiss = jest.fn();
    const { getByTestId } = renderWithTheme(
      <Ux4gBottomSheet visible onDismiss={onDismiss} title="Header" testID="sheet" />
    );
    fireEvent.press(getByTestId('sheet-close'));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('calls onDismiss when the backdrop is pressed', () => {
    const onDismiss = jest.fn();
    const { getByTestId } = renderWithTheme(
      <Ux4gBottomSheet visible onDismiss={onDismiss} title="Header" testID="sheet" />
    );
    fireEvent.press(getByTestId('sheet-backdrop'));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('does not dismiss on backdrop press when dismissOnBackdropPress is false', () => {
    const onDismiss = jest.fn();
    const { getByTestId } = renderWithTheme(
      <Ux4gBottomSheet
        visible
        onDismiss={onDismiss}
        title="Header"
        dismissOnBackdropPress={false}
        testID="sheet"
      />
    );
    fireEvent.press(getByTestId('sheet-backdrop'));
    expect(onDismiss).not.toHaveBeenCalled();
  });

  it('fires footer callbacks', () => {
    const onPrimaryPress = jest.fn();
    const onSecondaryPress = jest.fn();
    const { getByTestId } = renderWithTheme(
      <Ux4gBottomSheet
        visible
        onDismiss={jest.fn()}
        title="Header"
        onPrimaryPress={onPrimaryPress}
        onSecondaryPress={onSecondaryPress}
        testID="sheet"
      />
    );
    fireEvent.press(getByTestId('sheet-primary'));
    fireEvent.press(getByTestId('sheet-secondary'));
    expect(onPrimaryPress).toHaveBeenCalledTimes(1);
    expect(onSecondaryPress).toHaveBeenCalledTimes(1);
  });

  it('hides header and footer blocks when disabled', () => {
    const { queryByText, queryByTestId } = renderWithTheme(
      <Ux4gBottomSheet
        visible
        onDismiss={jest.fn()}
        title="Header"
        showHeader={false}
        showFooter={false}
        testID="sheet"
      />
    );
    expect(queryByText('Header')).toBeNull();
    expect(queryByTestId('sheet-primary')).toBeNull();
    expect(queryByTestId('sheet-secondary')).toBeNull();
  });

  it('renders each size preset', () => {
    (['peek', 'half', 'expanded', 'full'] as const).forEach((size) => {
      const { toJSON } = renderWithTheme(
        <Ux4gBottomSheet visible onDismiss={jest.fn()} size={size} title="Header" />
      );
      expect(toJSON()).toBeTruthy();
    });
  });
});
