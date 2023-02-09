import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const ItemLink = styled(Link)`
  text-decoration: none;
  text-decoration-line: none;
  text-align: center;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    transform: scale(1.05);
  }
`;
export const Img = styled.img`
  border-radius: 5px;
  padding: 10px;
`;

export const Subtitle = styled.h3`
  padding: 10px;
  color: #fff;
  max-width: 230px;
  margin: 0 auto;

  :hover,
  :focus {
    color: orangered;
  }
`;
