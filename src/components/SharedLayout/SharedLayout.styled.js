import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { GiFilmSpool } from 'react-icons/gi';

export const CinemaIcon = styled(GiFilmSpool)`
  width: 45px;
  height: 45px;
  color: #fff;
  margin-right: 5px;
  animation: rotate-scale-up-ver 3s ease-in-out both;

  @keyframes rotate-scale-up-ver {
    0% {
      -webkit-transform: scale(1) rotateY(0);
      transform: scale(1) rotateY(0);
    }
    50% {
      -webkit-transform: scale(1.2) rotateY(360deg);
      transform: scale(1.2) rotateY(360deg);
    }
    100% {
      -webkit-transform: scale(1) rotateY(360deg);
      transform: scale(1) rotateY(360deg);
    }
  }
`;

export const Header = styled.header`
  padding: 20px 0px;
  display: flex;
  justify-content: space-around;
  background-color: #00000082;
  text-align: center;
  width: 100%;
  align-items: flex-start;
  @media screen and (max-width: 480px) {
    padding: 10px 0px;
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 480px) {
    gap: 5px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.05);
    color: orangered;
  }

  &.active {
    color: darkslategrey;
    background: linear-gradient(#1b1b1b, #111);
    border: 1px solid #000;
    box-shadow: inset 0 0 0 1px #272727;
    :hover,
    :focus {
      transform: scale(1.05);
    }
  }
  @media screen and (max-width: 480px) {
    padding: 8px 10px;
    font-size: 10px;
  }
`;

export const GlitchWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Glitch = styled.h1`
  position: relative;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  letter-spacing: 5px;
  z-index: 1;

  &:before,
  &:after {
    display: block;
    content: attr(data-glitch);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
    animation: glitch-color 2s ease-in-out both infinite;
  }

  &:before {
    color: #000000;
    z-index: -1;
  }

  &:after {
    color: darkslategrey;
    z-index: -2;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Keyframes = styled.style`
  @keyframes glitch-color {
    0% {
      transform: translate(0);
    }

    20% {
      transform: translate(-5px, 5px);
    }

    40% {
      transform: translate(-5px, -5px);
    }

    60% {
      transform: translate(5px, 5px);
    }

    80% {
      transform: translate(5px, -5px);
    }

    to {
      transform: translate(0);
    }
  }
`;
