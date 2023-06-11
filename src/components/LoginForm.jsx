import { useState } from "react";

import { Stack, TextField, Button } from "@mui/material";

export function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("lucio.caetano@al.infnet.edu.br");
  const [password, setPassword] = useState("123");

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

      <Button type="submit" variant="contained">
        Entrar
      </Button>
    </Stack>
  );
}
