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
  const store = getFirestore(firebase.default.apps[0]);
  const auth = getAuth(firebase.default.apps[0]);

  const userId = auth.currentUser.uid;

  const recipesRef = store.collection('recipes');
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
