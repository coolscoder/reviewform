import React, { useContext } from 'react'
import { FormContext } from '../../../context'
import Rating from '@mui/material/Rating'
import styles from './styles.module.css'

const Ratings = ({ label='', rate=5 }) => {
  const { register } = useContext(FormContext)

  return (
    <div>
      <p className={styles.label}>{label}</p>
      <div className={styles.container}>
        <Rating {...register("rate")} defaultValue={rate} />
      </div>
    </div>
  )
}

export default Ratings