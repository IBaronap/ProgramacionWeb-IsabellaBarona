import React from 'react'
import styles from './DashboardPage.module.css'
import { Header, RecipeCard, TrendingCard } from '../components'
import { UserContextProvider } from '../context/UserContextProvider'

export function DashboardPage () {
  return (
    <>
      <UserContextProvider>
        <Header />
        <main className={styles.Main}>
          <div className={styles.TrendingDiv}>
            <h1>Trending</h1>
            <TrendingCard />
          </div>
          <div className={styles.FindingDiv}>
            <h1>Find recipes</h1>
            <RecipeCard />
          </div>
        </main>
      </UserContextProvider>
    </>
  )
}
