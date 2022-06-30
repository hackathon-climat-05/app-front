import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

const userData = {
    name: "Léo",
    scores: {
        global: 79,
        kg: 55.10,
        details: [
          {
              name: "messagerie",
              score: 10
          },
          {
            name: "drive",
            score: 10
            },
            {
                name: "transports",
                score: 12
            }
        ]
    }
}
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <Head>
        <title>Login &ndash; Greenmile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <h1 className={styles.mainTitle}>
            Bonjour, {userData.name} !
        </h1>
        <div className={styles.mainScores}>
            <div className={styles.userScore} style={{backgroundImage: `url("/greenbg.png")`}}>
                <h1>{userData.scores.global}/100</h1>
            </div>
            <div className={styles.userScoreDetail}>
                <h2>{userData.scores.kg} kg</h2>
                <p>CO2 par journée</p>
            </div>
        </div>
      </main>
        
    </div>
  )
}

export default Home