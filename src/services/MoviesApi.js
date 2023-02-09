import axios from 'axios';

async function fetchMovies() {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=b1c3a2089fd706f08956c6d7f55cc574`;

  const response = await axios.get(url);
  return response.data;
}

const fetchMovieDetails = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=b1c3a2089fd706f08956c6d7f55cc574&language=en-US`
  );
  return response.data;
};

const fetchMovieCast = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=b1c3a2089fd706f08956c6d7f55cc574&language=en-US`
  );
  return response.data;
};

const fetchMovieReviews = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=b1c3a2089fd706f08956c6d7f55cc574&language=en-US&page=1`
  );
  return response.data;
};

const fetchSearchMovie = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=b1c3a2089fd706f08956c6d7f55cc574&language=en-US&page=1&query=${query}`
  );
  return response.data;
};

export {
  fetchMovies,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
  fetchSearchMovie,
};
