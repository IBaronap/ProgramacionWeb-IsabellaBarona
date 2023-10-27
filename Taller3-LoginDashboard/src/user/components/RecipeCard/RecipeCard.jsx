import React from 'react'
import styles from './RecipeCard.module.css'
import { useUserApp } from '../../hooks/useUserApp'

export function RecipeCard () {
  const {
    recipes
  } = useUserApp

  console.log(recipes)

  return (
    <div>
      <div className={styles.CardDiv}>
        <div className={styles.Card}>
          <h1 className={styles.Image} />
          <h3>title</h3>
        </div>
        <div className={styles.Card2}>
          <h3>title</h3>
        </div>
      </div>

      {/* {
        recipes.map(recipe => {
          const { id, title, photoUrl } = recipe
          return (
            <div key={id}>
              <img
                src={photoUrl}
                alt={title}
              />
              <h3>{title}</h3>
            </div>
          )
        })
      } */}
    </div>
  )
}

export function TrendingCard () {
  return (
    <div>

      <div className={styles.CardDiv}>
        <div className={styles.Card}>
          <h1 className={styles.Image} />
          <h3>title</h3>
          <p className={styles.Tag}>Top</p>
        </div>
        <div className={styles.Card2}>
          <h3>title</h3>
          <p className={styles.Tag}>Top</p>
        </div>
      </div>
    </div>
  )
}
