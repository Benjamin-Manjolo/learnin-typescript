import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const name: string = "Benjamin";
  const age: number = 25;
  const isDeveloper: boolean = true;

  // Try breaking it on purpose (commented out):
  // name = 123; // Error: Type 'number' is not assignable to type 'string'
  return (
    <div className="App">
       <h1>Hello {name}!</h1>
      <p>Age: {age}</p>
      <p>Developer: {isDeveloper ? "Yes" : "No"}</p>
    </div>
  );
}

export default App;
