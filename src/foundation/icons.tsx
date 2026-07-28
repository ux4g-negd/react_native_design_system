import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UX4GColors } from './colors';

let Svg: any = null;
let Path: any = null;
let G: any = null;
try {
  const RNSvg = require('react-native-svg');
  Svg = RNSvg.Svg || RNSvg.default;
  Path = RNSvg.Path;
  G = RNSvg.G;
} catch (e) {
  // react-native-svg not present, fallback to text/emoji representation
}

export type Ux4gIconName =
  | 'check'
  | 'close'
  | 'search'
  | 'arrow-back'
  | 'arrow-forward'
  | 'chevron-down'
  | 'chevron-up'
  | 'chevron-left'
  | 'chevron-right'
  | 'info'
  | 'warning'
  | 'error'
  | 'success'
  | 'calendar'
  | 'time'
  | 'upload'
  | 'download'
  | 'aadhaar'
  | 'pan'
  | 'biometric'
  | 'verification'
  | 'star'
  | 'mic'
  | 'settings'
  | 'menu'
  | 'notifications'
  | 'scan'
  | string;

export interface Ux4gIconData {
  name: Ux4gIconName;
  size?: number;
  color?: string;
}

export interface Ux4gIconProps {
  size?: number;
  color?: string;
}

/**
 * **Ux4gIcons**
 *
 * Exact icon asset definitions matching Flutter `icons.dart` (`verification`, `star`, `shield`, `check`, etc.)
 * for 100% exact visual parity in React Native.
 */
