import Box from 'components/Box';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Container, TextLink } from './UserInfo.styled';
import Loader from 'components/Loader';

const UserInfo = () => {
  return (
    <>
      <Container>
        <Box display="flex" gridGap="10px">
          <TextLink to="user-watches">Watches movies</TextLink>
          <TextLink to="user-favorite">Favorite movies</TextLink>
        </Box>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default UserInfo;
