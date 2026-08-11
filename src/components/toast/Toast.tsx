import React, { createContext, useContext, useState, useRef, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  useWindowDimensions,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useUx4gTheme } from '../../theme/Ux4gThemeContext';
import { Ux4gSpace } from '../../foundation/dimensions';
import { Ux4gIcons } from '../../foundation/icons';
import { Ux4gRadius } from '../../foundation/dimensions';
import { UX4GColors } from '../../foundation/colors';

export type Ux4gToastCategory = 'info' | 'success' | 'warning' | 'error' | 'slot';
export type Ux4gToastLayout = 'full' | 'stacked';

export interface Ux4gToastData {
  category: Ux4gToastCategory;
  title: string;
  subtitle?: string;
  actionText?: string;
  onActionClick?: () => void;
  showCloseButton?: boolean;
  backgroundColor?: string;
  icon?: React.ReactNode;
  iconColor?: string;
  actionColor?: string;
  autoClose?: boolean;
  durationMs?: number;
  /**
   * If true, this specific toast slides in from the bottom.
   * Overrides the global `isBottom` from the provider.
   */
  isBottom?: boolean;
}

export interface Ux4gToastProps extends Omit<Ux4gToastData, 'autoClose' | 'durationMs' | 'isBottom'> {
  onCloseClick?: () => void;
  layout?: Ux4gToastLayout;
  style?: StyleProp<ViewStyle>;
}

/**
 * Exact `Color.lerp(from, to, t)` equivalent for hex colors (Flutter parity).
 */
const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  let h = hex.replace('#', '').trim();
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  if (!/^[0-9a-fA-F]{6}$/.test(h)) return null;
  return {
    r: parseInt(h.substring(0, 2), 16),
    g: parseInt(h.substring(2, 4), 16),
    b: parseInt(h.substring(4, 6), 16),
  };
};

const lerpColor = (from: string, to: string, t: number): string => {
  const a = hexToRgb(from);
  const b = hexToRgb(to);
  if (!a || !b) return to;
  const channel = (start: number, end: number) =>
    Math.round(start + (end - start) * t).toString(16).padStart(2, '0');
  return `#${channel(a.r, b.r)}${channel(a.g, b.g)}${channel(a.b, b.b)}`;
};

/**
 * Helper to compute hex with alpha or rgba color string.
 */
const addOpacityToHex = (color: string, opacity: number): string => {
  if (color.startsWith('#')) {
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
  }
  return color;
};

