import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useSession } from "./contexts";

import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";
import { Classes } from "./pages/Classes";
import { Documents } from "./pages/Documents";

export function AppRouter() {
  const { isLoggedIn } = useSession();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <SignIn />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  return <h1>Página não encontrada</h1>;
}
