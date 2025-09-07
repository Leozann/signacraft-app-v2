// default entry point
// global app configuration

// import libraries
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'lineicons/assets/icon-fonts/css/icons.css';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
