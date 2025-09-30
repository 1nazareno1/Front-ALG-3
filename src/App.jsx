import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Toaster } from "sonner";
import { ForumPage } from "./pages/forum/ForumPage";
import { ForumPostPage } from "./pages/post/ForumPostPage";
import { HomePage } from "./pages/home/HomePage";
import { Interface } from "./components/interfaces/Interface";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { Providers } from "./redux/Providers";
import { RegisterPage } from "./pages/register/RegisterPage";
import { SearchPage } from "./pages/search/SearchPage";
import { theme } from "./theme/Theme";

//* Este archivo contiene toda la aplicación
function App() {
  return (
    <>
      <BrowserRouter>
        <Providers>
          <ThemeProvider theme={theme}>
            <Interface>
              <Routes>
                <Route path="/home" index element={<HomePage />} />
                <Route path="/foro" element={<ForumPage />} />
                <Route path="/registro" element={<RegisterPage />} />
                <Route path="/post/:id" element={<ForumPostPage />} />
                <Route path="/buscar" element={<SearchPage />} />
                <Route path="/perfil/:id" element={<ProfilePage />} />
                {/* <Route path="/calendario" element={<Calendario />} /> */}
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
