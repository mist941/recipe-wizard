import {createContext, useState} from 'react';

export const RecipesContext = createContext();

const RecipesProvider = ({children}) => {
  const [recipes, setRecipes] = useState(null);

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        setRecipes: recipeList => setRecipes(recipeList)
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
}

export default RecipesProvider;