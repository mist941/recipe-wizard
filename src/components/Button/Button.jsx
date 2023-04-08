import React, {useRef} from 'react';
import {Animated, Pressable} from 'react-native';
import {useOpacityAnimate} from '../../hooks/useOpacityAnimate';
import {ButtonStyles} from './Button.styles';
import {buttonTypes} from '../../constants';
import {Text} from 'react-native';

const Button = ({onClick, Icon, text = "", type = buttonTypes.primary}) => {
  const animatedOpacity = useRef(new Animated.Value(1)).current;
  const handlePress = useOpacityAnimate(animatedOpacity, onClick);

  return (
    <Pressable onPress={handlePress}>
      <Animated.View style={[
        ButtonStyles.buttonContainer,
        ButtonStyles[type],
        {opacity: animatedOpacity}
      ]}>
        {Icon && <Icon/>}
        {text.length > 0 && <Text style={ButtonStyles.text}>{text}</Text>}
      </Animated.View>
    </Pressable>
  );
};

export default Button;