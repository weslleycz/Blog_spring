import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
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
              />
              <TextField
                label="E-mail"
                name="email"
                fullWidth
                type='email'
                margin="normal"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
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
