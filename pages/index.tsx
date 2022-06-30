import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import { Table } from '../components/Table'
import AuthProvider from '../components/AuthProvider'
import { useEffect, useState } from 'react'
import Loading from '../components/Loading'

const Home: NextPage = () => {
    const [isLoading, setLoading] = useState(false)
    const [userData, setUserData] = useState<any>(null)
    useEffect(() => {
        setLoading(true)
        fetch("/api/data")
        .then(async res => {
            const data = await res.json()
            if (res.status >= 400)
            throw data
            console.log(data)
            setUserData(data);
        })
        .catch(error => {
            console.error(error)
            setLoading(false)
        })

    }, [])

    if (!userData) {
        return <Loading></Loading>
    }
  return (
    <AuthProvider>
        <div className={styles.container}>
            <Head>
            <title>Login &ndash; Greenmile</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header title="L’astuce verte du jour" content="Installer un limiteur de débit sur votre pommeau de douche peut vous permettre de réduire drastiquement votre consommation d’eau !" />
        <main className={styles.main}>
            <h1 className={styles.mainTitle}>
                Bonjour, <span className={styles.userName}>{userData.name}</span> !
            </h1>
            <div className={styles.mainScores}>
                <div className={styles.userScore} style={{backgroundImage: `url("/card_background.png")`}}>
                    <h1>{userData.score}/100</h1>
                </div>
                <div className={styles.userScoreDetail}>
                    <h2>{userData.instant.toFixed(3)} g</h2>
                    <p>CO2 par journée</p>
                    <Image src={"/info.svg"} width="14px" height="14px" alt='info'/>
                </div>
            </div>
            <h2>Cette semaine</h2>
            <div className={styles.table}>
            <Table history={userData.history}/>
            </div>
            <div className={styles.detailedScore}>
                <h2>Consommation détaillée</h2>
                <div>
                    <div className={styles.category}>
                        <h3>{userData.details.drive.name}</h3>
                        <p>{userData.details.drive.value.toFixed(3)}kg / semaine</p>
                    </div>
                    <div className={styles.category}>
                        <h3>{userData.details.meet.name}</h3>
                        <p>{userData.details.meet.value.toFixed(3)}kg / semaine</p>
                    </div>
                </div>
            </div>
        </main>
        </div>
    </AuthProvider>
  )
}

export default Home