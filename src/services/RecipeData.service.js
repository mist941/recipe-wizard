import {getFunctions, httpsCallable} from 'firebase/functions';
import firebase from "firebase/compat";

export async function createRecipe(ingredients) {
  const functions = getFunctions(firebase.default.apps[0]);

  try {
    const createRecipeFn = httpsCallable(functions, 'createRecipe');
    const result = await createRecipeFn(ingredients);
    return result.data;
  } catch (error) {
    console.error('Error calling function:', error);
  }
}

export async function fetchUserRecipes(user) {
  const recipesRef = firebase.firestore().collection('recipes');
  const query = recipesRef.where('userId', '==', user.uid);

  try {
    const querySnapshot = await query.get();
    const recipes = [];

    querySnapshot.forEach(doc => {
      const recipe = {
        id: doc.id,
        ...doc.data()
      };
      recipes.push(recipe);
    });
    return recipes;
  } catch (e) {
    console.error('Error fetching recipes for user', user.uid, ':', e);
  }
}
