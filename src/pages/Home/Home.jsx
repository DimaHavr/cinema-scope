import Box from 'components/Box';
import { useState, useEffect } from 'react';
import { Suspense, lazy } from 'react';

import Loader from 'components/Loader';
import { fetchMovies } from 'services/MoviesApi';
import { TextLink, CopyIcon, Title } from './Home.styled';
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
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100vh"
    >
      <Title>20 Most Popular Movies Right Now</Title>
      <Suspense fallback={<Loader />}>
        <MoviesList items={movies} />
      </Suspense>
      <Box
        as="div"
        display="flex"
        alignItems="center"
        marginTop="auto"
        paddingBottom="10px"
      >
        <CopyIcon />
        <TextLink href="https://github.com/DimaHavr">DimaHavr</TextLink>
      </Box>
    </Box>
  );
};

export default Home;
