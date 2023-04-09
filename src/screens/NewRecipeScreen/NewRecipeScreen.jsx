import React, {useContext, useState} from 'react';
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper';
import {createRecipe} from '../../services/RecipeData.service';
import NewRecipeContent from './component/NewRecipeContent/NewRecipeContent';
import {RecipesContext} from '../../contexts/RecipesProvider';
import {AuthContext} from '../../contexts/AuthProvider';
import RecipeDetails from '../../components/RecipeDetails/RecipeDetails';

const NewRecipeScreen = () => {
  const {addRecipe} = useContext(RecipesContext);
  const {user} = useContext(AuthContext);
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [recipeInProgress, setRecipeProgress] = useState(false);

  const generateRecipe = () => {
    setRecipeProgress(true);
    createRecipe(ingredients).then(res => {
      setRecipe(res);
      setRecipeProgress(false);
    });
  }

  const deleteIngredient = ingredient => {
    setIngredients(prevState => prevState.filter(i => i !== ingredient));
  }

  const skipRecipe = () => {
    setRecipe(null);
  }

  const saveRecipe = () => {
    addRecipe(recipe, ingredients, user);
    setRecipe(null);
    setIngredients([]);
  };

  return (
    <ScreenWrapper containerHeight="75%">
      {recipe ? (
        <RecipeDetails
          recipe={recipe}
          skipRecipe={skipRecipe}
          saveRecipe={saveRecipe}
        />
      ) : (
        <NewRecipeContent
          recipeInProgress={recipeInProgress}
          deleteIngredient={deleteIngredient}
          generateRecipe={generateRecipe}
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
      )}
    </ScreenWrapper>
  );
};

export default NewRecipeScreen;