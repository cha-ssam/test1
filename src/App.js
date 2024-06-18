import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post('http://localhost:5000/api/echo', { input });
      setResponse(result.data.echo);
    } catch (error) {
      console.error('Error submitting input:', error);
    }
  };

  return (
    <div className="App">
      <h1>Echo App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h2>Server Response:</h2>
          <p>{response+1}</p>
        </div>
      )}
    </div>
  );
}

export default App;
