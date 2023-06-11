import { Box, Button, Stack, Typography } from "@mui/material";
import { UserDetail } from "../components/UserDetail";
import { useSession } from "../contexts";
import { useNavigate } from "react-router-dom";
import { Greeting } from "../components/Greeting";

export function Home() {
  const { profile, setUserId } = useSession();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserId(null);
  };

  return (
    <Stack direction="column" alignItems="center" flex="1" spacing={3} height="100%" py={6}>
      <Stack width="100%" direction="row" alignItems="center" justifyContent="space-between">
        <Greeting email={profile?.email} />

        <Box>
          <Button variant="text" size="small" onClick={() => navigate("classes")}>
            Notas e Faltas
          </Button>

          <Button variant="outlined" sx={{ marginLeft: 1 }} size="small" onClick={handleLogout}>
            Sair
          </Button>
        </Box>
      </Stack>
      <Typography variant="h2">Dados pessoais</Typography>

      <UserDetail user={profile} />
    </Stack>
  );
}
