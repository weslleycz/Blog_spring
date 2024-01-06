import { Box, Container, Grid, SnackbarContent } from '@mui/material';
import { useEffect, useState } from 'react';
import { PostForm } from '../../components/PostForm';
import { Posts } from '../../components/Posts';
import styles from './styles.module.scss';
import { api } from '../../services/api';

export const Admin = () => {
  const [reloader, setReloader] = useState(0);
  const [mensagens, setMensagens] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await api.get('/mensagem');
      setMensagens(res.data);
    })();
  }, []);
  return (
    <>
      <Container sx={{ background: 'white', marginTop: 3, height: '90vh' }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6}>
            <Box padding={2}>
              <Box padding={2} display={'flex'} justifyContent={'space-between'} p={1}>
                <p className={styles.text}>Postagens</p>
                <PostForm reloader={reloader} setReloader={setReloader} />
              </Box>
              <Posts reloader={reloader} />
            </Box>
          </Grid>
          <Grid xs={6}>
            <Box padding={2}>
              <Box p={1}>
                <p className={styles.text}>Mensagens</p>
                {mensagens.reverse().map((mensagen: any) => {
                  return (
                    <>
                      <Box key={mensagen.id} marginTop={1}>
                        <Box justifyContent={'space-between'} display={'flex'}>
                          <p className={styles['name-contact']}>{mensagen.name}</p>
                          <p className={styles['email-contact']}>{mensagen.email}</p>
                        </Box>

                        <SnackbarContent
                          elevation={1}
                          sx={{ bgcolor: 'white', color: '#917d7d' }}
                          message={mensagen.message}
                        />
                      </Box>
                    </>
                  );
                })}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
