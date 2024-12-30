import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import { ContextProvider } from './context/useContext.jsx'



export const server = "https://kingsworldv1-backend.onrender.com/api/v1"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ContextProvider>
  </StrictMode>,
)
