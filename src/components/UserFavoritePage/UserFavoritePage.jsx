import { useStateContext } from '../../context/StateContext';
import MoviesList from 'components/MoviesList';
import { Title } from './UserFavoritePage.styled';
import Box from 'components/Box';

const UserFavoritePage = () => {
  const { favoriteMovies } = useStateContext();

  return (
    <Box>
      <Title>Favorite movies</Title>
      <MoviesList items={favoriteMovies} />
    </Box>
  );
};

export default UserFavoritePage;
