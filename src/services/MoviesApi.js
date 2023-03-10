import axios from 'axios';
const API_KEY = 'b1c3a2089fd706f08956c6d7f55cc574';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchMovies() {
  const url = `${BASE_URL}/trending/all/day?api_key=${API_KEY}`;

  const response = await axios.get(url);
  return response.data;
}

const fetchMovieDetails = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

const fetchMovieCast = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

const fetchMovieReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};

const fetchSearchMovie = async (query, page) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${query}`
  );
  return response.data;
};

const fetchMovieTrailer = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export {
  fetchMovies,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
  fetchSearchMovie,
  fetchMovieTrailer,
};
