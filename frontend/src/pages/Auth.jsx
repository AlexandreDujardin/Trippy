import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { useAuth } from '../context/AuthContext'

import { useState } from 'react'

function Auth () {
  const [isRegister, setIsRegister] = useState(false)

  const { login, register } = useAuth()

  const handleSubmit = async (credentials) => {
    if (isRegister) {
      register(credentials)
    } else {
      login(credentials)
    }
  }

  const handleRegisterClick = (event) => {
    event.preventDefault()
    setIsRegister(!isRegister)
  }

  return (
    <>
      <h1>Authentification</h1>
      {
            isRegister
              ? <RegisterForm onSubmit={handleSubmit} />
              : <LoginForm onSubmit={handleSubmit} />
        }
      <div>
        <a onClick={handleRegisterClick} href=''>
          {
                    isRegister
                      ? "J'ai déjà un compte"
                      : "Je n'ai pas de compte"
            }
        </a>
      </div>
    </>
  )
}

export default Auth