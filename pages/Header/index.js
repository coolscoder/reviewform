import React from 'react'
import styles from './styles.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <p className={styles.title}>Review Form</p>
      <p><strong>5 mins</strong> estimated time to complete</p>
    </div>
  )
}

export default Header