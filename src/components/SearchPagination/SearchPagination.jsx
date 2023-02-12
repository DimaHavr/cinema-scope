import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

const SearchPagination = ({ handleChange, page, totalPages }) => {
  return (
    <Stack spacing={2}>
      <Pagination
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          paddingBottom: '50px',
          '& .css-wjh20t-MuiPagination-ul': {
            gap: '5px',
          },
          '& .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root': {
            color: '#fff',
            borderColor: '#fff',
          },
          '& .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected':
            {
              backgroundColor: '#000',
            },
          '& .css-1v2lvtn-MuiPaginationItem-root': {
            color: '#fff',
          },
        }}
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
