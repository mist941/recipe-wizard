import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {routes} from '../constants';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import NewRecipeScreen from '../screens/NewRecipeScreen/NewRecipeScreen';
import AllRecipesScreen from '../screens/AllRecipesScreen/AllRecipesScreen';

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
        options={{header: () => {}}}
      />
      <Stack.Screen
        name={routes.newRecipe}
        component={NewRecipeScreen}
        options={{header: () => {}}}
      />
      <Stack.Screen
        name={routes.allRecipes}
        component={AllRecipesScreen}
        options={{header: () => {}}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;