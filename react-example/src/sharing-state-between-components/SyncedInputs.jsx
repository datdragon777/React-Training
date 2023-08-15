import React, { useState } from "react";

const Input = ({ label, value, onChange }) => {
  return (
    <label>
      {label} <input value={value} onChange={onChange} />
    </label>
  );
};

const SyncedInputs = () => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <Input label="First input" value={text} onChange={handleChange}/>
      <Input label="Second input" value={text} onChange={handleChange}/>
    </>
  );
};

export default SyncedInputs;
