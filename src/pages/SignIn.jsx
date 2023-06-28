import { Container, Stack, Typography } from "@mui/material";
import { LoginForm } from "../components";
import { useAuth } from "../hooks";
import { useMutation } from "react-query";

export function SignIn() {
  const auth = useAuth();

  const signInMutation = useMutation({
    mutationKey: "signIn",
    mutationFn: auth.signIn,
  });

  const handleSubmit = ({ email, password }) => {
    signInMutation.mutate({ email, password });
  };

  return (
    <Container maxWidth="sm">
      <Stack direction="column" flex="1" spacing={2}>
        <img src="/logo.png" alt="Logo" width="150" />

        <Typography variant="h2">Entrar na sua conta</Typography>

        <Typography variant="subtitle1">Informe suas credenciais para continuar</Typography>

        <LoginForm onSubmit={handleSubmit} isLoading={signInMutation.isLoading} />
      </Stack>
    </Container>
  );
}