// ─────────────────────────────────────────────────────────────────────────────
// TOAST PRESENTATIONAL COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export const Ux4gToast: React.FC<Ux4gToastProps> = ({
  category,
  title,
  subtitle,
  actionText,
  onActionClick,
  onCloseClick,
  showCloseButton = true,
  layout,
  backgroundColor,
  icon,
  iconColor,
  actionColor,
  style,
}) => {
  const { colors, typography, isDark } = useUx4gTheme();
  const { width } = useWindowDimensions();

  // Resolve layout
  const resolvedLayout = layout ?? (width < 600 ? 'stacked' : 'full');

  // Resolve base styles based on category
  const getBaseStyle = () => {
    const surface = colors.surface ?? (isDark ? UX4GColors.neutral900 : UX4GColors.white);
    const info = colors.info ?? (isDark ? UX4GColors.cyan400 : UX4GColors.cyan600);
    const success = colors.success ?? (isDark ? UX4GColors.green400 : UX4GColors.green600);
    const warning = colors.warning ?? (isDark ? UX4GColors.orange500 : UX4GColors.orange600);
    const error = colors.error ?? (isDark ? UX4GColors.red400 : UX4GColors.red600);
    const primary = colors.primary ?? (isDark ? UX4GColors.blue400 : UX4GColors.blue600);

    switch (category) {
      case 'info':
        return { bg: lerpColor(surface, info, 0.12), iconCol: info, actCol: info, icon: Ux4gIcons.infoOutline };
      case 'success':
        return { bg: lerpColor(surface, success, 0.12), iconCol: success, actCol: success, icon: Ux4gIcons.checkCircle };
      case 'warning':
        return { bg: lerpColor(surface, warning, 0.12), iconCol: warning, actCol: warning, icon: Ux4gIcons.warningAmber };
      case 'error':
        return { bg: lerpColor(surface, error, 0.12), iconCol: error, actCol: error, icon: Ux4gIcons.errorOutline };
      case 'slot':
      default:
        return { bg: lerpColor(surface, primary, 0.12), iconCol: primary, actCol: primary, icon: Ux4gIcons.settings };
    }
  };

  const baseStyle = getBaseStyle();
  const resolvedBgColor = backgroundColor ?? baseStyle.bg;
  const resolvedIconColor = iconColor ?? baseStyle.iconCol;
  const resolvedActionColor = actionColor ?? baseStyle.actCol;

  const renderIcon = () => {
    if (icon) return icon;
    return baseStyle.icon({ size: 20, color: resolvedIconColor });
  };

  const onSurface = colors.onSurface ?? (isDark ? UX4GColors.neutral100 : UX4GColors.neutral950);
  const onSurfaceMuted = addOpacityToHex(onSurface, 0.6);

  const containerPaddingH = resolvedLayout === 'full' ? Ux4gSpace.space16 : Ux4gSpace.space12;
  const containerPaddingV = resolvedLayout === 'full' ? Ux4gSpace.space8 : Ux4gSpace.space12;

  const renderClose = () => {
    if (!showCloseButton || !onCloseClick) return null;
    return (
      <TouchableOpacity onPress={onCloseClick} style={{ padding: 4, marginLeft: 8 }}>
        {typeof Ux4gIcons.close === 'function' ? (
          Ux4gIcons.close({ size: 20, color: onSurface })
        ) : (
          <Text style={{ fontSize: 20, color: onSurface }}>✕</Text>
        )}
      </TouchableOpacity>
    );
  };

  const surfaceColor = colors.surface ?? (isDark ? UX4GColors.neutral900 : UX4GColors.white);

  if (resolvedLayout === 'full') {
    return (
      <View style={[styles.container, { backgroundColor: surfaceColor }, style]}>
        <View style={[StyleSheet.absoluteFill, { backgroundColor: resolvedBgColor, borderRadius: Ux4gRadius.radius4 }]} />
        <View style={[styles.innerContainer, { paddingHorizontal: containerPaddingH, paddingVertical: containerPaddingV }]}>
          <View style={styles.fullIcon}>{renderIcon()}</View>
        <View style={styles.fullContent}>
           <View style={styles.fullTitleRow}>
             <Text style={[typography.bS_strong, { color: onSurface, fontWeight: '700' }]} numberOfLines={1}>
               {title}
             </Text>
             {!!subtitle && (
                <Text style={[typography.bS_default, { color: onSurfaceMuted, marginLeft: 8, flex: 1 }]} numberOfLines={1}>
                  {subtitle}
                </Text>
             )}
           </View>
        </View>
        {!!actionText && !!onActionClick && (
          <TouchableOpacity onPress={onActionClick} style={styles.fullAction}>
            <Text style={[typography.lM_strong, { color: resolvedActionColor, fontWeight: '700' }]}>{actionText}</Text>
          </TouchableOpacity>
        )}
        {renderClose()}
        </View>
      </View>
    );
  }

  // Stacked Layout
  return (
    <View style={[styles.container, styles.stackedContainer, { backgroundColor: surfaceColor }, style]}>
      <View style={[StyleSheet.absoluteFill, { backgroundColor: resolvedBgColor, borderRadius: Ux4gRadius.radius4 }]} />
      <View style={[styles.innerContainer, styles.stackedContainer, { paddingHorizontal: containerPaddingH, paddingVertical: containerPaddingV }]}>
        <View style={styles.stackedHeader}>
         <View style={styles.stackedIcon}>{renderIcon()}</View>
         <Text style={[typography.bS_strong, { color: onSurface, fontWeight: '700', flex: 1 }]} numberOfLines={2}>
            {title}
         </Text>
         {renderClose()}
      </View>
      
      {!!subtitle && (
         <View style={styles.stackedSubtitle}>
            <Text style={[typography.bS_default, { color: onSurfaceMuted }]}>{subtitle}</Text>
         </View>
      )}

      {!!actionText && !!onActionClick && (
         <TouchableOpacity onPress={onActionClick} style={styles.stackedAction}>
            <Text style={[typography.lM_strong, { color: resolvedActionColor, fontWeight: '700' }]}>{actionText}</Text>
         </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: Ux4gRadius.radius4,
    // Note: removed flex/padding from outer container to let inner container handle it
  },
  innerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  stackedContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  fullIcon: {
    marginRight: Ux4gSpace.space12,
  },
  fullContent: {
    flex: 1,
    justifyContent: 'center',
  },
  fullTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullAction: {
    paddingHorizontal: Ux4gSpace.space16,
    justifyContent: 'center',
  },
  stackedHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  stackedIcon: {
    marginRight: Ux4gSpace.space8,
  },
  stackedSubtitle: {
    paddingLeft: 20 + Ux4gSpace.space8, // icon size + gap (Flutter parity: 28)
    marginTop: 2,
  },
  stackedAction: {
    paddingLeft: 20 + Ux4gSpace.space8,
    marginTop: 6,
    alignSelf: 'flex-start',
  },
});

// ─────────────────────────────────────────────────────────────────────────────
// TOAST CONTEXT & HOOK
// ─────────────────────────────────────────────────────────────────────────────

interface ToastContextValue {
  showToast: (data: Ux4gToastData) => void;
  dismiss: () => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export const useUx4gToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useUx4gToast must be used within a Ux4gToastProvider');
  }
  return ctx;
};

