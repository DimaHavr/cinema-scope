import { useState, useEffect, Suspense, lazy, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'services/MoviesApi';
import { toast } from 'react-hot-toast';
import Box from 'components/Box';
import Loader from 'components/Loader';
import SearchBox from 'components/SearchBox';
import Pagination from 'components/Pagination';
import Copyright from 'components/Copyright/Copyright';
const MoviesList = lazy(() => import('components/MoviesList'));
const UpcomingMovies = lazy(() => import('components/UpcomingMovies'));

const Movies = () => {
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
          toast.error(
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
      <Box
        ref={listRef}
        as="section"
        paddingTop="20px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="100vh"
      >
        <Box paddingBottom=" 20px">
          <SearchBox onSubmit={handleInputSubmit} />
          {preLoader && <Loader />}
          {moviesArray.length === 0 ? (
            <UpcomingMovies />
          ) : (
            !preLoader && (
              <>
                {moviesArray && (
                  <Suspense fallback={<Loader />}>
                    <MoviesList items={moviesArray} />
                  </Suspense>
                )}
                {totalPages > 1 && (
                  <Pagination
                    totalPages={totalPages}
                    page={page}
                    handleChange={handleChange}
                  />
                )}
              </>
            )
          )}
        </Box>
        <Copyright />
      </Box>
    </main>
  );
};

export default Movies;
