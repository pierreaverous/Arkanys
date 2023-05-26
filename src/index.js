import React from 'react';
import ReactDOM from 'react-dom/client';
import './SCSS/_index.scss';

import Router from "./Router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

