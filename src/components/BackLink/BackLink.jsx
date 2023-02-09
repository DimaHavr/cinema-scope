import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 20px 0;
  color: white;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: orangered;
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

export default BackLink;
