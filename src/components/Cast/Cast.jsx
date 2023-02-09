import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from 'services/MoviesApi';
import Box from '../Box';
import { List, Item, Img, Text, Span, Subtitle } from './Cast.styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getFetchMovies = async () => {
      try {
        const movieCast = await fetchMovieCast(id);
        setMovieCast(movieCast.cast);
        window.scrollBy(0, 400);
      } catch (error) {
        console.log(error);
      }
    };

    getFetchMovies();
  }, [id]);

  if (!movieCast) {
    return;
  }

  return (
    <Box padding="20px">
      <Subtitle>Cast</Subtitle>
      <List>
        {!movieCast || movieCast.length === 0 ? (
          <Text>Not found</Text>
        ) : (
          movieCast.map(({ cast_id, name, profile_path, character }) => {
            const profilePath = `https://image.tmdb.org/t/p/w500/${profile_path}`;

            return (
              <Item key={cast_id}>
                {profilePath ? (
                  <Img src={profilePath} alt={name} width="200" height="300" />
                ) : (
                  <Text>No Photo</Text>
                )}
                <Text>{name}</Text>
                <Text>
                  Character: <Span>{character}</Span>
                </Text>
              </Item>
            );
          })
        )}
      </List>
    </Box>
  );
};

export default Cast;
