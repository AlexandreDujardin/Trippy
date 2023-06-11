import { useState } from 'react';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';

function Step1({ data, handleChange, nextStep }) {
  return (
    <>
      <form onSubmit={nextStep}>
        <h2>Mettez un titre à ce voyage !</h2>
        <TextInput
          label='name'
          type='text'
          name='name'
          onChange={handleChange}
          value={data.name}
        />
        <SubmitButton value='Suivant' type="submit" />
      </form>
    </>
  );
}

// function Step2({ data, handleChange, nextStep }) {
//   return (
//     <>
//     <form>
//         <TextInput
//           label='Ville'
//           type='text'
//           name='city'
//           onChange={handleChange}
//           value={data.city}
//         />
//         <br />
//         <TextInput
//           label='Pays'
//           type='text'
//           name='country'
//           onChange={handleChange}
//           value={data.country}
//         />
//         <SubmitButton value='Suivant' onClick={nextStep} />
//       </form>
//     </>
//   );
// }

function Step2({ data, handleChange, nextStep }) {
  return (
    <>
      <form onSubmit={nextStep}>
        <h2>Saisissez les dates de ce voyage</h2>
        <TextInput
          label='Date de début'
          type='date'
          name='dateStart'
          onChange={handleChange}
          value={data.dateStart}
        />
        <br />
        <TextInput
          label='Date de fin'
          type='date'
          name='dateEnd'
          onChange={handleChange}
          value={data.dateEnd}
        />
        <SubmitButton value='Suivant' type="submit" />
      </form>
    </>
  );
}

function Step3({ data, handleChange, nextStep }) {
    return (
      <>
        <form onSubmit={nextStep}>
        <h2>Saisissez la description de ce voyage</h2>
          <TextInput
            label='Description du voyage'
            type='textaera'
            name='description'
            onChange={handleChange}
            value={data.description}
          />
          <SubmitButton value='Suivant' type="submit" />
        </form>
      </>
    );
  }

  function Step4({ data, handleChange, nextStep }) {
    return (
      <>
        <form onSubmit={nextStep}>
        <h2>Saisissez le budget estimé de ce voyage</h2>
          <TextInput
            label='Budget'
            type='number'
            name='budget'
            onChange={handleChange}
            value={data.budget}
          />
          <SubmitButton value='Suivant' type="submit" />
        </form>
      </>
    );
  }

  function Step5({ data, handleChange, onSubmit }) {
    return (
      <>
        <form onSubmit={onSubmit}>
        <h2>Saisissez le nombre de personnes pour ce voyage</h2>
          <TextInput
            label='Nombre de participant maximum'
            type='number'
            name='maxPeople'
            onChange={handleChange}
            value={data.maxPeople}
          />
          <SubmitButton value='Créer un voyage' type="submit" />
        </form>
      </>
    );
  }

function NewTripForm({ onSubmit }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState({
    name: "Voyage Scolaire",
    dateStart: "2023-05-07",
    dateEnd: "2023-05-25",
    description: "test",
    budget: "100",
    maxPeople: "5"
  });

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setData({
      ...data,
      [inputName]: inputValue
    });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(data);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 data={data} handleChange={handleChange} nextStep={nextStep} />;
      case 2:
        return <Step2 data={data} handleChange={handleChange} nextStep={nextStep} />;
      case 3:
        return <Step3 data={data} handleChange={handleChange} nextStep={nextStep} />;
      case 4:
        return <Step4 data={data} handleChange={handleChange} nextStep={nextStep} />;
      case 5:
        return <Step5 data={data} handleChange={handleChange} onSubmit={handleSubmit} />;   
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

export default NewTripForm;
