import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { Ux4gCircularProgress, Ux4gCircularProgressProps } from './CircularProgress';

export interface Ux4gAnimatedCircularProgressProps extends Omit<Ux4gCircularProgressProps, 'value'> {
  value: number;
  duration?: number;
}

const AnimatedProgress = Animated.createAnimatedComponent(
  class extends React.Component<Ux4gCircularProgressProps> {
    render() {
      return <Ux4gCircularProgress {...this.props} />;
    }
  }
);

export const Ux4gAnimatedCircularProgress: React.FC<Ux4gAnimatedCircularProgressProps> = ({
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

  return <Ux4gCircularProgress {...rest} value={currentValue} />;
};
