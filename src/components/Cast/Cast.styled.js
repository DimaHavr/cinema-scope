import styled from 'styled-components';

export const List = styled.ul`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 1;
  justify-content: center;
  gap: 35px;
  list-style-type: none;
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
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex: 1 1 1;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 36px;
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

export const Text = styled.p`
  display: flex;
  font-weight: 700;
  font-size: 16px;
  max-width: 200px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;
export const Span = styled.span`
  font-weight: 500;
  font-size: 16px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
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
