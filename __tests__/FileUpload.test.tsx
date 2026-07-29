/**
 * Unit tests for Ux4gFileUpload component.
 */

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

// ── Ux4gThemeProvider & Ux4gToastProvider wrappers ──────────────────────
import { Ux4gThemeProvider } from '../src/theme/Ux4gThemeContext';

let Ux4gToastProvider: React.FC<{ children: React.ReactNode }>;
try {
  Ux4gToastProvider = require('../src/components/toast/Toast').Ux4gToastProvider;
} catch (_e) {
  Ux4gToastProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
}

import {
  Ux4gFileUpload,
  UploadStatus,
  formatFileSize,
} from '../src/components/file-upload';
import type { UploadedFile } from '../src/components/file-upload';

const wrap = (ui: React.ReactElement) =>
  render(
    <Ux4gThemeProvider>
      <Ux4gToastProvider>{ui}</Ux4gToastProvider>
    </Ux4gThemeProvider>,
  );

// ═════════════════════════════════════════════════════════════════════════
// TESTS
// ═════════════════════════════════════════════════════════════════════════

describe('Ux4gFileUpload Component', () => {
  // ── formatFileSize helper ──────────────────────────────────────────────
  it('should format file sizes correctly', () => {
    expect(formatFileSize(500)).toBe('500 B');
    expect(formatFileSize(1024)).toBe('1.00 KB');
    expect(formatFileSize(1536)).toBe('1.50 KB');
    expect(formatFileSize(1024 * 1024)).toBe('1.00 MB');
    expect(formatFileSize(5 * 1024 * 1024)).toBe('5.00 MB');
  });

  // ── Drop zone rendering ────────────────────────────────────────────────
  it('should render drop zone with title, extension hint, and action buttons', () => {
    const { getByText, getByTestId } = wrap(<Ux4gFileUpload />);

    expect(getByText('Upload Documents')).toBeTruthy();
    expect(getByText(/File type:/)).toBeTruthy();
    expect(getByTestId('upload-button')).toBeTruthy();
    expect(getByTestId('scan-button')).toBeTruthy();
  });

  // ── Pre-populated files ────────────────────────────────────────────────
  it('should render pre-populated initial files', () => {
    const files: UploadedFile[] = [
      {
        id: 'test-1',
        name: 'Document.pdf',
        fileSize: 2048000,
        status: UploadStatus.success,
        progress: 1.0,
      },
    ];

    const { getByText } = wrap(<Ux4gFileUpload initialFiles={files} />);

    expect(getByText('Document.pdf')).toBeTruthy();
    expect(getByText('1.95 MB')).toBeTruthy();
  });

  // ── Remove file ────────────────────────────────────────────────────────
  it('should remove file from list when close button is tapped', () => {
    const files: UploadedFile[] = [
      {
        id: 'rem-1',
        name: 'ToRemove.png',
        fileSize: 500000,
        status: UploadStatus.success,
        progress: 1.0,
      },
    ];
    const onChange = jest.fn();

    const { getByTestId, queryByText } = wrap(
      <Ux4gFileUpload initialFiles={files} onFilesChanged={onChange} />,
    );

    const removeBtn = getByTestId('remove-file-rem-1');
    fireEvent.press(removeBtn);

    expect(queryByText('ToRemove.png')).toBeNull();
    expect(onChange).toHaveBeenCalledWith([]);
  });

  // ── Progress bar rendering ─────────────────────────────────────────────
  it('should render file uploading progress bar and percentage', () => {
    const files: UploadedFile[] = [
      {
        id: 'prog-1',
        name: 'Uploading.pdf',
        fileSize: 3000000,
        status: UploadStatus.uploading,
        progress: 0.45,
      },
    ];

    const { getByText } = wrap(<Ux4gFileUpload initialFiles={files} />);

    expect(getByText('Uploading.pdf')).toBeTruthy();
    expect(getByText('45%')).toBeTruthy();
  });

  // ── Error row with Retry ───────────────────────────────────────────────
  it('should render error message and Retry link for failed file uploads', () => {
    const files: UploadedFile[] = [
      {
        id: 'err-1',
        name: 'FailedUpload.jpg',
        fileSize: 1200000,
        status: UploadStatus.error,
        progress: 0.2,
        errorMessage: 'Upload failed. Please try again.',
      },
    ];

    const { getByText } = wrap(<Ux4gFileUpload initialFiles={files} />);

    expect(getByText('FailedUpload.jpg')).toBeTruthy();
    expect(getByText('Upload failed. Please try again.')).toBeTruthy();
    expect(getByText('Retry')).toBeTruthy();
  });

  // ── Dashed border style ────────────────────────────────────────────────
  it('should render dashed border style when specified', () => {
    const { getByText } = wrap(<Ux4gFileUpload borderStyle="dashed" />);

    // Component should still render the drop zone content
    expect(getByText('Upload Documents')).toBeTruthy();
  });
});
