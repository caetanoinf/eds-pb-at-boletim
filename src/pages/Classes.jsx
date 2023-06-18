import { Stack, Typography } from "@mui/material";
import { ClassesTable } from "../components/ClassesTable";
import { useSession } from "../contexts";
import { UserSidebar } from "../components/UserSidebar";

export function Classes() {
  const { profile } = useSession();

  return (
    <>
      <UserSidebar />
      <Stack direction="column" flex="1" spacing={3} height="100%" py={6}>
        <Typography variant="h3">Disciplinas</Typography>

        <ClassesTable classes={profile?.classes ?? []} />
      </Stack>
    </>
  );
}
