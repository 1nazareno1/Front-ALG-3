import Section from './components/Section';
import FieldWithHelp from './components/FieldWithHelp';

const CurriculumForm = () => {
  return (
    <form>
      <h1>Crear Currículum Vitae</h1>
      <p>Consejo: Recuerda ser conciso. Cada sección tiene un límite de caracteres.</p>

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

      <div>
        <button type="submit">Guardar CV</button>
        <button type="button">Cancelar</button>
      </div>
    </form>
  );
};

export default CurriculumForm;