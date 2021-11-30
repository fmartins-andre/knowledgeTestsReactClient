import { FC } from 'react'
import AuthService from '@/services/AuthService'
import { usernameSelector, isAuthenticatedSelector } from '@/services/authReducer'
import { useSelector } from 'react-redux'

const Session: FC = props => {
  const username = useSelector(usernameSelector)
  const isAuthenticated = useSelector(isAuthenticatedSelector)

  return (
    <div>
      session
      <p>username: {username}</p>
      {isAuthenticated
        ? <p><button onClick={() => AuthService.logout()}>logout</button></p>
        : <p><button onClick={() => AuthService.login()}>login</button></p>
      }

    </div>
  )
}

export default Session
