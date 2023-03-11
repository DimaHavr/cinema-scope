import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchMovieDetails } from 'services/MoviesApi';
import useAuth from '../../hooks/useAuth';
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
  Button,
  TrailerIcon,
  AddedButton,
} from './MovieDetails.styled';
import BackLink from '../../components/BackLink';
import Box from 'components/Box';
import Loader from 'components/Loader';
import Trailer from 'components/Trailer';
import { useStateContext } from '../../context/StateContext';

const MovieDetails = () => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  const [movie, setMovie] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const backLinkHref = location.state?.from ?? '/';
  const { title, overview, release_date, poster_path, vote_average } = movie;
  const posterPath = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const {
    addMovieToWatched,
    addMovieToFavorites,
    removeMovieFromWatched,
    removeMovieFromFavorites,
    watchedMovies,
    favoriteMovies,
    isMovieInWatched,
    isMovieInFavorites,
  } = useStateContext();
  const isInWatched = isMovieInWatched(movie.id, watchedMovies);
  const isInFavorites = isMovieInFavorites(movie.id, favoriteMovies);

  useEffect(() => {
    const getFetchMovies = async () => {
      try {
        const movie = await fetchMovieDetails(id);
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    };
    getFetchMovies();
  }, [id]);

  const onToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <main>
      <Box as="section" paddingTop="20px" textAlign="center">
        <Box display="flex" flexDirection="column" alignItems="center">
          <BackLink to={backLinkHref}>Go to back</BackLink>
          <MovieWrapper>
            {poster_path ? (
              <Img src={posterPath} width="300" height="450" alt="" />
            ) : (
              <p>Poster not found</p>
            )}
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gridGap="10px"
            >
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
              {isLoggedIn && (
                <Box display="flex" gridGap="15px">
                  {!isInWatched ? (
                    <AddedButton onClick={() => addMovieToWatched(movie)}>
                      Add to watched
                    </AddedButton>
                  ) : (
                    <AddedButton onClick={() => removeMovieFromWatched(movie)}>
                      Remove from watched
                    </AddedButton>
                  )}

                  {!isInFavorites ? (
                    <AddedButton onClick={() => addMovieToFavorites(movie)}>
                      Add to favorites
                    </AddedButton>
                  ) : (
                    <AddedButton
                      onClick={() => removeMovieFromFavorites(movie)}
                    >
                      Remove from favorites
                    </AddedButton>
                  )}
                </Box>
              )}
              <LinkBox display="flex" gap="30">
                <TextLink to="cast" state={{ from: backLinkHref }}>
                  <CastIcon /> Cast
                </TextLink>
                <TextLink to="reviews" state={{ from: backLinkHref }}>
                  <ReviewsIcon /> Reviews
                </TextLink>
                <Button onClick={() => onToggleModal()}>
                  <TrailerIcon /> Trailer
                </Button>
              </LinkBox>
            </Box>
          </MovieWrapper>
          {showModal && <Trailer onToggleModal={onToggleModal} />}
        </Box>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
    </main>
  );
};

export default MovieDetails;
