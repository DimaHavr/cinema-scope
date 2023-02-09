import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/MoviesApi';
import { List, ItemLink, Img, Subtitle } from './MoviesList.styled';

const MoviesList = () => {
  const [movies, setMovies] = useState();

  const getFetchMovies = async () => {
    try {
      const movies = await fetchMovies();
      setMovies(movies.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFetchMovies();
  }, []);

  return (
    <main>
      <List>
        {movies &&
          movies.map(({ id, title, name, poster_path }) => {
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
