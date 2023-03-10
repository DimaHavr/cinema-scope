import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import useAuth from 'hooks/useAuth';

const database = getDatabase();

const Context = createContext();

export const StateContext = ({ children }) => {
  const [watchesMovies, setWatchesMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const { userId, userName } = useAuth();

  useEffect(() => {
    if (userId) {
      const watchesRef = ref(database, `${userName}/${userId}/watchesMovies`);
      const favoritesRef = ref(
        database,
        `${userName}/${userId}/favoriteMovies`
      );

      onValue(watchesRef, snapshot => {
        const data = snapshot.val();
        if (data) {
          const movies = Object.values(data);
          setWatchesMovies(movies.reverse());
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

  const addMovieToWatches = movie => {
    if (!userId) {
      toast.error('You must be logged in to add movies');
      return;
    }

    const isInWatches = isMovieInWatches(movie.id, watchesMovies);

    if (isInWatches) {
      toast.success('Movie added to watches');
    } else {
      const newWatchesMovies = [{ ...movie }, ...watchesMovies];
      setWatchesMovies(newWatchesMovies);
      set(
        ref(database, `${userName}/${userId}/watchesMovies`),
        newWatchesMovies
      );
      toast.success('Movie added to watches');
    }
  };

  const removeMovieFromWatches = movie => {
    if (!userId) {
      toast.error('You must be logged in to remove movies');
      return;
    }

    const newWatchesMovies = watchesMovies.filter(item => item.id !== movie.id);

    setWatchesMovies(newWatchesMovies);
    set(ref(database, `${userName}/${userId}/watchesMovies`), newWatchesMovies);
    toast.success('Movie removed from watches', {
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

  const isMovieInWatches = (productId, watchesMovies) => {
    return watchesMovies.some(item => item.id === productId);
  };

  const isMovieInFavorites = (productId, favoriteMovies) => {
    return favoriteMovies.some(item => item.id === productId);
  };

  return (
    <Context.Provider
      value={{
        addMovieToWatches,
        removeMovieFromWatches,
        addMovieToFavorites,
        removeMovieFromFavorites,
        watchesMovies,
        favoriteMovies,
        isMovieInWatches,
        isMovieInFavorites,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
