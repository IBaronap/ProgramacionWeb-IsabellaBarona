import React from 'react'
import { Header, RecipeCard, TrendingCard } from '../components'
import { useUserApp } from '../hooks/useUserApp'

export function DashboardPage () {
  const {
    error,
    // selectedCategory,
    isLoading
  } = useUserApp()

  const mainStyle = {
    textAlign: 'left',
    margin: '15vh 0 0 2vw'
  }

  if (isLoading) {
    return (<p>Loading...</p>)
  }

  if (error) {
    return (<p>{error}</p>)
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
