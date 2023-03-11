import Box from 'components/Box';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, TextLink } from './UserPage.styled';
import Loader from 'components/Loader';
import Copyright from 'components/Copyright/Copyright';

const UserPage = () => {
  return (
    <main>
      <Box
        as="section"
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="100vh"
      >
        <Container>
          <Box display="flex" gridGap="10px">
            <TextLink to="user-watched">Watched movies</TextLink>
            <TextLink to="user-favorite">Favorite movies</TextLink>
          </Box>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
        <Copyright />
      </Box>
    </main>
  );
};

export default UserPage;
