import { Typography, Container, CssBaseline } from '@mui/material';

export const NotFoundPage = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <CssBaseline />
        <Container
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: '144px',
              fontWeight: 700,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            404
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: '24px',
              color: (theme) => theme.palette.grey[700],
            }}
          >
            Página não encontrada
          </Typography>
        </Container>
      </div>
    </>
  );
};
