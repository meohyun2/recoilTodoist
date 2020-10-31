import React from 'react';
import {RecoilRoot, atom, selector, useRecoilState, useRecoilValue} from 'recoil';
import ReactTodoist from './View/ReactTodoist';
import styled from 'styled-components';

const App =()=> {
  return(
    <RecoilRoot>
      <Container>
        <ReactTodoist/>
      </Container>
    </RecoilRoot>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
