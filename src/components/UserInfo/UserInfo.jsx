import Box from 'components/Box';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Container, TextLink, ContainerInfo } from './UserInfo.styled';
import Loader from 'components/Loader';

const UserInfo = () => {
  return (
    <>
      <Container>
        {/* <img src="" /> */}
        <ContainerInfo>
          <p>Name:</p>
          <p>Age:</p>
          <p>City:</p>
          <Box display="flex" gridGap="10px">
            <TextLink to="cast">Add to Watch</TextLink>
            <TextLink to="cast">Add to Future</TextLink>
          </Box>
        </ContainerInfo>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default UserInfo;
