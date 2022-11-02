import styled, { keyframes } from 'styled-components';

const Home = styled.header`
   width: 100vw;
   height: 100vh;
   overflow: hidden;
   z-index: -1;
`;

const HeaderContainer = styled.div`
   width: 100vw;
   height: 100vh;
   overflow-y: hidden;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const Image = styled.img`
   width: 450px;
   height: auto;
   transform: scale(3.03);
`;

const scaleDown1 = keyframes`
0% {
    transform: scale(3.03);
  }
  100% {
      transform: scale(2.525);
  }
`;

const scaleDown2 = keyframes`
0% {
    transform: scale(2.525);
  }
  100% {
      transform: scale(2.02);
  }
`;

const scaleDown3 = keyframes`
0% {
    transform: scale(2.02);
  }
  100% {
      transform: scale(1.515);
  }
`;

const scaleDown4 = keyframes`
0% {
    transform: scale(1.515);
  }
  100% {
      transform: scale(1.01);
  }
`;

const scaleDown5 = keyframes`
0% {
    transform: scale(1.01);
  }
  100% {
      transform: scale(0.505);
  }
`;

const scaleDown6 = keyframes`
0% {
    transform: scale(0.505);
  }
  100% {
      transform: scale(0);
  }
`;

export { Home, HeaderContainer, Image, scaleDown1, scaleDown2, scaleDown3, scaleDown4, scaleDown5, scaleDown6 };