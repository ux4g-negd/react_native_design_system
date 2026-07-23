import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import { Ux4gStatusBanner, Ux4gThemeProvider } from '../src';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<Ux4gThemeProvider>{ui}</Ux4gThemeProvider>);
};

describe('Ux4gStatusBanner Component', () => {
  it('should render banner with title and subtitle', () => {
    const { getByText } = renderWithTheme(
      <Ux4gStatusBanner
        variant="warningLight"
        title="Test Warning"
        subtitle="This is a test subtitle description"
      />
    );

    expect(getByText('Test Warning')).toBeTruthy();
    expect(getByText('This is a test subtitle description')).toBeTruthy();
  });

  it('should render all 8 visual variants without throwing', () => {
    const variants = [
      'warningLight',
      'warningSolid',
      'errorLight',
      'successLight',
      'savingLight',
      'infoLight',
      'neutralLight',
      'primaryLight',
    ] as const;

    variants.forEach((v) => {
      const { getByText } = renderWithTheme(
        <Ux4gStatusBanner variant={v} title={`Banner ${v}`} />
      );
      expect(getByText(`Banner ${v}`)).toBeTruthy();
    });
  });

  it('should render leading, trailing icons, and badge when provided', () => {
    const { getByText } = renderWithTheme(
      <Ux4gStatusBanner
        variant="successLight"
        title="Verified Title"
        leadingIcon={<Text>⚡</Text>}
        trailingIcon={<Text>🔒</Text>}
        badge={<Text>BADGE</Text>}
      />
    );

    expect(getByText('Verified Title')).toBeTruthy();
    expect(getByText('⚡')).toBeTruthy();
    expect(getByText('🔒')).toBeTruthy();
    expect(getByText('BADGE')).toBeTruthy();
  });

  it('should render custom subtitleWidget overriding string subtitle', () => {
    const { getByText, queryByText } = renderWithTheme(
      <Ux4gStatusBanner
        variant="infoLight"
        title="Custom Subtitle Widget"
        subtitle="Ignored String Subtitle"
        subtitleWidget={<Text>Custom Widget Subtitle</Text>}
      />
    );

    expect(getByText('Custom Subtitle Widget')).toBeTruthy();
    expect(getByText('Custom Widget Subtitle')).toBeTruthy();
    expect(queryByText('Ignored String Subtitle')).toBeNull();
  });

  it('should render actions row when actions list is provided', () => {
    const { getByText } = renderWithTheme(
      <Ux4gStatusBanner
        variant="primaryLight"
        title="Actionable Banner"
        actions={[
          <Text key="1">Action One</Text>,
          <Text key="2">Action Two</Text>,
        ]}
      />
    );

    expect(getByText('Actionable Banner')).toBeTruthy();
    expect(getByText('Action One')).toBeTruthy();
    expect(getByText('Action Two')).toBeTruthy();
  });

  it('should fire onDismiss callback when dismiss button is pressed', () => {
    const onDismissMock = jest.fn();
    const { getByTestId } = renderWithTheme(
      <Ux4gStatusBanner
        testID="test-banner"
        variant="warningLight"
        title="Dismissable Banner"
        onDismiss={onDismissMock}
      />
    );

    const dismissBtn = getByTestId('test-banner-dismiss');
    fireEvent.press(dismissBtn);
    expect(onDismissMock).toHaveBeenCalledTimes(1);
  });
});
