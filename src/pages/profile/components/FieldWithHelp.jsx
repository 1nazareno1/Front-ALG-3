import CharacterCounter from './CharacterCounter';
import { useState } from 'react';

const FieldWithHelp = ({ label, placeholder, maxLength, helpText, type = 'text' }) => {
  const [value, setValue] = useState('');

  return (
    <div>
      <label>{label}</label>
      {helpText && <small>{helpText}</small>}
      {type === 'textarea' || maxLength > 300 ? (
        <textarea
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
      {maxLength && <CharacterCounter current={value.length} max={maxLength} />}
    </div>
  );
};

export default FieldWithHelp;