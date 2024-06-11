import React, { useState } from 'react';
import { TextField, MenuItem, FormControl, InputLabel, Select, Button, Typography } from '@mui/material';
import { ChromePicker } from 'react-color';

const Form = () => {
  const [formData, setFormData] = useState({
    selectedOption: '',
    inputValue: '',
    selectedColor: '#000000',
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, inputValue: event.target.value });
  };

  const handleSelectChange = (event) => {
    setFormData({ ...formData, selectedOption: event.target.value });
  };

  const handleColorChange = (color) => {
    setFormData({ ...formData, selectedColor: color.hex });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Embedded Form
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="select-label">Select Option</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={formData.selectedOption}
          label="Select Option"
          onChange={handleSelectChange}
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        id="input"
        label="Input Field"
        value={formData.inputValue}
        onChange={handleInputChange}
        sx={{ mb: 2 }}
      />

      <div>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Color Picker
        </Typography>
        <ChromePicker color={formData.selectedColor} onChangeComplete={handleColorChange} />
      </div>

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default Form;
