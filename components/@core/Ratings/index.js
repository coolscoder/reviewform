import React from 'react'
import Rating from '@mui/material/Rating'
import styles from './styles.module.css'

const Ratings = ({ label='', rate=5 }) => (
  <div>
    <p className={styles.label}>{label}</p>
    <div className={styles.container}>
      <Rating defaultValue={rate} />
    </div>
  </div>
)

export default Ratings