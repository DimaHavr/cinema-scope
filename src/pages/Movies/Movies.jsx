import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSearchMovie } from 'services/MoviesApi';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import Box from 'components/Box';
import Loader from 'components/Loader';
import Stack from '@mui/material/Stack';
import SearchBox from 'components/SearchBox';
import Pagination from '@mui/material/Pagination';
import { List, BoxLink, Item, Img, Subtitle } from './Movie.styled';

const Movies = () => {
  const location = useLocation();
  const [moviesArray, setMoviesArray] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [preLoader, setPreLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    const getFetchSearchListMovies = async () => {
      setPreLoader(true);
      try {
        const moviesArray = await fetchSearchMovie(movieName, page);
        const totalMovies = moviesArray.total_results;
        setTotalPages(moviesArray.total_pages);
        if (totalMovies === 0) {
          Notify.failure(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        }
        setPreLoader(false);
        setMoviesArray(moviesArray.results);
      } catch (error) {
        console.log(error);
        setPreLoader(false);
      }
    };
    if (!movieName) {
      return;
    }
    getFetchSearchListMovies();
  }, [movieName, page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleInputSubmit = value => {
    setSearchParams(value !== '' ? { query: value } : '');
    setPage(1);
  };

  return (
    <main>
      <Box as="section" paddingTop="20px">
        <Box>
          <SearchBox onSubmit={handleInputSubmit} />
          {preLoader && <Loader />}
          <List>
            {moviesArray &&
              moviesArray.map(({ id, title, poster_path }) => {
                const posterPath = `https://image.tmdb.org/t/p/w500/${poster_path}`;
                return (
                  <Item key={id}>
                    <BoxLink to={`${id}`} state={{ from: location }}>
                      <Img
                        src={posterPath}
                        alt={title}
                        width="300"
                        height="450"
                      />
                      <Subtitle>{title}</Subtitle>
                    </BoxLink>
                  </Item>
                );
              })}
          </List>
          {totalPages > 1 && (
            <Stack spacing={2}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={handleChange}
              />
            </Stack>
          )}
        </Box>
      </Box>
    </main>
  );
};

export default Movies;
