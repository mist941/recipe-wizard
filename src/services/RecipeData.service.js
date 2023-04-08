import {getFunctions, httpsCallable} from 'firebase/functions';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
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

export async function fetchUserRecipes() {
  const auth = getAuth(firebase.default.apps[0]);

  const userId = auth.currentUser.uid;

  const recipesRef = getRecipeCollection();
  const query = recipesRef.where('userId', '==', userId);

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
    console.error('Error fetching recipes for user', userId, ':', e);
  }
}


export async function removeRecipe(id) {
  const recipesRef = getRecipeCollection();
  return recipesRef.doc(id).delete();
}

export async function markAsFavorite(id) {
  const recipesRef = getRecipeCollection();
  return recipesRef.doc(id).update({ isFavorite: true });
}

function getRecipeCollection() {
  const store = getFirestore(firebase.default.apps[0]);
  return store.collection('recipes');
}

