import React, {useContext} from 'react';
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper';
import {RecipesContext} from '../../contexts/RecipesProvider';
import {View} from 'react-native';
import EmptyRecipes from './components/EmptyRecipes/EmptyRecipes';
import {buttonTypes, routes} from '../../constants';
import Button from '../../components/Button/Button';

const HomeScreen = ({navigation}) => {
  const {recipes} = useContext(RecipesContext);

  return (
    <ScreenWrapper containerHeight='70%'>
      {recipes?.length ? <View></View> : <EmptyRecipes/>}
      <Button
        type={buttonTypes.primary}
        text="Add new recipe"
        onClick={() => navigation.navigate(routes.newRecipe)}
      />
    </ScreenWrapper>
  );
};

export default HomeScreen;