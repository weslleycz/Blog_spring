import { Alert, Box, Button, Checkbox, Container, FormControlLabel, TextField } from '@mui/material';
import logo from '../../assets/logo.svg';
import { useState } from 'react';
import { api } from '../../services/api';
import useCookie from 'react-use-cookie';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [userToken, setUserToken] = useCookie('token', '0');
  const [isErro, setIsErro] = useState(false);
  const handleLogin = async (event: any) => {
    event.preventDefault();
    setIsErro(false);
    try {
      const res = await api.post('/admin/login', {
        username,
        password,
      });
      if (checked) {
        setUserToken(res.data, {
          days: 1,
        });
      } else {
        sessionStorage.setItem('token', res.data);
      }
      window.location.href = '/a1dmin';
    } catch (error) {
      setIsErro(true);
      console.log(error);
    }
  };
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '90vh',
        }}
      >
        <form
          onSubmit={handleLogin}
          style={{
            width: '350px',
            padding: 13,
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box m={2}>
            <Box display={'flex'} marginBottom={2} justifyContent={'center'}>
              <img width={65} src={logo} />
            </Box>
            <TextField
              fullWidth
              onChange={(event) => setUsername(event.target.value)}
              value={username}
              label="Nome de usuário"
              type="text"
              required
            />
            <TextField
              fullWidth
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              sx={{ marginTop: 2 }}
              label="Senha"
              type="password"
              required
            />
            {isErro ? (
              <Alert severity="error">
                O login não pôde ser concluído. Por favor, entre em contato com o administrador.
              </Alert>
            ) : null}
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} />}
              label="Lembre-se de mim"
            />
            <Button fullWidth type="submit" variant="contained" color="primary">
              Entrar
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
};