export const Ux4gIcons = {
  /**
   * Scalloped verification checkmark badge asset (`verification.svg`).
   */
  verification: ({ size = 18, color = UX4GColors.blue600 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path && G) {
      return (
        <Svg width={size} height={size} viewBox="-0.5 -0.5 17 17" fill="none">
          <G>
            <Path
              d="M16.25 8L14.42 5.9075L14.675 3.14L11.9675 2.525L10.55 0.125L8 1.22L5.45 0.125L4.0325 2.5175L1.325 3.125L1.58 5.9L-0.25 8L1.58 10.0925L1.325 12.8675L4.0325 13.4825L5.45 15.875L8 14.7725L10.55 15.8675L11.9675 13.475L14.675 12.86L14.42 10.0925L16.25 8Z"
              fill={color}
            />
            <Path
              d="M6.03501 11.0075L4.25001 9.20752C3.95751 8.91502 3.95751 8.44252 4.25001 8.15002L4.30251 8.09752C4.59501 7.80502 5.07501 7.80502 5.36751 8.09752L6.57502 9.31252L10.4375 5.44252C10.73 5.15002 11.21 5.15002 11.5025 5.44252L11.555 5.49502C11.8475 5.78752 11.8475 6.26002 11.555 6.55252L7.11501 11.0075C6.80751 11.3 6.33501 11.3 6.03501 11.0075Z"
              fill={UX4GColors.neutral50}
            />
          </G>
        </Svg>
      );
    }
    return (
      <View style={[styles.fallbackBox, { width: size, height: size, backgroundColor: color }]}>
        <Text style={[styles.fallbackText, { fontSize: size * 0.6 }]}>✓</Text>
      </View>
    );
  },

  /**
   * Gold 5-pointed star badge asset (`star.svg`).
   */
  star: ({ size = 18, color = UX4GColors.gold500 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path && G) {
      return (
        <Svg width={size} height={size} viewBox="-1 -1 18 18" fill="none">
          <G>
            <Path
              d="M8 13.3995L11.8799 15.8549C12.5904 16.3049 13.4599 15.6397 13.2729 14.7984L12.2445 10.1811L15.6756 7.07027C16.302 6.50289 15.9654 5.42682 15.1427 5.35834L10.6271 4.95726L8.86012 0.594284C8.54225 -0.198095 7.45775 -0.198095 7.13988 0.594284L5.3729 4.94748L0.857274 5.34856C0.034552 5.41703 -0.302016 6.4931 0.324375 7.06049L3.7555 10.1713L2.7271 14.7886C2.54012 15.6299 3.40958 16.2951 4.12012 15.8451L8 13.3995Z"
              fill={color}
            />
          </G>
        </Svg>
      );
    }
    return (
      <View style={[styles.fallbackBox, { width: size, height: size, backgroundColor: color }]}>
        <Text style={[styles.fallbackText, { fontSize: size * 0.7 }]}>★</Text>
      </View>
    );
  },

  /**
   * Shield security icon asset matching `Icons.shield`.
   */
  shield: ({ size = 12, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>🛡️</Text>;
  },

  /**
   * Checkmark icon (`Icons.check`).
   */
  check: ({ size = 12, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill={color} />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>✓</Text>;
  },

  close: ({ size = 16, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>✕</Text>;
  },

  add: ({ size = 18, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill={color} />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>+</Text>;
  },

  arrowDropDown: ({ size = 20, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M7 10l5 5 5-5z" fill={color} />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>▼</Text>;
  },

  arrowUp: ({ size = 20, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M7 14l5-5 5 5z" fill={color} />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>▲</Text>;
  },

  chevronLeft: ({ size = 20, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill={color} />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>‹</Text>;
  },

  chevronRight: ({ size = 20, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill={color} />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>›</Text>;
  },

  chevronDown: ({ size = 20, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" fill={color} />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>∨</Text>;
  },

  chevronUp: ({ size = 20, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" fill={color} />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>∧</Text>;
  },

  search: ({ size = 18, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>🔍</Text>;
  },

  calendar: ({ size = 20, color = UX4GColors.primary600 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color }}>📅</Text>;
  },

  arrowBack: ({ size = 20, color = UX4GColors.primary600 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill={color} />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>←</Text>;
  },

  arrowForward: ({ size = 20, color = UX4GColors.primary600 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" fill={color} />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>→</Text>;
  },

  info: ({ size = 16, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>ℹ️</Text>;
  },

  error: ({ size = 16, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>⚠️</Text>;
  },

  warning: ({ size = 16, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>⚠️</Text>;
  },

  success: ({ size = 16, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>✓</Text>;
  },

  visibility: ({ size = 20, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>👁️</Text>;
  },

  visibilityOff: ({ size = 20, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>🙈</Text>;
  },

  lock: ({ size = 16, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>🔒</Text>;
  },

  mic: ({ size = 20, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5-3c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>🎤</Text>;
  },

  settings: ({ size = 20, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>⚙️</Text>;
  },

  menu: ({ size = 24, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill={color} />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>☰</Text>;
  },

  notifications: ({ size = 20, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>🔔</Text>;
  },

  scan: ({ size = 20, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M9.5,6.5v3h-3v-3H9.5 M11,5H5v6h6V5L11,5z M9.5,14.5v3h-3v-3H9.5 M11,13H5v6h6V13L11,13z M17.5,6.5v3h-3v-3H17.5 M19,5h-6v6h6V5L19,5z M13,13h1.5v1.5H13V13z M14.5,14.5H16V16h-1.5V14.5z M16,13h1.5v1.5H16V13z M13,16h1.5v1.5H13V16z M17.5,14.5H19V16h-1.5V14.5z M16,17.5h1.5V19H16V17.5z M17.5,17.5H19V19h-1.5V17.5z M22,7h-2V4h-3V2h5V7z M22,22h-5v-2h3v-3h2V22z M2,22h5v-2H4v-3H2V22z M2,2v5h2V4h3V2H2z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>⛶</Text>;
  },

  link: ({ size = 20, color = UX4GColors.primary600 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M 3.9 12 c 0 -1.71 1.39 -3.1 3.1 -3.1 h 4 v 1.9 H 7 c -0.66 0 -1.2 0.54 -1.2 1.2 s 0.54 1.2 1.2 1.2 h 4 v 1.9 H 7 c -1.71 0 -3.1 -1.39 -3.1 -3.1 z M 8 13 h 8 v -2 H 8 v 2 z M 17 8 h -4 v 1.9 h 4 c 0.66 0 1.2 0.54 1.2 1.2 s -0.54 1.2 -1.2 1.2 h -4 v 1.9 h 4 c 1.71 0 3.1 -1.39 3.1 -3.1 s -1.39 -3.1 -3.1 -3.1 z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color }}>🔗</Text>;
  },
};


const styles = StyleSheet.create({
  fallbackBox: {
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  fallbackText: {
    color: 'UX4GColors.white',
    fontWeight: 'bold',
    textAlign: 'center',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
