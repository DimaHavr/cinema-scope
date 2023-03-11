import Box from 'components/Box';
import { TextLink, CopyIcon } from './Copyright.styled';
const Copyright = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      marginTop="auto"
      paddingBottom="10px"
    >
      <CopyIcon />
      <TextLink href="https://github.com/DimaHavr">DimaHavr</TextLink>
    </Box>
  );
};

export default Copyright;
