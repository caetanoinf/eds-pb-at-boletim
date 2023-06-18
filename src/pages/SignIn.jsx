import { Container, Stack, Typography } from "@mui/material";
import { LoginForm } from "../components";
import { useSession } from "../contexts";

const USER_ID = "123456789";

export function SignIn() {
  const { connect } = useSession();

  const handleSubmit = ({ email, password }) => {
    connect(USER_ID);
  };

  return (
    <Container maxWidth="sm">
      <Stack direction="column" flex="1" spacing={2}>
        <img src="/logo.png" alt="Logo" width="150" />

        <Typography variant="h2">Entrar na sua conta</Typography>

        <Typography variant="subtitle1">Informe suas credenciais para continuar</Typography>

        <LoginForm onSubmit={handleSubmit} />
      </Stack>
    </Container>
  );
}
