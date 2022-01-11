import React from 'react'
import styles from './styles.module.css'

const FEEDBACKS = [
  { rate: 5, desc: 'Excelent' },
  { rate: 4, desc: 'Very Good' },
  { rate: 3, desc: 'Good' },
  { rate: 2, desc: 'Average' },
  { rate: 1, desc: 'Below Average' },
]

const Instructions = () => (
  <>
    <p className={styles.title}>Instructions</p>
    <p className={styles.description}>
      Using the satisfaction scale below, please rate and tick your satisfaction level with the SRI salesperson that served you.
    </p>
    {FEEDBACKS.map(item => (
      <p key={`fd-${item.rate}`} className={styles.rate}>
        {item.rate} = {item.desc}
      </p>
    ))}
    <div className={styles.divider} />
  </>
)

export default Instructions