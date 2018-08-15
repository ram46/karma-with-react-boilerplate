import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// Do NOT include this file in karma.conf.js for test coverage BECAUSE it will give target error. This error occurs
// because of the ReactDOM render line. So either exclude this file OR write your pattern right.