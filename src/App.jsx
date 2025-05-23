import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Interface } from './components/interfaces/Interface'
import { HomePage } from './pages/home/HomePage'
import { ForumPage } from './pages/forum/ForumPage'
import { theme } from './theme/Theme'
import { ThemeProvider } from '@mui/material'

//* Este archivo contiene toda la aplicación
function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Interface>
            <Routes>
              <Route path="/" index element={<HomePage />} />
              <Route path="/foro" element={<ForumPage />} />
            </Routes>
          </Interface>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
