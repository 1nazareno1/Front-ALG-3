const Section = ({ title, children }) => (
  <section style={styles.section}>
    <h2 style={styles.title}>{title}</h2>
    <div>{children}</div>
  </section>
);

export default Section;

const styles = {
  section: {
    marginTop: "25px",
    padding: "20px",
    background: "#fafafa",
    borderRadius: "10px",
    border: "1px solid #ddd",
  },
  title: {
    margin: 0,
    marginBottom: "15px",
    fontSize: "20px",
    fontWeight: "600",
    color: "#1d106fff",
  },
};
