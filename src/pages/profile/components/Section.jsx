import { Paper, Typography, Box } from '@mui/material';

const Section = ({ title, children }) => (
  <Paper sx={styles.section} elevation={0}>
    <Typography variant="h6" sx={styles.title} component="h2">
      {title}
    </Typography>
    <Box>{children}</Box>
  </Paper>
);

export default Section;

const styles = {
  section: {
    marginTop: '25px',
    padding: '16px',
    background: '#fafafa',
    borderRadius: '10px',
    border: '1px solid #ddd',
  },
  title: {
    margin: 0,
    marginBottom: '12px',
    fontSize: '20px',
    fontWeight: 600,
    color: '#1d106fff',
  },
};
