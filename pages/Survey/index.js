import React, { useState } from 'react'
import Title from '../../components/Title'
import Ratings from '../../components/Ratings'
import styles from './styles.module.css'

const LABELS = [
  "1. Agent's ability to communicate in timely, accurate and clear manner.",
  "2. Agent's commitment to complete the transaction process according to client's instructions and agreed expectations.",
  "3. Agent's ability to provide value add services beyond the call of duty.",
  "4. Agent's familiarity with the property transaction process, contracts used, payment schedule and stamp duties payable.",
  "5. Agent's knowledge of the property market trends and activities.",
  "6. Agent's honesty, reliabilty and professionalism.",
  "7. Agent's ability to market your property to interested parties/ search for properties that meet your requirements.",
  "8. Agent's ability to negotiate on your behalf in the property transaction.",
  "9. Overall satisfaction with the Agent",
]

const Survey = () => {
  const [caption, setCaption] = useState('')
  const [bodytext, setBodytext] = useState('')

  return (
    <div className={styles.survey}>
      <Title title="Survey Questions" />
      {LABELS.map((item, index) => (
        <Ratings key={`rt-${index}`} label={item} />
      ))}
    </div>
  )
}

export default Survey