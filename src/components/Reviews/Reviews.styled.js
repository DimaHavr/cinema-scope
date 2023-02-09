import styled from 'styled-components';

export const Subtitle = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 36px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0 5px 30px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  justify-content: center;
  list-style-type: none;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
  }
`;

export const Text = styled.p`
  gap: 10px;
  padding: 10px;
  text-align: start;
  max-width: 600px;
`;
export const Link = styled.a`
  text-decoration-line: none;
  font-weight: 500;
  font-size: 16px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
