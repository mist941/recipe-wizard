import axios from "axios";
import {RecipeData} from "../createRecipe";


export async function askRecipe(apiKey: string, ingredients: string[]): Promise<RecipeData | null> {
    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "I am a professional cook who can invent unexpected dishes from basic ingredients is a culinary mastermind." },
                    { role: "user", content:
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
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                },
            }
        );

        return parseGptResponse(response.data.choices[0].message.content)

    } catch (error: unknown | { response?: { data?: string } } | { message?: string } ) {
        console.error("Error:", (error as any).response?.data || (error as any).message);
        return null
    }
}

function parseGptResponse(content: string): RecipeData {
    const regex = /{[\s\S]*}/;
    const match = content.match(regex);
    const jsonStr = match ? match[0] : null;
    return jsonStr ? JSON.parse(jsonStr) : null;
}
