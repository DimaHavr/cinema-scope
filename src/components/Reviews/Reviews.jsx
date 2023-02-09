import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'services/MoviesApi';
import Box from '../Box';
import { List, Text, Link, Item, Subtitle } from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getFetchMovies = async () => {
      try {
        const movieReviews = await fetchMovieReviews(id);
        setMovieReviews(movieReviews.results);
        window.scrollBy(0, 400);
      } catch (error) {
        console.log(error);
      }
    };

    if (!movieReviews) {
      return;
    }

    getFetchMovies();
  }, [id, movieReviews]);

  return (
    <Box padding="20px">
      <Subtitle>Reviews</Subtitle>
      <List>
        {!movieReviews || movieReviews.length === 0 ? (
          <Text>Not found</Text>
        ) : (
          movieReviews.map(({ id, url, content, author }) => {
            return (
              <Item key={id}>
                <Text>
                  Author:
                  <Link
                    onClick={() => {
                      window.scrollBy(0, 200);
                    }}
                    href={url}
                    target="_blank"
                  >
                    @{author}
                  </Link>
                </Text>
                <Text>{content}</Text>
              </Item>
            );
          })
        )}
      </List>
    </Box>
  );
};

export default Reviews;
