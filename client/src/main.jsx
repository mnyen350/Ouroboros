import React from 'react'
import ReactDOM from 'react-dom/client'
import { StateContextProvider } from './StateContextProvider.jsx'
import App from './App.jsx'
import './index.css'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';  
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, fas);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </React.StrictMode>,
)
