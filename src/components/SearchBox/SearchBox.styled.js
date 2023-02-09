import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const SearchIcon = styled(BsSearch)`
  width: 30px;
  height: 30px;
  @media screen and (max-width: 767px) {
    width: 25px;
    height: 25px;
  }
`;

export const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 10px;
  padding: 10px;

  @media screen and (max-width: 767px) {
    align-items: center;
    gap: 10px;
  }
`;

export const Input = styled.input`
  text-indent: 5px;
  width: 280px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border: 2px solid #000;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    outline 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.01);
    color: #000;
    outline: 2px solid #000;
    border-radius: 5px;
  }

  @media screen and (max-width: 767px) {
    width: 200px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  background: linear-gradient(#1b1b1b, #111);
  font-weight: 500;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.05);
    color: darkslategrey;
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

  @media screen and (max-width: 767px) {
    padding: 6px 16px;
  }
`;
