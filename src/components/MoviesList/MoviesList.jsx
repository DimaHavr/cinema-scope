import { List, ItemLink, Img, Subtitle } from './MoviesList.styled';

const MoviesList = ({ items }) => {
  return (
    <main>
      <List>
        {items &&
          items.map(({ id, title, name, poster_path }) => {
            const posterPath = `https://image.tmdb.org/t/p/w500/${poster_path}`;
            return (
              <ItemLink key={id} to={`/movies/${id}`}>
                <Img src={posterPath} alt="" width="250" height="350" />
                <Subtitle> {title ?? name}</Subtitle>
              </ItemLink>
            );
          })}
      </List>
    </main>
  );
};

export default MoviesList;
