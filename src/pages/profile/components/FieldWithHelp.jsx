import CharacterCounter from './CharacterCounter';
import { useState } from 'react';

const FieldWithHelp = ({ label, placeholder, maxLength, helpText, type = 'text' }) => {
  const [value, setValue] = useState('');

  const isTextarea = type === 'textarea' || maxLength > 300;

  return (
    <div style={styles.field}>
      <label style={styles.label}>{label}</label>
      {helpText && <small style={styles.help}>{helpText}</small>}

      {isTextarea ? (
        <textarea
          style={styles.textarea}
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <input
          style={styles.input}
          type={type}
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}

      {maxLength && (
        <div style={styles.counter}>
          <CharacterCounter current={value.length} max={maxLength} />
        </div>
      )}
    </div>
  );
};

export default FieldWithHelp;

const styles = {
  field: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "18px",
  },
  label: {
    fontWeight: "600",
    color: "#333",
    marginBottom: "5px",
  },
  help: {
    fontSize: "12px",
    color: "#777",
    marginBottom: "5px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "15px",
    outline: "none",
  },
  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    minHeight: "100px",
    fontSize: "15px",
    outline: "none",
    resize: "vertical",
  },
  counter: {
    textAlign: "right",
    fontSize: "12px",
    color: "#555",
    marginTop: "4px",
  },
};
