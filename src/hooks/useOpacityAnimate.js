import {Animated} from 'react-native';

export const useOpacityAnimate = (ref, callback) => {
  return () => {
    ref.setValue(0.5);
    Animated.timing(ref, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
    callback && callback();
  };
}