import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import AuthContext from './context/Auth.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContext>
        <App />
      </AuthContext>
    </BrowserRouter>
  </StrictMode>,
)
