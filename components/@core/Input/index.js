import React, { useContext } from 'react'
import { FormContext } from '../../../context'
import TextField from '@mui/material/TextField'
import styles from './styles.module.css'

const Input = ({
    label = '',
    name = '',
    defaultValue = '',
    placeholder = '',
  }) => {
    const { register } = useContext(FormContext)

    return (
      <>
        <p className={styles.label}>{label}</p>
        <TextField
          {...register(name)}
          defaultValue={defaultValue}
          placeholder={placeholder}
        />
      </>
    )
  }

export default Input