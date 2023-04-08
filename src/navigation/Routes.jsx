import React, {useContext, useEffect, useState} from 'react';
import AuthStack from './AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../contexts/AuthProvider';
import {ActivityIndicator} from 'react-native';
import firebase from 'firebase/compat';
import AppStack from './AppStack';
import {fetchUserRecipes} from '../services/RecipeData.service';
import {RecipesContext} from '../contexts/RecipesProvider';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const {setRecipes} = useContext(RecipesContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    if (user){
      setUser(user);
      fetchUserRecipes(user).then(res => setRecipes(res));
    }
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    return firebase.default.auth().onAuthStateChanged(onAuthStateChanged);
  }, []);


  if (initializing) return <ActivityIndicator size="large"/>;

  return (
    <NavigationContainer>
      {user ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
  );
};

export default Routes;