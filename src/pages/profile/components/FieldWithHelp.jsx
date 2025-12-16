import CharacterCounter from './CharacterCounter';
import { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';

const FieldWithHelp = ({ label, placeholder, maxLength, helpText, type = 'text' }) => {
  const [value, setValue] = useState('');

  const isTextarea = type === 'textarea' || (maxLength && maxLength > 300);

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
        {label}
      </Typography>

      {helpText && (
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          {helpText}
        </Typography>
      )}

      <TextField
        fullWidth
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type !== 'textarea' ? type : 'text'}
        multiline={isTextarea}
        minRows={isTextarea ? 4 : undefined}
        inputProps={{ maxLength }}
        variant="outlined"
      />

      {maxLength && (
        <Box sx={{ textAlign: 'right', mt: 0.5 }}>
          <CharacterCounter current={value.length} max={maxLength} />
        </Box>
      )}
    </Box>
  );
};

export default FieldWithHelp;
