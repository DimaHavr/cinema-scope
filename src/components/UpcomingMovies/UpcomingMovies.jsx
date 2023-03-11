import { useState, useEffect, Suspense, lazy } from 'react';
import Loader from 'components/Loader';
import { fetchUpcomingMovies } from 'services/MoviesApi';
import { Title } from './UpcomingMovies.styled';
const MoviesList = lazy(() => import('components/MoviesList'));

const UpcomingMovies = () => {
  const [preLoader, setPreLoader] = useState(false);
  const [moviesArray, setMoviesArray] = useState(false);

  useEffect(() => {
    const getFetchMovies = async () => {
      setPreLoader(true);
      try {
        const moviesArray = await fetchUpcomingMovies();
        setPreLoader(false);
        setMoviesArray(moviesArray.results);
      } catch (error) {
        console.log(error);
        setPreLoader(false);
      }
    };

    getFetchMovies();
  }, []);

  return (
    <div>
      {!preLoader && (
        <>
          <Title>Upcoming movies in theatres</Title>
          {moviesArray && (
            <Suspense fallback={<Loader />}>
              <MoviesList items={moviesArray} />
            </Suspense>
          )}
        </>
      )}
    </div>

    //  <Swiper
    //    spaceBetween={10}
    //    slidesPerView={image.length === 2 ? 2 : 3}
    //    pagination={{ clickable: true, dynamicBullets: true }}
    //    modules={[Pagination]}
    //  >
    //    {image?.map((item, i) =>
    //      image.length === 1 ? (
    //        <SmallImage
    //          key={i}
    //          src={item}
    //          selected={i === index}
    //          onMouseEnter={() => setIndex(i)}
    //        />
    //      ) : (
    //        <SwiperSlide key={i}>
    //          <SmallImage
    //            src={item}
    //            selected={i === index}
    //            onClick={() => setIndex(i)}
    //          />
    //        </SwiperSlide>
    //      )
    //    )}
    //  </Swiper>
  );
};

export default UpcomingMovies;
