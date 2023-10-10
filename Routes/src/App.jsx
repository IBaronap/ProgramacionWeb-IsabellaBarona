import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from './Components'
import { HomePage, AboutUsPage, ContactUsPage, PageNotFound } from './Pages'

export function App () {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/aboutus' element={<AboutUsPage/>}/>
        <Route path='/contactus' element={<ContactUsPage />} />
        <Route path='/services' element={<ServicesPage />} />

        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      
      <Footer />
    </>
  )
}
