import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Header from '../components/Header'
import styles from '../styles/Login.module.css'

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
          Please login
        </h1>

        <button onClick={onGoogleLogin} disabled={isLoading}>Login with Google</button>
      </main>
    </div>
  )
}

export default Login
