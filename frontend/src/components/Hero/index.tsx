import { Box, Grid, Typography } from '@mui/material';
import heroImg from '../../assets/heroImg.png';
import styles from './styles.module.scss';

export const Hero = () => {
  return (
    <>
    <Box className={styles['hero-container']}>
    <Grid container spacing={2}>
        <Grid className={styles.container} item xs={6}>
          <Box>
            <h1 className={styles.text}>Tiamat News</h1>
            <Typography className={styles['sub-title']} marginTop={4} variant="subtitle1" gutterBottom>
              Big things are coming to D&D, and we're excited to share the news with you. Wizards Presents is a showcase
              of 2022 and beyond!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <img width={500} src={heroImg} />
        </Grid>
      </Grid>
    </Box>
    </>
  );
};
