export class RecipesModel {
  constructor (id, title, course, cuisine, totalTime, servings, ingredients, directions, photoUrl, calories) {
    this.id = id
    this.title = title
    this.course = course
    this.cuisine = cuisine
    this.totalTime = totalTime
    this.servings = servings
    this.ingredients = ingredients
    this.directions = directions
    this.photoUrl = photoUrl
    this.calories = calories
  }
}
