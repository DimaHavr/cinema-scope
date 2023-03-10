import { useLocation } from 'react-router-dom';
import { List, ItemLink, Img, Subtitle } from './MoviesList.styled';

const MoviesList = ({ items }) => {
  const location = useLocation();

  const handleImageError = e => {
    e.target.src =
      'https://games.24tv.ua/resources/photos/news/202212/2222579.jpg';
  };

  return (
    <main>
      <List>
        {items &&
          items.map(({ id, title, name, poster_path }) => {
            const posterPath = `https://image.tmdb.org/t/p/w500/${poster_path}`;
            return (
              <ItemLink
                key={id}
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                <Img
                  src={posterPath}
                  alt=""
                  width="250"
                  height="350"
                  onError={handleImageError}
                />
                <Subtitle> {title ?? name}</Subtitle>
              </ItemLink>
            );
          })}
      </List>
    </main>
  );
};

export default MoviesList;
