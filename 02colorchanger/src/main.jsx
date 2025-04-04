import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BackgroundChanger from './c.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <BackgroundChanger/>
  </StrictMode>,
)
