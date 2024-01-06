import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { api } from '../../services/api';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear previous errors when user starts typing
    setFormErrors({ ...formErrors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };

    // Validate name
    if (formData.name.trim() === '') {
      newErrors.name = 'Nome é obrigatório';
      valid = false;
    }

    // Validate email
    if (formData.email.trim() === '') {
      newErrors.email = 'E-mail é obrigatório';
      valid = false;
    }

    // Validate message
    if (formData.message.trim() === '') {
      newErrors.message = 'Mensagem é obrigatória';
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await api.post('/mensagem', {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        });
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '90vh' }}>
        <Grid item xs={10} sm={6} md={4}>
          <Paper elevation={1} style={{ padding: '20px' }}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Nome"
                name="name"
                fullWidth
                margin="normal"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                error={Boolean(formErrors.name)}
                helperText={formErrors.name}
              />
              <TextField
                label="E-mail"
                name="email"
                fullWidth
                type="email"
                margin="normal"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                error={Boolean(formErrors.email)}
                helperText={formErrors.email}
              />
              <TextField
                label="Mensagem"
                name="message"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                variant="outlined"
                value={formData.message}
                onChange={handleChange}
                error={Boolean(formErrors.message)}
                helperText={formErrors.message}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
                Enviar
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};