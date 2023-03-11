import { useStateContext } from '../../context/StateContext';
import MoviesList from 'components/MoviesList';
import Box from 'components/Box';
import { Title, Text, Img } from './UserWatchedPage.styled';

const UserWatchedPage = () => {
  const { watchedMovies } = useStateContext();

  return (
    <Box>
      <Title>Watches movies</Title>
      {watchedMovies.length > 0 ? (
        <MoviesList items={watchedMovies} />
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="10px"
        >
          <Img
            src={process.env.PUBLIC_URL + '/empty.webp'}
            alt="minion"
            width="253"
            height="341"
          />
          <Box>
            <Text>Ouhh... it's empty!</Text>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default UserWatchedPage;
