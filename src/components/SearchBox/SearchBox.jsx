import { useState } from 'react';
import { Notify } from 'notiflix';
import { Wrapper, Input, Button, SearchIcon } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  const [movieName, setMovieName] = useState('');

  const handleSubmit = event => {
    if (movieName.trim() === '') {
      Notify.failure(
        'Sorry, there are no movies matching your search query. Please try again.'
      );
    }
    event.preventDefault();
    onSubmit(movieName);
    onReset(event);
  };

  const onChangeInput = event => {
    setMovieName(event.target.value);
  };

  const onReset = event => {
    setMovieName('');
    event.target.reset();
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search here..."
        value={movieName}
        onChange={onChangeInput}
      />
      <Button type="submit">
        <SearchIcon />
      </Button>
    </Wrapper>
  );
};
export default SearchBox;
