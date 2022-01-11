import React from 'react'
import TimelapseIcon from '@mui/icons-material/Timelapse'
import styles from './styles.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <p className={styles.title}>Review Form</p>
      <p className={styles.description}>
        <TimelapseIcon />
        <span className={styles.time}>5 mins</span>
        <span>estimated time to complete</span>
      </p>
    </div>
  )
}

export default Header