import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieTrailer } from 'services/MoviesApi';
import { TrailerIframe, Overlay, ModalBox } from './Trailer.styled';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

const Trailer = ({ onToggleModal }) => {
  const [trailerKey, setTrailerKey] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getFetchMovies = async () => {
      try {
        const movieTrailer = await fetchMovieTrailer(id);
        const movieTrailerLength =
          movieTrailer.results[movieTrailer.results.length - 1];
        setTrailerKey(movieTrailerLength.key);
      } catch (error) {
        console.log(error);
      }
    };

    if (!trailerKey) {
      return;
    }

    getFetchMovies();
  }, [id, trailerKey]);

  const onBackdropCloseModal = event => {
    if (event.target === event.currentTarget) {
      onToggleModal();
    }
  };

  useEffect(() => {
    const onCloseModal = event => {
      if (event.code === 'Escape') {
        onToggleModal();
      }
    };

    window.addEventListener('keydown', onCloseModal);

    return () => {
      window.removeEventListener('keydown', onCloseModal);
    };
  }, [onToggleModal]);

  const trailerLink = `https://www.youtube.com/embed/${trailerKey}`;

  return createPortal(
    <Overlay onClick={onBackdropCloseModal}>
      <ModalBox>
        <TrailerIframe
          width="375"
          height="478"
          src={trailerLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </ModalBox>
    </Overlay>,
    modalRoot
  );
};

export default Trailer;
