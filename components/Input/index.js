import React from 'react'
import TextField from '@mui/material/TextField'
import styles from './styles.module.css'

const Input = ({ label = '', value, onChange }) => (
  <>
    <p className={styles.label}>{label}</p>
    <TextField
      value={value}
      onChange={onChange}
    />
  </>
)

export default Input