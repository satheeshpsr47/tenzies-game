import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootey = ReactDOM.createRoot(document.getElementById('root'))
rootey.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
reportWebVitals();
