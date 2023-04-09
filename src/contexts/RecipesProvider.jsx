import {createContext, useState} from 'react';
import {addRecipe, removeRecipe} from '../services/RecipeData.service';

export const RecipesContext = createContext();

const RecipesProvider = ({children}) => {
  const [recipes, setRecipes] = useState(null);

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        setRecipes: recipeList => setRecipes(recipeList),
        addRecipe: (recipe, ingredients, user) => {
          const newRecipe = {...recipe, ingredients, userId: user.uid, createdAt: Date.now()};
          addRecipe(newRecipe).then(res => {
            setRecipes(prevState => ([...prevState, res]));
          });
        },
        removeRecipe: (recipeId) => {
          removeRecipe(recipeId).then(() => {
            setRecipes(prevState => prevState.filter(recipe => recipe.id !== recipeId));
          });
        }
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
}

export default RecipesProvider;