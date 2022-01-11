import Header from './Header'
import Instructions from './Instructions'
import Agent from './Agent'
import Survey from './Survey'
import Transacted from './Transacted'
import PersonalDetails from './PersonalDetails'
import Footer from './Footer'
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