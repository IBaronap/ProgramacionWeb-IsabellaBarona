import React from 'react'
import styles from './RecipeCard.module.css'
import { useUserApp } from '../../hooks/useUserApp'
import { useNavigate } from 'react-router-dom'

export function RecipeCard () {
  const {
    calorieFilteredRecipes
  } = useUserApp()

  const altImage = './src/Assets/NoImage.png'

  const navigate = useNavigate()

  return (
    <div>
      <div className={styles.CardGrid}>

        {
        calorieFilteredRecipes.map(recipe => {
          const { id, title, photoUrl } = recipe
          return (
            <div onClick={() => navigate(`/recipe/${id}`, { state: recipe })} className={styles.Card} key={`recipe-${id}`}>
              <div>
                <img
                  className={styles.Image}
                  src={photoUrl || altImage}
                  alt={title}
                />
              </div>
              <h3>{title}</h3>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export function TrendingCard () {
  const {
    trendingRecipes
  } = useUserApp()

  const altImage = './src/Assets/NoImage.png'

  const navigate = useNavigate()

  return (

    <div>
      <div className={styles.CardGrid}>
        {
        trendingRecipes.map(trendingRecipe => {
          const { id, title, photoUrl } = trendingRecipe
          return (
            <div onClick={() => navigate(`/recipe/${id}`, { state: trendingRecipe })} className={styles.Card} key={`trending-${id}`}>
              <div>
                <img
                  className={styles.TrendingImage}
                  src={photoUrl || altImage}
                  alt={title}
                />
              </div>
              <h4>{title}</h4>
              <p className={styles.Tag}>Top</p>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}
