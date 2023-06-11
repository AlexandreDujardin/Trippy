import { useState } from 'react';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';
import '../styles/Form.scss'


function Step1({ credentials, handleChange, nextStep }) {
  return (
    <>
      <form>
        <h2>Inscription - Étape 1</h2>
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
        <SubmitButton value='Suivant' onClick={nextStep} />
      </form>
    </>
  );
}

function Step2({ credentials, handleChange, nextStep }) {
  return (
    <>
      <form>
        <h2>Inscription - Étape 2</h2>
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
        <SubmitButton value='Suivant' onClick={nextStep} />
      </form>
    </>
  );
}

function Step3({ credentials, handleChange, onSubmit }) {
  return (
    <>
      <form>
        <h2>Inscription - Étape 3</h2>
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
        <SubmitButton value='Créer un compte' onClick={onSubmit} />
      </form>
    </>
  );
}

function RegisterForm({ onSubmit }) {
  const [currentStep, setCurrentStep] = useState(1);
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
  });

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setCredentials({
      ...credentials,
      [inputName]: inputValue
    });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(credentials);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 credentials={credentials} handleChange={handleChange} nextStep={nextStep} />;
      case 2:
        return <Step2 credentials={credentials} handleChange={handleChange} nextStep={nextStep} />;
      case 3:
        return <Step3 credentials={credentials} handleChange={handleChange} onSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <>
      {renderStep()}
    </>
  );
}

export default RegisterForm;
