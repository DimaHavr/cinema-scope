import { useStateContext } from '../../context/StateContext';
import MoviesList from 'components/MoviesList';

const UserFavoritePage = () => {
  const { favoriteMovies } = useStateContext();

  return <MoviesList items={favoriteMovies} />;
};

export default UserFavoritePage;
