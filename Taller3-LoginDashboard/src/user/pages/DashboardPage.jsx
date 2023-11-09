import React from 'react'
import { Header, SliderCard, RecipeCard, TrendingCard } from '../components'
import { useUserApp } from '../hooks/useUserApp'

export function DashboardPage () {
  const {
    isLoading,
    error,
    recipesQuantity
  } = useUserApp()

  const loadingStyle = {
    textAlign: 'center',
    margin: '40vh 40vw',
    padding: '0',
    color: '#861629'
  }

  const mainStyle = {
    textAlign: 'left',
    margin: '15vh 0 0 2vw'
  }

  if (isLoading) {
    return (
      <>
        <Header />
        <h1 style={loadingStyle}>Loading...</h1>
      </>
    )
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
          <SliderCard />
          <p>We found <b> {recipesQuantity} recipes</b> for you</p>
          <RecipeCard />
        </div>
      </main>
    </>
  )
}
