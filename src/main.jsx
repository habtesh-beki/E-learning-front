import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
// import Tutorial from './Tutorial/Tutorial.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Tutorial /> */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
