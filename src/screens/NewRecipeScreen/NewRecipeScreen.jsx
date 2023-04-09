import React, {useContext, useState} from 'react';
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper';
import {createRecipe} from '../../services/RecipeData.service';
import NewRecipeContent from './component/NewRecipeContent/NewRecipeContent';
import NewRecipeDetails from './component/NewRecipeDetails/NewRecipeDetails';
import {RecipesContext} from '../../contexts/RecipesProvider';
import {AuthContext} from '../../contexts/AuthProvider';

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

  const saveRecipe = () => addRecipe(recipe, ingredients, user);

  return (
    <ScreenWrapper containerHeight="75%">
      {recipe ? (
        <NewRecipeDetails
          recipe={recipe}
          skipRecipe={skipRecipe}
          saveRecipe={saveRecipe}
          ingredients={ingredients}
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