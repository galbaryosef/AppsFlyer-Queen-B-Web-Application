import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Register } from "./Register/Register";
const port = process.env.PORT || 5001;

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:${port}/api/helloworld`)
      .then(response => setMessage(response.data))
      .catch(error => console.error(`There was an error retrieving the message: ${error}`))
  }, [])

  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
