import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableWithoutFeedback,
} from 'react-native';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { Ux4gIcons } from '../../foundation/icons';
import { Ux4gButton } from '../button';
import { Ux4gInputFieldStatus } from '../input-field';

export interface Ux4gTimeOfDay {
  /** Hour in 24-hour format (0–23) */
  hour: number;
  /** Minute (0–59) */
  minute: number;
}

export interface Ux4gTimePickerProps {
  /** Initial selected time. */
  initialTime?: Ux4gTimeOfDay;
  /** Callback fired when a time is selected. */
  onTimeSelected?: (time: Ux4gTimeOfDay) => void;
  /** Placeholder hint text. Defaults to `'Select time'`. */
  placeholder?: string;
  /** Whether interaction is enabled. Defaults to `true`. */
  enabled?: boolean;
  /** Step interval for minute selection (e.g., 1, 5, 10, 15, 30). Defaults to `1`. */
  minuteInterval?: number;
  /** Label text rendered above field box. */
  label?: string;
  /** Description / caption text rendered below field box. */
  description?: string;
  /** Whether field is required (renders red `*` next to label). Defaults to `false`. */
  isRequired?: boolean;
  /** Alias for `isRequired`. Defaults to `false`. */
  required?: boolean;
  /** Status variant controlling border & caption color. Defaults to `'defaultStatus'`. */
  status?: Ux4gInputFieldStatus;
  /** Custom container style override. */
  style?: StyleProp<ViewStyle>;
}

const formatTime = (time: Ux4gTimeOfDay): string => {
  const isAm = time.hour < 12;
  const rawHour = time.hour % 12;
  const displayHour = rawHour === 0 ? 12 : rawHour;
  const hStr = String(displayHour).padStart(2, '0');
  const mStr = String(time.minute).padStart(2, '0');
  const period = isAm ? 'AM' : 'PM';
  return `${hStr}:${mStr} ${period}`;
};

