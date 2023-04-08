import React from 'react';
import {View, Text} from 'react-native';
import {ErrorStyles} from './Error.styles';

const Error = ({error}) => {
  return (
    <View>
      <Text style={ErrorStyles.errText}>{error}</Text>
    </View>
  );
};

export default Error;