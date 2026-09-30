import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ux4gAadhaarInputField, validateAadhaar } from '../components/aadhaar-input-field/AadhaarInputField';
import { useUx4gTheme } from '../theme/Ux4gThemeContext';
import { Ux4gIcons } from '../foundation/icons';

/**
 * **AadhaarInputFieldShowcase**
 *
 * Comprehensive, exhaustive demonstration of `Ux4gAadhaarInputField`, exhibiting every single
 * configuration and validation state: live auto-formatting (`XXXX XXXX XXXX`), Verhoeff checksum validation,
 * eye toggle for masking (`showMaskToggle`), explicit validation statuses (`defaultStatus`, `success`, `error`, `warning`),
 * required states, custom icons, sizes (`small`, `medium`, `large`), and read-only/disabled locked states.
 */
export const AadhaarInputFieldShowcase: React.FC = () => {
  const { colors, typography, isDark } = useUx4gTheme();

  // Interactive live validation state
  const [aadhaarValue, setAadhaarValue] = useState('');
  const [iconValue, setIconValue] = useState('3675 9834 6015');

  // Eye toggle masking showcase states
  const [maskedValue1, setMaskedValue1] = useState('3675 9834 6015');
  const [maskedValue2, setMaskedValue2] = useState('');
  const [controlledMaskedValue, setControlledMaskedValue] = useState('4982 1735 9012');
  const [isCustomMasked, setIsCustomMasked] = useState(true);

  // Sizing variants state
  const [smallValue, setSmallValue] = useState('3675 9834 6015');
  const [mediumValue, setMediumValue] = useState('3675 9834 6015');
  const [largeValue, setLargeValue] = useState('3675 9834 6015');

  const cardStyle = [
    styles.card,
    {
      backgroundColor: colors.surface ?? (isDark ? '#18181B' : '#FFFFFF'),
      borderColor: isDark ? '#27272A' : '#E4E4E7',
    },
  ];

  const titleStyle = [styles.cardTitle, { color: colors.onSurface }];
  const subtitleStyle = [
    styles.cardSubtitle,
    { color: isDark ? '#A1A1AA' : '#71717A' },
  ];

  // Quick fill samples for Section 1
  const handleSetValidSample = () => {
    setAadhaarValue('3675 9834 6015');
  };

  const handleSetInvalidSample = () => {
    setAadhaarValue('2345 6789 0123'); // Fails Verhoeff checksum
  };

  const isCurrentValid = validateAadhaar(aadhaarValue);

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.onBackground }]}>
          🆔 Aadhaar Input Field All States (`Ux4gAadhaarInputField`)
        </Text>
        <Text style={subtitleStyle}>
          Exhaustive showcase exhibiting all possible states: Verhoeff validation, eye toggle for masking (`showMaskToggle`), explicit statuses (`defaultStatus`, `success`, `error`, `warning`), sizes, icons, and disabled/read-only locks.
        </Text>
      </View>

      {/* ── SECTION 1: Interactive Live Checksum & Auto-Formatting ────────── */}
      <View style={cardStyle}>
        <Text style={titleStyle}>1. Interactive Live Verhoeff Checksum & Auto-Formatting</Text>
        <Text style={subtitleStyle}>
          Type any 12 digits or click the quick fill buttons below. When 12 digits are reached, it automatically runs the Verhoeff algorithm and verifies UIDAI rules (no leading 0 or 1).
        </Text>

        <View style={styles.quickFillContainer}>
          <TouchableOpacity
            style={[styles.sampleButton, { backgroundColor: colors.success }]}
            onPress={handleSetValidSample}
          >
            <Text style={styles.sampleButtonText}>✓ Fill Valid Aadhaar (3675...)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.sampleButton, { backgroundColor: colors.error }]}
            onPress={handleSetInvalidSample}
          >
            <Text style={styles.sampleButtonText}>✕ Fill Invalid Aadhaar (2345...)</Text>
          </TouchableOpacity>
        </View>

        <Ux4gAadhaarInputField
          value={aadhaarValue}
          onValueChange={setAadhaarValue}
          required={true}
          leadingIcon={
            typeof Ux4gIcons.shield === 'function'
              ? Ux4gIcons.shield({ size: 18, color: colors.primary })
              : undefined
          }
        />

        <View style={[styles.statusBanner, { backgroundColor: isDark ? '#27272A' : '#F4F4F5' }]}>
          <Text style={[typography.bS_default, { color: colors.onSurface }]}>
            Current Raw Value: <Text style={{ fontWeight: '700' }}>{aadhaarValue.replace(/\s+/g, '') || '(empty)'}</Text>
          </Text>
          <Text style={[typography.bS_default, { color: isCurrentValid ? colors.success : colors.error, marginTop: 4, fontWeight: '700' }]}>
            Verhoeff Checksum Result: {isCurrentValid ? '✓ VALID' : aadhaarValue.replace(/\s+/g, '').length === 12 ? '✕ INVALID CHECKSUM OR LEADING DIGIT' : '(Enter 12 digits)'}
          </Text>
        </View>
      </View>

      {/* ── SECTION 2: Masking & Eye Toggle (`showMaskToggle`) ────────────── */}
      <View style={cardStyle}>
        <Text style={titleStyle}>2. Eye Toggle for Masking with 'X' Cross (`showMaskToggle`)</Text>
        <Text style={subtitleStyle}>
          Enabling `showMaskToggle = true` renders an interactive eye toggle icon (`visibility` / `visibility_off`) on the right side of the field. When masked, digits are replaced with 'X' cross characters (`XXXX XXXX XXXX`) instead of bullets/stars.
        </Text>

        {/* 2.1 Full X Masked */}
        <View style={styles.sectionRow}>
          <Ux4gAadhaarInputField
            label="Full 'X' Masked Aadhaar (`showMaskToggle = true`)"
            value={maskedValue1}
            onValueChange={setMaskedValue1}
            showMaskToggle={true}
            defaultMasked={true}
            maskAll={true}
            caption="Shows 'XXXX XXXX XXXX' when masked. Click the eye icon to reveal full digits."
          />
        </View>

        {/* 2.2 UIDAI Standard First-8 Digits Masked */}
        <View style={styles.sectionRow}>
          <Ux4gAadhaarInputField
            label="UIDAI Standard Masked Aadhaar (`maskAll = false`)"
            value={maskedValue1}
            onValueChange={setMaskedValue1}
            showMaskToggle={true}
            defaultMasked={true}
            maskAll={false}
            caption="First 8 digits masked with 'X' while last 4 remain visible: 'XXXX XXXX 6015'"
          />
        </View>

        {/* 2.3 Empty field matching design placeholder */}
        <View style={styles.sectionRow}>
          <Ux4gAadhaarInputField
            label="Empty Field with Eye Toggle Placeholder"
            value={maskedValue2}
            onValueChange={setMaskedValue2}
            showMaskToggle={true}
            defaultMasked={true}
            placeholder="XXXX XXXX XXXX"
            caption="Type 12 digits and toggle visibility with 'X' crosses at any time"
          />
        </View>

        {/* 2.4 Controlled Masking State */}
        <View style={styles.sectionRow}>
          <View style={styles.controlledHeaderRow}>
            <Text style={[typography.bS_default, { color: colors.onSurface, fontWeight: '600' }]}>
              External Mask State: <Text style={{ color: isCustomMasked ? colors.primary : colors.success }}>{isCustomMasked ? '🔒 Masked (X)' : '👁️ Visible'}</Text>
            </Text>
            <TouchableOpacity
              style={[styles.smallActionBtn, { backgroundColor: colors.primary }]}
              onPress={() => setIsCustomMasked((prev) => !prev)}
            >
              <Text style={styles.smallActionBtnText}>Toggle from External Button</Text>
            </TouchableOpacity>
          </View>

          <Ux4gAadhaarInputField
            label="Controlled Masking (`isMasked` & `onMaskToggle`)"
            value={controlledMaskedValue}
            onValueChange={setControlledMaskedValue}
            showMaskToggle={true}
            isMasked={isCustomMasked}
            onMaskToggle={setIsCustomMasked}
            caption="Synchronized with external app state"
          />
        </View>
      </View>

      {/* ── SECTION 3: All Validation States (`status` prop) ──────────────── */}
      <View style={cardStyle}>
        <Text style={titleStyle}>3. All Validation Status States (`status` prop)</Text>
        <Text style={subtitleStyle}>
          Illustrating all four semantic validation states (`defaultStatus`, `success`, `error`, and `warning`) along with their respective border colors and automatic status icons.
        </Text>

        <View style={styles.sectionRow}>
          <Ux4gAadhaarInputField
            label="1. Default State (`status = defaultStatus`)"
            value=""
            onValueChange={() => {}}
            status="defaultStatus"
            placeholder="XXXX XXXX XXXX"
            caption="Enter your 12-digit Aadhaar number"
          />
        </View>

        <View style={styles.sectionRow}>
          <Ux4gAadhaarInputField
            label="2. Success State (`status = success`)"
            value="3675 9834 6015"
            onValueChange={() => {}}
            status="success"
            caption="Valid Aadhaar number verified by Verhoeff checksum"
          />
        </View>

        <View style={styles.sectionRow}>
          <Ux4gAadhaarInputField
            label="3. Error State (`status = error`)"
            value="2345 6789 0123"
            onValueChange={() => {}}
            status="error"
            caption="Invalid Aadhaar: Dihedral Group D5 checksum mismatch"
          />
        </View>

        <View style={styles.sectionRow}>
          <Ux4gAadhaarInputField
            label="4. Warning State (`status = warning`)"
            value="3675 9834 6015"
            onValueChange={() => {}}
            status="warning"
            caption="Biometric e-KYC re-verification required within 15 days"
          />
        </View>
      </View>

      {/* ── SECTION 4: Field Configurations (`required`, `icons`) ─────────── */}
      <View style={cardStyle}>
        <Text style={titleStyle}>4. Required & Icon Configurations</Text>
        <Text style={subtitleStyle}>
          Demonstrating required red asterisks (`*`) alongside leading (`leadingIcon`) and trailing interactive icons (`trailingIcon`).
        </Text>

        <View style={styles.sectionRow}>
          <Ux4gAadhaarInputField
            label="Required Resident Aadhaar (`required = true`)"
            required={true}
            value={iconValue}
            onValueChange={setIconValue}
            leadingIcon={
              typeof Ux4gIcons.shield === 'function'
                ? Ux4gIcons.shield({ size: 18, color: colors.primary })
                : undefined
            }
            trailingIcon={
              typeof Ux4gIcons.close === 'function'
                ? Ux4gIcons.close({ size: 18, color: colors.onSurface })
                : undefined
            }
            onTrailingIconPressed={() => setIconValue('')}
            caption="Click the trailing close icon (`✕`) to clear the field input"
          />
        </View>
      </View>

      {/* ── SECTION 5: All Sizing Variants (`size` prop) ──────────────────── */}
      <View style={cardStyle}>
        <Text style={titleStyle}>5. All Sizing Variants (`size` prop)</Text>
        <Text style={subtitleStyle}>
          Supporting exact heights: `small` (`32px`), `medium` (`40px`), and `large` (`48px`).
        </Text>

        <View style={styles.sectionRow}>
          <Ux4gAadhaarInputField
            size="small"
            label="Small Aadhaar Input (`size = small, 32px`)"
            value={smallValue}
            onValueChange={setSmallValue}
          />
        </View>

        <View style={styles.sectionRow}>
          <Ux4gAadhaarInputField
            size="medium"
            label="Medium Aadhaar Input (`size = medium, 40px - default`)"
            value={mediumValue}
            onValueChange={setMediumValue}
          />
        </View>

        <View style={styles.sectionRow}>
          <Ux4gAadhaarInputField
            size="large"
            label="Large Aadhaar Input (`size = large, 48px`)"
            value={largeValue}
            onValueChange={setLargeValue}
          />
        </View>
      </View>

      {/* ── SECTION 6: Read-Only & Disabled States ─────────────────────────── */}
      <View style={cardStyle}>
        <Text style={titleStyle}>6. Read-Only & Disabled States</Text>
        <Text style={subtitleStyle}>
          Locked non-editable states (`readOnly = true` and `enabled = false`).
        </Text>

        <View style={styles.sectionRow}>
          <Ux4gAadhaarInputField
            label="Verified Resident Record (`readOnly = true`)"
            value="3675 9834 6015"
            onValueChange={() => {}}
            readOnly={true}
            status="success"
            caption="Input locked: value is selectable/copyable but cannot be modified"
          />
        </View>

        <View style={styles.sectionRow}>
          <Ux4gAadhaarInputField
            label="Archived Citizen File (`enabled = false`)"
            value="5689 1234 9087"
            onValueChange={() => {}}
            enabled={false}
            caption="Input disabled: opacities dimmed to 0.38 (`disabledTitleColor`)"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 64,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 6,
  },
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    marginBottom: 16,
    lineHeight: 18,
  },
  quickFillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  sampleButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  sampleButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  controlledHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    flexWrap: 'wrap',
    gap: 8,
  },
  smallActionBtn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  smallActionBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  statusBanner: {
    marginTop: 14,
    padding: 12,
    borderRadius: 8,
  },
  sectionRow: {
    marginBottom: 16,
  },
});