export const Ux4gTimePicker: React.FC<Ux4gTimePickerProps> = ({
  initialTime,
  onTimeSelected,
  placeholder = 'Select time',
  enabled = true,
  minuteInterval = 1,
  label,
  description,
  isRequired = false,
  required = false,
  status = 'defaultStatus',
  style,
}) => {
  const { colors, typography } = useUx4gTheme();
  const showRequired = isRequired || required;

  const [selectedTime, setSelectedTime] = useState<Ux4gTimeOfDay | undefined>(initialTime);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    setSelectedTime(initialTime);
  }, [initialTime]);

  const isSelected = selectedTime !== undefined;

  // Colors logic
  const disabledBgColor = `${colors.onSurface}14`; // Muted filled background for disabled state (#EAEAEA / dark surface overlay)
  const disabledTextColor = `${colors.onSurface}60`; // 0.38 alpha muted gray

  const fieldBgColor = enabled ? colors.surface : disabledBgColor;

  let borderColor = 'transparent';
  if (enabled) {
    switch (status) {
      case 'error':
        borderColor = colors.error;
        break;
      case 'warning':
        borderColor = colors.warning;
        break;
      case 'success':
        borderColor = colors.success;
        break;
      case 'defaultStatus':
      default:
        borderColor = isSelected ? colors.primary : `${colors.onSurface}33`; // 0.20 alpha
        break;
    }
  }

  const textColor = enabled
    ? isSelected
      ? colors.onSurface
      : disabledTextColor
    : disabledTextColor;

  const iconColor = enabled
    ? isSelected
      ? colors.primary
      : disabledTextColor
    : disabledTextColor;

  const handleOpenPicker = () => {
    if (enabled) {
      setModalVisible(true);
    }
  };

  const handleDialogConfirm = (time: Ux4gTimeOfDay) => {
    setSelectedTime(time);
    setModalVisible(false);
    onTimeSelected?.(time);
  };

  const labelColor = enabled ? colors.onBackground : `${colors.onSurface}66`;
  let descriptionColor = `${colors.onSurface}99`; // 0.6 opacity
  if (!enabled) {
    descriptionColor = `${colors.onSurface}66`;
  } else {
    switch (status) {
      case 'error':
        descriptionColor = colors.error;
        break;
      case 'warning':
        descriptionColor = colors.warning;
        break;
      case 'success':
        descriptionColor = colors.success;
        break;
    }
  }

  const renderStatusIcon = () => {
    switch (status) {
      case 'error':
        return Ux4gIcons.error({ size: 14, color: descriptionColor });
      case 'warning':
        return Ux4gIcons.warning({ size: 14, color: descriptionColor });
      case 'success':
        return Ux4gIcons.success({ size: 14, color: descriptionColor });
      case 'defaultStatus':
      default:
        return Ux4gIcons.info({ size: 14, color: descriptionColor });
    }
  };

  return (
    <View style={[styles.container, style]}>
      {/* Label */}
      {label && (
        <View style={styles.labelRow}>
          <Text
            style={[
              styles.labelText,
              {
                fontSize: typography.bS_strong.fontSize,
                fontWeight: typography.bS_strong.fontWeight,
                color: labelColor,
              },
            ]}
          >
            {label}
          </Text>
          {showRequired && (
            <Text
              style={[
                styles.requiredAsterisk,
                {
                  fontSize: typography.bS_strong.fontSize,
                  fontWeight: typography.bS_strong.fontWeight,
                  color: colors.error,
                },
              ]}
            >
              *
            </Text>
          )}
        </View>
      )}

      {/* Field Trigger Box */}
      <TouchableOpacity
        activeOpacity={enabled ? 0.7 : 1}
        onPress={handleOpenPicker}
        disabled={!enabled}
      >
        <View
          style={[
            styles.fieldBox,
            {
              backgroundColor: fieldBgColor,
              borderColor,
            },
          ]}
        >
          <Text
            numberOfLines={1}
            style={[
              styles.fieldText,
              {
                fontSize: typography.bM_default.fontSize,
                fontWeight: typography.bM_default.fontWeight,
                color: textColor,
              },
            ]}
          >
            {selectedTime ? formatTime(selectedTime) : placeholder}
          </Text>
          {Ux4gIcons.time({ size: 20, color: iconColor })}
        </View>
      </TouchableOpacity>

      {/* Description / Caption */}
      {description && (
        <View style={styles.captionRow}>
          {renderStatusIcon()}
          <Text
            style={[
              styles.captionText,
              {
                fontSize: typography.bXS_default.fontSize,
                fontWeight: typography.bXS_default.fontWeight,
                color: descriptionColor,
              },
            ]}
          >
            {description}
          </Text>
        </View>
      )}

      {/* Modal Dialog */}
      {modalVisible && (
        <Ux4gTimePickerDialogModal
          visible={modalVisible}
          initialTime={selectedTime}
          minuteInterval={minuteInterval}
          onClose={() => setModalVisible(false)}
          onConfirm={handleDialogConfirm}
        />
      )}
    </View>
  );
};

// --- Dialog Modal Component ---

interface Ux4gTimePickerDialogModalProps {
  visible: boolean;
  initialTime?: Ux4gTimeOfDay;
  minuteInterval: number;
  onClose: () => void;
  onConfirm: (time: Ux4gTimeOfDay) => void;
}

const ITEM_HEIGHT = 44;

