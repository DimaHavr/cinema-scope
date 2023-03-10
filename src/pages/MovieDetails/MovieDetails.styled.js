import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RiMovie2Line, RiTeamFill } from 'react-icons/ri';
import { AiFillYoutube } from 'react-icons/ai';
import { MdReviews } from 'react-icons/md';

export const MovieWrapper = styled.div`
  padding: 0px 10px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  animation: slide-in-fwd-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
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

export const Title = styled.h2`
  padding: 10px 0;
  display: flex;
  gap: 10px;
  flex-direction: column-reverse;
  align-items: center;
`;

export const Icon = styled(RiMovie2Line)`
  width: 25px;
  height: 25px;
`;

export const ReviewsIcon = styled(MdReviews)`
  width: 25px;
  height: 25px;
`;

export const CastIcon = styled(RiTeamFill)`
  width: 25px;
  height: 25px;
`;

export const TrailerIcon = styled(AiFillYoutube)`
  width: 25px;
  height: 25px;
`;

export const Img = styled.img`
  border-radius: 5px;
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

export const TextVote = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #000000;
  color: white;
  padding: 10px 12px;
  border-radius: 5px;
  font-size: 16px;
`;

export const Text = styled.p`
  display: flex;
  font-weight: 700;
  font-size: 16px;
  max-width: 600px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;
export const Span = styled.span`
  font-weight: 500;
  font-size: 16px;
`;

export const TextLink = styled(Link)`
  cursor: pointer;
  display: flex;
  text-transform: uppercase;
  align-items: center;
  color: white;
  text-decoration-line: none;
  gap: 5px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.1);
    color: orangered;
  }
`;

export const LinkStyled = styled.a`
  cursor: pointer;
  display: flex;
  text-transform: uppercase;
  align-items: center;
  color: white;
  text-decoration-line: none;
  gap: 5px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.1);
  }
`;

export const LinkBox = styled.div`
  display: flex;
  gap: 25px;
  padding: 20px 0 30px 0;
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  text-transform: uppercase;
  align-items: center;
  color: white;
  text-decoration-line: none;
  gap: 5px;
  background: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.1);
    color: orangered;
  }
`;

export const AddedButton = styled.button`
  height: 46px;
  max-width: 200px;
  cursor: pointer;
  align-self: center;
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  background: linear-gradient(#1b1b1b, #111);
  font-weight: 500;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
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
  width: 200px;
  height: 50px;
  cursor: pointer;
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  background: linear-gradient(#1b1b1b, #111);
  font-weight: 500;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.05);
    color: darkslategrey;
  }
  @media screen and (max-width: 480px) {
    width: 160px;
    height: 40px;
    font-size: 12px;
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
