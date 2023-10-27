import React from 'react'
import styles from './DashboardPage.module.css'
import { Header } from '../components'
import { RecipeContextProvider } from '../context/RecipeContextProvider'

export function DashboardPage () {
  return (
    <>
      <RecipeContextProvider>
        <Header />
        <main className={styles.Main}>
          <div className={styles.TrendingDiv}>
            <h1>Trending</h1>
            {/* <RecipeCard /> */}
          </div>
          <div className={styles.FindingDiv}>
            <h1>Find recipes</h1>
            <img />
          </div>
        </main>
      </RecipeContextProvider>
    </>
  )
}
