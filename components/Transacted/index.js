import React from 'react'
import Title from '../@core/Title'
import Input from '../@core/Input'
import styles from './styles.module.css'

const Transacted = () => {
  return (
    <div className={styles.transacted}>
      <Title title="Transacted Property Details" />
      <Input
        label="1. Property Type"
        name="property_type"
        defaultValue="HBD"
      />
      <Input
        label="2. Address"
        name="address_1"
        defaultValue="Ave 1 Robinson"
      />
      <Input
        name="address_2"
        defaultValue="Blk 123, S(000100)"
      />
      <Input
        label="3. Unit Number (Optional)"
        name="unit_number"
      />
    </div>
  )
}

export default Transacted