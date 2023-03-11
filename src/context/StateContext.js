import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import useAuth from 'hooks/useAuth';

const database = getDatabase();

const Context = createContext();

export const StateContext = ({ children }) => {
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const { userId, userName } = useAuth();

  useEffect(() => {
    if (userId) {
      const watchedRef = ref(database, `${userName}/${userId}/watchedMovies`);
      const favoritesRef = ref(
        database,
        `${userName}/${userId}/favoriteMovies`
      );

      onValue(watchedRef, snapshot => {
        const data = snapshot.val();
        if (data) {
          const movies = Object.values(data);
          setWatchedMovies(movies.reverse());
        }
      });

      onValue(favoritesRef, snapshot => {
        const data = snapshot.val();
        if (data) {
          const movies = Object.values(data);
          setFavoriteMovies(movies.reverse());
        }
      });
    }
  }, [userId, userName]);

  const addMovieToWatched = movie => {
    if (!userId) {
      toast.error('You must be logged in to add movies');
      return;
    }

    const isInWatched = isMovieInWatched(movie.id, watchedMovies);

    if (isInWatched) {
      toast.success('Movie added to watched');
    } else {
      const newWatchedMovies = [{ ...movie }, ...watchedMovies];
      setWatchedMovies(newWatchedMovies);
      set(
        ref(database, `${userName}/${userId}/watchedMovies`),
        newWatchedMovies
      );
      toast.success('Movie added to watched');
    }
  };

  const removeMovieFromWatched = movie => {
    if (!userId) {
      toast.error('You must be logged in to remove movies');
      return;
    }

    const newWatchedMovies = watchedMovies.filter(item => item.id !== movie.id);

    setWatchedMovies(newWatchedMovies);
    set(ref(database, `${userName}/${userId}/watchedMovies`), newWatchedMovies);
    toast.success('Movie removed from watched', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  const addMovieToFavorites = movie => {
    if (!userId) {
      toast.error('You must be logged in to add movies');
      return;
    }

    const isInFavorites = isMovieInFavorites(movie.id, favoriteMovies);

    if (isInFavorites) {
      toast.success('Movie already in favorites');
    } else {
      const newFavoriteMovies = [{ ...movie }, ...favoriteMovies];
      setFavoriteMovies(newFavoriteMovies);
      set(
        ref(database, `${userName}/${userId}/favoriteMovies`),
        newFavoriteMovies
      );
      toast.success('Movie added to favorites');
    }
  };

  const removeMovieFromFavorites = movie => {
    const newFavoriteMovies = favoriteMovies.filter(
      item => item.id !== movie.id
    );

    setFavoriteMovies(newFavoriteMovies);
    set(
      ref(database, `${userName}/${userId}/favoriteMovies`),
      newFavoriteMovies
    );
    toast.success('Movie removed from favorites', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  const isMovieInWatched = (productId, watchedMovies) => {
    return watchedMovies.some(item => item.id === productId);
  };

  const isMovieInFavorites = (productId, favoriteMovies) => {
    return favoriteMovies.some(item => item.id === productId);
  };

  return (
    <Context.Provider
      value={{
        addMovieToWatched,
        removeMovieFromWatched,
        addMovieToFavorites,
        removeMovieFromFavorites,
        watchedMovies,
        favoriteMovies,
        isMovieInWatched,
        isMovieInFavorites,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
