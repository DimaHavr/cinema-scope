import styled from 'styled-components';

export const Title = styled.h1`
  color: white;
  text-align: center;
  text-transform: uppercase;
  padding: 30px 0;
`;

export const List = styled.ul`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 1;
  justify-content: center;
  gap: 35px;
  list-style-type: none;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex: 1 1 1;
  }
`;

export const Item = styled.li`
  text-decoration: none;
  text-decoration-line: none;
  text-align: center;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: slide-in-fwd-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  :hover,
  :focus {
    border-radius: 10px;
    transform: scale(1.05);
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

export const Img = styled.img`
  border-radius: 5px;
  padding: 10px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: slide-in-fwd-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  :hover,
  :focus {
    transform: scale(1.05);
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

export const Subtitle = styled.h3`
  padding: 10px;
  color: #fff;
  max-width: 230px;
  margin: 0 auto;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: orangered;
  }
`;
