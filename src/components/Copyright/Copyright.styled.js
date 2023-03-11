import styled from 'styled-components';
import { CgCopyright } from 'react-icons/cg';

export const CopyIcon = styled(CgCopyright)`
  width: 35px;
  height: 35px;
  color: #fff;
  margin-right: 5px;
`;

export const Title = styled.h1`
  color: white;
  text-align: center;
  text-transform: uppercase;
  padding: 30px 0;
`;

export const Text = styled.p`
  max-width: 600px;
  font-weight: bold;
  font-size: 15px;
  padding: 10px;
  text-align: center;
  color: #e0e0e0;
  letter-spacing: 1px;
`;

export const TextLink = styled.a`
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  color: #e0e0e0;
  letter-spacing: 1px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.05);
    color: orangered;
  }
`;
