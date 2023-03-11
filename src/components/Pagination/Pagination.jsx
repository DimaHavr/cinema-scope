import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

const StyledPagination = styled(Pagination)`
  & .MuiPagination-ul {
    justify-content: center;
  }

  & .MuiPaginationItem-root {
    color: #fffefe;
  }

  & .MuiPaginationItem-page.Mui-selected {
    background-color: #000000;
    color: #fff;
  }

  & .MuiPaginationItem-page:hover {
    background-color: #000000;
  }
`;

const SearchPagination = ({ handleChange, page, totalPages }) => {
  return (
    <Stack spacing={2}>
      <StyledPagination
        variant="outlined"
        shape="rounded"
        count={totalPages}
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default SearchPagination;
