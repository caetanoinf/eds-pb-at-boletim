import { Stack, Typography } from "@mui/material";
import { UserDetail } from "../components/UserDetail";
import { useSession } from "../contexts";
import { UserSidebar } from "../components/UserSidebar";

export function Home() {
  const { profile } = useSession();

  return (
    <>
      <UserSidebar />
      <Stack direction="column" flex="1" spacing={3} height="100%" py={6}>
        <Typography variant="h3">Dados pessoais</Typography>

        <UserDetail user={profile} />
      </Stack>
    </>
  );
}
