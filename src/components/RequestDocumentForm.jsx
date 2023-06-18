import { LoadingButton } from "@mui/lab";
import { Alert, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { useState } from "react";

export function RequestDocumentForm({ onSubmit, isSubmitting, error }) {
  const [formData, setFormData] = useState({
    document: "",
    description: "",
  });

  const isValid = formData.document && formData.description;

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(formData);
  };

  return (
    <Stack spacing={2} component="form" onSubmit={handleSubmit}>
      <FormControl required>
        <InputLabel id="document">Tipo de Documento</InputLabel>

        <Select labelId="document" label="Tipo de Documento" name="document" value={formData.document} onChange={handleChange}>
          <MenuItem value="historico">Histórico Escolar</MenuItem>
          <MenuItem value="declaracao">Declaração de Matrícula</MenuItem>
          <MenuItem value="certificado">Certificado/Diploma</MenuItem>
          <MenuItem value="boletim">Boletim de Notas</MenuItem>
        </Select>
      </FormControl>

      <TextField required label="Descrição" name="description" value={formData.description} onChange={handleChange} multiline rows={3} />

      <LoadingButton type="submit" variant="contained" disabled={!isValid} loading={isSubmitting}>
        Solicitar
      </LoadingButton>

      {error ? (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error.message}
        </Alert>
      ) : null}
    </Stack>
  );
}
