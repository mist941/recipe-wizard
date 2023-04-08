import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {routes} from '../constants';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import NewRecipeScreen from '../screens/NewRecipeScreen/NewRecipeScreen';
import AllRecipesScreen from '../screens/AllRecipesScreen/AllRecipesScreen';
import header from '../components/Header/Header';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.home}
        component={HomeScreen}
        options={({ navigation, route }) => header({navigation, route})}
      />
      <Stack.Screen
        name={routes.newRecipe}
        component={NewRecipeScreen}
        options={({ navigation, route }) => header({navigation, route})}
      />
      <Stack.Screen
        name={routes.allRecipes}
        component={AllRecipesScreen}
        options={({ navigation, route }) => header({navigation, route})}
      />
    </Stack.Navigator>
  );
};

export default AppStack;