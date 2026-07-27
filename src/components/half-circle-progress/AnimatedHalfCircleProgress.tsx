import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { Ux4gHalfCircleProgress, Ux4gHalfCircleProgressProps } from './HalfCircleProgress';

export interface Ux4gAnimatedHalfCircleProgressProps extends Omit<Ux4gHalfCircleProgressProps, 'value'> {
  value: number;
  duration?: number;
}

export const Ux4gAnimatedHalfCircleProgress: React.FC<Ux4gAnimatedHalfCircleProgressProps> = ({
  value,
  duration = 700,
  ...rest
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [currentValue, setCurrentValue] = React.useState(0);

  useEffect(() => {
    const listener = animatedValue.addListener(({ value: val }) => {
      setCurrentValue(val);
    });

    Animated.timing(animatedValue, {
      toValue: Math.max(0, Math.min(value, 1)),
      duration,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();

    return () => {
      animatedValue.removeListener(listener);
    };
  }, [value, duration]);

  return <Ux4gHalfCircleProgress {...rest} value={currentValue} />;
};
