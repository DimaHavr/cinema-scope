import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { StateContext } from './context/StateContext';
import { Toaster } from 'react-hot-toast';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/cinema-scope">
      <Toaster />
      <StateContext>
        <App />
      </StateContext>
    </BrowserRouter>
  </React.StrictMode>
);
