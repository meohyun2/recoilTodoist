import React from 'react';
import styled from 'styled-components';

import Editor from '../Components/Editor';
import CardList from '../Components/CardList';
import GarbageList from '../Components/TrashList';
import RecentDateAlert from '../Components/RecentDateAlert';

const ReactTodoist =()=> {
  return(
    <>
      <Container>
        <Editor/>
        <Wrapper>
          <GarbageList/>
          <CardList/>
        </Wrapper>
        <RecentDateAlert/>
      </Container>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default ReactTodoist;