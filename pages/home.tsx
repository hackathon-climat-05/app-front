import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import { Table } from '../components/Table'

const userData = {
    name: "Léo",
    scores: {
        global: 79,
        kg: 55.10,
        details: [
          {
              name: "Messagerie",
              score: 10
          },
          {
            name: "Drive",
            score: 10
            },
            {
                name: "Transports",
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
        <h2>Cette semaine</h2>
        <div className={styles.table}>
          <Table/>
        </div>
        <div className={styles.detailedScore}>
            <h2>Consommation détaillée</h2>
            <div>
                <div className={styles.category}>
                    <h3>{userData.scores.details[0].name}</h3>
                    <p>{userData.scores.details[0].score}kg / semaine</p>
                </div>
                <div className={styles.category}>
                    <h3>{userData.scores.details[1].name}</h3>
                    <p>{userData.scores.details[1].score}kg / semaine</p>
                </div>
                <div className={styles.category}>
                    <h3>{userData.scores.details[2].name}</h3>
                    <p>{userData.scores.details[2].score}kg / semaine</p>
                </div>
            </div>
        </div>
      </main>        
    </div>
  )
}

export default Home