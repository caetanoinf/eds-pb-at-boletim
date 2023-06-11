import { Button, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { getUser } from "../data";
import { useState } from "react";
import { ClassesTable } from "../components/ClassesTable";

const USER_ID = "123456789";

export function Classes({ navigate }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  useEffect(() => {
    getUser(USER_ID).then(setAuthenticatedUser);
  }, []);

  return (
    <Stack direction="column" alignItems="center" flex="1" spacing={3} height="100%" py={6}>
      <Stack width="100%" direction="row" alignItems="center" justifyContent="space-between">
        <Typography>👋 Bem-vindo {authenticatedUser?.email}!</Typography>
        <Button variant="text" size="small" onClick={() => navigate("home")}>
          Voltar
        </Button>
      </Stack>
      <Typography variant="h2">Notas e Faltas</Typography>

      <ClassesTable classes={authenticatedUser?.classes ?? []} />
    </Stack>
  );
}
