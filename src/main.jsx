// src/index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Import Bootstrap and FontAwesome
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/styles/variables.css'; // Adjust the path as necessary

// Import ThemeProvider
import { ThemeProvider } from './Context/ThemeContext/ThemeContext.jsx';


import AppWrapper from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AppWrapper />
    </ThemeProvider>
  </StrictMode>,
);
