import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import styles from './Slider.module.css'

export function SliderCard () {
  const { sliderValue, setSliderValue } = useContext(UserContext)

  const handleChange = (event) => {
    setSliderValue(event.target.value)
  }

  return (
    <div>
      <div className={styles.SilderFilter}>
        <h4>Filter by calories</h4>
        <input
          className={styles.Slider}
          type='range'
          min='1'
          max='560'
          value={sliderValue}
          onChange={handleChange}
        />
        <p>{sliderValue}</p>
      </div>
    </div>
  )
}
