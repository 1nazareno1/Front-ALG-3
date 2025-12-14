import Section from './components/Section';
import FieldWithHelp from './components/FieldWithHelp';
import { Box, Paper, Typography, Stack, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CurriculumForm = ({ cvData = null }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathParts = location.pathname.split('/');
  const isEditing = pathParts[1] === 'editar-cv';
  
  const [formData, setFormData] = useState({
    nombre_completo: cvData?.nombre_completo || '',
    fecha_nacimiento: cvData?.fecha_nacimiento || '',
    telefono: cvData?.telefono || '',
    email: cvData?.email || '',
    formacion: cvData?.formacion || '',
    experiencia: cvData?.experiencia || '',
    habilidades_tecnicas: cvData?.habilidades_tecnicas || '',
    habilidades_blandas: cvData?.habilidades_blandas || '',
    sobre_mi: cvData?.sobre_mi || '',
    disponibilidad: cvData?.disponibilidad || '',
    linkedin: cvData?.linkedin || '',
  });

  // Cargar datos del CV cuando entra en modo edición (sin prop de cvData)
  useEffect(() => {
    if (isEditing && !cvData) {
      const storedCV = localStorage.getItem('curriculumData');
      if (storedCV) {
        try {
          const parsed = JSON.parse(storedCV);
          setFormData(parsed);
        } catch (e) {
          console.error('Error al cargar CV:', e);
        }
      }
    }
  }, [isEditing, cvData]);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Cuando tengamos la API, hacer POST/PUT a /api/curriculum
    // Por ahora guardamos en localStorage
    localStorage.setItem('curriculumData', JSON.stringify(formData));
    console.log('CV guardado:', formData);
    navigate(-1);
  };

  return (
    <Box sx={styles.page}>
      <Paper component="form" onSubmit={handleSubmit} sx={styles.form} elevation={2}>
        <Typography variant="h4" component="h1" sx={styles.title}>
          {isEditing ? 'Editar' : 'Crear'} Currículum Vitae
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
            value={formData.nombre_completo}
            onChange={(e) => handleChange('nombre_completo', e.target.value)}
          />
          <FieldWithHelp
            label="Fecha de nacimiento"
            placeholder="dd/mm/aaaa"
            type="date"
            value={formData.fecha_nacimiento}
            onChange={(e) => handleChange('fecha_nacimiento', e.target.value)}
          />
        </Section>

        <Section title="Contacto">
          <FieldWithHelp 
            label="Teléfono" 
            placeholder="+54 9 381 234-5678"
            value={formData.telefono}
            onChange={(e) => handleChange('telefono', e.target.value)}
          />
          <FieldWithHelp 
            label="Email" 
            placeholder="tu.email@ejemplo.com" 
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </Section>

        <Section title="Formación">
          <FieldWithHelp
            label="Formación"
            placeholder="Ej: Secundario, Tecnicatura en Informática, Ingeniería"
            maxLength={255}
            value={formData.formacion}
            onChange={(e) => handleChange('formacion', e.target.value)}
          />
        </Section>

        <Section title="Experiencia">
          <FieldWithHelp
            label="Experiencia"
            placeholder='Ej: "Empresa X – Analista Jr. (Abr 2020 – Actualidad). Ref: 3812345678"'
            maxLength={1000}
            value={formData.experiencia}
            onChange={(e) => handleChange('experiencia', e.target.value)}
          />
        </Section>

        <Section title="Habilidades Técnicas">
          <FieldWithHelp
            label="Habilidades"
            placeholder="Ej: Python, Excel avanzado, SQL, Diseño CAD"
            maxLength={300}
            value={formData.habilidades_tecnicas}
            onChange={(e) => handleChange('habilidades_tecnicas', e.target.value)}
          />
        </Section>

        <Section title="Habilidades Blandas">
          <FieldWithHelp
            label="Habilidades blandas"
            placeholder="Ej: trabajo en equipo, comunicación, liderazgo"
            maxLength={300}
            value={formData.habilidades_blandas}
            onChange={(e) => handleChange('habilidades_blandas', e.target.value)}
          />
        </Section>

        <Section title="Sobre Mí">
          <FieldWithHelp
            label="Sobre mí"
            placeholder="Preséntate en pocas palabras..."
            maxLength={500}
            value={formData.sobre_mi}
            onChange={(e) => handleChange('sobre_mi', e.target.value)}
          />
        </Section>

        <Section title="Disponibilidad y Redes">
          <FieldWithHelp
            label="Disponibilidad"
            placeholder="Ej: Full time, Part time"
            maxLength={30}
            value={formData.disponibilidad}
            onChange={(e) => handleChange('disponibilidad', e.target.value)}
          />
          <FieldWithHelp
            label="LinkedIn"
            placeholder="https://www.linkedin.com/in/tu-perfil"
            maxLength={100}
            type="url"
            value={formData.linkedin}
            onChange={(e) => handleChange('linkedin', e.target.value)}
          />
        </Section>

        <Stack direction="row" justifyContent="flex-end" spacing={2} sx={styles.buttonRow}>
          <Button type="submit" variant="contained" color="primary">
            {isEditing ? 'Guardar cambios' : 'Guardar CV'}
          </Button>
          <Button type="button" variant="outlined" onClick={() => navigate(-1)}>
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
