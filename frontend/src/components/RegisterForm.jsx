import { useState } from 'react'
import TextInput from './TextInput'
import SubmitButton from './SubmitButton'

function RegisterForm ({ onSubmit }) {
  const [credentials, setCredentials] = useState({
    mail: 'toto@tata.fr',
    password: 'secret',
    lastname: 'tata',
    firstname: 'toto',
    age: '18',
    gender: 'female',
    phone: '0102030405',
    city: 'Cancun',
    description: 'test'
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
        <br />
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
        <TextInput
          label='Nom'
          type='text'
          name='lastname'
          onChange={handleChange}
          value={credentials.lastname}
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
          label='Age'
          type='number'
          name='age'
          onChange={handleChange}
          value={credentials.age}
        />
        <br />
        <TextInput
          label='Genre'
          type='text'
          name='gender'
          onChange={handleChange}
          value={credentials.gender}
        />
        <br />
        <TextInput
          label='Téléphone'
          type='text'
          name='phone'
          onChange={handleChange}
          value={credentials.phone}
        />
        <br />
        <TextInput
          label='Ville'
          type='text'
          name='city'
          onChange={handleChange}
          value={credentials.city}
        />
        <br />
        <TextInput
          label='Description'
          type='text'
          name='description'
          onChange={handleChange}
          value={credentials.description}
        />
        <br />
        <SubmitButton value='Créer un compte' />
      </form>
    </>
  )
}

export default RegisterForm
