import React, { useContext } from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { FormContext } from '../../context'
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
  const { register } = useContext(FormContext)

  return (
    <div className={styles.agent}>
      <Title title="Agent Information" />
      <Input
        label="1. Agent's Name"
        name="agent_name"
        defaultValue="John Doe"
      />
      <Input
        label="2. Agent's Contact Number"
        name="agent_number"
        defaultValue="+65 9876 5432"
      />
      <p className={styles.title}>3. Transaction Type</p>
      <RadioGroup >
        {TYPES.map(item => (
          <FormControlLabel
            key={item.value}
            value={item.value}
            control={<Radio />}
            label={item.label}
            {...register("transation_type")}
            />
        ))}
      </RadioGroup>
    </div>
  )
}

export default Agent