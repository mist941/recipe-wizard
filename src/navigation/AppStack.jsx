import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import {routes} from '../constants';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name={routes.home}
        component={HomeScreen}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;