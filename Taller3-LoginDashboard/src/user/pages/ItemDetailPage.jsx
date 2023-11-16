import React from 'react'
import { Button } from '../components'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './ItemDetail.module.css'

export function ItemDetailPage () {
  const navigate = useNavigate()
  const location = useLocation()

  const recipe = location.state

  const { calories, course, cuisine, directions, ingredients, photoUrl, servings, title, totalTime } = recipe

  const ingredientList = ingredients.split('\n').map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ))

  console.log(ingredientList)

  const altImage = '../src/Assets/NoImage.png'

  return (
    <div className={styles.RecipeContent}>
      <div className={styles.RecipeDescription}>
        <header className={styles.header}>
          <Button onClick={() => navigate('/dashboard')} title='Go back' />
          <h1>{title}</h1>
          <h3>{course}</h3>
        </header>

        <main className={styles.main}>
          <div className={styles.RecipeCaracteristics}>
            <p><b>Cuisine: </b> {cuisine || 'Other'} </p>
            <p><b>Preparation time: </b> {totalTime + ' minutes' || 'Not specified'} </p>
            <p><b>Servings: </b> {servings || 'Not specified'} </p>
            <p><b>Calories: </b> {calories || 'Not specified'} </p>
          </div>
          <div className={styles.RecipeIndications}>
            <h2>Ingredients</h2>
            <p>{ingredientList}</p>
            <h2>Preparation</h2>
            <p>{directions}</p>
          </div>
        </main>
      </div>

      <div className={styles.RecipeImage}>
        <img
          src={photoUrl || altImage}
          alt={title}
        />
      </div>
    </div>
  )
}
