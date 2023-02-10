import styled from 'styled-components';

export const TrailerIframe = styled.iframe`
  padding: 20px;
  width: 640px;
  height: 480px;
  @media screen and (max-width: 480px) {
    padding: 0px;
    padding-bottom: 20px;
    width: 320px;
    height: 240px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1200;
  animation: puff-in-center 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  @-webkit-keyframes puff-in-center {
    0% {
      -webkit-transform: scale(2);
      transform: scale(2);
      -webkit-filter: blur(4px);
      filter: blur(4px);
      opacity: 0;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes puff-in-center {
    0% {
      -webkit-transform: scale(2);
      transform: scale(2);
      -webkit-filter: blur(4px);
      filter: blur(4px);
      opacity: 0;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
`;

export const ModalBox = styled.div`
  max-width: calc(100vw);
  max-height: calc(100vh);
`;
