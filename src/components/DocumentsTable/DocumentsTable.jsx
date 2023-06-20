import { DeleteForever } from "@mui/icons-material";
import {
  Alert,
  CircularProgress,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function formatTimestamp(timestamp) {
  return Intl.DateTimeFormat("pt-BR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(timestamp.toDate());
}

const formatDocumentType = (document) => {
  const documentTypes = {
    historico: "Histórico Escolar",
    declaracao: "Declaração de Matrícula",
    certificate: "Certificado/Diploma",
    boletim: "Boletim de Notas",
  };

  return documentTypes[document];
};

export function DocumentsTable({ documents, isLoading, onDelete }) {
  const documentsWithStatus = documents?.map((item) => ({
    ...item,
    status: item.status || "pending",
  }));

  if (isLoading) {
    return (
      <Stack justifyContent="center" alignItems="center">
        <CircularProgress />
      </Stack>
    );
  }

  if (!documents?.length) {
    return <Alert severity="info">Nenhum documento solicitado</Alert>;
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Data da Solicitação</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Tipo de Documento</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Ações</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {documentsWithStatus.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{formatTimestamp(item.timestamp)}</TableCell>
              <TableCell>{formatDocumentType(item.document)}</TableCell>
              <TableCell>Pendente</TableCell>
              <TableCell>
                {item.status === "pending" ? (
                  <IconButton size="small" aria-label="Cancelar" onClick={() => onDelete(item.id)}>
                    <DeleteForever />
                  </IconButton>
                ) : null}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
