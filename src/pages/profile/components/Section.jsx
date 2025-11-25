const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    <div>{children}</div>
  </section>
);

export default Section;