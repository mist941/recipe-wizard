import {getFunctions, httpsCallable} from 'firebase/functions';
import {getFirestore} from 'firebase/firestore';
import {getStorage, ref, getDownloadURL} from 'firebase/storage';

import firebase from "firebase/compat";

export async function createRecipe(ingredients) {
  const functions = getFunctions(firebase.default.apps[0]);

  try {
    const createRecipeFn = httpsCallable(functions, 'createRecipe', { timeout: 30000 });
    const result = await createRecipeFn({ ingredients });
    return result.data;
  } catch (error) {
    console.error('Error calling function:', error);
  }
}

export async function fetchUserRecipes(user) {
  const storage = getStorage(firebase.default.apps[0])
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

    return await Promise.all(recipes.map(async recipe => {
      const image = await getDownloadURL(ref(storage, recipe.image));
      return {...recipe, image}
    }));
  } catch (e) {
    console.error('Error fetching recipes for user', user.uid, ':', e);
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

