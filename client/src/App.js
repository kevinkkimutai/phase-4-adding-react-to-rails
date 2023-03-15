import './App.css';
import React, { useEffect } from 'react';

function App() {

  useEffect(()  => {
    
    fetch("/movies")
    .then((res) => res.json())
    .then((movies) => console.log(movies));
  }, [])
  return (
    <div className="App">
     <h1>Hello from React!</h1>
    </div>
  );
}

export default App;
