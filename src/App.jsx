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
      <CssBaseline />
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Header */}
          <Header />

          {/* Main Content */}
          <MainContent />
        </Box>
      </Box>
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

export default App;
