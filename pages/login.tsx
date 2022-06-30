import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Header from '../components/Header'
import styles from '../styles/Login.module.css'
import Image from 'next/image'

const Login: NextPage = () => {
  const router = useRouter()
  const [isLoading, setLoading] = useState(false)

  const onGoogleLogin = () => {
    setLoading(true)

    fetch("/api/auth/login/google")
      .then(async res => {
        const data = await res.json()
        if (res.status >= 400)
          throw data

        router.push(data.url)
      })
      .catch(error => {
        console.error(error)
        setLoading(false)
      })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Login &ndash; Greenmile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenue sur...
        </h1>
        <div className={styles.logo}>
          <Image src="/logo_greenmile.png" alt="Vercel Logo" width={157} height={28} />
        </div>
        <button className={styles.login} onClick={onGoogleLogin} disabled={isLoading}><Image   src="/google_login.png" alt="Vercel Logo" width={350} height={54} /></button>
      </main>
    </div>
  )
}

export default Login
