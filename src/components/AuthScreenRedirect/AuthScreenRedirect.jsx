import React, {useRef} from 'react';
import {Animated, Pressable, View, Text} from 'react-native';
import {useOpacityAnimate} from '../../hooks/useOpacityAnimate';
import {AuthScreenRedirectStyles} from './AuthScreenRedirect.styles';
import {routes} from '../../constants';

const AuthScreenRedirect = ({type, onClick}) => {
  const animatedOpacity = useRef(new Animated.Value(1)).current;
  const handlePress = useOpacityAnimate(animatedOpacity, onClick);

  let message = "Don’t have an account?";

  if (type === routes.login) {
    message = "Back to";
  }

  return (
    <View style={AuthScreenRedirectStyles.container}>
      <Text style={AuthScreenRedirectStyles.message}>{message}</Text>
      <Pressable onPress={handlePress}>
        <Animated.View style={{opacity: animatedOpacity}}>
          <Text style={AuthScreenRedirectStyles.type}>{type}</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default AuthScreenRedirect;