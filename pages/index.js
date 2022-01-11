import Header from '../components/Header'
import Instructions from '../components/Instructions'
import Agent from '../components/Agent'
import Survey from '../components/Survey'
import Transacted from '../components/Transacted'
import PersonalDetails from '../components/PersonalDetails'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Instructions />
        <Agent />
        <Survey />
        <Transacted />
        <PersonalDetails />
      </div>
      <Footer />
    </>
  )
}

export default Home