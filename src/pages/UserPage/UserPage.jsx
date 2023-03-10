import Box from 'components/Box';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Container, TextLink } from './UserPage.styled';
import Loader from 'components/Loader';

const UserPage = () => {
  return (
    <main>
      <Box as="section">
        <Container>
          <Box display="flex" gridGap="10px">
            <TextLink to="user-watches">Watches movies</TextLink>
            <TextLink to="user-favorite">Favorite movies</TextLink>
          </Box>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Box>
    </main>
  );
};

export default UserPage;
