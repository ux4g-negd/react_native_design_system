import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import {
  Ux4gPaginationDotted,
  Ux4gPaginationIndicator,
  Ux4gPagination,
  Ux4gThemeProvider,
} from '../src';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<Ux4gThemeProvider>{ui}</Ux4gThemeProvider>);
};

describe('Ux4gPaginationDotted Component', () => {
  it('should render pagination with dots and arrows', () => {
    const onPageChange = jest.fn();
    const { getByTestId } = renderWithTheme(
      <Ux4gPaginationDotted
        testID="pagination"
        totalPageCount={5}
        currentPageIndex={1}
        onPageChange={onPageChange}
      />
    );

    expect(getByTestId('pagination')).toBeTruthy();
    expect(getByTestId('pagination-dot-0')).toBeTruthy();
    expect(getByTestId('pagination-dot-4')).toBeTruthy();
    expect(getByTestId('pagination-arrow-left')).toBeTruthy();
    expect(getByTestId('pagination-arrow-right')).toBeTruthy();
  });

  it('should fire onPageChange when dot or arrow is pressed', () => {
    const onPageChange = jest.fn();
    const { getByTestId } = renderWithTheme(
      <Ux4gPaginationDotted
        testID="pagination"
        totalPageCount={5}
        currentPageIndex={1}
        onPageChange={onPageChange}
      />
    );

    fireEvent.press(getByTestId('pagination-dot-3'));
    expect(onPageChange).toHaveBeenCalledWith(3);

    fireEvent.press(getByTestId('pagination-arrow-left'));
    expect(onPageChange).toHaveBeenCalledWith(0);

    fireEvent.press(getByTestId('pagination-arrow-right'));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it('should support capsule variant and arrowsOnRight placement', () => {
    const { getByTestId } = renderWithTheme(
      <Ux4gPaginationDotted
        testID="pagination-capsule"
        variant="capsule"
        arrowsOnRight={true}
        totalPageCount={4}
        currentPageIndex={0}
        onPageChange={jest.fn()}
      />
    );

    expect(getByTestId('pagination-capsule')).toBeTruthy();
    expect(getByTestId('pagination-capsule-arrow-right')).toBeTruthy();
  });

  it('should support capsule variant without arrows', () => {
    const { getByTestId, queryByTestId } = renderWithTheme(
      <Ux4gPaginationDotted
        testID="pagination-capsule-noarrows"
        variant="capsule"
        showArrows={false}
        totalPageCount={7}
        currentPageIndex={2}
        onPageChange={jest.fn()}
      />
    );

    expect(getByTestId('pagination-capsule-noarrows')).toBeTruthy();
    expect(getByTestId('pagination-capsule-noarrows-dot-2')).toBeTruthy();
    expect(queryByTestId('pagination-capsule-noarrows-arrow-left')).toBeNull();
  });

  it('should support Ux4gPaginationIndicator alias', () => {
    const { getByTestId } = renderWithTheme(
      <Ux4gPaginationIndicator
        testID="pagination-alias"
        totalPageCount={3}
        currentPageIndex={0}
        onPageChange={jest.fn()}
      />
    );

    expect(getByTestId('pagination-alias')).toBeTruthy();
  });

  it('should support Ux4gPagination alias', () => {
    const { getByTestId } = renderWithTheme(
      <Ux4gPagination
        testID="pagination-alias-2"
        totalPageCount={3}
        currentPageIndex={0}
        onPageChange={jest.fn()}
      />
    );

    expect(getByTestId('pagination-alias-2')).toBeTruthy();
  });

  it('should disable arrow navigation when at bounds or enabled is false', () => {
    const onPageChange = jest.fn();
    const { getByTestId } = renderWithTheme(
      <Ux4gPaginationDotted
        testID="pagination-disabled"
        enabled={false}
        totalPageCount={4}
        currentPageIndex={0}
        onPageChange={onPageChange}
      />
    );

    fireEvent.press(getByTestId('pagination-disabled-dot-2'));
    expect(onPageChange).not.toHaveBeenCalled();
  });
});
