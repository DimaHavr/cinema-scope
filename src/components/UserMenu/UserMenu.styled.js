import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';

export const UserIcon = styled(FaUserAlt)`
  width: 20px;
  height: 20px;

  background: transparent;
  border: none;
  z-index: 100;
  fill: #fff;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const LogOutIcon = styled(AiOutlineLogout)`
  width: 35px;
  height: 35px;
  fill: #fff;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.05);
    fill: orangered;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Text = styled(NavLink)`
  display: flex;
  gap: 10px;
  padding: 8px 16px;
  font-weight: 600;
  color: white;
  &:hover,
  &:focus {
    transform: scale(1.05);
    color: orangered;
    ${UserIcon} {
      transform: scale(1.05);
      fill: orangered;
    }
  }
  &.active {
    padding: 8px 16px;
    border-radius: 4px;
    background: linear-gradient(#1b1b1b, #111);
    border: 1px solid #000;
    box-shadow: inset 0 0 0 1px #272727;
    &:hover,
    &:focus {
      transform: scale(1.05);
      color: darkslategrey;
      ${UserIcon} {
        transform: scale(1.05);
        fill: darkslategrey;
      }
    }
  }

  @media screen and (max-width: 480px) {
    padding: 8px 10px;
    font-size: 10px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background: none;
  border: none;
  &:hover,
  &:focus {
    transform: scale(1.05);
    fill: orangered;
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
`;
