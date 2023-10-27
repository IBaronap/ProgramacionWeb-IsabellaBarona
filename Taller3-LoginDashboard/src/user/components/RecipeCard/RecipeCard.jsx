import React from 'react'
// import styles from './RecipeCard.module.css'
import { useApp } from '../../hooks/useApp'

export function RecipeCard () {
  const {
    recipes
  } = useApp

  return (
    <div>
      {
        recipes.map(recipe => {
          const { id, title, course, photoUrl } = recipe
          return (
            <li key={id}>
              <img
                src={photoUrl}
                alt={title}
              />
              <h3>{title}</h3>
              <p>{course}</p>
            </li>
          )
        })
      }
    </div>
  )
}
