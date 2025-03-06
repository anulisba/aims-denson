import React, { useState, useEffect } from 'react';
import './App.css';
import Loader from './pages/Loader';
import Landing from './pages/landing';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="App">
      {isLoading ? <Loader /> : <Landing />}
    </div>
  );
}

export default App;
