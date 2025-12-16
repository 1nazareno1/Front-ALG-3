import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreatePostPage } from "./pages/createPost/CreatePostPage";
import { ForumPage } from "./pages/forum/ForumPage";
import { ForumPostPage } from "./pages/post/ForumPostPage";
import { HomePage } from "./pages/home/HomePage";
import { Interface } from "./components/interfaces/Interface";
import { LoginPage } from "./pages/login/LoginPage";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { Providers } from "./redux/Providers";
import { RegisterPage } from "./pages/register/RegisterPage";
import { SearchPage } from "./pages/search/SearchPage";
import { theme } from "./theme/Theme";
import { Box, ThemeProvider } from "@mui/material";
import { Toaster } from "sonner";

import CurriculumForm from "./pages/profile/CurriculumForm";
import { AuthProvider } from "./hooks/contexts/AuthenticationContext";

//* Este archivo contiene toda la aplicación
function App() {
  return (
    <>
      <Providers>
        <AuthProvider>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <Interface>
                <Box sx={{ marginTop: "90px" }}>
                  <Routes>
                    <Route path="/inicio" index element={<HomePage />} />
                    <Route path="/foro/:id" element={<ForumPage />} />
                    <Route path="/post/:id" element={<ForumPostPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/registro" element={<RegisterPage />} />
                    <Route path="/buscar" element={<SearchPage />} />
                    <Route path="/perfil/:id" element={<ProfilePage />} />
                    <Route path="/crear-post" element={<CreatePostPage />} />
                    <Route
                      path="/CurriculumForm"
                      element={<CurriculumForm />}
                    />
                    {/* <Route path="/calendario" element={<Calendario />} /> */}
                  </Routes>
                </Box>
              </Interface>
            </ThemeProvider>
            <Toaster richColors position="bottom-right" expand />
          </BrowserRouter>
        </AuthProvider>
      </Providers>
    </>
  );
}

export default App;
