import { Box, Button, Stack } from '@mui/material';
import logo from '../../assets/logo.svg';
import styles from './styles.module.scss';

export const Head = () => {
  return (
    <>
      <Box>
        <Box className={styles.container}>
          <a href="/">
            <Box>
              <img width={30} src={logo} />
            </Box>
          </a>
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
