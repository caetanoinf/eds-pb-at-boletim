import { Container } from "@mui/material";
import { AppRouter } from "./Router";

export default function App() {
  return (
    <Container maxWidth="md" sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <AppRouter />
    </Container>
  );
}