// ─────────────────────────────────────────────────────────────────────────────
// TOAST HOST/PROVIDER
// ─────────────────────────────────────────────────────────────────────────────

export interface Ux4gToastProviderProps {
  children: React.ReactNode;
  /**
   * If true, toasts slide in from the bottom. Otherwise, from the top.
   * @default false
   */
  isBottom?: boolean;
}

export const Ux4gToastProvider: React.FC<Ux4gToastProviderProps> = ({ children, isBottom = false }) => {
  const [currentToast, setCurrentToast] = useState<Ux4gToastData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Animation state
  const slideAnim = useRef(new Animated.Value(0)).current;

  const dismiss = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    
    // Animate out
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsVisible(false);
      setCurrentToast(null);
    });
  }, [slideAnim]);

  const showToast = useCallback((data: Ux4gToastData) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    setCurrentToast(data);
    setIsVisible(true);
    
    // Animate in
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    const autoClose = data.autoClose ?? true;
    if (autoClose) {
       const durationMs = data.durationMs ?? 3000;
       timerRef.current = setTimeout(() => {
          dismiss();
       }, durationMs);
    }
  }, [slideAnim, dismiss]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const activeIsBottom = currentToast?.isBottom ?? isBottom;

  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [activeIsBottom ? 100 : -100, 0], // slide from off-screen
  });

  return (
    <ToastContext.Provider value={{ showToast, dismiss }}>
      {children}
      
      {/* Toast Host Overlay */}
      {currentToast && isVisible && (
         <Animated.View
           style={[
             StyleSheet.absoluteFill,
             {
               top: activeIsBottom ? undefined : 0,
               bottom: activeIsBottom ? 0 : undefined,
               height: undefined, // Let it wrap content
               padding: Ux4gSpace.space16,
               opacity: slideAnim,
               transform: [{ translateY }],
               pointerEvents: 'box-none',
               zIndex: 9999,
               elevation: 9999,
             },
           ]}
         >
           <Ux4gToast
             {...currentToast}
             onCloseClick={dismiss}
           />
         </Animated.View>
      )}
    </ToastContext.Provider>
  );
};
