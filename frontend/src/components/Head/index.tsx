import { Box, Button, Container, Stack } from '@mui/material';
import styles from './styles.module.scss';
import logo from '../../assets/logo.svg';

export const Head = () => {
  return (
    <>
      <Box>
        <Box className={styles.container}>
          <Box>
            <img width={30} src={logo} />
          </Box>
          <Box>
            <Stack direction="row" spacing={2}>
              <Button variant="text">Home</Button>
              <Button variant="text">Sobre</Button>
              <Button variant="contained">Contato</Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};
