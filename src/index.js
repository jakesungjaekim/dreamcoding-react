import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import AppJSX from './AppJSX';
import AppProfile from './AppProfile';
import AppCounter from './AppCounter';
import AppXY from './05-01-mouse-tracking/AppXY';
import AppMentor from './05-02-mentor/AppMentor';

import AppMentors from './05-02-mentor/AppMentors';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppMentors />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
