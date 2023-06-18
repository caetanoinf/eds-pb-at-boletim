import { Stack, Typography } from "@mui/material";
import { UserSidebar } from "../components/UserSidebar";
import { RequestDocumentForm } from "../components/RequestDocumentForm";
import { DocumentsTable } from "../components/DocumentsTable";
import { useDocuments } from "../hooks";
import { useMutation, useQuery } from "react-query";

export function Documents() {
  const { createDocumentRequest, getDocumentRequests, deleteDocumentRequest } = useDocuments();

  const documents = useQuery("GET_DOCUMENT_REQUESTS", getDocumentRequests);

  const createDocumentMutation = useMutation({
    mutationKey: "createDocumentRequest",
    mutationFn: createDocumentRequest,
    onSuccess: () => {
      documents.refetch();
    },
  });

  const deleteDocumentMutation = useMutation({
    mutationKey: "deleteDocumentRequest",
    mutationFn: deleteDocumentRequest,
    onSuccess: () => {
      documents.refetch();
    },
  });

  return (
    <>
      <UserSidebar />

      <Stack direction="column" flex="1" spacing={8} height="100%" py={6}>
        <Stack spacing={3}>
          <Typography variant="h4">Solicitar Documento</Typography>

          <RequestDocumentForm
            onSubmit={createDocumentMutation.mutate}
            isSubmitting={createDocumentMutation.isLoading}
            error={createDocumentMutation.error}
          />
        </Stack>

        <Stack spacing={3}>
          <Typography variant="h4">Histórico</Typography>

          <DocumentsTable documents={documents.data} isLoading={documents.isLoading} onDelete={deleteDocumentMutation.mutate} />
        </Stack>
      </Stack>
    </>
  );
}
