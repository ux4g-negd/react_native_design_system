import React, { useState, useRef, useEffect, ReactNode } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  Dimensions,
  Animated,
  StyleProp,
  TextStyle,
  LayoutChangeEvent,
  TouchableWithoutFeedback
} from 'react-native';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { Ux4gRadius } from '../../foundation/dimensions';
import { UX4GColors } from '../../foundation/colors';

export type Ux4gTooltipPlacement =
  | 'topStart'
  | 'top'
  | 'topEnd'
  | 'bottomStart'
  | 'bottom'
  | 'bottomEnd'
  | 'leftStart'
  | 'left'
  | 'leftEnd'
  | 'rightStart'
  | 'right'
  | 'rightEnd';

export interface Ux4gTooltipProps {
  children: ReactNode;
  text?: string;
  title?: string;
  icon?: ReactNode;
  placement?: Ux4gTooltipPlacement;
  backgroundColor?: string;
  contentColor?: string;
  textStyle?: StyleProp<TextStyle>;
  cornerRadius?: number;
  arrowWidth?: number;
  arrowHeight?: number;
  trigger?: 'press' | 'longPress';
  isPersistent?: boolean;
  action?: ReactNode;
  customContent?: ReactNode;
  maxWidth?: number;
  autoShow?: boolean;
}

