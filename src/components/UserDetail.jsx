import { Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";

export function UserDetail({ user }) {
  const personalData = [
    { label: "Nome", value: user?.firstName },
    { label: "Sobrenome", value: user?.lastName },
    { label: "Email", value: user?.email },
    { label: "Matrícula", value: user?.id },
    { label: "Telefone", value: user?.phone },
  ];

  return (
    <TableContainer>
      <Table>
        <TableBody>
          {personalData.map(({ label, value }) => (
            <TableRow key={label}>
              <TableCell>{label}</TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
