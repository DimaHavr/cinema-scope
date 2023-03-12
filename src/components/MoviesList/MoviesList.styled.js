import styled from 'styled-components';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { BsEye, BsEyeFill } from 'react-icons/bs';

export const FavoriteIcon = styled(MdFavorite)`
  width: 30px;
  fill: orangered;
  height: 30px;
  padding: 5px;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.1);
    fill: #fff;
  }
`;
export const UnFavoriteIcon = styled(MdFavoriteBorder)`
  width: 30px;
  height: 30px;
  padding: 5px;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.1);
    color: orangered;
  }
`;
export const WatchedIcon = styled(BsEye)`
  width: 30px;
  height: 30px;
  padding: 5px;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.1);
    fill: orangered;
  }
`;
export const UnWatchedIcon = styled(BsEyeFill)`
  width: 30px;
  height: 30px;
  padding: 5px;
  cursor: pointer;
  fill: orangered;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.1);
    fill: #fff;
  }
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
  position: relative;
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

export const IconBox = styled.div`
  position: absolute;
  align-items: center;
  top: 15px;
  left: 15px;
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
