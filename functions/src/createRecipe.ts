import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as dotenv from "dotenv";
import { askRecipe } from "./actions/gpt.action";
import {generateImage} from "./actions/dalle.action";

dotenv.config();

export interface RecipeData {
    image: string;
    name: string;
    description: string;
    ingredients: string[];
}

admin.initializeApp();

const db = admin.firestore();
const storage = admin.storage();

export const createRecipe = functions
    .runWith({
        timeoutSeconds: 300,
    })
    .https.onCall(async ({ ingredients }, context) => {

        if (!context.auth?.uid) {
            throwUnauthorizedRequestError()
        }

        const apiKey = process.env.OPENAI_API_KEY;

        if (!apiKey) {
            throw new Error('No openai api key');
        }

        const startTime = performance.now();

        const recipeData = await askRecipe(apiKey, ingredients);

        if (!recipeData) {
            throw new Error('Invalid response');
        }

        recipeData.image = (await generateImage(apiKey, recipeData.image, storage, context.auth?.uid)) || ''

        const endTime = performance.now();
        const elapsedTimeInSeconds = (endTime - startTime) / 1000;
        console.log(`Request took ${elapsedTimeInSeconds} seconds to execute`);

        const { image, name, description } = recipeData;

        const recipe = {
            image,
            name,
            description,
            userId: context.auth?.uid,
            ingredients: ingredients,
            createdAt: Date.now()
        };

        const recipeRef = await db.collection('recipes').add(recipe);
        const recipeSnapshot = await recipeRef.get();

        return {
            id: recipeRef.id,
            ...recipeSnapshot.data()
        };
});

function throwUnauthorizedRequestError(): never {
    throw new functions.https.HttpsError('unauthenticated', 'The function must be called while authenticated.');
}
