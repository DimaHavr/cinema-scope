import { useLocation } from 'react-router-dom';
import { List, Item, Img, Subtitle } from './MoviesList.styled';
import { Link } from 'react-router-dom';

const MoviesList = ({ items }) => {
  const location = useLocation();

  const handleImageError = e => {
    e.target.src = '/public/empty.webp';
  };

  return (
    <List>
      {items &&
        items.map(({ id, title, name, poster_path }) => {
          const posterPath = `https://image.tmdb.org/t/p/w500/${poster_path}`;
          return (
            <Item key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <Img
                  src={posterPath}
                  alt=""
                  width="250"
                  height="350"
                  onError={handleImageError}
                />
                <Subtitle> {title ?? name}</Subtitle>
              </Link>
            </Item>
          );
        })}
    </List>
  );
};

export default MoviesList;
