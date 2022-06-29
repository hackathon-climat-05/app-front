import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Loading from '../components/Loading'

const GoogleCallback: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady)
      return

    if (!router.query.code) {
      router.replace("/")
      return
    }

    fetch('/api/auth/login/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code: router.query.code
      })
    })
      .then(async res => {
        const data = await res.json()

        if (res.status >= 400)
          throw data

        router.push('/')
      })
      .catch(error => {
        console.error(error)
      })
  }, [router.isReady])

  return <Loading />
}

export default GoogleCallback
