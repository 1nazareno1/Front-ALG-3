import './index.css'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'
import { Providers } from './redux/Providers.jsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
    <Toaster richColors position="bottom-right" expand />
  </StrictMode>
)
