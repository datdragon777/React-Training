// eslint-disable-next-line no-unused-vars
import React from 'react'

const UnnecessaryState = () => {
  const handleClick = () => {
    const name = prompt('What is your name?');
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  )
}

export default UnnecessaryState