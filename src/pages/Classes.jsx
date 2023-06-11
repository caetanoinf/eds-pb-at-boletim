import { Button, Stack, Typography } from "@mui/material";
import { ClassesTable } from "../components/ClassesTable";
import { useSession } from "../contexts";
import { useNavigate } from "react-router-dom";
import { Greeting } from "../components/Greeting";

export function Classes() {
  const { profile } = useSession();
  const navigate = useNavigate();

  return (
    <Stack direction="column" alignItems="center" flex="1" spacing={3} height="100%" py={6}>
      <Stack width="100%" direction="row" alignItems="center" justifyContent="space-between">
        <Greeting email={profile?.email} />

        <Button variant="text" size="small" onClick={() => navigate("/")}>
          Voltar
        </Button>
      </Stack>
      <Typography variant="h2">Notas e Faltas</Typography>

      <ClassesTable classes={profile?.classes ?? []} />
    </Stack>
  );
}
