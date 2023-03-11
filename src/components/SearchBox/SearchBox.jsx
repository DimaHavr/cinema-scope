import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Wrapper, Input, Button, SearchIcon } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  const [movieName, setMovieName] = useState('');

  const handleSubmit = event => {
    if (movieName.trim() === '') {
      toast.error('The search query is empty, enter the name of the movie...');
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
