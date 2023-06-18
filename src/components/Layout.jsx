import { Box, Container, Stack } from "@mui/material";

export function Layout({ children }) {
  return (
    <Container maxWidth="md" sx={{ flex: 1, display: "flex" }}>
      <Stack flex="1" alignItems="center" justifyContent="center" direction="row">
        {children}
      </Stack>
    </Container>
  );
}
