import styled from 'styled-components';
import { BiShowAlt, BiHide } from 'react-icons/bi';
import { MdOutlineMailOutline, MdVpnKey } from 'react-icons/md';

export const EmailIcon = styled(MdOutlineMailOutline)`
  width: 27px;
  height: 27px;
  position: absolute;
  left: 10px;
  top: 36%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  z-index: 100;
  fill: darkslategrey;
`;

export const PassIcon = styled(MdVpnKey)`
  width: 25px;
  height: 25px;
  position: absolute;
  left: 10px;
  top: 33%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  z-index: 100;
  fill: darkslategrey;
`;

export const EyeIcon = styled(BiShowAlt)`
  width: 25px;
  height: 25px;
  fill: #000;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.05);
    fill: darkslategrey;

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
  }
`;

export const EyeOffIcon = styled(BiHide)`
  width: 25px;
  height: 25px;
  fill: #000;
  &:hover,
  &:focus {
    transform: scale(1.05);
    fill: darkslategrey;

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
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const FormInput = styled.input`
  text-indent: 30px;
  width: 300px;
  padding: 10px;
  margin-bottom: 20px;
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
`;

export const FormButton = styled.button`
  width: 100%;
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
`;

export const ShowPasswordContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const ShowPasswordButton = styled.div`
  position: absolute;
  right: 10px;
  top: 38%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
`;
