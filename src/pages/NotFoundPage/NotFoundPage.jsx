import Box from 'components/Box';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Subtitle = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  padding: 20px 0;
  animation: slide-in-fwd-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes slide-in-fwd-center {
    0% {
      -webkit-transform: translateZ(-1400px);
      transform: translateZ(-1400px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }
`;

const TextLInk = styled(Link)`
  color: white;
  text-align: center;
  text-transform: uppercase;
  padding: 30px 0;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: slide-in-fwd-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  &:hover,
  &:focus {
    color: orangered;
  }

  @keyframes btn-animation {
    0% {
      transform: scale(1.05);
    }
    20% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1.13);
    }
  }
  :active {
    animation: btn-animation 1s ease-out;
  }
  @keyframes slide-in-fwd-center {
    0% {
      -webkit-transform: translateZ(-1400px);
      transform: translateZ(-1400px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }
`;

const NotFoundPage = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Subtitle>Not Found Page</Subtitle>
      <img
        src="https://games.24tv.ua/resources/photos/news/202212/2222579.jpg"
        alt="pika face"
        width="400"
        height="200"
      />
      <TextLInk to="/">Go Home</TextLInk>
    </Box>
  );
};
export default NotFoundPage;
