import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UX4GColors } from './colors';
import SvgNationalAmblamLogo from '../assets/icons/NationalEmblemLogoSvg';
import SvgUnion from '../assets/icons/UnionSvg';

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
  | 'sentiment-very-dissatisfied'
  | 'sentiment-dissatisfied'
  | 'sentiment-neutral'
  | 'sentiment-satisfied'
  | 'sentiment-very-satisfied'
  | 'thumb-up'
  | 'national-emblem-logo'
  | 'union'
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
  star: ({ size = 24, color = UX4GColors.gold500 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            fill={color}
          />
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

  /**
   * Thumb Up icon (`Icons.thumb_up`).
   */
  thumbUp: ({ size = 24, color = UX4GColors.neutral500 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" fill={color} />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color }}>👍</Text>;
  },

  'sentiment-very-dissatisfied': ({ size = 24, color = UX4GColors.neutral500 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 27 27" fill="none">
          <Path d="M13.32 0C5.96 0 0 5.97333 0 13.3333C0 20.6933 5.96 26.6667 13.32 26.6667C20.6933 26.6667 26.6667 20.6933 26.6667 13.3333C26.6667 5.97333 20.6933 0 13.32 0ZM13.3333 24C7.44 24 2.66667 19.2267 2.66667 13.3333C2.66667 7.44 7.44 2.66667 13.3333 2.66667C19.2267 2.66667 24 7.44 24 13.3333C24 19.2267 19.2267 24 13.3333 24ZM18 12C19.1067 12 20 11.1067 20 10C20 8.89333 19.1067 8 18 8C16.8933 8 16 8.89333 16 10C16 11.1067 16.8933 12 18 12ZM8.66667 12C9.77333 12 10.6667 11.1067 10.6667 10C10.6667 8.89333 9.77333 8 8.66667 8C7.56 8 6.66667 8.89333 6.66667 10C6.66667 11.1067 7.56 12 8.66667 12ZM13.3333 15.3333C10.2267 15.3333 7.58667 17.28 6.52 20H20.1467C19.08 17.28 16.44 15.3333 13.3333 15.3333Z" fill={color} />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color }}>😫</Text>;
  },

  'sentiment-dissatisfied': ({ size = 24, color = UX4GColors.neutral500 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 27 27" fill="none">
          <Path d="M18 12C19.1046 12 20 11.1046 20 10C20 8.89543 19.1046 8 18 8C16.8954 8 16 8.89543 16 10C16 11.1046 16.8954 12 18 12Z" fill={color} />
          <Path d="M8.66667 12C9.77124 12 10.6667 11.1046 10.6667 10C10.6667 8.89543 9.77124 8 8.66667 8C7.5621 8 6.66667 8.89543 6.66667 10C6.66667 11.1046 7.5621 12 8.66667 12Z" fill={color} />
          <Path d="M13.3333 16C10.2267 16 7.57333 17.9333 6.50667 20.6667H8.73333C9.65333 19.08 11.36 18 13.3333 18C15.3067 18 17 19.08 17.9333 20.6667H20.16C19.0933 17.9333 16.44 16 13.3333 16ZM13.32 0C5.96 0 0 5.97333 0 13.3333C0 20.6933 5.96 26.6667 13.32 26.6667C20.6933 26.6667 26.6667 20.6933 26.6667 13.3333C26.6667 5.97333 20.6933 0 13.32 0ZM13.3333 24C7.44 24 2.66667 19.2267 2.66667 13.3333C2.66667 7.44 7.44 2.66667 13.3333 2.66667C19.2267 2.66667 24 7.44 24 13.3333C24 19.2267 19.2267 24 13.3333 24Z" fill={color} />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color }}>🙁</Text>;
  },

  'sentiment-neutral': ({ size = 24, color = UX4GColors.neutral500 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 27 27" fill="none">
          <Path d="M9.33333 16H17.3333V18H9.33333V16Z" fill={color} />
          <Path d="M18 12C19.1046 12 20 11.1046 20 10C20 8.89543 19.1046 8 18 8C16.8954 8 16 8.89543 16 10C16 11.1046 16.8954 12 18 12Z" fill={color} />
          <Path d="M8.66667 12C9.77124 12 10.6667 11.1046 10.6667 10C10.6667 8.89543 9.77124 8 8.66667 8C7.5621 8 6.66667 8.89543 6.66667 10C6.66667 11.1046 7.5621 12 8.66667 12Z" fill={color} />
          <Path d="M13.32 0C5.96 0 0 5.97333 0 13.3333C0 20.6933 5.96 26.6667 13.32 26.6667C20.6933 26.6667 26.6667 20.6933 26.6667 13.3333C26.6667 5.97333 20.6933 0 13.32 0ZM13.3333 24C7.44 24 2.66667 19.2267 2.66667 13.3333C2.66667 7.44 7.44 2.66667 13.3333 2.66667C19.2267 2.66667 24 7.44 24 13.3333C24 19.2267 19.2267 24 13.3333 24Z" fill={color} />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color }}>😐</Text>;
  },

  'sentiment-satisfied': ({ size = 24, color = UX4GColors.neutral500 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 27 27" fill="none">
          <Path d="M18 12C19.1046 12 20 11.1046 20 10C20 8.89543 19.1046 8 18 8C16.8954 8 16 8.89543 16 10C16 11.1046 16.8954 12 18 12Z" fill={color} />
          <Path d="M8.66667 12C9.77124 12 10.6667 11.1046 10.6667 10C10.6667 8.89543 9.77124 8 8.66667 8C7.5621 8 6.66667 8.89543 6.66667 10C6.66667 11.1046 7.5621 12 8.66667 12Z" fill={color} />
          <Path d="M13.3333 18.6667C11.36 18.6667 9.66667 17.5867 8.73333 16H6.50667C7.57333 18.7333 10.2267 20.6667 13.3333 20.6667C16.44 20.6667 19.0933 18.7333 20.16 16H17.9333C17 17.5867 15.3067 18.6667 13.3333 18.6667ZM13.32 0C5.96 0 0 5.97333 0 13.3333C0 20.6933 5.96 26.6667 13.32 26.6667C20.6933 26.6667 26.6667 20.6933 26.6667 13.3333C26.6667 5.97333 20.6933 0 13.32 0ZM13.3333 24C7.44 24 2.66667 19.2267 2.66667 13.3333C2.66667 7.44 7.44 2.66667 13.3333 2.66667C19.2267 2.66667 24 7.44 24 13.3333C24 19.2267 19.2267 24 13.3333 24Z" fill={color} />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color }}>🙂</Text>;
  },

  'sentiment-very-satisfied': ({ size = 24, color = UX4GColors.neutral500 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 27 27" fill="none">
          <Path d="M13.32 0C5.96 0 0 5.97333 0 13.3333C0 20.6933 5.96 26.6667 13.32 26.6667C20.6933 26.6667 26.6667 20.6933 26.6667 13.3333C26.6667 5.97333 20.6933 0 13.32 0ZM13.3333 24C7.44 24 2.66667 19.2267 2.66667 13.3333C2.66667 7.44 7.44 2.66667 13.3333 2.66667C19.2267 2.66667 24 7.44 24 13.3333C24 19.2267 19.2267 24 13.3333 24ZM18 12C19.1067 12 20 11.1067 20 10C20 8.89333 19.1067 8 18 8C16.8933 8 16 8.89333 16 10C16 11.1067 16.8933 12 18 12ZM8.66667 12C9.77333 12 10.6667 11.1067 10.6667 10C10.6667 8.89333 9.77333 8 8.66667 8C7.56 8 6.66667 8.89333 6.66667 10C6.66667 11.1067 7.56 12 8.66667 12ZM13.3333 20.6667C16.44 20.6667 19.08 18.72 20.1467 16H6.52C7.58667 18.72 10.2267 20.6667 13.3333 20.6667Z" fill={color} />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color }}>😁</Text>;
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

  time: ({ size = 20, color = UX4GColors.primary600 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color }}>⏰</Text>;
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

  /**
   * Info outline icon (`Icons.info_outline`).
   */
  infoOutline: ({ size = 20, color = UX4GColors.cyan600 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>ℹ️</Text>;
  },

  /**
   * Warning amber rounded icon (`Icons.warning_amber_rounded`).
   */
  warningAmber: ({ size = 20, color = UX4GColors.orange600 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
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

  location: ({ size = 20, color = 'UX4GColors.white' }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>⌖</Text>;
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

  /**
   * Cloud upload outlined icon (`Icons.cloud_upload_outlined`).
   */
  cloudUpload: ({ size = 24, color = UX4GColors.primary600 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>☁️</Text>;
  },

  /**
   * Camera icon (`Icons.camera_alt`).
   */
  camera: ({ size = 20, color = UX4GColors.neutral900 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 15.2a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4z"
            fill={color}
          />
          <Path
            d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>📷</Text>;
  },

  /**
   * Image file icon (`Icons.image`).
   */
  imageFile: ({ size = 20, color = UX4GColors.blue600 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>🖼️</Text>;
  },

  /**
   * PDF file icon (`Icons.picture_as_pdf`).
   */
  pdf: ({ size = 20, color = UX4GColors.red600 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>📄</Text>;
  },

  /**
   * Document file icon (`Icons.description`).
   */
  docFile: ({ size = 20, color = UX4GColors.primary600 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>📝</Text>;
  },

  /**
   * Generic file icon (`Icons.insert_drive_file`).
   */
  insertDriveFile: ({ size = 20, color = UX4GColors.neutral500 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>📁</Text>;
  },

  /**
   * Error outline icon (`Icons.error_outline`).
   */
  errorOutline: ({ size = 20, color = UX4GColors.red600 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>⚠️</Text>;
  },

  /**
   * Check circle icon (`Icons.check_circle`).
   */
  checkCircle: ({ size = 20, color = UX4GColors.green600 }: Ux4gIconProps = {}): React.ReactElement => {
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
    return <Text style={{ fontSize: size, color, fontWeight: 'bold' }}>✅</Text>;
  },

  sentimentVeryDissatisfied: ({ size = 20, color = UX4GColors.neutral900 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-3.18-8c.45 0 .82-.37.82-.82s-.37-.82-.82-.82-.82.37-.82.82.37.82.82.82zm6.36 0c.45 0 .82-.37.82-.82s-.37-.82-.82-.82-.82.37-.82.82.37.82.82.82zM12 14c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color }}>😫</Text>;
  },

  sentimentDissatisfied: ({ size = 20, color = UX4GColors.neutral900 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 3c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color }}>🙁</Text>;
  },

  sentimentNeutral: ({ size = 20, color = UX4GColors.neutral900 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M9 14h6v1.5H9z M15.5 9.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zm-7 0c0 .8-.7 1.5-1.5 1.5S5.5 10.3 5.5 9.5 6.2 8 7 8s1.5.7 1.5 1.5zm3.5-7.5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color }}>😐</Text>;
  },

  sentimentSatisfied: ({ size = 20, color = UX4GColors.neutral900 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color }}>🙂</Text>;
  },

  sentimentVerySatisfied: ({ size = 20, color = UX4GColors.neutral900 }: Ux4gIconProps = {}): React.ReactElement => {
    if (Svg && Path) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.1-6.1c1.55 0 2.92-.81 3.73-2.05l-1.49-.6c-.53.79-1.43 1.3-2.24 1.3s-1.72-.51-2.24-1.3l-1.49.6c.8 1.24 2.17 2.05 3.73 2.05zM9 11c.83 0 1.5-.67 1.5-1.5S9.83 8 9 8s-1.5.67-1.5 1.5S8.17 11 9 11zm6 0c.83 0 1.5-.67 1.5-1.5S15.83 8 15 8s-1.5.67-1.5 1.5S14.17 11 15 11z"
            fill={color}
          />
        </Svg>
      );
    }
    return <Text style={{ fontSize: size, color }}>😁</Text>;
  },

  nationalEmblemLogo: ({ size = 26 }: Ux4gIconProps = {}): React.ReactElement => (
    <SvgNationalAmblamLogo width={size * 0.615} height={size} />
  ),

  union: ({ size = 20 }: Ux4gIconProps = {}): React.ReactElement => (
    <SvgUnion width={size} height={size} />
  ),
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
