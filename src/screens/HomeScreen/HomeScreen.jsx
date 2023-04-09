import React, {useContext, useState} from 'react';
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper';
import {RecipesContext} from '../../contexts/RecipesProvider';
import EmptyRecipes from './components/EmptyRecipes/EmptyRecipes';
import {buttonTypes, routes} from '../../constants';
import Button from '../../components/Button/Button';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeDetails from '../../components/RecipeDetails/RecipeDetails';

const HomeScreen = ({navigation}) => {
  const [selectedRecipe, setRecipe] = useState(null);
  const {recipes} = useContext(RecipesContext);

  return (
    <ScreenWrapper containerHeight='80%'>
      {!selectedRecipe && (
        recipes?.length ?
          <RecipeList recipes={recipes} selectRecipe={setRecipe}/> :
          <EmptyRecipes/>
      )}
      {selectedRecipe && (
        <RecipeDetails
          recipe={selectedRecipe}
          unSelectRecipe={() => setRecipe(null)}
        />
      )}
      {!selectedRecipe && (
        <Button
          type={buttonTypes.primary}
          text="Add new recipe"
          onClick={() => navigation.navigate(routes.newRecipe)}
        />
      )}
    </ScreenWrapper>
  );
};

export default HomeScreen;