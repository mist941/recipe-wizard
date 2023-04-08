import React from 'react';
import {View, Text} from 'react-native';
import {AuthHeaderStyles} from './AuthHeader.styles';

const AuthHeader = ({type}) => {
  return (
    <View style={AuthHeaderStyles.container}>
      <Text style={AuthHeaderStyles.title}>{type}</Text>
      <Text style={AuthHeaderStyles.subTitle}>Access account</Text>
    </View>
  );
};

export default AuthHeader;