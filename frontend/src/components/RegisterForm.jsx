import { useState } from 'react'
import TextInput from './TextInput'
import SubmitButton from './SubmitButton'

function RegisterForm ({ onSubmit }) {
  const [credentials, setCredentials] = useState({
    username: 'test',
    email: 'toto@tata.fr',
    password: 'secret',
    firstname: 'toto',
    lastname: 'tata'
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
      <h2>Inscription</h2>
      <form noValidate onSubmit={handleSubmit}>
        <TextInput
          label="Nom d'utilisateur"
          type='text'
          name='username'
          onChange={handleChange}
          value={credentials.username}
        />
        <br />
        <TextInput
          label='Email'
          type='email'
          name='email'
          onChange={handleChange}
          value={credentials.email}
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
        <TextInput
          label='Prénom'
          type='text'
          name='firstname'
          onChange={handleChange}
          value={credentials.firstname}
        />
        <br />
        <TextInput
          label='Nom'
          type='text'
          name='lastname'
          onChange={handleChange}
          value={credentials.lastname}
        />
        <br />
        <SubmitButton value='Créer un compte' />
      </form>
    </>
  )
}

export default RegisterForm
