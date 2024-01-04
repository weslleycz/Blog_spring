import 'react-notion/src/styles.css';
// import 'prismjs/themes/prism-tomorrow.css';

import { Hero } from '../../components/Hero';
import { News } from '../../components/News';
import { Container } from '@mui/material';

export const Home = () => {
  return (
    <>
      <Container sx={{ background: 'white', marginTop: 3 }}>
        {/* <NotionRenderer blockMap={blockMap} /> */}
        <Hero />
        <News />
      </Container>
    </>
  );
};
