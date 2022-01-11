import React, { useState } from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Title from '../@core/Title'
import Input from '../@core/Input'
import styles from './styles.module.css'

const TYPES = [
  { label: 'Buyer', value: 'buyer'},
  { label: 'Seller', value: 'seller'},
  { label: 'Landlord', value: 'landlord'},
  { label: 'BuyTenenter', value: 'tenent'},
]

const Agent = () => {
  const [name, setName] = useState('John Doe')
  const [number, setNumber] = useState('+65 9876 5432')

  return (
    <div className={styles.agent}>
      <Title title="Agent Information" />
      <Input
        label="1. Agent's Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Input
        label="2. Agent's Contact Number"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <p className={styles.title}>3. Transaction Type</p>
      <RadioGroup>
        {TYPES.map(item => (
          <FormControlLabel
            key={item.value}
            value={item.value}
            control={<Radio />}
            label={item.label} />
        ))}
      </RadioGroup>
    </div>
  )
}

export default Agent