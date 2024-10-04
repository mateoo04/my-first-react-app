import { useState } from 'react';

export default function Person() {
  const [person, setPerson] = useState({
    name: 'John',
    surname: 'Hoffard',
    age: 100,
  });

  const handleNameModification = (e) => {
    setPerson({ ...person, name: e.target.value });
  };

  const handleSurnameModification = (e) => {
    setPerson({ ...person, surname: e.target.value });
  };

  const handleIncreaseAge = () => {
    // copy the existing person object into a new object
    // while updating the age property
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  return (
    <>
      <h1>
        {person.name} {person.surname}
      </h1>
      <h2>{person.age}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <input type='text' onChange={handleNameModification} />
        <input type='text' onChange={handleSurnameModification} />
        <button onClick={handleIncreaseAge}>Increase age</button>
      </div>
    </>
  );
}
