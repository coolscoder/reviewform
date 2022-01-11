import React, { useState } from 'react'
import Title from '../../components/Title'
import Input from '../../components/Input'
import styles from './styles.module.css'

const Transacted = () => {
  const [type, setType] = useState('HBD')
  const [address1, setAddress1] = useState('Ave 1 Robinson ')
  const [address2, setAddress2] = useState('Blk 123, S(000100)')
  const [unit, setUnit] = useState(0)

  return (
    <div className={styles.transacted}>
      <Title title="Transacted Property Details" />
      <Input
        label="1. Property Type"
        value={type}
        onChange={e => setType(e.target.value)}
      />
      <Input
        label="2. Address"
        value={address1}
        onChange={e => setAddress1(e.target.value)}
      />
      <Input
        value={address2}
        onChange={e => setAddress2(e.target.value)}
      />
      <Input
        label="3. Unit Number (Optional)"
        value={unit}
        onChange={e => setUnit(e.target.value)}
      />
    </div>
  )
}

export default Transacted