import 'react-notion/src/styles.css';

import { Hero } from '../../components/Hero';
import { News } from '../../components/News';
import { Box, Container } from '@mui/material';

export const Home = () => {
  return (
    <>
      <Hero />
      <Container sx={{ background: 'white', marginTop: 3 }}>
        <Box paddingBottom={2} paddingTop={2}>
        <h3 style={{color:"#686868", fontStyle:"italic"}}>Notícias</h3>
        </Box>
        <News />
      </Container>
    </>
  );
};
