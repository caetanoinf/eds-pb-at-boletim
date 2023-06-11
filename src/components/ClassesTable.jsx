import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export function ClassesTable({ classes }) {
  const calculateAverage = (grades) => {
    return grades.reduce((acc, item) => acc + item.grade, 0) / grades.length;
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Disciplina</TableCell>
            <TableCell sx={{ textAlign: "right" }}>Média</TableCell>
            <TableCell sx={{ textAlign: "right" }}>Faltas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {classes.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell sx={{ textAlign: "right" }}>{calculateAverage(item.grades).toFixed(2)}</TableCell>
              <TableCell sx={{ textAlign: "right" }}>{item.missedClasses}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
