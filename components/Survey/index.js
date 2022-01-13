import React, { useContext } from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { FormContext } from '../../context'
import Title from '../@core/Title'
import Ratings from '../@core/Ratings'
import Input from '../@core/Input'
import Questions from './Questions'
import styles from './styles.module.css'

const RATINGS = [
  {
    label: "1. Agent's ability to communicate in timely, accurate and clear manner.",
    name: 'communicate_ability',
  },
  {
    label: "2. Agent's commitment to complete the transaction process according to client's instructions and agreed expectations.",
    name: 'complete_commitment',
  },
  {
    label: "3. Agent's ability to provide value add services beyond the call of duty.",
    name: 'provide_ability',
  },
  {
    label: "4. Agent's familiarity with the property transaction process, contracts used, payment schedule and stamp duties payable.",
    name: 'familiarity',
  },
  {
    label: "5. Agent's knowledge of the property market trends and activities.",
    name: 'property_knowledge',
  },
  {
    label: "6. Agent's honesty, reliabilty and professionalism.",
    name: 'honesty',
  },
  {
    label: "7. Agent's ability to market your property to interested parties/ search for properties that meet your requirements.",
    name: 'market_ability',
  },
  {
    label: "8. Agent's ability to negotiate on your behalf in the property transaction.",
    name: 'negotiate_ability',
  },
  {
    label: "9. Overall satisfaction with the Agent",
    name: 'overall_satisfaction',
  },
]

const OPTIONS = [
  {
    label: "10. I would engage this Agent again in buying or selling a property.",
    name: "agent_again",
  },
  {
    label: "11. I would recommend this Agent to a family member and/or a friend.",
    name: "agent_family",
  },
  {
    label: "12. The Agent and Agency have my permission to use my testimonial in their marketing and promotional materials.",
    name: "agent_permission",
  }
]

const Survey = () => {
  const { register } = useContext(FormContext)

  return (
    <div className={styles.survey}>
      <Title title="Survey Questions" />
      {RATINGS.map((item, index) => (
        <Ratings key={`rt-${index}`} data={item} />
      ))}
      {OPTIONS.map((item, index) => (
        <Questions key={`qu-${index}`} data={item} />
      ))}
      <p className={styles.label}>13. Please tell us more about your experience with the Agent:</p>
      <Input placeholder='Header Caption' name="header_caption" />
      <TextareaAutosize
        minRows={10}
        {...register("body_text")}
        name="body_text"
        placeholder='Body Text'
      />
    </div>
  )
}

export default Survey