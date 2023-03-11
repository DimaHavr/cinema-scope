import Box from 'components/Box';
import { useState, useEffect, Suspense, lazy } from 'react';
import Loader from 'components/Loader';
import { fetchMovies } from 'services/MoviesApi';
import { Title } from './Home.styled';
import Copyright from 'components/Copyright/Copyright';
const MoviesList = lazy(() => import('components/MoviesList'));

const Home = () => {
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
    <Box
      as="main"
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100vh"
    >
      <Title>20 Most Popular Movies Right Now</Title>
      <Suspense fallback={<Loader />}>
        <MoviesList items={movies} />
      </Suspense>
      <Copyright />
    </Box>
  );
};

export default Home;
