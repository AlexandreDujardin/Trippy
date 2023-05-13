import { useState } from 'react'
import SubmitButton from './SubmitButton'
import TextInput from './TextInput'

function LoginForm ({ onSubmit }) {
  const [credentials, setCredentials] = useState({
    mail: 'oki.test@gmail.com',
    password: 'bi'
  })

  const handleChange = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value
    setCredentials({
      ...credentials,
      [inputName]: inputValue
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(credentials)
  }

  return (
    <>
      <h2>Se connecter</h2>
      <form noValidate onSubmit={handleSubmit}>
        <TextInput
          label='Email'
          type='email'
          name='mail'
          onChange={handleChange}
          value={credentials.mail}
        />
        <br />
        <TextInput
          label='Mot de passe'
          type='password'
          name='password'
          onChange={handleChange}
          value={credentials.password}
        />
        <br />
        <SubmitButton value='Se connecter' />
      </form>
    </>
  )
}

export default LoginForm
