import React, { useState } from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Title from '../@core/Title'
import Ratings from '../@core/Ratings'
import Input from '../@core/Input'
import Questions from './Questions'
import styles from './styles.module.css'

const RATINGS = [
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

const OPTIONS = [
  "10. I would engage this Agent again in buying or selling a property.",
  "11. I would recommend this Agent to a family member and/or a friend.",
  "12. The Agent and Agency have my permission to use my testimonial in their marketing and promotional materials.",
]

const Survey = () => {
  const [caption, setCaption] = useState('')
  const [bodytext, setBodytext] = useState('')

  return (
    <div className={styles.survey}>
      <Title title="Survey Questions" />
      {RATINGS.map((item, index) => (
        <Ratings key={`rt-${index}`} label={item} />
      ))}
      {OPTIONS.map((item, index) => (
        <Questions key={`qu-${index}`} label={item} />
      ))}
      <p className={styles.label}>13. Please tell us more about your experience with the Agent:</p>
      <Input value={caption} placeholder='Header Caption' onChange={e => setCaption(e.target.value)} />
      <TextareaAutosize
        minRows={10}
        value={bodytext}
        placeholder='Body Text'
        onChange={e => setBodytext(e.target.value)}
      />
    </div>
  )
}

export default Survey