const Ux4gTimePickerDialogModal: React.FC<Ux4gTimePickerDialogModalProps> = ({
  visible,
  initialTime,
  minuteInterval,
  onClose,
  onConfirm,
}) => {
  const { colors, typography } = useUx4gTheme();

  const now = new Date();
  const initHour = initialTime ? initialTime.hour : now.getHours();
  const initMinute = initialTime ? initialTime.minute : now.getMinutes();

  // 12-hour calculations
  const initIsAm = initHour < 12;
  const init12Hour = initHour % 12 === 0 ? 12 : initHour % 12;

  // Minutes list stepping by minuteInterval
  const minutesList: number[] = [];
  for (let i = 0; i < 60; i += minuteInterval) {
    minutesList.push(i);
  }

  // Find closest minute item index
  let initMinuteVal = minutesList[0];
  let minDiff = 60;
  for (let m of minutesList) {
    const diff = Math.abs(initMinute - m);
    if (diff < minDiff) {
      minDiff = diff;
      initMinuteVal = m;
    }
  }

  const [selected12Hour, setSelected12Hour] = useState<number>(init12Hour);
  const [selectedMinute, setSelectedMinute] = useState<number>(initMinuteVal);
  const [isAm, setIsAm] = useState<boolean>(initIsAm);
  const [hasInteracted, setHasInteracted] = useState<boolean>(initialTime !== undefined);

  const hourScrollRef = useRef<ScrollView>(null);
  const minuteScrollRef = useRef<ScrollView>(null);

  const hoursList = Array.from({ length: 12 }, (_, i) => i + 1);

  useEffect(() => {
    // Scroll to initial selected items after modal layout
    setTimeout(() => {
      const hIndex = hoursList.indexOf(init12Hour);
      if (hIndex >= 0 && hourScrollRef.current) {
        hourScrollRef.current.scrollTo({ y: hIndex * ITEM_HEIGHT, animated: false });
      }
      const mIndex = minutesList.indexOf(initMinuteVal);
      if (mIndex >= 0 && minuteScrollRef.current) {
        minuteScrollRef.current.scrollTo({ y: mIndex * ITEM_HEIGHT, animated: false });
      }
    }, 50);
  }, []);

  const handleConfirm = () => {
    let final24Hour = selected12Hour;
    if (isAm && final24Hour === 12) {
      final24Hour = 0;
    } else if (!isAm && final24Hour !== 12) {
      final24Hour += 12;
    }
    onConfirm({ hour: final24Hour, minute: selectedMinute });
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={[styles.dialogBox, { backgroundColor: colors.surface }]}>
              {/* Header Titles */}
              <View style={styles.headerRow}>
                <View style={styles.headerCol}>
                  <Text style={[styles.headerTitle, { color: `${colors.onSurface}60` }]}>HH</Text>
                </View>
                <View style={styles.headerCol}>
                  <Text style={[styles.headerTitle, { color: `${colors.onSurface}60` }]}>MM</Text>
                </View>
                <View style={styles.headerCol} />
              </View>

              <View style={[styles.divider, { backgroundColor: `${colors.onSurface}1F` }]} />

              {/* Body Wheels */}
              <View style={styles.bodyContainer}>
                {/* Hours Column */}
                <View style={styles.columnFlex}>
                  <ScrollView
                    ref={hourScrollRef}
                    showsVerticalScrollIndicator={false}
                    snapToInterval={ITEM_HEIGHT}
                    decelerationRate="fast"
                    contentContainerStyle={styles.wheelScrollContent}
                  >
                    {hoursList.map((h) => {
                      const isSelected = h === selected12Hour;
                      return (
                        <TouchableOpacity
                          key={h}
                          activeOpacity={0.7}
                          onPress={() => {
                            setSelected12Hour(h);
                            setHasInteracted(true);
                          }}
                          style={[
                            styles.wheelItem,
                            {
                              backgroundColor:
                                isSelected && hasInteracted
                                  ? `${colors.primary}14`
                                  : 'transparent',
                            },
                          ]}
                        >
                          <Text
                            style={[
                              styles.wheelText,
                              {
                                fontSize: typography.bM_default.fontSize,
                                fontWeight: typography.bM_default.fontWeight,
                                color: isSelected && hasInteracted ? colors.primary : colors.onSurface,
                              },
                            ]}
                          >
                            {String(h).padStart(2, '0')}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </ScrollView>
                </View>

                <View style={[styles.verticalDivider, { backgroundColor: `${colors.onSurface}1F` }]} />

                {/* Minutes Column */}
                <View style={styles.columnFlex}>
                  <ScrollView
                    ref={minuteScrollRef}
                    showsVerticalScrollIndicator={false}
                    snapToInterval={ITEM_HEIGHT}
                    decelerationRate="fast"
                    contentContainerStyle={styles.wheelScrollContent}
                  >
                    {minutesList.map((m) => {
                      const isSelected = m === selectedMinute;
                      return (
                        <TouchableOpacity
                          key={m}
                          activeOpacity={0.7}
                          onPress={() => {
                            setSelectedMinute(m);
                            setHasInteracted(true);
                          }}
                          style={[
                            styles.wheelItem,
                            {
                              backgroundColor:
                                isSelected && hasInteracted
                                  ? `${colors.primary}14`
                                  : 'transparent',
                            },
                          ]}
                        >
                          <Text
                            style={[
                              styles.wheelText,
                              {
                                fontSize: typography.bM_default.fontSize,
                                fontWeight: typography.bM_default.fontWeight,
                                color: isSelected && hasInteracted ? colors.primary : colors.onSurface,
                              },
                            ]}
                          >
                            {String(m).padStart(2, '0')}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </ScrollView>
                </View>

                <View style={[styles.verticalDivider, { backgroundColor: `${colors.onSurface}1F` }]} />

                {/* AM/PM Toggle Buttons Column */}
                <View style={styles.columnFlexCenter}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      setIsAm(true);
                      setHasInteracted(true);
                    }}
                    style={[
                      styles.amPmButton,
                      {
                        backgroundColor: isAm ? `${colors.primary}26` : 'transparent',
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.amPmText,
                        {
                          fontSize: typography.bM_default.fontSize,
                          fontWeight: typography.bM_default.fontWeight,
                          color: isAm ? colors.primary : colors.onSurface,
                        },
                      ]}
                    >
                      AM
                    </Text>
                  </TouchableOpacity>

                  <View style={styles.amPmSpacing} />

                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      setIsAm(false);
                      setHasInteracted(true);
                    }}
                    style={[
                      styles.amPmButton,
                      {
                        backgroundColor: !isAm ? `${colors.primary}26` : 'transparent',
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.amPmText,
                        {
                          fontSize: typography.bM_default.fontSize,
                          fontWeight: typography.bM_default.fontWeight,
                          color: !isAm ? colors.primary : colors.onSurface,
                        },
                      ]}
                    >
                      PM
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={[styles.divider, { backgroundColor: `${colors.onSurface}1F` }]} />

              {/* Footer */}
              <View style={styles.footerRow}>
                <View style={styles.flex1}>
                  <Ux4gButton
                    text="Done"
                    variant="primary"
                    enabled={hasInteracted}
                    onPress={handleConfirm}
                  />
                </View>
                <View style={styles.footerSpacing} />
                <View style={styles.flex1}>
                  <Ux4gButton
                    text="Cancel"
                    variant="outline"
                    onPress={onClose}
                  />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  labelText: {
    includeFontPadding: false,
  },
  requiredAsterisk: {
    marginLeft: 4,
    includeFontPadding: false,
  },
  fieldBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    minHeight: 44,
  },
  fieldText: {
    flex: 1,
    marginRight: 8,
    includeFontPadding: false,
  },
  captionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  captionText: {
    marginLeft: 6,
    flexShrink: 1,
    includeFontPadding: false,
  },
  // Modal / Dialog Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  dialogBox: {
    width: 320,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    overflow: 'hidden',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerCol: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '700',
    includeFontPadding: false,
  },
  divider: {
    height: 1,
    width: '100%',
  },
  verticalDivider: {
    width: 1,
    height: '100%',
  },
  bodyContainer: {
    flexDirection: 'row',
    height: 250,
  },
  columnFlex: {
    flex: 1,
  },
  columnFlexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wheelScrollContent: {
    paddingVertical: 100, // Provides centered alignment space
  },
  wheelItem: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  wheelText: {
    includeFontPadding: false,
  },
  amPmButton: {
    width: 60,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  amPmText: {
    includeFontPadding: false,
  },
  amPmSpacing: {
    height: 16,
  },
  footerRow: {
    flexDirection: 'row',
    padding: 16,
  },
  flex1: {
    flex: 1,
  },
  footerSpacing: {
    width: 16,
  },
});
