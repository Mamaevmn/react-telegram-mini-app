import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