export const Ux4gTooltip: React.FC<Ux4gTooltipProps> = ({
  children,
  text,
  title,
  icon,
  placement = 'top',
  backgroundColor,
  contentColor,
  textStyle,
  cornerRadius = Ux4gRadius.radius4,
  arrowWidth = 10,
  arrowHeight = 6,
  trigger = 'longPress',
  isPersistent = false,
  action,
  customContent,
  maxWidth = 240,
  autoShow = false,
}) => {
  const theme = useUx4gTheme();
  const anchorRef = useRef<View>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [hasAutoShown, setHasAutoShown] = useState(false);
  const [anchorRect, setAnchorRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  // To measure tooltip dimensions
  const [tooltipSize, setTooltipSize] = useState({ width: 0, height: 0 });
  const [isMeasured, setIsMeasured] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.96)).current;

  const isRich = title != null || action != null;
  const persistent = isPersistent || isRich;

  useEffect(() => {
    if (isVisible && isMeasured) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 180,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 8,
          tension: 100,
          useNativeDriver: true,
        }),
      ]).start();

      // Auto dismiss if not persistent
      if (!persistent) {
        const timer = setTimeout(() => {
          handleClose();
        }, 2000);
        return () => clearTimeout(timer);
      }
    }
  }, [isVisible, isMeasured, persistent, fadeAnim, scaleAnim]);

  const handleOpen = () => {
    anchorRef.current?.measureInWindow((x, y, width, height) => {
      setAnchorRect({ x, y, width, height });
      setIsVisible(true);
      setIsMeasured(false);
      fadeAnim.setValue(0);
      scaleAnim.setValue(0.96);
    });
  };

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 0.96,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setIsVisible(false);
      setIsMeasured(false);
    });
  };

  const handleAnchorLayout = () => {
    if (autoShow && !hasAutoShown) {
      setHasAutoShown(true);
      setTimeout(() => {
        handleOpen();
      }, 100);
    }
  };

  const onTooltipLayout = (e: LayoutChangeEvent) => {
    if (!isMeasured) {
      setTooltipSize({
        width: e.nativeEvent.layout.width,
        height: e.nativeEvent.layout.height,
      });
      setIsMeasured(true);
    }
  };

  const bgColor = backgroundColor || (theme.isDark ? UX4GColors.neutral300 : UX4GColors.neutral700);
  const fgColor = contentColor || (theme.isDark ? UX4GColors.neutral900 : UX4GColors.neutral50);

  // Calculate final placement with basic screen bound flip
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  let effectivePlacement = placement;
  const spacing = 8;
  const roomAbove = anchorRect.y;
  const roomBelow = windowHeight - (anchorRect.y + anchorRect.height);
  const roomLeft = anchorRect.x;
  const roomRight = windowWidth - (anchorRect.x + anchorRect.width);

  if (effectivePlacement.startsWith('top') && roomAbove < tooltipSize.height + spacing + arrowHeight) {
    if (roomBelow > roomAbove) effectivePlacement = effectivePlacement.replace('top', 'bottom') as Ux4gTooltipPlacement;
  } else if (effectivePlacement.startsWith('bottom') && roomBelow < tooltipSize.height + spacing + arrowHeight) {
    if (roomAbove > roomBelow) effectivePlacement = effectivePlacement.replace('bottom', 'top') as Ux4gTooltipPlacement;
  } else if (effectivePlacement.startsWith('left') && roomLeft < tooltipSize.width + spacing + arrowHeight) {
    if (roomRight > roomLeft) effectivePlacement = effectivePlacement.replace('left', 'right') as Ux4gTooltipPlacement;
  } else if (effectivePlacement.startsWith('right') && roomRight < tooltipSize.width + spacing + arrowHeight) {
    if (roomLeft > roomRight) effectivePlacement = effectivePlacement.replace('right', 'left') as Ux4gTooltipPlacement;
  }

  // Calculate X and Y coordinates for the tooltip container (including arrow)
  let tooltipX = 0;
  let tooltipY = 0;

  // Arrow offset relative to tooltip container
  let arrowTop: number | undefined;
  let arrowBottom: number | undefined;
  let arrowLeft: number | undefined;
  let arrowRight: number | undefined;

  // We need to construct the arrow shape using border tricks
  let arrowStyle: any = { position: 'absolute' };

  const arrowHalf = arrowWidth / 2;
  const tipOffset = cornerRadius + arrowHalf + 8; // Margin from edges

  switch (effectivePlacement) {
    case 'topStart':
      tooltipY = anchorRect.y - tooltipSize.height - spacing;
      tooltipX = anchorRect.x;
      arrowBottom = -arrowHeight;
      arrowLeft = Math.min(tipOffset, tooltipSize.width / 2);
      arrowStyle = { ...arrowStyle, borderTopWidth: arrowHeight, borderTopColor: bgColor, borderLeftWidth: arrowHalf, borderLeftColor: 'transparent', borderRightWidth: arrowHalf, borderRightColor: 'transparent' };
      break;
    case 'top':
      tooltipY = anchorRect.y - tooltipSize.height - spacing;
      tooltipX = anchorRect.x + (anchorRect.width / 2) - (tooltipSize.width / 2);
      arrowBottom = -arrowHeight;
      arrowLeft = tooltipSize.width / 2 - arrowHalf;
      arrowStyle = { ...arrowStyle, borderTopWidth: arrowHeight, borderTopColor: bgColor, borderLeftWidth: arrowHalf, borderLeftColor: 'transparent', borderRightWidth: arrowHalf, borderRightColor: 'transparent' };
      break;
    case 'topEnd':
      tooltipY = anchorRect.y - tooltipSize.height - spacing;
      tooltipX = anchorRect.x + anchorRect.width - tooltipSize.width;
      arrowBottom = -arrowHeight;
      arrowLeft = Math.max(tooltipSize.width - tipOffset - arrowWidth, tooltipSize.width / 2);
      arrowStyle = { ...arrowStyle, borderTopWidth: arrowHeight, borderTopColor: bgColor, borderLeftWidth: arrowHalf, borderLeftColor: 'transparent', borderRightWidth: arrowHalf, borderRightColor: 'transparent' };
      break;
    case 'bottomStart':
      tooltipY = anchorRect.y + anchorRect.height + spacing;
      tooltipX = anchorRect.x;
      arrowTop = -arrowHeight;
      arrowLeft = Math.min(tipOffset, tooltipSize.width / 2);
      arrowStyle = { ...arrowStyle, borderBottomWidth: arrowHeight, borderBottomColor: bgColor, borderLeftWidth: arrowHalf, borderLeftColor: 'transparent', borderRightWidth: arrowHalf, borderRightColor: 'transparent' };
      break;
    case 'bottom':
      tooltipY = anchorRect.y + anchorRect.height + spacing;
      tooltipX = anchorRect.x + (anchorRect.width / 2) - (tooltipSize.width / 2);
      arrowTop = -arrowHeight;
      arrowLeft = tooltipSize.width / 2 - arrowHalf;
      arrowStyle = { ...arrowStyle, borderBottomWidth: arrowHeight, borderBottomColor: bgColor, borderLeftWidth: arrowHalf, borderLeftColor: 'transparent', borderRightWidth: arrowHalf, borderRightColor: 'transparent' };
      break;
    case 'bottomEnd':
      tooltipY = anchorRect.y + anchorRect.height + spacing;
      tooltipX = anchorRect.x + anchorRect.width - tooltipSize.width;
      arrowTop = -arrowHeight;
      arrowLeft = Math.max(tooltipSize.width - tipOffset - arrowWidth, tooltipSize.width / 2);
      arrowStyle = { ...arrowStyle, borderBottomWidth: arrowHeight, borderBottomColor: bgColor, borderLeftWidth: arrowHalf, borderLeftColor: 'transparent', borderRightWidth: arrowHalf, borderRightColor: 'transparent' };
      break;
    case 'leftStart':
      tooltipY = anchorRect.y;
      tooltipX = anchorRect.x - tooltipSize.width - spacing;
      arrowRight = -arrowHeight;
      arrowTop = Math.min(tipOffset, tooltipSize.height / 2);
      arrowStyle = { ...arrowStyle, borderLeftWidth: arrowHeight, borderLeftColor: bgColor, borderTopWidth: arrowHalf, borderTopColor: 'transparent', borderBottomWidth: arrowHalf, borderBottomColor: 'transparent' };
      break;
    case 'left':
      tooltipY = anchorRect.y + (anchorRect.height / 2) - (tooltipSize.height / 2);
      tooltipX = anchorRect.x - tooltipSize.width - spacing;
      arrowRight = -arrowHeight;
      arrowTop = tooltipSize.height / 2 - arrowHalf;
      arrowStyle = { ...arrowStyle, borderLeftWidth: arrowHeight, borderLeftColor: bgColor, borderTopWidth: arrowHalf, borderTopColor: 'transparent', borderBottomWidth: arrowHalf, borderBottomColor: 'transparent' };
      break;
    case 'leftEnd':
      tooltipY = anchorRect.y + anchorRect.height - tooltipSize.height;
      tooltipX = anchorRect.x - tooltipSize.width - spacing;
      arrowRight = -arrowHeight;
      arrowTop = Math.max(tooltipSize.height - tipOffset - arrowWidth, tooltipSize.height / 2);
      arrowStyle = { ...arrowStyle, borderLeftWidth: arrowHeight, borderLeftColor: bgColor, borderTopWidth: arrowHalf, borderTopColor: 'transparent', borderBottomWidth: arrowHalf, borderBottomColor: 'transparent' };
      break;
    case 'rightStart':
      tooltipY = anchorRect.y;
      tooltipX = anchorRect.x + anchorRect.width + spacing;
      arrowLeft = -arrowHeight;
      arrowTop = Math.min(tipOffset, tooltipSize.height / 2);
      arrowStyle = { ...arrowStyle, borderRightWidth: arrowHeight, borderRightColor: bgColor, borderTopWidth: arrowHalf, borderTopColor: 'transparent', borderBottomWidth: arrowHalf, borderBottomColor: 'transparent' };
      break;
    case 'right':
      tooltipY = anchorRect.y + (anchorRect.height / 2) - (tooltipSize.height / 2);
      tooltipX = anchorRect.x + anchorRect.width + spacing;
      arrowLeft = -arrowHeight;
      arrowTop = tooltipSize.height / 2 - arrowHalf;
      arrowStyle = { ...arrowStyle, borderRightWidth: arrowHeight, borderRightColor: bgColor, borderTopWidth: arrowHalf, borderTopColor: 'transparent', borderBottomWidth: arrowHalf, borderBottomColor: 'transparent' };
      break;
    case 'rightEnd':
      tooltipY = anchorRect.y + anchorRect.height - tooltipSize.height;
      tooltipX = anchorRect.x + anchorRect.width + spacing;
      arrowLeft = -arrowHeight;
      arrowTop = Math.max(tooltipSize.height - tipOffset - arrowWidth, tooltipSize.height / 2);
      arrowStyle = { ...arrowStyle, borderRightWidth: arrowHeight, borderRightColor: bgColor, borderTopWidth: arrowHalf, borderTopColor: 'transparent', borderBottomWidth: arrowHalf, borderBottomColor: 'transparent' };
      break;
  }

  // Bound within screen
  tooltipX = Math.max(8, Math.min(tooltipX, windowWidth - tooltipSize.width - 8));
  tooltipY = Math.max(8, Math.min(tooltipY, windowHeight - tooltipSize.height - 8));

  // Transform origin calculation based on placement
  // Note: standard transformOrigin is not consistently supported across all RN versions without extra config,
  // but Animated.View uses scale which defaults to center.
  // Flutter uses specific alignments, but center scale is generally acceptable for tooltips in RN.

  return (
    <>
      <Pressable
        ref={anchorRef}
        onPress={trigger === 'press' ? handleOpen : undefined}
        onLongPress={trigger === 'longPress' ? handleOpen : undefined}
        onLayout={handleAnchorLayout}
      >
        {children}
      </Pressable>

      <Modal visible={isVisible} transparent animationType="none" onRequestClose={handleClose}>
        <TouchableWithoutFeedback onPress={handleClose}>
          <View style={StyleSheet.absoluteFill}>
            <Animated.View
              onLayout={onTooltipLayout}
              style={[
                styles.tooltipContainer,
                isMeasured && {
                  left: tooltipX,
                  top: tooltipY,
                  opacity: fadeAnim,
                  transform: [{ scale: scaleAnim }],
                },
                !isMeasured && { opacity: 0 } // Hide while measuring
              ]}
            >
              <View style={[styles.bubble, { backgroundColor: bgColor, borderRadius: cornerRadius, maxWidth }]}>
                {customContent ? customContent : (
                  <View style={styles.content}>
                    {(!isRich) ? (
                      <View style={styles.row}>
                        {icon && (
                          <View style={styles.iconWrapper}>
                            {icon}
                          </View>
                        )}
                        <Text style={[theme.typography.lS_default, textStyle, { color: fgColor, flexShrink: 1 }]}>
                          {text}
                        </Text>
                      </View>
                    ) : (
                      <View>
                        {(title || icon) && (
                          <View style={[styles.row, { marginBottom: 8 }]}>
                            {icon && (
                              <View style={[styles.iconWrapper, { marginRight: 8 }]}>
                                {icon}
                              </View>
                            )}
                            {title && (
                              <Text style={[theme.typography.tS_strong, { fontWeight: 'bold', color: fgColor, flexShrink: 1 }]}>
                                {title}
                              </Text>
                            )}
                          </View>
                        )}
                        {text && (
                          <Text style={[theme.typography.lS_default, textStyle, { color: fgColor }]}>
                            {text}
                          </Text>
                        )}
                        {action && (
                          <View style={styles.actionWrapper}>
                            {action}
                          </View>
                        )}
                      </View>
                    )}
                  </View>
                )}
              </View>

              {/* Arrow */}
              {isMeasured && (
                <View style={[arrowStyle, { top: arrowTop, bottom: arrowBottom, left: arrowLeft, right: arrowRight }]} />
              )}
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export const Ux4gRichTooltip: React.FC<Ux4gTooltipProps> = (props) => {
  return <Ux4gTooltip {...props} isPersistent={true} />;
};

const styles = StyleSheet.create({
  tooltipContainer: {
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  bubble: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  content: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionWrapper: {
    marginTop: 12,
    alignItems: 'flex-end',
  }
});
