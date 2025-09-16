import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ForumPage } from "./pages/forum/ForumPage";
import { ForumPostPage } from "./pages/post/ForumPostPage";
import { HomePage } from "./pages/home/HomePage";
import { Interface } from "./components/interfaces/Interface";
import { Providers } from "./redux/Providers";
import { RegisterPage } from "./pages/register/RegisterPage";
import { SearchPage } from "./pages/search/SearchPage";
import { theme } from "./theme/Theme";
import { ThemeProvider } from "@mui/material";
import { Toaster } from "sonner";
import { LoginPage } from './pages/inicio/inicioPage';

//* Este archivo contiene toda la aplicación
function App() {
  return (
    <>
      <BrowserRouter>
        <Providers>
          <ThemeProvider theme={theme}>
            <Interface>
              <Routes>
                <Route path="/" index element={<HomePage />} />
                <Route path="/foro" element={<ForumPage />} />
                <Route path="/registro" element={<RegisterPage />} />
                <Route path="/post/:id" element={<ForumPostPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </Interface>
          </ThemeProvider>
          <Toaster richColors position="bottom-right" expand />
        </Providers>
      </BrowserRouter>
    </>
  );
}

export default App;
