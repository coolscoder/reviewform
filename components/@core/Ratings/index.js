import React, { useContext, useState } from 'react'
import { FormContext } from '../../../context'
import Rating from '@mui/material/Rating'
import { Input } from '@mui/material'
import styles from './styles.module.css'

const Ratings = ({ data }) => {
  const { register } = useContext(FormContext)
  const [rate, setRate] = useState(5)

  return (
    <div>
      <p className={styles.label}>{data.label}</p>
      <div className={styles.hidden}>
        <Input value={rate} {...register(data.name)} />
      </div>
      <div className={styles.container}>
        <Rating value={rate} onChange={(_, e) => setRate(e)} />
      </div>
    </div>
  )
}

export default Ratings