import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import { RouterList } from './Router/RouterList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterList/>
  </React.StrictMode>
);

