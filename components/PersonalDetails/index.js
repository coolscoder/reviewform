import React from 'react'
import Title from '../@core/Title'
import Input from '../@core/Input'

const PersonalDetails = () => {
  return (
    <>
      <Title title="Personal Details" />
      <Input
        label="1. Your Name"
        name="name"
      />
      <Input
        label="2. Your Email"
        name="email"
      />
    </>
  )
}

export default PersonalDetails