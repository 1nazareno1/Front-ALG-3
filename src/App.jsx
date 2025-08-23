import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Interface } from './components/interfaces/Interface'
import { HomePage } from './pages/home/HomePage'
import { ForumPage } from './pages/forum/ForumPage'
import { theme } from './theme/Theme'
import { ThemeProvider } from '@mui/material'


//importamos la página de registro
import  RegistrarsePage  from './pages/registrarse/RegistrarsePage'

//* Este archivo contiene toda la aplicación
function App() {
  return (
    
      <ThemeProvider theme={theme}>
        <Interface>
          <Routes>
            <Route path="/" index element={<HomePage />} />
            <Route path="/foro" element={<ForumPage />} />
            <Route path="/registrarse" element={<RegistrarsePage />} />
          </Routes>
        </Interface>
      </ThemeProvider>
    
  )
}

export default App
