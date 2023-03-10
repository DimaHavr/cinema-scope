import { useStateContext } from '../../context/StateContext';
import MoviesList from 'components/MoviesList';
import Box from 'components/Box';
import { Title } from './UserWatchesPage.styled';

const UserWatchesPage = () => {
  const { watchesMovies } = useStateContext();

  return (
    <Box>
      <Title>Watches movies</Title>
      <MoviesList items={watchesMovies} />
    </Box>
  );
};

export default UserWatchesPage;
