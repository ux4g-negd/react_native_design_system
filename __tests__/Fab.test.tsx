import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Ux4gFab } from '../src/components/fab/Fab';
import { Ux4gThemeProvider } from '../src/theme/Ux4gThemeContext';

describe('Ux4gFab', () => {
  const renderWithTheme = (ui: React.ReactElement) =>
    render(<Ux4gThemeProvider>{ui}</Ux4gThemeProvider>);

  it('renders standard icon FAB', () => {
    const { getByRole } = renderWithTheme(
      <Ux4gFab variant="icon" icon="plus" accessibilityLabel="Add" />
    );
    expect(getByRole('button')).toBeTruthy();
  });

  it('renders extended labelled FAB with custom label', () => {
    const { getByText } = renderWithTheme(
      <Ux4gFab variant="labelled" label="Create New" />
    );
    expect(getByText('Create New')).toBeTruthy();
  });

  it('handles onPress callback', () => {
    const onPress = jest.fn();
    const { getByRole } = renderWithTheme(
      <Ux4gFab variant="icon" onPress={onPress} accessibilityLabel="Add" />
    );
    fireEvent.press(getByRole('button'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('supports aboveBottomNav for sequential stacking above BottomNavigationBar', () => {
    const { getByRole } = renderWithTheme(
      <Ux4gFab
        position="bottom-right"
        aboveBottomNav
        accessibilityLabel="Add"
      />
    );
    expect(getByRole('button')).toBeTruthy();
  });

  it('supports custom bottomNavOffset numeric height', () => {
    const { getByRole } = renderWithTheme(
      <Ux4gFab
        position="bottom-right"
        bottomNavOffset={64}
        offset={{ bottom: 20 }}
        accessibilityLabel="Add"
      />
    );
    expect(getByRole('button')).toBeTruthy();
  });

  it('renders speed-dial menu variant with action items', () => {
    const onActionPress = jest.fn();
    const actions = [
      { id: '1', label: 'Item 1', icon: 'message', onPress: onActionPress },
      { id: '2', label: 'Item 2', icon: 'share' },
    ];
    const { getByText, getByRole } = renderWithTheme(
      <Ux4gFab
        variant="menu-labelled"
        actions={actions}
        defaultOpen
        accessibilityLabel="Menu"
      />
    );
    expect(getByText('Item 1')).toBeTruthy();
    expect(getByText('Item 2')).toBeTruthy();
    fireEvent.press(getByText('Item 1'));
    expect(onActionPress).toHaveBeenCalledTimes(1);
  });
});
