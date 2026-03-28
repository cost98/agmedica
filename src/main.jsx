import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../assets/css/styles.css'
import '../assets/css/inner.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
