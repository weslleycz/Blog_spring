import { ThemeProvider } from '@mui/material';
import { Route, BrowserRouter as Router, Routes as RoutesX } from 'react-router-dom';
import useCookie from 'react-use-cookie';
import { Head } from './components/Head';
import { Admin } from './pages/Admin';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NotFoundPage } from './pages/NotFoundPage';
import { theme } from './theme';
import { Post } from './pages/Post';

export const Routes = (): string => {
  const [userToken, setUserToken] = useCookie('token', '0');
  return (
    <>
          <ThemeProvider theme={theme}>
            <Head />

            <Router>
              <RoutesX>
                <Route path="/" element={<Home />} />
                <Route
                  path="/a1dmin"
                  element={userToken != '0' || sessionStorage.getItem('token') ? <Admin /> : <Login />}
                />
                 <Route path="/post/*" element={<Post />} />
                <Route path="*" element={<NotFoundPage />} />
              </RoutesX>
            </Router>
          </ThemeProvider>
    </>
  );
};
