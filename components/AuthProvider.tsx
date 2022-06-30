import { useRouter } from 'next/router'
import { ReactNodeLike } from 'prop-types'
import React, {useEffect, useState} from 'react'
import Loading from './Loading'

export const AuthContext = React.createContext<any>(null)

const AuthProvider = ({children}: {children: ReactNodeLike}) => {
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/api/auth/me")
      .then(async res => {
        if (res.status === 401) {
          router.push("/login")
          return
        }

        const data = await res.json()

        if (res.status >= 400)
          throw data

        setUser(data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  if (user === null)
    return <Loading />

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
