import Section from './components/Section';
import FieldWithHelp from './components/FieldWithHelp';

const CurriculumForm = () => {
  return (
    <div style={styles.page}>
      <form style={styles.form}>
        <h1 style={styles.title}>Crear Currículum Vitae</h1>
        <p style={styles.subtitle}>
          Consejo: Recuerda ser conciso/a. Cada sección tiene un límite de caracteres.
        </p>

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

        <div style={styles.buttonRow}>
          <button type="submit" style={styles.primaryButton}>Guardar CV</button>
          <button type="button" style={styles.secondaryButton} onClick={() => window.history.back()}
          >Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default CurriculumForm;

const styles = {
  page: {
    background: "#f5f5f5",
    minHeight: "100vh",
    padding: "30px 0",
    display: "flex",
    justifyContent: "center",
  },
  form: {
    width: "90%",
    maxWidth: "850px",
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(24, 12, 12, 0.08)",
  },
  title: {
    margin: 0,
    fontSize: "28px",
    color: "#190888ff",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: "14px",
    marginBottom: "20px",
    color: "#555",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
    marginTop: "25px",
  },
  primaryButton: {
    background: "#2414d7ff",
    color: "white",
    padding: "10px 18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
  secondaryButton: {
    background: "#e0e0e0",
    color: "#2711eaff",
    padding: "10px 18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
};
