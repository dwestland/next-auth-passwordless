import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

const IndexPage = () => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  if (loading) {
    return <div>Loading...</div>
  }

  if (session) {
    return (
      <div>
        Hello, {session.user.email ?? session.user.name} <br />
        <button type="button" onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    )
  }

  return (
    <div>
      You are not logged in! <br />
      <button type="button" onClick={() => signIn()}>
        Sign in
      </button>
    </div>
  )
}

export default IndexPage
