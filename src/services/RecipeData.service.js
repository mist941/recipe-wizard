import {getFirestore} from 'firebase/firestore';
import firebase from "firebase/compat";

export async function createRecipe(ingredients) {
  try {
    return fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "I am a professional cook who can invent unexpected dishes from basic ingredients is a culinary mastermind."
          },
          {
            role: "user", content:
              `
                        create a recipe for me with the following ingredients ${ingredients.join(', ')}. do not add extra ingredients, in write your answer in the following json form.

                        {
                            name: ...,
                            description: (this will be the recipe),
                            image: (here write a prompt to generate a photo for this dish)
                        }
                        `
          }
        ],
      }),
    }).then(response => response.json());
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


export async function removeRecipe(id) {
  const recipesRef = getRecipeCollection();
  return recipesRef.doc(id).delete();
}

export async function markAsFavorite(id) {
  const recipesRef = getRecipeCollection();
  return recipesRef.doc(id).update({isFavorite: true});
}

function getRecipeCollection() {
  const store = getFirestore(firebase.default.apps[0]);
  return store.collection('recipes');
}

function parseGptResponse(content) {
  const regex = /{[\s\S]*}/;
  const match = content.match(regex);
  const jsonStr = match ? match[0] : null;
  return jsonStr ? JSON.parse(jsonStr) : null;
}
