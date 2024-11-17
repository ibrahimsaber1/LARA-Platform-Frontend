import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import Bootstrap and FontAwesome
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './assets/styles/login.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
