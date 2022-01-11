import React, { useState } from 'react'
import Title from '../../components/Title'
import Input from '../../components/Input'
import styles from './styles.module.css'

const Agent = () => {
  const [name, setName] = useState('John Doe')
  const [number, setNumber] = useState('+65 9876 5432')

  return (
    <div className={styles.agent}>
      <Title title="Agent" />
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
    </div>
  )
}

export default Agent