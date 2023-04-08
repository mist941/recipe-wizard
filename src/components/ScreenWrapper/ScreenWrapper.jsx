import React from 'react';
import {View} from 'react-native';
import {ScreenWrapperStyles} from './ScreenWrapper.styles';

const ScreenWrapper = ({children, containerHeight='100%'}) => {
  return (
    <View style={ScreenWrapperStyles.wrapper}>
      <View style={[ScreenWrapperStyles.container, {height: containerHeight}]}>
        {children}
      </View>
    </View>
  );
};

export default ScreenWrapper;