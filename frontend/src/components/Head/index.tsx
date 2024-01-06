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
            <a href="/contact">
            <Button variant="contained">Contato</Button>
            </a>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};
