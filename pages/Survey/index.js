import React, { useState } from 'react'
import Title from '../../components/Title'
import styles from './styles.module.css'

const Survey = () => {
  const [caption, setCaption] = useState('')
  const [bodytext, setBodytext] = useState('')

  return (
    <div className={styles.survey}>
      <Title title="Survey Questions" />
    </div>
  )
}

export default Survey