import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { List } from './animals.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const animals = ['Lion', 'Cow', 'Snake', 'Lizard'];

  return <List />;
}

export default App;
