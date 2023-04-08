import React, {useRef} from 'react';
import {Animated, Pressable} from 'react-native';
import {useOpacityAnimate} from '../../hooks/useOpacityAnimate';
import {HeaderButtonStyles} from './HeaderButton.styles';

const HeaderButton = ({onClick, Icon}) => {
  const animatedOpacity = useRef(new Animated.Value(1)).current;
  const handlePress = useOpacityAnimate(animatedOpacity, onClick);

  return (
    <Pressable onPress={handlePress}>
      <Animated.View style={[
        HeaderButtonStyles.button,
        {opacity: animatedOpacity}
      ]}>
        <Icon/>
      </Animated.View>
    </Pressable>
  );
};

export default HeaderButton;