import { useState } from 'react';
"use client"
export default function Home() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.trim() && name.trim().length)
      setSubmitted(true);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setSubmitted(false);
    setName('');
  }
  
  return (
    <div>
        <h2>Name Echoer</h2>
        <form onSubmit={handleSubmit}>
          <label>What is your name?</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br/>
        <button type="submit">Submit</button>
        <button onClick={handleReset}>Reset</button>
        {submitted && <p>welcome, {name}</p>}
    </form>
    </div>
  )
}
