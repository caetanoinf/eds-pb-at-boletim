import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";
import { Classes } from "./pages/Classes";
import { useSession } from "./contexts";

export function AppRouter() {
  const { isLoggedIn } = useSession();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <SignIn />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  return <h1>Página não encontrada</h1>;
}
