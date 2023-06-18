import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { CssBaseline } from "@mui/material";
import { SessionProvider } from "./contexts";

import "@fontsource/roboto";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <App />
      </SessionProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
