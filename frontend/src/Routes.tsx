import { Container, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental';
import { Route, BrowserRouter as Router, Routes as RoutesX } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Head } from './components/Head';
import { Home } from './pages/Home';
import { theme } from './theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 10,
    },
  },
});

const localStoragePersistor = createWebStoragePersistor({
  storage: sessionStorage,
});

export const Routes = (): string => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Head />
          <Container sx={{ background: 'white', marginTop: 3 }}>
            <Router>
              <RoutesX>
                <Route path="/" element={<Home />} />
              </RoutesX>
            </Router>
          </Container>
        </ThemeProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};
