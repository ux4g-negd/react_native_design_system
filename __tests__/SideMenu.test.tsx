import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import {
  Ux4gThemeProvider,
  Ux4gSideMenu,
  Ux4gDrawer,
  Ux4gSideMenuSection,
  Ux4gSideMenuItem,
} from '../src';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<Ux4gThemeProvider>{ui}</Ux4gThemeProvider>);
};

const mockSections: Ux4gSideMenuSection[] = [
  {
    key: 'services-section',
    title: 'SERVICES',
    items: [
      { key: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
      {
        key: 'applications',
        label: 'Applications',
        icon: 'applications',
        children: [
          { key: 'in-progress', label: 'In progress', icon: 'applications' },
          { key: 'approved', label: 'Approved', icon: 'applications' },
        ],
      },
      { key: 'notifications', label: 'Notifications', icon: 'alerts', badge: 3 },
    ],
  },
  {
    key: 'account-section',
    title: 'ACCOUNT',
    items: [
      { key: 'my-account', label: 'My account', icon: 'account-circle' },
      { key: 'help-support', label: 'Help & support', icon: 'help' },
    ],
  },
];

describe('Ux4gSideMenu / Drawer Component Suite', () => {
  describe('Rendering & Structure', () => {
    it('renders header, title, subtitle, and close button when open', () => {
      const onCloseMock = jest.fn();
      const { getByText, getByTestId } = renderWithTheme(
        <Ux4gSideMenu
          isOpen={true}
          onClose={onCloseMock}
          title="Revenue Department"
          subtitle="Government of India"
          testID="test-side-menu"
        />
      );

      expect(getByTestId('test-side-menu')).toBeTruthy();
      expect(getByText('Revenue Department')).toBeTruthy();
      expect(getByText('Government of India')).toBeTruthy();
      expect(getByTestId('test-side-menu-close-btn')).toBeTruthy();
    });

    it('triggers onClose when close "X" button is pressed', () => {
      const onCloseMock = jest.fn();
      const { getByTestId } = renderWithTheme(
        <Ux4gSideMenu
          isOpen={true}
          onClose={onCloseMock}
          testID="test-side-menu"
        />
      );

      fireEvent.press(getByTestId('test-side-menu-close-btn'));
      expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    it('triggers onClose when backdrop is pressed', () => {
      const onCloseMock = jest.fn();
      const { getByTestId } = renderWithTheme(
        <Ux4gSideMenu
          isOpen={true}
          onClose={onCloseMock}
          testID="test-side-menu"
        />
      );

      fireEvent.press(getByTestId('test-side-menu-backdrop'));
      expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('Sections, Items, & Selection', () => {
    it('renders default sections and all menu items', () => {
      const { getByText } = renderWithTheme(
        <Ux4gSideMenu
          isOpen={true}
          onClose={jest.fn()}
          sections={mockSections}
        />
      );

      expect(getByText('SERVICES')).toBeTruthy();
      expect(getByText('ACCOUNT')).toBeTruthy();
      expect(getByText('Dashboard')).toBeTruthy();
      expect(getByText('Applications')).toBeTruthy();
      expect(getByText('Notifications')).toBeTruthy();
      expect(getByText('My account')).toBeTruthy();
      expect(getByText('Help & support')).toBeTruthy();
    });

    it('renders badge on items with count', () => {
      const { getByText, getByTestId } = renderWithTheme(
        <Ux4gSideMenu
          isOpen={true}
          onClose={jest.fn()}
          sections={mockSections}
        />
      );

      expect(getByTestId('notifications-badge')).toBeTruthy();
      expect(getByText('3')).toBeTruthy();
    });

    it('handles item press and selection callback', () => {
      const onItemPressMock = jest.fn();
      const { getByText } = renderWithTheme(
        <Ux4gSideMenu
          isOpen={true}
          onClose={jest.fn()}
          sections={mockSections}
          onItemPress={onItemPressMock}
        />
      );

      fireEvent.press(getByText('Dashboard'));
      expect(onItemPressMock).toHaveBeenCalledWith(
        expect.objectContaining({ key: 'dashboard', label: 'Dashboard' }),
        0
      );
    });

    it('does not trigger onItemPress when item is disabled', () => {
      const onItemPressMock = jest.fn();
      const disabledSections: Ux4gSideMenuSection[] = [
        {
          title: 'SERVICES',
          items: [
            { key: 'dashboard', label: 'Dashboard', disabled: true },
          ],
        },
      ];

      const { getByText } = renderWithTheme(
        <Ux4gSideMenu
          isOpen={true}
          onClose={jest.fn()}
          sections={disabledSections}
          onItemPress={onItemPressMock}
        />
      );

      fireEvent.press(getByText('Dashboard'));
      expect(onItemPressMock).not.toHaveBeenCalled();
    });
  });

  describe('Accordion Sub-items Tree', () => {
    it('expands and collapses sub-items on pressing parent group', () => {
      const { getByText, queryByText } = renderWithTheme(
        <Ux4gSideMenu
          isOpen={true}
          onClose={jest.fn()}
          sections={mockSections}
        />
      );

      // Default expanded in state
      expect(getByText('In progress')).toBeTruthy();
      expect(getByText('Approved')).toBeTruthy();

      // Press Applications to collapse
      fireEvent.press(getByText('Applications'));
      expect(queryByText('In progress')).toBeNull();
      expect(queryByText('Approved')).toBeNull();

      // Press again to re-expand
      fireEvent.press(getByText('Applications'));
      expect(getByText('In progress')).toBeTruthy();
      expect(getByText('Approved')).toBeTruthy();
    });
  });

  describe('Search Bar Filtering', () => {
    it('filters items in real-time when typing in search bar', () => {
      const { getByTestId, getByText, queryByText } = renderWithTheme(
        <Ux4gSideMenu
          isOpen={true}
          onClose={jest.fn()}
          sections={mockSections}
          testID="test-menu"
        />
      );

      const searchInput = getByTestId('test-menu-search-input');
      expect(getByText('Dashboard')).toBeTruthy();
      expect(getByText('My account')).toBeTruthy();

      // Filter by 'account'
      fireEvent.changeText(searchInput, 'account');
      expect(getByText('My account')).toBeTruthy();
      expect(queryByText('Dashboard')).toBeNull();
    });

    it('does not render search bar when showSearch is false', () => {
      const { queryByTestId } = renderWithTheme(
        <Ux4gSideMenu
          isOpen={true}
          onClose={jest.fn()}
          sections={mockSections}
          showSearch={false}
          testID="test-menu-no-search"
        />
      );

      expect(queryByTestId('test-menu-no-search-search-input')).toBeNull();
    });
  });

  describe('Footer & Sign Out', () => {
    it('renders default Sign out button and fires onSignOut', () => {
      const onSignOutMock = jest.fn();
      const { getByText, getByTestId } = renderWithTheme(
        <Ux4gSideMenu
          isOpen={true}
          onClose={jest.fn()}
          onSignOut={onSignOutMock}
          testID="test-side-menu"
        />
      );

      expect(getByTestId('test-side-menu-sign-out')).toBeTruthy();
      expect(getByText('Sign out')).toBeTruthy();

      fireEvent.press(getByTestId('test-side-menu-sign-out'));
      expect(onSignOutMock).toHaveBeenCalledTimes(1);
    });

    it('supports custom footer component', () => {
      const { getByText } = renderWithTheme(
        <Ux4gSideMenu
          isOpen={true}
          onClose={jest.fn()}
          customFooter={<Text>Custom Footer Area</Text>}
        />
      );

      expect(getByText('Custom Footer Area')).toBeTruthy();
    });
  });

  describe('Position & Alias Export', () => {
    it('supports position="right" (right-to-left drawer)', () => {
      const { getByTestId } = renderWithTheme(
        <Ux4gSideMenu
          isOpen={true}
          onClose={jest.fn()}
          position="right"
          testID="right-drawer"
        />
      );
      expect(getByTestId('right-drawer')).toBeTruthy();
    });

    it('renders through Ux4gDrawer alias properly', () => {
      const { getByTestId } = renderWithTheme(
        <Ux4gDrawer
          isOpen={true}
          onClose={jest.fn()}
          testID="alias-drawer"
        />
      );
      expect(getByTestId('alias-drawer')).toBeTruthy();
    });
  });

  describe('Design Variants Suite', () => {
    it('renders Variant 1: Citizen profile layout with user avatar and footer branding', () => {
      const { getByText } = renderWithTheme(
        <Ux4gSideMenu
          isOpen={true}
          onClose={jest.fn()}
          variant="citizen"
          testID="citizen-menu"
        />
      );

      expect(getByText('Ramesh Kumar')).toBeTruthy();
      expect(getByText('Citizen')).toBeTruthy();
      expect(getByText('RK')).toBeTruthy();
      expect(getByText('My applications')).toBeTruthy();
      expect(getByText('My documents')).toBeTruthy();
      expect(getByText('Notifications')).toBeTruthy();
      expect(getByText('Profile & settings')).toBeTruthy();
      expect(getByText('Help & support')).toBeTruthy();
      expect(getByText('Sign out')).toBeTruthy();
      expect(getByText('Revenue Department')).toBeTruthy();
      expect(getByText('Government of India')).toBeTruthy();
    });

    it('renders Variant 2: Department Services layout with action required callout card', () => {
      const onVerifyMock = jest.fn();
      const { getByText } = renderWithTheme(
        <Ux4gSideMenu
          isOpen={true}
          onClose={jest.fn()}
          variant="department-services"
          actionCard={{
            tag: 'ACTION REQUIRED',
            title: 'Verify your Aadhaar',
            description: 'Complete identity verification to continue.',
            buttonText: 'Verify now',
            onButtonPress: onVerifyMock,
          }}
          testID="dept-services-menu"
        />
      );

      expect(getByText('Revenue Department')).toBeTruthy();
      expect(getByText('Kanpur division')).toBeTruthy();
      expect(getByText('SERVICES')).toBeTruthy();
      expect(getByText('WORKSPACE')).toBeTruthy();
      expect(getByText('Priority applications')).toBeTruthy();
      expect(getByText('Archive')).toBeTruthy();
      expect(getByText('ACTION REQUIRED')).toBeTruthy();
      expect(getByText('Verify your Aadhaar')).toBeTruthy();
      expect(getByText('Complete identity verification to continue.')).toBeTruthy();

      const verifyBtn = getByText('Verify now');
      expect(verifyBtn).toBeTruthy();
      fireEvent.press(verifyBtn);
      expect(onVerifyMock).toHaveBeenCalledTimes(1);
    });

    it('renders Variant 3: Department Switcher with avatar badges and pending status pill', () => {
      const { getByText } = renderWithTheme(
        <Ux4gSideMenu
          isOpen={true}
          onClose={jest.fn()}
          variant="department-switcher"
          testID="dept-switcher-menu"
        />
      );

      expect(getByText('Departments')).toBeTruthy();
      expect(getByText('Choose a department to work in.')).toBeTruthy();
      expect(getByText('RD')).toBeTruthy();
      expect(getByText('Revenue Department')).toBeTruthy();
      expect(getByText('Current department')).toBeTruthy();
      expect(getByText('TD')).toBeTruthy();
      expect(getByText('Transport Department')).toBeTruthy();
      expect(getByText('transport.up.gov.in')).toBeTruthy();
      expect(getByText('3 applications pending')).toBeTruthy();
      expect(getByText('Request department access')).toBeTruthy();
    });

    it('renders Variant 4: User Mailbox layout with folders and action links', () => {
      const { getByText } = renderWithTheme(
        <Ux4gSideMenu
          isOpen={true}
          onClose={jest.fn()}
          variant="mailbox"
          testID="mailbox-menu"
        />
      );

      expect(getByText('Ramesh Kumar')).toBeTruthy();
      expect(getByText('ramesh.kumar@gov.in')).toBeTruthy();
      expect(getByText('MAILBOX')).toBeTruthy();
      expect(getByText('Inbox')).toBeTruthy();
      expect(getByText('Assigned to me')).toBeTruthy();
      expect(getByText('FOLDERS')).toBeTruthy();
      expect(getByText('Sent')).toBeTruthy();
      expect(getByText('Drafts')).toBeTruthy();
      expect(getByText('Archive')).toBeTruthy();
      expect(getByText('Rejected applications')).toBeTruthy();
      expect(getByText('Customize inbox')).toBeTruthy();
      expect(getByText('Inbox settings')).toBeTruthy();
    });

    it('renders Variant 5: Centered Profile Summary layout with stats and action button', () => {
      const onViewProfileMock = jest.fn();
      const { getByText } = renderWithTheme(
        <Ux4gSideMenu
          isOpen={true}
          onClose={jest.fn()}
          variant="profile-summary"
          profileSummary={{
            name: 'Ramesh Kumar',
            role: 'Citizen',
            metaInfo: '12 applications · 3 actions required',
            actionLabel: 'View profile',
            onActionPress: onViewProfileMock,
          }}
          testID="profile-summary-menu"
        />
      );

      expect(getByText('RK')).toBeTruthy();
      expect(getByText('Ramesh Kumar')).toBeTruthy();
      expect(getByText('Citizen')).toBeTruthy();
      expect(getByText('12 applications · 3 actions required')).toBeTruthy();
      expect(getByText('ACCOUNT')).toBeTruthy();
      expect(getByText('APPLICATIONS')).toBeTruthy();
      expect(getByText('Track an application')).toBeTruthy();
      expect(getByText('SUPPORT')).toBeTruthy();

      const viewProfileBtn = getByText('View profile');
      expect(viewProfileBtn).toBeTruthy();
      fireEvent.press(viewProfileBtn);
      expect(onViewProfileMock).toHaveBeenCalledTimes(1);
    });
  });
});
