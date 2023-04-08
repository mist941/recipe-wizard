import config from "../../config";

const ingredientsEndpoint = 'https://api.edamam.com/auto-complete'

export async function fetchIngredients(query) {
  const response = await fetch(`${ingredientsEndpoint}?q=${query}&app_id=${config.edamamAppId}&app_key=${config.edamamAppKey}`);

  if (response.status !== 200) {
    return [];
  }

  const data = await response.json()
  return Array.from(data)
}
