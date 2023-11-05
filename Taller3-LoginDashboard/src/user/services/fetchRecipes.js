import { RecipesModel } from '../models/recipe.models'
const BASE_URL = 'https://api.sampleapis.com/recipes/recipes'

export const fetchRecipes = async () => {
  console.log('Fetching recipes...')
  return fetch(`${BASE_URL}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error fetching data from API')
      }
      return res.json()
    })
    .then((data) => {
      const newRecipe = data.map(recipe => {
        const { id, title, course, cuisine, totalTime, servings, ingredients, directions, photoUrl, calories } = recipe
        return new RecipesModel(id, title, course, cuisine, totalTime, servings, ingredients, directions, photoUrl, calories)
      })
      return newRecipe
    })
    .catch((e) => {
      console.log(e)
      throw new Error(e)
    })
}
