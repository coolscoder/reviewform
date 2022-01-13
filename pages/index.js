import React, { createContext } from 'react'
import { useForm } from 'react-hook-form'
import { FormContext } from '../context'
import Header from '../components/Header'
import Instructions from '../components/Instructions'
import Agent from '../components/Agent'
import Survey from '../components/Survey'
import Transacted from '../components/Transacted'
import PersonalDetails from '../components/PersonalDetails'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

const Home = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log("~~~~~~~>>>   ", data)


  return (
    <FormContext.Provider value={{ register }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Header />
        <div className={styles.container}>
          <Instructions />
          <Agent />
          <Survey />
          <Transacted />
          <PersonalDetails register={register} />
        </div>
        <Footer />
      </form>
    </FormContext.Provider>
  )
}

export default Home