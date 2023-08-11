import { useState } from "react";

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
  
    const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
    }
  
    const handleLastNameChange = (e) => {
      setLastName(e.target.value);
    }
  
    const handleReset = () => {
      setFirstName('')
      setLastName('')
    }
  
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="First name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          placeholder="Last name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <h1>Hi, {firstName} {lastName}</h1>
        <button onClick={handleReset}>Reset</button>
      </form>
    );
}
export default Form