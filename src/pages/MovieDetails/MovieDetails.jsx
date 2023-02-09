import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchMovieDetails } from 'services/MoviesApi';
import {
  Title,
  Img,
  Text,
  TextLink,
  TextVote,
  Span,
  Icon,
  ReviewsIcon,
  LinkBox,
  CastIcon,
  MovieWrapper,
} from './MovieDetails.styled';
import BackLink from '../../components/BackLink';
import Box from 'components/Box';
import Loader from 'components/Loader';

const MovieDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const backLinkHref = location.state?.from ?? '/';
  const { title, overview, release_date, poster_path, vote_average } = movies;
  const posterPath = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  useEffect(() => {
    const getFetchMovies = async () => {
      try {
        const movies = await fetchMovieDetails(id);
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    getFetchMovies();
  }, [id]);

  return (
    <main>
      <Box as="section" paddingTop="20px" textAlign="center">
        <Box display="flex" flexDirection="column" alignItems="center">
          <BackLink to={backLinkHref}>Back to movies</BackLink>
          <MovieWrapper>
            {poster_path ? (
              <Img src={posterPath} width="300" height="450" alt="" />
            ) : (
              <p>Poster not found</p>
            )}
            <Box display="flex" flexDirection="column" alignItems="center">
              <Title>
                {title ? title : <p>Not info</p>}
                {vote_average && (
                  <TextVote>
                    <Icon />
                    {vote_average.toFixed(1)}
                  </TextVote>
                )}
              </Title>
              {release_date && (
                <Text>
                  Release date: <Span>{release_date}</Span>
                </Text>
              )}
              {overview && (
                <Text>
                  Overview: <br /> <Span>{overview}</Span>
                </Text>
              )}
              <LinkBox display="flex" gap="30">
                <TextLink to="cast" state={{ from: backLinkHref }}>
                  <CastIcon /> Cast
                </TextLink>
                <TextLink to="reviews" state={{ from: backLinkHref }}>
                  <ReviewsIcon /> Reviews
                </TextLink>
              </LinkBox>
            </Box>
          </MovieWrapper>
        </Box>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
    </main>
  );
};

export default MovieDetails;
