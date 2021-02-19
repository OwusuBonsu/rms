import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './navbar';
import App from './home'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <NavigationBar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
