import { useState } from "react";

import { Stack, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export function LoginForm({ onSubmit, isLoading }) {
  const [email, setEmail] = useState("lucio.caetano@al.infnet.edu.br");
  const [password, setPassword] = useState("1Q2w3e4r");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({ email, password });
  };

  return (
    <Stack direction="column" spacing={2} component="form" onSubmit={handleSubmit}>
      <TextField label="Email" name="email" type="email" required value={email} onChange={(evt) => setEmail(evt.target.value)} />

      <TextField
        label="Senha"
        name="password"
        type="password"
        required
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />

      <LoadingButton loading={isLoading} type="submit" variant="contained">
        Entrar
      </LoadingButton>
    </Stack>
  );
}
