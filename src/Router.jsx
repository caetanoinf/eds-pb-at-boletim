import { useCallback, useState } from "react";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";
import { Classes } from "./pages/Classes";

export function Router() {
  const [page, setPage] = useState("signin");

  const navigate = useCallback((page) => {
    setPage(page);
  }, []);

  switch (page) {
    case "signin":
      return <SignIn navigate={navigate} />;
    case "home":
      return <Home navigate={navigate} />;
    case "classes":
      return <Classes navigate={navigate} />;
    default:
      return "Not found";
  }
}
