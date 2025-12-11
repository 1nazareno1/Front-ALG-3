import Section from './components/Section';
import FieldWithHelp from './components/FieldWithHelp';
import { Box, Paper, Typography, Stack, Button } from '@mui/material';

const CurriculumForm = () => {
  return (
    <Box sx={styles.page}>
      <Paper component="form" sx={styles.form} elevation={2}>
        <Typography variant="h4" component="h1" sx={styles.title}>
          Crear Currículum Vitae
        </Typography>

        <Typography variant="body2" sx={styles.subtitle}>
          Consejo: Recuerda ser conciso/a. Cada sección tiene un límite de caracteres.
        </Typography>

        <Section title="Datos Básicos">
          <FieldWithHelp
            label="Nombre completo"
            placeholder="Juan Pérez González"
            maxLength={150}
            helpText="Recuerda escribir tu nombre completo"
          />
          <FieldWithHelp
            label="Fecha de nacimiento"
            placeholder="dd/mm/aaaa"
            type="date"
          />
        </Section>

        <Section title="Contacto">
          <FieldWithHelp label="Teléfono" placeholder="+54 9 381 234-5678" />
          <FieldWithHelp label="Email" placeholder="tu.email@ejemplo.com" type="email" />
        </Section>

        <Section title="Formación">
          <FieldWithHelp
            label="Formación"
            placeholder="Ej: Secundario, Tecnicatura en Informática, Ingeniería"
            maxLength={255}
          />
        </Section>

        <Section title="Experiencia">
          <FieldWithHelp
            label="Experiencia"
            placeholder='Ej: "Empresa X – Analista Jr. (Abr 2020 – Actualidad). Ref: 3812345678"'
            maxLength={1000}
          />
        </Section>

        <Section title="Habilidades Técnicas">
          <FieldWithHelp
            label="Habilidades"
            placeholder="Ej: Python, Excel avanzado, SQL, Diseño CAD"
            maxLength={300}
          />
        </Section>

        <Section title="Habilidades Blandas">
          <FieldWithHelp
            label="Habilidades blandas"
            placeholder="Ej: trabajo en equipo, comunicación, liderazgo"
            maxLength={300}
          />
        </Section>

        <Section title="Sobre Mí">
          <FieldWithHelp
            label="Sobre mí"
            placeholder="Preséntate en pocas palabras..."
            maxLength={500}
          />
        </Section>

        <Section title="Disponibilidad y Redes">
          <FieldWithHelp
            label="Disponibilidad"
            placeholder="Ej: Full time, Part time"
            maxLength={30}
          />
          <FieldWithHelp
            label="LinkedIn"
            placeholder="https://www.linkedin.com/in/tu-perfil"
            maxLength={100}
            type="url"
          />
        </Section>

        <Stack direction="row" justifyContent="flex-end" spacing={2} sx={styles.buttonRow}>
          <Button type="submit" variant="contained" color="primary">
            Guardar CV
          </Button>
          <Button type="button" variant="outlined" onClick={() => window.history.back()}>
            Cancelar
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default CurriculumForm;

const styles = {
  page: {
    background: '#f5f5f5',
    minHeight: '100vh',
    padding: '30px 0',
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    width: '90%',
    maxWidth: '850px',
    background: '#fff',
    padding: '30px',
    borderRadius: '12px',
  },
  title: {
    margin: 0,
    fontSize: '28px',
    color: '#190888ff',
    fontWeight: 700,
    mb: 1,
  },
  subtitle: {
    fontSize: '14px',
    marginBottom: '20px',
    color: '#555',
  },
  buttonRow: {
    marginTop: '20px',
  },
};
