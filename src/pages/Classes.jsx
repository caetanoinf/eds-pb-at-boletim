import { Stack, Typography } from "@mui/material";
import { ClassesTable } from "../components/ClassesTable";
import { UserSidebar } from "../components/UserSidebar";
import { useQuery } from "react-query";
import { useAuth } from "../hooks";
import { getUser } from "../data";

export function Classes() {
  const { authenticatedUser } = useAuth();

  const classesQuery = useQuery(["GET_CLASSES", authenticatedUser], async () => {
    const id = authenticatedUser?.profile?.id;
    const response = await getUser(id);
    return response.classes;
  });

  return (
    <>
      <UserSidebar />
      <Stack direction="column" flex="1" spacing={3} height="100%" py={6}>
        <Typography variant="h3">Disciplinas</Typography>

        <ClassesTable classes={classesQuery.data ?? []} />
      </Stack>
    </>
  );
}
