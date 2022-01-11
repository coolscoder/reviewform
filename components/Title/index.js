import React from 'react'
import styles from './styles.module.css'

const Title = ({ title }) => (
  <div className={styles.container}>
    <span className={styles.title}>{title}</span>
  </div>
)

export default Title