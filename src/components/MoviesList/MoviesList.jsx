import { useLocation } from 'react-router-dom';
import {
  List,
  Item,
  Img,
  Subtitle,
  IconBox,
  FavoriteIcon,
  UnFavoriteIcon,
  WatchedIcon,
  UnWatchedIcon,
} from './MoviesList.styled';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../context/StateContext';
import useAuth from '../../hooks/useAuth';

const MoviesList = ({ items }) => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  const {
    addMovieToWatched,
    addMovieToFavorites,
    removeMovieFromWatched,
    removeMovieFromFavorites,
    watchedMovies,
    favoriteMovies,
    isMovieInWatched,
    isMovieInFavorites,
  } = useStateContext();

  return (
    <List>
      {items &&
        items.map(item => {
          const { id, title, name, poster_path } = item;
          const isInWatched = isMovieInWatched(id, watchedMovies);
          const isInFavorites = isMovieInFavorites(id, favoriteMovies);
          const posterPath = `https://image.tmdb.org/t/p/w500/${poster_path}`;
          return (
            <Item key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <Img
                  src={posterPath}
                  alt={title ?? name}
                  width="250"
                  height="350"
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = process.env.PUBLIC_URL + '/empty.webp';
                  }}
                />
                <Subtitle>{title ?? name}</Subtitle>
              </Link>
              {isLoggedIn && (
                <IconBox>
                  {!isInFavorites ? (
                    <UnFavoriteIcon onClick={() => addMovieToFavorites(item)} />
                  ) : (
                    <FavoriteIcon
                      onClick={() => removeMovieFromFavorites(item)}
                    />
                  )}
                  {!isInWatched ? (
                    <WatchedIcon onClick={() => addMovieToWatched(item)} />
                  ) : (
                    <UnWatchedIcon
                      onClick={() => removeMovieFromWatched(item)}
                    />
                  )}
                </IconBox>
              )}
            </Item>
          );
        })}
    </List>
  );
};

export default MoviesList;
