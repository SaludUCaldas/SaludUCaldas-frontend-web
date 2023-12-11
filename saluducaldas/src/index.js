import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { CountdownProvider } from './util/ContadorContexto.js';

ReactDOM.render(
  <BrowserRouter>
    <CountdownProvider>
      <App />
    </CountdownProvider>
  </BrowserRouter>,
  document.getElementById("root")
);