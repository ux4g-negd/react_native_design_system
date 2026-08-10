import React, { useCallback } from 'react';
import { Linking, Platform, Pressable, StyleProp, ViewStyle } from 'react-native';

export interface Ux4gLinkProps {
  /** Child widget rendered inside the link wrapper. */
  child: React.ReactNode;
  /** URL opened when the wrapper is tapped. */
  url: string;
  /** Optional style override for wrapper container. */
  style?: StyleProp<ViewStyle>;
  /** Accessibility label for screen readers. */
  accessibilityLabel?: string;
  /** Disables link interactions when true. */
  disabled?: boolean;
  /** Optional test identifier for automation. */
  testID?: string;
}

/**
 * Ux4gLink wraps any child and opens the given URL when tapped.
 * Behavior mirrors Flutter Ux4gLink by delegating launch to platform URL handling.
 */
export const Ux4gLink: React.FC<Ux4gLinkProps> = ({
  child,
  url,
  style,
  accessibilityLabel,
  disabled = false,
  testID,
}) => {
  const handlePress = useCallback(async () => {
    if (disabled) return;

    try {
      const canOpen = await Linking.canOpenURL(url);
      if (!canOpen) {
        console.warn(`Could not launch ${url}`);
        return;
      }
      await Linking.openURL(url);
    } catch {
      console.warn(`Could not launch ${url}`);
    }
  }, [disabled, url]);

  return (
    <Pressable
      testID={testID}
      onPress={handlePress}
      disabled={disabled}
      accessibilityRole='link'
      accessibilityLabel={accessibilityLabel ?? url}
      style={({ pressed }) => [
        style,
        pressed && !disabled ? { opacity: 0.7 } : null,
        Platform.OS === 'web' ? ({ cursor: 'pointer' } as any) : null,
      ]}
      hitSlop={4}
    >
      {child}
    </Pressable>
  );
};

export default Ux4gLink;
