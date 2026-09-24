import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import {
  Ux4gThemeProvider,
  Ux4gBottomNavigationBar,
  Ux4gPillBottomNavBar,
  Ux4gBarBottomNavBar,
  Ux4gPlainBottomNavBar,
  Ux4gFloatingBottomNavBar,
  Ux4gCenterActionBottomNavBar,
  Ux4gBottomNavItem,
} from '../src';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<Ux4gThemeProvider>{ui}</Ux4gThemeProvider>);
};

const mockItems: Ux4gBottomNavItem[] = [
  { key: 'home', label: 'Home', icon: 'home' },
  { key: 'services', label: 'Services', icon: 'services' },
  { key: 'status', label: 'Status', icon: 'status' },
  { key: 'alerts', label: 'Alerts', icon: 'alerts', badge: 3 },
  { key: 'profile', label: 'Profile', icon: 'profile' },
];

describe('Ux4gBottomNavigationBar Component Suite', () => {
  describe('Rendering & Basic Interactions', () => {
    it('renders all tab items correctly with their labels and icons', () => {
      const { getByText, getByTestId } = renderWithTheme(
        <Ux4gBottomNavigationBar items={mockItems} testID="test-bottom-nav" />
      );

      expect(getByTestId('test-bottom-nav')).toBeTruthy();
      expect(getByText('Home')).toBeTruthy();
      expect(getByText('Services')).toBeTruthy();
      expect(getByText('Status')).toBeTruthy();
      expect(getByText('Alerts')).toBeTruthy();
      expect(getByText('Profile')).toBeTruthy();
    });

    it('triggers onTabChange when a tab is pressed in uncontrolled mode', () => {
      const onTabChangeMock = jest.fn();
      const { getByText } = renderWithTheme(
        <Ux4gBottomNavigationBar
          items={mockItems}
          defaultSelectedIndex={0}
          onTabChange={onTabChangeMock}
        />
      );

      fireEvent.press(getByText('Services'));
      expect(onTabChangeMock).toHaveBeenCalledTimes(1);
      expect(onTabChangeMock).toHaveBeenCalledWith(1, mockItems[1]);
    });

    it('respects controlled selectedIndex prop', () => {
      const { getByText, rerender } = renderWithTheme(
        <Ux4gBottomNavigationBar items={mockItems} selectedIndex={0} />
      );

      const homeLabel = getByText('Home');
      expect(homeLabel).toBeTruthy();

      rerender(
        <Ux4gThemeProvider>
          <Ux4gBottomNavigationBar items={mockItems} selectedIndex={2} />
        </Ux4gThemeProvider>
      );

      const statusLabel = getByText('Status');
      expect(statusLabel).toBeTruthy();
    });

    it('does not trigger onTabChange when a disabled tab is pressed', () => {
      const onTabChangeMock = jest.fn();
      const itemsWithDisabled: Ux4gBottomNavItem[] = [
        ...mockItems.slice(0, 2),
        { key: 'status', label: 'Status', icon: 'status', disabled: true },
        ...mockItems.slice(3),
      ];

      const { getByText } = renderWithTheme(
        <Ux4gBottomNavigationBar
          items={itemsWithDisabled}
          onTabChange={onTabChangeMock}
        />
      );

      fireEvent.press(getByText('Status'));
      expect(onTabChangeMock).not.toHaveBeenCalled();
    });
  });

  describe('Indicator Variants (Pill, Bar, Plain)', () => {
    it('renders Pill indicator variant by default or via Ux4gPillBottomNavBar', () => {
      const { getByTestId } = renderWithTheme(
        <Ux4gPillBottomNavBar items={mockItems} testID="pill-nav" />
      );
      expect(getByTestId('pill-nav')).toBeTruthy();
    });

    it('renders Bar indicator variant via Ux4gBarBottomNavBar', () => {
      const { getByTestId } = renderWithTheme(
        <Ux4gBarBottomNavBar items={mockItems} testID="bar-nav" />
      );
      expect(getByTestId('bar-nav')).toBeTruthy();
    });

    it('renders Plain indicator variant via Ux4gPlainBottomNavBar', () => {
      const { getByTestId } = renderWithTheme(
        <Ux4gPlainBottomNavBar items={mockItems} testID="plain-nav" />
      );
      expect(getByTestId('plain-nav')).toBeTruthy();
    });
  });

  describe('Layout Shapes (Top-Rounded, Floating-Pill, Icon-Only, Centre-Action)', () => {
    it('renders top-rounded shape variant', () => {
      const { getByTestId } = renderWithTheme(
        <Ux4gBottomNavigationBar
          items={mockItems}
          variant="top-rounded"
          testID="top-rounded-nav"
        />
      );
      expect(getByTestId('top-rounded-nav')).toBeTruthy();
    });

    it('renders icon-only variant without text labels', () => {
      const { queryByText, getByTestId } = renderWithTheme(
        <Ux4gBottomNavigationBar
          items={mockItems}
          variant="icon-only"
          testID="icon-only-nav"
        />
      );
      expect(getByTestId('icon-only-nav')).toBeTruthy();
      expect(queryByText('Home')).toBeNull();
      expect(queryByText('Services')).toBeNull();
    });

    it('renders floating-pill shape via Ux4gFloatingBottomNavBar', () => {
      const { getByTestId } = renderWithTheme(
        <Ux4gFloatingBottomNavBar items={mockItems} testID="floating-nav" />
      );
      expect(getByTestId('floating-nav')).toBeTruthy();
    });

    it('renders centre-action variant with prominent center button (+)', () => {
      const onCenterPressMock = jest.fn();
      const centreItems = mockItems.slice(0, 4);

      const { getByTestId } = renderWithTheme(
        <Ux4gCenterActionBottomNavBar
          items={centreItems}
          centerAction={{
            onPress: onCenterPressMock,
            testID: 'center-fab',
          }}
          testID="centre-action-nav"
        />
      );

      expect(getByTestId('centre-action-nav')).toBeTruthy();
      const centerBtn = getByTestId('center-fab');
      expect(centerBtn).toBeTruthy();

      fireEvent.press(centerBtn);
      expect(onCenterPressMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('Badges and Custom Elements', () => {
    it('renders numerical and string badges correctly on tabs', () => {
      const { getByText } = renderWithTheme(
        <Ux4gBottomNavigationBar items={mockItems} />
      );
      expect(getByText('3')).toBeTruthy();
    });

    it('renders custom ReactNode and function icons', () => {
      const customItems: Ux4gBottomNavItem[] = [
        {
          key: 'custom-node',
          label: 'Custom',
          icon: <Text testID="custom-icon-node">Node</Text>,
        },
        {
          key: 'custom-fn',
          label: 'Function',
          icon: (active, color) => (
            <Text testID="custom-icon-fn" style={{ color }}>
              {active ? 'Active' : 'Inactive'}
            </Text>
          ),
        },
      ];

      const { getByTestId } = renderWithTheme(
        <Ux4gBottomNavigationBar items={customItems} />
      );

      expect(getByTestId('custom-icon-node')).toBeTruthy();
      expect(getByTestId('custom-icon-fn')).toBeTruthy();
    });
  });
});
