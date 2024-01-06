import { Alert, Box, Container, Grid, SnackbarContent } from '@mui/material';
import { PostForm } from '../../components/PostForm';
import styles from './styles.module.scss';
import { Posts } from '../../components/Posts';
import { useState } from 'react';

export const Admin = () => {
  const [reloader, setReloader] = useState(0);
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
                <Box>
                  <p>Weslley</p>
                <SnackbarContent
                  elevation={1}
                  sx={{ bgcolor: 'white', color: '#917d7d' }}
                  message="I love candy. I love cookies. I love cupcakes."
                />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
