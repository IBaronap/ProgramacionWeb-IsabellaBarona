import { useState, useRef } from 'react'

export const useForm = (handleUserSubmit) => {
  const [query, setQuery] = useState('')

  const inputRef = useRef(null)

  const disableBtn = query.trim() === ''

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim() === '' || query.trim().length < 2) {
      return
    }
    if (disableBtn) {
      return
    }
    handleUserSubmit(query)
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
    handleUserSubmit(query)
  }

  return {
    handleSubmit,
    handleChange,
    query,
    inputRef,
    disableBtn
  }
}
