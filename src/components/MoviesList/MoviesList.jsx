import { useLocation } from 'react-router-dom';
import { List, Item, Img, Subtitle } from './MoviesList.styled';
import { Link } from 'react-router-dom';

const MoviesList = ({ items }) => {
  const location = useLocation();

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
            </Item>
          );
        })}
    </List>
  );
};

export default MoviesList;
