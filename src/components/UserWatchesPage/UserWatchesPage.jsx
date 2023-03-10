import { useStateContext } from '../../context/StateContext';
import MoviesList from 'components/MoviesList';

const UserWatchesPage = () => {
  const { watchesMovies } = useStateContext();

  return <MoviesList items={watchesMovies} />;
};

export default UserWatchesPage;
