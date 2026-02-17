import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './components/UserContext.jsx'
import { ReservationProvider } from './components/ReservationContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ReservationProvider>
          <App />
        </ReservationProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)