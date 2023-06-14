import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import useTextInput from './hooks/useTextInput'

function App() {

  const [textInput, inputProperties] = useTextInput();

  return (
      <div>
          <input {...inputProperties} />
          <h1>{textInput}</h1>
      </div>
  );
}

export default App
