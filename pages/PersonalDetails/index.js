import React, { useState } from 'react'
import Title from '../../components/Title'
import Input from '../../components/Input'
import styles from './styles.module.css'

const PersonalDetails = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div className={styles.personal}>
      <Title title="Personal Details" />
      <Input
        label="1. Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Input
        label="2. Your Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
    </div>
  )
}

export default PersonalDetails