import React, {useContext, useEffect, useState} from 'react';
import AuthStack from './AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from './AuthProvider';
import {ActivityIndicator} from 'react-native';
import firebase from 'firebase/compat';
import AppStack from './AppStack';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
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