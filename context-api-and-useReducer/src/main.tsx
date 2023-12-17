import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode> //one thing that strict mode does is that it runs every component function twice when that component is rendered in order to catch potential bugs in the code.
);
