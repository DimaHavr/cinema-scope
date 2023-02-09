import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import Box from 'components/Box';
import Loader from '../Loader';
import {
  Header,
  NavWrapper,
  Link,
  GlitchWrapper,
  Glitch,
  Keyframes,
  CinemaIcon,
} from './SharedLayout.styled';
import UserMenu from 'components/UserMenu';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100vh"
      overflowX="hidden"
    >
      <Header>
        <GlitchWrapper to="/">
          <CinemaIcon />
          <Glitch data-glitch="CinemaScope">CinemaScope</Glitch>
          <Keyframes />
        </GlitchWrapper>
        <NavWrapper>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          {!isLoggedIn ? (
            <>
              <Link to="/login">Log in</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <>
              <UserMenu />
            </>
          )}
        </NavWrapper>
      </Header>
      <Suspense
        fallback={
          <Box paddingTop="90px">
            <Loader />
          </Box>
        }
      >
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default SharedLayout;
