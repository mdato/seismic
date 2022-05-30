import styled from 'styled-components';

import loader from './loader.gif';

export default function Spinner() {
  return (
    <Container>
      <Img src={loader} alt="loader" />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  z-index: 999999;
  transform: translateX(-21px)
`;

const Img = styled.img`
  width: 42px;
  height: 42px;
  position: absolute;
`;
