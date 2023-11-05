import React from 'react'
import { Header, RecipeCard, TrendingCard } from '../components'

export function DashboardPage () {
  const mainStyle = {
    textAlign: 'left',
    margin: '15vh 0 0 2vw'
  }

  return (
    <>
      <Header />
      <main style={mainStyle}>
        <div>
          <h1>Trending</h1>
          <TrendingCard />
        </div>
        <div>
          <h1>Find recipes</h1>
          <RecipeCard />
        </div>
      </main>
    </>
  )
}
