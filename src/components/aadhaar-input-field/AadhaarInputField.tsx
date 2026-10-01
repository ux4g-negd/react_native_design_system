import React, { useState } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { UX4GColors } from '../../foundation/colors';
import { Ux4gIcons } from '../../foundation/icons';
import {
  Ux4gInputField,
  Ux4gInputFieldSize,
  Ux4gInputFieldStatus,
} from '../input-field/InputField';

const _d: number[][] = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
  [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
  [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
  [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
  [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
  [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
  [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
  [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
];

const _p: number[][] = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
  [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
  [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
  [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
  [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
  [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
  [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
];

/**
 * Helper to compute hex with alpha or rgba color string.
 */
const addOpacityToHex = (color: string, opacity: number): string => {
  if (color && color.startsWith('#')) {
    let hex = color.replace('#', '');
    if (hex.length === 3) {
      hex = hex.split('').map((c) => c + c).join('');
    }
    if (hex.length === 6) {
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    if (hex.length === 8) {
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
  }
  return color;
};

/**
 * Verhoeff algorithm for Aadhaar validation.
 */
class VerhoeffAlgorithm {
  static validate(numStr: string): boolean {
    let c = 0;
    const myArray = numStr
      .split('')
      .map((char) => parseInt(char, 10))
      .reverse();

    for (let i = 0; i < myArray.length; i++) {
      if (isNaN(myArray[i])) return false;
      c = _d[c][_p[i % 8][myArray[i]]];
    }

    return c === 0;
  }
}

/**
 * Static utility to validate Aadhaar number using Verhoeff algorithm and UIDAI rules.
 */
export const validateAadhaar = (aadhaar: string): boolean => {
  const cleanAadhaar = aadhaar.replace(/\s+/g, '');
  if (cleanAadhaar.length !== 12) return false;
  if (/^[01]/.test(cleanAadhaar)) return false; // Aadhaar doesn't start with 0 or 1
  return VerhoeffAlgorithm.validate(cleanAadhaar);
};

/**
 * Utility to format Aadhaar digits with 4-4-4 spacing and optional 'X' masking.
 */
export const formatAadhaar = (
  digits: string,
  masked = false,
  maskAll = true
): string => {
  const clean = digits.replace(/[^0-9X]/gi, '').slice(0, 12);
  let formatted = '';
  for (let i = 0; i < clean.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formatted += ' ';
    }
    if (masked) {
      if (maskAll || i < 8) {
        formatted += 'X';
      } else {
        formatted += clean[i];
      }
    } else {
      formatted += clean[i];
    }
  }
  return formatted;
};

export interface Ux4gAadhaarInputFieldProps {
  /**
   * Current formatted Aadhaar string (`XXXX XXXX XXXX`).
   */
  value: string;

  /**
   * Callback triggered when the formatted text inside the field changes.
   */
  onValueChange: (value: string) => void;

  /**
   * Size of the input field (`small`, `medium`, `large`).
   * @default 'medium'
   */
  size?: Ux4gInputFieldSize;

  /**
   * Validation status (`defaultStatus`, `error`, `warning`, `success`).
   * @default 'defaultStatus'
   */
  status?: Ux4gInputFieldStatus;

  /**
   * Optional label displayed above the input box.
   * @default 'Aadhaar Number'
   */
  label?: string;

  /**
   * Whether the field is required (displays red `*`).
   * @default false
   */
  required?: boolean;

  /**
   * Placeholder hint text inside the input box when empty.
   * @default 'XXXX XXXX XXXX'
   */
  placeholder?: string;

  /**
   * Caption or validation helper text displayed below the input box.
   * @default 'Enter your 12-digit Aadhaar number'
   */
  caption?: string;

  /**
   * Optional leading widget/icon inside the left side of the input box.
   */
  leadingIcon?: React.ReactNode;

  /**
   * Optional trailing widget/icon inside the right side of the input box.
   */
  trailingIcon?: React.ReactNode;

  /**
   * Callback triggered when `trailingIcon` is pressed.
   */
  onTrailingIconPressed?: () => void;

  /**
   * Whether to display the eye toggle icon for masking / unmasking the Aadhaar number with 'X'.
   * @default false
   */
  showMaskToggle?: boolean;

  /**
   * Whether the Aadhaar number is currently masked (controlled mode).
   */
  isMasked?: boolean;

  /**
   * Initial masked state when uncontrolled and `showMaskToggle` is enabled.
   * @default false
   */
  defaultMasked?: boolean;

  /**
   * Callback triggered when the mask eye toggle is pressed.
   */
  onMaskToggle?: (isMasked: boolean) => void;

  /**
   * Whether to mask all digits (`XXXX XXXX XXXX`) instead of only first 8 digits.
   * @default true
   */
  maskAll?: boolean;

  /**
   * Whether the input field is interactive (`true`) or disabled (`false`).
   * @default true
   */
  enabled?: boolean;

  /**
   * Whether the input field is read-only (`true`) or editable (`false`).
   * @default false
   */
  readOnly?: boolean;

  /**
   * Optional override for the input value text style.
   */
  style?: StyleProp<TextStyle>;

  /**
   * Optional override for the label text style.
   */
  labelStyle?: StyleProp<TextStyle>;

  /**
   * Optional override for the placeholder text style.
   */
  placeholderStyle?: StyleProp<TextStyle>;

  /**
   * Optional override for the caption text style.
   */
  captionStyle?: StyleProp<TextStyle>;

  /**
   * Optional style for the outermost container wrapper.
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Test identifier.
   */
  testID?: string;
}

/**
 * **Ux4gAadhaarInputField**
 *
 * A specialized input field for Aadhaar numbers (12 digits), mirroring the Flutter
 * `Ux4gAadhaarInputField` (`aadhaar_input_field.dart`).
 *
 * Features:
 * - Auto-formatting (`XXXX XXXX XXXX`) up to 12 digits (14 characters with spaces).
 * - Numeric-only input restriction with 'X' cross character masking support.
 * - Built-in verification against UIDAI rules (no `0` or `1` leading digit) and Verhoeff checksum algorithm.
 * - Automatically transitions to `success` ("Valid Aadhaar number") or `error` ("Please enter a valid Aadhaar number") when 12 digits are completed if `status === 'defaultStatus'`.
 * - Optional eye toggle for masking/unmasking (`showMaskToggle`) with cross 'X' display.
 */
export const Ux4gAadhaarInputField: React.FC<Ux4gAadhaarInputFieldProps> & {
  validateAadhaar: (aadhaar: string) => boolean;
  formatAadhaar: (digits: string, masked?: boolean, maskAll?: boolean) => string;
} = ({
  value,
  onValueChange,
  size = 'medium',
  status = 'defaultStatus',
  label = 'Aadhaar Number',
  required = false,
  placeholder = 'XXXX XXXX XXXX',
  caption,
  leadingIcon,
  trailingIcon,
  onTrailingIconPressed,
  showMaskToggle = false,
  isMasked,
  defaultMasked = false,
  onMaskToggle,
  maskAll = true,
  enabled = true,
  readOnly = false,
  style,
  labelStyle,
  placeholderStyle,
  captionStyle,
  containerStyle,
  testID,
}) => {
    const theme = useUx4gTheme();
    const colors = theme.colors;
    const isDark = theme.isDark;

    const [internalMasked, setInternalMasked] = useState<boolean>(defaultMasked);
    const effectiveMasked = isMasked !== undefined ? isMasked : internalMasked;

    const handleToggleMask = () => {
      const nextMasked = !effectiveMasked;
      if (isMasked === undefined) {
        setInternalMasked(nextMasked);
      }
      onMaskToggle?.(nextMasked);
    };

    const currentRawDigits = value.replace(/[^0-9]/g, '').slice(0, 12);

    let currentStatus: Ux4gInputFieldStatus = status;
    let currentCaption: string | undefined = caption;

    if (currentRawDigits.length === 12) {
      if (status === 'defaultStatus') {
        if (validateAadhaar(currentRawDigits)) {
          currentStatus = 'success';
          currentCaption = caption !== undefined ? caption : 'Valid Aadhaar number';
        } else {
          currentStatus = 'error';
          currentCaption = caption !== undefined ? caption : 'Please enter a valid Aadhaar number';
        }
      }
    }

    const handleValueChange = (newText: string) => {
      if (!showMaskToggle || !effectiveMasked) {
        // Normal unmasked digit entry
        const digitsOnly = newText.replace(/\D/g, '').slice(0, 12);
        let formatted = '';
        for (let i = 0; i < digitsOnly.length; i++) {
          if (i > 0 && i % 4 === 0) {
            formatted += ' ';
          }
          formatted += digitsOnly[i];
        }
        onValueChange(formatted);
        return;
      }

      // Masked mode with 'X' cross characters
      const newTextClean = newText.replace(/\s+/g, '');
      let nextRaw = '';
      for (let i = 0; i < newTextClean.length && i < 12; i++) {
        const char = newTextClean[i];
        if (char === 'X' || char === 'x') {
          if (i < currentRawDigits.length) {
            nextRaw += currentRawDigits[i];
          }
        } else if (/\d/.test(char)) {
          nextRaw += char;
        }
      }

      let formatted = '';
      for (let i = 0; i < nextRaw.length; i++) {
        if (i > 0 && i % 4 === 0) {
          formatted += ' ';
        }
        formatted += nextRaw[i];
      }
      onValueChange(formatted);
    };

    const onSurfaceColor =
      colors.onSurface ?? (isDark ? UX4GColors.neutral0 : UX4GColors.neutral1000black);
    const iconColor = addOpacityToHex(onSurfaceColor, 0.5);

    let resolvedTrailingIcon = trailingIcon;
    let resolvedOnTrailingIconPressed = onTrailingIconPressed;

    if (showMaskToggle && trailingIcon === undefined) {
      resolvedTrailingIcon = effectiveMasked
        ? Ux4gIcons.visibilityOff({ size: 20, color: iconColor })
        : Ux4gIcons.visibility({ size: 20, color: iconColor });
      resolvedOnTrailingIconPressed = handleToggleMask;
    }

    const isCurrentlyMasked = showMaskToggle && effectiveMasked;
    const displayedValue = isCurrentlyMasked
      ? formatAadhaar(currentRawDigits, true, maskAll)
      : value;

    return (
      <Ux4gInputField
        value={displayedValue}
        onValueChange={handleValueChange}
        size={size}
        type={isCurrentlyMasked ? 'text' : 'number'}
        status={currentStatus}
        label={label}
        required={required}
        placeholder={placeholder}
        caption={currentCaption}
        leadingIcon={leadingIcon}
        trailingIcon={resolvedTrailingIcon}
        onTrailingIconPressed={resolvedOnTrailingIconPressed}
        enabled={enabled}
        readOnly={readOnly}
        maxLength={14} // 12 digits + 2 spaces
        style={style}
        labelStyle={labelStyle}
        placeholderStyle={placeholderStyle}
        captionStyle={captionStyle}
        containerStyle={containerStyle}
        testID={testID}
      />
    );
  };

Ux4gAadhaarInputField.validateAadhaar = validateAadhaar;
Ux4gAadhaarInputField.formatAadhaar = formatAadhaar;


