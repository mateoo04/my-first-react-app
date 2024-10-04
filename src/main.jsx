import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Greeting from './Greeting.jsx';
import { BroccoliImg } from './Greeting.jsx';
import { Test } from './htmlToJsxTest.jsx';
import Person from './Person.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Person />
  </StrictMode>
);
