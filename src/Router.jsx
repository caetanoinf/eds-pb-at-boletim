import { Routes, Route, BrowserRouter } from "react-router-dom";

import { useAuth } from "./hooks";
import { CircularProgress, Stack } from "@mui/material";
import { Classes, Documents, Home, SignIn } from "./pages";

const privateRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/classes" element={<Classes />} />
    <Route path="/documents" element={<Documents />} />
  </>
);

const publicRoutes = (
  <>
    <Route path="/" element={<SignIn />} />
  </>
);

export function AppRouter() {
  const { isLoggedIn, authenticating } = useAuth();

  if (authenticating) {
    return (
      <Stack direction="column" alignItems="center" justifyContent="center" sx={{ height: "100vh" }}>
        <CircularProgress size={60} />
      </Stack>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? privateRoutes : publicRoutes}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  return <h1>Página não encontrada</h1>;
}
