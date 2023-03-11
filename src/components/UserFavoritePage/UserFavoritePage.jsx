import { useStateContext } from '../../context/StateContext';
import MoviesList from 'components/MoviesList';
import { Title, Text, Img } from './UserFavoritePage.styled';
import Box from 'components/Box';

const UserFavoritePage = () => {
  const { favoriteMovies } = useStateContext();
  return (
    <Box>
      <Title>Favorite movies</Title>
      {favoriteMovies.length > 0 ? (
        <MoviesList items={favoriteMovies} />
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

export default UserFavoritePage;
