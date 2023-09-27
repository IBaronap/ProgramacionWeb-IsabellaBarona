import React from 'react'
// import { useState } from 'react'
import styles from './Filter.module.css'

export function Filter ({ onChange, currentValue, filters }) {
  const handleChange = ({ target }) => {
    onChange(target.value)
  }

  return (
    <ul className={styles.ulFlex}>
      {
        filters.map(({ id, label, value }) => {
          return (
            <li key={id} className={styles.inputLi}>
              <input
                type='radio'
                id={id}
                value={value}
                name='filter'
                onChange={handleChange}
                checked={(currentValue === value)}
                className={styles.radioInput}
              />
              <label htmlFor={id} className={styles.inputLabel}>{label}</label>
            </li>
          )
        })
      }
    </ul>
  )

  // Primer intento

  // const [selectedFilter, setSelectedFilter] = useState('all')

  // const handleFilterChange = (event) => {
  //   const filterValue = event.target.value
  //   setSelectedFilter(filterValue)
  //   onFilterChange(filterValue)
  // }

  // return (
  //   <div className={styles.divFlex}>
  //     <div className={styles.inputDiv}>
  //       <input
  //         type='radio'
  //         id='all'
  //         name='filter'
  //         value='all'
  //         checked={selectedFilter === 'all'}
  //         onChange={handleFilterChange}
  //         className={styles.radioInput}
  //       />
  //       <label htmlFor='all' className={styles.inputLabel}>All</label>
  //     </div>

  //     <div className={styles.inputDiv}>
  //       <input
  //         type='radio'
  //         id='completed'
  //         name='filter'
  //         value='completed'
  //         checked={selectedFilter === 'completed'}
  //         onChange={handleFilterChange}
  //         className={styles.radioInput}
  //       />
  //       <label htmlFor='completed' className={styles.inputLabel}>Completed</label>
  //     </div>

  //     <div className={styles.inputDiv}>
  //       <input
  //         type='radio'
  //         id='pending'
  //         name='filter'
  //         value='pending'
  //         checked={selectedFilter === 'pending'}
  //         onChange={handleFilterChange}
  //         className={styles.radioInput}
  //       />
  //       <label htmlFor='pending' className={styles.inputLabel}>Pending</label>
  //     </div>
  //   </div>
  // )
}
