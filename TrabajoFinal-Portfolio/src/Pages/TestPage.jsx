import React from 'react'
import { Cabezote, ServicesSlider, ProjectForm } from '../components'

export function TestPage () {
    return (
      <>
        <Cabezote type='UI' />
        <Cabezote type='UX' />
        <Cabezote type='Frontend' />
        <Cabezote type='Branding' />
        <Cabezote type='Consultancy' />
        <Cabezote type='Projects' />
  
        <ServicesSlider />
        <ProjectForm />
      </>
    )
  }
  