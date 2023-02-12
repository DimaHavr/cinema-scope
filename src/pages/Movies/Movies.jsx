import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { fetchSearchMovie } from 'services/MoviesApi';
import { Notify } from 'notiflix';
import Box from 'components/Box';
import Loader from 'components/Loader';
import SearchBox from 'components/SearchBox';
import SearchPagination from 'components/SearchPagination';
import { List, BoxLink, Item, Img, Subtitle } from './Movie.styled';

const Movies = () => {
  const location = useLocation();
  const [preLoader, setPreLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const listRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('searchQuery')) ??
      searchParams.get('query') ??
      ''
    );
  });
  const [moviesArray, setMoviesArray] = useState(() => {
    return JSON.parse(window.localStorage.getItem('moviesArray')) ?? [];
  });
  const [page, setPage] = useState(() => {
    return JSON.parse(window.localStorage.getItem('page')) ?? 1;
  });
  const [totalPages, setTotalPages] = useState(() => {
    return JSON.parse(window.localStorage.getItem('totalPages')) ?? 0;
  });

  const setLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  useEffect(() => {
    setLocalStorage('totalPages', totalPages);
    setLocalStorage('page', page);
    setLocalStorage('moviesArray', moviesArray);
    setLocalStorage('searchQuery', searchQuery);
  }, [totalPages, page, moviesArray, searchQuery]);

  useEffect(() => {
    const getFetchSearchListMovies = async () => {
      setPreLoader(true);
      try {
        const moviesArray = await fetchSearchMovie(searchQuery, page);
        const totalMovies = moviesArray.total_results;
        setTotalPages(moviesArray.total_pages);
        if (totalMovies === 0) {
          Notify.failure(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
          setSearchQuery('');
        }
        setPreLoader(false);
        setMoviesArray(moviesArray.results);
      } catch (error) {
        console.log(error);
        setPreLoader(false);
      }
    };
    if (!searchQuery) {
      return;
    }
    getFetchSearchListMovies();
  }, [searchQuery, page]);

  const handleChange = (event, value) => {
    setPage(value);
    listRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputSubmit = value => {
    setSearchQuery(value);
    setSearchParams(value !== '' ? { query: value } : '');
    setMoviesArray([]);
    setPage(1);
    setTotalPages(0);
    localStorage.clear();
  };

  return (
    <main>
      <Box ref={listRef} as="section" paddingTop="20px">
        <Box>
          <SearchBox onSubmit={handleInputSubmit} />
          {preLoader && <Loader />}
          {!preLoader && (
            <>
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
                <SearchPagination
                  totalPages={totalPages}
                  page={page}
                  handleChange={handleChange}
                />
              )}
            </>
          )}
        </Box>
      </Box>
    </main>
  );
};

export default Movies;
