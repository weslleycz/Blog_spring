import { Container, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, BrowserRouter as Router, Routes as RoutesX } from 'react-router-dom';
import { Head } from './components/Head';
import { Admin } from './pages/Admin';
import { Home } from './pages/Home';
import { NotFoundPage } from './pages/NotFoundPage';
import { CookiesProvider, useCookies } from 'react-cookie';
import { theme } from './theme';
import { useEffect } from 'react';
import { Login } from './pages/Login';

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
  const [cookies, setCookie] = useCookies(['token']);
  return (
    <>
      <CookiesProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Head />

            <Router>
              <RoutesX>
                <Route path="/" element={<Home />} />
                <Route
                  path="/a1dmin"
                  element={cookies.token || sessionStorage.getItem('token') ? <Admin /> : <Login />}
                />
                <Route path="*" element={<NotFoundPage />} />
              </RoutesX>
            </Router>
          </ThemeProvider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </CookiesProvider>
    </>
  );
};
