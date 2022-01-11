import React from 'react'
import TextField from '@mui/material/TextField'
import styles from './styles.module.css'

const Input = ({ label = '', value, placeholder='', onChange }) => (
  <>
    <p className={styles.label}>{label}</p>
    <TextField
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </>
)

export default Input