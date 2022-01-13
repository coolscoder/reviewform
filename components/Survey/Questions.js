import React, { useContext } from 'react'
import { FormContext } from '../../context'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import styles from './styles.module.css'

const Questions = ({ data }) => {
  const { register }  = useContext(FormContext)
  return (
    <>
      <p className={styles.label}>{data.label}</p>
      <RadioGroup row>
          <FormControlLabel {...register(data.name)} value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel {...register(data.name)} value="no" control={<Radio />} label="No" />
        </RadioGroup>
    </>
  )
}

export default Questions