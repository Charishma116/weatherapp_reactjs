// Import necessary modules from 'react-dom'
import ReactDOM from 'react-dom';
import React from 'react'; // Import React

// Import your App component and CSS file
import App from './App';
import './index.css';

// Render the App component directly using ReactDOM.render
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

