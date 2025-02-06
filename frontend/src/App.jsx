import React, { useEffect, useState } from 'react';

const App = () => {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5500')
      .then((response) => response.json())
      .then((data) => setBackendMessage(data.message))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Frontend React App</h1>
      <p>Backend says: {backendMessage}</p>
    </div>
  );
};

export default App;
