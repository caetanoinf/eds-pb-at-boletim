import { Container, Stack, Typography } from "@mui/material";
import { LoginForm } from "../components";

export function SignIn({ navigate }) {
  const handleSubmit = ({ email, password }) => {
    navigate("home");
  };

  return (
    <Container maxWidth="sm">
      <Stack direction="column" flex="1" spacing={2}>
        <Typography variant="h2">Entrar na sua conta</Typography>

        <Typography variant="subtitle1">Informe suas credenciais para continuar</Typography>

        <LoginForm onSubmit={handleSubmit} />
      </Stack>
    </Container>
  );
}
