import React from 'react';
import AuthStack from './AuthStack';
import {NavigationContainer} from '@react-navigation/native';

const Routes = () => {
  return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
  );
};

export default Routes;